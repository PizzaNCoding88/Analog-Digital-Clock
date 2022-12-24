//CLOCK

const hoursHand = document.querySelector(".analog-clock__hours-hand");
const minutesHand = document.querySelector(".analog-clock__minutes-hand");
const secondsHand = document.querySelector(".analog-clock__seconds-hand");

const digitalHours = document.querySelector(".digital-clock__hours");
const digitalMinutes = document.querySelector(".digital-clock__minutes");
const digitalSeconds = document.querySelector(".digital-clock__seconds");


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsAngle = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsAngle}deg)`;
    const secs = String(now.getSeconds()).padStart(2, '0');
    digitalSeconds.innerHTML = secs;


    const minutes = now.getMinutes();
    const minutesAngle = ((minutes/60) * 360) + ((seconds / 60) * 6) + 90;
    minutesHand.style.transform = `rotate(${minutesAngle}deg)`;
    digitalMinutes.innerHTML = minutes;

    const hour = now.getHours();
    const hourAngle = ((hour / 12) * 360) + ((minutes/60) * 30) + 90;
    hoursHand.style.transform = `rotate(${hourAngle}deg)`;
    digitalHours.innerHTML = hour;

}

setInterval(setDate, 1000);

setDate;

//CHECKED STATUS    
const analogClock = document.querySelector(".analog-clock");
const digitClock = document.querySelector(".digital-clock");

const container = document.querySelector(".container");

const textAD = document.querySelector(".toggle span");


let active = false

function toggle() {
    let toggle = document.querySelector('.toggle');
    active = !active;
    if (active) {
        toggle.classList.add('active');
        analogClock.style.visibility = "hidden";
        digitClock.style.visibility = "visible";
        container.style.padding = "8rem 3rem";
        textAD.innerHTML = "Digital";
    } else {
        toggle.classList.remove('active');
        analogClock.style.visibility = "visible";
        digitClock.style.visibility = "hidden";
        container.style.padding = "17rem 0";
        textAD.innerHTML = "Analog";
    }
};

//DARK/LIGHT MODE
const body = document.querySelector('body');
const textDL = document.querySelector('.container-2 span')

let active1 = false;

function lightMode() {
    let toggleLight = document.querySelector('.toggle-light')
    active1 = !active1;
    if(active1){
        toggleLight.classList.toggle('active');
        body.classList.toggle('lightMode');
        textDL.innerHTML = "Light Mode";
    }
    else{
        toggleLight.classList.toggle('active');
        body.classList.toggle('lightMode');
        textDL.innerHTML = "Dark Mode";
    }
}







//POSITION 

const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);