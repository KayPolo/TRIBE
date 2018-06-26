from flask import Flask, render_template, redirect, url_for, request
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == 'admin' and password == 'admin':
            return render_template('login.html', username)
        else:
            return render_template('errorlogin.html', username)
    else:
        return render_template('index.html')


if __name__ == "__main__":
    app.run()