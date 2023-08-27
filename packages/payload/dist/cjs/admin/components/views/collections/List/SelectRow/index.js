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
var _SelectionProvider = require("../SelectionProvider");
var _Input = require("../../../../forms/field-types/Checkbox/Input");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var SelectRow = function(param) {
    var id = param.id;
    var _useSelection = (0, _SelectionProvider.useSelection)(), selected = _useSelection.selected, setSelection = _useSelection.setSelection;
    return /*#__PURE__*/ _react.default.createElement(_Input.CheckboxInput, {
        checked: selected[id],
        onToggle: function() {
            return setSelection(id);
        }
    });
};
var _default = SelectRow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0Um93L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0aW9uIH0gZnJvbSAnLi4vU2VsZWN0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgQ2hlY2tib3hJbnB1dCB9IGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL0NoZWNrYm94L0lucHV0JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBTZWxlY3RSb3c6IFJlYWN0LkZDPHsgaWQ6IHN0cmluZyB8IG51bWJlciB9PiA9ICh7IGlkIH0pID0+IHtcbiAgY29uc3QgeyBzZWxlY3RlZCwgc2V0U2VsZWN0aW9uIH0gPSB1c2VTZWxlY3Rpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxDaGVja2JveElucHV0XG4gICAgICBjaGVja2VkPXtzZWxlY3RlZFtpZF19XG4gICAgICBvblRvZ2dsZT17KCkgPT4gc2V0U2VsZWN0aW9uKGlkKX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Um93O1xuIl0sIm5hbWVzIjpbIlNlbGVjdFJvdyIsImlkIiwidXNlU2VsZWN0aW9uIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3Rpb24iLCJDaGVja2JveElucHV0IiwiY2hlY2tlZCIsIm9uVG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7OytCQWlCQTs7O2VBQUE7Ozs0REFqQmtCO2lDQUNXO3FCQUNDO1FBRXZCOzs7Ozs7QUFFUCxJQUFNQSxZQUErQztRQUFHQyxXQUFBQTtJQUN0RCxJQUFtQ0MsZ0JBQUFBLElBQUFBLCtCQUFZLEtBQXZDQyxXQUEyQkQsY0FBM0JDLFVBQVVDLGVBQWlCRixjQUFqQkU7SUFFbEIscUJBQ0UsNkJBQUNDLG9CQUFhO1FBQ1pDLFNBQVNILFFBQVEsQ0FBQ0YsR0FBRztRQUNyQk0sVUFBVTttQkFBTUgsYUFBYUg7OztBQUduQztJQUVBLFdBQWVEIn0=