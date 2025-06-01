const express = require('express')
const app = express()
const port = 80


basicHtml=`<!DOCTYPE html>
<html>
<head>
    <title>My App</title>
</head>
<body>
    <h1>Welcome to My App</h1>
    <p>This is a simple HTML page served by Express.</p>
</body>
</html>
`

app.get('/', (req, res) => {
  res.send(basicHtml)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})