import { useState, useContext } from 'react';

import { StoreContext } from 'stores/store';
import styled from 'styled-components';

import { StringOperatorsOptions, NumberOperatorsOptions } from './components';

interface Props {
  rowIndex: number;
  onRemove: (index: number) => void;
}
export const OptionsRow = ({ rowIndex, onRemove }: Props) => {
  const Store = useContext(StoreContext);

  const [dropDown, setdropdown] = useState('Domain');
  const [dropDownType, setdropdownType] = useState('string');
  const [numberOperatorsSelected, setNumberOperatorsSelected] = useState('equals');
  const [inputValue, setInputValue] = useState('');

  const renderOperatorsOptions = () => {
    if (dropDownType === 'string') {
      return <StringOperatorsOptions />;
    }

    if (dropDownType === 'number') {
      return (
        <NumberOperatorsOptions
          numberOperatorsSelected={numberOperatorsSelected}
          setNumberOperatorsSelected={setNumberOperatorsSelected}
        />
      );
    }

    return null;
  };
  const renderInput = () => {
    if (dropDownType === 'string') {
      return <Input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />;
    }

    if (dropDownType === 'number' && numberOperatorsSelected !== 'between') {
      return <Input type="number" />;
    }

    if (dropDownType === 'number' && numberOperatorsSelected === 'between') {
      return (
        <div>
          <Input isSmall type="text" />
          <h2>and</h2>
          <Input isSmall type="text" />
        </div>
      );
    }

    return null;
  };

  function onChange(e) {
    setdropdown(e.target.value);
    Store.options[e.target.value].isSelected = true;
  }
  return (
    <OptionsRowContainer>
      <button type="button" onClick={() => onRemove(rowIndex)}>
        remove
      </button>
      <Select id="options" name="options" value={dropDown} onChange={onChange}>
        {Object.keys(Store.options).map(key =>
          Store.options[key].isSelected ? null : (
            <option key={key} value={key}>
              {key}
            </option>
          )
        )}
      </Select>
      {renderOperatorsOptions()}
      {renderInput()}
    </OptionsRowContainer>
  );
};

const OptionsRowContainer = styled.div`
  border: 1px solid #a2b0c2;
  border-radius: 3px;
  display: flex;
  padding-bottom: 21px;
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 21px;
  width: 100%;
`;

const Select = styled.select`
  display: flex;
  height: 27px;
  width: 238px;
`;

const Input = styled.input.attrs((props: { isSmall: boolean }) => props)`
  display: flex;
  height: 27px;
  width: ${props => (props.isSmall ? `152px` : `238px`)};
`;
