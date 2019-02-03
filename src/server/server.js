const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = express.Router();

const path = require('path');
const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const storageFilePath = path.resolve(__dirname, 'data.json');

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(bodyParser.json()); 

app.use('/', router);

app.use(errorHandler);

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

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});


function errorHandler (err) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  }