from flask import Flask, request, jsonify
from sklearn.ensemble import RandomForestClassifier

from sklearn.externals import joblib
from sklearn.metrics import r2_score

import pandas as pd
import sys

# declare constants
HOST = '0.0.0.0'
PORT = 8081

# initialize flask application
app = Flask(__name__)

@app.route('/api/train', methods=['POST'])
def train():

    parameters = request.get_json()

    hearth = pd.read_csv("heart.csv")
    X = hearth.iloc[:,0:13]
    y = hearth.iloc[:,-1]
   
    print('Data loaded', file=sys.stdout)

    clf=RandomForestClassifier(n_estimators=10)

    clf.fit(X, y)
    joblib.dump(clf, 'model.pkl')

    return jsonify({'accuracy': round(clf.score(X, y) * 100, 2)})

@app.route('/api/predict', methods=['POST'])
def predict():

    X = request.get_json()
    print(X, file=sys.stdout)
    X = [[ float(X['Age']), float(X['Sex']), float(X['ChestPain']), float(X['Trestbps']), float(X['Chol']), float(X['Fbs']), float(X['RestEcg']), float(X['Thalach']), float(X['Exang']), float(X['Oldpeak']), float(X['Slope']), float(X['Ca']), float(X['Thal']) ]]

    clf = joblib.load('model.pkl')
    value = clf.predict(X)

    return jsonify({'value': str(value[0])})

if __name__ == '__main__':
    # run web server
    app.run(host=HOST,
            debug=True,
            port=PORT)
