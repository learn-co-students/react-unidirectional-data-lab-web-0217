'use strict'

const React = require('react');
const Toolbar = require('./Toolbar');

class FileView extends React.Component {
  render() {
    return (
      <div className="file-view">
        <Toolbar onAdd={this.props.onAdd} onRemove={this.props.onRemove} />
        <textarea value={this.props.file} onChange={this.props.onChange} className="file-view__text" />
      </div>
    );
  }
}

module.exports = FileView;
