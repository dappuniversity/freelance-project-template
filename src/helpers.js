import web3 from 'web3'

const BN = web3.utils.BN

const DECIMALS = 18
const DECIMAL_RESOLUTION = (10 ** DECIMALS)

export const formatTokens = (input) => {
  const output = input / DECIMAL_RESOLUTION
  return output
}

// Use Web3 uitls because the token has the same decimal resolution as Ether
export const toTokens = (input) => {
  return web3.utils.toWei(input.toString(), 'ether')
}
