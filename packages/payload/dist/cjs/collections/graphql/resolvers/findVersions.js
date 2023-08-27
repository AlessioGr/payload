/* eslint-disable no-param-reassign */ "use strict";
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
function findVersionsResolver(collection) {
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
        return _resolver.apply(this, arguments);
    }
    return resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9maW5kVmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZpbmRWZXJzaW9ucyBmcm9tICcuLi8uLi9vcGVyYXRpb25zL2ZpbmRWZXJzaW9ucyc7XG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyID0gKFxuICBfOiB1bmtub3duLFxuICBhcmdzOiB7XG4gICAgbG9jYWxlPzogc3RyaW5nXG4gICAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgICB3aGVyZTogV2hlcmVcbiAgICBsaW1pdD86IG51bWJlclxuICAgIHBhZ2U/OiBudW1iZXJcbiAgICBzb3J0Pzogc3RyaW5nXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2VcbiAgfVxuKSA9PiBQcm9taXNlPFBhZ2luYXRlZERvY3M8YW55Pj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZFZlcnNpb25zUmVzb2x2ZXIoY29sbGVjdGlvbjogQ29sbGVjdGlvbik6IFJlc29sdmVyIHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGlmIChhcmdzLmxvY2FsZSkgY29udGV4dC5yZXEubG9jYWxlID0gYXJncy5sb2NhbGU7XG4gICAgaWYgKGFyZ3MuZmFsbGJhY2tMb2NhbGUpIGNvbnRleHQucmVxLmZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgd2hlcmU6IGFyZ3Mud2hlcmUsXG4gICAgICBsaW1pdDogYXJncy5saW1pdCxcbiAgICAgIHBhZ2U6IGFyZ3MucGFnZSxcbiAgICAgIHNvcnQ6IGFyZ3Muc29ydCxcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICBkZXB0aDogMCxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmluZFZlcnNpb25zKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlcjtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kVmVyc2lvbnNSZXNvbHZlciIsImNvbGxlY3Rpb24iLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsIm9wdGlvbnMiLCJyZXN1bHQiLCJsb2NhbGUiLCJyZXEiLCJmYWxsYmFja0xvY2FsZSIsIndoZXJlIiwibGltaXQiLCJwYWdlIiwic29ydCIsImRlcHRoIiwiZmluZFZlcnNpb25zIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBeUJwQzs7O2VBQXdCQTs7O21FQWxCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCVixTQUFTQSxxQkFBcUJDLFVBQXNCO2FBQ2xEQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztlQUF6Qkg7O2FBQUFBO1FBQUFBLFlBQWYsb0JBQUEsU0FBd0JDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2dCQUloQ0MsU0FVQUM7Ozs7d0JBYk4sSUFBSUgsS0FBS0ksTUFBTSxFQUFFSCxRQUFRSSxHQUFHLENBQUNELE1BQU0sR0FBR0osS0FBS0ksTUFBTTt3QkFDakQsSUFBSUosS0FBS00sY0FBYyxFQUFFTCxRQUFRSSxHQUFHLENBQUNDLGNBQWMsR0FBR04sS0FBS00sY0FBYzt3QkFFbkVKLFVBQVU7NEJBQ2RMLFlBQUFBOzRCQUNBVSxPQUFPUCxLQUFLTyxLQUFLOzRCQUNqQkMsT0FBT1IsS0FBS1EsS0FBSzs0QkFDakJDLE1BQU1ULEtBQUtTLElBQUk7NEJBQ2ZDLE1BQU1WLEtBQUtVLElBQUk7NEJBQ2ZMLEtBQUtKLFFBQVFJLEdBQUc7NEJBQ2hCTSxPQUFPO3dCQUNUO3dCQUVlOzs0QkFBTUMsSUFBQUEscUJBQVksRUFBQ1Y7Ozt3QkFBNUJDLFNBQVM7d0JBRWY7OzRCQUFPQTs7OztRQUNUO2VBakJlTDs7SUFtQmYsT0FBT0E7QUFDVCJ9