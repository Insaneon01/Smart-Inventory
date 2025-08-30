from flask import Flask, render_template,send_from_directory
# from flask_cors import CORS

app=Flask(__name__)
# CORS(app)
@app.route('/')
def landing():
    return render_template('landing.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/profile')
def profile():
    return render_template('pf.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/expire')
def expire():
    return render_template('expire.html')



if __name__=="__main__":
    app.run(debug=True,host="0.0.0.0",port=5000)