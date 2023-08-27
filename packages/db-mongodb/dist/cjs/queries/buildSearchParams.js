"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildSearchParam", {
    enumerable: true,
    get: function() {
        return buildSearchParam;
    }
});
var _mongoose = /*#__PURE__*/ _interop_require_default(require("mongoose"));
var _bsonobjectid = /*#__PURE__*/ _interop_require_default(require("bson-objectid"));
var _database = require("payload/database");
var _types = require("payload/types");
var _operatorMap = require("./operatorMap");
var _sanitizeQueryValue = require("./sanitizeQueryValue");
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
var subQueryOptions = {
    limit: 50,
    lean: true
};
function buildSearchParam(_) {
    return _buildSearchParam.apply(this, arguments);
}
function _buildSearchParam() {
    _buildSearchParam = _async_to_generator(function(param) {
        var fields, incomingPath, val, operator, collectionSlug, globalSlug, payload, locale, sanitizedPath, paths, hasCustomID, _payload_collections_collectionSlug, customIDfield, idFieldType, _customIDfield, _customIDfield1, _paths, _paths_, path, field, formattedValue, pathsToQuery, initialRelationshipQuery, relationshipQuery, operatorKey, hasNumberIDRelation, result, words, result1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fields = param.fields, incomingPath = param.incomingPath, val = param.val, operator = param.operator, collectionSlug = param.collectionSlug, globalSlug = param.globalSlug, payload = param.payload, locale = param.locale;
                    sanitizedPath = incomingPath.replace(/__/gi, ".");
                    if (sanitizedPath === "id") sanitizedPath = "_id";
                    paths = [];
                    hasCustomID = false;
                    if (!(sanitizedPath === "_id")) return [
                        3,
                        1
                    ];
                    customIDfield = (_payload_collections_collectionSlug = payload.collections[collectionSlug]) === null || _payload_collections_collectionSlug === void 0 ? void 0 : _payload_collections_collectionSlug.config.fields.find(function(field) {
                        return (0, _types.fieldAffectsData)(field) && field.name === "id";
                    });
                    idFieldType = "text";
                    if (customIDfield) {
                        ;
                        if (((_customIDfield = customIDfield) === null || _customIDfield === void 0 ? void 0 : _customIDfield.type) === "text" || ((_customIDfield1 = customIDfield) === null || _customIDfield1 === void 0 ? void 0 : _customIDfield1.type) === "number") {
                            idFieldType = customIDfield.type;
                        }
                        hasCustomID = true;
                    }
                    paths.push({
                        path: "_id",
                        field: {
                            name: "id",
                            type: idFieldType
                        },
                        complete: true,
                        collectionSlug: collectionSlug
                    });
                    return [
                        3,
                        3
                    ];
                case 1:
                    return [
                        4,
                        (0, _database.getLocalizedPaths)({
                            payload: payload,
                            locale: locale,
                            collectionSlug: collectionSlug,
                            globalSlug: globalSlug,
                            fields: fields,
                            incomingPath: sanitizedPath
                        })
                    ];
                case 2:
                    paths = _state.sent();
                    _state.label = 3;
                case 3:
                    _paths = _sliced_to_array(paths, 1), _paths_ = _paths[0], path = _paths_.path, field = _paths_.field;
                    if (!path) return [
                        3,
                        6
                    ];
                    formattedValue = (0, _sanitizeQueryValue.sanitizeQueryValue)({
                        field: field,
                        path: path,
                        operator: operator,
                        val: val,
                        hasCustomID: hasCustomID
                    });
                    if (!(paths.length > 1)) return [
                        3,
                        5
                    ];
                    pathsToQuery = paths.slice(1).reverse();
                    initialRelationshipQuery = {
                        value: {}
                    };
                    return [
                        4,
                        pathsToQuery.reduce(function() {
                            var _ref = _async_to_generator(function(priorQuery, param, i) {
                                var subPath, slug, priorQueryResult, SubModel, subQuery, result, $in, nextSubPath, subQuery1, result1, $in1;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            subPath = param.path, slug = param.collectionSlug;
                                            return [
                                                4,
                                                priorQuery
                                            ];
                                        case 1:
                                            priorQueryResult = _state.sent();
                                            SubModel = payload.db.collections[slug];
                                            if (!(i === 0)) return [
                                                3,
                                                4
                                            ];
                                            return [
                                                4,
                                                SubModel.buildQuery({
                                                    where: _define_property({}, subPath, _define_property({}, operator, val)),
                                                    payload: payload,
                                                    locale: locale
                                                })
                                            ];
                                        case 2:
                                            subQuery = _state.sent();
                                            return [
                                                4,
                                                SubModel.find(subQuery, subQueryOptions)
                                            ];
                                        case 3:
                                            result = _state.sent();
                                            $in = [];
                                            result.forEach(function(doc) {
                                                var stringID = doc._id.toString();
                                                $in.push(stringID);
                                                if (_mongoose.default.Types.ObjectId.isValid(stringID)) {
                                                    $in.push(doc._id);
                                                }
                                            });
                                            if (pathsToQuery.length === 1) {
                                                return [
                                                    2,
                                                    {
                                                        path: path,
                                                        value: {
                                                            $in: $in
                                                        }
                                                    }
                                                ];
                                            }
                                            nextSubPath = pathsToQuery[i + 1].path;
                                            return [
                                                2,
                                                {
                                                    value: _define_property({}, nextSubPath, {
                                                        $in: $in
                                                    })
                                                }
                                            ];
                                        case 4:
                                            subQuery1 = priorQueryResult.value;
                                            return [
                                                4,
                                                SubModel.find(subQuery1, subQueryOptions)
                                            ];
                                        case 5:
                                            result1 = _state.sent();
                                            $in1 = result1.map(function(doc) {
                                                return doc._id.toString();
                                            });
                                            // If it is the last recursion
                                            // then pass through the search param
                                            if (i + 1 === pathsToQuery.length) {
                                                return [
                                                    2,
                                                    {
                                                        path: path,
                                                        value: {
                                                            $in: $in1
                                                        }
                                                    }
                                                ];
                                            }
                                            return [
                                                2,
                                                {
                                                    value: {
                                                        _id: {
                                                            $in: $in1
                                                        }
                                                    }
                                                }
                                            ];
                                    }
                                });
                            });
                            return function(priorQuery, _, i) {
                                return _ref.apply(this, arguments);
                            };
                        }(), Promise.resolve(initialRelationshipQuery))
                    ];
                case 4:
                    relationshipQuery = _state.sent();
                    return [
                        2,
                        relationshipQuery
                    ];
                case 5:
                    if (operator && _types.validOperators.includes(operator)) {
                        operatorKey = _operatorMap.operatorMap[operator];
                        if (field.type === "relationship" || field.type === "upload") {
                            ;
                            result = {
                                value: {
                                    $or: [
                                        _define_property({}, path, _define_property({}, operatorKey, formattedValue))
                                    ]
                                }
                            };
                            if (typeof formattedValue === "string") {
                                if (_mongoose.default.Types.ObjectId.isValid(formattedValue)) {
                                    result.value.$or.push(_define_property({}, path, _define_property({}, operatorKey, (0, _bsonobjectid.default)(formattedValue))));
                                } else {
                                    (Array.isArray(field.relationTo) ? field.relationTo : [
                                        field.relationTo
                                    ]).forEach(function(relationTo) {
                                        var _payload_collections_relationTo_config, _payload_collections_relationTo;
                                        var isRelatedToCustomNumberID = (_payload_collections_relationTo = payload.collections[relationTo]) === null || _payload_collections_relationTo === void 0 ? void 0 : (_payload_collections_relationTo_config = _payload_collections_relationTo.config) === null || _payload_collections_relationTo_config === void 0 ? void 0 : _payload_collections_relationTo_config.fields.find(function(relatedField) {
                                            return (0, _types.fieldAffectsData)(relatedField) && relatedField.name === "id" && relatedField.type === "number";
                                        });
                                        if (isRelatedToCustomNumberID) {
                                            if (isRelatedToCustomNumberID.type === "number") hasNumberIDRelation = true;
                                        }
                                    });
                                    if (hasNumberIDRelation) result.value.$or.push(_define_property({}, path, _define_property({}, operatorKey, parseFloat(formattedValue))));
                                }
                            }
                            if (result.value.$or.length > 1) {
                                return [
                                    2,
                                    result
                                ];
                            }
                        }
                        if (operator === "like" && typeof formattedValue === "string") {
                            words = formattedValue.split(" ");
                            result1 = {
                                value: {
                                    $and: words.map(function(word) {
                                        return _define_property({}, path, {
                                            $regex: word.replace(/[\\^$*+?\\.()|[\]{}]/g, "\\$&"),
                                            $options: "i"
                                        });
                                    })
                                }
                            };
                            return [
                                2,
                                result1
                            ];
                        }
                        // Some operators like 'near' need to define a full query
                        // so if there is no operator key, just return the value
                        if (!operatorKey) {
                            return [
                                2,
                                {
                                    path: path,
                                    value: formattedValue
                                }
                            ];
                        }
                        return [
                            2,
                            {
                                path: path,
                                value: _define_property({}, operatorKey, formattedValue)
                            }
                        ];
                    }
                    _state.label = 6;
                case 6:
                    return [
                        2,
                        undefined
                    ];
            }
        });
    });
    return _buildSearchParam.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9xdWVyaWVzL2J1aWxkU2VhcmNoUGFyYW1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgb2JqZWN0SUQgZnJvbSAnYnNvbi1vYmplY3RpZCc7XG5pbXBvcnQgeyBnZXRMb2NhbGl6ZWRQYXRocyB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHsgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCB7IFBhdGhUb1F1ZXJ5IH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgeyB2YWxpZE9wZXJhdG9ycyB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJ3BheWxvYWQnO1xuaW1wb3J0IHsgT3BlcmF0b3IgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCB7IG9wZXJhdG9yTWFwIH0gZnJvbSAnLi9vcGVyYXRvck1hcCc7XG5pbXBvcnQgeyBzYW5pdGl6ZVF1ZXJ5VmFsdWUgfSBmcm9tICcuL3Nhbml0aXplUXVlcnlWYWx1ZSc7XG5pbXBvcnQgeyBNb25nb29zZUFkYXB0ZXIgfSBmcm9tICcuLic7XG5cbnR5cGUgU2VhcmNoUGFyYW0gPSB7XG4gIHBhdGg/OiBzdHJpbmcsXG4gIHZhbHVlOiB1bmtub3duLFxufVxuXG5jb25zdCBzdWJRdWVyeU9wdGlvbnMgPSB7XG4gIGxpbWl0OiA1MCxcbiAgbGVhbjogdHJ1ZSxcbn07XG5cbi8qKlxuICogQ29udmVydCB0aGUgUGF5bG9hZCBrZXkgLyB2YWx1ZSAvIG9wZXJhdG9yIGludG8gYSBNb25nb0RCIHF1ZXJ5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZFNlYXJjaFBhcmFtKHtcbiAgZmllbGRzLFxuICBpbmNvbWluZ1BhdGgsXG4gIHZhbCxcbiAgb3BlcmF0b3IsXG4gIGNvbGxlY3Rpb25TbHVnLFxuICBnbG9iYWxTbHVnLFxuICBwYXlsb2FkLFxuICBsb2NhbGUsXG59OiB7XG4gIGZpZWxkczogRmllbGRbXSxcbiAgaW5jb21pbmdQYXRoOiBzdHJpbmcsXG4gIHZhbDogdW5rbm93bixcbiAgb3BlcmF0b3I6IHN0cmluZ1xuICBjb2xsZWN0aW9uU2x1Zz86IHN0cmluZyxcbiAgZ2xvYmFsU2x1Zz86IHN0cmluZyxcbiAgcGF5bG9hZDogUGF5bG9hZCxcbiAgbG9jYWxlPzogc3RyaW5nXG59KTogUHJvbWlzZTxTZWFyY2hQYXJhbT4ge1xuICAvLyBSZXBsYWNlIEdyYXBoUUwgbmVzdGVkIGZpZWxkIGRvdWJsZSB1bmRlcnNjb3JlIGZvcm1hdHRpbmdcbiAgbGV0IHNhbml0aXplZFBhdGggPSBpbmNvbWluZ1BhdGgucmVwbGFjZSgvX18vZ2ksICcuJyk7XG4gIGlmIChzYW5pdGl6ZWRQYXRoID09PSAnaWQnKSBzYW5pdGl6ZWRQYXRoID0gJ19pZCc7XG5cbiAgbGV0IHBhdGhzOiBQYXRoVG9RdWVyeVtdID0gW107XG5cbiAgbGV0IGhhc0N1c3RvbUlEID0gZmFsc2U7XG5cbiAgaWYgKHNhbml0aXplZFBhdGggPT09ICdfaWQnKSB7XG4gICAgY29uc3QgY3VzdG9tSURmaWVsZCA9IHBheWxvYWQuY29sbGVjdGlvbnNbY29sbGVjdGlvblNsdWddPy5jb25maWcuZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKTtcblxuICAgIGxldCBpZEZpZWxkVHlwZTogJ3RleHQnIHwgJ251bWJlcicgPSAndGV4dCc7XG5cbiAgICBpZiAoY3VzdG9tSURmaWVsZCkge1xuICAgICAgaWYgKGN1c3RvbUlEZmllbGQ/LnR5cGUgPT09ICd0ZXh0JyB8fCBjdXN0b21JRGZpZWxkPy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZEZpZWxkVHlwZSA9IGN1c3RvbUlEZmllbGQudHlwZTtcbiAgICAgIH1cblxuICAgICAgaGFzQ3VzdG9tSUQgPSB0cnVlO1xuICAgIH1cblxuICAgIHBhdGhzLnB1c2goe1xuICAgICAgcGF0aDogJ19pZCcsXG4gICAgICBmaWVsZDoge1xuICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICB0eXBlOiBpZEZpZWxkVHlwZSxcbiAgICAgIH0gYXMgRmllbGQsXG4gICAgICBjb21wbGV0ZTogdHJ1ZSxcbiAgICAgIGNvbGxlY3Rpb25TbHVnLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHBhdGhzID0gYXdhaXQgZ2V0TG9jYWxpemVkUGF0aHMoe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGNvbGxlY3Rpb25TbHVnLFxuICAgICAgZ2xvYmFsU2x1ZyxcbiAgICAgIGZpZWxkcyxcbiAgICAgIGluY29taW5nUGF0aDogc2FuaXRpemVkUGF0aCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IFt7XG4gICAgcGF0aCxcbiAgICBmaWVsZCxcbiAgfV0gPSBwYXRocztcblxuICBpZiAocGF0aCkge1xuICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gc2FuaXRpemVRdWVyeVZhbHVlKHtcbiAgICAgIGZpZWxkLFxuICAgICAgcGF0aCxcbiAgICAgIG9wZXJhdG9yLFxuICAgICAgdmFsLFxuICAgICAgaGFzQ3VzdG9tSUQsXG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgY29sbGVjdGlvbnMgdG8gc2VhcmNoIHRocm91Z2gsXG4gICAgLy8gUmVjdXJzaXZlbHkgYnVpbGQgdXAgYSBsaXN0IG9mIHF1ZXJ5IGNvbnN0cmFpbnRzXG4gICAgaWYgKHBhdGhzLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIFJlbW92ZSB0b3AgY29sbGVjdGlvbiBhbmQgcmV2ZXJzZSBhcnJheVxuICAgICAgLy8gdG8gd29yayBiYWNrd2FyZHMgZnJvbSB0b3BcbiAgICAgIGNvbnN0IHBhdGhzVG9RdWVyeSA9IHBhdGhzLnNsaWNlKDEpXG4gICAgICAgIC5yZXZlcnNlKCk7XG5cbiAgICAgIGNvbnN0IGluaXRpYWxSZWxhdGlvbnNoaXBRdWVyeSA9IHtcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSBhcyBTZWFyY2hQYXJhbTtcblxuICAgICAgY29uc3QgcmVsYXRpb25zaGlwUXVlcnkgPSBhd2FpdCBwYXRoc1RvUXVlcnkucmVkdWNlKGFzeW5jIChwcmlvclF1ZXJ5LCB7XG4gICAgICAgIHBhdGg6IHN1YlBhdGgsXG4gICAgICAgIGNvbGxlY3Rpb25TbHVnOiBzbHVnLFxuICAgICAgfSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBwcmlvclF1ZXJ5UmVzdWx0ID0gYXdhaXQgcHJpb3JRdWVyeTtcblxuICAgICAgICBjb25zdCBTdWJNb2RlbCA9IChwYXlsb2FkLmRiIGFzIE1vbmdvb3NlQWRhcHRlcikuY29sbGVjdGlvbnNbc2x1Z107XG5cbiAgICAgICAgLy8gT24gdGhlIFwiZGVlcGVzdFwiIGNvbGxlY3Rpb24sXG4gICAgICAgIC8vIFNlYXJjaCBvbiB0aGUgdmFsdWUgcGFzc2VkIHRocm91Z2ggdGhlIHF1ZXJ5XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgc3ViUXVlcnkgPSBhd2FpdCBTdWJNb2RlbC5idWlsZFF1ZXJ5KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIFtzdWJQYXRoXToge1xuICAgICAgICAgICAgICAgIFtvcGVyYXRvcl06IHZhbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3ViTW9kZWwuZmluZChzdWJRdWVyeSwgc3ViUXVlcnlPcHRpb25zKTtcblxuICAgICAgICAgIGNvbnN0ICRpbjogdW5rbm93bltdID0gW107XG5cbiAgICAgICAgICByZXN1bHQuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdJRCA9IGRvYy5faWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICRpbi5wdXNoKHN0cmluZ0lEKTtcblxuICAgICAgICAgICAgaWYgKG1vbmdvb3NlLlR5cGVzLk9iamVjdElkLmlzVmFsaWQoc3RyaW5nSUQpKSB7XG4gICAgICAgICAgICAgICRpbi5wdXNoKGRvYy5faWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHBhdGhzVG9RdWVyeS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgIHZhbHVlOiB7ICRpbiB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBuZXh0U3ViUGF0aCA9IHBhdGhzVG9RdWVyeVtpICsgMV0ucGF0aDtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogeyBbbmV4dFN1YlBhdGhdOiB7ICRpbiB9IH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YlF1ZXJ5ID0gcHJpb3JRdWVyeVJlc3VsdC52YWx1ZTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3ViTW9kZWwuZmluZChzdWJRdWVyeSwgc3ViUXVlcnlPcHRpb25zKTtcblxuICAgICAgICBjb25zdCAkaW4gPSByZXN1bHQubWFwKChkb2MpID0+IGRvYy5faWQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgdGhlIGxhc3QgcmVjdXJzaW9uXG4gICAgICAgIC8vIHRoZW4gcGFzcyB0aHJvdWdoIHRoZSBzZWFyY2ggcGFyYW1cbiAgICAgICAgaWYgKGkgKyAxID09PSBwYXRoc1RvUXVlcnkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB2YWx1ZTogeyAkaW4gfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgX2lkOiB7ICRpbiB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LCBQcm9taXNlLnJlc29sdmUoaW5pdGlhbFJlbGF0aW9uc2hpcFF1ZXJ5KSk7XG5cbiAgICAgIHJldHVybiByZWxhdGlvbnNoaXBRdWVyeTtcbiAgICB9XG5cbiAgICBpZiAob3BlcmF0b3IgJiYgdmFsaWRPcGVyYXRvcnMuaW5jbHVkZXMob3BlcmF0b3IgYXMgT3BlcmF0b3IpKSB7XG4gICAgICBjb25zdCBvcGVyYXRvcktleSA9IG9wZXJhdG9yTWFwW29wZXJhdG9yXTtcblxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyZWxhdGlvbnNoaXAnIHx8IGZpZWxkLnR5cGUgPT09ICd1cGxvYWQnKSB7XG4gICAgICAgIGxldCBoYXNOdW1iZXJJRFJlbGF0aW9uO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgJG9yOiBbXG4gICAgICAgICAgICAgIHsgW3BhdGhdOiB7IFtvcGVyYXRvcktleV06IGZvcm1hdHRlZFZhbHVlIH0gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlZFZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChtb25nb29zZS5UeXBlcy5PYmplY3RJZC5pc1ZhbGlkKGZvcm1hdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlLiRvci5wdXNoKHsgW3BhdGhdOiB7IFtvcGVyYXRvcktleV06IG9iamVjdElEKGZvcm1hdHRlZFZhbHVlKSB9IH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAoQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSA/IGZpZWxkLnJlbGF0aW9uVG8gOiBbZmllbGQucmVsYXRpb25Ub10pLmZvckVhY2goKHJlbGF0aW9uVG8pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNSZWxhdGVkVG9DdXN0b21OdW1iZXJJRCA9IHBheWxvYWQuY29sbGVjdGlvbnNbcmVsYXRpb25Ub10/LmNvbmZpZz8uZmllbGRzLmZpbmQoKHJlbGF0ZWRGaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZEFmZmVjdHNEYXRhKHJlbGF0ZWRGaWVsZCkgJiYgcmVsYXRlZEZpZWxkLm5hbWUgPT09ICdpZCcgJiYgcmVsYXRlZEZpZWxkLnR5cGUgPT09ICdudW1iZXInO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoaXNSZWxhdGVkVG9DdXN0b21OdW1iZXJJRCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlbGF0ZWRUb0N1c3RvbU51bWJlcklELnR5cGUgPT09ICdudW1iZXInKSBoYXNOdW1iZXJJRFJlbGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChoYXNOdW1iZXJJRFJlbGF0aW9uKSByZXN1bHQudmFsdWUuJG9yLnB1c2goeyBbcGF0aF06IHsgW29wZXJhdG9yS2V5XTogcGFyc2VGbG9hdChmb3JtYXR0ZWRWYWx1ZSkgfSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlLiRvci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3BlcmF0b3IgPT09ICdsaWtlJyAmJiB0eXBlb2YgZm9ybWF0dGVkVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHdvcmRzID0gZm9ybWF0dGVkVmFsdWUuc3BsaXQoJyAnKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICRhbmQ6IHdvcmRzLm1hcCgod29yZCkgPT4gKHtcbiAgICAgICAgICAgICAgW3BhdGhdOiB7XG4gICAgICAgICAgICAgICAgJHJlZ2V4OiB3b3JkLnJlcGxhY2UoL1tcXFxcXiQqKz9cXFxcLigpfFtcXF17fV0vZywgJ1xcXFwkJicpLFxuICAgICAgICAgICAgICAgICRvcHRpb25zOiAnaScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvLyBTb21lIG9wZXJhdG9ycyBsaWtlICduZWFyJyBuZWVkIHRvIGRlZmluZSBhIGZ1bGwgcXVlcnlcbiAgICAgIC8vIHNvIGlmIHRoZXJlIGlzIG5vIG9wZXJhdG9yIGtleSwganVzdCByZXR1cm4gdGhlIHZhbHVlXG4gICAgICBpZiAoIW9wZXJhdG9yS2V5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHZhbHVlOiB7IFtvcGVyYXRvcktleV06IGZvcm1hdHRlZFZhbHVlIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbImJ1aWxkU2VhcmNoUGFyYW0iLCJzdWJRdWVyeU9wdGlvbnMiLCJsaW1pdCIsImxlYW4iLCJmaWVsZHMiLCJpbmNvbWluZ1BhdGgiLCJ2YWwiLCJvcGVyYXRvciIsImNvbGxlY3Rpb25TbHVnIiwiZ2xvYmFsU2x1ZyIsInBheWxvYWQiLCJsb2NhbGUiLCJzYW5pdGl6ZWRQYXRoIiwicGF0aHMiLCJoYXNDdXN0b21JRCIsImN1c3RvbUlEZmllbGQiLCJpZEZpZWxkVHlwZSIsInBhdGgiLCJmaWVsZCIsImZvcm1hdHRlZFZhbHVlIiwicGF0aHNUb1F1ZXJ5IiwiaW5pdGlhbFJlbGF0aW9uc2hpcFF1ZXJ5IiwicmVsYXRpb25zaGlwUXVlcnkiLCJvcGVyYXRvcktleSIsImhhc051bWJlcklEUmVsYXRpb24iLCJyZXN1bHQiLCJ3b3JkcyIsInJlcGxhY2UiLCJjb2xsZWN0aW9ucyIsImNvbmZpZyIsImZpbmQiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSIsInR5cGUiLCJwdXNoIiwiY29tcGxldGUiLCJnZXRMb2NhbGl6ZWRQYXRocyIsInNhbml0aXplUXVlcnlWYWx1ZSIsImxlbmd0aCIsInNsaWNlIiwicmV2ZXJzZSIsInZhbHVlIiwicmVkdWNlIiwicHJpb3JRdWVyeSIsImkiLCJzdWJQYXRoIiwic2x1ZyIsInByaW9yUXVlcnlSZXN1bHQiLCJTdWJNb2RlbCIsInN1YlF1ZXJ5IiwiJGluIiwibmV4dFN1YlBhdGgiLCJkYiIsImJ1aWxkUXVlcnkiLCJ3aGVyZSIsImZvckVhY2giLCJkb2MiLCJzdHJpbmdJRCIsIl9pZCIsInRvU3RyaW5nIiwibW9uZ29vc2UiLCJUeXBlcyIsIk9iamVjdElkIiwiaXNWYWxpZCIsIm1hcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidmFsaWRPcGVyYXRvcnMiLCJpbmNsdWRlcyIsIm9wZXJhdG9yTWFwIiwiJG9yIiwib2JqZWN0SUQiLCJBcnJheSIsImlzQXJyYXkiLCJyZWxhdGlvblRvIiwiaXNSZWxhdGVkVG9DdXN0b21OdW1iZXJJRCIsInJlbGF0ZWRGaWVsZCIsInBhcnNlRmxvYXQiLCJzcGxpdCIsIiRhbmQiLCJ3b3JkIiwiJHJlZ2V4IiwiJG9wdGlvbnMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBeUJzQkE7OztlQUFBQTs7OytEQXpCRDttRUFDQTt3QkFDYTtxQkFDTTsyQkFLWjtrQ0FDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5DLElBQU1DLGtCQUFrQjtJQUN0QkMsT0FBTztJQUNQQyxNQUFNO0FBQ1I7U0FLc0JILGlCQUFpQixDQWtCdEM7V0FsQnFCQTs7U0FBQUE7SUFBQUEsb0JBQWYsb0JBQUEsU0FBZ0MsS0FrQnRDO1lBakJDSSxRQUNBQyxjQUNBQyxLQUNBQyxVQUNBQyxnQkFDQUMsWUFDQUMsU0FDQUMsUUFZSUMsZUFHQUMsT0FFQUMsYUFHb0JKLHFDQUFoQkssZUFFRkMsYUFHRUQsZ0JBQWtDQSxpQkE4QnJDRixpQkFGSEksTUFDQUMsT0FJTUMsZ0JBYUVDLGNBR0FDLDBCQUlBQyxtQkF5RUFDLGFBR0FDLHFCQUVFQyxRQWdDQUMsT0FFQUQ7Ozs7b0JBck1ackIsU0FEcUMsTUFDckNBLFFBQ0FDLGVBRnFDLE1BRXJDQSxjQUNBQyxNQUhxQyxNQUdyQ0EsS0FDQUMsV0FKcUMsTUFJckNBLFVBQ0FDLGlCQUxxQyxNQUtyQ0EsZ0JBQ0FDLGFBTnFDLE1BTXJDQSxZQUNBQyxVQVBxQyxNQU9yQ0EsU0FDQUMsU0FScUMsTUFRckNBO29CQVlJQyxnQkFBZ0JQLGFBQWFzQixPQUFPLENBQUMsUUFBUTtvQkFDakQsSUFBSWYsa0JBQWtCLE1BQU1BLGdCQUFnQjtvQkFFeENDO29CQUVBQyxjQUFjO3lCQUVkRixDQUFBQSxrQkFBa0IsS0FBSSxHQUF0QkE7Ozs7b0JBQ0lHLGlCQUFnQkwsc0NBQUFBLFFBQVFrQixXQUFXLENBQUNwQixlQUFlLGNBQW5DRSwwREFBQUEsb0NBQXFDbUIsTUFBTSxDQUFDekIsTUFBTSxDQUFDMEIsSUFBSSxDQUFDLFNBQUNaOytCQUFVYSxJQUFBQSx1QkFBZ0IsRUFBQ2IsVUFBVUEsTUFBTWMsSUFBSSxLQUFLOztvQkFFL0hoQixjQUFpQztvQkFFckMsSUFBSUQsZUFBZTs7d0JBQ2pCLElBQUlBLEVBQUFBLGlCQUFBQSwyQkFBQUEscUNBQUFBLGVBQWVrQixJQUFJLE1BQUssVUFBVWxCLEVBQUFBLGtCQUFBQSwyQkFBQUEsc0NBQUFBLGdCQUFla0IsSUFBSSxNQUFLLFVBQVU7NEJBQ3RFakIsY0FBY0QsY0FBY2tCLElBQUk7d0JBQ2xDO3dCQUVBbkIsY0FBYztvQkFDaEI7b0JBRUFELE1BQU1xQixJQUFJLENBQUM7d0JBQ1RqQixNQUFNO3dCQUNOQyxPQUFPOzRCQUNMYyxNQUFNOzRCQUNOQyxNQUFNakI7d0JBQ1I7d0JBQ0FtQixVQUFVO3dCQUNWM0IsZ0JBQUFBO29CQUNGOzs7Ozs7b0JBRVE7O3dCQUFNNEIsSUFBQUEsMkJBQWlCLEVBQUM7NEJBQzlCMUIsU0FBQUE7NEJBQ0FDLFFBQUFBOzRCQUNBSCxnQkFBQUE7NEJBQ0FDLFlBQUFBOzRCQUNBTCxRQUFBQTs0QkFDQUMsY0FBY087d0JBQ2hCOzs7b0JBUEFDLFFBQVE7OztvQkFhTEEsMEJBQUFBLHFCQUFBQSxXQUZISSxlQUFBQSxNQUNBQyxnQkFBQUE7eUJBR0VELE1BQUFBOzs7O29CQUNJRSxpQkFBaUJrQixJQUFBQSxzQ0FBa0IsRUFBQzt3QkFDeENuQixPQUFBQTt3QkFDQUQsTUFBQUE7d0JBQ0FWLFVBQUFBO3dCQUNBRCxLQUFBQTt3QkFDQVEsYUFBQUE7b0JBQ0Y7eUJBSUlELENBQUFBLE1BQU15QixNQUFNLEdBQUcsQ0FBQSxHQUFmekI7Ozs7b0JBR0lPLGVBQWVQLE1BQU0wQixLQUFLLENBQUMsR0FDOUJDLE9BQU87b0JBRUpuQiwyQkFBMkI7d0JBQy9Cb0IsT0FBTyxDQUFDO29CQUNWO29CQUUwQjs7d0JBQU1yQixhQUFhc0IsTUFBTTt1Q0FBQyxvQkFBQSxTQUFPQyxtQkFHeERDO29DQUZLQyxTQUNVQyxNQUVWQyxrQkFFQUMsVUFLRUMsVUFVQXhCLFFBRUF5QixLQWtCQUMsYUFPRkYsV0FDQXhCLFNBRUF5Qjs7Ozs0Q0FsREFMLGdCQUFONUIsTUFDZ0I2QixhQUFoQnRDOzRDQUV5Qjs7Z0RBQU1tQzs7OzRDQUF6QkksbUJBQW1COzRDQUVuQkMsV0FBVyxBQUFDdEMsUUFBUTBDLEVBQUUsQ0FBcUJ4QixXQUFXLENBQUNrQixLQUFLO2lEQUk5REYsQ0FBQUEsTUFBTSxDQUFBLEdBQU5BOzs7OzRDQUNlOztnREFBTUksU0FBU0ssVUFBVSxDQUFDO29EQUN6Q0MsT0FDRSxxQkFBQ1QsU0FDQyxxQkFBQ3RDLFVBQVdEO29EQUdoQkksU0FBQUE7b0RBQ0FDLFFBQUFBO2dEQUNGOzs7NENBUk1zQyxXQUFXOzRDQVVGOztnREFBTUQsU0FBU2xCLElBQUksQ0FBQ21CLFVBQVVoRDs7OzRDQUF2Q3dCLFNBQVM7NENBRVR5Qjs0Q0FFTnpCLE9BQU84QixPQUFPLENBQUMsU0FBQ0M7Z0RBQ2QsSUFBTUMsV0FBV0QsSUFBSUUsR0FBRyxDQUFDQyxRQUFRO2dEQUNqQ1QsSUFBSWhCLElBQUksQ0FBQ3VCO2dEQUVULElBQUlHLGlCQUFRLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNOLFdBQVc7b0RBQzdDUCxJQUFJaEIsSUFBSSxDQUFDc0IsSUFBSUUsR0FBRztnREFDbEI7NENBQ0Y7NENBRUEsSUFBSXRDLGFBQWFrQixNQUFNLEtBQUssR0FBRztnREFDN0I7O29EQUFPO3dEQUNMckIsTUFBQUE7d0RBQ0F3QixPQUFPOzREQUFFUyxLQUFBQTt3REFBSTtvREFDZjs7NENBQ0Y7NENBRU1DLGNBQWMvQixZQUFZLENBQUN3QixJQUFJLEVBQUUsQ0FBQzNCLElBQUk7NENBRTVDOztnREFBTztvREFDTHdCLE9BQVMscUJBQUNVLGFBQWM7d0RBQUVELEtBQUFBO29EQUFJO2dEQUNoQzs7OzRDQUdJRCxZQUFXRixpQkFBaUJOLEtBQUs7NENBQ3hCOztnREFBTU8sU0FBU2xCLElBQUksQ0FBQ21CLFdBQVVoRDs7OzRDQUF2Q3dCLFVBQVM7NENBRVR5QixPQUFNekIsUUFBT3VDLEdBQUcsQ0FBQyxTQUFDUjt1REFBUUEsSUFBSUUsR0FBRyxDQUFDQyxRQUFROzs0Q0FFaEQsOEJBQThCOzRDQUM5QixxQ0FBcUM7NENBQ3JDLElBQUlmLElBQUksTUFBTXhCLGFBQWFrQixNQUFNLEVBQUU7Z0RBQ2pDOztvREFBTzt3REFDTHJCLE1BQUFBO3dEQUNBd0IsT0FBTzs0REFBRVMsS0FBQUE7d0RBQUk7b0RBQ2Y7OzRDQUNGOzRDQUVBOztnREFBTztvREFDTFQsT0FBTzt3REFDTGlCLEtBQUs7NERBQUVSLEtBQUFBO3dEQUFJO29EQUNiO2dEQUNGOzs7OzRCQUNGOzRDQW5FMkRQLGVBR3hEQzs7OzZCQWdFQXFCLFFBQVFDLE9BQU8sQ0FBQzdDOzs7b0JBbkViQyxvQkFBb0I7b0JBcUUxQjs7d0JBQU9BOzs7b0JBR1QsSUFBSWYsWUFBWTRELHFCQUFjLENBQUNDLFFBQVEsQ0FBQzdELFdBQXVCO3dCQUN2RGdCLGNBQWM4Qyx3QkFBVyxDQUFDOUQsU0FBUzt3QkFFekMsSUFBSVcsTUFBTWUsSUFBSSxLQUFLLGtCQUFrQmYsTUFBTWUsSUFBSSxLQUFLLFVBQVU7OzRCQUd0RFIsU0FBUztnQ0FDYmdCLE9BQU87b0NBQ0w2QixHQUFHO3dDQUNDLHFCQUFDckQsTUFBUyxxQkFBQ00sYUFBY0o7O2dDQUUvQjs0QkFDRjs0QkFFQSxJQUFJLE9BQU9BLG1CQUFtQixVQUFVO2dDQUN0QyxJQUFJeUMsaUJBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQzVDLGlCQUFpQjtvQ0FDbkRNLE9BQU9nQixLQUFLLENBQUM2QixHQUFHLENBQUNwQyxJQUFJLENBQUcscUJBQUNqQixNQUFTLHFCQUFDTSxhQUFjZ0QsSUFBQUEscUJBQVEsRUFBQ3BEO2dDQUM1RCxPQUFPO29DQUNKcUQsQ0FBQUEsTUFBTUMsT0FBTyxDQUFDdkQsTUFBTXdELFVBQVUsSUFBSXhELE1BQU13RCxVQUFVO3dDQUFJeEQsTUFBTXdELFVBQVU7cUNBQUEsRUFBR25CLE9BQU8sQ0FBQyxTQUFDbUI7NENBQy9DaEUsd0NBQUFBO3dDQUFsQyxJQUFNaUUsNkJBQTRCakUsa0NBQUFBLFFBQVFrQixXQUFXLENBQUM4QyxXQUFXLGNBQS9CaEUsdURBQUFBLHlDQUFBQSxnQ0FBaUNtQixNQUFNLGNBQXZDbkIsNkRBQUFBLHVDQUF5Q04sTUFBTSxDQUFDMEIsSUFBSSxDQUFDLFNBQUM4Qzs0Q0FDdEYsT0FBTzdDLElBQUFBLHVCQUFnQixFQUFDNkMsaUJBQWlCQSxhQUFhNUMsSUFBSSxLQUFLLFFBQVE0QyxhQUFhM0MsSUFBSSxLQUFLO3dDQUMvRjt3Q0FFQSxJQUFJMEMsMkJBQTJCOzRDQUM3QixJQUFJQSwwQkFBMEIxQyxJQUFJLEtBQUssVUFBVVQsc0JBQXNCO3dDQUN6RTtvQ0FDRjtvQ0FFQSxJQUFJQSxxQkFBcUJDLE9BQU9nQixLQUFLLENBQUM2QixHQUFHLENBQUNwQyxJQUFJLENBQUcscUJBQUNqQixNQUFTLHFCQUFDTSxhQUFjc0QsV0FBVzFEO2dDQUN2Rjs0QkFDRjs0QkFFQSxJQUFJTSxPQUFPZ0IsS0FBSyxDQUFDNkIsR0FBRyxDQUFDaEMsTUFBTSxHQUFHLEdBQUc7Z0NBQy9COztvQ0FBT2I7OzRCQUNUO3dCQUNGO3dCQUVBLElBQUlsQixhQUFhLFVBQVUsT0FBT1ksbUJBQW1CLFVBQVU7NEJBQ3ZETyxRQUFRUCxlQUFlMkQsS0FBSyxDQUFDOzRCQUU3QnJELFVBQVM7Z0NBQ2JnQixPQUFPO29DQUNMc0MsTUFBTXJELE1BQU1zQyxHQUFHLENBQUMsU0FBQ2dCOytDQUNmLHFCQUFDL0QsTUFBTzs0Q0FDTmdFLFFBQVFELEtBQUtyRCxPQUFPLENBQUMseUJBQXlCOzRDQUM5Q3VELFVBQVU7d0NBQ1o7O2dDQUVKOzRCQUNGOzRCQUVBOztnQ0FBT3pEOzt3QkFDVDt3QkFFQSx5REFBeUQ7d0JBQ3pELHdEQUF3RDt3QkFDeEQsSUFBSSxDQUFDRixhQUFhOzRCQUNoQjs7Z0NBQU87b0NBQ0xOLE1BQUFBO29DQUNBd0IsT0FBT3RCO2dDQUNUOzt3QkFDRjt3QkFFQTs7NEJBQU87Z0NBQ0xGLE1BQUFBO2dDQUNBd0IsT0FBUyxxQkFBQ2xCLGFBQWNKOzRCQUMxQjs7b0JBQ0Y7OztvQkFFRjs7d0JBQU9nRTs7OztJQUNUO1dBcE9zQm5GIn0=