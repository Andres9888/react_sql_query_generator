import { useState, useContext } from 'react';

import { nanoid } from 'nanoid';
import { VscChromeClose } from 'react-icons/vsc';
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
    Store.options[e.target.key].userInput = e.target.value;
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
        <DoubleInputContainer>
          <Input isSmall type="text" value={inputValue} onChange={onInputChange} />
          <Span>and</Span>
          <Input isSmall type="text" value={inputValue} onChange={onInputChange} />
        </DoubleInputContainer>
      );
    }

    return null;
  };

  function onSelectChange(e) {
    // Store.options[dropDown].isSelected = false;
    setdropdown(e.target.value);
    setdropdownType(Store.options[e.target.value].type);
    // Store.options[e.target.value].isSelected = true;
  }
  return (
    <OptionsRowContainer>
      <RemoveWrapper>
        <RemoveIcon onClick={() => onRemove(rowIndex)} />
      </RemoveWrapper>
      <Select id="options" name="options" value={dropDown} onChange={onSelectChange}>
        {Object.entries(Store.options).map(([key, property]) => (
          <option key={nanoid()} value={key}>
            {property.name}
          </option>
        ))}
      </Select>
      {renderOperatorsOptions()}
      {renderInput()}
    </OptionsRowContainer>
  );
};

const RemoveWrapper = styled.div`
  align-self: center;
  display: flex;
  width: 40px;
`;

const RemoveIcon = styled(VscChromeClose)`
  margin: auto;
`;
const OptionsRowContainer = styled.div`
  border: 1px solid #a2b0c2;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 10px;
  padding-bottom: 21px;
  padding-right: 17px;
  padding-top: 21px;
  width: 840px;
`;

const Select = styled.select`
  border-radius: 3px;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  height: 30px;
  margin-right: 14px;
  width: 238px;
`;

const Input = styled.input.attrs((props: { isSmall: boolean }) => props)`
  display: flex;
  height: 30px;
  width: ${props => (props.isSmall ? `152px` : `238px`)};
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  margin-left: 14px;
  font-weight: 600;
  border-radius: 3px;
`;

const DoubleInputContainer = styled.div`
  display: flex;
`;

const Span = styled.span`
  border: 1px solid #a2b0c2;
  border-radius: 3px;
  display: flex;
`;
