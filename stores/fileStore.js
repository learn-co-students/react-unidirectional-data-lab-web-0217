'use strict';

import Store from './Store';

class FileStore extends Store {

  addFile() {
    let files = this.state.slice()
    files.push('')
    this.setState(files)
  }

  updateFile(index, file) {
    let files = this.state.slice()
    files[index] = file
    this.setState(files)
  }

  removeFile(index) {
    if (this.state.length === 1) {
      return this.setState([''])
    } else {
      let files = this.state.slice()
      files.splice(index, 1)
      this.setState(files)
    }
  }

}

const fileStore = new FileStore(['']);

export default fileStore;
