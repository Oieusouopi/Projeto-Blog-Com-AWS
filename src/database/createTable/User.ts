export default `CREATE TABLE users (
id INT NOT NULL auto_increment, 
name VARCHAR(30) NOT NULL, 
email VARCHAR(30) NOT NULL UNIQUE, 
nickName VARCHAR(30) NOT NULL UNIQUE, 
password VARCHAR(30) NOT NULL, 
admin BIT NOT NULL, 
PRIMARY KEY(id));`;