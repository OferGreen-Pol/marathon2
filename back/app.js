const express = require('express')
const path = require('path');
const app = express()
const port = 5000

var fs = require('fs'); // filesystem (rename/move/copy functions)

var cors = require('cors');1
app.use(cors())


var fileupload = require('express-fileupload'); //file handling, gives req.files functionality
app.use(fileupload());

app.use(express.static('upload_image')); // use folder_name where we want to access


app.get('/test', (req, res) => {
//   console.log("server_test")
  res.send('Hello World1231!')
})

app.post('/upload_file', (req, res) => {
      console.log(req.files)

      const tempPath = req.files.path;
      const targetPath = path.join(__dirname, "./upload_image/image.png");

      console.log(tempPath);
      console.log(targetPath);

    //   fs.rename(tempPath, targetPath, err => {
    //     if (err) return handleError(err,res);
      

    //   res
    //     .status(200)
    //     .contentType("text/plain")
    //     .end("File uploaded!");

    //     })

    //     res.send("Hello World!")
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});