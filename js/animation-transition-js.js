function setEvents(){
	let buttons = document.querySelectorAll("button");
	let zin = buttons[1];
	let zout = buttons[2];
	zin.addEventListener("click", zoomIn);
	zin.addEventListener("mouseover", displayZoomIn);
	zin.addEventListener("mouseout", displayZoomIn);
	zout.addEventListener("click", zoomOut);
	zout.addEventListener("mouseover", displayZoomOut);
	zout.addEventListener("mouseout", displayZoomOut);
	let img = document.querySelector("img");
	img.style.width = "400px";
	let mobileDiv = document.querySelector("div");
	mobileDiv.addEventListener("touchstart", function(){
		mobileDiv.style.backgroundColor = "red";
	})
	mobileDiv.addEventListener("touchend", function(){
		mobileDiv.style.backgroundColor = "purple";
	})
	mobileDiv.addEventListener("touchmove", function(){
		mobileDiv.style.transform = "scale(.5)";
	})
}

function zoomIn(){
	let img = document.querySelector("img");
	img.style.transition = "width 1s linear";
	let curWidth = img.style.width;
	curWidth = curWidth.match(/\d+/)[0];
	img.style.width = (curWidth*1.25)+"px";
}

function zoomOut(){
	let img = document.querySelector("img");
	img.style.transition = "width 1s linear";
	let curWidth = img.style.width;
	curWidth = curWidth.match(/\d+/)[0];
	img.style.width = (curWidth*.75)+"px";
}

function displayZoomIn(){
	let label = document.querySelectorAll("p")[0];
	label.classList.toggle("hide");
}

function displayZoomOut(){
	let label = document.querySelectorAll("p")[1];
	label.classList.toggle("hide");
}


setEvents();