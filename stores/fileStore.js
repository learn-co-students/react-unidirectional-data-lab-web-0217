'use strict';

import Store from './Store';

class FileStore extends Store {
  updateFile(index, content) {
    let state = this.getState()
    let newState = Object.assign([], state)
    newState[index] = content
    this.setState(newState)
  }
  addFile() {
    let state = this.getState()
    let newState = Object.assign([], state)
    newState.push('')
    this.setState(newState)
  }
  removeFile(index) {
    let state = this.getState()
    if (state.length === 1) {
      state[0] = ''
    } else {
      state.splice(index, 1)
      this.setState(state)
    }
  }
}

const fileStore = new FileStore(['']);

export default fileStore;
