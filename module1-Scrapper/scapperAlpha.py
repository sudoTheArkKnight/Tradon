import requests
from bs4 import BeautifulSoup
import json

def get_article_data(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'lxml')

    # Extract site name
    site_name = 'MoneyControl'

    # Extract article title
    article_title_tag = soup.find('h1', {'class': 'article_title artTitle'})
    article_title = article_title_tag.get_text() if article_title_tag else ''

    # Extract article description
    article_desc_tag = soup.find('h2', {'class': 'article_desc'})
    article_desc = article_desc_tag.get_text() if article_desc_tag else ''

    # Extract left block content
    left_block_tag = soup.find('div', {'class': 'left_block'})
    left_block_content = left_block_tag.get_text() if left_block_tag else ''

    # Extract first 5 p tags
    div_tag = soup.find('div', {'class': 'content_wrapper arti-flow', 'id': 'contentdata'})
    p_tags = div_tag.find_all('p')[:6]
    p_tags_data = [p_tag.get_text() for p_tag in p_tags]

    # Create a dictionary to store the extracted data
    article_data = {
        'site_name': site_name,
        'article_title': article_title,
        'article_desc': article_desc,
        'left_block_content': left_block_content,
        'p_tags': p_tags_data
    }

    return article_data

article_data = get_article_data('https://www.moneycontrol.com/news/business/air-india-enters-into-codeshare-pact-with-japans-all-nippon-airways-12703111.html')

with open('scrapped4.json', 'w') as f:
    json.dump(article_data, f, indent=4)