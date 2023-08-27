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
var _buildCollectionFields = require("../../versions/buildCollectionFields");
var _validateQueryPaths = require("../../database/queryValidation/validateQueryPaths");
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
        var where, page, limit, depth, _args_collection, collectionConfig, sort, req, _args_req, locale, payload, overrideAccess, showHiddenFields, shouldCommit, accessResults, versionFields, fullWhere, paginatedDocs, result, _tmp, _tmp1, _tmp2, _tmp3, _tmp4, _tmp5, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    where = args.where, page = args.page, limit = args.limit, depth = args.depth, _args_collection = args.collection, collectionConfig = _args_collection.config, sort = args.sort, req = args.req, _args_req = args.req, locale = _args_req.locale, payload = _args_req.payload, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields;
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
                        }, collectionConfig.access.readVersions)
                    ];
                case 3:
                    accessResults = _state.sent();
                    _state.label = 4;
                case 4:
                    versionFields = (0, _buildCollectionFields.buildVersionCollectionFields)(collectionConfig);
                    return [
                        4,
                        (0, _validateQueryPaths.validateQueryPaths)({
                            collectionConfig: collectionConfig,
                            versionFields: versionFields,
                            where: where,
                            req: req,
                            overrideAccess: overrideAccess
                        })
                    ];
                case 5:
                    _state.sent();
                    fullWhere = (0, _combineQueries.combineQueries)(where, accessResults);
                    return [
                        4,
                        payload.db.findVersions({
                            where: fullWhere,
                            page: page || 1,
                            limit: limit !== null && limit !== void 0 ? limit : 10,
                            collection: collectionConfig.slug,
                            sort: sort,
                            locale: locale,
                            req: req
                        })
                    ];
                case 6:
                    paginatedDocs = _state.sent();
                    _tmp = [
                        _object_spread({}, paginatedDocs)
                    ];
                    _tmp1 = {};
                    return [
                        4,
                        Promise.all(paginatedDocs.docs.map(function() {
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
                                                                            doc: docRef.version,
                                                                            context: req.context
                                                                        })
                                                                    ];
                                                                case 2:
                                                                    docRef.version = _state.sent() || docRef.version;
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
                case 7:
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
                                                    entityConfig: collectionConfig,
                                                    overrideAccess: overrideAccess,
                                                    req: req,
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
                                                                            doc: doc.version,
                                                                            findMany: true,
                                                                            context: req.context
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
                    // afterRead - Collection
                    // /////////////////////////////////////
                    result = _object_spread_props.apply(void 0, _tmp4.concat([
                        (_tmp5.docs = _state.sent(), _tmp5)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2ZpbmRWZXJzaW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaGVyZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgZXhlY3V0ZUFjY2VzcyBmcm9tICcuLi8uLi9hdXRoL2V4ZWN1dGVBY2Nlc3MnO1xuaW1wb3J0IHNhbml0aXplSW50ZXJuYWxGaWVsZHMgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3Nhbml0aXplSW50ZXJuYWxGaWVsZHMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFBhZ2luYXRlZERvY3MgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS90eXBlcyc7XG5pbXBvcnQgeyBUeXBlV2l0aFZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy90eXBlcyc7XG5pbXBvcnQgeyBhZnRlclJlYWQgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkJztcbmltcG9ydCB7IGJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMgfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9idWlsZENvbGxlY3Rpb25GaWVsZHMnO1xuaW1wb3J0IHsgdmFsaWRhdGVRdWVyeVBhdGhzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvcXVlcnlWYWxpZGF0aW9uL3ZhbGlkYXRlUXVlcnlQYXRocyc7XG5pbXBvcnQgeyBjb21iaW5lUXVlcmllcyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL2NvbWJpbmVRdWVyaWVzJztcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5cbmV4cG9ydCB0eXBlIEFyZ3VtZW50cyA9IHtcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvblxuICB3aGVyZT86IFdoZXJlXG4gIHBhZ2U/OiBudW1iZXJcbiAgbGltaXQ/OiBudW1iZXJcbiAgc29ydD86IHN0cmluZ1xuICBkZXB0aD86IG51bWJlclxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmluZFZlcnNpb25zPFQgZXh0ZW5kcyBUeXBlV2l0aFZlcnNpb248VD4+KFxuICBhcmdzOiBBcmd1bWVudHMsXG4pOiBQcm9taXNlPFBhZ2luYXRlZERvY3M8VD4+IHtcbiAgY29uc3Qge1xuICAgIHdoZXJlLFxuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgZGVwdGgsXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgIH0sXG4gICAgc29ydCxcbiAgICByZXEsXG4gICAgcmVxOiB7XG4gICAgICBsb2NhbGUsXG4gICAgICBwYXlsb2FkLFxuICAgIH0sXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgfSA9IGFyZ3M7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgYWNjZXNzUmVzdWx0cztcblxuICAgIGlmICghb3ZlcnJpZGVBY2Nlc3MpIHtcbiAgICAgIGFjY2Vzc1Jlc3VsdHMgPSBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxIH0sIGNvbGxlY3Rpb25Db25maWcuYWNjZXNzLnJlYWRWZXJzaW9ucyk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVyc2lvbkZpZWxkcyA9IGJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMoY29sbGVjdGlvbkNvbmZpZyk7XG5cbiAgICBhd2FpdCB2YWxpZGF0ZVF1ZXJ5UGF0aHMoe1xuICAgICAgY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIHZlcnNpb25GaWVsZHMsXG4gICAgICB3aGVyZSxcbiAgICAgIHJlcSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZnVsbFdoZXJlID0gY29tYmluZVF1ZXJpZXMod2hlcmUsIGFjY2Vzc1Jlc3VsdHMpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEZpbmRcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBwYWdpbmF0ZWREb2NzID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kVmVyc2lvbnM8VD4oe1xuICAgICAgd2hlcmU6IGZ1bGxXaGVyZSxcbiAgICAgIHBhZ2U6IHBhZ2UgfHwgMSxcbiAgICAgIGxpbWl0OiBsaW1pdCA/PyAxMCxcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIHNvcnQsXG4gICAgICBsb2NhbGUsXG4gICAgICByZXEsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlUmVhZCAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgLi4ucGFnaW5hdGVkRG9jcyxcbiAgICAgIGRvY3M6IGF3YWl0IFByb21pc2UuYWxsKHBhZ2luYXRlZERvY3MuZG9jcy5tYXAoYXN5bmMgKGRvYykgPT4ge1xuICAgICAgICBjb25zdCBkb2NSZWYgPSBkb2M7XG4gICAgICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgICAgIGRvY1JlZi52ZXJzaW9uID0gYXdhaXQgaG9vayh7XG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBxdWVyeTogZnVsbFdoZXJlLFxuICAgICAgICAgICAgZG9jOiBkb2NSZWYudmVyc2lvbixcbiAgICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIH0pIHx8IGRvY1JlZi52ZXJzaW9uO1xuICAgICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAgICAgcmV0dXJuIGRvY1JlZjtcbiAgICAgIH0pKSxcbiAgICB9IGFzIFBhZ2luYXRlZERvY3M8VD47XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgZG9jczogYXdhaXQgUHJvbWlzZS5hbGwocmVzdWx0LmRvY3MubWFwKGFzeW5jIChkYXRhKSA9PiAoe1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICB2ZXJzaW9uOiBhd2FpdCBhZnRlclJlYWQoe1xuICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgIGRvYzogZGF0YS52ZXJzaW9uLFxuICAgICAgICAgIGVudGl0eUNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICBmaW5kTWFueTogdHJ1ZSxcbiAgICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgICAgfSksXG4gICAgICB9KSkpLFxuICAgIH07XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRvY3M6IGF3YWl0IFByb21pc2UuYWxsKHJlc3VsdC5kb2NzLm1hcChhc3luYyAoZG9jKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYztcblxuICAgICAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmFmdGVyUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgICAgIGRvY1JlZi52ZXJzaW9uID0gYXdhaXQgaG9vayh7XG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBxdWVyeTogZnVsbFdoZXJlLFxuICAgICAgICAgICAgZG9jOiBkb2MudmVyc2lvbixcbiAgICAgICAgICAgIGZpbmRNYW55OiB0cnVlLFxuICAgICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgfSkgfHwgZG9jLnZlcnNpb247XG4gICAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgICAgICByZXR1cm4gZG9jUmVmO1xuICAgICAgfSkpLFxuICAgIH07XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0dXJuIHJlc3VsdHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBkb2NzOiByZXN1bHQuZG9jcy5tYXAoKGRvYykgPT4gc2FuaXRpemVJbnRlcm5hbEZpZWxkczxUPihkb2MpKSxcbiAgICB9O1xuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgcGF5bG9hZC5kYi5jb21taXRUcmFuc2FjdGlvbihyZXEudHJhbnNhY3Rpb25JRCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRWZXJzaW9ucztcbiJdLCJuYW1lcyI6WyJmaW5kVmVyc2lvbnMiLCJhcmdzIiwid2hlcmUiLCJwYWdlIiwibGltaXQiLCJkZXB0aCIsImNvbGxlY3Rpb25Db25maWciLCJzb3J0IiwicmVxIiwibG9jYWxlIiwicGF5bG9hZCIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsInNob3VsZENvbW1pdCIsImFjY2Vzc1Jlc3VsdHMiLCJ2ZXJzaW9uRmllbGRzIiwiZnVsbFdoZXJlIiwicGFnaW5hdGVkRG9jcyIsInJlc3VsdCIsImVycm9yIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsImluaXRUcmFuc2FjdGlvbiIsImV4ZWN1dGVBY2Nlc3MiLCJhY2Nlc3MiLCJyZWFkVmVyc2lvbnMiLCJidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzIiwidmFsaWRhdGVRdWVyeVBhdGhzIiwiY29tYmluZVF1ZXJpZXMiLCJkYiIsInNsdWciLCJQcm9taXNlIiwiYWxsIiwiZG9jcyIsIm1hcCIsImRvYyIsImRvY1JlZiIsImhvb2tzIiwiYmVmb3JlUmVhZCIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJxdWVyeSIsInZlcnNpb24iLCJjb250ZXh0IiwicmVzb2x2ZSIsImRhdGEiLCJhZnRlclJlYWQiLCJlbnRpdHlDb25maWciLCJmaW5kTWFueSIsInNhbml0aXplSW50ZXJuYWxGaWVsZHMiLCJjb21taXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSUQiLCJraWxsVHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBNktBOzs7ZUFBQTs7O29FQTNLMEI7NkVBQ1M7eUJBSVQ7cUNBQ21CO2tDQUNWOzhCQUNKOytCQUNDOytCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWNqQkEsYUFDYkMsSUFBZTtXQURGRDs7U0FBQUE7SUFBQUEsZ0JBQWYsb0JBQUEsU0FDRUMsSUFBZTtZQUdiQyxPQUNBQyxNQUNBQyxPQUNBQyx5QkFFVUMsa0JBRVZDLE1BQ0FDLGdCQUVFQyxRQUNBQyxTQUVGQyxnQkFDQUMsa0JBSU1DLGNBTUZDLGVBTUVDLGVBVUFDLFdBTUFDLGVBY0ZDLGlEQTZFR0M7Ozs7b0JBeklQakIsUUFlRUQsS0FmRkMsT0FDQUMsT0FjRUYsS0FkRkUsTUFDQUMsUUFhRUgsS0FiRkcsT0FDQUMsUUFZRUosS0FaRkksMEJBWUVKLEtBWEZtQixZQUNVZCxvQ0FBUmUsUUFFRmQsT0FRRU4sS0FSRk0sTUFDQUMsTUFPRVAsS0FQRk8saUJBT0VQLEtBTkZPLEtBQ0VDLG1CQUFBQSxRQUNBQyxvQkFBQUEsU0FFRkMsaUJBRUVWLEtBRkZVLGdCQUNBQyxtQkFDRVgsS0FERlc7Ozs7Ozs7OztvQkFJcUI7O3dCQUFNVSxJQUFBQSxnQ0FBZSxFQUFDZDs7O29CQUFyQ0ssZUFBZTt5QkFRakIsQ0FBQ0YsZ0JBQUQ7Ozs7b0JBQ2M7O3dCQUFNWSxJQUFBQSxzQkFBYSxFQUFDOzRCQUFFZixLQUFBQTt3QkFBSSxHQUFHRixpQkFBaUJrQixNQUFNLENBQUNDLFlBQVk7OztvQkFBakZYLGdCQUFnQjs7O29CQUdaQyxnQkFBZ0JX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