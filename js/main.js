inputName.oninput = function () {
	document.getElementById("pName").innerHTML = inputName.value;

}

printBtn.onclick = function () {
	window.print();
}
