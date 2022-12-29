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


    const minutes = (now.getMinutes()<10?'0':'') + now.getMinutes();
    const minutesAngle = ((minutes/60) * 360) + ((seconds / 60) * 6) + 90;
    minutesHand.style.transform = `rotate(${minutesAngle}deg)`;
    digitalMinutes.innerHTML = minutes;

    // const hour = now.getHours();
    const hour = (now.getHours()<10?'0':'') + now.getHours();
    const hourAngle = ((hour / 12) * 360) + ((minutes/60) * 30) + 90;
    hoursHand.style.transform = `rotate(${hourAngle}deg)`;
    digitalHours.innerHTML = hour;

}

setInterval(setDate, 1000);

setDate;

//TOGGLES   
const analogClock = document.querySelector(".analog-clock");
const digitClock = document.querySelector(".digital-clock");

const container = document.querySelector(".container");
const container2 = document.querySelector(".container-2");

const textAD = document.querySelector(".toggle span");


let active = false

function toggle() {
    let toggle = document.querySelector('.toggle');
    active = !active;

    var width = window.innerWidth;

    if (active) {
        toggle.classList.add('active');
        analogClock.style.visibility = "hidden";
        digitClock.style.visibility = "visible";
        textAD.innerHTML = "Digital";
        if(width<= 600){
            container.style.padding = "5rem 4rem";
            container2.style.top = "10%";
        }else{
            container.style.padding = "8rem 3rem";
        }
    } else {
        toggle.classList.remove('active');
        analogClock.style.visibility = "visible";
        digitClock.style.visibility = "hidden";
        textAD.innerHTML = "Analog";
        if(width<=600){
            container.style.padding = "17rem 3.5rem";
            container2.style.top = "5%";
        }else{
            container.style.padding = "17rem 0";
        }
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


//LOCATION

const positionIcon = document.querySelector(".material-symbols-outlined");
const locationText = document.querySelector(".location-txt");

  const findMyState = () => {

    const status = document.querySelector(".location");

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data =>{
            status.innerHTML = data.city;
            if(status.lenght !== 0){
                status.style.fontSize = "1.5rem";
                positionIcon.style.visibility = "hidden";
                locationText.style.visibility = "hidden";
            }
        })
    }

    const error = () => {
        status.style.fontSize = "1rem";
        alert("Error!!!You have not authorised the browser to find your location!");
    }

    navigator.geolocation.getCurrentPosition(success, error);

  }

  positionIcon.addEventListener("click", findMyState);

