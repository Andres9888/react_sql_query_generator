import styled from 'styled-components';

interface Props {
  operatorsSelected: string;
  onOperatorChange: (selectedOperator: string) => void;
}

export const NumberOperatorsOptions = ({ onOperatorChange, operatorsSelected }: Props) => {
  return (
    <Select
      id="numberOperators"
      name="numberOperators"
      value={operatorsSelected}
      onChange={e => onOperatorChange(e.target.value)}
    >
      <option value="equals">Equals</option>
      <option value="between">Between</option>
      <option value="greater than">Greater than</option>
      <option value="less than">Less than</option>
    </Select>
  );
};

const Select = styled.select`
  display: flex;
  height: 27px;
  width: 238px;
`;
