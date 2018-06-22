from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/login/<username>')
def login(username):
    if username == "Kay":
        return render_template('login.html', username=username)
    else:
        return render_template('errorlogin.html', username=username)

if __name__ == "__main__":
    app.run()