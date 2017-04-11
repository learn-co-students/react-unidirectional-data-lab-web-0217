'use strict'

import React from 'react';
import classNames from 'classnames';

// export default class SidebarItem extends React.Component {
//
//   static getTitle (file) {
//     // Find first non-empty line and use as title.
//     return file.split('\n').find(line => line.length);
//   }
//   render() {
//     const {isSelected, file, onClick} = this.props
//
//     return (
//       <li className="sidebar__item">
//         <a href="#" className="sidebar__link">
//           {this.getTitle(file)}
//         </a>
//
//       </li>
//     );
//   }
// }

const getTitle = file =>
  file.split('\n').find(line => line.length);

const SidebarItem = ({ file = '', isSelected, onClick }) => (
  <li className={classNames('sidebar__item', {
    'sidebar__item--selected': isSelected
  })}>
    <a href='#' onClick={onClick} className='sidebar__link'>
      {getTitle(file) || <em>Untitled</em>}
    </a>
  </li>
);

export default SidebarItem;
