const partialShuffle = (array, itemCount) => {
  const PARTIAL_SHUFFLE_FACTOR = Math.floor(Math.sqrt(itemCount));
  const len = array.length;

  for (
    let i = 0, minIndex = 0, maxIndex = PARTIAL_SHUFFLE_FACTOR;
    i < len;
    i++
  ) {
    let newIndex =
      (Math.floor(Math.random() * PARTIAL_SHUFFLE_FACTOR) + minIndex) %
      itemCount;
    let a = array[newIndex];
    array[newIndex] = array[i];
    array[i] = a;
    if (i === maxIndex) {
      minIndex += PARTIAL_SHUFFLE_FACTOR;
      maxIndex += PARTIAL_SHUFFLE_FACTOR;
    }
  }
  return array;
};

export default partialShuffle;