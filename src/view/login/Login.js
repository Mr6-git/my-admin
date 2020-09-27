import React, { Component } from 'react'

export default class Login extends Component {
  constructor () {
    super()
    this.state = {}
  }
  toggleLogin = () => {
    this.props.changeLogin('reg')
  }
  render() {
    return (
      <div>
        <h1>登录</h1>
        <button onClick={this.toggleLogin}>注册</button>
      </div>
    )
  }
}
