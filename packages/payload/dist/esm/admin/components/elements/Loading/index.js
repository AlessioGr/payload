import React from "react";
import { useTranslation } from "react-i18next";
import { getTranslation } from "../../../../utilities/getTranslation";
import { useFormProcessing } from "../../forms/Form/context";
import { useLoadingOverlay } from "../../utilities/LoadingOverlay";
import "./index.scss";
var baseClass = "loading-overlay";
export var LoadingOverlay = function(param) {
    var loadingText = param.loadingText, _param_show = param.show, show = _param_show === void 0 ? true : _param_show, overlayType = param.overlayType, animationDuration = param.animationDuration;
    var t = useTranslation("general").t;
    return /*#__PURE__*/ React.createElement("div", {
        className: [
            baseClass,
            show ? "".concat(baseClass, "--entering") : "".concat(baseClass, "--exiting"),
            overlayType ? "".concat(baseClass, "--").concat(overlayType) : ""
        ].filter(Boolean).join(" "),
        style: {
            animationDuration: animationDuration || "500ms"
        }
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__bars")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__bar")
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__bar")
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__bar")
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__bar")
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__bar")
    })), /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__text")
    }, loadingText || t("loading")));
};
export var LoadingOverlayToggle = function(param) {
    var key = param.name, show = param.show, _param_type = param.type, type = _param_type === void 0 ? "fullscreen" : _param_type, loadingText = param.loadingText;
    var toggleLoadingOverlay = useLoadingOverlay().toggleLoadingOverlay;
    React.useEffect(function() {
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
export var FormLoadingOverlayToggle = function(param) {
    var name = param.name, _param_formIsLoading = param.formIsLoading, formIsLoading = _param_formIsLoading === void 0 ? false : _param_formIsLoading, action = param.action, _param_type = param.type, type = _param_type === void 0 ? "fullscreen" : _param_type, loadingSuffix = param.loadingSuffix;
    var isProcessing = useFormProcessing();
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var labels = {
        create: t("creating"),
        update: t("updating"),
        loading: t("loading")
    };
    return /*#__PURE__*/ React.createElement(LoadingOverlayToggle, {
        name: name,
        show: formIsLoading || isProcessing,
        type: type,
        loadingText: "".concat(labels[action], " ").concat(loadingSuffix ? getTranslation(loadingSuffix, i18n) : "").trim()
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlRm9ybVByb2Nlc3NpbmcgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgdXNlTG9hZGluZ092ZXJsYXkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9hZGluZ092ZXJsYXknO1xuaW1wb3J0IHR5cGUgeyBMb2FkaW5nT3ZlcmxheVR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvYWRpbmdPdmVybGF5L3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbG9hZGluZy1vdmVybGF5JztcblxudHlwZSBQcm9wcyA9IHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGxvYWRpbmdUZXh0Pzogc3RyaW5nO1xuICBvdmVybGF5VHlwZT86IHN0cmluZ1xuICBhbmltYXRpb25EdXJhdGlvbj86IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nT3ZlcmxheTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbG9hZGluZ1RleHQsIHNob3cgPSB0cnVlLCBvdmVybGF5VHlwZSwgYW5pbWF0aW9uRHVyYXRpb24gfSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBzaG93ID8gYCR7YmFzZUNsYXNzfS0tZW50ZXJpbmdgIDogYCR7YmFzZUNsYXNzfS0tZXhpdGluZ2AsXG4gICAgICAgIG92ZXJsYXlUeXBlID8gYCR7YmFzZUNsYXNzfS0tJHtvdmVybGF5VHlwZX1gIDogJycsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogYW5pbWF0aW9uRHVyYXRpb24gfHwgJzUwMG1zJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JhcnNgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JhcmB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19iYXJgfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYmFyYH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2JhcmB9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19iYXJgfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGV4dGB9Pntsb2FkaW5nVGV4dCB8fCB0KCdsb2FkaW5nJyl9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG50eXBlIFVzZUxvYWRpbmdPdmVybGF5VG9nZ2xlVCA9IHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlPzogTG9hZGluZ092ZXJsYXlUeXBlcyxcbiAgbG9hZGluZ1RleHQ/OiBzdHJpbmc7XG59XG5leHBvcnQgY29uc3QgTG9hZGluZ092ZXJsYXlUb2dnbGU6IFJlYWN0LkZDPFVzZUxvYWRpbmdPdmVybGF5VG9nZ2xlVD4gPSAoeyBuYW1lOiBrZXksIHNob3csIHR5cGUgPSAnZnVsbHNjcmVlbicsIGxvYWRpbmdUZXh0IH0pID0+IHtcbiAgY29uc3QgeyB0b2dnbGVMb2FkaW5nT3ZlcmxheSB9ID0gdXNlTG9hZGluZ092ZXJsYXkoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRvZ2dsZUxvYWRpbmdPdmVybGF5KHtcbiAgICAgIGtleSxcbiAgICAgIGlzTG9hZGluZzogc2hvdyxcbiAgICAgIHR5cGUsXG4gICAgICBsb2FkaW5nVGV4dDogbG9hZGluZ1RleHQgfHwgdW5kZWZpbmVkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRvZ2dsZUxvYWRpbmdPdmVybGF5KHtcbiAgICAgICAga2V5LFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICB0eXBlLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW3Nob3csIHRvZ2dsZUxvYWRpbmdPdmVybGF5LCBrZXksIHR5cGUsIGxvYWRpbmdUZXh0XSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5cbnR5cGUgRm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlVCA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlPzogTG9hZGluZ092ZXJsYXlUeXBlcztcbiAgZm9ybUlzTG9hZGluZz86IGJvb2xlYW47XG4gIGFjdGlvbjogJ2xvYWRpbmcnIHwgJ2NyZWF0ZScgfCAndXBkYXRlJztcbiAgbG9hZGluZ1N1ZmZpeD86IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBGb3JtTG9hZGluZ092ZXJsYXlUb2dnbGU6IFJlYWN0LkZDPEZvcm1Mb2FkaW5nT3ZlcmxheVRvZ2dsZVQ+ID0gKHsgbmFtZSwgZm9ybUlzTG9hZGluZyA9IGZhbHNlLCBhY3Rpb24sIHR5cGUgPSAnZnVsbHNjcmVlbicsIGxvYWRpbmdTdWZmaXggfSkgPT4ge1xuICBjb25zdCBpc1Byb2Nlc3NpbmcgPSB1c2VGb3JtUHJvY2Vzc2luZygpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3QgbGFiZWxzID0ge1xuICAgIGNyZWF0ZTogdCgnY3JlYXRpbmcnKSxcbiAgICB1cGRhdGU6IHQoJ3VwZGF0aW5nJyksXG4gICAgbG9hZGluZzogdCgnbG9hZGluZycpLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvYWRpbmdPdmVybGF5VG9nZ2xlXG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgc2hvdz17Zm9ybUlzTG9hZGluZyB8fCBpc1Byb2Nlc3Npbmd9XG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgbG9hZGluZ1RleHQ9e2Ake2xhYmVsc1thY3Rpb25dfSAke2xvYWRpbmdTdWZmaXggPyBnZXRUcmFuc2xhdGlvbihsb2FkaW5nU3VmZml4LCBpMThuKSA6ICcnfWAudHJpbSgpfVxuICAgIC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJnZXRUcmFuc2xhdGlvbiIsInVzZUZvcm1Qcm9jZXNzaW5nIiwidXNlTG9hZGluZ092ZXJsYXkiLCJiYXNlQ2xhc3MiLCJMb2FkaW5nT3ZlcmxheSIsImxvYWRpbmdUZXh0Iiwic2hvdyIsIm92ZXJsYXlUeXBlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJzdHlsZSIsInNwYW4iLCJMb2FkaW5nT3ZlcmxheVRvZ2dsZSIsIm5hbWUiLCJrZXkiLCJ0eXBlIiwidG9nZ2xlTG9hZGluZ092ZXJsYXkiLCJ1c2VFZmZlY3QiLCJpc0xvYWRpbmciLCJ1bmRlZmluZWQiLCJGb3JtTG9hZGluZ092ZXJsYXlUb2dnbGUiLCJmb3JtSXNMb2FkaW5nIiwiYWN0aW9uIiwibG9hZGluZ1N1ZmZpeCIsImlzUHJvY2Vzc2luZyIsImkxOG4iLCJsYWJlbHMiLCJjcmVhdGUiLCJ1cGRhdGUiLCJsb2FkaW5nIiwidHJpbSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0Ms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