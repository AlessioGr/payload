"use client";
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
import React from "react";
import { WatchCondition } from "./WatchCondition";
var withCondition = function(Field) {
    var CheckForCondition = function(props) {
        var tmp = props.admin, condition = (tmp === void 0 ? {} : tmp).condition;
        if (condition) {
            return /*#__PURE__*/ React.createElement(WithCondition, props);
        }
        return /*#__PURE__*/ React.createElement(Field, props);
    };
    var WithCondition = function(props) {
        var name = props.name, path = props.path, tmp = props.admin, condition = (tmp === void 0 ? {} : tmp).condition;
        var _React_useState = _sliced_to_array(React.useState(false), 2), showField = _React_useState[0], setShowField = _React_useState[1];
        if (showField) {
            return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(WatchCondition, {
                path: path,
                name: name,
                condition: condition,
                setShowField: setShowField
            }), /*#__PURE__*/ React.createElement(Field, props));
        }
        return /*#__PURE__*/ React.createElement(WatchCondition, {
            path: path,
            name: name,
            condition: condition,
            setShowField: setShowField
        });
    };
    return CheckForCondition;
};
export default withCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL3dpdGhDb25kaXRpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkQmFzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgV2F0Y2hDb25kaXRpb24gfSBmcm9tICcuL1dhdGNoQ29uZGl0aW9uJztcblxuY29uc3Qgd2l0aENvbmRpdGlvbiA9IDxQIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KEZpZWxkOiBSZWFjdC5Db21wb25lbnRUeXBlPFA+KTogUmVhY3QuRkM8UD4gPT4ge1xuICBjb25zdCBDaGVja0ZvckNvbmRpdGlvbjogUmVhY3QuRkM8UD4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhZG1pbjoge1xuICAgICAgICBjb25kaXRpb24sXG4gICAgICB9ID0ge30sXG4gICAgfSA9IHByb3BzIGFzIFBhcnRpYWw8RmllbGRCYXNlPjtcblxuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybiA8V2l0aENvbmRpdGlvbiB7Li4ucHJvcHN9IC8+O1xuICAgIH1cblxuICAgIHJldHVybiA8RmllbGQgey4uLnByb3BzfSAvPjtcbiAgfTtcblxuICBjb25zdCBXaXRoQ29uZGl0aW9uOiBSZWFjdC5GQzxQPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBwYXRoLFxuICAgICAgYWRtaW46IHtcbiAgICAgICAgY29uZGl0aW9uLFxuICAgICAgfSA9IHt9LFxuICAgIH0gPSBwcm9wcyBhcyBQYXJ0aWFsPEZpZWxkQmFzZT4gJiB7XG4gICAgICBwYXRoPzogc3RyaW5nXG4gICAgfTtcblxuICAgIGNvbnN0IFtzaG93RmllbGQsIHNldFNob3dGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBpZiAoc2hvd0ZpZWxkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPFdhdGNoQ29uZGl0aW9uXG4gICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIGNvbmRpdGlvbj17Y29uZGl0aW9ufVxuICAgICAgICAgICAgc2V0U2hvd0ZpZWxkPXtzZXRTaG93RmllbGR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RmllbGQgey4uLnByb3BzfSAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdhdGNoQ29uZGl0aW9uXG4gICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIGNvbmRpdGlvbj17Y29uZGl0aW9ufVxuICAgICAgICBzZXRTaG93RmllbGQ9e3NldFNob3dGaWVsZH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQ2hlY2tGb3JDb25kaXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiV2F0Y2hDb25kaXRpb24iLCJ3aXRoQ29uZGl0aW9uIiwiRmllbGQiLCJDaGVja0ZvckNvbmRpdGlvbiIsInByb3BzIiwiYWRtaW4iLCJjb25kaXRpb24iLCJXaXRoQ29uZGl0aW9uIiwibmFtZSIsInBhdGgiLCJ1c2VTdGF0ZSIsInNob3dGaWVsZCIsInNldFNob3dGaWVsZCIsIkZyYWdtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPQSxXQUFXLFFBQVE7QUFFMUIsU0FBU0MsY0FBYyxRQUFRLG1CQUFtQjtBQUVsRCxJQUFNQyxnQkFBZ0IsU0FBb0NDO0lBQ3hELElBQU1DLG9CQUFpQyxTQUFDQztRQUN0QyxJQUNTLE1BR0xBLE1BSEZDLE9BQU8sQUFDTEMsYUFESyxpQkFFSCxDQUFDLElBRkUsS0FDTEE7UUFJSixJQUFJQSxXQUFXO1lBQ2IscUJBQU8sb0JBQUNDLGVBQWtCSDtRQUM1QjtRQUVBLHFCQUFPLG9CQUFDRixPQUFVRTtJQUNwQjtJQUVBLElBQU1HLGdCQUE2QixTQUFDSDtRQUNsQyxJQUNFSSxPQUtFSixNQUxGSSxNQUNBQyxPQUlFTCxNQUpGSyxNQUNPLE1BR0xMLE1BSEZDLE9BQU8sQUFDTEMsYUFESyxpQkFFSCxDQUFDLElBRkUsS0FDTEE7UUFNSixJQUFrQ1AsbUNBQUFBLE1BQU1XLFFBQVEsQ0FBQyxZQUExQ0MsWUFBMkJaLG9CQUFoQmEsZUFBZ0JiO1FBRWxDLElBQUlZLFdBQVc7WUFDYixxQkFDRSxvQkFBQ1osTUFBTWMsUUFBUSxzQkFDYixvQkFBQ2I7Z0JBQ0NTLE1BQU1BO2dCQUNORCxNQUFNQTtnQkFDTkYsV0FBV0E7Z0JBQ1hNLGNBQWNBOzhCQUVoQixvQkFBQ1YsT0FBVUU7UUFHakI7UUFFQSxxQkFDRSxvQkFBQ0o7WUFDQ1MsTUFBTUE7WUFDTkQsTUFBTUE7WUFDTkYsV0FBV0E7WUFDWE0sY0FBY0E7O0lBR3BCO0lBRUEsT0FBT1Q7QUFDVDtBQUVBLGVBQWVGLGNBQWMifQ==