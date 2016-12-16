// APP //
var app = require('./../index');
var db = app.get('db');

// BCRYPT
var bcrypt = require('bcryptjs');

// HASH PASSWORD //
function hashPassword(password) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(password, salt);
	return hash;
}

module.exports = {

	// REGISTER USER //
	register: function(req, res, next) {
		var user = req.body;

		// Hash the users password for security
		user.password = hashPassword(user.password);

		// console.log(user);
		db.post_user([user.firstname, user.lastname, user.phone, user.email, user.skypeid, user.password, user.username, user.profilepicurl, null], function(err, user) {
			// If err, send err

			if (err) return res.status(500)
				.send(err);

			// Send user back without password.
			delete user.password;
			res.status(200)
				.send(user);
		});
	},

	registerCompany: function(req, res, next)
	{
		var user = req.body;

		// Hash the users password for security
		user.password = hashPassword(user.password);

	  db.company.insert({
	    companyname: user.companyname,
			company_description: user.company_description,
	    contactfirstname: user.contactfirstname,
	    contactlastname: user.contactlastname,
	    contactemail: user.contactemail,
	    contactphone: user.contactphone,
	    contactskypeid: user.contactskypeid,
	    password: user.password,
	    username: user.username,
	    profilepicurl: user.profilepicurl,
	    active: user.active
	  }, function(err, company){

	    db.users.insert({
	      firstname: user.contactfirstname,
	      lastname: user.contactlastname,
	      phone: user.contactphone,
	      email: user.contactemail,
	      skypeid: user.contactskypeid,
	      password: user.password,
	      username: user.username,
	      profilepicurl: user.profilepicurl,
	      companyid: company.companyid
	    }, function(err, user){
	      res.status(200).send(company);
	    });
	  });
	},


	// RETURN CURRENT USER //
	me: function(req, res, next) {
		// If user isnt on the session, then return error status
		if (!req.user) return res.status(401)
			.send('current user not defined');

		// Remove password for security
		var user = req.user;


		delete user.password;

		// Return user

		return res.status(200)
			.json(user);
	},

	update: function(req, res, next) {
		User.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
			if (err) next(err);
			res.status(200)
				.send('user updated');
		});
	},

	getUser: function(req, res, next){
		db.user_search_username([req.params.id], function(err, resp){
			res.json(resp);
		})
	}//just a test
};
