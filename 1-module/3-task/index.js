function ucFirst(str) {
  if (str.length === 0) {
    return str; 
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}
console.log(ucFirst(''));
console.log(ucFirst('в'));
console.log(ucFirst('вася'));
console.log(ucFirst('петя'));