export const CONSTANTS = {
    API_KEY: '0705e7dcd0114afdb2e897d0635afc29',
    BASE_URL: window.location.origin,
    get DEFAULT_NEWS_URL() {
        return `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`
    },
    get NO_IMAGE_URL() {
        return `${this.BASE_URL}/assets/no-image-box.png`;
    },
    GET_QUERY_NEWS_URL(query) {
        return `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.API_KEY}`
    },
    EMPTY_VALUE: '',
    NO_SEARCH_RESULT_TEXT: 'No Search Results',
    ERROR_TEXT: 'Data Loading Error',
    get MY_NEWS_URL() {
        return `${this.BASE_URL}/api/my-news`;
    },
    get LOGIN_URL() {
        return `${this.BASE_URL}/api/login`;
    },
    get LOGOUT_URL() {
        return `${this.BASE_URL}/api/logout`;
    },
    get REGISTRATION_URL() {
        return `${this.BASE_URL}/api/registration`;
    },
    HTTP_STATUSES: {
        OK: 200,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404
    }
}