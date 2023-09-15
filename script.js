const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


    // for adding a task in todo app
function addTask(){
    if(inputBox.value === ""){
        alert('Please enter a task');
        }else{
            let liElement=document.createElement("li") ;  /* //creating an element called <li> and assigning it to the variable "li" */
            liElement.innerHTML = inputBox.value;
            listContainer.appendChild(liElement);

            let span= document.createElement("span");
            span.innerHTML = "\u00d7";
            liElement.appendChild(span);
        }
        inputBox.value = "";
        saveData();

}

// for click function
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// local stroge
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();