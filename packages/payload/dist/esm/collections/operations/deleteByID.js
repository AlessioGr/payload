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
import { Forbidden, NotFound } from "../../errors";
import executeAccess from "../../auth/executeAccess";
import { hasWhereAccessResult } from "../../auth/types";
import { afterRead } from "../../fields/hooks/afterRead";
import { deleteCollectionVersions } from "../../versions/deleteCollectionVersions";
import { deleteAssociatedFiles } from "../../uploads/deleteAssociatedFiles";
import { combineQueries } from "../../database/combineQueries";
import { deleteUserPreferences } from "../../preferences/deleteUserPreferences";
import { killTransaction } from "../../utilities/killTransaction";
import { initTransaction } from "../../utilities/initTransaction";
import { buildAfterOperation } from "./utils";
function deleteByID(incomingArgs) {
    return _deleteByID.apply(this, arguments);
}
function _deleteByID() {
    _deleteByID = _async_to_generator(function(incomingArgs) {
        var args, depth, _args_collection, collectionConfig, id, req, _args_req, t, payload, config, overrideAccess, showHiddenFields, shouldCommit, accessResults, _tmp, hasWhereAccess, docToDelete, result, error;
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
                    depth = args.depth, _args_collection = args.collection, collectionConfig = _args_collection.config, id = args.id, req = args.req, _args_req = args.req, t = _args_req.t, payload = _args_req.payload, config = _args_req.payload.config, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        18,
                        ,
                        20
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
                    if (!!overrideAccess) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        executeAccess({
                            req: req,
                            id: id
                        }, collectionConfig.access.delete)
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
                    accessResults = _tmp;
                    hasWhereAccess = hasWhereAccessResult(accessResults);
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
                case 8:
                    _state.sent();
                    return [
                        4,
                        req.payload.db.findOne({
                            collection: collectionConfig.slug,
                            where: combineQueries({
                                id: {
                                    equals: id
                                }
                            }, accessResults),
                            locale: req.locale,
                            req: req
                        })
                    ];
                case 9:
                    docToDelete = _state.sent();
                    if (!docToDelete && !hasWhereAccess) throw new NotFound(t);
                    if (!docToDelete && hasWhereAccess) throw new Forbidden(t);
                    return [
                        4,
                        deleteAssociatedFiles({
                            config: config,
                            collectionConfig: collectionConfig,
                            doc: docToDelete,
                            t: t,
                            overrideDelete: true
                        })
                    ];
                case 10:
                    _state.sent();
                    return [
                        4,
                        req.payload.db.deleteOne({
                            collection: collectionConfig.slug,
                            where: {
                                id: {
                                    equals: id
                                }
                            },
                            req: req
                        })
                    ];
                case 11:
                    result = _state.sent();
                    // /////////////////////////////////////
                    // Delete Preferences
                    // /////////////////////////////////////
                    deleteUserPreferences({
                        payload: payload,
                        collectionConfig: collectionConfig,
                        ids: [
                            id
                        ],
                        req: req
                    });
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
                            doc: result,
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
                                                    context: req.context,
                                                    doc: result
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
                case 14:
                    _state.sent();
                    return [
                        4,
                        buildAfterOperation({
                            operation: "deleteByID",
                            args: args,
                            result: result
                        })
                    ];
                case 15:
                    // /////////////////////////////////////
                    // afterOperation - Collection
                    // /////////////////////////////////////
                    result = _state.sent();
                    if (!shouldCommit) return [
                        3,
                        17
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 16:
                    _state.sent();
                    _state.label = 17;
                case 17:
                    return [
                        2,
                        result
                    ];
                case 18:
                    error = _state.sent();
                    return [
                        4,
                        killTransaction(req)
                    ];
                case 19:
                    _state.sent();
                    throw error;
                case 20:
                    return [
                        2
                    ];
            }
        });
    });
    return _deleteByID.apply(this, arguments);
}
export default deleteByID;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2RlbGV0ZUJ5SUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IEZvcmJpZGRlbiwgTm90Rm91bmQgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJztcbmltcG9ydCB7IEJlZm9yZU9wZXJhdGlvbkhvb2ssIENvbGxlY3Rpb24gfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBoYXNXaGVyZUFjY2Vzc1Jlc3VsdCB9IGZyb20gJy4uLy4uL2F1dGgvdHlwZXMnO1xuaW1wb3J0IHsgYWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyUmVhZCc7XG5pbXBvcnQgeyBkZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMgfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9kZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMnO1xuaW1wb3J0IHsgZGVsZXRlQXNzb2NpYXRlZEZpbGVzIH0gZnJvbSAnLi4vLi4vdXBsb2Fkcy9kZWxldGVBc3NvY2lhdGVkRmlsZXMnO1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcyc7XG5pbXBvcnQgeyBkZWxldGVVc2VyUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi9wcmVmZXJlbmNlcy9kZWxldGVVc2VyUHJlZmVyZW5jZXMnO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IGJ1aWxkQWZ0ZXJPcGVyYXRpb24gfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBkZXB0aD86IG51bWJlclxuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIGlkOiBzdHJpbmcgfCBudW1iZXJcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlQnlJRDxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihpbmNvbWluZ0FyZ3M6IEFyZ3VtZW50cyk6IFByb21pc2U8RG9jdW1lbnQ+IHtcbiAgbGV0IGFyZ3MgPSBpbmNvbWluZ0FyZ3M7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmJlZm9yZU9wZXJhdGlvbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vazogQmVmb3JlT3BlcmF0aW9uSG9vayB8IFByb21pc2U8dm9pZD4sIGhvb2s6IEJlZm9yZU9wZXJhdGlvbkhvb2spID0+IHtcbiAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgYXJncyxcbiAgICAgIG9wZXJhdGlvbjogJ2RlbGV0ZScsXG4gICAgICBjb250ZXh0OiBhcmdzLnJlcS5jb250ZXh0LFxuICAgIH0pKSB8fCBhcmdzO1xuICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgY29uc3Qge1xuICAgIGRlcHRoLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9LFxuICAgIGlkLFxuICAgIHJlcSxcbiAgICByZXE6IHtcbiAgICAgIHQsXG4gICAgICBwYXlsb2FkLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjb25maWcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgfSA9IGFyZ3M7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2s6IEJlZm9yZU9wZXJhdGlvbkhvb2sgfCBQcm9taXNlPHZvaWQ+LCBob29rOiBCZWZvcmVPcGVyYXRpb25Ib29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIGFyZ3MgPSAoYXdhaXQgaG9vayh7XG4gICAgICAgIGFyZ3MsXG4gICAgICAgIG9wZXJhdGlvbjogJ2RlbGV0ZScsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkpIHx8IGFyZ3M7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxLCBpZCB9LCBjb2xsZWN0aW9uQ29uZmlnLmFjY2Vzcy5kZWxldGUpIDogdHJ1ZTtcbiAgICBjb25zdCBoYXNXaGVyZUFjY2VzcyA9IGhhc1doZXJlQWNjZXNzUmVzdWx0KGFjY2Vzc1Jlc3VsdHMpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZURlbGV0ZSAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmJlZm9yZURlbGV0ZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXR1cm4gaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSk7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHJpZXZlIGRvY3VtZW50XG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgZG9jVG9EZWxldGUgPSBhd2FpdCByZXEucGF5bG9hZC5kYi5maW5kT25lKHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIHdoZXJlOiBjb21iaW5lUXVlcmllcyh7IGlkOiB7IGVxdWFsczogaWQgfSB9LCBhY2Nlc3NSZXN1bHRzKSxcbiAgICAgIGxvY2FsZTogcmVxLmxvY2FsZSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuXG4gICAgaWYgKCFkb2NUb0RlbGV0ZSAmJiAhaGFzV2hlcmVBY2Nlc3MpIHRocm93IG5ldyBOb3RGb3VuZCh0KTtcbiAgICBpZiAoIWRvY1RvRGVsZXRlICYmIGhhc1doZXJlQWNjZXNzKSB0aHJvdyBuZXcgRm9yYmlkZGVuKHQpO1xuXG5cbiAgICBhd2FpdCBkZWxldGVBc3NvY2lhdGVkRmlsZXMoeyBjb25maWcsIGNvbGxlY3Rpb25Db25maWcsIGRvYzogZG9jVG9EZWxldGUsIHQsIG92ZXJyaWRlRGVsZXRlOiB0cnVlIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIERlbGV0ZSBkb2N1bWVudFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcS5wYXlsb2FkLmRiLmRlbGV0ZU9uZSh7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICB3aGVyZTogeyBpZDogeyBlcXVhbHM6IGlkIH0gfSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIERlbGV0ZSBQcmVmZXJlbmNlc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGRlbGV0ZVVzZXJQcmVmZXJlbmNlcyh7XG4gICAgICBwYXlsb2FkLFxuICAgICAgY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIGlkczogW2lkXSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBEZWxldGUgdmVyc2lvbnNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy52ZXJzaW9ucykge1xuICAgICAgZGVsZXRlQ29sbGVjdGlvblZlcnNpb25zKHtcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgaWQsXG4gICAgICAgIHNsdWc6IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgICAgcmVxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgZW50aXR5Q29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICByZXEsXG4gICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJSZWFkLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIHJlc3VsdCA9IGF3YWl0IGhvb2soe1xuICAgICAgICByZXEsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICBkb2M6IHJlc3VsdCxcbiAgICAgIH0pIHx8IHJlc3VsdDtcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJEZWxldGUgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlckRlbGV0ZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXN1bHQgPSBhd2FpdCBob29rKHtcbiAgICAgICAgcmVxLFxuICAgICAgICBpZCxcbiAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkgfHwgcmVzdWx0O1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlck9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSBhd2FpdCBidWlsZEFmdGVyT3BlcmF0aW9uPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4oe1xuICAgICAgb3BlcmF0aW9uOiAnZGVsZXRlQnlJRCcsXG4gICAgICBhcmdzLFxuICAgICAgcmVzdWx0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIDguIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgcGF5bG9hZC5kYi5jb21taXRUcmFuc2FjdGlvbihyZXEudHJhbnNhY3Rpb25JRCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUJ5SUQ7XG4iXSwibmFtZXMiOlsiRm9yYmlkZGVuIiwiTm90Rm91bmQiLCJleGVjdXRlQWNjZXNzIiwiaGFzV2hlcmVBY2Nlc3NSZXN1bHQiLCJhZnRlclJlYWQiLCJkZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMiLCJkZWxldGVBc3NvY2lhdGVkRmlsZXMiLCJjb21iaW5lUXVlcmllcyIsImRlbGV0ZVVzZXJQcmVmZXJlbmNlcyIsImtpbGxUcmFuc2FjdGlvbiIsImluaXRUcmFuc2FjdGlvbiIsImJ1aWxkQWZ0ZXJPcGVyYXRpb24iLCJkZWxldGVCeUlEIiwiaW5jb21pbmdBcmdzIiwiYXJncyIsImRlcHRoIiwiY29sbGVjdGlvbkNvbmZpZyIsImlkIiwicmVxIiwidCIsInBheWxvYWQiLCJjb25maWciLCJvdmVycmlkZUFjY2VzcyIsInNob3dIaWRkZW5GaWVsZHMiLCJzaG91bGRDb21taXQiLCJhY2Nlc3NSZXN1bHRzIiwiaGFzV2hlcmVBY2Nlc3MiLCJkb2NUb0RlbGV0ZSIsInJlc3VsdCIsImVycm9yIiwiY29sbGVjdGlvbiIsImhvb2tzIiwiYmVmb3JlT3BlcmF0aW9uIiwicmVkdWNlIiwicHJpb3JIb29rIiwiaG9vayIsIm9wZXJhdGlvbiIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFjY2VzcyIsImRlbGV0ZSIsImJlZm9yZURlbGV0ZSIsImRiIiwiZmluZE9uZSIsInNsdWciLCJ3aGVyZSIsImVxdWFscyIsImxvY2FsZSIsImRvYyIsIm92ZXJyaWRlRGVsZXRlIiwiZGVsZXRlT25lIiwiaWRzIiwidmVyc2lvbnMiLCJlbnRpdHlDb25maWciLCJhZnRlckRlbGV0ZSIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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