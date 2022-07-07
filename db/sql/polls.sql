
DROP TABLE IF EXISTS polls CASCADE;
CREATE TABLE polls (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  name_required BOOLEAN DEFAULT false
);

INSERT INTO polls (name, email)
VALUES ('What activity should we do?', 'hiker@gmail.com');
INSERT INTO polls (name, email)
VALUES ('Where should we go on Vacation?', 'vacationer@gmail.com');
INSERT INTO polls (name, email)
VALUES ('What music should we listen to?', 'dj@gmail.com');
INSERT INTO polls (name, email)
VALUES('Where type of movie should we go see?', 'moviejunkie@gmail.com');

