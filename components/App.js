'use strict'

import React from 'react';
import Sidebar from './Sidebar';
import FileView from './FileView';
import Toolbar from './Toolbar';

import fileStore from '../stores/fileStore';
import actions from '../actions';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      files: fileStore.getState(),
      selectedFileIndex: 0
    }

    this.listener = this.listener.bind(this)
  }

  listener(files){
    this.setState({files})
  }

  componentDidMount() {
    this.removeListener = fileStore.addListener(this.listener)
  }
  componentWillUnmount() {
    this.removeListener()
  }
  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    actions.updateFile(selectedFileIndex, ev.target.value)
  }
  handleSelect(selectedFileIndex) {
    this.setState({
      selectedFileIndex: selectedFileIndex
    })
  }
  handleAdd(ev) {
    ev.preventDefault();
    actions.addFile()
  }
  handleRemove(ev) {
    ev.preventDefault()
    actions.removeFile(this.state.selectedFileIndex)
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
