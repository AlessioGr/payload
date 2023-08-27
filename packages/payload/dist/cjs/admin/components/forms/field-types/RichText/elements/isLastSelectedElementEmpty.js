"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLastSelectedElementEmpty", {
    enumerable: true,
    get: function() {
        return isLastSelectedElementEmpty;
    }
});
var _slate = require("slate");
var _types = require("../types");
var isLastSelectedElementEmpty = function(editor) {
    var _currentlySelectedNodes, _currentlySelectedNodes1, _lastSelectedNode__children, _lastSelectedNode__children1;
    if (!editor.selection) return false;
    var currentlySelectedNodes = Array.from(_slate.Editor.nodes(editor, {
        at: _slate.Editor.unhangRange(editor, editor.selection),
        match: function(n) {
            return !_slate.Editor.isEditor(n) && _slate.Element.isElement(n) && (!n.type || n.type === "p");
        }
    }));
    var lastSelectedNode = (_currentlySelectedNodes1 = currentlySelectedNodes) === null || _currentlySelectedNodes1 === void 0 ? void 0 : _currentlySelectedNodes1[((_currentlySelectedNodes = currentlySelectedNodes) === null || _currentlySelectedNodes === void 0 ? void 0 : _currentlySelectedNodes.length) - 1];
    return lastSelectedNode && _slate.Element.isElement(lastSelectedNode[0]) && (!lastSelectedNode[0].type || lastSelectedNode[0].type === "p") && (0, _types.nodeIsTextNode)((_lastSelectedNode__children = lastSelectedNode[0].children) === null || _lastSelectedNode__children === void 0 ? void 0 : _lastSelectedNode__children[0]) && ((_lastSelectedNode__children1 = lastSelectedNode[0].children) === null || _lastSelectedNode__children1 === void 0 ? void 0 : _lastSelectedNode__children1[0].text) === "";
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2lzTGFzdFNlbGVjdGVkRWxlbWVudEVtcHR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVkaXRvciwgRWxlbWVudCB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCB7IG5vZGVJc1RleHROb2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgaXNMYXN0U2VsZWN0ZWRFbGVtZW50RW1wdHkgPSAoZWRpdG9yOiBFZGl0b3IpOiBib29sZWFuID0+IHtcbiAgaWYgKCFlZGl0b3Iuc2VsZWN0aW9uKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgY3VycmVudGx5U2VsZWN0ZWROb2RlcyA9IEFycmF5LmZyb20oRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgIGF0OiBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBlZGl0b3Iuc2VsZWN0aW9uKSxcbiAgICBtYXRjaDogKG4pID0+ICFFZGl0b3IuaXNFZGl0b3IobikgJiYgRWxlbWVudC5pc0VsZW1lbnQobikgJiYgKCFuLnR5cGUgfHwgbi50eXBlID09PSAncCcpLFxuICB9KSk7XG5cbiAgY29uc3QgbGFzdFNlbGVjdGVkTm9kZSA9IGN1cnJlbnRseVNlbGVjdGVkTm9kZXM/LltjdXJyZW50bHlTZWxlY3RlZE5vZGVzPy5sZW5ndGggLSAxXTtcblxuICByZXR1cm4gbGFzdFNlbGVjdGVkTm9kZSAmJiBFbGVtZW50LmlzRWxlbWVudChsYXN0U2VsZWN0ZWROb2RlWzBdKVxuICAgICYmICghbGFzdFNlbGVjdGVkTm9kZVswXS50eXBlIHx8IGxhc3RTZWxlY3RlZE5vZGVbMF0udHlwZSA9PT0gJ3AnKVxuICAgICYmIG5vZGVJc1RleHROb2RlKGxhc3RTZWxlY3RlZE5vZGVbMF0uY2hpbGRyZW4/LlswXSlcbiAgICAmJiBsYXN0U2VsZWN0ZWROb2RlWzBdLmNoaWxkcmVuPy5bMF0udGV4dCA9PT0gJyc7XG59O1xuIl0sIm5hbWVzIjpbImlzTGFzdFNlbGVjdGVkRWxlbWVudEVtcHR5IiwiZWRpdG9yIiwiY3VycmVudGx5U2VsZWN0ZWROb2RlcyIsImxhc3RTZWxlY3RlZE5vZGUiLCJzZWxlY3Rpb24iLCJBcnJheSIsImZyb20iLCJFZGl0b3IiLCJub2RlcyIsImF0IiwidW5oYW5nUmFuZ2UiLCJtYXRjaCIsIm4iLCJpc0VkaXRvciIsIkVsZW1lbnQiLCJpc0VsZW1lbnQiLCJ0eXBlIiwibGVuZ3RoIiwibm9kZUlzVGV4dE5vZGUiLCJjaGlsZHJlbiIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBR2FBOzs7ZUFBQUE7OztxQkFIbUI7cUJBQ0Q7QUFFeEIsSUFBTUEsNkJBQTZCLFNBQUNDO1FBUVNDLHlCQUF6QkEsMEJBSUxDLDZCQUNmQTtJQVpMLElBQUksQ0FBQ0YsT0FBT0csU0FBUyxFQUFFLE9BQU87SUFFOUIsSUFBTUYseUJBQXlCRyxNQUFNQyxJQUFJLENBQUNDLGFBQU0sQ0FBQ0MsS0FBSyxDQUFDUCxRQUFRO1FBQzdEUSxJQUFJRixhQUFNLENBQUNHLFdBQVcsQ0FBQ1QsUUFBUUEsT0FBT0csU0FBUztRQUMvQ08sT0FBTyxTQUFDQzttQkFBTSxDQUFDTCxhQUFNLENBQUNNLFFBQVEsQ0FBQ0QsTUFBTUUsY0FBTyxDQUFDQyxTQUFTLENBQUNILE1BQU8sQ0FBQSxDQUFDQSxFQUFFSSxJQUFJLElBQUlKLEVBQUVJLElBQUksS0FBSyxHQUFFOztJQUN4RjtJQUVBLElBQU1iLG9CQUFtQkQsMkJBQUFBLG9DQUFBQSwrQ0FBQUEsd0JBQXdCLENBQUNBLEVBQUFBLDBCQUFBQSxvQ0FBQUEsOENBQUFBLHdCQUF3QmUsTUFBTSxJQUFHLEVBQUU7SUFFckYsT0FBT2Qsb0JBQW9CVyxjQUFPLENBQUNDLFNBQVMsQ0FBQ1osZ0JBQWdCLENBQUMsRUFBRSxLQUMxRCxDQUFBLENBQUNBLGdCQUFnQixDQUFDLEVBQUUsQ0FBQ2EsSUFBSSxJQUFJYixnQkFBZ0IsQ0FBQyxFQUFFLENBQUNhLElBQUksS0FBSyxHQUFFLEtBQzdERSxJQUFBQSxxQkFBYyxHQUFDZiw4QkFBQUEsZ0JBQWdCLENBQUMsRUFBRSxDQUFDZ0IsUUFBUSxjQUE1QmhCLGtEQUFBQSwyQkFBOEIsQ0FBQyxFQUFFLEtBQ2hEQSxFQUFBQSwrQkFBQUEsZ0JBQWdCLENBQUMsRUFBRSxDQUFDZ0IsUUFBUSxjQUE1QmhCLG1EQUFBQSw0QkFBOEIsQ0FBQyxFQUFFLENBQUNpQixJQUFJLE1BQUs7QUFDbEQifQ==