function Relative(myName, myRelation){
	this.name = myName;
	this.relation = myRelation;
}

function addNewRelativeEntry(){
	let entrySection = document.getElementById("familyTree");
	let originalRelative = document.getElementsByClassName("relativeEntry")[0];
	let newRelative = originalRelative.cloneNode(true);
	entrySection.appendChild(newRelative);
}

function printTree(startPerson, relativeList){
	let spouseList=[];
	let me = new Relative(startPerson, 'you');
	let siblingList=[me];
	let parentList =[];
	let childrenList =[];
	for (var i = 0; i < relativeList.length; i++) {
		curRelation = relativeList[i].relation;
		if(curRelation=='spouse'){
			spouseList.push(relativeList[i]);
		}else if (curRelation=='brother'|| curRelation=='sister'){
			siblingList.push(relativeList[i]);
		}else if (curRelation=='son'|| curRelation=='daughter'){
			childrenList.push(relativeList[i]);
		}else if (curRelation=='mom'||curRelation=='dad'){
			parentList.push(relativeList[i]);
		}
	}
	let familyTree = document.createElement("DIV");
	familyTree.id = "familyTreeOut";
	if(parentList.length!=0){
		let parentLevel = document.createElement("DIV");
		parentLevel.className = "relationLevel"; 
		for(let i =0; i < parentList.length; i++){
			let parentNode = document.createElement("DIV");
			parentNode.innerHTML = parentList[i].name;
			parentNode.className = "familyMember";
			parentLevel.appendChild(parentNode);
		}
		familyTree.appendChild(parentLevel);
	}

	if(siblingList.length!=0){
		if(spouseList.length!=0){
			siblingList = spouseList.concat(siblingList);
			/*let spouseLevel = document.createElement("DIV");
			spouseLevel.className = "relationLevel";
			for(let i=0; i < spouseList.length; i++){
				let spouseNode = document.createElement("DIV");
				spouseNode.innerHTML = spouseList[i].name;
				spouseNode.className = "familyMember";
				spouseLevel.appendChild(spouseNode);
			}
			familyTree.appendChild(spouseLevel);*/
		}
		let siblingLevel = document.createElement("DIV");
		siblingLevel.className = "relationLevel";
		for(let i =0; i < siblingList.length; i++){
			let siblingNode = document.createElement("DIV");
			siblingNode.innerHTML = siblingList[i].name;
			siblingNode.className = "familyMember";
			siblingLevel.appendChild(siblingNode);
		}
		familyTree.appendChild(siblingLevel);
	}	

	

	if(childrenList.length!=0){
		let childrenLevel = document.createElement("DIV");
		childrenLevel.className = "relationLevel";
		for(let i=0; i < childrenList.length; i++){
			let childrenNode = document.createElement("DIV");
			childrenNode.innerHTML = childrenList[i].name;
			childrenNode.className = "familyMember";
			childrenLevel.appendChild(childrenNode);
		}
		familyTree.appendChild(childrenLevel);
	}

	document.getElementById("treeOutput").appendChild(familyTree);
}

function makeTree(){
	document.getElementById("treeOutput").innerHTML ="";
	let relativeArray = [];
	let startName = document.getElementById("you").value;
	let relatives = document.getElementsByClassName("relativeEntry");
	for (var i = 0; i < relatives.length; i++) {
		let curName= relatives[i].children[0].value;
		let curRelation= relatives[i].children[1].options[relatives[i].children[1].selectedIndex].value;
		let curRelative = new Relative(curName, curRelation);
		relativeArray[i]= curRelative;
	}
	printTree(startName, relativeArray);
	
}