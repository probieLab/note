function createCodeArea(){
	this.codeArea = document.createElement('div');
	this.nextArea = document.createElement('div');
	this.submitCode = document.createElement('button');
	this.submitCode.id = 'submitCode';
	this.submitCode.innerHTML = 'Submit Code';
	this.submitCode.classList.add('btn');
	// this.pre = document.createElement('pre');
	// this.pre.style.width = '100%';
	this.nextArea.style.minHeight = '24px';
	this.codeArea.setAttribute('contenteditable', 'false');
	// this.pre.setAttribute('contenteditable','true');
	// this.codeArea.appendChild(this.pre);	
	document.querySelector('.passageEditArea').appendChild(this.codeArea);
	document.querySelector('.passageEditArea').appendChild(this.nextArea);
	var myCodeMirror = CodeMirror(this.codeArea);
	this.codeArea.appendChild(this.submitCode);	
	this.codeArea.addEventListener('click',function(){
		let event = window.event;
		let target = event.target;
		if(target.nodeName === 'BUTTON'&&target.id === 'submitCode' ){
			console.log(this.pre)
		}
    //     target.addEventListener('keyup'||'keypress'||'keydown',function(e){
    //         keynum = e.keyCode || e.which;
    //         if(keynum == 13){
    //             var precontent = this.innerHTML.replace(/<div>/,'');
    //             var final = precontent.replace(/<\/div>/,'<br>');
    //             this.innerHTML = final;
    //             console.log(final)
    //         }
    //     })
	})
}