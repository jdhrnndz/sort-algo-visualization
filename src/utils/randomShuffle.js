import swap from './swap';

function randomShuffle(values) {
  const len = values.length;
  for (let i = 0; i < len; i++) {
    const newIndex = Math.floor(Math.random() * len);
    swap(values, i, newIndex);
  }

  return values;
}

export default randomShuffle;
