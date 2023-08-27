import { Editor, Transforms } from "slate";
import { isLastSelectedElementEmpty } from "./isLastSelectedElementEmpty";
export var injectVoidElement = function(editor, element) {
    var lastSelectedElementIsEmpty = isLastSelectedElementEmpty(editor);
    var previous = Editor.previous(editor);
    if (lastSelectedElementIsEmpty) {
        var _previous;
        // If previous node is void
        if (((_previous = previous) === null || _previous === void 0 ? void 0 : _previous[0]) && Editor.isVoid(editor, previous[0])) {
            // Insert a blank element between void nodes
            // so user can place cursor between void nodes
            Transforms.insertNodes(editor, {
                children: [
                    {
                        text: ""
                    }
                ]
            });
            Transforms.setNodes(editor, element);
        // Otherwise just set the empty node equal to new void
        } else {
            Transforms.setNodes(editor, element);
        }
    } else {
        Transforms.insertNodes(editor, element);
    }
    // Add an empty node after the new void
    Transforms.insertNodes(editor, {
        children: [
            {
                text: ""
            }
        ]
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2luamVjdFZvaWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yLCBFbGVtZW50LCBUcmFuc2Zvcm1zIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgRWxlbWVudE5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0xhc3RTZWxlY3RlZEVsZW1lbnRFbXB0eSB9IGZyb20gJy4vaXNMYXN0U2VsZWN0ZWRFbGVtZW50RW1wdHknO1xuXG5leHBvcnQgY29uc3QgaW5qZWN0Vm9pZEVsZW1lbnQgPSAoZWRpdG9yOiBFZGl0b3IsIGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgY29uc3QgbGFzdFNlbGVjdGVkRWxlbWVudElzRW1wdHkgPSBpc0xhc3RTZWxlY3RlZEVsZW1lbnRFbXB0eShlZGl0b3IpO1xuICBjb25zdCBwcmV2aW91cyA9IEVkaXRvci5wcmV2aW91czxFbGVtZW50Tm9kZT4oZWRpdG9yKTtcblxuICBpZiAobGFzdFNlbGVjdGVkRWxlbWVudElzRW1wdHkpIHtcbiAgICAvLyBJZiBwcmV2aW91cyBub2RlIGlzIHZvaWRcbiAgICBpZiAocHJldmlvdXM/LlswXSAmJiBFZGl0b3IuaXNWb2lkKGVkaXRvciwgcHJldmlvdXNbMF0pKSB7XG4gICAgICAvLyBJbnNlcnQgYSBibGFuayBlbGVtZW50IGJldHdlZW4gdm9pZCBub2Rlc1xuICAgICAgLy8gc28gdXNlciBjYW4gcGxhY2UgY3Vyc29yIGJldHdlZW4gdm9pZCBub2Rlc1xuICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIHsgY2hpbGRyZW46IFt7IHRleHQ6ICcnIH1dIH0pO1xuICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIGVsZW1lbnQpO1xuICAgICAgLy8gT3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSBlbXB0eSBub2RlIGVxdWFsIHRvIG5ldyB2b2lkXG4gICAgfSBlbHNlIHtcbiAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCBlbGVtZW50KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIGVsZW1lbnQpO1xuICB9XG5cbiAgLy8gQWRkIGFuIGVtcHR5IG5vZGUgYWZ0ZXIgdGhlIG5ldyB2b2lkXG4gIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCB7IGNoaWxkcmVuOiBbeyB0ZXh0OiAnJyB9XSB9KTtcbn07XG4iXSwibmFtZXMiOlsiRWRpdG9yIiwiVHJhbnNmb3JtcyIsImlzTGFzdFNlbGVjdGVkRWxlbWVudEVtcHR5IiwiaW5qZWN0Vm9pZEVsZW1lbnQiLCJlZGl0b3IiLCJlbGVtZW50IiwibGFzdFNlbGVjdGVkRWxlbWVudElzRW1wdHkiLCJwcmV2aW91cyIsImlzVm9pZCIsImluc2VydE5vZGVzIiwiY2hpbGRyZW4iLCJ0ZXh0Iiwic2V0Tm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQU0sRUFBV0MsVUFBVSxRQUFRLFFBQVE7QUFFcEQsU0FBU0MsMEJBQTBCLFFBQVEsK0JBQStCO0FBRTFFLE9BQU8sSUFBTUMsb0JBQW9CLFNBQUNDLFFBQWdCQztJQUNoRCxJQUFNQyw2QkFBNkJKLDJCQUEyQkU7SUFDOUQsSUFBTUcsV0FBV1AsT0FBT08sUUFBUSxDQUFjSDtJQUU5QyxJQUFJRSw0QkFBNEI7WUFFMUJDO1FBREosMkJBQTJCO1FBQzNCLElBQUlBLEVBQUFBLFlBQUFBLHNCQUFBQSxnQ0FBQUEsU0FBVSxDQUFDLEVBQUUsS0FBSVAsT0FBT1EsTUFBTSxDQUFDSixRQUFRRyxRQUFRLENBQUMsRUFBRSxHQUFHO1lBQ3ZELDRDQUE0QztZQUM1Qyw4Q0FBOEM7WUFDOUNOLFdBQVdRLFdBQVcsQ0FBQ0wsUUFBUTtnQkFBRU0sVUFBVTtvQkFBQzt3QkFBRUMsTUFBTTtvQkFBRztpQkFBRTtZQUFDO1lBQzFEVixXQUFXVyxRQUFRLENBQUNSLFFBQVFDO1FBQzVCLHNEQUFzRDtRQUN4RCxPQUFPO1lBQ0xKLFdBQVdXLFFBQVEsQ0FBQ1IsUUFBUUM7UUFDOUI7SUFDRixPQUFPO1FBQ0xKLFdBQVdRLFdBQVcsQ0FBQ0wsUUFBUUM7SUFDakM7SUFFQSx1Q0FBdUM7SUFDdkNKLFdBQVdRLFdBQVcsQ0FBQ0wsUUFBUTtRQUFFTSxVQUFVO1lBQUM7Z0JBQUVDLE1BQU07WUFBRztTQUFFO0lBQUM7QUFDNUQsRUFBRSJ9