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
import { APIError } from "../../errors";
import executeAccess from "../../auth/executeAccess";
import { afterRead } from "../../fields/hooks/afterRead";
import { deleteCollectionVersions } from "../../versions/deleteCollectionVersions";
import { deleteAssociatedFiles } from "../../uploads/deleteAssociatedFiles";
import { deleteUserPreferences } from "../../preferences/deleteUserPreferences";
import { validateQueryPaths } from "../../database/queryValidation/validateQueryPaths";
import { combineQueries } from "../../database/combineQueries";
import { initTransaction } from "../../utilities/initTransaction";
import { killTransaction } from "../../utilities/killTransaction";
import { buildAfterOperation } from "./utils";
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
                        initTransaction(req)
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
                        throw new APIError("Missing 'where' query of documents to delete.", httpStatus.BAD_REQUEST);
                    }
                    if (!!overrideAccess) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        executeAccess({
                            req: req
                        }, collectionConfig.access.delete)
                    ];
                case 5:
                    accessResult = _state.sent();
                    _state.label = 6;
                case 6:
                    return [
                        4,
                        validateQueryPaths({
                            collectionConfig: collectionConfig,
                            where: where,
                            req: req,
                            overrideAccess: overrideAccess
                        })
                    ];
                case 7:
                    _state.sent();
                    fullWhere = combineQueries(where, accessResult);
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
                                            deleteAssociatedFiles({
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
                                            deleteCollectionVersions({
                                                payload: payload,
                                                id: id,
                                                slug: collectionConfig.slug,
                                                req: req
                                            });
                                        }
                                        return [
                                            4,
                                            afterRead({
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
                    deleteUserPreferences({
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
                        buildAfterOperation({
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
                        killTransaction(req)
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
export default deleteOperation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2RlbGV0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBBY2Nlc3NSZXN1bHQgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2Vzcyc7XG5pbXBvcnQgeyBCZWZvcmVPcGVyYXRpb25Ib29rLCBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyUmVhZCc7XG5pbXBvcnQgeyBkZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMgfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9kZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMnO1xuaW1wb3J0IHsgZGVsZXRlQXNzb2NpYXRlZEZpbGVzIH0gZnJvbSAnLi4vLi4vdXBsb2Fkcy9kZWxldGVBc3NvY2lhdGVkRmlsZXMnO1xuaW1wb3J0IHsgZGVsZXRlVXNlclByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vcHJlZmVyZW5jZXMvZGVsZXRlVXNlclByZWZlcmVuY2VzJztcbmltcG9ydCB7IHZhbGlkYXRlUXVlcnlQYXRocyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL3F1ZXJ5VmFsaWRhdGlvbi92YWxpZGF0ZVF1ZXJ5UGF0aHMnO1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcyc7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgYnVpbGRBZnRlck9wZXJhdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGRlcHRoPzogbnVtYmVyXG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgd2hlcmU6IFdoZXJlXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU9wZXJhdGlvbjxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgaW5jb21pbmdBcmdzOiBBcmd1bWVudHMsXG4pOiBQcm9taXNlPHtcbiAgZG9jczogR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddW10sXG4gIGVycm9yczoge1xuICAgIG1lc3NhZ2U6IHN0cmluZ1xuICAgIGlkOiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z11bJ2lkJ11cbiAgfVtdXG59PiB7XG4gIGxldCBhcmdzID0gaW5jb21pbmdBcmdzO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gYmVmb3JlT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2s6IEJlZm9yZU9wZXJhdGlvbkhvb2sgfCBQcm9taXNlPHZvaWQ+LCBob29rOiBCZWZvcmVPcGVyYXRpb25Ib29rKSA9PiB7XG4gICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgYXJncyA9IChhd2FpdCBob29rKHtcbiAgICAgIGFyZ3MsXG4gICAgICBvcGVyYXRpb246ICdkZWxldGUnLFxuICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICB9KSkgfHwgYXJncztcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gIGNvbnN0IHtcbiAgICBkZXB0aCxcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBjb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgfSxcbiAgICB3aGVyZSxcbiAgICByZXEsXG4gICAgcmVxOiB7XG4gICAgICB0LFxuICAgICAgcGF5bG9hZCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gIH0gPSBhcmdzO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGFyZ3MuY29sbGVjdGlvbi5jb25maWcuaG9va3MuYmVmb3JlT3BlcmF0aW9uLnJlZHVjZShhc3luYyAocHJpb3JIb29rOiBCZWZvcmVPcGVyYXRpb25Ib29rIHwgUHJvbWlzZTx2b2lkPiwgaG9vazogQmVmb3JlT3BlcmF0aW9uSG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgICBhcmdzLFxuICAgICAgICBvcGVyYXRpb246ICdkZWxldGUnLFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pKSB8fCBhcmdzO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIGlmICghd2hlcmUpIHtcbiAgICAgIHRocm93IG5ldyBBUElFcnJvcignTWlzc2luZyBcXCd3aGVyZVxcJyBxdWVyeSBvZiBkb2N1bWVudHMgdG8gZGVsZXRlLicsIGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgYWNjZXNzUmVzdWx0OiBBY2Nlc3NSZXN1bHQ7XG5cbiAgICBpZiAoIW92ZXJyaWRlQWNjZXNzKSB7XG4gICAgICBhY2Nlc3NSZXN1bHQgPSBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxIH0sIGNvbGxlY3Rpb25Db25maWcuYWNjZXNzLmRlbGV0ZSk7XG4gICAgfVxuXG4gICAgYXdhaXQgdmFsaWRhdGVRdWVyeVBhdGhzKHtcbiAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICB3aGVyZSxcbiAgICAgIHJlcSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZnVsbFdoZXJlID0gY29tYmluZVF1ZXJpZXMod2hlcmUsIGFjY2Vzc1Jlc3VsdCk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0cmlldmUgZG9jdW1lbnRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgeyBkb2NzIH0gPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmQ8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPih7XG4gICAgICBsb2NhbGUsXG4gICAgICB3aGVyZTogZnVsbFdoZXJlLFxuICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgcmVxLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZXJyb3JzID0gW107XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIGNvbnN0IHByb21pc2VzID0gZG9jcy5tYXAoYXN5bmMgKGRvYykgPT4ge1xuICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgY29uc3QgeyBpZCB9ID0gZG9jO1xuXG4gICAgICB0cnkge1xuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIGJlZm9yZURlbGV0ZSAtIENvbGxlY3Rpb25cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlRGVsZXRlLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICAgICAgcmV0dXJuIGhvb2soe1xuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgICAgIGF3YWl0IGRlbGV0ZUFzc29jaWF0ZWRGaWxlcyh7XG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgICAgZG9jLFxuICAgICAgICAgIHQsXG4gICAgICAgICAgb3ZlcnJpZGVEZWxldGU6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gRGVsZXRlIGRvY3VtZW50XG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICBhd2FpdCBwYXlsb2FkLmRiLmRlbGV0ZU9uZSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDoge1xuICAgICAgICAgICAgICBlcXVhbHM6IGlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBEZWxldGUgdmVyc2lvbnNcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGlmIChjb2xsZWN0aW9uQ29uZmlnLnZlcnNpb25zKSB7XG4gICAgICAgICAgZGVsZXRlQ29sbGVjdGlvblZlcnNpb25zKHtcbiAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHNsdWc6IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICByZXN1bHQgPSBhd2FpdCBhZnRlclJlYWQoe1xuICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgIGRvYzogcmVzdWx0IHx8IGRvYyxcbiAgICAgICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gYWZ0ZXJSZWFkIC0gQ29sbGVjdGlvblxuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCBob29rKHtcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIGRvYzogcmVzdWx0IHx8IGRvYyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIH0pIHx8IHJlc3VsdDtcbiAgICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gYWZ0ZXJEZWxldGUgLSBDb2xsZWN0aW9uXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmFmdGVyRGVsZXRlLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgICAgfSkgfHwgcmVzdWx0O1xuICAgICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyA4LiBSZXR1cm4gcmVzdWx0c1xuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHtcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhd2FpdGVkRG9jcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBEZWxldGUgUHJlZmVyZW5jZXNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBkZWxldGVVc2VyUHJlZmVyZW5jZXMoe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBpZHM6IGRvY3MubWFwKCh7IGlkIH0pID0+IGlkKSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBkb2NzOiBhd2FpdGVkRG9jcy5maWx0ZXIoQm9vbGVhbiksXG4gICAgICBlcnJvcnMsXG4gICAgfTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlck9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSBhd2FpdCBidWlsZEFmdGVyT3BlcmF0aW9uPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4oe1xuICAgICAgb3BlcmF0aW9uOiAnZGVsZXRlJyxcbiAgICAgIGFyZ3MsXG4gICAgICByZXN1bHQsXG4gICAgfSk7XG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBwYXlsb2FkLmRiLmNvbW1pdFRyYW5zYWN0aW9uKHJlcS50cmFuc2FjdGlvbklEKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlT3BlcmF0aW9uO1xuIl0sIm5hbWVzIjpbImh0dHBTdGF0dXMiLCJBUElFcnJvciIsImV4ZWN1dGVBY2Nlc3MiLCJhZnRlclJlYWQiLCJkZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMiLCJkZWxldGVBc3NvY2lhdGVkRmlsZXMiLCJkZWxldGVVc2VyUHJlZmVyZW5jZXMiLCJ2YWxpZGF0ZVF1ZXJ5UGF0aHMiLCJjb21iaW5lUXVlcmllcyIsImluaXRUcmFuc2FjdGlvbiIsImtpbGxUcmFuc2FjdGlvbiIsImJ1aWxkQWZ0ZXJPcGVyYXRpb24iLCJkZWxldGVPcGVyYXRpb24iLCJpbmNvbWluZ0FyZ3MiLCJhcmdzIiwiZGVwdGgiLCJjb2xsZWN0aW9uQ29uZmlnIiwid2hlcmUiLCJyZXEiLCJ0IiwicGF5bG9hZCIsImxvY2FsZSIsImNvbmZpZyIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsInNob3VsZENvbW1pdCIsImFjY2Vzc1Jlc3VsdCIsImZ1bGxXaGVyZSIsImRvY3MiLCJlcnJvcnMiLCJwcm9taXNlcyIsImF3YWl0ZWREb2NzIiwicmVzdWx0IiwiZXJyb3IiLCJjb2xsZWN0aW9uIiwiaG9va3MiLCJiZWZvcmVPcGVyYXRpb24iLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwib3BlcmF0aW9uIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwiQkFEX1JFUVVFU1QiLCJhY2Nlc3MiLCJkZWxldGUiLCJkYiIsImZpbmQiLCJzbHVnIiwibWFwIiwiZG9jIiwiaWQiLCJiZWZvcmVEZWxldGUiLCJvdmVycmlkZURlbGV0ZSIsImRlbGV0ZU9uZSIsImVxdWFscyIsInZlcnNpb25zIiwiZW50aXR5Q29uZmlnIiwiYWZ0ZXJEZWxldGUiLCJwdXNoIiwibWVzc2FnZSIsImFsbCIsImlkcyIsImZpbHRlciIsIkJvb2xlYW4iLCJjb21taXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxnQkFBZ0IsY0FBYztBQUdyQyxTQUFTQyxRQUFRLFFBQVEsZUFBZTtBQUN4QyxPQUFPQyxtQkFBbUIsMkJBQTJCO0FBR3JELFNBQVNDLFNBQVMsUUFBUSwrQkFBK0I7QUFDekQsU0FBU0Msd0JBQXdCLFFBQVEsMENBQTBDO0FBQ25GLFNBQVNDLHFCQUFxQixRQUFRLHNDQUFzQztBQUM1RSxTQUFTQyxxQkFBcUIsUUFBUSwwQ0FBMEM7QUFDaEYsU0FBU0Msa0JBQWtCLFFBQVEsb0RBQW9EO0FBQ3ZGLFNBQVNDLGNBQWMsUUFBUSxnQ0FBZ0M7QUFDL0QsU0FBU0MsZUFBZSxRQUFRLGtDQUFrQztBQUNsRSxTQUFTQyxlQUFlLFFBQVEsa0NBQWtDO0FBQ2xFLFNBQVNDLG1CQUFtQixRQUFRLFVBQVU7U0FXL0JDLGdCQUNiQyxZQUF1QjtXQURWRDs7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