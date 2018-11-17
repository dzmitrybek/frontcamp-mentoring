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
      var _this = this;

      this.loadData();
      this.view.onSearchNews(function (query) {
        return _this.loadData(query);
      });
      this.view.onRefreshNews(function () {
        return _this.loadData();
      });
    }
  }, {
    key: "loadData",
    value: function loadData(query) {
      var _this2 = this;

      this.view.manageLoader(true);
      this.model.getNews(query).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (data.length) {
          _this2.view.renderNews(data);
        } else {
          _this2.view.renderEmptyResult();
        }
      }).catch(function (error) {
        _this2.view.renderErrorMessage();

        throw new Error(error);
      }).finally(function () {
        return _this2.view.manageLoader(false);
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
  }

  _createClass(AppModel, [{
    key: "getNews",
    value: function getNews(query) {
      return fetch(query ? _constants.CONSTANTS.GET_QUERY_NEWS_URL(query) : _constants.CONSTANTS.DEFAULT_NEWS_URL).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data.articles;
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

var _constants = require("constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppView =
/*#__PURE__*/
function () {
  function AppView() {
    _classCallCheck(this, AppView);

    this.mainContentArea = document.querySelector('#app-content');
    this.appLoader = document.querySelector('#app-loader');
    this.searchField = document.querySelector('#search-field');
    this.searchBtn = document.querySelector('#search-btn');
    this.refreshBtn = document.querySelector('#refresh-btn');
    this.newsHeader = document.querySelector('.news-header');
  }

  _createClass(AppView, [{
    key: "renderNews",
    value: function renderNews(news) {
      var _this = this;

      this.mainContentArea.innerHTML = _constants.CONSTANTS.EMPTY_VALUE;
      news.forEach(function (item) {
        return _this.renderNewsCard(item);
      });
      this.renderNewsHeader();
    }
  }, {
    key: "renderNewsCard",
    value: function renderNewsCard(item) {
      var sourceName = item.source.name,
          description = item.description,
          publishedAt = item.publishedAt,
          title = item.title,
          urlToImage = item.urlToImage,
          url = item.url;
      var newsCardTemplate = "\n            <div class=\"ui link cards\">\n                <div class=\"card\">\n                    <div class=\"image\">\n                        <img src=\"".concat(urlToImage || _constants.CONSTANTS.NO_IMAGE_URL, "\">\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"header\">").concat(title, "</div>\n                        <div class=\"meta\">\n                            <span>").concat(sourceName, "</span>\n                        </div>\n                        <div class=\"description\">").concat(description || _constants.CONSTANTS.EMPTY_VALUE, "</div>\n                    </div>\n                    <div class=\"extra content card-footer\">\n                        <span class=\"right floated\">").concat(this.formatData(publishedAt), "</span>\n                        <span>\n                            <a href=\"").concat(url, "\" target=\"blank\">\n                                <button class=\"ui right labeled icon button tiny card-btn\">\n                                        Read More\n                                        <i class=\"right chevron icon\"></i>\n                                </button>\n                            </a>\n                            \n                        </span>\n                    </div>\n                </div>\n            </div>");
      this.mainContentArea.innerHTML += newsCardTemplate;
    }
  }, {
    key: "renderNewsHeader",
    value: function renderNewsHeader() {
      this.newsHeader.innerText = this.searchField.value ? "\"".concat(this.searchField.value.toUpperCase(), "\" search results:") : 'Top News:';
    }
  }, {
    key: "renderEmptyResult",
    value: function renderEmptyResult() {
      this.renderMessage(_constants.CONSTANTS.NO_SEARCH_RESULT_TEXT);
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage() {
      this.renderMessage(_constants.CONSTANTS.ERROR_TEXT);
    }
  }, {
    key: "renderMessage",
    value: function renderMessage(message) {
      this.renderNewsHeader();
      this.mainContentArea.innerHTML = "\n            <h2 class='error message'>".concat(message, "</h2>");
    }
  }, {
    key: "manageLoader",
    value: function manageLoader(isDisable) {
      var _this2 = this;

      var minDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      if (isDisable) {
        this.appLoader.classList.add('active');
      } else {
        setTimeout(function () {
          return _this2.appLoader.classList.remove('active');
        }, minDelay);
      }
    }
  }, {
    key: "formatData",
    value: function formatData(date) {
      return new Date(date).toDateString();
    }
  }, {
    key: "onSearchNews",
    value: function onSearchNews(callback) {
      var _this3 = this;

      this.searchBtn.addEventListener('click', function () {
        if (_this3.searchField.value.length > 2) {
          callback(_this3.searchField.value);
        }
      });
      this.searchField.addEventListener('keyup', function (event) {
        if (event.keyCode === 13 && _this3.searchField.value.length > 2) {
          callback(_this3.searchField.value);
        }
      });
    }
  }, {
    key: "onRefreshNews",
    value: function onRefreshNews(callback) {
      var _this4 = this;

      this.refreshBtn.addEventListener('click', function () {
        _this4.searchField.value = _constants.CONSTANTS.EMPTY_VALUE;
        callback();
      });
    }
  }]);

  return AppView;
}();

exports.default = AppView;

},{"constants.js":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONSTANTS = void 0;
var CONSTANTS = {
  API_KEY: '0705e7dcd0114afdb2e897d0635afc29',
  BASE_URL: window.location.href,

  get DEFAULT_NEWS_URL() {
    return "https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(this.API_KEY);
  },

  get NO_IMAGE_URL() {
    return "".concat(this.BASE_URL, "/assets/no-image-box.png");
  },

  GET_QUERY_NEWS_URL: function GET_QUERY_NEWS_URL(query) {
    return "https://newsapi.org/v2/everything?q=".concat(query, "&apiKey=").concat(this.API_KEY);
  },
  EMPTY_VALUE: '',
  NO_SEARCH_RESULT_TEXT: 'No Search Results',
  ERROR_TEXT: 'Data Loading Error'
};
exports.CONSTANTS = CONSTANTS;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9BcHBDb250cm9sbGVyLmpzIiwic3JjL2FwcC9BcHBNb2RlbC5qcyIsInNyYy9hcHAvQXBwVmlldy5qcyIsInNyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTSxPQUFPLEdBQUcsSUFBSSxnQkFBSixFQUFoQjtBQUNBLElBQU0sUUFBUSxHQUFHLElBQUksaUJBQUosRUFBakI7QUFDQSxJQUFNLGFBQWEsR0FBRyxJQUFJLHNCQUFKLENBQWtCLE9BQWxCLEVBQTJCLFFBQTNCLENBQXRCO0FBRUEsYUFBYSxDQUFDLElBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7SUNScUIsYTs7O0FBQ2pCLDJCQUFxQjtBQUFBOztBQUFBLHNDQUFOLElBQU07QUFBTixNQUFBLElBQU07QUFBQTs7QUFDaEIsU0FBSyxJQURXLEdBQ1MsSUFEVDtBQUNMLFNBQUssS0FEQSxHQUNTLElBRFQ7QUFFcEI7Ozs7MkJBRU07QUFBQTs7QUFDSCxXQUFLLFFBQUw7QUFDQSxXQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLFVBQUMsS0FBRDtBQUFBLGVBQVcsS0FBSSxDQUFDLFFBQUwsQ0FBYyxLQUFkLENBQVg7QUFBQSxPQUF2QjtBQUNBLFdBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0I7QUFBQSxlQUFNLEtBQUksQ0FBQyxRQUFMLEVBQU47QUFBQSxPQUF4QjtBQUNIOzs7NkJBRVEsSyxFQUFPO0FBQUE7O0FBQ1osV0FBSyxJQUFMLENBQVUsWUFBVixDQUF1QixJQUF2QjtBQUNBLFdBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsS0FBbkIsRUFDSyxJQURMLENBQ1UsWUFBZTtBQUFBLFlBQWQsSUFBYyx1RUFBUCxFQUFPOztBQUNqQixZQUFJLElBQUksQ0FBQyxNQUFULEVBQWlCO0FBQ2IsVUFBQSxNQUFJLENB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OztBQUNwQixXQUFLLFVBQUwsQ0FBZ0IsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFlBQU07QUFDNUMsUUFBQSxNQUFJLENBQUMsV0FBTCxDQUFpQixLQUFqQixHQUF5QixxQkFBVSxXQUFuQztBQUNBLFFBQUEsUUFBUTtBQUNYLE9BSEQ7QUFJSDs7Ozs7Ozs7Ozs7Ozs7O0FDdEdFLElBQU0sU0FBUyxHQUFHO0FBQ3JCLEVBQUEsT0FBTyxFQUFFLGtDQURZO0FBRXJCLEVBQUEsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFQLENBQWdCLElBRkw7O0FBR3JCLE1BQUksZ0JBQUosR0FBdUI7QUFDbkIsNEVBQWlFLEtBQUssT0FBdEU7QUFDSCxHQUxvQjs7QUFNckIsTUFBSSxZQUFKLEdBQW1CO0FBQ2YscUJBQVUsS0FBSyxRQUFmO0FBQ0gsR0FSb0I7O0FBU3JCLEVBQUEsa0JBVHFCLDhCQVNGLEtBVEUsRUFTSztBQUN0Qix5REFBOEMsS0FBOUMscUJBQThELEtBQUssT0FBbkU7QUFDSCxHQVhvQjtBQVlyQixFQUFBLFdBQVcsRUFBRSxFQVpRO0FBYXJCLEVBQUEscUJBQXFCLEVBQUUsbUJBYkY7QUFjckIsRUFBQSxVQUFVLEVBQUU7QUFkUyxDQUFsQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gJ2FwcC9BcHBDb250cm9sbGVyJztcbmltcG9ydCBBcHBWaWV3IGZyb20gJ2FwcC9BcHBWaWV3JztcbmltcG9ydCBBcHBNb2RlbCBmcm9tICdhcHAvQXBwTW9kZWwnO1xuXG5jb25zdCBhcHBWaWV3ID0gbmV3IEFwcFZpZXcoKTtcbmNvbnN0IGFwcE1vZGVsID0gbmV3IEFwcE1vZGVsKCk7XG5jb25zdCBhcHBDb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIoYXBwVmlldywgYXBwTW9kZWwpO1xuXG5hcHBDb250cm9sbGVyLmluaXQoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgW3RoaXMudmlldywgdGhpcy5tb2RlbF0gPSBhcmdzO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgdGhpcy52aWV3Lm9uU2VhcmNoTmV3cygocXVlcnkpID0+IHRoaXMubG9hZERhdGEocXVlcnkpKTtcbiAgICAgICAgdGhpcy52aWV3Lm9uUmVmcmVzaE5ld3MoKCkgPT4gdGhpcy5sb2FkRGF0YSgpKTtcbiAgICB9XG5cbiAgICBsb2FkRGF0YShxdWVyeSkge1xuICAgICAgICB0aGlzLnZpZXcubWFuYWdlTG9hZGVyKHRydWUpO1xuICAgICAgICB0aGlzLm1vZGVsLmdldE5ld3MocXVlcnkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSA9IFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXJOZXdzKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXJFbXB0eVJlc3VsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlckVycm9yTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy52aWV3Lm1hbmFnZUxvYWRlcihmYWxzZSkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICdjb25zdGFudHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgZ2V0TmV3cyhxdWVyeSkge1xuICAgICAgICByZXR1cm4gZmV0Y2gocXVlcnkgPyBDT05TVEFOVFMuR0VUX1FVRVJZX05FV1NfVVJMKHF1ZXJ5KSA6IENPTlNUQU5UUy5ERUZBVUxUX05FV1NfVVJMKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5hcnRpY2xlcylcbiAgICB9XG59IiwiaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnY29uc3RhbnRzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuYXBwTG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1sb2FkZXInKTtcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZmllbGQnKTtcbiAgICAgICAgdGhpcy5zZWFyY2hCdG49IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnRuJyk7XG4gICAgICAgIHRoaXMucmVmcmVzaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoLWJ0bicpO1xuICAgICAgICB0aGlzLm5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1oZWFkZXInKTtcbiAgICB9XG5cbiAgICByZW5kZXJOZXdzKG5ld3MpIHtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudEFyZWEuaW5uZXJIVE1MID0gQ09OU1RBTlRTLkVNUFRZX1ZBTFVFO1xuICAgICAgICBuZXdzLmZvckVhY2goKGl0ZW0pID0+IHRoaXMucmVuZGVyTmV3c0NhcmQoaXRlbSkpO1xuICAgICAgICB0aGlzLnJlbmRlck5ld3NIZWFkZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXJOZXdzQ2FyZChpdGVtKSB7XG4gICAgICAgIGNvbnN0IHsgc291cmNlOiB7IG5hbWU6IHNvdXJjZU5hbWUgfSwgZGVzY3JpcHRpb24sIHB1Ymxpc2hlZEF0LCB0aXRsZSwgdXJsVG9JbWFnZSwgdXJsIH0gPSBpdGVtO1xuICAgICAgICBjb25zdCBuZXdzQ2FyZFRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxpbmsgY2FyZHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt1cmxUb0ltYWdlIHx8IENPTlNUQU5UUy5OT19JTUFHRV9VUkx9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPiR7dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7c291cmNlTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb24gfHwgQ09OU1RBTlRTLkVNUFRZX1ZBTFVFfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhIGNvbnRlbnQgY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmlnaHQgZmxvYXRlZFwiPiR7dGhpcy5mb3JtYXREYXRhKHB1Ymxpc2hlZEF0KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt1cmx9XCIgdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIHJpZ2h0IGxhYmVsZWQgaWNvbiBidXR0b24gdGlueSBjYXJkLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmlnaHQgY2hldnJvbiBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudEFyZWEuaW5uZXJIVE1MICs9IG5ld3NDYXJkVGVtcGxhdGU7XG4gICAgfTtcblxuICAgIHJlbmRlck5ld3NIZWFkZXIoKSB7XG4gICAgICAgIHRoaXMubmV3c0hlYWRlci5pbm5lclRleHQgPSB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlXG4gICAgICAgICAgICA/IGBcIiR7dGhpcy5zZWFyY2hGaWVsZC52YWx1ZS50b1VwcGVyQ2FzZSgpfVwiIHNlYXJjaCByZXN1bHRzOmBcbiAgICAgICAgICAgIDogJ1RvcCBOZXdzOic7XG4gICAgfVxuXG4gICAgcmVuZGVyRW1wdHlSZXN1bHQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTWVzc2FnZShDT05TVEFOVFMuTk9fU0VBUkNIX1JFU1VMVF9URVhUKTtcbiAgICB9XG5cbiAgICByZW5kZXJFcnJvck1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTWVzc2FnZShDT05TVEFOVFMuRVJST1JfVEVYVCk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTmV3c0hlYWRlcigpO1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aDIgY2xhc3M9J2Vycm9yIG1lc3NhZ2UnPiR7bWVzc2FnZX08L2gyPmA7XG4gICAgfVxuXG4gICAgbWFuYWdlTG9hZGVyKGlzRGlzYWJsZSwgbWluRGVsYXkgPSA1MDApIHtcbiAgICAgICAgaWYgKGlzRGlzYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5hcHBMb2FkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYXBwTG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCBtaW5EZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZvcm1hdERhdGEoZGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9EYXRlU3RyaW5nKCk7XG4gICAgfVxuXG5cbiAgICBvblNlYXJjaE5ld3MoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hGaWVsZC52YWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5zZWFyY2hGaWVsZC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLnNlYXJjaEZpZWxkLnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZnJlc2hOZXdzKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRmllbGQudmFsdWUgPSBDT05TVEFOVFMuRU1QVFlfVkFMVUU7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBBUElfS0VZOiAnMDcwNWU3ZGNkMDExNGFmZGIyZTg5N2QwNjM1YWZjMjknLFxuICAgIEJBU0VfVVJMOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICBnZXQgREVGQVVMVF9ORVdTX1VSTCgpIHtcbiAgICAgICAgcmV0dXJuIGBodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/Y291bnRyeT11cyZhcGlLZXk9JHt0aGlzLkFQSV9LRVl9YFxuICAgIH0sXG4gICAgZ2V0IE5PX0lNQUdFX1VSTCgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuQkFTRV9VUkx9L2Fzc2V0cy9uby1pbWFnZS1ib3gucG5nYDtcbiAgICB9LFxuICAgIEdFVF9RVUVSWV9ORVdTX1VSTChxdWVyeSkge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPSR7cXVlcnl9JmFwaUtleT0ke3RoaXMuQVBJX0tFWX1gXG4gICAgfSxcbiAgICBFTVBUWV9WQUxVRTogJycsXG4gICAgTk9fU0VBUkNIX1JFU1VMVF9URVhUOiAnTm8gU2VhcmNoIFJlc3VsdHMnLFxuICAgIEVSUk9SX1RFWFQ6ICdEYXRhIExvYWRpbmcgRXJyb3InLFxufSJdfQ==
