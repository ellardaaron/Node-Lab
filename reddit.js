const path = require('path');
const fs = require('fs');
const request =require('request');

const articleArray = [];

let dataPath = path.join(__dirname, '/popular-articles.json');

request ('https://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        articleArray.push({title: item.data.title , url: item.data.url, author: item.data.author});
    });

let articles = JSON.stringify(articleArray)
fs.writeFileSync("popular-articles.json", articles)
});

