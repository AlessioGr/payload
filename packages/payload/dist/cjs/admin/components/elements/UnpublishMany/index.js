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
var _reacttoastify = require("react-toastify");
var _modal = require("@faceless-ui/modal");
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _api = require("../../../api");
var _SelectionProvider = require("../../views/collections/List/SelectionProvider");
var _getTranslation = require("../../../../utilities/getTranslation");
var _Pill = /*#__PURE__*/ _interop_require_default(require("../Pill"));
var _Auth = require("../../utilities/Auth");
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
var baseClass = "unpublish-many";
var UnpublishMany = function(props) {
    var _permissions_collections, _permissions, _collectionPermissions_update, _collectionPermissions, _versions;
    var resetParams = props.resetParams, tmp = props.collection, _ref = tmp === void 0 ? {} : tmp, slug = _ref.slug, plural = _ref.labels.plural, versions = _ref.versions;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var permissions = (0, _Auth.useAuth)().permissions;
    var toggleModal = (0, _modal.useModal)().toggleModal;
    var _useTranslation = (0, _reacti18next.useTranslation)("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useSelection = (0, _SelectionProvider.useSelection)(), selectAll = _useSelection.selectAll, count = _useSelection.count, getQueryParams = _useSelection.getQueryParams;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), submitted = _useState[0], setSubmitted = _useState[1];
    var collectionPermissions = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : _permissions_collections[slug];
    var hasPermission = (_collectionPermissions = collectionPermissions) === null || _collectionPermissions === void 0 ? void 0 : (_collectionPermissions_update = _collectionPermissions.update) === null || _collectionPermissions_update === void 0 ? void 0 : _collectionPermissions_update.permission;
    var modalSlug = "unpublish-".concat(slug);
    var addDefaultError = (0, _react.useCallback)(function() {
        _reacttoastify.toast.error(t("error:unknown"));
    }, [
        t
    ]);
    var handleUnpublish = (0, _react.useCallback)(function() {
        setSubmitted(true);
        _api.requests.patch("".concat(serverURL).concat(api, "/").concat(slug).concat(getQueryParams({
            _status: {
                not_equals: "draft"
            }
        })), {
            body: JSON.stringify({
                _status: "draft"
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then(function() {
            var _ref = _async_to_generator(function(res) {
                var json, e;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                res.json()
                            ];
                        case 1:
                            json = _state.sent();
                            toggleModal(modalSlug);
                            if (res.status < 400) {
                                _reacttoastify.toast.success(t("general:updatedSuccessfully"));
                                resetParams({
                                    page: selectAll ? 1 : undefined
                                });
                                return [
                                    2,
                                    null
                                ];
                            }
                            if (json.errors) {
                                json.errors.forEach(function(error) {
                                    return _reacttoastify.toast.error(error.message);
                                });
                            } else {
                                addDefaultError();
                            }
                            return [
                                2,
                                false
                            ];
                        case 2:
                            e = _state.sent();
                            return [
                                2,
                                addDefaultError()
                            ];
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            });
            return function(res) {
                return _ref.apply(this, arguments);
            };
        }());
    }, [
        addDefaultError,
        api,
        getQueryParams,
        i18n.language,
        modalSlug,
        resetParams,
        selectAll,
        serverURL,
        slug,
        t,
        toggleModal
    ]);
    if (!((_versions = versions) === null || _versions === void 0 ? void 0 : _versions.drafts) || selectAll === _SelectionProvider.SelectAllStatus.None || !hasPermission) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Pill.default, {
        className: "".concat(baseClass, "__toggle"),
        onClick: function() {
            setSubmitted(false);
            toggleModal(modalSlug);
        }
    }, t("unpublish")), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        slug: modalSlug,
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: "".concat(baseClass, "__template")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("confirmUnpublish")), /*#__PURE__*/ _react.default.createElement("p", null, t("aboutToUnpublishSelection", {
        label: (0, _getTranslation.getTranslation)(plural, i18n)
    })), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        id: "confirm-cancel",
        buttonStyle: "secondary",
        type: "button",
        onClick: submitted ? undefined : function() {
            return toggleModal(modalSlug);
        }
    }, t("general:cancel")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        onClick: submitted ? undefined : handleUnpublish,
        id: "confirm-unpublish"
    }, submitted ? t("unpublishing") : t("general:confirm")))));
};
var _default = UnpublishMany;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1VucHVibGlzaE1hbnkvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IE1vZGFsLCB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCB7IHJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYXBpJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTZWxlY3RBbGxTdGF0dXMsIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICd1bnB1Ymxpc2gtbWFueSc7XG5cbmNvbnN0IFVucHVibGlzaE1hbnk6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcmVzZXRQYXJhbXMsXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgc2x1ZyxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBwbHVyYWwsXG4gICAgICB9LFxuICAgICAgdmVyc2lvbnMsXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcGVybWlzc2lvbnMgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyB0b2dnbGVNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuICBjb25zdCB7IHNlbGVjdEFsbCwgY291bnQsIGdldFF1ZXJ5UGFyYW1zIH0gPSB1c2VTZWxlY3Rpb24oKTtcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb2xsZWN0aW9uUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltzbHVnXTtcbiAgY29uc3QgaGFzUGVybWlzc2lvbiA9IGNvbGxlY3Rpb25QZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uO1xuXG4gIGNvbnN0IG1vZGFsU2x1ZyA9IGB1bnB1Ymxpc2gtJHtzbHVnfWA7XG5cbiAgY29uc3QgYWRkRGVmYXVsdEVycm9yID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHRvYXN0LmVycm9yKHQoJ2Vycm9yOnVua25vd24nKSk7XG4gIH0sIFt0XSk7XG5cbiAgY29uc3QgaGFuZGxlVW5wdWJsaXNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICByZXF1ZXN0cy5wYXRjaChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30ke2dldFF1ZXJ5UGFyYW1zKHsgX3N0YXR1czogeyBub3RfZXF1YWxzOiAnZHJhZnQnIH0gfSl9YCwge1xuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBfc3RhdHVzOiAnZHJhZnQnLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgfSxcbiAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICB0b2dnbGVNb2RhbChtb2RhbFNsdWcpO1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3ModCgnZ2VuZXJhbDp1cGRhdGVkU3VjY2Vzc2Z1bGx5JykpO1xuICAgICAgICAgIHJlc2V0UGFyYW1zKHsgcGFnZTogc2VsZWN0QWxsID8gMSA6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICAgIGpzb24uZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkRGVmYXVsdEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gYWRkRGVmYXVsdEVycm9yKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFthZGREZWZhdWx0RXJyb3IsIGFwaSwgZ2V0UXVlcnlQYXJhbXMsIGkxOG4ubGFuZ3VhZ2UsIG1vZGFsU2x1ZywgcmVzZXRQYXJhbXMsIHNlbGVjdEFsbCwgc2VydmVyVVJMLCBzbHVnLCB0LCB0b2dnbGVNb2RhbF0pO1xuXG4gIGlmICghKHZlcnNpb25zPy5kcmFmdHMpIHx8IChzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5Ob25lIHx8ICFoYXNQZXJtaXNzaW9uKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGlsbFxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZWB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xuICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0KCd1bnB1Ymxpc2gnKX1cbiAgICAgIDwvUGlsbD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBzbHVnPXttb2RhbFNsdWd9XG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgPlxuICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGVtcGxhdGVgfT5cbiAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1VbnB1Ymxpc2gnKX08L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge3QoJ2Fib3V0VG9VbnB1Ymxpc2hTZWxlY3Rpb24nLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihwbHVyYWwsIGkxOG4pIH0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpZD1cImNvbmZpcm0tY2FuY2VsXCJcbiAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17c3VibWl0dGVkID8gdW5kZWZpbmVkIDogKCkgPT4gdG9nZ2xlTW9kYWwobW9kYWxTbHVnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dCgnZ2VuZXJhbDpjYW5jZWwnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXR0ZWQgPyB1bmRlZmluZWQgOiBoYW5kbGVVbnB1Ymxpc2h9XG4gICAgICAgICAgICBpZD1cImNvbmZpcm0tdW5wdWJsaXNoXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3VibWl0dGVkID8gdCgndW5wdWJsaXNoaW5nJykgOiB0KCdnZW5lcmFsOmNvbmZpcm0nKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICAgICA8L01vZGFsPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVbnB1Ymxpc2hNYW55O1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlVucHVibGlzaE1hbnkiLCJwcm9wcyIsInBlcm1pc3Npb25zIiwiY29sbGVjdGlvblBlcm1pc3Npb25zIiwidmVyc2lvbnMiLCJyZXNldFBhcmFtcyIsImNvbGxlY3Rpb24iLCJzbHVnIiwibGFiZWxzIiwicGx1cmFsIiwidXNlQ29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwidXNlQXV0aCIsInRvZ2dsZU1vZGFsIiwidXNlTW9kYWwiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwidXNlU2VsZWN0aW9uIiwic2VsZWN0QWxsIiwiY291bnQiLCJnZXRRdWVyeVBhcmFtcyIsInVzZVN0YXRlIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiY29sbGVjdGlvbnMiLCJoYXNQZXJtaXNzaW9uIiwidXBkYXRlIiwicGVybWlzc2lvbiIsIm1vZGFsU2x1ZyIsImFkZERlZmF1bHRFcnJvciIsInVzZUNhbGxiYWNrIiwidG9hc3QiLCJlcnJvciIsImhhbmRsZVVucHVibGlzaCIsInJlcXVlc3RzIiwicGF0Y2giLCJfc3RhdHVzIiwibm90X2VxdWFscyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImxhbmd1YWdlIiwidGhlbiIsInJlcyIsImpzb24iLCJlIiwic3RhdHVzIiwic3VjY2VzcyIsInBhZ2UiLCJ1bmRlZmluZWQiLCJlcnJvcnMiLCJmb3JFYWNoIiwibWVzc2FnZSIsImRyYWZ0cyIsIlNlbGVjdEFsbFN0YXR1cyIsIk5vbmUiLCJSZWFjdCIsIkZyYWdtZW50IiwiUGlsbCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJNb2RhbCIsIk1pbmltYWxUZW1wbGF0ZSIsImgxIiwicCIsImxhYmVsIiwiZ2V0VHJhbnNsYXRpb24iLCJCdXR0b24iLCJpZCIsImJ1dHRvblN0eWxlIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEwSEE7OztlQUFBOzs7NkRBMUg2Qzs2QkFDdkI7cUJBQ1U7NEJBQ0Q7c0JBQ0w7NkRBQ1A7OERBQ1M7bUJBQ0g7aUNBRXFCOzhCQUNmOzJEQUNkO29CQUNPO1FBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsZ0JBQWlDLFNBQUNDO1FBbUJSQywwQkFBQUEsY0FDUkMsK0JBQUFBLHdCQXdDaEJDO0lBM0ROLElBQ0VDLGNBUUVKLE1BUkZJLGFBQ1ksTUFPVkosTUFQRkssbUJBQVksaUJBTVIsQ0FBQyxJQU5PLEtBQ1ZDLFlBQUFBLE1BQ0FDLEFBQ0VDLGNBREZELE9BQ0VDLFFBRUZMLGdCQUFBQTtJQUlKLElBQXVDTSxhQUFBQSxJQUFBQSxpQkFBUyxLQUF4Q0MsWUFBK0JELFdBQS9CQyxXQUFXQyxBQUFVQyxNQUFVSCxXQUFwQkUsT0FBVUM7SUFDN0IsSUFBTSxBQUFF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