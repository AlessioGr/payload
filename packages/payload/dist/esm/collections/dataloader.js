function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
import DataLoader from "dataloader";
import { isValidID } from "../utilities/isValidID";
import { getIDType } from "../utilities/getIDType";
import { fieldAffectsData } from "../fields/config/types";
// Payload uses `dataloader` to solve the classic GraphQL N+1 problem.
// We keep a list of all documents requested to be populated for any given request
// and then batch together documents within the same collection,
// making only 1 find per each collection, rather than `findByID` per each requested doc.
// This dramatically improves performance for REST and Local API `depth` populations,
// and also ensures complex GraphQL queries perform lightning-fast.
var batchAndLoadDocs = function(req) {
    return function() {
        var _ref = _async_to_generator(function(keys) {
            var payload, docs, batchByFindArgs, results;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        payload = req.payload;
                        docs = keys.map(function() {
                            return null;
                        });
                        batchByFindArgs = keys.reduce(function(batches, key) {
                            var _payload_collections, _idField;
                            var _JSON_parse = _sliced_to_array(JSON.parse(key), 9), transactionID = _JSON_parse[0], collection = _JSON_parse[1], id = _JSON_parse[2], depth = _JSON_parse[3], currentDepth = _JSON_parse[4], locale = _JSON_parse[5], fallbackLocale = _JSON_parse[6], overrideAccess = _JSON_parse[7], showHiddenFields = _JSON_parse[8];
                            var batchKeyArray = [
                                transactionID,
                                collection,
                                depth,
                                currentDepth,
                                locale,
                                fallbackLocale,
                                overrideAccess,
                                showHiddenFields
                            ];
                            var batchKey = JSON.stringify(batchKeyArray);
                            var idField = (_payload_collections = payload.collections) === null || _payload_collections === void 0 ? void 0 : _payload_collections[collection].config.fields.find(function(field) {
                                return fieldAffectsData(field) && field.name === "id";
                            });
                            var sanitizedID = id;
                            if (((_idField = idField) === null || _idField === void 0 ? void 0 : _idField.type) === "number") sanitizedID = parseFloat(id);
                            if (isValidID(sanitizedID, getIDType(idField))) {
                                return _object_spread_props(_object_spread({}, batches), _define_property({}, batchKey, _to_consumable_array(batches[batchKey] || []).concat([
                                    sanitizedID
                                ])));
                            }
                            return batches;
                        }, {});
                        results = Object.entries(batchByFindArgs).map(function() {
                            var _ref = _async_to_generator(function(param) {
                                var _param, batchKey, ids, _JSON_parse, collection, depth, currentDepth, locale, fallbackLocale, overrideAccess, showHiddenFields, result;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _param = _sliced_to_array(param, 2), batchKey = _param[0], ids = _param[1];
                                            _JSON_parse = _sliced_to_array(JSON.parse(batchKey), 8), collection = _JSON_parse[1], depth = _JSON_parse[2], currentDepth = _JSON_parse[3], locale = _JSON_parse[4], fallbackLocale = _JSON_parse[5], overrideAccess = _JSON_parse[6], showHiddenFields = _JSON_parse[7];
                                            return [
                                                4,
                                                payload.find({
                                                    collection: collection,
                                                    locale: locale,
                                                    fallbackLocale: fallbackLocale,
                                                    depth: depth,
                                                    currentDepth: currentDepth,
                                                    pagination: false,
                                                    where: {
                                                        id: {
                                                            in: ids
                                                        }
                                                    },
                                                    overrideAccess: Boolean(overrideAccess),
                                                    showHiddenFields: Boolean(showHiddenFields),
                                                    disableErrors: true,
                                                    req: req
                                                })
                                            ];
                                        case 1:
                                            result = _state.sent();
                                            // For each returned doc, find index in original keys
                                            // Inject doc within docs array if index exists
                                            result.docs.forEach(function(doc) {
                                                var docKey = JSON.stringify([
                                                    req.transactionID,
                                                    collection,
                                                    doc.id,
                                                    depth,
                                                    currentDepth,
                                                    locale,
                                                    fallbackLocale,
                                                    overrideAccess,
                                                    showHiddenFields
                                                ]);
                                                var docsIndex = keys.findIndex(function(key) {
                                                    return key === docKey;
                                                });
                                                if (docsIndex > -1) {
                                                    docs[docsIndex] = doc;
                                                }
                                            });
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        return [
                            4,
                            Promise.all(results)
                        ];
                    case 1:
                        _state.sent();
                        // Return docs array,
                        // which has now been injected with all fetched docs
                        // and should match the length of the incoming keys arg
                        return [
                            2,
                            docs
                        ];
                }
            });
        });
        return function(keys) {
            return _ref.apply(this, arguments);
        };
    }();
};
export var getDataLoader = function(req) {
    return new DataLoader(batchAndLoadDocs(req));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9kYXRhbG9hZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhTG9hZGVyLCB7IEJhdGNoTG9hZEZuIH0gZnJvbSAnZGF0YWxvYWRlcic7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVdpdGhJRCB9IGZyb20gJy4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGlzVmFsaWRJRCB9IGZyb20gJy4uL3V0aWxpdGllcy9pc1ZhbGlkSUQnO1xuaW1wb3J0IHsgZ2V0SURUeXBlIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dldElEVHlwZSc7XG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbi8vIFBheWxvYWQgdXNlcyBgZGF0YWxvYWRlcmAgdG8gc29sdmUgdGhlIGNsYXNzaWMgR3JhcGhRTCBOKzEgcHJvYmxlbS5cblxuLy8gV2Uga2VlcCBhIGxpc3Qgb2YgYWxsIGRvY3VtZW50cyByZXF1ZXN0ZWQgdG8gYmUgcG9wdWxhdGVkIGZvciBhbnkgZ2l2ZW4gcmVxdWVzdFxuLy8gYW5kIHRoZW4gYmF0Y2ggdG9nZXRoZXIgZG9jdW1lbnRzIHdpdGhpbiB0aGUgc2FtZSBjb2xsZWN0aW9uLFxuLy8gbWFraW5nIG9ubHkgMSBmaW5kIHBlciBlYWNoIGNvbGxlY3Rpb24sIHJhdGhlciB0aGFuIGBmaW5kQnlJRGAgcGVyIGVhY2ggcmVxdWVzdGVkIGRvYy5cblxuLy8gVGhpcyBkcmFtYXRpY2FsbHkgaW1wcm92ZXMgcGVyZm9ybWFuY2UgZm9yIFJFU1QgYW5kIExvY2FsIEFQSSBgZGVwdGhgIHBvcHVsYXRpb25zLFxuLy8gYW5kIGFsc28gZW5zdXJlcyBjb21wbGV4IEdyYXBoUUwgcXVlcmllcyBwZXJmb3JtIGxpZ2h0bmluZy1mYXN0LlxuXG5jb25zdCBiYXRjaEFuZExvYWREb2NzID0gKHJlcTogUGF5bG9hZFJlcXVlc3QpOiBCYXRjaExvYWRGbjxzdHJpbmcsIFR5cGVXaXRoSUQ+ID0+IGFzeW5jIChrZXlzOiBzdHJpbmdbXSk6IFByb21pc2U8VHlwZVdpdGhJRFtdPiA9PiB7XG4gIGNvbnN0IHsgcGF5bG9hZCB9ID0gcmVxO1xuXG4gIC8vIENyZWF0ZSBkb2NzIGFycmF5IG9mIHNhbWUgbGVuZ3RoIGFzIGtleXMsIHVzaW5nIG51bGwgYXMgdmFsdWVcbiAgLy8gV2Ugd2lsbCByZXBsYWNlIG51bGxzIHdpdGggaW5qZWN0ZWQgZG9jcyBhcyB0aGV5IGFyZSByZXRyaWV2ZWRcbiAgY29uc3QgZG9jczogKFR5cGVXaXRoSUQgfCBudWxsKVtdID0ga2V5cy5tYXAoKCkgPT4gbnVsbCk7XG5cbiAgLy8gQmF0Y2ggSURzIGJ5IHRoZWlyIGBmaW5kYCBhcmdzXG4gIC8vIHNvIHdlIGNhbiBtYWtlIG9uZSBmaW5kIHF1ZXJ5IHBlciBjb21iaW5hdGlvbiBvZiBjb2xsZWN0aW9uLCBkZXB0aCwgbG9jYWxlLCBhbmQgZmFsbGJhY2tMb2NhbGUuXG5cbiAgLy8gUmVzdWx0aW5nIHNoYXBlIHdpbGwgYmUgYXMgZm9sbG93czpcblxuICAvLyB7XG4gIC8vICAgLy8ga2V5IGlzIHN0cmluZ2lmaWVkIHNldCBvZiBmaW5kIGFyZ3NcbiAgLy8gICAnW251bGwsXCJwYWdlc1wiLDIsMCxcImVzXCIsXCJlblwiLGZhbHNlLGZhbHNlXSc6IFtcbiAgLy8gICAgIC8vIHZhbHVlIGlzIGFycmF5IG9mIElEcyB0byBmaW5kIHdpdGggdGhlc2UgYXJnc1xuICAvLyAgICAgJ3EzNHRsMjM0NjIzNDYyMzQ1MjQnLFxuICAvLyAgICAgJzQzNTUyMzU0MDE5NDMyNDI4MCcsXG4gIC8vICAgICAnMjM0NjI0NWozNWwzajUyMzQ1MzJsaScsXG4gIC8vICAgXSxcbiAgLy8gICAvLyBldGNcbiAgLy8gfTtcblxuICBjb25zdCBiYXRjaEJ5RmluZEFyZ3MgPSBrZXlzLnJlZHVjZSgoYmF0Y2hlcywga2V5KSA9PiB7XG4gICAgY29uc3QgW3RyYW5zYWN0aW9uSUQsIGNvbGxlY3Rpb24sIGlkLCBkZXB0aCwgY3VycmVudERlcHRoLCBsb2NhbGUsIGZhbGxiYWNrTG9jYWxlLCBvdmVycmlkZUFjY2Vzcywgc2hvd0hpZGRlbkZpZWxkc10gPSBKU09OLnBhcnNlKGtleSk7XG5cbiAgICBjb25zdCBiYXRjaEtleUFycmF5ID0gW1xuICAgICAgdHJhbnNhY3Rpb25JRCxcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBkZXB0aCxcbiAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIF07XG5cbiAgICBjb25zdCBiYXRjaEtleSA9IEpTT04uc3RyaW5naWZ5KGJhdGNoS2V5QXJyYXkpO1xuXG4gICAgY29uc3QgaWRGaWVsZCA9IHBheWxvYWQuY29sbGVjdGlvbnM/Lltjb2xsZWN0aW9uXS5jb25maWcuZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKTtcblxuICAgIGxldCBzYW5pdGl6ZWRJRDogc3RyaW5nIHwgbnVtYmVyID0gaWQ7XG5cbiAgICBpZiAoaWRGaWVsZD8udHlwZSA9PT0gJ251bWJlcicpIHNhbml0aXplZElEID0gcGFyc2VGbG9hdChpZCk7XG5cbiAgICBpZiAoaXNWYWxpZElEKHNhbml0aXplZElELCBnZXRJRFR5cGUoaWRGaWVsZCkpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5iYXRjaGVzLFxuICAgICAgICBbYmF0Y2hLZXldOiBbXG4gICAgICAgICAgLi4uYmF0Y2hlc1tiYXRjaEtleV0gfHwgW10sXG4gICAgICAgICAgc2FuaXRpemVkSUQsXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYmF0Y2hlcztcbiAgfSwge30pO1xuXG4gIC8vIFJ1biBmaW5kIHJlcXVlc3RzIGluIHBhcmFsbGVsXG5cbiAgY29uc3QgcmVzdWx0cyA9IE9iamVjdC5lbnRyaWVzKGJhdGNoQnlGaW5kQXJncykubWFwKGFzeW5jIChbYmF0Y2hLZXksIGlkc10pID0+IHtcbiAgICBjb25zdCBbLyogdHJhbnNhY3Rpb25JRCAqLywgY29sbGVjdGlvbiwgZGVwdGgsIGN1cnJlbnREZXB0aCwgbG9jYWxlLCBmYWxsYmFja0xvY2FsZSwgb3ZlcnJpZGVBY2Nlc3MsIHNob3dIaWRkZW5GaWVsZHNdID0gSlNPTi5wYXJzZShiYXRjaEtleSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwYXlsb2FkLmZpbmQoe1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGxvY2FsZSxcbiAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgZGVwdGgsXG4gICAgICBjdXJyZW50RGVwdGgsXG4gICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgaW46IGlkcyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvdmVycmlkZUFjY2VzczogQm9vbGVhbihvdmVycmlkZUFjY2VzcyksXG4gICAgICBzaG93SGlkZGVuRmllbGRzOiBCb29sZWFuKHNob3dIaWRkZW5GaWVsZHMpLFxuICAgICAgZGlzYWJsZUVycm9yczogdHJ1ZSxcbiAgICAgIHJlcSxcbiAgICB9KTtcblxuICAgIC8vIEZvciBlYWNoIHJldHVybmVkIGRvYywgZmluZCBpbmRleCBpbiBvcmlnaW5hbCBrZXlzXG4gICAgLy8gSW5qZWN0IGRvYyB3aXRoaW4gZG9jcyBhcnJheSBpZiBpbmRleCBleGlzdHNcblxuICAgIHJlc3VsdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgY29uc3QgZG9jS2V5ID0gSlNPTi5zdHJpbmdpZnkoW3JlcS50cmFuc2FjdGlvbklELCBjb2xsZWN0aW9uLCBkb2MuaWQsIGRlcHRoLCBjdXJyZW50RGVwdGgsIGxvY2FsZSwgZmFsbGJhY2tMb2NhbGUsIG92ZXJyaWRlQWNjZXNzLCBzaG93SGlkZGVuRmllbGRzXSk7XG4gICAgICBjb25zdCBkb2NzSW5kZXggPSBrZXlzLmZpbmRJbmRleCgoa2V5KSA9PiBrZXkgPT09IGRvY0tleSk7XG5cbiAgICAgIGlmIChkb2NzSW5kZXggPiAtMSkge1xuICAgICAgICBkb2NzW2RvY3NJbmRleF0gPSBkb2M7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKHJlc3VsdHMpO1xuXG4gIC8vIFJldHVybiBkb2NzIGFycmF5LFxuICAvLyB3aGljaCBoYXMgbm93IGJlZW4gaW5qZWN0ZWQgd2l0aCBhbGwgZmV0Y2hlZCBkb2NzXG4gIC8vIGFuZCBzaG91bGQgbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgaW5jb21pbmcga2V5cyBhcmdcbiAgcmV0dXJuIGRvY3M7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YUxvYWRlciA9IChyZXE6IFBheWxvYWRSZXF1ZXN0KSA9PiBuZXcgRGF0YUxvYWRlcihiYXRjaEFuZExvYWREb2NzKHJlcSkpO1xuIl0sIm5hbWVzIjpbIkRhdGFMb2FkZXIiLCJpc1ZhbGlkSUQiLCJnZXRJRFR5cGUiLCJmaWVsZEFmZmVjdHNEYXRhIiwiYmF0Y2hBbmRMb2FkRG9jcyIsInJlcSIsImtleXMiLCJwYXlsb2FkIiwiZG9jcyIsImJhdGNoQnlGaW5kQXJncyIsInJlc3VsdHMiLCJtYXAiLCJyZWR1Y2UiLCJiYXRjaGVzIiwia2V5IiwiaWRGaWVsZCIsIkpTT04iLCJwYXJzZSIsInRyYW5zYWN0aW9uSUQiLCJjb2xsZWN0aW9uIiwiaWQiLCJkZXB0aCIsImN1cnJlbnREZXB0aCIsImxvY2FsZSIsImZhbGxiYWNrTG9jYWxlIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwiYmF0Y2hLZXlBcnJheSIsImJhdGNoS2V5Iiwic3RyaW5naWZ5IiwiY29sbGVjdGlvbnMiLCJjb25maWciLCJmaWVsZHMiLCJmaW5kIiwiZmllbGQiLCJuYW1lIiwic2FuaXRpemVkSUQiLCJ0eXBlIiwicGFyc2VGbG9hdCIsIk9iamVjdCIsImVudHJpZXMiLCJpZHMiLCJyZXN1bHQiLCJwYWdpbmF0aW9uIiwid2hlcmUiLCJpbiIsIkJvb2xlYW4iLCJkaXNhYmxlRXJyb3JzIiwiZm9yRWFjaCIsImRvYyIsImRvY0tleSIsImRvY3NJbmRleCIsImZpbmRJbmRleCIsIlByb21pc2UiLCJhbGwiLCJnZXREYXRhTG9hZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxnQkFBaUMsYUFBYTtBQUdyRCxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsU0FBU0MsZ0JBQWdCLFFBQVEseUJBQXlCO0FBRTFELHNFQUFzRTtBQUV0RSxrRkFBa0Y7QUFDbEYsZ0VBQWdFO0FBQ2hFLHlGQUF5RjtBQUV6RixxRkFBcUY7QUFDckYsbUVBQW1FO0FBRW5FLElBQU1DLG1CQUFtQixTQUFDQzs7bUJBQXlELG9CQUFBLFNBQU9DO2dCQUNoRkMsU0FJRkMsTUFrQkFDLGlCQW9DQUM7Ozs7d0JBMURFSCxVQUFZRixJQUFaRTt3QkFJRkMsT0FBOEJGLEtBQUtLLEdBQUcsQ0FBQzttQ0FBTTs7d0JBa0I3Q0Ysa0JBQWtCSCxLQUFLTSxNQUFNLENBQUMsU0FBQ0MsU0FBU0M7Z0NBZ0I1QlAsc0JBSVpROzRCQW5CSixJQUF1SEMsK0JBQUFBLEtBQUtDLEtBQUssQ0FBQ0gsVUFBM0hJLGdCQUFnSEYs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