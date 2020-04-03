import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/app/Navbar'
import Home from './components/app/Home'
import MyComponent from './components/app/MyComponent'
import { loadWeb3 } from './store/interactions'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = await loadWeb3(dispatch)
  }

  render() {
    const {
      account,
    } = this.props;

    return (
      <BrowserRouter>
        <div className="app">
          <Navbar {...this.props} />
          <div id="content">
            <Switch>
              <Route
                path='/my-component'
                render={(props) => (
                  <MyComponent account={account} /> : null
                )}
              />
              <Route
                path='/'
                render={(props) => (
                  <Home {...props} /> : null
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    // TODO: Fill me in
  }
}

export default connect(mapStateToProps)(App);
