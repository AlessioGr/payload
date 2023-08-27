"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reactanimateheight = /*#__PURE__*/ _interop_require_default(require("react-animate-height"));
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
var _Preferences = require("../../utilities/Preferences");
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var baseClass = "nav-group";
var NavGroup = function(param) {
    var children = param.children, label = param.label;
    var _useState = _sliced_to_array((0, _react.useState)(true), 2), collapsed = _useState[0], setCollapsed = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), animate = _useState1[0], setAnimate = _useState1[1];
    var _usePreferences = (0, _Preferences.usePreferences)(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var preferencesKey = "collapsed-".concat(label, "-groups");
    (0, _react.useEffect)(function() {
        if (label) {
            var setCollapsedFromPreferences = function() {
                var _ref = _async_to_generator(function() {
                    var preferences;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    getPreference(preferencesKey)
                                ];
                            case 1:
                                preferences = _state.sent() || [];
                                setCollapsed(preferences.indexOf(label) !== -1);
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function setCollapsedFromPreferences() {
                    return _ref.apply(this, arguments);
                };
            }();
            setCollapsedFromPreferences();
        }
    }, [
        getPreference,
        label,
        preferencesKey
    ]);
    if (label) {
        var toggleCollapsed = function() {
            var _ref = _async_to_generator(function() {
                var preferences;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            setAnimate(true);
                            return [
                                4,
                                getPreference(preferencesKey)
                            ];
                        case 1:
                            preferences = _state.sent() || [];
                            if (collapsed) {
                                preferences = preferences.filter(function(preference) {
                                    return label !== preference;
                                });
                            } else {
                                preferences.push(label);
                            }
                            setPreference(preferencesKey, preferences);
                            setCollapsed(!collapsed);
                            return [
                                2
                            ];
                    }
                });
            });
            return function toggleCollapsed() {
                return _ref.apply(this, arguments);
            };
        }();
        return /*#__PURE__*/ _react.default.createElement("div", {
            id: "nav-group-".concat(label),
            className: [
                "".concat(baseClass),
                "".concat(label),
                collapsed && "".concat(baseClass, "--collapsed")
            ].filter(Boolean).join(" ")
        }, /*#__PURE__*/ _react.default.createElement("button", {
            type: "button",
            className: [
                "".concat(baseClass, "__toggle"),
                "".concat(baseClass, "__toggle--").concat(collapsed ? "collapsed" : "open")
            ].filter(Boolean).join(" "),
            onClick: toggleCollapsed
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__label")
        }, label), /*#__PURE__*/ _react.default.createElement(_Chevron.default, {
            className: "".concat(baseClass, "__indicator")
        })), /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
            height: collapsed ? 0 : "auto",
            duration: animate ? 200 : 0
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__content")
        }, children)));
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
};
var _default = NavGroup;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL05hdkdyb3VwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmltYXRlSGVpZ2h0IGZyb20gJ3JlYWN0LWFuaW1hdGUtaGVpZ2h0JztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvUHJlZmVyZW5jZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICduYXYtZ3JvdXAnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlLFxuICBsYWJlbDogc3RyaW5nLFxufVxuXG5jb25zdCBOYXZHcm91cDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxhYmVsLFxufSkgPT4ge1xuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFthbmltYXRlLCBzZXRBbmltYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBnZXRQcmVmZXJlbmNlLCBzZXRQcmVmZXJlbmNlIH0gPSB1c2VQcmVmZXJlbmNlcygpO1xuXG4gIGNvbnN0IHByZWZlcmVuY2VzS2V5ID0gYGNvbGxhcHNlZC0ke2xhYmVsfS1ncm91cHNgO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICBjb25zdCBzZXRDb2xsYXBzZWRGcm9tUHJlZmVyZW5jZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSkgfHwgW107XG4gICAgICAgIHNldENvbGxhcHNlZChwcmVmZXJlbmNlcy5pbmRleE9mKGxhYmVsKSAhPT0gLTEpO1xuICAgICAgfTtcbiAgICAgIHNldENvbGxhcHNlZEZyb21QcmVmZXJlbmNlcygpO1xuICAgIH1cbiAgfSwgW2dldFByZWZlcmVuY2UsIGxhYmVsLCBwcmVmZXJlbmNlc0tleV0pO1xuXG4gIGlmIChsYWJlbCkge1xuICAgIGNvbnN0IHRvZ2dsZUNvbGxhcHNlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldEFuaW1hdGUodHJ1ZSk7XG4gICAgICBsZXQgcHJlZmVyZW5jZXM6IHN0cmluZ1tdID0gYXdhaXQgZ2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSkgfHwgW107XG4gICAgICBpZiAoY29sbGFwc2VkKSB7XG4gICAgICAgIHByZWZlcmVuY2VzID0gcHJlZmVyZW5jZXMuZmlsdGVyKChwcmVmZXJlbmNlKSA9PiBsYWJlbCAhPT0gcHJlZmVyZW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmVmZXJlbmNlcy5wdXNoKGxhYmVsKTtcbiAgICAgIH1cbiAgICAgIHNldFByZWZlcmVuY2UocHJlZmVyZW5jZXNLZXksIHByZWZlcmVuY2VzKTtcbiAgICAgIHNldENvbGxhcHNlZCghY29sbGFwc2VkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9e2BuYXYtZ3JvdXAtJHtsYWJlbH1gfVxuICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICBgJHtiYXNlQ2xhc3N9YCxcbiAgICAgICAgICBgJHtsYWJlbH1gLFxuICAgICAgICAgIGNvbGxhcHNlZCAmJiBgJHtiYXNlQ2xhc3N9LS1jb2xsYXBzZWRgLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgIC5qb2luKCcgJyl9XG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgIGAke2Jhc2VDbGFzc31fX3RvZ2dsZWAsXG4gICAgICAgICAgICBgJHtiYXNlQ2xhc3N9X190b2dnbGUtLSR7Y29sbGFwc2VkID8gJ2NvbGxhcHNlZCcgOiAnb3Blbid9YCxcbiAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Q2hldnJvbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2luZGljYXRvcmB9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8QW5pbWF0ZUhlaWdodFxuICAgICAgICAgIGhlaWdodD17Y29sbGFwc2VkID8gMCA6ICdhdXRvJ31cbiAgICAgICAgICBkdXJhdGlvbj17YW5pbWF0ZSA/IDIwMCA6IDB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0FuaW1hdGVIZWlnaHQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkdyb3VwO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIk5hdkdyb3VwIiwiY2hpbGRyZW4iLCJsYWJlbCIsInVzZVN0YXRlIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiYW5pbWF0ZSIsInNldEFuaW1hdGUiLCJ1c2VQcmVmZXJlbmNlcyIsImdldFByZWZlcmVuY2UiLCJzZXRQcmVmZXJlbmNlIiwicHJlZmVyZW5jZXNLZXkiLCJ1c2VFZmZlY3QiLCJzZXRDb2xsYXBzZWRGcm9tUHJlZmVyZW5jZXMiLCJwcmVmZXJlbmNlcyIsImluZGV4T2YiLCJ0b2dnbGVDb2xsYXBzZWQiLCJmaWx0ZXIiLCJwcmVmZXJlbmNlIiwicHVzaCIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiQm9vbGVhbiIsImpvaW4iLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsIkNoZXZyb24iLCJBbmltYXRlSGVpZ2h0IiwiaGVpZ2h0IiwiZHVyYXRpb24iLCJSZWFjdCIsIkZyYWdtZW50Il0sIm1hcHBpbmdzIjoiOzs7OytCQTBGQTs7O2VBQUE7Ozs2REExRjJDO3lFQUNqQjs4REFDTjsyQkFDVztRQUV4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBT2xCLElBQU1DLFdBQTRCO1FBQ2hDQyxpQkFBQUEsVUFDQUMsY0FBQUE7SUFFQSxJQUFrQ0MsNkJBQUFBLElBQUFBLGVBQVEsRUFBQyxXQUFwQ0MsWUFBMkJELGNBQWhCRSxlQUFnQkY7SUFDbEMsSUFBOEJBLDhCQUFBQSxJQUFBQSxlQUFRLEVBQUMsWUFBaENHLFVBQXVCSCxlQUFkSSxhQUFjSjtJQUM5QixJQUF5Q0ssa0JBQUFBLElBQUFBLDJCQUFjLEtBQS9DQyxnQkFBaUNELGdCQUFqQ0MsZUFBZUMsZ0JBQWtCRixnQkFBbEJFO0lBRXZCLElBQU1DLGlCQUFpQixBQUFDLGFBQWtCLE9BQU5ULE9BQU07SUFFMUNVLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJVixPQUFPO1lBQ1QsSUFBTVc7MkJBQThCLG9CQUFBO3dCQUM1QkM7Ozs7Z0NBQWM7O29DQUFNTCxjQUFjRTs7O2dDQUFsQ0csY0FBYztnQ0FDcEJULGFBQWFTLFlBQVlDLE9BQU8sQ0FBQ2IsV0FBVyxDQUFDOzs7Ozs7Z0JBQy9DO2dDQUhNVzs7OztZQUlOQTtRQUNGO0lBQ0YsR0FBRztRQUFDSjtRQUFlUDtRQUFPUztLQUFlO0lBRXpDLElBQUlULE9BQU87UUFDVCxJQUFNYzt1QkFBa0Isb0JBQUE7b0JBRWxCRjs7Ozs0QkFESlAsV0FBVzs0QkFDaUI7O2dDQUFNRSxjQUFjRTs7OzRCQUE1Q0csY0FBd0I7NEJBQzVCLElBQUlWLFdBQVc7Z0NBQ2JVLGNBQWNBLFlBQVlHLE1BQU0sQ0FBQyxTQUFDQzsyQ0FBZWhCLFVBQVVnQjs7NEJBQzdELE9BQU87Z0NBQ0xKLFlBQVlLLElBQUksQ0FBQ2pCOzRCQUNuQjs0QkFDQVEsY0FBY0MsZ0JBQWdCRzs0QkFDOUJULGFBQWEsQ0FBQ0Q7Ozs7OztZQUNoQjs0QkFWTVk7Ozs7UUFZTixxQkFDRSw2QkFBQ0k7WUFDQ0MsSUFBSSxBQUFDLGFBQWtCLE9BQU5uQjtZQUNqQm9CLFdBQVc7Z0JBQ1IsR0FBWSxPQUFWdkI7Z0JBQ0YsR0FBUSxPQUFORztnQkFDSEUsYUFBYSxBQUFDLEdBQVksT0FBVkwsV0FBVTthQUMzQixDQUFDa0IsTUFBTSxDQUFDTSxTQUNOQyxJQUFJLENBQUM7eUJBRVIsNkJBQUNDO1lBQ0NDLE1BQUs7WUFDTEosV0FBVztnQkFDUixHQUFZLE9BQVZ2QixXQUFVO2dCQUNaLEdBQXdCSyxPQUF0QkwsV0FBVSxjQUE2QyxPQUFqQ0ssWUFBWSxjQUFjO2FBQ3BELENBQUNhLE1BQU0sQ0FBQ00sU0FDTkMsSUFBSSxDQUFDO1lBQ1JHLFNBQVNYO3lCQUVULDZCQUFDSTtZQUFJRSxXQUFXLEFBQUMsR0FBWSxPQUFWdkIsV0FBVTtXQUMxQkcsc0JBRUgsNkJBQUMwQixnQkFBTztZQUFDTixXQUFXLEFBQUMsR0FBWSxPQUFWdkIsV0FBVTsyQkFFbkMsNkJBQUM4QiwyQkFBYTtZQUNaQyxRQUFRMUIsWUFBWSxJQUFJO1lBQ3hCMkIsVUFBVXpCLFVBQVUsTUFBTTt5QkFFMUIsNkJBQUNjO1lBQUlFLFdBQVcsQUFBQyxHQUFZLE9BQVZ2QixXQUFVO1dBQzFCRTtJQUtYO0lBRUEscUJBQ0UsNkJBQUMrQixjQUFLLENBQUNDLFFBQVEsUUFDWmhDO0FBR1A7SUFFQSxXQUFlRCJ9