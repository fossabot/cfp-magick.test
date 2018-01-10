const fetch = require('./src/fetcher')
const reduce = require('./src/reducer')
const display = require('./src/display')

async function main () {
  try {
    const conferenceData = await fetch()
    const eventsWithCfp = reduce(conferenceData)
    display(eventsWithCfp)
  } catch (error) {
    console.warn('An error occured:')
    console.error(error)
  }
}

main()
