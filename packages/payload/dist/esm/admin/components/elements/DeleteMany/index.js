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
var baseClass = "delete-documents";
var DeleteMany = function(props) {
    var _permissions_collections, _permissions, _collectionPermissions_delete, _collectionPermissions;
    var resetParams = props.resetParams, tmp = props.collection, _ref = tmp === void 0 ? {} : tmp, slug = _ref.slug, plural = _ref.labels.plural;
    var permissions = useAuth().permissions;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var toggleModal = useModal().toggleModal;
    var _useSelection = useSelection(), selectAll = _useSelection.selectAll, count = _useSelection.count, getQueryParams = _useSelection.getQueryParams, toggleAll = _useSelection.toggleAll;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array(useState(false), 2), deleting = _useState[0], setDeleting = _useState[1];
    var collectionPermissions = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : _permissions_collections[slug];
    var hasDeletePermission = (_collectionPermissions = collectionPermissions) === null || _collectionPermissions === void 0 ? void 0 : (_collectionPermissions_delete = _collectionPermissions.delete) === null || _collectionPermissions_delete === void 0 ? void 0 : _collectionPermissions_delete.permission;
    var modalSlug = "delete-".concat(slug);
    var addDefaultError = useCallback(function() {
        toast.error(t("error:unknown"));
    }, [
        t
    ]);
    var handleDelete = useCallback(function() {
        setDeleting(true);
        requests.delete("".concat(serverURL).concat(api, "/").concat(slug).concat(getQueryParams()), {
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
                                toast.success(json.message || t("deletedSuccessfully"), {
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
                                toast.error(json.message);
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
    if (selectAll === SelectAllStatus.None || !hasDeletePermission) {
        return null;
    }
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Pill, {
        className: "".concat(baseClass, "__toggle"),
        onClick: function() {
            setDeleting(false);
            toggleModal(modalSlug);
        }
    }, t("delete")), /*#__PURE__*/ React.createElement(Modal, {
        slug: modalSlug,
        className: baseClass
    }, /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: "".concat(baseClass, "__template")
    }, /*#__PURE__*/ React.createElement("h1", null, t("confirmDeletion")), /*#__PURE__*/ React.createElement("p", null, t("aboutToDeleteCount", {
        label: getTranslation(plural, i18n),
        count: count
    })), /*#__PURE__*/ React.createElement(Button, {
        id: "confirm-cancel",
        buttonStyle: "secondary",
        type: "button",
        onClick: deleting ? undefined : function() {
            return toggleModal(modalSlug);
        }
    }, t("cancel")), /*#__PURE__*/ React.createElement(Button, {
        onClick: deleting ? undefined : handleDelete,
        id: "confirm-delete"
    }, deleting ? t("deleting") : t("confirm")))));
};
export default DeleteMany;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RlbGV0ZU1hbnkvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IE1vZGFsLCB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCB7IHJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYXBpJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTZWxlY3RBbGxTdGF0dXMsIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdkZWxldGUtZG9jdW1lbnRzJztcblxuY29uc3QgRGVsZXRlTWFueTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZXNldFBhcmFtcyxcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBzbHVnLFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHBsdXJhbCxcbiAgICAgIH0sXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBwZXJtaXNzaW9ucyB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHNlcnZlclVSTCwgcm91dGVzOiB7IGFwaSB9IH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB0b2dnbGVNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyBzZWxlY3RBbGwsIGNvdW50LCBnZXRRdWVyeVBhcmFtcywgdG9nZ2xlQWxsIH0gPSB1c2VTZWxlY3Rpb24oKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCBbZGVsZXRpbmcsIHNldERlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb2xsZWN0aW9uUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltzbHVnXTtcbiAgY29uc3QgaGFzRGVsZXRlUGVybWlzc2lvbiA9IGNvbGxlY3Rpb25QZXJtaXNzaW9ucz8uZGVsZXRlPy5wZXJtaXNzaW9uO1xuXG4gIGNvbnN0IG1vZGFsU2x1ZyA9IGBkZWxldGUtJHtzbHVnfWA7XG5cbiAgY29uc3QgYWRkRGVmYXVsdEVycm9yID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHRvYXN0LmVycm9yKHQoJ2Vycm9yOnVua25vd24nKSk7XG4gIH0sIFt0XSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldERlbGV0aW5nKHRydWUpO1xuICAgIHJlcXVlc3RzLmRlbGV0ZShgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30ke2dldFF1ZXJ5UGFyYW1zKCl9YCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgIH0sXG4gICAgfSkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKGpzb24ubWVzc2FnZSB8fCB0KCdkZWxldGVkU3VjY2Vzc2Z1bGx5JyksIHsgYXV0b0Nsb3NlOiAzMDAwIH0pO1xuICAgICAgICAgIHRvZ2dsZUFsbCgpO1xuICAgICAgICAgIHJlc2V0UGFyYW1zKHsgcGFnZTogc2VsZWN0QWxsID8gMSA6IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICAgIHRvYXN0LmVycm9yKGpzb24ubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkRGVmYXVsdEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gYWRkRGVmYXVsdEVycm9yKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFthZGREZWZhdWx0RXJyb3IsIGFwaSwgZ2V0UXVlcnlQYXJhbXMsIGkxOG4ubGFuZ3VhZ2UsIG1vZGFsU2x1ZywgcmVzZXRQYXJhbXMsIHNlbGVjdEFsbCwgc2VydmVyVVJMLCBzbHVnLCB0LCB0b2dnbGVBbGwsIHRvZ2dsZU1vZGFsXSk7XG5cbiAgaWYgKHNlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLk5vbmUgfHwgIWhhc0RlbGV0ZVBlcm1pc3Npb24pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBpbGxcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGVgfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0RGVsZXRpbmcoZmFsc2UpO1xuICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0KCdkZWxldGUnKX1cbiAgICAgIDwvUGlsbD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBzbHVnPXttb2RhbFNsdWd9XG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgPlxuICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGVtcGxhdGVgfT5cbiAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1EZWxldGlvbicpfTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7dCgnYWJvdXRUb0RlbGV0ZUNvdW50JywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24ocGx1cmFsLCBpMThuKSwgY291bnQgfSl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGlkPVwiY29uZmlybS1jYW5jZWxcIlxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGluZyA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2NhbmNlbCcpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0aW5nID8gdW5kZWZpbmVkIDogaGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgaWQ9XCJjb25maXJtLWRlbGV0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RlbGV0aW5nID8gdCgnZGVsZXRpbmcnKSA6IHQoJ2NvbmZpcm0nKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICAgICA8L01vZGFsPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVNYW55O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInRvYXN0IiwiTW9kYWwiLCJ1c2VNb2RhbCIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwiQnV0dG9uIiwiTWluaW1hbFRlbXBsYXRlIiwicmVxdWVzdHMiLCJTZWxlY3RBbGxTdGF0dXMiLCJ1c2VTZWxlY3Rpb24iLCJnZXRUcmFuc2xhdGlvbiIsIlBpbGwiLCJ1c2VBdXRoIiwiYmFzZUNsYXNzIiwiRGVsZXRlTWFueSIsInByb3BzIiwicGVybWlzc2lvbnMiLCJjb2xsZWN0aW9uUGVybWlzc2lvbnMiLCJyZXNldFBhcmFtcyIsImNvbGxlY3Rpb24iLCJzbHVnIiwibGFiZWxzIiwicGx1cmFsIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwidG9nZ2xlTW9kYWwiLCJzZWxlY3RBbGwiLCJjb3VudCIsImdldFF1ZXJ5UGFyYW1zIiwidG9nZ2xlQWxsIiwidCIsImkxOG4iLCJkZWxldGluZyIsInNldERlbGV0aW5nIiwiY29sbGVjdGlvbnMiLCJoYXNEZWxldGVQZXJtaXNzaW9uIiwiZGVsZXRlIiwicGVybWlzc2lvbiIsIm1vZGFsU2x1ZyIsImFkZERlZmF1bHRFcnJvciIsImVycm9yIiwiaGFuZGxlRGVsZXRlIiwiaGVhZGVycyIsImxhbmd1YWdlIiwidGhlbiIsInJlcyIsImpzb24iLCJlIiwic3RhdHVzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJhdXRvQ2xvc2UiLCJwYWdlIiwidW5kZWZpbmVkIiwiZXJyb3JzIiwiTm9uZSIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsImgxIiwicCIsImxhYmVsIiwiaWQiLCJidXR0b25TdHlsZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxXQUFXLFFBQVEsUUFBUTtBQUNyRCxTQUFTQyxLQUFLLFFBQVEsaUJBQWlCO0FBQ3ZDLFNBQVNDLEtBQUssRUFBRUMsUUFBUSxRQUFRLHFCQUFxQjtBQUNyRCxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsT0FBT0MsWUFBWSxZQUFZO0FBQy9CLE9BQU9DLHFCQUFxQiwwQkFBMEI7QUFDdEQsU0FBU0MsUUFBUSxRQUFRLGVBQWU7QUFFeEMsU0FBU0MsZUFBZSxFQUFFQyxZQUFZLFFBQVEsaURBQWlEO0FBQy9GLFNBQVNDLGNBQWMsUUFBUSx1Q0FBdUM7QUFDdEUsT0FBT0MsVUFBVSxVQUFVO0FBQzNCLFNBQVNDLE9BQU8sUUFBUSx1QkFBdUI7QUFFL0MsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsYUFBOEIsU0FBQ0M7UUFrQkxDLDBCQUFBQSxjQUNGQywrQkFBQUE7SUFsQjVCLElBQ0VDLGNBT0VILE1BUEZHLGFBQ1ksTUFNVkgsTUFORkksbUJBQVksaUJBS1IsQ0FBQyxJQUxPLEtBQ1ZDLFlBQUFBLE1BQ0FDLEFBQ0VDLGNBREZELE9BQ0VDO0lBS04sSUFBTSxBQUFFTixjQUFnQkosVUFBaEJJO0lBQ1IsSUFBdUNaLGFBQUFBLGFBQS9CbUIsWUFBK0JuQixXQUEvQm1CLFdBQVdDLEFBQVVDLE1BQVVy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