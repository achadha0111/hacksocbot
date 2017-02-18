const random = array => { return array[Math.floor(Math.random() * array.length)] }

const getGreetings = (user, res) => {
	console.log(user)
	if(user.new === true){
		return Promise.resolve([toText(`Hi ${user.name}, Since it is your first time here, you can ask me about any information related to the hackathon.'`)])
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
const toText = message => {return {type: 'text', content: message }}
module.exports = getGreetings