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
var _reactdatepicker = /*#__PURE__*/ _interop_require_wildcard(require("react-datepicker"));
var _locale = /*#__PURE__*/ _interop_require_wildcard(require("date-fns/locale"));
var _reacti18next = require("react-i18next");
var _Calendar = /*#__PURE__*/ _interop_require_default(require("../../icons/Calendar"));
var _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
var _getSupportedDateLocale = require("../../../utilities/formatDate/getSupportedDateLocale");
require("react-datepicker/dist/react-datepicker.css");
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
var baseClass = "date-time-picker";
var DateTime = function(props) {
    var value = props.value, onChange = props.onChange, customDisplayFormat = props.displayFormat, _props_pickerAppearance = props.pickerAppearance, pickerAppearance = _props_pickerAppearance === void 0 ? "default" : _props_pickerAppearance, minDate = props.minDate, maxDate = props.maxDate, _props_monthsToShow = props.monthsToShow, monthsToShow = _props_monthsToShow === void 0 ? 1 : _props_monthsToShow, minTime = props.minTime, maxTime = props.maxTime, _props_timeIntervals = props.timeIntervals, timeIntervals = _props_timeIntervals === void 0 ? 30 : _props_timeIntervals, _props_timeFormat = props.timeFormat, timeFormat = _props_timeFormat === void 0 ? "h:mm aa" : _props_timeFormat, readOnly = props.readOnly, placeholderText = props.placeholder;
    // Use the user's AdminUI language preference for the locale
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var locale = (0, _getSupportedDateLocale.getSupportedDateLocale)(i18n.language);
    try {
        (0, _reactdatepicker.registerLocale)(locale, _locale[locale]);
    } catch (e) {
        console.warn("Could not find DatePicker locale for ".concat(locale));
    }
    var dateFormat = customDisplayFormat;
    if (!customDisplayFormat) {
        // when no displayFormat is provided, determine format based on the picker appearance
        if (pickerAppearance === "default") dateFormat = "MM/dd/yyyy";
        else if (pickerAppearance === "dayAndTime") dateFormat = "MMM d, yyy h:mm a";
        else if (pickerAppearance === "timeOnly") dateFormat = "h:mm a";
        else if (pickerAppearance === "dayOnly") dateFormat = "MMM dd";
        else if (pickerAppearance === "monthOnly") dateFormat = "MMMM";
    }
    var dateTimePickerProps = {
        minDate: minDate,
        maxDate: maxDate,
        dateFormat: dateFormat,
        monthsShown: Math.min(2, monthsToShow),
        showTimeSelect: pickerAppearance === "dayAndTime" || pickerAppearance === "timeOnly",
        minTime: minTime,
        maxTime: maxTime,
        timeIntervals: timeIntervals,
        timeFormat: timeFormat,
        placeholderText: placeholderText,
        disabled: readOnly,
        onChange: onChange,
        showPopperArrow: false,
        selected: value && new Date(value),
        customInputRef: "ref",
        showMonthYearPicker: pickerAppearance === "monthOnly"
    };
    var classes = [
        baseClass,
        "".concat(baseClass, "__appearance--").concat(pickerAppearance)
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__icon-wrap")
    }, dateTimePickerProps.selected && /*#__PURE__*/ _react.default.createElement("button", {
        type: "button",
        className: "".concat(baseClass, "__clear-button"),
        onClick: function() {
            return onChange(null);
        }
    }, /*#__PURE__*/ _react.default.createElement(_X.default, null)), /*#__PURE__*/ _react.default.createElement(_Calendar.default, null)), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__input-wrapper")
    }, /*#__PURE__*/ _react.default.createElement(_reactdatepicker.default, _object_spread_props(_object_spread({}, dateTimePickerProps), {
        onChange: function(val) {
            return onChange(val);
        },
        locale: locale,
        popperModifiers: [
            {
                name: "preventOverflow",
                enabled: true
            }
        ],
        showMonthDropdown: true,
        showYearDropdown: true,
        dropdownMode: "select"
    }))));
};
var _default = DateTime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RhdGVQaWNrZXIvRGF0ZVBpY2tlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXRlUGlja2VyLCB7IHJlZ2lzdGVyTG9jYWxlIH0gZnJvbSAncmVhY3QtZGF0ZXBpY2tlcic7XG5pbXBvcnQgKiBhcyBMb2NhbGVzIGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IENhbGVuZGFySWNvbiBmcm9tICcuLi8uLi9pY29ucy9DYWxlbmRhcic7XG5pbXBvcnQgWEljb24gZnJvbSAnLi4vLi4vaWNvbnMvWCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3VwcG9ydGVkRGF0ZUxvY2FsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9mb3JtYXREYXRlL2dldFN1cHBvcnRlZERhdGVMb2NhbGUnO1xuXG5pbXBvcnQgJ3JlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdkYXRlLXRpbWUtcGlja2VyJztcblxuY29uc3QgRGF0ZVRpbWU6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gICAgZGlzcGxheUZvcm1hdDogY3VzdG9tRGlzcGxheUZvcm1hdCxcbiAgICBwaWNrZXJBcHBlYXJhbmNlID0gJ2RlZmF1bHQnLFxuICAgIG1pbkRhdGUsXG4gICAgbWF4RGF0ZSxcbiAgICBtb250aHNUb1Nob3cgPSAxLFxuICAgIG1pblRpbWUsXG4gICAgbWF4VGltZSxcbiAgICB0aW1lSW50ZXJ2YWxzID0gMzAsXG4gICAgdGltZUZvcm1hdCA9ICdoOm1tIGFhJyxcbiAgICByZWFkT25seSxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJUZXh0LFxuICB9ID0gcHJvcHM7XG5cbiAgLy8gVXNlIHRoZSB1c2VyJ3MgQWRtaW5VSSBsYW5ndWFnZSBwcmVmZXJlbmNlIGZvciB0aGUgbG9jYWxlXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgbG9jYWxlID0gZ2V0U3VwcG9ydGVkRGF0ZUxvY2FsZShpMThuLmxhbmd1YWdlKTtcblxuICB0cnkge1xuICAgIHJlZ2lzdGVyTG9jYWxlKGxvY2FsZSwgTG9jYWxlc1tsb2NhbGVdKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUud2FybihgQ291bGQgbm90IGZpbmQgRGF0ZVBpY2tlciBsb2NhbGUgZm9yICR7bG9jYWxlfWApO1xuICB9XG5cbiAgbGV0IGRhdGVGb3JtYXQgPSBjdXN0b21EaXNwbGF5Rm9ybWF0O1xuXG4gIGlmICghY3VzdG9tRGlzcGxheUZvcm1hdCkge1xuICAgIC8vIHdoZW4gbm8gZGlzcGxheUZvcm1hdCBpcyBwcm92aWRlZCwgZGV0ZXJtaW5lIGZvcm1hdCBiYXNlZCBvbiB0aGUgcGlja2VyIGFwcGVhcmFuY2VcbiAgICBpZiAocGlja2VyQXBwZWFyYW5jZSA9PT0gJ2RlZmF1bHQnKSBkYXRlRm9ybWF0ID0gJ01NL2RkL3l5eXknO1xuICAgIGVsc2UgaWYgKHBpY2tlckFwcGVhcmFuY2UgPT09ICdkYXlBbmRUaW1lJykgZGF0ZUZvcm1hdCA9ICdNTU0gZCwgeXl5IGg6bW0gYSc7XG4gICAgZWxzZSBpZiAocGlja2VyQXBwZWFyYW5jZSA9PT0gJ3RpbWVPbmx5JykgZGF0ZUZvcm1hdCA9ICdoOm1tIGEnO1xuICAgIGVsc2UgaWYgKHBpY2tlckFwcGVhcmFuY2UgPT09ICdkYXlPbmx5JykgZGF0ZUZvcm1hdCA9ICdNTU0gZGQnO1xuICAgIGVsc2UgaWYgKHBpY2tlckFwcGVhcmFuY2UgPT09ICdtb250aE9ubHknKSBkYXRlRm9ybWF0ID0gJ01NTU0nO1xuICB9XG5cbiAgY29uc3QgZGF0ZVRpbWVQaWNrZXJQcm9wcyA9IHtcbiAgICBtaW5EYXRlLFxuICAgIG1heERhdGUsXG4gICAgZGF0ZUZvcm1hdCxcbiAgICBtb250aHNTaG93bjogTWF0aC5taW4oMiwgbW9udGhzVG9TaG93KSxcbiAgICBzaG93VGltZVNlbGVjdDogcGlja2VyQXBwZWFyYW5jZSA9PT0gJ2RheUFuZFRpbWUnIHx8IHBpY2tlckFwcGVhcmFuY2UgPT09ICd0aW1lT25seScsXG4gICAgbWluVGltZSxcbiAgICBtYXhUaW1lLFxuICAgIHRpbWVJbnRlcnZhbHMsXG4gICAgdGltZUZvcm1hdCxcbiAgICBwbGFjZWhvbGRlclRleHQsXG4gICAgZGlzYWJsZWQ6IHJlYWRPbmx5LFxuICAgIG9uQ2hhbmdlLFxuICAgIHNob3dQb3BwZXJBcnJvdzogZmFsc2UsXG4gICAgc2VsZWN0ZWQ6IHZhbHVlICYmIG5ldyBEYXRlKHZhbHVlKSxcbiAgICBjdXN0b21JbnB1dFJlZjogJ3JlZicsXG4gICAgc2hvd01vbnRoWWVhclBpY2tlcjogcGlja2VyQXBwZWFyYW5jZSA9PT0gJ21vbnRoT25seScsXG4gIH07XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgYCR7YmFzZUNsYXNzfV9fYXBwZWFyYW5jZS0tJHtwaWNrZXJBcHBlYXJhbmNlfWAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pY29uLXdyYXBgfT5cbiAgICAgICAge2RhdGVUaW1lUGlja2VyUHJvcHMuc2VsZWN0ZWQgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jbGVhci1idXR0b25gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UobnVsbCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFhJY29uIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxDYWxlbmRhckljb24gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2lucHV0LXdyYXBwZXJgfT5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICB7Li4uZGF0ZVRpbWVQaWNrZXJQcm9wc31cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gb25DaGFuZ2UodmFsIGFzIERhdGUpfVxuICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgIHBvcHBlck1vZGlmaWVycz17W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXX1cbiAgICAgICAgICBzaG93TW9udGhEcm9wZG93blxuICAgICAgICAgIHNob3dZZWFyRHJvcGRvd25cbiAgICAgICAgICBkcm9wZG93bk1vZGU9XCJzZWxlY3RcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZTtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEYXRlVGltZSIsInByb3BzIiwidmFsdWUiLCJvbkNoYW5nZSIsImRpc3BsYXlGb3JtYXQiLCJjdXN0b21EaXNwbGF5Rm9ybWF0IiwicGlja2VyQXBwZWFyYW5jZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwibW9udGhzVG9TaG93IiwibWluVGltZSIsIm1heFRpbWUiLCJ0aW1lSW50ZXJ2YWxzIiwidGltZUZvcm1hdCIsInJlYWRPbmx5IiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclRleHQiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJsb2NhbGUiLCJnZXRTdXBwb3J0ZWREYXRlTG9jYWxlIiwibGFuZ3VhZ2UiLCJyZWdpc3RlckxvY2FsZSIsIkxvY2FsZXMiLCJlIiwiY29uc29sZSIsIndhcm4iLCJkYXRlRm9ybWF0IiwiZGF0ZVRpbWVQaWNrZXJQcm9wcyIsIm1vbnRoc1Nob3duIiwiTWF0aCIsIm1pbiIsInNob3dUaW1lU2VsZWN0IiwiZGlzYWJsZWQiLCJzaG93UG9wcGVyQXJyb3ciLCJzZWxlY3RlZCIsIkRhdGUiLCJjdXN0b21JbnB1dFJlZiIsInNob3dNb250aFllYXJQaWNrZXIiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsIlhJY29uIiwiQ2FsZW5kYXJJY29uIiwiRGF0ZVBpY2tlciIsInZhbCIsInBvcHBlck1vZGlmaWVycyIsIm5hbWUiLCJlbmFibGVkIiwic2hvd01vbnRoRHJvcGRvd24iLCJzaG93WWVhckRyb3Bkb3duIiwiZHJvcGRvd25Nb2RlIl0sIm1hcHBpbmdzIjoiOzs7OytCQThHQTs7O2VBQUE7Ozs0REE5R2tCO3VFQUN5Qjs4REFDbEI7NEJBQ007K0RBQ047d0RBQ1A7c0NBRXFCO1FBRWhDO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLFdBQTRCLFNBQUNDO0lBQ2pDLElBQ0VDLFFBYUVELE1BYkZDLE9BQ0FDLFdBWUVGLE1BWkZFLFVBQ0FDLEFBQWVDLHNCQVdiSixNQVhGRyx5Q0FXRUgsTUFWRkssa0JBQUFBLHdEQUFtQixxQ0FDbkJDLFVBU0VOLE1BVEZNLFNBQ0FDLFVBUUVQLE1BUkZPLCtCQVFFUCxNQVBGUSxjQUFBQSxnREFBZSx5QkFDZkMsVUFNRVQsTUFORlMsU0FDQUMsVUFLRVYsTUFMRlUsZ0NBS0VWLE1BSkZXLGVBQUFBLGtEQUFnQiwrQ0FJZFgsTUFIRlksWUFBQUEsNENBQWEsK0JBQ2JDLFdBRUViLE1BRkZhLFVBQ0FDLEFBQWFDLGtCQUNYZixNQURGYztJQUdGLDREQUE0RDtJQUM1RCxJQUFNLEFBQUVFLE9BQVNDLElBQUFBLDRCQUFjLElBQXZCRDtJQUNSLElBQU1FLFNBQVNDLElBQUFBLDhDQUFzQixFQUFDSCxLQUFLSSxRQUFRO0lBRW5ELElBQUk7UUFDRkMsSUFBQUEsK0JBQWMsRUFBQ0gsUUFBUUksT0FBTyxDQUFDSixPQUFPO0lBQ3hDLEVBQUUsT0FBT0ssR0FBRztRQUNWQyxRQUFRQyxJQUFJLENBQUMsQUFBQyx3Q0FBOEMsT0FBUFA7SUFDdkQ7SUFFQSxJQUFJUSxhQUFhdEI7SUFFakIsSUFBSSxDQUFDQSxxQkFBcUI7UUFDeEIscUZBQXFGO1FBQ3JGLElBQUlDLHFCQUFxQixXQUFXcUIsYUFBYTthQUM1QyxJQUFJckIscUJBQXFCLGNBQWNxQixhQUFhO2FBQ3BELElBQUlyQixxQkFBcUIsWUFBWXFCLGFBQWE7YUFDbEQsSUFBSXJCLHFCQUFxQixXQUFXcUIsYUFBYTthQUNqRCxJQUFJckIscUJBQXFCLGFBQWFxQixhQUFhO0lBQzFEO0lBRUEsSUFBTUMsc0JBQXNCO1FBQzFCckIsU0FBQUE7UUFDQUMsU0FBQUE7UUFDQW1CLFlBQUFBO1FBQ0FFLGFBQWFDLEtBQUtDLEdBQUcsQ0FBQyxHQUFHdEI7UUFDekJ1QixnQkFBZ0IxQixxQkFBcUIsZ0JBQWdCQSxxQkFBcUI7UUFDMUVJLFNBQUFBO1FBQ0FDLFNBQUFBO1FBQ0FDLGVBQUFBO1FBQ0FDLFlBQUFBO1FBQ0FHLGlCQUFBQTtRQUNBaUIsVUFBVW5CO1FBQ1ZYLFVBQUFBO1FBQ0ErQixpQkFBaUI7UUFDakJDLFVBQVVqQyxTQUFTLElBQUlrQyxLQUFLbEM7UUFDNUJtQyxnQkFBZ0I7UUFDaEJDLHFCQUFxQmhDLHFCQUFxQjtJQUM1QztJQUVBLElBQU1pQyxVQUFVO1FBQ2R4QztRQUNDLEdBQTRCTyxPQUExQlAsV0FBVSxrQkFBaUMsT0FBakJPO0tBQzlCLENBQUNrQyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSw2QkFBQ0M7UUFBSUMsV0FBV0w7cUJBQ2QsNkJBQUNJO1FBQUlDLFdBQVcsQUFBQyxHQUFZLE9BQVY3QyxXQUFVO09BQzFCNkIsb0JBQW9CTyxRQUFRLGtCQUMzQiw2QkFBQ1U7UUFDQ0MsTUFBSztRQUNMRixXQUFXLEFBQUMsR0FBWSxPQUFWN0MsV0FBVTtRQUN4QmdELFNBQVM7bUJBQU01QyxTQUFTOztxQkFFeEIsNkJBQUM2QyxVQUFLLHdCQUdWLDZCQUFDQyxpQkFBWSx3QkFFZiw2QkFBQ047UUFBSUMsV0FBVyxBQUFDLEdBQVksT0FBVjdDLFdBQVU7cUJBQzNCLDZCQUFDbUQsd0JBQVUsMENBQ0x0QjtRQUNKekIsVUFBVSxTQUFDZ0Q7bUJBQVFoRCxTQUFTZ0Q7O1FBQzVCaEMsUUFBUUE7UUFDUmlDLGlCQUFpQjtZQUNmO2dCQUNFQyxNQUFNO2dCQUNOQyxTQUFTO1lBQ1g7U0FDRDtRQUNEQyxtQkFBQUE7UUFDQUMsa0JBQUFBO1FBQ0FDLGNBQWE7O0FBS3ZCO0lBRUEsV0FBZXpEIn0=