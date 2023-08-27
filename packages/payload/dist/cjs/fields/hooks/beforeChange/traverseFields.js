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
        var data, doc, docWithLocales, errors, fields, id, mergeLocaleActions, operation, path, req, siblingData, siblingDoc, siblingDocWithLocales, skipValidation, context, promises;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = param.data, doc = param.doc, docWithLocales = param.docWithLocales, errors = param.errors, fields = param.fields, id = param.id, mergeLocaleActions = param.mergeLocaleActions, operation = param.operation, path = param.path, req = param.req, siblingData = param.siblingData, siblingDoc = param.siblingDoc, siblingDocWithLocales = param.siblingDocWithLocales, skipValidation = param.skipValidation, context = param.context;
                    promises = [];
                    fields.forEach(function(field) {
                        promises.push((0, _promise.promise)({
                            data: data,
                            doc: doc,
                            docWithLocales: docWithLocales,
                            errors: errors,
                            field: field,
                            id: id,
                            mergeLocaleActions: mergeLocaleActions,
                            operation: operation,
                            path: path,
                            req: req,
                            siblingData: siblingData,
                            siblingDoc: siblingDoc,
                            siblingDocWithLocales: siblingDocWithLocales,
                            skipValidation: skipValidation,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlQ2hhbmdlL3RyYXZlcnNlRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBUYWJBc0ZpZWxkIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHByb21pc2UgfSBmcm9tICcuL3Byb21pc2UnO1xuaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZG9jOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBkb2NXaXRoTG9jYWxlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZXJyb3JzOiB7IG1lc3NhZ2U6IHN0cmluZywgZmllbGQ6IHN0cmluZyB9W11cbiAgZmllbGRzOiAoRmllbGQgfCBUYWJBc0ZpZWxkKVtdXG4gIGlkPzogc3RyaW5nIHwgbnVtYmVyXG4gIG1lcmdlTG9jYWxlQWN0aW9uczogKCgpID0+IHZvaWQpW11cbiAgb3BlcmF0aW9uOiBPcGVyYXRpb25cbiAgcGF0aDogc3RyaW5nXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgc2libGluZ0RhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHNpYmxpbmdEb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHNpYmxpbmdEb2NXaXRoTG9jYWxlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgc2tpcFZhbGlkYXRpb24/OiBib29sZWFuXG4gIGNvbnRleHQ6IFJlcXVlc3RDb250ZXh0XG59XG5cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUZpZWxkcyA9IGFzeW5jICh7XG4gIGRhdGEsXG4gIGRvYyxcbiAgZG9jV2l0aExvY2FsZXMsXG4gIGVycm9ycyxcbiAgZmllbGRzLFxuICBpZCxcbiAgbWVyZ2VMb2NhbGVBY3Rpb25zLFxuICBvcGVyYXRpb24sXG4gIHBhdGgsXG4gIHJlcSxcbiAgc2libGluZ0RhdGEsXG4gIHNpYmxpbmdEb2MsXG4gIHNpYmxpbmdEb2NXaXRoTG9jYWxlcyxcbiAgc2tpcFZhbGlkYXRpb24sXG4gIGNvbnRleHQsXG59OiBBcmdzKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IHByb21pc2VzID0gW107XG5cbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgcHJvbWlzZXMucHVzaChwcm9taXNlKHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2MsXG4gICAgICBkb2NXaXRoTG9jYWxlcyxcbiAgICAgIGVycm9ycyxcbiAgICAgIGZpZWxkLFxuICAgICAgaWQsXG4gICAgICBtZXJnZUxvY2FsZUFjdGlvbnMsXG4gICAgICBvcGVyYXRpb24sXG4gICAgICBwYXRoLFxuICAgICAgcmVxLFxuICAgICAgc2libGluZ0RhdGEsXG4gICAgICBzaWJsaW5nRG9jLFxuICAgICAgc2libGluZ0RvY1dpdGhMb2NhbGVzLFxuICAgICAgc2tpcFZhbGlkYXRpb24sXG4gICAgICBjb250ZXh0LFxuICAgIH0pKTtcbiAgfSk7XG5cbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbiJdLCJuYW1lcyI6WyJ0cmF2ZXJzZUZpZWxkcyIsImRhdGEiLCJkb2MiLCJkb2NXaXRoTG9jYWxlcyIsImVycm9ycyIsImZpZWxkcyIsImlkIiwibWVyZ2VMb2NhbGVBY3Rpb25zIiwib3BlcmF0aW9uIiwicGF0aCIsInJlcSIsInNpYmxpbmdEYXRhIiwic2libGluZ0RvYyIsInNpYmxpbmdEb2NXaXRoTG9jYWxlcyIsInNraXBWYWxpZGF0aW9uIiwiY29udGV4dCIsInByb21pc2VzIiwiZm9yRWFjaCIsImZpZWxkIiwicHVzaCIsInByb21pc2UiLCJQcm9taXNlIiwiYWxsIl0sIm1hcHBpbmdzIjoiOzs7OytCQXVCYUE7OztlQUFBQTs7O3VCQXRCVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQmpCLElBQU1BO2VBQWlCLG9CQUFBO1lBQzVCQyxNQUNBQyxLQUNBQyxnQkFDQUMsUUFDQUMsUUFDQUMsSUFDQUMsb0JBQ0FDLFdBQ0FDLE1BQ0FDLEtBQ0FDLGFBQ0FDLFlBQ0FDLHVCQUNBQyxnQkFDQUMsU0FFTUM7Ozs7b0JBaEJOZixhQUFBQSxNQUNBQyxZQUFBQSxLQUNBQyx1QkFBQUEsZ0JBQ0FDLGVBQUFBLFFBQ0FDLGVBQUFBLFFBQ0FDLFdBQUFBLElBQ0FDLDJCQUFBQSxvQkFDQUMsa0JBQUFBLFdBQ0FDLGFBQUFBLE1BQ0FDLFlBQUFBLEtBQ0FDLG9CQUFBQSxhQUNBQyxtQkFBQUEsWUFDQUMsOEJBQUFBLHVCQUNBQyx1QkFBQUEsZ0JBQ0FDLGdCQUFBQTtvQkFFTUM7b0JBRU5YLE9BQU9ZLE9BQU8sQ0FBQyxTQUFDQzt3QkFDZEYsU0FBU0csSUFBSSxDQUFDQyxJQUFBQSxnQkFBTyxFQUFDOzRCQUNwQm5CLE1BQUFBOzRCQUNBQyxLQUFBQTs0QkFDQUMsZ0JBQUFBOzRCQUNBQyxRQUFBQTs0QkFDQWMsT0FBQUE7NEJBQ0FaLElBQUFBOzRCQUNBQyxvQkFBQUE7NEJBQ0FDLFdBQUFBOzRCQUNBQyxNQUFBQTs0QkFDQUMsS0FBQUE7NEJBQ0FDLGFBQUFBOzRCQUNBQyxZQUFBQTs0QkFDQUMsdUJBQUFBOzRCQUNBQyxnQkFBQUE7NEJBQ0FDLFNBQUFBO3dCQUNGO29CQUNGO29CQUVBOzt3QkFBTU0sUUFBUUMsR0FBRyxDQUFDTjs7O29CQUFsQjs7Ozs7O0lBQ0Y7b0JBeENhaEIifQ==