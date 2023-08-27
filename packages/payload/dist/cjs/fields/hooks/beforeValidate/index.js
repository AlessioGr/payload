"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "beforeValidate", {
    enumerable: true,
    get: function() {
        return beforeValidate;
    }
});
var _traverseFields = require("./traverseFields");
var _deepCopyObject = /*#__PURE__*/ _interop_require_default(require("../../../utilities/deepCopyObject"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var beforeValidate = function() {
    var _ref = _async_to_generator(function(param) {
        var incomingData, doc, entityConfig, id, operation, overrideAccess, req, context, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    incomingData = param.data, doc = param.doc, entityConfig = param.entityConfig, id = param.id, operation = param.operation, overrideAccess = param.overrideAccess, req = param.req, context = param.context;
                    data = (0, _deepCopyObject.default)(incomingData);
                    return [
                        4,
                        (0, _traverseFields.traverseFields)({
                            data: data,
                            doc: doc,
                            fields: entityConfig.fields,
                            id: id,
                            operation: operation,
                            overrideAccess: overrideAccess,
                            req: req,
                            siblingData: data,
                            siblingDoc: doc,
                            context: context
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        data
                    ];
            }
        });
    });
    return function beforeValidate(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlVmFsaWRhdGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCwgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IHRyYXZlcnNlRmllbGRzIH0gZnJvbSAnLi90cmF2ZXJzZUZpZWxkcyc7XG5pbXBvcnQgZGVlcENvcHlPYmplY3QgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2RlZXBDb3B5T2JqZWN0JztcblxudHlwZSBBcmdzPFQ+ID0ge1xuICBkYXRhOiBUIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZG9jPzogVCB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGVudGl0eUNvbmZpZzogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB8IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBpZD86IHN0cmluZyB8IG51bWJlclxuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBjb250ZXh0OiBSZXF1ZXN0Q29udGV4dFxufVxuXG5leHBvcnQgY29uc3QgYmVmb3JlVmFsaWRhdGUgPSBhc3luYyA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+Pih7XG4gIGRhdGE6IGluY29taW5nRGF0YSxcbiAgZG9jLFxuICBlbnRpdHlDb25maWcsXG4gIGlkLFxuICBvcGVyYXRpb24sXG4gIG92ZXJyaWRlQWNjZXNzLFxuICByZXEsXG4gIGNvbnRleHQsXG59OiBBcmdzPFQ+KTogUHJvbWlzZTxUPiA9PiB7XG4gIGNvbnN0IGRhdGEgPSBkZWVwQ29weU9iamVjdChpbmNvbWluZ0RhdGEpO1xuXG4gIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICBkYXRhLFxuICAgIGRvYyxcbiAgICBmaWVsZHM6IGVudGl0eUNvbmZpZy5maWVsZHMsXG4gICAgaWQsXG4gICAgb3BlcmF0aW9uLFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHJlcSxcbiAgICBzaWJsaW5nRGF0YTogZGF0YSxcbiAgICBzaWJsaW5nRG9jOiBkb2MsXG4gICAgY29udGV4dCxcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIl0sIm5hbWVzIjpbImJlZm9yZVZhbGlkYXRlIiwiaW5jb21pbmdEYXRhIiwiZG9jIiwiZW50aXR5Q29uZmlnIiwiaWQiLCJvcGVyYXRpb24iLCJvdmVycmlkZUFjY2VzcyIsInJlcSIsImNvbnRleHQiLCJkYXRhIiwiZGVlcENvcHlPYmplY3QiLCJ0cmF2ZXJzZUZpZWxkcyIsImZpZWxkcyIsInNpYmxpbmdEYXRhIiwic2libGluZ0RvYyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFpQmFBOzs7ZUFBQUE7Ozs4QkFka0I7cUVBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhcEIsSUFBTUE7ZUFBaUIsb0JBQUE7WUFDdEJDLGNBQ05DLEtBQ0FDLGNBQ0FDLElBQ0FDLFdBQ0FDLGdCQUNBQyxLQUNBQyxTQUVNQzs7OztvQkFUQVIscUJBQU5RLE1BQ0FQLFlBQUFBLEtBQ0FDLHFCQUFBQSxjQUNBQyxXQUFBQSxJQUNBQyxrQkFBQUEsV0FDQUMsdUJBQUFBLGdCQUNBQyxZQUFBQSxLQUNBQyxnQkFBQUE7b0JBRU1DLE9BQU9DLElBQUFBLHVCQUFjLEVBQUNUO29CQUU1Qjs7d0JBQU1VLElBQUFBLDhCQUFjLEVBQUM7NEJBQ25CRixNQUFBQTs0QkFDQVAsS0FBQUE7NEJBQ0FVLFFBQVFULGFBQWFTLE1BQU07NEJBQzNCUixJQUFBQTs0QkFDQUMsV0FBQUE7NEJBQ0FDLGdCQUFBQTs0QkFDQUMsS0FBQUE7NEJBQ0FNLGFBQWFKOzRCQUNiSyxZQUFZWjs0QkFDWk0sU0FBQUE7d0JBQ0Y7OztvQkFYQTtvQkFhQTs7d0JBQU9DOzs7O0lBQ1Q7b0JBMUJhVCJ9