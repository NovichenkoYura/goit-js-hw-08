const form = document.querySelector('.feedback-form');

form.addEventListener('input', onTextareaData);
form.addEventListener('submit', onFormSubmit);

const formData = {};

function onTextareaData(e) {
    
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

}

function onFormSubmit(e) {
    e.preventDefault();
    // console.log('send message')
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')))

}