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
var reducer = function(state, action) {
    var newState = _to_consumable_array(state);
    var orIndex = action.orIndex, andIndex = action.andIndex;
    switch(action.type){
        case "add":
            {
                var relation = action.relation, field = action.field;
                if (relation === "and") {
                    newState[orIndex].and.splice(andIndex, 0, _define_property({}, field, {}));
                    return newState;
                }
                return _to_consumable_array(newState).concat([
                    {
                        and: [
                            _define_property({}, field, {})
                        ]
                    }
                ]);
            }
        case "remove":
            {
                newState[orIndex].and.splice(andIndex, 1);
                if (newState[orIndex].and.length === 0) {
                    newState.splice(orIndex, 1);
                }
                return newState;
            }
        case "update":
            {
                var field1 = action.field, operator = action.operator, value = action.value;
                if (typeof newState[orIndex].and[andIndex] === "object") {
                    newState[orIndex].and[andIndex] = _object_spread({}, newState[orIndex].and[andIndex]);
                    var _ref = _sliced_to_array(Object.entries(newState[orIndex].and[andIndex])[0] || [
                        undefined,
                        undefined
                    ], 2), existingFieldName = _ref[0], existingCondition = _ref[1];
                    if (operator) {
                        newState[orIndex].and[andIndex] = _define_property({}, existingFieldName, _define_property({}, operator, Object.values(existingCondition)[0]));
                    }
                    if (field1) {
                        newState[orIndex].and[andIndex] = _define_property({}, field1, _define_property({}, Object.keys(existingCondition)[0], Object.values(existingCondition)[0]));
                    }
                    if (value !== undefined) {
                        newState[orIndex].and[andIndex] = _define_property({}, existingFieldName, _define_property({}, Object.keys(existingCondition)[0], value));
                    }
                }
                return newState;
            }
        default:
            {
                return newState;
            }
    }
};
var _default = reducer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9yZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IFdoZXJlW10sIGFjdGlvbjogQWN0aW9uKTogV2hlcmVbXSA9PiB7XG4gIGNvbnN0IG5ld1N0YXRlID0gW1xuICAgIC4uLnN0YXRlLFxuICBdO1xuXG4gIGNvbnN0IHtcbiAgICBvckluZGV4LFxuICAgIGFuZEluZGV4LFxuICB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdhZGQnOiB7XG4gICAgICBjb25zdCB7IHJlbGF0aW9uLCBmaWVsZCB9ID0gYWN0aW9uO1xuXG4gICAgICBpZiAocmVsYXRpb24gPT09ICdhbmQnKSB7XG4gICAgICAgIG5ld1N0YXRlW29ySW5kZXhdLmFuZC5zcGxpY2UoYW5kSW5kZXgsIDAsIHsgW2ZpZWxkXToge30gfSk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4ubmV3U3RhdGUsXG4gICAgICAgIHtcbiAgICAgICAgICBhbmQ6IFt7XG4gICAgICAgICAgICBbZmllbGRdOiB7fSxcbiAgICAgICAgICB9XSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgY2FzZSAncmVtb3ZlJzoge1xuICAgICAgbmV3U3RhdGVbb3JJbmRleF0uYW5kLnNwbGljZShhbmRJbmRleCwgMSk7XG5cbiAgICAgIGlmIChuZXdTdGF0ZVtvckluZGV4XS5hbmQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5ld1N0YXRlLnNwbGljZShvckluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgJ3VwZGF0ZSc6IHtcbiAgICAgIGNvbnN0IHsgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSB9ID0gYWN0aW9uO1xuXG4gICAgICBpZiAodHlwZW9mIG5ld1N0YXRlW29ySW5kZXhdLmFuZFthbmRJbmRleF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG5ld1N0YXRlW29ySW5kZXhdLmFuZFthbmRJbmRleF0gPSB7XG4gICAgICAgICAgLi4ubmV3U3RhdGVbb3JJbmRleF0uYW5kW2FuZEluZGV4XSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBbZXhpc3RpbmdGaWVsZE5hbWUsIGV4aXN0aW5nQ29uZGl0aW9uXSA9IE9iamVjdC5lbnRyaWVzKG5ld1N0YXRlW29ySW5kZXhdLmFuZFthbmRJbmRleF0pWzBdIHx8IFt1bmRlZmluZWQsIHVuZGVmaW5lZF07XG5cbiAgICAgICAgaWYgKG9wZXJhdG9yKSB7XG4gICAgICAgICAgbmV3U3RhdGVbb3JJbmRleF0uYW5kW2FuZEluZGV4XSA9IHtcbiAgICAgICAgICAgIFtleGlzdGluZ0ZpZWxkTmFtZV06IHtcbiAgICAgICAgICAgICAgW29wZXJhdG9yXTogT2JqZWN0LnZhbHVlcyhleGlzdGluZ0NvbmRpdGlvbilbMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICBuZXdTdGF0ZVtvckluZGV4XS5hbmRbYW5kSW5kZXhdID0ge1xuICAgICAgICAgICAgW2ZpZWxkXToge1xuICAgICAgICAgICAgICBbT2JqZWN0LmtleXMoZXhpc3RpbmdDb25kaXRpb24pWzBdXTogT2JqZWN0LnZhbHVlcyhleGlzdGluZ0NvbmRpdGlvbilbMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG5ld1N0YXRlW29ySW5kZXhdLmFuZFthbmRJbmRleF0gPSB7XG4gICAgICAgICAgICBbZXhpc3RpbmdGaWVsZE5hbWVdOiB7XG4gICAgICAgICAgICAgIFtPYmplY3Qua2V5cyhleGlzdGluZ0NvbmRpdGlvbilbMF1dOiB2YWx1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJuZXdTdGF0ZSIsIm9ySW5kZXgiLCJhbmRJbmRleCIsInR5cGUiLCJyZWxhdGlvbiIsImZpZWxkIiwiYW5kIiwic3BsaWNlIiwibGVuZ3RoIiwib3BlcmF0b3IiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJ1bmRlZmluZWQiLCJleGlzdGluZ0ZpZWxkTmFtZSIsImV4aXN0aW5nQ29uZGl0aW9uIiwidmFsdWVzIiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFzRkE7OztlQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW5GQSxJQUFNQSxVQUFVLFNBQUNDLE9BQWdCQztJQUMvQixJQUFNQyxXQUNKLHFCQUFHRjtJQUdMLElBQ0VHLFVBRUVGLE9BRkZFLFNBQ0FDLFdBQ0VILE9BREZHO0lBR0YsT0FBUUgsT0FBT0ksSUFBSTtRQUNqQixLQUFLO1lBQU87Z0JBQ1YsSUFBUUMsV0FBb0JMLE9BQXBCSyxVQUFVQyxRQUFVTixPQUFWTTtnQkFFbEIsSUFBSUQsYUFBYSxPQUFPO29CQUN0QkosUUFBUSxDQUFDQyxRQUFRLENBQUNLLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDTCxVQUFVLEdBQUsscUJBQUNHLE9BQVEsQ0FBQztvQkFDdEQsT0FBT0w7Z0JBQ1Q7Z0JBRUEsT0FBTyxBQUNMLHFCQUFHQSxpQkFERTtvQkFFTDt3QkFDRU0sS0FBSzs0QkFDSCxxQkFBQ0QsT0FBUSxDQUFDO3lCQUNWO29CQUNKO2lCQUNEO1lBQ0g7UUFFQSxLQUFLO1lBQVU7Z0JBQ2JMLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDSyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0wsVUFBVTtnQkFFdkMsSUFBSUYsUUFBUSxDQUFDQyxRQUFRLENBQUNLLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEdBQUc7b0JBQ3RDUixTQUFTTyxNQUFNLENBQUNOLFNBQVM7Z0JBQzNCO2dCQUVBLE9BQU9EO1lBQ1Q7UUFFQSxLQUFLO1lBQVU7Z0JBQ2IsSUFBUUssU0FBMkJOLE9BQTNCTSxPQUFPSSxXQUFvQlYsT0FBcEJVLFVBQVVDLFFBQVVYLE9BQVZXO2dCQUV6QixJQUFJLE9BQU9WLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDSyxHQUFHLENBQUNKLFNBQVMsS0FBSyxVQUFVO29CQUN2REYsUUFBUSxDQUFDQyxRQUFRLENBQUNLLEdBQUcsQ0FBQ0osU0FBUyxHQUFHLG1CQUM3QkYsUUFBUSxDQUFDQyxRQUFRLENBQUNLLEdBQUcsQ0FBQ0osU0FBUztvQkFHcEMsSUFBK0NTLHdCQUFBQSxPQUFPQyxPQUFPLENBQUNaLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDSyxHQUFHLENBQUNKLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSTt3QkFBQ1c7d0JBQVdBO3FCQUFVLE1BQXBIQyxvQkFBd0NILFNBQXJCSSxvQkFBcUJKO29CQUUvQyxJQUFJRixVQUFVO3dCQUNaVCxRQUFRLENBQUNDLFFBQVEsQ0FBQ0ssR0FBRyxDQUFDSixTQUFTLEdBQzdCLHFCQUFDWSxtQkFDQyxxQkFBQ0wsVUFBV0UsT0FBT0ssTUFBTSxDQUFDRCxrQkFBa0IsQ0FBQyxFQUFFO29CQUdyRDtvQkFFQSxJQUFJVixRQUFPO3dCQUNUTCxRQUFRLENBQUNDLFFBQVEsQ0FBQ0ssR0FBRyxDQUFDSixTQUFTLEdBQzdCLHFCQUFDRyxRQUNDLHFCQUFDTSxPQUFPTSxJQUFJLENBQUNGLGtCQUFrQixDQUFDLEVBQUUsRUFBR0osT0FBT0ssTUFBTSxDQUFDRCxrQkFBa0IsQ0FBQyxFQUFFO29CQUc5RTtvQkFFQSxJQUFJTCxVQUFVRyxXQUFXO3dCQUN2QmIsUUFBUSxDQUFDQyxRQUFRLENBQUNLLEdBQUcsQ0FBQ0osU0FBUyxHQUM3QixxQkFBQ1ksbUJBQ0MscUJBQUNILE9BQU9NLElBQUksQ0FBQ0Ysa0JBQWtCLENBQUMsRUFBRSxFQUFHTDtvQkFHM0M7Z0JBQ0Y7Z0JBRUEsT0FBT1Y7WUFDVDtRQUVBO1lBQVM7Z0JBQ1AsT0FBT0E7WUFDVDtJQUNGO0FBQ0Y7SUFFQSxXQUFlSCJ9