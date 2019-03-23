import React, { Component } from 'react';
import './App.css';
import KudosList from './components/KudosList';
import axios from 'axios';
import GiveKudos from './components/GiveKudos';
// import { Consumer } from './KudosContext';

class App extends Component {
  // <Consumer>
  state = {
    kudos: [{ to: 'Andrew', from: 'John', title: 'Thanks', body: 'Thanks for teaching the class' }, { to: 'Gabe', from: 'John', title: 'Thanks', body: 'Thanks for the cookies' }],
    title: '',
    body: '',
    to: '',
    from: ''
  }

  // </Consumer>
  handleChange = (event) => {
    this.setState({ inputTitle: event.target.value })
    this.setState({ inputBody: event.target.value })
    console.log(this.state.inputTitle)
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const data = { to: 'Andrew', from: 'John' }
    axios.post('/api/kudos', data);
  }

  render() {
    {axios.get('localhost:5000/api/kudos')}
    {this.setState({kudos: ''})}
    return (
      <div className="App">
        <GiveKudos handleClick={this.handleClick} />
        <KudosList kudoses={this.state.kudos} />
      </div>
    );
  }

}

export default App;
