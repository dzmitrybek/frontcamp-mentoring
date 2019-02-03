const router = require('express').Router();

const path = require('path');
const fs = require('fs');
const util = require('util');
const News = require('./model');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const storageFilePath = path.resolve(__dirname, '../data.json');

router.route('/api/my-news/:id?')
    .get((req, res, next) => {
        if (req.params.id !== undefined) {
            News.findById(req.params.id)
                .then((data) => {
                    res.json(data)
                })
        }
        News.find({userId: req.user._id})
            .then((data) => {
                res.json(data)
            })
    })
    .delete((req, res, next) => {
        News.remove({ _id: req.params.id })
            .then((data) => res.json(data))
            .catch(next);
    });

router.route('/api/my-news')
    .post((req, res, next) => {
        const newsData = req.body;
        newsData.userId = req.user._id;
        News.create(newsData)
            .then((data) => res.json(data))
            .catch(next);
    })
    .put((req, res, next) => {
        const newsData = req.body;
        News.updateOne({ _id: newsData._id}, newsData)
            .then((data) => res.json(data))
            .catch(next);
    });

module.exports = router;