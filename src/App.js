import React from 'react';
import './App.css';
import partialShuffle from './utils/partialShuffle';
import sorters from './sorters';
import Animation from './components/Animation';
import SquareCanvas from './components/SquareCanvas';
import randomShuffle from './utils/randomShuffle';

const TILE_SIZE = 25;
const TILE_PER_ROW = Math.floor(window.innerWidth / TILE_SIZE);
const ROW_COUNT = Math.floor(window.innerHeight / TILE_SIZE);

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

function App() {
  const [sortAlgo, setSortAlgo] = React.useState('combsort');
  const [arrangement, setArrangement] = React.useState('random');

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

  return (
    <div className="App">
      <div className="App-content">
        <select
          name="sort-algo"
          id="sort-algo-select"
          value={sortAlgo}
          onChange={e => setSortAlgo(e.target.value)}
        >
          {algoOptions}
        </select>
        <select
          name="arrangement"
          id="arrangement-select"
          value={arrangement}
          onChange={e => setArrangement(e.target.value)}
        >
          {arrangementOptions}
        </select>
        <Animation
          sorters={setupSorters(sortAlgo, arrangement, ROW_COUNT, TILE_PER_ROW)}
          canvas={data => <SquareCanvas tileSize={TILE_SIZE} data={data} />}
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

function generateInitialData(arrangement, count) {
  let number = 0;
  const initialData = ARRANGEMENTS[arrangement].fn(
    Array.from(Array(count), item => number++)
  );

  return initialData;
}

export default App;
