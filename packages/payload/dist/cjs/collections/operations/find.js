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
var _afterRead = require("../../fields/hooks/afterRead");
var _validateQueryPaths = require("../../database/queryValidation/validateQueryPaths");
var _appendVersionToQueryKey = require("../../versions/drafts/appendVersionToQueryKey");
var _buildCollectionFields = require("../../versions/buildCollectionFields");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function find(incomingArgs) {
    return _find.apply(this, arguments);
}
function _find() {
    _find = _async_to_generator(function(incomingArgs) {
        var args, where, page, limit, depth, currentDepth, draftsEnabled, collection, _args_collection, collectionConfig, sort, req, _args_req, locale, payload, overrideAccess, disableErrors, showHiddenFields, _args_pagination, pagination, _collectionConfig_versions, shouldCommit, accessResult, usePagination, sanitizedLimit, sanitizedPage, result, fullWhere, _tmp, _tmp1, _tmp2, _tmp3, _tmp4, _tmp5, error;
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
                    where = args.where, page = args.page, limit = args.limit, depth = args.depth, currentDepth = args.currentDepth, draftsEnabled = args.draft, collection = args.collection, _args_collection = args.collection, collectionConfig = _args_collection.config, sort = args.sort, req = args.req, _args_req = args.req, locale = _args_req.locale, payload = _args_req.payload, overrideAccess = args.overrideAccess, disableErrors = args.disableErrors, showHiddenFields = args.showHiddenFields, _args_pagination = args.pagination, pagination = _args_pagination === void 0 ? true : _args_pagination;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        19,
                        ,
                        21
                    ]);
                    return [
                        4,
                        (0, _initTransaction.initTransaction)(req)
                    ];
                case 3:
                    shouldCommit = _state.sent();
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
                            disableErrors: disableErrors
                        }, collectionConfig.access.read)
                    ];
                case 5:
                    accessResult = _state.sent();
                    // If errors are disabled, and access returns false, return empty results
                    if (accessResult === false) {
                        return [
                            2,
                            {
                                docs: [],
                                totalDocs: 0,
                                totalPages: 1,
                                page: 1,
                                pagingCounter: 1,
                                hasPrevPage: false,
                                hasNextPage: false,
                                prevPage: null,
                                nextPage: null,
                                limit: limit
                            }
                        ];
                    }
                    _state.label = 6;
                case 6:
                    usePagination = pagination && limit !== 0;
                    sanitizedLimit = limit !== null && limit !== void 0 ? limit : usePagination ? 10 : 0;
                    sanitizedPage = page || 1;
                    fullWhere = (0, _combineQueries.combineQueries)(where, accessResult);
                    if (!(((_collectionConfig_versions = collectionConfig.versions) === null || _collectionConfig_versions === void 0 ? void 0 : _collectionConfig_versions.drafts) && draftsEnabled)) return [
                        3,
                        9
                    ];
                    fullWhere = (0, _appendVersionToQueryKey.appendVersionToQueryKey)(fullWhere);
                    return [
                        4,
                        (0, _validateQueryPaths.validateQueryPaths)({
                            collectionConfig: collection.config,
                            where: fullWhere,
                            req: req,
                            overrideAccess: overrideAccess,
                            versionFields: (0, _buildCollectionFields.buildVersionCollectionFields)(collection.config)
                        })
                    ];
                case 7:
                    _state.sent();
                    return [
                        4,
                        payload.db.queryDrafts({
                            collection: collectionConfig.slug,
                            where: fullWhere,
                            page: sanitizedPage,
                            limit: sanitizedLimit,
                            sort: sort,
                            pagination: usePagination,
                            locale: locale,
                            req: req
                        })
                    ];
                case 8:
                    result = _state.sent();
                    return [
                        3,
                        12
                    ];
                case 9:
                    return [
                        4,
                        (0, _validateQueryPaths.validateQueryPaths)({
                            collectionConfig: collectionConfig,
                            where: where,
                            req: req,
                            overrideAccess: overrideAccess
                        })
                    ];
                case 10:
                    _state.sent();
                    return [
                        4,
                        payload.db.find({
                            collection: collectionConfig.slug,
                            where: fullWhere,
                            page: sanitizedPage,
                            limit: sanitizedLimit,
                            sort: sort,
                            locale: locale,
                            pagination: pagination,
                            req: req
                        })
                    ];
                case 11:
                    result = _state.sent();
                    _state.label = 12;
                case 12:
                    _tmp = [
                        _object_spread({}, result)
                    ];
                    _tmp1 = {};
                    return [
                        4,
                        Promise.all(result.docs.map(function() {
                            var _ref = _async_to_generator(function(doc) {
                                var docRef;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            docRef = doc;
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
                                                                            doc: docRef,
                                                                            context: req.context
                                                                        })
                                                                    ];
                                                                case 2:
                                                                    docRef = _state.sent() || docRef;
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
                                            return [
                                                2,
                                                docRef
                                            ];
                                    }
                                });
                            });
                            return function(doc) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 13:
                    // /////////////////////////////////////
                    // beforeRead - Collection
                    // /////////////////////////////////////
                    result = _object_spread_props.apply(void 0, _tmp.concat([
                        (_tmp1.docs = _state.sent(), _tmp1)
                    ]));
                    _tmp2 = [
                        _object_spread({}, result)
                    ];
                    _tmp3 = {};
                    return [
                        4,
                        Promise.all(result.docs.map(function() {
                            var _ref = _async_to_generator(function(doc) {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        (0, _afterRead.afterRead)({
                                            depth: depth,
                                            currentDepth: currentDepth,
                                            doc: doc,
                                            entityConfig: collectionConfig,
                                            overrideAccess: overrideAccess,
                                            req: req,
                                            showHiddenFields: showHiddenFields,
                                            findMany: true,
                                            context: req.context
                                        })
                                    ];
                                });
                            });
                            return function(doc) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 14:
                    // /////////////////////////////////////
                    // afterRead - Fields
                    // /////////////////////////////////////
                    result = _object_spread_props.apply(void 0, _tmp2.concat([
                        (_tmp3.docs = _state.sent(), _tmp3)
                    ]));
                    _tmp4 = [
                        _object_spread({}, result)
                    ];
                    _tmp5 = {};
                    return [
                        4,
                        Promise.all(result.docs.map(function() {
                            var _ref = _async_to_generator(function(doc) {
                                var docRef;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            docRef = doc;
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
                                                                            doc: docRef,
                                                                            findMany: true,
                                                                            context: req.context
                                                                        })
                                                                    ];
                                                                case 2:
                                                                    docRef = _state.sent() || doc;
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
                                            return [
                                                2,
                                                docRef
                                            ];
                                    }
                                });
                            });
                            return function(doc) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 15:
                    // /////////////////////////////////////
                    // afterRead - Collection
                    // /////////////////////////////////////
                    result = _object_spread_props.apply(void 0, _tmp4.concat([
                        (_tmp5.docs = _state.sent(), _tmp5)
                    ]));
                    return [
                        4,
                        (0, _utils.buildAfterOperation)({
                            operation: "find",
                            args: args,
                            result: result
                        })
                    ];
                case 16:
                    // /////////////////////////////////////
                    // afterOperation - Collection
                    // /////////////////////////////////////
                    result = _state.sent();
                    if (!shouldCommit) return [
                        3,
                        18
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 17:
                    _state.sent();
                    _state.label = 18;
                case 18:
                    return [
                        2,
                        result
                    ];
                case 19:
                    error = _state.sent();
                    return [
                        4,
                        (0, _killTransaction.killTransaction)(req)
                    ];
                case 20:
                    _state.sent();
                    throw error;
                case 21:
                    return [
                        2
                    ];
            }
        });
    });
    return _find.apply(this, arguments);
}
var _default = find;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2ZpbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIFR5cGVXaXRoSUQgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgQWNjZXNzUmVzdWx0IH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGFmdGVyUmVhZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQnO1xuaW1wb3J0IHsgdmFsaWRhdGVRdWVyeVBhdGhzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvcXVlcnlWYWxpZGF0aW9uL3ZhbGlkYXRlUXVlcnlQYXRocyc7XG5pbXBvcnQgeyBhcHBlbmRWZXJzaW9uVG9RdWVyeUtleSB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL2RyYWZ0cy9hcHBlbmRWZXJzaW9uVG9RdWVyeUtleSc7XG5pbXBvcnQgeyBidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzIH0gZnJvbSAnLi4vLi4vdmVyc2lvbnMvYnVpbGRDb2xsZWN0aW9uRmllbGRzJztcbmltcG9ydCB7IGNvbWJpbmVRdWVyaWVzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvY29tYmluZVF1ZXJpZXMnO1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IGJ1aWxkQWZ0ZXJPcGVyYXRpb24gfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIHdoZXJlPzogV2hlcmVcbiAgcGFnZT86IG51bWJlclxuICBsaW1pdD86IG51bWJlclxuICBzb3J0Pzogc3RyaW5nXG4gIGRlcHRoPzogbnVtYmVyXG4gIGN1cnJlbnREZXB0aD86IG51bWJlclxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgZGlzYWJsZUVycm9ycz86IGJvb2xlYW5cbiAgcGFnaW5hdGlvbj86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgZHJhZnQ/OiBib29sZWFuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmQ8VCBleHRlbmRzIFR5cGVXaXRoSUQgJiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4oXG4gIGluY29taW5nQXJnczogQXJndW1lbnRzLFxuKTogUHJvbWlzZTxQYWdpbmF0ZWREb2NzPFQ+PiB7XG4gIGxldCBhcmdzID0gaW5jb21pbmdBcmdzO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gYmVmb3JlT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgYXJncyxcbiAgICAgIG9wZXJhdGlvbjogJ3JlYWQnLFxuICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICB9KSkgfHwgYXJncztcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gIGNvbnN0IHtcbiAgICB3aGVyZSxcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIGRlcHRoLFxuICAgIGN1cnJlbnREZXB0aCxcbiAgICBkcmFmdDogZHJhZnRzRW5hYmxlZCxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9LFxuICAgIHNvcnQsXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgbG9jYWxlLFxuICAgICAgcGF5bG9hZCxcbiAgICB9LFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIGRpc2FibGVFcnJvcnMsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBwYWdpbmF0aW9uID0gdHJ1ZSxcbiAgfSA9IGFyZ3M7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgYXJncyA9IChhd2FpdCBob29rKHtcbiAgICAgICAgYXJncyxcbiAgICAgICAgb3BlcmF0aW9uOiAncmVhZCcsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkpIHx8IGFyZ3M7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGxldCBhY2Nlc3NSZXN1bHQ6IEFjY2Vzc1Jlc3VsdDtcblxuICAgIGlmICghb3ZlcnJpZGVBY2Nlc3MpIHtcbiAgICAgIGFjY2Vzc1Jlc3VsdCA9IGF3YWl0IGV4ZWN1dGVBY2Nlc3MoeyByZXEsIGRpc2FibGVFcnJvcnMgfSwgY29sbGVjdGlvbkNvbmZpZy5hY2Nlc3MucmVhZCk7XG5cbiAgICAgIC8vIElmIGVycm9ycyBhcmUgZGlzYWJsZWQsIGFuZCBhY2Nlc3MgcmV0dXJucyBmYWxzZSwgcmV0dXJuIGVtcHR5IHJlc3VsdHNcbiAgICAgIGlmIChhY2Nlc3NSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZG9jczogW10sXG4gICAgICAgICAgdG90YWxEb2NzOiAwLFxuICAgICAgICAgIHRvdGFsUGFnZXM6IDEsXG4gICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICBwYWdpbmdDb3VudGVyOiAxLFxuICAgICAgICAgIGhhc1ByZXZQYWdlOiBmYWxzZSxcbiAgICAgICAgICBoYXNOZXh0UGFnZTogZmFsc2UsXG4gICAgICAgICAgcHJldlBhZ2U6IG51bGwsXG4gICAgICAgICAgbmV4dFBhZ2U6IG51bGwsXG4gICAgICAgICAgbGltaXQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEZpbmRcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCB1c2VQYWdpbmF0aW9uID0gcGFnaW5hdGlvbiAmJiBsaW1pdCAhPT0gMDtcbiAgICBjb25zdCBzYW5pdGl6ZWRMaW1pdCA9IGxpbWl0ID8/ICh1c2VQYWdpbmF0aW9uID8gMTAgOiAwKTtcbiAgICBjb25zdCBzYW5pdGl6ZWRQYWdlID0gcGFnZSB8fCAxO1xuXG4gICAgbGV0IHJlc3VsdDogUGFnaW5hdGVkRG9jczxUPjtcblxuICAgIGxldCBmdWxsV2hlcmUgPSBjb21iaW5lUXVlcmllcyh3aGVyZSwgYWNjZXNzUmVzdWx0KTtcblxuICAgIGlmIChjb2xsZWN0aW9uQ29uZmlnLnZlcnNpb25zPy5kcmFmdHMgJiYgZHJhZnRzRW5hYmxlZCkge1xuICAgICAgZnVsbFdoZXJlID0gYXBwZW5kVmVyc2lvblRvUXVlcnlLZXkoZnVsbFdoZXJlKTtcblxuICAgICAgYXdhaXQgdmFsaWRhdGVRdWVyeVBhdGhzKHtcbiAgICAgICAgY29sbGVjdGlvbkNvbmZpZzogY29sbGVjdGlvbi5jb25maWcsXG4gICAgICAgIHdoZXJlOiBmdWxsV2hlcmUsXG4gICAgICAgIHJlcSxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHZlcnNpb25GaWVsZHM6IGJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMoY29sbGVjdGlvbi5jb25maWcpLFxuICAgICAgfSk7XG5cbiAgICAgIHJlc3VsdCA9IGF3YWl0IHBheWxvYWQuZGIucXVlcnlEcmFmdHM8VD4oe1xuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICAgIHdoZXJlOiBmdWxsV2hlcmUsXG4gICAgICAgIHBhZ2U6IHNhbml0aXplZFBhZ2UsXG4gICAgICAgIGxpbWl0OiBzYW5pdGl6ZWRMaW1pdCxcbiAgICAgICAgc29ydCxcbiAgICAgICAgcGFnaW5hdGlvbjogdXNlUGFnaW5hdGlvbixcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICByZXEsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdmFsaWRhdGVRdWVyeVBhdGhzKHtcbiAgICAgICAgY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgd2hlcmUsXG4gICAgICAgIHJlcSxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICB9KTtcblxuICAgICAgcmVzdWx0ID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kPFQ+KHtcbiAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgICB3aGVyZTogZnVsbFdoZXJlLFxuICAgICAgICBwYWdlOiBzYW5pdGl6ZWRQYWdlLFxuICAgICAgICBsaW1pdDogc2FuaXRpemVkTGltaXQsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcGFnaW5hdGlvbixcbiAgICAgICAgcmVxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZVJlYWQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgZG9jczogYXdhaXQgUHJvbWlzZS5hbGwocmVzdWx0LmRvY3MubWFwKGFzeW5jIChkb2MpID0+IHtcbiAgICAgICAgbGV0IGRvY1JlZiA9IGRvYztcblxuICAgICAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmJlZm9yZVJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgICAgICBkb2NSZWYgPSBhd2FpdCBob29rKHtcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHF1ZXJ5OiBmdWxsV2hlcmUsXG4gICAgICAgICAgICBkb2M6IGRvY1JlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIH0pIHx8IGRvY1JlZjtcbiAgICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgICAgIHJldHVybiBkb2NSZWY7XG4gICAgICB9KSksXG4gICAgfTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBkb2NzOiBhd2FpdCBQcm9taXNlLmFsbChyZXN1bHQuZG9jcy5tYXAoYXN5bmMgKGRvYykgPT4gYWZ0ZXJSZWFkPFQ+KHtcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgZG9jLFxuICAgICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgIGZpbmRNYW55OiB0cnVlLFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pKSksXG4gICAgfTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgZG9jczogYXdhaXQgUHJvbWlzZS5hbGwocmVzdWx0LmRvY3MubWFwKGFzeW5jIChkb2MpID0+IHtcbiAgICAgICAgbGV0IGRvY1JlZiA9IGRvYztcblxuICAgICAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmFmdGVyUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgICAgIGRvY1JlZiA9IGF3YWl0IGhvb2soe1xuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgcXVlcnk6IGZ1bGxXaGVyZSxcbiAgICAgICAgICAgIGRvYzogZG9jUmVmLFxuICAgICAgICAgICAgZmluZE1hbnk6IHRydWUsXG4gICAgICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgICAgICB9KSB8fCBkb2M7XG4gICAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgICAgICByZXR1cm4gZG9jUmVmO1xuICAgICAgfSkpLFxuICAgIH07XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgYnVpbGRBZnRlck9wZXJhdGlvbjxUPih7XG4gICAgICBvcGVyYXRpb246ICdmaW5kJyxcbiAgICAgIGFyZ3MsXG4gICAgICByZXN1bHQsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0dXJuIHJlc3VsdHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBwYXlsb2FkLmRiLmNvbW1pdFRyYW5zYWN0aW9uKHJlcS50cmFuc2FjdGlvbklEKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZDtcbiJdLCJuYW1lcyI6WyJmaW5kIiwiaW5jb21pbmdBcmdzIiwiYXJncyIsIndoZXJlIiwicGFnZSIsImxpbWl0IiwiZGVwdGgiLCJjdXJyZW50RGVwdGgiLCJkcmFmdHNFbmFibGVkIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25Db25maWciLCJzb3J0IiwicmVxIiwibG9jYWxlIiwicGF5bG9hZCIsIm92ZXJyaWRlQWNjZXNzIiwiZGlzYWJsZUVycm9ycyIsInNob3dIaWRkZW5GaWVsZHMiLCJwYWdpbmF0aW9uIiwic2hvdWxkQ29tbWl0IiwiYWNjZXNzUmVzdWx0IiwidXNlUGFnaW5hdGlvbiIsInNhbml0aXplZExpbWl0Iiwic2FuaXRpemVkUGFnZSIsInJlc3VsdCIsImZ1bGxXaGVyZSIsImVycm9yIiwiY29uZmlnIiwiaG9va3MiLCJiZWZvcmVPcGVyYXRpb24iLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwib3BlcmF0aW9uIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZHJhZnQiLCJpbml0VHJhbnNhY3Rpb24iLCJleGVjdXRlQWNjZXNzIiwiYWNjZXNzIiwicmVhZCIsImRvY3MiLCJ0b3RhbERvY3MiLCJ0b3RhbFBhZ2VzIiwicGFnaW5nQ291bnRlciIsImhhc1ByZXZQYWdlIiwiaGFzTmV4dFBhZ2UiLCJwcmV2UGFnZSIsIm5leHRQYWdlIiwiY29tYmluZVF1ZXJpZXMiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImFwcGVuZFZlcnNpb25Ub1F1ZXJ5S2V5IiwidmFsaWRhdGVRdWVyeVBhdGhzIiwidmVyc2lvbkZpZWxkcyIsImJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMiLCJkYiIsInF1ZXJ5RHJhZnRzIiwic2x1ZyIsImFsbCIsIm1hcCIsImRvYyIsImRvY1JlZiIsImJlZm9yZVJlYWQiLCJxdWVyeSIsImFmdGVyUmVhZCIsImVudGl0eUNvbmZpZyIsImZpbmRNYW55IiwiYnVpbGRBZnRlck9wZXJhdGlvbiIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCIsImtpbGxUcmFuc2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFvUUE7OztlQUFBOzs7b0VBbFEwQjt5QkFJQTtrQ0FDUzt1Q0FDSztxQ0FDSzs4QkFDZDsrQkFDQzsrQkFDQTtxQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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