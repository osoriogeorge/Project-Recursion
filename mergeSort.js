function mergeSort(arr) {
  // Caso base: si el array tiene 0 o 1 elemento, ya está ordenado
  if (arr.length <= 1) {
    return arr;
  }

  // Dividir el array en dos mitades
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Llamada recursiva para ordenar cada mitad
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Combinar las dos mitades ordenadas
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Agregar los elementos restantes de left (si los hay)
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Agregar los elementos restantes de right (si los hay)
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log("Array ordenado:", sortedArr);
