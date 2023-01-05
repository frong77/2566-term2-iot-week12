const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    return res.status(200).send("Hello page!")
})

app.get('/about', (req, res)=> {
    return res.status(200).send("Aabout Page")
})


app.get('/profile', (req, res) => {
    return res.status(200).send("profile page")
})
app.listen(5000, () => {
    console.log(`Server running at http://localhost:${5000}`)
})