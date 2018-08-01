import logging

from google.appengine.api import urlfetch

from flask import Flask, render_template, request


app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('welcome.html')
    
@app.route('/flash_cards')
def flash_cards():
    return render_template('civics_flash_card.html')


@app.route('/blog')
def blog_index():
    return render_template('myamericablog.html')



@app.route('/get_politicians')
def get_pols():
    pols = {}
    who = request.args.get ('who')
    state = request.args.get ('state')
    
    try:
        result = urlfetch.fetch("https://script.google.com/macros/s/AKfycbypEMJ3kW4juwLOp3iPod4fWjinezYGRFnJQYnw-WOiBHHkExw/exec?who="+str(who)+"&state="+str(state))
        if result.status_code == 200:
           pols = result.content
        else:
            pols=result.status_code
    except urlfetch.Error:
        logging.exception('Caught exception fetching url')
    
    return pols
    
@app.route('/resources')
def get_services():
    services = {}
    what = request.args.get ('what')

    try:
        result = urlfetch.fetch("https://script.google.com/macros/s/AKfycbypEMJ3kW4juwLOp3iPod4fWjinezYGRFnJQYnw-WOiBHHkExw/exec?resources="+str(what))
        if result.status_code == 200:
           services = result.content
        else:
            services=result.status_code
    except urlfetch.Error:
        logging.exception('Caught exception fetching url')
    
    return services

@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500