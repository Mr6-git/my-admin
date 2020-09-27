import React, { Component } from 'react'

export default class Login extends Component {
  constructor () {
    super()
    this.state = {}
  }
  toggleLogin = () => {
    this.props.changeLogin('login')
  }
  render() {
    return (
      <div>
        <h1>注册</h1>
        <button onClick={this.toggleLogin}>登录</button>
      </div>
    )
  }
}
