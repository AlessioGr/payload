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
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _errors = require("../../errors");
var _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
var _afterRead = require("../../fields/hooks/afterRead");
var _combineQueries = require("../../database/combineQueries");
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
                        throw new _errors.APIError("Missing ID of version.", _httpstatus.default.BAD_REQUEST);
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
                    fullWhere = (0, _combineQueries.combineQueries)({
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
                            if (!hasWhereAccess) throw new _errors.NotFound(t);
                            if (hasWhereAccess) throw new _errors.Forbidden(t);
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
                        (0, _afterRead.afterRead)({
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2ZpbmRWZXJzaW9uQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIFR5cGVXaXRoSUQgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgQVBJRXJyb3IsIEZvcmJpZGRlbiwgTm90Rm91bmQgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJztcbmltcG9ydCB7IFR5cGVXaXRoVmVyc2lvbiB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL3R5cGVzJztcbmltcG9ydCB7IGFmdGVyUmVhZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQnO1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcyc7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgaWQ6IHN0cmluZyB8IG51bWJlclxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIGRpc2FibGVFcnJvcnM/OiBib29sZWFuXG4gIGN1cnJlbnREZXB0aD86IG51bWJlclxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgZGVwdGg/OiBudW1iZXJcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmluZFZlcnNpb25CeUlEPFQgZXh0ZW5kcyBUeXBlV2l0aElEID0gYW55PihhcmdzOiBBcmd1bWVudHMpOiBQcm9taXNlPFR5cGVXaXRoVmVyc2lvbjxUPj4ge1xuICBjb25zdCB7XG4gICAgZGVwdGgsXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgIH0sXG4gICAgaWQsXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgdCxcbiAgICAgIHBheWxvYWQsXG4gICAgICBsb2NhbGUsXG4gICAgfSxcbiAgICBkaXNhYmxlRXJyb3JzLFxuICAgIGN1cnJlbnREZXB0aCxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICB9ID0gYXJncztcblxuICBpZiAoIWlkKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKCdNaXNzaW5nIElEIG9mIHZlcnNpb24uJywgaHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxLCBkaXNhYmxlRXJyb3JzLCBpZCB9LCBjb2xsZWN0aW9uQ29uZmlnLmFjY2Vzcy5yZWFkVmVyc2lvbnMpIDogdHJ1ZTtcblxuICAgIC8vIElmIGVycm9ycyBhcmUgZGlzYWJsZWQsIGFuZCBhY2Nlc3MgcmV0dXJucyBmYWxzZSwgcmV0dXJuIG51bGxcbiAgICBpZiAoYWNjZXNzUmVzdWx0cyA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgaGFzV2hlcmVBY2Nlc3MgPSB0eXBlb2YgYWNjZXNzUmVzdWx0cyA9PT0gJ29iamVjdCc7XG5cbiAgICBjb25zdCBmdWxsV2hlcmUgPSBjb21iaW5lUXVlcmllcyh7IF9pZDogeyBlcXVhbHM6IGlkIH0gfSwgYWNjZXNzUmVzdWx0cyk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRmluZCBieSBJRFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHZlcnNpb25zUXVlcnkgPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRWZXJzaW9uczxUPih7XG4gICAgICBsb2NhbGUsXG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICBsaW1pdDogMSxcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgd2hlcmU6IGZ1bGxXaGVyZSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHZlcnNpb25zUXVlcnkuZG9jc1swXTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBpZiAoIWRpc2FibGVFcnJvcnMpIHtcbiAgICAgICAgaWYgKCFoYXNXaGVyZUFjY2VzcykgdGhyb3cgbmV3IE5vdEZvdW5kKHQpO1xuICAgICAgICBpZiAoaGFzV2hlcmVBY2Nlc3MpIHRocm93IG5ldyBGb3JiaWRkZW4odCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVSZWFkIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXN1bHQudmVyc2lvbiA9IGF3YWl0IGhvb2soe1xuICAgICAgICByZXEsXG4gICAgICAgIHF1ZXJ5OiBmdWxsV2hlcmUsXG4gICAgICAgIGRvYzogcmVzdWx0LnZlcnNpb24sXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkgfHwgcmVzdWx0LnZlcnNpb247XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdC52ZXJzaW9uID0gYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgIGRlcHRoLFxuICAgICAgZG9jOiByZXN1bHQudmVyc2lvbixcbiAgICAgIGVudGl0eUNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgcmVxLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmFmdGVyUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXN1bHQudmVyc2lvbiA9IGF3YWl0IGhvb2soe1xuICAgICAgICByZXEsXG4gICAgICAgIHF1ZXJ5OiBmdWxsV2hlcmUsXG4gICAgICAgIGRvYzogcmVzdWx0LnZlcnNpb24sXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkgfHwgcmVzdWx0LnZlcnNpb247XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgcGF5bG9hZC5kYi5jb21taXRUcmFuc2FjdGlvbihyZXEudHJhbnNhY3Rpb25JRCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRWZXJzaW9uQnlJRDtcbiJdLCJuYW1lcyI6WyJmaW5kVmVyc2lvbkJ5SUQiLCJhcmdzIiwiZGVwdGgiLCJjb2xsZWN0aW9uQ29uZmlnIiwiaWQiLCJyZXEiLCJ0IiwicGF5bG9hZCIsImxvY2FsZSIsImRpc2FibGVFcnJvcnMiLCJjdXJyZW50RGVwdGgiLCJvdmVycmlkZUFjY2VzcyIsInNob3dIaWRkZW5GaWVsZHMiLCJzaG91bGRDb21taXQiLCJhY2Nlc3NSZXN1bHRzIiwiaGFzV2hlcmVBY2Nlc3MiLCJmdWxsV2hlcmUiLCJ2ZXJzaW9uc1F1ZXJ5IiwicmVzdWx0IiwiZXJyb3IiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwiQVBJRXJyb3IiLCJodHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJpbml0VHJhbnNhY3Rpb24iLCJleGVjdXRlQWNjZXNzIiwiYWNjZXNzIiwicmVhZFZlcnNpb25zIiwiY29tYmluZVF1ZXJpZXMiLCJfaWQiLCJlcXVhbHMiLCJkYiIsImZpbmRWZXJzaW9ucyIsInNsdWciLCJsaW1pdCIsInBhZ2luYXRpb24iLCJ3aGVyZSIsImRvY3MiLCJOb3RGb3VuZCIsIkZvcmJpZGRlbiIsImhvb2tzIiwiYmVmb3JlUmVhZCIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJxdWVyeSIsImRvYyIsInZlcnNpb24iLCJjb250ZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhZnRlclJlYWQiLCJlbnRpdHlDb25maWciLCJjb21taXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSUQiLCJraWxsVHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7OzsrQkFnSnZDOzs7ZUFBQTs7O2lFQS9JdUI7c0JBR3VCO29FQUNwQjt5QkFFQTs4QkFDSzsrQkFDQzsrQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWFqQkEsZ0JBQTRDQyxJQUFlO1dBQTNERDs7U0FBQUE7SUFBQUEsbUJBQWYsb0JBQUEsU0FBMkRDLElBQWU7WUFFdEVDLHlCQUVVQyxrQkFFVkMsSUFDQUMsZ0JBRUVDLEdBQ0FDLFNBQ0FDLFFBRUZDLGVBQ0FDLGNBQ0FDLGdCQUNBQyxrQkFRTUMsY0FNQUMscUJBS0FDLGdCQUVBQyxXQU1BQyxlQVNBQyxRQStEQ0M7Ozs7b0JBakhQakIsUUFlRUQsS0FmRkMsMEJBZUVELEtBZEZtQixZQUNVakIsb0NBQVJrQixRQUVGakIsS0FXRUgsS0FYRkcsSUFDQUMsTUFVRUosS0FWRkksaUJBVUVKLEtBVEZJLEtBQ0VDLGNBQUFBLEdBQ0FDLG9CQUFBQSxTQUNBQyxtQkFBQUEsUUFFRkMsZ0JBSUVSLEtBSkZRLGVBQ0FDLGVBR0VULEtBSEZTLGNB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