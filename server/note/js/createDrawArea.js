function createDrawArea(width,height) {
	this.drawArea = document.createElement('div');
	this.nextArea = document.createElement('div');
	this.canvas = document.createElement('canvas');
	this.cleanToolButton = document.createElement('button');
	this.createButton = document.createElement('button');
	this.deleteButton = document.createElement('button');
	this.buttonBOx = document.createElement('div');
	this.drawArea.classList.add('drawArea');
	this.drawArea.setAttribute('contenteditable', 'false');
	this.drawArea.style.width = '90%'
	this.canvas.style.width = ((width < window.innerHeight) && width) ? width + 'px' : '100%';
	this.canvas.style.height = height + 'px';
	this.cleanToolButton.innerHTML = '橡皮';
	this.createButton.innerHTML = '保存';
	this.deleteButton.innerHTML = '删除';
	this.cleanToolButton.classList.add('btn', 'btn-default');
	this.createButton.classList.add('btn', 'btn-default');
	this.deleteButton.classList.add('btn', 'btn-default');
	this.buttonBOx.classList.add('btn-group', 'btnBox');
	this.buttonBOx.appendChild(this.createButton);
	this.buttonBOx.appendChild(this.cleanToolButton);
	this.buttonBOx.appendChild(this.deleteButton);
	this.drawArea.appendChild(this.canvas);
	this.drawArea.appendChild(this.buttonBOx);
	this.nextArea.style.minHeight = '18px';
	document.querySelector('.passageEditArea').appendChild(this.drawArea);
	document.querySelector('.passageEditArea').appendChild(this.nextArea);	
	this.drawArea.addEventListener('click', function() {
		let event = window.event;
		let target = event.target;
		if(target.innerHTML == '删除')
			this.parentElement.removeChild(this);
	},false);
}