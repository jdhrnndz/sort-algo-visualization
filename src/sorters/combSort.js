function* combSort(values) {
  let n = values.length;
  let gap = n;
  let swapped = true;
  while (gap !== 1 || swapped) {
    gap = getNextGap(gap);
    swapped = false;
    for (let i = 0; i < n - gap; i++) {
      if (values[i] > values[i + gap]) {
        [values[i], values[i + gap]] = [values[i + gap], values[i]];
        yield values;
        swapped = true;
      }
    }
  }
}

const getNextGap = gap => {
  let nextGap = (gap * 10) / 13;
  if (nextGap < 1) return 1;
  return nextGap;
};

export default combSort;
