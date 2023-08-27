function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
import buildColumns from "./buildColumns";
export var columnReducer = function(state, action) {
    switch(action.type){
        case "toggle":
            {
                var _action_payload = action.payload, column = _action_payload.column, collection = _action_payload.collection, cellProps = _action_payload.cellProps;
                var withToggledColumn = state.map(function(col) {
                    if (col.name === column) {
                        return _object_spread_props(_object_spread({}, col), {
                            active: !col.active
                        });
                    }
                    return col;
                });
                return buildColumns({
                    columns: withToggledColumn,
                    collection: collection,
                    cellProps: cellProps
                });
            }
        case "move":
            {
                var _action_payload1 = action.payload, fromIndex = _action_payload1.fromIndex, toIndex = _action_payload1.toIndex, collection1 = _action_payload1.collection, cellProps1 = _action_payload1.cellProps;
                var withMovedColumn = _to_consumable_array(state);
                var _withMovedColumn_splice = _sliced_to_array(withMovedColumn.splice(fromIndex, 1), 1), columnToMove = _withMovedColumn_splice[0];
                withMovedColumn.splice(toIndex, 0, columnToMove);
                return buildColumns({
                    columns: withMovedColumn,
                    collection: collection1,
                    cellProps: cellProps1
                });
            }
        case "set":
            {
                var _action_payload2 = action.payload, columns = _action_payload2.columns, collection2 = _action_payload2.collection, cellProps2 = _action_payload2.cellProps;
                return buildColumns({
                    columns: columns,
                    collection: collection2,
                    cellProps: cellProps2
                });
            }
        default:
            return state;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlQ29sdW1ucy9jb2x1bW5SZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vVGFibGUvdHlwZXMnO1xuaW1wb3J0IGJ1aWxkQ29sdW1ucyBmcm9tICcuL2J1aWxkQ29sdW1ucyc7XG5pbXBvcnQgeyBQcm9wcyBhcyBDZWxsUHJvcHMgfSBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9MaXN0L0NlbGwvdHlwZXMnO1xuXG5cbnR5cGUgVE9HR0xFID0ge1xuICB0eXBlOiAndG9nZ2xlJyxcbiAgcGF5bG9hZDoge1xuICAgIGNvbHVtbjogc3RyaW5nXG4gICAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICAgIGNlbGxQcm9wczogUGFydGlhbDxDZWxsUHJvcHM+W11cbiAgfVxufVxuXG50eXBlIFNFVCA9IHtcbiAgdHlwZTogJ3NldCcsXG4gIHBheWxvYWQ6IHtcbiAgICBjb2x1bW5zOiBQaWNrPENvbHVtbiwgJ2FjY2Vzc29yJyB8ICdhY3RpdmUnPltdXG4gICAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICAgIGNlbGxQcm9wczogUGFydGlhbDxDZWxsUHJvcHM+W11cbiAgfVxufVxuXG50eXBlIE1PVkUgPSB7XG4gIHR5cGU6ICdtb3ZlJyxcbiAgcGF5bG9hZDoge1xuICAgIGZyb21JbmRleDogbnVtYmVyXG4gICAgdG9JbmRleDogbnVtYmVyXG4gICAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICAgIGNlbGxQcm9wczogUGFydGlhbDxDZWxsUHJvcHM+W11cbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBY3Rpb24gPSBUT0dHTEUgfCBTRVQgfCBNT1ZFO1xuXG5leHBvcnQgY29uc3QgY29sdW1uUmVkdWNlciA9IChzdGF0ZTogQ29sdW1uW10sIGFjdGlvbjogQWN0aW9uKTogQ29sdW1uW10gPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAndG9nZ2xlJzoge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb2x1bW4sXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNlbGxQcm9wcyxcbiAgICAgIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgY29uc3Qgd2l0aFRvZ2dsZWRDb2x1bW4gPSBzdGF0ZS5tYXAoKGNvbCkgPT4ge1xuICAgICAgICBpZiAoY29sLm5hbWUgPT09IGNvbHVtbikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jb2wsXG4gICAgICAgICAgICBhY3RpdmU6ICFjb2wuYWN0aXZlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBidWlsZENvbHVtbnMoe1xuICAgICAgICBjb2x1bW5zOiB3aXRoVG9nZ2xlZENvbHVtbixcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgY2VsbFByb3BzLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNhc2UgJ21vdmUnOiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGZyb21JbmRleCxcbiAgICAgICAgdG9JbmRleCxcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgY2VsbFByb3BzLFxuICAgICAgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICBjb25zdCB3aXRoTW92ZWRDb2x1bW4gPSBbLi4uc3RhdGVdO1xuICAgICAgY29uc3QgW2NvbHVtblRvTW92ZV0gPSB3aXRoTW92ZWRDb2x1bW4uc3BsaWNlKGZyb21JbmRleCwgMSk7XG4gICAgICB3aXRoTW92ZWRDb2x1bW4uc3BsaWNlKHRvSW5kZXgsIDAsIGNvbHVtblRvTW92ZSk7XG5cbiAgICAgIHJldHVybiBidWlsZENvbHVtbnMoe1xuICAgICAgICBjb2x1bW5zOiB3aXRoTW92ZWRDb2x1bW4sXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNlbGxQcm9wcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjYXNlICdzZXQnOiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvbHVtbnMsXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNlbGxQcm9wcyxcbiAgICAgIH0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIGJ1aWxkQ29sdW1ucyh7XG4gICAgICAgIGNvbHVtbnMsXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNlbGxQcm9wcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImJ1aWxkQ29sdW1ucyIsImNvbHVtblJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiY29sdW1uIiwiY29sbGVjdGlvbiIsImNlbGxQcm9wcyIsIndpdGhUb2dnbGVkQ29sdW1uIiwibWFwIiwiY29sIiwibmFtZSIsImFjdGl2ZSIsImNvbHVtbnMiLCJmcm9tSW5kZXgiLCJ0b0luZGV4Iiwid2l0aE1vdmVkQ29sdW1uIiwic3BsaWNlIiwiY29sdW1uVG9Nb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU9BLGtCQUFrQixpQkFBaUI7QUFrQzFDLE9BQU8sSUFBTUMsZ0JBQWdCLFNBQUNDLE9BQWlCQztJQUM3QyxPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFBVTtnQkFDYixJQUlJRCxrQkFBQUEsT0FBT0UsT0FBTyxFQUhoQkMsU0FHRUgsZ0JBSEZHLFFBQ0FDLGFBRUVKLGdCQUZGSSxZQUNBQyxZQUNFTCxnQkFERks7Z0JBR0YsSUFBTUMsb0JBQW9CUCxNQUFNUSxHQUFHLENBQUMsU0FBQ0M7b0JBQ25DLElBQUlBLElBQUlDLElBQUksS0FBS04sUUFBUTt3QkFDdkIsT0FBTyx3Q0FDRks7NEJBQ0hFLFFBQVEsQ0FBQ0YsSUFBSUUsTUFBTTs7b0JBRXZCO29CQUVBLE9BQU9GO2dCQUNUO2dCQUVBLE9BQU9YLGFBQWE7b0JBQ2xCYyxTQUFTTDtvQkFDVEYsWUFBQUE7b0JBQ0FDLFdBQUFBO2dCQUNGO1lBQ0Y7UUFDQSxLQUFLO1lBQVE7Z0JBQ1gsSUFLSUwsbUJBQUFBLE9BQU9FLE9BQU8sRUFKaEJVLFlBSUVaLGlCQUpGWSxXQUNBQyxVQUdFYixpQkFIRmEsU0FDQVQsY0FFRUosaUJBRkZJLFlBQ0FDLGFBQ0VMLGlCQURGSztnQkFHRixJQUFNUyxrQkFBbUIscUJBQUdmO2dCQUM1QixJQUF1QmUsMkNBQUFBLGdCQUFnQkMsTUFBTSxDQUFDSCxXQUFXLFFBQWxESSxlQUFnQkY7Z0JBQ3ZCQSxnQkFBZ0JDLE1BQU0sQ0FBQ0YsU0FBUyxHQUFHRztnQkFFbkMsT0FBT25CLGFBQWE7b0JBQ2xCYyxTQUFTRztvQkFDVFYsWUFBQUE7b0JBQ0FDLFdBQUFBO2dCQUNGO1lBQ0Y7UUFDQSxLQUFLO1lBQU87Z0JBQ1YsSUFJSUwsbUJBQUFBLE9BQU9FLE9BQU8sRUFIaEJTLFVBR0VYLGlCQUhGVyxTQUNBUCxjQUVFSixpQkFGRkksWUFDQUMsYUFDRUwsaUJBREZLO2dCQUdGLE9BQU9SLGFBQWE7b0JBQ2xCYyxTQUFBQTtvQkFDQVAsWUFBQUE7b0JBQ0FDLFdBQUFBO2dCQUNGO1lBQ0Y7UUFDQTtZQUNFLE9BQU9OO0lBQ1g7QUFDRixFQUFFIn0=