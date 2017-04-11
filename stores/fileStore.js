'use strict';

const Store = require('./Store');

class FileStore extends Store{

    updateFile(index, input){
      let files = this.getState().slice()
      files.splice(index, 1, input)
      this.setState(files)
    }

    addFile(){
      let files = this.getState().slice()
      files.splice(-1,0,``)
      this.setState(files)
    }

    removeFile(index){
      if (this.getState().length === 1){
        let files = this.getState().slice()
        files.splice(-1, 1, "")
        this.setState(files)
      }else{
        let files = this.getState().slice()
        files.splice(index, 1)
        this.setState(files)
      }
    }

}


module.exports = new FileStore([``]);
