"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "traverseFields", {
    enumerable: true,
    get: function() {
        return traverseFields;
    }
});
var _promise = require("./promise");
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
var traverseFields = function() {
    var _ref = _async_to_generator(function(param) {
        var data, doc, fields, id, operation, overrideAccess, req, siblingData, siblingDoc, context, promises;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = param.data, doc = param.doc, fields = param.fields, id = param.id, operation = param.operation, overrideAccess = param.overrideAccess, req = param.req, siblingData = param.siblingData, siblingDoc = param.siblingDoc, context = param.context;
                    promises = [];
                    fields.forEach(function(field) {
                        promises.push((0, _promise.promise)({
                            data: data,
                            doc: doc,
                            field: field,
                            id: id,
                            operation: operation,
                            overrideAccess: overrideAccess,
                            req: req,
                            siblingData: siblingData,
                            siblingDoc: siblingDoc,
                            context: context
                        }));
                    });
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function traverseFields(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlVmFsaWRhdGUvdHJhdmVyc2VGaWVsZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCwgVGFiQXNGaWVsZCB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBwcm9taXNlIH0gZnJvbSAnLi9wcm9taXNlJztcblxudHlwZSBBcmdzPFQ+ID0ge1xuICBkYXRhOiBUXG4gIGRvYzogVFxuICBmaWVsZHM6IChGaWVsZCB8IFRhYkFzRmllbGQpW11cbiAgaWQ/OiBzdHJpbmcgfCBudW1iZXJcbiAgb3BlcmF0aW9uOiAnY3JlYXRlJyB8ICd1cGRhdGUnXG4gIG92ZXJyaWRlQWNjZXNzOiBib29sZWFuXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgc2libGluZ0RhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHNpYmxpbmdEb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGNvbnRleHQ6IFJlcXVlc3RDb250ZXh0XG59XG5cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUZpZWxkcyA9IGFzeW5jIDxUPih7XG4gIGRhdGEsXG4gIGRvYyxcbiAgZmllbGRzLFxuICBpZCxcbiAgb3BlcmF0aW9uLFxuICBvdmVycmlkZUFjY2VzcyxcbiAgcmVxLFxuICBzaWJsaW5nRGF0YSxcbiAgc2libGluZ0RvYyxcbiAgY29udGV4dCxcbn06IEFyZ3M8VD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgcHJvbWlzZXMucHVzaChwcm9taXNlKHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2MsXG4gICAgICBmaWVsZCxcbiAgICAgIGlkLFxuICAgICAgb3BlcmF0aW9uLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICByZXEsXG4gICAgICBzaWJsaW5nRGF0YSxcbiAgICAgIHNpYmxpbmdEb2MsXG4gICAgICBjb250ZXh0LFxuICAgIH0pKTtcbiAgfSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG4iXSwibmFtZXMiOlsidHJhdmVyc2VGaWVsZHMiLCJkYXRhIiwiZG9jIiwiZmllbGRzIiwiaWQiLCJvcGVyYXRpb24iLCJvdmVycmlkZUFjY2VzcyIsInJlcSIsInNpYmxpbmdEYXRhIiwic2libGluZ0RvYyIsImNvbnRleHQiLCJwcm9taXNlcyIsImZvckVhY2giLCJmaWVsZCIsInB1c2giLCJwcm9taXNlIiwiUHJvbWlzZSIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFpQmFBOzs7ZUFBQUE7Ozt1QkFmVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlakIsSUFBTUE7ZUFBaUIsb0JBQUE7WUFDNUJDLE1BQ0FDLEtBQ0FDLFFBQ0FDLElBQ0FDLFdBQ0FDLGdCQUNBQyxLQUNBQyxhQUNBQyxZQUNBQyxTQUVNQzs7OztvQkFYTlYsYUFBQUEsTUFDQUMsWUFBQUEsS0FDQUMsZUFBQUEsUUFDQUMsV0FBQUEsSUFDQUMsa0JBQUFBLFdBQ0FDLHVCQUFBQSxnQkFDQUMsWUFBQUEsS0FDQUMsb0JBQUFBLGFBQ0FDLG1CQUFBQSxZQUNBQyxnQkFBQUE7b0JBRU1DO29CQUNOUixPQUFPUyxPQUFPLENBQUMsU0FBQ0M7d0JBQ2RGLFNBQVNHLElBQUksQ0FBQ0MsSUFBQUEsZ0JBQU8sRUFBQzs0QkFDcEJkLE1BQUFBOzRCQUNBQyxLQUFBQTs0QkFDQVcsT0FBQUE7NEJBQ0FULElBQUFBOzRCQUNBQyxXQUFBQTs0QkFDQUMsZ0JBQUFBOzRCQUNBQyxLQUFBQTs0QkFDQUMsYUFBQUE7NEJBQ0FDLFlBQUFBOzRCQUNBQyxTQUFBQTt3QkFDRjtvQkFDRjtvQkFDQTs7d0JBQU1NLFFBQVFDLEdBQUcsQ0FBQ047OztvQkFBbEI7Ozs7OztJQUNGO29CQTVCYVgifQ==