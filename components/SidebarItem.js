'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }


  render() {
    const {isSelected, file} = this.props
    let liclass = (isSelected) ? "sidebar__item--selected" : "sidebar__item"

    return (
      <li className={liclass}>
        <a className="sidebar__link" onClick={this.props.onClick}>
          {file ? file.split("\n")[0] : <em>Untitled</em>}
        </a>
      </li>
    );
  }
}
