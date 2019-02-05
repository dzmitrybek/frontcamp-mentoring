const Facade = require('../../common/facade');
const NewsModel = require('./model');

class NewsFacade extends Facade {}

module.exports = new NewsFacade(NewsModel);