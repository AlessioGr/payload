import React from "react";
import { useSelection } from "../SelectionProvider";
import { CheckboxInput } from "../../../../forms/field-types/Checkbox/Input";
import "./index.scss";
var SelectRow = function(param) {
    var id = param.id;
    var _useSelection = useSelection(), selected = _useSelection.selected, setSelection = _useSelection.setSelection;
    return /*#__PURE__*/ React.createElement(CheckboxInput, {
        checked: selected[id],
        onToggle: function() {
            return setSelection(id);
        }
    });
};
export default SelectRow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0Um93L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0aW9uIH0gZnJvbSAnLi4vU2VsZWN0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgQ2hlY2tib3hJbnB1dCB9IGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL0NoZWNrYm94L0lucHV0JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBTZWxlY3RSb3c6IFJlYWN0LkZDPHsgaWQ6IHN0cmluZyB8IG51bWJlciB9PiA9ICh7IGlkIH0pID0+IHtcbiAgY29uc3QgeyBzZWxlY3RlZCwgc2V0U2VsZWN0aW9uIH0gPSB1c2VTZWxlY3Rpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxDaGVja2JveElucHV0XG4gICAgICBjaGVja2VkPXtzZWxlY3RlZFtpZF19XG4gICAgICBvblRvZ2dsZT17KCkgPT4gc2V0U2VsZWN0aW9uKGlkKX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Um93O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU2VsZWN0aW9uIiwiQ2hlY2tib3hJbnB1dCIsIlNlbGVjdFJvdyIsImlkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3Rpb24iLCJjaGVja2VkIiwib25Ub2dnbGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxZQUFZLFFBQVEsdUJBQXVCO0FBQ3BELFNBQVNDLGFBQWEsUUFBUSwrQ0FBK0M7QUFFN0UsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQStDO1FBQUdDLFdBQUFBO0lBQ3RELElBQW1DSCxnQkFBQUEsZ0JBQTNCSSxXQUEyQkosY0FBM0JJLFVBQVVDLGVBQWlCTCxjQUFqQks7SUFFbEIscUJBQ0Usb0JBQUNKO1FBQ0NLLFNBQVNGLFFBQVEsQ0FBQ0QsR0FBRztRQUNyQkksVUFBVTttQkFBTUYsYUFBYUY7OztBQUduQztBQUVBLGVBQWVELFVBQVUifQ==