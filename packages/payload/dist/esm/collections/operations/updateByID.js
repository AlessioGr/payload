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
import { APIError, Forbidden, NotFound } from "../../errors";
import { hasWhereAccessResult } from "../../auth/types";
import { saveVersion } from "../../versions/saveVersion";
import { uploadFiles } from "../../uploads/uploadFiles";
import { beforeChange } from "../../fields/hooks/beforeChange";
import { beforeValidate } from "../../fields/hooks/beforeValidate";
import { afterChange } from "../../fields/hooks/afterChange";
import { afterRead } from "../../fields/hooks/afterRead";
import { generateFileData } from "../../uploads/generateFileData";
import { getLatestCollectionVersion } from "../../versions/getLatestCollectionVersion";
import { deleteAssociatedFiles } from "../../uploads/deleteAssociatedFiles";
import { unlinkTempFiles } from "../../uploads/unlinkTempFiles";
import { buildAfterOperation } from "./utils";
import { generatePasswordSaltHash } from "../../auth/strategies/local/generatePasswordSaltHash";
import { combineQueries } from "../../database/combineQueries";
import { initTransaction } from "../../utilities/initTransaction";
import { killTransaction } from "../../utilities/killTransaction";
function updateByID(incomingArgs) {
    return _updateByID.apply(this, arguments);
}
function _updateByID() {
    _updateByID = _async_to_generator(function(incomingArgs) {
        var args, depth, collection, _args_collection, collectionConfig, id, req, _args_req, t, locale, payload, config, overrideAccess, showHiddenFields, _args_overwriteExistingFiles, overwriteExistingFiles, tmp, draftArg, _args_autosave, autosave, shouldCommit, data, password, shouldSaveDraft, shouldSavePassword, accessResults, _tmp, hasWherePolicy, findOneArgs, docWithLocales, originalDoc, _ref, newFileData, filesToUpload, result, dataToUpdate, _ref1, hash, salt, error;
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
                    depth = args.depth, collection = args.collection, _args_collection = args.collection, collectionConfig = _args_collection.config, id = args.id, req = args.req, _args_req = args.req, t = _args_req.t, locale = _args_req.locale, payload = _args_req.payload, config = _args_req.payload.config, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields, _args_overwriteExistingFiles = args.overwriteExistingFiles, overwriteExistingFiles = _args_overwriteExistingFiles === void 0 ? false : _args_overwriteExistingFiles, tmp = args.draft, draftArg = tmp === void 0 ? false : tmp, _args_autosave = args.autosave, autosave = _args_autosave === void 0 ? false : _args_autosave;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        32,
                        ,
                        34
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
                    if (!id) {
                        throw new APIError("Missing ID of document to update.", httpStatus.BAD_REQUEST);
                    }
                    data = args.data;
                    password = data.password;
                    shouldSaveDraft = Boolean(draftArg && collectionConfig.versions.drafts);
                    shouldSavePassword = Boolean(password && collectionConfig.auth && !shouldSaveDraft);
                    if (!!overrideAccess) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        executeAccess({
                            req: req,
                            id: id,
                            data: data
                        }, collectionConfig.access.update)
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
                    hasWherePolicy = hasWhereAccessResult(accessResults);
                    findOneArgs = {
                        collection: collectionConfig.slug,
                        where: combineQueries({
                            id: {
                                equals: id
                            }
                        }, accessResults),
                        locale: locale
                    };
                    return [
                        4,
                        getLatestCollectionVersion({
                            payload: payload,
                            config: collectionConfig,
                            id: id,
                            query: findOneArgs,
                            req: req
                        })
                    ];
                case 8:
                    docWithLocales = _state.sent();
                    if (!docWithLocales && !hasWherePolicy) throw new NotFound(t);
                    if (!docWithLocales && hasWherePolicy) throw new Forbidden(t);
                    return [
                        4,
                        afterRead({
                            depth: 0,
                            doc: docWithLocales,
                            entityConfig: collectionConfig,
                            req: req,
                            overrideAccess: true,
                            showHiddenFields: true,
                            context: req.context
                        })
                    ];
                case 9:
                    originalDoc = _state.sent();
                    return [
                        4,
                        generateFileData({
                            config: config,
                            collection: collection,
                            req: req,
                            data: data,
                            throwOnMissingFile: false,
                            overwriteExistingFiles: overwriteExistingFiles
                        })
                    ];
                case 10:
                    _ref = _state.sent(), newFileData = _ref.data, filesToUpload = _ref.files;
                    data = newFileData;
                    // /////////////////////////////////////
                    // Delete any associated files
                    // /////////////////////////////////////
                    return [
                        4,
                        deleteAssociatedFiles({
                            config: config,
                            collectionConfig: collectionConfig,
                            files: filesToUpload,
                            doc: docWithLocales,
                            t: t,
                            overrideDelete: false
                        })
                    ];
                case 11:
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
                case 12:
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
                case 13:
                    _state.sent();
                    if (!!collectionConfig.upload.disableLocalStorage) return [
                        3,
                        15
                    ];
                    return [
                        4,
                        uploadFiles(payload, filesToUpload, t)
                    ];
                case 14:
                    _state.sent();
                    _state.label = 15;
                case 15:
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
                case 16:
                    _state.sent();
                    return [
                        4,
                        beforeChange({
                            data: data,
                            doc: originalDoc,
                            docWithLocales: docWithLocales,
                            entityConfig: collectionConfig,
                            id: id,
                            operation: "update",
                            req: req,
                            skipValidation: shouldSaveDraft || data._status === "draft",
                            context: req.context
                        })
                    ];
                case 17:
                    result = _state.sent();
                    dataToUpdate = _object_spread({}, result);
                    if (!(shouldSavePassword && typeof password === "string")) return [
                        3,
                        19
                    ];
                    return [
                        4,
                        generatePasswordSaltHash({
                            password: password
                        })
                    ];
                case 18:
                    _ref1 = _state.sent(), hash = _ref1.hash, salt = _ref1.salt;
                    dataToUpdate.salt = salt;
                    dataToUpdate.hash = hash;
                    delete data.password;
                    delete result.password;
                    _state.label = 19;
                case 19:
                    if (!!shouldSaveDraft) return [
                        3,
                        21
                    ];
                    return [
                        4,
                        req.payload.db.updateOne({
                            collection: collectionConfig.slug,
                            locale: locale,
                            id: id,
                            data: dataToUpdate,
                            req: req
                        })
                    ];
                case 20:
                    result = _state.sent();
                    _state.label = 21;
                case 21:
                    if (!collectionConfig.versions) return [
                        3,
                        23
                    ];
                    return [
                        4,
                        saveVersion({
                            payload: payload,
                            collection: collectionConfig,
                            req: req,
                            docWithLocales: _object_spread_props(_object_spread({}, result), {
                                createdAt: docWithLocales.createdAt
                            }),
                            id: id,
                            autosave: autosave,
                            draft: shouldSaveDraft
                        })
                    ];
                case 22:
                    result = _state.sent();
                    _state.label = 23;
                case 23:
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
                case 24:
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
                case 25:
                    _state.sent();
                    return [
                        4,
                        afterChange({
                            data: data,
                            doc: result,
                            previousDoc: originalDoc,
                            entityConfig: collectionConfig,
                            operation: "update",
                            req: req,
                            context: req.context
                        })
                    ];
                case 26:
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
                case 27:
                    _state.sent();
                    return [
                        4,
                        buildAfterOperation({
                            operation: "updateByID",
                            args: args,
                            result: result
                        })
                    ];
                case 28:
                    // /////////////////////////////////////
                    // afterOperation - Collection
                    // /////////////////////////////////////
                    result = _state.sent();
                    return [
                        4,
                        unlinkTempFiles({
                            req: req,
                            config: config,
                            collectionConfig: collectionConfig
                        })
                    ];
                case 29:
                    _state.sent();
                    if (!shouldCommit) return [
                        3,
                        31
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 30:
                    _state.sent();
                    _state.label = 31;
                case 31:
                    return [
                        2,
                        result
                    ];
                case 32:
                    error = _state.sent();
                    return [
                        4,
                        killTransaction(req)
                    ];
                case 33:
                    _state.sent();
                    throw error;
                case 34:
                    return [
                        2
                    ];
            }
        });
    });
    return _updateByID.apply(this, arguments);
}
export default updateByID;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL3VwZGF0ZUJ5SUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tICd0cy1lc3NlbnRpYWxzJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJztcbmltcG9ydCB7IEFQSUVycm9yLCBGb3JiaWRkZW4sIE5vdEZvdW5kIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBoYXNXaGVyZUFjY2Vzc1Jlc3VsdCB9IGZyb20gJy4uLy4uL2F1dGgvdHlwZXMnO1xuaW1wb3J0IHsgc2F2ZVZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9zYXZlVmVyc2lvbic7XG5pbXBvcnQgeyB1cGxvYWRGaWxlcyB9IGZyb20gJy4uLy4uL3VwbG9hZHMvdXBsb2FkRmlsZXMnO1xuaW1wb3J0IHsgYmVmb3JlQ2hhbmdlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2JlZm9yZUNoYW5nZSc7XG5pbXBvcnQgeyBiZWZvcmVWYWxpZGF0ZSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9iZWZvcmVWYWxpZGF0ZSc7XG5pbXBvcnQgeyBhZnRlckNoYW5nZSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlckNoYW5nZSc7XG5pbXBvcnQgeyBhZnRlclJlYWQgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkJztcbmltcG9ydCB7IGdlbmVyYXRlRmlsZURhdGEgfSBmcm9tICcuLi8uLi91cGxvYWRzL2dlbmVyYXRlRmlsZURhdGEnO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Q29sbGVjdGlvblZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9nZXRMYXRlc3RDb2xsZWN0aW9uVmVyc2lvbic7XG5pbXBvcnQgeyBkZWxldGVBc3NvY2lhdGVkRmlsZXMgfSBmcm9tICcuLi8uLi91cGxvYWRzL2RlbGV0ZUFzc29jaWF0ZWRGaWxlcyc7XG5pbXBvcnQgeyB1bmxpbmtUZW1wRmlsZXMgfSBmcm9tICcuLi8uLi91cGxvYWRzL3VubGlua1RlbXBGaWxlcyc7XG5pbXBvcnQgeyBidWlsZEFmdGVyT3BlcmF0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVBhc3N3b3JkU2FsdEhhc2ggfSBmcm9tICcuLi8uLi9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoJztcbmltcG9ydCB7IGNvbWJpbmVRdWVyaWVzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvY29tYmluZVF1ZXJpZXMnO1xuaW1wb3J0IHR5cGUgeyBGaW5kT25lQXJncyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL3R5cGVzJztcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5cbmV4cG9ydCB0eXBlIEFyZ3VtZW50czxUIGV4dGVuZHMgeyBbZmllbGQ6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbF06IHVua25vd24gfT4gPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBpZDogc3RyaW5nIHwgbnVtYmVyXG4gIGRhdGE6IERlZXBQYXJ0aWFsPFQ+XG4gIGRlcHRoPzogbnVtYmVyXG4gIGRpc2FibGVWZXJpZmljYXRpb25FbWFpbD86IGJvb2xlYW5cbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIG92ZXJ3cml0ZUV4aXN0aW5nRmlsZXM/OiBib29sZWFuXG4gIGRyYWZ0PzogYm9vbGVhblxuICBhdXRvc2F2ZT86IGJvb2xlYW5cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlQnlJRDxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgaW5jb21pbmdBcmdzOiBBcmd1bWVudHM8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPixcbik6IFByb21pc2U8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPiB7XG4gIGxldCBhcmdzID0gaW5jb21pbmdBcmdzO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gYmVmb3JlT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgYXJncyxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICBjb250ZXh0OiBhcmdzLnJlcS5jb250ZXh0LFxuICAgIH0pKSB8fCBhcmdzO1xuICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgY29uc3Qge1xuICAgIGRlcHRoLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgIH0sXG4gICAgaWQsXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgdCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHBheWxvYWQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIG92ZXJ3cml0ZUV4aXN0aW5nRmlsZXMgPSBmYWxzZSxcbiAgICBkcmFmdDogZHJhZnRBcmcgPSBmYWxzZSxcbiAgICBhdXRvc2F2ZSA9IGZhbHNlLFxuICB9ID0gYXJncztcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZU9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmJlZm9yZU9wZXJhdGlvbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgICBhcmdzLFxuICAgICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pKSB8fCBhcmdzO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIGlmICghaWQpIHtcbiAgICAgIHRocm93IG5ldyBBUElFcnJvcignTWlzc2luZyBJRCBvZiBkb2N1bWVudCB0byB1cGRhdGUuJywgaHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gICAgfVxuXG4gICAgbGV0IHsgZGF0YSB9ID0gYXJncztcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSBkYXRhO1xuICAgIGNvbnN0IHNob3VsZFNhdmVEcmFmdCA9IEJvb2xlYW4oZHJhZnRBcmcgJiYgY29sbGVjdGlvbkNvbmZpZy52ZXJzaW9ucy5kcmFmdHMpO1xuICAgIGNvbnN0IHNob3VsZFNhdmVQYXNzd29yZCA9IEJvb2xlYW4ocGFzc3dvcmQgJiYgY29sbGVjdGlvbkNvbmZpZy5hdXRoICYmICFzaG91bGRTYXZlRHJhZnQpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxLCBpZCwgZGF0YSB9LCBjb2xsZWN0aW9uQ29uZmlnLmFjY2Vzcy51cGRhdGUpIDogdHJ1ZTtcbiAgICBjb25zdCBoYXNXaGVyZVBvbGljeSA9IGhhc1doZXJlQWNjZXNzUmVzdWx0KGFjY2Vzc1Jlc3VsdHMpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHJpZXZlIGRvY3VtZW50XG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICBjb25zdCBmaW5kT25lQXJnczogRmluZE9uZUFyZ3MgPSB7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICB3aGVyZTogY29tYmluZVF1ZXJpZXMoeyBpZDogeyBlcXVhbHM6IGlkIH0gfSwgYWNjZXNzUmVzdWx0cyksXG4gICAgICBsb2NhbGUsXG4gICAgfTtcblxuICAgIGNvbnN0IGRvY1dpdGhMb2NhbGVzID0gYXdhaXQgZ2V0TGF0ZXN0Q29sbGVjdGlvblZlcnNpb24oe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIGlkLFxuICAgICAgcXVlcnk6IGZpbmRPbmVBcmdzLFxuICAgICAgcmVxLFxuICAgIH0pO1xuXG4gICAgaWYgKCFkb2NXaXRoTG9jYWxlcyAmJiAhaGFzV2hlcmVQb2xpY3kpIHRocm93IG5ldyBOb3RGb3VuZCh0KTtcbiAgICBpZiAoIWRvY1dpdGhMb2NhbGVzICYmIGhhc1doZXJlUG9saWN5KSB0aHJvdyBuZXcgRm9yYmlkZGVuKHQpO1xuXG5cbiAgICBjb25zdCBvcmlnaW5hbERvYyA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBkZXB0aDogMCxcbiAgICAgIGRvYzogZG9jV2l0aExvY2FsZXMsXG4gICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICByZXEsXG4gICAgICBvdmVycmlkZUFjY2VzczogdHJ1ZSxcbiAgICAgIHNob3dIaWRkZW5GaWVsZHM6IHRydWUsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBHZW5lcmF0ZSBkYXRhIGZvciBhbGwgZmlsZXMgYW5kIHNpemVzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgeyBkYXRhOiBuZXdGaWxlRGF0YSwgZmlsZXM6IGZpbGVzVG9VcGxvYWQgfSA9IGF3YWl0IGdlbmVyYXRlRmlsZURhdGEoe1xuICAgICAgY29uZmlnLFxuICAgICAgY29sbGVjdGlvbixcbiAgICAgIHJlcSxcbiAgICAgIGRhdGEsXG4gICAgICB0aHJvd09uTWlzc2luZ0ZpbGU6IGZhbHNlLFxuICAgICAgb3ZlcndyaXRlRXhpc3RpbmdGaWxlcyxcbiAgICB9KTtcblxuICAgIGRhdGEgPSBuZXdGaWxlRGF0YTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBEZWxldGUgYW55IGFzc29jaWF0ZWQgZmlsZXNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBkZWxldGVBc3NvY2lhdGVkRmlsZXMoeyBjb25maWcsIGNvbGxlY3Rpb25Db25maWcsIGZpbGVzOiBmaWxlc1RvVXBsb2FkLCBkb2M6IGRvY1dpdGhMb2NhbGVzLCB0LCBvdmVycmlkZURlbGV0ZTogZmFsc2UgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlVmFsaWRhdGUgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBkYXRhID0gYXdhaXQgYmVmb3JlVmFsaWRhdGU8RGVlcFBhcnRpYWw8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPj4oe1xuICAgICAgZGF0YSxcbiAgICAgIGRvYzogb3JpZ2luYWxEb2MsXG4gICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBpZCxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHJlcSxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZVZhbGlkYXRlIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlVmFsaWRhdGUucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgZGF0YSA9IChhd2FpdCBob29rKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgICBvcmlnaW5hbERvYyxcbiAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICB9KSkgfHwgZGF0YTtcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gV3JpdGUgZmlsZXMgdG8gbG9jYWwgc3RvcmFnZVxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmICghY29sbGVjdGlvbkNvbmZpZy51cGxvYWQuZGlzYWJsZUxvY2FsU3RvcmFnZSkge1xuICAgICAgYXdhaXQgdXBsb2FkRmlsZXMocGF5bG9hZCwgZmlsZXNUb1VwbG9hZCwgdCk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZUNoYW5nZSAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmJlZm9yZUNoYW5nZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICBkYXRhID0gKGF3YWl0IGhvb2soe1xuICAgICAgICBkYXRhLFxuICAgICAgICByZXEsXG4gICAgICAgIG9yaWdpbmFsRG9jLFxuICAgICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pKSB8fCBkYXRhO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVDaGFuZ2UgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYmVmb3JlQ2hhbmdlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4oe1xuICAgICAgZGF0YSxcbiAgICAgIGRvYzogb3JpZ2luYWxEb2MsXG4gICAgICBkb2NXaXRoTG9jYWxlcyxcbiAgICAgIGVudGl0eUNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIGlkLFxuICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgIHJlcSxcbiAgICAgIHNraXBWYWxpZGF0aW9uOiBzaG91bGRTYXZlRHJhZnQgfHwgZGF0YS5fc3RhdHVzID09PSAnZHJhZnQnLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gSGFuZGxlIHBvdGVudGlhbCBwYXNzd29yZCB1cGRhdGVcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBkYXRhVG9VcGRhdGU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0geyAuLi5yZXN1bHQgfTtcblxuICAgIGlmIChzaG91bGRTYXZlUGFzc3dvcmQgJiYgdHlwZW9mIHBhc3N3b3JkID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgeyBoYXNoLCBzYWx0IH0gPSBhd2FpdCBnZW5lcmF0ZVBhc3N3b3JkU2FsdEhhc2goeyBwYXNzd29yZCB9KTtcbiAgICAgIGRhdGFUb1VwZGF0ZS5zYWx0ID0gc2FsdDtcbiAgICAgIGRhdGFUb1VwZGF0ZS5oYXNoID0gaGFzaDtcbiAgICAgIGRlbGV0ZSBkYXRhLnBhc3N3b3JkO1xuICAgICAgZGVsZXRlIHJlc3VsdC5wYXNzd29yZDtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVXBkYXRlXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKCFzaG91bGRTYXZlRHJhZnQpIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHJlcS5wYXlsb2FkLmRiLnVwZGF0ZU9uZSh7XG4gICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBpZCxcbiAgICAgICAgZGF0YTogZGF0YVRvVXBkYXRlLFxuICAgICAgICByZXEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQ3JlYXRlIHZlcnNpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy52ZXJzaW9ucykge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgc2F2ZVZlcnNpb24oe1xuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICByZXEsXG4gICAgICAgIGRvY1dpdGhMb2NhbGVzOiB7XG4gICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgIGNyZWF0ZWRBdDogZG9jV2l0aExvY2FsZXMuY3JlYXRlZEF0LFxuICAgICAgICB9LFxuICAgICAgICBpZCxcbiAgICAgICAgYXV0b3NhdmUsXG4gICAgICAgIGRyYWZ0OiBzaG91bGRTYXZlRHJhZnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgIGRlcHRoLFxuICAgICAgZG9jOiByZXN1bHQsXG4gICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICByZXEsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkgfHwgcmVzdWx0O1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlckNoYW5nZSAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyQ2hhbmdlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4oe1xuICAgICAgZGF0YSxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgcHJldmlvdXNEb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgZW50aXR5Q29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgIHJlcSxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyQ2hhbmdlIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJDaGFuZ2UucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgICBwcmV2aW91c0RvYzogb3JpZ2luYWxEb2MsXG4gICAgICAgIHJlcSxcbiAgICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICB9KSB8fCByZXN1bHQ7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGJ1aWxkQWZ0ZXJPcGVyYXRpb248R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPih7XG4gICAgICBvcGVyYXRpb246ICd1cGRhdGVCeUlEJyxcbiAgICAgIGFyZ3MsXG4gICAgICByZXN1bHQsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB1bmxpbmtUZW1wRmlsZXMoe1xuICAgICAgcmVxLFxuICAgICAgY29uZmlnLFxuICAgICAgY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXR1cm4gcmVzdWx0c1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IHBheWxvYWQuZGIuY29tbWl0VHJhbnNhY3Rpb24ocmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVCeUlEO1xuIl0sIm5hbWVzIjpbImh0dHBTdGF0dXMiLCJleGVjdXRlQWNjZXNzIiwiQVBJRXJyb3IiLCJGb3JiaWRkZW4iLCJOb3RGb3VuZCIsImhhc1doZXJlQWNjZXNzUmVzdWx0Iiwic2F2ZVZlcnNpb24iLCJ1cGxvYWRGaWxlcyIsImJlZm9yZUNoYW5nZSIsImJlZm9yZVZhbGlkYXRlIiwiYWZ0ZXJDaGFuZ2UiLCJhZnRlclJlYWQiLCJnZW5lcmF0ZUZpbGVEYXRhIiwiZ2V0TGF0ZXN0Q29sbGVjdGlvblZlcnNpb24iLCJkZWxldGVBc3NvY2lhdGVkRmlsZXMiLCJ1bmxpbmtUZW1wRmlsZXMiLCJidWlsZEFmdGVyT3BlcmF0aW9uIiwiZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoIiwiY29tYmluZVF1ZXJpZXMiLCJpbml0VHJhbnNhY3Rpb24iLCJraWxsVHJhbnNhY3Rpb24iLCJ1cGRhdGVCeUlEIiwiaW5jb21pbmdBcmdzIiwiYXJncyIsImRlcHRoIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25Db25maWciLCJpZCIsInJlcSIsInQiLCJsb2NhbGUiLCJwYXlsb2FkIiwiY29uZmlnIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwib3ZlcndyaXRlRXhpc3RpbmdGaWxlcyIsImRyYWZ0QXJnIiwiYXV0b3NhdmUiLCJzaG91bGRDb21taXQiLCJkYXRhIiwicGFzc3dvcmQiLCJzaG91bGRTYXZlRHJhZnQiLCJzaG91bGRTYXZlUGFzc3dvcmQiLCJhY2Nlc3NSZXN1bHRzIiwiaGFzV2hlcmVQb2xpY3kiLCJmaW5kT25lQXJncyIsImRvY1dpdGhMb2NhbGVzIiwib3JpZ2luYWxEb2MiLCJuZXdGaWxlRGF0YSIsImZpbGVzVG9VcGxvYWQiLCJyZXN1bHQiLCJkYXRhVG9VcGRhdGUiLCJoYXNoIiwic2FsdCIsImVycm9yIiwiaG9va3MiLCJiZWZvcmVPcGVyYXRpb24iLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwib3BlcmF0aW9uIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZHJhZnQiLCJCQURfUkVRVUVTVCIsIkJvb2xlYW4iLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImF1dGgiLCJhY2Nlc3MiLCJ1cGRhdGUiLCJzbHVnIiwid2hlcmUiLCJlcXVhbHMiLCJxdWVyeSIsImRvYyIsImVudGl0eUNvbmZpZyIsInRocm93T25NaXNzaW5nRmlsZSIsImZpbGVzIiwib3ZlcnJpZGVEZWxldGUiLCJ1cGxvYWQiLCJkaXNhYmxlTG9jYWxTdG9yYWdlIiwic2tpcFZhbGlkYXRpb24iLCJfc3RhdHVzIiwiZGIiLCJ1cGRhdGVPbmUiLCJjcmVhdGVkQXQiLCJwcmV2aW91c0RvYyIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxnQkFBZ0IsY0FBYztBQUlyQyxPQUFPQyxtQkFBbUIsMkJBQTJCO0FBQ3JELFNBQVNDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLFFBQVEsZUFBZTtBQUU3RCxTQUFTQyxvQkFBb0IsUUFBUSxtQkFBbUI7QUFDeEQs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