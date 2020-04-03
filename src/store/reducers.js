import { combineReducers } from 'redux';

import {
  WEB3_CONNECTION_LOADED,
  WEB3_ACCOUNTS_LOADED,
  WEB3_NETWORK_LOADED,
} from './actions';

function web3(state = { accounts: {} }, action) {
  switch (action.type) {
    case WEB3_CONNECTION_LOADED:
      return { ...state, connection: action.connection };
    case WEB3_ACCOUNTS_LOADED:
      return { ...state, accounts: action.accounts };
    case WEB3_NETWORK_LOADED:
      return { ...state, network: action.network };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  web3,
});

export default rootReducer;
