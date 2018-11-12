import { CONSTANTS } from 'constants.js';

export default class AppModel {
    constructor() {}

    getNews(query) {
        return fetch(query ? CONSTANTS.GET_QUERY_NEWS_URL(query) : CONSTANTS.DEFAULT_NEWS_URL)
            .then((response) => response.json())
            .then((data) => data.articles)
    }
}