import logging

import google
import sys
import logging
import requests
from requests import get
import urllib.request


from flask import Flask, render_template, request

from google.appengine.api import wrap_wsgi_app
from google.appengine.api import urlfetch as urlfetch


app = Flask(__name__)
app.wsgi_app = wrap_wsgi_app(app.wsgi_app,use_legacy_context_mode=True, use_deferred=True and False)

#os.environ["PATH"] += os.pathsep + app_path
# gae_dir = google.__path__.append('/Users/tanyagupta/.local/share/virtualenvs/myamerica-_5IkJJdw/lib/python3.11/site-packages/google')
# sys.path.insert(0, gae_dir) # might not be necessary
# import google.appengine # now it's on your import path`
#from google.appengine.api import urlfetch

#from flask import Flask, render_template, request


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
        #result = google.appengine.api.urlfetch.create_rpc(deadline=None, callback=None)
        result = requests.get("https://script.google.com/macros/s/AKfycbypEMJ3kW4juwLOp3iPod4fWjinezYGRFnJQYnw-WOiBHHkExw/exec?who="+str(who)+"&state="+str(state))
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
        #result = urlfetch.fetch("https://script.google.com/macros/s/AKfycbypEMJ3kW4juwLOp3iPod4fWjinezYGRFnJQYnw-WOiBHHkExw/exec?resources="+str(what))
        #rpc = urlfetch.create_rpc()
        #urlfetch.make_fetch_call(rpc,"https://script.google.com/macros/s/AKfycbypEMJ3kW4juwLOp3iPod4fWjinezYGRFnJQYnw-WOiBHHkExw/exec?resources="+str(what))
        result = requests.get("https://script.google.com/macros/s/AKfycbypEMJ3kW4juwLOp3iPod4fWjinezYGRFnJQYnw-WOiBHHkExw/exec?resources="+str(what))
        #result = rpc.get_resut()
    #     self.response.write(result.read())
    # except urllib.error.URLError:
    #         logging.exception('Caught exception fetching url')
    #     return services
        if result.status_code == 200:
           services = result.content
        else:
            services=result.status_code
    except urlfetch.Error:
        logging.exception('Caught exception fetching url')
        # NameError: name 'GET' is not defined
         #Traceback (most recent call last):    File "/layers/google.python.pip/pip/lib/python3.9/site-packages/flask/app.py", line 1473, in wsgi_app      response = self.full_dispatch_request()    File "/layers/google.python.pip/pip/lib/python3.9/site-packages/flask/app.py", line 882, in full_dispatch_request      rv = self.handle_user_exception(e)    File "/layers/google.python.pip/pip/lib/python3.9/site-packages/flask/app.py", line 880, in full_dispatch_request      rv = #self.dispatch_request()    File "/layers/google.python.pip/pip/lib/python3.9/site-packages/flask/app.py", line 865, in dispatch_request      return self.ensure_sync(self.view_functions[rule.endpoint])(**view_args)  # type: ignore[no-any-return]    File "/workspace/app.py", line 72, in get_services      result = urlfetch.fetch("https://script.google.com/macros/s/AKfycbypEMJ3kW4juwLOp3iPod4fWjinezYGRFnJQYnw-WOiBHHkExw/exec?resources="+str(what),payload=None,method=GET,headers={},allow_truncated=False,follow_redirects=True,deadline=None,validate_certificate=None)  NameError: name 'GET' is not defined

    return services

@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
