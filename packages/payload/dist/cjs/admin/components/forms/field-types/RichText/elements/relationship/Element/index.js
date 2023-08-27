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
var _slatereact = require("slate-react");
var _reacti18next = require("react-i18next");
var _slate = require("slate");
var _Config = require("../../../../../../utilities/Config");
var _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../../../../../hooks/usePayloadAPI"));
var _DocumentDrawer = require("../../../../../../elements/DocumentDrawer");
var _Button = /*#__PURE__*/ _interop_require_default(require("../../../../../../elements/Button"));
var _ListDrawer = require("../../../../../../elements/ListDrawer");
var _getTranslation = require("../../../../../../../../utilities/getTranslation");
var _EnabledRelationshipsCondition = require("../../EnabledRelationshipsCondition");
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
var baseClass = "rich-text-relationship";
var initialParams = {
    depth: 0
};
var Element = function(props) {
    var _value, _value1, _relatedCollection_admin, _relatedCollection, _fieldProps_admin, _fieldProps, _fieldProps_admin1, _fieldProps1, _fieldProps_admin2, _fieldProps2, _value2;
    var attributes = props.attributes, children = props.children, element = props.element, _props_element = props.element, relationTo = _props_element.relationTo, value = _props_element.value, fieldProps = props.fieldProps;
    var _useConfig = (0, _Config.useConfig)(), collections = _useConfig.collections, serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var _useState = _sliced_to_array((0, _react.useState)(function() {
        return collections.filter(function(param) {
            var enableRichTextRelationship = param.admin.enableRichTextRelationship;
            return enableRichTextRelationship;
        }).map(function(param) {
            var slug = param.slug;
            return slug;
        });
    }), 1), enabledCollectionSlugs = _useState[0];
    var _useState1 = _sliced_to_array((0, _react.useState)(function() {
        return collections.find(function(coll) {
            return coll.slug === relationTo;
        });
    }), 2), relatedCollection = _useState1[0], setRelatedCollection = _useState1[1];
    var selected = (0, _slatereact.useSelected)();
    var focused = (0, _slatereact.useFocused)();
    var _useTranslation = (0, _reacti18next.useTranslation)([
        "fields",
        "general"
    ]), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var editor = (0, _slatereact.useSlateStatic)();
    var _useReducer = _sliced_to_array((0, _react.useReducer)(function(state) {
        return state + 1;
    }, 0), 2), cacheBust = _useReducer[0], dispatchCacheBust = _useReducer[1];
    var _usePayloadAPI1 = _sliced_to_array((0, _usePayloadAPI.default)("".concat(serverURL).concat(api, "/").concat(relatedCollection.slug, "/").concat((_value = value) === null || _value === void 0 ? void 0 : _value.id), {
        initialParams: initialParams
    }), 2), data = _usePayloadAPI1[0].data, setParams = _usePayloadAPI1[1].setParams;
    var _useDocumentDrawer = _sliced_to_array((0, _DocumentDrawer.useDocumentDrawer)({
        collectionSlug: relatedCollection.slug,
        id: (_value1 = value) === null || _value1 === void 0 ? void 0 : _value1.id
    }), 3), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1], closeDrawer = _useDocumentDrawer[2].closeDrawer;
    var _useListDrawer = _sliced_to_array((0, _ListDrawer.useListDrawer)({
        collectionSlugs: enabledCollectionSlugs,
        selectedCollection: relatedCollection.slug
    }), 3), ListDrawer = _useListDrawer[0], ListDrawerToggler = _useListDrawer[1], _useListDrawer_ = _useListDrawer[2], closeListDrawer = _useListDrawer_.closeDrawer;
    var removeRelationship = (0, _react.useCallback)(function() {
        var elementPath = _slatereact.ReactEditor.findPath(editor, element);
        _slate.Transforms.removeNodes(editor, {
            at: elementPath
        });
    }, [
        editor,
        element
    ]);
    var updateRelationship = _react.default.useCallback(function(param) {
        var doc = param.doc;
        var elementPath = _slatereact.ReactEditor.findPath(editor, element);
        _slate.Transforms.setNodes(editor, {
            type: "relationship",
            value: {
                id: doc.id
            },
            relationTo: relatedCollection.slug,
            children: [
                {
                    text: " "
                }
            ]
        }, {
            at: elementPath
        });
        setParams(_object_spread_props(_object_spread({}, initialParams), {
            cacheBust: cacheBust
        }));
        closeDrawer();
        dispatchCacheBust();
    }, [
        editor,
        element,
        relatedCollection,
        cacheBust,
        setParams,
        closeDrawer
    ]);
    var swapRelationship = _react.default.useCallback(function(param) {
        var docID = param.docID, collectionConfig = param.collectionConfig;
        var elementPath = _slatereact.ReactEditor.findPath(editor, element);
        _slate.Transforms.setNodes(editor, {
            type: "relationship",
            value: {
                id: docID
            },
            relationTo: collectionConfig.slug,
            children: [
                {
                    text: " "
                }
            ]
        }, {
            at: elementPath
        });
        setRelatedCollection(collections.find(function(coll) {
            return coll.slug === collectionConfig.slug;
        }));
        setParams(_object_spread_props(_object_spread({}, initialParams), {
            cacheBust: cacheBust
        }));
        closeListDrawer();
        dispatchCacheBust();
    }, [
        closeListDrawer,
        editor,
        element,
        cacheBust,
        setParams,
        collections
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread({
        className: [
            baseClass,
            selected && focused && "".concat(baseClass, "--selected")
        ].filter(Boolean).join(" "),
        contentEditable: false
    }, attributes), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("p", {
        className: "".concat(baseClass, "__label")
    }, t("labelRelationship", {
        label: (0, _getTranslation.getTranslation)(relatedCollection.labels.singular, i18n)
    })), /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
        className: "".concat(baseClass, "__doc-drawer-toggler")
    }, /*#__PURE__*/ _react.default.createElement("p", {
        className: "".concat(baseClass, "__title")
    }, data[((_relatedCollection = relatedCollection) === null || _relatedCollection === void 0 ? void 0 : (_relatedCollection_admin = _relatedCollection.admin) === null || _relatedCollection_admin === void 0 ? void 0 : _relatedCollection_admin.useAsTitle) || "id"]))), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__actions")
    }, /*#__PURE__*/ _react.default.createElement(ListDrawerToggler, {
        disabled: (_fieldProps = fieldProps) === null || _fieldProps === void 0 ? void 0 : (_fieldProps_admin = _fieldProps.admin) === null || _fieldProps_admin === void 0 ? void 0 : _fieldProps_admin.readOnly,
        className: "".concat(baseClass, "__list-drawer-toggler")
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        icon: "swap",
        round: true,
        buttonStyle: "icon-label",
        onClick: function() {
        // do nothing
        },
        el: "div",
        tooltip: t("swapRelationship"),
        disabled: (_fieldProps1 = fieldProps) === null || _fieldProps1 === void 0 ? void 0 : (_fieldProps_admin1 = _fieldProps1.admin) === null || _fieldProps_admin1 === void 0 ? void 0 : _fieldProps_admin1.readOnly
    })), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        icon: "x",
        round: true,
        buttonStyle: "icon-label",
        className: "".concat(baseClass, "__removeButton"),
        onClick: function(e) {
            e.preventDefault();
            removeRelationship();
        },
        tooltip: t("fields:removeRelationship"),
        disabled: (_fieldProps2 = fieldProps) === null || _fieldProps2 === void 0 ? void 0 : (_fieldProps_admin2 = _fieldProps2.admin) === null || _fieldProps_admin2 === void 0 ? void 0 : _fieldProps_admin2.readOnly
    })), ((_value2 = value) === null || _value2 === void 0 ? void 0 : _value2.id) && /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
        onSave: updateRelationship
    }), /*#__PURE__*/ _react.default.createElement(ListDrawer, {
        onSelect: swapRelationship
    }), children);
};
var _default = function(props) {
    return /*#__PURE__*/ _react.default.createElement(_EnabledRelationshipsCondition.EnabledRelationshipsCondition, props, /*#__PURE__*/ _react.default.createElement(Element, props));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3JlbGF0aW9uc2hpcC9FbGVtZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMsIHVzZUNhbGxiYWNrLCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0RWRpdG9yLCB1c2VGb2N1c2VkLCB1c2VTZWxlY3RlZCwgdXNlU2xhdGVTdGF0aWMgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgVHJhbnNmb3JtcyB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHVzZVBheWxvYWRBUEkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlUGF5bG9hZEFQSSc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudERyYXdlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCB7IHVzZUxpc3REcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9MaXN0RHJhd2VyJztcbmltcG9ydCB7IFByb3BzIGFzIFJpY2hUZXh0UHJvcHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBFbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbiB9IGZyb20gJy4uLy4uL0VuYWJsZWRSZWxhdGlvbnNoaXBzQ29uZGl0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmljaC10ZXh0LXJlbGF0aW9uc2hpcCc7XG5cbmNvbnN0IGluaXRpYWxQYXJhbXMgPSB7XG4gIGRlcHRoOiAwLFxufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgYXR0cmlidXRlczogSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgZWxlbWVudDogYW55XG4gIGZpZWxkUHJvcHM6IFJpY2hUZXh0UHJvcHNcbn1cbmNvbnN0IEVsZW1lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbixcbiAgICBlbGVtZW50LFxuICAgIGVsZW1lbnQ6IHtcbiAgICAgIHJlbGF0aW9uVG8sXG4gICAgICB2YWx1ZSxcbiAgICB9LFxuICAgIGZpZWxkUHJvcHMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGNvbGxlY3Rpb25zLCBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IFtlbmFibGVkQ29sbGVjdGlvblNsdWdzXSA9IHVzZVN0YXRlKCgpID0+IGNvbGxlY3Rpb25zLmZpbHRlcigoeyBhZG1pbjogeyBlbmFibGVSaWNoVGV4dFJlbGF0aW9uc2hpcCB9IH0pID0+IGVuYWJsZVJpY2hUZXh0UmVsYXRpb25zaGlwKS5tYXAoKHsgc2x1ZyB9KSA9PiBzbHVnKSk7XG4gIGNvbnN0IFtyZWxhdGVkQ29sbGVjdGlvbiwgc2V0UmVsYXRlZENvbGxlY3Rpb25dID0gdXNlU3RhdGUoKCkgPT4gY29sbGVjdGlvbnMuZmluZCgoY29sbCkgPT4gY29sbC5zbHVnID09PSByZWxhdGlvblRvKSk7XG4gIGNvbnN0IHNlbGVjdGVkID0gdXNlU2VsZWN0ZWQoKTtcbiAgY29uc3QgZm9jdXNlZCA9IHVzZUZvY3VzZWQoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbihbJ2ZpZWxkcycsICdnZW5lcmFsJ10pO1xuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZVN0YXRpYygpO1xuICBjb25zdCBbY2FjaGVCdXN0LCBkaXNwYXRjaENhY2hlQnVzdF0gPSB1c2VSZWR1Y2VyKChzdGF0ZSkgPT4gc3RhdGUgKyAxLCAwKTtcbiAgY29uc3QgW3sgZGF0YSB9LCB7IHNldFBhcmFtcyB9XSA9IHVzZVBheWxvYWRBUEkoXG4gICAgYCR7c2VydmVyVVJMfSR7YXBpfS8ke3JlbGF0ZWRDb2xsZWN0aW9uLnNsdWd9LyR7dmFsdWU/LmlkfWAsXG4gICAgeyBpbml0aWFsUGFyYW1zIH0sXG4gICk7XG5cbiAgY29uc3QgW1xuICAgIERvY3VtZW50RHJhd2VyLFxuICAgIERvY3VtZW50RHJhd2VyVG9nZ2xlcixcbiAgICB7XG4gICAgICBjbG9zZURyYXdlcixcbiAgICB9LFxuICBdID0gdXNlRG9jdW1lbnREcmF3ZXIoe1xuICAgIGNvbGxlY3Rpb25TbHVnOiByZWxhdGVkQ29sbGVjdGlvbi5zbHVnLFxuICAgIGlkOiB2YWx1ZT8uaWQsXG4gIH0pO1xuXG4gIGNvbnN0IFtcbiAgICBMaXN0RHJhd2VyLFxuICAgIExpc3REcmF3ZXJUb2dnbGVyLFxuICAgIHtcbiAgICAgIGNsb3NlRHJhd2VyOiBjbG9zZUxpc3REcmF3ZXIsXG4gICAgfSxcbiAgXSA9IHVzZUxpc3REcmF3ZXIoe1xuICAgIGNvbGxlY3Rpb25TbHVnczogZW5hYmxlZENvbGxlY3Rpb25TbHVncyxcbiAgICBzZWxlY3RlZENvbGxlY3Rpb246IHJlbGF0ZWRDb2xsZWN0aW9uLnNsdWcsXG4gIH0pO1xuXG4gIGNvbnN0IHJlbW92ZVJlbGF0aW9uc2hpcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50UGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgZWxlbWVudCk7XG5cbiAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKFxuICAgICAgZWRpdG9yLFxuICAgICAgeyBhdDogZWxlbWVudFBhdGggfSxcbiAgICApO1xuICB9LCBbZWRpdG9yLCBlbGVtZW50XSk7XG5cbiAgY29uc3QgdXBkYXRlUmVsYXRpb25zaGlwID0gUmVhY3QudXNlQ2FsbGJhY2soKHsgZG9jIH0pID0+IHtcbiAgICBjb25zdCBlbGVtZW50UGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgZWxlbWVudCk7XG5cbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKFxuICAgICAgZWRpdG9yLFxuICAgICAge1xuICAgICAgICB0eXBlOiAncmVsYXRpb25zaGlwJyxcbiAgICAgICAgdmFsdWU6IHsgaWQ6IGRvYy5pZCB9LFxuICAgICAgICByZWxhdGlvblRvOiByZWxhdGVkQ29sbGVjdGlvbi5zbHVnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJyAnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyBhdDogZWxlbWVudFBhdGggfSxcbiAgICApO1xuXG4gICAgc2V0UGFyYW1zKHtcbiAgICAgIC4uLmluaXRpYWxQYXJhbXMsXG4gICAgICBjYWNoZUJ1c3QsIC8vIGRvIHRoaXMgdG8gZ2V0IHRoZSB1c2VQYXlsb2FkQVBJIHRvIHJlLWZldGNoIHRoZSBkYXRhIGV2ZW4gdGhvdWdoIHRoZSBVUkwgc3RyaW5nIGhhc24ndCBjaGFuZ2VkXG4gICAgfSk7XG5cbiAgICBjbG9zZURyYXdlcigpO1xuICAgIGRpc3BhdGNoQ2FjaGVCdXN0KCk7XG4gIH0sIFtlZGl0b3IsIGVsZW1lbnQsIHJlbGF0ZWRDb2xsZWN0aW9uLCBjYWNoZUJ1c3QsIHNldFBhcmFtcywgY2xvc2VEcmF3ZXJdKTtcblxuICBjb25zdCBzd2FwUmVsYXRpb25zaGlwID0gUmVhY3QudXNlQ2FsbGJhY2soKHsgZG9jSUQsIGNvbGxlY3Rpb25Db25maWcgfSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRQYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCBlbGVtZW50KTtcblxuICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoXG4gICAgICBlZGl0b3IsXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdyZWxhdGlvbnNoaXAnLFxuICAgICAgICB2YWx1ZTogeyBpZDogZG9jSUQgfSxcbiAgICAgICAgcmVsYXRpb25UbzogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJyAnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyBhdDogZWxlbWVudFBhdGggfSxcbiAgICApO1xuXG4gICAgc2V0UmVsYXRlZENvbGxlY3Rpb24oY29sbGVjdGlvbnMuZmluZCgoY29sbCkgPT4gY29sbC5zbHVnID09PSBjb2xsZWN0aW9uQ29uZmlnLnNsdWcpKTtcblxuICAgIHNldFBhcmFtcyh7XG4gICAgICAuLi5pbml0aWFsUGFyYW1zLFxuICAgICAgY2FjaGVCdXN0LCAvLyBkbyB0aGlzIHRvIGdldCB0aGUgdXNlUGF5bG9hZEFQSSB0byByZS1mZXRjaCB0aGUgZGF0YSBldmVuIHRob3VnaCB0aGUgVVJMIHN0cmluZyBoYXNuJ3QgY2hhbmdlZFxuICAgIH0pO1xuXG4gICAgY2xvc2VMaXN0RHJhd2VyKCk7XG4gICAgZGlzcGF0Y2hDYWNoZUJ1c3QoKTtcbiAgfSwgW2Nsb3NlTGlzdERyYXdlciwgZWRpdG9yLCBlbGVtZW50LCBjYWNoZUJ1c3QsIHNldFBhcmFtcywgY29sbGVjdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgIChzZWxlY3RlZCAmJiBmb2N1c2VkKSAmJiBgJHtiYXNlQ2xhc3N9LS1zZWxlY3RlZGAsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBjb250ZW50RWRpdGFibGU9e2ZhbHNlfVxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PlxuICAgICAgICAgIHt0KCdsYWJlbFJlbGF0aW9uc2hpcCcsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKHJlbGF0ZWRDb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhciwgaTE4bikgfSl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPERvY3VtZW50RHJhd2VyVG9nZ2xlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2RvYy1kcmF3ZXItdG9nZ2xlcmB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGl0bGVgfT5cbiAgICAgICAgICAgIHtkYXRhW3JlbGF0ZWRDb2xsZWN0aW9uPy5hZG1pbj8udXNlQXNUaXRsZSB8fCAnaWQnXX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRG9jdW1lbnREcmF3ZXJUb2dnbGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9uc2B9PlxuICAgICAgICA8TGlzdERyYXdlclRvZ2dsZXJcbiAgICAgICAgICBkaXNhYmxlZD17ZmllbGRQcm9wcz8uYWRtaW4/LnJlYWRPbmx5fVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGlzdC1kcmF3ZXItdG9nZ2xlcmB9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPVwic3dhcFwiXG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGVsPVwiZGl2XCJcbiAgICAgICAgICAgIHRvb2x0aXA9e3QoJ3N3YXBSZWxhdGlvbnNoaXAnKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtmaWVsZFByb3BzPy5hZG1pbj8ucmVhZE9ubHl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MaXN0RHJhd2VyVG9nZ2xlcj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb249XCJ4XCJcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGJ1dHRvblN0eWxlPVwiaWNvbi1sYWJlbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19yZW1vdmVCdXR0b25gfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZW1vdmVSZWxhdGlvbnNoaXAoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRvb2x0aXA9e3QoJ2ZpZWxkczpyZW1vdmVSZWxhdGlvbnNoaXAnKX1cbiAgICAgICAgICBkaXNhYmxlZD17ZmllbGRQcm9wcz8uYWRtaW4/LnJlYWRPbmx5fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7dmFsdWU/LmlkICYmIChcbiAgICAgICAgPERvY3VtZW50RHJhd2VyIG9uU2F2ZT17dXBkYXRlUmVsYXRpb25zaGlwfSAvPlxuICAgICAgKX1cbiAgICAgIDxMaXN0RHJhd2VyIG9uU2VsZWN0PXtzd2FwUmVsYXRpb25zaGlwfSAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEVuYWJsZWRSZWxhdGlvbnNoaXBzQ29uZGl0aW9uIHsuLi5wcm9wc30+XG4gICAgICA8RWxlbWVudCB7Li4ucHJvcHN9IC8+XG4gICAgPC9FbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiaW5pdGlhbFBhcmFtcyIsImRlcHRoIiwiRWxlbWVudCIsInByb3BzIiwidmFsdWUiLCJyZWxhdGVkQ29sbGVjdGlvbiIsImZpZWxkUHJvcHMiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJlbGVtZW50IiwicmVsYXRpb25UbyIsInVzZUNvbmZpZyIsImNvbGxlY3Rpb25zIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwidXNlU3RhdGUiLCJmaWx0ZXIiLCJhZG1pbiIsImVuYWJsZVJpY2hUZXh0UmVsYXRpb25zaGlwIiwibWFwIiwic2x1ZyIsImVuYWJsZWRDb2xsZWN0aW9uU2x1Z3MiLCJmaW5kIiwiY29sbCIsInNldFJlbGF0ZWRDb2xsZWN0aW9uIiwic2VsZWN0ZWQiLCJ1c2VTZWxlY3RlZCIsImZvY3VzZWQiLCJ1c2VGb2N1c2VkIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImVkaXRvciIsInVzZVNsYXRlU3RhdGljIiwidXNlUmVkdWNlciIsInN0YXRlIiwiY2FjaGVCdXN0IiwiZGlzcGF0Y2hDYWNoZUJ1c3QiLCJ1c2VQYXlsb2FkQVBJIiwiaWQiLCJkYXRhIiwic2V0UGFyYW1zIiwidXNlRG9jdW1lbnREcmF3ZXIiLCJjb2xsZWN0aW9uU2x1ZyIsIkRvY3VtZW50RHJhd2VyIiwiRG9jdW1lbnREcmF3ZXJUb2dnbGVyIiwiY2xvc2VEcmF3ZXIiLCJ1c2VMaXN0RHJhd2VyIiwiY29sbGVjdGlvblNsdWdzIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwiTGlzdERyYXdlciIsIkxpc3REcmF3ZXJUb2dnbGVyIiwiY2xvc2VMaXN0RHJhd2VyIiwicmVtb3ZlUmVsYXRpb25zaGlwIiwidXNlQ2FsbGJhY2siLCJlbGVtZW50UGF0aCIsIlJlYWN0RWRpdG9yIiwiZmluZFBhdGgiLCJUcmFuc2Zvcm1zIiwicmVtb3ZlTm9kZXMiLCJhdCIsInVwZGF0ZVJlbGF0aW9uc2hpcCIsIlJlYWN0IiwiZG9jIiwic2V0Tm9kZXMiLCJ0eXBlIiwidGV4dCIsInN3YXBSZWxhdGlvbnNoaXAiLCJkb2NJRCIsImNvbGxlY3Rpb25Db25maWciLCJkaXYiLCJjbGFzc05hbWUiLCJCb29sZWFuIiwiam9pbiIsImNvbnRlbnRFZGl0YWJsZSIsInAiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwibGFiZWxzIiwic2luZ3VsYXIiLCJ1c2VBc1RpdGxlIiwiZGlzYWJsZWQiLCJyZWFkT25seSIsIkJ1dHRvbiIsImljb24iLCJyb3VuZCIsImJ1dHRvblN0eWxlIiwib25DbGljayIsImVsIiwidG9vbHRpcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU2F2ZSIsIm9uU2VsZWN0IiwiRW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBaU1BOzs7ZUFBQTs7OzZEQWpNeUU7MEJBQ0o7NEJBQ3RDO3FCQUNKO3NCQUNEO29FQUNBOzhCQUNROzZEQUNmOzBCQUNXOzhCQUVDOzZDQUNlO1FBRXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsZ0JBQWdCO0lBQ3BCQyxPQUFPO0FBQ1Q7QUFRQSxJQUFNQyxVQUEyQixTQUFDQztRQXFCa0JDLFFBWTVDQSxTQTBGVUMsMEJBQUFBLG9CQU1FQyxtQkFBQUEsYUFZRUEsb0JBQUFBLGNBYUZBLG9CQUFBQSxjQUdiRjtJQTVKTCxJQUNFRyxhQVFFSixNQVJGSSxZQUNBQyxXQU9FTCxNQVBGSyxVQUNBQyxVQU1FTixNQU5GTSwwQkFNRU4sTUFMRk0sU0FDRUMsNEJBQUFBLFlBQ0FOLHVCQUFBQSxPQUVGRSxhQUNFSCxNQURGRztJQUdGLElBQW9ESyxhQUFBQSxJQUFBQSxpQkFBUyxLQUFyREMsY0FBNENELFdBQTVDQyxhQUFhQyxZQUErQkYsV0FBL0JFLFdBQVdDLEFBQVVDLE1BQVVKLFdBQXBCRyxPQUFVQztJQUMxQyxJQUFpQ0MsNkJBQUFBLElBQUFBLGVBQVEsRUFBQztlQUFNSixZQUFZSyxNQUFNLENBQUM7Z0JBQUdDLEFBQVNDLG1DQUFURCxNQUFTQzttQkFBbUNBO1dBQTRCQyxHQUFHLENBQUM7Z0JBQUdDLGFBQUFBO21CQUFXQTs7WUFBekpDLHlCQUEwQk47SUFDakMsSUFBa0RBLDhCQUFBQSxJQUFBQSxlQUFRLEVBQUM7ZUFBTUosWUFBWVcsSUFBSSxDQUFDLFNBQUNDO21CQUFTQSxLQUFLSCxJQUFJLEtBQUtYOztZQUFuR0wsb0JBQTJDVyxlQUF4QlMsdUJBQXdCVDtJQUNsRCxJQUFNVSxXQUFXQyxJQUFBQSx1QkFBVztJQUM1QixJQUFNQyxVQUFVQyxJQUFBQSxzQkFBVTtJQUMxQixJQUFvQkMsa0JBQUFBLElBQUFBLDRCQUFjLEVBQUM7UUFBQztRQUFVO0tBQVUsR0FBaERDLElBQVlELGdCQUFaQyxHQUFHQyxPQUFTRixnQkFBVEU7SUFDWCxJQUFNQyxTQUFTQyxJQUFBQSwwQkFBYztJQUM3QixJQUF1Q0MsK0JBQUFBLElBQUFBLGlCQUFVLEVBQUMsU0FBQ0M7ZUFBVUEsUUFBUTtPQUFHLFFBQWpFQyxZQUFnQ0YsZ0JBQXJCRyxvQkFBcUJIO0lBQ3ZDLElBQWtDSSxtQ0FBQUEsSUFBQUEsc0JBQWEsRUFDN0MsQUFoREosQUFnREssR0FBY3hCLE9BQVpGLFdBQW1CUixPQUFQVSxLQUFJLFlBQUdWLGtCQUFrQmdCLElBQUksRUFBQyxLQUFhLFFBQVZqQixTQUFBQSxtQkFBQUEsNkJBQUFBLE9BQU9vQyxFQUFFLEdBQ3pEO1FBQUV4QyxlQUFBQTtJQUFjLFFBRlgsQUFBRXlDLE9BQXlCRixtQkFBekJFLE1BQVEsQUFBRUMsWUFBZUgsbUJBQWZHO0lBS25CLElBTUlDLHNDQUFBQSxJQUFBQSxpQ0FBaUIsRUFBQztRQUNwQkMsZ0JBQWdCdkMsa0JBQWtCZ0IsSUFBSTtRQUN0Q21CLEVBQUUsR0FBRXBDLFVBQUFBLG1CQUFBQSw4QkFBQUEsUUFBT29DLEVBQUU7SUFDZixRQVJFSyxpQkFLRUYsdUJBSkZHLHdCQUlFSCx1QkFIRixBQUNFSSxjQUVBSixzQkFGQUk7SUFPSixJQU1JQyxrQ0FBQUEsSUFBQUEseUJBQWEsRUFBQztRQUNoQkMsaUJBQWlCM0I7UUFDakI0QixvQkFBb0I3QyxrQkFBa0JnQixJQUFJO0lBQzVDLFFBUkU4QixhQUtFSCxtQkFKRkksb0JBSUVKLHFDQUFBQSxtQkFGQUQsQUFBYU0sa0NBQWJOO0lBT0osSUFBTU8scUJBQXFCQyxJQUFBQSxrQkFBVyxFQUFDO1FBQ3JDLElBQU1DLGNBQWNDLHVCQUFXLENBQUNDLFFBQVEsQ0FBQ3pCLFFBQVF4QjtRQUVqRGtELGlCQUFVLENBQUNDLFdBQVcsQ0FDcEIzQixRQUNBO1lBQUU0QixJQUFJTDtRQUFZO0lBRXRCLEdBQUc7UUFBQ3ZCO1FBQVF4QjtLQUFRO0lBRXBCLElBQU1xRCxxQkFBcUJDLGNBQUssQ0FBQ1IsV0FBVyxDQUFDO1lBQUdTLFlBQUFBO1FBQzlDLElBQU1SLGNBQWNDLHVCQUFXLENBQUNDLFFBQVEsQ0FBQ3pCLFFBQVF4QjtRQUVqRGtELGlCQUFVLENBQUNNLFFBQVEsQ0FDakJoQyxRQUNBO1lBQ0VpQyxNQUFNO1lBQ045RCxPQUFPO2dCQUFFb0MsSUFBSXdCLElBQUl4QixFQUFFO1lBQUM7WUFDcEI5QixZQUFZTCxrQkFBa0JnQixJQUFJO1lBQ2xDYixVQUFVO2dCQUNSO29CQUFFMkQsTUFBTTtnQkFBSTthQUNiO1FBQ0gsR0FDQTtZQUFFTixJQUFJTDtRQUFZO1FBR3BCZCxVQUFVLHdDQUNMMUM7WUFDSHFDLFdBQUFBOztRQUdGVTtRQUNBVDtJQUNGLEdBQUc7UUFBQ0w7UUFBUXhCO1FBQVNKO1FBQW1CZ0M7UUFBV0s7UUFBV0s7S0FBWTtJQUUxRSxJQUFNcUIsbUJBQW1CTCxjQUFLLENBQUNSLFdBQVcsQ0FBQztZQUFHYyxjQUFBQSxPQUFPQyx5QkFBQUE7UUFDbkQsSUFBTWQsY0FBY0MsdUJBQVcsQ0FBQ0MsUUFBUSxDQUFDekIsUUFBUXhCO1FBRWpEa0QsaUJBQVUsQ0FBQ00sUUFBUSxDQUNqQmhDLFFBQ0E7WUFDRWlDLE1BQU07WUFDTjlELE9BQU87Z0JBQUVvQyxJQUFJNkI7WUFBTTtZQUNuQjNELFlBQVk0RCxpQkFBaUJqRCxJQUFJO1lBQ2pDYixVQUFVO2dCQUNSO29CQUFFMkQsTUFBTTtnQkFBSTthQUNiO1FBQ0gsR0FDQTtZQUFFTixJQUFJTDtRQUFZO1FBR3BCL0IscUJBQXFCYixZQUFZVyxJQUFJLENBQUMsU0FBQ0M7bUJBQVNBLEtBQUtILElBQUksS0FBS2lELGlCQUFpQmpELElBQUk7O1FBRW5GcUIsVUFBVSx3Q0FDTDFDO1lBQ0hxQyxXQUFBQTs7UUFHRmdCO1FBQ0FmO0lBQ0YsR0FBRztRQUFDZTtRQUFpQnBCO1FBQVF4QjtRQUFTNEI7UUFBV0s7UUFBVzlCO0tBQVk7SUFFeEUscUJBQ0UsNkJBQUMyRDtRQUNDQyxXQUFXO1lBQ1R6RTtZQUNDMkIsWUFBWUUsV0FBWSxBQUFDLEdBQVksT0FBVjdCLFdBQVU7U0FDdkMsQ0FBQ2tCLE1BQU0sQ0FBQ3dELFNBQVNDLElBQUksQ0FBQztRQUN2QkMsaUJBQWlCO09BQ2JwRSwyQkFFSiw2QkFBQ2dFO1FBQUlDLFdBQVcsQUFBQyxHQUFZLE9BQVZ6RSxXQUFVO3FCQUMzQiw2QkFBQzZFO1FBQUVKLFdBQVcsQUFBQyxHQUFZLE9BQVZ6RSxXQUFVO09BQ3hCZ0MsRUFBRSxxQkFBcUI7UUFBRThDLE9BQU9DLElBQUFBLDhCQUFjLEVBQUN6RSxrQkFBa0IwRSxNQUFNLENBQUNDLFFBQVEsRUFBRWhEO0lBQU0sbUJBRTNGLDZCQUFDYztRQUFzQjBCLFdBQVcsQUFBQyxHQUFZLE9BQVZ6RSxXQUFVO3FCQUM3Qyw2QkFBQzZFO1FBQUVKLFdBQVcsQUFBQyxHQUFZLE9BQVZ6RSxXQUFVO09BQ3hCMEMsSUFBSSxDQUFDcEMsRUFBQUEscUJBQUFBLCtCQUFBQSwwQ0FBQUEsMkJBQUFBLG1CQUFtQmEsS0FBSyxjQUF4QmIsK0NBQUFBLHlCQUEwQjRFLFVBQVUsS0FBSSxLQUFLLG1CQUl6RCw2QkFBQ1Y7UUFBSUMsV0FBVyxBQUFDLEdBQVksT0FBVnpFLFdBQVU7cUJBQzNCLDZCQUFDcUQ7UUFDQzhCLFFBQVEsR0FBRTVFLGNBQUFBLHdCQUFBQSxtQ0FBQUEsb0JBQUFBLFlBQVlZLEtBQUssY0FBakJaLHdDQUFBQSxrQkFBbUI2RSxRQUFRO1FBQ3JDWCxXQUFXLEFBQUMsR0FBWSxPQUFWekUsV0FBVTtxQkFFeEIsNkJBQUNxRixlQUFNO1FBQ0xDLE1BQUs7UUFDTEMsT0FBQUE7UUFDQUMsYUFBWTtRQUNaQyxTQUFTO1FBQ1AsYUFBYTtRQUNmO1FBQ0FDLElBQUc7UUFDSEMsU0FBUzNELEVBQUU7UUFDWG1ELFFBQVEsR0FBRTVFLGVBQUFBLHdCQUFBQSxvQ0FBQUEscUJBQUFBLGFBQVlZLEtBQUssY0FBakJaLHlDQUFBQSxtQkFBbUI2RSxRQUFRO3VCQUd6Qyw2QkFBQ0MsZUFBTTtRQUNMQyxNQUFLO1FBQ0xDLE9BQUFBO1FBQ0FDLGFBQVk7UUFDWmYsV0FBVyxBQUFDLEdBQVksT0FBVnpFLFdBQVU7UUFDeEJ5RixTQUFTLFNBQUNHO1lBQ1JBLEVBQUVDLGNBQWM7WUFDaEJ0QztRQUNGO1FBQ0FvQyxTQUFTM0QsRUFBRTtRQUNYbUQsUUFBUSxHQUFFNUUsZUFBQUEsd0JBQUFBLG9DQUFBQSxxQkFBQUEsYUFBWVksS0FBSyxjQUFqQloseUNBQUFBLG1CQUFtQjZFLFFBQVE7U0FHeEMvRSxFQUFBQSxVQUFBQSxtQkFBQUEsOEJBQUFBLFFBQU9vQyxFQUFFLG1CQUNSLDZCQUFDSztRQUFlZ0QsUUFBUS9CO3NCQUUxQiw2QkFBQ1g7UUFBVzJDLFVBQVUxQjtRQUNyQjVEO0FBR1A7SUFFQSxXQUFlLFNBQUNMO0lBQ2QscUJBQ0UsNkJBQUM0Riw0REFBNkIsRUFBSzVGLHFCQUNqQyw2QkFBQ0QsU0FBWUM7QUFHbkIifQ==