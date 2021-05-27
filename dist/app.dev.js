"use strict";

var countdown = function countdown() {
  var countDate = new Date("June 27, 2021 00:00:00").getTime();
  var nowTime = new Date().getTime();
  var gap = countDate - nowTime; //Simple time calculation

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var textday = Math.floor(gap / day);
  var texthour = Math.floor(gap % day / hour);
  var textminute = Math.floor(gap % hour / minute);
  var textsecond = Math.floor(gap % minute / second);
  document.querySelector(".day").innerText = textday;
  document.querySelector(".hour").innerText = texthour;
  document.querySelector(".minutes").innerText = textminute;
  document.querySelector(".seconds").innerText = textsecond;
};

setInterval(countdown, 1000);