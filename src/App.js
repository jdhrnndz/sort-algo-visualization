import React from 'react';
import './App.css';
import partialShuffle from './utils/partialShuffle';
import bubbleSort from './sorters/bubbleSort';
import combSort from './sorters/combSort';

const TILE_SIZE = 50;
const TILE_PER_ROW = Math.floor(window.innerWidth / TILE_SIZE);
const ROW_COUNT = Math.floor(window.innerHeight / TILE_SIZE);

function App() {
  let canvasRef = React.useRef(null);
  let number = 0;
  const initialData = partialShuffle(
    Array.from(Array(TILE_PER_ROW), item => number++),
    TILE_PER_ROW
  );
  const [sortAlgo, setSortAlgo] = React.useState('combsort');
  const [requestId, setRequestId] = React.useState(null);

  React.useEffect(() => {
    let sort;

    switch (sortAlgo) {
      case 'combsort':
        sort = combSort(initialData);
        break;
      case 'bubblesort':
      default:
        sort = bubbleSort(initialData);
        break;
    }

    window.cancelAnimationFrame(requestId);
    draw(canvasRef, sort, setRequestId)();
  }, [sortAlgo]);

  return (
    <div className="App">
      <div className="App-content">
        <select
          name="sort-algo"
          id="sort-algo-select"
          value={sortAlgo}
          onChange={e => setSortAlgo(e.target.value)}
        >
          <option value="bubblesort">Bubble Sort</option>
          <option value="combsort">Comb Sort</option>
        </select>
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </div>
    </div>
  );
}

const draw = (canvasRef, sort, setRequestId) => () => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');

  const result = sort.next();

  if (result.done) {
    alert('done!');
    return;
  }

  for (let i = 0; i < ROW_COUNT; i++) {
    for (let j = 0; j < TILE_PER_ROW; j++) {
      context.fillStyle = `hsl(${result.value[j]}, 100%, 50%)`;
      context.fillRect(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }

  let requestId = requestAnimationFrame(draw(canvasRef, sort, setRequestId));
  setRequestId(requestId);
};

export default App;
