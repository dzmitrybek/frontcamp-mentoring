(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _AppController = _interopRequireDefault(require("app/AppController"));

var _AppView = _interopRequireDefault(require("app/AppView"));

var _AppModel = _interopRequireDefault(require("app/AppModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appView = new _AppView.default();
var appModel = new _AppModel.default();
var appController = new _AppController.default(appView, appModel);
appController.init();

},{"app/AppController":2,"app/AppModel":3,"app/AppView":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppController =
/*#__PURE__*/
function () {
  function AppController() {
    _classCallCheck(this, AppController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.view = args[0];
    this.model = args[1];
  }

  _createClass(AppController, [{
    key: "init",
    value: function init() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this = this;

      this.model.getNews().then(function (data) {
        _this.view.render(data);
      }).catch(function (error) {
        _this.view.render(error);
      });
    }
  }]);

  return AppController;
}();

exports.default = AppController;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppModel =
/*#__PURE__*/
function () {
  function AppModel() {
    _classCallCheck(this, AppModel);

    this.news = [];
    this.appContentElement = document.querySelector('#app-content');
  }

  _createClass(AppModel, [{
    key: "getNews",
    value: function getNews() {
      return this.news.lenght ? this.news : this.loadNews();
    }
  }, {
    key: "loadNews",
    value: function loadNews() {
      var _this = this;

      return fetch(_constants.CONSTANTS.NEWS_URL).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this.news = data.articles;
      });
    }
  }]);

  return AppModel;
}();

exports.default = AppModel;

},{"constants.js":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppView =
/*#__PURE__*/
function () {
  function AppView() {
    _classCallCheck(this, AppView);
  }

  _createClass(AppView, [{
    key: "render",
    value: function render(data) {
      console.log(data);
    }
  }]);

  return AppView;
}();

exports.default = AppView;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONSTANTS = void 0;
var CONSTANTS = {
  API_KEY: '0705e7dcd0114afdb2e897d0635afc29',

  get NEWS_URL() {
    return "https://newsapi.org/v1/articles?source=bbc-news&apiKey=".concat(this.API_KEY);
  }

};
exports.CONSTANTS = CONSTANTS;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9BcHBDb250cm9sbGVyLmpzIiwic3JjL2FwcC9BcHBNb2RlbC5qcyIsInNyYy9hcHAvQXBwVmlldy5qcyIsInNyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTSxPQUFPLEdBQUcsSUFBSSxnQkFBSixFQUFoQjtBQUNBLElBQU0sUUFBUSxHQUFHLElBQUksaUJBQUosRUFBakI7QUFDQSxJQUFNLGFBQWEsR0FBRyxJQUFJLHNCQUFKLENBQWtCLE9BQWxCLEVBQTJCLFFBQTNCLENBQXRCO0FBRUEsYUFBYSxDQUFDLElBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7SUNScUIsYTs7O0FBQ2pCLDJCQUFxQjtBQUFBOztBQUFBLHNDQUFOLElBQU07QUFBTixNQUFBLElBQU07QUFBQTs7QUFDaEIsU0FBSyxJQURXLEdBQ1MsSUFEVDtBQUNMLFNBQUssS0FEQSxHQUNTLElBRFQ7QUFFcEI7Ozs7MkJBRU07QUFDSCxXQUFLLFFBQUw7QUFDSDs7OytCQUVVO0FBQUE7O0FBQ1AsV0FBSyxLQUFMLENBQVcsT0FBWCxHQUNLLElBREwsQ0FDVSxVQUFDLElBQUQsRUFBVTtBQUNaLFFBQUEsS0FBSSxDQUFDLElBQUwsQ0FBVSxNQUFWLENBQWlCLElBQWpCO0FBQ0gsT0FITCxFQUlLLEtBSkwsQ0FJVyxVQUFDLEtBQUQsRUFBVztBQUNkLFFBQUEsS0FBSSxDQUFDLElBQUwsQ0FBVSxNQUFWLENBQWlCLEtBQWpCO0FBQ0gsT0FOTDtBQU9IOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJMOzs7Ozs7OztJQUVxQixROzs7QUFDakIsc0JBQWM7QUFBQTs7QUFDVixTQUFLLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBSyxpQkFBTCxHQUF5QixRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUF6QjtBQUNIOzs7OzhCQUVTO0FBQ04sYUFBTyxLQUFLLElBQUwsQ0FBVSxNQUFWLEdBQW1CLEtBQUssSUFBeEIsR0FBK0IsS0FBSyxRQUFMLEVBQXRDO0FBQ0g7OzsrQkFFVTtBQUFBOztBQUNQLGFBQU8sS0FBSyxDQUFDLHFCQUFVLFFBQVgsQ0FBTCxDQUNGLElBREUsQ0FDRyxVQUFDLFFBQUQ7QUFBQSxlQUFjLFFBQVEsQ0FBQyxJQUFULEVBQWQ7QUFBQSxPQURILEVBRUYsSUFGRSxDQUVHLFVBQUMsSUFBRDtBQUFBLGVBQVUsS0FBSSxDQUFDLElBQUwsR0FBWSxJQUFJLENBQUMsUUFBM0I7QUFBQSxPQUZILENBQVA7QUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hCZ0IsTzs7O0FBQ2pCLHFCQUFjO0FBQUE7QUFDYjs7OzsyQkFFTSxJLEVBQUs7QUFDUixNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNORSxJQUFNLFNBQVMsR0FBRztBQUNyQixFQUFBLE9BQU8sRUFBRSxrQ0FEWTs7QUFFckIsTUFBSSxRQUFKLEdBQWU7QUFDWCw0RUFBaUUsS0FBSyxPQUF0RTtBQUNIOztBQUpvQixDQUFsQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJ2FwcC9BcHBDb250cm9sbGVyJztcbmltcG9ydCBBcHBWaWV3IGZyb20gJ2FwcC9BcHBWaWV3JztcbmltcG9ydCBBcHBNb2RlbCBmcm9tICdhcHAvQXBwTW9kZWwnO1xuXG5jb25zdCBhcHBWaWV3ID0gbmV3IEFwcFZpZXcoKTtcbmNvbnN0IGFwcE1vZGVsID0gbmV3IEFwcE1vZGVsKCk7XG5jb25zdCBhcHBDb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIoYXBwVmlldywgYXBwTW9kZWwpO1xuXG5hcHBDb250cm9sbGVyLmluaXQoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgW3RoaXMudmlldywgdGhpcy5tb2RlbF0gPSBhcmdzO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5nZXROZXdzKClcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlcihkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn0iLCJpbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICdjb25zdGFudHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uZXdzID0gW107XG4gICAgICAgIHRoaXMuYXBwQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwLWNvbnRlbnQnKTtcbiAgICB9XG5cbiAgICBnZXROZXdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uZXdzLmxlbmdodCA/IHRoaXMubmV3cyA6IHRoaXMubG9hZE5ld3MoKTtcbiAgICB9XG5cbiAgICBsb2FkTmV3cygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKENPTlNUQU5UUy5ORVdTX1VSTClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHRoaXMubmV3cyA9IGRhdGEuYXJ0aWNsZXMpXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHJlbmRlcihkYXRhKXtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgQVBJX0tFWTogJzA3MDVlN2RjZDAxMTRhZmRiMmU4OTdkMDYzNWFmYzI5JyxcbiAgICBnZXQgTkVXU19VUkwoKSB7XG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92MS9hcnRpY2xlcz9zb3VyY2U9YmJjLW5ld3MmYXBpS2V5PSR7dGhpcy5BUElfS0VZfWBcbiAgICB9XG59Il19
