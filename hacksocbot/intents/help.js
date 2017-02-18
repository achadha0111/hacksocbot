const random = array => { return array[Math.floor(Math.random() * array.length)] }


const getHelp = () => {
  const answer = 'I can show you the schedule, give you directions,'+
    ' or provide you with some information on our sponsors.'+
    ' And if you need assistance from one of our voluneers '+
    'just add #voluneer and a # with your table number,'+
    ' and I will make sure to send someone to help you.'+
    'If you have trouble with your code or one of the APIs'+
    ' add #mentor and a # with the language or API you have problems with.';
  return Promise.resolve([toText(answer)])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = getHelp