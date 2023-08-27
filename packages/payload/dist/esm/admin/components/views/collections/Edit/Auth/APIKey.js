function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import useField from "../../../../forms/useField";
import Label from "../../../../forms/Label";
import CopyToClipboard from "../../../../elements/CopyToClipboard";
import { text } from "../../../../../../fields/validations";
import { useFormFields } from "../../../../forms/Form/context";
import GenerateConfirmation from "../../../../elements/GenerateConfirmation";
var path = "apiKey";
var baseClass = "api-key";
var APIKey = function(param) {
    var readOnly = param.readOnly;
    var _apiKey;
    var _useState = _sliced_to_array(useState(null), 2), initialAPIKey = _useState[0], setInitialAPIKey = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), highlightedField = _useState1[0], setHighlightedField = _useState1[1];
    var t = useTranslation().t;
    var apiKey = useFormFields(function(param) {
        var _param = _sliced_to_array(param, 1), fields = _param[0];
        return fields[path];
    });
    var validate = function(val) {
        return text(val, {
            minLength: 24,
            maxLength: 48,
            data: {},
            siblingData: {},
            t: t
        });
    };
    var apiKeyValue = (_apiKey = apiKey) === null || _apiKey === void 0 ? void 0 : _apiKey.value;
    var APIKeyLabel = useMemo(function() {
        return /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__label")
        }, /*#__PURE__*/ React.createElement("span", null, "API Key"), /*#__PURE__*/ React.createElement(CopyToClipboard, {
            value: apiKeyValue
        }));
    }, [
        apiKeyValue
    ]);
    var fieldType = useField({
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
    useEffect(function() {
        setInitialAPIKey(uuidv4());
    }, []);
    useEffect(function() {
        if (!apiKeyValue) {
            setValue(initialAPIKey);
        }
    }, [
        apiKeyValue,
        setValue,
        initialAPIKey
    ]);
    useEffect(function() {
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
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: classes
    }, /*#__PURE__*/ React.createElement(Label, {
        htmlFor: path,
        label: APIKeyLabel
    }), /*#__PURE__*/ React.createElement("input", {
        value: value || "",
        className: highlightedField ? "highlight" : undefined,
        disabled: true,
        type: "text",
        id: "apiKey",
        name: "apiKey"
    })), !readOnly && /*#__PURE__*/ React.createElement(GenerateConfirmation, {
        setKey: function() {
            return setValue(uuidv4());
        },
        highlightField: highlightField
    }));
};
export default APIKey;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvQXV0aC9BUElLZXkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL3VzZUZpZWxkJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9MYWJlbCc7XG5pbXBvcnQgQ29weVRvQ2xpcGJvYXJkIGZyb20gJy4uLy4uLy4uLy4uL2VsZW1lbnRzL0NvcHlUb0NsaXBib2FyZCc7XG5pbXBvcnQgeyB0ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IHVzZUZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuXG5pbXBvcnQgR2VuZXJhdGVDb25maXJtYXRpb24gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvR2VuZXJhdGVDb25maXJtYXRpb24nO1xuXG5jb25zdCBwYXRoID0gJ2FwaUtleSc7XG5jb25zdCBiYXNlQ2xhc3MgPSAnYXBpLWtleSc7XG5cbmNvbnN0IEFQSUtleTogUmVhY3QuRkM8e3JlYWRPbmx5PzogYm9vbGVhbn0+ID0gKHsgcmVhZE9ubHkgfSkgPT4ge1xuICBjb25zdCBbaW5pdGlhbEFQSUtleSwgc2V0SW5pdGlhbEFQSUtleV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hpZ2hsaWdodGVkRmllbGQsIHNldEhpZ2hsaWdodGVkRmllbGRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgYXBpS2V5ID0gdXNlRm9ybUZpZWxkcygoW2ZpZWxkc10pID0+IGZpZWxkc1twYXRoXSk7XG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbCkgPT4gdGV4dCh2YWwsIHsgbWluTGVuZ3RoOiAyNCwgbWF4TGVuZ3RoOiA0OCwgZGF0YToge30sIHNpYmxpbmdEYXRhOiB7fSwgdCB9KTtcblxuICBjb25zdCBhcGlLZXlWYWx1ZSA9IGFwaUtleT8udmFsdWU7XG5cbiAgY29uc3QgQVBJS2V5TGFiZWwgPSB1c2VNZW1vKCgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT5cbiAgICAgIDxzcGFuPlxuICAgICAgICBBUEkgS2V5XG4gICAgICA8L3NwYW4+XG4gICAgICA8Q29weVRvQ2xpcGJvYXJkIHZhbHVlPXthcGlLZXlWYWx1ZSBhcyBzdHJpbmd9IC8+XG4gICAgPC9kaXY+XG4gICksIFthcGlLZXlWYWx1ZV0pO1xuXG4gIGNvbnN0IGZpZWxkVHlwZSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoOiAnYXBpS2V5JyxcbiAgICB2YWxpZGF0ZSxcbiAgfSk7XG5cbiAgY29uc3QgaGlnaGxpZ2h0RmllbGQgPSAoKSA9PiB7XG4gICAgaWYgKGhpZ2hsaWdodGVkRmllbGQpIHtcbiAgICAgIHNldEhpZ2hsaWdodGVkRmllbGQoZmFsc2UpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEhpZ2hsaWdodGVkRmllbGQodHJ1ZSk7XG4gICAgfSwgMSk7XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNldFZhbHVlLFxuICB9ID0gZmllbGRUeXBlO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW5pdGlhbEFQSUtleSh1dWlkdjQoKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXBpS2V5VmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKGluaXRpYWxBUElLZXkpO1xuICAgIH1cbiAgfSwgW2FwaUtleVZhbHVlLCBzZXRWYWx1ZSwgaW5pdGlhbEFQSUtleV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhpZ2hsaWdodGVkRmllbGQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRIaWdobGlnaHRlZEZpZWxkKGZhbHNlKTtcbiAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG4gIH0sIFtoaWdobGlnaHRlZEZpZWxkXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgJ2FwaS1rZXknLFxuICAgICdyZWFkLW9ubHknLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIGh0bWxGb3I9e3BhdGh9XG4gICAgICAgICAgbGFiZWw9e0FQSUtleUxhYmVsfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17dmFsdWUgYXMgc3RyaW5nIHx8ICcnfVxuICAgICAgICAgIGNsYXNzTmFtZT17aGlnaGxpZ2h0ZWRGaWVsZCA/ICdoaWdobGlnaHQnIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiYXBpS2V5XCJcbiAgICAgICAgICBuYW1lPVwiYXBpS2V5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgIDxHZW5lcmF0ZUNvbmZpcm1hdGlvblxuICAgICAgICAgIHNldEtleT17KCkgPT4gc2V0VmFsdWUodXVpZHY0KCkpfVxuICAgICAgICAgIGhpZ2hsaWdodEZpZWxkPXtoaWdobGlnaHRGaWVsZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFQSUtleTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInY0IiwidXVpZHY0IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VGaWVsZCIsIkxhYmVsIiwiQ29weVRvQ2xpcGJvYXJkIiwidGV4dCIsInVzZUZvcm1GaWVsZHMiLCJHZW5lcmF0ZUNvbmZpcm1hdGlvbiIsInBhdGgiLCJiYXNlQ2xhc3MiLCJBUElLZXkiLCJyZWFkT25seSIsImFwaUtleSIsImluaXRpYWxBUElLZXkiLCJzZXRJbml0aWFsQVBJS2V5IiwiaGlnaGxpZ2h0ZWRGaWVsZCIsInNldEhpZ2hsaWdodGVkRmllbGQiLCJ0IiwiZmllbGRzIiwidmFsaWRhdGUiLCJ2YWwiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJkYXRhIiwic2libGluZ0RhdGEiLCJhcGlLZXlWYWx1ZSIsInZhbHVlIiwiQVBJS2V5TGFiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiZmllbGRUeXBlIiwiaGlnaGxpZ2h0RmllbGQiLCJzZXRUaW1lb3V0Iiwic2V0VmFsdWUiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJGcmFnbWVudCIsImh0bWxGb3IiLCJsYWJlbCIsImlucHV0IiwidW5kZWZpbmVkIiwiZGlzYWJsZWQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwic2V0S2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsUUFBUSxRQUFRO0FBQzVELFNBQVNDLE1BQU1DLE1BQU0sUUFBUSxPQUFPO0FBQ3BDLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsT0FBT0MsY0FBYyw2QkFBNkI7QUFDbEQsT0FBT0MsV0FBVywwQkFBMEI7QUFDNUMsT0FBT0MscUJBQXFCLHVDQUF1QztBQUNuRSxTQUFTQyxJQUFJLFFBQVEsdUNBQXVDO0FBQzVELFNBQVNDLGFBQWEsUUFBUSxpQ0FBaUM7QUFFL0QsT0FBT0MsMEJBQTBCLDRDQUE0QztBQUU3RSxJQUFNQyxPQUFPO0FBQ2IsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxTQUF5QztRQUFHQyxpQkFBQUE7UUFRNUJDO0lBUHBCLElBQTBDZiw2QkFBQUEsU0FBUyxXQUE1Q2dCLGdCQUFtQ2hCLGNBQXBCaUIsbUJBQW9CakI7SUFDMUMsSUFBZ0RBLDhCQUFBQSxTQUFTLFlBQWxEa0IsbUJBQXlDbEIsZUFBdkJtQixzQkFBdUJuQjtJQUNoRCxJQUFNLEFBQUVvQixJQUFNaEIsaUJBQU5nQjtJQUVSLElBQU1MLFNBQVNOLGNBQWM7aURBQUVZO2VBQVlBLE1BQU0sQ0FBQ1YsS0FBSzs7SUFDdkQsSUFBTVcsV0FBVyxTQUFDQztlQUFRZixLQUFLZSxLQUFLO1lBQUVDLFdBQVc7WUFBSUMsV0FBVztZQUFJQyxNQUFNLENBQUM7WUFBR0MsYUFBYSxDQUFDO1lBQUdQLEdBQUFBO1FBQUU7O0lBRWpHLElBQU1RLGVBQWNiLFVBQUFBLG9CQUFBQSw4QkFBQUEsUUFBUWMsS0FBSztJQUVqQyxJQUFNQyxjQUFjL0IsUUFBUTs2QkFDMUIsb0JBQUNnQztZQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWcEIsV0FBVTt5QkFDM0Isb0JBQUNxQixjQUFLLDBCQUdOLG9CQUFDMUI7WUFBZ0JzQixPQUFPRDs7T0FFekI7UUFBQ0E7S0FBWTtJQUVoQixJQUFNTSxZQUFZN0IsU0FBUztRQUN6Qk0sTUFBTTtRQUNOVyxVQUFBQTtJQUNGO0lBRUEsSUFBTWEsaUJBQWlCO1FBQ3JCLElBQUlqQixrQkFBa0I7WUFDcEJDLG9CQUFvQjtRQUN0QjtRQUNBaUIsV0FBVztZQUNUakIsb0JBQW9CO1FBQ3RCLEdBQUc7SUFDTDtJQUVBLElBQ0VVLFFBRUVLLFVBRkZMLE9BQ0FRLFdBQ0VILFVBREZHO0lBR0ZwQyxVQUFVO1FBQ1JnQixpQkFBaUJkO0lBQ25CLEdBQUcsRUFBRTtJQUVMRixVQUFVO1FBQ1IsSUFBSSxDQUFDMkIsYUFBYTtZQUNoQlMsU0FBU3JCO1FBQ1g7SUFDRixHQUFHO1FBQUNZO1FBQWFTO1FBQVVyQjtLQUFjO0lBRXpDZixVQUFVO1FBQ1IsSUFBSWlCLGtCQUFrQjtZQUNwQmtCLFdBQVc7Z0JBQ1RqQixvQkFBb0I7WUFDdEIsR0FBRztRQUNMO0lBQ0YsR0FBRztRQUFDRDtLQUFpQjtJQUVyQixJQUFNb0IsVUFBVTtRQUNkO1FBQ0E7UUFDQTtLQUNELENBQUNDLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLHFCQUNFLG9CQUFDM0MsTUFBTTRDLFFBQVEsc0JBQ2Isb0JBQUNYO1FBQUlDLFdBQVdNO3FCQUNkLG9CQUFDaEM7UUFDQ3FDLFNBQVNoQztRQUNUaUMsT0FBT2Q7c0JBRVQsb0JBQUNlO1FBQ0NoQixPQUFPQSxTQUFtQjtRQUMxQkcsV0FBV2QsbUJBQW1CLGNBQWM0QjtRQUM1Q0MsVUFBQUE7UUFDQUMsTUFBSztRQUNMQyxJQUFHO1FBQ0hDLE1BQUs7U0FHUixDQUFDcEMsMEJBQ0Esb0JBQUNKO1FBQ0N5QyxRQUFRO21CQUFNZCxTQUFTbEM7O1FBQ3ZCZ0MsZ0JBQWdCQTs7QUFLMUI7QUFFQSxlQUFldEIsT0FBTyJ9