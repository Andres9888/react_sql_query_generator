import { createContext } from 'react';

import { observable } from 'mobx';

class Store {
  @observable options = {
    Domain: { type: 'string', isSelected: false, userInput: null },
    'User Email': { type: 'string', isSelected: false },
    'Screen Width': { type: 'number', isSelected: false },
    'Screen Height': { type: 'number', isSelected: false },
    '# of Visits': { type: 'number', isSelected: false },
    'First Name': { type: 'string', isSelected: false },
    'Last Name': { type: 'string', isSelected: false },
    'Page Response time (ms)': { type: 'number', isSelected: false },
    'Page Path': { type: 'string', isSelected: false },
  };
}

export const StoreContext = createContext(new Store());
