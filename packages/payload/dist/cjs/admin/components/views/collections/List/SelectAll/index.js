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
var _reacti18next = require("react-i18next");
var _SelectionProvider = require("../SelectionProvider");
var _Input = require("../../../../forms/field-types/Checkbox/Input");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var SelectAll = function() {
    var t = (0, _reacti18next.useTranslation)("general").t;
    var _useSelection = (0, _SelectionProvider.useSelection)(), selectAll = _useSelection.selectAll, toggleAll = _useSelection.toggleAll;
    return /*#__PURE__*/ _react.default.createElement(_Input.CheckboxInput, {
        id: "select-all",
        "aria-label": selectAll === _SelectionProvider.SelectAllStatus.None ? t("selectAllRows") : t("deselectAllRows"),
        checked: selectAll === _SelectionProvider.SelectAllStatus.AllInPage || selectAll === _SelectionProvider.SelectAllStatus.AllAvailable,
        partialChecked: selectAll === _SelectionProvider.SelectAllStatus.Some,
        onToggle: function() {
            return toggleAll();
        }
    });
};
var _default = SelectAll;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0QWxsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuaW1wb3J0IHsgU2VsZWN0QWxsU3RhdHVzLCB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi9TZWxlY3Rpb25Qcm92aWRlcic7XG5cbmltcG9ydCB7IENoZWNrYm94SW5wdXQgfSBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9DaGVja2JveC9JbnB1dCc7XG5cbmNvbnN0IFNlbGVjdEFsbDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgeyBzZWxlY3RBbGwsIHRvZ2dsZUFsbCB9ID0gdXNlU2VsZWN0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tib3hJbnB1dFxuICAgICAgaWQ9XCJzZWxlY3QtYWxsXCJcbiAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLk5vbmUgPyB0KCdzZWxlY3RBbGxSb3dzJykgOiB0KCdkZXNlbGVjdEFsbFJvd3MnKX1cbiAgICAgIGNoZWNrZWQ9e3NlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLkFsbEluUGFnZSB8fCBzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5BbGxBdmFpbGFibGV9XG4gICAgICBwYXJ0aWFsQ2hlY2tlZD17c2VsZWN0QWxsID09PSBTZWxlY3RBbGxTdGF0dXMuU29tZX1cbiAgICAgIG9uVG9nZ2xlPXsoKSA9PiB0b2dnbGVBbGwoKX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0QWxsO1xuIl0sIm5hbWVzIjpbIlNlbGVjdEFsbCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVNlbGVjdGlvbiIsInNlbGVjdEFsbCIsInRvZ2dsZUFsbCIsIkNoZWNrYm94SW5wdXQiLCJpZCIsImFyaWEtbGFiZWwiLCJTZWxlY3RBbGxTdGF0dXMiLCJOb25lIiwiY2hlY2tlZCIsIkFsbEluUGFnZSIsIkFsbEF2YWlsYWJsZSIsInBhcnRpYWxDaGVja2VkIiwiU29tZSIsIm9uVG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7OytCQXNCQTs7O2VBQUE7Ozs0REF0QmtCOzRCQUNhO2lDQUVlO3FCQUVoQjs7Ozs7O0FBRTlCLElBQU1BLFlBQXNCO0lBQzFCLElBQU0sQUFBRUMsSUFBTUMsSUFBQUEsNEJBQWMsRUFBQyxXQUFyQkQ7SUFDUixJQUFpQ0UsZ0JBQUFBLElBQUFBLCtCQUFZLEtBQXJDQyxZQUF5QkQsY0FBekJDLFdBQVdDLFlBQWNGLGNBQWRFO0lBRW5CLHFCQUNFLDZCQUFDQyxvQkFBYTtRQUNaQyxJQUFHO1FBQ0hDLGNBQVlKLGNBQWNLLGtDQUFlLENBQUNDLElBQUksR0FBR1QsRUFBRSxtQkFBbUJBLEVBQUU7UUFDeEVVLFNBQVNQLGNBQWNLLGtDQUFlLENBQUNHLFNBQVMsSUFBSVIsY0FBY0ssa0NBQWUsQ0FBQ0ksWUFBWTtRQUM5RkMsZ0JBQWdCVixjQUFjSyxrQ0FBZSxDQUFDTSxJQUFJO1FBQ2xEQyxVQUFVO21CQUFNWDs7O0FBR3RCO0lBRUEsV0FBZUwifQ==