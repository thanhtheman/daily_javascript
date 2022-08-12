

let addToDoButton = document.getElementById('addToDoButton');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let inputWeight = document.getElementById('inputWeight');


addToDoButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    let weight = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    weight.innerText = inputWeight.value;
    weight.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    toDoContainer.appendChild(weight);
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration ='line-through';
        weight.style.textDecoration ='line-through';
    });
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(weight);
    });
})


laserFocus.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    let weight = document.createElement('p');
    toDoContainer.removeChild(paragraph, weight);

})

const pending = document.querySelector('.pending');

const renderTasks = async () => {
    const uri = 'http://localhost:3000/tasks';
    const res = await fetch(uri);
    const tasks = await res.json();
    
    let template ='';
    tasks.forEach((task) => {
        template += `
            <div class='tasks'>
                <p>${task.id}. ${task.body} (${task.weight}%) - ${task.status}</p>
            </div>
        
        `
    })

    pending.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderTasks())