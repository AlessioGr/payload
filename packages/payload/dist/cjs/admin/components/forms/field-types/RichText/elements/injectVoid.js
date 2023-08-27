"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "injectVoidElement", {
    enumerable: true,
    get: function() {
        return injectVoidElement;
    }
});
var _slate = require("slate");
var _isLastSelectedElementEmpty = require("./isLastSelectedElementEmpty");
var injectVoidElement = function(editor, element) {
    var lastSelectedElementIsEmpty = (0, _isLastSelectedElementEmpty.isLastSelectedElementEmpty)(editor);
    var previous = _slate.Editor.previous(editor);
    if (lastSelectedElementIsEmpty) {
        var _previous;
        // If previous node is void
        if (((_previous = previous) === null || _previous === void 0 ? void 0 : _previous[0]) && _slate.Editor.isVoid(editor, previous[0])) {
            // Insert a blank element between void nodes
            // so user can place cursor between void nodes
            _slate.Transforms.insertNodes(editor, {
                children: [
                    {
                        text: ""
                    }
                ]
            });
            _slate.Transforms.setNodes(editor, element);
        // Otherwise just set the empty node equal to new void
        } else {
            _slate.Transforms.setNodes(editor, element);
        }
    } else {
        _slate.Transforms.insertNodes(editor, element);
    }
    // Add an empty node after the new void
    _slate.Transforms.insertNodes(editor, {
        children: [
            {
                text: ""
            }
        ]
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2luamVjdFZvaWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yLCBFbGVtZW50LCBUcmFuc2Zvcm1zIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgRWxlbWVudE5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0xhc3RTZWxlY3RlZEVsZW1lbnRFbXB0eSB9IGZyb20gJy4vaXNMYXN0U2VsZWN0ZWRFbGVtZW50RW1wdHknO1xuXG5leHBvcnQgY29uc3QgaW5qZWN0Vm9pZEVsZW1lbnQgPSAoZWRpdG9yOiBFZGl0b3IsIGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgY29uc3QgbGFzdFNlbGVjdGVkRWxlbWVudElzRW1wdHkgPSBpc0xhc3RTZWxlY3RlZEVsZW1lbnRFbXB0eShlZGl0b3IpO1xuICBjb25zdCBwcmV2aW91cyA9IEVkaXRvci5wcmV2aW91czxFbGVtZW50Tm9kZT4oZWRpdG9yKTtcblxuICBpZiAobGFzdFNlbGVjdGVkRWxlbWVudElzRW1wdHkpIHtcbiAgICAvLyBJZiBwcmV2aW91cyBub2RlIGlzIHZvaWRcbiAgICBpZiAocHJldmlvdXM/LlswXSAmJiBFZGl0b3IuaXNWb2lkKGVkaXRvciwgcHJldmlvdXNbMF0pKSB7XG4gICAgICAvLyBJbnNlcnQgYSBibGFuayBlbGVtZW50IGJldHdlZW4gdm9pZCBub2Rlc1xuICAgICAgLy8gc28gdXNlciBjYW4gcGxhY2UgY3Vyc29yIGJldHdlZW4gdm9pZCBub2Rlc1xuICAgICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIHsgY2hpbGRyZW46IFt7IHRleHQ6ICcnIH1dIH0pO1xuICAgICAgVHJhbnNmb3Jtcy5zZXROb2RlcyhlZGl0b3IsIGVsZW1lbnQpO1xuICAgICAgLy8gT3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSBlbXB0eSBub2RlIGVxdWFsIHRvIG5ldyB2b2lkXG4gICAgfSBlbHNlIHtcbiAgICAgIFRyYW5zZm9ybXMuc2V0Tm9kZXMoZWRpdG9yLCBlbGVtZW50KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVHJhbnNmb3Jtcy5pbnNlcnROb2RlcyhlZGl0b3IsIGVsZW1lbnQpO1xuICB9XG5cbiAgLy8gQWRkIGFuIGVtcHR5IG5vZGUgYWZ0ZXIgdGhlIG5ldyB2b2lkXG4gIFRyYW5zZm9ybXMuaW5zZXJ0Tm9kZXMoZWRpdG9yLCB7IGNoaWxkcmVuOiBbeyB0ZXh0OiAnJyB9XSB9KTtcbn07XG4iXSwibmFtZXMiOlsiaW5qZWN0Vm9pZEVsZW1lbnQiLCJlZGl0b3IiLCJlbGVtZW50IiwibGFzdFNlbGVjdGVkRWxlbWVudElzRW1wdHkiLCJpc0xhc3RTZWxlY3RlZEVsZW1lbnRFbXB0eSIsInByZXZpb3VzIiwiRWRpdG9yIiwiaXNWb2lkIiwiVHJhbnNmb3JtcyIsImluc2VydE5vZGVzIiwiY2hpbGRyZW4iLCJ0ZXh0Iiwic2V0Tm9kZXMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzs7ZUFBQUE7OztxQkFKK0I7MENBRUQ7QUFFcEMsSUFBTUEsb0JBQW9CLFNBQUNDLFFBQWdCQztJQUNoRCxJQUFNQyw2QkFBNkJDLElBQUFBLHNEQUEwQixFQUFDSDtJQUM5RCxJQUFNSSxXQUFXQyxhQUFNLENBQUNELFFBQVEsQ0FBY0o7SUFFOUMsSUFBSUUsNEJBQTRCO1lBRTFCRTtRQURKLDJCQUEyQjtRQUMzQixJQUFJQSxFQUFBQSxZQUFBQSxzQkFBQUEsZ0NBQUFBLFNBQVUsQ0FBQyxFQUFFLEtBQUlDLGFBQU0sQ0FBQ0MsTUFBTSxDQUFDTixRQUFRSSxRQUFRLENBQUMsRUFBRSxHQUFHO1lBQ3ZELDRDQUE0QztZQUM1Qyw4Q0FBOEM7WUFDOUNHLGlCQUFVLENBQUNDLFdBQVcsQ0FBQ1IsUUFBUTtnQkFBRVMsVUFBVTtvQkFBQzt3QkFBRUMsTUFBTTtvQkFBRztpQkFBRTtZQUFDO1lBQzFESCxpQkFBVSxDQUFDSSxRQUFRLENBQUNYLFFBQVFDO1FBQzVCLHNEQUFzRDtRQUN4RCxPQUFPO1lBQ0xNLGlCQUFVLENBQUNJLFFBQVEsQ0FBQ1gsUUFBUUM7UUFDOUI7SUFDRixPQUFPO1FBQ0xNLGlCQUFVLENBQUNDLFdBQVcsQ0FBQ1IsUUFBUUM7SUFDakM7SUFFQSx1Q0FBdUM7SUFDdkNNLGlCQUFVLENBQUNDLFdBQVcsQ0FBQ1IsUUFBUTtRQUFFUyxVQUFVO1lBQUM7Z0JBQUVDLE1BQU07WUFBRztTQUFFO0lBQUM7QUFDNUQifQ==