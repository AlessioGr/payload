"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterChange", {
    enumerable: true,
    get: function() {
        return afterChange;
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
var afterChange = function() {
    var _ref = _async_to_generator(function(param) {
        var data, incomingDoc, previousDoc, entityConfig, operation, req, context, doc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = param.data, incomingDoc = param.doc, previousDoc = param.previousDoc, entityConfig = param.entityConfig, operation = param.operation, req = param.req, context = param.context;
                    doc = (0, _deepCopyObject.default)(incomingDoc);
                    return [
                        4,
                        (0, _traverseFields.traverseFields)({
                            data: data,
                            doc: doc,
                            previousDoc: previousDoc,
                            fields: entityConfig.fields,
                            operation: operation,
                            req: req,
                            previousSiblingDoc: previousDoc,
                            siblingDoc: doc,
                            siblingData: data,
                            context: context
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        doc
                    ];
            }
        });
    });
    return function afterChange(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJDaGFuZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCwgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IHRyYXZlcnNlRmllbGRzIH0gZnJvbSAnLi90cmF2ZXJzZUZpZWxkcyc7XG5pbXBvcnQgZGVlcENvcHlPYmplY3QgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2RlZXBDb3B5T2JqZWN0JztcblxudHlwZSBBcmdzPFQ+ID0ge1xuICBkYXRhOiBUIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZG9jOiBUIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgcHJldmlvdXNEb2M6IFQgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBlbnRpdHlDb25maWc6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfCBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgb3BlcmF0aW9uOiAnY3JlYXRlJyB8ICd1cGRhdGUnXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgY29udGV4dDogUmVxdWVzdENvbnRleHRcbn1cblxuZXhwb3J0IGNvbnN0IGFmdGVyQ2hhbmdlID0gYXN5bmMgPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oe1xuICBkYXRhLFxuICBkb2M6IGluY29taW5nRG9jLFxuICBwcmV2aW91c0RvYyxcbiAgZW50aXR5Q29uZmlnLFxuICBvcGVyYXRpb24sXG4gIHJlcSxcbiAgY29udGV4dCxcbn06IEFyZ3M8VD4pOiBQcm9taXNlPFQ+ID0+IHtcbiAgY29uc3QgZG9jID0gZGVlcENvcHlPYmplY3QoaW5jb21pbmdEb2MpO1xuXG4gIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICBkYXRhLFxuICAgIGRvYyxcbiAgICBwcmV2aW91c0RvYyxcbiAgICBmaWVsZHM6IGVudGl0eUNvbmZpZy5maWVsZHMsXG4gICAgb3BlcmF0aW9uLFxuICAgIHJlcSxcbiAgICBwcmV2aW91c1NpYmxpbmdEb2M6IHByZXZpb3VzRG9jLFxuICAgIHNpYmxpbmdEb2M6IGRvYyxcbiAgICBzaWJsaW5nRGF0YTogZGF0YSxcbiAgICBjb250ZXh0LFxuICB9KTtcblxuICByZXR1cm4gZG9jO1xufTtcbiJdLCJuYW1lcyI6WyJhZnRlckNoYW5nZSIsImRhdGEiLCJpbmNvbWluZ0RvYyIsInByZXZpb3VzRG9jIiwiZW50aXR5Q29uZmlnIiwib3BlcmF0aW9uIiwicmVxIiwiY29udGV4dCIsImRvYyIsImRlZXBDb3B5T2JqZWN0IiwidHJhdmVyc2VGaWVsZHMiLCJmaWVsZHMiLCJwcmV2aW91c1NpYmxpbmdEb2MiLCJzaWJsaW5nRG9jIiwic2libGluZ0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7K0JBZ0JhQTs7O2VBQUFBOzs7OEJBYmtCO3FFQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXBCLElBQU1BO2VBQWMsb0JBQUE7WUFDekJDLE1BQ0tDLGFBQ0xDLGFBQ0FDLGNBQ0FDLFdBQ0FDLEtBQ0FDLFNBRU1DOzs7O29CQVJOUCxhQUFBQSxNQUNLQyxvQkFBTE0sS0FDQUwsb0JBQUFBLGFBQ0FDLHFCQUFBQSxjQUNBQyxrQkFBQUEsV0FDQUMsWUFBQUEsS0FDQUMsZ0JBQUFBO29CQUVNQyxNQUFNQyxJQUFBQSx1QkFBYyxFQUFDUDtvQkFFM0I7O3dCQUFNUSxJQUFBQSw4QkFBYyxFQUFDOzRCQUNuQlQsTUFBQUE7NEJBQ0FPLEtBQUFBOzRCQUNBTCxhQUFBQTs0QkFDQVEsUUFBUVAsYUFBYU8sTUFBTTs0QkFDM0JOLFdBQUFBOzRCQUNBQyxLQUFBQTs0QkFDQU0sb0JBQW9CVDs0QkFDcEJVLFlBQVlMOzRCQUNaTSxhQUFhYjs0QkFDYk0sU0FBQUE7d0JBQ0Y7OztvQkFYQTtvQkFhQTs7d0JBQU9DOzs7O0lBQ1Q7b0JBekJhUiJ9