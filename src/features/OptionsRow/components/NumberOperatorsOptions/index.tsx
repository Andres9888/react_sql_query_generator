interface Props {
  numberOperatorsSelected: string;
  setNumberOperatorsSelected: (seletedNumberOperator: string) => void;
}

export const NumberOperatorsOptions = ({
  setNumberOperatorsSelected,
  numberOperatorsSelected,
}: Props) => {
  return (
    <select
      id="numberOperators"
      name="numberOperators"
      value={numberOperatorsSelected}
      onChange={e => setNumberOperatorsSelected(e.target.value)}
    >
      <option value="equals">Equals</option>
      <option value="between">Between</option>
      <option value="greater than">Greater than</option>
      <option value="less than">Less than</option>
    </select>
  );
};
