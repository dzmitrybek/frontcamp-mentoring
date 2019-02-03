import { CONSTANTS } from 'root/src/constants.js';

export default class AppModel {
    constructor() {
        this.myNewsDataSet = [];
    }

    async getNews(query) {
        const response = await fetch(query ? CONSTANTS.GET_QUERY_NEWS_URL(query) : CONSTANTS.DEFAULT_NEWS_URL);
        const data = await response.json();
        return data.articles;
    }

    async getMyNews() {
        const response = await fetch(CONSTANTS.MY_NEWS_URL);
        const data = await response.json();
        this.myNewsDataSet = data;
        return data;
    }

    async sendNewNewsItem(newsItem) {
        newsItem.source = { name: 'Own News' };
        newsItem.publishedAt = new Date();
        newsItem.urlToImage = newsItem.urlToImage || CONSTANTS.NO_IMAGE_URL;

        const response = await fetch(CONSTANTS.MY_NEWS_URL, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsItem)
          });
        
        const data = await response.json();
        return data;
    }

    async updateNewsItem(item) {
        item.source = { name: 'Own News' };
        item.publishedAt = new Date();

        const response = await fetch(CONSTANTS.MY_NEWS_URL, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
          });
        
        const data = await response.json();
        return data;
    }

    async deleteNewsItem(id) {
        const response = await fetch(`${CONSTANTS.MY_NEWS_URL}/${id}`, {
            method: 'DELETE'
          });
        
        const data = await response.json();
        return data;
    }

    getMyNewsById(id) {
        return this.myNewsDataSet.find((e) => e.id === id);
    }
}