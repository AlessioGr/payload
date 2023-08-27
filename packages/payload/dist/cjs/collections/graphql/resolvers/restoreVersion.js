/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return restoreVersionResolver;
    }
});
var _restoreVersion = /*#__PURE__*/ _interop_require_default(require("../../operations/restoreVersion"));
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
function restoreVersionResolver(collection) {
    function resolver(_, args, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, args, context) {
            var options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        options = {
                            collection: collection,
                            id: args.id,
                            req: context.req,
                            depth: 0
                        };
                        return [
                            4,
                            (0, _restoreVersion.default)(options)
                        ];
                    case 1:
                        result = _state.sent();
                        return [
                            2,
                            result
                        ];
                }
            });
        });
        return _resolver.apply(this, arguments);
    }
    return resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9yZXN0b3JlVmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCByZXN0b3JlVmVyc2lvbiBmcm9tICcuLi8uLi9vcGVyYXRpb25zL3Jlc3RvcmVWZXJzaW9uJztcblxuZXhwb3J0IHR5cGUgUmVzb2x2ZXIgPSAoXG4gIF86IHVua25vd24sXG4gIGFyZ3M6IHtcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2VcbiAgfVxuKSA9PiBQcm9taXNlPERvY3VtZW50PlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXN0b3JlVmVyc2lvblJlc29sdmVyKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pOiBSZXNvbHZlciB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGlkOiBhcmdzLmlkLFxuICAgICAgcmVxOiBjb250ZXh0LnJlcSxcbiAgICAgIGRlcHRoOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXN0b3JlVmVyc2lvbihvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVyO1xufVxuIl0sIm5hbWVzIjpbInJlc3RvcmVWZXJzaW9uUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwicmVzdWx0IiwiaWQiLCJyZXEiLCJkZXB0aCIsInJlc3RvcmVWZXJzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBaUJwQzs7O2VBQXdCQTs7O3FFQWJHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYVosU0FBU0EsdUJBQXVCQyxVQUFzQjthQUNwREMsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87ZUFBekJIOzthQUFBQTtRQUFBQSxZQUFmLG9CQUFBLFNBQXdCQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztnQkFDaENDLFNBT0FDOzs7O3dCQVBBRCxVQUFVOzRCQUNkTCxZQUFBQTs0QkFDQU8sSUFBSUosS0FBS0ksRUFBRTs0QkFDWEMsS0FBS0osUUFBUUksR0FBRzs0QkFDaEJDLE9BQU87d0JBQ1Q7d0JBRWU7OzRCQUFNQyxJQUFBQSx1QkFBYyxFQUFDTDs7O3dCQUE5QkMsU0FBUzt3QkFDZjs7NEJBQU9BOzs7O1FBQ1Q7ZUFWZUw7O0lBWWYsT0FBT0E7QUFDVCJ9