$(document).ready(function () {
	var elementRed = document.getElementById("red");
	elementRed.classList.add("selected");
});

$('#changeState').click(function(){
	var elements = document.getElementsByClassName("selected");
	var elementSelected = elements[0];

	elementSelected.classList.remove("selected");
	
	if(elementSelected.id == "red"){
		var newElement = document.getElementById("green");
		newElement.classList.add("selected");
	}else if(elementSelected.id == "green"){
		var newElement = document.getElementById("orange");
		newElement.classList.add("selected");
	}else if(elementSelected.id == "orange"){
		var newElement = document.getElementById("red");
		newElement.classList.add("selected");
	}

});





