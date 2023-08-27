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
var baseClass = "publish-many";
var PublishMany = function(props) {
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
    var modalSlug = "publish-".concat(slug);
    var addDefaultError = useCallback(function() {
        toast.error(t("error:unknown"));
    }, [
        t
    ]);
    var handlePublish = useCallback(function() {
        setSubmitted(true);
        requests.patch("".concat(serverURL).concat(api, "/").concat(slug).concat(getQueryParams({
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
    }, t("publish")), /*#__PURE__*/ React.createElement(Modal, {
        slug: modalSlug,
        className: baseClass
    }, /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: "".concat(baseClass, "__template")
    }, /*#__PURE__*/ React.createElement("h1", null, t("confirmPublish")), /*#__PURE__*/ React.createElement("p", null, t("aboutToPublishSelection", {
        label: getTranslation(plural, i18n)
    })), /*#__PURE__*/ React.createElement(Button, {
        id: "confirm-cancel",
        buttonStyle: "secondary",
        type: "button",
        onClick: submitted ? undefined : function() {
            return toggleModal(modalSlug);
        }
    }, t("general:cancel")), /*#__PURE__*/ React.createElement(Button, {
        onClick: submitted ? undefined : handlePublish,
        id: "confirm-publish"
    }, submitted ? t("publishing") : t("general:confirm")))));
};
export default PublishMany;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1B1Ymxpc2hNYW55L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IE1pbmltYWxUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvTWluaW1hbCc7XG5pbXBvcnQgeyByZXF1ZXN0cyB9IGZyb20gJy4uLy4uLy4uL2FwaSc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU2VsZWN0QWxsU3RhdHVzLCB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9MaXN0L1NlbGVjdGlvblByb3ZpZGVyJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCBQaWxsIGZyb20gJy4uL1BpbGwnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncHVibGlzaC1tYW55JztcblxuY29uc3QgUHVibGlzaE1hbnk6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcmVzZXRQYXJhbXMsXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgc2x1ZyxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBwbHVyYWwsXG4gICAgICB9LFxuICAgICAgdmVyc2lvbnMsXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcGVybWlzc2lvbnMgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyB0b2dnbGVNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuICBjb25zdCB7IHNlbGVjdEFsbCwgY291bnQsIGdldFF1ZXJ5UGFyYW1zIH0gPSB1c2VTZWxlY3Rpb24oKTtcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb2xsZWN0aW9uUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltzbHVnXTtcbiAgY29uc3QgaGFzUGVybWlzc2lvbiA9IGNvbGxlY3Rpb25QZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uO1xuXG4gIGNvbnN0IG1vZGFsU2x1ZyA9IGBwdWJsaXNoLSR7c2x1Z31gO1xuXG4gIGNvbnN0IGFkZERlZmF1bHRFcnJvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB0b2FzdC5lcnJvcih0KCdlcnJvcjp1bmtub3duJykpO1xuICB9LCBbdF0pO1xuXG4gIGNvbnN0IGhhbmRsZVB1Ymxpc2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICAgIHJlcXVlc3RzLnBhdGNoKGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfSR7Z2V0UXVlcnlQYXJhbXMoeyBfc3RhdHVzOiB7IG5vdF9lcXVhbHM6ICdwdWJsaXNoZWQnIH0gfSl9YCwge1xuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBfc3RhdHVzOiAncHVibGlzaGVkJyxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgIH0sXG4gICAgfSkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKHQoJ2dlbmVyYWw6dXBkYXRlZFN1Y2Nlc3NmdWxseScpKTtcbiAgICAgICAgICByZXNldFBhcmFtcyh7IHBhZ2U6IHNlbGVjdEFsbCA/IDEgOiB1bmRlZmluZWQgfSk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICAgICAgICBqc29uLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZERlZmF1bHRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGFkZERlZmF1bHRFcnJvcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbYWRkRGVmYXVsdEVycm9yLCBhcGksIGdldFF1ZXJ5UGFyYW1zLCBpMThuLmxhbmd1YWdlLCBtb2RhbFNsdWcsIHJlc2V0UGFyYW1zLCBzZWxlY3RBbGwsIHNlcnZlclVSTCwgc2x1ZywgdCwgdG9nZ2xlTW9kYWxdKTtcblxuICBpZiAoISh2ZXJzaW9ucz8uZHJhZnRzKSB8fCAoc2VsZWN0QWxsID09PSBTZWxlY3RBbGxTdGF0dXMuTm9uZSB8fCAhaGFzUGVybWlzc2lvbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBpbGxcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGVgfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKTtcbiAgICAgICAgICB0b2dnbGVNb2RhbChtb2RhbFNsdWcpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dCgncHVibGlzaCcpfVxuICAgICAgPC9QaWxsPlxuICAgICAgPE1vZGFsXG4gICAgICAgIHNsdWc9e21vZGFsU2x1Z31cbiAgICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICA+XG4gICAgICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190ZW1wbGF0ZWB9PlxuICAgICAgICAgIDxoMT57dCgnY29uZmlybVB1Ymxpc2gnKX08L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge3QoJ2Fib3V0VG9QdWJsaXNoU2VsZWN0aW9uJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24ocGx1cmFsLCBpMThuKSB9KX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJjb25maXJtLWNhbmNlbFwiXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdHRlZCA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17c3VibWl0dGVkID8gdW5kZWZpbmVkIDogaGFuZGxlUHVibGlzaH1cbiAgICAgICAgICAgIGlkPVwiY29uZmlybS1wdWJsaXNoXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3VibWl0dGVkID8gdCgncHVibGlzaGluZycpIDogdCgnZ2VuZXJhbDpjb25maXJtJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHVibGlzaE1hbnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidG9hc3QiLCJNb2RhbCIsInVzZU1vZGFsIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJCdXR0b24iLCJNaW5pbWFsVGVtcGxhdGUiLCJyZXF1ZXN0cyIsIlNlbGVjdEFsbFN0YXR1cyIsInVzZVNlbGVjdGlvbiIsImdldFRyYW5zbGF0aW9uIiwiUGlsbCIsInVzZUF1dGgiLCJiYXNlQ2xhc3MiLCJQdWJsaXNoTWFueSIsInByb3BzIiwicGVybWlzc2lvbnMiLCJjb2xsZWN0aW9uUGVybWlzc2lvbnMiLCJ2ZXJzaW9ucyIsInJlc2V0UGFyYW1zIiwiY29sbGVjdGlvbiIsInNsdWciLCJsYWJlbHMiLCJwbHVyYWwiLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJ0b2dnbGVNb2RhbCIsInQiLCJpMThuIiwic2VsZWN0QWxsIiwiY291bnQiLCJnZXRRdWVyeVBhcmFtcyIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImNvbGxlY3Rpb25zIiwiaGFzUGVybWlzc2lvbiIsInVwZGF0ZSIsInBlcm1pc3Npb24iLCJtb2RhbFNsdWciLCJhZGREZWZhdWx0RXJyb3IiLCJlcnJvciIsImhhbmRsZVB1Ymxpc2giLCJwYXRjaCIsIl9zdGF0dXMiLCJub3RfZXF1YWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJ0aGVuIiwicmVzIiwianNvbiIsImUiLCJzdGF0dXMiLCJzdWNjZXNzIiwicGFnZSIsInVuZGVmaW5lZCIsImVycm9ycyIsImZvckVhY2giLCJtZXNzYWdlIiwiZHJhZnRzIiwiTm9uZSIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsImgxIiwicCIsImxhYmVsIiwiaWQiLCJidXR0b25TdHlsZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxXQUFXLFFBQVEsUUFBUTtBQUNyRCxTQUFTQyxLQUFLLFFBQVEsaUJBQWlCO0FBQ3ZDLFNBQVNDLEtBQUssRUFBRUMsUUFBUSxRQUFRLHFCQUFxQjtBQUNyRCxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsT0FBT0MsWUFBWSxZQUFZO0FBQy9CLE9BQU9DLHFCQUFxQiwwQkFBMEI7QUFDdEQsU0FBU0MsUUFBUSxRQUFRLGVBQWU7QUFFeEMsU0FBU0MsZUFBZSxFQUFFQyxZQUFZLFFBQVEsaURBQWlEO0FBQy9GLFNBQVNDLGNBQWMsUUFBUSx1Q0FBdUM7QUFDdEUsT0FBT0MsVUFBVSxVQUFVO0FBQzNCLFNBQVNDLE9BQU8sUUFBUSx1QkFBdUI7QUFFL0MsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsY0FBK0IsU0FBQ0M7UUFtQk5DLDBCQUFBQSxjQUNSQywrQkFBQUEsd0JB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