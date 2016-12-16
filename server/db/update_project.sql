UPDATE PROJECTS
SET companyid = $1, description = $2, category = $3, categoryid = $4,
 badge_description = $5, projectname = $6


WHERE PROJECTID = $7;
