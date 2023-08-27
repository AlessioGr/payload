"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unwrapList", {
    enumerable: true,
    get: function() {
        return unwrapList;
    }
});
var _slate = require("slate");
var _areAllChildrenElements = require("./areAllChildrenElements");
var _listTypes = /*#__PURE__*/ _interop_require_default(require("./listTypes"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var unwrapList = function(editor, atPath) {
    // Remove type for any nodes that have text children -
    // this means that the node should remain
    _slate.Transforms.setNodes(editor, {
        type: undefined
    }, {
        at: atPath,
        match: function(node, path) {
            var childrenAreAllElements = (0, _areAllChildrenElements.areAllChildrenElements)(node);
            var matches = !_slate.Editor.isEditor(node) && _slate.Element.isElement(node) && !childrenAreAllElements && node.type === "li" && path.length === atPath.length + 1;
            return matches;
        }
    });
    // For nodes have all element children, unwrap it instead
    // because the li is a duplicative wrapper
    _slate.Transforms.unwrapNodes(editor, {
        at: atPath,
        match: function(node, path) {
            var childrenAreAllElements = (0, _areAllChildrenElements.areAllChildrenElements)(node);
            var matches = !_slate.Editor.isEditor(node) && _slate.Element.isElement(node) && childrenAreAllElements && node.type === "li" && path.length === atPath.length + 1;
            return matches;
        }
    });
    // Finally, unwrap the UL itself
    _slate.Transforms.unwrapNodes(editor, {
        match: function(n) {
            return _slate.Element.isElement(n) && _listTypes.default.includes(n.type);
        },
        mode: "lowest"
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3Vud3JhcExpc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aCwgVHJhbnNmb3JtcywgRWRpdG9yLCBFbGVtZW50IH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgYXJlQWxsQ2hpbGRyZW5FbGVtZW50cyB9IGZyb20gJy4vYXJlQWxsQ2hpbGRyZW5FbGVtZW50cyc7XG5pbXBvcnQgbGlzdFR5cGVzIGZyb20gJy4vbGlzdFR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHVud3JhcExpc3QgPSAoZWRpdG9yOiBFZGl0b3IsIGF0UGF0aDogUGF0aCk6IHZvaWQgPT4ge1xuICAvLyBSZW1vdmUgdHlwZSBmb3IgYW55IG5vZGVzIHRoYXQgaGF2ZSB0ZXh0IGNoaWxkcmVuIC1cbiAgLy8gdGhpcyBtZWFucyB0aGF0IHRoZSBub2RlIHNob3VsZCByZW1haW5cbiAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHsgdHlwZTogdW5kZWZpbmVkIH0sIHtcbiAgICBhdDogYXRQYXRoLFxuICAgIG1hdGNoOiAobm9kZSwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRyZW5BcmVBbGxFbGVtZW50cyA9IGFyZUFsbENoaWxkcmVuRWxlbWVudHMobm9kZSk7XG5cbiAgICAgIGNvbnN0IG1hdGNoZXMgPSAhRWRpdG9yLmlzRWRpdG9yKG5vZGUpXG4gICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICYmICFjaGlsZHJlbkFyZUFsbEVsZW1lbnRzXG4gICAgICAgICYmIG5vZGUudHlwZSA9PT0gJ2xpJ1xuICAgICAgICAmJiBwYXRoLmxlbmd0aCA9PT0gYXRQYXRoLmxlbmd0aCArIDE7XG5cbiAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH0sXG4gIH0pO1xuXG4gIC8vIEZvciBub2RlcyBoYXZlIGFsbCBlbGVtZW50IGNoaWxkcmVuLCB1bndyYXAgaXQgaW5zdGVhZFxuICAvLyBiZWNhdXNlIHRoZSBsaSBpcyBhIGR1cGxpY2F0aXZlIHdyYXBwZXJcbiAgVHJhbnNmb3Jtcy51bndyYXBOb2RlcyhlZGl0b3IsIHtcbiAgICBhdDogYXRQYXRoLFxuICAgIG1hdGNoOiAobm9kZSwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRyZW5BcmVBbGxFbGVtZW50cyA9IGFyZUFsbENoaWxkcmVuRWxlbWVudHMobm9kZSk7XG5cbiAgICAgIGNvbnN0IG1hdGNoZXMgPSAhRWRpdG9yLmlzRWRpdG9yKG5vZGUpXG4gICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICYmIGNoaWxkcmVuQXJlQWxsRWxlbWVudHNcbiAgICAgICAgJiYgbm9kZS50eXBlID09PSAnbGknXG4gICAgICAgICYmIHBhdGgubGVuZ3RoID09PSBhdFBhdGgubGVuZ3RoICsgMTtcblxuICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gRmluYWxseSwgdW53cmFwIHRoZSBVTCBpdHNlbGZcbiAgVHJhbnNmb3Jtcy51bndyYXBOb2RlcyhlZGl0b3IsIHtcbiAgICBtYXRjaDogKG4pID0+IEVsZW1lbnQuaXNFbGVtZW50KG4pICYmIGxpc3RUeXBlcy5pbmNsdWRlcyhuLnR5cGUpLFxuICAgIG1vZGU6ICdsb3dlc3QnLFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsidW53cmFwTGlzdCIsImVkaXRvciIsImF0UGF0aCIsIlRyYW5zZm9ybXMiLCJzZXROb2RlcyIsInR5cGUiLCJ1bmRlZmluZWQiLCJhdCIsIm1hdGNoIiwibm9kZSIsInBhdGgiLCJjaGlsZHJlbkFyZUFsbEVsZW1lbnRzIiwiYXJlQWxsQ2hpbGRyZW5FbGVtZW50cyIsIm1hdGNoZXMiLCJFZGl0b3IiLCJpc0VkaXRvciIsIkVsZW1lbnQiLCJpc0VsZW1lbnQiLCJsZW5ndGgiLCJ1bndyYXBOb2RlcyIsIm4iLCJsaXN0VHlwZXMiLCJpbmNsdWRlcyIsIm1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzs7ZUFBQUE7OztxQkFKcUM7c0NBQ1g7Z0VBQ2pCOzs7Ozs7QUFFZixJQUFNQSxhQUFhLFNBQUNDLFFBQWdCQztJQUN6QyxzREFBc0Q7SUFDdEQseUNBQXlDO0lBQ3pDQyxpQkFBVSxDQUFDQyxRQUFRLENBQUNILFFBQVE7UUFBRUksTUFBTUM7SUFBVSxHQUFHO1FBQy9DQyxJQUFJTDtRQUNKTSxPQUFPLFNBQUNDLE1BQU1DO1lBQ1osSUFBTUMseUJBQXlCQyxJQUFBQSw4Q0FBc0IsRUFBQ0g7WUFFdEQsSUFBTUksVUFBVSxDQUFDQyxhQUFNLENBQUNDLFFBQVEsQ0FBQ04sU0FDNUJPLGNBQU8sQ0FBQ0MsU0FBUyxDQUFDUixTQUNsQixDQUFDRSwwQkFDREYsS0FBS0osSUFBSSxLQUFLLFFBQ2RLLEtBQUtRLE1BQU0sS0FBS2hCLE9BQU9nQixNQUFNLEdBQUc7WUFFckMsT0FBT0w7UUFDVDtJQUNGO0lBRUEseURBQXlEO0lBQ3pELDBDQUEwQztJQUMxQ1YsaUJBQVUsQ0FBQ2dCLFdBQVcsQ0FBQ2xCLFFBQVE7UUFDN0JNLElBQUlMO1FBQ0pNLE9BQU8sU0FBQ0MsTUFBTUM7WUFDWixJQUFNQyx5QkFBeUJDLElBQUFBLDhDQUFzQixFQUFDSDtZQUV0RCxJQUFNSSxVQUFVLENBQUNDLGFBQU0sQ0FBQ0MsUUFBUSxDQUFDTixTQUM1Qk8sY0FBTyxDQUFDQyxTQUFTLENBQUNSLFNBQ2xCRSwwQkFDQUYsS0FBS0osSUFBSSxLQUFLLFFBQ2RLLEtBQUtRLE1BQU0sS0FBS2hCLE9BQU9nQixNQUFNLEdBQUc7WUFFckMsT0FBT0w7UUFDVDtJQUNGO0lBRUEsZ0NBQWdDO0lBQ2hDVixpQkFBVSxDQUFDZ0IsV0FBVyxDQUFDbEIsUUFBUTtRQUM3Qk8sT0FBTyxTQUFDWTttQkFBTUosY0FBTyxDQUFDQyxTQUFTLENBQUNHLE1BQU1DLGtCQUFTLENBQUNDLFFBQVEsQ0FBQ0YsRUFBRWYsSUFBSTs7UUFDL0RrQixNQUFNO0lBQ1I7QUFDRiJ9