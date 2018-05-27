document.querySelector('body').style.height = window.parent.innerHeight*0.76 + 'px'
window.onresize = () => {
	document.querySelector('body').style.height = window.parent.innerHeight*0.76 + 'px'
}
window.addEventListener('message', resolve, false);
var oldObj;

function resolve(event) {
	switch(event.data) {
		case 'test_1':
			new createDrawArea(200, 200);
			break;
		case 'test_2': {
			new createCodeArea();
			break;
		}
		default:
			alert('fail');
			break;
	}
}

