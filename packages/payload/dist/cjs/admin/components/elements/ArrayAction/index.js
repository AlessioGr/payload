"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ArrayAction", {
    enumerable: true,
    get: function() {
        return ArrayAction;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reacti18next = require("react-i18next");
var _Popup = /*#__PURE__*/ _interop_require_default(require("../Popup"));
var _More = /*#__PURE__*/ _interop_require_default(require("../../icons/More"));
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
var _Plus = /*#__PURE__*/ _interop_require_default(require("../../icons/Plus"));
var _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
var _Copy = /*#__PURE__*/ _interop_require_default(require("../../icons/Copy"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "array-actions";
var ArrayAction = function(param) {
    var moveRow = param.moveRow, index = param.index, rowCount = param.rowCount, addRow = param.addRow, duplicateRow = param.duplicateRow, removeRow = param.removeRow, hasMaxRows = param.hasMaxRows;
    var t = (0, _reacti18next.useTranslation)("general").t;
    return /*#__PURE__*/ _react.default.createElement(_Popup.default, {
        horizontalAlign: "center",
        className: baseClass,
        buttonClassName: "".concat(baseClass, "__button"),
        button: /*#__PURE__*/ _react.default.createElement(_More.default, null),
        render: function(param) {
            var close = param.close;
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, index !== 0 && /*#__PURE__*/ _react.default.createElement("button", {
                className: "".concat(baseClass, "__action ").concat(baseClass, "__move-up"),
                type: "button",
                onClick: function() {
                    moveRow(index, index - 1);
                    close();
                }
            }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, null), t("moveUp")), index < rowCount - 1 && /*#__PURE__*/ _react.default.createElement("button", {
                className: "".concat(baseClass, "__action ").concat(baseClass, "__move-down"),
                type: "button",
                onClick: function() {
                    moveRow(index, index + 1);
                    close();
                }
            }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, null), t("moveDown")), !hasMaxRows && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("button", {
                className: "".concat(baseClass, "__action ").concat(baseClass, "__add"),
                type: "button",
                onClick: function() {
                    addRow(index + 1);
                    close();
                }
            }, /*#__PURE__*/ _react.default.createElement(_Plus.default, null), t("addBelow")), /*#__PURE__*/ _react.default.createElement("button", {
                className: "".concat(baseClass, "__action ").concat(baseClass, "__duplicate"),
                type: "button",
                onClick: function() {
                    duplicateRow(index);
                    close();
                }
            }, /*#__PURE__*/ _react.default.createElement(_Copy.default, null), t("duplicate"))), /*#__PURE__*/ _react.default.createElement("button", {
                className: "".concat(baseClass, "__action ").concat(baseClass, "__remove"),
                type: "button",
                onClick: function() {
                    removeRow(index);
                    close();
                }
            }, /*#__PURE__*/ _react.default.createElement(_X.default, null), t("remove")));
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0FycmF5QWN0aW9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBQb3B1cCBmcm9tICcuLi9Qb3B1cCc7XG5pbXBvcnQgTW9yZSBmcm9tICcuLi8uLi9pY29ucy9Nb3JlJztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBQbHVzIGZyb20gJy4uLy4uL2ljb25zL1BsdXMnO1xuaW1wb3J0IFggZnJvbSAnLi4vLi4vaWNvbnMvWCc7XG5pbXBvcnQgQ29weSBmcm9tICcuLi8uLi9pY29ucy9Db3B5JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnYXJyYXktYWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBBcnJheUFjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgbW92ZVJvdyxcbiAgaW5kZXgsXG4gIHJvd0NvdW50LFxuICBhZGRSb3csXG4gIGR1cGxpY2F0ZVJvdyxcbiAgcmVtb3ZlUm93LFxuICBoYXNNYXhSb3dzLFxufSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIHJldHVybiAoXG4gICAgPFBvcHVwXG4gICAgICBob3Jpem9udGFsQWxpZ249XCJjZW50ZXJcIlxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBidXR0b25DbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2J1dHRvbmB9XG4gICAgICBidXR0b249ezxNb3JlIC8+fVxuICAgICAgcmVuZGVyPXsoeyBjbG9zZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2luZGV4ICE9PSAwICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9uICR7YmFzZUNsYXNzfV9fbW92ZS11cGB9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbW92ZVJvdyhpbmRleCwgaW5kZXggLSAxKTtcbiAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDaGV2cm9uIC8+XG4gICAgICAgICAgICAgICAge3QoJ21vdmVVcCcpfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aW5kZXggPCByb3dDb3VudCAtIDEgJiYgKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb24gJHtiYXNlQ2xhc3N9X19tb3ZlLWRvd25gfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG1vdmVSb3coaW5kZXgsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2hldnJvbiAvPlxuICAgICAgICAgICAgICAgIHt0KCdtb3ZlRG93bicpfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IWhhc01heFJvd3MgJiYgKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb24gJHtiYXNlQ2xhc3N9X19hZGRgfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFJvdyhpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGx1cyAvPlxuICAgICAgICAgICAgICAgICAge3QoJ2FkZEJlbG93Jyl9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb24gJHtiYXNlQ2xhc3N9X19kdXBsaWNhdGVgfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZVJvdyhpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxDb3B5IC8+XG4gICAgICAgICAgICAgICAgICB7dCgnZHVwbGljYXRlJyl9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbiAke2Jhc2VDbGFzc31fX3JlbW92ZWB9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUm93KGluZGV4KTtcbiAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8WCAvPlxuICAgICAgICAgICAgICB7dCgncmVtb3ZlJyl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJBcnJheUFjdGlvbiIsImJhc2VDbGFzcyIsIm1vdmVSb3ciLCJpbmRleCIsInJvd0NvdW50IiwiYWRkUm93IiwiZHVwbGljYXRlUm93IiwicmVtb3ZlUm93IiwiaGFzTWF4Um93cyIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsIlBvcHVwIiwiaG9yaXpvbnRhbEFsaWduIiwiY2xhc3NOYW1lIiwiYnV0dG9uQ2xhc3NOYW1lIiwiYnV0dG9uIiwiTW9yZSIsInJlbmRlciIsImNsb3NlIiwiUmVhY3QiLCJGcmFnbWVudCIsInR5cGUiLCJvbkNsaWNrIiwiQ2hldnJvbiIsIlBsdXMiLCJDb3B5IiwiWCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFjYUE7OztlQUFBQTs7OzREQWRLOzRCQUNhOzREQUNiOzJEQUNEOzhEQUNHOzJEQUVIO3dEQUNIOzJEQUNHO1FBRVY7Ozs7OztBQUVQLElBQU1DLFlBQVk7QUFFWCxJQUFNRCxjQUErQjtRQUMxQ0UsZ0JBQUFBLFNBQ0FDLGNBQUFBLE9BQ0FDLGlCQUFBQSxVQUNBQyxlQUFBQSxRQUNBQyxxQkFBQUEsY0FDQUMsa0JBQUFBLFdBQ0FDLG1CQUFBQTtJQUVBLElBQU0sQUFBRUMsSUFBTUMsSUFBQUEsNEJBQWMsRUFBQyxXQUFyQkQ7SUFDUixxQkFDRSw2QkFBQ0UsY0FBSztRQUNKQyxpQkFBZ0I7UUFDaEJDLFdBQVdaO1FBQ1hhLGlCQUFpQixBQUFDLEdBQVksT0FBVmIsV0FBVTtRQUM5QmMsc0JBQVEsNkJBQUNDLGFBQUk7UUFDYkMsUUFBUTtnQkFBR0MsY0FBQUE7WUFDVCxxQkFDRSw2QkFBQ0MsY0FBSyxDQUFDQyxRQUFRLFFBQ1pqQixVQUFVLG1CQUNULDZCQUFDWTtnQkFDQ0YsV0FBVyxBQUFDLEdBQXVCWixPQUFyQkEsV0FBVSxhQUFxQixPQUFWQSxXQUFVO2dCQUM3Q29CLE1BQUs7Z0JBQ0xDLFNBQVM7b0JBQ1BwQixRQUFRQyxPQUFPQSxRQUFRO29CQUN2QmU7Z0JBQ0Y7NkJBRUEsNkJBQUNLLGdCQUFPLFNBQ1BkLEVBQUUsWUFHTk4sUUFBUUMsV0FBVyxtQkFDbEIsNkJBQUNXO2dCQUNDRixXQUFXLEFBQUMsR0FBdUJaLE9BQXJCQSxXQUFVLGFBQXFCLE9BQVZBLFdBQVU7Z0JBQzdDb0IsTUFBSztnQkFDTEMsU0FBUztvQkFDUHBCLFFBQVFDLE9BQU9BLFFBQVE7b0JBQ3ZCZTtnQkFDRjs2QkFFQSw2QkFBQ0ssZ0JBQU8sU0FDUGQsRUFBRSxjQUdOLENBQUNELDRCQUNBLDZCQUFDVyxjQUFLLENBQUNDLFFBQVEsc0JBQ2IsNkJBQUNMO2dCQUNDRixXQUFXLEFBQUMsR0FBdUJaLE9BQXJCQSxXQUFVLGFBQXFCLE9BQVZBLFdBQVU7Z0JBQzdDb0IsTUFBSztnQkFDTEMsU0FBUztvQkFDUGpCLE9BQU9GLFFBQVE7b0JBQ2ZlO2dCQUNGOzZCQUVBLDZCQUFDTSxhQUFJLFNBQ0pmLEVBQUUsNEJBRUwsNkJBQUNNO2dCQUNDRixXQUFXLEFBQUMsR0FBdUJaLE9BQXJCQSxXQUFVLGFBQXFCLE9BQVZBLFdBQVU7Z0JBQzdDb0IsTUFBSztnQkFDTEMsU0FBUztvQkFDUGhCLGFBQWFIO29CQUNiZTtnQkFDRjs2QkFFQSw2QkFBQ08sYUFBSSxTQUNKaEIsRUFBRSw4QkFJVCw2QkFBQ007Z0JBQ0NGLFdBQVcsQUFBQyxHQUF1QlosT0FBckJBLFdBQVUsYUFBcUIsT0FBVkEsV0FBVTtnQkFDN0NvQixNQUFLO2dCQUNMQyxTQUFTO29CQUNQZixVQUFVSjtvQkFDVmU7Z0JBQ0Y7NkJBRUEsNkJBQUNRLFVBQUMsU0FDRGpCLEVBQUU7UUFJWDs7QUFHTiJ9