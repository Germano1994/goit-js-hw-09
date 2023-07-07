import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";




const flatpickr = require("flatpickr");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      window.alert("Please choose a date in the future");
      document.querySelector("[data-start]").disabled = true;
    } else {
      document.querySelector("[data-start]").disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let countdownInterval;

startButton.addEventListener("click", () => {
  const selectedDate = flatpickr.parseDate(document.querySelector("#datetime-picker").value);
  const currentDate = new Date();
  const difference = selectedDate - currentDate;

  if (difference <= 0) {
    return;
  }

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const timeLeft = convertMs(selectedDate - new Date());

    daysElement.textContent = addLeadingZero(timeLeft.days);
    hoursElement.textContent = addLeadingZero(timeLeft.hours);
    minutesElement.textContent = addLeadingZero(timeLeft.minutes);
    secondsElement.textContent = addLeadingZero(timeLeft.seconds);

    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
});


