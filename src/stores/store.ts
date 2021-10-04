import { createContext } from 'react';

import { observable } from 'mobx';

class Store {
  @observable options = {
    Domain: { type: 'string', isSelected: true, operatorsSelected: '', userInput: null },
    'User Email': {
      type: 'string',
      isSelected: false,
      operatorsSelected: '',
      userInput: null,
    },
    'Screen Width': {
      type: 'number',
      isSelected: false,
      operatorsSelected: '',
      userInput: null,
    },
    'Screen Height': {
      type: 'number',
      isSelected: false,
      operatorsSelected: '',
      userInput: null,
    },
    '# of Visits': {
      type: 'number',
      isSelected: false,
      operatorsSelected: '',
      userInput: null,
    },
    'First Name': {
      type: 'string',
      isSelected: false,
      operatorsSelected: '',
      userInput: null,
    },
    'Last Name': {
      type: 'string',
      isSelected: false,
      operatorsSelected: '',
      userInput: null,
    },
    'Page Response time (ms)': {
      type: 'number',
      isSelected: false,
      operatorsSelected: '',
      userInput: null,
    },
    'Page Path': {
      type: 'string',
      isSelected: false,
      operatorsSelected: '',
      userInput: null,
    },
  };
}

export const StoreContext = createContext(new Store());
