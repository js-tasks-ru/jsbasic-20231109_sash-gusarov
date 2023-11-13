/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name && name.trim().length >= 4) {
    if (name.indexOf(' ') === -1) {
      return true;
    }
  }
  return false;
}
console.log(isValid("Stan"));
console.log(isValid("Stan Smith")); 
console.log(isValid("   "));
console.log(isValid("Tom")); 


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
