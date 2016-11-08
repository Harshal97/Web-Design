function ranChange() {
	var red=randomValue();
	var green=randomValue();
	var blue=randomValue();
	document.getElementById("page").style.backgroundColor="rgb("+[red,green,blue].join(',')+")";
}
function randomValue() {
	return Math.floor(Math.random()*256);
}