select comp.companyname, proj.projectname,
 proj.description, proj.category, proj.postdate,
  bad.badge_imageurl
from projects proj
join badge bad
on proj.categoryid = bad.categoryid
join company comp
on comp.companyid = proj.companyid
where comp.companyid = $1;
