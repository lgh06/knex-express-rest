const express = require('express')
const app = express();
var tools = require('./tools');


app.set('x-powered-by', false);
//app.use('/api/post', tools.authHandler);

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// parse only text fields multipart/form-data
var formdataParser = require('multer')().fields([])
app.use(formdataParser)

var requireDirectory = require('require-directory');
var r = requireDirectory(module, './route');
tools.mount_routes(app, r, 'api/');


app.listen(3000, () => console.log('Example app listening on port 3000!'))
