'use strict'

import React from 'react';
import Sidebar from './Sidebar';
import FileView from './FileView';
import Toolbar from './Toolbar';

import fileStore from '../stores/fileStore';
import actions from '../actions';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      files: fileStore.getState(),
      selectedFileIndex: 0
    }
    this.listener = this.listener.bind(this)
  }
  listener(files) {
    this.setState({files})
  }
  componentDidMount() {
    this.removeListener = fileStore.addListener(this.listener)
  }
  componentWillUnmount() {
    this.removeListener(this.listener)
  }
  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    // Dispatch action
  }
  handleSelect(selectedFileIndex) {

  }
  handleAdd(ev) {
    ev.preventDefault();
    // Dispatch action
  }
  handleRemove(ev) {
    ev.preventDefault()
    // Dispatch action
  }
  render() {
    const { files, selectedFileIndex } = this.state;
    const file = files[selectedFileIndex];

    return (
      <div className="app">
        <Sidebar
          files={files}
          selectedFileIndex={selectedFileIndex}
          onSelect={this.handleSelect}
        />
        <FileView
          file={file}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}
