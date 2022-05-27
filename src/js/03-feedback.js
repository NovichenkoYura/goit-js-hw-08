import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');


form.addEventListener('input', throttle(onTextareaData, 500));
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

const textarea = document.querySelector('textarea');
const email = document.querySelector('input');

populateTextarea()

function populateTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (saveMessage) {
        textarea.value = saveMessage.message;
        email.value = saveMessage.email;
    }
   
}

