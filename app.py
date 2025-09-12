from flask import Flask, render_template,send_from_directory
# from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy



app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///inventory.db'
db = SQLAlchemy(app)
# CORS(app)





#models for database
class Item(db.Model):
    Sno=db.Column(db.Integer(),primary_key=True)
    Name=db.Column(db.String(length=40), nullable=False,unique=False)
    Category=db.Column(db.String(length=30), nullable=True,unique=False)
    MfgDt=db.Column(db.String(length=12), nullable=True,unique=False)
    ExpDt=db.Column(db.String(length=1024), nullable=False,unique=False)
    Qty=db.Column(db.String(length=10),nullable=True,unique=False)








#routes
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





#execution of app
if __name__=="__main__":
    app.run(debug=True,host="0.0.0.0",port=5000)