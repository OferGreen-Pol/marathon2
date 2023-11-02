const express = require('express')
const app = express()
const port = 5000

var cors = require('cors');1
app.use(cors())


var fileupload = require('express-fileupload');
app.use(fileupload());

app.use(express.static('public'));


app.get('/test', (req, res) => {
//   console.log("server_test")
  res.send('Hello World1231!')
})

app.post('/upload_file', (req, res) => {
      console.log(req.files)
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})