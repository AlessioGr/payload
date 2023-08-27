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
var _reacti18next = require("react-i18next");
var _reacttoastify = require("react-toastify");
var _Auth = require("../../utilities/Auth");
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _Locale = require("../../utilities/Locale");
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _Config = require("../../utilities/Config");
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
var baseClass = "preview-btn";
var DefaultPreviewButton = function(param) {
    var preview = param.preview, disabled = param.disabled, label = param.label;
    return /*#__PURE__*/ _react.default.createElement(_Button.default, {
        className: baseClass,
        buttonStyle: "secondary",
        onClick: preview,
        disabled: disabled
    }, label);
};
var PreviewButton = function(param) {
    var CustomComponent = param.CustomComponent, generatePreviewURL = param.generatePreviewURL;
    var _useDocumentInfo = (0, _DocumentInfo.useDocumentInfo)(), id = _useDocumentInfo.id, collection = _useDocumentInfo.collection, global = _useDocumentInfo.global;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), isLoading = _useState[0], setIsLoading = _useState[1];
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var token = (0, _Auth.useAuth)().token;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var t = (0, _reacti18next.useTranslation)("version").t;
    var isGeneratingPreviewURL = (0, _react.useRef)(false);
    // we need to regenerate the preview URL every time the button is clicked
    // to do this we need to fetch the document data fresh from the API
    // this will ensure the latest data is used when generating the preview URL
    var preview = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        var url, data, previewURL, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!generatePreviewURL || isGeneratingPreviewURL.current) return [
                        2
                    ];
                    isGeneratingPreviewURL.current = true;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        4,
                        ,
                        5
                    ]);
                    setIsLoading(true);
                    url = "".concat(serverURL).concat(api);
                    if (collection) url = "".concat(url, "/").concat(collection.slug, "/").concat(id);
                    if (global) url = "".concat(url, "/globals/").concat(global.slug);
                    return [
                        4,
                        fetch("".concat(url, "?draft=true&locale=").concat(locale, "&fallback-locale=null")).then(function(res) {
                            return res.json();
                        })
                    ];
                case 2:
                    data = _state.sent();
                    return [
                        4,
                        generatePreviewURL(data, {
                            locale: locale,
                            token: token
                        })
                    ];
                case 3:
                    previewURL = _state.sent();
                    if (!previewURL) throw new Error();
                    setIsLoading(false);
                    isGeneratingPreviewURL.current = false;
                    window.open(previewURL, "_blank");
                    return [
                        3,
                        5
                    ];
                case 4:
                    err = _state.sent();
                    setIsLoading(false);
                    isGeneratingPreviewURL.current = false;
                    _reacttoastify.toast.error(t("error:previewing"));
                    return [
                        3,
                        5
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    }), [
        serverURL,
        api,
        collection,
        global,
        id,
        generatePreviewURL,
        locale,
        token,
        t
    ]);
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomComponent,
        DefaultComponent: DefaultPreviewButton,
        componentProps: {
            preview: preview,
            disabled: isLoading || !generatePreviewURL,
            label: isLoading ? t("general:loading") : t("preview"),
            DefaultButton: DefaultPreviewButton
        }
    });
};
var _default = PreviewButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1ByZXZpZXdCdXR0b24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IEdlbmVyYXRlUHJldmlld1VSTCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50JztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3ByZXZpZXctYnRuJztcblxuZXhwb3J0IHR5cGUgQ3VzdG9tUHJldmlld0J1dHRvblByb3BzID0gUmVhY3QuQ29tcG9uZW50VHlwZTxEZWZhdWx0UHJldmlld0J1dHRvblByb3BzICYge1xuICBEZWZhdWx0QnV0dG9uOiBSZWFjdC5Db21wb25lbnRUeXBlPERlZmF1bHRQcmV2aWV3QnV0dG9uUHJvcHM+O1xufT5cbmV4cG9ydCB0eXBlIERlZmF1bHRQcmV2aWV3QnV0dG9uUHJvcHMgPSB7XG4gIHByZXZpZXc6ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nO1xufTtcbmNvbnN0IERlZmF1bHRQcmV2aWV3QnV0dG9uOiBSZWFjdC5GQzxEZWZhdWx0UHJldmlld0J1dHRvblByb3BzPiA9ICh7IHByZXZpZXcsIGRpc2FibGVkLCBsYWJlbCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICBvbkNsaWNrPXtwcmV2aWV3fVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIEN1c3RvbUNvbXBvbmVudD86IEN1c3RvbVByZXZpZXdCdXR0b25Qcm9wc1xuICBnZW5lcmF0ZVByZXZpZXdVUkw/OiBHZW5lcmF0ZVByZXZpZXdVUkxcbn1cbmNvbnN0IFByZXZpZXdCdXR0b246IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIEN1c3RvbUNvbXBvbmVudCxcbiAgZ2VuZXJhdGVQcmV2aWV3VVJMLFxufSkgPT4ge1xuICBjb25zdCB7IGlkLCBjb2xsZWN0aW9uLCBnbG9iYWwgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHNlcnZlclVSTCwgcm91dGVzOiB7IGFwaSB9IH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuICBjb25zdCBpc0dlbmVyYXRpbmdQcmV2aWV3VVJMID0gdXNlUmVmKGZhbHNlKTtcblxuICAvLyB3ZSBuZWVkIHRvIHJlZ2VuZXJhdGUgdGhlIHByZXZpZXcgVVJMIGV2ZXJ5IHRpbWUgdGhlIGJ1dHRvbiBpcyBjbGlja2VkXG4gIC8vIHRvIGRvIHRoaXMgd2UgbmVlZCB0byBmZXRjaCB0aGUgZG9jdW1lbnQgZGF0YSBmcmVzaCBmcm9tIHRoZSBBUElcbiAgLy8gdGhpcyB3aWxsIGVuc3VyZSB0aGUgbGF0ZXN0IGRhdGEgaXMgdXNlZCB3aGVuIGdlbmVyYXRpbmcgdGhlIHByZXZpZXcgVVJMXG4gIGNvbnN0IHByZXZpZXcgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFnZW5lcmF0ZVByZXZpZXdVUkwgfHwgaXNHZW5lcmF0aW5nUHJldmlld1VSTC5jdXJyZW50KSByZXR1cm47XG4gICAgaXNHZW5lcmF0aW5nUHJldmlld1VSTC5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGxldCB1cmwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9YDtcbiAgICAgIGlmIChjb2xsZWN0aW9uKSB1cmwgPSBgJHt1cmx9LyR7Y29sbGVjdGlvbi5zbHVnfS8ke2lkfWA7XG4gICAgICBpZiAoZ2xvYmFsKSB1cmwgPSBgJHt1cmx9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z31gO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7dXJsfT9kcmFmdD10cnVlJmxvY2FsZT0ke2xvY2FsZX0mZmFsbGJhY2stbG9jYWxlPW51bGxgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgICAgY29uc3QgcHJldmlld1VSTCA9IGF3YWl0IGdlbmVyYXRlUHJldmlld1VSTChkYXRhLCB7IGxvY2FsZSwgdG9rZW4gfSk7XG4gICAgICBpZiAoIXByZXZpZXdVUkwpIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlzR2VuZXJhdGluZ1ByZXZpZXdVUkwuY3VycmVudCA9IGZhbHNlO1xuICAgICAgd2luZG93Lm9wZW4ocHJldmlld1VSTCwgJ19ibGFuaycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlzR2VuZXJhdGluZ1ByZXZpZXdVUkwuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdG9hc3QuZXJyb3IodCgnZXJyb3I6cHJldmlld2luZycpKTtcbiAgICB9XG4gIH0sIFtzZXJ2ZXJVUkwsIGFwaSwgY29sbGVjdGlvbiwgZ2xvYmFsLCBpZCwgZ2VuZXJhdGVQcmV2aWV3VVJMLCBsb2NhbGUsIHRva2VuLCB0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBDdXN0b21Db21wb25lbnQ9e0N1c3RvbUNvbXBvbmVudH1cbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRQcmV2aWV3QnV0dG9ufVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgcHJldmlldyxcbiAgICAgICAgZGlzYWJsZWQ6IGlzTG9hZGluZyB8fCAhZ2VuZXJhdGVQcmV2aWV3VVJMLFxuICAgICAgICBsYWJlbDogaXNMb2FkaW5nID8gdCgnZ2VuZXJhbDpsb2FkaW5nJykgOiB0KCdwcmV2aWV3JyksXG4gICAgICAgIERlZmF1bHRCdXR0b246IERlZmF1bHRQcmV2aWV3QnV0dG9uLFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJldmlld0J1dHRvbjtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEZWZhdWx0UHJldmlld0J1dHRvbiIsInByZXZpZXciLCJkaXNhYmxlZCIsImxhYmVsIiwiQnV0dG9uIiwiY2xhc3NOYW1lIiwiYnV0dG9uU3R5bGUiLCJvbkNsaWNrIiwiUHJldmlld0J1dHRvbiIsIkN1c3RvbUNvbXBvbmVudCIsImdlbmVyYXRlUHJldmlld1VSTCIsInVzZURvY3VtZW50SW5mbyIsImlkIiwiY29sbGVjdGlvbiIsImdsb2JhbCIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlTG9jYWxlIiwiY29kZSIsImxvY2FsZSIsInRva2VuIiwidXNlQXV0aCIsInVzZUNvbmZpZyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImlzR2VuZXJhdGluZ1ByZXZpZXdVUkwiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsInVybCIsImRhdGEiLCJwcmV2aWV3VVJMIiwiZXJyIiwiY3VycmVudCIsInNsdWciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiRXJyb3IiLCJ3aW5kb3ciLCJvcGVuIiwidG9hc3QiLCJlcnJvciIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiLCJjb21wb25lbnRQcm9wcyIsIkRlZmF1bHRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBNEZBOzs7ZUFBQTs7OzZEQTVGcUQ7NEJBQ3RCOzZCQUNUO29CQUVFOzZEQUNMO3NCQUNPOzRCQUNNO3NCQUNOOzRFQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQSxZQUFZO0FBVWxCLElBQU1DLHVCQUE0RDtRQUFHQyxnQkFBQUEsU0FBU0MsaUJBQUFBLFVBQVVDLGNBQUFBO0lBQ3RGLHFCQUNFLDZCQUFDQyxlQUFNO1FBQ0xDLFdBQVdOO1FBQ1hPLGFBQVk7UUFDWkMsU0FBU047UUFDVEMsVUFBVUE7T0FFVEM7QUFHUDtBQU1BLElBQU1LLGdCQUFpQztRQUNyQ0Msd0JBQUFBLGlCQUNBQywyQkFBQUE7SUFFQSxJQUFtQ0MsbUJBQUFBLElBQUFBLDZCQUFlLEtBQTFDQyxLQUEyQkQsaUJBQTNCQyxJQUFJQyxhQUF1QkYsaUJBQXZCRSxZQUFZQyxTQUFXSCxpQkFBWEc7SUFFeEIsSUFBa0NDLDZCQUFBQSxJQUFBQSxlQUFRLEVBQUMsWUFBcENDLFlBQTJCRCxjQUFoQkUsZUFBZ0JGO0lBQ2xDLElBQXlCRyxhQUFBQSxJQUFBQSxpQkFBUyxLQUExQkMsQUFBTUMsU0FBV0YsV0FBakJDO0lBQ1IsSUFBTSxBQUFFRSxRQUFVQyxJQUFBQSxhQUFPLElBQWpCRDtJQUNSLElBQXVDRSxhQUFBQSxJQUFBQSxpQkFBUyxLQUF4Q0MsWUFBK0JELFdBQS9CQyxXQUFXQyxBQUFVQyxNQUFVSCxXQUFwQkUsT0FBVUM7SUFDN0IsSUFBTSxBQUFFQyxJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLFdBQXJCRDtJQUNSLElBQU1FLHlCQUF5QkMsSUFBQUEsYUFBTSxFQUFDO0lBRXRDLHlFQUF5RTtJQUN6RSxtRUFBbUU7SUFDbkUsMkVBQTJFO0lBQzNFLElBQU03QixVQUFVOEIsSUFBQUEsa0JBQVcsZ0JBQUMsb0JBQUE7WUFPcEJDLEtBSUVDLE1BQ0FDLFlBS0NDOzs7O29CQWhCVCxJQUFJLENBQUN6QixzQkFBc0JtQix1QkFBdUJPLE9BQU8sRUFBRTs7O29CQUMzRFAsdUJBQXVCTyxPQUFPLEdBQUc7Ozs7Ozs7OztvQkFHL0JuQixhQUFhO29CQUVUZSxNQUFNLEFBQUMsR0FBY04sT0FBWkYsV0FBZ0IsT0FBSkU7b0JBQ3pCLElBQUliLFlBQVltQixNQUFNLEFBQUMsR0FBU25CLE9BQVBtQixLQUFJLEtBQXNCcEIsT0FBbkJDLFdBQVd3QixJQUFJLEVBQUMsS0FBTSxPQUFIekI7b0JBQ25ELElBQUlFLFFBQVFrQixNQUFNLEFBQUMsR0FBaUJsQixPQUFma0IsS0FBSSxhQUF1QixPQUFabEIsT0FBT3VCLElBQUk7b0JBRWxDOzt3QkFBTUMsTUFBTSxBQUFDLEdBQTJCbEIsT0FBekJZLEtBQUksdUJBQTRCLE9BQVBaLFFBQU8sMEJBQXdCbUIsSUFBSSxDQUFDLFNBQUNDO21DQUFRQSxJQUFJQyxJQUFJOzs7O29CQUFwR1IsT0FBTztvQkFDTTs7d0JBQU12QixtQkFBbUJ1QixNQUFNOzRCQUFFYixRQUFBQTs0QkFBUUMsT0FBQUE7d0JBQU07OztvQkFBNURhLGFBQWE7b0JBQ25CLElBQUksQ0FBQ0EsWUFBWSxNQUFNLElBQUlRO29CQUMzQnpCLGFBQWE7b0JBQ2JZLHVCQUF1Qk8sT0FBTyxHQUFHO29CQUNqQ08sT0FBT0MsSUFBSSxDQUFDVixZQUFZOzs7Ozs7b0JBQ2pCQztvQkFDUGxCLGFBQWE7b0JBQ2JZLHVCQUF1Qk8sT0FBTyxHQUFHO29CQUNqQ1Msb0JBQUssQ0FBQ0MsS0FBSyxDQUFDbkIsRUFBRTs7Ozs7Ozs7Ozs7SUFFbEIsSUFBRztRQUFDSDtRQUFXRTtRQUFLYjtRQUFZQztRQUFRRjtRQUFJRjtRQUFvQlU7UUFBUUM7UUFBT007S0FBRTtJQUVqRixxQkFDRSw2QkFBQ29CLDhCQUFxQjtRQUNwQnRDLGlCQUFpQkE7UUFDakJ1QyxrQkFBa0JoRDtRQUNsQmlELGdCQUFnQjtZQUNkaEQsU0FBQUE7WUFDQUMsVUFBVWMsYUFBYSxDQUFDTjtZQUN4QlAsT0FBT2EsWUFBWVcsRUFBRSxxQkFBcUJBLEVBQUU7WUFDNUN1QixlQUFlbEQ7UUFDakI7O0FBR047SUFFQSxXQUFlUSJ9