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
import { promise } from "./promise";
export var traverseFields = function() {
    var _ref = _async_to_generator(function(param) {
        var data, doc, previousDoc, previousSiblingDoc, fields, operation, req, siblingData, siblingDoc, context, promises;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = param.data, doc = param.doc, previousDoc = param.previousDoc, previousSiblingDoc = param.previousSiblingDoc, fields = param.fields, operation = param.operation, req = param.req, siblingData = param.siblingData, siblingDoc = param.siblingDoc, context = param.context;
                    promises = [];
                    fields.forEach(function(field) {
                        promises.push(promise({
                            data: data,
                            doc: doc,
                            previousDoc: previousDoc,
                            previousSiblingDoc: previousSiblingDoc,
                            field: field,
                            operation: operation,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJDaGFuZ2UvdHJhdmVyc2VGaWVsZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQsIFRhYkFzRmllbGQgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgcHJvbWlzZSB9IGZyb20gJy4vcHJvbWlzZSc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCwgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcblxudHlwZSBBcmdzID0ge1xuICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBkb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHByZXZpb3VzRG9jOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBwcmV2aW91c1NpYmxpbmdEb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGZpZWxkczogKEZpZWxkIHwgVGFiQXNGaWVsZClbXVxuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaWJsaW5nRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgc2libGluZ0RvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgY29udGV4dDogUmVxdWVzdENvbnRleHRcbn1cblxuZXhwb3J0IGNvbnN0IHRyYXZlcnNlRmllbGRzID0gYXN5bmMgKHtcbiAgZGF0YSxcbiAgZG9jLFxuICBwcmV2aW91c0RvYyxcbiAgcHJldmlvdXNTaWJsaW5nRG9jLFxuICBmaWVsZHMsXG4gIG9wZXJhdGlvbixcbiAgcmVxLFxuICBzaWJsaW5nRGF0YSxcbiAgc2libGluZ0RvYyxcbiAgY29udGV4dCxcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBwcm9taXNlcy5wdXNoKHByb21pc2Uoe1xuICAgICAgZGF0YSxcbiAgICAgIGRvYyxcbiAgICAgIHByZXZpb3VzRG9jLFxuICAgICAgcHJldmlvdXNTaWJsaW5nRG9jLFxuICAgICAgZmllbGQsXG4gICAgICBvcGVyYXRpb24sXG4gICAgICByZXEsXG4gICAgICBzaWJsaW5nRGF0YSxcbiAgICAgIHNpYmxpbmdEb2MsXG4gICAgICBjb250ZXh0LFxuICAgIH0pKTtcbiAgfSk7XG5cbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbiJdLCJuYW1lcyI6WyJwcm9taXNlIiwidHJhdmVyc2VGaWVsZHMiLCJkYXRhIiwiZG9jIiwicHJldmlvdXNEb2MiLCJwcmV2aW91c1NpYmxpbmdEb2MiLCJmaWVsZHMiLCJvcGVyYXRpb24iLCJyZXEiLCJzaWJsaW5nRGF0YSIsInNpYmxpbmdEb2MiLCJjb250ZXh0IiwicHJvbWlzZXMiLCJmb3JFYWNoIiwiZmllbGQiLCJwdXNoIiwiUHJvbWlzZSIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVNBLE9BQU8sUUFBUSxZQUFZO0FBZ0JwQyxPQUFPLElBQU1DO2VBQWlCLG9CQUFBO1lBQzVCQyxNQUNBQyxLQUNBQyxhQUNBQyxvQkFDQUMsUUFDQUMsV0FDQUMsS0FDQUMsYUFDQUMsWUFDQUMsU0FFTUM7Ozs7b0JBWE5WLGFBQUFBLE1BQ0FDLFlBQUFBLEtBQ0FDLG9CQUFBQSxhQUNBQywyQkFBQUEsb0JBQ0FDLGVBQUFBLFFBQ0FDLGtCQUFBQSxXQUNBQyxZQUFBQSxLQUNBQyxvQkFBQUEsYUFDQUMsbUJBQUFBLFlBQ0FDLGdCQUFBQTtvQkFFTUM7b0JBRU5OLE9BQU9PLE9BQU8sQ0FBQyxTQUFDQzt3QkFDZEYsU0FBU0csSUFBSSxDQUFDZixRQUFROzRCQUNwQkUsTUFBQUE7NEJBQ0FDLEtBQUFBOzRCQUNBQyxhQUFBQTs0QkFDQUMsb0JBQUFBOzRCQUNBUyxPQUFBQTs0QkFDQVAsV0FBQUE7NEJBQ0FDLEtBQUFBOzRCQUNBQyxhQUFBQTs0QkFDQUMsWUFBQUE7NEJBQ0FDLFNBQUFBO3dCQUNGO29CQUNGO29CQUVBOzt3QkFBTUssUUFBUUMsR0FBRyxDQUFDTDs7O29CQUFsQjs7Ozs7O0lBQ0Y7b0JBOUJhWDs7O0lBOEJYIn0=