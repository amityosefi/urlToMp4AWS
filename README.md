# Convert url to mp4 video - aws lambda (serverless)


### Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

1. clone or download the zip of the repository and extract it
2. open terminal from the location of the project
3. go to 'project\amplify\backend\function\converter\src'
4. run ```npm install```
5. run ```node app.js```


Your app should now be running on [localhost:3000](http://localhost:3000/).

### examples

There is test file (test.http) for some examples:
- First examles are running locally.

- The last two examples are running on aws server.
The first one checks the connection (/check), and the second contains the api that converts a url to mp4 (/converter). 
There is a problem with "/converter" api in detecting the dependencies of the project in, therefore it's not working yet on aws.

