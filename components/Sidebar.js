'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(index, ev) {
    ev.preventDefault()
    this.props.onSelect(index)
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;
    const items = files.map((file, i) => {
      return <SidebarItem file={file} key={i} isSelected={i === selectedFileIndex} onClick={this.handleClick.bind(null, i)} />
    })

    return (
      <ul className="sidebar">
        {items}
      </ul>
    );
  }
}

module.exports = Sidebar;
