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
var _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
var _errors = require("../../errors");
var _types = require("../../auth/types");
var _saveVersion = require("../../versions/saveVersion");
var _uploadFiles = require("../../uploads/uploadFiles");
var _beforeChange = require("../../fields/hooks/beforeChange");
var _beforeValidate = require("../../fields/hooks/beforeValidate");
var _afterChange = require("../../fields/hooks/afterChange");
var _afterRead = require("../../fields/hooks/afterRead");
var _generateFileData = require("../../uploads/generateFileData");
var _getLatestCollectionVersion = require("../../versions/getLatestCollectionVersion");
var _deleteAssociatedFiles = require("../../uploads/deleteAssociatedFiles");
var _unlinkTempFiles = require("../../uploads/unlinkTempFiles");
var _utils = require("./utils");
var _generatePasswordSaltHash = require("../../auth/strategies/local/generatePasswordSaltHash");
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
                        throw new _errors.APIError("Missing ID of document to update.", _httpstatus.default.BAD_REQUEST);
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
                        (0, _executeAccess.default)({
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
                    hasWherePolicy = (0, _types.hasWhereAccessResult)(accessResults);
                    findOneArgs = {
                        collection: collectionConfig.slug,
                        where: (0, _combineQueries.combineQueries)({
                            id: {
                                equals: id
                            }
                        }, accessResults),
                        locale: locale
                    };
                    return [
                        4,
                        (0, _getLatestCollectionVersion.getLatestCollectionVersion)({
                            payload: payload,
                            config: collectionConfig,
                            id: id,
                            query: findOneArgs,
                            req: req
                        })
                    ];
                case 8:
                    docWithLocales = _state.sent();
                    if (!docWithLocales && !hasWherePolicy) throw new _errors.NotFound(t);
                    if (!docWithLocales && hasWherePolicy) throw new _errors.Forbidden(t);
                    return [
                        4,
                        (0, _afterRead.afterRead)({
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
                        (0, _generateFileData.generateFileData)({
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
                        (0, _deleteAssociatedFiles.deleteAssociatedFiles)({
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
                        (0, _beforeValidate.beforeValidate)({
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
                        (0, _uploadFiles.uploadFiles)(payload, filesToUpload, t)
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
                        (0, _beforeChange.beforeChange)({
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
                        (0, _generatePasswordSaltHash.generatePasswordSaltHash)({
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
                        (0, _saveVersion.saveVersion)({
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
                        (0, _afterRead.afterRead)({
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
                        (0, _afterChange.afterChange)({
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
                        (0, _utils.buildAfterOperation)({
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
                        (0, _unlinkTempFiles.unlinkTempFiles)({
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
                        (0, _killTransaction.killTransaction)(req)
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
var _default = updateByID;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL3VwZGF0ZUJ5SUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tICd0cy1lc3NlbnRpYWxzJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJztcbmltcG9ydCB7IEFQSUVycm9yLCBGb3JiaWRkZW4sIE5vdEZvdW5kIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBoYXNXaGVyZUFjY2Vzc1Jlc3VsdCB9IGZyb20gJy4uLy4uL2F1dGgvdHlwZXMnO1xuaW1wb3J0IHsgc2F2ZVZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9zYXZlVmVyc2lvbic7XG5pbXBvcnQgeyB1cGxvYWRGaWxlcyB9IGZyb20gJy4uLy4uL3VwbG9hZHMvdXBsb2FkRmlsZXMnO1xuaW1wb3J0IHsgYmVmb3JlQ2hhbmdlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2JlZm9yZUNoYW5nZSc7XG5pbXBvcnQgeyBiZWZvcmVWYWxpZGF0ZSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9iZWZvcmVWYWxpZGF0ZSc7XG5pbXBvcnQgeyBhZnRlckNoYW5nZSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlckNoYW5nZSc7XG5pbXBvcnQgeyBhZnRlclJlYWQgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkJztcbmltcG9ydCB7IGdlbmVyYXRlRmlsZURhdGEgfSBmcm9tICcuLi8uLi91cGxvYWRzL2dlbmVyYXRlRmlsZURhdGEnO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Q29sbGVjdGlvblZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9nZXRMYXRlc3RDb2xsZWN0aW9uVmVyc2lvbic7XG5pbXBvcnQgeyBkZWxldGVBc3NvY2lhdGVkRmlsZXMgfSBmcm9tICcuLi8uLi91cGxvYWRzL2RlbGV0ZUFzc29jaWF0ZWRGaWxlcyc7XG5pbXBvcnQgeyB1bmxpbmtUZW1wRmlsZXMgfSBmcm9tICcuLi8uLi91cGxvYWRzL3VubGlua1RlbXBGaWxlcyc7XG5pbXBvcnQgeyBidWlsZEFmdGVyT3BlcmF0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVBhc3N3b3JkU2FsdEhhc2ggfSBmcm9tICcuLi8uLi9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoJztcbmltcG9ydCB7IGNvbWJpbmVRdWVyaWVzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvY29tYmluZVF1ZXJpZXMnO1xuaW1wb3J0IHR5cGUgeyBGaW5kT25lQXJncyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL3R5cGVzJztcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5cbmV4cG9ydCB0eXBlIEFyZ3VtZW50czxUIGV4dGVuZHMgeyBbZmllbGQ6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbF06IHVua25vd24gfT4gPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBpZDogc3RyaW5nIHwgbnVtYmVyXG4gIGRhdGE6IERlZXBQYXJ0aWFsPFQ+XG4gIGRlcHRoPzogbnVtYmVyXG4gIGRpc2FibGVWZXJpZmljYXRpb25FbWFpbD86IGJvb2xlYW5cbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIG92ZXJ3cml0ZUV4aXN0aW5nRmlsZXM/OiBib29sZWFuXG4gIGRyYWZ0PzogYm9vbGVhblxuICBhdXRvc2F2ZT86IGJvb2xlYW5cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlQnlJRDxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgaW5jb21pbmdBcmdzOiBBcmd1bWVudHM8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPixcbik6IFByb21pc2U8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPiB7XG4gIGxldCBhcmdzID0gaW5jb21pbmdBcmdzO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gYmVmb3JlT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgYXJncyxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICBjb250ZXh0OiBhcmdzLnJlcS5jb250ZXh0LFxuICAgIH0pKSB8fCBhcmdzO1xuICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgY29uc3Qge1xuICAgIGRlcHRoLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgIH0sXG4gICAgaWQsXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgdCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHBheWxvYWQsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIG92ZXJ3cml0ZUV4aXN0aW5nRmlsZXMgPSBmYWxzZSxcbiAgICBkcmFmdDogZHJhZnRBcmcgPSBmYWxzZSxcbiAgICBhdXRvc2F2ZSA9IGZhbHNlLFxuICB9ID0gYXJncztcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZU9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmJlZm9yZU9wZXJhdGlvbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgICBhcmdzLFxuICAgICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pKSB8fCBhcmdzO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIGlmICghaWQpIHtcbiAgICAgIHRocm93IG5ldyBBUElFcnJvcignTWlzc2luZyBJRCBvZiBkb2N1bWVudCB0byB1cGRhdGUuJywgaHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gICAgfVxuXG4gICAgbGV0IHsgZGF0YSB9ID0gYXJncztcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSBkYXRhO1xuICAgIGNvbnN0IHNob3VsZFNhdmVEcmFmdCA9IEJvb2xlYW4oZHJhZnRBcmcgJiYgY29sbGVjdGlvbkNvbmZpZy52ZXJzaW9ucy5kcmFmdHMpO1xuICAgIGNvbnN0IHNob3VsZFNhdmVQYXNzd29yZCA9IEJvb2xlYW4ocGFzc3dvcmQgJiYgY29sbGVjdGlvbkNvbmZpZy5hdXRoICYmICFzaG91bGRTYXZlRHJhZnQpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxLCBpZCwgZGF0YSB9LCBjb2xsZWN0aW9uQ29uZmlnLmFjY2Vzcy51cGRhdGUpIDogdHJ1ZTtcbiAgICBjb25zdCBoYXNXaGVyZVBvbGljeSA9IGhhc1doZXJlQWNjZXNzUmVzdWx0KGFjY2Vzc1Jlc3VsdHMpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHJpZXZlIGRvY3VtZW50XG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICBjb25zdCBmaW5kT25lQXJnczogRmluZE9uZUFyZ3MgPSB7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICB3aGVyZTogY29tYmluZVF1ZXJpZXMoeyBpZDogeyBlcXVhbHM6IGlkIH0gfSwgYWNjZXNzUmVzdWx0cyksXG4gICAgICBsb2NhbGUsXG4gICAgfTtcblxuICAgIGNvbnN0IGRvY1dpdGhMb2NhbGVzID0gYXdhaXQgZ2V0TGF0ZXN0Q29sbGVjdGlvblZlcnNpb24oe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIGlkLFxuICAgICAgcXVlcnk6IGZpbmRPbmVBcmdzLFxuICAgICAgcmVxLFxuICAgIH0pO1xuXG4gICAgaWYgKCFkb2NXaXRoTG9jYWxlcyAmJiAhaGFzV2hlcmVQb2xpY3kpIHRocm93IG5ldyBOb3RGb3VuZCh0KTtcbiAgICBpZiAoIWRvY1dpdGhMb2NhbGVzICYmIGhhc1doZXJlUG9saWN5KSB0aHJvdyBuZXcgRm9yYmlkZGVuKHQpO1xuXG5cbiAgICBjb25zdCBvcmlnaW5hbERvYyA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBkZXB0aDogMCxcbiAgICAgIGRvYzogZG9jV2l0aExvY2FsZXMsXG4gICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICByZXEsXG4gICAgICBvdmVycmlkZUFjY2VzczogdHJ1ZSxcbiAgICAgIHNob3dIaWRkZW5GaWVsZHM6IHRydWUsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBHZW5lcmF0ZSBkYXRhIGZvciBhbGwgZmlsZXMgYW5kIHNpemVzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgeyBkYXRhOiBuZXdGaWxlRGF0YSwgZmlsZXM6IGZpbGVzVG9VcGxvYWQgfSA9IGF3YWl0IGdlbmVyYXRlRmlsZURhdGEoe1xuICAgICAgY29uZmlnLFxuICAgICAgY29sbGVjdGlvbixcbiAgICAgIHJlcSxcbiAgICAgIGRhdGEsXG4gICAgICB0aHJvd09uTWlzc2luZ0ZpbGU6IGZhbHNlLFxuICAgICAgb3ZlcndyaXRlRXhpc3RpbmdGaWxlcyxcbiAgICB9KTtcblxuICAgIGRhdGEgPSBuZXdGaWxlRGF0YTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBEZWxldGUgYW55IGFzc29jaWF0ZWQgZmlsZXNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBkZWxldGVBc3NvY2lhdGVkRmlsZXMoeyBjb25maWcsIGNvbGxlY3Rpb25Db25maWcsIGZpbGVzOiBmaWxlc1RvVXBsb2FkLCBkb2M6IGRvY1dpdGhMb2NhbGVzLCB0LCBvdmVycmlkZURlbGV0ZTogZmFsc2UgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlVmFsaWRhdGUgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBkYXRhID0gYXdhaXQgYmVmb3JlVmFsaWRhdGU8RGVlcFBhcnRpYWw8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPj4oe1xuICAgICAgZGF0YSxcbiAgICAgIGRvYzogb3JpZ2luYWxEb2MsXG4gICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBpZCxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHJlcSxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZVZhbGlkYXRlIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlVmFsaWRhdGUucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgZGF0YSA9IChhd2FpdCBob29rKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgICBvcmlnaW5hbERvYyxcbiAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICB9KSkgfHwgZGF0YTtcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gV3JpdGUgZmlsZXMgdG8gbG9jYWwgc3RvcmFnZVxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmICghY29sbGVjdGlvbkNvbmZpZy51cGxvYWQuZGlzYWJsZUxvY2FsU3RvcmFnZSkge1xuICAgICAgYXdhaXQgdXBsb2FkRmlsZXMocGF5bG9hZCwgZmlsZXNUb1VwbG9hZCwgdCk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZUNoYW5nZSAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmJlZm9yZUNoYW5nZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICBkYXRhID0gKGF3YWl0IGhvb2soe1xuICAgICAgICBkYXRhLFxuICAgICAgICByZXEsXG4gICAgICAgIG9yaWdpbmFsRG9jLFxuICAgICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pKSB8fCBkYXRhO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVDaGFuZ2UgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYmVmb3JlQ2hhbmdlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4oe1xuICAgICAgZGF0YSxcbiAgICAgIGRvYzogb3JpZ2luYWxEb2MsXG4gICAgICBkb2NXaXRoTG9jYWxlcyxcbiAgICAgIGVudGl0eUNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIGlkLFxuICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgIHJlcSxcbiAgICAgIHNraXBWYWxpZGF0aW9uOiBzaG91bGRTYXZlRHJhZnQgfHwgZGF0YS5fc3RhdHVzID09PSAnZHJhZnQnLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gSGFuZGxlIHBvdGVudGlhbCBwYXNzd29yZCB1cGRhdGVcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCBkYXRhVG9VcGRhdGU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0geyAuLi5yZXN1bHQgfTtcblxuICAgIGlmIChzaG91bGRTYXZlUGFzc3dvcmQgJiYgdHlwZW9mIHBhc3N3b3JkID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgeyBoYXNoLCBzYWx0IH0gPSBhd2FpdCBnZW5lcmF0ZVBhc3N3b3JkU2FsdEhhc2goeyBwYXNzd29yZCB9KTtcbiAgICAgIGRhdGFUb1VwZGF0ZS5zYWx0ID0gc2FsdDtcbiAgICAgIGRhdGFUb1VwZGF0ZS5oYXNoID0gaGFzaDtcbiAgICAgIGRlbGV0ZSBkYXRhLnBhc3N3b3JkO1xuICAgICAgZGVsZXRlIHJlc3VsdC5wYXNzd29yZDtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVXBkYXRlXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKCFzaG91bGRTYXZlRHJhZnQpIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHJlcS5wYXlsb2FkLmRiLnVwZGF0ZU9uZSh7XG4gICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBpZCxcbiAgICAgICAgZGF0YTogZGF0YVRvVXBkYXRlLFxuICAgICAgICByZXEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQ3JlYXRlIHZlcnNpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy52ZXJzaW9ucykge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgc2F2ZVZlcnNpb24oe1xuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICByZXEsXG4gICAgICAgIGRvY1dpdGhMb2NhbGVzOiB7XG4gICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgIGNyZWF0ZWRBdDogZG9jV2l0aExvY2FsZXMuY3JlYXRlZEF0LFxuICAgICAgICB9LFxuICAgICAgICBpZCxcbiAgICAgICAgYXV0b3NhdmUsXG4gICAgICAgIGRyYWZ0OiBzaG91bGRTYXZlRHJhZnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgIGRlcHRoLFxuICAgICAgZG9jOiByZXN1bHQsXG4gICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICByZXEsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkgfHwgcmVzdWx0O1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlckNoYW5nZSAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyQ2hhbmdlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4oe1xuICAgICAgZGF0YSxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgcHJldmlvdXNEb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgZW50aXR5Q29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgIHJlcSxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyQ2hhbmdlIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJDaGFuZ2UucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgICBwcmV2aW91c0RvYzogb3JpZ2luYWxEb2MsXG4gICAgICAgIHJlcSxcbiAgICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICB9KSB8fCByZXN1bHQ7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGJ1aWxkQWZ0ZXJPcGVyYXRpb248R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPih7XG4gICAgICBvcGVyYXRpb246ICd1cGRhdGVCeUlEJyxcbiAgICAgIGFyZ3MsXG4gICAgICByZXN1bHQsXG4gICAgfSk7XG5cbiAgICBhd2FpdCB1bmxpbmtUZW1wRmlsZXMoe1xuICAgICAgcmVxLFxuICAgICAgY29uZmlnLFxuICAgICAgY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXR1cm4gcmVzdWx0c1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IHBheWxvYWQuZGIuY29tbWl0VHJhbnNhY3Rpb24ocmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVCeUlEO1xuIl0sIm5hbWVzIjpbInVwZGF0ZUJ5SUQiLCJpbmNvbWluZ0FyZ3MiLCJhcmdzIiwiZGVwdGgiLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvbkNvbmZpZyIsImlkIiwicmVxIiwidCIsImxvY2FsZSIsInBheWxvYWQiLCJjb25maWciLCJvdmVycmlkZUFjY2VzcyIsInNob3dIaWRkZW5GaWVsZHMiLCJvdmVyd3JpdGVFeGlzdGluZ0ZpbGVzIiwiZHJhZnRBcmciLCJhdXRvc2F2ZSIsInNob3VsZENvbW1pdCIsImRhdGEiLCJwYXNzd29yZCIsInNob3VsZFNhdmVEcmFmdCIsInNob3VsZFNhdmVQYXNzd29yZCIsImFjY2Vzc1Jlc3VsdHMiLCJoYXNXaGVyZVBvbGljeSIsImZpbmRPbmVBcmdzIiwiZG9jV2l0aExvY2FsZXMiLCJvcmlnaW5hbERvYyIsIm5ld0ZpbGVEYXRhIiwiZmlsZXNUb1VwbG9hZCIsInJlc3VsdCIsImRhdGFUb1VwZGF0ZSIsImhhc2giLCJzYWx0IiwiZXJyb3IiLCJob29rcyIsImJlZm9yZU9wZXJhdGlvbiIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJvcGVyYXRpb24iLCJjb250ZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJkcmFmdCIsImluaXRUcmFuc2FjdGlvbiIsIkFQSUVycm9yIiwiaHR0cFN0YXR1cyIsIkJBRF9SRVFVRVNUIiwiQm9vbGVhbiIsInZlcnNpb25zIiwiZHJhZnRzIiwiYXV0aCIsImV4ZWN1dGVBY2Nlc3MiLCJhY2Nlc3MiLCJ1cGRhdGUiLCJoYXNXaGVyZUFjY2Vzc1Jlc3VsdCIsInNsdWciLCJ3aGVyZSIsImNvbWJpbmVRdWVyaWVzIiwiZXF1YWxzIiwiZ2V0TGF0ZXN0Q29sbGVjdGlvblZlcnNpb24iLCJxdWVyeSIsIk5vdEZvdW5kIiwiRm9yYmlkZGVuIiwiYWZ0ZXJSZWFkIiwiZG9jIiwiZW50aXR5Q29uZmlnIiwiZ2VuZXJhdGVGaWxlRGF0YSIsInRocm93T25NaXNzaW5nRmlsZSIsImZpbGVzIiwiZGVsZXRlQXNzb2NpYXRlZEZpbGVzIiwib3ZlcnJpZGVEZWxldGUiLCJiZWZvcmVWYWxpZGF0ZSIsInVwbG9hZCIsImRpc2FibGVMb2NhbFN0b3JhZ2UiLCJ1cGxvYWRGaWxlcyIsImJlZm9yZUNoYW5nZSIsInNraXBWYWxpZGF0aW9uIiwiX3N0YXR1cyIsImdlbmVyYXRlUGFzc3dvcmRTYWx0SGFzaCIsImRiIiwidXBkYXRlT25lIiwic2F2ZVZlcnNpb24iLCJjcmVhdGVkQXQiLCJhZnRlckNoYW5nZSIsInByZXZpb3VzRG9jIiwiYnVpbGRBZnRlck9wZXJhdGlvbiIsInVubGlua1RlbXBGaWxlcyIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCIsImtpbGxUcmFuc2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxWEE7OztlQUFBOzs7aUVBclh1QjtvRUFJRztzQkFDb0I7cUJBRVQ7MkJBQ1Q7MkJBQ0E7NEJBQ0M7OEJBQ0U7MkJBQ0g7eUJBQ0Y7Z0NBQ087MENBQ1U7cUNBQ0w7K0JBQ047cUJBQ0k7d0NBQ0s7OEJBQ1Y7K0JBRUM7K0JBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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