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
    LoadingOverlay: function() {
        return LoadingOverlay;
    },
    LoadingOverlayToggle: function() {
        return LoadingOverlayToggle;
    },
    FormLoadingOverlayToggle: function() {
        return FormLoadingOverlayToggle;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reacti18next = require("react-i18next");
var _getTranslation = require("../../../../utilities/getTranslation");
var _context = require("../../forms/Form/context");
var _LoadingOverlay = require("../../utilities/LoadingOverlay");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "loading-overlay";
var LoadingOverlay = function(param) {
    var loadingText = param.loadingText, _param_show = param.show, show = _param_show === void 0 ? true : _param_show, overlayType = param.overlayType, animationDuration = param.animationDuration;
    var t = (0, _reacti18next.useTranslation)("general").t;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            show ? "".concat(baseClass, "--entering") : "".concat(baseClass, "--exiting"),
            overlayType ? "".concat(baseClass, "--").concat(overlayType) : ""
        ].filter(Boolean).join(" "),
        style: {
            animationDuration: animationDuration || "500ms"
        }
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__bars")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__bar")
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__bar")
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__bar")
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__bar")
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__bar")
    })), /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__text")
    }, loadingText || t("loading")));
};
var LoadingOverlayToggle = function(param) {
    var key = param.name, show = param.show, _param_type = param.type, type = _param_type === void 0 ? "fullscreen" : _param_type, loadingText = param.loadingText;
    var toggleLoadingOverlay = (0, _LoadingOverlay.useLoadingOverlay)().toggleLoadingOverlay;
    _react.default.useEffect(function() {
        toggleLoadingOverlay({
            key: key,
            isLoading: show,
            type: type,
            loadingText: loadingText || undefined
        });
        return function() {
            toggleLoadingOverlay({
                key: key,
                isLoading: false,
                type: type
            });
        };
    }, [
        show,
        toggleLoadingOverlay,
        key,
        type,
        loadingText
    ]);
    return null;
};
var FormLoadingOverlayToggle = function(param) {
    var name = param.name, _param_formIsLoading = param.formIsLoading, formIsLoading = _param_formIsLoading === void 0 ? false : _param_formIsLoading, action = param.action, _param_type = param.type, type = _param_type === void 0 ? "fullscreen" : _param_type, loadingSuffix = param.loadingSuffix;
    var isProcessing = (0, _context.useFormProcessing)();
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var labels = {
        create: t("creating"),
        update: t("updating"),
        loading: t("loading")
    };
    return /*#__PURE__*/ _react.default.createElement(LoadingOverlayToggle, {
        name: name,
        show: formIsLoading || isProcessing,
        type: type,
        loadingText: "".concat(labels[action], " ").concat(loadingSuffix ? (0, _getTranslation.getTranslation)(loadingSuffix, i18n) : "").trim()
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlRm9ybVByb2Nlc3NpbmcgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgdXNlTG9hZGluZ092ZXJsYXkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9hZGluZ092ZXJsYXknO1xuaW1wb3J0IHR5cGUgeyBMb2FkaW5nT3ZlcmxheVR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvYWRpbmdPdmVybGF5L3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbG9hZGluZy1vdmVybGF5JztcblxudHlwZSBQcm9wcyA9IHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGxvYWRpbmdUZXh0Pzogc3RyaW5nO1xuICBvdmVybGF5VHlwZT86IHN0cmluZ1xuICBhbmltYXRpb25EdXJhdGlvbj86IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nT3ZlcmxheTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbG9hZGluZ1RleHQsIHNob3cgPSB0cnVlLCBvdmVybGF5VHlwZSwgYW5pbWF0aW9uRHVyYXRpb24gfSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBzaG93ID8gYCR7YmFzZUNsYXNzfS0tZW50ZXJpbmdgIDogYCR7YmFzZUNsYXNzfS0tZXhpdGluZ2AsXG4gICAgICAgIG92ZXJsYXlUeXBlID8gYCR7YmFzZUNsYXNzfS0tJHtvdmVybGF5VHlwZX1gIDogJycsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogYW5pbWF0aW9uRHVyYXRpb24gfHwgJzUwMG1zJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JhcnNgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JhcmB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19iYXJgfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYmFyYH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JhcmB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19iYXJgfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGV4dGB9Pntsb2FkaW5nVGV4dCB8fCB0KCdsb2FkaW5nJyl9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG50eXBlIFVzZUxvYWRpbmdPdmVybGF5VG9nZ2xlVCA9IHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlPzogTG9hZGluZ092ZXJsYXlUeXBlcyxcbiAgbG9hZGluZ1RleHQ/OiBzdHJpbmc7XG59XG5leHBvcnQgY29uc3QgTG9hZGluZ092ZXJsYXlUb2dnbGU6IFJlYWN0LkZDPFVzZUxvYWRpbmdPdmVybGF5VG9nZ2xlVD4gPSAoeyBuYW1lOiBrZXksIHNob3csIHR5cGUgPSAnZnVsbHNjcmVlbicsIGxvYWRpbmdUZXh0IH0pID0+IHtcbiAgY29uc3QgeyB0b2dnbGVMb2FkaW5nT3ZlcmxheSB9ID0gdXNlTG9hZGluZ092ZXJsYXkoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRvZ2dsZUxvYWRpbmdPdmVybGF5KHtcbiAgICAgIGtleSxcbiAgICAgIGlzTG9hZGluZzogc2hvdyxcbiAgICAgIHR5cGUsXG4gICAgICBsb2FkaW5nVGV4dDogbG9hZGluZ1RleHQgfHwgdW5kZWZpbmVkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRvZ2dsZUxvYWRpbmdPdmVybGF5KHtcbiAgICAgICAga2V5LFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICB0eXBlLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW3Nob3csIHRvZ2dsZUxvYWRpbmdPdmVybGF5LCBrZXksIHR5cGUsIGxvYWRpbmdUZXh0XSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5cbnR5cGUgRm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlVCA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlPzogTG9hZGluZ092ZXJsYXlUeXBlcztcbiAgZm9ybUlzTG9hZGluZz86IGJvb2xlYW47XG4gIGFjdGlvbjogJ2xvYWRpbmcnIHwgJ2NyZWF0ZScgfCAndXBkYXRlJztcbiAgbG9hZGluZ1N1ZmZpeD86IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBGb3JtTG9hZGluZ092ZXJsYXlUb2dnbGU6IFJlYWN0LkZDPEZvcm1Mb2FkaW5nT3ZlcmxheVRvZ2dsZVQ+ID0gKHsgbmFtZSwgZm9ybUlzTG9hZGluZyA9IGZhbHNlLCBhY3Rpb24sIHR5cGUgPSAnZnVsbHNjcmVlbicsIGxvYWRpbmdTdWZmaXggfSkgPT4ge1xuICBjb25zdCBpc1Byb2Nlc3NpbmcgPSB1c2VGb3JtUHJvY2Vzc2luZygpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3QgbGFiZWxzID0ge1xuICAgIGNyZWF0ZTogdCgnY3JlYXRpbmcnKSxcbiAgICB1cGRhdGU6IHQoJ3VwZGF0aW5nJyksXG4gICAgbG9hZGluZzogdCgnbG9hZGluZycpLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvYWRpbmdPdmVybGF5VG9nZ2xlXG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgc2hvdz17Zm9ybUlzTG9hZGluZyB8fCBpc1Byb2Nlc3Npbmd9XG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgbG9hZGluZ1RleHQ9e2Ake2xhYmVsc1thY3Rpb25dfSAke2xvYWRpbmdTdWZmaXggPyBnZXRUcmFuc2xhdGlvbihsb2FkaW5nU3VmZml4LCBpMThuKSA6ICcnfWAudHJpbSgpfVxuICAgIC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkxvYWRpbmdPdmVybGF5IiwiTG9hZGluZ092ZXJsYXlUb2dnbGUiLCJGb3JtTG9hZGluZ092ZXJsYXlUb2dnbGUiLCJiYXNlQ2xhc3MiLCJsb2FkaW5nVGV4dCIsInNob3ciLCJvdmVybGF5VHlwZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJzdHlsZSIsInNwYW4iLCJuYW1lIiwia2V5IiwidHlwZSIsInRvZ2dsZUxvYWRpbmdPdmVybGF5IiwidXNlTG9hZGluZ092ZXJsYXkiLCJSZWFjdCIsInVzZUVmZmVjdCIsImlzTG9hZGluZyIsInVuZGVmaW5lZCIsImZvcm1Jc0xvYWRpbmciLCJhY3Rpb24iLCJsb2FkaW5nU3VmZml4IiwiaXNQcm9jZXNzaW5nIiwidXNlRm9ybVByb2Nlc3NpbmciLCJpMThuIiwibGFiZWxzIiwiY3JlYXRlIiwidXBkYXRlIiwibG9hZGluZyIsImdldFRyYW5zbGF0aW9uIiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFpQmFBLGNBQWM7ZUFBZEE7O0lBa0NBQyxvQkFBb0I7ZUFBcEJBOztJQStC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