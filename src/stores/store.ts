import { createContext } from 'react';

import { observable } from 'mobx';

class Store {
  @observable options = {
    domain: {
      name: 'Domain',
      type: 'string',
      isSelected: false,
      operatorsSelected: '=',
      userInput: '',
    },
    user_email: {
      name: 'User Email',
      type: 'string',
      isSelected: false,
      operatorsSelected: '=',
      userInput: '',
    },
    screen_width: {
      name: 'Screen Width',
      type: 'number',
      isSelected: false,
      operatorsSelected: '=',
      userInput: '',
    },
    screen_height: {
      name: 'Screen Height',
      type: 'number',
      isSelected: false,
      operatorsSelected: '=',
      userInput: '',
    },
    visits: {
      name: '# of Visits',
      type: 'number',
      isSelected: false,
      operatorsSelected: '=',
      userInput: '',
    },
    first_name: {
      name: 'First Name',
      type: 'string',
      isSelected: false,
      operatorsSelected: '=',
      userInput: '',
    },
    last_name: {
      name: 'Last Name',
      type: 'string',
      isSelected: false,
      operatorsSelected: '=',
      userInput: '',
    },
    page_response: {
      name: 'Page Response time (ms)',
      type: 'number',
      isSelected: false,
      operatorsSelected: '=',
      userInput: '',
    },
    path: {
      name: 'Page Path',
      type: 'string',
      isSelected: false,
      operatorsSelected: '=',
      userInput: '',
    },
  };
}

export const StoreContext = createContext(new Store());
