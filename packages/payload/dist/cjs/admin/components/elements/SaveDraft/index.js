"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SaveDraft", {
    enumerable: true,
    get: function() {
        return SaveDraft;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
var _context = require("../../forms/Form/context");
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _Locale = require("../../utilities/Locale");
var _useHotkey = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useHotkey"));
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _EditDepth = require("../../utilities/EditDepth");
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
var baseClass = "save-draft";
var DefaultSaveDraftButton = function(param) {
    var disabled = param.disabled, saveDraft = param.saveDraft, label = param.label;
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
        if (disabled) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if ((_ref = ref) === null || _ref === void 0 ? void 0 : _ref.current) {
            ref.current.click();
        }
    });
    return /*#__PURE__*/ _react.default.createElement(_Submit.default, {
        className: baseClass,
        type: "button",
        buttonStyle: "secondary",
        onClick: saveDraft,
        disabled: disabled,
        ref: ref
    }, label);
};
var SaveDraft = function(param) {
    var CustomComponent = param.CustomComponent;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var submit = (0, _context.useForm)().submit;
    var _useDocumentInfo = (0, _DocumentInfo.useDocumentInfo)(), collection = _useDocumentInfo.collection, global = _useDocumentInfo.global, id = _useDocumentInfo.id;
    var modified = (0, _context.useFormModified)();
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var t = (0, _reacti18next.useTranslation)("version").t;
    var canSaveDraft = modified;
    var saveDraft = (0, _react.useCallback)(function() {
        var search = "?locale=".concat(locale, "&depth=0&fallback-locale=null&draft=true");
        var action;
        var method = "POST";
        if (collection) {
            action = "".concat(serverURL).concat(api, "/").concat(collection.slug).concat(id ? "/".concat(id) : "").concat(search);
            if (id) method = "PATCH";
        }
        if (global) {
            action = "".concat(serverURL).concat(api, "/globals/").concat(global.slug).concat(search);
        }
        submit({
            action: action,
            method: method,
            skipValidation: true,
            overrides: {
                _status: "draft"
            }
        });
    }, [
        submit,
        collection,
        global,
        serverURL,
        api,
        locale,
        id
    ]);
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomComponent,
        DefaultComponent: DefaultSaveDraftButton,
        componentProps: {
            saveDraft: saveDraft,
            disabled: !canSaveDraft,
            label: t("saveDraft"),
            DefaultButton: DefaultSaveDraftButton
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NhdmVEcmFmdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnO1xuaW1wb3J0IHsgdXNlRm9ybSwgdXNlRm9ybU1vZGlmaWVkIH0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9jb250ZXh0JztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgdXNlSG90a2V5IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUhvdGtleSc7XG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnO1xuaW1wb3J0IHsgdXNlRWRpdERlcHRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0VkaXREZXB0aCc7XG5cblxuY29uc3QgYmFzZUNsYXNzID0gJ3NhdmUtZHJhZnQnO1xuXG5leHBvcnQgdHlwZSBDdXN0b21TYXZlRHJhZnRCdXR0b25Qcm9wcyA9IFJlYWN0LkNvbXBvbmVudFR5cGU8RGVmYXVsdFNhdmVEcmFmdEJ1dHRvblByb3BzICYge1xuICBEZWZhdWx0QnV0dG9uOiBSZWFjdC5Db21wb25lbnRUeXBlPERlZmF1bHRTYXZlRHJhZnRCdXR0b25Qcm9wcz47XG59PlxuZXhwb3J0IHR5cGUgRGVmYXVsdFNhdmVEcmFmdEJ1dHRvblByb3BzID0ge1xuICBzYXZlRHJhZnQ6ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nO1xufTtcbmNvbnN0IERlZmF1bHRTYXZlRHJhZnRCdXR0b246IFJlYWN0LkZDPERlZmF1bHRTYXZlRHJhZnRCdXR0b25Qcm9wcz4gPSAoeyBkaXNhYmxlZCwgc2F2ZURyYWZ0LCBsYWJlbCB9KSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVkaXREZXB0aCA9IHVzZUVkaXREZXB0aCgpO1xuXG4gIHVzZUhvdGtleSh7IGtleUNvZGVzOiBbJ3MnXSwgY21kQ3RybEtleTogdHJ1ZSwgZWRpdERlcHRoIH0sIChlKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHJlZj8uY3VycmVudCkge1xuICAgICAgcmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1TdWJtaXRcbiAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICBvbkNsaWNrPXtzYXZlRHJhZnR9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICByZWY9e3JlZn1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9Gb3JtU3VibWl0PlxuICApO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgQ3VzdG9tQ29tcG9uZW50PzogQ3VzdG9tU2F2ZURyYWZ0QnV0dG9uUHJvcHNcbn1cbmV4cG9ydCBjb25zdCBTYXZlRHJhZnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IEN1c3RvbUNvbXBvbmVudCB9KSA9PiB7XG4gIGNvbnN0IHsgc2VydmVyVVJMLCByb3V0ZXM6IHsgYXBpIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCB7IGNvbGxlY3Rpb24sIGdsb2JhbCwgaWQgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCBtb2RpZmllZCA9IHVzZUZvcm1Nb2RpZmllZCgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKTtcblxuICBjb25zdCBjYW5TYXZlRHJhZnQgPSBtb2RpZmllZDtcblxuICBjb25zdCBzYXZlRHJhZnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoID0gYD9sb2NhbGU9JHtsb2NhbGV9JmRlcHRoPTAmZmFsbGJhY2stbG9jYWxlPW51bGwmZHJhZnQ9dHJ1ZWA7XG4gICAgbGV0IGFjdGlvbjtcbiAgICBsZXQgbWV0aG9kID0gJ1BPU1QnO1xuXG4gICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgIGFjdGlvbiA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtjb2xsZWN0aW9uLnNsdWd9JHtpZCA/IGAvJHtpZH1gIDogJyd9JHtzZWFyY2h9YDtcbiAgICAgIGlmIChpZCkgbWV0aG9kID0gJ1BBVENIJztcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICBhY3Rpb24gPSBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z30ke3NlYXJjaH1gO1xuICAgIH1cblxuICAgIHN1Ym1pdCh7XG4gICAgICBhY3Rpb24sXG4gICAgICBtZXRob2QsXG4gICAgICBza2lwVmFsaWRhdGlvbjogdHJ1ZSxcbiAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICBfc3RhdHVzOiAnZHJhZnQnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSwgW3N1Ym1pdCwgY29sbGVjdGlvbiwgZ2xvYmFsLCBzZXJ2ZXJVUkwsIGFwaSwgbG9jYWxlLCBpZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21Db21wb25lbnR9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0U2F2ZURyYWZ0QnV0dG9ufVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgc2F2ZURyYWZ0LFxuICAgICAgICBkaXNhYmxlZDogIWNhblNhdmVEcmFmdCxcbiAgICAgICAgbGFiZWw6IHQoJ3NhdmVEcmFmdCcpLFxuICAgICAgICBEZWZhdWx0QnV0dG9uOiBEZWZhdWx0U2F2ZURyYWZ0QnV0dG9uLFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJTYXZlRHJhZnQiLCJiYXNlQ2xhc3MiLCJEZWZhdWx0U2F2ZURyYWZ0QnV0dG9uIiwiZGlzYWJsZWQiLCJzYXZlRHJhZnQiLCJsYWJlbCIsInJlZiIsInVzZVJlZiIsImVkaXREZXB0aCIsInVzZUVkaXREZXB0aCIsInVzZUhvdGtleSIsImtleUNvZGVzIiwiY21kQ3RybEtleSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJjbGljayIsIkZvcm1TdWJtaXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwiYnV0dG9uU3R5bGUiLCJvbkNsaWNrIiwiQ3VzdG9tQ29tcG9uZW50IiwidXNlQ29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwic3VibWl0IiwidXNlRm9ybSIsInVzZURvY3VtZW50SW5mbyIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJpZCIsIm1vZGlmaWVkIiwidXNlRm9ybU1vZGlmaWVkIiwidXNlTG9jYWxlIiwiY29kZSIsImxvY2FsZSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImNhblNhdmVEcmFmdCIsInVzZUNhbGxiYWNrIiwic2VhcmNoIiwiYWN0aW9uIiwibWV0aG9kIiwic2x1ZyIsInNraXBWYWxpZGF0aW9uIiwib3ZlcnJpZGVzIiwiX3N0YXR1cyIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiLCJjb21wb25lbnRQcm9wcyIsIkRlZmF1bHRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBdURhQTs7O2VBQUFBOzs7NkRBdkQ4Qjs0QkFDWjtzQkFDTDs2REFDSDt1QkFDa0I7NEJBQ1Q7c0JBQ047Z0VBQ0o7NEVBQ1k7eUJBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc3QixJQUFNQyxZQUFZO0FBVWxCLElBQU1DLHlCQUFnRTtRQUFHQyxpQkFBQUEsVUFBVUMsa0JBQUFBLFdBQVdDLGNBQUFBO0lBQzVGLElBQU1DLE1BQU1DLElBQUFBLGFBQU0sRUFBb0I7SUFDdEMsSUFBTUMsWUFBWUMsSUFBQUEsdUJBQVk7SUFFOUJDLElBQUFBLGtCQUFTLEVBQUM7UUFBRUMsVUFBVTtZQUFDO1NBQUk7UUFBRUMsWUFBWTtRQUFNSixXQUFBQTtJQUFVLEdBQUcsU0FBQ0s7WUFPdkRQO1FBTkosSUFBSUgsVUFBVTtZQUNaO1FBQ0Y7UUFFQVUsRUFBRUMsY0FBYztRQUNoQkQsRUFBRUUsZUFBZTtRQUNqQixLQUFJVCxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtVLE9BQU8sRUFBRTtZQUNoQlYsSUFBSVUsT0FBTyxDQUFDQyxLQUFLO1FBQ25CO0lBQ0Y7SUFFQSxxQkFDRSw2QkFBQ0MsZUFBVTtRQUNUQyxXQUFXbEI7UUFDWG1CLE1BQUs7UUFDTEMsYUFBWTtRQUNaQyxTQUFTbEI7UUFDVEQsVUFBVUE7UUFDVkcsS0FBS0E7T0FFSkQ7QUFHUDtBQUtPLElBQU1MLFlBQTZCO1FBQUd1Qix3QkFBQUE7SUFDM0MsSUFBdUNDLGFBQUFBLElBQUFBLGlCQUFTLEtBQXhDQyxZQUErQkQsV0FBL0JDLFdBQVdDLEFBQVVDLE1BQVVILFdBQXBCRSxPQUFVQztJQUM3QixJQUFNLEFBQUVDLFNBQVdDLElBQUFBLGdCQUFPLElBQWxCRDtJQUNSLElBQW1DRSxtQkFBQUEsSUFBQUEsNkJBQWUsS0FBMUNDLGFBQTJCRCxpQkFBM0JDLFlBQVlDLFNBQWVGLGlCQUFmRSxRQUFRQyxLQUFPSCxpQkFBUEc7SUFDNUIsSUFBTUMsV0FBV0MsSUFBQUEsd0JBQWU7SUFDaEMsSUFBeUJDLGFBQUFBLElBQUFBLGlCQUFTLEtBQTFCQyxBQUFNQyxTQUFXRixXQUFqQkM7SUFDUixJQUFNLEFBQUVFLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsV0FBckJEO0lBRVIsSUFBTUUsZUFBZVA7SUFFckIsSUFBTTlCLFlBQVlzQyxJQUFBQSxrQkFBVyxFQUFDO1FBQzVCLElBQU1DLFNBQVMsQUFBQyxXQUFpQixPQUFQTCxRQUFPO1FBQ2pDLElBQUlNO1FBQ0osSUFBSUMsU0FBUztRQUViLElBQUlkLFlBQVk7WUFDZGEsU0FBUyxBQUFDLEdBQWNqQixPQUFaRixXQUFtQk0sT0FBUEosS0FBSSxLQUFxQk0sT0FBbEJGLFdBQVdlLElBQUksRUFBd0JILE9BQXJCVixLQUFLLEFBQUMsSUFBTSxPQUFIQSxNQUFPLElBQVksT0FBUFU7WUFDdEUsSUFBSVYsSUFBSVksU0FBUztRQUNuQjtRQUVBLElBQUliLFFBQVE7WUFDVlksU0FBUyxBQUFDLEdBQWNqQixPQUFaRixXQUEyQk8sT0FBZkwsS0FBSSxhQUF5QmdCLE9BQWRYLE9BQU9jLElBQUksRUFBVSxPQUFQSDtRQUN2RDtRQUVBZixPQUFPO1lBQ0xnQixRQUFBQTtZQUNBQyxRQUFBQTtZQUNBRSxnQkFBZ0I7WUFDaEJDLFdBQVc7Z0JBQ1RDLFNBQVM7WUFDWDtRQUNGO0lBQ0YsR0FBRztRQUFDckI7UUFBUUc7UUFBWUM7UUFBUVA7UUFBV0U7UUFBS1c7UUFBUUw7S0FBRztJQUUzRCxxQkFDRSw2QkFBQ2lCLDhCQUFxQjtRQUNwQjNCLGlCQUFpQkE7UUFDakI0QixrQkFBa0JqRDtRQUNsQmtELGdCQUFnQjtZQUNkaEQsV0FBQUE7WUFDQUQsVUFBVSxDQUFDc0M7WUFDWHBDLE9BQU9rQyxFQUFFO1lBQ1RjLGVBQWVuRDtRQUNqQjs7QUFHTiJ9