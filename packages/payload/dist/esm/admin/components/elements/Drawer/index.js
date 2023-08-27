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
import React, { useCallback, useEffect, useState } from "react";
import { Modal, useModal } from "@faceless-ui/modal";
import { useWindowInfo } from "@faceless-ui/window-info";
import { useTranslation } from "react-i18next";
import { EditDepthContext, useEditDepth } from "../../utilities/EditDepth";
import { Gutter } from "../Gutter";
import X from "../../icons/X";
import "./index.scss";
var baseClass = "drawer";
var zBase = 100;
export var formatDrawerSlug = function(param) {
    var slug = param.slug, depth = param.depth;
    return "drawer_".concat(depth, "_").concat(slug);
};
export var DrawerToggler = function(_param) {
    var slug = _param.slug, children = _param.children, className = _param.className, onClick = _param.onClick, disabled = _param.disabled, rest = _object_without_properties(_param, [
        "slug",
        "children",
        "className",
        "onClick",
        "disabled"
    ]);
    var openModal = useModal().openModal;
    var handleClick = useCallback(function(e) {
        openModal(slug);
        if (typeof onClick === "function") onClick(e);
    }, [
        openModal,
        slug,
        onClick
    ]);
    return /*#__PURE__*/ React.createElement("button", _object_spread({
        onClick: handleClick,
        type: "button",
        className: className,
        disabled: disabled
    }, rest), children);
};
export var Drawer = function(param) {
    var slug = param.slug, children = param.children, className = param.className, header = param.header, title = param.title, _param_gutter = param.gutter, gutter = _param_gutter === void 0 ? true : _param_gutter;
    var t = useTranslation("general").t;
    var _useModal = useModal(), closeModal = _useModal.closeModal, modalState = _useModal.modalState;
    var _useWindowInfo = useWindowInfo(), _useWindowInfo_breakpoints = _useWindowInfo.breakpoints, midBreak = _useWindowInfo_breakpoints.m;
    var drawerDepth = useEditDepth();
    var _useState = _sliced_to_array(useState(false), 2), isOpen = _useState[0], setIsOpen = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), animateIn = _useState1[0], setAnimateIn = _useState1[1];
    useEffect(function() {
        var _modalState_slug;
        setIsOpen((_modalState_slug = modalState[slug]) === null || _modalState_slug === void 0 ? void 0 : _modalState_slug.isOpen);
    }, [
        slug,
        modalState
    ]);
    useEffect(function() {
        setAnimateIn(isOpen);
    }, [
        isOpen
    ]);
    if (isOpen) {
        // IMPORTANT: do not render the drawer until it is explicitly open, this is to avoid large html trees especially when nesting drawers
        return /*#__PURE__*/ React.createElement(Modal, {
            slug: slug,
            className: [
                className,
                baseClass,
                animateIn && "".concat(baseClass, "--is-open")
            ].filter(Boolean).join(" "),
            style: {
                zIndex: zBase + drawerDepth
            }
        }, drawerDepth === 1 && /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__blur-bg")
        }), /*#__PURE__*/ React.createElement("button", {
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
        }), /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__content")
        }, /*#__PURE__*/ React.createElement(Gutter, {
            className: "".concat(baseClass, "__content-children"),
            right: gutter,
            left: gutter
        }, /*#__PURE__*/ React.createElement(EditDepthContext.Provider, {
            value: drawerDepth + 1
        }, header && header, header === undefined && /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__header")
        }, /*#__PURE__*/ React.createElement("h2", {
            className: "".concat(baseClass, "__header__title")
        }, title), /*#__PURE__*/ React.createElement("button", {
            className: "".concat(baseClass, "__header__close"),
            id: "close-drawer__".concat(slug),
            type: "button",
            onClick: function() {
                return closeModal(slug);
            },
            "aria-label": t("close")
        }, /*#__PURE__*/ React.createElement(X, null))), children))));
    }
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYXdlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwsIHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJztcbmltcG9ydCB7IHVzZVdpbmRvd0luZm8gfSBmcm9tICdAZmFjZWxlc3MtdWkvd2luZG93LWluZm8nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFByb3BzLCBUb2dnbGVyUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEVkaXREZXB0aENvbnRleHQsIHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnO1xuaW1wb3J0IHsgR3V0dGVyIH0gZnJvbSAnLi4vR3V0dGVyJztcbmltcG9ydCBYIGZyb20gJy4uLy4uL2ljb25zL1gnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdkcmF3ZXInO1xuY29uc3QgekJhc2UgPSAxMDA7XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREcmF3ZXJTbHVnID0gKHtcbiAgc2x1ZyxcbiAgZGVwdGgsXG59OiB7XG4gIHNsdWc6IHN0cmluZyxcbiAgZGVwdGg6IG51bWJlcixcbn0pOiBzdHJpbmcgPT4gYGRyYXdlcl8ke2RlcHRofV8ke3NsdWd9YDtcblxuZXhwb3J0IGNvbnN0IERyYXdlclRvZ2dsZXI6IFJlYWN0LkZDPFRvZ2dsZXJQcm9wcz4gPSAoe1xuICBzbHVnLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBvbkNsaWNrLFxuICBkaXNhYmxlZCxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICBjb25zdCB7IG9wZW5Nb2RhbCB9ID0gdXNlTW9kYWwoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgb3Blbk1vZGFsKHNsdWcpO1xuICAgIGlmICh0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJykgb25DbGljayhlKTtcbiAgfSwgW29wZW5Nb2RhbCwgc2x1Zywgb25DbGlja10pO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgey4uLnJlc3R9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IERyYXdlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgc2x1ZyxcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgaGVhZGVyLFxuICB0aXRsZSxcbiAgZ3V0dGVyID0gdHJ1ZSxcbn0pID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCB7IGNsb3NlTW9kYWwsIG1vZGFsU3RhdGUgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IHsgYnJlYWtwb2ludHM6IHsgbTogbWlkQnJlYWsgfSB9ID0gdXNlV2luZG93SW5mbygpO1xuICBjb25zdCBkcmF3ZXJEZXB0aCA9IHVzZUVkaXREZXB0aCgpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYW5pbWF0ZUluLCBzZXRBbmltYXRlSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNPcGVuKG1vZGFsU3RhdGVbc2x1Z10/LmlzT3Blbik7XG4gIH0sIFtzbHVnLCBtb2RhbFN0YXRlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRBbmltYXRlSW4oaXNPcGVuKTtcbiAgfSwgW2lzT3Blbl0pO1xuXG4gIGlmIChpc09wZW4pIHtcbiAgICAvLyBJTVBPUlRBTlQ6IGRvIG5vdCByZW5kZXIgdGhlIGRyYXdlciB1bnRpbCBpdCBpcyBleHBsaWNpdGx5IG9wZW4sIHRoaXMgaXMgdG8gYXZvaWQgbGFyZ2UgaHRtbCB0cmVlcyBlc3BlY2lhbGx5IHdoZW4gbmVzdGluZyBkcmF3ZXJzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgICAgYW5pbWF0ZUluICYmIGAke2Jhc2VDbGFzc30tLWlzLW9wZW5gLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgekluZGV4OiB6QmFzZSArIGRyYXdlckRlcHRoLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7ZHJhd2VyRGVwdGggPT09IDEgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19ibHVyLWJnYH0gLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY2xvc2VgfVxuICAgICAgICAgIGlkPXtgY2xvc2UtZHJhd2VyX18ke3NsdWd9YH1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZU1vZGFsKHNsdWcpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogYGNhbGMoJHttaWRCcmVhayA/ICd2YXIoLS1ndXR0ZXItaCknIDogJ3ZhcigtLW5hdi13aWR0aCknfSArICR7ZHJhd2VyRGVwdGggLSAxfSAqIDI1cHgpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ2Nsb3NlJyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250ZW50YH0+XG4gICAgICAgICAgPEd1dHRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250ZW50LWNoaWxkcmVuYH1cbiAgICAgICAgICAgIHJpZ2h0PXtndXR0ZXJ9XG4gICAgICAgICAgICBsZWZ0PXtndXR0ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVkaXREZXB0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2RyYXdlckRlcHRoICsgMX0+XG4gICAgICAgICAgICAgIHtoZWFkZXIgJiYgaGVhZGVyfVxuICAgICAgICAgICAgICB7aGVhZGVyID09PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXJgfT5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcl9fdGl0bGVgfT5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXJfX2Nsb3NlYH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BjbG9zZS1kcmF3ZXJfXyR7c2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbChzbHVnKX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnY2xvc2UnKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFggLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0VkaXREZXB0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgPC9HdXR0ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwidXNlTW9kYWwiLCJ1c2VXaW5kb3dJbmZvIiwidXNlVHJhbnNsYXRpb24iLCJFZGl0RGVwdGhDb250ZXh0IiwidXNlRWRpdERlcHRoIiwiR3V0dGVyIiwiWCIsImJhc2VDbGFzcyIsInpCYXNlIiwiZm9ybWF0RHJhd2VyU2x1ZyIsInNsdWciLCJkZXB0aCIsIkRyYXdlclRvZ2dsZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInJlc3QiLCJvcGVuTW9kYWwiLCJoYW5kbGVDbGljayIsImUiLCJidXR0b24iLCJ0eXBlIiwiRHJhd2VyIiwiaGVhZGVyIiwidGl0bGUiLCJndXR0ZXIiLCJ0IiwiY2xvc2VNb2RhbCIsIm1vZGFsU3RhdGUiLCJicmVha3BvaW50cyIsIm0iLCJtaWRCcmVhayIsImRyYXdlckRlcHRoIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiYW5pbWF0ZUluIiwic2V0QW5pbWF0ZUluIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJzdHlsZSIsInpJbmRleCIsImRpdiIsImlkIiwid2lkdGgiLCJhcmlhLWxhYmVsIiwicmlnaHQiLCJsZWZ0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImgyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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