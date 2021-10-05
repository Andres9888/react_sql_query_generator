import './App.css';
import { useContext, useState, useCallback } from 'react';

import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { OptionsRow } from './features';
import { StoreContext } from './stores/store';

const App = observer(() => {
  const Store = useContext(StoreContext);
  const [sql, setSql] = useState<string | JSX.Element[]>('Your Generated SQL Statement goes here:');
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
      console.log(rows);
      console.log(newRows);
      console.log(rowIndex);
      newRows.splice(rowIndex, 1);
      setRows(newRows);
    },
    [rows]
  );

  // const onAdd = useCallback(() => {
  //   const newRows = [...rows];
  //   newRows.push(<OptionsRow key={nanoid()} rowIndex={newRows.length} onRemove={onRemove} />);
  //   setRows(newRows);
  // }, [rows, onRemove]);

  const onGenerate = () => {
    const filtered = Object.entries(Store.options).filter(([_key, value]) => {
      return value.userInput;
    });
    const options = filtered.map(column => (
      <h2
        key={nanoid()}
      >{`SELECT ${column[0]} FROM session WHERE ${column[0]} ${column[1].operatorsSelected} ${column[1].userInput}`}</h2>
    ));
    setSql(options);
  };

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
      {rows}
      <AddButton type="button" onClick={onClick}>
        Add
      </AddButton>
      <br />
      <SearchButton type="button" onClick={onGenerate}>
        Search
      </SearchButton>
      {sql}
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
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 13px;
  margin-top: 40px;
`;

const AddButton = styled.button`
  align-self: start;
  background-color: #4da4f8;
  border: none;
  border-radius: 4px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  font-weight: 600;
  height: 30px;
  padding-left: 17px;
  padding-right: 17px;
`;

const SearchButton = styled.button`
  align-self: start;
  background-color: #4da4f8;
  border: none;
  border-radius: 4px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  font-weight: 600;
  height: 30px;
  padding-left: 17px;
  padding-right: 17px;
`;
