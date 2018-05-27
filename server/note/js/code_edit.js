function createCodeArea() {
	this.codeArea = document.createElement('div');
	this.nextArea = document.createElement('div');
	this.submitCode = document.createElement('button');
	this.delete = document.createElement('button');
	this.delete.id = 'deleteCode';
	this.delete.innerHTML = 'Delete';
	this.delete.classList.add('btn');
	this.submitCode.id = 'submitCode';
	this.submitCode.innerHTML = 'Submit Code';
	this.submitCode.classList.add('btn');
	this.nextArea.style.height = '24px';
	this.codeArea.setAttribute('contenteditable', 'false');
	document.querySelector('.passageEditArea').appendChild(this.codeArea);
	document.querySelector('.passageEditArea').appendChild(this.nextArea);
	var myCodeMirror = CodeMirror(this.codeArea);
	this.codeArea.appendChild(this.submitCode);
	this.codeArea.appendChild(this.delete);
	this.codeArea.addEventListener('click', function () {
		let event = window.event;
		let target = event.target;
		if (target.nodeName === 'BUTTON' && target.id === 'submitCode') {
			console.log(this.pre)
		}
		if (target.nodeName === 'BUTTON' && target.id === 'deleteCode') {
			target.parentNode.remove()
		}
	})
}