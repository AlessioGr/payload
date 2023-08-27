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
var _uuid = require("uuid");
var _reacti18next = require("react-i18next");
var _useField = /*#__PURE__*/ _interop_require_default(require("../../../../forms/useField"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../../../forms/Label"));
var _CopyToClipboard = /*#__PURE__*/ _interop_require_default(require("../../../../elements/CopyToClipboard"));
var _validations = require("../../../../../../fields/validations");
var _context = require("../../../../forms/Form/context");
var _GenerateConfirmation = /*#__PURE__*/ _interop_require_default(require("../../../../elements/GenerateConfirmation"));
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
var path = "apiKey";
var baseClass = "api-key";
var APIKey = function(param) {
    var readOnly = param.readOnly;
    var _apiKey;
    var _useState = _sliced_to_array((0, _react.useState)(null), 2), initialAPIKey = _useState[0], setInitialAPIKey = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), highlightedField = _useState1[0], setHighlightedField = _useState1[1];
    var t = (0, _reacti18next.useTranslation)().t;
    var apiKey = (0, _context.useFormFields)(function(param) {
        var _param = _sliced_to_array(param, 1), fields = _param[0];
        return fields[path];
    });
    var validate = function(val) {
        return (0, _validations.text)(val, {
            minLength: 24,
            maxLength: 48,
            data: {},
            siblingData: {},
            t: t
        });
    };
    var apiKeyValue = (_apiKey = apiKey) === null || _apiKey === void 0 ? void 0 : _apiKey.value;
    var APIKeyLabel = (0, _react.useMemo)(function() {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__label")
        }, /*#__PURE__*/ _react.default.createElement("span", null, "API Key"), /*#__PURE__*/ _react.default.createElement(_CopyToClipboard.default, {
            value: apiKeyValue
        }));
    }, [
        apiKeyValue
    ]);
    var fieldType = (0, _useField.default)({
        path: "apiKey",
        validate: validate
    });
    var highlightField = function() {
        if (highlightedField) {
            setHighlightedField(false);
        }
        setTimeout(function() {
            setHighlightedField(true);
        }, 1);
    };
    var value = fieldType.value, setValue = fieldType.setValue;
    (0, _react.useEffect)(function() {
        setInitialAPIKey((0, _uuid.v4)());
    }, []);
    (0, _react.useEffect)(function() {
        if (!apiKeyValue) {
            setValue(initialAPIKey);
        }
    }, [
        apiKeyValue,
        setValue,
        initialAPIKey
    ]);
    (0, _react.useEffect)(function() {
        if (highlightedField) {
            setTimeout(function() {
                setHighlightedField(false);
            }, 10000);
        }
    }, [
        highlightedField
    ]);
    var classes = [
        "field-type",
        "api-key",
        "read-only"
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: path,
        label: APIKeyLabel
    }), /*#__PURE__*/ _react.default.createElement("input", {
        value: value || "",
        className: highlightedField ? "highlight" : undefined,
        disabled: true,
        type: "text",
        id: "apiKey",
        name: "apiKey"
    })), !readOnly && /*#__PURE__*/ _react.default.createElement(_GenerateConfirmation.default, {
        setKey: function() {
            return setValue((0, _uuid.v4)());
        },
        highlightField: highlightField
    }));
};
var _default = APIKey;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvQXV0aC9BUElLZXkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL3VzZUZpZWxkJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9MYWJlbCc7XG5pbXBvcnQgQ29weVRvQ2xpcGJvYXJkIGZyb20gJy4uLy4uLy4uLy4uL2VsZW1lbnRzL0NvcHlUb0NsaXBib2FyZCc7XG5pbXBvcnQgeyB0ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IHVzZUZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuXG5pbXBvcnQgR2VuZXJhdGVDb25maXJtYXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvR2VuZXJhdGVDb25maXJtYXRpb24nO1xuXG5jb25zdCBwYXRoID0gJ2FwaUtleSc7XG5jb25zdCBiYXNlQ2xhc3MgPSAnYXBpLWtleSc7XG5cbmNvbnN0IEFQSUtleTogUmVhY3QuRkM8e3JlYWRPbmx5PzogYm9vbGVhbn0+ID0gKHsgcmVhZE9ubHkgfSkgPT4ge1xuICBjb25zdCBbaW5pdGlhbEFQSUtleSwgc2V0SW5pdGlhbEFQSUtleV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hpZ2hsaWdodGVkRmllbGQsIHNldEhpZ2hsaWdodGVkRmllbGRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgYXBpS2V5ID0gdXNlRm9ybUZpZWxkcygoW2ZpZWxkc10pID0+IGZpZWxkc1twYXRoXSk7XG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbCkgPT4gdGV4dCh2YWwsIHsgbWluTGVuZ3RoOiAyNCwgbWF4TGVuZ3RoOiA0OCwgZGF0YToge30sIHNpYmxpbmdEYXRhOiB7fSwgdCB9KTtcblxuICBjb25zdCBhcGlLZXlWYWx1ZSA9IGFwaUtleT8udmFsdWU7XG5cbiAgY29uc3QgQVBJS2V5TGFiZWwgPSB1c2VNZW1vKCgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT5cbiAgICAgIDxzcGFuPlxuICAgICAgICBBUEkgS2V5XG4gICAgICA8L3NwYW4+XG4gICAgICA8Q29weVRvQ2xpcGJvYXJkIHZhbHVlPXthcGlLZXlWYWx1ZSBhcyBzdHJpbmd9IC8+XG4gICAgPC9kaXY+XG4gICksIFthcGlLZXlWYWx1ZV0pO1xuXG4gIGNvbnN0IGZpZWxkVHlwZSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoOiAnYXBpS2V5JyxcbiAgICB2YWxpZGF0ZSxcbiAgfSk7XG5cbiAgY29uc3QgaGlnaGxpZ2h0RmllbGQgPSAoKSA9PiB7XG4gICAgaWYgKGhpZ2hsaWdodGVkRmllbGQpIHtcbiAgICAgIHNldEhpZ2hsaWdodGVkRmllbGQoZmFsc2UpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEhpZ2hsaWdodGVkRmllbGQodHJ1ZSk7XG4gICAgfSwgMSk7XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNldFZhbHVlLFxuICB9ID0gZmllbGRUeXBlO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5pdGlhbEFQSUtleSh1dWlkdjQoKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXBpS2V5VmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKGluaXRpYWxBUElLZXkpO1xuICAgIH1cbiAgfSwgW2FwaUtleVZhbHVlLCBzZXRWYWx1ZSwgaW5pdGlhbEFQSUtleV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZ2hsaWdodGVkRmllbGQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRIaWdobGlnaHRlZEZpZWxkKGZhbHNlKTtcbiAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG4gIH0sIFtoaWdobGlnaHRlZEZpZWxkXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgJ2FwaS1rZXknLFxuICAgICdyZWFkLW9ubHknLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIGh0bWxGb3I9e3BhdGh9XG4gICAgICAgICAgbGFiZWw9e0FQSUtleUxhYmVsfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17dmFsdWUgYXMgc3RyaW5nIHx8ICcnfVxuICAgICAgICAgIGNsYXNzTmFtZT17aGlnaGxpZ2h0ZWRGaWVsZCA/ICdoaWdobGlnaHQnIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiYXBpS2V5XCJcbiAgICAgICAgICBuYW1lPVwiYXBpS2V5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgIDxHZW5lcmF0ZUNvbmZpcm1hdGlvblxuICAgICAgICAgIHNldEtleT17KCkgPT4gc2V0VmFsdWUodXVpZHY0KCkpfVxuICAgICAgICAgIGhpZ2hsaWdodEZpZWxkPXtoaWdobGlnaHRGaWVsZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFQSUtleTtcbiJdLCJuYW1lcyI6WyJwYXRoIiwiYmFzZUNsYXNzIiwiQVBJS2V5IiwicmVhZE9ubHkiLCJhcGlLZXkiLCJ1c2VTdGF0ZSIsImluaXRpYWxBUElLZXkiLCJzZXRJbml0aWFsQVBJS2V5IiwiaGlnaGxpZ2h0ZWRGaWVsZCIsInNldEhpZ2hsaWdodGVkRmllbGQiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VGb3JtRmllbGRzIiwiZmllbGRzIiwidmFsaWRhdGUiLCJ2YWwiLCJ0ZXh0IiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiZGF0YSIsInNpYmxpbmdEYXRhIiwiYXBpS2V5VmFsdWUiLCJ2YWx1ZSIsIkFQSUtleUxhYmVsIiwidXNlTWVtbyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJDb3B5VG9DbGlwYm9hcmQiLCJmaWVsZFR5cGUiLCJ1c2VGaWVsZCIsImhpZ2hsaWdodEZpZWxkIiwic2V0VGltZW91dCIsInNldFZhbHVlIiwidXNlRWZmZWN0IiwidXVpZHY0IiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiUmVhY3QiLCJGcmFnbWVudCIsIkxhYmVsIiwiaHRtbEZvciIsImxhYmVsIiwiaW5wdXQiLCJ1bmRlZmluZWQiLCJkaXNhYmxlZCIsInR5cGUiLCJpZCIsIm5hbWUiLCJHZW5lcmF0ZUNvbmZpcm1hdGlvbiIsInNldEtleSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFzR0E7OztlQUFBOzs7NkRBdEdvRDtvQkFDdkI7NEJBQ0U7K0RBQ1Y7NERBQ0g7c0VBQ1U7MkJBQ1A7dUJBQ1M7MkVBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBTUEsT0FBTztBQUNiLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsU0FBeUM7UUFBR0MsaUJBQUFBO1FBUTVCQztJQVBwQixJQUEwQ0MsNkJBQUFBLElBQUFBLGVBQVEsRUFBQyxXQUE1Q0MsZ0JBQW1DRCxjQUFwQkUsbUJBQW9CRjtJQUMxQyxJQUFnREEsOEJBQUFBLElBQUFBLGVBQVEsRUFBQyxZQUFsREcsbUJBQXlDSCxlQUF2Qkksc0JBQXVCSjtJQUNoRCxJQUFNLEFBQUVLLElBQU1DLElBQUFBLDRCQUFjLElBQXBCRDtJQUVSLElBQU1OLFNBQVNRLElBQUFBLHNCQUFhLEVBQUM7aURBQUVDO2VBQVlBLE1BQU0sQ0FBQ2IsS0FBSzs7SUFDdkQsSUFBTWMsV0FBVyxTQUFDQztlQUFRQyxJQUFBQSxpQkFBSSxFQUFDRCxLQUFLO1lBQUVFLFdBQVc7WUFBSUMsV0FBVztZQUFJQyxNQUFNLENBQUM7WUFBR0MsYUFBYSxDQUFDO1lBQUdWLEdBQUFBO1FBQUU7O0lBRWpHLElBQU1XLGVBQWNqQixVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVFrQixLQUFLO0lBRWpDLElBQU1DLGNBQWNDLElBQUFBLGNBQU8sRUFBQzs2QkFDMUIsNkJBQUNDO1lBQUlDLFdBQVcsQUFBQyxHQUFZLE9BQVZ6QixXQUFVO3lCQUMzQiw2QkFBQzBCLGNBQUssMEJBR04sNkJBQUNDLHdCQUFlO1lBQUNOLE9BQU9EOztPQUV6QjtRQUFDQTtLQUFZO0lBRWhCLElBQU1RLFlBQVlDLElBQUFBLGlCQUFRLEVBQUM7UUFDekI5QixNQUFNO1FBQ05jLFVBQUFBO0lBQ0Y7SUFFQSxJQUFNaUIsaUJBQWlCO1FBQ3JCLElBQUl2QixrQkFBa0I7WUFDcEJDLG9CQUFvQjtRQUN0QjtRQUNBdUIsV0FBVztZQUNUdkIsb0JBQW9CO1FBQ3RCLEdBQUc7SUFDTDtJQUVBLElBQ0VhLFFBRUVPLFVBRkZQLE9BQ0FXLFdBQ0VKLFVBREZJO0lBR0ZDLElBQUFBLGdCQUFTLEVBQUM7UUFDUjNCLGlCQUFpQjRCLElBQUFBLFFBQU07SUFDekIsR0FBRyxFQUFFO0lBRUxELElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJLENBQUNiLGFBQWE7WUFDaEJZLFNBQVMzQjtRQUNYO0lBQ0YsR0FBRztRQUFDZTtRQUFhWTtRQUFVM0I7S0FBYztJQUV6QzRCLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJMUIsa0JBQWtCO1lBQ3BCd0IsV0FBVztnQkFDVHZCLG9CQUFvQjtZQUN0QixHQUFHO1FBQ0w7SUFDRixHQUFHO1FBQUNEO0tBQWlCO0lBRXJCLElBQU00QixVQUFVO1FBQ2Q7UUFDQTtRQUNBO0tBQ0QsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0UsNkJBQUNDLGNBQUssQ0FBQ0MsUUFBUSxzQkFDYiw2QkFBQ2hCO1FBQUlDLFdBQVdVO3FCQUNkLDZCQUFDTSxjQUFLO1FBQ0pDLFNBQVMzQztRQUNUNEMsT0FBT3JCO3NCQUVULDZCQUFDc0I7UUFDQ3ZCLE9BQU9BLFNBQW1CO1FBQzFCSSxXQUFXbEIsbUJBQW1CLGNBQWNzQztRQUM1Q0MsVUFBQUE7UUFDQUMsTUFBSztRQUNMQyxJQUFHO1FBQ0hDLE1BQUs7U0FHUixDQUFDL0MsMEJBQ0EsNkJBQUNnRCw2QkFBb0I7UUFDbkJDLFFBQVE7bUJBQU1uQixTQUFTRSxJQUFBQSxRQUFNOztRQUM3QkosZ0JBQWdCQTs7QUFLMUI7SUFFQSxXQUFlN0IifQ==