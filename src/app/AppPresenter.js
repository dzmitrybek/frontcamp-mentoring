export default class AppPresenter {
    constructor(...args) {
        [this.view, this.model] = args;
    }

    init() {
        this.loadMainPage();
        this.view.onSearchNews((query) => this.loadMainPage(query));
        this.view.onRefreshNews(() => this.loadMainPage());
        this.view.onAddNews(() => this.loadEditPage({}, true));
        this.view.onUserPageBtn(() => this.loadUserPage());
        this.view.onMainPage(() => this.loadMainPage());
        this.view.onSignInPageBtn(() => this.loadLoginPage());
        this.view.onSignOutBtn(() => {
            this.logout();
        });
    }

    async loadMainPage(query) {
        this.view.manageLoader(true);
        try {
            const data = await this.model.getNews(query) || [];
            this.view.toggleSearchBar(true);
            this.view.toggleAddBtn(false);
            this.view.renderNewsHeader();
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

    loadLoginPage() {
        this.clearPage();
        this.view.renderLoginForm();
        this.view.onSignInBtn((loginData) => {
            this.auth(this.model.login, loginData);
        });
        this.view.onRegistrationBtn((loginData) => {
            this.auth(this.model.registration, loginData);
        });
    }

    async auth(authMethod, authData){
        try {
            const userName = await authMethod(authData);
            this.view.toggleUserBtn(true, userName);
            this.loadUserPage();
            this.view.switchSignBtns(false);
            this.view.toggle(false);
        } catch(err) {
            this.view.renderAuthError(err.message);
        }
    }

    async logout() {
        await this.model.logout();
        this.view.switchSignBtns(true);
        this.view.toggleUserBtn(false);
        this.loadMainPage();
    }

    async loadUserPage() {
        this.view.manageLoader(true);
        try {
            const data = await this.model.getMyNews() || [];
            this.view.toggleSearchBar(false);
            this.view.toggleAddBtn(true);
            this.view.renderHeader('My News:');

            if (data.length) {
                this.view.renderNews(data, true);
                this.view.onEditNewsItem((id) => {
                    const elem = this.model.getMyNewsById(id)
                    this.loadEditPage(elem);
                });
                this.view.onDeleteItem(async (id) => {
                    await this.model.deleteNewsItem(id);
                    this.loadUserPage();
                });
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

    loadEditPage(item, isAdding) {
        this.view.toggleAddBtn(false);
        this.view.renderHeader(isAdding ? 'Add News:' : 'Edit News');
        this.view.renderEditForm(item);
        this.view.onSubmitEditForm(async (formData) => {
            if(isAdding) {
                await this.model.sendNewNewsItem(formData);
            } else {
                await this.model.updateNewsItem(formData);
            }
            this.loadUserPage();
        });

    }

    clearPage() {
        this.view.toggleSearchBar(false);
        this.view.toggleAddBtn(false);
        this.view.renderHeader('');
    }
}