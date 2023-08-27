/* eslint-disable no-param-reassign */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
import { fieldAffectsData, tabHasName, valueIsValueWithRelation } from "../../config/types";
import getValueWithDefault from "../../getDefaultValue";
import { cloneDataFromOriginalDoc } from "../beforeChange/cloneDataFromOriginalDoc";
import { getExistingRowDoc } from "../beforeChange/getExistingRowDoc";
import { traverseFields } from "./traverseFields";
// This function is responsible for the following actions, in order:
// - Sanitize incoming data
// - Execute field hooks
// - Execute field access control
// - Merge original document data into incoming data
// - Compute default values for undefined fields
export var promise = function() {
    var _ref = _async_to_generator(function(param) {
        var data, doc, field, id, operation, overrideAccess, req, siblingData, siblingDoc, context, _field_hooks, _siblingData_field_name, value, value1, trimmed, richTextJSON, value2, _relationshipIDField, relatedCollection, relationshipIDField, _relationshipIDField1, relatedCollection1, relationshipIDField1, result, _tmp, _, _1, groupData, groupDoc, rows, promises, rows1, promises1, tabSiblingData, tabSiblingDoc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = param.data, doc = param.doc, field = param.field, id = param.id, operation = param.operation, overrideAccess = param.overrideAccess, req = param.req, siblingData = param.siblingData, siblingDoc = param.siblingDoc, context = param.context;
                    if (!fieldAffectsData(field)) return [
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
                                                return fieldAffectsData(collectionField) && collectionField.name === "id";
                                            });
                                            if (((_relationshipIDField = relationshipIDField) === null || _relationshipIDField === void 0 ? void 0 : _relationshipIDField.type) === "number") {
                                                siblingData[field.name][i] = _object_spread_props(_object_spread({}, relatedDoc), {
                                                    value: parseFloat(relatedDoc.value)
                                                });
                                            }
                                        });
                                    }
                                    if (field.type === "relationship" && field.hasMany !== true && valueIsValueWithRelation(value2)) {
                                        ;
                                        relatedCollection = req.payload.config.collections.find(function(collection) {
                                            return collection.slug === value2.relationTo;
                                        });
                                        relationshipIDField = relatedCollection.fields.find(function(collectionField) {
                                            return fieldAffectsData(collectionField) && collectionField.name === "id";
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
                                                return fieldAffectsData(collectionField) && collectionField.name === "id";
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
                                            return fieldAffectsData(collectionField) && collectionField.name === "id";
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
                    siblingData[field.name] = cloneDataFromOriginalDoc(siblingDoc[field.name]);
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
                        getValueWithDefault({
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
                        traverseFields({
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
                        promises.push(traverseFields({
                            data: data,
                            doc: doc,
                            fields: field.fields,
                            id: id,
                            operation: operation,
                            overrideAccess: overrideAccess,
                            req: req,
                            siblingData: row,
                            siblingDoc: getExistingRowDoc(row, siblingDoc[field.name]),
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
                            promises1.push(traverseFields({
                                data: data,
                                doc: doc,
                                fields: block.fields,
                                id: id,
                                operation: operation,
                                overrideAccess: overrideAccess,
                                req: req,
                                siblingData: row,
                                siblingDoc: getExistingRowDoc(row, siblingDoc[field.name]),
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
                        traverseFields({
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
                    if (tabHasName(field)) {
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
                        traverseFields({
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
                        traverseFields({
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlVmFsaWRhdGUvcHJvbWlzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCwgZmllbGRBZmZlY3RzRGF0YSwgVGFiQXNGaWVsZCwgdGFiSGFzTmFtZSwgdmFsdWVJc1ZhbHVlV2l0aFJlbGF0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBnZXRWYWx1ZVdpdGhEZWZhdWx0IGZyb20gJy4uLy4uL2dldERlZmF1bHRWYWx1ZSc7XG5pbXBvcnQgeyBjbG9uZURhdGFGcm9tT3JpZ2luYWxEb2MgfSBmcm9tICcuLi9iZWZvcmVDaGFuZ2UvY2xvbmVEYXRhRnJvbU9yaWdpbmFsRG9jJztcbmltcG9ydCB7IGdldEV4aXN0aW5nUm93RG9jIH0gZnJvbSAnLi4vYmVmb3JlQ2hhbmdlL2dldEV4aXN0aW5nUm93RG9jJztcbmltcG9ydCB7IHRyYXZlcnNlRmllbGRzIH0gZnJvbSAnLi90cmF2ZXJzZUZpZWxkcyc7XG5cbnR5cGUgQXJnczxUPiA9IHtcbiAgZGF0YTogVFxuICBkb2M6IFRcbiAgZmllbGQ6IEZpZWxkIHwgVGFiQXNGaWVsZFxuICBpZD86IHN0cmluZyB8IG51bWJlclxuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaWJsaW5nRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgc2libGluZ0RvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgY29udGV4dDogUmVxdWVzdENvbnRleHRcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgdGhlIGZvbGxvd2luZyBhY3Rpb25zLCBpbiBvcmRlcjpcbi8vIC0gU2FuaXRpemUgaW5jb21pbmcgZGF0YVxuLy8gLSBFeGVjdXRlIGZpZWxkIGhvb2tzXG4vLyAtIEV4ZWN1dGUgZmllbGQgYWNjZXNzIGNvbnRyb2xcbi8vIC0gTWVyZ2Ugb3JpZ2luYWwgZG9jdW1lbnQgZGF0YSBpbnRvIGluY29taW5nIGRhdGFcbi8vIC0gQ29tcHV0ZSBkZWZhdWx0IHZhbHVlcyBmb3IgdW5kZWZpbmVkIGZpZWxkc1xuXG5leHBvcnQgY29uc3QgcHJvbWlzZSA9IGFzeW5jIDxUPih7XG4gIGRhdGEsXG4gIGRvYyxcbiAgZmllbGQsXG4gIGlkLFxuICBvcGVyYXRpb24sXG4gIG92ZXJyaWRlQWNjZXNzLFxuICByZXEsXG4gIHNpYmxpbmdEYXRhLFxuICBzaWJsaW5nRG9jLFxuICBjb250ZXh0LFxufTogQXJnczxUPik6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICBpZiAoZmllbGQubmFtZSA9PT0gJ2lkJykge1xuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSBhcyBzdHJpbmc7XG5cbiAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICd0ZXh0JyAmJiB0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0/LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXS50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNhbml0aXplIGluY29taW5nIGRhdGFcbiAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdIGFzIHN0cmluZztcbiAgICAgICAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gKHRyaW1tZWQubGVuZ3RoID09PSAwKSA/IG51bGwgOiBwYXJzZUZsb2F0KHRyaW1tZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSkpIHtcbiAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IChzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSBhcyBzdHJpbmdbXSkubWFwKChjb29yZGluYXRlLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvb3JkaW5hdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2libGluZ0RhdGFbZmllbGQubmFtZV1baV0gYXMgc3RyaW5nO1xuICAgICAgICAgICAgICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICByZXR1cm4gKHRyaW1tZWQubGVuZ3RoID09PSAwKSA/IG51bGwgOiBwYXJzZUZsb2F0KHRyaW1tZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSAnY2hlY2tib3gnOiB7XG4gICAgICAgIGlmIChzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gJ3RydWUnKSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IHRydWU7XG4gICAgICAgIGlmIChzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gJ2ZhbHNlJykgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBmYWxzZTtcbiAgICAgICAgaWYgKHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnJykgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBmYWxzZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSAncmljaFRleHQnOiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJpY2hUZXh0SlNPTiA9IEpTT04ucGFyc2Uoc2libGluZ0RhdGFbZmllbGQubmFtZV0gYXMgc3RyaW5nKTtcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gcmljaFRleHRKU09OO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gRGlzcmVnYXJkIHRoaXMgZGF0YSBhcyBpdCBpcyBub3QgdmFsaWQuXG4gICAgICAgICAgICAvLyBXaWxsIGJlIHJlcG9ydGVkIHRvIHVzZXIgYnkgZmllbGQgdmFsaWRhdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdyZWxhdGlvbnNoaXAnOlxuICAgICAgY2FzZSAndXBsb2FkJzoge1xuICAgICAgICBpZiAoc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICcnIHx8IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnbm9uZScgfHwgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICdudWxsJyB8fCBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAncmVsYXRpb25zaGlwJyAmJiBmaWVsZC5oYXNNYW55ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IFtdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgocmVsYXRlZERvYzogeyB2YWx1ZTogdW5rbm93biwgcmVsYXRpb25Ubzogc3RyaW5nIH0sIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSByZWxhdGVkRG9jLnJlbGF0aW9uVG8pO1xuICAgICAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXBJREZpZWxkID0gcmVsYXRlZENvbGxlY3Rpb24uZmllbGRzLmZpbmQoKGNvbGxlY3Rpb25GaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShjb2xsZWN0aW9uRmllbGQpICYmIGNvbGxlY3Rpb25GaWVsZC5uYW1lID09PSAnaWQnKTtcbiAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcElERmllbGQ/LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV1baV0gPSB7IC4uLnJlbGF0ZWREb2MsIHZhbHVlOiBwYXJzZUZsb2F0KHJlbGF0ZWREb2MudmFsdWUgYXMgc3RyaW5nKSB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdyZWxhdGlvbnNoaXAnICYmIGZpZWxkLmhhc01hbnkgIT09IHRydWUgJiYgdmFsdWVJc1ZhbHVlV2l0aFJlbGF0aW9uKHZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSB2YWx1ZS5yZWxhdGlvblRvKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcElERmllbGQgPSByZWxhdGVkQ29sbGVjdGlvbi5maWVsZHMuZmluZCgoY29sbGVjdGlvbkZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGNvbGxlY3Rpb25GaWVsZCkgJiYgY29sbGVjdGlvbkZpZWxkLm5hbWUgPT09ICdpZCcpO1xuICAgICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcElERmllbGQ/LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0geyAuLi52YWx1ZSwgdmFsdWU6IHBhcnNlRmxvYXQodmFsdWUudmFsdWUgYXMgc3RyaW5nKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKHJlbGF0ZWREb2M6IHVua25vd24sIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSBmaWVsZC5yZWxhdGlvblRvKTtcbiAgICAgICAgICAgICAgY29uc3QgcmVsYXRpb25zaGlwSURGaWVsZCA9IHJlbGF0ZWRDb2xsZWN0aW9uLmZpZWxkcy5maW5kKChjb2xsZWN0aW9uRmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoY29sbGVjdGlvbkZpZWxkKSAmJiBjb2xsZWN0aW9uRmllbGQubmFtZSA9PT0gJ2lkJyk7XG4gICAgICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXBJREZpZWxkPy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdW2ldID0gcGFyc2VGbG9hdChyZWxhdGVkRG9jIGFzIHN0cmluZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgJiYgZmllbGQuaGFzTWFueSAhPT0gdHJ1ZSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMuZmluZCgoY29sbGVjdGlvbikgPT4gY29sbGVjdGlvbi5zbHVnID09PSBmaWVsZC5yZWxhdGlvblRvKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcElERmllbGQgPSByZWxhdGVkQ29sbGVjdGlvbi5maWVsZHMuZmluZCgoY29sbGVjdGlvbkZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGNvbGxlY3Rpb25GaWVsZCkgJiYgY29sbGVjdGlvbkZpZWxkLm5hbWUgPT09ICdpZCcpO1xuICAgICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcElERmllbGQ/LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gcGFyc2VGbG9hdCh2YWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnYmxvY2tzJzoge1xuICAgICAgICAvLyBIYW5kbGUgY2FzZXMgb2YgYXJyYXlzIGJlaW5nIGludGVudGlvbmFsbHkgc2V0IHRvIDBcbiAgICAgICAgaWYgKHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnMCcgfHwgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09IDApIHtcbiAgICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSBob29rc1xuICAgIGlmIChmaWVsZC5ob29rcz8uYmVmb3JlVmFsaWRhdGUpIHtcbiAgICAgIGF3YWl0IGZpZWxkLmhvb2tzLmJlZm9yZVZhbGlkYXRlLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBjdXJyZW50SG9vaykgPT4ge1xuICAgICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgICAgY29uc3QgaG9va2VkVmFsdWUgPSBhd2FpdCBjdXJyZW50SG9vayh7XG4gICAgICAgICAgdmFsdWU6IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgIG9yaWdpbmFsRG9jOiBkb2MsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBzaWJsaW5nRGF0YSxcbiAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChob29rZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBob29rZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgYWNjZXNzIGNvbnRyb2xcbiAgICBpZiAoZmllbGQuYWNjZXNzICYmIGZpZWxkLmFjY2Vzc1tvcGVyYXRpb25dKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBvdmVycmlkZUFjY2VzcyA/IHRydWUgOiBhd2FpdCBmaWVsZC5hY2Nlc3Nbb3BlcmF0aW9uXSh7IHJlcSwgaWQsIHNpYmxpbmdEYXRhLCBkYXRhLCBkb2MgfSk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGRlbGV0ZSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gSWYgbm8gaW5jb21pbmcgZGF0YSwgYnV0IGV4aXN0aW5nIGRvY3VtZW50IGRhdGEgaXMgZm91bmQsIG1lcmdlIGl0IGluXG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gY2xvbmVEYXRhRnJvbU9yaWdpbmFsRG9jKHNpYmxpbmdEb2NbZmllbGQubmFtZV0pO1xuXG4gICAgICAgIC8vIE90aGVyd2lzZSBjb21wdXRlIGRlZmF1bHQgdmFsdWVcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpZWxkLmRlZmF1bHRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBhd2FpdCBnZXRWYWx1ZVdpdGhEZWZhdWx0KHtcbiAgICAgICAgICB2YWx1ZTogc2libGluZ0RhdGFbZmllbGQubmFtZV0sXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgbG9jYWxlOiByZXEubG9jYWxlLFxuICAgICAgICAgIHVzZXI6IHJlcS51c2VyLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUcmF2ZXJzZSBzdWJmaWVsZHNcbiAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgY2FzZSAnZ3JvdXAnOiB7XG4gICAgICBsZXQgZ3JvdXBEYXRhID0gc2libGluZ0RhdGFbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICBsZXQgZ3JvdXBEb2MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdICE9PSAnb2JqZWN0JykgZ3JvdXBEYXRhID0ge307XG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICdvYmplY3QnKSBncm91cERvYyA9IHt9O1xuXG4gICAgICBhd2FpdCB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGlkLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhOiBncm91cERhdGEsXG4gICAgICAgIHNpYmxpbmdEb2M6IGdyb3VwRG9jLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ2FycmF5Jzoge1xuICAgICAgY29uc3Qgcm93cyA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzKSkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICAgIHByb21pc2VzLnB1c2godHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhOiByb3csXG4gICAgICAgICAgICBzaWJsaW5nRG9jOiBnZXRFeGlzdGluZ1Jvd0RvYyhyb3csIHNpYmxpbmdEb2NbZmllbGQubmFtZV0pLFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICdibG9ja3MnOiB7XG4gICAgICBjb25zdCByb3dzID0gc2libGluZ0RhdGFbZmllbGQubmFtZV07XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd3MpKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgYmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZCgoYmxvY2tUeXBlKSA9PiBibG9ja1R5cGUuc2x1ZyA9PT0gcm93LmJsb2NrVHlwZSk7XG5cbiAgICAgICAgICBpZiAoYmxvY2spIHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICAgIGZpZWxkczogYmxvY2suZmllbGRzLFxuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICBzaWJsaW5nRGF0YTogcm93LFxuICAgICAgICAgICAgICBzaWJsaW5nRG9jOiBnZXRFeGlzdGluZ1Jvd0RvYyhyb3csIHNpYmxpbmdEb2NbZmllbGQubmFtZV0pLFxuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAncm93JzpcbiAgICBjYXNlICdjb2xsYXBzaWJsZSc6IHtcbiAgICAgIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZG9jLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgaWQsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2libGluZ0RhdGEsXG4gICAgICAgIHNpYmxpbmdEb2MsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAndGFiJzoge1xuICAgICAgbGV0IHRhYlNpYmxpbmdEYXRhO1xuICAgICAgbGV0IHRhYlNpYmxpbmdEb2M7XG4gICAgICBpZiAodGFiSGFzTmFtZShmaWVsZCkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0ge307XG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPSB7fTtcblxuICAgICAgICB0YWJTaWJsaW5nRGF0YSA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgICB0YWJTaWJsaW5nRG9jID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYlNpYmxpbmdEYXRhID0gc2libGluZ0RhdGE7XG4gICAgICAgIHRhYlNpYmxpbmdEb2MgPSBzaWJsaW5nRG9jO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGlkLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhOiB0YWJTaWJsaW5nRGF0YSxcbiAgICAgICAgc2libGluZ0RvYzogdGFiU2libGluZ0RvYyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICd0YWJzJzoge1xuICAgICAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBkYXRhLFxuICAgICAgICBkb2MsXG4gICAgICAgIGZpZWxkczogZmllbGQudGFicy5tYXAoKHRhYikgPT4gKHsgLi4udGFiLCB0eXBlOiAndGFiJyB9KSksXG4gICAgICAgIGlkLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhLFxuICAgICAgICBzaWJsaW5nRG9jLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJmaWVsZEFmZmVjdHNEYXRhIiwidGFiSGFzTmFtZSIsInZhbHVlSXNWYWx1ZVdpdGhSZWxhdGlvbiIsImdldFZhbHVlV2l0aERlZmF1bHQiLCJjbG9uZURhdGFGcm9tT3JpZ2luYWxEb2MiLCJnZXRFeGlzdGluZ1Jvd0RvYyIsInRyYXZlcnNlRmllbGRzIiwicHJvbWlzZSIsImRhdGEiLCJkb2MiLCJmaWVsZCIsImlkIiwib3BlcmF0aW9uIiwib3ZlcnJpZGVBY2Nlc3MiLCJyZXEiLCJzaWJsaW5nRGF0YSIsInNpYmxpbmdEb2MiLCJjb250ZXh0IiwidmFsdWUiLCJ0cmltbWVkIiwicmljaFRleHRKU09OIiwicmVsYXRpb25zaGlwSURGaWVsZCIsInJlbGF0ZWRDb2xsZWN0aW9uIiwicmVzdWx0IiwiZ3JvdXBEYXRhIiwiZ3JvdXBEb2MiLCJyb3dzIiwicHJvbWlzZXMiLCJ0YWJTaWJsaW5nRGF0YSIsInRhYlNpYmxpbmdEb2MiLCJuYW1lIiwidHlwZSIsInBhcnNlRmxvYXQiLCJ0b1N0cmluZyIsInRyaW0iLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJjb29yZGluYXRlIiwiaSIsIkpTT04iLCJwYXJzZSIsImhhc01hbnkiLCJyZWxhdGlvblRvIiwiZm9yRWFjaCIsInJlbGF0ZWREb2MiLCJwYXlsb2FkIiwiY29uZmlnIiwiY29sbGVjdGlvbnMiLCJmaW5kIiwiY29sbGVjdGlvbiIsInNsdWciLCJmaWVsZHMiLCJjb2xsZWN0aW9uRmllbGQiLCJob29rcyIsImJlZm9yZVZhbGlkYXRlIiwicmVkdWNlIiwicHJpb3JIb29rIiwiY3VycmVudEhvb2siLCJob29rZWRWYWx1ZSIsIm9yaWdpbmFsRG9jIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhY2Nlc3MiLCJkZWZhdWx0VmFsdWUiLCJsb2NhbGUiLCJ1c2VyIiwicm93IiwicHVzaCIsImFsbCIsImJsb2NrIiwiYmxvY2tzIiwiYmxvY2tUeXBlIiwidGFicyIsInRhYiJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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