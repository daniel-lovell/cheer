const cheer = {
  name: 'The Politician',
  description: 'Pat yourself on the back.'
}

module.exports  = {
  getCheer: function(req, res) {
    if (req.params.id === 'random' && !Number.isNaN(req.query.id)) {
      req.app.get('db').getRandomCheer([req.query.id]).then(response => {
        res.status(200).json(response[0])
      })
    } else {
      res.status(404).end()
    }
  }
}