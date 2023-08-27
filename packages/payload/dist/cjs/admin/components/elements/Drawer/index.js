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
    formatDrawerSlug: function() {
        return formatDrawerSlug;
    },
    DrawerToggler: function() {
        return DrawerToggler;
    },
    Drawer: function() {
        return Drawer;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _modal = require("@faceless-ui/modal");
var _windowinfo = require("@faceless-ui/window-info");
var _reacti18next = require("react-i18next");
var _EditDepth = require("../../utilities/EditDepth");
var _Gutter = require("../Gutter");
var _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
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
var baseClass = "drawer";
var zBase = 100;
var formatDrawerSlug = function(param) {
    var slug = param.slug, depth = param.depth;
    return "drawer_".concat(depth, "_").concat(slug);
};
var DrawerToggler = function(_param) {
    var slug = _param.slug, children = _param.children, className = _param.className, onClick = _param.onClick, disabled = _param.disabled, rest = _object_without_properties(_param, [
        "slug",
        "children",
        "className",
        "onClick",
        "disabled"
    ]);
    var openModal = (0, _modal.useModal)().openModal;
    var handleClick = (0, _react.useCallback)(function(e) {
        openModal(slug);
        if (typeof onClick === "function") onClick(e);
    }, [
        openModal,
        slug,
        onClick
    ]);
    return /*#__PURE__*/ _react.default.createElement("button", _object_spread({
        onClick: handleClick,
        type: "button",
        className: className,
        disabled: disabled
    }, rest), children);
};
var Drawer = function(param) {
    var slug = param.slug, children = param.children, className = param.className, header = param.header, title = param.title, _param_gutter = param.gutter, gutter = _param_gutter === void 0 ? true : _param_gutter;
    var t = (0, _reacti18next.useTranslation)("general").t;
    var _useModal = (0, _modal.useModal)(), closeModal = _useModal.closeModal, modalState = _useModal.modalState;
    var _useWindowInfo = (0, _windowinfo.useWindowInfo)(), _useWindowInfo_breakpoints = _useWindowInfo.breakpoints, midBreak = _useWindowInfo_breakpoints.m;
    var drawerDepth = (0, _EditDepth.useEditDepth)();
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), animateIn = _useState1[0], setAnimateIn = _useState1[1];
    (0, _react.useEffect)(function() {
        var _modalState_slug;
        setIsOpen((_modalState_slug = modalState[slug]) === null || _modalState_slug === void 0 ? void 0 : _modalState_slug.isOpen);
    }, [
        slug,
        modalState
    ]);
    (0, _react.useEffect)(function() {
        setAnimateIn(isOpen);
    }, [
        isOpen
    ]);
    if (isOpen) {
        // IMPORTANT: do not render the drawer until it is explicitly open, this is to avoid large html trees especially when nesting drawers
        return /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
            slug: slug,
            className: [
                className,
                baseClass,
                animateIn && "".concat(baseClass, "--is-open")
            ].filter(Boolean).join(" "),
            style: {
                zIndex: zBase + drawerDepth
            }
        }, drawerDepth === 1 && /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__blur-bg")
        }), /*#__PURE__*/ _react.default.createElement("button", {
            className: "".concat(baseClass, "__close"),
            id: "close-drawer__".concat(slug),
            type: "button",
            onClick: function() {
                return closeModal(slug);
            },
            style: {
                width: "calc(".concat(midBreak ? "var(--gutter-h)" : "var(--nav-width)", " + ").concat(drawerDepth - 1, " * 25px)")
            },
            "aria-label": t("close")
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__content")
        }, /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
            className: "".concat(baseClass, "__content-children"),
            right: gutter,
            left: gutter
        }, /*#__PURE__*/ _react.default.createElement(_EditDepth.EditDepthContext.Provider, {
            value: drawerDepth + 1
        }, header && header, header === undefined && /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__header")
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            className: "".concat(baseClass, "__header__title")
        }, title), /*#__PURE__*/ _react.default.createElement("button", {
            className: "".concat(baseClass, "__header__close"),
            id: "close-drawer__".concat(slug),
            type: "button",
            onClick: function() {
                return closeModal(slug);
            },
            "aria-label": t("close")
        }, /*#__PURE__*/ _react.default.createElement(_X.default, null))), children))));
    }
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYXdlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwsIHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJztcbmltcG9ydCB7IHVzZVdpbmRvd0luZm8gfSBmcm9tICdAZmFjZWxlc3MtdWkvd2luZG93LWluZm8nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFByb3BzLCBUb2dnbGVyUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEVkaXREZXB0aENvbnRleHQsIHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnO1xuaW1wb3J0IHsgR3V0dGVyIH0gZnJvbSAnLi4vR3V0dGVyJztcbmltcG9ydCBYIGZyb20gJy4uLy4uL2ljb25zL1gnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdkcmF3ZXInO1xuY29uc3QgekJhc2UgPSAxMDA7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREcmF3ZXJTbHVnID0gKHtcbiAgc2x1ZyxcbiAgZGVwdGgsXG59OiB7XG4gIHNsdWc6IHN0cmluZyxcbiAgZGVwdGg6IG51bWJlcixcbn0pOiBzdHJpbmcgPT4gYGRyYXdlcl8ke2RlcHRofV8ke3NsdWd9YDtcblxuZXhwb3J0IGNvbnN0IERyYXdlclRvZ2dsZXI6IFJlYWN0LkZDPFRvZ2dsZXJQcm9wcz4gPSAoe1xuICBzbHVnLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBvbkNsaWNrLFxuICBkaXNhYmxlZCxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICBjb25zdCB7IG9wZW5Nb2RhbCB9ID0gdXNlTW9kYWwoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgb3Blbk1vZGFsKHNsdWcpO1xuICAgIGlmICh0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJykgb25DbGljayhlKTtcbiAgfSwgW29wZW5Nb2RhbCwgc2x1Zywgb25DbGlja10pO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IERyYXdlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgc2x1ZyxcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgaGVhZGVyLFxuICB0aXRsZSxcbiAgZ3V0dGVyID0gdHJ1ZSxcbn0pID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCB7IGNsb3NlTW9kYWwsIG1vZGFsU3RhdGUgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IHsgYnJlYWtwb2ludHM6IHsgbTogbWlkQnJlYWsgfSB9ID0gdXNlV2luZG93SW5mbygpO1xuICBjb25zdCBkcmF3ZXJEZXB0aCA9IHVzZUVkaXREZXB0aCgpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYW5pbWF0ZUluLCBzZXRBbmltYXRlSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNPcGVuKG1vZGFsU3RhdGVbc2x1Z10/LmlzT3Blbik7XG4gIH0sIFtzbHVnLCBtb2RhbFN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBbmltYXRlSW4oaXNPcGVuKTtcbiAgfSwgW2lzT3Blbl0pO1xuXG4gIGlmIChpc09wZW4pIHtcbiAgICAvLyBJTVBPUlRBTlQ6IGRvIG5vdCByZW5kZXIgdGhlIGRyYXdlciB1bnRpbCBpdCBpcyBleHBsaWNpdGx5IG9wZW4sIHRoaXMgaXMgdG8gYXZvaWQgbGFyZ2UgaHRtbCB0cmVlcyBlc3BlY2lhbGx5IHdoZW4gbmVzdGluZyBkcmF3ZXJzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgICAgYW5pbWF0ZUluICYmIGAke2Jhc2VDbGFzc30tLWlzLW9wZW5gLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgekluZGV4OiB6QmFzZSArIGRyYXdlckRlcHRoLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7ZHJhd2VyRGVwdGggPT09IDEgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19ibHVyLWJnYH0gLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY2xvc2VgfVxuICAgICAgICAgIGlkPXtgY2xvc2UtZHJhd2VyX18ke3NsdWd9YH1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZU1vZGFsKHNsdWcpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYGNhbGMoJHttaWRCcmVhayA/ICd2YXIoLS1ndXR0ZXItaCknIDogJ3ZhcigtLW5hdi13aWR0aCknfSArICR7ZHJhd2VyRGVwdGggLSAxfSAqIDI1cHgpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2Nsb3NlJyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250ZW50YH0+XG4gICAgICAgICAgPEd1dHRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250ZW50LWNoaWxkcmVuYH1cbiAgICAgICAgICAgIHJpZ2h0PXtndXR0ZXJ9XG4gICAgICAgICAgICBsZWZ0PXtndXR0ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVkaXREZXB0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2RyYXdlckRlcHRoICsgMX0+XG4gICAgICAgICAgICAgIHtoZWFkZXIgJiYgaGVhZGVyfVxuICAgICAgICAgICAgICB7aGVhZGVyID09PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXJgfT5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcl9fdGl0bGVgfT5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXJfX2Nsb3NlYH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BjbG9zZS1kcmF3ZXJfXyR7c2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbChzbHVnKX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnY2xvc2UnKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFggLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0VkaXREZXB0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgPC9HdXR0ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIl0sIm5hbWVzIjpbImZvcm1hdERyYXdlclNsdWciLCJEcmF3ZXJUb2dnbGVyIiwiRHJhd2VyIiwiYmFzZUNsYXNzIiwiekJhc2UiLCJzbHVnIiwiZGVwdGgiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInJlc3QiLCJvcGVuTW9kYWwiLCJ1c2VNb2RhbCIsImhhbmRsZUNsaWNrIiwidXNlQ2FsbGJhY2siLCJlIiwiYnV0dG9uIiwidHlwZSIsImhlYWRlciIsInRpdGxlIiwiZ3V0dGVyIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiY2xvc2VNb2RhbCIsIm1vZGFsU3RhdGUiLCJ1c2VXaW5kb3dJbmZvIiwiYnJlYWtwb2ludHMiLCJtIiwibWlkQnJlYWsiLCJkcmF3ZXJEZXB0aCIsInVzZUVkaXREZXB0aCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiYW5pbWF0ZUluIiwic2V0QW5pbWF0ZUluIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInN0eWxlIiwiekluZGV4IiwiZGl2IiwiaWQiLCJ3aWR0aCIsImFyaWEtbGFiZWwiLCJHdXR0ZXIiLCJyaWdodCIsImxlZnQiLCJFZGl0RGVwdGhDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImgyIiwiWCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFjYUEsZ0JBQWdCO2VBQWhCQTs7SUFRQUMsYUFBYTtlQUFiQTs7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