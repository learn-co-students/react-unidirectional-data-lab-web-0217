'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  constructor(){
    super()
  }
   static getTitle (file) {
    // Find first non-empty line and use as title.
    return file && file.split('\n').find(line => line.length);
  }

  render() {
    let file = this.props.file
    return (
      <li className={this.props.isSelected ? "sidebar__item--selected" : "sidebar__item"}>
        <a href='#' className="sidebar__link" onClick={this.props.onClick}>
          {SidebarItem.getTitle(this.props.file) || <em>Untitled</em>}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
