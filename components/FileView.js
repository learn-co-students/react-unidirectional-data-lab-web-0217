'use strict'

import React from 'react';
import Toolbar from './Toolbar';

export default class FileView extends React.Component {
  render() {
    return (
      <div className="file-view">
        <Toolbar onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
        <textarea
          value={this.props.file}
          className='file-view__text'
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
