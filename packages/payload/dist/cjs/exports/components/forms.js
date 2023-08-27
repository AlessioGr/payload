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
    useForm: function() {
        return _context.useForm;
    },
    /**
     * @deprecated useWatchForm is no longer preferred. If you need all form fields, prefer `useAllFormFields`.
     */ useWatchForm: function() {
        return _context.useWatchForm;
    },
    useFormFields: function() {
        return _context.useFormFields;
    },
    useAllFormFields: function() {
        return _context.useAllFormFields;
    },
    useFormSubmitted: function() {
        return _context.useFormSubmitted;
    },
    useFormProcessing: function() {
        return _context.useFormProcessing;
    },
    useFormModified: function() {
        return _context.useFormModified;
    },
    useField: function() {
        return _useField.default;
    },
    useFieldType: function() {
        return _useField.default;
    },
    Form: function() {
        return _Form.default;
    },
    Text: function() {
        return _Text.default;
    },
    TextInput: function() {
        return _Input.default;
    },
    Group: function() {
        return _Group.default;
    },
    Select: function() {
        return _Select.default;
    },
    SelectInput: function() {
        return _Input1.default;
    },
    Checkbox: function() {
        return _Checkbox.default;
    },
    Submit: function() {
        return _Submit.default;
    },
    Label: function() {
        return _Label.default;
    },
    reduceFieldsToValues: function() {
        return _reduceFieldsToValues.default;
    },
    getSiblingData: function() {
        return _getSiblingData.default;
    },
    withCondition: function() {
        return _withCondition.default;
    }
});
var _context = require("../../admin/components/forms/Form/context");
var _useField = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/useField"));
var _Form = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/Form"));
var _Text = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/field-types/Text"));
var _Input = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/field-types/Text/Input"));
var _Group = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/field-types/Group"));
var _Select = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/field-types/Select"));
var _Input1 = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/field-types/Select/Input"));
var _Checkbox = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/field-types/Checkbox"));
var _Submit = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/Submit"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/Label"));
var _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/Form/reduceFieldsToValues"));
var _getSiblingData = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/Form/getSiblingData"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/withCondition"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHBvcnRzL2NvbXBvbmVudHMvZm9ybXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtcbiAgICB1c2VGb3JtLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHVzZVdhdGNoRm9ybSBpcyBubyBsb25nZXIgcHJlZmVycmVkLiBJZiB5b3UgbmVlZCBhbGwgZm9ybSBmaWVsZHMsIHByZWZlciBgdXNlQWxsRm9ybUZpZWxkc2AuXG4gICAgICovXG4gICAgdXNlV2F0Y2hGb3JtLFxuICAgIHVzZUZvcm1GaWVsZHMsXG4gICAgdXNlQWxsRm9ybUZpZWxkcyxcbiAgICB1c2VGb3JtU3VibWl0dGVkLFxuICAgIHVzZUZvcm1Qcm9jZXNzaW5nLFxuICAgIHVzZUZvcm1Nb2RpZmllZCxcbiAgfSBmcm9tICcuLi8uLi9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG4gIFxuICBleHBvcnQgeyBkZWZhdWx0IGFzIHVzZUZpZWxkIH0gZnJvbSAnLi4vLi4vYWRtaW4vY29tcG9uZW50cy9mb3Jtcy91c2VGaWVsZCc7XG4gIFxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm93IGNhbGxlZCB1c2VGaWVsZC4gVGhlIHVzZUZpZWxkVHlwZSBhbGlhcyB3aWxsIGJlIHJlbW92ZWQgaW4gYW4gdXBjb21pbmcgdmVyc2lvbi5cbiAgICovXG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRmllbGRUeXBlIH0gZnJvbSAnLi4vLi4vYWRtaW4vY29tcG9uZW50cy9mb3Jtcy91c2VGaWVsZCc7XG4gIFxuICBleHBvcnQgeyBkZWZhdWx0IGFzIEZvcm0gfSBmcm9tICcuLi8uLi9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0nO1xuICBcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0IH0gZnJvbSAnLi4vLi4vYWRtaW4vY29tcG9uZW50cy9mb3Jtcy9maWVsZC10eXBlcy9UZXh0JztcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHQvSW5wdXQnO1xuICBcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBHcm91cCB9IGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvZm9ybXMvZmllbGQtdHlwZXMvR3JvdXAnO1xuICBcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWxlY3QgfSBmcm9tICcuLi8uLi9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1NlbGVjdCc7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgU2VsZWN0SW5wdXQgfSBmcm9tICcuLi8uLi9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1NlbGVjdC9JbnB1dCc7XG4gIFxuICBleHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrYm94IH0gZnJvbSAnLi4vLi4vYWRtaW4vY29tcG9uZW50cy9mb3Jtcy9maWVsZC10eXBlcy9DaGVja2JveCc7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgU3VibWl0IH0gZnJvbSAnLi4vLi4vYWRtaW4vY29tcG9uZW50cy9mb3Jtcy9TdWJtaXQnO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIExhYmVsIH0gZnJvbSAnLi4vLi4vYWRtaW4vY29tcG9uZW50cy9mb3Jtcy9MYWJlbCc7XG4gIFxuICBleHBvcnQgeyBkZWZhdWx0IGFzIHJlZHVjZUZpZWxkc1RvVmFsdWVzIH0gZnJvbSAnLi4vLi4vYWRtaW4vY29tcG9uZW50cy9mb3Jtcy9Gb3JtL3JlZHVjZUZpZWxkc1RvVmFsdWVzJztcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRTaWJsaW5nRGF0YSB9IGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvZm9ybXMvRm9ybS9nZXRTaWJsaW5nRGF0YSc7XG4gIFxuICBleHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhDb25kaXRpb24gfSBmcm9tICcuLi8uLi9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL3dpdGhDb25kaXRpb24nOyJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwidXNlV2F0Y2hGb3JtIiwidXNlRm9ybUZpZWxkcyIsInVzZUFsbEZvcm1GaWVsZHMiLCJ1c2VGb3JtU3VibWl0dGVkIiwidXNlRm9ybVByb2Nlc3NpbmciLCJ1c2VGb3JtTW9kaWZpZWQiLCJ1c2VGaWVsZCIsInVzZUZpZWxkVHlwZSIsIkZvcm0iLCJUZXh0IiwiVGV4dElucHV0IiwiR3JvdXAiLCJTZWxlY3QiLCJTZWxlY3RJbnB1dCIsIkNoZWNrYm94IiwiU3VibWl0IiwiTGFiZWwiLCJyZWR1Y2VGaWVsZHNUb1ZhbHVlcyIsImdldFNpYmxpbmdEYXRhIiwid2l0aENvbmRpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFDSUEsT0FBTztlQUFQQSxnQkFBTzs7SUFDUDs7S0FFQyxHQUNEQyxZQUFZO2VBQVpBLHFCQUFZOztJQUNaQyxhQUFhO2VBQWJBLHNCQUFhOztJQUNiQyxnQkFBZ0I7ZUFBaEJBLHlCQUFnQjs7SUFDaEJDLGdCQUFnQjtlQUFoQkEseUJBQWdCOztJQUNoQkMsaUJBQWlCO2VBQWpCQSwwQkFBaUI7O0lBQ2pCQyxlQUFlO2VBQWZBLHdCQUFlOztJQUdHQyxRQUFRO2VBQVJBLGlCQUFROztJQUtSQyxZQUFZO2VBQVpBLGlCQUFZOztJQUVaQyxJQUFJO2VBQUpBLGFBQUk7O0lBRUpDLElBQUk7ZUFBSkEsYUFBSTs7SUFDSkMsU0FBUztlQUFUQSxjQUFTOztJQUVUQyxLQUFLO2VBQUxBLGNBQUs7O0lBRUxDLE1BQU07ZUFBTkEsZUFBTTs7SUFDTkMsV0FBVztlQUFYQSxlQUFXOztJQUVYQyxRQUFRO2VBQVJBLGlCQUFROztJQUNSQyxNQUFNO2VBQU5BLGVBQU07O0lBQ05DLEtBQUs7ZUFBTEEsY0FBSzs7SUFFTEMsb0JBQW9CO2VBQXBCQSw2QkFBb0I7O0lBQ3BCQyxjQUFjO2VBQWRBLHVCQUFjOztJQUVkQyxhQUFhO2VBQWJBLHNCQUFhOzs7dUJBMUIxQjsrREFFNkI7MkRBT0o7MkRBRUE7NERBQ0s7NERBRUo7NkRBRUM7NkRBQ0s7K0RBRUg7NkRBQ0Y7NERBQ0Q7MkVBRWU7cUVBQ047b0VBRUQifQ==