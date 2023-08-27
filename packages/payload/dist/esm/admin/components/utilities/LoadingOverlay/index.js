function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import React, { createContext } from "react";
import { useTranslation } from "react-i18next";
import { useDelayedRender } from "../../../hooks/useDelayedRender";
import { reducer, defaultLoadingOverlayState } from "./reducer";
import { LoadingOverlay } from "../../elements/Loading";
var animatedDuration = 250;
var Context = /*#__PURE__*/ createContext({
    toggleLoadingOverlay: undefined,
    isOnScreen: false
});
export var LoadingOverlayProvider = function(param) {
    var children = param.children;
    var t = useTranslation("general").t;
    var fallbackText = t("loading");
    var _React_useReducer = _sliced_to_array(React.useReducer(reducer, defaultLoadingOverlayState), 2), overlays = _React_useReducer[0], dispatchOverlay = _React_useReducer[1];
    var _useDelayedRender = useDelayedRender({
        show: overlays.isLoading,
        delayBeforeShow: 1000,
        inTimeout: animatedDuration,
        outTimeout: animatedDuration,
        minShowTime: 500
    }), isMounted = _useDelayedRender.isMounted, isUnmounting = _useDelayedRender.isUnmounting, triggerDelayedRender = _useDelayedRender.triggerDelayedRender;
    var toggleLoadingOverlay = React.useCallback(function(param) {
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
    return /*#__PURE__*/ React.createElement(Context.Provider, {
        value: {
            toggleLoadingOverlay: toggleLoadingOverlay,
            isOnScreen: isMounted
        }
    }, isMounted && /*#__PURE__*/ React.createElement(LoadingOverlay, {
        show: !isUnmounting,
        loadingText: overlays.loadingText || fallbackText,
        overlayType: overlays.overlayType,
        animationDuration: "".concat(animatedDuration, "ms")
    }), children);
};
export var useLoadingOverlay = function() {
    var contextHook = React.useContext(Context);
    if (contextHook === undefined) {
        throw new Error("useLoadingOverlay must be used within a LoadingOverlayProvider");
    }
    return contextHook;
};
export default Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Mb2FkaW5nT3ZlcmxheS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlRGVsYXllZFJlbmRlciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZURlbGF5ZWRSZW5kZXInO1xuaW1wb3J0IHsgcmVkdWNlciwgZGVmYXVsdExvYWRpbmdPdmVybGF5U3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHsgTG9hZGluZ092ZXJsYXkgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9Mb2FkaW5nJztcbmltcG9ydCB0eXBlIHsgTG9hZGluZ092ZXJsYXlDb250ZXh0LCBUb2dnbGVMb2FkaW5nT3ZlcmxheSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBhbmltYXRlZER1cmF0aW9uID0gMjUwO1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIHRvZ2dsZUxvYWRpbmdPdmVybGF5OiB1bmRlZmluZWQsXG4gIGlzT25TY3JlZW46IGZhbHNlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBMb2FkaW5nT3ZlcmxheVByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IGZhbGxiYWNrVGV4dCA9IHQoJ2xvYWRpbmcnKTtcbiAgY29uc3QgW292ZXJsYXlzLCBkaXNwYXRjaE92ZXJsYXldID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0TG9hZGluZ092ZXJsYXlTdGF0ZSk7XG5cbiAgY29uc3Qge1xuICAgIGlzTW91bnRlZCxcbiAgICBpc1VubW91bnRpbmcsXG4gICAgdHJpZ2dlckRlbGF5ZWRSZW5kZXIsXG4gIH0gPSB1c2VEZWxheWVkUmVuZGVyKHtcbiAgICBzaG93OiBvdmVybGF5cy5pc0xvYWRpbmcsXG4gICAgZGVsYXlCZWZvcmVTaG93OiAxMDAwLFxuICAgIGluVGltZW91dDogYW5pbWF0ZWREdXJhdGlvbixcbiAgICBvdXRUaW1lb3V0OiBhbmltYXRlZER1cmF0aW9uLFxuICAgIG1pblNob3dUaW1lOiA1MDAsXG4gIH0pO1xuXG4gIGNvbnN0IHRvZ2dsZUxvYWRpbmdPdmVybGF5ID0gUmVhY3QudXNlQ2FsbGJhY2s8VG9nZ2xlTG9hZGluZ092ZXJsYXk+KCh7IHR5cGUsIGtleSwgaXNMb2FkaW5nLCBsb2FkaW5nVGV4dCA9IGZhbGxiYWNrVGV4dCB9KSA9PiB7XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgdHJpZ2dlckRlbGF5ZWRSZW5kZXIoKTtcbiAgICAgIGRpc3BhdGNoT3ZlcmxheSh7XG4gICAgICAgIHR5cGU6ICdhZGQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgbG9hZGluZ1RleHQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2hPdmVybGF5KHtcbiAgICAgICAgdHlwZTogJ3JlbW92ZScsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3RyaWdnZXJEZWxheWVkUmVuZGVyLCBmYWxsYmFja1RleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB0b2dnbGVMb2FkaW5nT3ZlcmxheSxcbiAgICAgICAgaXNPblNjcmVlbjogaXNNb3VudGVkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNNb3VudGVkICYmIChcbiAgICAgICAgPExvYWRpbmdPdmVybGF5XG4gICAgICAgICAgc2hvdz17IWlzVW5tb3VudGluZ31cbiAgICAgICAgICBsb2FkaW5nVGV4dD17b3ZlcmxheXMubG9hZGluZ1RleHQgfHwgZmFsbGJhY2tUZXh0fVxuICAgICAgICAgIG92ZXJsYXlUeXBlPXtvdmVybGF5cy5vdmVybGF5VHlwZX1cbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17YCR7YW5pbWF0ZWREdXJhdGlvbn1tc2B9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VMb2FkaW5nT3ZlcmxheSA9ICgpOiBMb2FkaW5nT3ZlcmxheUNvbnRleHQgPT4ge1xuICBjb25zdCBjb250ZXh0SG9vayA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGlmIChjb250ZXh0SG9vayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VMb2FkaW5nT3ZlcmxheSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgTG9hZGluZ092ZXJsYXlQcm92aWRlcicpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRIb29rO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZURlbGF5ZWRSZW5kZXIiLCJyZWR1Y2VyIiwiZGVmYXVsdExvYWRpbmdPdmVybGF5U3RhdGUiLCJMb2FkaW5nT3ZlcmxheSIsImFuaW1hdGVkRHVyYXRpb24iLCJDb250ZXh0IiwidG9nZ2xlTG9hZGluZ092ZXJsYXkiLCJ1bmRlZmluZWQiLCJpc09uU2NyZWVuIiwiTG9hZGluZ092ZXJsYXlQcm92aWRlciIsImNoaWxkcmVuIiwidCIsImZhbGxiYWNrVGV4dCIsInVzZVJlZHVjZXIiLCJvdmVybGF5cyIsImRpc3BhdGNoT3ZlcmxheSIsInNob3ciLCJpc0xvYWRpbmciLCJkZWxheUJlZm9yZVNob3ciLCJpblRpbWVvdXQiLCJvdXRUaW1lb3V0IiwibWluU2hvd1RpbWUiLCJpc01vdW50ZWQiLCJpc1VubW91bnRpbmciLCJ0cmlnZ2VyRGVsYXllZFJlbmRlciIsInVzZUNhbGxiYWNrIiwidHlwZSIsImtleSIsImxvYWRpbmdUZXh0IiwicGF5bG9hZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJvdmVybGF5VHlwZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwidXNlTG9hZGluZ092ZXJsYXkiLCJjb250ZXh0SG9vayIsInVzZUNvbnRleHQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLGFBQWEsUUFBUSxRQUFRO0FBQzdDLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsZ0JBQWdCLFFBQVEsa0NBQWtDO0FBQ25FLFNBQVNDLE9BQU8sRUFBRUMsMEJBQTBCLFFBQVEsWUFBWTtBQUNoRSxTQUFTQyxjQUFjLFFBQVEseUJBQXlCO0FBR3hELElBQU1DLG1CQUFtQjtBQUV6QixJQUFNQyx3QkFBVVAsY0FBYztJQUM1QlEsc0JBQXNCQztJQUN0QkMsWUFBWTtBQUNkO0FBRUEsT0FBTyxJQUFNQyx5QkFBbUU7UUFBR0MsaUJBQUFBO0lBQ2pGLElBQU0sQUFBRUMsSUFBTVosZUFBZSxXQUFyQlk7SUFDUixJQUFNQyxlQUFlRCxFQUFFO0lBQ3ZCLElBQW9DZCxxQ0FBQUEsTUFBTWdCLFVBQVUsQ0FBQ1osU0FBU0MsaUNBQXZEWSxXQUE2QmpCLHNCQUFuQmtCLGtCQUFtQmxCO0lBRXBDLElBSUlHLG9CQUFBQSxpQkFBaUI7UUFDbkJnQixNQUFNRixTQUFTRyxTQUFTO1FBQ3hCQyxpQkFBaUI7UUFDakJDLFdBQVdmO1FBQ1hnQixZQUFZaEI7UUFDWmlCLGFBQWE7SUFDZixJQVRFQyxZQUdFdEIsa0JBSEZzQixXQUNBQyxlQUVFdkIsa0JBRkZ1QixjQUNBQyx1QkFDRXhCLGtCQURGd0I7SUFTRixJQUFNbEIsdUJBQXVCVCxNQUFNNEIsV0FBVyxDQUF1QjtZQUFHQyxhQUFBQSxNQUFNQyxZQUFBQSxLQUFLVixrQkFBQUEsc0NBQVdXLGFBQUFBLDhDQUFjaEI7UUFDMUcsSUFBSUssV0FBVztZQUNiTztZQUNBVCxnQkFBZ0I7Z0JBQ2RXLE1BQU07Z0JBQ05HLFNBQVM7b0JBQ1BILE1BQUFBO29CQUNBQyxLQUFBQTtvQkFDQUMsYUFBQUE7Z0JBQ0Y7WUFDRjtRQUNGLE9BQU87WUFDTGIsZ0JBQWdCO2dCQUNkVyxNQUFNO2dCQUNORyxTQUFTO29CQUNQRixLQUFBQTtvQkFDQUQsTUFBQUE7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDRjtRQUFzQlo7S0FBYTtJQUV2QyxxQkFDRSxvQkFBQ1AsUUFBUXlCLFFBQVE7UUFDZkMsT0FBTztZQUNMekIsc0JBQUFBO1lBQ0FFLFlBQVljO1FBQ2Q7T0FFQ0EsMkJBQ0Msb0JBQUNuQjtRQUNDYSxNQUFNLENBQUNPO1FBQ1BLLGFBQWFkLFNBQVNjLFdBQVcsSUFBSWhCO1FBQ3JDb0IsYUFBYWxCLFNBQVNrQixXQUFXO1FBQ2pDQyxtQkFBbUIsQUFBQyxHQUFtQixPQUFqQjdCLGtCQUFpQjtRQUcxQ007QUFHUCxFQUFFO0FBRUYsT0FBTyxJQUFNd0Isb0JBQW9CO0lBQy9CLElBQU1DLGNBQWN0QyxNQUFNdUMsVUFBVSxDQUFDL0I7SUFDckMsSUFBSThCLGdCQUFnQjVCLFdBQVc7UUFDN0IsTUFBTSxJQUFJOEIsTUFBTTtJQUNsQjtJQUVBLE9BQU9GO0FBQ1QsRUFBRTtBQUVGLGVBQWU5QixRQUFRIn0=