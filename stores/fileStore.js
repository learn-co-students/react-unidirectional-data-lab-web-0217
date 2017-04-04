'use strict';
const Store = require('./Store');

class FileStore extends Store{
  constructor(files=['']) {
    super(files)
  }

  addFile() {
    let files = [...this.getState(), '']
    this.setState(files)
  }

  removeFile(index) {
    let files = [...this.getState()]
    if (files.length > 1) {
      files.splice(index, 1)
    } else {
      files = ['']
    }
    this.setState(files)
  }


  updateFile(index, file) {
    let files = [...this.getState()]
    files[index] = file
    this.setState(files)
  }

}

module.exports = new FileStore();
