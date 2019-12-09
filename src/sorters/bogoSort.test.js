import bogoSort from './bogoSort';

it('should return a sorted array', () => {
  const input = [3, 2, 1];

  const sorter = bogoSort(input);

  let next = sorter.next();
  let output;
  while (!next.done) {
    output = next.value;
    next = sorter.next();
  }

  expect(output).toBeSorted();
});
