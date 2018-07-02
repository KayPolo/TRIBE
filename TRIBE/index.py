from flask import Flask
from flask import Flask, flash, redirect, url_for, render_template, request, session, abort
import os
from sqlalchemy.orm import sessionmaker
from create_users_db import *
engine = create_engine('sqlite:///tribe_users.db', echo=True)
app = Flask(__name__)

app.secret_key = 'super secret key'


@app.route("/")
def index():
    if not session.get('logged_in'):
        return render_template('index.html')
    else:
        return render_template('login.html')

@app.route('/login', methods=['POST', 'GET'])
def login():

    if request.method == 'POST':

        POST_USERNAME = str(request.form['username'])
        POST_PASSWORD = str(request.form['password']) 

        Session = sessionmaker(bind=engine)
        s = Session()

        query = s.query(User).filter(User.username.in_([POST_USERNAME]),User.password.in_([POST_PASSWORD]))
        result = query.first()
        if result:
            print(result)
            session['logged_in'] = True
        else:
            #flash('Incorrect Password')
            return render_template('errorlogin.html')
        return index()       
        if username == 'admin' and password == 'admin':
            return render_template('login.html', username)
        else:
            return render_template('errorlogin.html', username)
    else:
        return render_template('index.html')

@app.route('/logout')
def logout():
    session.clear()


if __name__ == "__main__":
    app.run(debug=True)
