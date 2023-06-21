import React from 'react';
import sorters from './sorters';
import { Animation, SquareCanvas, CircleCanvas, HexCanvas, TextSelect } from './components';
import { generateHslData, partialShuffle, randomShuffle, getTabIndex } from './utils';
import './App.css';

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
  const [shape, setShape] = React.useState('square');

  const hslData = generateHslData(TILE_PER_ROW);

  return (
    <div className="App">
      <div className="App-content">
        <div className="Banner">
          <div className="Banner-content">
            A visualization of <em>sorts</em>
          </div>
          <div>
            <span>using </span>
            <TextSelect
              value={sortAlgo}
              options={sorters}
              setValue={setSortAlgo}
              tabIndex={getTabIndex()}
            />
          </div>
          <div>
            <span className="Banner-content">with </span>
            <TextSelect
              value={arrangement}
              options={ARRANGEMENTS}
              setValue={setArrangement}
              tabIndex={getTabIndex()}
            />
            <span className="Banner-content"> data</span>
          </div>
          <div>
            <span className='Banner-content'>drawn as </span>
            <TextSelect
              value={shape}
              options={CANVASES}
              setValue={setShape}
              tabIndex={getTabIndex()}
            />
            <span className='Banner-content'> tiles.</span>
          </div>
        </div>
        <Animation
          sorters={setupSorters(sortAlgo, arrangement, ROW_COUNT, TILE_PER_ROW)}
          canvas={data =>
            CANVASES[shape].component({ tileSize: TILE_SIZE, data, hslData })
          }
          hslData={hslData}
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
