const express = require('express')
const app = express()
const cors = require('cors')
const Port =process.env.PORT || 5000
app.use(cors())

const destinatin=require("./data/destination.json")

app.get("/", (req, res) => {
	res.send(destinatin)
})


app.listen(Port, () => {
	"Server is runing",Port
})