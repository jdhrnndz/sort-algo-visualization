import React from 'react';
import './App.css';
import partialShuffle from './utils/partialShuffle';
import sorters from './sorters';
import usePrevious from './hooks/usePrevious';

const TILE_SIZE = 25;
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
  const prevRequestId = usePrevious(requestId);

  React.useEffect(() => {
    let sort = sorters[sortAlgo].fn(initialData);

    window.cancelAnimationFrame(prevRequestId);

    draw(canvasRef, sort, setRequestId)();
  }, [sortAlgo]);

  const options = [];

  for (const key in sorters) {
    options.push(<option value={key}>{sorters[key].title}</option>);
  }

  return (
    <div className="App">
      <div className="App-content">
        <select
          name="sort-algo"
          id="sort-algo-select"
          value={sortAlgo}
          onChange={e => setSortAlgo(e.target.value)}
        >
          {options}
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
      context.fillStyle = `hsl(${(result.value[j] / TILE_PER_ROW) *
        360}, 100%, 50%)`;
      context.fillRect(j * TILE_SIZE, i * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }

  let requestId = requestAnimationFrame(draw(canvasRef, sort, setRequestId));
  setRequestId(requestId);
};

export default App;
