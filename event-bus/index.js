const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()

app.use(bodyParser.json())

app.post('/events', async (req, res) => {
  const event = req.body

  console.log('event bus...')

  try {
    await Promise.all([
      axios.post('http://localhost:4000/events', event),
      axios.post('http://localhost:4001/events', event),
      axios.post('http://localhost:4002/events', event)
    ])
    res.send({ status: 'OK' })
  } catch (error) {
    res.send({ status: 'Error', message: error })
  }
})

app.listen(4005, () => {
  console.log('==> EVENT BUS <== Listening on Port 4005')
})
