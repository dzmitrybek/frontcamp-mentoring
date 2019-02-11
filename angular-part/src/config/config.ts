export const CONFIG = {
    API_KEY: '0705e7dcd0114afdb2e897d0635afc29',
    NEWS_API_URL: 'https://newsapi.org/v2/',
    get DEFAULT_NEWS_URL() {
        return `${this.NEWS_API_URL}/top-headlines?country=us&apiKey=${this.API_KEY}`;
    },
    get SEARCH_NEWS_URL() {
        return `${this.NEWS_API_URL}/everything?apiKey=${this.API_KEY}`;
    },
    NO_IMAGE_URL: '/assets/no-image-box.png'
};
