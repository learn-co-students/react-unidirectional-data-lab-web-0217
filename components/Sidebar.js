'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index)
  }



  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    const sideBarList = files.map((file, i) => {
    	return <SidebarItem 
    	isSelected={selectedFileIndex === i} 
    	key={i} file={file} 
    	onClick={this.handleClick.bind(null, i)} />
    });

    return (
      <ul className="sidebar">
      	{sideBarList}
      </ul>
    );
  }
}

module.exports = Sidebar;
