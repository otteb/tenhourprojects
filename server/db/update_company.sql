UPDATE COMPANY
SET companyname = $1, contactfirstname = $2, contactlastname = $3, contactemail = $4, contactphone = $5,
   contactskypeid = $6, password = $7, username = $8, profilepicurl = $9

   WHERE COMPANYID = $10;
