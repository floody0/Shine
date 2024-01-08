const rewiewStart = document.querySelector('.review__start')
const rewiewPoster = document.querySelector('.review__poster')
const rewiewsContainer = document.querySelector('.reviews-container')
const question = document.querySelector('.form-title')
const radioAnswer = document.querySelectorAll('.form__radio')
const reviewButton = document.querySelector('.form-button')
const reviewForm =  document.querySelector('.reviews-form')
const reviewResult = document.querySelector('.result-form__info')
const formResult = document.querySelector('.review__result-form')
const data = [{
    question:'Як ви оцінюєте професіоналізм співробітників фірми у наданні послуг?',
    answer:''
},{
    question:'Як співробітники виявляли себе під час надання послуг?',
    answer:''
},{
    question:'Як ви оцінюєте свочасність виконання послуги?',
    answer:''
}]

let isEnd = false
let index = 0

rewiewStart.addEventListener('click', (event)=>{
    event.preventDefault();
    rewiewPoster.style.display='none'
    rewiewStart.style.display='none'
    rewiewsContainer.style.alignItems='center'
    reviewForm.style.display='flex'
})

reviewButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (index < data.length) {
        radioAnswer.forEach(element => {
            if (element.checked) {
                data[index].answer = element.value;
            }
        });
        if (index + 1 < data.length) { 
            question.innerHTML = data[index + 1].question;
            index++;
            if(index + 1 == data.length){
                reviewButton.innerHTML = 'Показати результати';
                isEnd = true
            }
        } 
        else if(isEnd){
            localStorage.setItem('allResults', JSON.stringify(data))
            reviewForm.style.display='none'
            formResult.style.display='flex'
            reviewResult.innerHTML = '<h4>Результат опитування:</h4>';
    
            data.forEach(data => {
                reviewResult.innerHTML += `<p>${data.question}:</p><p> Відповідь: ${data.answer}</p>`;
            });
        }
    }
    console.log(data);
});
console.log(JSON.parse(localStorage.getItem('allResults')))