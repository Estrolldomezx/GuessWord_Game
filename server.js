/* 
npm init,
npm install express //express js,
npm install open,
npm i express -S //nodemon,
npm install jquery,
npm install jsdom,
npm install dotenv // maybe to use
*/
var express = require('express');
var app = express();
const port = 9000
var $ = require("jquery");
// var load_data = require('./data.json');

function load_data(){
    $.getJSON('data.json', function (json){
        var array = [];
            for(var key in json){
                var word = json[key];
                array.push({
                    id: word.id,
                    name: word.name,
                    src: word.src
                })
            }
    })
}




/*get json*/
app.get('/data', (req, res) => {
    res.json(array) // how to use that array
})

app.get('/data/:name', (req, res) => {
    const { id } = req.params
    const result = load_data./** */
    res.json(result)
})

/*get json*/

app.use(function(req, res, next) {
	res.set("Access-Control-Allow-Methods","POST, GET, DELETE, PUT");
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var fs = require("fs");

// Make files in ./public accessible
app.use(express.static(__dirname + '/WordGame'));

// start server on the specified port
app.listen(port, '0.0.0.0', function() {  ///  process.env.PORT
	console.log("server started");
	console.log(`GuessWordGame listening at http://localhost:${port}`);
});

//open npm***
const open = require('open');
 
(async () => {
    // Opens the image in the default image viewer and waits for the opened app to quit.
    //await open(port, {wait: true});
    //console.log('The image viewer app quit');
 
    // Opens the URL in the default browser.
    await open(`http://localhost:${port}`);
 
    // Opens the URL in a specified browser.
    //await open(`http://localhost:${port}`, {app: 'firefox'});
 
    // Specify app arguments.
    //await open(`http://localhost:${port}`, {app: ['google chrome', '--incognito']});
})();


app.get('/',function (req, res) {
	fs.readFile( "WordGame/GuessWordGame.html", 'utf8', function (err, data) {
		res.end( data );
	});
});