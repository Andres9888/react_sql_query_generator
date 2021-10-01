import { createContext } from 'react';

import { observable } from 'mobx';

class Store {
  @observable options = {
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
}

export const StoreContext = createContext(new Store());
