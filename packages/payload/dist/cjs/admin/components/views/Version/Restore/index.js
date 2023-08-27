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
var _reactrouterdom = require("react-router-dom");
var _reacti18next = require("react-i18next");
var _Config = require("../../../utilities/Config");
var _ = require("../../..");
var _api = require("../../../../api");
var _getTranslation = require("../../../../../utilities/getTranslation");
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
var baseClass = "restore-version";
var modalSlug = "restore-version";
var Restore = function(param) {
    var collection = param.collection, global = param.global, className = param.className, versionID = param.versionID, originalDocID = param.originalDocID, versionDate = param.versionDate;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, api = _useConfig_routes.api, admin = _useConfig_routes.admin;
    var history = (0, _reactrouterdom.useHistory)();
    var toggleModal = (0, _modal.useModal)().toggleModal;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), processing = _useState[0], setProcessing = _useState[1];
    var _useTranslation = (0, _reacti18next.useTranslation)("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var fetchURL = "".concat(serverURL).concat(api);
    var redirectURL;
    var restoreMessage;
    if (collection) {
        fetchURL = "".concat(fetchURL, "/").concat(collection.slug, "/versions/").concat(versionID);
        redirectURL = "".concat(admin, "/collections/").concat(collection.slug, "/").concat(originalDocID);
        restoreMessage = t("aboutToRestore", {
            label: (0, _getTranslation.getTranslation)(collection.labels.singular, i18n),
            versionDate: versionDate
        });
    }
    if (global) {
        fetchURL = "".concat(fetchURL, "/globals/").concat(global.slug, "/versions/").concat(versionID);
        redirectURL = "".concat(admin, "/globals/").concat(global.slug);
        restoreMessage = t("aboutToRestoreGlobal", {
            label: (0, _getTranslation.getTranslation)(global.label, i18n),
            versionDate: versionDate
        });
    }
    var handleRestore = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        var res, json;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setProcessing(true);
                    return [
                        4,
                        _api.requests.post(fetchURL, {
                            headers: {
                                "Accept-Language": i18n.language
                            }
                        })
                    ];
                case 1:
                    res = _state.sent();
                    if (!(res.status === 200)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        res.json()
                    ];
                case 2:
                    json = _state.sent();
                    _reacttoastify.toast.success(json.message);
                    history.push(redirectURL);
                    return [
                        3,
                        4
                    ];
                case 3:
                    _reacttoastify.toast.error(t("problemRestoringVersion"));
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    }), [
        fetchURL,
        history,
        redirectURL,
        t,
        i18n
    ]);
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(_.Pill, {
        onClick: function() {
            return toggleModal(modalSlug);
        },
        className: [
            baseClass,
            className
        ].filter(Boolean).join(" ")
    }, t("restoreThisVersion")), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        slug: modalSlug,
        className: "".concat(baseClass, "__modal")
    }, /*#__PURE__*/ _react.default.createElement(_.MinimalTemplate, {
        className: "".concat(baseClass, "__modal-template")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("confirmVersionRestoration")), /*#__PURE__*/ _react.default.createElement("p", null, restoreMessage), /*#__PURE__*/ _react.default.createElement(_.Button, {
        buttonStyle: "secondary",
        type: "button",
        onClick: processing ? undefined : function() {
            return toggleModal(modalSlug);
        }
    }, t("general:cancel")), /*#__PURE__*/ _react.default.createElement(_.Button, {
        onClick: processing ? undefined : handleRestore
    }, processing ? t("restoring") : t("general:confirm")))));
};
var _default = Restore;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVzdG9yZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IE1vZGFsLCB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyBCdXR0b24sIE1pbmltYWxUZW1wbGF0ZSwgUGlsbCB9IGZyb20gJy4uLy4uLy4uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyByZXF1ZXN0cyB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaSc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3Jlc3RvcmUtdmVyc2lvbic7XG5jb25zdCBtb2RhbFNsdWcgPSAncmVzdG9yZS12ZXJzaW9uJztcblxuY29uc3QgUmVzdG9yZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29sbGVjdGlvbiwgZ2xvYmFsLCBjbGFzc05hbWUsIHZlcnNpb25JRCwgb3JpZ2luYWxEb2NJRCwgdmVyc2lvbkRhdGUgfSkgPT4ge1xuICBjb25zdCB7IHNlcnZlclVSTCwgcm91dGVzOiB7IGFwaSwgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHsgdG9nZ2xlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IFtwcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuXG4gIGxldCBmZXRjaFVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX1gO1xuICBsZXQgcmVkaXJlY3RVUkw6IHN0cmluZztcbiAgbGV0IHJlc3RvcmVNZXNzYWdlOiBzdHJpbmc7XG5cbiAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICBmZXRjaFVSTCA9IGAke2ZldGNoVVJMfS8ke2NvbGxlY3Rpb24uc2x1Z30vdmVyc2lvbnMvJHt2ZXJzaW9uSUR9YDtcbiAgICByZWRpcmVjdFVSTCA9IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vJHtvcmlnaW5hbERvY0lEfWA7XG4gICAgcmVzdG9yZU1lc3NhZ2UgPSB0KCdhYm91dFRvUmVzdG9yZScsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKSwgdmVyc2lvbkRhdGUgfSk7XG4gIH1cblxuICBpZiAoZ2xvYmFsKSB7XG4gICAgZmV0Y2hVUkwgPSBgJHtmZXRjaFVSTH0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS92ZXJzaW9ucy8ke3ZlcnNpb25JRH1gO1xuICAgIHJlZGlyZWN0VVJMID0gYCR7YWRtaW59L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z31gO1xuICAgIHJlc3RvcmVNZXNzYWdlID0gdCgnYWJvdXRUb1Jlc3RvcmVHbG9iYWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihnbG9iYWwubGFiZWwsIGkxOG4pLCB2ZXJzaW9uRGF0ZSB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc3RvcmUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgc2V0UHJvY2Vzc2luZyh0cnVlKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3RzLnBvc3QoZmV0Y2hVUkwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICB0b2FzdC5zdWNjZXNzKGpzb24ubWVzc2FnZSk7XG4gICAgICBoaXN0b3J5LnB1c2gocmVkaXJlY3RVUkwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2FzdC5lcnJvcih0KCdwcm9ibGVtUmVzdG9yaW5nVmVyc2lvbicpKTtcbiAgICB9XG4gIH0sIFtmZXRjaFVSTCwgaGlzdG9yeSwgcmVkaXJlY3RVUkwsIHQsIGkxOG5dKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxQaWxsXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgIGNsYXNzTmFtZT17W2Jhc2VDbGFzcywgY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgPlxuICAgICAgICB7dCgncmVzdG9yZVRoaXNWZXJzaW9uJyl9XG4gICAgICA8L1BpbGw+XG4gICAgICA8TW9kYWxcbiAgICAgICAgc2x1Zz17bW9kYWxTbHVnfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vZGFsYH1cbiAgICAgID5cbiAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vZGFsLXRlbXBsYXRlYH0+XG4gICAgICAgICAgPGgxPnt0KCdjb25maXJtVmVyc2lvblJlc3RvcmF0aW9uJyl9PC9oMT5cbiAgICAgICAgICA8cD57cmVzdG9yZU1lc3NhZ2V9PC9wPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17cHJvY2Vzc2luZyA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17cHJvY2Vzc2luZyA/IHVuZGVmaW5lZCA6IGhhbmRsZVJlc3RvcmV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Byb2Nlc3NpbmcgPyB0KCdyZXN0b3JpbmcnKSA6IHQoJ2dlbmVyYWw6Y29uZmlybScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01pbmltYWxUZW1wbGF0ZT5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RvcmU7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwibW9kYWxTbHVnIiwiUmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJjbGFzc05hbWUiLCJ2ZXJzaW9uSUQiLCJvcmlnaW5hbERvY0lEIiwidmVyc2lvbkRhdGUiLCJ1c2VDb25maWciLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJhZG1pbiIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwidG9nZ2xlTW9kYWwiLCJ1c2VNb2RhbCIsInVzZVN0YXRlIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwiZmV0Y2hVUkwiLCJyZWRpcmVjdFVSTCIsInJlc3RvcmVNZXNzYWdlIiwic2x1ZyIsImxhYmVsIiwiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbHMiLCJzaW5ndWxhciIsImhhbmRsZVJlc3RvcmUiLCJ1c2VDYWxsYmFjayIsInJlcyIsImpzb24iLCJyZXF1ZXN0cyIsInBvc3QiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwicHVzaCIsImVycm9yIiwiRnJhZ21lbnQiLCJQaWxsIiwib25DbGljayIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiTW9kYWwiLCJNaW5pbWFsVGVtcGxhdGUiLCJoMSIsInAiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsInR5cGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMEZBOzs7ZUFBQTs7OzZEQTFGdUQ7NkJBQ2pDO3FCQUNVOzhCQUNMOzRCQUNJO3NCQUNMO2dCQUNvQjttQkFFckI7OEJBQ007UUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFDbEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxVQUEyQjtRQUFHQyxtQkFBQUEsWUFBWUMsZUFBQUEsUUFBUUMsa0JBQUFBLFdBQVdDLGtCQUFBQSxXQUFXQyxzQkFBQUEsZUFBZUMsb0JBQUFBO0lBQzNGLElBQThDQyxhQUFBQSxJQUFBQSxpQkFBUyxLQUEvQ0MsWUFBc0NELFdBQXRDQywrQkFBc0NELFdBQTNCRSxRQUFVQyx3QkFBQUEsS0FBS0MsMEJBQUFBO0lBQ2xDLElBQU1DLFVBQVVDLElBQUFBLDBCQUFVO0lBQzFCLElBQU0sQUFBRUMsY0FBZ0JDLElBQUFBLGVBQVEsSUFBeEJEO0lBQ1IsSUFBb0NFLDZCQUFBQSxJQUFBQSxlQUFRLEVBQUMs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