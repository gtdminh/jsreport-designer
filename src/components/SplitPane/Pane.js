import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pane extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const split = this.props.split
    const classes = [ 'Pane', split, this.props.className ]

    let style = {
      flex: 1,
      display: 'flex',
      outline: 'none'
    }

    if (this.state.size !== undefined) {
      if (split === 'vertical') {
        style.width = this.state.size
      } else {
        style.height = this.state.size
        style.display = 'flex'
      }
      style.flex = 'none'
    }

    style.minHeight = 0
    style.minWidth = 0

    return (
      <div className={classes.join(' ')} style={style}>
        {this.props.children}
      </div>
    )
  }
}

Pane.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  split: PropTypes.string
}

export default Pane
