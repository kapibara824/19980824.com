function getNextBirthdayDate() {
  var today = new Date();
  var birthday = new Date(today.getFullYear(), 7, 24)

  var diff = today - birthday
  
  // 差が正の値だったら今年の誕生日は過ぎているので来年のDateを生成する
  if (Math.sign(diff) == 1) {
    birthday = new Date(today.getFullYear() + 1, 7, 24)
  }

  return birthday

}

function getDateAsString(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var date = date.getDate();

  return year + "-" + addzero(month) + "-" + addzero(date);
}

function addzero(x) {
  return ("0" + x).slice(-2);
}

function addzeromili(x) {
  return ("00" + x).slice(-3);
}

function birthday() {
  var today = new Date();
  var birthday = getNextBirthdayDate();

  document.getElementById("today").innerHTML = getDateAsString(today);
  document.getElementById("birthday").innerHTML = getDateAsString(birthday);

  var diff = birthday - today;
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
