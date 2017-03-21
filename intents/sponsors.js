const getSponsors = () => {
  const answers = [
    'This event was sponsored by: \n\n • Harvard University \n\n • The University of Manchester\n\n • The Landing \n\n • Web Applications UK \n\n • Hardware Sponsor: Google',
  ]
  return Promise.resolve([toText(answers[0])])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = getSponsors