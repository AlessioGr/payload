"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ThemeProvider: function() {
        return ThemeProvider;
    },
    useTheme: function() {
        return useTheme;
    },
    default: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
var initialContext = {
    theme: "light",
    setTheme: function() {
        return null;
    },
    autoMode: true
};
var Context = /*#__PURE__*/ (0, _react.createContext)(initialContext);
var localStorageKey = "payload-theme";
var getTheme = function() {
    var theme;
    var themeFromStorage = window.localStorage.getItem(localStorageKey);
    if (themeFromStorage === "light" || themeFromStorage === "dark") {
        theme = themeFromStorage;
    } else {
        theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
};
var ThemeProvider = function(param) {
    var children = param.children;
    var _useState = _sliced_to_array((0, _react.useState)(getTheme), 2), theme = _useState[0], setThemeState = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(function() {
        var themeFromStorage = window.localStorage.getItem(localStorageKey);
        return !themeFromStorage;
    }), 2), autoMode = _useState1[0], setAutoMode = _useState1[1];
    var setTheme = (0, _react.useCallback)(function(themeToSet) {
        if (themeToSet === "light" || themeToSet === "dark") {
            setThemeState(themeToSet);
            setAutoMode(false);
            window.localStorage.setItem(localStorageKey, themeToSet);
            document.documentElement.setAttribute("data-theme", themeToSet);
        } else if (themeToSet === "auto") {
            var existingThemeFromStorage = window.localStorage.getItem(localStorageKey);
            if (existingThemeFromStorage) window.localStorage.removeItem(localStorageKey);
            var themeFromOS = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", themeFromOS);
            setAutoMode(true);
            setThemeState(themeFromOS);
        }
    }, []);
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            theme: theme,
            setTheme: setTheme,
            autoMode: autoMode
        }
    }, children);
};
var useTheme = function() {
    return (0, _react.useContext)(Context);
};
var _default = Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9UaGVtZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBUaGVtZSA9ICdsaWdodCcgfCAnZGFyayc7XG5cbmV4cG9ydCB0eXBlIFRoZW1lQ29udGV4dCA9IHtcbiAgdGhlbWU6IFRoZW1lXG4gIHNldFRoZW1lOiAodGhlbWU6IFRoZW1lKSA9PiB2b2lkXG4gIGF1dG9Nb2RlOiBib29sZWFuXG59XG5cbmNvbnN0IGluaXRpYWxDb250ZXh0OiBUaGVtZUNvbnRleHQgPSB7XG4gIHRoZW1lOiAnbGlnaHQnLFxuICBzZXRUaGVtZTogKCkgPT4gbnVsbCxcbiAgYXV0b01vZGU6IHRydWUsXG59O1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsQ29udGV4dCk7XG5cbmNvbnN0IGxvY2FsU3RvcmFnZUtleSA9ICdwYXlsb2FkLXRoZW1lJztcblxuY29uc3QgZ2V0VGhlbWUgPSAoKSA9PiB7XG4gIGxldCB0aGVtZTogVGhlbWU7XG4gIGNvbnN0IHRoZW1lRnJvbVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KTtcblxuICBpZiAodGhlbWVGcm9tU3RvcmFnZSA9PT0gJ2xpZ2h0JyB8fCB0aGVtZUZyb21TdG9yYWdlID09PSAnZGFyaycpIHtcbiAgICB0aGVtZSA9IHRoZW1lRnJvbVN0b3JhZ2U7XG4gIH0gZWxzZSB7XG4gICAgdGhlbWUgPSAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSA/ICdkYXJrJyA6ICdsaWdodCc7XG4gIH1cblxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgdGhlbWUpO1xuICByZXR1cm4gdGhlbWU7XG59O1xuXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZVN0YXRlXSA9IHVzZVN0YXRlPFRoZW1lPihnZXRUaGVtZSk7XG4gIGNvbnN0IFthdXRvTW9kZSwgc2V0QXV0b01vZGVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IHRoZW1lRnJvbVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KTtcbiAgICByZXR1cm4gIXRoZW1lRnJvbVN0b3JhZ2U7XG4gIH0pO1xuXG4gIGNvbnN0IHNldFRoZW1lID0gdXNlQ2FsbGJhY2soKHRoZW1lVG9TZXQ6IFRoZW1lIHwgJ2F1dG8nKSA9PiB7XG4gICAgaWYgKHRoZW1lVG9TZXQgPT09ICdsaWdodCcgfHwgdGhlbWVUb1NldCA9PT0gJ2RhcmsnKSB7XG4gICAgICBzZXRUaGVtZVN0YXRlKHRoZW1lVG9TZXQpO1xuICAgICAgc2V0QXV0b01vZGUoZmFsc2UpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgdGhlbWVUb1NldCk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgdGhlbWVUb1NldCk7XG4gICAgfSBlbHNlIGlmICh0aGVtZVRvU2V0ID09PSAnYXV0bycpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGhlbWVGcm9tU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VLZXkpO1xuICAgICAgaWYgKGV4aXN0aW5nVGhlbWVGcm9tU3RvcmFnZSkgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZUtleSk7XG4gICAgICBjb25zdCB0aGVtZUZyb21PUyA9ICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZUZyb21PUyk7XG4gICAgICBzZXRBdXRvTW9kZSh0cnVlKTtcbiAgICAgIHNldFRoZW1lU3RhdGUodGhlbWVGcm9tT1MpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIHNldFRoZW1lLCBhdXRvTW9kZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoKTogVGhlbWVDb250ZXh0ID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHQ7XG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsInVzZVRoZW1lIiwiaW5pdGlhbENvbnRleHQiLCJ0aGVtZSIsInNldFRoZW1lIiwiYXV0b01vZGUiLCJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImxvY2FsU3RvcmFnZUtleSIsImdldFRoZW1lIiwidGhlbWVGcm9tU3RvcmFnZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInNldFRoZW1lU3RhdGUiLCJzZXRBdXRvTW9kZSIsInVzZUNhbGxiYWNrIiwidGhlbWVUb1NldCIsInNldEl0ZW0iLCJleGlzdGluZ1RoZW1lRnJvbVN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidGhlbWVGcm9tT1MiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFvQ2FBLGFBQWE7ZUFBYkE7O0lBOEJBQyxRQUFRO2VBQVJBOztJQUViLE9BQXVCO2VBQXZCOzs7NkRBbEVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVQLElBQU1DLGlCQUErQjtJQUNuQ0MsT0FBTztJQUNQQyxVQUFVO2VBQU07O0lBQ2hCQyxVQUFVO0FBQ1o7QUFFQSxJQUFNQyx3QkFBVUMsSUFBQUEsb0JBQWEsRUFBQ0w7QUFFOUIsSUFBTU0sa0JBQWtCO0FBRXhCLElBQU1DLFdBQVc7SUFDZixJQUFJTjtJQUNKLElBQU1PLG1CQUFtQkMsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUNMO0lBRXJELElBQUlFLHFCQUFxQixXQUFXQSxxQkFBcUIsUUFBUTtRQUMvRFAsUUFBUU87SUFDVixPQUFPO1FBQ0xQLFFBQVEsQUFBQ1EsT0FBT0csVUFBVSxJQUFJSCxPQUFPRyxVQUFVLENBQUMsZ0NBQWdDQyxPQUFPLEdBQUksU0FBUztJQUN0RztJQUVBQyxTQUFTQyxlQUFlLENBQUNDLFlBQVksQ0FBQyxjQUFjZjtJQUNwRCxPQUFPQTtBQUNUO0FBRU8sSUFBTUgsZ0JBQTBEO1FBQUdtQixpQkFBQUE7SUFDeEUsSUFBK0JDLDZCQUFBQSxJQUFBQSxlQUFRLEVBQVFYLGVBQXhDTixRQUF3QmlCLGNBQWpCQyxnQkFBaUJEO0lBQy9CLElBQWdDQSw4QkFBQUEsSUFBQUEsZUFBUSxFQUFDO1FBQ3ZDLElBQU1WLG1CQUFtQkMsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUNMO1FBQ3JELE9BQU8sQ0FBQ0U7SUFDVixRQUhPTCxXQUF5QmUsZUFBZkUsY0FBZUY7SUFLaEMsSUFBTWhCLFdBQVdtQixJQUFBQSxrQkFBVyxFQUFDLFNBQUNDO1FBQzVCLElBQUlBLGVBQWUsV0FBV0EsZUFBZSxRQUFRO1lBQ25ESCxjQUFjRztZQUNkRixZQUFZO1lBQ1pYLE9BQU9DLFlBQVksQ0FBQ2EsT0FBTyxDQUFDakIsaUJBQWlCZ0I7WUFDN0NSLFNBQVNDLGVBQWUsQ0FBQ0MsWUFBWSxDQUFDLGNBQWNNO1FBQ3RELE9BQU8sSUFBSUEsZUFBZSxRQUFRO1lBQ2hDLElBQU1FLDJCQUEyQmYsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUNMO1lBQzdELElBQUlrQiwwQkFBMEJmLE9BQU9DLFlBQVksQ0FBQ2UsVUFBVSxDQUFDbkI7WUFDN0QsSUFBTW9CLGNBQWMsQUFBQ2pCLE9BQU9HLFVBQVUsSUFBSUgsT0FBT0csVUFBVSxDQUFDLGdDQUFnQ0MsT0FBTyxHQUFJLFNBQVM7WUFDaEhDLFNBQVNDLGVBQWUsQ0FBQ0MsWUFBWSxDQUFDLGNBQWNVO1lBQ3BETixZQUFZO1lBQ1pELGNBQWNPO1FBQ2hCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsNkJBQUN0QixRQUFRdUIsUUFBUTtRQUFDQyxPQUFPO1lBQUUzQixPQUFBQTtZQUFPQyxVQUFBQTtZQUFVQyxVQUFBQTtRQUFTO09BQ2xEYztBQUdQO0FBRU8sSUFBTWxCLFdBQVc7V0FBb0I4QixJQUFBQSxpQkFBVSxFQUFDekI7O0lBRXZELFdBQWVBIn0=