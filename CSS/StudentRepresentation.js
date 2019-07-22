//Opens a pop up form to introduce the data of the new Project
function createNew() {
  document.getElementById("newProjectPopUp").style.display = "block";
}

//Closes the pop up form
function cancel() {
	document.getElementById("newProjectPopUp").style.display = "none";
}

//Creates a new Project
function create(ProjectTitle,Description){

	//ID to 
	//Increase the number of projects
	document.getElementById("amount").innerHTML++;

	//Creates a header for the project
	var header = document.createElement("H1");
	header.innerHTML = ProjectTitle.value;

	//Creates a new button with the attributes paassed as arguments
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "Choose"; 
	btn.className = "projectBTN"  

	//Creates a new button with the attributes paassed as arguments
	var btn_delete = document.createElement("BUTTON");
	btn_delete.innerHTML = "Delete Project"; 
	btn_delete.className = "deleteBTN"  

	//Creates a new parragraph for the description
	var descript = document.createElement("p");
    descript.innerHTML = Description.value;

    var timeSpent = document.createElement("H4");
    timeSpent.innerHTML = "You haven't spend any time in this project";

    var time = 0;



    //Adds the formand the button to the body
	btn.addEventListener("click",function(){
		timer(time, timeSpent);
		window.open("../HTML/Timer.html");
	}, false);
	btn_delete.addEventListener("click",function(){
		delete_project(header, descript, btn, btn_delete, timeSpent);
	}, false);

	//Add all the Elements to the document
	document.body.appendChild(header);
	document.body.appendChild(descript);
	document.body.appendChild(timeSpent);
	document.body.appendChild(btn);
	document.body.appendChild(btn_delete);

	cancel();
}

function save (ProjectTitle, Description){
	localStorage.ProjectTitle[ID] = ProjectTitle.value;
	localStorage.Description[ID] = Description.value;
	localStorage.Flag[ID] = "true";
}

function alerta(){
	alert("Hello darkness my old friend");
}

function delete_project(header, descript, btn, btn_delete, timeSpent){
	var bool = confirm("Are you sure you want to delete this project? \nAll progress will be lost.");
	var i = 1;
	var deleted = 0;
	if (bool == true){
		document.getElementById("amount").innerHTML--;
		document.body.removeChild(header);
		document.body.removeChild(descript);
		document.body.removeChild(btn);
		document.body.removeChild(btn_delete);	
		document.body.removeChild(timeSpent);
	}
}

function timer(time, timeSpent){
	setInterval(function(){ 
	time = time + 1000; 
 	var hours = Math.floor((time % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
 	var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000*60));

 	timeSpent.innerHTML = "Time spent in this project is: " + hours + " hours and "+ minutes + " minutes";
 }, 1000);
}