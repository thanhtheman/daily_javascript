let addToDoButton = document.getElementById('addToDoButton');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', () => {
    let paragraph = document.createElement('p')
    toDoContainer.appendChild(paragraph)
})