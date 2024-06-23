from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app)

##################################################################################################################
## PRODUCT BACKEND DATA
##################################################################################################################

@app.route('/cardInfoProduct')
def cardInfoProduct():
     cardInfoProductVal = [["Brands", "123"],
                           ["Product Items", "123"],
                           ["Total Reviews", "123"],
                           ["Average Star", "4/5"],
                           ["Recommandations", "123"]]
     return cardInfoProductVal

@app.route('/totalReview')
def totalReview():
    totalReviewVal = [67, 80, 100, 20, 33, 55, 44, 77, 55, 40, 70, 80]
    return totalReviewVal

@app.route('/totalRecomment')
def totalRecomment():
    totalRecommentVal = [50, 100]
    return totalRecommentVal

@app.route('/topBrand')
def topBrand():
    topBrandVal = [100, 14, 3, 5]
    return topBrandVal

@app.route('/usagePeriods')
def usagePeriods():
    usagePeriodsVal = [12, 19, 3, 5, 2, 3]
    return usagePeriodsVal

@app.route('/topTable')
def topTable():
    TopCategories = [['Frozen asd', 159],
                     ['Ice cream', 237, ],
                     ['Ice sandwich', 238],
                     ['Ice cream sandwich', 239],
                     ['Eclair', 262]]

    TopSubCategories = [['Frozen yoghurt', 159],
                        ['Ice cream', 237, ],
                        ['Ice sandwich', 238],
                        ['Ice cream sandwich', 239],
                        ['Eclair', 262]]
    
    return {'categories': TopCategories, 'subCategories': TopSubCategories}

##################################################################################################################
## CUSTOMER BACKEND DATA
##################################################################################################################
    
@app.route('/customersDataInfo')
def customersDataInfo():
    CustomerInfo = [["Asep", 159, 159, 159],
                    ["Ujang", 159, 159, 159],
                    ["Budi", 159, 159, 159],
                    ["Rhamdan", 159, 159, 159],
                    ["Syahrul", 159, 159, 159]]
    return CustomerInfo

@app.route('/totalRecommentVal')
def totalRecommentVal():
    return [400, 50, 100, 300]

@app.route('/customerSkinTone')
def customerSkinTone():
    customerSkinTone = [
        {"label" : "Cool", "data": [200, 20, 30, 40, 50]},
        {"label" : "Neutral", "data": [10, 20, 30, 40, 50]},
        {"label" : "Warm", "data": [10, 20, 30, 40, 50]}
    ]
    
    return customerSkinTone

@app.route('/customerAgeAppereance')
def customerAgeAppereance():
    customerAgeAppereance = [
        {"label" : "Hijab", "data": [10, 20, 30, 40, 50, 60, 70], "backgroundColor": 'rgba(54, 162, 235, 0.2)', "borderColor": 'rgba(54, 162, 235, 1)'},
        {"label" : "Non-Hijab", "data": [x * -1 for x in [40, 30, 30, 40, 50, 60, 70]], "backgroundColor": 'rgba(255, 99, 132, 0.2)', "borderColor": 'rgba(255, 99, 132, 1)'}
    ]
    
    return customerAgeAppereance


if __name__ == '__main__':
    app.run(debug=True)