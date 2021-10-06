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
      key={nanoid()}
      rowId={nanoid()}
      onRemove={rowId => {
        if (rows.length > 1) {
          setRows(prevRows => prevRows.filter(item => item.props.rowId !== rowId));
        }
      }}
    />,
  ]);

  const onRemove = rowId => {
    setRows(prevRows => prevRows.filter(item => item.props.rowId !== rowId));
  };

  const onGenerate = () => {
    const filtered = Object.entries(Store.options).filter(([_key, value]) => {
      return value.userInput;
    });
    const options = filtered.map(column => {
      if (typeof column[1].userInput === 'string') {
        return (
          <SqlStatement
            key={nanoid()}
          >{`SELECT ${column[0]} FROM session WHERE ${column[0]} ${column[1].operatorsSelected} '${column[1].userInput}'`}</SqlStatement>
        );
      }

      return (
        <SqlStatement
          key={nanoid()}
        >{`SELECT ${column[0]} FROM session WHERE ${column[0]} ${column[1].operatorsSelected} ${column[1].userInput}`}</SqlStatement>
      );
    });

    setSql(options);
  };

  function onClick() {
    if (rows.length < Object.keys(Store.options).length) {
      setRows(prevRows => [
        ...prevRows,
        <OptionsRow key={nanoid()} rowId={nanoid()} onRemove={onRemove} />,
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
      <ButtonContainer>
        <SearchButton type="button" onClick={onGenerate}>
          Search
        </SearchButton>
        <ResetButton type="button">Reset</ResetButton>
      </ButtonContainer>
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

const SqlStatement = styled.h2`
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
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

const ButtonContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
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
  margin-right: 30px;
  padding-left: 17px;
  padding-right: 17px;
`;

const ResetButton = styled.button`
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
