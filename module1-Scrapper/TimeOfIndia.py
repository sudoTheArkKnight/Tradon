from bs4 import BeautifulSoup
import requests
import json


def get_content(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'lxml')

    site_name = "Times of India"

    title = soup.find('h1', {'class': 'HNMDR'}).text.strip()
    article_content = soup.find('div', class_='fewcent-110056540').text.strip()

    # Print the text

    article_data = {
            'site_name': site_name,
            'article_title': title,
            'article_desc': article_content,

    }

    return article_data


def main():
    url = input("Enter the URL: ")
    article_data = get_content(url)

    # Save the extracted data to a JSON file with indentation
    with open('TOI1.json', 'w') as f:
        json.dump(article_data, f, indent=4)


if __name__ == "__main__":
    main()
