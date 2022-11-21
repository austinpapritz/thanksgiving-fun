/* Imports */

/* Get DOM Elements */
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const clear = document.getElementById('clear');
const plus = document.getElementById('plus');

const body = document.querySelector('body');
const header = document.querySelector('header');

/* State */
let arr = [];

/* Events */

btn1.addEventListener('click', () => {
    arr.push(1);
    headerBlue();
    bgRed();
    console.log(arr);
});

btn2.addEventListener('click', () => {
    arr.push(2);
    headerBlue();
    bgRed();
    console.log(arr);
});

btn3.addEventListener('click', () => {
    arr.push(3);
    headerBlue();
    bgRed();
    console.log(arr);
});

clear.addEventListener('click', () => {
    arr = [];
    headerBlue();
    bgRed();
});

plus.addEventListener('click', () => {
    arr.forEach(plusOne);
    headerBlue();
    bgRed();
    console.log(arr, 'plusOne');
});

// Functions
function bgRed() {
    let arrZero = arr[arr.length - 3];
    let arrOne = arr[arr.length - 2];
    let arrTwo = arr[arr.length - 1];
    console.log(arrZero, arrOne, arrTwo, 'arrseries');
    if (arrZero === 1 && arrOne === 2 && arrTwo === 3) {
        body.classList.add('red');
    } else {
        body.classList.remove('red');
    }
}

function headerBlue() {
    header.classList.toggle('blue');
}
function plusOne(item, index, arr) {
    arr[index] = 1 + item;
}

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
