import { add } from './math'

const submitButton = document.getElementById('sum');
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const answer = document.getElementById('answer')

submitButton.addEventListener('click', function () {
    const sum = add(num1.valueAsNumber, num2.valueAsNumber);
    if (!!sum) { answer.innerText = sum; }
})
