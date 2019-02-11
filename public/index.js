/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/style.scss":
/*!***************************!*\
  !*** ./assets/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./assets/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./assets/style.scss":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./assets/style.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n  min-height: calc(100% - 40px);\n  padding: 5%;\n  padding-top: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.content-area {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n\n.news-header {\n  width: 100%;\n  padding: 0 30px;\n  word-break: break-word; }\n\n.header-right-block {\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-end; }\n\n.ui.cards:first-child {\n  margin-top: .875em; }\n\n.card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .card-footer .card-btn {\n    margin: 0 !important;\n    margin-left: 5px !important; }\n\n.search-input {\n  width: 60%; }\n\n#app-content .message {\n  margin-top: 40px; }\n\n#app-content .error {\n  color: #d14d4d; }\n\n#app-loader {\n  position: fixed; }\n\n.hidden {\n  display: none !important; }\n\n.add-news-btn {\n  align-self: flex-end; }\n\n.edit-form {\n  padding: 16px 32px;\n  width: 100%; }\n\n.form-content-wrapper {\n  width: 50%; }\n\n#app-content .news-card-header {\n  display: flex;\n  align-items: flex-start; }\n\n#app-content .news-card-header > span {\n  margin-right: auto; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var root_assets_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! root/assets/style.scss */ "./assets/style.scss");
/* harmony import */ var root_assets_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(root_assets_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var root_src_app_AppPresenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! root/src/app/AppPresenter */ "./src/app/AppPresenter.js");
/* harmony import */ var root_src_app_AppView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! root/src/app/AppView */ "./src/app/AppView.js");
/* harmony import */ var root_src_app_AppModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! root/src/app/AppModel */ "./src/app/AppModel.js");




var appView = new root_src_app_AppView__WEBPACK_IMPORTED_MODULE_2__["default"]();
var appModel = new root_src_app_AppModel__WEBPACK_IMPORTED_MODULE_3__["default"]();
var appPresenter = new root_src_app_AppPresenter__WEBPACK_IMPORTED_MODULE_1__["default"](appView, appModel);
appPresenter.init();

/***/ }),

/***/ "./src/app/AppModel.js":
/*!*****************************!*\
  !*** ./src/app/AppModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppModel; });
/* harmony import */ var root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! root/src/constants.js */ "./src/constants.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AppModel =
/*#__PURE__*/
function () {
  function AppModel() {
    _classCallCheck(this, AppModel);

    this.myNewsDataSet = [];
  }

  _createClass(AppModel, [{
    key: "getNews",
    value: function () {
      var _getNews = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(query ? root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].GET_QUERY_NEWS_URL(query) : root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].DEFAULT_NEWS_URL);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", data.articles);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getNews(_x) {
        return _getNews.apply(this, arguments);
      };
    }()
  }, {
    key: "getMyNews",
    value: function () {
      var _getMyNews = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var response, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].MY_NEWS_URL);

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                data = _context2.sent;
                this.myNewsDataSet = data.map(function (item) {
                  item.id = item._id;
                  delete item._id;
                  return item;
                });
                return _context2.abrupt("return", this.myNewsDataSet);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getMyNews() {
        return _getMyNews.apply(this, arguments);
      };
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(userData) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch(root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].LOGIN_URL, {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(userData)
                });

              case 2:
                response = _context3.sent;

                if (!(response.status === root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].HTTP_STATUSES.UNAUTHORIZED)) {
                  _context3.next = 5;
                  break;
                }

                throw new Error('Incorrect username or password.');

              case 5:
                _context3.next = 7;
                return response.json();

              case 7:
                data = _context3.sent;
                return _context3.abrupt("return", data.userName);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function login(_x2) {
        return _login.apply(this, arguments);
      };
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch(root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].LOGOUT_URL);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function logout() {
        return _logout.apply(this, arguments);
      };
    }()
  }, {
    key: "registration",
    value: function () {
      var _registration = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(userData) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return fetch(root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].REGISTRATION_URL, {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(userData)
                });

              case 2:
                response = _context5.sent;
                _context5.next = 5;
                return response.json();

              case 5:
                data = _context5.sent;

                if (!(response.status !== root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].HTTP_STATUSES.OK)) {
                  _context5.next = 8;
                  break;
                }

                throw new Error(data.errorMessage);

              case 8:
                return _context5.abrupt("return", data.userName);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function registration(_x3) {
        return _registration.apply(this, arguments);
      };
    }()
  }, {
    key: "sendNewNewsItem",
    value: function () {
      var _sendNewNewsItem = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(newsItem) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                newsItem.source = {
                  name: 'Own News'
                };
                newsItem.publishedAt = new Date();
                newsItem.urlToImage = newsItem.urlToImage || root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].NO_IMAGE_URL;
                _context6.next = 5;
                return fetch(root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].MY_NEWS_URL, {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(newsItem)
                });

              case 5:
                response = _context6.sent;
                _context6.next = 8;
                return response.json();

              case 8:
                data = _context6.sent;
                return _context6.abrupt("return", data);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function sendNewNewsItem(_x4) {
        return _sendNewNewsItem.apply(this, arguments);
      };
    }()
  }, {
    key: "updateNewsItem",
    value: function () {
      var _updateNewsItem = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(item) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                item.source = {
                  name: 'Own News'
                };
                item.publishedAt = new Date();
                item._id = item.id;
                delete item.id;
                _context7.next = 6;
                return fetch("".concat(root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].MY_NEWS_URL, "/").concat(item._id), {
                  method: 'PUT',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(item)
                });

              case 6:
                response = _context7.sent;
                _context7.next = 9;
                return response.json();

              case 9:
                data = _context7.sent;
                return _context7.abrupt("return", data);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function updateNewsItem(_x5) {
        return _updateNewsItem.apply(this, arguments);
      };
    }()
  }, {
    key: "deleteNewsItem",
    value: function () {
      var _deleteNewsItem = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(id) {
        var response, data;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return fetch("".concat(root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].MY_NEWS_URL, "/").concat(id), {
                  method: 'DELETE'
                });

              case 2:
                response = _context8.sent;
                _context8.next = 5;
                return response.json();

              case 5:
                data = _context8.sent;
                return _context8.abrupt("return", data);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function deleteNewsItem(_x6) {
        return _deleteNewsItem.apply(this, arguments);
      };
    }()
  }, {
    key: "getMyNewsById",
    value: function getMyNewsById(id) {
      return this.myNewsDataSet.find(function (e) {
        return e.id === id;
      });
    }
  }]);

  return AppModel;
}();



/***/ }),

