const cheer = {
  name: 'The Politician',
  description: 'Pat yourself on the back.'
}

export const getCheer = () => {
  return new Promise(resolve => resolve(cheer))
}