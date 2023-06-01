const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023,5,18,17,30,0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// console.log(month);
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime(endtime) {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 3600s or 60s
  // 1d = 86400s or 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t/oneDay 
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay)/oneHour);
  let minutes = Math.floor((t % oneHour)/oneMinute);
  let seconds = Math.floor((t % oneMinute)/1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
    return item = `0${item}`
    }
     return item
  }

  items.forEach((item,index) => {
    item.innerHTML = values[index];
  })
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }

}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();