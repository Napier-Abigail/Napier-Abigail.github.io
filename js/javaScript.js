function wordCount(){
	let searchText = document.getElementById("searchText").value;
	let strippedText = searchText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"'><]/g,"");
	let word = document.getElementById("searchWord").value;
	let textWords = strippedText.split(" ");
	let count=0;
	for (let i =0; i<textWords.length; i++) {
		if (textWords[i]==word) {
			count++;
		}
	}
	countOutput(count, word);
}

function countOutput(numCount, word){
	let outputStr = "This text contains the word "+word+" "+numCount;
	if (numCount ==1){
		outputStr+=" time.";
	}else{
		outputStr+=" times.";
	}
	document.getElementById("countOutput").innerHTML = outputStr;
}

