/* eslint-disable no-underscore-dangle */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
import { APIError, Forbidden, NotFound } from "../../errors";
import executeAccess from "../../auth/executeAccess";
import { hasWhereAccessResult } from "../../auth/types";
import { afterChange } from "../../fields/hooks/afterChange";
import { afterRead } from "../../fields/hooks/afterRead";
import { getLatestCollectionVersion } from "../../versions/getLatestCollectionVersion";
import { combineQueries } from "../../database/combineQueries";
import { initTransaction } from "../../utilities/initTransaction";
import { killTransaction } from "../../utilities/killTransaction";
function restoreVersion(args) {
    return _restoreVersion.apply(this, arguments);
}
function _restoreVersion() {
    _restoreVersion = _async_to_generator(function(args) {
        var _args_collection, collectionConfig, id, _args_overrideAccess, overrideAccess, showHiddenFields, depth, _args_req, t, payload, locale, req, shouldCommit, _ref, versionDocs, _versionDocs, rawVersion, parentDocID, accessResults, _tmp, hasWherePolicy, findOneArgs, doc, prevDocWithLocales, result, prevVersion, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _args_collection = args.collection, collectionConfig = _args_collection.config, id = args.id, _args_overrideAccess = args.overrideAccess, overrideAccess = _args_overrideAccess === void 0 ? false : _args_overrideAccess, showHiddenFields = args.showHiddenFields, depth = args.depth, _args_req = args.req, t = _args_req.t, payload = _args_req.payload, locale = _args_req.locale, req = args.req;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        17,
                        ,
                        19
                    ]);
                    return [
                        4,
                        initTransaction(req)
                    ];
                case 2:
                    shouldCommit = _state.sent();
                    if (!id) {
                        throw new APIError("Missing ID of version to restore.", httpStatus.BAD_REQUEST);
                    }
                    return [
                        4,
                        req.payload.db.findVersions({
                            collection: collectionConfig.slug,
                            where: {
                                id: {
                                    equals: id
                                }
                            },
                            locale: locale,
                            limit: 1,
                            req: req
                        })
                    ];
                case 3:
                    _ref = _state.sent(), versionDocs = _ref.docs;
                    _versionDocs = _sliced_to_array(versionDocs, 1), rawVersion = _versionDocs[0];
                    if (!rawVersion) {
                        throw new NotFound(t);
                    }
                    parentDocID = rawVersion.parent;
                    if (!!overrideAccess) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        executeAccess({
                            req: req,
                            id: parentDocID
                        }, collectionConfig.access.update)
                    ];
                case 4:
                    _tmp = _state.sent();
                    return [
                        3,
                        6
                    ];
                case 5:
                    _tmp = true;
                    _state.label = 6;
                case 6:
                    accessResults = _tmp;
                    hasWherePolicy = hasWhereAccessResult(accessResults);
                    findOneArgs = {
                        collection: collectionConfig.slug,
                        where: combineQueries({
                            id: {
                                equals: parentDocID
                            }
                        }, accessResults),
                        locale: locale,
                        req: req
                    };
                    return [
                        4,
                        req.payload.db.findOne(findOneArgs)
                    ];
                case 7:
                    doc = _state.sent();
                    if (!doc && !hasWherePolicy) throw new NotFound(t);
                    if (!doc && hasWherePolicy) throw new Forbidden(t);
                    return [
                        4,
                        getLatestCollectionVersion({
                            payload: payload,
                            id: parentDocID,
                            query: findOneArgs,
                            config: collectionConfig,
                            req: req
                        })
                    ];
                case 8:
                    prevDocWithLocales = _state.sent();
                    return [
                        4,
                        req.payload.db.updateOne({
                            collection: collectionConfig.slug,
                            id: parentDocID,
                            data: rawVersion.version,
                            req: req
                        })
                    ];
                case 9:
                    result = _state.sent();
                    prevVersion = _object_spread({}, prevDocWithLocales);
                    delete prevVersion.id;
                    return [
                        4,
                        payload.db.createVersion({
                            collectionSlug: collectionConfig.slug,
                            parent: parentDocID,
                            versionData: rawVersion.version,
                            autosave: false,
                            createdAt: prevVersion.createdAt,
                            updatedAt: new Date().toISOString(),
                            req: req
                        })
                    ];
                case 10:
                    _state.sent();
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
                case 11:
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
                case 12:
                    _state.sent();
                    return [
                        4,
                        afterChange({
                            data: result,
                            doc: result,
                            previousDoc: prevDocWithLocales,
                            entityConfig: collectionConfig,
                            operation: "update",
                            context: req.context,
                            req: req
                        })
                    ];
                case 13:
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
                                                    req: req,
                                                    previousDoc: prevDocWithLocales,
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
                case 14:
                    _state.sent();
                    if (!shouldCommit) return [
                        3,
                        16
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 15:
                    _state.sent();
                    _state.label = 16;
                case 16:
                    return [
                        2,
                        result
                    ];
                case 17:
                    error = _state.sent();
                    return [
                        4,
                        killTransaction(req)
                    ];
                case 18:
                    _state.sent();
                    throw error;
                case 19:
                    return [
                        2
                    ];
            }
        });
    });
    return _restoreVersion.apply(this, arguments);
}
export default restoreVersion;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL3Jlc3RvcmVWZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgVHlwZVdpdGhJRCB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBBUElFcnJvciwgRm9yYmlkZGVuLCBOb3RGb3VuZCB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgZXhlY3V0ZUFjY2VzcyBmcm9tICcuLi8uLi9hdXRoL2V4ZWN1dGVBY2Nlc3MnO1xuaW1wb3J0IHsgaGFzV2hlcmVBY2Nlc3NSZXN1bHQgfSBmcm9tICcuLi8uLi9hdXRoL3R5cGVzJztcbmltcG9ydCB7IGFmdGVyQ2hhbmdlIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyQ2hhbmdlJztcbmltcG9ydCB7IGFmdGVyUmVhZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9ob29rcy9hZnRlclJlYWQnO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Q29sbGVjdGlvblZlcnNpb24gfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9nZXRMYXRlc3RDb2xsZWN0aW9uVmVyc2lvbic7XG5pbXBvcnQgeyBjb21iaW5lUXVlcmllcyB9IGZyb20gJy4uLy4uL2RhdGFiYXNlL2NvbWJpbmVRdWVyaWVzJztcbmltcG9ydCB0eXBlIHsgRmluZE9uZUFyZ3MgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS90eXBlcyc7XG5pbXBvcnQgeyBpbml0VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uJztcbmltcG9ydCB7IGtpbGxUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9raWxsVHJhbnNhY3Rpb24nO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgaWQ6IHN0cmluZyB8IG51bWJlclxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIGRpc2FibGVFcnJvcnM/OiBib29sZWFuXG4gIGN1cnJlbnREZXB0aD86IG51bWJlclxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgZGVwdGg/OiBudW1iZXJcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzdG9yZVZlcnNpb248VCBleHRlbmRzIFR5cGVXaXRoSUQgPSBhbnk+KGFyZ3M6IEFyZ3VtZW50cyk6IFByb21pc2U8VD4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgIH0sXG4gICAgaWQsXG4gICAgb3ZlcnJpZGVBY2Nlc3MgPSBmYWxzZSxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIGRlcHRoLFxuICAgIHJlcToge1xuICAgICAgdCxcbiAgICAgIHBheWxvYWQsXG4gICAgICBsb2NhbGUsXG4gICAgfSxcbiAgICByZXEsXG4gIH0gPSBhcmdzO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSk7XG5cbiAgICBpZiAoIWlkKSB7XG4gICAgICB0aHJvdyBuZXcgQVBJRXJyb3IoJ01pc3NpbmcgSUQgb2YgdmVyc2lvbiB0byByZXN0b3JlLicsIGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXRyaWV2ZSBvcmlnaW5hbCByYXcgdmVyc2lvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHsgZG9jczogdmVyc2lvbkRvY3MgfSA9IGF3YWl0IHJlcS5wYXlsb2FkLmRiLmZpbmRWZXJzaW9ucyh7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICB3aGVyZTogeyBpZDogeyBlcXVhbHM6IGlkIH0gfSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxpbWl0OiAxLFxuICAgICAgcmVxLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW3Jhd1ZlcnNpb25dID0gdmVyc2lvbkRvY3M7XG5cbiAgICBpZiAoIXJhd1ZlcnNpb24pIHtcbiAgICAgIHRocm93IG5ldyBOb3RGb3VuZCh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnREb2NJRCA9IHJhd1ZlcnNpb24ucGFyZW50O1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSAhb3ZlcnJpZGVBY2Nlc3MgPyBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxLCBpZDogcGFyZW50RG9jSUQgfSwgY29sbGVjdGlvbkNvbmZpZy5hY2Nlc3MudXBkYXRlKSA6IHRydWU7XG4gICAgY29uc3QgaGFzV2hlcmVQb2xpY3kgPSBoYXNXaGVyZUFjY2Vzc1Jlc3VsdChhY2Nlc3NSZXN1bHRzKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXRyaWV2ZSBkb2N1bWVudFxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IGZpbmRPbmVBcmdzOiBGaW5kT25lQXJncyA9IHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIHdoZXJlOiBjb21iaW5lUXVlcmllcyh7IGlkOiB7IGVxdWFsczogcGFyZW50RG9jSUQgfSB9LCBhY2Nlc3NSZXN1bHRzKSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHJlcSxcbiAgICB9O1xuXG4gICAgY29uc3QgZG9jID0gYXdhaXQgcmVxLnBheWxvYWQuZGIuZmluZE9uZShmaW5kT25lQXJncyk7XG5cblxuICAgIGlmICghZG9jICYmICFoYXNXaGVyZVBvbGljeSkgdGhyb3cgbmV3IE5vdEZvdW5kKHQpO1xuICAgIGlmICghZG9jICYmIGhhc1doZXJlUG9saWN5KSB0aHJvdyBuZXcgRm9yYmlkZGVuKHQpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGZldGNoIHByZXZpb3VzRG9jXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgcHJldkRvY1dpdGhMb2NhbGVzID0gYXdhaXQgZ2V0TGF0ZXN0Q29sbGVjdGlvblZlcnNpb24oe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGlkOiBwYXJlbnREb2NJRCxcbiAgICAgIHF1ZXJ5OiBmaW5kT25lQXJncyxcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBVcGRhdGVcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVxLnBheWxvYWQuZGIudXBkYXRlT25lKHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIGlkOiBwYXJlbnREb2NJRCxcbiAgICAgIGRhdGE6IHJhd1ZlcnNpb24udmVyc2lvbixcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBTYXZlIGBwcmV2aW91c0RvY2AgYXMgYSB2ZXJzaW9uIGFmdGVyIHJlc3RvcmluZ1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHByZXZWZXJzaW9uID0geyAuLi5wcmV2RG9jV2l0aExvY2FsZXMgfTtcblxuICAgIGRlbGV0ZSBwcmV2VmVyc2lvbi5pZDtcblxuICAgIGF3YWl0IHBheWxvYWQuZGIuY3JlYXRlVmVyc2lvbih7XG4gICAgICBjb2xsZWN0aW9uU2x1ZzogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgcGFyZW50OiBwYXJlbnREb2NJRCxcbiAgICAgIHZlcnNpb25EYXRhOiByYXdWZXJzaW9uLnZlcnNpb24sXG4gICAgICBhdXRvc2F2ZTogZmFsc2UsXG4gICAgICBjcmVhdGVkQXQ6IHByZXZWZXJzaW9uLmNyZWF0ZWRBdCxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgcmVxLFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIEZpZWxkc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHJlc3VsdCA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgZW50aXR5Q29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgcmVxLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJSZWFkLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIHJlc3VsdCA9IGF3YWl0IGhvb2soe1xuICAgICAgICByZXEsXG4gICAgICAgIGRvYzogcmVzdWx0LFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pIHx8IHJlc3VsdDtcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJDaGFuZ2UgLSBGaWVsZHNcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSBhd2FpdCBhZnRlckNoYW5nZSh7XG4gICAgICBkYXRhOiByZXN1bHQsXG4gICAgICBkb2M6IHJlc3VsdCxcbiAgICAgIHByZXZpb3VzRG9jOiBwcmV2RG9jV2l0aExvY2FsZXMsXG4gICAgICBlbnRpdHlDb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICBvcGVyYXRpb246ICd1cGRhdGUnLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICByZXEsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJDaGFuZ2UgLSBDb2xsZWN0aW9uXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgYXdhaXQgY29sbGVjdGlvbkNvbmZpZy5ob29rcy5hZnRlckNoYW5nZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICByZXN1bHQgPSBhd2FpdCBob29rKHtcbiAgICAgICAgZG9jOiByZXN1bHQsXG4gICAgICAgIHJlcSxcbiAgICAgICAgcHJldmlvdXNEb2M6IHByZXZEb2NXaXRoTG9jYWxlcyxcbiAgICAgICAgb3BlcmF0aW9uOiAndXBkYXRlJyxcbiAgICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgICB9KSB8fCByZXN1bHQ7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgcGF5bG9hZC5kYi5jb21taXRUcmFuc2FjdGlvbihyZXEudHJhbnNhY3Rpb25JRCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3RvcmVWZXJzaW9uO1xuIl0sIm5hbWVzIjpbImh0dHBTdGF0dXMiLCJBUElFcnJvciIsIkZvcmJpZGRlbiIsIk5vdEZvdW5kIiwiZXhlY3V0ZUFjY2VzcyIsImhhc1doZXJlQWNjZXNzUmVzdWx0IiwiYWZ0ZXJDaGFuZ2UiLCJhZnRlclJlYWQiLCJnZXRMYXRlc3RDb2xsZWN0aW9uVmVyc2lvbiIsImNvbWJpbmVRdWVyaWVzIiwiaW5pdFRyYW5zYWN0aW9uIiwia2lsbFRyYW5zYWN0aW9uIiwicmVzdG9yZVZlcnNpb24iLCJhcmdzIiwiY29sbGVjdGlvbkNvbmZpZyIsImlkIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwiZGVwdGgiLCJ0IiwicGF5bG9hZCIsImxvY2FsZSIsInJlcSIsInNob3VsZENvbW1pdCIsInZlcnNpb25Eb2NzIiwicmF3VmVyc2lvbiIsInBhcmVudERvY0lEIiwiYWNjZXNzUmVzdWx0cyIsImhhc1doZXJlUG9saWN5IiwiZmluZE9uZUFyZ3MiLCJkb2MiLCJwcmV2RG9jV2l0aExvY2FsZXMiLCJyZXN1bHQiLCJwcmV2VmVyc2lvbiIsImVycm9yIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsIkJBRF9SRVFVRVNUIiwiZGIiLCJmaW5kVmVyc2lvbnMiLCJzbHVnIiwid2hlcmUiLCJlcXVhbHMiLCJsaW1pdCIsImRvY3MiLCJwYXJlbnQiLCJhY2Nlc3MiLCJ1cGRhdGUiLCJmaW5kT25lIiwicXVlcnkiLCJ1cGRhdGVPbmUiLCJkYXRhIiwidmVyc2lvbiIsImNyZWF0ZVZlcnNpb24iLCJjb2xsZWN0aW9uU2x1ZyIsInZlcnNpb25EYXRhIiwiYXV0b3NhdmUiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJlbnRpdHlDb25maWciLCJjb250ZXh0IiwiaG9va3MiLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJob29rIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwcmV2aW91c0RvYyIsIm9wZXJhdGlvbiIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCJdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdkMsT0FBT0EsZ0JBQWdCLGNBQWM7QUFHckMsU0FBU0MsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsUUFBUSxlQUFlO0FBQzdELE9BQU9DLG1CQUFtQiwyQkFBMkI7QUFDckQsU0FBU0Msb0JBQW9CLFFBQVEsbUJBQW1CO0FBQ3hELFNBQVNDLFdBQVcsUUFBUSxpQ0FBaUM7QUFDN0QsU0FBU0MsU0FBUyxRQUFRLCtCQUErQjtBQUN6RCxTQUFTQywwQkFBMEIsUUFBUSw0Q0FBNEM7QUFDdkYsU0FBU0MsY0FBYyxRQUFRLGdDQUFnQztBQUUvRCxTQUFTQyxlQUFlLFFBQVEsa0NBQWtDO0FBQ2xFLFNBQVNDLGVBQWUsUUFBUSxrQ0FBa0M7U0FhbkRDLGVBQTJDQyxJQUFlO1dBQTFERDs7U0FBQUE7SUFBQUEsa0JBQWYsb0JBQUEsU0FBMERDLElBQWU7OEJBRzNEQyxrQkFFVkMsMEJBQ0FDLGdCQUNBQyxrQkFDQUMsa0JBRUVDLEdBQ0FDLFNBQ0FDLFFBRUZDLEtBSU1DLGNBVXdCLE1BQWhCQyxhQVFPQSxjQUFkQyxZQU1EQyxhQU1BQyxxQkFDQUMsZ0JBTUFDLGFBT0FDLEtBVUFDLG9CQVlGQyxRQVdFQyxhQTJFQ0M7Ozs7dUNBM0pMckIsS0FiRnNCLFlBQ1VyQixvQ0FBUnNCLFFBRUZyQixLQVVFRixLQVZGRSwyQkFVRUYsS0FURkcsZ0JBQUFBLG1EQUFpQiw4QkFDakJDLG1CQVFFSixLQVJGSSxrQkFDQUMsUUFPRUwsS0FQRkssbUJBT0VMLEtBTkZTLEtBQ0VILGNBQUFBLEdBQ0FDLG9CQUFBQSxTQUNBQyxtQkFBQUEsUUFFRkMsTUFDRVQsS0FERlM7Ozs7Ozs7OztvQkFJcUI7O3dCQUFNWixnQkFBZ0JZOzs7b0JBQXJDQyxlQUFlO29CQUVyQixJQUFJLENBQUNSLElBQUk7d0JBQ1AsTUFBTSxJQUFJZCxTQUFTLHFDQUFxQ0QsV0FBV3FDLFdBQVc7b0JBQ2hGO29CQU04Qjs7d0JBQU1mLElBQUlGLE9BQU8sQ0FBQ2tCLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDOzRCQUM5REosWUFBWXJCLGlCQUFpQjBCLElBQUk7NEJBQ2pDQyxPQUFPO2dDQUFFMUIsSUFBSTtvQ0FBRTJCLFFBQVEzQjtnQ0FBRzs0QkFBRTs0QkFDNUJNLFFBQUFBOzRCQUNBc0IsT0FBTzs0QkFDUHJCLEtBQUFBO3dCQUNGOzs7b0JBTjhCLE9BQUEsZUFBaEJFLGNBQWdCLEtBQXRCb0I7b0JBUWFwQixnQ0FBQUEsaUJBQWRDLGFBQWNEO29CQUVyQixJQUFJLENBQUNDLFlBQVk7d0JBQ2YsTUFBTSxJQUFJdEIsU0FBU2dCO29CQUNyQjtvQkFFTU8sY0FBY0QsV0FBV29CLE1BQU07eUJBTWYsQ0FBQzdCLGdCQUFEOzs7O29CQUFrQjs7d0JBQU1aLGNBQWM7NEJBQUVrQixLQUFBQTs0QkFBS1AsSUFBSVc7d0JBQVksR0FBR1osaUJBQWlCZ0MsTUFBTSxDQUFDQyxNQUFNOzs7MkJBQTVFOzs7Ozs7MkJBQWdGOzs7b0JBQWxIcEI7b0JBQ0FDLGlCQUFpQnZCLHFCQUFxQnNCO29CQU10Q0UsY0FBMkI7d0JBQy9CTSxZQUFZckIsaUJBQWlCMEIsSUFBSTt3QkFDakNDLE9BQU9oQyxlQUFlOzRCQUFFTSxJQUFJO2dDQUFFMkIsUUFBUWhCOzRCQUFZO3dCQUFFLEdBQUdDO3dCQUN2RE4sUUFBQUE7d0JBQ0FDLEtBQUFBO29CQUNGO29CQUVZOzt3QkFBTUEsSUFBSUYsT0FBTyxDQUFDa0IsRUFBRSxDQUFDVSxPQUFPLENBQUNuQjs7O29CQUFuQ0MsTUFBTTtvQkFHWixJQUFJLENBQUNBLE9BQU8sQ0FBQ0YsZ0JBQWdCLE1BQU0sSUFBSXpCLFNBQVNnQjtvQkFDaEQsSUFBSSxDQUFDVyxPQUFPRixnQkFBZ0IsTUFBTSxJQUFJMUIsVUFBVWlCO29CQU1yQjs7d0JBQU1YLDJCQUEyQjs0QkFDMURZLFNBQUFBOzRCQUNBTCxJQUFJVzs0QkFDSnVCLE9BQU9wQjs0QkFDUE8sUUFBUXRCOzRCQUNSUSxLQUFBQTt3QkFDRjs7O29CQU5NUyxxQkFBcUI7b0JBWWQ7O3dCQUFNVCxJQUFJRixPQUFPLENBQUNrQixFQUFFLENBQUNZLFNBQVMsQ0FBQzs0QkFDMUNmLFlBQVlyQixpQkFBaUIwQixJQUFJOzRCQUNqQ3pCLElBQUlXOzRCQUNKeUIsTUFBTTFCLFdBQVcyQixPQUFPOzRCQUN4QjlCLEtBQUFBO3dCQUNGOzs7b0JBTElVLFNBQVM7b0JBV1BDLGNBQWMsbUJBQUtGO29CQUV6QixPQUFPRSxZQUFZbEIsRUFBRTtvQkFFckI7O3dCQUFNSyxRQUFRa0IsRUFBRSxDQUFDZSxhQUFhLENBQUM7NEJBQzdCQyxnQkFBZ0J4QyxpQkFBaUIwQixJQUFJOzRCQUNyQ0ssUUFBUW5COzRCQUNSNkIsYUFBYTlCLFdBQVcyQixPQUFPOzRCQUMvQkksVUFBVTs0QkFDVkMsV0FBV3hCLFlBQVl3QixTQUFTOzRCQUNoQ0MsV0FBVyxJQUFJQyxPQUFPQyxXQUFXOzRCQUNqQ3RDLEtBQUFBO3dCQUNGOzs7b0JBUkE7b0JBY1M7O3dCQUFNZixVQUFVOzRCQUN2QlcsT0FBQUE7NEJBQ0FZLEtBQUtFOzRCQUNMNkIsY0FBYy9DOzRCQUNkUSxLQUFBQTs0QkFDQU4sZ0JBQUFBOzRCQUNBQyxrQkFBQUE7NEJBQ0E2QyxTQUFTeEMsSUFBSXdDLE9BQU87d0JBQ3RCOzs7b0JBWkEsd0NBQXdDO29CQUN4QyxxQkFBcUI7b0JBQ3JCLHdDQUF3QztvQkFFeEM5QixTQUFTO29CQVVULHdDQUF3QztvQkFDeEMseUJBQXlCO29CQUN6Qix3Q0FBd0M7b0JBRXhDOzt3QkFBTWxCLGlCQUFpQmlELEtBQUssQ0FBQ3hELFNBQVMsQ0FBQ3lELE1BQU07dUNBQUMsb0JBQUEsU0FBT0MsV0FBV0M7Ozs7NENBQzlEOztnREFBTUQ7Ozs0Q0FBTjs0Q0FFUzs7Z0RBQU1DLEtBQUs7b0RBQ2xCNUMsS0FBQUE7b0RBQ0FRLEtBQUtFO29EQUNMOEIsU0FBU3hDLElBQUl3QyxPQUFPO2dEQUN0Qjs7OzRDQUpBOUIsU0FBUyxpQkFJSEE7Ozs7Ozs0QkFDUjs0Q0FScURpQyxXQUFXQzs7OzZCQVE3REMsUUFBUUMsT0FBTzs7O29CQVJsQjtvQkFjUzs7d0JBQU05RCxZQUFZOzRCQUN6QjZDLE1BQU1uQjs0QkFDTkYsS0FBS0U7NEJBQ0xxQyxhQUFhdEM7NEJBQ2I4QixjQUFjL0M7NEJBQ2R3RCxXQUFXOzRCQUNYUixTQUFTeEMsSUFBSXdDLE9BQU87NEJBQ3BCeEMsS0FBQUE7d0JBQ0Y7OztvQkFaQSx3Q0FBd0M7b0JBQ3hDLHVCQUF1QjtvQkFDdkIsd0NBQXdDO29CQUV4Q1UsU0FBUztvQkFVVCx3Q0FBd0M7b0JBQ3hDLDJCQUEyQjtvQkFDM0Isd0NBQXdDO29CQUV4Qzs7d0JBQU1sQixpQkFBaUJpRCxLQUFLLENBQUN6RCxXQUFXLENBQUMwRCxNQUFNO3VDQUFDLG9CQUFBLFNBQU9DLFdBQVdDOzs7OzRDQUNoRTs7Z0RBQU1EOzs7NENBQU47NENBRVM7O2dEQUFNQyxLQUFLO29EQUNsQnBDLEtBQUtFO29EQUNMVixLQUFBQTtvREFDQStDLGFBQWF0QztvREFDYnVDLFdBQVc7b0RBQ1hSLFNBQVN4QyxJQUFJd0MsT0FBTztnREFDdEI7Ozs0Q0FOQTlCLFNBQVMsaUJBTUhBOzs7Ozs7NEJBQ1I7NENBVnVEaUMsV0FBV0M7Ozs2QkFVL0RDLFFBQVFDLE9BQU87OztvQkFWbEI7eUJBWUk3QyxjQUFBQTs7OztvQkFBYzs7d0JBQU1ILFFBQVFrQixFQUFFLENBQUNpQyxpQkFBaUIsQ0FBQ2pELElBQUlrRCxhQUFhOzs7b0JBQXBEOzs7b0JBRWxCOzt3QkFBT3hDOzs7b0JBQ0FFO29CQUNQOzt3QkFBTXZCLGdCQUFnQlc7OztvQkFBdEI7b0JBQ0EsTUFBTVk7Ozs7Ozs7SUFFVjtXQTlLZXRCOztBQWdMZixlQUFlQSxlQUFlIn0=