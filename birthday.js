function nextbirthday(year, month, date) {
  if (month > 8) {
    year++;
    month = 8;
    date = 24;
    return [addzero(year) + "-" + addzero(month) + "-" + addzero(date)];
  } else if ((month = 8)) {
    if (date > 23) {
      year++;
      month = 8;
      date = 24;
      return [addzero(year) + "-" + addzero(month) + "-" + addzero(date)];
    } else {
      month = 8;
      date = 24;
      return [addzero(year) + "-" + addzero(month) + "-" + addzero(date)];
    }
  }
  return [addzero(year) + "-" + addzero(month) + "-" + addzero(date)];
}
function addzero(x) {
  if (x < 10) {
    return "0" + x;
  } else {
    return x;
  }
}
function addzeromili(x) {
  if (x < 100) {
    if (x < 10) {
      return "00" + x;
    } else {
      return "0" + x;
    }
  } else {
    return x;
  }
}
function birthday() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var date = today.getDate();
  var birthday = nextbirthday(year, month, date);
  var now = year + "-" + addzero(month) + "-" + addzero(date);

  document.getElementById("birthday").innerHTML = birthday;
  document.getElementById("today").innerHTML = now;

  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var milisecond = today.getMilliseconds();
  var date1 = new Date();
  var date2 = new Date(birthday);
  var diff = date2 - date1;
  const mili = Math.floor(diff % 1000);
  const sec = Math.floor(diff / 1000) % 60;
  const min = Math.floor(diff / 1000 / 60) % 60;
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = addzero(hours);
  document.getElementById("min").innerHTML = addzero(min);
  document.getElementById("sec").innerHTML = addzero(sec);
  document.getElementById("mili").innerHTML = addzeromili(mili);
}
setInterval("birthday()", 1);
