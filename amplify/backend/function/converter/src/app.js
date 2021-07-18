
var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app_utils = require("./app_utils")

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


app.post('/converter', async function(req, res) {
  try {
    console.log('url_to_mp4');
    const url = req.body.url;
    if (!url) {
      res.status(400).send({ message: 'Wrong inputs' });
    }
    const ans = await app_utils.setFunc(url);
    res.status(200).send(ans);

  } catch (err) {
    console.log(err);
    res.status(500).send({message: new Error(err)});
  }
});



app.listen(3000, function() {
    console.log("App started")
});

module.exports = app
