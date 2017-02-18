const random = array => { return array[Math.floor(Math.random() * array.length)] }


const getHelp = () => {
  const answers = [ 
  ]
  return Promise.resolve([toText(random(answers))])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = getHelp