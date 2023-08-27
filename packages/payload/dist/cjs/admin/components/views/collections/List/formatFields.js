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
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _types = require("../../../../../fields/config/types");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var formatFields = function(config) {
    var hasID = config.fields.findIndex(function(field) {
        return (0, _types.fieldAffectsData)(field) && field.name === "id";
    }) > -1;
    var fields = config.fields.reduce(function(formatted, field) {
        var _field_admin, _field;
        if (!(0, _types.fieldIsPresentationalOnly)(field) && (field.hidden === true || ((_field = field) === null || _field === void 0 ? void 0 : (_field_admin = _field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.disabled) === true)) {
            return formatted;
        }
        return _to_consumable_array(formatted).concat([
            field
        ]);
    }, hasID ? [] : [
        {
            name: "id",
            label: "ID",
            type: "text",
            admin: {
                disableBulkEdit: true
            }
        }
    ]);
    return fields;
};
var _default = formatFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvZm9ybWF0RmllbGRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCwgZmllbGRBZmZlY3RzRGF0YSwgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5jb25zdCBmb3JtYXRGaWVsZHMgPSAoY29uZmlnOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKTogRmllbGRbXSA9PiB7XG4gIGNvbnN0IGhhc0lEID0gY29uZmlnLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKSA+IC0xO1xuICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBjb25maWcuZmllbGRzLnJlZHVjZSgoZm9ybWF0dGVkLCBmaWVsZCkgPT4ge1xuICAgIGlmICghZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seShmaWVsZCkgJiYgKGZpZWxkLmhpZGRlbiA9PT0gdHJ1ZSB8fCBmaWVsZD8uYWRtaW4/LmRpc2FibGVkID09PSB0cnVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdHRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4uZm9ybWF0dGVkLFxuICAgICAgZmllbGQsXG4gICAgXTtcbiAgfSwgaGFzSUQgPyBbXSA6IFt7XG4gICAgbmFtZTogJ2lkJyxcbiAgICBsYWJlbDogJ0lEJyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgYWRtaW46IHtcbiAgICAgIGRpc2FibGVCdWxrRWRpdDogdHJ1ZSxcbiAgICB9LFxuICB9XSk7XG5cbiAgcmV0dXJuIGZpZWxkcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdEZpZWxkcztcbiJdLCJuYW1lcyI6WyJmb3JtYXRGaWVsZHMiLCJjb25maWciLCJoYXNJRCIsImZpZWxkcyIsImZpbmRJbmRleCIsImZpZWxkIiwiZmllbGRBZmZlY3RzRGF0YSIsIm5hbWUiLCJyZWR1Y2UiLCJmb3JtYXR0ZWQiLCJmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5IiwiaGlkZGVuIiwiYWRtaW4iLCJkaXNhYmxlZCIsImxhYmVsIiwidHlwZSIsImRpc2FibGVCdWxrRWRpdCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEyQkE7OztlQUFBOzs7NERBM0JrQjtxQkFFaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBTUEsZUFBZSxTQUFDQztJQUNwQixJQUFNQyxRQUFRRCxPQUFPRSxNQUFNLENBQUNDLFNBQVMsQ0FBQyxTQUFDQztlQUFVQyxJQUFBQSx1QkFBZ0IsRUFBQ0QsVUFBVUEsTUFBTUUsSUFBSSxLQUFLO1NBQVEsQ0FBQztJQUNwRyxJQUFNSixTQUFrQkYsT0FBT0UsTUFBTSxDQUFDSyxNQUFNLENBQUMsU0FBQ0MsV0FBV0o7WUFDWUEsY0FBQUE7UUFBbkUsSUFBSSxDQUFDSyxJQUFBQSxnQ0FBeUIsRUFBQ0wsVUFBV0EsQ0FBQUEsTUFBTU0sTUFBTSxLQUFLLFFBQVFOLEVBQUFBLFNBQUFBLG1CQUFBQSw4QkFBQUEsZUFBQUEsT0FBT08sS0FBSyxjQUFaUCxtQ0FBQUEsYUFBY1EsUUFBUSxNQUFLLElBQUcsR0FBSTtZQUNuRyxPQUFPSjtRQUNUO1FBRUEsT0FBTyxBQUNMLHFCQUFHQSxrQkFERTtZQUVMSjtTQUNEO0lBQ0gsR0FBR0gsUUFBUSxFQUFFLEdBQUc7UUFBQztZQUNmSyxNQUFNO1lBQ05PLE9BQU87WUFDUEMsTUFBTTtZQUNOSCxPQUFPO2dCQUNMSSxpQkFBaUI7WUFDbkI7UUFDRjtLQUFFO0lBRUYsT0FBT2I7QUFDVDtJQUVBLFdBQWVIIn0=