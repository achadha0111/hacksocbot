const random = array => { return array[Math.floor(Math.random() * array.length)] }


const getHelp = () => {
  const answers = [
    'Here are some example commands: \n\n • I need programming help \n\n • Could a mentor come over to table X7\n\n • What are the rules? \n\n • When is lunch time?',
  ]
  return Promise.resolve([toText(answers[0])])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = getHelp