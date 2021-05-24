//-----------------footer: dynamic year-----------------

document.getElementById("FooterYear_Sub").innerHTML = new Date().getFullYear();

//-----------------Feedback_Section: FeedbackForm.submit() event; .FeedbackTextInputGroup event
//FeedbackForm.submit() event:
const feedbackForm = document.getElementById('FeedbackForm')
const feedbackBT = document.getElementById('FeedbackBT')
feedbackBT.addEventListener('click', (event)=> {feedbackForm.submit()})

//.FeedbackTextInputGroup event:
const feedbackTextList = document.querySelectorAll('.FeedbackTextInputGroup')
//console.log(feedbackTextList[0],feedbackTextList[1], feedbackTextList[2]]) //input: message, name, email

const feedbackTextarea = feedbackTextList[0].querySelector('textarea')
const feedbackInputName = feedbackTextList[1].querySelector('input')
const feedbackInputEmail = feedbackTextList[2].querySelector('input')
let colorCounter = 0

function TextboxOnClick (node) {
    node.placeholder = ''
    feedbackTextarea.style.backgroundColor = '#fff'
    feedbackInputName.style.backgroundColor = '#fff'
    feedbackInputEmail.style.backgroundColor = '#fff'
    node.style.backgroundColor = '#fde6ea'
}

feedbackTextarea.addEventListener('click',  (event) => {TextboxOnClick (feedbackTextarea)})
feedbackInputName.addEventListener('click',  (event) => {TextboxOnClick (feedbackInputName)})
feedbackInputEmail.addEventListener('click',  (event) => {TextboxOnClick (feedbackInputEmail)})

