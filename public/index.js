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

    this.news = [];
    this.appContentElement = document.querySelector('#app-content');
  }

  _createClass(AppModel, [{
    key: "getNews",
    value: function getNews(query) {
      return this.news.lenght ? this.news : this.loadNews(query);
    }
  }, {
    key: "loadNews",
    value: function loadNews(query) {
      var _this = this;

      return fetch(query ? _constants.CONSTANTS.GET_QUERY_NEWS_URL(query) : _constants.CONSTANTS.DEFAULT_NEWS_URL).then(function (response) {
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

  get DEFAULT_NEWS_URL() {
    return "https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(this.API_KEY);
  },

  GET_QUERY_NEWS_URL: function GET_QUERY_NEWS_URL(query) {
    return "https://newsapi.org/v2/everything?q=".concat(query, "&apiKey=").concat(this.API_KEY);
  },
  NO_IMAGE_URL: '/assets/no-image-box.png',
  EMPTY_VALUE: '',
  NO_SEARCH_RESULT_TEXT: 'No Search Results',
  ERROR_TEXT: 'Data Loading Error'
};
exports.CONSTANTS = CONSTANTS;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2FwcC9BcHBDb250cm9sbGVyLmpzIiwic3JjL2FwcC9BcHBNb2RlbC5qcyIsInNyYy9hcHAvQXBwVmlldy5qcyIsInNyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTSxPQUFPLEdBQUcsSUFBSSxnQkFBSixFQUFoQjtBQUNBLElBQU0sUUFBUSxHQUFHLElBQUksaUJBQUosRUFBakI7QUFDQSxJQUFNLGFBQWEsR0FBRyxJQUFJLHNCQUFKLENBQWtCLE9BQWxCLEVBQTJCLFFBQTNCLENBQXRCO0FBRUEsYUFBYSxDQUFDLElBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7SUNScUIsYTs7O0FBQ2pCLDJCQUFxQjtBQUFBOztBQUFBLHNDQUFOLElBQU07QUFBTixNQUFBLElBQU07QUFBQTs7QUFDaEIsU0FBSyxJQURXLEdBQ1MsSUFEVDtBQUNMLFNBQUssS0FEQSxHQUNTLElBRFQ7QUFFcEI7Ozs7MkJBRU07QUFBQTs7QUFDSCxXQUFLLFFBQUw7QUFDQSxXQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLFVBQUMsS0FBRDtBQUFBLGVBQVcsS0FBSSxDQUFDLFFBQUwsQ0FBYyxLQUFkLENBQVg7QUFBQSxPQUF2QjtBQUNBLFdBQUssSUFBTCxDQUFVLGFBQVYsQ0FBd0I7QUFBQSxlQUFNLEtBQUksQ0FBQyxRQUFMLEVBQU47QUFBQSxPQUF4QjtBQUNIOzs7NkJBRVEsSyxFQUFPO0FBQUE7O0FBQ1osV0FBSyxJQUFMLENBQVUsWUFBVixDQUF1QixJQUF2QjtBQUNBLFdBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsS0FBbkIsRUFDSyxJQURMLENBQ1UsWUFBZTtBQUFBLFlBQWQsSUFBYyx1RUFBUCxFQUFPOztBQUNqQixZQUFJLElBQUksQ0FBQyxNQUFULEVBQWlCO0FBQ2IsVUFBQSxNQUFJLENB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VUFBQyxLQUFELEVBQVc7QUFDbEQsWUFBSSxLQUFLLENBQUMsT0FBTixLQUFrQixFQUFsQixJQUF3QixNQUFJLENBQUMsV0FBTCxDQUFpQixLQUFqQixDQUF1QixNQUF2QixHQUFnQyxDQUE1RCxFQUErRDtBQUMzRCxVQUFBLFFBQVEsQ0FBQyxNQUFJLENBQUMsV0FBTCxDQUFpQixLQUFsQixDQUFSO0FBQ0g7QUFDSixPQUpEO0FBS0g7OztrQ0FFYSxRLEVBQVU7QUFBQTs7QUFDcEIsV0FBSyxVQUFMLENBQWdCLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxZQUFNO0FBQzVDLFFBQUEsTUFBSSxDQUFDLFdBQUwsQ0FBaUIsS0FBakIsR0FBeUIscUJBQVUsV0FBbkM7QUFDQSxRQUFBLFFBQVE7QUFDWCxPQUhEO0FBSUg7Ozs7Ozs7Ozs7Ozs7OztBQ3RHRSxJQUFNLFNBQVMsR0FBRztBQUNyQixFQUFBLE9BQU8sRUFBRSxrQ0FEWTs7QUFFckIsTUFBSSxnQkFBSixHQUF1QjtBQUNuQiw0RUFBaUUsS0FBSyxPQUF0RTtBQUNILEdBSm9COztBQUtyQixFQUFBLGtCQUxxQiw4QkFLRixLQUxFLEVBS0s7QUFDdEIseURBQThDLEtBQTlDLHFCQUE4RCxLQUFLLE9BQW5FO0FBQ0gsR0FQb0I7QUFRckIsRUFBQSxZQUFZLEVBQUUsMEJBUk87QUFTckIsRUFBQSxXQUFXLEVBQUUsRUFUUTtBQVVyQixFQUFBLHFCQUFxQixFQUFFLG1CQVZGO0FBV3JCLEVBQUEsVUFBVSxFQUFFO0FBWFMsQ0FBbEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgQXBwQ29udHJvbGxlciBmcm9tICdhcHAvQXBwQ29udHJvbGxlcic7XG5pbXBvcnQgQXBwVmlldyBmcm9tICdhcHAvQXBwVmlldyc7XG5pbXBvcnQgQXBwTW9kZWwgZnJvbSAnYXBwL0FwcE1vZGVsJztcblxuY29uc3QgYXBwVmlldyA9IG5ldyBBcHBWaWV3KCk7XG5jb25zdCBhcHBNb2RlbCA9IG5ldyBBcHBNb2RlbCgpO1xuY29uc3QgYXBwQ29udHJvbGxlciA9IG5ldyBBcHBDb250cm9sbGVyKGFwcFZpZXcsIGFwcE1vZGVsKTtcblxuYXBwQ29udHJvbGxlci5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIFt0aGlzLnZpZXcsIHRoaXMubW9kZWxdID0gYXJncztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIHRoaXMudmlldy5vblNlYXJjaE5ld3MoKHF1ZXJ5KSA9PiB0aGlzLmxvYWREYXRhKHF1ZXJ5KSk7XG4gICAgICAgIHRoaXMudmlldy5vblJlZnJlc2hOZXdzKCgpID0+IHRoaXMubG9hZERhdGEoKSk7XG4gICAgfVxuXG4gICAgbG9hZERhdGEocXVlcnkpIHtcbiAgICAgICAgdGhpcy52aWV3Lm1hbmFnZUxvYWRlcih0cnVlKTtcbiAgICAgICAgdGhpcy5tb2RlbC5nZXROZXdzKHF1ZXJ5KVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEgPSBbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcucmVuZGVyTmV3cyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcucmVuZGVyRW1wdHlSZXN1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXJFcnJvck1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMudmlldy5tYW5hZ2VMb2FkZXIoZmFsc2UpKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnY29uc3RhbnRzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5ld3MgPSBbXTtcbiAgICAgICAgdGhpcy5hcHBDb250ZW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtY29udGVudCcpO1xuICAgIH1cblxuICAgIGdldE5ld3MocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV3cy5sZW5naHQgPyB0aGlzLm5ld3MgOiB0aGlzLmxvYWROZXdzKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBsb2FkTmV3cyhxdWVyeSkge1xuICAgICAgICByZXR1cm4gZmV0Y2gocXVlcnkgPyBDT05TVEFOVFMuR0VUX1FVRVJZX05FV1NfVVJMKHF1ZXJ5KSA6IENPTlNUQU5UUy5ERUZBVUxUX05FV1NfVVJMKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gdGhpcy5uZXdzID0gZGF0YS5hcnRpY2xlcylcbiAgICB9XG59IiwiaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnY29uc3RhbnRzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuYXBwTG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1sb2FkZXInKTtcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZmllbGQnKTtcbiAgICAgICAgdGhpcy5zZWFyY2hCdG49IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnRuJyk7XG4gICAgICAgIHRoaXMucmVmcmVzaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoLWJ0bicpO1xuICAgICAgICB0aGlzLm5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1oZWFkZXInKTtcbiAgICB9XG5cbiAgICByZW5kZXJOZXdzKG5ld3MpIHtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudEFyZWEuaW5uZXJIVE1MID0gQ09OU1RBTlRTLkVNUFRZX1ZBTFVFO1xuICAgICAgICBuZXdzLmZvckVhY2goKGl0ZW0pID0+IHRoaXMucmVuZGVyTmV3c0NhcmQoaXRlbSkpO1xuICAgICAgICB0aGlzLnJlbmRlck5ld3NIZWFkZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXJOZXdzQ2FyZChpdGVtKSB7XG4gICAgICAgIGNvbnN0IHsgc291cmNlOiB7IG5hbWU6IHNvdXJjZU5hbWUgfSwgZGVzY3JpcHRpb24sIHB1Ymxpc2hlZEF0LCB0aXRsZSwgdXJsVG9JbWFnZSwgdXJsIH0gPSBpdGVtO1xuICAgICAgICBjb25zdCBuZXdzQ2FyZFRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxpbmsgY2FyZHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt1cmxUb0ltYWdlIHx8IENPTlNUQU5UUy5OT19JTUFHRV9VUkx9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPiR7dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7c291cmNlTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb24gfHwgQ09OU1RBTlRTLkVNUFRZX1ZBTFVFfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhIGNvbnRlbnQgY2FyZC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmlnaHQgZmxvYXRlZFwiPiR7dGhpcy5mb3JtYXREYXRhKHB1Ymxpc2hlZEF0KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt1cmx9XCIgdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIHJpZ2h0IGxhYmVsZWQgaWNvbiBidXR0b24gdGlueSBjYXJkLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicmlnaHQgY2hldnJvbiBpY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudEFyZWEuaW5uZXJIVE1MICs9IG5ld3NDYXJkVGVtcGxhdGU7XG4gICAgfTtcblxuICAgIHJlbmRlck5ld3NIZWFkZXIoKSB7XG4gICAgICAgIHRoaXMubmV3c0hlYWRlci5pbm5lclRleHQgPSB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlXG4gICAgICAgICAgICA/IGBcIiR7dGhpcy5zZWFyY2hGaWVsZC52YWx1ZS50b1VwcGVyQ2FzZSgpfVwiIHNlYXJjaCByZXN1bHRzOmBcbiAgICAgICAgICAgIDogJ1RvcCBOZXdzOic7XG4gICAgfVxuXG4gICAgcmVuZGVyRW1wdHlSZXN1bHQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTWVzc2FnZShDT05TVEFOVFMuTk9fU0VBUkNIX1JFU1VMVF9URVhUKTtcbiAgICB9XG5cbiAgICByZW5kZXJFcnJvck1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTWVzc2FnZShDT05TVEFOVFMuRVJST1JfVEVYVCk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTmV3c0hlYWRlcigpO1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aDIgY2xhc3M9J2Vycm9yIG1lc3NhZ2UnPiR7bWVzc2FnZX08L2gyPmA7XG4gICAgfVxuXG4gICAgbWFuYWdlTG9hZGVyKGlzRGlzYWJsZSwgbWluRGVsYXkgPSA1MDApIHtcbiAgICAgICAgaWYgKGlzRGlzYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5hcHBMb2FkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYXBwTG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCBtaW5EZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZvcm1hdERhdGEoZGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9EYXRlU3RyaW5nKCk7XG4gICAgfVxuXG5cbiAgICBvblNlYXJjaE5ld3MoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hGaWVsZC52YWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5zZWFyY2hGaWVsZC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLnNlYXJjaEZpZWxkLnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZnJlc2hOZXdzKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRmllbGQudmFsdWUgPSBDT05TVEFOVFMuRU1QVFlfVkFMVUU7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICBBUElfS0VZOiAnMDcwNWU3ZGNkMDExNGFmZGIyZTg5N2QwNjM1YWZjMjknLFxuICAgIGdldCBERUZBVUxUX05FV1NfVVJMKCkge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9jb3VudHJ5PXVzJmFwaUtleT0ke3RoaXMuQVBJX0tFWX1gXG4gICAgfSxcbiAgICBHRVRfUVVFUllfTkVXU19VUkwocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIGBodHRwczovL25ld3NhcGkub3JnL3YyL2V2ZXJ5dGhpbmc/cT0ke3F1ZXJ5fSZhcGlLZXk9JHt0aGlzLkFQSV9LRVl9YFxuICAgIH0sXG4gICAgTk9fSU1BR0VfVVJMOiAnL2Fzc2V0cy9uby1pbWFnZS1ib3gucG5nJyxcbiAgICBFTVBUWV9WQUxVRTogJycsXG4gICAgTk9fU0VBUkNIX1JFU1VMVF9URVhUOiAnTm8gU2VhcmNoIFJlc3VsdHMnLFxuICAgIEVSUk9SX1RFWFQ6ICdEYXRhIExvYWRpbmcgRXJyb3InLFxufSJdfQ==
