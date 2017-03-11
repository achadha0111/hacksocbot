const request = require('superagent')
const _ = require('lodash')
const Twitter = require('twitter')
const twitterConfig = require('./twitterconfig.js')

const client = new Twitter({
  consumer_key: twitterConfig.consumer_key,
  consumer_secret: twitterConfig.consumer_secret,
  access_token_key: twitterConfig.access_token_key,
  access_token_secret: twitterConfig.access_token_secret
})

const getVolunteerAttention = function(user, res, person, tableLocation) {
   if(!user.table) {
     return Promise.resolve([toText('Which table are you at? ([A-E][1-9]')])
   }
   else if(!person) {
    user.table = (tableLocation) ? tableLocation.raw : undefined
    var quickReplies = {"facebook":{
                          "text":`Sure, whom are you looking for?'`,
                          "quick_replies":[
                            {
                              "content_type":"text",
                              "title":"Volunteer",
                              "payload":`I need a volunteer at ${user.table} #testing`,
                            },
                            {
                              "content_type":"text",
                              "title":"Mentor",
                              "payload":`I need a mentor at ${user.table} #testing`,
                            },
                          ]
                        }}
    return Promise.resolve([toCard(quickReplies)])

   } else {
    var message = res.raw.source
    client.post('statuses/update', {status: message})
     .then(function(tweet) {
         console.log(tweet)
     })
     .catch(function(error) {
         console.log(error)
     }) 
    return Promise.resolve([toText('My hooman masters have been informed, someone will be there shortly.')])

   }
   
   
}


const random = array => { return array[Math.floor(Math.random() * array.length)] }
const toCard = message => {return {type: 'attachment', content: message}}
const toText = message => {return {type: 'text', content: message }}
module.exports = getVolunteerAttention