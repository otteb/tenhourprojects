UPDATE USERS
SET firstname = $1, lastname = $2, address = $3, city = $4, state = $5, country = $6, postalcode = $7,
 phone = $8, fax = $9, email = $10, skypeid = $11, password = $12, username = $13, profilepicurl = $14

 WHERE USERID = $15;
