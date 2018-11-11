export const CONSTANTS = {
    API_KEY: '0705e7dcd0114afdb2e897d0635afc29',
    get NEWS_URL() {
        return `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${this.API_KEY}`
    }
}