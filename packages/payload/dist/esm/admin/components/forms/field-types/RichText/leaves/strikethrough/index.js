import React from "react";
import LeafButton from "../Button";
import StrikethroughIcon from "../../../../../icons/Strikethrough";
var Strikethrough = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ React.createElement("del", attributes, children);
};
var strikethrough = {
    Button: function() {
        return /*#__PURE__*/ React.createElement(LeafButton, {
            format: "strikethrough"
        }, /*#__PURE__*/ React.createElement(StrikethroughIcon, null));
    },
    Leaf: Strikethrough
};
export default strikethrough;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9zdHJpa2V0aHJvdWdoL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlYWZCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBTdHJpa2V0aHJvdWdoSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29ucy9TdHJpa2V0aHJvdWdoJztcblxuY29uc3QgU3RyaWtldGhyb3VnaCA9ICh7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0pID0+IChcbiAgPGRlbCB7Li4uYXR0cmlidXRlc30+XG4gICAge2NoaWxkcmVufVxuICA8L2RlbD5cbik7XG5cbmNvbnN0IHN0cmlrZXRocm91Z2ggPSB7XG4gIEJ1dHRvbjogKCkgPT4gKFxuICAgIDxMZWFmQnV0dG9uIGZvcm1hdD1cInN0cmlrZXRocm91Z2hcIj5cbiAgICAgIDxTdHJpa2V0aHJvdWdoSWNvbiAvPlxuICAgIDwvTGVhZkJ1dHRvbj5cbiAgKSxcbiAgTGVhZjogU3RyaWtldGhyb3VnaCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlrZXRocm91Z2g7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMZWFmQnV0dG9uIiwiU3RyaWtldGhyb3VnaEljb24iLCJTdHJpa2V0aHJvdWdoIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiZGVsIiwic3RyaWtldGhyb3VnaCIsIkJ1dHRvbiIsImZvcm1hdCIsIkxlYWYiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixPQUFPQyxnQkFBZ0IsWUFBWTtBQUNuQyxPQUFPQyx1QkFBdUIscUNBQXFDO0FBRW5FLElBQU1DLGdCQUFnQjtRQUFHQyxtQkFBQUEsWUFBWUMsaUJBQUFBO3lCQUNuQyxvQkFBQ0MsT0FBUUYsWUFDTkM7O0FBSUwsSUFBTUUsZ0JBQWdCO0lBQ3BCQyxRQUFROzZCQUNOLG9CQUFDUDtZQUFXUSxRQUFPO3lCQUNqQixvQkFBQ1A7O0lBR0xRLE1BQU1QO0FBQ1I7QUFFQSxlQUFlSSxjQUFjIn0=