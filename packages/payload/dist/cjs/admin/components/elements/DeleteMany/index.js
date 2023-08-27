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
var baseClass = "delete-documents";
var DeleteMany = function(props) {
    var _permissions_collections, _permissions, _collectionPermissions_delete, _collectionPermissions;
    var resetParams = props.resetParams, tmp = props.collection, _ref = tmp === void 0 ? {} : tmp, slug = _ref.slug, plural = _ref.labels.plural;
    var permissions = (0, _Auth.useAuth)().permissions;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var toggleModal = (0, _modal.useModal)().toggleModal;
    var _useSelection = (0, _SelectionProvider.useSelection)(), selectAll = _useSelection.selectAll, count = _useSelection.count, getQueryParams = _useSelection.getQueryParams, toggleAll = _useSelection.toggleAll;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), deleting = _useState[0], setDeleting = _useState[1];
    var collectionPermissions = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : _permissions_collections[slug];
    var hasDeletePermission = (_collectionPermissions = collectionPermissions) === null || _collectionPermissions === void 0 ? void 0 : (_collectionPermissions_delete = _collectionPermissions.delete) === null || _collectionPermissions_delete === void 0 ? void 0 : _collectionPermissions_delete.permission;
    var modalSlug = "delete-".concat(slug);
    var addDefaultError = (0, _react.useCallback)(function() {
        _reacttoastify.toast.error(t("error:unknown"));
    }, [
        t
    ]);
    var handleDelete = (0, _react.useCallback)(function() {
        setDeleting(true);
        _api.requests.delete("".concat(serverURL).concat(api, "/").concat(slug).concat(getQueryParams()), {
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
                                _reacttoastify.toast.success(json.message || t("deletedSuccessfully"), {
                                    autoClose: 3000
                                });
                                toggleAll();
                                resetParams({
                                    page: selectAll ? 1 : undefined
                                });
                                return [
                                    2,
                                    null
                                ];
                            }
                            if (json.errors) {
                                _reacttoastify.toast.error(json.message);
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
        toggleAll,
        toggleModal
    ]);
    if (selectAll === _SelectionProvider.SelectAllStatus.None || !hasDeletePermission) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Pill.default, {
        className: "".concat(baseClass, "__toggle"),
        onClick: function() {
            setDeleting(false);
            toggleModal(modalSlug);
        }
    }, t("delete")), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        slug: modalSlug,
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: "".concat(baseClass, "__template")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("confirmDeletion")), /*#__PURE__*/ _react.default.createElement("p", null, t("aboutToDeleteCount", {
        label: (0, _getTranslation.getTranslation)(plural, i18n),
        count: count
    })), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        id: "confirm-cancel",
        buttonStyle: "secondary",
        type: "button",
        onClick: deleting ? undefined : function() {
            return toggleModal(modalSlug);
        }
    }, t("cancel")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        onClick: deleting ? undefined : handleDelete,
        id: "confirm-delete"
    }, deleting ? t("deleting") : t("confirm")))));
};
var _default = DeleteMany;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RlbGV0ZU1hbnkvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IE1vZGFsLCB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCB7IHJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYXBpJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTZWxlY3RBbGxTdGF0dXMsIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdkZWxldGUtZG9jdW1lbnRzJztcblxuY29uc3QgRGVsZXRlTWFueTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZXNldFBhcmFtcyxcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBzbHVnLFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHBsdXJhbCxcbiAgICAgIH0sXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBwZXJtaXNzaW9ucyB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHNlcnZlclVSTCwgcm91dGVzOiB7IGFwaSB9IH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB0b2dnbGVNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyBzZWxlY3RBbGwsIGNvdW50LCBnZXRRdWVyeVBhcmFtcywgdG9nZ2xlQWxsIH0gPSB1c2VTZWxlY3Rpb24oKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCBbZGVsZXRpbmcsIHNldERlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb2xsZWN0aW9uUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltzbHVnXTtcbiAgY29uc3QgaGFzRGVsZXRlUGVybWlzc2lvbiA9IGNvbGxlY3Rpb25QZXJtaXNzaW9ucz8uZGVsZXRlPy5wZXJtaXNzaW9uO1xuXG4gIGNvbnN0IG1vZGFsU2x1ZyA9IGBkZWxldGUtJHtzbHVnfWA7XG5cbiAgY29uc3QgYWRkRGVmYXVsdEVycm9yID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHRvYXN0LmVycm9yKHQoJ2Vycm9yOnVua25vd24nKSk7XG4gIH0sIFt0XSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldERlbGV0aW5nKHRydWUpO1xuICAgIHJlcXVlc3RzLmRlbGV0ZShgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30ke2dldFF1ZXJ5UGFyYW1zKCl9YCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgIH0sXG4gICAgfSkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKGpzb24ubWVzc2FnZSB8fCB0KCdkZWxldGVkU3VjY2Vzc2Z1bGx5JyksIHsgYXV0b0Nsb3NlOiAzMDAwIH0pO1xuICAgICAgICAgIHRvZ2dsZUFsbCgpO1xuICAgICAgICAgIHJlc2V0UGFyYW1zKHsgcGFnZTogc2VsZWN0QWxsID8gMSA6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICAgIHRvYXN0LmVycm9yKGpzb24ubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkRGVmYXVsdEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gYWRkRGVmYXVsdEVycm9yKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFthZGREZWZhdWx0RXJyb3IsIGFwaSwgZ2V0UXVlcnlQYXJhbXMsIGkxOG4ubGFuZ3VhZ2UsIG1vZGFsU2x1ZywgcmVzZXRQYXJhbXMsIHNlbGVjdEFsbCwgc2VydmVyVVJMLCBzbHVnLCB0LCB0b2dnbGVBbGwsIHRvZ2dsZU1vZGFsXSk7XG5cbiAgaWYgKHNlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLk5vbmUgfHwgIWhhc0RlbGV0ZVBlcm1pc3Npb24pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBpbGxcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGVgfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0RGVsZXRpbmcoZmFsc2UpO1xuICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0KCdkZWxldGUnKX1cbiAgICAgIDwvUGlsbD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBzbHVnPXttb2RhbFNsdWd9XG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgPlxuICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGVtcGxhdGVgfT5cbiAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1EZWxldGlvbicpfTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7dCgnYWJvdXRUb0RlbGV0ZUNvdW50JywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24ocGx1cmFsLCBpMThuKSwgY291bnQgfSl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlkPVwiY29uZmlybS1jYW5jZWxcIlxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGluZyA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2NhbmNlbCcpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0aW5nID8gdW5kZWZpbmVkIDogaGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgaWQ9XCJjb25maXJtLWRlbGV0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RlbGV0aW5nID8gdCgnZGVsZXRpbmcnKSA6IHQoJ2NvbmZpcm0nKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICAgICA8L01vZGFsPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVNYW55O1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkRlbGV0ZU1hbnkiLCJwcm9wcyIsInBlcm1pc3Npb25zIiwiY29sbGVjdGlvblBlcm1pc3Npb25zIiwicmVzZXRQYXJhbXMiLCJjb2xsZWN0aW9uIiwic2x1ZyIsImxhYmVscyIsInBsdXJhbCIsInVzZUF1dGgiLCJ1c2VDb25maWciLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZGFsIiwidXNlU2VsZWN0aW9uIiwic2VsZWN0QWxsIiwiY291bnQiLCJnZXRRdWVyeVBhcmFtcyIsInRvZ2dsZUFsbCIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJ1c2VTdGF0ZSIsImRlbGV0aW5nIiwic2V0RGVsZXRpbmciLCJjb2xsZWN0aW9ucyIsImhhc0RlbGV0ZVBlcm1pc3Npb24iLCJkZWxldGUiLCJwZXJtaXNzaW9uIiwibW9kYWxTbHVnIiwiYWRkRGVmYXVsdEVycm9yIiwidXNlQ2FsbGJhY2siLCJ0b2FzdCIsImVycm9yIiwiaGFuZGxlRGVsZXRlIiwicmVxdWVzdHMiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJ0aGVuIiwicmVzIiwianNvbiIsImUiLCJzdGF0dXMiLCJzdWNjZXNzIiwibWVzc2FnZSIsImF1dG9DbG9zZSIsInBhZ2UiLCJ1bmRlZmluZWQiLCJlcnJvcnMiLCJTZWxlY3RBbGxTdGF0dXMiLCJOb25lIiwiUmVhY3QiLCJGcmFnbWVudCIsIlBpbGwiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiTW9kYWwiLCJNaW5pbWFsVGVtcGxhdGUiLCJoMSIsInAiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwiQnV0dG9uIiwiaWQiLCJidXR0b25TdHlsZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBdUhBOzs7ZUFBQTs7OzZEQXZINkM7NkJBQ3ZCO3FCQUNVOzRCQUNEO3NCQUNMOzZEQUNQOzhEQUNTO21CQUNIO2lDQUVxQjs4QkFDZjsyREFDZDtvQkFDTztRQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGFBQThCLFNBQUNDO1FBa0JMQywwQkFBQUEsY0FDRkMsK0JBQUFBO0lBbEI1QixJQUNFQyxjQU9FSCxNQVBGRyxhQUNZLE1BTVZILE1BTkZJLG1CQUFZLGlCQUtSLENBQUMsSUFMTyxLQUNWQyxZQUFBQSxNQUNBQyxBQUNFQyxjQURGRCxPQUNFQztJQUtOLElBQU0sQUFBRU4sY0FBZ0JPLElBQUFBLGFBQU8sSUFBdkJQO0lBQ1IsSUFBdUNRLGFBQUFBLElBQUFBLGlCQUFTLEtBQXhDQyxZQUErQkQsV0FBL0JDLFdBQVdDLEFBQVVDLE1BQVVILFdBQXBCRSxPQUFVQztJQUM3QixJQUFNLEFBQUVDLGNBQWdCQyxJQUFBQSxlQUFRLElBQXhCRDtJQUNSLElBQXdERSxnQkFBQUEsSUFBQUEsK0JBQVksS0FBNURDLFlBQWdERCxjQUFoREMsV0FBV0MsUUFBcUNGLGNBQXJDRSxPQUFPQyxpQkFBOEJILGNBQTlCRyxnQkFBZ0JDLFlBQWNKLGNBQWRJO0lBQzFDLElBQW9CQyxrQkFBQUEsSUFBQUEsNEJBQWMsRUFBQyxZQUEzQkMsSUFB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