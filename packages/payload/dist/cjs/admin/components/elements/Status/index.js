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
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _ = require("../..");
var _api = require("../../../api");
var _context = require("../../forms/Form/context");
var _Locale = require("../../utilities/Locale");
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
var baseClass = "status";
var Status = function() {
    var _unpublishedVersions_docs, _unpublishedVersions, _unpublishedVersions_docs1, _unpublishedVersions1, _docPermissions_update, _docPermissions;
    var _useDocumentInfo = (0, _DocumentInfo.useDocumentInfo)(), publishedDoc = _useDocumentInfo.publishedDoc, unpublishedVersions = _useDocumentInfo.unpublishedVersions, collection = _useDocumentInfo.collection, global = _useDocumentInfo.global, id = _useDocumentInfo.id, getVersions = _useDocumentInfo.getVersions, docPermissions = _useDocumentInfo.docPermissions;
    var toggleModal = (0, _modal.useModal)().toggleModal;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), processing = _useState[0], setProcessing = _useState[1];
    var _useForm = (0, _context.useForm)(), resetForm = _useForm.reset;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var _useTranslation = (0, _reacti18next.useTranslation)("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var unPublishModalSlug = "confirm-un-publish-".concat(id);
    var revertModalSlug = "confirm-revert-".concat(id);
    var statusToRender;
    if (((_unpublishedVersions = unpublishedVersions) === null || _unpublishedVersions === void 0 ? void 0 : (_unpublishedVersions_docs = _unpublishedVersions.docs) === null || _unpublishedVersions_docs === void 0 ? void 0 : _unpublishedVersions_docs.length) > 0 && publishedDoc) {
        statusToRender = "changed";
    } else if (!publishedDoc) {
        statusToRender = "draft";
    } else if (publishedDoc && ((_unpublishedVersions1 = unpublishedVersions) === null || _unpublishedVersions1 === void 0 ? void 0 : (_unpublishedVersions_docs1 = _unpublishedVersions1.docs) === null || _unpublishedVersions_docs1 === void 0 ? void 0 : _unpublishedVersions_docs1.length) <= 1) {
        statusToRender = "published";
    }
    var performAction = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(action) {
            var url, method, body, res, data, fields, json;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setProcessing(true);
                        if (action === "unpublish") {
                            body = {
                                _status: "draft"
                            };
                        }
                        if (action === "revert") {
                            body = publishedDoc;
                        }
                        if (collection) {
                            url = "".concat(serverURL).concat(api, "/").concat(collection.slug, "/").concat(id, "?depth=0&locale=").concat(locale, "&fallback-locale=null");
                            method = "patch";
                        }
                        if (global) {
                            url = "".concat(serverURL).concat(api, "/globals/").concat(global.slug, "?depth=0&locale=").concat(locale, "&fallback-locale=null");
                            method = "post";
                        }
                        return [
                            4,
                            _api.requests[method](url, {
                                headers: {
                                    "Content-Type": "application/json",
                                    "Accept-Language": i18n.language
                                },
                                body: JSON.stringify(body)
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
                        if (global) {
                            data = json.result;
                            fields = global.fields;
                        }
                        if (collection) {
                            data = json.doc;
                            fields = collection.fields;
                        }
                        resetForm(fields, data);
                        _reacttoastify.toast.success(json.message);
                        getVersions();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        _reacttoastify.toast.error(t("error:unPublishingDocument"));
                        _state.label = 4;
                    case 4:
                        setProcessing(false);
                        if (action === "revert") {
                            toggleModal(revertModalSlug);
                        }
                        if (action === "unpublish") {
                            toggleModal(unPublishModalSlug);
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return function(action) {
            return _ref.apply(this, arguments);
        };
    }(), [
        collection,
        global,
        publishedDoc,
        serverURL,
        api,
        id,
        i18n,
        locale,
        resetForm,
        getVersions,
        t,
        toggleModal,
        revertModalSlug,
        unPublishModalSlug
    ]);
    var canUpdate = (_docPermissions = docPermissions) === null || _docPermissions === void 0 ? void 0 : (_docPermissions_update = _docPermissions.update) === null || _docPermissions_update === void 0 ? void 0 : _docPermissions_update.permission;
    if (statusToRender) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: baseClass
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__value-wrap")
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "".concat(baseClass, "__value")
        }, t(statusToRender)), canUpdate && statusToRender === "published" && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, "\xa0—\xa0", /*#__PURE__*/ _react.default.createElement(_Button.default, {
            onClick: function() {
                return toggleModal(unPublishModalSlug);
            },
            className: "".concat(baseClass, "__action"),
            buttonStyle: "none"
        }, t("unpublish")), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
            slug: unPublishModalSlug,
            className: "".concat(baseClass, "__modal")
        }, /*#__PURE__*/ _react.default.createElement(_.MinimalTemplate, {
            className: "".concat(baseClass, "__modal-template")
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t("confirmUnpublish")), /*#__PURE__*/ _react.default.createElement("p", null, t("aboutToUnpublish")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            buttonStyle: "secondary",
            type: "button",
            onClick: processing ? undefined : function() {
                return toggleModal(unPublishModalSlug);
            }
        }, t("general:cancel")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            onClick: processing ? undefined : function() {
                return performAction("unpublish");
            }
        }, t(processing ? "unpublishing" : "general:confirm"))))), canUpdate && statusToRender === "changed" && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, "\xa0—\xa0", /*#__PURE__*/ _react.default.createElement(_Button.default, {
            onClick: function() {
                return toggleModal(revertModalSlug);
            },
            className: "".concat(baseClass, "__action"),
            buttonStyle: "none"
        }, t("revertToPublished")), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
            slug: revertModalSlug,
            className: "".concat(baseClass, "__modal")
        }, /*#__PURE__*/ _react.default.createElement(_.MinimalTemplate, {
            className: "".concat(baseClass, "__modal-template")
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t("confirmRevertToSaved")), /*#__PURE__*/ _react.default.createElement("p", null, t("aboutToRevertToPublished")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            buttonStyle: "secondary",
            type: "button",
            onClick: processing ? undefined : function() {
                return toggleModal(revertModalSlug);
            }
        }, t("general:cancel")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            onClick: processing ? undefined : function() {
                return performAction("revert");
            }
        }, t(processing ? "reverting" : "general:confirm")))))));
    }
    return null;
};
var _default = Status;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1N0YXR1cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgTW9kYWwsIHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgTWluaW1hbFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi8uLi8uLi9hcGknO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3N0YXR1cyc7XG5cbmNvbnN0IFN0YXR1czogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwdWJsaXNoZWREb2MsXG4gICAgdW5wdWJsaXNoZWRWZXJzaW9ucyxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGdsb2JhbCxcbiAgICBpZCxcbiAgICBnZXRWZXJzaW9ucyxcbiAgICBkb2NQZXJtaXNzaW9ucyxcbiAgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCB7IHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpO1xuICBjb25zdCB7XG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczogeyBhcGkgfSxcbiAgfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCBbcHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgcmVzZXQ6IHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKTtcblxuICBjb25zdCB1blB1Ymxpc2hNb2RhbFNsdWcgPSBgY29uZmlybS11bi1wdWJsaXNoLSR7aWR9YDtcbiAgY29uc3QgcmV2ZXJ0TW9kYWxTbHVnID0gYGNvbmZpcm0tcmV2ZXJ0LSR7aWR9YDtcblxuICBsZXQgc3RhdHVzVG9SZW5kZXI7XG5cbiAgaWYgKHVucHVibGlzaGVkVmVyc2lvbnM/LmRvY3M/Lmxlbmd0aCA+IDAgJiYgcHVibGlzaGVkRG9jKSB7XG4gICAgc3RhdHVzVG9SZW5kZXIgPSAnY2hhbmdlZCc7XG4gIH0gZWxzZSBpZiAoIXB1Ymxpc2hlZERvYykge1xuICAgIHN0YXR1c1RvUmVuZGVyID0gJ2RyYWZ0JztcbiAgfSBlbHNlIGlmIChwdWJsaXNoZWREb2MgJiYgdW5wdWJsaXNoZWRWZXJzaW9ucz8uZG9jcz8ubGVuZ3RoIDw9IDEpIHtcbiAgICBzdGF0dXNUb1JlbmRlciA9ICdwdWJsaXNoZWQnO1xuICB9XG5cbiAgY29uc3QgcGVyZm9ybUFjdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jIChhY3Rpb246ICdyZXZlcnQnIHwgJ3VucHVibGlzaCcpID0+IHtcbiAgICBsZXQgdXJsO1xuICAgIGxldCBtZXRob2Q7XG4gICAgbGV0IGJvZHk7XG5cbiAgICBzZXRQcm9jZXNzaW5nKHRydWUpO1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gJ3VucHVibGlzaCcpIHtcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIF9zdGF0dXM6ICdkcmFmdCcsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24gPT09ICdyZXZlcnQnKSB7XG4gICAgICBib2R5ID0gcHVibGlzaGVkRG9jO1xuICAgIH1cblxuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICB1cmwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7Y29sbGVjdGlvbi5zbHVnfS8ke2lkfT9kZXB0aD0wJmxvY2FsZT0ke2xvY2FsZX0mZmFsbGJhY2stbG9jYWxlPW51bGxgO1xuICAgICAgbWV0aG9kID0gJ3BhdGNoJztcbiAgICB9XG4gICAgaWYgKGdsb2JhbCkge1xuICAgICAgdXJsID0gYCR7c2VydmVyVVJMfSR7YXBpfS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9P2RlcHRoPTAmbG9jYWxlPSR7bG9jYWxlfSZmYWxsYmFjay1sb2NhbGU9bnVsbGA7XG4gICAgICBtZXRob2QgPSAncG9zdCc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdHNbbWV0aG9kXSh1cmwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgfSk7XG5cbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBsZXQgZGF0YTtcbiAgICAgIGxldCBmaWVsZHM6IEZpZWxkW107XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICBkYXRhID0ganNvbi5yZXN1bHQ7XG4gICAgICAgIGZpZWxkcyA9IGdsb2JhbC5maWVsZHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGRhdGEgPSBqc29uLmRvYztcbiAgICAgICAgZmllbGRzID0gY29sbGVjdGlvbi5maWVsZHM7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Rm9ybShmaWVsZHMsIGRhdGEpO1xuICAgICAgdG9hc3Quc3VjY2Vzcyhqc29uLm1lc3NhZ2UpO1xuICAgICAgZ2V0VmVyc2lvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QuZXJyb3IodCgnZXJyb3I6dW5QdWJsaXNoaW5nRG9jdW1lbnQnKSk7XG4gICAgfVxuXG4gICAgc2V0UHJvY2Vzc2luZyhmYWxzZSk7XG4gICAgaWYgKGFjdGlvbiA9PT0gJ3JldmVydCcpIHtcbiAgICAgIHRvZ2dsZU1vZGFsKHJldmVydE1vZGFsU2x1Zyk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbiA9PT0gJ3VucHVibGlzaCcpIHtcbiAgICAgIHRvZ2dsZU1vZGFsKHVuUHVibGlzaE1vZGFsU2x1Zyk7XG4gICAgfVxuICB9LCBbY29sbGVjdGlvbiwgZ2xvYmFsLCBwdWJsaXNoZWREb2MsIHNlcnZlclVSTCwgYXBpLCBpZCwgaTE4biwgbG9jYWxlLCByZXNldEZvcm0sIGdldFZlcnNpb25zLCB0LCB0b2dnbGVNb2RhbCwgcmV2ZXJ0TW9kYWxTbHVnLCB1blB1Ymxpc2hNb2RhbFNsdWddKTtcblxuICBjb25zdCBjYW5VcGRhdGUgPSBkb2NQZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uO1xuXG4gIGlmIChzdGF0dXNUb1JlbmRlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3ZhbHVlLXdyYXBgfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3ZhbHVlYH0+e3Qoc3RhdHVzVG9SZW5kZXIpfTwvc3Bhbj5cbiAgICAgICAgICB7Y2FuVXBkYXRlICYmIHN0YXR1c1RvUmVuZGVyID09PSAncHVibGlzaGVkJyAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICZuYnNwOyZtZGFzaDsmbmJzcDtcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1vZGFsKHVuUHVibGlzaE1vZGFsU2x1Zyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25gfVxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwibm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgndW5wdWJsaXNoJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBzbHVnPXt1blB1Ymxpc2hNb2RhbFNsdWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tb2RhbGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbW9kYWwtdGVtcGxhdGVgfT5cbiAgICAgICAgICAgICAgICAgIDxoMT57dCgnY29uZmlybVVucHVibGlzaCcpfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD57dCgnYWJvdXRUb1VucHVibGlzaCcpfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvY2Vzc2luZyA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKHVuUHVibGlzaE1vZGFsU2x1Zyl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0KCdnZW5lcmFsOmNhbmNlbCcpfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb2Nlc3NpbmcgPyB1bmRlZmluZWQgOiAoKSA9PiBwZXJmb3JtQWN0aW9uKCd1bnB1Ymxpc2gnKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3QocHJvY2Vzc2luZyA/ICd1bnB1Ymxpc2hpbmcnIDogJ2dlbmVyYWw6Y29uZmlybScpfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NhblVwZGF0ZSAmJiBzdGF0dXNUb1JlbmRlciA9PT0gJ2NoYW5nZWQnICYmIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgJm5ic3A7Jm1kYXNoOyZuYnNwO1xuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlTW9kYWwocmV2ZXJ0TW9kYWxTbHVnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbmB9XG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KCdyZXZlcnRUb1B1Ymxpc2hlZCcpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgc2x1Zz17cmV2ZXJ0TW9kYWxTbHVnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbW9kYWxgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vZGFsLXRlbXBsYXRlYH0+XG4gICAgICAgICAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1SZXZlcnRUb1NhdmVkJyl9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDxwPnt0KCdhYm91dFRvUmV2ZXJ0VG9QdWJsaXNoZWQnKX08L3A+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb2Nlc3NpbmcgPyB1bmRlZmluZWQgOiAoKSA9PiB0b2dnbGVNb2RhbChyZXZlcnRNb2RhbFNsdWcpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dCgnZ2VuZXJhbDpjYW5jZWwnKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9jZXNzaW5nID8gdW5kZWZpbmVkIDogKCkgPT4gcGVyZm9ybUFjdGlvbigncmV2ZXJ0Jyl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0KHByb2Nlc3NpbmcgPyAncmV2ZXJ0aW5nJyA6ICdnZW5lcmFsOmNvbmZpcm0nKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1cztcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJTdGF0dXMiLCJ1bnB1Ymxpc2hlZFZlcnNpb25zIiwiZG9jUGVybWlzc2lvbnMiLCJ1c2VEb2N1bWVudEluZm8iLCJwdWJsaXNoZWREb2MiLCJjb2xsZWN0aW9uIiwiZ2xvYmFsIiwiaWQiLCJnZXRWZXJzaW9ucyIsInRvZ2dsZU1vZGFsIiwidXNlTW9kYWwiLCJ1c2VDb25maWciLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJ1c2VTdGF0ZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwidXNlRm9ybSIsInJlc2V0IiwicmVzZXRGb3JtIiwidXNlTG9jYWxlIiwiY29kZSIsImxvY2FsZSIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJ1blB1Ymxpc2hNb2RhbFNsdWciLCJyZXZlcnRNb2RhbFNsdWciLCJzdGF0dXNUb1JlbmRlciIsImRvY3MiLCJsZW5ndGgiLCJwZXJmb3JtQWN0aW9uIiwidXNlQ2FsbGJhY2siLCJhY3Rpb24iLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwicmVzIiwiZGF0YSIsImZpZWxkcyIsImpzb24iLCJfc3RhdHVzIiwic2x1ZyIsInJlcXVlc3RzIiwiaGVhZGVycyIsImxhbmd1YWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsInJlc3VsdCIsImRvYyIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJlcnJvciIsImNhblVwZGF0ZSIsInVwZGF0ZSIsInBlcm1pc3Npb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiUmVhY3QiLCJGcmFnbWVudCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJidXR0b25TdHlsZSIsIk1vZGFsIiwiTWluaW1hbFRlbXBsYXRlIiwiaDEiLCJwIiwidHlwZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxTUE7OztlQUFBOzs7NkRBck02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