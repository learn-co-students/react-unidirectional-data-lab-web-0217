'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {

  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(index, ev) {
    ev.preventDefault()
    this.props.onSelect(index)
  }

  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    return (
      <ul className="sidebar">
        {files.map((file, fileIndex) => {return < SidebarItem key={fileIndex} isSelected={fileIndex===selectedFileIndex ? true : false} file={file} onClick={this.handleClick.bind(null, fileIndex)}/>})}
      </ul>
    );
  }
}

module.exports = Sidebar;
