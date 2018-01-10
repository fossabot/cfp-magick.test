module.exports = conferenceData => {
  let allConfs = []
  const conferencesByMonths = Object.keys(conferenceData).map(month => conferenceData[month])
  conferencesByMonths.forEach(confs => confs.forEach(conf => allConfs.push(conf)))
  return allConfs.filter(conf => conf.cfp.has_cfp && conf.cfp.link !== '')
}
