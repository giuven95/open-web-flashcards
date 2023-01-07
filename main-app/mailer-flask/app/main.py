import os
from flask import Flask, request
from flask_cors import CORS
from flask_mail_sendgrid import MailSendGrid
from flask_mail import Message

app = Flask(__name__)
app.config['MAIL_SENDGRID_API_KEY'] = os.environ["WEBSITE_SENDGRID_API_KEY"]
mail = MailSendGrid(app)

app = Flask(__name__)
cors = CORS(app)

@app.route('/contact', methods=['POST'])
def send_contact():
    data = request.get_json()
    msg = Message("New message from 'Contact me' page; " + data["name"] + "; " + data["email"],
                  sender= os.environ["WEBSITE_SENDER_EMAIL_ADDRESS"],
                  recipients=[os.environ["ADMIN_RECIPIENT_EMAIL_ADDRESS"]])
    msg.body = data["message"]
    mail.send(msg)

@app.route('/idea', methods=['POST'])
def send_idea():
    data = request.get_json()
    msg = Message("New message from 'Ideas' page; " + data["name"] + "; " + data["email"],
                  sender= os.environ["WEBSITE_SENDER_EMAIL_ADDRESS"],
                  recipients=[os.environ["ADMIN_RECIPIENT_EMAIL_ADDRESS"]])
    msg.body = data["idea"]
    mail.send(msg)


