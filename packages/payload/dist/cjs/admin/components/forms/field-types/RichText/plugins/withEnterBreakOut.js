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
var enterBreakOutTypes = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "link"
];
var withEnterBreakOut = function(editor) {
    var newEditor = editor;
    newEditor.shouldBreakOutOnEnter = function(element) {
        return enterBreakOutTypes.includes(String(element.type));
    };
    return newEditor;
};
var _default = withEnterBreakOut;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L3BsdWdpbnMvd2l0aEVudGVyQnJlYWtPdXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW50ZXJCcmVha091dFR5cGVzID0gWydoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdsaW5rJ107XG5cbmNvbnN0IHdpdGhFbnRlckJyZWFrT3V0ID0gKGVkaXRvcikgPT4ge1xuICBjb25zdCBuZXdFZGl0b3IgPSBlZGl0b3I7XG4gIG5ld0VkaXRvci5zaG91bGRCcmVha091dE9uRW50ZXIgPSAoZWxlbWVudCkgPT4gZW50ZXJCcmVha091dFR5cGVzLmluY2x1ZGVzKFN0cmluZyhlbGVtZW50LnR5cGUpKTtcbiAgcmV0dXJuIG5ld0VkaXRvcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFbnRlckJyZWFrT3V0O1xuIl0sIm5hbWVzIjpbImVudGVyQnJlYWtPdXRUeXBlcyIsIndpdGhFbnRlckJyZWFrT3V0IiwiZWRpdG9yIiwibmV3RWRpdG9yIiwic2hvdWxkQnJlYWtPdXRPbkVudGVyIiwiZWxlbWVudCIsImluY2x1ZGVzIiwiU3RyaW5nIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFRQTs7O2VBQUE7OztBQVJBLElBQU1BLHFCQUFxQjtJQUFDO0lBQU07SUFBTTtJQUFNO0lBQU07SUFBTTtJQUFNO0NBQU87QUFFdkUsSUFBTUMsb0JBQW9CLFNBQUNDO0lBQ3pCLElBQU1DLFlBQVlEO0lBQ2xCQyxVQUFVQyxxQkFBcUIsR0FBRyxTQUFDQztlQUFZTCxtQkFBbUJNLFFBQVEsQ0FBQ0MsT0FBT0YsUUFBUUcsSUFBSTs7SUFDOUYsT0FBT0w7QUFDVDtJQUVBLFdBQWVGIn0=