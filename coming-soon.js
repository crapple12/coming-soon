var countDownDate = new Date("Dec 31, 2026 23:59:59").getTime();

var form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

var x = setInterval(function() {

  var now = new Date().getTime();

    var distance = countDownDate - now;

    var daysValue = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hoursValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secondsValue = Math.floor((distance % (1000 * 60)) / 1000);

const days = document.getElementById("days");
days.textContent = daysValue;
const hours = document.getElementById("hours");
hours.textContent = hoursValue;
const minutes = document.getElementById("minutes");
minutes.textContent = minutesValue;
const seconds = document.getElementById("seconds");
seconds.textContent = secondsValue;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);





