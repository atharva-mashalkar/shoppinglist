var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var list=document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function toggle(){
list[list.length-1].addEventListener("click",function(){
	this.classList.toggle("purchased");
})
}


function createlist(){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value =" ";
	var list=document.getElementsByTagName("li");
	toggle();
}

function afterclick(){
	if(inputLength() > 0){
		createlist();
	}
}

function afterenter(event){
	if(inputLength() > 0 && event.keyCode===13){
		createlist();
	}
}

button.addEventListener("click", afterclick);

input.addEventListener("keypress",afterenter);



for(var i=0;i< list.length;i++){
list[i].addEventListener("click",function(){
	this.classList.toggle("purchased");
})
}


