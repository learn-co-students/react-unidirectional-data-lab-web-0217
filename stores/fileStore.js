'use strict';

const Store = require('./Store');

class FileStore extends Store {

  updateFile(index, file) {
    const files = this.getState().slice();
    files.splice(index, 1, file);
    this.setState(files);
  }

  addFile(){
    this.setState([...this.getState(), ""])
  }

  removeFile(index){
    if (this.getState().length === 1) {
        this.setState('')
    } else {
      let files = this.getState().slice()
      files.splice(index, 1)
      this.setState(files)
    }
  }

}

module.exports = new FileStore(['']);
