function addNewRelativeEntry(){
	let entrySection = document.getElementById("familyTree");
	let originalRelative = document.getElementsByClassName("relativeEntry")[0];
	let newRelative = originalRelative.cloneNode(true);
	entrySection.appendChild(newRelative);
}

function makeTree(){
	
}