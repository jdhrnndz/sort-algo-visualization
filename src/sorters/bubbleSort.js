function* bubbleSort(values) {
  let swapped = false;
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        swap(values, j, j + 1);
        swapped = true;
      }
      yield values;
    }

    if (!swapped) {
      return;
    }
  }
}

function swap(array, firstIdx, secondIdx) {
  [array[firstIdx], array[secondIdx]] = [array[secondIdx], array[firstIdx]];
}

export default bubbleSort;
