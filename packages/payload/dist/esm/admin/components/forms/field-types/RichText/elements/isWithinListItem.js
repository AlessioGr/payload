import { Editor, Element } from "slate";
export var isWithinListItem = function(editor) {
    var _parentLI, _parentLI_, _parentLI1;
    var parentLI;
    try {
        parentLI = Editor.parent(editor, editor.selection);
    } catch (e) {
    // swallow error, Slate
    }
    if (Element.isElement((_parentLI = parentLI) === null || _parentLI === void 0 ? void 0 : _parentLI[0]) && ((_parentLI1 = parentLI) === null || _parentLI1 === void 0 ? void 0 : (_parentLI_ = _parentLI1[0]) === null || _parentLI_ === void 0 ? void 0 : _parentLI_.type) === "li") {
        return true;
    }
    return false;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2lzV2l0aGluTGlzdEl0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yLCBFbGVtZW50LCBBbmNlc3RvciwgTm9kZUVudHJ5IH0gZnJvbSAnc2xhdGUnO1xuXG5leHBvcnQgY29uc3QgaXNXaXRoaW5MaXN0SXRlbSA9IChlZGl0b3I6IEVkaXRvcik6IGJvb2xlYW4gPT4ge1xuICBsZXQgcGFyZW50TEk6IE5vZGVFbnRyeTxBbmNlc3Rvcj47XG5cbiAgdHJ5IHtcbiAgICBwYXJlbnRMSSA9IEVkaXRvci5wYXJlbnQoZWRpdG9yLCBlZGl0b3Iuc2VsZWN0aW9uKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIHN3YWxsb3cgZXJyb3IsIFNsYXRlXG4gIH1cblxuICBpZiAoRWxlbWVudC5pc0VsZW1lbnQocGFyZW50TEk/LlswXSkgJiYgcGFyZW50TEk/LlswXT8udHlwZSA9PT0gJ2xpJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiJdLCJuYW1lcyI6WyJFZGl0b3IiLCJFbGVtZW50IiwiaXNXaXRoaW5MaXN0SXRlbSIsImVkaXRvciIsInBhcmVudExJIiwicGFyZW50Iiwic2VsZWN0aW9uIiwiZSIsImlzRWxlbWVudCIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQU0sRUFBRUMsT0FBTyxRQUE2QixRQUFRO0FBRTdELE9BQU8sSUFBTUMsbUJBQW1CLFNBQUNDO1FBU1RDLFdBQWtCQSxZQUFBQTtJQVJ4QyxJQUFJQTtJQUVKLElBQUk7UUFDRkEsV0FBV0osT0FBT0ssTUFBTSxDQUFDRixRQUFRQSxPQUFPRyxTQUFTO0lBQ25ELEVBQUUsT0FBT0MsR0FBRztJQUNWLHVCQUF1QjtJQUN6QjtJQUVBLElBQUlOLFFBQVFPLFNBQVMsRUFBQ0osWUFBQUEsc0JBQUFBLGdDQUFBQSxTQUFVLENBQUMsRUFBRSxLQUFLQSxFQUFBQSxhQUFBQSxzQkFBQUEsa0NBQUFBLGFBQUFBLFVBQVUsQ0FBQyxFQUFFLGNBQWJBLGlDQUFBQSxXQUFlSyxJQUFJLE1BQUssTUFBTTtRQUNwRSxPQUFPO0lBQ1Q7SUFFQSxPQUFPO0FBQ1QsRUFBRSJ9