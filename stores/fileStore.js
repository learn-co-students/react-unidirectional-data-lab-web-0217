'use strict';

const Store = require('./Store');

class FileStore extends Store{

  updateFile(index, file){
    let newState = Object.assign([], this.state)
    newState[index] = file
    this.setState(newState)
  }

  addFile(){
    let newState = Object.assign([], this.getState())
    newState.push('')
    this.setState(newState)
  }

  removeFile(index){
    if(index !== undefined){
      let newState = this.getState()
      newState.splice(index, 1)
      this.setState(newState)
    }else{
      this.setState([''])
    }
  }
}

module.exports = new FileStore(['Noah']);
