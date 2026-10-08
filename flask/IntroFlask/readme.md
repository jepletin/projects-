intro to flask.

Create a flask appliacation. requirments

1.pipenv
2.python version 3.8 3. ensure in bash script you have the line.()
export PIPENV_VENV_IN_PROJECT=1
the created virtual environment will be in the project root.

Starting point.

Create your project folder
Create your virtual environment

flask for server side rendering application.
using jinja templates 
1. create a project folder
flask server side 
2 set up your flask application 
3 create template folder <html templates>

Client-side rendering

JavaScript-heavy: the browser does most of the rendering work
Caching: pages and data can be cached in the browser
Can be built as a PWA (Progressive Web App), which runs as a mobile, desktop and web app

Server-side rendering

Advantage: fast load times, especially on the first load
Disadvantages:
Going from the home page to the about page fetches the full page from the server again
Scaling: the server does the rendering work for every request
SQL injection: the server talks to the database, so inputs must be handled safely
Cross-origin: requests from a different origin can be blocked (CORS)

Next.js

Combines client and server rendering in one framework