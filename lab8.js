function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML += 'Дата и время для локали России: ' + today.toLocaleString('ru-RU') + '<br>';
    out.innerHTML += 'Дата и время для локали Австралии: ' + today.toLocaleString('en-AU') + '<br>';
    out.innerHTML += 'Дата и время для локали Китая (Гонконг): ' + today.toLocaleString('zh-HK') + '<br>';
    out.innerHTML += 'Дата и время для локали Японии: ' + today.toLocaleString('ja-JP') + '<br>';
    out.innerHTML += 'Дата и время для локали Германии: ' + today.toLocaleString('de') + '<br>';
}
