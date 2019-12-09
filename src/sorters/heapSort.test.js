import heapSort from './heapSort';
import { generateInitialData } from '../App.js';

it('should return a sorted array', () => {
  const input = generateInitialData('random', 200);

  const sorter = heapSort(input);

  let next = sorter.next();
  let output;
  while (!next.done) {
    output = next.value;
    next = sorter.next();
  }

  expect(output).toBeSorted();
});
