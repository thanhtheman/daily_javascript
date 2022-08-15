// Round 1
const QUESTION_API_BASE_URL = 'http://localhost:3000/materials';

const container = document.querySelector('.wrapper');

const fetchData = async () => {
    const response = await fetch(QUESTION_API_BASE_URL);
    console.log(response)
    const data = await response.json();
    console.log(data)
    return data;
}

const getCategory= (data) => {
    const categoryObj = {};
    data.forEach((element) => {
       if(categoryObj.hasOwnProperty(element.category)) {
            categoryObj[element.category].push(element);
       } else {
            categoryObj[element.category] = [element];
       }
    });
    return categoryObj;

}

const displayCategory = (category, data) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    const h2 = document.createElement('h2')
    h2.textContent = category;
    categoryDiv.append(h2);
    data.forEach((element) => {
        const questionDiv = document.createElement('div')
        questionDiv.classList.add('questions');
        const h3 = document.createElement('h3');
        h3.textContent = element.name;
        questionDiv.append(h3);
        categoryDiv.append(questionDiv);
        
    })
    return categoryDiv;
}

const fetchAndGetData = async () => {
    const data = await fetchData();
    const categoryObj = getCategory(data);
    const wrapper = document.getElementById('wrapper')
    console.log(categoryObj)
    for(const [category, data] of Object.entries(categoryObj)) {
        const categoryDiv = displayCategory(category, data);
        wrapper.append(categoryDiv);
    }

}

fetchAndGetData();

/* Round 1
<div class="category">
    <h2>HTML</h2>
        <div class="questions">
            <h3>Stopwatch</h3>
        </div>
        <div class="questions">
            <h3>Tic Tac To</h3>
        </div>
</div>


Round 2 - extra div for the status
<div class="category">
    <h2>HTML</h2>
        <div class="questions">
            <div class="status partially-correct"></div>
            <h3>Stopwatch</h3>
        </div>
        <div class="questions">
            <div class="status correct"></div>
            <h3>Tic Tac To</h3>
        </div>
</div>
*/ 


