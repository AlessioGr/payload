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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
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
import React, { useCallback, useEffect, useId, useMemo, useState } from "react";
import { useModal } from "@faceless-ui/modal";
import { useTranslation } from "react-i18next";
import { getTranslation } from "../../../../utilities/getTranslation";
import { Drawer, DrawerToggler } from "../Drawer";
import { useRelatedCollections } from "../../forms/field-types/Relationship/AddNew/useRelatedCollections";
import { useEditDepth } from "../../utilities/EditDepth";
import { DocumentDrawerContent } from "./DrawerContent";
import "./index.scss";
export var baseClass = "doc-drawer";
var formatDocumentDrawerSlug = function(param) {
    var collectionSlug = param.collectionSlug, id = param.id, depth = param.depth, uuid = param.uuid;
    return "doc-drawer_".concat(collectionSlug, "_").concat(depth).concat(id ? "_".concat(id) : "", "_").concat(uuid);
};
export var DocumentDrawerToggler = function(_param) {
    var children = _param.children, className = _param.className, drawerSlug = _param.drawerSlug, id = _param.id, collectionSlug = _param.collectionSlug, disabled = _param.disabled, rest = _object_without_properties(_param, [
        "children",
        "className",
        "drawerSlug",
        "id",
        "collectionSlug",
        "disabled"
    ]);
    var _useTranslation = useTranslation([
        "fields",
        "general"
    ]), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useRelatedCollections = _sliced_to_array(useRelatedCollections(collectionSlug), 1), collectionConfig = _useRelatedCollections[0];
    return /*#__PURE__*/ React.createElement(DrawerToggler, _object_spread({
        slug: drawerSlug,
        className: [
            className,
            "".concat(baseClass, "__toggler")
        ].filter(Boolean).join(" "),
        disabled: disabled,
        "aria-label": t(!id ? "fields:addNewLabel" : "general:editLabel", {
            label: getTranslation(collectionConfig.labels.singular, i18n)
        })
    }, rest), children);
};
export var DocumentDrawer = function(props) {
    var drawerSlug = props.drawerSlug;
    return /*#__PURE__*/ React.createElement(Drawer, {
        slug: drawerSlug,
        className: baseClass,
        header: false,
        gutter: false
    }, /*#__PURE__*/ React.createElement(DocumentDrawerContent, props));
};
export var useDocumentDrawer = function(param) {
    var id = param.id, collectionSlug = param.collectionSlug;
    var drawerDepth = useEditDepth();
    var uuid = useId();
    var _useModal = useModal(), modalState = _useModal.modalState, toggleModal = _useModal.toggleModal, closeModal = _useModal.closeModal, openModal = _useModal.openModal;
    var _useState = _sliced_to_array(useState(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var drawerSlug = formatDocumentDrawerSlug({
        collectionSlug: collectionSlug,
        id: id,
        depth: drawerDepth,
        uuid: uuid
    });
    useEffect(function() {
        var _modalState_drawerSlug;
        setIsOpen(Boolean((_modalState_drawerSlug = modalState[drawerSlug]) === null || _modalState_drawerSlug === void 0 ? void 0 : _modalState_drawerSlug.isOpen));
    }, [
        modalState,
        drawerSlug
    ]);
    var toggleDrawer = useCallback(function() {
        toggleModal(drawerSlug);
    }, [
        toggleModal,
        drawerSlug
    ]);
    var closeDrawer = useCallback(function() {
        closeModal(drawerSlug);
    }, [
        closeModal,
        drawerSlug
    ]);
    var openDrawer = useCallback(function() {
        openModal(drawerSlug);
    }, [
        openModal,
        drawerSlug
    ]);
    var MemoizedDrawer = useMemo(function() {
        return function(props) {
            return /*#__PURE__*/ React.createElement(DocumentDrawer, _object_spread_props(_object_spread({}, props), {
                collectionSlug: collectionSlug,
                id: id,
                drawerSlug: drawerSlug,
                key: drawerSlug
            }));
        };
    }, [
        id,
        drawerSlug,
        collectionSlug
    ]);
    var MemoizedDrawerToggler = useMemo(function() {
        return function(props) {
            return /*#__PURE__*/ React.createElement(DocumentDrawerToggler, _object_spread_props(_object_spread({}, props), {
                id: id,
                collectionSlug: collectionSlug,
                drawerSlug: drawerSlug
            }));
        };
    }, [
        id,
        drawerSlug,
        collectionSlug
    ]);
    var MemoizedDrawerState = useMemo(function() {
        return {
            drawerSlug: drawerSlug,
            drawerDepth: drawerDepth,
            isDrawerOpen: isOpen,
            toggleDrawer: toggleDrawer,
            closeDrawer: closeDrawer,
            openDrawer: openDrawer
        };
    }, [
        drawerDepth,
        drawerSlug,
        isOpen,
        toggleDrawer,
        closeDrawer,
        openDrawer
    ]);
    return [
        MemoizedDrawer,
        MemoizedDrawerToggler,
        MemoizedDrawerState
    ];
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlSWQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IERvY3VtZW50RHJhd2VyUHJvcHMsIERvY3VtZW50VG9nZ2xlclByb3BzLCBVc2VEb2N1bWVudERyYXdlciB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgRHJhd2VyLCBEcmF3ZXJUb2dnbGVyIH0gZnJvbSAnLi4vRHJhd2VyJztcbmltcG9ydCB7IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9BZGROZXcvdXNlUmVsYXRlZENvbGxlY3Rpb25zJztcbmltcG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnO1xuaW1wb3J0IHsgRG9jdW1lbnREcmF3ZXJDb250ZW50IH0gZnJvbSAnLi9EcmF3ZXJDb250ZW50JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5leHBvcnQgY29uc3QgYmFzZUNsYXNzID0gJ2RvYy1kcmF3ZXInO1xuXG5jb25zdCBmb3JtYXREb2N1bWVudERyYXdlclNsdWcgPSAoe1xuICBjb2xsZWN0aW9uU2x1ZyxcbiAgaWQsXG4gIGRlcHRoLFxuICB1dWlkLFxufToge1xuICBjb2xsZWN0aW9uU2x1Zzogc3RyaW5nLFxuICBpZDogc3RyaW5nLFxuICBkZXB0aDogbnVtYmVyLFxuICB1dWlkOiBzdHJpbmcsIC8vIHN1cHBseSB3aGVuIGNyZWF0aW5nIGEgbmV3IGRvY3VtZW50IGFuZCBubyBpZCBpcyBhdmFpbGFibGVcbn0pID0+IGBkb2MtZHJhd2VyXyR7Y29sbGVjdGlvblNsdWd9XyR7ZGVwdGh9JHtpZCA/IGBfJHtpZH1gIDogJyd9XyR7dXVpZH1gO1xuXG5leHBvcnQgY29uc3QgRG9jdW1lbnREcmF3ZXJUb2dnbGVyOiBSZWFjdC5GQzxEb2N1bWVudFRvZ2dsZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkcmF3ZXJTbHVnLFxuICBpZCxcbiAgY29sbGVjdGlvblNsdWcsXG4gIGRpc2FibGVkLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oWydmaWVsZHMnLCAnZ2VuZXJhbCddKTtcbiAgY29uc3QgW2NvbGxlY3Rpb25Db25maWddID0gdXNlUmVsYXRlZENvbGxlY3Rpb25zKGNvbGxlY3Rpb25TbHVnKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJUb2dnbGVyXG4gICAgICBzbHVnPXtkcmF3ZXJTbHVnfVxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgYCR7YmFzZUNsYXNzfV9fdG9nZ2xlcmAsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBhcmlhLWxhYmVsPXt0KCFpZCA/ICdmaWVsZHM6YWRkTmV3TGFiZWwnIDogJ2dlbmVyYWw6ZWRpdExhYmVsJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbkNvbmZpZy5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pIH0pfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRHJhd2VyVG9nZ2xlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudERyYXdlcjogUmVhY3QuRkM8RG9jdW1lbnREcmF3ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkcmF3ZXJTbHVnIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIGhlYWRlcj17ZmFsc2V9XG4gICAgICBndXR0ZXI9e2ZhbHNlfVxuICAgID5cbiAgICAgIDxEb2N1bWVudERyYXdlckNvbnRlbnQgey4uLnByb3BzfSAvPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZURvY3VtZW50RHJhd2VyOiBVc2VEb2N1bWVudERyYXdlciA9ICh7IGlkLCBjb2xsZWN0aW9uU2x1ZyB9KSA9PiB7XG4gIGNvbnN0IGRyYXdlckRlcHRoID0gdXNlRWRpdERlcHRoKCk7XG4gIGNvbnN0IHV1aWQgPSB1c2VJZCgpO1xuICBjb25zdCB7IG1vZGFsU3RhdGUsIHRvZ2dsZU1vZGFsLCBjbG9zZU1vZGFsLCBvcGVuTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRyYXdlclNsdWcgPSBmb3JtYXREb2N1bWVudERyYXdlclNsdWcoe1xuICAgIGNvbGxlY3Rpb25TbHVnLFxuICAgIGlkLFxuICAgIGRlcHRoOiBkcmF3ZXJEZXB0aCxcbiAgICB1dWlkLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihCb29sZWFuKG1vZGFsU3RhdGVbZHJhd2VyU2x1Z10/LmlzT3BlbikpO1xuICB9LCBbbW9kYWxTdGF0ZSwgZHJhd2VyU2x1Z10pO1xuXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB0b2dnbGVNb2RhbChkcmF3ZXJTbHVnKTtcbiAgfSwgW3RvZ2dsZU1vZGFsLCBkcmF3ZXJTbHVnXSk7XG5cbiAgY29uc3QgY2xvc2VEcmF3ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgfSwgW2Nsb3NlTW9kYWwsIGRyYXdlclNsdWddKTtcblxuICBjb25zdCBvcGVuRHJhd2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChkcmF3ZXJTbHVnKTtcbiAgfSwgW29wZW5Nb2RhbCwgZHJhd2VyU2x1Z10pO1xuXG4gIGNvbnN0IE1lbW9pemVkRHJhd2VyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuICgocHJvcHMpID0+IChcbiAgICAgIDxEb2N1bWVudERyYXdlclxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNvbGxlY3Rpb25TbHVnPXtjb2xsZWN0aW9uU2x1Z31cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBkcmF3ZXJTbHVnPXtkcmF3ZXJTbHVnfVxuICAgICAgICBrZXk9e2RyYXdlclNsdWd9XG4gICAgICAvPlxuICAgICkpO1xuICB9LCBbaWQsIGRyYXdlclNsdWcsIGNvbGxlY3Rpb25TbHVnXSk7XG5cbiAgY29uc3QgTWVtb2l6ZWREcmF3ZXJUb2dnbGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuICgocHJvcHMpID0+IChcbiAgICAgIDxEb2N1bWVudERyYXdlclRvZ2dsZXJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGNvbGxlY3Rpb25TbHVnPXtjb2xsZWN0aW9uU2x1Z31cbiAgICAgICAgZHJhd2VyU2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgIC8+XG4gICAgKSk7XG4gIH0sIFtpZCwgZHJhd2VyU2x1ZywgY29sbGVjdGlvblNsdWddKTtcblxuICBjb25zdCBNZW1vaXplZERyYXdlclN0YXRlID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIGRyYXdlclNsdWcsXG4gICAgZHJhd2VyRGVwdGgsXG4gICAgaXNEcmF3ZXJPcGVuOiBpc09wZW4sXG4gICAgdG9nZ2xlRHJhd2VyLFxuICAgIGNsb3NlRHJhd2VyLFxuICAgIG9wZW5EcmF3ZXIsXG4gIH0pLCBbZHJhd2VyRGVwdGgsIGRyYXdlclNsdWcsIGlzT3BlbiwgdG9nZ2xlRHJhd2VyLCBjbG9zZURyYXdlciwgb3BlbkRyYXdlcl0pO1xuXG4gIHJldHVybiBbXG4gICAgTWVtb2l6ZWREcmF3ZXIsXG4gICAgTWVtb2l6ZWREcmF3ZXJUb2dnbGVyLFxuICAgIE1lbW9pemVkRHJhd2VyU3RhdGUsXG4gIF07XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VJZCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZU1vZGFsIiwidXNlVHJhbnNsYXRpb24iLCJnZXRUcmFuc2xhdGlvbiIsIkRyYXdlciIsIkRyYXdlclRvZ2dsZXIiLCJ1c2VSZWxhdGVkQ29sbGVjdGlvbnMiLCJ1c2VFZGl0RGVwdGgiLCJEb2N1bWVudERyYXdlckNvbnRlbnQiLCJiYXNlQ2xhc3MiLCJmb3JtYXREb2N1bWVudERyYXdlclNsdWciLCJjb2xsZWN0aW9uU2x1ZyIsImlkIiwiZGVwdGgiLCJ1dWlkIiwiRG9jdW1lbnREcmF3ZXJUb2dnbGVyIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkcmF3ZXJTbHVnIiwiZGlzYWJsZWQiLCJyZXN0IiwidCIsImkxOG4iLCJjb2xsZWN0aW9uQ29uZmlnIiwic2x1ZyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiYXJpYS1sYWJlbCIsImxhYmVsIiwibGFiZWxzIiwic2luZ3VsYXIiLCJEb2N1bWVudERyYXdlciIsInByb3BzIiwiaGVhZGVyIiwiZ3V0dGVyIiwidXNlRG9jdW1lbnREcmF3ZXIiLCJkcmF3ZXJEZXB0aCIsIm1vZGFsU3RhdGUiLCJ0b2dnbGVNb2RhbCIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVEcmF3ZXIiLCJjbG9zZURyYXdlciIsIm9wZW5EcmF3ZXIiLCJNZW1vaXplZERyYXdlciIsImtleSIsIk1lbW9pemVkRHJhd2VyVG9nZ2xlciIsIk1lbW9pemVkRHJhd2VyU3RhdGUiLCJpc0RyYXdlck9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNoRixTQUFTQyxRQUFRLFFBQVEscUJBQXFCO0FBQzlDLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFFL0MsU0FBU0MsY0FBYyxRQUFRLHVDQUF1QztBQUN0RSxTQUFTQyxNQUFNLEVBQUVDLGFBQWEsUUFBUSxZQUFZO0FBQ2xELFNBQVNDLHFCQUFxQixRQUFRLG9FQUFvRTtBQUMxRyxTQUFTQyxZQUFZLFFBQVEsNEJBQTRCO0FBQ3pELFNBQVNDLHFCQUFxQixRQUFRLGtCQUFrQjtBQUV4RCxPQUFPLGVBQWU7QUFFdEIsT0FBTyxJQUFNQyxZQUFZLGFBQWE7QUFFdEMsSUFBTUMsMkJBQTJCO1FBQy9CQyx1QkFBQUEsZ0JBQ0FDLFdBQUFBLElBQ0FDLGNBQUFBLE9BQ0FDLGFBQUFBO1dBTUksQUFBQyxjQUErQkQsT0FBbEJGLGdCQUFlLEtBQVdDLE9BQVJDLE9BQThCQyxPQUF0QkYsS0FBSyxBQUFDLElBQU0sT0FBSEEsTUFBTyxJQUFHLEtBQVEsT0FBTEU7O0FBRXBFLE9BQU8sSUFBTUMsd0JBQXdEO1FBQ25FQyxrQkFBQUEsVUFDQUMsbUJBQUFBLFdBQ0FDLG9CQUFBQSxZQUNBTixZQUFBQSxJQUNBRCx3QkFBQUEsZ0JBQ0FRLGtCQUFBQSxVQUNHQztRQU5ISjtRQUNBQztRQUNBQztRQUNBTjtRQUNB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