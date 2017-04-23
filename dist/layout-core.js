/*! Layout Framework: Core v1.0.0 - Copyright 2017 James Ehly - MIT License https://layoutframework.com/license */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_layout_core"] = factory();
	else
		root["_layout_core"] = factory();
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
    Object.defineProperty(Layout.prototype, "depth", {
        get: function () {
            var depth = 0;
            var element = this.element.element;
            while (element.parentElement) {
                element = element.parentElement;
                depth++;
            }
            return depth;
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
    Api.prototype.init = function (disableStart) {
        if (disableStart === void 0) { disableStart = false; }
        var layouts = document.querySelectorAll("[data-layout]");
        for (var i = 0; i < layouts.length; i++) {
            var element = layouts[i];
            var type = element.getAttribute('data-layout');
            var id = element.id;
            if (type && id)
                this.add(element.id, type);
        }
        this.order();
        if (!disableStart)
            this.start();
    };
    Api.prototype.order = function () {
        this._layouts.sort(function (layoutA, layoutB) {
            if (layoutA.depth < layoutB.depth) {
                return -1;
            }
            if (layoutA.depth === layoutB.depth) {
                return 0;
            }
            if (layoutA.depth > layoutB.depth) {
                return 1;
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4ZjhmMTRiNDgxOWY1YmQ5ODYxZiIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvRWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvUmVjdEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0aWVzL0lPcmllbnRlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9MYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGUvQW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvTGF5b3V0RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvRmlsbEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL1ZpcnR1YWxFbGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0hvcml6b250YWxMYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvVmVydGljYWxMYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vfi9saWUtdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtB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O0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxJQUFJO0FBQ2YsV0FBVyxJQUFJO0FBQ2YsV0FBVyxJQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVyxJQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RztBQXNRaEIsaUNBQW1DO0FBQ25DLGlDQUF1QztBQUN2QyxpQ0FBdUM7QUFDdkMsaUNBQTBDO0FBRzFDLGlDQUFpQztBQUNqQyxpQ0FBMkM7QUFDM0MsaUNBQXlDO0FBQ3pDLGlDQUF3QztBQUd4QyxpQ0FBbUMiLCJmaWxlIjoiZGlzdC9sYXlvdXQtY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIl9sYXlvdXRfY29yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJfbGF5b3V0X2NvcmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhmOGYxNGI0ODE5ZjViZDk4NjFmIiwiaW1wb3J0IHsgSURyYXdhYmxlIH0gZnJvbSBcIi4uL2VudGl0aWVzL0lEcmF3YWJsZVwiO1xyXG5pbXBvcnQgeyBJRWxlbWVudCB9IGZyb20gXCIuLi9lbnRpdGllcy9JRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBJT3JpZW50ZWQsIE9yaWVudGF0aW9uIH0gZnJvbSBcIi4uL2VudGl0aWVzL0lPcmllbnRlZFwiO1xyXG5pbXBvcnQgeyBWaXJ0dWFsRWxlbWVudCB9IGZyb20gXCIuL1ZpcnR1YWxFbGVtZW50XCI7XHJcblxyXG4vKipcclxuICogRWxlbWVudFxyXG4gKiBBYnN0cmFjdCBjbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBET00gSFRNTCBFbGVtZW50LiAgQWxsIGVsZW1lbnRzIGhhdmUgYSBcclxuICogZHJhdyBtZXRob2QgdGhhdCB0aGV5IG5lZWQgdG8gaW1wbGVtZW50LCB3aGljaCB0ZWxscyB0aGUgYWN0dWFsIGRvbSBlbGVtZW50XHJcbiAqIGhvdyBpdCBzaG91bGQgYmUgZHJhd24gb24gdGhlIHNjcmVlbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFbGVtZW50IGltcGxlbWVudHMgSUVsZW1lbnQsIElEcmF3YWJsZSwgSU9yaWVudGVkIHtcclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfdmlydHVhbDogVmlydHVhbEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9mYWN0dWFsOiBWaXJ0dWFsRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2luaXRpYWw6IFZpcnR1YWxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfbW92YWJsZTogVmlydHVhbEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9vcmllbnRhdGlvbjogT3JpZW50YXRpb247XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldChpZCk7XHJcbiAgICAgICAgdGhpcy5fdmlydHVhbCA9IG5ldyBWaXJ0dWFsRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWwgPSBuZXcgVmlydHVhbEVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLl9mYWN0dWFsID0gbmV3IFZpcnR1YWxFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5fbW92YWJsZSA9IG5ldyBWaXJ0dWFsRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KClcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmlydHVhbCgpOiBWaXJ0dWFsRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGluaXRpYWwoKTogVmlydHVhbEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmYWN0dWFsKCk6IFZpcnR1YWxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmFjdHVhbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW92YWJsZSgpOiBWaXJ0dWFsRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNoaWxkcmVuKCk6IEFycmF5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gbmV3IEFycmF5PEhUTUxFbGVtZW50PigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwO2kgPCB0aGlzLmVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5fZWxlbWVudC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuaWQgPSB0aGlzLl9lbGVtZW50LmlkICsgJy1jaGlsZC0nICsgaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoaWxkLmlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3JpZW50YXRpb24oKSB7XHJcbiAgICAgICByZXR1cm4gIHRoaXMuX29yaWVudGF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG9yaWVudGF0aW9uKG9yaWVudGF0aW9uOiBPcmllbnRhdGlvbikge1xyXG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uID0gb3JpZW50YXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlaWdodChzaXplOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmhlaWdodCA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5fZmFjdHVhbC5oZWlnaHQgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3aWR0aCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2lkdGgoc2l6ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS53aWR0aCA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5fZmFjdHVhbC53aWR0aCA9IHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG92ZXJmbG93KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZsb2F0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuc3R5bGUuY3NzRmxvYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBhdHRyaWJ1dGUgdmFsdWUgb2YgYSBnaXZlbiBwYXJhbWV0ZXIgbmFtZVxyXG4gICAgICogQHBhcmFtIG5hbWUgXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgYXR0cihuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gZHJhdyBpcyBjYWxsZWQsIHByb3BlcnRpZXMgZnJvbSB0aGUgdmlydHVhbCBlbGVtZW50IGFyZSByZWFsaXplZFxyXG4gICAgICogb24gdGhlIGFjdHVhbCBkb20gZWxlbWVudC5cclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRyYXdPdmVyZmxvdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd0Zsb2F0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZSB0aGUgZGF0YSB2YWx1ZXMgdG8gdGhlIGludGlhbCBhbmQgdmlydHVhbCBvYmplY3RzLlxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBzZXR1cCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBBbGxvdyBkYXRhLXNpemUgdG8gYmUgYSBkZWZhdWx0IGZvciBib3RoIGhlaWdodCBhbmQgd2lkdGhcclxuICAgICAgICBsZXQgc2l6ZSA9ICB0aGlzLmF0dHIoJ2RhdGEtc2l6ZScpO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmF0dHIoJ2RhdGEtaGVpZ2h0JykgfHwgc2l6ZTtcclxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmF0dHIoJ2RhdGEtd2lkdGgnKSB8fCBzaXplO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2luaXRpYWwuaGVpZ2h0ID0gdGhpcy5fdmlydHVhbC5oZWlnaHQgPSBoZWlnaHQgfHwgJzEwMCUnO1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWwud2lkdGggPSB0aGlzLl92aXJ0dWFsLndpZHRoID0gd2lkdGggfHwgJzEwMCUnO1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWwub3ZlcmZsb3cgPSB0aGlzLl92aXJ0dWFsLm92ZXJmbG93ID0gdGhpcy5hdHRyKCdkYXRhLW92ZXJmbG93JykgfHwgJ2hpZGRlbic7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3T3ZlcmZsb3coKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZpcnR1YWwub3ZlcmZsb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fdmlydHVhbC5vdmVyZmxvdyAmJiB0aGlzLl92aXJ0dWFsLm92ZXJmbG93Lm1hdGNoKC92aXNpYmxlfGhpZGRlbnxzY3JvbGx8YXV0b3xpbmhlcml0fGluaXRpYWx8dW5zZXQvKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gdGhpcy5fdmlydHVhbC5vdmVyZmxvdztcclxuICAgICAgICAgICAgdGhpcy5fZmFjdHVhbC5vdmVyZmxvdyA9IHRoaXMuX3ZpcnR1YWwub3ZlcmZsb3c7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50XFwncyBvdmVyZmxvdyBzdHlsZSBkb2VzIG5vdCBtYXRjaCBhIGNzcyBvdmVyZmxvdyB0eXBlLicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd0Zsb2F0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy52aXJ0dWFsLmZsb2F0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwuZmxvYXQgJiYgdGhpcy5fdmlydHVhbC5mbG9hdC5tYXRjaCgvbGVmdHxyaWdodHxub25lfGluaGVyaXR8aW5pdGlhbC8pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuY3NzRmxvYXQgPSB0aGlzLl92aXJ0dWFsLmZsb2F0O1xyXG4gICAgICAgICAgICB0aGlzLl9mYWN0dWFsLmZsb2F0ID0gdGhpcy5fdmlydHVhbC5mbG9hdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnRcXCdzIGZsb2F0IHN0eWxlIGRvZXMgbm90IG1hdGNoIGEgY3NzIGZsb2F0IHR5cGUuJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWxlbWVudHMvRWxlbWVudC50cyIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuL0VsZW1lbnQnO1xyXG5pbXBvcnQgeyBJT3JpZW50ZWQsIE9yaWVudGF0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvSU9yaWVudGVkJztcclxuXHJcbi8qKlxyXG4gKiBSZWN0RWxlbWVudFxyXG4gKiBBbiBFbGVtZW50IHRoYXQgd2lsbCBkcmF3IGl0cyBoZWlnaHQgYW5kIHdpZHRoIHRvIG1hdGNoIHRoZSB2aXJ0dWFsIGVsZW1lbnQnc1xyXG4gKiBoZWlnaHQgYW5kIHdpZHRoLiAgQSBSZWN0RWxlbWVudCBjYW4gb3B0aW9uYWxseSBiZSBvcmllbnRlZDsgZGVmYXVsdCBpcyBudWxsLlxyXG4gKiBBbiBvcmllbnRlZCBlbGVtZW50IGNhbiBiZSBvcGVuZWQgYW5kIGNsb3NlZCBpbiB0aGF0IGRpcmVjdGlvbiB1c2luZyB0aGUgQVBJLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmRyYXdXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuZHJhd0hlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd1dpZHRoKCk6dm9pZCB7XHJcbiAgICAgICAgaWYoIXRoaXMudmlydHVhbC53aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWwud2lkdGgubWF0Y2goL14oXFxkKlxcLik/W1xcZF0rcHh8JSQvKSkge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy52aXJ0dWFsLndpZHRoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aXJ0dWFsLndpZHRoLm1hdGNoKC9eW1xcZF0rJC8pKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnZpcnR1YWwud2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IHdpZHRoIGlzIG5vdCBhIGNzcyBwaXhlbCBvciBwZXJjZW50YWdlIHdpZHRoIG9yIGEgbnVtYmVyLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdIZWlnaHQoKTp2b2lkIHtcclxuICAgICAgICBpZighdGhpcy52aXJ0dWFsLmhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWwuaGVpZ2h0Lm1hdGNoKC9eKFxcZCpcXC4pP1tcXGRdK3B4fCUkLykpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnZpcnR1YWwuaGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aXJ0dWFsLmhlaWdodC5tYXRjaCgvXltcXGRdKyQvKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMudmlydHVhbC5oZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IGhlaWdodCBpcyBub3QgYSBjc3MgcGl4ZWwgb3IgcGVyY2VudGFnZSB3aWR0aCBvciBhIG51bWJlci4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWxlbWVudHMvUmVjdEVsZW1lbnQudHMiLCJleHBvcnQgaW50ZXJmYWNlIElPcmllbnRlZCBcclxue1xyXG4gICAgb3JpZW50YXRpb246IE9yaWVudGF0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmllbnRhdGlvbiB7XHJcbiAgICBIb3Jpem9udGFsLFxyXG4gICAgVmVydGljYWxcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRpdGllcy9JT3JpZW50ZWQudHMiLCJpbXBvcnQgeyBJRHJhd2FibGUgfSBmcm9tICcuLi9lbnRpdGllcy9JRHJhd2FibGUnO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvRWxlbWVudCc7XHJcblxyXG4vKipcclxuICogTGF5b3V0XHJcbiAqIEFuIEFic3RyYWN0IGNsYXNzIHRoYXQgcmVwcmVzZW50cyBhIExheW91dC4gIEEgbGF5b3V0IGlzIGEgY29tcG9zaXRpb24gb2ZcclxuICogRWxlbWVudHMuICBBIGxheW91dCBoYXMgYSBkcmF3IG1ldGhvZCB3aGVyZSBpdCBpdCByZXNwb25zaWJsZSBmb3IgZHJhd2luZ1xyXG4gKiBpdHNlbGYgYW5kIGRyYXdpbmcgaXQncyBjaGlsZHJlbiBvciB0cmlnZ2VyaW5nIHRoZSBjaGlsZHJlbiB0byBkcmF3LlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExheW91dCBpbXBsZW1lbnRzIElEcmF3YWJsZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2VsZW1lbnRzOiB7IFtpZDogc3RyaW5nXTogRWxlbWVudCB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLl9lbGVtZW50cyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEVsZW1lbnQoZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRzW2VsZW1lbnQuaWRdID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50KCk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZXB0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBkZXB0aCA9IDA7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuZWxlbWVudDtcclxuICAgICAgICB3aGlsZSAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGRlcHRoKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBkcmF3KCk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBzZXR1cCgpOiB2b2lkO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dHMvTGF5b3V0LnRzIiwiaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gXCJsaWUtdHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRvciB7XHJcblxyXG4gICAgcHVibGljIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc3RlcDogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9pbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcmF0ZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihkdXJhdGlvbjogbnVtYmVyLCBzdGVwOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb24gfHwgMjAwO1xyXG4gICAgICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xyXG4gICAgICAgIHRoaXMuX3JhdGUgPSAxNjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGUgY2FsbGluZyBhIHN0ZXAgZnVuY3Rpb24gb3ZlciBkdXJhdGlvbi4gU3RlcCBpcyBjYWxsZWQgd2l0aCBkZWx0YVxyXG4gICAgICogdGltZSBzbyB0aGF0IGFuaW1hdGlvbnMgY29tcGxldGUgd2l0aGluIHRoZSBkdXJhdGlvbi5cclxuICAgICAqIEBwYXJhbSBzdGFydCBkYXRlXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGUoc3RhcnQ6IG51bWJlciA9IERhdGUubm93KCkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlbHRhVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZVBhc3NlZCA9IGRlbHRhVGltZSAtIHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gdGltZVBhc3NlZCAvIHRoaXMuX2R1cmF0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDEpIHByb2dyZXNzID0gMVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IHByb2dyZXNzO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0ZXAoZGVsdGEpOyBcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aGlzLl9yYXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYW5pbWF0ZS9BbmltYXRvci50cyIsImltcG9ydCB7IEhvcml6b250YWxMYXlvdXQgfSBmcm9tIFwiLi9Ib3Jpem9udGFsTGF5b3V0XCI7XHJcbmltcG9ydCB7IFZlcnRpY2FsTGF5b3V0IH0gZnJvbSBcIi4vVmVydGljYWxMYXlvdXRcIjtcclxuaW1wb3J0IHsgRmlsbEVsZW1lbnQgfSBmcm9tIFwiLi4vZWxlbWVudHMvRmlsbEVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRGYWN0b3J5IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIFZlcnRpY2FsIExheW91dCBmcm9tIHRoZSBwcm92aWRlZCBJZFxyXG4gICAgICogQHBhcmFtIGlkIG9mIGxheW91dCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVZlcnRpY2FsTGF5b3V0KGlkOiBzdHJpbmcpOiBWZXJ0aWNhbExheW91dCB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBuZXcgRmlsbEVsZW1lbnQoaWQpO1xyXG4gICAgICAgIGxldCBsYXlvdXQgPSBuZXcgVmVydGljYWxMYXlvdXQoZWxlbWVudCk7XHJcbiAgICAgICAgbGF5b3V0LnNldHVwKCk7XHJcbiAgICAgICAgcmV0dXJuIGxheW91dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIEhvcml6b250YWwgTGF5b3V0IGZyb20gdGhlIHByb3ZpZGVkIElkXHJcbiAgICAgKiBAcGFyYW0gaWQgb2YgbGF5b3V0IGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlSG9yaXpvbnRhbExheW91dChpZDogc3RyaW5nKTogSG9yaXpvbnRhbExheW91dCB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBuZXcgRmlsbEVsZW1lbnQoaWQpO1xyXG4gICAgICAgIGxldCBsYXlvdXQgPSBuZXcgSG9yaXpvbnRhbExheW91dChlbGVtZW50KTtcclxuICAgICAgICBsYXlvdXQuc2V0dXAoKTtcclxuICAgICAgICByZXR1cm4gbGF5b3V0O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dHMvTGF5b3V0RmFjdG9yeS50cyIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuL0VsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGxFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWxlbWVudHMvRmlsbEVsZW1lbnQudHMiLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi9FbGVtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBWaXJ0dWFsRWxlbWVudCB7XHJcbiAgICBcclxuICAgIHB1YmxpYyBoZWlnaHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyB3aWR0aDogc3RyaW5nO1xyXG4gICAgcHVibGljIG92ZXJmbG93OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmxvYXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7IFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VsZW1lbnRzL1ZpcnR1YWxFbGVtZW50LnRzIiwiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9MYXlvdXQnO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvRWxlbWVudCc7XHJcbmltcG9ydCB7IFJlY3RFbGVtZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvUmVjdEVsZW1lbnQnO1xyXG5pbXBvcnQgeyBPcmllbnRhdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL0lPcmllbnRlZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9yaXpvbnRhbExheW91dCBleHRlbmRzIExheW91dCB7XHJcblxyXG4gICAgcHJpdmF0ZSBmaXhlZENoaWxkcmVuOiBBcnJheTxSZWN0RWxlbWVudD47XHJcbiAgICBwcml2YXRlIHBlcmN0Q2hpbGRyZW46IEFycmF5PFJlY3RFbGVtZW50PjtcclxuICAgIHByaXZhdGUgZmx1aWRDaGlsZHJlbjogQXJyYXk8UmVjdEVsZW1lbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5maXhlZENoaWxkcmVuID0gbmV3IEFycmF5PFJlY3RFbGVtZW50PigpO1xyXG4gICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbiA9IG5ldyBBcnJheTxSZWN0RWxlbWVudD4oKTtcclxuICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8UmVjdEVsZW1lbnQ+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpOiB2b2lkIHtcclxuICAgICAgICAvLyBEcmF3IHRoaXMgbGF5b3V0IGVsZW1lbnQuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYXcoKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsV2lkdGggPSBwYXJzZUZsb2F0KHRoaXMuZWxlbWVudC53aWR0aCk7XHJcbiAgICAgICAgdmFyIGZsdWlkV2lkdGggPSB0b3RhbFdpZHRoO1xyXG4gICAgICAgIHZhciBwZXJjdFdpZHRoID0gMDtcclxuICAgICAgICB2YXIgdG90YWxIZWlnaHQgPSB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBEcmF3IHRoZSBmaXhlZCBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZml4ZWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmbHVpZFdpZHRoIC09IHBhcnNlRmxvYXQoZWwudmlydHVhbC53aWR0aCk7XHJcbiAgICAgICAgICAgIGVsLnZpcnR1YWwuaGVpZ2h0ID0gdG90YWxIZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgcGVyY2VudGFnZSBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMucGVyY3RDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSAocGFyc2VGbG9hdChlbC5pbml0aWFsLndpZHRoKSAvIDEwMCAqIGZsdWlkV2lkdGgpO1xyXG4gICAgICAgICAgICBlbC52aXJ0dWFsLndpZHRoID0gIHdpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgcGVyY3RXaWR0aCArPSB3aWR0aDtcclxuICAgICAgICAgICAgZWwudmlydHVhbC5oZWlnaHQgPSB0b3RhbEhlaWdodDtcclxuICAgICAgICAgICAgZWwuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmbHVpZFdpZHRoIC09IHBlcmN0V2lkdGg7IFxyXG4gICAgICAgIC8vIERyYXcgdGhlIGZsdWlkIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5mbHVpZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGZsdWlkV2lkdGggLyB0aGlzLmZsdWlkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICBlbC52aXJ0dWFsLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICBlbC52aXJ0dWFsLmhlaWdodCA9IHRvdGFsSGVpZ2h0O1xyXG4gICAgICAgICAgICBlbC5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEZvciBlYWNoIGNoaWxkIGVsZW1lbnQgaW4gZWxlbWVudHMsIHNldCB1cCBhIG5ldyBSZWN0RWxlbWVudCBmaWd1cmUgXHJcbiAgICAgICAgLy8gb3V0IGlmIGl0IGhhcyBhIHdpZHRoIHNldCBhcyBhIHBpeGVsIHZhbHVlIChmaXhlZCBjaGlsZCksIGEgMTAwJVxyXG4gICAgICAgIC8vIHZhbHVlIChmbHVpZCBjaGlsZCksIG9yIGEgdmFsdWUgc2V0IHRvIGEgc3BlY2lmaWMgcGVyY2VudGFnZSBcclxuICAgICAgICAvLyAocGVyY2VudGFnZSBjaGlsZClcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmVsZW1lbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkRWxlbWVudCA9IG5ldyBSZWN0RWxlbWVudChjaGlsZC5pZCk7XHJcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudC5vcmllbnRhdGlvbiA9IE9yaWVudGF0aW9uLkhvcml6b250YWw7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZEVsZW1lbnQuaW5pdGlhbC53aWR0aCA9PT0gJzEwMCUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4ucHVzaChjaGlsZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkRWxlbWVudC5pbml0aWFsLndpZHRoLm1hdGNoKC9eW1xcZF0rJSQvKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJjdENoaWxkcmVuLnB1c2goY2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml4ZWRDaGlsZHJlbi5wdXNoKGNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGRFbGVtZW50LnZpcnR1YWwuZmxvYXQgPSBcImxlZnRcIjtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50KGNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dHMvSG9yaXpvbnRhbExheW91dC50cyIsImltcG9ydCB7IExheW91dCB9IGZyb20gJy4vTGF5b3V0JztcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnRzL0VsZW1lbnQnO1xyXG5pbXBvcnQgeyBSZWN0RWxlbWVudCB9IGZyb20gJy4uL2VsZW1lbnRzL1JlY3RFbGVtZW50JztcclxuaW1wb3J0IHsgT3JpZW50YXRpb24gfSBmcm9tICcuLi9lbnRpdGllcy9JT3JpZW50ZWQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsTGF5b3V0IGV4dGVuZHMgTGF5b3V0IHtcclxuXHJcbiAgICBwcml2YXRlIGZpeGVkQ2hpbGRyZW46IEFycmF5PFJlY3RFbGVtZW50PjtcclxuICAgIHByaXZhdGUgcGVyY3RDaGlsZHJlbjogQXJyYXk8UmVjdEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSBmbHVpZENoaWxkcmVuOiBBcnJheTxSZWN0RWxlbWVudD47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihlbGVtZW50KTtcclxuICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8UmVjdEVsZW1lbnQ+KCk7XHJcbiAgICAgICAgdGhpcy5wZXJjdENoaWxkcmVuID0gbmV3IEFycmF5PFJlY3RFbGVtZW50PigpO1xyXG4gICAgICAgIHRoaXMuZmx1aWRDaGlsZHJlbiA9IG5ldyBBcnJheTxSZWN0RWxlbWVudD4oKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIERyYXcgdGhpcyBsYXlvdXQgZWxlbWVudC5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhdygpO1xyXG5cclxuICAgICAgICB2YXIgdG90YWxIZWlnaHQgPSBwYXJzZUZsb2F0KHRoaXMuZWxlbWVudC5oZWlnaHQpO1xyXG4gICAgICAgIHZhciBmbHVpZEhlaWdodCA9IHRvdGFsSGVpZ2h0O1xyXG4gICAgICAgIHZhciBwZXJjdEhlaWdodCA9IDA7XHJcbiAgICAgICAgdmFyIHRvdGFsV2lkdGggPSB0aGlzLmVsZW1lbnQud2lkdGg7XHJcblxyXG4gICAgICAgIC8vIERyYXcgdGhlIGZpeGVkIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5maXhlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZsdWlkSGVpZ2h0IC09IHBhcnNlRmxvYXQoZWwudmlydHVhbC5oZWlnaHQpO1xyXG4gICAgICAgICAgICBlbC52aXJ0dWFsLndpZHRoID0gdG90YWxXaWR0aDtcclxuICAgICAgICAgICAgZWwuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEcmF3IHRoZSBwZXJjZW50YWdlIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5wZXJjdENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSAocGFyc2VGbG9hdChlbC5pbml0aWFsLmhlaWdodCkgLyAxMDAgKiBmbHVpZEhlaWdodCk7XHJcbiAgICAgICAgICAgIGVsLnZpcnR1YWwuaGVpZ2h0ID0gIGhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIHBlcmN0SGVpZ2h0ICs9IGhlaWdodDtcclxuICAgICAgICAgICAgZWwudmlydHVhbC53aWR0aCA9IHRvdGFsV2lkdGg7XHJcbiAgICAgICAgICAgIGVsLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmx1aWRIZWlnaHQgLT0gcGVyY3RIZWlnaHQ7IFxyXG4gICAgICAgIC8vIERyYXcgdGhlIGZsdWlkIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5mbHVpZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBmbHVpZEhlaWdodCAvIHRoaXMuZmx1aWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIGVsLnZpcnR1YWwuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgZWwudmlydHVhbC53aWR0aCA9IHRvdGFsV2lkdGg7XHJcbiAgICAgICAgICAgIGVsLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXAoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gRm9yIGVhY2ggY2hpbGQgZWxlbWVudCBpbiBlbGVtZW50cywgc2V0IHVwIGEgbmV3IFJlY3RFbGVtZW50IGZpZ3VyZSBcclxuICAgICAgICAvLyBvdXQgaWYgaXQgaGFzIGEgaGVpZ2h0IHNldCBhcyBhIHBpeGVsIHZhbHVlIChmaXhlZCBjaGlsZCksIGEgMTAwJVxyXG4gICAgICAgIC8vIHZhbHVlIChmbHVpZCBjaGlsZCksIG9yIGEgdmFsdWUgc2V0IHRvIGEgc3BlY2lmaWMgcGVyY2VudGFnZSBcclxuICAgICAgICAvLyAocGVyY2VudGFnZSBjaGlsZClcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmVsZW1lbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkRWxlbWVudCA9IG5ldyBSZWN0RWxlbWVudChjaGlsZC5pZCk7XHJcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudC5vcmllbnRhdGlvbiA9IE9yaWVudGF0aW9uLlZlcnRpY2FsO1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRFbGVtZW50LmluaXRpYWwuaGVpZ2h0ID09PSAnMTAwJScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx1aWRDaGlsZHJlbi5wdXNoKGNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRFbGVtZW50LmluaXRpYWwuaGVpZ2h0Lm1hdGNoKC9eW1xcZF0rJSQvKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJjdENoaWxkcmVuLnB1c2goY2hpbGRFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml4ZWRDaGlsZHJlbi5wdXNoKGNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGRFbGVtZW50LnZpcnR1YWwuZmxvYXQgPSBcImxlZnRcIjtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50KGNoaWxkRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dHMvVmVydGljYWxMYXlvdXQudHMiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgX0lOVEVSTkFMID0gZnVuY3Rpb24gKCkgeyB9O1xyXG52YXIgX1JFSkVDVEVEID0gWydSJ107XHJcbnZhciBfRlVMRklMTEVEID0gWydGJ107XHJcbnZhciBfUEVORElORyA9IFsnUCddO1xyXG52YXIgUHJvbWlzZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBfUEVORElORztcclxuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX291dGNvbWUgPSB2b2lkIDA7XHJcbiAgICAgICAgaWYgKHJlc29sdmVyICE9PSBfSU5URVJOQUwpIHtcclxuICAgICAgICAgICAgX3NhZmVseVJlc29sdmVUaGVuYWJsZSh0aGlzLCByZXNvbHZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKCkgeyB9LCBvblJlamVjdGVkKTtcclxuICAgIH07XHJcbiAgICBQcm9taXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvbkZ1bGZpbGxlZCAhPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLl9zdGF0ZSA9PT0gX0ZVTEZJTExFRCB8fFxyXG4gICAgICAgICAgICB0eXBlb2Ygb25SZWplY3RlZCAhPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLl9zdGF0ZSA9PT0gX1JFSkVDVEVEKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKF9JTlRFUk5BTCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlICE9PSBfUEVORElORykge1xyXG4gICAgICAgICAgICB2YXIgcmVzb2x2ZXIgPSB0aGlzLl9zdGF0ZSA9PT0gX0ZVTEZJTExFRCA/IG9uRnVsZmlsbGVkIDogb25SZWplY3RlZDtcclxuICAgICAgICAgICAgX3Vud3JhcChwcm9taXNlLCByZXNvbHZlciwgdGhpcy5fb3V0Y29tZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKG5ldyBfUXVldWVJdGVtKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyT2YgUHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBQcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiB0aGlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9oYW5kbGVycy5fcmVzb2x2ZShuZXcgUHJvbWlzZShfSU5URVJOQUwpLCB2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHthbnl9IHJlYXNvblxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyT2YgUHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgICByZXR1cm4gX2hhbmRsZXJzLl9yZWplY3QobmV3IFByb21pc2UoX0lOVEVSTkFMKSwgcmVhc29uKTtcclxuICAgIH07XHJcbiAgICBQcm9taXNlLmFsbCA9IGZ1bmN0aW9uIChpdGVyYWJsZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgbGVuID0gaXRlcmFibGUubGVuZ3RoO1xyXG4gICAgICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbik7XHJcbiAgICAgICAgdmFyIHJlc29sdmVkID0gMDtcclxuICAgICAgICB2YXIgaSA9IC0xO1xyXG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoX0lOVEVSTkFMKTtcclxuICAgICAgICBpZiAoIWxlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xyXG4gICAgICAgICAgICBhbGxSZXNvbHZlcihpdGVyYWJsZVtpXSwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIGFsbFJlc29sdmVyKHZhbHVlLCBpKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVzb2x2ZSh2YWx1ZSkudGhlbihyZXNvbHZlRnJvbUFsbCwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgX2hhbmRsZXJzLl9yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZUZyb21BbGwob3V0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlc1tpXSA9IG91dFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCsrcmVzb2x2ZWQgPT09IGxlbiAmJiAhY2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfaGFuZGxlcnMuX3Jlc29sdmUocHJvbWlzZSwgdmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAoaXRlcmFibGUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcclxuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGkgPSAtMTtcclxuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKF9JTlRFUk5BTCk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlcmFibGUpICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZXIodmFsdWUpIHtcclxuICAgICAgICAgICAgc2VsZi5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIF9oYW5kbGVycy5fcmVzb2x2ZShwcm9taXNlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIF9oYW5kbGVycy5fcmVqZWN0KHByb21pc2UsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUoW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmVyKGl0ZXJhYmxlW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFByb21pc2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUHJvbWlzZSA9IFByb21pc2U7XHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgX1F1ZXVlSXRlbVxyXG4gKi9cclxudmFyIF9RdWV1ZUl0ZW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gX1F1ZXVlSXRlbShwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBwcm9taXNlO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5fb25GdWxmaWxsZWQgPSBvbkZ1bGZpbGxlZDtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbEZ1bGZpbGxlZCA9IHRoaXMuX290aGVyQ2FsbEZ1bGZpbGxlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uUmVqZWN0ZWQgPSBvblJlamVjdGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsUmVqZWN0ZWQgPSB0aGlzLl9vdGhlckNhbGxSZWplY3RlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfUXVldWVJdGVtLnByb3RvdHlwZS5fY2FsbEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIF9oYW5kbGVycy5fcmVzb2x2ZSh0aGlzLl9wcm9taXNlLCB2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgX1F1ZXVlSXRlbS5wcm90b3R5cGUuX290aGVyQ2FsbEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIF91bndyYXAodGhpcy5fcHJvbWlzZSwgdGhpcy5fb25GdWxmaWxsZWQsIHZhbHVlKTtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBfUXVldWVJdGVtLnByb3RvdHlwZS5fY2FsbFJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgX2hhbmRsZXJzLl9yZWplY3QodGhpcy5fcHJvbWlzZSwgdmFsdWUpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIF9RdWV1ZUl0ZW0ucHJvdG90eXBlLl9vdGhlckNhbGxSZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIF91bndyYXAodGhpcy5fcHJvbWlzZSwgdGhpcy5fb25SZWplY3RlZCwgdmFsdWUpO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIHJldHVybiBfUXVldWVJdGVtO1xyXG59KCkpO1xyXG5leHBvcnRzLl9RdWV1ZUl0ZW0gPSBfUXVldWVJdGVtO1xyXG4vKipcclxuICpcclxuICogQGludGVybmFsXHJcbiAqIEBwYXJhbSB7YW55fSBwcm9taXNlXHJcbiAqIEBwYXJhbSB7YW55fSBmdW5jXHJcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gKi9cclxuZnVuY3Rpb24gX3Vud3JhcChwcm9taXNlLCBmdW5jLCB2YWx1ZSkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gZnVuYy5hcHBseShudWxsLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfaGFuZGxlcnMuX3JlamVjdChwcm9taXNlLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJldHVyblZhbHVlID09PSBwcm9taXNlKSB7XHJcbiAgICAgICAgICAgIF9oYW5kbGVycy5fcmVqZWN0KHByb21pc2UsIG5ldyBUeXBlRXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfaGFuZGxlcnMuX3Jlc29sdmUocHJvbWlzZSwgcmV0dXJuVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0pO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQGNsYXNzIF9oYW5kbGVyc1xyXG4gKi9cclxudmFyIF9oYW5kbGVycyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBfaGFuZGxlcnMoKSB7XHJcbiAgICB9XHJcbiAgICBfaGFuZGxlcnMuX3Jlc29sdmUgPSBmdW5jdGlvbiAoc2VsZiwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gX3RyeUNhdGNoKF9nZXRUaGVuLCB2YWx1ZSk7XHJcbiAgICAgICAgdmFyIHRoZW5hYmxlID0gcmVzdWx0Ll92YWx1ZTtcclxuICAgICAgICB2YXIgaSA9IC0xO1xyXG4gICAgICAgIHZhciBsZW4gPSBzZWxmLl9xdWV1ZS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5fc3RhdHVzID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfaGFuZGxlcnMuX3JlamVjdChzZWxmLCByZXN1bHQuX3ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoZW5hYmxlKSB7XHJcbiAgICAgICAgICAgIF9zYWZlbHlSZXNvbHZlVGhlbmFibGUoc2VsZiwgdGhlbmFibGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5fc3RhdGUgPSBfRlVMRklMTEVEO1xyXG4gICAgICAgICAgICBzZWxmLl9vdXRjb21lID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuX3F1ZXVlW2ldLl9jYWxsRnVsZmlsbGVkKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH07XHJcbiAgICA7XHJcbiAgICBfaGFuZGxlcnMuX3JlamVjdCA9IGZ1bmN0aW9uIChzZWxmLCBlcnJvcikge1xyXG4gICAgICAgIHNlbGYuX3N0YXRlID0gX1JFSkVDVEVEO1xyXG4gICAgICAgIHNlbGYuX291dGNvbWUgPSBlcnJvcjtcclxuICAgICAgICB2YXIgaSA9IC0xO1xyXG4gICAgICAgIHZhciBsZW4gPSBzZWxmLl9xdWV1ZS5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xyXG4gICAgICAgICAgICBzZWxmLl9xdWV1ZVtpXS5fY2FsbFJlamVjdGVkKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgcmV0dXJuIF9oYW5kbGVycztcclxufSgpKTtcclxuLyoqXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAcGFyYW0ge2FueX0gb2JqXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBfZ2V0VGhlbihvYmopIHtcclxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBvbmx5IGFjY2VzcyB0aGUgYWNjZXNzb3Igb25jZSBhcyByZXF1aXJlZCBieSB0aGUgc3BlY1xyXG4gICAgdmFyIHRoZW4gPSBvYmogJiYgb2JqLnRoZW47XHJcbiAgICBpZiAob2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhcHB5VGhlbigpIHtcclxuICAgICAgICAgICAgdGhlbi5hcHBseShvYmosIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICogQHBhcmFtIHtQcm9taXNlPGFueT59IHNlbGZcclxuICogQHBhcmFtIHsob25TdWNjZXNzOiguLi5UKSA9PiB2b2lkLCBvbkZhaWw6KC4uLlQpID0+IHZvaWQpID0+IHZvaWR9IHRoZW5hYmxlXHJcbiAqL1xyXG5mdW5jdGlvbiBfc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHNlbGYsIHRoZW5hYmxlKSB7XHJcbiAgICAvLyBFaXRoZXIgZnVsZmlsbCwgcmVqZWN0IG9yIHJlamVjdCB3aXRoIGVycm9yXHJcbiAgICB2YXIgY2FsbGVkID0gZmFsc2U7XHJcbiAgICBmdW5jdGlvbiBvbkVycm9yKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIF9oYW5kbGVycy5fcmVqZWN0KHNlbGYsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YWx1ZVtfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FsbGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICBfaGFuZGxlcnMuX3Jlc29sdmUoc2VsZiwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJ5VG9VbndyYXAoKSB7XHJcbiAgICAgICAgdGhlbmFibGUob25TdWNjZXNzLCBvbkVycm9yKTtcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSBfdHJ5Q2F0Y2godHJ5VG9VbndyYXApO1xyXG4gICAgaWYgKHJlc3VsdC5fc3RhdHVzID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgb25FcnJvcihyZXN1bHQuX3ZhbHVlKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICpcclxuICogQGludGVybmFsXHJcbiAqIEBwYXJhbSB7YW55fSBmdW5jXHJcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlc11cclxuICogQHJldHVybnNcclxuICovXHJcbmZ1bmN0aW9uIF90cnlDYXRjaChmdW5jLCB2YWx1ZXMpIHtcclxuICAgIHZhciBvdXQgPSB7IF9zdGF0dXM6IG51bGwsIF92YWx1ZTogbnVsbCB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBvdXQuX3ZhbHVlID0gZnVuYyh2YWx1ZXMpO1xyXG4gICAgICAgIG91dC5fc3RhdHVzID0gJ3N1Y2Nlc3MnO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBvdXQuX3N0YXR1cyA9ICdlcnJvcic7XHJcbiAgICAgICAgb3V0Ll92YWx1ZSA9IGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9saWUtdHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IExheW91dEZhY3RvcnkgfSBmcm9tICcuL2xheW91dHMvTGF5b3V0RmFjdG9yeSc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vbGF5b3V0cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50cy9FbGVtZW50JztcclxuaW1wb3J0IHsgUmVjdEVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnRzL1JlY3RFbGVtZW50JztcclxuaW1wb3J0IHsgQW5pbWF0b3IgfSBmcm9tICcuL2FuaW1hdGUvQW5pbWF0b3InO1xyXG5pbXBvcnQgeyBPcmllbnRhdGlvbiB9IGZyb20gJy4vZW50aXRpZXMvSU9yaWVudGVkJztcclxuXHJcbi8qKlxyXG4gKiAjTGF5b3V0IEFQSVxyXG4gKiBUaGUgTGF5b3V0IEFQSSBvcGVyYXRlcyBhcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBsYXlvdXQgZW5naW5lLiBJdCBmb2xsb3dzICBcclxuICogdGhlIGZhY2FkZSBwYXR0ZXJuIGFzIGFsbCBpbnRlcmFjdGlvbnMgdG8gdGhlIGxheW91dCBjYW4gYmUgbWFkZSB0aHJvdWdoIHRoaXMgXHJcbiAqIGFwaSB3aXRob3V0IGhhdmluZyB0byB3b3JyeSBhYm91dCB0aGUgaW1wbGVtZW50YXRpb24gZGV0YWlscyBvZiB0aGUgY2xhc3Nlc1xyXG4gKiBkb2luZyB0aGUgd29yay5cclxuICogXHJcbiAqICMjIFdoYXQgaXMgYSBsYXlvdXQ/XHJcbiAqIFxyXG4gKiBJbiB0ZXJtcyBvZiB0aGlzIHByb2plY3QsIGEgbGF5b3V0IGlzIGFuIGh0bWwgc3RydWN0dXJlIG9mIGEgcGFyZW50IGVsZW1lbnRcclxuICogYW5kIGl0cyBpbW1lZGlhdGUgY2hpbGRyZW4uICBUaGlzIGNhbiBiZSBhbnkgdHlwZSBvZiB0YWcgZWxlbWVudCwgYnV0IGlzIFxyXG4gKiB0eXBpY2FsbHkgZGl2IHRhZ3M6XHJcbiAqIFxyXG4gKiA8ZGl2IGlkPVwibGF5b3V0XCIgZGF0YS1sYXlvdXQ9XCJIb3Jpem9udGFsTGF5b3V0XCI+XHJcbiAqICAgPGRpdiBpZD1cImNoaWxkLTFcIj4uLi48L2Rpdj5cclxuICogICA8ZGl2IGlkPVwiY2hpbGQtMlwiPi4uLjwvZGl2PlxyXG4gKiA8L2Rpdj5cclxuICogXHJcbiAqIFRoZXNlIHR5cGVzIG9mIGNvbnRzdHJ1Y3RzIGFyZSB1c2VkIHRvIGJ1aWxkIGxheW91dHMgdXNpbmcgdGhlIGxheW91dCBhcGkuIFxyXG4gKiBOb3RlIHRoYXQgdGhlIGlkcyB1c2VkIGluIHRoZSBleGFtcGxlIGFib3ZlIGNhbiBiZSBjaGFuZ2VkIHRvIHdoYXQgZXZlciB5b3UgXHJcbiAqIHdpc2guICBXaGlsZSBhbiBpZCBvbiB0aGUgcGFyZW50IGxheW91dCBlbGVtZW50IGlzIHJlcXVpcmVkLCB0aGUgY2hpbGQgaWRzIFxyXG4gKiBhcmUgb3B0aW9uYWw7IHRoZXkgd2lsbCBiZSBnZW5lcmF0ZWQgaWYgbm90IHByZXNlbnQuICBGcm9tIGhlcmUgb24gb3V0IGluIHRoZVxyXG4gKiBkb2N1bWVudGF0aW9uLCBhIHBhcmVudCBlbGVtZW50IGlzIHJlZmVycmVkIHRvIGFzIGEgbGF5b3V0IGVsZW1lbnQgYW5kIGl0cyBcclxuICogY2hpbGQgZWxlbWVudHMgYXJlIHJlZmVycmVkIHRvIGFzIGZyYW1lIGVsZW1lbnRzLlxyXG4gKiBcclxuICogIyMgTGF5b3V0IHJ1bGVzXHJcbiAqIFxyXG4gKiBMYXlvdXRzIGZvbGxvdyB0aGVzZSBydWxlczpcclxuICogXHJcbiAqIDEuIFRoZSBsYXlvdXQgZWxlbWVudCBzdHJldGNoZXMgdG8gdGhlIGhlaWdodCBhbmQgd2lkdGggb2YgaXRzIHBhcmVudC4gIFxyXG4gKiAyLiBGcmFtZSBlbGVtZW50cyBzdHJldGNoIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlaXIgb3JpZW50YXRpb24uXHJcbiAqIDMuIEJ5IGRlZmF1bHQsIGZyYW1lIHNpemUgaXMgZGV0ZXJtaW5lZCBieSB0aGUgbnVtYmVyIG9mIGZyYW1lcyBhY3Jvc3MgaXRzXHJcbiAqICAgIG9yaWVudGF0aW9uLiAgRm9yIGV4YW1wbGUsIGlmIHRoZXJlIGFyZSAzIGZyYW1lcyBpbiBhIHZlcnRpY2FsIGxheW91dCwgXHJcbiAqICAgIHRoZXkgd2lsbCBlYWNoIGJlIDMzLjMzMyUgaGlnaCBhbmQgMTAwJSB3aWRlLlxyXG4gKiA0LiBGcmFtZXMgY2FuIHNwZWNpZnkgYSBmcmFtZSBzaXplIGluIHBpeGVscyBvciBwZXJjZW50LiAgVGhpcyBzaXplIHdpbGwgYmVcclxuICogICAgaG9ub3JlZCBmb3IgdGhlIGxpZmV0aW1lIG9mIHRoZSBmcmFtZS4gIEZyYW1lcyB0aGF0IGRvbid0IHNwZWNpZnkgYSBzaXplXHJcbiAqICAgIHdpbGwgc3RyZXRjaCB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UgYW5kIGJlIHNpemVkIGFjY29yZGluZyB0byBydWxlIDMuXHJcbiAqIDUuIFdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkLCB0aGUgbGF5b3V0IGFuZCBpdHMgZnJhbWVzIGFuZCBhbnkgc3ViIGxheW91dHNcclxuICogICAgYW5kIGZyYW1lcyBhcmUgcmVkcmF3bi5cclxuICogNi4gQHRvZG86IEZyYW1lcyBjYW4gYmUgYWRkZWQgYW5kIHJlbW92ZWQgYXQgYW55IHRpbWUgdXNpbmcgdGhpcyBhcGkuICBcclxuICogICAgSWYgZnJhbWVzIGFyZSBhZGRlZCB2aWEgZXh0ZXJuYWwgbWVhbnMsIHlvdSBjYW4gdXNlIHRoZSBhcGkgdG8gZmluZCB0aGVtLiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBcGkge1xyXG5cclxuICAgIHB1YmxpYyBhbmltYXRpb25TdGFydDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2ZhY3Rvcnk6IExheW91dEZhY3Rvcnk7XHJcbiAgICBwcml2YXRlIF9sYXlvdXRzOiBBcnJheTxMYXlvdXQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGF5b3V0cygpOiBBcnJheTxMYXlvdXQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0aGUgcHJvY2VzcyBvZiB3YXRjaGluZyB0aGUgd2luZG93IGZvciByZXNpemUgZXZlbnRzIGFuZCBmaXJlcyB0aGVcclxuICAgICAqIGluaXRpYWwgZHJhdyBvZiB0aGUgbGF5b3V0LlxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIElFIFNwZWNpZmljXHJcbiAgICAgICAgaWYgKCg8YW55PndpbmRvdykuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgKDxhbnk+d2luZG93KS5hdHRhY2hFdmVudCgnb25yZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL1RoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgSmF2YXNjcmlwdCBldmVudCBiaW5kaW5nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgYW5kIHN0YXJ0cyB0aGUgbGF5b3V0IGNvcmVcclxuICAgICAqIEBwYXJhbSBkaXNhYmxlU3RhcnQgc2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgc3RhcnRcclxuICAgICAqL1xyXG4gICAgaW5pdChkaXNhYmxlU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCBsYXlvdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWxheW91dF1cIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXlvdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gbGF5b3V0c1tpXTtcclxuICAgICAgICAgICAgbGV0IHR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1sYXlvdXQnKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gZWxlbWVudC5pZDtcclxuICAgICAgICAgICAgaWYgKHR5cGUgJiYgaWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChlbGVtZW50LmlkLCB0eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub3JkZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCFkaXNhYmxlU3RhcnQpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9yZGVyIHRoZSBsYXlvdXRzIHNvIHRoYXQgdGhleSBhcmUgZHJhd24gZnJvbSB0aGUgb3V0c2lkZSBpblxyXG4gICAgICovXHJcbiAgICBvcmRlcigpIHtcclxuICAgICAgICB0aGlzLl9sYXlvdXRzLnNvcnQoKGxheW91dEEsIGxheW91dEIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxheW91dEEuZGVwdGggPCBsYXlvdXRCLmRlcHRoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxheW91dEEuZGVwdGggPT09IGxheW91dEIuZGVwdGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsYXlvdXRBLmRlcHRoID4gbGF5b3V0Qi5kZXB0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVzZXQgYWxsIGxheW91dHMgYW5kIHRoZSBsYXlvdXQgZmFjdG9yeVxyXG4gICAgICovXHJcbiAgICByZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9mYWN0b3J5ID0gbmV3IExheW91dEZhY3RvcnkoKTtcclxuICAgICAgICB0aGlzLl9sYXlvdXRzID0gbmV3IEFycmF5PExheW91dD4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGxheW91dCBzcGVjaWZpZWQgYnkgaXRzIGlkLCB0eXBlIGFuZCBvcHRpb25zLiAgSWYgbm8gdHlwZSBpc1xyXG4gICAgICogc3BlY2lmaWVkLCB0aGVuIGl0IGRlZmF1bHRzIHRvIGEgVmVydGljYWxMYXlvdXQuICBUaGVyZSBpcyBubyBkZWZhdWx0IGZvclxyXG4gICAgICogb3B0aW9ucy5cclxuICAgICAqIEBwYXJhbSBpZGVudGlmaWVyIFxyXG4gICAgICogQHBhcmFtIHR5cGUgXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBcclxuICAgICAqL1xyXG4gICAgYWRkKGlkZW50aWZpZXI6IHN0cmluZywgdHlwZTogc3RyaW5nID0gbnVsbCwgb3B0aW9uczogYW55ID0gbnVsbCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdHlwZSlcclxuICAgICAgICAgICAgdHlwZSA9IFwiVmVydGljYWxMYXlvdXRcIjtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9mYWN0b3J5WydjcmVhdGUnICsgdHlwZV0pXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBjcmVhdGUke3R5cGV9KCkgaXMgbm90IGEgbWV0aG9kIG9uIExheW91dEZhY3RvcnkuICBDaGVjayB0aGUgQVBJIGZvciBtZXRob2RzIG9uIExheW91dEZhY3RvcnkuYCk7XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBsYXlvdXQgPSB0aGlzLl9mYWN0b3J5WydjcmVhdGUnICsgdHlwZV0oaWRlbnRpZmllciwgb3B0aW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGxheW91dCA9IHRoaXMuX2ZhY3RvcnlbJ2NyZWF0ZScgKyB0eXBlXShpZGVudGlmaWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQHRvZG8gY3JlYXRlIGEgd2F5IHRvIHN0YWNrIGxheW91dHMgc28gdGhleSBnZXQgZHJhd24gaW4gb3JkZXIgQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzkwMjg1ODIvaG93LXRvLWZpbmQtd2hpY2gtZWxlbWVudC1zdGFuZHMtaGlnaGVyLWluLXRoZS1kb20taGllcmFyY2h5XHJcbiAgICAgICAgdGhpcy5fbGF5b3V0cy5wdXNoKGxheW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBsYXlvdXQgYnkgaWRcclxuICAgICAqIEBwYXJhbSBpZGVudGlmaWVyIG9mIGxheW91dCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGdldChpZGVudGlmaWVyOiBzdHJpbmcpOiBMYXlvdXQge1xyXG4gICAgICAgIGZvciAobGV0IGxheW91dCBvZiB0aGlzLl9sYXlvdXRzKSB7XHJcbiAgICAgICAgICAgIGlmIChsYXlvdXQuZWxlbWVudC5pZCA9PT0gaWRlbnRpZmllcilcclxuICAgICAgICAgICAgICAgIHJldHVybiBsYXlvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGEgdmFsdWUgb24gYSBsYXlvdXQgY2hpbGQuXHJcbiAgICAgKiBTZXRzIHRoZSB2aXJ0dWFsIGVsZW1lbnQncyB2YWx1ZS4gIFRoZSBlbGVtZW50IHdpbGwgYmUgZHJhd24gd2l0aCB0aGUgXHJcbiAgICAgKiB2aXJ0dWFsIGVsZW1lbnQgdmFsdWVzIG9uIHRoZSBuZXh0IGRyYXcgY2FsbC5cclxuICAgICAqIEBwYXJhbSBpZCBpZCBvZiB0aGUgY2hpbGQgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIG9wdGlvbiB2aXJ0dWFsIHByb3BlcnR5IG5hbWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB2aXJ0dWFsIHByb3BlcnR5IHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHNldChpZDogc3RyaW5nLCBvcHRpb246IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBlbCA9IHRoaXMuZmluZChpZCk7XHJcbiAgICAgICAgaWYgKCFlbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7aWR9IGNvdWxkIG5vdCBiZSBmb3VuZCBpbiB0aGUgcmVnaXN0ZXJlZCBsYXlvdXRzLmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKG9wdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICdoZWlnaHQnOlxyXG4gICAgICAgICAgICAgICAgZWwudmlydHVhbC5oZWlnaHQgPSBlbC5tb3ZhYmxlLmhlaWdodCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3dpZHRoJzpcclxuICAgICAgICAgICAgICAgIGVsLnZpcnR1YWwud2lkdGggPSBlbC5tb3ZhYmxlLndpZHRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnb3ZlcmZsb3cnOlxyXG4gICAgICAgICAgICAgICAgZWwudmlydHVhbC5vdmVyZmxvdyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIGEgY2hpbGQgZWxlbWVudCBvZiBhIGxheW91dCBieSBpdHMgaWRcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICovXHJcbiAgICBmaW5kKGlkOiBzdHJpbmcpOiBFbGVtZW50IHtcclxuICAgICAgICBmb3IgKGxldCBsYXlvdXQgb2YgdGhpcy5fbGF5b3V0cykge1xyXG4gICAgICAgICAgICBpZiAobGF5b3V0LmVsZW1lbnRzW2lkXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxheW91dC5lbGVtZW50c1tpZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWRyYXcgYWxsIHJlZ2lzdGVyZWQgbGF5b3V0c1xyXG4gICAgICovXHJcbiAgICBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGxheW91dCBvZiB0aGlzLl9sYXlvdXRzKSB7XHJcbiAgICAgICAgICAgIGxheW91dC5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW5pbWF0ZSB0aGUgZHJhdyBvdmVyIGEgc3BlY2lmaWVkIGR1cmF0aW9uLlxyXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFxyXG4gICAgICovXHJcbiAgICBhbmltYXRlKGR1cmF0aW9uOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBsZXQgY2hhbmdlZEVsZW1lbnRzID0gQXJyYXk8RWxlbWVudD4oKTtcclxuICAgICAgICAvLyBGaW5kIGFsbCBvZiB0aGUgZWxlbWVudHMgdGhhdCBhcmUgY2hhbmdlZFxyXG4gICAgICAgIGZvciAobGV0IGxheW91dCBvZiB0aGlzLl9sYXlvdXRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gbGF5b3V0LmVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBsYXlvdXQuZWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubW92YWJsZS5oZWlnaHQgfHwgZWwubW92YWJsZS53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRFbGVtZW50cy5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGN1cnJlbnQgdmFsdWVzXHJcbiAgICAgICAgbGV0IGVsZW1lbnRTdG9yZTogeyBbaWQ6IHN0cmluZ106IEFycmF5PHN0cmluZz4gfSA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIGNoYW5nZWRFbGVtZW50cykge1xyXG4gICAgICAgICAgICBlbGVtZW50U3RvcmVbZWwuaWRdID0gW2VsLmhlaWdodCwgZWwud2lkdGhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgcHJvcGVydGllcyBvbiB0aGUgY2hhbmdlZCBlbGVtZW50c1xyXG4gICAgICAgIGxldCBhbmltYXRvciA9IG5ldyBBbmltYXRvcihkdXJhdGlvbiwgKGRlbHRhOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZWRFbGVtZW50cy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVsIG9mIGNoYW5nZWRFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLm1vdmFibGUuaGVpZ2h0ICYmIGVsLm1vdmFibGUuaGVpZ2h0ICE9IGVsLmZhY3R1YWwuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvID0gcGFyc2VJbnQoZWwubW92YWJsZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcm9tID0gcGFyc2VJbnQoZWxlbWVudFN0b3JlW2VsLmlkXVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudmlydHVhbC5oZWlnaHQgPSAodG8gLSBmcm9tKSAqIGRlbHRhICsgZnJvbSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwubW92YWJsZS5oZWlnaHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGVsLm1vdmFibGUud2lkdGggJiYgZWwubW92YWJsZS53aWR0aCAhPSBlbC5mYWN0dWFsLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvID0gcGFyc2VJbnQoZWwubW92YWJsZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZyb20gPSBwYXJzZUludChlbGVtZW50U3RvcmVbZWwuaWRdWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBlbC52aXJ0dWFsLndpZHRoID0gKHRvIC0gZnJvbSkgKiBkZWx0YSArIGZyb20gKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLm1vdmFibGUud2lkdGggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzdGFydERhdGUgPSB0aGlzLmFuaW1hdGlvblN0YXJ0IHx8IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdG9yLmFuaW1hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGUgdGhlIG9wZW5pbmcgb2YgYW4gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFxyXG4gICAgICovXHJcbiAgICBvcGVuKGlkZW50aWZpZXI6IHN0cmluZywgZHVyYXRpb246IG51bWJlciA9IG51bGwpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZmluZChpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBFcnJvciBvcGVuaW5nIGVsZW1lbnQ6IGVsZW1lbnQgd2FzIG5vdCBmb3VuZC5gKTtcclxuICAgICAgICBpZiAoZWxlbWVudC5vcmllbnRhdGlvbiA9PT0gbnVsbCB8fCBlbGVtZW50Lm9yaWVudGF0aW9uID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBFcnJvciBvcGVuaW5nIGVsZW1lbnQ6IGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhbiBvcmllbnRhdGlvbi5gKTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQub3JpZW50YXRpb24gPT09IE9yaWVudGF0aW9uLkhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQoaWRlbnRpZmllciwgJ3dpZHRoJywgZWxlbWVudC5pbml0aWFsLndpZHRoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQub3JpZW50YXRpb24gPT09IE9yaWVudGF0aW9uLlZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KGlkZW50aWZpZXIsICdoZWlnaHQnLCBlbGVtZW50LmluaXRpYWwuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0ZShkdXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlIHRoZSBjbG9zaW5nIG9mIGFuIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSBpZGVudGlmaWVyIFxyXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFxyXG4gICAgICovXHJcbiAgICBjbG9zZShpZGVudGlmaWVyOiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIgPSBudWxsKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmZpbmQoaWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgRXJyb3IgY2xvc2luZyBlbGVtZW50OiBlbGVtZW50IHdhcyBub3QgZm91bmQuYCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub3JpZW50YXRpb24gPT09IG51bGwgfHwgZWxlbWVudC5vcmllbnRhdGlvbiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgRXJyb3IgY2xvc2luZyBlbGVtZW50OiBlbGVtZW50IGRvZXMgbm90IGhhdmUgYW4gb3JpZW50YXRpb24uYCk7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50Lm9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5Ib3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KGlkZW50aWZpZXIsICd3aWR0aCcsIFwiMHB4XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5vcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uVmVydGljYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQoaWRlbnRpZmllciwgJ2hlaWdodCcsIFwiMHB4XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRlKGR1cmF0aW9uKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBFbGVtZW50c1xyXG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL0VsZW1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2VsZW1lbnRzL0ZpbGxFbGVtZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9lbGVtZW50cy9SZWN0RWxlbWVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZWxlbWVudHMvVmlydHVhbEVsZW1lbnQnO1xyXG5cclxuLy8gTGF5b3V0c1xyXG5leHBvcnQgKiBmcm9tICcuL2xheW91dHMvTGF5b3V0JztcclxuZXhwb3J0ICogZnJvbSAnLi9sYXlvdXRzL0hvcml6b250YWxMYXlvdXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xheW91dHMvVmVydGljYWxMYXlvdXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xheW91dHMvTGF5b3V0RmFjdG9yeSc7XHJcblxyXG4vLyBBbmltYXRlXHJcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0ZS9BbmltYXRvcic7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=layout-core.js.map