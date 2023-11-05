const express = require('express')
// const path = require('path');
const app = express()
const port = 5000

var fs = require('fs'); // filesystem (rename/move/copy functions)

var cors = require('cors');1
app.use(cors())


var fileupload = require('express-fileupload'); //file handling, gives req.files functionality
// app.use(fileupload({useTempFiles:true}));  // added use of TempFiles, enables data on tempPath
app.use(fileupload());  // instead of TempFile can use file.mv command.

app.use(express.static('upload_image')); // sets the contents of the folder to be accessed by filename without need for fullPath
app.use(express.static('no_bg_image'));

const send_to_api = require('./send_to_api'); // use send_to_api file under the same folder.


app.get('/test', (req, res) => {
//   console.log("server_test")
  res.send('Hello World1231!')
})

app.post('/upload_file', (req, res) => {
    //   console.log(req.files)

      // // using TempPath
    //   const tempPath = req.files.path;
    //   const targetPath = path.join(__dirname, "./upload_image/image.png");

    // using file.mv
    const newpath = __dirname + "/upload_image/";
    const file = req.files.myFile;
    const now = new Date().getTime();

    const filename = now + file.name;

    //   console.log(tempPath);
    //   console.log(targetPath);

    //   fs.rename(tempPath, targetPath, err => {
    //     if (err) return handleError(err,res);
    file.mv(`${newpath}${filename}`, (err) => {

        send_to_api(`${newpath}${filename}`, filename);
        console.log("apps.js__" + filename);
        res.status(200).send({ image_name: filename, code: 200 });

        if (err) {
            res.status(500).send({ message: "File upload failed", code: 500 });
        }
    });
      

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