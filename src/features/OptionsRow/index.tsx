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
  const [operatorsSelected, setOperatorsSelected] = useState('=');
  const [inputValue, setInputValue] = useState('');

  function onInputChange(e) {
    setInputValue(e.target.value);
    Store.options[dropDown].userInput = e.target.value;
  }
  function onOperatorChange(selectedOperator) {
    setOperatorsSelected(selectedOperator);
    Store.options[dropDown].operatorsSelected = selectedOperator;
  }
  const renderOperatorsOptions = () => {
    if (dropDownType === 'string') {
      return (
        <StringOperatorsOptions
          operatorsSelected={operatorsSelected}
          onOperatorChange={onOperatorChange}
        />
      );
    }

    if (dropDownType === 'number') {
      return (
        <NumberOperatorsOptions
          operatorsSelected={operatorsSelected}
          onOperatorChange={onOperatorChange}
        />
      );
    }

    return null;
  };
  const renderInput = () => {
    if (dropDownType === 'string') {
      return <Input type="text" value={inputValue} onChange={onInputChange} />;
    }

    if (dropDownType === 'number' && operatorsSelected !== 'between') {
      return <Input type="number" value={inputValue} onChange={onInputChange} />;
    }

    if (dropDownType === 'number' && operatorsSelected === 'between') {
      return (
        <div>
          <Input isSmall type="text" value={inputValue} onChange={onInputChange} />
          <h2>and</h2>
          <Input isSmall type="text" value={inputValue} onChange={onInputChange} />
        </div>
      );
    }

    return null;
  };

  function onSelectChange(e) {
    setdropdown(e.target.value);
    setdropdownType(Store.options[e.target.value].type);
  }
  return (
    <OptionsRowContainer>
      <button type="button" onClick={() => onRemove(rowIndex)}>
        remove
      </button>
      <Select id="options" name="options" value={dropDown} onChange={onSelectChange}>
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
  box-sizing: border-box;
  display: flex;
  padding-bottom: 21px;
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 21px;
  width: 840px;
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
