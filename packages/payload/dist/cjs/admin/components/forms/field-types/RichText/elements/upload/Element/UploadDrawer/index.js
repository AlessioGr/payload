"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UploadDrawer", {
    enumerable: true,
    get: function() {
        return UploadDrawer;
    }
});
var _modal = require("@faceless-ui/modal");
var _slate = require("slate");
var _slatereact = require("slate-react");
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _ = /*#__PURE__*/ _interop_require_default(require("../../../../.."));
var _Drawer = require("../../../../../../../elements/Drawer");
var _Auth = require("../../../../../../../utilities/Auth");
var _Locale = require("../../../../../../../utilities/Locale");
var _Form = /*#__PURE__*/ _interop_require_default(require("../../../../../../Form"));
var _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../../../../../RenderFields"));
var _Submit = /*#__PURE__*/ _interop_require_default(require("../../../../../../Submit"));
var _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../../../../../../Form/buildStateFromSchema"));
var _getTranslation = require("../../../../../../../../../utilities/getTranslation");
var _deepCopyObject = /*#__PURE__*/ _interop_require_default(require("../../../../../../../../../utilities/deepCopyObject"));
var _DocumentInfo = require("../../../../../../../utilities/DocumentInfo");
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
var UploadDrawer = function(props) {
    var _fieldProps_admin_upload_collections_relatedCollection_slug, _fieldProps_admin_upload_collections, _fieldProps_admin_upload, _fieldProps_admin, _fieldProps;
    var editor = (0, _slatereact.useSlateStatic)();
    var fieldProps = props.fieldProps, relatedCollection = props.relatedCollection, drawerSlug = props.drawerSlug, element = props.element;
    var _useTranslation = (0, _reacti18next.useTranslation)(), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var user = (0, _Auth.useAuth)().user;
    var closeModal = (0, _modal.useModal)().closeModal;
    var getDocPreferences = (0, _DocumentInfo.useDocumentInfo)().getDocPreferences;
    var _useState = _sliced_to_array((0, _react.useState)({}), 2), initialState = _useState[0], setInitialState = _useState[1];
    var fieldSchema = (_fieldProps = fieldProps) === null || _fieldProps === void 0 ? void 0 : (_fieldProps_admin = _fieldProps.admin) === null || _fieldProps_admin === void 0 ? void 0 : (_fieldProps_admin_upload = _fieldProps_admin.upload) === null || _fieldProps_admin_upload === void 0 ? void 0 : (_fieldProps_admin_upload_collections = _fieldProps_admin_upload.collections) === null || _fieldProps_admin_upload_collections === void 0 ? void 0 : (_fieldProps_admin_upload_collections_relatedCollection_slug = _fieldProps_admin_upload_collections[relatedCollection.slug]) === null || _fieldProps_admin_upload_collections_relatedCollection_slug === void 0 ? void 0 : _fieldProps_admin_upload_collections_relatedCollection_slug.fields;
    var handleUpdateEditData = (0, _react.useCallback)(function(_, data) {
        var newNode = {
            fields: data
        };
        var elementPath = _slatereact.ReactEditor.findPath(editor, element);
        _slate.Transforms.setNodes(editor, newNode, {
            at: elementPath
        });
        closeModal(drawerSlug);
    }, [
        closeModal,
        editor,
        element,
        drawerSlug
    ]);
    (0, _react.useEffect)(function() {
        var awaitInitialState = function() {
            var _ref = _async_to_generator(function() {
                var _element, preferences, state;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                getDocPreferences()
                            ];
                        case 1:
                            preferences = _state.sent();
                            return [
                                4,
                                (0, _buildStateFromSchema.default)({
                                    fieldSchema: fieldSchema,
                                    preferences: preferences,
                                    data: (0, _deepCopyObject.default)(((_element = element) === null || _element === void 0 ? void 0 : _element.fields) || {}),
                                    user: user,
                                    operation: "update",
                                    locale: locale,
                                    t: t
                                })
                            ];
                        case 2:
                            state = _state.sent();
                            setInitialState(state);
                            return [
                                2
                            ];
                    }
                });
            });
            return function awaitInitialState() {
                return _ref.apply(this, arguments);
            };
        }();
        awaitInitialState();
    }, [
        fieldSchema,
        element.fields,
        user,
        locale,
        t,
        getDocPreferences
    ]);
    return /*#__PURE__*/ _react.default.createElement(_Drawer.Drawer, {
        slug: drawerSlug,
        title: t("general:editLabel", {
            label: (0, _getTranslation.getTranslation)(relatedCollection.labels.singular, i18n)
        })
    }, /*#__PURE__*/ _react.default.createElement(_Form.default, {
        onSubmit: handleUpdateEditData,
        initialState: initialState
    }, /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        readOnly: false,
        fieldTypes: _.default,
        fieldSchema: fieldSchema
    }), /*#__PURE__*/ _react.default.createElement(_Submit.default, null, t("fields:saveChanges"))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3VwbG9hZC9FbGVtZW50L1VwbG9hZERyYXdlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgVHJhbnNmb3JtcyB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IFJlYWN0RWRpdG9yLCB1c2VTbGF0ZVN0YXRpYyB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBFbGVtZW50UHJvcHMgfSBmcm9tICcuLic7XG5pbXBvcnQgZmllbGRUeXBlcyBmcm9tICcuLi8uLi8uLi8uLi8uLic7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IERyYXdlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0RyYXdlcic7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9Gb3JtJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vUmVuZGVyRmllbGRzJztcbmltcG9ydCBGb3JtU3VibWl0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL1N1Ym1pdCc7XG5pbXBvcnQgYnVpbGRTdGF0ZUZyb21TY2hlbWEgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vRm9ybS9idWlsZFN0YXRlRnJvbVNjaGVtYSc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgZGVlcENvcHlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2RlZXBDb3B5T2JqZWN0JztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuXG5leHBvcnQgY29uc3QgVXBsb2FkRHJhd2VyOiBSZWFjdC5GQzxFbGVtZW50UHJvcHMgJiB7XG4gIGRyYXdlclNsdWc6IHN0cmluZ1xuICByZWxhdGVkQ29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZWRpdG9yID0gdXNlU2xhdGVTdGF0aWMoKTtcblxuICBjb25zdCB7XG4gICAgZmllbGRQcm9wcyxcbiAgICByZWxhdGVkQ29sbGVjdGlvbixcbiAgICBkcmF3ZXJTbHVnLFxuICAgIGVsZW1lbnQsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyBnZXREb2NQcmVmZXJlbmNlcyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG4gIGNvbnN0IFtpbml0aWFsU3RhdGUsIHNldEluaXRpYWxTdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IGZpZWxkU2NoZW1hID0gZmllbGRQcm9wcz8uYWRtaW4/LnVwbG9hZD8uY29sbGVjdGlvbnM/LltyZWxhdGVkQ29sbGVjdGlvbi5zbHVnXT8uZmllbGRzO1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUVkaXREYXRhID0gdXNlQ2FsbGJhY2soKF8sIGRhdGEpID0+IHtcbiAgICBjb25zdCBuZXdOb2RlID0ge1xuICAgICAgZmllbGRzOiBkYXRhLFxuICAgIH07XG5cbiAgICBjb25zdCBlbGVtZW50UGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgZWxlbWVudCk7XG5cbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKFxuICAgICAgZWRpdG9yLFxuICAgICAgbmV3Tm9kZSxcbiAgICAgIHsgYXQ6IGVsZW1lbnRQYXRoIH0sXG4gICAgKTtcbiAgICBjbG9zZU1vZGFsKGRyYXdlclNsdWcpO1xuICB9LCBbY2xvc2VNb2RhbCwgZWRpdG9yLCBlbGVtZW50LCBkcmF3ZXJTbHVnXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhd2FpdEluaXRpYWxTdGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgYnVpbGRTdGF0ZUZyb21TY2hlbWEoeyBmaWVsZFNjaGVtYSwgcHJlZmVyZW5jZXMsIGRhdGE6IGRlZXBDb3B5T2JqZWN0KGVsZW1lbnQ/LmZpZWxkcyB8fCB7fSksIHVzZXIsIG9wZXJhdGlvbjogJ3VwZGF0ZScsIGxvY2FsZSwgdCB9KTtcbiAgICAgIHNldEluaXRpYWxTdGF0ZShzdGF0ZSk7XG4gICAgfTtcblxuICAgIGF3YWl0SW5pdGlhbFN0YXRlKCk7XG4gIH0sIFtmaWVsZFNjaGVtYSwgZWxlbWVudC5maWVsZHMsIHVzZXIsIGxvY2FsZSwgdCwgZ2V0RG9jUHJlZmVyZW5jZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICB0aXRsZT17dCgnZ2VuZXJhbDplZGl0TGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihyZWxhdGVkQ29sbGVjdGlvbi5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pIH0pfVxuICAgID5cbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVVcGRhdGVFZGl0RGF0YX1cbiAgICAgICAgaW5pdGlhbFN0YXRlPXtpbml0aWFsU3RhdGV9XG4gICAgICA+XG4gICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICByZWFkT25seT17ZmFsc2V9XG4gICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICBmaWVsZFNjaGVtYT17ZmllbGRTY2hlbWF9XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtU3VibWl0PlxuICAgICAgICAgIHt0KCdmaWVsZHM6c2F2ZUNoYW5nZXMnKX1cbiAgICAgICAgPC9Gb3JtU3VibWl0PlxuICAgICAgPC9Gb3JtPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJVcGxvYWREcmF3ZXIiLCJwcm9wcyIsImZpZWxkUHJvcHMiLCJlZGl0b3IiLCJ1c2VTbGF0ZVN0YXRpYyIsInJlbGF0ZWRDb2xsZWN0aW9uIiwiZHJhd2VyU2x1ZyIsImVsZW1lbnQiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwidXNlTG9jYWxlIiwiY29kZSIsImxvY2FsZSIsInVzZXIiLCJ1c2VBdXRoIiwiY2xvc2VNb2RhbCIsInVzZU1vZGFsIiwiZ2V0RG9jUHJlZmVyZW5jZXMiLCJ1c2VEb2N1bWVudEluZm8iLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsImZpZWxkU2NoZW1hIiwiYWRtaW4iLCJ1cGxvYWQiLCJjb2xsZWN0aW9ucyIsInNsdWciLCJmaWVsZHMiLCJoYW5kbGVVcGRhdGVFZGl0RGF0YSIsInVzZUNhbGxiYWNrIiwiXyIsImRhdGEiLCJuZXdOb2RlIiwiZWxlbWVudFBhdGgiLCJSZWFjdEVkaXRvciIsImZpbmRQYXRoIiwiVHJhbnNmb3JtcyIsInNldE5vZGVzIiwiYXQiLCJ1c2VFZmZlY3QiLCJhd2FpdEluaXRpYWxTdGF0ZSIsInByZWZlcmVuY2VzIiwic3RhdGUiLCJidWlsZFN0YXRlRnJvbVNjaGVtYSIsImRlZXBDb3B5T2JqZWN0Iiwib3BlcmF0aW9uIiwiRHJhd2VyIiwidGl0bGUiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwibGFiZWxzIiwic2luZ3VsYXIiLCJGb3JtIiwib25TdWJtaXQiLCJSZW5kZXJGaWVsZHMiLCJyZWFkT25seSIsImZpZWxkVHlwZXMiLCJGb3JtU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7OytCQW1CYUE7OztlQUFBQTs7O3FCQW5CWTtxQkFDRTswQkFDaUI7NkRBQ1k7NEJBQ3pCO3VEQUVSO3NCQUVBO29CQUNDO3NCQUNFOzJEQUNUO21FQUNROzZEQUNGOzJFQUNVOzhCQUNGO3FFQUNKOzRCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNQSxlQUdSLFNBQUNDO1FBZ0JnQkMsNkRBQUFBLHNDQUFBQSwwQkFBQUEsbUJBQUFBO0lBZnBCLElBQU1DLFNBQVNDLElBQUFBLDBCQUFjO0lBRTdCLElBQ0VGLGFBSUVELE1BSkZDLFlBQ0FHLG9CQUdFSixNQUhGSSxtQkFDQUMsYUFFRUwsTUFGRkssWUFDQUMsVUFDRU4sTUFERk07SUFHRixJQUFvQkMsa0JBQUFBLElBQUFBLDRCQUFjLEtBQTFCQyxJQUFZRCxnQkFBWkMsR0FBR0MsT0FBU0YsZ0JBQVRFO0lBQ1gsSUFBeUJDLGFBQUFBLElBQUFBLGlCQUFTLEtBQTFCQyxBQUFNQyxTQUFXRixXQUFqQkM7SUFDUixJQUFNLEFBQUVFLE9BQVNDLElBQUFBLGFBQU8sSUFBaEJEO0lBQ1IsSUFBTSxBQUFFRSxhQUFlQyxJQUFBQSxlQUFRLElBQXZCRDtJQUNSLElBQU0sQUFBRUUsb0JBQXNCQyxJQUFBQSw2QkFBZSxJQUFyQ0Q7SUFDUixJQUF3Q0UsNkJBQUFBLElBQUFBLGVBQVEsRUFBQyxDQUFDLFFBQTNDQyxlQUFpQ0QsY0FBbkJFLGtCQUFtQkY7SUFDeEMsSUFBTUcsZUFBY3JCLGNBQUFBLHdCQUFBQSxtQ0FBQUEsb0JBQUFBLFlBQVlzQixLQUFLLGNBQWpCdEIseUNBQUFBLDJCQUFBQSxrQkFBbUJ1QixNQUFNLGNBQXpCdkIsZ0RBQUFBLHVDQUFBQSx5QkFBMkJ3QixXQUFXLGNBQXRDeEIsNERBQUFBLDhEQUFBQSxvQ0FBd0MsQ0FBQ0csa0JBQWtCc0IsSUFBSSxDQUFDLGNBQWhFekIsa0ZBQUFBLDREQUFrRTBCLE1BQU07SUFFNUYsSUFBTUMsdUJBQXVCQyxJQUFBQSxrQkFBVyxFQUFDLFNBQUNDLEdBQUdDO1FBQzNDLElBQU1DLFVBQVU7WUFDZEwsUUFBUUk7UUFDVjtRQUVBLElBQU1FLGNBQWNDLHVCQUFXLENBQUNDLFFBQVEsQ0FBQ2pDLFFBQVFJO1FBRWpEOEIsaUJBQVUsQ0FBQ0MsUUFBUSxDQUNqQm5DLFFBQ0E4QixTQUNBO1lBQUVNLElBQUlMO1FBQVk7UUFFcEJsQixXQUFXVjtJQUNiLEdBQUc7UUFBQ1U7UUFBWWI7UUFBUUk7UUFBU0Q7S0FBVztJQUU1Q2tDLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFNQzt1QkFBb0Isb0JBQUE7b0JBRWtFbEMsVUFEcEZtQyxhQUNBQzs7Ozs0QkFEYzs7Z0NBQU16Qjs7OzRCQUFwQndCLGNBQWM7NEJBQ047O2dDQUFNRSxJQUFBQSw2QkFBb0IsRUFBQztvQ0FBRXJCLGFBQUFBO29DQUFhbUIsYUFBQUE7b0NBQWFWLE1BQU1hLElBQUFBLHVCQUFjLEVBQUN0QyxFQUFBQSxXQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVNxQixNQUFNLEtBQUksQ0FBQztvQ0FBSWQsTUFBQUE7b0NBQU1nQyxXQUFXO29DQUFVakMsUUFBQUE7b0NBQVFKLEdBQUFBO2dDQUFFOzs7NEJBQWpKa0MsUUFBUTs0QkFDZHJCLGdCQUFnQnFCOzs7Ozs7WUFDbEI7NEJBSk1GOzs7O1FBTU5BO0lBQ0YsR0FBRztRQUFDbEI7UUFBYWhCLFFBQVFxQixNQUFNO1FBQUVkO1FBQU1EO1FBQVFKO1FBQUdTO0tBQWtCO0lBRXBFLHFCQUNFLDZCQUFDNkIsY0FBTTtRQUNMcEIsTUFBTXJCO1FBQ04wQyxPQUFPdkMsRUFBRSxxQkFBcUI7WUFBRXdDLE9BQU9DLElBQUFBLDhCQUFjLEVBQUM3QyxrQkFBa0I4QyxNQUFNLENBQUNDLFFBQVEsRUFBRTFDO1FBQU07cUJBRS9GLDZCQUFDMkMsYUFBSTtRQUNIQyxVQUFVekI7UUFDVlIsY0FBY0E7cUJBRWQsNkJBQUNrQyxxQkFBWTtRQUNYQyxVQUFVO1FBQ1ZDLFlBQVlBLFNBQVU7UUFDdEJsQyxhQUFhQTtzQkFFZiw2QkFBQ21DLGVBQVUsUUFDUmpELEVBQUU7QUFLYiJ9