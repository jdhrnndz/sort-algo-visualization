import bubbleSort from './bubbleSort';
import combSort from './combSort';
import insertionSort from './insertionSort';
import quickSortHoare from './quickSortHoare';
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
  quickSortHoare: {
    title: 'Quick Sort (Hoare)',
    fn: quickSortHoare,
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
