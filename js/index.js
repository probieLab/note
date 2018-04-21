const height = window.innerHeight;
const width = window.innerWidth;
const ipAddress = '127.0.0.1:3010';
document.querySelector('.container').style.height = height - 5 + 'px';
function ajax(method, url, data, callback) {
	const xmlHTTP = new XMLHttpRequest();
	xmlHTTP.open(method, url, true);
	xmlHTTP.setRequestHeader("Content-type", "application/json;charset=UTF-8");
	xmlHTTP.send(data);
	xmlHTTP.onreadystatechange = callback
}
window.onload = function () {
	document.querySelector('.container').style.height = height - 5 + 'px';
	if (!(localStorage.cache == '' || !localStorage.cache)) {
		document.querySelector('iframe').contentDocument.documentElement.children[1].children[0].innerHTML = this.localStorage.cache;
	}
	ajax('post', 'http://' + ipAddress + '/selectAllNote', null, function (data) {
		if (data.srcElement.readyState == 4) {
			let result = data.srcElement.response;
			result = eval(result);
			console.log(result)
			// result = JSON.parse(result)
			for (let res = 0; res < result.length; res++) {
				let div = document.createElement('div');
				let h4 = document.createElement('h4');
				let p = document.createElement('p');
				let span = document.createElement('span');
				span.innerHTML = result[res].note_date;
				h4.innerHTML = result[res].note_name.split('.')[0];
				p.innerHTML = 'describe';
				div.appendChild(h4);
				div.appendChild(p);
				div.appendChild(span);
				div.classList.add('listItem');
				div.setAttribute('data-id', result[res].note_id)
				document.querySelector('.historyList').appendChild(div);
			}
		}
	});
}
document.querySelector('.historyList').addEventListener('click', (e) => {
	let event = window.event;
	let target = event.target;
	let data = {
		note_id: target.parentNode.getAttribute('data-id')
	}
	if (target.parentNode.getAttribute('data-id')) {
		ajax('post', 'http://' + ipAddress + '/replaceNote', JSON.stringify(data), function (data) {
			if (data.srcElement.readyState == 4) {
				// console.log(eval(data.srcElement.response)[0])
				document.querySelector('iframe').src = eval(data.srcElement.response)[0].note_path;
				document.getElementById('fileName').innerHTML = eval(data.srcElement.response)[0].note_name.split('.')[0]
			}	
			// console.log(document.querySelector('iframe').src == 1);
		})
	}
});
window.onresize = function () {
	document.querySelector('.container').style.height = height + 'px';
}

/*
*
*底部工具栏事件实现
*/
document.querySelector('#cache').addEventListener('click', () => {//将文本内容暂存在本地缓存中
	// document.querySelector('#mask').classList.add('maskAction');
	let iframeContent = document.querySelector('iframe').contentDocument.documentElement.children[1].children[0].innerHTML;
	localStorage.cache = iframeContent;
}, false)
document.getElementById('cleanCache').addEventListener('click', () => {//清楚本地缓存
	localStorage.cache = '';
})
document.querySelector('#save').addEventListener('click', () => {
	// document.querySelector('#mask').classList.add('maskAction');
	let iframeContent = document.querySelector('iframe').contentDocument.documentElement.innerHTML;
	let fileName = document.getElementById('fileName').innerHTML.replace(/\n/ & /\t/, '');
	let data = {
		content: iframeContent,
		fileName: fileName
	}
	data = JSON.stringify(data);
	ajax('post', 'http://' + ipAddress + '/submit', data, function (data) {
		if (data.srcElement.readyState == 4) {
			console.log(data.srcElement.response);
		}
	})
}, false)
// 
// 
// 
// 为工具栏按键绑定事件
document.getElementById('creatDrawArea').addEventListener('click', function () {
	let iframe = document.querySelector('iframe').contentWindow;//获取iframe窗口对象
	iframe.postMessage('test_1', 'http://' + ipAddress + '/classNote/index.html');//发送消息
})
document.getElementById('creatCodeArea').addEventListener('click', function () {
	let iframe = document.querySelector('iframe').contentWindow;
	iframe.postMessage('test_2', 'http://' + ipAddress + '/classNote/index.html');
})
