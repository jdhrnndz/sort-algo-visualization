import React from 'react';
import './App.css';
import partialShuffle from './utils/partialShuffle';
import sorters from './sorters';
import Animation from './components/Animation';

const TILE_SIZE = 20;
const TILE_PER_ROW = Math.floor(window.innerWidth / TILE_SIZE);

function App() {
  const [sortAlgo, setSortAlgo] = React.useState('combsort');
  const options = [];
  for (const key in sorters) {
    options.push(
      <option value={key} key={sorters[key].title}>
        {sorters[key].title}
      </option>
    );
  }

  let number = 0;
  const initialData = partialShuffle(
    Array.from(Array(TILE_PER_ROW), item => number++),
    TILE_PER_ROW
  );

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
        <Animation sort={sorters[sortAlgo].fn([...initialData])}></Animation>
      </div>
    </div>
  );
}

export default App;
