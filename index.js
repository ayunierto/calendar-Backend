const express = require("express")


// Create express server
const app = express()


// Routes
app.get("/", ( req, res ) => {

    res.json({
        ok: true,
    })

})


// listen requests
app.listen( 4000, () => {
    console.log(`Server on port: ${ 4000 }`)
})