CREATE database apicourse;
CREATE table apicourse.users ( id MEDIUMINT NOT NULL AUTO_INCREMENT,  name VARCHAR(255) NOT NULL,  email VARCHAR(25) NOT NULL,  PRIMARY KEY (id),  UNIQUE KEY(email));
ALTER TABLE users add column password VARCHAR(255) not null;