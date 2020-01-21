function getInfo(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseJSON = JSON.parse(this.responseText);
			let name = responseJSON.results.name;
			let about = responeJSON.results.description;
			let outputArea = document.getElementById("output");
			outputArea.innerHTML="";
			let htmlName = document.createElement("H4");
			htmlName.innerHTML=name;
			let htmlAbout = document.createElement("P");
			htmlAbout.innerHTML=about;
			outputArea.appendChild(htmlName);
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
		case "hulk":
		url+="1009664?apikey="+apiKey;
		break;
	} 
	xhttp.open("GET", url, true);
	xhttp.send();
}