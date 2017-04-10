'use strict'

const Store = require('./Store')

class FileStore extends Store {

	updateFile(index, fileName) {
		let tempArray = this.getState().slice()
		// .slice() of nothing will return a copy of the object its called on, because it defaults from array start to array end
		tempArray.splice(index, 1, fileName)
		this.setState(tempArray)
	}

	addFile() {
		let currentState = this.getState().slice()
		currentState.push('')
		this.setState(currentState)
	}

	removeFile(index) {
		let currentState = this.getState().slice()
		if(currentState.length === 1) {
			return this.setState([''])
		}
		currentState.splice(index, 1)
		this.setState(currentState)
	}

}

module.exports = new FileStore([''])
