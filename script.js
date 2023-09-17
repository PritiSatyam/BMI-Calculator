'use strict';

const fullName = document.querySelector('#fname');
// console.log(fullName);
const age = document.querySelector('#age')
const heightft = document.querySelector('#heightft')
const heightinch = document.querySelector('#heightinch')
const weight = document.querySelector('#weight')
const button = document.querySelector('.btn')
const result = document.querySelector('.final-result')
// console.log(button);

button.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked');
    const fullNameValue = fullName.value;
    const ageValue = age.value;
    const heightftValue = +heightft.value;
    const heightinchValue = +heightinch.value;
    const weightValue = +weight.value;
    const height = ((heightftValue * 0.3048) + (heightinchValue * 0.0254));
    if (!(fullNameValue && ageValue && heightftValue && weightValue && height)) return alert('Please fill the complete Form');
    // console.log(weightValue);
    // console.log(height);
    // console.log(weightValue / (height * height))
    const bmi = Math.round((weightValue / (height * height)));

    console.log(bmi);

    if (bmi < 18.5) {
        const html = `Hey! ${fullNameValue} you are ${ageValue} years old and your BMI value is ${bmi} Under Weight Category`;
        result.innerHTML = html;
        result.style.backgroundColor = 'yellow';
        result.style.color = 'black';
    } else if (bmi > 18.5 && bmi < 25) {
        const html = `Hey! ${fullNameValue} you are ${ageValue} years old and your BMI value is ${bmi} Normal Category`;
        result.innerHTML = html;
        result.style.backgroundColor = 'green';


    } else if (bmi > 25 && bmi < 30) {
        const html = `Hey! ${fullNameValue} you are ${ageValue} years old and your BMI value is ${bmi} Over Weight Category`;
        result.innerHTML = html;
        result.style.backgroundColor = 'orange';
    } else if (bmi > 30) {
        const html = `Hey! ${fullNameValue} you are ${ageValue} years old and your BMI value is ${bmi} obesity`;
        result.innerHTML = html;
        result.style.backgroundColor = 'red';
    }

    fullName.value = '';
    age.value = '';
    heightft.value = '';
    heightinch.value = '';
    weight.value = '';
})
