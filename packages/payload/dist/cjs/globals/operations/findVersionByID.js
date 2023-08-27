/* eslint-disable no-underscore-dangle */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _errors = require("../../errors");
var _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
var _afterRead = require("../../fields/hooks/afterRead");
var _combineQueries = require("../../database/combineQueries");
var _killTransaction = require("../../utilities/killTransaction");
var _initTransaction = require("../../utilities/initTransaction");
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
function findVersionByID(args) {
    return _findVersionByID.apply(this, arguments);
}
function _findVersionByID() {
    _findVersionByID = _async_to_generator(function(args) {
        var depth, globalConfig, id, req, _args_req, t, payload, locale, disableErrors, currentDepth, overrideAccess, showHiddenFields, _results, shouldCommit, accessResults, _tmp, hasWhereAccess, findGlobalVersionsArgs, _ref, results, result, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    depth = args.depth, globalConfig = args.globalConfig, id = args.id, req = args.req, _args_req = args.req, t = _args_req.t, payload = _args_req.payload, locale = _args_req.locale, disableErrors = args.disableErrors, currentDepth = args.currentDepth, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        12,
                        ,
                        14
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
                            req: req,
                            disableErrors: disableErrors,
                            id: id
                        }, globalConfig.access.readVersions)
                    ];
                case 3:
                    _tmp = _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    _tmp = true;
                    _state.label = 5;
                case 5:
                    accessResults = _tmp;
                    // If errors are disabled, and access returns false, return null
                    if (accessResults === false) return [
                        2,
                        null
                    ];
                    hasWhereAccess = typeof accessResults === "object";
                    findGlobalVersionsArgs = {
                        global: globalConfig.slug,
                        where: (0, _combineQueries.combineQueries)({
                            id: {
                                equals: id
                            }
                        }, accessResults),
                        locale: locale,
                        limit: 1,
                        req: req
                    };
                    // /////////////////////////////////////
                    // Find by ID
                    // /////////////////////////////////////
                    if (!findGlobalVersionsArgs.where.and[0].id) throw new _errors.NotFound(t);
                    return [
                        4,
                        payload.db.findGlobalVersions(findGlobalVersionsArgs)
                    ];
                case 6:
                    _ref = _state.sent(), results = _ref.docs;
                    if (!results || ((_results = results) === null || _results === void 0 ? void 0 : _results.length) === 0) {
                        if (!disableErrors) {
                            if (!hasWhereAccess) throw new _errors.NotFound(t);
                            if (hasWhereAccess) throw new _errors.Forbidden(t);
                        }
                        return [
                            2,
                            null
                        ];
                    }
                    result = JSON.parse(JSON.stringify(results[0]));
                    // /////////////////////////////////////
                    // beforeRead - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        globalConfig.hooks.beforeRead.reduce(function() {
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
                                                    req: req,
                                                    doc: result.version
                                                })
                                            ];
                                        case 2:
                                            result = _state.sent() || result.version;
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
                case 7:
                    _state.sent();
                    return [
                        4,
                        (0, _afterRead.afterRead)({
                            currentDepth: currentDepth,
                            depth: depth,
                            doc: result.version,
                            entityConfig: globalConfig,
                            req: req,
                            overrideAccess: overrideAccess,
                            showHiddenFields: showHiddenFields,
                            context: req.context
                        })
                    ];
                case 8:
                    // /////////////////////////////////////
                    // afterRead - Fields
                    // /////////////////////////////////////
                    result.version = _state.sent();
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
                                                    req: req,
                                                    query: findGlobalVersionsArgs.where,
                                                    doc: result.version
                                                })
                                            ];
                                        case 2:
                                            result.version = _state.sent() || result.version;
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
                case 9:
                    _state.sent();
                    if (!shouldCommit) return [
                        3,
                        11
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 10:
                    _state.sent();
                    _state.label = 11;
                case 11:
                    return [
                        2,
                        result
                    ];
                case 12:
                    error = _state.sent();
                    return [
                        4,
                        (0, _killTransaction.killTransaction)(req)
                    ];
                case 13:
                    _state.sent();
                    throw error;
                case 14:
                    return [
                        2
                    ];
            }
        });
    });
    return _findVersionByID.apply(this, arguments);
}
var _default = findVersionByID;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvZmluZFZlcnNpb25CeUlELnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgRm9yYmlkZGVuLCBOb3RGb3VuZCB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgZXhlY3V0ZUFjY2VzcyBmcm9tICcuLi8uLi9hdXRoL2V4ZWN1dGVBY2Nlc3MnO1xuaW1wb3J0IHsgVHlwZVdpdGhWZXJzaW9uIH0gZnJvbSAnLi4vLi4vdmVyc2lvbnMvdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGFmdGVyUmVhZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQnO1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcyc7XG5pbXBvcnQgeyBGaW5kR2xvYmFsVmVyc2lvbnNBcmdzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBpZDogc3RyaW5nIHwgbnVtYmVyXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgZGlzYWJsZUVycm9ycz86IGJvb2xlYW5cbiAgY3VycmVudERlcHRoPzogbnVtYmVyXG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBzaG93SGlkZGVuRmllbGRzPzogYm9vbGVhblxuICBkZXB0aD86IG51bWJlclxufVxuXG5hc3luYyBmdW5jdGlvbiBmaW5kVmVyc2lvbkJ5SUQ8VCBleHRlbmRzIFR5cGVXaXRoVmVyc2lvbjxUPiA9IGFueT4oYXJnczogQXJndW1lbnRzKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IHtcbiAgICBkZXB0aCxcbiAgICBnbG9iYWxDb25maWcsXG4gICAgaWQsXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgdCxcbiAgICAgIHBheWxvYWQsXG4gICAgICBsb2NhbGUsXG4gICAgfSxcbiAgICBkaXNhYmxlRXJyb3JzLFxuICAgIGN1cnJlbnREZXB0aCxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICB9ID0gYXJncztcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxLCBkaXNhYmxlRXJyb3JzLCBpZCB9LCBnbG9iYWxDb25maWcuYWNjZXNzLnJlYWRWZXJzaW9ucykgOiB0cnVlO1xuXG4gICAgLy8gSWYgZXJyb3JzIGFyZSBkaXNhYmxlZCwgYW5kIGFjY2VzcyByZXR1cm5zIGZhbHNlLCByZXR1cm4gbnVsbFxuICAgIGlmIChhY2Nlc3NSZXN1bHRzID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBoYXNXaGVyZUFjY2VzcyA9IHR5cGVvZiBhY2Nlc3NSZXN1bHRzID09PSAnb2JqZWN0JztcblxuICAgIGNvbnN0IGZpbmRHbG9iYWxWZXJzaW9uc0FyZ3M6IEZpbmRHbG9iYWxWZXJzaW9uc0FyZ3MgPSB7XG4gICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZy5zbHVnLFxuICAgICAgd2hlcmU6IGNvbWJpbmVRdWVyaWVzKHsgaWQ6IHsgZXF1YWxzOiBpZCB9IH0sIGFjY2Vzc1Jlc3VsdHMpLFxuICAgICAgbG9jYWxlLFxuICAgICAgbGltaXQ6IDEsXG4gICAgICByZXEsXG4gICAgfTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBGaW5kIGJ5IElEXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKCFmaW5kR2xvYmFsVmVyc2lvbnNBcmdzLndoZXJlLmFuZFswXS5pZCkgdGhyb3cgbmV3IE5vdEZvdW5kKHQpO1xuXG5cbiAgICBjb25zdCB7IGRvY3M6IHJlc3VsdHMgfSA9IGF3YWl0IHBheWxvYWQuZGIuZmluZEdsb2JhbFZlcnNpb25zKGZpbmRHbG9iYWxWZXJzaW9uc0FyZ3MpO1xuICAgIGlmICghcmVzdWx0cyB8fCByZXN1bHRzPy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICghZGlzYWJsZUVycm9ycykge1xuICAgICAgICBpZiAoIWhhc1doZXJlQWNjZXNzKSB0aHJvdyBuZXcgTm90Rm91bmQodCk7XG4gICAgICAgIGlmIChoYXNXaGVyZUFjY2VzcykgdGhyb3cgbmV3IEZvcmJpZGRlbih0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICAvLyBDbG9uZSB0aGUgcmVzdWx0IC0gaXQgbWF5IGhhdmUgY29tZSBiYWNrIG1lbW9pemVkXG4gICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0c1swXSkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZVJlYWQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgZ2xvYmFsQ29uZmlnLmhvb2tzLmJlZm9yZVJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgZG9jOiByZXN1bHQudmVyc2lvbixcbiAgICAgIH0pIHx8IHJlc3VsdC52ZXJzaW9uO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQudmVyc2lvbiA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBjdXJyZW50RGVwdGgsXG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogcmVzdWx0LnZlcnNpb24sXG4gICAgICBlbnRpdHlDb25maWc6IGdsb2JhbENvbmZpZyxcbiAgICAgIHJlcSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgcmVzdWx0LnZlcnNpb24gPSBhd2FpdCBob29rKHtcbiAgICAgICAgcmVxLFxuICAgICAgICBxdWVyeTogZmluZEdsb2JhbFZlcnNpb25zQXJncy53aGVyZSxcbiAgICAgICAgZG9jOiByZXN1bHQudmVyc2lvbixcbiAgICAgIH0pIHx8IHJlc3VsdC52ZXJzaW9uO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXR1cm4gcmVzdWx0c1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IHBheWxvYWQuZGIuY29tbWl0VHJhbnNhY3Rpb24ocmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kVmVyc2lvbkJ5SUQ7XG4iXSwibmFtZXMiOlsiZmluZFZlcnNpb25CeUlEIiwiYXJncyIsImRlcHRoIiwiZ2xvYmFsQ29uZmlnIiwiaWQiLCJyZXEiLCJ0IiwicGF5bG9hZCIsImxvY2FsZSIsImRpc2FibGVFcnJvcnMiLCJjdXJyZW50RGVwdGgiLCJvdmVycmlkZUFjY2VzcyIsInNob3dIaWRkZW5GaWVsZHMiLCJyZXN1bHRzIiwic2hvdWxkQ29tbWl0IiwiYWNjZXNzUmVzdWx0cyIsImhhc1doZXJlQWNjZXNzIiwiZmluZEdsb2JhbFZlcnNpb25zQXJncyIsInJlc3VsdCIsImVycm9yIiwiaW5pdFRyYW5zYWN0aW9uIiwiZXhlY3V0ZUFjY2VzcyIsImFjY2VzcyIsInJlYWRWZXJzaW9ucyIsImdsb2JhbCIsInNsdWciLCJ3aGVyZSIsImNvbWJpbmVRdWVyaWVzIiwiZXF1YWxzIiwibGltaXQiLCJhbmQiLCJOb3RGb3VuZCIsImRiIiwiZmluZEdsb2JhbFZlcnNpb25zIiwiZG9jcyIsImxlbmd0aCIsIkZvcmJpZGRlbiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImhvb2tzIiwiYmVmb3JlUmVhZCIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJkb2MiLCJ2ZXJzaW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhZnRlclJlYWQiLCJlbnRpdHlDb25maWciLCJjb250ZXh0IiwicXVlcnkiLCJjb21taXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSUQiLCJraWxsVHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7OzsrQkEwSXZDOzs7ZUFBQTs7O3NCQXhJb0M7b0VBQ1Y7eUJBR0E7OEJBQ0s7K0JBRUM7K0JBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FhakJBLGdCQUFvREMsSUFBZTtXQUFuRUQ7O1NBQUFBO0lBQUFBLG1CQUFmLG9CQUFBLFNBQW1FQyxJQUFlO1lBRTlFQyxPQUNBQyxjQUNBQyxJQUNBQyxnQkFFRUMsR0FDQUMsU0FDQUMsUUFFRkMsZUFDQUMsY0FDQUMsZ0JBQ0FDLGtCQWlDZ0JDLFVBN0JWQyxjQU1BQyxxQkFLQUMsZ0JBRUFDLHdCQWVvQixNQUFaSixTQVlWSyxRQW1ER0M7Ozs7b0JBM0dQakIsUUFhRUQsS0FiRkMsT0FDQUMsZUFZRUYsS0FaRkUsY0FDQUMsS0FXRUgsS0FYRkcsSUFDQUMsTUFVRUosS0FWRkksaUJBVUVKLEtBVEZJLEtBQ0VDLGNBQUFBLEdBQ0FDLG9CQUFBQSxTQUNBQyxtQkFBQUEsUUFFRkMsZ0JBSUVSLEtBSkZRLGVBQ0FDLGVBR0VULEtBSEZTLGNBQ0FDLGlCQUVFVixLQUZGVSxnQkFDQUMsbUJBQ0VYLEtBREZXOzs7Ozs7Ozs7b0JB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