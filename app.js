const newTask = document.getElementById("task");
const listDOM = document.getElementById("list");

let tasksArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];  //Localstorage içinde kullanıcı girdisi verileri tutmak için dizi tanımladık
const data = JSON.parse(localStorage.getItem("tasks"));

data.forEach(function(item){   // localstorageda kayıtlı olan dataları ekrana yazdırdık
    const liLocal = document.createElement('li');
    liLocal.innerHTML= `${item}<span class="close">×</span>`;
    listDOM.insertBefore(liLocal, listDOM.childNodes[0]);
});

doneTask();
deleteTask();


function newElement(){    //kullanıcı yeni data girdiğinde alıp listeye ekleyerek ekrana yazdırdık
        if(newTask.value){ 
        const newLiDOM = document.createElement("LI");
        newLiDOM.innerHTML = `${newTask.value} <span class="close">×</span>`;
        listDOM.insertBefore(newLiDOM, listDOM.childNodes[0]); 
        tasksArray.push(newTask.value);      //aynı bilgiyi localstoragedeki diziye ekledik
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
        newTask.value = "";
        
        $('.full').toast('show');      //kullanıcı bildirimlerini açtık
    }
    else $('.empty').toast('show');
    deleteTask();
}
   
function doneTask(){            //yapılan taskların üstünü çizdik
    listDOM.addEventListener("click",function(item){
        if (item.target.tagName === 'LI') {
            item.target.classList.toggle('checked');
        }
    });
}


function deleteTask(){     //yapılan taskı silmek için datayı ekranda dizledik..
   var deleteTask = document.querySelectorAll("span.close");
   deleteTask.forEach(function(item){
     item.addEventListener("click", function(){
        this.parentElement.style.display = "none";


          /*const deleteLIDOM = document.querySelectorAll("LI");   //silinen işlemin localstorageden silinmesi işlemi yarım kaldı
            deleteLIDOM.forEach(function(lidom,index){ 
           
            if(lidom.innerHTML == item.parentElement.innerHTML){
            data.splice(index,1);
            localStorage.setItem("tasks" , JSON.stringify(data)); 
            console.log(item.parentElement.textContent);   
           }
        });*/
     });
   });
}

