# myamerica.life

### citizenship quiz flashcard and other cool projects


This is a google Appengine project. The app is running in gcloud.

To locally run the app clone the repository, `cd` into the root directory of the project (where the `app.yaml`) file is located, then type

```dev_appserver.py .```

This is should work in any cloud 9 workspace or in a local machine.

May 17 2024 - followed the following instructions:

https://cloud.google.com/appengine/docs/standard/python3/services/access

just up to migration considerations section

May 18 2024

Security errors when using legacy bundled services for Python
If you use a legacy bundled services API when a Python 3 app is starting up, you might see the following error message:


Attempted RPC call without active security ticket
This error can occur in scenarios such as reading certain values from Memcache when your app is starting to configure a database connection or set a global variable.

To resolve this issue, you could try moving such logic into a warmup request.

https://cloud.google.com/appengine/docs/standard/troubleshooting
