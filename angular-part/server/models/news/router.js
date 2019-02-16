const router = require('express').Router();

const newsFacade = require('./facade');

router.route('/api/my-news/:id')
    .get((req, res, next) => {
        newsFacade.findById(req.params.id)
            .then((data) => {
                res.json(data)
            })
            .catch(next);
    })
    .put((req, res, next) => {
        const newsData = req.body;
        newsFacade.updateOne({ _id: req.params.id}, newsData)
            .then((data) => res.json(data))
            .catch(next);
    })
    .delete((req, res, next) => {
        newsFacade.remove({ _id: req.params.id })
            .then((data) => res.json(data))
            .catch(next);
    });

router.route('/api/my-news')
    .get((req, res, next) => {
        newsFacade.find()
            .then((data) => {
                res.json(data)
            })
            .catch(next);
    })
    .post((req, res, next) => {
        newsFacade.create(req.body)
            .then((data) => res.json(data))
            .catch(next);
    })

module.exports = router;