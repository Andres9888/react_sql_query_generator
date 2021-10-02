import { createContext } from 'react';

import { observable } from 'mobx';

class Store {
  @observable options = {
    Domain: { type: 'string', isSelected: false, operatorsSelected: 'equals', userInput: 'test' },
    'User Email': {
      type: 'string',
      isSelected: false,
      operatorsSelected: 'equals',
      userInput: null,
    },
    'Screen Width': {
      type: 'number',
      isSelected: false,
      operatorsSelected: 'equals',
      userInput: null,
    },
    'Screen Height': {
      type: 'number',
      isSelected: false,
      operatorsSelected: 'equals',
      userInput: null,
    },
    '# of Visits': {
      type: 'number',
      isSelected: false,
      operatorsSelected: 'equals',
      userInput: null,
    },
    'First Name': {
      type: 'string',
      isSelected: false,
      operatorsSelected: 'equals',
      userInput: null,
    },
    'Last Name': {
      type: 'string',
      isSelected: false,
      operatorsSelected: 'equals',
      userInput: null,
    },
    'Page Response time (ms)': {
      type: 'number',
      isSelected: false,
      operatorsSelected: 'equals',
      userInput: null,
    },
    'Page Path': {
      type: 'string',
      isSelected: false,
      operatorsSelected: 'equals',
      userInput: null,
    },
  };
}

export const StoreContext = createContext(new Store());
