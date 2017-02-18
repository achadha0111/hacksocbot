const request = require('superagent')
const _ = require('lodash')

const getSchedule = function(user, res) {
    const bookId = '58a847fe12fe1f03006b661c'
    const baseUrl = 'https://api.fieldbook.com/v1/' + bookId
    var url = baseUrl + '/schedule/1'
    return new Promise(function(resolve, reject) {
    request.get(url)
    .end((err, result) => {
      if (err) { return reject([toText('Something went wrong, we are tending to it immediately')]) }
      else {
        resolve(messageLayout(user))
      }
    })
  })
}

//Function to layout response

const messageLayout = (user) => {
  const suggestions = [
    `Uno momento, getting back with the schedule`,
    `I found this for you, ${user.name}`,
    `Here, ${user.name}, this might be worth a look`,
    `Check this one out, ${user.name}`,
    `I really like this one! :heart_eyes: But feel free to ask for another one`
  ]
  var messageData = {"facebook":{
    "attachment":{
      "type":"image",
      "payload":{
        "url": "https://s12.postimg.org/fw5n8hi25/schedule.png"
      }}}}
	const answer = [toText(`${random(suggestions)}`)]
	//const description = [` \n\n ${response[activitySuggestion].organisation} \n\n ${response[activitySuggestion].description}`] 
	//const commitment =  [`${response[activitySuggestion].commitment}`]
  //const application = [`${response[activitySuggestion].form}`]
	//answer.push(toText(`${description}`))
	//answer.push(toText(`Here is how much you will have to commit: ${commitment}`))
  answer.push(toCard(messageData))
	return answer
}


const random = array => { return array[Math.floor(Math.random() * array.length)] }
const toCard = message => {return {type: 'attachment', content: message}}
const toText = message => {return {type: 'text', content: message }}
module.exports = getSchedule