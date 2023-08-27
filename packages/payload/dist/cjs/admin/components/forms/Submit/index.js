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
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _context = require("../Form/context");
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
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
var baseClass = "form-submit";
var FormSubmit = /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
    var children = props.children, id = props.buttonId, disabledFromProps = props.disabled, _props_type = props.type, type = _props_type === void 0 ? "submit" : _props_type;
    var processing = (0, _context.useFormProcessing)();
    var disabled = (0, _context.useForm)().disabled;
    var canSave = !(disabledFromProps || processing || disabled);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, _object_spread_props(_object_spread({
        ref: ref
    }, props), {
        id: id,
        type: type,
        disabled: canSave ? undefined : true
    }), children));
});
var _default = FormSubmit;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL1N1Ym1pdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtUHJvY2Vzc2luZyB9IGZyb20gJy4uL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2Zvcm0tc3VibWl0JztcblxuY29uc3QgRm9ybVN1Ym1pdCA9IGZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIFByb3BzPigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBidXR0b25JZDogaWQsIGRpc2FibGVkOiBkaXNhYmxlZEZyb21Qcm9wcywgdHlwZSA9ICdzdWJtaXQnIH0gPSBwcm9wcztcbiAgY29uc3QgcHJvY2Vzc2luZyA9IHVzZUZvcm1Qcm9jZXNzaW5nKCk7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHVzZUZvcm0oKTtcbiAgY29uc3QgY2FuU2F2ZSA9ICEoZGlzYWJsZWRGcm9tUHJvcHMgfHwgcHJvY2Vzc2luZyB8fCBkaXNhYmxlZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICBkaXNhYmxlZD17Y2FuU2F2ZSA/IHVuZGVmaW5lZCA6IHRydWV9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1TdWJtaXQ7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiRm9ybVN1Ym1pdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNoaWxkcmVuIiwiYnV0dG9uSWQiLCJpZCIsImRpc2FibGVkIiwiZGlzYWJsZWRGcm9tUHJvcHMiLCJ0eXBlIiwicHJvY2Vzc2luZyIsInVzZUZvcm1Qcm9jZXNzaW5nIiwidXNlRm9ybSIsImNhblNhdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBOEJBOzs7ZUFBQTs7OzZEQTlCa0M7dUJBQ1M7NkRBQ3hCO1FBR1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLDJCQUFhQyxJQUFBQSxpQkFBVSxFQUEyQixTQUFDQyxPQUFPQztJQUM5RCxJQUFRQyxXQUF5RUYsTUFBekVFLFVBQVVDLEFBQVVDLEtBQXFESixNQUEvREcsVUFBY0UsQUFBVUMsb0JBQXVDTixNQUFqREssd0JBQWlETCxNQUFwQk8sTUFBQUEsZ0NBQU87SUFDcEUsSUFBTUMsYUFBYUMsSUFBQUEsMEJBQWlCO0lBQ3BDLElBQU0sQUFBRUosV0FBYUssSUFBQUEsZ0JBQU8sSUFBcEJMO0lBQ1IsSUFBTU0sVUFBVSxDQUFFTCxDQUFBQSxxQkFBcUJFLGNBQWNILFFBQU87SUFFNUQscUJBQ0UsNkJBQUNPO1FBQUlDLFdBQVdoQjtxQkFDZCw2QkFBQ2lCLGVBQU07UUFDTGIsS0FBS0E7T0FDREQ7UUFDSkksSUFBSUE7UUFDSkcsTUFBTUE7UUFDTkYsVUFBVU0sVUFBVUksWUFBWTtRQUUvQmI7QUFJVDtJQUVBLFdBQWVKIn0=