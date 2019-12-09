import randomShuffle from '../utils/randomShuffle';
import isSorted from '../utils/isSorted';

function* bogoSort(values) {
  while (!isSorted(values)) {
    randomShuffle(values, true);
    yield values;
  }
}
export default bogoSort;
