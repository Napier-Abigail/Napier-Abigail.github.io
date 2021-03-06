function getInfo(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseJSON = JSON.parse(this.responseText);
			let name = responseJSON.data.results[0].name;
			let about = responseJSON.data.results[0].description;
			let image = responseJSON.data.results[0].thumbnail.path+"/portrait_uncanny."+responseJSON.data.results[0].thumbnail.extension;
			image = image.replace("http", "https");
			let outputArea = document.getElementById("heroOutput");
			outputArea.innerHTML="";
			let htmlName = document.createElement("H4");
			htmlName.innerHTML=name;
			let htmlAbout = document.createElement("P");
			htmlAbout.innerHTML=about;
			let htmlImg = document.createElement("IMG");
			htmlImg.src = image;
			htmlImg.alt = name;
			outputArea.appendChild(htmlName);
			outputArea.appendChild(htmlImg);
			outputArea.appendChild(htmlAbout);
		}
	};
	let type = document.getElementById("hero").options[document.getElementById("hero").selectedIndex].value;
	let apiKey ="3f07b9805231f32e863cdf1dd7450608";
	let url = "https://gateway.marvel.com:443/v1/public/characters/";
	switch(type) {
		case "spiderman":
		url+="1009610?apikey="+apiKey;
		break;
		case "capamerica":
		url+="1009220?apikey="+apiKey;
		break;
		case "ironman":
		url+="1009368?apikey="+apiKey;
		break;
		case "thor":
		url+="1009664?apikey="+apiKey;
		break;
		case "hulk":
		url+="1009351?apikey="+apiKey;
		break;
	} 
	xhttp.open("GET", url, true);
	xhttp.send();
}