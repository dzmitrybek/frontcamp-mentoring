import { CONSTANTS } from 'constants.js'

export default class AppModel {
    constructor() {
        this.news = [];
        this.appContentElement = document.querySelector('#app-content');
    }

    getNews() {
        return this.news.lenght ? this.news : this.loadNews();
    }

    loadNews() {
        return fetch(CONSTANTS.NEWS_URL)
            .then((response) => response.json())
            .then((data) => this.news = data.articles)
    }
}