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
var _reactrouterdom = require("react-router-dom");
var _reacttoastify = require("react-toastify");
var _modal = require("@faceless-ui/modal");
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _api = require("../../../api");
var _context = require("../../forms/Form/context");
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _getTranslation = require("../../../../utilities/getTranslation");
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
var baseClass = "duplicate";
var Duplicate = function(param) {
    var slug = param.slug, collection = param.collection, id = param.id;
    var push = (0, _reactrouterdom.useHistory)().push;
    var modified = (0, _context.useFormModified)();
    var toggleModal = (0, _modal.useModal)().toggleModal;
    var setModified = (0, _context.useForm)().setModified;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api, localization = _useConfig.localization;
    var _useConfig1 = (0, _Config.useConfig)(), admin = _useConfig1.routes.admin;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), hasClicked = _useState[0], setHasClicked = _useState[1];
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var modalSlug = "duplicate-".concat(id);
    var handleClick = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        var override, create, duplicateID, abort;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    override = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : false;
                    setHasClicked(true);
                    if (modified && !override) {
                        toggleModal(modalSlug);
                        return [
                            2
                        ];
                    }
                    create = function() {
                        var _ref = _async_to_generator(function() {
                            var locale, _collection_admin_hooks, response, data, result, json;
                            var _arguments = arguments;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        locale = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : "";
                                        return [
                                            4,
                                            _api.requests.get("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id), {
                                                params: {
                                                    locale: locale,
                                                    depth: 0
                                                },
                                                headers: {
                                                    "Accept-Language": i18n.language
                                                }
                                            })
                                        ];
                                    case 1:
                                        response = _state.sent();
                                        return [
                                            4,
                                            response.json()
                                        ];
                                    case 2:
                                        data = _state.sent();
                                        if ("createdAt" in data) delete data.createdAt;
                                        if ("updatedAt" in data) delete data.updatedAt;
                                        if (!(typeof ((_collection_admin_hooks = collection.admin.hooks) === null || _collection_admin_hooks === void 0 ? void 0 : _collection_admin_hooks.beforeDuplicate) === "function")) return [
                                            3,
                                            4
                                        ];
                                        return [
                                            4,
                                            collection.admin.hooks.beforeDuplicate({
                                                data: data,
                                                locale: locale
                                            })
                                        ];
                                    case 3:
                                        data = _state.sent();
                                        _state.label = 4;
                                    case 4:
                                        return [
                                            4,
                                            _api.requests.post("".concat(serverURL).concat(api, "/").concat(slug), {
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    "Accept-Language": i18n.language
                                                },
                                                body: JSON.stringify(data)
                                            })
                                        ];
                                    case 5:
                                        result = _state.sent();
                                        return [
                                            4,
                                            result.json()
                                        ];
                                    case 6:
                                        json = _state.sent();
                                        if (result.status === 201) {
                                            return [
                                                2,
                                                json.doc.id
                                            ];
                                        }
                                        json.errors.forEach(function(error) {
                                            return _reacttoastify.toast.error(error.message);
                                        });
                                        return [
                                            2,
                                            null
                                        ];
                                }
                            });
                        });
                        return function create() {
                            return _ref.apply(this, arguments);
                        };
                    }();
                    if (!localization) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        create(localization.defaultLocale)
                    ];
                case 1:
                    duplicateID = _state.sent();
                    abort = false;
                    localization.localeCodes.filter(function(locale) {
                        return locale !== localization.defaultLocale;
                    }).forEach(function() {
                        var _ref = _async_to_generator(function(locale) {
                            var _collection_admin_hooks, res, localizedDoc, patchResult, json;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        if (!!abort) return [
                                            3,
                                            7
                                        ];
                                        return [
                                            4,
                                            _api.requests.get("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id), {
                                                params: {
                                                    locale: locale,
                                                    depth: 0
                                                },
                                                headers: {
                                                    "Accept-Language": i18n.language
                                                }
                                            })
                                        ];
                                    case 1:
                                        res = _state.sent();
                                        return [
                                            4,
                                            res.json()
                                        ];
                                    case 2:
                                        localizedDoc = _state.sent();
                                        if (!(typeof ((_collection_admin_hooks = collection.admin.hooks) === null || _collection_admin_hooks === void 0 ? void 0 : _collection_admin_hooks.beforeDuplicate) === "function")) return [
                                            3,
                                            4
                                        ];
                                        return [
                                            4,
                                            collection.admin.hooks.beforeDuplicate({
                                                data: localizedDoc,
                                                locale: locale
                                            })
                                        ];
                                    case 3:
                                        localizedDoc = _state.sent();
                                        _state.label = 4;
                                    case 4:
                                        return [
                                            4,
                                            _api.requests.patch("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(duplicateID, "?locale=").concat(locale), {
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    "Accept-Language": i18n.language
                                                },
                                                body: JSON.stringify(localizedDoc)
                                            })
                                        ];
                                    case 5:
                                        patchResult = _state.sent();
                                        if (!(patchResult.status > 400)) return [
                                            3,
                                            7
                                        ];
                                        abort = true;
                                        return [
                                            4,
                                            patchResult.json()
                                        ];
                                    case 6:
                                        json = _state.sent();
                                        json.errors.forEach(function(error) {
                                            return _reacttoastify.toast.error(error.message);
                                        });
                                        _state.label = 7;
                                    case 7:
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(locale) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    if (!abort) return [
                        3,
                        3
                    ];
                    // delete the duplicate doc to prevent incomplete
                    return [
                        4,
                        _api.requests.delete("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id), {
                            headers: {
                                "Accept-Language": i18n.language
                            }
                        })
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    return [
                        3,
                        6
                    ];
                case 4:
                    return [
                        4,
                        create()
                    ];
                case 5:
                    duplicateID = _state.sent();
                    _state.label = 6;
                case 6:
                    _reacttoastify.toast.success(t("successfullyDuplicated", {
                        label: (0, _getTranslation.getTranslation)(collection.labels.singular, i18n)
                    }), {
                        autoClose: 3000
                    });
                    setModified(false);
                    setTimeout(function() {
                        push({
                            pathname: "".concat(admin, "/collections/").concat(slug, "/").concat(duplicateID)
                        });
                    }, 10);
                    return [
                        2
                    ];
            }
        });
    }), [
        modified,
        localization,
        t,
        i18n,
        collection,
        setModified,
        toggleModal,
        modalSlug,
        serverURL,
        api,
        slug,
        id,
        push,
        admin
    ]);
    var confirm = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setHasClicked(false);
                    return [
                        4,
                        handleClick(true)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }), [
        handleClick
    ]);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        id: "action-duplicate",
        buttonStyle: "none",
        className: baseClass,
        onClick: function() {
            return handleClick(false);
        }
    }, t("duplicate")), modified && hasClicked && /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        slug: modalSlug,
        className: "".concat(baseClass, "__modal")
    }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: "".concat(baseClass, "__modal-template")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("confirmDuplication")), /*#__PURE__*/ _react.default.createElement("p", null, t("unsavedChangesDuplicate")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        id: "confirm-cancel",
        buttonStyle: "secondary",
        type: "button",
        onClick: function() {
            return toggleModal(modalSlug);
        }
    }, t("cancel")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        onClick: confirm,
        id: "confirm-duplicate"
    }, t("duplicateWithoutSaving")))));
};
var _default = Duplicate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0R1cGxpY2F0ZURvY3VtZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IHJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYXBpJztcbmltcG9ydCB7IHVzZUZvcm0sIHVzZUZvcm1Nb2RpZmllZCB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZHVwbGljYXRlJztcblxuY29uc3QgRHVwbGljYXRlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzbHVnLCBjb2xsZWN0aW9uLCBpZCB9KSA9PiB7XG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCBtb2RpZmllZCA9IHVzZUZvcm1Nb2RpZmllZCgpO1xuICBjb25zdCB7IHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpO1xuICBjb25zdCB7IHNldE1vZGlmaWVkIH0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IHsgc2VydmVyVVJMLCByb3V0ZXM6IHsgYXBpIH0sIGxvY2FsaXphdGlvbiB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcm91dGVzOiB7IGFkbWluIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCBbaGFzQ2xpY2tlZCwgc2V0SGFzQ2xpY2tlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICBjb25zdCBtb2RhbFNsdWcgPSBgZHVwbGljYXRlLSR7aWR9YDtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKGFzeW5jIChvdmVycmlkZSA9IGZhbHNlKSA9PiB7XG4gICAgc2V0SGFzQ2xpY2tlZCh0cnVlKTtcblxuICAgIGlmIChtb2RpZmllZCAmJiAhb3ZlcnJpZGUpIHtcbiAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlID0gYXN5bmMgKGxvY2FsZSA9ICcnKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vJHtpZH1gLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgaWYgKCdjcmVhdGVkQXQnIGluIGRhdGEpIGRlbGV0ZSBkYXRhLmNyZWF0ZWRBdDtcbiAgICAgIGlmICgndXBkYXRlZEF0JyBpbiBkYXRhKSBkZWxldGUgZGF0YS51cGRhdGVkQXQ7XG5cbiAgICAgIGlmICh0eXBlb2YgY29sbGVjdGlvbi5hZG1pbi5ob29rcz8uYmVmb3JlRHVwbGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRhdGEgPSBhd2FpdCBjb2xsZWN0aW9uLmFkbWluLmhvb2tzLmJlZm9yZUR1cGxpY2F0ZSh7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBsb2NhbGUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcblxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICByZXR1cm4ganNvbi5kb2MuaWQ7XG4gICAgICB9XG4gICAgICBqc29uLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGxldCBkdXBsaWNhdGVJRDtcbiAgICBpZiAobG9jYWxpemF0aW9uKSB7XG4gICAgICBkdXBsaWNhdGVJRCA9IGF3YWl0IGNyZWF0ZShsb2NhbGl6YXRpb24uZGVmYXVsdExvY2FsZSk7XG4gICAgICBsZXQgYWJvcnQgPSBmYWxzZTtcbiAgICAgIGxvY2FsaXphdGlvbi5sb2NhbGVDb2Rlc1xuICAgICAgICAuZmlsdGVyKChsb2NhbGUpID0+IGxvY2FsZSAhPT0gbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGUpXG4gICAgICAgIC5mb3JFYWNoKGFzeW5jIChsb2NhbGUpID0+IHtcbiAgICAgICAgICBpZiAoIWFib3J0KSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0cy5nZXQoYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9LyR7aWR9YCwge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGxvY2FsaXplZERvYyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29sbGVjdGlvbi5hZG1pbi5ob29rcz8uYmVmb3JlRHVwbGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGxvY2FsaXplZERvYyA9IGF3YWl0IGNvbGxlY3Rpb24uYWRtaW4uaG9va3MuYmVmb3JlRHVwbGljYXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBsb2NhbGl6ZWREb2MsXG4gICAgICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGF0Y2hSZXN1bHQgPSBhd2FpdCByZXF1ZXN0cy5wYXRjaChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vJHtkdXBsaWNhdGVJRH0/bG9jYWxlPSR7bG9jYWxlfWAsIHtcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxvY2FsaXplZERvYyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwYXRjaFJlc3VsdC5zdGF0dXMgPiA0MDApIHtcbiAgICAgICAgICAgICAgYWJvcnQgPSB0cnVlO1xuICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcGF0Y2hSZXN1bHQuanNvbigpO1xuICAgICAgICAgICAgICBqc29uLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICBpZiAoYWJvcnQpIHtcbiAgICAgICAgLy8gZGVsZXRlIHRoZSBkdXBsaWNhdGUgZG9jIHRvIHByZXZlbnQgaW5jb21wbGV0ZVxuICAgICAgICBhd2FpdCByZXF1ZXN0cy5kZWxldGUoYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9LyR7aWR9YCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkdXBsaWNhdGVJRCA9IGF3YWl0IGNyZWF0ZSgpO1xuICAgIH1cblxuICAgIHRvYXN0LnN1Y2Nlc3ModCgnc3VjY2Vzc2Z1bGx5RHVwbGljYXRlZCcsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKSB9KSxcbiAgICAgIHsgYXV0b0Nsb3NlOiAzMDAwIH0pO1xuXG4gICAgc2V0TW9kaWZpZWQoZmFsc2UpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke3NsdWd9LyR7ZHVwbGljYXRlSUR9YCxcbiAgICAgIH0pO1xuICAgIH0sIDEwKTtcbiAgfSwgW21vZGlmaWVkLCBsb2NhbGl6YXRpb24sIHQsIGkxOG4sIGNvbGxlY3Rpb24sIHNldE1vZGlmaWVkLCB0b2dnbGVNb2RhbCwgbW9kYWxTbHVnLCBzZXJ2ZXJVUkwsIGFwaSwgc2x1ZywgaWQsIHB1c2gsIGFkbWluXSk7XG5cbiAgY29uc3QgY29uZmlybSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBzZXRIYXNDbGlja2VkKGZhbHNlKTtcbiAgICBhd2FpdCBoYW5kbGVDbGljayh0cnVlKTtcbiAgfSwgW2hhbmRsZUNsaWNrXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwiYWN0aW9uLWR1cGxpY2F0ZVwiXG4gICAgICAgIGJ1dHRvblN0eWxlPVwibm9uZVwiXG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhmYWxzZSl9XG4gICAgICA+XG4gICAgICAgIHt0KCdkdXBsaWNhdGUnKX1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAge21vZGlmaWVkICYmIGhhc0NsaWNrZWQgJiYgKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBzbHVnPXttb2RhbFNsdWd9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tb2RhbGB9XG4gICAgICAgID5cbiAgICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbW9kYWwtdGVtcGxhdGVgfT5cbiAgICAgICAgICAgIDxoMT57dCgnY29uZmlybUR1cGxpY2F0aW9uJyl9PC9oMT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dCgndW5zYXZlZENoYW5nZXNEdXBsaWNhdGUnKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgaWQ9XCJjb25maXJtLWNhbmNlbFwiXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0KCdjYW5jZWwnKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtjb25maXJtfVxuICAgICAgICAgICAgICBpZD1cImNvbmZpcm0tZHVwbGljYXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3QoJ2R1cGxpY2F0ZVdpdGhvdXRTYXZpbmcnKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgKX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHVwbGljYXRlO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkR1cGxpY2F0ZSIsInNsdWciLCJjb2xsZWN0aW9uIiwiaWQiLCJwdXNoIiwidXNlSGlzdG9yeSIsIm1vZGlmaWVkIiwidXNlRm9ybU1vZGlmaWVkIiwidG9nZ2xlTW9kYWwiLCJ1c2VNb2RhbCIsInNldE1vZGlmaWVkIiwidXNlRm9ybSIsInVzZUNvbmZpZyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsImxvY2FsaXphdGlvbiIsImFkbWluIiwidXNlU3RhdGUiLCJoYXNDbGlja2VkIiwic2V0SGFzQ2xpY2tlZCIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJtb2RhbFNsdWciLCJoYW5kbGVDbGljayIsInVzZUNhbGxiYWNrIiwib3ZlcnJpZGUiLCJjcmVhdGUiLCJkdXBsaWNhdGVJRCIsImFib3J0IiwibG9jYWxlIiwicmVzcG9uc2UiLCJkYXRhIiwicmVzdWx0IiwianNvbiIsInJlcXVlc3RzIiwiZ2V0IiwicGFyYW1zIiwiZGVwdGgiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJob29rcyIsImJlZm9yZUR1cGxpY2F0ZSIsInBvc3QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImRvYyIsImVycm9ycyIsImZvckVhY2giLCJlcnJvciIsInRvYXN0IiwibWVzc2FnZSIsImRlZmF1bHRMb2NhbGUiLCJsb2NhbGVDb2RlcyIsImZpbHRlciIsInJlcyIsImxvY2FsaXplZERvYyIsInBhdGNoUmVzdWx0IiwicGF0Y2giLCJkZWxldGUiLCJzdWNjZXNzIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwiYXV0b0Nsb3NlIiwic2V0VGltZW91dCIsInBhdGhuYW1lIiwiY29uZmlybSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJNb2RhbCIsIk1pbmltYWxUZW1wbGF0ZSIsImgxIiwicCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBeUxBOzs7ZUFBQTs7OzZEQXpMNkM7OEJBQ2xCOzZCQUNMO3FCQUNVOzRCQUNEO3NCQUNMOzZEQUVQO21CQUNNO3VCQUNnQjs4REFDYjs4QkFDRztRQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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