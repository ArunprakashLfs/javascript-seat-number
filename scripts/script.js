'use strict'
//geting input from html

const movieEl = document.getElementById("movie");
const seatEl = document.querySelectorAll(".row.seat:not(.Occupied)");
const countEl = document.getElementById("select");
const total = document.getElementById("total");

//functions
let ticketPrice = 0;
let TotalCount = 0;
//updateCount
function updateCount() {
    let TotalCount = document.querySelectorAll("row.selected");
    let ticketPrice = TotalCount.value;
    let selectedSeatsCount = TotalCount.length;
    countEl.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}


//EventListner
movieEl.addEventListener('change',(e) => {
    ticketPrice = Number(e.target.value);
    updateCount();
});
container.addEventListener("click", (e) => {
    if ( e.target.classList.contains("seat") && !e.target.classList.contains("Occupied")) {
        e.target.classList.toggle("selected");
    }
    updateCount();
  });
  

