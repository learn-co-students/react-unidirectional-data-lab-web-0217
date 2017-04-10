'use strict'

const React = require('react')
const SidebarItem = require('./SidebarItem')

class Sidebar extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

  handleClick(index, ev) {
  	ev.preventDefault()
  	this.props.onSelect(index)
  }



  render() {
    const { files, selectedFileIndex, onAdd } = this.props
    return (
      <ul className="sidebar" >
      	{files.map((currentFile, idx) => {
      		return <SidebarItem key={idx} onClick={this.handleClick.bind(null, idx)} file={currentFile} isSelected={selectedFileIndex === idx} />
      		 })}
      </ul>
    )
  }
}


module.exports = Sidebar
