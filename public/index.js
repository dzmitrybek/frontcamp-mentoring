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
                return _context5.abrupt("return", data);

              case 7:
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
                return fetch(root_src_constants_js__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].MY_NEWS_URL, {
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
      this.view.onSignInBtn(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(loginData) {
          var userName;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _this2.model.login(loginData);

                case 3:
                  userName = _context2.sent;

                  _this2.view.toggleUserBtn(true, userName);

                  _this2.loadUserPage();

                  _this2.view.switchSignBtns(false);

                  _this2.view.toggle(false);

                  _context2.next = 13;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2["catch"](0);

                  _this2.view.renderAuthError(_context2.t0.message);

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[0, 10]]);
        }));

        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }());
      this.view.onRegistrationBtn(function (loginData) {
        _this2.model.registration(loginData);
      });
    }
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
                    var _ref2 = _asyncToGenerator(
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

                    return function (_x3) {
                      return _ref2.apply(this, arguments);
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
        var _ref3 = _asyncToGenerator(
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

        return function (_x4) {
          return _ref3.apply(this, arguments);
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
      this.addNewsBtn.addEventListener('click', function () {
        callback();
      });
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
      this.userPageBtn.addEventListener('click', function () {
        callback();
      });
    }
  }, {
    key: "onSignInPageBtn",
    value: function onSignInPageBtn(callback) {
      this.signInPageBtn.addEventListener('click', function () {
        callback();
      });
    }
  }, {
    key: "onSignOutBtn",
    value: function onSignOutBtn(callback) {
      this.signOutBtn.addEventListener('click', function () {
        callback();
      });
    }
  }, {
    key: "onMainPage",
    value: function onMainPage(callback) {
      this.mainPageBtn.addEventListener('click', function () {
        callback();
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlLnNjc3M/NDg3MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL0FwcE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvQXBwUHJlc2VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbImFwcFZpZXciLCJBcHBWaWV3IiwiYXBwTW9kZWwiLCJBcHBNb2RlbCIsImFwcFByZXNlbnRlciIsIkFwcFByZXNlbnRlciIsImluaXQiLCJteU5ld3NEYXRhU2V0IiwicXVlcnkiLCJmZXRjaCIsIkNPTlNUQU5UUyIsIkdFVF9RVUVSWV9ORVdTX1VSTCIsIkRFRkFVTFRfTkVXU19VUkwiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiYXJ0aWNsZXMiLCJNWV9ORVdTX1VSTCIsIm1hcCIsIml0ZW0iLCJpZCIsIl9pZCIsInVzZXJEYXRhIiwiTE9HSU5fVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiSFRUUF9TVEFUVVNFUyIsIlVOQVVUSE9SSVpFRCIsIkVycm9yIiwidXNlck5hbWUiLCJMT0dPVVRfVVJMIiwiUkVHSVNUUkFUSU9OX1VSTCIsIm5ld3NJdGVtIiwic291cmNlIiwibmFtZSIsInB1Ymxpc2hlZEF0IiwiRGF0ZSIsInVybFRvSW1hZ2UiLCJOT19JTUFHRV9VUkwiLCJmaW5kIiwiZSIsImFyZ3MiLCJ2aWV3IiwibW9kZWwiLCJsb2FkTWFpblBhZ2UiLCJvblNlYXJjaE5ld3MiLCJvblJlZnJlc2hOZXdzIiwib25BZGROZXdzIiwibG9hZEVkaXRQYWdlIiwib25Vc2VyUGFnZUJ0biIsImxvYWRVc2VyUGFnZSIsIm9uTWFpblBhZ2UiLCJvblNpZ25JblBhZ2VCdG4iLCJsb2FkTG9naW5QYWdlIiwib25TaWduT3V0QnRuIiwibG9nb3V0IiwibWFuYWdlTG9hZGVyIiwiZ2V0TmV3cyIsInRvZ2dsZVNlYXJjaEJhciIsInRvZ2dsZUFkZEJ0biIsInJlbmRlck5ld3NIZWFkZXIiLCJsZW5ndGgiLCJyZW5kZXJOZXdzIiwicmVuZGVyRW1wdHlSZXN1bHQiLCJyZW5kZXJFcnJvck1lc3NhZ2UiLCJjbGVhclBhZ2UiLCJyZW5kZXJMb2dpbkZvcm0iLCJvblNpZ25JbkJ0biIsImxvZ2luRGF0YSIsImxvZ2luIiwidG9nZ2xlVXNlckJ0biIsInN3aXRjaFNpZ25CdG5zIiwidG9nZ2xlIiwicmVuZGVyQXV0aEVycm9yIiwibWVzc2FnZSIsIm9uUmVnaXN0cmF0aW9uQnRuIiwicmVnaXN0cmF0aW9uIiwiZ2V0TXlOZXdzIiwicmVuZGVySGVhZGVyIiwib25FZGl0TmV3c0l0ZW0iLCJlbGVtIiwiZ2V0TXlOZXdzQnlJZCIsIm9uRGVsZXRlSXRlbSIsImRlbGV0ZU5ld3NJdGVtIiwiaXNBZGRpbmciLCJyZW5kZXJFZGl0Rm9ybSIsIm9uU3VibWl0RWRpdEZvcm0iLCJmb3JtRGF0YSIsInNlbmROZXdOZXdzSXRlbSIsInVwZGF0ZU5ld3NJdGVtIiwibWFpbkNvbnRlbnRBcmVhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwTG9hZGVyIiwic2VhcmNoQmFyIiwic2VhcmNoRmllbGQiLCJzZWFyY2hCdG4iLCJyZWZyZXNoQnRuIiwiYWRkTmV3c0J0biIsInVzZXJQYWdlQnRuIiwic2lnbkluUGFnZUJ0biIsInNpZ25PdXRCdG4iLCJtYWluUGFnZUJ0biIsInNpZ25JbkJ0biIsInJlZ2lzdHJhdGlvbkJ0biIsIm5ld3NIZWFkZXIiLCJsb2dpbkZvcm0iLCJuZXdzIiwiaXNFZGl0TW9kZSIsImlubmVySFRNTCIsIkVNUFRZX1ZBTFVFIiwiZm9yRWFjaCIsInJlbmRlck5ld3NDYXJkIiwic291cmNlTmFtZSIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJ1cmwiLCJuZXdzQ2FyZFRlbXBsYXRlIiwiZm9ybWF0RGF0YSIsImVkaXQiLCJlZGl0TmV3c1RlbXBsYXRlIiwiaW5uZXJUZXh0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsImVycm9yVGV4dCIsImVycm9yQmxvY2siLCJjbGFzc0xpc3QiLCJhZGQiLCJoZWFkZXJOYW1lIiwicmVuZGVyTWVzc2FnZSIsIk5PX1NFQVJDSF9SRVNVTFRfVEVYVCIsIkVSUk9SX1RFWFQiLCJpc0Rpc3BsYXkiLCJ0b2dnbGVFbGVtRGlzcGxheWluZyIsImlzU2lnbkluIiwicmVtb3ZlIiwiaXNEaXNhYmxlIiwibWluRGVsYXkiLCJzZXRUaW1lb3V0IiwiZGF0ZSIsInRvRGF0ZVN0cmluZyIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsImVkaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJnZXRBdHRyaWJ1dGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGFyZ2V0IiwiQVBJX0tFWSIsIkJBU0VfVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJPSyIsIk5PVF9GT1VORCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FB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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFsQyxFQUEyQyxZQUFNO0FBQzdDRCxnQkFBUTtBQUNYLE9BRkQ7QUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelNMO0FBQUE7QUFBTyxJQUFNdkksU0FBUyxHQUFHO0FBQ3JCaUosU0FBTyxFQUFFLGtDQURZO0FBRXJCQyxVQUFRLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFGTDs7QUFHckIsTUFBSW5KLGdCQUFKLEdBQXVCO0FBQ25CLDRFQUFpRSxLQUFLK0ksT0FBdEU7QUFDSCxHQUxvQjs7QUFNckIsTUFBSWpILFlBQUosR0FBbUI7QUFDZixxQkFBVSxLQUFLa0gsUUFBZjtBQUNILEdBUm9COztBQVNyQmpKLG9CQVRxQiw4QkFTRkgsS0FURSxFQVNLO0FBQ3RCLHlEQUE4Q0EsS0FBOUMscUJBQThELEtBQUttSixPQUFuRTtBQUNILEdBWG9CO0FBWXJCekMsYUFBVyxFQUFFLEVBWlE7QUFhckJvQix1QkFBcUIsRUFBRSxtQkFiRjtBQWNyQkMsWUFBVSxFQUFFLG9CQWRTOztBQWVyQixNQUFJdEgsV0FBSixHQUFrQjtBQUNkLHFCQUFVLEtBQUsySSxRQUFmO0FBQ0gsR0FqQm9COztBQWtCckIsTUFBSXJJLFNBQUosR0FBZ0I7QUFDWixxQkFBVSxLQUFLcUksUUFBZjtBQUNILEdBcEJvQjs7QUFxQnJCLE1BQUkxSCxVQUFKLEdBQWlCO0FBQ2IscUJBQVUsS0FBSzBILFFBQWY7QUFDSCxHQXZCb0I7O0FBd0JyQixNQUFJekgsZ0JBQUosR0FBdUI7QUFDbkIscUJBQVUsS0FBS3lILFFBQWY7QUFDSCxHQTFCb0I7O0FBMkJyQjlILGVBQWEsRUFBRTtBQUNYa0ksTUFBRSxFQUFFLEdBRE87QUFFWGpJLGdCQUFZLEVBQUUsR0FGSDtBQUdYa0ksYUFBUyxFQUFFO0FBSEE7QUEzQk0sQ0FBbEIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRlbnQtd3JhcHBlciB7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmNvbnRlbnQtYXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblxcbi5uZXdzLWhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IH1cXG5cXG4uaGVhZGVyLXJpZ2h0LWJsb2NrIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuXFxuLnVpLmNhcmRzOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IC44NzVlbTsgfVxcblxcbi5jYXJkLWZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgLmNhcmQtZm9vdGVyIC5jYXJkLWJ0biB7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7IH1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIHdpZHRoOiA2MCU7IH1cXG5cXG4jYXBwLWNvbnRlbnQgLm1lc3NhZ2Uge1xcbiAgbWFyZ2luLXRvcDogNDBweDsgfVxcblxcbiNhcHAtY29udGVudCAuZXJyb3Ige1xcbiAgY29sb3I6ICNkMTRkNGQ7IH1cXG5cXG4jYXBwLWxvYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5hZGQtbmV3cy1idG4ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IH1cXG5cXG4uZWRpdC1mb3JtIHtcXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmZvcm0tY29udGVudC13cmFwcGVyIHtcXG4gIHdpZHRoOiA1MCU7IH1cXG5cXG4jYXBwLWNvbnRlbnQgLm5ld3MtY2FyZC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XFxuXFxuI2FwcC1jb250ZW50IC5uZXdzLWNhcmQtaGVhZGVyID4gc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgJ3Jvb3QvYXNzZXRzL3N0eWxlLnNjc3MnXG5cbmltcG9ydCBBcHBQcmVzZW50ZXIgZnJvbSAncm9vdC9zcmMvYXBwL0FwcFByZXNlbnRlcic7XG5pbXBvcnQgQXBwVmlldyBmcm9tICdyb290L3NyYy9hcHAvQXBwVmlldyc7XG5pbXBvcnQgQXBwTW9kZWwgZnJvbSAncm9vdC9zcmMvYXBwL0FwcE1vZGVsJztcblxuY29uc3QgYXBwVmlldyA9IG5ldyBBcHBWaWV3KCk7XG5jb25zdCBhcHBNb2RlbCA9IG5ldyBBcHBNb2RlbCgpO1xuY29uc3QgYXBwUHJlc2VudGVyID0gbmV3IEFwcFByZXNlbnRlcihhcHBWaWV3LCBhcHBNb2RlbCk7XG5cbmFwcFByZXNlbnRlci5pbml0KCk7XG4iLCJpbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICdyb290L3NyYy9jb25zdGFudHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubXlOZXdzRGF0YVNldCA9IFtdO1xuICAgIH1cblxuICAgIGFzeW5jIGdldE5ld3MocXVlcnkpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChxdWVyeSA/IENPTlNUQU5UUy5HRVRfUVVFUllfTkVXU19VUkwocXVlcnkpIDogQ09OU1RBTlRTLkRFRkFVTFRfTkVXU19VUkwpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5hcnRpY2xlcztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNeU5ld3MoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQ09OU1RBTlRTLk1ZX05FV1NfVVJMKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgdGhpcy5teU5ld3NEYXRhU2V0ID0gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uaWQgPSBpdGVtLl9pZDtcbiAgICAgICAgICAgIGRlbGV0ZSBpdGVtLl9pZDtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMubXlOZXdzRGF0YVNldDtcbiAgICB9XG5cbiAgICBhc3luYyBsb2dpbih1c2VyRGF0YSkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKENPTlNUQU5UUy5MT0dJTl9VUkwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IENPTlNUQU5UUy5IVFRQX1NUQVRVU0VTLlVOQVVUSE9SSVpFRCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS51c2VyTmFtZTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2dvdXQoKSB7XG4gICAgICAgIGF3YWl0IGZldGNoKENPTlNUQU5UUy5MT0dPVVRfVVJMKTtcbiAgICB9XG5cbiAgICBhc3luYyByZWdpc3RyYXRpb24odXNlckRhdGEpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChDT05TVEFOVFMuUkVHSVNUUkFUSU9OX1VSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBhc3luYyBzZW5kTmV3TmV3c0l0ZW0obmV3c0l0ZW0pIHtcbiAgICAgICAgbmV3c0l0ZW0uc291cmNlID0geyBuYW1lOiAnT3duIE5ld3MnIH07XG4gICAgICAgIG5ld3NJdGVtLnB1Ymxpc2hlZEF0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbmV3c0l0ZW0udXJsVG9JbWFnZSA9IG5ld3NJdGVtLnVybFRvSW1hZ2UgfHwgQ09OU1RBTlRTLk5PX0lNQUdFX1VSTDtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKENPTlNUQU5UUy5NWV9ORVdTX1VSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdzSXRlbSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZU5ld3NJdGVtKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5zb3VyY2UgPSB7IG5hbWU6ICdPd24gTmV3cycgfTtcbiAgICAgICAgaXRlbS5wdWJsaXNoZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGl0ZW0uX2lkID0gaXRlbS5pZDtcbiAgICAgICAgZGVsZXRlIGl0ZW0uaWQ7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChDT05TVEFOVFMuTVlfTkVXU19VUkwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpdGVtKVxuICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVsZXRlTmV3c0l0ZW0oaWQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtDT05TVEFOVFMuTVlfTkVXU19VUkx9LyR7aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0TXlOZXdzQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5teU5ld3NEYXRhU2V0LmZpbmQoKGUpID0+IGUuaWQgPT09IGlkKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwUHJlc2VudGVyIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIFt0aGlzLnZpZXcsIHRoaXMubW9kZWxdID0gYXJncztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmxvYWRNYWluUGFnZSgpO1xuICAgICAgICB0aGlzLnZpZXcub25TZWFyY2hOZXdzKChxdWVyeSkgPT4gdGhpcy5sb2FkTWFpblBhZ2UocXVlcnkpKTtcbiAgICAgICAgdGhpcy52aWV3Lm9uUmVmcmVzaE5ld3MoKCkgPT4gdGhpcy5sb2FkTWFpblBhZ2UoKSk7XG4gICAgICAgIHRoaXMudmlldy5vbkFkZE5ld3MoKCkgPT4gdGhpcy5sb2FkRWRpdFBhZ2Uoe30sIHRydWUpKTtcbiAgICAgICAgdGhpcy52aWV3Lm9uVXNlclBhZ2VCdG4oKCkgPT4gdGhpcy5sb2FkVXNlclBhZ2UoKSk7XG4gICAgICAgIHRoaXMudmlldy5vbk1haW5QYWdlKCgpID0+IHRoaXMubG9hZE1haW5QYWdlKCkpO1xuICAgICAgICB0aGlzLnZpZXcub25TaWduSW5QYWdlQnRuKCgpID0+IHRoaXMubG9hZExvZ2luUGFnZSgpKTtcbiAgICAgICAgdGhpcy52aWV3Lm9uU2lnbk91dEJ0bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTWFpblBhZ2UocXVlcnkpIHtcbiAgICAgICAgdGhpcy52aWV3Lm1hbmFnZUxvYWRlcih0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLm1vZGVsLmdldE5ld3MocXVlcnkpIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVNlYXJjaEJhcih0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVBZGRCdG4oZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlck5ld3NIZWFkZXIoKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXJOZXdzKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcucmVuZGVyRW1wdHlSZXN1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXJFcnJvck1lc3NhZ2UoKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcubWFuYWdlTG9hZGVyKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZExvZ2luUGFnZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhclBhZ2UoKTtcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlckxvZ2luRm9ybSgpO1xuICAgICAgICB0aGlzLnZpZXcub25TaWduSW5CdG4oYXN5bmMgKGxvZ2luRGF0YSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IGF3YWl0IHRoaXMubW9kZWwubG9naW4obG9naW5EYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcudG9nZ2xlVXNlckJ0bih0cnVlLCB1c2VyTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVXNlclBhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc3dpdGNoU2lnbkJ0bnMoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGUoZmFsc2UpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcucmVuZGVyQXV0aEVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlldy5vblJlZ2lzdHJhdGlvbkJ0bigobG9naW5EYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnJlZ2lzdHJhdGlvbihsb2dpbkRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2dvdXQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubW9kZWwubG9nb3V0KCk7XG4gICAgICAgIHRoaXMudmlldy5zd2l0Y2hTaWduQnRucyh0cnVlKTtcbiAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVVzZXJCdG4oZmFsc2UpO1xuICAgICAgICB0aGlzLmxvYWRNYWluUGFnZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRVc2VyUGFnZSgpIHtcbiAgICAgICAgdGhpcy52aWV3Lm1hbmFnZUxvYWRlcih0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLm1vZGVsLmdldE15TmV3cygpIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVNlYXJjaEJhcihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnZpZXcudG9nZ2xlQWRkQnRuKHRydWUpO1xuICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlckhlYWRlcignTXkgTmV3czonKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlck5ld3MoZGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Lm9uRWRpdE5ld3NJdGVtKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5tb2RlbC5nZXRNeU5ld3NCeUlkKGlkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRFZGl0UGFnZShlbGVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcub25EZWxldGVJdGVtKGFzeW5jIChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm1vZGVsLmRlbGV0ZU5ld3NJdGVtKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVXNlclBhZ2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnJlbmRlckVtcHR5UmVzdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcucmVuZGVyRXJyb3JNZXNzYWdlKCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy52aWV3Lm1hbmFnZUxvYWRlcihmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRFZGl0UGFnZShpdGVtLCBpc0FkZGluZykge1xuICAgICAgICB0aGlzLnZpZXcudG9nZ2xlQWRkQnRuKGZhbHNlKTtcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlckhlYWRlcihpc0FkZGluZyA/ICdBZGQgTmV3czonIDogJ0VkaXQgTmV3cycpO1xuICAgICAgICB0aGlzLnZpZXcucmVuZGVyRWRpdEZvcm0oaXRlbSk7XG4gICAgICAgIHRoaXMudmlldy5vblN1Ym1pdEVkaXRGb3JtKGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYoaXNBZGRpbmcpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm1vZGVsLnNlbmROZXdOZXdzSXRlbShmb3JtRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubW9kZWwudXBkYXRlTmV3c0l0ZW0oZm9ybURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkVXNlclBhZ2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjbGVhclBhZ2UoKSB7XG4gICAgICAgIHRoaXMudmlldy50b2dnbGVTZWFyY2hCYXIoZmFsc2UpO1xuICAgICAgICB0aGlzLnZpZXcudG9nZ2xlQWRkQnRuKGZhbHNlKTtcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlckhlYWRlcignJyk7XG4gICAgfVxufSIsImltcG9ydCB7IENPTlNUQU5UUyB9IGZyb20gJ3Jvb3Qvc3JjL2NvbnN0YW50cy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtY29udGVudCcpO1xuICAgICAgICB0aGlzLmFwcExvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtbG9hZGVyJyk7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1iYXInKTtcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZmllbGQnKTtcblxuICAgICAgICB0aGlzLnNlYXJjaEJ0bj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idG4nKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2gtYnRuJyk7XG4gICAgICAgIHRoaXMuYWRkTmV3c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbmV3cy1idG4nKTtcblxuICAgICAgICB0aGlzLnVzZXJQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXItcGFnZS1idG4nKTtcbiAgICAgICAgdGhpcy5zaWduSW5QYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZ24taW4tcGFnZS1idG4nKTtcbiAgICAgICAgdGhpcy5zaWduT3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZ24tb3V0LWJ0bicpO1xuICAgICAgICB0aGlzLm1haW5QYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tcGFnZS1idG4nKTtcblxuICAgICAgICB0aGlzLnNpZ25JbkJ0biA9IG51bGw7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uQnRuID0gbnVsbDtcblxuICAgICAgICB0aGlzLm5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1oZWFkZXInKTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlck5ld3MobmV3cywgaXNFZGl0TW9kZSkge1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYS5pbm5lckhUTUwgPSBDT05TVEFOVFMuRU1QVFlfVkFMVUU7XG4gICAgICAgIG5ld3MuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5yZW5kZXJOZXdzQ2FyZChpdGVtLCBpc0VkaXRNb2RlKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTmV3c0NhcmQoaXRlbSwgaXNFZGl0TW9kZSkge1xuICAgICAgICBjb25zdCB7IGlkLCBzb3VyY2U6IHsgbmFtZTogc291cmNlTmFtZSB9LCBkZXNjcmlwdGlvbiwgcHVibGlzaGVkQXQsIHRpdGxlLCB1cmxUb0ltYWdlLCB1cmwgfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IG5ld3NDYXJkVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGluayBjYXJkc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3VybFRvSW1hZ2UgfHwgQ09OU1RBTlRTLk5PX0lNQUdFX1VSTH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIG5ld3MtY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2lzRWRpdE1vZGUgPyBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBpY29uIGJ1dHRvblwiIGRhdGEtbGFiZWw9XCJlZGl0LWJ0blwiIGRhdGEtaWQ9JHtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImVkaXQgaWNvblwiIGRhdGEtbGFiZWw9XCJlZGl0LWJ0blwiIGRhdGEtaWQ9JHtpZH0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGljb24gYnV0dG9uXCIgZGF0YS1sYWJlbD1cImRlbGV0ZS1idG5cIiBkYXRhLWlkPSR7aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ3aW5kb3cgY2xvc2UgaWNvblwiIGRhdGEtbGFiZWw9XCJkZWxldGUtYnRuXCIgZGF0YS1pZD0ke2lkfT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgOiBDT05TVEFOVFMuRU1QVFlfVkFMVUV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtzb3VyY2VOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbiB8fCBDT05TVEFOVFMuRU1QVFlfVkFMVUV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEgY29udGVudCBjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyaWdodCBmbG9hdGVkXCI+JHt0aGlzLmZvcm1hdERhdGEocHVibGlzaGVkQXQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3VybH1cIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgcmlnaHQgbGFiZWxlZCBpY29uIGJ1dHRvbiB0aW55IGNhcmQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaWdodCBjaGV2cm9uIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYS5pbm5lckhUTUwgKz0gbmV3c0NhcmRUZW1wbGF0ZTtcbiAgICAgICAgaWYoaXNFZGl0TW9kZSkge1xuICAgICAgICAgICAgdGhpcy5lZGl0XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyRWRpdEZvcm0oaXRlbSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsVG9JbWFnZSwgdXJsIH0gPSBpdGVtO1xuICAgICAgICBjb25zdCBlZGl0TmV3c1RlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ1aSBmb3JtIGVkaXQtZm9ybVwiIGlkPVwiZWRpdC1mb3JtXCIgZGF0YS1pZD0ke2lkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHZhbHVlPVwiJHt0aXRsZSB8fCBDT05TVEFOVFMuRU1QVFlfVkFMVUV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgdmFsdWU9XCIke2Rlc2NyaXB0aW9uIHx8IENPTlNUQU5UUy5FTVBUWV9WQUxVRX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkltYWdlIFVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXJsVG9JbWFnZVwiIHBsYWNlaG9sZGVyPVwiSW1hZ2UgVVJMXCIgdmFsdWU9XCIke3VybFRvSW1hZ2UgfHwgQ09OU1RBTlRTLkVNUFRZX1ZBTFVFfVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U291cmNlIFVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXJsXCIgcGxhY2Vob2xkZXI9XCJTb3VyY2UgVVJMXCIgdmFsdWU9XCIke3VybCB8fCBDT05TVEFOVFMuRU1QVFlfVkFMVUV9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5gO1xuICAgICAgICB0aGlzLm1haW5Db250ZW50QXJlYS5pbm5lckhUTUwgPSBlZGl0TmV3c1RlbXBsYXRlO1xuICAgIH07XG5cbiAgICByZW5kZXJMb2dpbkZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGVkaXROZXdzVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInVpIGZvcm1cIiBpZD1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxvZ2luPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJMb2dpblwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBlcnJvciBtZXNzYWdlXCIgaWQ9XCJsb2dpbi1mb3JtLWVycm9yLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBpZD1cInNpZ24taW4tYnRuXCI+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJyZWdpc3RyYXRpb24tYnRuXCI+UmVnaXN0cmF0aW9uPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+YDtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudEFyZWEuaW5uZXJIVE1MID0gZWRpdE5ld3NUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4tZm9ybScpO1xuICAgICAgICB0aGlzLnNpZ25JbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWduLWluLWJ0bicpO1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3RyYXRpb24tYnRuJyk7XG4gICAgfTtcblxuICAgIHJlbmRlck5ld3NIZWFkZXIoKSB7XG4gICAgICAgIHRoaXMubmV3c0hlYWRlci5pbm5lclRleHQgPSB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlXG4gICAgICAgICAgICA/IGBcIiR7dGhpcy5zZWFyY2hGaWVsZC52YWx1ZS50b1VwcGVyQ2FzZSgpfVwiIHNlYXJjaCByZXN1bHRzOmBcbiAgICAgICAgICAgIDogJ1RvcCBOZXdzOic7XG4gICAgfVxuXG4gICAgcmVuZGVyQXV0aEVycm9yKGVycm9yVGV4dCkge1xuICAgICAgICBjb25zdCBlcnJvckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0tZXJyb3ItYmxvY2snKTtcbiAgICAgICAgZXJyb3JCbG9jay5pbm5lclRleHQgPSBlcnJvclRleHQ7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbiAgICB9XG5cbiAgICByZW5kZXJIZWFkZXIoaGVhZGVyTmFtZSkge1xuICAgICAgICB0aGlzLm5ld3NIZWFkZXIuaW5uZXJUZXh0ID0gaGVhZGVyTmFtZTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyRW1wdHlSZXN1bHQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTWVzc2FnZShDT05TVEFOVFMuTk9fU0VBUkNIX1JFU1VMVF9URVhUKTtcbiAgICB9XG5cbiAgICByZW5kZXJFcnJvck1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyTWVzc2FnZShDT05TVEFOVFMuRVJST1JfVEVYVCk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRBcmVhLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMiBjbGFzcz0nZXJyb3IgbWVzc2FnZSc+JHttZXNzYWdlfTwvaDI+YDtcbiAgICB9XG5cbiAgICB0b2dnbGVBZGRCdG4oaXNEaXNwbGF5KSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRWxlbURpc3BsYXlpbmcodGhpcy5hZGROZXdzQnRuLCBpc0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIHRvZ2dsZVVzZXJCdG4oaXNEaXNwbGF5LCB1c2VyTmFtZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUVsZW1EaXNwbGF5aW5nKHRoaXMudXNlclBhZ2VCdG4sIGlzRGlzcGxheSk7XG4gICAgICAgIHRoaXMudXNlclBhZ2VCdG4uaW5uZXJUZXh0ID0gdXNlck5hbWU7XG4gICAgfVxuXG4gICAgc3dpdGNoU2lnbkJ0bnMoaXNTaWduSW4pIHtcbiAgICAgICAgdGhpcy50b2dnbGVFbGVtRGlzcGxheWluZyh0aGlzLnNpZ25PdXRCdG4sICFpc1NpZ25Jbik7XG4gICAgICAgIHRoaXMudG9nZ2xlRWxlbURpc3BsYXlpbmcodGhpcy5zaWduSW5QYWdlQnRuLCBpc1NpZ25Jbik7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2VhcmNoQmFyKGlzRGlzcGxheSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUVsZW1EaXNwbGF5aW5nKHRoaXMuc2VhcmNoQmFyLCBpc0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIHRvZ2dsZUVsZW1EaXNwbGF5aW5nKGVsZW0sIGlzRGlzcGxheSkge1xuICAgICAgICBpZiAoaXNEaXNwbGF5KSB7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyUGFnZUNvbnRlbnQoKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRBcmVhLmlubmVySFRNTCA9IENPTlNUQU5UUy5FTVBUWV9WQUxVRTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWFyY2hCYXIoZmFsc2UpO1xuICAgIH1cblxuICAgIG1hbmFnZUxvYWRlcihpc0Rpc2FibGUsIG1pbkRlbGF5ID0gNTAwKSB7XG4gICAgICAgIGlmIChpc0Rpc2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwTG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFwcExvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSwgbWluRGVsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9ybWF0RGF0YShkYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0RhdGVTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBvblNlYXJjaE5ld3MoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hGaWVsZC52YWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5zZWFyY2hGaWVsZC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyAmJiB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLnNlYXJjaEZpZWxkLnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZnJlc2hOZXdzKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRmllbGQudmFsdWUgPSBDT05TVEFOVFMuRU1QVFlfVkFMVUU7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdEVkaXRGb3JtKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZm9ybScpO1xuICAgICAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBlZGl0Rm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogZWRpdEZvcm1bJ3RpdGxlJ10udmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVkaXRGb3JtWydkZXNjcmlwdGlvbiddLnZhbHVlLFxuICAgICAgICAgICAgICAgIHVybFRvSW1hZ2U6IGVkaXRGb3JtWyd1cmxUb0ltYWdlJ10udmFsdWUsXG4gICAgICAgICAgICAgICAgdXJsOiBlZGl0Rm9ybVsndXJsJ10udmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYWxsYmFjayhmb3JtRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uU2lnbkluQnRuKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2lnbkluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5sb2dpbkZvcm1bJ3VzZXJuYW1lJ10udmFsdWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMubG9naW5Gb3JtWydwYXNzd29yZCddLnZhbHVlLFxuXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FsbGJhY2soZm9ybURhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZ2lzdHJhdGlvbkJ0bihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMubG9naW5Gb3JtWyd1c2VybmFtZSddLnZhbHVlLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmxvZ2luRm9ybVsncGFzc3dvcmQnXS52YWx1ZSxcblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGZvcm1EYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25BZGROZXdzKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYWRkTmV3c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRWRpdE5ld3NJdGVtKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbCcpID09PSAnZWRpdC1idG4nKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25EZWxldGVJdGVtKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbCcpID09PSAnZGVsZXRlLWJ0bicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblVzZXJQYWdlQnRuKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMudXNlclBhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblNpZ25JblBhZ2VCdG4oY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zaWduSW5QYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TaWduT3V0QnRuKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2lnbk91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTWFpblBhZ2UoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5tYWluUGFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgQ09OU1RBTlRTID0ge1xuICAgIEFQSV9LRVk6ICcwNzA1ZTdkY2QwMTE0YWZkYjJlODk3ZDA2MzVhZmMyOScsXG4gICAgQkFTRV9VUkw6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgZ2V0IERFRkFVTFRfTkVXU19VUkwoKSB7XG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9dXMmYXBpS2V5PSR7dGhpcy5BUElfS0VZfWBcbiAgICB9LFxuICAgIGdldCBOT19JTUFHRV9VUkwoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLkJBU0VfVVJMfS9hc3NldHMvbm8taW1hZ2UtYm94LnBuZ2A7XG4gICAgfSxcbiAgICBHRVRfUVVFUllfTkVXU19VUkwocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIGBodHRwczovL25ld3NhcGkub3JnL3YyL2V2ZXJ5dGhpbmc/cT0ke3F1ZXJ5fSZhcGlLZXk9JHt0aGlzLkFQSV9LRVl9YFxuICAgIH0sXG4gICAgRU1QVFlfVkFMVUU6ICcnLFxuICAgIE5PX1NFQVJDSF9SRVNVTFRfVEVYVDogJ05vIFNlYXJjaCBSZXN1bHRzJyxcbiAgICBFUlJPUl9URVhUOiAnRGF0YSBMb2FkaW5nIEVycm9yJyxcbiAgICBnZXQgTVlfTkVXU19VUkwoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLkJBU0VfVVJMfS9hcGkvbXktbmV3c2A7XG4gICAgfSxcbiAgICBnZXQgTE9HSU5fVVJMKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5CQVNFX1VSTH0vYXBpL2xvZ2luYDtcbiAgICB9LFxuICAgIGdldCBMT0dPVVRfVVJMKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5CQVNFX1VSTH0vYXBpL2xvZ291dGA7XG4gICAgfSxcbiAgICBnZXQgUkVHSVNUUkFUSU9OX1VSTCgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuQkFTRV9VUkx9L2FwaS9yZWdpc3RyYXRpb25gO1xuICAgIH0sXG4gICAgSFRUUF9TVEFUVVNFUzoge1xuICAgICAgICBPSzogMjAwLFxuICAgICAgICBVTkFVVEhPUklaRUQ6IDQwMSxcbiAgICAgICAgTk9UX0ZPVU5EOiA0MDRcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==