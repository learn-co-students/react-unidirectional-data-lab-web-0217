'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }

  render() {
    let line1, liClass, aClass

    if(this.props.file && this.props.file.length > 1){
      line1 = this.props.file.split('\n')[0]
    }else{
      line1 = 'Untitled'
    }

    if(this.props.isSelected){
      liClass = 'sidebar__item--selected'
    }else{
      liClass = 'sidebar__item'
    }

    return (
      <li className={liClass}>
        <a className="sidebar__link" onClick={this.props.onClick}>
          <em>{line1}</em>
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
