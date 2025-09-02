from flask import Flask, render_template,send_from_directory
# from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy



app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///inventory.db'
db = SQLAlchemy(app)
# CORS(app)





#models for database
class Item(db.Model):
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(lenght=30), nullable=False, unique=True)
    price=db.Column(db.Integer(), nullable=False)
    barcode=db.Column(db.String(lenght=12), nullable=False, unique=True)
    desc=db.Column(db.String(lenght=1024), nullable=False, unique=True)







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