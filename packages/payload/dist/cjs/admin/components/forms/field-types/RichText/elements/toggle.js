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
var _slate = require("slate");
var _slatereact = require("slate-react");
var _isActive = /*#__PURE__*/ _interop_require_default(require("./isActive"));
var _isWithinListItem = require("./isWithinListItem");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var toggleElement = function(editor, format) {
    var blockType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    var isActive = (0, _isActive.default)(editor, format, blockType);
    var formatByBlockType = _define_property({}, blockType, format);
    var isWithinLI = (0, _isWithinListItem.isWithinListItem)(editor);
    if (isActive) {
        formatByBlockType[blockType] = undefined;
    }
    if (!isActive && isWithinLI && blockType !== "textAlign") {
        var block = {
            type: "li",
            children: []
        };
        _slate.Transforms.wrapNodes(editor, block, {
            at: _slate.Editor.unhangRange(editor, editor.selection)
        });
    }
    _slate.Transforms.setNodes(editor, _define_property({}, blockType, formatByBlockType[blockType]), {
        at: _slate.Editor.unhangRange(editor, editor.selection)
    });
    _slatereact.ReactEditor.focus(editor);
};
var _default = toggleElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3RvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yLCBUcmFuc2Zvcm1zIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgUmVhY3RFZGl0b3IgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgaXNFbGVtZW50QWN0aXZlIGZyb20gJy4vaXNBY3RpdmUnO1xuaW1wb3J0IHsgaXNXaXRoaW5MaXN0SXRlbSB9IGZyb20gJy4vaXNXaXRoaW5MaXN0SXRlbSc7XG5cbmNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoZWRpdG9yOiBFZGl0b3IsIGZvcm1hdDogc3RyaW5nLCBibG9ja1R5cGUgPSAndHlwZScpOiB2b2lkID0+IHtcbiAgY29uc3QgaXNBY3RpdmUgPSBpc0VsZW1lbnRBY3RpdmUoZWRpdG9yLCBmb3JtYXQsIGJsb2NrVHlwZSk7XG5cbiAgY29uc3QgZm9ybWF0QnlCbG9ja1R5cGUgPSB7XG4gICAgW2Jsb2NrVHlwZV06IGZvcm1hdCxcbiAgfTtcblxuICBjb25zdCBpc1dpdGhpbkxJID0gaXNXaXRoaW5MaXN0SXRlbShlZGl0b3IpO1xuXG4gIGlmIChpc0FjdGl2ZSkge1xuICAgIGZvcm1hdEJ5QmxvY2tUeXBlW2Jsb2NrVHlwZV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoIWlzQWN0aXZlICYmIGlzV2l0aGluTEkgJiYgYmxvY2tUeXBlICE9PSAndGV4dEFsaWduJykge1xuICAgIGNvbnN0IGJsb2NrID0geyB0eXBlOiAnbGknLCBjaGlsZHJlbjogW10gfTtcbiAgICBUcmFuc2Zvcm1zLndyYXBOb2RlcyhlZGl0b3IsIGJsb2NrLCB7XG4gICAgICBhdDogRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgZWRpdG9yLnNlbGVjdGlvbiksXG4gICAgfSk7XG4gIH1cblxuICBUcmFuc2Zvcm1zLnNldE5vZGVzKGVkaXRvciwgeyBbYmxvY2tUeXBlXTogZm9ybWF0QnlCbG9ja1R5cGVbYmxvY2tUeXBlXSB9LCB7XG4gICAgYXQ6IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIGVkaXRvci5zZWxlY3Rpb24pLFxuICB9KTtcblxuICBSZWFjdEVkaXRvci5mb2N1cyhlZGl0b3IpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlRWxlbWVudDtcbiJdLCJuYW1lcyI6WyJ0b2dnbGVFbGVtZW50IiwiZWRpdG9yIiwiZm9ybWF0IiwiYmxvY2tUeXBlIiwiaXNBY3RpdmUiLCJpc0VsZW1lbnRBY3RpdmUiLCJmb3JtYXRCeUJsb2NrVHlwZSIsImlzV2l0aGluTEkiLCJpc1dpdGhpbkxpc3RJdGVtIiwidW5kZWZpbmVkIiwiYmxvY2siLCJ0eXBlIiwiY2hpbGRyZW4iLCJUcmFuc2Zvcm1zIiwid3JhcE5vZGVzIiwiYXQiLCJFZGl0b3IiLCJ1bmhhbmdSYW5nZSIsInNlbGVjdGlvbiIsInNldE5vZGVzIiwiUmVhY3RFZGl0b3IiLCJmb2N1cyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFnQ0E7OztlQUFBOzs7cUJBaENtQzswQkFDUDsrREFDQTtnQ0FDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFNQSxnQkFBZ0IsU0FBQ0MsUUFBZ0JDO1FBQWdCQyw2RUFBWTtJQUNqRSxJQUFNQyxXQUFXQyxJQUFBQSxpQkFBZSxFQUFDSixRQUFRQyxRQUFRQztJQUVqRCxJQUFNRyxvQkFDSixxQkFBQ0gsV0FBWUQ7SUFHZixJQUFNSyxhQUFhQyxJQUFBQSxrQ0FBZ0IsRUFBQ1A7SUFFcEMsSUFBSUcsVUFBVTtRQUNaRSxpQkFBaUIsQ0FBQ0gsVUFBVSxHQUFHTTtJQUNqQztJQUVBLElBQUksQ0FBQ0wsWUFBWUcsY0FBY0osY0FBYyxhQUFhO1FBQ3hELElBQU1PLFFBQVE7WUFBRUMsTUFBTTtZQUFNQyxVQUFVLEVBQUU7UUFBQztRQUN6Q0MsaUJBQVUsQ0FBQ0MsU0FBUyxDQUFDYixRQUFRUyxPQUFPO1lBQ2xDSyxJQUFJQyxhQUFNLENBQUNDLFdBQVcsQ0FBQ2hCLFFBQVFBLE9BQU9pQixTQUFTO1FBQ2pEO0lBQ0Y7SUFFQUwsaUJBQVUsQ0FBQ00sUUFBUSxDQUFDbEIsUUFBVSxxQkFBQ0UsV0FBWUcsaUJBQWlCLENBQUNILFVBQVUsR0FBSTtRQUN6RVksSUFBSUMsYUFBTSxDQUFDQyxXQUFXLENBQUNoQixRQUFRQSxPQUFPaUIsU0FBUztJQUNqRDtJQUVBRSx1QkFBVyxDQUFDQyxLQUFLLENBQUNwQjtBQUNwQjtJQUVBLFdBQWVEIn0=