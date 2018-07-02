import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from create_users_db import *
 
engine = create_engine('sqlite:///tribe_users.db', echo=True)
 
# create a Session
Session = sessionmaker(bind=engine)
session = Session()
 
user = User("admin","adminpass")
session.add(user)
 
user = User("svava","testpw2707")
session.add(user)
  
# commit the record the database
session.commit()
 
session.commit()