const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    description: String,
    urlToImage: String,
    url: String,
    source: {
        name: String,
        publishedAt: Date
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
});

module.exports = mongoose.model('news', newsSchema);