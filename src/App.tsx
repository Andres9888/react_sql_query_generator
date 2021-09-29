import './App.css';
import { useState } from 'react';

import { OptionsRow, options } from './features';

const App = () => {
  const [rows, setRows] = useState([<OptionsRow key={0} />]);

  function onClick() {
    if (rows.length < Object.keys(options).length) {
      setRows(prevRows => [...prevRows, <OptionsRow key={rows.length} />]);
    }
  }
  return (
    <div className="App">
      {rows}
      <button type="button" onClick={onClick}>
        add
      </button>
    </div>
  );
};

export default App;
