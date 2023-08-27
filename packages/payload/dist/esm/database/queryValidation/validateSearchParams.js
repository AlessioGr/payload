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
import { fieldAffectsData } from "../../fields/config/types";
import { getEntityPolicies } from "../../utilities/getEntityPolicies";
import { validateQueryPaths } from "./validateQueryPaths";
import { getLocalizedPaths } from "../getLocalizedPaths";
/**
 * Validate the Payload key / value / operator
 */ export function validateSearchParam(_) {
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
                        getEntityPolicies({
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
                        getLocalizedPaths({
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
                                        if (!(!overrideAccess && fieldAffectsData(field))) return [
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
                                            getEntityPolicies({
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
                                                    promises.push(validateQueryPaths({
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9xdWVyeVZhbGlkYXRpb24vdmFsaWRhdGVTZWFyY2hQYXJhbXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBnZXRFbnRpdHlQb2xpY2llcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9nZXRFbnRpdHlQb2xpY2llcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHZhbGlkYXRlUXVlcnlQYXRocyB9IGZyb20gJy4vdmFsaWRhdGVRdWVyeVBhdGhzJztcbmltcG9ydCB7IEVudGl0eVBvbGljaWVzLCBQYXRoVG9RdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TG9jYWxpemVkUGF0aHMgfSBmcm9tICcuLi9nZXRMb2NhbGl6ZWRQYXRocyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgZmllbGRzOiBGaWVsZFtdXG4gIHBhdGg6IHN0cmluZ1xuICB2YWw6IHVua25vd25cbiAgb3BlcmF0b3I6IHN0cmluZ1xuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIGVycm9yczogeyBwYXRoOiBzdHJpbmcgfVtdXG4gIHBvbGljaWVzOiBFbnRpdHlQb2xpY2llc1xuICBjb2xsZWN0aW9uQ29uZmlnPzogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBnbG9iYWxDb25maWc/OiBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgdmVyc2lvbkZpZWxkcz86IEZpZWxkW11cbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgUGF5bG9hZCBrZXkgLyB2YWx1ZSAvIG9wZXJhdG9yXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVNlYXJjaFBhcmFtKHtcbiAgZmllbGRzLFxuICBwYXRoOiBpbmNvbWluZ1BhdGgsXG4gIHZlcnNpb25GaWVsZHMsXG4gIHZhbCxcbiAgb3BlcmF0b3IsXG4gIGNvbGxlY3Rpb25Db25maWcsXG4gIGdsb2JhbENvbmZpZyxcbiAgZXJyb3JzLFxuICByZXEsXG4gIHBvbGljaWVzLFxuICBvdmVycmlkZUFjY2Vzcyxcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gUmVwbGFjZSBHcmFwaFFMIG5lc3RlZCBmaWVsZCBkb3VibGUgdW5kZXJzY29yZSBmb3JtYXR0aW5nXG4gIGxldCBzYW5pdGl6ZWRQYXRoO1xuICBpZiAoaW5jb21pbmdQYXRoID09PSAnX2lkJykge1xuICAgIHNhbml0aXplZFBhdGggPSAnaWQnO1xuICB9IGVsc2Uge1xuICAgIHNhbml0aXplZFBhdGggPSBpbmNvbWluZ1BhdGgucmVwbGFjZSgvX18vZ2ksICcuJyk7XG4gIH1cbiAgbGV0IHBhdGhzOiBQYXRoVG9RdWVyeVtdID0gW107XG4gIGNvbnN0IHsgc2x1ZyB9ID0gKGNvbGxlY3Rpb25Db25maWcgfHwgZ2xvYmFsQ29uZmlnKTtcblxuICBpZiAoZ2xvYmFsQ29uZmlnICYmICFwb2xpY2llcy5nbG9iYWxzW3NsdWddKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZ2xvYmFsQ29uZmlnLmZpZWxkcyA9IGZpZWxkcztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHBvbGljaWVzLmdsb2JhbHNbc2x1Z10gPSBhd2FpdCBnZXRFbnRpdHlQb2xpY2llcyh7XG4gICAgICByZXEsXG4gICAgICBlbnRpdHk6IGdsb2JhbENvbmZpZyxcbiAgICAgIG9wZXJhdGlvbnM6IFsncmVhZCddLFxuICAgICAgdHlwZTogJ2dsb2JhbCcsXG4gICAgfSk7XG4gIH1cblxuICBpZiAoc2FuaXRpemVkUGF0aCAhPT0gJ2lkJykge1xuICAgIHBhdGhzID0gYXdhaXQgZ2V0TG9jYWxpemVkUGF0aHMoe1xuICAgICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gICAgICBsb2NhbGU6IHJlcS5sb2NhbGUsXG4gICAgICBjb2xsZWN0aW9uU2x1ZzogY29sbGVjdGlvbkNvbmZpZz8uc2x1ZyxcbiAgICAgIGdsb2JhbFNsdWc6IGdsb2JhbENvbmZpZz8uc2x1ZyxcbiAgICAgIGZpZWxkcyxcbiAgICAgIGluY29taW5nUGF0aDogc2FuaXRpemVkUGF0aCxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHByb21pc2VzID0gW107XG4gIHByb21pc2VzLnB1c2goLi4ucGF0aHMubWFwKGFzeW5jICh7IHBhdGgsIGZpZWxkLCBpbnZhbGlkLCBjb2xsZWN0aW9uU2x1ZyB9LCBpKSA9PiB7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIGVycm9ycy5wdXNoKHsgcGF0aCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW92ZXJyaWRlQWNjZXNzICYmIGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgICBpZiAoY29sbGVjdGlvblNsdWcpIHtcbiAgICAgICAgaWYgKCFwb2xpY2llcy5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z10pIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBwb2xpY2llcy5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z10gPSBhd2FpdCBnZXRFbnRpdHlQb2xpY2llcyh7XG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBlbnRpdHk6IHJlcS5wYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25TbHVnXS5jb25maWcsXG4gICAgICAgICAgICBvcGVyYXRpb25zOiBbJ3JlYWQnXSxcbiAgICAgICAgICAgIHR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChbJ3NhbHQnLCAnaGFzaCddLmluY2x1ZGVzKGluY29taW5nUGF0aCkgJiYgY29sbGVjdGlvbkNvbmZpZy5hdXRoICYmICFjb2xsZWN0aW9uQ29uZmlnLmF1dGg/LmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goeyBwYXRoOiBpbmNvbWluZ1BhdGggfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBmaWVsZEFjY2VzcztcbiAgICAgIGxldCBmaWVsZFBhdGggPSBwYXRoO1xuICAgICAgLy8gcmVtb3ZlIGxvY2FsZSBmcm9tIGVuZCBvZiBwYXRoXG4gICAgICBpZiAocGF0aC5lbmRzV2l0aChyZXEubG9jYWxlKSkge1xuICAgICAgICBmaWVsZFBhdGggPSBwYXRoLnNsaWNlKDAsIC0ocmVxLmxvY2FsZS5sZW5ndGggKyAxKSk7XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgXCIudmFsdWVcIiBmcm9tIGVuZHMgb2YgcG9seW1vcnBoaWMgcmVsYXRpb25zaGlwIHBhdGhzXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgJiYgQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSkge1xuICAgICAgICBmaWVsZFBhdGggPSBmaWVsZFBhdGgucmVwbGFjZSgnLnZhbHVlJywgJycpO1xuICAgICAgfVxuICAgICAgY29uc3QgZW50aXR5VHlwZTogJ2NvbGxlY3Rpb25zJyB8ICdnbG9iYWxzJyA9IGdsb2JhbENvbmZpZyA/ICdnbG9iYWxzJyA6ICdjb2xsZWN0aW9ucyc7XG4gICAgICBjb25zdCBlbnRpdHlTbHVnID0gY29sbGVjdGlvblNsdWcgfHwgZ2xvYmFsQ29uZmlnLnNsdWc7XG4gICAgICBjb25zdCBzZWdtZW50cyA9IGZpZWxkUGF0aC5zcGxpdCgnLicpO1xuXG4gICAgICBpZiAodmVyc2lvbkZpZWxkcykge1xuICAgICAgICBpZiAoZmllbGRQYXRoID09PSAncGFyZW50JyB8fCBmaWVsZFBhdGggPT09ICd2ZXJzaW9uJykge1xuICAgICAgICAgIGZpZWxkQWNjZXNzID0gcG9saWNpZXNbZW50aXR5VHlwZV1bZW50aXR5U2x1Z10ucmVhZC5wZXJtaXNzaW9uO1xuICAgICAgICB9IGVsc2UgaWYgKHNlZ21lbnRzWzBdID09PSAncGFyZW50JyB8fCBzZWdtZW50c1swXSA9PT0gJ3ZlcnNpb24nKSB7XG4gICAgICAgICAgZmllbGRBY2Nlc3MgPSBwb2xpY2llc1tlbnRpdHlUeXBlXVtlbnRpdHlTbHVnXS5yZWFkLnBlcm1pc3Npb247XG4gICAgICAgICAgc2VnbWVudHMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmllbGRBY2Nlc3MgPSBwb2xpY2llc1tlbnRpdHlUeXBlXVtlbnRpdHlTbHVnXS5maWVsZHM7XG4gICAgICAgIHNlZ21lbnRzLmZvckVhY2goKHNlZ21lbnQsIHBhdGhJbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChwYXRoSW5kZXggPT09IHNlZ21lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGZpZWxkQWNjZXNzID0gZmllbGRBY2Nlc3Nbc2VnbWVudF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkQWNjZXNzID0gZmllbGRBY2Nlc3Nbc2VnbWVudF0uZmllbGRzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZpZWxkQWNjZXNzID0gZmllbGRBY2Nlc3MucmVhZC5wZXJtaXNzaW9uO1xuICAgICAgfVxuICAgICAgaWYgKCFmaWVsZEFjY2Vzcykge1xuICAgICAgICBlcnJvcnMucHVzaCh7IHBhdGg6IGZpZWxkUGF0aCB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA+IDEpIHtcbiAgICAgIC8vIFJlbW92ZSB0b3AgY29sbGVjdGlvbiBhbmQgcmV2ZXJzZSBhcnJheVxuICAgICAgLy8gdG8gd29yayBiYWNrd2FyZHMgZnJvbSB0b3BcbiAgICAgIGNvbnN0IHBhdGhzVG9RdWVyeSA9IHBhdGhzLnNsaWNlKDEpXG4gICAgICAgIC5yZXZlcnNlKCk7XG5cbiAgICAgIHBhdGhzVG9RdWVyeS5mb3JFYWNoKCh7XG4gICAgICAgIHBhdGg6IHN1YlBhdGgsXG4gICAgICAgIGNvbGxlY3Rpb25TbHVnOiBwYXRoQ29sbGVjdGlvblNsdWcsXG4gICAgICB9LCBwYXRoVG9RdWVyeUluZGV4KSA9PiB7XG4gICAgICAgIC8vIE9uIHRoZSBcImRlZXBlc3RcIiBjb2xsZWN0aW9uLFxuICAgICAgICAvLyB2YWxpZGF0ZSBxdWVyeSBvZiB0aGUgcmVsYXRpb25zaGlwXG4gICAgICAgIGlmIChwYXRoVG9RdWVyeUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaCh2YWxpZGF0ZVF1ZXJ5UGF0aHMoe1xuICAgICAgICAgICAgY29sbGVjdGlvbkNvbmZpZzogcmVxLnBheWxvYWQuY29sbGVjdGlvbnNbcGF0aENvbGxlY3Rpb25TbHVnXS5jb25maWcsXG4gICAgICAgICAgICBnbG9iYWxDb25maWc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIFtzdWJQYXRoXToge1xuICAgICAgICAgICAgICAgIFtvcGVyYXRvcl06IHZhbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICBwb2xpY2llcyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn1cbiJdLCJuYW1lcyI6WyJmaWVsZEFmZmVjdHNEYXRhIiwiZ2V0RW50aXR5UG9saWNpZXMiLCJ2YWxpZGF0ZVF1ZXJ5UGF0aHMiLCJnZXRMb2NhbGl6ZWRQYXRocyIsInZhbGlkYXRlU2VhcmNoUGFyYW0iLCJmaWVsZHMiLCJpbmNvbWluZ1BhdGgiLCJ2ZXJzaW9uRmllbGRzIiwidmFsIiwib3BlcmF0b3IiLCJjb2xsZWN0aW9uQ29uZmlnIiwiZ2xvYmFsQ29uZmlnIiwiZXJyb3JzIiwicmVxIiwicG9saWNpZXMiLCJvdmVycmlkZUFjY2VzcyIsInByb21pc2VzIiwic2FuaXRpemVkUGF0aCIsInBhdGhzIiwic2x1ZyIsInBhdGgiLCJyZXBsYWNlIiwiZ2xvYmFscyIsImVudGl0eSIsIm9wZXJhdGlvbnMiLCJ0eXBlIiwicGF5bG9hZCIsImxvY2FsZSIsImNvbGxlY3Rpb25TbHVnIiwiZ2xvYmFsU2x1ZyIsInB1c2giLCJtYXAiLCJpIiwiZmllbGQiLCJpbnZhbGlkIiwiZmllbGRBY2Nlc3MiLCJmaWVsZFBhdGgiLCJlbnRpdHlUeXBlIiwiZW50aXR5U2x1ZyIsInNlZ21lbnRzIiwicGF0aHNUb1F1ZXJ5IiwiY29sbGVjdGlvbnMiLCJjb25maWciLCJpbmNsdWRlcyIsImF1dGgiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsImVuZHNXaXRoIiwic2xpY2UiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJyZWxhdGlvblRvIiwic3BsaXQiLCJyZWFkIiwicGVybWlzc2lvbiIsInNoaWZ0IiwiZm9yRWFjaCIsInNlZ21lbnQiLCJwYXRoSW5kZXgiLCJyZXZlcnNlIiwicGF0aFRvUXVlcnlJbmRleCIsInN1YlBhdGgiLCJwYXRoQ29sbGVjdGlvblNsdWciLCJ1bmRlZmluZWQiLCJ3aGVyZSIsIlByb21pc2UiLCJhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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