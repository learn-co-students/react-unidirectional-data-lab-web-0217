'use strict';

class Store {
  constructor(initialState){
    this.listeners=[]
    this.state = initialState
  }

  getState(){
    return this.state
  }

  setState(state){
    this.state = state
    for(const listener of this.listeners){
      listener(state)
    }
  }

  addListener(listener){
    this.listeners.push(listener)
    const removeListener = () => {
      this.listeners = this.listeners.filter(l => listener !== l)
    }
    return removeListener
  }

}

module.exports = Store;
