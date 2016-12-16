

select us.firstname, us.lastname, comp.companyname, proj.category, proj.projectname,
 proj.description, comm.commendationtext, comm.postdate, ba.badge_imageurl,
 comp.contactfirstname, comp.contactlastname, comp.contactemail, comp.contactphone, us.username
from commendations comm
join projects proj
on comm.projectid = proj.projectid
join company comp
on proj.companyid = comp.companyid
join badge ba
on ba.categoryid = proj.categoryid
join users us
on us.userid = comm.userid
where us.userid = $1;
