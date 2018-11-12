import { CONSTANTS } from 'constants.js';

export default class AppView {
    constructor() {
        this.mainContentArea = document.querySelector('#app-content');
        this.appLoader = document.querySelector('#app-loader');
        this.searchField = document.querySelector('#search-field');
        this.searchBtn= document.querySelector('#search-btn');
        this.refreshBtn = document.querySelector('#refresh-btn');
        this.newsHeader = document.querySelector('.news-header');
    }

    renderNews(news) {
        this.mainContentArea.innerHTML = CONSTANTS.EMPTY_VALUE;
        news.forEach((item) => this.renderNewsCard(item));
        this.renderNewsHeader();
    }

    renderNewsCard(item) {
        const { source: { name: sourceName }, description, publishedAt, title, urlToImage, url } = item;
        const newsCardTemplate = `
            <div class="ui link cards">
                <div class="card">
                    <div class="image">
                        <img src="${urlToImage || CONSTANTS.NO_IMAGE_URL}">
                    </div>
                    <div class="content">
                        <div class="header">${title}</div>
                        <div class="meta">
                            <span>${sourceName}</span>
                        </div>
                        <div class="description">${description || CONSTANTS.EMPTY_VALUE}</div>
                    </div>
                    <div class="extra content card-footer">
                        <span class="right floated">${this.formatData(publishedAt)}</span>
                        <span>
                            <a href="${url}" target="blank">
                                <button class="ui right labeled icon button tiny card-btn">
                                        Read More
                                        <i class="right chevron icon"></i>
                                </button>
                            </a>
                            
                        </span>
                    </div>
                </div>
            </div>`;
        this.mainContentArea.innerHTML += newsCardTemplate;
    };

    renderNewsHeader() {
        this.newsHeader.innerText = this.searchField.value
            ? `"${this.searchField.value.toUpperCase()}" search results:`
            : 'Top News:';
    }

    renderEmptyResult() {
        this.renderMessage(CONSTANTS.NO_SEARCH_RESULT_TEXT);
    }

    renderErrorMessage() {
        this.renderMessage(CONSTANTS.ERROR_TEXT);
    }

    renderMessage(message) {
        this.renderNewsHeader();
        this.mainContentArea.innerHTML = `
            <h2 class='error message'>${message}</h2>`;
    }

    manageLoader(isDisable, minDelay = 500) {
        if (isDisable) {
            this.appLoader.classList.add('active');
        } else {
            setTimeout(() => this.appLoader.classList.remove('active'), minDelay);
        }
    }


    formatData(date) {
        return new Date(date).toDateString();
    }


    onSearchNews(callback) {
        this.searchBtn.addEventListener('click', () => {
            if (this.searchField.value.length > 2) {
                callback(this.searchField.value)
            }
        });
        this.searchField.addEventListener('keyup', (event) => {
            if (event.keyCode === 13 && this.searchField.value.length > 2) {
                callback(this.searchField.value)
            }
        });
    }

    onRefreshNews(callback) {
        this.refreshBtn.addEventListener('click', () => {
            this.searchField.value = CONSTANTS.EMPTY_VALUE;
            callback();
        });
    }
}