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
var _errors = require("../../errors");
var _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
var _types = require("../../auth/types");
var _afterRead = require("../../fields/hooks/afterRead");
var _deleteCollectionVersions = require("../../versions/deleteCollectionVersions");
var _deleteAssociatedFiles = require("../../uploads/deleteAssociatedFiles");
var _combineQueries = require("../../database/combineQueries");
var _deleteUserPreferences = require("../../preferences/deleteUserPreferences");
var _killTransaction = require("../../utilities/killTransaction");
var _initTransaction = require("../../utilities/initTransaction");
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
                    if (!!overrideAccess) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        (0, _executeAccess.default)({
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
                    hasWhereAccess = (0, _types.hasWhereAccessResult)(accessResults);
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
                            where: (0, _combineQueries.combineQueries)({
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
                    if (!docToDelete && !hasWhereAccess) throw new _errors.NotFound(t);
                    if (!docToDelete && hasWhereAccess) throw new _errors.Forbidden(t);
                    return [
                        4,
                        (0, _deleteAssociatedFiles.deleteAssociatedFiles)({
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
                    (0, _deleteUserPreferences.deleteUserPreferences)({
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
                        (0, _utils.buildAfterOperation)({
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
                        (0, _killTransaction.killTransaction)(req)
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
var _default = deleteByID;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2RlbGV0ZUJ5SUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IEZvcmJpZGRlbiwgTm90Rm91bmQgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJztcbmltcG9ydCB7IEJlZm9yZU9wZXJhdGlvbkhvb2ssIENvbGxlY3Rpb24gfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBoYXNXaGVyZUFjY2Vzc1Jlc3VsdCB9IGZyb20gJy4uLy4uL2F1dGgvdHlwZXMnO1xuaW1wb3J0IHsgYWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyUmVhZCc7XG5pbXBvcnQgeyBkZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMgfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9kZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMnO1xuaW1wb3J0IHsgZGVsZXRlQXNzb2NpYXRlZEZpbGVzIH0gZnJvbSAnLi4vLi4vdXBsb2Fkcy9kZWxldGVBc3NvY2lhdGVkRmlsZXMnO1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcyc7XG5pbXBvcnQgeyBkZWxldGVVc2VyUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi9wcmVmZXJlbmNlcy9kZWxldGVVc2VyUHJlZmVyZW5jZXMnO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IGJ1aWxkQWZ0ZXJPcGVyYXRpb24gfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBkZXB0aD86IG51bWJlclxuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIGlkOiBzdHJpbmcgfCBudW1iZXJcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlQnlJRDxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihpbmNvbWluZ0FyZ3M6IEFyZ3VtZW50cyk6IFByb21pc2U8RG9jdW1lbnQ+IHtcbiAgbGV0IGFyZ3MgPSBpbmNvbWluZ0FyZ3M7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmJlZm9yZU9wZXJhdGlvbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vazogQmVmb3JlT3BlcmF0aW9uSG9vayB8IFByb21pc2U8dm9pZD4sIGhvb2s6IEJlZm9yZU9wZXJhdGlvbkhvb2spID0+IHtcbiAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgYXJncyxcbiAgICAgIG9wZXJhdGlvbjogJ2RlbGV0ZScsXG4gICAgICBjb250ZXh0OiBhcmdzLnJlcS5jb250ZXh0LFxuICAgIH0pKSB8fCBhcmdzO1xuICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgY29uc3Qge1xuICAgIGRlcHRoLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9LFxuICAgIGlkLFxuICAgIHJlcSxcbiAgICByZXE6IHtcbiAgICAgIHQsXG4gICAgICBwYXlsb2FkLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjb25maWcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgfSA9IGFyZ3M7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaG91bGRDb21taXQgPSBhd2FpdCBpbml0VHJhbnNhY3Rpb24ocmVxKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2s6IEJlZm9yZU9wZXJhdGlvbkhvb2sgfCBQcm9taXNlPHZvaWQ+LCBob29rOiBCZWZvcmVPcGVyYXRpb25Ib29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIGFyZ3MgPSAoYXdhaXQgaG9vayh7XG4gICAgICAgIGFyZ3MsXG4gICAgICAgIG9wZXJhdGlvbjogJ2RlbGV0ZScsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkpIHx8IGFyZ3M7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxLCBpZCB9LCBjb2xsZWN0aW9uQ29uZmlnLmFjY2Vzcy5kZWxldGUpIDogdHJ1ZTtcbiAgICBjb25zdCBoYXNXaGVyZUFjY2VzcyA9IGhhc1doZXJlQWNjZXNzUmVzdWx0KGFjY2Vzc1Jlc3VsdHMpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZURlbGV0ZSAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmJlZm9yZURlbGV0ZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXR1cm4gaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSk7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHJpZXZlIGRvY3VtZW50XG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgZG9jVG9EZWxldGUgPSBhd2FpdCByZXEucGF5bG9hZC5kYi5maW5kT25lKHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIHdoZXJlOiBjb21iaW5lUXVlcmllcyh7IGlkOiB7IGVxdWFsczogaWQgfSB9LCBhY2Nlc3NSZXN1bHRzKSxcbiAgICAgIGxvY2FsZTogcmVxLmxvY2FsZSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuXG4gICAgaWYgKCFkb2NUb0RlbGV0ZSAmJiAhaGFzV2hlcmVBY2Nlc3MpIHRocm93IG5ldyBOb3RGb3VuZCh0KTtcbiAgICBpZiAoIWRvY1RvRGVsZXRlICYmIGhhc1doZXJlQWNjZXNzKSB0aHJvdyBuZXcgRm9yYmlkZGVuKHQpO1xuXG5cbiAgICBhd2FpdCBkZWxldGVBc3NvY2lhdGVkRmlsZXMoeyBjb25maWcsIGNvbGxlY3Rpb25Db25maWcsIGRvYzogZG9jVG9EZWxldGUsIHQsIG92ZXJyaWRlRGVsZXRlOiB0cnVlIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIERlbGV0ZSBkb2N1bWVudFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcS5wYXlsb2FkLmRiLmRlbGV0ZU9uZSh7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICB3aGVyZTogeyBpZDogeyBlcXVhbHM6IGlkIH0gfSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIERlbGV0ZSBQcmVmZXJlbmNlc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGRlbGV0ZVVzZXJQcmVmZXJlbmNlcyh7XG4gICAgICBwYXlsb2FkLFxuICAgICAgY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIGlkczogW2lkXSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBEZWxldGUgdmVyc2lvbnNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy52ZXJzaW9ucykge1xuICAgICAgZGVsZXRlQ29sbGVjdGlvblZlcnNpb25zKHtcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgaWQsXG4gICAgICAgIHNsdWc6IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgICAgcmVxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgZW50aXR5Q29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICByZXEsXG4gICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJSZWFkLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIHJlc3VsdCA9IGF3YWl0IGhvb2soe1xuICAgICAgICByZXEsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICBkb2M6IHJlc3VsdCxcbiAgICAgIH0pIHx8IHJlc3VsdDtcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJEZWxldGUgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlckRlbGV0ZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXN1bHQgPSBhd2FpdCBob29rKHtcbiAgICAgICAgcmVxLFxuICAgICAgICBpZCxcbiAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkgfHwgcmVzdWx0O1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlck9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSBhd2FpdCBidWlsZEFmdGVyT3BlcmF0aW9uPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4oe1xuICAgICAgb3BlcmF0aW9uOiAnZGVsZXRlQnlJRCcsXG4gICAgICBhcmdzLFxuICAgICAgcmVzdWx0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIDguIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgcGF5bG9hZC5kYi5jb21taXRUcmFuc2FjdGlvbihyZXEudHJhbnNhY3Rpb25JRCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUJ5SUQ7XG4iXSwibmFtZXMiOlsiZGVsZXRlQnlJRCIsImluY29taW5nQXJncyIsImFyZ3MiLCJkZXB0aCIsImNvbGxlY3Rpb25Db25maWciLCJpZCIsInJlcSIsInQiLCJwYXlsb2FkIiwiY29uZmlnIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwic2hvdWxkQ29tbWl0IiwiYWNjZXNzUmVzdWx0cyIsImhhc1doZXJlQWNjZXNzIiwiZG9jVG9EZWxldGUiLCJyZXN1bHQiLCJlcnJvciIsImNvbGxlY3Rpb24iLCJob29rcyIsImJlZm9yZU9wZXJhdGlvbiIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJvcGVyYXRpb24iLCJjb250ZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbml0VHJhbnNhY3Rpb24iLCJleGVjdXRlQWNjZXNzIiwiYWNjZXNzIiwiZGVsZXRlIiwiaGFzV2hlcmVBY2Nlc3NSZXN1bHQiLCJiZWZvcmVEZWxldGUiLCJkYiIsImZpbmRPbmUiLCJzbHVnIiwid2hlcmUiLCJjb21iaW5lUXVlcmllcyIsImVxdWFscyIsImxvY2FsZSIsIk5vdEZvdW5kIiwiRm9yYmlkZGVuIiwiZGVsZXRlQXNzb2NpYXRlZEZpbGVzIiwiZG9jIiwib3ZlcnJpZGVEZWxldGUiLCJkZWxldGVPbmUiLCJkZWxldGVVc2VyUHJlZmVyZW5jZXMiLCJpZHMiLCJ2ZXJzaW9ucyIsImRlbGV0ZUNvbGxlY3Rpb25WZXJzaW9ucyIsImFmdGVyUmVhZCIsImVudGl0eUNvbmZpZyIsImFmdGVyRGVsZXRlIiwiYnVpbGRBZnRlck9wZXJhdGlvbiIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCIsImtpbGxUcmFuc2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEwTkE7OztlQUFBOzs7c0JBeE5vQztvRUFDVjtxQkFHVzt5QkFDWDt3Q0FDZTtxQ0FDSDs4QkFDUDtxQ0FDTzsr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