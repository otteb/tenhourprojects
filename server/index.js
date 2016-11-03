var express = require('express');
var body_parser = require('body-parser');
var cors = require('cors');
var massive = require('massive');


var massiveServer = massive.connectSync({
  connectionString : "postgres://localhost/10hourProjects"
});
var app = module.exports = express();
app.set('db', massiveServer);
var db = app.get('db');

var port = 5555;

app.use(body_parser.json());
app.use(express.static(__dirname + './../public'));
app.use(cors());



var nodeController = require('./nodeController.js');

//endpoints down

//users
app.get('/users', nodeController.readUsers);
app.get('/user', nodeController.readUser);
app.post('/user', nodeController.postUser);
app.delete('/user/delete', nodeController.deleteUser);
app.put('/user/update', nodeController.updateUser);
//projects
app.get('/projects', nodeController.readProjects);
app.post('/project', nodeController.postProject);
app.delete('/project/delete', nodeController.deleteProject);
app.put('/project/update', nodeController.updateProject);
//companies
app.get('/companies', nodeController.readCompanies);
app.post('/company', nodeController.postCompany);
app.delete('/companies/delete', nodeController.deleteCompany);
app.put('/company/update', nodeController.updateCompany);

//commendations
app.get('/user/commendations/:userid', nodeController.readCommendations);
app.post('/user/commendation', nodeController.postCommendation);



app.listen(port, function(){
  console.log('listening on port ' + port);
});
