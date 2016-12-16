var express = require('express');
var body_parser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var session = require('express-session');
var config = require('./config.js');


var massiveServer = massive.connectSync({
  connectionString : "postgres://localhost/10hourProjects"
});
var app = module.exports = express();

app.set('db', massiveServer);
var dbSetup = require('./dbSetup');
dbSetup.run();

var db = app.get('db');

var port = 5555;

app.use(body_parser.json());
app.use(express.static(__dirname + './../public'));
app.use(cors());



var nodeController = require('./controllers/nodeController.js');

var UserCtrl = require('./controllers/UserCtrl.js');

var passport = require('./controllers/passport.js');

//localauth below
// POLICIES //
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	return next();
};

var isCompany = function(req, res, next) {
  // console.log(req.user);
	if (!req.user.companyid) return res.status(401)
		.send();
	return next();
};

// Session and passport //
app.use(session({
	secret: config.SESSION_SECRET,
	saveUninitialized: false,
	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport Endpoints //
app.post('/login', passport.authenticate('local', {
	successRedirect: '/me'
}));

app.get('/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});

// UserAuth Endpoints //
app.post('/register', UserCtrl.register);
app.get('/me', isAuthed, UserCtrl.me);
app.get('/useru/:id', UserCtrl.getUser)




//endpoints down

//users
app.get('/users', nodeController.readUsers);
app.get('/user/:userid', nodeController.readUser);
// app.post('/user', nodeController.postUser); // OLD?
app.delete('/user/:userid', nodeController.deleteUser);
app.put('/user/update', nodeController.updateUser);
//projects
app.get('/projects', nodeController.readProjects);

app.get('/company/projects', nodeController.getCompanyProjects);
app.post('/company/projects/:companyid', nodeController.postProject);
app.delete('/project/delete', nodeController.deleteProject);
app.put('/project/update', nodeController.updateProject);
//companies
app.get('/companies', nodeController.readCompanies);
app.get('/company/projects/:companyid', nodeController.readCompanyProjects);
app.post('/company', UserCtrl.registerCompany);
// app.delete('/company/projects/:companyid', nodeController.deleteCompany);
app.put('/company/projects/:companyid', nodeController.deactivateCompany);
app.put('/company/update', nodeController.updateCompany);

//commendations
app.get('/user/commendations/:userid', nodeController.readCommendations);
app.post('/user/commendation', isCompany, nodeController.postCommendation);



app.listen(port, function(){
  console.log('listening on port' + port);
});
