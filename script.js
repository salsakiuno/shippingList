var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delbtn = document.getElementsByClassName("del");

function inputLength() {
	return input.value.length;
}

function createElement(name) {
	 return document.createElement(name);
}

function createListElement() {
	var li = createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(createButtonNextToNewElement());
	input.value = "";
}

function createButtonNextToNewElement(){
	var btn = createElement("button");
	btn.innerHTML = "delete";
	btn.classList.add("del")
	btn.addEventListener("click", function() {
		btn.parentNode.remove();
	});
	return btn;
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

function handleListClick(event) {
	var li = event.target;
	if (li.nodeName === "LI") {
		li.classList.toggle("done");
	}
}

function deleteItem(event) {
	event.target.parentNode.remove();
}

function addEventFromTheList(delbtn){
	for(let i=0;i<delbtn.length;i++) {
		delbtn[i].addEventListener("click", deleteItem);

	}
}

button.addEventListener("click", addListAfterClick);
ul.addEventListener("click", handleListClick);
input.addEventListener("keypress", addListAfterKeypress);
addEventFromTheList(delbtn);
