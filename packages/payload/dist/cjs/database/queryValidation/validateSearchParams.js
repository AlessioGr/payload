"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateSearchParam", {
    enumerable: true,
    get: function() {
        return validateSearchParam;
    }
});
var _types = require("../../fields/config/types");
var _getEntityPolicies = require("../../utilities/getEntityPolicies");
var _validateQueryPaths = require("./validateQueryPaths");
var _getLocalizedPaths = require("../getLocalizedPaths");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
function validateSearchParam(_) {
    return _validateSearchParam.apply(this, arguments);
}
function _validateSearchParam() {
    _validateSearchParam = _async_to_generator(function(param) {
        var fields, incomingPath, versionFields, val, operator, collectionConfig, globalConfig, errors, req, policies, overrideAccess, _promises, sanitizedPath, paths, slug, _, _collectionConfig, _globalConfig, promises;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fields = param.fields, incomingPath = param.path, versionFields = param.versionFields, val = param.val, operator = param.operator, collectionConfig = param.collectionConfig, globalConfig = param.globalConfig, errors = param.errors, req = param.req, policies = param.policies, overrideAccess = param.overrideAccess;
                    if (incomingPath === "_id") {
                        sanitizedPath = "id";
                    } else {
                        sanitizedPath = incomingPath.replace(/__/gi, ".");
                    }
                    paths = [];
                    slug = (collectionConfig || globalConfig).slug;
                    if (!(globalConfig && !policies.globals[slug])) return [
                        3,
                        2
                    ];
                    // eslint-disable-next-line no-param-reassign
                    globalConfig.fields = fields;
                    _ = // eslint-disable-next-line no-param-reassign
                    policies.globals;
                    return [
                        4,
                        (0, _getEntityPolicies.getEntityPolicies)({
                            req: req,
                            entity: globalConfig,
                            operations: [
                                "read"
                            ],
                            type: "global"
                        })
                    ];
                case 1:
                    _[slug] = _state.sent();
                    _state.label = 2;
                case 2:
                    if (!(sanitizedPath !== "id")) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        (0, _getLocalizedPaths.getLocalizedPaths)({
                            payload: req.payload,
                            locale: req.locale,
                            collectionSlug: (_collectionConfig = collectionConfig) === null || _collectionConfig === void 0 ? void 0 : _collectionConfig.slug,
                            globalSlug: (_globalConfig = globalConfig) === null || _globalConfig === void 0 ? void 0 : _globalConfig.slug,
                            fields: fields,
                            incomingPath: sanitizedPath,
                            overrideAccess: overrideAccess
                        })
                    ];
                case 3:
                    paths = _state.sent();
                    _state.label = 4;
                case 4:
                    promises = [];
                    (_promises = promises).push.apply(_promises, _to_consumable_array(paths.map(function() {
                        var _ref = _async_to_generator(function(param, i) {
                            var path, field, invalid, collectionSlug, _collectionConfig_auth, _, fieldAccess, fieldPath, entityType, entitySlug, segments, pathsToQuery;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        path = param.path, field = param.field, invalid = param.invalid, collectionSlug = param.collectionSlug;
                                        if (invalid) {
                                            errors.push({
                                                path: path
                                            });
                                            return [
                                                2
                                            ];
                                        }
                                        if (!(!overrideAccess && (0, _types.fieldAffectsData)(field))) return [
                                            3,
                                            4
                                        ];
                                        if (!collectionSlug) return [
                                            3,
                                            3
                                        ];
                                        if (!!policies.collections[collectionSlug]) return [
                                            3,
                                            2
                                        ];
                                        _ = // eslint-disable-next-line no-param-reassign
                                        policies.collections;
                                        return [
                                            4,
                                            (0, _getEntityPolicies.getEntityPolicies)({
                                                req: req,
                                                entity: req.payload.collections[collectionSlug].config,
                                                operations: [
                                                    "read"
                                                ],
                                                type: "collection"
                                            })
                                        ];
                                    case 1:
                                        _[collectionSlug] = _state.sent();
                                        _state.label = 2;
                                    case 2:
                                        if ([
                                            "salt",
                                            "hash"
                                        ].includes(incomingPath) && collectionConfig.auth && !((_collectionConfig_auth = collectionConfig.auth) === null || _collectionConfig_auth === void 0 ? void 0 : _collectionConfig_auth.disableLocalStrategy)) {
                                            errors.push({
                                                path: incomingPath
                                            });
                                        }
                                        _state.label = 3;
                                    case 3:
                                        fieldPath = path;
                                        // remove locale from end of path
                                        if (path.endsWith(req.locale)) {
                                            fieldPath = path.slice(0, -(req.locale.length + 1));
                                        }
                                        // remove ".value" from ends of polymorphic relationship paths
                                        if (field.type === "relationship" && Array.isArray(field.relationTo)) {
                                            fieldPath = fieldPath.replace(".value", "");
                                        }
                                        entityType = globalConfig ? "globals" : "collections";
                                        entitySlug = collectionSlug || globalConfig.slug;
                                        segments = fieldPath.split(".");
                                        if (versionFields) {
                                            if (fieldPath === "parent" || fieldPath === "version") {
                                                fieldAccess = policies[entityType][entitySlug].read.permission;
                                            } else if (segments[0] === "parent" || segments[0] === "version") {
                                                fieldAccess = policies[entityType][entitySlug].read.permission;
                                                segments.shift();
                                            }
                                        } else {
                                            fieldAccess = policies[entityType][entitySlug].fields;
                                            segments.forEach(function(segment, pathIndex) {
                                                if (pathIndex === segments.length - 1) {
                                                    fieldAccess = fieldAccess[segment];
                                                } else {
                                                    fieldAccess = fieldAccess[segment].fields;
                                                }
                                            });
                                            fieldAccess = fieldAccess.read.permission;
                                        }
                                        if (!fieldAccess) {
                                            errors.push({
                                                path: fieldPath
                                            });
                                        }
                                        _state.label = 4;
                                    case 4:
                                        if (i > 1) {
                                            pathsToQuery = paths.slice(1).reverse();
                                            pathsToQuery.forEach(function(param, pathToQueryIndex) {
                                                var subPath = param.path, pathCollectionSlug = param.collectionSlug;
                                                // On the "deepest" collection,
                                                // validate query of the relationship
                                                if (pathToQueryIndex === 0) {
                                                    promises.push((0, _validateQueryPaths.validateQueryPaths)({
                                                        collectionConfig: req.payload.collections[pathCollectionSlug].config,
                                                        globalConfig: undefined,
                                                        where: _define_property({}, subPath, _define_property({}, operator, val)),
                                                        errors: errors,
                                                        policies: policies,
                                                        req: req,
                                                        overrideAccess: overrideAccess
                                                    }));
                                                }
                                            });
                                        }
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(_, i) {
                            return _ref.apply(this, arguments);
                        };
                    }())));
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 5:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _validateSearchParam.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9xdWVyeVZhbGlkYXRpb24vdmFsaWRhdGVTZWFyY2hQYXJhbXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBnZXRFbnRpdHlQb2xpY2llcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9nZXRFbnRpdHlQb2xpY2llcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHZhbGlkYXRlUXVlcnlQYXRocyB9IGZyb20gJy4vdmFsaWRhdGVRdWVyeVBhdGhzJztcbmltcG9ydCB7IEVudGl0eVBvbGljaWVzLCBQYXRoVG9RdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TG9jYWxpemVkUGF0aHMgfSBmcm9tICcuLi9nZXRMb2NhbGl6ZWRQYXRocyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgZmllbGRzOiBGaWVsZFtdXG4gIHBhdGg6IHN0cmluZ1xuICB2YWw6IHVua25vd25cbiAgb3BlcmF0b3I6IHN0cmluZ1xuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIGVycm9yczogeyBwYXRoOiBzdHJpbmcgfVtdXG4gIHBvbGljaWVzOiBFbnRpdHlQb2xpY2llc1xuICBjb2xsZWN0aW9uQ29uZmlnPzogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBnbG9iYWxDb25maWc/OiBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgdmVyc2lvbkZpZWxkcz86IEZpZWxkW11cbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgUGF5bG9hZCBrZXkgLyB2YWx1ZSAvIG9wZXJhdG9yXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVNlYXJjaFBhcmFtKHtcbiAgZmllbGRzLFxuICBwYXRoOiBpbmNvbWluZ1BhdGgsXG4gIHZlcnNpb25GaWVsZHMsXG4gIHZhbCxcbiAgb3BlcmF0b3IsXG4gIGNvbGxlY3Rpb25Db25maWcsXG4gIGdsb2JhbENvbmZpZyxcbiAgZXJyb3JzLFxuICByZXEsXG4gIHBvbGljaWVzLFxuICBvdmVycmlkZUFjY2Vzcyxcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gUmVwbGFjZSBHcmFwaFFMIG5lc3RlZCBmaWVsZCBkb3VibGUgdW5kZXJzY29yZSBmb3JtYXR0aW5nXG4gIGxldCBzYW5pdGl6ZWRQYXRoO1xuICBpZiAoaW5jb21pbmdQYXRoID09PSAnX2lkJykge1xuICAgIHNhbml0aXplZFBhdGggPSAnaWQnO1xuICB9IGVsc2Uge1xuICAgIHNhbml0aXplZFBhdGggPSBpbmNvbWluZ1BhdGgucmVwbGFjZSgvX18vZ2ksICcuJyk7XG4gIH1cbiAgbGV0IHBhdGhzOiBQYXRoVG9RdWVyeVtdID0gW107XG4gIGNvbnN0IHsgc2x1ZyB9ID0gKGNvbGxlY3Rpb25Db25maWcgfHwgZ2xvYmFsQ29uZmlnKTtcblxuICBpZiAoZ2xvYmFsQ29uZmlnICYmICFwb2xpY2llcy5nbG9iYWxzW3NsdWddKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZ2xvYmFsQ29uZmlnLmZpZWxkcyA9IGZpZWxkcztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHBvbGljaWVzLmdsb2JhbHNbc2x1Z10gPSBhd2FpdCBnZXRFbnRpdHlQb2xpY2llcyh7XG4gICAgICByZXEsXG4gICAgICBlbnRpdHk6IGdsb2JhbENvbmZpZyxcbiAgICAgIG9wZXJhdGlvbnM6IFsncmVhZCddLFxuICAgICAgdHlwZTogJ2dsb2JhbCcsXG4gICAgfSk7XG4gIH1cblxuICBpZiAoc2FuaXRpemVkUGF0aCAhPT0gJ2lkJykge1xuICAgIHBhdGhzID0gYXdhaXQgZ2V0TG9jYWxpemVkUGF0aHMoe1xuICAgICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gICAgICBsb2NhbGU6IHJlcS5sb2NhbGUsXG4gICAgICBjb2xsZWN0aW9uU2x1ZzogY29sbGVjdGlvbkNvbmZpZz8uc2x1ZyxcbiAgICAgIGdsb2JhbFNsdWc6IGdsb2JhbENvbmZpZz8uc2x1ZyxcbiAgICAgIGZpZWxkcyxcbiAgICAgIGluY29taW5nUGF0aDogc2FuaXRpemVkUGF0aCxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHByb21pc2VzID0gW107XG4gIHByb21pc2VzLnB1c2goLi4ucGF0aHMubWFwKGFzeW5jICh7IHBhdGgsIGZpZWxkLCBpbnZhbGlkLCBjb2xsZWN0aW9uU2x1ZyB9LCBpKSA9PiB7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHsgcGF0aCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW92ZXJyaWRlQWNjZXNzICYmIGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgICBpZiAoY29sbGVjdGlvblNsdWcpIHtcbiAgICAgICAgaWYgKCFwb2xpY2llcy5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z10pIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBwb2xpY2llcy5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z10gPSBhd2FpdCBnZXRFbnRpdHlQb2xpY2llcyh7XG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBlbnRpdHk6IHJlcS5wYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25TbHVnXS5jb25maWcsXG4gICAgICAgICAgICBvcGVyYXRpb25zOiBbJ3JlYWQnXSxcbiAgICAgICAgICAgIHR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChbJ3NhbHQnLCAnaGFzaCddLmluY2x1ZGVzKGluY29taW5nUGF0aCkgJiYgY29sbGVjdGlvbkNvbmZpZy5hdXRoICYmICFjb2xsZWN0aW9uQ29uZmlnLmF1dGg/LmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goeyBwYXRoOiBpbmNvbWluZ1BhdGggfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBmaWVsZEFjY2VzcztcbiAgICAgIGxldCBmaWVsZFBhdGggPSBwYXRoO1xuICAgICAgLy8gcmVtb3ZlIGxvY2FsZSBmcm9tIGVuZCBvZiBwYXRoXG4gICAgICBpZiAocGF0aC5lbmRzV2l0aChyZXEubG9jYWxlKSkge1xuICAgICAgICBmaWVsZFBhdGggPSBwYXRoLnNsaWNlKDAsIC0ocmVxLmxvY2FsZS5sZW5ndGggKyAxKSk7XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgXCIudmFsdWVcIiBmcm9tIGVuZHMgb2YgcG9seW1vcnBoaWMgcmVsYXRpb25zaGlwIHBhdGhzXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgJiYgQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSkge1xuICAgICAgICBmaWVsZFBhdGggPSBmaWVsZFBhdGgucmVwbGFjZSgnLnZhbHVlJywgJycpO1xuICAgICAgfVxuICAgICAgY29uc3QgZW50aXR5VHlwZTogJ2NvbGxlY3Rpb25zJyB8ICdnbG9iYWxzJyA9IGdsb2JhbENvbmZpZyA/ICdnbG9iYWxzJyA6ICdjb2xsZWN0aW9ucyc7XG4gICAgICBjb25zdCBlbnRpdHlTbHVnID0gY29sbGVjdGlvblNsdWcgfHwgZ2xvYmFsQ29uZmlnLnNsdWc7XG4gICAgICBjb25zdCBzZWdtZW50cyA9IGZpZWxkUGF0aC5zcGxpdCgnLicpO1xuXG4gICAgICBpZiAodmVyc2lvbkZpZWxkcykge1xuICAgICAgICBpZiAoZmllbGRQYXRoID09PSAncGFyZW50JyB8fCBmaWVsZFBhdGggPT09ICd2ZXJzaW9uJykge1xuICAgICAgICAgIGZpZWxkQWNjZXNzID0gcG9saWNpZXNbZW50aXR5VHlwZV1bZW50aXR5U2x1Z10ucmVhZC5wZXJtaXNzaW9uO1xuICAgICAgICB9IGVsc2UgaWYgKHNlZ21lbnRzWzBdID09PSAncGFyZW50JyB8fCBzZWdtZW50c1swXSA9PT0gJ3ZlcnNpb24nKSB7XG4gICAgICAgICAgZmllbGRBY2Nlc3MgPSBwb2xpY2llc1tlbnRpdHlUeXBlXVtlbnRpdHlTbHVnXS5yZWFkLnBlcm1pc3Npb247XG4gICAgICAgICAgc2VnbWVudHMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRBY2Nlc3MgPSBwb2xpY2llc1tlbnRpdHlUeXBlXVtlbnRpdHlTbHVnXS5maWVsZHM7XG4gICAgICAgIHNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQsIHBhdGhJbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChwYXRoSW5kZXggPT09IHNlZ21lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGZpZWxkQWNjZXNzID0gZmllbGRBY2Nlc3Nbc2VnbWVudF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkQWNjZXNzID0gZmllbGRBY2Nlc3Nbc2VnbWVudF0uZmllbGRzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZpZWxkQWNjZXNzID0gZmllbGRBY2Nlc3MucmVhZC5wZXJtaXNzaW9uO1xuICAgICAgfVxuICAgICAgaWYgKCFmaWVsZEFjY2Vzcykge1xuICAgICAgICBlcnJvcnMucHVzaCh7IHBhdGg6IGZpZWxkUGF0aCB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA+IDEpIHtcbiAgICAgIC8vIFJlbW92ZSB0b3AgY29sbGVjdGlvbiBhbmQgcmV2ZXJzZSBhcnJheVxuICAgICAgLy8gdG8gd29yayBiYWNrd2FyZHMgZnJvbSB0b3BcbiAgICAgIGNvbnN0IHBhdGhzVG9RdWVyeSA9IHBhdGhzLnNsaWNlKDEpXG4gICAgICAgIC5yZXZlcnNlKCk7XG5cbiAgICAgIHBhdGhzVG9RdWVyeS5mb3JFYWNoKCh7XG4gICAgICAgIHBhdGg6IHN1YlBhdGgsXG4gICAgICAgIGNvbGxlY3Rpb25TbHVnOiBwYXRoQ29sbGVjdGlvblNsdWcsXG4gICAgICB9LCBwYXRoVG9RdWVyeUluZGV4KSA9PiB7XG4gICAgICAgIC8vIE9uIHRoZSBcImRlZXBlc3RcIiBjb2xsZWN0aW9uLFxuICAgICAgICAvLyB2YWxpZGF0ZSBxdWVyeSBvZiB0aGUgcmVsYXRpb25zaGlwXG4gICAgICAgIGlmIChwYXRoVG9RdWVyeUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaCh2YWxpZGF0ZVF1ZXJ5UGF0aHMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbkNvbmZpZzogcmVxLnBheWxvYWQuY29sbGVjdGlvbnNbcGF0aENvbGxlY3Rpb25TbHVnXS5jb25maWcsXG4gICAgICAgICAgICBnbG9iYWxDb25maWc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIFtzdWJQYXRoXToge1xuICAgICAgICAgICAgICAgIFtvcGVyYXRvcl06IHZhbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICBwb2xpY2llcyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVNlYXJjaFBhcmFtIiwiZmllbGRzIiwiaW5jb21pbmdQYXRoIiwidmVyc2lvbkZpZWxkcyIsInZhbCIsIm9wZXJhdG9yIiwiY29sbGVjdGlvbkNvbmZpZyIsImdsb2JhbENvbmZpZyIsImVycm9ycyIsInJlcSIsInBvbGljaWVzIiwib3ZlcnJpZGVBY2Nlc3MiLCJwcm9taXNlcyIsInNhbml0aXplZFBhdGgiLCJwYXRocyIsInNsdWciLCJwYXRoIiwicmVwbGFjZSIsImdsb2JhbHMiLCJnZXRFbnRpdHlQb2xpY2llcyIsImVudGl0eSIsIm9wZXJhdGlvbnMiLCJ0eXBlIiwiZ2V0TG9jYWxpemVkUGF0aHMiLCJwYXlsb2FkIiwibG9jYWxlIiwiY29sbGVjdGlvblNsdWciLCJnbG9iYWxTbHVnIiwicHVzaCIsIm1hcCIsImkiLCJmaWVsZCIsImludmFsaWQiLCJmaWVsZEFjY2VzcyIsImZpZWxkUGF0aCIsImVudGl0eVR5cGUiLCJlbnRpdHlTbHVnIiwic2VnbWVudHMiLCJwYXRoc1RvUXVlcnkiLCJmaWVsZEFmZmVjdHNEYXRhIiwiY29sbGVjdGlvbnMiLCJjb25maWciLCJpbmNsdWRlcyIsImF1dGgiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsImVuZHNXaXRoIiwic2xpY2UiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJyZWxhdGlvblRvIiwic3BsaXQiLCJyZWFkIiwicGVybWlzc2lvbiIsInNoaWZ0IiwiZm9yRWFjaCIsInNlZ21lbnQiLCJwYXRoSW5kZXgiLCJyZXZlcnNlIiwicGF0aFRvUXVlcnlJbmRleCIsInN1YlBhdGgiLCJwYXRoQ29sbGVjdGlvblNsdWciLCJ2YWxpZGF0ZVF1ZXJ5UGF0aHMiLCJ1bmRlZmluZWQiLCJ3aGVyZSIsIlByb21pc2UiLCJhbGwiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMEJzQkE7OztlQUFBQTs7O3FCQTFCa0I7aUNBRU47a0NBR0M7aUNBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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