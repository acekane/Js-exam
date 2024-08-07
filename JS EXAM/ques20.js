
function productOfArray(arr) {
    return arr.reduce((a, b) => a * b, 1);
  }
  let numbers = [1, 2, 3, 4, 5];
  let product = productOfArray(numbers);
  console.log(product); 
  