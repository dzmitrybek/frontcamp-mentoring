export default class AppPresenter {
    constructor(...args) {
        [this.view, this.model] = args;
    }

    init() {
        this.loadData();
        this.view.onSearchNews((query) => this.loadData(query));
        this.view.onRefreshNews(() => this.loadData());
    }

    async loadData(query) {
        this.view.manageLoader(true);
        try {
            const data = await this.model.getNews(query) || [];
            if (data.length) {
                this.view.renderNews(data);
            } else {
                this.view.renderEmptyResult();
            }
        } catch (error) {
            this.view.renderErrorMessage();
            throw new Error(error);
        } finally {
            this.view.manageLoader(false)
        }
    }
}