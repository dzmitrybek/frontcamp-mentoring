export const CONSTANTS = {
    API_KEY: '0705e7dcd0114afdb2e897d0635afc29',
    get DEFAULT_NEWS_URL() {
        return `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`
    },
    GET_QUERY_NEWS_URL(query) {
        return `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.API_KEY}`
    },
    NO_IMAGE_URL: '/assets/no-image-box.png',
    EMPTY_VALUE: '',
    NO_SEARCH_RESULT_TEXT: 'No Search Results',
    ERROR_TEXT: 'Data Loading Error',
}