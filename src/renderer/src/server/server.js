const express = require('express')
const app = express()

function startServer() {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
  })
}

module.exports = { startServer }
