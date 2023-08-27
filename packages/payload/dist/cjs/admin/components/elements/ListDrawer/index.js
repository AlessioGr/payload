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
    formatListDrawerSlug: function() {
        return formatListDrawerSlug;
    },
    ListDrawerToggler: function() {
        return ListDrawerToggler;
    },
    ListDrawer: function() {
        return ListDrawer;
    },
    useListDrawer: function() {
        return useListDrawer;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _modal = require("@faceless-ui/modal");
var _Drawer = require("../Drawer");
var _EditDepth = require("../../utilities/EditDepth");
var _DrawerContent = require("./DrawerContent");
var _Config = require("../../utilities/Config");
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
var baseClass = "list-drawer";
var formatListDrawerSlug = function(param) {
    var depth = param.depth, uuid = param.uuid;
    return "list-drawer_".concat(depth, "_").concat(uuid);
};
var ListDrawerToggler = function(_param) {
    var children = _param.children, className = _param.className, drawerSlug = _param.drawerSlug, disabled = _param.disabled, rest = _object_without_properties(_param, [
        "children",
        "className",
        "drawerSlug",
        "disabled"
    ]);
    return /*#__PURE__*/ _react.default.createElement(_Drawer.DrawerToggler, _object_spread({
        slug: drawerSlug,
        className: [
            className,
            "".concat(baseClass, "__toggler")
        ].filter(Boolean).join(" "),
        disabled: disabled
    }, rest), children);
};
var ListDrawer = function(props) {
    var drawerSlug = props.drawerSlug;
    return /*#__PURE__*/ _react.default.createElement(_Drawer.Drawer, {
        slug: drawerSlug,
        className: baseClass,
        header: false,
        gutter: false
    }, /*#__PURE__*/ _react.default.createElement(_DrawerContent.ListDrawerContent, props));
};
var useListDrawer = function(param) {
    var collectionSlugsFromProps = param.collectionSlugs, uploads = param.uploads, selectedCollection = param.selectedCollection, filterOptions = param.filterOptions;
    var collections = (0, _Config.useConfig)().collections;
    var drawerDepth = (0, _EditDepth.useEditDepth)();
    var uuid = (0, _react.useId)();
    var _useModal = (0, _modal.useModal)(), modalState = _useModal.modalState, toggleModal = _useModal.toggleModal, closeModal = _useModal.closeModal, openModal = _useModal.openModal;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(collectionSlugsFromProps), 2), collectionSlugs = _useState1[0], setCollectionSlugs = _useState1[1];
    var drawerSlug = formatListDrawerSlug({
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
    (0, _react.useEffect)(function() {
        if (!collectionSlugs || collectionSlugs.length === 0) {
            var filteredCollectionSlugs = collections.filter(function(param) {
                var upload = param.upload;
                if (uploads) {
                    return Boolean(upload) === true;
                }
                return true;
            });
            setCollectionSlugs(filteredCollectionSlugs.map(function(param) {
                var slug = param.slug;
                return slug;
            }));
        }
    }, [
        collectionSlugs,
        uploads,
        collections
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
        drawerSlug,
        closeModal
    ]);
    var openDrawer = (0, _react.useCallback)(function() {
        openModal(drawerSlug);
    }, [
        drawerSlug,
        openModal
    ]);
    var MemoizedDrawer = (0, _react.useMemo)(function() {
        return function(props) {
            return /*#__PURE__*/ _react.default.createElement(ListDrawer, _object_spread_props(_object_spread({}, props), {
                drawerSlug: drawerSlug,
                collectionSlugs: collectionSlugs,
                uploads: uploads,
                closeDrawer: closeDrawer,
                key: drawerSlug,
                selectedCollection: selectedCollection,
                filterOptions: filterOptions
            }));
        };
    }, [
        drawerSlug,
        collectionSlugs,
        uploads,
        closeDrawer,
        selectedCollection,
        filterOptions
    ]);
    var MemoizedDrawerToggler = (0, _react.useMemo)(function() {
        return function(props) {
            return /*#__PURE__*/ _react.default.createElement(ListDrawerToggler, _object_spread_props(_object_spread({}, props), {
                drawerSlug: drawerSlug
            }));
        };
    }, [
        drawerSlug
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3REcmF3ZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VJZCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0BmYWNlbGVzcy11aS9tb2RhbCc7XG5pbXBvcnQgeyBMaXN0RHJhd2VyUHJvcHMsIExpc3RUb2dnbGVyUHJvcHMsIFVzZUxpc3REcmF3ZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IERyYXdlciwgRHJhd2VyVG9nZ2xlciB9IGZyb20gJy4uL0RyYXdlcic7XG5pbXBvcnQgeyB1c2VFZGl0RGVwdGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRWRpdERlcHRoJztcbmltcG9ydCB7IExpc3REcmF3ZXJDb250ZW50IH0gZnJvbSAnLi9EcmF3ZXJDb250ZW50JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBiYXNlQ2xhc3MgPSAnbGlzdC1kcmF3ZXInO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TGlzdERyYXdlclNsdWcgPSAoe1xuICBkZXB0aCxcbiAgdXVpZCxcbn06IHtcbiAgZGVwdGg6IG51bWJlcixcbiAgdXVpZDogc3RyaW5nLCAvLyBzdXBwbHkgd2hlbiBjcmVhdGluZyBhIG5ldyBkb2N1bWVudCBhbmQgbm8gaWQgaXMgYXZhaWxhYmxlXG59KSA9PiBgbGlzdC1kcmF3ZXJfJHtkZXB0aH1fJHt1dWlkfWA7XG5cbmV4cG9ydCBjb25zdCBMaXN0RHJhd2VyVG9nZ2xlcjogUmVhY3QuRkM8TGlzdFRvZ2dsZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkcmF3ZXJTbHVnLFxuICBkaXNhYmxlZCxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJUb2dnbGVyXG4gICAgICBzbHVnPXtkcmF3ZXJTbHVnfVxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgYCR7YmFzZUNsYXNzfV9fdG9nZ2xlcmAsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9EcmF3ZXJUb2dnbGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IExpc3REcmF3ZXI6IFJlYWN0LkZDPExpc3REcmF3ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkcmF3ZXJTbHVnIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIGhlYWRlcj17ZmFsc2V9XG4gICAgICBndXR0ZXI9e2ZhbHNlfVxuICAgID5cbiAgICAgIDxMaXN0RHJhd2VyQ29udGVudFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUxpc3REcmF3ZXI6IFVzZUxpc3REcmF3ZXIgPSAoe1xuICBjb2xsZWN0aW9uU2x1Z3M6IGNvbGxlY3Rpb25TbHVnc0Zyb21Qcm9wcyxcbiAgdXBsb2FkcyxcbiAgc2VsZWN0ZWRDb2xsZWN0aW9uLFxuICBmaWx0ZXJPcHRpb25zLFxufSkgPT4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb25zIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgZHJhd2VyRGVwdGggPSB1c2VFZGl0RGVwdGgoKTtcbiAgY29uc3QgdXVpZCA9IHVzZUlkKCk7XG4gIGNvbnN0IHsgbW9kYWxTdGF0ZSwgdG9nZ2xlTW9kYWwsIGNsb3NlTW9kYWwsIG9wZW5Nb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbGxlY3Rpb25TbHVncywgc2V0Q29sbGVjdGlvblNsdWdzXSA9IHVzZVN0YXRlKGNvbGxlY3Rpb25TbHVnc0Zyb21Qcm9wcyk7XG5cbiAgY29uc3QgZHJhd2VyU2x1ZyA9IGZvcm1hdExpc3REcmF3ZXJTbHVnKHtcbiAgICBkZXB0aDogZHJhd2VyRGVwdGgsXG4gICAgdXVpZCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc09wZW4oQm9vbGVhbihtb2RhbFN0YXRlW2RyYXdlclNsdWddPy5pc09wZW4pKTtcbiAgfSwgW21vZGFsU3RhdGUsIGRyYXdlclNsdWddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY29sbGVjdGlvblNsdWdzIHx8IGNvbGxlY3Rpb25TbHVncy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQ29sbGVjdGlvblNsdWdzID0gY29sbGVjdGlvbnMuZmlsdGVyKCh7IHVwbG9hZCB9KSA9PiB7XG4gICAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgICAgcmV0dXJuIEJvb2xlYW4odXBsb2FkKSA9PT0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRDb2xsZWN0aW9uU2x1Z3MoZmlsdGVyZWRDb2xsZWN0aW9uU2x1Z3MubWFwKCh7IHNsdWcgfSkgPT4gc2x1ZykpO1xuICAgIH1cbiAgfSwgW2NvbGxlY3Rpb25TbHVncywgdXBsb2FkcywgY29sbGVjdGlvbnNdKTtcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHRvZ2dsZU1vZGFsKGRyYXdlclNsdWcpO1xuICB9LCBbdG9nZ2xlTW9kYWwsIGRyYXdlclNsdWddKTtcblxuICBjb25zdCBjbG9zZURyYXdlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjbG9zZU1vZGFsKGRyYXdlclNsdWcpO1xuICB9LCBbZHJhd2VyU2x1ZywgY2xvc2VNb2RhbF0pO1xuXG4gIGNvbnN0IG9wZW5EcmF3ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgb3Blbk1vZGFsKGRyYXdlclNsdWcpO1xuICB9LCBbZHJhd2VyU2x1Zywgb3Blbk1vZGFsXSk7XG5cbiAgY29uc3QgTWVtb2l6ZWREcmF3ZXIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gKChwcm9wcykgPT4gKFxuICAgICAgPExpc3REcmF3ZXJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBkcmF3ZXJTbHVnPXtkcmF3ZXJTbHVnfVxuICAgICAgICBjb2xsZWN0aW9uU2x1Z3M9e2NvbGxlY3Rpb25TbHVnc31cbiAgICAgICAgdXBsb2Fkcz17dXBsb2Fkc31cbiAgICAgICAgY2xvc2VEcmF3ZXI9e2Nsb3NlRHJhd2VyfVxuICAgICAgICBrZXk9e2RyYXdlclNsdWd9XG4gICAgICAgIHNlbGVjdGVkQ29sbGVjdGlvbj17c2VsZWN0ZWRDb2xsZWN0aW9ufVxuICAgICAgICBmaWx0ZXJPcHRpb25zPXtmaWx0ZXJPcHRpb25zfVxuICAgICAgLz5cbiAgICApKTtcbiAgfSwgW2RyYXdlclNsdWcsIGNvbGxlY3Rpb25TbHVncywgdXBsb2FkcywgY2xvc2VEcmF3ZXIsIHNlbGVjdGVkQ29sbGVjdGlvbiwgZmlsdGVyT3B0aW9uc10pO1xuXG4gIGNvbnN0IE1lbW9pemVkRHJhd2VyVG9nZ2xlciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiAoKHByb3BzKSA9PiAoXG4gICAgICA8TGlzdERyYXdlclRvZ2dsZXJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBkcmF3ZXJTbHVnPXtkcmF3ZXJTbHVnfVxuICAgICAgLz5cbiAgICApKTtcbiAgfSwgW2RyYXdlclNsdWddKTtcblxuICBjb25zdCBNZW1vaXplZERyYXdlclN0YXRlID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIGRyYXdlclNsdWcsXG4gICAgZHJhd2VyRGVwdGgsXG4gICAgaXNEcmF3ZXJPcGVuOiBpc09wZW4sXG4gICAgdG9nZ2xlRHJhd2VyLFxuICAgIGNsb3NlRHJhd2VyLFxuICAgIG9wZW5EcmF3ZXIsXG4gIH0pLCBbZHJhd2VyRGVwdGgsIGRyYXdlclNsdWcsIGlzT3BlbiwgdG9nZ2xlRHJhd2VyLCBjbG9zZURyYXdlciwgb3BlbkRyYXdlcl0pO1xuXG4gIHJldHVybiBbXG4gICAgTWVtb2l6ZWREcmF3ZXIsXG4gICAgTWVtb2l6ZWREcmF3ZXJUb2dnbGVyLFxuICAgIE1lbW9pemVkRHJhd2VyU3RhdGUsXG4gIF07XG59O1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsImZvcm1hdExpc3REcmF3ZXJTbHVnIiwiTGlzdERyYXdlclRvZ2dsZXIiLCJMaXN0RHJhd2VyIiwidXNlTGlzdERyYXdlciIsImRlcHRoIiwidXVpZCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZHJhd2VyU2x1ZyIsImRpc2FibGVkIiwicmVzdCIsIkRyYXdlclRvZ2dsZXIiLCJzbHVnIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJwcm9wcyIsIkRyYXdlciIsImhlYWRlciIsImd1dHRlciIsIkxpc3REcmF3ZXJDb250ZW50IiwiY29sbGVjdGlvblNsdWdzIiwiY29sbGVjdGlvblNsdWdzRnJvbVByb3BzIiwidXBsb2FkcyIsInNlbGVjdGVkQ29sbGVjdGlvbiIsImZpbHRlck9wdGlvbnMiLCJjb2xsZWN0aW9ucyIsInVzZUNvbmZpZyIsImRyYXdlckRlcHRoIiwidXNlRWRpdERlcHRoIiwidXNlSWQiLCJ1c2VNb2RhbCIsIm1vZGFsU3RhdGUiLCJ0b2dnbGVNb2RhbCIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInNldENvbGxlY3Rpb25TbHVncyIsInVzZUVmZmVjdCIsImxlbmd0aCIsImZpbHRlcmVkQ29sbGVjdGlvblNsdWdzIiwidXBsb2FkIiwibWFwIiwidG9nZ2xlRHJhd2VyIiwidXNlQ2FsbGJhY2siLCJjbG9zZURyYXdlciIsIm9wZW5EcmF3ZXIiLCJNZW1vaXplZERyYXdlciIsInVzZU1lbW8iLCJrZXkiLCJNZW1vaXplZERyYXdlclRvZ2dsZXIiLCJNZW1vaXplZERyYXdlclN0YXRlIiwiaXNEcmF3ZXJPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVVhQSxTQUFTO2VBQVRBOztJQUVBQyxvQkFBb0I7ZUFBcEJBOztJQVFBQyxpQkFBaUI7ZUFBakJBOztJQXNCQUMsVUFBVTtlQUFWQTs7SUFpQkFDLGFBQWE7ZUFBYkE7Ozs2REEzRDJEO3FCQUMvQztzQkFFYTt5QkFDVDs2QkFDSztzQkFDUjtRQUVuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUosWUFBWTtBQUVsQixJQUFNQyx1QkFBdUI7UUFDbENJLGNBQUFBLE9BQ0FDLGFBQUFBO1dBSUksQUFBQyxlQUF1QkEsT0FBVEQsT0FBTSxLQUFRLE9BQUxDOztBQUV2QixJQUFNSixvQkFBZ0Q7UUFDM0RLLGtCQUFBQSxVQUNBQyxtQkFBQUEsV0FDQUMsb0JBQUFBLFlBQ0FDLGtCQUFBQSxVQUNHQztRQUpISjtRQUNBQztRQUNBQztRQUNBQzs7SUFHQSxxQkFDRSw2QkFBQ0UscUJBQWE7UUFDWkMsTUFBTUo7UUFDTkQsV0FBVztZQUNUQTtZQUNDLEdBQVksT0FBVlIsV0FBVTtTQUNkLENBQUNjLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO1FBQ3ZCTixVQUFVQTtPQUNOQyxPQUVISjtBQUdQO0FBRU8sSUFBTUosYUFBd0MsU0FB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