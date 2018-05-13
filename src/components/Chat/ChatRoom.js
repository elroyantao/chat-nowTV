import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ChatMessage from './ChatMessage'

class ChatRoom extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
  }
  render() {
    const { messages } = this.props
    if (!messages) return null
    return (
      <div>
        {messages.map(message => (
          <ChatMessage key={message.id} message={message}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(
  mapStateToProps,
  null
)(ChatRoom);