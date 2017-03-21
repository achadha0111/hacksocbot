const random = array => { return array[Math.floor(Math.random() * array.length)] }

const getGreetings = (user, res, person, tableLocation) => {
	console.log(user)
	if(user.new === false){
    var quickReplies = {"facebook":{
                          "text":`Hi ${user.name}, Since it is your first time here, you can ask me about any information related to the hackathon.'`,
                          "quick_replies":[
                            {
                              "content_type":"text",
                              "title":"Participant's Guide",
                              "payload":`Show me the participant's guide`,
                            },
                            {
                              "content_type":"text",
                              "title":"Floorplan",
                              "payload":`I need directions`,
                            },
                            {
                              "content_type":"text",
                              "title":"Schedule",
                              "payload":`I need the schedule`,
                            },
                            {
                              "content_type":"text",
                              "title":"Sponsors",
                              "payload":`Who is sponsoring this event?`,
                            },
                            {
                              "content_type":"text",
                              "title":"Volunteer/Mentor Help",
                              "payload":`I need a human's help`,
                            },
                            {
                              "content_type":"text",
                              "title":"Programming Help",
                              "payload":`I need some programming help`,
                            },
                          ]
                        }}
		return Promise.resolve([toCard(quickReplies)])
	}
  	else {
  		const answers = [
    	`Hello ${user.name}!`,
    	`Yo ${user.name} ;)`,
    	`Hey ${user.name}, nice to see you.`,
    	`Welcome back ${user.name}!`,
    	`Hi ${user.name}, how can I help you?`,
    	`Hey there, ${user.name}, what are you looking for today?`,
  		]
  		return Promise.resolve([toText(random(answers))])
  	}
}	

const toCard = message => {return {type: 'attachment', content: message}}
const toText = message => {return {type: 'text', content: message }}
module.exports = getGreetings