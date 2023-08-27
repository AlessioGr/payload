"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LinkElement", {
    enumerable: true,
    get: function() {
        return LinkElement;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _slatereact = require("slate-react");
var _slate = require("slate");
var _modal = require("@faceless-ui/modal");
var _reacti18next = require("react-i18next");
var _utilities = require("../utilities");
var _Popup = /*#__PURE__*/ _interop_require_default(require("../../../../../../elements/Popup"));
var _LinkDrawer = require("../LinkDrawer");
var _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../../../../../Form/buildStateFromSchema"));
var _Auth = require("../../../../../../utilities/Auth");
var _Locale = require("../../../../../../utilities/Locale");
var _Config = require("../../../../../../utilities/Config");
var _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("../../../../../Form/reduceFieldsToValues"));
var _deepCopyObject = /*#__PURE__*/ _interop_require_default(require("../../../../../../../../utilities/deepCopyObject"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../../../../../elements/Button"));
var _getTranslation = require("../../../../../../../../utilities/getTranslation");
var _useDrawerSlug = require("../../../../../../elements/Drawer/useDrawerSlug");
var _DocumentInfo = require("../../../../../../utilities/DocumentInfo");
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
var baseClass = "rich-text-link";
/**
 * This function is called when an existing link is edited.
 * When a link is first created, another function is called: {@link ../Button/index.tsx#insertLink}
 */ var insertChange = function(editor, fields, customFieldSchema) {
    var data = (0, _reduceFieldsToValues.default)(fields, true);
    var _Editor_above = _sliced_to_array(_slate.Editor.above(editor), 2), parentPath = _Editor_above[1];
    var newNode = {
        newTab: data.newTab,
        url: data.url,
        linkType: data.linkType,
        doc: data.doc
    };
    if (customFieldSchema) {
        newNode.fields = data.fields;
    }
    _slate.Transforms.setNodes(editor, newNode, {
        at: parentPath
    });
    _slate.Transforms.delete(editor, {
        at: editor.selection.focus.path,
        unit: "block"
    });
    _slate.Transforms.move(editor, {
        distance: 1,
        unit: "offset"
    });
    _slate.Transforms.insertText(editor, String(data.text), {
        at: editor.selection.focus.path
    });
    _slatereact.ReactEditor.focus(editor);
};
var LinkElement = function(props) {
    var _fieldProps_admin_link, _fieldProps_admin, _fieldProps;
    var attributes = props.attributes, children = props.children, element = props.element, editorRef = props.editorRef, fieldProps = props.fieldProps;
    var customFieldSchema = (_fieldProps = fieldProps) === null || _fieldProps === void 0 ? void 0 : (_fieldProps_admin = _fieldProps.admin) === null || _fieldProps_admin === void 0 ? void 0 : (_fieldProps_admin_link = _fieldProps_admin.link) === null || _fieldProps_admin_link === void 0 ? void 0 : _fieldProps_admin_link.fields;
    var editor = (0, _slatereact.useSlate)();
    var config = (0, _Config.useConfig)();
    var user = (0, _Auth.useAuth)().user;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var _useTranslation = (0, _reacti18next.useTranslation)("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useModal = (0, _modal.useModal)(), openModal = _useModal.openModal, toggleModal = _useModal.toggleModal, closeModal = _useModal.closeModal;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), renderModal = _useState[0], setRenderModal = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), renderPopup = _useState1[0], setRenderPopup = _useState1[1];
    var _useState2 = _sliced_to_array((0, _react.useState)({}), 2), initialState = _useState2[0], setInitialState = _useState2[1];
    var getDocPreferences = (0, _DocumentInfo.useDocumentInfo)().getDocPreferences;
    var _useState3 = _sliced_to_array((0, _react.useState)(function() {
        var fields = (0, _utilities.transformExtraFields)(customFieldSchema, config, i18n);
        return fields;
    }), 1), fieldSchema = _useState3[0];
    var drawerSlug = (0, _useDrawerSlug.useDrawerSlug)("rich-text-link");
    var handleTogglePopup = (0, _react.useCallback)(function(render) {
        if (!render) {
            setRenderPopup(render);
        }
    }, []);
    (0, _react.useEffect)(function() {
        var awaitInitialState = function() {
            var _ref = _async_to_generator(function() {
                var data, preferences, state;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            data = {
                                text: _slate.Node.string(element),
                                linkType: element.linkType,
                                url: element.url,
                                doc: element.doc,
                                newTab: element.newTab,
                                fields: (0, _deepCopyObject.default)(element.fields)
                            };
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
                                    data: data,
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
        renderModal,
        element,
        fieldSchema,
        user,
        locale,
        t,
        getDocPreferences
    ]);
    return /*#__PURE__*/ _react.default.createElement("span", _object_spread({
        className: baseClass
    }, attributes), /*#__PURE__*/ _react.default.createElement("span", {
        style: {
            userSelect: "none"
        },
        contentEditable: false
    }, renderModal && /*#__PURE__*/ _react.default.createElement(_LinkDrawer.LinkDrawer, {
        drawerSlug: drawerSlug,
        fieldSchema: fieldSchema,
        handleClose: function() {
            toggleModal(drawerSlug);
            setRenderModal(false);
        },
        handleModalSubmit: function(fields) {
            insertChange(editor, fields, customFieldSchema);
            closeModal(drawerSlug);
        },
        initialState: initialState
    }), /*#__PURE__*/ _react.default.createElement(_Popup.default, {
        buttonType: "none",
        size: "small",
        forceOpen: renderPopup,
        onToggleOpen: handleTogglePopup,
        horizontalAlign: "left",
        verticalAlign: "bottom",
        boundingRef: editorRef,
        render: function() {
            var _element_doc, _element_doc1, _config_collections_find_labels, _config_collections_find;
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "".concat(baseClass, "__popup")
            }, element.linkType === "internal" && ((_element_doc = element.doc) === null || _element_doc === void 0 ? void 0 : _element_doc.relationTo) && ((_element_doc1 = element.doc) === null || _element_doc1 === void 0 ? void 0 : _element_doc1.value) && /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
                i18nKey: "fields:linkedTo",
                values: {
                    label: (0, _getTranslation.getTranslation)((_config_collections_find = config.collections.find(function(param) {
                        var slug = param.slug;
                        return slug === element.doc.relationTo;
                    })) === null || _config_collections_find === void 0 ? void 0 : (_config_collections_find_labels = _config_collections_find.labels) === null || _config_collections_find_labels === void 0 ? void 0 : _config_collections_find_labels.singular, i18n)
                }
            }, /*#__PURE__*/ _react.default.createElement("a", {
                className: "".concat(baseClass, "__link-label"),
                href: "".concat(config.routes.admin, "/collections/").concat(element.doc.relationTo, "/").concat(element.doc.value),
                target: "_blank",
                rel: "noreferrer"
            }, "label")), (element.linkType === "custom" || !element.linkType) && /*#__PURE__*/ _react.default.createElement("a", {
                className: "".concat(baseClass, "__link-label"),
                href: element.url,
                target: "_blank",
                rel: "noreferrer"
            }, element.url), /*#__PURE__*/ _react.default.createElement(_Button.default, {
                className: "".concat(baseClass, "__link-edit"),
                icon: "edit",
                round: true,
                buttonStyle: "icon-label",
                onClick: function(e) {
                    e.preventDefault();
                    setRenderPopup(false);
                    openModal(drawerSlug);
                    setRenderModal(true);
                },
                tooltip: t("general:edit")
            }), /*#__PURE__*/ _react.default.createElement(_Button.default, {
                className: "".concat(baseClass, "__link-close"),
                icon: "x",
                round: true,
                buttonStyle: "icon-label",
                onClick: function(e) {
                    e.preventDefault();
                    (0, _utilities.unwrapLink)(editor);
                },
                tooltip: t("general:remove")
            }));
        }
    })), /*#__PURE__*/ _react.default.createElement("span", {
        tabIndex: 0,
        role: "button",
        className: [
            "".concat(baseClass, "__popup-toggler")
        ].filter(Boolean).join(" "),
        onKeyDown: function(e) {
            if (e.key === "Enter") setRenderPopup(true);
        },
        onClick: function() {
            return setRenderPopup(true);
        }
    }, children));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpbmsvRWxlbWVudC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0RWRpdG9yLCB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCB7IFRyYW5zZm9ybXMsIE5vZGUsIEVkaXRvciB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJztcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdHJhbnNmb3JtRXh0cmFGaWVsZHMsIHVud3JhcExpbmsgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL1BvcHVwJztcbmltcG9ydCB7IExpbmtEcmF3ZXIgfSBmcm9tICcuLi9MaW5rRHJhd2VyJztcbmltcG9ydCB7IEZpZWxkcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL0Zvcm0vdHlwZXMnO1xuaW1wb3J0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hIGZyb20gJy4uLy4uLy4uLy4uLy4uL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9BdXRoJztcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgcmVkdWNlRmllbGRzVG9WYWx1ZXMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vRm9ybS9yZWR1Y2VGaWVsZHNUb1ZhbHVlcyc7XG5pbXBvcnQgZGVlcENvcHlPYmplY3QgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2RlZXBDb3B5T2JqZWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IFByb3BzIGFzIFJpY2hUZXh0RmllbGRQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IHVzZURyYXdlclNsdWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9EcmF3ZXIvdXNlRHJhd2VyU2x1Zyc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmljaC10ZXh0LWxpbmsnO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gYW4gZXhpc3RpbmcgbGluayBpcyBlZGl0ZWQuXG4gKiBXaGVuIGEgbGluayBpcyBmaXJzdCBjcmVhdGVkLCBhbm90aGVyIGZ1bmN0aW9uIGlzIGNhbGxlZDoge0BsaW5rIC4uL0J1dHRvbi9pbmRleC50c3gjaW5zZXJ0TGlua31cbiAqL1xuY29uc3QgaW5zZXJ0Q2hhbmdlID0gKGVkaXRvciwgZmllbGRzLCBjdXN0b21GaWVsZFNjaGVtYSkgPT4ge1xuICBjb25zdCBkYXRhID0gcmVkdWNlRmllbGRzVG9WYWx1ZXMoZmllbGRzLCB0cnVlKTtcblxuICBjb25zdCBbLCBwYXJlbnRQYXRoXSA9IEVkaXRvci5hYm92ZShlZGl0b3IpO1xuXG4gIGNvbnN0IG5ld05vZGU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge1xuICAgIG5ld1RhYjogZGF0YS5uZXdUYWIsXG4gICAgdXJsOiBkYXRhLnVybCxcbiAgICBsaW5rVHlwZTogZGF0YS5saW5rVHlwZSxcbiAgICBkb2M6IGRhdGEuZG9jLFxuICB9O1xuXG4gIGlmIChjdXN0b21GaWVsZFNjaGVtYSkge1xuICAgIG5ld05vZGUuZmllbGRzID0gZGF0YS5maWVsZHM7XG4gIH1cblxuICBUcmFuc2Zvcm1zLnNldE5vZGVzKFxuICAgIGVkaXRvcixcbiAgICBuZXdOb2RlLFxuICAgIHsgYXQ6IHBhcmVudFBhdGggfSxcbiAgKTtcblxuICBUcmFuc2Zvcm1zLmRlbGV0ZShlZGl0b3IsIHsgYXQ6IGVkaXRvci5zZWxlY3Rpb24uZm9jdXMucGF0aCwgdW5pdDogJ2Jsb2NrJyB9KTtcbiAgVHJhbnNmb3Jtcy5tb3ZlKGVkaXRvciwgeyBkaXN0YW5jZTogMSwgdW5pdDogJ29mZnNldCcgfSk7XG4gIFRyYW5zZm9ybXMuaW5zZXJ0VGV4dChlZGl0b3IsIFN0cmluZyhkYXRhLnRleHQpLCB7IGF0OiBlZGl0b3Iuc2VsZWN0aW9uLmZvY3VzLnBhdGggfSk7XG5cbiAgUmVhY3RFZGl0b3IuZm9jdXMoZWRpdG9yKTtcbn07XG5cbmV4cG9ydCBjb25zdCBMaW5rRWxlbWVudDogUmVhY3QuRkM8e1xuICBhdHRyaWJ1dGVzOiBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBlbGVtZW50OiBhbnlcbiAgZmllbGRQcm9wczogUmljaFRleHRGaWVsZFByb3BzXG4gIGVkaXRvclJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PlxufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW4sXG4gICAgZWxlbWVudCxcbiAgICBlZGl0b3JSZWYsXG4gICAgZmllbGRQcm9wcyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGN1c3RvbUZpZWxkU2NoZW1hID0gZmllbGRQcm9wcz8uYWRtaW4/Lmxpbms/LmZpZWxkcztcblxuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZmllbGRzJyk7XG4gIGNvbnN0IHsgb3Blbk1vZGFsLCB0b2dnbGVNb2RhbCwgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgW3JlbmRlck1vZGFsLCBzZXRSZW5kZXJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZW5kZXJQb3B1cCwgc2V0UmVuZGVyUG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5pdGlhbFN0YXRlLCBzZXRJbml0aWFsU3RhdGVdID0gdXNlU3RhdGU8RmllbGRzPih7fSk7XG4gIGNvbnN0IHsgZ2V0RG9jUHJlZmVyZW5jZXMgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCBbZmllbGRTY2hlbWFdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkcyA9IHRyYW5zZm9ybUV4dHJhRmllbGRzKGN1c3RvbUZpZWxkU2NoZW1hLCBjb25maWcsIGkxOG4pO1xuXG5cbiAgICByZXR1cm4gZmllbGRzO1xuICB9KTtcblxuICBjb25zdCBkcmF3ZXJTbHVnID0gdXNlRHJhd2VyU2x1ZygncmljaC10ZXh0LWxpbmsnKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVQb3B1cCA9IHVzZUNhbGxiYWNrKChyZW5kZXIpID0+IHtcbiAgICBpZiAoIXJlbmRlcikge1xuICAgICAgc2V0UmVuZGVyUG9wdXAocmVuZGVyKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF3YWl0SW5pdGlhbFN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGV4dDogTm9kZS5zdHJpbmcoZWxlbWVudCksXG4gICAgICAgIGxpbmtUeXBlOiBlbGVtZW50LmxpbmtUeXBlLFxuICAgICAgICB1cmw6IGVsZW1lbnQudXJsLFxuICAgICAgICBkb2M6IGVsZW1lbnQuZG9jLFxuICAgICAgICBuZXdUYWI6IGVsZW1lbnQubmV3VGFiLFxuICAgICAgICBmaWVsZHM6IGRlZXBDb3B5T2JqZWN0KGVsZW1lbnQuZmllbGRzKSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgYnVpbGRTdGF0ZUZyb21TY2hlbWEoeyBmaWVsZFNjaGVtYSwgcHJlZmVyZW5jZXMsIGRhdGEsIHVzZXIsIG9wZXJhdGlvbjogJ3VwZGF0ZScsIGxvY2FsZSwgdCB9KTtcbiAgICAgIHNldEluaXRpYWxTdGF0ZShzdGF0ZSk7XG4gICAgfTtcblxuICAgIGF3YWl0SW5pdGlhbFN0YXRlKCk7XG4gIH0sIFtyZW5kZXJNb2RhbCwgZWxlbWVudCwgZmllbGRTY2hlbWEsIHVzZXIsIGxvY2FsZSwgdCwgZ2V0RG9jUHJlZmVyZW5jZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgID5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7IHVzZXJTZWxlY3Q6ICdub25lJyB9fVxuICAgICAgICBjb250ZW50RWRpdGFibGU9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICB7cmVuZGVyTW9kYWwgJiYgKFxuICAgICAgICAgIDxMaW5rRHJhd2VyXG4gICAgICAgICAgICBkcmF3ZXJTbHVnPXtkcmF3ZXJTbHVnfVxuICAgICAgICAgICAgZmllbGRTY2hlbWE9e2ZpZWxkU2NoZW1hfVxuICAgICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlTW9kYWwoZHJhd2VyU2x1Zyk7XG4gICAgICAgICAgICAgIHNldFJlbmRlck1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBoYW5kbGVNb2RhbFN1Ym1pdD17KGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICBpbnNlcnRDaGFuZ2UoZWRpdG9yLCBmaWVsZHMsIGN1c3RvbUZpZWxkU2NoZW1hKTtcbiAgICAgICAgICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpbml0aWFsU3RhdGU9e2luaXRpYWxTdGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UG9wdXBcbiAgICAgICAgICBidXR0b25UeXBlPVwibm9uZVwiXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBmb3JjZU9wZW49e3JlbmRlclBvcHVwfVxuICAgICAgICAgIG9uVG9nZ2xlT3Blbj17aGFuZGxlVG9nZ2xlUG9wdXB9XG4gICAgICAgICAgaG9yaXpvbnRhbEFsaWduPVwibGVmdFwiXG4gICAgICAgICAgdmVydGljYWxBbGlnbj1cImJvdHRvbVwiXG4gICAgICAgICAgYm91bmRpbmdSZWY9e2VkaXRvclJlZn1cbiAgICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19wb3B1cGB9PlxuICAgICAgICAgICAgICB7ZWxlbWVudC5saW5rVHlwZSA9PT0gJ2ludGVybmFsJyAmJiBlbGVtZW50LmRvYz8ucmVsYXRpb25UbyAmJiBlbGVtZW50LmRvYz8udmFsdWUgJiYgKFxuICAgICAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICAgICAgaTE4bktleT1cImZpZWxkczpsaW5rZWRUb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM9e3sgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbmZpZy5jb2xsZWN0aW9ucy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gZWxlbWVudC5kb2MucmVsYXRpb25Ubyk/LmxhYmVscz8uc2luZ3VsYXIsIGkxOG4pIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19saW5rLWxhYmVsYH1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7Y29uZmlnLnJvdXRlcy5hZG1pbn0vY29sbGVjdGlvbnMvJHtlbGVtZW50LmRvYy5yZWxhdGlvblRvfS8ke2VsZW1lbnQuZG9jLnZhbHVlfWB9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHsoZWxlbWVudC5saW5rVHlwZSA9PT0gJ2N1c3RvbScgfHwgIWVsZW1lbnQubGlua1R5cGUpICYmIChcbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19saW5rLWxhYmVsYH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2VsZW1lbnQudXJsfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlbGVtZW50LnVybH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xpbmstZWRpdGB9XG4gICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxuICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgc2V0UmVuZGVyUG9wdXAoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKGRyYXdlclNsdWcpO1xuICAgICAgICAgICAgICAgICAgc2V0UmVuZGVyTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdnZW5lcmFsOmVkaXQnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGluay1jbG9zZWB9XG4gICAgICAgICAgICAgICAgaWNvbj1cInhcIlxuICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgdW53cmFwTGluayhlZGl0b3IpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdG9vbHRpcD17dCgnZ2VuZXJhbDpyZW1vdmUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhblxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgIGAke2Jhc2VDbGFzc31fX3BvcHVwLXRvZ2dsZXJgLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgIG9uS2V5RG93bj17KGUpID0+IHsgaWYgKGUua2V5ID09PSAnRW50ZXInKSBzZXRSZW5kZXJQb3B1cCh0cnVlKTsgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UmVuZGVyUG9wdXAodHJ1ZSl9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkxpbmtFbGVtZW50IiwiYmFzZUNsYXNzIiwiaW5zZXJ0Q2hhbmdlIiwiZWRpdG9yIiwiZmllbGRzIiwiY3VzdG9tRmllbGRTY2hlbWEiLCJkYXRhIiwicmVkdWNlRmllbGRzVG9WYWx1ZXMiLCJFZGl0b3IiLCJhYm92ZSIsInBhcmVudFBhdGgiLCJuZXdOb2RlIiwibmV3VGFiIiwidXJsIiwibGlua1R5cGUiLCJkb2MiLCJUcmFuc2Zvcm1zIiwic2V0Tm9kZXMiLCJhdCIsImRlbGV0ZSIsInNlbGVjdGlvbiIsImZvY3VzIiwicGF0aCIsInVuaXQiLCJtb3ZlIiwiZGlzdGFuY2UiLCJpbnNlcnRUZXh0IiwiU3RyaW5nIiwidGV4dCIsIlJlYWN0RWRpdG9yIiwicHJvcHMiLCJmaWVsZFByb3BzIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiZWxlbWVudCIsImVkaXRvclJlZiIsImFkbWluIiwibGluayIsInVzZVNsYXRlIiwiY29uZmlnIiwidXNlQ29uZmlnIiwidXNlciIsInVzZUF1dGgiLCJ1c2VMb2NhbGUiLCJjb2RlIiwibG9jYWxlIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsInVzZU1vZGFsIiwib3Blbk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJjbG9zZU1vZGFsIiwidXNlU3RhdGUiLCJyZW5kZXJNb2RhbCIsInNldFJlbmRlck1vZGFsIiwicmVuZGVyUG9wdXAiLCJzZXRSZW5kZXJQb3B1cCIsImluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsImdldERvY1ByZWZlcmVuY2VzIiwidXNlRG9jdW1lbnRJbmZvIiwidHJhbnNmb3JtRXh0cmFGaWVsZHMiLCJmaWVsZFNjaGVtYSIsImRyYXdlclNsdWciLCJ1c2VEcmF3ZXJTbHVnIiwiaGFuZGxlVG9nZ2xlUG9wdXAiLCJ1c2VDYWxsYmFjayIsInJlbmRlciIsInVzZUVmZmVjdCIsImF3YWl0SW5pdGlhbFN0YXRlIiwicHJlZmVyZW5jZXMiLCJzdGF0ZSIsIk5vZGUiLCJzdHJpbmciLCJkZWVwQ29weU9iamVjdCIsImJ1aWxkU3RhdGVGcm9tU2NoZW1hIiwib3BlcmF0aW9uIiwic3BhbiIsImNsYXNzTmFtZSIsInN0eWxlIiwidXNlclNlbGVjdCIsImNvbnRlbnRFZGl0YWJsZSIsIkxpbmtEcmF3ZXIiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU1vZGFsU3VibWl0IiwiUG9wdXAiLCJidXR0b25UeXBlIiwic2l6ZSIsImZvcmNlT3BlbiIsIm9uVG9nZ2xlT3BlbiIsImhvcml6b250YWxBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJib3VuZGluZ1JlZiIsImRpdiIsInJlbGF0aW9uVG8iLCJ2YWx1ZSIsIlRyYW5zIiwiaTE4bktleSIsInZhbHVlcyIsImxhYmVsIiwiZ2V0VHJhbnNsYXRpb24iLCJjb2xsZWN0aW9ucyIsImZpbmQiLCJzbHVnIiwibGFiZWxzIiwic2luZ3VsYXIiLCJhIiwiaHJlZiIsInJvdXRlcyIsInRhcmdldCIsInJlbCIsIkJ1dHRvbiIsImljb24iLCJyb3VuZCIsImJ1dHRvblN0eWxlIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvb2x0aXAiLCJ1bndyYXBMaW5rIiwidGFiSW5kZXgiLCJyb2xlIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJvbktleURvd24iLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMERhQTs7O2VBQUFBOzs7NkRBMUQyRDswQkFDbEM7cUJBQ0c7cUJBQ2hCOzRCQUNhO3lCQUNXOzREQUMvQjswQkFDUzsyRUFFTTtvQkFDVDtzQkFDRTtzQkFDQTsyRUFDTztxRUFDTjs2REFDUjs4QkFDWTs2QkFFRDs0QkFDRTtRQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUVsQjs7O0NBR0MsR0FDRCxJQUFNQyxlQUFlLFNBQUNDLFFBQVFDLFFBQVFDO0lBQ3BDLElBQU1DLE9BQU9DLElBQUFBLDZCQUFvQixFQUFDSCxRQUFRO0lBRTFDLElBQXVCSSxpQ0FBQUEsYUFBTSxDQUFDQyxLQUFLLENBQUNOLGFBQTNCTyxhQUFjRjtJQUV2QixJQUFNRyxVQUFtQztRQUN2Q0MsUUFBUU4sS0FBS00sTUFBTTtRQUNuQkMsS0FBS1AsS0FBS08sR0FBRztRQUNiQyxVQUFVUixLQUFLUSxRQUFRO1FBQ3ZCQyxLQUFLVCxLQUFLUyxHQUFHO0lBQ2Y7SUFFQSxJQUFJVixtQkFBbUI7UUFDckJNLFFBQVFQLE1BQU0sR0FBR0UsS0FBS0YsTUFBTTtJQUM5QjtJQUVBWSxpQkFBVSxDQUFDQyxRQUFRLENBQ2pCZCxRQUNBUSxTQUNBO1FBQUVPLElBQUlSO0lBQVc7SUFHbkJNLGlCQUFVLENBQUNHLE1BQU0sQ0FBQ2hCLFFB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