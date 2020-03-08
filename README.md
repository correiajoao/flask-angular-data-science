# Artificial Intelligence - PPGI 2019.2
## A Random Forest model to estimate risk of heart disease
### Notice: this project is only for educational pruporse 

This project contains a Machine Learning model deployed on a docker container using Angular as frontend and Python as beackend. The base code is forked from [delsner/flask-angular-data-science](https://github.com/delsner/flask-angular-data-science), look the credit section in this document.

The intelligent model was built using a RandomForest algorithm, the data to train the model is a set of historical data about the presence of heart disease in patients, available at [kaggle](https://www.kaggle.com/ronitf/heart-disease-uci).

To run this project simple installe the docker in your computer, than execute: `docker-compose up`.

You will be able to main page: http://localhost:4200/home

## System screens

<p align="center">
<img width="1420" height="300" src="https://user-images.githubusercontent.com/12295778/76171187-3fe94780-6167-11ea-994e-a8fc58c2035c.png"></img>
<p align="center"> Card containing the project description.</p>
</p>

<p align="center">
<img width="516" height="706" src="https://user-images.githubusercontent.com/12295778/76171232-ad957380-6167-11ea-8ad2-c498f7a16d4d.png"></img>
<p align="center"> Form to submit data for a new disease prediction.</p>
</p>

<p align="center">
<img width="1000" height="500" src="https://user-images.githubusercontent.com/12295778/76171437-40371200-616a-11ea-9dfd-f09fcfb466db.png"></img>
<p align="center"> Result for the prediction of a high risk for heart disease prediction; Also the indication of the most common diseases.</p>
</p>

<p align="center">
<img width="900" height="350" src="https://user-images.githubusercontent.com/12295778/76171476-b3d91f00-616a-11ea-8265-b5f07b185b67.png"></img>
<p align="center"> Result for the prediction of a low risk for heart disease prediction.</p>
</p>

### Knowledge representation

On the figure containing the project description, there is a link from the model's knowledge representation. This is a big file, so follows the link for the figure (https://github.com/correiajoao/flask-angular-data-science/blob/master/frontend/src/assets/tree.png).


# Credits
## Data Science Web Application Tutorial

This repository is meant to demonstrate the use of Flask and Angular to build a simple, but state-of-the-art, web application which can be used for POCs.

Read the corresponding Medium article [here](https://medium.com/@dvelsner/deploying-a-simple-machine-learning-model-in-a-modern-web-application-flask-angular-docker-a657db075280).
