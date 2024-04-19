const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask(){
	if(inputbox.value === ''){
		alert("You must write some text");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputbox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
        
	}
	inputbox.value='';
   saveData();
}
//we can use target to target the element which is clicked in the group of an elements
listContainer.addEventListener('click',function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
}, false);

//creating local storage for our tasks so that they dont disappear when we refress all the content will be store in the browser with the name of data
function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
}
//below will fetch the content saved in browser with the name of data
function showTask(){
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); 
