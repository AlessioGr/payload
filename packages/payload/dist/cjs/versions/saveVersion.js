"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "saveVersion", {
    enumerable: true,
    get: function() {
        return saveVersion;
    }
});
var _enforceMaxVersions = require("./enforceMaxVersions");
var _sanitizeInternalFields = /*#__PURE__*/ _interop_require_default(require("../utilities/sanitizeInternalFields"));
function _array_like_to_array(arr, len) {
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var saveVersion = function() {
    var _ref = _async_to_generator(function(param) {
        var payload, collection, global, id, doc, autosave, draft, req, result, entityConfig, versionData, createNewVersion, now, _latestVersion, docs, _docs, latestVersion, data, _doc, err, errorMessage, max, createdVersion;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = param.payload, collection = param.collection, global = param.global, id = param.id, doc = param.docWithLocales, autosave = param.autosave, draft = param.draft, req = param.req;
                    if (collection) {
                        entityConfig = collection;
                    }
                    if (global) {
                        entityConfig = global;
                    }
                    versionData = _object_spread({}, doc);
                    if (draft) versionData._status = "draft";
                    if (versionData._id) delete versionData._id;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        7,
                        ,
                        8
                    ]);
                    createNewVersion = true;
                    now = new Date().toISOString();
                    if (!autosave) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        payload.db.findVersions({
                            collection: entityConfig.slug,
                            limit: 1,
                            where: {
                                parent: {
                                    equals: id
                                }
                            },
                            sort: "-updatedAt",
                            req: req
                        })
                    ];
                case 2:
                    docs = _state.sent().docs;
                    _docs = _sliced_to_array(docs, 1), latestVersion = _docs[0];
                    if (!(((_latestVersion = latestVersion) === null || _latestVersion === void 0 ? void 0 : _latestVersion.autosave) === true)) return [
                        3,
                        4
                    ];
                    createNewVersion = false;
                    data = {
                        version: versionData,
                        createdAt: new Date(latestVersion.createdAt).toISOString(),
                        updatedAt: draft ? now : new Date(doc.updatedAt).toISOString()
                    };
                    return [
                        4,
                        payload.db.updateVersion({
                            collectionSlug: entityConfig.slug,
                            versionData: data,
                            id: latestVersion.id,
                            req: req
                        })
                    ];
                case 3:
                    result = _state.sent();
                    _state.label = 4;
                case 4:
                    if (!createNewVersion) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        payload.db.createVersion({
                            collectionSlug: entityConfig.slug,
                            parent: collection ? id : undefined,
                            autosave: Boolean(autosave),
                            createdAt: ((_doc = doc) === null || _doc === void 0 ? void 0 : _doc.createdAt) ? new Date(doc.createdAt).toISOString() : now,
                            updatedAt: draft ? now : new Date(doc.updatedAt).toISOString(),
                            versionData: versionData,
                            req: req
                        })
                    ];
                case 5:
                    result = _state.sent();
                    _state.label = 6;
                case 6:
                    return [
                        3,
                        8
                    ];
                case 7:
                    err = _state.sent();
                    if (collection) errorMessage = "There was an error while saving a version for the ".concat(collection.labels.singular, " with ID ").concat(id, ".");
                    if (global) errorMessage = "There was an error while saving a version for the global ".concat(global.label, ".");
                    payload.logger.error(errorMessage);
                    payload.logger.error(err);
                    return [
                        3,
                        8
                    ];
                case 8:
                    max = 100;
                    if (collection && typeof collection.versions.maxPerDoc === "number") max = collection.versions.maxPerDoc;
                    if (global && typeof global.versions.max === "number") max = global.versions.max;
                    if (!(max > 0)) return [
                        3,
                        10
                    ];
                    return [
                        4,
                        (0, _enforceMaxVersions.enforceMaxVersions)({
                            id: id,
                            payload: payload,
                            collection: collection,
                            global: global,
                            max: max,
                            req: req
                        })
                    ];
                case 9:
                    _state.sent();
                    _state.label = 10;
                case 10:
                    result = JSON.parse(JSON.stringify(result));
                    createdVersion = result.version;
                    createdVersion.createdAt = result.createdAt;
                    createdVersion.updatedAt = result.updatedAt;
                    createdVersion = (0, _sanitizeInternalFields.default)(createdVersion);
                    createdVersion.id = id;
                    return [
                        2,
                        createdVersion
                    ];
            }
        });
    });
    return function saveVersion(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9zYXZlVmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vcGF5bG9hZCc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLCBUeXBlV2l0aElEIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGVuZm9yY2VNYXhWZXJzaW9ucyB9IGZyb20gJy4vZW5mb3JjZU1heFZlcnNpb25zJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyBmcm9tICcuLi91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgcGF5bG9hZDogUGF5bG9hZFxuICBnbG9iYWw/OiBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgY29sbGVjdGlvbj86IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgZG9jV2l0aExvY2FsZXM6IGFueVxuICBpZD86IHN0cmluZyB8IG51bWJlclxuICBhdXRvc2F2ZT86IGJvb2xlYW5cbiAgZHJhZnQ/OiBib29sZWFuXG4gIHJlcT86IFBheWxvYWRSZXF1ZXN0XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlVmVyc2lvbiA9IGFzeW5jICh7XG4gIHBheWxvYWQsXG4gIGNvbGxlY3Rpb24sXG4gIGdsb2JhbCxcbiAgaWQsXG4gIGRvY1dpdGhMb2NhbGVzOiBkb2MsXG4gIGF1dG9zYXZlLFxuICBkcmFmdCxcbiAgcmVxLFxufTogQXJncyk6IFByb21pc2U8VHlwZVdpdGhJRD4gPT4ge1xuICBsZXQgcmVzdWx0O1xuICBsZXQgZW50aXR5Q29uZmlnO1xuXG4gIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgZW50aXR5Q29uZmlnID0gY29sbGVjdGlvbjtcbiAgfVxuXG4gIGlmIChnbG9iYWwpIHtcbiAgICBlbnRpdHlDb25maWcgPSBnbG9iYWw7XG4gIH1cbiAgY29uc3QgdmVyc2lvbkRhdGEgPSB7IC4uLmRvYyB9O1xuICBpZiAoZHJhZnQpIHZlcnNpb25EYXRhLl9zdGF0dXMgPSAnZHJhZnQnO1xuICBpZiAodmVyc2lvbkRhdGEuX2lkKSBkZWxldGUgdmVyc2lvbkRhdGEuX2lkO1xuXG4gIHRyeSB7XG4gICAgbGV0IGNyZWF0ZU5ld1ZlcnNpb24gPSB0cnVlO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuICAgIGlmIChhdXRvc2F2ZSkge1xuICAgICAgY29uc3QgeyBkb2NzIH0gPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRWZXJzaW9ucyh7XG4gICAgICAgIGNvbGxlY3Rpb246IGVudGl0eUNvbmZpZy5zbHVnLFxuICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBwYXJlbnQ6IHtcbiAgICAgICAgICAgIGVxdWFsczogaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc29ydDogJy11cGRhdGVkQXQnLFxuICAgICAgICByZXEsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IFtsYXRlc3RWZXJzaW9uXSA9IGRvY3M7XG5cblxuICAgICAgLy8gb3ZlcndyaXRlIHRoZSBsYXRlc3QgdmVyc2lvbiBpZiBpdCdzIHNldCB0byBhdXRvc2F2ZVxuICAgICAgaWYgKChsYXRlc3RWZXJzaW9uIGFzIGFueSk/LmF1dG9zYXZlID09PSB0cnVlKSB7XG4gICAgICAgIGNyZWF0ZU5ld1ZlcnNpb24gPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcbiAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uRGF0YSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKGxhdGVzdFZlcnNpb24uY3JlYXRlZEF0KS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHVwZGF0ZWRBdDogZHJhZnQgPyBub3cgOiBuZXcgRGF0ZShkb2MudXBkYXRlZEF0KS50b0lTT1N0cmluZygpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IHBheWxvYWQuZGIudXBkYXRlVmVyc2lvbih7XG4gICAgICAgICAgY29sbGVjdGlvblNsdWc6IGVudGl0eUNvbmZpZy5zbHVnLFxuICAgICAgICAgIHZlcnNpb25EYXRhOiBkYXRhLFxuICAgICAgICAgIGlkOiBsYXRlc3RWZXJzaW9uLmlkLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZU5ld1ZlcnNpb24pIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHBheWxvYWQuZGIuY3JlYXRlVmVyc2lvbih7XG4gICAgICAgIGNvbGxlY3Rpb25TbHVnOiBlbnRpdHlDb25maWcuc2x1ZyxcbiAgICAgICAgcGFyZW50OiBjb2xsZWN0aW9uID8gaWQgOiB1bmRlZmluZWQsXG4gICAgICAgIGF1dG9zYXZlOiBCb29sZWFuKGF1dG9zYXZlKSxcbiAgICAgICAgY3JlYXRlZEF0OiBkb2M/LmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGRvYy5jcmVhdGVkQXQpLnRvSVNPU3RyaW5nKCkgOiBub3csXG4gICAgICAgIHVwZGF0ZWRBdDogZHJhZnQgPyBub3cgOiBuZXcgRGF0ZShkb2MudXBkYXRlZEF0KS50b0lTT1N0cmluZygpLFxuICAgICAgICB2ZXJzaW9uRGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBpZiAoY29sbGVjdGlvbikgZXJyb3JNZXNzYWdlID0gYFRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSBzYXZpbmcgYSB2ZXJzaW9uIGZvciB0aGUgJHtjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhcn0gd2l0aCBJRCAke2lkfS5gO1xuICAgIGlmIChnbG9iYWwpIGVycm9yTWVzc2FnZSA9IGBUaGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgc2F2aW5nIGEgdmVyc2lvbiBmb3IgdGhlIGdsb2JhbCAke2dsb2JhbC5sYWJlbH0uYDtcbiAgICBwYXlsb2FkLmxvZ2dlci5lcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgIHBheWxvYWQubG9nZ2VyLmVycm9yKGVycik7XG4gIH1cblxuICBsZXQgbWF4ID0gMTAwO1xuXG4gIGlmIChjb2xsZWN0aW9uICYmIHR5cGVvZiBjb2xsZWN0aW9uLnZlcnNpb25zLm1heFBlckRvYyA9PT0gJ251bWJlcicpIG1heCA9IGNvbGxlY3Rpb24udmVyc2lvbnMubWF4UGVyRG9jO1xuICBpZiAoZ2xvYmFsICYmIHR5cGVvZiBnbG9iYWwudmVyc2lvbnMubWF4ID09PSAnbnVtYmVyJykgbWF4ID0gZ2xvYmFsLnZlcnNpb25zLm1heDtcblxuICBpZiAobWF4ID4gMCkge1xuICAgIGF3YWl0IGVuZm9yY2VNYXhWZXJzaW9ucyh7XG4gICAgICBpZCxcbiAgICAgIHBheWxvYWQsXG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZ2xvYmFsLFxuICAgICAgbWF4LFxuICAgICAgcmVxLFxuICAgIH0pO1xuICB9XG5cbiAgcmVzdWx0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcblxuICBsZXQgY3JlYXRlZFZlcnNpb24gPSByZXN1bHQudmVyc2lvbjtcbiAgY3JlYXRlZFZlcnNpb24uY3JlYXRlZEF0ID0gcmVzdWx0LmNyZWF0ZWRBdDtcbiAgY3JlYXRlZFZlcnNpb24udXBkYXRlZEF0ID0gcmVzdWx0LnVwZGF0ZWRBdDtcblxuICBjcmVhdGVkVmVyc2lvbiA9IHNhbml0aXplSW50ZXJuYWxGaWVsZHMoY3JlYXRlZFZlcnNpb24pO1xuICBjcmVhdGVkVmVyc2lvbi5pZCA9IGlkO1xuXG4gIHJldHVybiBjcmVhdGVkVmVyc2lvbjtcbn07XG4iXSwibmFtZXMiOlsic2F2ZVZlcnNpb24iLCJwYXlsb2FkIiwiY29sbGVjdGlvbiIsImdsb2JhbCIsImlkIiwiZG9jIiwiYXV0b3NhdmUiLCJkcmFmdCIsInJlcSIsInJlc3VsdCIsImVudGl0eUNvbmZpZyIsInZlcnNpb25EYXRhIiwiY3JlYXRlTmV3VmVyc2lvbiIsIm5vdyIsImxhdGVzdFZlcnNpb24iLCJkb2NzIiwiZGF0YSIsImVyciIsImVycm9yTWVzc2FnZSIsIm1heCIsImNyZWF0ZWRWZXJzaW9uIiwiZG9jV2l0aExvY2FsZXMiLCJfc3RhdHVzIiwiX2lkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZGIiLCJmaW5kVmVyc2lvbnMiLCJzbHVnIiwibGltaXQiLCJ3aGVyZSIsInBhcmVudCIsImVxdWFscyIsInNvcnQiLCJ2ZXJzaW9uIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwidXBkYXRlVmVyc2lvbiIsImNvbGxlY3Rpb25TbHVnIiwiY3JlYXRlVmVyc2lvbiIsInVuZGVmaW5lZCIsIkJvb2xlYW4iLCJsYWJlbHMiLCJzaW5ndWxhciIsImxhYmVsIiwibG9nZ2VyIiwiZXJyb3IiLCJ2ZXJzaW9ucyIsIm1heFBlckRvYyIsImVuZm9yY2VNYXhWZXJzaW9ucyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNhbml0aXplSW50ZXJuYWxGaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBa0JhQTs7O2VBQUFBOzs7a0NBaEJzQjs2RUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYTVCLElBQU1BO2VBQWMsb0JBQUE7WUFDekJD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