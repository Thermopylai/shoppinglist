var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.setAttribute("onclick", "setDone(this)")
	var btn = document.createElement("button");
	btn.setAttribute("onclick", "deleteItem(this)");
	btn.innerHTML = "Delete";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function setDone(x) {
	if(x.getAttribute("class") === "done"){
		x.setAttribute("class", "");	
	} else {
		x.setAttribute("class", "done");
	}
}

function deleteItem(x) {
	x.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);