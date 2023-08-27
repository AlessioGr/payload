/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "promise", {
    enumerable: true,
    get: function() {
        return promise;
    }
});
var _types = require("../../config/types");
var _getDefaultValue = /*#__PURE__*/ _interop_require_default(require("../../getDefaultValue"));
var _cloneDataFromOriginalDoc = require("../beforeChange/cloneDataFromOriginalDoc");
var _getExistingRowDoc = require("../beforeChange/getExistingRowDoc");
var _traverseFields = require("./traverseFields");
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
var promise = function() {
    var _ref = _async_to_generator(function(param) {
        var data, doc, field, id, operation, overrideAccess, req, siblingData, siblingDoc, context, _field_hooks, _siblingData_field_name, value, value1, trimmed, richTextJSON, value2, _relationshipIDField, relatedCollection, relationshipIDField, _relationshipIDField1, relatedCollection1, relationshipIDField1, result, _tmp, _, _1, groupData, groupDoc, rows, promises, rows1, promises1, tabSiblingData, tabSiblingDoc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = param.data, doc = param.doc, field = param.field, id = param.id, operation = param.operation, overrideAccess = param.overrideAccess, req = param.req, siblingData = param.siblingData, siblingDoc = param.siblingDoc, context = param.context;
                    if (!(0, _types.fieldAffectsData)(field)) return [
                        3,
                        9
                    ];
                    if (field.name === "id") {
                        ;
                        if (field.type === "number" && typeof siblingData[field.name] === "string") {
                            value = siblingData[field.name];
                            siblingData[field.name] = parseFloat(value);
                        }
                        if (field.type === "text" && typeof ((_siblingData_field_name = siblingData[field.name]) === null || _siblingData_field_name === void 0 ? void 0 : _siblingData_field_name.toString) === "function" && typeof siblingData[field.name] !== "string") {
                            siblingData[field.name] = siblingData[field.name].toString();
                        }
                    }
                    // Sanitize incoming data
                    switch(field.type){
                        case "number":
                            {
                                if (typeof siblingData[field.name] === "string") {
                                    value1 = siblingData[field.name];
                                    trimmed = value1.trim();
                                    siblingData[field.name] = trimmed.length === 0 ? null : parseFloat(trimmed);
                                }
                                break;
                            }
                        case "point":
                            {
                                if (Array.isArray(siblingData[field.name])) {
                                    siblingData[field.name] = siblingData[field.name].map(function(coordinate, i) {
                                        if (typeof coordinate === "string") {
                                            var value = siblingData[field.name][i];
                                            var trimmed = value.trim();
                                            return trimmed.length === 0 ? null : parseFloat(trimmed);
                                        }
                                        return coordinate;
                                    });
                                }
                                break;
                            }
                        case "checkbox":
                            {
                                if (siblingData[field.name] === "true") siblingData[field.name] = true;
                                if (siblingData[field.name] === "false") siblingData[field.name] = false;
                                if (siblingData[field.name] === "") siblingData[field.name] = false;
                                break;
                            }
                        case "richText":
                            {
                                if (typeof siblingData[field.name] === "string") {
                                    try {
                                        richTextJSON = JSON.parse(siblingData[field.name]);
                                        siblingData[field.name] = richTextJSON;
                                    } catch (e) {
                                    // Disregard this data as it is not valid.
                                    // Will be reported to user by field validation
                                    }
                                }
                                break;
                            }
                        case "relationship":
                        case "upload":
                            {
                                if (siblingData[field.name] === "" || siblingData[field.name] === "none" || siblingData[field.name] === "null" || siblingData[field.name] === null) {
                                    if (field.type === "relationship" && field.hasMany === true) {
                                        siblingData[field.name] = [];
                                    } else {
                                        siblingData[field.name] = null;
                                    }
                                }
                                value2 = siblingData[field.name];
                                if (Array.isArray(field.relationTo)) {
                                    if (Array.isArray(value2)) {
                                        value2.forEach(function(relatedDoc, i) {
                                            var _relationshipIDField;
                                            var relatedCollection = req.payload.config.collections.find(function(collection) {
                                                return collection.slug === relatedDoc.relationTo;
                                            });
                                            var relationshipIDField = relatedCollection.fields.find(function(collectionField) {
                                                return (0, _types.fieldAffectsData)(collectionField) && collectionField.name === "id";
                                            });
                                            if (((_relationshipIDField = relationshipIDField) === null || _relationshipIDField === void 0 ? void 0 : _relationshipIDField.type) === "number") {
                                                siblingData[field.name][i] = _object_spread_props(_object_spread({}, relatedDoc), {
                                                    value: parseFloat(relatedDoc.value)
                                                });
                                            }
                                        });
                                    }
                                    if (field.type === "relationship" && field.hasMany !== true && (0, _types.valueIsValueWithRelation)(value2)) {
                                        ;
                                        relatedCollection = req.payload.config.collections.find(function(collection) {
                                            return collection.slug === value2.relationTo;
                                        });
                                        relationshipIDField = relatedCollection.fields.find(function(collectionField) {
                                            return (0, _types.fieldAffectsData)(collectionField) && collectionField.name === "id";
                                        });
                                        if (((_relationshipIDField = relationshipIDField) === null || _relationshipIDField === void 0 ? void 0 : _relationshipIDField.type) === "number") {
                                            siblingData[field.name] = _object_spread_props(_object_spread({}, value2), {
                                                value: parseFloat(value2.value)
                                            });
                                        }
                                    }
                                } else {
                                    if (Array.isArray(value2)) {
                                        value2.forEach(function(relatedDoc, i) {
                                            var _relationshipIDField;
                                            var relatedCollection = req.payload.config.collections.find(function(collection) {
                                                return collection.slug === field.relationTo;
                                            });
                                            var relationshipIDField = relatedCollection.fields.find(function(collectionField) {
                                                return (0, _types.fieldAffectsData)(collectionField) && collectionField.name === "id";
                                            });
                                            if (((_relationshipIDField = relationshipIDField) === null || _relationshipIDField === void 0 ? void 0 : _relationshipIDField.type) === "number") {
                                                siblingData[field.name][i] = parseFloat(relatedDoc);
                                            }
                                        });
                                    }
                                    if (field.type === "relationship" && field.hasMany !== true && value2) {
                                        ;
                                        relatedCollection1 = req.payload.config.collections.find(function(collection) {
                                            return collection.slug === field.relationTo;
                                        });
                                        relationshipIDField1 = relatedCollection1.fields.find(function(collectionField) {
                                            return (0, _types.fieldAffectsData)(collectionField) && collectionField.name === "id";
                                        });
                                        if (((_relationshipIDField1 = relationshipIDField1) === null || _relationshipIDField1 === void 0 ? void 0 : _relationshipIDField1.type) === "number") {
                                            siblingData[field.name] = parseFloat(value2);
                                        }
                                    }
                                }
                                break;
                            }
                        case "array":
                        case "blocks":
                            {
                                // Handle cases of arrays being intentionally set to 0
                                if (siblingData[field.name] === "0" || siblingData[field.name] === 0) {
                                    siblingData[field.name] = [];
                                }
                                break;
                            }
                        default:
                            {
                                break;
                            }
                    }
                    if (!((_field_hooks = field.hooks) === null || _field_hooks === void 0 ? void 0 : _field_hooks.beforeValidate)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        field.hooks.beforeValidate.reduce(function() {
                            var _ref = _async_to_generator(function(priorHook, currentHook) {
                                var hookedValue;
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
                                                currentHook({
                                                    value: siblingData[field.name],
                                                    originalDoc: doc,
                                                    data: data,
                                                    siblingData: siblingData,
                                                    operation: operation,
                                                    req: req,
                                                    context: context
                                                })
                                            ];
                                        case 2:
                                            hookedValue = _state.sent();
                                            if (hookedValue !== undefined) {
                                                siblingData[field.name] = hookedValue;
                                            }
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(priorHook, currentHook) {
                                return _ref.apply(this, arguments);
                            };
                        }(), Promise.resolve())
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    if (!(field.access && field.access[operation])) return [
                        3,
                        6
                    ];
                    if (!overrideAccess) return [
                        3,
                        3
                    ];
                    _tmp = true;
                    return [
                        3,
                        5
                    ];
                case 3:
                    return [
                        4,
                        field.access[operation]({
                            req: req,
                            id: id,
                            siblingData: siblingData,
                            data: data,
                            doc: doc
                        })
                    ];
                case 4:
                    _tmp = _state.sent();
                    _state.label = 5;
                case 5:
                    result = _tmp;
                    if (!result) {
                        delete siblingData[field.name];
                    }
                    _state.label = 6;
                case 6:
                    if (!(typeof siblingData[field.name] === "undefined")) return [
                        3,
                        9
                    ];
                    if (!(typeof siblingDoc[field.name] !== "undefined")) return [
                        3,
                        7
                    ];
                    siblingData[field.name] = (0, _cloneDataFromOriginalDoc.cloneDataFromOriginalDoc)(siblingDoc[field.name]);
                    return [
                        3,
                        9
                    ];
                case 7:
                    if (!(typeof field.defaultValue !== "undefined")) return [
                        3,
                        9
                    ];
                    _ = field.name;
                    return [
                        4,
                        (0, _getDefaultValue.default)({
                            value: siblingData[field.name],
                            defaultValue: field.defaultValue,
                            locale: req.locale,
                            user: req.user
                        })
                    ];
                case 8:
                    siblingData[_] = _state.sent();
                    _state.label = 9;
                case 9:
                    _1 = field.type;
                    switch(_1){
                        case "group":
                            return [
                                3,
                                10
                            ];
                        case "array":
                            return [
                                3,
                                12
                            ];
                        case "blocks":
                            return [
                                3,
                                15
                            ];
                        case "row":
                            return [
                                3,
                                18
                            ];
                        case "collapsible":
                            return [
                                3,
                                18
                            ];
                        case "tab":
                            return [
                                3,
                                20
                            ];
                        case "tabs":
                            return [
                                3,
                                22
                            ];
                    }
                    return [
                        3,
                        24
                    ];
                case 10:
                    groupData = siblingData[field.name];
                    groupDoc = siblingDoc[field.name];
                    if (typeof siblingData[field.name] !== "object") groupData = {};
                    if (typeof siblingDoc[field.name] !== "object") groupDoc = {};
                    return [
                        4,
                        (0, _traverseFields.traverseFields)({
                            data: data,
                            doc: doc,
                            fields: field.fields,
                            id: id,
                            operation: operation,
                            overrideAccess: overrideAccess,
                            req: req,
                            siblingData: groupData,
                            siblingDoc: groupDoc,
                            context: context
                        })
                    ];
                case 11:
                    _state.sent();
                    return [
                        3,
                        25
                    ];
                case 12:
                    rows = siblingData[field.name];
                    if (!Array.isArray(rows)) return [
                        3,
                        14
                    ];
                    promises = [];
                    rows.forEach(function(row, i) {
                        promises.push((0, _traverseFields.traverseFields)({
                            data: data,
                            doc: doc,
                            fields: field.fields,
                            id: id,
                            operation: operation,
                            overrideAccess: overrideAccess,
                            req: req,
                            siblingData: row,
                            siblingDoc: (0, _getExistingRowDoc.getExistingRowDoc)(row, siblingDoc[field.name]),
                            context: context
                        }));
                    });
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 13:
                    _state.sent();
                    _state.label = 14;
                case 14:
                    return [
                        3,
                        25
                    ];
                case 15:
                    rows1 = siblingData[field.name];
                    if (!Array.isArray(rows1)) return [
                        3,
                        17
                    ];
                    promises1 = [];
                    rows1.forEach(function(row, i) {
                        var block = field.blocks.find(function(blockType) {
                            return blockType.slug === row.blockType;
                        });
                        if (block) {
                            promises1.push((0, _traverseFields.traverseFields)({
                                data: data,
                                doc: doc,
                                fields: block.fields,
                                id: id,
                                operation: operation,
                                overrideAccess: overrideAccess,
                                req: req,
                                siblingData: row,
                                siblingDoc: (0, _getExistingRowDoc.getExistingRowDoc)(row, siblingDoc[field.name]),
                                context: context
                            }));
                        }
                    });
                    return [
                        4,
                        Promise.all(promises1)
                    ];
                case 16:
                    _state.sent();
                    _state.label = 17;
                case 17:
                    return [
                        3,
                        25
                    ];
                case 18:
                    return [
                        4,
                        (0, _traverseFields.traverseFields)({
                            data: data,
                            doc: doc,
                            fields: field.fields,
                            id: id,
                            operation: operation,
                            overrideAccess: overrideAccess,
                            req: req,
                            siblingData: siblingData,
                            siblingDoc: siblingDoc,
                            context: context
                        })
                    ];
                case 19:
                    _state.sent();
                    return [
                        3,
                        25
                    ];
                case 20:
                    if ((0, _types.tabHasName)(field)) {
                        if (typeof siblingData[field.name] !== "object") siblingData[field.name] = {};
                        if (typeof siblingDoc[field.name] !== "object") siblingDoc[field.name] = {};
                        tabSiblingData = siblingData[field.name];
                        tabSiblingDoc = siblingDoc[field.name];
                    } else {
                        tabSiblingData = siblingData;
                        tabSiblingDoc = siblingDoc;
                    }
                    return [
                        4,
                        (0, _traverseFields.traverseFields)({
                            data: data,
                            doc: doc,
                            fields: field.fields,
                            id: id,
                            operation: operation,
                            overrideAccess: overrideAccess,
                            req: req,
                            siblingData: tabSiblingData,
                            siblingDoc: tabSiblingDoc,
                            context: context
                        })
                    ];
                case 21:
                    _state.sent();
                    return [
                        3,
                        25
                    ];
                case 22:
                    return [
                        4,
                        (0, _traverseFields.traverseFields)({
                            data: data,
                            doc: doc,
                            fields: field.tabs.map(function(tab) {
                                return _object_spread_props(_object_spread({}, tab), {
                                    type: "tab"
                                });
                            }),
                            id: id,
                            operation: operation,
                            overrideAccess: overrideAccess,
                            req: req,
                            siblingData: siblingData,
                            siblingDoc: siblingDoc,
                            context: context
                        })
                    ];
                case 23:
                    _state.sent();
                    return [
                        3,
                        25
                    ];
                case 24:
                    {
                        return [
                            3,
                            25
                        ];
                    }
                    _state.label = 25;
                case 25:
                    return [
                        2
                    ];
            }
        });
    });
    return function promise(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlVmFsaWRhdGUvcHJvbWlzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCwgZmllbGRBZmZlY3RzRGF0YSwgVGFiQXNGaWVsZCwgdGFiSGFzTmFtZSwgdmFsdWVJc1ZhbHVlV2l0aFJlbGF0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBnZXRWYWx1ZVdpdGhEZWZhdWx0IGZyb20gJy4uLy4uL2dldERlZmF1bHRWYWx1ZSc7XG5pbXBvcnQgeyBjbG9uZURhdGFGcm9tT3JpZ2luYWxEb2MgfSBmcm9tICcuLi9iZWZvcmVDaGFuZ2UvY2xvbmVEYXRhRnJvbU9yaWdpbmFsRG9jJztcbmltcG9ydCB7IGdldEV4aXN0aW5nUm93RG9jIH0gZnJvbSAnLi4vYmVmb3JlQ2hhbmdlL2dldEV4aXN0aW5nUm93RG9jJztcbmltcG9ydCB7IHRyYXZlcnNlRmllbGRzIH0gZnJvbSAnLi90cmF2ZXJzZUZpZWxkcyc7XG5cbnR5cGUgQXJnczxUPiA9IHtcbiAgZGF0YTogVFxuICBkb2M6IFRcbiAgZmllbGQ6IEZpZWxkIHwgVGFiQXNGaWVsZFxuICBpZD86IHN0cmluZyB8IG51bWJlclxuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaWJsaW5nRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgc2libGluZ0RvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgY29udGV4dDogUmVxdWVzdENvbnRleHRcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgdGhlIGZvbGxvd2luZyBhY3Rpb25zLCBpbiBvcmRlcjpcbi8vIC0gU2FuaXRpemUgaW5jb21pbmcgZGF0YVxuLy8gLSBFeGVjdXRlIGZpZWxkIGhvb2tzXG4vLyAtIEV4ZWN1dGUgZmllbGQgYWNjZXNzIGNvbnRyb2xcbi8vIC0gTWVyZ2Ugb3JpZ2luYWwgZG9jdW1lbnQgZGF0YSBpbnRvIGluY29taW5nIGRhdGFcbi8vIC0gQ29tcHV0ZSBkZWZhdWx0IHZhbHVlcyBmb3IgdW5kZWZpbmVkIGZpZWxkc1xuXG5leHBvcnQgY29uc3QgcHJvbWlzZSA9IGFzeW5jIDxUPih7XG4gIGRhdGEsXG4gIGRvYyxcbiAgZmllbGQsXG4gIGlkLFxuICBvcGVyYXRpb24sXG4gIG92ZXJyaWRlQWNjZXNzLFxuICByZXEsXG4gIHNpYmxpbmdEYXRhLFxuICBzaWJsaW5nRG9jLFxuICBjb250ZXh0LFxufTogQXJnczxUPik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICBpZiAoZmllbGQubmFtZSA9PT0gJ2lkJykge1xuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSBhcyBzdHJpbmc7XG5cbiAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICd0ZXh0JyAmJiB0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0/LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXS50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNhbml0aXplIGluY29taW5nIGRhdGFcbiAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdIGFzIHN0cmluZztcbiAgICAgICAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gKHRyaW1tZWQubGVuZ3RoID09PSAwKSA/IG51bGwgOiBwYXJzZUZsb2F0KHRyaW1tZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSkpIHtcbiAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IChzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSBhcyBzdHJpbmdbXSkubWFwKChjb29yZGluYXRlLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvb3JkaW5hdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2libGluZ0RhdGFbZmllbGQubmFtZV1baV0gYXMgc3RyaW5nO1xuICAgICAgICAgICAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICByZXR1cm4gKHRyaW1tZWQubGVuZ3RoID09PSAwKSA/IG51bGwgOiBwYXJzZUZsb2F0KHRyaW1tZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSAnY2hlY2tib3gnOiB7XG4gICAgICAgIGlmIChzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gJ3RydWUnKSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IHRydWU7XG4gICAgICAgIGlmIChzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gJ2ZhbHNlJykgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBmYWxzZTtcbiAgICAgICAgaWYgKHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnJykgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSAncmljaFRleHQnOiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJpY2hUZXh0SlNPTiA9IEpTT04ucGFyc2Uoc2libGluZ0RhdGFbZmllbGQubmFtZV0gYXMgc3RyaW5nKTtcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gcmljaFRleHRKU09OO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gRGlzcmVnYXJkIHRoaXMgZGF0YSBhcyBpdCBpcyBub3QgdmFsaWQuXG4gICAgICAgICAgICAvLyBXaWxsIGJlIHJlcG9ydGVkIHRvIHVzZXIgYnkgZmllbGQgdmFsaWRhdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdyZWxhdGlvbnNoaXAnOlxuICAgICAgY2FzZSAndXBsb2FkJzoge1xuICAgICAgICBpZiAoc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICcnIHx8IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnbm9uZScgfHwgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICdudWxsJyB8fCBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAncmVsYXRpb25zaGlwJyAmJiBmaWVsZC5oYXNNYW55ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IFtdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgocmVsYXRlZERvYzogeyB2YWx1ZTogdW5rbm93biwgcmVsYXRpb25Ubzogc3RyaW5nIH0sIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSByZWxhdGVkRG9jLnJlbGF0aW9uVG8pO1xuICAgICAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXBJREZpZWxkID0gcmVsYXRlZENvbGxlY3Rpb24uZmllbGRzLmZpbmQoKGNvbGxlY3Rpb25GaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShjb2xsZWN0aW9uRmllbGQpICYmIGNvbGxlY3Rpb25GaWVsZC5uYW1lID09PSAnaWQnKTtcbiAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcElERmllbGQ/LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV1baV0gPSB7IC4uLnJlbGF0ZWREb2MsIHZhbHVlOiBwYXJzZUZsb2F0KHJlbGF0ZWREb2MudmFsdWUgYXMgc3RyaW5nKSB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyZWxhdGlvbnNoaXAnICYmIGZpZWxkLmhhc01hbnkgIT09IHRydWUgJiYgdmFsdWVJc1ZhbHVlV2l0aFJlbGF0aW9uKHZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSB2YWx1ZS5yZWxhdGlvblRvKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcElERmllbGQgPSByZWxhdGVkQ29sbGVjdGlvbi5maWVsZHMuZmluZCgoY29sbGVjdGlvbkZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGNvbGxlY3Rpb25GaWVsZCkgJiYgY29sbGVjdGlvbkZpZWxkLm5hbWUgPT09ICdpZCcpO1xuICAgICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcElERmllbGQ/LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0geyAuLi52YWx1ZSwgdmFsdWU6IHBhcnNlRmxvYXQodmFsdWUudmFsdWUgYXMgc3RyaW5nKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKHJlbGF0ZWREb2M6IHVua25vd24sIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSBmaWVsZC5yZWxhdGlvblRvKTtcbiAgICAgICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwSURGaWVsZCA9IHJlbGF0ZWRDb2xsZWN0aW9uLmZpZWxkcy5maW5kKChjb2xsZWN0aW9uRmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoY29sbGVjdGlvbkZpZWxkKSAmJiBjb2xsZWN0aW9uRmllbGQubmFtZSA9PT0gJ2lkJyk7XG4gICAgICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXBJREZpZWxkPy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdW2ldID0gcGFyc2VGbG9hdChyZWxhdGVkRG9jIGFzIHN0cmluZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgJiYgZmllbGQuaGFzTWFueSAhPT0gdHJ1ZSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSBmaWVsZC5yZWxhdGlvblRvKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcElERmllbGQgPSByZWxhdGVkQ29sbGVjdGlvbi5maWVsZHMuZmluZCgoY29sbGVjdGlvbkZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGNvbGxlY3Rpb25GaWVsZCkgJiYgY29sbGVjdGlvbkZpZWxkLm5hbWUgPT09ICdpZCcpO1xuICAgICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcElERmllbGQ/LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gcGFyc2VGbG9hdCh2YWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnYmxvY2tzJzoge1xuICAgICAgICAvLyBIYW5kbGUgY2FzZXMgb2YgYXJyYXlzIGJlaW5nIGludGVudGlvbmFsbHkgc2V0IHRvIDBcbiAgICAgICAgaWYgKHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnMCcgfHwgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09IDApIHtcbiAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSBob29rc1xuICAgIGlmIChmaWVsZC5ob29rcz8uYmVmb3JlVmFsaWRhdGUpIHtcbiAgICAgIGF3YWl0IGZpZWxkLmhvb2tzLmJlZm9yZVZhbGlkYXRlLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBjdXJyZW50SG9vaykgPT4ge1xuICAgICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgICAgY29uc3QgaG9va2VkVmFsdWUgPSBhd2FpdCBjdXJyZW50SG9vayh7XG4gICAgICAgICAgdmFsdWU6IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgIG9yaWdpbmFsRG9jOiBkb2MsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBzaWJsaW5nRGF0YSxcbiAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChob29rZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBob29rZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgYWNjZXNzIGNvbnRyb2xcbiAgICBpZiAoZmllbGQuYWNjZXNzICYmIGZpZWxkLmFjY2Vzc1tvcGVyYXRpb25dKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBvdmVycmlkZUFjY2VzcyA/IHRydWUgOiBhd2FpdCBmaWVsZC5hY2Nlc3Nbb3BlcmF0aW9uXSh7IHJlcSwgaWQsIHNpYmxpbmdEYXRhLCBkYXRhLCBkb2MgfSk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGRlbGV0ZSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gSWYgbm8gaW5jb21pbmcgZGF0YSwgYnV0IGV4aXN0aW5nIGRvY3VtZW50IGRhdGEgaXMgZm91bmQsIG1lcmdlIGl0IGluXG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gY2xvbmVEYXRhRnJvbU9yaWdpbmFsRG9jKHNpYmxpbmdEb2NbZmllbGQubmFtZV0pO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSBjb21wdXRlIGRlZmF1bHQgdmFsdWVcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpZWxkLmRlZmF1bHRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBhd2FpdCBnZXRWYWx1ZVdpdGhEZWZhdWx0KHtcbiAgICAgICAgICB2YWx1ZTogc2libGluZ0RhdGFbZmllbGQubmFtZV0sXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgbG9jYWxlOiByZXEubG9jYWxlLFxuICAgICAgICAgIHVzZXI6IHJlcS51c2VyLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUcmF2ZXJzZSBzdWJmaWVsZHNcbiAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgY2FzZSAnZ3JvdXAnOiB7XG4gICAgICBsZXQgZ3JvdXBEYXRhID0gc2libGluZ0RhdGFbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICBsZXQgZ3JvdXBEb2MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdICE9PSAnb2JqZWN0JykgZ3JvdXBEYXRhID0ge307XG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICdvYmplY3QnKSBncm91cERvYyA9IHt9O1xuXG4gICAgICBhd2FpdCB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGlkLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhOiBncm91cERhdGEsXG4gICAgICAgIHNpYmxpbmdEb2M6IGdyb3VwRG9jLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ2FycmF5Jzoge1xuICAgICAgY29uc3Qgcm93cyA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzKSkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICAgIHByb21pc2VzLnB1c2godHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhOiByb3csXG4gICAgICAgICAgICBzaWJsaW5nRG9jOiBnZXRFeGlzdGluZ1Jvd0RvYyhyb3csIHNpYmxpbmdEb2NbZmllbGQubmFtZV0pLFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICdibG9ja3MnOiB7XG4gICAgICBjb25zdCByb3dzID0gc2libGluZ0RhdGFbZmllbGQubmFtZV07XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd3MpKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgYmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZCgoYmxvY2tUeXBlKSA9PiBibG9ja1R5cGUuc2x1ZyA9PT0gcm93LmJsb2NrVHlwZSk7XG5cbiAgICAgICAgICBpZiAoYmxvY2spIHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICAgIGZpZWxkczogYmxvY2suZmllbGRzLFxuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICBzaWJsaW5nRGF0YTogcm93LFxuICAgICAgICAgICAgICBzaWJsaW5nRG9jOiBnZXRFeGlzdGluZ1Jvd0RvYyhyb3csIHNpYmxpbmdEb2NbZmllbGQubmFtZV0pLFxuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAncm93JzpcbiAgICBjYXNlICdjb2xsYXBzaWJsZSc6IHtcbiAgICAgIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZG9jLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgaWQsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2libGluZ0RhdGEsXG4gICAgICAgIHNpYmxpbmdEb2MsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAndGFiJzoge1xuICAgICAgbGV0IHRhYlNpYmxpbmdEYXRhO1xuICAgICAgbGV0IHRhYlNpYmxpbmdEb2M7XG4gICAgICBpZiAodGFiSGFzTmFtZShmaWVsZCkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0ge307XG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPSB7fTtcblxuICAgICAgICB0YWJTaWJsaW5nRGF0YSA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgICB0YWJTaWJsaW5nRG9jID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYlNpYmxpbmdEYXRhID0gc2libGluZ0RhdGE7XG4gICAgICAgIHRhYlNpYmxpbmdEb2MgPSBzaWJsaW5nRG9jO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGlkLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhOiB0YWJTaWJsaW5nRGF0YSxcbiAgICAgICAgc2libGluZ0RvYzogdGFiU2libGluZ0RvYyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICd0YWJzJzoge1xuICAgICAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBkYXRhLFxuICAgICAgICBkb2MsXG4gICAgICAgIGZpZWxkczogZmllbGQudGFicy5tYXAoKHRhYikgPT4gKHsgLi4udGFiLCB0eXBlOiAndGFiJyB9KSksXG4gICAgICAgIGlkLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhLFxuICAgICAgICBzaWJsaW5nRG9jLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJwcm9taXNlIiwiZGF0YSIsImRvYyIsImZpZWxkIiwiaWQiLCJvcGVyYXRpb24iLCJvdmVycmlkZUFjY2VzcyIsInJlcSIsInNpYmxpbmdEYXRhIiwic2libGluZ0RvYyIsImNvbnRleHQiLCJ2YWx1ZSIsInRyaW1tZWQiLCJyaWNoVGV4dEpTT04iLCJyZWxhdGlvbnNoaXBJREZpZWxkIiwicmVsYXRlZENvbGxlY3Rpb24iLCJyZXN1bHQiLCJncm91cERhdGEiLCJncm91cERvYyIsInJvd3MiLCJwcm9taXNlcyIsInRhYlNpYmxpbmdEYXRhIiwidGFiU2libGluZ0RvYyIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIiwidHlwZSIsInBhcnNlRmxvYXQiLCJ0b1N0cmluZyIsInRyaW0iLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJjb29yZGluYXRlIiwiaSIsIkpTT04iLCJwYXJzZSIsImhhc01hbnkiLCJyZWxhdGlvblRvIiwiZm9yRWFjaCIsInJlbGF0ZWREb2MiLCJwYXlsb2FkIiwiY29uZmlnIiwiY29sbGVjdGlvbnMiLCJmaW5kIiwiY29sbGVjdGlvbiIsInNsdWciLCJmaWVsZHMiLCJjb2xsZWN0aW9uRmllbGQiLCJ2YWx1ZUlzVmFsdWVXaXRoUmVsYXRpb24iLCJob29rcyIsImJlZm9yZVZhbGlkYXRlIiwicmVkdWNlIiwicHJpb3JIb29rIiwiY3VycmVudEhvb2siLCJob29rZWRWYWx1ZSIsIm9yaWdpbmFsRG9jIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhY2Nlc3MiLCJjbG9uZURhdGFGcm9tT3JpZ2luYWxEb2MiLCJkZWZhdWx0VmFsdWUiLCJnZXRWYWx1ZVdpdGhEZWZhdWx0IiwibG9jYWxlIiwidXNlciIsInRyYXZlcnNlRmllbGRzIiwicm93IiwicHVzaCIsImdldEV4aXN0aW5nUm93RG9jIiwiYWxsIiwiYmxvY2siLCJibG9ja3MiLCJibG9ja1R5cGUiLCJ0YWJIYXNOYW1lIiwidGFicyIsInRhYiJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQTRCdkJBOzs7ZUFBQUE7OztxQkExQjZFO3NF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