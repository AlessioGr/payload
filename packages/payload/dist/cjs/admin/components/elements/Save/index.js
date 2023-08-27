"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Save", {
    enumerable: true,
    get: function() {
        return Save;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
var _useHotkey = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useHotkey"));
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _EditDepth = require("../../utilities/EditDepth");
var _context = require("../../forms/Form/context");
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
var DefaultSaveButton = function(param) {
    var label = param.label, save = param.save;
    var ref = (0, _react.useRef)(null);
    var editDepth = (0, _EditDepth.useEditDepth)();
    (0, _useHotkey.default)({
        keyCodes: [
            "s"
        ],
        cmdCtrlKey: true,
        editDepth: editDepth
    }, function(e) {
        var _ref;
        e.preventDefault();
        e.stopPropagation();
        if ((_ref = ref) === null || _ref === void 0 ? void 0 : _ref.current) {
            ref.current.click();
        }
    });
    return /*#__PURE__*/ _react.default.createElement(_Submit.default, {
        type: "button",
        buttonId: "action-save",
        onClick: save,
        ref: ref
    }, label);
};
var Save = function(param) {
    var CustomComponent = param.CustomComponent;
    var t = (0, _reacti18next.useTranslation)("general").t;
    var submit = (0, _context.useForm)().submit;
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomComponent,
        DefaultComponent: DefaultSaveButton,
        componentProps: {
            save: submit,
            label: t("save"),
            DefaultButton: DefaultSaveButton
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NhdmUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IEZvcm1TdWJtaXQgZnJvbSAnLi4vLi4vZm9ybXMvU3VibWl0JztcbmltcG9ydCB1c2VIb3RrZXkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlSG90a2V5JztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VFZGl0RGVwdGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRWRpdERlcHRoJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuXG5leHBvcnQgdHlwZSBDdXN0b21TYXZlQnV0dG9uUHJvcHMgPSBSZWFjdC5Db21wb25lbnRUeXBlPERlZmF1bHRTYXZlQnV0dG9uUHJvcHMgJiB7XG4gIERlZmF1bHRCdXR0b246IFJlYWN0LkNvbXBvbmVudFR5cGU8RGVmYXVsdFNhdmVCdXR0b25Qcm9wcz47XG59PlxudHlwZSBEZWZhdWx0U2F2ZUJ1dHRvblByb3BzID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBzYXZlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgRGVmYXVsdFNhdmVCdXR0b246IFJlYWN0LkZDPERlZmF1bHRTYXZlQnV0dG9uUHJvcHM+ID0gKHsgbGFiZWwsIHNhdmUgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBlZGl0RGVwdGggPSB1c2VFZGl0RGVwdGgoKTtcblxuICB1c2VIb3RrZXkoeyBrZXlDb2RlczogWydzJ10sIGNtZEN0cmxLZXk6IHRydWUsIGVkaXREZXB0aCB9LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChyZWY/LmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtU3VibWl0XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGJ1dHRvbklkPVwiYWN0aW9uLXNhdmVcIlxuICAgICAgb25DbGljaz17c2F2ZX1cbiAgICAgIHJlZj17cmVmfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0Zvcm1TdWJtaXQ+XG4gICk7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBDdXN0b21Db21wb25lbnQ/OiBDdXN0b21TYXZlQnV0dG9uUHJvcHM7XG59XG5leHBvcnQgY29uc3QgU2F2ZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgQ3VzdG9tQ29tcG9uZW50IH0pID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCB7IHN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21Db21wb25lbnR9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0U2F2ZUJ1dHRvbn1cbiAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgIHNhdmU6IHN1Ym1pdCxcbiAgICAgICAgbGFiZWw6IHQoJ3NhdmUnKSxcbiAgICAgICAgRGVmYXVsdEJ1dHRvbjogRGVmYXVsdFNhdmVCdXR0b24sXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlNhdmUiLCJEZWZhdWx0U2F2ZUJ1dHRvbiIsImxhYmVsIiwic2F2ZSIsInJlZiIsInVzZVJlZiIsImVkaXREZXB0aCIsInVzZUVkaXREZXB0aCIsInVzZUhvdGtleSIsImtleUNvZGVzIiwiY21kQ3RybEtleSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJjbGljayIsIkZvcm1TdWJtaXQiLCJ0eXBlIiwiYnV0dG9uSWQiLCJvbkNsaWNrIiwiQ3VzdG9tQ29tcG9uZW50IiwidCIsInVzZVRyYW5zbGF0aW9uIiwic3VibWl0IiwidXNlRm9ybSIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiLCJjb21wb25lbnRQcm9wcyIsIkRlZmF1bHRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBMkNhQTs7O2VBQUFBOzs7NkRBM0NpQjs0QkFDQzs2REFDUjtnRUFDRDs0RUFDWTt5QkFDTDt1QkFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXhCLElBQU1DLG9CQUFzRDtRQUFHQyxjQUFBQSxPQUFPQyxhQUFBQTtJQUNwRSxJQUFNQyxNQUFNQyxJQUFBQSxhQUFNLEVBQW9CO0lBQ3RDLElBQU1DLFlBQVlDLElBQUFBLHVCQUFZO0lBRTlCQyxJQUFBQSxrQkFBUyxFQUFDO1FBQUVDLFVBQVU7WUFBQztTQUFJO1FBQUVDLFlBQVk7UUFBTUosV0FBQUE7SUFBVSxHQUFHLFNBQUNLO1lBR3ZEUDtRQUZKTyxFQUFFQyxjQUFjO1FBQ2hCRCxFQUFFRSxlQUFlO1FBQ2pCLEtBQUlULE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBS1UsT0FBTyxFQUFFO1lBQ2hCVixJQUFJVSxPQUFPLENBQUNDLEtBQUs7UUFDbkI7SUFDRjtJQUVBLHFCQUNFLDZCQUFDQyxlQUFVO1FBQ1RDLE1BQUs7UUFDTEMsVUFBUztRQUNUQyxTQUFTaEI7UUFDVEMsS0FBS0E7T0FFSkY7QUFHUDtBQUtPLElBQU1GLE9BQXdCO1FBQUdvQix3QkFBQUE7SUFDdEMsSUFBTSxBQUFFQyxJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLFdBQXJCRDtJQUNSLElBQU0sQUFBRUUsU0FBV0MsSUFBQUEsZ0JBQU8sSUFBbEJEO0lBRVIscUJBQ0UsNkJBQUNFLDhCQUFxQjtRQUNwQkwsaUJBQWlCQTtRQUNqQk0sa0JBQWtCekI7UUFDbEIwQixnQkFBZ0I7WUFDZHhCLE1BQU1vQjtZQUNOckIsT0FBT21CLEVBQUU7WUFDVE8sZUFBZTNCO1FBQ2pCOztBQUdOIn0=