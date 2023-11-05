// Requires "axios" and "form-data" to be installed (see https://www.npmjs.com/package/axios and https://www.npmjs.com/package/form-data)
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

module.exports = async function send_to_api(image_path, fileName) {
    const inputPath = image_path;
    const formData = new FormData();
    // fs.writeFileSync(__dirname + "/no_bg_image/no_bg_" + fileName, inputPath);
    fs.copyFile(__dirname + "/upload_image/" + fileName, __dirname + "/no_bg_image/no_bg_" + fileName, (err) => {
        if (err) {
          console.log("Error Found:", err);}});
    return;
    formData.append('size', 'auto');
    formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));
    
    axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: formData,
      responseType: 'arraybuffer',
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': 'INSERT_YOUR_API_KEY_HERE',
      },
      encoding: null
    })
    .then((response) => {
      if(response.status != 200) return console.error('Error:', response.status, response.statusText);
      fs.writeFileSync(__dirname + "no_bg_image/" + fileName, response.data);
    })
    .catch((error) => {
        return console.error('Request failed:', error);
    });
}

