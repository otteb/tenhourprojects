var app = require('../index.js');
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
  // console.log("this is the readUser endpoint",req.params.userid);
  db.read_user([req.params.userid], function(err, user){
    res.status(200).json(user);
  });
},

// postUser: function(req, res, next)
// {
//   console.log(req.body);
//   db.post_user([req.body.firstname, req.body.lastname, req.body.phone, req.body.email, req.body.skypeid, req.body.password, req.body.username, req.body.profilepicurl],
//     function(err, user){
//       if (err) {
//         res.status(500).json(err);
//       }
//       else {
//         res.status(200).json(user);
//       }
//   });
// },

deleteUser: function(req,res,next)
{

  db.delete_user([req.params.userid], function(err, user){
    res.status(200).json(user);
  })
},

updateUser: function(req,res,next)
{
  db.update_user([req.body.firstname, req.body.lastname, req.body.phone, req.body.email, req.body.skypeid, req.body.password, req.body.username, req.body.profilepicurl, req.query.id], function(err, user){
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
  db.post_project([request.body.companyid, request.body.description, request.body.category, request.body.categoryid, request.body.badge_description, request.body.projectname],
    function(err, project){
      if(err){

      }
      else{
    response.status(200).json(project);
  }
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
  db.update_project([req.body.companyid, req.body.description, req.body.category, req.body.categoryid, req.body.badge_description, req.body.projectname, req.query.id], function(err, project){
      res.status(200).json(project);
  })
},

readCompanies: function(request, response, next)
{
  db.read_companies(function(err, companies){
    response.status(200).json(companies);
  });
},

readCompanyProjects: function(req,res,next)
{

  db.read_company_projects([req.params.companyid], function(err, projects){
    res.status(200).json(projects);
  })
},

getCompanyProjects: function(req,res,next){
  // console.log(req.user.companyid);
  db.project_by_company([req.user.companyid], function(err, projects){
    // console.log(projects, err);
    res.status(200).json(projects);
  })
},

deleteCompany: function(req, res, next)
{
  db.delete_company([req.params.companyid], function(err, company){
    res.status(200).json(company)
  });
},

updateCompany: function(req, res, next)
{
  db.update_company([req.body.companyname, req.body.contactfirstname, req.body.contactlastname, req.body.contactemail, req.body.contactphone, req.body.contactskypeid, req.body.password, req.body.username, req.body.profilepicurl, req.query.id], function(err, company){
    res.status(200).json(company);
  });
},

deactivateCompany: function(req, res, next){
  db.update_company_activity([req.params.companyid], function(err, company){
    res.status(200).json(company);
  })
},

readCommendations: function(req, res, next)
{
  //
// console.log("LLLLLLLL" +req.params.userid);
  db.read_commendations([req.params.userid], function(err, commendations){
    res.status(200).json(commendations);
  })
},

postCommendation: function(req, res, next)
{
  // console.log(req.body);
  db.post_commendation([req.body.userid * 1, req.user.companyid, req.body.commendationtext, req.body.projectid * 1], function(err, commendation){
    // console.log(err);
    res.status(200).json(commendation);
  })
}
};
