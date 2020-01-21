function getFact(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let responseJSON = JSON.parse(this.responseText);
			if(responseJSON.found==true){
				document.getElementById("factOutput").innerHTML = responseJSON.text;
			}else{
				document.getElementById("factOutput").innerHTML = "No fact found for "+responseJSON.number;
			}
			
		}
	};
	let usrNum = document.getElementById("usrNum").value;
	let type = document.getElementById("type").options[document.getElementById("type").selectedIndex].value;
	let url = "https://numbersapi.com/"+usrNum+"/"+type+"?json";
	xhttp.open("GET", url, true);
	xhttp.send();
}