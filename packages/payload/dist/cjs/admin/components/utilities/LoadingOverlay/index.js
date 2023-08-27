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
    LoadingOverlayProvider: function() {
        return LoadingOverlayProvider;
    },
    useLoadingOverlay: function() {
        return useLoadingOverlay;
    },
    default: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _useDelayedRender = require("../../../hooks/useDelayedRender");
var _reducer = require("./reducer");
var _Loading = require("../../elements/Loading");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
var animatedDuration = 250;
var Context = /*#__PURE__*/ (0, _react.createContext)({
    toggleLoadingOverlay: undefined,
    isOnScreen: false
});
var LoadingOverlayProvider = function(param) {
    var children = param.children;
    var t = (0, _reacti18next.useTranslation)("general").t;
    var fallbackText = t("loading");
    var _React_useReducer = _sliced_to_array(_react.default.useReducer(_reducer.reducer, _reducer.defaultLoadingOverlayState), 2), overlays = _React_useReducer[0], dispatchOverlay = _React_useReducer[1];
    var _useDelayedRender1 = (0, _useDelayedRender.useDelayedRender)({
        show: overlays.isLoading,
        delayBeforeShow: 1000,
        inTimeout: animatedDuration,
        outTimeout: animatedDuration,
        minShowTime: 500
    }), isMounted = _useDelayedRender1.isMounted, isUnmounting = _useDelayedRender1.isUnmounting, triggerDelayedRender = _useDelayedRender1.triggerDelayedRender;
    var toggleLoadingOverlay = _react.default.useCallback(function(param) {
        var type = param.type, key = param.key, isLoading = param.isLoading, _param_loadingText = param.loadingText, loadingText = _param_loadingText === void 0 ? fallbackText : _param_loadingText;
        if (isLoading) {
            triggerDelayedRender();
            dispatchOverlay({
                type: "add",
                payload: {
                    type: type,
                    key: key,
                    loadingText: loadingText
                }
            });
        } else {
            dispatchOverlay({
                type: "remove",
                payload: {
                    key: key,
                    type: type
                }
            });
        }
    }, [
        triggerDelayedRender,
        fallbackText
    ]);
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            toggleLoadingOverlay: toggleLoadingOverlay,
            isOnScreen: isMounted
        }
    }, isMounted && /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlay, {
        show: !isUnmounting,
        loadingText: overlays.loadingText || fallbackText,
        overlayType: overlays.overlayType,
        animationDuration: "".concat(animatedDuration, "ms")
    }), children);
};
var useLoadingOverlay = function() {
    var contextHook = _react.default.useContext(Context);
    if (contextHook === undefined) {
        throw new Error("useLoadingOverlay must be used within a LoadingOverlayProvider");
    }
    return contextHook;
};
var _default = Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Mb2FkaW5nT3ZlcmxheS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlRGVsYXllZFJlbmRlciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZURlbGF5ZWRSZW5kZXInO1xuaW1wb3J0IHsgcmVkdWNlciwgZGVmYXVsdExvYWRpbmdPdmVybGF5U3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHsgTG9hZGluZ092ZXJsYXkgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9Mb2FkaW5nJztcbmltcG9ydCB0eXBlIHsgTG9hZGluZ092ZXJsYXlDb250ZXh0LCBUb2dnbGVMb2FkaW5nT3ZlcmxheSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBhbmltYXRlZER1cmF0aW9uID0gMjUwO1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIHRvZ2dsZUxvYWRpbmdPdmVybGF5OiB1bmRlZmluZWQsXG4gIGlzT25TY3JlZW46IGZhbHNlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBMb2FkaW5nT3ZlcmxheVByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IGZhbGxiYWNrVGV4dCA9IHQoJ2xvYWRpbmcnKTtcbiAgY29uc3QgW292ZXJsYXlzLCBkaXNwYXRjaE92ZXJsYXldID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0TG9hZGluZ092ZXJsYXlTdGF0ZSk7XG5cbiAgY29uc3Qge1xuICAgIGlzTW91bnRlZCxcbiAgICBpc1VubW91bnRpbmcsXG4gICAgdHJpZ2dlckRlbGF5ZWRSZW5kZXIsXG4gIH0gPSB1c2VEZWxheWVkUmVuZGVyKHtcbiAgICBzaG93OiBvdmVybGF5cy5pc0xvYWRpbmcsXG4gICAgZGVsYXlCZWZvcmVTaG93OiAxMDAwLFxuICAgIGluVGltZW91dDogYW5pbWF0ZWREdXJhdGlvbixcbiAgICBvdXRUaW1lb3V0OiBhbmltYXRlZER1cmF0aW9uLFxuICAgIG1pblNob3dUaW1lOiA1MDAsXG4gIH0pO1xuXG4gIGNvbnN0IHRvZ2dsZUxvYWRpbmdPdmVybGF5ID0gUmVhY3QudXNlQ2FsbGJhY2s8VG9nZ2xlTG9hZGluZ092ZXJsYXk+KCh7IHR5cGUsIGtleSwgaXNMb2FkaW5nLCBsb2FkaW5nVGV4dCA9IGZhbGxiYWNrVGV4dCB9KSA9PiB7XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgdHJpZ2dlckRlbGF5ZWRSZW5kZXIoKTtcbiAgICAgIGRpc3BhdGNoT3ZlcmxheSh7XG4gICAgICAgIHR5cGU6ICdhZGQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgbG9hZGluZ1RleHQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2hPdmVybGF5KHtcbiAgICAgICAgdHlwZTogJ3JlbW92ZScsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3RyaWdnZXJEZWxheWVkUmVuZGVyLCBmYWxsYmFja1RleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB0b2dnbGVMb2FkaW5nT3ZlcmxheSxcbiAgICAgICAgaXNPblNjcmVlbjogaXNNb3VudGVkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNNb3VudGVkICYmIChcbiAgICAgICAgPExvYWRpbmdPdmVybGF5XG4gICAgICAgICAgc2hvdz17IWlzVW5tb3VudGluZ31cbiAgICAgICAgICBsb2FkaW5nVGV4dD17b3ZlcmxheXMubG9hZGluZ1RleHQgfHwgZmFsbGJhY2tUZXh0fVxuICAgICAgICAgIG92ZXJsYXlUeXBlPXtvdmVybGF5cy5vdmVybGF5VHlwZX1cbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17YCR7YW5pbWF0ZWREdXJhdGlvbn1tc2B9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VMb2FkaW5nT3ZlcmxheSA9ICgpOiBMb2FkaW5nT3ZlcmxheUNvbnRleHQgPT4ge1xuICBjb25zdCBjb250ZXh0SG9vayA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGlmIChjb250ZXh0SG9vayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VMb2FkaW5nT3ZlcmxheSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgTG9hZGluZ092ZXJsYXlQcm92aWRlcicpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRIb29rO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJMb2FkaW5nT3ZlcmxheVByb3ZpZGVyIiwidXNlTG9hZGluZ092ZXJsYXkiLCJhbmltYXRlZER1cmF0aW9uIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ0b2dnbGVMb2FkaW5nT3ZlcmxheSIsInVuZGVmaW5lZCIsImlzT25TY3JlZW4iLCJjaGlsZHJlbiIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImZhbGxiYWNrVGV4dCIsIlJlYWN0IiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJkZWZhdWx0TG9hZGluZ092ZXJsYXlTdGF0ZSIsIm92ZXJsYXlzIiwiZGlzcGF0Y2hPdmVybGF5IiwidXNlRGVsYXllZFJlbmRlciIsInNob3ciLCJpc0xvYWRpbmciLCJkZWxheUJlZm9yZVNob3ciLCJpblRpbWVvdXQiLCJvdXRUaW1lb3V0IiwibWluU2hvd1RpbWUiLCJpc01vdW50ZWQiLCJpc1VubW91bnRpbmciLCJ0cmlnZ2VyRGVsYXllZFJlbmRlciIsInVzZUNhbGxiYWNrIiwidHlwZSIsImtleSIsImxvYWRpbmdUZXh0IiwicGF5bG9hZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJMb2FkaW5nT3ZlcmxheSIsIm92ZXJsYXlUeXBlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJjb250ZXh0SG9vayIsInVzZUNvbnRleHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFjYUEsc0JBQXNCO2VBQXRCQTs7SUEyREFDLGlCQUFpQjtlQUFqQkE7O0lBU2IsT0FBdUI7ZUFBdkI7Ozs2REFsRnFDOzRCQUNOO2dDQUNFO3VCQUNtQjt1QkFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRy9CLElBQU1DLG1CQUFtQjtBQUV6QixJQUFNQyx3QkFBVUMsSUFBQUEsb0JBQWEsRUFBQztJQUM1QkMsc0JBQXNCQztJQUN0QkMsWUFBWTtBQUNkO0FBRU8sSUFBTVAseUJBQW1FO1FBQUdRLGlCQUFBQTtJQUNqRixJQUFNLEFBQUVDLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsV0FBckJEO0lBQ1IsSUFBTUUsZUFBZUYsRUFBRTtJQUN2QixJQUFvQ0cscUNBQUFBLGNBQUssQ0FBQ0MsVUFBVSxDQUFDQyxnQkFBTyxFQUFFQyxtQ0FBMEIsT0FBakZDLFdBQTZCSixzQkFBbkJLLGtCQUFtQkw7SUFFcEMsSUFJSU0scUJBQUFBLElBQUFBLGtDQUFnQixFQUFDO1FBQ25CQyxNQUFNSCxTQUFTSSxTQUFTO1FBQ3hCQyxpQkFBaUI7UUFDakJDLFdBQVdwQjtRQUNYcUIsWUFBWXJCO1FBQ1pzQixhQUFhO0lBQ2YsSUFURUMsWUFHRVAsbUJBSEZPLFdBQ0FDLGVBRUVSLG1CQUZGUSxjQUNBQyx1QkFDRVQsbUJBREZTO0lBU0YsSUFBTXRCLHVCQUF1Qk8sY0FBSyxDQUFDZ0IsV0FBVyxDQUF1QjtZQUFHQyxhQUFBQSxNQUFNQyxZQUFBQSxLQUFLVixrQkFBQUEsc0NBQVdXLGFBQUFBLDhDQUFjcEI7UUFDMUcsSUFBSVMsV0FBVztZQUNiTztZQUNBVixnQkFBZ0I7Z0JBQ2RZLE1BQU07Z0JBQ05HLFNBQVM7b0JBQ1BILE1BQUFBO29CQUNBQyxLQUFBQTtvQkFDQUMsYUFBQUE7Z0JBQ0Y7WUFDRjtRQUNGLE9BQU87WUFDTGQsZ0JBQWdCO2dCQUNkWSxNQUFNO2dCQUNORyxTQUFTO29CQUNQRixLQUFBQTtvQkFDQUQsTUFBQUE7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDRjtRQUFzQmhCO0tBQWE7SUFFdkMscUJBQ0UsNkJBQUNSLFFBQVE4QixRQUFRO1FBQ2ZDLE9BQU87WUFDTDdCLHNCQUFBQTtZQUNBRSxZQUFZa0I7UUFDZDtPQUVDQSwyQkFDQyw2QkFBQ1UsdUJBQWM7UUFDYmhCLE1BQU0sQ0FBQ087UUFDUEssYUFBYWYsU0FBU2UsV0FBVyxJQUFJcEI7UUFDckN5QixhQUFhcEIsU0FBU29CLFdBQVc7UUFDakNDLG1CQUFtQixBQUFDLEdBQW1CLE9BQWpCbkMsa0JBQWlCO1FBRzFDTTtBQUdQO0FBRU8sSUFBTVAsb0JBQW9CO0lBQy9CLElBQU1xQyxjQUFjMUIsY0FBSyxDQUFDMkIsVUFBVSxDQUFDcEM7SUFDckMsSUFBSW1DLGdCQUFnQmhDLFdBQVc7UUFDN0IsTUFBTSxJQUFJa0MsTUFBTTtJQUNsQjtJQUVBLE9BQU9GO0FBQ1Q7SUFFQSxXQUFlbkMifQ==