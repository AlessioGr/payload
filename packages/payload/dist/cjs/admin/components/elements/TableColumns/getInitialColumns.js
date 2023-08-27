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
var _types = require("../../../../fields/config/types");
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
var getRemainingColumns = function(fields, useAsTitle) {
    return fields.reduce(function(remaining, field) {
        if ((0, _types.fieldAffectsData)(field) && field.name === useAsTitle) {
            return remaining;
        }
        if (!(0, _types.fieldAffectsData)(field) && (0, _types.fieldHasSubFields)(field)) {
            return _to_consumable_array(remaining).concat(_to_consumable_array(getRemainingColumns(field.fields, useAsTitle)));
        }
        if (field.type === "tabs") {
            return _to_consumable_array(remaining).concat(_to_consumable_array(field.tabs.reduce(function(tabFieldColumns, tab) {
                return _to_consumable_array(tabFieldColumns).concat(_to_consumable_array((0, _types.tabHasName)(tab) ? [
                    tab.name
                ] : getRemainingColumns(tab.fields, useAsTitle)));
            }, [])));
        }
        return _to_consumable_array(remaining).concat([
            field.name
        ]);
    }, []);
};
var getInitialColumnState = function(fields, useAsTitle, defaultColumns) {
    var initialColumns = [];
    if (Array.isArray(defaultColumns) && defaultColumns.length >= 1) {
        return defaultColumns;
    }
    if (useAsTitle) {
        initialColumns.push(useAsTitle);
    }
    var remainingColumns = getRemainingColumns(fields, useAsTitle);
    initialColumns = initialColumns.concat(remainingColumns);
    initialColumns = initialColumns.slice(0, 4);
    return initialColumns;
};
var _default = getInitialColumnState;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlQ29sdW1ucy9nZXRJbml0aWFsQ29sdW1ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCwgZmllbGRIYXNTdWJGaWVsZHMsIGZpZWxkQWZmZWN0c0RhdGEsIHRhYkhhc05hbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcblxuY29uc3QgZ2V0UmVtYWluaW5nQ29sdW1ucyA9IChmaWVsZHM6IEZpZWxkW10sIHVzZUFzVGl0bGU6IHN0cmluZyk6IHN0cmluZ1tdID0+IGZpZWxkcy5yZWR1Y2UoKHJlbWFpbmluZywgZmllbGQpID0+IHtcbiAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09IHVzZUFzVGl0bGUpIHtcbiAgICByZXR1cm4gcmVtYWluaW5nO1xuICB9XG5cbiAgaWYgKCFmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZEhhc1N1YkZpZWxkcyhmaWVsZCkpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4ucmVtYWluaW5nLFxuICAgICAgLi4uZ2V0UmVtYWluaW5nQ29sdW1ucyhmaWVsZC5maWVsZHMsIHVzZUFzVGl0bGUpLFxuICAgIF07XG4gIH1cblxuICBpZiAoZmllbGQudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnJlbWFpbmluZyxcbiAgICAgIC4uLmZpZWxkLnRhYnMucmVkdWNlKCh0YWJGaWVsZENvbHVtbnMsIHRhYikgPT4gW1xuICAgICAgICAuLi50YWJGaWVsZENvbHVtbnMsXG4gICAgICAgIC4uLih0YWJIYXNOYW1lKHRhYikgPyBbdGFiLm5hbWVdIDogZ2V0UmVtYWluaW5nQ29sdW1ucyh0YWIuZmllbGRzLCB1c2VBc1RpdGxlKSksXG4gICAgICBdLCBbXSksXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgLi4ucmVtYWluaW5nLFxuICAgIGZpZWxkLm5hbWUsXG4gIF07XG59LCBbXSk7XG5cbmNvbnN0IGdldEluaXRpYWxDb2x1bW5TdGF0ZSA9IChmaWVsZHM6IEZpZWxkW10sIHVzZUFzVGl0bGU6IHN0cmluZywgZGVmYXVsdENvbHVtbnM6IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xuICBsZXQgaW5pdGlhbENvbHVtbnMgPSBbXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShkZWZhdWx0Q29sdW1ucykgJiYgZGVmYXVsdENvbHVtbnMubGVuZ3RoID49IDEpIHtcbiAgICByZXR1cm4gZGVmYXVsdENvbHVtbnM7XG4gIH1cblxuXG4gIGlmICh1c2VBc1RpdGxlKSB7XG4gICAgaW5pdGlhbENvbHVtbnMucHVzaCh1c2VBc1RpdGxlKTtcbiAgfVxuXG4gIGNvbnN0IHJlbWFpbmluZ0NvbHVtbnMgPSBnZXRSZW1haW5pbmdDb2x1bW5zKGZpZWxkcywgdXNlQXNUaXRsZSk7XG5cbiAgaW5pdGlhbENvbHVtbnMgPSBpbml0aWFsQ29sdW1ucy5jb25jYXQocmVtYWluaW5nQ29sdW1ucyk7XG4gIGluaXRpYWxDb2x1bW5zID0gaW5pdGlhbENvbHVtbnMuc2xpY2UoMCwgNCk7XG5cbiAgcmV0dXJuIGluaXRpYWxDb2x1bW5zO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBnZXRJbml0aWFsQ29sdW1uU3RhdGU7XG4iXSwibmFtZXMiOlsiZ2V0UmVtYWluaW5nQ29sdW1ucyIsImZpZWxkcyIsInVzZUFzVGl0bGUiLCJyZWR1Y2UiLCJyZW1haW5pbmciLCJmaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIiwiZmllbGRIYXNTdWJGaWVsZHMiLCJ0eXBlIiwidGFicyIsInRhYkZpZWxkQ29sdW1ucyIsInRhYiIsInRhYkhhc05hbWUiLCJnZXRJbml0aWFsQ29sdW1uU3RhdGUiLCJkZWZhdWx0Q29sdW1ucyIsImluaXRpYWxDb2x1bW5zIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwicHVzaCIsInJlbWFpbmluZ0NvbHVtbnMiLCJjb25jYXQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFtREE7OztlQUFBOzs7cUJBbkR1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkUsSUFBTUEsc0JBQXNCLFNBQUNDLFFBQWlCQztXQUFpQ0QsT0FBT0UsTUFBTSxDQUFDLFNBQUNDLFdBQVdDO1FBQ3ZHLElBQUlDLElBQUFBLHVCQUFnQixFQUFDRCxVQUFVQSxNQUFNRSxJQUFJLEtBQUtMLFlBQVk7WUFDeEQsT0FBT0U7UUFDVDtRQUVBLElBQUksQ0FBQ0UsSUFBQUEsdUJBQWdCLEVBQUNELFVBQVVHLElBQUFBLHdCQUFpQixFQUFDSCxRQUFRO1lBQ3hELE9BQU8sQUFDTCxxQkFBR0Qsa0JBQ0gscUJBQUdKLG9CQUFvQkssTUFBTUosTUFBTSxFQUFFQztRQUV6QztRQUVBLElBQUlHLE1BQU1JLElBQUksS0FBSyxRQUFRO1lBQ3pCLE9BQU8sQUFDTCxxQkFBR0wsa0JBQ0gscUJBQUdDLE1BQU1LLElBQUksQ0FBQ1AsTUFBTSxDQUFDLFNBQUNRLGlCQUFpQkM7dUJBQVEsQUFDN0MscUJBQUdELHdCQUNILHFCQUFJRSxJQUFBQSxpQkFBVSxFQUFDRCxPQUFPO29CQUFDQSxJQUFJTCxJQUFJO2lCQUFDLEdBQUdQLG9CQUFvQlksSUFBSVgsTUFBTSxFQUFFQztlQUNsRSxFQUFFO1FBRVQ7UUFFQSxPQUFPLEFBQ0wscUJBQUdFLGtCQURFO1lBRUxDLE1BQU1FLElBQUk7U0FDWDtJQUNILEdBQUcsRUFBRTs7QUFFTCxJQUFNTyx3QkFBd0IsU0FBQ2IsUUFBaUJDLFlBQW9CYTtJQUNsRSxJQUFJQyxpQkFBaUIsRUFBRTtJQUV2QixJQUFJQyxNQUFNQyxPQUFPLENBQUNILG1CQUFtQkEsZUFBZUksTUFBTSxJQUFJLEdBQUc7UUFDL0QsT0FBT0o7SUFDVDtJQUdBLElBQUliLFlBQVk7UUFDZGMsZUFBZUksSUFBSSxDQUFDbEI7SUFDdEI7SUFFQSxJQUFNbUIsbUJBQW1CckIsb0JBQW9CQyxRQUFRQztJQUVyRGMsaUJBQWlCQSxlQUFlTSxNQUFNLENBQUNEO0lBQ3ZDTCxpQkFBaUJBLGVBQWVPLEtBQUssQ0FBQyxHQUFHO0lBRXpDLE9BQU9QO0FBQ1Q7SUFHQSxXQUFlRiJ9