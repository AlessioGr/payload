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
var withRelationship = function(incomingEditor) {
    var editor = incomingEditor;
    var isVoid = editor.isVoid;
    editor.isVoid = function(element) {
        return element.type === "upload" ? true : isVoid(element);
    };
    return editor;
};
var _default = withRelationship;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3VwbG9hZC9wbHVnaW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdpdGhSZWxhdGlvbnNoaXAgPSAoaW5jb21pbmdFZGl0b3IpID0+IHtcbiAgY29uc3QgZWRpdG9yID0gaW5jb21pbmdFZGl0b3I7XG4gIGNvbnN0IHsgaXNWb2lkIH0gPSBlZGl0b3I7XG5cbiAgZWRpdG9yLmlzVm9pZCA9IChlbGVtZW50KSA9PiAoZWxlbWVudC50eXBlID09PSAndXBsb2FkJyA/IHRydWUgOiBpc1ZvaWQoZWxlbWVudCkpO1xuXG4gIHJldHVybiBlZGl0b3I7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVsYXRpb25zaGlwO1xuIl0sIm5hbWVzIjpbIndpdGhSZWxhdGlvbnNoaXAiLCJpbmNvbWluZ0VkaXRvciIsImVkaXRvciIsImlzVm9pZCIsImVsZW1lbnQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7OytCQVNBOzs7ZUFBQTs7O0FBVEEsSUFBTUEsbUJBQW1CLFNBQUNDO0lBQ3hCLElBQU1DLFNBQVNEO0lBQ2YsSUFBTSxBQUFFRSxTQUFXRCxPQUFYQztJQUVSRCxPQUFPQyxNQUFNLEdBQUcsU0FBQ0M7ZUFBYUEsUUFBUUMsSUFBSSxLQUFLLFdBQVcsT0FBT0YsT0FBT0M7O0lBRXhFLE9BQU9GO0FBQ1Q7SUFFQSxXQUFlRiJ9