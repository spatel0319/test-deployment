from flask import Flask
from flask import request
import random

app = Flask(__name__)

@app.route('/test1', methods=['POST'])
def test1():
    try:
        data = request.json
        if 'random' in data:
            apples = ['gala apple', 'fuji apple', 'green apple', 'honeycrisp apple', 'granny smith apple', 'baldwin apple', 'apple']
            return random.choice(apples)
    except:
        pass
    return 'apple'
    
@app.route('/test2', methods=['GET'])
def test2():
    return 'banana'

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        return '' 
    else:
        return 'THIS IS MY FLASK SERVER'

if __name__ == '__main__':
	app.run(host='0.0.0.0', port = 1000, debug=True)
	