import database from './database';

let addToDoButton = document.getElementById('addToDoButton');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let inputWeight = document.getElementById('inputWeight');


addToDoButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    let weight = document.createElement('p');
    let task = {};
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    weight.innerText = inputWeight.value;
    task.inputField.value = inputField.value;
    database.push(task);
    weight.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    toDoContainer.appendChild(weight);
    fs.appendFile('database.js', stringify(inputField.value), (err) => {
        console.log(err)
    })
    inputField.value = "";
    inputWeight.value = "";
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration ='line-through';
    });
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
    });
})

console.log(map1);


laserFocus.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    let weight = document.createElement('p');
    toDoContainer.removeChild(paragraph, weight);

})