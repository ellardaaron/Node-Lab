const path = require('path');  //core modules
const fs = require('fs');

let dataPath =path.join(__dirname,'../chirps.json');

fs.readFile(dataPath, {
    encoding: "UTF-8",
},(err,data) => {
    let chirp= JSON.parse(data)

    if (err) console.log(err);

    console.log(chirp)

})

