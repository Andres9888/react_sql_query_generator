import { useState } from 'react';

import { StringOperatorsOptions, NumberOperatorsOptions } from './components';

export const options = {
  Domain: 'string',
  'User Email': 'string',
  'Screen Width': 'number',
  'Screen Height': 'number',
  '# of Visits': 'number',
  'First Name': 'string',
  'Last Name': 'string',
  'Page Response time (ms)': 'number',
  'Page Path': 'string',
};

export const OptionsRow = () => {
  const [dropDown, setdropdown] = useState('Domain');
  const [dropDownType, setdropdownType] = useState('string');
  const [numberOperatorsSelected, setNumberOperatorsSelected] = useState('equals');

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
      return <input type="text" />;
    }

    if (dropDownType === 'number' && numberOperatorsSelected !== 'between') {
      return <input type="number" />;
    }

    if (dropDownType === 'number' && numberOperatorsSelected === 'between') {
      return (
        <div>
          <input type="text" />
          <h2>and</h2>
          <input type="text" />
        </div>
      );
    }

    return null;
  };

  function onChange(e) {
    setdropdown(e.target.value);
    setdropdownType(options[e.target.value]);
  }
  return (
    <div>
      <select id="options" name="options" value={dropDown} onChange={onChange}>
        {Object.keys(options).map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      {renderOperatorsOptions()}
      {renderInput()}
    </div>
  );
};
