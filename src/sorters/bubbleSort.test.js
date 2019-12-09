import bubbleSort from './bubbleSort';
import { generateInitialData } from '../App.js';

it('should return a sorted array', () => {
  const input = generateInitialData('random', 200);

  const sorter = bubbleSort(input);

  let next = sorter.next();
  let output;
  while (!next.done) {
    output = next.value;
    next = sorter.next();
  }

  expect(output).toBeSorted();
});
