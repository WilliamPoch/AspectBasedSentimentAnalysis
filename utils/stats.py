import numpy as np
import pandas as pd
import math

'''
Outputs various data for use in web.
Add or modify according to needs.
'''

def get_chart_data(df):
    '''
    Returns lists of Overall sentiment values, and aspect sentiment values.
    '''
    # Overall Sentiment values
    # **Sorted by negative, neutral, positive.** Eg: overall_sent_values[0] = negative values
    overall_sent_values = pd.Series([0,0,0], index =['positive', 'neutral', 'negative']) 
    overall_sent_values += df['overall_sentiment'].value_counts()
    # Return the total number of sentences
    total_data = len(df['overall_sentiment'])
    print(overall_sent_values)
    # Aspect Values
    # aspect_df = df[['overall_sentiment', 'aspect', 'staff_sent', 
    # 'amenities_sent', 'condition_sent', 'clean_sent']]

    # Sentiments per aspect
    # Aspect 1 , 2, 3, 4 = staff, amenities, condition, cleanliness
    # **Sorted by negative, neutral, positive.**

    
    aspect1 = pd.Series([0,0,0], index =['positive', 'neutral', 'negative']) 
    aspect2 = pd.Series([0,0,0], index =['positive', 'neutral', 'negative']) 
    aspect3 = pd.Series([0,0,0], index =['positive', 'neutral', 'negative']) 
    aspect4 = pd.Series([0,0,0], index =['positive', 'neutral', 'negative']) 

    aspect1 += df['staff_sent'].value_counts()
    print(aspect1)
    aspect2 += df['amenities_sent'].value_counts()
    print(aspect2)
    aspect3 += df['condition_sent'].value_counts()
    print(aspect3)
    aspect4 += df['clean_sent'].value_counts()
    print(aspect4)
    print()

    import math
    overall_sent_values = [0 if math.isnan(x) else x for x in overall_sent_values]
    a1 = [0 if math.isnan(x) else x for x in aspect1]
    a2 = [0 if math.isnan(x) else x for x in aspect2]
    a3 = [0 if math.isnan(x) else x for x in aspect3]
    a4 = [0 if math.isnan(x) else x for x in aspect4]

    # a1 = a1[['Negative', 'Neutral', 'Positive']]
    # a1 = a1[['Negative', 'Neutral', 'Positive']]
    # a1 = a1[['Negative', 'Neutral', 'Positive']]
    # a1 = a1[['Negative', 'Neutral', 'Positive']]

    print(overall_sent_values)
    print(a1)
    print(a2)
    print(a3)
    print(a4)

    return overall_sent_values, a1, a2, a3, a4, total_data

def get_details(df):
    '''
    For all sentences, appends review id, aspect, aspect sentiment, overall sentiment, and original text into arraylist.
    Returns a 2d array. (dict or json might be needed)
    '''
    # for review_id, raw_text, overall, aspect, staff, amen, con, clean in zip(df['review_id'], df['raw_text'], df['overall_sentiment'], df['aspect'], df['staff_sent'], df['amenities_sent'], df['condition_sent'], df['clean_sent']):
    #     details.append([review_id, raw_text, overall, aspect, staff, amen, con, clean])

    # No review id
    # for raw_text, overall, aspect, staff, amen, con, clean in zip(df['raw_text'], df['overall_sentiment'], df['aspect'], df['staff_sent'], df['amenities_sent'], df['condition_sent'], df['clean_sent']):
    #     details.append([raw_text, overall, aspect, staff, amen, con, clean])
    

    details = df[['staff_sent','amenities_sent','condition_sent','clean_sent','overall_sentiment', 'raw_text']]
    details.columns = ['a1','a2','a3','a4','overall','sentence']



    return details




# 
# print(get_chart_data(df))

# def get_each_detail(details):
#     '''
#     To be edited.
#     '''
#     for i in range(len(details)):
#         print('Text: {}', 'Aspect: {}', 'Staff Sentiment: {}',
#         'Amenities Sentiment: {}', 'Condition Sentiment: {}', 'Cleanliness Sentiment: {}').format(details[i][0], details[i][1], details[i][2], details[i][3], details[i][4], details[i][5], details[i][6])

