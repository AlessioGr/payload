import React from "react";
import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";
import { useTranslation } from "react-i18next";
import Label from "../../Label";
import { diffStyles } from "../styles";
import { getTranslation } from "../../../../../../../utilities/getTranslation";
import "./index.scss";
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
            return typeof option === "string" ? option : getTranslation(option.label, i18n);
        }).join(", ");
    }
    return typeof options === "string" ? options : getTranslation(options.label, i18n);
};
var Select = function(param) {
    var field = param.field, locale = param.locale, version = param.version, comparison = param.comparison, diffMethod = param.diffMethod;
    var placeholder = "";
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    if (version === comparison) placeholder = "[".concat(t("noValue"), "]");
    var comparisonToRender = typeof comparison !== "undefined" ? getTranslatedOptions(getOptionsToRender(comparison, field.options, field.hasMany), i18n) : placeholder;
    var versionToRender = typeof version !== "undefined" ? getTranslatedOptions(getOptionsToRender(version, field.options, field.hasMany), i18n) : placeholder;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Label, null, locale && /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__locale-label")
    }, locale), getTranslation(field.label, i18n)), /*#__PURE__*/ React.createElement(ReactDiffViewer, {
        styles: diffStyles,
        compareMethod: DiffMethod[diffMethod],
        oldValue: comparisonToRender,
        newValue: typeof versionToRender !== "undefined" ? versionToRender : placeholder,
        splitView: true,
        hideLineNumbers: true,
        showDiffOnly: false
    }));
};
export default Select;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9TZWxlY3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REaWZmVmlld2VyLCB7IERpZmZNZXRob2QgfSBmcm9tICdyZWFjdC1kaWZmLXZpZXdlci1jb250aW51ZWQnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB0eXBlIHsgaTE4biBhcyBJaTE4biB9IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJztcbmltcG9ydCB7IGRpZmZTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBPcHRpb25PYmplY3QsIFNlbGVjdEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3NlbGVjdC1kaWZmJztcblxuY29uc3QgZ2V0T3B0aW9uc1RvUmVuZGVyID0gKHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM6IFNlbGVjdEZpZWxkWydvcHRpb25zJ10sIGhhc01hbnk6IGJvb2xlYW4pOiBzdHJpbmcgfCBPcHRpb25PYmplY3QgfCAoT3B0aW9uT2JqZWN0IHwgc3RyaW5nKVtdID0+IHtcbiAgaWYgKGhhc01hbnkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUubWFwKCh2YWwpID0+IG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgPyBvcHRpb24gOiBvcHRpb24udmFsdWUpID09PSB2YWwpIHx8IFN0cmluZyh2YWwpKTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucy5maW5kKChvcHRpb24pID0+ICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyA/IG9wdGlvbiA6IG9wdGlvbi52YWx1ZSkgPT09IHZhbHVlKSB8fCBTdHJpbmcodmFsdWUpO1xufTtcblxuY29uc3QgZ2V0VHJhbnNsYXRlZE9wdGlvbnMgPSAob3B0aW9uczogc3RyaW5nIHwgT3B0aW9uT2JqZWN0IHwgKE9wdGlvbk9iamVjdCB8IHN0cmluZylbXSwgaTE4bjogSWkxOG4pOiBzdHJpbmcgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgIHJldHVybiBvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgPyBvcHRpb24gOiBnZXRUcmFuc2xhdGlvbihvcHRpb24ubGFiZWwsIGkxOG4pKSkuam9pbignLCAnKTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnID8gb3B0aW9ucyA6IGdldFRyYW5zbGF0aW9uKG9wdGlvbnMubGFiZWwsIGkxOG4pO1xufTtcblxuY29uc3QgU2VsZWN0OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBmaWVsZCwgbG9jYWxlLCB2ZXJzaW9uLCBjb21wYXJpc29uLCBkaWZmTWV0aG9kIH0pID0+IHtcbiAgbGV0IHBsYWNlaG9sZGVyID0gJyc7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICBpZiAodmVyc2lvbiA9PT0gY29tcGFyaXNvbikgcGxhY2Vob2xkZXIgPSBgWyR7dCgnbm9WYWx1ZScpfV1gO1xuXG4gIGNvbnN0IGNvbXBhcmlzb25Ub1JlbmRlciA9IHR5cGVvZiBjb21wYXJpc29uICE9PSAndW5kZWZpbmVkJyA/IGdldFRyYW5zbGF0ZWRPcHRpb25zKGdldE9wdGlvbnNUb1JlbmRlcihjb21wYXJpc29uLCBmaWVsZC5vcHRpb25zLCBmaWVsZC5oYXNNYW55KSwgaTE4bikgOiBwbGFjZWhvbGRlcjtcbiAgY29uc3QgdmVyc2lvblRvUmVuZGVyID0gdHlwZW9mIHZlcnNpb24gIT09ICd1bmRlZmluZWQnID8gZ2V0VHJhbnNsYXRlZE9wdGlvbnMoZ2V0T3B0aW9uc1RvUmVuZGVyKHZlcnNpb24sIGZpZWxkLm9wdGlvbnMsIGZpZWxkLmhhc01hbnkpLCBpMThuKSA6IHBsYWNlaG9sZGVyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8TGFiZWw+XG4gICAgICAgIHtsb2NhbGUgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbG9jYWxlLWxhYmVsYH0+e2xvY2FsZX08L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHtnZXRUcmFuc2xhdGlvbihmaWVsZC5sYWJlbCwgaTE4bil9XG4gICAgICA8L0xhYmVsPlxuICAgICAgPFJlYWN0RGlmZlZpZXdlclxuICAgICAgICBzdHlsZXM9e2RpZmZTdHlsZXN9XG4gICAgICAgIGNvbXBhcmVNZXRob2Q9e0RpZmZNZXRob2RbZGlmZk1ldGhvZF19XG4gICAgICAgIG9sZFZhbHVlPXtjb21wYXJpc29uVG9SZW5kZXJ9XG4gICAgICAgIG5ld1ZhbHVlPXt0eXBlb2YgdmVyc2lvblRvUmVuZGVyICE9PSAndW5kZWZpbmVkJyA/IHZlcnNpb25Ub1JlbmRlciA6IHBsYWNlaG9sZGVyfVxuICAgICAgICBzcGxpdFZpZXdcbiAgICAgICAgaGlkZUxpbmVOdW1iZXJzXG4gICAgICAgIHNob3dEaWZmT25seT17ZmFsc2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3REaWZmVmlld2VyIiwiRGlmZk1ldGhvZCIsInVzZVRyYW5zbGF0aW9uIiwiTGFiZWwiLCJkaWZmU3R5bGVzIiwiZ2V0VHJhbnNsYXRpb24iLCJiYXNlQ2xhc3MiLCJnZXRPcHRpb25zVG9SZW5kZXIiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJoYXNNYW55IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwidmFsIiwiZmluZCIsIm9wdGlvbiIsIlN0cmluZyIsImdldFRyYW5zbGF0ZWRPcHRpb25zIiwiaTE4biIsImxhYmVsIiwiam9pbiIsIlNlbGVjdCIsImZpZWxkIiwibG9jYWxlIiwidmVyc2lvbiIsImNvbXBhcmlzb24iLCJkaWZmTWV0aG9kIiwicGxhY2Vob2xkZXIiLCJ0IiwiY29tcGFyaXNvblRvUmVuZGVyIiwidmVyc2lvblRvUmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInN0eWxlcyIsImNvbXBhcmVNZXRob2QiLCJvbGRWYWx1ZSIsIm5ld1ZhbHVlIiwic3BsaXRWaWV3IiwiaGlkZUxpbmVOdW1iZXJzIiwic2hvd0RpZmZPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsT0FBT0MsbUJBQW1CQyxVQUFVLFFBQVEsOEJBQThCO0FBQzFFLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFFL0MsT0FBT0MsV0FBVyxjQUFjO0FBQ2hDLFNBQVNDLFVBQVUsUUFBUSxZQUFZO0FBRXZDLFNBQVNDLGNBQWMsUUFBUSxnREFBZ0Q7QUFHL0UsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMscUJBQXFCLFNBQUNDLE9BQWVDLFNBQWlDQztJQUMxRSxJQUFJQSxXQUFXQyxNQUFNQyxPQUFPLENBQUNKLFFBQVE7UUFDbkMsT0FBT0EsTUFBTUssR0FBRyxDQUFDLFNBQUNDO21CQUFRTCxRQUFRTSxJQUFJLENBQUMsU0FBQ0M7dUJBQVcsQUFBQyxDQUFBLE9BQU9BLFdBQVcsV0FBV0EsU0FBU0EsT0FBT1IsS0FBSyxBQUFELE1BQU9NO2tCQUFRRyxPQUFPSDs7SUFDN0g7SUFDQSxPQUFPTCxRQUFRTSxJQUFJLENBQUMsU0FBQ0M7ZUFBVyxBQUFDLENBQUEsT0FBT0EsV0FBVyxXQUFXQSxTQUFTQSxPQUFPUixLQUFLLEFBQUQsTUFBT0E7VUFBVVMsT0FBT1Q7QUFDNUc7QUFFQSxJQUFNVSx1QkFBdUIsU0FBQ1QsU0FBNERVO0lBQ3hGLElBQUlSLE1BQU1DLE9BQU8sQ0FBQ0gsVUFBVTtRQUMxQixPQUFPQSxRQUFRSSxHQUFHLENBQUMsU0FBQ0c7bUJBQVksT0FBT0EsV0FBVyxXQUFXQSxTQUFTWCxlQUFlVyxPQUFPSSxLQUFLLEVBQUVEO1dBQVFFLElBQUksQ0FBQztJQUNsSDtJQUNBLE9BQU8sT0FBT1osWUFBWSxXQUFXQSxVQUFVSixlQUFlSSxRQUFRVyxLQUFLLEVBQUVEO0FBQy9FO0FBRUEsSUFBTUcsU0FBMEI7UUFBR0MsY0FBQUEsT0FBT0MsZUFBQUEsUUFBUUMsZ0JBQUFBLFNBQVNDLG1CQUFBQSxZQUFZQyxtQkFBQUE7SUFDckUsSUFBSUMsY0FBYztJQUNsQixJQUFvQjFCLGtCQUFBQSxlQUFlLFlBQTNCMkIsSUFBWTNCLGdCQUFaMkIsR0FBR1YsT0FBU2pCLGdCQUFUaUI7SUFFWCxJQUFJTSxZQUFZQyxZQUFZRSxjQUFjLEFBQUMsSUFBZ0IsT0FBYkMsRUFBRSxZQUFXO0lBRTNELElBQU1DLHFCQUFxQixPQUFPSixlQUFlLGNBQWNSLHFCQUFxQlgsbUJBQW1CbUIsWUFBWUgsTUFBTWQsT0FBTyxFQUFFYyxNQUFNYixPQUFPLEdBQUdTLFFBQVFTO0lBQzFKLElBQU1HLGtCQUFrQixPQUFPTixZQUFZLGNBQWNQLHFCQUFxQlgsbUJBQW1Ca0IsU0FBU0YsTUFBTWQsT0FBTyxFQUFFYyxNQUFNYixPQUFPLEdBQUdTLFFBQVFTO0lBRWpKLHFCQUNFLG9CQUFDSTtRQUFJQyxXQUFXM0I7cUJBQ2Qsb0JBQUNILGFBQ0VxQix3QkFDQyxvQkFBQ1U7UUFBS0QsV0FBVyxBQUFDLEdBQVksT0FBVjNCLFdBQVU7T0FBa0JrQixTQUVqRG5CLGVBQWVrQixNQUFNSCxLQUFLLEVBQUVELHNCQUUvQixvQkFBQ25CO1FBQ0NtQyxRQUFRL0I7UUFDUmdDLGVBQWVuQyxVQUFVLENBQUMwQixXQUFXO1FBQ3JDVSxVQUFVUDtRQUNWUSxVQUFVLE9BQU9QLG9CQUFvQixjQUFjQSxrQkFBa0JIO1FBQ3JFVyxXQUFBQTtRQUNBQyxpQkFBQUE7UUFDQUMsY0FBYzs7QUFJdEI7QUFFQSxlQUFlbkIsT0FBTyJ9