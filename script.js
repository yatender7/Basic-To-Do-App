

// select the all elements
const clear = document.querySelector(".clear");
const dateElement = document.querySelector("#date");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

// add classes 

/*var LIST =[];
var id = 0;*/

const CHECK = "fa-check-circle";
const UNCHECK ="fa-circle";
const LINE_THROUGH = "lineThrough";


// now show todays date
const options = {weekday:"long", month:"short",day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US",options);

// function to add item

function addToDo(toDo,id ,done,trash)
{
    if(trash){return;}
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const item =`<li class="item">
                        <i class="far ${DONE} co" job="complete" id="${id}"></i>
                        <p class="text ${LINE} ">${toDo}</p>
                        <i class="fas fa-trash-alt de" job="delete" id="${id}"></i>
                        </li>`;
    const position = "beforeend";
    
    list.insertAdjacentHTML(position,item);
}

// add an item when the user hit the enter key

document.addEventListener("keyup",function(event){
    if(event.keyCode == 13)
       
        {
            const toDo = input.value;
            if(toDo)
                {
              /*  addToDo(toDo ,id, false, false);*/
                addToDo(toDo);
                    
                   /* LIST.push({
                        name : toDo,
                        id : id,
                        done : false,
                        trash :false
                    })*/
                    /*id++;*/
            document.getElementById("input").value="";
                }
            else
                alert("PLEASE ADD A TO-DO INPUT");
        }
})

// complete function for item

function completeTask(element)
{
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
  /*  LIST[element.id].done = LIST[element.id].done ? false : true;*/
}

// delete function for item

function deleteTask(element)
{
    element.parentNode.parentNode.removeChild(element.parentNode);
   /* LIST[element.id].trash = true;*/
}

list.addEventListener("click",function(event){
    const element = event.target; // return the clicked element inside the list
    const elementJob = element.attributes.job.value;
    
    
    if(elementJob == "complete"){
        completeTask(element);
    }
    else if(elementJob == "delete")
        {
            deleteTask(element);
        }
});

// clear the entire list

   clear.addEventListener('click',function(){
       location.reload();
   });