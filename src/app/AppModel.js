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
        this.myNewsDataSet = data.map((item) => {
            item.id = item._id;
            delete item._id;
            return item;
        });
        return this.myNewsDataSet;
    }

    async login(userData) {
        const response = await fetch(CONSTANTS.LOGIN_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.status === CONSTANTS.HTTP_STATUSES.UNAUTHORIZED) {
            throw new Error('Incorrect username or password.');
        }
        
        const data = await response.json();
        return data.userName;
    }

    async logout() {
        await fetch(CONSTANTS.LOGOUT_URL);
    }

    async registration(userData) {
        const response = await fetch(CONSTANTS.REGISTRATION_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.status !== CONSTANTS.HTTP_STATUSES.OK) {
            throw new Error(data.errorMessage);
        }

        return data.userName;
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
        item._id = item.id;
        delete item.id;

        const response = await fetch(`${CONSTANTS.MY_NEWS_URL}/${item._id}`, {
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