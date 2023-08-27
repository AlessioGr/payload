"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
var _errors = require("../../errors");
var _afterChange = require("../../fields/hooks/afterChange");
var _afterRead = require("../../fields/hooks/afterRead");
var _initTransaction = require("../../utilities/initTransaction");
var _killTransaction = require("../../utilities/killTransaction");
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
function restoreVersion(args) {
    return _restoreVersion.apply(this, arguments);
}
function _restoreVersion() {
    _restoreVersion = _async_to_generator(function(args) {
        var id, depth, globalConfig, req, _args_req, t, payload, overrideAccess, showHiddenFields, shouldCommit, _ref, versionDocs, rawVersion, previousDoc, global, result, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    id = args.id, depth = args.depth, globalConfig = args.globalConfig, req = args.req, _args_req = args.req, t = _args_req.t, payload = _args_req.payload, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        18,
                        ,
                        20
                    ]);
                    return [
                        4,
                        (0, _initTransaction.initTransaction)(req)
                    ];
                case 2:
                    shouldCommit = _state.sent();
                    if (!!overrideAccess) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        (0, _executeAccess.default)({
                            req: req
                        }, globalConfig.access.update)
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    return [
                        4,
                        payload.db.findGlobalVersions({
                            global: globalConfig.slug,
                            where: {
                                id: {
                                    equals: id
                                }
                            },
                            limit: 1,
                            req: req
                        })
                    ];
                case 5:
                    _ref = _state.sent(), versionDocs = _ref.docs;
                    if (!versionDocs || versionDocs.length === 0) {
                        throw new _errors.NotFound(t);
                    }
                    rawVersion = versionDocs[0];
                    return [
                        4,
                        payload.findGlobal({
                            slug: globalConfig.slug,
                            depth: depth,
                            req: req
                        })
                    ];
                case 6:
                    previousDoc = _state.sent();
                    return [
                        4,
                        payload.db.findGlobal({
                            slug: globalConfig.slug
                        })
                    ];
                case 7:
                    global = _state.sent();
                    result = rawVersion.version;
                    if (!global) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        payload.db.updateGlobal({
                            slug: globalConfig.slug,
                            data: result
                        })
                    ];
                case 8:
                    result = _state.sent();
                    return [
                        3,
                        11
                    ];
                case 9:
                    return [
                        4,
                        payload.db.createGlobal({
                            slug: globalConfig.slug,
                            data: result
                        })
                    ];
                case 10:
                    result = _state.sent();
                    _state.label = 11;
                case 11:
                    return [
                        4,
                        (0, _afterRead.afterRead)({
                            depth: depth,
                            doc: result,
                            entityConfig: globalConfig,
                            req: req,
                            overrideAccess: overrideAccess,
                            showHiddenFields: showHiddenFields,
                            context: req.context
                        })
                    ];
                case 12:
                    // /////////////////////////////////////
                    // afterRead - Fields
                    // /////////////////////////////////////
                    result = _state.sent();
                    // /////////////////////////////////////
                    // afterRead - Global
                    // /////////////////////////////////////
                    return [
                        4,
                        globalConfig.hooks.afterRead.reduce(function() {
                            var _ref = _async_to_generator(function(priorHook, hook) {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                priorHook
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                4,
                                                hook({
                                                    doc: result,
                                                    req: req
                                                })
                                            ];
                                        case 2:
                                            result = _state.sent() || result;
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(priorHook, hook) {
                                return _ref.apply(this, arguments);
                            };
                        }(), Promise.resolve())
                    ];
                case 13:
                    _state.sent();
                    return [
                        4,
                        (0, _afterChange.afterChange)({
                            data: result,
                            doc: result,
                            previousDoc: previousDoc,
                            entityConfig: globalConfig,
                            operation: "update",
                            req: req,
                            context: req.context
                        })
                    ];
                case 14:
                    // /////////////////////////////////////
                    // afterChange - Fields
                    // /////////////////////////////////////
                    result = _state.sent();
                    // /////////////////////////////////////
                    // afterChange - Global
                    // /////////////////////////////////////
                    return [
                        4,
                        globalConfig.hooks.afterChange.reduce(function() {
                            var _ref = _async_to_generator(function(priorHook, hook) {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                priorHook
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                4,
                                                hook({
                                                    doc: result,
                                                    previousDoc: previousDoc,
                                                    req: req
                                                })
                                            ];
                                        case 2:
                                            result = _state.sent() || result;
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(priorHook, hook) {
                                return _ref.apply(this, arguments);
                            };
                        }(), Promise.resolve())
                    ];
                case 15:
                    _state.sent();
                    if (!shouldCommit) return [
                        3,
                        17
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 16:
                    _state.sent();
                    _state.label = 17;
                case 17:
                    return [
                        2,
                        result
                    ];
                case 18:
                    error = _state.sent();
                    return [
                        4,
                        (0, _killTransaction.killTransaction)(req)
                    ];
                case 19:
                    _state.sent();
                    throw error;
                case 20:
                    return [
                        2
                    ];
            }
        });
    });
    return _restoreVersion.apply(this, arguments);
}
var _default = restoreVersion;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvcmVzdG9yZVZlcnNpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2Vzcyc7XG5pbXBvcnQgeyBUeXBlV2l0aFZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgTm90Rm91bmQgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgYWZ0ZXJDaGFuZ2UgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJDaGFuZ2UnO1xuaW1wb3J0IHsgYWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyUmVhZCc7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gIGlkOiBzdHJpbmcgfCBudW1iZXJcbiAgZGVwdGg/OiBudW1iZXJcbiAgcmVxPzogUGF5bG9hZFJlcXVlc3RcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVWZXJzaW9uPFQgZXh0ZW5kcyBUeXBlV2l0aFZlcnNpb248VD4gPSBhbnk+KGFyZ3M6IEFyZ3VtZW50cyk6IFByb21pc2U8VD4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZGVwdGgsXG4gICAgZ2xvYmFsQ29uZmlnLFxuICAgIHJlcSxcbiAgICByZXE6IHtcbiAgICAgIHQsXG4gICAgICBwYXlsb2FkLFxuICAgIH0sXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgfSA9IGFyZ3M7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoIW92ZXJyaWRlQWNjZXNzKSB7XG4gICAgICBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxIH0sIGdsb2JhbENvbmZpZy5hY2Nlc3MudXBkYXRlKTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0cmlldmUgb3JpZ2luYWwgcmF3IHZlcnNpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCB7IGRvY3M6IHZlcnNpb25Eb2NzIH0gPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRHbG9iYWxWZXJzaW9uczxhbnk+KHtcbiAgICAgIGdsb2JhbDogZ2xvYmFsQ29uZmlnLnNsdWcsXG4gICAgICB3aGVyZTogeyBpZDogeyBlcXVhbHM6IGlkIH0gfSxcbiAgICAgIGxpbWl0OiAxLFxuICAgICAgcmVxLFxuICAgIH0pO1xuXG5cbiAgICBpZiAoIXZlcnNpb25Eb2NzIHx8IHZlcnNpb25Eb2NzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IE5vdEZvdW5kKHQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhd1ZlcnNpb24gPSB2ZXJzaW9uRG9jc1swXTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBmZXRjaCBwcmV2aW91c0RvY1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHByZXZpb3VzRG9jID0gYXdhaXQgcGF5bG9hZC5maW5kR2xvYmFsKHtcbiAgICAgIHNsdWc6IGdsb2JhbENvbmZpZy5zbHVnLFxuICAgICAgZGVwdGgsXG4gICAgICByZXEsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVXBkYXRlIGdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGdsb2JhbCA9IGF3YWl0IHBheWxvYWQuZGIuZmluZEdsb2JhbCh7XG4gICAgICBzbHVnOiBnbG9iYWxDb25maWcuc2x1ZyxcbiAgICB9KTtcblxuICAgIGxldCByZXN1bHQgPSByYXdWZXJzaW9uLnZlcnNpb247XG5cbiAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBwYXlsb2FkLmRiLnVwZGF0ZUdsb2JhbCh7XG4gICAgICAgIHNsdWc6IGdsb2JhbENvbmZpZy5zbHVnLFxuICAgICAgICBkYXRhOiByZXN1bHQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgcGF5bG9hZC5kYi5jcmVhdGVHbG9iYWwoe1xuICAgICAgICBzbHVnOiBnbG9iYWxDb25maWcuc2x1ZyxcbiAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgZW50aXR5Q29uZmlnOiBnbG9iYWxDb25maWcsXG4gICAgICByZXEsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBHbG9iYWxcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBnbG9iYWxDb25maWcuaG9va3MuYWZ0ZXJSZWFkLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIHJlc3VsdCA9IGF3YWl0IGhvb2soe1xuICAgICAgICBkb2M6IHJlc3VsdCxcbiAgICAgICAgcmVxLFxuICAgICAgfSkgfHwgcmVzdWx0O1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlckNoYW5nZSAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyQ2hhbmdlKHtcbiAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgcHJldmlvdXNEb2MsXG4gICAgICBlbnRpdHlDb25maWc6IGdsb2JhbENvbmZpZyxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICByZXEsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlckNoYW5nZSAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5hZnRlckNoYW5nZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXN1bHQgPSBhd2FpdCBob29rKHtcbiAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgIHByZXZpb3VzRG9jLFxuICAgICAgICByZXEsXG4gICAgICB9KSB8fCByZXN1bHQ7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgcGF5bG9hZC5kYi5jb21taXRUcmFuc2FjdGlvbihyZXEudHJhbnNhY3Rpb25JRCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3RvcmVWZXJzaW9uO1xuIl0sIm5hbWVzIjpbInJlc3RvcmVWZXJzaW9uIiwiYXJncyIsImlkIiwiZGVwdGgiLCJnbG9iYWxDb25maWciLCJyZXEiLCJ0IiwicGF5bG9hZCIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsInNob3VsZENvbW1pdCIsInZlcnNpb25Eb2NzIiwicmF3VmVyc2lvbiIsInByZXZpb3VzRG9jIiwiZ2xvYmFsIiwicmVzdWx0IiwiZXJyb3IiLCJpbml0VHJhbnNhY3Rpb24iLCJleGVjdXRlQWNjZXNzIiwiYWNjZXNzIiwidXBkYXRlIiwiZGIiLCJmaW5kR2xvYmFsVmVyc2lvbnMiLCJzbHVnIiwid2hlcmUiLCJlcXVhbHMiLCJsaW1pdCIsImRvY3MiLCJsZW5ndGgiLCJOb3RGb3VuZCIsImZpbmRHbG9iYWwiLCJ2ZXJzaW9uIiwidXBkYXRlR2xvYmFsIiwiZGF0YSIsImNyZWF0ZUdsb2JhbCIsImFmdGVyUmVhZCIsImRvYyIsImVudGl0eUNvbmZpZyIsImNvbnRleHQiLCJob29rcyIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJQcm9taXNlIiwicmVzb2x2ZSIsImFmdGVyQ2hhbmdlIiwib3BlcmF0aW9uIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbklEIiwia2lsbFRyYW5zYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQThKQTs7O2VBQUE7OztvRUE3SjBCO3NCQUdEOzJCQUNHO3lCQUNGOytCQUNNOytCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBV2pCQSxlQUFtREMsSUFBZTtXQUFsRUQ7O1NBQUFBO0lBQUFBLGtCQUFmLG9CQUFBLFNBQWtFQyxJQUFlO1lBRTdFQyxJQUNBQyxPQUNBQyxjQUNBQyxnQkFFRUMsR0FDQUMsU0FFRkMsZ0JBQ0FDLGtCQUlNQyxjQWN3QixNQUFoQkMsYUFZUkMsWUFNQUMsYUFVQUMsUUFJRkMsUUF3RUdDOzs7O29CQW5JUGQsS0FVRUQsS0FWRkMsSUFDQUMsUUFTRUYsS0FURkUsT0FDQUMsZUFRRUgsS0FSRkcsY0FDQUMsTUFPRUosS0FQRkksaUJBT0VKLEtBTkZJLEtBQ0VDLGNBQUFBLEdBQ0FDLG9CQUFBQSxTQUVGQyxpQkFFRVAsS0FGRk8sZ0JBQ0FDLG1CQUNFUixLQURGUTs7Ozs7Ozs7O29CQUlxQjs7d0JBQU1RLElBQUFBLGdDQUFlLEVBQUNaOzs7b0JBQXJDSyxlQUFlO3lCQU1qQixDQUFDRixnQkFBRDs7OztvQkFDRjs7d0JBQU1VLElBQUFBLHNCQUFhLEVBQUM7NEJBQUViLEtBQUFBO3dCQUFJLEdBQUdELGFBQWFl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