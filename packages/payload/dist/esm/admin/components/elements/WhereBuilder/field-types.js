function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var boolean = [
    {
        label: "equals",
        value: "equals"
    },
    {
        label: "isNotEqualTo",
        value: "not_equals"
    }
];
var base = _to_consumable_array(boolean).concat([
    {
        label: "isIn",
        value: "in"
    },
    {
        label: "isNotIn",
        value: "not_in"
    },
    {
        label: "exists",
        value: "exists"
    }
]);
var numeric = _to_consumable_array(base).concat([
    {
        label: "isGreaterThan",
        value: "greater_than"
    },
    {
        label: "isLessThan",
        value: "less_than"
    },
    {
        label: "isLessThanOrEqualTo",
        value: "less_than_equal"
    },
    {
        label: "isGreaterThanOrEqualTo",
        value: "greater_than_equals"
    }
]);
var geo = _to_consumable_array(boolean).concat([
    {
        label: "exists",
        value: "exists"
    },
    {
        label: "near",
        value: "near"
    }
]);
var within = {
    label: "within",
    value: "within"
};
var intersects = {
    label: "intersects",
    value: "intersects"
};
var like = {
    label: "isLike",
    value: "like"
};
var contains = {
    label: "contains",
    value: "contains"
};
var fieldTypeConditions = {
    text: {
        component: "Text",
        operators: _to_consumable_array(base).concat([
            like,
            contains
        ])
    },
    email: {
        component: "Text",
        operators: _to_consumable_array(base).concat([
            contains
        ])
    },
    textarea: {
        component: "Text",
        operators: _to_consumable_array(base).concat([
            like,
            contains
        ])
    },
    code: {
        component: "Text",
        operators: _to_consumable_array(base).concat([
            like,
            contains
        ])
    },
    json: {
        component: "Text",
        operators: _to_consumable_array(base).concat([
            like,
            contains,
            within,
            intersects
        ])
    },
    richText: {
        component: "Text",
        operators: _to_consumable_array(base).concat([
            like,
            contains
        ])
    },
    number: {
        component: "Number",
        operators: _to_consumable_array(base).concat(_to_consumable_array(numeric))
    },
    date: {
        component: "Date",
        operators: _to_consumable_array(base).concat(_to_consumable_array(numeric))
    },
    point: {
        component: "Point",
        operators: _to_consumable_array(geo).concat([
            within,
            intersects
        ])
    },
    upload: {
        component: "Text",
        operators: _to_consumable_array(base)
    },
    relationship: {
        component: "Relationship",
        operators: _to_consumable_array(base)
    },
    radio: {
        component: "Select",
        operators: _to_consumable_array(base)
    },
    select: {
        component: "Select",
        operators: _to_consumable_array(base)
    },
    checkbox: {
        component: "Text",
        operators: boolean
    }
};
export default fieldTypeConditions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9maWVsZC10eXBlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9vbGVhbiA9IFtcbiAge1xuICAgIGxhYmVsOiAnZXF1YWxzJyxcbiAgICB2YWx1ZTogJ2VxdWFscycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2lzTm90RXF1YWxUbycsXG4gICAgdmFsdWU6ICdub3RfZXF1YWxzJyxcbiAgfSxcbl07XG5cbmNvbnN0IGJhc2UgPSBbXG4gIC4uLmJvb2xlYW4sXG4gIHtcbiAgICBsYWJlbDogJ2lzSW4nLFxuICAgIHZhbHVlOiAnaW4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdpc05vdEluJyxcbiAgICB2YWx1ZTogJ25vdF9pbicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2V4aXN0cycsXG4gICAgdmFsdWU6ICdleGlzdHMnLFxuICB9LFxuXTtcblxuY29uc3QgbnVtZXJpYyA9IFtcbiAgLi4uYmFzZSxcbiAge1xuICAgIGxhYmVsOiAnaXNHcmVhdGVyVGhhbicsXG4gICAgdmFsdWU6ICdncmVhdGVyX3RoYW4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdpc0xlc3NUaGFuJyxcbiAgICB2YWx1ZTogJ2xlc3NfdGhhbicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2lzTGVzc1RoYW5PckVxdWFsVG8nLFxuICAgIHZhbHVlOiAnbGVzc190aGFuX2VxdWFsJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnaXNHcmVhdGVyVGhhbk9yRXF1YWxUbycsXG4gICAgdmFsdWU6ICdncmVhdGVyX3RoYW5fZXF1YWxzJyxcbiAgfSxcbl07XG5cbmNvbnN0IGdlbyA9IFtcbiAgLi4uYm9vbGVhbixcbiAge1xuICAgIGxhYmVsOiAnZXhpc3RzJyxcbiAgICB2YWx1ZTogJ2V4aXN0cycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ25lYXInLFxuICAgIHZhbHVlOiAnbmVhcicsXG4gIH0sXG5dO1xuXG5jb25zdCB3aXRoaW4gPSB7XG4gIGxhYmVsOiAnd2l0aGluJyxcbiAgdmFsdWU6ICd3aXRoaW4nLFxufTtcblxuY29uc3QgaW50ZXJzZWN0cyA9IHtcbiAgbGFiZWw6ICdpbnRlcnNlY3RzJyxcbiAgdmFsdWU6ICdpbnRlcnNlY3RzJyxcbn07XG5cbmNvbnN0IGxpa2UgPSB7XG4gIGxhYmVsOiAnaXNMaWtlJyxcbiAgdmFsdWU6ICdsaWtlJyxcbn07XG5cbmNvbnN0IGNvbnRhaW5zID0ge1xuICBsYWJlbDogJ2NvbnRhaW5zJyxcbiAgdmFsdWU6ICdjb250YWlucycsXG59O1xuXG5jb25zdCBmaWVsZFR5cGVDb25kaXRpb25zID0ge1xuICB0ZXh0OiB7XG4gICAgY29tcG9uZW50OiAnVGV4dCcsXG4gICAgb3BlcmF0b3JzOiBbLi4uYmFzZSwgbGlrZSwgY29udGFpbnNdLFxuICB9LFxuICBlbWFpbDoge1xuICAgIGNvbXBvbmVudDogJ1RleHQnLFxuICAgIG9wZXJhdG9yczogWy4uLmJhc2UsIGNvbnRhaW5zXSxcbiAgfSxcbiAgdGV4dGFyZWE6IHtcbiAgICBjb21wb25lbnQ6ICdUZXh0JyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlLCBsaWtlLCBjb250YWluc10sXG4gIH0sXG4gIGNvZGU6IHtcbiAgICBjb21wb25lbnQ6ICdUZXh0JyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlLCBsaWtlLCBjb250YWluc10sXG4gIH0sXG4gIGpzb246IHtcbiAgICBjb21wb25lbnQ6ICdUZXh0JyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlLCBsaWtlLCBjb250YWlucywgd2l0aGluLCBpbnRlcnNlY3RzXSxcbiAgfSxcbiAgcmljaFRleHQ6IHtcbiAgICBjb21wb25lbnQ6ICdUZXh0JyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlLCBsaWtlLCBjb250YWluc10sXG4gIH0sXG4gIG51bWJlcjoge1xuICAgIGNvbXBvbmVudDogJ051bWJlcicsXG4gICAgb3BlcmF0b3JzOiBbLi4uYmFzZSwgLi4ubnVtZXJpY10sXG4gIH0sXG4gIGRhdGU6IHtcbiAgICBjb21wb25lbnQ6ICdEYXRlJyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlLCAuLi5udW1lcmljXSxcbiAgfSxcbiAgcG9pbnQ6IHtcbiAgICBjb21wb25lbnQ6ICdQb2ludCcsXG4gICAgb3BlcmF0b3JzOiBbLi4uZ2VvLCB3aXRoaW4sIGludGVyc2VjdHNdLFxuICB9LFxuICB1cGxvYWQ6IHtcbiAgICBjb21wb25lbnQ6ICdUZXh0JyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlXSxcbiAgfSxcbiAgcmVsYXRpb25zaGlwOiB7XG4gICAgY29tcG9uZW50OiAnUmVsYXRpb25zaGlwJyxcbiAgICBvcGVyYXRvcnM6IFsuLi5iYXNlXSxcbiAgfSxcbiAgcmFkaW86IHtcbiAgICBjb21wb25lbnQ6ICdTZWxlY3QnLFxuICAgIG9wZXJhdG9yczogWy4uLmJhc2VdLFxuICB9LFxuICBzZWxlY3Q6IHtcbiAgICBjb21wb25lbnQ6ICdTZWxlY3QnLFxuICAgIG9wZXJhdG9yczogWy4uLmJhc2VdLFxuICB9LFxuICBjaGVja2JveDoge1xuICAgIGNvbXBvbmVudDogJ1RleHQnLFxuICAgIG9wZXJhdG9yczogYm9vbGVhbixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpZWxkVHlwZUNvbmRpdGlvbnM7XG4iXSwibmFtZXMiOlsiYm9vbGVhbiIsImxhYmVsIiwidmFsdWUiLCJiYXNlIiwibnVtZXJpYyIsImdlbyIsIndpdGhpbiIsImludGVyc2VjdHMiLCJsaWtlIiwiY29udGFpbnMiLCJmaWVsZFR5cGVDb25kaXRpb25zIiwidGV4dCIsImNvbXBvbmVudCIsIm9wZXJhdG9ycyIsImVtYWlsIiwidGV4dGFyZWEiLCJjb2RlIiwianNvbiIsInJpY2hUZXh0IiwibnVtYmVyIiwiZGF0ZSIsInBvaW50IiwidXBsb2FkIiwicmVsYXRpb25zaGlwIiwicmFkaW8iLCJzZWxlY3QiLCJjaGVja2JveCJd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