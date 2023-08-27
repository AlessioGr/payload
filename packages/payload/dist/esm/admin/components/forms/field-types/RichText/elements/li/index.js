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
import React from "react";
import listTypes from "../listTypes";
var LI = function(props) {
    var _element_children_, _element_children;
    var attributes = props.attributes, element = props.element, children = props.children;
    var disableListStyle = element.children.length >= 1 && listTypes.includes((_element_children = element.children) === null || _element_children === void 0 ? void 0 : (_element_children_ = _element_children[0]) === null || _element_children_ === void 0 ? void 0 : _element_children_.type);
    return /*#__PURE__*/ React.createElement("li", _object_spread({
        style: {
            listStyle: disableListStyle ? "none" : undefined,
            listStylePosition: disableListStyle ? "outside" : undefined
        }
    }, attributes), children);
};
export default {
    Element: LI
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGxpc3RUeXBlcyBmcm9tICcuLi9saXN0VHlwZXMnO1xuXG5jb25zdCBMSSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGVsZW1lbnQsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY29uc3QgZGlzYWJsZUxpc3RTdHlsZSA9IGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID49IDEgJiYgbGlzdFR5cGVzLmluY2x1ZGVzKGVsZW1lbnQuY2hpbGRyZW4/LlswXT8udHlwZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bGlcbiAgICAgIHN0eWxlPXt7IGxpc3RTdHlsZTogZGlzYWJsZUxpc3RTdHlsZSA/ICdub25lJyA6IHVuZGVmaW5lZCwgbGlzdFN0eWxlUG9zaXRpb246IGRpc2FibGVMaXN0U3R5bGUgPyAnb3V0c2lkZScgOiB1bmRlZmluZWQgfX1cbiAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBFbGVtZW50OiBMSSxcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJsaXN0VHlwZXMiLCJMSSIsInByb3BzIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImRpc2FibGVMaXN0U3R5bGUiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInR5cGUiLCJsaSIsInN0eWxlIiwibGlzdFN0eWxlIiwidW5kZWZpbmVkIiwibGlzdFN0eWxlUG9zaXRpb24iLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGVBQWUsZUFBZTtBQUVyQyxJQUFNQyxLQUFLLFNBQUNDO1FBRWtFQyxvQkFBQUE7SUFENUUsSUFBUUMsYUFBa0NGLE1BQWxDRSxZQUFZRCxVQUFzQkQsTUFBdEJDLFNBQVNFLFdBQWFILE1BQWJHO0lBQzdCLElBQU1DLG1CQUFtQkgsUUFBUUUsUUFBUSxDQUFDRSxNQUFNLElBQUksS0FBS1AsVUFBVVEsUUFBUSxFQUFDTCxvQkFBQUEsUUFBUUUsUUFBUSxjQUFoQkYseUNBQUFBLHFCQUFBQSxpQkFBa0IsQ0FBQyxFQUFFLGNBQXJCQSx5Q0FBQUEsbUJBQXVCTSxJQUFJO0lBRXZHLHFCQUNFLG9CQUFDQztRQUNDQyxPQUFPO1lBQUVDLFdBQVdOLG1CQUFtQixTQUFTTztZQUFXQyxtQkFBbUJSLG1CQUFtQixZQUFZTztRQUFVO09BQ25IVCxhQUVIQztBQUdQO0FBRUEsZUFBZTtJQUNiVSxTQUFTZDtBQUNYLEVBQUUifQ==