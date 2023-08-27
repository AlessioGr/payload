"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    baseClass: function() {
        return baseClass;
    },
    DocumentDrawerToggler: function() {
        return DocumentDrawerToggler;
    },
    DocumentDrawer: function() {
        return DocumentDrawer;
    },
    useDocumentDrawer: function() {
        return useDocumentDrawer;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _modal = require("@faceless-ui/modal");
var _reacti18next = require("react-i18next");
var _getTranslation = require("../../../../utilities/getTranslation");
var _Drawer = require("../Drawer");
var _useRelatedCollections = require("../../forms/field-types/Relationship/AddNew/useRelatedCollections");
var _EditDepth = require("../../utilities/EditDepth");
var _DrawerContent = require("./DrawerContent");
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
var baseClass = "doc-drawer";
var formatDocumentDrawerSlug = function(param) {
    var collectionSlug = param.collectionSlug, id = param.id, depth = param.depth, uuid = param.uuid;
    return "doc-drawer_".concat(collectionSlug, "_").concat(depth).concat(id ? "_".concat(id) : "", "_").concat(uuid);
};
var DocumentDrawerToggler = function(_param) {
    var children = _param.children, className = _param.className, drawerSlug = _param.drawerSlug, id = _param.id, collectionSlug = _param.collectionSlug, disabled = _param.disabled, rest = _object_without_properties(_param, [
        "children",
        "className",
        "drawerSlug",
        "id",
        "collectionSlug",
        "disabled"
    ]);
    var _useTranslation = (0, _reacti18next.useTranslation)([
        "fields",
        "general"
    ]), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useRelatedCollections1 = _sliced_to_array((0, _useRelatedCollections.useRelatedCollections)(collectionSlug), 1), collectionConfig = _useRelatedCollections1[0];
    return /*#__PURE__*/ _react.default.createElement(_Drawer.DrawerToggler, _object_spread({
        slug: drawerSlug,
        className: [
            className,
            "".concat(baseClass, "__toggler")
        ].filter(Boolean).join(" "),
        disabled: disabled,
        "aria-label": t(!id ? "fields:addNewLabel" : "general:editLabel", {
            label: (0, _getTranslation.getTranslation)(collectionConfig.labels.singular, i18n)
        })
    }, rest), children);
};
var DocumentDrawer = function(props) {
    var drawerSlug = props.drawerSlug;
    return /*#__PURE__*/ _react.default.createElement(_Drawer.Drawer, {
        slug: drawerSlug,
        className: baseClass,
        header: false,
        gutter: false
    }, /*#__PURE__*/ _react.default.createElement(_DrawerContent.DocumentDrawerContent, props));
};
var useDocumentDrawer = function(param) {
    var id = param.id, collectionSlug = param.collectionSlug;
    var drawerDepth = (0, _EditDepth.useEditDepth)();
    var uuid = (0, _react.useId)();
    var _useModal = (0, _modal.useModal)(), modalState = _useModal.modalState, toggleModal = _useModal.toggleModal, closeModal = _useModal.closeModal, openModal = _useModal.openModal;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var drawerSlug = formatDocumentDrawerSlug({
        collectionSlug: collectionSlug,
        id: id,
        depth: drawerDepth,
        uuid: uuid
    });
    (0, _react.useEffect)(function() {
        var _modalState_drawerSlug;
        setIsOpen(Boolean((_modalState_drawerSlug = modalState[drawerSlug]) === null || _modalState_drawerSlug === void 0 ? void 0 : _modalState_drawerSlug.isOpen));
    }, [
        modalState,
        drawerSlug
    ]);
    var toggleDrawer = (0, _react.useCallback)(function() {
        toggleModal(drawerSlug);
    }, [
        toggleModal,
        drawerSlug
    ]);
    var closeDrawer = (0, _react.useCallback)(function() {
        closeModal(drawerSlug);
    }, [
        closeModal,
        drawerSlug
    ]);
    var openDrawer = (0, _react.useCallback)(function() {
        openModal(drawerSlug);
    }, [
        openModal,
        drawerSlug
    ]);
    var MemoizedDrawer = (0, _react.useMemo)(function() {
        return function(props) {
            return /*#__PURE__*/ _react.default.createElement(DocumentDrawer, _object_spread_props(_object_spread({}, props), {
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
    var MemoizedDrawerToggler = (0, _react.useMemo)(function() {
        return function(props) {
            return /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, _object_spread_props(_object_spread({}, props), {
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
    var MemoizedDrawerState = (0, _react.useMemo)(function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlSWQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IERvY3VtZW50RHJhd2VyUHJvcHMsIERvY3VtZW50VG9nZ2xlclByb3BzLCBVc2VEb2N1bWVudERyYXdlciB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgRHJhd2VyLCBEcmF3ZXJUb2dnbGVyIH0gZnJvbSAnLi4vRHJhd2VyJztcbmltcG9ydCB7IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9BZGROZXcvdXNlUmVsYXRlZENvbGxlY3Rpb25zJztcbmltcG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnO1xuaW1wb3J0IHsgRG9jdW1lbnREcmF3ZXJDb250ZW50IH0gZnJvbSAnLi9EcmF3ZXJDb250ZW50JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5leHBvcnQgY29uc3QgYmFzZUNsYXNzID0gJ2RvYy1kcmF3ZXInO1xuXG5jb25zdCBmb3JtYXREb2N1bWVudERyYXdlclNsdWcgPSAoe1xuICBjb2xsZWN0aW9uU2x1ZyxcbiAgaWQsXG4gIGRlcHRoLFxuICB1dWlkLFxufToge1xuICBjb2xsZWN0aW9uU2x1Zzogc3RyaW5nLFxuICBpZDogc3RyaW5nLFxuICBkZXB0aDogbnVtYmVyLFxuICB1dWlkOiBzdHJpbmcsIC8vIHN1cHBseSB3aGVuIGNyZWF0aW5nIGEgbmV3IGRvY3VtZW50IGFuZCBubyBpZCBpcyBhdmFpbGFibGVcbn0pID0+IGBkb2MtZHJhd2VyXyR7Y29sbGVjdGlvblNsdWd9XyR7ZGVwdGh9JHtpZCA/IGBfJHtpZH1gIDogJyd9XyR7dXVpZH1gO1xuXG5leHBvcnQgY29uc3QgRG9jdW1lbnREcmF3ZXJUb2dnbGVyOiBSZWFjdC5GQzxEb2N1bWVudFRvZ2dsZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkcmF3ZXJTbHVnLFxuICBpZCxcbiAgY29sbGVjdGlvblNsdWcsXG4gIGRpc2FibGVkLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oWydmaWVsZHMnLCAnZ2VuZXJhbCddKTtcbiAgY29uc3QgW2NvbGxlY3Rpb25Db25maWddID0gdXNlUmVsYXRlZENvbGxlY3Rpb25zKGNvbGxlY3Rpb25TbHVnKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJUb2dnbGVyXG4gICAgICBzbHVnPXtkcmF3ZXJTbHVnfVxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgYCR7YmFzZUNsYXNzfV9fdG9nZ2xlcmAsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBhcmlhLWxhYmVsPXt0KCFpZCA/ICdmaWVsZHM6YWRkTmV3TGFiZWwnIDogJ2dlbmVyYWw6ZWRpdExhYmVsJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbkNvbmZpZy5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pIH0pfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRHJhd2VyVG9nZ2xlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBEb2N1bWVudERyYXdlcjogUmVhY3QuRkM8RG9jdW1lbnREcmF3ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkcmF3ZXJTbHVnIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIGhlYWRlcj17ZmFsc2V9XG4gICAgICBndXR0ZXI9e2ZhbHNlfVxuICAgID5cbiAgICAgIDxEb2N1bWVudERyYXdlckNvbnRlbnQgey4uLnByb3BzfSAvPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZURvY3VtZW50RHJhd2VyOiBVc2VEb2N1bWVudERyYXdlciA9ICh7IGlkLCBjb2xsZWN0aW9uU2x1ZyB9KSA9PiB7XG4gIGNvbnN0IGRyYXdlckRlcHRoID0gdXNlRWRpdERlcHRoKCk7XG4gIGNvbnN0IHV1aWQgPSB1c2VJZCgpO1xuICBjb25zdCB7IG1vZGFsU3RhdGUsIHRvZ2dsZU1vZGFsLCBjbG9zZU1vZGFsLCBvcGVuTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRyYXdlclNsdWcgPSBmb3JtYXREb2N1bWVudERyYXdlclNsdWcoe1xuICAgIGNvbGxlY3Rpb25TbHVnLFxuICAgIGlkLFxuICAgIGRlcHRoOiBkcmF3ZXJEZXB0aCxcbiAgICB1dWlkLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihCb29sZWFuKG1vZGFsU3RhdGVbZHJhd2VyU2x1Z10/LmlzT3BlbikpO1xuICB9LCBbbW9kYWxTdGF0ZSwgZHJhd2VyU2x1Z10pO1xuXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB0b2dnbGVNb2RhbChkcmF3ZXJTbHVnKTtcbiAgfSwgW3RvZ2dsZU1vZGFsLCBkcmF3ZXJTbHVnXSk7XG5cbiAgY29uc3QgY2xvc2VEcmF3ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgfSwgW2Nsb3NlTW9kYWwsIGRyYXdlclNsdWddKTtcblxuICBjb25zdCBvcGVuRHJhd2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChkcmF3ZXJTbHVnKTtcbiAgfSwgW29wZW5Nb2RhbCwgZHJhd2VyU2x1Z10pO1xuXG4gIGNvbnN0IE1lbW9pemVkRHJhd2VyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuICgocHJvcHMpID0+IChcbiAgICAgIDxEb2N1bWVudERyYXdlclxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGNvbGxlY3Rpb25TbHVnPXtjb2xsZWN0aW9uU2x1Z31cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBkcmF3ZXJTbHVnPXtkcmF3ZXJTbHVnfVxuICAgICAgICBrZXk9e2RyYXdlclNsdWd9XG4gICAgICAvPlxuICAgICkpO1xuICB9LCBbaWQsIGRyYXdlclNsdWcsIGNvbGxlY3Rpb25TbHVnXSk7XG5cbiAgY29uc3QgTWVtb2l6ZWREcmF3ZXJUb2dnbGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuICgocHJvcHMpID0+IChcbiAgICAgIDxEb2N1bWVudERyYXdlclRvZ2dsZXJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGNvbGxlY3Rpb25TbHVnPXtjb2xsZWN0aW9uU2x1Z31cbiAgICAgICAgZHJhd2VyU2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgIC8+XG4gICAgKSk7XG4gIH0sIFtpZCwgZHJhd2VyU2x1ZywgY29sbGVjdGlvblNsdWddKTtcblxuICBjb25zdCBNZW1vaXplZERyYXdlclN0YXRlID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIGRyYXdlclNsdWcsXG4gICAgZHJhd2VyRGVwdGgsXG4gICAgaXNEcmF3ZXJPcGVuOiBpc09wZW4sXG4gICAgdG9nZ2xlRHJhd2VyLFxuICAgIGNsb3NlRHJhd2VyLFxuICAgIG9wZW5EcmF3ZXIsXG4gIH0pLCBbZHJhd2VyRGVwdGgsIGRyYXdlclNsdWcsIGlzT3BlbiwgdG9nZ2xlRHJhd2VyLCBjbG9zZURyYXdlciwgb3BlbkRyYXdlcl0pO1xuXG4gIHJldHVybiBbXG4gICAgTWVtb2l6ZWREcmF3ZXIsXG4gICAgTWVtb2l6ZWREcmF3ZXJUb2dnbGVyLFxuICAgIE1lbW9pemVkRHJhd2VyU3RhdGUsXG4gIF07XG59O1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkRvY3VtZW50RHJhd2VyVG9nZ2xlciIsIkRvY3VtZW50RHJhd2VyIiwidXNlRG9jdW1lbnREcmF3ZXIiLCJmb3JtYXREb2N1bWVudERyYXdlclNsdWciLCJjb2xsZWN0aW9uU2x1ZyIsImlkIiwiZGVwdGgiLCJ1dWlkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkcmF3ZXJTbHVnIiwiZGlzYWJsZWQiLCJyZXN0IiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsInVzZVJlbGF0ZWRDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25Db25maWciLCJEcmF3ZXJUb2dnbGVyIiwic2x1ZyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiYXJpYS1sYWJlbCIsImxhYmVsIiwiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbHMiLCJzaW5ndWxhciIsInByb3BzIiwiRHJhd2VyIiwiaGVhZGVyIiwiZ3V0dGVyIiwiRG9jdW1lbnREcmF3ZXJDb250ZW50IiwiZHJhd2VyRGVwdGgiLCJ1c2VFZGl0RGVwdGgiLCJ1c2VJZCIsInVzZU1vZGFsIiwibW9kYWxTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlRWZmZWN0IiwidG9nZ2xlRHJhd2VyIiwidXNlQ2FsbGJhY2siLCJjbG9zZURyYXdlciIsIm9wZW5EcmF3ZXIiLCJNZW1vaXplZERyYXdlciIsInVzZU1lbW8iLCJrZXkiLCJNZW1vaXplZERyYXdlclRvZ2dsZXIiLCJNZW1vaXplZERyYXdlclN0YXRlIiwiaXNEcmF3ZXJPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVlhQSxTQUFTO2VBQVRBOztJQWNBQyxxQkFBcUI7ZUFBckJBOztJQTRCQUMsY0FBYztlQUFkQTs7SUFlQUMsaUJBQWlCO2VBQWpCQTs7OzZEQXJFMkQ7cUJBQy9DOzRCQUNNOzhCQUVBO3NCQUNPO3FDQUNBO3lCQUNUOzZCQUNTO1FBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNSCxZQUFZO0FBRXpCLElBQU1JLDJCQUEyQjtRQUMvQkMsdUJBQUFBLGdCQUNBQyxXQUFBQSxJQUNBQyxjQUFBQSxPQUNBQyxhQUFBQTtXQU1JLEFBQUMsY0FBK0JELE9BQWxCRixnQkFBZSxLQUFXQyxPQUFSQyxPQUE4QkMsT0FBdEJGLEtBQUssQUFBQyxJQUFNLE9BQUhBLE1BQU8sSUFBRyxLQUFRLE9BQUxFOztBQUU3RCxJQUFNUCx3QkFBd0Q7UUFDbkVRLGtCQUFBQSxVQUNBQyxtQkFBQUEsV0FDQUMsb0JBQUFBLFlBQ0FMLFlBQUFBLElBQ0FELHdCQUFBQSxnQkFDQU8sa0JBQUFBLFVBQ0dDO1FBTkhKO1FBQ0FDO1FBQ0FDO1FBQ0FMO1FBQ0FEO1FBQ0FPOztJQUdBLElBQW9CRSxrQkFBQUEsSUFBQUEsNEJBQWMsRUFBQztRQUFDO1FBQVU7S0FBVSxHQUFoREMsSUFBWUQsZ0JBQVpDLEdBQUdDLE9BQVNGLGdCQUFURTtJQUNYLElBQTJCQywyQ0FBQUEsSUFBQUEsNENBQXFCLEVBQUNaLHFCQUExQ2Es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