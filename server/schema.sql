-- TABLES


CREATE TABLE Users(
	userId SERIAL PRIMARY KEY,
    FirstName VARCHAR(40) NOT NULL,
    lastName  VARCHAR(40) NOT NULL,
    address   VARCHAR(160),
    city      VARCHAR(40),
    state     VARCHAR(40),
    country   VARCHAR(40),
    postalCode VARCHAR(10),
    phone     VARCHAR(25),
    fax       VARCHAR(20),
    email     VARCHAR(100) NOT NULL,
    skypeId   VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    ProfilePicURL VARCHAR(400) NOT NULL
);


CREATE TABLE Projects(
    projectId SERIAL PRIMARY KEY,
    companyId INTEGER NOT NULL,
    description VARCHAR(10000) NOT NULL,
    category VARCHAR(40) NOT NULL,
    categoryId INTEGER NOT NULL,
    badge_description VARCHAR(200) NOT NULL,
    projectName varchar(40)
);

CREATE TABLE userProjects(
	userId INTEGER NOT NULL,
   	 projectId INTEGER NOT NULL
);

CREATE TABLE BADGE(
	badgeId SERIAL PRIMARY KEY,
    categoryId INTEGER NOT NULL,
    badge_imageUrl VARCHAR(300) NOT NULL
);

CREATE TABLE COMMENDATIONS(
	COMMENDATIONID SERIAL PRIMARY KEY,
    USERID INTEGER NOT NULL,
    COMPANYID INTEGER NOT NULL,
    COMMENDATIONTEXT VARCHAR(10000) NOT NULL,
    PROJECTID INTEGER NOT NULL
);

CREATE TABLE COMPANY(
	COMPANYID SERIAL PRIMARY KEY,
    COMPANYNAME VARCHAR(80) NOT NULL,
    CONTACTFIRSTNAME VARCHAR(40) NOT NULL,
    CONTACTLASTNAME  VARCHAR(80) NOT NULL,
    CONTACTEMAIL     VARCHAR(200) NOT NULL,
    CONTACTPHONE     VARCHAR(40) NOT NULL,
    CONTACTSKYPEID   VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    ProfilePicURL VARCHAR(100) NOT NULL
);


-- INSERTS



INSERT INTO COMMENDATIONS
(USERID, COMPANYID, COMMENDATIONTEXT, PROJECTID)
VALUES(1,1,'Brian created an excellent FOR LOOP that has absolutely revolutionized the way we look at code...', 1);

INSERT INTO COMMENDATIONS
(USERID, COMPANYID, COMMENDATIONTEXT, PROJECTID)
VALUES(1,1,'Brian created an excellent IF STATEMENT that defies logic...', 2);

INSERT INTO COMMENDATIONS
(USERID, COMPANYID, COMMENDATIONTEXT, PROJECTID)
VALUES(2,2,'Jorgen\'s research has been instrumental to the success of our startup...', 3);

INSERT INTO Users
(FirstName, LastName, email, skypeid, password, username, ProfilePicURL)
values ('Brian', 'Otte', 'briantron@gmail.com', ‘ottebrian’, '12345', 'otteb', 'https://mbevivino.files.wordpress.com/2011/08/silhouette_default.jpg');

INSERT INTO Users
(FirstName, LastName, email, skypeid, password, username, ProfilePicURL)
values ('Jorgen', 'Davidson', 'Jorgen@gmail.com', ‘DavidsonJorgen’, '12345', 'davidsonj', 'https://mbevivino.files.wordpress.com/2011/08/silhouette_default.jpg');


INSERT INTO Users
(FirstName, LastName, email, skypeid, password, username, ProfilePicURL)
values ('Nick', 'Lawrence', 'nick@gmail.com', ‘lawrenceNick', '12345', 'lawrencen', 'https://mbevivino.files.wordpress.com/2011/08/silhouette_default.jpg');



INSERT INTO projects
(companyId, description, category, categoryId, badge_description, projectName)
values (1, 'This project will help you understand how to sift through massive arrays of information...', 'Computer Science', '1',
        'For Loop Achievment', 'FOR LOOPTY LOOP’);


INSERT INTO projects
(companyId, description, category, categoryId, badge_description, projectName)
values (1, 'If statements are integral to any software program, your task is to...', 'Computer Science', '1',
        'If Statement Achievment', 'Jiffy Iffy’);

INSERT INTO projects
(companyId, description, category, categoryId, badge_description, projectName)
values (2, 'Conduct market research on 25year old males eating crackers at Walmart...', 'Business Marketing', '2',
        'Consumer Market Research', 'Polly want a cracka!’);

INSERT INTO USERPROJECTS
(USERID, PROJECTID)
VALUES(1, 1);

INSERT INTO USERPROJECTS
(USERID, PROJECTID)
VALUES(1, 2);

INSERT INTO USERPROJECTS
(USERID, PROJECTID)
VALUES(2, 3);

INSERT INTO badge
(categoryId, badge_imageUrl)
values('1', 'http://www.lmstemalliance.org/uploads/3/1/8/0/3180267/4578563_orig.png');

INSERT INTO badge
(categoryId, badge_imageUrl)
values('2', ‘https://cdn0.iconfinder.com/data/icons/seo-development-services-glyph/614/3253_-_Market_Analysis-512.png');

INSERT INTO COMPANY
(COMPANYNAME, CONTACTFIRSTNAME, CONTACTLASTNAME, CONTACTEMAIL, CONTACTPHONE, CONTACTSKYPEID, passwrod, username, ProfilePicURL)
VALUES ('FACEBOOK', 'Ned', 'Schneibly', 'ned@facebook.com', '19999999999', 'schneiblyned', '12345', 'Nedzel_washington', 'https://mbevivino.files.wordpress.com/2011/08/silhouette_default.jpg');

INSERT INTO COMPANY
(COMPANYNAME, CONTACTFIRSTNAME, CONTACTLASTNAME, CONTACTEMAIL, CONTACTPHONE, CONTACTSKYPEID, password, username, ProfilePicURL)
VALUES ('GOOGLE', 'Ted', 'Demars', 'ted@google.com', '19999999999', 'demarsted', '12345', 'teddybear', 'https://mbevivino.files.wordpress.com/2011/08/silhouette_default.jpg');
