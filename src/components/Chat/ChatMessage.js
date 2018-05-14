import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ChatMessage extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    user: PropTypes.object
  }
  render() {
    const { message, user = {} } = this.props
    return (
      <div title={user.email}>
        {message.message}
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