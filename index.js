let addToDoButton = document.getElementById('addToDoButton');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    let weight = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    weight.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    weightContainer.appendChild(weight);
    inputField.value = "";
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration ='line-through';
    });
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
    });
})

laserFocus.addEventListener('click', () => {

})