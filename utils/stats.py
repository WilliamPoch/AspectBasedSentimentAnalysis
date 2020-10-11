import numpy as np
import pandas as pd

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
    overall_sent_values = df['overall_sentiment'].value_counts().sort_index().tolist()
    # Return the total number of sentences
    total_data = len(df['overall_sentiment'])

    # Aspect Values
    aspect_df = df[['overall_sentiment', 'aspect', 'staff_sent', 
    'amenities_sent', 'condition_sent', 'clean_sent']]

    # Sentiments per aspect
    # Aspect 1 , 2, 3, 4 = staff, amenities, condition, cleanliness
    # **Sorted by negative, neutral, positive.**
    aspect1 = aspect_df['staff_sent'].value_counts().sort_index().tolist()
    aspect2 = aspect_df['amenities_sent'].value_counts().sort_index().tolist()
    aspect3 = aspect_df['condition_sent'].value_counts().sort_index().tolist()
    aspect4 = aspect_df['clean_sent'].value_counts().sort_index().tolist()

    return overall_sent_values, aspect1, aspect2, aspect3, aspect4, total_data

def get_details(df):
    '''
    For all sentences, appends review id, aspect, aspect sentiment, overall sentiment, and original text into arraylist.
    Returns a 2d array. (dict or json might be needed)
    '''
    details = []
    # for review_id, raw_text, overall, aspect, staff, amen, con, clean in zip(df['review_id'], df['raw_text'], df['overall_sentiment'], df['aspect'], df['staff_sent'], df['amenities_sent'], df['condition_sent'], df['clean_sent']):
    #     details.append([review_id, raw_text, overall, aspect, staff, amen, con, clean])

    # No review id
    for raw_text, overall, aspect, staff, amen, con, clean in zip(df['raw_text'], df['overall_sentiment'], df['aspect'], df['staff_sent'], df['amenities_sent'], df['condition_sent'], df['clean_sent']):
        details.append([raw_text, overall, aspect, staff, amen, con, clean])

    return details

# def get_each_detail(details):
#     '''
#     To be edited.
#     '''
#     for i in range(len(details)):
#         print('Text: {}', 'Aspect: {}', 'Staff Sentiment: {}',
#         'Amenities Sentiment: {}', 'Condition Sentiment: {}', 'Cleanliness Sentiment: {}').format(details[i][0], details[i][1], details[i][2], details[i][3], details[i][4], details[i][5], details[i][6])

