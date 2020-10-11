import pandas as pd
import numpy as np
import joblib
import timeit
from tensorflow.keras.models import load_model
from tensorflow.keras.models import model_from_json
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

from utils.preprocess import preprocess
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

import gensim
import gensim.corpora as corpora
from gensim.utils import simple_preprocess
from gensim.models import CoherenceModel

from utils import sentiment_classifiers
from utils import stats
from utils import data_to_csv


'''
Main file. 
1. Starts by pre-loading all models.
2. Enter loop
3. -------------
4. API should check if user put new data (file or typed)
5. If data is file, retrieve file(csv) and convert to df
6. Else if data is user input retrieve user input and convert to df 
7. Preprocess df
8. Classify aspects
9. Classify sentiments
10. New predicted data should be appended to previous predicted data (if any), for website to use.
11. (optional) save file to disk
12. Functions are provided to retrieve stats for visualization and details page of web.
13. If no user data, then it loops back to step 3.

* See individual files for their details *
'''

def read_from_file(file):
    """
    Reads from file.
    """
    col = ['review']
    df = pd.read_csv('datalocation', header=None, names=col)
    print('Loaded data')

    return df


        
def read_from_sentences(sen1,sen2,sen3,sen4,sen5):
    """
    Reads from individual sentences.
    """
    str1 = ''+sen1
    str2 = ''+sen2
    str3 = ''+sen3
    str4 = ''+sen4
    str5 = ''+sen5

    reviews = [str1+str2+str3+str4+str5]
    col = ['review']
    df = pd.DataFrame(columns=col)
    df['review'] = reviews
    print('Loaded data')

    return df

if __name__ == "__main__":
    start = timeit.default_timer()
    # Load models
    classifiers = sentiment_classifiers.Asp_Sentiment_classifiers()
    stop = timeit.default_timer()
    print('Model load times: ', stop - start)
    
    # Begin loop
    done = False
    while not done:
        start = timeit.default_timer()

        # *** TESTING Data ***
        # col = ['review_id', 'review']
        # df = pd.read_csv('data/data.csv', header=None, names=col, skiprows=1)
        # ******************

        # If there is some file or sentence to run.
        data = True
        if data:
            """
            If data is from file call function read_from_file(file)
            Else if from sentences call function read_from_sentences(sen1,sen2,sen3,sen4,sen5) 
            """
            if :
                df = read_from_file('data/data - Copy.csv')
            else :
                df = read_from_sentences(sen1,sen2,sen3,sen4,sen5)
            """
            Preprocess and predict data.
            Visualization data can be extracted stats. functions
            """ 
            print('Preprocessing...')
            reviews_df = preprocess(df)
            print('Classifying aspects...')
            reviews_df = classifiers.aspect_classifier(reviews_df, 0.06)
            print('Classifying sentiments...')
            reviews_df = classifiers.sentiments(reviews_df)
            print('Done!')

            # Optional
            data_to_csv.save_file(reviews_df)

            # Using stats functions, data can be retrieved from newly predicted data or all data.
            # Gets info for pie charts. (Returns arrays of overall_sent_values, aspect1, aspect2, aspect3, aspect4, total_data)
            # **Sorted by negative, neutral, positive.**
            stats.get_chart_data(reviews_df)
            # Contains all sentence details. (as 2d array)
            stats.get_details(reviews_df)

        # timing for testing purposes
        stop = timeit.default_timer()
        print('1 Loop time: ', stop - start)
        # Comment done to keep looping.
        done=True
