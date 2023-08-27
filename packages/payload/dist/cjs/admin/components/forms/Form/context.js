"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    SubmittedContext: function() {
        return SubmittedContext;
    },
    ProcessingContext: function() {
        return ProcessingContext;
    },
    ModifiedContext: function() {
        return ModifiedContext;
    },
    useFormSubmitted: function() {
        return useFormSubmitted;
    },
    useFormProcessing: function() {
        return useFormProcessing;
    },
    useFormModified: function() {
        return useFormModified;
    },
    useForm: function() {
        return useForm;
    },
    FormContext: function() {
        return FormContext;
    },
    FormFieldsContext: function() {
        return FormFieldsContext;
    },
    useFormFields: function() {
        return useFormFields;
    },
    useAllFormFields: function() {
        return useAllFormFields;
    },
    FormWatchContext: function() {
        return FormWatchContext;
    },
    useWatchForm: function() {
        return useWatchForm;
    }
});
var _react = require("react");
var _usecontextselector = require("use-context-selector");
var FormContext = (0, _react.createContext)({});
var FormWatchContext = (0, _react.createContext)({});
var SubmittedContext = (0, _react.createContext)(false);
var ProcessingContext = (0, _react.createContext)(false);
var ModifiedContext = (0, _react.createContext)(false);
var FormFieldsContext = (0, _usecontextselector.createContext)([
    {},
    function() {
        return null;
    }
]);
/**
 * Get the state of the form, can be used to submit & validate the form.
 *
 * @see https://payloadcms.com/docs/admin/hooks#useform
 */ var useForm = function() {
    return (0, _react.useContext)(FormContext);
};
var useWatchForm = function() {
    return (0, _react.useContext)(FormWatchContext);
};
var useFormSubmitted = function() {
    return (0, _react.useContext)(SubmittedContext);
};
var useFormProcessing = function() {
    return (0, _react.useContext)(ProcessingContext);
};
var useFormModified = function() {
    return (0, _react.useContext)(ModifiedContext);
};
/**
 * Get and set the value of a form field based on a selector
 *
 * @see https://payloadcms.com/docs/admin/hooks#useformfields
 */ var useFormFields = function(selector) {
    return (0, _usecontextselector.useContextSelector)(FormFieldsContext, selector);
};
/**
 * Get the state of all form fields.
 *
 * @see https://payloadcms.com/docs/admin/hooks#useallformfields
 */ var useAllFormFields = function() {
    return (0, _usecontextselector.useContext)(FormFieldsContext);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vY29udGV4dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dFNlbGVjdG9yLCBjcmVhdGVDb250ZXh0IGFzIGNyZWF0ZVNlbGVjdG9yQ29udGV4dCwgdXNlQ29udGV4dCBhcyB1c2VGdWxsQ29udGV4dCB9IGZyb20gJ3VzZS1jb250ZXh0LXNlbGVjdG9yJztcbmltcG9ydCB7IENvbnRleHQsIEZvcm1GaWVsZHNDb250ZXh0IGFzIEZvcm1GaWVsZHNDb250ZXh0VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ29udGV4dCk7XG5jb25zdCBGb3JtV2F0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb250ZXh0KTtcbmNvbnN0IFN1Ym1pdHRlZENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGZhbHNlKTtcbmNvbnN0IFByb2Nlc3NpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChmYWxzZSk7XG5jb25zdCBNb2RpZmllZENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGZhbHNlKTtcbmNvbnN0IEZvcm1GaWVsZHNDb250ZXh0ID0gY3JlYXRlU2VsZWN0b3JDb250ZXh0PEZvcm1GaWVsZHNDb250ZXh0VHlwZT4oW3t9LCAoKSA9PiBudWxsXSk7XG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZSBvZiB0aGUgZm9ybSwgY2FuIGJlIHVzZWQgdG8gc3VibWl0ICYgdmFsaWRhdGUgdGhlIGZvcm0uXG4gKlxuICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvYWRtaW4vaG9va3MjdXNlZm9ybVxuICovXG5jb25zdCB1c2VGb3JtID0gKCk6IENvbnRleHQgPT4gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XG5jb25zdCB1c2VXYXRjaEZvcm0gPSAoKTogQ29udGV4dCA9PiB1c2VDb250ZXh0KEZvcm1XYXRjaENvbnRleHQpO1xuY29uc3QgdXNlRm9ybVN1Ym1pdHRlZCA9ICgpOiBib29sZWFuID0+IHVzZUNvbnRleHQoU3VibWl0dGVkQ29udGV4dCk7XG5jb25zdCB1c2VGb3JtUHJvY2Vzc2luZyA9ICgpOiBib29sZWFuID0+IHVzZUNvbnRleHQoUHJvY2Vzc2luZ0NvbnRleHQpO1xuY29uc3QgdXNlRm9ybU1vZGlmaWVkID0gKCk6IGJvb2xlYW4gPT4gdXNlQ29udGV4dChNb2RpZmllZENvbnRleHQpO1xuXG5cbi8qKlxuICogR2V0IGFuZCBzZXQgdGhlIHZhbHVlIG9mIGEgZm9ybSBmaWVsZCBiYXNlZCBvbiBhIHNlbGVjdG9yXG4gKlxuICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvYWRtaW4vaG9va3MjdXNlZm9ybWZpZWxkc1xuICovXG5jb25zdCB1c2VGb3JtRmllbGRzID0gPFZhbHVlID0gdW5rbm93bj4oc2VsZWN0b3I6IChjb250ZXh0OiBGb3JtRmllbGRzQ29udGV4dFR5cGUpID0+IFZhbHVlKTogVmFsdWUgPT4gdXNlQ29udGV4dFNlbGVjdG9yKEZvcm1GaWVsZHNDb250ZXh0LCBzZWxlY3Rvcik7XG5cbi8qKlxuICogR2V0IHRoZSBzdGF0ZSBvZiBhbGwgZm9ybSBmaWVsZHMuXG4gKlxuICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvYWRtaW4vaG9va3MjdXNlYWxsZm9ybWZpZWxkc1xuICovXG5jb25zdCB1c2VBbGxGb3JtRmllbGRzID0gKCk6IEZvcm1GaWVsZHNDb250ZXh0VHlwZSA9PiB1c2VGdWxsQ29udGV4dChGb3JtRmllbGRzQ29udGV4dCk7XG5cbmV4cG9ydCB7XG4gIFN1Ym1pdHRlZENvbnRleHQsXG4gIFByb2Nlc3NpbmdDb250ZXh0LFxuICBNb2RpZmllZENvbnRleHQsXG4gIHVzZUZvcm1TdWJtaXR0ZWQsXG4gIHVzZUZvcm1Qcm9jZXNzaW5nLFxuICB1c2VGb3JtTW9kaWZpZWQsXG4gIHVzZUZvcm0sXG4gIEZvcm1Db250ZXh0LFxuICBGb3JtRmllbGRzQ29udGV4dCxcbiAgdXNlRm9ybUZpZWxkcyxcbiAgdXNlQWxsRm9ybUZpZWxkcyxcbiAgRm9ybVdhdGNoQ29udGV4dCxcbiAgdXNlV2F0Y2hGb3JtLFxufTtcbiJdLCJuYW1lcyI6WyJTdWJtaXR0ZWRDb250ZXh0IiwiUHJvY2Vzc2luZ0NvbnRleHQiLCJNb2RpZmllZENvbnRleHQiLCJ1c2VGb3JtU3VibWl0dGVkIiwidXNlRm9ybVByb2Nlc3NpbmciLCJ1c2VGb3JtTW9kaWZpZWQiLCJ1c2VGb3JtIiwiRm9ybUNvbnRleHQiLCJGb3JtRmllbGRzQ29udGV4dCIsInVzZUZvcm1GaWVsZHMiLCJ1c2VBbGxGb3JtRmllbGRzIiwiRm9ybVdhdGNoQ29udGV4dCIsInVzZVdhdGNoRm9ybSIsImNyZWF0ZUNvbnRleHQiLCJjcmVhdGVTZWxlY3RvckNvbnRleHQiLCJ1c2VDb250ZXh0Iiwic2VsZWN0b3IiLCJ1c2VDb250ZXh0U2VsZWN0b3IiLCJ1c2VGdWxsQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFzQ0VBLGdCQUFnQjtlQUFoQkE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLGVBQWU7ZUFBZkE7O0lBQ0FDLGdCQUFnQjtlQUFoQkE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLGVBQWU7ZUFBZkE7O0lBQ0FDLE9BQU87ZUFBUEE7O0lBQ0FDLFdBQVc7ZUFBWEE7O0lBQ0FDLGlCQUFpQjtlQUFqQkE7O0lBQ0FDLGFBQWE7ZUFBYkE7O0lBQ0FDLGdCQUFnQjtlQUFoQkE7O0lBQ0FDLGdCQUFnQjtlQUFoQkE7O0lBQ0FDLFlBQVk7ZUFBWkE7OztxQkFsRHdDO2tDQUMrRDtBQUd6RyxJQUFNTCxjQUFjTSxJQUFBQSxvQkFBYSxFQUFDLENBQUM7QUFDbkMsSUFBTUYsbUJBQW1CRSxJQUFBQSxvQkFBYSxFQUFDLENBQUM7QUFDeEMsSUFBTWIsbUJBQW1CYSxJQUFBQSxvQkFBYSxFQUFDO0FBQ3ZDLElBQU1aLG9CQUFvQlksSUFBQUEsb0JBQWEsRUFBQztBQUN4QyxJQUFNWCxrQkFBa0JXLElBQUFBLG9CQUFhLEVBQUM7QUFDdEMsSUFBTUwsb0JBQW9CTSxJQUFBQSxpQ0FBcUIsRUFBd0I7SUFBQyxDQUFDO0lBQUc7ZUFBTTs7Q0FBSztBQUV2Rjs7OztDQUlDLEdBQ0QsSUFBTVIsVUFBVTtXQUFlUyxJQUFBQSxpQkFBVSxFQUFDUjs7QUFDMUMsSUFBTUssZUFBZTtXQUFlRyxJQUFBQSxpQkFBVSxFQUFDSjs7QUFDL0MsSUFBTVIsbUJBQW1CO1dBQWVZLElBQUFBLGlCQUFVLEVBQUNmOztBQUNuRCxJQUFNSSxvQkFBb0I7V0FBZVcsSUFBQUEsaUJBQVUsRUFBQ2Q7O0FBQ3BELElBQU1JLGtCQUFrQjtXQUFlVSxJQUFBQSxpQkFBVSxFQUFDYjs7QUFHbEQ7Ozs7Q0FJQyxHQUNELElBQU1PLGdCQUFnQixTQUFrQk87V0FBK0RDLElBQUFBLHNDQUFrQixFQUFDVCxtQkFBbUJROztBQUU3STs7OztDQUlDLEdBQ0QsSUFBTU4sbUJBQW1CO1dBQTZCUSxJQUFBQSw4QkFBYyxFQUFDViJ9