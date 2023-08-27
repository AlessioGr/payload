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
import executeAccess from "../../auth/executeAccess";
import replaceWithDraftIfAvailable from "../../versions/drafts/replaceWithDraftIfAvailable";
import { afterRead } from "../../fields/hooks/afterRead";
import { initTransaction } from "../../utilities/initTransaction";
import { killTransaction } from "../../utilities/killTransaction";
function findOne(args) {
    return _findOne.apply(this, arguments);
}
function _findOne() {
    _findOne = _async_to_generator(function(args) {
        var globalConfig, req, _args_req, payload, locale, slug, depth, showHiddenFields, tmp, draftEnabled, _args_overrideAccess, overrideAccess, _globalConfig_versions, shouldCommit, accessResult, doc, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    globalConfig = args.globalConfig, req = args.req, _args_req = args.req, payload = _args_req.payload, locale = _args_req.locale, slug = args.slug, depth = args.depth, showHiddenFields = args.showHiddenFields, tmp = args.draft, draftEnabled = tmp === void 0 ? false : tmp, _args_overrideAccess = args.overrideAccess, overrideAccess = _args_overrideAccess === void 0 ? false : _args_overrideAccess;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        13,
                        ,
                        15
                    ]);
                    return [
                        4,
                        initTransaction(req)
                    ];
                case 2:
                    shouldCommit = _state.sent();
                    if (!!overrideAccess) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        executeAccess({
                            req: req
                        }, globalConfig.access.read)
                    ];
                case 3:
                    accessResult = _state.sent();
                    _state.label = 4;
                case 4:
                    return [
                        4,
                        req.payload.db.findGlobal({
                            slug: slug,
                            locale: locale,
                            where: overrideAccess ? undefined : accessResult,
                            req: req
                        })
                    ];
                case 5:
                    doc = _state.sent();
                    if (!doc) {
                        doc = {};
                    }
                    if (!(((_globalConfig_versions = globalConfig.versions) === null || _globalConfig_versions === void 0 ? void 0 : _globalConfig_versions.drafts) && draftEnabled)) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        replaceWithDraftIfAvailable({
                            entity: globalConfig,
                            entityType: "global",
                            doc: doc,
                            req: req,
                            overrideAccess: overrideAccess,
                            accessResult: accessResult
                        })
                    ];
                case 6:
                    doc = _state.sent();
                    _state.label = 7;
                case 7:
                    // /////////////////////////////////////
                    // Execute before global hook
                    // /////////////////////////////////////
                    return [
                        4,
                        globalConfig.hooks.beforeRead.reduce(function() {
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
                                                    doc: doc
                                                })
                                            ];
                                        case 2:
                                            doc = _state.sent() || doc;
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
                        afterRead({
                            depth: depth,
                            doc: doc,
                            entityConfig: globalConfig,
                            req: req,
                            overrideAccess: overrideAccess,
                            showHiddenFields: showHiddenFields,
                            context: req.context
                        })
                    ];
                case 9:
                    // /////////////////////////////////////
                    // Execute field-level hooks and access
                    // /////////////////////////////////////
                    doc = _state.sent();
                    // /////////////////////////////////////
                    // Execute after global hook
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
                                                    req: req,
                                                    doc: doc
                                                })
                                            ];
                                        case 2:
                                            doc = _state.sent() || doc;
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
                    // /////////////////////////////////////
                    // Return results
                    // /////////////////////////////////////
                    return [
                        2,
                        doc
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
    return _findOne.apply(this, arguments);
}
export default findOne;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvZmluZE9uZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGV4ZWN1dGVBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9leGVjdXRlQWNjZXNzJztcbmltcG9ydCB7IEFjY2Vzc1Jlc3VsdCB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgcmVwbGFjZVdpdGhEcmFmdElmQXZhaWxhYmxlIGZyb20gJy4uLy4uL3ZlcnNpb25zL2RyYWZ0cy9yZXBsYWNlV2l0aERyYWZ0SWZBdmFpbGFibGUnO1xuaW1wb3J0IHsgYWZ0ZXJSZWFkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2hvb2tzL2FmdGVyUmVhZCc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5cbnR5cGUgQXJncyA9IHtcbiAgZ2xvYmFsQ29uZmlnOiBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgc2x1Zzogc3RyaW5nXG4gIGRlcHRoPzogbnVtYmVyXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIGRyYWZ0PzogYm9vbGVhblxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmluZE9uZTxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+KGFyZ3M6IEFyZ3MpOiBQcm9taXNlPFQ+IHtcbiAgY29uc3Qge1xuICAgIGdsb2JhbENvbmZpZyxcbiAgICByZXEsXG4gICAgcmVxOiB7XG4gICAgICBwYXlsb2FkLFxuICAgICAgbG9jYWxlLFxuICAgIH0sXG4gICAgc2x1ZyxcbiAgICBkZXB0aCxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIGRyYWZ0OiBkcmFmdEVuYWJsZWQgPSBmYWxzZSxcbiAgICBvdmVycmlkZUFjY2VzcyA9IGZhbHNlLFxuICB9ID0gYXJncztcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHJpZXZlIGFuZCBleGVjdXRlIGFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGxldCBhY2Nlc3NSZXN1bHQ6IEFjY2Vzc1Jlc3VsdDtcblxuICAgIGlmICghb3ZlcnJpZGVBY2Nlc3MpIHtcbiAgICAgIGFjY2Vzc1Jlc3VsdCA9IGF3YWl0IGV4ZWN1dGVBY2Nlc3MoeyByZXEgfSwgZ2xvYmFsQ29uZmlnLmFjY2Vzcy5yZWFkKTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUGVyZm9ybSBkYXRhYmFzZSBvcGVyYXRpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBsZXQgZG9jID0gYXdhaXQgcmVxLnBheWxvYWQuZGIuZmluZEdsb2JhbCh7XG4gICAgICBzbHVnLFxuICAgICAgbG9jYWxlLFxuICAgICAgd2hlcmU6IG92ZXJyaWRlQWNjZXNzID8gdW5kZWZpbmVkIDogYWNjZXNzUmVzdWx0IGFzIFdoZXJlLFxuICAgICAgcmVxLFxuICAgIH0pO1xuICAgIGlmICghZG9jKSB7XG4gICAgICBkb2MgPSB7fTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmVwbGFjZSBkb2N1bWVudCB3aXRoIGRyYWZ0IGlmIGF2YWlsYWJsZVxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmIChnbG9iYWxDb25maWcudmVyc2lvbnM/LmRyYWZ0cyAmJiBkcmFmdEVuYWJsZWQpIHtcbiAgICAgIGRvYyA9IGF3YWl0IHJlcGxhY2VXaXRoRHJhZnRJZkF2YWlsYWJsZSh7XG4gICAgICAgIGVudGl0eTogZ2xvYmFsQ29uZmlnLFxuICAgICAgICBlbnRpdHlUeXBlOiAnZ2xvYmFsJyxcbiAgICAgICAgZG9jLFxuICAgICAgICByZXEsXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICBhY2Nlc3NSZXN1bHQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRXhlY3V0ZSBiZWZvcmUgZ2xvYmFsIGhvb2tcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBnbG9iYWxDb25maWcuaG9va3MuYmVmb3JlUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICBkb2MgPSBhd2FpdCBob29rKHtcbiAgICAgICAgcmVxLFxuICAgICAgICBkb2MsXG4gICAgICB9KSB8fCBkb2M7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEV4ZWN1dGUgZmllbGQtbGV2ZWwgaG9va3MgYW5kIGFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGRvYyA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBkZXB0aCxcbiAgICAgIGRvYyxcbiAgICAgIGVudGl0eUNvbmZpZzogZ2xvYmFsQ29uZmlnLFxuICAgICAgcmVxLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgY29udGV4dDogcmVxLmNvbnRleHQsXG4gICAgfSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gRXhlY3V0ZSBhZnRlciBnbG9iYWwgaG9va1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGdsb2JhbENvbmZpZy5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgZG9jID0gYXdhaXQgaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgZG9jLFxuICAgICAgfSkgfHwgZG9jO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXR1cm4gcmVzdWx0c1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IHBheWxvYWQuZGIuY29tbWl0VHJhbnNhY3Rpb24ocmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFJldHVybiByZXN1bHRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcmV0dXJuIGRvYztcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kT25lO1xuIl0sIm5hbWVzIjpbImV4ZWN1dGVBY2Nlc3MiLCJyZXBsYWNlV2l0aERyYWZ0SWZBdmFpbGFibGUiLCJhZnRlclJlYWQiLCJpbml0VHJhbnNhY3Rpb24iLCJraWxsVHJhbnNhY3Rpb24iLCJmaW5kT25lIiwiYXJncyIsImdsb2JhbENvbmZpZyIsInJlcSIsInBheWxvYWQiLCJsb2NhbGUiLCJzbHVnIiwiZGVwdGgiLCJzaG93SGlkZGVuRmllbGRzIiwiZHJhZnRFbmFibGVkIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG91bGRDb21taXQiLCJhY2Nlc3NSZXN1bHQiLCJkb2MiLCJlcnJvciIsImRyYWZ0IiwiYWNjZXNzIiwicmVhZCIsImRiIiwiZmluZEdsb2JhbCIsIndoZXJlIiwidW5kZWZpbmVkIiwidmVyc2lvbnMiLCJkcmFmdHMiLCJlbnRpdHkiLCJlbnRpdHlUeXBlIiwiaG9va3MiLCJiZWZvcmVSZWFkIiwicmVkdWNlIiwicHJpb3JIb29rIiwiaG9vayIsIlByb21pc2UiLCJyZXNvbHZlIiwiZW50aXR5Q29uZmlnIiwiY29udGV4dCIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLG1CQUFtQiwyQkFBMkI7QUFFckQsT0FBT0MsaUNBQWlDLG9EQUFvRDtBQUM1RixTQUFTQyxTQUFTLFFBQVEsK0JBQStCO0FBR3pELFNBQVNDLGVBQWUsUUFBUSxrQ0FBa0M7QUFDbEUsU0FBU0MsZUFBZSxRQUFRLGtDQUFrQztTQWFuREMsUUFBMkNDLElBQVU7V0FBckRE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