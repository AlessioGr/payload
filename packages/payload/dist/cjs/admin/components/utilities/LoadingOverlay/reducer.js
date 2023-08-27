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
    defaultLoadingOverlayState: function() {
        return defaultLoadingOverlayState;
    },
    reducer: function() {
        return reducer;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var defaultLoadingOverlayState = {
    isLoading: false,
    overlayType: null,
    loaders: [],
    loadingText: ""
};
var reducer = function(state, action) {
    var _loadersCopy, _nextLoader, _state, _nextLoader1, _state1;
    var loadersCopy = _to_consumable_array(state.loaders);
    var _action_payload = action.payload, _action_payload_type = _action_payload.type, type = _action_payload_type === void 0 ? "fullscreen" : _action_payload_type, _action_payload_key = _action_payload.key, key = _action_payload_key === void 0 ? "user" : _action_payload_key, loadingText = _action_payload.loadingText;
    if (action.type === "add") {
        loadersCopy.push({
            type: type,
            key: key,
            loadingText: loadingText
        });
    } else if (action.type === "remove") {
        var index = loadersCopy.findIndex(function(item) {
            return item.key === key && item.type === type;
        });
        loadersCopy.splice(index, 1);
    }
    var nextLoader = ((_loadersCopy = loadersCopy) === null || _loadersCopy === void 0 ? void 0 : _loadersCopy.length) > 0 ? loadersCopy[loadersCopy.length - 1] : null;
    return {
        isLoading: Boolean(nextLoader),
        overlayType: ((_nextLoader = nextLoader) === null || _nextLoader === void 0 ? void 0 : _nextLoader.type) || ((_state = state) === null || _state === void 0 ? void 0 : _state.overlayType),
        loaders: loadersCopy,
        loadingText: ((_nextLoader1 = nextLoader) === null || _nextLoader1 === void 0 ? void 0 : _nextLoader1.loadingText) || ((_state1 = state) === null || _state1 === void 0 ? void 0 : _state1.loadingText)
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Mb2FkaW5nT3ZlcmxheS9yZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgU3RhdGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2FkaW5nT3ZlcmxheVN0YXRlID0ge1xuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBvdmVybGF5VHlwZTogbnVsbCxcbiAgbG9hZGVyczogW10sXG4gIGxvYWRpbmdUZXh0OiAnJyxcbn07XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlOiBTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pOiBTdGF0ZSA9PiB7XG4gIGNvbnN0IGxvYWRlcnNDb3B5ID0gWy4uLnN0YXRlLmxvYWRlcnNdO1xuICBjb25zdCB7IHR5cGUgPSAnZnVsbHNjcmVlbicsIGtleSA9ICd1c2VyJywgbG9hZGluZ1RleHQgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ2FkZCcpIHtcbiAgICBsb2FkZXJzQ29weS5wdXNoKHsgdHlwZSwga2V5LCBsb2FkaW5nVGV4dCB9KTtcbiAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ3JlbW92ZScpIHtcbiAgICBjb25zdCBpbmRleCA9IGxvYWRlcnNDb3B5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSAmJiBpdGVtLnR5cGUgPT09IHR5cGUpO1xuICAgIGxvYWRlcnNDb3B5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBjb25zdCBuZXh0TG9hZGVyID0gbG9hZGVyc0NvcHk/Lmxlbmd0aCA+IDAgPyBsb2FkZXJzQ29weVtsb2FkZXJzQ29weS5sZW5ndGggLSAxXSA6IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmc6IEJvb2xlYW4obmV4dExvYWRlciksXG4gICAgb3ZlcmxheVR5cGU6IG5leHRMb2FkZXI/LnR5cGUgfHwgc3RhdGU/Lm92ZXJsYXlUeXBlLFxuICAgIGxvYWRlcnM6IGxvYWRlcnNDb3B5LFxuICAgIGxvYWRpbmdUZXh0OiBuZXh0TG9hZGVyPy5sb2FkaW5nVGV4dCB8fCBzdGF0ZT8ubG9hZGluZ1RleHQsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImRlZmF1bHRMb2FkaW5nT3ZlcmxheVN0YXRlIiwicmVkdWNlciIsImlzTG9hZGluZyIsIm92ZXJsYXlUeXBlIiwibG9hZGVycyIsImxvYWRpbmdUZXh0Iiwic3RhdGUiLCJhY3Rpb24iLCJsb2FkZXJzQ29weSIsIm5leHRMb2FkZXIiLCJwYXlsb2FkIiwidHlwZSIsImtleSIsInB1c2giLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJsZW5ndGgiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUVhQSwwQkFBMEI7ZUFBMUJBOztJQU9BQyxPQUFPO2VBQVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUE4sSUFBTUQsNkJBQTZCO0lBQ3hDRSxXQUFXO0lBQ1hDLGFBQWE7SUFDYkMsU0FBUyxFQUFFO0lBQ1hDLGFBQWE7QUFDZjtBQUVPLElBQU1KLFVBQVUsU0FBQ0ssT0FBY0M7UUFXakJDLGNBSUpDLGFBQW9CSCxRQUVwQkcsY0FBMkJIO0lBaEIxQyxJQUFNRSxjQUFlLHFCQUFHRixNQUFNRixPQUFPO0lBQ3JDLElBQTJERyxrQkFBQUEsT0FBT0csT0FBTyx5QkFBZEgsZ0JBQW5ESSxNQUFBQSx5Q0FBTywyREFBNENKLGdCQUE5QkssS0FBQUEsdUNBQU0sOEJBQVFQLGNBQWdCRSxnQkFBaEJGO0lBRTNDLElBQUlFLE9BQU9JLElBQUksS0FBSyxPQUFPO1FBQ3pCSCxZQUFZSyxJQUFJLENBQUM7WUFBRUYsTUFBQUE7WUFBTUMsS0FBQUE7WUFBS1AsYUFBQUE7UUFBWTtJQUM1QyxPQUFPLElBQUlFLE9BQU9JLElBQUksS0FBSyxVQUFVO1FBQ25DLElBQU1HLFFBQVFOLFlBQVlPLFNBQVMsQ0FBQyxTQUFDQzttQkFBU0EsS0FBS0osR0FBRyxLQUFLQSxPQUFPSSxLQUFLTCxJQUFJLEtBQUtBOztRQUNoRkgsWUFBWVMsTUFBTSxDQUFDSCxPQUFPO0lBQzVCO0lBRUEsSUFBTUwsYUFBYUQsRUFBQUEsZUFBQUEseUJBQUFBLG1DQUFBQSxhQUFhVSxNQUFNLElBQUcsSUFBSVYsV0FBVyxDQUFDQSxZQUFZVSxNQUFNLEdBQUcsRUFBRSxHQUFHO0lBRW5GLE9BQU87UUFDTGhCLFdBQVdpQixRQUFRVjtRQUNuQk4sYUFBYU0sRUFBQUEsY0FBQUEsd0JBQUFBLGtDQUFBQSxZQUFZRSxJQUFJLE9BQUlMLFNBQUFBLG1CQUFBQSw2QkFBQUEsT0FBT0gsV0FBVztRQUNuREMsU0FBU0k7UUFDVEgsYUFBYUksRUFBQUEsZUFBQUEsd0JBQUFBLG1DQUFBQSxhQUFZSixXQUFXLE9BQUlDLFVBQUFBLG1CQUFBQSw4QkFBQUEsUUFBT0QsV0FBVztJQUM1RDtBQUNGIn0=