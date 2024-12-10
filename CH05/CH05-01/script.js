var el = document.getElementById('text');
el.innerHTML='Hello JavaScript';

var btns = document.getElementsByClassName('btn'); 
for(var i = 0; i < btns.lenght; i++){
	var el =btns[i];
	console.log(el.innerHTML);
}

