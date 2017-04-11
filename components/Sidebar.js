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
        {files.map((file, index)=>{
          let selected = (selectedFileIndex == index)
          return <SidebarItem
                    onClick={this.handleClick.bind(this, index)}
                    isSelected={selected}
                    file={file}
                    key={index}
                    />
        })}
      </ul>
    );
  }
}
