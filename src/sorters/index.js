import bubbleSort from './bubbleSort';
import combSort from './combSort';
import insertionSort from './insertionSort';
import quickSortLomuto from './quickSortLomuto';
import selectionSort from './selectionSort';

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
  quickSortLomuto: {
    title: 'Quick Sort (Lomuto)',
    fn: quickSortLomuto,
  },
  selectionsort: {
    title: 'Selection Sort',
    fn: selectionSort,
  },
};

export default sorters;
