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
var _Text = /*#__PURE__*/ _interop_require_default(require("./Text"));
var _Nested = /*#__PURE__*/ _interop_require_default(require("./Nested"));
var _Iterable = /*#__PURE__*/ _interop_require_default(require("./Iterable"));
var _Relationship = /*#__PURE__*/ _interop_require_default(require("./Relationship"));
var _Tabs = /*#__PURE__*/ _interop_require_default(require("./Tabs"));
var _Select = /*#__PURE__*/ _interop_require_default(require("./Select"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = {
    text: _Text.default,
    textarea: _Text.default,
    number: _Text.default,
    email: _Text.default,
    code: _Text.default,
    json: _Text.default,
    checkbox: _Text.default,
    radio: _Select.default,
    row: _Nested.default,
    collapsible: _Nested.default,
    group: _Nested.default,
    array: _Iterable.default,
    blocks: _Iterable.default,
    date: _Text.default,
    select: _Select.default,
    richText: _Text.default,
    relationship: _Relationship.default,
    upload: _Relationship.default,
    point: _Text.default,
    tabs: _Tabs.default
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCBOZXN0ZWQgZnJvbSAnLi9OZXN0ZWQnO1xuaW1wb3J0IEl0ZXJhYmxlIGZyb20gJy4vSXRlcmFibGUnO1xuaW1wb3J0IFJlbGF0aW9uc2hpcCBmcm9tICcuL1JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGV4dDogVGV4dCxcbiAgdGV4dGFyZWE6IFRleHQsXG4gIG51bWJlcjogVGV4dCxcbiAgZW1haWw6IFRleHQsXG4gIGNvZGU6IFRleHQsXG4gIGpzb246IFRleHQsXG4gIGNoZWNrYm94OiBUZXh0LFxuICByYWRpbzogU2VsZWN0LFxuICByb3c6IE5lc3RlZCxcbiAgY29sbGFwc2libGU6IE5lc3RlZCxcbiAgZ3JvdXA6IE5lc3RlZCxcbiAgYXJyYXk6IEl0ZXJhYmxlLFxuICBibG9ja3M6IEl0ZXJhYmxlLFxuICBkYXRlOiBUZXh0LFxuICBzZWxlY3Q6IFNlbGVjdCxcbiAgcmljaFRleHQ6IFRleHQsXG4gIHJlbGF0aW9uc2hpcDogUmVsYXRpb25zaGlwLFxuICB1cGxvYWQ6IFJlbGF0aW9uc2hpcCxcbiAgcG9pbnQ6IFRleHQsXG4gIHRhYnM6IFRhYnMsXG59O1xuIl0sIm5hbWVzIjpbInRleHQiLCJUZXh0IiwidGV4dGFyZWEiLCJudW1iZXIiLCJlbWFpbCIsImNvZGUiLCJqc29uIiwiY2hlY2tib3giLCJyYWRpbyIsIlNlbGVjdCIsInJvdyIsIk5lc3RlZCIsImNvbGxhcHNpYmxlIiwiZ3JvdXAiLCJhcnJheSIsIkl0ZXJhYmxlIiwiYmxvY2tzIiwiZGF0ZSIsInNlbGVjdCIsInJpY2hUZXh0IiwicmVsYXRpb25zaGlwIiwiUmVsYXRpb25zaGlwIiwidXBsb2FkIiwicG9pbnQiLCJ0YWJzIiwiVGFicyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFPQTs7O2VBQUE7OzsyREFQaUI7NkRBQ0U7K0RBQ0U7bUVBQ0k7MkRBQ1I7NkRBQ0U7Ozs7OztJQUVuQixXQUFlO0lBQ2JBLE1BQU1DLGFBQUk7SUFDVkMsVUFBVUQsYUFBSTtJQUNkRSxRQUFRRixhQUFJO0lBQ1pHLE9BQU9ILGFBQUk7SUFDWEksTUFBTUosYUFBSTtJQUNWSyxNQUFNTCxhQUFJO0lBQ1ZNLFVBQVVOLGFBQUk7SUFDZE8sT0FBT0MsZUFBTTtJQUNiQyxLQUFLQyxlQUFNO0lBQ1hDLGFBQWFELGVBQU07SUFDbkJFLE9BQU9GLGVBQU07SUFDYkcsT0FBT0MsaUJBQVE7SUFDZkMsUUFBUUQsaUJBQVE7SUFDaEJFLE1BQU1oQixhQUFJO0lBQ1ZpQixRQUFRVCxlQUFNO0lBQ2RVLFVBQVVsQixhQUFJO0lBQ2RtQixjQUFjQyxxQkFBWTtJQUMxQkMsUUFBUUQscUJBQVk7SUFDcEJFLE9BQU90QixhQUFJO0lBQ1h1QixNQUFNQyxhQUFJO0FBQ1oifQ==