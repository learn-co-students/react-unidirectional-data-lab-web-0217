'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    const { file, isSelected, onClick } = this.props
    let selection = isSelected ? "sidebar__item--selected" : "sidebar__item"
    return (
      <li className={selection}>
        <a className="sidebar__link" onClick={onClick}>
          {file ? file.split('\n')[0] : <em>Untitled</em>}
        </a>
      </li>
    );
  }
}
