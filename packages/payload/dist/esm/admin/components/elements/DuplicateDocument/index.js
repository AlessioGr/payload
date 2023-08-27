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
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal, useModal } from "@faceless-ui/modal";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import Button from "../Button";
import { requests } from "../../../api";
import { useForm, useFormModified } from "../../forms/Form/context";
import MinimalTemplate from "../../templates/Minimal";
import { getTranslation } from "../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "duplicate";
var Duplicate = function(param) {
    var slug = param.slug, collection = param.collection, id = param.id;
    var push = useHistory().push;
    var modified = useFormModified();
    var toggleModal = useModal().toggleModal;
    var setModified = useForm().setModified;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api, localization = _useConfig.localization;
    var _useConfig1 = useConfig(), admin = _useConfig1.routes.admin;
    var _useState = _sliced_to_array(useState(false), 2), hasClicked = _useState[0], setHasClicked = _useState[1];
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var modalSlug = "duplicate-".concat(id);
    var handleClick = useCallback(/*#__PURE__*/ _async_to_generator(function() {
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
                                            requests.get("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id), {
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
                                            requests.post("".concat(serverURL).concat(api, "/").concat(slug), {
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
                                            return toast.error(error.message);
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
                                            requests.get("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id), {
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
                                            requests.patch("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(duplicateID, "?locale=").concat(locale), {
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
                                            return toast.error(error.message);
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
                        requests.delete("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id), {
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
                    toast.success(t("successfullyDuplicated", {
                        label: getTranslation(collection.labels.singular, i18n)
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
    var confirm = useCallback(/*#__PURE__*/ _async_to_generator(function() {
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
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Button, {
        id: "action-duplicate",
        buttonStyle: "none",
        className: baseClass,
        onClick: function() {
            return handleClick(false);
        }
    }, t("duplicate")), modified && hasClicked && /*#__PURE__*/ React.createElement(Modal, {
        slug: modalSlug,
        className: "".concat(baseClass, "__modal")
    }, /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: "".concat(baseClass, "__modal-template")
    }, /*#__PURE__*/ React.createElement("h1", null, t("confirmDuplication")), /*#__PURE__*/ React.createElement("p", null, t("unsavedChangesDuplicate")), /*#__PURE__*/ React.createElement(Button, {
        id: "confirm-cancel",
        buttonStyle: "secondary",
        type: "button",
        onClick: function() {
            return toggleModal(modalSlug);
        }
    }, t("cancel")), /*#__PURE__*/ React.createElement(Button, {
        onClick: confirm,
        id: "confirm-duplicate"
    }, t("duplicateWithoutSaving")))));
};
export default Duplicate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0R1cGxpY2F0ZURvY3VtZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IHJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYXBpJztcbmltcG9ydCB7IHVzZUZvcm0sIHVzZUZvcm1Nb2RpZmllZCB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZHVwbGljYXRlJztcblxuY29uc3QgRHVwbGljYXRlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzbHVnLCBjb2xsZWN0aW9uLCBpZCB9KSA9PiB7XG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCBtb2RpZmllZCA9IHVzZUZvcm1Nb2RpZmllZCgpO1xuICBjb25zdCB7IHRvZ2dsZU1vZGFsIH0gPSB1c2VNb2RhbCgpO1xuICBjb25zdCB7IHNldE1vZGlmaWVkIH0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IHsgc2VydmVyVVJMLCByb3V0ZXM6IHsgYXBpIH0sIGxvY2FsaXphdGlvbiB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcm91dGVzOiB7IGFkbWluIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCBbaGFzQ2xpY2tlZCwgc2V0SGFzQ2xpY2tlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICBjb25zdCBtb2RhbFNsdWcgPSBgZHVwbGljYXRlLSR7aWR9YDtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKGFzeW5jIChvdmVycmlkZSA9IGZhbHNlKSA9PiB7XG4gICAgc2V0SGFzQ2xpY2tlZCh0cnVlKTtcblxuICAgIGlmIChtb2RpZmllZCAmJiAhb3ZlcnJpZGUpIHtcbiAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlID0gYXN5bmMgKGxvY2FsZSA9ICcnKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vJHtpZH1gLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgaWYgKCdjcmVhdGVkQXQnIGluIGRhdGEpIGRlbGV0ZSBkYXRhLmNyZWF0ZWRBdDtcbiAgICAgIGlmICgndXBkYXRlZEF0JyBpbiBkYXRhKSBkZWxldGUgZGF0YS51cGRhdGVkQXQ7XG5cbiAgICAgIGlmICh0eXBlb2YgY29sbGVjdGlvbi5hZG1pbi5ob29rcz8uYmVmb3JlRHVwbGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRhdGEgPSBhd2FpdCBjb2xsZWN0aW9uLmFkbWluLmhvb2tzLmJlZm9yZUR1cGxpY2F0ZSh7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBsb2NhbGUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcblxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICByZXR1cm4ganNvbi5kb2MuaWQ7XG4gICAgICB9XG4gICAgICBqc29uLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGxldCBkdXBsaWNhdGVJRDtcbiAgICBpZiAobG9jYWxpemF0aW9uKSB7XG4gICAgICBkdXBsaWNhdGVJRCA9IGF3YWl0IGNyZWF0ZShsb2NhbGl6YXRpb24uZGVmYXVsdExvY2FsZSk7XG4gICAgICBsZXQgYWJvcnQgPSBmYWxzZTtcbiAgICAgIGxvY2FsaXphdGlvbi5sb2NhbGVDb2Rlc1xuICAgICAgICAuZmlsdGVyKChsb2NhbGUpID0+IGxvY2FsZSAhPT0gbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGUpXG4gICAgICAgIC5mb3JFYWNoKGFzeW5jIChsb2NhbGUpID0+IHtcbiAgICAgICAgICBpZiAoIWFib3J0KSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0cy5nZXQoYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9LyR7aWR9YCwge1xuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGxvY2FsaXplZERvYyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29sbGVjdGlvbi5hZG1pbi5ob29rcz8uYmVmb3JlRHVwbGljYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGxvY2FsaXplZERvYyA9IGF3YWl0IGNvbGxlY3Rpb24uYWRtaW4uaG9va3MuYmVmb3JlRHVwbGljYXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBsb2NhbGl6ZWREb2MsXG4gICAgICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGF0Y2hSZXN1bHQgPSBhd2FpdCByZXF1ZXN0cy5wYXRjaChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vJHtkdXBsaWNhdGVJRH0/bG9jYWxlPSR7bG9jYWxlfWAsIHtcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxvY2FsaXplZERvYyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwYXRjaFJlc3VsdC5zdGF0dXMgPiA0MDApIHtcbiAgICAgICAgICAgICAgYWJvcnQgPSB0cnVlO1xuICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcGF0Y2hSZXN1bHQuanNvbigpO1xuICAgICAgICAgICAgICBqc29uLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICBpZiAoYWJvcnQpIHtcbiAgICAgICAgLy8gZGVsZXRlIHRoZSBkdXBsaWNhdGUgZG9jIHRvIHByZXZlbnQgaW5jb21wbGV0ZVxuICAgICAgICBhd2FpdCByZXF1ZXN0cy5kZWxldGUoYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9LyR7aWR9YCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkdXBsaWNhdGVJRCA9IGF3YWl0IGNyZWF0ZSgpO1xuICAgIH1cblxuICAgIHRvYXN0LnN1Y2Nlc3ModCgnc3VjY2Vzc2Z1bGx5RHVwbGljYXRlZCcsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKSB9KSxcbiAgICAgIHsgYXV0b0Nsb3NlOiAzMDAwIH0pO1xuXG4gICAgc2V0TW9kaWZpZWQoZmFsc2UpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke3NsdWd9LyR7ZHVwbGljYXRlSUR9YCxcbiAgICAgIH0pO1xuICAgIH0sIDEwKTtcbiAgfSwgW21vZGlmaWVkLCBsb2NhbGl6YXRpb24sIHQsIGkxOG4sIGNvbGxlY3Rpb24sIHNldE1vZGlmaWVkLCB0b2dnbGVNb2RhbCwgbW9kYWxTbHVnLCBzZXJ2ZXJVUkwsIGFwaSwgc2x1ZywgaWQsIHB1c2gsIGFkbWluXSk7XG5cbiAgY29uc3QgY29uZmlybSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBzZXRIYXNDbGlja2VkKGZhbHNlKTtcbiAgICBhd2FpdCBoYW5kbGVDbGljayh0cnVlKTtcbiAgfSwgW2hhbmRsZUNsaWNrXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGlkPVwiYWN0aW9uLWR1cGxpY2F0ZVwiXG4gICAgICAgIGJ1dHRvblN0eWxlPVwibm9uZVwiXG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhmYWxzZSl9XG4gICAgICA+XG4gICAgICAgIHt0KCdkdXBsaWNhdGUnKX1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAge21vZGlmaWVkICYmIGhhc0NsaWNrZWQgJiYgKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBzbHVnPXttb2RhbFNsdWd9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tb2RhbGB9XG4gICAgICAgID5cbiAgICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbW9kYWwtdGVtcGxhdGVgfT5cbiAgICAgICAgICAgIDxoMT57dCgnY29uZmlybUR1cGxpY2F0aW9uJyl9PC9oMT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dCgndW5zYXZlZENoYW5nZXNEdXBsaWNhdGUnKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgaWQ9XCJjb25maXJtLWNhbmNlbFwiXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0KCdjYW5jZWwnKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtjb25maXJtfVxuICAgICAgICAgICAgICBpZD1cImNvbmZpcm0tZHVwbGljYXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3QoJ2R1cGxpY2F0ZVdpdGhvdXRTYXZpbmcnKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgKX1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHVwbGljYXRlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZUhpc3RvcnkiLCJ0b2FzdCIsIk1vZGFsIiwidXNlTW9kYWwiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsIkJ1dHRvbiIsInJlcXVlc3RzIiwidXNlRm9ybSIsInVzZUZvcm1Nb2RpZmllZCIsIk1pbmltYWxUZW1wbGF0ZSIsImdldFRyYW5zbGF0aW9uIiwiYmFzZUNsYXNzIiwiRHVwbGljYXRlIiwic2x1ZyIsImNvbGxlY3Rpb24iLCJpZCIsInB1c2giLCJtb2RpZmllZCIsInRvZ2dsZU1vZGFsIiwic2V0TW9kaWZpZWQiLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJsb2NhbGl6YXRpb24iLCJhZG1pbiIsImhhc0NsaWNrZWQiLCJzZXRIYXNDbGlja2VkIiwidCIsImkxOG4iLCJtb2RhbFNsdWciLCJoYW5kbGVDbGljayIsIm92ZXJyaWRlIiwiY3JlYXRlIiwiZHVwbGljYXRlSUQiLCJhYm9ydCIsImxvY2FsZSIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdCIsImpzb24iLCJnZXQiLCJwYXJhbXMiLCJkZXB0aCIsImhlYWRlcnMiLCJsYW5ndWFnZSIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImhvb2tzIiwiYmVmb3JlRHVwbGljYXRlIiwicG9zdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiZG9jIiwiZXJyb3JzIiwiZm9yRWFjaCIsImVycm9yIiwibWVzc2FnZSIsImRlZmF1bHRMb2NhbGUiLCJsb2NhbGVDb2RlcyIsImZpbHRlciIsInJlcyIsImxvY2FsaXplZERvYyIsInBhdGNoUmVzdWx0IiwicGF0Y2giLCJkZWxldGUiLCJzdWNjZXNzIiwibGFiZWwiLCJsYWJlbHMiLCJzaW5ndWxhciIsImF1dG9DbG9zZSIsInNldFRpbWVvdXQiLCJwYXRobmFtZSIsImNvbmZpcm0iLCJGcmFnbWVudCIsImJ1dHRvblN0eWxlIiwiY2xhc3NOYW1lIiwib25DbGljayIsImgxIiwicCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsV0FBVyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNyRCxTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLFNBQVNDLEtBQUssUUFBUSxpQkFBaUI7QUFDdkMsU0FBU0MsS0FBSyxFQUFFQyxRQUFRLFFBQVEscUJBQXFCO0FBQ3JELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUVuRCxPQUFPQyxZQUFZLFlBQVk7QUFDL0IsU0FBU0MsUUFBUSxRQUFRLGVBQWU7QUFDeEMsU0FBU0MsT0FBTyxFQUFFQyxlQUFlLFFBQVEsMkJBQTJCO0FBQ3BFLE9BQU9DLHFCQUFxQiwwQkFBMEI7QUFDdEQsU0FBU0MsY0FBYyxRQUFRLHVDQUF1QztBQUN0RSxPQUFPLGVBQWU7QUFHdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxZQUE2QjtRQUFHQyxhQUFBQSxNQUFNQyxtQkFBQUEsWUFBWUMsV0FBQUE7SUFDdEQsSUFBTSxBQUFFQyxPQUFTakIsYUFBVGlCO0lBQ1IsSUFBTUMsV0FBV1Q7SUFDakIsSUFBTSxBQUFFVSxjQUFnQmhCLFdBQWhCZ0I7SUFDUixJQUFNLEFBQUVDLGNBQWdCWixVQUFoQlk7SUFDUixJQUFxRGYsYUFBQUEsYUFBN0NnQixZQUE2Q2hCLFdBQTdDZ0IsV0FBV0MsQUFBVUMsTUFBd0JsQixXQUFsQ2lCLE9BQVVDLEtBQU9DLGVBQWlCbkIsV0FBakJtQjtJQUNwQyxJQUE4Qm5CLGNBQUFBLGFBQXRCaUIsQUFBVUcsUUFBWXBCLFlBQXRCaUIsT0FBVUc7SUFDbEIsSUFBb0MxQiw2QkFBQUEsU0FBa0IsWUFBL0MyQixhQUE2QjNCLGNBQWpCNEIsZ0JBQWlCNUI7SUFDcEMsSUFBb0JLLGtCQUFBQSxlQUFlLFlBQTNCd0IsSUFBWXhCLGdCQUFad0IsR0FBR0MsT0FBU3pCLGdCQUFUeUI7SUFFWCxJQUFNQyxZQUFZLEFBQUMsYUFBZSxPQUFIZDtJQUUvQixJQUFNZSxjQUFjakMsMEJBQVksb0JBQUE7WUFBT2tDLFVBUS9CQyxRQXNDRkMsYUFHRUM7Ozs7O29CQWpEK0JILCtFQUFXO29CQUNoREwsY0FBYztvQkFFZCxJQUFJVCxZQUFZLENBQUNjLFVBQVU7d0JBQ3pCYixZQUFZVzt3QkFDWjs7O29CQUNGO29CQUVNRzttQ0FBUyxvQkFBQTtnQ0FBT0csUUFlVHJCLHlCQWRMc0IsVUFTRkMsTUFZRUMsUUFPQUM7Ozs7O3dDQTdCY0osNkVBQVM7d0NBQ1o7OzRDQUFNN0IsU0FBU2tDLEdBQUcsQ0FBQyxBQUFDLEdBQWNsQixPQUFaRixXQUFtQlAsT0FBUFMsS0FBSSxLQUFXUCxPQUFSRixNQUFLLEtBQU0sT0FBSEUsS0FBTTtnREFDdEUwQixRQUFRO29EQUNOTixRQUFBQTtvREFDQU8sT0FBTztnREFDVDtnREFDQUMsU0FBUztvREFDUCxtQkFBbUJmLEtBQUtnQixRQUFRO2dEQUNsQzs0Q0FDRjs7O3dDQVJNUixXQUFXO3dDQVNOOzs0Q0FBTUEsU0FBU0csSUFBSTs7O3dDQUExQkYsT0FBTzt3Q0FFWCxJQUFJLGVBQWVBLE1BQU0sT0FBT0EsS0FBS1EsU0FBUzt3Q0FDOUMsSUFBSSxlQUFlUixNQUFNLE9BQU9BLEtBQUtTLFNBQVM7NkNBRTFDLENBQUEsU0FBT2hDLDBCQUFBQSxXQUFXVSxLQUFLLENBQUN1QixLQUFLLGNBQXRCakMsOENBQUFBLHdCQUF3QmtDLGVBQWUsTUFBSyxVQUFTLEdBQTVEOzs7O3dDQUNLOzs0Q0FBTWxDLFdBQVdVLEtBQUssQ0FBQ3VCLEtBQUssQ0FBQ0MsZUFBZSxDQUFDO2dEQUNsRFgsTUFBQUE7Z0RBQ0FGLFFBQUFBOzRDQUNGOzs7d0NBSEFFLE9BQU87Ozt3Q0FNTTs7NENBQU0vQixTQUFTMkMsSUFBSSxDQUFDLEFBQUMsR0FBYzNCLE9BQVpGLFdBQW1CUCxPQUFQUyxLQUFJLEtBQVEsT0FBTFQsT0FBUTtnREFDL0Q4QixTQUFTO29EQUNQLGdCQUFnQjtvREFDaEIsbUJBQW1CZixLQUFLZ0IsUUFBUTtnREFDbEM7Z0RBQ0FNLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2Y7NENBQ3ZCOzs7d0NBTk1DLFNBQVM7d0NBT0Y7OzRDQUFNQSxPQUFPQyxJQUFJOzs7d0NBQXhCQSxPQUFPO3dDQUViLElBQUlELE9BQU9lLE1BQU0sS0FBSyxLQUFLOzRDQUN6Qjs7Z0RBQU9kLEtBQUtlLEdBQUcsQ0FBQ3ZDLEVBQUU7O3dDQUNwQjt3Q0FDQXdCLEtBQUtnQixNQUFNLENBQUNDLE9BQU8sQ0FBQyxTQUFDQzttREFBVXpELE1BQU15RCxLQUFLLENBQUNBLE1BQU1DLE9BQU87O3dDQUN4RDs7NENBQU87Ozs7d0JBQ1Q7d0NBcENNMUI7Ozs7eUJBdUNGVCxjQUFBQTs7OztvQkFDWTs7d0JBQU1TLE9BQU9ULGFBQWFvQyxhQUFhOzs7b0JBQXJEMUIsY0FBYztvQkFDVkMsUUFBUTtvQkFDWlgsYUFBYXFDLFdBQVcsQ0FDckJDLE1BQU0sQ0FBQyxTQUFDMUI7K0JBQVdBLFdBQVdaLGFBQWFvQyxhQUFhO3VCQUN4REgsT0FBTzttQ0FBQyxvQkFBQSxTQUFPckI7Z0NBYURyQix5QkFYTGdELEtBU0ZDLGNBU0VDLGFBU0V6Qjs7Ozs2Q0E1Qk4sQ0FBQ0wsT0FBRDs7Ozt3Q0FDVTs7NENBQU01QixTQUFTa0MsR0FBRyxDQUFDLEFBQUMsR0FBY2xCLE9BQVpGLFdBQW1CUCxPQUFQUyxLQUFJLEtBQVdQLE9BQVJGLE1BQUssS0FBTSxPQUFIRSxLQUFNO2dEQUNqRTBCLFFBQVE7b0RBQ05OLFFBQUFBO29EQUNBTyxPQUFPO2dEQUNUO2dEQUNBQyxTQUFTO29EQUNQLG1CQUFtQmYsS0FBS2dCLFFBQVE7Z0RBQ2xDOzRDQUNGOzs7d0NBUk1rQixNQUFNO3dDQVNPOzs0Q0FBTUEsSUFBSXZCLElBQUk7Ozt3Q0FBN0J3QixlQUFlOzZDQUVmLENBQUEsU0FBT2pELDBCQUFBQSxXQUFXVSxLQUFLLENBQUN1QixLQUFLLGNBQXRCakMsOENBQUFBLHdCQUF3QmtDLGVBQWUsTUFBSyxVQUFTLEdBQTVEOzs7O3dDQUNhOzs0Q0FBTWxDLFdBQVdVLEtBQUssQ0FBQ3VCLEtBQUssQ0FBQ0MsZUFBZSxDQUFDO2dEQUMxRFgsTUFBTTBCO2dEQUNONUIsUUFBQUE7NENBQ0Y7Ozt3Q0FIQTRCLGVBQWU7Ozt3Q0FNRzs7NENBQU16RCxTQUFTMkQsS0FBSyxDQUFDLEFBQUMsR0FBYzNDLE9BQVpGLFdBQW1CUCxPQUFQUyxLQUFJLEtBQVdXLE9BQVJwQixNQUFLLEtBQXlCc0IsT0FBdEJGLGFBQVksWUFBaUIsT0FBUEUsU0FBVTtnREFDckdRLFNBQVM7b0RBQ1AsZ0JBQWdCO29EQUNoQixtQkFBbUJmLEtBQUtnQixRQUFRO2dEQUNsQztnREFDQU0sTUFBTUMsS0FBS0MsU0FBUyxDQUFDVzs0Q0FDdkI7Ozt3Q0FOTUMsY0FBYzs2Q0FPaEJBLENBQUFBLFlBQVlYLE1BQU0sR0FBRyxHQUFFLEdBQXZCVzs7Ozt3Q0FDRjlCLFFBQVE7d0NBQ0s7OzRDQUFNOEIsWUFBWXpCLElBQUk7Ozt3Q0FBN0JBLE9BQU87d0NBQ2JBLEtBQUtnQixNQUFNLENBQUNDLE9BQU8sQ0FBQyxTQUFDQzttREFBVXpELE1BQU15RCxLQUFLLENBQUNBLE1BQU1DLE9BQU87Ozs7Ozs7Ozt3QkFHOUQ7d0NBakNnQnZCOzs7O3lCQWtDZEQsT0FBQUE7Ozs7b0JBQ0YsaURBQWlEO29CQUNqRDs7d0JBQU01QixTQUFTNEQsTUFBTSxDQUFDLEFBQUMsR0FBYzVDLE9BQVpGLFdBQW1CUCxPQUFQUyxLQUFJLEtBQVdQLE9BQVJGLE1BQUssS0FBTSxPQUFIRSxLQUFNOzRCQUN4RDRCLFNBQVM7Z0NBQ1AsbUJBQW1CZixLQUFLZ0IsUUFBUTs0QkFDbEM7d0JBQ0Y7OztvQkFKQTs7Ozs7Ozs7b0JBT1k7O3dCQUFNWjs7O29CQUFwQkMsY0FBYzs7O29CQUdoQmpDLE1BQU1tRSxPQUFPLENBQUN4QyxFQUFFLDBCQUEwQjt3QkFBRXlDLE9BQU8xRCxlQUFlSSxXQUFXdUQsTUFBTSxDQUFDQyxRQUFRLEVBQUUxQztvQkFBTSxJQUNsRzt3QkFBRTJDLFdBQVc7b0JBQUs7b0JBRXBCcEQsWUFBWTtvQkFFWnFELFdBQVc7d0JBQ1R4RCxLQUFLOzRCQUNIeUQsVUFBVSxBQUFDLEdBQXVCNUQsT0FBckJXLE9BQU0saUJBQXVCUyxPQUFScEIsTUFBSyxLQUFlLE9BQVpvQjt3QkFDNUM7b0JBQ0YsR0FBRzs7Ozs7O0lBQ0wsSUFBRztRQUFDaEI7UUFBVU07UUFBY0k7UUFBR0M7UUFBTWQ7UUFBWUs7UUFBYUQ7UUFBYVc7UUFBV1Q7UUFBV0U7UUFBS1Q7UUFBTUU7UUFBSUM7UUFBTVE7S0FBTTtJQUU1SCxJQUFNa0QsVUFBVTdFLDBCQUFZLG9CQUFBOzs7O29CQUMxQjZCLGNBQWM7b0JBQ2Q7O3dCQUFNSSxZQUFZOzs7b0JBQWxCOzs7Ozs7SUFDRixJQUFHO1FBQUNBO0tBQVk7SUFFaEIscUJBQ0Usb0JBQUNsQyxNQUFNK0UsUUFBUSxzQkFDYixvQkFBQ3RFO1FBQ0NVLElBQUc7UUFDSDZELGFBQVk7UUFDWkMsV0FBV2xFO1FBQ1htRSxTQUFTO21CQUFNaEQsWUFBWTs7T0FFMUJILEVBQUUsZUFFSlYsWUFBWVEsNEJBQ1gsb0JBQUN4QjtRQUNDWSxNQUFNZ0I7UUFDTmdELFdBQVcsQUFBQyxHQUFZLE9BQVZsRSxXQUFVO3FCQUV4QixvQkFBQ0Y7UUFBZ0JvRSxXQUFXLEFBQUMsR0FBWSxPQUFWbEUsV0FBVTtxQkFDdkMsb0JBQUNvRSxZQUFJcEQsRUFBRSxzQ0FDUCxvQkFBQ3FELFdBQ0VyRCxFQUFFLDJDQUVMLG9CQUFDdEI7UUFDQ1UsSUFBRztRQUNINkQsYUFBWTtRQUNaSyxNQUFLO1FBQ0xILFNBQVM7bUJBQU01RCxZQUFZVzs7T0FFMUJGLEVBQUUsMEJBRUwsb0JBQUN0QjtRQUNDeUUsU0FBU0o7UUFDVDNELElBQUc7T0FFRlksRUFBRTtBQU9qQjtBQUVBLGVBQWVmLFVBQVUifQ==