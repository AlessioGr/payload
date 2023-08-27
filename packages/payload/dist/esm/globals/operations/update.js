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
import executeAccess from "../../auth/executeAccess";
import { beforeChange } from "../../fields/hooks/beforeChange";
import { beforeValidate } from "../../fields/hooks/beforeValidate";
import { afterChange } from "../../fields/hooks/afterChange";
import { afterRead } from "../../fields/hooks/afterRead";
import { saveVersion } from "../../versions/saveVersion";
import { getLatestGlobalVersion } from "../../versions/getLatestGlobalVersion";
import { initTransaction } from "../../utilities/initTransaction";
import { killTransaction } from "../../utilities/killTransaction";
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
                        initTransaction(req)
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
                        executeAccess({
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
                        getLatestGlobalVersion({
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
                        afterRead({
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
                        beforeValidate({
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
                        beforeChange({
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
                        saveVersion({
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
                        afterRead({
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
                        afterChange({
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
                        killTransaction(req)
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
export default update;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvdXBkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IERlZXBQYXJ0aWFsIH0gZnJvbSAndHMtZXNzZW50aWFscyc7XG5pbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZXhlY3V0ZUFjY2Vzcyc7XG5pbXBvcnQgeyBiZWZvcmVDaGFuZ2UgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYmVmb3JlQ2hhbmdlJztcbmltcG9ydCB7IGJlZm9yZVZhbGlkYXRlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2JlZm9yZVZhbGlkYXRlJztcbmltcG9ydCB7IGFmdGVyQ2hhbmdlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyQ2hhbmdlJztcbmltcG9ydCB7IGFmdGVyUmVhZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IHNhdmVWZXJzaW9uIH0gZnJvbSAnLi4vLi4vdmVyc2lvbnMvc2F2ZVZlcnNpb24nO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0R2xvYmFsVmVyc2lvbiB9IGZyb20gJy4uLy4uL3ZlcnNpb25zL2dldExhdGVzdEdsb2JhbFZlcnNpb24nO1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJztcblxudHlwZSBBcmdzPFQgZXh0ZW5kcyB7IFtmaWVsZDogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sXTogdW5rbm93biB9PiA9IHtcbiAgZ2xvYmFsQ29uZmlnOiBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgc2x1Zzogc3RyaW5nXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgZGVwdGg/OiBudW1iZXJcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIGRyYWZ0PzogYm9vbGVhblxuICBhdXRvc2F2ZT86IGJvb2xlYW5cbiAgZGF0YTogRGVlcFBhcnRpYWw8T21pdDxULCAnaWQnPj5cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXT4oXG4gIGFyZ3M6IEFyZ3M8R2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXVtUU2x1Z10+LFxuKTogUHJvbWlzZTxHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddW1RTbHVnXT4ge1xuICBjb25zdCB7XG4gICAgZ2xvYmFsQ29uZmlnLFxuICAgIHNsdWcsXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGxvY2FsZSxcbiAgICB9LFxuICAgIGRlcHRoLFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgZHJhZnQ6IGRyYWZ0QXJnLFxuICAgIGF1dG9zYXZlLFxuICB9ID0gYXJncztcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgbGV0IHsgZGF0YSB9ID0gYXJncztcblxuICAgIGNvbnN0IHNob3VsZFNhdmVEcmFmdCA9IEJvb2xlYW4oZHJhZnRBcmcgJiYgZ2xvYmFsQ29uZmlnLnZlcnNpb25zPy5kcmFmdHMpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIDEuIFJldHJpZXZlIGFuZCBleGVjdXRlIGFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHtcbiAgICAgIHJlcSxcbiAgICAgIGRhdGEsXG4gICAgfSwgZ2xvYmFsQ29uZmlnLmFjY2Vzcy51cGRhdGUpIDogdHJ1ZTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXRyaWV2ZSBkb2N1bWVudFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHF1ZXJ5OiBXaGVyZSA9IG92ZXJyaWRlQWNjZXNzID8gdW5kZWZpbmVkIDogYWNjZXNzUmVzdWx0cyBhcyBXaGVyZTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyAyLiBSZXRyaWV2ZSBkb2N1bWVudFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBjb25zdCB7XG4gICAgICBnbG9iYWwsXG4gICAgICBnbG9iYWxFeGlzdHMsXG4gICAgfSA9IGF3YWl0IGdldExhdGVzdEdsb2JhbFZlcnNpb24oe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbmZpZzogZ2xvYmFsQ29uZmlnLFxuICAgICAgc2x1ZyxcbiAgICAgIHdoZXJlOiBxdWVyeSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIGxldCBnbG9iYWxKU09OOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuXG4gICAgaWYgKGdsb2JhbCkge1xuICAgICAgZ2xvYmFsSlNPTiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ2xvYmFsKSk7XG5cbiAgICAgIGlmIChnbG9iYWxKU09OLl9pZCkge1xuICAgICAgICBkZWxldGUgZ2xvYmFsSlNPTi5faWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb3JpZ2luYWxEb2MgPSBhd2FpdCBhZnRlclJlYWQoe1xuICAgICAgZGVwdGg6IDAsXG4gICAgICBkb2M6IGdsb2JhbEpTT04sXG4gICAgICBlbnRpdHlDb25maWc6IGdsb2JhbENvbmZpZyxcbiAgICAgIHJlcSxcbiAgICAgIG92ZXJyaWRlQWNjZXNzOiB0cnVlLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZVZhbGlkYXRlIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgZGF0YSA9IGF3YWl0IGJlZm9yZVZhbGlkYXRlKHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgZW50aXR5Q29uZmlnOiBnbG9iYWxDb25maWcsXG4gICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICByZXEsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVWYWxpZGF0ZSAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5iZWZvcmVWYWxpZGF0ZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICBkYXRhID0gKGF3YWl0IGhvb2soe1xuICAgICAgICBkYXRhLFxuICAgICAgICByZXEsXG4gICAgICAgIG9yaWdpbmFsRG9jLFxuICAgICAgfSkpIHx8IGRhdGE7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGJlZm9yZUNoYW5nZSAtIEdsb2JhbFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5iZWZvcmVDaGFuZ2UucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgZGF0YSA9IChhd2FpdCBob29rKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICBvcmlnaW5hbERvYyxcbiAgICAgIH0pKSB8fCBkYXRhO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBiZWZvcmVDaGFuZ2UgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYmVmb3JlQ2hhbmdlKHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgZG9jV2l0aExvY2FsZXM6IGdsb2JhbEpTT04sXG4gICAgICBlbnRpdHlDb25maWc6IGdsb2JhbENvbmZpZyxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICByZXEsXG4gICAgICBza2lwVmFsaWRhdGlvbjogc2hvdWxkU2F2ZURyYWZ0LFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVXBkYXRlXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKCFzaG91bGRTYXZlRHJhZnQpIHtcbiAgICAgIGlmIChnbG9iYWxFeGlzdHMpIHtcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgcGF5bG9hZC5kYi51cGRhdGVHbG9iYWwoe1xuICAgICAgICAgIHNsdWcsXG4gICAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBhd2FpdCBwYXlsb2FkLmRiLmNyZWF0ZUdsb2JhbCh7XG4gICAgICAgICAgc2x1ZyxcbiAgICAgICAgICBkYXRhOiByZXN1bHQsXG4gICAgICAgICAgcmVxLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gQ3JlYXRlIHZlcnNpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBpZiAoZ2xvYmFsQ29uZmlnLnZlcnNpb25zKSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBzYXZlVmVyc2lvbih7XG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIGdsb2JhbDogZ2xvYmFsQ29uZmlnLFxuICAgICAgICByZXEsXG4gICAgICAgIGRvY1dpdGhMb2NhbGVzOiB7XG4gICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmNyZWF0ZWRBdCxcbiAgICAgICAgICB1cGRhdGVkQXQ6IHJlc3VsdC51cGRhdGVkQXQsXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9zYXZlLFxuICAgICAgICBkcmFmdDogc2hvdWxkU2F2ZURyYWZ0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgZW50aXR5Q29uZmlnOiBnbG9iYWxDb25maWcsXG4gICAgICByZXEsXG4gICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlclJlYWQgLSBHbG9iYWxcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBnbG9iYWxDb25maWcuaG9va3MuYWZ0ZXJSZWFkLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIHJlc3VsdCA9IGF3YWl0IGhvb2soe1xuICAgICAgICBkb2M6IHJlc3VsdCxcbiAgICAgICAgcmVxLFxuICAgICAgfSkgfHwgcmVzdWx0O1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlckNoYW5nZSAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyQ2hhbmdlKHtcbiAgICAgIGRhdGEsXG4gICAgICBkb2M6IHJlc3VsdCxcbiAgICAgIHByZXZpb3VzRG9jOiBvcmlnaW5hbERvYyxcbiAgICAgIGVudGl0eUNvbmZpZzogZ2xvYmFsQ29uZmlnLFxuICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgIHJlcSxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyQ2hhbmdlIC0gR2xvYmFsXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgZ2xvYmFsQ29uZmlnLmhvb2tzLmFmdGVyQ2hhbmdlLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIHJlc3VsdCA9IGF3YWl0IGhvb2soe1xuICAgICAgICBkb2M6IHJlc3VsdCxcbiAgICAgICAgcHJldmlvdXNEb2M6IG9yaWdpbmFsRG9jLFxuICAgICAgICByZXEsXG4gICAgICB9KSB8fCByZXN1bHQ7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgcGF5bG9hZC5kYi5jb21taXRUcmFuc2FjdGlvbihyZXEudHJhbnNhY3Rpb25JRCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZTtcbiJdLCJuYW1lcyI6WyJleGVjdXRlQWNjZXNzIiwiYmVmb3JlQ2hhbmdlIiwiYmVmb3JlVmFsaWRhdGUiLCJhZnRlckNoYW5nZSIsImFmdGVyUmVhZCIsInNhdmVWZXJzaW9uIiwiZ2V0TGF0ZXN0R2xvYmFsVmVyc2lvbiIsImluaXRUcmFuc2FjdGlvbiIsImtpbGxUcmFuc2FjdGlvbiIsInVwZGF0ZSIsImFyZ3MiLCJnbG9iYWxDb25maWciLCJzbHVnIiwicmVxIiwicGF5bG9hZCIsImxvY2FsZSIsImRlcHRoIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwiZHJhZnRBcmciLCJhdXRvc2F2ZSIsInNob3VsZENvbW1pdCIsImRhdGEiLCJzaG91bGRTYXZlRHJhZnQiLCJhY2Nlc3NSZXN1bHRzIiwicXVlcnkiLCJnbG9iYWwiLCJnbG9iYWxFeGlzdHMiLCJnbG9iYWxKU09OIiwib3JpZ2luYWxEb2MiLCJyZXN1bHQiLCJlcnJvciIsImRyYWZ0IiwiQm9vbGVhbiIsInZlcnNpb25zIiwiZHJhZnRzIiwiYWNjZXNzIiwidW5kZWZpbmVkIiwiY29uZmlnIiwid2hlcmUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJfaWQiLCJkb2MiLCJlbnRpdHlDb25maWciLCJjb250ZXh0Iiwib3BlcmF0aW9uIiwiaG9va3MiLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkb2NXaXRoTG9jYWxlcyIsInNraXBWYWxpZGF0aW9uIiwiZGIiLCJ1cGRhdGVHbG9iYWwiLCJjcmVhdGVHbG9iYWwiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJwcmV2aW91c0RvYyIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxPQUFPQSxtQkFBbUIsMkJBQTJCO0FBQ3JE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