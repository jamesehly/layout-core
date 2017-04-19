/*! Layout Framework: Core v0.1.0 - Copyright 2017 James Ehly - MIT License https://layoutframework.com/license */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_layout"] = factory();
	else
		root["_layout"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VirtualElement_1 = __webpack_require__(7);
var Element = (function () {
    function Element(id) {
        this.set(id);
        this._virtual = new VirtualElement_1.VirtualElement();
        this._initial = new VirtualElement_1.VirtualElement();
        this._factual = new VirtualElement_1.VirtualElement();
        this._movable = new VirtualElement_1.VirtualElement();
        this._orientation = null;
        this.setup();
    }
    Element.prototype.get = function () {
        return this._element;
    };
    Element.prototype.set = function (id) {
        this._element = document.getElementById(id);
    };
    Object.defineProperty(Element.prototype, "element", {
        get: function () {
            return this.get();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "virtual", {
        get: function () {
            return this._virtual;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "initial", {
        get: function () {
            return this._initial;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "factual", {
        get: function () {
            return this._factual;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "movable", {
        get: function () {
            return this._movable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "children", {
        get: function () {
            var children = new Array();
            for (var i = 0; i < this.element.children.length; i++) {
                var child = this._element.children[i];
                if (!child.id) {
                    child.id = this._element.id + '-child-' + i;
                }
                children.push(document.getElementById(child.id));
            }
            return children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (orientation) {
            this._orientation = orientation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "id", {
        get: function () {
            return this._element.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "height", {
        get: function () {
            return this._element.offsetHeight + 'px';
        },
        set: function (size) {
            this._element.style.height = size;
            this._factual.height = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "width", {
        get: function () {
            return this._element.offsetWidth + 'px';
        },
        set: function (size) {
            this._element.style.width = size;
            this._factual.width = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "overflow", {
        get: function () {
            return this._element.style.overflow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "float", {
        get: function () {
            return this._element.style.cssFloat;
        },
        enumerable: true,
        configurable: true
    });
    Element.prototype.attr = function (name) {
        return this._element.getAttribute(name);
    };
    Element.prototype.draw = function () {
        this.drawOverflow();
        this.drawFloat();
    };
    Element.prototype.setup = function () {
        var size = this.attr('data-size');
        var height = this.attr('data-height') || size;
        var width = this.attr('data-width') || size;
        this._initial.height = this._virtual.height = height || '100%';
        this._initial.width = this._virtual.width = width || '100%';
        this._initial.overflow = this._virtual.overflow = this.attr('data-overflow') || 'hidden';
    };
    Element.prototype.drawOverflow = function () {
        if (!this.virtual.overflow) {
            return;
        }
        if (this._virtual.overflow && this._virtual.overflow.match(/visible|hidden|scroll|auto|inherit|initial|unset/)) {
            this._element.style.overflow = this._virtual.overflow;
            this._factual.overflow = this._virtual.overflow;
        }
        else {
            throw new Error('Element\'s overflow style does not match a css overflow type.');
        }
    };
    Element.prototype.drawFloat = function () {
        if (!this.virtual.float) {
            return;
        }
        if (this._virtual.float && this._virtual.float.match(/left|right|none|inherit|initial/)) {
            this._element.style.cssFloat = this._virtual.float;
            this._factual.float = this._virtual.float;
        }
        else {
            throw new Error('Element\'s float style does not match a css float type.');
        }
    };
    return Element;
}());
exports.Element = Element;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Element_1 = __webpack_require__(0);
var RectElement = (function (_super) {
    __extends(RectElement, _super);
    function RectElement(id) {
        return _super.call(this, id) || this;
    }
    RectElement.prototype.draw = function () {
        _super.prototype.draw.call(this);
        this.drawWidth();
        this.drawHeight();
    };
    RectElement.prototype.drawWidth = function () {
        if (!this.virtual.width) {
            return;
        }
        if (this.virtual.width.match(/^(\d*\.)?[\d]+px|%$/)) {
            this.width = this.virtual.width;
        }
        else if (this.virtual.width.match(/^[\d]+$/)) {
            this.width = this.virtual.width + "px";
        }
        else {
            throw new Error('Element width is not a css pixel or percentage width or a number.');
        }
    };
    RectElement.prototype.drawHeight = function () {
        if (!this.virtual.height) {
            return;
        }
        if (this.virtual.height.match(/^(\d*\.)?[\d]+px|%$/)) {
            this.height = this.virtual.height;
        }
        else if (this.virtual.height.match(/^[\d]+$/)) {
            this.height = this.virtual.height + "px";
        }
        else {
            throw new Error('Element height is not a css pixel or percentage width or a number.');
        }
    };
    return RectElement;
}(Element_1.Element));
exports.RectElement = RectElement;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
    Orientation[Orientation["Vertical"] = 1] = "Vertical";
})(Orientation = exports.Orientation || (exports.Orientation = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Layout = (function () {
    function Layout(element) {
        this._element = element;
        this._elements = {};
    }
    Layout.prototype.addElement = function (element) {
        this._elements[element.id] = element;
    };
    Object.defineProperty(Layout.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layout.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    return Layout;
}());
exports.Layout = Layout;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lie_ts_1 = __webpack_require__(10);
var Animator = (function () {
    function Animator(duration, step) {
        this._duration = duration || 200;
        this._step = step;
        this._rate = 16;
    }
    Animator.prototype.animate = function (start) {
        var _this = this;
        if (start === void 0) { start = Date.now(); }
        return new lie_ts_1.Promise(function (resolve) {
            _this._interval = window.setInterval(function () {
                var deltaTime = Date.now();
                var timePassed = deltaTime - start;
                var progress = timePassed / _this._duration;
                if (progress > 1)
                    progress = 1;
                var delta = progress;
                _this._step(delta);
                if (progress == 1) {
                    clearInterval(_this._interval);
                    resolve(true);
                }
            }, _this._rate);
        });
    };
    return Animator;
}());
exports.Animator = Animator;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HorizontalLayout_1 = __webpack_require__(8);
var VerticalLayout_1 = __webpack_require__(9);
var FillElement_1 = __webpack_require__(6);
var LayoutFactory = (function () {
    function LayoutFactory() {
    }
    LayoutFactory.prototype.createVerticalLayout = function (id) {
        var element = new FillElement_1.FillElement(id);
        var layout = new VerticalLayout_1.VerticalLayout(element);
        layout.setup();
        return layout;
    };
    LayoutFactory.prototype.createHorizontalLayout = function (id) {
        var element = new FillElement_1.FillElement(id);
        var layout = new HorizontalLayout_1.HorizontalLayout(element);
        layout.setup();
        return layout;
    };
    return LayoutFactory;
}());
exports.LayoutFactory = LayoutFactory;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Element_1 = __webpack_require__(0);
var FillElement = (function (_super) {
    __extends(FillElement, _super);
    function FillElement(id) {
        return _super.call(this, id) || this;
    }
    FillElement.prototype.draw = function () {
        _super.prototype.draw.call(this);
        this.width = this.element.parentElement.offsetWidth + 'px';
        this.height = this.element.parentElement.offsetHeight + 'px';
    };
    return FillElement;
}(Element_1.Element));
exports.FillElement = FillElement;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VirtualElement = (function () {
    function VirtualElement() {
    }
    return VirtualElement;
}());
exports.VirtualElement = VirtualElement;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = __webpack_require__(3);
var RectElement_1 = __webpack_require__(1);
var IOriented_1 = __webpack_require__(2);
var HorizontalLayout = (function (_super) {
    __extends(HorizontalLayout, _super);
    function HorizontalLayout(element) {
        var _this = _super.call(this, element) || this;
        _this.fixedChildren = new Array();
        _this.perctChildren = new Array();
        _this.fluidChildren = new Array();
        return _this;
    }
    HorizontalLayout.prototype.draw = function () {
        this.element.draw();
        var totalWidth = parseFloat(this.element.width);
        var fluidWidth = totalWidth;
        var perctWidth = 0;
        var totalHeight = this.element.height;
        for (var _i = 0, _a = this.fixedChildren; _i < _a.length; _i++) {
            var el = _a[_i];
            fluidWidth -= parseFloat(el.virtual.width);
            el.virtual.height = totalHeight;
            el.draw();
        }
        for (var _b = 0, _c = this.perctChildren; _b < _c.length; _b++) {
            var el = _c[_b];
            var width_1 = (parseFloat(el.initial.width) / 100 * fluidWidth);
            el.virtual.width = width_1 + 'px';
            perctWidth += width_1;
            el.virtual.height = totalHeight;
            el.draw();
        }
        fluidWidth -= perctWidth;
        for (var _d = 0, _e = this.fluidChildren; _d < _e.length; _d++) {
            var el = _e[_d];
            var width = fluidWidth / this.fluidChildren.length;
            el.virtual.width = width + 'px';
            el.virtual.height = totalHeight;
            el.draw();
        }
    };
    HorizontalLayout.prototype.setup = function () {
        for (var _i = 0, _a = this.element.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var childElement = new RectElement_1.RectElement(child.id);
            childElement.orientation = IOriented_1.Orientation.Horizontal;
            if (childElement.initial.width === '100%') {
                this.fluidChildren.push(childElement);
            }
            else if (childElement.initial.width.match(/^[\d]+%$/)) {
                this.perctChildren.push(childElement);
            }
            else {
                this.fixedChildren.push(childElement);
            }
            childElement.virtual.float = "left";
            this.addElement(childElement);
        }
    };
    return HorizontalLayout;
}(Layout_1.Layout));
exports.HorizontalLayout = HorizontalLayout;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = __webpack_require__(3);
var RectElement_1 = __webpack_require__(1);
var IOriented_1 = __webpack_require__(2);
var VerticalLayout = (function (_super) {
    __extends(VerticalLayout, _super);
    function VerticalLayout(element) {
        var _this = _super.call(this, element) || this;
        _this.fixedChildren = new Array();
        _this.perctChildren = new Array();
        _this.fluidChildren = new Array();
        return _this;
    }
    VerticalLayout.prototype.draw = function () {
        this.element.draw();
        var totalHeight = parseFloat(this.element.height);
        var fluidHeight = totalHeight;
        var perctHeight = 0;
        var totalWidth = this.element.width;
        for (var _i = 0, _a = this.fixedChildren; _i < _a.length; _i++) {
            var el = _a[_i];
            fluidHeight -= parseFloat(el.virtual.height);
            el.virtual.width = totalWidth;
            el.draw();
        }
        for (var _b = 0, _c = this.perctChildren; _b < _c.length; _b++) {
            var el = _c[_b];
            var height_1 = (parseFloat(el.initial.height) / 100 * fluidHeight);
            el.virtual.height = height_1 + 'px';
            perctHeight += height_1;
            el.virtual.width = totalWidth;
            el.draw();
        }
        fluidHeight -= perctHeight;
        for (var _d = 0, _e = this.fluidChildren; _d < _e.length; _d++) {
            var el = _e[_d];
            var height = fluidHeight / this.fluidChildren.length;
            el.virtual.height = height + 'px';
            el.virtual.width = totalWidth;
            el.draw();
        }
    };
    VerticalLayout.prototype.setup = function () {
        for (var _i = 0, _a = this.element.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var childElement = new RectElement_1.RectElement(child.id);
            childElement.orientation = IOriented_1.Orientation.Vertical;
            if (childElement.initial.height === '100%') {
                this.fluidChildren.push(childElement);
            }
            else if (childElement.initial.height.match(/^[\d]+%$/)) {
                this.perctChildren.push(childElement);
            }
            else {
                this.fixedChildren.push(childElement);
            }
            childElement.virtual.float = "left";
            this.addElement(childElement);
        }
    };
    return VerticalLayout;
}(Layout_1.Layout));
exports.VerticalLayout = VerticalLayout;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _INTERNAL = function () { };
var _REJECTED = ['R'];
var _FULFILLED = ['F'];
var _PENDING = ['P'];
var Promise = (function () {
    function Promise(resolver) {
        this._state = _PENDING;
        this._queue = [];
        this._outcome = void 0;
        if (resolver !== _INTERNAL) {
            _safelyResolveThenable(this, resolver);
        }
    }
    Promise.prototype.catch = function (onRejected) {
        return this.then(function () { }, onRejected);
    };
    Promise.prototype.then = function (onFulfilled, onRejected) {
        if (typeof onFulfilled !== 'function' && this._state === _FULFILLED ||
            typeof onRejected !== 'function' && this._state === _REJECTED) {
            return this;
        }
        var promise = new Promise(_INTERNAL);
        if (this._state !== _PENDING) {
            var resolver = this._state === _FULFILLED ? onFulfilled : onRejected;
            _unwrap(promise, resolver, this._outcome);
        }
        else {
            this._queue.push(new _QueueItem(promise, onFulfilled, onRejected));
        }
        return promise;
    };
    /**
     *
     * @static
     * @param {any} value
     * @returns
     *
     * @memberOf Promise
     */
    Promise.resolve = function (value) {
        if (value instanceof this) {
            return value;
        }
        return _handlers._resolve(new Promise(_INTERNAL), value);
    };
    /**
     *
     * @static
     * @param {any} reason
     * @returns
     *
     * @memberOf Promise
     */
    Promise.reject = function (reason) {
        return _handlers._reject(new Promise(_INTERNAL), reason);
    };
    Promise.all = function (iterable) {
        var self = this;
        var len = iterable.length;
        var called = false;
        var values = new Array(len);
        var resolved = 0;
        var i = -1;
        var promise = new Promise(_INTERNAL);
        if (!len) {
            return this.resolve([]);
        }
        while (++i < len) {
            allResolver(iterable[i], i);
        }
        return promise;
        function allResolver(value, i) {
            self.resolve(value).then(resolveFromAll, function (error) {
                if (!called) {
                    called = true;
                    _handlers._reject(promise, error);
                }
            });
            function resolveFromAll(outValue) {
                values[i] = outValue;
                if (++resolved === len && !called) {
                    called = true;
                    _handlers._resolve(promise, values);
                }
            }
        }
    };
    Promise.race = function (iterable) {
        var self = this;
        var len = iterable.length;
        var called = false;
        var i = -1;
        var promise = new Promise(_INTERNAL);
        if (Array.isArray(iterable) !== false) {
            return this.reject(new TypeError());
        }
        function resolver(value) {
            self.resolve(value).then(function (response) {
                if (!called) {
                    called = true;
                    _handlers._resolve(promise, response);
                }
            }, function (error) {
                if (!called) {
                    called = true;
                    _handlers._reject(promise, error);
                }
            });
        }
        if (!len) {
            return this.resolve([]);
        }
        while (++i < len) {
            resolver(iterable[i]);
        }
        return promise;
    };
    return Promise;
}());
exports.Promise = Promise;
/**
 * @internal
 *
 * @export
 * @class _QueueItem
 */
var _QueueItem = (function () {
    function _QueueItem(promise, onFulfilled, onRejected) {
        this._promise = promise;
        if (typeof onFulfilled === 'function') {
            this._onFulfilled = onFulfilled;
            this._callFulfilled = this._otherCallFulfilled;
        }
        if (typeof onRejected === 'function') {
            this._onRejected = onRejected;
            this._callRejected = this._otherCallRejected;
        }
    }
    _QueueItem.prototype._callFulfilled = function (value) {
        _handlers._resolve(this._promise, value);
    };
    ;
    _QueueItem.prototype._otherCallFulfilled = function (value) {
        _unwrap(this._promise, this._onFulfilled, value);
    };
    ;
    _QueueItem.prototype._callRejected = function (value) {
        _handlers._reject(this._promise, value);
    };
    ;
    _QueueItem.prototype._otherCallRejected = function (value) {
        _unwrap(this._promise, this._onRejected, value);
    };
    ;
    return _QueueItem;
}());
exports._QueueItem = _QueueItem;
/**
 *
 * @internal
 * @param {any} promise
 * @param {any} func
 * @param {any} value
 */
function _unwrap(promise, func, value) {
    setTimeout(function () {
        var returnValue;
        try {
            returnValue = func.apply(null, value);
        }
        catch (e) {
            return _handlers._reject(promise, e);
        }
        if (returnValue === promise) {
            _handlers._reject(promise, new TypeError());
        }
        else {
            _handlers._resolve(promise, returnValue);
        }
        return null;
    });
}
/**
 *
 * @internal
 * @class _handlers
 */
var _handlers = (function () {
    function _handlers() {
    }
    _handlers._resolve = function (self, value) {
        var result = _tryCatch(_getThen, value);
        var thenable = result._value;
        var i = -1;
        var len = self._queue.length;
        if (result._status === 'error') {
            return _handlers._reject(self, result._value);
        }
        if (thenable) {
            _safelyResolveThenable(self, thenable);
        }
        else {
            self._state = _FULFILLED;
            self._outcome = value;
            while (++i < len) {
                self._queue[i]._callFulfilled(value);
            }
        }
        return self;
    };
    ;
    _handlers._reject = function (self, error) {
        self._state = _REJECTED;
        self._outcome = error;
        var i = -1;
        var len = self._queue.length;
        while (++i < len) {
            self._queue[i]._callRejected(error);
        }
        return self;
    };
    ;
    return _handlers;
}());
/**
 *
 * @internal
 * @param {any} obj
 * @returns
 */
function _getThen(obj) {
    // Make sure we only access the accessor once as required by the spec
    var then = obj && obj.then;
    if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
        return function appyThen() {
            then.apply(obj, arguments);
        };
    }
    else {
        return null;
    }
}
/**
 *
 * @internal
 * @param {Promise<any>} self
 * @param {(onSuccess:(...T) => void, onFail:(...T) => void) => void} thenable
 */
function _safelyResolveThenable(self, thenable) {
    // Either fulfill, reject or reject with error
    var called = false;
    function onError() {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        if (called) {
            return;
        }
        called = true;
        _handlers._reject(self, value);
    }
    function onSuccess() {
        var value = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            value[_i] = arguments[_i];
        }
        if (called) {
            return;
        }
        called = true;
        _handlers._resolve(self, value);
    }
    function tryToUnwrap() {
        thenable(onSuccess, onError);
    }
    var result = _tryCatch(tryToUnwrap);
    if (result._status === 'error') {
        onError(result._value);
    }
}
/**
 *
 * @internal
 * @param {any} func
 * @param {*} [values]
 * @returns
 */
function _tryCatch(func, values) {
    var out = { _status: null, _value: null };
    try {
        out._value = func(values);
        out._status = 'success';
    }
    catch (e) {
        out._status = 'error';
        out._value = e;
    }
    return out;
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var LayoutFactory_1 = __webpack_require__(5);
var Animator_1 = __webpack_require__(4);
var IOriented_1 = __webpack_require__(2);
var Api = (function () {
    function Api() {
        this.reset();
    }
    Object.defineProperty(Api.prototype, "layouts", {
        get: function () {
            return this._layouts;
        },
        enumerable: true,
        configurable: true
    });
    Api.prototype.start = function () {
        var _this = this;
        if (window.attachEvent) {
            window.attachEvent('onresize', function () {
                _this.draw();
            });
        }
        else if (window.addEventListener) {
            window.addEventListener('resize', function () {
                _this.draw();
            }, true);
        }
        else {
        }
        this.draw();
    };
    Api.prototype.stop = function () {
    };
    Api.prototype.reset = function () {
        this._factory = new LayoutFactory_1.LayoutFactory();
        this._layouts = new Array();
    };
    Api.prototype.add = function (identifier, type, options) {
        if (type === void 0) { type = null; }
        if (options === void 0) { options = null; }
        if (!type)
            type = "VerticalLayout";
        if (!this._factory['create' + type])
            throw Error("create" + type + "() is not a method on LayoutFactory.  Check the API for methods on LayoutFactory.");
        if (options !== null) {
            var layout = this._factory['create' + type](identifier, options);
        }
        else {
            var layout = this._factory['create' + type](identifier);
        }
        this._layouts.push(layout);
    };
    Api.prototype.get = function (identifier) {
        for (var _i = 0, _a = this._layouts; _i < _a.length; _i++) {
            var layout = _a[_i];
            if (layout.element.id === identifier)
                return layout;
        }
        return null;
    };
    Api.prototype.set = function (id, option, value) {
        var el = this.find(id);
        if (!el) {
            throw new Error(id + " could not be found in the registered layouts.");
        }
        switch (option) {
            case 'height':
                el.virtual.height = el.movable.height = value;
                break;
            case 'width':
                el.virtual.width = el.movable.width = value;
                break;
            case 'overflow':
                el.virtual.overflow = value;
                break;
            default:
                break;
        }
    };
    Api.prototype.find = function (id) {
        for (var _i = 0, _a = this._layouts; _i < _a.length; _i++) {
            var layout = _a[_i];
            if (layout.elements[id]) {
                return layout.elements[id];
            }
        }
    };
    Api.prototype.draw = function () {
        for (var _i = 0, _a = this._layouts; _i < _a.length; _i++) {
            var layout = _a[_i];
            layout.draw();
        }
    };
    Api.prototype.animate = function (duration) {
        var _this = this;
        var changedElements = Array();
        for (var _i = 0, _a = this._layouts; _i < _a.length; _i++) {
            var layout = _a[_i];
            for (var i in layout.elements) {
                var el = layout.elements[i];
                if (el.movable.height || el.movable.width) {
                    changedElements.push(el);
                }
            }
        }
        var elementStore = {};
        for (var _b = 0, changedElements_1 = changedElements; _b < changedElements_1.length; _b++) {
            var el_1 = changedElements_1[_b];
            elementStore[el_1.id] = [el_1.height, el_1.width];
        }
        var animator = new Animator_1.Animator(duration, function (delta) {
            if (changedElements.length === 0)
                return;
            for (var _i = 0, changedElements_2 = changedElements; _i < changedElements_2.length; _i++) {
                var el_2 = changedElements_2[_i];
                if (el_2.movable.height && el_2.movable.height != el_2.factual.height) {
                    var to = parseInt(el_2.movable.height);
                    var from = parseInt(elementStore[el_2.id][0]);
                    el_2.virtual.height = (to - from) * delta + from + "px";
                }
                else {
                    el_2.movable.height = null;
                }
                if (el_2.movable.width && el_2.movable.width != el_2.factual.width) {
                    var to = parseInt(el_2.movable.width);
                    var from = parseInt(elementStore[el_2.id][1]);
                    el_2.virtual.width = (to - from) * delta + from + "px";
                }
                else {
                    el_2.movable.width = null;
                }
            }
            _this.draw();
        });
        var startDate = this.animationStart || null;
        return animator.animate();
    };
    Api.prototype.open = function (identifier, duration) {
        if (duration === void 0) { duration = null; }
        var element = this.find(identifier);
        if (!element)
            throw Error("Error opening element: element was not found.");
        if (element.orientation === null || element.orientation === undefined)
            throw Error("Error opening element: element does not have an orientation.");
        if (element.orientation === IOriented_1.Orientation.Horizontal) {
            this.set(identifier, 'width', element.initial.width);
        }
        else if (element.orientation === IOriented_1.Orientation.Vertical) {
            this.set(identifier, 'height', element.initial.height);
        }
        return this.animate(duration);
    };
    Api.prototype.close = function (identifier, duration) {
        if (duration === void 0) { duration = null; }
        var element = this.find(identifier);
        if (!element)
            throw Error("Error closing element: element was not found.");
        if (element.orientation === null || element.orientation === undefined)
            throw Error("Error closing element: element does not have an orientation.");
        if (element.orientation === IOriented_1.Orientation.Horizontal) {
            this.set(identifier, 'width', "0px");
        }
        else if (element.orientation === IOriented_1.Orientation.Vertical) {
            this.set(identifier, 'height', "0px");
        }
        return this.animate(duration);
    };
    return Api;
}());
exports.Api = Api;
__export(__webpack_require__(0));
__export(__webpack_require__(6));
__export(__webpack_require__(1));
__export(__webpack_require__(7));
__export(__webpack_require__(3));
__export(__webpack_require__(8));
__export(__webpack_require__(9));
__export(__webpack_require__(5));
__export(__webpack_require__(4));


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4MmFlYTIzNmM0MTdiMjllMWI5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvRWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvUmVjdEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0aWVzL0lPcmllbnRlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9MYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGUvQW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvTGF5b3V0RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvRmlsbEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL1ZpcnR1YWxFbGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0hvcml6b250YWxMYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvVmVydGljYWxMYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vfi9saWUtdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLElBQUk7QUFDZixXQUFXLElBQUk7QUFDZixXQUFXLElBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLElBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsMERBQTBEO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNULE1BQU0sS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDakUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUM7WUFDbEUsTUFBTSxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQztRQUVoRixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLHVCQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLHVCQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsVUFBQztBQUFELENBQUM7QUE5Tlksa0JBQUc7QUFpT2hCLGlDQUFtQztBQUNuQyxpQ0FBdUM7QUFDdkMsaUNBQXVDO0FBQ3ZDLGlDQUEwQztBQUcxQyxpQ0FBaUM7QUFDakMsaUNBQTJDO0FBQzNDLGlDQUF5QztBQUN6QyxpQ0FBd0M7QUFHeEMsaUNBQW1DIiwiZmlsZSI6ImRpc3QvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiX2xheW91dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfbGF5b3V0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MmFlYTIzNmM0MTdiMjllMWI5ZCIsImltcG9ydCB7IElEcmF3YWJsZSB9IGZyb20gXCIuLi9lbnRpdGllcy9JRHJhd2FibGVcIjtcclxuaW1wb3J0IHsgSUVsZW1lbnQgfSBmcm9tIFwiLi4vZW50aXRpZXMvSUVsZW1lbnRcIjtcclxuaW1wb3J0IHsgSU9yaWVudGVkLCBPcmllbnRhdGlvbiB9IGZyb20gXCIuLi9lbnRpdGllcy9JT3JpZW50ZWRcIjtcclxuaW1wb3J0IHsgVmlydHVhbEVsZW1lbnQgfSBmcm9tIFwiLi9WaXJ0dWFsRWxlbWVudFwiO1xyXG5cclxuLyoqXHJcbiAqIEVsZW1lbnRcclxuICogQWJzdHJhY3QgY2xhc3MgdGhhdCByZXByZXNlbnRzIGEgRE9NIEhUTUwgRWxlbWVudC4gIEFsbCBlbGVtZW50cyBoYXZlIGEgXHJcbiAqIGRyYXcgbWV0aG9kIHRoYXQgdGhleSBuZWVkIHRvIGltcGxlbWVudCwgd2hpY2ggdGVsbHMgdGhlIGFjdHVhbCBkb20gZWxlbWVudFxyXG4gKiBob3cgaXQgc2hvdWxkIGJlIGRyYXduIG9uIHRoZSBzY3JlZW4uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRWxlbWVudCBpbXBsZW1lbnRzIElFbGVtZW50LCBJRHJhd2FibGUsIElPcmllbnRlZCB7XHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX3ZpcnR1YWw6IFZpcnR1YWxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfZmFjdHVhbDogVmlydHVhbEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9pbml0aWFsOiBWaXJ0dWFsRWxlbWVudDtcclxuICAgIHByaXZhdGUgX21vdmFibGU6IFZpcnR1YWxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfb3JpZW50YXRpb246IE9yaWVudGF0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXQoaWQpO1xyXG4gICAgICAgIHRoaXMuX3ZpcnR1YWwgPSBuZXcgVmlydHVhbEVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLl9pbml0aWFsID0gbmV3IFZpcnR1YWxFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5fZmFjdHVhbCA9IG5ldyBWaXJ0dWFsRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuX21vdmFibGUgPSBuZXcgVmlydHVhbEVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLl9vcmllbnRhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXQoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldCgpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZpcnR1YWwoKTogVmlydHVhbEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbml0aWFsKCk6IFZpcnR1YWxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmFjdHVhbCgpOiBWaXJ0dWFsRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZhY3R1YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vdmFibGUoKTogVmlydHVhbEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjaGlsZHJlbigpOiBBcnJheTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IG5ldyBBcnJheTxIVE1MRWxlbWVudD4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgdGhpcy5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMuX2VsZW1lbnQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmICghY2hpbGQuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmlkID0gdGhpcy5fZWxlbWVudC5pZCArICctY2hpbGQtJyArIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGRyZW4ucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaGlsZC5pZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG9yaWVudGF0aW9uKCkge1xyXG4gICAgICAgcmV0dXJuICB0aGlzLl9vcmllbnRhdGlvblxyXG4gICAgfVxyXG5cclxuICAgIHNldCBvcmllbnRhdGlvbihvcmllbnRhdGlvbjogT3JpZW50YXRpb24pIHtcclxuICAgICAgICB0aGlzLl9vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWlnaHQoc2l6ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuX2ZhY3R1YWwuaGVpZ2h0ID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHdpZHRoKHNpemU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUud2lkdGggPSBzaXplO1xyXG4gICAgICAgIHRoaXMuX2ZhY3R1YWwud2lkdGggPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBvdmVyZmxvdygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmbG9hdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LnN0eWxlLmNzc0Zsb2F0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgYXR0cmlidXRlIHZhbHVlIG9mIGEgZ2l2ZW4gcGFyYW1ldGVyIG5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lIFxyXG4gICAgICogQHJldHVybnMgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGF0dHIobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGRyYXcgaXMgY2FsbGVkLCBwcm9wZXJ0aWVzIGZyb20gdGhlIHZpcnR1YWwgZWxlbWVudCBhcmUgcmVhbGl6ZWRcclxuICAgICAqIG9uIHRoZSBhY3R1YWwgZG9tIGVsZW1lbnQuXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmF3T3ZlcmZsb3coKTtcclxuICAgICAgICB0aGlzLmRyYXdGbG9hdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmUgdGhlIGRhdGEgdmFsdWVzIHRvIHRoZSBpbnRpYWwgYW5kIHZpcnR1YWwgb2JqZWN0cy5cclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgc2V0dXAoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gQWxsb3cgZGF0YS1zaXplIHRvIGJlIGEgZGVmYXVsdCBmb3IgYm90aCBoZWlnaHQgYW5kIHdpZHRoXHJcbiAgICAgICAgbGV0IHNpemUgPSAgdGhpcy5hdHRyKCdkYXRhLXNpemUnKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5hdHRyKCdkYXRhLWhlaWdodCcpIHx8IHNpemU7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5hdHRyKCdkYXRhLXdpZHRoJykgfHwgc2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9pbml0aWFsLmhlaWdodCA9IHRoaXMuX3ZpcnR1YWwuaGVpZ2h0ID0gaGVpZ2h0IHx8ICcxMDAlJztcclxuICAgICAgICB0aGlzLl9pbml0aWFsLndpZHRoID0gdGhpcy5fdmlydHVhbC53aWR0aCA9IHdpZHRoIHx8ICcxMDAlJztcclxuICAgICAgICB0aGlzLl9pbml0aWFsLm92ZXJmbG93ID0gdGhpcy5fdmlydHVhbC5vdmVyZmxvdyA9IHRoaXMuYXR0cignZGF0YS1vdmVyZmxvdycpIHx8ICdoaWRkZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd092ZXJmbG93KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy52aXJ0dWFsLm92ZXJmbG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwub3ZlcmZsb3cgJiYgdGhpcy5fdmlydHVhbC5vdmVyZmxvdy5tYXRjaCgvdmlzaWJsZXxoaWRkZW58c2Nyb2xsfGF1dG98aW5oZXJpdHxpbml0aWFsfHVuc2V0LykpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IHRoaXMuX3ZpcnR1YWwub3ZlcmZsb3c7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZhY3R1YWwub3ZlcmZsb3cgPSB0aGlzLl92aXJ0dWFsLm92ZXJmbG93O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudFxcJ3Mgb3ZlcmZsb3cgc3R5bGUgZG9lcyBub3QgbWF0Y2ggYSBjc3Mgb3ZlcmZsb3cgdHlwZS4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdGbG9hdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudmlydHVhbC5mbG9hdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsLmZsb2F0ICYmIHRoaXMuX3ZpcnR1YWwuZmxvYXQubWF0Y2goL2xlZnR8cmlnaHR8bm9uZXxpbmhlcml0fGluaXRpYWwvKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID0gdGhpcy5fdmlydHVhbC5mbG9hdDtcclxuICAgICAgICAgICAgdGhpcy5fZmFjdHVhbC5mbG9hdCA9IHRoaXMuX3ZpcnR1YWwuZmxvYXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50XFwncyBmbG9hdCBzdHlsZSBkb2VzIG5vdCBtYXRjaCBhIGNzcyBmbG9hdCB0eXBlLicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VsZW1lbnRzL0VsZW1lbnQudHMiLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi9FbGVtZW50JztcclxuaW1wb3J0IHsgSU9yaWVudGVkLCBPcmllbnRhdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL0lPcmllbnRlZCc7XHJcblxyXG4vKipcclxuICogUmVjdEVsZW1lbnRcclxuICogQW4gRWxlbWVudCB0aGF0IHdpbGwgZHJhdyBpdHMgaGVpZ2h0IGFuZCB3aWR0aCB0byBtYXRjaCB0aGUgdmlydHVhbCBlbGVtZW50J3NcclxuICogaGVpZ2h0IGFuZCB3aWR0aC4gIEEgUmVjdEVsZW1lbnQgY2FuIG9wdGlvbmFsbHkgYmUgb3JpZW50ZWQ7IGRlZmF1bHQgaXMgbnVsbC5cclxuICogQW4gb3JpZW50ZWQgZWxlbWVudCBjYW4gYmUgb3BlbmVkIGFuZCBjbG9zZWQgaW4gdGhhdCBkaXJlY3Rpb24gdXNpbmcgdGhlIEFQSS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3V2lkdGgoKTtcclxuICAgICAgICB0aGlzLmRyYXdIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdXaWR0aCgpOnZvaWQge1xyXG4gICAgICAgIGlmKCF0aGlzLnZpcnR1YWwud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52aXJ0dWFsLndpZHRoLm1hdGNoKC9eKFxcZCpcXC4pP1tcXGRdK3B4fCUkLykpIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMudmlydHVhbC53aWR0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmlydHVhbC53aWR0aC5tYXRjaCgvXltcXGRdKyQvKSkge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy52aXJ0dWFsLndpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCB3aWR0aCBpcyBub3QgYSBjc3MgcGl4ZWwgb3IgcGVyY2VudGFnZSB3aWR0aCBvciBhIG51bWJlci4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3SGVpZ2h0KCk6dm9pZCB7XHJcbiAgICAgICAgaWYoIXRoaXMudmlydHVhbC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52aXJ0dWFsLmhlaWdodC5tYXRjaCgvXihcXGQqXFwuKT9bXFxkXStweHwlJC8pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy52aXJ0dWFsLmhlaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmlydHVhbC5oZWlnaHQubWF0Y2goL15bXFxkXSskLykpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnZpcnR1YWwuaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBoZWlnaHQgaXMgbm90IGEgY3NzIHBpeGVsIG9yIHBlcmNlbnRhZ2Ugd2lkdGggb3IgYSBudW1iZXIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VsZW1lbnRzL1JlY3RFbGVtZW50LnRzIiwiZXhwb3J0IGludGVyZmFjZSBJT3JpZW50ZWQgXHJcbntcclxuICAgIG9yaWVudGF0aW9uOiBPcmllbnRhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3JpZW50YXRpb24ge1xyXG4gICAgSG9yaXpvbnRhbCxcclxuICAgIFZlcnRpY2FsXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50aXRpZXMvSU9yaWVudGVkLnRzIiwiaW1wb3J0IHsgSURyYXdhYmxlIH0gZnJvbSAnLi4vZW50aXRpZXMvSURyYXdhYmxlJztcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnRzL0VsZW1lbnQnO1xyXG5cclxuLyoqXHJcbiAqIExheW91dFxyXG4gKiBBbiBBYnN0cmFjdCBjbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBMYXlvdXQuICBBIGxheW91dCBpcyBhIGNvbXBvc2l0aW9uIG9mXHJcbiAqIEVsZW1lbnRzLiAgQSBsYXlvdXQgaGFzIGEgZHJhdyBtZXRob2Qgd2hlcmUgaXQgaXQgcmVzcG9uc2libGUgZm9yIGRyYXdpbmdcclxuICogaXRzZWxmIGFuZCBkcmF3aW5nIGl0J3MgY2hpbGRyZW4gb3IgdHJpZ2dlcmluZyB0aGUgY2hpbGRyZW4gdG8gZHJhdy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXlvdXQgaW1wbGVtZW50cyBJRHJhd2FibGUge1xyXG5cclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9lbGVtZW50czoge1tpZDogc3RyaW5nXTogRWxlbWVudH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRWxlbWVudChlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudHNbZWxlbWVudC5pZF0gPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVsZW1lbnQoKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgZHJhdygpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3Qgc2V0dXAoKTogdm9pZDtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXRzL0xheW91dC50cyIsImltcG9ydCB7IFByb21pc2UgfSBmcm9tIFwibGllLXRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0b3Ige1xyXG5cclxuICAgIHB1YmxpYyBzdGFydDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZHVyYXRpb246IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3N0ZXA6IEZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWw6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3JhdGU6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZHVyYXRpb246IG51bWJlciwgc3RlcDogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDIwMDtcclxuICAgICAgICB0aGlzLl9zdGVwID0gc3RlcDtcclxuICAgICAgICB0aGlzLl9yYXRlID0gMTY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlIGNhbGxpbmcgYSBzdGVwIGZ1bmN0aW9uIG92ZXIgZHVyYXRpb24uIFN0ZXAgaXMgY2FsbGVkIHdpdGggZGVsdGFcclxuICAgICAqIHRpbWUgc28gdGhhdCBhbmltYXRpb25zIGNvbXBsZXRlIHdpdGhpbiB0aGUgZHVyYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgZGF0ZVxyXG4gICAgICovXHJcbiAgICBhbmltYXRlKHN0YXJ0OiBudW1iZXIgPSBEYXRlLm5vdygpKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWx0YVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVQYXNzZWQgPSBkZWx0YVRpbWUgLSBzdGFydDtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWVQYXNzZWQgLyB0aGlzLl9kdXJhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAxKSBwcm9ncmVzcyA9IDFcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBwcm9ncmVzcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGVwKGRlbHRhKTsgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGhpcy5fcmF0ZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FuaW1hdGUvQW5pbWF0b3IudHMiLCJpbXBvcnQgeyBIb3Jpem9udGFsTGF5b3V0IH0gZnJvbSBcIi4vSG9yaXpvbnRhbExheW91dFwiO1xyXG5pbXBvcnQgeyBWZXJ0aWNhbExheW91dCB9IGZyb20gXCIuL1ZlcnRpY2FsTGF5b3V0XCI7XHJcbmltcG9ydCB7IEZpbGxFbGVtZW50IH0gZnJvbSBcIi4uL2VsZW1lbnRzL0ZpbGxFbGVtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0RmFjdG9yeSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBWZXJ0aWNhbCBMYXlvdXQgZnJvbSB0aGUgcHJvdmlkZWQgSWRcclxuICAgICAqIEBwYXJhbSBpZCBvZiBsYXlvdXQgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVWZXJ0aWNhbExheW91dChpZDogc3RyaW5nKTogVmVydGljYWxMYXlvdXQge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gbmV3IEZpbGxFbGVtZW50KGlkKTtcclxuICAgICAgICBsZXQgbGF5b3V0ID0gbmV3IFZlcnRpY2FsTGF5b3V0KGVsZW1lbnQpO1xyXG4gICAgICAgIGxheW91dC5zZXR1cCgpO1xyXG4gICAgICAgIHJldHVybiBsYXlvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBIb3Jpem9udGFsIExheW91dCBmcm9tIHRoZSBwcm92aWRlZCBJZFxyXG4gICAgICogQHBhcmFtIGlkIG9mIGxheW91dCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUhvcml6b250YWxMYXlvdXQoaWQ6IHN0cmluZyk6IEhvcml6b250YWxMYXlvdXQge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gbmV3IEZpbGxFbGVtZW50KGlkKTtcclxuICAgICAgICBsZXQgbGF5b3V0ID0gbmV3IEhvcml6b250YWxMYXlvdXQoZWxlbWVudCk7XHJcbiAgICAgICAgbGF5b3V0LnNldHVwKCk7XHJcbiAgICAgICAgcmV0dXJuIGxheW91dDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXRzL0xheW91dEZhY3RvcnkudHMiLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi9FbGVtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxsRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VsZW1lbnRzL0ZpbGxFbGVtZW50LnRzIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4vRWxlbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlydHVhbEVsZW1lbnQge1xyXG4gICAgXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgd2lkdGg6IHN0cmluZztcclxuICAgIHB1YmxpYyBvdmVyZmxvdzogc3RyaW5nO1xyXG4gICAgcHVibGljIGZsb2F0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nOyBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbGVtZW50cy9WaXJ0dWFsRWxlbWVudC50cyIsImltcG9ydCB7IExheW91dCB9IGZyb20gJy4vTGF5b3V0JztcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnRzL0VsZW1lbnQnO1xyXG5pbXBvcnQgeyBSZWN0RWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnRzL1JlY3RFbGVtZW50JztcclxuaW1wb3J0IHsgT3JpZW50YXRpb24gfSBmcm9tICcuLi9lbnRpdGllcy9JT3JpZW50ZWQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvcml6b250YWxMYXlvdXQgZXh0ZW5kcyBMYXlvdXQge1xyXG5cclxuICAgIHByaXZhdGUgZml4ZWRDaGlsZHJlbjogQXJyYXk8UmVjdEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBwZXJjdENoaWxkcmVuOiBBcnJheTxSZWN0RWxlbWVudD47XHJcbiAgICBwcml2YXRlIGZsdWlkQ2hpbGRyZW46IEFycmF5PFJlY3RFbGVtZW50PjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZml4ZWRDaGlsZHJlbiA9IG5ldyBBcnJheTxSZWN0RWxlbWVudD4oKTtcclxuICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4gPSBuZXcgQXJyYXk8UmVjdEVsZW1lbnQ+KCk7XHJcbiAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuID0gbmV3IEFycmF5PFJlY3RFbGVtZW50PigpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gRHJhdyB0aGlzIGxheW91dCBlbGVtZW50LlxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmF3KCk7XHJcblxyXG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gcGFyc2VGbG9hdCh0aGlzLmVsZW1lbnQud2lkdGgpO1xyXG4gICAgICAgIHZhciBmbHVpZFdpZHRoID0gdG90YWxXaWR0aDtcclxuICAgICAgICB2YXIgcGVyY3RXaWR0aCA9IDA7XHJcbiAgICAgICAgdmFyIHRvdGFsSGVpZ2h0ID0gdGhpcy5lbGVtZW50LmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZml4ZWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZpeGVkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZmx1aWRXaWR0aCAtPSBwYXJzZUZsb2F0KGVsLnZpcnR1YWwud2lkdGgpO1xyXG4gICAgICAgICAgICBlbC52aXJ0dWFsLmhlaWdodCA9IHRvdGFsSGVpZ2h0O1xyXG4gICAgICAgICAgICBlbC5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERyYXcgdGhlIHBlcmNlbnRhZ2UgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLnBlcmN0Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gKHBhcnNlRmxvYXQoZWwuaW5pdGlhbC53aWR0aCkgLyAxMDAgKiBmbHVpZFdpZHRoKTtcclxuICAgICAgICAgICAgZWwudmlydHVhbC53aWR0aCA9ICB3aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIHBlcmN0V2lkdGggKz0gd2lkdGg7XHJcbiAgICAgICAgICAgIGVsLnZpcnR1YWwuaGVpZ2h0ID0gdG90YWxIZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmx1aWRXaWR0aCAtPSBwZXJjdFdpZHRoOyBcclxuICAgICAgICAvLyBEcmF3IHRoZSBmbHVpZCBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZmx1aWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICB2YXIgd2lkdGggPSBmbHVpZFdpZHRoIC8gdGhpcy5mbHVpZENoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgZWwudmlydHVhbC53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgZWwudmlydHVhbC5oZWlnaHQgPSB0b3RhbEhlaWdodDtcclxuICAgICAgICAgICAgZWwuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBGb3IgZWFjaCBjaGlsZCBlbGVtZW50IGluIGVsZW1lbnRzLCBzZXQgdXAgYSBuZXcgUmVjdEVsZW1lbnQgZmlndXJlIFxyXG4gICAgICAgIC8vIG91dCBpZiBpdCBoYXMgYSB3aWR0aCBzZXQgYXMgYSBwaXhlbCB2YWx1ZSAoZml4ZWQgY2hpbGQpLCBhIDEwMCVcclxuICAgICAgICAvLyB2YWx1ZSAoZmx1aWQgY2hpbGQpLCBvciBhIHZhbHVlIHNldCB0byBhIHNwZWNpZmljIHBlcmNlbnRhZ2UgXHJcbiAgICAgICAgLy8gKHBlcmNlbnRhZ2UgY2hpbGQpXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5lbGVtZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZEVsZW1lbnQgPSBuZXcgUmVjdEVsZW1lbnQoY2hpbGQuaWQpO1xyXG4gICAgICAgICAgICBjaGlsZEVsZW1lbnQub3JpZW50YXRpb24gPSBPcmllbnRhdGlvbi5Ib3Jpem9udGFsO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRFbGVtZW50LmluaXRpYWwud2lkdGggPT09ICcxMDAlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuLnB1c2goY2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZEVsZW1lbnQuaW5pdGlhbC53aWR0aC5tYXRjaCgvXltcXGRdKyUkLykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbi5wdXNoKGNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4ucHVzaChjaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudC52aXJ0dWFsLmZsb2F0ID0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudChjaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXRzL0hvcml6b250YWxMYXlvdXQudHMiLCJpbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL0xheW91dCc7XHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuLi9lbGVtZW50cy9FbGVtZW50JztcclxuaW1wb3J0IHsgUmVjdEVsZW1lbnQgfSBmcm9tICcuLi9lbGVtZW50cy9SZWN0RWxlbWVudCc7XHJcbmltcG9ydCB7IE9yaWVudGF0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvSU9yaWVudGVkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbExheW91dCBleHRlbmRzIExheW91dCB7XHJcblxyXG4gICAgcHJpdmF0ZSBmaXhlZENoaWxkcmVuOiBBcnJheTxSZWN0RWxlbWVudD47XHJcbiAgICBwcml2YXRlIHBlcmN0Q2hpbGRyZW46IEFycmF5PFJlY3RFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZmx1aWRDaGlsZHJlbjogQXJyYXk8UmVjdEVsZW1lbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5maXhlZENoaWxkcmVuID0gbmV3IEFycmF5PFJlY3RFbGVtZW50PigpO1xyXG4gICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbiA9IG5ldyBBcnJheTxSZWN0RWxlbWVudD4oKTtcclxuICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8UmVjdEVsZW1lbnQ+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuICAgICAgICAvLyBEcmF3IHRoaXMgbGF5b3V0IGVsZW1lbnQuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYXcoKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsSGVpZ2h0ID0gcGFyc2VGbG9hdCh0aGlzLmVsZW1lbnQuaGVpZ2h0KTtcclxuICAgICAgICB2YXIgZmx1aWRIZWlnaHQgPSB0b3RhbEhlaWdodDtcclxuICAgICAgICB2YXIgcGVyY3RIZWlnaHQgPSAwO1xyXG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gdGhpcy5lbGVtZW50LndpZHRoO1xyXG5cclxuICAgICAgICAvLyBEcmF3IHRoZSBmaXhlZCBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZml4ZWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmbHVpZEhlaWdodCAtPSBwYXJzZUZsb2F0KGVsLnZpcnR1YWwuaGVpZ2h0KTtcclxuICAgICAgICAgICAgZWwudmlydHVhbC53aWR0aCA9IHRvdGFsV2lkdGg7XHJcbiAgICAgICAgICAgIGVsLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgcGVyY2VudGFnZSBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMucGVyY3RDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gKHBhcnNlRmxvYXQoZWwuaW5pdGlhbC5oZWlnaHQpIC8gMTAwICogZmx1aWRIZWlnaHQpO1xyXG4gICAgICAgICAgICBlbC52aXJ0dWFsLmhlaWdodCA9ICBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICBwZXJjdEhlaWdodCArPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsLnZpcnR1YWwud2lkdGggPSB0b3RhbFdpZHRoO1xyXG4gICAgICAgICAgICBlbC5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZsdWlkSGVpZ2h0IC09IHBlcmN0SGVpZ2h0OyBcclxuICAgICAgICAvLyBEcmF3IHRoZSBmbHVpZCBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZmx1aWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZmx1aWRIZWlnaHQgLyB0aGlzLmZsdWlkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICBlbC52aXJ0dWFsLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIGVsLnZpcnR1YWwud2lkdGggPSB0b3RhbFdpZHRoO1xyXG4gICAgICAgICAgICBlbC5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEZvciBlYWNoIGNoaWxkIGVsZW1lbnQgaW4gZWxlbWVudHMsIHNldCB1cCBhIG5ldyBSZWN0RWxlbWVudCBmaWd1cmUgXHJcbiAgICAgICAgLy8gb3V0IGlmIGl0IGhhcyBhIGhlaWdodCBzZXQgYXMgYSBwaXhlbCB2YWx1ZSAoZml4ZWQgY2hpbGQpLCBhIDEwMCVcclxuICAgICAgICAvLyB2YWx1ZSAoZmx1aWQgY2hpbGQpLCBvciBhIHZhbHVlIHNldCB0byBhIHNwZWNpZmljIHBlcmNlbnRhZ2UgXHJcbiAgICAgICAgLy8gKHBlcmNlbnRhZ2UgY2hpbGQpXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5lbGVtZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZEVsZW1lbnQgPSBuZXcgUmVjdEVsZW1lbnQoY2hpbGQuaWQpO1xyXG4gICAgICAgICAgICBjaGlsZEVsZW1lbnQub3JpZW50YXRpb24gPSBPcmllbnRhdGlvbi5WZXJ0aWNhbDtcclxuICAgICAgICAgICAgaWYgKGNoaWxkRWxlbWVudC5pbml0aWFsLmhlaWdodCA9PT0gJzEwMCUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4ucHVzaChjaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkRWxlbWVudC5pbml0aWFsLmhlaWdodC5tYXRjaCgvXltcXGRdKyUkLykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbi5wdXNoKGNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4ucHVzaChjaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudC52aXJ0dWFsLmZsb2F0ID0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudChjaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXRzL1ZlcnRpY2FsTGF5b3V0LnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIF9JTlRFUk5BTCA9IGZ1bmN0aW9uICgpIHsgfTtcclxudmFyIF9SRUpFQ1RFRCA9IFsnUiddO1xyXG52YXIgX0ZVTEZJTExFRCA9IFsnRiddO1xyXG52YXIgX1BFTkRJTkcgPSBbJ1AnXTtcclxudmFyIFByb21pc2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gX1BFTkRJTkc7XHJcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcclxuICAgICAgICB0aGlzLl9vdXRjb21lID0gdm9pZCAwO1xyXG4gICAgICAgIGlmIChyZXNvbHZlciAhPT0gX0lOVEVSTkFMKSB7XHJcbiAgICAgICAgICAgIF9zYWZlbHlSZXNvbHZlVGhlbmFibGUodGhpcywgcmVzb2x2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFByb21pc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uICgpIHsgfSwgb25SZWplY3RlZCk7XHJcbiAgICB9O1xyXG4gICAgUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb25GdWxmaWxsZWQgIT09ICdmdW5jdGlvbicgJiYgdGhpcy5fc3RhdGUgPT09IF9GVUxGSUxMRUQgfHxcclxuICAgICAgICAgICAgdHlwZW9mIG9uUmVqZWN0ZWQgIT09ICdmdW5jdGlvbicgJiYgdGhpcy5fc3RhdGUgPT09IF9SRUpFQ1RFRCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShfSU5URVJOQUwpO1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gX1BFTkRJTkcpIHtcclxuICAgICAgICAgICAgdmFyIHJlc29sdmVyID0gdGhpcy5fc3RhdGUgPT09IF9GVUxGSUxMRUQgPyBvbkZ1bGZpbGxlZCA6IG9uUmVqZWN0ZWQ7XHJcbiAgICAgICAgICAgIF91bndyYXAocHJvbWlzZSwgcmVzb2x2ZXIsIHRoaXMuX291dGNvbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcXVldWUucHVzaChuZXcgX1F1ZXVlSXRlbShwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIFByb21pc2VcclxuICAgICAqL1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgdGhpcykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfaGFuZGxlcnMuX3Jlc29sdmUobmV3IFByb21pc2UoX0lOVEVSTkFMKSwgdmFsdWUpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7YW55fSByZWFzb25cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIFByb21pc2VcclxuICAgICAqL1xyXG4gICAgUHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIF9oYW5kbGVycy5fcmVqZWN0KG5ldyBQcm9taXNlKF9JTlRFUk5BTCksIHJlYXNvbik7XHJcbiAgICB9O1xyXG4gICAgUHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAoaXRlcmFibGUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcclxuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsZW4pO1xyXG4gICAgICAgIHZhciByZXNvbHZlZCA9IDA7XHJcbiAgICAgICAgdmFyIGkgPSAtMTtcclxuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKF9JTlRFUk5BTCk7XHJcbiAgICAgICAgaWYgKCFsZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcclxuICAgICAgICAgICAgYWxsUmVzb2x2ZXIoaXRlcmFibGVbaV0sIGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICBmdW5jdGlvbiBhbGxSZXNvbHZlcih2YWx1ZSwgaSkge1xyXG4gICAgICAgICAgICBzZWxmLnJlc29sdmUodmFsdWUpLnRoZW4ocmVzb2x2ZUZyb21BbGwsIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIF9oYW5kbGVycy5fcmVqZWN0KHByb21pc2UsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc29sdmVGcm9tQWxsKG91dFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaV0gPSBvdXRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICgrK3Jlc29sdmVkID09PSBsZW4gJiYgIWNhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgX2hhbmRsZXJzLl9yZXNvbHZlKHByb21pc2UsIHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsZW4gPSBpdGVyYWJsZS5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpID0gLTE7XHJcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShfSU5URVJOQUwpO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZXJhYmxlKSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVyKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfaGFuZGxlcnMuX3Jlc29sdmUocHJvbWlzZSwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfaGFuZGxlcnMuX3JlamVjdChwcm9taXNlLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWxlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xyXG4gICAgICAgICAgICByZXNvbHZlcihpdGVyYWJsZVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQcm9taXNlO1xyXG59KCkpO1xyXG5leHBvcnRzLlByb21pc2UgPSBQcm9taXNlO1xyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIF9RdWV1ZUl0ZW1cclxuICovXHJcbnZhciBfUXVldWVJdGVtID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIF9RdWV1ZUl0ZW0ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLl9wcm9taXNlID0gcHJvbWlzZTtcclxuICAgICAgICBpZiAodHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uRnVsZmlsbGVkID0gb25GdWxmaWxsZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxGdWxmaWxsZWQgPSB0aGlzLl9vdGhlckNhbGxGdWxmaWxsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLl9vblJlamVjdGVkID0gb25SZWplY3RlZDtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbFJlamVjdGVkID0gdGhpcy5fb3RoZXJDYWxsUmVqZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX1F1ZXVlSXRlbS5wcm90b3R5cGUuX2NhbGxGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBfaGFuZGxlcnMuX3Jlc29sdmUodGhpcy5fcHJvbWlzZSwgdmFsdWUpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIF9RdWV1ZUl0ZW0ucHJvdG90eXBlLl9vdGhlckNhbGxGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBfdW53cmFwKHRoaXMuX3Byb21pc2UsIHRoaXMuX29uRnVsZmlsbGVkLCB2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgX1F1ZXVlSXRlbS5wcm90b3R5cGUuX2NhbGxSZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIF9oYW5kbGVycy5fcmVqZWN0KHRoaXMuX3Byb21pc2UsIHZhbHVlKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBfUXVldWVJdGVtLnByb3RvdHlwZS5fb3RoZXJDYWxsUmVqZWN0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBfdW53cmFwKHRoaXMuX3Byb21pc2UsIHRoaXMuX29uUmVqZWN0ZWQsIHZhbHVlKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICByZXR1cm4gX1F1ZXVlSXRlbTtcclxufSgpKTtcclxuZXhwb3J0cy5fUXVldWVJdGVtID0gX1F1ZXVlSXRlbTtcclxuLyoqXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAcGFyYW0ge2FueX0gcHJvbWlzZVxyXG4gKiBAcGFyYW0ge2FueX0gZnVuY1xyXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIF91bndyYXAocHJvbWlzZSwgZnVuYywgdmFsdWUpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXR1cm5WYWx1ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGZ1bmMuYXBwbHkobnVsbCwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gX2hhbmRsZXJzLl9yZWplY3QocHJvbWlzZSwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gcHJvbWlzZSkge1xyXG4gICAgICAgICAgICBfaGFuZGxlcnMuX3JlamVjdChwcm9taXNlLCBuZXcgVHlwZUVycm9yKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX2hhbmRsZXJzLl9yZXNvbHZlKHByb21pc2UsIHJldHVyblZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9KTtcclxufVxyXG4vKipcclxuICpcclxuICogQGludGVybmFsXHJcbiAqIEBjbGFzcyBfaGFuZGxlcnNcclxuICovXHJcbnZhciBfaGFuZGxlcnMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gX2hhbmRsZXJzKCkge1xyXG4gICAgfVxyXG4gICAgX2hhbmRsZXJzLl9yZXNvbHZlID0gZnVuY3Rpb24gKHNlbGYsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IF90cnlDYXRjaChfZ2V0VGhlbiwgdmFsdWUpO1xyXG4gICAgICAgIHZhciB0aGVuYWJsZSA9IHJlc3VsdC5fdmFsdWU7XHJcbiAgICAgICAgdmFyIGkgPSAtMTtcclxuICAgICAgICB2YXIgbGVuID0gc2VsZi5fcXVldWUubGVuZ3RoO1xyXG4gICAgICAgIGlmIChyZXN1bHQuX3N0YXR1cyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICByZXR1cm4gX2hhbmRsZXJzLl9yZWplY3Qoc2VsZiwgcmVzdWx0Ll92YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGVuYWJsZSkge1xyXG4gICAgICAgICAgICBfc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHNlbGYsIHRoZW5hYmxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYuX3N0YXRlID0gX0ZVTEZJTExFRDtcclxuICAgICAgICAgICAgc2VsZi5fb3V0Y29tZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9xdWV1ZVtpXS5fY2FsbEZ1bGZpbGxlZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgX2hhbmRsZXJzLl9yZWplY3QgPSBmdW5jdGlvbiAoc2VsZiwgZXJyb3IpIHtcclxuICAgICAgICBzZWxmLl9zdGF0ZSA9IF9SRUpFQ1RFRDtcclxuICAgICAgICBzZWxmLl9vdXRjb21lID0gZXJyb3I7XHJcbiAgICAgICAgdmFyIGkgPSAtMTtcclxuICAgICAgICB2YXIgbGVuID0gc2VsZi5fcXVldWUubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcclxuICAgICAgICAgICAgc2VsZi5fcXVldWVbaV0uX2NhbGxSZWplY3RlZChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIHJldHVybiBfaGFuZGxlcnM7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQHBhcmFtIHthbnl9IG9ialxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZnVuY3Rpb24gX2dldFRoZW4ob2JqKSB7XHJcbiAgICAvLyBNYWtlIHN1cmUgd2Ugb25seSBhY2Nlc3MgdGhlIGFjY2Vzc29yIG9uY2UgYXMgcmVxdWlyZWQgYnkgdGhlIHNwZWNcclxuICAgIHZhciB0aGVuID0gb2JqICYmIG9iai50aGVuO1xyXG4gICAgaWYgKG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXBweVRoZW4oKSB7XHJcbiAgICAgICAgICAgIHRoZW4uYXBwbHkob2JqLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICpcclxuICogQGludGVybmFsXHJcbiAqIEBwYXJhbSB7UHJvbWlzZTxhbnk+fSBzZWxmXHJcbiAqIEBwYXJhbSB7KG9uU3VjY2VzczooLi4uVCkgPT4gdm9pZCwgb25GYWlsOiguLi5UKSA9PiB2b2lkKSA9PiB2b2lkfSB0aGVuYWJsZVxyXG4gKi9cclxuZnVuY3Rpb24gX3NhZmVseVJlc29sdmVUaGVuYWJsZShzZWxmLCB0aGVuYWJsZSkge1xyXG4gICAgLy8gRWl0aGVyIGZ1bGZpbGwsIHJlamVjdCBvciByZWplY3Qgd2l0aCBlcnJvclxyXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xyXG4gICAgZnVuY3Rpb24gb25FcnJvcigpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YWx1ZVtfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICBfaGFuZGxlcnMuX3JlamVjdChzZWxmLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFsdWVbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgX2hhbmRsZXJzLl9yZXNvbHZlKHNlbGYsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyeVRvVW53cmFwKCkge1xyXG4gICAgICAgIHRoZW5hYmxlKG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzdWx0ID0gX3RyeUNhdGNoKHRyeVRvVW53cmFwKTtcclxuICAgIGlmIChyZXN1bHQuX3N0YXR1cyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgIG9uRXJyb3IocmVzdWx0Ll92YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAcGFyYW0ge2FueX0gZnVuY1xyXG4gKiBAcGFyYW0geyp9IFt2YWx1ZXNdXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBfdHJ5Q2F0Y2goZnVuYywgdmFsdWVzKSB7XHJcbiAgICB2YXIgb3V0ID0geyBfc3RhdHVzOiBudWxsLCBfdmFsdWU6IG51bGwgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3V0Ll92YWx1ZSA9IGZ1bmModmFsdWVzKTtcclxuICAgICAgICBvdXQuX3N0YXR1cyA9ICdzdWNjZXNzJztcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgb3V0Ll9zdGF0dXMgPSAnZXJyb3InO1xyXG4gICAgICAgIG91dC5fdmFsdWUgPSBlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbGllLXRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBMYXlvdXRGYWN0b3J5IH0gZnJvbSAnLi9sYXlvdXRzL0xheW91dEZhY3RvcnknO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2xheW91dHMvTGF5b3V0JztcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudHMvRWxlbWVudCc7XHJcbmltcG9ydCB7IFJlY3RFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9SZWN0RWxlbWVudCc7XHJcbmltcG9ydCB7IEFuaW1hdG9yIH0gZnJvbSAnLi9hbmltYXRlL0FuaW1hdG9yJztcclxuaW1wb3J0IHsgT3JpZW50YXRpb24gfSBmcm9tICcuL2VudGl0aWVzL0lPcmllbnRlZCc7XHJcblxyXG4vKiFcclxuICogTGF5b3V0IEZyYW1ld29yazogQ29yZSAoaHR0cDovL2xheW91dGZyYW1ld29yay5jb20pXHJcbiAqIENvcHlyaWdodCAyMDE3IEphbWVzIEVobHlcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vamFtZXNlaGx5L2xheW91dC1jb3JlL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqIC9cclxuXHJcbi8qKlxyXG4gKiAjTGF5b3V0IEFQSVxyXG4gKiBUaGUgTGF5b3V0IEFQSSBvcGVyYXRlcyBhcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBsYXlvdXQgZW5naW5lLiBJdCBmb2xsb3dzICBcclxuICogdGhlIGZhY2FkZSBwYXR0ZXIgYXMgYWxsIGludGVyYWN0aW9ucyB0byB0aGUgbGF5b3V0IGNhbiBiZSBtYWRlIHRocm91Z2ggdGhpcyBcclxuICogYXBpIHdpdGhvdXQgaGF2aW5nIHRvIHdvcnJ5IGFib3V0IHRoZSBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIG9mIHRoZSBjbGFzc2VzXHJcbiAqIGRvaW5nIHRoZSB3b3JrLlxyXG4gKiBcclxuICogIyMgV2hhdCBpcyBhIGxheW91dD9cclxuICogXHJcbiAqIEluIHRlcm1zIG9mIHRoaXMgcHJvamVjdCwgYSBsYXlvdXQgaXMgYW4gaHRtbCBzdHJ1Y3R1cmUgb2YgYSBwYXJlbnQgZWxlbWVudFxyXG4gKiBhbmQgaXRzIGltbWVkaWF0ZSBjaGlsZHJlbi4gIFRoaXMgY2FuIGJlIGFueSB0eXBlIG9mIHRhZyBlbGVtZW50LCBidXQgaXMgXHJcbiAqIHR5cGljYWxseSBkaXYgdGFnczpcclxuICogXHJcbiAqIDxkaXYgaWQ9XCJsYXlvdXRcIj5cclxuICogICA8ZGl2IGlkPVwiY2hpbGQtMVwiPi4uLjwvZGl2PlxyXG4gKiAgIDxkaXYgaWQ9XCJjaGlsZC0yXCI+Li4uPC9kaXY+XHJcbiAqIDwvZGl2PlxyXG4gKiBcclxuICogVGhlc2UgdHlwZXMgb2YgY29udHN0cnVjdHMgYXJlIHVzZWQgdG8gYnVpbGQgbGF5b3V0cyB1c2luZyB0aGUgbGF5b3V0IGFwaS4gXHJcbiAqIE5vdGUgdGhhdCB0aGUgaWRzIHVzZWQgaW4gdGhlIGV4YW1wbGUgYWJvdmUgY2FuIGJlIGNoYW5nZWQgdG8gd2hhdCBldmVyIHlvdSBcclxuICogd2lzaC4gIFdoaWxlIGFuIGlkIG9uIHRoZSBwYXJlbnQgbGF5b3V0IGVsZW1lbnQgaXMgcmVxdWlyZWQsIHRoZSBjaGlsZCBpZHMgXHJcbiAqIGFyZSBvcHRpb25hbDsgdGhleSB3aWxsIGJlIGdlbmVyYXRlZCBpZiBub3QgcHJlc2VudC4gIEZyb20gaGVyZSBvbiBvdXQgaW4gdGhlXHJcbiAqIGRvY3VtZW50YXRpb24sIGEgcGFyZW50IGVsZW1lbnQgaXMgcmVmZXJyZWQgdG8gYXMgYSBsYXlvdXQgZWxlbWVudCBhbmQgaXRzIFxyXG4gKiBjaGlsZCBlbGVtZW50cyBhcmUgcmVmZXJyZWQgdG8gYXMgZnJhbWUgZWxlbWVudHMuXHJcbiAqIFxyXG4gKiAjIyBMYXlvdXQgcnVsZXNcclxuICogXHJcbiAqIExheW91dHMgZm9sbG93IHRoZXNlIHJ1bGVzOlxyXG4gKiBcclxuICogMS4gVGhlIGxheW91dCBlbGVtZW50IHN0cmV0Y2hlcyB0byB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiBpdHMgcGFyZW50LiAgXHJcbiAqIDIuIEZyYW1lIGVsZW1lbnRzIHN0cmV0Y2ggaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGVpciBvcmllbnRhdGlvbi5cclxuICogMy4gQnkgZGVmYXVsdCwgZnJhbWUgc2l6ZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBudW1iZXIgb2YgZnJhbWVzIGFjcm9zcyBpdHNcclxuICogICAgb3JpZW50YXRpb24uICBGb3IgZXhhbXBsZSwgaWYgdGhlcmUgYXJlIDMgZnJhbWVzIGluIGEgdmVydGljYWwgbGF5b3V0LCBcclxuICogICAgdGhleSB3aWxsIGVhY2ggYmUgMzMuMzMzJSBoaWdoIGFuZCAxMDAlIHdpZGUuXHJcbiAqIDQuIEZyYW1lcyBjYW4gc3BlY2lmeSBhIGZyYW1lIHNpemUgaW4gcGl4ZWxzIG9yIHBlcmNlbnQuICBUaGlzIHNpemUgd2lsbCBiZVxyXG4gKiAgICBob25vcmVkIGZvciB0aGUgbGlmZXRpbWUgb2YgdGhlIGZyYW1lLiAgRnJhbWVzIHRoYXQgZG9uJ3Qgc3BlY2lmeSBhIHNpemVcclxuICogICAgd2lsbCBzdHJldGNoIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZSBhbmQgYmUgc2l6ZWQgYWNjb3JkaW5nIHRvIHJ1bGUgMy5cclxuICogNS4gV2hlbiB0aGUgd2luZG93IGlzIHJlc2l6ZWQsIHRoZSBsYXlvdXQgYW5kIGl0cyBmcmFtZXMgYW5kIGFueSBzdWIgbGF5b3V0c1xyXG4gKiAgICBhbmQgZnJhbWVzIGFyZSByZWRyYXduLlxyXG4gKiA2LiBGcmFtZXMgY2FuIGJlIGFkZGVkIGFuZCByZW1vdmVkIGF0IGFueSB0aW1lIHVzaW5nIHRoaXMgYXBpLiAgSWYgZnJhbWVzIGFyZVxyXG4gKiAgICBhZGRlZCB2aWEgZXh0ZXJuYWwgbWVhbnMsIHlvdSBjYW4gdXNlIHRoZSBhcGkgdG8gZmluZCB0aGVtLlxyXG4gKiBcclxuICogSW5pdCB0aGUgbGF5b3V0OlxyXG4gKiBsYXlvdXQuaW5pdCgpO1xyXG4gKiBcclxuICogQWRkIGxheW91dHMgdG8gdGhlIGxheW91dC5cclxuICogbGF5b3V0LmFkZFZlcnRpY2FsTGF5b3V0KCdpZC0xJyk7XHJcbiAqIGxheW91dC5hZGRIb3Jpem9udGFsTGF5b3V0KCdpZC0yKTtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBcGkge1xyXG5cclxuICAgIHB1YmxpYyBhbmltYXRpb25TdGFydDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2ZhY3Rvcnk6IExheW91dEZhY3Rvcnk7XHJcbiAgICBwcml2YXRlIF9sYXlvdXRzOiBBcnJheTxMYXlvdXQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGF5b3V0cygpOiBBcnJheTxMYXlvdXQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0aGUgcHJvY2VzcyBvZiB3YXRjaGluZyB0aGUgd2luZG93IGZvciByZXNpemUgZXZlbnRzIGFuZCBmaXJlcyB0aGVcclxuICAgICAqIGluaXRpYWwgZHJhdyBvZiB0aGUgbGF5b3V0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIElFIFNwZWNpZmljXHJcbiAgICAgICAgaWYgKCg8YW55PndpbmRvdykuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgKDxhbnk+d2luZG93KS5hdHRhY2hFdmVudCgnb25yZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL1RoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgSmF2YXNjcmlwdCBldmVudCBiaW5kaW5nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlc2V0IGFsbCBsYXlvdXRzIGFuZCB0aGUgbGF5b3V0IGZhY3RvcnlcclxuICAgICAqL1xyXG4gICAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZmFjdG9yeSA9IG5ldyBMYXlvdXRGYWN0b3J5KCk7XHJcbiAgICAgICAgdGhpcy5fbGF5b3V0cyA9IG5ldyBBcnJheTxMYXlvdXQ+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBsYXlvdXQgc3BlY2lmaWVkIGJ5IGl0cyBpZCwgdHlwZSBhbmQgb3B0aW9ucy4gIElmIG5vIHR5cGUgaXNcclxuICAgICAqIHNwZWNpZmllZCwgdGhlbiBpdCBkZWZhdWx0cyB0byBhIFZlcnRpY2FsTGF5b3V0LiAgVGhlcmUgaXMgbm8gZGVmYXVsdCBmb3JcclxuICAgICAqIG9wdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBcclxuICAgICAqIEBwYXJhbSB0eXBlIFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgXHJcbiAgICAgKi9cclxuICAgIGFkZChpZGVudGlmaWVyOiBzdHJpbmcsIHR5cGU6IHN0cmluZyA9IG51bGwsIG9wdGlvbnM6IGFueSA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXR5cGUpXHJcbiAgICAgICAgICAgIHR5cGUgPSBcIlZlcnRpY2FsTGF5b3V0XCI7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fZmFjdG9yeVsnY3JlYXRlJyArIHR5cGVdKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgY3JlYXRlJHt0eXBlfSgpIGlzIG5vdCBhIG1ldGhvZCBvbiBMYXlvdXRGYWN0b3J5LiAgQ2hlY2sgdGhlIEFQSSBmb3IgbWV0aG9kcyBvbiBMYXlvdXRGYWN0b3J5LmApO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgbGF5b3V0ID0gdGhpcy5fZmFjdG9yeVsnY3JlYXRlJyArIHR5cGVdKGlkZW50aWZpZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBsYXlvdXQgPSB0aGlzLl9mYWN0b3J5WydjcmVhdGUnICsgdHlwZV0oaWRlbnRpZmllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEB0b2RvIGNyZWF0ZSBhIHdheSB0byBzdGFjayBsYXlvdXRzIHNvIHRoZXkgZ2V0IGRyYXduIGluIG9yZGVyIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85MDI4NTgyL2hvdy10by1maW5kLXdoaWNoLWVsZW1lbnQtc3RhbmRzLWhpZ2hlci1pbi10aGUtZG9tLWhpZXJhcmNoeVxyXG4gICAgICAgIHRoaXMuX2xheW91dHMucHVzaChsYXlvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgbGF5b3V0IGJ5IGlkXHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBvZiBsYXlvdXQgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBnZXQoaWRlbnRpZmllcjogc3RyaW5nKTogTGF5b3V0IHtcclxuICAgICAgICBmb3IgKGxldCBsYXlvdXQgb2YgdGhpcy5fbGF5b3V0cykge1xyXG4gICAgICAgICAgICBpZiAobGF5b3V0LmVsZW1lbnQuaWQgPT09IGlkZW50aWZpZXIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGF5b3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIHZhbHVlIG9uIGEgbGF5b3V0IGNoaWxkLlxyXG4gICAgICogU2V0cyB0aGUgdmlydHVhbCBlbGVtZW50J3MgdmFsdWUuICBUaGUgZWxlbWVudCB3aWxsIGJlIGRyYXduIHdpdGggdGhlIFxyXG4gICAgICogdmlydHVhbCBlbGVtZW50IHZhbHVlcyBvbiB0aGUgbmV4dCBkcmF3IGNhbGwuXHJcbiAgICAgKiBAcGFyYW0gaWQgaWQgb2YgdGhlIGNoaWxkIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBvcHRpb24gdmlydHVhbCBwcm9wZXJ0eSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdmlydHVhbCBwcm9wZXJ0eSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzZXQoaWQ6IHN0cmluZywgb3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZWwgPSB0aGlzLmZpbmQoaWQpO1xyXG4gICAgICAgIGlmICghZWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2lkfSBjb3VsZCBub3QgYmUgZm91bmQgaW4gdGhlIHJlZ2lzdGVyZWQgbGF5b3V0cy5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChvcHRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAnaGVpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGVsLnZpcnR1YWwuaGVpZ2h0ID0gZWwubW92YWJsZS5oZWlnaHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd3aWR0aCc6XHJcbiAgICAgICAgICAgICAgICBlbC52aXJ0dWFsLndpZHRoID0gZWwubW92YWJsZS53aWR0aCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ292ZXJmbG93JzpcclxuICAgICAgICAgICAgICAgIGVsLnZpcnR1YWwub3ZlcmZsb3cgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZCBhIGNoaWxkIGVsZW1lbnQgb2YgYSBsYXlvdXQgYnkgaXRzIGlkXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqL1xyXG4gICAgZmluZChpZDogc3RyaW5nKTogRWxlbWVudCB7XHJcbiAgICAgICAgZm9yIChsZXQgbGF5b3V0IG9mIHRoaXMuX2xheW91dHMpIHtcclxuICAgICAgICAgICAgaWYgKGxheW91dC5lbGVtZW50c1tpZF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsYXlvdXQuZWxlbWVudHNbaWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVkcmF3IGFsbCByZWdpc3RlcmVkIGxheW91dHNcclxuICAgICAqL1xyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBsYXlvdXQgb2YgdGhpcy5fbGF5b3V0cykge1xyXG4gICAgICAgICAgICBsYXlvdXQuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGUgdGhlIGRyYXcgb3ZlciBhIHNwZWNpZmllZCBkdXJhdGlvbi5cclxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBcclxuICAgICAqL1xyXG4gICAgYW5pbWF0ZShkdXJhdGlvbjogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRFbGVtZW50cyA9IEFycmF5PEVsZW1lbnQ+KCk7XHJcbiAgICAgICAgLy8gRmluZCBhbGwgb2YgdGhlIGVsZW1lbnRzIHRoYXQgYXJlIGNoYW5nZWRcclxuICAgICAgICBmb3IgKGxldCBsYXlvdXQgb2YgdGhpcy5fbGF5b3V0cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGxheW91dC5lbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gbGF5b3V0LmVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLm1vdmFibGUuaGVpZ2h0IHx8IGVsLm1vdmFibGUud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkRWxlbWVudHMucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBjdXJyZW50IHZhbHVlc1xyXG4gICAgICAgIGxldCBlbGVtZW50U3RvcmU6e1tpZDogc3RyaW5nXTogQXJyYXk8c3RyaW5nPn0gPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBlbCBvZiBjaGFuZ2VkRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgZWxlbWVudFN0b3JlW2VsLmlkXSA9IFtlbC5oZWlnaHQsIGVsLndpZHRoXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIHByb3BlcnRpZXMgb24gdGhlIGNoYW5nZWQgZWxlbWVudHNcclxuICAgICAgICBsZXQgYW5pbWF0b3IgPSBuZXcgQW5pbWF0b3IoZHVyYXRpb24sIChkZWx0YTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkRWxlbWVudHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbCBvZiBjaGFuZ2VkRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5tb3ZhYmxlLmhlaWdodCAmJiBlbC5tb3ZhYmxlLmhlaWdodCAhPSBlbC5mYWN0dWFsLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0byA9IHBhcnNlSW50KGVsLm1vdmFibGUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZnJvbSA9IHBhcnNlSW50KGVsZW1lbnRTdG9yZVtlbC5pZF1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnZpcnR1YWwuaGVpZ2h0ID0gKHRvIC0gZnJvbSkgKiBkZWx0YSArIGZyb20gKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLm1vdmFibGUuaGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbC5tb3ZhYmxlLndpZHRoICYmIGVsLm1vdmFibGUud2lkdGggIT0gZWwuZmFjdHVhbC53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0byA9IHBhcnNlSW50KGVsLm1vdmFibGUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcm9tID0gcGFyc2VJbnQoZWxlbWVudFN0b3JlW2VsLmlkXVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudmlydHVhbC53aWR0aCA9ICh0byAtIGZyb20pICogZGVsdGEgKyBmcm9tICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5tb3ZhYmxlLndpZHRoID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc3RhcnREYXRlID0gdGhpcy5hbmltYXRpb25TdGFydCB8fCBudWxsO1xyXG4gICAgICAgIHJldHVybiBhbmltYXRvci5hbmltYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlIHRoZSBvcGVuaW5nIG9mIGFuIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBcclxuICAgICAqL1xyXG4gICAgb3BlbihpZGVudGlmaWVyOiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIgPSBudWxsKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmZpbmQoaWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgRXJyb3Igb3BlbmluZyBlbGVtZW50OiBlbGVtZW50IHdhcyBub3QgZm91bmQuYCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub3JpZW50YXRpb24gPT09IG51bGwgfHwgZWxlbWVudC5vcmllbnRhdGlvbiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgRXJyb3Igb3BlbmluZyBlbGVtZW50OiBlbGVtZW50IGRvZXMgbm90IGhhdmUgYW4gb3JpZW50YXRpb24uYCk7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50Lm9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5Ib3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KGlkZW50aWZpZXIsICd3aWR0aCcsIGVsZW1lbnQuaW5pdGlhbC53aWR0aCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lm9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5WZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldChpZGVudGlmaWVyLCAnaGVpZ2h0JywgZWxlbWVudC5pbml0aWFsLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUoZHVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW5pbWF0ZSB0aGUgY2xvc2luZyBvZiBhbiBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBcclxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBcclxuICAgICAqL1xyXG4gICAgY2xvc2UoaWRlbnRpZmllcjogc3RyaW5nLCBkdXJhdGlvbjogbnVtYmVyID0gbnVsbCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5maW5kKGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICghZWxlbWVudClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEVycm9yIGNsb3NpbmcgZWxlbWVudDogZWxlbWVudCB3YXMgbm90IGZvdW5kLmApO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm9yaWVudGF0aW9uID09PSBudWxsIHx8IGVsZW1lbnQub3JpZW50YXRpb24gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEVycm9yIGNsb3NpbmcgZWxlbWVudDogZWxlbWVudCBkb2VzIG5vdCBoYXZlIGFuIG9yaWVudGF0aW9uLmApO1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5vcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldChpZGVudGlmaWVyLCAnd2lkdGgnLCBcIjBweFwiKTsgXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lm9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5WZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldChpZGVudGlmaWVyLCAnaGVpZ2h0JywgXCIwcHhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUoZHVyYXRpb24pXHJcbiAgICB9IFxyXG59XHJcblxyXG4vLyBFbGVtZW50c1xyXG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL0VsZW1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL0ZpbGxFbGVtZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50cy9SZWN0RWxlbWVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMvVmlydHVhbEVsZW1lbnQnO1xyXG5cclxuLy8gTGF5b3V0c1xyXG5leHBvcnQgKiBmcm9tICcuL2xheW91dHMvTGF5b3V0JztcclxuZXhwb3J0ICogZnJvbSAnLi9sYXlvdXRzL0hvcml6b250YWxMYXlvdXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xheW91dHMvVmVydGljYWxMYXlvdXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xheW91dHMvTGF5b3V0RmFjdG9yeSc7XHJcblxyXG4vLyBBbmltYXRlXHJcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0ZS9BbmltYXRvcic7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=layout.js.map