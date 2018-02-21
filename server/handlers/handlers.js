const cheer = {
  name: 'The Politician',
  description: 'Pat yourself on the back.'
}

module.exports  = {
  getCheer: function(req, res) {
    if (req.params.id === 'random' && !Number.isNaN(req.query.id)) {
      if (req.session.usedCheers) {
        req.session.usedCheers = [...req.session.usedCheers, req.query.id]
      } else {
        req.session.usedCheers = [req.query.id]
      }
      if (req.query.noRepeats === 'true') {
        req.app.get('db').getRandomCheerNoRepeats([req.session.usedCheers]).then(response => {
          if (!response.length) {
            req.session.usedCheers = [req.query.id]
            req.app.get('db').getRandomCheer([req.query.id]).then(response => {
              res.status(200).json(response[0])
            }).catch(err => console.error('getRandomCheer.sql', err))
          } else {
            res.status(200).json(response[0])
          }
        }).catch(err => console.error('getRandomCheerNoRepeats.sql', err))
      } else {
        req.app.get('db').getRandomCheer([req.query.id]).then(response => {
          res.status(200).json(response[0])
        }).catch(err => console.error('getRandomCheer.sql', err))
      }
    } else {
      res.status(404).end()
    }
  }
}