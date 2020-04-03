import React from 'react'
import { get, filter, groupBy, map, sumBy } from 'lodash'
import { createSelector } from 'reselect'
import { formatTokens } from '../helpers'
import moment from 'moment'

// Web3
const web3Connection = state => get(state, 'web3.connection', null)
export const web3ConnectionSelector = createSelector(
  web3Connection, connection => connection
)

const accounts = state => get(state, 'web3.accounts', null)
export const accountSelector =createSelector(accounts, a => a[0])

const network = state => get(state, 'web3.network', null)
export const networkSelector =createSelector(network, n => n)
