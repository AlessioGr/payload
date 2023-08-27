"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _react1 = /*#__PURE__*/ _interop_require_default(require("@monaco-editor/react"));
var _Theme = require("../../utilities/Theme");
var _ShimmerEffect = require("../ShimmerEffect");
require("./index.scss");
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
var baseClass = "code-editor";
var CodeEditor = function(props) {
    var _rest;
    var readOnly = props.readOnly, className = props.className, options = props.options, height = props.height, rest = _object_without_properties(props, [
        "readOnly",
        "className",
        "options",
        "height"
    ]);
    var theme = (0, _Theme.useTheme)().theme;
    var classes = [
        baseClass,
        className,
        ((_rest = rest) === null || _rest === void 0 ? void 0 : _rest.defaultLanguage) ? "language--".concat(rest.defaultLanguage) : ""
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement(_react1.default, _object_spread({
        className: classes,
        theme: theme === "dark" ? "vs-dark" : "vs",
        loading: /*#__PURE__*/ _react.default.createElement(_ShimmerEffect.ShimmerEffect, {
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
var _default = CodeEditor;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVFZGl0b3IvQ29kZUVkaXRvci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFZGl0b3IgZnJvbSAnQG1vbmFjby1lZGl0b3IvcmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvVGhlbWUnO1xuaW1wb3J0IHsgU2hpbW1lckVmZmVjdCB9IGZyb20gJy4uL1NoaW1tZXJFZmZlY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb2RlLWVkaXRvcic7XG5cbmNvbnN0IENvZGVFZGl0b3I6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlYWRPbmx5LCBjbGFzc05hbWUsIG9wdGlvbnMsIGhlaWdodCwgLi4ucmVzdCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgcmVzdD8uZGVmYXVsdExhbmd1YWdlID8gYGxhbmd1YWdlLS0ke3Jlc3QuZGVmYXVsdExhbmd1YWdlfWAgOiAnJyxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPEVkaXRvclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgdGhlbWU9e3RoZW1lID09PSAnZGFyaycgPyAndnMtZGFyaycgOiAndnMnfVxuICAgICAgbG9hZGluZz17PFNoaW1tZXJFZmZlY3QgaGVpZ2h0PXtoZWlnaHR9IC8+fVxuICAgICAgb3B0aW9ucz17XG4gICAgICAgIHtcbiAgICAgICAgICBkZXRlY3RJbmRlbnRhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBtaW5pbWFwOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlYWRPbmx5OiBCb29sZWFuKHJlYWRPbmx5KSxcbiAgICAgICAgICBzY3JvbGxCZXlvbmRMYXN0TGluZTogZmFsc2UsXG4gICAgICAgICAgdGFiU2l6ZTogMixcbiAgICAgICAgICB3b3JkV3JhcDogJ29uJyxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2RlRWRpdG9yO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkNvZGVFZGl0b3IiLCJwcm9wcyIsInJlc3QiLCJyZWFkT25seSIsImNsYXNzTmFtZSIsIm9wdGlvbnMiLCJoZWlnaHQiLCJ0aGVtZSIsInVzZVRoZW1lIiwiY2xhc3NlcyIsImRlZmF1bHRMYW5ndWFnZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiRWRpdG9yIiwibG9hZGluZyIsIlNoaW1tZXJFZmZlY3QiLCJkZXRlY3RJbmRlbnRhdGlvbiIsIm1pbmltYXAiLCJlbmFibGVkIiwic2Nyb2xsQmV5b25kTGFzdExpbmUiLCJ0YWJTaXplIiwid29yZFdyYXAiXSwibWFwcGluZ3MiOiI7Ozs7K0JBNkNBOzs7ZUFBQTs7OzREQTdDa0I7NkRBQ0M7cUJBRU07NkJBQ0s7UUFFdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGFBQThCLFNBQUNDO1FBUWpDQztJQVBGLElBQVFDLFdBQWtERixNQUFsREUsVUFBVUMsWUFBd0NILE1BQXhDRyxXQUFXQyxVQUE2QkosTUFBN0JJLFNBQVNDLFNBQW9CTCxNQUFwQkssUUFBV0osa0NBQVNEO1FBQWxERTtRQUFVQztRQUFXQztRQUFTQzs7SUFFdEMsSUFBTSxBQUFFQyxRQUFVQyxJQUFBQSxlQUFRLElBQWxCRDtJQUVSLElBQU1FLFVBQVU7UUFDZFY7UUFDQUs7UUFDQUYsRUFBQUEsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNUSxlQUFlLElBQUcsQUFBQyxhQUFpQyxPQUFyQlIsS0FBS1EsZUFBZSxJQUFLO0tBQy9ELENBQUNDLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLHFCQUNFLDZCQUFDQyxlQUFNO1FBQ0xWLFdBQVdLO1FBQ1hGLE9BQU9BLFVBQVUsU0FBUyxZQUFZO1FBQ3RDUSx1QkFBUyw2QkFBQ0MsNEJBQWE7WUFBQ1YsUUFBUUE7O1FBQ2hDRCxTQUNFO1lBQ0VZLG1CQUFtQjtZQUNuQkMsU0FBUztnQkFDUEMsU0FBUztZQUNYO1lBQ0FoQixVQUFVUyxRQUFRVDtZQUNsQmlCLHNCQUFzQjtZQUN0QkMsU0FBUztZQUNUQyxVQUFVO1dBQ1BqQjtRQUdQQyxRQUFRQTtPQUNKSjtBQUdWO0lBRUEsV0FBZUYifQ==