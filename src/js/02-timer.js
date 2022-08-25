// Imports
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// Refs
const ref = {
  btnStart: document.querySelector('[data-start]'),
  picker: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

// Default disable start button
ref.btnStart.disabled = true;

// Flatpickr function
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Report.failure(
        'Failure',
        'Please choose a date in the future',
        'Okay'
      );
      ref.btnStart.disabled = true;
    } else {
      ref.btnStart.disabled = false;
    }
  },
};
flatpickr(ref.picker, options);

// Counter function

ref.btnStart.addEventListener('click', startCounter);

function startCounter() {
  let startCounter = setInterval(() => {
    let counterTime = new Date(ref.picker.value) - new Date();
    ref.btnStart.disabled = true;
    if (counterTime >= 0) {
      let convertTime = convertMs(counterTime);
      ref.days.textContent = addLeadingZero(convertTime.days);
      ref.hours.textContent = addLeadingZero(convertTime.hours);
      ref.minutes.textContent = addLeadingZero(convertTime.minutes);
      ref.seconds.textContent = addLeadingZero(convertTime.seconds);
    } else {
      clearInterval(startCounter);
      Notiflix.Report.success(
        'Success',
        'Counter time has been completed successfully',
        'Okay'
      );
    }
  });
}

// Convert function
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Pad function
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
