var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("shop-list");
var listItems = document.getElementsByTagName("li");
var btnFinish = document.getElementById("shop-list").children;

//creates new li item and button then puts them both inside a new span
function createListItem() {
	var spn = document.createElement("span");
	ul.appendChild(spn);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	spn.appendChild(li);
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	spn.appendChild(btn);
	input.value = "";
}

function inputLength() {
	return input.value.length;
}

function createListOnClick() {
	if (inputLength() > 0) {
		createListItem();
	}
}

function createListOnEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListItem();
	}
}

//checks if clicked on li item
function listClick(event) {
	if (!event.target.matches("li")) return;
	var listTarget = event.target;
	crossOutListItem(listTarget);
}

//toggles crossout line to list item and toggles button visibility
function crossOutListItem(listTarget) {
	listTarget.classList.toggle("done");
	listTarget.nextSibling.classList.toggle("btn-vis");
}

button.addEventListener("click", createListOnClick);
input.addEventListener("keypress", createListOnEnter);
ul.addEventListener("click", listClick);
document.addEventListener("click", someListener);

//checks if clicked on button next to list item.  if so deletes list item and button.  Then checks if all list items finished and alerts you
function someListener(event) {
	var element = event.target;
	if (element.tagName =='BUTTON' && element.previousSibling.tagName == 'LI') {
		console.log(element.previousSibling);
		element.parentNode.remove();
		if (ul.children.length === 0) {
			alert("You've completed your list!");
			window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
		}
	}
}