function makeURL(){
	let text0 =document.getElementById("text0").value;
	let text1 =document.getElementById("text1").value;
	let templateID = convertToTemplateID();
	let url = "https://api.imgflip.com/caption_image?template_id="+templateID+"&username=abinapier&password=gitHub&text0="+text0+"&text1="+text1;
	return url;
}
function convertToTemplateID(){
	let templateType = document.getElementById("template");
	let selectedType = templateType.options[templateType.selectedIndex].value;
	switch(selectedType){
		case "distractedBoyfriend":
			return 112126428;
			break;
		case "oneDoesNotSimply":
			return 61579;
			break;
		case "drakeHotlineBling":
			return 181913649;
			break;
		case "womanYellingCat":
			return 188390779;
			break;
		case "condescendingWonka":
			return 61582;
			break;
	}
}

function getMeme(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		let memeData = JSON.parse(this.responseText);
    		let imgURL = memeData.data.url;
    		let count = window.localStorage.length;
    		if(count>0){
    			let memeObj = JSON.parse(window.localStorage["memes"]);
    			let index = memeObj.length;
    			memeObj[index] = imgURL;
    			let memeJSON = JSON.stringify(memeObj);
    			window.localStorage.setItem('memes', memeJSON);
    		}else{
    			var memeObj = new Object();
    			memeObj[count] = imgURL;
    			let memeJSON = JSON.stringify(memeObj);
    			window.localStorage.setItem('memes', memeJSON);
    		}
    		outputMemes();
    	}
  	};
	xhttp.open("POST", makeURL(), true);
	xhttp.send(); 

}

function outputMemes(){
	if(localStorage.length ==0){
		document.getElementById("memeOutput").innerHTML="No memes created yet.";
	}else{
		let out = document.getElementById("memeOutput");
		out.innerHTML="";
		let memeObj = JSON.parse(localStorage["memes"]);
		for (key in memeObj) {
			let imgURL=memeObj[key];
			let img = document.createElement("IMG");
			img.src = imgURL;
			out.appendChild(img);
		}
	}
}

function clearStorage(){
	localStorage.clear();
	document.getElementById("memeOutput").innerHTML = "No memes created yet.";
}