// how to select html elements

// 1 select using id

const selectedPara = document.getElementById("para");

selectedPara.innerHTML = "You win";

// const h1 = document.getElementById("heading");

// console.log(h1);

// select using class name

// const h2 = document.getElementsByClassName("head-2");

// console.log(h2);

// select using tag

const list = document.getElementsByTagName("li");

// using selectors

const h1 = document.querySelector("#para");

const h2 = document.querySelectorAll("#para");

console.log(h1);
console.log(h2);
