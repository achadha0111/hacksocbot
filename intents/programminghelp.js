const request = require('superagent')
const _ = require('lodash')

const programminghelp = function(user, res) {
      return Promise.resolve(messageLayout(user))
}

//Function to layout response

const messageLayout = (user, res, person, tableLocation) => {
  const suggestions = [
    `Maybe these resources will point you in the right direction?`,
    `Check these resources out, perhaps something will help?`,
    `I think you can make better sense of these resources than I can`,
  ]
  var messageData = {"facebook":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type": "generic",
        "elements": [

          {
              "title": "CS50 Shorts",
              "subtitle": "Help with topics covered in CS50",
              "default_action": 
                {
                  "type": "web_url",
                  "url": "https://www.youtube.com/playlist?list=PLhQjrBD2T3816xq7BHLh4Yj6-v0TnvsrT "
                }
          },
          
          {
              "title": "C Reference",
              "subtitle": "Reference for the C Language",
              "default_action": 
                {
                  "type": "web_url",
                  "url": "https://reference.cs50.net "
                }
          },

          {
              "title": "Tutorials Point",
              "subtitle": "Quick tutorials for just about anything",
              "default_action": 
                {
                  "type": "web_url",
                  "url": "https://www.tutorialspoint.com"
                }
          },

          {
              "title": "Hackernoon",
              "subtitle": "Medium Publication",
              "default_action": 
                {
                  "type": "web_url",
                  "url": "https://hackernoon.com"
                }
          },

          {
              "title": "Scratch",
              "subtitle": "Scratch Website",
              "default_action": 
                {
                  "type": "web_url",
                  "url": "https://scratch.mit.edu/explore/projects/all"
                }
          },

          {
              "title": "Python",
              "subtitle": "Python 3.6 Documentation",
              "default_action": 
                {
                  "type": "web_url",
                  "url": "https://docs.python.org/3.6/index.html"
                }
          },

          {
              "title": "Pandas Cheatsheet",
              "subtitle": "Quick guide to Pandas",
              "default_action": 
                {
                  "type": "web_url",
                  "url": "https://github.com/pandas-dev/pandas/blob/master/doc/cheatsheet/Pandas_Cheat_Sheet.pdf"
                }
          },

          {
              "title": "W3c school",
              "subtitle": "Web reference",
              "default_action": 
                {
                  "type": "web_url",
                  "url": "https://www.w3schools.com"
                }
          },

          {
              "title": "If all else fails",
              "subtitle": "StackOverflow",
              "default_action": 
                {
                  "type": "web_url",
                  "url": "http://stackoverflow.com/questions/tagged/c"
                }
          },



          
        ]
        
      }}}}

  var quickReplies = {"facebook":{
                          "text":`Else, reach out for a mentor!'`,
                          "quick_replies":[
                            {
                              "content_type":"text",
                              "title":"Mentor",
                              "payload":`I need a mentor at ${user.table} #testing`,
                            },
                          ]
                        }}


	const answer = []
  answer.push(toText(random(suggestions)))
  answer.push(toCard(messageData))
  answer.push(toCard(quickReplies))
	return answer
}


const random = array => { return array[Math.floor(Math.random() * array.length)] }
const toCard = message => {return {type: 'attachment', content: message}}
const toText = message => {return {type: 'text', content: message }}
module.exports = programminghelp