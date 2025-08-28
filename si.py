from flask import Flask, render_template,send_from_directory
# from flask_cors import CORS

app=Flask(__name__)

@app.route('/')
def landing():
    return send_from_directory('Landing','landing.html')
