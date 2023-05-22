//using selectors inside the element
// traversing the dom
const btns = document.querySelectorAll('.question-btn');
 
const questionText = document.querySelector('.question-text');

btns.forEach(function(btn){
  btn.addEventListener('click', (e) => {
    // console.log(e.currentTarget.parentElement.parentElement)
    const question = e.currentTarget.parentElement.parentElement;
    
    question.classList.toggle('show-text')

  })
})

 