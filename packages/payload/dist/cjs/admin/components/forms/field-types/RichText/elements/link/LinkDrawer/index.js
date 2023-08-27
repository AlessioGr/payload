"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LinkDrawer", {
    enumerable: true,
    get: function() {
        return LinkDrawer;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _Drawer = require("../../../../../../elements/Drawer");
var _Form = /*#__PURE__*/ _interop_require_default(require("../../../../../Form"));
var _Submit = /*#__PURE__*/ _interop_require_default(require("../../../../../Submit"));
var _ = /*#__PURE__*/ _interop_require_default(require("../../../.."));
var _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../../../../RenderFields"));
var _useHotkey = /*#__PURE__*/ _interop_require_default(require("../../../../../../../hooks/useHotkey"));
var _EditDepth = require("../../../../../../utilities/EditDepth");
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
var baseClass = "rich-text-link-edit-modal";
var LinkDrawer = function(param) {
    var handleModalSubmit = param.handleModalSubmit, initialState = param.initialState, fieldSchema = param.fieldSchema, drawerSlug = param.drawerSlug;
    var t = (0, _reacti18next.useTranslation)("fields").t;
    return /*#__PURE__*/ _react.default.createElement(_Drawer.Drawer, {
        slug: drawerSlug,
        className: baseClass,
        title: t("editLink")
    }, /*#__PURE__*/ _react.default.createElement(_Form.default, {
        onSubmit: handleModalSubmit,
        initialState: initialState
    }, /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        fieldTypes: _.default,
        readOnly: false,
        fieldSchema: fieldSchema,
        forceRender: true
    }), /*#__PURE__*/ _react.default.createElement(LinkSubmit, null)));
};
var LinkSubmit = function() {
    var t = (0, _reacti18next.useTranslation)("fields").t;
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
        ref: ref
    }, t("general:submit"));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2xpbmsvTGlua0RyYXdlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBEcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9EcmF3ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vRm9ybSc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9TdWJtaXQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBmaWVsZFR5cGVzIGZyb20gJy4uLy4uLy4uLy4uJztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vUmVuZGVyRmllbGRzJztcbmltcG9ydCB1c2VIb3RrZXkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlSG90a2V5JztcbmltcG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyaWNoLXRleHQtbGluay1lZGl0LW1vZGFsJztcblxuZXhwb3J0IGNvbnN0IExpbmtEcmF3ZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGhhbmRsZU1vZGFsU3VibWl0LFxuICBpbml0aWFsU3RhdGUsXG4gIGZpZWxkU2NoZW1hLFxuICBkcmF3ZXJTbHVnLFxufSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHNsdWc9e2RyYXdlclNsdWd9XG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIHRpdGxlPXt0KCdlZGl0TGluaycpfVxuICAgID5cbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVNb2RhbFN1Ym1pdH1cbiAgICAgICAgaW5pdGlhbFN0YXRlPXtpbml0aWFsU3RhdGV9XG4gICAgICA+XG4gICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICBmaWVsZFR5cGVzPXtmaWVsZFR5cGVzfVxuICAgICAgICAgIHJlYWRPbmx5PXtmYWxzZX1cbiAgICAgICAgICBmaWVsZFNjaGVtYT17ZmllbGRTY2hlbWF9XG4gICAgICAgICAgZm9yY2VSZW5kZXJcbiAgICAgICAgLz5cbiAgICAgICAgPExpbmtTdWJtaXQgLz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn07XG5cblxuY29uc3QgTGlua1N1Ym1pdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBlZGl0RGVwdGggPSB1c2VFZGl0RGVwdGgoKTtcblxuICB1c2VIb3RrZXkoeyBrZXlDb2RlczogWydzJ10sIGNtZEN0cmxLZXk6IHRydWUsIGVkaXREZXB0aCB9LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChyZWY/LmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgfVxuICB9KTtcblxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1TdWJtaXRcbiAgICAgIHJlZj17cmVmfVxuICAgID5cbiAgICAgIHt0KCdnZW5lcmFsOnN1Ym1pdCcpfVxuICAgIDwvRm9ybVN1Ym1pdD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTGlua0RyYXdlciIsImJhc2VDbGFzcyIsImhhbmRsZU1vZGFsU3VibWl0IiwiaW5pdGlhbFN0YXRlIiwiZmllbGRTY2hlbWEiLCJkcmF3ZXJTbHVnIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiRHJhd2VyIiwic2x1ZyIsImNsYXNzTmFtZSIsInRpdGxlIiwiRm9ybSIsIm9uU3VibWl0IiwiUmVuZGVyRmllbGRzIiwiZmllbGRUeXBlcyIsInJlYWRPbmx5IiwiZm9yY2VSZW5kZXIiLCJMaW5rU3VibWl0IiwicmVmIiwidXNlUmVmIiwiZWRpdERlcHRoIiwidXNlRWRpdERlcHRoIiwidXNlSG90a2V5Iiwia2V5Q29kZXMiLCJjbWRDdHJsS2V5IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImNsaWNrIiwiRm9ybVN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFlYUE7OztlQUFBQTs7OzZEQWZpQjs0QkFDQztzQkFDUjsyREFDTjs2REFDTTt1REFFQTttRUFDRTtnRUFDSDt5QkFDTztRQUV0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUVYLElBQU1ELGFBQThCO1FBQ3pDRSwwQkFBQUEsbUJBQ0FDLHFCQUFBQSxjQUNBQyxvQkFBQUEsYUFDQUMsbUJBQUFBO0lBRUEsSUFBTSxBQUFFQyxJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLFVBQXJCRDtJQUVSLHFCQUNFLDZCQUFDRSxjQUFNO1FBQ0xDLE1BQU1KO1FBQ05LLFdBQVdUO1FBQ1hVLE9BQU9MLEVBQUU7cUJBRVQsNkJBQUNNLGFBQUk7UUFDSEMsVUFBVVg7UUFDVkMsY0FBY0E7cUJBRWQsNkJBQUNXLHFCQUFZO1FBQ1hDLFlBQVlBLFNBQVU7UUFDdEJDLFVBQVU7UUFDVlosYUFBYUE7UUFDYmEsYUFBQUE7c0JBRUYsNkJBQUNDO0FBSVQ7QUFHQSxJQUFNQSxhQUF1QjtJQUMzQixJQUFNLEFBQUVaLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsVUFBckJEO0lBQ1IsSUFBTWEsTUFBTUMsSUFBQUEsYUFBTSxFQUFvQjtJQUN0QyxJQUFNQyxZQUFZQyxJQUFBQSx1QkFBWTtJQUU5QkMsSUFBQUEsa0JBQVMsRUFBQztRQUFFQyxVQUFVO1lBQUM7U0FBSTtRQUFFQyxZQUFZO1FBQU1KLFdBQUFBO0lBQVUsR0FBRyxTQUFDSztZQUd2RFA7UUFGSk8sRUFBRUMsY0FBYztRQUNoQkQsRUFBRUUsZUFBZTtRQUNqQixLQUFJVCxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtVLE9BQU8sRUFBRTtZQUNoQlYsSUFBSVUsT0FBTyxDQUFDQyxLQUFLO1FBQ25CO0lBQ0Y7SUFHQSxxQkFDRSw2QkFBQ0MsZUFBVTtRQUNUWixLQUFLQTtPQUVKYixFQUFFO0FBR1QifQ==