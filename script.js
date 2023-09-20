let date = document.getElementById('date')
let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')

const allDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const allMonths = ['January','February','March','April','May','June','July','August','September','October','November','December']

let today = new Date();
date.innerHTML =(today.getDate()<10 ? "0":"")+ today.getDate();
day.innerHTML = allDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();