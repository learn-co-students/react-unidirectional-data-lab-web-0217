'use strict'

class Store {
	constructor(initialState) {
		this.state = initialState
		this.listeners = []
	}

	getState() {
		return this.state
	}

	setState(state) {
		this.state = state
  	for (const listener of this.listeners) {
  		listener(state)
  	}
  	// same as:
  	// this.listeners.forEach(function(listener) {
  	// 	listener.call(this, state)
  	// })
	}

	addListener(listener) {
		this.listeners.push(listener)
		const removeListener = () => {
			this.listeners = this.listeners.filter((currentListener) => {
				return currentListener !== listener
			})
		}
		return removeListener
		// filters returns an array and everytime the conditional 
		// is met, they are added to the array
	}
}

module.exports = Store
