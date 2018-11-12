import { CONSTANTS } from 'constants.js';

export default class AppModel {
    constructor() {
        this.news = [];
        this.appContentElement = document.querySelector('#app-content');
    }

    getNews(query) {
        return this.news.lenght ? this.news : this.loadNews(query);
    }

    loadNews(query) {
        return fetch(query ? CONSTANTS.GET_QUERY_NEWS_URL(query) : CONSTANTS.DEFAULT_NEWS_URL)
            .then((response) => response.json())
            .then((data) => this.news = data.articles)
    }
}