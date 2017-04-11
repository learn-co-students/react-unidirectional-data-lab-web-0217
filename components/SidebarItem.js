'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    if (file) {
      return file.split('\n').find(line => line.length);
    } else if (file === '') {
      return <em>Untitled</em>
    }
  }
  render() {
    let isSelected = this.props.isSelected
    let file = this.props.file
    return (
      <li className={isSelected ? "sidebar__item--selected" : "sidebar__item"}>
        <a className="sidebar__link" onClick={this.props.onClick}>
          {SidebarItem.getTitle(file)}
        </a>
      </li>
    );
  }
}
