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
import React from "react";
import Editor from "@monaco-editor/react";
import { useTheme } from "../../utilities/Theme";
import { ShimmerEffect } from "../ShimmerEffect";
import "./index.scss";
var baseClass = "code-editor";
var CodeEditor = function(props) {
    var _rest;
    var readOnly = props.readOnly, className = props.className, options = props.options, height = props.height, rest = _object_without_properties(props, [
        "readOnly",
        "className",
        "options",
        "height"
    ]);
    var theme = useTheme().theme;
    var classes = [
        baseClass,
        className,
        ((_rest = rest) === null || _rest === void 0 ? void 0 : _rest.defaultLanguage) ? "language--".concat(rest.defaultLanguage) : ""
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement(Editor, _object_spread({
        className: classes,
        theme: theme === "dark" ? "vs-dark" : "vs",
        loading: /*#__PURE__*/ React.createElement(ShimmerEffect, {
            height: height
        }),
        options: _object_spread({
            detectIndentation: true,
            minimap: {
                enabled: false
            },
            readOnly: Boolean(readOnly),
            scrollBeyondLastLine: false,
            tabSize: 2,
            wordWrap: "on"
        }, options),
        height: height
    }, rest));
};
export default CodeEditor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVFZGl0b3IvQ29kZUVkaXRvci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFZGl0b3IgZnJvbSAnQG1vbmFjby1lZGl0b3IvcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvVGhlbWUnO1xuaW1wb3J0IHsgU2hpbW1lckVmZmVjdCB9IGZyb20gJy4uL1NoaW1tZXJFZmZlY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb2RlLWVkaXRvcic7XG5cbmNvbnN0IENvZGVFZGl0b3I6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlYWRPbmx5LCBjbGFzc05hbWUsIG9wdGlvbnMsIGhlaWdodCwgLi4ucmVzdCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgcmVzdD8uZGVmYXVsdExhbmd1YWdlID8gYGxhbmd1YWdlLS0ke3Jlc3QuZGVmYXVsdExhbmd1YWdlfWAgOiAnJyxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPEVkaXRvclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgdGhlbWU9e3RoZW1lID09PSAnZGFyaycgPyAndnMtZGFyaycgOiAndnMnfVxuICAgICAgbG9hZGluZz17PFNoaW1tZXJFZmZlY3QgaGVpZ2h0PXtoZWlnaHR9IC8+fVxuICAgICAgb3B0aW9ucz17XG4gICAgICAgIHtcbiAgICAgICAgICBkZXRlY3RJbmRlbnRhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBtaW5pbWFwOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlYWRPbmx5OiBCb29sZWFuKHJlYWRPbmx5KSxcbiAgICAgICAgICBzY3JvbGxCZXlvbmRMYXN0TGluZTogZmFsc2UsXG4gICAgICAgICAgdGFiU2l6ZTogMixcbiAgICAgICAgICB3b3JkV3JhcDogJ29uJyxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2RlRWRpdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRWRpdG9yIiwidXNlVGhlbWUiLCJTaGltbWVyRWZmZWN0IiwiYmFzZUNsYXNzIiwiQ29kZUVkaXRvciIsInByb3BzIiwicmVzdCIsInJlYWRPbmx5IiwiY2xhc3NOYW1lIiwib3B0aW9ucyIsImhlaWdodCIsInRoZW1lIiwiY2xhc3NlcyIsImRlZmF1bHRMYW5ndWFnZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwibG9hZGluZyIsImRldGVjdEluZGVudGF0aW9uIiwibWluaW1hcCIsImVuYWJsZWQiLCJzY3JvbGxCZXlvbmRMYXN0TGluZSIsInRhYlNpemUiLCJ3b3JkV3JhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixPQUFPQyxZQUFZLHVCQUF1QjtBQUUxQyxTQUFTQyxRQUFRLFFBQVEsd0JBQXdCO0FBQ2pELFNBQVNDLGFBQWEsUUFBUSxtQkFBbUI7QUFFakQsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsYUFBOEIsU0FBQ0M7UUFRakNDO0lBUEYsSUFBUUMsV0FBa0RGLE1BQWxERSxVQUFVQyxZQUF3Q0gsTUFBeENHLFdBQVdDLFVBQTZCSixNQUE3QkksU0FBU0MsU0FBb0JMLE1BQXBCSyxRQUFXSixrQ0FBU0Q7UUFBbERFO1FBQVVDO1FBQVdDO1FBQVNDOztJQUV0QyxJQUFNLEFBQUVDLFFBQVVWLFdBQVZVO0lBRVIsSUFBTUMsVUFBVTtRQUNkVDtRQUNBSztRQUNBRixFQUFBQSxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1PLGVBQWUsSUFBRyxBQUFDLGFBQWlDLE9BQXJCUCxLQUFLTyxlQUFlLElBQUs7S0FDL0QsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0Usb0JBQUNoQjtRQUNDUSxXQUFXSTtRQUNYRCxPQUFPQSxVQUFVLFNBQVMsWUFBWTtRQUN0Q00sdUJBQVMsb0JBQUNmO1lBQWNRLFFBQVFBOztRQUNoQ0QsU0FDRTtZQUNFUyxtQkFBbUI7WUFDbkJDLFNBQVM7Z0JBQ1BDLFNBQVM7WUFDWDtZQUNBYixVQUFVUSxRQUFRUjtZQUNsQmMsc0JBQXNCO1lBQ3RCQyxTQUFTO1lBQ1RDLFVBQVU7V0FDUGQ7UUFHUEMsUUFBUUE7T0FDSko7QUFHVjtBQUVBLGVBQWVGLFdBQVcifQ==