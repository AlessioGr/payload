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
var baseClass = "publish-many";
var PublishMany = function(props) {
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
    var modalSlug = "publish-".concat(slug);
    var addDefaultError = (0, _react.useCallback)(function() {
        _reacttoastify.toast.error(t("error:unknown"));
    }, [
        t
    ]);
    var handlePublish = (0, _react.useCallback)(function() {
        setSubmitted(true);
        _api.requests.patch("".concat(serverURL).concat(api, "/").concat(slug).concat(getQueryParams({
            _status: {
                not_equals: "published"
            }
        })), {
            body: JSON.stringify({
                _status: "published"
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
    }, t("publish")), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        slug: modalSlug,
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: "".concat(baseClass, "__template")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("confirmPublish")), /*#__PURE__*/ _react.default.createElement("p", null, t("aboutToPublishSelection", {
        label: (0, _getTranslation.getTranslation)(plural, i18n)
    })), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        id: "confirm-cancel",
        buttonStyle: "secondary",
        type: "button",
        onClick: submitted ? undefined : function() {
            return toggleModal(modalSlug);
        }
    }, t("general:cancel")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        onClick: submitted ? undefined : handlePublish,
        id: "confirm-publish"
    }, submitted ? t("publishing") : t("general:confirm")))));
};
var _default = PublishMany;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1B1Ymxpc2hNYW55L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IE1pbmltYWxUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvTWluaW1hbCc7XG5pbXBvcnQgeyByZXF1ZXN0cyB9IGZyb20gJy4uLy4uLy4uL2FwaSc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU2VsZWN0QWxsU3RhdHVzLCB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9MaXN0L1NlbGVjdGlvblByb3ZpZGVyJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCBQaWxsIGZyb20gJy4uL1BpbGwnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncHVibGlzaC1tYW55JztcblxuY29uc3QgUHVibGlzaE1hbnk6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcmVzZXRQYXJhbXMsXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgc2x1ZyxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBwbHVyYWwsXG4gICAgICB9LFxuICAgICAgdmVyc2lvbnMsXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcGVybWlzc2lvbnMgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyB0b2dnbGVNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuICBjb25zdCB7IHNlbGVjdEFsbCwgY291bnQsIGdldFF1ZXJ5UGFyYW1zIH0gPSB1c2VTZWxlY3Rpb24oKTtcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb2xsZWN0aW9uUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltzbHVnXTtcbiAgY29uc3QgaGFzUGVybWlzc2lvbiA9IGNvbGxlY3Rpb25QZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uO1xuXG4gIGNvbnN0IG1vZGFsU2x1ZyA9IGBwdWJsaXNoLSR7c2x1Z31gO1xuXG4gIGNvbnN0IGFkZERlZmF1bHRFcnJvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB0b2FzdC5lcnJvcih0KCdlcnJvcjp1bmtub3duJykpO1xuICB9LCBbdF0pO1xuXG4gIGNvbnN0IGhhbmRsZVB1Ymxpc2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICAgIHJlcXVlc3RzLnBhdGNoKGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfSR7Z2V0UXVlcnlQYXJhbXMoeyBfc3RhdHVzOiB7IG5vdF9lcXVhbHM6ICdwdWJsaXNoZWQnIH0gfSl9YCwge1xuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBfc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgIH0sXG4gICAgfSkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKHQoJ2dlbmVyYWw6dXBkYXRlZFN1Y2Nlc3NmdWxseScpKTtcbiAgICAgICAgICByZXNldFBhcmFtcyh7IHBhZ2U6IHNlbGVjdEFsbCA/IDEgOiB1bmRlZmluZWQgfSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICAgICAgICBqc29uLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZERlZmF1bHRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGFkZERlZmF1bHRFcnJvcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbYWRkRGVmYXVsdEVycm9yLCBhcGksIGdldFF1ZXJ5UGFyYW1zLCBpMThuLmxhbmd1YWdlLCBtb2RhbFNsdWcsIHJlc2V0UGFyYW1zLCBzZWxlY3RBbGwsIHNlcnZlclVSTCwgc2x1ZywgdCwgdG9nZ2xlTW9kYWxdKTtcblxuICBpZiAoISh2ZXJzaW9ucz8uZHJhZnRzKSB8fCAoc2VsZWN0QWxsID09PSBTZWxlY3RBbGxTdGF0dXMuTm9uZSB8fCAhaGFzUGVybWlzc2lvbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBpbGxcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGVgfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKTtcbiAgICAgICAgICB0b2dnbGVNb2RhbChtb2RhbFNsdWcpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dCgncHVibGlzaCcpfVxuICAgICAgPC9QaWxsPlxuICAgICAgPE1vZGFsXG4gICAgICAgIHNsdWc9e21vZGFsU2x1Z31cbiAgICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICA+XG4gICAgICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190ZW1wbGF0ZWB9PlxuICAgICAgICAgIDxoMT57dCgnY29uZmlybVB1Ymxpc2gnKX08L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge3QoJ2Fib3V0VG9QdWJsaXNoU2VsZWN0aW9uJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24ocGx1cmFsLCBpMThuKSB9KX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJjb25maXJtLWNhbmNlbFwiXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdHRlZCA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17c3VibWl0dGVkID8gdW5kZWZpbmVkIDogaGFuZGxlUHVibGlzaH1cbiAgICAgICAgICAgIGlkPVwiY29uZmlybS1wdWJsaXNoXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3VibWl0dGVkID8gdCgncHVibGlzaGluZycpIDogdCgnZ2VuZXJhbDpjb25maXJtJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHVibGlzaE1hbnk7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiUHVibGlzaE1hbnkiLCJwcm9wcyIsInBlcm1pc3Npb25zIiwiY29sbGVjdGlvblBlcm1pc3Npb25zIiwidmVyc2lvbnMiLCJyZXNldFBhcmFtcyIsImNvbGxlY3Rpb24iLCJzbHVnIiwibGFiZWxzIiwicGx1cmFsIiwidXNlQ29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwidXNlQXV0aCIsInRvZ2dsZU1vZGFsIiwidXNlTW9kYWwiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwidXNlU2VsZWN0aW9uIiwic2VsZWN0QWxsIiwiY291bnQiLCJnZXRRdWVyeVBhcmFtcyIsInVzZVN0YXRlIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiY29sbGVjdGlvbnMiLCJoYXNQZXJtaXNzaW9uIiwidXBkYXRlIiwicGVybWlzc2lvbiIsIm1vZGFsU2x1ZyIsImFkZERlZmF1bHRFcnJvciIsInVzZUNhbGxiYWNrIiwidG9hc3QiLCJlcnJvciIsImhhbmRsZVB1Ymxpc2giLCJyZXF1ZXN0cyIsInBhdGNoIiwiX3N0YXR1cyIsIm5vdF9lcXVhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJsYW5ndWFnZSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZSIsInN0YXR1cyIsInN1Y2Nlc3MiLCJwYWdlIiwidW5kZWZpbmVkIiwiZXJyb3JzIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJkcmFmdHMiLCJTZWxlY3RBbGxTdGF0dXMiLCJOb25lIiwiUmVhY3QiLCJGcmFnbWVudCIsIlBpbGwiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiTW9kYWwiLCJNaW5pbWFsVGVtcGxhdGUiLCJoMSIsInAiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwiQnV0dG9uIiwiaWQiLCJidXR0b25TdHlsZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMEhBOzs7ZUFBQTs7OzZEQTFINkM7NkJBQ3ZCO3FCQUNVOzRCQUNEO3NCQUNMOzZEQUNQOzhEQUNTO21CQUNIO2lDQUVxQjs4QkFDZjsyREFDZDtvQkFDTztRQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGNBQStCLFNBQUNDO1FBbUJOQywwQkFBQUEsY0FDUkMsK0JBQUFBLHdCQXdDaEJDO0lBM0ROLElBQ0VDLGNBUUVKLE1BUkZJLGFBQ1ksTUFPVkosTUFQRkssbUJBQVksaUJBTVIsQ0FBQyxJQU5PLEtBQ1ZDLFlBQUFBLE1BQ0FDLEFBQ0VDLGNBREZELE9BQ0VDLFFBRUZMLGdCQUFBQTtJQUlKLElBQXVDTSxhQUFBQSxJQUFBQSxpQkFBUyxLQUF4Q0MsWUFBK0JELFdBQS9CQyxXQUFXQyxBQUFVQyxNQUFVSCxXQUFwQkUsT0FBVUM7SUFDN0IsSUFBTSxBQUFFWCxjQUFnQlksSUFBQUEsYUFBTyxJ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