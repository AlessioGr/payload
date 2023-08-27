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
    ShimmerEffect: function() {
        return ShimmerEffect;
    },
    StaggeredShimmers: function() {
        return StaggeredShimmers;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _useDelay = require("../../../hooks/useDelay");
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var ShimmerEffect = function(param) {
    var _param_animationDelay = param.animationDelay, animationDelay = _param_animationDelay === void 0 ? "0ms" : _param_animationDelay, _param_height = param.height, height = _param_height === void 0 ? "60px" : _param_height, _param_width = param.width, width = _param_width === void 0 ? "100%" : _param_width;
    return /*#__PURE__*/ _react.createElement("div", {
        className: "shimmer-effect",
        style: {
            height: typeof height === "number" ? "".concat(height, "px") : height,
            width: typeof width === "number" ? "".concat(width, "px") : width
        }
    }, /*#__PURE__*/ _react.createElement("div", {
        className: "shimmer-effect__shine",
        style: {
            animationDelay: animationDelay
        }
    }));
};
var StaggeredShimmers = function(param) {
    var count = param.count, className = param.className, shimmerItemClassName = param.shimmerItemClassName, width = param.width, height = param.height, _param_shimmerDelay = param.shimmerDelay, shimmerDelay = _param_shimmerDelay === void 0 ? 25 : _param_shimmerDelay, _param_renderDelay = param.renderDelay, renderDelay = _param_renderDelay === void 0 ? 500 : _param_renderDelay;
    var shimmerDelayToPass = typeof shimmerDelay === "number" ? "".concat(shimmerDelay, "ms") : shimmerDelay;
    var _useDelay1 = _sliced_to_array((0, _useDelay.useDelay)(renderDelay, true), 1), hasDelayed = _useDelay1[0];
    if (!hasDelayed) return null;
    return /*#__PURE__*/ _react.createElement("div", {
        className: className
    }, _to_consumable_array(Array(count)).map(function(_, i) {
        return /*#__PURE__*/ _react.createElement("div", {
            key: i,
            className: shimmerItemClassName
        }, /*#__PURE__*/ _react.createElement(ShimmerEffect, {
            animationDelay: "calc(".concat(i, " * ").concat(shimmerDelayToPass, ")"),
            height: height,
            width: width
        }));
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NoaW1tZXJFZmZlY3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURlbGF5IH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlRGVsYXknO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbnR5cGUgU2hpbW1lckVmZmVjdFQgPSB7XG4gIGFuaW1hdGlvbkRlbGF5Pzogc3RyaW5nO1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IFNoaW1tZXJFZmZlY3Q6IFJlYWN0LkZDPFNoaW1tZXJFZmZlY3RUPiA9ICh7IGFuaW1hdGlvbkRlbGF5ID0gJzBtcycsIGhlaWdodCA9ICc2MHB4Jywgd2lkdGggPSAnMTAwJScgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInNoaW1tZXItZWZmZWN0XCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGhlaWdodDogdHlwZW9mIGhlaWdodCA9PT0gJ251bWJlcicgPyBgJHtoZWlnaHR9cHhgIDogaGVpZ2h0LFxuICAgICAgICB3aWR0aDogdHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJyA/IGAke3dpZHRofXB4YCA6IHdpZHRoLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNoaW1tZXItZWZmZWN0X19zaGluZVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHlwZSBTdGFnZ2VyZWRTaGltbWVyc1QgPSB7XG4gIGNvdW50OiBudW1iZXI7XG4gIHNoaW1tZXJEZWxheT86IG51bWJlciB8IHN0cmluZztcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nO1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBzaGltbWVySXRlbUNsYXNzTmFtZT86IHN0cmluZztcbiAgcmVuZGVyRGVsYXk/OiBudW1iZXI7XG59XG5leHBvcnQgY29uc3QgU3RhZ2dlcmVkU2hpbW1lcnM6IFJlYWN0LkZDPFN0YWdnZXJlZFNoaW1tZXJzVD4gPSAoeyBjb3VudCwgY2xhc3NOYW1lLCBzaGltbWVySXRlbUNsYXNzTmFtZSwgd2lkdGgsIGhlaWdodCwgc2hpbW1lckRlbGF5ID0gMjUsIHJlbmRlckRlbGF5ID0gNTAwIH0pID0+IHtcbiAgY29uc3Qgc2hpbW1lckRlbGF5VG9QYXNzID0gdHlwZW9mIHNoaW1tZXJEZWxheSA9PT0gJ251bWJlcicgPyBgJHtzaGltbWVyRGVsYXl9bXNgIDogc2hpbW1lckRlbGF5O1xuICBjb25zdCBbaGFzRGVsYXllZF0gPSB1c2VEZWxheShyZW5kZXJEZWxheSwgdHJ1ZSk7XG5cbiAgaWYgKCFoYXNEZWxheWVkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgID5cbiAgICAgIHtbLi4uQXJyYXkoY291bnQpXS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICBjbGFzc05hbWU9e3NoaW1tZXJJdGVtQ2xhc3NOYW1lfVxuICAgICAgICA+XG4gICAgICAgICAgPFNoaW1tZXJFZmZlY3RcbiAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5PXtgY2FsYygke2l9ICogJHtzaGltbWVyRGVsYXlUb1Bhc3N9KWB9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJTaGltbWVyRWZmZWN0IiwiU3RhZ2dlcmVkU2hpbW1lcnMiLCJhbmltYXRpb25EZWxheSIsImhlaWdodCIsIndpZHRoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb3VudCIsInNoaW1tZXJJdGVtQ2xhc3NOYW1lIiwic2hpbW1lckRlbGF5IiwicmVuZGVyRGVsYXkiLCJzaGltbWVyRGVsYXlUb1Bhc3MiLCJ1c2VEZWxheSIsImhhc0RlbGF5ZWQiLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVVhQSxhQUFhO2VBQWJBOztJQTRCQUMsaUJBQWlCO2VBQWpCQTs7OzZEQXRDVTt3QkFDRTtRQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNRCxnQkFBMEM7c0NBQUdFLGdCQUFBQSxvREFBaUIscURBQU9DLFFBQUFBLG9DQUFTLDZDQUFRQyxPQUFBQSxrQ0FBUTtJQUN6RyxxQkFDRSxxQkFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxPQUFPO1lBQ0xKLFFBQVEsT0FBT0EsV0FBVyxXQUFXLEFBQUMsR0FBUyxPQUFQQSxRQUFPLFFBQU1BO1lBQ3JEQyxPQUFPLE9BQU9BLFVBQVUsV0FBVyxBQUFDLEdBQVEsT0FBTkEsT0FBTSxRQUFNQTtRQUNwRDtxQkFFQSxxQkFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxPQUFPO1lBQ0xMLGdCQUFBQTtRQUNGOztBQUlSO0FBV08sSUFBTUQsb0JBQWtEO1FBQUdPLGNBQUFBLE9BQU9GLGtCQUFBQSxXQUFXRyw2QkFBQUEsc0JBQXNCTCxjQUFBQSxPQUFPRCxlQUFBQSxvQ0FBUU8sY0FBQUEsZ0RBQWUscURBQUlDLGFBQUFBLDhDQUFjO0lBQ3hKLElBQU1DLHFCQUFxQixPQUFPRixpQkFBaUIsV0FBVyxBQUFDLEdBQWUsT0FBYkEsY0FBYSxRQUFNQTtJQUNwRixJQUFxQkcsOEJBQUFBLElBQUFBLGtCQUFRLEVBQUNGLGFBQWEsV0FBcENHLGFBQWNEO0lBRXJCLElBQUksQ0FBQ0MsWUFBWSxPQUFPO0lBRXhCLHFCQUNFLHFCQUFDVDtRQUNDQyxXQUFXQTtPQUVWLEFBQUMscUJBQUdTLE1BQU1QLFFBQVFRLEdBQUcsQ0FBQyxTQUFDQyxHQUFHQzs2QkFDekIscUJBQUNiO1lBQ0NjLEtBQUtEO1lBQ0xaLFdBQVdHO3lCQUVYLHFCQUFDVDtZQUNDRSxnQkFBZ0IsQUFBQyxRQUFjVSxPQUFQTSxHQUFFLE9BQXdCLE9BQW5CTixvQkFBbUI7WUFDbERULFFBQVFBO1lBQ1JDLE9BQU9BOzs7QUFNbkIifQ==