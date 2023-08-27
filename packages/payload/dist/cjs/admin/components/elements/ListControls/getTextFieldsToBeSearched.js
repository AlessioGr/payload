"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getTextFieldsToBeSearched", {
    enumerable: true,
    get: function() {
        return getTextFieldsToBeSearched;
    }
});
var _types = require("../../../../fields/config/types");
var _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../../../utilities/flattenTopLevelFields"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getTextFieldsToBeSearched = function(listSearchableFields, fields) {
    return function() {
        if (listSearchableFields) {
            var flattenedFields = (0, _flattenTopLevelFields.default)(fields);
            return flattenedFields.filter(function(field) {
                return (0, _types.fieldAffectsData)(field) && listSearchableFields.includes(field.name);
            });
        }
        return null;
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3RDb250cm9scy9nZXRUZXh0RmllbGRzVG9CZVNlYXJjaGVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBGaWVsZEFmZmVjdGluZ0RhdGEsIGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBmbGF0dGVuRmllbGRzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9mbGF0dGVuVG9wTGV2ZWxGaWVsZHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0VGV4dEZpZWxkc1RvQmVTZWFyY2hlZCA9IChsaXN0U2VhcmNoYWJsZUZpZWxkczogc3RyaW5nW10sIGZpZWxkczogRmllbGRbXSkgPT4gKCk6IEZpZWxkQWZmZWN0aW5nRGF0YVtdID0+IHtcbiAgaWYgKGxpc3RTZWFyY2hhYmxlRmllbGRzKSB7XG4gICAgY29uc3QgZmxhdHRlbmVkRmllbGRzID0gZmxhdHRlbkZpZWxkcyhmaWVsZHMpO1xuICAgIHJldHVybiBmbGF0dGVuZWRGaWVsZHMuZmlsdGVyKChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgbGlzdFNlYXJjaGFibGVGaWVsZHMuaW5jbHVkZXMoZmllbGQubmFtZSkpIGFzIEZpZWxkQWZmZWN0aW5nRGF0YVtdO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIl0sIm5hbWVzIjpbImdldFRleHRGaWVsZHNUb0JlU2VhcmNoZWQiLCJsaXN0U2VhcmNoYWJsZUZpZWxkcyIsImZpZWxkcyIsImZsYXR0ZW5lZEZpZWxkcyIsImZsYXR0ZW5GaWVsZHMiLCJmaWx0ZXIiLCJmaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJpbmNsdWRlcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBR2FBOzs7ZUFBQUE7OztxQkFIK0M7NEVBQ2xDOzs7Ozs7QUFFbkIsSUFBTUEsNEJBQTRCLFNBQUNDLHNCQUFnQ0M7V0FBb0I7UUFDNUYsSUFBSUQsc0JBQXNCO1lBQ3hCLElBQU1FLGtCQUFrQkMsSUFBQUEsOEJBQWEsRUFBQ0Y7WUFDdEMsT0FBT0MsZ0JBQWdCRSxNQUFNLENBQUMsU0FBQ0M7dUJBQVVDLElBQUFBLHVCQUFnQixFQUFDRCxVQUFVTCxxQkFBcUJPLFFBQVEsQ0FBQ0YsTUFBTUcsSUFBSTs7UUFDOUc7UUFFQSxPQUFPO0lBQ1QifQ==