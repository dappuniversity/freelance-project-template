// Web3
export const WEB3_CONNECTION_LOADED = 'WEB3_CONNECTION_LOADED'
export function web3Loaded(connection) {
  return {
    type: WEB3_CONNECTION_LOADED,
    connection,
  }
}

export const WEB3_ACCOUNTS_LOADED = 'WEB3_ACCOUNTS_LOADED'
export function web3AccountLoaded(accounts) {
  return {
    type: WEB3_ACCOUNTS_LOADED,
    accounts,
  }
}

export const WEB3_NETWORK_LOADED = 'WEB3_NETWORK_LOADED'
export function web3NetworkLoaded(network) {
  return {
    type: WEB3_NETWORK_LOADED,
    network,
  }
}
