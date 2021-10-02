import styled from 'styled-components';

interface Props {
  operatorsSelected: string;
  onOperatorChange: (selectedOperator: string) => void;
}

export const StringOperatorsOptions = ({ operatorsSelected, onOperatorChange }: Props) => {
  return (
    <Select
      id="stringOperators"
      name="stringOperators"
      value={operatorsSelected}
      onChange={e => onOperatorChange(e.target.value)}
    >
      <option value="equals">Equals</option>
      <option value="contains">Contains</option>
      <option value="starts with">Starts with</option>
      <option value="in list">In List</option>
    </Select>
  );
};

const Select = styled.select`
  display: flex;
  height: 27px;
  width: 238px;
`;
