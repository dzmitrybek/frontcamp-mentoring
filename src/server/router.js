const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const storageFilePath = path.resolve(__dirname, 'data.json');

router.use('/',
    require('./models/user/router'),
    (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.sendStatus(401);
        }
});

router.route('/api/my-news/:id?')
    .get((req, res, next) => {
        readFileAsync(storageFilePath)
            .then((data) => {
                const dataList = JSON.parse(data);

                if (req.params.id !== undefined) {
                    res.json(dataList.find((e) => e.id == req.params.id));
                }
                res.json(dataList);
            })
            .catch(next);
    })
    .delete((req, res, next) => {
        readFileAsync(storageFilePath)
            .then((data) => {
                const dataList = JSON.parse(data).filter((e) => e.id != req.params.id);
    
                return writeFileAsync(storageFilePath, JSON.stringify(dataList));
            })
            .then(() => res.json(req.body))
            .catch(next);
    });

router.route('/api/my-news')
    .post((req, res, next) => {
        readFileAsync(storageFilePath)
            .then((data) => {
                const dataList = JSON.parse(data);

                const lastRecord = dataList[dataList.length - 1];
                req.body.id = lastRecord ? lastRecord.id + 1: 0;
                dataList.push(req.body);

                return writeFileAsync(storageFilePath, JSON.stringify(dataList));
            })
            .then(() => res.json(req.body))
            .catch(next);
    })
    .put((req, res, next) => {
        readFileAsync(storageFilePath)
            .then((data) => {
                const dataList = JSON.parse(data);

                let foundRecordIndex = dataList.findIndex((e) => e.id === req.body.id);
                dataList[foundRecordIndex] = req.body;

                return writeFileAsync(storageFilePath, JSON.stringify(dataList));
            })
            .then(() => res.json(req.body))
            .catch(next);
    });

module.exports = router;