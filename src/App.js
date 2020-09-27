import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './view/login/Index'
import '@/App.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}
