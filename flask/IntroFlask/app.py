from flask import Flask, send_file, request, render_template

app=Flask(__name__)

@app.route("/")
def home():
    return "Hello this is my flask server"

@app.route("/about")
def about():
    return "This is the about us section"

@app.route("/pic")
def get_pic():
    file_path="one.png"
    return send_file(file_path)
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form['username']
        return f"Hello {name}, POST request received"
    return render_template('name.html')

if __name__=="__main__":
    app.run(debug=True)