function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML += 'Дата и время для локали России: ' + today.toLocaleString('ru-RU') + '<br>';
    out.innerHTML += 'Дата и время для локали Австралии: ' + today.toLocaleString('en-AU') + '<br>';
    out.innerHTML += 'Дата и время для локали Китая (Гонконг): ' + today.toLocaleString('zh-HK') + '<br>';
    out.innerHTML += 'Дата и время для локали Японии: ' + today.toLocaleString('ja-JP') + '<br>';
    out.innerHTML += 'Дата и время для локали Германии: ' + today.toLocaleString('de') + '<br>';
}

function showDayCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    let div = document.getElementById('div1');
    daysCount = Math.floor(daysCount);
    div.innerHTML = "Количество дней с даты рождения: " + daysCount
}

function Clear() {
    let div = document.getElementById('div1');
    div.innerHTML = "Количество дней с даты рождения:"
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval (showTime, 1000);

