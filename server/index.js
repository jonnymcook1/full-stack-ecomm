require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {registerUser, loginUser, getUser, logout} = require('./controllers/authController')

const app = express()

let {SERVER_PORT, SESSION_SECRET}= process.env

app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialization: true,
        cookies: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
)

app.post('/auth/register', registerUser)
app.post('/auth/login', loginUser)
app.get('/auth/user', getUser)
app.post('/auth/logout', logout)

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database Connected')
})

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})