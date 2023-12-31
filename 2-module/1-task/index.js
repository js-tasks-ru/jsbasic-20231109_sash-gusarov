function sumSalary(salaries) {
  let totalSalary = 0;

  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && isFinite(salaries[key])) {
      totalSalary += salaries[key];
    }
  }
  return totalSalary;
}

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

let result = sumSalary(salaries);
console.log(result); 

