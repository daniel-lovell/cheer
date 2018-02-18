const cheer = {
  name: 'The Politician',
  description: 'Pat yourself on the back.'
}

module.exports  = {
  getCheer: function(req, res) {
    console.log(req.params)
    if (req.params.id === 'random') {
      res.status(200).json(cheer)
    } else {
      res.status(404).end()
    }
  }
}