/***/ "./src/app/AppPresenter.js":
/*!*********************************!*\
  !*** ./src/app/AppPresenter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppPresenter; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppPresenter =
/*#__PURE__*/
function () {
  function AppPresenter() {
    _classCallCheck(this, AppPresenter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this.view = args[0];
    this.model = args[1];
  }

  _createClass(AppPresenter, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.loadMainPage();
      this.view.onSearchNews(function (query) {
        return _this.loadMainPage(query);
      });
      this.view.onRefreshNews(function () {
        return _this.loadMainPage();
      });
      this.view.onAddNews(function () {
        return _this.loadEditPage({}, true);
      });
      this.view.onUserPageBtn(function () {
        return _this.loadUserPage();
      });
      this.view.onMainPage(function () {
        return _this.loadMainPage();
      });
      this.view.onSignInPageBtn(function () {
        return _this.loadLoginPage();
      });
      this.view.onSignOutBtn(function () {
        _this.logout();
      });
    }
  }, {
    key: "loadMainPage",
    value: function () {
      var _loadMainPage = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.view.manageLoader(true);
                _context.prev = 1;
                _context.next = 4;
                return this.model.getNews(query);

              case 4:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 7;
                  break;
                }

                _context.t0 = [];

              case 7:
                data = _context.t0;
                this.view.toggleSearchBar(true);
                this.view.toggleAddBtn(false);
                this.view.renderNewsHeader();

                if (data.length) {
                  this.view.renderNews(data);
                } else {
                  this.view.renderEmptyResult();
                }

                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t1 = _context["catch"](1);
                this.view.renderErrorMessage();
                throw new Error(_context.t1);

              case 18:
                _context.prev = 18;
                this.view.manageLoader(false);
                return _context.finish(18);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 14, 18, 21]]);
      }));

      return function loadMainPage(_x) {
        return _loadMainPage.apply(this, arguments);
      };
    }()
  }, {
    key: "loadLoginPage",
    value: function loadLoginPage() {
      var _this2 = this;

      this.clearPage();
      this.view.renderLoginForm();
      this.view.onSignInBtn(function (loginData) {
        _this2.auth(_this2.model.login, loginData);
      });
      this.view.onRegistrationBtn(function (loginData) {
        _this2.auth(_this2.model.registration, loginData);
      });
    }
  }, {
    key: "auth",
    value: function () {
      var _auth = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(authMethod, authData) {
        var userName;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return authMethod(authData);

              case 3:
                userName = _context2.sent;
                this.view.toggleUserBtn(true, userName);
                this.loadUserPage();
                this.view.switchSignBtns(false);
                this.view.toggle(false);
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                this.view.renderAuthError(_context2.t0.message);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      return function auth(_x2, _x3) {
        return _auth.apply(this, arguments);
      };
    }()
  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.model.logout();

              case 2:
                this.view.switchSignBtns(true);
                this.view.toggleUserBtn(false);
                this.loadMainPage();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function logout() {
        return _logout.apply(this, arguments);
      };
    }()
  }, {
    key: "loadUserPage",
    value: function () {
      var _loadUserPage = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var _this3 = this;

        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.view.manageLoader(true);
                _context5.prev = 1;
                _context5.next = 4;
                return this.model.getMyNews();

              case 4:
                _context5.t0 = _context5.sent;

                if (_context5.t0) {
                  _context5.next = 7;
                  break;
                }

                _context5.t0 = [];

              case 7:
                data = _context5.t0;
                this.view.toggleSearchBar(false);
                this.view.toggleAddBtn(true);
                this.view.renderHeader('My News:');

                if (data.length) {
                  this.view.renderNews(data, true);
                  this.view.onEditNewsItem(function (id) {
                    var elem = _this3.model.getMyNewsById(id);

                    _this3.loadEditPage(elem);
                  });
                  this.view.onDeleteItem(
                  /*#__PURE__*/
                  function () {
                    var _ref = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee4(id) {
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              _context4.next = 2;
                              return _this3.model.deleteNewsItem(id);

                            case 2:
                              _this3.loadUserPage();

                            case 3:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4, this);
                    }));

                    return function (_x4) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                } else {
                  this.view.renderEmptyResult();
                }

                _context5.next = 18;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t1 = _context5["catch"](1);
                this.view.renderErrorMessage();
                throw new Error(_context5.t1);

              case 18:
                _context5.prev = 18;
                this.view.manageLoader(false);
                return _context5.finish(18);

              case 21:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 14, 18, 21]]);
      }));

      return function loadUserPage() {
        return _loadUserPage.apply(this, arguments);
      };
    }()
  }, {
    key: "loadEditPage",
    value: function loadEditPage(item, isAdding) {
      var _this4 = this;

      this.view.toggleAddBtn(false);
      this.view.renderHeader(isAdding ? 'Add News:' : 'Edit News');
      this.view.renderEditForm(item);
      this.view.onSubmitEditForm(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6(formData) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!isAdding) {
                    _context6.next = 5;
                    break;
                  }

                  _context6.next = 3;
                  return _this4.model.sendNewNewsItem(formData);

                case 3:
                  _context6.next = 7;
                  break;

                case 5:
                  _context6.next = 7;
                  return _this4.model.updateNewsItem(formData);

                case 7:
                  _this4.loadUserPage();

                case 8:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x5) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "clearPage",
    value: function clearPage() {
      this.view.toggleSearchBar(false);
      this.view.toggleAddBtn(false);
      this.view.renderHeader('');
    }
  }]);

  return AppPresenter;
}();



/***/ }),

