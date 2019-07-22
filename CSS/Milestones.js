//Creates a new Project
function createMilestone(ProjectTitle,Description){
	var bloq = document.createElement("DIV");

	//ID to 
	//Increase the number of projects
	document.getElementById("amount").innerHTML++;

	//Creates a header for the project
	var header = document.createElement("H1");
	header.innerHTML = ProjectTitle.value;

	//Creates a new button with the attributes paassed as arguments
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Finished"; 
	btn.className = "projectBTN"  

	//Creates a new button with the attributes paassed as arguments
	var btn_delete = document.createElement("BUTTON");
	btn_delete.innerHTML = "Delete Project"; 
	btn_delete.className = "deleteBTN"  

	//Creates a new parragraph for the description
	var descript = document.createElement("p");
    descript.innerHTML = Description.value;

    var checkbox = document.createElement("INPUT");
	checkbox.setAttribute("type", "checkbox");



    //Adds the formand the button to the body
	btn.addEventListener("click",function(){
		check(checkbox,btn_delete,btn,descript,bloq);
	}, false);
	btn_delete.addEventListener("click",function(){
		delete_milestone(header, descript, btn, btn_delete, checkbox, bloq);
	}, false);

	//Add all the Elements to the document
	bloq.appendChild(header);
	bloq.appendChild(descript);
	bloq.appendChild(checkbox);
	bloq.appendChild(btn);
	bloq.appendChild(btn_delete);
	document.body.appendChild(bloq);

	document.getElementById("newProjectPopUp").style.display = "none";

}

function check(checkbox,btn_delete,btn,descript,bloq){
	checkbox.checked = true;
	var text = descript.innerHTML;
	text = text.concat(" - *Finished*");
	descript.innerHTML = text;
	bloq.removeChild(btn_delete);
	bloq.removeChild(btn);
	document.body.removeChild(bloq);
	document.body.appendChild(bloq);

}

function delete_milestone(header, descript, btn, btn_delete, checkbox,bloq){
	var bool = confirm("Are you sure you want to delete this milestone?");
	var i = 1;
	var deleted = 0;
	if (bool == true){
		document.getElementById("amount").innerHTML--;
		bloq.removeChild(header);
		bloq.removeChild(descript);
		bloq.removeChild(btn);
		bloq.removeChild(btn_delete);	
		bloq.removeChild(checkbox);
	}
}