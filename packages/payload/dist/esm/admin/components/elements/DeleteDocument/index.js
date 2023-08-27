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
import { useHistory } from "react-router-dom";
import { Modal, useModal } from "@faceless-ui/modal";
import { Trans, useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import Button from "../Button";
import MinimalTemplate from "../../templates/Minimal";
import { useForm } from "../../forms/Form/context";
import useTitle from "../../../hooks/useTitle";
import { requests } from "../../../api";
import { getTranslation } from "../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "delete-document";
var DeleteDocument = function(props) {
    var titleFromProps = props.title, id = props.id, buttonId = props.buttonId, collection = props.collection, tmp = props.collection, _ref = tmp === void 0 ? {} : tmp, slug = _ref.slug, tmp1 = _ref.labels, singular = (tmp1 === void 0 ? {} : tmp1).singular;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, api = _useConfig_routes.api, admin = _useConfig_routes.admin;
    var setModified = useForm().setModified;
    var _useState = _sliced_to_array(useState(false), 2), deleting = _useState[0], setDeleting = _useState[1];
    var toggleModal = useModal().toggleModal;
    var history = useHistory();
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var title = useTitle(collection);
    var titleToRender = titleFromProps || title;
    var modalSlug = "delete-".concat(id);
    var addDefaultError = useCallback(function() {
        toast.error(t("error:deletingTitle", {
            title: title
        }));
    }, [
        t,
        title
    ]);
    var handleDelete = useCallback(function() {
        setDeleting(true);
        setModified(false);
        requests.delete("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id), {
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
                                toast.success(t("titleDeleted", {
                                    label: getTranslation(singular, i18n),
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
        return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Button, {
            buttonStyle: "none",
            id: buttonId,
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
        }, /*#__PURE__*/ React.createElement("h1", null, t("confirmDeletion")), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement(Trans, {
            i18nKey: "aboutToDelete",
            values: {
                label: getTranslation(singular, i18n),
                title: titleToRender
            },
            t: t
        }, "aboutToDelete", /*#__PURE__*/ React.createElement("strong", null, titleToRender))), /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__actions")
        }, /*#__PURE__*/ React.createElement(Button, {
            id: "confirm-cancel",
            buttonStyle: "secondary",
            type: "button",
            onClick: deleting ? undefined : function() {
                return toggleModal(modalSlug);
            }
        }, t("cancel")), /*#__PURE__*/ React.createElement(Button, {
            onClick: deleting ? undefined : handleDelete,
            id: "confirm-delete"
        }, deleting ? t("deleting") : t("confirm"))))));
    }
    return null;
};
export default DeleteDocument;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RlbGV0ZURvY3VtZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgdXNlVGl0bGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlVGl0bGUnO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi8uLi8uLi9hcGknO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZGVsZXRlLWRvY3VtZW50JztcblxuY29uc3QgRGVsZXRlRG9jdW1lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGU6IHRpdGxlRnJvbVByb3BzLFxuICAgIGlkLFxuICAgIGJ1dHRvbklkLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgc2x1ZyxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBzaW5ndWxhcixcbiAgICAgIH0gPSB7fSxcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHNlcnZlclVSTCwgcm91dGVzOiB7IGFwaSwgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgc2V0TW9kaWZpZWQgfSA9IHVzZUZvcm0oKTtcbiAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdG9nZ2xlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgdGl0bGUgPSB1c2VUaXRsZShjb2xsZWN0aW9uKTtcbiAgY29uc3QgdGl0bGVUb1JlbmRlciA9IHRpdGxlRnJvbVByb3BzIHx8IHRpdGxlO1xuXG4gIGNvbnN0IG1vZGFsU2x1ZyA9IGBkZWxldGUtJHtpZH1gO1xuXG4gIGNvbnN0IGFkZERlZmF1bHRFcnJvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB0b2FzdC5lcnJvcih0KCdlcnJvcjpkZWxldGluZ1RpdGxlJywgeyB0aXRsZSB9KSk7XG4gIH0sIFt0LCB0aXRsZV0pO1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXREZWxldGluZyh0cnVlKTtcbiAgICBzZXRNb2RpZmllZChmYWxzZSk7XG4gICAgcmVxdWVzdHMuZGVsZXRlKGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS8ke2lkfWAsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKHQoJ3RpdGxlRGVsZXRlZCcsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKHNpbmd1bGFyLCBpMThuKSwgdGl0bGUgfSkpO1xuICAgICAgICAgIHJldHVybiBoaXN0b3J5LnB1c2goYCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7c2x1Z31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyk7XG5cbiAgICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgICAganNvbi5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGREZWZhdWx0RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBhZGREZWZhdWx0RXJyb3IoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3NldE1vZGlmaWVkLCBzZXJ2ZXJVUkwsIGFwaSwgc2x1ZywgaWQsIHRvZ2dsZU1vZGFsLCBtb2RhbFNsdWcsIHQsIHNpbmd1bGFyLCBpMThuLCB0aXRsZSwgaGlzdG9yeSwgYWRtaW4sIGFkZERlZmF1bHRFcnJvcl0pO1xuXG4gIGlmIChpZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBidXR0b25TdHlsZT1cIm5vbmVcIlxuICAgICAgICAgIGlkPXtidXR0b25JZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZWB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0RGVsZXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ2RlbGV0ZScpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgc2x1Zz17bW9kYWxTbHVnfVxuICAgICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICA+XG4gICAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RlbXBsYXRlYH0+XG4gICAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1EZWxldGlvbicpfTwvaDE+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPFRyYW5zXG4gICAgICAgICAgICAgICAgaTE4bktleT1cImFib3V0VG9EZWxldGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlcz17eyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oc2luZ3VsYXIsIGkxOG4pLCB0aXRsZTogdGl0bGVUb1JlbmRlciB9fVxuICAgICAgICAgICAgICAgIHQ9e3R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBhYm91dFRvRGVsZXRlXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZVRvUmVuZGVyfVxuICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbnNgfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybS1jYW5jZWxcIlxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGluZyA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnY2FuY2VsJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZGVsZXRpbmcgPyB1bmRlZmluZWQgOiBoYW5kbGVEZWxldGV9XG4gICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtLWRlbGV0ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGVsZXRpbmcgPyB0KCdkZWxldGluZycpIDogdCgnY29uZmlybScpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVEb2N1bWVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ0b2FzdCIsInVzZUhpc3RvcnkiLCJNb2RhbCIsInVzZU1vZGFsIiwiVHJhbnMiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsIkJ1dHRvbiIsIk1pbmltYWxUZW1wbGF0ZSIsInVzZUZvcm0iLCJ1c2VUaXRsZSIsInJlcXVlc3RzIiwiZ2V0VHJhbnNsYXRpb24iLCJiYXNlQ2xhc3MiLCJEZWxldGVEb2N1bWVudCIsInByb3BzIiwidGl0bGUiLCJ0aXRsZUZyb21Qcm9wcyIsImlkIiwiYnV0dG9uSWQiLCJjb2xsZWN0aW9uIiwic2x1ZyIsImxhYmVscyIsInNpbmd1bGFyIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwiYWRtaW4iLCJzZXRNb2RpZmllZCIsImRlbGV0aW5nIiwic2V0RGVsZXRpbmciLCJ0b2dnbGVNb2RhbCIsImhpc3RvcnkiLCJ0IiwiaTE4biIsInRpdGxlVG9SZW5kZXIiLCJtb2RhbFNsdWciLCJhZGREZWZhdWx0RXJyb3IiLCJlcnJvciIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZSIsImhlYWRlcnMiLCJsYW5ndWFnZSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZSIsInN0YXR1cyIsInN1Y2Nlc3MiLCJsYWJlbCIsInB1c2giLCJlcnJvcnMiLCJmb3JFYWNoIiwibWVzc2FnZSIsIkZyYWdtZW50IiwiYnV0dG9uU3R5bGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDEiLCJwIiwiaTE4bktleSIsInZhbHVlcyIsInN0cm9uZyIsImRpdiIsInR5cGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxXQUFXLFFBQVEsUUFBUTtBQUNyRCxTQUFTQyxLQUFLLFFBQVEsaUJBQWlCO0FBQ3ZDLFNBQVNDLFVBQVUsUUFBUSxtQkFBbUI7QUFDOUMsU0FBU0MsS0FBSyxFQUFFQyxRQUFRLFFBQVEscUJBQXFCO0FBQ3JELFNBQVNDLEtBQUssRUFBRUMsY0FBYyxRQUFRLGdCQUFnQjtBQUN0RCxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELE9BQU9DLFlBQVksWUFBWTtB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