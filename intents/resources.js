const request = require('superagent')
const _ = require('lodash')

const getDirections = function(user, res, tableLocation) {
      return Promise.resolve([toText(`Here's the participant's guide, it has all the relevant information - https://dhananjaysharma.gitbooks.io/studenthackv-handbook/content/`)])
}



const random = array => { return array[Math.floor(Math.random() * array.length)] }
const toCard = message => {return {type: 'attachment', content: message}}
const toText = message => {return {type: 'text', content: message }}
module.exports = getDirections