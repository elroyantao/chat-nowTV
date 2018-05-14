import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Avatar.css';

export default class Avatar extends Component {
  static propTypes = {
    avatar: PropTypes.string,
    alt: PropTypes.string
  }
  defaultProps = {
    alt: ''
  }
  render() {
    const { avatar, alt } = this.props
    if (!avatar && !alt) return null
    return (
      <div className="Avatar">
        <img alt={alt} src={avatar} className="Avatar-image"/>
      </div>
    )
  }
}