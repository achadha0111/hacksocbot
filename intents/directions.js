const request = require('superagent')
const _ = require('lodash')

const getDirections = function(user, res) {
      return Promise.resolve(messageLayout(user))
}

//Function to layout response

const messageLayout = (user, res, person, tableLocation) => {
  const suggestions = [
    `Here's the floor plan to help you get around`,
    `Give me a moment, fetching you the floorplan`,
    `I think you can make better sense of this floor plan than I can`,
  ]
  var messageData = {"facebook":{
    "attachment":{
      "type":"image",
      "payload":{
        "url": "https://s18.postimg.org/pa8886t7t/Renold_floorplan.jpg"
      }}}}
	const answer = [toText(`${random(suggestions)}`)]
  answer.push(toCard(messageData))
	return answer
}


const random = array => { return array[Math.floor(Math.random() * array.length)] }
const toCard = message => {return {type: 'attachment', content: message}}
const toText = message => {return {type: 'text', content: message }}
module.exports = getDirections