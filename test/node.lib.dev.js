module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = undefined && undefined.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(__webpack_require__(/*! ./src/main */ "./src/main.ts"));
module.exports = main_1.default;

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/_core-js@2.6.12@core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/_core-js@2.6.12@core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/fn/object/define-property.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/fn/object/define-property.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/_core-js@2.6.12@core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/fn/object/keys.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/fn/object/keys.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/_core-js@2.6.12@core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_a-function.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_a-function.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_an-object.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_an-object.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_array-includes.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_array-includes.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_cof.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_cof.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_core.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_core.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_ctx.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_ctx.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_defined.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_defined.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_descriptors.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_descriptors.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_dom-create.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_dom-create.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_enum-bug-keys.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_enum-bug-keys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_export.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_export.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_fails.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_fails.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_global.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_global.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_has.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_has.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_hide.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_hide.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_ie8-dom-define.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_ie8-dom-define.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_iobject.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_iobject.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_is-object.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_is-object.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_library.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_library.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_object-dp.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_object-dp.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_object-keys-internal.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_object-keys-internal.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_object-keys.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_object-keys.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_object-sap.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_object-sap.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_property-desc.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_property-desc.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_shared-key.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_shared-key.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_shared.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_shared.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-absolute-index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_to-absolute-index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-integer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_to-integer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-iobject.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_to-iobject.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-length.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_to-length.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-object.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_to-object.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-primitive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_to-primitive.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/_uid.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/_uid.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/es6.object.define-property.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/es6.object.define-property.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/_core-js@2.6.12@core-js/library/modules/es6.object.keys.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.12@core-js/library/modules/es6.object.keys.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/_core-js@2.6.12@core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");

var default_1 = function () {
    /**
     * @description
     * @constructor
     * @param _interface {*}
     * */
    function default_1(_interface) {
        (0, _classCallCheck3.default)(this, default_1);

        if (!['array', 'object'].includes(utils_1.getValueType(_interface).type)) {
            throw new Error('The interface only supports arrays or objects');
        }
        this._interface = _interface;
    }
    /**
     * @description 测试一个 JSON 是否符合接口
     * @param json {*}
     * @return void
     * */


    (0, _createClass3.default)(default_1, [{
        key: "test",
        value: function test(json) {
            if (!['array', 'object'].includes(utils_1.getValueType(json).type)) {
                throw new Error('Only supports testing arrays or objects');
            }
            this._implement(json);
        }
    }, {
        key: "_implement",
        value: function _implement(json) {
            var _this = this;

            var _interface = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            var errorPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            _interface === undefined && (_interface = this._interface);
            if (utils_1.getValueType(json).type !== utils_1.getValueType(_interface).type) {
                !errorPath && (errorPath = json);
                errorPath = "'" + String(errorPath).replace(/^\./, '') + "' error: expected value type is '" + utils_1.getValueType(_interface).type + "'";
                throw new Error(errorPath);
            }
            if (utils_1.getValueType(_interface).type === 'object') {
                var keys = (0, _keys2.default)(_interface);
                // 对象严格按照 接口 字段进行遍历匹配
                keys.forEach(function (key) {
                    return _this._implement(json[key], _interface[key], errorPath + '.' + key);
                });
            }
            if (utils_1.getValueType(_interface).type === 'array') {
                if (_interface.length === 1) {
                    // 接口 数组长度为 1 则实现数据的数组则每一项按照接口第 0 项匹配
                    json.forEach(function (item, index) {
                        _this._implement(item, _interface[0], errorPath + '.' + index);
                    });
                } else {
                    // 否则严格按照接口的 每一项 进行遍历匹配 、 实现数组的长度超过接口长度则进行忽略
                    _interface.forEach(function (item, index) {
                        _this._implement(json[index], _interface[index], errorPath + '.' + index);
                    });
                }
            }
        }
    }]);
    return default_1;
}();

exports.default = default_1;

/***/ }),

/***/ "./src/polyfill.ts":
/*!*************************!*\
  !*** ./src/polyfill.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        }
    });
}

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueType = void 0;
__webpack_require__(/*! ./polyfill */ "./src/polyfill.ts");
/**
 * @description 获取 JSON 可选值的数据类型
 * @param value {Null | Array | Object | Number | String | Boolean}
 * @return {Object<type: String, interface: Function>}
 * */
function getValueType(value) {
    var types = [{ type: 'null', interface: null }, { type: 'array', interface: Array }, { type: 'object', interface: Object }, { type: 'number', interface: Number }, { type: 'string', interface: String }, { type: 'boolean', interface: Boolean }];
    if (typeof value === 'function') {
        return types.find(function (item) {
            return item.interface === value;
        }) || {
            type: undefined
        };
    }
    // @ts-ignore
    var type = /\[object ([\w\W]+)\]/.exec({}.toString.call(value))[1].toLowerCase();
    return types.find(function (item) {
        return item.type === type;
    }) || {
        type: undefined
    };
}
exports.getValueType = getValueType;

/***/ })

/******/ });
//# sourceMappingURL=node.lib.dev.js.map