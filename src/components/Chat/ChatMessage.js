import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './ChatMessage.css';
import Avatar from '../User/Avatar'

class ChatMessage extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    user: PropTypes.object
  }
  render() {
    const { message, user = {} } = this.props
    return (
      <div title={user.email} className="ChatMessage">
        <div className="ChatMessage-avatar">
          <Avatar 
            avatar={user.avatar} 
            alt={user.firstName} 
          />
        </div>
        <div className="ChatMessage-message">{message.message}</div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return ({
    user: state.users[props.message.userId]
  })
}

export default connect(
  mapStateToProps,
  null
)(ChatMessage)