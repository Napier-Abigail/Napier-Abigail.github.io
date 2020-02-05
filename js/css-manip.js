function Light(url){
	this.on = false;
	this.url = url;
}

function Xmas(url){
	Light.call(this, url);
	this.color = "white";
}



function addLightToPage(lightObj){
	let newArea = document.createElement("DIV");
	let newImage = document.createElement("IMG");
	newImage.src = lightObj.url;
	newImage.style.backgroundColor = "white";
	let newButton = document.createElement("BUTTON");
	newButton.innerHTML= "On/Off";
	newButton.id=document.getElementById("lightOutput").children.length;
	//newButton.addEventListener("click", onOff(document.getElementById("lightOutput").children.length));
	newArea.appendChild(newImage);
	newArea.appendChild(document.createElement("BR"));
	newArea.appendChild(newButton);
	if("color" in lightObj){
		let newColor = document.createElement("SELECT");
		let red = document.createElement("option");
		let yellow = document.createElement("option");
		let green = document.createElement("option");
		let blue = document.createElement("option");
		red.text ="Red";
		red.setAttribute("value", "red");
		yellow.text="Yellow";
		yellow.setAttribute("value", "yellow");
		green.text="Green";
		green.setAttribute("value", "green");
		blue.text="Blue";
		blue.setAttribute("value", "blue");
		newColor.add(red);
		newColor.add(yellow);
		newColor.add(green);
		newColor.add(blue);
		newArea.appendChild(newColor);
	}
	let outputArea = document.getElementById("lightOutput");
	newArea.className = "light"

	outputArea.appendChild(newArea);
	document.getElementById(newButton.id).addEventListener("click", function(){onOff(newButton.id)});
	
}

function onOff(index){
	const mySection = document.getElementById("lightOutput").children[index];
	let color = "yellow";
	if (mySection.children.length>3){
		color = mySection.children[3].options[mySection.children[3].selectedIndex].value;
	}

	const myImg = mySection.children[0];
	let background = myImg.style.backgroundColor;
	if(background == color){
		myImg.style.backgroundColor = "white";
	}else{
		myImg.style.backgroundColor = color;
	}
}

function addLight(){
	let lightSelect = document.getElementById("lightType");
	let lightType = lightSelect.options[lightSelect.selectedIndex].value;
	let newLight;
	if(lightType =="normal"){
		newLight = new Light("./images/lightbulb.png");
	}else if(lightType=="xmas"){
		newLight = new Xmas("./images/xmas.png");
	}
	addLightToPage(newLight);
}