/***/ "./src/app/AppView.js":
/*!****************************!*\
  !*** ./src/app/AppView.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppView; });
/* harmony import */ var root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! root/src/constants.js */ "./src/constants.js");
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
    this.searchBar = document.querySelector('#search-bar');
    this.searchField = document.querySelector('#search-field');
    this.searchBtn = document.querySelector('#search-btn');
    this.refreshBtn = document.querySelector('#refresh-btn');
    this.addNewsBtn = document.querySelector('#add-news-btn');
    this.userPageBtn = document.querySelector('#user-page-btn');
    this.signInPageBtn = document.querySelector('#sign-in-page-btn');
    this.signOutBtn = document.querySelector('#sign-out-btn');
    this.mainPageBtn = document.querySelector('#main-page-btn');
    this.signInBtn = null;
    this.registrationBtn = null;
    this.newsHeader = document.querySelector('.news-header');
    this.loginForm = null;
  }

  _createClass(AppView, [{
    key: "renderNews",
    value: function renderNews(news, isEditMode) {
      var _this = this;

      this.mainContentArea.innerHTML = root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].EMPTY_VALUE;
      news.forEach(function (item) {
        return _this.renderNewsCard(item, isEditMode);
      });
    }
  }, {
    key: "renderNewsCard",
    value: function renderNewsCard(item, isEditMode) {
      var id = item.id,
          sourceName = item.source.name,
          description = item.description,
          publishedAt = item.publishedAt,
          title = item.title,
          urlToImage = item.urlToImage,
          url = item.url;
      var newsCardTemplate = "\n            <div class=\"ui link cards\">\n                <div class=\"card\">\n                    <div class=\"image\">\n                        <img src=\"".concat(urlToImage || root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].NO_IMAGE_URL, "\">\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"header news-card-header\">\n                            <span>").concat(title, "</span>\n                            ").concat(isEditMode ? "\n                                <button class=\"ui icon button\" data-label=\"edit-btn\" data-id=".concat(id, ">\n                                    <i class=\"edit icon\" data-label=\"edit-btn\" data-id=").concat(id, "></i>\n                                </button>\n                                <button class=\"ui icon button\" data-label=\"delete-btn\" data-id=").concat(id, ">\n                                    <i class=\"window close icon\" data-label=\"delete-btn\" data-id=").concat(id, "></i>\n                                </button>\n                            ") : root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].EMPTY_VALUE, "\n                        </div>\n                        <div class=\"meta\">\n                            <span>").concat(sourceName, "</span>\n                        </div>\n                        <div class=\"description\">").concat(description || root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].EMPTY_VALUE, "</div>\n                    </div>\n                    <div class=\"extra content card-footer\">\n                        <span class=\"right floated\">").concat(this.formatData(publishedAt), "</span>\n                        <span>\n                            <a href=\"").concat(url, "\" target=\"blank\">\n                                <button class=\"ui right labeled icon button tiny card-btn\">\n                                        Read More\n                                        <i class=\"right chevron icon\"></i>\n                                </button>\n                            </a>\n                            \n                        </span>\n                    </div>\n                </div>\n            </div>");
      this.mainContentArea.innerHTML += newsCardTemplate;

      if (isEditMode) {
        this.edit;
      }
    }
  }, {
    key: "renderEditForm",
    value: function renderEditForm() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var id = item.id,
          title = item.title,
          description = item.description,
          urlToImage = item.urlToImage,
          url = item.url;
      var editNewsTemplate = "\n            <form class=\"ui form edit-form\" id=\"edit-form\" data-id=".concat(id, ">\n                <div class=\"form-content-wrapper\">\n                    <div class=\"field\">\n                        <label>Title</label>\n                        <input type=\"text\" name=\"title\" placeholder=\"Title\" value=\"").concat(title || root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].EMPTY_VALUE, "\">\n                    </div>\n                    <div class=\"field\">\n                        <label>Description</label>\n                        <input type=\"text\" name=\"description\" placeholder=\"Description\" value=\"").concat(description || root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].EMPTY_VALUE, "\">\n                    </div>\n                    <div class=\"field\">\n                        <label>Image URL</label>\n                        <input type=\"text\" name=\"urlToImage\" placeholder=\"Image URL\" value=\"").concat(urlToImage || root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].EMPTY_VALUE, "\">\n                    </div>\n                    <div class=\"field\">\n                        <label>Source URL</label>\n                        <input type=\"text\" name=\"url\" placeholder=\"Source URL\" value=\"").concat(url || root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].EMPTY_VALUE, "\">\n                    </div>\n                    <button class=\"ui button\" type=\"submit\">Save</button>\n                </div>\n            </form>");
      this.mainContentArea.innerHTML = editNewsTemplate;
    }
  }, {
    key: "renderLoginForm",
    value: function renderLoginForm() {
      var editNewsTemplate = "\n            <form class=\"ui form\" id=\"login-form\">\n                <div class=\"field\">\n                    <label>Login</label>\n                    <input type=\"text\" name=\"username\" placeholder=\"Login\">\n                </div>\n                <div class=\"field\">\n                    <label>Password</label>\n                    <input type=\"password\" name=\"password\" placeholder=\"Password\">\n                </div>\n                <div class=\"ui error message\" id=\"login-form-error-block\">\n                </div>\n                <button class=\"ui button\" type=\"button\" id=\"sign-in-btn\">Sign In</button>\n                <button class=\"ui button\" type=\"button\" id=\"registration-btn\">Registration</button>\n            </form>";
      this.mainContentArea.innerHTML = editNewsTemplate;
      this.loginForm = document.querySelector('#login-form');
      this.signInBtn = document.querySelector('#sign-in-btn');
      this.registrationBtn = document.querySelector('#registration-btn');
    }
  }, {
    key: "renderNewsHeader",
    value: function renderNewsHeader() {
      this.newsHeader.innerText = this.searchField.value ? "\"".concat(this.searchField.value.toUpperCase(), "\" search results:") : 'Top News:';
    }
  }, {
    key: "renderAuthError",
    value: function renderAuthError(errorText) {
      var errorBlock = document.querySelector('#login-form-error-block');
      errorBlock.innerText = errorText;
      this.loginForm.classList.add('error');
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(headerName) {
      this.newsHeader.innerText = headerName;
    }
  }, {
    key: "renderEmptyResult",
    value: function renderEmptyResult() {
      this.renderMessage(root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].NO_SEARCH_RESULT_TEXT);
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage() {
      this.renderMessage(root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].ERROR_TEXT);
    }
  }, {
    key: "renderMessage",
    value: function renderMessage(message) {
      this.mainContentArea.innerHTML = "\n            <h2 class='error message'>".concat(message, "</h2>");
    }
  }, {
    key: "toggleAddBtn",
    value: function toggleAddBtn(isDisplay) {
      this.toggleElemDisplaying(this.addNewsBtn, isDisplay);
    }
  }, {
    key: "toggleUserBtn",
    value: function toggleUserBtn(isDisplay, userName) {
      this.toggleElemDisplaying(this.userPageBtn, isDisplay);
      this.userPageBtn.innerText = userName;
    }
  }, {
    key: "switchSignBtns",
    value: function switchSignBtns(isSignIn) {
      this.toggleElemDisplaying(this.signOutBtn, !isSignIn);
      this.toggleElemDisplaying(this.signInPageBtn, isSignIn);
    }
  }, {
    key: "toggleSearchBar",
    value: function toggleSearchBar(isDisplay) {
      this.toggleElemDisplaying(this.searchBar, isDisplay);
    }
  }, {
    key: "toggleElemDisplaying",
    value: function toggleElemDisplaying(elem, isDisplay) {
      if (isDisplay) {
        elem.classList.remove('hidden');
      } else {
        elem.classList.add('hidden');
      }
    }
  }, {
    key: "clearPageContent",
    value: function clearPageContent() {
      this.mainContentArea.innerHTML = root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].EMPTY_VALUE;
      this.toggleSearchBar(false);
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
        _this4.searchField.value = root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].EMPTY_VALUE;
        callback();
      });
    }
  }, {
    key: "onSubmitEditForm",
    value: function onSubmitEditForm(callback) {
      var editForm = document.querySelector('#edit-form');
      editForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var formData = {
          id: editForm.getAttribute('data-id'),
          title: editForm['title'].value,
          description: editForm['description'].value,
          urlToImage: editForm['urlToImage'].value,
          url: editForm['url'].value
        };
        callback(formData);
      });
    }
  }, {
    key: "onSignInBtn",
    value: function onSignInBtn(callback) {
      var _this5 = this;

      this.signInBtn.addEventListener('click', function (event) {
        var formData = {
          username: _this5.loginForm['username'].value,
          password: _this5.loginForm['password'].value
        };
        callback(formData);
      });
    }
  }, {
    key: "onRegistrationBtn",
    value: function onRegistrationBtn(callback) {
      var _this6 = this;

      this.registrationBtn.addEventListener('click', function (event) {
        var formData = {
          username: _this6.loginForm['username'].value,
          password: _this6.loginForm['password'].value
        };
        callback(formData);
      });
    }
  }, {
    key: "onAddNews",
    value: function onAddNews(callback) {
      this.addNewsBtn.addEventListener('click', callback);
    }
  }, {
    key: "onEditNewsItem",
    value: function onEditNewsItem(callback) {
      this.mainContentArea.addEventListener('click', function (event) {
        if (event.target.getAttribute('data-label') === 'edit-btn') {
          callback(event.target.getAttribute('data-id'));
        }
      });
    }
  }, {
    key: "onDeleteItem",
    value: function onDeleteItem(callback) {
      this.mainContentArea.addEventListener('click', function (event) {
        if (event.target.getAttribute('data-label') === 'delete-btn') {
          callback(event.target.getAttribute('data-id'));
        }
      });
    }
  }, {
    key: "onUserPageBtn",
    value: function onUserPageBtn(callback) {
      this.userPageBtn.addEventListener('click', callback);
    }
  }, {
    key: "onSignInPageBtn",
    value: function onSignInPageBtn(callback) {
      this.signInPageBtn.addEventListener('click', callback);
    }
  }, {
    key: "onSignOutBtn",
    value: function onSignOutBtn(callback) {
      this.signOutBtn.addEventListener('click', callback);
    }
  }, {
    key: "onMainPage",
    value: function onMainPage(callback) {
      this.mainPageBtn.addEventListener('click', callback);
    }
  }]);

  return AppView;
}();



