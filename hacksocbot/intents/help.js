const random = array => { return array[Math.floor(Math.random() * array.length)] }


const getHelp = () => {
  const answers = [
    'I can help you with the schedule. Or give you directions. And if you need any other sort of assistance, I can always call for help.',
    'I am here to help you. Just tell me what you need.',
    'Whenever you need help, just send me a message!',
    'Want directions, or the timetable? Maybe info on our sponsors! Just ask!',
    'Need help? Count on me!'
  ]
  return Promise.resolve([toText(answers[0])])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = getHelp