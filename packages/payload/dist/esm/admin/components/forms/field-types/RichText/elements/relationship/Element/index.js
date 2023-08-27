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
import React, { useCallback, useReducer, useState } from "react";
import { ReactEditor, useFocused, useSelected, useSlateStatic } from "slate-react";
import { useTranslation } from "react-i18next";
import { Transforms } from "slate";
import { useConfig } from "../../../../../../utilities/Config";
import usePayloadAPI from "../../../../../../../hooks/usePayloadAPI";
import { useDocumentDrawer } from "../../../../../../elements/DocumentDrawer";
import Button from "../../../../../../elements/Button";
import { useListDrawer } from "../../../../../../elements/ListDrawer";
import { getTranslation } from "../../../../../../../../utilities/getTranslation";
import { EnabledRelationshipsCondition } from "../../EnabledRelationshipsCondition";
import "./index.scss";
var baseClass = "rich-text-relationship";
var initialParams = {
    depth: 0
};
var Element = function(props) {
    var _value, _value1, _relatedCollection_admin, _relatedCollection, _fieldProps_admin, _fieldProps, _fieldProps_admin1, _fieldProps1, _fieldProps_admin2, _fieldProps2, _value2;
    var attributes = props.attributes, children = props.children, element = props.element, _props_element = props.element, relationTo = _props_element.relationTo, value = _props_element.value, fieldProps = props.fieldProps;
    var _useConfig = useConfig(), collections = _useConfig.collections, serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var _useState = _sliced_to_array(useState(function() {
        return collections.filter(function(param) {
            var enableRichTextRelationship = param.admin.enableRichTextRelationship;
            return enableRichTextRelationship;
        }).map(function(param) {
            var slug = param.slug;
            return slug;
        });
    }), 1), enabledCollectionSlugs = _useState[0];
    var _useState1 = _sliced_to_array(useState(function() {
        return collections.find(function(coll) {
            return coll.slug === relationTo;
        });
    }), 2), relatedCollection = _useState1[0], setRelatedCollection = _useState1[1];
    var selected = useSelected();
    var focused = useFocused();
    var _useTranslation = useTranslation([
        "fields",
        "general"
    ]), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var editor = useSlateStatic();
    var _useReducer = _sliced_to_array(useReducer(function(state) {
        return state + 1;
    }, 0), 2), cacheBust = _useReducer[0], dispatchCacheBust = _useReducer[1];
    var _usePayloadAPI = _sliced_to_array(usePayloadAPI("".concat(serverURL).concat(api, "/").concat(relatedCollection.slug, "/").concat((_value = value) === null || _value === void 0 ? void 0 : _value.id), {
        initialParams: initialParams
    }), 2), data = _usePayloadAPI[0].data, setParams = _usePayloadAPI[1].setParams;
    var _useDocumentDrawer = _sliced_to_array(useDocumentDrawer({
        collectionSlug: relatedCollection.slug,
        id: (_value1 = value) === null || _value1 === void 0 ? void 0 : _value1.id
    }), 3), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1], closeDrawer = _useDocumentDrawer[2].closeDrawer;
    var _useListDrawer = _sliced_to_array(useListDrawer({
        collectionSlugs: enabledCollectionSlugs,
        selectedCollection: relatedCollection.slug
    }), 3), ListDrawer = _useListDrawer[0], ListDrawerToggler = _useListDrawer[1], _useListDrawer_ = _useListDrawer[2], closeListDrawer = _useListDrawer_.closeDrawer;
    var removeRelationship = useCallback(function() {
        var elementPath = ReactEditor.findPath(editor, element);
        Transforms.removeNodes(editor, {
            at: elementPath
        });
    }, [
        editor,
        element
    ]);
    var updateRelationship = React.useCallback(function(param) {
        var doc = param.doc;
        var elementPath = ReactEditor.findPath(editor, element);
        Transforms.setNodes(editor, {
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
    var swapRelationship = React.useCallback(function(param) {
        var docID = param.docID, collectionConfig = param.collectionConfig;
        var elementPath = ReactEditor.findPath(editor, element);
        Transforms.setNodes(editor, {
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
    return /*#__PURE__*/ React.createElement("div", _object_spread({
        className: [
            baseClass,
            selected && focused && "".concat(baseClass, "--selected")
        ].filter(Boolean).join(" "),
        contentEditable: false
    }, attributes), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("p", {
        className: "".concat(baseClass, "__label")
    }, t("labelRelationship", {
        label: getTranslation(relatedCollection.labels.singular, i18n)
    })), /*#__PURE__*/ React.createElement(DocumentDrawerToggler, {
        className: "".concat(baseClass, "__doc-drawer-toggler")
    }, /*#__PURE__*/ React.createElement("p", {
        className: "".concat(baseClass, "__title")
    }, data[((_relatedCollection = relatedCollection) === null || _relatedCollection === void 0 ? void 0 : (_relatedCollection_admin = _relatedCollection.admin) === null || _relatedCollection_admin === void 0 ? void 0 : _relatedCollection_admin.useAsTitle) || "id"]))), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__actions")
    }, /*#__PURE__*/ React.createElement(ListDrawerToggler, {
        disabled: (_fieldProps = fieldProps) === null || _fieldProps === void 0 ? void 0 : (_fieldProps_admin = _fieldProps.admin) === null || _fieldProps_admin === void 0 ? void 0 : _fieldProps_admin.readOnly,
        className: "".concat(baseClass, "__list-drawer-toggler")
    }, /*#__PURE__*/ React.createElement(Button, {
        icon: "swap",
        round: true,
        buttonStyle: "icon-label",
        onClick: function() {
        // do nothing
        },
        el: "div",
        tooltip: t("swapRelationship"),
        disabled: (_fieldProps1 = fieldProps) === null || _fieldProps1 === void 0 ? void 0 : (_fieldProps_admin1 = _fieldProps1.admin) === null || _fieldProps_admin1 === void 0 ? void 0 : _fieldProps_admin1.readOnly
    })), /*#__PURE__*/ React.createElement(Button, {
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
    })), ((_value2 = value) === null || _value2 === void 0 ? void 0 : _value2.id) && /*#__PURE__*/ React.createElement(DocumentDrawer, {
        onSave: updateRelationship
    }), /*#__PURE__*/ React.createElement(ListDrawer, {
        onSelect: swapRelationship
    }), children);
};
export default function(props) {
    return /*#__PURE__*/ React.createElement(EnabledRelationshipsCondition, props, /*#__PURE__*/ React.createElement(Element, props));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3JlbGF0aW9uc2hpcC9FbGVtZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMsIHVzZUNhbGxiYWNrLCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0RWRpdG9yLCB1c2VGb2N1c2VkLCB1c2VTZWxlY3RlZCwgdXNlU2xhdGVTdGF0aWMgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgVHJhbnNmb3JtcyB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHVzZVBheWxvYWRBUEkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlUGF5bG9hZEFQSSc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudERyYXdlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCB7IHVzZUxpc3REcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9MaXN0RHJhd2VyJztcbmltcG9ydCB7IFByb3BzIGFzIFJpY2hUZXh0UHJvcHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBFbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbiB9IGZyb20gJy4uLy4uL0VuYWJsZWRSZWxhdGlvbnNoaXBzQ29uZGl0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmljaC10ZXh0LXJlbGF0aW9uc2hpcCc7XG5cbmNvbnN0IGluaXRpYWxQYXJhbXMgPSB7XG4gIGRlcHRoOiAwLFxufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgYXR0cmlidXRlczogSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgZWxlbWVudDogYW55XG4gIGZpZWxkUHJvcHM6IFJpY2hUZXh0UHJvcHNcbn1cbmNvbnN0IEVsZW1lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbixcbiAgICBlbGVtZW50LFxuICAgIGVsZW1lbnQ6IHtcbiAgICAgIHJlbGF0aW9uVG8sXG4gICAgICB2YWx1ZSxcbiAgICB9LFxuICAgIGZpZWxkUHJvcHMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGNvbGxlY3Rpb25zLCBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IFtlbmFibGVkQ29sbGVjdGlvblNsdWdzXSA9IHVzZVN0YXRlKCgpID0+IGNvbGxlY3Rpb25zLmZpbHRlcigoeyBhZG1pbjogeyBlbmFibGVSaWNoVGV4dFJlbGF0aW9uc2hpcCB9IH0pID0+IGVuYWJsZVJpY2hUZXh0UmVsYXRpb25zaGlwKS5tYXAoKHsgc2x1ZyB9KSA9PiBzbHVnKSk7XG4gIGNvbnN0IFtyZWxhdGVkQ29sbGVjdGlvbiwgc2V0UmVsYXRlZENvbGxlY3Rpb25dID0gdXNlU3RhdGUoKCkgPT4gY29sbGVjdGlvbnMuZmluZCgoY29sbCkgPT4gY29sbC5zbHVnID09PSByZWxhdGlvblRvKSk7XG4gIGNvbnN0IHNlbGVjdGVkID0gdXNlU2VsZWN0ZWQoKTtcbiAgY29uc3QgZm9jdXNlZCA9IHVzZUZvY3VzZWQoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbihbJ2ZpZWxkcycsICdnZW5lcmFsJ10pO1xuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZVN0YXRpYygpO1xuICBjb25zdCBbY2FjaGVCdXN0LCBkaXNwYXRjaENhY2hlQnVzdF0gPSB1c2VSZWR1Y2VyKChzdGF0ZSkgPT4gc3RhdGUgKyAxLCAwKTtcbiAgY29uc3QgW3sgZGF0YSB9LCB7IHNldFBhcmFtcyB9XSA9IHVzZVBheWxvYWRBUEkoXG4gICAgYCR7c2VydmVyVVJMfSR7YXBpfS8ke3JlbGF0ZWRDb2xsZWN0aW9uLnNsdWd9LyR7dmFsdWU/LmlkfWAsXG4gICAgeyBpbml0aWFsUGFyYW1zIH0sXG4gICk7XG5cbiAgY29uc3QgW1xuICAgIERvY3VtZW50RHJhd2VyLFxuICAgIERvY3VtZW50RHJhd2VyVG9nZ2xlcixcbiAgICB7XG4gICAgICBjbG9zZURyYXdlcixcbiAgICB9LFxuICBdID0gdXNlRG9jdW1lbnREcmF3ZXIoe1xuICAgIGNvbGxlY3Rpb25TbHVnOiByZWxhdGVkQ29sbGVjdGlvbi5zbHVnLFxuICAgIGlkOiB2YWx1ZT8uaWQsXG4gIH0pO1xuXG4gIGNvbnN0IFtcbiAgICBMaXN0RHJhd2VyLFxuICAgIExpc3REcmF3ZXJUb2dnbGVyLFxuICAgIHtcbiAgICAgIGNsb3NlRHJhd2VyOiBjbG9zZUxpc3REcmF3ZXIsXG4gICAgfSxcbiAgXSA9IHVzZUxpc3REcmF3ZXIoe1xuICAgIGNvbGxlY3Rpb25TbHVnczogZW5hYmxlZENvbGxlY3Rpb25TbHVncyxcbiAgICBzZWxlY3RlZENvbGxlY3Rpb246IHJlbGF0ZWRDb2xsZWN0aW9uLnNsdWcsXG4gIH0pO1xuXG4gIGNvbnN0IHJlbW92ZVJlbGF0aW9uc2hpcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50UGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgZWxlbWVudCk7XG5cbiAgICBUcmFuc2Zvcm1zLnJlbW92ZU5vZGVzKFxuICAgICAgZWRpdG9yLFxuICAgICAgeyBhdDogZWxlbWVudFBhdGggfSxcbiAgICApO1xuICB9LCBbZWRpdG9yLCBlbGVtZW50XSk7XG5cbiAgY29uc3QgdXBkYXRlUmVsYXRpb25zaGlwID0gUmVhY3QudXNlQ2FsbGJhY2soKHsgZG9jIH0pID0+IHtcbiAgICBjb25zdCBlbGVtZW50UGF0aCA9IFJlYWN0RWRpdG9yLmZpbmRQYXRoKGVkaXRvciwgZWxlbWVudCk7XG5cbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKFxuICAgICAgZWRpdG9yLFxuICAgICAge1xuICAgICAgICB0eXBlOiAncmVsYXRpb25zaGlwJyxcbiAgICAgICAgdmFsdWU6IHsgaWQ6IGRvYy5pZCB9LFxuICAgICAgICByZWxhdGlvblRvOiByZWxhdGVkQ29sbGVjdGlvbi5zbHVnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJyAnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyBhdDogZWxlbWVudFBhdGggfSxcbiAgICApO1xuXG4gICAgc2V0UGFyYW1zKHtcbiAgICAgIC4uLmluaXRpYWxQYXJhbXMsXG4gICAgICBjYWNoZUJ1c3QsIC8vIGRvIHRoaXMgdG8gZ2V0IHRoZSB1c2VQYXlsb2FkQVBJIHRvIHJlLWZldGNoIHRoZSBkYXRhIGV2ZW4gdGhvdWdoIHRoZSBVUkwgc3RyaW5nIGhhc24ndCBjaGFuZ2VkXG4gICAgfSk7XG5cbiAgICBjbG9zZURyYXdlcigpO1xuICAgIGRpc3BhdGNoQ2FjaGVCdXN0KCk7XG4gIH0sIFtlZGl0b3IsIGVsZW1lbnQsIHJlbGF0ZWRDb2xsZWN0aW9uLCBjYWNoZUJ1c3QsIHNldFBhcmFtcywgY2xvc2VEcmF3ZXJdKTtcblxuICBjb25zdCBzd2FwUmVsYXRpb25zaGlwID0gUmVhY3QudXNlQ2FsbGJhY2soKHsgZG9jSUQsIGNvbGxlY3Rpb25Db25maWcgfSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRQYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCBlbGVtZW50KTtcblxuICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoXG4gICAgICBlZGl0b3IsXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdyZWxhdGlvbnNoaXAnLFxuICAgICAgICB2YWx1ZTogeyBpZDogZG9jSUQgfSxcbiAgICAgICAgcmVsYXRpb25UbzogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJyAnIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyBhdDogZWxlbWVudFBhdGggfSxcbiAgICApO1xuXG4gICAgc2V0UmVsYXRlZENvbGxlY3Rpb24oY29sbGVjdGlvbnMuZmluZCgoY29sbCkgPT4gY29sbC5zbHVnID09PSBjb2xsZWN0aW9uQ29uZmlnLnNsdWcpKTtcblxuICAgIHNldFBhcmFtcyh7XG4gICAgICAuLi5pbml0aWFsUGFyYW1zLFxuICAgICAgY2FjaGVCdXN0LCAvLyBkbyB0aGlzIHRvIGdldCB0aGUgdXNlUGF5bG9hZEFQSSB0byByZS1mZXRjaCB0aGUgZGF0YSBldmVuIHRob3VnaCB0aGUgVVJMIHN0cmluZyBoYXNuJ3QgY2hhbmdlZFxuICAgIH0pO1xuXG4gICAgY2xvc2VMaXN0RHJhd2VyKCk7XG4gICAgZGlzcGF0Y2hDYWNoZUJ1c3QoKTtcbiAgfSwgW2Nsb3NlTGlzdERyYXdlciwgZWRpdG9yLCBlbGVtZW50LCBjYWNoZUJ1c3QsIHNldFBhcmFtcywgY29sbGVjdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgIChzZWxlY3RlZCAmJiBmb2N1c2VkKSAmJiBgJHtiYXNlQ2xhc3N9LS1zZWxlY3RlZGAsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBjb250ZW50RWRpdGFibGU9e2ZhbHNlfVxuICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PlxuICAgICAgICAgIHt0KCdsYWJlbFJlbGF0aW9uc2hpcCcsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKHJlbGF0ZWRDb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhciwgaTE4bikgfSl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPERvY3VtZW50RHJhd2VyVG9nZ2xlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2RvYy1kcmF3ZXItdG9nZ2xlcmB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGl0bGVgfT5cbiAgICAgICAgICAgIHtkYXRhW3JlbGF0ZWRDb2xsZWN0aW9uPy5hZG1pbj8udXNlQXNUaXRsZSB8fCAnaWQnXX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRG9jdW1lbnREcmF3ZXJUb2dnbGVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9uc2B9PlxuICAgICAgICA8TGlzdERyYXdlclRvZ2dsZXJcbiAgICAgICAgICBkaXNhYmxlZD17ZmllbGRQcm9wcz8uYWRtaW4/LnJlYWRPbmx5fVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGlzdC1kcmF3ZXItdG9nZ2xlcmB9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPVwic3dhcFwiXG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGVsPVwiZGl2XCJcbiAgICAgICAgICAgIHRvb2x0aXA9e3QoJ3N3YXBSZWxhdGlvbnNoaXAnKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtmaWVsZFByb3BzPy5hZG1pbj8ucmVhZE9ubHl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MaXN0RHJhd2VyVG9nZ2xlcj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb249XCJ4XCJcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIGJ1dHRvblN0eWxlPVwiaWNvbi1sYWJlbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19yZW1vdmVCdXR0b25gfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZW1vdmVSZWxhdGlvbnNoaXAoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRvb2x0aXA9e3QoJ2ZpZWxkczpyZW1vdmVSZWxhdGlvbnNoaXAnKX1cbiAgICAgICAgICBkaXNhYmxlZD17ZmllbGRQcm9wcz8uYWRtaW4/LnJlYWRPbmx5fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7dmFsdWU/LmlkICYmIChcbiAgICAgICAgPERvY3VtZW50RHJhd2VyIG9uU2F2ZT17dXBkYXRlUmVsYXRpb25zaGlwfSAvPlxuICAgICAgKX1cbiAgICAgIDxMaXN0RHJhd2VyIG9uU2VsZWN0PXtzd2FwUmVsYXRpb25zaGlwfSAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0Tm9kZSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEVuYWJsZWRSZWxhdGlvbnNoaXBzQ29uZGl0aW9uIHsuLi5wcm9wc30+XG4gICAgICA8RWxlbWVudCB7Li4ucHJvcHN9IC8+XG4gICAgPC9FbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsIlJlYWN0RWRpdG9yIiwidXNlRm9jdXNlZCIsInVzZVNlbGVjdGVkIiwidXNlU2xhdGVTdGF0aWMiLCJ1c2VUcmFuc2xhdGlvbiIsIlRyYW5zZm9ybXMiLCJ1c2VDb25maWciLCJ1c2VQYXlsb2FkQVBJIiwidXNlRG9jdW1lbnREcmF3ZXIiLCJCdXR0b24iLCJ1c2VMaXN0RHJhd2VyIiwiZ2V0VHJhbnNsYXRpb24iLCJFbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbiIsImJhc2VDbGFzcyIsImluaXRpYWxQYXJhbXMiLCJkZXB0aCIsIkVsZW1lbnQiLCJwcm9wcyIsInZhbHVlIiwicmVsYXRlZENvbGxlY3Rpb24iLCJmaWVsZFByb3BzIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiZWxlbWVudCIsInJlbGF0aW9uVG8iLCJjb2xsZWN0aW9ucyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsImZpbHRlciIsImFkbWluIiwiZW5hYmxlUmljaFRleHRSZWxhdGlvbnNoaXAiLCJtYXAiLCJzbHVnIiwiZW5hYmxlZENvbGxlY3Rpb25TbHVncyIsImZpbmQiLCJjb2xsIiwic2V0UmVsYXRlZENvbGxlY3Rpb24iLCJzZWxlY3RlZCIsImZvY3VzZWQiLCJ0IiwiaTE4biIsImVkaXRvciIsInN0YXRlIiwiY2FjaGVCdXN0IiwiZGlzcGF0Y2hDYWNoZUJ1c3QiLCJpZCIsImRhdGEiLCJzZXRQYXJhbXMiLCJjb2xsZWN0aW9uU2x1ZyIsIkRvY3VtZW50RHJhd2VyIiwiRG9jdW1lbnREcmF3ZXJUb2dnbGVyIiwiY2xvc2VEcmF3ZXIiLCJjb2xsZWN0aW9uU2x1Z3MiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJMaXN0RHJhd2VyIiwiTGlzdERyYXdlclRvZ2dsZXIiLCJjbG9zZUxpc3REcmF3ZXIiLCJyZW1vdmVSZWxhdGlvbnNoaXAiLCJlbGVtZW50UGF0aCIsImZpbmRQYXRoIiwicmVtb3ZlTm9kZXMiLCJhdCIsInVwZGF0ZVJlbGF0aW9uc2hpcCIsImRvYyIsInNldE5vZGVzIiwidHlwZSIsInRleHQiLCJzd2FwUmVsYXRpb25zaGlwIiwiZG9jSUQiLCJjb2xsZWN0aW9uQ29uZmlnIiwiZGl2IiwiY2xhc3NOYW1lIiwiQm9vbGVhbiIsImpvaW4iLCJjb250ZW50RWRpdGFibGUiLCJwIiwibGFiZWwiLCJsYWJlbHMiLCJzaW5ndWxhciIsInVzZUFzVGl0bGUiLCJkaXNhYmxlZCIsInJlYWRPbmx5IiwiaWNvbiIsInJvdW5kIiwiYnV0dG9uU3R5bGUiLCJvbkNsaWNrIiwiZWwiLCJ0b29sdGlwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25TYXZlIiwib25TZWxlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBeUJDLFdBQVcsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNqRixTQUFTQyxXQUFXLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLFFBQVEsY0FBYztBQUNuRixTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFVBQVUsUUFBUSxRQUFRO0FBQ25DLFNBQVNDLFNBQVMsUUFBUSxxQ0FBcUM7QUFDL0QsT0FBT0MsbUJBQW1CLDJDQUEyQztBQUNyRSxTQUFTQyxpQkFBaUIsUUFBUSw0Q0FBNEM7QUFDOUUsT0FBT0MsWUFBWSxvQ0FBb0M7QUFDdkQsU0FBU0MsYUFBYSxRQUFRLHdDQUF3QztBQUV0RSxTQUFTQyxjQUFjLFFBQVEsbURBQW1EO0FBQ2xGLFNBQVNDLDZCQUE2QixRQUFRLHNDQUFzQztBQUVwRixPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxnQkFBZ0I7SUFDcEJDLE9BQU87QUFD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