/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() { return CONSTANTS; });
var CONSTANTS = {
  API_KEY: '0705e7dcd0114afdb2e897d0635afc29',
  BASE_URL: window.location.origin,

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
  ERROR_TEXT: 'Data Loading Error',

  get MY_NEWS_URL() {
    return "".concat(this.BASE_URL, "/api/my-news");
  },

  get LOGIN_URL() {
    return "".concat(this.BASE_URL, "/api/login");
  },

  get LOGOUT_URL() {
    return "".concat(this.BASE_URL, "/api/logout");
  },

  get REGISTRATION_URL() {
    return "".concat(this.BASE_URL, "/api/registration");
  },

  HTTP_STATUSES: {
    OK: 200,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlLnNjc3M/NDg3MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvQXBwUHJlc2VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbImFwcFZpZXciLCJBcHBWaWV3IiwiYXBwTW9kZWwiLCJBcHBNb2RlbCIsImFwcFByZXNlbnRlciIsIkFwcFByZXNlbnRlciIsImluaXQiLCJteU5ld3NEYXRhU2V0IiwicXVlcnkiLCJmZXRjaCIsIkNPTlNUQU5UUyIsIkdFVF9RVUVSWV9ORVdTX1VSTCIsIkRFRkFVTFRfTkVXU19VUkwiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiYXJ0aWNsZXMiLCJNWV9ORVdTX1VSTCIsIm1hcCIsIml0ZW0iLCJpZCIsIl9pZCIsInVzZXJEYXRhIiwiTE9HSU5fVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiSFRUUF9TVEFUVVNFUyIsIlVOQVVUSE9SSVpFRCIsIkVycm9yIiwidXNlck5hbWUiLCJMT0dPVVRfVVJMIiwiUkVHSVNUUkFUSU9OX1VSTCIsIk9LIiwiZXJyb3JNZXNzYWdlIiwibmV3c0l0ZW0iLCJzb3VyY2UiLCJuYW1lIiwicHVibGlzaGVkQXQiLCJEYXRlIiwidXJsVG9JbWFnZSIsIk5PX0lNQUdFX1VSTCIsImZpbmQiLCJlIiwiYXJncyIsInZpZXciLCJtb2RlbCIsImxvYWRNYWluUGFnZSIsIm9uU2VhcmNoTmV3cyIsIm9uUmVmcmVzaE5ld3MiLCJvbkFkZE5ld3MiLCJsb2FkRWRpdFBhZ2UiLCJvblVzZXJQYWdlQnRuIiwibG9hZFVzZXJQYWdlIiwib25NYWluUGFnZSIsIm9uU2lnbkluUGFnZUJ0biIsImxvYWRMb2dpblBhZ2UiLCJvblNpZ25PdXRCdG4iLCJsb2dvdXQiLCJtYW5hZ2VMb2FkZXIiLCJnZXROZXdzIiwidG9nZ2xlU2VhcmNoQmFyIiwidG9nZ2xlQWRkQnRuIiwicmVuZGVyTmV3c0hlYWRlciIsImxlbmd0aCIsInJlbmRlck5ld3MiLCJyZW5kZXJFbXB0eVJlc3VsdCIsInJlbmRlckVycm9yTWVzc2FnZSIsImNsZWFyUGFnZSIsInJlbmRlckxvZ2luRm9ybSIsIm9uU2lnbkluQnRuIiwibG9naW5EYXRhIiwiYXV0aCIsImxvZ2luIiwib25SZWdpc3RyYXRpb25CdG4iLCJyZWdpc3RyYXRpb24iLCJhdXRoTWV0aG9kIiwiYXV0aERhdGEiLCJ0b2dnbGVVc2VyQnRuIiwic3dpdGNoU2lnbkJ0bnMiLCJ0b2dnbGUiLCJyZW5kZXJBdXRoRXJyb3IiLCJtZXNzYWdlIiwiZ2V0TXlOZXdzIiwicmVuZGVySGVhZGVyIiwib25FZGl0TmV3c0l0ZW0iLCJlbGVtIiwiZ2V0TXlOZXdzQnlJZCIsIm9uRGVsZXRlSXRlbSIsImRlbGV0ZU5ld3NJdGVtIiwiaXNBZGRpbmciLCJyZW5kZXJFZGl0Rm9ybSIsIm9uU3VibWl0RWRpdEZvcm0iLCJmb3JtRGF0YSIsInNlbmROZXdOZXdzSXRlbSIsInVwZGF0ZU5ld3NJdGVtIiwibWFpbkNvbnRlbnRBcmVhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwTG9hZGVyIiwic2VhcmNoQmFyIiwic2VhcmNoRmllbGQiLCJzZWFyY2hCdG4iLCJyZWZyZXNoQnRuIiwiYWRkTmV3c0J0biIsInVzZXJQYWdlQnRuIiwic2lnbkluUGFnZUJ0biIsInNpZ25PdXRCdG4iLCJtYWluUGFnZUJ0biIsInNpZ25JbkJ0biIsInJlZ2lzdHJhdGlvbkJ0biIsIm5ld3NIZWFkZXIiLCJsb2dpbkZvcm0iLCJuZXdzIiwiaXNFZGl0TW9kZSIsImlubmVySFRNTCIsIkVNUFRZX1ZBTFVFIiwiZm9yRWFjaCIsInJlbmRlck5ld3NDYXJkIiwic291cmNlTmFtZSIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJ1cmwiLCJuZXdzQ2FyZFRlbXBsYXRlIiwiZm9ybWF0RGF0YSIsImVkaXQiLCJlZGl0TmV3c1RlbXBsYXRlIiwiaW5uZXJUZXh0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsImVycm9yVGV4dCIsImVycm9yQmxvY2siLCJjbGFzc0xpc3QiLCJhZGQiLCJoZWFkZXJOYW1lIiwicmVuZGVyTWVzc2FnZSIsIk5PX1NFQVJDSF9SRVNVTFRfVEVYVCIsIkVSUk9SX1RFWFQiLCJpc0Rpc3BsYXkiLCJ0b2dnbGVFbGVtRGlzcGxheWluZyIsImlzU2lnbkluIiwicmVtb3ZlIiwiaXNEaXNhYmxlIiwibWluRGVsYXkiLCJzZXRUaW1lb3V0IiwiZGF0ZSIsInRvRGF0ZVN0cmluZyIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsImVkaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJnZXRBdHRyaWJ1dGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGFyZ2V0IiwiQVBJX0tFWSIsIkJBU0VfVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJOT1RfRk9VTkQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QVU7QUFDakIsV0FBS3ZDLFdBQUwsQ0FBaUJ3QyxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkNELFFBQTNDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9STDtBQUFBO0FBQU8sSUFBTTVJLFNBQVMsR0FBRztBQUNyQnNKLFNBQU8sRUFBRSxrQ0FEWTtBQUVyQkMsVUFBUSxFQUFFQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BRkw7O0FBR3JCLE1BQUl4SixnQkFBSixHQUF1QjtBQUNuQiw0RUFBaUUsS0FBS29KLE9BQXRFO0FBQ0gsR0FMb0I7O0FBTXJCLE1BQUlwSCxZQUFKLEdBQW1CO0FBQ2YscUJBQVUsS0FBS3FILFFBQWY7QUFDSCxHQVJvQjs7QUFTckJ0SixvQkFUcUIsOEJBU0ZILEtBVEUsRUFTSztBQUN0Qix5REFBOENBLEtBQTlDLHFCQUE4RCxLQUFLd0osT0FBbkU7QUFDSCxHQVhvQjtBQVlyQnpDLGFBQVcsRUFBRSxFQVpRO0FBYXJCb0IsdUJBQXFCLEVBQUUsbUJBYkY7QUFjckJDLFlBQVUsRUFBRSxvQkFkUzs7QUFlckIsTUFBSTNILFdBQUosR0FBa0I7QUFDZCxxQkFBVSxLQUFLZ0osUUFBZjtBQUNILEdBakJvQjs7QUFrQnJCLE1BQUkxSSxTQUFKLEdBQWdCO0FBQ1oscUJBQVUsS0FBSzBJLFFBQWY7QUFDSCxHQXBCb0I7O0FBcUJyQixNQUFJL0gsVUFBSixHQUFpQjtBQUNiLHFCQUFVLEtBQUsrSCxRQUFmO0FBQ0gsR0F2Qm9COztBQXdCckIsTUFBSTlILGdCQUFKLEdBQXVCO0FBQ25CLHFCQUFVLEtBQUs4SCxRQUFmO0FBQ0gsR0ExQm9COztBQTJCckJuSSxlQUFhLEVBQUU7QUFDWE0sTUFBRSxFQUFFLEdBRE87QUFFWEwsZ0JBQVksRUFBRSxHQUZIO0FBR1hzSSxhQUFTLEVBQUU7QUFIQTtBQTNCTSxDQUFsQixDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudC13cmFwcGVyIHtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgcGFkZGluZzogNSU7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY29udGVudC1hcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuLm5ld3MtaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDsgfVxcblxcbi5oZWFkZXItcmlnaHQtYmxvY2sge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG5cXG4udWkuY2FyZHM6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogLjg3NWVtOyB9XFxuXFxuLmNhcmQtZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAuY2FyZC1mb290ZXIgLmNhcmQtYnRuIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDsgfVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgd2lkdGg6IDYwJTsgfVxcblxcbiNhcHAtY29udGVudCAubWVzc2FnZSB7XFxuICBtYXJnaW4tdG9wOiA0MHB4OyB9XFxuXFxuI2FwcC1jb250ZW50IC5lcnJvciB7XFxuICBjb2xvcjogI2QxNGQ0ZDsgfVxcblxcbiNhcHAtbG9hZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLmFkZC1uZXdzLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgfVxcblxcbi5lZGl0LWZvcm0ge1xcbiAgcGFkZGluZzogMTZweCAzMnB4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uZm9ybS1jb250ZW50LXdyYXBwZXIge1xcbiAgd2lkdGg6IDUwJTsgfVxcblxcbiNhcHAtY29udGVudCAubmV3cy1jYXJkLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG5cXG4jYXBwLWNvbnRlbnQgLm5ld3MtY2FyZC1oZWFkZXIgPiBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCAncm9vdC9hc3NldHMvc3R5bGUuc2NzcydcblxuaW1wb3J0IEFwcFByZXNlbnRlciBmcm9tICdyb290L3NyYy9hcHAvQXBwUHJlc2VudGVyJztcbmltcG9ydCBBcHBWaWV3IGZyb20gJ3Jvb3Qvc3JjL2FwcC9BcHBWaWV3JztcbmltcG9ydCBBcHBNb2RlbCBmcm9tICdyb290L3NyYy9hcHAvQXBwTW9kZWwnO1xuXG5jb25zdCBhcHBWaWV3ID0gbmV3IEFwcFZpZXcoKTtcbmNvbnN0IGFwcE1vZGVsID0gbmV3IEFwcE1vZGVsKCk7XG5jb25zdCBhcHBQcmVzZW50ZXIgPSBuZXcgQXBwUHJlc2VudGVyKGFwcFZpZXcsIGFwcE1vZGVsKTtcblxuYXBwUHJlc2VudGVyLmluaXQoKTtcbiIsImltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJ3Jvb3Qvc3JjL2NvbnN0YW50cy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5teU5ld3NEYXRhU2V0ID0gW107XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TmV3cyhxdWVyeSkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHF1ZXJ5ID8gQ09OU1RBTlRTLkdFVF9RVUVSWV9ORVdTX1VSTChxdWVyeSkgOiBDT05TVEFOVFMuREVGQVVMVF9ORVdTX1VSTCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLmFydGljbGVzO1xuICAgIH1cblxuICAgIGFzeW5jIGdldE15TmV3cygpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChDT05TVEFOVFMuTVlfTkVXU19VUkwpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB0aGlzLm15TmV3c0RhdGFTZXQgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5pZCA9IGl0ZW0uX2lkO1xuICAgICAgICAgICAgZGVsZXRlIGl0ZW0uX2lkO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5teU5ld3NEYXRhU2V0O1xuICAgIH1cblxuICAgIGFzeW5jIGxvZ2luKHVzZXJEYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQ09OU1RBTlRTLkxPR0lOX1VSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IENPTlNUQU5UUy5IVFRQX1NUQVRVU0VTLlVOQVVUSE9SSVpFRCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLnVzZXJOYW1lO1xuICAgIH1cblxuICAgIGFzeW5jIGxvZ291dCgpIHtcbiAgICAgICAgYXdhaXQgZmV0Y2goQ09OU1RBTlRTLkxPR09VVF9VUkwpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlZ2lzdHJhdGlvbih1c2VyRGF0YSkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKENPTlNUQU5UUy5SRUdJU1RSQVRJT05fVVJMLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSBDT05TVEFOVFMuSFRUUF9TVEFUVVNFUy5PSykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhLnVzZXJOYW1lO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmROZXdOZXdzSXRlbShuZXdzSXRlbSkge1xuICAgICAgICBuZXdzSXRlbS5zb3VyY2UgPSB7IG5hbWU6ICdPd24gTmV3cycgfTtcbiAgICAgICAgbmV3c0l0ZW0ucHVibGlzaGVkQXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBuZXdzSXRlbS51cmxUb0ltYWdlID0gbmV3c0l0ZW0udXJsVG9JbWFnZSB8fCBDT05TVEFOVFMuTk9fSU1BR0VfVVJMO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQ09OU1RBTlRTLk1ZX05FV1NfVVJMLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdzSXRlbSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlTmV3c0l0ZW0oaXRlbSkge1xuICAgICAgICBpdGVtLnNvdXJjZSA9IHsgbmFtZTogJ093biBOZXdzJyB9O1xuICAgICAgICBpdGVtLnB1Ymxpc2hlZEF0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgaXRlbS5faWQgPSBpdGVtLmlkO1xuICAgICAgICBkZWxldGUgaXRlbS5pZDtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0NPTlNUQU5UUy5NWV9ORVdTX1VSTH0vJHtpdGVtLl9pZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGl0ZW0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGFzeW5jIGRlbGV0ZU5ld3NJdGVtKGlkKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Q09OU1RBTlRTLk1ZX05FV1NfVVJMfS8ke2lkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0TXlOZXdzQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5teU5ld3NEYXRhU2V0LmZpbmQoKGUpID0+IGUuaWQgPT09IGlkKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwUHJlc2VudGVyIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIFt0aGlzLnZpZXcsIHRoaXMubW9kZWxdID0gYXJncztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmxvYWRNYWluUGFnZSgpO1xuICAgICAgICB0aGlzLnZpZXcub25TZWFyY2hOZXdzKChxdWVyeSkgPT4gdGhpcy5sb2FkTWFpblBhZ2UocXVlcnkpKTtcbiAgICAgICAgdGhpcy52aWV3Lm9uUmVmcmVzaE5ld3MoKCkgPT4gdGhpcy5sb2FkTWFpblBhZ2UoKSk7XG4gICAgICAgIHRoaXMudmlldy5vbkFkZE5ld3MoKCkgPT4gdGhpcy5sb2FkRWRpdFBhZ2Uoe30sIHRydWUpKTtcbiAgICAgICAgdGhpcy52aWV3Lm9uVXNlclBhZ2VCdG4oKCkgPT4gdGhpcy5sb2FkVXNlclBhZ2UoKSk7XG4gICAgICAgIHRoaXMudmlldy5vbk1haW5QYWdlKCgpID0+IHRoaXMubG9hZE1haW5QYWdlKCkpO1xuICAgICAgICB0aGlzLnZpZXcub25TaWduSW5QYWdlQnRuKCgpID0+IHRoaXMubG9hZExvZ2luUGFnZSgpKTtcbiAgICAgICAgdGhpcy52aWV3Lm9uU2lnbk91dEJ0bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTWFpblBhZ2UocXVlcnkpIHtcbiAgICAgICAgdGhpcy52aWV3Lm1hbmFnZUxvYWRlcih0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLm1vZGVsLmdldE5ld3MocXVlcnkpIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVNlYXJjaEJhcih0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVBZGRCdG4oZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlck5ld3NIZWFkZXIoKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXJOZXdzKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcucmVuZGVyRW1wdHlSZXN1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXJFcnJvck1lc3NhZ2UoKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcubWFuYWdlTG9hZGVyKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZExvZ2luUGFnZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhclBhZ2UoKTtcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlckxvZ2luRm9ybSgpO1xuICAgICAgICB0aGlzLnZpZXcub25TaWduSW5CdG4oKGxvZ2luRGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoKHRoaXMubW9kZWwubG9naW4sIGxvZ2luRGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXcub25SZWdpc3RyYXRpb25CdG4oKGxvZ2luRGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoKHRoaXMubW9kZWwucmVnaXN0cmF0aW9uLCBsb2dpbkRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBhdXRoKGF1dGhNZXRob2QsIGF1dGhEYXRhKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lID0gYXdhaXQgYXV0aE1ldGhvZChhdXRoRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnZpZXcudG9nZ2xlVXNlckJ0bih0cnVlLCB1c2VyTmFtZSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRVc2VyUGFnZSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3LnN3aXRjaFNpZ25CdG5zKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGUoZmFsc2UpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlckF1dGhFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBsb2dvdXQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubW9kZWwubG9nb3V0KCk7XG4gICAgICAgIHRoaXMudmlldy5zd2l0Y2hTaWduQnRucyh0cnVlKTtcbiAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVVzZXJCdG4oZmFsc2UpO1xuICAgICAgICB0aGlzLmxvYWRNYWluUGFnZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRVc2VyUGFnZSgpIHtcbiAgICAgICAgdGhpcy52aWV3Lm1hbmFnZUxvYWRlcih0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLm1vZGVsLmdldE15TmV3cygpIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVNlYXJjaEJhcihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnZpZXcudG9nZ2xlQWRkQnRuKHRydWUpO1xuICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlckhlYWRlcignTXkgTmV3czonKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlck5ld3MoZGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Lm9uRWRpdE5ld3NJdGVtKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5tb2RlbC5nZXRNeU5ld3NCeUlkKGlkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRFZGl0UGFnZShlbGVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcub25EZWxldGVJdGVtKGFzeW5jIChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm1vZGVsLmRlbGV0ZU5ld3NJdGVtKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVXNlclBhZ2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlckVtcHR5UmVzdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcucmVuZGVyRXJyb3JNZXNzYWdlKCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy52aWV3Lm1hbmFnZUxvYWRlcihmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRFZGl0UGFnZShpdGVtLCBpc0FkZGluZykge1xuICAgICAgICB0aGlzLnZpZXcudG9nZ2xlQWRkQnRuKGZhbHNlKTtcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlckhlYWRlcihpc0FkZGluZyA/ICdBZGQgTmV3czonIDogJ0VkaXQgTmV3cycpO1xuICAgICAgICB0aGlzLnZpZXcucmVuZGVyRWRpdEZvcm0oaXRlbSk7XG4gICAgICAgIHRoaXMudmlldy5vblN1Ym1pdEVkaXRGb3JtKGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYoaXNBZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm1vZGVsLnNlbmROZXdOZXdzSXRlbShmb3JtRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubW9kZWwudXBkYXRlTmV3c0l0ZW0oZm9ybURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkVXNlclBhZ2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjbGVhclBhZ2UoKSB7XG4gICAgICAgIHRoaXMudmlldy50b2dnbGVTZWFyY2hCYXIoZmFsc2UpO1xuICAgICAgICB0aGlzLnZpZXcudG9nZ2xlQWRkQnRuKGZhbHNlKTtcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlckhlYWRlcignJyk7XG4gICAgfVxufSIsImltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJ3Jvb3Qvc3JjL2NvbnN0YW50cy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtY29udGVudCcpO1xuICAgICAgICB0aGlzLmFwcExvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtbG9hZGVyJyk7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1iYXInKTtcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZmllbGQnKTtcblxuICAgICAgICB0aGlzLnNlYXJjaEJ0bj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idG4nKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2gtYnRuJyk7XG4gICAgICAgIHRoaXMuYWRkTmV3c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbmV3cy1idG4nKTtcblxuICAgICAgICB0aGlzLnVzZXJQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXItcGFnZS1idG4nKTtcbiAgICAgICAgdGhpcy5zaWduSW5QYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZ24taW4tcGFnZS1idG4nKTtcbiAgICAgICAgdGhpcy5zaWduT3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZ24tb3V0LWJ0bicpO1xuICAgICAgICB0aGlzLm1haW5QYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tcGFnZS1idG4nKTtcblxuICAgICAgICB0aGlzLnNpZ25JbkJ0biA9IG51bGw7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uQnRuID0gbnVsbDtcblxuICAgICAgICB0aGlzLm5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1oZWFkZXInKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlck5ld3MobmV3cywgaXNFZGl0TW9kZSkge1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYS5pbm5lckhUTUwgPSBDT05TVEFOVFMuRU1QVFlfVkFMVUU7XG4gICAgICAgIG5ld3MuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5yZW5kZXJOZXdzQ2FyZChpdGVtLCBpc0VkaXRNb2RlKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTmV3c0NhcmQoaXRlbSwgaXNFZGl0TW9kZSkge1xuICAgICAgICBjb25zdCB7IGlkLCBzb3VyY2U6IHsgbmFtZTogc291cmNlTmFtZSB9LCBkZXNjcmlwdGlvbiwgcHVibGlzaGVkQXQsIHRpdGxlLCB1cmxUb0ltYWdlLCB1cmwgfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IG5ld3NDYXJkVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGluayBjYXJkc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3VybFRvSW1hZ2UgfHwgQ09OU1RBTlRTLk5PX0lNQUdFX1VSTH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIG5ld3MtY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2lzRWRpdE1vZGUgPyBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBpY29uIGJ1dHRvblwiIGRhdGEtbGFiZWw9XCJlZGl0LWJ0blwiIGRhdGEtaWQ9JHtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImVkaXQgaWNvblwiIGRhdGEtbGFiZWw9XCJlZGl0LWJ0blwiIGRhdGEtaWQ9JHtpZH0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGljb24gYnV0dG9uXCIgZGF0YS1sYWJlbD1cImRlbGV0ZS1idG5cIiBkYXRhLWlkPSR7aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ3aW5kb3cgY2xvc2UgaWNvblwiIGRhdGEtbGFiZWw9XCJkZWxldGUtYnRuXCIgZGF0YS1pZD0ke2lkfT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgOiBDT05TVEFOVFMuRU1QVFlfVkFMVUV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtzb3VyY2VOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbiB8fCBDT05TVEFOVFMuRU1QVFlfVkFMVUV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEgY29udGVudCBjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyaWdodCBmbG9hdGVkXCI+JHt0aGlzLmZvcm1hdERhdGEocHVibGlzaGVkQXQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3VybH1cIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgcmlnaHQgbGFiZWxlZCBpY29uIGJ1dHRvbiB0aW55IGNhcmQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaWdodCBjaGV2cm9uIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYS5pbm5lckhUTUwgKz0gbmV3c0NhcmRUZW1wbGF0ZTtcbiAgICAgICAgaWYoaXNFZGl0TW9kZSkge1xuICAgICAgICAgICAgdGhpcy5lZGl0XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyRWRpdEZvcm0oaXRlbSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsVG9JbWFnZSwgdXJsIH0gPSBpdGVtO1xuICAgICAgICBjb25zdCBlZGl0TmV3c1RlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ1aSBmb3JtIGVkaXQtZm9ybVwiIGlkPVwiZWRpdC1mb3JtXCIgZGF0YS1pZD0ke2lkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHZhbHVlPVwiJHt0aXRsZSB8fCBDT05TVEFOVFMuRU1QVFlfVkFMVUV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgdmFsdWU9XCIke2Rlc2NyaXB0aW9uIHx8IENPTlNUQU5UUy5FTVBUWV9WQUxVRX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkltYWdlIFVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXJsVG9JbWFnZVwiIHBsYWNlaG9sZGVyPVwiSW1hZ2UgVVJMXCIgdmFsdWU9XCIke3VybFRvSW1hZ2UgfHwgQ09OU1RBTlRTLkVNUFRZX1ZBTFVFfVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U291cmNlIFVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXJsXCIgcGxhY2Vob2xkZXI9XCJTb3VyY2UgVVJMXCIgdmFsdWU9XCIke3VybCB8fCBDT05TVEFOVFMuRU1QVFlfVkFMVUV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5gO1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYS5pbm5lckhUTUwgPSBlZGl0TmV3c1RlbXBsYXRlO1xuICAgIH07XG5cbiAgICByZW5kZXJMb2dpbkZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGVkaXROZXdzVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInVpIGZvcm1cIiBpZD1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxvZ2luPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJMb2dpblwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBlcnJvciBtZXNzYWdlXCIgaWQ9XCJsb2dpbi1mb3JtLWVycm9yLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBpZD1cInNpZ24taW4tYnRuXCI+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJyZWdpc3RyYXRpb24tYnRuXCI+UmVnaXN0cmF0aW9uPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+YDtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudEFyZWEuaW5uZXJIVE1MID0gZWRpdE5ld3NUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4tZm9ybScpO1xuICAgICAgICB0aGlzLnNpZ25JbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWduLWluLWJ0bicpO1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3RyYXRpb24tYnRuJyk7XG4gICAgfTtcblxuICAgIHJlbmRlck5ld3NIZWFkZXIoKSB7XG4gICAgICAgIHRoaXMubmV3c0hlYWRlci5pbm5lclRleHQgPSB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlXG4gICAgICAgICAgICA/IGBcIiR7dGhpcy5zZWFyY2hGaWVsZC52YWx1ZS50b1VwcGVyQ2FzZSgpfVwiIHNlYXJjaCByZXN1bHRzOmBcbiAgICAgICAgICAgIDogJ1RvcCBOZXdzOic7XG4gICAgfVxuXG4gICAgcmVuZGVyQXV0aEVycm9yKGVycm9yVGV4dCkge1xuICAgICAgICBjb25zdCBlcnJvckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0tZXJyb3ItYmxvY2snKTtcbiAgICAgICAgZXJyb3JCbG9jay5pbm5lclRleHQgPSBlcnJvclRleHQ7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICB9XG5cbiAgICByZW5kZXJIZWFkZXIoaGVhZGVyTmFtZSkge1xuICAgICAgICB0aGlzLm5ld3NIZWFkZXIuaW5uZXJUZXh0ID0gaGVhZGVyTmFtZTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyRW1wdHlSZXN1bHQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTWVzc2FnZShDT05TVEFOVFMuTk9fU0VBUkNIX1JFU1VMVF9URVhUKTtcbiAgICB9XG5cbiAgICByZW5kZXJFcnJvck1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTWVzc2FnZShDT05TVEFOVFMuRVJST1JfVEVYVCk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRBcmVhLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMiBjbGFzcz0nZXJyb3IgbWVzc2FnZSc+JHttZXNzYWdlfTwvaDI+YDtcbiAgICB9XG5cbiAgICB0b2dnbGVBZGRCdG4oaXNEaXNwbGF5KSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRWxlbURpc3BsYXlpbmcodGhpcy5hZGROZXdzQnRuLCBpc0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIHRvZ2dsZVVzZXJCdG4oaXNEaXNwbGF5LCB1c2VyTmFtZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUVsZW1EaXNwbGF5aW5nKHRoaXMudXNlclBhZ2VCdG4sIGlzRGlzcGxheSk7XG4gICAgICAgIHRoaXMudXNlclBhZ2VCdG4uaW5uZXJUZXh0ID0gdXNlck5hbWU7XG4gICAgfVxuXG4gICAgc3dpdGNoU2lnbkJ0bnMoaXNTaWduSW4pIHtcbiAgICAgICAgdGhpcy50b2dnbGVFbGVtRGlzcGxheWluZyh0aGlzLnNpZ25PdXRCdG4sICFpc1NpZ25Jbik7XG4gICAgICAgIHRoaXMudG9nZ2xlRWxlbURpc3BsYXlpbmcodGhpcy5zaWduSW5QYWdlQnRuLCBpc1NpZ25Jbik7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2VhcmNoQmFyKGlzRGlzcGxheSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUVsZW1EaXNwbGF5aW5nKHRoaXMuc2VhcmNoQmFyLCBpc0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIHRvZ2dsZUVsZW1EaXNwbGF5aW5nKGVsZW0sIGlzRGlzcGxheSkge1xuICAgICAgICBpZiAoaXNEaXNwbGF5KSB7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyUGFnZUNvbnRlbnQoKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRBcmVhLmlubmVySFRNTCA9IENPTlNUQU5UUy5FTVBUWV9WQUxVRTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWFyY2hCYXIoZmFsc2UpO1xuICAgIH1cblxuICAgIG1hbmFnZUxvYWRlcihpc0Rpc2FibGUsIG1pbkRlbGF5ID0gNTAwKSB7XG4gICAgICAgIGlmIChpc0Rpc2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwTG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFwcExvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgbWluRGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9ybWF0RGF0YShkYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0RhdGVTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBvblNlYXJjaE5ld3MoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hGaWVsZC52YWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5zZWFyY2hGaWVsZC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLnNlYXJjaEZpZWxkLnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZnJlc2hOZXdzKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRmllbGQudmFsdWUgPSBDT05TVEFOVFMuRU1QVFlfVkFMVUU7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdEVkaXRGb3JtKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZm9ybScpO1xuICAgICAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBlZGl0Rm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogZWRpdEZvcm1bJ3RpdGxlJ10udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVkaXRGb3JtWydkZXNjcmlwdGlvbiddLnZhbHVlLFxuICAgICAgICAgICAgICAgIHVybFRvSW1hZ2U6IGVkaXRGb3JtWyd1cmxUb0ltYWdlJ10udmFsdWUsXG4gICAgICAgICAgICAgICAgdXJsOiBlZGl0Rm9ybVsndXJsJ10udmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYWxsYmFjayhmb3JtRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU2lnbkluQnRuKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2lnbkluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5sb2dpbkZvcm1bJ3VzZXJuYW1lJ10udmFsdWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMubG9naW5Gb3JtWydwYXNzd29yZCddLnZhbHVlLFxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FsbGJhY2soZm9ybURhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZ2lzdHJhdGlvbkJ0bihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMubG9naW5Gb3JtWyd1c2VybmFtZSddLnZhbHVlLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmxvZ2luRm9ybVsncGFzc3dvcmQnXS52YWx1ZSxcblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGZvcm1EYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25BZGROZXdzKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYWRkTmV3c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBvbkVkaXROZXdzSXRlbShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwnKSA9PT0gJ2VkaXQtYnRuJykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRGVsZXRlSXRlbShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwnKSA9PT0gJ2RlbGV0ZS1idG4nKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25Vc2VyUGFnZUJ0bihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnVzZXJQYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9uU2lnbkluUGFnZUJ0bihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnNpZ25JblBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb25TaWduT3V0QnRuKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2lnbk91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBvbk1haW5QYWdlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubWFpblBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBDT05TVEFOVFMgPSB7XG4gICAgQVBJX0tFWTogJzA3MDVlN2RjZDAxMTRhZmRiMmU4OTdkMDYzNWFmYzI5JyxcbiAgICBCQVNFX1VSTDogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICBnZXQgREVGQVVMVF9ORVdTX1VSTCgpIHtcbiAgICAgICAgcmV0dXJuIGBodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/Y291bnRyeT11cyZhcGlLZXk9JHt0aGlzLkFQSV9LRVl9YFxuICAgIH0sXG4gICAgZ2V0IE5PX0lNQUdFX1VSTCgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuQkFTRV9VUkx9L2Fzc2V0cy9uby1pbWFnZS1ib3gucG5nYDtcbiAgICB9LFxuICAgIEdFVF9RVUVSWV9ORVdTX1VSTChxdWVyeSkge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPSR7cXVlcnl9JmFwaUtleT0ke3RoaXMuQVBJX0tFWX1gXG4gICAgfSxcbiAgICBFTVBUWV9WQUxVRTogJycsXG4gICAgTk9fU0VBUkNIX1JFU1VMVF9URVhUOiAnTm8gU2VhcmNoIFJlc3VsdHMnLFxuICAgIEVSUk9SX1RFWFQ6ICdEYXRhIExvYWRpbmcgRXJyb3InLFxuICAgIGdldCBNWV9ORVdTX1VSTCgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuQkFTRV9VUkx9L2FwaS9teS1uZXdzYDtcbiAgICB9LFxuICAgIGdldCBMT0dJTl9VUkwoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLkJBU0VfVVJMfS9hcGkvbG9naW5gO1xuICAgIH0sXG4gICAgZ2V0IExPR09VVF9VUkwoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLkJBU0VfVVJMfS9hcGkvbG9nb3V0YDtcbiAgICB9LFxuICAgIGdldCBSRUdJU1RSQVRJT05fVVJMKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5CQVNFX1VSTH0vYXBpL3JlZ2lzdHJhdGlvbmA7XG4gICAgfSxcbiAgICBIVFRQX1NUQVRVU0VTOiB7XG4gICAgICAgIE9LOiAyMDAsXG4gICAgICAgIFVOQVVUSE9SSVpFRDogNDAxLFxuICAgICAgICBOT1RfRk9VTkQ6IDQwNFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9