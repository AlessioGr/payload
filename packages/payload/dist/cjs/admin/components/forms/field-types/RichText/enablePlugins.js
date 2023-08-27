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
var _elements = /*#__PURE__*/ _interop_require_default(require("./elements"));
var _leaves = /*#__PURE__*/ _interop_require_default(require("./leaves"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var addPluginReducer = function(EditorWithPlugins, plugin) {
    if (typeof plugin === "function") return plugin(EditorWithPlugins);
    return EditorWithPlugins;
};
var enablePlugins = function(CreatedEditor, functions) {
    return functions.reduce(function(CreatedEditorWithPlugins, func) {
        if (typeof func === "object" && Array.isArray(func.plugins)) {
            return func.plugins.reduce(addPluginReducer, CreatedEditorWithPlugins);
        }
        if (typeof func === "string") {
            if (_elements.default[func] && _elements.default[func].plugins) {
                return _elements.default[func].plugins.reduce(addPluginReducer, CreatedEditorWithPlugins);
            }
            if (_leaves.default[func] && _leaves.default[func].plugins) {
                return _leaves.default[func].plugins.reduce(addPluginReducer, CreatedEditorWithPlugins);
            }
        }
        return CreatedEditorWithPlugins;
    }, CreatedEditor);
};
var _default = enablePlugins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VuYWJsZVBsdWdpbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGVtZW50VHlwZXMgZnJvbSAnLi9lbGVtZW50cyc7XG5pbXBvcnQgbGVhZlR5cGVzIGZyb20gJy4vbGVhdmVzJztcblxuY29uc3QgYWRkUGx1Z2luUmVkdWNlciA9IChFZGl0b3JXaXRoUGx1Z2lucywgcGx1Z2luKSA9PiB7XG4gIGlmICh0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nKSByZXR1cm4gcGx1Z2luKEVkaXRvcldpdGhQbHVnaW5zKTtcbiAgcmV0dXJuIEVkaXRvcldpdGhQbHVnaW5zO1xufTtcblxuY29uc3QgZW5hYmxlUGx1Z2lucyA9IChDcmVhdGVkRWRpdG9yLCBmdW5jdGlvbnMpID0+IGZ1bmN0aW9ucy5yZWR1Y2UoKENyZWF0ZWRFZGl0b3JXaXRoUGx1Z2lucywgZnVuYykgPT4ge1xuICBpZiAodHlwZW9mIGZ1bmMgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkoZnVuYy5wbHVnaW5zKSkge1xuICAgIHJldHVybiBmdW5jLnBsdWdpbnMucmVkdWNlKGFkZFBsdWdpblJlZHVjZXIsIENyZWF0ZWRFZGl0b3JXaXRoUGx1Z2lucyk7XG4gIH1cblxuICBpZiAodHlwZW9mIGZ1bmMgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVsZW1lbnRUeXBlc1tmdW5jXSAmJiBlbGVtZW50VHlwZXNbZnVuY10ucGx1Z2lucykge1xuICAgICAgcmV0dXJuIGVsZW1lbnRUeXBlc1tmdW5jXS5wbHVnaW5zLnJlZHVjZShhZGRQbHVnaW5SZWR1Y2VyLCBDcmVhdGVkRWRpdG9yV2l0aFBsdWdpbnMpO1xuICAgIH1cblxuICAgIGlmIChsZWFmVHlwZXNbZnVuY10gJiYgbGVhZlR5cGVzW2Z1bmNdLnBsdWdpbnMpIHtcbiAgICAgIHJldHVybiBsZWFmVHlwZXNbZnVuY10ucGx1Z2lucy5yZWR1Y2UoYWRkUGx1Z2luUmVkdWNlciwgQ3JlYXRlZEVkaXRvcldpdGhQbHVnaW5zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQ3JlYXRlZEVkaXRvcldpdGhQbHVnaW5zO1xufSwgQ3JlYXRlZEVkaXRvcik7XG5cbmV4cG9ydCBkZWZhdWx0IGVuYWJsZVBsdWdpbnM7XG4iXSwibmFtZXMiOlsiYWRkUGx1Z2luUmVkdWNlciIsIkVkaXRvcldpdGhQbHVnaW5zIiwicGx1Z2luIiwiZW5hYmxlUGx1Z2lucyIsIkNyZWF0ZWRFZGl0b3IiLCJmdW5jdGlvbnMiLCJyZWR1Y2UiLCJDcmVhdGVkRWRpdG9yV2l0aFBsdWdpbnMiLCJmdW5jIiwiQXJyYXkiLCJpc0FycmF5IiwicGx1Z2lucyIsImVsZW1lbnRUeXBlcyIsImxlYWZUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEwQkE7OztlQUFBOzs7K0RBMUJ5Qjs2REFDSDs7Ozs7O0FBRXRCLElBQU1BLG1CQUFtQixTQUFDQyxtQkFBbUJDO0lBQzNDLElBQUksT0FBT0EsV0FBVyxZQUFZLE9BQU9BLE9BQU9EO0lBQ2hELE9BQU9BO0FBQ1Q7QUFFQSxJQUFNRSxnQkFBZ0IsU0FBQ0MsZUFBZUM7V0FBY0EsVUFBVUMsTUFBTSxDQUFDLFNBQUNDLDBCQUEwQkM7UUFDOUYsSUFBSSxPQUFPQSxTQUFTLFlBQVlDLE1BQU1DLE9BQU8sQ0FBQ0YsS0FBS0csT0FBTyxHQUFHO1lBQzNELE9BQU9ILEtBQUtHLE9BQU8sQ0FBQ0wsTUFBTSxDQUFDTixrQkFBa0JPO1FBQy9DO1FBRUEsSUFBSSxPQUFPQyxTQUFTLFVBQVU7WUFDNUIsSUFBSUksaUJBQVksQ0FBQ0osS0FBSyxJQUFJSSxpQkFBWSxDQUFDSixLQUFLLENBQUNHLE9BQU8sRUFBRTtnQkFDcEQsT0FBT0MsaUJBQVksQ0FBQ0osS0FBSyxDQUFDRyxPQUFPLENBQUNMLE1BQU0sQ0FBQ04sa0JBQWtCTztZQUM3RDtZQUVBLElBQUlNLGVBQVMsQ0FBQ0wsS0FBSyxJQUFJSyxlQUFTLENBQUNMLEtBQUssQ0FBQ0csT0FBTyxFQUFFO2dCQUM5QyxPQUFPRSxlQUFTLENBQUNMLEtBQUssQ0FBQ0csT0FBTyxDQUFDTCxNQUFNLENBQUNOLGtCQUFrQk87WUFDMUQ7UUFDRjtRQUVBLE9BQU9BO0lBQ1QsR0FBR0g7O0lBRUgsV0FBZUQifQ==