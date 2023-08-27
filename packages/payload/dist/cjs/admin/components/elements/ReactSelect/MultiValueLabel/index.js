"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultiValueLabel", {
    enumerable: true,
    get: function() {
        return MultiValueLabel;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactselect = require("react-select");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var baseClass = "multi-value-label";
var MultiValueLabel = function(props) {
    var tmp = props.selectProps, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.// @ts-ignore // TODO: Fix types
    customProps, // @ts-ignore // TODO: Fix types
    draggableProps = (tmp1 === void 0 ? {} : tmp1).draggableProps;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_reactselect.components.MultiValueLabel, _object_spread_props(_object_spread({}, props), {
        innerProps: _object_spread({
            className: "".concat(baseClass, "__text")
        }, draggableProps || {})
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L011bHRpVmFsdWVMYWJlbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvbmVudHMgYXMgU2VsZWN0Q29tcG9uZW50cywgTXVsdGlWYWx1ZVByb3BzIH0gZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCB0eXBlIHsgT3B0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdtdWx0aS12YWx1ZS1sYWJlbCc7XG5cbmV4cG9ydCBjb25zdCBNdWx0aVZhbHVlTGFiZWw6IFJlYWN0LkZDPE11bHRpVmFsdWVQcm9wczxPcHRpb24+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgc2VsZWN0UHJvcHM6IHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgLy8gVE9ETzogRml4IHR5cGVzXG4gICAgICBjdXN0b21Qcm9wczoge1xuICAgICAgICAvLyBAdHMtaWdub3JlIC8vIFRPRE86IEZpeCB0eXBlc1xuICAgICAgICBkcmFnZ2FibGVQcm9wcyxcbiAgICAgIH0gPSB7fSxcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPFNlbGVjdENvbXBvbmVudHMuTXVsdGlWYWx1ZUxhYmVsXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgaW5uZXJQcm9wcz17e1xuICAgICAgICAgIGNsYXNzTmFtZTogYCR7YmFzZUNsYXNzfV9fdGV4dGAsXG4gICAgICAgICAgLi4uZHJhZ2dhYmxlUHJvcHMgfHwge30sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJNdWx0aVZhbHVlTGFiZWwiLCJiYXNlQ2xhc3MiLCJwcm9wcyIsInNlbGVjdFByb3BzIiwiY3VzdG9tUHJvcHMiLCJkcmFnZ2FibGVQcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsIlNlbGVjdENvbXBvbmVudHMiLCJpbm5lclByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OytCQVFhQTs7O2VBQUFBOzs7NERBUks7MkJBQzhDO1FBR3pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUVYLElBQU1ELGtCQUFxRCxTQUFDRTtJQUNqRSxJQUNlLE1BT1hBLE1BUEZDLG9CQUFhLGlCQU1ULENBQUMsSUFOUSxLQUVFLFlBRGIsZ0NBQWdDO0lBQ2hDQyxhQUFhLEFBQ1gsZ0NBQWdDO0lBQ2hDQyxrQkFGVyxrQkFHVCxDQUFDLElBSFEsTUFFWEE7SUFLTixxQkFDRSw2QkFBQ0M7UUFBSUMsV0FBV047cUJBQ2QsNkJBQUNPLHVCQUFnQixDQUFDUixlQUFlLDBDQUMzQkU7UUFDSk8sWUFBWTtZQUNWRixXQUFXLEFBQUMsR0FBWSxPQUFWTixXQUFVO1dBQ3JCSSxrQkFBa0IsQ0FBQzs7QUFLaEMifQ==