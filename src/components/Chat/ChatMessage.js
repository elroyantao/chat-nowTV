import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ChatMessage extends Component {
  static propTypes = {
    message: PropTypes.object
  }
  render() {
    const { message } = this.props
    return (
      <div>
        {message.message}
      </div>
    )
  }
}
