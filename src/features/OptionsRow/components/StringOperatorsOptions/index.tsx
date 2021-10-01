import styled from 'styled-components';

export const StringOperatorsOptions = () => {
  return (
    <Select id="stringOperators" name="stringOperators">
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
