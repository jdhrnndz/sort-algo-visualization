function* bogoSort(values) {
  while (!isSorted(values)) {
    shuffle(values, true);
    yield values;
  }
}

function isSorted(values) {
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] > values[i + 1]) return false;
  }
  return true;
}

function shuffle(values) {
  const len = values.length;
  for (let i = 0; i < len; i++) {
    const newIndex = Math.floor(Math.random() * len);
    swap(values, i, newIndex);
  }
}

function swap(array, firstIdx, secondIdx) {
  [array[firstIdx], array[secondIdx]] = [array[secondIdx], array[firstIdx]];
}

export default bogoSort;
