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
import React, { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { Modal, useModal } from "@faceless-ui/modal";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import Button from "../Button";
import MinimalTemplate from "../../templates/Minimal";
import { requests } from "../../../api";
import { SelectAllStatus, useSelection } from "../../views/collections/List/SelectionProvider";
import { getTranslation } from "../../../../utilities/getTranslation";
import Pill from "../Pill";
import { useAuth } from "../../utilities/Auth";
import "./index.scss";
var baseClass = "unpublish-many";
var UnpublishMany = function(props) {
    var _permissions_collections, _permissions, _collectionPermissions_update, _collectionPermissions, _versions;
    var resetParams = props.resetParams, tmp = props.collection, _ref = tmp === void 0 ? {} : tmp, slug = _ref.slug, plural = _ref.labels.plural, versions = _ref.versions;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var permissions = useAuth().permissions;
    var toggleModal = useModal().toggleModal;
    var _useTranslation = useTranslation("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useSelection = useSelection(), selectAll = _useSelection.selectAll, count = _useSelection.count, getQueryParams = _useSelection.getQueryParams;
    var _useState = _sliced_to_array(useState(false), 2), submitted = _useState[0], setSubmitted = _useState[1];
    var collectionPermissions = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : _permissions_collections[slug];
    var hasPermission = (_collectionPermissions = collectionPermissions) === null || _collectionPermissions === void 0 ? void 0 : (_collectionPermissions_update = _collectionPermissions.update) === null || _collectionPermissions_update === void 0 ? void 0 : _collectionPermissions_update.permission;
    var modalSlug = "unpublish-".concat(slug);
    var addDefaultError = useCallback(function() {
        toast.error(t("error:unknown"));
    }, [
        t
    ]);
    var handleUnpublish = useCallback(function() {
        setSubmitted(true);
        requests.patch("".concat(serverURL).concat(api, "/").concat(slug).concat(getQueryParams({
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
                                toast.success(t("general:updatedSuccessfully"));
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
                                    return toast.error(error.message);
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
    if (!((_versions = versions) === null || _versions === void 0 ? void 0 : _versions.drafts) || selectAll === SelectAllStatus.None || !hasPermission) {
        return null;
    }
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Pill, {
        className: "".concat(baseClass, "__toggle"),
        onClick: function() {
            setSubmitted(false);
            toggleModal(modalSlug);
        }
    }, t("unpublish")), /*#__PURE__*/ React.createElement(Modal, {
        slug: modalSlug,
        className: baseClass
    }, /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: "".concat(baseClass, "__template")
    }, /*#__PURE__*/ React.createElement("h1", null, t("confirmUnpublish")), /*#__PURE__*/ React.createElement("p", null, t("aboutToUnpublishSelection", {
        label: getTranslation(plural, i18n)
    })), /*#__PURE__*/ React.createElement(Button, {
        id: "confirm-cancel",
        buttonStyle: "secondary",
        type: "button",
        onClick: submitted ? undefined : function() {
            return toggleModal(modalSlug);
        }
    }, t("general:cancel")), /*#__PURE__*/ React.createElement(Button, {
        onClick: submitted ? undefined : handleUnpublish,
        id: "confirm-unpublish"
    }, submitted ? t("unpublishing") : t("general:confirm")))));
};
export default UnpublishMany;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1VucHVibGlzaE1hbnkvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IE1vZGFsLCB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCB7IHJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYXBpJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTZWxlY3RBbGxTdGF0dXMsIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICd1bnB1Ymxpc2gtbWFueSc7XG5cbmNvbnN0IFVucHVibGlzaE1hbnk6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcmVzZXRQYXJhbXMsXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgc2x1ZyxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBwbHVyYWwsXG4gICAgICB9LFxuICAgICAgdmVyc2lvbnMsXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcGVybWlzc2lvbnMgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyB0b2dnbGVNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuICBjb25zdCB7IHNlbGVjdEFsbCwgY291bnQsIGdldFF1ZXJ5UGFyYW1zIH0gPSB1c2VTZWxlY3Rpb24oKTtcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb2xsZWN0aW9uUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltzbHVnXTtcbiAgY29uc3QgaGFzUGVybWlzc2lvbiA9IGNvbGxlY3Rpb25QZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uO1xuXG4gIGNvbnN0IG1vZGFsU2x1ZyA9IGB1bnB1Ymxpc2gtJHtzbHVnfWA7XG5cbiAgY29uc3QgYWRkRGVmYXVsdEVycm9yID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHRvYXN0LmVycm9yKHQoJ2Vycm9yOnVua25vd24nKSk7XG4gIH0sIFt0XSk7XG5cbiAgY29uc3QgaGFuZGxlVW5wdWJsaXNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICByZXF1ZXN0cy5wYXRjaChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30ke2dldFF1ZXJ5UGFyYW1zKHsgX3N0YXR1czogeyBub3RfZXF1YWxzOiAnZHJhZnQnIH0gfSl9YCwge1xuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBfc3RhdHVzOiAnZHJhZnQnLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgfSxcbiAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICB0b2dnbGVNb2RhbChtb2RhbFNsdWcpO1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3ModCgnZ2VuZXJhbDp1cGRhdGVkU3VjY2Vzc2Z1bGx5JykpO1xuICAgICAgICAgIHJlc2V0UGFyYW1zKHsgcGFnZTogc2VsZWN0QWxsID8gMSA6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICAgIGpzb24uZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkRGVmYXVsdEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gYWRkRGVmYXVsdEVycm9yKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFthZGREZWZhdWx0RXJyb3IsIGFwaSwgZ2V0UXVlcnlQYXJhbXMsIGkxOG4ubGFuZ3VhZ2UsIG1vZGFsU2x1ZywgcmVzZXRQYXJhbXMsIHNlbGVjdEFsbCwgc2VydmVyVVJMLCBzbHVnLCB0LCB0b2dnbGVNb2RhbF0pO1xuXG4gIGlmICghKHZlcnNpb25zPy5kcmFmdHMpIHx8IChzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5Ob25lIHx8ICFoYXNQZXJtaXNzaW9uKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGlsbFxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZWB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xuICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0KCd1bnB1Ymxpc2gnKX1cbiAgICAgIDwvUGlsbD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBzbHVnPXttb2RhbFNsdWd9XG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgPlxuICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGVtcGxhdGVgfT5cbiAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1VbnB1Ymxpc2gnKX08L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge3QoJ2Fib3V0VG9VbnB1Ymxpc2hTZWxlY3Rpb24nLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihwbHVyYWwsIGkxOG4pIH0pfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpZD1cImNvbmZpcm0tY2FuY2VsXCJcbiAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17c3VibWl0dGVkID8gdW5kZWZpbmVkIDogKCkgPT4gdG9nZ2xlTW9kYWwobW9kYWxTbHVnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dCgnZ2VuZXJhbDpjYW5jZWwnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXR0ZWQgPyB1bmRlZmluZWQgOiBoYW5kbGVVbnB1Ymxpc2h9XG4gICAgICAgICAgICBpZD1cImNvbmZpcm0tdW5wdWJsaXNoXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3VibWl0dGVkID8gdCgndW5wdWJsaXNoaW5nJykgOiB0KCdnZW5lcmFsOmNvbmZpcm0nKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICAgICA8L01vZGFsPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVbnB1Ymxpc2hNYW55O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInRvYXN0IiwiTW9kYWwiLCJ1c2VNb2RhbCIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwiQnV0dG9uIiwiTWluaW1hbFRlbXBsYXRlIiwicmVxdWVzdHMiLCJTZWxlY3RBbGxTdGF0dXMiLCJ1c2VTZWxlY3Rpb24iLCJnZXRUcmFuc2xhdGlvbiIsIlBpbGwiLCJ1c2VBdXRoIiwiYmFzZUNsYXNzIiwiVW5wdWJsaXNoTWFueSIsInByb3BzIiwicGVybWlzc2lvbnMiLCJjb2xsZWN0aW9uUGVybWlzc2lvbnMiLCJ2ZXJzaW9ucyIsInJlc2V0UGFyYW1zIiwiY29sbGVjdGlvbiIsInNsdWciLCJsYWJlbHMiLCJwbHVyYWwiLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJ0b2dnbGVNb2RhbCIsInQiLCJpMThuIiwic2VsZWN0QWxsIiwiY291bnQiLCJnZXRRdWVyeVBhcmFtcyIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImNvbGxlY3Rpb25zIiwiaGFzUGVybWlzc2lvbiIsInVwZGF0ZSIsInBlcm1pc3Npb24iLCJtb2RhbFNsdWciLCJhZGREZWZhdWx0RXJyb3IiLCJlcnJvciIsImhhbmRsZVVucHVibGlzaCIsInBhdGNoIiwiX3N0YXR1cyIsIm5vdF9lcXVhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJsYW5ndWFnZSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZSIsInN0YXR1cyIsInN1Y2Nlc3MiLCJwYWdlIiwidW5kZWZpbmVkIiwiZXJyb3JzIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJkcmFmdHMiLCJOb25lIiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDEiLCJwIiwibGFiZWwiLCJpZCIsImJ1dHRvblN0eWxlIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxRQUFRLEVBQUVDLFdBQVcsUUFBUSxRQUFRO0FBQ3JELFNBQVNDLEtBQUssUUFBUSxpQkFBaUI7QUFDdkMsU0FBU0MsS0FBSyxFQUFFQyxRQUFRLFFBQVEscUJBQXFCO0FBQ3JELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxPQUFPQyxZQUFZLFlBQVk7QUFDL0IsT0FBT0MscUJBQXFCLDBCQUEwQjtBQUN0RCxTQUFTQyxRQUFRLFFBQVEsZUFBZTtBQUV4QyxTQUFTQyxlQUFlLEVBQUVDLFlBQVksUUFBUSxpREFBaUQ7QUFDL0YsU0FBU0MsY0FBYyxRQUFRLHVDQUF1QztBQUN0RSxPQUFPQyxVQUFVLFVBQVU7QUFDM0IsU0FBU0MsT0FBTyxRQUFRLHVCQUF1QjtBQUUvQyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxnQkFBaUMsU0FBQ0M7UUFtQlJDLDBC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