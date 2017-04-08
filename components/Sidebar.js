'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  handleClick(index, ev) {
    ev.preventDefault()
    this.props.onSelect(index)
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;
    const sidebarItems = []

    let isSelected = (index) => {
      return index === selectedFileIndex
    }

    files.forEach((file, index) => {
      sidebarItems.push(<SidebarItem key={index} onClick={(event) =>{this.handleClick(index, event)}} isSelected={isSelected(index)} file={file} />)
    })
    return (
      <ul className="sidebar">
        {sidebarItems}
      </ul>
    );
  }
}

module.exports = Sidebar;
