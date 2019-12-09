import randomShuffle from './randomShuffle';
import isSorted from './isSorted';

it('should not change array length after shuffle', () => {
  const input = [1, 2, 3, 4, 5];

  expect(randomShuffle([...input]).length).toEqual(input.length);
});

it('should return an unsorted array', () => {
  const input = [1, 2, 3, 4, 5];

  expect(isSorted(randomShuffle([...input]))).toBeFalsy();
});
