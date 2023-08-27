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
import { Transforms } from "slate";
import { ReactEditor, useSlateStatic, useFocused, useSelected } from "slate-react";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../../../../utilities/Config";
import usePayloadAPI from "../../../../../../../hooks/usePayloadAPI";
import FileGraphic from "../../../../../../graphics/File";
import useThumbnail from "../../../../../../../hooks/useThumbnail";
import Button from "../../../../../../elements/Button";
import { getTranslation } from "../../../../../../../../utilities/getTranslation";
import { useDocumentDrawer } from "../../../../../../elements/DocumentDrawer";
import { useListDrawer } from "../../../../../../elements/ListDrawer";
import { EnabledRelationshipsCondition } from "../../EnabledRelationshipsCondition";
import { useDrawerSlug } from "../../../../../../elements/Drawer/useDrawerSlug";
import { UploadDrawer } from "./UploadDrawer";
import { DrawerToggler } from "../../../../../../elements/Drawer";
import "./index.scss";
var baseClass = "rich-text-upload";
var initialParams = {
    depth: 0
};
var Element = function(props) {
    var _value, _value1, _fieldProps_admin_upload_collections_relatedCollection_slug, _fieldProps_admin_upload_collections, _fieldProps_admin_upload, _fieldProps_admin, _fieldProps, _data, _customFields, _fieldProps_admin1, _fieldProps1, _fieldProps_admin2, _fieldProps2, _fieldProps_admin3, _fieldProps3, _fieldProps_admin4, _fieldProps4, _data1, _value2;
    var attributes = props.attributes, children = props.children, element = props.element, _props_element = props.element, relationTo = _props_element.relationTo, value = _props_element.value, fieldProps = props.fieldProps, enabledCollectionSlugs = props.enabledCollectionSlugs;
    var _useConfig = useConfig(), collections = _useConfig.collections, serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var _useTranslation = useTranslation("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useReducer = _sliced_to_array(useReducer(function(state) {
        return state + 1;
    }, 0), 2), cacheBust = _useReducer[0], dispatchCacheBust = _useReducer[1];
    var _useState = _sliced_to_array(useState(function() {
        return collections.find(function(coll) {
            return coll.slug === relationTo;
        });
    }), 2), relatedCollection = _useState[0], setRelatedCollection = _useState[1];
    var drawerSlug = useDrawerSlug("upload-drawer");
    var _useListDrawer = _sliced_to_array(useListDrawer({
        collectionSlugs: enabledCollectionSlugs,
        selectedCollection: relatedCollection.slug
    }), 3), ListDrawer = _useListDrawer[0], ListDrawerToggler = _useListDrawer[1], _useListDrawer_ = _useListDrawer[2], closeListDrawer = _useListDrawer_.closeDrawer;
    var _useDocumentDrawer = _sliced_to_array(useDocumentDrawer({
        collectionSlug: relatedCollection.slug,
        id: (_value = value) === null || _value === void 0 ? void 0 : _value.id
    }), 3), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1], closeDrawer = _useDocumentDrawer[2].closeDrawer;
    var editor = useSlateStatic();
    var selected = useSelected();
    var focused = useFocused();
    // Get the referenced document
    var _usePayloadAPI = _sliced_to_array(usePayloadAPI("".concat(serverURL).concat(api, "/").concat(relatedCollection.slug, "/").concat((_value1 = value) === null || _value1 === void 0 ? void 0 : _value1.id), {
        initialParams: initialParams
    }), 2), data = _usePayloadAPI[0].data, setParams = _usePayloadAPI[1].setParams;
    var thumbnailSRC = useThumbnail(relatedCollection, data);
    var removeUpload = useCallback(function() {
        var elementPath = ReactEditor.findPath(editor, element);
        Transforms.removeNodes(editor, {
            at: elementPath
        });
    }, [
        editor,
        element
    ]);
    var updateUpload = useCallback(function(json) {
        var doc = json.doc;
        var newNode = {
            fields: doc
        };
        var elementPath = ReactEditor.findPath(editor, element);
        Transforms.setNodes(editor, newNode, {
            at: elementPath
        });
        // setRelatedCollection(collections.find((coll) => coll.slug === collectionConfig.slug));
        setParams(_object_spread_props(_object_spread({}, initialParams), {
            cacheBust: cacheBust
        }));
        dispatchCacheBust();
        closeDrawer();
    }, [
        editor,
        element,
        setParams,
        cacheBust,
        closeDrawer
    ]);
    var swapUpload = React.useCallback(function(param) {
        var docID = param.docID, collectionConfig = param.collectionConfig;
        var newNode = {
            type: "upload",
            value: {
                id: docID
            },
            relationTo: collectionConfig.slug,
            children: [
                {
                    text: " "
                }
            ]
        };
        var elementPath = ReactEditor.findPath(editor, element);
        setRelatedCollection(collections.find(function(coll) {
            return coll.slug === collectionConfig.slug;
        }));
        Transforms.setNodes(editor, newNode, {
            at: elementPath
        });
        dispatchCacheBust();
        closeListDrawer();
    }, [
        closeListDrawer,
        editor,
        element,
        collections
    ]);
    var customFields = (_fieldProps = fieldProps) === null || _fieldProps === void 0 ? void 0 : (_fieldProps_admin = _fieldProps.admin) === null || _fieldProps_admin === void 0 ? void 0 : (_fieldProps_admin_upload = _fieldProps_admin.upload) === null || _fieldProps_admin_upload === void 0 ? void 0 : (_fieldProps_admin_upload_collections = _fieldProps_admin_upload.collections) === null || _fieldProps_admin_upload_collections === void 0 ? void 0 : (_fieldProps_admin_upload_collections_relatedCollection_slug = _fieldProps_admin_upload_collections[relatedCollection.slug]) === null || _fieldProps_admin_upload_collections_relatedCollection_slug === void 0 ? void 0 : _fieldProps_admin_upload_collections_relatedCollection_slug.fields;
    return /*#__PURE__*/ React.createElement("div", _object_spread({
        className: [
            baseClass,
            selected && focused && "".concat(baseClass, "--selected")
        ].filter(Boolean).join(" "),
        contentEditable: false
    }, attributes), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__card")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__topRow")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__thumbnail")
    }, thumbnailSRC ? /*#__PURE__*/ React.createElement("img", {
        src: thumbnailSRC,
        alt: (_data = data) === null || _data === void 0 ? void 0 : _data.filename
    }) : /*#__PURE__*/ React.createElement(FileGraphic, null)), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__topRowRightPanel")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__collectionLabel")
    }, getTranslation(relatedCollection.labels.singular, i18n)), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__actions")
    }, ((_customFields = customFields) === null || _customFields === void 0 ? void 0 : _customFields.length) > 0 && /*#__PURE__*/ React.createElement(DrawerToggler, {
        slug: drawerSlug,
        className: "".concat(baseClass, "__upload-drawer-toggler"),
        disabled: (_fieldProps1 = fieldProps) === null || _fieldProps1 === void 0 ? void 0 : (_fieldProps_admin1 = _fieldProps1.admin) === null || _fieldProps_admin1 === void 0 ? void 0 : _fieldProps_admin1.readOnly
    }, /*#__PURE__*/ React.createElement(Button, {
        icon: "edit",
        round: true,
        buttonStyle: "icon-label",
        el: "div",
        onClick: function(e) {
            e.preventDefault();
        },
        tooltip: t("fields:editRelationship")
    })), /*#__PURE__*/ React.createElement(ListDrawerToggler, {
        className: "".concat(baseClass, "__list-drawer-toggler"),
        disabled: (_fieldProps2 = fieldProps) === null || _fieldProps2 === void 0 ? void 0 : (_fieldProps_admin2 = _fieldProps2.admin) === null || _fieldProps_admin2 === void 0 ? void 0 : _fieldProps_admin2.readOnly
    }, /*#__PURE__*/ React.createElement(Button, {
        icon: "swap",
        round: true,
        buttonStyle: "icon-label",
        onClick: function() {
        // do nothing
        },
        el: "div",
        tooltip: t("swapUpload"),
        disabled: (_fieldProps3 = fieldProps) === null || _fieldProps3 === void 0 ? void 0 : (_fieldProps_admin3 = _fieldProps3.admin) === null || _fieldProps_admin3 === void 0 ? void 0 : _fieldProps_admin3.readOnly
    })), /*#__PURE__*/ React.createElement(Button, {
        icon: "x",
        round: true,
        buttonStyle: "icon-label",
        className: "".concat(baseClass, "__removeButton"),
        onClick: function(e) {
            e.preventDefault();
            removeUpload();
        },
        tooltip: t("removeUpload"),
        disabled: (_fieldProps4 = fieldProps) === null || _fieldProps4 === void 0 ? void 0 : (_fieldProps_admin4 = _fieldProps4.admin) === null || _fieldProps_admin4 === void 0 ? void 0 : _fieldProps_admin4.readOnly
    })))), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__bottomRow")
    }, /*#__PURE__*/ React.createElement(DocumentDrawerToggler, {
        className: "".concat(baseClass, "__doc-drawer-toggler")
    }, /*#__PURE__*/ React.createElement("strong", null, (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.filename)))), children, ((_value2 = value) === null || _value2 === void 0 ? void 0 : _value2.id) && /*#__PURE__*/ React.createElement(DocumentDrawer, {
        onSave: updateUpload
    }), /*#__PURE__*/ React.createElement(ListDrawer, {
        onSelect: swapUpload
    }), /*#__PURE__*/ React.createElement(UploadDrawer, _object_spread({
        drawerSlug: drawerSlug,
        relatedCollection: relatedCollection
    }, props)));
};
export default function(props) {
    return /*#__PURE__*/ React.createElement(EnabledRelationshipsCondition, _object_spread_props(_object_spread({}, props), {
        uploads: true
    }), /*#__PURE__*/ React.createElement(Element, props));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3VwbG9hZC9FbGVtZW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMsIHVzZUNhbGxiYWNrLCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyYW5zZm9ybXMgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyBSZWFjdEVkaXRvciwgdXNlU2xhdGVTdGF0aWMsIHVzZUZvY3VzZWQsIHVzZVNlbGVjdGVkIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHVzZVBheWxvYWRBUEkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlUGF5bG9hZEFQSSc7XG5pbXBvcnQgRmlsZUdyYXBoaWMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ3JhcGhpY3MvRmlsZSc7XG5pbXBvcnQgdXNlVGh1bWJuYWlsIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2hvb2tzL3VzZVRodW1ibmFpbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyB1c2VEb2N1bWVudERyYXdlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyJztcbmltcG9ydCB7IHVzZUxpc3REcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9MaXN0RHJhd2VyJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUHJvcHMgYXMgUmljaFRleHRQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEVuYWJsZWRSZWxhdGlvbnNoaXBzQ29uZGl0aW9uIH0gZnJvbSAnLi4vLi4vRW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24nO1xuaW1wb3J0IHsgdXNlRHJhd2VyU2x1ZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0RyYXdlci91c2VEcmF3ZXJTbHVnJztcbmltcG9ydCB7IFVwbG9hZERyYXdlciB9IGZyb20gJy4vVXBsb2FkRHJhd2VyJztcbmltcG9ydCB7IERyYXdlclRvZ2dsZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9EcmF3ZXInO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyaWNoLXRleHQtdXBsb2FkJztcblxuY29uc3QgaW5pdGlhbFBhcmFtcyA9IHtcbiAgZGVwdGg6IDAsXG59O1xuXG5leHBvcnQgdHlwZSBFbGVtZW50UHJvcHMgPSB7XG4gIGF0dHJpYnV0ZXM6IEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGVsZW1lbnQ6IGFueVxuICBmaWVsZFByb3BzOiBSaWNoVGV4dFByb3BzXG4gIGVuYWJsZWRDb2xsZWN0aW9uU2x1Z3M6IHN0cmluZ1tdXG59XG5cbmNvbnN0IEVsZW1lbnQ6IFJlYWN0LkZDPEVsZW1lbnRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW4sXG4gICAgZWxlbWVudCxcbiAgICBlbGVtZW50OiB7XG4gICAgICByZWxhdGlvblRvLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgICBmaWVsZFByb3BzLFxuICAgIGVuYWJsZWRDb2xsZWN0aW9uU2x1Z3MsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGNvbGxlY3Rpb25zLCBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpO1xuICBjb25zdCBbY2FjaGVCdXN0LCBkaXNwYXRjaENhY2hlQnVzdF0gPSB1c2VSZWR1Y2VyKChzdGF0ZSkgPT4gc3RhdGUgKyAxLCAwKTtcbiAgY29uc3QgW3JlbGF0ZWRDb2xsZWN0aW9uLCBzZXRSZWxhdGVkQ29sbGVjdGlvbl0gPSB1c2VTdGF0ZTxTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnPigoKSA9PiBjb2xsZWN0aW9ucy5maW5kKChjb2xsKSA9PiBjb2xsLnNsdWcgPT09IHJlbGF0aW9uVG8pKTtcblxuICBjb25zdCBkcmF3ZXJTbHVnID0gdXNlRHJhd2VyU2x1ZygndXBsb2FkLWRyYXdlcicpO1xuXG4gIGNvbnN0IFtcbiAgICBMaXN0RHJhd2VyLFxuICAgIExpc3REcmF3ZXJUb2dnbGVyLFxuICAgIHtcbiAgICAgIGNsb3NlRHJhd2VyOiBjbG9zZUxpc3REcmF3ZXIsXG4gICAgfSxcbiAgXSA9IHVzZUxpc3REcmF3ZXIoe1xuICAgIGNvbGxlY3Rpb25TbHVnczogZW5hYmxlZENvbGxlY3Rpb25TbHVncyxcbiAgICBzZWxlY3RlZENvbGxlY3Rpb246IHJlbGF0ZWRDb2xsZWN0aW9uLnNsdWcsXG4gIH0pO1xuXG4gIGNvbnN0IFtcbiAgICBEb2N1bWVudERyYXdlcixcbiAgICBEb2N1bWVudERyYXdlclRvZ2dsZXIsXG4gICAge1xuICAgICAgY2xvc2VEcmF3ZXIsXG4gICAgfSxcbiAgXSA9IHVzZURvY3VtZW50RHJhd2VyKHtcbiAgICBjb2xsZWN0aW9uU2x1ZzogcmVsYXRlZENvbGxlY3Rpb24uc2x1ZyxcbiAgICBpZDogdmFsdWU/LmlkLFxuICB9KTtcblxuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZVN0YXRpYygpO1xuICBjb25zdCBzZWxlY3RlZCA9IHVzZVNlbGVjdGVkKCk7XG4gIGNvbnN0IGZvY3VzZWQgPSB1c2VGb2N1c2VkKCk7XG5cbiAgLy8gR2V0IHRoZSByZWZlcmVuY2VkIGRvY3VtZW50XG4gIGNvbnN0IFt7IGRhdGEgfSwgeyBzZXRQYXJhbXMgfV0gPSB1c2VQYXlsb2FkQVBJKFxuICAgIGAke3NlcnZlclVSTH0ke2FwaX0vJHtyZWxhdGVkQ29sbGVjdGlvbi5zbHVnfS8ke3ZhbHVlPy5pZH1gLFxuICAgIHsgaW5pdGlhbFBhcmFtcyB9LFxuICApO1xuXG4gIGNvbnN0IHRodW1ibmFpbFNSQyA9IHVzZVRodW1ibmFpbChyZWxhdGVkQ29sbGVjdGlvbiwgZGF0YSk7XG5cbiAgY29uc3QgcmVtb3ZlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRQYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCBlbGVtZW50KTtcblxuICAgIFRyYW5zZm9ybXMucmVtb3ZlTm9kZXMoXG4gICAgICBlZGl0b3IsXG4gICAgICB7IGF0OiBlbGVtZW50UGF0aCB9LFxuICAgICk7XG4gIH0sIFtlZGl0b3IsIGVsZW1lbnRdKTtcblxuXG4gIGNvbnN0IHVwZGF0ZVVwbG9hZCA9IHVzZUNhbGxiYWNrKChqc29uKSA9PiB7XG4gICAgY29uc3QgeyBkb2MgfSA9IGpzb247XG5cbiAgICBjb25zdCBuZXdOb2RlID0ge1xuICAgICAgZmllbGRzOiBkb2MsXG4gICAgfTtcblxuICAgIGNvbnN0IGVsZW1lbnRQYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCBlbGVtZW50KTtcblxuICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoXG4gICAgICBlZGl0b3IsXG4gICAgICBuZXdOb2RlLFxuICAgICAgeyBhdDogZWxlbWVudFBhdGggfSxcbiAgICApO1xuXG4gICAgLy8gc2V0UmVsYXRlZENvbGxlY3Rpb24oY29sbGVjdGlvbnMuZmluZCgoY29sbCkgPT4gY29sbC5zbHVnID09PSBjb2xsZWN0aW9uQ29uZmlnLnNsdWcpKTtcblxuICAgIHNldFBhcmFtcyh7XG4gICAgICAuLi5pbml0aWFsUGFyYW1zLFxuICAgICAgY2FjaGVCdXN0LCAvLyBkbyB0aGlzIHRvIGdldCB0aGUgdXNlUGF5bG9hZEFQSSB0byByZS1mZXRjaCB0aGUgZGF0YSBldmVuIHRob3VnaCB0aGUgVVJMIHN0cmluZyBoYXNuJ3QgY2hhbmdlZFxuICAgIH0pO1xuXG4gICAgZGlzcGF0Y2hDYWNoZUJ1c3QoKTtcbiAgICBjbG9zZURyYXdlcigpO1xuICB9LCBbZWRpdG9yLCBlbGVtZW50LCBzZXRQYXJhbXMsIGNhY2hlQnVzdCwgY2xvc2VEcmF3ZXJdKTtcblxuICBjb25zdCBzd2FwVXBsb2FkID0gUmVhY3QudXNlQ2FsbGJhY2soKHsgZG9jSUQsIGNvbGxlY3Rpb25Db25maWcgfSkgPT4ge1xuICAgIGNvbnN0IG5ld05vZGUgPSB7XG4gICAgICB0eXBlOiAndXBsb2FkJyxcbiAgICAgIHZhbHVlOiB7IGlkOiBkb2NJRCB9LFxuICAgICAgcmVsYXRpb25UbzogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgeyB0ZXh0OiAnICcgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGNvbnN0IGVsZW1lbnRQYXRoID0gUmVhY3RFZGl0b3IuZmluZFBhdGgoZWRpdG9yLCBlbGVtZW50KTtcblxuICAgIHNldFJlbGF0ZWRDb2xsZWN0aW9uKGNvbGxlY3Rpb25zLmZpbmQoKGNvbGwpID0+IGNvbGwuc2x1ZyA9PT0gY29sbGVjdGlvbkNvbmZpZy5zbHVnKSk7XG5cbiAgICBUcmFuc2Zvcm1zLnNldE5vZGVzKFxuICAgICAgZWRpdG9yLFxuICAgICAgbmV3Tm9kZSxcbiAgICAgIHsgYXQ6IGVsZW1lbnRQYXRoIH0sXG4gICAgKTtcblxuICAgIGRpc3BhdGNoQ2FjaGVCdXN0KCk7XG4gICAgY2xvc2VMaXN0RHJhd2VyKCk7XG4gIH0sIFtjbG9zZUxpc3REcmF3ZXIsIGVkaXRvciwgZWxlbWVudCwgY29sbGVjdGlvbnNdKTtcblxuICBjb25zdCBjdXN0b21GaWVsZHMgPSBmaWVsZFByb3BzPy5hZG1pbj8udXBsb2FkPy5jb2xsZWN0aW9ucz8uW3JlbGF0ZWRDb2xsZWN0aW9uLnNsdWddPy5maWVsZHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICAoc2VsZWN0ZWQgJiYgZm9jdXNlZCkgJiYgYCR7YmFzZUNsYXNzfS0tc2VsZWN0ZWRgLFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgY29udGVudEVkaXRhYmxlPXtmYWxzZX1cbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jYXJkYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b3BSb3dgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGh1bWJuYWlsYH0+XG4gICAgICAgICAgICB7dGh1bWJuYWlsU1JDID8gKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt0aHVtYm5haWxTUkN9XG4gICAgICAgICAgICAgICAgYWx0PXtkYXRhPy5maWxlbmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxGaWxlR3JhcGhpYyAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdG9wUm93UmlnaHRQYW5lbGB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbGxlY3Rpb25MYWJlbGB9PlxuICAgICAgICAgICAgICB7Z2V0VHJhbnNsYXRpb24ocmVsYXRlZENvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbnNgfT5cbiAgICAgICAgICAgICAge2N1c3RvbUZpZWxkcz8ubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPERyYXdlclRvZ2dsZXJcbiAgICAgICAgICAgICAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3VwbG9hZC1kcmF3ZXItdG9nZ2xlcmB9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmllbGRQcm9wcz8uYWRtaW4/LnJlYWRPbmx5fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxuICAgICAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBlbD1cImRpdlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXt0KCdmaWVsZHM6ZWRpdFJlbGF0aW9uc2hpcCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0RyYXdlclRvZ2dsZXI+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxMaXN0RHJhd2VyVG9nZ2xlclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGlzdC1kcmF3ZXItdG9nZ2xlcmB9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZpZWxkUHJvcHM/LmFkbWluPy5yZWFkT25seX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGljb249XCJzd2FwXCJcbiAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgZWw9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgdG9vbHRpcD17dCgnc3dhcFVwbG9hZCcpfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZpZWxkUHJvcHM/LmFkbWluPy5yZWFkT25seX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpc3REcmF3ZXJUb2dnbGVyPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cInhcIlxuICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3JlbW92ZUJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIHJlbW92ZVVwbG9hZCgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdG9vbHRpcD17dCgncmVtb3ZlVXBsb2FkJyl9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZpZWxkUHJvcHM/LmFkbWluPy5yZWFkT25seX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JvdHRvbVJvd2B9PlxuICAgICAgICAgIDxEb2N1bWVudERyYXdlclRvZ2dsZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kb2MtZHJhd2VyLXRvZ2dsZXJgfT5cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIHtkYXRhPy5maWxlbmFtZX1cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvRG9jdW1lbnREcmF3ZXJUb2dnbGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2NoaWxkcmVufVxuICAgICAge3ZhbHVlPy5pZCAmJiAoXG4gICAgICAgIDxEb2N1bWVudERyYXdlciBvblNhdmU9e3VwZGF0ZVVwbG9hZH0gLz5cbiAgICAgICl9XG4gICAgICA8TGlzdERyYXdlciBvblNlbGVjdD17c3dhcFVwbG9hZH0gLz5cbiAgICAgIDxVcGxvYWREcmF3ZXJcbiAgICAgICAgZHJhd2VyU2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgICAgcmVsYXRlZENvbGxlY3Rpb249e3JlbGF0ZWRDb2xsZWN0aW9ufVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBFbGVtZW50UHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICByZXR1cm4gKFxuICAgIDxFbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvblxuICAgICAgey4uLnByb3BzfVxuICAgICAgdXBsb2Fkc1xuICAgID5cbiAgICAgIDxFbGVtZW50IHsuLi5wcm9wc30gLz5cbiAgICA8L0VuYWJsZWRSZWxhdGlvbnNoaXBzQ29uZGl0aW9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiVHJhbnNmb3JtcyIsIlJlYWN0RWRpdG9yIiwidXNlU2xhdGVTdGF0aWMiLCJ1c2VGb2N1c2VkIiwidXNlU2VsZWN0ZWQiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsInVzZVBheWxvYWRBUEkiLCJGaWxlR3JhcGhpYyIsInVzZVRodW1ibmFpbCIsIkJ1dHRvbiIsImdldFRyYW5zbGF0aW9uIiwidXNlRG9jdW1lbnREcmF3ZXIiLCJ1c2VMaXN0RHJhd2VyIiwiRW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24iLCJ1c2VEcmF3ZXJTbHVnIiwiVXBsb2FkRHJhd2VyIiwiRHJhd2VyVG9nZ2xlciIsImJhc2VDbGFzcyIsImluaXRpYWxQYXJhbXMiLCJkZXB0aCIsIkVsZW1lbnQiLCJwcm9wcyIsInZhbHVlIiwiZmllbGRQcm9wcyIsImRhdGEiLCJjdXN0b21GaWVsZHMiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJlbGVtZW50IiwicmVsYXRpb25UbyIsImVuYWJsZWRDb2xsZWN0aW9uU2x1Z3MiLCJjb2xsZWN0aW9ucyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInQiLCJpMThuIiwic3RhdGUiLCJjYWNoZUJ1c3QiLCJkaXNwYXRjaENhY2hlQnVzdCIsImZpbmQiLCJjb2xsIiwic2x1ZyIsInJlbGF0ZWRDb2xsZWN0aW9uIiwic2V0UmVsYXRlZENvbGxlY3Rpb24iLCJkcmF3ZXJTbHVnIiwiY29sbGVjdGlvblNsdWdzIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwiTGlzdERyYXdlciIsIkxpc3REcmF3ZXJUb2dnbGVyIiwiY2xvc2VEcmF3ZXIiLCJjbG9zZUxpc3REcmF3ZXIiLCJjb2xsZWN0aW9uU2x1ZyIsImlkIiwiRG9jdW1lbnREcmF3ZXIiLCJEb2N1bWVudERyYXdlclRvZ2dsZXIiLCJlZGl0b3IiLCJzZWxlY3RlZCIsImZvY3VzZWQiLCJzZXRQYXJhbXMiLCJ0aHVtYm5haWxTUkMiLCJyZW1vdmVVcGxvYWQiLCJlbGVtZW50UGF0aCIsImZpbmRQYXRoIiwicmVtb3ZlTm9kZXMiLCJhdCIsInVwZGF0ZVVwbG9hZCIsImpzb24iLCJkb2MiLCJuZXdOb2RlIiwiZmllbGRzIiwic2V0Tm9kZXMiLCJzd2FwVXBsb2FkIiwiZG9jSUQiLCJjb2xsZWN0aW9uQ29uZmlnIiwidHlwZSIsInRleHQiLCJhZG1pbiIsInVwbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiY29udGVudEVkaXRhYmxlIiwiaW1nIiwic3JjIiwiYWx0IiwiZmlsZW5hbWUiLCJsYWJlbHMiLCJzaW5ndWxhciIsImxlbmd0aCIsImRpc2FibGVkIiwicmVhZE9ubHkiLCJpY29uIiwicm91bmQiLCJidXR0b25TdHlsZSIsImVsIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvb2x0aXAiLCJzdHJvbmciLCJvblNhdmUiLCJvblNlbGVjdCIsInVwbG9hZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBeUJDLFdBQVcsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNqRixTQUFTQyxVQUFVLFFBQVEsUUFBUTtBQUNuQyxTQUFTQyxXQUFXLEVBQUVDLGNBQWMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLFFBQVEsY0FBYztBQUNuRixTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSxxQ0FBcUM7QUFDL0QsT0FBT0MsbUJBQW1CLDJDQUEyQztBQUNyRSxPQUFPQyxpQkFBaUIsa0NBQWtDO0FBQzFELE9BQU9DLGtCQUFrQiwwQ0FBMEM7QUFDbkUsT0FBT0MsWUFBWSxvQ0FBb0M7QUFDdkQsU0FBU0MsY0FBYyxRQUFRLG1EQUFtRDtBQUNsRixTQUFTQyxpQkFBaUIsUUFBUSw0Q0FBNEM7QUFDOUUsU0FBU0MsYUFBYSxRQUFRLHdDQUF3QztBQUd0RSxTQUFTQyw2QkFBNkIsUUFBUSxzQ0FBc0M7QUFDcEYsU0FBU0MsYUFBYSxRQUFRLGtEQUFrRDtBQUNoRixTQUFTQyxZQUFZLFFBQVEsaUJBQWlCO0FBQzlDLFNBQVNDLGFBQWEsUUFBUSxvQ0FBb0M7QUFFbEUsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsZ0JBQWdCO0lBQ3BCQyxPQUFPO0FBQ1Q7QUFVQSxJQUFNQyxVQUFrQyxTQUFDQztRQXVDakNDLFFBUzRDQSxTQWtFN0JDLDZEQUFBQSxzQ0FBQUEsMEJBQUFBLG1CQUFBQSxhQWlCRkMsT0FXTkMsZUFJYUYsb0JBQUFBLGNBZ0JGQSxvQkFBQUEsY0FXRUEsb0JBQUFBLGNBYUZBLG9CQUFBQSxjQVFYQyxRQU1SRjtJQXZNTCxJQUNFSSxhQVNFTCxNQVRGSyxZQUNBQyxXQVFFTixNQVJGTSxVQUNBQyxVQU9FUCxNQVBGTywwQkFPRVAsTUFORk8sU0FDRUMsNEJBQUFBLFlBQ0FQLHVCQUFBQSxPQUVGQyxhQUVFRixNQUZGRSxZQUNBTyx5QkFDRVQsTUFERlM7SUFHRixJQUFvRHpCLGFBQUFBLGFBQTVDMEIsY0FBNEMxQixXQUE1QzBCLGFBQWFDLFlBQStCM0IsV0FBL0IyQixXQUFXQyxBQUFVQyxNQUFVN0IsV0FBcEI0QixPQUFVQztJQUMxQyxJQUFvQjlCLGtCQUFBQSxlQUFlLFdBQTNCK0IsSUFBWS9CLGdCQUFaK0IsR0FBR0MsT0FBU2hDLGdCQUFUZ0M7SUFDWCxJQUF1Q3ZDLCtCQUFBQSxXQUFXLFNBQUN3QztlQUFVQSxRQUFRO09BQUcsUUFBakVDLFlBQWdDekMsZ0JBQXJCMEMsb0JBQXFCMUM7SUFDdkMsSUFBa0RDLDZCQUFBQSxTQUFvQztlQUFNaUMsWUFBWVMsSUFBSSxDQUFDLFNBQUNDO21CQUFTQSxLQUFLQyxJQUFJLEtBQUtiOztZQUE5SGMsb0JBQTJDN0MsY0FBeEI4Qyx1QkFBd0I5QztJQUVsRCxJQUFNK0MsYUFBYS9CLGNBQWM7SUFFakMsSUFNSUYsa0NBQUFBLGNBQWM7UUFDaEJrQyxpQkFBaUJoQjtRQUNqQmlCLG9CQUFvQkosa0JBQWtCRCxJQUFJO0lBQzVDLFFBUkVNLGFBS0VwQyxtQkFKRnFDLG9CQUlFckMscUNBQUFBLG1CQUZBc0MsQUFBYUMsa0NBQWJEO0lBT0osSUFNSXZDLHNDQUFBQSxrQkFBa0I7UUFDcEJ5QyxnQkFBZ0JULGtCQUFrQkQsSUFBSTtRQUN0Q1csRUFBRSxHQUFFL0IsU0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFPK0IsRUFBRTtJQUNmLFFBUkVDLGlCQUtFM0MsdUJBSkY0Qyx3QkFJRTVDLHVCQUhGLEFBQ0V1QyxjQUVBdkMsc0JBRkF1QztJQU9KLElBQU1NLFNBQVN2RDtJQUNmLElBQU13RCxXQUFXdEQ7SUFDakIsSUFBTXVELFVBQVV4RDtJQUVoQiw4QkFBOEI7SUFDOUIsSUFBa0NJLGtDQUFBQSxjQUNoQyxBQW5GSixBQW1GSyxHQUFjNEIsT0FBWkYsV0FBbUJXLE9BQVBULEtBQUksWUFBR1Msa0JBQWtCRCxJQUFJLEVBQUMsS0FBYSxRQUFWcEIsVUFBQUEsbUJBQUFBLDhCQUFBQSxRQUFPK0IsRUFBRSxHQUN6RDtRQUFFbkMsZUFBQUE7SUFBYyxRQUZYLEFBQUVNLE9BQXlCbEIsa0JBQXpCa0IsTUFBUSxBQUFFbUMsWUFBZXJELGtCQUFmcUQ7SUFLbkIsSUFBTUMsZUFBZXBELGFBQWFtQyxtQkFBbUJuQjtJQUVyRCxJQUFNcUMsZUFBZWpFLFlBQVk7UUFDL0IsSUFBTWtFLGNBQWM5RCxZQUFZK0QsUUFBUSxDQUFDUCxRQUFRNUI7UUFFakQ3QixXQUFXaUUsV0FBVyxDQUNwQlIsUUFDQTtZQUFFUyxJQUFJSDtRQUFZO0lBRXRCLEdBQUc7UUFBQ047UUFBUTVCO0tBQVE7SUFHcEIsSUFBTXNDLGVBQWV0RSxZQUFZLFNBQUN1RTtRQUNoQyxJQUFNLEFBQUVDLE1BQVFELEtBQVJDO1FBRVIsSUFBTUMsVUFBVTtZQUNkQyxRQUFRRjtRQUNWO1FBRUEsSUFBTU4sY0FBYzlELFlBQVkrRCxRQUFRLENBQUNQLFFBQVE1QjtRQUVqRDdCLFdBQVd3RSxRQUFRLENBQ2pCZixRQUNBYSxTQUNBO1lBQUVKLElBQUlIO1FBQVk7UUFHcEIseUZBQXlGO1FBRXpGSCxVQUFVLHdDQUNMekM7WUFDSG9CLFdBQUFBOztRQUdGQztRQUNBVztJQUNGLEdBQUc7UUFBQ007UUFBUTVCO1FBQVMrQjtRQUFXckI7UUFBV1k7S0FBWTtJQUV2RCxJQUFNc0IsYUFBYTdFLE1BQU1DLFdBQVcsQ0FBQztZQUFHNkUsY0FBQUEsT0FBT0MseUJBQUFBO1FBQzdDLElBQU1MLFVBQVU7WUFDZE0sTUFBTTtZQUNOckQsT0FBTztnQkFBRStCLElBQUlvQjtZQUFNO1lBQ25CNUMsWUFBWTZDLGlCQUFpQmhDLElBQUk7WUFDakNmLFVBQVU7Z0JBQ1I7b0JBQUVpRCxNQUFNO2dCQUFJO2FBQ2I7UUFDSDtRQUVBLElBQU1kLGNBQWM5RCxZQUFZK0QsUUFBUSxDQUFDUCxRQUFRNUI7UUFFakRnQixxQkFBcUJiLFlBQVlTLElBQUksQ0FBQyxTQUFDQzttQkFBU0EsS0FBS0MsSUFBSSxLQUFLZ0MsaUJBQWlCaEMsSUFBSTs7UUFFbkYzQyxXQUFXd0UsUUFBUSxDQUNqQmYsUUFDQWEsU0FDQTtZQUFFSixJQUFJSDtRQUFZO1FBR3BCdkI7UUFDQVk7SUFDRixHQUFHO1FBQUNBO1FBQWlCSztRQUFRNUI7UUFBU0c7S0FBWTtJQUVsRCxJQUFNTixnQkFBZUYsY0FBQUEsd0JBQUFBLG1DQUFBQSxvQkFBQUEsWUFBWXNELEtBQUssY0FBakJ0RCx5Q0FBQUEsMkJBQUFBLGtCQUFtQnVELE1BQU0sY0FBekJ2RCxnREFBQUEsdUNBQUFBLHlCQUEyQlEsV0FBVyxjQUF0Q1IsNERBQUFBLDhEQUFBQSxvQ0FBd0MsQ0FBQ29CLGtCQUFrQkQsSUFBSSxDQUFDLGNBQWhFbkIsa0ZBQUFBLDREQUFrRStDLE1BQU07SUFFN0YscUJBQ0Usb0JBQUNTO1FBQ0NDLFdBQVc7WUFDVC9EO1lBQ0N3QyxZQUFZQyxXQUFZLEFBQUMsR0FBWSxPQUFWekMsV0FBVTtTQUN2QyxDQUFDZ0UsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7UUFDdkJDLGlCQUFpQjtPQUNiMUQsMkJBRUosb0JBQUNxRDtRQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWL0QsV0FBVTtxQkFDM0Isb0JBQUM4RDtRQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWL0QsV0FBVTtxQkFDM0Isb0JBQUM4RDtRQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWL0QsV0FBVTtPQUMxQjJDLDZCQUNDLG9CQUFDeUI7UUFDQ0MsS0FBSzFCO1FBQ0wyQixHQUFHLEdBQUUvRCxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1nRSxRQUFRO3VCQUdyQixvQkFBQ2pGLG1DQUdMLG9CQUFDd0U7UUFBSUMsV0FBVyxBQUFDLEdBQVksT0FBVi9ELFdBQVU7cUJBQzNCLG9CQUFDOEQ7UUFBSUMsV0FBVyxBQUFDLEdBQVksT0FBVi9ELFdBQVU7T0FDMUJQLGVBQWVpQyxrQkFBa0I4QyxNQUFNLENBQUNDLFFBQVEsRUFBRXRELHNCQUVyRCxvQkFBQzJDO1FBQUlDLFdBQVcsQUFBQyxHQUFZLE9BQVYvRCxXQUFVO09BQzFCUSxFQUFBQSxnQkFBQUEsMEJBQUFBLG9DQUFBQSxjQUFja0UsTUFBTSxJQUFHLG1CQUN0QixvQkFBQzNFO1FBQ0MwQixNQUFNRztRQUNObUMsV0FBVyxBQUFDLEdBQVksT0FBVi9ELFdBQVU7UUFDeEIyRSxRQUFRLEdBQUVyRSxlQUFBQSx3QkFBQUEsb0NBQUFBLHFCQUFBQSxhQUFZc0QsS0FBSyxjQUFqQnRELHlDQUFBQSxtQkFBbUJzRSxRQUFRO3FCQUVyQyxvQkFBQ3BGO1FBQ0NxRixNQUFLO1FBQ0xDLE9BQUFBO1FBQ0FDLGFBQVk7UUFDWkMsSUFBRztRQUNIQyxTQUFTLFNBQUNDO1lBQ1JBLEVBQUVDLGNBQWM7UUFDbEI7UUFDQUMsU0FBU2xFLEVBQUU7dUJBSWpCLG9CQUFDYztRQUNDK0IsV0FBVyxBQUFDLEdBQVksT0FBVi9ELFdBQVU7UUFDeEIyRSxRQUFRLEdBQUVyRSxlQUFBQSx3QkFBQUEsb0NBQUFBLHFCQUFBQSxhQUFZc0QsS0FBSyxjQUFqQnRELHlDQUFBQSxtQkFBbUJzRSxRQUFRO3FCQUVyQyxvQkFBQ3BGO1FBQ0NxRixNQUFLO1FBQ0xDLE9BQUFBO1FBQ0FDLGFBQVk7UUFDWkUsU0FBUztRQUNQLGFBQWE7UUFDZjtRQUNBRCxJQUFHO1FBQ0hJLFNBQVNsRSxFQUFFO1FBQ1h5RCxRQUFRLEdBQUVyRSxlQUFBQSx3QkFBQUEsb0NBQUFBLHFCQUFBQSxhQUFZc0QsS0FBSyxjQUFqQnRELHlDQUFBQSxtQkFBbUJzRSxRQUFRO3VCQUd6QyxvQkFBQ3BGO1FBQ0NxRixNQUFLO1FBQ0xDLE9BQUFBO1FBQ0FDLGFBQVk7UUFDWmhCLFdBQVcsQUFBQyxHQUFZLE9BQVYvRCxXQUFVO1FBQ3hCaUYsU0FBUyxTQUFDQztZQUNSQSxFQUFFQyxjQUFjO1lBQ2hCdkM7UUFDRjtRQUNBd0MsU0FBU2xFLEVBQUU7UUFDWHlELFFBQVEsR0FBRXJFLGVBQUFBLHdCQUFBQSxvQ0FBQUEscUJBQUFBLGFBQVlzRCxLQUFLLGNBQWpCdEQseUNBQUFBLG1CQUFtQnNFLFFBQVE7eUJBSzdDLG9CQUFDZDtRQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWL0QsV0FBVTtxQkFDM0Isb0JBQUNzQztRQUFzQnlCLFdBQVcsQUFBQyxHQUFZLE9BQVYvRCxXQUFVO3FCQUM3QyxvQkFBQ3FGLGlCQUNFOUUsU0FBQUEsa0JBQUFBLDZCQUFBQSxPQUFNZ0UsUUFBUSxNQUt0QjdELFVBQ0FMLEVBQUFBLFVBQUFBLG1CQUFBQSw4QkFBQUEsUUFBTytCLEVBQUUsbUJBQ1Isb0JBQUNDO1FBQWVpRCxRQUFRckM7c0JBRTFCLG9CQUFDbEI7UUFBV3dELFVBQVVoQztzQkFDdEIsb0JBQUN6RDtRQUNDOEIsWUFBWUE7UUFDWkYsbUJBQW1CQTtPQUNmdEI7QUFJWjtBQUVBLGVBQWUsU0FBQ0E7SUFDZCxxQkFDRSxvQkFBQ1IsdUVBQ0tRO1FBQ0pvRixTQUFBQTtzQkFFQSxvQkFBQ3JGLFNBQVlDO0FBR25CLEVBQUUifQ==