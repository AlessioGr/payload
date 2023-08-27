var submit = function() {
    return undefined;
};
var getSiblingData = function() {
    return undefined;
};
var dispatchFields = function() {
    return undefined;
};
var validateForm = function() {
    return undefined;
};
var createFormData = function() {
    return undefined;
};
var setModified = function() {
    return undefined;
};
var setProcessing = function() {
    return undefined;
};
var setSubmitted = function() {
    return undefined;
};
var reset = function() {
    return undefined;
};
var initialContextState = {
    getFields: function() {
        return {};
    },
    getField: function() {
        return undefined;
    },
    getData: function() {
        return undefined;
    },
    getSiblingData: getSiblingData,
    getDataByPath: function() {
        return undefined;
    },
    validateForm: validateForm,
    createFormData: createFormData,
    submit: submit,
    dispatchFields: dispatchFields,
    setModified: setModified,
    setProcessing: setProcessing,
    setSubmitted: setSubmitted,
    fields: {},
    disabled: false,
    formRef: null,
    reset: reset,
    replaceState: function() {
        return undefined;
    },
    buildRowErrors: function() {
        return undefined;
    },
    addFieldRow: function() {
        return undefined;
    },
    removeFieldRow: function() {
        return undefined;
    },
    replaceFieldRow: function() {
        return undefined;
    }
};
export default initialContextState;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vaW5pdENvbnRleHRTdGF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGaWVsZHMsXG4gIEZvcm1GaWVsZCxcbiAgRGF0YSxcbiAgRGlzcGF0Y2hGaWVsZHMsXG4gIFN1Ym1pdCxcbiAgQ29udGV4dCxcbiAgR2V0U2libGluZ0RhdGEsXG4gIFZhbGlkYXRlRm9ybSxcbiAgQ3JlYXRlRm9ybURhdGEsXG4gIFNldE1vZGlmaWVkLFxuICBTZXRQcm9jZXNzaW5nLFxuICBTZXRTdWJtaXR0ZWQsXG4gIFJlc2V0LFxufSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qgc3VibWl0OiBTdWJtaXQgPSAoKSA9PiB1bmRlZmluZWQ7XG5jb25zdCBnZXRTaWJsaW5nRGF0YTogR2V0U2libGluZ0RhdGEgPSAoKSA9PiB1bmRlZmluZWQ7XG5jb25zdCBkaXNwYXRjaEZpZWxkczogRGlzcGF0Y2hGaWVsZHMgPSAoKSA9PiB1bmRlZmluZWQ7XG5jb25zdCB2YWxpZGF0ZUZvcm06IFZhbGlkYXRlRm9ybSA9ICgpID0+IHVuZGVmaW5lZDtcbmNvbnN0IGNyZWF0ZUZvcm1EYXRhOiBDcmVhdGVGb3JtRGF0YSA9ICgpID0+IHVuZGVmaW5lZDtcblxuY29uc3Qgc2V0TW9kaWZpZWQ6IFNldE1vZGlmaWVkID0gKCkgPT4gdW5kZWZpbmVkO1xuY29uc3Qgc2V0UHJvY2Vzc2luZzogU2V0UHJvY2Vzc2luZyA9ICgpID0+IHVuZGVmaW5lZDtcbmNvbnN0IHNldFN1Ym1pdHRlZDogU2V0U3VibWl0dGVkID0gKCkgPT4gdW5kZWZpbmVkO1xuY29uc3QgcmVzZXQ6IFJlc2V0ID0gKCkgPT4gdW5kZWZpbmVkO1xuXG5jb25zdCBpbml0aWFsQ29udGV4dFN0YXRlOiBDb250ZXh0ID0ge1xuICBnZXRGaWVsZHM6ICgpOiBGaWVsZHMgPT4gKHt9KSxcbiAgZ2V0RmllbGQ6ICgpOiBGb3JtRmllbGQgPT4gdW5kZWZpbmVkLFxuICBnZXREYXRhOiAoKTogRGF0YSA9PiB1bmRlZmluZWQsXG4gIGdldFNpYmxpbmdEYXRhLFxuICBnZXREYXRhQnlQYXRoOiAoKSA9PiB1bmRlZmluZWQsXG4gIHZhbGlkYXRlRm9ybSxcbiAgY3JlYXRlRm9ybURhdGEsXG4gIHN1Ym1pdCxcbiAgZGlzcGF0Y2hGaWVsZHMsXG4gIHNldE1vZGlmaWVkLFxuICBzZXRQcm9jZXNzaW5nLFxuICBzZXRTdWJtaXR0ZWQsXG4gIGZpZWxkczoge30sXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZm9ybVJlZjogbnVsbCxcbiAgcmVzZXQsXG4gIHJlcGxhY2VTdGF0ZTogKCkgPT4gdW5kZWZpbmVkLFxuICBidWlsZFJvd0Vycm9yczogKCkgPT4gdW5kZWZpbmVkLFxuICBhZGRGaWVsZFJvdzogKCkgPT4gdW5kZWZpbmVkLFxuICByZW1vdmVGaWVsZFJvdzogKCkgPT4gdW5kZWZpbmVkLFxuICByZXBsYWNlRmllbGRSb3c6ICgpID0+IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxDb250ZXh0U3RhdGU7XG4iXSwibmFtZXMiOlsic3VibWl0IiwidW5kZWZpbmVkIiwiZ2V0U2libGluZ0RhdGEiLCJkaXNwYXRjaEZpZWxkcyIsInZhbGlkYXRlRm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwic2V0TW9kaWZpZWQiLCJzZXRQcm9jZXNzaW5nIiwic2V0U3VibWl0dGVkIiwicmVzZXQiLCJpbml0aWFsQ29udGV4dFN0YXRlIiwiZ2V0RmllbGRzIiwiZ2V0RmllbGQiLCJnZXREYXRhIiwiZ2V0RGF0YUJ5UGF0aCIsImZpZWxkcyIsImRpc2FibGVkIiwiZm9ybVJlZiIsInJlcGxhY2VTdGF0ZSIsImJ1aWxkUm93RXJyb3JzIiwiYWRkRmllbGRSb3ciLCJyZW1vdmVGaWVsZFJvdyIsInJlcGxhY2VGaWVsZFJvdyJdLCJtYXBwaW5ncyI6IkFBZ0JBLElBQU1BLFNBQWlCO1dBQU1DOztBQUM3QixJQUFNQyxpQkFBaUM7V0FBTUQ7O0FBQzdDLElBQU1FLGlCQUFpQztXQUFNRjs7QUFDN0MsSUFBTUcsZUFBNkI7V0FBTUg7O0FBQ3pDLElBQU1JLGlCQUFpQztXQUFNSjs7QUFFN0MsSUFBTUssY0FBMkI7V0FBTUw7O0FBQ3ZDLElBQU1NLGdCQUErQjtXQUFNTjs7QUFDM0MsSUFBTU8sZUFBNkI7V0FBTVA7O0FBQ3pDLElBQU1RLFFBQWU7V0FBTVI7O0FBRTNCLElBQU1TLHNCQUErQjtJQUNuQ0MsV0FBVztlQUFlLENBQUM7O0lBQzNCQyxVQUFVO2VBQWlCWDs7SUFDM0JZLFNBQVM7ZUFBWVo7O0lBQ3JCQyxnQkFBQUE7SUFDQVksZUFBZTtlQUFNYjs7SUFDckJHLGNBQUFBO0lBQ0FDLGdCQUFBQTtJQUNBTCxRQUFBQTtJQUNBRyxnQkFBQUE7SUFDQUcsYUFBQUE7SUFDQUMsZUFBQUE7SUFDQUMsY0FBQUE7SUFDQU8sUUFBUSxDQUFDO0lBQ1RDLFVBQVU7SUFDVkMsU0FBUztJQUNUUixPQUFBQTtJQUNBUyxjQUFjO2VBQU1qQjs7SUFDcEJrQixnQkFBZ0I7ZUFBTWxCOztJQUN0Qm1CLGFBQWE7ZUFBTW5COztJQUNuQm9CLGdCQUFnQjtlQUFNcEI7O0lBQ3RCcUIsaUJBQWlCO2VBQU1yQjs7QUFDekI7QUFFQSxlQUFlUyxvQkFBb0IifQ==