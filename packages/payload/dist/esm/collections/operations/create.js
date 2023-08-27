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
import fs from "fs";
import { promisify } from "util";
import crypto from "crypto";
import executeAccess from "../../auth/executeAccess";
import sanitizeInternalFields from "../../utilities/sanitizeInternalFields";
import { ValidationError } from "../../errors";
import sendVerificationEmail from "../../auth/sendVerificationEmail";
import { fieldAffectsData } from "../../fields/config/types";
import { uploadFiles } from "../../uploads/uploadFiles";
import { beforeChange } from "../../fields/hooks/beforeChange";
import { beforeValidate } from "../../fields/hooks/beforeValidate";
import { afterChange } from "../../fields/hooks/afterChange";
import { afterRead } from "../../fields/hooks/afterRead";
import { generateFileData } from "../../uploads/generateFileData";
import { saveVersion } from "../../versions/saveVersion";
import { mapAsync } from "../../utilities/mapAsync";
import { buildAfterOperation } from "./utils";
import { registerLocalStrategy } from "../../auth/strategies/local/register";
import { initTransaction } from "../../utilities/initTransaction";
import { killTransaction } from "../../utilities/killTransaction";
var unlinkFile = promisify(fs.unlink);
function create(incomingArgs) {
    return _create.apply(this, arguments);
}
function _create() {
    _create = _async_to_generator(function(incomingArgs) {
        var args, collection, _args_collection, collectionConfig, req, _args_req, payload, _args_req_payload, config, emailOptions, disableVerificationEmail, depth, overrideAccess, showHiddenFields, _args_overwriteExistingFiles, overwriteExistingFiles, _args_draft, draft, _args_autosave, autosave, _config_upload, _config_upload1, shouldCommit, data, shouldSaveDraft, hasIdField, _ref, newFileData, filesToUpload, resultWithLocales, doc, error, verificationToken, result, files, fileArray, files1, fileArray1, error1;
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
                                                    operation: "create",
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
                    collection = args.collection, _args_collection = args.collection, collectionConfig = _args_collection.config, req = args.req, _args_req = args.req, payload = _args_req.payload, _args_req_payload = _args_req.payload, config = _args_req_payload.config, emailOptions = _args_req_payload.emailOptions, disableVerificationEmail = args.disableVerificationEmail, depth = args.depth, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields, _args_overwriteExistingFiles = args.overwriteExistingFiles, overwriteExistingFiles = _args_overwriteExistingFiles === void 0 ? false : _args_overwriteExistingFiles, _args_draft = args.draft, draft = _args_draft === void 0 ? false : _args_draft, _args_autosave = args.autosave, autosave = _args_autosave === void 0 ? false : _args_autosave;
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
                                                    operation: "create",
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
                    data = args.data;
                    shouldSaveDraft = Boolean(draft && collectionConfig.versions.drafts);
                    if (!!overrideAccess) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        executeAccess({
                            req: req,
                            data: data
                        }, collectionConfig.access.create)
                    ];
                case 5:
                    _state.sent();
                    _state.label = 6;
                case 6:
                    hasIdField = collectionConfig.fields.findIndex(function(field) {
                        return fieldAffectsData(field) && field.name === "id";
                    }) > -1;
                    if (hasIdField) {
                        data = _object_spread({
                            _id: data.id
                        }, data);
                    }
                    return [
                        4,
                        generateFileData({
                            config: config,
                            collection: collection,
                            req: req,
                            data: data,
                            throwOnMissingFile: !shouldSaveDraft,
                            overwriteExistingFiles: overwriteExistingFiles
                        })
                    ];
                case 7:
                    _ref = _state.sent(), newFileData = _ref.data, filesToUpload = _ref.files;
                    data = newFileData;
                    return [
                        4,
                        beforeValidate({
                            data: data,
                            doc: {},
                            entityConfig: collectionConfig,
                            operation: "create",
                            overrideAccess: overrideAccess,
                            req: req,
                            context: req.context
                        })
                    ];
                case 8:
                    // /////////////////////////////////////
                    // beforeValidate - Fields
                    // /////////////////////////////////////
                    data = _state.sent();
                    // /////////////////////////////////////
                    // beforeValidate - Collections
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
                                                    operation: "create",
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
                case 9:
                    _state.sent();
                    if (!!collectionConfig.upload.disableLocalStorage) return [
                        3,
                        11
                    ];
                    return [
                        4,
                        uploadFiles(payload, filesToUpload, req.t)
                    ];
                case 10:
                    _state.sent();
                    _state.label = 11;
                case 11:
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
                                                    operation: "create",
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
                case 12:
                    _state.sent();
                    return [
                        4,
                        beforeChange({
                            data: data,
                            doc: {},
                            docWithLocales: {},
                            entityConfig: collectionConfig,
                            operation: "create",
                            req: req,
                            skipValidation: shouldSaveDraft,
                            context: req.context
                        })
                    ];
                case 13:
                    resultWithLocales = _state.sent();
                    if (!(collectionConfig.auth && !collectionConfig.auth.disableLocalStrategy)) return [
                        3,
                        15
                    ];
                    if (data.email) {
                        resultWithLocales.email = data.email.toLowerCase();
                    }
                    if (collectionConfig.auth.verify) {
                        resultWithLocales._verified = Boolean(resultWithLocales._verified) || false;
                        resultWithLocales._verificationToken = crypto.randomBytes(20).toString("hex");
                    }
                    return [
                        4,
                        registerLocalStrategy({
                            collection: collectionConfig,
                            doc: resultWithLocales,
                            payload: req.payload,
                            password: data.password,
                            req: req
                        })
                    ];
                case 14:
                    doc = _state.sent();
                    return [
                        3,
                        18
                    ];
                case 15:
                    _state.trys.push([
                        15,
                        17,
                        ,
                        18
                    ]);
                    return [
                        4,
                        payload.db.create({
                            collection: collectionConfig.slug,
                            data: resultWithLocales,
                            req: req
                        })
                    ];
                case 16:
                    doc = _state.sent();
                    return [
                        3,
                        18
                    ];
                case 17:
                    error = _state.sent();
                    // Handle uniqueness error from MongoDB
                    throw error.code === 11000 && error.keyValue ? new ValidationError([
                        {
                            message: req.t("error:valueMustBeUnique"),
                            field: Object.keys(error.keyValue)[0]
                        }
                    ], req.t) : error;
                case 18:
                    verificationToken = doc._verificationToken;
                    result = sanitizeInternalFields(doc);
                    if (!collectionConfig.versions) return [
                        3,
                        20
                    ];
                    return [
                        4,
                        saveVersion({
                            payload: payload,
                            collection: collectionConfig,
                            req: req,
                            id: result.id,
                            docWithLocales: result,
                            autosave: autosave
                        })
                    ];
                case 19:
                    _state.sent();
                    _state.label = 20;
                case 20:
                    // /////////////////////////////////////
                    // Send verification email if applicable
                    // /////////////////////////////////////
                    if (collectionConfig.auth && collectionConfig.auth.verify) {
                        sendVerificationEmail({
                            emailOptions: emailOptions,
                            config: payload.config,
                            sendEmail: payload.sendEmail,
                            collection: {
                                config: collectionConfig
                            },
                            user: result,
                            token: verificationToken,
                            req: req,
                            disableEmail: disableVerificationEmail
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
                case 21:
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
                case 22:
                    _state.sent();
                    return [
                        4,
                        afterChange({
                            data: data,
                            doc: result,
                            previousDoc: {},
                            entityConfig: collectionConfig,
                            operation: "create",
                            req: req,
                            context: req.context
                        })
                    ];
                case 23:
                    // /////////////////////////////////////
                    // afterChange - Fields
                    // /////////////////////////////////////
                    result = _state.sent();
                    if (!(((_config_upload = config.upload) === null || _config_upload === void 0 ? void 0 : _config_upload.useTempFiles) && collectionConfig.upload)) return [
                        3,
                        25
                    ];
                    files = req.files;
                    fileArray = Array.isArray(files) ? files : [
                        files
                    ];
                    return [
                        4,
                        mapAsync(fileArray, function() {
                            var _ref = _async_to_generator(function(param) {
                                var file;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            file = param.file;
                                            if (!file.tempFilePath) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                unlinkFile(file.tempFilePath)
                                            ];
                                        case 1:
                                            _state.sent();
                                            _state.label = 2;
                                        case 2:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }())
                    ];
                case 24:
                    _state.sent();
                    _state.label = 25;
                case 25:
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
                                                    previousDoc: {},
                                                    req: args.req,
                                                    operation: "create",
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
                case 26:
                    _state.sent();
                    return [
                        4,
                        buildAfterOperation({
                            operation: "create",
                            args: args,
                            result: result
                        })
                    ];
                case 27:
                    // /////////////////////////////////////
                    // afterOperation - Collection
                    // /////////////////////////////////////
                    result = _state.sent();
                    if (!(((_config_upload1 = config.upload) === null || _config_upload1 === void 0 ? void 0 : _config_upload1.useTempFiles) && collectionConfig.upload)) return [
                        3,
                        29
                    ];
                    files1 = req.files;
                    fileArray1 = Array.isArray(files1) ? files1 : [
                        files1
                    ];
                    return [
                        4,
                        mapAsync(fileArray1, function() {
                            var _ref = _async_to_generator(function(param) {
                                var file;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            file = param.file;
                                            if (!file.tempFilePath) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                unlinkFile(file.tempFilePath)
                                            ];
                                        case 1:
                                            _state.sent();
                                            _state.label = 2;
                                        case 2:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }())
                    ];
                case 28:
                    _state.sent();
                    _state.label = 29;
                case 29:
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
                    error1 = _state.sent();
                    return [
                        4,
                        killTransaction(req)
                    ];
                case 33:
                    _state.sent();
                    throw error1;
                case 34:
                    return [
                        2
                    ];
            }
        });
    });
    return _create.apply(this, arguments);
}
export default create;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2NyZWF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSAndXRpbCc7XG5cbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IE1hcmtPcHRpb25hbCB9IGZyb20gJ3RzLWVzc2VudGlhbHMnO1xuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJztcbmltcG9ydCBzYW5pdGl6ZUludGVybmFsRmllbGRzIGZyb20gJy4uLy4uL3V0aWxpdGllcy9zYW5pdGl6ZUludGVybmFsRmllbGRzJztcblxuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcblxuaW1wb3J0IHNlbmRWZXJpZmljYXRpb25FbWFpbCBmcm9tICcuLi8uLi9hdXRoL3NlbmRWZXJpZmljYXRpb25FbWFpbCc7XG5pbXBvcnQgeyBBZnRlckNoYW5nZUhvb2ssIEJlZm9yZU9wZXJhdGlvbkhvb2ssIEJlZm9yZVZhbGlkYXRlSG9vaywgQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB1cGxvYWRGaWxlcyB9IGZyb20gJy4uLy4uL3VwbG9hZHMvdXBsb2FkRmlsZXMnO1xuaW1wb3J0IHsgYmVmb3JlQ2hhbmdlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2JlZm9yZUNoYW5nZSc7XG5pbXBvcnQgeyBiZWZvcmVWYWxpZGF0ZSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9iZWZvcmVWYWxpZGF0ZSc7XG5pbXBvcnQgeyBhZnRlckNoYW5nZSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlckNoYW5nZSc7XG5pbXBvcnQgeyBhZnRlclJlYWQgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkJztcbmltcG9ydCB7IGdlbmVyYXRlRmlsZURhdGEgfSBmcm9tICcuLi8uLi91cGxvYWRzL2dlbmVyYXRlRmlsZURhdGEnO1xuaW1wb3J0IHsgc2F2ZVZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9zYXZlVmVyc2lvbic7XG5pbXBvcnQgeyBtYXBBc3luYyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9tYXBBc3luYyc7XG5pbXBvcnQgeyBidWlsZEFmdGVyT3BlcmF0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyByZWdpc3RlckxvY2FsU3RyYXRlZ3kgfSBmcm9tICcuLi8uLi9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvcmVnaXN0ZXInO1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJztcblxuY29uc3QgdW5saW5rRmlsZSA9IHByb21pc2lmeShmcy51bmxpbmspO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVVcGRhdGVUeXBlID0geyBbZmllbGQ6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbF06IHVua25vd24gfVxuXG5leHBvcnQgdHlwZSBBcmd1bWVudHM8VCBleHRlbmRzIENyZWF0ZVVwZGF0ZVR5cGU+ID0ge1xuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgZGVwdGg/OiBudW1iZXJcbiAgZGlzYWJsZVZlcmlmaWNhdGlvbkVtYWlsPzogYm9vbGVhblxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgZGF0YTogTWFya09wdGlvbmFsPFQsICdpZCcgfCAndXBkYXRlZEF0JyB8ICdjcmVhdGVkQXQnIHwgJ3NpemVzJz5cbiAgb3ZlcndyaXRlRXhpc3RpbmdGaWxlcz86IGJvb2xlYW5cbiAgZHJhZnQ/OiBib29sZWFuXG4gIGF1dG9zYXZlPzogYm9vbGVhblxufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGU8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIGluY29taW5nQXJnczogQXJndW1lbnRzPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4sXG4pOiBQcm9taXNlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4ge1xuICBsZXQgYXJncyA9IGluY29taW5nQXJncztcblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIGJlZm9yZU9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIGF3YWl0IGFyZ3MuY29sbGVjdGlvbi5jb25maWcuaG9va3MuYmVmb3JlT3BlcmF0aW9uLnJlZHVjZShhc3luYyAocHJpb3JIb29rOiBCZWZvcmVPcGVyYXRpb25Ib29rIHwgUHJvbWlzZTx2b2lkPiwgaG9vazogQmVmb3JlT3BlcmF0aW9uSG9vaykgPT4ge1xuICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgIGFyZ3MgPSAoYXdhaXQgaG9vayh7XG4gICAgICBhcmdzLFxuICAgICAgb3BlcmF0aW9uOiAnY3JlYXRlJyxcbiAgICAgIGNvbnRleHQ6IGFyZ3MucmVxLmNvbnRleHQsXG4gICAgfSkpIHx8IGFyZ3M7XG4gIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbixcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBjb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgfSxcbiAgICByZXEsXG4gICAgcmVxOiB7XG4gICAgICBwYXlsb2FkLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjb25maWcsXG4gICAgICAgIGVtYWlsT3B0aW9ucyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkaXNhYmxlVmVyaWZpY2F0aW9uRW1haWwsXG4gICAgZGVwdGgsXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBvdmVyd3JpdGVFeGlzdGluZ0ZpbGVzID0gZmFsc2UsXG4gICAgZHJhZnQgPSBmYWxzZSxcbiAgICBhdXRvc2F2ZSA9IGZhbHNlLFxuICB9ID0gYXJncztcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZU9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmJlZm9yZU9wZXJhdGlvbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vazogQmVmb3JlT3BlcmF0aW9uSG9vayB8IFByb21pc2U8dm9pZD4sIGhvb2s6IEJlZm9yZU9wZXJhdGlvbkhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgYXJncyA9IChhd2FpdCBob29rKHtcbiAgICAgICAgYXJncyxcbiAgICAgICAgb3BlcmF0aW9uOiAnY3JlYXRlJyxcbiAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICB9KSkgfHwgYXJncztcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cblxuICAgIGxldCB7IGRhdGEgfSA9IGFyZ3M7XG5cbiAgICBjb25zdCBzaG91bGRTYXZlRHJhZnQgPSBCb29sZWFuKGRyYWZ0ICYmIGNvbGxlY3Rpb25Db25maWcudmVyc2lvbnMuZHJhZnRzKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBBY2Nlc3NcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoIW92ZXJyaWRlQWNjZXNzKSB7XG4gICAgICBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxLCBkYXRhIH0sIGNvbGxlY3Rpb25Db25maWcuYWNjZXNzLmNyZWF0ZSk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEN1c3RvbSBpZFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGhhc0lkRmllbGQgPSBjb2xsZWN0aW9uQ29uZmlnLmZpZWxkcy5maW5kSW5kZXgoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKSA+IC0xO1xuICAgIGlmIChoYXNJZEZpZWxkKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBfaWQ6IGRhdGEuaWQsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBHZW5lcmF0ZSBkYXRhIGZvciBhbGwgZmlsZXMgYW5kIHNpemVzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgeyBkYXRhOiBuZXdGaWxlRGF0YSwgZmlsZXM6IGZpbGVzVG9VcGxvYWQgfSA9IGF3YWl0IGdlbmVyYXRlRmlsZURhdGEoe1xuICAgICAgY29uZmlnLFxuICAgICAgY29sbGVjdGlvbixcbiAgICAgIHJlcSxcbiAgICAgIGRhdGEsXG4gICAgICB0aHJvd09uTWlzc2luZ0ZpbGU6ICFzaG91bGRTYXZlRHJhZnQsXG4gICAgICBvdmVyd3JpdGVFeGlzdGluZ0ZpbGVzLFxuICAgIH0pO1xuXG4gICAgZGF0YSA9IG5ld0ZpbGVEYXRhO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZVZhbGlkYXRlIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZGF0YSA9IGF3YWl0IGJlZm9yZVZhbGlkYXRlKHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2M6IHt9LFxuICAgICAgZW50aXR5Q29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgb3BlcmF0aW9uOiAnY3JlYXRlJyxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgcmVxLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlVmFsaWRhdGUgLSBDb2xsZWN0aW9uc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlVmFsaWRhdGUucmVkdWNlKGFzeW5jIChwcmlvckhvb2s6IEJlZm9yZVZhbGlkYXRlSG9vayB8IFByb21pc2U8dm9pZD4sIGhvb2s6IEJlZm9yZVZhbGlkYXRlSG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICBkYXRhID0gKGF3YWl0IGhvb2soe1xuICAgICAgICBkYXRhLFxuICAgICAgICByZXEsXG4gICAgICAgIG9wZXJhdGlvbjogJ2NyZWF0ZScsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkpIHx8IGRhdGE7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFdyaXRlIGZpbGVzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoIWNvbGxlY3Rpb25Db25maWcudXBsb2FkLmRpc2FibGVMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGF3YWl0IHVwbG9hZEZpbGVzKHBheWxvYWQsIGZpbGVzVG9VcGxvYWQsIHJlcS50KTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlQ2hhbmdlIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlQ2hhbmdlLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIGRhdGEgPSAoYXdhaXQgaG9vayh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIHJlcSxcbiAgICAgICAgb3BlcmF0aW9uOiAnY3JlYXRlJyxcbiAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICB9KSkgfHwgZGF0YTtcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlQ2hhbmdlIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgcmVzdWx0V2l0aExvY2FsZXMgPSBhd2FpdCBiZWZvcmVDaGFuZ2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2M6IHt9LFxuICAgICAgZG9jV2l0aExvY2FsZXM6IHt9LFxuICAgICAgZW50aXR5Q29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgb3BlcmF0aW9uOiAnY3JlYXRlJyxcbiAgICAgIHJlcSxcbiAgICAgIHNraXBWYWxpZGF0aW9uOiBzaG91bGRTYXZlRHJhZnQsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBDcmVhdGVcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgZG9jO1xuXG4gICAgaWYgKGNvbGxlY3Rpb25Db25maWcuYXV0aCAmJiAhY29sbGVjdGlvbkNvbmZpZy5hdXRoLmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgICBpZiAoZGF0YS5lbWFpbCkge1xuICAgICAgICByZXN1bHRXaXRoTG9jYWxlcy5lbWFpbCA9IChkYXRhLmVtYWlsIGFzIHN0cmluZykudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxlY3Rpb25Db25maWcuYXV0aC52ZXJpZnkpIHtcbiAgICAgICAgcmVzdWx0V2l0aExvY2FsZXMuX3ZlcmlmaWVkID0gQm9vbGVhbihyZXN1bHRXaXRoTG9jYWxlcy5fdmVyaWZpZWQpIHx8IGZhbHNlO1xuICAgICAgICByZXN1bHRXaXRoTG9jYWxlcy5fdmVyaWZpY2F0aW9uVG9rZW4gPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMjApLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgIH1cblxuICAgICAgZG9jID0gYXdhaXQgcmVnaXN0ZXJMb2NhbFN0cmF0ZWd5KHtcbiAgICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgZG9jOiByZXN1bHRXaXRoTG9jYWxlcyxcbiAgICAgICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkIGFzIHN0cmluZyxcbiAgICAgICAgcmVxLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvYyA9IGF3YWl0IHBheWxvYWQuZGIuY3JlYXRlKHtcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICAgICAgZGF0YTogcmVzdWx0V2l0aExvY2FsZXMsXG4gICAgICAgICAgcmVxLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIEhhbmRsZSB1bmlxdWVuZXNzIGVycm9yIGZyb20gTW9uZ29EQlxuICAgICAgICB0aHJvdyBlcnJvci5jb2RlID09PSAxMTAwMCAmJiBlcnJvci5rZXlWYWx1ZVxuICAgICAgICAgID8gbmV3IFZhbGlkYXRpb25FcnJvcihbeyBtZXNzYWdlOiByZXEudCgnZXJyb3I6dmFsdWVNdXN0QmVVbmlxdWUnKSwgZmllbGQ6IE9iamVjdC5rZXlzKGVycm9yLmtleVZhbHVlKVswXSB9XSwgcmVxLnQpXG4gICAgICAgICAgOiBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZmljYXRpb25Ub2tlbiA9IGRvYy5fdmVyaWZpY2F0aW9uVG9rZW47XG4gICAgbGV0IHJlc3VsdDogRG9jdW1lbnQgPSBzYW5pdGl6ZUludGVybmFsRmllbGRzKGRvYyk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQ3JlYXRlIHZlcnNpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy52ZXJzaW9ucykge1xuICAgICAgYXdhaXQgc2F2ZVZlcnNpb24oe1xuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICByZXEsXG4gICAgICAgIGlkOiByZXN1bHQuaWQsXG4gICAgICAgIGRvY1dpdGhMb2NhbGVzOiByZXN1bHQsXG4gICAgICAgIGF1dG9zYXZlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFNlbmQgdmVyaWZpY2F0aW9uIGVtYWlsIGlmIGFwcGxpY2FibGVcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy5hdXRoICYmIGNvbGxlY3Rpb25Db25maWcuYXV0aC52ZXJpZnkpIHtcbiAgICAgIHNlbmRWZXJpZmljYXRpb25FbWFpbCh7XG4gICAgICAgIGVtYWlsT3B0aW9ucyxcbiAgICAgICAgY29uZmlnOiBwYXlsb2FkLmNvbmZpZyxcbiAgICAgICAgc2VuZEVtYWlsOiBwYXlsb2FkLnNlbmRFbWFpbCxcbiAgICAgICAgY29sbGVjdGlvbjogeyBjb25maWc6IGNvbGxlY3Rpb25Db25maWcgfSxcbiAgICAgICAgdXNlcjogcmVzdWx0LFxuICAgICAgICB0b2tlbjogdmVyaWZpY2F0aW9uVG9rZW4sXG4gICAgICAgIHJlcSxcbiAgICAgICAgZGlzYWJsZUVtYWlsOiBkaXNhYmxlVmVyaWZpY2F0aW9uRW1haWwsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmVzdWx0ID0gYXdhaXQgYWZ0ZXJSZWFkKHtcbiAgICAgIGRlcHRoLFxuICAgICAgZG9jOiByZXN1bHQsXG4gICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHJlcSxcbiAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgcmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgICAgfSkgfHwgcmVzdWx0O1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlckNoYW5nZSAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyQ2hhbmdlKHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2M6IHJlc3VsdCxcbiAgICAgIHByZXZpb3VzRG9jOiB7fSxcbiAgICAgIGVudGl0eUNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIG9wZXJhdGlvbjogJ2NyZWF0ZScsXG4gICAgICByZXEsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIFJlbW92ZSB0ZW1wIGZpbGVzIGlmIGVuYWJsZWQsIGFzIGV4cHJlc3MtZmlsZXVwbG9hZCBkb2VzIG5vdCBkbyB0aGlzIGF1dG9tYXRpY2FsbHlcbiAgICBpZiAoY29uZmlnLnVwbG9hZD8udXNlVGVtcEZpbGVzICYmIGNvbGxlY3Rpb25Db25maWcudXBsb2FkKSB7XG4gICAgICBjb25zdCB7IGZpbGVzIH0gPSByZXE7XG4gICAgICBjb25zdCBmaWxlQXJyYXkgPSBBcnJheS5pc0FycmF5KGZpbGVzKSA/IGZpbGVzIDogW2ZpbGVzXTtcbiAgICAgIGF3YWl0IG1hcEFzeW5jKGZpbGVBcnJheSwgYXN5bmMgKHsgZmlsZSB9KSA9PiB7XG4gICAgICAgIC8vIFN0aWxsIG5lZWQgdGhpcyBjaGVjayBiZWNhdXNlIHRoaXMgd2lsbCBub3QgYmUgcG9wdWxhdGVkIGlmIHVzaW5nIGxvY2FsIEFQSVxuICAgICAgICBpZiAoZmlsZS50ZW1wRmlsZVBhdGgpIHtcbiAgICAgICAgICBhd2FpdCB1bmxpbmtGaWxlKGZpbGUudGVtcEZpbGVQYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyQ2hhbmdlIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJDaGFuZ2UucmVkdWNlKGFzeW5jIChwcmlvckhvb2s6IEFmdGVyQ2hhbmdlSG9vayB8IFByb21pc2U8dm9pZD4sIGhvb2s6IEFmdGVyQ2hhbmdlSG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXN1bHQgPSBhd2FpdCBob29rKHtcbiAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgIHByZXZpb3VzRG9jOiB7fSxcbiAgICAgICAgcmVxOiBhcmdzLnJlcSxcbiAgICAgICAgb3BlcmF0aW9uOiAnY3JlYXRlJyxcbiAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICB9KSB8fCByZXN1bHQ7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGJ1aWxkQWZ0ZXJPcGVyYXRpb248R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPih7XG4gICAgICBvcGVyYXRpb246ICdjcmVhdGUnLFxuICAgICAgYXJncyxcbiAgICAgIHJlc3VsdCxcbiAgICB9KTtcblxuXG4gICAgLy8gUmVtb3ZlIHRlbXAgZmlsZXMgaWYgZW5hYmxlZCwgYXMgZXhwcmVzcy1maWxldXBsb2FkIGRvZXMgbm90IGRvIHRoaXMgYXV0b21hdGljYWxseVxuICAgIGlmIChjb25maWcudXBsb2FkPy51c2VUZW1wRmlsZXMgJiYgY29sbGVjdGlvbkNvbmZpZy51cGxvYWQpIHtcbiAgICAgIGNvbnN0IHsgZmlsZXMgfSA9IHJlcTtcbiAgICAgIGNvbnN0IGZpbGVBcnJheSA9IEFycmF5LmlzQXJyYXkoZmlsZXMpID8gZmlsZXMgOiBbZmlsZXNdO1xuICAgICAgYXdhaXQgbWFwQXN5bmMoZmlsZUFycmF5LCBhc3luYyAoeyBmaWxlIH0pID0+IHtcbiAgICAgICAgLy8gU3RpbGwgbmVlZCB0aGlzIGNoZWNrIGJlY2F1c2UgdGhpcyB3aWxsIG5vdCBiZSBwb3B1bGF0ZWQgaWYgdXNpbmcgbG9jYWwgQVBJXG4gICAgICAgIGlmIChmaWxlLnRlbXBGaWxlUGF0aCkge1xuICAgICAgICAgIGF3YWl0IHVubGlua0ZpbGUoZmlsZS50ZW1wRmlsZVBhdGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmV0dXJuIHJlc3VsdHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoc2hvdWxkQ29tbWl0KSBhd2FpdCBwYXlsb2FkLmRiLmNvbW1pdFRyYW5zYWN0aW9uKHJlcS50cmFuc2FjdGlvbklEKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgYXdhaXQga2lsbFRyYW5zYWN0aW9uKHJlcSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlO1xuIl0sIm5hbWVzIjpbImZzIiwicHJvbWlzaWZ5IiwiY3J5cHRvIiwiZXhlY3V0ZUFjY2VzcyIsInNhbml0aXplSW50ZXJuYWxGaWVsZHMiLCJWYWxpZGF0aW9uRXJyb3IiLCJzZW5kVmVyaWZpY2F0aW9uRW1haWwiLCJmaWVsZEFmZmVjdHNEYXRhIiwidXBsb2FkRmlsZXMiLCJiZWZvcmVDaGFuZ2UiLCJiZWZvcmVWYWxpZGF0ZSIsImFmdGVyQ2hhbmdlIiwiYWZ0ZXJSZWFkIiwiZ2VuZXJhdGVGaWxlRGF0YSIsInNhdmVWZXJzaW9uIiwibWFwQXN5bmMiLCJidWlsZEFmdGVyT3BlcmF0aW9uIiwicmVnaXN0ZXJMb2NhbFN0cmF0ZWd5IiwiaW5pdFRyYW5zYWN0aW9uIiwia2lsbFRyYW5zYWN0aW9uIiwidW5saW5rRmlsZSIsInVubGluayIsImNyZWF0ZSIsImluY29taW5nQXJncyIsImFyZ3MiLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvbkNvbmZpZyIsInJlcSIsInBheWxvYWQiLCJjb25maWciLCJlbWFpbE9wdGlvbnMiLCJkaXNhYmxlVmVyaWZpY2F0aW9uRW1haWwiLCJkZXB0aCIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsIm92ZXJ3cml0ZUV4aXN0aW5nRmlsZXMiLCJkcmFmdCIsImF1dG9zYXZlIiwic2hvdWxkQ29tbWl0IiwiZGF0YSIsInNob3VsZFNhdmVEcmFmdCIsImhhc0lkRmllbGQiLCJuZXdGaWxlRGF0YSIsImZpbGVzVG9VcGxvYWQiLCJyZXN1bHRXaXRoTG9jYWxlcyIsImRvYyIsImVycm9yIiwidmVyaWZpY2F0aW9uVG9rZW4iLCJyZXN1bHQiLCJmaWxlcyIsImZpbGVBcnJheSIsImhvb2tzIiwiYmVmb3JlT3BlcmF0aW9uIiwicmVkdWNlIiwicHJpb3JIb29rIiwiaG9vayIsIm9wZXJhdGlvbiIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkJvb2xlYW4iLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImFjY2VzcyIsImZpZWxkcyIsImZpbmRJbmRleCIsImZpZWxkIiwibmFtZSIsIl9pZCIsImlkIiwidGhyb3dPbk1pc3NpbmdGaWxlIiwiZW50aXR5Q29uZmlnIiwidXBsb2FkIiwiZGlzYWJsZUxvY2FsU3RvcmFnZSIsInQiLCJkb2NXaXRoTG9jYWxlcyIsInNraXBWYWxpZGF0aW9uIiwiYXV0aCIsImRpc2FibGVMb2NhbFN0cmF0ZWd5IiwiZW1haWwiLCJ0b0xvd2VyQ2FzZSIsInZlcmlmeSIsIl92ZXJpZmllZCIsIl92ZXJpZmljYXRpb25Ub2tlbiIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJwYXNzd29yZCIsImRiIiwic2x1ZyIsImNvZGUiLCJrZXlWYWx1ZSIsIm1lc3NhZ2UiLCJPYmplY3QiLCJrZXlzIiwic2VuZEVtYWlsIiwidXNlciIsInRva2VuIiwiZGlzYWJsZUVtYWlsIiwicHJldmlvdXNEb2MiLCJ1c2VUZW1wRmlsZXMiLCJBcnJheSIsImlzQXJyYXkiLCJmaWxlIiwidGVtcEZpbGVQYXRoIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFFBQVEsS0FBSztBQUNwQixTQUFTQyxTQUFTLFFBQVEsT0FBTztBQUVqQyxPQUFPQyxZQUFZLFNBQVM7QUFHNUIsT0FBT0MsbUJBQW1CLDJCQUEyQjtBQUNyRCxPQUFPQyw0QkFBNEIseUNBQXlDO0FBRTVFLFNBQVNDLGVBQWUsUUFBUSxlQUFlO0FBRS9DLE9BQU9DLDJCQUEyQixtQ0FBbUM7QUFJckUsU0FBU0MsZ0JBQWdCLFFBQVEsNEJBQTRCO0FBQzdELFNBQVNDLFdBQVcsUUFBUSw0QkFBNEI7QUFDeEQsU0FBU0MsWUFBWSxRQUFRLGtDQUFrQztBQUMvRCxTQUFTQyxjQUFjLFFBQVEsb0NBQW9DO0FBQ25FLFNBQVNDLFdBQVcsUUFBUSxpQ0FBaUM7QUFDN0QsU0FBU0MsU0FBUyxRQUFRLCtCQUErQjtBQUN6RCxTQUFTQyxnQkFBZ0IsUUFBUSxpQ0FBaUM7QUFDbEUsU0FBU0MsV0FBVyxRQUFRLDZCQUE2QjtBQUN6RCxTQUFTQyxRQUFRLFFBQVEsMkJBQTJCO0FBQ3BELFNBQVNDLG1CQUFtQixRQUFRLFVBQVU7QUFDOUMsU0FBU0MscUJBQXFCLFFBQVEsdUNBQXVDO0FBQzdFLFNBQVNDLGVBQWUsUUFBUSxrQ0FBa0M7QUFDbEUsU0FBU0MsZUFBZSxRQUFRLGtDQUFrQztBQUVsRSxJQUFNQyxhQUFhbkIsVUFBVUQsR0FBR3FCLE1BQU07U0FpQnZCQyxPQUNiQyxZQUE2RDtXQURoREQ7O1NBQUFBO0lBQUFBLFVBQWYsb0JBQUEsU0FDRUMsWUFBNkQ7WUFFekRDLE1BaUJGQyw4QkFFVUMsa0JBRVZDLGdCQUVFQyw0QkFFRUMsUUFDQUMsY0FHSkMsMEJBQ0FDLE9BQ0FDLGdCQUNBQyxnREFDQUMscUNBQ0FDLHVCQUNBQyxVQW1QSVIsZ0JBdUNBQSxpQkF0UkVTLGNBaUJBQyxNQUVBQyxpQkFjQUMsWUFZOEMsTUFBdENDLGFBQW9CQyxlQW1FNUJDLG1CQWVGQyxLQTBCT0MsT0FRTEMsbUJBQ0ZDLFFBOEVNQyxPQUNGQyxXQXNDRUQsUUFDRkMsWUFnQkRKOzs7O29CQS9VTHRCLE9BQU9EO29CQUVYLHdDQUF3QztvQkFDeEMsK0JBQStCO29CQUMvQix3Q0FBd0M7b0JBRXhDOzt3QkFBTUMsS0FBS0MsVUFBVSxDQUFDSSxNQUFNLENBQUNzQixLQUFLLENBQUNDLGVBQWUsQ0FBQ0MsTUFBTTt1Q0FBQyxvQkFBQSxTQUFPQyxXQUFnREM7Ozs7NENBQy9HOztnREFBTUQ7Ozs0Q0FBTjs0Q0FFUTs7Z0RBQU1DLEtBQUs7b0RBQ2pCL0IsTUFBQUE7b0RBQ0FnQyxXQUFXO29EQUNYQyxTQUFTakMsS0FBS0csR0FBRyxDQUFDOEIsT0FBTztnREFDM0I7Ozs0Q0FKQWpDLE9BQU8sQUFBQyxpQkFJREE7Ozs7Ozs0QkFDVDs0Q0FSaUU4QixXQUFnREM7Ozs2QkFROUdHLFFBQVFDLE9BQU87OztvQkFSbEI7b0JBV0VsQyxhQW1CRUQsS0FuQkZDLCtCQW1CRUQsS0FsQkZDLFlBQ1VDLG9DQUFSRyxRQUVGRixNQWVFSCxLQWZGRyxpQkFlRUgsS0FkRkcsS0FDRUMsb0JBQUFBLHVDQUNBQSxTQUNFQywyQkFBQUEsUUFDQUMsaUNBQUFBLGNBR0pDLDJCQU9FUCxLQVBGTywwQkFDQUMsUUFNRVIsS0FORlEsT0FDQUMsaUJBS0VULEtBTEZTLGdCQUNBQyxtQkFJRVYsS0FKRlUsaURBSUVWLEtBSEZXLHdCQUFBQSxtRUFBeUIsb0RBR3ZCWCxLQUZGWSxPQUFBQSxpQ0FBUSxzQ0FFTlosS0FERmEsVUFBQUEsdUNBQVc7Ozs7Ozs7OztvQkFJVTs7d0JBQU1uQixnQkFBZ0JTOzs7b0JBQXJDVyxlQUFlO29CQUVyQix3Q0FBd0M7b0JBQ3hDLCtCQUErQjtvQkFDL0Isd0NBQXdDO29CQUV4Qzs7d0JBQU1kLEtBQUtDLFVBQVUsQ0FBQ0ksTUFBTSxDQUFDc0IsS0FBSyxDQUFDQyxlQUFlLENBQUNDLE1BQU07dUNBQUMsb0JBQUEsU0FBT0MsV0FBZ0RDOzs7OzRDQUMvRzs7Z0RBQU1EOzs7NENBQU47NENBRVE7O2dEQUFNQyxLQUFLO29EQUNqQi9CLE1BQUFBO29EQUNBZ0MsV0FBVztvREFDWEMsU0FBUzlCLElBQUk4QixPQUFPO2dEQUN0Qjs7OzRDQUpBakMsT0FBTyxBQUFDLGlCQUlEQTs7Ozs7OzRCQUNUOzRDQVJpRThCLFdBQWdEQzs7OzZCQVE5R0csUUFBUUMsT0FBTzs7O29CQVJsQjtvQkFXTXBCLE9BQVNmLEtBQVRlO29CQUVBQyxrQkFBa0JvQixRQUFReEIsU0FBU1YsaUJBQWlCbUMsUUFBUSxDQUFDQyxNQUFNO3lCQU1yRSxDQUFDN0IsZ0JBQUQ7Ozs7b0JBQ0Y7O3dCQUFNOUIsY0FBYzs0QkFBRXdCLEtBQUFBOzRCQUFLWSxNQUFBQTt3QkFBSyxHQUFHYixpQkFBaUJxQyxNQUFNLENBQUN6QyxNQUFNOzs7b0JBQWpFOzs7b0JBT0ltQixhQUFhZixpQkFBaUJzQyxNQUFNLENBQUNDLFNBQVMsQ0FBQyxTQUFDQzsrQkFBVTNELGlCQUFpQjJELFVBQVVBLE1BQU1DLElBQUksS0FBSzt5QkFBUSxDQUFDO29CQUNuSCxJQUFJMUIsWUFBWTt3QkFDZEYsT0FBTzs0QkFDTDZCLEtBQUs3QixLQUFLOEIsRUFBRTsyQkFDVDlCO29CQUVQO29CQU1vRDs7d0JBQU0xQixpQkFBaUI7NEJBQ3pFZ0IsUUFBQUE7NEJBQ0FKLFlBQUFBOzRCQUNBRSxLQUFBQTs0QkFDQVksTUFBQUE7NEJBQ0ErQixvQkFBb0IsQ0FBQzlCOzRCQUNyQkwsd0JBQUFBO3dCQUNGOzs7b0JBUG9ELE9BQUEsZUFBdENPLGNBQXNDLEtBQTVDSCxNQUEwQkksZ0JBQWtCLEtBQXpCTTtvQkFTM0JWLE9BQU9HO29CQU1BOzt3QkFBTWhDLGVBQWU7NEJBQzFCNkIsTUFBQUE7NEJBQ0FNLEtBQUssQ0FBQzs0QkFDTjBCLGNBQWM3Qzs0QkFDZDhCLFdBQVc7NEJBQ1h2QixnQkFBQUE7NEJBQ0FOLEtBQUFBOzRCQUNBOEIsU0FBUzlCLElBQUk4QixPQUFPO3dCQUN0Qjs7O29CQVpBLHdDQUF3QztvQkFDeEMsMEJBQTBCO29CQUMxQix3Q0FBd0M7b0JBRXhDbEIsT0FBTztvQkFVUCx3Q0FBd0M7b0JBQ3hDLCtCQUErQjtvQkFDL0Isd0NBQXdDO29CQUV4Qzs7d0JBQU1iLGlCQUFpQnlCLEtBQUssQ0FBQ3pDLGNBQWMsQ0FBQzJDLE1BQU07dUNBQUMsb0JBQUEsU0FBT0MsV0FBK0NDOzs7OzRDQUN2Rzs7Z0RBQU1EOzs7NENBQU47NENBRVE7O2dEQUFNQyxLQUFLO29EQUNqQmhCLE1BQUFBO29EQUNBWixLQUFBQTtvREFDQTZCLFdBQVc7b0RBQ1hDLFNBQVM5QixJQUFJOEIsT0FBTztnREFDdEI7Ozs0Q0FMQWxCLE9BQU8sQUFBQyxpQkFLREE7Ozs7Ozs0QkFDVDs0Q0FUMERlLFdBQStDQzs7OzZCQVN0R0csUUFBUUMsT0FBTzs7O29CQVRsQjt5QkFlSSxDQUFDakMsaUJBQWlCOEMsTUFBTSxDQUFDQyxtQkFBbUIsRUFBNUM7Ozs7b0JBQ0Y7O3dCQUFNakUsWUFBWW9CLFNBQVNlLGVBQWVoQixJQUFJK0MsQ0FBQzs7O29CQUEvQzs7O29CQUdGLHdDQUF3QztvQkFDeEMsNEJBQTRCO29CQUM1Qix3Q0FBd0M7b0JBRXhDOzt3QkFBTWhELGlCQUFpQnlCLEtBQUssQ0FBQzFDLFlBQVksQ0FBQzRDLE1BQU07dUNBQUMsb0JBQUEsU0FBT0MsV0FBV0M7Ozs7NENBQ2pFOztnREFBTUQ7Ozs0Q0FBTjs0Q0FFUTs7Z0RBQU1DLEtBQUs7b0RBQ2pCaEIsTUFBQUE7b0RBQ0FaLEtBQUFBO29EQUNBNkIsV0FBVztvREFDWEMsU0FBUzlCLElBQUk4QixPQUFPO2dEQUN0Qjs7OzRDQUxBbEIsT0FBTyxBQUFDLGlCQUtEQTs7Ozs7OzRCQUNUOzRDQVR3RGUsV0FBV0M7Ozs2QkFTaEVHLFFBQVFDLE9BQU87OztvQkFUbEI7b0JBZTBCOzt3QkFBTWxELGFBQXNDOzRCQUNwRThCLE1BQUFBOzRCQUNBTSxLQUFLLENBQUM7NEJBQ044QixnQkFBZ0IsQ0FBQzs0QkFDakJKLGNBQWM3Qzs0QkFDZDhCLFdBQVc7NEJBQ1g3QixLQUFBQTs0QkFDQWlELGdCQUFnQnBDOzRCQUNoQmlCLFNBQVM5QixJQUFJOEIsT0FBTzt3QkFDdEI7OztvQkFUTWIsb0JBQW9CO3lCQWlCdEJsQixDQUFBQSxpQkFBaUJtRCxJQUFJLElBQUksQ0FBQ25ELGlCQUFpQm1ELElBQUksQ0FBQ0Msb0JBQW9CLEFBQUQsR0FBbkVwRDs7OztvQkFDRixJQUFJYSxLQUFLd0MsS0FBSyxFQUFFO3dCQUNkbkMsa0JBQWtCbUMsS0FBSyxHQUFHLEFBQUN4QyxLQUFLd0MsS0FBSyxDQUFZQyxXQUFXO29CQUM5RDtvQkFFQSxJQUFJdEQsaUJBQWlCbUQsSUFBSSxDQUFDSSxNQUFNLEVBQUU7d0JBQ2hDckMsa0JBQWtCc0MsU0FBUyxHQUFHdEIsUUFBUWhCLGtCQUFrQnNDLFNBQVMsS0FBSzt3QkFDdEV0QyxrQkFBa0J1QyxrQkFBa0IsR0FBR2pGLE9BQU9rRixXQUFXLENBQUMsSUFBSUMsUUFBUSxDQUFDO29CQUN6RTtvQkFFTTs7d0JBQU1wRSxzQkFBc0I7NEJBQ2hDUSxZQUFZQzs0QkFDWm1CLEtBQUtEOzRCQUNMaEIsU0FBU0QsSUFBSUMsT0FBTzs0QkFDcEIwRCxVQUFVL0MsS0FBSytDLFFBQVE7NEJBQ3ZCM0QsS0FBQUE7d0JBQ0Y7OztvQkFOQWtCLE1BQU07Ozs7Ozs7Ozs7OztvQkFTRTs7d0JBQU1qQixRQUFRMkQsRUFBRSxDQUFDakUsTUFBTSxDQUFDOzRCQUM1QkcsWUFBWUMsaUJBQWlCOEQsSUFBSTs0QkFDakNqRCxNQUFNSzs0QkFDTmpCLEtBQUFBO3dCQUNGOzs7b0JBSkFrQixNQUFNOzs7Ozs7b0JBS0NDO29CQUNQLHVDQUF1QztvQkFDdkMsTUFBTUEsTUFBTTJDLElBQUksS0FBSyxTQUFTM0MsTUFBTTRDLFFBQVEsR0FDeEMsSUFBSXJGO3dCQUFpQjs0QkFBRXNGLFNBQVNoRSxJQUFJK0MsQ0FBQyxDQUFDOzRCQUE0QlIsT0FBTzBCLE9BQU9DLElBQUksQ0FBQy9DLE1BQU00QyxRQUFRLENBQUMsQ0FBQyxFQUFFO3dCQUFDO3VCQUFJL0QsSUFBSStDLENBQUMsSUFDakg1Qjs7b0JBSUZDLG9CQUFvQkYsSUFBSXNDLGtCQUFrQjtvQkFDNUNuQyxTQUFtQjVDLHVCQUF1QnlDO3lCQU0xQ25CLGlCQUFpQm1DLFFBQVEsRUFBekJuQzs7OztvQkFDRjs7d0JBQU1aLFlBQVk7NEJBQ2hCYyxTQUFBQTs0QkFDQUgsWUFBWUM7NEJBQ1pDLEtBQUFBOzRCQUNBMEMsSUFBSXJCLE9BQU9xQixFQUFFOzRCQUNiTSxnQkFBZ0IzQjs0QkFDaEJYLFVBQUFBO3dCQUNGOzs7b0JBUEE7OztvQkFVRix3Q0FBd0M7b0JBQ3hDLHdDQUF3QztvQkFDeEMsd0NBQXdDO29CQUV4QyxJQUFJWCxpQkFBaUJtRCxJQUFJLElBQUluRCxpQkFBaUJtRCxJQUFJLENBQUNJLE1BQU0sRUFBRTt3QkFDekQzRSxzQkFBc0I7NEJBQ3BCd0IsY0FBQUE7NEJBQ0FELFFBQVFELFFBQVFDLE1BQU07NEJBQ3RCaUUsV0FBV2xFLFFBQVFrRSxTQUFTOzRCQUM1QnJFLFlBQVk7Z0NBQUVJLFFBQVFIOzRCQUFpQjs0QkFDdkNxRSxNQUFNL0M7NEJBQ05nRCxPQUFPakQ7NEJBQ1BwQixLQUFBQTs0QkFDQXNFLGNBQWNsRTt3QkFDaEI7b0JBQ0Y7b0JBTVM7O3dCQUFNbkIsVUFBVTs0QkFDdkJvQixPQUFBQTs0QkFDQWEsS0FBS0c7NEJBQ0x1QixjQUFjN0M7NEJBQ2RPLGdCQUFBQTs0QkFDQU4sS0FBQUE7NEJBQ0FPLGtCQUFBQTs0QkFDQXVCLFNBQVM5QixJQUFJOEIsT0FBTzt3QkFDdEI7OztvQkFaQSx3Q0FBd0M7b0JBQ3hDLHFCQUFxQjtvQkFDckIsd0NBQXdDO29CQUV4Q1QsU0FBUztvQkFVVCx3Q0FBd0M7b0JBQ3hDLHlCQUF5QjtvQkFDekIsd0NBQXdDO29CQUV4Qzs7d0JBQU10QixpQkFBaUJ5QixLQUFLLENBQUN2QyxTQUFTLENBQUN5QyxNQUFNO3VDQUFDLG9CQUFBLFNBQU9DLFdBQVdDOzs7OzRDQUM5RDs7Z0RBQU1EOzs7NENBQU47NENBRVM7O2dEQUFNQyxLQUFLO29EQUNsQjVCLEtBQUFBO29EQUNBa0IsS0FBS0c7b0RBQ0xTLFNBQVM5QixJQUFJOEIsT0FBTztnREFDdEI7Ozs0Q0FKQVQsU0FBUyxpQkFJSEE7Ozs7Ozs0QkFDUjs0Q0FScURNLFdBQVdDOzs7NkJBUTdERyxRQUFRQyxPQUFPOzs7b0JBUmxCO29CQWNTOzt3QkFBTWhELFlBQVk7NEJBQ3pCNEIsTUFBQUE7NEJBQ0FNLEtBQUtHOzRCQUNMa0QsYUFBYSxDQUFDOzRCQUNkM0IsY0FBYzdDOzRCQUNkOEIsV0FBVzs0QkFDWDdCLEtBQUFBOzRCQUNBOEIsU0FBUzlCLElBQUk4QixPQUFPO3dCQUN0Qjs7O29CQVpBLHdDQUF3QztvQkFDeEMsdUJBQXVCO29CQUN2Qix3Q0FBd0M7b0JBRXhDVCxTQUFTO3lCQVdMbkIsQ0FBQUEsRUFBQUEsaUJBQUFBLE9BQU8yQyxNQUFNLGNBQWIzQyxxQ0FBQUEsZUFBZXNFLFlBQVksS0FBSXpFLGlCQUFpQjhDLE1BQU0sQUFBRCxHQUFyRDNDOzs7O29CQUNNb0IsUUFBVXRCLElBQVZzQjtvQkFDRkMsWUFBWWtELE1BQU1DLE9BQU8sQ0FBQ3BELFNBQVNBO3dCQUFTQTs7b0JBQ2xEOzt3QkFBTWxDLFNBQVNtQzt1Q0FBVyxvQkFBQTtvQ0FBU29EOzs7OzRDQUFBQSxhQUFBQTtpREFFN0JBLEtBQUtDLFlBQVksRUFBakJEOzs7OzRDQUNGOztnREFBTWxGLFdBQVdrRixLQUFLQyxZQUFZOzs7NENBQWxDOzs7Ozs7Ozs0QkFFSjs7Ozs7OztvQkFMQTs7O29CQVFGLHdDQUF3QztvQkFDeEMsMkJBQTJCO29CQUMzQix3Q0FBd0M7b0JBRXhDOzt3QkFBTTdFLGlCQUFpQnlCLEtBQUssQ0FBQ3hDLFdBQVcsQ0FBQzBDLE1BQU07dUNBQUMsb0JBQUEsU0FBT0MsV0FBNENDOzs7OzRDQUNqRzs7Z0RBQU1EOzs7NENBQU47NENBRVM7O2dEQUFNQyxLQUFLO29EQUNsQlYsS0FBS0c7b0RBQ0xrRCxhQUFhLENBQUM7b0RBQ2R2RSxLQUFLSCxLQUFLRyxHQUFHO29EQUNiNkIsV0FBVztvREFDWEMsU0FBUzlCLElBQUk4QixPQUFPO2dEQUN0Qjs7OzRDQU5BVCxTQUFTLGlCQU1IQTs7Ozs7OzRCQUNSOzRDQVZ1RE0sV0FBNENDOzs7NkJBVWhHRyxRQUFRQyxPQUFPOzs7b0JBVmxCO29CQWdCUzs7d0JBQU0zQyxvQkFBMEQ7NEJBQ3ZFd0MsV0FBVzs0QkFDWGhDLE1BQUFBOzRCQUNBd0IsUUFBQUE7d0JBQ0Y7OztvQkFSQSx3Q0FBd0M7b0JBQ3hDLDhCQUE4QjtvQkFDOUIsd0NBQXdDO29CQUV4Q0EsU0FBUzt5QkFRTG5CLENBQUFBLEVBQUFBLGtCQUFBQSxPQUFPMkMsTUFBTSxjQUFiM0Msc0NBQUFBLGdCQUFlc0UsWUFBWSxLQUFJekUsaUJBQWlCOEMsTUFBTSxBQUFELEdBQXJEM0M7Ozs7b0JBQ01vQixTQUFVdEIsSUFBVnNCO29CQUNGQyxhQUFZa0QsTUFBTUMsT0FBTyxDQUFDcEQsVUFBU0E7d0JBQVNBOztvQkFDbEQ7O3dCQUFNbEMsU0FBU21DO3VDQUFXLG9CQUFBO29DQUFTb0Q7Ozs7NENBQUFBLGFBQUFBO2lEQUU3QkEsS0FBS0MsWUFBWSxFQUFqQkQ7Ozs7NENBQ0Y7O2dEQUFNbEYsV0FBV2tGLEtBQUtDLFlBQVk7Ozs0Q0FBbEM7Ozs7Ozs7OzRCQUVKOzs7Ozs7O29CQUxBOzs7eUJBWUVqRSxjQUFBQTs7OztvQkFBYzs7d0JBQU1WLFFBQVEyRCxFQUFFLENBQUNpQixpQkFBaUIsQ0FBQzdFLElBQUk4RSxhQUFhOzs7b0JBQXBEOzs7b0JBRWxCOzt3QkFBT3pEOzs7b0JBQ0FGO29CQUNQOzt3QkFBTTNCLGdCQUFnQlE7OztvQkFBdEI7b0JBQ0EsTUFBTW1COzs7Ozs7O0lBRVY7V0F0VmV4Qjs7QUF3VmYsZUFBZUEsT0FBTyJ9