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
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { Modal, useModal } from "@faceless-ui/modal";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import { useDocumentInfo } from "../../utilities/DocumentInfo";
import Button from "../Button";
import { MinimalTemplate } from "../..";
import { requests } from "../../../api";
import { useForm } from "../../forms/Form/context";
import { useLocale } from "../../utilities/Locale";
import "./index.scss";
var baseClass = "status";
var Status = function() {
    var _unpublishedVersions_docs, _unpublishedVersions, _unpublishedVersions_docs1, _unpublishedVersions1, _docPermissions_update, _docPermissions;
    var _useDocumentInfo = useDocumentInfo(), publishedDoc = _useDocumentInfo.publishedDoc, unpublishedVersions = _useDocumentInfo.unpublishedVersions, collection = _useDocumentInfo.collection, global = _useDocumentInfo.global, id = _useDocumentInfo.id, getVersions = _useDocumentInfo.getVersions, docPermissions = _useDocumentInfo.docPermissions;
    var toggleModal = useModal().toggleModal;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var _useState = _sliced_to_array(useState(false), 2), processing = _useState[0], setProcessing = _useState[1];
    var _useForm = useForm(), resetForm = _useForm.reset;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var _useTranslation = useTranslation("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
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
    var performAction = useCallback(function() {
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
                            requests[method](url, {
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
                        toast.success(json.message);
                        getVersions();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        toast.error(t("error:unPublishingDocument"));
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
        return /*#__PURE__*/ React.createElement("div", {
            className: baseClass
        }, /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__value-wrap")
        }, /*#__PURE__*/ React.createElement("span", {
            className: "".concat(baseClass, "__value")
        }, t(statusToRender)), canUpdate && statusToRender === "published" && /*#__PURE__*/ React.createElement(React.Fragment, null, "\xa0—\xa0", /*#__PURE__*/ React.createElement(Button, {
            onClick: function() {
                return toggleModal(unPublishModalSlug);
            },
            className: "".concat(baseClass, "__action"),
            buttonStyle: "none"
        }, t("unpublish")), /*#__PURE__*/ React.createElement(Modal, {
            slug: unPublishModalSlug,
            className: "".concat(baseClass, "__modal")
        }, /*#__PURE__*/ React.createElement(MinimalTemplate, {
            className: "".concat(baseClass, "__modal-template")
        }, /*#__PURE__*/ React.createElement("h1", null, t("confirmUnpublish")), /*#__PURE__*/ React.createElement("p", null, t("aboutToUnpublish")), /*#__PURE__*/ React.createElement(Button, {
            buttonStyle: "secondary",
            type: "button",
            onClick: processing ? undefined : function() {
                return toggleModal(unPublishModalSlug);
            }
        }, t("general:cancel")), /*#__PURE__*/ React.createElement(Button, {
            onClick: processing ? undefined : function() {
                return performAction("unpublish");
            }
        }, t(processing ? "unpublishing" : "general:confirm"))))), canUpdate && statusToRender === "changed" && /*#__PURE__*/ React.createElement(React.Fragment, null, "\xa0—\xa0", /*#__PURE__*/ React.createElement(Button, {
            onClick: function() {
                return toggleModal(revertModalSlug);
            },
            className: "".concat(baseClass, "__action"),
            buttonStyle: "none"
        }, t("revertToPublished")), /*#__PURE__*/ React.createElement(Modal, {
            slug: revertModalSlug,
            className: "".concat(baseClass, "__modal")
        }, /*#__PURE__*/ React.createElement(MinimalTemplate, {
            className: "".concat(baseClass, "__modal-template")
        }, /*#__PURE__*/ React.createElement("h1", null, t("confirmRevertToSaved")), /*#__PURE__*/ React.createElement("p", null, t("aboutToRevertToPublished")), /*#__PURE__*/ React.createElement(Button, {
            buttonStyle: "secondary",
            type: "button",
            onClick: processing ? undefined : function() {
                return toggleModal(revertModalSlug);
            }
        }, t("general:cancel")), /*#__PURE__*/ React.createElement(Button, {
            onClick: processing ? undefined : function() {
                return performAction("revert");
            }
        }, t(processing ? "reverting" : "general:confirm")))))));
    }
    return null;
};
export default Status;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1N0YXR1cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgTW9kYWwsIHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgTWluaW1hbFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi8uLi8uLi9hcGknO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3N0YXR1cyc7XG5cbmNvbnN0IFN0YXR1czogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwdWJsaXNoZWREb2MsXG4gICAgdW5wdWJsaXNoZWRWZXJzaW9ucyxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGdsb2JhbCxcbiAgICBpZCxcbiAgICBnZXRWZXJzaW9ucyxcbiAgICBkb2NQZXJtaXNzaW9ucyxcbiAgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCB7IHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpO1xuICBjb25zdCB7XG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczogeyBhcGkgfSxcbiAgfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCBbcHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgcmVzZXQ6IHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKTtcblxuICBjb25zdCB1blB1Ymxpc2hNb2RhbFNsdWcgPSBgY29uZmlybS11bi1wdWJsaXNoLSR7aWR9YDtcbiAgY29uc3QgcmV2ZXJ0TW9kYWxTbHVnID0gYGNvbmZpcm0tcmV2ZXJ0LSR7aWR9YDtcblxuICBsZXQgc3RhdHVzVG9SZW5kZXI7XG5cbiAgaWYgKHVucHVibGlzaGVkVmVyc2lvbnM/LmRvY3M/Lmxlbmd0aCA+IDAgJiYgcHVibGlzaGVkRG9jKSB7XG4gICAgc3RhdHVzVG9SZW5kZXIgPSAnY2hhbmdlZCc7XG4gIH0gZWxzZSBpZiAoIXB1Ymxpc2hlZERvYykge1xuICAgIHN0YXR1c1RvUmVuZGVyID0gJ2RyYWZ0JztcbiAgfSBlbHNlIGlmIChwdWJsaXNoZWREb2MgJiYgdW5wdWJsaXNoZWRWZXJzaW9ucz8uZG9jcz8ubGVuZ3RoIDw9IDEpIHtcbiAgICBzdGF0dXNUb1JlbmRlciA9ICdwdWJsaXNoZWQnO1xuICB9XG5cbiAgY29uc3QgcGVyZm9ybUFjdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jIChhY3Rpb246ICdyZXZlcnQnIHwgJ3VucHVibGlzaCcpID0+IHtcbiAgICBsZXQgdXJsO1xuICAgIGxldCBtZXRob2Q7XG4gICAgbGV0IGJvZHk7XG5cbiAgICBzZXRQcm9jZXNzaW5nKHRydWUpO1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gJ3VucHVibGlzaCcpIHtcbiAgICAgIGJvZHkgPSB7XG4gICAgICAgIF9zdGF0dXM6ICdkcmFmdCcsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24gPT09ICdyZXZlcnQnKSB7XG4gICAgICBib2R5ID0gcHVibGlzaGVkRG9jO1xuICAgIH1cblxuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICB1cmwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7Y29sbGVjdGlvbi5zbHVnfS8ke2lkfT9kZXB0aD0wJmxvY2FsZT0ke2xvY2FsZX0mZmFsbGJhY2stbG9jYWxlPW51bGxgO1xuICAgICAgbWV0aG9kID0gJ3BhdGNoJztcbiAgICB9XG4gICAgaWYgKGdsb2JhbCkge1xuICAgICAgdXJsID0gYCR7c2VydmVyVVJMfSR7YXBpfS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9P2RlcHRoPTAmbG9jYWxlPSR7bG9jYWxlfSZmYWxsYmFjay1sb2NhbGU9bnVsbGA7XG4gICAgICBtZXRob2QgPSAncG9zdCc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdHNbbWV0aG9kXSh1cmwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgfSk7XG5cbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBsZXQgZGF0YTtcbiAgICAgIGxldCBmaWVsZHM6IEZpZWxkW107XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICBkYXRhID0ganNvbi5yZXN1bHQ7XG4gICAgICAgIGZpZWxkcyA9IGdsb2JhbC5maWVsZHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGRhdGEgPSBqc29uLmRvYztcbiAgICAgICAgZmllbGRzID0gY29sbGVjdGlvbi5maWVsZHM7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Rm9ybShmaWVsZHMsIGRhdGEpO1xuICAgICAgdG9hc3Quc3VjY2Vzcyhqc29uLm1lc3NhZ2UpO1xuICAgICAgZ2V0VmVyc2lvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QuZXJyb3IodCgnZXJyb3I6dW5QdWJsaXNoaW5nRG9jdW1lbnQnKSk7XG4gICAgfVxuXG4gICAgc2V0UHJvY2Vzc2luZyhmYWxzZSk7XG4gICAgaWYgKGFjdGlvbiA9PT0gJ3JldmVydCcpIHtcbiAgICAgIHRvZ2dsZU1vZGFsKHJldmVydE1vZGFsU2x1Zyk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbiA9PT0gJ3VucHVibGlzaCcpIHtcbiAgICAgIHRvZ2dsZU1vZGFsKHVuUHVibGlzaE1vZGFsU2x1Zyk7XG4gICAgfVxuICB9LCBbY29sbGVjdGlvbiwgZ2xvYmFsLCBwdWJsaXNoZWREb2MsIHNlcnZlclVSTCwgYXBpLCBpZCwgaTE4biwgbG9jYWxlLCByZXNldEZvcm0sIGdldFZlcnNpb25zLCB0LCB0b2dnbGVNb2RhbCwgcmV2ZXJ0TW9kYWxTbHVnLCB1blB1Ymxpc2hNb2RhbFNsdWddKTtcblxuICBjb25zdCBjYW5VcGRhdGUgPSBkb2NQZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uO1xuXG4gIGlmIChzdGF0dXNUb1JlbmRlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3ZhbHVlLXdyYXBgfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3ZhbHVlYH0+e3Qoc3RhdHVzVG9SZW5kZXIpfTwvc3Bhbj5cbiAgICAgICAgICB7Y2FuVXBkYXRlICYmIHN0YXR1c1RvUmVuZGVyID09PSAncHVibGlzaGVkJyAmJiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICZuYnNwOyZtZGFzaDsmbmJzcDtcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1vZGFsKHVuUHVibGlzaE1vZGFsU2x1Zyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25gfVxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwibm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgndW5wdWJsaXNoJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBzbHVnPXt1blB1Ymxpc2hNb2RhbFNsdWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tb2RhbGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbW9kYWwtdGVtcGxhdGVgfT5cbiAgICAgICAgICAgICAgICAgIDxoMT57dCgnY29uZmlybVVucHVibGlzaCcpfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD57dCgnYWJvdXRUb1VucHVibGlzaCcpfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvY2Vzc2luZyA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKHVuUHVibGlzaE1vZGFsU2x1Zyl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0KCdnZW5lcmFsOmNhbmNlbCcpfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb2Nlc3NpbmcgPyB1bmRlZmluZWQgOiAoKSA9PiBwZXJmb3JtQWN0aW9uKCd1bnB1Ymxpc2gnKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3QocHJvY2Vzc2luZyA/ICd1bnB1Ymxpc2hpbmcnIDogJ2dlbmVyYWw6Y29uZmlybScpfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NhblVwZGF0ZSAmJiBzdGF0dXNUb1JlbmRlciA9PT0gJ2NoYW5nZWQnICYmIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgJm5ic3A7Jm1kYXNoOyZuYnNwO1xuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlTW9kYWwocmV2ZXJ0TW9kYWxTbHVnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbmB9XG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KCdyZXZlcnRUb1B1Ymxpc2hlZCcpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgc2x1Zz17cmV2ZXJ0TW9kYWxTbHVnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbW9kYWxgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vZGFsLXRlbXBsYXRlYH0+XG4gICAgICAgICAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1SZXZlcnRUb1NhdmVkJyl9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDxwPnt0KCdhYm91dFRvUmV2ZXJ0VG9QdWJsaXNoZWQnKX08L3A+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb2Nlc3NpbmcgPyB1bmRlZmluZWQgOiAoKSA9PiB0b2dnbGVNb2RhbChyZXZlcnRNb2RhbFNsdWcpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dCgnZ2VuZXJhbDpjYW5jZWwnKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9jZXNzaW5nID8gdW5kZWZpbmVkIDogKCkgPT4gcGVyZm9ybUFjdGlvbigncmV2ZXJ0Jyl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0KHByb2Nlc3NpbmcgPyAncmV2ZXJ0aW5nJyA6ICdnZW5lcmFsOmNvbmZpcm0nKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ0b2FzdCIsIk1vZGFsIiwidXNlTW9kYWwiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsInVzZURvY3VtZW50SW5mbyIsIkJ1dHRvbiIsIk1pbmltYWxUZW1wbGF0ZSIsInJlcXVlc3RzIiwidXNlRm9ybSIsInVzZUxvY2FsZSIsImJhc2VDbGFzcyIsIlN0YXR1cyIsInVucHVibGlzaGVkVmVyc2lvbnMiLCJkb2NQZXJtaXNzaW9ucyIsInB1Ymxpc2hlZERvYyIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJpZCIsImdldFZlcnNpb25zIiwidG9nZ2xlTW9kYWwiLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInJlc2V0IiwicmVzZXRGb3JtIiwiY29kZSIsImxvY2FsZSIsInQiLCJpMThuIiwidW5QdWJsaXNoTW9kYWxTbHVnIiwicmV2ZXJ0TW9kYWxTbHVnIiwic3RhdHVzVG9SZW5kZXIiLCJkb2NzIiwibGVuZ3RoIiwicGVyZm9ybUFjdGlvbiIsImFjdGlvbiIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJyZXMiLCJkYXRhIiwiZmllbGRzIiwianNvbiIsIl9zdGF0dXMiLCJzbHVnIiwiaGVhZGVycyIsImxhbmd1YWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsInJlc3VsdCIsImRvYyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJjYW5VcGRhdGUiLCJ1cGRhdGUiLCJwZXJtaXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIkZyYWdtZW50Iiwib25DbGljayIsImJ1dHRvblN0eWxlIiwiaDEiLCJwIiwidHlwZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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