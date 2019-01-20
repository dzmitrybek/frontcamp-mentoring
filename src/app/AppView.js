import { CONSTANTS } from 'root/src/constants.js';

export default class AppView {
    constructor() {
        this.mainContentArea = document.querySelector('#app-content');
        this.appLoader = document.querySelector('#app-loader');
        this.searchBar = document.querySelector('#search-bar');
        this.searchField = document.querySelector('#search-field');

        this.searchBtn= document.querySelector('#search-btn');
        this.refreshBtn = document.querySelector('#refresh-btn');
        this.addNewsBtn = document.querySelector('#add-news-btn');

        this.myNewsPageBtn = document.querySelector('#my-news-page-btn');
        this.mainPageBtn = document.querySelector('#main-page-btn');

        this.newsHeader = document.querySelector('.news-header');

        this.editModeTemplate = `
            
        `;
    }

    renderNews(news, isEditMode) {
        this.mainContentArea.innerHTML = CONSTANTS.EMPTY_VALUE;
        news.forEach((item) => this.renderNewsCard(item, isEditMode));
    }

    renderNewsCard(item, isEditMode) {
        const { id, source: { name: sourceName }, description, publishedAt, title, urlToImage, url } = item;
        const newsCardTemplate = `
            <div class="ui link cards">
                <div class="card">
                    <div class="image">
                        <img src="${urlToImage || CONSTANTS.NO_IMAGE_URL}">
                    </div>
                    <div class="content">
                        <div class="header news-card-header">
                            <span>${title}</span>
                            ${isEditMode ? `
                                <button class="ui icon button" data-label="edit-btn" data-id=${id}>
                                    <i class="edit icon" data-label="edit-btn" data-id=${id}></i>
                                </button>
                                <button class="ui icon button" data-label="delete-btn" data-id=${id}>
                                    <i class="window close icon" data-label="delete-btn" data-id=${id}></i>
                                </button>
                            ` : CONSTANTS.EMPTY_VALUE}
                        </div>
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
        if(isEditMode) {
            this.edit
        }
    };

    renderEditForm(item = {}) {
        const { id, title, description, urlToImage, url } = item;
        const editNewsTemplate = `
            <form class="ui form edit-form" id="edit-form" data-id=${id}>
                <div class="form-content-wrapper">
                    <div class="field">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Title" value="${title || CONSTANTS.EMPTY_VALUE}">
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <input type="text" name="description" placeholder="Description" value="${description || CONSTANTS.EMPTY_VALUE}">
                    </div>
                    <div class="field">
                        <label>Image URL</label>
                        <input type="text" name="urlToImage" placeholder="Image URL" value="${urlToImage || CONSTANTS.EMPTY_VALUE}">
                    </div>
                    <div class="field">
                        <label>Source URL</label>
                        <input type="text" name="url" placeholder="Source URL" value="${url || CONSTANTS.EMPTY_VALUE}">
                    </div>
                    <button class="ui button" type="submit">Save</button>
                </div>
            </form>`;
        this.mainContentArea.innerHTML = editNewsTemplate;
    };

    renderNewsHeader() {
        this.newsHeader.innerText = this.searchField.value
            ? `"${this.searchField.value.toUpperCase()}" search results:`
            : 'Top News:';
    }

    renderHeader(headerName) {
        this.newsHeader.innerText = headerName;
    }
    
    renderEmptyResult() {
        this.renderMessage(CONSTANTS.NO_SEARCH_RESULT_TEXT);
    }

    renderErrorMessage() {
        this.renderMessage(CONSTANTS.ERROR_TEXT);
    }

    renderMessage(message) {
        this.mainContentArea.innerHTML = `
            <h2 class='error message'>${message}</h2>`;
    }

    toogleAddBtn(isDisplay) {
        this.toggleElemDisplaying(this.addNewsBtn, isDisplay);
    }

    toggleSearchBar(isDisplay) {
        this.toggleElemDisplaying(this.searchBar, isDisplay);
    }

    toggleElemDisplaying(elem, isDisplay) {
        if (isDisplay) {
            elem.classList.remove('hidden');
        } else {
            elem.classList.add('hidden');
        }
    }

    clearPageContent() {
        this.mainContentArea.innerHTML = CONSTANTS.EMPTY_VALUE;
        this.toggleSearchBar(false);
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

    onSubmitEditForm(callback) {
        const editForm = document.querySelector('#edit-form');
        editForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const formData = {
                id: +editForm.getAttribute('data-id'),
                title: editForm['title'].value,
                description: editForm['description'].value,
                urlToImage: editForm['urlToImage'].value,
                url: editForm['url'].value
            };
            callback(formData);
        });
    }

    onAddNews(callback) {
        this.addNewsBtn.addEventListener('click', () => {
            callback();
        });
    }

    onEditNewsItem(callback) {
        this.mainContentArea.addEventListener('click', (event) => {
            if (event.target.getAttribute('data-label') === 'edit-btn') {
                callback(+event.target.getAttribute('data-id'));
            }
        });
    }

    onDeleteItem(callback) {
        this.mainContentArea.addEventListener('click', (event) => {
            if (event.target.getAttribute('data-label') === 'delete-btn') {
                callback(+event.target.getAttribute('data-id'));
            }
        });
    }

    onMyNewsPage(callback) {
        this.myNewsPageBtn.addEventListener('click', () => {
            callback();
        });
    }

    onMainPage(callback) {
        this.mainPageBtn.addEventListener('click', () => {
            callback();
        });
    }
}