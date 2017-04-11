'use strict';
// const EventEmitter = require('events').EventEmitter;

export default class Store{
  constructor(initialState){
    this.state=initialState
    this.listeners=[]
  }

  getState(){
    return this.state
  }

  setState(state){
    this.state=state
    for (const listener of this.listeners){
      listener(state)
    }
  }

  addListener(listener){
    this.listeners.push(listener)
    const removeListener=()=>{
      this.listeners = this.listeners.filter((l) => listener !== l)
    }
    return removeListener
    // EventEmitter.prototype.addListener.call(this, 'change', listener);
  }
}
