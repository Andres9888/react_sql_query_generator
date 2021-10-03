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
      <option value="=">Equals</option>
      <option value="CONTAINS">Contains</option>
      <option value="LIKE">Starts with</option>
      <option value="IN">In List</option>
    </Select>
  );
};

const Select = styled.select`
  display: flex;
  height: 27px;
  width: 238px;
`;
