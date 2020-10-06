const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: "+ hr + "Minute: "+ min + "Second: "+ sec);

let hrPosition= (hr*360/12)+((min*360/6)/60);
let minPosition = (min*368/60)+((sec*36/60)/6);
let secPosition = sec*36/60;


function runTheClock() {
hrPosition = hrPosition+(3/360);
minPosition - minPosition+(6/60);
secPosition = secPosition+6;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock,100);
