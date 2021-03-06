import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { getChatLog, getUsersLog } from './service';

import './App.css';
import ChatRoom from './components/Chat/ChatRoom'

class App extends Component {
  static propTypes = {
    getChatLog: PropTypes.func,
    getUsersLog: PropTypes.func
  }
  componentDidMount() {
    const { getChatLog, getUsersLog } = this.props
    getChatLog()
    getUsersLog()
  }
  render() {
    return (
      <div>
        <h1>Welcome to React.js chat room!</h1>
        <ChatRoom />
      </div>
    );
  }
}

const mapDispatchToProps = { getChatLog, getUsersLog }

export default connect(
  null,
  mapDispatchToProps
)(App);
