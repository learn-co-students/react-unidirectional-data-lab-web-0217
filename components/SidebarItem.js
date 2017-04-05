'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file && file.split('\n').find(line => line.length);
  }

  render() {
    return (
      <li className={classNames('sidebar__item', { 'sidebar__item--selected': this.props.isSelected })}>
      <a href='#' onClick={this.props.onClick} className='sidebar__link'>
        {SidebarItem.getTitle(this.props.file) || <em>Untitled</em>}
      </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
