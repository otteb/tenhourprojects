var app = require('./index.js');
var db = app.get('db');

module.exports = {

readUsers: function(request, response, next)
{
  db.read_users( function(err, users){
    response.status(200).json(users);
  });
},

readUser: function(req, res, next)
{
  db.read_user([req.query.id], function(err, user){
    res.status(200).json(user);
  });
},

postUser: function(req, res, next)
{
  db.post_user([req.body.firstname, req.body.lastname, req.body.address, req.body.city, req.body.state, req.body.country, req.body.postalcode, req.body.phone, req.body.fax, req.body.email, req.body.skypeid, req.body.password, req.body.username, req.body.profilepicurl],
    function(err, user){
      res.status(200).json(user);
  });
},

deleteUser: function(req,res,next)
{
  db.delete_user([req.query.id], function(err, user){
    res.status(200).json(user);
  })
},

updateUser: function(req,res,next)
{
  db.update_user([req.body.firstname, req.body.lastname, req.body.address, req.body.city, req.body.state, req.body.country, req.body.postalcode, req.body.phone, req.body.fax, req.body.email, req.body.skypeid, req.body.password, req.body.username, req.body.profilepicurl, req.query.id], function(err, user){
    res.status(200).json(user);
  });
},

readProjects: function(request, response, next)
{
  db.read_projects(function(err, projects){
    response.status(200).json(projects);
  });
},

postProject: function(request, response, next)
{
  db.post_project([request.body.companyId, request.body.description, request.body.category, request.body.categoryId, request.body.badge_description, request.body.projectName],
    function(err, project){
    response.status(200).json(project);
  });
},

deleteProject: function(req,res,next)
{
  db.delete_project([req.query.id], function(err, project){
    res.status(200).json(project);
  });
},

updateProject: function(req,res,next)
{
  // console.log(req.body, req.query.id);
  db.update_project([req.body.companyid, req.body.description, req.body.category, req.body.categoryid, req.body.badge_description, req.body.projectname, req.query.id], function(err, project){
      console.log(project);
      res.status(200).json(project);
  })
},

readCompanies: function(request, response, next)
{
  db.read_companies(function(err, companies){
    response.status(200).json(companies);
  });
},

postCompany: function(req, res, next)
{
  db.post_company([req.body.companyname, req.body.contactfirstname, req.body.contactlastname, req.body.contactemail, req.body.contactphone, req.body.contactskypeid, req.body.password, req.body.username, req.body.profilepicurl], function(err, company){
    res.status(200).json(company);
  });
},

deleteCompany: function(req, res, next)
{
  db.delete_company([req.query.id], function(err, company){
    res.status(200).json(company)
  });
},

updateCompany: function(req, res, next)
{
  db.update_company([req.body.companyname, req.body.contactfirstname, req.body.contactlastname, req.body.contactemail, req.body.contactphone, req.body.contactskypeid, req.body.password, req.body.username, req.body.profilepicurl, req.query.id], function(err, company){
    res.status(200).json(company);
  });
},

readCommendations: function(req, res, next)
{
  // console.log(req.query.id);
  db.read_commendations([req.params.userid], function(err, commendations){
    res.status(200).json(commendations);
  })
},

postCommendation: function(req, res, next)
{
  db.post_commendation([req.body.userid, req.body.companyid, req.body.commendationtext, req.body.projectid], function(err, commendation){
    res.status(200).json(commendation);
  })
}
};
