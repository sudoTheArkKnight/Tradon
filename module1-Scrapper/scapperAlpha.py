import requests
from bs4 import BeautifulSoup
import json

def get_p_tags_data(url):
    # Making a GET request
    r = requests.get(url)

    # Parsing the HTML
    soup = BeautifulSoup(r.content, 'lxml')

    # Finding the div tag
    div_tag = soup.find('div', {'class': 'content_wrapper arti-flow', 'id': 'contentdata'})

    # Extracting text from p tags
    p_tags_data = [p_tag.get_text() for p_tag in div_tag.find_all('p')]

    # Creating a dictionary with p tags data
    p_tags_dict = {'p_tags': p_tags_data}

    # Returning the dictionary
    return p_tags_dict

# Calling the function
p_tags_dict = get_p_tags_data('https://www.moneycontrol.com/news/business/markets/global-equity-flow-slows-indian-flows-continue-but-momentum-hits-lowest-level-since-may-23-12641361.html')

# Creating a JSON file and saving the data
with open('p_tags_data.json', 'w') as f:
    json.dump(p_tags_dict, f)

