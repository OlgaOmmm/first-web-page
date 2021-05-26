var dampc = {}
dampc.feedbackForm = document.getElementById('FeedbackForm')
dampc.feedbackBT = document.getElementById('FeedbackBT')
dampc.feedbackTextList = document.querySelectorAll('.FeedbackTextInputGroup')
dampc.feedbackTextarea = dampc.feedbackTextList[0].querySelector('textarea')
dampc.feedbackInputName = dampc.feedbackTextList[1].querySelector('input')
dampc.feedbackInputEmail = dampc.feedbackTextList[2].querySelector('input')

//-----------------footer: dynamic year-----------------

document.getElementById("FooterYear_Sub").innerHTML = new Date().getFullYear();

//-----------------Feedback_Section: FeedbackForm.submit() event; .FeedbackTextInputGroup event

//FeedbackForm.submit() event:
dampc.feedbackBT.addEventListener('click', (event)=> {dampc.feedbackForm.submit()})

//.FeedbackTextInputGroup event:
dampc.feedbackTextarea.title = 'Please input your message'
dampc.feedbackInputName.title = 'Please input your name'
dampc.feedbackInputEmail.title = 'Please input your email'
dampc.TextboxOnClick = function (node) {
    node.placeholder = ''
    dampc.feedbackTextarea.style.backgroundColor = '#fff'
    dampc.feedbackInputName.style.backgroundColor = '#fff'
    dampc.feedbackInputEmail.style.backgroundColor = '#fff'
    node.style.backgroundColor = '#fde6ea'
}
dampc.feedbackTextarea.addEventListener('click',  (event) => {dampc.TextboxOnClick (dampc.feedbackTextarea)})
dampc.feedbackInputName.addEventListener('click',  (event) => {dampc.TextboxOnClick (dampc.feedbackInputName)})
dampc.feedbackInputEmail.addEventListener('click',  (event) => {dampc.TextboxOnClick (dampc.feedbackInputEmail)})

