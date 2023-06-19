import React from 'react';
import './App.css';
import partialShuffle from './utils/partialShuffle';
import sorters from './sorters';
import Animation from './components/Animation';
import SquareCanvas from './components/SquareCanvas';
import CircleCanvas from './components/CircleCanvas';
import HexCanvas from './components/HexCanvas';
import randomShuffle from './utils/randomShuffle';

const TILE_PER_ROW = 100;
const TILE_SIZE = window.innerWidth / TILE_PER_ROW;
const ROW_COUNT = Math.ceil(window.innerHeight / TILE_SIZE);

const ARRANGEMENTS = {
  random: {
    title: 'Random',
    fn: randomShuffle,
  },
  reverse: {
    title: 'Reverse Sorted',
    fn: array => array.reverse(),
  },
  partial: {
    title: 'Partially Sorted',
    fn: partialShuffle,
  },
};

const CANVASES = {
  square: {
    title: 'Square',
    component: props => <SquareCanvas {...props} />,
  },
  circle: {
    title: 'Circle',
    component: props => <CircleCanvas {...props} />,
  },
  hex: {
    title: 'Hexagon',
    component: props => <HexCanvas {...props} />,
  },
};

function App() {
  const [sortAlgo, setSortAlgo] = React.useState('combsort');
  const [arrangement, setArrangement] = React.useState('random');
  const [shape, setShape] = React.useState('hex');

  const algoOptions = [];
  for (const key in sorters) {
    algoOptions.push(
      <option value={key} key={sorters[key].title}>
        {sorters[key].title}
      </option>
    );
  }

  const arrangementOptions = [];
  for (const key in ARRANGEMENTS) {
    arrangementOptions.push(
      <option value={key} key={ARRANGEMENTS[key].title}>
        {ARRANGEMENTS[key].title}
      </option>
    );
  }

  const canvasOptions = [];
  for (const key in CANVASES) {
    canvasOptions.push(
      <option value={key} key={CANVASES[key].title}>
        {CANVASES[key].title}
      </option>
    );
  }

  return (
    <div className="App">
      <div className="App-content">
        <div className="Banner">
          <div className="Banner-content">
            A visualization of <em>sorts</em>
          </div>
          <div>
            <span>using</span>
            <select
              name="sort-algo"
              id="sort-algo-select"
              value={sortAlgo}
              onChange={e => setSortAlgo(e.target.value)}
            >
              {algoOptions}
            </select>
          </div>
          <div>
            <span className="Banner-content">with</span>
            <select
              name="arrangement"
              id="arrangement-select"
              value={arrangement}
              onChange={e => setArrangement(e.target.value)}
            >
              {arrangementOptions}
            </select>
            <span className="Banner-content">data</span>
          </div>
          <div>
            <select
              name="element"
              id="element-select"
              value={shape}
              onChange={e => setShape(e.target.value)}
            >
              {canvasOptions}
            </select>
          </div>
        </div>
        <Animation
          sorters={setupSorters(sortAlgo, arrangement, ROW_COUNT, TILE_PER_ROW)}
          canvas={data =>
            CANVASES[shape].component({ tileSize: TILE_SIZE, data })
          }
        />
      </div>
    </div>
  );
}

function setupSorters(algo, arrangement, datasetCount, itemCount) {
  const sorterCollection = [];

  for (let i = 0; i < datasetCount; i++) {
    sorterCollection.push(
      sorters[algo].fn([...generateInitialData(arrangement, itemCount)])
    );
  }

  return sorterCollection;
}

export function generateInitialData(arrangement, count) {
  let number = 0;
  const initialData = ARRANGEMENTS[arrangement].fn(
    Array.from(Array(count), item => number++)
  );

  return initialData;
}

export default App;
