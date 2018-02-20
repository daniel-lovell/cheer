require('dotenv').config()
const path = require('path')
const express = require('express')
const helmet = require('helmet')
const session = require('express-session')
const cors = require('cors')
const massive = require('massive')

const handlers = require('./handlers/handlers')

// express app
const app = express()
app.listen(process.env.SERVER_PORT, () => console.log(`cheer! server listening on port: ${process.env.SERVER_PORT}`))

// don't forget to run nsp check (and possibly snyk test and maybe snyk wizard)
// helmet - security best practice
app.use(helmet())

// body-parser puts json on the req.body
app.use(express.json())

// does proxy value in client code package.json should avoid needing this?
// this proxy value may only work with create-react-app?
if(process.env.NODE_ENV === 'development') {
  app.use(cors())
}


// sessions
// const sess = {
//   secret: process.env.SESSION_SECRET,
//   name: 'session',
//   cookie: {
//     maxAge: 60 * 60 * 1000 // one hour
//   },
//   resave: false,
//   saveUninitialized: false
// }
// if (process.env.NODE_ENV === 'production') {
//   app.set('trust proxy', 1)
//   sess.cookie.secure = true
//   sess.cookie.domain = process.env.SERVER_DOMAIN
// }
// app.use(session(sess))

// massive
massive(process.env.DB_CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(err => console.error(err))

app.use(express.static(`${__dirname}/../build`))

app.get('/api/v0/cheer/:id', handlers.getCheer)

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})


