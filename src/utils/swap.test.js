import swap from './swap';

describe('swap utility', () => {
  it.only('should be able to swap two values in an array', () => {
    const input = [1, 2, 3];
    const output = [2, 1, 3];

    swap(input, 0, 1);
    expect(input).toEqual(output);
  });
});
