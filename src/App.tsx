import './App.css';
import { useContext, useState, useCallback } from 'react';

import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { OptionsRow } from './features';
import { StoreContext } from './stores/store';

const App = observer(() => {
  const Store = useContext(StoreContext);
  const [sql, setSql] = useState('Your Generated SQL Statement goes here:');
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

  const filtered = Object.entries(Store.options).filter(([key, value]) => {
    return value.userInput;
  });

  console.log(filtered.map(column => column));

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
      <Header>Search for Sessions</Header>
      <OptionsRow key={0} rowIndex={0} onRemove={onRemove} />
      {rows}
      <button type="button" onClick={onClick}>
        add
      </button>
      <button type="button">search</button>
      {filtered.map(column => {
        return (
          <h2
            key={nanoid()}
          >{`SELECT ${column[0]} FROM session WHERE ${column[0]} ${column[1].operatorsSelected} ${column[1].userInput}`}</h2>
        );
      })}
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
  width: 840px;
`;

const Header = styled.h2`
  align-items: left;
  align-self: start;
  display: flex;
`;
