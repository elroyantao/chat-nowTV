import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Time extends Component {
  static propTypes = {
    timestamp: PropTypes.string.isRequired
  }
  render() {
    const { timestamp } = this.props

    const date = new Date(timestamp)
    const day = date.toLocaleString('en-GB',{
      hour12: true
    })
    return (
      <div className="Time">
        {day}
      </div>
    )
  }
}