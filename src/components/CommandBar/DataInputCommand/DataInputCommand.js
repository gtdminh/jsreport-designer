import React, { PureComponent } from 'react'
import { DataInputEditor } from '../../Editor'

class DataInputCommand extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      showEditor: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.closeEditor = this.closeEditor.bind(this)
  }

  handleClick () {
    this.setState((prevState) => {
      return {
        showEditor: !prevState.showEditor
      }
    })
  }

  closeEditor () {
    this.setState({
      showEditor: false
    })
  }

  render () {
    const { showEditor } = this.state

    return (
      <div className='commandBar-command'>
        <button className='commandBar-button' onClick={this.handleClick}>
          <span className='fa fa-database' />
        </button>
        {showEditor && (
          <DataInputEditor
            onClose={this.closeEditor}
          />
        )}
      </div>
    )
  }
}

DataInputCommand.propTypes = {}

export default DataInputCommand
