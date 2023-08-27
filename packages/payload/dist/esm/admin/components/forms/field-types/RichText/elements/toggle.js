function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
import { Editor, Transforms } from "slate";
import { ReactEditor } from "slate-react";
import isElementActive from "./isActive";
import { isWithinListItem } from "./isWithinListItem";
var toggleElement = function(editor, format) {
    var blockType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    var isActive = isElementActive(editor, format, blockType);
    var formatByBlockType = _define_property({}, blockType, format);
    var isWithinLI = isWithinListItem(editor);
    if (isActive) {
        formatByBlockType[blockType] = undefined;
    }
    if (!isActive && isWithinLI && blockType !== "textAlign") {
        var block = {
            type: "li",
            children: []
        };
        Transforms.wrapNodes(editor, block, {
            at: Editor.unhangRange(editor, editor.selection)
        });
    }
    Transforms.setNodes(editor, _define_property({}, blockType, formatByBlockType[blockType]), {
        at: Editor.unhangRange(editor, editor.selection)
    });
    ReactEditor.focus(editor);
};
export default toggleElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3RvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yLCBUcmFuc2Zvcm1zIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgUmVhY3RFZGl0b3IgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgaXNFbGVtZW50QWN0aXZlIGZyb20gJy4vaXNBY3RpdmUnO1xuaW1wb3J0IHsgaXNXaXRoaW5MaXN0SXRlbSB9IGZyb20gJy4vaXNXaXRoaW5MaXN0SXRlbSc7XG5cbmNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoZWRpdG9yOiBFZGl0b3IsIGZvcm1hdDogc3RyaW5nLCBibG9ja1R5cGUgPSAndHlwZScpOiB2b2lkID0+IHtcbiAgY29uc3QgaXNBY3RpdmUgPSBpc0VsZW1lbnRBY3RpdmUoZWRpdG9yLCBmb3JtYXQsIGJsb2NrVHlwZSk7XG5cbiAgY29uc3QgZm9ybWF0QnlCbG9ja1R5cGUgPSB7XG4gICAgW2Jsb2NrVHlwZV06IGZvcm1hdCxcbiAgfTtcblxuICBjb25zdCBpc1dpdGhpbkxJID0gaXNXaXRoaW5MaXN0SXRlbShlZGl0b3IpO1xuXG4gIGlmIChpc0FjdGl2ZSkge1xuICAgIGZvcm1hdEJ5QmxvY2tUeXBlW2Jsb2NrVHlwZV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoIWlzQWN0aXZlICYmIGlzV2l0aGluTEkgJiYgYmxvY2tUeXBlICE9PSAndGV4dEFsaWduJykge1xuICAgIGNvbnN0IGJsb2NrID0geyB0eXBlOiAnbGknLCBjaGlsZHJlbjogW10gfTtcbiAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIGJsb2NrLCB7XG4gICAgICBhdDogRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgZWRpdG9yLnNlbGVjdGlvbiksXG4gICAgfSk7XG4gIH1cblxuICBUcmFuc2Zvcm1zLnNldE5vZGVzKGVkaXRvciwgeyBbYmxvY2tUeXBlXTogZm9ybWF0QnlCbG9ja1R5cGVbYmxvY2tUeXBlXSB9LCB7XG4gICAgYXQ6IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIGVkaXRvci5zZWxlY3Rpb24pLFxuICB9KTtcblxuICBSZWFjdEVkaXRvci5mb2N1cyhlZGl0b3IpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlRWxlbWVudDtcbiJdLCJuYW1lcyI6WyJFZGl0b3IiLCJUcmFuc2Zvcm1zIiwiUmVhY3RFZGl0b3IiLCJpc0VsZW1lbnRBY3RpdmUiLCJpc1dpdGhpbkxpc3RJdGVtIiwidG9nZ2xlRWxlbWVudCIsImVkaXRvciIsImZvcm1hdCIsImJsb2NrVHlwZSIsImlzQWN0aXZlIiwiZm9ybWF0QnlCbG9ja1R5cGUiLCJpc1dpdGhpbkxJIiwidW5kZWZpbmVkIiwiYmxvY2siLCJ0eXBlIiwiY2hpbGRyZW4iLCJ3cmFwTm9kZXMiLCJhdCIsInVuaGFuZ1JhbmdlIiwic2VsZWN0aW9uIiwic2V0Tm9kZXMiLCJmb2N1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLE1BQU0sRUFBRUMsVUFBVSxRQUFRLFFBQVE7QUFDM0MsU0FBU0MsV0FBVyxRQUFRLGNBQWM7QUFDMUMsT0FBT0MscUJBQXFCLGFBQWE7QUFDekMsU0FBU0MsZ0JBQWdCLFFBQVEscUJBQXFCO0FBRXRELElBQU1DLGdCQUFnQixTQUFDQyxRQUFnQkM7UUFBZ0JDLDZFQUFZO0lBQ2pFLElBQU1DLFdBQVdOLGdCQUFnQkcsUUFBUUMsUUFBUUM7SUFFakQsSUFBTUUsb0JBQ0oscUJBQUNGLFdBQVlEO0lBR2YsSUFBTUksYUFBYVAsaUJBQWlCRTtJQUVwQyxJQUFJRyxVQUFVO1FBQ1pDLGlCQUFpQixDQUFDRixVQUFVLEdBQUdJO0lBQ2pDO0lBRUEsSUFBSSxDQUFDSCxZQUFZRSxjQUFjSCxjQUFjLGFBQWE7UUFDeEQsSUFBTUssUUFBUTtZQUFFQyxNQUFNO1lBQU1DLFVBQVUsRUFBRTtRQUFDO1FBQ3pDZCxXQUFXZSxTQUFTLENBQUNWLFFBQVFPLE9BQU87WUFDbENJLElBQUlqQixPQUFPa0IsV0FBVyxDQUFDWixRQUFRQSxPQUFPYSxTQUFTO1FBQ2pEO0lBQ0Y7SUFFQWxCLFdBQVdtQixRQUFRLENBQUNkLFFBQVUscUJBQUNFLFdBQVlFLGlCQUFpQixDQUFDRixVQUFVLEdBQUk7UUFDekVTLElBQUlqQixPQUFPa0IsV0FBVyxDQUFDWixRQUFRQSxPQUFPYSxTQUFTO0lBQ2pEO0lBRUFqQixZQUFZbUIsS0FBSyxDQUFDZjtBQUNwQjtBQUVBLGVBQWVELGNBQWMifQ==