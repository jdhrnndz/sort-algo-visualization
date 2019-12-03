import randomShuffle from '../utils/randomShuffle';

function* bogoSort(values) {
  while (!isSorted(values)) {
    randomShuffle(values, true);
    yield values;
  }
}

function isSorted(values) {
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] > values[i + 1]) return false;
  }
  return true;
}

export default bogoSort;
