const request = require('superagent')
const _ = require('lodash')

const getSchedule = function(user, res, person, tableLocation) {
        resolve(messageLayout(user))
}

//Function to layout response

const messageLayout = (user) => {
  const suggestions = [
    `Uno momento, getting back with the schedule`,
    `Here's the schedule`,
    `Here you go, ${user.name}`,
  ]
  var messageData = {"facebook":{
    "attachment":{
      "type":"image",
      "payload":{
        "url": "https://s15.postimg.org/8rvdjplor/Screen_Shot_2017_03_11_at_09_57_00.png"
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