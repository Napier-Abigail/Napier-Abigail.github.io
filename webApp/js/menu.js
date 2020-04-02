function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("hide");
	document.getElementById("hamburger").classList.toggle("hide");
	document.getElementById("close").classList.toggle("hide");
}
var xhttp = new XMLHttpRequest(); 

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let unsplashObj = JSON.parse(this.responseText);
    let imgURL = unsplashObj.urls.regular;
   	let main = document.getElementsByTagName("main")[0];
   	let artist = document.getElementById("artist");
   	let photoURL = document.getElementById("photoURL");
    main.style.backgroundImage = "url('"+imgURL+"')";
    artist.textContent = unsplashObj.user.name;
    photoURL.href = unsplashObj.links.html;
  }
}
xhttp.open("GET", "https://api.unsplash.com/photos/random?client_id=NwVCbfHsJz3kKaD2R6E6MFviiyG7grAusR7AJg4kjJc", true);
xhttp.send();



function timer(min){
    var sec = min*60;
    var timer = setInterval(function(){
        document.getElementById('timerDisplay').textContent =pad(Math.floor(sec/60))+':'+pad(sec%60);
        sec--;
        if (sec == 0){
        	document.getElementById('alert').play();
        }
    }, 1000);
}

function pad(number) {
   
     return (number < 10 ? '0' : '') + number
   
}


function getWeather(){
  let zip = document.getElementById("zip").value;
  if(zip.length>0){
    let url = "https://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&units=imperial&appid=6dda53eb2f27ab16803fca62cb290f2d";
    var xhttp = new XMLHttpRequest(); 

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let weatherObj = JSON.parse(this.responseText);
        let temp = weatherObj.main.temp;
        let current = weatherObj.weather[0].description;
        let imgPath = 'https://openweathermap.org/img/wn/' + weatherObj.weather[0].icon+ '.png';
        let weathertemp = document.createElement('p');
        let weathericon = document.createElement('img');
        let weathercurrent = document.createElement('p');
        weathertemp.textContent = temp+"°F";
        weathercurrent.textContent = current;
        weathericon.src = imgPath;
        weathericon.alt = current;
        let outputArea = document.getElementById("output");
        outputArea.innerHTML="";
        outputArea.appendChild(weathertemp);
        outputArea.appendChild(weathercurrent);
        outputArea.appendChild(weathericon);
      }else{
        document.getElementById("output").innerHTML="Zip Code not found.";
      }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  
}

