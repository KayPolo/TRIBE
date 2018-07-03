from flask import Flask, flash, redirect, url_for, render_template, request, session, abort
import os
from sqlalchemy.orm import sessionmaker
from create_users_db import *
from flask_mail import Mail, Message

engine = create_engine('sqlite:///tribe_users.db', echo=True)
app = Flask(__name__)

# email server
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')#'tribe.mail.testing@gmail.com'
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')#'tribe1234!'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)

app.secret_key = 'super secret key'


@app.route("/")
def index():
    if not session.get('logged_in'):
        return render_template('email.html')
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

@app.route('/email', methods=['POST', 'GET'])
def email():
    if request.method == 'POST':

        msg = Message(subject="Hello, I hope this works haha.",
                      sender="tribe.mail.testing@gmail.com",
                      recipients="ky369@cornell.edu")
        msg.body = request.form.get('message')
        mail.send(msg)
        return ("Message was sent")
    else:
        return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)