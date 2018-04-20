const height = window.innerHeight;
const width = window.innerWidth;
const ipAddress = '127.0.0.1:3010';
const xmlHTTP = new XMLHttpRequest();
document.querySelector('.container').style.height = height - 5 + 'px';
window.onload = function () {
	document.querySelector('.container').style.height = height - 5 + 'px';
	if (!(localStorage.cache == '' || !localStorage.cache)) {
		document.querySelector('iframe').contentDocument.documentElement.children[1].children[0].innerHTML = this.localStorage.cache;
	}
	xmlHTTP.open('post', 'http://' + ipAddress + '/selectAllNote', true);
	xmlHTTP.setRequestHeader("Content-type", "application/json;charset=UTF-8");
	xmlHTTP.send(null);
	xmlHTTP.onreadystatechange = (data) => {

		if (xmlHTTP.readyState == 4) {
			let result = data.srcElement.response;
			result = eval(result);
			result = JSON.parse(result)
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
				document.querySelector('.historyList').appendChild(div);
			}
		}
		// <div class="listItem">
		// 		<h4>passage titel</h4>
		// 	    <p>describe</p>
		//  	<span>time</span>
		// </div>

	}
}
window.onresize = function () {
	document.querySelector('.container').style.height = height + 'px';
}
document.querySelector('#save').addEventListener('click', () => {
	// document.querySelector('#mask').classList.add('maskAction');
	let iframeContent = document.querySelector('iframe').contentDocument.documentElement.innerHTML;
	let fileName = document.getElementById('fileName').innerHTML.replace(/\n/ & /\t/, '');
	let data = {
		content: iframeContent,
		fileName: fileName
	}
	data = JSON.stringify(data);
	xmlHTTP.open('post', 'http://' + ipAddress + '/submit', true);
	xmlHTTP.setRequestHeader("Content-type", "application/json;charset=UTF-8")
	xmlHTTP.send(data);
	xmlHTTP.onreadystatechange = (data) => {
		console.log(data.srcElement.response);
	}
}, false)
document.querySelector('#cache').addEventListener('click', () => {
	// document.querySelector('#mask').classList.add('maskAction');
	let iframeContent = document.querySelector('iframe').contentDocument.documentElement.children[1].children[0].innerHTML;
	localStorage.cache = iframeContent;
}, false)
document.getElementById('cleanCache').addEventListener('click', () => {
	localStorage.cache = '';
})
document.getElementById('creatDrawArea').addEventListener('click', function () {
	let iframe = document.querySelector('iframe').contentWindow;
	iframe.postMessage('test_1', 'http://' + ipAddress + '/classNote/index.html');
})
document.getElementById('creatCodeArea').addEventListener('click', function () {
	let iframe = document.querySelector('iframe').contentWindow;
	iframe.postMessage('test_2', 'http://' + ipAddress + '/classNote/index.html');
})
