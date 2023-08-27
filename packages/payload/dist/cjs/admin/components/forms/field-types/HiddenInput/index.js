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
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
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
var HiddenInput = function(props) {
    var name = props.name, pathFromProps = props.path, valueFromProps = props.value, _props_disableModifyingForm = props.disableModifyingForm, disableModifyingForm = _props_disableModifyingForm === void 0 ? true : _props_disableModifyingForm;
    var path = pathFromProps || name;
    var _useField1 = (0, _useField.default)({
        path: path
    }), value = _useField1.value, setValue = _useField1.setValue;
    (0, _react.useEffect)(function() {
        if (valueFromProps !== undefined) {
            setValue(valueFromProps, disableModifyingForm);
        }
    }, [
        valueFromProps,
        setValue,
        disableModifyingForm
    ]);
    return /*#__PURE__*/ _react.default.createElement("input", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        type: "hidden",
        value: value || "",
        onChange: setValue,
        name: path
    });
};
var _default = (0, _withCondition.default)(HiddenInput);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0hpZGRlbklucHV0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgSGlkZGVuSW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIHZhbHVlOiB2YWx1ZUZyb21Qcm9wcyxcbiAgICBkaXNhYmxlTW9kaWZ5aW5nRm9ybSA9IHRydWUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuXG4gIGNvbnN0IHsgdmFsdWUsIHNldFZhbHVlIH0gPSB1c2VGaWVsZCh7XG4gICAgcGF0aCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWVGcm9tUHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0VmFsdWUodmFsdWVGcm9tUHJvcHMsIGRpc2FibGVNb2RpZnlpbmdGb3JtKTtcbiAgICB9XG4gIH0sIFt2YWx1ZUZyb21Qcm9wcywgc2V0VmFsdWUsIGRpc2FibGVNb2RpZnlpbmdGb3JtXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIGlkPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgdmFsdWU9e3ZhbHVlIGFzIHN0cmluZyB8fCAnJ31cbiAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cbiAgICAgIG5hbWU9e3BhdGh9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oSGlkZGVuSW5wdXQpO1xuIl0sIm5hbWVzIjpbIkhpZGRlbklucHV0IiwicHJvcHMiLCJuYW1lIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJ2YWx1ZSIsInZhbHVlRnJvbVByb3BzIiwiZGlzYWJsZU1vZGlmeWluZ0Zvcm0iLCJ1c2VGaWVsZCIsInNldFZhbHVlIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwiaW5wdXQiLCJpZCIsInJlcGxhY2UiLCJ0eXBlIiwib25DaGFuZ2UiLCJ3aXRoQ29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9DQTs7O2VBQUE7Ozs2REFwQ2lDOytEQUNaO29FQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsY0FBK0IsU0FBQ0M7SUFDcEMsSUFDRUMsT0FJRUQsTUFKRkMsTUFDQUMsQUFBTUMsZ0JBR0pILE1BSEZFLE1BQ0FFLEFBQU9DLGlCQUVMTCxNQUZGSSxxQ0FFRUosTUFERk0sc0JBQUFBLGdFQUF1QjtJQUd6QixJQUFNSixPQUFPQyxpQkFBaUJGO0lBRTlCLElBQTRCTSxhQUFBQSxJQUFBQSxpQkFBUSxFQUFDO1FBQ25DTCxNQUFBQTtJQUNGLElBRlFFLFFBQW9CRyxXQUFwQkgsT0FBT0ksV0FBYUQsV0FBYkM7SUFJZkMsSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUlKLG1CQUFtQkssV0FBVztZQUNoQ0YsU0FBU0gsZ0JBQWdCQztRQUMzQjtJQUNGLEdBQUc7UUFBQ0Q7UUFBZ0JHO1FBQVVGO0tBQXFCO0lBRW5ELHFCQUNFLDZCQUFDSztRQUNDQyxJQUFJLEFBQUMsU0FBbUMsT0FBM0JWLEtBQUtXLE9BQU8sQ0FBQyxRQUFRO1FBQ2xDQyxNQUFLO1FBQ0xWLE9BQU9BLFNBQW1CO1FBQzFCVyxVQUFVUDtRQUNWUCxNQUFNQzs7QUFHWjtJQUVBLFdBQWVjLElBQUFBLHNCQUFhLEVBQUNqQiJ9