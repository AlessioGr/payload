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
import mongoose from "mongoose";
import objectID from "bson-objectid";
import { getLocalizedPaths } from "payload/database";
import { fieldAffectsData } from "payload/types";
import { validOperators } from "payload/types";
import { operatorMap } from "./operatorMap";
import { sanitizeQueryValue } from "./sanitizeQueryValue";
var subQueryOptions = {
    limit: 50,
    lean: true
};
/**
 * Convert the Payload key / value / operator into a MongoDB query
 */ export function buildSearchParam(_) {
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
                        return fieldAffectsData(field) && field.name === "id";
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
                        getLocalizedPaths({
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
                    formattedValue = sanitizeQueryValue({
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
                                                if (mongoose.Types.ObjectId.isValid(stringID)) {
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
                    if (operator && validOperators.includes(operator)) {
                        operatorKey = operatorMap[operator];
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
                                if (mongoose.Types.ObjectId.isValid(formattedValue)) {
                                    result.value.$or.push(_define_property({}, path, _define_property({}, operatorKey, objectID(formattedValue))));
                                } else {
                                    (Array.isArray(field.relationTo) ? field.relationTo : [
                                        field.relationTo
                                    ]).forEach(function(relationTo) {
                                        var _payload_collections_relationTo_config, _payload_collections_relationTo;
                                        var isRelatedToCustomNumberID = (_payload_collections_relationTo = payload.collections[relationTo]) === null || _payload_collections_relationTo === void 0 ? void 0 : (_payload_collections_relationTo_config = _payload_collections_relationTo.config) === null || _payload_collections_relationTo_config === void 0 ? void 0 : _payload_collections_relationTo_config.fields.find(function(relatedField) {
                                            return fieldAffectsData(relatedField) && relatedField.name === "id" && relatedField.type === "number";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9xdWVyaWVzL2J1aWxkU2VhcmNoUGFyYW1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgb2JqZWN0SUQgZnJvbSAnYnNvbi1vYmplY3RpZCc7XG5pbXBvcnQgeyBnZXRMb2NhbGl6ZWRQYXRocyB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHsgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCB7IFBhdGhUb1F1ZXJ5IH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgeyB2YWxpZE9wZXJhdG9ycyB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJ3BheWxvYWQnO1xuaW1wb3J0IHsgT3BlcmF0b3IgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCB7IG9wZXJhdG9yTWFwIH0gZnJvbSAnLi9vcGVyYXRvck1hcCc7XG5pbXBvcnQgeyBzYW5pdGl6ZVF1ZXJ5VmFsdWUgfSBmcm9tICcuL3Nhbml0aXplUXVlcnlWYWx1ZSc7XG5pbXBvcnQgeyBNb25nb29zZUFkYXB0ZXIgfSBmcm9tICcuLic7XG5cbnR5cGUgU2VhcmNoUGFyYW0gPSB7XG4gIHBhdGg/OiBzdHJpbmcsXG4gIHZhbHVlOiB1bmtub3duLFxufVxuXG5jb25zdCBzdWJRdWVyeU9wdGlvbnMgPSB7XG4gIGxpbWl0OiA1MCxcbiAgbGVhbjogdHJ1ZSxcbn07XG5cbi8qKlxuICogQ29udmVydCB0aGUgUGF5bG9hZCBrZXkgLyB2YWx1ZSAvIG9wZXJhdG9yIGludG8gYSBNb25nb0RCIHF1ZXJ5XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZFNlYXJjaFBhcmFtKHtcbiAgZmllbGRzLFxuICBpbmNvbWluZ1BhdGgsXG4gIHZhbCxcbiAgb3BlcmF0b3IsXG4gIGNvbGxlY3Rpb25TbHVnLFxuICBnbG9iYWxTbHVnLFxuICBwYXlsb2FkLFxuICBsb2NhbGUsXG59OiB7XG4gIGZpZWxkczogRmllbGRbXSxcbiAgaW5jb21pbmdQYXRoOiBzdHJpbmcsXG4gIHZhbDogdW5rbm93bixcbiAgb3BlcmF0b3I6IHN0cmluZ1xuICBjb2xsZWN0aW9uU2x1Zz86IHN0cmluZyxcbiAgZ2xvYmFsU2x1Zz86IHN0cmluZyxcbiAgcGF5bG9hZDogUGF5bG9hZCxcbiAgbG9jYWxlPzogc3RyaW5nXG59KTogUHJvbWlzZTxTZWFyY2hQYXJhbT4ge1xuICAvLyBSZXBsYWNlIEdyYXBoUUwgbmVzdGVkIGZpZWxkIGRvdWJsZSB1bmRlcnNjb3JlIGZvcm1hdHRpbmdcbiAgbGV0IHNhbml0aXplZFBhdGggPSBpbmNvbWluZ1BhdGgucmVwbGFjZSgvX18vZ2ksICcuJyk7XG4gIGlmIChzYW5pdGl6ZWRQYXRoID09PSAnaWQnKSBzYW5pdGl6ZWRQYXRoID0gJ19pZCc7XG5cbiAgbGV0IHBhdGhzOiBQYXRoVG9RdWVyeVtdID0gW107XG5cbiAgbGV0IGhhc0N1c3RvbUlEID0gZmFsc2U7XG5cbiAgaWYgKHNhbml0aXplZFBhdGggPT09ICdfaWQnKSB7XG4gICAgY29uc3QgY3VzdG9tSURmaWVsZCA9IHBheWxvYWQuY29sbGVjdGlvbnNbY29sbGVjdGlvblNsdWddPy5jb25maWcuZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKTtcblxuICAgIGxldCBpZEZpZWxkVHlwZTogJ3RleHQnIHwgJ251bWJlcicgPSAndGV4dCc7XG5cbiAgICBpZiAoY3VzdG9tSURmaWVsZCkge1xuICAgICAgaWYgKGN1c3RvbUlEZmllbGQ/LnR5cGUgPT09ICd0ZXh0JyB8fCBjdXN0b21JRGZpZWxkPy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZEZpZWxkVHlwZSA9IGN1c3RvbUlEZmllbGQudHlwZTtcbiAgICAgIH1cblxuICAgICAgaGFzQ3VzdG9tSUQgPSB0cnVlO1xuICAgIH1cblxuICAgIHBhdGhzLnB1c2goe1xuICAgICAgcGF0aDogJ19pZCcsXG4gICAgICBmaWVsZDoge1xuICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICB0eXBlOiBpZEZpZWxkVHlwZSxcbiAgICAgIH0gYXMgRmllbGQsXG4gICAgICBjb21wbGV0ZTogdHJ1ZSxcbiAgICAgIGNvbGxlY3Rpb25TbHVnLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHBhdGhzID0gYXdhaXQgZ2V0TG9jYWxpemVkUGF0aHMoe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGNvbGxlY3Rpb25TbHVnLFxuICAgICAgZ2xvYmFsU2x1ZyxcbiAgICAgIGZpZWxkcyxcbiAgICAgIGluY29taW5nUGF0aDogc2FuaXRpemVkUGF0aCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IFt7XG4gICAgcGF0aCxcbiAgICBmaWVsZCxcbiAgfV0gPSBwYXRocztcblxuICBpZiAocGF0aCkge1xuICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gc2FuaXRpemVRdWVyeVZhbHVlKHtcbiAgICAgIGZpZWxkLFxuICAgICAgcGF0aCxcbiAgICAgIG9wZXJhdG9yLFxuICAgICAgdmFsLFxuICAgICAgaGFzQ3VzdG9tSUQsXG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgY29sbGVjdGlvbnMgdG8gc2VhcmNoIHRocm91Z2gsXG4gICAgLy8gUmVjdXJzaXZlbHkgYnVpbGQgdXAgYSBsaXN0IG9mIHF1ZXJ5IGNvbnN0cmFpbnRzXG4gICAgaWYgKHBhdGhzLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIFJlbW92ZSB0b3AgY29sbGVjdGlvbiBhbmQgcmV2ZXJzZSBhcnJheVxuICAgICAgLy8gdG8gd29yayBiYWNrd2FyZHMgZnJvbSB0b3BcbiAgICAgIGNvbnN0IHBhdGhzVG9RdWVyeSA9IHBhdGhzLnNsaWNlKDEpXG4gICAgICAgIC5yZXZlcnNlKCk7XG5cbiAgICAgIGNvbnN0IGluaXRpYWxSZWxhdGlvbnNoaXBRdWVyeSA9IHtcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSBhcyBTZWFyY2hQYXJhbTtcblxuICAgICAgY29uc3QgcmVsYXRpb25zaGlwUXVlcnkgPSBhd2FpdCBwYXRoc1RvUXVlcnkucmVkdWNlKGFzeW5jIChwcmlvclF1ZXJ5LCB7XG4gICAgICAgIHBhdGg6IHN1YlBhdGgsXG4gICAgICAgIGNvbGxlY3Rpb25TbHVnOiBzbHVnLFxuICAgICAgfSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBwcmlvclF1ZXJ5UmVzdWx0ID0gYXdhaXQgcHJpb3JRdWVyeTtcblxuICAgICAgICBjb25zdCBTdWJNb2RlbCA9IChwYXlsb2FkLmRiIGFzIE1vbmdvb3NlQWRhcHRlcikuY29sbGVjdGlvbnNbc2x1Z107XG5cbiAgICAgICAgLy8gT24gdGhlIFwiZGVlcGVzdFwiIGNvbGxlY3Rpb24sXG4gICAgICAgIC8vIFNlYXJjaCBvbiB0aGUgdmFsdWUgcGFzc2VkIHRocm91Z2ggdGhlIHF1ZXJ5XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgc3ViUXVlcnkgPSBhd2FpdCBTdWJNb2RlbC5idWlsZFF1ZXJ5KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIFtzdWJQYXRoXToge1xuICAgICAgICAgICAgICAgIFtvcGVyYXRvcl06IHZhbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3ViTW9kZWwuZmluZChzdWJRdWVyeSwgc3ViUXVlcnlPcHRpb25zKTtcblxuICAgICAgICAgIGNvbnN0ICRpbjogdW5rbm93bltdID0gW107XG5cbiAgICAgICAgICByZXN1bHQuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdJRCA9IGRvYy5faWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICRpbi5wdXNoKHN0cmluZ0lEKTtcblxuICAgICAgICAgICAgaWYgKG1vbmdvb3NlLlR5cGVzLk9iamVjdElkLmlzVmFsaWQoc3RyaW5nSUQpKSB7XG4gICAgICAgICAgICAgICRpbi5wdXNoKGRvYy5faWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHBhdGhzVG9RdWVyeS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgIHZhbHVlOiB7ICRpbiB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBuZXh0U3ViUGF0aCA9IHBhdGhzVG9RdWVyeVtpICsgMV0ucGF0aDtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogeyBbbmV4dFN1YlBhdGhdOiB7ICRpbiB9IH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YlF1ZXJ5ID0gcHJpb3JRdWVyeVJlc3VsdC52YWx1ZTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgU3ViTW9kZWwuZmluZChzdWJRdWVyeSwgc3ViUXVlcnlPcHRpb25zKTtcblxuICAgICAgICBjb25zdCAkaW4gPSByZXN1bHQubWFwKChkb2MpID0+IGRvYy5faWQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgdGhlIGxhc3QgcmVjdXJzaW9uXG4gICAgICAgIC8vIHRoZW4gcGFzcyB0aHJvdWdoIHRoZSBzZWFyY2ggcGFyYW1cbiAgICAgICAgaWYgKGkgKyAxID09PSBwYXRoc1RvUXVlcnkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB2YWx1ZTogeyAkaW4gfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgX2lkOiB7ICRpbiB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LCBQcm9taXNlLnJlc29sdmUoaW5pdGlhbFJlbGF0aW9uc2hpcFF1ZXJ5KSk7XG5cbiAgICAgIHJldHVybiByZWxhdGlvbnNoaXBRdWVyeTtcbiAgICB9XG5cbiAgICBpZiAob3BlcmF0b3IgJiYgdmFsaWRPcGVyYXRvcnMuaW5jbHVkZXMob3BlcmF0b3IgYXMgT3BlcmF0b3IpKSB7XG4gICAgICBjb25zdCBvcGVyYXRvcktleSA9IG9wZXJhdG9yTWFwW29wZXJhdG9yXTtcblxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyZWxhdGlvbnNoaXAnIHx8IGZpZWxkLnR5cGUgPT09ICd1cGxvYWQnKSB7XG4gICAgICAgIGxldCBoYXNOdW1iZXJJRFJlbGF0aW9uO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgJG9yOiBbXG4gICAgICAgICAgICAgIHsgW3BhdGhdOiB7IFtvcGVyYXRvcktleV06IGZvcm1hdHRlZFZhbHVlIH0gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlZFZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChtb25nb29zZS5UeXBlcy5PYmplY3RJZC5pc1ZhbGlkKGZvcm1hdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlLiRvci5wdXNoKHsgW3BhdGhdOiB7IFtvcGVyYXRvcktleV06IG9iamVjdElEKGZvcm1hdHRlZFZhbHVlKSB9IH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAoQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSA/IGZpZWxkLnJlbGF0aW9uVG8gOiBbZmllbGQucmVsYXRpb25Ub10pLmZvckVhY2goKHJlbGF0aW9uVG8pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNSZWxhdGVkVG9DdXN0b21OdW1iZXJJRCA9IHBheWxvYWQuY29sbGVjdGlvbnNbcmVsYXRpb25Ub10/LmNvbmZpZz8uZmllbGRzLmZpbmQoKHJlbGF0ZWRGaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZEFmZmVjdHNEYXRhKHJlbGF0ZWRGaWVsZCkgJiYgcmVsYXRlZEZpZWxkLm5hbWUgPT09ICdpZCcgJiYgcmVsYXRlZEZpZWxkLnR5cGUgPT09ICdudW1iZXInO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoaXNSZWxhdGVkVG9DdXN0b21OdW1iZXJJRCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlbGF0ZWRUb0N1c3RvbU51bWJlcklELnR5cGUgPT09ICdudW1iZXInKSBoYXNOdW1iZXJJRFJlbGF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChoYXNOdW1iZXJJRFJlbGF0aW9uKSByZXN1bHQudmFsdWUuJG9yLnB1c2goeyBbcGF0aF06IHsgW29wZXJhdG9yS2V5XTogcGFyc2VGbG9hdChmb3JtYXR0ZWRWYWx1ZSkgfSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LnZhbHVlLiRvci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3BlcmF0b3IgPT09ICdsaWtlJyAmJiB0eXBlb2YgZm9ybWF0dGVkVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHdvcmRzID0gZm9ybWF0dGVkVmFsdWUuc3BsaXQoJyAnKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICRhbmQ6IHdvcmRzLm1hcCgod29yZCkgPT4gKHtcbiAgICAgICAgICAgICAgW3BhdGhdOiB7XG4gICAgICAgICAgICAgICAgJHJlZ2V4OiB3b3JkLnJlcGxhY2UoL1tcXFxcXiQqKz9cXFxcLigpfFtcXF17fV0vZywgJ1xcXFwkJicpLFxuICAgICAgICAgICAgICAgICRvcHRpb25zOiAnaScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICAvLyBTb21lIG9wZXJhdG9ycyBsaWtlICduZWFyJyBuZWVkIHRvIGRlZmluZSBhIGZ1bGwgcXVlcnlcbiAgICAgIC8vIHNvIGlmIHRoZXJlIGlzIG5vIG9wZXJhdG9yIGtleSwganVzdCByZXR1cm4gdGhlIHZhbHVlXG4gICAgICBpZiAoIW9wZXJhdG9yS2V5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICB2YWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHZhbHVlOiB7IFtvcGVyYXRvcktleV06IGZvcm1hdHRlZFZhbHVlIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwib2JqZWN0SUQiLCJnZXRMb2NhbGl6ZWRQYXRocyIsImZpZWxkQWZmZWN0c0RhdGEiLCJ2YWxpZE9wZXJhdG9ycyIsIm9wZXJhdG9yTWFwIiwic2FuaXRpemVRdWVyeVZhbHVlIiwic3ViUXVlcnlPcHRpb25zIiwibGltaXQiLCJsZWFuIiwiYnVpbGRTZWFyY2hQYXJhbSIsImZpZWxkcyIsImluY29taW5nUGF0aCIsInZhbCIsIm9wZXJhdG9yIiwiY29sbGVjdGlvblNsdWciLCJnbG9iYWxTbHVnIiwicGF5bG9hZCIsImxvY2FsZSIsInNhbml0aXplZFBhdGgiLCJwYXRocyIsImhhc0N1c3RvbUlEIiwiY3VzdG9tSURmaWVsZCIsImlkRmllbGRUeXBlIiwicGF0aCIsImZpZWxkIiwiZm9ybWF0dGVkVmFsdWUiLCJwYXRoc1RvUXVlcnkiLCJpbml0aWFsUmVsYXRpb25zaGlwUXVlcnkiLCJyZWxhdGlvbnNoaXBRdWVyeSIsIm9wZXJhdG9yS2V5IiwiaGFzTnVtYmVySURSZWxhdGlvbiIsInJlc3VsdCIsIndvcmRzIiwicmVwbGFjZSIsImNvbGxlY3Rpb25zIiwiY29uZmlnIiwiZmluZCIsIm5hbWUiLCJ0eXBlIiwicHVzaCIsImNvbXBsZXRlIiwibGVuZ3RoIiwic2xpY2UiLCJyZXZlcnNlIiwidmFsdWUiLCJyZWR1Y2UiLCJwcmlvclF1ZXJ5IiwiaSIsInN1YlBhdGgiLCJzbHVnIiwicHJpb3JRdWVyeVJlc3VsdCIsIlN1Yk1vZGVsIiwic3ViUXVlcnkiLCIkaW4iLCJuZXh0U3ViUGF0aCIsImRiIiwiYnVpbGRRdWVyeSIsIndoZXJlIiwiZm9yRWFjaCIsImRvYyIsInN0cmluZ0lEIiwiX2lkIiwidG9TdHJpbmciLCJUeXBlcyIsIk9iamVjdElkIiwiaXNWYWxpZCIsIm1hcCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW5jbHVkZXMiLCIkb3IiLCJBcnJheSIsImlzQXJyYXkiLCJyZWxhdGlvblRvIiwiaXNSZWxhdGVkVG9DdXN0b21OdW1iZXJJRCIsInJlbGF0ZWRGaWVsZCIsInBhcnNlRmxvYXQiLCJzcGxpdCIsIiRhbmQiLCJ3b3JkIiwiJHJlZ2V4IiwiJG9wdGlvbnMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLGNBQWMsV0FBVztBQUNoQyxPQUFPQyxjQUFjLGdCQUFnQjtBQUNyQyxTQUFTQyxpQkFBaUIsUUFBUSxtQkFBbUI7QUFDckQsU0FBZ0JDLGdCQUFnQixRQUFRLGdCQUFnQjtBQUV4RCxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBRy9DLFNBQVNDLFdBQVcsUUFBUSxnQkFBZ0I7QUFDNUMsU0FBU0Msa0JBQWtCLFFBQVEsdUJBQXVCO0FBUTFELElBQU1DLGtCQUFrQjtJQUN0QkMsT0FBTztJQUNQQyxNQUFNO0FBQ1I7QUFFQTs7Q0FFQyxHQUNELGdCQUFzQkMsaUJBQWlCLENBa0J0QztXQWxCcUJBOztTQUFBQTtJQUFBQSxvQkFBZixvQkFBQSxTQUFnQyxLQWtCdEM7WUFqQkNDLFFBQ0FDLGNBQ0FDLEtBQ0FDLFVBQ0FDLGdCQUNBQyxZQUNBQyxTQUNBQyxRQVlJQyxlQUdBQyxPQUVBQyxhQUdvQkoscUNBQWhCSyxlQUVGQyxhQUdFRCxnQkFBa0NBLGlCQThCckNGLGlCQUZISSxNQUNBQyxPQUlNQyxnQkFhRUMsY0FHQUMsMEJBSUFDLG1CQXlFQUMsYUFHQUMscUJBRUVDLFFBZ0NBQyxPQUVBRDs7OztvQkFyTVpyQixTQURxQyxNQUNyQ0EsUUFDQUMsZUFGcUMsTUFFckNBLGNBQ0FDLE1BSHFDLE1BR3JDQSxLQUNBQyxXQUpxQyxNQUlyQ0EsVUFDQUMsaUJBTHFDLE1BS3JDQSxnQkFDQUMsYUFOcUMsTUFNckNBLFlBQ0FDLFVBUHFDLE1BT3JDQSxTQUNBQyxTQVJxQyxNQVFyQ0E7b0JBWUlDLGdCQUFnQlAsYUFBYXNCLE9BQU8sQ0FBQyxRQUFRO29CQUNqRCxJQUFJZixrQkFBa0IsTUFBTUEsZ0JBQWdCO29CQUV4Q0M7b0JBRUFDLGNBQWM7eUJBRWRGLENBQUFBLGtCQUFrQixLQUFJLEdBQXRCQTs7OztvQkFDSUcsaUJBQWdCTCxzQ0FBQUEsUUFBUWtCLFdBQVcsQ0FBQ3BCLGVBQWUsY0FBbkNFLDBEQUFBQSxvQ0FBcUNtQixNQUFNLENBQUN6QixNQUFNLENBQUMwQixJQUFJLENBQUMsU0FBQ1o7K0JBQVV0QixpQkFBaUJzQixVQUFVQSxNQUFNYSxJQUFJLEtBQUs7O29CQUUvSGYsY0FBaUM7b0JBRXJDLElBQUlELGVBQWU7O3dCQUNqQixJQUFJQSxFQUFBQSxpQkFBQUEsMkJBQUFBLHFDQUFBQSxlQUFlaUIsSUFBSSxNQUFLLFVBQVVqQixFQUFBQSxrQkFBQUEsMkJBQUFBLHNDQUFBQSxnQkFBZWlCLElBQUksTUFBSyxVQUFVOzRCQUN0RWhCLGNBQWNELGNBQWNpQixJQUFJO3dCQUNsQzt3QkFFQWxCLGNBQWM7b0JBQ2hCO29CQUVBRCxNQUFNb0IsSUFBSSxDQUFDO3dCQUNUaEIsTUFBTTt3QkFDTkMsT0FBTzs0QkFDTGEsTUFBTTs0QkFDTkMsTUFBTWhCO3dCQUNSO3dCQUNBa0IsVUFBVTt3QkFDVjFCLGdCQUFBQTtvQkFDRjs7Ozs7O29CQUVROzt3QkFBTWIsa0JBQWtCOzRCQUM5QmUsU0FBQUE7NEJBQ0FDLFFBQUFBOzRCQUNBSCxnQkFBQUE7NEJBQ0FDLFlBQUFBOzRCQUNBTCxRQUFBQTs0QkFDQUMsY0FBY087d0JBQ2hCOzs7b0JBUEFDLFFBQVE7OztvQkFhTEEsMEJBQUFBLHFCQUFBQSxXQUZISSxlQUFBQSxNQUNBQyxnQkFBQUE7eUJBR0VELE1BQUFBOzs7O29CQUNJRSxpQkFBaUJwQixtQkFBbUI7d0JBQ3hDbUIsT0FBQUE7d0JBQ0FELE1BQUFBO3dCQUNBVixVQUFBQTt3QkFDQUQsS0FBQUE7d0JBQ0FRLGFBQUFBO29CQUNGO3lCQUlJRCxDQUFBQSxNQUFNc0IsTUFBTSxHQUFHLENBQUEsR0FBZnRCOzs7O29CQUdJTyxlQUFlUCxNQUFNdUIsS0FBSyxDQUFDLEdBQzlCQyxPQUFPO29CQUVKaEIsMkJBQTJCO3dCQUMvQmlCLE9BQU8sQ0FBQztvQkFDVjtvQkFFMEI7O3dCQUFNbEIsYUFBYW1CLE1BQU07dUNBQUMsb0JBQUEsU0FBT0MsbUJBR3hEQztvQ0FGS0MsU0FDVUMsTUFFVkMsa0JBRUFDLFVBS0VDLFVBVUFyQixRQUVBc0IsS0FrQkFDLGFBT0ZGLFdBQ0FyQixTQUVBc0I7Ozs7NENBbERBTCxnQkFBTnpCLE1BQ2dCMEIsYUFBaEJuQzs0Q0FFeUI7O2dEQUFNZ0M7Ozs0Q0FBekJJLG1CQUFtQjs0Q0FFbkJDLFdBQVcsQUFBQ25DLFFBQVF1QyxFQUFFLENBQXFCckIsV0FBVyxDQUFDZSxLQUFLO2lEQUk5REYsQ0FBQUEsTUFBTSxDQUFBLEdBQU5BOzs7OzRDQUNlOztnREFBTUksU0FBU0ssVUFBVSxDQUFDO29EQUN6Q0MsT0FDRSxxQkFBQ1QsU0FDQyxxQkFBQ25DLFVBQVdEO29EQUdoQkksU0FBQUE7b0RBQ0FDLFFBQUFBO2dEQUNGOzs7NENBUk1tQyxXQUFXOzRDQVVGOztnREFBTUQsU0FBU2YsSUFBSSxDQUFDZ0IsVUFBVTlDOzs7NENBQXZDeUIsU0FBUzs0Q0FFVHNCOzRDQUVOdEIsT0FBTzJCLE9BQU8sQ0FBQyxTQUFDQztnREFDZCxJQUFNQyxXQUFXRCxJQUFJRSxHQUFHLENBQUNDLFFBQVE7Z0RBQ2pDVCxJQUFJZCxJQUFJLENBQUNxQjtnREFFVCxJQUFJN0QsU0FBU2dFLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNMLFdBQVc7b0RBQzdDUCxJQUFJZCxJQUFJLENBQUNvQixJQUFJRSxHQUFHO2dEQUNsQjs0Q0FDRjs0Q0FFQSxJQUFJbkMsYUFBYWUsTUFBTSxLQUFLLEdBQUc7Z0RBQzdCOztvREFBTzt3REFDTGxCLE1BQUFBO3dEQUNBcUIsT0FBTzs0REFBRVMsS0FBQUE7d0RBQUk7b0RBQ2Y7OzRDQUNGOzRDQUVNQyxjQUFjNUIsWUFBWSxDQUFDcUIsSUFBSSxFQUFFLENBQUN4QixJQUFJOzRDQUU1Qzs7Z0RBQU87b0RBQ0xxQixPQUFTLHFCQUFDVSxhQUFjO3dEQUFFRCxLQUFBQTtvREFBSTtnREFDaEM7Ozs0Q0FHSUQsWUFBV0YsaUJBQWlCTixLQUFLOzRDQUN4Qjs7Z0RBQU1PLFNBQVNmLElBQUksQ0FBQ2dCLFdBQVU5Qzs7OzRDQUF2Q3lCLFVBQVM7NENBRVRzQixPQUFNdEIsUUFBT21DLEdBQUcsQ0FBQyxTQUFDUDt1REFBUUEsSUFBSUUsR0FBRyxDQUFDQyxRQUFROzs0Q0FFaEQsOEJBQThCOzRDQUM5QixxQ0FBcUM7NENBQ3JDLElBQUlmLElBQUksTUFBTXJCLGFBQWFlLE1BQU0sRUFBRTtnREFDakM7O29EQUFPO3dEQUNMbEIsTUFBQUE7d0RBQ0FxQixPQUFPOzREQUFFUyxLQUFBQTt3REFBSTtvREFDZjs7NENBQ0Y7NENBRUE7O2dEQUFPO29EQUNMVCxPQUFPO3dEQUNMaUIsS0FBSzs0REFBRVIsS0FBQUE7d0RBQUk7b0RBQ2I7Z0RBQ0Y7Ozs7NEJBQ0Y7NENBbkUyRFAsZUFHeERDOzs7NkJBZ0VBb0IsUUFBUUMsT0FBTyxDQUFDekM7OztvQkFuRWJDLG9CQUFvQjtvQkFxRTFCOzt3QkFBT0E7OztvQkFHVCxJQUFJZixZQUFZVixlQUFla0UsUUFBUSxDQUFDeEQsV0FBdUI7d0JBQ3ZEZ0IsY0FBY3pCLFdBQVcsQ0FBQ1MsU0FBUzt3QkFFekMsSUFBSVcsTUFBTWMsSUFBSSxLQUFLLGtCQUFrQmQsTUFBTWMsSUFBSSxLQUFLLFVBQVU7OzRCQUd0RFAsU0FBUztnQ0FDYmEsT0FBTztvQ0FDTDBCLEdBQUc7d0NBQ0MscUJBQUMvQyxNQUFTLHFCQUFDTSxhQUFjSjs7Z0NBRS9COzRCQUNGOzRCQUVBLElBQUksT0FBT0EsbUJBQW1CLFVBQVU7Z0NBQ3RDLElBQUkxQixTQUFTZ0UsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ3hDLGlCQUFpQjtvQ0FDbkRNLE9BQU9hLEtBQUssQ0FBQzBCLEdBQUcsQ0FBQy9CLElBQUksQ0FBRyxxQkFBQ2hCLE1BQVMscUJBQUNNLGFBQWM3QixTQUFTeUI7Z0NBQzVELE9BQU87b0NBQ0o4QyxDQUFBQSxNQUFNQyxPQUFPLENBQUNoRCxNQUFNaUQsVUFBVSxJQUFJakQsTUFBTWlELFVBQVU7d0NBQUlqRCxNQUFNaUQsVUFBVTtxQ0FBQSxFQUFHZixPQUFPLENBQUMsU0FBQ2U7NENBQy9DekQsd0NBQUFBO3dDQUFsQyxJQUFNMEQsNkJBQTRCMUQsa0NBQUFBLFFBQVFrQixXQUFXLENBQUN1QyxXQUFXLGNBQS9CekQsdURBQUFBLHlDQUFBQSxnQ0FBaUNtQixNQUFNLGNBQXZDbkIsNkRBQUFBLHVDQUF5Q04sTUFBTSxDQUFDMEIsSUFBSSxDQUFDLFNBQUN1Qzs0Q0FDdEYsT0FBT3pFLGlCQUFpQnlFLGlCQUFpQkEsYUFBYXRDLElBQUksS0FBSyxRQUFRc0MsYUFBYXJDLElBQUksS0FBSzt3Q0FDL0Y7d0NBRUEsSUFBSW9DLDJCQUEyQjs0Q0FDN0IsSUFBSUEsMEJBQTBCcEMsSUFBSSxLQUFLLFVBQVVSLHNCQUFzQjt3Q0FDekU7b0NBQ0Y7b0NBRUEsSUFBSUEscUJBQXFCQyxPQUFPYSxLQUFLLENBQUMwQixHQUFHLENBQUMvQixJQUFJLENBQUcscUJBQUNoQixNQUFTLHFCQUFDTSxhQUFjK0MsV0FBV25EO2dDQUN2Rjs0QkFDRjs0QkFFQSxJQUFJTSxPQUFPYSxLQUFLLENBQUMwQixHQUFHLENBQUM3QixNQUFNLEdBQUcsR0FBRztnQ0FDL0I7O29DQUFPVjs7NEJBQ1Q7d0JBQ0Y7d0JBRUEsSUFBSWxCLGFBQWEsVUFBVSxPQUFPWSxtQkFBbUIsVUFBVTs0QkFDdkRPLFFBQVFQLGVBQWVvRCxLQUFLLENBQUM7NEJBRTdCOUMsVUFBUztnQ0FDYmEsT0FBTztvQ0FDTGtDLE1BQU05QyxNQUFNa0MsR0FBRyxDQUFDLFNBQUNhOytDQUNmLHFCQUFDeEQsTUFBTzs0Q0FDTnlELFFBQVFELEtBQUs5QyxPQUFPLENBQUMseUJBQXlCOzRDQUM5Q2dELFVBQVU7d0NBQ1o7O2dDQUVKOzRCQUNGOzRCQUVBOztnQ0FBT2xEOzt3QkFDVDt3QkFFQSx5REFBeUQ7d0JBQ3pELHdEQUF3RDt3QkFDeEQsSUFBSSxDQUFDRixhQUFhOzRCQUNoQjs7Z0NBQU87b0NBQ0xOLE1BQUFBO29DQUNBcUIsT0FBT25CO2dDQUNUOzt3QkFDRjt3QkFFQTs7NEJBQU87Z0NBQ0xGLE1BQUFBO2dDQUNBcUIsT0FBUyxxQkFBQ2YsYUFBY0o7NEJBQzFCOztvQkFDRjs7O29CQUVGOzt3QkFBT3lEOzs7O0lBQ1Q7V0FwT3NCekUifQ==