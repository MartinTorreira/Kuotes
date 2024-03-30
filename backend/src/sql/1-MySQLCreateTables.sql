DROP INDEX UserIndexByUserName ON User;

DROP TABLE IF EXISTS Quote;
DROP TABLE IF EXISTS User;

CREATE TABLE User (
    id BIGINT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(60) COLLATE latin1_bin NOT NULL,
    password VARCHAR(60) NOT NULL, 
    firstName VARCHAR(60) NOT NULL,
    lastName VARCHAR(60) NOT NULL, 
    email VARCHAR(60) NOT NULL,
    role TINYINT NOT NULL,
    CONSTRAINT UserPK PRIMARY KEY (id),
    CONSTRAINT UserNameUniqueKey UNIQUE (userName)
) ENGINE = InnoDB;

CREATE INDEX UserIndexByUserName ON User (userName);

CREATE TABLE Quote (
    id BIGINT NOT NULL AUTO_INCREMENT,
    title VARCHAR(60) NOT NULL,
    description VARCHAR(255) ,
    date DATE NOT NULL,
    importance TINYINT,
    userId BIGINT NOT NULL,
    CONSTRAINT userIdFK FOREIGN KEY (userId) REFERENCES User(id),
    CONSTRAINT QuotePK PRIMARY KEY (id)
) ENGINE = InnoDB;