// Round 1
const SUBMISSION_API_URL = 'http://localhost:3000/submissions';
const QUESTION_API_BASE_URL = 'http://localhost:3000/materials';

const container = document.querySelector('.wrapper');

const fetchData = async () => {
    const [response, submissionResponse] = await Promise.all([fetch(QUESTION_API_BASE_URL), fetch(SUBMISSION_API_URL)]);
    return await Promise.all([ response.json(), submissionResponse.json()]);
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

const getSubmissionsById = (submissions) => {
    const submissionsById = {};
    submissions.forEach(submission => {
        submissionsById[submission.questionId] = submission.status;
    })
    console.log(submissionsById)
    return submissionsById;
}

const displayCategory = (category, data, submissionsById) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');
    let correctCount = 0;
    data.forEach((element) => {
        const questionDiv = document.createElement('div')
        questionDiv.classList.add('questions');
        const status = document.createElement('div')
        const statusClass = submissionsById[element.id]?.toLowerCase().replace('_','-')
        status.classList.add(statusClass ?? 'unattempted');
        questionDiv.append(status);
        if(submissionsById[element.id] === 'CORRECT') {
            correctCount++;
        }
        const h3 = document.createElement('h3');
        h3.textContent = element.name;
        questionDiv.append(h3);
        categoryDiv.append(questionDiv);
    });
    const h2 = document.createElement('h2')
    h2.textContent=`${category} - ${correctCount} / ${data.length}`
    categoryDiv.prepend(h2);
    return categoryDiv;
}

const fetchAndGetData = async () => {
    const [data, submissions] = await fetchData();
    const categoryObj = getCategory(data);
    const submissionsById = getSubmissionsById(submissions);
    const wrapper = document.getElementById('wrapper')
    console.log(categoryObj)
    for(const [category, data] of Object.entries(categoryObj)) {
        const categoryDiv = displayCategory(category, data, submissionsById);
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


