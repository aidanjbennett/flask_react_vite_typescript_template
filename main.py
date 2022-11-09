from flask import Flask
import time


app = Flask(__name__, static_url_path="/", static_folder="./frontend/dist")


@app.route("/")
def home():
    return app.send_static_file("index.html")


@app.errorhandler(404)
def not_found(err):
    return app.send_static_file("index.html")


@app.route("/api/time")
def get_current_time():
    return {"time": time.time()}


if __name__ == "__main__":
    app.run(debug=True)
