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
import httpStatus from "http-status";
import { APIError, Forbidden, NotFound } from "../../errors";
import executeAccess from "../../auth/executeAccess";
import { afterRead } from "../../fields/hooks/afterRead";
import { combineQueries } from "../../database/combineQueries";
import { initTransaction } from "../../utilities/initTransaction";
import { killTransaction } from "../../utilities/killTransaction";
function findVersionByID(args) {
    return _findVersionByID.apply(this, arguments);
}
function _findVersionByID() {
    _findVersionByID = _async_to_generator(function(args) {
        var depth, _args_collection, collectionConfig, id, req, _args_req, t, payload, locale, disableErrors, currentDepth, overrideAccess, showHiddenFields, shouldCommit, accessResults, _tmp, hasWhereAccess, fullWhere, versionsQuery, result, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    depth = args.depth, _args_collection = args.collection, collectionConfig = _args_collection.config, id = args.id, req = args.req, _args_req = args.req, t = _args_req.t, payload = _args_req.payload, locale = _args_req.locale, disableErrors = args.disableErrors, currentDepth = args.currentDepth, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields;
                    if (!id) {
                        throw new APIError("Missing ID of version.", httpStatus.BAD_REQUEST);
                    }
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
                        }, collectionConfig.access.readVersions)
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
                    fullWhere = combineQueries({
                        _id: {
                            equals: id
                        }
                    }, accessResults);
                    return [
                        4,
                        payload.db.findVersions({
                            locale: locale,
                            collection: collectionConfig.slug,
                            limit: 1,
                            pagination: false,
                            where: fullWhere,
                            req: req
                        })
                    ];
                case 6:
                    versionsQuery = _state.sent();
                    result = versionsQuery.docs[0];
                    if (!result) {
                        if (!disableErrors) {
                            if (!hasWhereAccess) throw new NotFound(t);
                            if (hasWhereAccess) throw new Forbidden(t);
                        }
                        return [
                            2,
                            null
                        ];
                    }
                    // /////////////////////////////////////
                    // beforeRead - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        collectionConfig.hooks.beforeRead.reduce(function() {
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
                                                    query: fullWhere,
                                                    doc: result.version,
                                                    context: req.context
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
                case 7:
                    _state.sent();
                    return [
                        4,
                        afterRead({
                            currentDepth: currentDepth,
                            depth: depth,
                            doc: result.version,
                            entityConfig: collectionConfig,
                            overrideAccess: overrideAccess,
                            req: req,
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
                    // afterRead - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        collectionConfig.hooks.afterRead.reduce(function() {
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
                                                    query: fullWhere,
                                                    doc: result.version,
                                                    context: req.context
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2ZpbmRWZXJzaW9uQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIFR5cGVXaXRoSUQgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgQVBJRXJyb3IsIEZvcmJpZGRlbiwgTm90Rm91bmQgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJztcbmltcG9ydCB7IFR5cGVXaXRoVmVyc2lvbiB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL3R5cGVzJztcbmltcG9ydCB7IGFmdGVyUmVhZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQnO1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcyc7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgaWQ6IHN0cmluZyB8IG51bWJlclxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIGRpc2FibGVFcnJvcnM/OiBib29sZWFuXG4gIGN1cnJlbnREZXB0aD86IG51bWJlclxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgZGVwdGg/OiBudW1iZXJcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmluZFZlcnNpb25CeUlEPFQgZXh0ZW5kcyBUeXBlV2l0aElEID0gYW55PihhcmdzOiBBcmd1bWVudHMpOiBQcm9taXNlPFR5cGVXaXRoVmVyc2lvbjxUPj4ge1xuICBjb25zdCB7XG4gICAgZGVwdGgsXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgIH0sXG4gICAgaWQsXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgdCxcbiAgICAgIHBheWxvYWQsXG4gICAgICBsb2NhbGUsXG4gICAgfSxcbiAgICBkaXNhYmxlRXJyb3JzLFxuICAgIGN1cnJlbnREZXB0aCxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICB9ID0gYXJncztcblxuICBpZiAoIWlkKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKCdNaXNzaW5nIElEIG9mIHZlcnNpb24uJywgaHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxLCBkaXNhYmxlRXJyb3JzLCBpZCB9LCBjb2xsZWN0aW9uQ29uZmlnLmFjY2Vzcy5yZWFkVmVyc2lvbnMpIDogdHJ1ZTtcblxuICAgIC8vIElmIGVycm9ycyBhcmUgZGlzYWJsZWQsIGFuZCBhY2Nlc3MgcmV0dXJucyBmYWxzZSwgcmV0dXJuIG51bGxcbiAgICBpZiAoYWNjZXNzUmVzdWx0cyA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgaGFzV2hlcmVBY2Nlc3MgPSB0eXBlb2YgYWNjZXNzUmVzdWx0cyA9PT0gJ29iamVjdCc7XG5cbiAgICBjb25zdCBmdWxsV2hlcmUgPSBjb21iaW5lUXVlcmllcyh7IF9pZDogeyBlcXVhbHM6IGlkIH0gfSwgYWNjZXNzUmVzdWx0cyk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRmluZCBieSBJRFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHZlcnNpb25zUXVlcnkgPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRWZXJzaW9uczxUPih7XG4gICAgICBsb2NhbGUsXG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICBsaW1pdDogMSxcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgd2hlcmU6IGZ1bGxXaGVyZSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHZlcnNpb25zUXVlcnkuZG9jc1swXTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBpZiAoIWRpc2FibGVFcnJvcnMpIHtcbiAgICAgICAgaWYgKCFoYXNXaGVyZUFjY2VzcykgdGhyb3cgbmV3IE5vdEZvdW5kKHQpO1xuICAgICAgICBpZiAoaGFzV2hlcmVBY2Nlc3MpIHRocm93IG5ldyBGb3JiaWRkZW4odCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVSZWFkIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXN1bHQudmVyc2lvbiA9IGF3YWl0IGhvb2soe1xuICAgICAgICByZXEsXG4gICAgICAgIHF1ZXJ5OiBmdWxsV2hlcmUsXG4gICAgICAgIGRvYzogcmVzdWx0LnZlcnNpb24sXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkgfHwgcmVzdWx0LnZlcnNpb247XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdC52ZXJzaW9uID0gYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgIGRlcHRoLFxuICAgICAgZG9jOiByZXN1bHQudmVyc2lvbixcbiAgICAgIGVudGl0eUNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgcmVxLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmFmdGVyUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXN1bHQudmVyc2lvbiA9IGF3YWl0IGhvb2soe1xuICAgICAgICByZXEsXG4gICAgICAgIHF1ZXJ5OiBmdWxsV2hlcmUsXG4gICAgICAgIGRvYzogcmVzdWx0LnZlcnNpb24sXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkgfHwgcmVzdWx0LnZlcnNpb247XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgcGF5bG9hZC5kYi5jb21taXRUcmFuc2FjdGlvbihyZXEudHJhbnNhY3Rpb25JRCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRWZXJzaW9uQnlJRDtcbiJdLCJuYW1lcyI6WyJodHRwU3RhdHVzIiwiQVBJRXJyb3IiLCJGb3JiaWRkZW4iLCJOb3RGb3VuZCIsImV4ZWN1dGVBY2Nlc3MiLCJhZnRlclJlYWQiLCJjb21iaW5lUXVlcmllcyIsImluaXRUcmFuc2FjdGlvbiIsImtpbGxUcmFuc2FjdGlvbiIsImZpbmRWZXJzaW9uQnlJRCIsImFyZ3MiLCJkZXB0aCIsImNvbGxlY3Rpb25Db25maWciLCJpZCIsInJlcSIsInQiLCJwYXlsb2FkIiwibG9jYWxlIiwiZGlzYWJsZUVycm9ycyIsImN1cnJlbnREZXB0aCIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsInNob3VsZENvbW1pdCIsImFjY2Vzc1Jlc3VsdHMiLCJoYXNXaGVyZUFjY2VzcyIsImZ1bGxXaGVyZSIsInZlcnNpb25zUXVlcnkiLCJyZXN1bHQiLCJlcnJvciIsImNvbGxlY3Rpb24iLCJjb25maWciLCJCQURfUkVRVUVTVCIsImFjY2VzcyIsInJlYWRWZXJzaW9ucyIsIl9pZCIsImVxdWFscyIsImRiIiwiZmluZFZlcnNpb25zIiwic2x1ZyIsImxpbWl0IiwicGFnaW5hdGlvbiIsIndoZXJlIiwiZG9jcyIsImhvb2tzIiwiYmVmb3JlUmVhZCIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJxdWVyeSIsImRvYyIsInZlcnNpb24iLCJjb250ZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJlbnRpdHlDb25maWciLCJjb21taXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSUQiXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN2QyxPQUFPQSxnQkFBZ0IsY0FBYztBQUdyQyxTQUFTQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxRQUFRLGVBQWU7QUFDN0QsT0FBT0MsbUJBQW1CLDJCQUEyQjtBQUVyRCxTQUFTQyxTQUFTLFFBQVEsK0JBQStCO0FBQ3pELFNBQVNDLGNBQWMsUUFBUSxnQ0FBZ0M7QUFDL0QsU0FBU0MsZUFBZSxRQUFRLGtDQUFrQztBQUNsRSxTQUFTQyxlQUFlLFFBQVEsa0NBQWtDO1NBYW5EQyxnQkFBNENDLElBQWU7V0FBM0REOztTQUFBQTtJQUFBQSxtQkFBZixvQkFBQSxTQUEyREMsSUFBZTtZQUV0RUMseUJBRVVDLGtCQUVWQyxJQUNBQyxnQkFFRUMsR0FDQUMsU0FDQUMsUUFFRkMsZUFDQUMsY0FDQUMsZ0JBQ0FDLGtCQVFNQyxjQU1BQyxxQkFLQUMsZ0JBRUFDLFdBTUFDLGVBU0FDLFFBK0RDQzs7OztvQkFqSFBqQixRQWVFRCxLQWZGQywwQkFlRUQsS0FkRm1C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