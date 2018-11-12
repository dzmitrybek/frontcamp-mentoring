export default class AppController {
    constructor(...args) {
        [this.view, this.model] = args;
    }

    init() {
        this.loadData();
        this.view.onSearchNews((query) => this.loadData(query));
        this.view.onRefreshNews(() => this.loadData());
    }

    loadData(query) {
        this.view.manageLoader(true);
        this.model.getNews(query)
            .then((data = []) => {
                if (data.length) {
                    this.view.renderNews(data);
                } else {
                    this.view.renderEmptyResult();
                }
            })
            .catch((error) => {
                this.view.renderErrorMessage();
                throw new Error(error);
            })
            .finally(() => this.view.manageLoader(false));
    }
}