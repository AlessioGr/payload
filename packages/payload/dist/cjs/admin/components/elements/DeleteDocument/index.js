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
var _reactrouterdom = require("react-router-dom");
var _modal = require("@faceless-ui/modal");
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _context = require("../../forms/Form/context");
var _useTitle = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useTitle"));
var _api = require("../../../api");
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
var baseClass = "delete-document";
var DeleteDocument = function(props) {
    var titleFromProps = props.title, id = props.id, buttonId = props.buttonId, collection = props.collection, tmp = props.collection, _ref = tmp === void 0 ? {} : tmp, slug = _ref.slug, tmp1 = _ref.labels, singular = (tmp1 === void 0 ? {} : tmp1).singular;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, api = _useConfig_routes.api, admin = _useConfig_routes.admin;
    var setModified = (0, _context.useForm)().setModified;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), deleting = _useState[0], setDeleting = _useState[1];
    var toggleModal = (0, _modal.useModal)().toggleModal;
    var history = (0, _reactrouterdom.useHistory)();
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var title = (0, _useTitle.default)(collection);
    var titleToRender = titleFromProps || title;
    var modalSlug = "delete-".concat(id);
    var addDefaultError = (0, _react.useCallback)(function() {
        _reacttoastify.toast.error(t("error:deletingTitle", {
            title: title
        }));
    }, [
        t,
        title
    ]);
    var handleDelete = (0, _react.useCallback)(function() {
        setDeleting(true);
        setModified(false);
        _api.requests.delete("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id), {
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
                            if (res.status < 400) {
                                toggleModal(modalSlug);
                                _reacttoastify.toast.success(t("titleDeleted", {
                                    label: (0, _getTranslation.getTranslation)(singular, i18n),
                                    title: title
                                }));
                                return [
                                    2,
                                    history.push("".concat(admin, "/collections/").concat(slug))
                                ];
                            }
                            toggleModal(modalSlug);
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
        setModified,
        serverURL,
        api,
        slug,
        id,
        toggleModal,
        modalSlug,
        t,
        singular,
        i18n,
        title,
        history,
        admin,
        addDefaultError
    ]);
    if (id) {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Button.default, {
            buttonStyle: "none",
            id: buttonId,
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
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t("confirmDeletion")), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
            i18nKey: "aboutToDelete",
            values: {
                label: (0, _getTranslation.getTranslation)(singular, i18n),
                title: titleToRender
            },
            t: t
        }, "aboutToDelete", /*#__PURE__*/ _react.default.createElement("strong", null, titleToRender))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__actions")
        }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
            id: "confirm-cancel",
            buttonStyle: "secondary",
            type: "button",
            onClick: deleting ? undefined : function() {
                return toggleModal(modalSlug);
            }
        }, t("cancel")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            onClick: deleting ? undefined : handleDelete,
            id: "confirm-delete"
        }, deleting ? t("deleting") : t("confirm"))))));
    }
    return null;
};
var _default = DeleteDocument;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RlbGV0ZURvY3VtZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgdXNlVGl0bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlVGl0bGUnO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi8uLi8uLi9hcGknO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZGVsZXRlLWRvY3VtZW50JztcblxuY29uc3QgRGVsZXRlRG9jdW1lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGU6IHRpdGxlRnJvbVByb3BzLFxuICAgIGlkLFxuICAgIGJ1dHRvbklkLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgc2x1ZyxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBzaW5ndWxhcixcbiAgICAgIH0gPSB7fSxcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHNlcnZlclVSTCwgcm91dGVzOiB7IGFwaSwgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgc2V0TW9kaWZpZWQgfSA9IHVzZUZvcm0oKTtcbiAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdG9nZ2xlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgdGl0bGUgPSB1c2VUaXRsZShjb2xsZWN0aW9uKTtcbiAgY29uc3QgdGl0bGVUb1JlbmRlciA9IHRpdGxlRnJvbVByb3BzIHx8IHRpdGxlO1xuXG4gIGNvbnN0IG1vZGFsU2x1ZyA9IGBkZWxldGUtJHtpZH1gO1xuXG4gIGNvbnN0IGFkZERlZmF1bHRFcnJvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB0b2FzdC5lcnJvcih0KCdlcnJvcjpkZWxldGluZ1RpdGxlJywgeyB0aXRsZSB9KSk7XG4gIH0sIFt0LCB0aXRsZV0pO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXREZWxldGluZyh0cnVlKTtcbiAgICBzZXRNb2RpZmllZChmYWxzZSk7XG4gICAgcmVxdWVzdHMuZGVsZXRlKGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS8ke2lkfWAsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKHQoJ3RpdGxlRGVsZXRlZCcsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKHNpbmd1bGFyLCBpMThuKSwgdGl0bGUgfSkpO1xuICAgICAgICAgIHJldHVybiBoaXN0b3J5LnB1c2goYCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7c2x1Z31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyk7XG5cbiAgICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgICAganNvbi5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGREZWZhdWx0RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBhZGREZWZhdWx0RXJyb3IoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3NldE1vZGlmaWVkLCBzZXJ2ZXJVUkwsIGFwaSwgc2x1ZywgaWQsIHRvZ2dsZU1vZGFsLCBtb2RhbFNsdWcsIHQsIHNpbmd1bGFyLCBpMThuLCB0aXRsZSwgaGlzdG9yeSwgYWRtaW4sIGFkZERlZmF1bHRFcnJvcl0pO1xuXG4gIGlmIChpZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBidXR0b25TdHlsZT1cIm5vbmVcIlxuICAgICAgICAgIGlkPXtidXR0b25JZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZWB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0RGVsZXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ2RlbGV0ZScpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgc2x1Zz17bW9kYWxTbHVnfVxuICAgICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICA+XG4gICAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RlbXBsYXRlYH0+XG4gICAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1EZWxldGlvbicpfTwvaDE+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPFRyYW5zXG4gICAgICAgICAgICAgICAgaTE4bktleT1cImFib3V0VG9EZWxldGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlcz17eyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oc2luZ3VsYXIsIGkxOG4pLCB0aXRsZTogdGl0bGVUb1JlbmRlciB9fVxuICAgICAgICAgICAgICAgIHQ9e3R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBhYm91dFRvRGVsZXRlXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZVRvUmVuZGVyfVxuICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbnNgfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybS1jYW5jZWxcIlxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGluZyA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnY2FuY2VsJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRpbmcgPyB1bmRlZmluZWQgOiBoYW5kbGVEZWxldGV9XG4gICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtLWRlbGV0ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGVsZXRpbmcgPyB0KCdkZWxldGluZycpIDogdCgnY29uZmlybScpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVEb2N1bWVudDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEZWxldGVEb2N1bWVudCIsInByb3BzIiwidGl0bGUiLCJ0aXRsZUZyb21Qcm9wcyIsImlkIiwiYnV0dG9uSWQiLCJjb2xsZWN0aW9uIiwic2x1ZyIsImxhYmVscyIsInNpbmd1bGFyIiwidXNlQ29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwiYWRtaW4iLCJzZXRNb2RpZmllZCIsInVzZUZvcm0iLCJ1c2VTdGF0ZSIsImRlbGV0aW5nIiwic2V0RGVsZXRpbmciLCJ0b2dnbGVNb2RhbCIsInVzZU1vZGFsIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwidXNlVGl0bGUiLCJ0aXRsZVRvUmVuZGVyIiwibW9kYWxTbHVnIiwiYWRkRGVmYXVsdEVycm9yIiwidXNlQ2FsbGJhY2siLCJ0b2FzdCIsImVycm9yIiwiaGFuZGxlRGVsZXRlIiwicmVxdWVzdHMiLCJkZWxldGUiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJ0aGVuIiwicmVzIiwianNvbiIsImUiLCJzdGF0dXMiLCJzdWNjZXNzIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsInB1c2giLCJlcnJvcnMiLCJmb3JFYWNoIiwibWVzc2FnZSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJNb2RhbCIsIk1pbmltYWxUZW1wbGF0ZSIsImgxIiwicCIsIlRyYW5zIiwiaTE4bktleSIsInZhbHVlcyIsInN0cm9uZyIsImRpdiIsInR5cGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBdUlBOzs7ZUFBQTs7OzZEQXZJNkM7NkJBQ3ZCOzhCQUNLO3FCQUNLOzRCQUNNO3NCQUNaOzZEQUNQOzhEQUNTO3VCQUNKOytEQUNIO21CQUNJOzhCQUVNO1FBRXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsaUJBQWtDLFNBQUNDO0lBQ3ZDLElBQ0VDLEFBQU9DLGlCQVVMRixNQVZGQyxPQUNBRSxLQVNFSCxNQVRG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