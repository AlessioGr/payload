import { Transforms, Editor, Element } from "slate";
import { areAllChildrenElements } from "./areAllChildrenElements";
import listTypes from "./listTypes";
export var unwrapList = function(editor, atPath) {
    // Remove type for any nodes that have text children -
    // this means that the node should remain
    Transforms.setNodes(editor, {
        type: undefined
    }, {
        at: atPath,
        match: function(node, path) {
            var childrenAreAllElements = areAllChildrenElements(node);
            var matches = !Editor.isEditor(node) && Element.isElement(node) && !childrenAreAllElements && node.type === "li" && path.length === atPath.length + 1;
            return matches;
        }
    });
    // For nodes have all element children, unwrap it instead
    // because the li is a duplicative wrapper
    Transforms.unwrapNodes(editor, {
        at: atPath,
        match: function(node, path) {
            var childrenAreAllElements = areAllChildrenElements(node);
            var matches = !Editor.isEditor(node) && Element.isElement(node) && childrenAreAllElements && node.type === "li" && path.length === atPath.length + 1;
            return matches;
        }
    });
    // Finally, unwrap the UL itself
    Transforms.unwrapNodes(editor, {
        match: function(n) {
            return Element.isElement(n) && listTypes.includes(n.type);
        },
        mode: "lowest"
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3Vud3JhcExpc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF0aCwgVHJhbnNmb3JtcywgRWRpdG9yLCBFbGVtZW50IH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgYXJlQWxsQ2hpbGRyZW5FbGVtZW50cyB9IGZyb20gJy4vYXJlQWxsQ2hpbGRyZW5FbGVtZW50cyc7XG5pbXBvcnQgbGlzdFR5cGVzIGZyb20gJy4vbGlzdFR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHVud3JhcExpc3QgPSAoZWRpdG9yOiBFZGl0b3IsIGF0UGF0aDogUGF0aCk6IHZvaWQgPT4ge1xuICAvLyBSZW1vdmUgdHlwZSBmb3IgYW55IG5vZGVzIHRoYXQgaGF2ZSB0ZXh0IGNoaWxkcmVuIC1cbiAgLy8gdGhpcyBtZWFucyB0aGF0IHRoZSBub2RlIHNob3VsZCByZW1haW5cbiAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIHsgdHlwZTogdW5kZWZpbmVkIH0sIHtcbiAgICBhdDogYXRQYXRoLFxuICAgIG1hdGNoOiAobm9kZSwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRyZW5BcmVBbGxFbGVtZW50cyA9IGFyZUFsbENoaWxkcmVuRWxlbWVudHMobm9kZSk7XG5cbiAgICAgIGNvbnN0IG1hdGNoZXMgPSAhRWRpdG9yLmlzRWRpdG9yKG5vZGUpXG4gICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICYmICFjaGlsZHJlbkFyZUFsbEVsZW1lbnRzXG4gICAgICAgICYmIG5vZGUudHlwZSA9PT0gJ2xpJ1xuICAgICAgICAmJiBwYXRoLmxlbmd0aCA9PT0gYXRQYXRoLmxlbmd0aCArIDE7XG5cbiAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH0sXG4gIH0pO1xuXG4gIC8vIEZvciBub2RlcyBoYXZlIGFsbCBlbGVtZW50IGNoaWxkcmVuLCB1bndyYXAgaXQgaW5zdGVhZFxuICAvLyBiZWNhdXNlIHRoZSBsaSBpcyBhIGR1cGxpY2F0aXZlIHdyYXBwZXJcbiAgVHJhbnNmb3Jtcy51bndyYXBOb2RlcyhlZGl0b3IsIHtcbiAgICBhdDogYXRQYXRoLFxuICAgIG1hdGNoOiAobm9kZSwgcGF0aCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRyZW5BcmVBbGxFbGVtZW50cyA9IGFyZUFsbENoaWxkcmVuRWxlbWVudHMobm9kZSk7XG5cbiAgICAgIGNvbnN0IG1hdGNoZXMgPSAhRWRpdG9yLmlzRWRpdG9yKG5vZGUpXG4gICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICYmIGNoaWxkcmVuQXJlQWxsRWxlbWVudHNcbiAgICAgICAgJiYgbm9kZS50eXBlID09PSAnbGknXG4gICAgICAgICYmIHBhdGgubGVuZ3RoID09PSBhdFBhdGgubGVuZ3RoICsgMTtcblxuICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gRmluYWxseSwgdW53cmFwIHRoZSBVTCBpdHNlbGZcbiAgVHJhbnNmb3Jtcy51bndyYXBOb2RlcyhlZGl0b3IsIHtcbiAgICBtYXRjaDogKG4pID0+IEVsZW1lbnQuaXNFbGVtZW50KG4pICYmIGxpc3RUeXBlcy5pbmNsdWRlcyhuLnR5cGUpLFxuICAgIG1vZGU6ICdsb3dlc3QnLFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsiVHJhbnNmb3JtcyIsIkVkaXRvciIsIkVsZW1lbnQiLCJhcmVBbGxDaGlsZHJlbkVsZW1lbnRzIiwibGlzdFR5cGVzIiwidW53cmFwTGlzdCIsImVkaXRvciIsImF0UGF0aCIsInNldE5vZGVzIiwidHlwZSIsInVuZGVmaW5lZCIsImF0IiwibWF0Y2giLCJub2RlIiwicGF0aCIsImNoaWxkcmVuQXJlQWxsRWxlbWVudHMiLCJtYXRjaGVzIiwiaXNFZGl0b3IiLCJpc0VsZW1lbnQiLCJsZW5ndGgiLCJ1bndyYXBOb2RlcyIsIm4iLCJpbmNsdWRlcyIsIm1vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQWVBLFVBQVUsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLFFBQVEsUUFBUTtBQUMxRCxTQUFTQyxzQkFBc0IsUUFBUSwyQkFBMkI7QUFDbEUsT0FBT0MsZUFBZSxjQUFjO0FBRXBDLE9BQU8sSUFBTUMsYUFBYSxTQUFDQyxRQUFnQkM7SUFDekMsc0RBQXNEO0lBQ3RELHlDQUF5QztJQUN6Q1AsV0FBV1EsUUFBUSxDQUFDRixRQUFRO1FBQUVHLE1BQU1DO0lBQVUsR0FBRztRQUMvQ0MsSUFBSUo7UUFDSkssT0FBTyxTQUFDQyxNQUFNQztZQUNaLElBQU1DLHlCQUF5QlosdUJBQXVCVTtZQUV0RCxJQUFNRyxVQUFVLENBQUNmLE9BQU9nQixRQUFRLENBQUNKLFNBQzVCWCxRQUFRZ0IsU0FBUyxDQUFDTCxTQUNsQixDQUFDRSwwQkFDREYsS0FBS0osSUFBSSxLQUFLLFFBQ2RLLEtBQUtLLE1BQU0sS0FBS1osT0FBT1ksTUFBTSxHQUFHO1lBRXJDLE9BQU9IO1FBQ1Q7SUFDRjtJQUVBLHlEQUF5RDtJQUN6RCwwQ0FBMEM7SUFDMUNoQixXQUFXb0IsV0FBVyxDQUFDZCxRQUFRO1FBQzdCSyxJQUFJSjtRQUNKSyxPQUFPLFNBQUNDLE1BQU1DO1lBQ1osSUFBTUMseUJBQXlCWix1QkFBdUJVO1lBRXRELElBQU1HLFVBQVUsQ0FBQ2YsT0FBT2dCLFFBQVEsQ0FBQ0osU0FDNUJYLFFBQVFnQixTQUFTLENBQUNMLFNBQ2xCRSwwQkFDQUYsS0FBS0osSUFBSSxLQUFLLFFBQ2RLLEtBQUtLLE1BQU0sS0FBS1osT0FBT1ksTUFBTSxHQUFHO1lBRXJDLE9BQU9IO1FBQ1Q7SUFDRjtJQUVBLGdDQUFnQztJQUNoQ2hCLFdBQVdvQixXQUFXLENBQUNkLFFBQVE7UUFDN0JNLE9BQU8sU0FBQ1M7bUJBQU1uQixRQUFRZ0IsU0FBUyxDQUFDRyxNQUFNakIsVUFBVWtCLFFBQVEsQ0FBQ0QsRUFBRVosSUFBSTs7UUFDL0RjLE1BQU07SUFDUjtBQUNGLEVBQUUifQ==