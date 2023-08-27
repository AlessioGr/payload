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
import React, { Fragment, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { Modal, useModal } from "@faceless-ui/modal";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../utilities/Config";
import { Button, MinimalTemplate, Pill } from "../../..";
import { requests } from "../../../../api";
import { getTranslation } from "../../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "restore-version";
var modalSlug = "restore-version";
var Restore = function(param) {
    var collection = param.collection, global = param.global, className = param.className, versionID = param.versionID, originalDocID = param.originalDocID, versionDate = param.versionDate;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, api = _useConfig_routes.api, admin = _useConfig_routes.admin;
    var history = useHistory();
    var toggleModal = useModal().toggleModal;
    var _useState = _sliced_to_array(useState(false), 2), processing = _useState[0], setProcessing = _useState[1];
    var _useTranslation = useTranslation("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var fetchURL = "".concat(serverURL).concat(api);
    var redirectURL;
    var restoreMessage;
    if (collection) {
        fetchURL = "".concat(fetchURL, "/").concat(collection.slug, "/versions/").concat(versionID);
        redirectURL = "".concat(admin, "/collections/").concat(collection.slug, "/").concat(originalDocID);
        restoreMessage = t("aboutToRestore", {
            label: getTranslation(collection.labels.singular, i18n),
            versionDate: versionDate
        });
    }
    if (global) {
        fetchURL = "".concat(fetchURL, "/globals/").concat(global.slug, "/versions/").concat(versionID);
        redirectURL = "".concat(admin, "/globals/").concat(global.slug);
        restoreMessage = t("aboutToRestoreGlobal", {
            label: getTranslation(global.label, i18n),
            versionDate: versionDate
        });
    }
    var handleRestore = useCallback(/*#__PURE__*/ _async_to_generator(function() {
        var res, json;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    setProcessing(true);
                    return [
                        4,
                        requests.post(fetchURL, {
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
                    toast.success(json.message);
                    history.push(redirectURL);
                    return [
                        3,
                        4
                    ];
                case 3:
                    toast.error(t("problemRestoringVersion"));
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
    return /*#__PURE__*/ React.createElement(Fragment, null, /*#__PURE__*/ React.createElement(Pill, {
        onClick: function() {
            return toggleModal(modalSlug);
        },
        className: [
            baseClass,
            className
        ].filter(Boolean).join(" ")
    }, t("restoreThisVersion")), /*#__PURE__*/ React.createElement(Modal, {
        slug: modalSlug,
        className: "".concat(baseClass, "__modal")
    }, /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: "".concat(baseClass, "__modal-template")
    }, /*#__PURE__*/ React.createElement("h1", null, t("confirmVersionRestoration")), /*#__PURE__*/ React.createElement("p", null, restoreMessage), /*#__PURE__*/ React.createElement(Button, {
        buttonStyle: "secondary",
        type: "button",
        onClick: processing ? undefined : function() {
            return toggleModal(modalSlug);
        }
    }, t("general:cancel")), /*#__PURE__*/ React.createElement(Button, {
        onClick: processing ? undefined : handleRestore
    }, processing ? t("restoring") : t("general:confirm")))));
};
export default Restore;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVzdG9yZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IE1vZGFsLCB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyBCdXR0b24sIE1pbmltYWxUZW1wbGF0ZSwgUGlsbCB9IGZyb20gJy4uLy4uLy4uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyByZXF1ZXN0cyB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaSc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3Jlc3RvcmUtdmVyc2lvbic7XG5jb25zdCBtb2RhbFNsdWcgPSAncmVzdG9yZS12ZXJzaW9uJztcblxuY29uc3QgUmVzdG9yZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29sbGVjdGlvbiwgZ2xvYmFsLCBjbGFzc05hbWUsIHZlcnNpb25JRCwgb3JpZ2luYWxEb2NJRCwgdmVyc2lvbkRhdGUgfSkgPT4ge1xuICBjb25zdCB7IHNlcnZlclVSTCwgcm91dGVzOiB7IGFwaSwgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHsgdG9nZ2xlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IFtwcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuXG4gIGxldCBmZXRjaFVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX1gO1xuICBsZXQgcmVkaXJlY3RVUkw6IHN0cmluZztcbiAgbGV0IHJlc3RvcmVNZXNzYWdlOiBzdHJpbmc7XG5cbiAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICBmZXRjaFVSTCA9IGAke2ZldGNoVVJMfS8ke2NvbGxlY3Rpb24uc2x1Z30vdmVyc2lvbnMvJHt2ZXJzaW9uSUR9YDtcbiAgICByZWRpcmVjdFVSTCA9IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vJHtvcmlnaW5hbERvY0lEfWA7XG4gICAgcmVzdG9yZU1lc3NhZ2UgPSB0KCdhYm91dFRvUmVzdG9yZScsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKSwgdmVyc2lvbkRhdGUgfSk7XG4gIH1cblxuICBpZiAoZ2xvYmFsKSB7XG4gICAgZmV0Y2hVUkwgPSBgJHtmZXRjaFVSTH0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS92ZXJzaW9ucy8ke3ZlcnNpb25JRH1gO1xuICAgIHJlZGlyZWN0VVJMID0gYCR7YWRtaW59L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z31gO1xuICAgIHJlc3RvcmVNZXNzYWdlID0gdCgnYWJvdXRUb1Jlc3RvcmVHbG9iYWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihnbG9iYWwubGFiZWwsIGkxOG4pLCB2ZXJzaW9uRGF0ZSB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc3RvcmUgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgc2V0UHJvY2Vzc2luZyh0cnVlKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3RzLnBvc3QoZmV0Y2hVUkwsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICB0b2FzdC5zdWNjZXNzKGpzb24ubWVzc2FnZSk7XG4gICAgICBoaXN0b3J5LnB1c2gocmVkaXJlY3RVUkwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2FzdC5lcnJvcih0KCdwcm9ibGVtUmVzdG9yaW5nVmVyc2lvbicpKTtcbiAgICB9XG4gIH0sIFtmZXRjaFVSTCwgaGlzdG9yeSwgcmVkaXJlY3RVUkwsIHQsIGkxOG5dKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxQaWxsXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgIGNsYXNzTmFtZT17W2Jhc2VDbGFzcywgY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgPlxuICAgICAgICB7dCgncmVzdG9yZVRoaXNWZXJzaW9uJyl9XG4gICAgICA8L1BpbGw+XG4gICAgICA8TW9kYWxcbiAgICAgICAgc2x1Zz17bW9kYWxTbHVnfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vZGFsYH1cbiAgICAgID5cbiAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21vZGFsLXRlbXBsYXRlYH0+XG4gICAgICAgICAgPGgxPnt0KCdjb25maXJtVmVyc2lvblJlc3RvcmF0aW9uJyl9PC9oMT5cbiAgICAgICAgICA8cD57cmVzdG9yZU1lc3NhZ2V9PC9wPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17cHJvY2Vzc2luZyA/IHVuZGVmaW5lZCA6ICgpID0+IHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17cHJvY2Vzc2luZyA/IHVuZGVmaW5lZCA6IGhhbmRsZVJlc3RvcmV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Byb2Nlc3NpbmcgPyB0KCdyZXN0b3JpbmcnKSA6IHQoJ2dlbmVyYWw6Y29uZmlybScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L01pbmltYWxUZW1wbGF0ZT5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RvcmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ0b2FzdCIsIk1vZGFsIiwidXNlTW9kYWwiLCJ1c2VIaXN0b3J5IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJCdXR0b24iLCJNaW5pbWFsVGVtcGxhdGUiLCJQaWxsIiwicmVxdWVzdHMiLCJnZXRUcmFuc2xhdGlvbiIsImJhc2VDbGFzcyIsIm1vZGFsU2x1ZyIsIlJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2xvYmFsIiwiY2xhc3NOYW1lIiwidmVyc2lvbklEIiwib3JpZ2luYWxEb2NJRCIsInZlcnNpb25EYXRlIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwiYWRtaW4iLCJoaXN0b3J5IiwidG9nZ2xlTW9kYWwiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInQiLCJpMThuIiwiZmV0Y2hVUkwiLCJyZWRpcmVjdFVSTCIsInJlc3RvcmVNZXNzYWdlIiwic2x1ZyIsImxhYmVsIiwibGFiZWxzIiwic2luZ3VsYXIiLCJoYW5kbGVSZXN0b3JlIiwicmVzIiwianNvbiIsInBvc3QiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJzdGF0dXMiLCJzdWNjZXNzIiwibWVzc2FnZSIsInB1c2giLCJlcnJvciIsIm9uQ2xpY2siLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImgxIiwicCIsImJ1dHRvblN0eWxlIiwidHlwZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFDL0QsU0FBU0MsS0FBSyxRQUFRLGlCQUFpQjtBQUN2QyxTQUFTQyxLQUFLLEVBQUVDLFFBQVEsUUFBUSxxQkFBcUI7QUFDckQsU0FBU0MsVUFBVSxRQUFRLG1CQUFtQjtBQUM5QyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSw0QkFBNEI7QUFDdEQsU0FBU0MsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLElBQUksUUFBUSxXQUFXO0FBRXpELFNBQVNDLFFBQVEsUUFBUSxrQkFBa0I7QUFDM0MsU0FBU0MsY0FBYyxRQUFRLDBDQUEwQztBQUV6RSxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUNsQixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLFVBQTJCO1FBQUdDLG1CQUFBQSxZQUFZQyxlQUFBQSxRQUFRQyxrQkFBQUEsV0FBV0Msa0JBQUFBLFdBQVdDLHNC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