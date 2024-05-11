"""
Module: web_scraper.py
Author: [Your Name]

This module contains functions to scrape data from a web page.

Dependencies:
- requests
- BeautifulSoup from bs4
- json

Functions:
1. get_article_data(url)
2. main()

Usage Example:
--------------
from web_scraper import get_article_data

url = 'https://www.moneycontrol.com/news/business/air-india-enters-into-codeshare-pact-with-japans-all-nippon-airways-12703111.html'
article_data = get_article_data(url)

# Print the extracted data
print(article_data)
"""

import requests
from bs4 import BeautifulSoup
import json


def get_article_data(url):
    """
    Extracts various data elements from a given article webpage.

    Parameters:
    - url (str): The URL of the article webpage to scrape.

    Returns:
    - dict: A dictionary containing the extracted data elements.
            {
                'site_name': str,
                'article_title': str,
                'article_desc': str,
                'left_block_content': str,
                'p_tags': [str, str, ...]
            }
    """
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


def main():
    """
    Main function to execute web scraping and save data to a JSON file.
    """
    url = 'https://www.moneycontrol.com/news/business/hitachi-energy-eyes-expansion-in-india-amid-rising-power-demand-12707049.html'
    article_data = get_article_data(url)

    # Save the extracted data to a JSON file with indentation
    with open('scrapped4.json', 'w') as f:
        json.dump(article_data, f, indent=4)

# in the next iteration the data will directly be uploaded to the database

if __name__ == "__main__":
    main()
