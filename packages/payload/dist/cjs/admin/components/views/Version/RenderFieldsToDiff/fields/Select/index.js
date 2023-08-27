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
var _reactdiffviewercontinued = /*#__PURE__*/ _interop_require_wildcard(require("react-diff-viewer-continued"));
var _reacti18next = require("react-i18next");
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _styles = require("../styles");
var _getTranslation = require("../../../../../../../utilities/getTranslation");
require("./index.scss");
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
var baseClass = "select-diff";
var getOptionsToRender = function(value, options, hasMany) {
    if (hasMany && Array.isArray(value)) {
        return value.map(function(val) {
            return options.find(function(option) {
                return (typeof option === "string" ? option : option.value) === val;
            }) || String(val);
        });
    }
    return options.find(function(option) {
        return (typeof option === "string" ? option : option.value) === value;
    }) || String(value);
};
var getTranslatedOptions = function(options, i18n) {
    if (Array.isArray(options)) {
        return options.map(function(option) {
            return typeof option === "string" ? option : (0, _getTranslation.getTranslation)(option.label, i18n);
        }).join(", ");
    }
    return typeof options === "string" ? options : (0, _getTranslation.getTranslation)(options.label, i18n);
};
var Select = function(param) {
    var field = param.field, locale = param.locale, version = param.version, comparison = param.comparison, diffMethod = param.diffMethod;
    var placeholder = "";
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    if (version === comparison) placeholder = "[".concat(t("noValue"), "]");
    var comparisonToRender = typeof comparison !== "undefined" ? getTranslatedOptions(getOptionsToRender(comparison, field.options, field.hasMany), i18n) : placeholder;
    var versionToRender = typeof version !== "undefined" ? getTranslatedOptions(getOptionsToRender(version, field.options, field.hasMany), i18n) : placeholder;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, null, locale && /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__locale-label")
    }, locale), (0, _getTranslation.getTranslation)(field.label, i18n)), /*#__PURE__*/ _react.default.createElement(_reactdiffviewercontinued.default, {
        styles: _styles.diffStyles,
        compareMethod: _reactdiffviewercontinued.DiffMethod[diffMethod],
        oldValue: comparisonToRender,
        newValue: typeof versionToRender !== "undefined" ? versionToRender : placeholder,
        splitView: true,
        hideLineNumbers: true,
        showDiffOnly: false
    }));
};
var _default = Select;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9TZWxlY3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REaWZmVmlld2VyLCB7IERpZmZNZXRob2QgfSBmcm9tICdyZWFjdC1kaWZmLXZpZXdlci1jb250aW51ZWQnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB0eXBlIHsgaTE4biBhcyBJaTE4biB9IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJztcbmltcG9ydCB7IGRpZmZTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBPcHRpb25PYmplY3QsIFNlbGVjdEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3NlbGVjdC1kaWZmJztcblxuY29uc3QgZ2V0T3B0aW9uc1RvUmVuZGVyID0gKHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM6IFNlbGVjdEZpZWxkWydvcHRpb25zJ10sIGhhc01hbnk6IGJvb2xlYW4pOiBzdHJpbmcgfCBPcHRpb25PYmplY3QgfCAoT3B0aW9uT2JqZWN0IHwgc3RyaW5nKVtdID0+IHtcbiAgaWYgKGhhc01hbnkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUubWFwKCh2YWwpID0+IG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgPyBvcHRpb24gOiBvcHRpb24udmFsdWUpID09PSB2YWwpIHx8IFN0cmluZyh2YWwpKTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucy5maW5kKChvcHRpb24pID0+ICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyA/IG9wdGlvbiA6IG9wdGlvbi52YWx1ZSkgPT09IHZhbHVlKSB8fCBTdHJpbmcodmFsdWUpO1xufTtcblxuY29uc3QgZ2V0VHJhbnNsYXRlZE9wdGlvbnMgPSAob3B0aW9uczogc3RyaW5nIHwgT3B0aW9uT2JqZWN0IHwgKE9wdGlvbk9iamVjdCB8IHN0cmluZylbXSwgaTE4bjogSWkxOG4pOiBzdHJpbmcgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgIHJldHVybiBvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgPyBvcHRpb24gOiBnZXRUcmFuc2xhdGlvbihvcHRpb24ubGFiZWwsIGkxOG4pKSkuam9pbignLCAnKTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnID8gb3B0aW9ucyA6IGdldFRyYW5zbGF0aW9uKG9wdGlvbnMubGFiZWwsIGkxOG4pO1xufTtcblxuY29uc3QgU2VsZWN0OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBmaWVsZCwgbG9jYWxlLCB2ZXJzaW9uLCBjb21wYXJpc29uLCBkaWZmTWV0aG9kIH0pID0+IHtcbiAgbGV0IHBsYWNlaG9sZGVyID0gJyc7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICBpZiAodmVyc2lvbiA9PT0gY29tcGFyaXNvbikgcGxhY2Vob2xkZXIgPSBgWyR7dCgnbm9WYWx1ZScpfV1gO1xuXG4gIGNvbnN0IGNvbXBhcmlzb25Ub1JlbmRlciA9IHR5cGVvZiBjb21wYXJpc29uICE9PSAndW5kZWZpbmVkJyA/IGdldFRyYW5zbGF0ZWRPcHRpb25zKGdldE9wdGlvbnNUb1JlbmRlcihjb21wYXJpc29uLCBmaWVsZC5vcHRpb25zLCBmaWVsZC5oYXNNYW55KSwgaTE4bikgOiBwbGFjZWhvbGRlcjtcbiAgY29uc3QgdmVyc2lvblRvUmVuZGVyID0gdHlwZW9mIHZlcnNpb24gIT09ICd1bmRlZmluZWQnID8gZ2V0VHJhbnNsYXRlZE9wdGlvbnMoZ2V0T3B0aW9uc1RvUmVuZGVyKHZlcnNpb24sIGZpZWxkLm9wdGlvbnMsIGZpZWxkLmhhc01hbnkpLCBpMThuKSA6IHBsYWNlaG9sZGVyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8TGFiZWw+XG4gICAgICAgIHtsb2NhbGUgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbG9jYWxlLWxhYmVsYH0+e2xvY2FsZX08L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHtnZXRUcmFuc2xhdGlvbihmaWVsZC5sYWJlbCwgaTE4bil9XG4gICAgICA8L0xhYmVsPlxuICAgICAgPFJlYWN0RGlmZlZpZXdlclxuICAgICAgICBzdHlsZXM9e2RpZmZTdHlsZXN9XG4gICAgICAgIGNvbXBhcmVNZXRob2Q9e0RpZmZNZXRob2RbZGlmZk1ldGhvZF19XG4gICAgICAgIG9sZFZhbHVlPXtjb21wYXJpc29uVG9SZW5kZXJ9XG4gICAgICAgIG5ld1ZhbHVlPXt0eXBlb2YgdmVyc2lvblRvUmVuZGVyICE9PSAndW5kZWZpbmVkJyA/IHZlcnNpb25Ub1JlbmRlciA6IHBsYWNlaG9sZGVyfVxuICAgICAgICBzcGxpdFZpZXdcbiAgICAgICAgaGlkZUxpbmVOdW1iZXJzXG4gICAgICAgIHNob3dEaWZmT25seT17ZmFsc2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsImdldE9wdGlvbnNUb1JlbmRlciIsInZhbHVlIiwib3B0aW9ucyIsImhhc01hbnkiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJ2YWwiLCJmaW5kIiwib3B0aW9uIiwiU3RyaW5nIiwiZ2V0VHJhbnNsYXRlZE9wdGlvbnMiLCJpMThuIiwiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbCIsImpvaW4iLCJTZWxlY3QiLCJmaWVsZCIsImxvY2FsZSIsInZlcnNpb24iLCJjb21wYXJpc29uIiwiZGlmZk1ldGhvZCIsInBsYWNlaG9sZGVyIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiY29tcGFyaXNvblRvUmVuZGVyIiwidmVyc2lvblRvUmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiTGFiZWwiLCJzcGFuIiwiUmVhY3REaWZmVmlld2VyIiwic3R5bGVzIiwiZGlmZlN0eWxlcyIsImNvbXBhcmVNZXRob2QiLCJEaWZmTWV0aG9kIiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsInNwbGl0VmlldyIsImhpZGVMaW5lTnVtYmVycyIsInNob3dEaWZmT25seSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEwREE7OztlQUFBOzs7NERBMURrQjtnRkFDMEI7NEJBQ2I7NERBRWI7c0JBQ1M7OEJBRUk7UUFHeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMscUJBQXFCLFNBQUNDLE9BQWVDLFNBQWlDQztJQUMxRSxJQUFJQSxXQUFXQyxNQUFNQyxPQUFPLENBQUNKLFFBQVE7UUFDbkMsT0FBT0EsTUFBTUssR0FBRyxDQUFDLFNBQUNDO21CQUFRTCxRQUFRTSxJQUFJLENBQUMsU0FBQ0M7dUJBQVcsQUFBQyxDQUFBLE9BQU9BLFdBQVcsV0FBV0EsU0FBU0EsT0FBT1IsS0FBSyxBQUFELE1BQU9NO2tCQUFRRyxPQUFPSDs7SUFDN0g7SUFDQSxPQUFPTCxRQUFRTSxJQUFJLENBQUMsU0FBQ0M7ZUFBVyxBQUFDLENBQUEsT0FBT0EsV0FBVyxXQUFXQSxTQUFTQSxPQUFPUixLQUFLLEFBQUQsTUFBT0E7VUFBVVMsT0FBT1Q7QUFDNUc7QUFFQSxJQUFNVSx1QkFBdUIsU0FBQ1QsU0FBNERVO0lBQ3hGLElBQUlSLE1BQU1DLE9BQU8sQ0FBQ0gsVUFBVTtRQUMxQixPQUFPQSxRQUFRSSxHQUFHLENBQUMsU0FBQ0c7bUJBQVksT0FBT0EsV0FBVyxXQUFXQSxTQUFTSSxJQUFBQSw4QkFBYyxFQUFDSixPQUFPSyxLQUFLLEVBQUVGO1dBQVFHLElBQUksQ0FBQztJQUNsSDtJQUNBLE9BQU8sT0FBT2IsWUFBWSxXQUFXQSxVQUFVVyxJQUFBQSw4QkFBYyxFQUFDWCxRQUFRWSxLQUFLLEVBQUVGO0FBQy9FO0FBRUEsSUFBTUksU0FBMEI7UUFBR0MsY0FBQUEsT0FBT0MsZUFBQUEsUUFBUUMsZ0JBQUFBLFNBQVNDLG1CQUFBQSxZQUFZQyxtQkFBQUE7SUFDckUsSUFBSUMsY0FBYztJQUNsQixJQUFvQkMsa0JBQUFBLElBQUFBLDRCQUFjLEVBQUMsWUFBM0JDLElBQVlELGdCQUFaQyxHQUFHWixPQUFTVyxnQkFBVFg7SUFFWCxJQUFJTyxZQUFZQyxZQUFZRSxjQUFjLEFBQUMsSUFBZ0IsT0FBYkUsRUFBRSxZQUFXO0lBRTNELElBQU1DLHFCQUFxQixPQUFPTCxlQUFlLGNBQWNULHFCQUFxQlgsbUJBQW1Cb0IsWUFBWUgsTUFBTWYsT0FBTyxFQUFFZSxNQUFNZCxPQUFPLEdBQUdTLFFBQVFVO0lBQzFKLElBQU1JLGtCQUFrQixPQUFPUCxZQUFZLGNBQWNSLHFCQUFxQlgsbUJBQW1CbUIsU0FBU0YsTUFBTWYsT0FBTyxFQUFFZSxNQUFNZCxPQUFPLEdBQUdTLFFBQVFVO0lBRWpKLHFCQUNFLDZCQUFDSztRQUFJQyxXQUFXN0I7cUJBQ2QsNkJBQUM4QixjQUFLLFFBQ0hYLHdCQUNDLDZCQUFDWTtRQUFLRixXQUFXLEFBQUMsR0FBWSxPQUFWN0IsV0FBVTtPQUFrQm1CLFNBRWpETCxJQUFBQSw4QkFBYyxFQUFDSSxNQUFNSCxLQUFLLEVBQUVGLHNCQUUvQiw2QkFBQ21CLGlDQUFlO1FBQ2RDLFFBQVFDLGtCQUFVO1FBQ2xCQyxlQUFlQyxvQ0FBVSxDQUFDZCxXQUFXO1FBQ3JDZSxVQUFVWDtRQUNWWSxVQUFVLE9BQU9YLG9CQUFvQixjQUFjQSxrQkFBa0JKO1FBQ3JFZ0IsV0FBQUE7UUFDQUMsaUJBQUFBO1FBQ0FDLGNBQWM7O0FBSXRCO0lBRUEsV0FBZXhCIn0=