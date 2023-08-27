"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "beforeChange", {
    enumerable: true,
    get: function() {
        return beforeChange;
    }
});
var _traverseFields = require("./traverseFields");
var _errors = require("../../../errors");
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
var beforeChange = function() {
    var _ref = _async_to_generator(function(param) {
        var incomingData, doc, docWithLocales, entityConfig, id, operation, req, skipValidation, context, data, mergeLocaleActions, errors;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    incomingData = param.data, doc = param.doc, docWithLocales = param.docWithLocales, entityConfig = param.entityConfig, id = param.id, operation = param.operation, req = param.req, skipValidation = param.skipValidation, context = param.context;
                    data = (0, _deepCopyObject.default)(incomingData);
                    mergeLocaleActions = [];
                    errors = [];
                    return [
                        4,
                        (0, _traverseFields.traverseFields)({
                            data: data,
                            doc: doc,
                            docWithLocales: docWithLocales,
                            errors: errors,
                            id: id,
                            operation: operation,
                            path: "",
                            mergeLocaleActions: mergeLocaleActions,
                            req: req,
                            siblingData: data,
                            siblingDoc: doc,
                            siblingDocWithLocales: docWithLocales,
                            fields: entityConfig.fields,
                            skipValidation: skipValidation,
                            context: context
                        })
                    ];
                case 1:
                    _state.sent();
                    if (errors.length > 0) {
                        throw new _errors.ValidationError(errors, req.t);
                    }
                    mergeLocaleActions.forEach(function(action) {
                        return action();
                    });
                    return [
                        2,
                        data
                    ];
            }
        });
    });
    return function beforeChange(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlQ2hhbmdlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyB0cmF2ZXJzZUZpZWxkcyB9IGZyb20gJy4vdHJhdmVyc2VGaWVsZHMnO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCBkZWVwQ29weU9iamVjdCBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvZGVlcENvcHlPYmplY3QnO1xuXG50eXBlIEFyZ3M8VD4gPSB7XG4gIGRhdGE6IFQgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBkb2M6IFQgfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBkb2NXaXRoTG9jYWxlczogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZW50aXR5Q29uZmlnOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIHwgU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gIGlkPzogc3RyaW5nIHwgbnVtYmVyXG4gIG9wZXJhdGlvbjogT3BlcmF0aW9uXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgc2tpcFZhbGlkYXRpb24/OiBib29sZWFuXG4gIGNvbnRleHQ6IFJlcXVlc3RDb250ZXh0XG59XG5cbmV4cG9ydCBjb25zdCBiZWZvcmVDaGFuZ2UgPSBhc3luYyA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+Pih7XG4gIGRhdGE6IGluY29taW5nRGF0YSxcbiAgZG9jLFxuICBkb2NXaXRoTG9jYWxlcyxcbiAgZW50aXR5Q29uZmlnLFxuICBpZCxcbiAgb3BlcmF0aW9uLFxuICByZXEsXG4gIHNraXBWYWxpZGF0aW9uLFxuICBjb250ZXh0LFxufTogQXJnczxUPik6IFByb21pc2U8VD4gPT4ge1xuICBjb25zdCBkYXRhID0gZGVlcENvcHlPYmplY3QoaW5jb21pbmdEYXRhKTtcbiAgY29uc3QgbWVyZ2VMb2NhbGVBY3Rpb25zID0gW107XG4gIGNvbnN0IGVycm9yczogeyBtZXNzYWdlOiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcgfVtdID0gW107XG5cbiAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgIGRhdGEsXG4gICAgZG9jLFxuICAgIGRvY1dpdGhMb2NhbGVzLFxuICAgIGVycm9ycyxcbiAgICBpZCxcbiAgICBvcGVyYXRpb24sXG4gICAgcGF0aDogJycsXG4gICAgbWVyZ2VMb2NhbGVBY3Rpb25zLFxuICAgIHJlcSxcbiAgICBzaWJsaW5nRGF0YTogZGF0YSxcbiAgICBzaWJsaW5nRG9jOiBkb2MsXG4gICAgc2libGluZ0RvY1dpdGhMb2NhbGVzOiBkb2NXaXRoTG9jYWxlcyxcbiAgICBmaWVsZHM6IGVudGl0eUNvbmZpZy5maWVsZHMsXG4gICAgc2tpcFZhbGlkYXRpb24sXG4gICAgY29udGV4dCxcbiAgfSk7XG5cbiAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihlcnJvcnMsIHJlcS50KTtcbiAgfVxuXG4gIG1lcmdlTG9jYWxlQWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IGFjdGlvbigpKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iXSwibmFtZXMiOlsiYmVmb3JlQ2hhbmdlIiwiaW5jb21pbmdEYXRhIiwiZG9jIiwiZG9jV2l0aExvY2FsZXMiLCJlbnRpdHlDb25maWciLCJpZCIsIm9wZXJhdGlvbiIsInJlcSIsInNraXBWYWxpZGF0aW9uIiwiY29udGV4dCIsImRhdGEiLCJtZXJnZUxvY2FsZUFjdGlvbnMiLCJlcnJvcnMiLCJkZWVwQ29weU9iamVjdCIsInRyYXZlcnNlRmllbGRzIiwicGF0aCIsInNpYmxpbmdEYXRhIiwic2libGluZ0RvYyIsInNpYmxpbmdEb2NXaXRoTG9jYWxlcyIsImZpZWxkcyIsImxlbmd0aCIsIlZhbGlkYXRpb25FcnJvciIsInQiLCJmb3JFYWNoIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9CYUE7OztlQUFBQTs7OzhCQWhCa0I7c0JBQ0M7cUVBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjcEIsSUFBTUE7ZUFBZSxvQkFBQTtZQUNwQkMsY0FDTkMsS0FDQUMsZ0JBQ0FDLGNBQ0FDLElBQ0FDLFdBQ0FDLEtBQ0FDLGdCQUNBQyxTQUVNQyxNQUNBQyxvQkFDQUM7Ozs7b0JBWkFYLHFCQUFOUyxNQUNBUixZQUFBQSxLQUNBQyx1QkFBQUEsZ0JBQ0FDLHFCQUFBQSxjQUNBQyxXQUFBQSxJQUNBQyxrQkFBQUEsV0FDQUMsWUFBQUEsS0FDQUMsdUJBQUFBLGdCQUNBQyxnQkFBQUE7b0JBRU1DLE9BQU9HLElBQUFBLHVCQUFjLEVBQUNaO29CQUN0QlU7b0JBQ0FDO29CQUVOOzt3QkFBTUUsSUFBQUEsOEJBQWMsRUFBQzs0QkFDbkJKLE1BQUFBOzRCQUNBUixLQUFBQTs0QkFDQUMsZ0JBQUFBOzRCQUNBUyxRQUFBQTs0QkFDQVAsSUFBQUE7NEJBQ0FDLFdBQUFBOzRCQUNBUyxNQUFNOzRCQUNOSixvQkFBQUE7NEJBQ0FKLEtBQUFBOzRCQUNBUyxhQUFhTjs0QkFDYk8sWUFBWWY7NEJBQ1pnQix1QkFBdUJmOzRCQUN2QmdCLFFBQVFmLGFBQWFlLE1BQU07NEJBQzNCWCxnQkFBQUE7NEJBQ0FDLFNBQUFBO3dCQUNGOzs7b0JBaEJBO29CQWtCQSxJQUFJRyxPQUFPUSxNQUFNLEdBQUcsR0FBRzt3QkFDckIsTUFBTSxJQUFJQyx1QkFBZSxDQUFDVCxRQUFRTCxJQUFJZSxDQUFDO29CQUN6QztvQkFFQVgsbUJBQW1CWSxPQUFPLENBQUMsU0FBQ0M7K0JBQVdBOztvQkFFdkM7O3dCQUFPZDs7OztJQUNUO29CQXhDYVYifQ==