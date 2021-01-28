'use strict';
function game(num){
	let color = {r:0, g:0, b:0};
	for(let i in color){
		color[i] = Math.floor(Math.random() * 256);
	}
	let myColor = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
	let result=document.getElementById("result");
	result.textContent=null;
	let hoi=document.getElementById("hoi");
	hoi.textContent="ほい！";
	hoi.style.color=myColor;
	let img=document.getElementById("img");
	img.textContent=null;
	let face = Math.floor( Math.random() * (4 + 1 - 1) ) + 1 ;
	let image=document.createElement("img");
	image.src=`images/${face}.png`;
	image.style.width='40%';
	img.appendChild(image);
	if(num==face){
		result.textContent="やるじゃない";
		result.style.color="#ff70ff";
		result.style.fontSize="50px";
	}else{
		result.textContent="出直してきな！";
		result.style.color="#e03a3a";
		result.style.fontSize="50px";
	}
}
