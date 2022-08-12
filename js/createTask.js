const form = document.querySelector('form');

const createTask = async (e) => {
    e.preventDefault();

    const doc = {
        body: form.body.value,
        weight: form.weight.value,
        status: 'In Progress',
        tag: form.tag.value
    }

    console.log(doc)
    await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(doc)
    });
    
    window.location.replace('/');
}

form.addEventListener('submit', createTask);
