// id="animated-years" class="counter animated-counter"

// const time = 1000;
// const stepYears = 2;

// function animatedYears(num) {
//     let i = document.querySelector("#animated-years");
//     n = 0;
//     let t = Math.round(time / (num / stepYears));
//     let interval = setInterval(() => {
//         n = n + stepYears;
//         if (n == num) {
//             clearInterval(interval);
//         }
//         i.innerHTML = n;
//     }, t)
// }
// animatedYears(20, 'animated-years');



// forms
// const buttonForm = document.querySelector('#button-form');
const dataForm = document.querySelector('.contacts-form');
// console.dir(dataForm.elements.myselect.value);
// let dataInput1 = document.querySelector('#i-1');
// let dataInput2 = document.querySelector('#i-2');
// let dataInput3 = document.querySelector('#i-3');
// let dataText1 = document.querySelector('#t-1');

// console.log(buttonForm);

const getData = (event) => {
    event.preventDefault();
    console.dir(dataForm.elements.myselect.value);
    // const name = dataInput1.value;
    // const tel = dataInput2.value;
    // const email = dataInput3.value;
    // const text = dataText1.value;

    // console.log(name);
    // console.log(tel);
    // console.log(email);
    // console.log(text);
}

dataForm.addEventListener("submit", getData);
// buttonForm.addEventListener("click", getData);