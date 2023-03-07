'use strict'
//elements

const movie = document.getElementById("movie");
const seats = document.querySelectorAll(".row .seat:not(.booked)");
const total = document.getElementById("total");
const counts = document.getElementById("select"); //when we use queryselector only it gives 1st element only if we use queryselecterAll it give all elements in node list



//global variables

let ticketPrice = 0;
let ticketCounts = 0;
let totalFare = 0;

//function

function updateCounts() {
  let selectedSeats = document.querySelectorAll(".row .selected");
  ticketCounts = selectedSeats.length;
  // console.log(ticketCounts);
  totalFare = ticketCounts * ticketPrice;
  total.innerText = totalFare;
  select.innerText = ticketCounts;
}

//events

movie.addEventListener("change", (e) => {
  // console.log(e);
  ticketPrice = Number(e.target.value);
  // console.log(ticketPrice);
  updateCounts();
});
for (let i = 0; i < seats.length; i++) {
  const seatList = seats[i];

  seatList.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("seat")) {
      e.target.classList.toggle("selected");
      // console.log(e.target.classList.contains("selected"));
      updateCounts();
      // console.log(e.target.value);
    } 
  });
}
