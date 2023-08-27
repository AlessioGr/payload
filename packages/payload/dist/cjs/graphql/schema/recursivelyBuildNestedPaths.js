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
var _types = require("../../fields/config/types");
var _fieldToWhereInputSchemaMap = /*#__PURE__*/ _interop_require_default(require("./fieldToWhereInputSchemaMap"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
var recursivelyBuildNestedPaths = function(parentName, nestedFieldName2, field) {
    var fieldName = (0, _types.fieldAffectsData)(field) ? field.name : undefined;
    var nestedFieldName = fieldName || nestedFieldName2;
    if (field.type === "tabs") {
        // if the tab has a name, treat it as a group
        // otherwise, treat it as a row
        return field.tabs.reduce(function(tabSchema, tab) {
            var _tabSchema;
            (_tabSchema = tabSchema).push.apply(_tabSchema, _to_consumable_array(recursivelyBuildNestedPaths(parentName, nestedFieldName, _object_spread_props(_object_spread({}, tab), {
                type: "name" in tab ? "group" : "row"
            }))));
            return tabSchema;
        }, []);
    }
    var nestedPaths = field.fields.reduce(function(nestedFields, nestedField) {
        if (!(0, _types.fieldIsPresentationalOnly)(nestedField)) {
            if (!(0, _types.fieldAffectsData)(nestedField)) {
                return _to_consumable_array(nestedFields).concat(_to_consumable_array(recursivelyBuildNestedPaths(parentName, nestedFieldName, nestedField)));
            }
            var nestedPathName = (0, _types.fieldAffectsData)(nestedField) ? "".concat(nestedFieldName ? "".concat(nestedFieldName, "__") : "").concat(nestedField.name) : undefined;
            var getFieldSchema = (0, _fieldToWhereInputSchemaMap.default)(parentName, nestedFieldName)[nestedField.type];
            if (getFieldSchema) {
                var fieldSchema = getFieldSchema(_object_spread_props(_object_spread({}, nestedField), {
                    name: nestedPathName
                }));
                if (Array.isArray(fieldSchema)) {
                    return _to_consumable_array(nestedFields).concat(_to_consumable_array(fieldSchema));
                }
                return _to_consumable_array(nestedFields).concat([
                    {
                        key: nestedPathName,
                        type: fieldSchema
                    }
                ]);
            }
        }
        return nestedFields;
    }, []);
    return nestedPaths;
};
var _default = recursivelyBuildNestedPaths;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9yZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZmllbGRBZmZlY3RzRGF0YSxcbiAgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSxcbiAgRmllbGRXaXRoU3ViRmllbGRzLFxuICBUYWJzRmllbGQsXG59IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZpZWxkVG9TY2hlbWFNYXAgZnJvbSAnLi9maWVsZFRvV2hlcmVJbnB1dFNjaGVtYU1hcCc7XG5cbmNvbnN0IHJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyA9IChwYXJlbnROYW1lOiBzdHJpbmcsIG5lc3RlZEZpZWxkTmFtZTI6IHN0cmluZywgZmllbGQ6IEZpZWxkV2l0aFN1YkZpZWxkcyB8IFRhYnNGaWVsZCkgPT4ge1xuICBjb25zdCBmaWVsZE5hbWUgPSBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSA/IGZpZWxkLm5hbWUgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG5lc3RlZEZpZWxkTmFtZSA9IGZpZWxkTmFtZSB8fCBuZXN0ZWRGaWVsZE5hbWUyO1xuXG4gIGlmIChmaWVsZC50eXBlID09PSAndGFicycpIHtcbiAgICAvLyBpZiB0aGUgdGFiIGhhcyBhIG5hbWUsIHRyZWF0IGl0IGFzIGEgZ3JvdXBcbiAgICAvLyBvdGhlcndpc2UsIHRyZWF0IGl0IGFzIGEgcm93XG4gICAgcmV0dXJuIGZpZWxkLnRhYnMucmVkdWNlKCh0YWJTY2hlbWEsIHRhYjogYW55KSA9PiB7XG4gICAgICB0YWJTY2hlbWEucHVzaCguLi5yZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMocGFyZW50TmFtZSwgbmVzdGVkRmllbGROYW1lLCB7XG4gICAgICAgIC4uLnRhYixcbiAgICAgICAgdHlwZTogJ25hbWUnIGluIHRhYiA/ICdncm91cCcgOiAncm93JyxcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiB0YWJTY2hlbWE7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgY29uc3QgbmVzdGVkUGF0aHMgPSBmaWVsZC5maWVsZHMucmVkdWNlKChuZXN0ZWRGaWVsZHMsIG5lc3RlZEZpZWxkKSA9PiB7XG4gICAgaWYgKCFmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5KG5lc3RlZEZpZWxkKSkge1xuICAgICAgaWYgKCFmaWVsZEFmZmVjdHNEYXRhKG5lc3RlZEZpZWxkKSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLm5lc3RlZEZpZWxkcyxcbiAgICAgICAgICAuLi5yZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMocGFyZW50TmFtZSwgbmVzdGVkRmllbGROYW1lLCBuZXN0ZWRGaWVsZCksXG4gICAgICAgIF07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5lc3RlZFBhdGhOYW1lID0gZmllbGRBZmZlY3RzRGF0YShuZXN0ZWRGaWVsZCkgPyBgJHtuZXN0ZWRGaWVsZE5hbWUgPyBgJHtuZXN0ZWRGaWVsZE5hbWV9X19gIDogJyd9JHtuZXN0ZWRGaWVsZC5uYW1lfWAgOiB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBnZXRGaWVsZFNjaGVtYSA9IGZpZWxkVG9TY2hlbWFNYXAocGFyZW50TmFtZSwgbmVzdGVkRmllbGROYW1lKVtuZXN0ZWRGaWVsZC50eXBlXTtcblxuICAgICAgaWYgKGdldEZpZWxkU2NoZW1hKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gZ2V0RmllbGRTY2hlbWEoe1xuICAgICAgICAgIC4uLm5lc3RlZEZpZWxkLFxuICAgICAgICAgIG5hbWU6IG5lc3RlZFBhdGhOYW1lLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZFNjaGVtYSkpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4ubmVzdGVkRmllbGRzLFxuICAgICAgICAgICAgLi4uZmllbGRTY2hlbWEsXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4ubmVzdGVkRmllbGRzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogbmVzdGVkUGF0aE5hbWUsXG4gICAgICAgICAgICB0eXBlOiBmaWVsZFNjaGVtYSxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXN0ZWRGaWVsZHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbmVzdGVkUGF0aHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHM7XG4iXSwibmFtZXMiOlsicmVjdXJzaXZlbHlCdWlsZE5lc3RlZFBhdGhzIiwicGFyZW50TmFtZSIsIm5lc3RlZEZpZWxkTmFtZTIiLCJmaWVsZCIsImZpZWxkTmFtZSIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIiwidW5kZWZpbmVkIiwibmVzdGVkRmllbGROYW1lIiwidHlwZSIsInRhYnMiLCJyZWR1Y2UiLCJ0YWJTY2hlbWEiLCJ0YWIiLCJwdXNoIiwibmVzdGVkUGF0aHMiLCJmaWVsZHMiLCJuZXN0ZWRGaWVsZHMiLCJuZXN0ZWRGaWVsZCIsImZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkiLCJuZXN0ZWRQYXRoTmFtZSIsImdldEZpZWxkU2NoZW1hIiwiZmllbGRUb1NjaGVtYU1hcCIsImZpZWxkU2NoZW1hIiwiQXJyYXkiLCJpc0FycmF5Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7OytCQWlFQTs7O2VBQUE7OztxQkE1RE87aUZBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQSw4QkFBOEIsU0FBQ0MsWUFBb0JDLGtCQUEwQkM7SUFDakYsSUFBTUMsWUFBWUMsSUFBQUEsdUJBQWdCLEVBQUNGLFNBQVNBLE1BQU1HLElBQUksR0FBR0M7SUFDekQsSUFBTUMsa0JBQWtCSixhQUFhRjtJQUVyQyxJQUFJQyxNQUFNTSxJQUFJLEtBQUssUUFBUTtRQUN6Qiw2Q0FBNkM7UUFDN0MsK0JBQStCO1FBQy9CLE9BQU9OLE1BQU1PLElBQUksQ0FBQ0MsTUFBTSxDQUFDLFNBQUNDLFdBQVdDO2dCQUNuQ0Q7WUFBQUEsQ0FBQUEsYUFBQUEsV0FBVUUsSUFBSSxDQUFkRixNQUFBQSxZQUFlLHFCQUFHWiw0QkFBNEJDLFlBQVlPLGlCQUFpQix3Q0FDdEVLO2dCQUNISixNQUFNLFVBQVVJLE1BQU0sVUFBVTs7WUFFbEMsT0FBT0Q7UUFDVCxHQUFHLEVBQUU7SUFDUDtJQUVBLElBQU1HLGNBQWNaLE1BQU1hLE1BQU0sQ0FBQ0wsTUFBTSxDQUFDLFNBQUNNLGNBQWNDO1FBQ3JELElBQUksQ0FBQ0MsSUFBQUEsZ0NBQXlCLEVBQUNELGNBQWM7WUFDM0MsSUFBSSxDQUFDYixJQUFBQSx1QkFBZ0IsRUFBQ2EsY0FBYztnQkFDbEMsT0FBTyxBQUNMLHFCQUFHRCxxQkFDSCxxQkFBR2pCLDRCQUE0QkMsWUFBWU8saUJBQWlCVTtZQUVoRTtZQUVBLElBQU1FLGlCQUFpQmYsSUFBQUEsdUJBQWdCLEVBQUNhLGVBQWUsQUFBQyxHQUFrREEsT0FBaERWLGtCQUFrQixBQUFDLEdBQWtCLE9BQWhCQSxpQkFBZ0IsUUFBTSxJQUFzQixPQUFqQlUsWUFBWVosSUFBSSxJQUFLQztZQUMvSCxJQUFNYyxpQkFBaUJDLElBQUFBLG1DQUFnQixFQUFDckIsWUFBWU8sZ0JBQWdCLENBQUNVLFlBQVlULElBQUksQ0FBQztZQUV0RixJQUFJWSxnQkFBZ0I7Z0JBQ2xCLElBQU1FLGNBQWNGLGVBQWUsd0NBQzlCSDtvQkFDSFosTUFBTWM7O2dCQUdSLElBQUlJLE1BQU1DLE9BQU8sQ0FBQ0YsY0FBYztvQkFDOUIsT0FBTyxBQUNMLHFCQUFHTixxQkFDSCxxQkFBR007Z0JBRVA7Z0JBRUEsT0FBTyxBQUNMLHFCQUFHTixxQkFERTtvQkFFTDt3QkFDRVMsS0FBS047d0JBQ0xYLE1BQU1jO29CQUNSO2lCQUNEO1lBQ0g7UUFDRjtRQUVBLE9BQU9OO0lBQ1QsR0FBRyxFQUFFO0lBRUwsT0FBT0Y7QUFDVDtJQUVBLFdBQWVmIn0=