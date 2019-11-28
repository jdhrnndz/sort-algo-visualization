import bogoSort from './bogoSort';
import bubbleSort from './bubbleSort';
import combSort from './combSort';
import heapSort from './heapSort';
import insertionSort from './insertionSort';
import mergeSort from './mergeSort';
import quickSortHoare from './quickSortHoare';
import quickSortLomuto from './quickSortLomuto';
import selectionSort from './selectionSort';
import shellSort from './shellSort';

const sorters = {
  bogoSort: {
    title: 'Bogo Sort',
    fn: bogoSort,
  },
  bubblesort: {
    title: 'Bubble Sort',
    fn: bubbleSort,
  },
  combsort: {
    title: 'Comb Sort',
    fn: combSort,
  },
  heapSort: {
    title: 'Heap Sort',
    fn: heapSort,
  },
  insertionsort: {
    title: 'Insertion Sort',
    fn: insertionSort,
  },
  mergeSort: {
    title: 'Merge Sort',
    fn: mergeSort,
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
  shellSort: {
    title: 'Shell Sort',
    fn: shellSort,
  },
};

export default sorters;
