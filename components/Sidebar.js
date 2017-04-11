'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

export default class Sidebar extends React.Component {
  handleClick(index, ev) {
    ev.preventDefault()
    this.props.onSelect(index)
  }
  render() {
    const { files, selectedFileIndex, onSelect } = this.props;

    return (
      <ul className="sidebar">
        {files.map((el, i) => {
          let selected = i === selectedFileIndex
          return <SidebarItem file={el}
            isSelected={selected}
            onClick={this.handleClick.bind(this, i)}/>
        })}
      </ul>
    );
  }
}
