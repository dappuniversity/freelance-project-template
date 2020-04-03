import Web3 from 'web3'
import {
  TOKEN_ABI,
  TOKEN_ADDRESS
} from './config'
import {
  web3AccountsLoaded,
  web3NetworkLoaded,
  web3ConnectionLoaded
} from './store/actions'

export const initWeb3 = (dispatch) => {
  const connection = new Web3(Web3.givenProvider || "http://localhost:8545")
  dispatch(web3ConnectionLoaded(connection))
  return connection
}

export const loadNetwork = async (web3, dispatch) => {
  const network = await web3.eth.net.getNetworkType()
  dispatch(web3NetworkLoaded(network))
  return network
}

export const loadAccounts = async (web3, dispatch) => {
  const accounts = await web3.eth.getAccounts();
  dispatch(web3AccountsLoaded(accounts))
  return accounts
}
