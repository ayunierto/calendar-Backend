const express = require('express')
require('dotenv').config()


// Create express server
const app = express()


app.use( express.static("public") )
// Routes
// app.get("/", ( req, res ) => {

//     res.json({
//         ok: true,
//     })

// })


// listen requests
app.listen( process.env.PORT, () => {
    console.log(`Server on port: ${ process.env.PORT }`)
})