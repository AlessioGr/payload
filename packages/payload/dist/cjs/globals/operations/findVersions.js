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
var _sanitizeInternalFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/sanitizeInternalFields"));
var _afterRead = require("../../fields/hooks/afterRead");
var _buildGlobalFields = require("../../versions/buildGlobalFields");
var _validateQueryPaths = require("../../database/queryValidation/validateQueryPaths");
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
function findVersions(args) {
    return _findVersions.apply(this, arguments);
}
function _findVersions() {
    _findVersions = _async_to_generator(function(args) {
        var where, page, limit, depth, globalConfig, sort, req, _args_req, locale, payload, overrideAccess, showHiddenFields, versionFields, shouldCommit, accessResults, _tmp, fullWhere, paginatedDocs, result, _tmp1, _tmp2, _tmp3, _tmp4, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    where = args.where, page = args.page, limit = args.limit, depth = args.depth, globalConfig = args.globalConfig, sort = args.sort, req = args.req, _args_req = args.req, locale = _args_req.locale, payload = _args_req.payload, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields;
                    versionFields = (0, _buildGlobalFields.buildVersionGlobalFields)(globalConfig);
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
                            req: req
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
                    return [
                        4,
                        (0, _validateQueryPaths.validateQueryPaths)({
                            globalConfig: globalConfig,
                            versionFields: versionFields,
                            where: where,
                            req: req,
                            overrideAccess: overrideAccess
                        })
                    ];
                case 6:
                    _state.sent();
                    fullWhere = (0, _combineQueries.combineQueries)(where, accessResults);
                    return [
                        4,
                        payload.db.findGlobalVersions({
                            where: fullWhere,
                            page: page || 1,
                            limit: limit !== null && limit !== void 0 ? limit : 10,
                            sort: sort,
                            global: globalConfig.slug,
                            locale: locale,
                            req: req
                        })
                    ];
                case 7:
                    paginatedDocs = _state.sent();
                    _tmp1 = [
                        _object_spread({}, paginatedDocs)
                    ];
                    _tmp2 = {};
                    return [
                        4,
                        Promise.all(paginatedDocs.docs.map(function() {
                            var _ref = _async_to_generator(function(data) {
                                var _tmp, _tmp1;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _tmp = [
                                                _object_spread({}, data)
                                            ];
                                            _tmp1 = {};
                                            return [
                                                4,
                                                (0, _afterRead.afterRead)({
                                                    depth: depth,
                                                    doc: data.version,
                                                    entityConfig: globalConfig,
                                                    req: req,
                                                    overrideAccess: overrideAccess,
                                                    showHiddenFields: showHiddenFields,
                                                    findMany: true,
                                                    context: req.context
                                                })
                                            ];
                                        case 1:
                                            return [
                                                2,
                                                _object_spread_props.apply(void 0, _tmp.concat([
                                                    (_tmp1.version = _state.sent(), _tmp1)
                                                ]))
                                            ];
                                    }
                                });
                            });
                            return function(data) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 8:
                    result = _object_spread_props.apply(void 0, _tmp1.concat([
                        (_tmp2.docs = _state.sent(), _tmp2)
                    ]));
                    _tmp3 = [
                        _object_spread({}, result)
                    ];
                    _tmp4 = {};
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
                                                                            query: fullWhere,
                                                                            doc: doc.version,
                                                                            findMany: true
                                                                        })
                                                                    ];
                                                                case 2:
                                                                    docRef.version = _state.sent() || doc.version;
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
                case 9:
                    // /////////////////////////////////////
                    // afterRead - Global
                    // /////////////////////////////////////
                    result = _object_spread_props.apply(void 0, _tmp3.concat([
                        (_tmp4.docs = _state.sent(), _tmp4)
                    ]));
                    // /////////////////////////////////////
                    // Return results
                    // /////////////////////////////////////
                    result = _object_spread_props(_object_spread({}, result), {
                        docs: result.docs.map(function(doc) {
                            return (0, _sanitizeInternalFields.default)(doc);
                        })
                    });
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
    return _findVersions.apply(this, arguments);
}
var _default = findVersions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvZmluZFZlcnNpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2Vzcyc7XG5pbXBvcnQgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyBmcm9tICcuLi8uLi91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcyc7XG5pbXBvcnQgdHlwZSB7IFBhZ2luYXRlZERvY3MgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgYWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyUmVhZCc7XG5pbXBvcnQgeyBidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMgfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9idWlsZEdsb2JhbEZpZWxkcyc7XG5pbXBvcnQgeyBUeXBlV2l0aFZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy90eXBlcyc7XG5pbXBvcnQgeyB2YWxpZGF0ZVF1ZXJ5UGF0aHMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9xdWVyeVZhbGlkYXRpb24vdmFsaWRhdGVRdWVyeVBhdGhzJztcbmltcG9ydCB7IGNvbWJpbmVRdWVyaWVzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvY29tYmluZVF1ZXJpZXMnO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICB3aGVyZT86IFdoZXJlXG4gIHBhZ2U/OiBudW1iZXJcbiAgbGltaXQ/OiBudW1iZXJcbiAgc29ydD86IHN0cmluZ1xuICBkZXB0aD86IG51bWJlclxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmluZFZlcnNpb25zPFQgZXh0ZW5kcyBUeXBlV2l0aFZlcnNpb248VD4+KFxuICBhcmdzOiBBcmd1bWVudHMsXG4pOiBQcm9taXNlPFBhZ2luYXRlZERvY3M8VD4+IHtcbiAgY29uc3Qge1xuICAgIHdoZXJlLFxuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgZGVwdGgsXG4gICAgZ2xvYmFsQ29uZmlnLFxuICAgIHNvcnQsXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgbG9jYWxlLFxuICAgICAgcGF5bG9hZCxcbiAgICB9LFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gIH0gPSBhcmdzO1xuXG4gIGNvbnN0IHZlcnNpb25GaWVsZHMgPSBidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMoZ2xvYmFsQ29uZmlnKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxIH0sIGdsb2JhbENvbmZpZy5hY2Nlc3MucmVhZFZlcnNpb25zKSA6IHRydWU7XG5cbiAgICBhd2FpdCB2YWxpZGF0ZVF1ZXJ5UGF0aHMoe1xuICAgICAgZ2xvYmFsQ29uZmlnLFxuICAgICAgdmVyc2lvbkZpZWxkcyxcbiAgICAgIHdoZXJlLFxuICAgICAgcmVxLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgfSk7XG5cbiAgICBjb25zdCBmdWxsV2hlcmUgPSBjb21iaW5lUXVlcmllcyh3aGVyZSwgYWNjZXNzUmVzdWx0cyk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRmluZFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHBhZ2luYXRlZERvY3MgPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRHbG9iYWxWZXJzaW9uczxUPih7XG4gICAgICB3aGVyZTogZnVsbFdoZXJlLFxuICAgICAgcGFnZTogcGFnZSB8fCAxLFxuICAgICAgbGltaXQ6IGxpbWl0ID8/IDEwLFxuICAgICAgc29ydCxcbiAgICAgIGdsb2JhbDogZ2xvYmFsQ29uZmlnLnNsdWcsXG4gICAgICBsb2NhbGUsXG4gICAgICByZXEsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIC4uLnBhZ2luYXRlZERvY3MsXG4gICAgICBkb2NzOiBhd2FpdCBQcm9taXNlLmFsbChwYWdpbmF0ZWREb2NzLmRvY3MubWFwKGFzeW5jIChkYXRhKSA9PiAoe1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICB2ZXJzaW9uOiBhd2FpdCBhZnRlclJlYWQoe1xuICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgIGRvYzogZGF0YS52ZXJzaW9uLFxuICAgICAgICAgIGVudGl0eUNvbmZpZzogZ2xvYmFsQ29uZmlnLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgIGZpbmRNYW55OiB0cnVlLFxuICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICB9KSxcbiAgICAgIH0pKSksXG4gICAgfSBhcyBQYWdpbmF0ZWREb2NzPFQ+O1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRvY3M6IGF3YWl0IFByb21pc2UuYWxsKHJlc3VsdC5kb2NzLm1hcChhc3luYyAoZG9jKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYztcblxuICAgICAgICBhd2FpdCBnbG9iYWxDb25maWcuaG9va3MuYWZ0ZXJSZWFkLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICAgICAgZG9jUmVmLnZlcnNpb24gPSBhd2FpdCBob29rKHsgcmVxLCBxdWVyeTogZnVsbFdoZXJlLCBkb2M6IGRvYy52ZXJzaW9uLCBmaW5kTWFueTogdHJ1ZSB9KSB8fCBkb2MudmVyc2lvbjtcbiAgICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgICAgIHJldHVybiBkb2NSZWY7XG4gICAgICB9KSksXG4gICAgfTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXR1cm4gcmVzdWx0c1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRvY3M6IHJlc3VsdC5kb2NzLm1hcCgoZG9jKSA9PiBzYW5pdGl6ZUludGVybmFsRmllbGRzPFQ+KGRvYykpLFxuICAgIH07XG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBwYXlsb2FkLmRiLmNvbW1pdFRyYW5zYWN0aW9uKHJlcS50cmFuc2FjdGlvbklEKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZFZlcnNpb25zO1xuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9ucyIsImFyZ3MiLCJ3aGVyZSIsInBhZ2UiLCJsaW1pdCIsImRlcHRoIiwiZ2xvYmFsQ29uZmlnIiwic29ydCIsInJlcSIsImxvY2FsZSIsInBheWxvYWQiLCJvdmVycmlkZUFjY2VzcyIsInNob3dIaWRkZW5GaWVsZHMiLCJ2ZXJzaW9uRmllbGRzIiwic2hvdWxkQ29tbWl0IiwiYWNjZXNzUmVzdWx0cyIsImZ1bGxXaGVyZSIsInBhZ2luYXRlZERvY3MiLCJyZXN1bHQiLCJlcnJvciIsImJ1aWxkVmVyc2lvbkdsb2JhbEZpZWxkcyIsImluaXRUcmFuc2FjdGlvbiIsImV4ZWN1dGVBY2Nlc3MiLCJhY2Nlc3MiLCJyZWFkVmVyc2lvbnMiLCJ2YWxpZGF0ZVF1ZXJ5UGF0aHMiLCJjb21iaW5lUXVlcmllcyIsImRiIiwiZmluZEdsb2JhbFZlcnNpb25zIiwiZ2xvYmFsIiwic2x1ZyIsIlByb21pc2UiLCJhbGwiLCJkb2NzIiwibWFwIiwiZGF0YSIsImFmdGVyUmVhZCIsImRvYyIsInZlcnNpb24iLCJlbnRpdHlDb25maWciLCJmaW5kTWFueSIsImNvbnRleHQiLCJkb2NSZWYiLCJob29rcyIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJxdWVyeSIsInJlc29sdmUiLCJzYW5pdGl6ZUludGVybmFsRmllbGRzIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbklEIiwia2lsbFRyYW5zYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQTBJQTs7O2VBQUE7OztvRUF4STBCOzZFQUNTO3lCQUdUO2lDQUNlO2tDQUVOOzhCQUNKOytCQUNDOytCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWNqQkEsYUFDYkMsSUFBZTtXQURGRDs7U0FBQUE7SUFBQUEsZ0JBQWYsb0JBQUEsU0FDRUMsSUFBZTtZQUdiQyxPQUNBQyxNQUNBQyxPQUNBQyxPQUNBQyxjQUNBQyxNQUNBQyxnQkFFRUMsUUFDQUMsU0FFRkMsZ0JBQ0FDLGtCQUdJQyxlQUdFQyxjQU1BQyxxQkFVQUMsV0FNQUMsZUFjRkMsb0NBZ0RHQzs7OztvQkF0R1BqQixRQWFFRCxLQWJGQyxPQUNBQyxPQVlFRixLQVpGRSxNQUNBQyxRQVdFSCxLQVhGRyxPQUNBQyxRQVVFSixLQVZGSSxPQUNBQyxlQVNFTCxLQVRGSyxjQUNBQyxPQVFFTixLQVJGTSxNQUNBQyxNQU9FUCxLQVBGTyxpQkFPRVAsS0FORk8sS0FDRUMsbUJBQUFBLFFBQ0FDLG9CQUFBQSxTQUVGQyxpQkFFRVYsS0FGRlUsZ0JBQ0FDLG1CQUNFWCxLQURGVztvQkFHSUMsZ0JBQWdCTyxJQUFBQSwyQ0FBd0IsRUFBQ2Q7Ozs7Ozs7OztvQkFHeEI7O3dCQUFNZSxJQUFBQSxnQ0FBZSxFQUFDYjs7O29CQUFyQ00sZUFBZTt5QkFNQyxDQUFDSCxnQkFBRDs7OztvQkFBa0I7O3dCQUFNVyxJQUFBQSxzQkFBYSxFQUFDOzRCQUFF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