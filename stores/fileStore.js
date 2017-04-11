'use strict';

import Store from './Store';

class FileStore extends Store{

  updateFile(index, updatedvalue){
    let newstate = Object.assign([], this.getState())
    newstate[index] = updatedvalue
    this.setState(newstate)
  }

  removeFile(index){
    let newstate = this.getState()
    if (newstate.length <= 1){
      newstate=['']
    }else{
      newstate.splice(index, 1)
    }
    this.setState(newstate)
  }

  addFile(){
    let newstate = Object.assign([], this.getState())
    newstate.push('')
    this.setState(newstate)
  }
}

const fileStore = new FileStore(['']);

export default fileStore;
