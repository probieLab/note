function createCodeArea(){
	this.codeArea = document.createElement('div');
	this.nextArea = document.createElement('div');
	this.pre = document.createElement('pre');
	this.pre.style.width = '100%'
	this.codeArea.setAttribute('contenteditable', 'false');
	this.pre.setAttribute('contenteditable','true');
	this.codeArea.appendChild(this.pre);
	document.querySelector('.passageEditArea').appendChild(this.codeArea);
	document.querySelector('.passageEditArea').appendChild(this.nextArea);
	this.codeArea.addEventListener('click',function(){
		let event = window.event;
        let target = event.target;
        target.addEventListener('keyup'||'keypress'||'keydown',function(e){
            keynum = e.keyCode || e.which;
            if(keynum == 13){
                var precontent = this.innerHTML.replace(/<div>/,'');
                var final = precontent.replace(/<\/div>/,'<br>');
                this.innerHTML = final;
                console.log(final)
            }
        })
	})
}