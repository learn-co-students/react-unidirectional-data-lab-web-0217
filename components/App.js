'use strict'

const React = require('react');
const Sidebar = require('./Sidebar');
const FileView = require('./FileView');
const Toolbar = require('./Toolbar');

const fileStore = require('../stores/fileStore');
const actions = require('../actions');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      files: [''],
      selectedFileIndex: 0
    }
  }
  componentDidMount() {
    // TODO
    this.removeListener = fileStore.addListener((files) => {
      this.setState({
        files: files
      });
    });
  }
  componentWillUnmount() {
    // TODO
    this.removeListener()
  }
  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    // TODO Dispatch action
  }
  handleSelect(selectedFileIndex) {
    // TODO Update selectedFileIndex state
  }
  handleAdd(ev) {
    ev.preventDefault();
    // TODO Dispatch action
  }
  handleRemove(ev) {
    ev.preventDefault()
    // TODO Dispatch action
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

module.exports = App;
