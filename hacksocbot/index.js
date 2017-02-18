const config = require('./config.js')
const restify = require('restify')
const builder = require('botbuilder')
const recast = require('recastai')
const recastClient = new recast.Client(config.recast)

const connector = new builder.ChatConnector({
	appId: config.appid,
	appPassword: config.secret,
})

const getGreetings = require('./intents/greetings.js')
const getSponsors = require('./intents/sponsors.js')
const getSchedule = require('./intents/schedule.js')
const getDirections = require('./intents/directions.js')
const getGoodbyes = require('./intents/goodbye.js')
const getJoke = require('./intents/jokes.js')
const getHelp = require('./intents/help.js')
const getVolunterAttention = require('./intents/volunteerattention.js')
const getNeutral= require('./intents/neutral.js')
const getGratitude= require('./intents/gratitude.js')



const INTENTS = {
  greetings: getGreetings,
  sponsors: getSponsors,
  schedule: getSchedule,
  directions: getDirections,
  help: getHelp,
  joke: getJoke,
  neutral: getNeutral,
  gratitude: getGratitude,
  volunteerattention: getVolunterAttention,
  goodbye: getGoodbyes,
}
const bot = new builder.UniversalBot(connector)

const sendMessageByType = {
  text: (session, elem) => session.send(elem.content),
  attachment: (session, elem) => session.send(new builder.Message(session).sourceEvent(elem.content))
}

const getUser = (address, session) => {
  const user = session.userData
  if (!user.done) {
    user.Id = address.user.id
    user.channelID = address.channelId
    user.name = address.user.name.split(' ')[0]
    user.intent = 'help'
    user.done = true
    user.new = true
  } else {
    user.new = false
  }
  return (user)
}


bot.dialog('/', (session) => {

	const user = getUser(session.message.address, session)
	
  session.sendTyping()
	recastClient.textRequest(session.message.text)
    .then(res => {
        const intent = res.intents[0].slug
        if (intent) {
            INTENTS[intent](user, res)
             .then(res => { res.forEach( (message) => sendMessageByType[message.type](session, message)) })
             .catch(err => { err.forEach( (message) => sendMessageByType[message.type](session, message)) })
        } else if (!intent) {
            session.send('I am not quite sure I got that. Ask for help or ask me about opportunities on WorkTeen! You can ask me about volunteering/interning or researching in your city. Examples: \n\n Where can I volunteer in Mumbai? \n\n Are there internship opportunities in Delhi. \n\n If you don\'t like what I suggest, you can ask for some other opportunity.')
        }
    }).catch(function(err) {
        session.send("Didn't get that, could you rephrase or repeat?")
    })
		
	})

const server = restify.createServer()
server.listen(process.env.PORT || 8080)
server.post('/', connector.listen())