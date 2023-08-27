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
var _micromemoize = /*#__PURE__*/ _interop_require_default(require("micro-memoize"));
var _errors = require("../../errors");
var _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
var _replaceWithDraftIfAvailable = /*#__PURE__*/ _interop_require_default(require("../../versions/drafts/replaceWithDraftIfAvailable"));
var _afterRead = require("../../fields/hooks/afterRead");
var _combineQueries = require("../../database/combineQueries");
var _initTransaction = require("../../utilities/initTransaction");
var _killTransaction = require("../../utilities/killTransaction");
var _utils = require("./utils");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function findByID(incomingArgs) {
    return _findByID.apply(this, arguments);
}
function _findByID() {
    _findByID = _async_to_generator(function(incomingArgs) {
        var args, depth, _args_collection, collectionConfig, id, req, _args_req, payload, t, locale, disableErrors, currentDepth, _args_overrideAccess, overrideAccess, showHiddenFields, tmp, draftEnabled, _collectionConfig_versions, shouldCommit, transactionID, accessResult, _tmp, findOneArgs, nonMemoizedFindByID, result, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    args = incomingArgs;
                    // /////////////////////////////////////
                    // beforeOperation - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        args.collection.config.hooks.beforeOperation.reduce(function() {
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
                                                    args: args,
                                                    operation: "read",
                                                    context: args.req.context
                                                })
                                            ];
                                        case 2:
                                            args = _state.sent() || args;
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
                case 1:
                    _state.sent();
                    depth = args.depth, _args_collection = args.collection, collectionConfig = _args_collection.config, id = args.id, req = args.req, _args_req = args.req, payload = _args_req.payload, t = _args_req.t, locale = _args_req.locale, disableErrors = args.disableErrors, currentDepth = args.currentDepth, _args_overrideAccess = args.overrideAccess, overrideAccess = _args_overrideAccess === void 0 ? false : _args_overrideAccess, showHiddenFields = args.showHiddenFields, tmp = args.draft, draftEnabled = tmp === void 0 ? false : tmp;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        17,
                        ,
                        19
                    ]);
                    return [
                        4,
                        (0, _initTransaction.initTransaction)(req)
                    ];
                case 3:
                    shouldCommit = _state.sent();
                    transactionID = req.transactionID;
                    // /////////////////////////////////////
                    // beforeOperation - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        args.collection.config.hooks.beforeOperation.reduce(function() {
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
                                                    args: args,
                                                    operation: "read",
                                                    context: req.context
                                                })
                                            ];
                                        case 2:
                                            args = _state.sent() || args;
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
                case 4:
                    _state.sent();
                    if (!!overrideAccess) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        (0, _executeAccess.default)({
                            req: req,
                            disableErrors: disableErrors,
                            id: id
                        }, collectionConfig.access.read)
                    ];
                case 5:
                    _tmp = _state.sent();
                    return [
                        3,
                        7
                    ];
                case 6:
                    _tmp = true;
                    _state.label = 7;
                case 7:
                    accessResult = _tmp;
                    // If errors are disabled, and access returns false, return null
                    if (accessResult === false) return [
                        2,
                        null
                    ];
                    findOneArgs = {
                        collection: collectionConfig.slug,
                        where: (0, _combineQueries.combineQueries)({
                            id: {
                                equals: id
                            }
                        }, accessResult),
                        locale: locale,
                        req: {
                            transactionID: req.transactionID
                        }
                    };
                    // /////////////////////////////////////
                    // Find by ID
                    // /////////////////////////////////////
                    if (!findOneArgs.where.and[0].id) throw new _errors.NotFound(t);
                    if (!req.findByID) req.findByID = _define_property({}, transactionID, {});
                    if (!req.findByID[transactionID][collectionConfig.slug]) {
                        nonMemoizedFindByID = function() {
                            var _ref = _async_to_generator(function(query) {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        req.payload.db.findOne(query)
                                    ];
                                });
                            });
                            return function nonMemoizedFindByID(query) {
                                return _ref.apply(this, arguments);
                            };
                        }();
                        req.findByID[transactionID][collectionConfig.slug] = (0, _micromemoize.default)(nonMemoizedFindByID, {
                            isPromise: true,
                            maxSize: 100,
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore This is straight from their docs, bad typings
                            transformKey: JSON.stringify
                        });
                    }
                    return [
                        4,
                        req.findByID[transactionID][collectionConfig.slug](findOneArgs)
                    ];
                case 8:
                    result = _state.sent();
                    if (!result) {
                        if (!disableErrors) {
                            throw new _errors.NotFound(t);
                        }
                        return [
                            2,
                            null
                        ];
                    }
                    // Clone the result - it may have come back memoized
                    result = JSON.parse(JSON.stringify(result));
                    if (!(((_collectionConfig_versions = collectionConfig.versions) === null || _collectionConfig_versions === void 0 ? void 0 : _collectionConfig_versions.drafts) && draftEnabled)) return [
                        3,
                        10
                    ];
                    return [
                        4,
                        (0, _replaceWithDraftIfAvailable.default)({
                            entity: collectionConfig,
                            entityType: "collection",
                            doc: result,
                            accessResult: accessResult,
                            req: req,
                            overrideAccess: overrideAccess
                        })
                    ];
                case 9:
                    result = _state.sent();
                    _state.label = 10;
                case 10:
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
                                                    query: findOneArgs.where,
                                                    doc: result,
                                                    context: req.context
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
                case 11:
                    _state.sent();
                    return [
                        4,
                        (0, _afterRead.afterRead)({
                            currentDepth: currentDepth,
                            doc: result,
                            depth: depth,
                            entityConfig: collectionConfig,
                            overrideAccess: overrideAccess,
                            req: req,
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
                                                    query: findOneArgs.where,
                                                    doc: result,
                                                    context: req.context
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
                        (0, _utils.buildAfterOperation)({
                            operation: "findByID",
                            args: args,
                            result: result
                        })
                    ];
                case 14:
                    // /////////////////////////////////////
                    // afterOperation - Collection
                    // /////////////////////////////////////
                    result = _state.sent(); // TODO: fix this typing
                    if (!shouldCommit) return [
                        3,
                        16
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 15:
                    _state.sent();
                    _state.label = 16;
                case 16:
                    return [
                        2,
                        result
                    ];
                case 17:
                    error = _state.sent();
                    return [
                        4,
                        (0, _killTransaction.killTransaction)(req)
                    ];
                case 18:
                    _state.sent();
                    throw error;
                case 19:
                    return [
                        2
                    ];
            }
        });
    });
    return _findByID.apply(this, arguments);
}
var _default = findByID;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2ZpbmRCeUlELnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtaWNyby1tZW1vaXplJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBUeXBlV2l0aElEIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IE5vdEZvdW5kIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2Vzcyc7XG5pbXBvcnQgcmVwbGFjZVdpdGhEcmFmdElmQXZhaWxhYmxlIGZyb20gJy4uLy4uL3ZlcnNpb25zL2RyYWZ0cy9yZXBsYWNlV2l0aERyYWZ0SWZBdmFpbGFibGUnO1xuaW1wb3J0IHsgYWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyUmVhZCc7XG5pbXBvcnQgeyBjb21iaW5lUXVlcmllcyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL2NvbWJpbmVRdWVyaWVzJztcbmltcG9ydCB0eXBlIHsgRmluZE9uZUFyZ3MgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS90eXBlcyc7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgYnVpbGRBZnRlck9wZXJhdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgaWQ6IHN0cmluZyB8IG51bWJlclxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIGRpc2FibGVFcnJvcnM/OiBib29sZWFuXG4gIGN1cnJlbnREZXB0aD86IG51bWJlclxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgZGVwdGg/OiBudW1iZXJcbiAgZHJhZnQ/OiBib29sZWFuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRCeUlEPFQgZXh0ZW5kcyBUeXBlV2l0aElEPihcbiAgaW5jb21pbmdBcmdzOiBBcmd1bWVudHMsXG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGFyZ3MgPSBpbmNvbWluZ0FyZ3M7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmJlZm9yZU9wZXJhdGlvbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgIGFyZ3MgPSAoYXdhaXQgaG9vayh7XG4gICAgICBhcmdzLFxuICAgICAgb3BlcmF0aW9uOiAncmVhZCcsXG4gICAgICBjb250ZXh0OiBhcmdzLnJlcS5jb250ZXh0LFxuICAgIH0pKSB8fCBhcmdzO1xuICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgY29uc3Qge1xuICAgIGRlcHRoLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9LFxuICAgIGlkLFxuICAgIHJlcSxcbiAgICByZXE6IHtcbiAgICAgIHBheWxvYWQsXG4gICAgICB0LFxuICAgICAgbG9jYWxlLFxuICAgIH0sXG4gICAgZGlzYWJsZUVycm9ycyxcbiAgICBjdXJyZW50RGVwdGgsXG4gICAgb3ZlcnJpZGVBY2Nlc3MgPSBmYWxzZSxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIGRyYWZ0OiBkcmFmdEVuYWJsZWQgPSBmYWxzZSxcbiAgfSA9IGFyZ3M7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKTtcbiAgICBjb25zdCB7IHRyYW5zYWN0aW9uSUQgfSA9IHJlcTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgYXJncyA9IChhd2FpdCBob29rKHtcbiAgICAgICAgYXJncyxcbiAgICAgICAgb3BlcmF0aW9uOiAncmVhZCcsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkpIHx8IGFyZ3M7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdCA9ICFvdmVycmlkZUFjY2VzcyA/IGF3YWl0IGV4ZWN1dGVBY2Nlc3MoeyByZXEsIGRpc2FibGVFcnJvcnMsIGlkIH0sIGNvbGxlY3Rpb25Db25maWcuYWNjZXNzLnJlYWQpIDogdHJ1ZTtcblxuICAgIC8vIElmIGVycm9ycyBhcmUgZGlzYWJsZWQsIGFuZCBhY2Nlc3MgcmV0dXJucyBmYWxzZSwgcmV0dXJuIG51bGxcbiAgICBpZiAoYWNjZXNzUmVzdWx0ID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG5cblxuICAgIGNvbnN0IGZpbmRPbmVBcmdzOiBGaW5kT25lQXJncyA9IHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIHdoZXJlOiBjb21iaW5lUXVlcmllcyh7IGlkOiB7IGVxdWFsczogaWQgfSB9LCBhY2Nlc3NSZXN1bHQpLFxuICAgICAgbG9jYWxlLFxuICAgICAgcmVxOiB7XG4gICAgICAgIHRyYW5zYWN0aW9uSUQ6IHJlcS50cmFuc2FjdGlvbklELFxuICAgICAgfSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgICB9O1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEZpbmQgYnkgSURcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoIWZpbmRPbmVBcmdzLndoZXJlLmFuZFswXS5pZCkgdGhyb3cgbmV3IE5vdEZvdW5kKHQpO1xuXG4gICAgaWYgKCFyZXEuZmluZEJ5SUQpIHJlcS5maW5kQnlJRCA9IHsgW3RyYW5zYWN0aW9uSURdOiB7fSB9O1xuXG4gICAgaWYgKCFyZXEuZmluZEJ5SURbdHJhbnNhY3Rpb25JRF1bY29sbGVjdGlvbkNvbmZpZy5zbHVnXSkge1xuICAgICAgY29uc3Qgbm9uTWVtb2l6ZWRGaW5kQnlJRCA9IGFzeW5jIChxdWVyeTogRmluZE9uZUFyZ3MpID0+IHJlcS5wYXlsb2FkLmRiLmZpbmRPbmUocXVlcnkpO1xuXG4gICAgICByZXEuZmluZEJ5SURbdHJhbnNhY3Rpb25JRF1bY29sbGVjdGlvbkNvbmZpZy5zbHVnXSA9IG1lbW9pemUobm9uTWVtb2l6ZWRGaW5kQnlJRCwge1xuICAgICAgICBpc1Byb21pc2U6IHRydWUsXG4gICAgICAgIG1heFNpemU6IDEwMCxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAvLyBAdHMtaWdub3JlIFRoaXMgaXMgc3RyYWlnaHQgZnJvbSB0aGVpciBkb2NzLCBiYWQgdHlwaW5nc1xuICAgICAgICB0cmFuc2Zvcm1LZXk6IEpTT04uc3RyaW5naWZ5LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcS5maW5kQnlJRFt0cmFuc2FjdGlvbklEXVtjb2xsZWN0aW9uQ29uZmlnLnNsdWddKGZpbmRPbmVBcmdzKSBhcyBUO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIGlmICghZGlzYWJsZUVycm9ycykge1xuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmQodCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIENsb25lIHRoZSByZXN1bHQgLSBpdCBtYXkgaGF2ZSBjb21lIGJhY2sgbWVtb2l6ZWRcbiAgICByZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmVwbGFjZSBkb2N1bWVudCB3aXRoIGRyYWZ0IGlmIGF2YWlsYWJsZVxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmIChjb2xsZWN0aW9uQ29uZmlnLnZlcnNpb25zPy5kcmFmdHMgJiYgZHJhZnRFbmFibGVkKSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCByZXBsYWNlV2l0aERyYWZ0SWZBdmFpbGFibGUoe1xuICAgICAgICBlbnRpdHk6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgIGVudGl0eVR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgIGFjY2Vzc1Jlc3VsdCxcbiAgICAgICAgcmVxLFxuICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVSZWFkIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXN1bHQgPSBhd2FpdCBob29rKHtcbiAgICAgICAgcmVxLFxuICAgICAgICBxdWVyeTogZmluZE9uZUFyZ3Mud2hlcmUsXG4gICAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pIHx8IHJlc3VsdDtcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgZGVwdGgsXG4gICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHJlcSxcbiAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgcXVlcnk6IGZpbmRPbmVBcmdzLndoZXJlLFxuICAgICAgICBkb2M6IHJlc3VsdCxcbiAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICB9KSB8fCByZXN1bHQ7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGJ1aWxkQWZ0ZXJPcGVyYXRpb248VD4oe1xuICAgICAgb3BlcmF0aW9uOiAnZmluZEJ5SUQnLFxuICAgICAgYXJncyxcbiAgICAgIHJlc3VsdDogcmVzdWx0IGFzIGFueSxcbiAgICB9KTsgLy8gVE9ETzogZml4IHRoaXMgdHlwaW5nXG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0dXJuIHJlc3VsdHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBwYXlsb2FkLmRiLmNvbW1pdFRyYW5zYWN0aW9uKHJlcS50cmFuc2FjdGlvbklEKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZEJ5SUQ7XG4iXSwibmFtZXMiOlsiZmluZEJ5SUQiLCJpbmNvbWluZ0FyZ3MiLCJhcmdzIiwiZGVwdGgiLCJjb2xsZWN0aW9uQ29uZmlnIiwiaWQiLCJyZXEiLCJwYXlsb2FkIiwidCIsImxvY2FsZSIsImRpc2FibGVFcnJvcnMiLCJjdXJyZW50RGVwdGgiLCJvdmVycmlkZUFjY2VzcyIsInNob3dIaWRkZW5GaWVsZHMiLCJkcmFmdEVuYWJsZWQiLCJzaG91bGRDb21taXQiLCJ0cmFuc2FjdGlvbklEIiwiYWNjZXNzUmVzdWx0IiwiZmluZE9uZUFyZ3MiLCJub25NZW1vaXplZEZpbmRCeUlEIiwicmVzdWx0IiwiZXJyb3IiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwiaG9va3MiLCJiZWZvcmVPcGVyYXRpb24iLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwib3BlcmF0aW9uIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZHJhZnQiLCJpbml0VHJhbnNhY3Rpb24iLCJleGVjdXRlQWNjZXNzIiwiYWNjZXNzIiwicmVhZCIsInNsdWciLCJ3aGVyZSIsImNvbWJpbmVRdWVyaWVzIiwiZXF1YWxzIiwiYW5kIiwiTm90Rm91bmQiLCJxdWVyeSIsImRiIiwiZmluZE9uZSIsIm1lbW9pemUiLCJpc1Byb21pc2UiLCJtYXhTaXplIiwidHJhbnNmb3JtS2V5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwidmVyc2lvbnMiLCJkcmFmdHMiLCJyZXBsYWNlV2l0aERyYWZ0SWZBdmFpbGFibGUiLCJlbnRpdHkiLCJlbnRpdHlUeXBlIiwiZG9jIiwiYmVmb3JlUmVhZCIsImFmdGVyUmVhZCIsImVudGl0eUNvbmZpZyIsImJ1aWxkQWZ0ZXJPcGVyYXRpb24iLCJjb21taXRUcmFuc2FjdGlvbiIsImtpbGxUcmFuc2FjdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDOzs7OytCQTBOdkM7OztlQUFBOzs7bUVBek5vQjtzQkFHSztvRUFDQztrRkFDYzt5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