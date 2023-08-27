import React from "react";
import { useTranslation } from "react-i18next";
import Popup from "../Popup";
import More from "../../icons/More";
import Chevron from "../../icons/Chevron";
import Plus from "../../icons/Plus";
import X from "../../icons/X";
import Copy from "../../icons/Copy";
import "./index.scss";
var baseClass = "array-actions";
export var ArrayAction = function(param) {
    var moveRow = param.moveRow, index = param.index, rowCount = param.rowCount, addRow = param.addRow, duplicateRow = param.duplicateRow, removeRow = param.removeRow, hasMaxRows = param.hasMaxRows;
    var t = useTranslation("general").t;
    return /*#__PURE__*/ React.createElement(Popup, {
        horizontalAlign: "center",
        className: baseClass,
        buttonClassName: "".concat(baseClass, "__button"),
        button: /*#__PURE__*/ React.createElement(More, null),
        render: function(param) {
            var close = param.close;
            return /*#__PURE__*/ React.createElement(React.Fragment, null, index !== 0 && /*#__PURE__*/ React.createElement("button", {
                className: "".concat(baseClass, "__action ").concat(baseClass, "__move-up"),
                type: "button",
                onClick: function() {
                    moveRow(index, index - 1);
                    close();
                }
            }, /*#__PURE__*/ React.createElement(Chevron, null), t("moveUp")), index < rowCount - 1 && /*#__PURE__*/ React.createElement("button", {
                className: "".concat(baseClass, "__action ").concat(baseClass, "__move-down"),
                type: "button",
                onClick: function() {
                    moveRow(index, index + 1);
                    close();
                }
            }, /*#__PURE__*/ React.createElement(Chevron, null), t("moveDown")), !hasMaxRows && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("button", {
                className: "".concat(baseClass, "__action ").concat(baseClass, "__add"),
                type: "button",
                onClick: function() {
                    addRow(index + 1);
                    close();
                }
            }, /*#__PURE__*/ React.createElement(Plus, null), t("addBelow")), /*#__PURE__*/ React.createElement("button", {
                className: "".concat(baseClass, "__action ").concat(baseClass, "__duplicate"),
                type: "button",
                onClick: function() {
                    duplicateRow(index);
                    close();
                }
            }, /*#__PURE__*/ React.createElement(Copy, null), t("duplicate"))), /*#__PURE__*/ React.createElement("button", {
                className: "".concat(baseClass, "__action ").concat(baseClass, "__remove"),
                type: "button",
                onClick: function() {
                    removeRow(index);
                    close();
                }
            }, /*#__PURE__*/ React.createElement(X, null), t("remove")));
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0FycmF5QWN0aW9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBQb3B1cCBmcm9tICcuLi9Qb3B1cCc7XG5pbXBvcnQgTW9yZSBmcm9tICcuLi8uLi9pY29ucy9Nb3JlJztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBQbHVzIGZyb20gJy4uLy4uL2ljb25zL1BsdXMnO1xuaW1wb3J0IFggZnJvbSAnLi4vLi4vaWNvbnMvWCc7XG5pbXBvcnQgQ29weSBmcm9tICcuLi8uLi9pY29ucy9Db3B5JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnYXJyYXktYWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBBcnJheUFjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgbW92ZVJvdyxcbiAgaW5kZXgsXG4gIHJvd0NvdW50LFxuICBhZGRSb3csXG4gIGR1cGxpY2F0ZVJvdyxcbiAgcmVtb3ZlUm93LFxuICBoYXNNYXhSb3dzLFxufSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIHJldHVybiAoXG4gICAgPFBvcHVwXG4gICAgICBob3Jpem9udGFsQWxpZ249XCJjZW50ZXJcIlxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBidXR0b25DbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2J1dHRvbmB9XG4gICAgICBidXR0b249ezxNb3JlIC8+fVxuICAgICAgcmVuZGVyPXsoeyBjbG9zZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2luZGV4ICE9PSAwICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9uICR7YmFzZUNsYXNzfV9fbW92ZS11cGB9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbW92ZVJvdyhpbmRleCwgaW5kZXggLSAxKTtcbiAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDaGV2cm9uIC8+XG4gICAgICAgICAgICAgICAge3QoJ21vdmVVcCcpfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aW5kZXggPCByb3dDb3VudCAtIDEgJiYgKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb24gJHtiYXNlQ2xhc3N9X19tb3ZlLWRvd25gfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG1vdmVSb3coaW5kZXgsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2hldnJvbiAvPlxuICAgICAgICAgICAgICAgIHt0KCdtb3ZlRG93bicpfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IWhhc01heFJvd3MgJiYgKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb24gJHtiYXNlQ2xhc3N9X19hZGRgfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFJvdyhpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGx1cyAvPlxuICAgICAgICAgICAgICAgICAge3QoJ2FkZEJlbG93Jyl9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb24gJHtiYXNlQ2xhc3N9X19kdXBsaWNhdGVgfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZVJvdyhpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxDb3B5IC8+XG4gICAgICAgICAgICAgICAgICB7dCgnZHVwbGljYXRlJyl9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbiAke2Jhc2VDbGFzc31fX3JlbW92ZWB9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUm93KGluZGV4KTtcbiAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8WCAvPlxuICAgICAgICAgICAgICB7dCgncmVtb3ZlJyl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVRyYW5zbGF0aW9uIiwiUG9wdXAiLCJNb3JlIiwiQ2hldnJvbiIsIlBsdXMiLCJYIiwiQ29weSIsImJhc2VDbGFzcyIsIkFycmF5QWN0aW9uIiwibW92ZVJvdyIsImluZGV4Iiwicm93Q291bnQiLCJhZGRSb3ciLCJkdXBsaWNhdGVSb3ciLCJyZW1vdmVSb3ciLCJoYXNNYXhSb3dzIiwidCIsImhvcml6b250YWxBbGlnbiIsImNsYXNzTmFtZSIsImJ1dHRvbkNsYXNzTmFtZSIsImJ1dHRvbiIsInJlbmRlciIsImNsb3NlIiwiRnJhZ21lbnQiLCJ0eXBlIiwib25DbGljayJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsT0FBT0MsV0FBVyxXQUFXO0FBQzdCLE9BQU9DLFVBQVUsbUJBQW1CO0FBQ3BDLE9BQU9DLGFBQWEsc0JBQXNCO0FBRTFDLE9BQU9DLFVBQVUsbUJBQW1CO0FBQ3BDLE9BQU9DLE9BQU8sZ0JBQWdCO0FBQzlCLE9BQU9DLFVBQVUsbUJBQW1CO0FBRXBDLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLE9BQU8sSUFBTUMsY0FBK0I7UUFDMUNDLGdCQUFBQSxTQUNBQyxjQUFBQSxPQUNBQyxpQkFBQUEsVUFDQUMsZUFBQUEsUUFDQUMscUJBQUFBLGNBQ0FDLGtCQUFBQSxXQUNBQyxtQkFBQUE7SUFFQSxJQUFNLEFBQUVDLElBQU1oQixlQUFlLFdBQXJCZ0I7SUFDUixxQkFDRSxvQkFBQ2Y7UUFDQ2dCLGlCQUFnQjtRQUNoQkMsV0FBV1g7UUFDWFksaUJBQWlCLEFBQUMsR0FBWSxPQUFWWixXQUFVO1FBQzlCYSxzQkFBUSxvQkFBQ2xCO1FBQ1RtQixRQUFRO2dCQUFHQyxjQUFBQTtZQUNULHFCQUNFLG9CQUFDdkIsTUFBTXdCLFFBQVEsUUFDWmIsVUFBVSxtQkFDVCxvQkFBQ1U7Z0JBQ0NGLFdBQVcsQUFBQyxHQUF1QlgsT0FBckJBLFdBQVUsYUFBcUIsT0FBVkEsV0FBVTtnQkFDN0NpQixNQUFLO2dCQUNMQyxTQUFTO29CQUNQaEIsUUFBUUMsT0FBT0EsUUFBUTtvQkFDdkJZO2dCQUNGOzZCQUVBLG9CQUFDbkIsZ0JBQ0FhLEVBQUUsWUFHTk4sUUFBUUMsV0FBVyxtQkFDbEIsb0JBQUNTO2dCQUNDRixXQUFXLEFBQUMsR0FBdUJYLE9BQXJCQSxXQUFVLGFBQXFCLE9BQVZBLFdBQVU7Z0JBQzdDaUIsTUFBSztnQkFDTEMsU0FBUztvQkFDUGhCLFFBQVFDLE9BQU9BLFFBQVE7b0JBQ3ZCWTtnQkFDRjs2QkFFQSxvQkFBQ25CLGdCQUNBYSxFQUFFLGNBR04sQ0FBQ0QsNEJBQ0Esb0JBQUNoQixNQUFNd0IsUUFBUSxzQkFDYixvQkFBQ0g7Z0JBQ0NGLFdBQVcsQUFBQyxHQUF1QlgsT0FBckJBLFdBQVUsYUFBcUIsT0FBVkEsV0FBVTtnQkFDN0NpQixNQUFLO2dCQUNMQyxTQUFTO29CQUNQYixPQUFPRixRQUFRO29CQUNmWTtnQkFDRjs2QkFFQSxvQkFBQ2xCLGFBQ0FZLEVBQUUsNEJBRUwsb0JBQUNJO2dCQUNDRixXQUFXLEFBQUMsR0FBdUJYLE9BQXJCQSxXQUFVLGFBQXFCLE9BQVZBLFdBQVU7Z0JBQzdDaUIsTUFBSztnQkFDTEMsU0FBUztvQkFDUFosYUFBYUg7b0JBQ2JZO2dCQUNGOzZCQUVBLG9CQUFDaEIsYUFDQVUsRUFBRSw4QkFJVCxvQkFBQ0k7Z0JBQ0NGLFdBQVcsQUFBQyxHQUF1QlgsT0FBckJBLFdBQVUsYUFBcUIsT0FBVkEsV0FBVTtnQkFDN0NpQixNQUFLO2dCQUNMQyxTQUFTO29CQUNQWCxVQUFVSjtvQkFDVlk7Z0JBQ0Y7NkJBRUEsb0JBQUNqQixVQUNBVyxFQUFFO1FBSVg7O0FBR04sRUFBRSJ9