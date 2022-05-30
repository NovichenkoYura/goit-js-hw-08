import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');


form.addEventListener('input', throttle(onTextareaData, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};

function onTextareaData(e) {
    
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

}

function onFormSubmit(e) {
    e.preventDefault();
    // console.log('send message')
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {};
}

const textarea = document.querySelector('textarea');
const email = document.querySelector('input');

populateTextarea()

function populateTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (saveMessage) {
        textarea.value = saveMessage.message || "";
        email.value = saveMessage.email || "";
    }
   
}

