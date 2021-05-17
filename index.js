const startBtn = document.querySelector("#startBtn");
const dateInputRef = document.querySelector("#dateInput");
const timeInputRef = document.querySelector("#timeInput");
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      dateInput: document.querySelector("#dateInput"),
      timeInput: document.querySelector("#timeInput"),
      timer: document.querySelector(selector),
    };
    this.intervalId = null;
  }
  render(days, hours, mins, secs) {
    this.refs.timer.querySelector("[data-value='days']").textContent = days;
    this.refs.timer.querySelector("[data-value='hours']").textContent = hours;
    this.refs.timer.querySelector("[data-value='mins']").textContent = mins;
    this.refs.timer.querySelector("[data-value='secs']").textContent = secs;
  }
  timer() {
    const time = Date.parse(this.targetDate) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.render(days, hours, mins, secs);
  }
  startCountdown() {
    if (this.intervalId) return;
    this.timer();
    this.intervalId = setInterval(() => {
      this.timer();
    }, 1000);
  }
}
startBtn.addEventListener("click", function () {
  const date = dateInputRef.value + " " + timeInputRef.value;
  new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date(date),
  }).startCountdown();
});
