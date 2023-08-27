"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WatchCondition", {
    enumerable: true,
    get: function() {
        return WatchCondition;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _Auth = require("../../utilities/Auth");
var _context = require("../Form/context");
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("../Form/reduceFieldsToValues"));
var _getSiblingData = /*#__PURE__*/ _interop_require_default(require("../Form/getSiblingData"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
var WatchCondition = function(param) {
    var pathFromProps = param.path, name = param.name, condition = param.condition, setShowField = param.setShowField;
    var _field;
    var path = typeof pathFromProps === "string" ? pathFromProps : name;
    var user = (0, _Auth.useAuth)().user;
    var _useAllFormFields = _sliced_to_array((0, _context.useAllFormFields)(), 2), fields = _useAllFormFields[0], dispatchFields = _useAllFormFields[1];
    var id = (0, _DocumentInfo.useDocumentInfo)().id;
    var data = (0, _reduceFieldsToValues.default)(fields, true);
    var siblingData = (0, _getSiblingData.default)(fields, path);
    // Manually provide ID to `data`
    data.id = id;
    var hasCondition = Boolean(condition);
    var isPassingCondition = hasCondition ? condition(data, siblingData, {
        user: user
    }) : true;
    var field = fields[path];
    var wasPassingCondition = (_field = field) === null || _field === void 0 ? void 0 : _field.passesCondition;
    (0, _react.useEffect)(function() {
        if (hasCondition) {
            if (isPassingCondition && !wasPassingCondition) {
                dispatchFields({
                    type: "MODIFY_CONDITION",
                    path: path,
                    result: true,
                    user: user
                });
            }
            if (!isPassingCondition && (wasPassingCondition || typeof wasPassingCondition === "undefined")) {
                dispatchFields({
                    type: "MODIFY_CONDITION",
                    path: path,
                    result: false,
                    user: user
                });
            }
        }
    }, [
        isPassingCondition,
        wasPassingCondition,
        dispatchFields,
        path,
        hasCondition,
        user,
        setShowField
    ]);
    (0, _react.useEffect)(function() {
        setShowField(isPassingCondition);
    }, [
        setShowField,
        isPassingCondition
    ]);
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL3dpdGhDb25kaXRpb24vV2F0Y2hDb25kaXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlQWxsRm9ybUZpZWxkcyB9IGZyb20gJy4uL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCByZWR1Y2VGaWVsZHNUb1ZhbHVlcyBmcm9tICcuLi9Gb3JtL3JlZHVjZUZpZWxkc1RvVmFsdWVzJztcbmltcG9ydCBnZXRTaWJsaW5nRGF0YSBmcm9tICcuLi9Gb3JtL2dldFNpYmxpbmdEYXRhJztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoPzogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBjb25kaXRpb246IENvbmRpdGlvblxuICBzZXRTaG93RmllbGQ6IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFdhdGNoQ29uZGl0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICBuYW1lLFxuICBjb25kaXRpb24sXG4gIHNldFNob3dGaWVsZCxcbn0pID0+IHtcbiAgY29uc3QgcGF0aCA9IHR5cGVvZiBwYXRoRnJvbVByb3BzID09PSAnc3RyaW5nJyA/IHBhdGhGcm9tUHJvcHMgOiBuYW1lO1xuXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBbZmllbGRzLCBkaXNwYXRjaEZpZWxkc10gPSB1c2VBbGxGb3JtRmllbGRzKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuXG4gIGNvbnN0IGRhdGEgPSByZWR1Y2VGaWVsZHNUb1ZhbHVlcyhmaWVsZHMsIHRydWUpO1xuICBjb25zdCBzaWJsaW5nRGF0YSA9IGdldFNpYmxpbmdEYXRhKGZpZWxkcywgcGF0aCk7XG5cbiAgLy8gTWFudWFsbHkgcHJvdmlkZSBJRCB0byBgZGF0YWBcbiAgZGF0YS5pZCA9IGlkO1xuXG4gIGNvbnN0IGhhc0NvbmRpdGlvbiA9IEJvb2xlYW4oY29uZGl0aW9uKTtcbiAgY29uc3QgaXNQYXNzaW5nQ29uZGl0aW9uID0gaGFzQ29uZGl0aW9uID8gY29uZGl0aW9uKGRhdGEsIHNpYmxpbmdEYXRhLCB7IHVzZXIgfSkgOiB0cnVlO1xuICBjb25zdCBmaWVsZCA9IGZpZWxkc1twYXRoXTtcblxuICBjb25zdCB3YXNQYXNzaW5nQ29uZGl0aW9uID0gZmllbGQ/LnBhc3Nlc0NvbmRpdGlvbjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoYXNDb25kaXRpb24pIHtcbiAgICAgIGlmIChpc1Bhc3NpbmdDb25kaXRpb24gJiYgIXdhc1Bhc3NpbmdDb25kaXRpb24pIHtcbiAgICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnTU9ESUZZX0NPTkRJVElPTicsIHBhdGgsIHJlc3VsdDogdHJ1ZSwgdXNlciB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1Bhc3NpbmdDb25kaXRpb24gJiYgKHdhc1Bhc3NpbmdDb25kaXRpb24gfHwgdHlwZW9mIHdhc1Bhc3NpbmdDb25kaXRpb24gPT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICBkaXNwYXRjaEZpZWxkcyh7IHR5cGU6ICdNT0RJRllfQ09ORElUSU9OJywgcGF0aCwgcmVzdWx0OiBmYWxzZSwgdXNlciB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpc1Bhc3NpbmdDb25kaXRpb24sIHdhc1Bhc3NpbmdDb25kaXRpb24sIGRpc3BhdGNoRmllbGRzLCBwYXRoLCBoYXNDb25kaXRpb24sIHVzZXIsIHNldFNob3dGaWVsZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2hvd0ZpZWxkKGlzUGFzc2luZ0NvbmRpdGlvbik7XG4gIH0sIFtzZXRTaG93RmllbGQsIGlzUGFzc2luZ0NvbmRpdGlvbl0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJuYW1lcyI6WyJXYXRjaENvbmRpdGlvbiIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwibmFtZSIsImNvbmRpdGlvbiIsInNldFNob3dGaWVsZCIsImZpZWxkIiwidXNlciIsInVzZUF1dGgiLCJ1c2VBbGxGb3JtRmllbGRzIiwiZmllbGRzIiwiZGlzcGF0Y2hGaWVsZHMiLCJpZCIsInVzZURvY3VtZW50SW5mbyIsImRhdGEiLCJyZWR1Y2VGaWVsZHNUb1ZhbHVlcyIsInNpYmxpbmdEYXRhIiwiZ2V0U2libGluZ0RhdGEiLCJoYXNDb25kaXRpb24iLCJCb29sZWFuIiwiaXNQYXNzaW5nQ29uZGl0aW9uIiwid2FzUGFzc2luZ0NvbmRpdGlvbiIsInBhc3Nlc0NvbmRpdGlvbiIsInVzZUVmZmVjdCIsInR5cGUiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBZWFBOzs7ZUFBQUE7Ozs2REFmb0I7b0JBQ1Q7dUJBQ1M7NEJBQ0Q7MkVBQ0M7cUVBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVcEIsSUFBTUEsaUJBQWtDO1FBQzdDQyxBQUFNQyxzQkFBTkQsTUFDQUUsYUFBQUEsTUFDQUMsa0JBQUFBLFdBQ0FDLHFCQUFBQTtRQWtCNEJDO0lBaEI1QixJQUFNTCxPQUFPLE9BQU9DLGtCQUFrQixXQUFXQSxnQkFBZ0JDO0lBRWpFLElBQU0sQUFBRUksT0FBU0MsSUFBQUEsYUFBTyxJQUFoQkQ7SUFDUixJQUFpQ0UscUNBQUFBLElBQUFBLHlCQUFnQixTQUExQ0MsU0FBMEJELHNCQUFsQkUsaUJBQWtCRjtJQUNqQyxJQUFNLEFBQUVHLEtBQU9DLElBQUFBLDZCQUFlLElBQXRCRDtJQUVSLElBQU1FLE9BQU9DLElBQUFBLDZCQUFvQixFQUFDTCxRQUFRO0lBQzFDLElBQU1NLGNBQWNDLElBQUFBLHVCQUFjLEVBQUNQLFFBQVFUO0lBRTNDLGdDQUFnQztJQUNoQ2EsS0FBS0YsRUFBRSxHQUFHQTtJQUVWLElBQU1NLGVBQWVDLFFBQVFmO0lBQzdCLElBQU1nQixxQkFBcUJGLGVBQWVkLFVBQVVVLE1BQU1FLGFBQWE7UUFBRVQsTUFBQUE7SUFBSyxLQUFLO0lBQ25GLElBQU1ELFFBQVFJLE1BQU0sQ0FBQ1QsS0FBSztJQUUxQixJQUFNb0IsdUJBQXNCZixTQUFBQSxtQkFBQUEsNkJBQUFBLE9BQU9nQixlQUFlO0lBRWxEQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsSUFBSUwsY0FBYztZQUNoQixJQUFJRSxzQkFBc0IsQ0FBQ0MscUJBQXFCO2dCQUM5Q1YsZUFBZTtvQkFBRWEsTUFBTTtvQkFBb0J2QixNQUFBQTtvQkFBTXdCLFFBQVE7b0JBQU1sQixNQUFBQTtnQkFBSztZQUN0RTtZQUVBLElBQUksQ0FBQ2Esc0JBQXVCQyxDQUFBQSx1QkFBdUIsT0FBT0Esd0JBQXdCLFdBQVUsR0FBSTtnQkFDOUZWLGVBQWU7b0JBQUVhLE1BQU07b0JBQW9CdkIsTUFBQUE7b0JBQU13QixRQUFRO29CQUFPbEIsTUFBQUE7Z0JBQUs7WUFDdkU7UUFDRjtJQUNGLEdBQUc7UUFBQ2E7UUFBb0JDO1FBQXFCVjtRQUFnQlY7UUFBTWlCO1FBQWNYO1FBQU1GO0tBQWE7SUFFcEdrQixJQUFBQSxnQkFBUyxFQUFDO1FBQ1JsQixhQUFhZTtJQUNmLEdBQUc7UUFBQ2Y7UUFBY2U7S0FBbUI7SUFFckMsT0FBTztBQUNUIn0=