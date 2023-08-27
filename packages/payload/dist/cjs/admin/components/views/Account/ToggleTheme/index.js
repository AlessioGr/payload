"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ToggleTheme", {
    enumerable: true,
    get: function() {
        return ToggleTheme;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _Input = /*#__PURE__*/ _interop_require_default(require("../../../forms/field-types/RadioGroup/Input"));
var _Theme = require("../../../utilities/Theme");
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
var ToggleTheme = function() {
    var _useTheme = (0, _Theme.useTheme)(), theme = _useTheme.theme, setTheme = _useTheme.setTheme, autoMode = _useTheme.autoMode;
    var t = (0, _reacti18next.useTranslation)("general").t;
    var onChange = (0, _react.useCallback)(function(newTheme) {
        setTheme(newTheme);
    }, [
        setTheme
    ]);
    return /*#__PURE__*/ _react.default.createElement(_Input.default, {
        name: "theme",
        label: t("adminTheme"),
        value: autoMode ? "auto" : theme,
        onChange: onChange,
        options: [
            {
                label: t("automatic"),
                value: "auto"
            },
            {
                label: t("light"),
                value: "light"
            },
            {
                label: t("dark"),
                value: "dark"
            }
        ]
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0FjY291bnQvVG9nZ2xlVGhlbWUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgUmFkaW9Hcm91cElucHV0IGZyb20gJy4uLy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1JhZGlvR3JvdXAvSW5wdXQnO1xuaW1wb3J0IHsgT25DaGFuZ2UgfSBmcm9tICcuLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9SYWRpb0dyb3VwL3R5cGVzJztcbmltcG9ydCB7IFRoZW1lLCB1c2VUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9UaGVtZSc7XG5cbmV4cG9ydCBjb25zdCBUb2dnbGVUaGVtZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lLCBhdXRvTW9kZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2s8T25DaGFuZ2U8VGhlbWU+PigobmV3VGhlbWUpID0+IHtcbiAgICBzZXRUaGVtZShuZXdUaGVtZSk7XG4gIH0sIFtzZXRUaGVtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJhZGlvR3JvdXBJbnB1dFxuICAgICAgbmFtZT1cInRoZW1lXCJcbiAgICAgIGxhYmVsPXt0KCdhZG1pblRoZW1lJyl9XG4gICAgICB2YWx1ZT17YXV0b01vZGUgPyAnYXV0bycgOiB0aGVtZX1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiB0KCdhdXRvbWF0aWMnKSxcbiAgICAgICAgICB2YWx1ZTogJ2F1dG8nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IHQoJ2xpZ2h0JyksXG4gICAgICAgICAgdmFsdWU6ICdsaWdodCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogdCgnZGFyaycpLFxuICAgICAgICAgIHZhbHVlOiAnZGFyaycsXG4gICAgICAgIH0sXG4gICAgICBdfVxuICAgIC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlRvZ2dsZVRoZW1lIiwidXNlVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwiYXV0b01vZGUiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJvbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwibmV3VGhlbWUiLCJSYWRpb0dyb3VwSW5wdXQiLCJuYW1lIiwibGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBTWFBOzs7ZUFBQUE7Ozs2REFOc0I7NEJBQ0o7NERBQ0g7cUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNQSxjQUF3QjtJQUNuQyxJQUFzQ0MsWUFBQUEsSUFBQUEsZUFBUSxLQUF0Q0MsUUFBOEJELFVBQTlCQyxPQUFPQyxXQUF1QkYsVUFBdkJFLFVBQVVDLFdBQWFILFVBQWJHO0lBQ3pCLElBQU0sQUFBRUMsSUFBTUMsSUFBQUEsNEJBQWMsRUFBQyxXQUFyQkQ7SUFFUixJQUFNRSxXQUFXQyxJQUFBQSxrQkFBVyxFQUFrQixTQUFDQztRQUM3Q04sU0FBU007SUFDWCxHQUFHO1FBQUNOO0tBQVM7SUFFYixxQkFDRSw2QkFBQ08sY0FBZTtRQUNkQyxNQUFLO1FBQ0xDLE9BQU9QLEVBQUU7UUFDVFEsT0FBT1QsV0FBVyxTQUFTRjtRQUMzQkssVUFBVUE7UUFDVk8sU0FBUztZQUNQO2dCQUNFRixPQUFPUCxFQUFFO2dCQUNUUSxPQUFPO1lBQ1Q7WUFDQTtnQkFDRUQsT0FBT1AsRUFBRTtnQkFDVFEsT0FBTztZQUNUO1lBQ0E7Z0JBQ0VELE9BQU9QLEVBQUU7Z0JBQ1RRLE9BQU87WUFDVDtTQUNEOztBQUdQIn0=