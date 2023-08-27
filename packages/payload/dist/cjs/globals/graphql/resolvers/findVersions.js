"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionsResolver;
    }
});
var _findVersions = /*#__PURE__*/ _interop_require_default(require("../../operations/findVersions"));
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
function findVersionsResolver(globalConfig) {
    return function() {
        var _resolver = _async_to_generator(function(_, args, context) {
            var options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        options = {
                            globalConfig: globalConfig,
                            where: args.where,
                            limit: args.limit,
                            page: args.page,
                            sort: args.sort,
                            req: context.req,
                            depth: 0
                        };
                        return [
                            4,
                            (0, _findVersions.default)(options)
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
        function resolver(_, args, context) {
            return _resolver.apply(this, arguments);
        }
        return resolver;
    }();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL2ZpbmRWZXJzaW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgRG9jdW1lbnQsIFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgZmluZFZlcnNpb25zIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvZmluZFZlcnNpb25zJztcblxuZXhwb3J0IHR5cGUgUmVzb2x2ZXIgPSAoXG4gIF86IHVua25vd24sXG4gIGFyZ3M6IHtcbiAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICBmYWxsYmFja0xvY2FsZT86IHN0cmluZ1xuICAgIHdoZXJlOiBXaGVyZVxuICAgIGxpbWl0PzogbnVtYmVyXG4gICAgcGFnZT86IG51bWJlclxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgfSxcbiAgY29udGV4dDoge1xuICAgIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZVxuICB9XG4pID0+IFByb21pc2U8RG9jdW1lbnQ+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRWZXJzaW9uc1Jlc29sdmVyKGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogUmVzb2x2ZXIge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBnbG9iYWxDb25maWcsXG4gICAgICB3aGVyZTogYXJncy53aGVyZSxcbiAgICAgIGxpbWl0OiBhcmdzLmxpbWl0LFxuICAgICAgcGFnZTogYXJncy5wYWdlLFxuICAgICAgc29ydDogYXJncy5zb3J0LFxuICAgICAgcmVxOiBjb250ZXh0LnJlcSxcbiAgICAgIGRlcHRoOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmaW5kVmVyc2lvbnMob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9uc1Jlc29sdmVyIiwiZ2xvYmFsQ29uZmlnIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwicmVzdWx0Iiwid2hlcmUiLCJsaW1pdCIsInBhZ2UiLCJzb3J0IiwicmVxIiwiZGVwdGgiLCJmaW5kVmVyc2lvbnMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBc0JBOzs7ZUFBd0JBOzs7bUVBbEJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JWLFNBQVNBLHFCQUFxQkMsWUFBbUM7SUFDOUU7WUFBc0JDLFlBQWYsb0JBQUEsU0FBd0JDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2dCQUN2Q0MsU0FVQUM7Ozs7d0JBVkFELFVBQVU7NEJBQ2RMLGNBQUFBOzRCQUNBTyxPQUFPSixLQUFLSSxLQUFLOzRCQUNqQkMsT0FBT0wsS0FBS0ssS0FBSzs0QkFDakJDLE1BQU1OLEtBQUtNLElBQUk7NEJBQ2ZDLE1BQU1QLEtBQUtPLElBQUk7NEJBQ2ZDLEtBQUtQLFFBQVFPLEdBQUc7NEJBQ2hCQyxPQUFPO3dCQUNUO3dCQUVlOzs0QkFBTUMsSUFBQUEscUJBQVksRUFBQ1I7Ozt3QkFBNUJDLFNBQVM7d0JBRWY7OzRCQUFPQTs7OztRQUNUO2lCQWRzQkwsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87bUJBQXpCSDs7ZUFBQUE7O0FBZXhCIn0=