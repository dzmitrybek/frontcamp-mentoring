class Facade {
    constructor(model) {
        this.Model = model;
    }

    create(...data) {
        const schema = new this.Model(...data);
        return this.Model.create(schema);
    }

    find(...data) {
        return this.Model.find(...data);
    }

    findOne(...data) {
        return this.Model.findOne(...data);
    }

    findById(...data) {
        return this.Model.findById(...data);
    }

    updateOne(...data) {
        return this.Model.updateOne(...data);
    }

    remove(...data) {
        return this.Model.remove(...data);
    }
}

module.exports = Facade;