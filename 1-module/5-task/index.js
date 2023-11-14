function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  } else {
    return str;
  }
}

let truncateStr = truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
console.log(truncateStr);
let truncateStrSecond = truncate('Всем привет!', 20);
console.log(truncateStrSecond);

