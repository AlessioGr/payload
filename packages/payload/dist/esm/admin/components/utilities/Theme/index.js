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
import React, { createContext, useCallback, useContext, useState } from "react";
var initialContext = {
    theme: "light",
    setTheme: function() {
        return null;
    },
    autoMode: true
};
var Context = /*#__PURE__*/ createContext(initialContext);
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
export var ThemeProvider = function(param) {
    var children = param.children;
    var _useState = _sliced_to_array(useState(getTheme), 2), theme = _useState[0], setThemeState = _useState[1];
    var _useState1 = _sliced_to_array(useState(function() {
        var themeFromStorage = window.localStorage.getItem(localStorageKey);
        return !themeFromStorage;
    }), 2), autoMode = _useState1[0], setAutoMode = _useState1[1];
    var setTheme = useCallback(function(themeToSet) {
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
    return /*#__PURE__*/ React.createElement(Context.Provider, {
        value: {
            theme: theme,
            setTheme: setTheme,
            autoMode: autoMode
        }
    }, children);
};
export var useTheme = function() {
    return useContext(Context);
};
export default Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9UaGVtZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBUaGVtZSA9ICdsaWdodCcgfCAnZGFyayc7XG5cbmV4cG9ydCB0eXBlIFRoZW1lQ29udGV4dCA9IHtcbiAgdGhlbWU6IFRoZW1lXG4gIHNldFRoZW1lOiAodGhlbWU6IFRoZW1lKSA9PiB2b2lkXG4gIGF1dG9Nb2RlOiBib29sZWFuXG59XG5cbmNvbnN0IGluaXRpYWxDb250ZXh0OiBUaGVtZUNvbnRleHQgPSB7XG4gIHRoZW1lOiAnbGlnaHQnLFxuICBzZXRUaGVtZTogKCkgPT4gbnVsbCxcbiAgYXV0b01vZGU6IHRydWUsXG59O1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsQ29udGV4dCk7XG5cbmNvbnN0IGxvY2FsU3RvcmFnZUtleSA9ICdwYXlsb2FkLXRoZW1lJztcblxuY29uc3QgZ2V0VGhlbWUgPSAoKSA9PiB7XG4gIGxldCB0aGVtZTogVGhlbWU7XG4gIGNvbnN0IHRoZW1lRnJvbVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KTtcblxuICBpZiAodGhlbWVGcm9tU3RvcmFnZSA9PT0gJ2xpZ2h0JyB8fCB0aGVtZUZyb21TdG9yYWdlID09PSAnZGFyaycpIHtcbiAgICB0aGVtZSA9IHRoZW1lRnJvbVN0b3JhZ2U7XG4gIH0gZWxzZSB7XG4gICAgdGhlbWUgPSAod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSA/ICdkYXJrJyA6ICdsaWdodCc7XG4gIH1cblxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgdGhlbWUpO1xuICByZXR1cm4gdGhlbWU7XG59O1xuXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZVN0YXRlXSA9IHVzZVN0YXRlPFRoZW1lPihnZXRUaGVtZSk7XG4gIGNvbnN0IFthdXRvTW9kZSwgc2V0QXV0b01vZGVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IHRoZW1lRnJvbVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KTtcbiAgICByZXR1cm4gIXRoZW1lRnJvbVN0b3JhZ2U7XG4gIH0pO1xuXG4gIGNvbnN0IHNldFRoZW1lID0gdXNlQ2FsbGJhY2soKHRoZW1lVG9TZXQ6IFRoZW1lIHwgJ2F1dG8nKSA9PiB7XG4gICAgaWYgKHRoZW1lVG9TZXQgPT09ICdsaWdodCcgfHwgdGhlbWVUb1NldCA9PT0gJ2RhcmsnKSB7XG4gICAgICBzZXRUaGVtZVN0YXRlKHRoZW1lVG9TZXQpO1xuICAgICAgc2V0QXV0b01vZGUoZmFsc2UpO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgdGhlbWVUb1NldCk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgdGhlbWVUb1NldCk7XG4gICAgfSBlbHNlIGlmICh0aGVtZVRvU2V0ID09PSAnYXV0bycpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGhlbWVGcm9tU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VLZXkpO1xuICAgICAgaWYgKGV4aXN0aW5nVGhlbWVGcm9tU3RvcmFnZSkgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZUtleSk7XG4gICAgICBjb25zdCB0aGVtZUZyb21PUyA9ICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZUZyb21PUyk7XG4gICAgICBzZXRBdXRvTW9kZSh0cnVlKTtcbiAgICAgIHNldFRoZW1lU3RhdGUodGhlbWVGcm9tT1MpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIHNldFRoZW1lLCBhdXRvTW9kZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoKTogVGhlbWVDb250ZXh0ID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJpbml0aWFsQ29udGV4dCIsInRoZW1lIiwic2V0VGhlbWUiLCJhdXRvTW9kZSIsIkNvbnRleHQiLCJsb2NhbFN0b3JhZ2VLZXkiLCJnZXRUaGVtZSIsInRoZW1lRnJvbVN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFRoZW1lU3RhdGUiLCJzZXRBdXRvTW9kZSIsInRoZW1lVG9TZXQiLCJzZXRJdGVtIiwiZXhpc3RpbmdUaGVtZUZyb21TdG9yYWdlIiwicmVtb3ZlSXRlbSIsInRoZW1lRnJvbU9TIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FDTEMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxRQUMzQyxRQUFRO0FBVWYsSUFBTUMsaUJBQStCO0lBQ25DQyxPQUFPO0lBQ1BDLFVBQVU7ZUFBTTs7SUFDaEJDLFVBQVU7QUFDWjtBQUVBLElBQU1DLHdCQUFVUixjQUFjSTtBQUU5QixJQUFNSyxrQkFBa0I7QUFFeEIsSUFBTUMsV0FBVztJQUNmLElBQUlMO0lBQ0osSUFBTU0sbUJBQW1CQyxPQUFPQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0w7SUFFckQsSUFBSUUscUJBQXFCLFdBQVdBLHFCQUFxQixRQUFRO1FBQy9ETixRQUFRTTtJQUNWLE9BQU87UUFDTE4sUUFBUSxBQUFDTyxPQUFPRyxVQUFVLElBQUlILE9BQU9HLFVBQVUsQ0FBQyxnQ0FBZ0NDLE9BQU8sR0FBSSxTQUFTO0lBQ3RHO0lBRUFDLFNBQVNDLGVBQWUsQ0FBQ0MsWUFBWSxDQUFDLGNBQWNkO0lBQ3BELE9BQU9BO0FBQ1Q7QUFFQSxPQUFPLElBQU1lLGdCQUEwRDtRQUFHQyxpQkFBQUE7SUFDeEUsSUFBK0JsQiw2QkFBQUEsU0FBZ0JPLGVBQXhDTCxRQUF3QkYsY0FBakJtQixnQkFBaUJuQjtJQUMvQixJQUFnQ0EsOEJBQUFBLFNBQVM7UUFDdkMsSUFBTVEsbUJBQW1CQyxPQUFPQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0w7UUFDckQsT0FBTyxDQUFDRTtJQUNWLFFBSE9KLFdBQXlCSixlQUFmb0IsY0FBZXBCO0lBS2hDLElBQU1HLFdBQVdMLFlBQVksU0FBQ3VCO1FBQzVCLElBQUlBLGVBQWUsV0FBV0EsZUFBZSxRQUFRO1lBQ25ERixjQUFjRTtZQUNkRCxZQUFZO1lBQ1pYLE9BQU9DLFlBQVksQ0FBQ1ksT0FBTyxDQUFDaEIsaUJBQWlCZTtZQUM3Q1AsU0FBU0MsZUFBZSxDQUFDQyxZQUFZLENBQUMsY0FBY0s7UUFDdEQsT0FBTyxJQUFJQSxlQUFlLFFBQVE7WUFDaEMsSUFBTUUsMkJBQTJCZCxPQUFPQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0w7WUFDN0QsSUFBSWlCLDBCQUEwQmQsT0FBT0MsWUFBWSxDQUFDYyxVQUFVLENBQUNsQjtZQUM3RCxJQUFNbUIsY0FBYyxBQUFDaEIsT0FBT0csVUFBVSxJQUFJSCxPQUFPRyxVQUFVLENBQUMsZ0NBQWdDQyxPQUFPLEdBQUksU0FBUztZQUNoSEMsU0FBU0MsZUFBZSxDQUFDQyxZQUFZLENBQUMsY0FBY1M7WUFDcERMLFlBQVk7WUFDWkQsY0FBY007UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSxvQkFBQ3BCLFFBQVFxQixRQUFRO1FBQUNDLE9BQU87WUFBRXpCLE9BQUFBO1lBQU9DLFVBQUFBO1lBQVVDLFVBQUFBO1FBQVM7T0FDbERjO0FBR1AsRUFBRTtBQUVGLE9BQU8sSUFBTVUsV0FBVztXQUFvQjdCLFdBQVdNO0VBQVM7QUFFaEUsZUFBZUEsUUFBUSJ9