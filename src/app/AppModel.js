import { CONSTANTS } from 'root/src/constants.js';

export default class AppModel {
    constructor() {}

    async getNews(query) {
        const response = await fetch(query ? CONSTANTS.GET_QUERY_NEWS_URL(query) : CONSTANTS.DEFAULT_NEWS_URL);
        const data = await response.json();
        return data.articles;
    }
}