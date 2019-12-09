import isSorted from './isSorted';

it('should identify if array param is sorted or not', () => {
  const sortedArray = [1, 2, 3, 4, 5];
  const shuffledArray = [4, 1, 3, 5, 2];

  expect(isSorted(sortedArray)).toBeTruthy();
  expect(isSorted(shuffledArray)).toBeFalsy();
});
