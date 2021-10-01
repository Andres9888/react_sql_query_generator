import './App.css';
import { useContext, useState, useCallback } from 'react';

import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { OptionsRow } from './features';
import { StoreContext } from './stores/store';

const App = observer(() => {
  const Store = useContext(StoreContext);
  const [rows, setRows] = useState([
    <OptionsRow
      key={0}
      rowIndex={0}
      onRemove={useCallback(rowIndex => {
        const newRows = [...rows];
        newRows.splice(rowIndex, 1);
        setRows(newRows);
      }, [])}
    />,
  ]);

  const onRemove = useCallback(
    rowIndex => {
      const newRows = [...rows];
      newRows.splice(rowIndex, 1);
      setRows(newRows);
    },
    [rows]
  );

  function onClick() {
    if (rows.length < Object.keys(Store.options).length) {
      setRows(prevRows => [
        ...prevRows,
        <OptionsRow key={rows.length} rowIndex={rows.length} onRemove={onRemove} />,
      ]);
    }
  }
  return (
    <Container>
      {rows}
      <button type="button" onClick={onClick}>
        add
      </button>
      <button type="button">search</button>
    </Container>
  );
});

export default App;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 840px;
`;
