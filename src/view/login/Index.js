import React, { Component } from 'react'
import Login from './Login'
import Reg from './Reg'


export default class Index extends Component {
  constructor () {
    super()
    this.state = {
      loginFlag: 'login'
    }
  }
  changeLogin = (type) => {
    this.setState({
      loginFlag: type
    })
  }
  render() {
    const {loginFlag} = this.state
    return (
      <div>
        {
          loginFlag === 'login' ? <Login changeLogin={this.changeLogin} /> : <Reg changeLogin={this.changeLogin} />
        }
      </div>
    )
  }
}
