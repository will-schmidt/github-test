import React from 'react'
import logo from './logo.svg'
import './App.css'

const Button = props => <button onClick={props.onClick}>{props.label}</button>
class Display extends React.Component {
  render() {
    return <p>{this.props.value}</p>
  }
}

class App extends React.Component {
  state = {
    inputValue: '',
    profile: null
  }

  handleClick = () => {
    const url = `https://api.github.com/users/${this.state.inputValue}`
    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({ profile: data }))
  }

  handleChange = e => this.setState({ inputValue: e.target.value })

  render() {
    console.log('rendering', this.state.profile)
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.profile && this.state.profile.avatar_url}
            className="App-logo"
            alt="logo"
          />
          {this.state.profile && this.state.profile.name}
          <Button onClick={this.handleClick} label="Click" />
          <input onChange={this.handleChange} />
        </header>
      </div>
    )
  }
}

export default App
