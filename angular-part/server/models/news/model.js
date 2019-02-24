const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    description: String,
    urlToImage: String,
    url: String,
    source: {
        id: String,
        name: String,
    },
    content: String,
    publishedAt: Date
});

module.exports = mongoose.model('news', newsSchema);