import requests
from bs4 import BeautifulSoup
import json


def get_p_tags_data(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'lxml')
    div_tag = soup.find('div', {'class': 'content_wrapper arti-flow', 'id': 'contentdata'})
    p_tags_data = [p_tag.get_text() for p_tag in div_tag.find_all('p')]
    p_tags_dict = {'p_tags': p_tags_data}
    return p_tags_dict


p_tags_dict = get_p_tags_data('https://www.moneycontrol.com/news/business/markets/global-equity-flow-slows-indian-flows-continue-but-momentum-hits-lowest-level-since-may-23-12641361.html')


with open('p_tags_data.json', 'w') as f:
    json.dump(p_tags_dict, f)