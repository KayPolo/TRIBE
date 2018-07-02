CREATE TABLE USER (
	user_id INT, 
    	user_name VARCHAR(20), 
   	user_email VARCHAR(20), 
  	user_type VARCHAR(20), 
    	user_origin VARCHAR(20),
	PRIMARY KEY (user_id)
    );

CREATE TABLE FOUNDERS (
	user_id INT,
	founder_id INT,
	business_id INT, 
	founder_phonenr VARCHAR(20),
	founder_address VARCHAR (50),
	founder_bio VARCHAR (100),
	PRIMARY KEY (business_id),
    	FOREIGN KEY (user_id) REFERENCES USER(user_id)
	);

CREAT TABLE EMPLOYEES (
	user_id INT,
	employee_id INT,
	business_id INT,
	employee_startdate datetime,
	employee_enddate datetime,
	PRIMARY KEY (employee_id),
	FOREIGN KEY (user_id) REFERENCES USER(user_id)
	);

CREATE TABLE SKILLS (
	user_id INT, 
	skills_id INT,
	skills_type VARCHAR(20),
    	skills_skill VARCHAR(20), 
    	skills_how VARCHAR(40),
	PRIMARY KEY (skills_id),
	FOREIGN KEY (user_id) REFERENCES USER(user_id)
    );

CREATE TABLE GOALS (
	user_id INT, 
	goals_id INT,
	goals_shortterm VARCHAR(20),
    	goals_longterm VARCHAR(20)
	PRIMARY KEY (goals_id),
	FOREIGN KEY (user_id) REFERENCES USER(user_id)
    );

CREATE TABLE IDEAS (
	user_id INT, 
	idea_id INT,
	ideas_idea VARCHAR(20),
	PRIMARY KEY (idea_id),
	FOREIGN KEY (user_id) REFERENCES USER(user_id)
	);

CREATE TABLE BUSINESS (
	user_id INT,
	business_id INT,
	business_name VARCHAR(20),
	business_description VARCHAR(20),
	business_logo BLOB,
	business_type VARCHAR(20),
	business_location VARCHAR(20),
	business_phonenumber INT,
	business_email VARCHAR(20),
	PRIMARY KEY (business_id),
	FOREIGN KEY (user_id) REFERENCES USER(user_id)
	);











