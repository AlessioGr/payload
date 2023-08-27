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
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _errors = require("../../errors");
var _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
var _afterRead = require("../../fields/hooks/afterRead");
var _deleteCollectionVersions = require("../../versions/deleteCollectionVersions");
var _deleteAssociatedFiles = require("../../uploads/deleteAssociatedFiles");
var _deleteUserPreferences = require("../../preferences/deleteUserPreferences");
var _validateQueryPaths = require("../../database/queryValidation/validateQueryPaths");
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
function deleteOperation(incomingArgs) {
    return _deleteOperation.apply(this, arguments);
}
function _deleteOperation() {
    _deleteOperation = _async_to_generator(function(incomingArgs) {
        var args, depth, _args_collection, collectionConfig, where, req, _args_req, t, payload, locale, config, overrideAccess, showHiddenFields, shouldCommit, accessResult, fullWhere, docs, errors, promises, awaitedDocs, result, error;
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
                                                    operation: "delete",
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
                    depth = args.depth, _args_collection = args.collection, collectionConfig = _args_collection.config, where = args.where, req = args.req, _args_req = args.req, t = _args_req.t, payload = _args_req.payload, locale = _args_req.locale, config = _args_req.payload.config, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        13,
                        ,
                        15
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
                                                    operation: "delete",
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
                    if (!where) {
                        throw new _errors.APIError("Missing 'where' query of documents to delete.", _httpstatus.default.BAD_REQUEST);
                    }
                    if (!!overrideAccess) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        (0, _executeAccess.default)({
                            req: req
                        }, collectionConfig.access.delete)
                    ];
                case 5:
                    accessResult = _state.sent();
                    _state.label = 6;
                case 6:
                    return [
                        4,
                        (0, _validateQueryPaths.validateQueryPaths)({
                            collectionConfig: collectionConfig,
                            where: where,
                            req: req,
                            overrideAccess: overrideAccess
                        })
                    ];
                case 7:
                    _state.sent();
                    fullWhere = (0, _combineQueries.combineQueries)(where, accessResult);
                    return [
                        4,
                        payload.db.find({
                            locale: locale,
                            where: fullWhere,
                            collection: collectionConfig.slug,
                            req: req
                        })
                    ];
                case 8:
                    docs = _state.sent().docs;
                    errors = [];
                    promises = docs.map(function() {
                        var _ref = _async_to_generator(function(doc) {
                            var result, id, error;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        id = doc.id;
                                        _state.label = 1;
                                    case 1:
                                        _state.trys.push([
                                            1,
                                            8,
                                            ,
                                            9
                                        ]);
                                        // /////////////////////////////////////
                                        // beforeDelete - Collection
                                        // /////////////////////////////////////
                                        return [
                                            4,
                                            collectionConfig.hooks.beforeDelete.reduce(function() {
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
                                                                    2,
                                                                    hook({
                                                                        req: req,
                                                                        id: id,
                                                                        context: req.context
                                                                    })
                                                                ];
                                                        }
                                                    });
                                                });
                                                return function(priorHook, hook) {
                                                    return _ref.apply(this, arguments);
                                                };
                                            }(), Promise.resolve())
                                        ];
                                    case 2:
                                        _state.sent();
                                        return [
                                            4,
                                            (0, _deleteAssociatedFiles.deleteAssociatedFiles)({
                                                config: config,
                                                collectionConfig: collectionConfig,
                                                doc: doc,
                                                t: t,
                                                overrideDelete: true
                                            })
                                        ];
                                    case 3:
                                        _state.sent();
                                        // /////////////////////////////////////
                                        // Delete document
                                        // /////////////////////////////////////
                                        return [
                                            4,
                                            payload.db.deleteOne({
                                                collection: collectionConfig.slug,
                                                where: {
                                                    id: {
                                                        equals: id
                                                    }
                                                },
                                                req: req
                                            })
                                        ];
                                    case 4:
                                        _state.sent();
                                        // /////////////////////////////////////
                                        // Delete versions
                                        // /////////////////////////////////////
                                        if (collectionConfig.versions) {
                                            (0, _deleteCollectionVersions.deleteCollectionVersions)({
                                                payload: payload,
                                                id: id,
                                                slug: collectionConfig.slug,
                                                req: req
                                            });
                                        }
                                        return [
                                            4,
                                            (0, _afterRead.afterRead)({
                                                depth: depth,
                                                doc: result || doc,
                                                entityConfig: collectionConfig,
                                                overrideAccess: overrideAccess,
                                                req: req,
                                                showHiddenFields: showHiddenFields,
                                                context: req.context
                                            })
                                        ];
                                    case 5:
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
                                                                        doc: result || doc,
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
                                    case 6:
                                        _state.sent();
                                        // /////////////////////////////////////
                                        // afterDelete - Collection
                                        // /////////////////////////////////////
                                        return [
                                            4,
                                            collectionConfig.hooks.afterDelete.reduce(function() {
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
                                                                        id: id,
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
                                    case 7:
                                        _state.sent();
                                        // /////////////////////////////////////
                                        // 8. Return results
                                        // /////////////////////////////////////
                                        return [
                                            2,
                                            result
                                        ];
                                    case 8:
                                        error = _state.sent();
                                        errors.push({
                                            message: error.message,
                                            id: doc.id
                                        });
                                        return [
                                            3,
                                            9
                                        ];
                                    case 9:
                                        return [
                                            2,
                                            null
                                        ];
                                }
                            });
                        });
                        return function(doc) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 9:
                    awaitedDocs = _state.sent();
                    // /////////////////////////////////////
                    // Delete Preferences
                    // /////////////////////////////////////
                    (0, _deleteUserPreferences.deleteUserPreferences)({
                        payload: payload,
                        collectionConfig: collectionConfig,
                        ids: docs.map(function(param) {
                            var id = param.id;
                            return id;
                        }),
                        req: req
                    });
                    result = {
                        docs: awaitedDocs.filter(Boolean),
                        errors: errors
                    };
                    return [
                        4,
                        (0, _utils.buildAfterOperation)({
                            operation: "delete",
                            args: args,
                            result: result
                        })
                    ];
                case 10:
                    // /////////////////////////////////////
                    // afterOperation - Collection
                    // /////////////////////////////////////
                    result = _state.sent();
                    if (!shouldCommit) return [
                        3,
                        12
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 11:
                    _state.sent();
                    _state.label = 12;
                case 12:
                    return [
                        2,
                        result
                    ];
                case 13:
                    error = _state.sent();
                    return [
                        4,
                        (0, _killTransaction.killTransaction)(req)
                    ];
                case 14:
                    _state.sent();
                    throw error;
                case 15:
                    return [
                        2
                    ];
            }
        });
    });
    return _deleteOperation.apply(this, arguments);
}
var _default = deleteOperation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2RlbGV0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBBY2Nlc3NSZXN1bHQgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2Vzcyc7XG5pbXBvcnQgeyBCZWZvcmVPcGVyYXRpb25Ib29rLCBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyUmVhZCc7XG5pbXBvcnQgeyBkZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMgfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9kZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMnO1xuaW1wb3J0IHsgZGVsZXRlQXNzb2NpYXRlZEZpbGVzIH0gZnJvbSAnLi4vLi4vdXBsb2Fkcy9kZWxldGVBc3NvY2lhdGVkRmlsZXMnO1xuaW1wb3J0IHsgZGVsZXRlVXNlclByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vcHJlZmVyZW5jZXMvZGVsZXRlVXNlclByZWZlcmVuY2VzJztcbmltcG9ydCB7IHZhbGlkYXRlUXVlcnlQYXRocyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL3F1ZXJ5VmFsaWRhdGlvbi92YWxpZGF0ZVF1ZXJ5UGF0aHMnO1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcyc7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgYnVpbGRBZnRlck9wZXJhdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGRlcHRoPzogbnVtYmVyXG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgd2hlcmU6IFdoZXJlXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU9wZXJhdGlvbjxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgaW5jb21pbmdBcmdzOiBBcmd1bWVudHMsXG4pOiBQcm9taXNlPHtcbiAgZG9jczogR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddW10sXG4gIGVycm9yczoge1xuICAgIG1lc3NhZ2U6IHN0cmluZ1xuICAgIGlkOiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z11bJ2lkJ11cbiAgfVtdXG59PiB7XG4gIGxldCBhcmdzID0gaW5jb21pbmdBcmdzO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gYmVmb3JlT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2s6IEJlZm9yZU9wZXJhdGlvbkhvb2sgfCBQcm9taXNlPHZvaWQ+LCBob29rOiBCZWZvcmVPcGVyYXRpb25Ib29rKSA9PiB7XG4gICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgYXJncyA9IChhd2FpdCBob29rKHtcbiAgICAgIGFyZ3MsXG4gICAgICBvcGVyYXRpb246ICdkZWxldGUnLFxuICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICB9KSkgfHwgYXJncztcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gIGNvbnN0IHtcbiAgICBkZXB0aCxcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBjb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgfSxcbiAgICB3aGVyZSxcbiAgICByZXEsXG4gICAgcmVxOiB7XG4gICAgICB0LFxuICAgICAgcGF5bG9hZCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gIH0gPSBhcmdzO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGFyZ3MuY29sbGVjdGlvbi5jb25maWcuaG9va3MuYmVmb3JlT3BlcmF0aW9uLnJlZHVjZShhc3luYyAocHJpb3JIb29rOiBCZWZvcmVPcGVyYXRpb25Ib29rIHwgUHJvbWlzZTx2b2lkPiwgaG9vazogQmVmb3JlT3BlcmF0aW9uSG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgICBhcmdzLFxuICAgICAgICBvcGVyYXRpb246ICdkZWxldGUnLFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pKSB8fCBhcmdzO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIGlmICghd2hlcmUpIHtcbiAgICAgIHRocm93IG5ldyBBUElFcnJvcignTWlzc2luZyBcXCd3aGVyZVxcJyBxdWVyeSBvZiBkb2N1bWVudHMgdG8gZGVsZXRlLicsIGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgYWNjZXNzUmVzdWx0OiBBY2Nlc3NSZXN1bHQ7XG5cbiAgICBpZiAoIW92ZXJyaWRlQWNjZXNzKSB7XG4gICAgICBhY2Nlc3NSZXN1bHQgPSBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxIH0sIGNvbGxlY3Rpb25Db25maWcuYWNjZXNzLmRlbGV0ZSk7XG4gICAgfVxuXG4gICAgYXdhaXQgdmFsaWRhdGVRdWVyeVBhdGhzKHtcbiAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICB3aGVyZSxcbiAgICAgIHJlcSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZnVsbFdoZXJlID0gY29tYmluZVF1ZXJpZXMod2hlcmUsIGFjY2Vzc1Jlc3VsdCk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0cmlldmUgZG9jdW1lbnRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgeyBkb2NzIH0gPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmQ8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPih7XG4gICAgICBsb2NhbGUsXG4gICAgICB3aGVyZTogZnVsbFdoZXJlLFxuICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgcmVxLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZXJyb3JzID0gW107XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIGNvbnN0IHByb21pc2VzID0gZG9jcy5tYXAoYXN5bmMgKGRvYykgPT4ge1xuICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgY29uc3QgeyBpZCB9ID0gZG9jO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIGJlZm9yZURlbGV0ZSAtIENvbGxlY3Rpb25cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlRGVsZXRlLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICAgICAgcmV0dXJuIGhvb2soe1xuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgICAgIGF3YWl0IGRlbGV0ZUFzc29jaWF0ZWRGaWxlcyh7XG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgICAgZG9jLFxuICAgICAgICAgIHQsXG4gICAgICAgICAgb3ZlcnJpZGVEZWxldGU6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gRGVsZXRlIGRvY3VtZW50XG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICBhd2FpdCBwYXlsb2FkLmRiLmRlbGV0ZU9uZSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDoge1xuICAgICAgICAgICAgICBlcXVhbHM6IGlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBEZWxldGUgdmVyc2lvbnNcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGlmIChjb2xsZWN0aW9uQ29uZmlnLnZlcnNpb25zKSB7XG4gICAgICAgICAgZGVsZXRlQ29sbGVjdGlvblZlcnNpb25zKHtcbiAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHNsdWc6IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICByZXN1bHQgPSBhd2FpdCBhZnRlclJlYWQoe1xuICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgIGRvYzogcmVzdWx0IHx8IGRvYyxcbiAgICAgICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gYWZ0ZXJSZWFkIC0gQ29sbGVjdGlvblxuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCBob29rKHtcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIGRvYzogcmVzdWx0IHx8IGRvYyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIH0pIHx8IHJlc3VsdDtcbiAgICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gYWZ0ZXJEZWxldGUgLSBDb2xsZWN0aW9uXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmFmdGVyRGVsZXRlLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgfSkgfHwgcmVzdWx0O1xuICAgICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyA4LiBSZXR1cm4gcmVzdWx0c1xuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhd2FpdGVkRG9jcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBEZWxldGUgUHJlZmVyZW5jZXNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBkZWxldGVVc2VyUHJlZmVyZW5jZXMoe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBpZHM6IGRvY3MubWFwKCh7IGlkIH0pID0+IGlkKSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBkb2NzOiBhd2FpdGVkRG9jcy5maWx0ZXIoQm9vbGVhbiksXG4gICAgICBlcnJvcnMsXG4gICAgfTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlck9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSBhd2FpdCBidWlsZEFmdGVyT3BlcmF0aW9uPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4oe1xuICAgICAgb3BlcmF0aW9uOiAnZGVsZXRlJyxcbiAgICAgIGFyZ3MsXG4gICAgICByZXN1bHQsXG4gICAgfSk7XG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBwYXlsb2FkLmRiLmNvbW1pdFRyYW5zYWN0aW9uKHJlcS50cmFuc2FjdGlvbklEKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlT3BlcmF0aW9uO1xuIl0sIm5hbWVzIjpbImRlbGV0ZU9wZXJhdGlvbiIsImluY29taW5nQXJncyIsImFyZ3MiLCJkZXB0aCIsImNvbGxlY3Rpb25Db25maWciLCJ3aGVyZSIsInJlcSIsInQiLCJwYXlsb2FkIiwibG9jYWxlIiwiY29uZmlnIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwic2hvdWxkQ29tbWl0IiwiYWNjZXNzUmVzdWx0IiwiZnVsbFdoZXJlIiwiZG9jcyIsImVycm9ycyIsInByb21pc2VzIiwiYXdhaXRlZERvY3MiLCJyZXN1bHQiLCJlcnJvciIsImNvbGxlY3Rpb24iLCJob29rcyIsImJlZm9yZU9wZXJhdGlvbiIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJvcGVyYXRpb24iLCJjb250ZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbml0VHJhbnNhY3Rpb24iLCJBUElFcnJvciIsImh0dHBTdGF0dXMiLCJCQURfUkVRVUVTVCIsImV4ZWN1dGVBY2Nlc3MiLCJhY2Nlc3MiLCJkZWxldGUiLCJ2YWxpZGF0ZVF1ZXJ5UGF0aHMiLCJjb21iaW5lUXVlcmllcyIsImRiIiwiZmluZCIsInNsdWciLCJtYXAiLCJkb2MiLCJpZCIsImJlZm9yZURlbGV0ZSIsImRlbGV0ZUFzc29jaWF0ZWRGaWxlcyIsIm92ZXJyaWRlRGVsZXRlIiwiZGVsZXRlT25lIiwiZXF1YWxzIiwidmVyc2lvbnMiLCJkZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMiLCJhZnRlclJlYWQiLCJlbnRpdHlDb25maWciLCJhZnRlckRlbGV0ZSIsInB1c2giLCJtZXNzYWdlIiwiYWxsIiwiZGVsZXRlVXNlclByZWZlcmVuY2VzIiwiaWRzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImJ1aWxkQWZ0ZXJPcGVyYXRpb24iLCJjb21taXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSUQiLCJraWxsVHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBa1JBOzs7ZUFBQTs7O2lFQWpSdUI7c0JBR0U7b0VBQ0M7eUJBR0E7d0NBQ2U7cUNBQ0g7cUNBQ0E7a0NBQ0g7OEJBQ0o7K0JBQ0M7K0JBQ0E7cUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FXckJBLGdCQUNiQyxZQUF1QjtXQURWRDs7U0FBQUE7SUFBQUEsbUJBQWYsb0JBQUEsU0FDRUMsWUFBdUI7WUFRbkJDLE1BaUJGQyx5QkFFVUMsa0JBRVZDLE9BQ0FDLGdCQUVFQyxHQUNBQyxTQUNBQyxRQUVFQyxRQUdKQyxnQkFDQUMsa0JBSU1DLGNBd0JGQyxjQWFFQyxXQU1FQyxNQU9GQyxRQUdBQyxVQWdIQUMsYUFhRkMsUUFrQkdDOzs7O29CQXhPTG5CLE9BQU9EO29CQUVYLHdDQUF3QztvQkFDeEMsK0JBQStCO29CQUMvQix3Q0FBd0M7b0JBRXhDOzt3QkFBTUMsS0FBS29C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