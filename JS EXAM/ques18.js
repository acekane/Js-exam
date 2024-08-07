
function filterEvenNumbers(arr) {
    return arr.filter(element => element % 2 === 0);
  }
  let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);