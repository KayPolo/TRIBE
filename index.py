from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')
    #return "<h1>Hello There!!!</h1>"

if __name__ == "__main__":
    app.run()