export default class AppController {
    constructor(...args) {
        [this.view, this.model] = args;
    }

    init() {
        this.loadData();
    }

    loadData() {
        this.model.getNews()
            .then((data) => {
                this.view.render(data);
            })
            .catch((error) => {
                this.view.render(error);
            })
    }
}