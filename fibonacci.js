function fibonacci(limite) {
  let arrayFib = [0, 1];
  for (let i = 2; i <= limite; i++) {
    arrayFib.push(arrayFib[i - 1] + arrayFib[i - 2]);
  }

  return arrayFib;
}
let result = fibonacci(8);
console.log(result);
