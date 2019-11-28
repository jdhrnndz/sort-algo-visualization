import bubbleSort from './bubbleSort';
import combSort from './combSort';
import insertionSort from './insertionSort';

const sorters = {
  bubblesort: {
    title: 'Bubble Sort',
    fn: bubbleSort,
  },
  combsort: {
    title: 'Comb Sort',
    fn: combSort,
  },
  insertionsort: {
    title: 'Insertion Sort',
    fn: insertionSort,
  },
};

export default sorters;
