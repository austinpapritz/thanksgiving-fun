/* Imports */

/* Get DOM Elements */
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const clear = document.getElementById('clear');

/* State */
let arr = [];

/* Events */

btn1.addEventListener('click', () => {
    arr.push(1);
    console.log(arr);
});

btn2.addEventListener('click', () => {
    arr.push(2);
    console.log(arr);
});

btn3.addEventListener('click', () => {
    arr.push(3);
    console.log(arr);
});

clear.addEventListener('click', () => {
    arr = [];
});

// Functions

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
