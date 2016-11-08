var flag=false;
var t;
function cont_change() {
	if(flag==false)
		flag=true;
	else
		flag=false;
	if(flag==true) {
		document.getElementById("buttonID").innerHTML="Stop the Party!!!";
		t=setInterval(change,200);
	}
	if(flag==false) {
		document.getElementById("buttonID").innerHTML="Start the Disco!!!";
		clearInterval(t);
	}
}
function randomValue() {
	return Math.floor(Math.random()*256);
}
function change() {
		document.getElementById("page").style.backgroundColor="rgb("+[randomValue(),randomValue(),randomValue()].join(',')+")";
}