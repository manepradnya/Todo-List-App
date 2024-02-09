const button = document.querySelector('button');
const input = document.querySelector('#input-box');
const taskContainer = document.querySelector('#list-container');
const closeTask = document.querySelector('.close');

button.addEventListener('click', function () { 
    let taskItem = input.value;
    taskContainer.insertAdjacentHTML('beforeend', `
    <li class="list-item">
    ${taskItem}
    <div class ="close">X</div>
    </li>`);
    input.value = '';
    storeData();
})

taskContainer.addEventListener('click', function (e) { 
   
    if (e.target.classList.contains('list-item')) {
        e.target.classList.toggle('checked');
        storeData();
    } else if (e.target.classList.contains('close')) { 
        storeData();
        e.target.parentElement.remove();
    }
    
})

function storeData() { 
    localStorage.setItem("item", taskContainer.innerHTML);
}

function showData() { 
    taskContainer.innerHTML=localStorage.getItem("item");
}
showData();

