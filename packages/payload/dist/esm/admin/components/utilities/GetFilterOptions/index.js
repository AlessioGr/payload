function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import { useEffect } from "react";
import equal from "deep-equal";
import { useAuth } from "../Auth";
import { useDocumentInfo } from "../DocumentInfo";
import { useAllFormFields } from "../../forms/Form/context";
import { getFilterOptionsQuery } from "../../forms/field-types/getFilterOptionsQuery";
import reduceFieldsToValues from "../../forms/Form/reduceFieldsToValues";
import getSiblingData from "../../forms/Form/getSiblingData";
export var GetFilterOptions = function(param) {
    var filterOptions = param.filterOptions, filterOptionsResult = param.filterOptionsResult, setFilterOptionsResult = param.setFilterOptionsResult, relationTo = param.relationTo, path = param.path;
    var _useAllFormFields = _sliced_to_array(useAllFormFields(), 1), fields = _useAllFormFields[0];
    var id = useDocumentInfo().id;
    var user = useAuth().user;
    useEffect(function() {
        var data = reduceFieldsToValues(fields, true);
        var siblingData = getSiblingData(fields, path);
        var getFilterOptions = function() {
            var _ref = _async_to_generator(function() {
                var newFilterOptionsResult;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                getFilterOptionsQuery(filterOptions, {
                                    id: id,
                                    data: data,
                                    relationTo: relationTo,
                                    siblingData: siblingData,
                                    user: user
                                })
                            ];
                        case 1:
                            newFilterOptionsResult = _state.sent();
                            if (!equal(newFilterOptionsResult, filterOptionsResult)) {
                                setFilterOptionsResult(newFilterOptionsResult);
                            }
                            return [
                                2
                            ];
                    }
                });
            });
            return function getFilterOptions() {
                return _ref.apply(this, arguments);
            };
        }();
        getFilterOptions();
    }, [
        fields,
        filterOptions,
        id,
        relationTo,
        user,
        path,
        filterOptionsResult,
        setFilterOptionsResult
    ]);
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9HZXRGaWx0ZXJPcHRpb25zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZXF1YWwgZnJvbSAnZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyBGaWx0ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vQXV0aCc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHsgdXNlQWxsRm9ybUZpZWxkcyB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgeyBnZXRGaWx0ZXJPcHRpb25zUXVlcnkgfSBmcm9tICcuLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9nZXRGaWx0ZXJPcHRpb25zUXVlcnknO1xuaW1wb3J0IHsgRmlsdGVyT3B0aW9uc1Jlc3VsdCB9IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC90eXBlcyc7XG5pbXBvcnQgcmVkdWNlRmllbGRzVG9WYWx1ZXMgZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9yZWR1Y2VGaWVsZHNUb1ZhbHVlcyc7XG5pbXBvcnQgZ2V0U2libGluZ0RhdGEgZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9nZXRTaWJsaW5nRGF0YSc7XG5cbnR5cGUgQXJncyA9IHtcbiAgZmlsdGVyT3B0aW9uczogRmlsdGVyT3B0aW9uc1xuICBmaWx0ZXJPcHRpb25zUmVzdWx0OiBGaWx0ZXJPcHRpb25zUmVzdWx0XG4gIHNldEZpbHRlck9wdGlvbnNSZXN1bHQ6IChvcHRpb25GaWx0ZXJzOiBGaWx0ZXJPcHRpb25zUmVzdWx0KSA9PiB2b2lkXG4gIHJlbGF0aW9uVG86IHN0cmluZyB8IHN0cmluZ1tdXG4gIHBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgR2V0RmlsdGVyT3B0aW9ucyA9ICh7XG4gIGZpbHRlck9wdGlvbnMsXG4gIGZpbHRlck9wdGlvbnNSZXN1bHQsXG4gIHNldEZpbHRlck9wdGlvbnNSZXN1bHQsXG4gIHJlbGF0aW9uVG8sXG4gIHBhdGgsXG59OiBBcmdzKTogbnVsbCA9PiB7XG4gIGNvbnN0IFtmaWVsZHNdID0gdXNlQWxsRm9ybUZpZWxkcygpO1xuICBjb25zdCB7IGlkIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVkdWNlRmllbGRzVG9WYWx1ZXMoZmllbGRzLCB0cnVlKTtcbiAgICBjb25zdCBzaWJsaW5nRGF0YSA9IGdldFNpYmxpbmdEYXRhKGZpZWxkcywgcGF0aCk7XG5cbiAgICBjb25zdCBnZXRGaWx0ZXJPcHRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RmlsdGVyT3B0aW9uc1Jlc3VsdCA9IGF3YWl0IGdldEZpbHRlck9wdGlvbnNRdWVyeShmaWx0ZXJPcHRpb25zLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBkYXRhLFxuICAgICAgICByZWxhdGlvblRvLFxuICAgICAgICBzaWJsaW5nRGF0YSxcbiAgICAgICAgdXNlcixcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWVxdWFsKG5ld0ZpbHRlck9wdGlvbnNSZXN1bHQsIGZpbHRlck9wdGlvbnNSZXN1bHQpKSB7XG4gICAgICAgIHNldEZpbHRlck9wdGlvbnNSZXN1bHQobmV3RmlsdGVyT3B0aW9uc1Jlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBnZXRGaWx0ZXJPcHRpb25zKCk7XG4gIH0sIFtcbiAgICBmaWVsZHMsXG4gICAgZmlsdGVyT3B0aW9ucyxcbiAgICBpZCxcbiAgICByZWxhdGlvblRvLFxuICAgIHVzZXIsXG4gICAgcGF0aCxcbiAgICBmaWx0ZXJPcHRpb25zUmVzdWx0LFxuICAgIHNldEZpbHRlck9wdGlvbnNSZXN1bHQsXG4gIF0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJlcXVhbCIsInVzZUF1dGgiLCJ1c2VEb2N1bWVudEluZm8iLCJ1c2VBbGxGb3JtRmllbGRzIiwiZ2V0RmlsdGVyT3B0aW9uc1F1ZXJ5IiwicmVkdWNlRmllbGRzVG9WYWx1ZXMiLCJnZXRTaWJsaW5nRGF0YSIsIkdldEZpbHRlck9wdGlvbnMiLCJmaWx0ZXJPcHRpb25zIiwiZmlsdGVyT3B0aW9uc1Jlc3VsdCIsInNldEZpbHRlck9wdGlvbnNSZXN1bHQiLCJyZWxhdGlvblRvIiwicGF0aCIsImZpZWxkcyIsImlkIiwidXNlciIsImRhdGEiLCJzaWJsaW5nRGF0YSIsImdldEZpbHRlck9wdGlvbnMiLCJuZXdGaWx0ZXJPcHRpb25zUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVMsUUFBUSxRQUFRO0FBQ2xDLE9BQU9DLFdBQVcsYUFBYTtBQUUvQixTQUFTQyxPQUFPLFFBQVEsVUFBVTtBQUNsQyxTQUFTQyxlQUFlLFFBQVEsa0JBQWtCO0FBQ2xELFNBQVNDLGdCQUFnQixRQUFRLDJCQUEyQjtBQUM1RCxTQUFTQyxxQkFBcUIsUUFBUSxnREFBZ0Q7QUFFdEYsT0FBT0MsMEJBQTBCLHdDQUF3QztBQUN6RSxPQUFPQyxvQkFBb0Isa0NBQWtDO0FBVTdELE9BQU8sSUFBTUMsbUJBQW1CO1FBQzlCQyxzQkFBQUEsZUFDQUMsNEJBQUFBLHFCQUNBQywrQkFBQUEsd0JBQ0FDLG1CQUFBQSxZQUNBQyxhQUFBQTtJQUVBLElBQWlCVCxxQ0FBQUEsd0JBQVZVLFNBQVVWO0lBQ2pCLElBQU0sQUFBRVcsS0FBT1osa0JBQVBZO0lBQ1IsSUFBTSxBQUFFQyxPQUFTZCxVQUFUYztJQUVSaEIsVUFBVTtRQUNSLElBQU1pQixPQUFPWCxxQkFBcUJRLFFBQVE7UUFDMUMsSUFBTUksY0FBY1gsZUFBZU8sUUFBUUQ7UUFFM0MsSUFBTU07dUJBQW1CLG9CQUFBO29CQUNqQkM7Ozs7NEJBQXlCOztnQ0FBTWYsc0JBQXNCSSxlQUFlO29DQUN4RU0sSUFBQUE7b0NBQ0FFLE1BQUFBO29DQUNBTCxZQUFBQTtvQ0FDQU0sYUFBQUE7b0NBQ0FGLE1BQUFBO2dDQUNGOzs7NEJBTk1JLHlCQUF5Qjs0QkFRL0IsSUFBSSxDQUFDbkIsTUFBTW1CLHdCQUF3QlYsc0JBQXNCO2dDQUN2REMsdUJBQXVCUzs0QkFDekI7Ozs7OztZQUNGOzRCQVpNRDs7OztRQWFOQTtJQUNGLEdBQUc7UUFDREw7UUFDQUw7UUFDQU07UUFDQUg7UUFDQUk7UUFDQUg7UUFDQUg7UUFDQUM7S0FDRDtJQUVELE9BQU87QUFDVCxFQUFFIn0=