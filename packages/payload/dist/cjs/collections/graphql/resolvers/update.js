/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateResolver;
    }
});
var _updateByID = /*#__PURE__*/ _interop_require_default(require("../../operations/updateByID"));
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
function updateResolver(collection) {
    function resolver(_, args, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, args, context) {
            var options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (args.locale) context.req.locale = args.locale;
                        if (args.fallbackLocale) context.req.fallbackLocale = args.fallbackLocale;
                        options = {
                            collection: collection,
                            data: args.data,
                            id: args.id,
                            depth: 0,
                            req: context.req,
                            draft: args.draft,
                            autosave: args.autosave
                        };
                        return [
                            4,
                            (0, _updateByID.default)(options)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy91cGRhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB1cGRhdGVCeUlEIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvdXBkYXRlQnlJRCc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBSZXNvbHZlcjxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IChfOiB1bmtub3duLCBhcmdzOiB7XG4gIGlkOiBzdHJpbmcgfCBudW1iZXJcbiAgZGF0YTogR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddXG4gIGxvY2FsZT86IHN0cmluZ1xuICBkcmFmdDogYm9vbGVhblxuICBhdXRvc2F2ZTogYm9vbGVhblxufSxcbiAgY29udGV4dDoge1xuICAgIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZVxuICB9XG4pID0+IFByb21pc2U8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVSZXNvbHZlcjxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvbixcbik6IFJlc29sdmVyPFRTbHVnPiB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBpZiAoYXJncy5sb2NhbGUpIGNvbnRleHQucmVxLmxvY2FsZSA9IGFyZ3MubG9jYWxlO1xuICAgIGlmIChhcmdzLmZhbGxiYWNrTG9jYWxlKSBjb250ZXh0LnJlcS5mYWxsYmFja0xvY2FsZSA9IGFyZ3MuZmFsbGJhY2tMb2NhbGU7XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGRhdGE6IGFyZ3MuZGF0YSxcbiAgICAgIGlkOiBhcmdzLmlkLFxuICAgICAgZGVwdGg6IDAsXG4gICAgICByZXE6IGNvbnRleHQucmVxLFxuICAgICAgZHJhZnQ6IGFyZ3MuZHJhZnQsXG4gICAgICBhdXRvc2F2ZTogYXJncy5hdXRvc2F2ZSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlQnlJRDxUU2x1Zz4ob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVyO1xufVxuIl0sIm5hbWVzIjpbInVwZGF0ZVJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0Iiwib3B0aW9ucyIsInJlc3VsdCIsImxvY2FsZSIsInJlcSIsImZhbGxiYWNrTG9jYWxlIiwiZGF0YSIsImlkIiwiZGVwdGgiLCJkcmFmdCIsImF1dG9zYXZlIiwidXBkYXRlQnlJRCJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQW9CcEM7OztlQUF3QkE7OztpRUFoQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQlIsU0FBU0EsZUFDdEJDLFVBQXNCO2FBRVBDLFNBQVNDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2VBQXpCSDs7YUFBQUE7UUFBQUEsWUFBZixvQkFBQSxTQUF3QkMsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87Z0JBSWhDQyxTQVVBQzs7Ozt3QkFiTixJQUFJSCxLQUFLSSxNQUFNLEVBQUVILFFBQVFJLEdBQUcsQ0FBQ0QsTUFBTSxHQUFHSixLQUFLSSxNQUFNO3dCQUNqRCxJQUFJSixLQUFLTSxjQUFjLEVBQUVMLFFBQVFJLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHTixLQUFLTSxjQUFjO3dCQUVuRUosVUFBVTs0QkFDZEwsWUFBQUE7NEJBQ0FVLE1BQU1QLEtBQUtPLElBQUk7NEJBQ2ZDLElBQUlSLEtBQUtRLEVBQUU7NEJBQ1hDLE9BQU87NEJBQ1BKLEtBQUtKLFFBQVFJLEdBQUc7NEJBQ2hCSyxPQUFPVixLQUFLVSxLQUFLOzRCQUNqQkMsVUFBVVgsS0FBS1csUUFBUTt3QkFDekI7d0JBRWU7OzRCQUFNQyxJQUFBQSxtQkFBVSxFQUFRVjs7O3dCQUFqQ0MsU0FBUzt3QkFFZjs7NEJBQU9BOzs7O1FBQ1Q7ZUFqQmVMOztJQW1CZixPQUFPQTtBQUNUIn0=