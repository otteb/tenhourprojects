UPDATE USERS
SET firstname = $1, lastname = $2, phone = $3,
email = $4, skypeid = $5, password = $6,
username = $7, profilepicurl = $8

 WHERE USERID = $9;
