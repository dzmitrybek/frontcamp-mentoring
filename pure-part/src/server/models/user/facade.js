const Facade = require('../../common/facade');
const UserModel = require('./model');

class UserFacade extends Facade {}

module.exports = new UserFacade(UserModel);