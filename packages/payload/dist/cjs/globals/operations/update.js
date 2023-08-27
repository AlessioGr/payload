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
var _beforeChange = require("../../fields/hooks/beforeChange");
var _beforeValidate = require("../../fields/hooks/beforeValidate");
var _afterChange = require("../../fields/hooks/afterChange");
var _afterRead = require("../../fields/hooks/afterRead");
var _saveVersion = require("../../versions/saveVersion");
var _getLatestGlobalVersion = require("../../versions/getLatestGlobalVersion");
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
function update(args) {
    return _update.apply(this, arguments);
}
function _update() {
    _update = _async_to_generator(function(args) {
        var globalConfig, slug, req, _args_req, payload, locale, depth, overrideAccess, showHiddenFields, draftArg, autosave, _globalConfig_versions, shouldCommit, data, shouldSaveDraft, accessResults, _tmp, query, _ref, global, globalExists, globalJSON, originalDoc, result, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    globalConfig = args.globalConfig, slug = args.slug, req = args.req, _args_req = args.req, payload = _args_req.payload, locale = _args_req.locale, depth = args.depth, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields, draftArg = args.draft, autosave = args.autosave;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        24,
                        ,
                        26
                    ]);
                    return [
                        4,
                        (0, _initTransaction.initTransaction)(req)
                    ];
                case 2:
                    shouldCommit = _state.sent();
                    data = args.data;
                    shouldSaveDraft = Boolean(draftArg && ((_globalConfig_versions = globalConfig.versions) === null || _globalConfig_versions === void 0 ? void 0 : _globalConfig_versions.drafts));
                    if (!!overrideAccess) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        (0, _executeAccess.default)({
                            req: req,
                            data: data
                        }, globalConfig.access.update)
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
                    query = overrideAccess ? undefined : accessResults;
                    return [
                        4,
                        (0, _getLatestGlobalVersion.getLatestGlobalVersion)({
                            payload: payload,
                            config: globalConfig,
                            slug: slug,
                            where: query,
                            locale: locale,
                            req: req
                        })
                    ];
                case 6:
                    _ref = _state.sent(), global = _ref.global, globalExists = _ref.globalExists;
                    globalJSON = {};
                    if (global) {
                        globalJSON = JSON.parse(JSON.stringify(global));
                        if (globalJSON._id) {
                            delete globalJSON._id;
                        }
                    }
                    return [
                        4,
                        (0, _afterRead.afterRead)({
                            depth: 0,
                            doc: globalJSON,
                            entityConfig: globalConfig,
                            req: req,
                            overrideAccess: true,
                            showHiddenFields: showHiddenFields,
                            context: req.context
                        })
                    ];
                case 7:
                    originalDoc = _state.sent();
                    return [
                        4,
                        (0, _beforeValidate.beforeValidate)({
                            data: data,
                            doc: originalDoc,
                            entityConfig: globalConfig,
                            operation: "update",
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
                    // beforeValidate - Global
                    // /////////////////////////////////////
                    return [
                        4,
                        globalConfig.hooks.beforeValidate.reduce(function() {
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
                                                    originalDoc: originalDoc
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
                    // /////////////////////////////////////
                    // beforeChange - Global
                    // /////////////////////////////////////
                    return [
                        4,
                        globalConfig.hooks.beforeChange.reduce(function() {
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
                                                    originalDoc: originalDoc
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
                case 10:
                    _state.sent();
                    return [
                        4,
                        (0, _beforeChange.beforeChange)({
                            data: data,
                            doc: originalDoc,
                            docWithLocales: globalJSON,
                            entityConfig: globalConfig,
                            operation: "update",
                            req: req,
                            skipValidation: shouldSaveDraft,
                            context: req.context
                        })
                    ];
                case 11:
                    result = _state.sent();
                    if (!!shouldSaveDraft) return [
                        3,
                        15
                    ];
                    if (!globalExists) return [
                        3,
                        13
                    ];
                    return [
                        4,
                        payload.db.updateGlobal({
                            slug: slug,
                            data: result,
                            req: req
                        })
                    ];
                case 12:
                    result = _state.sent();
                    return [
                        3,
                        15
                    ];
                case 13:
                    return [
                        4,
                        payload.db.createGlobal({
                            slug: slug,
                            data: result,
                            req: req
                        })
                    ];
                case 14:
                    result = _state.sent();
                    _state.label = 15;
                case 15:
                    if (!globalConfig.versions) return [
                        3,
                        17
                    ];
                    return [
                        4,
                        (0, _saveVersion.saveVersion)({
                            payload: payload,
                            global: globalConfig,
                            req: req,
                            docWithLocales: _object_spread_props(_object_spread({}, result), {
                                createdAt: result.createdAt,
                                updatedAt: result.updatedAt
                            }),
                            autosave: autosave,
                            draft: shouldSaveDraft
                        })
                    ];
                case 16:
                    result = _state.sent();
                    _state.label = 17;
                case 17:
                    return [
                        4,
                        (0, _afterRead.afterRead)({
                            depth: depth,
                            doc: result,
                            entityConfig: globalConfig,
                            req: req,
                            overrideAccess: overrideAccess,
                            showHiddenFields: showHiddenFields,
                            context: req.context
                        })
                    ];
                case 18:
                    // /////////////////////////////////////
                    // afterRead - Fields
                    // /////////////////////////////////////
                    result = _state.sent();
                    // /////////////////////////////////////
                    // afterRead - Global
                    // /////////////////////////////////////
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
                                                    doc: result,
                                                    req: req
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
                case 19:
                    _state.sent();
                    return [
                        4,
                        (0, _afterChange.afterChange)({
                            data: data,
                            doc: result,
                            previousDoc: originalDoc,
                            entityConfig: globalConfig,
                            operation: "update",
                            req: req,
                            context: req.context
                        })
                    ];
                case 20:
                    // /////////////////////////////////////
                    // afterChange - Fields
                    // /////////////////////////////////////
                    result = _state.sent();
                    // /////////////////////////////////////
                    // afterChange - Global
                    // /////////////////////////////////////
                    return [
                        4,
                        globalConfig.hooks.afterChange.reduce(function() {
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
                                                    req: req
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
                case 21:
                    _state.sent();
                    if (!shouldCommit) return [
                        3,
                        23
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 22:
                    _state.sent();
                    _state.label = 23;
                case 23:
                    return [
                        2,
                        result
                    ];
                case 24:
                    error = _state.sent();
                    return [
                        4,
                        (0, _killTransaction.killTransaction)(req)
                    ];
                case 25:
                    _state.sent();
                    throw error;
                case 26:
                    return [
                        2
                    ];
            }
        });
    });
    return _update.apply(this, arguments);
}
var _default = update;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvdXBkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IERlZXBQYXJ0aWFsIH0gZnJvbSAndHMtZXNzZW50aWFscyc7XG5pbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2Vzcyc7XG5pbXBvcnQgeyBiZWZvcmVDaGFuZ2UgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYmVmb3JlQ2hhbmdlJztcbmltcG9ydCB7IGJlZm9yZVZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2JlZm9yZVZhbGlkYXRlJztcbmltcG9ydCB7IGFmdGVyQ2hhbmdlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyQ2hhbmdlJztcbmltcG9ydCB7IGFmdGVyUmVhZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IHNhdmVWZXJzaW9uIH0gZnJvbSAnLi4vLi4vdmVyc2lvbnMvc2F2ZVZlcnNpb24nO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0R2xvYmFsVmVyc2lvbiB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL2dldExhdGVzdEdsb2JhbFZlcnNpb24nO1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJztcblxudHlwZSBBcmdzPFQgZXh0ZW5kcyB7IFtmaWVsZDogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sXTogdW5rbm93biB9PiA9IHtcbiAgZ2xvYmFsQ29uZmlnOiBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgc2x1Zzogc3RyaW5nXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgZGVwdGg/OiBudW1iZXJcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIGRyYWZ0PzogYm9vbGVhblxuICBhdXRvc2F2ZT86IGJvb2xlYW5cbiAgZGF0YTogRGVlcFBhcnRpYWw8T21pdDxULCAnaWQnPj5cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXT4oXG4gIGFyZ3M6IEFyZ3M8R2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXVtUU2x1Z10+LFxuKTogUHJvbWlzZTxHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddW1RTbHVnXT4ge1xuICBjb25zdCB7XG4gICAgZ2xvYmFsQ29uZmlnLFxuICAgIHNsdWcsXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGxvY2FsZSxcbiAgICB9LFxuICAgIGRlcHRoLFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgZHJhZnQ6IGRyYWZ0QXJnLFxuICAgIGF1dG9zYXZlLFxuICB9ID0gYXJncztcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgbGV0IHsgZGF0YSB9ID0gYXJncztcblxuICAgIGNvbnN0IHNob3VsZFNhdmVEcmFmdCA9IEJvb2xlYW4oZHJhZnRBcmcgJiYgZ2xvYmFsQ29uZmlnLnZlcnNpb25zPy5kcmFmdHMpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIDEuIFJldHJpZXZlIGFuZCBleGVjdXRlIGFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHtcbiAgICAgIHJlcSxcbiAgICAgIGRhdGEsXG4gICAgfSwgZ2xvYmFsQ29uZmlnLmFjY2Vzcy51cGRhdGUpIDogdHJ1ZTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXRyaWV2ZSBkb2N1bWVudFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHF1ZXJ5OiBXaGVyZSA9IG92ZXJyaWRlQWNjZXNzID8gdW5kZWZpbmVkIDogYWNjZXNzUmVzdWx0cyBhcyBXaGVyZTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAyLiBSZXRyaWV2ZSBkb2N1bWVudFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBjb25zdCB7XG4gICAgICBnbG9iYWwsXG4gICAgICBnbG9iYWxFeGlzdHMsXG4gICAgfSA9IGF3YWl0IGdldExhdGVzdEdsb2JhbFZlcnNpb24oe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbmZpZzogZ2xvYmFsQ29uZmlnLFxuICAgICAgc2x1ZyxcbiAgICAgIHdoZXJlOiBxdWVyeSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIGxldCBnbG9iYWxKU09OOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuXG4gICAgaWYgKGdsb2JhbCkge1xuICAgICAgZ2xvYmFsSlNPTiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2xvYmFsKSk7XG5cbiAgICAgIGlmIChnbG9iYWxKU09OLl9pZCkge1xuICAgICAgICBkZWxldGUgZ2xvYmFsSlNPTi5faWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb3JpZ2luYWxEb2MgPSBhd2FpdCBhZnRlclJlYWQoe1xuICAgICAgZGVwdGg6IDAsXG4gICAgICBkb2M6IGdsb2JhbEpTT04sXG4gICAgICBlbnRpdHlDb25maWc6IGdsb2JhbENvbmZpZyxcbiAgICAgIHJlcSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzOiB0cnVlLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZVZhbGlkYXRlIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZGF0YSA9IGF3YWl0IGJlZm9yZVZhbGlkYXRlKHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgZW50aXR5Q29uZmlnOiBnbG9iYWxDb25maWcsXG4gICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICByZXEsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVWYWxpZGF0ZSAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5iZWZvcmVWYWxpZGF0ZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICBkYXRhID0gKGF3YWl0IGhvb2soe1xuICAgICAgICBkYXRhLFxuICAgICAgICByZXEsXG4gICAgICAgIG9yaWdpbmFsRG9jLFxuICAgICAgfSkpIHx8IGRhdGE7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZUNoYW5nZSAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5iZWZvcmVDaGFuZ2UucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgZGF0YSA9IChhd2FpdCBob29rKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICBvcmlnaW5hbERvYyxcbiAgICAgIH0pKSB8fCBkYXRhO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVDaGFuZ2UgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYmVmb3JlQ2hhbmdlKHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgZG9jV2l0aExvY2FsZXM6IGdsb2JhbEpTT04sXG4gICAgICBlbnRpdHlDb25maWc6IGdsb2JhbENvbmZpZyxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICByZXEsXG4gICAgICBza2lwVmFsaWRhdGlvbjogc2hvdWxkU2F2ZURyYWZ0LFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVXBkYXRlXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKCFzaG91bGRTYXZlRHJhZnQpIHtcbiAgICAgIGlmIChnbG9iYWxFeGlzdHMpIHtcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgcGF5bG9hZC5kYi51cGRhdGVHbG9iYWwoe1xuICAgICAgICAgIHNsdWcsXG4gICAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBhd2FpdCBwYXlsb2FkLmRiLmNyZWF0ZUdsb2JhbCh7XG4gICAgICAgICAgc2x1ZyxcbiAgICAgICAgICBkYXRhOiByZXN1bHQsXG4gICAgICAgICAgcmVxLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQ3JlYXRlIHZlcnNpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoZ2xvYmFsQ29uZmlnLnZlcnNpb25zKSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBzYXZlVmVyc2lvbih7XG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIGdsb2JhbDogZ2xvYmFsQ29uZmlnLFxuICAgICAgICByZXEsXG4gICAgICAgIGRvY1dpdGhMb2NhbGVzOiB7XG4gICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmNyZWF0ZWRBdCxcbiAgICAgICAgICB1cGRhdGVkQXQ6IHJlc3VsdC51cGRhdGVkQXQsXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9zYXZlLFxuICAgICAgICBkcmFmdDogc2hvdWxkU2F2ZURyYWZ0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgZW50aXR5Q29uZmlnOiBnbG9iYWxDb25maWcsXG4gICAgICByZXEsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBHbG9iYWxcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBnbG9iYWxDb25maWcuaG9va3MuYWZ0ZXJSZWFkLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIHJlc3VsdCA9IGF3YWl0IGhvb2soe1xuICAgICAgICBkb2M6IHJlc3VsdCxcbiAgICAgICAgcmVxLFxuICAgICAgfSkgfHwgcmVzdWx0O1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlckNoYW5nZSAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyQ2hhbmdlKHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2M6IHJlc3VsdCxcbiAgICAgIHByZXZpb3VzRG9jOiBvcmlnaW5hbERvYyxcbiAgICAgIGVudGl0eUNvbmZpZzogZ2xvYmFsQ29uZmlnLFxuICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgIHJlcSxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyQ2hhbmdlIC0gR2xvYmFsXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgZ2xvYmFsQ29uZmlnLmhvb2tzLmFmdGVyQ2hhbmdlLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIHJlc3VsdCA9IGF3YWl0IGhvb2soe1xuICAgICAgICBkb2M6IHJlc3VsdCxcbiAgICAgICAgcHJldmlvdXNEb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgICByZXEsXG4gICAgICB9KSB8fCByZXN1bHQ7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgcGF5bG9hZC5kYi5jb21taXRUcmFuc2FjdGlvbihyZXEudHJhbnNhY3Rpb25JRCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZTtcbiJdLCJuYW1lcyI6WyJ1cGRhdGUiLCJhcmdzIiwiZ2xvYmFsQ29uZmlnIiwic2x1ZyIsInJlcSIsInBheWxvYWQiLCJsb2NhbGUiLCJkZXB0aCIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsImRyYWZ0QXJnIiwiYXV0b3NhdmUiLCJzaG91bGRDb21taXQiLCJkYXRhIiwic2hvdWxkU2F2ZURyYWZ0IiwiYWNjZXNzUmVzdWx0cyIsInF1ZXJ5IiwiZ2xvYmFsIiwiZ2xvYmFsRXhpc3RzIiwiZ2xvYmFsSlNPTiIsIm9yaWdpbmFsRG9jIiwicmVzdWx0IiwiZXJyb3IiLCJkcmFmdCIsImluaXRUcmFuc2FjdGlvbiIsIkJvb2xlYW4iLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImV4ZWN1dGVBY2Nlc3MiLCJhY2Nlc3MiLCJ1bmRlZmluZWQiLCJnZXRMYXRlc3RHbG9iYWxWZXJzaW9uIiwiY29uZmlnIiwid2hlcmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJfaWQiLCJhZnRlclJlYWQiLCJkb2MiLCJlbnRpdHlDb25maWciLCJjb250ZXh0IiwiYmVmb3JlVmFsaWRhdGUiLCJvcGVyYXRpb24iLCJob29rcyIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJQcm9taXNlIiwicmVzb2x2ZSIsImJlZm9yZUNoYW5nZSIsImRvY1dpdGhMb2NhbGVzIiwic2tpcFZhbGlkYXRpb24iLCJkYiIsInVwZGF0ZUdsb2JhbCIsImNyZWF0ZUdsb2JhbCIsInNhdmVWZXJzaW9uIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiYWZ0ZXJDaGFuZ2UiLCJwcmV2aW91c0RvYyIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCIsImtpbGxUcmFuc2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEwUUE7OztlQUFBOzs7b0VBdFEwQjs0QkFDRzs4QkFDRTsyQkFDSDt5QkFDRjsyQkFFRTtzQ0FDVzsrQkFDUDsrQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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