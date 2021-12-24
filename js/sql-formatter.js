(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sqlFormatter"] = factory();
	else
		root["sqlFormatter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sqlFormatter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/Formatter.js":
/*!*******************************!*\
  !*** ./src/core/Formatter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Formatter; });
/* harmony import */ var _tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTypes */ "./src/core/tokenTypes.js");
/* harmony import */ var _Indentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Indentation */ "./src/core/Indentation.js");
/* harmony import */ var _InlineBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InlineBlock */ "./src/core/InlineBlock.js");
/* harmony import */ var _Params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Params */ "./src/core/Params.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ "./src/core/token.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Formatter = /*#__PURE__*/function () {
  /**
   * @param {Object} cfg
   *  @param {String} cfg.language
   *  @param {String} cfg.indent
   *  @param {Boolean} cfg.uppercase
   *  @param {Integer} cfg.linesBetweenQueries
   *  @param {Object} cfg.params
   */
  function Formatter(cfg) {
    _classCallCheck(this, Formatter);

    this.cfg = cfg;
    this.indentation = new _Indentation__WEBPACK_IMPORTED_MODULE_1__["default"](this.cfg.indent);
    this.inlineBlock = new _InlineBlock__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.params = new _Params__WEBPACK_IMPORTED_MODULE_3__["default"](this.cfg.params);
    this.previousReservedToken = {};
    this.tokens = [];
    this.index = 0;
  }
  /**
   * SQL Tokenizer for this formatter, provided by subclasses.
   */


  _createClass(Formatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      throw new Error('tokenizer() not implemented by subclass');
    }
    /**
     * Reprocess and modify a token based on parsed context.
     *
     * @param {Object} token The token to modify
     *  @param {String} token.type
     *  @param {String} token.value
     * @return {Object} new token or the original
     *  @return {String} token.type
     *  @return {String} token.value
     */

  }, {
    key: "tokenOverride",
    value: function tokenOverride(token) {
      // subclasses can override this to modify tokens during formatting
      return token;
    }
    /**
     * Formats whitespace in a SQL string to make it easier to read.
     *
     * @param {String} query The SQL query string
     * @return {String} formatted query
     */

  }, {
    key: "format",
    value: function format(query) {
      this.tokens = this.tokenizer().tokenize(query);
      var formattedQuery = this.getFormattedQueryFromTokens();
      return formattedQuery.trim();
    }
  }, {
    key: "getFormattedQueryFromTokens",
    value: function getFormattedQueryFromTokens() {
      var _this = this;

      var formattedQuery = '';
      this.tokens.forEach(function (token, index) {
        _this.index = index;
        token = _this.tokenOverride(token);

        if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LINE_COMMENT) {
          formattedQuery = _this.formatLineComment(token, formattedQuery);
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].BLOCK_COMMENT) {
          formattedQuery = _this.formatBlockComment(token, formattedQuery);
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL) {
          formattedQuery = _this.formatTopLevelReservedWord(token, formattedQuery);
          _this.previousReservedToken = token;
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL_NO_INDENT) {
          formattedQuery = _this.formatTopLevelReservedWordNoIndent(token, formattedQuery);
          _this.previousReservedToken = token;
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_NEWLINE) {
          formattedQuery = _this.formatNewlineReservedWord(token, formattedQuery);
          _this.previousReservedToken = token;
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED) {
          formattedQuery = _this.formatWithSpaces(token, formattedQuery);
          _this.previousReservedToken = token;
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PAREN) {
          formattedQuery = _this.formatOpeningParentheses(token, formattedQuery);
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PAREN) {
          formattedQuery = _this.formatClosingParentheses(token, formattedQuery);
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].PLACEHOLDER) {
          formattedQuery = _this.formatPlaceholder(token, formattedQuery);
        } else if (token.value === ',') {
          formattedQuery = _this.formatComma(token, formattedQuery);
        } else if (token.value === ':') {
          formattedQuery = _this.formatWithSpaceAfter(token, formattedQuery);
        } else if (token.value === '.') {
          formattedQuery = _this.formatWithoutSpaces(token, formattedQuery);
        } else if (token.value === ';') {
          formattedQuery = _this.formatQuerySeparator(token, formattedQuery);
        } else {
          formattedQuery = _this.formatWithSpaces(token, formattedQuery);
        }
      });
      return formattedQuery;
    }
  }, {
    key: "formatLineComment",
    value: function formatLineComment(token, query) {
      return this.addNewline(query + this.show(token));
    }
  }, {
    key: "formatBlockComment",
    value: function formatBlockComment(token, query) {
      return this.addNewline(this.addNewline(query) + this.indentComment(token.value));
    }
  }, {
    key: "indentComment",
    value: function indentComment(comment) {
      return comment.replace(/\n[\t ]*/g, '\n' + this.indentation.getIndent() + ' ');
    }
  }, {
    key: "formatTopLevelReservedWordNoIndent",
    value: function formatTopLevelReservedWordNoIndent(token, query) {
      this.indentation.decreaseTopLevel();
      query = this.addNewline(query) + this.equalizeWhitespace(this.show(token));
      return this.addNewline(query);
    }
  }, {
    key: "formatTopLevelReservedWord",
    value: function formatTopLevelReservedWord(token, query) {
      this.indentation.decreaseTopLevel();
      query = this.addNewline(query);
      this.indentation.increaseTopLevel();
      query += this.equalizeWhitespace(this.show(token));
      return this.addNewline(query);
    }
  }, {
    key: "formatNewlineReservedWord",
    value: function formatNewlineReservedWord(token, query) {
      if (Object(_token__WEBPACK_IMPORTED_MODULE_5__["isAnd"])(token) && Object(_token__WEBPACK_IMPORTED_MODULE_5__["isBetween"])(this.tokenLookBehind(2))) {
        return this.formatWithSpaces(token, query);
      }

      return this.addNewline(query) + this.equalizeWhitespace(this.show(token)) + ' ';
    } // Replace any sequence of whitespace characters with single space

  }, {
    key: "equalizeWhitespace",
    value: function equalizeWhitespace(string) {
      return string.replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+/g, ' ');
    } // Opening parentheses increase the block indent level and start a new line

  }, {
    key: "formatOpeningParentheses",
    value: function formatOpeningParentheses(token, query) {
      var _preserveWhitespaceFo, _this$tokenLookBehind;

      // Take out the preceding space unless there was whitespace there in the original query
      // or another opening parens or line comment
      var preserveWhitespaceFor = (_preserveWhitespaceFo = {}, _defineProperty(_preserveWhitespaceFo, _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PAREN, true), _defineProperty(_preserveWhitespaceFo, _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LINE_COMMENT, true), _defineProperty(_preserveWhitespaceFo, _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPERATOR, true), _preserveWhitespaceFo);

      if (token.whitespaceBefore.length === 0 && !preserveWhitespaceFor[(_this$tokenLookBehind = this.tokenLookBehind()) === null || _this$tokenLookBehind === void 0 ? void 0 : _this$tokenLookBehind.type]) {
        query = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query);
      }

      query += this.show(token);
      this.inlineBlock.beginIfPossible(this.tokens, this.index);

      if (!this.inlineBlock.isActive()) {
        this.indentation.increaseBlockLevel();
        query = this.addNewline(query);
      }

      return query;
    } // Closing parentheses decrease the block indent level

  }, {
    key: "formatClosingParentheses",
    value: function formatClosingParentheses(token, query) {
      if (this.inlineBlock.isActive()) {
        this.inlineBlock.end();
        return this.formatWithSpaceAfter(token, query);
      } else {
        this.indentation.decreaseBlockLevel();
        return this.formatWithSpaces(token, this.addNewline(query));
      }
    }
  }, {
    key: "formatPlaceholder",
    value: function formatPlaceholder(token, query) {
      return query + this.params.get(token) + ' ';
    } // Commas start a new line (unless within inline parentheses or SQL "LIMIT" clause)

  }, {
    key: "formatComma",
    value: function formatComma(token, query) {
      query = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query) + this.show(token) + ' ';

      if (this.inlineBlock.isActive()) {
        return query;
      } else if (Object(_token__WEBPACK_IMPORTED_MODULE_5__["isLimit"])(this.previousReservedToken)) {
        return query;
      } else {
        return this.addNewline(query);
      }
    }
  }, {
    key: "formatWithSpaceAfter",
    value: function formatWithSpaceAfter(token, query) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query) + this.show(token) + ' ';
    }
  }, {
    key: "formatWithoutSpaces",
    value: function formatWithoutSpaces(token, query) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query) + this.show(token);
    }
  }, {
    key: "formatWithSpaces",
    value: function formatWithSpaces(token, query) {
      return query + this.show(token) + ' ';
    }
  }, {
    key: "formatQuerySeparator",
    value: function formatQuerySeparator(token, query) {
      this.indentation.resetIndentation();
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query) + this.show(token) + '\n'.repeat(this.cfg.linesBetweenQueries || 1);
    } // Converts token to string (uppercasing it if needed)

  }, {
    key: "show",
    value: function show(_ref) {
      var type = _ref.type,
          value = _ref.value;

      if (this.cfg.uppercase && (type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL_NO_INDENT || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_NEWLINE || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PAREN || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PAREN)) {
        return value.toUpperCase();
      } else {
        return value;
      }
    }
  }, {
    key: "addNewline",
    value: function addNewline(query) {
      query = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["trimSpacesEnd"])(query);

      if (!query.endsWith('\n')) {
        query += '\n';
      }

      return query + this.indentation.getIndent();
    }
  }, {
    key: "tokenLookBehind",
    value: function tokenLookBehind() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.tokens[this.index - n];
    }
  }, {
    key: "tokenLookAhead",
    value: function tokenLookAhead() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.tokens[this.index + n];
    }
  }]);

  return Formatter;
}();



/***/ }),

/***/ "./src/core/Indentation.js":
/*!*********************************!*\
  !*** ./src/core/Indentation.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Indentation; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var INDENT_TYPE_TOP_LEVEL = 'top-level';
var INDENT_TYPE_BLOCK_LEVEL = 'block-level';
/**
 * Manages indentation levels.
 *
 * There are two types of indentation levels:
 *
 * - BLOCK_LEVEL : increased by open-parenthesis
 * - TOP_LEVEL : increased by RESERVED_TOP_LEVEL words
 */

var Indentation = /*#__PURE__*/function () {
  /**
   * @param {String} indent Indent value, default is "  " (2 spaces)
   */
  function Indentation(indent) {
    _classCallCheck(this, Indentation);

    this.indent = indent || '  ';
    this.indentTypes = [];
  }
  /**
   * Returns current indentation string.
   * @return {String}
   */


  _createClass(Indentation, [{
    key: "getIndent",
    value: function getIndent() {
      return this.indent.repeat(this.indentTypes.length);
    }
    /**
     * Increases indentation by one top-level indent.
     */

  }, {
    key: "increaseTopLevel",
    value: function increaseTopLevel() {
      this.indentTypes.push(INDENT_TYPE_TOP_LEVEL);
    }
    /**
     * Increases indentation by one block-level indent.
     */

  }, {
    key: "increaseBlockLevel",
    value: function increaseBlockLevel() {
      this.indentTypes.push(INDENT_TYPE_BLOCK_LEVEL);
    }
    /**
     * Decreases indentation by one top-level indent.
     * Does nothing when the previous indent is not top-level.
     */

  }, {
    key: "decreaseTopLevel",
    value: function decreaseTopLevel() {
      if (this.indentTypes.length > 0 && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["last"])(this.indentTypes) === INDENT_TYPE_TOP_LEVEL) {
        this.indentTypes.pop();
      }
    }
    /**
     * Decreases indentation by one block-level indent.
     * If there are top-level indents within the block-level indent,
     * throws away these as well.
     */

  }, {
    key: "decreaseBlockLevel",
    value: function decreaseBlockLevel() {
      while (this.indentTypes.length > 0) {
        var type = this.indentTypes.pop();

        if (type !== INDENT_TYPE_TOP_LEVEL) {
          break;
        }
      }
    }
  }, {
    key: "resetIndentation",
    value: function resetIndentation() {
      this.indentTypes = [];
    }
  }]);

  return Indentation;
}();



/***/ }),

/***/ "./src/core/InlineBlock.js":
/*!*********************************!*\
  !*** ./src/core/InlineBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InlineBlock; });
/* harmony import */ var _tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTypes */ "./src/core/tokenTypes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var INLINE_MAX_LENGTH = 50;
/**
 * Bookkeeper for inline blocks.
 *
 * Inline blocks are parenthized expressions that are shorter than INLINE_MAX_LENGTH.
 * These blocks are formatted on a single line, unlike longer parenthized
 * expressions where open-parenthesis causes newline and increase of indentation.
 */

var InlineBlock = /*#__PURE__*/function () {
  function InlineBlock() {
    _classCallCheck(this, InlineBlock);

    this.level = 0;
  }
  /**
   * Begins inline block when lookahead through upcoming tokens determines
   * that the block would be smaller than INLINE_MAX_LENGTH.
   * @param  {Object[]} tokens Array of all tokens
   * @param  {Number} index Current token position
   */


  _createClass(InlineBlock, [{
    key: "beginIfPossible",
    value: function beginIfPossible(tokens, index) {
      if (this.level === 0 && this.isInlineBlock(tokens, index)) {
        this.level = 1;
      } else if (this.level > 0) {
        this.level++;
      } else {
        this.level = 0;
      }
    }
    /**
     * Finishes current inline block.
     * There might be several nested ones.
     */

  }, {
    key: "end",
    value: function end() {
      this.level--;
    }
    /**
     * True when inside an inline block
     * @return {Boolean}
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return this.level > 0;
    } // Check if this should be an inline parentheses block
    // Examples are "NOW()", "COUNT(*)", "int(10)", key(`somecolumn`), DECIMAL(7,2)

  }, {
    key: "isInlineBlock",
    value: function isInlineBlock(tokens, index) {
      var length = 0;
      var level = 0;

      for (var i = index; i < tokens.length; i++) {
        var token = tokens[i];
        length += token.value.length; // Overran max length

        if (length > INLINE_MAX_LENGTH) {
          return false;
        }

        if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PAREN) {
          level++;
        } else if (token.type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PAREN) {
          level--;

          if (level === 0) {
            return true;
          }
        }

        if (this.isForbiddenToken(token)) {
          return false;
        }
      }

      return false;
    } // Reserved words that cause newlines, comments and semicolons
    // are not allowed inside inline parentheses block

  }, {
    key: "isForbiddenToken",
    value: function isForbiddenToken(_ref) {
      var type = _ref.type,
          value = _ref.value;
      return type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_NEWLINE || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].COMMENT || type === _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].BLOCK_COMMENT || value === ';';
    }
  }]);

  return InlineBlock;
}();



/***/ }),

/***/ "./src/core/Params.js":
/*!****************************!*\
  !*** ./src/core/Params.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Params; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Handles placeholder replacement with given params.
 */
var Params = /*#__PURE__*/function () {
  /**
   * @param {Object} params
   */
  function Params(params) {
    _classCallCheck(this, Params);

    this.params = params;
    this.index = 0;
  }
  /**
   * Returns param value that matches given placeholder with param key.
   * @param {Object} token
   *   @param {String} token.key Placeholder key
   *   @param {String} token.value Placeholder value
   * @return {String} param or token.value when params are missing
   */


  _createClass(Params, [{
    key: "get",
    value: function get(_ref) {
      var key = _ref.key,
          value = _ref.value;

      if (!this.params) {
        return value;
      }

      if (key) {
        return this.params[key];
      }

      return this.params[this.index++];
    }
  }]);

  return Params;
}();



/***/ }),

/***/ "./src/core/Tokenizer.js":
/*!*******************************!*\
  !*** ./src/core/Tokenizer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tokenizer; });
/* harmony import */ var _tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTypes */ "./src/core/tokenTypes.js");
/* harmony import */ var _regexFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regexFactory */ "./src/core/regexFactory.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Tokenizer = /*#__PURE__*/function () {
  /**
   * @param {Object} cfg
   *  @param {String[]} cfg.reservedWords Reserved words in SQL
   *  @param {String[]} cfg.reservedTopLevelWords Words that are set to new line separately
   *  @param {String[]} cfg.reservedNewlineWords Words that are set to newline
   *  @param {String[]} cfg.reservedTopLevelWordsNoIndent Words that are top level but have no indentation
   *  @param {String[]} cfg.stringTypes String types to enable: "", '', ``, [], N''
   *  @param {String[]} cfg.openParens Opening parentheses to enable, like (, [
   *  @param {String[]} cfg.closeParens Closing parentheses to enable, like ), ]
   *  @param {String[]} cfg.indexedPlaceholderTypes Prefixes for indexed placeholders, like ?
   *  @param {String[]} cfg.namedPlaceholderTypes Prefixes for named placeholders, like @ and :
   *  @param {String[]} cfg.lineCommentTypes Line comments to enable, like # and --
   *  @param {String[]} cfg.specialWordChars Special chars that can be found inside of words, like @ and #
   *  @param {String[]} [cfg.operator] Additional operators to recognize
   */
  function Tokenizer(cfg) {
    _classCallCheck(this, Tokenizer);

    this.WHITESPACE_REGEX = /^([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+)/;
    this.NUMBER_REGEX = /^((\x2D[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?[0-9]+(\.[0-9]+)?([Ee]\x2D?[0-9]+(\.[0-9]+)?)?|0x[0-9A-Fa-f]+|0b[01]+)\b/;
    this.OPERATOR_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createOperatorRegex"](['<>', '<=', '>='].concat(_toConsumableArray(cfg.operators || [])));
    this.BLOCK_COMMENT_REGEX = /^(\/\*(?:(?![])[\s\S])*?(?:\*\/|$))/;
    this.LINE_COMMENT_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createLineCommentRegex"](cfg.lineCommentTypes);
    this.RESERVED_TOP_LEVEL_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createReservedWordRegex"](cfg.reservedTopLevelWords);
    this.RESERVED_TOP_LEVEL_NO_INDENT_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createReservedWordRegex"](cfg.reservedTopLevelWordsNoIndent);
    this.RESERVED_NEWLINE_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createReservedWordRegex"](cfg.reservedNewlineWords);
    this.RESERVED_PLAIN_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createReservedWordRegex"](cfg.reservedWords);
    this.WORD_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createWordRegex"](cfg.specialWordChars);
    this.STRING_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createStringRegex"](cfg.stringTypes);
    this.OPEN_PAREN_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createParenRegex"](cfg.openParens);
    this.CLOSE_PAREN_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createParenRegex"](cfg.closeParens);
    this.INDEXED_PLACEHOLDER_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createPlaceholderRegex"](cfg.indexedPlaceholderTypes, '[0-9]*');
    this.IDENT_NAMED_PLACEHOLDER_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createPlaceholderRegex"](cfg.namedPlaceholderTypes, '[a-zA-Z0-9._$]+');
    this.STRING_NAMED_PLACEHOLDER_REGEX = _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createPlaceholderRegex"](cfg.namedPlaceholderTypes, _regexFactory__WEBPACK_IMPORTED_MODULE_1__["createStringPattern"](cfg.stringTypes));
  }
  /**
   * Takes a SQL string and breaks it into tokens.
   * Each token is an object with type and value.
   *
   * @param {String} input The SQL string
   * @return {Object[]} tokens An array of tokens.
   *  @return {String} token.type
   *  @return {String} token.value
   *  @return {String} token.whitespaceBefore Preceding whitespace
   */


  _createClass(Tokenizer, [{
    key: "tokenize",
    value: function tokenize(input) {
      var tokens = [];
      var token; // Keep processing the string until it is empty

      while (input.length) {
        // grab any preceding whitespace
        var whitespaceBefore = this.getWhitespace(input);
        input = input.substring(whitespaceBefore.length);

        if (input.length) {
          // Get the next token and the token type
          token = this.getNextToken(input, token); // Advance the string

          input = input.substring(token.value.length);
          tokens.push(_objectSpread(_objectSpread({}, token), {}, {
            whitespaceBefore: whitespaceBefore
          }));
        }
      }

      return tokens;
    }
  }, {
    key: "getWhitespace",
    value: function getWhitespace(input) {
      var matches = input.match(this.WHITESPACE_REGEX);
      return matches ? matches[1] : '';
    }
  }, {
    key: "getNextToken",
    value: function getNextToken(input, previousToken) {
      return this.getCommentToken(input) || this.getStringToken(input) || this.getOpenParenToken(input) || this.getCloseParenToken(input) || this.getPlaceholderToken(input) || this.getNumberToken(input) || this.getReservedWordToken(input, previousToken) || this.getWordToken(input) || this.getOperatorToken(input);
    }
  }, {
    key: "getCommentToken",
    value: function getCommentToken(input) {
      return this.getLineCommentToken(input) || this.getBlockCommentToken(input);
    }
  }, {
    key: "getLineCommentToken",
    value: function getLineCommentToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LINE_COMMENT,
        regex: this.LINE_COMMENT_REGEX
      });
    }
  }, {
    key: "getBlockCommentToken",
    value: function getBlockCommentToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].BLOCK_COMMENT,
        regex: this.BLOCK_COMMENT_REGEX
      });
    }
  }, {
    key: "getStringToken",
    value: function getStringToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].STRING,
        regex: this.STRING_REGEX
      });
    }
  }, {
    key: "getOpenParenToken",
    value: function getOpenParenToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPEN_PAREN,
        regex: this.OPEN_PAREN_REGEX
      });
    }
  }, {
    key: "getCloseParenToken",
    value: function getCloseParenToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PAREN,
        regex: this.CLOSE_PAREN_REGEX
      });
    }
  }, {
    key: "getPlaceholderToken",
    value: function getPlaceholderToken(input) {
      return this.getIdentNamedPlaceholderToken(input) || this.getStringNamedPlaceholderToken(input) || this.getIndexedPlaceholderToken(input);
    }
  }, {
    key: "getIdentNamedPlaceholderToken",
    value: function getIdentNamedPlaceholderToken(input) {
      return this.getPlaceholderTokenWithKey({
        input: input,
        regex: this.IDENT_NAMED_PLACEHOLDER_REGEX,
        parseKey: function parseKey(v) {
          return v.slice(1);
        }
      });
    }
  }, {
    key: "getStringNamedPlaceholderToken",
    value: function getStringNamedPlaceholderToken(input) {
      var _this = this;

      return this.getPlaceholderTokenWithKey({
        input: input,
        regex: this.STRING_NAMED_PLACEHOLDER_REGEX,
        parseKey: function parseKey(v) {
          return _this.getEscapedPlaceholderKey({
            key: v.slice(2, -1),
            quoteChar: v.slice(-1)
          });
        }
      });
    }
  }, {
    key: "getIndexedPlaceholderToken",
    value: function getIndexedPlaceholderToken(input) {
      return this.getPlaceholderTokenWithKey({
        input: input,
        regex: this.INDEXED_PLACEHOLDER_REGEX,
        parseKey: function parseKey(v) {
          return v.slice(1);
        }
      });
    }
  }, {
    key: "getPlaceholderTokenWithKey",
    value: function getPlaceholderTokenWithKey(_ref) {
      var input = _ref.input,
          regex = _ref.regex,
          parseKey = _ref.parseKey;
      var token = this.getTokenOnFirstMatch({
        input: input,
        regex: regex,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].PLACEHOLDER
      });

      if (token) {
        token.key = parseKey(token.value);
      }

      return token;
    }
  }, {
    key: "getEscapedPlaceholderKey",
    value: function getEscapedPlaceholderKey(_ref2) {
      var key = _ref2.key,
          quoteChar = _ref2.quoteChar;
      return key.replace(new RegExp(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["escapeRegExp"])('\\' + quoteChar), 'gu'), quoteChar);
    } // Decimal, binary, or hex numbers

  }, {
    key: "getNumberToken",
    value: function getNumberToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].NUMBER,
        regex: this.NUMBER_REGEX
      });
    } // Punctuation and symbols

  }, {
    key: "getOperatorToken",
    value: function getOperatorToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].OPERATOR,
        regex: this.OPERATOR_REGEX
      });
    }
  }, {
    key: "getReservedWordToken",
    value: function getReservedWordToken(input, previousToken) {
      // A reserved word cannot be preceded by a "."
      // this makes it so in "mytable.from", "from" is not considered a reserved word
      if (previousToken && previousToken.value && previousToken.value === '.') {
        return undefined;
      }

      return this.getTopLevelReservedToken(input) || this.getNewlineReservedToken(input) || this.getTopLevelReservedTokenNoIndent(input) || this.getPlainReservedToken(input);
    }
  }, {
    key: "getTopLevelReservedToken",
    value: function getTopLevelReservedToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL,
        regex: this.RESERVED_TOP_LEVEL_REGEX
      });
    }
  }, {
    key: "getNewlineReservedToken",
    value: function getNewlineReservedToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_NEWLINE,
        regex: this.RESERVED_NEWLINE_REGEX
      });
    }
  }, {
    key: "getTopLevelReservedTokenNoIndent",
    value: function getTopLevelReservedTokenNoIndent(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL_NO_INDENT,
        regex: this.RESERVED_TOP_LEVEL_NO_INDENT_REGEX
      });
    }
  }, {
    key: "getPlainReservedToken",
    value: function getPlainReservedToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED,
        regex: this.RESERVED_PLAIN_REGEX
      });
    }
  }, {
    key: "getWordToken",
    value: function getWordToken(input) {
      return this.getTokenOnFirstMatch({
        input: input,
        type: _tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].WORD,
        regex: this.WORD_REGEX
      });
    }
  }, {
    key: "getTokenOnFirstMatch",
    value: function getTokenOnFirstMatch(_ref3) {
      var input = _ref3.input,
          type = _ref3.type,
          regex = _ref3.regex;
      var matches = input.match(regex);
      return matches ? {
        type: type,
        value: matches[1]
      } : undefined;
    }
  }]);

  return Tokenizer;
}();



/***/ }),

/***/ "./src/core/regexFactory.js":
/*!**********************************!*\
  !*** ./src/core/regexFactory.js ***!
  \**********************************/
/*! exports provided: createOperatorRegex, createLineCommentRegex, createReservedWordRegex, createWordRegex, createStringRegex, createStringPattern, createParenRegex, createPlaceholderRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperatorRegex", function() { return createOperatorRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLineCommentRegex", function() { return createLineCommentRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReservedWordRegex", function() { return createReservedWordRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWordRegex", function() { return createWordRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStringRegex", function() { return createStringRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStringPattern", function() { return createStringPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParenRegex", function() { return createParenRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlaceholderRegex", function() { return createPlaceholderRegex; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

function createOperatorRegex(multiLetterOperators) {
  return new RegExp("^(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortByLengthDesc"])(multiLetterOperators).map(_utils__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"]).join('|'), "|.)"), 'u');
}
function createLineCommentRegex(lineCommentTypes) {
  return new RegExp("^((?:".concat(lineCommentTypes.map(function (c) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"])(c);
  }).join('|'), ").*?)(?:\r\n|\r|\n|$)"), 'u');
}
function createReservedWordRegex(reservedWords) {
  if (reservedWords.length === 0) {
    return new RegExp("^\b$", 'u');
  }

  var reservedWordsPattern = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortByLengthDesc"])(reservedWords).join('|').replace(/ /g, '\\s+');
  return new RegExp("^(".concat(reservedWordsPattern, ")\\b"), 'iu');
}
function createWordRegex() {
  var specialChars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new RegExp("^([\\p{Alphabetic}\\p{Mark}\\p{Decimal_Number}\\p{Connector_Punctuation}\\p{Join_Control}".concat(specialChars.join(''), "]+)"), 'u');
}
function createStringRegex(stringTypes) {
  return new RegExp('^(' + createStringPattern(stringTypes) + ')', 'u');
} // This enables the following string patterns:
// 1. backtick quoted string using `` to escape
// 2. square bracket quoted string (SQL Server) using ]] to escape
// 3. double quoted string using "" or \" to escape
// 4. single quoted string using '' or \' to escape
// 5. national character quoted string using N'' or N\' to escape
// 6. Unicode single-quoted string using \' to escape
// 7. Unicode double-quoted string using \" to escape
// 8. PostgreSQL dollar-quoted strings

function createStringPattern(stringTypes) {
  var patterns = {
    '``': '((`[^`]*($|`))+)',
    '{}': '((\\{[^\\}]*($|\\}))+)',
    '[]': '((\\[[^\\]]*($|\\]))(\\][^\\]]*($|\\]))*)',
    '""': '(("[^"\\\\]*(?:\\\\.[^"\\\\]*)*("|$))+)',
    "''": "(('[^'\\\\]*(?:\\\\.[^'\\\\]*)*('|$))+)",
    "N''": "((N'[^'\\\\]*(?:\\\\.[^'\\\\]*)*('|$))+)",
    "U&''": "((U&'[^'\\\\]*(?:\\\\.[^'\\\\]*)*('|$))+)",
    'U&""': '((U&"[^"\\\\]*(?:\\\\.[^"\\\\]*)*("|$))+)',
    $$: '((?<tag>\\$\\w*\\$)[\\s\\S]*?(?:\\k<tag>|$))'
  };
  return stringTypes.map(function (t) {
    return patterns[t];
  }).join('|');
}
function createParenRegex(parens) {
  return new RegExp('^(' + parens.map(escapeParen).join('|') + ')', 'iu');
}

function escapeParen(paren) {
  if (paren.length === 1) {
    // A single punctuation character
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"])(paren);
  } else {
    // longer word
    return '\\b' + paren + '\\b';
  }
}

function createPlaceholderRegex(types, pattern) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(types)) {
    return false;
  }

  var typesRegex = types.map(_utils__WEBPACK_IMPORTED_MODULE_0__["escapeRegExp"]).join('|');
  return new RegExp("^((?:".concat(typesRegex, ")(?:").concat(pattern, "))"), 'u');
}

/***/ }),

/***/ "./src/core/token.js":
/*!***************************!*\
  !*** ./src/core/token.js ***!
  \***************************/
/*! exports provided: isAnd, isBetween, isLimit, isSet, isBy, isWindow, isEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnd", function() { return isAnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLimit", function() { return isLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBy", function() { return isBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return isWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnd", function() { return isEnd; });
/* harmony import */ var _tokenTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTypes */ "./src/core/tokenTypes.js");


var isToken = function isToken(type, regex) {
  return function (token) {
    return (token === null || token === void 0 ? void 0 : token.type) === type && regex.test(token === null || token === void 0 ? void 0 : token.value);
  };
};

var isAnd = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_NEWLINE, /^AND$/i);
var isBetween = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED, /^BETWEEN$/i);
var isLimit = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL, /^LIMIT$/i);
var isSet = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL, /^[S\u017F]ET$/i);
var isBy = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED, /^BY$/i);
var isWindow = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RESERVED_TOP_LEVEL, /^WINDOW$/i);
var isEnd = isToken(_tokenTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_PAREN, /^END$/i);

/***/ }),

/***/ "./src/core/tokenTypes.js":
/*!********************************!*\
  !*** ./src/core/tokenTypes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Constants for token types
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  WORD: 'word',
  STRING: 'string',
  RESERVED: 'reserved',
  RESERVED_TOP_LEVEL: 'reserved-top-level',
  RESERVED_TOP_LEVEL_NO_INDENT: 'reserved-top-level-no-indent',
  RESERVED_NEWLINE: 'reserved-newline',
  OPERATOR: 'operator',
  OPEN_PAREN: 'open-paren',
  CLOSE_PAREN: 'close-paren',
  LINE_COMMENT: 'line-comment',
  BLOCK_COMMENT: 'block-comment',
  NUMBER: 'number',
  PLACEHOLDER: 'placeholder'
});

/***/ }),

/***/ "./src/languages/Db2Formatter.js":
/*!***************************************!*\
  !*** ./src/languages/Db2Formatter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Db2Formatter; });
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var reservedWords = ['ABS', 'ACTIVATE', 'ALIAS', 'ALL', 'ALLOCATE', 'ALLOW', 'ALTER', 'ANY', 'ARE', 'ARRAY', 'AS', 'ASC', 'ASENSITIVE', 'ASSOCIATE', 'ASUTIME', 'ASYMMETRIC', 'AT', 'ATOMIC', 'ATTRIBUTES', 'AUDIT', 'AUTHORIZATION', 'AUX', 'AUXILIARY', 'AVG', 'BEFORE', 'BEGIN', 'BETWEEN', 'BIGINT', 'BINARY', 'BLOB', 'BOOLEAN', 'BOTH', 'BUFFERPOOL', 'BY', 'CACHE', 'CALL', 'CALLED', 'CAPTURE', 'CARDINALITY', 'CASCADED', 'CASE', 'CAST', 'CCSID', 'CEIL', 'CEILING', 'CHAR', 'CHARACTER', 'CHARACTER_LENGTH', 'CHAR_LENGTH', 'CHECK', 'CLOB', 'CLONE', 'CLOSE', 'CLUSTER', 'COALESCE', 'COLLATE', 'COLLECT', 'COLLECTION', 'COLLID', 'COLUMN', 'COMMENT', 'COMMIT', 'CONCAT', 'CONDITION', 'CONNECT', 'CONNECTION', 'CONSTRAINT', 'CONTAINS', 'CONTINUE', 'CONVERT', 'CORR', 'CORRESPONDING', 'COUNT', 'COUNT_BIG', 'COVAR_POP', 'COVAR_SAMP', 'CREATE', 'CROSS', 'CUBE', 'CUME_DIST', 'CURRENT', 'CURRENT_DATE', 'CURRENT_DEFAULT_TRANSFORM_GROUP', 'CURRENT_LC_CTYPE', 'CURRENT_PATH', 'CURRENT_ROLE', 'CURRENT_SCHEMA', 'CURRENT_SERVER', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_TIMEZONE', 'CURRENT_TRANSFORM_GROUP_FOR_TYPE', 'CURRENT_USER', 'CURSOR', 'CYCLE', 'DATA', 'DATABASE', 'DATAPARTITIONNAME', 'DATAPARTITIONNUM', 'DATE', 'DAY', 'DAYS', 'DB2GENERAL', 'DB2GENRL', 'DB2SQL', 'DBINFO', 'DBPARTITIONNAME', 'DBPARTITIONNUM', 'DEALLOCATE', 'DEC', 'DECIMAL', 'DECLARE', 'DEFAULT', 'DEFAULTS', 'DEFINITION', 'DELETE', 'DENSERANK', 'DENSE_RANK', 'DEREF', 'DESCRIBE', 'DESCRIPTOR', 'DETERMINISTIC', 'DIAGNOSTICS', 'DISABLE', 'DISALLOW', 'DISCONNECT', 'DISTINCT', 'DO', 'DOCUMENT', 'DOUBLE', 'DROP', 'DSSIZE', 'DYNAMIC', 'EACH', 'EDITPROC', 'ELEMENT', 'ELSE', 'ELSEIF', 'ENABLE', 'ENCODING', 'ENCRYPTION', 'END', 'END-EXEC', 'ENDING', 'ERASE', 'ESCAPE', 'EVERY', 'EXCEPTION', 'EXCLUDING', 'EXCLUSIVE', 'EXEC', 'EXECUTE', 'EXISTS', 'EXIT', 'EXP', 'EXPLAIN', 'EXTENDED', 'EXTERNAL', 'EXTRACT', 'FALSE', 'FENCED', 'FETCH', 'FIELDPROC', 'FILE', 'FILTER', 'FINAL', 'FIRST', 'FLOAT', 'FLOOR', 'FOR', 'FOREIGN', 'FREE', 'FULL', 'FUNCTION', 'FUSION', 'GENERAL', 'GENERATED', 'GET', 'GLOBAL', 'GOTO', 'GRANT', 'GRAPHIC', 'GROUP', 'GROUPING', 'HANDLER', 'HASH', 'HASHED_VALUE', 'HINT', 'HOLD', 'HOUR', 'HOURS', 'IDENTITY', 'IF', 'IMMEDIATE', 'IN', 'INCLUDING', 'INCLUSIVE', 'INCREMENT', 'INDEX', 'INDICATOR', 'INDICATORS', 'INF', 'INFINITY', 'INHERIT', 'INNER', 'INOUT', 'INSENSITIVE', 'INSERT', 'INT', 'INTEGER', 'INTEGRITY', 'INTERSECTION', 'INTERVAL', 'INTO', 'IS', 'ISOBID', 'ISOLATION', 'ITERATE', 'JAR', 'JAVA', 'KEEP', 'KEY', 'LABEL', 'LANGUAGE', 'LARGE', 'LATERAL', 'LC_CTYPE', 'LEADING', 'LEAVE', 'LEFT', 'LIKE', 'LINKTYPE', 'LN', 'LOCAL', 'LOCALDATE', 'LOCALE', 'LOCALTIME', 'LOCALTIMESTAMP', 'LOCATOR', 'LOCATORS', 'LOCK', 'LOCKMAX', 'LOCKSIZE', 'LONG', 'LOOP', 'LOWER', 'MAINTAINED', 'MATCH', 'MATERIALIZED', 'MAX', 'MAXVALUE', 'MEMBER', 'MERGE', 'METHOD', 'MICROSECOND', 'MICROSECONDS', 'MIN', 'MINUTE', 'MINUTES', 'MINVALUE', 'MOD', 'MODE', 'MODIFIES', 'MODULE', 'MONTH', 'MONTHS', 'MULTISET', 'NAN', 'NATIONAL', 'NATURAL', 'NCHAR', 'NCLOB', 'NEW', 'NEW_TABLE', 'NEXTVAL', 'NO', 'NOCACHE', 'NOCYCLE', 'NODENAME', 'NODENUMBER', 'NOMAXVALUE', 'NOMINVALUE', 'NONE', 'NOORDER', 'NORMALIZE', 'NORMALIZED', 'NOT', 'NULL', 'NULLIF', 'NULLS', 'NUMERIC', 'NUMPARTS', 'OBID', 'OCTET_LENGTH', 'OF', 'OFFSET', 'OLD', 'OLD_TABLE', 'ON', 'ONLY', 'OPEN', 'OPTIMIZATION', 'OPTIMIZE', 'OPTION', 'ORDER', 'OUT', 'OUTER', 'OVER', 'OVERLAPS', 'OVERLAY', 'OVERRIDING', 'PACKAGE', 'PADDED', 'PAGESIZE', 'PARAMETER', 'PART', 'PARTITION', 'PARTITIONED', 'PARTITIONING', 'PARTITIONS', 'PASSWORD', 'PATH', 'PERCENTILE_CONT', 'PERCENTILE_DISC', 'PERCENT_RANK', 'PIECESIZE', 'PLAN', 'POSITION', 'POWER', 'PRECISION', 'PREPARE', 'PREVVAL', 'PRIMARY', 'PRIQTY', 'PRIVILEGES', 'PROCEDURE', 'PROGRAM', 'PSID', 'PUBLIC', 'QUERY', 'QUERYNO', 'RANGE', 'RANK', 'READ', 'READS', 'REAL', 'RECOVERY', 'RECURSIVE', 'REF', 'REFERENCES', 'REFERENCING', 'REFRESH', 'REGR_AVGX', 'REGR_AVGY', 'REGR_COUNT', 'REGR_INTERCEPT', 'REGR_R2', 'REGR_SLOPE', 'REGR_SXX', 'REGR_SXY', 'REGR_SYY', 'RELEASE', 'RENAME', 'REPEAT', 'RESET', 'RESIGNAL', 'RESTART', 'RESTRICT', 'RESULT', 'RESULT_SET_LOCATOR', 'RETURN', 'RETURNS', 'REVOKE', 'RIGHT', 'ROLE', 'ROLLBACK', 'ROLLUP', 'ROUND_CEILING', 'ROUND_DOWN', 'ROUND_FLOOR', 'ROUND_HALF_DOWN', 'ROUND_HALF_EVEN', 'ROUND_HALF_UP', 'ROUND_UP', 'ROUTINE', 'ROW', 'ROWNUMBER', 'ROWS', 'ROWSET', 'ROW_NUMBER', 'RRN', 'RUN', 'SAVEPOINT', 'SCHEMA', 'SCOPE', 'SCRATCHPAD', 'SCROLL', 'SEARCH', 'SECOND', 'SECONDS', 'SECQTY', 'SECURITY', 'SENSITIVE', 'SEQUENCE', 'SESSION', 'SESSION_USER', 'SIGNAL', 'SIMILAR', 'SIMPLE', 'SMALLINT', 'SNAN', 'SOME', 'SOURCE', 'SPECIFIC', 'SPECIFICTYPE', 'SQL', 'SQLEXCEPTION', 'SQLID', 'SQLSTATE', 'SQLWARNING', 'SQRT', 'STACKED', 'STANDARD', 'START', 'STARTING', 'STATEMENT', 'STATIC', 'STATMENT', 'STAY', 'STDDEV_POP', 'STDDEV_SAMP', 'STOGROUP', 'STORES', 'STYLE', 'SUBMULTISET', 'SUBSTRING', 'SUM', 'SUMMARY', 'SYMMETRIC', 'SYNONYM', 'SYSFUN', 'SYSIBM', 'SYSPROC', 'SYSTEM', 'SYSTEM_USER', 'TABLE', 'TABLESAMPLE', 'TABLESPACE', 'THEN', 'TIME', 'TIMESTAMP', 'TIMEZONE_HOUR', 'TIMEZONE_MINUTE', 'TO', 'TRAILING', 'TRANSACTION', 'TRANSLATE', 'TRANSLATION', 'TREAT', 'TRIGGER', 'TRIM', 'TRUE', 'TRUNCATE', 'TYPE', 'UESCAPE', 'UNDO', 'UNIQUE', 'UNKNOWN', 'UNNEST', 'UNTIL', 'UPPER', 'USAGE', 'USER', 'USING', 'VALIDPROC', 'VALUE', 'VARCHAR', 'VARIABLE', 'VARIANT', 'VARYING', 'VAR_POP', 'VAR_SAMP', 'VCAT', 'VERSION', 'VIEW', 'VOLATILE', 'VOLUMES', 'WHEN', 'WHENEVER', 'WHILE', 'WIDTH_BUCKET', 'WINDOW', 'WITH', 'WITHIN', 'WITHOUT', 'WLM', 'WRITE', 'XMLELEMENT', 'XMLEXISTS', 'XMLNAMESPACES', 'YEAR', 'YEARS'];
var reservedTopLevelWords = ['ADD', 'AFTER', 'ALTER COLUMN', 'ALTER TABLE', 'DELETE FROM', 'EXCEPT', 'FETCH FIRST', 'FROM', 'GROUP BY', 'GO', 'HAVING', 'INSERT INTO', 'INTERSECT', 'LIMIT', 'ORDER BY', 'SELECT', 'SET CURRENT SCHEMA', 'SET SCHEMA', 'SET', 'UPDATE', 'VALUES', 'WHERE'];
var reservedTopLevelWordsNoIndent = ['INTERSECT', 'INTERSECT ALL', 'MINUS', 'UNION', 'UNION ALL'];
var reservedNewlineWords = ['AND', 'OR', // joins
'JOIN', 'INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'FULL JOIN', 'FULL OUTER JOIN', 'CROSS JOIN', 'NATURAL JOIN']; // For reference: https://www.ibm.com/support/knowledgecenter/en/ssw_ibm_i_72/db2/rbafzintro.htm

var Db2Formatter = /*#__PURE__*/function (_Formatter) {
  _inherits(Db2Formatter, _Formatter);

  var _super = _createSuper(Db2Formatter);

  function Db2Formatter() {
    _classCallCheck(this, Db2Formatter);

    return _super.apply(this, arguments);
  }

  _createClass(Db2Formatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ["\"\"", "''", '``', '[]'],
        openParens: ['('],
        closeParens: [')'],
        indexedPlaceholderTypes: ['?'],
        namedPlaceholderTypes: [':'],
        lineCommentTypes: ['--'],
        specialWordChars: ['#', '@'],
        operators: ['**', '!=', '!>', '!>', '||']
      });
    }
  }]);

  return Db2Formatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/languages/MariaDbFormatter.js":
/*!*******************************************!*\
  !*** ./src/languages/MariaDbFormatter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MariaDbFormatter; });
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var reservedWords = ['ACCESSIBLE', 'ADD', 'ALL', 'ALTER', 'ANALYZE', 'AND', 'AS', 'ASC', 'ASENSITIVE', 'BEFORE', 'BETWEEN', 'BIGINT', 'BINARY', 'BLOB', 'BOTH', 'BY', 'CALL', 'CASCADE', 'CASE', 'CHANGE', 'CHAR', 'CHARACTER', 'CHECK', 'COLLATE', 'COLUMN', 'CONDITION', 'CONSTRAINT', 'CONTINUE', 'CONVERT', 'CREATE', 'CROSS', 'CURRENT_DATE', 'CURRENT_ROLE', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'CURSOR', 'DATABASE', 'DATABASES', 'DAY_HOUR', 'DAY_MICROSECOND', 'DAY_MINUTE', 'DAY_SECOND', 'DEC', 'DECIMAL', 'DECLARE', 'DEFAULT', 'DELAYED', 'DELETE', 'DESC', 'DESCRIBE', 'DETERMINISTIC', 'DISTINCT', 'DISTINCTROW', 'DIV', 'DO_DOMAIN_IDS', 'DOUBLE', 'DROP', 'DUAL', 'EACH', 'ELSE', 'ELSEIF', 'ENCLOSED', 'ESCAPED', 'EXCEPT', 'EXISTS', 'EXIT', 'EXPLAIN', 'FALSE', 'FETCH', 'FLOAT', 'FLOAT4', 'FLOAT8', 'FOR', 'FORCE', 'FOREIGN', 'FROM', 'FULLTEXT', 'GENERAL', 'GRANT', 'GROUP', 'HAVING', 'HIGH_PRIORITY', 'HOUR_MICROSECOND', 'HOUR_MINUTE', 'HOUR_SECOND', 'IF', 'IGNORE', 'IGNORE_DOMAIN_IDS', 'IGNORE_SERVER_IDS', 'IN', 'INDEX', 'INFILE', 'INNER', 'INOUT', 'INSENSITIVE', 'INSERT', 'INT', 'INT1', 'INT2', 'INT3', 'INT4', 'INT8', 'INTEGER', 'INTERSECT', 'INTERVAL', 'INTO', 'IS', 'ITERATE', 'JOIN', 'KEY', 'KEYS', 'KILL', 'LEADING', 'LEAVE', 'LEFT', 'LIKE', 'LIMIT', 'LINEAR', 'LINES', 'LOAD', 'LOCALTIME', 'LOCALTIMESTAMP', 'LOCK', 'LONG', 'LONGBLOB', 'LONGTEXT', 'LOOP', 'LOW_PRIORITY', 'MASTER_HEARTBEAT_PERIOD', 'MASTER_SSL_VERIFY_SERVER_CERT', 'MATCH', 'MAXVALUE', 'MEDIUMBLOB', 'MEDIUMINT', 'MEDIUMTEXT', 'MIDDLEINT', 'MINUTE_MICROSECOND', 'MINUTE_SECOND', 'MOD', 'MODIFIES', 'NATURAL', 'NOT', 'NO_WRITE_TO_BINLOG', 'NULL', 'NUMERIC', 'ON', 'OPTIMIZE', 'OPTION', 'OPTIONALLY', 'OR', 'ORDER', 'OUT', 'OUTER', 'OUTFILE', 'OVER', 'PAGE_CHECKSUM', 'PARSE_VCOL_EXPR', 'PARTITION', 'POSITION', 'PRECISION', 'PRIMARY', 'PROCEDURE', 'PURGE', 'RANGE', 'READ', 'READS', 'READ_WRITE', 'REAL', 'RECURSIVE', 'REF_SYSTEM_ID', 'REFERENCES', 'REGEXP', 'RELEASE', 'RENAME', 'REPEAT', 'REPLACE', 'REQUIRE', 'RESIGNAL', 'RESTRICT', 'RETURN', 'RETURNING', 'REVOKE', 'RIGHT', 'RLIKE', 'ROWS', 'SCHEMA', 'SCHEMAS', 'SECOND_MICROSECOND', 'SELECT', 'SENSITIVE', 'SEPARATOR', 'SET', 'SHOW', 'SIGNAL', 'SLOW', 'SMALLINT', 'SPATIAL', 'SPECIFIC', 'SQL', 'SQLEXCEPTION', 'SQLSTATE', 'SQLWARNING', 'SQL_BIG_RESULT', 'SQL_CALC_FOUND_ROWS', 'SQL_SMALL_RESULT', 'SSL', 'STARTING', 'STATS_AUTO_RECALC', 'STATS_PERSISTENT', 'STATS_SAMPLE_PAGES', 'STRAIGHT_JOIN', 'TABLE', 'TERMINATED', 'THEN', 'TINYBLOB', 'TINYINT', 'TINYTEXT', 'TO', 'TRAILING', 'TRIGGER', 'TRUE', 'UNDO', 'UNION', 'UNIQUE', 'UNLOCK', 'UNSIGNED', 'UPDATE', 'USAGE', 'USE', 'USING', 'UTC_DATE', 'UTC_TIME', 'UTC_TIMESTAMP', 'VALUES', 'VARBINARY', 'VARCHAR', 'VARCHARACTER', 'VARYING', 'WHEN', 'WHERE', 'WHILE', 'WINDOW', 'WITH', 'WRITE', 'XOR', 'YEAR_MONTH', 'ZEROFILL'];
var reservedTopLevelWords = ['ADD', 'ALTER COLUMN', 'ALTER TABLE', 'DELETE FROM', 'EXCEPT', 'FROM', 'GROUP BY', 'HAVING', 'INSERT INTO', 'INSERT', 'LIMIT', 'ORDER BY', 'SELECT', 'SET', 'UPDATE', 'VALUES', 'WHERE'];
var reservedTopLevelWordsNoIndent = ['INTERSECT', 'INTERSECT ALL', 'UNION', 'UNION ALL'];
var reservedNewlineWords = ['AND', 'ELSE', 'OR', 'WHEN', // joins
'JOIN', 'INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'CROSS JOIN', 'NATURAL JOIN', // non-standard joins
'STRAIGHT_JOIN', 'NATURAL LEFT JOIN', 'NATURAL LEFT OUTER JOIN', 'NATURAL RIGHT JOIN', 'NATURAL RIGHT OUTER JOIN']; // For reference: https://mariadb.com/kb/en/sql-statements-structure/

var MariaDbFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(MariaDbFormatter, _Formatter);

  var _super = _createSuper(MariaDbFormatter);

  function MariaDbFormatter() {
    _classCallCheck(this, MariaDbFormatter);

    return _super.apply(this, arguments);
  }

  _createClass(MariaDbFormatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ['``', "''", '""'],
        openParens: ['(', 'CASE'],
        closeParens: [')', 'END'],
        indexedPlaceholderTypes: ['?'],
        namedPlaceholderTypes: [],
        lineCommentTypes: ['--', '#'],
        specialWordChars: ['@'],
        operators: [':=', '<<', '>>', '!=', '<>', '<=>', '&&', '||']
      });
    }
  }]);

  return MariaDbFormatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/languages/MySqlFormatter.js":
/*!*****************************************!*\
  !*** ./src/languages/MySqlFormatter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MySqlFormatter; });
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var reservedWords = ['ACCESSIBLE', 'ADD', 'ALL', 'ALTER', 'ANALYZE', 'AND', 'AS', 'ASC', 'ASENSITIVE', 'BEFORE', 'BETWEEN', 'BIGINT', 'BINARY', 'BLOB', 'BOTH', 'BY', 'CALL', 'CASCADE', 'CASE', 'CHANGE', 'CHAR', 'CHARACTER', 'CHECK', 'COLLATE', 'COLUMN', 'CONDITION', 'CONSTRAINT', 'CONTINUE', 'CONVERT', 'CREATE', 'CROSS', 'CUBE', 'CUME_DIST', 'CURRENT_DATE', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'CURSOR', 'DATABASE', 'DATABASES', 'DAY_HOUR', 'DAY_MICROSECOND', 'DAY_MINUTE', 'DAY_SECOND', 'DEC', 'DECIMAL', 'DECLARE', 'DEFAULT', 'DELAYED', 'DELETE', 'DENSE_RANK', 'DESC', 'DESCRIBE', 'DETERMINISTIC', 'DISTINCT', 'DISTINCTROW', 'DIV', 'DOUBLE', 'DROP', 'DUAL', 'EACH', 'ELSE', 'ELSEIF', 'EMPTY', 'ENCLOSED', 'ESCAPED', 'EXCEPT', 'EXISTS', 'EXIT', 'EXPLAIN', 'FALSE', 'FETCH', 'FIRST_VALUE', 'FLOAT', 'FLOAT4', 'FLOAT8', 'FOR', 'FORCE', 'FOREIGN', 'FROM', 'FULLTEXT', 'FUNCTION', 'GENERATED', 'GET', 'GRANT', 'GROUP', 'GROUPING', 'GROUPS', 'HAVING', 'HIGH_PRIORITY', 'HOUR_MICROSECOND', 'HOUR_MINUTE', 'HOUR_SECOND', 'IF', 'IGNORE', 'IN', 'INDEX', 'INFILE', 'INNER', 'INOUT', 'INSENSITIVE', 'INSERT', 'INT', 'INT1', 'INT2', 'INT3', 'INT4', 'INT8', 'INTEGER', 'INTERVAL', 'INTO', 'IO_AFTER_GTIDS', 'IO_BEFORE_GTIDS', 'IS', 'ITERATE', 'JOIN', 'JSON_TABLE', 'KEY', 'KEYS', 'KILL', 'LAG', 'LAST_VALUE', 'LATERAL', 'LEAD', 'LEADING', 'LEAVE', 'LEFT', 'LIKE', 'LIMIT', 'LINEAR', 'LINES', 'LOAD', 'LOCALTIME', 'LOCALTIMESTAMP', 'LOCK', 'LONG', 'LONGBLOB', 'LONGTEXT', 'LOOP', 'LOW_PRIORITY', 'MASTER_BIND', 'MASTER_SSL_VERIFY_SERVER_CERT', 'MATCH', 'MAXVALUE', 'MEDIUMBLOB', 'MEDIUMINT', 'MEDIUMTEXT', 'MIDDLEINT', 'MINUTE_MICROSECOND', 'MINUTE_SECOND', 'MOD', 'MODIFIES', 'NATURAL', 'NOT', 'NO_WRITE_TO_BINLOG', 'NTH_VALUE', 'NTILE', 'NULL', 'NUMERIC', 'OF', 'ON', 'OPTIMIZE', 'OPTIMIZER_COSTS', 'OPTION', 'OPTIONALLY', 'OR', 'ORDER', 'OUT', 'OUTER', 'OUTFILE', 'OVER', 'PARTITION', 'PERCENT_RANK', 'PRECISION', 'PRIMARY', 'PROCEDURE', 'PURGE', 'RANGE', 'RANK', 'READ', 'READS', 'READ_WRITE', 'REAL', 'RECURSIVE', 'REFERENCES', 'REGEXP', 'RELEASE', 'RENAME', 'REPEAT', 'REPLACE', 'REQUIRE', 'RESIGNAL', 'RESTRICT', 'RETURN', 'REVOKE', 'RIGHT', 'RLIKE', 'ROW', 'ROWS', 'ROW_NUMBER', 'SCHEMA', 'SCHEMAS', 'SECOND_MICROSECOND', 'SELECT', 'SENSITIVE', 'SEPARATOR', 'SET', 'SHOW', 'SIGNAL', 'SMALLINT', 'SPATIAL', 'SPECIFIC', 'SQL', 'SQLEXCEPTION', 'SQLSTATE', 'SQLWARNING', 'SQL_BIG_RESULT', 'SQL_CALC_FOUND_ROWS', 'SQL_SMALL_RESULT', 'SSL', 'STARTING', 'STORED', 'STRAIGHT_JOIN', 'SYSTEM', 'TABLE', 'TERMINATED', 'THEN', 'TINYBLOB', 'TINYINT', 'TINYTEXT', 'TO', 'TRAILING', 'TRIGGER', 'TRUE', 'UNDO', 'UNION', 'UNIQUE', 'UNLOCK', 'UNSIGNED', 'UPDATE', 'USAGE', 'USE', 'USING', 'UTC_DATE', 'UTC_TIME', 'UTC_TIMESTAMP', 'VALUES', 'VARBINARY', 'VARCHAR', 'VARCHARACTER', 'VARYING', 'VIRTUAL', 'WHEN', 'WHERE', 'WHILE', 'WINDOW', 'WITH', 'WRITE', 'XOR', 'YEAR_MONTH', 'ZEROFILL'];
var reservedTopLevelWords = ['ADD', 'ALTER COLUMN', 'ALTER TABLE', 'DELETE FROM', 'EXCEPT', 'FROM', 'GROUP BY', 'HAVING', 'INSERT INTO', 'INSERT', 'LIMIT', 'ORDER BY', 'SELECT', 'SET', 'UPDATE', 'VALUES', 'WHERE'];
var reservedTopLevelWordsNoIndent = ['INTERSECT', 'INTERSECT ALL', 'UNION', 'UNION ALL'];
var reservedNewlineWords = ['AND', 'ELSE', 'OR', 'WHEN', // joins
'JOIN', 'INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'CROSS JOIN', 'NATURAL JOIN', // non-standard joins
'STRAIGHT_JOIN', 'NATURAL LEFT JOIN', 'NATURAL LEFT OUTER JOIN', 'NATURAL RIGHT JOIN', 'NATURAL RIGHT OUTER JOIN'];

var MySqlFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(MySqlFormatter, _Formatter);

  var _super = _createSuper(MySqlFormatter);

  function MySqlFormatter() {
    _classCallCheck(this, MySqlFormatter);

    return _super.apply(this, arguments);
  }

  _createClass(MySqlFormatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ['``', "''", '""'],
        openParens: ['(', 'CASE'],
        closeParens: [')', 'END'],
        indexedPlaceholderTypes: ['?'],
        namedPlaceholderTypes: [],
        lineCommentTypes: ['--', '#'],
        specialWordChars: ['@'],
        operators: [':=', '<<', '>>', '!=', '<>', '<=>', '&&', '||', '->', '->>']
      });
    }
  }]);

  return MySqlFormatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/languages/N1qlFormatter.js":
/*!****************************************!*\
  !*** ./src/languages/N1qlFormatter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N1qlFormatter; });
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var reservedWords = ['ALL', 'ALTER', 'ANALYZE', 'AND', 'ANY', 'ARRAY', 'AS', 'ASC', 'BEGIN', 'BETWEEN', 'BINARY', 'BOOLEAN', 'BREAK', 'BUCKET', 'BUILD', 'BY', 'CALL', 'CASE', 'CAST', 'CLUSTER', 'COLLATE', 'COLLECTION', 'COMMIT', 'CONNECT', 'CONTINUE', 'CORRELATE', 'COVER', 'CREATE', 'DATABASE', 'DATASET', 'DATASTORE', 'DECLARE', 'DECREMENT', 'DELETE', 'DERIVED', 'DESC', 'DESCRIBE', 'DISTINCT', 'DO', 'DROP', 'EACH', 'ELEMENT', 'ELSE', 'END', 'EVERY', 'EXCEPT', 'EXCLUDE', 'EXECUTE', 'EXISTS', 'EXPLAIN', 'FALSE', 'FETCH', 'FIRST', 'FLATTEN', 'FOR', 'FORCE', 'FROM', 'FUNCTION', 'GRANT', 'GROUP', 'GSI', 'HAVING', 'IF', 'IGNORE', 'ILIKE', 'IN', 'INCLUDE', 'INCREMENT', 'INDEX', 'INFER', 'INLINE', 'INNER', 'INSERT', 'INTERSECT', 'INTO', 'IS', 'JOIN', 'KEY', 'KEYS', 'KEYSPACE', 'KNOWN', 'LAST', 'LEFT', 'LET', 'LETTING', 'LIKE', 'LIMIT', 'LSM', 'MAP', 'MAPPING', 'MATCHED', 'MATERIALIZED', 'MERGE', 'MISSING', 'NAMESPACE', 'NEST', 'NOT', 'NULL', 'NUMBER', 'OBJECT', 'OFFSET', 'ON', 'OPTION', 'OR', 'ORDER', 'OUTER', 'OVER', 'PARSE', 'PARTITION', 'PASSWORD', 'PATH', 'POOL', 'PREPARE', 'PRIMARY', 'PRIVATE', 'PRIVILEGE', 'PROCEDURE', 'PUBLIC', 'RAW', 'REALM', 'REDUCE', 'RENAME', 'RETURN', 'RETURNING', 'REVOKE', 'RIGHT', 'ROLE', 'ROLLBACK', 'SATISFIES', 'SCHEMA', 'SELECT', 'SELF', 'SEMI', 'SET', 'SHOW', 'SOME', 'START', 'STATISTICS', 'STRING', 'SYSTEM', 'THEN', 'TO', 'TRANSACTION', 'TRIGGER', 'TRUE', 'TRUNCATE', 'UNDER', 'UNION', 'UNIQUE', 'UNKNOWN', 'UNNEST', 'UNSET', 'UPDATE', 'UPSERT', 'USE', 'USER', 'USING', 'VALIDATE', 'VALUE', 'VALUED', 'VALUES', 'VIA', 'VIEW', 'WHEN', 'WHERE', 'WHILE', 'WITH', 'WITHIN', 'WORK', 'XOR'];
var reservedTopLevelWords = ['DELETE FROM', 'EXCEPT ALL', 'EXCEPT', 'EXPLAIN DELETE FROM', 'EXPLAIN UPDATE', 'EXPLAIN UPSERT', 'FROM', 'GROUP BY', 'HAVING', 'INFER', 'INSERT INTO', 'LET', 'LIMIT', 'MERGE', 'NEST', 'ORDER BY', 'PREPARE', 'SELECT', 'SET CURRENT SCHEMA', 'SET SCHEMA', 'SET', 'UNNEST', 'UPDATE', 'UPSERT', 'USE KEYS', 'VALUES', 'WHERE'];
var reservedTopLevelWordsNoIndent = ['INTERSECT', 'INTERSECT ALL', 'MINUS', 'UNION', 'UNION ALL'];
var reservedNewlineWords = ['AND', 'OR', 'XOR', // joins
'JOIN', 'INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN']; // For reference: http://docs.couchbase.com.s3-website-us-west-1.amazonaws.com/server/6.0/n1ql/n1ql-language-reference/index.html

var N1qlFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(N1qlFormatter, _Formatter);

  var _super = _createSuper(N1qlFormatter);

  function N1qlFormatter() {
    _classCallCheck(this, N1qlFormatter);

    return _super.apply(this, arguments);
  }

  _createClass(N1qlFormatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ["\"\"", "''", '``'],
        openParens: ['(', '[', '{'],
        closeParens: [')', ']', '}'],
        namedPlaceholderTypes: ['$'],
        lineCommentTypes: ['#', '--'],
        operators: ['==', '!=']
      });
    }
  }]);

  return N1qlFormatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/languages/PlSqlFormatter.js":
/*!*****************************************!*\
  !*** ./src/languages/PlSqlFormatter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlSqlFormatter; });
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/token */ "./src/core/token.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
/* harmony import */ var _core_tokenTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/tokenTypes */ "./src/core/tokenTypes.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var reservedWords = ['A', 'ACCESSIBLE', 'AGENT', 'AGGREGATE', 'ALL', 'ALTER', 'ANY', 'ARRAY', 'AS', 'ASC', 'AT', 'ATTRIBUTE', 'AUTHID', 'AVG', 'BETWEEN', 'BFILE_BASE', 'BINARY_INTEGER', 'BINARY', 'BLOB_BASE', 'BLOCK', 'BODY', 'BOOLEAN', 'BOTH', 'BOUND', 'BREADTH', 'BULK', 'BY', 'BYTE', 'C', 'CALL', 'CALLING', 'CASCADE', 'CASE', 'CHAR_BASE', 'CHAR', 'CHARACTER', 'CHARSET', 'CHARSETFORM', 'CHARSETID', 'CHECK', 'CLOB_BASE', 'CLONE', 'CLOSE', 'CLUSTER', 'CLUSTERS', 'COALESCE', 'COLAUTH', 'COLLECT', 'COLUMNS', 'COMMENT', 'COMMIT', 'COMMITTED', 'COMPILED', 'COMPRESS', 'CONNECT', 'CONSTANT', 'CONSTRUCTOR', 'CONTEXT', 'CONTINUE', 'CONVERT', 'COUNT', 'CRASH', 'CREATE', 'CREDENTIAL', 'CURRENT', 'CURRVAL', 'CURSOR', 'CUSTOMDATUM', 'DANGLING', 'DATA', 'DATE_BASE', 'DATE', 'DAY', 'DECIMAL', 'DEFAULT', 'DEFINE', 'DELETE', 'DEPTH', 'DESC', 'DETERMINISTIC', 'DIRECTORY', 'DISTINCT', 'DO', 'DOUBLE', 'DROP', 'DURATION', 'ELEMENT', 'ELSIF', 'EMPTY', 'END', 'ESCAPE', 'EXCEPTIONS', 'EXCLUSIVE', 'EXECUTE', 'EXISTS', 'EXIT', 'EXTENDS', 'EXTERNAL', 'EXTRACT', 'FALSE', 'FETCH', 'FINAL', 'FIRST', 'FIXED', 'FLOAT', 'FOR', 'FORALL', 'FORCE', 'FROM', 'FUNCTION', 'GENERAL', 'GOTO', 'GRANT', 'GROUP', 'HASH', 'HEAP', 'HIDDEN', 'HOUR', 'IDENTIFIED', 'IF', 'IMMEDIATE', 'IN', 'INCLUDING', 'INDEX', 'INDEXES', 'INDICATOR', 'INDICES', 'INFINITE', 'INSTANTIABLE', 'INT', 'INTEGER', 'INTERFACE', 'INTERVAL', 'INTO', 'INVALIDATE', 'IS', 'ISOLATION', 'JAVA', 'LANGUAGE', 'LARGE', 'LEADING', 'LENGTH', 'LEVEL', 'LIBRARY', 'LIKE', 'LIKE2', 'LIKE4', 'LIKEC', 'LIMITED', 'LOCAL', 'LOCK', 'LONG', 'MAP', 'MAX', 'MAXLEN', 'MEMBER', 'MERGE', 'MIN', 'MINUTE', 'MLSLABEL', 'MOD', 'MODE', 'MONTH', 'MULTISET', 'NAME', 'NAN', 'NATIONAL', 'NATIVE', 'NATURAL', 'NATURALN', 'NCHAR', 'NEW', 'NEXTVAL', 'NOCOMPRESS', 'NOCOPY', 'NOT', 'NOWAIT', 'NULL', 'NULLIF', 'NUMBER_BASE', 'NUMBER', 'OBJECT', 'OCICOLL', 'OCIDATE', 'OCIDATETIME', 'OCIDURATION', 'OCIINTERVAL', 'OCILOBLOCATOR', 'OCINUMBER', 'OCIRAW', 'OCIREF', 'OCIREFCURSOR', 'OCIROWID', 'OCISTRING', 'OCITYPE', 'OF', 'OLD', 'ON', 'ONLY', 'OPAQUE', 'OPEN', 'OPERATOR', 'OPTION', 'ORACLE', 'ORADATA', 'ORDER', 'ORGANIZATION', 'ORLANY', 'ORLVARY', 'OTHERS', 'OUT', 'OVERLAPS', 'OVERRIDING', 'PACKAGE', 'PARALLEL_ENABLE', 'PARAMETER', 'PARAMETERS', 'PARENT', 'PARTITION', 'PASCAL', 'PCTFREE', 'PIPE', 'PIPELINED', 'PLS_INTEGER', 'PLUGGABLE', 'POSITIVE', 'POSITIVEN', 'PRAGMA', 'PRECISION', 'PRIOR', 'PRIVATE', 'PROCEDURE', 'PUBLIC', 'RAISE', 'RANGE', 'RAW', 'READ', 'REAL', 'RECORD', 'REF', 'REFERENCE', 'RELEASE', 'RELIES_ON', 'REM', 'REMAINDER', 'RENAME', 'RESOURCE', 'RESULT_CACHE', 'RESULT', 'RETURN', 'RETURNING', 'REVERSE', 'REVOKE', 'ROLLBACK', 'ROW', 'ROWID', 'ROWNUM', 'ROWTYPE', 'SAMPLE', 'SAVE', 'SAVEPOINT', 'SB1', 'SB2', 'SB4', 'SEARCH', 'SECOND', 'SEGMENT', 'SELF', 'SEPARATE', 'SEQUENCE', 'SERIALIZABLE', 'SHARE', 'SHORT', 'SIZE_T', 'SIZE', 'SMALLINT', 'SOME', 'SPACE', 'SPARSE', 'SQL', 'SQLCODE', 'SQLDATA', 'SQLERRM', 'SQLNAME', 'SQLSTATE', 'STANDARD', 'START', 'STATIC', 'STDDEV', 'STORED', 'STRING', 'STRUCT', 'STYLE', 'SUBMULTISET', 'SUBPARTITION', 'SUBSTITUTABLE', 'SUBTYPE', 'SUCCESSFUL', 'SUM', 'SYNONYM', 'SYSDATE', 'TABAUTH', 'TABLE', 'TDO', 'THE', 'THEN', 'TIME', 'TIMESTAMP', 'TIMEZONE_ABBR', 'TIMEZONE_HOUR', 'TIMEZONE_MINUTE', 'TIMEZONE_REGION', 'TO', 'TRAILING', 'TRANSACTION', 'TRANSACTIONAL', 'TRIGGER', 'TRUE', 'TRUSTED', 'TYPE', 'UB1', 'UB2', 'UB4', 'UID', 'UNDER', 'UNIQUE', 'UNPLUG', 'UNSIGNED', 'UNTRUSTED', 'USE', 'USER', 'USING', 'VALIDATE', 'VALIST', 'VALUE', 'VARCHAR', 'VARCHAR2', 'VARIABLE', 'VARIANCE', 'VARRAY', 'VARYING', 'VIEW', 'VIEWS', 'VOID', 'WHENEVER', 'WHILE', 'WITH', 'WORK', 'WRAPPED', 'WRITE', 'YEAR', 'ZONE'];
var reservedTopLevelWords = ['ADD', 'ALTER COLUMN', 'ALTER TABLE', 'BEGIN', 'CONNECT BY', 'DECLARE', 'DELETE FROM', 'DELETE', 'END', 'EXCEPT', 'EXCEPTION', 'FETCH FIRST', 'FROM', 'GROUP BY', 'HAVING', 'INSERT INTO', 'INSERT', 'LIMIT', 'LOOP', 'MODIFY', 'ORDER BY', 'SELECT', 'SET CURRENT SCHEMA', 'SET SCHEMA', 'SET', 'START WITH', 'UPDATE', 'VALUES', 'WHERE'];
var reservedTopLevelWordsNoIndent = ['INTERSECT', 'INTERSECT ALL', 'MINUS', 'UNION', 'UNION ALL'];
var reservedNewlineWords = ['AND', 'CROSS APPLY', 'ELSE', 'END', 'OR', 'OUTER APPLY', 'WHEN', 'XOR', // joins
'JOIN', 'INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'FULL JOIN', 'FULL OUTER JOIN', 'CROSS JOIN', 'NATURAL JOIN'];

var PlSqlFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(PlSqlFormatter, _Formatter);

  var _super = _createSuper(PlSqlFormatter);

  function PlSqlFormatter() {
    _classCallCheck(this, PlSqlFormatter);

    return _super.apply(this, arguments);
  }

  _createClass(PlSqlFormatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_2__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ["\"\"", "N''", "''", '``'],
        openParens: ['(', 'CASE'],
        closeParens: [')', 'END'],
        indexedPlaceholderTypes: ['?'],
        namedPlaceholderTypes: [':'],
        lineCommentTypes: ['--'],
        specialWordChars: ['_', '$', '#', '.', '@'],
        operators: ['||', '**', '!=', ':=']
      });
    }
  }, {
    key: "tokenOverride",
    value: function tokenOverride(token) {
      if (Object(_core_token__WEBPACK_IMPORTED_MODULE_1__["isSet"])(token) && Object(_core_token__WEBPACK_IMPORTED_MODULE_1__["isBy"])(this.previousReservedToken)) {
        return {
          type: _core_tokenTypes__WEBPACK_IMPORTED_MODULE_3__["default"].RESERVED,
          value: token.value
        };
      }

      return token;
    }
  }]);

  return PlSqlFormatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/languages/PostgreSqlFormatter.js":
/*!**********************************************!*\
  !*** ./src/languages/PostgreSqlFormatter.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostgreSqlFormatter; });
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var reservedWords = ['ABORT', 'ABSOLUTE', 'ACCESS', 'ACTION', 'ADD', 'ADMIN', 'AFTER', 'AGGREGATE', 'ALL', 'ALSO', 'ALTER', 'ALWAYS', 'ANALYSE', 'ANALYZE', 'AND', 'ANY', 'ARRAY', 'AS', 'ASC', 'ASSERTION', 'ASSIGNMENT', 'ASYMMETRIC', 'AT', 'ATTACH', 'ATTRIBUTE', 'AUTHORIZATION', 'BACKWARD', 'BEFORE', 'BEGIN', 'BETWEEN', 'BIGINT', 'BINARY', 'BIT', 'BOOLEAN', 'BOTH', 'BY', 'CACHE', 'CALL', 'CALLED', 'CASCADE', 'CASCADED', 'CASE', 'CAST', 'CATALOG', 'CHAIN', 'CHAR', 'CHARACTER', 'CHARACTERISTICS', 'CHECK', 'CHECKPOINT', 'CLASS', 'CLOSE', 'CLUSTER', 'COALESCE', 'COLLATE', 'COLLATION', 'COLUMN', 'COLUMNS', 'COMMENT', 'COMMENTS', 'COMMIT', 'COMMITTED', 'CONCURRENTLY', 'CONFIGURATION', 'CONFLICT', 'CONNECTION', 'CONSTRAINT', 'CONSTRAINTS', 'CONTENT', 'CONTINUE', 'CONVERSION', 'COPY', 'COST', 'CREATE', 'CROSS', 'CSV', 'CUBE', 'CURRENT', 'CURRENT_CATALOG', 'CURRENT_DATE', 'CURRENT_ROLE', 'CURRENT_SCHEMA', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'CURSOR', 'CYCLE', 'DATA', 'DATABASE', 'DAY', 'DEALLOCATE', 'DEC', 'DECIMAL', 'DECLARE', 'DEFAULT', 'DEFAULTS', 'DEFERRABLE', 'DEFERRED', 'DEFINER', 'DELETE', 'DELIMITER', 'DELIMITERS', 'DEPENDS', 'DESC', 'DETACH', 'DICTIONARY', 'DISABLE', 'DISCARD', 'DISTINCT', 'DO', 'DOCUMENT', 'DOMAIN', 'DOUBLE', 'DROP', 'EACH', 'ELSE', 'ENABLE', 'ENCODING', 'ENCRYPTED', 'END', 'ENUM', 'ESCAPE', 'EVENT', 'EXCEPT', 'EXCLUDE', 'EXCLUDING', 'EXCLUSIVE', 'EXECUTE', 'EXISTS', 'EXPLAIN', 'EXPRESSION', 'EXTENSION', 'EXTERNAL', 'EXTRACT', 'FALSE', 'FAMILY', 'FETCH', 'FILTER', 'FIRST', 'FLOAT', 'FOLLOWING', 'FOR', 'FORCE', 'FOREIGN', 'FORWARD', 'FREEZE', 'FROM', 'FULL', 'FUNCTION', 'FUNCTIONS', 'GENERATED', 'GLOBAL', 'GRANT', 'GRANTED', 'GREATEST', 'GROUP', 'GROUPING', 'GROUPS', 'HANDLER', 'HAVING', 'HEADER', 'HOLD', 'HOUR', 'IDENTITY', 'IF', 'ILIKE', 'IMMEDIATE', 'IMMUTABLE', 'IMPLICIT', 'IMPORT', 'IN', 'INCLUDE', 'INCLUDING', 'INCREMENT', 'INDEX', 'INDEXES', 'INHERIT', 'INHERITS', 'INITIALLY', 'INLINE', 'INNER', 'INOUT', 'INPUT', 'INSENSITIVE', 'INSERT', 'INSTEAD', 'INT', 'INTEGER', 'INTERSECT', 'INTERVAL', 'INTO', 'INVOKER', 'IS', 'ISNULL', 'ISOLATION', 'JOIN', 'KEY', 'LABEL', 'LANGUAGE', 'LARGE', 'LAST', 'LATERAL', 'LEADING', 'LEAKPROOF', 'LEAST', 'LEFT', 'LEVEL', 'LIKE', 'LIMIT', 'LISTEN', 'LOAD', 'LOCAL', 'LOCALTIME', 'LOCALTIMESTAMP', 'LOCATION', 'LOCK', 'LOCKED', 'LOGGED', 'MAPPING', 'MATCH', 'MATERIALIZED', 'MAXVALUE', 'METHOD', 'MINUTE', 'MINVALUE', 'MODE', 'MONTH', 'MOVE', 'NAME', 'NAMES', 'NATIONAL', 'NATURAL', 'NCHAR', 'NEW', 'NEXT', 'NFC', 'NFD', 'NFKC', 'NFKD', 'NO', 'NONE', 'NORMALIZE', 'NORMALIZED', 'NOT', 'NOTHING', 'NOTIFY', 'NOTNULL', 'NOWAIT', 'NULL', 'NULLIF', 'NULLS', 'NUMERIC', 'OBJECT', 'OF', 'OFF', 'OFFSET', 'OIDS', 'OLD', 'ON', 'ONLY', 'OPERATOR', 'OPTION', 'OPTIONS', 'OR', 'ORDER', 'ORDINALITY', 'OTHERS', 'OUT', 'OUTER', 'OVER', 'OVERLAPS', 'OVERLAY', 'OVERRIDING', 'OWNED', 'OWNER', 'PARALLEL', 'PARSER', 'PARTIAL', 'PARTITION', 'PASSING', 'PASSWORD', 'PLACING', 'PLANS', 'POLICY', 'POSITION', 'PRECEDING', 'PRECISION', 'PREPARE', 'PREPARED', 'PRESERVE', 'PRIMARY', 'PRIOR', 'PRIVILEGES', 'PROCEDURAL', 'PROCEDURE', 'PROCEDURES', 'PROGRAM', 'PUBLICATION', 'QUOTE', 'RANGE', 'READ', 'REAL', 'REASSIGN', 'RECHECK', 'RECURSIVE', 'REF', 'REFERENCES', 'REFERENCING', 'REFRESH', 'REINDEX', 'RELATIVE', 'RELEASE', 'RENAME', 'REPEATABLE', 'REPLACE', 'REPLICA', 'RESET', 'RESTART', 'RESTRICT', 'RETURNING', 'RETURNS', 'REVOKE', 'RIGHT', 'ROLE', 'ROLLBACK', 'ROLLUP', 'ROUTINE', 'ROUTINES', 'ROW', 'ROWS', 'RULE', 'SAVEPOINT', 'SCHEMA', 'SCHEMAS', 'SCROLL', 'SEARCH', 'SECOND', 'SECURITY', 'SELECT', 'SEQUENCE', 'SEQUENCES', 'SERIALIZABLE', 'SERVER', 'SESSION', 'SESSION_USER', 'SET', 'SETOF', 'SETS', 'SHARE', 'SHOW', 'SIMILAR', 'SIMPLE', 'SKIP', 'SMALLINT', 'SNAPSHOT', 'SOME', 'SQL', 'STABLE', 'STANDALONE', 'START', 'STATEMENT', 'STATISTICS', 'STDIN', 'STDOUT', 'STORAGE', 'STORED', 'STRICT', 'STRIP', 'SUBSCRIPTION', 'SUBSTRING', 'SUPPORT', 'SYMMETRIC', 'SYSID', 'SYSTEM', 'TABLE', 'TABLES', 'TABLESAMPLE', 'TABLESPACE', 'TEMP', 'TEMPLATE', 'TEMPORARY', 'TEXT', 'THEN', 'TIES', 'TIME', 'TIMESTAMP', 'TO', 'TRAILING', 'TRANSACTION', 'TRANSFORM', 'TREAT', 'TRIGGER', 'TRIM', 'TRUE', 'TRUNCATE', 'TRUSTED', 'TYPE', 'TYPES', 'UESCAPE', 'UNBOUNDED', 'UNCOMMITTED', 'UNENCRYPTED', 'UNION', 'UNIQUE', 'UNKNOWN', 'UNLISTEN', 'UNLOGGED', 'UNTIL', 'UPDATE', 'USER', 'USING', 'VACUUM', 'VALID', 'VALIDATE', 'VALIDATOR', 'VALUE', 'VALUES', 'VARCHAR', 'VARIADIC', 'VARYING', 'VERBOSE', 'VERSION', 'VIEW', 'VIEWS', 'VOLATILE', 'WHEN', 'WHERE', 'WHITESPACE', 'WINDOW', 'WITH', 'WITHIN', 'WITHOUT', 'WORK', 'WRAPPER', 'WRITE', 'XML', 'XMLATTRIBUTES', 'XMLCONCAT', 'XMLELEMENT', 'XMLEXISTS', 'XMLFOREST', 'XMLNAMESPACES', 'XMLPARSE', 'XMLPI', 'XMLROOT', 'XMLSERIALIZE', 'XMLTABLE', 'YEAR', 'YES', 'ZONE'];
var reservedTopLevelWords = ['ADD', 'AFTER', 'ALTER COLUMN', 'ALTER TABLE', 'CASE', 'DELETE FROM', 'END', 'EXCEPT', 'FETCH FIRST', 'FROM', 'GROUP BY', 'HAVING', 'INSERT INTO', 'INSERT', 'LIMIT', 'ORDER BY', 'SELECT', 'SET CURRENT SCHEMA', 'SET SCHEMA', 'SET', 'UPDATE', 'VALUES', 'WHERE'];
var reservedTopLevelWordsNoIndent = ['INTERSECT', 'INTERSECT ALL', 'UNION', 'UNION ALL'];
var reservedNewlineWords = ['AND', 'ELSE', 'OR', 'WHEN', // joins
'JOIN', 'INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'FULL JOIN', 'FULL OUTER JOIN', 'CROSS JOIN', 'NATURAL JOIN'];

var PostgreSqlFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(PostgreSqlFormatter, _Formatter);

  var _super = _createSuper(PostgreSqlFormatter);

  function PostgreSqlFormatter() {
    _classCallCheck(this, PostgreSqlFormatter);

    return _super.apply(this, arguments);
  }

  _createClass(PostgreSqlFormatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ["\"\"", "''", "U&''", 'U&""', '$$'],
        openParens: ['(', 'CASE'],
        closeParens: [')', 'END'],
        indexedPlaceholderTypes: ['$'],
        namedPlaceholderTypes: [':'],
        lineCommentTypes: ['--'],
        operators: ['!=', '<<', '>>', '||/', '|/', '::', '->>', '->', '~~*', '~~', '!~~*', '!~~', '~*', '!~*', '!~', '!!']
      });
    }
  }]);

  return PostgreSqlFormatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/languages/RedshiftFormatter.js":
/*!********************************************!*\
  !*** ./src/languages/RedshiftFormatter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RedshiftFormatter; });
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var reservedWords = ['AES128', 'AES256', 'ALLOWOVERWRITE', 'ANALYSE', 'ARRAY', 'AS', 'ASC', 'AUTHORIZATION', 'BACKUP', 'BINARY', 'BLANKSASNULL', 'BOTH', 'BYTEDICT', 'BZIP2', 'CAST', 'CHECK', 'COLLATE', 'COLUMN', 'CONSTRAINT', 'CREATE', 'CREDENTIALS', 'CURRENT_DATE', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'CURRENT_USER_ID', 'DEFAULT', 'DEFERRABLE', 'DEFLATE', 'DEFRAG', 'DELTA', 'DELTA32K', 'DESC', 'DISABLE', 'DISTINCT', 'DO', 'ELSE', 'EMPTYASNULL', 'ENABLE', 'ENCODE', 'ENCRYPT', 'ENCRYPTION', 'END', 'EXPLICIT', 'FALSE', 'FOR', 'FOREIGN', 'FREEZE', 'FULL', 'GLOBALDICT256', 'GLOBALDICT64K', 'GRANT', 'GZIP', 'IDENTITY', 'IGNORE', 'ILIKE', 'INITIALLY', 'INTO', 'LEADING', 'LOCALTIME', 'LOCALTIMESTAMP', 'LUN', 'LUNS', 'LZO', 'LZOP', 'MINUS', 'MOSTLY13', 'MOSTLY32', 'MOSTLY8', 'NATURAL', 'NEW', 'NULLS', 'OFF', 'OFFLINE', 'OFFSET', 'OLD', 'ON', 'ONLY', 'OPEN', 'ORDER', 'OVERLAPS', 'PARALLEL', 'PARTITION', 'PERCENT', 'PERMISSIONS', 'PLACING', 'PRIMARY', 'RAW', 'READRATIO', 'RECOVER', 'REFERENCES', 'REJECTLOG', 'RESORT', 'RESTORE', 'SESSION_USER', 'SIMILAR', 'SYSDATE', 'SYSTEM', 'TABLE', 'TAG', 'TDES', 'TEXT255', 'TEXT32K', 'THEN', 'TIMESTAMP', 'TO', 'TOP', 'TRAILING', 'TRUE', 'TRUNCATECOLUMNS', 'UNIQUE', 'USER', 'USING', 'VERBOSE', 'WALLET', 'WHEN', 'WITH', 'WITHOUT', 'PREDICATE', 'COLUMNS', 'COMPROWS', 'COMPRESSION', 'COPY', 'FORMAT', 'DELIMITER', 'FIXEDWIDTH', 'AVRO', 'JSON', 'ENCRYPTED', 'BZIP2', 'GZIP', 'LZOP', 'PARQUET', 'ORC', 'ACCEPTANYDATE', 'ACCEPTINVCHARS', 'BLANKSASNULL', 'DATEFORMAT', 'EMPTYASNULL', 'ENCODING', 'ESCAPE', 'EXPLICIT_IDS', 'FILLRECORD', 'IGNOREBLANKLINES', 'IGNOREHEADER', 'NULL AS', 'REMOVEQUOTES', 'ROUNDEC', 'TIMEFORMAT', 'TRIMBLANKS', 'TRUNCATECOLUMNS', 'COMPROWS', 'COMPUPDATE', 'MAXERROR', 'NOLOAD', 'STATUPDATE', 'MANIFEST', 'REGION', 'IAM_ROLE', 'MASTER_SYMMETRIC_KEY', 'SSH', 'ACCEPTANYDATE', 'ACCEPTINVCHARS', 'ACCESS_KEY_ID', 'SECRET_ACCESS_KEY', 'AVRO', 'BLANKSASNULL', 'BZIP2', 'COMPROWS', 'COMPUPDATE', 'CREDENTIALS', 'DATEFORMAT', 'DELIMITER', 'EMPTYASNULL', 'ENCODING', 'ENCRYPTED', 'ESCAPE', 'EXPLICIT_IDS', 'FILLRECORD', 'FIXEDWIDTH', 'FORMAT', 'IAM_ROLE', 'GZIP', 'IGNOREBLANKLINES', 'IGNOREHEADER', 'JSON', 'LZOP', 'MANIFEST', 'MASTER_SYMMETRIC_KEY', 'MAXERROR', 'NOLOAD', 'NULL AS', 'READRATIO', 'REGION', 'REMOVEQUOTES', 'ROUNDEC', 'SSH', 'STATUPDATE', 'TIMEFORMAT', 'SESSION_TOKEN', 'TRIMBLANKS', 'TRUNCATECOLUMNS', 'EXTERNAL', 'DATA CATALOG', 'HIVE METASTORE', 'CATALOG_ROLE', 'VACUUM', 'COPY', 'UNLOAD', 'EVEN', 'ALL'];
var reservedTopLevelWords = ['ADD', 'AFTER', 'ALTER COLUMN', 'ALTER TABLE', 'DELETE FROM', 'EXCEPT', 'FROM', 'GROUP BY', 'HAVING', 'INSERT INTO', 'INSERT', 'INTERSECT', 'TOP', 'LIMIT', 'MODIFY', 'ORDER BY', 'SELECT', 'SET CURRENT SCHEMA', 'SET SCHEMA', 'SET', 'UNION ALL', 'UNION', 'UPDATE', 'VALUES', 'WHERE', 'VACUUM', 'COPY', 'UNLOAD', 'ANALYZE', 'ANALYSE', 'DISTKEY', 'SORTKEY', 'COMPOUND', 'INTERLEAVED', 'FORMAT', 'DELIMITER', 'FIXEDWIDTH', 'AVRO', 'JSON', 'ENCRYPTED', 'BZIP2', 'GZIP', 'LZOP', 'PARQUET', 'ORC', 'ACCEPTANYDATE', 'ACCEPTINVCHARS', 'BLANKSASNULL', 'DATEFORMAT', 'EMPTYASNULL', 'ENCODING', 'ESCAPE', 'EXPLICIT_IDS', 'FILLRECORD', 'IGNOREBLANKLINES', 'IGNOREHEADER', 'NULL AS', 'REMOVEQUOTES', 'ROUNDEC', 'TIMEFORMAT', 'TRIMBLANKS', 'TRUNCATECOLUMNS', 'COMPROWS', 'COMPUPDATE', 'MAXERROR', 'NOLOAD', 'STATUPDATE', 'MANIFEST', 'REGION', 'IAM_ROLE', 'MASTER_SYMMETRIC_KEY', 'SSH', 'ACCEPTANYDATE', 'ACCEPTINVCHARS', 'ACCESS_KEY_ID', 'SECRET_ACCESS_KEY', 'AVRO', 'BLANKSASNULL', 'BZIP2', 'COMPROWS', 'COMPUPDATE', 'CREDENTIALS', 'DATEFORMAT', 'DELIMITER', 'EMPTYASNULL', 'ENCODING', 'ENCRYPTED', 'ESCAPE', 'EXPLICIT_IDS', 'FILLRECORD', 'FIXEDWIDTH', 'FORMAT', 'IAM_ROLE', 'GZIP', 'IGNOREBLANKLINES', 'IGNOREHEADER', 'JSON', 'LZOP', 'MANIFEST', 'MASTER_SYMMETRIC_KEY', 'MAXERROR', 'NOLOAD', 'NULL AS', 'READRATIO', 'REGION', 'REMOVEQUOTES', 'ROUNDEC', 'SSH', 'STATUPDATE', 'TIMEFORMAT', 'SESSION_TOKEN', 'TRIMBLANKS', 'TRUNCATECOLUMNS', 'EXTERNAL', 'DATA CATALOG', 'HIVE METASTORE', 'CATALOG_ROLE'];
var reservedTopLevelWordsNoIndent = [];
var reservedNewlineWords = ['AND', 'ELSE', 'OR', 'OUTER APPLY', 'WHEN', 'VACUUM', 'COPY', 'UNLOAD', 'ANALYZE', 'ANALYSE', 'DISTKEY', 'SORTKEY', 'COMPOUND', 'INTERLEAVED', // joins
'JOIN', 'INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'FULL JOIN', 'FULL OUTER JOIN', 'CROSS JOIN', 'NATURAL JOIN'];

var RedshiftFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(RedshiftFormatter, _Formatter);

  var _super = _createSuper(RedshiftFormatter);

  function RedshiftFormatter() {
    _classCallCheck(this, RedshiftFormatter);

    return _super.apply(this, arguments);
  }

  _createClass(RedshiftFormatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ["\"\"", "''", '``'],
        openParens: ['('],
        closeParens: [')'],
        indexedPlaceholderTypes: ['?'],
        namedPlaceholderTypes: ['@', '#', '$'],
        lineCommentTypes: ['--'],
        operators: ['|/', '||/', '<<', '>>', '!=', '||']
      });
    }
  }]);

  return RedshiftFormatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/languages/SparkSqlFormatter.js":
/*!********************************************!*\
  !*** ./src/languages/SparkSqlFormatter.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SparkSqlFormatter; });
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/token */ "./src/core/token.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
/* harmony import */ var _core_tokenTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/tokenTypes */ "./src/core/tokenTypes.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var reservedWords = ['ALL', 'ALTER', 'ANALYSE', 'ANALYZE', 'ARRAY_ZIP', 'ARRAY', 'AS', 'ASC', 'AVG', 'BETWEEN', 'CASCADE', 'CASE', 'CAST', 'COALESCE', 'COLLECT_LIST', 'COLLECT_SET', 'COLUMN', 'COLUMNS', 'COMMENT', 'CONSTRAINT', 'CONTAINS', 'CONVERT', 'COUNT', 'CUME_DIST', 'CURRENT ROW', 'CURRENT_DATE', 'CURRENT_TIMESTAMP', 'DATABASE', 'DATABASES', 'DATE_ADD', 'DATE_SUB', 'DATE_TRUNC', 'DAY_HOUR', 'DAY_MINUTE', 'DAY_SECOND', 'DAY', 'DAYS', 'DECODE', 'DEFAULT', 'DELETE', 'DENSE_RANK', 'DESC', 'DESCRIBE', 'DISTINCT', 'DISTINCTROW', 'DIV', 'DROP', 'ELSE', 'ENCODE', 'END', 'EXISTS', 'EXPLAIN', 'EXPLODE_OUTER', 'EXPLODE', 'FILTER', 'FIRST_VALUE', 'FIRST', 'FIXED', 'FLATTEN', 'FOLLOWING', 'FROM_UNIXTIME', 'FULL', 'GREATEST', 'GROUP_CONCAT', 'HOUR_MINUTE', 'HOUR_SECOND', 'HOUR', 'HOURS', 'IF', 'IFNULL', 'IN', 'INSERT', 'INTERVAL', 'INTO', 'IS', 'LAG', 'LAST_VALUE', 'LAST', 'LEAD', 'LEADING', 'LEAST', 'LEVEL', 'LIKE', 'MAX', 'MERGE', 'MIN', 'MINUTE_SECOND', 'MINUTE', 'MONTH', 'NATURAL', 'NOT', 'NOW()', 'NTILE', 'NULL', 'NULLIF', 'OFFSET', 'ON DELETE', 'ON UPDATE', 'ON', 'ONLY', 'OPTIMIZE', 'OVER', 'PERCENT_RANK', 'PRECEDING', 'RANGE', 'RANK', 'REGEXP', 'RENAME', 'RLIKE', 'ROW', 'ROWS', 'SECOND', 'SEPARATOR', 'SEQUENCE', 'SIZE', 'STRING', 'STRUCT', 'SUM', 'TABLE', 'TABLES', 'TEMPORARY', 'THEN', 'TO_DATE', 'TO_JSON', 'TO', 'TRAILING', 'TRANSFORM', 'TRUE', 'TRUNCATE', 'TYPE', 'TYPES', 'UNBOUNDED', 'UNIQUE', 'UNIX_TIMESTAMP', 'UNLOCK', 'UNSIGNED', 'USING', 'VARIABLES', 'VIEW', 'WHEN', 'WITH', 'YEAR_MONTH'];
var reservedTopLevelWords = ['ADD', 'AFTER', 'ALTER COLUMN', 'ALTER DATABASE', 'ALTER SCHEMA', 'ALTER TABLE', 'CLUSTER BY', 'CLUSTERED BY', 'DELETE FROM', 'DISTRIBUTE BY', 'FROM', 'GROUP BY', 'HAVING', 'INSERT INTO', 'INSERT', 'LIMIT', 'OPTIONS', 'ORDER BY', 'PARTITION BY', 'PARTITIONED BY', 'RANGE', 'ROWS', 'SELECT', 'SET CURRENT SCHEMA', 'SET SCHEMA', 'SET', 'TBLPROPERTIES', 'UPDATE', 'USING', 'VALUES', 'WHERE', 'WINDOW'];
var reservedTopLevelWordsNoIndent = ['EXCEPT ALL', 'EXCEPT', 'INTERSECT ALL', 'INTERSECT', 'UNION ALL', 'UNION'];
var reservedNewlineWords = ['AND', 'CREATE OR', 'CREATE', 'ELSE', 'LATERAL VIEW', 'OR', 'OUTER APPLY', 'WHEN', 'XOR', // joins
'JOIN', 'INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'FULL JOIN', 'FULL OUTER JOIN', 'CROSS JOIN', 'NATURAL JOIN', // non-standard-joins
'ANTI JOIN', 'SEMI JOIN', 'LEFT ANTI JOIN', 'LEFT SEMI JOIN', 'RIGHT OUTER JOIN', 'RIGHT SEMI JOIN', 'NATURAL ANTI JOIN', 'NATURAL FULL OUTER JOIN', 'NATURAL INNER JOIN', 'NATURAL LEFT ANTI JOIN', 'NATURAL LEFT OUTER JOIN', 'NATURAL LEFT SEMI JOIN', 'NATURAL OUTER JOIN', 'NATURAL RIGHT OUTER JOIN', 'NATURAL RIGHT SEMI JOIN', 'NATURAL SEMI JOIN'];

var SparkSqlFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(SparkSqlFormatter, _Formatter);

  var _super = _createSuper(SparkSqlFormatter);

  function SparkSqlFormatter() {
    _classCallCheck(this, SparkSqlFormatter);

    return _super.apply(this, arguments);
  }

  _createClass(SparkSqlFormatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_2__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ["\"\"", "''", '``', '{}'],
        openParens: ['(', 'CASE'],
        closeParens: [')', 'END'],
        indexedPlaceholderTypes: ['?'],
        namedPlaceholderTypes: ['$'],
        lineCommentTypes: ['--'],
        operators: ['!=', '<=>', '&&', '||', '==']
      });
    }
  }, {
    key: "tokenOverride",
    value: function tokenOverride(token) {
      // Fix cases where names are ambiguously keywords or functions
      if (Object(_core_token__WEBPACK_IMPORTED_MODULE_1__["isWindow"])(token)) {
        var aheadToken = this.tokenLookAhead();

        if (aheadToken && aheadToken.type === _core_tokenTypes__WEBPACK_IMPORTED_MODULE_3__["default"].OPEN_PAREN) {
          // This is a function call, treat it as a reserved word
          return {
            type: _core_tokenTypes__WEBPACK_IMPORTED_MODULE_3__["default"].RESERVED,
            value: token.value
          };
        }
      } // Fix cases where names are ambiguously keywords or properties


      if (Object(_core_token__WEBPACK_IMPORTED_MODULE_1__["isEnd"])(token)) {
        var backToken = this.tokenLookBehind();

        if (backToken && backToken.type === _core_tokenTypes__WEBPACK_IMPORTED_MODULE_3__["default"].OPERATOR && backToken.value === '.') {
          // This is window().end (or similar) not CASE ... END
          return {
            type: _core_tokenTypes__WEBPACK_IMPORTED_MODULE_3__["default"].WORD,
            value: token.value
          };
        }
      }

      return token;
    }
  }]);

  return SparkSqlFormatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/languages/StandardSqlFormatter.js":
/*!***********************************************!*\
  !*** ./src/languages/StandardSqlFormatter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StandardSqlFormatter; });
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // https://jakewheat.github.io/sql-overview/sql-2008-foundation-grammar.html#reserved-word

var reservedWords = ['ABS', 'ALL', 'ALLOCATE', 'ALTER', 'AND', 'ANY', 'ARE', 'ARRAY', 'AS', 'ASENSITIVE', 'ASYMMETRIC', 'AT', 'ATOMIC', 'AUTHORIZATION', 'AVG', 'BEGIN', 'BETWEEN', 'BIGINT', 'BINARY', 'BLOB', 'BOOLEAN', 'BOTH', 'BY', 'CALL', 'CALLED', 'CARDINALITY', 'CASCADED', 'CASE', 'CAST', 'CEIL', 'CEILING', 'CHAR', 'CHAR_LENGTH', 'CHARACTER', 'CHARACTER_LENGTH', 'CHECK', 'CLOB', 'CLOSE', 'COALESCE', 'COLLATE', 'COLLECT', 'COLUMN', 'COMMIT', 'CONDITION', 'CONNECT', 'CONSTRAINT', 'CONVERT', 'CORR', 'CORRESPONDING', 'COUNT', 'COVAR_POP', 'COVAR_SAMP', 'CREATE', 'CROSS', 'CUBE', 'CUME_DIST', 'CURRENT', 'CURRENT_CATALOG', 'CURRENT_DATE', 'CURRENT_DEFAULT_TRANSFORM_GROUP', 'CURRENT_PATH', 'CURRENT_ROLE', 'CURRENT_SCHEMA', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_TRANSFORM_GROUP_FOR_TYPE', 'CURRENT_USER', 'CURSOR', 'CYCLE', 'DATE', 'DAY', 'DEALLOCATE', 'DEC', 'DECIMAL', 'DECLARE', 'DEFAULT', 'DELETE', 'DENSE_RANK', 'DEREF', 'DESCRIBE', 'DETERMINISTIC', 'DISCONNECT', 'DISTINCT', 'DOUBLE', 'DROP', 'DYNAMIC', 'EACH', 'ELEMENT', 'ELSE', 'END', 'END-EXEC', 'ESCAPE', 'EVERY', 'EXCEPT', 'EXEC', 'EXECUTE', 'EXISTS', 'EXP', 'EXTERNAL', 'EXTRACT', 'FALSE', 'FETCH', 'FILTER', 'FLOAT', 'FLOOR', 'FOR', 'FOREIGN', 'FREE', 'FROM', 'FULL', 'FUNCTION', 'FUSION', 'GET', 'GLOBAL', 'GRANT', 'GROUP', 'GROUPING', 'HAVING', 'HOLD', 'HOUR', 'IDENTITY', 'IN', 'INDICATOR', 'INNER', 'INOUT', 'INSENSITIVE', 'INSERT', 'INT', 'INTEGER', 'INTERSECT', 'INTERSECTION', 'INTERVAL', 'INTO', 'IS', 'JOIN', 'LANGUAGE', 'LARGE', 'LATERAL', 'LEADING', 'LEFT', 'LIKE', 'LIKE_REGEX', 'LN', 'LOCAL', 'LOCALTIME', 'LOCALTIMESTAMP', 'LOWER', 'MATCH', 'MAX', 'MEMBER', 'MERGE', 'METHOD', 'MIN', 'MINUTE', 'MOD', 'MODIFIES', 'MODULE', 'MONTH', 'MULTISET', 'NATIONAL', 'NATURAL', 'NCHAR', 'NCLOB', 'NEW', 'NO', 'NONE', 'NORMALIZE', 'NOT', 'NULL', 'NULLIF', 'NUMERIC', 'OCTET_LENGTH', 'OCCURRENCES_REGEX', 'OF', 'OLD', 'ON', 'ONLY', 'OPEN', 'OR', 'ORDER', 'OUT', 'OUTER', 'OVER', 'OVERLAPS', 'OVERLAY', 'PARAMETER', 'PARTITION', 'PERCENT_RANK', 'PERCENTILE_CONT', 'PERCENTILE_DISC', 'POSITION', 'POSITION_REGEX', 'POWER', 'PRECISION', 'PREPARE', 'PRIMARY', 'PROCEDURE', 'RANGE', 'RANK', 'READS', 'REAL', 'RECURSIVE', 'REF', 'REFERENCES', 'REFERENCING', 'REGR_AVGX', 'REGR_AVGY', 'REGR_COUNT', 'REGR_INTERCEPT', 'REGR_R2', 'REGR_SLOPE', 'REGR_SXX', 'REGR_SXY', 'REGR_SYY', 'RELEASE', 'RESULT', 'RETURN', 'RETURNS', 'REVOKE', 'RIGHT', 'ROLLBACK', 'ROLLUP', 'ROW', 'ROW_NUMBER', 'ROWS', 'SAVEPOINT', 'SCOPE', 'SCROLL', 'SEARCH', 'SECOND', 'SELECT', 'SENSITIVE', 'SESSION_USER', 'SET', 'SIMILAR', 'SMALLINT', 'SOME', 'SPECIFIC', 'SPECIFICTYPE', 'SQL', 'SQLEXCEPTION', 'SQLSTATE', 'SQLWARNING', 'SQRT', 'START', 'STATIC', 'STDDEV_POP', 'STDDEV_SAMP', 'SUBMULTISET', 'SUBSTRING', 'SUBSTRING_REGEX', 'SUM', 'SYMMETRIC', 'SYSTEM', 'SYSTEM_USER', 'TABLE', 'TABLESAMPLE', 'THEN', 'TIME', 'TIMESTAMP', 'TIMEZONE_HOUR', 'TIMEZONE_MINUTE', 'TO', 'TRAILING', 'TRANSLATE', 'TRANSLATE_REGEX', 'TRANSLATION', 'TREAT', 'TRIGGER', 'TRIM', 'TRUE', 'UESCAPE', 'UNION', 'UNIQUE', 'UNKNOWN', 'UNNEST', 'UPDATE', 'UPPER', 'USER', 'USING', 'VALUE', 'VALUES', 'VAR_POP', 'VAR_SAMP', 'VARBINARY', 'VARCHAR', 'VARYING', 'WHEN', 'WHENEVER', 'WHERE', 'WIDTH_BUCKET', 'WINDOW', 'WITH', 'WITHIN', 'WITHOUT', 'YEAR'];
var reservedTopLevelWords = ['ADD', 'ALTER COLUMN', 'ALTER TABLE', 'CASE', 'DELETE FROM', 'END', 'FETCH FIRST', 'FETCH NEXT', 'FETCH PRIOR', 'FETCH LAST', 'FETCH ABSOLUTE', 'FETCH RELATIVE', 'FROM', 'GROUP BY', 'HAVING', 'INSERT INTO', 'LIMIT', 'ORDER BY', 'SELECT', 'SET SCHEMA', 'SET', 'UPDATE', 'VALUES', 'WHERE'];
var reservedTopLevelWordsNoIndent = ['INTERSECT', 'INTERSECT ALL', 'INTERSECT DISTINCT', 'UNION', 'UNION ALL', 'UNION DISTINCT', 'EXCEPT', 'EXCEPT ALL', 'EXCEPT DISTINCT'];
var reservedNewlineWords = ['AND', 'ELSE', 'OR', 'WHEN', // joins
'JOIN', 'INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'FULL JOIN', 'FULL OUTER JOIN', 'CROSS JOIN', 'NATURAL JOIN'];

var StandardSqlFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(StandardSqlFormatter, _Formatter);

  var _super = _createSuper(StandardSqlFormatter);

  function StandardSqlFormatter() {
    _classCallCheck(this, StandardSqlFormatter);

    return _super.apply(this, arguments);
  }

  _createClass(StandardSqlFormatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ["\"\"", "''"],
        openParens: ['(', 'CASE'],
        closeParens: [')', 'END'],
        indexedPlaceholderTypes: ['?'],
        namedPlaceholderTypes: [],
        lineCommentTypes: ['--']
      });
    }
  }]);

  return StandardSqlFormatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/languages/TSqlFormatter.js":
/*!****************************************!*\
  !*** ./src/languages/TSqlFormatter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TSqlFormatter; });
/* harmony import */ var _core_Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Formatter */ "./src/core/Formatter.js");
/* harmony import */ var _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Tokenizer */ "./src/core/Tokenizer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var reservedWords = ['ADD', 'EXTERNAL', 'PROCEDURE', 'ALL', 'FETCH', 'PUBLIC', 'ALTER', 'FILE', 'RAISERROR', 'AND', 'FILLFACTOR', 'READ', 'ANY', 'FOR', 'READTEXT', 'AS', 'FOREIGN', 'RECONFIGURE', 'ASC', 'FREETEXT', 'REFERENCES', 'AUTHORIZATION', 'FREETEXTTABLE', 'REPLICATION', 'BACKUP', 'FROM', 'RESTORE', 'BEGIN', 'FULL', 'RESTRICT', 'BETWEEN', 'FUNCTION', 'RETURN', 'BREAK', 'GOTO', 'REVERT', 'BROWSE', 'GRANT', 'REVOKE', 'BULK', 'GROUP', 'RIGHT', 'BY', 'HAVING', 'ROLLBACK', 'CASCADE', 'HOLDLOCK', 'ROWCOUNT', 'CASE', 'IDENTITY', 'ROWGUIDCOL', 'CHECK', 'IDENTITY_INSERT', 'RULE', 'CHECKPOINT', 'IDENTITYCOL', 'SAVE', 'CLOSE', 'IF', 'SCHEMA', 'CLUSTERED', 'IN', 'SECURITYAUDIT', 'COALESCE', 'INDEX', 'SELECT', 'COLLATE', 'INNER', 'SEMANTICKEYPHRASETABLE', 'COLUMN', 'INSERT', 'SEMANTICSIMILARITYDETAILSTABLE', 'COMMIT', 'INTERSECT', 'SEMANTICSIMILARITYTABLE', 'COMPUTE', 'INTO', 'SESSION_USER', 'CONSTRAINT', 'IS', 'SET', 'CONTAINS', 'JOIN', 'SETUSER', 'CONTAINSTABLE', 'KEY', 'SHUTDOWN', 'CONTINUE', 'KILL', 'SOME', 'CONVERT', 'LEFT', 'STATISTICS', 'CREATE', 'LIKE', 'SYSTEM_USER', 'CROSS', 'LINENO', 'TABLE', 'CURRENT', 'LOAD', 'TABLESAMPLE', 'CURRENT_DATE', 'MERGE', 'TEXTSIZE', 'CURRENT_TIME', 'NATIONAL', 'THEN', 'CURRENT_TIMESTAMP', 'NOCHECK', 'TO', 'CURRENT_USER', 'NONCLUSTERED', 'TOP', 'CURSOR', 'NOT', 'TRAN', 'DATABASE', 'NULL', 'TRANSACTION', 'DBCC', 'NULLIF', 'TRIGGER', 'DEALLOCATE', 'OF', 'TRUNCATE', 'DECLARE', 'OFF', 'TRY_CONVERT', 'DEFAULT', 'OFFSETS', 'TSEQUAL', 'DELETE', 'ON', 'UNION', 'DENY', 'OPEN', 'UNIQUE', 'DESC', 'OPENDATASOURCE', 'UNPIVOT', 'DISK', 'OPENQUERY', 'UPDATE', 'DISTINCT', 'OPENROWSET', 'UPDATETEXT', 'DISTRIBUTED', 'OPENXML', 'USE', 'DOUBLE', 'OPTION', 'USER', 'DROP', 'OR', 'VALUES', 'DUMP', 'ORDER', 'VARYING', 'ELSE', 'OUTER', 'VIEW', 'END', 'OVER', 'WAITFOR', 'ERRLVL', 'PERCENT', 'WHEN', 'ESCAPE', 'PIVOT', 'WHERE', 'EXCEPT', 'PLAN', 'WHILE', 'EXEC', 'PRECISION', 'WITH', 'EXECUTE', 'PRIMARY', 'WITHIN GROUP', 'EXISTS', 'PRINT', 'WRITETEXT', 'EXIT', 'PROC'];
var reservedTopLevelWords = ['ADD', 'ALTER COLUMN', 'ALTER TABLE', 'CASE', 'DELETE FROM', 'END', 'EXCEPT', 'FROM', 'GROUP BY', 'HAVING', 'INSERT INTO', 'INSERT', 'LIMIT', 'ORDER BY', 'SELECT', 'SET CURRENT SCHEMA', 'SET SCHEMA', 'SET', 'UPDATE', 'VALUES', 'WHERE'];
var reservedTopLevelWordsNoIndent = ['INTERSECT', 'INTERSECT ALL', 'MINUS', 'UNION', 'UNION ALL'];
var reservedNewlineWords = ['AND', 'ELSE', 'OR', 'WHEN', // joins
'JOIN', 'INNER JOIN', 'LEFT JOIN', 'LEFT OUTER JOIN', 'RIGHT JOIN', 'RIGHT OUTER JOIN', 'FULL JOIN', 'FULL OUTER JOIN', 'CROSS JOIN'];

var TSqlFormatter = /*#__PURE__*/function (_Formatter) {
  _inherits(TSqlFormatter, _Formatter);

  var _super = _createSuper(TSqlFormatter);

  function TSqlFormatter() {
    _classCallCheck(this, TSqlFormatter);

    return _super.apply(this, arguments);
  }

  _createClass(TSqlFormatter, [{
    key: "tokenizer",
    value: function tokenizer() {
      return new _core_Tokenizer__WEBPACK_IMPORTED_MODULE_1__["default"]({
        reservedWords: reservedWords,
        reservedTopLevelWords: reservedTopLevelWords,
        reservedNewlineWords: reservedNewlineWords,
        reservedTopLevelWordsNoIndent: reservedTopLevelWordsNoIndent,
        stringTypes: ["\"\"", "N''", "''", '[]'],
        openParens: ['(', 'CASE'],
        closeParens: [')', 'END'],
        indexedPlaceholderTypes: [],
        namedPlaceholderTypes: ['@'],
        lineCommentTypes: ['--'],
        specialWordChars: ['#', '@'],
        operators: ['>=', '<=', '<>', '!=', '!<', '!>', '+=', '-=', '*=', '/=', '%=', '|=', '&=', '^=', '::'] // TODO: Support for money constants

      });
    }
  }]);

  return TSqlFormatter;
}(_core_Formatter__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/sqlFormatter.js":
/*!*****************************!*\
  !*** ./src/sqlFormatter.js ***!
  \*****************************/
/*! exports provided: format, supportedDialects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedDialects", function() { return supportedDialects; });
/* harmony import */ var _languages_Db2Formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages/Db2Formatter */ "./src/languages/Db2Formatter.js");
/* harmony import */ var _languages_MariaDbFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languages/MariaDbFormatter */ "./src/languages/MariaDbFormatter.js");
/* harmony import */ var _languages_MySqlFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages/MySqlFormatter */ "./src/languages/MySqlFormatter.js");
/* harmony import */ var _languages_N1qlFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languages/N1qlFormatter */ "./src/languages/N1qlFormatter.js");
/* harmony import */ var _languages_PlSqlFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./languages/PlSqlFormatter */ "./src/languages/PlSqlFormatter.js");
/* harmony import */ var _languages_PostgreSqlFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languages/PostgreSqlFormatter */ "./src/languages/PostgreSqlFormatter.js");
/* harmony import */ var _languages_RedshiftFormatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./languages/RedshiftFormatter */ "./src/languages/RedshiftFormatter.js");
/* harmony import */ var _languages_SparkSqlFormatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./languages/SparkSqlFormatter */ "./src/languages/SparkSqlFormatter.js");
/* harmony import */ var _languages_StandardSqlFormatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./languages/StandardSqlFormatter */ "./src/languages/StandardSqlFormatter.js");
/* harmony import */ var _languages_TSqlFormatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./languages/TSqlFormatter */ "./src/languages/TSqlFormatter.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }











var formatters = {
  db2: _languages_Db2Formatter__WEBPACK_IMPORTED_MODULE_0__["default"],
  mariadb: _languages_MariaDbFormatter__WEBPACK_IMPORTED_MODULE_1__["default"],
  mysql: _languages_MySqlFormatter__WEBPACK_IMPORTED_MODULE_2__["default"],
  n1ql: _languages_N1qlFormatter__WEBPACK_IMPORTED_MODULE_3__["default"],
  plsql: _languages_PlSqlFormatter__WEBPACK_IMPORTED_MODULE_4__["default"],
  postgresql: _languages_PostgreSqlFormatter__WEBPACK_IMPORTED_MODULE_5__["default"],
  redshift: _languages_RedshiftFormatter__WEBPACK_IMPORTED_MODULE_6__["default"],
  spark: _languages_SparkSqlFormatter__WEBPACK_IMPORTED_MODULE_7__["default"],
  sql: _languages_StandardSqlFormatter__WEBPACK_IMPORTED_MODULE_8__["default"],
  tsql: _languages_TSqlFormatter__WEBPACK_IMPORTED_MODULE_9__["default"]
};
/**
 * Format whitespace in a query to make it easier to read.
 *
 * @param {String} query
 * @param {Object} cfg
 *  @param {String} cfg.language Query language, default is Standard SQL
 *  @param {String} cfg.indent Characters used for indentation, default is "  " (2 spaces)
 *  @param {Boolean} cfg.uppercase Converts keywords to uppercase
 *  @param {Integer} cfg.linesBetweenQueries How many line breaks between queries
 *  @param {Object} cfg.params Collection of params for placeholder replacement
 * @return {String}
 */

var format = function format(query) {
  var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof query !== 'string') {
    throw new Error('Invalid query argument. Extected string, instead got ' + _typeof(query));
  }

  var Formatter = _languages_StandardSqlFormatter__WEBPACK_IMPORTED_MODULE_8__["default"];

  if (cfg.language !== undefined) {
    Formatter = formatters[cfg.language];
  }

  if (Formatter === undefined) {
    throw Error("Unsupported SQL dialect: ".concat(cfg.language));
  }

  return new Formatter(cfg).format(query);
};
var supportedDialects = Object.keys(formatters);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: trimSpacesEnd, last, isEmpty, escapeRegExp, sortByLengthDesc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimSpacesEnd", function() { return trimSpacesEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByLengthDesc", function() { return sortByLengthDesc; });
// Only removes spaces, not newlines
var trimSpacesEnd = function trimSpacesEnd(str) {
  return str.replace(/[\t ]+$/, '');
}; // Last element from array

var last = function last(arr) {
  return arr[arr.length - 1];
}; // True array is empty, or it's not an array at all

var isEmpty = function isEmpty(arr) {
  return !Array.isArray(arr) || arr.length === 0;
}; // Escapes regex special chars

var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[\$\(-\+\.\?\[-\^\{-\}]/g, '\\$&');
}; // Sorts strings by length, so that longer ones are first
// Also sorts alphabetically after sorting by length.

var sortByLengthDesc = function sortByLengthDesc(strings) {
  return strings.sort(function (a, b) {
    return b.length - a.length || a.localeCompare(b);
  });
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3NxbEZvcm1hdHRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvY29yZS9Gb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvSW5kZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvSW5saW5lQmxvY2suanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvUGFyYW1zLmpzIiwid2VicGFjazovL3NxbEZvcm1hdHRlci8uL3NyYy9jb3JlL1Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvY29yZS9yZWdleEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2NvcmUvdG9rZW5UeXBlcy5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvbGFuZ3VhZ2VzL0RiMkZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvbGFuZ3VhZ2VzL01hcmlhRGJGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2xhbmd1YWdlcy9NeVNxbEZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvbGFuZ3VhZ2VzL04xcWxGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2xhbmd1YWdlcy9QbFNxbEZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvbGFuZ3VhZ2VzL1Bvc3RncmVTcWxGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2xhbmd1YWdlcy9SZWRzaGlmdEZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly9zcWxGb3JtYXR0ZXIvLi9zcmMvbGFuZ3VhZ2VzL1NwYXJrU3FsRm9ybWF0dGVyLmpzIiwid2VicGFjazovL3NxbEZvcm1hdHRlci8uL3NyYy9sYW5ndWFnZXMvU3RhbmRhcmRTcWxGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL2xhbmd1YWdlcy9UU3FsRm9ybWF0dGVyLmpzIiwid2VicGFjazovL3NxbEZvcm1hdHRlci8uL3NyYy9zcWxGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc3FsRm9ybWF0dGVyLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkZvcm1hdHRlciIsImNmZyIsImluZGVudGF0aW9uIiwiSW5kZW50YXRpb24iLCJpbmRlbnQiLCJpbmxpbmVCbG9jayIsIklubGluZUJsb2NrIiwicGFyYW1zIiwiUGFyYW1zIiwicHJldmlvdXNSZXNlcnZlZFRva2VuIiwidG9rZW5zIiwiaW5kZXgiLCJFcnJvciIsInRva2VuIiwicXVlcnkiLCJ0b2tlbml6ZXIiLCJ0b2tlbml6ZSIsImZvcm1hdHRlZFF1ZXJ5IiwiZ2V0Rm9ybWF0dGVkUXVlcnlGcm9tVG9rZW5zIiwidHJpbSIsImZvckVhY2giLCJ0b2tlbk92ZXJyaWRlIiwidHlwZSIsInRva2VuVHlwZXMiLCJMSU5FX0NPTU1FTlQiLCJmb3JtYXRMaW5lQ29tbWVudCIsIkJMT0NLX0NPTU1FTlQiLCJmb3JtYXRCbG9ja0NvbW1lbnQiLCJSRVNFUlZFRF9UT1BfTEVWRUwiLCJmb3JtYXRUb3BMZXZlbFJlc2VydmVkV29yZCIsIlJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlQiLCJmb3JtYXRUb3BMZXZlbFJlc2VydmVkV29yZE5vSW5kZW50IiwiUkVTRVJWRURfTkVXTElORSIsImZvcm1hdE5ld2xpbmVSZXNlcnZlZFdvcmQiLCJSRVNFUlZFRCIsImZvcm1hdFdpdGhTcGFjZXMiLCJPUEVOX1BBUkVOIiwiZm9ybWF0T3BlbmluZ1BhcmVudGhlc2VzIiwiQ0xPU0VfUEFSRU4iLCJmb3JtYXRDbG9zaW5nUGFyZW50aGVzZXMiLCJQTEFDRUhPTERFUiIsImZvcm1hdFBsYWNlaG9sZGVyIiwidmFsdWUiLCJmb3JtYXRDb21tYSIsImZvcm1hdFdpdGhTcGFjZUFmdGVyIiwiZm9ybWF0V2l0aG91dFNwYWNlcyIsImZvcm1hdFF1ZXJ5U2VwYXJhdG9yIiwiYWRkTmV3bGluZSIsInNob3ciLCJpbmRlbnRDb21tZW50IiwiY29tbWVudCIsInJlcGxhY2UiLCJnZXRJbmRlbnQiLCJkZWNyZWFzZVRvcExldmVsIiwiZXF1YWxpemVXaGl0ZXNwYWNlIiwiaW5jcmVhc2VUb3BMZXZlbCIsImlzQW5kIiwiaXNCZXR3ZWVuIiwidG9rZW5Mb29rQmVoaW5kIiwic3RyaW5nIiwicHJlc2VydmVXaGl0ZXNwYWNlRm9yIiwiT1BFUkFUT1IiLCJ3aGl0ZXNwYWNlQmVmb3JlIiwibGVuZ3RoIiwidHJpbVNwYWNlc0VuZCIsImJlZ2luSWZQb3NzaWJsZSIsImlzQWN0aXZlIiwiaW5jcmVhc2VCbG9ja0xldmVsIiwiZW5kIiwiZGVjcmVhc2VCbG9ja0xldmVsIiwiZ2V0IiwiaXNMaW1pdCIsInJlc2V0SW5kZW50YXRpb24iLCJyZXBlYXQiLCJsaW5lc0JldHdlZW5RdWVyaWVzIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJlbmRzV2l0aCIsIm4iLCJJTkRFTlRfVFlQRV9UT1BfTEVWRUwiLCJJTkRFTlRfVFlQRV9CTE9DS19MRVZFTCIsImluZGVudFR5cGVzIiwicHVzaCIsImxhc3QiLCJwb3AiLCJJTkxJTkVfTUFYX0xFTkdUSCIsImxldmVsIiwiaXNJbmxpbmVCbG9jayIsImkiLCJpc0ZvcmJpZGRlblRva2VuIiwiQ09NTUVOVCIsImtleSIsIlRva2VuaXplciIsIldISVRFU1BBQ0VfUkVHRVgiLCJOVU1CRVJfUkVHRVgiLCJPUEVSQVRPUl9SRUdFWCIsInJlZ2V4RmFjdG9yeSIsIm9wZXJhdG9ycyIsIkJMT0NLX0NPTU1FTlRfUkVHRVgiLCJMSU5FX0NPTU1FTlRfUkVHRVgiLCJsaW5lQ29tbWVudFR5cGVzIiwiUkVTRVJWRURfVE9QX0xFVkVMX1JFR0VYIiwicmVzZXJ2ZWRUb3BMZXZlbFdvcmRzIiwiUkVTRVJWRURfVE9QX0xFVkVMX05PX0lOREVOVF9SRUdFWCIsInJlc2VydmVkVG9wTGV2ZWxXb3Jkc05vSW5kZW50IiwiUkVTRVJWRURfTkVXTElORV9SRUdFWCIsInJlc2VydmVkTmV3bGluZVdvcmRzIiwiUkVTRVJWRURfUExBSU5fUkVHRVgiLCJyZXNlcnZlZFdvcmRzIiwiV09SRF9SRUdFWCIsInNwZWNpYWxXb3JkQ2hhcnMiLCJTVFJJTkdfUkVHRVgiLCJzdHJpbmdUeXBlcyIsIk9QRU5fUEFSRU5fUkVHRVgiLCJvcGVuUGFyZW5zIiwiQ0xPU0VfUEFSRU5fUkVHRVgiLCJjbG9zZVBhcmVucyIsIklOREVYRURfUExBQ0VIT0xERVJfUkVHRVgiLCJpbmRleGVkUGxhY2Vob2xkZXJUeXBlcyIsIklERU5UX05BTUVEX1BMQUNFSE9MREVSX1JFR0VYIiwibmFtZWRQbGFjZWhvbGRlclR5cGVzIiwiU1RSSU5HX05BTUVEX1BMQUNFSE9MREVSX1JFR0VYIiwiaW5wdXQiLCJnZXRXaGl0ZXNwYWNlIiwic3Vic3RyaW5nIiwiZ2V0TmV4dFRva2VuIiwibWF0Y2hlcyIsIm1hdGNoIiwicHJldmlvdXNUb2tlbiIsImdldENvbW1lbnRUb2tlbiIsImdldFN0cmluZ1Rva2VuIiwiZ2V0T3BlblBhcmVuVG9rZW4iLCJnZXRDbG9zZVBhcmVuVG9rZW4iLCJnZXRQbGFjZWhvbGRlclRva2VuIiwiZ2V0TnVtYmVyVG9rZW4iLCJnZXRSZXNlcnZlZFdvcmRUb2tlbiIsImdldFdvcmRUb2tlbiIsImdldE9wZXJhdG9yVG9rZW4iLCJnZXRMaW5lQ29tbWVudFRva2VuIiwiZ2V0QmxvY2tDb21tZW50VG9rZW4iLCJnZXRUb2tlbk9uRmlyc3RNYXRjaCIsInJlZ2V4IiwiU1RSSU5HIiwiZ2V0SWRlbnROYW1lZFBsYWNlaG9sZGVyVG9rZW4iLCJnZXRTdHJpbmdOYW1lZFBsYWNlaG9sZGVyVG9rZW4iLCJnZXRJbmRleGVkUGxhY2Vob2xkZXJUb2tlbiIsImdldFBsYWNlaG9sZGVyVG9rZW5XaXRoS2V5IiwicGFyc2VLZXkiLCJ2Iiwic2xpY2UiLCJnZXRFc2NhcGVkUGxhY2Vob2xkZXJLZXkiLCJxdW90ZUNoYXIiLCJSZWdFeHAiLCJlc2NhcGVSZWdFeHAiLCJOVU1CRVIiLCJ1bmRlZmluZWQiLCJnZXRUb3BMZXZlbFJlc2VydmVkVG9rZW4iLCJnZXROZXdsaW5lUmVzZXJ2ZWRUb2tlbiIsImdldFRvcExldmVsUmVzZXJ2ZWRUb2tlbk5vSW5kZW50IiwiZ2V0UGxhaW5SZXNlcnZlZFRva2VuIiwiV09SRCIsImNyZWF0ZU9wZXJhdG9yUmVnZXgiLCJtdWx0aUxldHRlck9wZXJhdG9ycyIsInNvcnRCeUxlbmd0aERlc2MiLCJtYXAiLCJqb2luIiwiY3JlYXRlTGluZUNvbW1lbnRSZWdleCIsImMiLCJjcmVhdGVSZXNlcnZlZFdvcmRSZWdleCIsInJlc2VydmVkV29yZHNQYXR0ZXJuIiwiY3JlYXRlV29yZFJlZ2V4Iiwic3BlY2lhbENoYXJzIiwiY3JlYXRlU3RyaW5nUmVnZXgiLCJjcmVhdGVTdHJpbmdQYXR0ZXJuIiwicGF0dGVybnMiLCIkJCIsInQiLCJjcmVhdGVQYXJlblJlZ2V4IiwicGFyZW5zIiwiZXNjYXBlUGFyZW4iLCJwYXJlbiIsImNyZWF0ZVBsYWNlaG9sZGVyUmVnZXgiLCJ0eXBlcyIsInBhdHRlcm4iLCJpc0VtcHR5IiwidHlwZXNSZWdleCIsImlzVG9rZW4iLCJ0ZXN0IiwiaXNTZXQiLCJpc0J5IiwiaXNXaW5kb3ciLCJpc0VuZCIsIkRiMkZvcm1hdHRlciIsIk1hcmlhRGJGb3JtYXR0ZXIiLCJNeVNxbEZvcm1hdHRlciIsIk4xcWxGb3JtYXR0ZXIiLCJQbFNxbEZvcm1hdHRlciIsIlBvc3RncmVTcWxGb3JtYXR0ZXIiLCJSZWRzaGlmdEZvcm1hdHRlciIsIlNwYXJrU3FsRm9ybWF0dGVyIiwiYWhlYWRUb2tlbiIsInRva2VuTG9va0FoZWFkIiwiYmFja1Rva2VuIiwiU3RhbmRhcmRTcWxGb3JtYXR0ZXIiLCJUU3FsRm9ybWF0dGVyIiwiZm9ybWF0dGVycyIsImRiMiIsIm1hcmlhZGIiLCJteXNxbCIsIm4xcWwiLCJwbHNxbCIsInBvc3RncmVzcWwiLCJyZWRzaGlmdCIsInNwYXJrIiwic3FsIiwidHNxbCIsImZvcm1hdCIsImxhbmd1YWdlIiwic3VwcG9ydGVkRGlhbGVjdHMiLCJPYmplY3QiLCJrZXlzIiwic3RyIiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5Iiwic3RyaW5ncyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxTO0FBQ25CO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxxQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBSUMsb0RBQUosQ0FBZ0IsS0FBS0YsR0FBTCxDQUFTRyxNQUF6QixDQUFuQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBSUMsb0RBQUosRUFBbkI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsK0NBQUosQ0FBVyxLQUFLUCxHQUFMLENBQVNNLE1BQXBCLENBQWQ7QUFDQSxTQUFLRSxxQkFBTCxHQUE2QixFQUE3QjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7Ozs7Z0NBQ2M7QUFDVixZQUFNLElBQUlDLEtBQUosQ0FBVSx5Q0FBVixDQUFOO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztrQ0FDZ0JDLEssRUFBTztBQUNuQjtBQUNBLGFBQU9BLEtBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsyQkFDU0MsSyxFQUFPO0FBQ1osV0FBS0osTUFBTCxHQUFjLEtBQUtLLFNBQUwsR0FBaUJDLFFBQWpCLENBQTBCRixLQUExQixDQUFkO0FBQ0EsVUFBTUcsY0FBYyxHQUFHLEtBQUtDLDJCQUFMLEVBQXZCO0FBRUEsYUFBT0QsY0FBYyxDQUFDRSxJQUFmLEVBQVA7QUFDRDs7O2tEQUU2QjtBQUFBOztBQUM1QixVQUFJRixjQUFjLEdBQUcsRUFBckI7QUFFQSxXQUFLUCxNQUFMLENBQVlVLE9BQVosQ0FBb0IsVUFBQ1AsS0FBRCxFQUFRRixLQUFSLEVBQWtCO0FBQ3BDLGFBQUksQ0FBQ0EsS0FBTCxHQUFhQSxLQUFiO0FBRUFFLGFBQUssR0FBRyxLQUFJLENBQUNRLGFBQUwsQ0FBbUJSLEtBQW5CLENBQVI7O0FBRUEsWUFBSUEsS0FBSyxDQUFDUyxJQUFOLEtBQWVDLG1EQUFVLENBQUNDLFlBQTlCLEVBQTRDO0FBQzFDUCx3QkFBYyxHQUFHLEtBQUksQ0FBQ1EsaUJBQUwsQ0FBdUJaLEtBQXZCLEVBQThCSSxjQUE5QixDQUFqQjtBQUNELFNBRkQsTUFFTyxJQUFJSixLQUFLLENBQUNTLElBQU4sS0FBZUMsbURBQVUsQ0FBQ0csYUFBOUIsRUFBNkM7QUFDbERULHdCQUFjLEdBQUcsS0FBSSxDQUFDVSxrQkFBTCxDQUF3QmQsS0FBeEIsRUFBK0JJLGNBQS9CLENBQWpCO0FBQ0QsU0FGTSxNQUVBLElBQUlKLEtBQUssQ0FBQ1MsSUFBTixLQUFlQyxtREFBVSxDQUFDSyxrQkFBOUIsRUFBa0Q7QUFDdkRYLHdCQUFjLEdBQUcsS0FBSSxDQUFDWSwwQkFBTCxDQUFnQ2hCLEtBQWhDLEVBQXVDSSxjQUF2QyxDQUFqQjtBQUNBLGVBQUksQ0FBQ1IscUJBQUwsR0FBNkJJLEtBQTdCO0FBQ0QsU0FITSxNQUdBLElBQUlBLEtBQUssQ0FBQ1MsSUFBTixLQUFlQyxtREFBVSxDQUFDTyw0QkFBOUIsRUFBNEQ7QUFDakViLHdCQUFjLEdBQUcsS0FBSSxDQUFDYyxrQ0FBTCxDQUF3Q2xCLEtBQXhDLEVBQStDSSxjQUEvQyxDQUFqQjtBQUNBLGVBQUksQ0FBQ1IscUJBQUwsR0FBNkJJLEtBQTdCO0FBQ0QsU0FITSxNQUdBLElBQUlBLEtBQUssQ0FBQ1MsSUFBTixLQUFlQyxtREFBVSxDQUFDUyxnQkFBOUIsRUFBZ0Q7QUFDckRmLHdCQUFjLEdBQUcsS0FBSSxDQUFDZ0IseUJBQUwsQ0FBK0JwQixLQUEvQixFQUFzQ0ksY0FBdEMsQ0FBakI7QUFDQSxlQUFJLENBQUNSLHFCQUFMLEdBQTZCSSxLQUE3QjtBQUNELFNBSE0sTUFHQSxJQUFJQSxLQUFLLENBQUNTLElBQU4sS0FBZUMsbURBQVUsQ0FBQ1csUUFBOUIsRUFBd0M7QUFDN0NqQix3QkFBYyxHQUFHLEtBQUksQ0FBQ2tCLGdCQUFMLENBQXNCdEIsS0FBdEIsRUFBNkJJLGNBQTdCLENBQWpCO0FBQ0EsZUFBSSxDQUFDUixxQkFBTCxHQUE2QkksS0FBN0I7QUFDRCxTQUhNLE1BR0EsSUFBSUEsS0FBSyxDQUFDUyxJQUFOLEtBQWVDLG1EQUFVLENBQUNhLFVBQTlCLEVBQTBDO0FBQy9DbkIsd0JBQWMsR0FBRyxLQUFJLENBQUNvQix3QkFBTCxDQUE4QnhCLEtBQTlCLEVBQXFDSSxjQUFyQyxDQUFqQjtBQUNELFNBRk0sTUFFQSxJQUFJSixLQUFLLENBQUNTLElBQU4sS0FBZUMsbURBQVUsQ0FBQ2UsV0FBOUIsRUFBMkM7QUFDaERyQix3QkFBYyxHQUFHLEtBQUksQ0FBQ3NCLHdCQUFMLENBQThCMUIsS0FBOUIsRUFBcUNJLGNBQXJDLENBQWpCO0FBQ0QsU0FGTSxNQUVBLElBQUlKLEtBQUssQ0FBQ1MsSUFBTixLQUFlQyxtREFBVSxDQUFDaUIsV0FBOUIsRUFBMkM7QUFDaER2Qix3QkFBYyxHQUFHLEtBQUksQ0FBQ3dCLGlCQUFMLENBQXVCNUIsS0FBdkIsRUFBOEJJLGNBQTlCLENBQWpCO0FBQ0QsU0FGTSxNQUVBLElBQUlKLEtBQUssQ0FBQzZCLEtBQU4sS0FBZ0IsR0FBcEIsRUFBeUI7QUFDOUJ6Qix3QkFBYyxHQUFHLEtBQUksQ0FBQzBCLFdBQUwsQ0FBaUI5QixLQUFqQixFQUF3QkksY0FBeEIsQ0FBakI7QUFDRCxTQUZNLE1BRUEsSUFBSUosS0FBSyxDQUFDNkIsS0FBTixLQUFnQixHQUFwQixFQUF5QjtBQUM5QnpCLHdCQUFjLEdBQUcsS0FBSSxDQUFDMkIsb0JBQUwsQ0FBMEIvQixLQUExQixFQUFpQ0ksY0FBakMsQ0FBakI7QUFDRCxTQUZNLE1BRUEsSUFBSUosS0FBSyxDQUFDNkIsS0FBTixLQUFnQixHQUFwQixFQUF5QjtBQUM5QnpCLHdCQUFjLEdBQUcsS0FBSSxDQUFDNEIsbUJBQUwsQ0FBeUJoQyxLQUF6QixFQUFnQ0ksY0FBaEMsQ0FBakI7QUFDRCxTQUZNLE1BRUEsSUFBSUosS0FBSyxDQUFDNkIsS0FBTixLQUFnQixHQUFwQixFQUF5QjtBQUM5QnpCLHdCQUFjLEdBQUcsS0FBSSxDQUFDNkIsb0JBQUwsQ0FBMEJqQyxLQUExQixFQUFpQ0ksY0FBakMsQ0FBakI7QUFDRCxTQUZNLE1BRUE7QUFDTEEsd0JBQWMsR0FBRyxLQUFJLENBQUNrQixnQkFBTCxDQUFzQnRCLEtBQXRCLEVBQTZCSSxjQUE3QixDQUFqQjtBQUNEO0FBQ0YsT0F0Q0Q7QUF1Q0EsYUFBT0EsY0FBUDtBQUNEOzs7c0NBRWlCSixLLEVBQU9DLEssRUFBTztBQUM5QixhQUFPLEtBQUtpQyxVQUFMLENBQWdCakMsS0FBSyxHQUFHLEtBQUtrQyxJQUFMLENBQVVuQyxLQUFWLENBQXhCLENBQVA7QUFDRDs7O3VDQUVrQkEsSyxFQUFPQyxLLEVBQU87QUFDL0IsYUFBTyxLQUFLaUMsVUFBTCxDQUFnQixLQUFLQSxVQUFMLENBQWdCakMsS0FBaEIsSUFBeUIsS0FBS21DLGFBQUwsQ0FBbUJwQyxLQUFLLENBQUM2QixLQUF6QixDQUF6QyxDQUFQO0FBQ0Q7OztrQ0FFYVEsTyxFQUFTO0FBQ3JCLGFBQU9BLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixXQUFoQixFQUE4QixPQUFPLEtBQUtqRCxXQUFMLENBQWlCa0QsU0FBakIsRUFBUCxHQUFzQyxHQUFwRSxDQUFQO0FBQ0Q7Ozt1REFFa0N2QyxLLEVBQU9DLEssRUFBTztBQUMvQyxXQUFLWixXQUFMLENBQWlCbUQsZ0JBQWpCO0FBQ0F2QyxXQUFLLEdBQUcsS0FBS2lDLFVBQUwsQ0FBZ0JqQyxLQUFoQixJQUF5QixLQUFLd0Msa0JBQUwsQ0FBd0IsS0FBS04sSUFBTCxDQUFVbkMsS0FBVixDQUF4QixDQUFqQztBQUNBLGFBQU8sS0FBS2tDLFVBQUwsQ0FBZ0JqQyxLQUFoQixDQUFQO0FBQ0Q7OzsrQ0FFMEJELEssRUFBT0MsSyxFQUFPO0FBQ3ZDLFdBQUtaLFdBQUwsQ0FBaUJtRCxnQkFBakI7QUFFQXZDLFdBQUssR0FBRyxLQUFLaUMsVUFBTCxDQUFnQmpDLEtBQWhCLENBQVI7QUFFQSxXQUFLWixXQUFMLENBQWlCcUQsZ0JBQWpCO0FBRUF6QyxXQUFLLElBQUksS0FBS3dDLGtCQUFMLENBQXdCLEtBQUtOLElBQUwsQ0FBVW5DLEtBQVYsQ0FBeEIsQ0FBVDtBQUNBLGFBQU8sS0FBS2tDLFVBQUwsQ0FBZ0JqQyxLQUFoQixDQUFQO0FBQ0Q7Ozs4Q0FFeUJELEssRUFBT0MsSyxFQUFPO0FBQ3RDLFVBQUkwQyxvREFBSyxDQUFDM0MsS0FBRCxDQUFMLElBQWdCNEMsd0RBQVMsQ0FBQyxLQUFLQyxlQUFMLENBQXFCLENBQXJCLENBQUQsQ0FBN0IsRUFBd0Q7QUFDdEQsZUFBTyxLQUFLdkIsZ0JBQUwsQ0FBc0J0QixLQUF0QixFQUE2QkMsS0FBN0IsQ0FBUDtBQUNEOztBQUNELGFBQU8sS0FBS2lDLFVBQUwsQ0FBZ0JqQyxLQUFoQixJQUF5QixLQUFLd0Msa0JBQUwsQ0FBd0IsS0FBS04sSUFBTCxDQUFVbkMsS0FBVixDQUF4QixDQUF6QixHQUFxRSxHQUE1RTtBQUNELEssQ0FFRDs7Ozt1Q0FDbUI4QyxNLEVBQVE7QUFDekIsYUFBT0EsTUFBTSxDQUFDUixPQUFQLENBQWUsdUVBQWYsRUFBd0IsR0FBeEIsQ0FBUDtBQUNELEssQ0FFRDs7Ozs2Q0FDeUJ0QyxLLEVBQU9DLEssRUFBTztBQUFBOztBQUNyQztBQUNBO0FBQ0EsVUFBTThDLHFCQUFxQix1RUFDeEJyQyxtREFBVSxDQUFDYSxVQURhLEVBQ0EsSUFEQSwwQ0FFeEJiLG1EQUFVLENBQUNDLFlBRmEsRUFFRSxJQUZGLDBDQUd4QkQsbURBQVUsQ0FBQ3NDLFFBSGEsRUFHRixJQUhFLHlCQUEzQjs7QUFLQSxVQUNFaEQsS0FBSyxDQUFDaUQsZ0JBQU4sQ0FBdUJDLE1BQXZCLEtBQWtDLENBQWxDLElBQ0EsQ0FBQ0gscUJBQXFCLDBCQUFDLEtBQUtGLGVBQUwsRUFBRCwwREFBQyxzQkFBd0JwQyxJQUF6QixDQUZ4QixFQUdFO0FBQ0FSLGFBQUssR0FBR2tELDREQUFhLENBQUNsRCxLQUFELENBQXJCO0FBQ0Q7O0FBQ0RBLFdBQUssSUFBSSxLQUFLa0MsSUFBTCxDQUFVbkMsS0FBVixDQUFUO0FBRUEsV0FBS1IsV0FBTCxDQUFpQjRELGVBQWpCLENBQWlDLEtBQUt2RCxNQUF0QyxFQUE4QyxLQUFLQyxLQUFuRDs7QUFFQSxVQUFJLENBQUMsS0FBS04sV0FBTCxDQUFpQjZELFFBQWpCLEVBQUwsRUFBa0M7QUFDaEMsYUFBS2hFLFdBQUwsQ0FBaUJpRSxrQkFBakI7QUFDQXJELGFBQUssR0FBRyxLQUFLaUMsVUFBTCxDQUFnQmpDLEtBQWhCLENBQVI7QUFDRDs7QUFDRCxhQUFPQSxLQUFQO0FBQ0QsSyxDQUVEOzs7OzZDQUN5QkQsSyxFQUFPQyxLLEVBQU87QUFDckMsVUFBSSxLQUFLVCxXQUFMLENBQWlCNkQsUUFBakIsRUFBSixFQUFpQztBQUMvQixhQUFLN0QsV0FBTCxDQUFpQitELEdBQWpCO0FBQ0EsZUFBTyxLQUFLeEIsb0JBQUwsQ0FBMEIvQixLQUExQixFQUFpQ0MsS0FBakMsQ0FBUDtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtaLFdBQUwsQ0FBaUJtRSxrQkFBakI7QUFDQSxlQUFPLEtBQUtsQyxnQkFBTCxDQUFzQnRCLEtBQXRCLEVBQTZCLEtBQUtrQyxVQUFMLENBQWdCakMsS0FBaEIsQ0FBN0IsQ0FBUDtBQUNEO0FBQ0Y7OztzQ0FFaUJELEssRUFBT0MsSyxFQUFPO0FBQzlCLGFBQU9BLEtBQUssR0FBRyxLQUFLUCxNQUFMLENBQVkrRCxHQUFaLENBQWdCekQsS0FBaEIsQ0FBUixHQUFpQyxHQUF4QztBQUNELEssQ0FFRDs7OztnQ0FDWUEsSyxFQUFPQyxLLEVBQU87QUFDeEJBLFdBQUssR0FBR2tELDREQUFhLENBQUNsRCxLQUFELENBQWIsR0FBdUIsS0FBS2tDLElBQUwsQ0FBVW5DLEtBQVYsQ0FBdkIsR0FBMEMsR0FBbEQ7O0FBRUEsVUFBSSxLQUFLUixXQUFMLENBQWlCNkQsUUFBakIsRUFBSixFQUFpQztBQUMvQixlQUFPcEQsS0FBUDtBQUNELE9BRkQsTUFFTyxJQUFJeUQsc0RBQU8sQ0FBQyxLQUFLOUQscUJBQU4sQ0FBWCxFQUF5QztBQUM5QyxlQUFPSyxLQUFQO0FBQ0QsT0FGTSxNQUVBO0FBQ0wsZUFBTyxLQUFLaUMsVUFBTCxDQUFnQmpDLEtBQWhCLENBQVA7QUFDRDtBQUNGOzs7eUNBRW9CRCxLLEVBQU9DLEssRUFBTztBQUNqQyxhQUFPa0QsNERBQWEsQ0FBQ2xELEtBQUQsQ0FBYixHQUF1QixLQUFLa0MsSUFBTCxDQUFVbkMsS0FBVixDQUF2QixHQUEwQyxHQUFqRDtBQUNEOzs7d0NBRW1CQSxLLEVBQU9DLEssRUFBTztBQUNoQyxhQUFPa0QsNERBQWEsQ0FBQ2xELEtBQUQsQ0FBYixHQUF1QixLQUFLa0MsSUFBTCxDQUFVbkMsS0FBVixDQUE5QjtBQUNEOzs7cUNBRWdCQSxLLEVBQU9DLEssRUFBTztBQUM3QixhQUFPQSxLQUFLLEdBQUcsS0FBS2tDLElBQUwsQ0FBVW5DLEtBQVYsQ0FBUixHQUEyQixHQUFsQztBQUNEOzs7eUNBRW9CQSxLLEVBQU9DLEssRUFBTztBQUNqQyxXQUFLWixXQUFMLENBQWlCc0UsZ0JBQWpCO0FBQ0EsYUFBT1IsNERBQWEsQ0FBQ2xELEtBQUQsQ0FBYixHQUF1QixLQUFLa0MsSUFBTCxDQUFVbkMsS0FBVixDQUF2QixHQUEwQyxLQUFLNEQsTUFBTCxDQUFZLEtBQUt4RSxHQUFMLENBQVN5RSxtQkFBVCxJQUFnQyxDQUE1QyxDQUFqRDtBQUNELEssQ0FFRDs7OzsrQkFDc0I7QUFBQSxVQUFmcEQsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVG9CLEtBQVMsUUFBVEEsS0FBUzs7QUFDcEIsVUFDRSxLQUFLekMsR0FBTCxDQUFTMEUsU0FBVCxLQUNDckQsSUFBSSxLQUFLQyxtREFBVSxDQUFDVyxRQUFwQixJQUNDWixJQUFJLEtBQUtDLG1EQUFVLENBQUNLLGtCQURyQixJQUVDTixJQUFJLEtBQUtDLG1EQUFVLENBQUNPLDRCQUZyQixJQUdDUixJQUFJLEtBQUtDLG1EQUFVLENBQUNTLGdCQUhyQixJQUlDVixJQUFJLEtBQUtDLG1EQUFVLENBQUNhLFVBSnJCLElBS0NkLElBQUksS0FBS0MsbURBQVUsQ0FBQ2UsV0FOdEIsQ0FERixFQVFFO0FBQ0EsZUFBT0ksS0FBSyxDQUFDa0MsV0FBTixFQUFQO0FBQ0QsT0FWRCxNQVVPO0FBQ0wsZUFBT2xDLEtBQVA7QUFDRDtBQUNGOzs7K0JBRVU1QixLLEVBQU87QUFDaEJBLFdBQUssR0FBR2tELDREQUFhLENBQUNsRCxLQUFELENBQXJCOztBQUNBLFVBQUksQ0FBQ0EsS0FBSyxDQUFDK0QsUUFBTixDQUFlLElBQWYsQ0FBTCxFQUEyQjtBQUN6Qi9ELGFBQUssSUFBSSxJQUFUO0FBQ0Q7O0FBQ0QsYUFBT0EsS0FBSyxHQUFHLEtBQUtaLFdBQUwsQ0FBaUJrRCxTQUFqQixFQUFmO0FBQ0Q7OztzQ0FFc0I7QUFBQSxVQUFQMEIsQ0FBTyx1RUFBSCxDQUFHO0FBQ3JCLGFBQU8sS0FBS3BFLE1BQUwsQ0FBWSxLQUFLQyxLQUFMLEdBQWFtRSxDQUF6QixDQUFQO0FBQ0Q7OztxQ0FFcUI7QUFBQSxVQUFQQSxDQUFPLHVFQUFILENBQUc7QUFDcEIsYUFBTyxLQUFLcEUsTUFBTCxDQUFZLEtBQUtDLEtBQUwsR0FBYW1FLENBQXpCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelBIO0FBRUEsSUFBTUMscUJBQXFCLEdBQUcsV0FBOUI7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyxhQUFoQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ3FCN0UsVztBQUNuQjtBQUNGO0FBQ0E7QUFDRSx1QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQU0sSUFBSSxJQUF4QjtBQUNBLFNBQUs2RSxXQUFMLEdBQW1CLEVBQW5CO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7Ozs7Z0NBQ2M7QUFDVixhQUFPLEtBQUs3RSxNQUFMLENBQVlxRSxNQUFaLENBQW1CLEtBQUtRLFdBQUwsQ0FBaUJsQixNQUFwQyxDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7dUNBQ3FCO0FBQ2pCLFdBQUtrQixXQUFMLENBQWlCQyxJQUFqQixDQUFzQkgscUJBQXRCO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7Ozs7eUNBQ3VCO0FBQ25CLFdBQUtFLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCRix1QkFBdEI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7O3VDQUNxQjtBQUNqQixVQUFJLEtBQUtDLFdBQUwsQ0FBaUJsQixNQUFqQixHQUEwQixDQUExQixJQUErQm9CLG1EQUFJLENBQUMsS0FBS0YsV0FBTixDQUFKLEtBQTJCRixxQkFBOUQsRUFBcUY7QUFDbkYsYUFBS0UsV0FBTCxDQUFpQkcsR0FBakI7QUFDRDtBQUNGO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozt5Q0FDdUI7QUFDbkIsYUFBTyxLQUFLSCxXQUFMLENBQWlCbEIsTUFBakIsR0FBMEIsQ0FBakMsRUFBb0M7QUFDbEMsWUFBTXpDLElBQUksR0FBRyxLQUFLMkQsV0FBTCxDQUFpQkcsR0FBakIsRUFBYjs7QUFDQSxZQUFJOUQsSUFBSSxLQUFLeUQscUJBQWIsRUFBb0M7QUFDbEM7QUFDRDtBQUNGO0FBQ0Y7Ozt1Q0FFa0I7QUFDakIsV0FBS0UsV0FBTCxHQUFtQixFQUFuQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUg7QUFFQSxJQUFNSSxpQkFBaUIsR0FBRyxFQUExQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQi9FLFc7QUFDbkIseUJBQWM7QUFBQTs7QUFDWixTQUFLZ0YsS0FBTCxHQUFhLENBQWI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7b0NBQ2tCNUUsTSxFQUFRQyxLLEVBQU87QUFDN0IsVUFBSSxLQUFLMkUsS0FBTCxLQUFlLENBQWYsSUFBb0IsS0FBS0MsYUFBTCxDQUFtQjdFLE1BQW5CLEVBQTJCQyxLQUEzQixDQUF4QixFQUEyRDtBQUN6RCxhQUFLMkUsS0FBTCxHQUFhLENBQWI7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLQSxLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDekIsYUFBS0EsS0FBTDtBQUNELE9BRk0sTUFFQTtBQUNMLGFBQUtBLEtBQUwsR0FBYSxDQUFiO0FBQ0Q7QUFDRjtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7OzBCQUNRO0FBQ0osV0FBS0EsS0FBTDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7Ozs7K0JBQ2E7QUFDVCxhQUFPLEtBQUtBLEtBQUwsR0FBYSxDQUFwQjtBQUNELEssQ0FFRDtBQUNBOzs7O2tDQUNjNUUsTSxFQUFRQyxLLEVBQU87QUFDM0IsVUFBSW9ELE1BQU0sR0FBRyxDQUFiO0FBQ0EsVUFBSXVCLEtBQUssR0FBRyxDQUFaOztBQUVBLFdBQUssSUFBSUUsQ0FBQyxHQUFHN0UsS0FBYixFQUFvQjZFLENBQUMsR0FBRzlFLE1BQU0sQ0FBQ3FELE1BQS9CLEVBQXVDeUIsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQyxZQUFNM0UsS0FBSyxHQUFHSCxNQUFNLENBQUM4RSxDQUFELENBQXBCO0FBQ0F6QixjQUFNLElBQUlsRCxLQUFLLENBQUM2QixLQUFOLENBQVlxQixNQUF0QixDQUYwQyxDQUkxQzs7QUFDQSxZQUFJQSxNQUFNLEdBQUdzQixpQkFBYixFQUFnQztBQUM5QixpQkFBTyxLQUFQO0FBQ0Q7O0FBRUQsWUFBSXhFLEtBQUssQ0FBQ1MsSUFBTixLQUFlQyxtREFBVSxDQUFDYSxVQUE5QixFQUEwQztBQUN4Q2tELGVBQUs7QUFDTixTQUZELE1BRU8sSUFBSXpFLEtBQUssQ0FBQ1MsSUFBTixLQUFlQyxtREFBVSxDQUFDZSxXQUE5QixFQUEyQztBQUNoRGdELGVBQUs7O0FBQ0wsY0FBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZixtQkFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJLEtBQUtHLGdCQUFMLENBQXNCNUUsS0FBdEIsQ0FBSixFQUFrQztBQUNoQyxpQkFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPLEtBQVA7QUFDRCxLLENBRUQ7QUFDQTs7OzsyQ0FDa0M7QUFBQSxVQUFmUyxJQUFlLFFBQWZBLElBQWU7QUFBQSxVQUFUb0IsS0FBUyxRQUFUQSxLQUFTO0FBQ2hDLGFBQ0VwQixJQUFJLEtBQUtDLG1EQUFVLENBQUNLLGtCQUFwQixJQUNBTixJQUFJLEtBQUtDLG1EQUFVLENBQUNTLGdCQURwQixJQUVBVixJQUFJLEtBQUtDLG1EQUFVLENBQUNtRSxPQUZwQixJQUdBcEUsSUFBSSxLQUFLQyxtREFBVSxDQUFDRyxhQUhwQixJQUlBZ0IsS0FBSyxLQUFLLEdBTFo7QUFPRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Rkg7QUFDQTtBQUNBO0lBQ3FCbEMsTTtBQUNuQjtBQUNGO0FBQ0E7QUFDRSxrQkFBWUQsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLSSxLQUFMLEdBQWEsQ0FBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OzhCQUNzQjtBQUFBLFVBQWRnRixHQUFjLFFBQWRBLEdBQWM7QUFBQSxVQUFUakQsS0FBUyxRQUFUQSxLQUFTOztBQUNsQixVQUFJLENBQUMsS0FBS25DLE1BQVYsRUFBa0I7QUFDaEIsZUFBT21DLEtBQVA7QUFDRDs7QUFDRCxVQUFJaUQsR0FBSixFQUFTO0FBQ1AsZUFBTyxLQUFLcEYsTUFBTCxDQUFZb0YsR0FBWixDQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLcEYsTUFBTCxDQUFZLEtBQUtJLEtBQUwsRUFBWixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JIO0FBQ0E7QUFDQTs7SUFFcUJpRixTO0FBQ25CO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLHFCQUFZM0YsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUs0RixnQkFBTCxHQUF3Qix5RUFBeEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLHVKQUFwQjtBQUVBLFNBQUtDLGNBQUwsR0FBc0JDLGlFQUFBLEVBQ3BCLElBRG9CLEVBRXBCLElBRm9CLEVBR3BCLElBSG9CLDRCQUloQi9GLEdBQUcsQ0FBQ2dHLFNBQUosSUFBaUIsRUFKRCxHQUF0QjtBQU9BLFNBQUtDLG1CQUFMLEdBQTJCLHFDQUEzQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCSCxvRUFBQSxDQUFvQy9GLEdBQUcsQ0FBQ21HLGdCQUF4QyxDQUExQjtBQUVBLFNBQUtDLHdCQUFMLEdBQWdDTCxxRUFBQSxDQUFxQy9GLEdBQUcsQ0FBQ3FHLHFCQUF6QyxDQUFoQztBQUNBLFNBQUtDLGtDQUFMLEdBQTBDUCxxRUFBQSxDQUN4Qy9GLEdBQUcsQ0FBQ3VHLDZCQURvQyxDQUExQztBQUdBLFNBQUtDLHNCQUFMLEdBQThCVCxxRUFBQSxDQUFxQy9GLEdBQUcsQ0FBQ3lHLG9CQUF6QyxDQUE5QjtBQUNBLFNBQUtDLG9CQUFMLEdBQTRCWCxxRUFBQSxDQUFxQy9GLEdBQUcsQ0FBQzJHLGFBQXpDLENBQTVCO0FBRUEsU0FBS0MsVUFBTCxHQUFrQmIsNkRBQUEsQ0FBNkIvRixHQUFHLENBQUM2RyxnQkFBakMsQ0FBbEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CZiwrREFBQSxDQUErQi9GLEdBQUcsQ0FBQytHLFdBQW5DLENBQXBCO0FBRUEsU0FBS0MsZ0JBQUwsR0FBd0JqQiw4REFBQSxDQUE4Qi9GLEdBQUcsQ0FBQ2lILFVBQWxDLENBQXhCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJuQiw4REFBQSxDQUE4Qi9GLEdBQUcsQ0FBQ21ILFdBQWxDLENBQXpCO0FBRUEsU0FBS0MseUJBQUwsR0FBaUNyQixvRUFBQSxDQUMvQi9GLEdBQUcsQ0FBQ3FILHVCQUQyQixFQUUvQixRQUYrQixDQUFqQztBQUlBLFNBQUtDLDZCQUFMLEdBQXFDdkIsb0VBQUEsQ0FDbkMvRixHQUFHLENBQUN1SCxxQkFEK0IsRUFFbkMsaUJBRm1DLENBQXJDO0FBSUEsU0FBS0MsOEJBQUwsR0FBc0N6QixvRUFBQSxDQUNwQy9GLEdBQUcsQ0FBQ3VILHFCQURnQyxFQUVwQ3hCLGlFQUFBLENBQWlDL0YsR0FBRyxDQUFDK0csV0FBckMsQ0FGb0MsQ0FBdEM7QUFJRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs2QkFDV1UsSyxFQUFPO0FBQ2QsVUFBTWhILE1BQU0sR0FBRyxFQUFmO0FBQ0EsVUFBSUcsS0FBSixDQUZjLENBSWQ7O0FBQ0EsYUFBTzZHLEtBQUssQ0FBQzNELE1BQWIsRUFBcUI7QUFDbkI7QUFDQSxZQUFNRCxnQkFBZ0IsR0FBRyxLQUFLNkQsYUFBTCxDQUFtQkQsS0FBbkIsQ0FBekI7QUFDQUEsYUFBSyxHQUFHQSxLQUFLLENBQUNFLFNBQU4sQ0FBZ0I5RCxnQkFBZ0IsQ0FBQ0MsTUFBakMsQ0FBUjs7QUFFQSxZQUFJMkQsS0FBSyxDQUFDM0QsTUFBVixFQUFrQjtBQUNoQjtBQUNBbEQsZUFBSyxHQUFHLEtBQUtnSCxZQUFMLENBQWtCSCxLQUFsQixFQUF5QjdHLEtBQXpCLENBQVIsQ0FGZ0IsQ0FHaEI7O0FBQ0E2RyxlQUFLLEdBQUdBLEtBQUssQ0FBQ0UsU0FBTixDQUFnQi9HLEtBQUssQ0FBQzZCLEtBQU4sQ0FBWXFCLE1BQTVCLENBQVI7QUFFQXJELGdCQUFNLENBQUN3RSxJQUFQLGlDQUFpQnJFLEtBQWpCO0FBQXdCaUQsNEJBQWdCLEVBQWhCQTtBQUF4QjtBQUNEO0FBQ0Y7O0FBQ0QsYUFBT3BELE1BQVA7QUFDRDs7O2tDQUVhZ0gsSyxFQUFPO0FBQ25CLFVBQU1JLE9BQU8sR0FBR0osS0FBSyxDQUFDSyxLQUFOLENBQVksS0FBS2xDLGdCQUFqQixDQUFoQjtBQUNBLGFBQU9pQyxPQUFPLEdBQUdBLE9BQU8sQ0FBQyxDQUFELENBQVYsR0FBZ0IsRUFBOUI7QUFDRDs7O2lDQUVZSixLLEVBQU9NLGEsRUFBZTtBQUNqQyxhQUNFLEtBQUtDLGVBQUwsQ0FBcUJQLEtBQXJCLEtBQ0EsS0FBS1EsY0FBTCxDQUFvQlIsS0FBcEIsQ0FEQSxJQUVBLEtBQUtTLGlCQUFMLENBQXVCVCxLQUF2QixDQUZBLElBR0EsS0FBS1Usa0JBQUwsQ0FBd0JWLEtBQXhCLENBSEEsSUFJQSxLQUFLVyxtQkFBTCxDQUF5QlgsS0FBekIsQ0FKQSxJQUtBLEtBQUtZLGNBQUwsQ0FBb0JaLEtBQXBCLENBTEEsSUFNQSxLQUFLYSxvQkFBTCxDQUEwQmIsS0FBMUIsRUFBaUNNLGFBQWpDLENBTkEsSUFPQSxLQUFLUSxZQUFMLENBQWtCZCxLQUFsQixDQVBBLElBUUEsS0FBS2UsZ0JBQUwsQ0FBc0JmLEtBQXRCLENBVEY7QUFXRDs7O29DQUVlQSxLLEVBQU87QUFDckIsYUFBTyxLQUFLZ0IsbUJBQUwsQ0FBeUJoQixLQUF6QixLQUFtQyxLQUFLaUIsb0JBQUwsQ0FBMEJqQixLQUExQixDQUExQztBQUNEOzs7d0NBRW1CQSxLLEVBQU87QUFDekIsYUFBTyxLQUFLa0Isb0JBQUwsQ0FBMEI7QUFDL0JsQixhQUFLLEVBQUxBLEtBRCtCO0FBRS9CcEcsWUFBSSxFQUFFQyxtREFBVSxDQUFDQyxZQUZjO0FBRy9CcUgsYUFBSyxFQUFFLEtBQUsxQztBQUhtQixPQUExQixDQUFQO0FBS0Q7Ozt5Q0FFb0J1QixLLEVBQU87QUFDMUIsYUFBTyxLQUFLa0Isb0JBQUwsQ0FBMEI7QUFDL0JsQixhQUFLLEVBQUxBLEtBRCtCO0FBRS9CcEcsWUFBSSxFQUFFQyxtREFBVSxDQUFDRyxhQUZjO0FBRy9CbUgsYUFBSyxFQUFFLEtBQUszQztBQUhtQixPQUExQixDQUFQO0FBS0Q7OzttQ0FFY3dCLEssRUFBTztBQUNwQixhQUFPLEtBQUtrQixvQkFBTCxDQUEwQjtBQUMvQmxCLGFBQUssRUFBTEEsS0FEK0I7QUFFL0JwRyxZQUFJLEVBQUVDLG1EQUFVLENBQUN1SCxNQUZjO0FBRy9CRCxhQUFLLEVBQUUsS0FBSzlCO0FBSG1CLE9BQTFCLENBQVA7QUFLRDs7O3NDQUVpQlcsSyxFQUFPO0FBQ3ZCLGFBQU8sS0FBS2tCLG9CQUFMLENBQTBCO0FBQy9CbEIsYUFBSyxFQUFMQSxLQUQrQjtBQUUvQnBHLFlBQUksRUFBRUMsbURBQVUsQ0FBQ2EsVUFGYztBQUcvQnlHLGFBQUssRUFBRSxLQUFLNUI7QUFIbUIsT0FBMUIsQ0FBUDtBQUtEOzs7dUNBRWtCUyxLLEVBQU87QUFDeEIsYUFBTyxLQUFLa0Isb0JBQUwsQ0FBMEI7QUFDL0JsQixhQUFLLEVBQUxBLEtBRCtCO0FBRS9CcEcsWUFBSSxFQUFFQyxtREFBVSxDQUFDZSxXQUZjO0FBRy9CdUcsYUFBSyxFQUFFLEtBQUsxQjtBQUhtQixPQUExQixDQUFQO0FBS0Q7Ozt3Q0FFbUJPLEssRUFBTztBQUN6QixhQUNFLEtBQUtxQiw2QkFBTCxDQUFtQ3JCLEtBQW5DLEtBQ0EsS0FBS3NCLDhCQUFMLENBQW9DdEIsS0FBcEMsQ0FEQSxJQUVBLEtBQUt1QiwwQkFBTCxDQUFnQ3ZCLEtBQWhDLENBSEY7QUFLRDs7O2tEQUU2QkEsSyxFQUFPO0FBQ25DLGFBQU8sS0FBS3dCLDBCQUFMLENBQWdDO0FBQ3JDeEIsYUFBSyxFQUFMQSxLQURxQztBQUVyQ21CLGFBQUssRUFBRSxLQUFLdEIsNkJBRnlCO0FBR3JDNEIsZ0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUSxDQUFSLENBQVA7QUFBQTtBQUgyQixPQUFoQyxDQUFQO0FBS0Q7OzttREFFOEIzQixLLEVBQU87QUFBQTs7QUFDcEMsYUFBTyxLQUFLd0IsMEJBQUwsQ0FBZ0M7QUFDckN4QixhQUFLLEVBQUxBLEtBRHFDO0FBRXJDbUIsYUFBSyxFQUFFLEtBQUtwQiw4QkFGeUI7QUFHckMwQixnQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsaUJBQ1IsS0FBSSxDQUFDRSx3QkFBTCxDQUE4QjtBQUFFM0QsZUFBRyxFQUFFeUQsQ0FBQyxDQUFDQyxLQUFGLENBQVEsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFQO0FBQXVCRSxxQkFBUyxFQUFFSCxDQUFDLENBQUNDLEtBQUYsQ0FBUSxDQUFDLENBQVQ7QUFBbEMsV0FBOUIsQ0FEUTtBQUFBO0FBSDJCLE9BQWhDLENBQVA7QUFNRDs7OytDQUUwQjNCLEssRUFBTztBQUNoQyxhQUFPLEtBQUt3QiwwQkFBTCxDQUFnQztBQUNyQ3hCLGFBQUssRUFBTEEsS0FEcUM7QUFFckNtQixhQUFLLEVBQUUsS0FBS3hCLHlCQUZ5QjtBQUdyQzhCLGdCQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVEsQ0FBUixDQUFQO0FBQUE7QUFIMkIsT0FBaEMsQ0FBUDtBQUtEOzs7cURBRXNEO0FBQUEsVUFBMUIzQixLQUEwQixRQUExQkEsS0FBMEI7QUFBQSxVQUFuQm1CLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLFVBQVpNLFFBQVksUUFBWkEsUUFBWTtBQUNyRCxVQUFNdEksS0FBSyxHQUFHLEtBQUsrSCxvQkFBTCxDQUEwQjtBQUFFbEIsYUFBSyxFQUFMQSxLQUFGO0FBQVNtQixhQUFLLEVBQUxBLEtBQVQ7QUFBZ0J2SCxZQUFJLEVBQUVDLG1EQUFVLENBQUNpQjtBQUFqQyxPQUExQixDQUFkOztBQUNBLFVBQUkzQixLQUFKLEVBQVc7QUFDVEEsYUFBSyxDQUFDOEUsR0FBTixHQUFZd0QsUUFBUSxDQUFDdEksS0FBSyxDQUFDNkIsS0FBUCxDQUFwQjtBQUNEOztBQUNELGFBQU83QixLQUFQO0FBQ0Q7OztvREFFNEM7QUFBQSxVQUFsQjhFLEdBQWtCLFNBQWxCQSxHQUFrQjtBQUFBLFVBQWI0RCxTQUFhLFNBQWJBLFNBQWE7QUFDM0MsYUFBTzVELEdBQUcsQ0FBQ3hDLE9BQUosQ0FBWSxJQUFJcUcsTUFBSixDQUFXQywyREFBWSxDQUFDLE9BQU9GLFNBQVIsQ0FBdkIsRUFBMkMsSUFBM0MsQ0FBWixFQUE4REEsU0FBOUQsQ0FBUDtBQUNELEssQ0FFRDs7OzttQ0FDZTdCLEssRUFBTztBQUNwQixhQUFPLEtBQUtrQixvQkFBTCxDQUEwQjtBQUMvQmxCLGFBQUssRUFBTEEsS0FEK0I7QUFFL0JwRyxZQUFJLEVBQUVDLG1EQUFVLENBQUNtSSxNQUZjO0FBRy9CYixhQUFLLEVBQUUsS0FBSy9DO0FBSG1CLE9BQTFCLENBQVA7QUFLRCxLLENBRUQ7Ozs7cUNBQ2lCNEIsSyxFQUFPO0FBQ3RCLGFBQU8sS0FBS2tCLG9CQUFMLENBQTBCO0FBQy9CbEIsYUFBSyxFQUFMQSxLQUQrQjtBQUUvQnBHLFlBQUksRUFBRUMsbURBQVUsQ0FBQ3NDLFFBRmM7QUFHL0JnRixhQUFLLEVBQUUsS0FBSzlDO0FBSG1CLE9BQTFCLENBQVA7QUFLRDs7O3lDQUVvQjJCLEssRUFBT00sYSxFQUFlO0FBQ3pDO0FBQ0E7QUFDQSxVQUFJQSxhQUFhLElBQUlBLGFBQWEsQ0FBQ3RGLEtBQS9CLElBQXdDc0YsYUFBYSxDQUFDdEYsS0FBZCxLQUF3QixHQUFwRSxFQUF5RTtBQUN2RSxlQUFPaUgsU0FBUDtBQUNEOztBQUNELGFBQ0UsS0FBS0Msd0JBQUwsQ0FBOEJsQyxLQUE5QixLQUNBLEtBQUttQyx1QkFBTCxDQUE2Qm5DLEtBQTdCLENBREEsSUFFQSxLQUFLb0MsZ0NBQUwsQ0FBc0NwQyxLQUF0QyxDQUZBLElBR0EsS0FBS3FDLHFCQUFMLENBQTJCckMsS0FBM0IsQ0FKRjtBQU1EOzs7NkNBRXdCQSxLLEVBQU87QUFDOUIsYUFBTyxLQUFLa0Isb0JBQUwsQ0FBMEI7QUFDL0JsQixhQUFLLEVBQUxBLEtBRCtCO0FBRS9CcEcsWUFBSSxFQUFFQyxtREFBVSxDQUFDSyxrQkFGYztBQUcvQmlILGFBQUssRUFBRSxLQUFLeEM7QUFIbUIsT0FBMUIsQ0FBUDtBQUtEOzs7NENBRXVCcUIsSyxFQUFPO0FBQzdCLGFBQU8sS0FBS2tCLG9CQUFMLENBQTBCO0FBQy9CbEIsYUFBSyxFQUFMQSxLQUQrQjtBQUUvQnBHLFlBQUksRUFBRUMsbURBQVUsQ0FBQ1MsZ0JBRmM7QUFHL0I2RyxhQUFLLEVBQUUsS0FBS3BDO0FBSG1CLE9BQTFCLENBQVA7QUFLRDs7O3FEQUVnQ2lCLEssRUFBTztBQUN0QyxhQUFPLEtBQUtrQixvQkFBTCxDQUEwQjtBQUMvQmxCLGFBQUssRUFBTEEsS0FEK0I7QUFFL0JwRyxZQUFJLEVBQUVDLG1EQUFVLENBQUNPLDRCQUZjO0FBRy9CK0csYUFBSyxFQUFFLEtBQUt0QztBQUhtQixPQUExQixDQUFQO0FBS0Q7OzswQ0FFcUJtQixLLEVBQU87QUFDM0IsYUFBTyxLQUFLa0Isb0JBQUwsQ0FBMEI7QUFDL0JsQixhQUFLLEVBQUxBLEtBRCtCO0FBRS9CcEcsWUFBSSxFQUFFQyxtREFBVSxDQUFDVyxRQUZjO0FBRy9CMkcsYUFBSyxFQUFFLEtBQUtsQztBQUhtQixPQUExQixDQUFQO0FBS0Q7OztpQ0FFWWUsSyxFQUFPO0FBQ2xCLGFBQU8sS0FBS2tCLG9CQUFMLENBQTBCO0FBQy9CbEIsYUFBSyxFQUFMQSxLQUQrQjtBQUUvQnBHLFlBQUksRUFBRUMsbURBQVUsQ0FBQ3lJLElBRmM7QUFHL0JuQixhQUFLLEVBQUUsS0FBS2hDO0FBSG1CLE9BQTFCLENBQVA7QUFLRDs7O2dEQUU0QztBQUFBLFVBQXRCYSxLQUFzQixTQUF0QkEsS0FBc0I7QUFBQSxVQUFmcEcsSUFBZSxTQUFmQSxJQUFlO0FBQUEsVUFBVHVILEtBQVMsU0FBVEEsS0FBUztBQUMzQyxVQUFNZixPQUFPLEdBQUdKLEtBQUssQ0FBQ0ssS0FBTixDQUFZYyxLQUFaLENBQWhCO0FBRUEsYUFBT2YsT0FBTyxHQUFHO0FBQUV4RyxZQUFJLEVBQUpBLElBQUY7QUFBUW9CLGFBQUssRUFBRW9GLE9BQU8sQ0FBQyxDQUFEO0FBQXRCLE9BQUgsR0FBaUM2QixTQUEvQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNNLG1CQUFULENBQTZCQyxvQkFBN0IsRUFBbUQ7QUFDeEQsU0FBTyxJQUFJVixNQUFKLGFBQ0FXLCtEQUFnQixDQUFDRCxvQkFBRCxDQUFoQixDQUF1Q0UsR0FBdkMsQ0FBMkNYLG1EQUEzQyxFQUF5RFksSUFBekQsQ0FBOEQsR0FBOUQsQ0FEQSxVQUVMLEdBRkssQ0FBUDtBQUlEO0FBRU0sU0FBU0Msc0JBQVQsQ0FBZ0NsRSxnQkFBaEMsRUFBa0Q7QUFDdkQsU0FBTyxJQUFJb0QsTUFBSixnQkFDR3BELGdCQUFnQixDQUFDZ0UsR0FBakIsQ0FBcUIsVUFBQ0csQ0FBRDtBQUFBLFdBQU9kLDJEQUFZLENBQUNjLENBQUQsQ0FBbkI7QUFBQSxHQUFyQixFQUE2Q0YsSUFBN0MsQ0FBa0QsR0FBbEQsQ0FESCw0QkFFTCxHQUZLLENBQVA7QUFJRDtBQUVNLFNBQVNHLHVCQUFULENBQWlDNUQsYUFBakMsRUFBZ0Q7QUFDckQsTUFBSUEsYUFBYSxDQUFDN0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5QixXQUFPLElBQUl5RixNQUFKLFNBQW1CLEdBQW5CLENBQVA7QUFDRDs7QUFDRCxNQUFNaUIsb0JBQW9CLEdBQUdOLCtEQUFnQixDQUFDdkQsYUFBRCxDQUFoQixDQUFnQ3lELElBQWhDLENBQXFDLEdBQXJDLEVBQTBDbEgsT0FBMUMsQ0FBa0QsSUFBbEQsRUFBeUQsTUFBekQsQ0FBN0I7QUFDQSxTQUFPLElBQUlxRyxNQUFKLGFBQWdCaUIsb0JBQWhCLFdBQTRDLElBQTVDLENBQVA7QUFDRDtBQUVNLFNBQVNDLGVBQVQsR0FBNEM7QUFBQSxNQUFuQkMsWUFBbUIsdUVBQUosRUFBSTtBQUNqRCxTQUFPLElBQUluQixNQUFKLG9HQUN1Rm1CLFlBQVksQ0FBQ04sSUFBYixDQUMxRixFQUQwRixDQUR2RixVQUlMLEdBSkssQ0FBUDtBQU1EO0FBRU0sU0FBU08saUJBQVQsQ0FBMkI1RCxXQUEzQixFQUF3QztBQUM3QyxTQUFPLElBQUl3QyxNQUFKLENBQVcsT0FBT3FCLG1CQUFtQixDQUFDN0QsV0FBRCxDQUExQixHQUEwQyxHQUFyRCxFQUEwRCxHQUExRCxDQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTNkQsbUJBQVQsQ0FBNkI3RCxXQUE3QixFQUEwQztBQUMvQyxNQUFNOEQsUUFBUSxHQUFHO0FBQ2YsVUFBTSxrQkFEUztBQUVmLFVBQU0sd0JBRlM7QUFHZixVQUFNLDJDQUhTO0FBSWYsVUFBTSx5Q0FKUztBQUtmLFVBQU0seUNBTFM7QUFNZixXQUFPLDBDQU5RO0FBT2YsWUFBUSwyQ0FQTztBQVFmLFlBQVEsMkNBUk87QUFTZkMsTUFBRSxFQUFFO0FBVFcsR0FBakI7QUFZQSxTQUFPL0QsV0FBVyxDQUFDb0QsR0FBWixDQUFnQixVQUFDWSxDQUFEO0FBQUEsV0FBT0YsUUFBUSxDQUFDRSxDQUFELENBQWY7QUFBQSxHQUFoQixFQUFvQ1gsSUFBcEMsQ0FBeUMsR0FBekMsQ0FBUDtBQUNEO0FBRU0sU0FBU1ksZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDO0FBQ3ZDLFNBQU8sSUFBSTFCLE1BQUosQ0FBVyxPQUFPMEIsTUFBTSxDQUFDZCxHQUFQLENBQVdlLFdBQVgsRUFBd0JkLElBQXhCLENBQTZCLEdBQTdCLENBQVAsR0FBMkMsR0FBdEQsRUFBMkQsSUFBM0QsQ0FBUDtBQUNEOztBQUVELFNBQVNjLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCLE1BQUlBLEtBQUssQ0FBQ3JILE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEI7QUFDQSxXQUFPMEYsMkRBQVksQ0FBQzJCLEtBQUQsQ0FBbkI7QUFDRCxHQUhELE1BR087QUFDTDtBQUNBLFdBQU8sUUFBUUEsS0FBUixHQUFnQixLQUF2QjtBQUNEO0FBQ0Y7O0FBRU0sU0FBU0Msc0JBQVQsQ0FBZ0NDLEtBQWhDLEVBQXVDQyxPQUF2QyxFQUFnRDtBQUNyRCxNQUFJQyxzREFBTyxDQUFDRixLQUFELENBQVgsRUFBb0I7QUFDbEIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTUcsVUFBVSxHQUFHSCxLQUFLLENBQUNsQixHQUFOLENBQVVYLG1EQUFWLEVBQXdCWSxJQUF4QixDQUE2QixHQUE3QixDQUFuQjtBQUVBLFNBQU8sSUFBSWIsTUFBSixnQkFBbUJpQyxVQUFuQixpQkFBb0NGLE9BQXBDLFNBQWlELEdBQWpELENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNuRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ3BLLElBQUQsRUFBT3VILEtBQVA7QUFBQSxTQUFpQixVQUFDaEksS0FBRDtBQUFBLFdBQVcsQ0FBQUEsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVTLElBQVAsTUFBZ0JBLElBQWhCLElBQXdCdUgsS0FBSyxDQUFDOEMsSUFBTixDQUFXOUssS0FBWCxhQUFXQSxLQUFYLHVCQUFXQSxLQUFLLENBQUU2QixLQUFsQixDQUFuQztBQUFBLEdBQWpCO0FBQUEsQ0FBaEI7O0FBRU8sSUFBTWMsS0FBSyxHQUFHa0ksT0FBTyxDQUFDbkssbURBQVUsQ0FBQ1MsZ0JBQVosRUFBOEIsUUFBOUIsQ0FBckI7QUFFQSxJQUFNeUIsU0FBUyxHQUFHaUksT0FBTyxDQUFDbkssbURBQVUsQ0FBQ1csUUFBWixFQUFzQixZQUF0QixDQUF6QjtBQUVBLElBQU1xQyxPQUFPLEdBQUdtSCxPQUFPLENBQUNuSyxtREFBVSxDQUFDSyxrQkFBWixFQUFnQyxVQUFoQyxDQUF2QjtBQUVBLElBQU1nSyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ25LLG1EQUFVLENBQUNLLGtCQUFaLEVBQWdDLGdCQUFoQyxDQUFyQjtBQUVBLElBQU1pSyxJQUFJLEdBQUdILE9BQU8sQ0FBQ25LLG1EQUFVLENBQUNXLFFBQVosRUFBc0IsT0FBdEIsQ0FBcEI7QUFFQSxJQUFNNEosUUFBUSxHQUFHSixPQUFPLENBQUNuSyxtREFBVSxDQUFDSyxrQkFBWixFQUFnQyxXQUFoQyxDQUF4QjtBQUVBLElBQU1tSyxLQUFLLEdBQUdMLE9BQU8sQ0FBQ25LLG1EQUFVLENBQUNlLFdBQVosRUFBeUIsUUFBekIsQ0FBckIsQzs7Ozs7Ozs7Ozs7O0FDaEJQO0FBQUE7QUFDQTtBQUNBO0FBQ2U7QUFDYjBILE1BQUksRUFBRSxNQURPO0FBRWJsQixRQUFNLEVBQUUsUUFGSztBQUdiNUcsVUFBUSxFQUFFLFVBSEc7QUFJYk4sb0JBQWtCLEVBQUUsb0JBSlA7QUFLYkUsOEJBQTRCLEVBQUUsOEJBTGpCO0FBTWJFLGtCQUFnQixFQUFFLGtCQU5MO0FBT2I2QixVQUFRLEVBQUUsVUFQRztBQVFiekIsWUFBVSxFQUFFLFlBUkM7QUFTYkUsYUFBVyxFQUFFLGFBVEE7QUFVYmQsY0FBWSxFQUFFLGNBVkQ7QUFXYkUsZUFBYSxFQUFFLGVBWEY7QUFZYmdJLFFBQU0sRUFBRSxRQVpLO0FBYWJsSCxhQUFXLEVBQUU7QUFiQSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVBLElBQU1vRSxhQUFhLEdBQUcsQ0FDcEIsS0FEb0IsRUFFcEIsVUFGb0IsRUFHcEIsT0FIb0IsRUFJcEIsS0FKb0IsRUFLcEIsVUFMb0IsRUFNcEIsT0FOb0IsRUFPcEIsT0FQb0IsRUFRcEIsS0FSb0IsRUFTcEIsS0FUb0IsRUFVcEIsT0FWb0IsRUFXcEIsSUFYb0IsRUFZcEIsS0Fab0IsRUFhcEIsWUFib0IsRUFjcEIsV0Fkb0IsRUFlcEIsU0Fmb0IsRUFnQnBCLFlBaEJvQixFQWlCcEIsSUFqQm9CLEVBa0JwQixRQWxCb0IsRUFtQnBCLFlBbkJvQixFQW9CcEIsT0FwQm9CLEVBcUJwQixlQXJCb0IsRUFzQnBCLEtBdEJvQixFQXVCcEIsV0F2Qm9CLEVBd0JwQixLQXhCb0IsRUF5QnBCLFFBekJvQixFQTBCcEIsT0ExQm9CLEVBMkJwQixTQTNCb0IsRUE0QnBCLFFBNUJvQixFQTZCcEIsUUE3Qm9CLEVBOEJwQixNQTlCb0IsRUErQnBCLFNBL0JvQixFQWdDcEIsTUFoQ29CLEVBaUNwQixZQWpDb0IsRUFrQ3BCLElBbENvQixFQW1DcEIsT0FuQ29CLEVBb0NwQixNQXBDb0IsRUFxQ3BCLFFBckNvQixFQXNDcEIsU0F0Q29CLEVBdUNwQixhQXZDb0IsRUF3Q3BCLFVBeENvQixFQXlDcEIsTUF6Q29CLEVBMENwQixNQTFDb0IsRUEyQ3BCLE9BM0NvQixFQTRDcEIsTUE1Q29CLEVBNkNwQixTQTdDb0IsRUE4Q3BCLE1BOUNvQixFQStDcEIsV0EvQ29CLEVBZ0RwQixrQkFoRG9CLEVBaURwQixhQWpEb0IsRUFrRHBCLE9BbERvQixFQW1EcEIsTUFuRG9CLEVBb0RwQixPQXBEb0IsRUFxRHBCLE9BckRvQixFQXNEcEIsU0F0RG9CLEVBdURwQixVQXZEb0IsRUF3RHBCLFNBeERvQixFQXlEcEIsU0F6RG9CLEVBMERwQixZQTFEb0IsRUEyRHBCLFFBM0RvQixFQTREcEIsUUE1RG9CLEVBNkRwQixTQTdEb0IsRUE4RHBCLFFBOURvQixFQStEcEIsUUEvRG9CLEVBZ0VwQixXQWhFb0IsRUFpRXBCLFNBakVvQixFQWtFcEIsWUFsRW9CLEVBbUVwQixZQW5Fb0IsRUFvRXBCLFVBcEVvQixFQXFFcEIsVUFyRW9CLEVBc0VwQixTQXRFb0IsRUF1RXBCLE1BdkVvQixFQXdFcEIsZUF4RW9CLEVBeUVwQixPQXpFb0IsRUEwRXBCLFdBMUVvQixFQTJFcEIsV0EzRW9CLEVBNEVwQixZQTVFb0IsRUE2RXBCLFFBN0VvQixFQThFcEIsT0E5RW9CLEVBK0VwQixNQS9Fb0IsRUFnRnBCLFdBaEZvQixFQWlGcEIsU0FqRm9CLEVBa0ZwQixjQWxGb0IsRUFtRnBCLGlDQW5Gb0IsRUFvRnBCLGtCQXBGb0IsRUFxRnBCLGNBckZvQixFQXNGcEIsY0F0Rm9CLEVBdUZwQixnQkF2Rm9CLEVBd0ZwQixnQkF4Rm9CLEVBeUZwQixjQXpGb0IsRUEwRnBCLG1CQTFGb0IsRUEyRnBCLGtCQTNGb0IsRUE0RnBCLGtDQTVGb0IsRUE2RnBCLGNBN0ZvQixFQThGcEIsUUE5Rm9CLEVBK0ZwQixPQS9Gb0IsRUFnR3BCLE1BaEdvQixFQWlHcEIsVUFqR29CLEVBa0dwQixtQkFsR29CLEVBbUdwQixrQkFuR29CLEVBb0dwQixNQXBHb0IsRUFxR3BCLEtBckdvQixFQXNHcEIsTUF0R29CLEVBdUdwQixZQXZHb0IsRUF3R3BCLFVBeEdvQixFQXlHcEIsUUF6R29CLEVBMEdwQixRQTFHb0IsRUEyR3BCLGlCQTNHb0IsRUE0R3BCLGdCQTVHb0IsRUE2R3BCLFlBN0dvQixFQThHcEIsS0E5R29CLEVBK0dwQixTQS9Hb0IsRUFnSHBCLFNBaEhvQixFQWlIcEIsU0FqSG9CLEVBa0hwQixVQWxIb0IsRUFtSHBCLFlBbkhvQixFQW9IcEIsUUFwSG9CLEVBcUhwQixXQXJIb0IsRUFzSHBCLFlBdEhvQixFQXVIcEIsT0F2SG9CLEVBd0hwQixVQXhIb0IsRUF5SHBCLFlBekhvQixFQTBIcEIsZUExSG9CLEVBMkhwQixhQTNIb0IsRUE0SHBCLFNBNUhvQixFQTZIcEIsVUE3SG9CLEVBOEhwQixZQTlIb0IsRUErSHBCLFVBL0hvQixFQWdJcEIsSUFoSW9CLEVBaUlwQixVQWpJb0IsRUFrSXBCLFFBbElvQixFQW1JcEIsTUFuSW9CLEVBb0lwQixRQXBJb0IsRUFxSXBCLFNBcklvQixFQXNJcEIsTUF0SW9CLEVBdUlwQixVQXZJb0IsRUF3SXBCLFNBeElvQixFQXlJcEIsTUF6SW9CLEVBMElwQixRQTFJb0IsRUEySXBCLFFBM0lvQixFQTRJcEIsVUE1SW9CLEVBNklwQixZQTdJb0IsRUE4SXBCLEtBOUlvQixFQStJcEIsVUEvSW9CLEVBZ0pwQixRQWhKb0IsRUFpSnBCLE9BakpvQixFQWtKcEIsUUFsSm9CLEVBbUpwQixPQW5Kb0IsRUFvSnBCLFdBcEpvQixFQXFKcEIsV0FySm9CLEVBc0pwQixXQXRKb0IsRUF1SnBCLE1BdkpvQixFQXdKcEIsU0F4Sm9CLEVBeUpwQixRQXpKb0IsRUEwSnBCLE1BMUpvQixFQTJKcEIsS0EzSm9CLEVBNEpwQixTQTVKb0IsRUE2SnBCLFVBN0pvQixFQThKcEIsVUE5Sm9CLEVBK0pwQixTQS9Kb0IsRUFnS3BCLE9BaEtvQixFQWlLcEIsUUFqS29CLEVBa0twQixPQWxLb0IsRUFtS3BCLFdBbktvQixFQW9LcEIsTUFwS29CLEVBcUtwQixRQXJLb0IsRUFzS3BCLE9BdEtvQixFQXVLcEIsT0F2S29CLEVBd0twQixPQXhLb0IsRUF5S3BCLE9BektvQixFQTBLcEIsS0ExS29CLEVBMktwQixTQTNLb0IsRUE0S3BCLE1BNUtvQixFQTZLcEIsTUE3S29CLEVBOEtwQixVQTlLb0IsRUErS3BCLFFBL0tvQixFQWdMcEIsU0FoTG9CLEVBaUxwQixXQWpMb0IsRUFrTHBCLEtBbExvQixFQW1McEIsUUFuTG9CLEVBb0xwQixNQXBMb0IsRUFxTHBCLE9BckxvQixFQXNMcEIsU0F0TG9CLEVBdUxwQixPQXZMb0IsRUF3THBCLFVBeExvQixFQXlMcEIsU0F6TG9CLEVBMExwQixNQTFMb0IsRUEyTHBCLGNBM0xvQixFQTRMcEIsTUE1TG9CLEVBNkxwQixNQTdMb0IsRUE4THBCLE1BOUxvQixFQStMcEIsT0EvTG9CLEVBZ01wQixVQWhNb0IsRUFpTXBCLElBak1vQixFQWtNcEIsV0FsTW9CLEVBbU1wQixJQW5Nb0IsRUFvTXBCLFdBcE1vQixFQXFNcEIsV0FyTW9CLEVBc01wQixXQXRNb0IsRUF1TXBCLE9Bdk1vQixFQXdNcEIsV0F4TW9CLEVBeU1wQixZQXpNb0IsRUEwTXBCLEtBMU1vQixFQTJNcEIsVUEzTW9CLEVBNE1wQixTQTVNb0IsRUE2TXBCLE9BN01vQixFQThNcEIsT0E5TW9CLEVBK01wQixhQS9Nb0IsRUFnTnBCLFFBaE5vQixFQWlOcEIsS0FqTm9CLEVBa05wQixTQWxOb0IsRUFtTnBCLFdBbk5vQixFQW9OcEIsY0FwTm9CLEVBcU5wQixVQXJOb0IsRUFzTnBCLE1BdE5vQixFQXVOcEIsSUF2Tm9CLEVBd05wQixRQXhOb0IsRUF5TnBCLFdBek5vQixFQTBOcEIsU0ExTm9CLEVBMk5wQixLQTNOb0IsRUE0TnBCLE1BNU5vQixFQTZOcEIsTUE3Tm9CLEVBOE5wQixLQTlOb0IsRUErTnBCLE9BL05vQixFQWdPcEIsVUFoT29CLEVBaU9wQixPQWpPb0IsRUFrT3BCLFNBbE9vQixFQW1PcEIsVUFuT29CLEVBb09wQixTQXBPb0IsRUFxT3BCLE9Bck9vQixFQXNPcEIsTUF0T29CLEVBdU9wQixNQXZPb0IsRUF3T3BCLFVBeE9vQixFQXlPcEIsSUF6T29CLEVBME9wQixPQTFPb0IsRUEyT3BCLFdBM09vQixFQTRPcEIsUUE1T29CLEVBNk9wQixXQTdPb0IsRUE4T3BCLGdCQTlPb0IsRUErT3BCLFNBL09vQixFQWdQcEIsVUFoUG9CLEVBaVBwQixNQWpQb0IsRUFrUHBCLFNBbFBvQixFQW1QcEIsVUFuUG9CLEVBb1BwQixNQXBQb0IsRUFxUHBCLE1BclBvQixFQXNQcEIsT0F0UG9CLEVBdVBwQixZQXZQb0IsRUF3UHBCLE9BeFBvQixFQXlQcEIsY0F6UG9CLEVBMFBwQixLQTFQb0IsRUEyUHBCLFVBM1BvQixFQTRQcEIsUUE1UG9CLEVBNlBwQixPQTdQb0IsRUE4UHBCLFFBOVBvQixFQStQcEIsYUEvUG9CLEVBZ1FwQixjQWhRb0IsRUFpUXBCLEtBalFvQixFQWtRcEIsUUFsUW9CLEVBbVFwQixTQW5Rb0IsRUFvUXBCLFVBcFFvQixFQXFRcEIsS0FyUW9CLEVBc1FwQixNQXRRb0IsRUF1UXBCLFVBdlFvQixFQXdRcEIsUUF4UW9CLEVBeVFwQixPQXpRb0IsRUEwUXBCLFFBMVFvQixFQTJRcEIsVUEzUW9CLEVBNFFwQixLQTVRb0IsRUE2UXBCLFVBN1FvQixFQThRcEIsU0E5UW9CLEVBK1FwQixPQS9Rb0IsRUFnUnBCLE9BaFJvQixFQWlScEIsS0FqUm9CLEVBa1JwQixXQWxSb0IsRUFtUnBCLFNBblJvQixFQW9ScEIsSUFwUm9CLEVBcVJwQixTQXJSb0IsRUFzUnBCLFNBdFJvQixFQXVScEIsVUF2Um9CLEVBd1JwQixZQXhSb0IsRUF5UnBCLFlBelJvQixFQTBScEIsWUExUm9CLEVBMlJwQixNQTNSb0IsRUE0UnBCLFNBNVJvQixFQTZScEIsV0E3Um9CLEVBOFJwQixZQTlSb0IsRUErUnBCLEtBL1JvQixFQWdTcEIsTUFoU29CLEVBaVNwQixRQWpTb0IsRUFrU3BCLE9BbFNvQixFQW1TcEIsU0FuU29CLEVBb1NwQixVQXBTb0IsRUFxU3BCLE1BclNvQixFQXNTcEIsY0F0U29CLEVBdVNwQixJQXZTb0IsRUF3U3BCLFFBeFNvQixFQXlTcEIsS0F6U29CLEVBMFNwQixXQTFTb0IsRUEyU3BCLElBM1NvQixFQTRTcEIsTUE1U29CLEVBNlNwQixNQTdTb0IsRUE4U3BCLGNBOVNvQixFQStTcEIsVUEvU29CLEVBZ1RwQixRQWhUb0IsRUFpVHBCLE9BalRvQixFQWtUcEIsS0FsVG9CLEVBbVRwQixPQW5Ub0IsRUFvVHBCLE1BcFRvQixFQXFUcEIsVUFyVG9CLEVBc1RwQixTQXRUb0IsRUF1VHBCLFlBdlRvQixFQXdUcEIsU0F4VG9CLEVBeVRwQixRQXpUb0IsRUEwVHBCLFVBMVRvQixFQTJUcEIsV0EzVG9CLEVBNFRwQixNQTVUb0IsRUE2VHBCLFdBN1RvQixFQThUcEIsYUE5VG9CLEVBK1RwQixjQS9Ub0IsRUFnVXBCLFlBaFVvQixFQWlVcEIsVUFqVW9CLEVBa1VwQixNQWxVb0IsRUFtVXBCLGlCQW5Vb0IsRUFvVXBCLGlCQXBVb0IsRUFxVXBCLGNBclVvQixFQXNVcEIsV0F0VW9CLEVBdVVwQixNQXZVb0IsRUF3VXBCLFVBeFVvQixFQXlVcEIsT0F6VW9CLEVBMFVwQixXQTFVb0IsRUEyVXBCLFNBM1VvQixFQTRVcEIsU0E1VW9CLEVBNlVwQixTQTdVb0IsRUE4VXBCLFFBOVVvQixFQStVcEIsWUEvVW9CLEVBZ1ZwQixXQWhWb0IsRUFpVnBCLFNBalZvQixFQWtWcEIsTUFsVm9CLEVBbVZwQixRQW5Wb0IsRUFvVnBCLE9BcFZvQixFQXFWcEIsU0FyVm9CLEVBc1ZwQixPQXRWb0IsRUF1VnBCLE1BdlZvQixFQXdWcEIsTUF4Vm9CLEVBeVZwQixPQXpWb0IsRUEwVnBCLE1BMVZvQixFQTJWcEIsVUEzVm9CLEVBNFZwQixXQTVWb0IsRUE2VnBCLEtBN1ZvQixFQThWcEIsWUE5Vm9CLEVBK1ZwQixhQS9Wb0IsRUFnV3BCLFNBaFdvQixFQWlXcEIsV0FqV29CLEVBa1dwQixXQWxXb0IsRUFtV3BCLFlBbldvQixFQW9XcEIsZ0JBcFdvQixFQXFXcEIsU0FyV29CLEVBc1dwQixZQXRXb0IsRUF1V3BCLFVBdldvQixFQXdXcEIsVUF4V29CLEVBeVdwQixVQXpXb0IsRUEwV3BCLFNBMVdvQixFQTJXcEIsUUEzV29CLEVBNFdwQixRQTVXb0IsRUE2V3BCLE9BN1dvQixFQThXcEIsVUE5V29CLEVBK1dwQixTQS9Xb0IsRUFnWHBCLFVBaFhvQixFQWlYcEIsUUFqWG9CLEVBa1hwQixvQkFsWG9CLEVBbVhwQixRQW5Yb0IsRUFvWHBCLFNBcFhvQixFQXFYcEIsUUFyWG9CLEVBc1hwQixPQXRYb0IsRUF1WHBCLE1BdlhvQixFQXdYcEIsVUF4WG9CLEVBeVhwQixRQXpYb0IsRUEwWHBCLGVBMVhvQixFQTJYcEIsWUEzWG9CLEVBNFhwQixhQTVYb0IsRUE2WHBCLGlCQTdYb0IsRUE4WHBCLGlCQTlYb0IsRUErWHBCLGVBL1hvQixFQWdZcEIsVUFoWW9CLEVBaVlwQixTQWpZb0IsRUFrWXBCLEtBbFlvQixFQW1ZcEIsV0FuWW9CLEVBb1lwQixNQXBZb0IsRUFxWXBCLFFBcllvQixFQXNZcEIsWUF0WW9CLEVBdVlwQixLQXZZb0IsRUF3WXBCLEtBeFlvQixFQXlZcEIsV0F6WW9CLEVBMFlwQixRQTFZb0IsRUEyWXBCLE9BM1lvQixFQTRZcEIsWUE1WW9CLEVBNllwQixRQTdZb0IsRUE4WXBCLFFBOVlvQixFQStZcEIsUUEvWW9CLEVBZ1pwQixTQWhab0IsRUFpWnBCLFFBalpvQixFQWtacEIsVUFsWm9CLEVBbVpwQixXQW5ab0IsRUFvWnBCLFVBcFpvQixFQXFacEIsU0FyWm9CLEVBc1pwQixjQXRab0IsRUF1WnBCLFFBdlpvQixFQXdacEIsU0F4Wm9CLEVBeVpwQixRQXpab0IsRUEwWnBCLFVBMVpvQixFQTJacEIsTUEzWm9CLEVBNFpwQixNQTVab0IsRUE2WnBCLFFBN1pvQixFQThacEIsVUE5Wm9CLEVBK1pwQixjQS9ab0IsRUFnYXBCLEtBaGFvQixFQWlhcEIsY0FqYW9CLEVBa2FwQixPQWxhb0IsRUFtYXBCLFVBbmFvQixFQW9hcEIsWUFwYW9CLEVBcWFwQixNQXJhb0IsRUFzYXBCLFNBdGFvQixFQXVhcEIsVUF2YW9CLEVBd2FwQixPQXhhb0IsRUF5YXBCLFVBemFvQixFQTBhcEIsV0ExYW9CLEVBMmFwQixRQTNhb0IsRUE0YXBCLFVBNWFvQixFQTZhcEIsTUE3YW9CLEVBOGFwQixZQTlhb0IsRUErYXBCLGFBL2FvQixFQWdicEIsVUFoYm9CLEVBaWJwQixRQWpib0IsRUFrYnBCLE9BbGJvQixFQW1icEIsYUFuYm9CLEVBb2JwQixXQXBib0IsRUFxYnBCLEtBcmJvQixFQXNicEIsU0F0Ym9CLEVBdWJwQixXQXZib0IsRUF3YnBCLFNBeGJvQixFQXlicEIsUUF6Ym9CLEVBMGJwQixRQTFib0IsRUEyYnBCLFNBM2JvQixFQTRicEIsUUE1Ym9CLEVBNmJwQixhQTdib0IsRUE4YnBCLE9BOWJvQixFQSticEIsYUEvYm9CLEVBZ2NwQixZQWhjb0IsRUFpY3BCLE1BamNvQixFQWtjcEIsTUFsY29CLEVBbWNwQixXQW5jb0IsRUFvY3BCLGVBcGNvQixFQXFjcEIsaUJBcmNvQixFQXNjcEIsSUF0Y29CLEVBdWNwQixVQXZjb0IsRUF3Y3BCLGFBeGNvQixFQXljcEIsV0F6Y29CLEVBMGNwQixhQTFjb0IsRUEyY3BCLE9BM2NvQixFQTRjcEIsU0E1Y29CLEVBNmNwQixNQTdjb0IsRUE4Y3BCLE1BOWNvQixFQStjcEIsVUEvY29CLEVBZ2RwQixNQWhkb0IsRUFpZHBCLFNBamRvQixFQWtkcEIsTUFsZG9CLEVBbWRwQixRQW5kb0IsRUFvZHBCLFNBcGRvQixFQXFkcEIsUUFyZG9CLEVBc2RwQixPQXRkb0IsRUF1ZHBCLE9BdmRvQixFQXdkcEIsT0F4ZG9CLEVBeWRwQixNQXpkb0IsRUEwZHBCLE9BMWRvQixFQTJkcEIsV0EzZG9CLEVBNGRwQixPQTVkb0IsRUE2ZHBCLFNBN2RvQixFQThkcEIsVUE5ZG9CLEVBK2RwQixTQS9kb0IsRUFnZXBCLFNBaGVvQixFQWllcEIsU0FqZW9CLEVBa2VwQixVQWxlb0IsRUFtZXBCLE1BbmVvQixFQW9lcEIsU0FwZW9CLEVBcWVwQixNQXJlb0IsRUFzZXBCLFVBdGVvQixFQXVlcEIsU0F2ZW9CLEVBd2VwQixNQXhlb0IsRUF5ZXBCLFVBemVvQixFQTBlcEIsT0ExZW9CLEVBMmVwQixjQTNlb0IsRUE0ZXBCLFFBNWVvQixFQTZlcEIsTUE3ZW9CLEVBOGVwQixRQTllb0IsRUErZXBCLFNBL2VvQixFQWdmcEIsS0FoZm9CLEVBaWZwQixPQWpmb0IsRUFrZnBCLFlBbGZvQixFQW1mcEIsV0FuZm9CLEVBb2ZwQixlQXBmb0IsRUFxZnBCLE1BcmZvQixFQXNmcEIsT0F0Zm9CLENBQXRCO0FBeWZBLElBQU1OLHFCQUFxQixHQUFHLENBQzVCLEtBRDRCLEVBRTVCLE9BRjRCLEVBRzVCLGNBSDRCLEVBSTVCLGFBSjRCLEVBSzVCLGFBTDRCLEVBTTVCLFFBTjRCLEVBTzVCLGFBUDRCLEVBUTVCLE1BUjRCLEVBUzVCLFVBVDRCLEVBVTVCLElBVjRCLEVBVzVCLFFBWDRCLEVBWTVCLGFBWjRCLEVBYTVCLFdBYjRCLEVBYzVCLE9BZDRCLEVBZTVCLFVBZjRCLEVBZ0I1QixRQWhCNEIsRUFpQjVCLG9CQWpCNEIsRUFrQjVCLFlBbEI0QixFQW1CNUIsS0FuQjRCLEVBb0I1QixRQXBCNEIsRUFxQjVCLFFBckI0QixFQXNCNUIsT0F0QjRCLENBQTlCO0FBeUJBLElBQU1FLDZCQUE2QixHQUFHLENBQUMsV0FBRCxFQUFjLGVBQWQsRUFBK0IsT0FBL0IsRUFBd0MsT0FBeEMsRUFBaUQsV0FBakQsQ0FBdEM7QUFFQSxJQUFNRSxvQkFBb0IsR0FBRyxDQUMzQixLQUQyQixFQUUzQixJQUYyQixFQUczQjtBQUNBLE1BSjJCLEVBSzNCLFlBTDJCLEVBTTNCLFdBTjJCLEVBTzNCLGlCQVAyQixFQVEzQixZQVIyQixFQVMzQixrQkFUMkIsRUFVM0IsV0FWMkIsRUFXM0IsaUJBWDJCLEVBWTNCLFlBWjJCLEVBYTNCLGNBYjJCLENBQTdCLEMsQ0FnQkE7O0lBQ3FCc0YsWTs7Ozs7Ozs7Ozs7OztnQ0FDUDtBQUNWLGFBQU8sSUFBSXBHLHVEQUFKLENBQWM7QUFDbkJnQixxQkFBYSxFQUFiQSxhQURtQjtBQUVuQk4sNkJBQXFCLEVBQXJCQSxxQkFGbUI7QUFHbkJJLDRCQUFvQixFQUFwQkEsb0JBSG1CO0FBSW5CRixxQ0FBNkIsRUFBN0JBLDZCQUptQjtBQUtuQlEsbUJBQVcsRUFBRSxTQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBTE07QUFNbkJFLGtCQUFVLEVBQUUsQ0FBQyxHQUFELENBTk87QUFPbkJFLG1CQUFXLEVBQUUsQ0FBQyxHQUFELENBUE07QUFRbkJFLCtCQUF1QixFQUFFLENBQUMsR0FBRCxDQVJOO0FBU25CRSw2QkFBcUIsRUFBRSxDQUFDLEdBQUQsQ0FUSjtBQVVuQnBCLHdCQUFnQixFQUFFLENBQUMsSUFBRCxDQVZDO0FBV25CVSx3QkFBZ0IsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBWEM7QUFZbkJiLGlCQUFTLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekI7QUFaUSxPQUFkLENBQVA7QUFjRDs7OztFQWhCdUNqRyx1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hpQjFDO0FBQ0E7QUFFQSxJQUFNNEcsYUFBYSxHQUFHLENBQ3BCLFlBRG9CLEVBRXBCLEtBRm9CLEVBR3BCLEtBSG9CLEVBSXBCLE9BSm9CLEVBS3BCLFNBTG9CLEVBTXBCLEtBTm9CLEVBT3BCLElBUG9CLEVBUXBCLEtBUm9CLEVBU3BCLFlBVG9CLEVBVXBCLFFBVm9CLEVBV3BCLFNBWG9CLEVBWXBCLFFBWm9CLEVBYXBCLFFBYm9CLEVBY3BCLE1BZG9CLEVBZXBCLE1BZm9CLEVBZ0JwQixJQWhCb0IsRUFpQnBCLE1BakJvQixFQWtCcEIsU0FsQm9CLEVBbUJwQixNQW5Cb0IsRUFvQnBCLFFBcEJvQixFQXFCcEIsTUFyQm9CLEVBc0JwQixXQXRCb0IsRUF1QnBCLE9BdkJvQixFQXdCcEIsU0F4Qm9CLEVBeUJwQixRQXpCb0IsRUEwQnBCLFdBMUJvQixFQTJCcEIsWUEzQm9CLEVBNEJwQixVQTVCb0IsRUE2QnBCLFNBN0JvQixFQThCcEIsUUE5Qm9CLEVBK0JwQixPQS9Cb0IsRUFnQ3BCLGNBaENvQixFQWlDcEIsY0FqQ29CLEVBa0NwQixjQWxDb0IsRUFtQ3BCLG1CQW5Db0IsRUFvQ3BCLGNBcENvQixFQXFDcEIsUUFyQ29CLEVBc0NwQixVQXRDb0IsRUF1Q3BCLFdBdkNvQixFQXdDcEIsVUF4Q29CLEVBeUNwQixpQkF6Q29CLEVBMENwQixZQTFDb0IsRUEyQ3BCLFlBM0NvQixFQTRDcEIsS0E1Q29CLEVBNkNwQixTQTdDb0IsRUE4Q3BCLFNBOUNvQixFQStDcEIsU0EvQ29CLEVBZ0RwQixTQWhEb0IsRUFpRHBCLFFBakRvQixFQWtEcEIsTUFsRG9CLEVBbURwQixVQW5Eb0IsRUFvRHBCLGVBcERvQixFQXFEcEIsVUFyRG9CLEVBc0RwQixhQXREb0IsRUF1RHBCLEtBdkRvQixFQXdEcEIsZUF4RG9CLEVBeURwQixRQXpEb0IsRUEwRHBCLE1BMURvQixFQTJEcEIsTUEzRG9CLEVBNERwQixNQTVEb0IsRUE2RHBCLE1BN0RvQixFQThEcEIsUUE5RG9CLEVBK0RwQixVQS9Eb0IsRUFnRXBCLFNBaEVvQixFQWlFcEIsUUFqRW9CLEVBa0VwQixRQWxFb0IsRUFtRXBCLE1BbkVvQixFQW9FcEIsU0FwRW9CLEVBcUVwQixPQXJFb0IsRUFzRXBCLE9BdEVvQixFQXVFcEIsT0F2RW9CLEVBd0VwQixRQXhFb0IsRUF5RXBCLFFBekVvQixFQTBFcEIsS0ExRW9CLEVBMkVwQixPQTNFb0IsRUE0RXBCLFNBNUVvQixFQTZFcEIsTUE3RW9CLEVBOEVwQixVQTlFb0IsRUErRXBCLFNBL0VvQixFQWdGcEIsT0FoRm9CLEVBaUZwQixPQWpGb0IsRUFrRnBCLFFBbEZvQixFQW1GcEIsZUFuRm9CLEVBb0ZwQixrQkFwRm9CLEVBcUZwQixhQXJGb0IsRUFzRnBCLGFBdEZvQixFQXVGcEIsSUF2Rm9CLEVBd0ZwQixRQXhGb0IsRUF5RnBCLG1CQXpGb0IsRUEwRnBCLG1CQTFGb0IsRUEyRnBCLElBM0ZvQixFQTRGcEIsT0E1Rm9CLEVBNkZwQixRQTdGb0IsRUE4RnBCLE9BOUZvQixFQStGcEIsT0EvRm9CLEVBZ0dwQixhQWhHb0IsRUFpR3BCLFFBakdvQixFQWtHcEIsS0FsR29CLEVBbUdwQixNQW5Hb0IsRUFvR3BCLE1BcEdvQixFQXFHcEIsTUFyR29CLEVBc0dwQixNQXRHb0IsRUF1R3BCLE1BdkdvQixFQXdHcEIsU0F4R29CLEVBeUdwQixXQXpHb0IsRUEwR3BCLFVBMUdvQixFQTJHcEIsTUEzR29CLEVBNEdwQixJQTVHb0IsRUE2R3BCLFNBN0dvQixFQThHcEIsTUE5R29CLEVBK0dwQixLQS9Hb0IsRUFnSHBCLE1BaEhvQixFQWlIcEIsTUFqSG9CLEVBa0hwQixTQWxIb0IsRUFtSHBCLE9BbkhvQixFQW9IcEIsTUFwSG9CLEVBcUhwQixNQXJIb0IsRUFzSHBCLE9BdEhvQixFQXVIcEIsUUF2SG9CLEVBd0hwQixPQXhIb0IsRUF5SHBCLE1BekhvQixFQTBIcEIsV0ExSG9CLEVBMkhwQixnQkEzSG9CLEVBNEhwQixNQTVIb0IsRUE2SHBCLE1BN0hvQixFQThIcEIsVUE5SG9CLEVBK0hwQixVQS9Ib0IsRUFnSXBCLE1BaElvQixFQWlJcEIsY0FqSW9CLEVBa0lwQix5QkFsSW9CLEVBbUlwQiwrQkFuSW9CLEVBb0lwQixPQXBJb0IsRUFxSXBCLFVBcklvQixFQXNJcEIsWUF0SW9CLEVBdUlwQixXQXZJb0IsRUF3SXBCLFlBeElvQixFQXlJcEIsV0F6SW9CLEVBMElwQixvQkExSW9CLEVBMklwQixlQTNJb0IsRUE0SXBCLEtBNUlvQixFQTZJcEIsVUE3SW9CLEVBOElwQixTQTlJb0IsRUErSXBCLEtBL0lvQixFQWdKcEIsb0JBaEpvQixFQWlKcEIsTUFqSm9CLEVBa0pwQixTQWxKb0IsRUFtSnBCLElBbkpvQixFQW9KcEIsVUFwSm9CLEVBcUpwQixRQXJKb0IsRUFzSnBCLFlBdEpvQixFQXVKcEIsSUF2Sm9CLEVBd0pwQixPQXhKb0IsRUF5SnBCLEtBekpvQixFQTBKcEIsT0ExSm9CLEVBMkpwQixTQTNKb0IsRUE0SnBCLE1BNUpvQixFQTZKcEIsZUE3Sm9CLEVBOEpwQixpQkE5Sm9CLEVBK0pwQixXQS9Kb0IsRUFnS3BCLFVBaEtvQixFQWlLcEIsV0FqS29CLEVBa0twQixTQWxLb0IsRUFtS3BCLFdBbktvQixFQW9LcEIsT0FwS29CLEVBcUtwQixPQXJLb0IsRUFzS3BCLE1BdEtvQixFQXVLcEIsT0F2S29CLEVBd0twQixZQXhLb0IsRUF5S3BCLE1BektvQixFQTBLcEIsV0ExS29CLEVBMktwQixlQTNLb0IsRUE0S3BCLFlBNUtvQixFQTZLcEIsUUE3S29CLEVBOEtwQixTQTlLb0IsRUErS3BCLFFBL0tvQixFQWdMcEIsUUFoTG9CLEVBaUxwQixTQWpMb0IsRUFrTHBCLFNBbExvQixFQW1McEIsVUFuTG9CLEVBb0xwQixVQXBMb0IsRUFxTHBCLFFBckxvQixFQXNMcEIsV0F0TG9CLEVBdUxwQixRQXZMb0IsRUF3THBCLE9BeExvQixFQXlMcEIsT0F6TG9CLEVBMExwQixNQTFMb0IsRUEyTHBCLFFBM0xvQixFQTRMcEIsU0E1TG9CLEVBNkxwQixvQkE3TG9CLEVBOExwQixRQTlMb0IsRUErTHBCLFdBL0xvQixFQWdNcEIsV0FoTW9CLEVBaU1wQixLQWpNb0IsRUFrTXBCLE1BbE1vQixFQW1NcEIsUUFuTW9CLEVBb01wQixNQXBNb0IsRUFxTXBCLFVBck1vQixFQXNNcEIsU0F0TW9CLEVBdU1wQixVQXZNb0IsRUF3TXBCLEtBeE1vQixFQXlNcEIsY0F6TW9CLEVBME1wQixVQTFNb0IsRUEyTXBCLFlBM01vQixFQTRNcEIsZ0JBNU1vQixFQTZNcEIscUJBN01vQixFQThNcEIsa0JBOU1vQixFQStNcEIsS0EvTW9CLEVBZ05wQixVQWhOb0IsRUFpTnBCLG1CQWpOb0IsRUFrTnBCLGtCQWxOb0IsRUFtTnBCLG9CQW5Ob0IsRUFvTnBCLGVBcE5vQixFQXFOcEIsT0FyTm9CLEVBc05wQixZQXROb0IsRUF1TnBCLE1Bdk5vQixFQXdOcEIsVUF4Tm9CLEVBeU5wQixTQXpOb0IsRUEwTnBCLFVBMU5vQixFQTJOcEIsSUEzTm9CLEVBNE5wQixVQTVOb0IsRUE2TnBCLFNBN05vQixFQThOcEIsTUE5Tm9CLEVBK05wQixNQS9Ob0IsRUFnT3BCLE9BaE9vQixFQWlPcEIsUUFqT29CLEVBa09wQixRQWxPb0IsRUFtT3BCLFVBbk9vQixFQW9PcEIsUUFwT29CLEVBcU9wQixPQXJPb0IsRUFzT3BCLEtBdE9vQixFQXVPcEIsT0F2T29CLEVBd09wQixVQXhPb0IsRUF5T3BCLFVBek9vQixFQTBPcEIsZUExT29CLEVBMk9wQixRQTNPb0IsRUE0T3BCLFdBNU9vQixFQTZPcEIsU0E3T29CLEVBOE9wQixjQTlPb0IsRUErT3BCLFNBL09vQixFQWdQcEIsTUFoUG9CLEVBaVBwQixPQWpQb0IsRUFrUHBCLE9BbFBvQixFQW1QcEIsUUFuUG9CLEVBb1BwQixNQXBQb0IsRUFxUHBCLE9BclBvQixFQXNQcEIsS0F0UG9CLEVBdVBwQixZQXZQb0IsRUF3UHBCLFVBeFBvQixDQUF0QjtBQTJQQSxJQUFNTixxQkFBcUIsR0FBRyxDQUM1QixLQUQ0QixFQUU1QixjQUY0QixFQUc1QixhQUg0QixFQUk1QixhQUo0QixFQUs1QixRQUw0QixFQU01QixNQU40QixFQU81QixVQVA0QixFQVE1QixRQVI0QixFQVM1QixhQVQ0QixFQVU1QixRQVY0QixFQVc1QixPQVg0QixFQVk1QixVQVo0QixFQWE1QixRQWI0QixFQWM1QixLQWQ0QixFQWU1QixRQWY0QixFQWdCNUIsUUFoQjRCLEVBaUI1QixPQWpCNEIsQ0FBOUI7QUFvQkEsSUFBTUUsNkJBQTZCLEdBQUcsQ0FBQyxXQUFELEVBQWMsZUFBZCxFQUErQixPQUEvQixFQUF3QyxXQUF4QyxDQUF0QztBQUVBLElBQU1FLG9CQUFvQixHQUFHLENBQzNCLEtBRDJCLEVBRTNCLE1BRjJCLEVBRzNCLElBSDJCLEVBSTNCLE1BSjJCLEVBSzNCO0FBQ0EsTUFOMkIsRUFPM0IsWUFQMkIsRUFRM0IsV0FSMkIsRUFTM0IsaUJBVDJCLEVBVTNCLFlBVjJCLEVBVzNCLGtCQVgyQixFQVkzQixZQVoyQixFQWEzQixjQWIyQixFQWMzQjtBQUNBLGVBZjJCLEVBZ0IzQixtQkFoQjJCLEVBaUIzQix5QkFqQjJCLEVBa0IzQixvQkFsQjJCLEVBbUIzQiwwQkFuQjJCLENBQTdCLEMsQ0FzQkE7O0lBQ3FCdUYsZ0I7Ozs7Ozs7Ozs7Ozs7Z0NBQ1A7QUFDVixhQUFPLElBQUlyRyx1REFBSixDQUFjO0FBQ25CZ0IscUJBQWEsRUFBYkEsYUFEbUI7QUFFbkJOLDZCQUFxQixFQUFyQkEscUJBRm1CO0FBR25CSSw0QkFBb0IsRUFBcEJBLG9CQUhtQjtBQUluQkYscUNBQTZCLEVBQTdCQSw2QkFKbUI7QUFLbkJRLG1CQUFXLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsQ0FMTTtBQU1uQkUsa0JBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxNQUFOLENBTk87QUFPbkJFLG1CQUFXLEVBQUUsQ0FBQyxHQUFELEVBQU0sS0FBTixDQVBNO0FBUW5CRSwrQkFBdUIsRUFBRSxDQUFDLEdBQUQsQ0FSTjtBQVNuQkUsNkJBQXFCLEVBQUUsRUFUSjtBQVVuQnBCLHdCQUFnQixFQUFFLENBQUMsSUFBRCxFQUFPLEdBQVAsQ0FWQztBQVduQlUsd0JBQWdCLEVBQUUsQ0FBQyxHQUFELENBWEM7QUFZbkJiLGlCQUFTLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0MsSUFBdEMsRUFBNEMsSUFBNUM7QUFaUSxPQUFkLENBQVA7QUFjRDs7OztFQWhCMkNqRyx1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNTOUM7QUFDQTtBQUVBLElBQU00RyxhQUFhLEdBQUcsQ0FDcEIsWUFEb0IsRUFFcEIsS0FGb0IsRUFHcEIsS0FIb0IsRUFJcEIsT0FKb0IsRUFLcEIsU0FMb0IsRUFNcEIsS0FOb0IsRUFPcEIsSUFQb0IsRUFRcEIsS0FSb0IsRUFTcEIsWUFUb0IsRUFVcEIsUUFWb0IsRUFXcEIsU0FYb0IsRUFZcEIsUUFab0IsRUFhcEIsUUFib0IsRUFjcEIsTUFkb0IsRUFlcEIsTUFmb0IsRUFnQnBCLElBaEJvQixFQWlCcEIsTUFqQm9CLEVBa0JwQixTQWxCb0IsRUFtQnBCLE1BbkJvQixFQW9CcEIsUUFwQm9CLEVBcUJwQixNQXJCb0IsRUFzQnBCLFdBdEJvQixFQXVCcEIsT0F2Qm9CLEVBd0JwQixTQXhCb0IsRUF5QnBCLFFBekJvQixFQTBCcEIsV0ExQm9CLEVBMkJwQixZQTNCb0IsRUE0QnBCLFVBNUJvQixFQTZCcEIsU0E3Qm9CLEVBOEJwQixRQTlCb0IsRUErQnBCLE9BL0JvQixFQWdDcEIsTUFoQ29CLEVBaUNwQixXQWpDb0IsRUFrQ3BCLGNBbENvQixFQW1DcEIsY0FuQ29CLEVBb0NwQixtQkFwQ29CLEVBcUNwQixjQXJDb0IsRUFzQ3BCLFFBdENvQixFQXVDcEIsVUF2Q29CLEVBd0NwQixXQXhDb0IsRUF5Q3BCLFVBekNvQixFQTBDcEIsaUJBMUNvQixFQTJDcEIsWUEzQ29CLEVBNENwQixZQTVDb0IsRUE2Q3BCLEtBN0NvQixFQThDcEIsU0E5Q29CLEVBK0NwQixTQS9Db0IsRUFnRHBCLFNBaERvQixFQWlEcEIsU0FqRG9CLEVBa0RwQixRQWxEb0IsRUFtRHBCLFlBbkRvQixFQW9EcEIsTUFwRG9CLEVBcURwQixVQXJEb0IsRUFzRHBCLGVBdERvQixFQXVEcEIsVUF2RG9CLEVBd0RwQixhQXhEb0IsRUF5RHBCLEtBekRvQixFQTBEcEIsUUExRG9CLEVBMkRwQixNQTNEb0IsRUE0RHBCLE1BNURvQixFQTZEcEIsTUE3RG9CLEVBOERwQixNQTlEb0IsRUErRHBCLFFBL0RvQixFQWdFcEIsT0FoRW9CLEVBaUVwQixVQWpFb0IsRUFrRXBCLFNBbEVvQixFQW1FcEIsUUFuRW9CLEVBb0VwQixRQXBFb0IsRUFxRXBCLE1BckVvQixFQXNFcEIsU0F0RW9CLEVBdUVwQixPQXZFb0IsRUF3RXBCLE9BeEVvQixFQXlFcEIsYUF6RW9CLEVBMEVwQixPQTFFb0IsRUEyRXBCLFFBM0VvQixFQTRFcEIsUUE1RW9CLEVBNkVwQixLQTdFb0IsRUE4RXBCLE9BOUVvQixFQStFcEIsU0EvRW9CLEVBZ0ZwQixNQWhGb0IsRUFpRnBCLFVBakZvQixFQWtGcEIsVUFsRm9CLEVBbUZwQixXQW5Gb0IsRUFvRnBCLEtBcEZvQixFQXFGcEIsT0FyRm9CLEVBc0ZwQixPQXRGb0IsRUF1RnBCLFVBdkZvQixFQXdGcEIsUUF4Rm9CLEVBeUZwQixRQXpGb0IsRUEwRnBCLGVBMUZvQixFQTJGcEIsa0JBM0ZvQixFQTRGcEIsYUE1Rm9CLEVBNkZwQixhQTdGb0IsRUE4RnBCLElBOUZvQixFQStGcEIsUUEvRm9CLEVBZ0dwQixJQWhHb0IsRUFpR3BCLE9BakdvQixFQWtHcEIsUUFsR29CLEVBbUdwQixPQW5Hb0IsRUFvR3BCLE9BcEdvQixFQXFHcEIsYUFyR29CLEVBc0dwQixRQXRHb0IsRUF1R3BCLEtBdkdvQixFQXdHcEIsTUF4R29CLEVBeUdwQixNQXpHb0IsRUEwR3BCLE1BMUdvQixFQTJHcEIsTUEzR29CLEVBNEdwQixNQTVHb0IsRUE2R3BCLFNBN0dvQixFQThHcEIsVUE5R29CLEVBK0dwQixNQS9Hb0IsRUFnSHBCLGdCQWhIb0IsRUFpSHBCLGlCQWpIb0IsRUFrSHBCLElBbEhvQixFQW1IcEIsU0FuSG9CLEVBb0hwQixNQXBIb0IsRUFxSHBCLFlBckhvQixFQXNIcEIsS0F0SG9CLEVBdUhwQixNQXZIb0IsRUF3SHBCLE1BeEhvQixFQXlIcEIsS0F6SG9CLEVBMEhwQixZQTFIb0IsRUEySHBCLFNBM0hvQixFQTRIcEIsTUE1SG9CLEVBNkhwQixTQTdIb0IsRUE4SHBCLE9BOUhvQixFQStIcEIsTUEvSG9CLEVBZ0lwQixNQWhJb0IsRUFpSXBCLE9BaklvQixFQWtJcEIsUUFsSW9CLEVBbUlwQixPQW5Jb0IsRUFvSXBCLE1BcElvQixFQXFJcEIsV0FySW9CLEVBc0lwQixnQkF0SW9CLEVBdUlwQixNQXZJb0IsRUF3SXBCLE1BeElvQixFQXlJcEIsVUF6SW9CLEVBMElwQixVQTFJb0IsRUEySXBCLE1BM0lvQixFQTRJcEIsY0E1SW9CLEVBNklwQixhQTdJb0IsRUE4SXBCLCtCQTlJb0IsRUErSXBCLE9BL0lvQixFQWdKcEIsVUFoSm9CLEVBaUpwQixZQWpKb0IsRUFrSnBCLFdBbEpvQixFQW1KcEIsWUFuSm9CLEVBb0pwQixXQXBKb0IsRUFxSnBCLG9CQXJKb0IsRUFzSnBCLGVBdEpvQixFQXVKcEIsS0F2Sm9CLEVBd0pwQixVQXhKb0IsRUF5SnBCLFNBekpvQixFQTBKcEIsS0ExSm9CLEVBMkpwQixvQkEzSm9CLEVBNEpwQixXQTVKb0IsRUE2SnBCLE9BN0pvQixFQThKcEIsTUE5Sm9CLEVBK0pwQixTQS9Kb0IsRUFnS3BCLElBaEtvQixFQWlLcEIsSUFqS29CLEVBa0twQixVQWxLb0IsRUFtS3BCLGlCQW5Lb0IsRUFvS3BCLFFBcEtvQixFQXFLcEIsWUFyS29CLEVBc0twQixJQXRLb0IsRUF1S3BCLE9BdktvQixFQXdLcEIsS0F4S29CLEVBeUtwQixPQXpLb0IsRUEwS3BCLFNBMUtvQixFQTJLcEIsTUEzS29CLEVBNEtwQixXQTVLb0IsRUE2S3BCLGNBN0tvQixFQThLcEIsV0E5S29CLEVBK0twQixTQS9Lb0IsRUFnTHBCLFdBaExvQixFQWlMcEIsT0FqTG9CLEVBa0xwQixPQWxMb0IsRUFtTHBCLE1BbkxvQixFQW9McEIsTUFwTG9CLEVBcUxwQixPQXJMb0IsRUFzTHBCLFlBdExvQixFQXVMcEIsTUF2TG9CLEVBd0xwQixXQXhMb0IsRUF5THBCLFlBekxvQixFQTBMcEIsUUExTG9CLEVBMkxwQixTQTNMb0IsRUE0THBCLFFBNUxvQixFQTZMcEIsUUE3TG9CLEVBOExwQixTQTlMb0IsRUErTHBCLFNBL0xvQixFQWdNcEIsVUFoTW9CLEVBaU1wQixVQWpNb0IsRUFrTXBCLFFBbE1vQixFQW1NcEIsUUFuTW9CLEVBb01wQixPQXBNb0IsRUFxTXBCLE9Bck1vQixFQXNNcEIsS0F0TW9CLEVBdU1wQixNQXZNb0IsRUF3TXBCLFlBeE1vQixFQXlNcEIsUUF6TW9CLEVBME1wQixTQTFNb0IsRUEyTXBCLG9CQTNNb0IsRUE0TXBCLFFBNU1vQixFQTZNcEIsV0E3TW9CLEVBOE1wQixXQTlNb0IsRUErTXBCLEtBL01vQixFQWdOcEIsTUFoTm9CLEVBaU5wQixRQWpOb0IsRUFrTnBCLFVBbE5vQixFQW1OcEIsU0FuTm9CLEVBb05wQixVQXBOb0IsRUFxTnBCLEtBck5vQixFQXNOcEIsY0F0Tm9CLEVBdU5wQixVQXZOb0IsRUF3TnBCLFlBeE5vQixFQXlOcEIsZ0JBek5vQixFQTBOcEIscUJBMU5vQixFQTJOcEIsa0JBM05vQixFQTROcEIsS0E1Tm9CLEVBNk5wQixVQTdOb0IsRUE4TnBCLFFBOU5vQixFQStOcEIsZUEvTm9CLEVBZ09wQixRQWhPb0IsRUFpT3BCLE9Bak9vQixFQWtPcEIsWUFsT29CLEVBbU9wQixNQW5Pb0IsRUFvT3BCLFVBcE9vQixFQXFPcEIsU0FyT29CLEVBc09wQixVQXRPb0IsRUF1T3BCLElBdk9vQixFQXdPcEIsVUF4T29CLEVBeU9wQixTQXpPb0IsRUEwT3BCLE1BMU9vQixFQTJPcEIsTUEzT29CLEVBNE9wQixPQTVPb0IsRUE2T3BCLFFBN09vQixFQThPcEIsUUE5T29CLEVBK09wQixVQS9Pb0IsRUFnUHBCLFFBaFBvQixFQWlQcEIsT0FqUG9CLEVBa1BwQixLQWxQb0IsRUFtUHBCLE9BblBvQixFQW9QcEIsVUFwUG9CLEVBcVBwQixVQXJQb0IsRUFzUHBCLGVBdFBvQixFQXVQcEIsUUF2UG9CLEVBd1BwQixXQXhQb0IsRUF5UHBCLFNBelBvQixFQTBQcEIsY0ExUG9CLEVBMlBwQixTQTNQb0IsRUE0UHBCLFNBNVBvQixFQTZQcEIsTUE3UG9CLEVBOFBwQixPQTlQb0IsRUErUHBCLE9BL1BvQixFQWdRcEIsUUFoUW9CLEVBaVFwQixNQWpRb0IsRUFrUXBCLE9BbFFvQixFQW1RcEIsS0FuUW9CLEVBb1FwQixZQXBRb0IsRUFxUXBCLFVBclFvQixDQUF0QjtBQXdRQSxJQUFNTixxQkFBcUIsR0FBRyxDQUM1QixLQUQ0QixFQUU1QixjQUY0QixFQUc1QixhQUg0QixFQUk1QixhQUo0QixFQUs1QixRQUw0QixFQU01QixNQU40QixFQU81QixVQVA0QixFQVE1QixRQVI0QixFQVM1QixhQVQ0QixFQVU1QixRQVY0QixFQVc1QixPQVg0QixFQVk1QixVQVo0QixFQWE1QixRQWI0QixFQWM1QixLQWQ0QixFQWU1QixRQWY0QixFQWdCNUIsUUFoQjRCLEVBaUI1QixPQWpCNEIsQ0FBOUI7QUFvQkEsSUFBTUUsNkJBQTZCLEdBQUcsQ0FBQyxXQUFELEVBQWMsZUFBZCxFQUErQixPQUEvQixFQUF3QyxXQUF4QyxDQUF0QztBQUVBLElBQU1FLG9CQUFvQixHQUFHLENBQzNCLEtBRDJCLEVBRTNCLE1BRjJCLEVBRzNCLElBSDJCLEVBSTNCLE1BSjJCLEVBSzNCO0FBQ0EsTUFOMkIsRUFPM0IsWUFQMkIsRUFRM0IsV0FSMkIsRUFTM0IsaUJBVDJCLEVBVTNCLFlBVjJCLEVBVzNCLGtCQVgyQixFQVkzQixZQVoyQixFQWEzQixjQWIyQixFQWMzQjtBQUNBLGVBZjJCLEVBZ0IzQixtQkFoQjJCLEVBaUIzQix5QkFqQjJCLEVBa0IzQixvQkFsQjJCLEVBbUIzQiwwQkFuQjJCLENBQTdCOztJQXNCcUJ3RixjOzs7Ozs7Ozs7Ozs7O2dDQUNQO0FBQ1YsYUFBTyxJQUFJdEcsdURBQUosQ0FBYztBQUNuQmdCLHFCQUFhLEVBQWJBLGFBRG1CO0FBRW5CTiw2QkFBcUIsRUFBckJBLHFCQUZtQjtBQUduQkksNEJBQW9CLEVBQXBCQSxvQkFIbUI7QUFJbkJGLHFDQUE2QixFQUE3QkEsNkJBSm1CO0FBS25CUSxtQkFBVyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBTE07QUFNbkJFLGtCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sTUFBTixDQU5PO0FBT25CRSxtQkFBVyxFQUFFLENBQUMsR0FBRCxFQUFNLEtBQU4sQ0FQTTtBQVFuQkUsK0JBQXVCLEVBQUUsQ0FBQyxHQUFELENBUk47QUFTbkJFLDZCQUFxQixFQUFFLEVBVEo7QUFVbkJwQix3QkFBZ0IsRUFBRSxDQUFDLElBQUQsRUFBTyxHQUFQLENBVkM7QUFXbkJVLHdCQUFnQixFQUFFLENBQUMsR0FBRCxDQVhDO0FBWW5CYixpQkFBUyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDLElBQXRDLEVBQTRDLElBQTVDLEVBQWtELElBQWxELEVBQXdELEtBQXhEO0FBWlEsT0FBZCxDQUFQO0FBY0Q7Ozs7RUFoQnlDakcsdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2VDVDO0FBQ0E7QUFFQSxJQUFNNEcsYUFBYSxHQUFHLENBQ3BCLEtBRG9CLEVBRXBCLE9BRm9CLEVBR3BCLFNBSG9CLEVBSXBCLEtBSm9CLEVBS3BCLEtBTG9CLEVBTXBCLE9BTm9CLEVBT3BCLElBUG9CLEVBUXBCLEtBUm9CLEVBU3BCLE9BVG9CLEVBVXBCLFNBVm9CLEVBV3BCLFFBWG9CLEVBWXBCLFNBWm9CLEVBYXBCLE9BYm9CLEVBY3BCLFFBZG9CLEVBZXBCLE9BZm9CLEVBZ0JwQixJQWhCb0IsRUFpQnBCLE1BakJvQixFQWtCcEIsTUFsQm9CLEVBbUJwQixNQW5Cb0IsRUFvQnBCLFNBcEJvQixFQXFCcEIsU0FyQm9CLEVBc0JwQixZQXRCb0IsRUF1QnBCLFFBdkJvQixFQXdCcEIsU0F4Qm9CLEVBeUJwQixVQXpCb0IsRUEwQnBCLFdBMUJvQixFQTJCcEIsT0EzQm9CLEVBNEJwQixRQTVCb0IsRUE2QnBCLFVBN0JvQixFQThCcEIsU0E5Qm9CLEVBK0JwQixXQS9Cb0IsRUFnQ3BCLFNBaENvQixFQWlDcEIsV0FqQ29CLEVBa0NwQixRQWxDb0IsRUFtQ3BCLFNBbkNvQixFQW9DcEIsTUFwQ29CLEVBcUNwQixVQXJDb0IsRUFzQ3BCLFVBdENvQixFQXVDcEIsSUF2Q29CLEVBd0NwQixNQXhDb0IsRUF5Q3BCLE1BekNvQixFQTBDcEIsU0ExQ29CLEVBMkNwQixNQTNDb0IsRUE0Q3BCLEtBNUNvQixFQTZDcEIsT0E3Q29CLEVBOENwQixRQTlDb0IsRUErQ3BCLFNBL0NvQixFQWdEcEIsU0FoRG9CLEVBaURwQixRQWpEb0IsRUFrRHBCLFNBbERvQixFQW1EcEIsT0FuRG9CLEVBb0RwQixPQXBEb0IsRUFxRHBCLE9BckRvQixFQXNEcEIsU0F0RG9CLEVBdURwQixLQXZEb0IsRUF3RHBCLE9BeERvQixFQXlEcEIsTUF6RG9CLEVBMERwQixVQTFEb0IsRUEyRHBCLE9BM0RvQixFQTREcEIsT0E1RG9CLEVBNkRwQixLQTdEb0IsRUE4RHBCLFFBOURvQixFQStEcEIsSUEvRG9CLEVBZ0VwQixRQWhFb0IsRUFpRXBCLE9BakVvQixFQWtFcEIsSUFsRW9CLEVBbUVwQixTQW5Fb0IsRUFvRXBCLFdBcEVvQixFQXFFcEIsT0FyRW9CLEVBc0VwQixPQXRFb0IsRUF1RXBCLFFBdkVvQixFQXdFcEIsT0F4RW9CLEVBeUVwQixRQXpFb0IsRUEwRXBCLFdBMUVvQixFQTJFcEIsTUEzRW9CLEVBNEVwQixJQTVFb0IsRUE2RXBCLE1BN0VvQixFQThFcEIsS0E5RW9CLEVBK0VwQixNQS9Fb0IsRUFnRnBCLFVBaEZvQixFQWlGcEIsT0FqRm9CLEVBa0ZwQixNQWxGb0IsRUFtRnBCLE1BbkZvQixFQW9GcEIsS0FwRm9CLEVBcUZwQixTQXJGb0IsRUFzRnBCLE1BdEZvQixFQXVGcEIsT0F2Rm9CLEVBd0ZwQixLQXhGb0IsRUF5RnBCLEtBekZvQixFQTBGcEIsU0ExRm9CLEVBMkZwQixTQTNGb0IsRUE0RnBCLGNBNUZvQixFQTZGcEIsT0E3Rm9CLEVBOEZwQixTQTlGb0IsRUErRnBCLFdBL0ZvQixFQWdHcEIsTUFoR29CLEVBaUdwQixLQWpHb0IsRUFrR3BCLE1BbEdvQixFQW1HcEIsUUFuR29CLEVBb0dwQixRQXBHb0IsRUFxR3BCLFFBckdvQixFQXNHcEIsSUF0R29CLEVBdUdwQixRQXZHb0IsRUF3R3BCLElBeEdvQixFQXlHcEIsT0F6R29CLEVBMEdwQixPQTFHb0IsRUEyR3BCLE1BM0dvQixFQTRHcEIsT0E1R29CLEVBNkdwQixXQTdHb0IsRUE4R3BCLFVBOUdvQixFQStHcEIsTUEvR29CLEVBZ0hwQixNQWhIb0IsRUFpSHBCLFNBakhvQixFQWtIcEIsU0FsSG9CLEVBbUhwQixTQW5Ib0IsRUFvSHBCLFdBcEhvQixFQXFIcEIsV0FySG9CLEVBc0hwQixRQXRIb0IsRUF1SHBCLEtBdkhvQixFQXdIcEIsT0F4SG9CLEVBeUhwQixRQXpIb0IsRUEwSHBCLFFBMUhvQixFQTJIcEIsUUEzSG9CLEVBNEhwQixXQTVIb0IsRUE2SHBCLFFBN0hvQixFQThIcEIsT0E5SG9CLEVBK0hwQixNQS9Ib0IsRUFnSXBCLFVBaElvQixFQWlJcEIsV0FqSW9CLEVBa0lwQixRQWxJb0IsRUFtSXBCLFFBbklvQixFQW9JcEIsTUFwSW9CLEVBcUlwQixNQXJJb0IsRUFzSXBCLEtBdElvQixFQXVJcEIsTUF2SW9CLEVBd0lwQixNQXhJb0IsRUF5SXBCLE9BeklvQixFQTBJcEIsWUExSW9CLEVBMklwQixRQTNJb0IsRUE0SXBCLFFBNUlvQixFQTZJcEIsTUE3SW9CLEVBOElwQixJQTlJb0IsRUErSXBCLGFBL0lvQixFQWdKcEIsU0FoSm9CLEVBaUpwQixNQWpKb0IsRUFrSnBCLFVBbEpvQixFQW1KcEIsT0FuSm9CLEVBb0pwQixPQXBKb0IsRUFxSnBCLFFBckpvQixFQXNKcEIsU0F0Sm9CLEVBdUpwQixRQXZKb0IsRUF3SnBCLE9BeEpvQixFQXlKcEIsUUF6Sm9CLEVBMEpwQixRQTFKb0IsRUEySnBCLEtBM0pvQixFQTRKcEIsTUE1Sm9CLEVBNkpwQixPQTdKb0IsRUE4SnBCLFVBOUpvQixFQStKcEIsT0EvSm9CLEVBZ0twQixRQWhLb0IsRUFpS3BCLFFBaktvQixFQWtLcEIsS0FsS29CLEVBbUtwQixNQW5Lb0IsRUFvS3BCLE1BcEtvQixFQXFLcEIsT0FyS29CLEVBc0twQixPQXRLb0IsRUF1S3BCLE1BdktvQixFQXdLcEIsUUF4S29CLEVBeUtwQixNQXpLb0IsRUEwS3BCLEtBMUtvQixDQUF0QjtBQTZLQSxJQUFNTixxQkFBcUIsR0FBRyxDQUM1QixhQUQ0QixFQUU1QixZQUY0QixFQUc1QixRQUg0QixFQUk1QixxQkFKNEIsRUFLNUIsZ0JBTDRCLEVBTTVCLGdCQU40QixFQU81QixNQVA0QixFQVE1QixVQVI0QixFQVM1QixRQVQ0QixFQVU1QixPQVY0QixFQVc1QixhQVg0QixFQVk1QixLQVo0QixFQWE1QixPQWI0QixFQWM1QixPQWQ0QixFQWU1QixNQWY0QixFQWdCNUIsVUFoQjRCLEVBaUI1QixTQWpCNEIsRUFrQjVCLFFBbEI0QixFQW1CNUIsb0JBbkI0QixFQW9CNUIsWUFwQjRCLEVBcUI1QixLQXJCNEIsRUFzQjVCLFFBdEI0QixFQXVCNUIsUUF2QjRCLEVBd0I1QixRQXhCNEIsRUF5QjVCLFVBekI0QixFQTBCNUIsUUExQjRCLEVBMkI1QixPQTNCNEIsQ0FBOUI7QUE4QkEsSUFBTUUsNkJBQTZCLEdBQUcsQ0FBQyxXQUFELEVBQWMsZUFBZCxFQUErQixPQUEvQixFQUF3QyxPQUF4QyxFQUFpRCxXQUFqRCxDQUF0QztBQUVBLElBQU1FLG9CQUFvQixHQUFHLENBQzNCLEtBRDJCLEVBRTNCLElBRjJCLEVBRzNCLEtBSDJCLEVBSTNCO0FBQ0EsTUFMMkIsRUFNM0IsWUFOMkIsRUFPM0IsV0FQMkIsRUFRM0IsaUJBUjJCLEVBUzNCLFlBVDJCLEVBVTNCLGtCQVYyQixDQUE3QixDLENBYUE7O0lBQ3FCeUYsYTs7Ozs7Ozs7Ozs7OztnQ0FDUDtBQUNWLGFBQU8sSUFBSXZHLHVEQUFKLENBQWM7QUFDbkJnQixxQkFBYSxFQUFiQSxhQURtQjtBQUVuQk4sNkJBQXFCLEVBQXJCQSxxQkFGbUI7QUFHbkJJLDRCQUFvQixFQUFwQkEsb0JBSG1CO0FBSW5CRixxQ0FBNkIsRUFBN0JBLDZCQUptQjtBQUtuQlEsbUJBQVcsRUFBRSxTQUFPLElBQVAsRUFBYSxJQUFiLENBTE07QUFNbkJFLGtCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FOTztBQU9uQkUsbUJBQVcsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQVBNO0FBUW5CSSw2QkFBcUIsRUFBRSxDQUFDLEdBQUQsQ0FSSjtBQVNuQnBCLHdCQUFnQixFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sQ0FUQztBQVVuQkgsaUJBQVMsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQO0FBVlEsT0FBZCxDQUFQO0FBWUQ7Ozs7RUFkd0NqRyx1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOU4zQztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU00RyxhQUFhLEdBQUcsQ0FDcEIsR0FEb0IsRUFFcEIsWUFGb0IsRUFHcEIsT0FIb0IsRUFJcEIsV0FKb0IsRUFLcEIsS0FMb0IsRUFNcEIsT0FOb0IsRUFPcEIsS0FQb0IsRUFRcEIsT0FSb0IsRUFTcEIsSUFUb0IsRUFVcEIsS0FWb0IsRUFXcEIsSUFYb0IsRUFZcEIsV0Fab0IsRUFhcEIsUUFib0IsRUFjcEIsS0Fkb0IsRUFlcEIsU0Fmb0IsRUFnQnBCLFlBaEJvQixFQWlCcEIsZ0JBakJvQixFQWtCcEIsUUFsQm9CLEVBbUJwQixXQW5Cb0IsRUFvQnBCLE9BcEJvQixFQXFCcEIsTUFyQm9CLEVBc0JwQixTQXRCb0IsRUF1QnBCLE1BdkJvQixFQXdCcEIsT0F4Qm9CLEVBeUJwQixTQXpCb0IsRUEwQnBCLE1BMUJvQixFQTJCcEIsSUEzQm9CLEVBNEJwQixNQTVCb0IsRUE2QnBCLEdBN0JvQixFQThCcEIsTUE5Qm9CLEVBK0JwQixTQS9Cb0IsRUFnQ3BCLFNBaENvQixFQWlDcEIsTUFqQ29CLEVBa0NwQixXQWxDb0IsRUFtQ3BCLE1BbkNvQixFQW9DcEIsV0FwQ29CLEVBcUNwQixTQXJDb0IsRUFzQ3BCLGFBdENvQixFQXVDcEIsV0F2Q29CLEVBd0NwQixPQXhDb0IsRUF5Q3BCLFdBekNvQixFQTBDcEIsT0ExQ29CLEVBMkNwQixPQTNDb0IsRUE0Q3BCLFNBNUNvQixFQTZDcEIsVUE3Q29CLEVBOENwQixVQTlDb0IsRUErQ3BCLFNBL0NvQixFQWdEcEIsU0FoRG9CLEVBaURwQixTQWpEb0IsRUFrRHBCLFNBbERvQixFQW1EcEIsUUFuRG9CLEVBb0RwQixXQXBEb0IsRUFxRHBCLFVBckRvQixFQXNEcEIsVUF0RG9CLEVBdURwQixTQXZEb0IsRUF3RHBCLFVBeERvQixFQXlEcEIsYUF6RG9CLEVBMERwQixTQTFEb0IsRUEyRHBCLFVBM0RvQixFQTREcEIsU0E1RG9CLEVBNkRwQixPQTdEb0IsRUE4RHBCLE9BOURvQixFQStEcEIsUUEvRG9CLEVBZ0VwQixZQWhFb0IsRUFpRXBCLFNBakVvQixFQWtFcEIsU0FsRW9CLEVBbUVwQixRQW5Fb0IsRUFvRXBCLGFBcEVvQixFQXFFcEIsVUFyRW9CLEVBc0VwQixNQXRFb0IsRUF1RXBCLFdBdkVvQixFQXdFcEIsTUF4RW9CLEVBeUVwQixLQXpFb0IsRUEwRXBCLFNBMUVvQixFQTJFcEIsU0EzRW9CLEVBNEVwQixRQTVFb0IsRUE2RXBCLFFBN0VvQixFQThFcEIsT0E5RW9CLEVBK0VwQixNQS9Fb0IsRUFnRnBCLGVBaEZvQixFQWlGcEIsV0FqRm9CLEVBa0ZwQixVQWxGb0IsRUFtRnBCLElBbkZvQixFQW9GcEIsUUFwRm9CLEVBcUZwQixNQXJGb0IsRUFzRnBCLFVBdEZvQixFQXVGcEIsU0F2Rm9CLEVBd0ZwQixPQXhGb0IsRUF5RnBCLE9BekZvQixFQTBGcEIsS0ExRm9CLEVBMkZwQixRQTNGb0IsRUE0RnBCLFlBNUZvQixFQTZGcEIsV0E3Rm9CLEVBOEZwQixTQTlGb0IsRUErRnBCLFFBL0ZvQixFQWdHcEIsTUFoR29CLEVBaUdwQixTQWpHb0IsRUFrR3BCLFVBbEdvQixFQW1HcEIsU0FuR29CLEVBb0dwQixPQXBHb0IsRUFxR3BCLE9BckdvQixFQXNHcEIsT0F0R29CLEVBdUdwQixPQXZHb0IsRUF3R3BCLE9BeEdvQixFQXlHcEIsT0F6R29CLEVBMEdwQixLQTFHb0IsRUEyR3BCLFFBM0dvQixFQTRHcEIsT0E1R29CLEVBNkdwQixNQTdHb0IsRUE4R3BCLFVBOUdvQixFQStHcEIsU0EvR29CLEVBZ0hwQixNQWhIb0IsRUFpSHBCLE9BakhvQixFQWtIcEIsT0FsSG9CLEVBbUhwQixNQW5Ib0IsRUFvSHBCLE1BcEhvQixFQXFIcEIsUUFySG9CLEVBc0hwQixNQXRIb0IsRUF1SHBCLFlBdkhvQixFQXdIcEIsSUF4SG9CLEVBeUhwQixXQXpIb0IsRUEwSHBCLElBMUhvQixFQTJIcEIsV0EzSG9CLEVBNEhwQixPQTVIb0IsRUE2SHBCLFNBN0hvQixFQThIcEIsV0E5SG9CLEVBK0hwQixTQS9Ib0IsRUFnSXBCLFVBaElvQixFQWlJcEIsY0FqSW9CLEVBa0lwQixLQWxJb0IsRUFtSXBCLFNBbklvQixFQW9JcEIsV0FwSW9CLEVBcUlwQixVQXJJb0IsRUFzSXBCLE1BdElvQixFQXVJcEIsWUF2SW9CLEVBd0lwQixJQXhJb0IsRUF5SXBCLFdBeklvQixFQTBJcEIsTUExSW9CLEVBMklwQixVQTNJb0IsRUE0SXBCLE9BNUlvQixFQTZJcEIsU0E3SW9CLEVBOElwQixRQTlJb0IsRUErSXBCLE9BL0lvQixFQWdKcEIsU0FoSm9CLEVBaUpwQixNQWpKb0IsRUFrSnBCLE9BbEpvQixFQW1KcEIsT0FuSm9CLEVBb0pwQixPQXBKb0IsRUFxSnBCLFNBckpvQixFQXNKcEIsT0F0Sm9CLEVBdUpwQixNQXZKb0IsRUF3SnBCLE1BeEpvQixFQXlKcEIsS0F6Sm9CLEVBMEpwQixLQTFKb0IsRUEySnBCLFFBM0pvQixFQTRKcEIsUUE1Sm9CLEVBNkpwQixPQTdKb0IsRUE4SnBCLEtBOUpvQixFQStKcEIsUUEvSm9CLEVBZ0twQixVQWhLb0IsRUFpS3BCLEtBaktvQixFQWtLcEIsTUFsS29CLEVBbUtwQixPQW5Lb0IsRUFvS3BCLFVBcEtvQixFQXFLcEIsTUFyS29CLEVBc0twQixLQXRLb0IsRUF1S3BCLFVBdktvQixFQXdLcEIsUUF4S29CLEVBeUtwQixTQXpLb0IsRUEwS3BCLFVBMUtvQixFQTJLcEIsT0EzS29CLEVBNEtwQixLQTVLb0IsRUE2S3BCLFNBN0tvQixFQThLcEIsWUE5S29CLEVBK0twQixRQS9Lb0IsRUFnTHBCLEtBaExvQixFQWlMcEIsUUFqTG9CLEVBa0xwQixNQWxMb0IsRUFtTHBCLFFBbkxvQixFQW9McEIsYUFwTG9CLEVBcUxwQixRQXJMb0IsRUFzTHBCLFFBdExvQixFQXVMcEIsU0F2TG9CLEVBd0xwQixTQXhMb0IsRUF5THBCLGFBekxvQixFQTBMcEIsYUExTG9CLEVBMkxwQixhQTNMb0IsRUE0THBCLGVBNUxvQixFQTZMcEIsV0E3TG9CLEVBOExwQixRQTlMb0IsRUErTHBCLFFBL0xvQixFQWdNcEIsY0FoTW9CLEVBaU1wQixVQWpNb0IsRUFrTXBCLFdBbE1vQixFQW1NcEIsU0FuTW9CLEVBb01wQixJQXBNb0IsRUFxTXBCLEtBck1vQixFQXNNcEIsSUF0TW9CLEVBdU1wQixNQXZNb0IsRUF3TXBCLFFBeE1vQixFQXlNcEIsTUF6TW9CLEVBME1wQixVQTFNb0IsRUEyTXBCLFFBM01vQixFQTRNcEIsUUE1TW9CLEVBNk1wQixTQTdNb0IsRUE4TXBCLE9BOU1vQixFQStNcEIsY0EvTW9CLEVBZ05wQixRQWhOb0IsRUFpTnBCLFNBak5vQixFQWtOcEIsUUFsTm9CLEVBbU5wQixLQW5Ob0IsRUFvTnBCLFVBcE5vQixFQXFOcEIsWUFyTm9CLEVBc05wQixTQXROb0IsRUF1TnBCLGlCQXZOb0IsRUF3TnBCLFdBeE5vQixFQXlOcEIsWUF6Tm9CLEVBME5wQixRQTFOb0IsRUEyTnBCLFdBM05vQixFQTROcEIsUUE1Tm9CLEVBNk5wQixTQTdOb0IsRUE4TnBCLE1BOU5vQixFQStOcEIsV0EvTm9CLEVBZ09wQixhQWhPb0IsRUFpT3BCLFdBak9vQixFQWtPcEIsVUFsT29CLEVBbU9wQixXQW5Pb0IsRUFvT3BCLFFBcE9vQixFQXFPcEIsV0FyT29CLEVBc09wQixPQXRPb0IsRUF1T3BCLFNBdk9vQixFQXdPcEIsV0F4T29CLEVBeU9wQixRQXpPb0IsRUEwT3BCLE9BMU9vQixFQTJPcEIsT0EzT29CLEVBNE9wQixLQTVPb0IsRUE2T3BCLE1BN09vQixFQThPcEIsTUE5T29CLEVBK09wQixRQS9Pb0IsRUFnUHBCLEtBaFBvQixFQWlQcEIsV0FqUG9CLEVBa1BwQixTQWxQb0IsRUFtUHBCLFdBblBvQixFQW9QcEIsS0FwUG9CLEVBcVBwQixXQXJQb0IsRUFzUHBCLFFBdFBvQixFQXVQcEIsVUF2UG9CLEVBd1BwQixjQXhQb0IsRUF5UHBCLFFBelBvQixFQTBQcEIsUUExUG9CLEVBMlBwQixXQTNQb0IsRUE0UHBCLFNBNVBvQixFQTZQcEIsUUE3UG9CLEVBOFBwQixVQTlQb0IsRUErUHBCLEtBL1BvQixFQWdRcEIsT0FoUW9CLEVBaVFwQixRQWpRb0IsRUFrUXBCLFNBbFFvQixFQW1RcEIsUUFuUW9CLEVBb1FwQixNQXBRb0IsRUFxUXBCLFdBclFvQixFQXNRcEIsS0F0UW9CLEVBdVFwQixLQXZRb0IsRUF3UXBCLEtBeFFvQixFQXlRcEIsUUF6UW9CLEVBMFFwQixRQTFRb0IsRUEyUXBCLFNBM1FvQixFQTRRcEIsTUE1UW9CLEVBNlFwQixVQTdRb0IsRUE4UXBCLFVBOVFvQixFQStRcEIsY0EvUW9CLEVBZ1JwQixPQWhSb0IsRUFpUnBCLE9BalJvQixFQWtScEIsUUFsUm9CLEVBbVJwQixNQW5Sb0IsRUFvUnBCLFVBcFJvQixFQXFScEIsTUFyUm9CLEVBc1JwQixPQXRSb0IsRUF1UnBCLFFBdlJvQixFQXdScEIsS0F4Um9CLEVBeVJwQixTQXpSb0IsRUEwUnBCLFNBMVJvQixFQTJScEIsU0EzUm9CLEVBNFJwQixTQTVSb0IsRUE2UnBCLFVBN1JvQixFQThScEIsVUE5Um9CLEVBK1JwQixPQS9Sb0IsRUFnU3BCLFFBaFNvQixFQWlTcEIsUUFqU29CLEVBa1NwQixRQWxTb0IsRUFtU3BCLFFBblNvQixFQW9TcEIsUUFwU29CLEVBcVNwQixPQXJTb0IsRUFzU3BCLGFBdFNvQixFQXVTcEIsY0F2U29CLEVBd1NwQixlQXhTb0IsRUF5U3BCLFNBelNvQixFQTBTcEIsWUExU29CLEVBMlNwQixLQTNTb0IsRUE0U3BCLFNBNVNvQixFQTZTcEIsU0E3U29CLEVBOFNwQixTQTlTb0IsRUErU3BCLE9BL1NvQixFQWdUcEIsS0FoVG9CLEVBaVRwQixLQWpUb0IsRUFrVHBCLE1BbFRvQixFQW1UcEIsTUFuVG9CLEVBb1RwQixXQXBUb0IsRUFxVHBCLGVBclRvQixFQXNUcEIsZUF0VG9CLEVBdVRwQixpQkF2VG9CLEVBd1RwQixpQkF4VG9CLEVBeVRwQixJQXpUb0IsRUEwVHBCLFVBMVRvQixFQTJUcEIsYUEzVG9CLEVBNFRwQixlQTVUb0IsRUE2VHBCLFNBN1RvQixFQThUcEIsTUE5VG9CLEVBK1RwQixTQS9Ub0IsRUFnVXBCLE1BaFVvQixFQWlVcEIsS0FqVW9CLEVBa1VwQixLQWxVb0IsRUFtVXBCLEtBblVvQixFQW9VcEIsS0FwVW9CLEVBcVVwQixPQXJVb0IsRUFzVXBCLFFBdFVvQixFQXVVcEIsUUF2VW9CLEVBd1VwQixVQXhVb0IsRUF5VXBCLFdBelVvQixFQTBVcEIsS0ExVW9CLEVBMlVwQixNQTNVb0IsRUE0VXBCLE9BNVVvQixFQTZVcEIsVUE3VW9CLEVBOFVwQixRQTlVb0IsRUErVXBCLE9BL1VvQixFQWdWcEIsU0FoVm9CLEVBaVZwQixVQWpWb0IsRUFrVnBCLFVBbFZvQixFQW1WcEIsVUFuVm9CLEVBb1ZwQixRQXBWb0IsRUFxVnBCLFNBclZvQixFQXNWcEIsTUF0Vm9CLEVBdVZwQixPQXZWb0IsRUF3VnBCLE1BeFZvQixFQXlWcEIsVUF6Vm9CLEVBMFZwQixPQTFWb0IsRUEyVnBCLE1BM1ZvQixFQTRWcEIsTUE1Vm9CLEVBNlZwQixTQTdWb0IsRUE4VnBCLE9BOVZvQixFQStWcEIsTUEvVm9CLEVBZ1dwQixNQWhXb0IsQ0FBdEI7QUFtV0EsSUFBTU4scUJBQXFCLEdBQUcsQ0FDNUIsS0FENEIsRUFFNUIsY0FGNEIsRUFHNUIsYUFINEIsRUFJNUIsT0FKNEIsRUFLNUIsWUFMNEIsRUFNNUIsU0FONEIsRUFPNUIsYUFQNEIsRUFRNUIsUUFSNEIsRUFTNUIsS0FUNEIsRUFVNUIsUUFWNEIsRUFXNUIsV0FYNEIsRUFZNUIsYUFaNEIsRUFhNUIsTUFiNEIsRUFjNUIsVUFkNEIsRUFlNUIsUUFmNEIsRUFnQjVCLGFBaEI0QixFQWlCNUIsUUFqQjRCLEVBa0I1QixPQWxCNEIsRUFtQjVCLE1BbkI0QixFQW9CNUIsUUFwQjRCLEVBcUI1QixVQXJCNEIsRUFzQjVCLFFBdEI0QixFQXVCNUIsb0JBdkI0QixFQXdCNUIsWUF4QjRCLEVBeUI1QixLQXpCNEIsRUEwQjVCLFlBMUI0QixFQTJCNUIsUUEzQjRCLEVBNEI1QixRQTVCNEIsRUE2QjVCLE9BN0I0QixDQUE5QjtBQWdDQSxJQUFNRSw2QkFBNkIsR0FBRyxDQUFDLFdBQUQsRUFBYyxlQUFkLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELFdBQWpELENBQXRDO0FBRUEsSUFBTUUsb0JBQW9CLEdBQUcsQ0FDM0IsS0FEMkIsRUFFM0IsYUFGMkIsRUFHM0IsTUFIMkIsRUFJM0IsS0FKMkIsRUFLM0IsSUFMMkIsRUFNM0IsYUFOMkIsRUFPM0IsTUFQMkIsRUFRM0IsS0FSMkIsRUFTM0I7QUFDQSxNQVYyQixFQVczQixZQVgyQixFQVkzQixXQVoyQixFQWEzQixpQkFiMkIsRUFjM0IsWUFkMkIsRUFlM0Isa0JBZjJCLEVBZ0IzQixXQWhCMkIsRUFpQjNCLGlCQWpCMkIsRUFrQjNCLFlBbEIyQixFQW1CM0IsY0FuQjJCLENBQTdCOztJQXNCcUIwRixjOzs7Ozs7Ozs7Ozs7O2dDQUNQO0FBQ1YsYUFBTyxJQUFJeEcsdURBQUosQ0FBYztBQUNuQmdCLHFCQUFhLEVBQWJBLGFBRG1CO0FBRW5CTiw2QkFBcUIsRUFBckJBLHFCQUZtQjtBQUduQkksNEJBQW9CLEVBQXBCQSxvQkFIbUI7QUFJbkJGLHFDQUE2QixFQUE3QkEsNkJBSm1CO0FBS25CUSxtQkFBVyxFQUFFLFNBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsQ0FMTTtBQU1uQkUsa0JBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxNQUFOLENBTk87QUFPbkJFLG1CQUFXLEVBQUUsQ0FBQyxHQUFELEVBQU0sS0FBTixDQVBNO0FBUW5CRSwrQkFBdUIsRUFBRSxDQUFDLEdBQUQsQ0FSTjtBQVNuQkUsNkJBQXFCLEVBQUUsQ0FBQyxHQUFELENBVEo7QUFVbkJwQix3QkFBZ0IsRUFBRSxDQUFDLElBQUQsQ0FWQztBQVduQlUsd0JBQWdCLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FYQztBQVluQmIsaUJBQVMsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQjtBQVpRLE9BQWQsQ0FBUDtBQWNEOzs7a0NBRWFwRixLLEVBQU87QUFDbkIsVUFBSStLLHlEQUFLLENBQUMvSyxLQUFELENBQUwsSUFBZ0JnTCx3REFBSSxDQUFDLEtBQUtwTCxxQkFBTixDQUF4QixFQUFzRDtBQUNwRCxlQUFPO0FBQUVhLGNBQUksRUFBRUMsd0RBQVUsQ0FBQ1csUUFBbkI7QUFBNkJRLGVBQUssRUFBRTdCLEtBQUssQ0FBQzZCO0FBQTFDLFNBQVA7QUFDRDs7QUFDRCxhQUFPN0IsS0FBUDtBQUNEOzs7O0VBdkJ5Q2IsdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoYTVDO0FBQ0E7QUFFQSxJQUFNNEcsYUFBYSxHQUFHLENBQ3BCLE9BRG9CLEVBRXBCLFVBRm9CLEVBR3BCLFFBSG9CLEVBSXBCLFFBSm9CLEVBS3BCLEtBTG9CLEVBTXBCLE9BTm9CLEVBT3BCLE9BUG9CLEVBUXBCLFdBUm9CLEVBU3BCLEtBVG9CLEVBVXBCLE1BVm9CLEVBV3BCLE9BWG9CLEVBWXBCLFFBWm9CLEVBYXBCLFNBYm9CLEVBY3BCLFNBZG9CLEVBZXBCLEtBZm9CLEVBZ0JwQixLQWhCb0IsRUFpQnBCLE9BakJvQixFQWtCcEIsSUFsQm9CLEVBbUJwQixLQW5Cb0IsRUFvQnBCLFdBcEJvQixFQXFCcEIsWUFyQm9CLEVBc0JwQixZQXRCb0IsRUF1QnBCLElBdkJvQixFQXdCcEIsUUF4Qm9CLEVBeUJwQixXQXpCb0IsRUEwQnBCLGVBMUJvQixFQTJCcEIsVUEzQm9CLEVBNEJwQixRQTVCb0IsRUE2QnBCLE9BN0JvQixFQThCcEIsU0E5Qm9CLEVBK0JwQixRQS9Cb0IsRUFnQ3BCLFFBaENvQixFQWlDcEIsS0FqQ29CLEVBa0NwQixTQWxDb0IsRUFtQ3BCLE1BbkNvQixFQW9DcEIsSUFwQ29CLEVBcUNwQixPQXJDb0IsRUFzQ3BCLE1BdENvQixFQXVDcEIsUUF2Q29CLEVBd0NwQixTQXhDb0IsRUF5Q3BCLFVBekNvQixFQTBDcEIsTUExQ29CLEVBMkNwQixNQTNDb0IsRUE0Q3BCLFNBNUNvQixFQTZDcEIsT0E3Q29CLEVBOENwQixNQTlDb0IsRUErQ3BCLFdBL0NvQixFQWdEcEIsaUJBaERvQixFQWlEcEIsT0FqRG9CLEVBa0RwQixZQWxEb0IsRUFtRHBCLE9BbkRvQixFQW9EcEIsT0FwRG9CLEVBcURwQixTQXJEb0IsRUFzRHBCLFVBdERvQixFQXVEcEIsU0F2RG9CLEVBd0RwQixXQXhEb0IsRUF5RHBCLFFBekRvQixFQTBEcEIsU0ExRG9CLEVBMkRwQixTQTNEb0IsRUE0RHBCLFVBNURvQixFQTZEcEIsUUE3RG9CLEVBOERwQixXQTlEb0IsRUErRHBCLGNBL0RvQixFQWdFcEIsZUFoRW9CLEVBaUVwQixVQWpFb0IsRUFrRXBCLFlBbEVvQixFQW1FcEIsWUFuRW9CLEVBb0VwQixhQXBFb0IsRUFxRXBCLFNBckVvQixFQXNFcEIsVUF0RW9CLEVBdUVwQixZQXZFb0IsRUF3RXBCLE1BeEVvQixFQXlFcEIsTUF6RW9CLEVBMEVwQixRQTFFb0IsRUEyRXBCLE9BM0VvQixFQTRFcEIsS0E1RW9CLEVBNkVwQixNQTdFb0IsRUE4RXBCLFNBOUVvQixFQStFcEIsaUJBL0VvQixFQWdGcEIsY0FoRm9CLEVBaUZwQixjQWpGb0IsRUFrRnBCLGdCQWxGb0IsRUFtRnBCLGNBbkZvQixFQW9GcEIsbUJBcEZvQixFQXFGcEIsY0FyRm9CLEVBc0ZwQixRQXRGb0IsRUF1RnBCLE9BdkZvQixFQXdGcEIsTUF4Rm9CLEVBeUZwQixVQXpGb0IsRUEwRnBCLEtBMUZvQixFQTJGcEIsWUEzRm9CLEVBNEZwQixLQTVGb0IsRUE2RnBCLFNBN0ZvQixFQThGcEIsU0E5Rm9CLEVBK0ZwQixTQS9Gb0IsRUFnR3BCLFVBaEdvQixFQWlHcEIsWUFqR29CLEVBa0dwQixVQWxHb0IsRUFtR3BCLFNBbkdvQixFQW9HcEIsUUFwR29CLEVBcUdwQixXQXJHb0IsRUFzR3BCLFlBdEdvQixFQXVHcEIsU0F2R29CLEVBd0dwQixNQXhHb0IsRUF5R3BCLFFBekdvQixFQTBHcEIsWUExR29CLEVBMkdwQixTQTNHb0IsRUE0R3BCLFNBNUdvQixFQTZHcEIsVUE3R29CLEVBOEdwQixJQTlHb0IsRUErR3BCLFVBL0dvQixFQWdIcEIsUUFoSG9CLEVBaUhwQixRQWpIb0IsRUFrSHBCLE1BbEhvQixFQW1IcEIsTUFuSG9CLEVBb0hwQixNQXBIb0IsRUFxSHBCLFFBckhvQixFQXNIcEIsVUF0SG9CLEVBdUhwQixXQXZIb0IsRUF3SHBCLEtBeEhvQixFQXlIcEIsTUF6SG9CLEVBMEhwQixRQTFIb0IsRUEySHBCLE9BM0hvQixFQTRIcEIsUUE1SG9CLEVBNkhwQixTQTdIb0IsRUE4SHBCLFdBOUhvQixFQStIcEIsV0EvSG9CLEVBZ0lwQixTQWhJb0IsRUFpSXBCLFFBaklvQixFQWtJcEIsU0FsSW9CLEVBbUlwQixZQW5Jb0IsRUFvSXBCLFdBcElvQixFQXFJcEIsVUFySW9CLEVBc0lwQixTQXRJb0IsRUF1SXBCLE9BdklvQixFQXdJcEIsUUF4SW9CLEVBeUlwQixPQXpJb0IsRUEwSXBCLFFBMUlvQixFQTJJcEIsT0EzSW9CLEVBNElwQixPQTVJb0IsRUE2SXBCLFdBN0lvQixFQThJcEIsS0E5SW9CLEVBK0lwQixPQS9Jb0IsRUFnSnBCLFNBaEpvQixFQWlKcEIsU0FqSm9CLEVBa0pwQixRQWxKb0IsRUFtSnBCLE1BbkpvQixFQW9KcEIsTUFwSm9CLEVBcUpwQixVQXJKb0IsRUFzSnBCLFdBdEpvQixFQXVKcEIsV0F2Sm9CLEVBd0pwQixRQXhKb0IsRUF5SnBCLE9BekpvQixFQTBKcEIsU0ExSm9CLEVBMkpwQixVQTNKb0IsRUE0SnBCLE9BNUpvQixFQTZKcEIsVUE3Sm9CLEVBOEpwQixRQTlKb0IsRUErSnBCLFNBL0pvQixFQWdLcEIsUUFoS29CLEVBaUtwQixRQWpLb0IsRUFrS3BCLE1BbEtvQixFQW1LcEIsTUFuS29CLEVBb0twQixVQXBLb0IsRUFxS3BCLElBcktvQixFQXNLcEIsT0F0S29CLEVBdUtwQixXQXZLb0IsRUF3S3BCLFdBeEtvQixFQXlLcEIsVUF6S29CLEVBMEtwQixRQTFLb0IsRUEyS3BCLElBM0tvQixFQTRLcEIsU0E1S29CLEVBNktwQixXQTdLb0IsRUE4S3BCLFdBOUtvQixFQStLcEIsT0EvS29CLEVBZ0xwQixTQWhMb0IsRUFpTHBCLFNBakxvQixFQWtMcEIsVUFsTG9CLEVBbUxwQixXQW5Mb0IsRUFvTHBCLFFBcExvQixFQXFMcEIsT0FyTG9CLEVBc0xwQixPQXRMb0IsRUF1THBCLE9BdkxvQixFQXdMcEIsYUF4TG9CLEVBeUxwQixRQXpMb0IsRUEwTHBCLFNBMUxvQixFQTJMcEIsS0EzTG9CLEVBNExwQixTQTVMb0IsRUE2THBCLFdBN0xvQixFQThMcEIsVUE5TG9CLEVBK0xwQixNQS9Mb0IsRUFnTXBCLFNBaE1vQixFQWlNcEIsSUFqTW9CLEVBa01wQixRQWxNb0IsRUFtTXBCLFdBbk1vQixFQW9NcEIsTUFwTW9CLEVBcU1wQixLQXJNb0IsRUFzTXBCLE9BdE1vQixFQXVNcEIsVUF2TW9CLEVBd01wQixPQXhNb0IsRUF5TXBCLE1Bek1vQixFQTBNcEIsU0ExTW9CLEVBMk1wQixTQTNNb0IsRUE0TXBCLFdBNU1vQixFQTZNcEIsT0E3TW9CLEVBOE1wQixNQTlNb0IsRUErTXBCLE9BL01vQixFQWdOcEIsTUFoTm9CLEVBaU5wQixPQWpOb0IsRUFrTnBCLFFBbE5vQixFQW1OcEIsTUFuTm9CLEVBb05wQixPQXBOb0IsRUFxTnBCLFdBck5vQixFQXNOcEIsZ0JBdE5vQixFQXVOcEIsVUF2Tm9CLEVBd05wQixNQXhOb0IsRUF5TnBCLFFBek5vQixFQTBOcEIsUUExTm9CLEVBMk5wQixTQTNOb0IsRUE0TnBCLE9BNU5vQixFQTZOcEIsY0E3Tm9CLEVBOE5wQixVQTlOb0IsRUErTnBCLFFBL05vQixFQWdPcEIsUUFoT29CLEVBaU9wQixVQWpPb0IsRUFrT3BCLE1BbE9vQixFQW1PcEIsT0FuT29CLEVBb09wQixNQXBPb0IsRUFxT3BCLE1Bck9vQixFQXNPcEIsT0F0T29CLEVBdU9wQixVQXZPb0IsRUF3T3BCLFNBeE9vQixFQXlPcEIsT0F6T29CLEVBME9wQixLQTFPb0IsRUEyT3BCLE1BM09vQixFQTRPcEIsS0E1T29CLEVBNk9wQixLQTdPb0IsRUE4T3BCLE1BOU9vQixFQStPcEIsTUEvT29CLEVBZ1BwQixJQWhQb0IsRUFpUHBCLE1BalBvQixFQWtQcEIsV0FsUG9CLEVBbVBwQixZQW5Qb0IsRUFvUHBCLEtBcFBvQixFQXFQcEIsU0FyUG9CLEVBc1BwQixRQXRQb0IsRUF1UHBCLFNBdlBvQixFQXdQcEIsUUF4UG9CLEVBeVBwQixNQXpQb0IsRUEwUHBCLFFBMVBvQixFQTJQcEIsT0EzUG9CLEVBNFBwQixTQTVQb0IsRUE2UHBCLFFBN1BvQixFQThQcEIsSUE5UG9CLEVBK1BwQixLQS9Qb0IsRUFnUXBCLFFBaFFvQixFQWlRcEIsTUFqUW9CLEVBa1FwQixLQWxRb0IsRUFtUXBCLElBblFvQixFQW9RcEIsTUFwUW9CLEVBcVFwQixVQXJRb0IsRUFzUXBCLFFBdFFvQixFQXVRcEIsU0F2UW9CLEVBd1FwQixJQXhRb0IsRUF5UXBCLE9BelFvQixFQTBRcEIsWUExUW9CLEVBMlFwQixRQTNRb0IsRUE0UXBCLEtBNVFvQixFQTZRcEIsT0E3UW9CLEVBOFFwQixNQTlRb0IsRUErUXBCLFVBL1FvQixFQWdScEIsU0FoUm9CLEVBaVJwQixZQWpSb0IsRUFrUnBCLE9BbFJvQixFQW1ScEIsT0FuUm9CLEVBb1JwQixVQXBSb0IsRUFxUnBCLFFBclJvQixFQXNScEIsU0F0Um9CLEVBdVJwQixXQXZSb0IsRUF3UnBCLFNBeFJvQixFQXlScEIsVUF6Um9CLEVBMFJwQixTQTFSb0IsRUEyUnBCLE9BM1JvQixFQTRScEIsUUE1Um9CLEVBNlJwQixVQTdSb0IsRUE4UnBCLFdBOVJvQixFQStScEIsV0EvUm9CLEVBZ1NwQixTQWhTb0IsRUFpU3BCLFVBalNvQixFQWtTcEIsVUFsU29CLEVBbVNwQixTQW5Tb0IsRUFvU3BCLE9BcFNvQixFQXFTcEIsWUFyU29CLEVBc1NwQixZQXRTb0IsRUF1U3BCLFdBdlNvQixFQXdTcEIsWUF4U29CLEVBeVNwQixTQXpTb0IsRUEwU3BCLGFBMVNvQixFQTJTcEIsT0EzU29CLEVBNFNwQixPQTVTb0IsRUE2U3BCLE1BN1NvQixFQThTcEIsTUE5U29CLEVBK1NwQixVQS9Tb0IsRUFnVHBCLFNBaFRvQixFQWlUcEIsV0FqVG9CLEVBa1RwQixLQWxUb0IsRUFtVHBCLFlBblRvQixFQW9UcEIsYUFwVG9CLEVBcVRwQixTQXJUb0IsRUFzVHBCLFNBdFRvQixFQXVUcEIsVUF2VG9CLEVBd1RwQixTQXhUb0IsRUF5VHBCLFFBelRvQixFQTBUcEIsWUExVG9CLEVBMlRwQixTQTNUb0IsRUE0VHBCLFNBNVRvQixFQTZUcEIsT0E3VG9CLEVBOFRwQixTQTlUb0IsRUErVHBCLFVBL1RvQixFQWdVcEIsV0FoVW9CLEVBaVVwQixTQWpVb0IsRUFrVXBCLFFBbFVvQixFQW1VcEIsT0FuVW9CLEVBb1VwQixNQXBVb0IsRUFxVXBCLFVBclVvQixFQXNVcEIsUUF0VW9CLEVBdVVwQixTQXZVb0IsRUF3VXBCLFVBeFVvQixFQXlVcEIsS0F6VW9CLEVBMFVwQixNQTFVb0IsRUEyVXBCLE1BM1VvQixFQTRVcEIsV0E1VW9CLEVBNlVwQixRQTdVb0IsRUE4VXBCLFNBOVVvQixFQStVcEIsUUEvVW9CLEVBZ1ZwQixRQWhWb0IsRUFpVnBCLFFBalZvQixFQWtWcEIsVUFsVm9CLEVBbVZwQixRQW5Wb0IsRUFvVnBCLFVBcFZvQixFQXFWcEIsV0FyVm9CLEVBc1ZwQixjQXRWb0IsRUF1VnBCLFFBdlZvQixFQXdWcEIsU0F4Vm9CLEVBeVZwQixjQXpWb0IsRUEwVnBCLEtBMVZvQixFQTJWcEIsT0EzVm9CLEVBNFZwQixNQTVWb0IsRUE2VnBCLE9BN1ZvQixFQThWcEIsTUE5Vm9CLEVBK1ZwQixTQS9Wb0IsRUFnV3BCLFFBaFdvQixFQWlXcEIsTUFqV29CLEVBa1dwQixVQWxXb0IsRUFtV3BCLFVBbldvQixFQW9XcEIsTUFwV29CLEVBcVdwQixLQXJXb0IsRUFzV3BCLFFBdFdvQixFQXVXcEIsWUF2V29CLEVBd1dwQixPQXhXb0IsRUF5V3BCLFdBeldvQixFQTBXcEIsWUExV29CLEVBMldwQixPQTNXb0IsRUE0V3BCLFFBNVdvQixFQTZXcEIsU0E3V29CLEVBOFdwQixRQTlXb0IsRUErV3BCLFFBL1dvQixFQWdYcEIsT0FoWG9CLEVBaVhwQixjQWpYb0IsRUFrWHBCLFdBbFhvQixFQW1YcEIsU0FuWG9CLEVBb1hwQixXQXBYb0IsRUFxWHBCLE9BclhvQixFQXNYcEIsUUF0WG9CLEVBdVhwQixPQXZYb0IsRUF3WHBCLFFBeFhvQixFQXlYcEIsYUF6WG9CLEVBMFhwQixZQTFYb0IsRUEyWHBCLE1BM1hvQixFQTRYcEIsVUE1WG9CLEVBNlhwQixXQTdYb0IsRUE4WHBCLE1BOVhvQixFQStYcEIsTUEvWG9CLEVBZ1lwQixNQWhZb0IsRUFpWXBCLE1BallvQixFQWtZcEIsV0FsWW9CLEVBbVlwQixJQW5Zb0IsRUFvWXBCLFVBcFlvQixFQXFZcEIsYUFyWW9CLEVBc1lwQixXQXRZb0IsRUF1WXBCLE9BdllvQixFQXdZcEIsU0F4WW9CLEVBeVlwQixNQXpZb0IsRUEwWXBCLE1BMVlvQixFQTJZcEIsVUEzWW9CLEVBNFlwQixTQTVZb0IsRUE2WXBCLE1BN1lvQixFQThZcEIsT0E5WW9CLEVBK1lwQixTQS9Zb0IsRUFnWnBCLFdBaFpvQixFQWlacEIsYUFqWm9CLEVBa1pwQixhQWxab0IsRUFtWnBCLE9BblpvQixFQW9acEIsUUFwWm9CLEVBcVpwQixTQXJab0IsRUFzWnBCLFVBdFpvQixFQXVacEIsVUF2Wm9CLEVBd1pwQixPQXhab0IsRUF5WnBCLFFBelpvQixFQTBacEIsTUExWm9CLEVBMlpwQixPQTNab0IsRUE0WnBCLFFBNVpvQixFQTZacEIsT0E3Wm9CLEVBOFpwQixVQTlab0IsRUErWnBCLFdBL1pvQixFQWdhcEIsT0FoYW9CLEVBaWFwQixRQWphb0IsRUFrYXBCLFNBbGFvQixFQW1hcEIsVUFuYW9CLEVBb2FwQixTQXBhb0IsRUFxYXBCLFNBcmFvQixFQXNhcEIsU0F0YW9CLEVBdWFwQixNQXZhb0IsRUF3YXBCLE9BeGFvQixFQXlhcEIsVUF6YW9CLEVBMGFwQixNQTFhb0IsRUEyYXBCLE9BM2FvQixFQTRhcEIsWUE1YW9CLEVBNmFwQixRQTdhb0IsRUE4YXBCLE1BOWFvQixFQSthcEIsUUEvYW9CLEVBZ2JwQixTQWhib0IsRUFpYnBCLE1BamJvQixFQWticEIsU0FsYm9CLEVBbWJwQixPQW5ib0IsRUFvYnBCLEtBcGJvQixFQXFicEIsZUFyYm9CLEVBc2JwQixXQXRib0IsRUF1YnBCLFlBdmJvQixFQXdicEIsV0F4Ym9CLEVBeWJwQixXQXpib0IsRUEwYnBCLGVBMWJvQixFQTJicEIsVUEzYm9CLEVBNGJwQixPQTVib0IsRUE2YnBCLFNBN2JvQixFQThicEIsY0E5Ym9CLEVBK2JwQixVQS9ib0IsRUFnY3BCLE1BaGNvQixFQWljcEIsS0FqY29CLEVBa2NwQixNQWxjb0IsQ0FBdEI7QUFxY0EsSUFBTU4scUJBQXFCLEdBQUcsQ0FDNUIsS0FENEIsRUFFNUIsT0FGNEIsRUFHNUIsY0FINEIsRUFJNUIsYUFKNEIsRUFLNUIsTUFMNEIsRUFNNUIsYUFONEIsRUFPNUIsS0FQNEIsRUFRNUIsUUFSNEIsRUFTNUIsYUFUNEIsRUFVNUIsTUFWNEIsRUFXNUIsVUFYNEIsRUFZNUIsUUFaNEIsRUFhNUIsYUFiNEIsRUFjNUIsUUFkNEIsRUFlNUIsT0FmNEIsRUFnQjVCLFVBaEI0QixFQWlCNUIsUUFqQjRCLEVBa0I1QixvQkFsQjRCLEVBbUI1QixZQW5CNEIsRUFvQjVCLEtBcEI0QixFQXFCNUIsUUFyQjRCLEVBc0I1QixRQXRCNEIsRUF1QjVCLE9BdkI0QixDQUE5QjtBQTBCQSxJQUFNRSw2QkFBNkIsR0FBRyxDQUFDLFdBQUQsRUFBYyxlQUFkLEVBQStCLE9BQS9CLEVBQXdDLFdBQXhDLENBQXRDO0FBRUEsSUFBTUUsb0JBQW9CLEdBQUcsQ0FDM0IsS0FEMkIsRUFFM0IsTUFGMkIsRUFHM0IsSUFIMkIsRUFJM0IsTUFKMkIsRUFLM0I7QUFDQSxNQU4yQixFQU8zQixZQVAyQixFQVEzQixXQVIyQixFQVMzQixpQkFUMkIsRUFVM0IsWUFWMkIsRUFXM0Isa0JBWDJCLEVBWTNCLFdBWjJCLEVBYTNCLGlCQWIyQixFQWMzQixZQWQyQixFQWUzQixjQWYyQixDQUE3Qjs7SUFrQnFCMkYsbUI7Ozs7Ozs7Ozs7Ozs7Z0NBQ1A7QUFDVixhQUFPLElBQUl6Ryx1REFBSixDQUFjO0FBQ25CZ0IscUJBQWEsRUFBYkEsYUFEbUI7QUFFbkJOLDZCQUFxQixFQUFyQkEscUJBRm1CO0FBR25CSSw0QkFBb0IsRUFBcEJBLG9CQUhtQjtBQUluQkYscUNBQTZCLEVBQTdCQSw2QkFKbUI7QUFLbkJRLG1CQUFXLEVBQUUsU0FBTyxJQUFQLEVBQWEsTUFBYixFQUFxQixNQUFyQixFQUE2QixJQUE3QixDQUxNO0FBTW5CRSxrQkFBVSxFQUFFLENBQUMsR0FBRCxFQUFNLE1BQU4sQ0FOTztBQU9uQkUsbUJBQVcsRUFBRSxDQUFDLEdBQUQsRUFBTSxLQUFOLENBUE07QUFRbkJFLCtCQUF1QixFQUFFLENBQUMsR0FBRCxDQVJOO0FBU25CRSw2QkFBcUIsRUFBRSxDQUFDLEdBQUQsQ0FUSjtBQVVuQnBCLHdCQUFnQixFQUFFLENBQUMsSUFBRCxDQVZDO0FBV25CSCxpQkFBUyxFQUFFLENBQ1QsSUFEUyxFQUVULElBRlMsRUFHVCxJQUhTLEVBSVQsS0FKUyxFQUtULElBTFMsRUFNVCxJQU5TLEVBT1QsS0FQUyxFQVFULElBUlMsRUFTVCxLQVRTLEVBVVQsSUFWUyxFQVdULE1BWFMsRUFZVCxLQVpTLEVBYVQsSUFiUyxFQWNULEtBZFMsRUFlVCxJQWZTLEVBZ0JULElBaEJTO0FBWFEsT0FBZCxDQUFQO0FBOEJEOzs7O0VBaEM4Q2pHLHVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdGZqRDtBQUNBO0FBRUEsSUFBTTRHLGFBQWEsR0FBRyxDQUNwQixRQURvQixFQUVwQixRQUZvQixFQUdwQixnQkFIb0IsRUFJcEIsU0FKb0IsRUFLcEIsT0FMb0IsRUFNcEIsSUFOb0IsRUFPcEIsS0FQb0IsRUFRcEIsZUFSb0IsRUFTcEIsUUFUb0IsRUFVcEIsUUFWb0IsRUFXcEIsY0FYb0IsRUFZcEIsTUFab0IsRUFhcEIsVUFib0IsRUFjcEIsT0Fkb0IsRUFlcEIsTUFmb0IsRUFnQnBCLE9BaEJvQixFQWlCcEIsU0FqQm9CLEVBa0JwQixRQWxCb0IsRUFtQnBCLFlBbkJvQixFQW9CcEIsUUFwQm9CLEVBcUJwQixhQXJCb0IsRUFzQnBCLGNBdEJvQixFQXVCcEIsY0F2Qm9CLEVBd0JwQixtQkF4Qm9CLEVBeUJwQixjQXpCb0IsRUEwQnBCLGlCQTFCb0IsRUEyQnBCLFNBM0JvQixFQTRCcEIsWUE1Qm9CLEVBNkJwQixTQTdCb0IsRUE4QnBCLFFBOUJvQixFQStCcEIsT0EvQm9CLEVBZ0NwQixVQWhDb0IsRUFpQ3BCLE1BakNvQixFQWtDcEIsU0FsQ29CLEVBbUNwQixVQW5Db0IsRUFvQ3BCLElBcENvQixFQXFDcEIsTUFyQ29CLEVBc0NwQixhQXRDb0IsRUF1Q3BCLFFBdkNvQixFQXdDcEIsUUF4Q29CLEVBeUNwQixTQXpDb0IsRUEwQ3BCLFlBMUNvQixFQTJDcEIsS0EzQ29CLEVBNENwQixVQTVDb0IsRUE2Q3BCLE9BN0NvQixFQThDcEIsS0E5Q29CLEVBK0NwQixTQS9Db0IsRUFnRHBCLFFBaERvQixFQWlEcEIsTUFqRG9CLEVBa0RwQixlQWxEb0IsRUFtRHBCLGVBbkRvQixFQW9EcEIsT0FwRG9CLEVBcURwQixNQXJEb0IsRUFzRHBCLFVBdERvQixFQXVEcEIsUUF2RG9CLEVBd0RwQixPQXhEb0IsRUF5RHBCLFdBekRvQixFQTBEcEIsTUExRG9CLEVBMkRwQixTQTNEb0IsRUE0RHBCLFdBNURvQixFQTZEcEIsZ0JBN0RvQixFQThEcEIsS0E5RG9CLEVBK0RwQixNQS9Eb0IsRUFnRXBCLEtBaEVvQixFQWlFcEIsTUFqRW9CLEVBa0VwQixPQWxFb0IsRUFtRXBCLFVBbkVvQixFQW9FcEIsVUFwRW9CLEVBcUVwQixTQXJFb0IsRUFzRXBCLFNBdEVvQixFQXVFcEIsS0F2RW9CLEVBd0VwQixPQXhFb0IsRUF5RXBCLEtBekVvQixFQTBFcEIsU0ExRW9CLEVBMkVwQixRQTNFb0IsRUE0RXBCLEtBNUVvQixFQTZFcEIsSUE3RW9CLEVBOEVwQixNQTlFb0IsRUErRXBCLE1BL0VvQixFQWdGcEIsT0FoRm9CLEVBaUZwQixVQWpGb0IsRUFrRnBCLFVBbEZvQixFQW1GcEIsV0FuRm9CLEVBb0ZwQixTQXBGb0IsRUFxRnBCLGFBckZvQixFQXNGcEIsU0F0Rm9CLEVBdUZwQixTQXZGb0IsRUF3RnBCLEtBeEZvQixFQXlGcEIsV0F6Rm9CLEVBMEZwQixTQTFGb0IsRUEyRnBCLFlBM0ZvQixFQTRGcEIsV0E1Rm9CLEVBNkZwQixRQTdGb0IsRUE4RnBCLFNBOUZvQixFQStGcEIsY0EvRm9CLEVBZ0dwQixTQWhHb0IsRUFpR3BCLFNBakdvQixFQWtHcEIsUUFsR29CLEVBbUdwQixPQW5Hb0IsRUFvR3BCLEtBcEdvQixFQXFHcEIsTUFyR29CLEVBc0dwQixTQXRHb0IsRUF1R3BCLFNBdkdvQixFQXdHcEIsTUF4R29CLEVBeUdwQixXQXpHb0IsRUEwR3BCLElBMUdvQixFQTJHcEIsS0EzR29CLEVBNEdwQixVQTVHb0IsRUE2R3BCLE1BN0dvQixFQThHcEIsaUJBOUdvQixFQStHcEIsUUEvR29CLEVBZ0hwQixNQWhIb0IsRUFpSHBCLE9BakhvQixFQWtIcEIsU0FsSG9CLEVBbUhwQixRQW5Ib0IsRUFvSHBCLE1BcEhvQixFQXFIcEIsTUFySG9CLEVBc0hwQixTQXRIb0IsRUF1SHBCLFdBdkhvQixFQXdIcEIsU0F4SG9CLEVBeUhwQixVQXpIb0IsRUEwSHBCLGFBMUhvQixFQTJIcEIsTUEzSG9CLEVBNEhwQixRQTVIb0IsRUE2SHBCLFdBN0hvQixFQThIcEIsWUE5SG9CLEVBK0hwQixNQS9Ib0IsRUFnSXBCLE1BaElvQixFQWlJcEIsV0FqSW9CLEVBa0lwQixPQWxJb0IsRUFtSXBCLE1BbklvQixFQW9JcEIsTUFwSW9CLEVBcUlwQixTQXJJb0IsRUFzSXBCLEtBdElvQixFQXVJcEIsZUF2SW9CLEVBd0lwQixnQkF4SW9CLEVBeUlwQixjQXpJb0IsRUEwSXBCLFlBMUlvQixFQTJJcEIsYUEzSW9CLEVBNElwQixVQTVJb0IsRUE2SXBCLFFBN0lvQixFQThJcEIsY0E5SW9CLEVBK0lwQixZQS9Jb0IsRUFnSnBCLGtCQWhKb0IsRUFpSnBCLGNBakpvQixFQWtKcEIsU0FsSm9CLEVBbUpwQixjQW5Kb0IsRUFvSnBCLFNBcEpvQixFQXFKcEIsWUFySm9CLEVBc0pwQixZQXRKb0IsRUF1SnBCLGlCQXZKb0IsRUF3SnBCLFVBeEpvQixFQXlKcEIsWUF6Sm9CLEVBMEpwQixVQTFKb0IsRUEySnBCLFFBM0pvQixFQTRKcEIsWUE1Sm9CLEVBNkpwQixVQTdKb0IsRUE4SnBCLFFBOUpvQixFQStKcEIsVUEvSm9CLEVBZ0twQixzQkFoS29CLEVBaUtwQixLQWpLb0IsRUFrS3BCLGVBbEtvQixFQW1LcEIsZ0JBbktvQixFQW9LcEIsZUFwS29CLEVBcUtwQixtQkFyS29CLEVBc0twQixNQXRLb0IsRUF1S3BCLGNBdktvQixFQXdLcEIsT0F4S29CLEVBeUtwQixVQXpLb0IsRUEwS3BCLFlBMUtvQixFQTJLcEIsYUEzS29CLEVBNEtwQixZQTVLb0IsRUE2S3BCLFdBN0tvQixFQThLcEIsYUE5S29CLEVBK0twQixVQS9Lb0IsRUFnTHBCLFdBaExvQixFQWlMcEIsUUFqTG9CLEVBa0xwQixjQWxMb0IsRUFtTHBCLFlBbkxvQixFQW9McEIsWUFwTG9CLEVBcUxwQixRQXJMb0IsRUFzTHBCLFVBdExvQixFQXVMcEIsTUF2TG9CLEVBd0xwQixrQkF4TG9CLEVBeUxwQixjQXpMb0IsRUEwTHBCLE1BMUxvQixFQTJMcEIsTUEzTG9CLEVBNExwQixVQTVMb0IsRUE2THBCLHNCQTdMb0IsRUE4THBCLFVBOUxvQixFQStMcEIsUUEvTG9CLEVBZ01wQixTQWhNb0IsRUFpTXBCLFdBak1vQixFQWtNcEIsUUFsTW9CLEVBbU1wQixjQW5Nb0IsRUFvTXBCLFNBcE1vQixFQXFNcEIsS0FyTW9CLEVBc01wQixZQXRNb0IsRUF1TXBCLFlBdk1vQixFQXdNcEIsZUF4TW9CLEVBeU1wQixZQXpNb0IsRUEwTXBCLGlCQTFNb0IsRUEyTXBCLFVBM01vQixFQTRNcEIsY0E1TW9CLEVBNk1wQixnQkE3TW9CLEVBOE1wQixjQTlNb0IsRUErTXBCLFFBL01vQixFQWdOcEIsTUFoTm9CLEVBaU5wQixRQWpOb0IsRUFrTnBCLE1BbE5vQixFQW1OcEIsS0FuTm9CLENBQXRCO0FBc05BLElBQU1OLHFCQUFxQixHQUFHLENBQzVCLEtBRDRCLEVBRTVCLE9BRjRCLEVBRzVCLGNBSDRCLEVBSTVCLGFBSjRCLEVBSzVCLGFBTDRCLEVBTTVCLFFBTjRCLEVBTzVCLE1BUDRCLEVBUTVCLFVBUjRCLEVBUzVCLFFBVDRCLEVBVTVCLGFBVjRCLEVBVzVCLFFBWDRCLEVBWTVCLFdBWjRCLEVBYTVCLEtBYjRCLEVBYzVCLE9BZDRCLEVBZTVCLFFBZjRCLEVBZ0I1QixVQWhCNEIsRUFpQjVCLFFBakI0QixFQWtCNUIsb0JBbEI0QixFQW1CNUIsWUFuQjRCLEVBb0I1QixLQXBCNEIsRUFxQjVCLFdBckI0QixFQXNCNUIsT0F0QjRCLEVBdUI1QixRQXZCNEIsRUF3QjVCLFFBeEI0QixFQXlCNUIsT0F6QjRCLEVBMEI1QixRQTFCNEIsRUEyQjVCLE1BM0I0QixFQTRCNUIsUUE1QjRCLEVBNkI1QixTQTdCNEIsRUE4QjVCLFNBOUI0QixFQStCNUIsU0EvQjRCLEVBZ0M1QixTQWhDNEIsRUFpQzVCLFVBakM0QixFQWtDNUIsYUFsQzRCLEVBbUM1QixRQW5DNEIsRUFvQzVCLFdBcEM0QixFQXFDNUIsWUFyQzRCLEVBc0M1QixNQXRDNEIsRUF1QzVCLE1BdkM0QixFQXdDNUIsV0F4QzRCLEVBeUM1QixPQXpDNEIsRUEwQzVCLE1BMUM0QixFQTJDNUIsTUEzQzRCLEVBNEM1QixTQTVDNEIsRUE2QzVCLEtBN0M0QixFQThDNUIsZUE5QzRCLEVBK0M1QixnQkEvQzRCLEVBZ0Q1QixjQWhENEIsRUFpRDVCLFlBakQ0QixFQWtENUIsYUFsRDRCLEVBbUQ1QixVQW5ENEIsRUFvRDVCLFFBcEQ0QixFQXFENUIsY0FyRDRCLEVBc0Q1QixZQXRENEIsRUF1RDVCLGtCQXZENEIsRUF3RDVCLGNBeEQ0QixFQXlENUIsU0F6RDRCLEVBMEQ1QixjQTFENEIsRUEyRDVCLFNBM0Q0QixFQTRENUIsWUE1RDRCLEVBNkQ1QixZQTdENEIsRUE4RDVCLGlCQTlENEIsRUErRDVCLFVBL0Q0QixFQWdFNUIsWUFoRTRCLEVBaUU1QixVQWpFNEIsRUFrRTVCLFFBbEU0QixFQW1FNUIsWUFuRTRCLEVBb0U1QixVQXBFNEIsRUFxRTVCLFFBckU0QixFQXNFNUIsVUF0RTRCLEVBdUU1QixzQkF2RTRCLEVBd0U1QixLQXhFNEIsRUF5RTVCLGVBekU0QixFQTBFNUIsZ0JBMUU0QixFQTJFNUIsZUEzRTRCLEVBNEU1QixtQkE1RTRCLEVBNkU1QixNQTdFNEIsRUE4RTVCLGNBOUU0QixFQStFNUIsT0EvRTRCLEVBZ0Y1QixVQWhGNEIsRUFpRjVCLFlBakY0QixFQWtGNUIsYUFsRjRCLEVBbUY1QixZQW5GNEIsRUFvRjVCLFdBcEY0QixFQXFGNUIsYUFyRjRCLEVBc0Y1QixVQXRGNEIsRUF1RjVCLFdBdkY0QixFQXdGNUIsUUF4RjRCLEVBeUY1QixjQXpGNEIsRUEwRjVCLFlBMUY0QixFQTJGNUIsWUEzRjRCLEVBNEY1QixRQTVGNEIsRUE2RjVCLFVBN0Y0QixFQThGNUIsTUE5RjRCLEVBK0Y1QixrQkEvRjRCLEVBZ0c1QixjQWhHNEIsRUFpRzVCLE1Bakc0QixFQWtHNUIsTUFsRzRCLEVBbUc1QixVQW5HNEIsRUFvRzVCLHNCQXBHNEIsRUFxRzVCLFVBckc0QixFQXNHNUIsUUF0RzRCLEVBdUc1QixTQXZHNEIsRUF3RzVCLFdBeEc0QixFQXlHNUIsUUF6RzRCLEVBMEc1QixjQTFHNEIsRUEyRzVCLFNBM0c0QixFQTRHNUIsS0E1RzRCLEVBNkc1QixZQTdHNEIsRUE4RzVCLFlBOUc0QixFQStHNUIsZUEvRzRCLEVBZ0g1QixZQWhINEIsRUFpSDVCLGlCQWpINEIsRUFrSDVCLFVBbEg0QixFQW1INUIsY0FuSDRCLEVBb0g1QixnQkFwSDRCLEVBcUg1QixjQXJINEIsQ0FBOUI7QUF3SEEsSUFBTUUsNkJBQTZCLEdBQUcsRUFBdEM7QUFFQSxJQUFNRSxvQkFBb0IsR0FBRyxDQUMzQixLQUQyQixFQUUzQixNQUYyQixFQUczQixJQUgyQixFQUkzQixhQUoyQixFQUszQixNQUwyQixFQU0zQixRQU4yQixFQU8zQixNQVAyQixFQVEzQixRQVIyQixFQVMzQixTQVQyQixFQVUzQixTQVYyQixFQVczQixTQVgyQixFQVkzQixTQVoyQixFQWEzQixVQWIyQixFQWMzQixhQWQyQixFQWUzQjtBQUNBLE1BaEIyQixFQWlCM0IsWUFqQjJCLEVBa0IzQixXQWxCMkIsRUFtQjNCLGlCQW5CMkIsRUFvQjNCLFlBcEIyQixFQXFCM0Isa0JBckIyQixFQXNCM0IsV0F0QjJCLEVBdUIzQixpQkF2QjJCLEVBd0IzQixZQXhCMkIsRUF5QjNCLGNBekIyQixDQUE3Qjs7SUE0QnFCNEYsaUI7Ozs7Ozs7Ozs7Ozs7Z0NBQ1A7QUFDVixhQUFPLElBQUkxRyx1REFBSixDQUFjO0FBQ25CZ0IscUJBQWEsRUFBYkEsYUFEbUI7QUFFbkJOLDZCQUFxQixFQUFyQkEscUJBRm1CO0FBR25CSSw0QkFBb0IsRUFBcEJBLG9CQUhtQjtBQUluQkYscUNBQTZCLEVBQTdCQSw2QkFKbUI7QUFLbkJRLG1CQUFXLEVBQUUsU0FBTyxJQUFQLEVBQWEsSUFBYixDQUxNO0FBTW5CRSxrQkFBVSxFQUFFLENBQUMsR0FBRCxDQU5PO0FBT25CRSxtQkFBVyxFQUFFLENBQUMsR0FBRCxDQVBNO0FBUW5CRSwrQkFBdUIsRUFBRSxDQUFDLEdBQUQsQ0FSTjtBQVNuQkUsNkJBQXFCLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FUSjtBQVVuQnBCLHdCQUFnQixFQUFFLENBQUMsSUFBRCxDQVZDO0FBV25CSCxpQkFBUyxFQUFFLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDO0FBWFEsT0FBZCxDQUFQO0FBYUQ7Ozs7RUFmNENqRyx1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1cvQztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU00RyxhQUFhLEdBQUcsQ0FDcEIsS0FEb0IsRUFFcEIsT0FGb0IsRUFHcEIsU0FIb0IsRUFJcEIsU0FKb0IsRUFLcEIsV0FMb0IsRUFNcEIsT0FOb0IsRUFPcEIsSUFQb0IsRUFRcEIsS0FSb0IsRUFTcEIsS0FUb0IsRUFVcEIsU0FWb0IsRUFXcEIsU0FYb0IsRUFZcEIsTUFab0IsRUFhcEIsTUFib0IsRUFjcEIsVUFkb0IsRUFlcEIsY0Fmb0IsRUFnQnBCLGFBaEJvQixFQWlCcEIsUUFqQm9CLEVBa0JwQixTQWxCb0IsRUFtQnBCLFNBbkJvQixFQW9CcEIsWUFwQm9CLEVBcUJwQixVQXJCb0IsRUFzQnBCLFNBdEJvQixFQXVCcEIsT0F2Qm9CLEVBd0JwQixXQXhCb0IsRUF5QnBCLGFBekJvQixFQTBCcEIsY0ExQm9CLEVBMkJwQixtQkEzQm9CLEVBNEJwQixVQTVCb0IsRUE2QnBCLFdBN0JvQixFQThCcEIsVUE5Qm9CLEVBK0JwQixVQS9Cb0IsRUFnQ3BCLFlBaENvQixFQWlDcEIsVUFqQ29CLEVBa0NwQixZQWxDb0IsRUFtQ3BCLFlBbkNvQixFQW9DcEIsS0FwQ29CLEVBcUNwQixNQXJDb0IsRUFzQ3BCLFFBdENvQixFQXVDcEIsU0F2Q29CLEVBd0NwQixRQXhDb0IsRUF5Q3BCLFlBekNvQixFQTBDcEIsTUExQ29CLEVBMkNwQixVQTNDb0IsRUE0Q3BCLFVBNUNvQixFQTZDcEIsYUE3Q29CLEVBOENwQixLQTlDb0IsRUErQ3BCLE1BL0NvQixFQWdEcEIsTUFoRG9CLEVBaURwQixRQWpEb0IsRUFrRHBCLEtBbERvQixFQW1EcEIsUUFuRG9CLEVBb0RwQixTQXBEb0IsRUFxRHBCLGVBckRvQixFQXNEcEIsU0F0RG9CLEVBdURwQixRQXZEb0IsRUF3RHBCLGFBeERvQixFQXlEcEIsT0F6RG9CLEVBMERwQixPQTFEb0IsRUEyRHBCLFNBM0RvQixFQTREcEIsV0E1RG9CLEVBNkRwQixlQTdEb0IsRUE4RHBCLE1BOURvQixFQStEcEIsVUEvRG9CLEVBZ0VwQixjQWhFb0IsRUFpRXBCLGFBakVvQixFQWtFcEIsYUFsRW9CLEVBbUVwQixNQW5Fb0IsRUFvRXBCLE9BcEVvQixFQXFFcEIsSUFyRW9CLEVBc0VwQixRQXRFb0IsRUF1RXBCLElBdkVvQixFQXdFcEIsUUF4RW9CLEVBeUVwQixVQXpFb0IsRUEwRXBCLE1BMUVvQixFQTJFcEIsSUEzRW9CLEVBNEVwQixLQTVFb0IsRUE2RXBCLFlBN0VvQixFQThFcEIsTUE5RW9CLEVBK0VwQixNQS9Fb0IsRUFnRnBCLFNBaEZvQixFQWlGcEIsT0FqRm9CLEVBa0ZwQixPQWxGb0IsRUFtRnBCLE1BbkZvQixFQW9GcEIsS0FwRm9CLEVBcUZwQixPQXJGb0IsRUFzRnBCLEtBdEZvQixFQXVGcEIsZUF2Rm9CLEVBd0ZwQixRQXhGb0IsRUF5RnBCLE9BekZvQixFQTBGcEIsU0ExRm9CLEVBMkZwQixLQTNGb0IsRUE0RnBCLE9BNUZvQixFQTZGcEIsT0E3Rm9CLEVBOEZwQixNQTlGb0IsRUErRnBCLFFBL0ZvQixFQWdHcEIsUUFoR29CLEVBaUdwQixXQWpHb0IsRUFrR3BCLFdBbEdvQixFQW1HcEIsSUFuR29CLEVBb0dwQixNQXBHb0IsRUFxR3BCLFVBckdvQixFQXNHcEIsTUF0R29CLEVBdUdwQixjQXZHb0IsRUF3R3BCLFdBeEdvQixFQXlHcEIsT0F6R29CLEVBMEdwQixNQTFHb0IsRUEyR3BCLFFBM0dvQixFQTRHcEIsUUE1R29CLEVBNkdwQixPQTdHb0IsRUE4R3BCLEtBOUdvQixFQStHcEIsTUEvR29CLEVBZ0hwQixRQWhIb0IsRUFpSHBCLFdBakhvQixFQWtIcEIsVUFsSG9CLEVBbUhwQixNQW5Ib0IsRUFvSHBCLFFBcEhvQixFQXFIcEIsUUFySG9CLEVBc0hwQixLQXRIb0IsRUF1SHBCLE9BdkhvQixFQXdIcEIsUUF4SG9CLEVBeUhwQixXQXpIb0IsRUEwSHBCLE1BMUhvQixFQTJIcEIsU0EzSG9CLEVBNEhwQixTQTVIb0IsRUE2SHBCLElBN0hvQixFQThIcEIsVUE5SG9CLEVBK0hwQixXQS9Ib0IsRUFnSXBCLE1BaElvQixFQWlJcEIsVUFqSW9CLEVBa0lwQixNQWxJb0IsRUFtSXBCLE9BbklvQixFQW9JcEIsV0FwSW9CLEVBcUlwQixRQXJJb0IsRUFzSXBCLGdCQXRJb0IsRUF1SXBCLFFBdklvQixFQXdJcEIsVUF4SW9CLEVBeUlwQixPQXpJb0IsRUEwSXBCLFdBMUlvQixFQTJJcEIsTUEzSW9CLEVBNElwQixNQTVJb0IsRUE2SXBCLE1BN0lvQixFQThJcEIsWUE5SW9CLENBQXRCO0FBaUpBLElBQU1OLHFCQUFxQixHQUFHLENBQzVCLEtBRDRCLEVBRTVCLE9BRjRCLEVBRzVCLGNBSDRCLEVBSTVCLGdCQUo0QixFQUs1QixjQUw0QixFQU01QixhQU40QixFQU81QixZQVA0QixFQVE1QixjQVI0QixFQVM1QixhQVQ0QixFQVU1QixlQVY0QixFQVc1QixNQVg0QixFQVk1QixVQVo0QixFQWE1QixRQWI0QixFQWM1QixhQWQ0QixFQWU1QixRQWY0QixFQWdCNUIsT0FoQjRCLEVBaUI1QixTQWpCNEIsRUFrQjVCLFVBbEI0QixFQW1CNUIsY0FuQjRCLEVBb0I1QixnQkFwQjRCLEVBcUI1QixPQXJCNEIsRUFzQjVCLE1BdEI0QixFQXVCNUIsUUF2QjRCLEVBd0I1QixvQkF4QjRCLEVBeUI1QixZQXpCNEIsRUEwQjVCLEtBMUI0QixFQTJCNUIsZUEzQjRCLEVBNEI1QixRQTVCNEIsRUE2QjVCLE9BN0I0QixFQThCNUIsUUE5QjRCLEVBK0I1QixPQS9CNEIsRUFnQzVCLFFBaEM0QixDQUE5QjtBQW1DQSxJQUFNRSw2QkFBNkIsR0FBRyxDQUNwQyxZQURvQyxFQUVwQyxRQUZvQyxFQUdwQyxlQUhvQyxFQUlwQyxXQUpvQyxFQUtwQyxXQUxvQyxFQU1wQyxPQU5vQyxDQUF0QztBQVNBLElBQU1FLG9CQUFvQixHQUFHLENBQzNCLEtBRDJCLEVBRTNCLFdBRjJCLEVBRzNCLFFBSDJCLEVBSTNCLE1BSjJCLEVBSzNCLGNBTDJCLEVBTTNCLElBTjJCLEVBTzNCLGFBUDJCLEVBUTNCLE1BUjJCLEVBUzNCLEtBVDJCLEVBVTNCO0FBQ0EsTUFYMkIsRUFZM0IsWUFaMkIsRUFhM0IsV0FiMkIsRUFjM0IsaUJBZDJCLEVBZTNCLFlBZjJCLEVBZ0IzQixrQkFoQjJCLEVBaUIzQixXQWpCMkIsRUFrQjNCLGlCQWxCMkIsRUFtQjNCLFlBbkIyQixFQW9CM0IsY0FwQjJCLEVBcUIzQjtBQUNBLFdBdEIyQixFQXVCM0IsV0F2QjJCLEVBd0IzQixnQkF4QjJCLEVBeUIzQixnQkF6QjJCLEVBMEIzQixrQkExQjJCLEVBMkIzQixpQkEzQjJCLEVBNEIzQixtQkE1QjJCLEVBNkIzQix5QkE3QjJCLEVBOEIzQixvQkE5QjJCLEVBK0IzQix3QkEvQjJCLEVBZ0MzQix5QkFoQzJCLEVBaUMzQix3QkFqQzJCLEVBa0MzQixvQkFsQzJCLEVBbUMzQiwwQkFuQzJCLEVBb0MzQix5QkFwQzJCLEVBcUMzQixtQkFyQzJCLENBQTdCOztJQXdDcUI2RixpQjs7Ozs7Ozs7Ozs7OztnQ0FDUDtBQUNWLGFBQU8sSUFBSTNHLHVEQUFKLENBQWM7QUFDbkJnQixxQkFBYSxFQUFiQSxhQURtQjtBQUVuQk4sNkJBQXFCLEVBQXJCQSxxQkFGbUI7QUFHbkJJLDRCQUFvQixFQUFwQkEsb0JBSG1CO0FBSW5CRixxQ0FBNkIsRUFBN0JBLDZCQUptQjtBQUtuQlEsbUJBQVcsRUFBRSxTQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBTE07QUFNbkJFLGtCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sTUFBTixDQU5PO0FBT25CRSxtQkFBVyxFQUFFLENBQUMsR0FBRCxFQUFNLEtBQU4sQ0FQTTtBQVFuQkUsK0JBQXVCLEVBQUUsQ0FBQyxHQUFELENBUk47QUFTbkJFLDZCQUFxQixFQUFFLENBQUMsR0FBRCxDQVRKO0FBVW5CcEIsd0JBQWdCLEVBQUUsQ0FBQyxJQUFELENBVkM7QUFXbkJILGlCQUFTLEVBQUUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsSUFBMUI7QUFYUSxPQUFkLENBQVA7QUFhRDs7O2tDQUVhcEYsSyxFQUFPO0FBQ25CO0FBQ0EsVUFBSWlMLDREQUFRLENBQUNqTCxLQUFELENBQVosRUFBcUI7QUFDbkIsWUFBTTJMLFVBQVUsR0FBRyxLQUFLQyxjQUFMLEVBQW5COztBQUNBLFlBQUlELFVBQVUsSUFBSUEsVUFBVSxDQUFDbEwsSUFBWCxLQUFvQkMsd0RBQVUsQ0FBQ2EsVUFBakQsRUFBNkQ7QUFDM0Q7QUFDQSxpQkFBTztBQUFFZCxnQkFBSSxFQUFFQyx3REFBVSxDQUFDVyxRQUFuQjtBQUE2QlEsaUJBQUssRUFBRTdCLEtBQUssQ0FBQzZCO0FBQTFDLFdBQVA7QUFDRDtBQUNGLE9BUmtCLENBVW5COzs7QUFDQSxVQUFJcUoseURBQUssQ0FBQ2xMLEtBQUQsQ0FBVCxFQUFrQjtBQUNoQixZQUFNNkwsU0FBUyxHQUFHLEtBQUtoSixlQUFMLEVBQWxCOztBQUNBLFlBQUlnSixTQUFTLElBQUlBLFNBQVMsQ0FBQ3BMLElBQVYsS0FBbUJDLHdEQUFVLENBQUNzQyxRQUEzQyxJQUF1RDZJLFNBQVMsQ0FBQ2hLLEtBQVYsS0FBb0IsR0FBL0UsRUFBb0Y7QUFDbEY7QUFDQSxpQkFBTztBQUFFcEIsZ0JBQUksRUFBRUMsd0RBQVUsQ0FBQ3lJLElBQW5CO0FBQXlCdEgsaUJBQUssRUFBRTdCLEtBQUssQ0FBQzZCO0FBQXRDLFdBQVA7QUFDRDtBQUNGOztBQUVELGFBQU83QixLQUFQO0FBQ0Q7Ozs7RUFyQzRDYix1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFPL0M7Q0FHQTs7QUFDQSxJQUFNNEcsYUFBYSxHQUFHLENBQ3BCLEtBRG9CLEVBRXBCLEtBRm9CLEVBR3BCLFVBSG9CLEVBSXBCLE9BSm9CLEVBS3BCLEtBTG9CLEVBTXBCLEtBTm9CLEVBT3BCLEtBUG9CLEVBUXBCLE9BUm9CLEVBU3BCLElBVG9CLEVBVXBCLFlBVm9CLEVBV3BCLFlBWG9CLEVBWXBCLElBWm9CLEVBYXBCLFFBYm9CLEVBY3BCLGVBZG9CLEVBZXBCLEtBZm9CLEVBZ0JwQixPQWhCb0IsRUFpQnBCLFNBakJvQixFQWtCcEIsUUFsQm9CLEVBbUJwQixRQW5Cb0IsRUFvQnBCLE1BcEJvQixFQXFCcEIsU0FyQm9CLEVBc0JwQixNQXRCb0IsRUF1QnBCLElBdkJvQixFQXdCcEIsTUF4Qm9CLEVBeUJwQixRQXpCb0IsRUEwQnBCLGFBMUJvQixFQTJCcEIsVUEzQm9CLEVBNEJwQixNQTVCb0IsRUE2QnBCLE1BN0JvQixFQThCcEIsTUE5Qm9CLEVBK0JwQixTQS9Cb0IsRUFnQ3BCLE1BaENvQixFQWlDcEIsYUFqQ29CLEVBa0NwQixXQWxDb0IsRUFtQ3BCLGtCQW5Db0IsRUFvQ3BCLE9BcENvQixFQXFDcEIsTUFyQ29CLEVBc0NwQixPQXRDb0IsRUF1Q3BCLFVBdkNvQixFQXdDcEIsU0F4Q29CLEVBeUNwQixTQXpDb0IsRUEwQ3BCLFFBMUNvQixFQTJDcEIsUUEzQ29CLEVBNENwQixXQTVDb0IsRUE2Q3BCLFNBN0NvQixFQThDcEIsWUE5Q29CLEVBK0NwQixTQS9Db0IsRUFnRHBCLE1BaERvQixFQWlEcEIsZUFqRG9CLEVBa0RwQixPQWxEb0IsRUFtRHBCLFdBbkRvQixFQW9EcEIsWUFwRG9CLEVBcURwQixRQXJEb0IsRUFzRHBCLE9BdERvQixFQXVEcEIsTUF2RG9CLEVBd0RwQixXQXhEb0IsRUF5RHBCLFNBekRvQixFQTBEcEIsaUJBMURvQixFQTJEcEIsY0EzRG9CLEVBNERwQixpQ0E1RG9CLEVBNkRwQixjQTdEb0IsRUE4RHBCLGNBOURvQixFQStEcEIsZ0JBL0RvQixFQWdFcEIsY0FoRW9CLEVBaUVwQixtQkFqRW9CLEVBa0VwQixrQ0FsRW9CLEVBbUVwQixjQW5Fb0IsRUFvRXBCLFFBcEVvQixFQXFFcEIsT0FyRW9CLEVBc0VwQixNQXRFb0IsRUF1RXBCLEtBdkVvQixFQXdFcEIsWUF4RW9CLEVBeUVwQixLQXpFb0IsRUEwRXBCLFNBMUVvQixFQTJFcEIsU0EzRW9CLEVBNEVwQixTQTVFb0IsRUE2RXBCLFFBN0VvQixFQThFcEIsWUE5RW9CLEVBK0VwQixPQS9Fb0IsRUFnRnBCLFVBaEZvQixFQWlGcEIsZUFqRm9CLEVBa0ZwQixZQWxGb0IsRUFtRnBCLFVBbkZvQixFQW9GcEIsUUFwRm9CLEVBcUZwQixNQXJGb0IsRUFzRnBCLFNBdEZvQixFQXVGcEIsTUF2Rm9CLEVBd0ZwQixTQXhGb0IsRUF5RnBCLE1BekZvQixFQTBGcEIsS0ExRm9CLEVBMkZwQixVQTNGb0IsRUE0RnBCLFFBNUZvQixFQTZGcEIsT0E3Rm9CLEVBOEZwQixRQTlGb0IsRUErRnBCLE1BL0ZvQixFQWdHcEIsU0FoR29CLEVBaUdwQixRQWpHb0IsRUFrR3BCLEtBbEdvQixFQW1HcEIsVUFuR29CLEVBb0dwQixTQXBHb0IsRUFxR3BCLE9BckdvQixFQXNHcEIsT0F0R29CLEVBdUdwQixRQXZHb0IsRUF3R3BCLE9BeEdvQixFQXlHcEIsT0F6R29CLEVBMEdwQixLQTFHb0IsRUEyR3BCLFNBM0dvQixFQTRHcEIsTUE1R29CLEVBNkdwQixNQTdHb0IsRUE4R3BCLE1BOUdvQixFQStHcEIsVUEvR29CLEVBZ0hwQixRQWhIb0IsRUFpSHBCLEtBakhvQixFQWtIcEIsUUFsSG9CLEVBbUhwQixPQW5Ib0IsRUFvSHBCLE9BcEhvQixFQXFIcEIsVUFySG9CLEVBc0hwQixRQXRIb0IsRUF1SHBCLE1BdkhvQixFQXdIcEIsTUF4SG9CLEVBeUhwQixVQXpIb0IsRUEwSHBCLElBMUhvQixFQTJIcEIsV0EzSG9CLEVBNEhwQixPQTVIb0IsRUE2SHBCLE9BN0hvQixFQThIcEIsYUE5SG9CLEVBK0hwQixRQS9Ib0IsRUFnSXBCLEtBaElvQixFQWlJcEIsU0FqSW9CLEVBa0lwQixXQWxJb0IsRUFtSXBCLGNBbklvQixFQW9JcEIsVUFwSW9CLEVBcUlwQixNQXJJb0IsRUFzSXBCLElBdElvQixFQXVJcEIsTUF2SW9CLEVBd0lwQixVQXhJb0IsRUF5SXBCLE9BeklvQixFQTBJcEIsU0ExSW9CLEVBMklwQixTQTNJb0IsRUE0SXBCLE1BNUlvQixFQTZJcEIsTUE3SW9CLEVBOElwQixZQTlJb0IsRUErSXBCLElBL0lvQixFQWdKcEIsT0FoSm9CLEVBaUpwQixXQWpKb0IsRUFrSnBCLGdCQWxKb0IsRUFtSnBCLE9BbkpvQixFQW9KcEIsT0FwSm9CLEVBcUpwQixLQXJKb0IsRUFzSnBCLFFBdEpvQixFQXVKcEIsT0F2Sm9CLEVBd0pwQixRQXhKb0IsRUF5SnBCLEtBekpvQixFQTBKcEIsUUExSm9CLEVBMkpwQixLQTNKb0IsRUE0SnBCLFVBNUpvQixFQTZKcEIsUUE3Sm9CLEVBOEpwQixPQTlKb0IsRUErSnBCLFVBL0pvQixFQWdLcEIsVUFoS29CLEVBaUtwQixTQWpLb0IsRUFrS3BCLE9BbEtvQixFQW1LcEIsT0FuS29CLEVBb0twQixLQXBLb0IsRUFxS3BCLElBcktvQixFQXNLcEIsTUF0S29CLEVBdUtwQixXQXZLb0IsRUF3S3BCLEtBeEtvQixFQXlLcEIsTUF6S29CLEVBMEtwQixRQTFLb0IsRUEyS3BCLFNBM0tvQixFQTRLcEIsY0E1S29CLEVBNktwQixtQkE3S29CLEVBOEtwQixJQTlLb0IsRUErS3BCLEtBL0tvQixFQWdMcEIsSUFoTG9CLEVBaUxwQixNQWpMb0IsRUFrTHBCLE1BbExvQixFQW1McEIsSUFuTG9CLEVBb0xwQixPQXBMb0IsRUFxTHBCLEtBckxvQixFQXNMcEIsT0F0TG9CLEVBdUxwQixNQXZMb0IsRUF3THBCLFVBeExvQixFQXlMcEIsU0F6TG9CLEVBMExwQixXQTFMb0IsRUEyTHBCLFdBM0xvQixFQTRMcEIsY0E1TG9CLEVBNkxwQixpQkE3TG9CLEVBOExwQixpQkE5TG9CLEVBK0xwQixVQS9Mb0IsRUFnTXBCLGdCQWhNb0IsRUFpTXBCLE9Bak1vQixFQWtNcEIsV0FsTW9CLEVBbU1wQixTQW5Nb0IsRUFvTXBCLFNBcE1vQixFQXFNcEIsV0FyTW9CLEVBc01wQixPQXRNb0IsRUF1TXBCLE1Bdk1vQixFQXdNcEIsT0F4TW9CLEVBeU1wQixNQXpNb0IsRUEwTXBCLFdBMU1vQixFQTJNcEIsS0EzTW9CLEVBNE1wQixZQTVNb0IsRUE2TXBCLGFBN01vQixFQThNcEIsV0E5TW9CLEVBK01wQixXQS9Nb0IsRUFnTnBCLFlBaE5vQixFQWlOcEIsZ0JBak5vQixFQWtOcEIsU0FsTm9CLEVBbU5wQixZQW5Ob0IsRUFvTnBCLFVBcE5vQixFQXFOcEIsVUFyTm9CLEVBc05wQixVQXROb0IsRUF1TnBCLFNBdk5vQixFQXdOcEIsUUF4Tm9CLEVBeU5wQixRQXpOb0IsRUEwTnBCLFNBMU5vQixFQTJOcEIsUUEzTm9CLEVBNE5wQixPQTVOb0IsRUE2TnBCLFVBN05vQixFQThOcEIsUUE5Tm9CLEVBK05wQixLQS9Ob0IsRUFnT3BCLFlBaE9vQixFQWlPcEIsTUFqT29CLEVBa09wQixXQWxPb0IsRUFtT3BCLE9Bbk9vQixFQW9PcEIsUUFwT29CLEVBcU9wQixRQXJPb0IsRUFzT3BCLFFBdE9vQixFQXVPcEIsUUF2T29CLEVBd09wQixXQXhPb0IsRUF5T3BCLGNBek9vQixFQTBPcEIsS0ExT29CLEVBMk9wQixTQTNPb0IsRUE0T3BCLFVBNU9vQixFQTZPcEIsTUE3T29CLEVBOE9wQixVQTlPb0IsRUErT3BCLGNBL09vQixFQWdQcEIsS0FoUG9CLEVBaVBwQixjQWpQb0IsRUFrUHBCLFVBbFBvQixFQW1QcEIsWUFuUG9CLEVBb1BwQixNQXBQb0IsRUFxUHBCLE9BclBvQixFQXNQcEIsUUF0UG9CLEVBdVBwQixZQXZQb0IsRUF3UHBCLGFBeFBvQixFQXlQcEIsYUF6UG9CLEVBMFBwQixXQTFQb0IsRUEyUHBCLGlCQTNQb0IsRUE0UHBCLEtBNVBvQixFQTZQcEIsV0E3UG9CLEVBOFBwQixRQTlQb0IsRUErUHBCLGFBL1BvQixFQWdRcEIsT0FoUW9CLEVBaVFwQixhQWpRb0IsRUFrUXBCLE1BbFFvQixFQW1RcEIsTUFuUW9CLEVBb1FwQixXQXBRb0IsRUFxUXBCLGVBclFvQixFQXNRcEIsaUJBdFFvQixFQXVRcEIsSUF2UW9CLEVBd1FwQixVQXhRb0IsRUF5UXBCLFdBelFvQixFQTBRcEIsaUJBMVFvQixFQTJRcEIsYUEzUW9CLEVBNFFwQixPQTVRb0IsRUE2UXBCLFNBN1FvQixFQThRcEIsTUE5UW9CLEVBK1FwQixNQS9Rb0IsRUFnUnBCLFNBaFJvQixFQWlScEIsT0FqUm9CLEVBa1JwQixRQWxSb0IsRUFtUnBCLFNBblJvQixFQW9ScEIsUUFwUm9CLEVBcVJwQixRQXJSb0IsRUFzUnBCLE9BdFJvQixFQXVScEIsTUF2Um9CLEVBd1JwQixPQXhSb0IsRUF5UnBCLE9BelJvQixFQTBScEIsUUExUm9CLEVBMlJwQixTQTNSb0IsRUE0UnBCLFVBNVJvQixFQTZScEIsV0E3Um9CLEVBOFJwQixTQTlSb0IsRUErUnBCLFNBL1JvQixFQWdTcEIsTUFoU29CLEVBaVNwQixVQWpTb0IsRUFrU3BCLE9BbFNvQixFQW1TcEIsY0FuU29CLEVBb1NwQixRQXBTb0IsRUFxU3BCLE1BclNvQixFQXNTcEIsUUF0U29CLEVBdVNwQixTQXZTb0IsRUF3U3BCLE1BeFNvQixDQUF0QjtBQTJTQSxJQUFNTixxQkFBcUIsR0FBRyxDQUM1QixLQUQ0QixFQUU1QixjQUY0QixFQUc1QixhQUg0QixFQUk1QixNQUo0QixFQUs1QixhQUw0QixFQU01QixLQU40QixFQU81QixhQVA0QixFQVE1QixZQVI0QixFQVM1QixhQVQ0QixFQVU1QixZQVY0QixFQVc1QixnQkFYNEIsRUFZNUIsZ0JBWjRCLEVBYTVCLE1BYjRCLEVBYzVCLFVBZDRCLEVBZTVCLFFBZjRCLEVBZ0I1QixhQWhCNEIsRUFpQjVCLE9BakI0QixFQWtCNUIsVUFsQjRCLEVBbUI1QixRQW5CNEIsRUFvQjVCLFlBcEI0QixFQXFCNUIsS0FyQjRCLEVBc0I1QixRQXRCNEIsRUF1QjVCLFFBdkI0QixFQXdCNUIsT0F4QjRCLENBQTlCO0FBMkJBLElBQU1FLDZCQUE2QixHQUFHLENBQ3BDLFdBRG9DLEVBRXBDLGVBRm9DLEVBR3BDLG9CQUhvQyxFQUlwQyxPQUpvQyxFQUtwQyxXQUxvQyxFQU1wQyxnQkFOb0MsRUFPcEMsUUFQb0MsRUFRcEMsWUFSb0MsRUFTcEMsaUJBVG9DLENBQXRDO0FBWUEsSUFBTUUsb0JBQW9CLEdBQUcsQ0FDM0IsS0FEMkIsRUFFM0IsTUFGMkIsRUFHM0IsSUFIMkIsRUFJM0IsTUFKMkIsRUFLM0I7QUFDQSxNQU4yQixFQU8zQixZQVAyQixFQVEzQixXQVIyQixFQVMzQixpQkFUMkIsRUFVM0IsWUFWMkIsRUFXM0Isa0JBWDJCLEVBWTNCLFdBWjJCLEVBYTNCLGlCQWIyQixFQWMzQixZQWQyQixFQWUzQixjQWYyQixDQUE3Qjs7SUFrQnFCaUcsb0I7Ozs7Ozs7Ozs7Ozs7Z0NBQ1A7QUFDVixhQUFPLElBQUkvRyx1REFBSixDQUFjO0FBQ25CZ0IscUJBQWEsRUFBYkEsYUFEbUI7QUFFbkJOLDZCQUFxQixFQUFyQkEscUJBRm1CO0FBR25CSSw0QkFBb0IsRUFBcEJBLG9CQUhtQjtBQUluQkYscUNBQTZCLEVBQTdCQSw2QkFKbUI7QUFLbkJRLG1CQUFXLEVBQUUsU0FBTyxJQUFQLENBTE07QUFNbkJFLGtCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sTUFBTixDQU5PO0FBT25CRSxtQkFBVyxFQUFFLENBQUMsR0FBRCxFQUFNLEtBQU4sQ0FQTTtBQVFuQkUsK0JBQXVCLEVBQUUsQ0FBQyxHQUFELENBUk47QUFTbkJFLDZCQUFxQixFQUFFLEVBVEo7QUFVbkJwQix3QkFBZ0IsRUFBRSxDQUFDLElBQUQ7QUFWQyxPQUFkLENBQVA7QUFZRDs7OztFQWQrQ3BHLHVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFdsRDtBQUNBO0FBRUEsSUFBTTRHLGFBQWEsR0FBRyxDQUNwQixLQURvQixFQUVwQixVQUZvQixFQUdwQixXQUhvQixFQUlwQixLQUpvQixFQUtwQixPQUxvQixFQU1wQixRQU5vQixFQU9wQixPQVBvQixFQVFwQixNQVJvQixFQVNwQixXQVRvQixFQVVwQixLQVZvQixFQVdwQixZQVhvQixFQVlwQixNQVpvQixFQWFwQixLQWJvQixFQWNwQixLQWRvQixFQWVwQixVQWZvQixFQWdCcEIsSUFoQm9CLEVBaUJwQixTQWpCb0IsRUFrQnBCLGFBbEJvQixFQW1CcEIsS0FuQm9CLEVBb0JwQixVQXBCb0IsRUFxQnBCLFlBckJvQixFQXNCcEIsZUF0Qm9CLEVBdUJwQixlQXZCb0IsRUF3QnBCLGFBeEJvQixFQXlCcEIsUUF6Qm9CLEVBMEJwQixNQTFCb0IsRUEyQnBCLFNBM0JvQixFQTRCcEIsT0E1Qm9CLEVBNkJwQixNQTdCb0IsRUE4QnBCLFVBOUJvQixFQStCcEIsU0EvQm9CLEVBZ0NwQixVQWhDb0IsRUFpQ3BCLFFBakNvQixFQWtDcEIsT0FsQ29CLEVBbUNwQixNQW5Db0IsRUFvQ3BCLFFBcENvQixFQXFDcEIsUUFyQ29CLEVBc0NwQixPQXRDb0IsRUF1Q3BCLFFBdkNvQixFQXdDcEIsTUF4Q29CLEVBeUNwQixPQXpDb0IsRUEwQ3BCLE9BMUNvQixFQTJDcEIsSUEzQ29CLEVBNENwQixRQTVDb0IsRUE2Q3BCLFVBN0NvQixFQThDcEIsU0E5Q29CLEVBK0NwQixVQS9Db0IsRUFnRHBCLFVBaERvQixFQWlEcEIsTUFqRG9CLEVBa0RwQixVQWxEb0IsRUFtRHBCLFlBbkRvQixFQW9EcEIsT0FwRG9CLEVBcURwQixpQkFyRG9CLEVBc0RwQixNQXREb0IsRUF1RHBCLFlBdkRvQixFQXdEcEIsYUF4RG9CLEVBeURwQixNQXpEb0IsRUEwRHBCLE9BMURvQixFQTJEcEIsSUEzRG9CLEVBNERwQixRQTVEb0IsRUE2RHBCLFdBN0RvQixFQThEcEIsSUE5RG9CLEVBK0RwQixlQS9Eb0IsRUFnRXBCLFVBaEVvQixFQWlFcEIsT0FqRW9CLEVBa0VwQixRQWxFb0IsRUFtRXBCLFNBbkVvQixFQW9FcEIsT0FwRW9CLEVBcUVwQix3QkFyRW9CLEVBc0VwQixRQXRFb0IsRUF1RXBCLFFBdkVvQixFQXdFcEIsZ0NBeEVvQixFQXlFcEIsUUF6RW9CLEVBMEVwQixXQTFFb0IsRUEyRXBCLHlCQTNFb0IsRUE0RXBCLFNBNUVvQixFQTZFcEIsTUE3RW9CLEVBOEVwQixjQTlFb0IsRUErRXBCLFlBL0VvQixFQWdGcEIsSUFoRm9CLEVBaUZwQixLQWpGb0IsRUFrRnBCLFVBbEZvQixFQW1GcEIsTUFuRm9CLEVBb0ZwQixTQXBGb0IsRUFxRnBCLGVBckZvQixFQXNGcEIsS0F0Rm9CLEVBdUZwQixVQXZGb0IsRUF3RnBCLFVBeEZvQixFQXlGcEIsTUF6Rm9CLEVBMEZwQixNQTFGb0IsRUEyRnBCLFNBM0ZvQixFQTRGcEIsTUE1Rm9CLEVBNkZwQixZQTdGb0IsRUE4RnBCLFFBOUZvQixFQStGcEIsTUEvRm9CLEVBZ0dwQixhQWhHb0IsRUFpR3BCLE9BakdvQixFQWtHcEIsUUFsR29CLEVBbUdwQixPQW5Hb0IsRUFvR3BCLFNBcEdvQixFQXFHcEIsTUFyR29CLEVBc0dwQixhQXRHb0IsRUF1R3BCLGNBdkdvQixFQXdHcEIsT0F4R29CLEVBeUdwQixVQXpHb0IsRUEwR3BCLGNBMUdvQixFQTJHcEIsVUEzR29CLEVBNEdwQixNQTVHb0IsRUE2R3BCLG1CQTdHb0IsRUE4R3BCLFNBOUdvQixFQStHcEIsSUEvR29CLEVBZ0hwQixjQWhIb0IsRUFpSHBCLGNBakhvQixFQWtIcEIsS0FsSG9CLEVBbUhwQixRQW5Ib0IsRUFvSHBCLEtBcEhvQixFQXFIcEIsTUFySG9CLEVBc0hwQixVQXRIb0IsRUF1SHBCLE1BdkhvQixFQXdIcEIsYUF4SG9CLEVBeUhwQixNQXpIb0IsRUEwSHBCLFFBMUhvQixFQTJIcEIsU0EzSG9CLEVBNEhwQixZQTVIb0IsRUE2SHBCLElBN0hvQixFQThIcEIsVUE5SG9CLEVBK0hwQixTQS9Ib0IsRUFnSXBCLEtBaElvQixFQWlJcEIsYUFqSW9CLEVBa0lwQixTQWxJb0IsRUFtSXBCLFNBbklvQixFQW9JcEIsU0FwSW9CLEVBcUlwQixRQXJJb0IsRUFzSXBCLElBdElvQixFQXVJcEIsT0F2SW9CLEVBd0lwQixNQXhJb0IsRUF5SXBCLE1BeklvQixFQTBJcEIsUUExSW9CLEVBMklwQixNQTNJb0IsRUE0SXBCLGdCQTVJb0IsRUE2SXBCLFNBN0lvQixFQThJcEIsTUE5SW9CLEVBK0lwQixXQS9Jb0IsRUFnSnBCLFFBaEpvQixFQWlKcEIsVUFqSm9CLEVBa0pwQixZQWxKb0IsRUFtSnBCLFlBbkpvQixFQW9KcEIsYUFwSm9CLEVBcUpwQixTQXJKb0IsRUFzSnBCLEtBdEpvQixFQXVKcEIsUUF2Sm9CLEVBd0pwQixRQXhKb0IsRUF5SnBCLE1BekpvQixFQTBKcEIsTUExSm9CLEVBMkpwQixJQTNKb0IsRUE0SnBCLFFBNUpvQixFQTZKcEIsTUE3Sm9CLEVBOEpwQixPQTlKb0IsRUErSnBCLFNBL0pvQixFQWdLcEIsTUFoS29CLEVBaUtwQixPQWpLb0IsRUFrS3BCLE1BbEtvQixFQW1LcEIsS0FuS29CLEVBb0twQixNQXBLb0IsRUFxS3BCLFNBcktvQixFQXNLcEIsUUF0S29CLEVBdUtwQixTQXZLb0IsRUF3S3BCLE1BeEtvQixFQXlLcEIsUUF6S29CLEVBMEtwQixPQTFLb0IsRUEyS3BCLE9BM0tvQixFQTRLcEIsUUE1S29CLEVBNktwQixNQTdLb0IsRUE4S3BCLE9BOUtvQixFQStLcEIsTUEvS29CLEVBZ0xwQixXQWhMb0IsRUFpTHBCLE1BakxvQixFQWtMcEIsU0FsTG9CLEVBbUxwQixTQW5Mb0IsRUFvTHBCLGNBcExvQixFQXFMcEIsUUFyTG9CLEVBc0xwQixPQXRMb0IsRUF1THBCLFdBdkxvQixFQXdMcEIsTUF4TG9CLEVBeUxwQixNQXpMb0IsQ0FBdEI7QUE0TEEsSUFBTU4scUJBQXFCLEdBQUcsQ0FDNUIsS0FENEIsRUFFNUIsY0FGNEIsRUFHNUIsYUFINEIsRUFJNUIsTUFKNEIsRUFLNUIsYUFMNEIsRUFNNUIsS0FONEIsRUFPNUIsUUFQNEIsRUFRNUIsTUFSNEIsRUFTNUIsVUFUNEIsRUFVNUIsUUFWNEIsRUFXNUIsYUFYNEIsRUFZNUIsUUFaNEIsRUFhNUIsT0FiNEIsRUFjNUIsVUFkNEIsRUFlNUIsUUFmNEIsRUFnQjVCLG9CQWhCNEIsRUFpQjVCLFlBakI0QixFQWtCNUIsS0FsQjRCLEVBbUI1QixRQW5CNEIsRUFvQjVCLFFBcEI0QixFQXFCNUIsT0FyQjRCLENBQTlCO0FBd0JBLElBQU1FLDZCQUE2QixHQUFHLENBQUMsV0FBRCxFQUFjLGVBQWQsRUFBK0IsT0FBL0IsRUFBd0MsT0FBeEMsRUFBaUQsV0FBakQsQ0FBdEM7QUFFQSxJQUFNRSxvQkFBb0IsR0FBRyxDQUMzQixLQUQyQixFQUUzQixNQUYyQixFQUczQixJQUgyQixFQUkzQixNQUoyQixFQUszQjtBQUNBLE1BTjJCLEVBTzNCLFlBUDJCLEVBUTNCLFdBUjJCLEVBUzNCLGlCQVQyQixFQVUzQixZQVYyQixFQVczQixrQkFYMkIsRUFZM0IsV0FaMkIsRUFhM0IsaUJBYjJCLEVBYzNCLFlBZDJCLENBQTdCOztJQWlCcUJrRyxhOzs7Ozs7Ozs7Ozs7O2dDQUNQO0FBQ1YsYUFBTyxJQUFJaEgsdURBQUosQ0FBYztBQUNuQmdCLHFCQUFhLEVBQWJBLGFBRG1CO0FBRW5CTiw2QkFBcUIsRUFBckJBLHFCQUZtQjtBQUduQkksNEJBQW9CLEVBQXBCQSxvQkFIbUI7QUFJbkJGLHFDQUE2QixFQUE3QkEsNkJBSm1CO0FBS25CUSxtQkFBVyxFQUFFLFNBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsQ0FMTTtBQU1uQkUsa0JBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxNQUFOLENBTk87QUFPbkJFLG1CQUFXLEVBQUUsQ0FBQyxHQUFELEVBQU0sS0FBTixDQVBNO0FBUW5CRSwrQkFBdUIsRUFBRSxFQVJOO0FBU25CRSw2QkFBcUIsRUFBRSxDQUFDLEdBQUQsQ0FUSjtBQVVuQnBCLHdCQUFnQixFQUFFLENBQUMsSUFBRCxDQVZDO0FBV25CVSx3QkFBZ0IsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBWEM7QUFZbkJiLGlCQUFTLEVBQUUsQ0FDVCxJQURTLEVBRVQsSUFGUyxFQUdULElBSFMsRUFJVCxJQUpTLEVBS1QsSUFMUyxFQU1ULElBTlMsRUFPVCxJQVBTLEVBUVQsSUFSUyxFQVNULElBVFMsRUFVVCxJQVZTLEVBV1QsSUFYUyxFQVlULElBWlMsRUFhVCxJQWJTLEVBY1QsSUFkUyxFQWVULElBZlMsQ0FaUSxDQTZCbkI7O0FBN0JtQixPQUFkLENBQVA7QUErQkQ7Ozs7RUFqQ3dDakcsdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU8zQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU02TSxVQUFVLEdBQUc7QUFDakJDLEtBQUcsRUFBRWQsK0RBRFk7QUFFakJlLFNBQU8sRUFBRWQsbUVBRlE7QUFHakJlLE9BQUssRUFBRWQsaUVBSFU7QUFJakJlLE1BQUksRUFBRWQsZ0VBSlc7QUFLakJlLE9BQUssRUFBRWQsaUVBTFU7QUFNakJlLFlBQVUsRUFBRWQsc0VBTks7QUFPakJlLFVBQVEsRUFBRWQsb0VBUE87QUFRakJlLE9BQUssRUFBRWQsb0VBUlU7QUFTakJlLEtBQUcsRUFBRVgsdUVBVFk7QUFVakJZLE1BQUksRUFBRVgsZ0VBQWFBO0FBVkYsQ0FBbkI7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTVksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQzFNLEtBQUQsRUFBcUI7QUFBQSxNQUFiYixHQUFhLHVFQUFQLEVBQU87O0FBQ3pDLE1BQUksT0FBT2EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixVQUFNLElBQUlGLEtBQUosQ0FBVSxrRUFBaUVFLEtBQWpFLENBQVYsQ0FBTjtBQUNEOztBQUVELE1BQUlkLFNBQVMsR0FBRzJNLHVFQUFoQjs7QUFDQSxNQUFJMU0sR0FBRyxDQUFDd04sUUFBSixLQUFpQjlELFNBQXJCLEVBQWdDO0FBQzlCM0osYUFBUyxHQUFHNk0sVUFBVSxDQUFDNU0sR0FBRyxDQUFDd04sUUFBTCxDQUF0QjtBQUNEOztBQUNELE1BQUl6TixTQUFTLEtBQUsySixTQUFsQixFQUE2QjtBQUMzQixVQUFNL0ksS0FBSyxvQ0FBNkJYLEdBQUcsQ0FBQ3dOLFFBQWpDLEVBQVg7QUFDRDs7QUFDRCxTQUFPLElBQUl6TixTQUFKLENBQWNDLEdBQWQsRUFBbUJ1TixNQUFuQixDQUEwQjFNLEtBQTFCLENBQVA7QUFDRCxDQWJNO0FBZUEsSUFBTTRNLGlCQUFpQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWWYsVUFBWixDQUExQixDOzs7Ozs7Ozs7Ozs7QUNuRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFNN0ksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDNkosR0FBRDtBQUFBLFNBQVNBLEdBQUcsQ0FBQzFLLE9BQUosQ0FBWSxTQUFaLEVBQXdCLEVBQXhCLENBQVQ7QUFBQSxDQUF0QixDLENBRVA7O0FBQ08sSUFBTWdDLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUMySSxHQUFEO0FBQUEsU0FBU0EsR0FBRyxDQUFDQSxHQUFHLENBQUMvSixNQUFKLEdBQWEsQ0FBZCxDQUFaO0FBQUEsQ0FBYixDLENBRVA7O0FBQ08sSUFBTXlILE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNzQyxHQUFEO0FBQUEsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsR0FBZCxDQUFELElBQXVCQSxHQUFHLENBQUMvSixNQUFKLEtBQWUsQ0FBL0M7QUFBQSxDQUFoQixDLENBRVA7O0FBQ08sSUFBTTBGLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUM5RixNQUFEO0FBQUEsU0FBWUEsTUFBTSxDQUFDUixPQUFQLENBQWUsMEJBQWYsRUFBdUMsTUFBdkMsQ0FBWjtBQUFBLENBQXJCLEMsQ0FFUDtBQUNBOztBQUNPLElBQU1nSCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUM4RCxPQUFEO0FBQUEsU0FDOUJBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3JCLFdBQU9BLENBQUMsQ0FBQ3JLLE1BQUYsR0FBV29LLENBQUMsQ0FBQ3BLLE1BQWIsSUFBdUJvSyxDQUFDLENBQUNFLGFBQUYsQ0FBZ0JELENBQWhCLENBQTlCO0FBQ0QsR0FGRCxDQUQ4QjtBQUFBLENBQXpCLEMiLCJmaWxlIjoic3FsLWZvcm1hdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNxbEZvcm1hdHRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzcWxGb3JtYXR0ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NxbEZvcm1hdHRlci5qc1wiKTtcbiIsImltcG9ydCB0b2tlblR5cGVzIGZyb20gJy4vdG9rZW5UeXBlcyc7XHJcbmltcG9ydCBJbmRlbnRhdGlvbiBmcm9tICcuL0luZGVudGF0aW9uJztcclxuaW1wb3J0IElubGluZUJsb2NrIGZyb20gJy4vSW5saW5lQmxvY2snO1xyXG5pbXBvcnQgUGFyYW1zIGZyb20gJy4vUGFyYW1zJztcclxuaW1wb3J0IHsgdHJpbVNwYWNlc0VuZCB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgaXNBbmQsIGlzQmV0d2VlbiwgaXNMaW1pdCB9IGZyb20gJy4vdG9rZW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybWF0dGVyIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnXHJcbiAgICogIEBwYXJhbSB7U3RyaW5nfSBjZmcubGFuZ3VhZ2VcclxuICAgKiAgQHBhcmFtIHtTdHJpbmd9IGNmZy5pbmRlbnRcclxuICAgKiAgQHBhcmFtIHtCb29sZWFufSBjZmcudXBwZXJjYXNlXHJcbiAgICogIEBwYXJhbSB7SW50ZWdlcn0gY2ZnLmxpbmVzQmV0d2VlblF1ZXJpZXNcclxuICAgKiAgQHBhcmFtIHtPYmplY3R9IGNmZy5wYXJhbXNcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjZmcpIHtcclxuICAgIHRoaXMuY2ZnID0gY2ZnO1xyXG4gICAgdGhpcy5pbmRlbnRhdGlvbiA9IG5ldyBJbmRlbnRhdGlvbih0aGlzLmNmZy5pbmRlbnQpO1xyXG4gICAgdGhpcy5pbmxpbmVCbG9jayA9IG5ldyBJbmxpbmVCbG9jaygpO1xyXG4gICAgdGhpcy5wYXJhbXMgPSBuZXcgUGFyYW1zKHRoaXMuY2ZnLnBhcmFtcyk7XHJcbiAgICB0aGlzLnByZXZpb3VzUmVzZXJ2ZWRUb2tlbiA9IHt9O1xyXG4gICAgdGhpcy50b2tlbnMgPSBbXTtcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU1FMIFRva2VuaXplciBmb3IgdGhpcyBmb3JtYXR0ZXIsIHByb3ZpZGVkIGJ5IHN1YmNsYXNzZXMuXHJcbiAgICovXHJcbiAgdG9rZW5pemVyKCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd0b2tlbml6ZXIoKSBub3QgaW1wbGVtZW50ZWQgYnkgc3ViY2xhc3MnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcHJvY2VzcyBhbmQgbW9kaWZ5IGEgdG9rZW4gYmFzZWQgb24gcGFyc2VkIGNvbnRleHQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gdG9rZW4gVGhlIHRva2VuIHRvIG1vZGlmeVxyXG4gICAqICBAcGFyYW0ge1N0cmluZ30gdG9rZW4udHlwZVxyXG4gICAqICBAcGFyYW0ge1N0cmluZ30gdG9rZW4udmFsdWVcclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IG5ldyB0b2tlbiBvciB0aGUgb3JpZ2luYWxcclxuICAgKiAgQHJldHVybiB7U3RyaW5nfSB0b2tlbi50eXBlXHJcbiAgICogIEByZXR1cm4ge1N0cmluZ30gdG9rZW4udmFsdWVcclxuICAgKi9cclxuICB0b2tlbk92ZXJyaWRlKHRva2VuKSB7XHJcbiAgICAvLyBzdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIG1vZGlmeSB0b2tlbnMgZHVyaW5nIGZvcm1hdHRpbmdcclxuICAgIHJldHVybiB0b2tlbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdHMgd2hpdGVzcGFjZSBpbiBhIFNRTCBzdHJpbmcgdG8gbWFrZSBpdCBlYXNpZXIgdG8gcmVhZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBUaGUgU1FMIHF1ZXJ5IHN0cmluZ1xyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gZm9ybWF0dGVkIHF1ZXJ5XHJcbiAgICovXHJcbiAgZm9ybWF0KHF1ZXJ5KSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRoaXMudG9rZW5pemVyKCkudG9rZW5pemUocXVlcnkpO1xyXG4gICAgY29uc3QgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmdldEZvcm1hdHRlZFF1ZXJ5RnJvbVRva2VucygpO1xyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWRRdWVyeS50cmltKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGb3JtYXR0ZWRRdWVyeUZyb21Ub2tlbnMoKSB7XHJcbiAgICBsZXQgZm9ybWF0dGVkUXVlcnkgPSAnJztcclxuXHJcbiAgICB0aGlzLnRva2Vucy5mb3JFYWNoKCh0b2tlbiwgaW5kZXgpID0+IHtcclxuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgICAgdG9rZW4gPSB0aGlzLnRva2VuT3ZlcnJpZGUodG9rZW4pO1xyXG5cclxuICAgICAgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuTElORV9DT01NRU5UKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdExpbmVDb21tZW50KHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5CTE9DS19DT01NRU5UKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdEJsb2NrQ29tbWVudCh0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuUkVTRVJWRURfVE9QX0xFVkVMKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdFRvcExldmVsUmVzZXJ2ZWRXb3JkKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1Jlc2VydmVkVG9rZW4gPSB0b2tlbjtcclxuICAgICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlQpIHtcclxuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0VG9wTGV2ZWxSZXNlcnZlZFdvcmROb0luZGVudCh0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNSZXNlcnZlZFRva2VuID0gdG9rZW47XHJcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5SRVNFUlZFRF9ORVdMSU5FKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdE5ld2xpbmVSZXNlcnZlZFdvcmQodG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzUmVzZXJ2ZWRUb2tlbiA9IHRva2VuO1xyXG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuUkVTRVJWRUQpIHtcclxuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0V2l0aFNwYWNlcyh0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNSZXNlcnZlZFRva2VuID0gdG9rZW47XHJcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5PUEVOX1BBUkVOKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdE9wZW5pbmdQYXJlbnRoZXNlcyh0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuQ0xPU0VfUEFSRU4pIHtcclxuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0Q2xvc2luZ1BhcmVudGhlc2VzKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5QTEFDRUhPTERFUikge1xyXG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXRQbGFjZWhvbGRlcih0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnZhbHVlID09PSAnLCcpIHtcclxuICAgICAgICBmb3JtYXR0ZWRRdWVyeSA9IHRoaXMuZm9ybWF0Q29tbWEodG9rZW4sIGZvcm1hdHRlZFF1ZXJ5KTtcclxuICAgICAgfSBlbHNlIGlmICh0b2tlbi52YWx1ZSA9PT0gJzonKSB7XHJcbiAgICAgICAgZm9ybWF0dGVkUXVlcnkgPSB0aGlzLmZvcm1hdFdpdGhTcGFjZUFmdGVyKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udmFsdWUgPT09ICcuJykge1xyXG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXRXaXRob3V0U3BhY2VzKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udmFsdWUgPT09ICc7Jykge1xyXG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXRRdWVyeVNlcGFyYXRvcih0b2tlbiwgZm9ybWF0dGVkUXVlcnkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcm1hdHRlZFF1ZXJ5ID0gdGhpcy5mb3JtYXRXaXRoU3BhY2VzKHRva2VuLCBmb3JtYXR0ZWRRdWVyeSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvcm1hdHRlZFF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TGluZUNvbW1lbnQodG9rZW4sIHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5ICsgdGhpcy5zaG93KHRva2VuKSk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRCbG9ja0NvbW1lbnQodG9rZW4sIHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hZGROZXdsaW5lKHRoaXMuYWRkTmV3bGluZShxdWVyeSkgKyB0aGlzLmluZGVudENvbW1lbnQodG9rZW4udmFsdWUpKTtcclxuICB9XHJcblxyXG4gIGluZGVudENvbW1lbnQoY29tbWVudCkge1xyXG4gICAgcmV0dXJuIGNvbW1lbnQucmVwbGFjZSgvXFxuWyBcXHRdKi9ndSwgJ1xcbicgKyB0aGlzLmluZGVudGF0aW9uLmdldEluZGVudCgpICsgJyAnKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFRvcExldmVsUmVzZXJ2ZWRXb3JkTm9JbmRlbnQodG9rZW4sIHF1ZXJ5KSB7XHJcbiAgICB0aGlzLmluZGVudGF0aW9uLmRlY3JlYXNlVG9wTGV2ZWwoKTtcclxuICAgIHF1ZXJ5ID0gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KSArIHRoaXMuZXF1YWxpemVXaGl0ZXNwYWNlKHRoaXMuc2hvdyh0b2tlbikpO1xyXG4gICAgcmV0dXJuIHRoaXMuYWRkTmV3bGluZShxdWVyeSk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRUb3BMZXZlbFJlc2VydmVkV29yZCh0b2tlbiwgcXVlcnkpIHtcclxuICAgIHRoaXMuaW5kZW50YXRpb24uZGVjcmVhc2VUb3BMZXZlbCgpO1xyXG5cclxuICAgIHF1ZXJ5ID0gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KTtcclxuXHJcbiAgICB0aGlzLmluZGVudGF0aW9uLmluY3JlYXNlVG9wTGV2ZWwoKTtcclxuXHJcbiAgICBxdWVyeSArPSB0aGlzLmVxdWFsaXplV2hpdGVzcGFjZSh0aGlzLnNob3codG9rZW4pKTtcclxuICAgIHJldHVybiB0aGlzLmFkZE5ld2xpbmUocXVlcnkpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TmV3bGluZVJlc2VydmVkV29yZCh0b2tlbiwgcXVlcnkpIHtcclxuICAgIGlmIChpc0FuZCh0b2tlbikgJiYgaXNCZXR3ZWVuKHRoaXMudG9rZW5Mb29rQmVoaW5kKDIpKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRXaXRoU3BhY2VzKHRva2VuLCBxdWVyeSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KSArIHRoaXMuZXF1YWxpemVXaGl0ZXNwYWNlKHRoaXMuc2hvdyh0b2tlbikpICsgJyAnO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVwbGFjZSBhbnkgc2VxdWVuY2Ugb2Ygd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIHdpdGggc2luZ2xlIHNwYWNlXHJcbiAgZXF1YWxpemVXaGl0ZXNwYWNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9cXHMrL2d1LCAnICcpO1xyXG4gIH1cclxuXHJcbiAgLy8gT3BlbmluZyBwYXJlbnRoZXNlcyBpbmNyZWFzZSB0aGUgYmxvY2sgaW5kZW50IGxldmVsIGFuZCBzdGFydCBhIG5ldyBsaW5lXHJcbiAgZm9ybWF0T3BlbmluZ1BhcmVudGhlc2VzKHRva2VuLCBxdWVyeSkge1xyXG4gICAgLy8gVGFrZSBvdXQgdGhlIHByZWNlZGluZyBzcGFjZSB1bmxlc3MgdGhlcmUgd2FzIHdoaXRlc3BhY2UgdGhlcmUgaW4gdGhlIG9yaWdpbmFsIHF1ZXJ5XHJcbiAgICAvLyBvciBhbm90aGVyIG9wZW5pbmcgcGFyZW5zIG9yIGxpbmUgY29tbWVudFxyXG4gICAgY29uc3QgcHJlc2VydmVXaGl0ZXNwYWNlRm9yID0ge1xyXG4gICAgICBbdG9rZW5UeXBlcy5PUEVOX1BBUkVOXTogdHJ1ZSxcclxuICAgICAgW3Rva2VuVHlwZXMuTElORV9DT01NRU5UXTogdHJ1ZSxcclxuICAgICAgW3Rva2VuVHlwZXMuT1BFUkFUT1JdOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIGlmIChcclxuICAgICAgdG9rZW4ud2hpdGVzcGFjZUJlZm9yZS5sZW5ndGggPT09IDAgJiZcclxuICAgICAgIXByZXNlcnZlV2hpdGVzcGFjZUZvclt0aGlzLnRva2VuTG9va0JlaGluZCgpPy50eXBlXVxyXG4gICAgKSB7XHJcbiAgICAgIHF1ZXJ5ID0gdHJpbVNwYWNlc0VuZChxdWVyeSk7XHJcbiAgICB9XHJcbiAgICBxdWVyeSArPSB0aGlzLnNob3codG9rZW4pO1xyXG5cclxuICAgIHRoaXMuaW5saW5lQmxvY2suYmVnaW5JZlBvc3NpYmxlKHRoaXMudG9rZW5zLCB0aGlzLmluZGV4KTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaW5saW5lQmxvY2suaXNBY3RpdmUoKSkge1xyXG4gICAgICB0aGlzLmluZGVudGF0aW9uLmluY3JlYXNlQmxvY2tMZXZlbCgpO1xyXG4gICAgICBxdWVyeSA9IHRoaXMuYWRkTmV3bGluZShxdWVyeSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcXVlcnk7XHJcbiAgfVxyXG5cclxuICAvLyBDbG9zaW5nIHBhcmVudGhlc2VzIGRlY3JlYXNlIHRoZSBibG9jayBpbmRlbnQgbGV2ZWxcclxuICBmb3JtYXRDbG9zaW5nUGFyZW50aGVzZXModG9rZW4sIHF1ZXJ5KSB7XHJcbiAgICBpZiAodGhpcy5pbmxpbmVCbG9jay5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgIHRoaXMuaW5saW5lQmxvY2suZW5kKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFdpdGhTcGFjZUFmdGVyKHRva2VuLCBxdWVyeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluZGVudGF0aW9uLmRlY3JlYXNlQmxvY2tMZXZlbCgpO1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRXaXRoU3BhY2VzKHRva2VuLCB0aGlzLmFkZE5ld2xpbmUocXVlcnkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdFBsYWNlaG9sZGVyKHRva2VuLCBxdWVyeSkge1xyXG4gICAgcmV0dXJuIHF1ZXJ5ICsgdGhpcy5wYXJhbXMuZ2V0KHRva2VuKSArICcgJztcclxuICB9XHJcblxyXG4gIC8vIENvbW1hcyBzdGFydCBhIG5ldyBsaW5lICh1bmxlc3Mgd2l0aGluIGlubGluZSBwYXJlbnRoZXNlcyBvciBTUUwgXCJMSU1JVFwiIGNsYXVzZSlcclxuICBmb3JtYXRDb21tYSh0b2tlbiwgcXVlcnkpIHtcclxuICAgIHF1ZXJ5ID0gdHJpbVNwYWNlc0VuZChxdWVyeSkgKyB0aGlzLnNob3codG9rZW4pICsgJyAnO1xyXG5cclxuICAgIGlmICh0aGlzLmlubGluZUJsb2NrLmlzQWN0aXZlKCkpIHtcclxuICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgfSBlbHNlIGlmIChpc0xpbWl0KHRoaXMucHJldmlvdXNSZXNlcnZlZFRva2VuKSkge1xyXG4gICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5hZGROZXdsaW5lKHF1ZXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdFdpdGhTcGFjZUFmdGVyKHRva2VuLCBxdWVyeSkge1xyXG4gICAgcmV0dXJuIHRyaW1TcGFjZXNFbmQocXVlcnkpICsgdGhpcy5zaG93KHRva2VuKSArICcgJztcclxuICB9XHJcblxyXG4gIGZvcm1hdFdpdGhvdXRTcGFjZXModG9rZW4sIHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gdHJpbVNwYWNlc0VuZChxdWVyeSkgKyB0aGlzLnNob3codG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0V2l0aFNwYWNlcyh0b2tlbiwgcXVlcnkpIHtcclxuICAgIHJldHVybiBxdWVyeSArIHRoaXMuc2hvdyh0b2tlbikgKyAnICc7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRRdWVyeVNlcGFyYXRvcih0b2tlbiwgcXVlcnkpIHtcclxuICAgIHRoaXMuaW5kZW50YXRpb24ucmVzZXRJbmRlbnRhdGlvbigpO1xyXG4gICAgcmV0dXJuIHRyaW1TcGFjZXNFbmQocXVlcnkpICsgdGhpcy5zaG93KHRva2VuKSArICdcXG4nLnJlcGVhdCh0aGlzLmNmZy5saW5lc0JldHdlZW5RdWVyaWVzIHx8IDEpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udmVydHMgdG9rZW4gdG8gc3RyaW5nICh1cHBlcmNhc2luZyBpdCBpZiBuZWVkZWQpXHJcbiAgc2hvdyh7IHR5cGUsIHZhbHVlIH0pIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jZmcudXBwZXJjYXNlICYmXHJcbiAgICAgICh0eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEIHx8XHJcbiAgICAgICAgdHlwZSA9PT0gdG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUwgfHxcclxuICAgICAgICB0eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX1RPUF9MRVZFTF9OT19JTkRFTlQgfHxcclxuICAgICAgICB0eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX05FV0xJTkUgfHxcclxuICAgICAgICB0eXBlID09PSB0b2tlblR5cGVzLk9QRU5fUEFSRU4gfHxcclxuICAgICAgICB0eXBlID09PSB0b2tlblR5cGVzLkNMT1NFX1BBUkVOKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkTmV3bGluZShxdWVyeSkge1xyXG4gICAgcXVlcnkgPSB0cmltU3BhY2VzRW5kKHF1ZXJ5KTtcclxuICAgIGlmICghcXVlcnkuZW5kc1dpdGgoJ1xcbicpKSB7XHJcbiAgICAgIHF1ZXJ5ICs9ICdcXG4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHF1ZXJ5ICsgdGhpcy5pbmRlbnRhdGlvbi5nZXRJbmRlbnQoKTtcclxuICB9XHJcblxyXG4gIHRva2VuTG9va0JlaGluZChuID0gMSkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXggLSBuXTtcclxuICB9XHJcblxyXG4gIHRva2VuTG9va0FoZWFkKG4gPSAxKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleCArIG5dO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBsYXN0IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuY29uc3QgSU5ERU5UX1RZUEVfVE9QX0xFVkVMID0gJ3RvcC1sZXZlbCc7XHJcbmNvbnN0IElOREVOVF9UWVBFX0JMT0NLX0xFVkVMID0gJ2Jsb2NrLWxldmVsJztcclxuXHJcbi8qKlxyXG4gKiBNYW5hZ2VzIGluZGVudGF0aW9uIGxldmVscy5cclxuICpcclxuICogVGhlcmUgYXJlIHR3byB0eXBlcyBvZiBpbmRlbnRhdGlvbiBsZXZlbHM6XHJcbiAqXHJcbiAqIC0gQkxPQ0tfTEVWRUwgOiBpbmNyZWFzZWQgYnkgb3Blbi1wYXJlbnRoZXNpc1xyXG4gKiAtIFRPUF9MRVZFTCA6IGluY3JlYXNlZCBieSBSRVNFUlZFRF9UT1BfTEVWRUwgd29yZHNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGVudGF0aW9uIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gaW5kZW50IEluZGVudCB2YWx1ZSwgZGVmYXVsdCBpcyBcIiAgXCIgKDIgc3BhY2VzKVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGluZGVudCkge1xyXG4gICAgdGhpcy5pbmRlbnQgPSBpbmRlbnQgfHwgJyAgJztcclxuICAgIHRoaXMuaW5kZW50VHlwZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgY3VycmVudCBpbmRlbnRhdGlvbiBzdHJpbmcuXHJcbiAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAqL1xyXG4gIGdldEluZGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluZGVudC5yZXBlYXQodGhpcy5pbmRlbnRUeXBlcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5jcmVhc2VzIGluZGVudGF0aW9uIGJ5IG9uZSB0b3AtbGV2ZWwgaW5kZW50LlxyXG4gICAqL1xyXG4gIGluY3JlYXNlVG9wTGV2ZWwoKSB7XHJcbiAgICB0aGlzLmluZGVudFR5cGVzLnB1c2goSU5ERU5UX1RZUEVfVE9QX0xFVkVMKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluY3JlYXNlcyBpbmRlbnRhdGlvbiBieSBvbmUgYmxvY2stbGV2ZWwgaW5kZW50LlxyXG4gICAqL1xyXG4gIGluY3JlYXNlQmxvY2tMZXZlbCgpIHtcclxuICAgIHRoaXMuaW5kZW50VHlwZXMucHVzaChJTkRFTlRfVFlQRV9CTE9DS19MRVZFTCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWNyZWFzZXMgaW5kZW50YXRpb24gYnkgb25lIHRvcC1sZXZlbCBpbmRlbnQuXHJcbiAgICogRG9lcyBub3RoaW5nIHdoZW4gdGhlIHByZXZpb3VzIGluZGVudCBpcyBub3QgdG9wLWxldmVsLlxyXG4gICAqL1xyXG4gIGRlY3JlYXNlVG9wTGV2ZWwoKSB7XHJcbiAgICBpZiAodGhpcy5pbmRlbnRUeXBlcy5sZW5ndGggPiAwICYmIGxhc3QodGhpcy5pbmRlbnRUeXBlcykgPT09IElOREVOVF9UWVBFX1RPUF9MRVZFTCkge1xyXG4gICAgICB0aGlzLmluZGVudFR5cGVzLnBvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVjcmVhc2VzIGluZGVudGF0aW9uIGJ5IG9uZSBibG9jay1sZXZlbCBpbmRlbnQuXHJcbiAgICogSWYgdGhlcmUgYXJlIHRvcC1sZXZlbCBpbmRlbnRzIHdpdGhpbiB0aGUgYmxvY2stbGV2ZWwgaW5kZW50LFxyXG4gICAqIHRocm93cyBhd2F5IHRoZXNlIGFzIHdlbGwuXHJcbiAgICovXHJcbiAgZGVjcmVhc2VCbG9ja0xldmVsKCkge1xyXG4gICAgd2hpbGUgKHRoaXMuaW5kZW50VHlwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5pbmRlbnRUeXBlcy5wb3AoKTtcclxuICAgICAgaWYgKHR5cGUgIT09IElOREVOVF9UWVBFX1RPUF9MRVZFTCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldEluZGVudGF0aW9uKCkge1xyXG4gICAgdGhpcy5pbmRlbnRUeXBlcyA9IFtdO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgdG9rZW5UeXBlcyBmcm9tICcuL3Rva2VuVHlwZXMnO1xyXG5cclxuY29uc3QgSU5MSU5FX01BWF9MRU5HVEggPSA1MDtcclxuXHJcbi8qKlxyXG4gKiBCb29ra2VlcGVyIGZvciBpbmxpbmUgYmxvY2tzLlxyXG4gKlxyXG4gKiBJbmxpbmUgYmxvY2tzIGFyZSBwYXJlbnRoaXplZCBleHByZXNzaW9ucyB0aGF0IGFyZSBzaG9ydGVyIHRoYW4gSU5MSU5FX01BWF9MRU5HVEguXHJcbiAqIFRoZXNlIGJsb2NrcyBhcmUgZm9ybWF0dGVkIG9uIGEgc2luZ2xlIGxpbmUsIHVubGlrZSBsb25nZXIgcGFyZW50aGl6ZWRcclxuICogZXhwcmVzc2lvbnMgd2hlcmUgb3Blbi1wYXJlbnRoZXNpcyBjYXVzZXMgbmV3bGluZSBhbmQgaW5jcmVhc2Ugb2YgaW5kZW50YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmxpbmVCbG9jayB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmxldmVsID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJlZ2lucyBpbmxpbmUgYmxvY2sgd2hlbiBsb29rYWhlYWQgdGhyb3VnaCB1cGNvbWluZyB0b2tlbnMgZGV0ZXJtaW5lc1xyXG4gICAqIHRoYXQgdGhlIGJsb2NrIHdvdWxkIGJlIHNtYWxsZXIgdGhhbiBJTkxJTkVfTUFYX0xFTkdUSC5cclxuICAgKiBAcGFyYW0gIHtPYmplY3RbXX0gdG9rZW5zIEFycmF5IG9mIGFsbCB0b2tlbnNcclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGluZGV4IEN1cnJlbnQgdG9rZW4gcG9zaXRpb25cclxuICAgKi9cclxuICBiZWdpbklmUG9zc2libGUodG9rZW5zLCBpbmRleCkge1xyXG4gICAgaWYgKHRoaXMubGV2ZWwgPT09IDAgJiYgdGhpcy5pc0lubGluZUJsb2NrKHRva2VucywgaW5kZXgpKSB7XHJcbiAgICAgIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxldmVsID4gMCkge1xyXG4gICAgICB0aGlzLmxldmVsKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxldmVsID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmlzaGVzIGN1cnJlbnQgaW5saW5lIGJsb2NrLlxyXG4gICAqIFRoZXJlIG1pZ2h0IGJlIHNldmVyYWwgbmVzdGVkIG9uZXMuXHJcbiAgICovXHJcbiAgZW5kKCkge1xyXG4gICAgdGhpcy5sZXZlbC0tO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJ1ZSB3aGVuIGluc2lkZSBhbiBpbmxpbmUgYmxvY2tcclxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIGlzQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGV2ZWwgPiAwO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgdGhpcyBzaG91bGQgYmUgYW4gaW5saW5lIHBhcmVudGhlc2VzIGJsb2NrXHJcbiAgLy8gRXhhbXBsZXMgYXJlIFwiTk9XKClcIiwgXCJDT1VOVCgqKVwiLCBcImludCgxMClcIiwga2V5KGBzb21lY29sdW1uYCksIERFQ0lNQUwoNywyKVxyXG4gIGlzSW5saW5lQmxvY2sodG9rZW5zLCBpbmRleCkge1xyXG4gICAgbGV0IGxlbmd0aCA9IDA7XHJcbiAgICBsZXQgbGV2ZWwgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpXTtcclxuICAgICAgbGVuZ3RoICs9IHRva2VuLnZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICAgIC8vIE92ZXJyYW4gbWF4IGxlbmd0aFxyXG4gICAgICBpZiAobGVuZ3RoID4gSU5MSU5FX01BWF9MRU5HVEgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0b2tlbi50eXBlID09PSB0b2tlblR5cGVzLk9QRU5fUEFSRU4pIHtcclxuICAgICAgICBsZXZlbCsrO1xyXG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuQ0xPU0VfUEFSRU4pIHtcclxuICAgICAgICBsZXZlbC0tO1xyXG4gICAgICAgIGlmIChsZXZlbCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0ZvcmJpZGRlblRva2VuKHRva2VuKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVzZXJ2ZWQgd29yZHMgdGhhdCBjYXVzZSBuZXdsaW5lcywgY29tbWVudHMgYW5kIHNlbWljb2xvbnNcclxuICAvLyBhcmUgbm90IGFsbG93ZWQgaW5zaWRlIGlubGluZSBwYXJlbnRoZXNlcyBibG9ja1xyXG4gIGlzRm9yYmlkZGVuVG9rZW4oeyB0eXBlLCB2YWx1ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX1RPUF9MRVZFTCB8fFxyXG4gICAgICB0eXBlID09PSB0b2tlblR5cGVzLlJFU0VSVkVEX05FV0xJTkUgfHxcclxuICAgICAgdHlwZSA9PT0gdG9rZW5UeXBlcy5DT01NRU5UIHx8XHJcbiAgICAgIHR5cGUgPT09IHRva2VuVHlwZXMuQkxPQ0tfQ09NTUVOVCB8fFxyXG4gICAgICB2YWx1ZSA9PT0gJzsnXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogSGFuZGxlcyBwbGFjZWhvbGRlciByZXBsYWNlbWVudCB3aXRoIGdpdmVuIHBhcmFtcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFtcyB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgcGFyYW0gdmFsdWUgdGhhdCBtYXRjaGVzIGdpdmVuIHBsYWNlaG9sZGVyIHdpdGggcGFyYW0ga2V5LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlblxyXG4gICAqICAgQHBhcmFtIHtTdHJpbmd9IHRva2VuLmtleSBQbGFjZWhvbGRlciBrZXlcclxuICAgKiAgIEBwYXJhbSB7U3RyaW5nfSB0b2tlbi52YWx1ZSBQbGFjZWhvbGRlciB2YWx1ZVxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gcGFyYW0gb3IgdG9rZW4udmFsdWUgd2hlbiBwYXJhbXMgYXJlIG1pc3NpbmdcclxuICAgKi9cclxuICBnZXQoeyBrZXksIHZhbHVlIH0pIHtcclxuICAgIGlmICghdGhpcy5wYXJhbXMpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYXJhbXNba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnBhcmFtc1t0aGlzLmluZGV4KytdO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgdG9rZW5UeXBlcyBmcm9tICcuL3Rva2VuVHlwZXMnO1xyXG5pbXBvcnQgKiBhcyByZWdleEZhY3RvcnkgZnJvbSAnLi9yZWdleEZhY3RvcnknO1xyXG5pbXBvcnQgeyBlc2NhcGVSZWdFeHAgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbml6ZXIge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmdcclxuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLnJlc2VydmVkV29yZHMgUmVzZXJ2ZWQgd29yZHMgaW4gU1FMXHJcbiAgICogIEBwYXJhbSB7U3RyaW5nW119IGNmZy5yZXNlcnZlZFRvcExldmVsV29yZHMgV29yZHMgdGhhdCBhcmUgc2V0IHRvIG5ldyBsaW5lIHNlcGFyYXRlbHlcclxuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLnJlc2VydmVkTmV3bGluZVdvcmRzIFdvcmRzIHRoYXQgYXJlIHNldCB0byBuZXdsaW5lXHJcbiAgICogIEBwYXJhbSB7U3RyaW5nW119IGNmZy5yZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCBXb3JkcyB0aGF0IGFyZSB0b3AgbGV2ZWwgYnV0IGhhdmUgbm8gaW5kZW50YXRpb25cclxuICAgKiAgQHBhcmFtIHtTdHJpbmdbXX0gY2ZnLnN0cmluZ1R5cGVzIFN0cmluZyB0eXBlcyB0byBlbmFibGU6IFwiXCIsICcnLCBgYCwgW10sIE4nJ1xyXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcub3BlblBhcmVucyBPcGVuaW5nIHBhcmVudGhlc2VzIHRvIGVuYWJsZSwgbGlrZSAoLCBbXHJcbiAgICogIEBwYXJhbSB7U3RyaW5nW119IGNmZy5jbG9zZVBhcmVucyBDbG9zaW5nIHBhcmVudGhlc2VzIHRvIGVuYWJsZSwgbGlrZSApLCBdXHJcbiAgICogIEBwYXJhbSB7U3RyaW5nW119IGNmZy5pbmRleGVkUGxhY2Vob2xkZXJUeXBlcyBQcmVmaXhlcyBmb3IgaW5kZXhlZCBwbGFjZWhvbGRlcnMsIGxpa2UgP1xyXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcubmFtZWRQbGFjZWhvbGRlclR5cGVzIFByZWZpeGVzIGZvciBuYW1lZCBwbGFjZWhvbGRlcnMsIGxpa2UgQCBhbmQgOlxyXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcubGluZUNvbW1lbnRUeXBlcyBMaW5lIGNvbW1lbnRzIHRvIGVuYWJsZSwgbGlrZSAjIGFuZCAtLVxyXG4gICAqICBAcGFyYW0ge1N0cmluZ1tdfSBjZmcuc3BlY2lhbFdvcmRDaGFycyBTcGVjaWFsIGNoYXJzIHRoYXQgY2FuIGJlIGZvdW5kIGluc2lkZSBvZiB3b3JkcywgbGlrZSBAIGFuZCAjXHJcbiAgICogIEBwYXJhbSB7U3RyaW5nW119IFtjZmcub3BlcmF0b3JdIEFkZGl0aW9uYWwgb3BlcmF0b3JzIHRvIHJlY29nbml6ZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNmZykge1xyXG4gICAgdGhpcy5XSElURVNQQUNFX1JFR0VYID0gL14oXFxzKykvdTtcclxuICAgIHRoaXMuTlVNQkVSX1JFR0VYID0gL14oKC1cXHMqKT9bMC05XSsoXFwuWzAtOV0rKT8oW2VFXS0/WzAtOV0rKFxcLlswLTldKyk/KT98MHhbMC05YS1mQS1GXSt8MGJbMDFdKylcXGIvdTtcclxuXHJcbiAgICB0aGlzLk9QRVJBVE9SX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZU9wZXJhdG9yUmVnZXgoW1xyXG4gICAgICAnPD4nLFxyXG4gICAgICAnPD0nLFxyXG4gICAgICAnPj0nLFxyXG4gICAgICAuLi4oY2ZnLm9wZXJhdG9ycyB8fCBbXSksXHJcbiAgICBdKTtcclxuXHJcbiAgICB0aGlzLkJMT0NLX0NPTU1FTlRfUkVHRVggPSAvXihcXC9cXCpbXl0qPyg/OlxcKlxcL3wkKSkvdTtcclxuICAgIHRoaXMuTElORV9DT01NRU5UX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZUxpbmVDb21tZW50UmVnZXgoY2ZnLmxpbmVDb21tZW50VHlwZXMpO1xyXG5cclxuICAgIHRoaXMuUkVTRVJWRURfVE9QX0xFVkVMX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZVJlc2VydmVkV29yZFJlZ2V4KGNmZy5yZXNlcnZlZFRvcExldmVsV29yZHMpO1xyXG4gICAgdGhpcy5SRVNFUlZFRF9UT1BfTEVWRUxfTk9fSU5ERU5UX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZVJlc2VydmVkV29yZFJlZ2V4KFxyXG4gICAgICBjZmcucmVzZXJ2ZWRUb3BMZXZlbFdvcmRzTm9JbmRlbnRcclxuICAgICk7XHJcbiAgICB0aGlzLlJFU0VSVkVEX05FV0xJTkVfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUmVzZXJ2ZWRXb3JkUmVnZXgoY2ZnLnJlc2VydmVkTmV3bGluZVdvcmRzKTtcclxuICAgIHRoaXMuUkVTRVJWRURfUExBSU5fUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUmVzZXJ2ZWRXb3JkUmVnZXgoY2ZnLnJlc2VydmVkV29yZHMpO1xyXG5cclxuICAgIHRoaXMuV09SRF9SRUdFWCA9IHJlZ2V4RmFjdG9yeS5jcmVhdGVXb3JkUmVnZXgoY2ZnLnNwZWNpYWxXb3JkQ2hhcnMpO1xyXG4gICAgdGhpcy5TVFJJTkdfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlU3RyaW5nUmVnZXgoY2ZnLnN0cmluZ1R5cGVzKTtcclxuXHJcbiAgICB0aGlzLk9QRU5fUEFSRU5fUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUGFyZW5SZWdleChjZmcub3BlblBhcmVucyk7XHJcbiAgICB0aGlzLkNMT1NFX1BBUkVOX1JFR0VYID0gcmVnZXhGYWN0b3J5LmNyZWF0ZVBhcmVuUmVnZXgoY2ZnLmNsb3NlUGFyZW5zKTtcclxuXHJcbiAgICB0aGlzLklOREVYRURfUExBQ0VIT0xERVJfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUGxhY2Vob2xkZXJSZWdleChcclxuICAgICAgY2ZnLmluZGV4ZWRQbGFjZWhvbGRlclR5cGVzLFxyXG4gICAgICAnWzAtOV0qJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuSURFTlRfTkFNRURfUExBQ0VIT0xERVJfUkVHRVggPSByZWdleEZhY3RvcnkuY3JlYXRlUGxhY2Vob2xkZXJSZWdleChcclxuICAgICAgY2ZnLm5hbWVkUGxhY2Vob2xkZXJUeXBlcyxcclxuICAgICAgJ1thLXpBLVowLTkuXyRdKydcclxuICAgICk7XHJcbiAgICB0aGlzLlNUUklOR19OQU1FRF9QTEFDRUhPTERFUl9SRUdFWCA9IHJlZ2V4RmFjdG9yeS5jcmVhdGVQbGFjZWhvbGRlclJlZ2V4KFxyXG4gICAgICBjZmcubmFtZWRQbGFjZWhvbGRlclR5cGVzLFxyXG4gICAgICByZWdleEZhY3RvcnkuY3JlYXRlU3RyaW5nUGF0dGVybihjZmcuc3RyaW5nVHlwZXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGFrZXMgYSBTUUwgc3RyaW5nIGFuZCBicmVha3MgaXQgaW50byB0b2tlbnMuXHJcbiAgICogRWFjaCB0b2tlbiBpcyBhbiBvYmplY3Qgd2l0aCB0eXBlIGFuZCB2YWx1ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgU1FMIHN0cmluZ1xyXG4gICAqIEByZXR1cm4ge09iamVjdFtdfSB0b2tlbnMgQW4gYXJyYXkgb2YgdG9rZW5zLlxyXG4gICAqICBAcmV0dXJuIHtTdHJpbmd9IHRva2VuLnR5cGVcclxuICAgKiAgQHJldHVybiB7U3RyaW5nfSB0b2tlbi52YWx1ZVxyXG4gICAqICBAcmV0dXJuIHtTdHJpbmd9IHRva2VuLndoaXRlc3BhY2VCZWZvcmUgUHJlY2VkaW5nIHdoaXRlc3BhY2VcclxuICAgKi9cclxuICB0b2tlbml6ZShpbnB1dCkge1xyXG4gICAgY29uc3QgdG9rZW5zID0gW107XHJcbiAgICBsZXQgdG9rZW47XHJcblxyXG4gICAgLy8gS2VlcCBwcm9jZXNzaW5nIHRoZSBzdHJpbmcgdW50aWwgaXQgaXMgZW1wdHlcclxuICAgIHdoaWxlIChpbnB1dC5sZW5ndGgpIHtcclxuICAgICAgLy8gZ3JhYiBhbnkgcHJlY2VkaW5nIHdoaXRlc3BhY2VcclxuICAgICAgY29uc3Qgd2hpdGVzcGFjZUJlZm9yZSA9IHRoaXMuZ2V0V2hpdGVzcGFjZShpbnB1dCk7XHJcbiAgICAgIGlucHV0ID0gaW5wdXQuc3Vic3RyaW5nKHdoaXRlc3BhY2VCZWZvcmUubGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmIChpbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAvLyBHZXQgdGhlIG5leHQgdG9rZW4gYW5kIHRoZSB0b2tlbiB0eXBlXHJcbiAgICAgICAgdG9rZW4gPSB0aGlzLmdldE5leHRUb2tlbihpbnB1dCwgdG9rZW4pO1xyXG4gICAgICAgIC8vIEFkdmFuY2UgdGhlIHN0cmluZ1xyXG4gICAgICAgIGlucHV0ID0gaW5wdXQuc3Vic3RyaW5nKHRva2VuLnZhbHVlLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHRva2Vucy5wdXNoKHsgLi4udG9rZW4sIHdoaXRlc3BhY2VCZWZvcmUgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG5cclxuICBnZXRXaGl0ZXNwYWNlKGlucHV0KSB7XHJcbiAgICBjb25zdCBtYXRjaGVzID0gaW5wdXQubWF0Y2godGhpcy5XSElURVNQQUNFX1JFR0VYKTtcclxuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dFRva2VuKGlucHV0LCBwcmV2aW91c1Rva2VuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmdldENvbW1lbnRUb2tlbihpbnB1dCkgfHxcclxuICAgICAgdGhpcy5nZXRTdHJpbmdUb2tlbihpbnB1dCkgfHxcclxuICAgICAgdGhpcy5nZXRPcGVuUGFyZW5Ub2tlbihpbnB1dCkgfHxcclxuICAgICAgdGhpcy5nZXRDbG9zZVBhcmVuVG9rZW4oaW5wdXQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXJUb2tlbihpbnB1dCkgfHxcclxuICAgICAgdGhpcy5nZXROdW1iZXJUb2tlbihpbnB1dCkgfHxcclxuICAgICAgdGhpcy5nZXRSZXNlcnZlZFdvcmRUb2tlbihpbnB1dCwgcHJldmlvdXNUb2tlbikgfHxcclxuICAgICAgdGhpcy5nZXRXb3JkVG9rZW4oaW5wdXQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0T3BlcmF0b3JUb2tlbihpbnB1dClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRDb21tZW50VG9rZW4oaW5wdXQpIHtcclxuICAgIHJldHVybiB0aGlzLmdldExpbmVDb21tZW50VG9rZW4oaW5wdXQpIHx8IHRoaXMuZ2V0QmxvY2tDb21tZW50VG9rZW4oaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGluZUNvbW1lbnRUb2tlbihpbnB1dCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xyXG4gICAgICBpbnB1dCxcclxuICAgICAgdHlwZTogdG9rZW5UeXBlcy5MSU5FX0NPTU1FTlQsXHJcbiAgICAgIHJlZ2V4OiB0aGlzLkxJTkVfQ09NTUVOVF9SRUdFWCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmxvY2tDb21tZW50VG9rZW4oaW5wdXQpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuQkxPQ0tfQ09NTUVOVCxcclxuICAgICAgcmVnZXg6IHRoaXMuQkxPQ0tfQ09NTUVOVF9SRUdFWCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RyaW5nVG9rZW4oaW5wdXQpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuU1RSSU5HLFxyXG4gICAgICByZWdleDogdGhpcy5TVFJJTkdfUkVHRVgsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldE9wZW5QYXJlblRva2VuKGlucHV0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7XHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLk9QRU5fUEFSRU4sXHJcbiAgICAgIHJlZ2V4OiB0aGlzLk9QRU5fUEFSRU5fUkVHRVgsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENsb3NlUGFyZW5Ub2tlbihpbnB1dCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xyXG4gICAgICBpbnB1dCxcclxuICAgICAgdHlwZTogdG9rZW5UeXBlcy5DTE9TRV9QQVJFTixcclxuICAgICAgcmVnZXg6IHRoaXMuQ0xPU0VfUEFSRU5fUkVHRVgsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlaG9sZGVyVG9rZW4oaW5wdXQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuZ2V0SWRlbnROYW1lZFBsYWNlaG9sZGVyVG9rZW4oaW5wdXQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0U3RyaW5nTmFtZWRQbGFjZWhvbGRlclRva2VuKGlucHV0KSB8fFxyXG4gICAgICB0aGlzLmdldEluZGV4ZWRQbGFjZWhvbGRlclRva2VuKGlucHV0KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldElkZW50TmFtZWRQbGFjZWhvbGRlclRva2VuKGlucHV0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQbGFjZWhvbGRlclRva2VuV2l0aEtleSh7XHJcbiAgICAgIGlucHV0LFxyXG4gICAgICByZWdleDogdGhpcy5JREVOVF9OQU1FRF9QTEFDRUhPTERFUl9SRUdFWCxcclxuICAgICAgcGFyc2VLZXk6ICh2KSA9PiB2LnNsaWNlKDEpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTdHJpbmdOYW1lZFBsYWNlaG9sZGVyVG9rZW4oaW5wdXQpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFBsYWNlaG9sZGVyVG9rZW5XaXRoS2V5KHtcclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHJlZ2V4OiB0aGlzLlNUUklOR19OQU1FRF9QTEFDRUhPTERFUl9SRUdFWCxcclxuICAgICAgcGFyc2VLZXk6ICh2KSA9PlxyXG4gICAgICAgIHRoaXMuZ2V0RXNjYXBlZFBsYWNlaG9sZGVyS2V5KHsga2V5OiB2LnNsaWNlKDIsIC0xKSwgcXVvdGVDaGFyOiB2LnNsaWNlKC0xKSB9KSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhlZFBsYWNlaG9sZGVyVG9rZW4oaW5wdXQpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFBsYWNlaG9sZGVyVG9rZW5XaXRoS2V5KHtcclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHJlZ2V4OiB0aGlzLklOREVYRURfUExBQ0VIT0xERVJfUkVHRVgsXHJcbiAgICAgIHBhcnNlS2V5OiAodikgPT4gdi5zbGljZSgxKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2Vob2xkZXJUb2tlbldpdGhLZXkoeyBpbnB1dCwgcmVnZXgsIHBhcnNlS2V5IH0pIHtcclxuICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7IGlucHV0LCByZWdleCwgdHlwZTogdG9rZW5UeXBlcy5QTEFDRUhPTERFUiB9KTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICB0b2tlbi5rZXkgPSBwYXJzZUtleSh0b2tlbi52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9rZW47XHJcbiAgfVxyXG5cclxuICBnZXRFc2NhcGVkUGxhY2Vob2xkZXJLZXkoeyBrZXksIHF1b3RlQ2hhciB9KSB7XHJcbiAgICByZXR1cm4ga2V5LnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoJ1xcXFwnICsgcXVvdGVDaGFyKSwgJ2d1JyksIHF1b3RlQ2hhcik7XHJcbiAgfVxyXG5cclxuICAvLyBEZWNpbWFsLCBiaW5hcnksIG9yIGhleCBudW1iZXJzXHJcbiAgZ2V0TnVtYmVyVG9rZW4oaW5wdXQpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuTlVNQkVSLFxyXG4gICAgICByZWdleDogdGhpcy5OVU1CRVJfUkVHRVgsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFB1bmN0dWF0aW9uIGFuZCBzeW1ib2xzXHJcbiAgZ2V0T3BlcmF0b3JUb2tlbihpbnB1dCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xyXG4gICAgICBpbnB1dCxcclxuICAgICAgdHlwZTogdG9rZW5UeXBlcy5PUEVSQVRPUixcclxuICAgICAgcmVnZXg6IHRoaXMuT1BFUkFUT1JfUkVHRVgsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFJlc2VydmVkV29yZFRva2VuKGlucHV0LCBwcmV2aW91c1Rva2VuKSB7XHJcbiAgICAvLyBBIHJlc2VydmVkIHdvcmQgY2Fubm90IGJlIHByZWNlZGVkIGJ5IGEgXCIuXCJcclxuICAgIC8vIHRoaXMgbWFrZXMgaXQgc28gaW4gXCJteXRhYmxlLmZyb21cIiwgXCJmcm9tXCIgaXMgbm90IGNvbnNpZGVyZWQgYSByZXNlcnZlZCB3b3JkXHJcbiAgICBpZiAocHJldmlvdXNUb2tlbiAmJiBwcmV2aW91c1Rva2VuLnZhbHVlICYmIHByZXZpb3VzVG9rZW4udmFsdWUgPT09ICcuJykge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5nZXRUb3BMZXZlbFJlc2VydmVkVG9rZW4oaW5wdXQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0TmV3bGluZVJlc2VydmVkVG9rZW4oaW5wdXQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0VG9wTGV2ZWxSZXNlcnZlZFRva2VuTm9JbmRlbnQoaW5wdXQpIHx8XHJcbiAgICAgIHRoaXMuZ2V0UGxhaW5SZXNlcnZlZFRva2VuKGlucHV0KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFRvcExldmVsUmVzZXJ2ZWRUb2tlbihpbnB1dCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5PbkZpcnN0TWF0Y2goe1xyXG4gICAgICBpbnB1dCxcclxuICAgICAgdHlwZTogdG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUwsXHJcbiAgICAgIHJlZ2V4OiB0aGlzLlJFU0VSVkVEX1RPUF9MRVZFTF9SRUdFWCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV3bGluZVJlc2VydmVkVG9rZW4oaW5wdXQpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuUkVTRVJWRURfTkVXTElORSxcclxuICAgICAgcmVnZXg6IHRoaXMuUkVTRVJWRURfTkVXTElORV9SRUdFWCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9wTGV2ZWxSZXNlcnZlZFRva2VuTm9JbmRlbnQoaW5wdXQpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFRva2VuT25GaXJzdE1hdGNoKHtcclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHR5cGU6IHRva2VuVHlwZXMuUkVTRVJWRURfVE9QX0xFVkVMX05PX0lOREVOVCxcclxuICAgICAgcmVnZXg6IHRoaXMuUkVTRVJWRURfVE9QX0xFVkVMX05PX0lOREVOVF9SRUdFWCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhaW5SZXNlcnZlZFRva2VuKGlucHV0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7XHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLlJFU0VSVkVELFxyXG4gICAgICByZWdleDogdGhpcy5SRVNFUlZFRF9QTEFJTl9SRUdFWCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0V29yZFRva2VuKGlucHV0KSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbk9uRmlyc3RNYXRjaCh7XHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB0eXBlOiB0b2tlblR5cGVzLldPUkQsXHJcbiAgICAgIHJlZ2V4OiB0aGlzLldPUkRfUkVHRVgsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFRva2VuT25GaXJzdE1hdGNoKHsgaW5wdXQsIHR5cGUsIHJlZ2V4IH0pIHtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBpbnB1dC5tYXRjaChyZWdleCk7XHJcblxyXG4gICAgcmV0dXJuIG1hdGNoZXMgPyB7IHR5cGUsIHZhbHVlOiBtYXRjaGVzWzFdIH0gOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGVzY2FwZVJlZ0V4cCwgaXNFbXB0eSwgc29ydEJ5TGVuZ3RoRGVzYyB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYXRvclJlZ2V4KG11bHRpTGV0dGVyT3BlcmF0b3JzKSB7XHJcbiAgcmV0dXJuIG5ldyBSZWdFeHAoXHJcbiAgICBgXigke3NvcnRCeUxlbmd0aERlc2MobXVsdGlMZXR0ZXJPcGVyYXRvcnMpLm1hcChlc2NhcGVSZWdFeHApLmpvaW4oJ3wnKX18LilgLFxyXG4gICAgJ3UnXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpbmVDb21tZW50UmVnZXgobGluZUNvbW1lbnRUeXBlcykge1xyXG4gIHJldHVybiBuZXcgUmVnRXhwKFxyXG4gICAgYF4oKD86JHtsaW5lQ29tbWVudFR5cGVzLm1hcCgoYykgPT4gZXNjYXBlUmVnRXhwKGMpKS5qb2luKCd8Jyl9KS4qPykoPzpcXHJcXG58XFxyfFxcbnwkKWAsXHJcbiAgICAndSdcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVzZXJ2ZWRXb3JkUmVnZXgocmVzZXJ2ZWRXb3Jkcykge1xyXG4gIGlmIChyZXNlcnZlZFdvcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5cXGIkYCwgJ3UnKTtcclxuICB9XHJcbiAgY29uc3QgcmVzZXJ2ZWRXb3Jkc1BhdHRlcm4gPSBzb3J0QnlMZW5ndGhEZXNjKHJlc2VydmVkV29yZHMpLmpvaW4oJ3wnKS5yZXBsYWNlKC8gL2d1LCAnXFxcXHMrJyk7XHJcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYF4oJHtyZXNlcnZlZFdvcmRzUGF0dGVybn0pXFxcXGJgLCAnaXUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdvcmRSZWdleChzcGVjaWFsQ2hhcnMgPSBbXSkge1xyXG4gIHJldHVybiBuZXcgUmVnRXhwKFxyXG4gICAgYF4oW1xcXFxwe0FscGhhYmV0aWN9XFxcXHB7TWFya31cXFxccHtEZWNpbWFsX051bWJlcn1cXFxccHtDb25uZWN0b3JfUHVuY3R1YXRpb259XFxcXHB7Sm9pbl9Db250cm9sfSR7c3BlY2lhbENoYXJzLmpvaW4oXHJcbiAgICAgICcnXHJcbiAgICApfV0rKWAsXHJcbiAgICAndSdcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RyaW5nUmVnZXgoc3RyaW5nVHlwZXMpIHtcclxuICByZXR1cm4gbmV3IFJlZ0V4cCgnXignICsgY3JlYXRlU3RyaW5nUGF0dGVybihzdHJpbmdUeXBlcykgKyAnKScsICd1Jyk7XHJcbn1cclxuXHJcbi8vIFRoaXMgZW5hYmxlcyB0aGUgZm9sbG93aW5nIHN0cmluZyBwYXR0ZXJuczpcclxuLy8gMS4gYmFja3RpY2sgcXVvdGVkIHN0cmluZyB1c2luZyBgYCB0byBlc2NhcGVcclxuLy8gMi4gc3F1YXJlIGJyYWNrZXQgcXVvdGVkIHN0cmluZyAoU1FMIFNlcnZlcikgdXNpbmcgXV0gdG8gZXNjYXBlXHJcbi8vIDMuIGRvdWJsZSBxdW90ZWQgc3RyaW5nIHVzaW5nIFwiXCIgb3IgXFxcIiB0byBlc2NhcGVcclxuLy8gNC4gc2luZ2xlIHF1b3RlZCBzdHJpbmcgdXNpbmcgJycgb3IgXFwnIHRvIGVzY2FwZVxyXG4vLyA1LiBuYXRpb25hbCBjaGFyYWN0ZXIgcXVvdGVkIHN0cmluZyB1c2luZyBOJycgb3IgTlxcJyB0byBlc2NhcGVcclxuLy8gNi4gVW5pY29kZSBzaW5nbGUtcXVvdGVkIHN0cmluZyB1c2luZyBcXCcgdG8gZXNjYXBlXHJcbi8vIDcuIFVuaWNvZGUgZG91YmxlLXF1b3RlZCBzdHJpbmcgdXNpbmcgXFxcIiB0byBlc2NhcGVcclxuLy8gOC4gUG9zdGdyZVNRTCBkb2xsYXItcXVvdGVkIHN0cmluZ3NcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cmluZ1BhdHRlcm4oc3RyaW5nVHlwZXMpIHtcclxuICBjb25zdCBwYXR0ZXJucyA9IHtcclxuICAgICdgYCc6ICcoKGBbXmBdKigkfGApKSspJyxcclxuICAgICd7fSc6ICcoKFxcXFx7W15cXFxcfV0qKCR8XFxcXH0pKSspJyxcclxuICAgICdbXSc6ICcoKFxcXFxbW15cXFxcXV0qKCR8XFxcXF0pKShcXFxcXVteXFxcXF1dKigkfFxcXFxdKSkqKScsXHJcbiAgICAnXCJcIic6ICcoKFwiW15cIlxcXFxcXFxcXSooPzpcXFxcXFxcXC5bXlwiXFxcXFxcXFxdKikqKFwifCQpKSspJyxcclxuICAgIFwiJydcIjogXCIoKCdbXidcXFxcXFxcXF0qKD86XFxcXFxcXFwuW14nXFxcXFxcXFxdKikqKCd8JCkpKylcIixcclxuICAgIFwiTicnXCI6IFwiKChOJ1teJ1xcXFxcXFxcXSooPzpcXFxcXFxcXC5bXidcXFxcXFxcXF0qKSooJ3wkKSkrKVwiLFxyXG4gICAgXCJVJicnXCI6IFwiKChVJidbXidcXFxcXFxcXF0qKD86XFxcXFxcXFwuW14nXFxcXFxcXFxdKikqKCd8JCkpKylcIixcclxuICAgICdVJlwiXCInOiAnKChVJlwiW15cIlxcXFxcXFxcXSooPzpcXFxcXFxcXC5bXlwiXFxcXFxcXFxdKikqKFwifCQpKSspJyxcclxuICAgICQkOiAnKCg/PHRhZz5cXFxcJFxcXFx3KlxcXFwkKVtcXFxcc1xcXFxTXSo/KD86XFxcXGs8dGFnPnwkKSknLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBzdHJpbmdUeXBlcy5tYXAoKHQpID0+IHBhdHRlcm5zW3RdKS5qb2luKCd8Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXJlblJlZ2V4KHBhcmVucykge1xyXG4gIHJldHVybiBuZXcgUmVnRXhwKCdeKCcgKyBwYXJlbnMubWFwKGVzY2FwZVBhcmVuKS5qb2luKCd8JykgKyAnKScsICdpdScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlc2NhcGVQYXJlbihwYXJlbikge1xyXG4gIGlmIChwYXJlbi5sZW5ndGggPT09IDEpIHtcclxuICAgIC8vIEEgc2luZ2xlIHB1bmN0dWF0aW9uIGNoYXJhY3RlclxyXG4gICAgcmV0dXJuIGVzY2FwZVJlZ0V4cChwYXJlbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGxvbmdlciB3b3JkXHJcbiAgICByZXR1cm4gJ1xcXFxiJyArIHBhcmVuICsgJ1xcXFxiJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGFjZWhvbGRlclJlZ2V4KHR5cGVzLCBwYXR0ZXJuKSB7XHJcbiAgaWYgKGlzRW1wdHkodHlwZXMpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGNvbnN0IHR5cGVzUmVnZXggPSB0eXBlcy5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCd8Jyk7XHJcblxyXG4gIHJldHVybiBuZXcgUmVnRXhwKGBeKCg/OiR7dHlwZXNSZWdleH0pKD86JHtwYXR0ZXJufSkpYCwgJ3UnKTtcclxufVxyXG4iLCJpbXBvcnQgdG9rZW5UeXBlcyBmcm9tICcuL3Rva2VuVHlwZXMnO1xyXG5cclxuY29uc3QgaXNUb2tlbiA9ICh0eXBlLCByZWdleCkgPT4gKHRva2VuKSA9PiB0b2tlbj8udHlwZSA9PT0gdHlwZSAmJiByZWdleC50ZXN0KHRva2VuPy52YWx1ZSk7XHJcblxyXG5leHBvcnQgY29uc3QgaXNBbmQgPSBpc1Rva2VuKHRva2VuVHlwZXMuUkVTRVJWRURfTkVXTElORSwgL15BTkQkL2l1KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0JldHdlZW4gPSBpc1Rva2VuKHRva2VuVHlwZXMuUkVTRVJWRUQsIC9eQkVUV0VFTiQvaXUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzTGltaXQgPSBpc1Rva2VuKHRva2VuVHlwZXMuUkVTRVJWRURfVE9QX0xFVkVMLCAvXkxJTUlUJC9pdSk7XHJcblxyXG5leHBvcnQgY29uc3QgaXNTZXQgPSBpc1Rva2VuKHRva2VuVHlwZXMuUkVTRVJWRURfVE9QX0xFVkVMLCAvXlNFVCQvaXUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzQnkgPSBpc1Rva2VuKHRva2VuVHlwZXMuUkVTRVJWRUQsIC9eQlkkL2l1KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc1dpbmRvdyA9IGlzVG9rZW4odG9rZW5UeXBlcy5SRVNFUlZFRF9UT1BfTEVWRUwsIC9eV0lORE9XJC9pdSk7XHJcblxyXG5leHBvcnQgY29uc3QgaXNFbmQgPSBpc1Rva2VuKHRva2VuVHlwZXMuQ0xPU0VfUEFSRU4sIC9eRU5EJC9pdSk7XHJcbiIsIi8qKlxyXG4gKiBDb25zdGFudHMgZm9yIHRva2VuIHR5cGVzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgV09SRDogJ3dvcmQnLFxyXG4gIFNUUklORzogJ3N0cmluZycsXHJcbiAgUkVTRVJWRUQ6ICdyZXNlcnZlZCcsXHJcbiAgUkVTRVJWRURfVE9QX0xFVkVMOiAncmVzZXJ2ZWQtdG9wLWxldmVsJyxcclxuICBSRVNFUlZFRF9UT1BfTEVWRUxfTk9fSU5ERU5UOiAncmVzZXJ2ZWQtdG9wLWxldmVsLW5vLWluZGVudCcsXHJcbiAgUkVTRVJWRURfTkVXTElORTogJ3Jlc2VydmVkLW5ld2xpbmUnLFxyXG4gIE9QRVJBVE9SOiAnb3BlcmF0b3InLFxyXG4gIE9QRU5fUEFSRU46ICdvcGVuLXBhcmVuJyxcclxuICBDTE9TRV9QQVJFTjogJ2Nsb3NlLXBhcmVuJyxcclxuICBMSU5FX0NPTU1FTlQ6ICdsaW5lLWNvbW1lbnQnLFxyXG4gIEJMT0NLX0NPTU1FTlQ6ICdibG9jay1jb21tZW50JyxcclxuICBOVU1CRVI6ICdudW1iZXInLFxyXG4gIFBMQUNFSE9MREVSOiAncGxhY2Vob2xkZXInLFxyXG59O1xyXG4iLCJpbXBvcnQgRm9ybWF0dGVyIGZyb20gJy4uL2NvcmUvRm9ybWF0dGVyJztcclxuaW1wb3J0IFRva2VuaXplciBmcm9tICcuLi9jb3JlL1Rva2VuaXplcic7XHJcblxyXG5jb25zdCByZXNlcnZlZFdvcmRzID0gW1xyXG4gICdBQlMnLFxyXG4gICdBQ1RJVkFURScsXHJcbiAgJ0FMSUFTJyxcclxuICAnQUxMJyxcclxuICAnQUxMT0NBVEUnLFxyXG4gICdBTExPVycsXHJcbiAgJ0FMVEVSJyxcclxuICAnQU5ZJyxcclxuICAnQVJFJyxcclxuICAnQVJSQVknLFxyXG4gICdBUycsXHJcbiAgJ0FTQycsXHJcbiAgJ0FTRU5TSVRJVkUnLFxyXG4gICdBU1NPQ0lBVEUnLFxyXG4gICdBU1VUSU1FJyxcclxuICAnQVNZTU1FVFJJQycsXHJcbiAgJ0FUJyxcclxuICAnQVRPTUlDJyxcclxuICAnQVRUUklCVVRFUycsXHJcbiAgJ0FVRElUJyxcclxuICAnQVVUSE9SSVpBVElPTicsXHJcbiAgJ0FVWCcsXHJcbiAgJ0FVWElMSUFSWScsXHJcbiAgJ0FWRycsXHJcbiAgJ0JFRk9SRScsXHJcbiAgJ0JFR0lOJyxcclxuICAnQkVUV0VFTicsXHJcbiAgJ0JJR0lOVCcsXHJcbiAgJ0JJTkFSWScsXHJcbiAgJ0JMT0InLFxyXG4gICdCT09MRUFOJyxcclxuICAnQk9USCcsXHJcbiAgJ0JVRkZFUlBPT0wnLFxyXG4gICdCWScsXHJcbiAgJ0NBQ0hFJyxcclxuICAnQ0FMTCcsXHJcbiAgJ0NBTExFRCcsXHJcbiAgJ0NBUFRVUkUnLFxyXG4gICdDQVJESU5BTElUWScsXHJcbiAgJ0NBU0NBREVEJyxcclxuICAnQ0FTRScsXHJcbiAgJ0NBU1QnLFxyXG4gICdDQ1NJRCcsXHJcbiAgJ0NFSUwnLFxyXG4gICdDRUlMSU5HJyxcclxuICAnQ0hBUicsXHJcbiAgJ0NIQVJBQ1RFUicsXHJcbiAgJ0NIQVJBQ1RFUl9MRU5HVEgnLFxyXG4gICdDSEFSX0xFTkdUSCcsXHJcbiAgJ0NIRUNLJyxcclxuICAnQ0xPQicsXHJcbiAgJ0NMT05FJyxcclxuICAnQ0xPU0UnLFxyXG4gICdDTFVTVEVSJyxcclxuICAnQ09BTEVTQ0UnLFxyXG4gICdDT0xMQVRFJyxcclxuICAnQ09MTEVDVCcsXHJcbiAgJ0NPTExFQ1RJT04nLFxyXG4gICdDT0xMSUQnLFxyXG4gICdDT0xVTU4nLFxyXG4gICdDT01NRU5UJyxcclxuICAnQ09NTUlUJyxcclxuICAnQ09OQ0FUJyxcclxuICAnQ09ORElUSU9OJyxcclxuICAnQ09OTkVDVCcsXHJcbiAgJ0NPTk5FQ1RJT04nLFxyXG4gICdDT05TVFJBSU5UJyxcclxuICAnQ09OVEFJTlMnLFxyXG4gICdDT05USU5VRScsXHJcbiAgJ0NPTlZFUlQnLFxyXG4gICdDT1JSJyxcclxuICAnQ09SUkVTUE9ORElORycsXHJcbiAgJ0NPVU5UJyxcclxuICAnQ09VTlRfQklHJyxcclxuICAnQ09WQVJfUE9QJyxcclxuICAnQ09WQVJfU0FNUCcsXHJcbiAgJ0NSRUFURScsXHJcbiAgJ0NST1NTJyxcclxuICAnQ1VCRScsXHJcbiAgJ0NVTUVfRElTVCcsXHJcbiAgJ0NVUlJFTlQnLFxyXG4gICdDVVJSRU5UX0RBVEUnLFxyXG4gICdDVVJSRU5UX0RFRkFVTFRfVFJBTlNGT1JNX0dST1VQJyxcclxuICAnQ1VSUkVOVF9MQ19DVFlQRScsXHJcbiAgJ0NVUlJFTlRfUEFUSCcsXHJcbiAgJ0NVUlJFTlRfUk9MRScsXHJcbiAgJ0NVUlJFTlRfU0NIRU1BJyxcclxuICAnQ1VSUkVOVF9TRVJWRVInLFxyXG4gICdDVVJSRU5UX1RJTUUnLFxyXG4gICdDVVJSRU5UX1RJTUVTVEFNUCcsXHJcbiAgJ0NVUlJFTlRfVElNRVpPTkUnLFxyXG4gICdDVVJSRU5UX1RSQU5TRk9STV9HUk9VUF9GT1JfVFlQRScsXHJcbiAgJ0NVUlJFTlRfVVNFUicsXHJcbiAgJ0NVUlNPUicsXHJcbiAgJ0NZQ0xFJyxcclxuICAnREFUQScsXHJcbiAgJ0RBVEFCQVNFJyxcclxuICAnREFUQVBBUlRJVElPTk5BTUUnLFxyXG4gICdEQVRBUEFSVElUSU9OTlVNJyxcclxuICAnREFURScsXHJcbiAgJ0RBWScsXHJcbiAgJ0RBWVMnLFxyXG4gICdEQjJHRU5FUkFMJyxcclxuICAnREIyR0VOUkwnLFxyXG4gICdEQjJTUUwnLFxyXG4gICdEQklORk8nLFxyXG4gICdEQlBBUlRJVElPTk5BTUUnLFxyXG4gICdEQlBBUlRJVElPTk5VTScsXHJcbiAgJ0RFQUxMT0NBVEUnLFxyXG4gICdERUMnLFxyXG4gICdERUNJTUFMJyxcclxuICAnREVDTEFSRScsXHJcbiAgJ0RFRkFVTFQnLFxyXG4gICdERUZBVUxUUycsXHJcbiAgJ0RFRklOSVRJT04nLFxyXG4gICdERUxFVEUnLFxyXG4gICdERU5TRVJBTksnLFxyXG4gICdERU5TRV9SQU5LJyxcclxuICAnREVSRUYnLFxyXG4gICdERVNDUklCRScsXHJcbiAgJ0RFU0NSSVBUT1InLFxyXG4gICdERVRFUk1JTklTVElDJyxcclxuICAnRElBR05PU1RJQ1MnLFxyXG4gICdESVNBQkxFJyxcclxuICAnRElTQUxMT1cnLFxyXG4gICdESVNDT05ORUNUJyxcclxuICAnRElTVElOQ1QnLFxyXG4gICdETycsXHJcbiAgJ0RPQ1VNRU5UJyxcclxuICAnRE9VQkxFJyxcclxuICAnRFJPUCcsXHJcbiAgJ0RTU0laRScsXHJcbiAgJ0RZTkFNSUMnLFxyXG4gICdFQUNIJyxcclxuICAnRURJVFBST0MnLFxyXG4gICdFTEVNRU5UJyxcclxuICAnRUxTRScsXHJcbiAgJ0VMU0VJRicsXHJcbiAgJ0VOQUJMRScsXHJcbiAgJ0VOQ09ESU5HJyxcclxuICAnRU5DUllQVElPTicsXHJcbiAgJ0VORCcsXHJcbiAgJ0VORC1FWEVDJyxcclxuICAnRU5ESU5HJyxcclxuICAnRVJBU0UnLFxyXG4gICdFU0NBUEUnLFxyXG4gICdFVkVSWScsXHJcbiAgJ0VYQ0VQVElPTicsXHJcbiAgJ0VYQ0xVRElORycsXHJcbiAgJ0VYQ0xVU0lWRScsXHJcbiAgJ0VYRUMnLFxyXG4gICdFWEVDVVRFJyxcclxuICAnRVhJU1RTJyxcclxuICAnRVhJVCcsXHJcbiAgJ0VYUCcsXHJcbiAgJ0VYUExBSU4nLFxyXG4gICdFWFRFTkRFRCcsXHJcbiAgJ0VYVEVSTkFMJyxcclxuICAnRVhUUkFDVCcsXHJcbiAgJ0ZBTFNFJyxcclxuICAnRkVOQ0VEJyxcclxuICAnRkVUQ0gnLFxyXG4gICdGSUVMRFBST0MnLFxyXG4gICdGSUxFJyxcclxuICAnRklMVEVSJyxcclxuICAnRklOQUwnLFxyXG4gICdGSVJTVCcsXHJcbiAgJ0ZMT0FUJyxcclxuICAnRkxPT1InLFxyXG4gICdGT1InLFxyXG4gICdGT1JFSUdOJyxcclxuICAnRlJFRScsXHJcbiAgJ0ZVTEwnLFxyXG4gICdGVU5DVElPTicsXHJcbiAgJ0ZVU0lPTicsXHJcbiAgJ0dFTkVSQUwnLFxyXG4gICdHRU5FUkFURUQnLFxyXG4gICdHRVQnLFxyXG4gICdHTE9CQUwnLFxyXG4gICdHT1RPJyxcclxuICAnR1JBTlQnLFxyXG4gICdHUkFQSElDJyxcclxuICAnR1JPVVAnLFxyXG4gICdHUk9VUElORycsXHJcbiAgJ0hBTkRMRVInLFxyXG4gICdIQVNIJyxcclxuICAnSEFTSEVEX1ZBTFVFJyxcclxuICAnSElOVCcsXHJcbiAgJ0hPTEQnLFxyXG4gICdIT1VSJyxcclxuICAnSE9VUlMnLFxyXG4gICdJREVOVElUWScsXHJcbiAgJ0lGJyxcclxuICAnSU1NRURJQVRFJyxcclxuICAnSU4nLFxyXG4gICdJTkNMVURJTkcnLFxyXG4gICdJTkNMVVNJVkUnLFxyXG4gICdJTkNSRU1FTlQnLFxyXG4gICdJTkRFWCcsXHJcbiAgJ0lORElDQVRPUicsXHJcbiAgJ0lORElDQVRPUlMnLFxyXG4gICdJTkYnLFxyXG4gICdJTkZJTklUWScsXHJcbiAgJ0lOSEVSSVQnLFxyXG4gICdJTk5FUicsXHJcbiAgJ0lOT1VUJyxcclxuICAnSU5TRU5TSVRJVkUnLFxyXG4gICdJTlNFUlQnLFxyXG4gICdJTlQnLFxyXG4gICdJTlRFR0VSJyxcclxuICAnSU5URUdSSVRZJyxcclxuICAnSU5URVJTRUNUSU9OJyxcclxuICAnSU5URVJWQUwnLFxyXG4gICdJTlRPJyxcclxuICAnSVMnLFxyXG4gICdJU09CSUQnLFxyXG4gICdJU09MQVRJT04nLFxyXG4gICdJVEVSQVRFJyxcclxuICAnSkFSJyxcclxuICAnSkFWQScsXHJcbiAgJ0tFRVAnLFxyXG4gICdLRVknLFxyXG4gICdMQUJFTCcsXHJcbiAgJ0xBTkdVQUdFJyxcclxuICAnTEFSR0UnLFxyXG4gICdMQVRFUkFMJyxcclxuICAnTENfQ1RZUEUnLFxyXG4gICdMRUFESU5HJyxcclxuICAnTEVBVkUnLFxyXG4gICdMRUZUJyxcclxuICAnTElLRScsXHJcbiAgJ0xJTktUWVBFJyxcclxuICAnTE4nLFxyXG4gICdMT0NBTCcsXHJcbiAgJ0xPQ0FMREFURScsXHJcbiAgJ0xPQ0FMRScsXHJcbiAgJ0xPQ0FMVElNRScsXHJcbiAgJ0xPQ0FMVElNRVNUQU1QJyxcclxuICAnTE9DQVRPUicsXHJcbiAgJ0xPQ0FUT1JTJyxcclxuICAnTE9DSycsXHJcbiAgJ0xPQ0tNQVgnLFxyXG4gICdMT0NLU0laRScsXHJcbiAgJ0xPTkcnLFxyXG4gICdMT09QJyxcclxuICAnTE9XRVInLFxyXG4gICdNQUlOVEFJTkVEJyxcclxuICAnTUFUQ0gnLFxyXG4gICdNQVRFUklBTElaRUQnLFxyXG4gICdNQVgnLFxyXG4gICdNQVhWQUxVRScsXHJcbiAgJ01FTUJFUicsXHJcbiAgJ01FUkdFJyxcclxuICAnTUVUSE9EJyxcclxuICAnTUlDUk9TRUNPTkQnLFxyXG4gICdNSUNST1NFQ09ORFMnLFxyXG4gICdNSU4nLFxyXG4gICdNSU5VVEUnLFxyXG4gICdNSU5VVEVTJyxcclxuICAnTUlOVkFMVUUnLFxyXG4gICdNT0QnLFxyXG4gICdNT0RFJyxcclxuICAnTU9ESUZJRVMnLFxyXG4gICdNT0RVTEUnLFxyXG4gICdNT05USCcsXHJcbiAgJ01PTlRIUycsXHJcbiAgJ01VTFRJU0VUJyxcclxuICAnTkFOJyxcclxuICAnTkFUSU9OQUwnLFxyXG4gICdOQVRVUkFMJyxcclxuICAnTkNIQVInLFxyXG4gICdOQ0xPQicsXHJcbiAgJ05FVycsXHJcbiAgJ05FV19UQUJMRScsXHJcbiAgJ05FWFRWQUwnLFxyXG4gICdOTycsXHJcbiAgJ05PQ0FDSEUnLFxyXG4gICdOT0NZQ0xFJyxcclxuICAnTk9ERU5BTUUnLFxyXG4gICdOT0RFTlVNQkVSJyxcclxuICAnTk9NQVhWQUxVRScsXHJcbiAgJ05PTUlOVkFMVUUnLFxyXG4gICdOT05FJyxcclxuICAnTk9PUkRFUicsXHJcbiAgJ05PUk1BTElaRScsXHJcbiAgJ05PUk1BTElaRUQnLFxyXG4gICdOT1QnLFxyXG4gICdOVUxMJyxcclxuICAnTlVMTElGJyxcclxuICAnTlVMTFMnLFxyXG4gICdOVU1FUklDJyxcclxuICAnTlVNUEFSVFMnLFxyXG4gICdPQklEJyxcclxuICAnT0NURVRfTEVOR1RIJyxcclxuICAnT0YnLFxyXG4gICdPRkZTRVQnLFxyXG4gICdPTEQnLFxyXG4gICdPTERfVEFCTEUnLFxyXG4gICdPTicsXHJcbiAgJ09OTFknLFxyXG4gICdPUEVOJyxcclxuICAnT1BUSU1JWkFUSU9OJyxcclxuICAnT1BUSU1JWkUnLFxyXG4gICdPUFRJT04nLFxyXG4gICdPUkRFUicsXHJcbiAgJ09VVCcsXHJcbiAgJ09VVEVSJyxcclxuICAnT1ZFUicsXHJcbiAgJ09WRVJMQVBTJyxcclxuICAnT1ZFUkxBWScsXHJcbiAgJ09WRVJSSURJTkcnLFxyXG4gICdQQUNLQUdFJyxcclxuICAnUEFEREVEJyxcclxuICAnUEFHRVNJWkUnLFxyXG4gICdQQVJBTUVURVInLFxyXG4gICdQQVJUJyxcclxuICAnUEFSVElUSU9OJyxcclxuICAnUEFSVElUSU9ORUQnLFxyXG4gICdQQVJUSVRJT05JTkcnLFxyXG4gICdQQVJUSVRJT05TJyxcclxuICAnUEFTU1dPUkQnLFxyXG4gICdQQVRIJyxcclxuICAnUEVSQ0VOVElMRV9DT05UJyxcclxuICAnUEVSQ0VOVElMRV9ESVNDJyxcclxuICAnUEVSQ0VOVF9SQU5LJyxcclxuICAnUElFQ0VTSVpFJyxcclxuICAnUExBTicsXHJcbiAgJ1BPU0lUSU9OJyxcclxuICAnUE9XRVInLFxyXG4gICdQUkVDSVNJT04nLFxyXG4gICdQUkVQQVJFJyxcclxuICAnUFJFVlZBTCcsXHJcbiAgJ1BSSU1BUlknLFxyXG4gICdQUklRVFknLFxyXG4gICdQUklWSUxFR0VTJyxcclxuICAnUFJPQ0VEVVJFJyxcclxuICAnUFJPR1JBTScsXHJcbiAgJ1BTSUQnLFxyXG4gICdQVUJMSUMnLFxyXG4gICdRVUVSWScsXHJcbiAgJ1FVRVJZTk8nLFxyXG4gICdSQU5HRScsXHJcbiAgJ1JBTksnLFxyXG4gICdSRUFEJyxcclxuICAnUkVBRFMnLFxyXG4gICdSRUFMJyxcclxuICAnUkVDT1ZFUlknLFxyXG4gICdSRUNVUlNJVkUnLFxyXG4gICdSRUYnLFxyXG4gICdSRUZFUkVOQ0VTJyxcclxuICAnUkVGRVJFTkNJTkcnLFxyXG4gICdSRUZSRVNIJyxcclxuICAnUkVHUl9BVkdYJyxcclxuICAnUkVHUl9BVkdZJyxcclxuICAnUkVHUl9DT1VOVCcsXHJcbiAgJ1JFR1JfSU5URVJDRVBUJyxcclxuICAnUkVHUl9SMicsXHJcbiAgJ1JFR1JfU0xPUEUnLFxyXG4gICdSRUdSX1NYWCcsXHJcbiAgJ1JFR1JfU1hZJyxcclxuICAnUkVHUl9TWVknLFxyXG4gICdSRUxFQVNFJyxcclxuICAnUkVOQU1FJyxcclxuICAnUkVQRUFUJyxcclxuICAnUkVTRVQnLFxyXG4gICdSRVNJR05BTCcsXHJcbiAgJ1JFU1RBUlQnLFxyXG4gICdSRVNUUklDVCcsXHJcbiAgJ1JFU1VMVCcsXHJcbiAgJ1JFU1VMVF9TRVRfTE9DQVRPUicsXHJcbiAgJ1JFVFVSTicsXHJcbiAgJ1JFVFVSTlMnLFxyXG4gICdSRVZPS0UnLFxyXG4gICdSSUdIVCcsXHJcbiAgJ1JPTEUnLFxyXG4gICdST0xMQkFDSycsXHJcbiAgJ1JPTExVUCcsXHJcbiAgJ1JPVU5EX0NFSUxJTkcnLFxyXG4gICdST1VORF9ET1dOJyxcclxuICAnUk9VTkRfRkxPT1InLFxyXG4gICdST1VORF9IQUxGX0RPV04nLFxyXG4gICdST1VORF9IQUxGX0VWRU4nLFxyXG4gICdST1VORF9IQUxGX1VQJyxcclxuICAnUk9VTkRfVVAnLFxyXG4gICdST1VUSU5FJyxcclxuICAnUk9XJyxcclxuICAnUk9XTlVNQkVSJyxcclxuICAnUk9XUycsXHJcbiAgJ1JPV1NFVCcsXHJcbiAgJ1JPV19OVU1CRVInLFxyXG4gICdSUk4nLFxyXG4gICdSVU4nLFxyXG4gICdTQVZFUE9JTlQnLFxyXG4gICdTQ0hFTUEnLFxyXG4gICdTQ09QRScsXHJcbiAgJ1NDUkFUQ0hQQUQnLFxyXG4gICdTQ1JPTEwnLFxyXG4gICdTRUFSQ0gnLFxyXG4gICdTRUNPTkQnLFxyXG4gICdTRUNPTkRTJyxcclxuICAnU0VDUVRZJyxcclxuICAnU0VDVVJJVFknLFxyXG4gICdTRU5TSVRJVkUnLFxyXG4gICdTRVFVRU5DRScsXHJcbiAgJ1NFU1NJT04nLFxyXG4gICdTRVNTSU9OX1VTRVInLFxyXG4gICdTSUdOQUwnLFxyXG4gICdTSU1JTEFSJyxcclxuICAnU0lNUExFJyxcclxuICAnU01BTExJTlQnLFxyXG4gICdTTkFOJyxcclxuICAnU09NRScsXHJcbiAgJ1NPVVJDRScsXHJcbiAgJ1NQRUNJRklDJyxcclxuICAnU1BFQ0lGSUNUWVBFJyxcclxuICAnU1FMJyxcclxuICAnU1FMRVhDRVBUSU9OJyxcclxuICAnU1FMSUQnLFxyXG4gICdTUUxTVEFURScsXHJcbiAgJ1NRTFdBUk5JTkcnLFxyXG4gICdTUVJUJyxcclxuICAnU1RBQ0tFRCcsXHJcbiAgJ1NUQU5EQVJEJyxcclxuICAnU1RBUlQnLFxyXG4gICdTVEFSVElORycsXHJcbiAgJ1NUQVRFTUVOVCcsXHJcbiAgJ1NUQVRJQycsXHJcbiAgJ1NUQVRNRU5UJyxcclxuICAnU1RBWScsXHJcbiAgJ1NURERFVl9QT1AnLFxyXG4gICdTVERERVZfU0FNUCcsXHJcbiAgJ1NUT0dST1VQJyxcclxuICAnU1RPUkVTJyxcclxuICAnU1RZTEUnLFxyXG4gICdTVUJNVUxUSVNFVCcsXHJcbiAgJ1NVQlNUUklORycsXHJcbiAgJ1NVTScsXHJcbiAgJ1NVTU1BUlknLFxyXG4gICdTWU1NRVRSSUMnLFxyXG4gICdTWU5PTllNJyxcclxuICAnU1lTRlVOJyxcclxuICAnU1lTSUJNJyxcclxuICAnU1lTUFJPQycsXHJcbiAgJ1NZU1RFTScsXHJcbiAgJ1NZU1RFTV9VU0VSJyxcclxuICAnVEFCTEUnLFxyXG4gICdUQUJMRVNBTVBMRScsXHJcbiAgJ1RBQkxFU1BBQ0UnLFxyXG4gICdUSEVOJyxcclxuICAnVElNRScsXHJcbiAgJ1RJTUVTVEFNUCcsXHJcbiAgJ1RJTUVaT05FX0hPVVInLFxyXG4gICdUSU1FWk9ORV9NSU5VVEUnLFxyXG4gICdUTycsXHJcbiAgJ1RSQUlMSU5HJyxcclxuICAnVFJBTlNBQ1RJT04nLFxyXG4gICdUUkFOU0xBVEUnLFxyXG4gICdUUkFOU0xBVElPTicsXHJcbiAgJ1RSRUFUJyxcclxuICAnVFJJR0dFUicsXHJcbiAgJ1RSSU0nLFxyXG4gICdUUlVFJyxcclxuICAnVFJVTkNBVEUnLFxyXG4gICdUWVBFJyxcclxuICAnVUVTQ0FQRScsXHJcbiAgJ1VORE8nLFxyXG4gICdVTklRVUUnLFxyXG4gICdVTktOT1dOJyxcclxuICAnVU5ORVNUJyxcclxuICAnVU5USUwnLFxyXG4gICdVUFBFUicsXHJcbiAgJ1VTQUdFJyxcclxuICAnVVNFUicsXHJcbiAgJ1VTSU5HJyxcclxuICAnVkFMSURQUk9DJyxcclxuICAnVkFMVUUnLFxyXG4gICdWQVJDSEFSJyxcclxuICAnVkFSSUFCTEUnLFxyXG4gICdWQVJJQU5UJyxcclxuICAnVkFSWUlORycsXHJcbiAgJ1ZBUl9QT1AnLFxyXG4gICdWQVJfU0FNUCcsXHJcbiAgJ1ZDQVQnLFxyXG4gICdWRVJTSU9OJyxcclxuICAnVklFVycsXHJcbiAgJ1ZPTEFUSUxFJyxcclxuICAnVk9MVU1FUycsXHJcbiAgJ1dIRU4nLFxyXG4gICdXSEVORVZFUicsXHJcbiAgJ1dISUxFJyxcclxuICAnV0lEVEhfQlVDS0VUJyxcclxuICAnV0lORE9XJyxcclxuICAnV0lUSCcsXHJcbiAgJ1dJVEhJTicsXHJcbiAgJ1dJVEhPVVQnLFxyXG4gICdXTE0nLFxyXG4gICdXUklURScsXHJcbiAgJ1hNTEVMRU1FTlQnLFxyXG4gICdYTUxFWElTVFMnLFxyXG4gICdYTUxOQU1FU1BBQ0VTJyxcclxuICAnWUVBUicsXHJcbiAgJ1lFQVJTJyxcclxuXTtcclxuXHJcbmNvbnN0IHJlc2VydmVkVG9wTGV2ZWxXb3JkcyA9IFtcclxuICAnQUREJyxcclxuICAnQUZURVInLFxyXG4gICdBTFRFUiBDT0xVTU4nLFxyXG4gICdBTFRFUiBUQUJMRScsXHJcbiAgJ0RFTEVURSBGUk9NJyxcclxuICAnRVhDRVBUJyxcclxuICAnRkVUQ0ggRklSU1QnLFxyXG4gICdGUk9NJyxcclxuICAnR1JPVVAgQlknLFxyXG4gICdHTycsXHJcbiAgJ0hBVklORycsXHJcbiAgJ0lOU0VSVCBJTlRPJyxcclxuICAnSU5URVJTRUNUJyxcclxuICAnTElNSVQnLFxyXG4gICdPUkRFUiBCWScsXHJcbiAgJ1NFTEVDVCcsXHJcbiAgJ1NFVCBDVVJSRU5UIFNDSEVNQScsXHJcbiAgJ1NFVCBTQ0hFTUEnLFxyXG4gICdTRVQnLFxyXG4gICdVUERBVEUnLFxyXG4gICdWQUxVRVMnLFxyXG4gICdXSEVSRScsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCA9IFsnSU5URVJTRUNUJywgJ0lOVEVSU0VDVCBBTEwnLCAnTUlOVVMnLCAnVU5JT04nLCAnVU5JT04gQUxMJ107XHJcblxyXG5jb25zdCByZXNlcnZlZE5ld2xpbmVXb3JkcyA9IFtcclxuICAnQU5EJyxcclxuICAnT1InLFxyXG4gIC8vIGpvaW5zXHJcbiAgJ0pPSU4nLFxyXG4gICdJTk5FUiBKT0lOJyxcclxuICAnTEVGVCBKT0lOJyxcclxuICAnTEVGVCBPVVRFUiBKT0lOJyxcclxuICAnUklHSFQgSk9JTicsXHJcbiAgJ1JJR0hUIE9VVEVSIEpPSU4nLFxyXG4gICdGVUxMIEpPSU4nLFxyXG4gICdGVUxMIE9VVEVSIEpPSU4nLFxyXG4gICdDUk9TUyBKT0lOJyxcclxuICAnTkFUVVJBTCBKT0lOJyxcclxuXTtcclxuXHJcbi8vIEZvciByZWZlcmVuY2U6IGh0dHBzOi8vd3d3LmlibS5jb20vc3VwcG9ydC9rbm93bGVkZ2VjZW50ZXIvZW4vc3N3X2libV9pXzcyL2RiMi9yYmFmemludHJvLmh0bVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYjJGb3JtYXR0ZXIgZXh0ZW5kcyBGb3JtYXR0ZXIge1xyXG4gIHRva2VuaXplcigpIHtcclxuICAgIHJldHVybiBuZXcgVG9rZW5pemVyKHtcclxuICAgICAgcmVzZXJ2ZWRXb3JkcyxcclxuICAgICAgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzLFxyXG4gICAgICByZXNlcnZlZE5ld2xpbmVXb3JkcyxcclxuICAgICAgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzTm9JbmRlbnQsXHJcbiAgICAgIHN0cmluZ1R5cGVzOiBbYFwiXCJgLCBcIicnXCIsICdgYCcsICdbXSddLFxyXG4gICAgICBvcGVuUGFyZW5zOiBbJygnXSxcclxuICAgICAgY2xvc2VQYXJlbnM6IFsnKSddLFxyXG4gICAgICBpbmRleGVkUGxhY2Vob2xkZXJUeXBlczogWyc/J10sXHJcbiAgICAgIG5hbWVkUGxhY2Vob2xkZXJUeXBlczogWyc6J10sXHJcbiAgICAgIGxpbmVDb21tZW50VHlwZXM6IFsnLS0nXSxcclxuICAgICAgc3BlY2lhbFdvcmRDaGFyczogWycjJywgJ0AnXSxcclxuICAgICAgb3BlcmF0b3JzOiBbJyoqJywgJyE9JywgJyE+JywgJyE+JywgJ3x8J10sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEZvcm1hdHRlciBmcm9tICcuLi9jb3JlL0Zvcm1hdHRlcic7XHJcbmltcG9ydCBUb2tlbml6ZXIgZnJvbSAnLi4vY29yZS9Ub2tlbml6ZXInO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWRXb3JkcyA9IFtcclxuICAnQUNDRVNTSUJMRScsXHJcbiAgJ0FERCcsXHJcbiAgJ0FMTCcsXHJcbiAgJ0FMVEVSJyxcclxuICAnQU5BTFlaRScsXHJcbiAgJ0FORCcsXHJcbiAgJ0FTJyxcclxuICAnQVNDJyxcclxuICAnQVNFTlNJVElWRScsXHJcbiAgJ0JFRk9SRScsXHJcbiAgJ0JFVFdFRU4nLFxyXG4gICdCSUdJTlQnLFxyXG4gICdCSU5BUlknLFxyXG4gICdCTE9CJyxcclxuICAnQk9USCcsXHJcbiAgJ0JZJyxcclxuICAnQ0FMTCcsXHJcbiAgJ0NBU0NBREUnLFxyXG4gICdDQVNFJyxcclxuICAnQ0hBTkdFJyxcclxuICAnQ0hBUicsXHJcbiAgJ0NIQVJBQ1RFUicsXHJcbiAgJ0NIRUNLJyxcclxuICAnQ09MTEFURScsXHJcbiAgJ0NPTFVNTicsXHJcbiAgJ0NPTkRJVElPTicsXHJcbiAgJ0NPTlNUUkFJTlQnLFxyXG4gICdDT05USU5VRScsXHJcbiAgJ0NPTlZFUlQnLFxyXG4gICdDUkVBVEUnLFxyXG4gICdDUk9TUycsXHJcbiAgJ0NVUlJFTlRfREFURScsXHJcbiAgJ0NVUlJFTlRfUk9MRScsXHJcbiAgJ0NVUlJFTlRfVElNRScsXHJcbiAgJ0NVUlJFTlRfVElNRVNUQU1QJyxcclxuICAnQ1VSUkVOVF9VU0VSJyxcclxuICAnQ1VSU09SJyxcclxuICAnREFUQUJBU0UnLFxyXG4gICdEQVRBQkFTRVMnLFxyXG4gICdEQVlfSE9VUicsXHJcbiAgJ0RBWV9NSUNST1NFQ09ORCcsXHJcbiAgJ0RBWV9NSU5VVEUnLFxyXG4gICdEQVlfU0VDT05EJyxcclxuICAnREVDJyxcclxuICAnREVDSU1BTCcsXHJcbiAgJ0RFQ0xBUkUnLFxyXG4gICdERUZBVUxUJyxcclxuICAnREVMQVlFRCcsXHJcbiAgJ0RFTEVURScsXHJcbiAgJ0RFU0MnLFxyXG4gICdERVNDUklCRScsXHJcbiAgJ0RFVEVSTUlOSVNUSUMnLFxyXG4gICdESVNUSU5DVCcsXHJcbiAgJ0RJU1RJTkNUUk9XJyxcclxuICAnRElWJyxcclxuICAnRE9fRE9NQUlOX0lEUycsXHJcbiAgJ0RPVUJMRScsXHJcbiAgJ0RST1AnLFxyXG4gICdEVUFMJyxcclxuICAnRUFDSCcsXHJcbiAgJ0VMU0UnLFxyXG4gICdFTFNFSUYnLFxyXG4gICdFTkNMT1NFRCcsXHJcbiAgJ0VTQ0FQRUQnLFxyXG4gICdFWENFUFQnLFxyXG4gICdFWElTVFMnLFxyXG4gICdFWElUJyxcclxuICAnRVhQTEFJTicsXHJcbiAgJ0ZBTFNFJyxcclxuICAnRkVUQ0gnLFxyXG4gICdGTE9BVCcsXHJcbiAgJ0ZMT0FUNCcsXHJcbiAgJ0ZMT0FUOCcsXHJcbiAgJ0ZPUicsXHJcbiAgJ0ZPUkNFJyxcclxuICAnRk9SRUlHTicsXHJcbiAgJ0ZST00nLFxyXG4gICdGVUxMVEVYVCcsXHJcbiAgJ0dFTkVSQUwnLFxyXG4gICdHUkFOVCcsXHJcbiAgJ0dST1VQJyxcclxuICAnSEFWSU5HJyxcclxuICAnSElHSF9QUklPUklUWScsXHJcbiAgJ0hPVVJfTUlDUk9TRUNPTkQnLFxyXG4gICdIT1VSX01JTlVURScsXHJcbiAgJ0hPVVJfU0VDT05EJyxcclxuICAnSUYnLFxyXG4gICdJR05PUkUnLFxyXG4gICdJR05PUkVfRE9NQUlOX0lEUycsXHJcbiAgJ0lHTk9SRV9TRVJWRVJfSURTJyxcclxuICAnSU4nLFxyXG4gICdJTkRFWCcsXHJcbiAgJ0lORklMRScsXHJcbiAgJ0lOTkVSJyxcclxuICAnSU5PVVQnLFxyXG4gICdJTlNFTlNJVElWRScsXHJcbiAgJ0lOU0VSVCcsXHJcbiAgJ0lOVCcsXHJcbiAgJ0lOVDEnLFxyXG4gICdJTlQyJyxcclxuICAnSU5UMycsXHJcbiAgJ0lOVDQnLFxyXG4gICdJTlQ4JyxcclxuICAnSU5URUdFUicsXHJcbiAgJ0lOVEVSU0VDVCcsXHJcbiAgJ0lOVEVSVkFMJyxcclxuICAnSU5UTycsXHJcbiAgJ0lTJyxcclxuICAnSVRFUkFURScsXHJcbiAgJ0pPSU4nLFxyXG4gICdLRVknLFxyXG4gICdLRVlTJyxcclxuICAnS0lMTCcsXHJcbiAgJ0xFQURJTkcnLFxyXG4gICdMRUFWRScsXHJcbiAgJ0xFRlQnLFxyXG4gICdMSUtFJyxcclxuICAnTElNSVQnLFxyXG4gICdMSU5FQVInLFxyXG4gICdMSU5FUycsXHJcbiAgJ0xPQUQnLFxyXG4gICdMT0NBTFRJTUUnLFxyXG4gICdMT0NBTFRJTUVTVEFNUCcsXHJcbiAgJ0xPQ0snLFxyXG4gICdMT05HJyxcclxuICAnTE9OR0JMT0InLFxyXG4gICdMT05HVEVYVCcsXHJcbiAgJ0xPT1AnLFxyXG4gICdMT1dfUFJJT1JJVFknLFxyXG4gICdNQVNURVJfSEVBUlRCRUFUX1BFUklPRCcsXHJcbiAgJ01BU1RFUl9TU0xfVkVSSUZZX1NFUlZFUl9DRVJUJyxcclxuICAnTUFUQ0gnLFxyXG4gICdNQVhWQUxVRScsXHJcbiAgJ01FRElVTUJMT0InLFxyXG4gICdNRURJVU1JTlQnLFxyXG4gICdNRURJVU1URVhUJyxcclxuICAnTUlERExFSU5UJyxcclxuICAnTUlOVVRFX01JQ1JPU0VDT05EJyxcclxuICAnTUlOVVRFX1NFQ09ORCcsXHJcbiAgJ01PRCcsXHJcbiAgJ01PRElGSUVTJyxcclxuICAnTkFUVVJBTCcsXHJcbiAgJ05PVCcsXHJcbiAgJ05PX1dSSVRFX1RPX0JJTkxPRycsXHJcbiAgJ05VTEwnLFxyXG4gICdOVU1FUklDJyxcclxuICAnT04nLFxyXG4gICdPUFRJTUlaRScsXHJcbiAgJ09QVElPTicsXHJcbiAgJ09QVElPTkFMTFknLFxyXG4gICdPUicsXHJcbiAgJ09SREVSJyxcclxuICAnT1VUJyxcclxuICAnT1VURVInLFxyXG4gICdPVVRGSUxFJyxcclxuICAnT1ZFUicsXHJcbiAgJ1BBR0VfQ0hFQ0tTVU0nLFxyXG4gICdQQVJTRV9WQ09MX0VYUFInLFxyXG4gICdQQVJUSVRJT04nLFxyXG4gICdQT1NJVElPTicsXHJcbiAgJ1BSRUNJU0lPTicsXHJcbiAgJ1BSSU1BUlknLFxyXG4gICdQUk9DRURVUkUnLFxyXG4gICdQVVJHRScsXHJcbiAgJ1JBTkdFJyxcclxuICAnUkVBRCcsXHJcbiAgJ1JFQURTJyxcclxuICAnUkVBRF9XUklURScsXHJcbiAgJ1JFQUwnLFxyXG4gICdSRUNVUlNJVkUnLFxyXG4gICdSRUZfU1lTVEVNX0lEJyxcclxuICAnUkVGRVJFTkNFUycsXHJcbiAgJ1JFR0VYUCcsXHJcbiAgJ1JFTEVBU0UnLFxyXG4gICdSRU5BTUUnLFxyXG4gICdSRVBFQVQnLFxyXG4gICdSRVBMQUNFJyxcclxuICAnUkVRVUlSRScsXHJcbiAgJ1JFU0lHTkFMJyxcclxuICAnUkVTVFJJQ1QnLFxyXG4gICdSRVRVUk4nLFxyXG4gICdSRVRVUk5JTkcnLFxyXG4gICdSRVZPS0UnLFxyXG4gICdSSUdIVCcsXHJcbiAgJ1JMSUtFJyxcclxuICAnUk9XUycsXHJcbiAgJ1NDSEVNQScsXHJcbiAgJ1NDSEVNQVMnLFxyXG4gICdTRUNPTkRfTUlDUk9TRUNPTkQnLFxyXG4gICdTRUxFQ1QnLFxyXG4gICdTRU5TSVRJVkUnLFxyXG4gICdTRVBBUkFUT1InLFxyXG4gICdTRVQnLFxyXG4gICdTSE9XJyxcclxuICAnU0lHTkFMJyxcclxuICAnU0xPVycsXHJcbiAgJ1NNQUxMSU5UJyxcclxuICAnU1BBVElBTCcsXHJcbiAgJ1NQRUNJRklDJyxcclxuICAnU1FMJyxcclxuICAnU1FMRVhDRVBUSU9OJyxcclxuICAnU1FMU1RBVEUnLFxyXG4gICdTUUxXQVJOSU5HJyxcclxuICAnU1FMX0JJR19SRVNVTFQnLFxyXG4gICdTUUxfQ0FMQ19GT1VORF9ST1dTJyxcclxuICAnU1FMX1NNQUxMX1JFU1VMVCcsXHJcbiAgJ1NTTCcsXHJcbiAgJ1NUQVJUSU5HJyxcclxuICAnU1RBVFNfQVVUT19SRUNBTEMnLFxyXG4gICdTVEFUU19QRVJTSVNURU5UJyxcclxuICAnU1RBVFNfU0FNUExFX1BBR0VTJyxcclxuICAnU1RSQUlHSFRfSk9JTicsXHJcbiAgJ1RBQkxFJyxcclxuICAnVEVSTUlOQVRFRCcsXHJcbiAgJ1RIRU4nLFxyXG4gICdUSU5ZQkxPQicsXHJcbiAgJ1RJTllJTlQnLFxyXG4gICdUSU5ZVEVYVCcsXHJcbiAgJ1RPJyxcclxuICAnVFJBSUxJTkcnLFxyXG4gICdUUklHR0VSJyxcclxuICAnVFJVRScsXHJcbiAgJ1VORE8nLFxyXG4gICdVTklPTicsXHJcbiAgJ1VOSVFVRScsXHJcbiAgJ1VOTE9DSycsXHJcbiAgJ1VOU0lHTkVEJyxcclxuICAnVVBEQVRFJyxcclxuICAnVVNBR0UnLFxyXG4gICdVU0UnLFxyXG4gICdVU0lORycsXHJcbiAgJ1VUQ19EQVRFJyxcclxuICAnVVRDX1RJTUUnLFxyXG4gICdVVENfVElNRVNUQU1QJyxcclxuICAnVkFMVUVTJyxcclxuICAnVkFSQklOQVJZJyxcclxuICAnVkFSQ0hBUicsXHJcbiAgJ1ZBUkNIQVJBQ1RFUicsXHJcbiAgJ1ZBUllJTkcnLFxyXG4gICdXSEVOJyxcclxuICAnV0hFUkUnLFxyXG4gICdXSElMRScsXHJcbiAgJ1dJTkRPVycsXHJcbiAgJ1dJVEgnLFxyXG4gICdXUklURScsXHJcbiAgJ1hPUicsXHJcbiAgJ1lFQVJfTU9OVEgnLFxyXG4gICdaRVJPRklMTCcsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHMgPSBbXHJcbiAgJ0FERCcsXHJcbiAgJ0FMVEVSIENPTFVNTicsXHJcbiAgJ0FMVEVSIFRBQkxFJyxcclxuICAnREVMRVRFIEZST00nLFxyXG4gICdFWENFUFQnLFxyXG4gICdGUk9NJyxcclxuICAnR1JPVVAgQlknLFxyXG4gICdIQVZJTkcnLFxyXG4gICdJTlNFUlQgSU5UTycsXHJcbiAgJ0lOU0VSVCcsXHJcbiAgJ0xJTUlUJyxcclxuICAnT1JERVIgQlknLFxyXG4gICdTRUxFQ1QnLFxyXG4gICdTRVQnLFxyXG4gICdVUERBVEUnLFxyXG4gICdWQUxVRVMnLFxyXG4gICdXSEVSRScsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCA9IFsnSU5URVJTRUNUJywgJ0lOVEVSU0VDVCBBTEwnLCAnVU5JT04nLCAnVU5JT04gQUxMJ107XHJcblxyXG5jb25zdCByZXNlcnZlZE5ld2xpbmVXb3JkcyA9IFtcclxuICAnQU5EJyxcclxuICAnRUxTRScsXHJcbiAgJ09SJyxcclxuICAnV0hFTicsXHJcbiAgLy8gam9pbnNcclxuICAnSk9JTicsXHJcbiAgJ0lOTkVSIEpPSU4nLFxyXG4gICdMRUZUIEpPSU4nLFxyXG4gICdMRUZUIE9VVEVSIEpPSU4nLFxyXG4gICdSSUdIVCBKT0lOJyxcclxuICAnUklHSFQgT1VURVIgSk9JTicsXHJcbiAgJ0NST1NTIEpPSU4nLFxyXG4gICdOQVRVUkFMIEpPSU4nLFxyXG4gIC8vIG5vbi1zdGFuZGFyZCBqb2luc1xyXG4gICdTVFJBSUdIVF9KT0lOJyxcclxuICAnTkFUVVJBTCBMRUZUIEpPSU4nLFxyXG4gICdOQVRVUkFMIExFRlQgT1VURVIgSk9JTicsXHJcbiAgJ05BVFVSQUwgUklHSFQgSk9JTicsXHJcbiAgJ05BVFVSQUwgUklHSFQgT1VURVIgSk9JTicsXHJcbl07XHJcblxyXG4vLyBGb3IgcmVmZXJlbmNlOiBodHRwczovL21hcmlhZGIuY29tL2tiL2VuL3NxbC1zdGF0ZW1lbnRzLXN0cnVjdHVyZS9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFyaWFEYkZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XHJcbiAgdG9rZW5pemVyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoe1xyXG4gICAgICByZXNlcnZlZFdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHMsXHJcbiAgICAgIHJlc2VydmVkTmV3bGluZVdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCxcclxuICAgICAgc3RyaW5nVHlwZXM6IFsnYGAnLCBcIicnXCIsICdcIlwiJ10sXHJcbiAgICAgIG9wZW5QYXJlbnM6IFsnKCcsICdDQVNFJ10sXHJcbiAgICAgIGNsb3NlUGFyZW5zOiBbJyknLCAnRU5EJ10sXHJcbiAgICAgIGluZGV4ZWRQbGFjZWhvbGRlclR5cGVzOiBbJz8nXSxcclxuICAgICAgbmFtZWRQbGFjZWhvbGRlclR5cGVzOiBbXSxcclxuICAgICAgbGluZUNvbW1lbnRUeXBlczogWyctLScsICcjJ10sXHJcbiAgICAgIHNwZWNpYWxXb3JkQ2hhcnM6IFsnQCddLFxyXG4gICAgICBvcGVyYXRvcnM6IFsnOj0nLCAnPDwnLCAnPj4nLCAnIT0nLCAnPD4nLCAnPD0+JywgJyYmJywgJ3x8J10sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEZvcm1hdHRlciBmcm9tICcuLi9jb3JlL0Zvcm1hdHRlcic7XHJcbmltcG9ydCBUb2tlbml6ZXIgZnJvbSAnLi4vY29yZS9Ub2tlbml6ZXInO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWRXb3JkcyA9IFtcclxuICAnQUNDRVNTSUJMRScsXHJcbiAgJ0FERCcsXHJcbiAgJ0FMTCcsXHJcbiAgJ0FMVEVSJyxcclxuICAnQU5BTFlaRScsXHJcbiAgJ0FORCcsXHJcbiAgJ0FTJyxcclxuICAnQVNDJyxcclxuICAnQVNFTlNJVElWRScsXHJcbiAgJ0JFRk9SRScsXHJcbiAgJ0JFVFdFRU4nLFxyXG4gICdCSUdJTlQnLFxyXG4gICdCSU5BUlknLFxyXG4gICdCTE9CJyxcclxuICAnQk9USCcsXHJcbiAgJ0JZJyxcclxuICAnQ0FMTCcsXHJcbiAgJ0NBU0NBREUnLFxyXG4gICdDQVNFJyxcclxuICAnQ0hBTkdFJyxcclxuICAnQ0hBUicsXHJcbiAgJ0NIQVJBQ1RFUicsXHJcbiAgJ0NIRUNLJyxcclxuICAnQ09MTEFURScsXHJcbiAgJ0NPTFVNTicsXHJcbiAgJ0NPTkRJVElPTicsXHJcbiAgJ0NPTlNUUkFJTlQnLFxyXG4gICdDT05USU5VRScsXHJcbiAgJ0NPTlZFUlQnLFxyXG4gICdDUkVBVEUnLFxyXG4gICdDUk9TUycsXHJcbiAgJ0NVQkUnLFxyXG4gICdDVU1FX0RJU1QnLFxyXG4gICdDVVJSRU5UX0RBVEUnLFxyXG4gICdDVVJSRU5UX1RJTUUnLFxyXG4gICdDVVJSRU5UX1RJTUVTVEFNUCcsXHJcbiAgJ0NVUlJFTlRfVVNFUicsXHJcbiAgJ0NVUlNPUicsXHJcbiAgJ0RBVEFCQVNFJyxcclxuICAnREFUQUJBU0VTJyxcclxuICAnREFZX0hPVVInLFxyXG4gICdEQVlfTUlDUk9TRUNPTkQnLFxyXG4gICdEQVlfTUlOVVRFJyxcclxuICAnREFZX1NFQ09ORCcsXHJcbiAgJ0RFQycsXHJcbiAgJ0RFQ0lNQUwnLFxyXG4gICdERUNMQVJFJyxcclxuICAnREVGQVVMVCcsXHJcbiAgJ0RFTEFZRUQnLFxyXG4gICdERUxFVEUnLFxyXG4gICdERU5TRV9SQU5LJyxcclxuICAnREVTQycsXHJcbiAgJ0RFU0NSSUJFJyxcclxuICAnREVURVJNSU5JU1RJQycsXHJcbiAgJ0RJU1RJTkNUJyxcclxuICAnRElTVElOQ1RST1cnLFxyXG4gICdESVYnLFxyXG4gICdET1VCTEUnLFxyXG4gICdEUk9QJyxcclxuICAnRFVBTCcsXHJcbiAgJ0VBQ0gnLFxyXG4gICdFTFNFJyxcclxuICAnRUxTRUlGJyxcclxuICAnRU1QVFknLFxyXG4gICdFTkNMT1NFRCcsXHJcbiAgJ0VTQ0FQRUQnLFxyXG4gICdFWENFUFQnLFxyXG4gICdFWElTVFMnLFxyXG4gICdFWElUJyxcclxuICAnRVhQTEFJTicsXHJcbiAgJ0ZBTFNFJyxcclxuICAnRkVUQ0gnLFxyXG4gICdGSVJTVF9WQUxVRScsXHJcbiAgJ0ZMT0FUJyxcclxuICAnRkxPQVQ0JyxcclxuICAnRkxPQVQ4JyxcclxuICAnRk9SJyxcclxuICAnRk9SQ0UnLFxyXG4gICdGT1JFSUdOJyxcclxuICAnRlJPTScsXHJcbiAgJ0ZVTExURVhUJyxcclxuICAnRlVOQ1RJT04nLFxyXG4gICdHRU5FUkFURUQnLFxyXG4gICdHRVQnLFxyXG4gICdHUkFOVCcsXHJcbiAgJ0dST1VQJyxcclxuICAnR1JPVVBJTkcnLFxyXG4gICdHUk9VUFMnLFxyXG4gICdIQVZJTkcnLFxyXG4gICdISUdIX1BSSU9SSVRZJyxcclxuICAnSE9VUl9NSUNST1NFQ09ORCcsXHJcbiAgJ0hPVVJfTUlOVVRFJyxcclxuICAnSE9VUl9TRUNPTkQnLFxyXG4gICdJRicsXHJcbiAgJ0lHTk9SRScsXHJcbiAgJ0lOJyxcclxuICAnSU5ERVgnLFxyXG4gICdJTkZJTEUnLFxyXG4gICdJTk5FUicsXHJcbiAgJ0lOT1VUJyxcclxuICAnSU5TRU5TSVRJVkUnLFxyXG4gICdJTlNFUlQnLFxyXG4gICdJTlQnLFxyXG4gICdJTlQxJyxcclxuICAnSU5UMicsXHJcbiAgJ0lOVDMnLFxyXG4gICdJTlQ0JyxcclxuICAnSU5UOCcsXHJcbiAgJ0lOVEVHRVInLFxyXG4gICdJTlRFUlZBTCcsXHJcbiAgJ0lOVE8nLFxyXG4gICdJT19BRlRFUl9HVElEUycsXHJcbiAgJ0lPX0JFRk9SRV9HVElEUycsXHJcbiAgJ0lTJyxcclxuICAnSVRFUkFURScsXHJcbiAgJ0pPSU4nLFxyXG4gICdKU09OX1RBQkxFJyxcclxuICAnS0VZJyxcclxuICAnS0VZUycsXHJcbiAgJ0tJTEwnLFxyXG4gICdMQUcnLFxyXG4gICdMQVNUX1ZBTFVFJyxcclxuICAnTEFURVJBTCcsXHJcbiAgJ0xFQUQnLFxyXG4gICdMRUFESU5HJyxcclxuICAnTEVBVkUnLFxyXG4gICdMRUZUJyxcclxuICAnTElLRScsXHJcbiAgJ0xJTUlUJyxcclxuICAnTElORUFSJyxcclxuICAnTElORVMnLFxyXG4gICdMT0FEJyxcclxuICAnTE9DQUxUSU1FJyxcclxuICAnTE9DQUxUSU1FU1RBTVAnLFxyXG4gICdMT0NLJyxcclxuICAnTE9ORycsXHJcbiAgJ0xPTkdCTE9CJyxcclxuICAnTE9OR1RFWFQnLFxyXG4gICdMT09QJyxcclxuICAnTE9XX1BSSU9SSVRZJyxcclxuICAnTUFTVEVSX0JJTkQnLFxyXG4gICdNQVNURVJfU1NMX1ZFUklGWV9TRVJWRVJfQ0VSVCcsXHJcbiAgJ01BVENIJyxcclxuICAnTUFYVkFMVUUnLFxyXG4gICdNRURJVU1CTE9CJyxcclxuICAnTUVESVVNSU5UJyxcclxuICAnTUVESVVNVEVYVCcsXHJcbiAgJ01JRERMRUlOVCcsXHJcbiAgJ01JTlVURV9NSUNST1NFQ09ORCcsXHJcbiAgJ01JTlVURV9TRUNPTkQnLFxyXG4gICdNT0QnLFxyXG4gICdNT0RJRklFUycsXHJcbiAgJ05BVFVSQUwnLFxyXG4gICdOT1QnLFxyXG4gICdOT19XUklURV9UT19CSU5MT0cnLFxyXG4gICdOVEhfVkFMVUUnLFxyXG4gICdOVElMRScsXHJcbiAgJ05VTEwnLFxyXG4gICdOVU1FUklDJyxcclxuICAnT0YnLFxyXG4gICdPTicsXHJcbiAgJ09QVElNSVpFJyxcclxuICAnT1BUSU1JWkVSX0NPU1RTJyxcclxuICAnT1BUSU9OJyxcclxuICAnT1BUSU9OQUxMWScsXHJcbiAgJ09SJyxcclxuICAnT1JERVInLFxyXG4gICdPVVQnLFxyXG4gICdPVVRFUicsXHJcbiAgJ09VVEZJTEUnLFxyXG4gICdPVkVSJyxcclxuICAnUEFSVElUSU9OJyxcclxuICAnUEVSQ0VOVF9SQU5LJyxcclxuICAnUFJFQ0lTSU9OJyxcclxuICAnUFJJTUFSWScsXHJcbiAgJ1BST0NFRFVSRScsXHJcbiAgJ1BVUkdFJyxcclxuICAnUkFOR0UnLFxyXG4gICdSQU5LJyxcclxuICAnUkVBRCcsXHJcbiAgJ1JFQURTJyxcclxuICAnUkVBRF9XUklURScsXHJcbiAgJ1JFQUwnLFxyXG4gICdSRUNVUlNJVkUnLFxyXG4gICdSRUZFUkVOQ0VTJyxcclxuICAnUkVHRVhQJyxcclxuICAnUkVMRUFTRScsXHJcbiAgJ1JFTkFNRScsXHJcbiAgJ1JFUEVBVCcsXHJcbiAgJ1JFUExBQ0UnLFxyXG4gICdSRVFVSVJFJyxcclxuICAnUkVTSUdOQUwnLFxyXG4gICdSRVNUUklDVCcsXHJcbiAgJ1JFVFVSTicsXHJcbiAgJ1JFVk9LRScsXHJcbiAgJ1JJR0hUJyxcclxuICAnUkxJS0UnLFxyXG4gICdST1cnLFxyXG4gICdST1dTJyxcclxuICAnUk9XX05VTUJFUicsXHJcbiAgJ1NDSEVNQScsXHJcbiAgJ1NDSEVNQVMnLFxyXG4gICdTRUNPTkRfTUlDUk9TRUNPTkQnLFxyXG4gICdTRUxFQ1QnLFxyXG4gICdTRU5TSVRJVkUnLFxyXG4gICdTRVBBUkFUT1InLFxyXG4gICdTRVQnLFxyXG4gICdTSE9XJyxcclxuICAnU0lHTkFMJyxcclxuICAnU01BTExJTlQnLFxyXG4gICdTUEFUSUFMJyxcclxuICAnU1BFQ0lGSUMnLFxyXG4gICdTUUwnLFxyXG4gICdTUUxFWENFUFRJT04nLFxyXG4gICdTUUxTVEFURScsXHJcbiAgJ1NRTFdBUk5JTkcnLFxyXG4gICdTUUxfQklHX1JFU1VMVCcsXHJcbiAgJ1NRTF9DQUxDX0ZPVU5EX1JPV1MnLFxyXG4gICdTUUxfU01BTExfUkVTVUxUJyxcclxuICAnU1NMJyxcclxuICAnU1RBUlRJTkcnLFxyXG4gICdTVE9SRUQnLFxyXG4gICdTVFJBSUdIVF9KT0lOJyxcclxuICAnU1lTVEVNJyxcclxuICAnVEFCTEUnLFxyXG4gICdURVJNSU5BVEVEJyxcclxuICAnVEhFTicsXHJcbiAgJ1RJTllCTE9CJyxcclxuICAnVElOWUlOVCcsXHJcbiAgJ1RJTllURVhUJyxcclxuICAnVE8nLFxyXG4gICdUUkFJTElORycsXHJcbiAgJ1RSSUdHRVInLFxyXG4gICdUUlVFJyxcclxuICAnVU5ETycsXHJcbiAgJ1VOSU9OJyxcclxuICAnVU5JUVVFJyxcclxuICAnVU5MT0NLJyxcclxuICAnVU5TSUdORUQnLFxyXG4gICdVUERBVEUnLFxyXG4gICdVU0FHRScsXHJcbiAgJ1VTRScsXHJcbiAgJ1VTSU5HJyxcclxuICAnVVRDX0RBVEUnLFxyXG4gICdVVENfVElNRScsXHJcbiAgJ1VUQ19USU1FU1RBTVAnLFxyXG4gICdWQUxVRVMnLFxyXG4gICdWQVJCSU5BUlknLFxyXG4gICdWQVJDSEFSJyxcclxuICAnVkFSQ0hBUkFDVEVSJyxcclxuICAnVkFSWUlORycsXHJcbiAgJ1ZJUlRVQUwnLFxyXG4gICdXSEVOJyxcclxuICAnV0hFUkUnLFxyXG4gICdXSElMRScsXHJcbiAgJ1dJTkRPVycsXHJcbiAgJ1dJVEgnLFxyXG4gICdXUklURScsXHJcbiAgJ1hPUicsXHJcbiAgJ1lFQVJfTU9OVEgnLFxyXG4gICdaRVJPRklMTCcsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHMgPSBbXHJcbiAgJ0FERCcsXHJcbiAgJ0FMVEVSIENPTFVNTicsXHJcbiAgJ0FMVEVSIFRBQkxFJyxcclxuICAnREVMRVRFIEZST00nLFxyXG4gICdFWENFUFQnLFxyXG4gICdGUk9NJyxcclxuICAnR1JPVVAgQlknLFxyXG4gICdIQVZJTkcnLFxyXG4gICdJTlNFUlQgSU5UTycsXHJcbiAgJ0lOU0VSVCcsXHJcbiAgJ0xJTUlUJyxcclxuICAnT1JERVIgQlknLFxyXG4gICdTRUxFQ1QnLFxyXG4gICdTRVQnLFxyXG4gICdVUERBVEUnLFxyXG4gICdWQUxVRVMnLFxyXG4gICdXSEVSRScsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCA9IFsnSU5URVJTRUNUJywgJ0lOVEVSU0VDVCBBTEwnLCAnVU5JT04nLCAnVU5JT04gQUxMJ107XHJcblxyXG5jb25zdCByZXNlcnZlZE5ld2xpbmVXb3JkcyA9IFtcclxuICAnQU5EJyxcclxuICAnRUxTRScsXHJcbiAgJ09SJyxcclxuICAnV0hFTicsXHJcbiAgLy8gam9pbnNcclxuICAnSk9JTicsXHJcbiAgJ0lOTkVSIEpPSU4nLFxyXG4gICdMRUZUIEpPSU4nLFxyXG4gICdMRUZUIE9VVEVSIEpPSU4nLFxyXG4gICdSSUdIVCBKT0lOJyxcclxuICAnUklHSFQgT1VURVIgSk9JTicsXHJcbiAgJ0NST1NTIEpPSU4nLFxyXG4gICdOQVRVUkFMIEpPSU4nLFxyXG4gIC8vIG5vbi1zdGFuZGFyZCBqb2luc1xyXG4gICdTVFJBSUdIVF9KT0lOJyxcclxuICAnTkFUVVJBTCBMRUZUIEpPSU4nLFxyXG4gICdOQVRVUkFMIExFRlQgT1VURVIgSk9JTicsXHJcbiAgJ05BVFVSQUwgUklHSFQgSk9JTicsXHJcbiAgJ05BVFVSQUwgUklHSFQgT1VURVIgSk9JTicsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVNxbEZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XHJcbiAgdG9rZW5pemVyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoe1xyXG4gICAgICByZXNlcnZlZFdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHMsXHJcbiAgICAgIHJlc2VydmVkTmV3bGluZVdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCxcclxuICAgICAgc3RyaW5nVHlwZXM6IFsnYGAnLCBcIicnXCIsICdcIlwiJ10sXHJcbiAgICAgIG9wZW5QYXJlbnM6IFsnKCcsICdDQVNFJ10sXHJcbiAgICAgIGNsb3NlUGFyZW5zOiBbJyknLCAnRU5EJ10sXHJcbiAgICAgIGluZGV4ZWRQbGFjZWhvbGRlclR5cGVzOiBbJz8nXSxcclxuICAgICAgbmFtZWRQbGFjZWhvbGRlclR5cGVzOiBbXSxcclxuICAgICAgbGluZUNvbW1lbnRUeXBlczogWyctLScsICcjJ10sXHJcbiAgICAgIHNwZWNpYWxXb3JkQ2hhcnM6IFsnQCddLFxyXG4gICAgICBvcGVyYXRvcnM6IFsnOj0nLCAnPDwnLCAnPj4nLCAnIT0nLCAnPD4nLCAnPD0+JywgJyYmJywgJ3x8JywgJy0+JywgJy0+PiddLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBGb3JtYXR0ZXIgZnJvbSAnLi4vY29yZS9Gb3JtYXR0ZXInO1xyXG5pbXBvcnQgVG9rZW5pemVyIGZyb20gJy4uL2NvcmUvVG9rZW5pemVyJztcclxuXHJcbmNvbnN0IHJlc2VydmVkV29yZHMgPSBbXHJcbiAgJ0FMTCcsXHJcbiAgJ0FMVEVSJyxcclxuICAnQU5BTFlaRScsXHJcbiAgJ0FORCcsXHJcbiAgJ0FOWScsXHJcbiAgJ0FSUkFZJyxcclxuICAnQVMnLFxyXG4gICdBU0MnLFxyXG4gICdCRUdJTicsXHJcbiAgJ0JFVFdFRU4nLFxyXG4gICdCSU5BUlknLFxyXG4gICdCT09MRUFOJyxcclxuICAnQlJFQUsnLFxyXG4gICdCVUNLRVQnLFxyXG4gICdCVUlMRCcsXHJcbiAgJ0JZJyxcclxuICAnQ0FMTCcsXHJcbiAgJ0NBU0UnLFxyXG4gICdDQVNUJyxcclxuICAnQ0xVU1RFUicsXHJcbiAgJ0NPTExBVEUnLFxyXG4gICdDT0xMRUNUSU9OJyxcclxuICAnQ09NTUlUJyxcclxuICAnQ09OTkVDVCcsXHJcbiAgJ0NPTlRJTlVFJyxcclxuICAnQ09SUkVMQVRFJyxcclxuICAnQ09WRVInLFxyXG4gICdDUkVBVEUnLFxyXG4gICdEQVRBQkFTRScsXHJcbiAgJ0RBVEFTRVQnLFxyXG4gICdEQVRBU1RPUkUnLFxyXG4gICdERUNMQVJFJyxcclxuICAnREVDUkVNRU5UJyxcclxuICAnREVMRVRFJyxcclxuICAnREVSSVZFRCcsXHJcbiAgJ0RFU0MnLFxyXG4gICdERVNDUklCRScsXHJcbiAgJ0RJU1RJTkNUJyxcclxuICAnRE8nLFxyXG4gICdEUk9QJyxcclxuICAnRUFDSCcsXHJcbiAgJ0VMRU1FTlQnLFxyXG4gICdFTFNFJyxcclxuICAnRU5EJyxcclxuICAnRVZFUlknLFxyXG4gICdFWENFUFQnLFxyXG4gICdFWENMVURFJyxcclxuICAnRVhFQ1VURScsXHJcbiAgJ0VYSVNUUycsXHJcbiAgJ0VYUExBSU4nLFxyXG4gICdGQUxTRScsXHJcbiAgJ0ZFVENIJyxcclxuICAnRklSU1QnLFxyXG4gICdGTEFUVEVOJyxcclxuICAnRk9SJyxcclxuICAnRk9SQ0UnLFxyXG4gICdGUk9NJyxcclxuICAnRlVOQ1RJT04nLFxyXG4gICdHUkFOVCcsXHJcbiAgJ0dST1VQJyxcclxuICAnR1NJJyxcclxuICAnSEFWSU5HJyxcclxuICAnSUYnLFxyXG4gICdJR05PUkUnLFxyXG4gICdJTElLRScsXHJcbiAgJ0lOJyxcclxuICAnSU5DTFVERScsXHJcbiAgJ0lOQ1JFTUVOVCcsXHJcbiAgJ0lOREVYJyxcclxuICAnSU5GRVInLFxyXG4gICdJTkxJTkUnLFxyXG4gICdJTk5FUicsXHJcbiAgJ0lOU0VSVCcsXHJcbiAgJ0lOVEVSU0VDVCcsXHJcbiAgJ0lOVE8nLFxyXG4gICdJUycsXHJcbiAgJ0pPSU4nLFxyXG4gICdLRVknLFxyXG4gICdLRVlTJyxcclxuICAnS0VZU1BBQ0UnLFxyXG4gICdLTk9XTicsXHJcbiAgJ0xBU1QnLFxyXG4gICdMRUZUJyxcclxuICAnTEVUJyxcclxuICAnTEVUVElORycsXHJcbiAgJ0xJS0UnLFxyXG4gICdMSU1JVCcsXHJcbiAgJ0xTTScsXHJcbiAgJ01BUCcsXHJcbiAgJ01BUFBJTkcnLFxyXG4gICdNQVRDSEVEJyxcclxuICAnTUFURVJJQUxJWkVEJyxcclxuICAnTUVSR0UnLFxyXG4gICdNSVNTSU5HJyxcclxuICAnTkFNRVNQQUNFJyxcclxuICAnTkVTVCcsXHJcbiAgJ05PVCcsXHJcbiAgJ05VTEwnLFxyXG4gICdOVU1CRVInLFxyXG4gICdPQkpFQ1QnLFxyXG4gICdPRkZTRVQnLFxyXG4gICdPTicsXHJcbiAgJ09QVElPTicsXHJcbiAgJ09SJyxcclxuICAnT1JERVInLFxyXG4gICdPVVRFUicsXHJcbiAgJ09WRVInLFxyXG4gICdQQVJTRScsXHJcbiAgJ1BBUlRJVElPTicsXHJcbiAgJ1BBU1NXT1JEJyxcclxuICAnUEFUSCcsXHJcbiAgJ1BPT0wnLFxyXG4gICdQUkVQQVJFJyxcclxuICAnUFJJTUFSWScsXHJcbiAgJ1BSSVZBVEUnLFxyXG4gICdQUklWSUxFR0UnLFxyXG4gICdQUk9DRURVUkUnLFxyXG4gICdQVUJMSUMnLFxyXG4gICdSQVcnLFxyXG4gICdSRUFMTScsXHJcbiAgJ1JFRFVDRScsXHJcbiAgJ1JFTkFNRScsXHJcbiAgJ1JFVFVSTicsXHJcbiAgJ1JFVFVSTklORycsXHJcbiAgJ1JFVk9LRScsXHJcbiAgJ1JJR0hUJyxcclxuICAnUk9MRScsXHJcbiAgJ1JPTExCQUNLJyxcclxuICAnU0FUSVNGSUVTJyxcclxuICAnU0NIRU1BJyxcclxuICAnU0VMRUNUJyxcclxuICAnU0VMRicsXHJcbiAgJ1NFTUknLFxyXG4gICdTRVQnLFxyXG4gICdTSE9XJyxcclxuICAnU09NRScsXHJcbiAgJ1NUQVJUJyxcclxuICAnU1RBVElTVElDUycsXHJcbiAgJ1NUUklORycsXHJcbiAgJ1NZU1RFTScsXHJcbiAgJ1RIRU4nLFxyXG4gICdUTycsXHJcbiAgJ1RSQU5TQUNUSU9OJyxcclxuICAnVFJJR0dFUicsXHJcbiAgJ1RSVUUnLFxyXG4gICdUUlVOQ0FURScsXHJcbiAgJ1VOREVSJyxcclxuICAnVU5JT04nLFxyXG4gICdVTklRVUUnLFxyXG4gICdVTktOT1dOJyxcclxuICAnVU5ORVNUJyxcclxuICAnVU5TRVQnLFxyXG4gICdVUERBVEUnLFxyXG4gICdVUFNFUlQnLFxyXG4gICdVU0UnLFxyXG4gICdVU0VSJyxcclxuICAnVVNJTkcnLFxyXG4gICdWQUxJREFURScsXHJcbiAgJ1ZBTFVFJyxcclxuICAnVkFMVUVEJyxcclxuICAnVkFMVUVTJyxcclxuICAnVklBJyxcclxuICAnVklFVycsXHJcbiAgJ1dIRU4nLFxyXG4gICdXSEVSRScsXHJcbiAgJ1dISUxFJyxcclxuICAnV0lUSCcsXHJcbiAgJ1dJVEhJTicsXHJcbiAgJ1dPUksnLFxyXG4gICdYT1InLFxyXG5dO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzID0gW1xyXG4gICdERUxFVEUgRlJPTScsXHJcbiAgJ0VYQ0VQVCBBTEwnLFxyXG4gICdFWENFUFQnLFxyXG4gICdFWFBMQUlOIERFTEVURSBGUk9NJyxcclxuICAnRVhQTEFJTiBVUERBVEUnLFxyXG4gICdFWFBMQUlOIFVQU0VSVCcsXHJcbiAgJ0ZST00nLFxyXG4gICdHUk9VUCBCWScsXHJcbiAgJ0hBVklORycsXHJcbiAgJ0lORkVSJyxcclxuICAnSU5TRVJUIElOVE8nLFxyXG4gICdMRVQnLFxyXG4gICdMSU1JVCcsXHJcbiAgJ01FUkdFJyxcclxuICAnTkVTVCcsXHJcbiAgJ09SREVSIEJZJyxcclxuICAnUFJFUEFSRScsXHJcbiAgJ1NFTEVDVCcsXHJcbiAgJ1NFVCBDVVJSRU5UIFNDSEVNQScsXHJcbiAgJ1NFVCBTQ0hFTUEnLFxyXG4gICdTRVQnLFxyXG4gICdVTk5FU1QnLFxyXG4gICdVUERBVEUnLFxyXG4gICdVUFNFUlQnLFxyXG4gICdVU0UgS0VZUycsXHJcbiAgJ1ZBTFVFUycsXHJcbiAgJ1dIRVJFJyxcclxuXTtcclxuXHJcbmNvbnN0IHJlc2VydmVkVG9wTGV2ZWxXb3Jkc05vSW5kZW50ID0gWydJTlRFUlNFQ1QnLCAnSU5URVJTRUNUIEFMTCcsICdNSU5VUycsICdVTklPTicsICdVTklPTiBBTEwnXTtcclxuXHJcbmNvbnN0IHJlc2VydmVkTmV3bGluZVdvcmRzID0gW1xyXG4gICdBTkQnLFxyXG4gICdPUicsXHJcbiAgJ1hPUicsXHJcbiAgLy8gam9pbnNcclxuICAnSk9JTicsXHJcbiAgJ0lOTkVSIEpPSU4nLFxyXG4gICdMRUZUIEpPSU4nLFxyXG4gICdMRUZUIE9VVEVSIEpPSU4nLFxyXG4gICdSSUdIVCBKT0lOJyxcclxuICAnUklHSFQgT1VURVIgSk9JTicsXHJcbl07XHJcblxyXG4vLyBGb3IgcmVmZXJlbmNlOiBodHRwOi8vZG9jcy5jb3VjaGJhc2UuY29tLnMzLXdlYnNpdGUtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc2VydmVyLzYuMC9uMXFsL24xcWwtbGFuZ3VhZ2UtcmVmZXJlbmNlL2luZGV4Lmh0bWxcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTjFxbEZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XHJcbiAgdG9rZW5pemVyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoe1xyXG4gICAgICByZXNlcnZlZFdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHMsXHJcbiAgICAgIHJlc2VydmVkTmV3bGluZVdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCxcclxuICAgICAgc3RyaW5nVHlwZXM6IFtgXCJcImAsIFwiJydcIiwgJ2BgJ10sXHJcbiAgICAgIG9wZW5QYXJlbnM6IFsnKCcsICdbJywgJ3snXSxcclxuICAgICAgY2xvc2VQYXJlbnM6IFsnKScsICddJywgJ30nXSxcclxuICAgICAgbmFtZWRQbGFjZWhvbGRlclR5cGVzOiBbJyQnXSxcclxuICAgICAgbGluZUNvbW1lbnRUeXBlczogWycjJywgJy0tJ10sXHJcbiAgICAgIG9wZXJhdG9yczogWyc9PScsICchPSddLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBGb3JtYXR0ZXIgZnJvbSAnLi4vY29yZS9Gb3JtYXR0ZXInO1xyXG5pbXBvcnQgeyBpc0J5LCBpc1NldCB9IGZyb20gJy4uL2NvcmUvdG9rZW4nO1xyXG5pbXBvcnQgVG9rZW5pemVyIGZyb20gJy4uL2NvcmUvVG9rZW5pemVyJztcclxuaW1wb3J0IHRva2VuVHlwZXMgZnJvbSAnLi4vY29yZS90b2tlblR5cGVzJztcclxuXHJcbmNvbnN0IHJlc2VydmVkV29yZHMgPSBbXHJcbiAgJ0EnLFxyXG4gICdBQ0NFU1NJQkxFJyxcclxuICAnQUdFTlQnLFxyXG4gICdBR0dSRUdBVEUnLFxyXG4gICdBTEwnLFxyXG4gICdBTFRFUicsXHJcbiAgJ0FOWScsXHJcbiAgJ0FSUkFZJyxcclxuICAnQVMnLFxyXG4gICdBU0MnLFxyXG4gICdBVCcsXHJcbiAgJ0FUVFJJQlVURScsXHJcbiAgJ0FVVEhJRCcsXHJcbiAgJ0FWRycsXHJcbiAgJ0JFVFdFRU4nLFxyXG4gICdCRklMRV9CQVNFJyxcclxuICAnQklOQVJZX0lOVEVHRVInLFxyXG4gICdCSU5BUlknLFxyXG4gICdCTE9CX0JBU0UnLFxyXG4gICdCTE9DSycsXHJcbiAgJ0JPRFknLFxyXG4gICdCT09MRUFOJyxcclxuICAnQk9USCcsXHJcbiAgJ0JPVU5EJyxcclxuICAnQlJFQURUSCcsXHJcbiAgJ0JVTEsnLFxyXG4gICdCWScsXHJcbiAgJ0JZVEUnLFxyXG4gICdDJyxcclxuICAnQ0FMTCcsXHJcbiAgJ0NBTExJTkcnLFxyXG4gICdDQVNDQURFJyxcclxuICAnQ0FTRScsXHJcbiAgJ0NIQVJfQkFTRScsXHJcbiAgJ0NIQVInLFxyXG4gICdDSEFSQUNURVInLFxyXG4gICdDSEFSU0VUJyxcclxuICAnQ0hBUlNFVEZPUk0nLFxyXG4gICdDSEFSU0VUSUQnLFxyXG4gICdDSEVDSycsXHJcbiAgJ0NMT0JfQkFTRScsXHJcbiAgJ0NMT05FJyxcclxuICAnQ0xPU0UnLFxyXG4gICdDTFVTVEVSJyxcclxuICAnQ0xVU1RFUlMnLFxyXG4gICdDT0FMRVNDRScsXHJcbiAgJ0NPTEFVVEgnLFxyXG4gICdDT0xMRUNUJyxcclxuICAnQ09MVU1OUycsXHJcbiAgJ0NPTU1FTlQnLFxyXG4gICdDT01NSVQnLFxyXG4gICdDT01NSVRURUQnLFxyXG4gICdDT01QSUxFRCcsXHJcbiAgJ0NPTVBSRVNTJyxcclxuICAnQ09OTkVDVCcsXHJcbiAgJ0NPTlNUQU5UJyxcclxuICAnQ09OU1RSVUNUT1InLFxyXG4gICdDT05URVhUJyxcclxuICAnQ09OVElOVUUnLFxyXG4gICdDT05WRVJUJyxcclxuICAnQ09VTlQnLFxyXG4gICdDUkFTSCcsXHJcbiAgJ0NSRUFURScsXHJcbiAgJ0NSRURFTlRJQUwnLFxyXG4gICdDVVJSRU5UJyxcclxuICAnQ1VSUlZBTCcsXHJcbiAgJ0NVUlNPUicsXHJcbiAgJ0NVU1RPTURBVFVNJyxcclxuICAnREFOR0xJTkcnLFxyXG4gICdEQVRBJyxcclxuICAnREFURV9CQVNFJyxcclxuICAnREFURScsXHJcbiAgJ0RBWScsXHJcbiAgJ0RFQ0lNQUwnLFxyXG4gICdERUZBVUxUJyxcclxuICAnREVGSU5FJyxcclxuICAnREVMRVRFJyxcclxuICAnREVQVEgnLFxyXG4gICdERVNDJyxcclxuICAnREVURVJNSU5JU1RJQycsXHJcbiAgJ0RJUkVDVE9SWScsXHJcbiAgJ0RJU1RJTkNUJyxcclxuICAnRE8nLFxyXG4gICdET1VCTEUnLFxyXG4gICdEUk9QJyxcclxuICAnRFVSQVRJT04nLFxyXG4gICdFTEVNRU5UJyxcclxuICAnRUxTSUYnLFxyXG4gICdFTVBUWScsXHJcbiAgJ0VORCcsXHJcbiAgJ0VTQ0FQRScsXHJcbiAgJ0VYQ0VQVElPTlMnLFxyXG4gICdFWENMVVNJVkUnLFxyXG4gICdFWEVDVVRFJyxcclxuICAnRVhJU1RTJyxcclxuICAnRVhJVCcsXHJcbiAgJ0VYVEVORFMnLFxyXG4gICdFWFRFUk5BTCcsXHJcbiAgJ0VYVFJBQ1QnLFxyXG4gICdGQUxTRScsXHJcbiAgJ0ZFVENIJyxcclxuICAnRklOQUwnLFxyXG4gICdGSVJTVCcsXHJcbiAgJ0ZJWEVEJyxcclxuICAnRkxPQVQnLFxyXG4gICdGT1InLFxyXG4gICdGT1JBTEwnLFxyXG4gICdGT1JDRScsXHJcbiAgJ0ZST00nLFxyXG4gICdGVU5DVElPTicsXHJcbiAgJ0dFTkVSQUwnLFxyXG4gICdHT1RPJyxcclxuICAnR1JBTlQnLFxyXG4gICdHUk9VUCcsXHJcbiAgJ0hBU0gnLFxyXG4gICdIRUFQJyxcclxuICAnSElEREVOJyxcclxuICAnSE9VUicsXHJcbiAgJ0lERU5USUZJRUQnLFxyXG4gICdJRicsXHJcbiAgJ0lNTUVESUFURScsXHJcbiAgJ0lOJyxcclxuICAnSU5DTFVESU5HJyxcclxuICAnSU5ERVgnLFxyXG4gICdJTkRFWEVTJyxcclxuICAnSU5ESUNBVE9SJyxcclxuICAnSU5ESUNFUycsXHJcbiAgJ0lORklOSVRFJyxcclxuICAnSU5TVEFOVElBQkxFJyxcclxuICAnSU5UJyxcclxuICAnSU5URUdFUicsXHJcbiAgJ0lOVEVSRkFDRScsXHJcbiAgJ0lOVEVSVkFMJyxcclxuICAnSU5UTycsXHJcbiAgJ0lOVkFMSURBVEUnLFxyXG4gICdJUycsXHJcbiAgJ0lTT0xBVElPTicsXHJcbiAgJ0pBVkEnLFxyXG4gICdMQU5HVUFHRScsXHJcbiAgJ0xBUkdFJyxcclxuICAnTEVBRElORycsXHJcbiAgJ0xFTkdUSCcsXHJcbiAgJ0xFVkVMJyxcclxuICAnTElCUkFSWScsXHJcbiAgJ0xJS0UnLFxyXG4gICdMSUtFMicsXHJcbiAgJ0xJS0U0JyxcclxuICAnTElLRUMnLFxyXG4gICdMSU1JVEVEJyxcclxuICAnTE9DQUwnLFxyXG4gICdMT0NLJyxcclxuICAnTE9ORycsXHJcbiAgJ01BUCcsXHJcbiAgJ01BWCcsXHJcbiAgJ01BWExFTicsXHJcbiAgJ01FTUJFUicsXHJcbiAgJ01FUkdFJyxcclxuICAnTUlOJyxcclxuICAnTUlOVVRFJyxcclxuICAnTUxTTEFCRUwnLFxyXG4gICdNT0QnLFxyXG4gICdNT0RFJyxcclxuICAnTU9OVEgnLFxyXG4gICdNVUxUSVNFVCcsXHJcbiAgJ05BTUUnLFxyXG4gICdOQU4nLFxyXG4gICdOQVRJT05BTCcsXHJcbiAgJ05BVElWRScsXHJcbiAgJ05BVFVSQUwnLFxyXG4gICdOQVRVUkFMTicsXHJcbiAgJ05DSEFSJyxcclxuICAnTkVXJyxcclxuICAnTkVYVFZBTCcsXHJcbiAgJ05PQ09NUFJFU1MnLFxyXG4gICdOT0NPUFknLFxyXG4gICdOT1QnLFxyXG4gICdOT1dBSVQnLFxyXG4gICdOVUxMJyxcclxuICAnTlVMTElGJyxcclxuICAnTlVNQkVSX0JBU0UnLFxyXG4gICdOVU1CRVInLFxyXG4gICdPQkpFQ1QnLFxyXG4gICdPQ0lDT0xMJyxcclxuICAnT0NJREFURScsXHJcbiAgJ09DSURBVEVUSU1FJyxcclxuICAnT0NJRFVSQVRJT04nLFxyXG4gICdPQ0lJTlRFUlZBTCcsXHJcbiAgJ09DSUxPQkxPQ0FUT1InLFxyXG4gICdPQ0lOVU1CRVInLFxyXG4gICdPQ0lSQVcnLFxyXG4gICdPQ0lSRUYnLFxyXG4gICdPQ0lSRUZDVVJTT1InLFxyXG4gICdPQ0lST1dJRCcsXHJcbiAgJ09DSVNUUklORycsXHJcbiAgJ09DSVRZUEUnLFxyXG4gICdPRicsXHJcbiAgJ09MRCcsXHJcbiAgJ09OJyxcclxuICAnT05MWScsXHJcbiAgJ09QQVFVRScsXHJcbiAgJ09QRU4nLFxyXG4gICdPUEVSQVRPUicsXHJcbiAgJ09QVElPTicsXHJcbiAgJ09SQUNMRScsXHJcbiAgJ09SQURBVEEnLFxyXG4gICdPUkRFUicsXHJcbiAgJ09SR0FOSVpBVElPTicsXHJcbiAgJ09STEFOWScsXHJcbiAgJ09STFZBUlknLFxyXG4gICdPVEhFUlMnLFxyXG4gICdPVVQnLFxyXG4gICdPVkVSTEFQUycsXHJcbiAgJ09WRVJSSURJTkcnLFxyXG4gICdQQUNLQUdFJyxcclxuICAnUEFSQUxMRUxfRU5BQkxFJyxcclxuICAnUEFSQU1FVEVSJyxcclxuICAnUEFSQU1FVEVSUycsXHJcbiAgJ1BBUkVOVCcsXHJcbiAgJ1BBUlRJVElPTicsXHJcbiAgJ1BBU0NBTCcsXHJcbiAgJ1BDVEZSRUUnLFxyXG4gICdQSVBFJyxcclxuICAnUElQRUxJTkVEJyxcclxuICAnUExTX0lOVEVHRVInLFxyXG4gICdQTFVHR0FCTEUnLFxyXG4gICdQT1NJVElWRScsXHJcbiAgJ1BPU0lUSVZFTicsXHJcbiAgJ1BSQUdNQScsXHJcbiAgJ1BSRUNJU0lPTicsXHJcbiAgJ1BSSU9SJyxcclxuICAnUFJJVkFURScsXHJcbiAgJ1BST0NFRFVSRScsXHJcbiAgJ1BVQkxJQycsXHJcbiAgJ1JBSVNFJyxcclxuICAnUkFOR0UnLFxyXG4gICdSQVcnLFxyXG4gICdSRUFEJyxcclxuICAnUkVBTCcsXHJcbiAgJ1JFQ09SRCcsXHJcbiAgJ1JFRicsXHJcbiAgJ1JFRkVSRU5DRScsXHJcbiAgJ1JFTEVBU0UnLFxyXG4gICdSRUxJRVNfT04nLFxyXG4gICdSRU0nLFxyXG4gICdSRU1BSU5ERVInLFxyXG4gICdSRU5BTUUnLFxyXG4gICdSRVNPVVJDRScsXHJcbiAgJ1JFU1VMVF9DQUNIRScsXHJcbiAgJ1JFU1VMVCcsXHJcbiAgJ1JFVFVSTicsXHJcbiAgJ1JFVFVSTklORycsXHJcbiAgJ1JFVkVSU0UnLFxyXG4gICdSRVZPS0UnLFxyXG4gICdST0xMQkFDSycsXHJcbiAgJ1JPVycsXHJcbiAgJ1JPV0lEJyxcclxuICAnUk9XTlVNJyxcclxuICAnUk9XVFlQRScsXHJcbiAgJ1NBTVBMRScsXHJcbiAgJ1NBVkUnLFxyXG4gICdTQVZFUE9JTlQnLFxyXG4gICdTQjEnLFxyXG4gICdTQjInLFxyXG4gICdTQjQnLFxyXG4gICdTRUFSQ0gnLFxyXG4gICdTRUNPTkQnLFxyXG4gICdTRUdNRU5UJyxcclxuICAnU0VMRicsXHJcbiAgJ1NFUEFSQVRFJyxcclxuICAnU0VRVUVOQ0UnLFxyXG4gICdTRVJJQUxJWkFCTEUnLFxyXG4gICdTSEFSRScsXHJcbiAgJ1NIT1JUJyxcclxuICAnU0laRV9UJyxcclxuICAnU0laRScsXHJcbiAgJ1NNQUxMSU5UJyxcclxuICAnU09NRScsXHJcbiAgJ1NQQUNFJyxcclxuICAnU1BBUlNFJyxcclxuICAnU1FMJyxcclxuICAnU1FMQ09ERScsXHJcbiAgJ1NRTERBVEEnLFxyXG4gICdTUUxFUlJNJyxcclxuICAnU1FMTkFNRScsXHJcbiAgJ1NRTFNUQVRFJyxcclxuICAnU1RBTkRBUkQnLFxyXG4gICdTVEFSVCcsXHJcbiAgJ1NUQVRJQycsXHJcbiAgJ1NURERFVicsXHJcbiAgJ1NUT1JFRCcsXHJcbiAgJ1NUUklORycsXHJcbiAgJ1NUUlVDVCcsXHJcbiAgJ1NUWUxFJyxcclxuICAnU1VCTVVMVElTRVQnLFxyXG4gICdTVUJQQVJUSVRJT04nLFxyXG4gICdTVUJTVElUVVRBQkxFJyxcclxuICAnU1VCVFlQRScsXHJcbiAgJ1NVQ0NFU1NGVUwnLFxyXG4gICdTVU0nLFxyXG4gICdTWU5PTllNJyxcclxuICAnU1lTREFURScsXHJcbiAgJ1RBQkFVVEgnLFxyXG4gICdUQUJMRScsXHJcbiAgJ1RETycsXHJcbiAgJ1RIRScsXHJcbiAgJ1RIRU4nLFxyXG4gICdUSU1FJyxcclxuICAnVElNRVNUQU1QJyxcclxuICAnVElNRVpPTkVfQUJCUicsXHJcbiAgJ1RJTUVaT05FX0hPVVInLFxyXG4gICdUSU1FWk9ORV9NSU5VVEUnLFxyXG4gICdUSU1FWk9ORV9SRUdJT04nLFxyXG4gICdUTycsXHJcbiAgJ1RSQUlMSU5HJyxcclxuICAnVFJBTlNBQ1RJT04nLFxyXG4gICdUUkFOU0FDVElPTkFMJyxcclxuICAnVFJJR0dFUicsXHJcbiAgJ1RSVUUnLFxyXG4gICdUUlVTVEVEJyxcclxuICAnVFlQRScsXHJcbiAgJ1VCMScsXHJcbiAgJ1VCMicsXHJcbiAgJ1VCNCcsXHJcbiAgJ1VJRCcsXHJcbiAgJ1VOREVSJyxcclxuICAnVU5JUVVFJyxcclxuICAnVU5QTFVHJyxcclxuICAnVU5TSUdORUQnLFxyXG4gICdVTlRSVVNURUQnLFxyXG4gICdVU0UnLFxyXG4gICdVU0VSJyxcclxuICAnVVNJTkcnLFxyXG4gICdWQUxJREFURScsXHJcbiAgJ1ZBTElTVCcsXHJcbiAgJ1ZBTFVFJyxcclxuICAnVkFSQ0hBUicsXHJcbiAgJ1ZBUkNIQVIyJyxcclxuICAnVkFSSUFCTEUnLFxyXG4gICdWQVJJQU5DRScsXHJcbiAgJ1ZBUlJBWScsXHJcbiAgJ1ZBUllJTkcnLFxyXG4gICdWSUVXJyxcclxuICAnVklFV1MnLFxyXG4gICdWT0lEJyxcclxuICAnV0hFTkVWRVInLFxyXG4gICdXSElMRScsXHJcbiAgJ1dJVEgnLFxyXG4gICdXT1JLJyxcclxuICAnV1JBUFBFRCcsXHJcbiAgJ1dSSVRFJyxcclxuICAnWUVBUicsXHJcbiAgJ1pPTkUnLFxyXG5dO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzID0gW1xyXG4gICdBREQnLFxyXG4gICdBTFRFUiBDT0xVTU4nLFxyXG4gICdBTFRFUiBUQUJMRScsXHJcbiAgJ0JFR0lOJyxcclxuICAnQ09OTkVDVCBCWScsXHJcbiAgJ0RFQ0xBUkUnLFxyXG4gICdERUxFVEUgRlJPTScsXHJcbiAgJ0RFTEVURScsXHJcbiAgJ0VORCcsXHJcbiAgJ0VYQ0VQVCcsXHJcbiAgJ0VYQ0VQVElPTicsXHJcbiAgJ0ZFVENIIEZJUlNUJyxcclxuICAnRlJPTScsXHJcbiAgJ0dST1VQIEJZJyxcclxuICAnSEFWSU5HJyxcclxuICAnSU5TRVJUIElOVE8nLFxyXG4gICdJTlNFUlQnLFxyXG4gICdMSU1JVCcsXHJcbiAgJ0xPT1AnLFxyXG4gICdNT0RJRlknLFxyXG4gICdPUkRFUiBCWScsXHJcbiAgJ1NFTEVDVCcsXHJcbiAgJ1NFVCBDVVJSRU5UIFNDSEVNQScsXHJcbiAgJ1NFVCBTQ0hFTUEnLFxyXG4gICdTRVQnLFxyXG4gICdTVEFSVCBXSVRIJyxcclxuICAnVVBEQVRFJyxcclxuICAnVkFMVUVTJyxcclxuICAnV0hFUkUnLFxyXG5dO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzTm9JbmRlbnQgPSBbJ0lOVEVSU0VDVCcsICdJTlRFUlNFQ1QgQUxMJywgJ01JTlVTJywgJ1VOSU9OJywgJ1VOSU9OIEFMTCddO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWROZXdsaW5lV29yZHMgPSBbXHJcbiAgJ0FORCcsXHJcbiAgJ0NST1NTIEFQUExZJyxcclxuICAnRUxTRScsXHJcbiAgJ0VORCcsXHJcbiAgJ09SJyxcclxuICAnT1VURVIgQVBQTFknLFxyXG4gICdXSEVOJyxcclxuICAnWE9SJyxcclxuICAvLyBqb2luc1xyXG4gICdKT0lOJyxcclxuICAnSU5ORVIgSk9JTicsXHJcbiAgJ0xFRlQgSk9JTicsXHJcbiAgJ0xFRlQgT1VURVIgSk9JTicsXHJcbiAgJ1JJR0hUIEpPSU4nLFxyXG4gICdSSUdIVCBPVVRFUiBKT0lOJyxcclxuICAnRlVMTCBKT0lOJyxcclxuICAnRlVMTCBPVVRFUiBKT0lOJyxcclxuICAnQ1JPU1MgSk9JTicsXHJcbiAgJ05BVFVSQUwgSk9JTicsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbFNxbEZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XHJcbiAgdG9rZW5pemVyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoe1xyXG4gICAgICByZXNlcnZlZFdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHMsXHJcbiAgICAgIHJlc2VydmVkTmV3bGluZVdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCxcclxuICAgICAgc3RyaW5nVHlwZXM6IFtgXCJcImAsIFwiTicnXCIsIFwiJydcIiwgJ2BgJ10sXHJcbiAgICAgIG9wZW5QYXJlbnM6IFsnKCcsICdDQVNFJ10sXHJcbiAgICAgIGNsb3NlUGFyZW5zOiBbJyknLCAnRU5EJ10sXHJcbiAgICAgIGluZGV4ZWRQbGFjZWhvbGRlclR5cGVzOiBbJz8nXSxcclxuICAgICAgbmFtZWRQbGFjZWhvbGRlclR5cGVzOiBbJzonXSxcclxuICAgICAgbGluZUNvbW1lbnRUeXBlczogWyctLSddLFxyXG4gICAgICBzcGVjaWFsV29yZENoYXJzOiBbJ18nLCAnJCcsICcjJywgJy4nLCAnQCddLFxyXG4gICAgICBvcGVyYXRvcnM6IFsnfHwnLCAnKionLCAnIT0nLCAnOj0nXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9rZW5PdmVycmlkZSh0b2tlbikge1xyXG4gICAgaWYgKGlzU2V0KHRva2VuKSAmJiBpc0J5KHRoaXMucHJldmlvdXNSZXNlcnZlZFRva2VuKSkge1xyXG4gICAgICByZXR1cm4geyB0eXBlOiB0b2tlblR5cGVzLlJFU0VSVkVELCB2YWx1ZTogdG9rZW4udmFsdWUgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB0b2tlbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEZvcm1hdHRlciBmcm9tICcuLi9jb3JlL0Zvcm1hdHRlcic7XHJcbmltcG9ydCBUb2tlbml6ZXIgZnJvbSAnLi4vY29yZS9Ub2tlbml6ZXInO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWRXb3JkcyA9IFtcclxuICAnQUJPUlQnLFxyXG4gICdBQlNPTFVURScsXHJcbiAgJ0FDQ0VTUycsXHJcbiAgJ0FDVElPTicsXHJcbiAgJ0FERCcsXHJcbiAgJ0FETUlOJyxcclxuICAnQUZURVInLFxyXG4gICdBR0dSRUdBVEUnLFxyXG4gICdBTEwnLFxyXG4gICdBTFNPJyxcclxuICAnQUxURVInLFxyXG4gICdBTFdBWVMnLFxyXG4gICdBTkFMWVNFJyxcclxuICAnQU5BTFlaRScsXHJcbiAgJ0FORCcsXHJcbiAgJ0FOWScsXHJcbiAgJ0FSUkFZJyxcclxuICAnQVMnLFxyXG4gICdBU0MnLFxyXG4gICdBU1NFUlRJT04nLFxyXG4gICdBU1NJR05NRU5UJyxcclxuICAnQVNZTU1FVFJJQycsXHJcbiAgJ0FUJyxcclxuICAnQVRUQUNIJyxcclxuICAnQVRUUklCVVRFJyxcclxuICAnQVVUSE9SSVpBVElPTicsXHJcbiAgJ0JBQ0tXQVJEJyxcclxuICAnQkVGT1JFJyxcclxuICAnQkVHSU4nLFxyXG4gICdCRVRXRUVOJyxcclxuICAnQklHSU5UJyxcclxuICAnQklOQVJZJyxcclxuICAnQklUJyxcclxuICAnQk9PTEVBTicsXHJcbiAgJ0JPVEgnLFxyXG4gICdCWScsXHJcbiAgJ0NBQ0hFJyxcclxuICAnQ0FMTCcsXHJcbiAgJ0NBTExFRCcsXHJcbiAgJ0NBU0NBREUnLFxyXG4gICdDQVNDQURFRCcsXHJcbiAgJ0NBU0UnLFxyXG4gICdDQVNUJyxcclxuICAnQ0FUQUxPRycsXHJcbiAgJ0NIQUlOJyxcclxuICAnQ0hBUicsXHJcbiAgJ0NIQVJBQ1RFUicsXHJcbiAgJ0NIQVJBQ1RFUklTVElDUycsXHJcbiAgJ0NIRUNLJyxcclxuICAnQ0hFQ0tQT0lOVCcsXHJcbiAgJ0NMQVNTJyxcclxuICAnQ0xPU0UnLFxyXG4gICdDTFVTVEVSJyxcclxuICAnQ09BTEVTQ0UnLFxyXG4gICdDT0xMQVRFJyxcclxuICAnQ09MTEFUSU9OJyxcclxuICAnQ09MVU1OJyxcclxuICAnQ09MVU1OUycsXHJcbiAgJ0NPTU1FTlQnLFxyXG4gICdDT01NRU5UUycsXHJcbiAgJ0NPTU1JVCcsXHJcbiAgJ0NPTU1JVFRFRCcsXHJcbiAgJ0NPTkNVUlJFTlRMWScsXHJcbiAgJ0NPTkZJR1VSQVRJT04nLFxyXG4gICdDT05GTElDVCcsXHJcbiAgJ0NPTk5FQ1RJT04nLFxyXG4gICdDT05TVFJBSU5UJyxcclxuICAnQ09OU1RSQUlOVFMnLFxyXG4gICdDT05URU5UJyxcclxuICAnQ09OVElOVUUnLFxyXG4gICdDT05WRVJTSU9OJyxcclxuICAnQ09QWScsXHJcbiAgJ0NPU1QnLFxyXG4gICdDUkVBVEUnLFxyXG4gICdDUk9TUycsXHJcbiAgJ0NTVicsXHJcbiAgJ0NVQkUnLFxyXG4gICdDVVJSRU5UJyxcclxuICAnQ1VSUkVOVF9DQVRBTE9HJyxcclxuICAnQ1VSUkVOVF9EQVRFJyxcclxuICAnQ1VSUkVOVF9ST0xFJyxcclxuICAnQ1VSUkVOVF9TQ0hFTUEnLFxyXG4gICdDVVJSRU5UX1RJTUUnLFxyXG4gICdDVVJSRU5UX1RJTUVTVEFNUCcsXHJcbiAgJ0NVUlJFTlRfVVNFUicsXHJcbiAgJ0NVUlNPUicsXHJcbiAgJ0NZQ0xFJyxcclxuICAnREFUQScsXHJcbiAgJ0RBVEFCQVNFJyxcclxuICAnREFZJyxcclxuICAnREVBTExPQ0FURScsXHJcbiAgJ0RFQycsXHJcbiAgJ0RFQ0lNQUwnLFxyXG4gICdERUNMQVJFJyxcclxuICAnREVGQVVMVCcsXHJcbiAgJ0RFRkFVTFRTJyxcclxuICAnREVGRVJSQUJMRScsXHJcbiAgJ0RFRkVSUkVEJyxcclxuICAnREVGSU5FUicsXHJcbiAgJ0RFTEVURScsXHJcbiAgJ0RFTElNSVRFUicsXHJcbiAgJ0RFTElNSVRFUlMnLFxyXG4gICdERVBFTkRTJyxcclxuICAnREVTQycsXHJcbiAgJ0RFVEFDSCcsXHJcbiAgJ0RJQ1RJT05BUlknLFxyXG4gICdESVNBQkxFJyxcclxuICAnRElTQ0FSRCcsXHJcbiAgJ0RJU1RJTkNUJyxcclxuICAnRE8nLFxyXG4gICdET0NVTUVOVCcsXHJcbiAgJ0RPTUFJTicsXHJcbiAgJ0RPVUJMRScsXHJcbiAgJ0RST1AnLFxyXG4gICdFQUNIJyxcclxuICAnRUxTRScsXHJcbiAgJ0VOQUJMRScsXHJcbiAgJ0VOQ09ESU5HJyxcclxuICAnRU5DUllQVEVEJyxcclxuICAnRU5EJyxcclxuICAnRU5VTScsXHJcbiAgJ0VTQ0FQRScsXHJcbiAgJ0VWRU5UJyxcclxuICAnRVhDRVBUJyxcclxuICAnRVhDTFVERScsXHJcbiAgJ0VYQ0xVRElORycsXHJcbiAgJ0VYQ0xVU0lWRScsXHJcbiAgJ0VYRUNVVEUnLFxyXG4gICdFWElTVFMnLFxyXG4gICdFWFBMQUlOJyxcclxuICAnRVhQUkVTU0lPTicsXHJcbiAgJ0VYVEVOU0lPTicsXHJcbiAgJ0VYVEVSTkFMJyxcclxuICAnRVhUUkFDVCcsXHJcbiAgJ0ZBTFNFJyxcclxuICAnRkFNSUxZJyxcclxuICAnRkVUQ0gnLFxyXG4gICdGSUxURVInLFxyXG4gICdGSVJTVCcsXHJcbiAgJ0ZMT0FUJyxcclxuICAnRk9MTE9XSU5HJyxcclxuICAnRk9SJyxcclxuICAnRk9SQ0UnLFxyXG4gICdGT1JFSUdOJyxcclxuICAnRk9SV0FSRCcsXHJcbiAgJ0ZSRUVaRScsXHJcbiAgJ0ZST00nLFxyXG4gICdGVUxMJyxcclxuICAnRlVOQ1RJT04nLFxyXG4gICdGVU5DVElPTlMnLFxyXG4gICdHRU5FUkFURUQnLFxyXG4gICdHTE9CQUwnLFxyXG4gICdHUkFOVCcsXHJcbiAgJ0dSQU5URUQnLFxyXG4gICdHUkVBVEVTVCcsXHJcbiAgJ0dST1VQJyxcclxuICAnR1JPVVBJTkcnLFxyXG4gICdHUk9VUFMnLFxyXG4gICdIQU5ETEVSJyxcclxuICAnSEFWSU5HJyxcclxuICAnSEVBREVSJyxcclxuICAnSE9MRCcsXHJcbiAgJ0hPVVInLFxyXG4gICdJREVOVElUWScsXHJcbiAgJ0lGJyxcclxuICAnSUxJS0UnLFxyXG4gICdJTU1FRElBVEUnLFxyXG4gICdJTU1VVEFCTEUnLFxyXG4gICdJTVBMSUNJVCcsXHJcbiAgJ0lNUE9SVCcsXHJcbiAgJ0lOJyxcclxuICAnSU5DTFVERScsXHJcbiAgJ0lOQ0xVRElORycsXHJcbiAgJ0lOQ1JFTUVOVCcsXHJcbiAgJ0lOREVYJyxcclxuICAnSU5ERVhFUycsXHJcbiAgJ0lOSEVSSVQnLFxyXG4gICdJTkhFUklUUycsXHJcbiAgJ0lOSVRJQUxMWScsXHJcbiAgJ0lOTElORScsXHJcbiAgJ0lOTkVSJyxcclxuICAnSU5PVVQnLFxyXG4gICdJTlBVVCcsXHJcbiAgJ0lOU0VOU0lUSVZFJyxcclxuICAnSU5TRVJUJyxcclxuICAnSU5TVEVBRCcsXHJcbiAgJ0lOVCcsXHJcbiAgJ0lOVEVHRVInLFxyXG4gICdJTlRFUlNFQ1QnLFxyXG4gICdJTlRFUlZBTCcsXHJcbiAgJ0lOVE8nLFxyXG4gICdJTlZPS0VSJyxcclxuICAnSVMnLFxyXG4gICdJU05VTEwnLFxyXG4gICdJU09MQVRJT04nLFxyXG4gICdKT0lOJyxcclxuICAnS0VZJyxcclxuICAnTEFCRUwnLFxyXG4gICdMQU5HVUFHRScsXHJcbiAgJ0xBUkdFJyxcclxuICAnTEFTVCcsXHJcbiAgJ0xBVEVSQUwnLFxyXG4gICdMRUFESU5HJyxcclxuICAnTEVBS1BST09GJyxcclxuICAnTEVBU1QnLFxyXG4gICdMRUZUJyxcclxuICAnTEVWRUwnLFxyXG4gICdMSUtFJyxcclxuICAnTElNSVQnLFxyXG4gICdMSVNURU4nLFxyXG4gICdMT0FEJyxcclxuICAnTE9DQUwnLFxyXG4gICdMT0NBTFRJTUUnLFxyXG4gICdMT0NBTFRJTUVTVEFNUCcsXHJcbiAgJ0xPQ0FUSU9OJyxcclxuICAnTE9DSycsXHJcbiAgJ0xPQ0tFRCcsXHJcbiAgJ0xPR0dFRCcsXHJcbiAgJ01BUFBJTkcnLFxyXG4gICdNQVRDSCcsXHJcbiAgJ01BVEVSSUFMSVpFRCcsXHJcbiAgJ01BWFZBTFVFJyxcclxuICAnTUVUSE9EJyxcclxuICAnTUlOVVRFJyxcclxuICAnTUlOVkFMVUUnLFxyXG4gICdNT0RFJyxcclxuICAnTU9OVEgnLFxyXG4gICdNT1ZFJyxcclxuICAnTkFNRScsXHJcbiAgJ05BTUVTJyxcclxuICAnTkFUSU9OQUwnLFxyXG4gICdOQVRVUkFMJyxcclxuICAnTkNIQVInLFxyXG4gICdORVcnLFxyXG4gICdORVhUJyxcclxuICAnTkZDJyxcclxuICAnTkZEJyxcclxuICAnTkZLQycsXHJcbiAgJ05GS0QnLFxyXG4gICdOTycsXHJcbiAgJ05PTkUnLFxyXG4gICdOT1JNQUxJWkUnLFxyXG4gICdOT1JNQUxJWkVEJyxcclxuICAnTk9UJyxcclxuICAnTk9USElORycsXHJcbiAgJ05PVElGWScsXHJcbiAgJ05PVE5VTEwnLFxyXG4gICdOT1dBSVQnLFxyXG4gICdOVUxMJyxcclxuICAnTlVMTElGJyxcclxuICAnTlVMTFMnLFxyXG4gICdOVU1FUklDJyxcclxuICAnT0JKRUNUJyxcclxuICAnT0YnLFxyXG4gICdPRkYnLFxyXG4gICdPRkZTRVQnLFxyXG4gICdPSURTJyxcclxuICAnT0xEJyxcclxuICAnT04nLFxyXG4gICdPTkxZJyxcclxuICAnT1BFUkFUT1InLFxyXG4gICdPUFRJT04nLFxyXG4gICdPUFRJT05TJyxcclxuICAnT1InLFxyXG4gICdPUkRFUicsXHJcbiAgJ09SRElOQUxJVFknLFxyXG4gICdPVEhFUlMnLFxyXG4gICdPVVQnLFxyXG4gICdPVVRFUicsXHJcbiAgJ09WRVInLFxyXG4gICdPVkVSTEFQUycsXHJcbiAgJ09WRVJMQVknLFxyXG4gICdPVkVSUklESU5HJyxcclxuICAnT1dORUQnLFxyXG4gICdPV05FUicsXHJcbiAgJ1BBUkFMTEVMJyxcclxuICAnUEFSU0VSJyxcclxuICAnUEFSVElBTCcsXHJcbiAgJ1BBUlRJVElPTicsXHJcbiAgJ1BBU1NJTkcnLFxyXG4gICdQQVNTV09SRCcsXHJcbiAgJ1BMQUNJTkcnLFxyXG4gICdQTEFOUycsXHJcbiAgJ1BPTElDWScsXHJcbiAgJ1BPU0lUSU9OJyxcclxuICAnUFJFQ0VESU5HJyxcclxuICAnUFJFQ0lTSU9OJyxcclxuICAnUFJFUEFSRScsXHJcbiAgJ1BSRVBBUkVEJyxcclxuICAnUFJFU0VSVkUnLFxyXG4gICdQUklNQVJZJyxcclxuICAnUFJJT1InLFxyXG4gICdQUklWSUxFR0VTJyxcclxuICAnUFJPQ0VEVVJBTCcsXHJcbiAgJ1BST0NFRFVSRScsXHJcbiAgJ1BST0NFRFVSRVMnLFxyXG4gICdQUk9HUkFNJyxcclxuICAnUFVCTElDQVRJT04nLFxyXG4gICdRVU9URScsXHJcbiAgJ1JBTkdFJyxcclxuICAnUkVBRCcsXHJcbiAgJ1JFQUwnLFxyXG4gICdSRUFTU0lHTicsXHJcbiAgJ1JFQ0hFQ0snLFxyXG4gICdSRUNVUlNJVkUnLFxyXG4gICdSRUYnLFxyXG4gICdSRUZFUkVOQ0VTJyxcclxuICAnUkVGRVJFTkNJTkcnLFxyXG4gICdSRUZSRVNIJyxcclxuICAnUkVJTkRFWCcsXHJcbiAgJ1JFTEFUSVZFJyxcclxuICAnUkVMRUFTRScsXHJcbiAgJ1JFTkFNRScsXHJcbiAgJ1JFUEVBVEFCTEUnLFxyXG4gICdSRVBMQUNFJyxcclxuICAnUkVQTElDQScsXHJcbiAgJ1JFU0VUJyxcclxuICAnUkVTVEFSVCcsXHJcbiAgJ1JFU1RSSUNUJyxcclxuICAnUkVUVVJOSU5HJyxcclxuICAnUkVUVVJOUycsXHJcbiAgJ1JFVk9LRScsXHJcbiAgJ1JJR0hUJyxcclxuICAnUk9MRScsXHJcbiAgJ1JPTExCQUNLJyxcclxuICAnUk9MTFVQJyxcclxuICAnUk9VVElORScsXHJcbiAgJ1JPVVRJTkVTJyxcclxuICAnUk9XJyxcclxuICAnUk9XUycsXHJcbiAgJ1JVTEUnLFxyXG4gICdTQVZFUE9JTlQnLFxyXG4gICdTQ0hFTUEnLFxyXG4gICdTQ0hFTUFTJyxcclxuICAnU0NST0xMJyxcclxuICAnU0VBUkNIJyxcclxuICAnU0VDT05EJyxcclxuICAnU0VDVVJJVFknLFxyXG4gICdTRUxFQ1QnLFxyXG4gICdTRVFVRU5DRScsXHJcbiAgJ1NFUVVFTkNFUycsXHJcbiAgJ1NFUklBTElaQUJMRScsXHJcbiAgJ1NFUlZFUicsXHJcbiAgJ1NFU1NJT04nLFxyXG4gICdTRVNTSU9OX1VTRVInLFxyXG4gICdTRVQnLFxyXG4gICdTRVRPRicsXHJcbiAgJ1NFVFMnLFxyXG4gICdTSEFSRScsXHJcbiAgJ1NIT1cnLFxyXG4gICdTSU1JTEFSJyxcclxuICAnU0lNUExFJyxcclxuICAnU0tJUCcsXHJcbiAgJ1NNQUxMSU5UJyxcclxuICAnU05BUFNIT1QnLFxyXG4gICdTT01FJyxcclxuICAnU1FMJyxcclxuICAnU1RBQkxFJyxcclxuICAnU1RBTkRBTE9ORScsXHJcbiAgJ1NUQVJUJyxcclxuICAnU1RBVEVNRU5UJyxcclxuICAnU1RBVElTVElDUycsXHJcbiAgJ1NURElOJyxcclxuICAnU1RET1VUJyxcclxuICAnU1RPUkFHRScsXHJcbiAgJ1NUT1JFRCcsXHJcbiAgJ1NUUklDVCcsXHJcbiAgJ1NUUklQJyxcclxuICAnU1VCU0NSSVBUSU9OJyxcclxuICAnU1VCU1RSSU5HJyxcclxuICAnU1VQUE9SVCcsXHJcbiAgJ1NZTU1FVFJJQycsXHJcbiAgJ1NZU0lEJyxcclxuICAnU1lTVEVNJyxcclxuICAnVEFCTEUnLFxyXG4gICdUQUJMRVMnLFxyXG4gICdUQUJMRVNBTVBMRScsXHJcbiAgJ1RBQkxFU1BBQ0UnLFxyXG4gICdURU1QJyxcclxuICAnVEVNUExBVEUnLFxyXG4gICdURU1QT1JBUlknLFxyXG4gICdURVhUJyxcclxuICAnVEhFTicsXHJcbiAgJ1RJRVMnLFxyXG4gICdUSU1FJyxcclxuICAnVElNRVNUQU1QJyxcclxuICAnVE8nLFxyXG4gICdUUkFJTElORycsXHJcbiAgJ1RSQU5TQUNUSU9OJyxcclxuICAnVFJBTlNGT1JNJyxcclxuICAnVFJFQVQnLFxyXG4gICdUUklHR0VSJyxcclxuICAnVFJJTScsXHJcbiAgJ1RSVUUnLFxyXG4gICdUUlVOQ0FURScsXHJcbiAgJ1RSVVNURUQnLFxyXG4gICdUWVBFJyxcclxuICAnVFlQRVMnLFxyXG4gICdVRVNDQVBFJyxcclxuICAnVU5CT1VOREVEJyxcclxuICAnVU5DT01NSVRURUQnLFxyXG4gICdVTkVOQ1JZUFRFRCcsXHJcbiAgJ1VOSU9OJyxcclxuICAnVU5JUVVFJyxcclxuICAnVU5LTk9XTicsXHJcbiAgJ1VOTElTVEVOJyxcclxuICAnVU5MT0dHRUQnLFxyXG4gICdVTlRJTCcsXHJcbiAgJ1VQREFURScsXHJcbiAgJ1VTRVInLFxyXG4gICdVU0lORycsXHJcbiAgJ1ZBQ1VVTScsXHJcbiAgJ1ZBTElEJyxcclxuICAnVkFMSURBVEUnLFxyXG4gICdWQUxJREFUT1InLFxyXG4gICdWQUxVRScsXHJcbiAgJ1ZBTFVFUycsXHJcbiAgJ1ZBUkNIQVInLFxyXG4gICdWQVJJQURJQycsXHJcbiAgJ1ZBUllJTkcnLFxyXG4gICdWRVJCT1NFJyxcclxuICAnVkVSU0lPTicsXHJcbiAgJ1ZJRVcnLFxyXG4gICdWSUVXUycsXHJcbiAgJ1ZPTEFUSUxFJyxcclxuICAnV0hFTicsXHJcbiAgJ1dIRVJFJyxcclxuICAnV0hJVEVTUEFDRScsXHJcbiAgJ1dJTkRPVycsXHJcbiAgJ1dJVEgnLFxyXG4gICdXSVRISU4nLFxyXG4gICdXSVRIT1VUJyxcclxuICAnV09SSycsXHJcbiAgJ1dSQVBQRVInLFxyXG4gICdXUklURScsXHJcbiAgJ1hNTCcsXHJcbiAgJ1hNTEFUVFJJQlVURVMnLFxyXG4gICdYTUxDT05DQVQnLFxyXG4gICdYTUxFTEVNRU5UJyxcclxuICAnWE1MRVhJU1RTJyxcclxuICAnWE1MRk9SRVNUJyxcclxuICAnWE1MTkFNRVNQQUNFUycsXHJcbiAgJ1hNTFBBUlNFJyxcclxuICAnWE1MUEknLFxyXG4gICdYTUxST09UJyxcclxuICAnWE1MU0VSSUFMSVpFJyxcclxuICAnWE1MVEFCTEUnLFxyXG4gICdZRUFSJyxcclxuICAnWUVTJyxcclxuICAnWk9ORScsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHMgPSBbXHJcbiAgJ0FERCcsXHJcbiAgJ0FGVEVSJyxcclxuICAnQUxURVIgQ09MVU1OJyxcclxuICAnQUxURVIgVEFCTEUnLFxyXG4gICdDQVNFJyxcclxuICAnREVMRVRFIEZST00nLFxyXG4gICdFTkQnLFxyXG4gICdFWENFUFQnLFxyXG4gICdGRVRDSCBGSVJTVCcsXHJcbiAgJ0ZST00nLFxyXG4gICdHUk9VUCBCWScsXHJcbiAgJ0hBVklORycsXHJcbiAgJ0lOU0VSVCBJTlRPJyxcclxuICAnSU5TRVJUJyxcclxuICAnTElNSVQnLFxyXG4gICdPUkRFUiBCWScsXHJcbiAgJ1NFTEVDVCcsXHJcbiAgJ1NFVCBDVVJSRU5UIFNDSEVNQScsXHJcbiAgJ1NFVCBTQ0hFTUEnLFxyXG4gICdTRVQnLFxyXG4gICdVUERBVEUnLFxyXG4gICdWQUxVRVMnLFxyXG4gICdXSEVSRScsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCA9IFsnSU5URVJTRUNUJywgJ0lOVEVSU0VDVCBBTEwnLCAnVU5JT04nLCAnVU5JT04gQUxMJ107XHJcblxyXG5jb25zdCByZXNlcnZlZE5ld2xpbmVXb3JkcyA9IFtcclxuICAnQU5EJyxcclxuICAnRUxTRScsXHJcbiAgJ09SJyxcclxuICAnV0hFTicsXHJcbiAgLy8gam9pbnNcclxuICAnSk9JTicsXHJcbiAgJ0lOTkVSIEpPSU4nLFxyXG4gICdMRUZUIEpPSU4nLFxyXG4gICdMRUZUIE9VVEVSIEpPSU4nLFxyXG4gICdSSUdIVCBKT0lOJyxcclxuICAnUklHSFQgT1VURVIgSk9JTicsXHJcbiAgJ0ZVTEwgSk9JTicsXHJcbiAgJ0ZVTEwgT1VURVIgSk9JTicsXHJcbiAgJ0NST1NTIEpPSU4nLFxyXG4gICdOQVRVUkFMIEpPSU4nLFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdGdyZVNxbEZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XHJcbiAgdG9rZW5pemVyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoe1xyXG4gICAgICByZXNlcnZlZFdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHMsXHJcbiAgICAgIHJlc2VydmVkTmV3bGluZVdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCxcclxuICAgICAgc3RyaW5nVHlwZXM6IFtgXCJcImAsIFwiJydcIiwgXCJVJicnXCIsICdVJlwiXCInLCAnJCQnXSxcclxuICAgICAgb3BlblBhcmVuczogWycoJywgJ0NBU0UnXSxcclxuICAgICAgY2xvc2VQYXJlbnM6IFsnKScsICdFTkQnXSxcclxuICAgICAgaW5kZXhlZFBsYWNlaG9sZGVyVHlwZXM6IFsnJCddLFxyXG4gICAgICBuYW1lZFBsYWNlaG9sZGVyVHlwZXM6IFsnOiddLFxyXG4gICAgICBsaW5lQ29tbWVudFR5cGVzOiBbJy0tJ10sXHJcbiAgICAgIG9wZXJhdG9yczogW1xyXG4gICAgICAgICchPScsXHJcbiAgICAgICAgJzw8JyxcclxuICAgICAgICAnPj4nLFxyXG4gICAgICAgICd8fC8nLFxyXG4gICAgICAgICd8LycsXHJcbiAgICAgICAgJzo6JyxcclxuICAgICAgICAnLT4+JyxcclxuICAgICAgICAnLT4nLFxyXG4gICAgICAgICd+fionLFxyXG4gICAgICAgICd+ficsXHJcbiAgICAgICAgJyF+fionLFxyXG4gICAgICAgICchfn4nLFxyXG4gICAgICAgICd+KicsXHJcbiAgICAgICAgJyF+KicsXHJcbiAgICAgICAgJyF+JyxcclxuICAgICAgICAnISEnLFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBGb3JtYXR0ZXIgZnJvbSAnLi4vY29yZS9Gb3JtYXR0ZXInO1xyXG5pbXBvcnQgVG9rZW5pemVyIGZyb20gJy4uL2NvcmUvVG9rZW5pemVyJztcclxuXHJcbmNvbnN0IHJlc2VydmVkV29yZHMgPSBbXHJcbiAgJ0FFUzEyOCcsXHJcbiAgJ0FFUzI1NicsXHJcbiAgJ0FMTE9XT1ZFUldSSVRFJyxcclxuICAnQU5BTFlTRScsXHJcbiAgJ0FSUkFZJyxcclxuICAnQVMnLFxyXG4gICdBU0MnLFxyXG4gICdBVVRIT1JJWkFUSU9OJyxcclxuICAnQkFDS1VQJyxcclxuICAnQklOQVJZJyxcclxuICAnQkxBTktTQVNOVUxMJyxcclxuICAnQk9USCcsXHJcbiAgJ0JZVEVESUNUJyxcclxuICAnQlpJUDInLFxyXG4gICdDQVNUJyxcclxuICAnQ0hFQ0snLFxyXG4gICdDT0xMQVRFJyxcclxuICAnQ09MVU1OJyxcclxuICAnQ09OU1RSQUlOVCcsXHJcbiAgJ0NSRUFURScsXHJcbiAgJ0NSRURFTlRJQUxTJyxcclxuICAnQ1VSUkVOVF9EQVRFJyxcclxuICAnQ1VSUkVOVF9USU1FJyxcclxuICAnQ1VSUkVOVF9USU1FU1RBTVAnLFxyXG4gICdDVVJSRU5UX1VTRVInLFxyXG4gICdDVVJSRU5UX1VTRVJfSUQnLFxyXG4gICdERUZBVUxUJyxcclxuICAnREVGRVJSQUJMRScsXHJcbiAgJ0RFRkxBVEUnLFxyXG4gICdERUZSQUcnLFxyXG4gICdERUxUQScsXHJcbiAgJ0RFTFRBMzJLJyxcclxuICAnREVTQycsXHJcbiAgJ0RJU0FCTEUnLFxyXG4gICdESVNUSU5DVCcsXHJcbiAgJ0RPJyxcclxuICAnRUxTRScsXHJcbiAgJ0VNUFRZQVNOVUxMJyxcclxuICAnRU5BQkxFJyxcclxuICAnRU5DT0RFJyxcclxuICAnRU5DUllQVCcsXHJcbiAgJ0VOQ1JZUFRJT04nLFxyXG4gICdFTkQnLFxyXG4gICdFWFBMSUNJVCcsXHJcbiAgJ0ZBTFNFJyxcclxuICAnRk9SJyxcclxuICAnRk9SRUlHTicsXHJcbiAgJ0ZSRUVaRScsXHJcbiAgJ0ZVTEwnLFxyXG4gICdHTE9CQUxESUNUMjU2JyxcclxuICAnR0xPQkFMRElDVDY0SycsXHJcbiAgJ0dSQU5UJyxcclxuICAnR1pJUCcsXHJcbiAgJ0lERU5USVRZJyxcclxuICAnSUdOT1JFJyxcclxuICAnSUxJS0UnLFxyXG4gICdJTklUSUFMTFknLFxyXG4gICdJTlRPJyxcclxuICAnTEVBRElORycsXHJcbiAgJ0xPQ0FMVElNRScsXHJcbiAgJ0xPQ0FMVElNRVNUQU1QJyxcclxuICAnTFVOJyxcclxuICAnTFVOUycsXHJcbiAgJ0xaTycsXHJcbiAgJ0xaT1AnLFxyXG4gICdNSU5VUycsXHJcbiAgJ01PU1RMWTEzJyxcclxuICAnTU9TVExZMzInLFxyXG4gICdNT1NUTFk4JyxcclxuICAnTkFUVVJBTCcsXHJcbiAgJ05FVycsXHJcbiAgJ05VTExTJyxcclxuICAnT0ZGJyxcclxuICAnT0ZGTElORScsXHJcbiAgJ09GRlNFVCcsXHJcbiAgJ09MRCcsXHJcbiAgJ09OJyxcclxuICAnT05MWScsXHJcbiAgJ09QRU4nLFxyXG4gICdPUkRFUicsXHJcbiAgJ09WRVJMQVBTJyxcclxuICAnUEFSQUxMRUwnLFxyXG4gICdQQVJUSVRJT04nLFxyXG4gICdQRVJDRU5UJyxcclxuICAnUEVSTUlTU0lPTlMnLFxyXG4gICdQTEFDSU5HJyxcclxuICAnUFJJTUFSWScsXHJcbiAgJ1JBVycsXHJcbiAgJ1JFQURSQVRJTycsXHJcbiAgJ1JFQ09WRVInLFxyXG4gICdSRUZFUkVOQ0VTJyxcclxuICAnUkVKRUNUTE9HJyxcclxuICAnUkVTT1JUJyxcclxuICAnUkVTVE9SRScsXHJcbiAgJ1NFU1NJT05fVVNFUicsXHJcbiAgJ1NJTUlMQVInLFxyXG4gICdTWVNEQVRFJyxcclxuICAnU1lTVEVNJyxcclxuICAnVEFCTEUnLFxyXG4gICdUQUcnLFxyXG4gICdUREVTJyxcclxuICAnVEVYVDI1NScsXHJcbiAgJ1RFWFQzMksnLFxyXG4gICdUSEVOJyxcclxuICAnVElNRVNUQU1QJyxcclxuICAnVE8nLFxyXG4gICdUT1AnLFxyXG4gICdUUkFJTElORycsXHJcbiAgJ1RSVUUnLFxyXG4gICdUUlVOQ0FURUNPTFVNTlMnLFxyXG4gICdVTklRVUUnLFxyXG4gICdVU0VSJyxcclxuICAnVVNJTkcnLFxyXG4gICdWRVJCT1NFJyxcclxuICAnV0FMTEVUJyxcclxuICAnV0hFTicsXHJcbiAgJ1dJVEgnLFxyXG4gICdXSVRIT1VUJyxcclxuICAnUFJFRElDQVRFJyxcclxuICAnQ09MVU1OUycsXHJcbiAgJ0NPTVBST1dTJyxcclxuICAnQ09NUFJFU1NJT04nLFxyXG4gICdDT1BZJyxcclxuICAnRk9STUFUJyxcclxuICAnREVMSU1JVEVSJyxcclxuICAnRklYRURXSURUSCcsXHJcbiAgJ0FWUk8nLFxyXG4gICdKU09OJyxcclxuICAnRU5DUllQVEVEJyxcclxuICAnQlpJUDInLFxyXG4gICdHWklQJyxcclxuICAnTFpPUCcsXHJcbiAgJ1BBUlFVRVQnLFxyXG4gICdPUkMnLFxyXG4gICdBQ0NFUFRBTllEQVRFJyxcclxuICAnQUNDRVBUSU5WQ0hBUlMnLFxyXG4gICdCTEFOS1NBU05VTEwnLFxyXG4gICdEQVRFRk9STUFUJyxcclxuICAnRU1QVFlBU05VTEwnLFxyXG4gICdFTkNPRElORycsXHJcbiAgJ0VTQ0FQRScsXHJcbiAgJ0VYUExJQ0lUX0lEUycsXHJcbiAgJ0ZJTExSRUNPUkQnLFxyXG4gICdJR05PUkVCTEFOS0xJTkVTJyxcclxuICAnSUdOT1JFSEVBREVSJyxcclxuICAnTlVMTCBBUycsXHJcbiAgJ1JFTU9WRVFVT1RFUycsXHJcbiAgJ1JPVU5ERUMnLFxyXG4gICdUSU1FRk9STUFUJyxcclxuICAnVFJJTUJMQU5LUycsXHJcbiAgJ1RSVU5DQVRFQ09MVU1OUycsXHJcbiAgJ0NPTVBST1dTJyxcclxuICAnQ09NUFVQREFURScsXHJcbiAgJ01BWEVSUk9SJyxcclxuICAnTk9MT0FEJyxcclxuICAnU1RBVFVQREFURScsXHJcbiAgJ01BTklGRVNUJyxcclxuICAnUkVHSU9OJyxcclxuICAnSUFNX1JPTEUnLFxyXG4gICdNQVNURVJfU1lNTUVUUklDX0tFWScsXHJcbiAgJ1NTSCcsXHJcbiAgJ0FDQ0VQVEFOWURBVEUnLFxyXG4gICdBQ0NFUFRJTlZDSEFSUycsXHJcbiAgJ0FDQ0VTU19LRVlfSUQnLFxyXG4gICdTRUNSRVRfQUNDRVNTX0tFWScsXHJcbiAgJ0FWUk8nLFxyXG4gICdCTEFOS1NBU05VTEwnLFxyXG4gICdCWklQMicsXHJcbiAgJ0NPTVBST1dTJyxcclxuICAnQ09NUFVQREFURScsXHJcbiAgJ0NSRURFTlRJQUxTJyxcclxuICAnREFURUZPUk1BVCcsXHJcbiAgJ0RFTElNSVRFUicsXHJcbiAgJ0VNUFRZQVNOVUxMJyxcclxuICAnRU5DT0RJTkcnLFxyXG4gICdFTkNSWVBURUQnLFxyXG4gICdFU0NBUEUnLFxyXG4gICdFWFBMSUNJVF9JRFMnLFxyXG4gICdGSUxMUkVDT1JEJyxcclxuICAnRklYRURXSURUSCcsXHJcbiAgJ0ZPUk1BVCcsXHJcbiAgJ0lBTV9ST0xFJyxcclxuICAnR1pJUCcsXHJcbiAgJ0lHTk9SRUJMQU5LTElORVMnLFxyXG4gICdJR05PUkVIRUFERVInLFxyXG4gICdKU09OJyxcclxuICAnTFpPUCcsXHJcbiAgJ01BTklGRVNUJyxcclxuICAnTUFTVEVSX1NZTU1FVFJJQ19LRVknLFxyXG4gICdNQVhFUlJPUicsXHJcbiAgJ05PTE9BRCcsXHJcbiAgJ05VTEwgQVMnLFxyXG4gICdSRUFEUkFUSU8nLFxyXG4gICdSRUdJT04nLFxyXG4gICdSRU1PVkVRVU9URVMnLFxyXG4gICdST1VOREVDJyxcclxuICAnU1NIJyxcclxuICAnU1RBVFVQREFURScsXHJcbiAgJ1RJTUVGT1JNQVQnLFxyXG4gICdTRVNTSU9OX1RPS0VOJyxcclxuICAnVFJJTUJMQU5LUycsXHJcbiAgJ1RSVU5DQVRFQ09MVU1OUycsXHJcbiAgJ0VYVEVSTkFMJyxcclxuICAnREFUQSBDQVRBTE9HJyxcclxuICAnSElWRSBNRVRBU1RPUkUnLFxyXG4gICdDQVRBTE9HX1JPTEUnLFxyXG4gICdWQUNVVU0nLFxyXG4gICdDT1BZJyxcclxuICAnVU5MT0FEJyxcclxuICAnRVZFTicsXHJcbiAgJ0FMTCcsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHMgPSBbXHJcbiAgJ0FERCcsXHJcbiAgJ0FGVEVSJyxcclxuICAnQUxURVIgQ09MVU1OJyxcclxuICAnQUxURVIgVEFCTEUnLFxyXG4gICdERUxFVEUgRlJPTScsXHJcbiAgJ0VYQ0VQVCcsXHJcbiAgJ0ZST00nLFxyXG4gICdHUk9VUCBCWScsXHJcbiAgJ0hBVklORycsXHJcbiAgJ0lOU0VSVCBJTlRPJyxcclxuICAnSU5TRVJUJyxcclxuICAnSU5URVJTRUNUJyxcclxuICAnVE9QJyxcclxuICAnTElNSVQnLFxyXG4gICdNT0RJRlknLFxyXG4gICdPUkRFUiBCWScsXHJcbiAgJ1NFTEVDVCcsXHJcbiAgJ1NFVCBDVVJSRU5UIFNDSEVNQScsXHJcbiAgJ1NFVCBTQ0hFTUEnLFxyXG4gICdTRVQnLFxyXG4gICdVTklPTiBBTEwnLFxyXG4gICdVTklPTicsXHJcbiAgJ1VQREFURScsXHJcbiAgJ1ZBTFVFUycsXHJcbiAgJ1dIRVJFJyxcclxuICAnVkFDVVVNJyxcclxuICAnQ09QWScsXHJcbiAgJ1VOTE9BRCcsXHJcbiAgJ0FOQUxZWkUnLFxyXG4gICdBTkFMWVNFJyxcclxuICAnRElTVEtFWScsXHJcbiAgJ1NPUlRLRVknLFxyXG4gICdDT01QT1VORCcsXHJcbiAgJ0lOVEVSTEVBVkVEJyxcclxuICAnRk9STUFUJyxcclxuICAnREVMSU1JVEVSJyxcclxuICAnRklYRURXSURUSCcsXHJcbiAgJ0FWUk8nLFxyXG4gICdKU09OJyxcclxuICAnRU5DUllQVEVEJyxcclxuICAnQlpJUDInLFxyXG4gICdHWklQJyxcclxuICAnTFpPUCcsXHJcbiAgJ1BBUlFVRVQnLFxyXG4gICdPUkMnLFxyXG4gICdBQ0NFUFRBTllEQVRFJyxcclxuICAnQUNDRVBUSU5WQ0hBUlMnLFxyXG4gICdCTEFOS1NBU05VTEwnLFxyXG4gICdEQVRFRk9STUFUJyxcclxuICAnRU1QVFlBU05VTEwnLFxyXG4gICdFTkNPRElORycsXHJcbiAgJ0VTQ0FQRScsXHJcbiAgJ0VYUExJQ0lUX0lEUycsXHJcbiAgJ0ZJTExSRUNPUkQnLFxyXG4gICdJR05PUkVCTEFOS0xJTkVTJyxcclxuICAnSUdOT1JFSEVBREVSJyxcclxuICAnTlVMTCBBUycsXHJcbiAgJ1JFTU9WRVFVT1RFUycsXHJcbiAgJ1JPVU5ERUMnLFxyXG4gICdUSU1FRk9STUFUJyxcclxuICAnVFJJTUJMQU5LUycsXHJcbiAgJ1RSVU5DQVRFQ09MVU1OUycsXHJcbiAgJ0NPTVBST1dTJyxcclxuICAnQ09NUFVQREFURScsXHJcbiAgJ01BWEVSUk9SJyxcclxuICAnTk9MT0FEJyxcclxuICAnU1RBVFVQREFURScsXHJcbiAgJ01BTklGRVNUJyxcclxuICAnUkVHSU9OJyxcclxuICAnSUFNX1JPTEUnLFxyXG4gICdNQVNURVJfU1lNTUVUUklDX0tFWScsXHJcbiAgJ1NTSCcsXHJcbiAgJ0FDQ0VQVEFOWURBVEUnLFxyXG4gICdBQ0NFUFRJTlZDSEFSUycsXHJcbiAgJ0FDQ0VTU19LRVlfSUQnLFxyXG4gICdTRUNSRVRfQUNDRVNTX0tFWScsXHJcbiAgJ0FWUk8nLFxyXG4gICdCTEFOS1NBU05VTEwnLFxyXG4gICdCWklQMicsXHJcbiAgJ0NPTVBST1dTJyxcclxuICAnQ09NUFVQREFURScsXHJcbiAgJ0NSRURFTlRJQUxTJyxcclxuICAnREFURUZPUk1BVCcsXHJcbiAgJ0RFTElNSVRFUicsXHJcbiAgJ0VNUFRZQVNOVUxMJyxcclxuICAnRU5DT0RJTkcnLFxyXG4gICdFTkNSWVBURUQnLFxyXG4gICdFU0NBUEUnLFxyXG4gICdFWFBMSUNJVF9JRFMnLFxyXG4gICdGSUxMUkVDT1JEJyxcclxuICAnRklYRURXSURUSCcsXHJcbiAgJ0ZPUk1BVCcsXHJcbiAgJ0lBTV9ST0xFJyxcclxuICAnR1pJUCcsXHJcbiAgJ0lHTk9SRUJMQU5LTElORVMnLFxyXG4gICdJR05PUkVIRUFERVInLFxyXG4gICdKU09OJyxcclxuICAnTFpPUCcsXHJcbiAgJ01BTklGRVNUJyxcclxuICAnTUFTVEVSX1NZTU1FVFJJQ19LRVknLFxyXG4gICdNQVhFUlJPUicsXHJcbiAgJ05PTE9BRCcsXHJcbiAgJ05VTEwgQVMnLFxyXG4gICdSRUFEUkFUSU8nLFxyXG4gICdSRUdJT04nLFxyXG4gICdSRU1PVkVRVU9URVMnLFxyXG4gICdST1VOREVDJyxcclxuICAnU1NIJyxcclxuICAnU1RBVFVQREFURScsXHJcbiAgJ1RJTUVGT1JNQVQnLFxyXG4gICdTRVNTSU9OX1RPS0VOJyxcclxuICAnVFJJTUJMQU5LUycsXHJcbiAgJ1RSVU5DQVRFQ09MVU1OUycsXHJcbiAgJ0VYVEVSTkFMJyxcclxuICAnREFUQSBDQVRBTE9HJyxcclxuICAnSElWRSBNRVRBU1RPUkUnLFxyXG4gICdDQVRBTE9HX1JPTEUnLFxyXG5dO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzTm9JbmRlbnQgPSBbXTtcclxuXHJcbmNvbnN0IHJlc2VydmVkTmV3bGluZVdvcmRzID0gW1xyXG4gICdBTkQnLFxyXG4gICdFTFNFJyxcclxuICAnT1InLFxyXG4gICdPVVRFUiBBUFBMWScsXHJcbiAgJ1dIRU4nLFxyXG4gICdWQUNVVU0nLFxyXG4gICdDT1BZJyxcclxuICAnVU5MT0FEJyxcclxuICAnQU5BTFlaRScsXHJcbiAgJ0FOQUxZU0UnLFxyXG4gICdESVNUS0VZJyxcclxuICAnU09SVEtFWScsXHJcbiAgJ0NPTVBPVU5EJyxcclxuICAnSU5URVJMRUFWRUQnLFxyXG4gIC8vIGpvaW5zXHJcbiAgJ0pPSU4nLFxyXG4gICdJTk5FUiBKT0lOJyxcclxuICAnTEVGVCBKT0lOJyxcclxuICAnTEVGVCBPVVRFUiBKT0lOJyxcclxuICAnUklHSFQgSk9JTicsXHJcbiAgJ1JJR0hUIE9VVEVSIEpPSU4nLFxyXG4gICdGVUxMIEpPSU4nLFxyXG4gICdGVUxMIE9VVEVSIEpPSU4nLFxyXG4gICdDUk9TUyBKT0lOJyxcclxuICAnTkFUVVJBTCBKT0lOJyxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZHNoaWZ0Rm9ybWF0dGVyIGV4dGVuZHMgRm9ybWF0dGVyIHtcclxuICB0b2tlbml6ZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFRva2VuaXplcih7XHJcbiAgICAgIHJlc2VydmVkV29yZHMsXHJcbiAgICAgIHJlc2VydmVkVG9wTGV2ZWxXb3JkcyxcclxuICAgICAgcmVzZXJ2ZWROZXdsaW5lV29yZHMsXHJcbiAgICAgIHJlc2VydmVkVG9wTGV2ZWxXb3Jkc05vSW5kZW50LFxyXG4gICAgICBzdHJpbmdUeXBlczogW2BcIlwiYCwgXCInJ1wiLCAnYGAnXSxcclxuICAgICAgb3BlblBhcmVuczogWycoJ10sXHJcbiAgICAgIGNsb3NlUGFyZW5zOiBbJyknXSxcclxuICAgICAgaW5kZXhlZFBsYWNlaG9sZGVyVHlwZXM6IFsnPyddLFxyXG4gICAgICBuYW1lZFBsYWNlaG9sZGVyVHlwZXM6IFsnQCcsICcjJywgJyQnXSxcclxuICAgICAgbGluZUNvbW1lbnRUeXBlczogWyctLSddLFxyXG4gICAgICBvcGVyYXRvcnM6IFsnfC8nLCAnfHwvJywgJzw8JywgJz4+JywgJyE9JywgJ3x8J10sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEZvcm1hdHRlciBmcm9tICcuLi9jb3JlL0Zvcm1hdHRlcic7XHJcbmltcG9ydCB7IGlzRW5kLCBpc1dpbmRvdyB9IGZyb20gJy4uL2NvcmUvdG9rZW4nO1xyXG5pbXBvcnQgVG9rZW5pemVyIGZyb20gJy4uL2NvcmUvVG9rZW5pemVyJztcclxuaW1wb3J0IHRva2VuVHlwZXMgZnJvbSAnLi4vY29yZS90b2tlblR5cGVzJztcclxuXHJcbmNvbnN0IHJlc2VydmVkV29yZHMgPSBbXHJcbiAgJ0FMTCcsXHJcbiAgJ0FMVEVSJyxcclxuICAnQU5BTFlTRScsXHJcbiAgJ0FOQUxZWkUnLFxyXG4gICdBUlJBWV9aSVAnLFxyXG4gICdBUlJBWScsXHJcbiAgJ0FTJyxcclxuICAnQVNDJyxcclxuICAnQVZHJyxcclxuICAnQkVUV0VFTicsXHJcbiAgJ0NBU0NBREUnLFxyXG4gICdDQVNFJyxcclxuICAnQ0FTVCcsXHJcbiAgJ0NPQUxFU0NFJyxcclxuICAnQ09MTEVDVF9MSVNUJyxcclxuICAnQ09MTEVDVF9TRVQnLFxyXG4gICdDT0xVTU4nLFxyXG4gICdDT0xVTU5TJyxcclxuICAnQ09NTUVOVCcsXHJcbiAgJ0NPTlNUUkFJTlQnLFxyXG4gICdDT05UQUlOUycsXHJcbiAgJ0NPTlZFUlQnLFxyXG4gICdDT1VOVCcsXHJcbiAgJ0NVTUVfRElTVCcsXHJcbiAgJ0NVUlJFTlQgUk9XJyxcclxuICAnQ1VSUkVOVF9EQVRFJyxcclxuICAnQ1VSUkVOVF9USU1FU1RBTVAnLFxyXG4gICdEQVRBQkFTRScsXHJcbiAgJ0RBVEFCQVNFUycsXHJcbiAgJ0RBVEVfQUREJyxcclxuICAnREFURV9TVUInLFxyXG4gICdEQVRFX1RSVU5DJyxcclxuICAnREFZX0hPVVInLFxyXG4gICdEQVlfTUlOVVRFJyxcclxuICAnREFZX1NFQ09ORCcsXHJcbiAgJ0RBWScsXHJcbiAgJ0RBWVMnLFxyXG4gICdERUNPREUnLFxyXG4gICdERUZBVUxUJyxcclxuICAnREVMRVRFJyxcclxuICAnREVOU0VfUkFOSycsXHJcbiAgJ0RFU0MnLFxyXG4gICdERVNDUklCRScsXHJcbiAgJ0RJU1RJTkNUJyxcclxuICAnRElTVElOQ1RST1cnLFxyXG4gICdESVYnLFxyXG4gICdEUk9QJyxcclxuICAnRUxTRScsXHJcbiAgJ0VOQ09ERScsXHJcbiAgJ0VORCcsXHJcbiAgJ0VYSVNUUycsXHJcbiAgJ0VYUExBSU4nLFxyXG4gICdFWFBMT0RFX09VVEVSJyxcclxuICAnRVhQTE9ERScsXHJcbiAgJ0ZJTFRFUicsXHJcbiAgJ0ZJUlNUX1ZBTFVFJyxcclxuICAnRklSU1QnLFxyXG4gICdGSVhFRCcsXHJcbiAgJ0ZMQVRURU4nLFxyXG4gICdGT0xMT1dJTkcnLFxyXG4gICdGUk9NX1VOSVhUSU1FJyxcclxuICAnRlVMTCcsXHJcbiAgJ0dSRUFURVNUJyxcclxuICAnR1JPVVBfQ09OQ0FUJyxcclxuICAnSE9VUl9NSU5VVEUnLFxyXG4gICdIT1VSX1NFQ09ORCcsXHJcbiAgJ0hPVVInLFxyXG4gICdIT1VSUycsXHJcbiAgJ0lGJyxcclxuICAnSUZOVUxMJyxcclxuICAnSU4nLFxyXG4gICdJTlNFUlQnLFxyXG4gICdJTlRFUlZBTCcsXHJcbiAgJ0lOVE8nLFxyXG4gICdJUycsXHJcbiAgJ0xBRycsXHJcbiAgJ0xBU1RfVkFMVUUnLFxyXG4gICdMQVNUJyxcclxuICAnTEVBRCcsXHJcbiAgJ0xFQURJTkcnLFxyXG4gICdMRUFTVCcsXHJcbiAgJ0xFVkVMJyxcclxuICAnTElLRScsXHJcbiAgJ01BWCcsXHJcbiAgJ01FUkdFJyxcclxuICAnTUlOJyxcclxuICAnTUlOVVRFX1NFQ09ORCcsXHJcbiAgJ01JTlVURScsXHJcbiAgJ01PTlRIJyxcclxuICAnTkFUVVJBTCcsXHJcbiAgJ05PVCcsXHJcbiAgJ05PVygpJyxcclxuICAnTlRJTEUnLFxyXG4gICdOVUxMJyxcclxuICAnTlVMTElGJyxcclxuICAnT0ZGU0VUJyxcclxuICAnT04gREVMRVRFJyxcclxuICAnT04gVVBEQVRFJyxcclxuICAnT04nLFxyXG4gICdPTkxZJyxcclxuICAnT1BUSU1JWkUnLFxyXG4gICdPVkVSJyxcclxuICAnUEVSQ0VOVF9SQU5LJyxcclxuICAnUFJFQ0VESU5HJyxcclxuICAnUkFOR0UnLFxyXG4gICdSQU5LJyxcclxuICAnUkVHRVhQJyxcclxuICAnUkVOQU1FJyxcclxuICAnUkxJS0UnLFxyXG4gICdST1cnLFxyXG4gICdST1dTJyxcclxuICAnU0VDT05EJyxcclxuICAnU0VQQVJBVE9SJyxcclxuICAnU0VRVUVOQ0UnLFxyXG4gICdTSVpFJyxcclxuICAnU1RSSU5HJyxcclxuICAnU1RSVUNUJyxcclxuICAnU1VNJyxcclxuICAnVEFCTEUnLFxyXG4gICdUQUJMRVMnLFxyXG4gICdURU1QT1JBUlknLFxyXG4gICdUSEVOJyxcclxuICAnVE9fREFURScsXHJcbiAgJ1RPX0pTT04nLFxyXG4gICdUTycsXHJcbiAgJ1RSQUlMSU5HJyxcclxuICAnVFJBTlNGT1JNJyxcclxuICAnVFJVRScsXHJcbiAgJ1RSVU5DQVRFJyxcclxuICAnVFlQRScsXHJcbiAgJ1RZUEVTJyxcclxuICAnVU5CT1VOREVEJyxcclxuICAnVU5JUVVFJyxcclxuICAnVU5JWF9USU1FU1RBTVAnLFxyXG4gICdVTkxPQ0snLFxyXG4gICdVTlNJR05FRCcsXHJcbiAgJ1VTSU5HJyxcclxuICAnVkFSSUFCTEVTJyxcclxuICAnVklFVycsXHJcbiAgJ1dIRU4nLFxyXG4gICdXSVRIJyxcclxuICAnWUVBUl9NT05USCcsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHMgPSBbXHJcbiAgJ0FERCcsXHJcbiAgJ0FGVEVSJyxcclxuICAnQUxURVIgQ09MVU1OJyxcclxuICAnQUxURVIgREFUQUJBU0UnLFxyXG4gICdBTFRFUiBTQ0hFTUEnLFxyXG4gICdBTFRFUiBUQUJMRScsXHJcbiAgJ0NMVVNURVIgQlknLFxyXG4gICdDTFVTVEVSRUQgQlknLFxyXG4gICdERUxFVEUgRlJPTScsXHJcbiAgJ0RJU1RSSUJVVEUgQlknLFxyXG4gICdGUk9NJyxcclxuICAnR1JPVVAgQlknLFxyXG4gICdIQVZJTkcnLFxyXG4gICdJTlNFUlQgSU5UTycsXHJcbiAgJ0lOU0VSVCcsXHJcbiAgJ0xJTUlUJyxcclxuICAnT1BUSU9OUycsXHJcbiAgJ09SREVSIEJZJyxcclxuICAnUEFSVElUSU9OIEJZJyxcclxuICAnUEFSVElUSU9ORUQgQlknLFxyXG4gICdSQU5HRScsXHJcbiAgJ1JPV1MnLFxyXG4gICdTRUxFQ1QnLFxyXG4gICdTRVQgQ1VSUkVOVCBTQ0hFTUEnLFxyXG4gICdTRVQgU0NIRU1BJyxcclxuICAnU0VUJyxcclxuICAnVEJMUFJPUEVSVElFUycsXHJcbiAgJ1VQREFURScsXHJcbiAgJ1VTSU5HJyxcclxuICAnVkFMVUVTJyxcclxuICAnV0hFUkUnLFxyXG4gICdXSU5ET1cnLFxyXG5dO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzTm9JbmRlbnQgPSBbXHJcbiAgJ0VYQ0VQVCBBTEwnLFxyXG4gICdFWENFUFQnLFxyXG4gICdJTlRFUlNFQ1QgQUxMJyxcclxuICAnSU5URVJTRUNUJyxcclxuICAnVU5JT04gQUxMJyxcclxuICAnVU5JT04nLFxyXG5dO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWROZXdsaW5lV29yZHMgPSBbXHJcbiAgJ0FORCcsXHJcbiAgJ0NSRUFURSBPUicsXHJcbiAgJ0NSRUFURScsXHJcbiAgJ0VMU0UnLFxyXG4gICdMQVRFUkFMIFZJRVcnLFxyXG4gICdPUicsXHJcbiAgJ09VVEVSIEFQUExZJyxcclxuICAnV0hFTicsXHJcbiAgJ1hPUicsXHJcbiAgLy8gam9pbnNcclxuICAnSk9JTicsXHJcbiAgJ0lOTkVSIEpPSU4nLFxyXG4gICdMRUZUIEpPSU4nLFxyXG4gICdMRUZUIE9VVEVSIEpPSU4nLFxyXG4gICdSSUdIVCBKT0lOJyxcclxuICAnUklHSFQgT1VURVIgSk9JTicsXHJcbiAgJ0ZVTEwgSk9JTicsXHJcbiAgJ0ZVTEwgT1VURVIgSk9JTicsXHJcbiAgJ0NST1NTIEpPSU4nLFxyXG4gICdOQVRVUkFMIEpPSU4nLFxyXG4gIC8vIG5vbi1zdGFuZGFyZC1qb2luc1xyXG4gICdBTlRJIEpPSU4nLFxyXG4gICdTRU1JIEpPSU4nLFxyXG4gICdMRUZUIEFOVEkgSk9JTicsXHJcbiAgJ0xFRlQgU0VNSSBKT0lOJyxcclxuICAnUklHSFQgT1VURVIgSk9JTicsXHJcbiAgJ1JJR0hUIFNFTUkgSk9JTicsXHJcbiAgJ05BVFVSQUwgQU5USSBKT0lOJyxcclxuICAnTkFUVVJBTCBGVUxMIE9VVEVSIEpPSU4nLFxyXG4gICdOQVRVUkFMIElOTkVSIEpPSU4nLFxyXG4gICdOQVRVUkFMIExFRlQgQU5USSBKT0lOJyxcclxuICAnTkFUVVJBTCBMRUZUIE9VVEVSIEpPSU4nLFxyXG4gICdOQVRVUkFMIExFRlQgU0VNSSBKT0lOJyxcclxuICAnTkFUVVJBTCBPVVRFUiBKT0lOJyxcclxuICAnTkFUVVJBTCBSSUdIVCBPVVRFUiBKT0lOJyxcclxuICAnTkFUVVJBTCBSSUdIVCBTRU1JIEpPSU4nLFxyXG4gICdOQVRVUkFMIFNFTUkgSk9JTicsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFya1NxbEZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XHJcbiAgdG9rZW5pemVyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoe1xyXG4gICAgICByZXNlcnZlZFdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHMsXHJcbiAgICAgIHJlc2VydmVkTmV3bGluZVdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCxcclxuICAgICAgc3RyaW5nVHlwZXM6IFtgXCJcImAsIFwiJydcIiwgJ2BgJywgJ3t9J10sXHJcbiAgICAgIG9wZW5QYXJlbnM6IFsnKCcsICdDQVNFJ10sXHJcbiAgICAgIGNsb3NlUGFyZW5zOiBbJyknLCAnRU5EJ10sXHJcbiAgICAgIGluZGV4ZWRQbGFjZWhvbGRlclR5cGVzOiBbJz8nXSxcclxuICAgICAgbmFtZWRQbGFjZWhvbGRlclR5cGVzOiBbJyQnXSxcclxuICAgICAgbGluZUNvbW1lbnRUeXBlczogWyctLSddLFxyXG4gICAgICBvcGVyYXRvcnM6IFsnIT0nLCAnPD0+JywgJyYmJywgJ3x8JywgJz09J10sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRva2VuT3ZlcnJpZGUodG9rZW4pIHtcclxuICAgIC8vIEZpeCBjYXNlcyB3aGVyZSBuYW1lcyBhcmUgYW1iaWd1b3VzbHkga2V5d29yZHMgb3IgZnVuY3Rpb25zXHJcbiAgICBpZiAoaXNXaW5kb3codG9rZW4pKSB7XHJcbiAgICAgIGNvbnN0IGFoZWFkVG9rZW4gPSB0aGlzLnRva2VuTG9va0FoZWFkKCk7XHJcbiAgICAgIGlmIChhaGVhZFRva2VuICYmIGFoZWFkVG9rZW4udHlwZSA9PT0gdG9rZW5UeXBlcy5PUEVOX1BBUkVOKSB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIGNhbGwsIHRyZWF0IGl0IGFzIGEgcmVzZXJ2ZWQgd29yZFxyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IHRva2VuVHlwZXMuUkVTRVJWRUQsIHZhbHVlOiB0b2tlbi52YWx1ZSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRml4IGNhc2VzIHdoZXJlIG5hbWVzIGFyZSBhbWJpZ3VvdXNseSBrZXl3b3JkcyBvciBwcm9wZXJ0aWVzXHJcbiAgICBpZiAoaXNFbmQodG9rZW4pKSB7XHJcbiAgICAgIGNvbnN0IGJhY2tUb2tlbiA9IHRoaXMudG9rZW5Mb29rQmVoaW5kKCk7XHJcbiAgICAgIGlmIChiYWNrVG9rZW4gJiYgYmFja1Rva2VuLnR5cGUgPT09IHRva2VuVHlwZXMuT1BFUkFUT1IgJiYgYmFja1Rva2VuLnZhbHVlID09PSAnLicpIHtcclxuICAgICAgICAvLyBUaGlzIGlzIHdpbmRvdygpLmVuZCAob3Igc2ltaWxhcikgbm90IENBU0UgLi4uIEVORFxyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IHRva2VuVHlwZXMuV09SRCwgdmFsdWU6IHRva2VuLnZhbHVlIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9rZW47XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBGb3JtYXR0ZXIgZnJvbSAnLi4vY29yZS9Gb3JtYXR0ZXInO1xyXG5pbXBvcnQgVG9rZW5pemVyIGZyb20gJy4uL2NvcmUvVG9rZW5pemVyJztcclxuXHJcbi8vIGh0dHBzOi8vamFrZXdoZWF0LmdpdGh1Yi5pby9zcWwtb3ZlcnZpZXcvc3FsLTIwMDgtZm91bmRhdGlvbi1ncmFtbWFyLmh0bWwjcmVzZXJ2ZWQtd29yZFxyXG5jb25zdCByZXNlcnZlZFdvcmRzID0gW1xyXG4gICdBQlMnLFxyXG4gICdBTEwnLFxyXG4gICdBTExPQ0FURScsXHJcbiAgJ0FMVEVSJyxcclxuICAnQU5EJyxcclxuICAnQU5ZJyxcclxuICAnQVJFJyxcclxuICAnQVJSQVknLFxyXG4gICdBUycsXHJcbiAgJ0FTRU5TSVRJVkUnLFxyXG4gICdBU1lNTUVUUklDJyxcclxuICAnQVQnLFxyXG4gICdBVE9NSUMnLFxyXG4gICdBVVRIT1JJWkFUSU9OJyxcclxuICAnQVZHJyxcclxuICAnQkVHSU4nLFxyXG4gICdCRVRXRUVOJyxcclxuICAnQklHSU5UJyxcclxuICAnQklOQVJZJyxcclxuICAnQkxPQicsXHJcbiAgJ0JPT0xFQU4nLFxyXG4gICdCT1RIJyxcclxuICAnQlknLFxyXG4gICdDQUxMJyxcclxuICAnQ0FMTEVEJyxcclxuICAnQ0FSRElOQUxJVFknLFxyXG4gICdDQVNDQURFRCcsXHJcbiAgJ0NBU0UnLFxyXG4gICdDQVNUJyxcclxuICAnQ0VJTCcsXHJcbiAgJ0NFSUxJTkcnLFxyXG4gICdDSEFSJyxcclxuICAnQ0hBUl9MRU5HVEgnLFxyXG4gICdDSEFSQUNURVInLFxyXG4gICdDSEFSQUNURVJfTEVOR1RIJyxcclxuICAnQ0hFQ0snLFxyXG4gICdDTE9CJyxcclxuICAnQ0xPU0UnLFxyXG4gICdDT0FMRVNDRScsXHJcbiAgJ0NPTExBVEUnLFxyXG4gICdDT0xMRUNUJyxcclxuICAnQ09MVU1OJyxcclxuICAnQ09NTUlUJyxcclxuICAnQ09ORElUSU9OJyxcclxuICAnQ09OTkVDVCcsXHJcbiAgJ0NPTlNUUkFJTlQnLFxyXG4gICdDT05WRVJUJyxcclxuICAnQ09SUicsXHJcbiAgJ0NPUlJFU1BPTkRJTkcnLFxyXG4gICdDT1VOVCcsXHJcbiAgJ0NPVkFSX1BPUCcsXHJcbiAgJ0NPVkFSX1NBTVAnLFxyXG4gICdDUkVBVEUnLFxyXG4gICdDUk9TUycsXHJcbiAgJ0NVQkUnLFxyXG4gICdDVU1FX0RJU1QnLFxyXG4gICdDVVJSRU5UJyxcclxuICAnQ1VSUkVOVF9DQVRBTE9HJyxcclxuICAnQ1VSUkVOVF9EQVRFJyxcclxuICAnQ1VSUkVOVF9ERUZBVUxUX1RSQU5TRk9STV9HUk9VUCcsXHJcbiAgJ0NVUlJFTlRfUEFUSCcsXHJcbiAgJ0NVUlJFTlRfUk9MRScsXHJcbiAgJ0NVUlJFTlRfU0NIRU1BJyxcclxuICAnQ1VSUkVOVF9USU1FJyxcclxuICAnQ1VSUkVOVF9USU1FU1RBTVAnLFxyXG4gICdDVVJSRU5UX1RSQU5TRk9STV9HUk9VUF9GT1JfVFlQRScsXHJcbiAgJ0NVUlJFTlRfVVNFUicsXHJcbiAgJ0NVUlNPUicsXHJcbiAgJ0NZQ0xFJyxcclxuICAnREFURScsXHJcbiAgJ0RBWScsXHJcbiAgJ0RFQUxMT0NBVEUnLFxyXG4gICdERUMnLFxyXG4gICdERUNJTUFMJyxcclxuICAnREVDTEFSRScsXHJcbiAgJ0RFRkFVTFQnLFxyXG4gICdERUxFVEUnLFxyXG4gICdERU5TRV9SQU5LJyxcclxuICAnREVSRUYnLFxyXG4gICdERVNDUklCRScsXHJcbiAgJ0RFVEVSTUlOSVNUSUMnLFxyXG4gICdESVNDT05ORUNUJyxcclxuICAnRElTVElOQ1QnLFxyXG4gICdET1VCTEUnLFxyXG4gICdEUk9QJyxcclxuICAnRFlOQU1JQycsXHJcbiAgJ0VBQ0gnLFxyXG4gICdFTEVNRU5UJyxcclxuICAnRUxTRScsXHJcbiAgJ0VORCcsXHJcbiAgJ0VORC1FWEVDJyxcclxuICAnRVNDQVBFJyxcclxuICAnRVZFUlknLFxyXG4gICdFWENFUFQnLFxyXG4gICdFWEVDJyxcclxuICAnRVhFQ1VURScsXHJcbiAgJ0VYSVNUUycsXHJcbiAgJ0VYUCcsXHJcbiAgJ0VYVEVSTkFMJyxcclxuICAnRVhUUkFDVCcsXHJcbiAgJ0ZBTFNFJyxcclxuICAnRkVUQ0gnLFxyXG4gICdGSUxURVInLFxyXG4gICdGTE9BVCcsXHJcbiAgJ0ZMT09SJyxcclxuICAnRk9SJyxcclxuICAnRk9SRUlHTicsXHJcbiAgJ0ZSRUUnLFxyXG4gICdGUk9NJyxcclxuICAnRlVMTCcsXHJcbiAgJ0ZVTkNUSU9OJyxcclxuICAnRlVTSU9OJyxcclxuICAnR0VUJyxcclxuICAnR0xPQkFMJyxcclxuICAnR1JBTlQnLFxyXG4gICdHUk9VUCcsXHJcbiAgJ0dST1VQSU5HJyxcclxuICAnSEFWSU5HJyxcclxuICAnSE9MRCcsXHJcbiAgJ0hPVVInLFxyXG4gICdJREVOVElUWScsXHJcbiAgJ0lOJyxcclxuICAnSU5ESUNBVE9SJyxcclxuICAnSU5ORVInLFxyXG4gICdJTk9VVCcsXHJcbiAgJ0lOU0VOU0lUSVZFJyxcclxuICAnSU5TRVJUJyxcclxuICAnSU5UJyxcclxuICAnSU5URUdFUicsXHJcbiAgJ0lOVEVSU0VDVCcsXHJcbiAgJ0lOVEVSU0VDVElPTicsXHJcbiAgJ0lOVEVSVkFMJyxcclxuICAnSU5UTycsXHJcbiAgJ0lTJyxcclxuICAnSk9JTicsXHJcbiAgJ0xBTkdVQUdFJyxcclxuICAnTEFSR0UnLFxyXG4gICdMQVRFUkFMJyxcclxuICAnTEVBRElORycsXHJcbiAgJ0xFRlQnLFxyXG4gICdMSUtFJyxcclxuICAnTElLRV9SRUdFWCcsXHJcbiAgJ0xOJyxcclxuICAnTE9DQUwnLFxyXG4gICdMT0NBTFRJTUUnLFxyXG4gICdMT0NBTFRJTUVTVEFNUCcsXHJcbiAgJ0xPV0VSJyxcclxuICAnTUFUQ0gnLFxyXG4gICdNQVgnLFxyXG4gICdNRU1CRVInLFxyXG4gICdNRVJHRScsXHJcbiAgJ01FVEhPRCcsXHJcbiAgJ01JTicsXHJcbiAgJ01JTlVURScsXHJcbiAgJ01PRCcsXHJcbiAgJ01PRElGSUVTJyxcclxuICAnTU9EVUxFJyxcclxuICAnTU9OVEgnLFxyXG4gICdNVUxUSVNFVCcsXHJcbiAgJ05BVElPTkFMJyxcclxuICAnTkFUVVJBTCcsXHJcbiAgJ05DSEFSJyxcclxuICAnTkNMT0InLFxyXG4gICdORVcnLFxyXG4gICdOTycsXHJcbiAgJ05PTkUnLFxyXG4gICdOT1JNQUxJWkUnLFxyXG4gICdOT1QnLFxyXG4gICdOVUxMJyxcclxuICAnTlVMTElGJyxcclxuICAnTlVNRVJJQycsXHJcbiAgJ09DVEVUX0xFTkdUSCcsXHJcbiAgJ09DQ1VSUkVOQ0VTX1JFR0VYJyxcclxuICAnT0YnLFxyXG4gICdPTEQnLFxyXG4gICdPTicsXHJcbiAgJ09OTFknLFxyXG4gICdPUEVOJyxcclxuICAnT1InLFxyXG4gICdPUkRFUicsXHJcbiAgJ09VVCcsXHJcbiAgJ09VVEVSJyxcclxuICAnT1ZFUicsXHJcbiAgJ09WRVJMQVBTJyxcclxuICAnT1ZFUkxBWScsXHJcbiAgJ1BBUkFNRVRFUicsXHJcbiAgJ1BBUlRJVElPTicsXHJcbiAgJ1BFUkNFTlRfUkFOSycsXHJcbiAgJ1BFUkNFTlRJTEVfQ09OVCcsXHJcbiAgJ1BFUkNFTlRJTEVfRElTQycsXHJcbiAgJ1BPU0lUSU9OJyxcclxuICAnUE9TSVRJT05fUkVHRVgnLFxyXG4gICdQT1dFUicsXHJcbiAgJ1BSRUNJU0lPTicsXHJcbiAgJ1BSRVBBUkUnLFxyXG4gICdQUklNQVJZJyxcclxuICAnUFJPQ0VEVVJFJyxcclxuICAnUkFOR0UnLFxyXG4gICdSQU5LJyxcclxuICAnUkVBRFMnLFxyXG4gICdSRUFMJyxcclxuICAnUkVDVVJTSVZFJyxcclxuICAnUkVGJyxcclxuICAnUkVGRVJFTkNFUycsXHJcbiAgJ1JFRkVSRU5DSU5HJyxcclxuICAnUkVHUl9BVkdYJyxcclxuICAnUkVHUl9BVkdZJyxcclxuICAnUkVHUl9DT1VOVCcsXHJcbiAgJ1JFR1JfSU5URVJDRVBUJyxcclxuICAnUkVHUl9SMicsXHJcbiAgJ1JFR1JfU0xPUEUnLFxyXG4gICdSRUdSX1NYWCcsXHJcbiAgJ1JFR1JfU1hZJyxcclxuICAnUkVHUl9TWVknLFxyXG4gICdSRUxFQVNFJyxcclxuICAnUkVTVUxUJyxcclxuICAnUkVUVVJOJyxcclxuICAnUkVUVVJOUycsXHJcbiAgJ1JFVk9LRScsXHJcbiAgJ1JJR0hUJyxcclxuICAnUk9MTEJBQ0snLFxyXG4gICdST0xMVVAnLFxyXG4gICdST1cnLFxyXG4gICdST1dfTlVNQkVSJyxcclxuICAnUk9XUycsXHJcbiAgJ1NBVkVQT0lOVCcsXHJcbiAgJ1NDT1BFJyxcclxuICAnU0NST0xMJyxcclxuICAnU0VBUkNIJyxcclxuICAnU0VDT05EJyxcclxuICAnU0VMRUNUJyxcclxuICAnU0VOU0lUSVZFJyxcclxuICAnU0VTU0lPTl9VU0VSJyxcclxuICAnU0VUJyxcclxuICAnU0lNSUxBUicsXHJcbiAgJ1NNQUxMSU5UJyxcclxuICAnU09NRScsXHJcbiAgJ1NQRUNJRklDJyxcclxuICAnU1BFQ0lGSUNUWVBFJyxcclxuICAnU1FMJyxcclxuICAnU1FMRVhDRVBUSU9OJyxcclxuICAnU1FMU1RBVEUnLFxyXG4gICdTUUxXQVJOSU5HJyxcclxuICAnU1FSVCcsXHJcbiAgJ1NUQVJUJyxcclxuICAnU1RBVElDJyxcclxuICAnU1REREVWX1BPUCcsXHJcbiAgJ1NURERFVl9TQU1QJyxcclxuICAnU1VCTVVMVElTRVQnLFxyXG4gICdTVUJTVFJJTkcnLFxyXG4gICdTVUJTVFJJTkdfUkVHRVgnLFxyXG4gICdTVU0nLFxyXG4gICdTWU1NRVRSSUMnLFxyXG4gICdTWVNURU0nLFxyXG4gICdTWVNURU1fVVNFUicsXHJcbiAgJ1RBQkxFJyxcclxuICAnVEFCTEVTQU1QTEUnLFxyXG4gICdUSEVOJyxcclxuICAnVElNRScsXHJcbiAgJ1RJTUVTVEFNUCcsXHJcbiAgJ1RJTUVaT05FX0hPVVInLFxyXG4gICdUSU1FWk9ORV9NSU5VVEUnLFxyXG4gICdUTycsXHJcbiAgJ1RSQUlMSU5HJyxcclxuICAnVFJBTlNMQVRFJyxcclxuICAnVFJBTlNMQVRFX1JFR0VYJyxcclxuICAnVFJBTlNMQVRJT04nLFxyXG4gICdUUkVBVCcsXHJcbiAgJ1RSSUdHRVInLFxyXG4gICdUUklNJyxcclxuICAnVFJVRScsXHJcbiAgJ1VFU0NBUEUnLFxyXG4gICdVTklPTicsXHJcbiAgJ1VOSVFVRScsXHJcbiAgJ1VOS05PV04nLFxyXG4gICdVTk5FU1QnLFxyXG4gICdVUERBVEUnLFxyXG4gICdVUFBFUicsXHJcbiAgJ1VTRVInLFxyXG4gICdVU0lORycsXHJcbiAgJ1ZBTFVFJyxcclxuICAnVkFMVUVTJyxcclxuICAnVkFSX1BPUCcsXHJcbiAgJ1ZBUl9TQU1QJyxcclxuICAnVkFSQklOQVJZJyxcclxuICAnVkFSQ0hBUicsXHJcbiAgJ1ZBUllJTkcnLFxyXG4gICdXSEVOJyxcclxuICAnV0hFTkVWRVInLFxyXG4gICdXSEVSRScsXHJcbiAgJ1dJRFRIX0JVQ0tFVCcsXHJcbiAgJ1dJTkRPVycsXHJcbiAgJ1dJVEgnLFxyXG4gICdXSVRISU4nLFxyXG4gICdXSVRIT1VUJyxcclxuICAnWUVBUicsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHMgPSBbXHJcbiAgJ0FERCcsXHJcbiAgJ0FMVEVSIENPTFVNTicsXHJcbiAgJ0FMVEVSIFRBQkxFJyxcclxuICAnQ0FTRScsXHJcbiAgJ0RFTEVURSBGUk9NJyxcclxuICAnRU5EJyxcclxuICAnRkVUQ0ggRklSU1QnLFxyXG4gICdGRVRDSCBORVhUJyxcclxuICAnRkVUQ0ggUFJJT1InLFxyXG4gICdGRVRDSCBMQVNUJyxcclxuICAnRkVUQ0ggQUJTT0xVVEUnLFxyXG4gICdGRVRDSCBSRUxBVElWRScsXHJcbiAgJ0ZST00nLFxyXG4gICdHUk9VUCBCWScsXHJcbiAgJ0hBVklORycsXHJcbiAgJ0lOU0VSVCBJTlRPJyxcclxuICAnTElNSVQnLFxyXG4gICdPUkRFUiBCWScsXHJcbiAgJ1NFTEVDVCcsXHJcbiAgJ1NFVCBTQ0hFTUEnLFxyXG4gICdTRVQnLFxyXG4gICdVUERBVEUnLFxyXG4gICdWQUxVRVMnLFxyXG4gICdXSEVSRScsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCA9IFtcclxuICAnSU5URVJTRUNUJyxcclxuICAnSU5URVJTRUNUIEFMTCcsXHJcbiAgJ0lOVEVSU0VDVCBESVNUSU5DVCcsXHJcbiAgJ1VOSU9OJyxcclxuICAnVU5JT04gQUxMJyxcclxuICAnVU5JT04gRElTVElOQ1QnLFxyXG4gICdFWENFUFQnLFxyXG4gICdFWENFUFQgQUxMJyxcclxuICAnRVhDRVBUIERJU1RJTkNUJyxcclxuXTtcclxuXHJcbmNvbnN0IHJlc2VydmVkTmV3bGluZVdvcmRzID0gW1xyXG4gICdBTkQnLFxyXG4gICdFTFNFJyxcclxuICAnT1InLFxyXG4gICdXSEVOJyxcclxuICAvLyBqb2luc1xyXG4gICdKT0lOJyxcclxuICAnSU5ORVIgSk9JTicsXHJcbiAgJ0xFRlQgSk9JTicsXHJcbiAgJ0xFRlQgT1VURVIgSk9JTicsXHJcbiAgJ1JJR0hUIEpPSU4nLFxyXG4gICdSSUdIVCBPVVRFUiBKT0lOJyxcclxuICAnRlVMTCBKT0lOJyxcclxuICAnRlVMTCBPVVRFUiBKT0lOJyxcclxuICAnQ1JPU1MgSk9JTicsXHJcbiAgJ05BVFVSQUwgSk9JTicsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFuZGFyZFNxbEZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XHJcbiAgdG9rZW5pemVyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoe1xyXG4gICAgICByZXNlcnZlZFdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHMsXHJcbiAgICAgIHJlc2VydmVkTmV3bGluZVdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCxcclxuICAgICAgc3RyaW5nVHlwZXM6IFtgXCJcImAsIFwiJydcIl0sXHJcbiAgICAgIG9wZW5QYXJlbnM6IFsnKCcsICdDQVNFJ10sXHJcbiAgICAgIGNsb3NlUGFyZW5zOiBbJyknLCAnRU5EJ10sXHJcbiAgICAgIGluZGV4ZWRQbGFjZWhvbGRlclR5cGVzOiBbJz8nXSxcclxuICAgICAgbmFtZWRQbGFjZWhvbGRlclR5cGVzOiBbXSxcclxuICAgICAgbGluZUNvbW1lbnRUeXBlczogWyctLSddLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBGb3JtYXR0ZXIgZnJvbSAnLi4vY29yZS9Gb3JtYXR0ZXInO1xyXG5pbXBvcnQgVG9rZW5pemVyIGZyb20gJy4uL2NvcmUvVG9rZW5pemVyJztcclxuXHJcbmNvbnN0IHJlc2VydmVkV29yZHMgPSBbXHJcbiAgJ0FERCcsXHJcbiAgJ0VYVEVSTkFMJyxcclxuICAnUFJPQ0VEVVJFJyxcclxuICAnQUxMJyxcclxuICAnRkVUQ0gnLFxyXG4gICdQVUJMSUMnLFxyXG4gICdBTFRFUicsXHJcbiAgJ0ZJTEUnLFxyXG4gICdSQUlTRVJST1InLFxyXG4gICdBTkQnLFxyXG4gICdGSUxMRkFDVE9SJyxcclxuICAnUkVBRCcsXHJcbiAgJ0FOWScsXHJcbiAgJ0ZPUicsXHJcbiAgJ1JFQURURVhUJyxcclxuICAnQVMnLFxyXG4gICdGT1JFSUdOJyxcclxuICAnUkVDT05GSUdVUkUnLFxyXG4gICdBU0MnLFxyXG4gICdGUkVFVEVYVCcsXHJcbiAgJ1JFRkVSRU5DRVMnLFxyXG4gICdBVVRIT1JJWkFUSU9OJyxcclxuICAnRlJFRVRFWFRUQUJMRScsXHJcbiAgJ1JFUExJQ0FUSU9OJyxcclxuICAnQkFDS1VQJyxcclxuICAnRlJPTScsXHJcbiAgJ1JFU1RPUkUnLFxyXG4gICdCRUdJTicsXHJcbiAgJ0ZVTEwnLFxyXG4gICdSRVNUUklDVCcsXHJcbiAgJ0JFVFdFRU4nLFxyXG4gICdGVU5DVElPTicsXHJcbiAgJ1JFVFVSTicsXHJcbiAgJ0JSRUFLJyxcclxuICAnR09UTycsXHJcbiAgJ1JFVkVSVCcsXHJcbiAgJ0JST1dTRScsXHJcbiAgJ0dSQU5UJyxcclxuICAnUkVWT0tFJyxcclxuICAnQlVMSycsXHJcbiAgJ0dST1VQJyxcclxuICAnUklHSFQnLFxyXG4gICdCWScsXHJcbiAgJ0hBVklORycsXHJcbiAgJ1JPTExCQUNLJyxcclxuICAnQ0FTQ0FERScsXHJcbiAgJ0hPTERMT0NLJyxcclxuICAnUk9XQ09VTlQnLFxyXG4gICdDQVNFJyxcclxuICAnSURFTlRJVFknLFxyXG4gICdST1dHVUlEQ09MJyxcclxuICAnQ0hFQ0snLFxyXG4gICdJREVOVElUWV9JTlNFUlQnLFxyXG4gICdSVUxFJyxcclxuICAnQ0hFQ0tQT0lOVCcsXHJcbiAgJ0lERU5USVRZQ09MJyxcclxuICAnU0FWRScsXHJcbiAgJ0NMT1NFJyxcclxuICAnSUYnLFxyXG4gICdTQ0hFTUEnLFxyXG4gICdDTFVTVEVSRUQnLFxyXG4gICdJTicsXHJcbiAgJ1NFQ1VSSVRZQVVESVQnLFxyXG4gICdDT0FMRVNDRScsXHJcbiAgJ0lOREVYJyxcclxuICAnU0VMRUNUJyxcclxuICAnQ09MTEFURScsXHJcbiAgJ0lOTkVSJyxcclxuICAnU0VNQU5USUNLRVlQSFJBU0VUQUJMRScsXHJcbiAgJ0NPTFVNTicsXHJcbiAgJ0lOU0VSVCcsXHJcbiAgJ1NFTUFOVElDU0lNSUxBUklUWURFVEFJTFNUQUJMRScsXHJcbiAgJ0NPTU1JVCcsXHJcbiAgJ0lOVEVSU0VDVCcsXHJcbiAgJ1NFTUFOVElDU0lNSUxBUklUWVRBQkxFJyxcclxuICAnQ09NUFVURScsXHJcbiAgJ0lOVE8nLFxyXG4gICdTRVNTSU9OX1VTRVInLFxyXG4gICdDT05TVFJBSU5UJyxcclxuICAnSVMnLFxyXG4gICdTRVQnLFxyXG4gICdDT05UQUlOUycsXHJcbiAgJ0pPSU4nLFxyXG4gICdTRVRVU0VSJyxcclxuICAnQ09OVEFJTlNUQUJMRScsXHJcbiAgJ0tFWScsXHJcbiAgJ1NIVVRET1dOJyxcclxuICAnQ09OVElOVUUnLFxyXG4gICdLSUxMJyxcclxuICAnU09NRScsXHJcbiAgJ0NPTlZFUlQnLFxyXG4gICdMRUZUJyxcclxuICAnU1RBVElTVElDUycsXHJcbiAgJ0NSRUFURScsXHJcbiAgJ0xJS0UnLFxyXG4gICdTWVNURU1fVVNFUicsXHJcbiAgJ0NST1NTJyxcclxuICAnTElORU5PJyxcclxuICAnVEFCTEUnLFxyXG4gICdDVVJSRU5UJyxcclxuICAnTE9BRCcsXHJcbiAgJ1RBQkxFU0FNUExFJyxcclxuICAnQ1VSUkVOVF9EQVRFJyxcclxuICAnTUVSR0UnLFxyXG4gICdURVhUU0laRScsXHJcbiAgJ0NVUlJFTlRfVElNRScsXHJcbiAgJ05BVElPTkFMJyxcclxuICAnVEhFTicsXHJcbiAgJ0NVUlJFTlRfVElNRVNUQU1QJyxcclxuICAnTk9DSEVDSycsXHJcbiAgJ1RPJyxcclxuICAnQ1VSUkVOVF9VU0VSJyxcclxuICAnTk9OQ0xVU1RFUkVEJyxcclxuICAnVE9QJyxcclxuICAnQ1VSU09SJyxcclxuICAnTk9UJyxcclxuICAnVFJBTicsXHJcbiAgJ0RBVEFCQVNFJyxcclxuICAnTlVMTCcsXHJcbiAgJ1RSQU5TQUNUSU9OJyxcclxuICAnREJDQycsXHJcbiAgJ05VTExJRicsXHJcbiAgJ1RSSUdHRVInLFxyXG4gICdERUFMTE9DQVRFJyxcclxuICAnT0YnLFxyXG4gICdUUlVOQ0FURScsXHJcbiAgJ0RFQ0xBUkUnLFxyXG4gICdPRkYnLFxyXG4gICdUUllfQ09OVkVSVCcsXHJcbiAgJ0RFRkFVTFQnLFxyXG4gICdPRkZTRVRTJyxcclxuICAnVFNFUVVBTCcsXHJcbiAgJ0RFTEVURScsXHJcbiAgJ09OJyxcclxuICAnVU5JT04nLFxyXG4gICdERU5ZJyxcclxuICAnT1BFTicsXHJcbiAgJ1VOSVFVRScsXHJcbiAgJ0RFU0MnLFxyXG4gICdPUEVOREFUQVNPVVJDRScsXHJcbiAgJ1VOUElWT1QnLFxyXG4gICdESVNLJyxcclxuICAnT1BFTlFVRVJZJyxcclxuICAnVVBEQVRFJyxcclxuICAnRElTVElOQ1QnLFxyXG4gICdPUEVOUk9XU0VUJyxcclxuICAnVVBEQVRFVEVYVCcsXHJcbiAgJ0RJU1RSSUJVVEVEJyxcclxuICAnT1BFTlhNTCcsXHJcbiAgJ1VTRScsXHJcbiAgJ0RPVUJMRScsXHJcbiAgJ09QVElPTicsXHJcbiAgJ1VTRVInLFxyXG4gICdEUk9QJyxcclxuICAnT1InLFxyXG4gICdWQUxVRVMnLFxyXG4gICdEVU1QJyxcclxuICAnT1JERVInLFxyXG4gICdWQVJZSU5HJyxcclxuICAnRUxTRScsXHJcbiAgJ09VVEVSJyxcclxuICAnVklFVycsXHJcbiAgJ0VORCcsXHJcbiAgJ09WRVInLFxyXG4gICdXQUlURk9SJyxcclxuICAnRVJSTFZMJyxcclxuICAnUEVSQ0VOVCcsXHJcbiAgJ1dIRU4nLFxyXG4gICdFU0NBUEUnLFxyXG4gICdQSVZPVCcsXHJcbiAgJ1dIRVJFJyxcclxuICAnRVhDRVBUJyxcclxuICAnUExBTicsXHJcbiAgJ1dISUxFJyxcclxuICAnRVhFQycsXHJcbiAgJ1BSRUNJU0lPTicsXHJcbiAgJ1dJVEgnLFxyXG4gICdFWEVDVVRFJyxcclxuICAnUFJJTUFSWScsXHJcbiAgJ1dJVEhJTiBHUk9VUCcsXHJcbiAgJ0VYSVNUUycsXHJcbiAgJ1BSSU5UJyxcclxuICAnV1JJVEVURVhUJyxcclxuICAnRVhJVCcsXHJcbiAgJ1BST0MnLFxyXG5dO1xyXG5cclxuY29uc3QgcmVzZXJ2ZWRUb3BMZXZlbFdvcmRzID0gW1xyXG4gICdBREQnLFxyXG4gICdBTFRFUiBDT0xVTU4nLFxyXG4gICdBTFRFUiBUQUJMRScsXHJcbiAgJ0NBU0UnLFxyXG4gICdERUxFVEUgRlJPTScsXHJcbiAgJ0VORCcsXHJcbiAgJ0VYQ0VQVCcsXHJcbiAgJ0ZST00nLFxyXG4gICdHUk9VUCBCWScsXHJcbiAgJ0hBVklORycsXHJcbiAgJ0lOU0VSVCBJTlRPJyxcclxuICAnSU5TRVJUJyxcclxuICAnTElNSVQnLFxyXG4gICdPUkRFUiBCWScsXHJcbiAgJ1NFTEVDVCcsXHJcbiAgJ1NFVCBDVVJSRU5UIFNDSEVNQScsXHJcbiAgJ1NFVCBTQ0hFTUEnLFxyXG4gICdTRVQnLFxyXG4gICdVUERBVEUnLFxyXG4gICdWQUxVRVMnLFxyXG4gICdXSEVSRScsXHJcbl07XHJcblxyXG5jb25zdCByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCA9IFsnSU5URVJTRUNUJywgJ0lOVEVSU0VDVCBBTEwnLCAnTUlOVVMnLCAnVU5JT04nLCAnVU5JT04gQUxMJ107XHJcblxyXG5jb25zdCByZXNlcnZlZE5ld2xpbmVXb3JkcyA9IFtcclxuICAnQU5EJyxcclxuICAnRUxTRScsXHJcbiAgJ09SJyxcclxuICAnV0hFTicsXHJcbiAgLy8gam9pbnNcclxuICAnSk9JTicsXHJcbiAgJ0lOTkVSIEpPSU4nLFxyXG4gICdMRUZUIEpPSU4nLFxyXG4gICdMRUZUIE9VVEVSIEpPSU4nLFxyXG4gICdSSUdIVCBKT0lOJyxcclxuICAnUklHSFQgT1VURVIgSk9JTicsXHJcbiAgJ0ZVTEwgSk9JTicsXHJcbiAgJ0ZVTEwgT1VURVIgSk9JTicsXHJcbiAgJ0NST1NTIEpPSU4nLFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFNxbEZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XHJcbiAgdG9rZW5pemVyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBUb2tlbml6ZXIoe1xyXG4gICAgICByZXNlcnZlZFdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHMsXHJcbiAgICAgIHJlc2VydmVkTmV3bGluZVdvcmRzLFxyXG4gICAgICByZXNlcnZlZFRvcExldmVsV29yZHNOb0luZGVudCxcclxuICAgICAgc3RyaW5nVHlwZXM6IFtgXCJcImAsIFwiTicnXCIsIFwiJydcIiwgJ1tdJ10sXHJcbiAgICAgIG9wZW5QYXJlbnM6IFsnKCcsICdDQVNFJ10sXHJcbiAgICAgIGNsb3NlUGFyZW5zOiBbJyknLCAnRU5EJ10sXHJcbiAgICAgIGluZGV4ZWRQbGFjZWhvbGRlclR5cGVzOiBbXSxcclxuICAgICAgbmFtZWRQbGFjZWhvbGRlclR5cGVzOiBbJ0AnXSxcclxuICAgICAgbGluZUNvbW1lbnRUeXBlczogWyctLSddLFxyXG4gICAgICBzcGVjaWFsV29yZENoYXJzOiBbJyMnLCAnQCddLFxyXG4gICAgICBvcGVyYXRvcnM6IFtcclxuICAgICAgICAnPj0nLFxyXG4gICAgICAgICc8PScsXHJcbiAgICAgICAgJzw+JyxcclxuICAgICAgICAnIT0nLFxyXG4gICAgICAgICchPCcsXHJcbiAgICAgICAgJyE+JyxcclxuICAgICAgICAnKz0nLFxyXG4gICAgICAgICctPScsXHJcbiAgICAgICAgJyo9JyxcclxuICAgICAgICAnLz0nLFxyXG4gICAgICAgICclPScsXHJcbiAgICAgICAgJ3w9JyxcclxuICAgICAgICAnJj0nLFxyXG4gICAgICAgICdePScsXHJcbiAgICAgICAgJzo6JyxcclxuICAgICAgXSxcclxuICAgICAgLy8gVE9ETzogU3VwcG9ydCBmb3IgbW9uZXkgY29uc3RhbnRzXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IERiMkZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9EYjJGb3JtYXR0ZXInO1xyXG5pbXBvcnQgTWFyaWFEYkZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9NYXJpYURiRm9ybWF0dGVyJztcclxuaW1wb3J0IE15U3FsRm9ybWF0dGVyIGZyb20gJy4vbGFuZ3VhZ2VzL015U3FsRm9ybWF0dGVyJztcclxuaW1wb3J0IE4xcWxGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvTjFxbEZvcm1hdHRlcic7XHJcbmltcG9ydCBQbFNxbEZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9QbFNxbEZvcm1hdHRlcic7XHJcbmltcG9ydCBQb3N0Z3JlU3FsRm9ybWF0dGVyIGZyb20gJy4vbGFuZ3VhZ2VzL1Bvc3RncmVTcWxGb3JtYXR0ZXInO1xyXG5pbXBvcnQgUmVkc2hpZnRGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvUmVkc2hpZnRGb3JtYXR0ZXInO1xyXG5pbXBvcnQgU3BhcmtTcWxGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvU3BhcmtTcWxGb3JtYXR0ZXInO1xyXG5pbXBvcnQgU3RhbmRhcmRTcWxGb3JtYXR0ZXIgZnJvbSAnLi9sYW5ndWFnZXMvU3RhbmRhcmRTcWxGb3JtYXR0ZXInO1xyXG5pbXBvcnQgVFNxbEZvcm1hdHRlciBmcm9tICcuL2xhbmd1YWdlcy9UU3FsRm9ybWF0dGVyJztcclxuXHJcbmNvbnN0IGZvcm1hdHRlcnMgPSB7XHJcbiAgZGIyOiBEYjJGb3JtYXR0ZXIsXHJcbiAgbWFyaWFkYjogTWFyaWFEYkZvcm1hdHRlcixcclxuICBteXNxbDogTXlTcWxGb3JtYXR0ZXIsXHJcbiAgbjFxbDogTjFxbEZvcm1hdHRlcixcclxuICBwbHNxbDogUGxTcWxGb3JtYXR0ZXIsXHJcbiAgcG9zdGdyZXNxbDogUG9zdGdyZVNxbEZvcm1hdHRlcixcclxuICByZWRzaGlmdDogUmVkc2hpZnRGb3JtYXR0ZXIsXHJcbiAgc3Bhcms6IFNwYXJrU3FsRm9ybWF0dGVyLFxyXG4gIHNxbDogU3RhbmRhcmRTcWxGb3JtYXR0ZXIsXHJcbiAgdHNxbDogVFNxbEZvcm1hdHRlcixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGb3JtYXQgd2hpdGVzcGFjZSBpbiBhIHF1ZXJ5IHRvIG1ha2UgaXQgZWFzaWVyIHRvIHJlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeVxyXG4gKiBAcGFyYW0ge09iamVjdH0gY2ZnXHJcbiAqICBAcGFyYW0ge1N0cmluZ30gY2ZnLmxhbmd1YWdlIFF1ZXJ5IGxhbmd1YWdlLCBkZWZhdWx0IGlzIFN0YW5kYXJkIFNRTFxyXG4gKiAgQHBhcmFtIHtTdHJpbmd9IGNmZy5pbmRlbnQgQ2hhcmFjdGVycyB1c2VkIGZvciBpbmRlbnRhdGlvbiwgZGVmYXVsdCBpcyBcIiAgXCIgKDIgc3BhY2VzKVxyXG4gKiAgQHBhcmFtIHtCb29sZWFufSBjZmcudXBwZXJjYXNlIENvbnZlcnRzIGtleXdvcmRzIHRvIHVwcGVyY2FzZVxyXG4gKiAgQHBhcmFtIHtJbnRlZ2VyfSBjZmcubGluZXNCZXR3ZWVuUXVlcmllcyBIb3cgbWFueSBsaW5lIGJyZWFrcyBiZXR3ZWVuIHF1ZXJpZXNcclxuICogIEBwYXJhbSB7T2JqZWN0fSBjZmcucGFyYW1zIENvbGxlY3Rpb24gb2YgcGFyYW1zIGZvciBwbGFjZWhvbGRlciByZXBsYWNlbWVudFxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZm9ybWF0ID0gKHF1ZXJ5LCBjZmcgPSB7fSkgPT4ge1xyXG4gIGlmICh0eXBlb2YgcXVlcnkgIT09ICdzdHJpbmcnKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcXVlcnkgYXJndW1lbnQuIEV4dGVjdGVkIHN0cmluZywgaW5zdGVhZCBnb3QgJyArIHR5cGVvZiBxdWVyeSk7XHJcbiAgfVxyXG5cclxuICBsZXQgRm9ybWF0dGVyID0gU3RhbmRhcmRTcWxGb3JtYXR0ZXI7XHJcbiAgaWYgKGNmZy5sYW5ndWFnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBGb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2NmZy5sYW5ndWFnZV07XHJcbiAgfVxyXG4gIGlmIChGb3JtYXR0ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgRXJyb3IoYFVuc3VwcG9ydGVkIFNRTCBkaWFsZWN0OiAke2NmZy5sYW5ndWFnZX1gKTtcclxuICB9XHJcbiAgcmV0dXJuIG5ldyBGb3JtYXR0ZXIoY2ZnKS5mb3JtYXQocXVlcnkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1cHBvcnRlZERpYWxlY3RzID0gT2JqZWN0LmtleXMoZm9ybWF0dGVycyk7XHJcbiIsIi8vIE9ubHkgcmVtb3ZlcyBzcGFjZXMsIG5vdCBuZXdsaW5lc1xyXG5leHBvcnQgY29uc3QgdHJpbVNwYWNlc0VuZCA9IChzdHIpID0+IHN0ci5yZXBsYWNlKC9bIFxcdF0rJC91LCAnJyk7XHJcblxyXG4vLyBMYXN0IGVsZW1lbnQgZnJvbSBhcnJheVxyXG5leHBvcnQgY29uc3QgbGFzdCA9IChhcnIpID0+IGFyclthcnIubGVuZ3RoIC0gMV07XHJcblxyXG4vLyBUcnVlIGFycmF5IGlzIGVtcHR5LCBvciBpdCdzIG5vdCBhbiBhcnJheSBhdCBhbGxcclxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAoYXJyKSA9PiAhQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyci5sZW5ndGggPT09IDA7XHJcblxyXG4vLyBFc2NhcGVzIHJlZ2V4IHNwZWNpYWwgY2hhcnNcclxuZXhwb3J0IGNvbnN0IGVzY2FwZVJlZ0V4cCA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZ3UsICdcXFxcJCYnKTtcclxuXHJcbi8vIFNvcnRzIHN0cmluZ3MgYnkgbGVuZ3RoLCBzbyB0aGF0IGxvbmdlciBvbmVzIGFyZSBmaXJzdFxyXG4vLyBBbHNvIHNvcnRzIGFscGhhYmV0aWNhbGx5IGFmdGVyIHNvcnRpbmcgYnkgbGVuZ3RoLlxyXG5leHBvcnQgY29uc3Qgc29ydEJ5TGVuZ3RoRGVzYyA9IChzdHJpbmdzKSA9PlxyXG4gIHN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xyXG4gICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGggfHwgYS5sb2NhbGVDb21wYXJlKGIpO1xyXG4gIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9