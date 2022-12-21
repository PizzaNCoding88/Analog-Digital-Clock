const hoursHand = document.querySelector(".analog-clock__hours-hand");
const minutesHand = document.querySelector(".analog-clock__minutes-hand");
const secondsHand = document.querySelector(".analog-clock__seconds-hand");

function setDate() {
    const now = new Date();

const seconds = now.getSeconds();
const secondsAngle = ((seconds / 60) * 360) + 90;
secondsHand.style.transform = `rotate(${secondsAngle}deg)`;

const minutes = now.getMinutes();
const minutesAngle = ((minutes/60) * 360) + ((seconds / 60) * 6) + 90;
minutesHand.style.transform = `rotate(${minutesAngle}deg)`;

const hour = now.getHours();
const hourAngle = ((hour / 12) * 360) + ((minutes/60) * 30) + 90;
hoursHand.style.transform = `rotate(${hourAngle}deg)`;
}

setInterval(setDate, 1000);

setDate;