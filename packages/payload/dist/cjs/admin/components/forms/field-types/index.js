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
var _Code = /*#__PURE__*/ _interop_require_default(require("./Code"));
var _JSON = /*#__PURE__*/ _interop_require_default(require("./JSON"));
var _Email = /*#__PURE__*/ _interop_require_default(require("./Email"));
var _HiddenInput = /*#__PURE__*/ _interop_require_default(require("./HiddenInput"));
var _Text = /*#__PURE__*/ _interop_require_default(require("./Text"));
var _DateTime = /*#__PURE__*/ _interop_require_default(require("./DateTime"));
var _Password = /*#__PURE__*/ _interop_require_default(require("./Password"));
var _ConfirmPassword = /*#__PURE__*/ _interop_require_default(require("./ConfirmPassword"));
var _Relationship = /*#__PURE__*/ _interop_require_default(require("./Relationship"));
var _Textarea = /*#__PURE__*/ _interop_require_default(require("./Textarea"));
var _Select = /*#__PURE__*/ _interop_require_default(require("./Select"));
var _Number = /*#__PURE__*/ _interop_require_default(require("./Number"));
var _Checkbox = /*#__PURE__*/ _interop_require_default(require("./Checkbox"));
var _RichText = /*#__PURE__*/ _interop_require_default(require("./RichText"));
var _RadioGroup = /*#__PURE__*/ _interop_require_default(require("./RadioGroup"));
var _Point = /*#__PURE__*/ _interop_require_default(require("./Point"));
var _Blocks = /*#__PURE__*/ _interop_require_default(require("./Blocks"));
var _Group = /*#__PURE__*/ _interop_require_default(require("./Group"));
var _Array = /*#__PURE__*/ _interop_require_default(require("./Array"));
var _Row = /*#__PURE__*/ _interop_require_default(require("./Row"));
var _Collapsible = /*#__PURE__*/ _interop_require_default(require("./Collapsible"));
var _Tabs = /*#__PURE__*/ _interop_require_default(require("./Tabs"));
var _Upload = /*#__PURE__*/ _interop_require_default(require("./Upload"));
var _UI = /*#__PURE__*/ _interop_require_default(require("./UI"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var fieldTypes = {
    code: _Code.default,
    json: _JSON.default,
    email: _Email.default,
    hidden: _HiddenInput.default,
    text: _Text.default,
    date: _DateTime.default,
    password: _Password.default,
    confirmPassword: _ConfirmPassword.default,
    relationship: _Relationship.default,
    textarea: _Textarea.default,
    select: _Select.default,
    number: _Number.default,
    checkbox: _Checkbox.default,
    richText: _RichText.default,
    point: _Point.default,
    radio: _RadioGroup.default,
    blocks: _Blocks.default,
    group: _Group.default,
    array: _Array.default,
    row: _Row.default,
    collapsible: _Collapsible.default,
    tabs: _Tabs.default,
    upload: _Upload.default,
    ui: _UI.default
};
var _default = fieldTypes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29kZSBmcm9tICcuL0NvZGUnO1xuaW1wb3J0IGpzb24gZnJvbSAnLi9KU09OJztcbmltcG9ydCBlbWFpbCBmcm9tICcuL0VtYWlsJztcbmltcG9ydCBoaWRkZW4gZnJvbSAnLi9IaWRkZW5JbnB1dCc7XG5pbXBvcnQgdGV4dCBmcm9tICcuL1RleHQnO1xuaW1wb3J0IGRhdGUgZnJvbSAnLi9EYXRlVGltZSc7XG5cbmltcG9ydCBwYXNzd29yZCBmcm9tICcuL1Bhc3N3b3JkJztcbmltcG9ydCBjb25maXJtUGFzc3dvcmQgZnJvbSAnLi9Db25maXJtUGFzc3dvcmQnO1xuaW1wb3J0IHJlbGF0aW9uc2hpcCBmcm9tICcuL1JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgdGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSc7XG5pbXBvcnQgc2VsZWN0IGZyb20gJy4vU2VsZWN0JztcbmltcG9ydCBudW1iZXIgZnJvbSAnLi9OdW1iZXInO1xuaW1wb3J0IGNoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnO1xuaW1wb3J0IHJpY2hUZXh0IGZyb20gJy4vUmljaFRleHQnO1xuaW1wb3J0IHJhZGlvIGZyb20gJy4vUmFkaW9Hcm91cCc7XG5pbXBvcnQgcG9pbnQgZnJvbSAnLi9Qb2ludCc7XG5cbmltcG9ydCBibG9ja3MgZnJvbSAnLi9CbG9ja3MnO1xuaW1wb3J0IGdyb3VwIGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IGFycmF5IGZyb20gJy4vQXJyYXknO1xuaW1wb3J0IHJvdyBmcm9tICcuL1Jvdyc7XG5pbXBvcnQgY29sbGFwc2libGUgZnJvbSAnLi9Db2xsYXBzaWJsZSc7XG5pbXBvcnQgdGFicyBmcm9tICcuL1RhYnMnO1xuaW1wb3J0IHVwbG9hZCBmcm9tICcuL1VwbG9hZCc7XG5pbXBvcnQgdWkgZnJvbSAnLi9VSSc7XG5cbmV4cG9ydCB0eXBlIEZpZWxkVHlwZXMgPSB7XG4gIGNvZGU6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBqc29uOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgZW1haWw6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBoaWRkZW46IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICB0ZXh0OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgZGF0ZTogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIHBhc3N3b3JkOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgY29uZmlybVBhc3N3b3JkOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgcmVsYXRpb25zaGlwOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgdGV4dGFyZWE6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBzZWxlY3Q6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBudW1iZXI6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBwb2ludDogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIGNoZWNrYm94OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgcmljaFRleHQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICByYWRpbzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIGJsb2NrczogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIGdyb3VwOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5cbiAgYXJyYXk6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICByb3c6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICBjb2xsYXBzaWJsZTogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG4gIHRhYnM6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICB1cGxvYWQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PlxuICB1aTogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG59XG5cbmNvbnN0IGZpZWxkVHlwZXM6IEZpZWxkVHlwZXMgPSB7XG4gIGNvZGUsXG4gIGpzb24sXG4gIGVtYWlsLFxuICBoaWRkZW4sXG4gIHRleHQsXG4gIGRhdGUsXG4gIHBhc3N3b3JkLFxuICBjb25maXJtUGFzc3dvcmQsXG4gIHJlbGF0aW9uc2hpcCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCxcbiAgbnVtYmVyLFxuICBjaGVja2JveCxcbiAgcmljaFRleHQsXG4gIHBvaW50LFxuICByYWRpbyxcbiAgYmxvY2tzLFxuICBncm91cCxcbiAgYXJyYXksXG4gIHJvdyxcbiAgY29sbGFwc2libGUsXG4gIHRhYnMsXG4gIHVwbG9hZCxcbiAgdWksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaWVsZFR5cGVzO1xuIl0sIm5hbWVzIjpbImZpZWxkVHlwZXMiLCJjb2RlIiwianNvbiIsImVtYWlsIiwiaGlkZGVuIiwidGV4dCIsImRhdGUiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInJlbGF0aW9uc2hpcCIsInRleHRhcmVhIiwic2VsZWN0IiwibnVtYmVyIiwiY2hlY2tib3giLCJyaWNoVGV4dCIsInBvaW50IiwicmFkaW8iLCJibG9ja3MiLCJncm91cCIsImFycmF5Iiwicm93IiwiY29sbGFwc2libGUiLCJ0YWJzIiwidXBsb2FkIiwidWkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBaUZBOzs7ZUFBQTs7OzJEQWpGaUI7MkRBQ0E7NERBQ0M7a0VBQ0M7MkRBQ0Y7K0RBQ0E7K0RBRUk7c0VBQ087bUVBQ0g7K0RBQ0o7NkRBQ0Y7NkRBQ0E7K0RBQ0U7K0RBQ0E7aUVBQ0g7NERBQ0E7NkRBRUM7NERBQ0Q7NERBQ0E7MERBQ0Y7a0VBQ1E7MkRBQ1A7NkRBQ0U7eURBQ0o7Ozs7OztBQTZCZixJQUFNQSxhQUF5QjtJQUM3QkMsTUFBQUEsYUFBSTtJQUNKQyxNQUFBQSxhQUFJO0lBQ0pDLE9BQUFBLGNBQUs7SUFDTEMsUUFBQUEsb0JBQU07SUFDTkMsTUFBQUEsYUFBSTtJQUNKQyxNQUFBQSxpQkFBSTtJQUNKQyxVQUFBQSxpQkFBUTtJQUNSQyxpQkFBQUEsd0JBQWU7SUFDZkMsY0FBQUEscUJBQVk7SUFDWkMsVUFBQUEsaUJBQVE7SUFDUkMsUUFBQUEsZUFBTTtJQUNOQyxRQUFBQSxlQUFNO0lBQ05DLFVBQUFBLGlCQUFRO0lBQ1JDLFVBQUFBLGlCQUFRO0lBQ1JDLE9BQUFBLGNBQUs7SUFDTEMsT0FBQUEsbUJBQUs7SUFDTEMsUUFBQUEsZUFBTTtJQUNOQyxPQUFBQSxjQUFLO0lBQ0xDLE9BQUFBLGNBQUs7SUFDTEMsS0FBQUEsWUFBRztJQUNIQyxhQUFBQSxvQkFBVztJQUNYQyxNQUFBQSxhQUFJO0lBQ0pDLFFBQUFBLGVBQU07SUFDTkMsSUFBQUEsV0FBRTtBQUNKO0lBRUEsV0FBZXhCIn0=