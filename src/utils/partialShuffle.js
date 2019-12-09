const getPartialShuffleFactor = length => Math.floor(Math.sqrt(length));

const partialShuffle = array => {
  const len = array.length;
  const partialShuffleFactor = getPartialShuffleFactor(len);

  for (let i = 0, minIndex = 0, maxIndex = partialShuffleFactor; i < len; i++) {
    let newIndex =
      (Math.floor(Math.random() * partialShuffleFactor) + minIndex) % len;
    let a = array[newIndex];
    array[newIndex] = array[i];
    array[i] = a;
    if (i === maxIndex) {
      minIndex += partialShuffleFactor;
      maxIndex += partialShuffleFactor;
    }
  }
  return array;
};

export default partialShuffle;

export { getPartialShuffleFactor };
