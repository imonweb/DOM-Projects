//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
  // console.log(question);
  const btn = question.querySelector('.question-btn');
  // console.log(btn);

  btn.addEventListener('click', () => {

    questions.forEach(function(item){
      if( item !== question ){
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle('show-text');
  })
})

 

// traversing the dom
/*
const btns = document.querySelectorAll('.question-btn');
 
const questionText = document.querySelector('.question-text');

btns.forEach(function(btn){
  btn.addEventListener('click', (e) => {
    // console.log(e.currentTarget.parentElement.parentElement)
    const question = e.currentTarget.parentElement.parentElement;
    
    question.classList.toggle('show-text')

  })
})
*/
 