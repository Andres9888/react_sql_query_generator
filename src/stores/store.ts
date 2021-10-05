import { createContext } from 'react';

import { observable } from 'mobx';

class Store {
  @observable options = {
    domain: {
      name: 'Domain',
      type: 'string',
      isSelected: false,
      operatorsSelected: '=',
      userInput: null,
    },
    user_email: {
      name: 'User Email',
      type: 'string',
      isSelected: false,
      operatorsSelected: '=',
      userInput: null,
    },
    screen_width: {
      name: 'Screen Width',
      type: 'number',
      isSelected: false,
      operatorsSelected: '=',
      userInput: null,
    },
    screen_height: {
      name: 'Screen Height',
      type: 'number',
      isSelected: false,
      operatorsSelected: '=',
      userInput: null,
    },
    visits: {
      name: '# of Visits',
      type: 'number',
      isSelected: false,
      operatorsSelected: '=',
      userInput: null,
    },
    first_name: {
      name: 'First Name',
      type: 'string',
      isSelected: false,
      operatorsSelected: '=',
      userInput: null,
    },
    last_name: {
      name: 'Last Name',
      type: 'string',
      isSelected: false,
      operatorsSelected: '=',
      userInput: null,
    },
    page_response: {
      name: 'Page Response time (ms)',
      type: 'number',
      isSelected: false,
      operatorsSelected: '=',
      userInput: null,
    },
    path: {
      name: 'Page Path',
      type: 'string',
      isSelected: false,
      operatorsSelected: '=',
      userInput: null,
    },
  };
}

export const StoreContext = createContext(new Store());
