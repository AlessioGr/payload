function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
export var separateRows = function(path, fields) {
    var remainingFields = {};
    var rows = Object.entries(fields).reduce(function(incomingRows, param) {
        var _param = _sliced_to_array(param, 2), fieldPath = _param[0], field = _param[1];
        var newRows = incomingRows;
        if (fieldPath.indexOf("".concat(path, ".")) === 0) {
            var index = Number(fieldPath.replace("".concat(path, "."), "").split(".")[0]);
            if (!newRows[index]) newRows[index] = {};
            newRows[index][fieldPath.replace("".concat(path, ".").concat(String(index), "."), "")] = _object_spread({}, field);
        } else {
            remainingFields[fieldPath] = field;
        }
        return newRows;
    }, []);
    return {
        remainingFields: remainingFields,
        rows: rows
    };
};
export var flattenRows = function(path, rows) {
    return rows.reduce(function(fields, row, i) {
        return _object_spread({}, fields, Object.entries(row).reduce(function(subFields, param) {
            var _param = _sliced_to_array(param, 2), subPath = _param[0], subField = _param[1];
            return _object_spread_props(_object_spread({}, subFields), _define_property({}, "".concat(path, ".").concat(i, ".").concat(subPath), _object_spread({}, subField)));
        }, {}));
    }, {});
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vcm93cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZHMgfSBmcm9tICcuL3R5cGVzJztcblxudHlwZSBSZXN1bHQgPSB7XG4gIHJlbWFpbmluZ0ZpZWxkczogRmllbGRzXG4gIHJvd3M6IEZpZWxkc1tdXG59XG5cbmV4cG9ydCBjb25zdCBzZXBhcmF0ZVJvd3MgPSAocGF0aDogc3RyaW5nLCBmaWVsZHM6IEZpZWxkcyk6IFJlc3VsdCA9PiB7XG4gIGNvbnN0IHJlbWFpbmluZ0ZpZWxkczogRmllbGRzID0ge307XG5cbiAgY29uc3Qgcm93cyA9IE9iamVjdC5lbnRyaWVzKGZpZWxkcykucmVkdWNlKChpbmNvbWluZ1Jvd3MsIFtmaWVsZFBhdGgsIGZpZWxkXSkgPT4ge1xuICAgIGNvbnN0IG5ld1Jvd3MgPSBpbmNvbWluZ1Jvd3M7XG5cbiAgICBpZiAoZmllbGRQYXRoLmluZGV4T2YoYCR7cGF0aH0uYCkgPT09IDApIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGZpZWxkUGF0aC5yZXBsYWNlKGAke3BhdGh9LmAsICcnKS5zcGxpdCgnLicpWzBdKTtcbiAgICAgIGlmICghbmV3Um93c1tpbmRleF0pIG5ld1Jvd3NbaW5kZXhdID0ge307XG4gICAgICBuZXdSb3dzW2luZGV4XVtmaWVsZFBhdGgucmVwbGFjZShgJHtwYXRofS4ke1N0cmluZyhpbmRleCl9LmAsICcnKV0gPSB7IC4uLmZpZWxkIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbWFpbmluZ0ZpZWxkc1tmaWVsZFBhdGhdID0gZmllbGQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1Jvd3M7XG4gIH0sIFtdKTtcblxuICByZXR1cm4ge1xuICAgIHJlbWFpbmluZ0ZpZWxkcyxcbiAgICByb3dzLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW5Sb3dzID0gKHBhdGg6IHN0cmluZywgcm93czogRmllbGRzW10pOiBGaWVsZHMgPT4ge1xuICByZXR1cm4gcm93cy5yZWR1Y2UoKGZpZWxkcywgcm93LCBpKSA9PiAoe1xuICAgIC4uLmZpZWxkcyxcbiAgICAuLi5PYmplY3QuZW50cmllcyhyb3cpLnJlZHVjZSgoc3ViRmllbGRzLCBbc3ViUGF0aCwgc3ViRmllbGRdKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdWJGaWVsZHMsXG4gICAgICAgIFtgJHtwYXRofS4ke2l9LiR7c3ViUGF0aH1gXTogeyAuLi5zdWJGaWVsZCB9LFxuICAgICAgfTtcbiAgICB9LCB7fSksXG4gIH0pLCB7fSk7XG59O1xuIl0sIm5hbWVzIjpbInNlcGFyYXRlUm93cyIsInBhdGgiLCJmaWVsZHMiLCJyZW1haW5pbmdGaWVsZHMiLCJyb3dzIiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImluY29taW5nUm93cyIsImZpZWxkUGF0aCIsImZpZWxkIiwibmV3Um93cyIsImluZGV4T2YiLCJpbmRleCIsIk51bWJlciIsInJlcGxhY2UiLCJzcGxpdCIsIlN0cmluZyIsImZsYXR0ZW5Sb3dzIiwicm93IiwiaSIsInN1YkZpZWxkcyIsInN1YlBhdGgiLCJzdWJGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLElBQU1BLGVBQWUsU0FBQ0MsTUFBY0M7SUFDekMsSUFBTUMsa0JBQTBCLENBQUM7SUFFakMsSUFBTUMsT0FBT0MsT0FBT0MsT0FBTyxDQUFDSixRQUFRSyxNQUFNLENBQUMsU0FBQ0M7aURBQWVDLHVCQUFXQztRQUNwRSxJQUFNQyxVQUFVSDtRQUVoQixJQUFJQyxVQUFVRyxPQUFPLENBQUMsQUFBQyxHQUFPLE9BQUxYLE1BQUssVUFBUSxHQUFHO1lBQ3ZDLElBQU1ZLFFBQVFDLE9BQU9MLFVBQVVNLE9BQU8sQ0FBQyxBQUFDLEdBQU8sT0FBTGQsTUFBSyxNQUFJLElBQUllLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRSxJQUFJLENBQUNMLE9BQU8sQ0FBQ0UsTUFBTSxFQUFFRixPQUFPLENBQUNFLE1BQU0sR0FBRyxDQUFDO1lBQ3ZDRixPQUFPLENBQUNFLE1BQU0sQ0FBQ0osVUFBVU0sT0FBTyxDQUFDLEFBQUMsR0FBVUUsT0FBUmhCLE1BQUssS0FBaUIsT0FBZGdCLE9BQU9KLFFBQU8sTUFBSSxJQUFJLEdBQUcsbUJBQUtIO1FBQzVFLE9BQU87WUFDTFAsZUFBZSxDQUFDTSxVQUFVLEdBQUdDO1FBQy9CO1FBRUEsT0FBT0M7SUFDVCxHQUFHLEVBQUU7SUFFTCxPQUFPO1FBQ0xSLGlCQUFBQTtRQUNBQyxNQUFBQTtJQUNGO0FBQ0YsRUFBRTtBQUVGLE9BQU8sSUFBTWMsY0FBYyxTQUFDakIsTUFBY0c7SUFDeEMsT0FBT0EsS0FBS0csTUFBTSxDQUFDLFNBQUNMLFFBQVFpQixLQUFLQztlQUFPLG1CQUNuQ2xCLFFBQ0FHLE9BQU9DLE9BQU8sQ0FBQ2EsS0FBS1osTUFBTSxDQUFDLFNBQUNjO3FEQUFZQyxxQkFBU0M7WUFDbEQsT0FBTyx3Q0FDRkYsWUFDSCxxQkFBQyxBQUFDLEdBQVVELE9BQVJuQixNQUFLLEtBQVFxQixPQUFMRixHQUFFLEtBQVcsT0FBUkUsVUFBWSxtQkFBS0M7UUFFdEMsR0FBRyxDQUFDO09BQ0YsQ0FBQztBQUNQLEVBQUUifQ==