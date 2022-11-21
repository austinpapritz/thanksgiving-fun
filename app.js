/* Imports */

/* Get DOM Elements */
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const clear = document.getElementById('clear');

const body = document.querySelector('body');

/* State */
let arr = [];

/* Events */

btn1.addEventListener('click', () => {
    arr.push(1);
    bgRed();
    console.log(arr);
});

btn2.addEventListener('click', () => {
    arr.push(2);
    bgRed();
    console.log(arr);
});

btn3.addEventListener('click', () => {
    arr.push(3);
    bgRed();
    console.log(arr);
});

clear.addEventListener('click', () => {
    arr = [];
    bgRed();
});

// Functions
function bgRed() {
    if (arr === (1, 2, 3)) {
        body.classList.add('red');
    } else {
        document.body.style.background = '';
    }
}
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
