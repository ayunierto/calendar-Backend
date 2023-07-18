const express = require('express')
const { dbConection } = require('./database/config')
require('dotenv').config()
const cors = require('cors')


// Create express server
const app = express()

// DataBase
dbConection()

app.use( cors() )

// Servir la carpeta publica al usuario
app.use( express.static("public") )

// Lectura y parseo del body 
app.use( express.json() )

// Routes
app.use('/api/auth', require('./routes/auth'))


// listen requests
app.listen( process.env.PORT, () => {
    console.log(`Server on port: ${ process.env.PORT }`)
})