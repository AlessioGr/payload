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
var _reacti18next = require("react-i18next");
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _FileDetails = /*#__PURE__*/ _interop_require_default(require("../../../elements/FileDetails"));
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _getTranslation = require("../../../../../utilities/getTranslation");
var _DocumentDrawer = require("../../../elements/DocumentDrawer");
var _ListDrawer = require("../../../elements/ListDrawer");
var _Button = /*#__PURE__*/ _interop_require_default(require("../../../elements/Button"));
var _GetFilterOptions = require("../../../utilities/GetFilterOptions");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
var baseClass = "upload";
var UploadInput = function(props) {
    var _collection, _collection1;
    var path = props.path, required = props.required, readOnly = props.readOnly, style = props.style, className = props.className, width = props.width, description = props.description, label = props.label, relationTo = props.relationTo, value = props.value, onChange = props.onChange, showError = props.showError, _props_serverURL = props.serverURL, serverURL = _props_serverURL === void 0 ? "http://localhost:3000" : _props_serverURL, _props_api = props.api, api = _props_api === void 0 ? "/api" : _props_api, collection = props.collection, errorMessage = props.errorMessage, filterOptions = props.filterOptions;
    var _useTranslation = (0, _reacti18next.useTranslation)("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array((0, _react.useState)(undefined), 2), file = _useState[0], setFile = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), missingFile = _useState1[0], setMissingFile = _useState1[1];
    var _useState2 = _sliced_to_array((0, _react.useState)([
        (_collection = collection) === null || _collection === void 0 ? void 0 : _collection.slug
    ]), 1), collectionSlugs = _useState2[0];
    var _useState3 = _sliced_to_array((0, _react.useState)(), 2), filterOptionsResult = _useState3[0], setFilterOptionsResult = _useState3[1];
    var _useDocumentDrawer = _sliced_to_array((0, _DocumentDrawer.useDocumentDrawer)({
        collectionSlug: collectionSlugs[0]
    }), 3), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1], closeDrawer = _useDocumentDrawer[2].closeDrawer;
    var _useListDrawer = _sliced_to_array((0, _ListDrawer.useListDrawer)({
        collectionSlugs: collectionSlugs,
        filterOptions: filterOptionsResult
    }), 3), ListDrawer = _useListDrawer[0], ListDrawerToggler = _useListDrawer[1], _useListDrawer_ = _useListDrawer[2], closeListDrawer = _useListDrawer_.closeDrawer;
    var classes = [
        "field-type",
        baseClass,
        className,
        showError && "error",
        readOnly && "read-only"
    ].filter(Boolean).join(" ");
    (0, _react.useEffect)(function() {
        if (typeof value === "string" && value !== "") {
            var fetchFile = function() {
                var _ref = _async_to_generator(function() {
                    var response, json;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    fetch("".concat(serverURL).concat(api, "/").concat(relationTo, "/").concat(value), {
                                        credentials: "include",
                                        headers: {
                                            "Accept-Language": i18n.language
                                        }
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                if (!response.ok) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    response.json()
                                ];
                            case 2:
                                json = _state.sent();
                                setFile(json);
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                setMissingFile(true);
                                setFile(undefined);
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function fetchFile() {
                    return _ref.apply(this, arguments);
                };
            }();
            fetchFile();
        } else {
            setFile(undefined);
        }
    }, [
        value,
        relationTo,
        api,
        serverURL,
        i18n
    ]);
    var onSave = (0, _react.useCallback)(function(args) {
        setMissingFile(false);
        onChange(args.doc);
        closeDrawer();
    }, [
        onChange,
        closeDrawer
    ]);
    var onSelect = (0, _react.useCallback)(function(args) {
        setMissingFile(false);
        onChange({
            id: args.docID
        });
        closeListDrawer();
    }, [
        onChange,
        closeListDrawer
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ _react.default.createElement(_GetFilterOptions.GetFilterOptions, {
        filterOptionsResult: filterOptionsResult,
        setFilterOptionsResult: setFilterOptionsResult,
        filterOptions: filterOptions,
        path: path,
        relationTo: relationTo
    }), /*#__PURE__*/ _react.default.createElement(_Error.default, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: "field-".concat(path.replace(/\./gi, "__")),
        label: label,
        required: required
    }), ((_collection1 = collection) === null || _collection1 === void 0 ? void 0 : _collection1.upload) && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, file && !missingFile && /*#__PURE__*/ _react.default.createElement(_FileDetails.default, {
        collection: collection,
        doc: file,
        handleRemove: readOnly ? undefined : function() {
            onChange(null);
        }
    }), (!file || missingFile) && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__buttons")
    }, /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
        className: "".concat(baseClass, "__toggler"),
        disabled: readOnly
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        el: "div",
        disabled: readOnly
    }, t("uploadNewLabel", {
        label: (0, _getTranslation.getTranslation)(collection.labels.singular, i18n)
    }))), /*#__PURE__*/ _react.default.createElement(ListDrawerToggler, {
        className: "".concat(baseClass, "__toggler"),
        disabled: readOnly
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        el: "div",
        disabled: readOnly
    }, t("chooseFromExisting"))))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: file,
        description: description
    })), !readOnly && /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
        onSave: onSave
    }), !readOnly && /*#__PURE__*/ _react.default.createElement(ListDrawer, {
        onSelect: onSelect
    }));
};
var _default = UploadInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1VwbG9hZC9JbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InO1xuaW1wb3J0IEZpbGVEZXRhaWxzIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0ZpbGVEZXRhaWxzJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgRmlsdGVyT3B0aW9ucywgVXBsb2FkRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IERlc2NyaXB0aW9uIH0gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZFR5cGVzIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyB1c2VEb2N1bWVudERyYXdlciB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyJztcbmltcG9ydCB7IHVzZUxpc3REcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9MaXN0RHJhd2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCB7IERvY3VtZW50RHJhd2VyUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Eb2N1bWVudERyYXdlci90eXBlcyc7XG5pbXBvcnQgeyBMaXN0RHJhd2VyUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9MaXN0RHJhd2VyL3R5cGVzJztcbmltcG9ydCB7IEdldEZpbHRlck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvR2V0RmlsdGVyT3B0aW9ucyc7XG5pbXBvcnQgeyBGaWx0ZXJPcHRpb25zUmVzdWx0IH0gZnJvbSAnLi4vUmVsYXRpb25zaGlwL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndXBsb2FkJztcblxuZXhwb3J0IHR5cGUgVXBsb2FkSW5wdXRQcm9wcyA9IE9taXQ8VXBsb2FkRmllbGQsICd0eXBlJz4gJiB7XG4gIHNob3dFcnJvcj86IGJvb2xlYW5cbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nXG4gIHJlYWRPbmx5PzogYm9vbGVhblxuICBwYXRoOiBzdHJpbmdcbiAgcmVxdWlyZWQ/OiBib29sZWFuXG4gIHZhbHVlPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogRGVzY3JpcHRpb25cbiAgb25DaGFuZ2U/OiAoZSkgPT4gdm9pZFxuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHdpZHRoPzogc3RyaW5nXG4gIGZpZWxkVHlwZXM/OiBGaWVsZFR5cGVzXG4gIGNvbGxlY3Rpb24/OiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG4gIHNlcnZlclVSTD86IHN0cmluZ1xuICBhcGk/OiBzdHJpbmdcbiAgZmlsdGVyT3B0aW9uczogRmlsdGVyT3B0aW9uc1xufVxuXG5jb25zdCBVcGxvYWRJbnB1dDogUmVhY3QuRkM8VXBsb2FkSW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHBhdGgsXG4gICAgcmVxdWlyZWQsXG4gICAgcmVhZE9ubHksXG4gICAgc3R5bGUsXG4gICAgY2xhc3NOYW1lLFxuICAgIHdpZHRoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGxhYmVsLFxuICAgIHJlbGF0aW9uVG8sXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gICAgc2hvd0Vycm9yLFxuICAgIHNlcnZlclVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAgIGFwaSA9ICcvYXBpJyxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBmaWx0ZXJPcHRpb25zLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZmllbGRzJyk7XG5cbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW21pc3NpbmdGaWxlLCBzZXRNaXNzaW5nRmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xsZWN0aW9uU2x1Z3NdID0gdXNlU3RhdGUoW2NvbGxlY3Rpb24/LnNsdWddKTtcbiAgY29uc3QgW2ZpbHRlck9wdGlvbnNSZXN1bHQsIHNldEZpbHRlck9wdGlvbnNSZXN1bHRdID0gdXNlU3RhdGU8RmlsdGVyT3B0aW9uc1Jlc3VsdD4oKTtcblxuICBjb25zdCBbXG4gICAgRG9jdW1lbnREcmF3ZXIsXG4gICAgRG9jdW1lbnREcmF3ZXJUb2dnbGVyLFxuICAgIHtcbiAgICAgIGNsb3NlRHJhd2VyLFxuICAgIH0sXG4gIF0gPSB1c2VEb2N1bWVudERyYXdlcih7XG4gICAgY29sbGVjdGlvblNsdWc6IGNvbGxlY3Rpb25TbHVnc1swXSxcbiAgfSk7XG5cbiAgY29uc3QgW1xuICAgIExpc3REcmF3ZXIsXG4gICAgTGlzdERyYXdlclRvZ2dsZXIsXG4gICAge1xuICAgICAgY2xvc2VEcmF3ZXI6IGNsb3NlTGlzdERyYXdlcixcbiAgICB9LFxuICBdID0gdXNlTGlzdERyYXdlcih7XG4gICAgY29sbGVjdGlvblNsdWdzLFxuICAgIGZpbHRlck9wdGlvbnM6IGZpbHRlck9wdGlvbnNSZXN1bHQsXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJykge1xuICAgICAgY29uc3QgZmV0Y2hGaWxlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3NlcnZlclVSTH0ke2FwaX0vJHtyZWxhdGlvblRvfS8ke3ZhbHVlfWAsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHNldEZpbGUoanNvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0TWlzc2luZ0ZpbGUodHJ1ZSk7XG4gICAgICAgICAgc2V0RmlsZSh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmZXRjaEZpbGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmlsZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgfSwgW1xuICAgIHZhbHVlLFxuICAgIHJlbGF0aW9uVG8sXG4gICAgYXBpLFxuICAgIHNlcnZlclVSTCxcbiAgICBpMThuLFxuICBdKTtcblxuICBjb25zdCBvblNhdmUgPSB1c2VDYWxsYmFjazxEb2N1bWVudERyYXdlclByb3BzWydvblNhdmUnXT4oKGFyZ3MpID0+IHtcbiAgICBzZXRNaXNzaW5nRmlsZShmYWxzZSk7XG4gICAgb25DaGFuZ2UoYXJncy5kb2MpO1xuICAgIGNsb3NlRHJhd2VyKCk7XG4gIH0sIFtvbkNoYW5nZSwgY2xvc2VEcmF3ZXJdKTtcblxuICBjb25zdCBvblNlbGVjdCA9IHVzZUNhbGxiYWNrPExpc3REcmF3ZXJQcm9wc1snb25TZWxlY3QnXT4oKGFyZ3MpID0+IHtcbiAgICBzZXRNaXNzaW5nRmlsZShmYWxzZSk7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgaWQ6IGFyZ3MuZG9jSUQsXG4gICAgfSk7XG4gICAgY2xvc2VMaXN0RHJhd2VyKCk7XG4gIH0sIFtvbkNoYW5nZSwgY2xvc2VMaXN0RHJhd2VyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxHZXRGaWx0ZXJPcHRpb25zXG4gICAgICAgIHsuLi57XG4gICAgICAgICAgZmlsdGVyT3B0aW9uc1Jlc3VsdCxcbiAgICAgICAgICBzZXRGaWx0ZXJPcHRpb25zUmVzdWx0LFxuICAgICAgICAgIGZpbHRlck9wdGlvbnMsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICByZWxhdGlvblRvLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxFcnJvclxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIDxMYWJlbFxuICAgICAgICBodG1sRm9yPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAge2NvbGxlY3Rpb24/LnVwbG9hZCAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB7KGZpbGUgJiYgIW1pc3NpbmdGaWxlKSAmJiAoXG4gICAgICAgICAgICA8RmlsZURldGFpbHNcbiAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgZG9jPXtmaWxlfVxuICAgICAgICAgICAgICBoYW5kbGVSZW1vdmU9e3JlYWRPbmx5ID8gdW5kZWZpbmVkIDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG51bGwpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsoIWZpbGUgfHwgbWlzc2luZ0ZpbGUpICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19idXR0b25zYH0+XG4gICAgICAgICAgICAgICAgPERvY3VtZW50RHJhd2VyVG9nZ2xlclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGVyYH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZWw9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0KCd1cGxvYWROZXdMYWJlbCcsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKSB9KX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRG9jdW1lbnREcmF3ZXJUb2dnbGVyPlxuICAgICAgICAgICAgICAgIDxMaXN0RHJhd2VyVG9nZ2xlclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGVyYH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZWw9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0KCdjaG9vc2VGcm9tRXhpc3RpbmcnKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGlzdERyYXdlclRvZ2dsZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8RmllbGREZXNjcmlwdGlvblxuICAgICAgICAgICAgdmFsdWU9e2ZpbGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgICB7IXJlYWRPbmx5ICYmIDxEb2N1bWVudERyYXdlciBvblNhdmU9e29uU2F2ZX0gLz59XG4gICAgICB7IXJlYWRPbmx5ICYmIDxMaXN0RHJhd2VyIG9uU2VsZWN0PXtvblNlbGVjdH0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbnB1dDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJVcGxvYWRJbnB1dCIsInByb3BzIiwiY29sbGVjdGlvbiIsInBhdGgiLCJyZXF1aXJlZCIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwibGFiZWwiLCJyZWxhdGlvblRvIiwidmFsdWUiLCJvbkNoYW5nZSIsInNob3dFcnJvciIsInNlcnZlclVSTCIsImFwaSIsImVycm9yTWVzc2FnZSIsImZpbHRlck9wdGlvbnMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJmaWxlIiwic2V0RmlsZSIsIm1pc3NpbmdGaWxlIiwic2V0TWlzc2luZ0ZpbGUiLCJzbHVnIiwiY29sbGVjdGlvblNsdWdzIiwiZmlsdGVyT3B0aW9uc1Jlc3VsdCIsInNldEZpbHRlck9wdGlvbnNSZXN1bHQiLCJ1c2VEb2N1bWVudERyYXdlciIsImNvbGxlY3Rpb25TbHVnIiwiRG9jdW1lbnREcmF3ZXIiLCJEb2N1bWVudERyYXdlclRvZ2dsZXIiLCJjbG9zZURyYXdlciIsInVzZUxpc3REcmF3ZXIiLCJMaXN0RHJhd2VyIiwiTGlzdERyYXdlclRvZ2dsZXIiLCJjbG9zZUxpc3REcmF3ZXIiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJ1c2VFZmZlY3QiLCJmZXRjaEZpbGUiLCJyZXNwb25zZSIsImpzb24iLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImxhbmd1YWdlIiwib2siLCJvblNhdmUiLCJ1c2VDYWxsYmFjayIsImFyZ3MiLCJkb2MiLCJvblNlbGVjdCIsImlkIiwiZG9jSUQiLCJkaXYiLCJHZXRGaWx0ZXJPcHRpb25zIiwiRXJyb3IiLCJtZXNzYWdlIiwiTGFiZWwiLCJodG1sRm9yIiwicmVwbGFjZSIsInVwbG9hZCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJGaWxlRGV0YWlscyIsImhhbmRsZVJlbW92ZSIsImRpc2FibGVkIiwiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJlbCIsImdldFRyYW5zbGF0aW9uIiwibGFiZWxzIiwic2luZ3VsYXIiLCJGaWVsZERlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQStOQTs7O2VBQUE7Ozs2REEvTndEOzRCQUN6Qjs0REFDYjs0REFDQTtrRUFDTTt1RUFDSzs4QkFLRTs4QkFDRzswQkFDSjs2REFDWDtnQ0FHYztRQUcxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQXNCbEIsSUFBTUMsY0FBMEMsU0FBQ0M7UUF5QlhDLGFBc0cvQkE7SUE5SEwsSUFDRUMsT0FpQkVGLE1BakJGRSxNQUNBQyxXQWdCRUgsTUFoQkZHLFVBQ0FDLFdBZUVKLE1BZkZJLFVBQ0FDLFFBY0VMLE1BZEZLLE9BQ0FDLFlBYUVOLE1BYkZNLFdBQ0FDLFFBWUVQLE1BWkZPLE9BQ0FDLGNBV0VSLE1BWEZRLGFBQ0FDLFFBVUVULE1BVkZTLE9BQ0FDLGFBU0VWLE1BVEZVLFlBQ0FDLFFBUUVYLE1BUkZXLE9BQ0FDLFdBT0VaLE1BUEZZLFVBQ0FDLFlBTUViLE1BTkZhLDhCQU1FYixNQUxGYyxXQUFBQSwwQ0FBWSx5REFLVmQsTUFKRmUsS0FBQUEsOEJBQU0scUJBQ05kLGFBR0VELE1BSEZDLFlBQ0FlLGVBRUVoQixNQUZGZ0IsY0FDQUMsZ0JBQ0VqQixN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