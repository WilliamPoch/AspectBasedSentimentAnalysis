import pandas as pd

# In case it is needed, output from prediction will be save to disk as csv file.

def save_file(df):
    df.to_csv('data/data_pred.csv', encoding='utf-8', index=False)
