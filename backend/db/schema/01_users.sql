-- Drop and recreate Users table (Example)
--testing

DROP TABLE IF EXISTS guardian CASCADE;
DROP TABLE IF EXISTS children CASCADE;
DROP TABLE IF EXISTS daycare CASCADE;
DROP TABLE IF EXISTS account CASCADE;
DROP TABLE IF EXISTS enrolment CASCADE;
DROP TABLE IF EXISTS shortlist CASCADE;
DROP TABLE IF EXISTS daycare_profile CASCADE;

CREATE TABLE Account (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  acct_type VARCHAR(255) NOT NULL
);

CREATE TABLE guardian (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  postalCode VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  acctType VARCHAR(255) NOT NULL

);

CREATE TABLE children (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  guardian_id INTEGER REFERENCES guardian(id) ON DELETE CASCADE
);

CREATE TABLE daycare (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  postalCode VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  acctType VARCHAR(255) NOT NULL

);



CREATE TABLE enrolment (
  id SERIAL PRIMARY KEY NOT NULL,
  month VARCHAR(255) NOT NULL,
  year VARCHAR(255) NOT NULL,
  child_id INTEGER REFERENCES children(id) ON DELETE CASCADE,
  daycare_id INTEGER REFERENCES daycare(id) ON DELETE CASCADE
);

CREATE TABLE shortlist (
  id SERIAL PRIMARY KEY NOT NULL,
  guardian_id INTEGER REFERENCES guardian(id) ON DELETE CASCADE,
  daycare_id INTEGER REFERENCES daycare(id) ON DELETE CASCADE
);

CREATE TABLE daycare_profile (
  id SERIAL PRIMARY KEY NOT NULL,
  max_capacity VARCHAR(255) NOT NULL,
  bio VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  age_group VARCHAR(255) NOT NULL,
  daycare_id INTEGER REFERENCES daycare(id) ON DELETE CASCADE
);

