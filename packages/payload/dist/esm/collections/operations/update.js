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
import httpStatus from "http-status";
import executeAccess from "../../auth/executeAccess";
import { APIError } from "../../errors";
import { saveVersion } from "../../versions/saveVersion";
import { uploadFiles } from "../../uploads/uploadFiles";
import { beforeChange } from "../../fields/hooks/beforeChange";
import { beforeValidate } from "../../fields/hooks/beforeValidate";
import { afterChange } from "../../fields/hooks/afterChange";
import { afterRead } from "../../fields/hooks/afterRead";
import { generateFileData } from "../../uploads/generateFileData";
import { deleteAssociatedFiles } from "../../uploads/deleteAssociatedFiles";
import { unlinkTempFiles } from "../../uploads/unlinkTempFiles";
import { validateQueryPaths } from "../../database/queryValidation/validateQueryPaths";
import { combineQueries } from "../../database/combineQueries";
import { appendVersionToQueryKey } from "../../versions/drafts/appendVersionToQueryKey";
import { buildVersionCollectionFields } from "../../versions/buildCollectionFields";
import { initTransaction } from "../../utilities/initTransaction";
import { killTransaction } from "../../utilities/killTransaction";
import { buildAfterOperation } from "./utils";
function update(incomingArgs) {
    return _update.apply(this, arguments);
}
function _update() {
    _update = _async_to_generator(function(incomingArgs) {
        var args, depth, collection, _args_collection, collectionConfig, where, req, _args_req, t, locale, payload, config, overrideAccess, showHiddenFields, _args_overwriteExistingFiles, overwriteExistingFiles, tmp, draftArg, _collectionConfig_versions, shouldCommit, bulkUpdateData, shouldSaveDraft, accessResult, fullWhere, docs, versionsWhere, query, query1, _ref, newFileData, filesToUpload, errors, promises, awaitedDocs, result, error;
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
                                                    operation: "update",
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
                    depth = args.depth, collection = args.collection, _args_collection = args.collection, collectionConfig = _args_collection.config, where = args.where, req = args.req, _args_req = args.req, t = _args_req.t, locale = _args_req.locale, payload = _args_req.payload, config = _args_req.payload.config, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields, _args_overwriteExistingFiles = args.overwriteExistingFiles, overwriteExistingFiles = _args_overwriteExistingFiles === void 0 ? false : _args_overwriteExistingFiles, tmp = args.draft, draftArg = tmp === void 0 ? false : tmp;
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
                                                    operation: "update",
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
                        throw new APIError("Missing 'where' query of documents to update.", httpStatus.BAD_REQUEST);
                    }
                    bulkUpdateData = args.data;
                    shouldSaveDraft = Boolean(draftArg && collectionConfig.versions.drafts);
                    if (!!overrideAccess) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        executeAccess({
                            req: req
                        }, collectionConfig.access.update)
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
                    if (!(((_collectionConfig_versions = collectionConfig.versions) === null || _collectionConfig_versions === void 0 ? void 0 : _collectionConfig_versions.drafts) && shouldSaveDraft)) return [
                        3,
                        10
                    ];
                    versionsWhere = appendVersionToQueryKey(fullWhere);
                    return [
                        4,
                        validateQueryPaths({
                            collectionConfig: collection.config,
                            where: versionsWhere,
                            req: req,
                            overrideAccess: overrideAccess,
                            versionFields: buildVersionCollectionFields(collection.config)
                        })
                    ];
                case 8:
                    _state.sent();
                    return [
                        4,
                        payload.db.queryDrafts({
                            collection: collectionConfig.slug,
                            where: versionsWhere,
                            locale: locale,
                            req: req
                        })
                    ];
                case 9:
                    query = _state.sent();
                    docs = query.docs;
                    return [
                        3,
                        12
                    ];
                case 10:
                    return [
                        4,
                        payload.db.find({
                            locale: locale,
                            collection: collectionConfig.slug,
                            where: fullWhere,
                            pagination: false,
                            limit: 0,
                            req: req
                        })
                    ];
                case 11:
                    query1 = _state.sent();
                    docs = query1.docs;
                    _state.label = 12;
                case 12:
                    return [
                        4,
                        generateFileData({
                            config: config,
                            collection: collection,
                            req: req,
                            data: bulkUpdateData,
                            throwOnMissingFile: false,
                            overwriteExistingFiles: overwriteExistingFiles
                        })
                    ];
                case 13:
                    _ref = _state.sent(), newFileData = _ref.data, filesToUpload = _ref.files;
                    errors = [];
                    promises = docs.map(function() {
                        var _ref = _async_to_generator(function(doc) {
                            var id, data, originalDoc, result, error;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        id = doc.id;
                                        data = _object_spread({}, newFileData, bulkUpdateData);
                                        _state.label = 1;
                                    case 1:
                                        _state.trys.push([
                                            1,
                                            19,
                                            ,
                                            20
                                        ]);
                                        return [
                                            4,
                                            afterRead({
                                                depth: 0,
                                                doc: doc,
                                                entityConfig: collectionConfig,
                                                req: req,
                                                overrideAccess: true,
                                                showHiddenFields: true,
                                                context: req.context
                                            })
                                        ];
                                    case 2:
                                        originalDoc = _state.sent();
                                        return [
                                            4,
                                            deleteAssociatedFiles({
                                                config: config,
                                                collectionConfig: collectionConfig,
                                                files: filesToUpload,
                                                doc: doc,
                                                t: t,
                                                overrideDelete: false
                                            })
                                        ];
                                    case 3:
                                        _state.sent();
                                        return [
                                            4,
                                            beforeValidate({
                                                data: data,
                                                doc: originalDoc,
                                                entityConfig: collectionConfig,
                                                id: id,
                                                operation: "update",
                                                overrideAccess: overrideAccess,
                                                req: req,
                                                context: req.context
                                            })
                                        ];
                                    case 4:
                                        // /////////////////////////////////////
                                        // beforeValidate - Fields
                                        // /////////////////////////////////////
                                        data = _state.sent();
                                        // /////////////////////////////////////
                                        // beforeValidate - Collection
                                        // /////////////////////////////////////
                                        return [
                                            4,
                                            collectionConfig.hooks.beforeValidate.reduce(function() {
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
                                                                        data: data,
                                                                        req: req,
                                                                        operation: "update",
                                                                        originalDoc: originalDoc,
                                                                        context: req.context
                                                                    })
                                                                ];
                                                            case 2:
                                                                data = _state.sent() || data;
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
                                    case 5:
                                        _state.sent();
                                        if (!!collectionConfig.upload.disableLocalStorage) return [
                                            3,
                                            7
                                        ];
                                        return [
                                            4,
                                            uploadFiles(payload, filesToUpload, t)
                                        ];
                                    case 6:
                                        _state.sent();
                                        _state.label = 7;
                                    case 7:
                                        // /////////////////////////////////////
                                        // beforeChange - Collection
                                        // /////////////////////////////////////
                                        return [
                                            4,
                                            collectionConfig.hooks.beforeChange.reduce(function() {
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
                                                                        data: data,
                                                                        req: req,
                                                                        originalDoc: originalDoc,
                                                                        operation: "update",
                                                                        context: req.context
                                                                    })
                                                                ];
                                                            case 2:
                                                                data = _state.sent() || data;
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
                                    case 8:
                                        _state.sent();
                                        return [
                                            4,
                                            beforeChange({
                                                data: data,
                                                doc: originalDoc,
                                                docWithLocales: doc,
                                                entityConfig: collectionConfig,
                                                id: id,
                                                operation: "update",
                                                req: req,
                                                skipValidation: shouldSaveDraft || data._status === "draft",
                                                context: req.context
                                            })
                                        ];
                                    case 9:
                                        result = _state.sent();
                                        if (!!shouldSaveDraft) return [
                                            3,
                                            11
                                        ];
                                        return [
                                            4,
                                            req.payload.db.updateOne({
                                                collection: collectionConfig.slug,
                                                locale: locale,
                                                id: id,
                                                data: result,
                                                req: req
                                            })
                                        ];
                                    case 10:
                                        result = _state.sent();
                                        _state.label = 11;
                                    case 11:
                                        if (!collectionConfig.versions) return [
                                            3,
                                            13
                                        ];
                                        return [
                                            4,
                                            saveVersion({
                                                payload: payload,
                                                collection: collectionConfig,
                                                req: req,
                                                docWithLocales: _object_spread_props(_object_spread({}, result), {
                                                    createdAt: doc.createdAt
                                                }),
                                                id: id,
                                                draft: shouldSaveDraft
                                            })
                                        ];
                                    case 12:
                                        result = _state.sent();
                                        _state.label = 13;
                                    case 13:
                                        return [
                                            4,
                                            afterRead({
                                                depth: depth,
                                                doc: result,
                                                entityConfig: collectionConfig,
                                                req: req,
                                                overrideAccess: overrideAccess,
                                                showHiddenFields: showHiddenFields,
                                                context: req.context
                                            })
                                        ];
                                    case 14:
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
                                    case 15:
                                        _state.sent();
                                        return [
                                            4,
                                            afterChange({
                                                data: data,
                                                doc: result,
                                                previousDoc: originalDoc,
                                                entityConfig: collectionConfig,
                                                operation: "update",
                                                context: req.context,
                                                req: req
                                            })
                                        ];
                                    case 16:
                                        // /////////////////////////////////////
                                        // afterChange - Fields
                                        // /////////////////////////////////////
                                        result = _state.sent();
                                        // /////////////////////////////////////
                                        // afterChange - Collection
                                        // /////////////////////////////////////
                                        return [
                                            4,
                                            collectionConfig.hooks.afterChange.reduce(function() {
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
                                                                        doc: result,
                                                                        previousDoc: originalDoc,
                                                                        req: req,
                                                                        operation: "update",
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
                                    case 17:
                                        _state.sent();
                                        return [
                                            4,
                                            unlinkTempFiles({
                                                req: req,
                                                config: config,
                                                collectionConfig: collectionConfig
                                            })
                                        ];
                                    case 18:
                                        _state.sent();
                                        // /////////////////////////////////////
                                        // Return results
                                        // /////////////////////////////////////
                                        return [
                                            2,
                                            result
                                        ];
                                    case 19:
                                        error = _state.sent();
                                        errors.push({
                                            message: error.message,
                                            id: id
                                        });
                                        return [
                                            3,
                                            20
                                        ];
                                    case 20:
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
                case 14:
                    awaitedDocs = _state.sent();
                    result = {
                        docs: awaitedDocs.filter(Boolean),
                        errors: errors
                    };
                    return [
                        4,
                        buildAfterOperation({
                            operation: "update",
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
    return _update.apply(this, arguments);
}
export default update;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL3VwZGF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBEZWVwUGFydGlhbCB9IGZyb20gJ3RzLWVzc2VudGlhbHMnO1xuaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBCdWxrT3BlcmF0aW9uUmVzdWx0LCBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2Vzcyc7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgc2F2ZVZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9zYXZlVmVyc2lvbic7XG5pbXBvcnQgeyB1cGxvYWRGaWxlcyB9IGZyb20gJy4uLy4uL3VwbG9hZHMvdXBsb2FkRmlsZXMnO1xuaW1wb3J0IHsgYmVmb3JlQ2hhbmdlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2JlZm9yZUNoYW5nZSc7XG5pbXBvcnQgeyBiZWZvcmVWYWxpZGF0ZSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9iZWZvcmVWYWxpZGF0ZSc7XG5pbXBvcnQgeyBhZnRlckNoYW5nZSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlckNoYW5nZSc7XG5pbXBvcnQgeyBhZnRlclJlYWQgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkJztcbmltcG9ydCB7IGdlbmVyYXRlRmlsZURhdGEgfSBmcm9tICcuLi8uLi91cGxvYWRzL2dlbmVyYXRlRmlsZURhdGEnO1xuaW1wb3J0IHsgQWNjZXNzUmVzdWx0IH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGRlbGV0ZUFzc29jaWF0ZWRGaWxlcyB9IGZyb20gJy4uLy4uL3VwbG9hZHMvZGVsZXRlQXNzb2NpYXRlZEZpbGVzJztcbmltcG9ydCB7IHVubGlua1RlbXBGaWxlcyB9IGZyb20gJy4uLy4uL3VwbG9hZHMvdW5saW5rVGVtcEZpbGVzJztcbmltcG9ydCB7IHZhbGlkYXRlUXVlcnlQYXRocyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL3F1ZXJ5VmFsaWRhdGlvbi92YWxpZGF0ZVF1ZXJ5UGF0aHMnO1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcyc7XG5pbXBvcnQgeyBhcHBlbmRWZXJzaW9uVG9RdWVyeUtleSB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL2RyYWZ0cy9hcHBlbmRWZXJzaW9uVG9RdWVyeUtleSc7XG5pbXBvcnQgeyBidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzIH0gZnJvbSAnLi4vLi4vdmVyc2lvbnMvYnVpbGRDb2xsZWN0aW9uRmllbGRzJztcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBDcmVhdGVVcGRhdGVUeXBlIH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHsgYnVpbGRBZnRlck9wZXJhdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHM8VCBleHRlbmRzIENyZWF0ZVVwZGF0ZVR5cGU+ID0ge1xuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgd2hlcmU6IFdoZXJlXG4gIGRhdGE6IERlZXBQYXJ0aWFsPFQ+XG4gIGRlcHRoPzogbnVtYmVyXG4gIGRpc2FibGVWZXJpZmljYXRpb25FbWFpbD86IGJvb2xlYW5cbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIG92ZXJ3cml0ZUV4aXN0aW5nRmlsZXM/OiBib29sZWFuXG4gIGRyYWZ0PzogYm9vbGVhblxufVxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICBpbmNvbWluZ0FyZ3M6IEFyZ3VtZW50czxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10+LFxuKTogUHJvbWlzZTxCdWxrT3BlcmF0aW9uUmVzdWx0PFRTbHVnPj4ge1xuICBsZXQgYXJncyA9IGluY29taW5nQXJncztcblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIGJlZm9yZU9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIGF3YWl0IGFyZ3MuY29sbGVjdGlvbi5jb25maWcuaG9va3MuYmVmb3JlT3BlcmF0aW9uLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgYXJncyA9IChhd2FpdCBob29rKHtcbiAgICAgIGFyZ3MsXG4gICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICB9KSkgfHwgYXJncztcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gIGNvbnN0IHtcbiAgICBkZXB0aCxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9LFxuICAgIHdoZXJlLFxuICAgIHJlcSxcbiAgICByZXE6IHtcbiAgICAgIHQsXG4gICAgICBsb2NhbGUsXG4gICAgICBwYXlsb2FkLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjb25maWcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBvdmVyd3JpdGVFeGlzdGluZ0ZpbGVzID0gZmFsc2UsXG4gICAgZHJhZnQ6IGRyYWZ0QXJnID0gZmFsc2UsXG4gIH0gPSBhcmdzO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGFyZ3MuY29sbGVjdGlvbi5jb25maWcuaG9va3MuYmVmb3JlT3BlcmF0aW9uLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIGFyZ3MgPSAoYXdhaXQgaG9vayh7XG4gICAgICAgIGFyZ3MsXG4gICAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkpIHx8IGFyZ3M7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgaWYgKCF3aGVyZSkge1xuICAgICAgdGhyb3cgbmV3IEFQSUVycm9yKCdNaXNzaW5nIFxcJ3doZXJlXFwnIHF1ZXJ5IG9mIGRvY3VtZW50cyB0byB1cGRhdGUuJywgaHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBkYXRhOiBidWxrVXBkYXRlRGF0YSB9ID0gYXJncztcbiAgICBjb25zdCBzaG91bGRTYXZlRHJhZnQgPSBCb29sZWFuKGRyYWZ0QXJnICYmIGNvbGxlY3Rpb25Db25maWcudmVyc2lvbnMuZHJhZnRzKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgYWNjZXNzUmVzdWx0OiBBY2Nlc3NSZXN1bHQ7XG4gICAgaWYgKCFvdmVycmlkZUFjY2Vzcykge1xuICAgICAgYWNjZXNzUmVzdWx0ID0gYXdhaXQgZXhlY3V0ZUFjY2Vzcyh7IHJlcSB9LCBjb2xsZWN0aW9uQ29uZmlnLmFjY2Vzcy51cGRhdGUpO1xuICAgIH1cblxuICAgIGF3YWl0IHZhbGlkYXRlUXVlcnlQYXRocyh7XG4gICAgICBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgd2hlcmUsXG4gICAgICByZXEsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXRyaWV2ZSBkb2N1bWVudHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBmdWxsV2hlcmUgPSBjb21iaW5lUXVlcmllcyh3aGVyZSwgYWNjZXNzUmVzdWx0KTtcblxuICAgIGxldCBkb2NzO1xuXG4gICAgaWYgKGNvbGxlY3Rpb25Db25maWcudmVyc2lvbnM/LmRyYWZ0cyAmJiBzaG91bGRTYXZlRHJhZnQpIHtcbiAgICAgIGNvbnN0IHZlcnNpb25zV2hlcmUgPSBhcHBlbmRWZXJzaW9uVG9RdWVyeUtleShmdWxsV2hlcmUpO1xuXG4gICAgICBhd2FpdCB2YWxpZGF0ZVF1ZXJ5UGF0aHMoe1xuICAgICAgICBjb2xsZWN0aW9uQ29uZmlnOiBjb2xsZWN0aW9uLmNvbmZpZyxcbiAgICAgICAgd2hlcmU6IHZlcnNpb25zV2hlcmUsXG4gICAgICAgIHJlcSxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHZlcnNpb25GaWVsZHM6IGJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMoY29sbGVjdGlvbi5jb25maWcpLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgcGF5bG9hZC5kYi5xdWVyeURyYWZ0czxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10+KHtcbiAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgICB3aGVyZTogdmVyc2lvbnNXaGVyZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICByZXEsXG4gICAgICB9KTtcblxuICAgICAgZG9jcyA9IHF1ZXJ5LmRvY3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kKHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICAgIHdoZXJlOiBmdWxsV2hlcmUsXG4gICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgICBsaW1pdDogMCxcbiAgICAgICAgcmVxLFxuICAgICAgfSk7XG5cbiAgICAgIGRvY3MgPSBxdWVyeS5kb2NzO1xuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBHZW5lcmF0ZSBkYXRhIGZvciBhbGwgZmlsZXMgYW5kIHNpemVzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3Qge1xuICAgICAgZGF0YTogbmV3RmlsZURhdGEsXG4gICAgICBmaWxlczogZmlsZXNUb1VwbG9hZCxcbiAgICB9ID0gYXdhaXQgZ2VuZXJhdGVGaWxlRGF0YSh7XG4gICAgICBjb25maWcsXG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgcmVxLFxuICAgICAgZGF0YTogYnVsa1VwZGF0ZURhdGEsXG4gICAgICB0aHJvd09uTWlzc2luZ0ZpbGU6IGZhbHNlLFxuICAgICAgb3ZlcndyaXRlRXhpc3RpbmdGaWxlcyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuXG4gICAgY29uc3QgcHJvbWlzZXMgPSBkb2NzLm1hcChhc3luYyAoZG9jKSA9PiB7XG4gICAgICBjb25zdCB7IGlkIH0gPSBkb2M7XG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgLi4ubmV3RmlsZURhdGEsXG4gICAgICAgIC4uLmJ1bGtVcGRhdGVEYXRhLFxuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxEb2MgPSBhd2FpdCBhZnRlclJlYWQoe1xuICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgIGRvYyxcbiAgICAgICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIG92ZXJyaWRlQWNjZXNzOiB0cnVlLFxuICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHM6IHRydWUsXG4gICAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IGRlbGV0ZUFzc29jaWF0ZWRGaWxlcyh7IGNvbmZpZywgY29sbGVjdGlvbkNvbmZpZywgZmlsZXM6IGZpbGVzVG9VcGxvYWQsIGRvYywgdCwgb3ZlcnJpZGVEZWxldGU6IGZhbHNlIH0pO1xuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gYmVmb3JlVmFsaWRhdGUgLSBGaWVsZHNcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGRhdGEgPSBhd2FpdCBiZWZvcmVWYWxpZGF0ZTxEZWVwUGFydGlhbDxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10+Pih7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBkb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgICAgIGVudGl0eUNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBiZWZvcmVWYWxpZGF0ZSAtIENvbGxlY3Rpb25cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlVmFsaWRhdGUucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgICAgICBkYXRhID0gKGF3YWl0IGhvb2soe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgICAgICBvcmlnaW5hbERvYyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIH0pKSB8fCBkYXRhO1xuICAgICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBXcml0ZSBmaWxlcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICBpZiAoIWNvbGxlY3Rpb25Db25maWcudXBsb2FkLmRpc2FibGVMb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICBhd2FpdCB1cGxvYWRGaWxlcyhwYXlsb2FkLCBmaWxlc1RvVXBsb2FkLCB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gYmVmb3JlQ2hhbmdlIC0gQ29sbGVjdGlvblxuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5iZWZvcmVDaGFuZ2UucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgICAgICBkYXRhID0gKGF3YWl0IGhvb2soe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIG9yaWdpbmFsRG9jLFxuICAgICAgICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIH0pKSB8fCBkYXRhO1xuICAgICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBiZWZvcmVDaGFuZ2UgLSBGaWVsZHNcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBiZWZvcmVDaGFuZ2U8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPih7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBkb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgICAgIGRvY1dpdGhMb2NhbGVzOiBkb2MsXG4gICAgICAgICAgZW50aXR5Q29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICAgIGlkLFxuICAgICAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHNraXBWYWxpZGF0aW9uOiBzaG91bGRTYXZlRHJhZnQgfHwgZGF0YS5fc3RhdHVzID09PSAnZHJhZnQnLFxuICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIFVwZGF0ZVxuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgaWYgKCFzaG91bGRTYXZlRHJhZnQpIHtcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCByZXEucGF5bG9hZC5kYi51cGRhdGVPbmUoe1xuICAgICAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQsXG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIENyZWF0ZSB2ZXJzaW9uXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy52ZXJzaW9ucykge1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHNhdmVWZXJzaW9uKHtcbiAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgZG9jV2l0aExvY2FsZXM6IHtcbiAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGRvYy5jcmVhdGVkQXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBkcmFmdDogc2hvdWxkU2F2ZURyYWZ0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBhZnRlclJlYWQgLSBGaWVsZHNcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgICAgZW50aXR5Q29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vIGFmdGVyUmVhZCAtIENvbGxlY3Rpb25cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJSZWFkLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBkb2M6IHJlc3VsdCxcbiAgICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIH0pIHx8IHJlc3VsdDtcbiAgICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gYWZ0ZXJDaGFuZ2UgLSBGaWVsZHNcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyQ2hhbmdlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4oe1xuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgICAgcHJldmlvdXNEb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgICAgIGVudGl0eUNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBhZnRlckNoYW5nZSAtIENvbGxlY3Rpb25cbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJDaGFuZ2UucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCBob29rKHtcbiAgICAgICAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgICAgICAgcHJldmlvdXNEb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgICAgIH0pIHx8IHJlc3VsdDtcbiAgICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgICAgIGF3YWl0IHVubGlua1RlbXBGaWxlcyh7XG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gUmV0dXJuIHJlc3VsdHNcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF3YWl0ZWREb2NzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGRvY3M6IGF3YWl0ZWREb2NzLmZpbHRlcihCb29sZWFuKSxcbiAgICAgIGVycm9ycyxcbiAgICB9O1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGJ1aWxkQWZ0ZXJPcGVyYXRpb248R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPih7XG4gICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgYXJncyxcbiAgICAgIHJlc3VsdCxcbiAgICB9KTtcblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IHBheWxvYWQuZGIuY29tbWl0VHJhbnNhY3Rpb24ocmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGU7XG4iXSwibmFtZXMiOlsiaHR0cFN0YXR1cyIsImV4ZWN1dGVBY2Nlc3MiLCJBUElFcnJvciIsInNhdmVWZXJzaW9uIiwidXBsb2FkRmlsZXMiLCJiZWZvcmVDaGFuZ2UiLCJiZWZvcmVWYWxpZGF0ZSIsImFmdGVyQ2hhbmdlIiwiYWZ0ZXJSZWFkIiwiZ2VuZXJhdGVGaWxlRGF0YSIsImRlbGV0ZUFzc29jaWF0ZWRGaWxlcyIsInVubGlua1RlbXBGaWxlcyIsInZhbGlkYXRlUXVlcnlQYXRocyIsImNvbWJpbmVRdWVyaWVzIiwiYXBwZW5kVmVyc2lvblRvUXVlcnlLZXkiLCJidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzIiwiaW5pdFRyYW5zYWN0aW9uIiwia2lsbFRyYW5zYWN0aW9uIiwiYnVpbGRBZnRlck9wZXJhdGlvbiIsInVwZGF0ZSIsImluY29taW5nQXJncyIsImFyZ3MiLCJkZXB0aCIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uQ29uZmlnIiwid2hlcmUiLCJyZXEiLCJ0IiwibG9jYWxlIiwicGF5bG9hZCIsImNvbmZpZyIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsIm92ZXJ3cml0ZUV4aXN0aW5nRmlsZXMiLCJkcmFmdEFyZyIsInNob3VsZENvbW1pdCIsImJ1bGtVcGRhdGVEYXRhIiwic2hvdWxkU2F2ZURyYWZ0IiwiYWNjZXNzUmVzdWx0IiwiZnVsbFdoZXJlIiwiZG9jcyIsInZlcnNpb25zV2hlcmUiLCJxdWVyeSIsIm5ld0ZpbGVEYXRhIiwiZmlsZXNUb1VwbG9hZCIsImVycm9ycyIsInByb21pc2VzIiwiYXdhaXRlZERvY3MiLCJyZXN1bHQiLCJlcnJvciIsImhvb2tzIiwiYmVmb3JlT3BlcmF0aW9uIiwicmVkdWNlIiwicHJpb3JIb29rIiwiaG9vayIsIm9wZXJhdGlvbiIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImRyYWZ0IiwiQkFEX1JFUVVFU1QiLCJkYXRhIiwiQm9vbGVhbiIsInZlcnNpb25zIiwiZHJhZnRzIiwiYWNjZXNzIiwidmVyc2lvbkZpZWxkcyIsImRiIiwicXVlcnlEcmFmdHMiLCJzbHVnIiwiZmluZCIsInBhZ2luYXRpb24iLCJsaW1pdCIsInRocm93T25NaXNzaW5nRmlsZSIsImZpbGVzIiwibWFwIiwiZG9jIiwiaWQiLCJvcmlnaW5hbERvYyIsImVudGl0eUNvbmZpZyIsIm92ZXJyaWRlRGVsZXRlIiwidXBsb2FkIiwiZGlzYWJsZUxvY2FsU3RvcmFnZSIsImRvY1dpdGhMb2NhbGVzIiwic2tpcFZhbGlkYXRpb24iLCJfc3RhdHVzIiwidXBkYXRlT25lIiwiY3JlYXRlZEF0IiwicHJldmlvdXNEb2MiLCJwdXNoIiwibWVzc2FnZSIsImFsbCIsImZpbHRlciIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxnQkFBZ0IsY0FBYztBQUtyQyxPQUFPQyxtQkFBbUIsMkJBQTJCO0FBQ3JELFNBQVNDLFFBQVEsUUFBUSxlQUFlO0FBRXhDLFNBQVNDLFdBQVcsUUFBUSw2QkFBNkI7QUFD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