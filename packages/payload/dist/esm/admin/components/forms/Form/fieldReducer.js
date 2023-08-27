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
import equal from "deep-equal";
import ObjectID from "bson-objectid";
import getSiblingData from "./getSiblingData";
import reduceFieldsToValues from "./reduceFieldsToValues";
import deepCopyObject from "../../../../utilities/deepCopyObject";
import { flattenRows, separateRows } from "./rows";
export function fieldReducer(state, action) {
    switch(action.type){
        case "REPLACE_STATE":
            {
                var newState = {};
                // Only update fields that have changed
                // by comparing old value / initialValue to new
                // ..
                // This is a performance enhancement for saving
                // large documents with hundreds of fields
                Object.entries(action.state).forEach(function(param) {
                    var _param = _sliced_to_array(param, 2), path = _param[0], field = _param[1];
                    var oldField = state[path];
                    var newField = field;
                    if (!equal(oldField, newField)) {
                        newState[path] = newField;
                    } else if (oldField) {
                        newState[path] = oldField;
                    }
                });
                return newState;
            }
        case "REMOVE":
            {
                var newState1 = _object_spread({}, state);
                if (newState1[action.path]) delete newState1[action.path];
                return newState1;
            }
        case "MODIFY_CONDITION":
            {
                var path = action.path, result = action.result, user = action.user;
                return Object.entries(state).reduce(function(newState, param) {
                    var _param = _sliced_to_array(param, 2), fieldPath = _param[0], field = _param[1];
                    if (fieldPath === path || fieldPath.indexOf("".concat(path, ".")) === 0) {
                        var passesCondition = result;
                        // If a condition is being set to true,
                        // Set all conditions to true
                        // Besides those who still fail their own conditions
                        if (passesCondition && field.condition) {
                            passesCondition = field.condition(reduceFieldsToValues(state, true), getSiblingData(state, path), {
                                user: user
                            });
                        }
                        return _object_spread_props(_object_spread({}, newState), _define_property({}, fieldPath, _object_spread_props(_object_spread({}, field), {
                            passesCondition: passesCondition
                        })));
                    }
                    return _object_spread_props(_object_spread({}, newState), _define_property({}, fieldPath, _object_spread({}, field)));
                }, {});
            }
        case "UPDATE":
            {
                var newField = Object.entries(action).reduce(function(field, param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    if ([
                        "value",
                        "valid",
                        "errorMessage",
                        "disableFormData",
                        "initialValue",
                        "validate",
                        "condition",
                        "passesCondition",
                        "rows"
                    ].includes(key)) {
                        return _object_spread_props(_object_spread({}, field), _define_property({}, key, value));
                    }
                    return field;
                }, state[action.path] || {});
                return _object_spread_props(_object_spread({}, state), _define_property({}, action.path, newField));
            }
        case "REMOVE_ROW":
            {
                var _state_path;
                var rowIndex = action.rowIndex, path1 = action.path;
                var _separateRows = separateRows(path1, state), remainingFields = _separateRows.remainingFields, rows = _separateRows.rows;
                var rowsMetadata = _to_consumable_array(((_state_path = state[path1]) === null || _state_path === void 0 ? void 0 : _state_path.rows) || []);
                rows.splice(rowIndex, 1);
                rowsMetadata.splice(rowIndex, 1);
                var newState2 = _object_spread(_object_spread_props(_object_spread({}, remainingFields), _define_property({}, path1, _object_spread_props(_object_spread({}, state[path1]), {
                    value: rows.length,
                    disableFormData: rows.length > 0,
                    rows: rowsMetadata
                }))), flattenRows(path1, rows));
                return newState2;
            }
        case "ADD_ROW":
            {
                var _state_path1;
                var rowIndex1 = action.rowIndex, path2 = action.path, subFieldState = action.subFieldState, blockType = action.blockType;
                var rowsMetadata1 = _to_consumable_array(((_state_path1 = state[path2]) === null || _state_path1 === void 0 ? void 0 : _state_path1.rows) || []);
                rowsMetadata1.splice(rowIndex1 + 1, 0, // new row
                {
                    id: new ObjectID().toHexString(),
                    collapsed: false,
                    blockType: blockType || undefined,
                    childErrorPaths: new Set()
                });
                if (blockType) {
                    subFieldState.blockType = {
                        value: blockType,
                        initialValue: blockType,
                        valid: true
                    };
                }
                var _separateRows1 = separateRows(path2, state), remainingFields1 = _separateRows1.remainingFields, rows1 = _separateRows1.rows;
                // actual form state (value saved in db)
                rows1.splice(rowIndex1 + 1, 0, subFieldState);
                var newState3 = _object_spread_props(_object_spread({}, remainingFields1, flattenRows(path2, rows1)), _define_property({}, path2, _object_spread_props(_object_spread({}, state[path2]), {
                    value: rows1.length,
                    disableFormData: true,
                    rows: rowsMetadata1
                })));
                return newState3;
            }
        case "REPLACE_ROW":
            {
                var _rows, _state_path2;
                var rowIndexArg = action.rowIndex, path3 = action.path, blockType1 = action.blockType, subFieldState1 = action.subFieldState;
                var _separateRows2 = separateRows(path3, state), remainingFields2 = _separateRows2.remainingFields, rows2 = _separateRows2.rows;
                var rowIndex2 = Math.max(0, Math.min(rowIndexArg, ((_rows = rows2) === null || _rows === void 0 ? void 0 : _rows.length) - 1 || 0));
                var rowsMetadata2 = _to_consumable_array(((_state_path2 = state[path3]) === null || _state_path2 === void 0 ? void 0 : _state_path2.rows) || []);
                rowsMetadata2[rowIndex2] = {
                    id: new ObjectID().toHexString(),
                    collapsed: false,
                    blockType: blockType1 || undefined,
                    childErrorPaths: new Set()
                };
                if (blockType1) {
                    subFieldState1.blockType = {
                        value: blockType1,
                        initialValue: blockType1,
                        valid: true
                    };
                }
                // replace form field state
                rows2[rowIndex2] = subFieldState1;
                var newState4 = _object_spread_props(_object_spread({}, remainingFields2, flattenRows(path3, rows2)), _define_property({}, path3, _object_spread_props(_object_spread({}, state[path3]), {
                    value: rows2.length,
                    disableFormData: true,
                    rows: rowsMetadata2
                })));
                return newState4;
            }
        case "DUPLICATE_ROW":
            {
                var _state_path3;
                var rowIndex3 = action.rowIndex, path4 = action.path;
                var _separateRows3 = separateRows(path4, state), remainingFields3 = _separateRows3.remainingFields, rows3 = _separateRows3.rows;
                var rowsMetadata3 = ((_state_path3 = state[path4]) === null || _state_path3 === void 0 ? void 0 : _state_path3.rows) || [];
                var duplicateRowMetadata = deepCopyObject(rowsMetadata3[rowIndex3]);
                if (duplicateRowMetadata.id) duplicateRowMetadata.id = new ObjectID().toHexString();
                var duplicateRowState = deepCopyObject(rows3[rowIndex3]);
                if (duplicateRowState.id) duplicateRowState.id = new ObjectID().toHexString();
                // If there are subfields
                if (Object.keys(duplicateRowState).length > 0) {
                    // Add new object containing subfield names to unflattenedRows array
                    rows3.splice(rowIndex3 + 1, 0, duplicateRowState);
                    rowsMetadata3.splice(rowIndex3 + 1, 0, duplicateRowMetadata);
                }
                var newState5 = _object_spread(_object_spread_props(_object_spread({}, remainingFields3), _define_property({}, path4, _object_spread_props(_object_spread({}, state[path4]), {
                    value: rows3.length,
                    disableFormData: true,
                    rows: rowsMetadata3
                }))), flattenRows(path4, rows3));
                return newState5;
            }
        case "MOVE_ROW":
            {
                var _state_path4;
                var moveFromIndex = action.moveFromIndex, moveToIndex = action.moveToIndex, path5 = action.path;
                var _separateRows4 = separateRows(path5, state), remainingFields4 = _separateRows4.remainingFields, rows4 = _separateRows4.rows;
                // copy the row to move
                var copyOfMovingRow = rows4[moveFromIndex];
                // delete the row by index
                rows4.splice(moveFromIndex, 1);
                // insert row copyOfMovingRow back in
                rows4.splice(moveToIndex, 0, copyOfMovingRow);
                // modify array/block internal row state (i.e. collapsed, blockType)
                var rowStateCopy = _to_consumable_array(((_state_path4 = state[path5]) === null || _state_path4 === void 0 ? void 0 : _state_path4.rows) || []);
                var movingRowState = _object_spread({}, rowStateCopy[moveFromIndex]);
                rowStateCopy.splice(moveFromIndex, 1);
                rowStateCopy.splice(moveToIndex, 0, movingRowState);
                var newState6 = _object_spread_props(_object_spread({}, remainingFields4, flattenRows(path5, rows4)), _define_property({}, path5, _object_spread_props(_object_spread({}, state[path5]), {
                    rows: rowStateCopy
                })));
                return newState6;
            }
        case "SET_ROW_COLLAPSED":
            {
                var rowID = action.rowID, path6 = action.path, collapsed = action.collapsed, setDocFieldPreferences = action.setDocFieldPreferences;
                var arrayState = state[path6];
                var _state_path_rows_reduce = state[path6].rows.reduce(function(acc, row, index) {
                    var isMatchingRow = row.id === rowID;
                    if (isMatchingRow) acc.matchedIndex = index;
                    if (!isMatchingRow && row.collapsed) acc.collapsedRowIDs.push(row.id);
                    else if (isMatchingRow && collapsed) acc.collapsedRowIDs.push(row.id);
                    return acc;
                }, {
                    matchedIndex: undefined,
                    collapsedRowIDs: []
                }), matchedIndex = _state_path_rows_reduce.matchedIndex, collapsedRowIDs = _state_path_rows_reduce.collapsedRowIDs;
                if (matchedIndex > -1) {
                    arrayState.rows[matchedIndex].collapsed = collapsed;
                    setDocFieldPreferences(path6, {
                        collapsed: collapsedRowIDs
                    });
                }
                var newState7 = _object_spread_props(_object_spread({}, state), _define_property({}, path6, _object_spread({}, arrayState)));
                return newState7;
            }
        case "SET_ALL_ROWS_COLLAPSED":
            {
                var collapsed1 = action.collapsed, path7 = action.path, setDocFieldPreferences1 = action.setDocFieldPreferences;
                var _state_path_rows_reduce1 = state[path7].rows.reduce(function(acc, row) {
                    if (collapsed1) acc.collapsedRowIDs.push(row.id);
                    acc.rows.push(_object_spread_props(_object_spread({}, row), {
                        collapsed: collapsed1
                    }));
                    return acc;
                }, {
                    rows: [],
                    collapsedRowIDs: []
                }), rows5 = _state_path_rows_reduce1.rows, collapsedRowIDs1 = _state_path_rows_reduce1.collapsedRowIDs;
                setDocFieldPreferences1(path7, {
                    collapsed: collapsedRowIDs1
                });
                return _object_spread_props(_object_spread({}, state), _define_property({}, path7, _object_spread_props(_object_spread({}, state[path7]), {
                    rows: rows5
                })));
            }
        default:
            {
                return state;
            }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vZmllbGRSZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlcXVhbCBmcm9tICdkZWVwLWVxdWFsJztcbmltcG9ydCBPYmplY3RJRCBmcm9tICdic29uLW9iamVjdGlkJztcbmltcG9ydCBnZXRTaWJsaW5nRGF0YSBmcm9tICcuL2dldFNpYmxpbmdEYXRhJztcbmltcG9ydCByZWR1Y2VGaWVsZHNUb1ZhbHVlcyBmcm9tICcuL3JlZHVjZUZpZWxkc1RvVmFsdWVzJztcbmltcG9ydCB7IEZvcm1GaWVsZCwgRmllbGRBY3Rpb24sIEZpZWxkcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGRlZXBDb3B5T2JqZWN0IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9kZWVwQ29weU9iamVjdCc7XG5pbXBvcnQgeyBmbGF0dGVuUm93cywgc2VwYXJhdGVSb3dzIH0gZnJvbSAnLi9yb3dzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpZWxkUmVkdWNlcihzdGF0ZTogRmllbGRzLCBhY3Rpb246IEZpZWxkQWN0aW9uKTogRmllbGRzIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JFUExBQ0VfU1RBVEUnOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuXG4gICAgICAvLyBPbmx5IHVwZGF0ZSBmaWVsZHMgdGhhdCBoYXZlIGNoYW5nZWRcbiAgICAgIC8vIGJ5IGNvbXBhcmluZyBvbGQgdmFsdWUgLyBpbml0aWFsVmFsdWUgdG8gbmV3XG4gICAgICAvLyAuLlxuICAgICAgLy8gVGhpcyBpcyBhIHBlcmZvcm1hbmNlIGVuaGFuY2VtZW50IGZvciBzYXZpbmdcbiAgICAgIC8vIGxhcmdlIGRvY3VtZW50cyB3aXRoIGh1bmRyZWRzIG9mIGZpZWxkc1xuXG4gICAgICBPYmplY3QuZW50cmllcyhhY3Rpb24uc3RhdGUpLmZvckVhY2goKFtwYXRoLCBmaWVsZF0pID0+IHtcbiAgICAgICAgY29uc3Qgb2xkRmllbGQgPSBzdGF0ZVtwYXRoXTtcbiAgICAgICAgY29uc3QgbmV3RmllbGQgPSBmaWVsZDtcblxuICAgICAgICBpZiAoIWVxdWFsKG9sZEZpZWxkLCBuZXdGaWVsZCkpIHtcbiAgICAgICAgICBuZXdTdGF0ZVtwYXRoXSA9IG5ld0ZpZWxkO1xuICAgICAgICB9IGVsc2UgaWYgKG9sZEZpZWxkKSB7XG4gICAgICAgICAgbmV3U3RhdGVbcGF0aF0gPSBvbGRGaWVsZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlICdSRU1PVkUnOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIGlmIChuZXdTdGF0ZVthY3Rpb24ucGF0aF0pIGRlbGV0ZSBuZXdTdGF0ZVthY3Rpb24ucGF0aF07XG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSAnTU9ESUZZX0NPTkRJVElPTic6IHtcbiAgICAgIGNvbnN0IHsgcGF0aCwgcmVzdWx0LCB1c2VyIH0gPSBhY3Rpb247XG5cbiAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhzdGF0ZSkucmVkdWNlKChuZXdTdGF0ZSwgW2ZpZWxkUGF0aCwgZmllbGRdKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZFBhdGggPT09IHBhdGggfHwgZmllbGRQYXRoLmluZGV4T2YoYCR7cGF0aH0uYCkgPT09IDApIHtcbiAgICAgICAgICBsZXQgcGFzc2VzQ29uZGl0aW9uID0gcmVzdWx0O1xuXG4gICAgICAgICAgLy8gSWYgYSBjb25kaXRpb24gaXMgYmVpbmcgc2V0IHRvIHRydWUsXG4gICAgICAgICAgLy8gU2V0IGFsbCBjb25kaXRpb25zIHRvIHRydWVcbiAgICAgICAgICAvLyBCZXNpZGVzIHRob3NlIHdobyBzdGlsbCBmYWlsIHRoZWlyIG93biBjb25kaXRpb25zXG5cbiAgICAgICAgICBpZiAocGFzc2VzQ29uZGl0aW9uICYmIGZpZWxkLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgcGFzc2VzQ29uZGl0aW9uID0gZmllbGQuY29uZGl0aW9uKHJlZHVjZUZpZWxkc1RvVmFsdWVzKHN0YXRlLCB0cnVlKSwgZ2V0U2libGluZ0RhdGEoc3RhdGUsIHBhdGgpLCB7IHVzZXIgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgICAgICAgW2ZpZWxkUGF0aF06IHtcbiAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgIHBhc3Nlc0NvbmRpdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICAgICAgW2ZpZWxkUGF0aF06IHtcbiAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgY2FzZSAnVVBEQVRFJzoge1xuICAgICAgY29uc3QgbmV3RmllbGQgPSBPYmplY3QuZW50cmllcyhhY3Rpb24pLnJlZHVjZSgoZmllbGQsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBpZiAoWyd2YWx1ZScsICd2YWxpZCcsICdlcnJvck1lc3NhZ2UnLCAnZGlzYWJsZUZvcm1EYXRhJywgJ2luaXRpYWxWYWx1ZScsICd2YWxpZGF0ZScsICdjb25kaXRpb24nLCAncGFzc2VzQ29uZGl0aW9uJywgJ3Jvd3MnXS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgW2tleV06IHZhbHVlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICB9LCBzdGF0ZVthY3Rpb24ucGF0aF0gfHwge30gYXMgRm9ybUZpZWxkKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24ucGF0aF06IG5ld0ZpZWxkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlICdSRU1PVkVfUk9XJzoge1xuICAgICAgY29uc3QgeyByb3dJbmRleCwgcGF0aCB9ID0gYWN0aW9uO1xuICAgICAgY29uc3QgeyByZW1haW5pbmdGaWVsZHMsIHJvd3MgfSA9IHNlcGFyYXRlUm93cyhwYXRoLCBzdGF0ZSk7XG4gICAgICBjb25zdCByb3dzTWV0YWRhdGEgPSBbLi4uc3RhdGVbcGF0aF0/LnJvd3MgfHwgW11dO1xuXG4gICAgICByb3dzLnNwbGljZShyb3dJbmRleCwgMSk7XG4gICAgICByb3dzTWV0YWRhdGEuc3BsaWNlKHJvd0luZGV4LCAxKTtcblxuICAgICAgY29uc3QgbmV3U3RhdGU6IEZpZWxkcyA9IHtcbiAgICAgICAgLi4ucmVtYWluaW5nRmllbGRzLFxuICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICAuLi5zdGF0ZVtwYXRoXSxcbiAgICAgICAgICB2YWx1ZTogcm93cy5sZW5ndGgsXG4gICAgICAgICAgZGlzYWJsZUZvcm1EYXRhOiByb3dzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgcm93czogcm93c01ldGFkYXRhLFxuICAgICAgICB9LFxuICAgICAgICAuLi5mbGF0dGVuUm93cyhwYXRoLCByb3dzKSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlICdBRERfUk9XJzoge1xuICAgICAgY29uc3QgeyByb3dJbmRleCwgcGF0aCwgc3ViRmllbGRTdGF0ZSwgYmxvY2tUeXBlIH0gPSBhY3Rpb247XG5cbiAgICAgIGNvbnN0IHJvd3NNZXRhZGF0YSA9IFsuLi5zdGF0ZVtwYXRoXT8ucm93cyB8fCBbXV07XG4gICAgICByb3dzTWV0YWRhdGEuc3BsaWNlKFxuICAgICAgICByb3dJbmRleCArIDEsXG4gICAgICAgIDAsXG4gICAgICAgIC8vIG5ldyByb3dcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBuZXcgT2JqZWN0SUQoKS50b0hleFN0cmluZygpLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgYmxvY2tUeXBlOiBibG9ja1R5cGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgIGNoaWxkRXJyb3JQYXRoczogbmV3IFNldCgpLFxuICAgICAgICB9LFxuICAgICAgKTtcblxuICAgICAgaWYgKGJsb2NrVHlwZSkge1xuICAgICAgICBzdWJGaWVsZFN0YXRlLmJsb2NrVHlwZSA9IHtcbiAgICAgICAgICB2YWx1ZTogYmxvY2tUeXBlLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogYmxvY2tUeXBlLFxuICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHJlbWFpbmluZ0ZpZWxkcywgcm93cyB9ID0gc2VwYXJhdGVSb3dzKHBhdGgsIHN0YXRlKTtcblxuICAgICAgLy8gYWN0dWFsIGZvcm0gc3RhdGUgKHZhbHVlIHNhdmVkIGluIGRiKVxuICAgICAgcm93cy5zcGxpY2Uocm93SW5kZXggKyAxLCAwLCBzdWJGaWVsZFN0YXRlKTtcblxuICAgICAgY29uc3QgbmV3U3RhdGU6IEZpZWxkcyA9IHtcbiAgICAgICAgLi4ucmVtYWluaW5nRmllbGRzLFxuICAgICAgICAuLi5mbGF0dGVuUm93cyhwYXRoLCByb3dzKSxcbiAgICAgICAgW3BhdGhdOiB7XG4gICAgICAgICAgLi4uc3RhdGVbcGF0aF0sXG4gICAgICAgICAgdmFsdWU6IHJvd3MubGVuZ3RoLFxuICAgICAgICAgIGRpc2FibGVGb3JtRGF0YTogdHJ1ZSxcbiAgICAgICAgICByb3dzOiByb3dzTWV0YWRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSAnUkVQTEFDRV9ST1cnOiB7XG4gICAgICBjb25zdCB7IHJvd0luZGV4OiByb3dJbmRleEFyZywgcGF0aCwgYmxvY2tUeXBlLCBzdWJGaWVsZFN0YXRlIH0gPSBhY3Rpb247XG4gICAgICBjb25zdCB7IHJlbWFpbmluZ0ZpZWxkcywgcm93cyB9ID0gc2VwYXJhdGVSb3dzKHBhdGgsIHN0YXRlKTtcbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93SW5kZXhBcmcsIHJvd3M/Lmxlbmd0aCAtIDEgfHwgMCkpO1xuXG4gICAgICBjb25zdCByb3dzTWV0YWRhdGEgPSBbLi4uc3RhdGVbcGF0aF0/LnJvd3MgfHwgW11dO1xuICAgICAgcm93c01ldGFkYXRhW3Jvd0luZGV4XSA9IHtcbiAgICAgICAgaWQ6IG5ldyBPYmplY3RJRCgpLnRvSGV4U3RyaW5nKCksXG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgIGJsb2NrVHlwZTogYmxvY2tUeXBlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRFcnJvclBhdGhzOiBuZXcgU2V0KCksXG4gICAgICB9O1xuXG4gICAgICBpZiAoYmxvY2tUeXBlKSB7XG4gICAgICAgIHN1YkZpZWxkU3RhdGUuYmxvY2tUeXBlID0ge1xuICAgICAgICAgIHZhbHVlOiBibG9ja1R5cGUsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBibG9ja1R5cGUsXG4gICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIHJlcGxhY2UgZm9ybSBmaWVsZCBzdGF0ZVxuICAgICAgcm93c1tyb3dJbmRleF0gPSBzdWJGaWVsZFN0YXRlO1xuXG4gICAgICBjb25zdCBuZXdTdGF0ZTogRmllbGRzID0ge1xuICAgICAgICAuLi5yZW1haW5pbmdGaWVsZHMsXG4gICAgICAgIC4uLmZsYXR0ZW5Sb3dzKHBhdGgsIHJvd3MpLFxuICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICAuLi5zdGF0ZVtwYXRoXSxcbiAgICAgICAgICB2YWx1ZTogcm93cy5sZW5ndGgsXG4gICAgICAgICAgZGlzYWJsZUZvcm1EYXRhOiB0cnVlLFxuICAgICAgICAgIHJvd3M6IHJvd3NNZXRhZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlICdEVVBMSUNBVEVfUk9XJzoge1xuICAgICAgY29uc3QgeyByb3dJbmRleCwgcGF0aCB9ID0gYWN0aW9uO1xuICAgICAgY29uc3QgeyByZW1haW5pbmdGaWVsZHMsIHJvd3MgfSA9IHNlcGFyYXRlUm93cyhwYXRoLCBzdGF0ZSk7XG4gICAgICBjb25zdCByb3dzTWV0YWRhdGEgPSBzdGF0ZVtwYXRoXT8ucm93cyB8fCBbXTtcblxuICAgICAgY29uc3QgZHVwbGljYXRlUm93TWV0YWRhdGEgPSBkZWVwQ29weU9iamVjdChyb3dzTWV0YWRhdGFbcm93SW5kZXhdKTtcbiAgICAgIGlmIChkdXBsaWNhdGVSb3dNZXRhZGF0YS5pZCkgZHVwbGljYXRlUm93TWV0YWRhdGEuaWQgPSBuZXcgT2JqZWN0SUQoKS50b0hleFN0cmluZygpO1xuXG4gICAgICBjb25zdCBkdXBsaWNhdGVSb3dTdGF0ZSA9IGRlZXBDb3B5T2JqZWN0KHJvd3Nbcm93SW5kZXhdKTtcbiAgICAgIGlmIChkdXBsaWNhdGVSb3dTdGF0ZS5pZCkgZHVwbGljYXRlUm93U3RhdGUuaWQgPSBuZXcgT2JqZWN0SUQoKS50b0hleFN0cmluZygpO1xuXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgc3ViZmllbGRzXG4gICAgICBpZiAoT2JqZWN0LmtleXMoZHVwbGljYXRlUm93U3RhdGUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gQWRkIG5ldyBvYmplY3QgY29udGFpbmluZyBzdWJmaWVsZCBuYW1lcyB0byB1bmZsYXR0ZW5lZFJvd3MgYXJyYXlcbiAgICAgICAgcm93cy5zcGxpY2Uocm93SW5kZXggKyAxLCAwLCBkdXBsaWNhdGVSb3dTdGF0ZSk7XG4gICAgICAgIHJvd3NNZXRhZGF0YS5zcGxpY2Uocm93SW5kZXggKyAxLCAwLCBkdXBsaWNhdGVSb3dNZXRhZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAuLi5yZW1haW5pbmdGaWVsZHMsXG4gICAgICAgIFtwYXRoXToge1xuICAgICAgICAgIC4uLnN0YXRlW3BhdGhdLFxuICAgICAgICAgIHZhbHVlOiByb3dzLmxlbmd0aCxcbiAgICAgICAgICBkaXNhYmxlRm9ybURhdGE6IHRydWUsXG4gICAgICAgICAgcm93czogcm93c01ldGFkYXRhLFxuICAgICAgICB9LFxuICAgICAgICAuLi5mbGF0dGVuUm93cyhwYXRoLCByb3dzKSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlICdNT1ZFX1JPVyc6IHtcbiAgICAgIGNvbnN0IHsgbW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXgsIHBhdGggfSA9IGFjdGlvbjtcbiAgICAgIGNvbnN0IHsgcmVtYWluaW5nRmllbGRzLCByb3dzIH0gPSBzZXBhcmF0ZVJvd3MocGF0aCwgc3RhdGUpO1xuXG4gICAgICAvLyBjb3B5IHRoZSByb3cgdG8gbW92ZVxuICAgICAgY29uc3QgY29weU9mTW92aW5nUm93ID0gcm93c1ttb3ZlRnJvbUluZGV4XTtcbiAgICAgIC8vIGRlbGV0ZSB0aGUgcm93IGJ5IGluZGV4XG4gICAgICByb3dzLnNwbGljZShtb3ZlRnJvbUluZGV4LCAxKTtcbiAgICAgIC8vIGluc2VydCByb3cgY29weU9mTW92aW5nUm93IGJhY2sgaW5cbiAgICAgIHJvd3Muc3BsaWNlKG1vdmVUb0luZGV4LCAwLCBjb3B5T2ZNb3ZpbmdSb3cpO1xuXG4gICAgICAvLyBtb2RpZnkgYXJyYXkvYmxvY2sgaW50ZXJuYWwgcm93IHN0YXRlIChpLmUuIGNvbGxhcHNlZCwgYmxvY2tUeXBlKVxuICAgICAgY29uc3Qgcm93U3RhdGVDb3B5ID0gWy4uLnN0YXRlW3BhdGhdPy5yb3dzIHx8IFtdXTtcbiAgICAgIGNvbnN0IG1vdmluZ1Jvd1N0YXRlID0geyAuLi5yb3dTdGF0ZUNvcHlbbW92ZUZyb21JbmRleF0gfTtcbiAgICAgIHJvd1N0YXRlQ29weS5zcGxpY2UobW92ZUZyb21JbmRleCwgMSk7XG4gICAgICByb3dTdGF0ZUNvcHkuc3BsaWNlKG1vdmVUb0luZGV4LCAwLCBtb3ZpbmdSb3dTdGF0ZSk7XG5cbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAuLi5yZW1haW5pbmdGaWVsZHMsXG4gICAgICAgIC4uLmZsYXR0ZW5Sb3dzKHBhdGgsIHJvd3MpLFxuICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICAuLi5zdGF0ZVtwYXRoXSxcbiAgICAgICAgICByb3dzOiByb3dTdGF0ZUNvcHksXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSAnU0VUX1JPV19DT0xMQVBTRUQnOiB7XG4gICAgICBjb25zdCB7IHJvd0lELCBwYXRoLCBjb2xsYXBzZWQsIHNldERvY0ZpZWxkUHJlZmVyZW5jZXMgfSA9IGFjdGlvbjtcblxuICAgICAgY29uc3QgYXJyYXlTdGF0ZSA9IHN0YXRlW3BhdGhdO1xuXG4gICAgICBjb25zdCB7IG1hdGNoZWRJbmRleCwgY29sbGFwc2VkUm93SURzIH0gPSBzdGF0ZVtwYXRoXS5yb3dzLnJlZHVjZSgoYWNjLCByb3csIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzTWF0Y2hpbmdSb3cgPSByb3cuaWQgPT09IHJvd0lEO1xuICAgICAgICBpZiAoaXNNYXRjaGluZ1JvdykgYWNjLm1hdGNoZWRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGlmICghaXNNYXRjaGluZ1JvdyAmJiByb3cuY29sbGFwc2VkKSBhY2MuY29sbGFwc2VkUm93SURzLnB1c2gocm93LmlkKTtcbiAgICAgICAgZWxzZSBpZiAoaXNNYXRjaGluZ1JvdyAmJiBjb2xsYXBzZWQpIGFjYy5jb2xsYXBzZWRSb3dJRHMucHVzaChyb3cuaWQpO1xuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7XG4gICAgICAgIG1hdGNoZWRJbmRleDogdW5kZWZpbmVkLFxuICAgICAgICBjb2xsYXBzZWRSb3dJRHM6IFtdLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChtYXRjaGVkSW5kZXggPiAtMSkge1xuICAgICAgICBhcnJheVN0YXRlLnJvd3NbbWF0Y2hlZEluZGV4XS5jb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgICAgIHNldERvY0ZpZWxkUHJlZmVyZW5jZXMocGF0aCwgeyBjb2xsYXBzZWQ6IGNvbGxhcHNlZFJvd0lEcyB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICAuLi5hcnJheVN0YXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgJ1NFVF9BTExfUk9XU19DT0xMQVBTRUQnOiB7XG4gICAgICBjb25zdCB7IGNvbGxhcHNlZCwgcGF0aCwgc2V0RG9jRmllbGRQcmVmZXJlbmNlcyB9ID0gYWN0aW9uO1xuXG4gICAgICBjb25zdCB7IHJvd3MsIGNvbGxhcHNlZFJvd0lEcyB9ID0gc3RhdGVbcGF0aF0ucm93cy5yZWR1Y2UoKGFjYywgcm93KSA9PiB7XG4gICAgICAgIGlmIChjb2xsYXBzZWQpIGFjYy5jb2xsYXBzZWRSb3dJRHMucHVzaChyb3cuaWQpO1xuXG4gICAgICAgIGFjYy5yb3dzLnB1c2goe1xuICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICBjb2xsYXBzZWQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7XG4gICAgICAgIHJvd3M6IFtdLFxuICAgICAgICBjb2xsYXBzZWRSb3dJRHM6IFtdLFxuICAgICAgfSk7XG5cbiAgICAgIHNldERvY0ZpZWxkUHJlZmVyZW5jZXMocGF0aCwgeyBjb2xsYXBzZWQ6IGNvbGxhcHNlZFJvd0lEcyB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFtwYXRoXToge1xuICAgICAgICAgIC4uLnN0YXRlW3BhdGhdLFxuICAgICAgICAgIHJvd3MsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJlcXVhbCIsIk9iamVjdElEIiwiZ2V0U2libGluZ0RhdGEiLCJyZWR1Y2VGaWVsZHNUb1ZhbHVlcyIsImRlZXBDb3B5T2JqZWN0IiwiZmxhdHRlblJvd3MiLCJzZXBhcmF0ZVJvd3MiLCJmaWVsZFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdTdGF0ZSIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwicGF0aCIsImZpZWxkIiwib2xkRmllbGQiLCJuZXdGaWVsZCIsInJlc3VsdCIsInVzZXIiLCJyZWR1Y2UiLCJmaWVsZFBhdGgiLCJpbmRleE9mIiwicGFzc2VzQ29uZGl0aW9uIiwiY29uZGl0aW9uIiwia2V5IiwidmFsdWUiLCJpbmNsdWRlcyIsInJvd0luZGV4IiwicmVtYWluaW5nRmllbGRzIiwicm93cyIsInJvd3NNZXRhZGF0YSIsInNwbGljZSIsImxlbmd0aCIsImRpc2FibGVGb3JtRGF0YSIsInN1YkZpZWxkU3RhdGUiLCJibG9ja1R5cGUiLCJpZCIsInRvSGV4U3RyaW5nIiwiY29sbGFwc2VkIiwidW5kZWZpbmVkIiwiY2hpbGRFcnJvclBhdGhzIiwiU2V0IiwiaW5pdGlhbFZhbHVlIiwidmFsaWQiLCJyb3dJbmRleEFyZyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJkdXBsaWNhdGVSb3dNZXRhZGF0YSIsImR1cGxpY2F0ZVJvd1N0YXRlIiwia2V5cyIsIm1vdmVGcm9tSW5kZXgiLCJtb3ZlVG9JbmRleCIsImNvcHlPZk1vdmluZ1JvdyIsInJvd1N0YXRlQ29weSIsIm1vdmluZ1Jvd1N0YXRlIiwicm93SUQiLCJzZXREb2NGaWVsZFByZWZlcmVuY2VzIiwiYXJyYXlTdGF0ZSIsImFjYyIsInJvdyIsImluZGV4IiwiaXNNYXRjaGluZ1JvdyIsIm1hdGNoZWRJbmRleCIsImNvbGxhcHNlZFJvd0lEcyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsV0FBVyxhQUFhO0FBQy9CLE9BQU9DLGNBQWMsZ0JBQWdCO0FBQ3JDLE9BQU9DLG9CQUFvQixtQkFBbUI7QUFDOUMsT0FBT0MsMEJBQTBCLHlCQUF5QjtBQUUxRCxPQUFPQyxvQkFBb0IsdUNBQXVDO0FBQ2xFLFNBQVNDLFdBQVcsRUFBRUMsWUFBWSxRQUFRLFNBQVM7QUFFbkQsT0FBTyxTQUFTQyxhQUFhQyxLQUFhLEVBQUVDLE1BQW1CO0lBQzdELE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUFpQjtnQkFDcEIsSUFBTUMsV0FBVyxDQUFDO2dCQUVsQix1Q0FBdUM7Z0JBQ3ZDLCtDQUErQztnQkFDL0MsS0FBSztnQkFDTCwrQ0FBK0M7Z0JBQy9DLDBDQUEwQztnQkFFMUNDLE9BQU9DLE9BQU8sQ0FBQ0osT0FBT0QsS0FBSyxFQUFFTSxPQUFPLENBQUM7NkRBQUVDLGtCQUFNQztvQkFDM0MsSUFBTUMsV0FBV1QsS0FBSyxDQUFDTyxLQUFLO29CQUM1QixJQUFNRyxXQUFXRjtvQkFFakIsSUFBSSxDQUFDaEIsTUFBTWlCLFVBQVVDLFdBQVc7d0JBQzlCUCxRQUFRLENBQUNJLEtBQUssR0FBR0c7b0JBQ25CLE9BQU8sSUFBSUQsVUFBVTt3QkFDbkJOLFFBQVEsQ0FBQ0ksS0FBSyxHQUFHRTtvQkFDbkI7Z0JBQ0Y7Z0JBRUEsT0FBT047WUFDVDtRQUVBLEtBQUs7WUFBVTtnQkFDYixJQUFNQSxZQUFXLG1CQUFLSDtn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