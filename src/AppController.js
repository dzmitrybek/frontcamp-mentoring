export default class AppController {
    constructor(...args){
        [this.view, this.model] = args;
    }

    init(){
        this.view.render(this.model.getModel())
    }
}