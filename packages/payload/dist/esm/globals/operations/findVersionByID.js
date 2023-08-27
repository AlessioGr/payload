/* eslint-disable no-underscore-dangle */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
import { Forbidden, NotFound } from "../../errors";
import executeAccess from "../../auth/executeAccess";
import { afterRead } from "../../fields/hooks/afterRead";
import { combineQueries } from "../../database/combineQueries";
import { killTransaction } from "../../utilities/killTransaction";
import { initTransaction } from "../../utilities/initTransaction";
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
                        initTransaction(req)
                    ];
                case 2:
                    shouldCommit = _state.sent();
                    if (!!overrideAccess) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        executeAccess({
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
                        where: combineQueries({
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
                    if (!findGlobalVersionsArgs.where.and[0].id) throw new NotFound(t);
                    return [
                        4,
                        payload.db.findGlobalVersions(findGlobalVersionsArgs)
                    ];
                case 6:
                    _ref = _state.sent(), results = _ref.docs;
                    if (!results || ((_results = results) === null || _results === void 0 ? void 0 : _results.length) === 0) {
                        if (!disableErrors) {
                            if (!hasWhereAccess) throw new NotFound(t);
                            if (hasWhereAccess) throw new Forbidden(t);
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
                        afterRead({
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
                        killTransaction(req)
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
export default findVersionByID;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvZmluZFZlcnNpb25CeUlELnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgRm9yYmlkZGVuLCBOb3RGb3VuZCB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgZXhlY3V0ZUFjY2VzcyBmcm9tICcuLi8uLi9hdXRoL2V4ZWN1dGVBY2Nlc3MnO1xuaW1wb3J0IHsgVHlwZVdpdGhWZXJzaW9uIH0gZnJvbSAnLi4vLi4vdmVyc2lvbnMvdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGFmdGVyUmVhZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQnO1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcyc7XG5pbXBvcnQgeyBGaW5kR2xvYmFsVmVyc2lvbnNBcmdzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBpZDogc3RyaW5nIHwgbnVtYmVyXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgZGlzYWJsZUVycm9ycz86IGJvb2xlYW5cbiAgY3VycmVudERlcHRoPzogbnVtYmVyXG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBzaG93SGlkZGVuRmllbGRzPzogYm9vbGVhblxuICBkZXB0aD86IG51bWJlclxufVxuXG5hc3luYyBmdW5jdGlvbiBmaW5kVmVyc2lvbkJ5SUQ8VCBleHRlbmRzIFR5cGVXaXRoVmVyc2lvbjxUPiA9IGFueT4oYXJnczogQXJndW1lbnRzKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IHtcbiAgICBkZXB0aCxcbiAgICBnbG9iYWxDb25maWcsXG4gICAgaWQsXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgdCxcbiAgICAgIHBheWxvYWQsXG4gICAgICBsb2NhbGUsXG4gICAgfSxcbiAgICBkaXNhYmxlRXJyb3JzLFxuICAgIGN1cnJlbnREZXB0aCxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICB9ID0gYXJncztcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxLCBkaXNhYmxlRXJyb3JzLCBpZCB9LCBnbG9iYWxDb25maWcuYWNjZXNzLnJlYWRWZXJzaW9ucykgOiB0cnVlO1xuXG4gICAgLy8gSWYgZXJyb3JzIGFyZSBkaXNhYmxlZCwgYW5kIGFjY2VzcyByZXR1cm5zIGZhbHNlLCByZXR1cm4gbnVsbFxuICAgIGlmIChhY2Nlc3NSZXN1bHRzID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBoYXNXaGVyZUFjY2VzcyA9IHR5cGVvZiBhY2Nlc3NSZXN1bHRzID09PSAnb2JqZWN0JztcblxuICAgIGNvbnN0IGZpbmRHbG9iYWxWZXJzaW9uc0FyZ3M6IEZpbmRHbG9iYWxWZXJzaW9uc0FyZ3MgPSB7XG4gICAgICBnbG9iYWw6IGdsb2JhbENvbmZpZy5zbHVnLFxuICAgICAgd2hlcmU6IGNvbWJpbmVRdWVyaWVzKHsgaWQ6IHsgZXF1YWxzOiBpZCB9IH0sIGFjY2Vzc1Jlc3VsdHMpLFxuICAgICAgbG9jYWxlLFxuICAgICAgbGltaXQ6IDEsXG4gICAgICByZXEsXG4gICAgfTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBGaW5kIGJ5IElEXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKCFmaW5kR2xvYmFsVmVyc2lvbnNBcmdzLndoZXJlLmFuZFswXS5pZCkgdGhyb3cgbmV3IE5vdEZvdW5kKHQpO1xuXG5cbiAgICBjb25zdCB7IGRvY3M6IHJlc3VsdHMgfSA9IGF3YWl0IHBheWxvYWQuZGIuZmluZEdsb2JhbFZlcnNpb25zKGZpbmRHbG9iYWxWZXJzaW9uc0FyZ3MpO1xuICAgIGlmICghcmVzdWx0cyB8fCByZXN1bHRzPy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICghZGlzYWJsZUVycm9ycykge1xuICAgICAgICBpZiAoIWhhc1doZXJlQWNjZXNzKSB0aHJvdyBuZXcgTm90Rm91bmQodCk7XG4gICAgICAgIGlmIChoYXNXaGVyZUFjY2VzcykgdGhyb3cgbmV3IEZvcmJpZGRlbih0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICAvLyBDbG9uZSB0aGUgcmVzdWx0IC0gaXQgbWF5IGhhdmUgY29tZSBiYWNrIG1lbW9pemVkXG4gICAgbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0c1swXSkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZVJlYWQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgZ2xvYmFsQ29uZmlnLmhvb2tzLmJlZm9yZVJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgZG9jOiByZXN1bHQudmVyc2lvbixcbiAgICAgIH0pIHx8IHJlc3VsdC52ZXJzaW9uO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQudmVyc2lvbiA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBjdXJyZW50RGVwdGgsXG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogcmVzdWx0LnZlcnNpb24sXG4gICAgICBlbnRpdHlDb25maWc6IGdsb2JhbENvbmZpZyxcbiAgICAgIHJlcSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgcmVzdWx0LnZlcnNpb24gPSBhd2FpdCBob29rKHtcbiAgICAgICAgcmVxLFxuICAgICAgICBxdWVyeTogZmluZEdsb2JhbFZlcnNpb25zQXJncy53aGVyZSxcbiAgICAgICAgZG9jOiByZXN1bHQudmVyc2lvbixcbiAgICAgIH0pIHx8IHJlc3VsdC52ZXJzaW9uO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXR1cm4gcmVzdWx0c1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IHBheWxvYWQuZGIuY29tbWl0VHJhbnNhY3Rpb24ocmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kVmVyc2lvbkJ5SUQ7XG4iXSwibmFtZXMiOlsiRm9yYmlkZGVuIiwiTm90Rm91bmQiLCJleGVjdXRlQWNjZXNzIiwiYWZ0ZXJSZWFkIiwiY29tYmluZVF1ZXJpZXMiLCJraWxsVHJhbnNhY3Rpb24iLCJpbml0VHJhbnNhY3Rpb24iLCJmaW5kVmVyc2lvbkJ5SUQiLCJhcmdzIiwiZGVwdGgiLCJnbG9iYWxDb25maWciLCJpZCIsInJlcSIsInQiLCJwYXlsb2FkIiwibG9jYWxlIiwiZGlzYWJsZUVycm9ycyIsImN1cnJlbnREZXB0aCIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsInJlc3VsdHMiLCJzaG91bGRDb21taXQiLCJhY2Nlc3NSZXN1bHRzIiwiaGFzV2hlcmVBY2Nlc3MiLCJmaW5kR2xvYmFsVmVyc2lvbnNBcmdzIiwicmVzdWx0IiwiZXJyb3IiLCJhY2Nlc3MiLCJyZWFkVmVyc2lvbnMiLCJnbG9iYWwiLCJzbHVnIiwid2hlcmUiLCJlcXVhbHMiLCJsaW1pdCIsImFuZCIsImRiIiwiZmluZEdsb2JhbFZlcnNpb25zIiwiZG9jcyIsImxlbmd0aCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImhvb2tzIiwiYmVmb3JlUmVhZCIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJkb2MiLCJ2ZXJzaW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJlbnRpdHlDb25maWciLCJjb250ZXh0IiwicXVlcnkiLCJjb21taXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSUQiXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxTQUFTQSxTQUFTLEVBQUVDLFFBQVEsUUFBUSxlQUFlO0FBQ25ELE9BQU9DLG1CQUFtQiwyQkFBMkI7QUFHckQsU0FBU0MsU0FBUyxRQUFRLCtCQUErQjtBQUN6RCxTQUFTQyxjQUFjLFFBQVEsZ0NBQWdDO0FBRS9ELFNBQVNDLGVBQWUsUUFBUSxrQ0FBa0M7QUFDbEUsU0FBU0MsZUFBZSxRQUFRLGtDQUFrQztTQWFuREMsZ0JBQW9EQyxJQUFlO1dBQW5FRDs7U0FBQUE7SUFBQUEsbUJBQWYsb0JBQUEsU0FBbUVDLElBQWU7WUFFOUVDLE9BQ0FDLGNBQ0FDLElBQ0FDLGdCQUVFQyxHQUNBQyxTQUNBQyxRQUVGQyxlQUNBQyxjQUNBQyxnQkFDQUMsa0JBaUNnQkMsVUE3QlZDLGNBTUFDLHFCQUtBQyxnQkFFQUMsd0JBZW9CLE1BQVpKLFNBWVZLLFFBbURHQzs7OztvQkEzR1BqQixRQWFFRCxLQWJGQyxPQUNBQyxlQVlFRixLQVpGRSxjQUNBQyxLQVdFSCxLQVhGRyxJQUNBQyxNQVVFSixLQVZGSSxpQkFVRUosS0FURkksS0FDRUMsY0FB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