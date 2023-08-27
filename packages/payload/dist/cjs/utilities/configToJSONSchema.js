"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    entityToJSONSchema: function() {
        return entityToJSONSchema;
    },
    configToJSONSchema: function() {
        return configToJSONSchema;
    }
});
var _pluralizeesm = /*#__PURE__*/ _interop_require_default(require("pluralize-esm"));
var _types = require("../fields/config/types");
var _deepCopyObject = /*#__PURE__*/ _interop_require_default(require("./deepCopyObject"));
var _formatLabels = require("./formatLabels");
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
var singular = _pluralizeesm.default.singular;
var propertyIsRequired = function(field) {
    if ((0, _types.fieldAffectsData)(field) && "required" in field && field.required === true) return true;
    if ("fields" in field && field.type !== "array") {
        var _field_admin, _field_access;
        if (((_field_admin = field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.condition) || ((_field_access = field.access) === null || _field_access === void 0 ? void 0 : _field_access.read)) return false;
        return field.fields.find(function(subField) {
            return propertyIsRequired(subField);
        });
    }
    if (field.type === "tabs") {
        return field.tabs.some(function(tab) {
            return "name" in tab && tab.fields.find(function(subField) {
                return propertyIsRequired(subField);
            });
        });
    }
    return false;
};
function returnOptionEnums(options) {
    return options.map(function(option) {
        if (typeof option === "object" && "value" in option) {
            return option.value;
        }
        return option;
    });
}
/**
 * This is used for generating the TypeScript types (payload-types.ts) with the payload generate:types command.
 */ function generateEntitySchemas(entities) {
    var properties = _to_consumable_array(entities).reduce(function(acc, param) {
        var slug = param.slug;
        acc[slug] = {
            $ref: "#/definitions/".concat(slug)
        };
        return acc;
    }, {});
    return {
        type: "object",
        properties: properties,
        required: Object.keys(properties),
        additionalProperties: false
    };
}
function fieldsToJSONSchema(collectionIDFieldTypes, fields, interfaceNameDefinitions) {
    // required fields for a schema (could be for a nested schema)
    var requiredFields = new Set(fields.filter(propertyIsRequired).map(function(field) {
        return (0, _types.fieldAffectsData)(field) ? field.name : "";
    }));
    return {
        properties: Object.fromEntries(fields.reduce(function(fieldSchemas, field) {
            var fieldSchema;
            switch(field.type){
                case "text":
                case "textarea":
                case "code":
                case "email":
                case "date":
                    {
                        fieldSchema = {
                            type: "string"
                        };
                        break;
                    }
                case "number":
                    {
                        if (field.hasMany === true) {
                            fieldSchema = {
                                type: "array",
                                items: {
                                    type: "number"
                                }
                            };
                        } else {
                            fieldSchema = {
                                type: "number"
                            };
                        }
                        break;
                    }
                case "checkbox":
                    {
                        fieldSchema = {
                            type: "boolean"
                        };
                        break;
                    }
                case "json":
                    {
                        // https://www.rfc-editor.org/rfc/rfc7159#section-3
                        fieldSchema = {
                            oneOf: [
                                {
                                    type: "object"
                                },
                                {
                                    type: "array"
                                },
                                {
                                    type: "string"
                                },
                                {
                                    type: "number"
                                },
                                {
                                    type: "boolean"
                                },
                                {
                                    type: "null"
                                }
                            ]
                        };
                        break;
                    }
                case "richText":
                    {
                        fieldSchema = {
                            type: "array",
                            items: {
                                type: "object"
                            }
                        };
                        break;
                    }
                case "radio":
                    {
                        fieldSchema = {
                            type: "string",
                            enum: returnOptionEnums(field.options)
                        };
                        break;
                    }
                case "select":
                    {
                        var selectType = {
                            type: "string",
                            enum: returnOptionEnums(field.options)
                        };
                        if (field.hasMany) {
                            fieldSchema = {
                                type: "array",
                                items: selectType
                            };
                        } else {
                            fieldSchema = selectType;
                        }
                        break;
                    }
                case "point":
                    {
                        fieldSchema = {
                            type: "array",
                            minItems: 2,
                            maxItems: 2,
                            items: [
                                {
                                    type: "number"
                                },
                                {
                                    type: "number"
                                }
                            ]
                        };
                        break;
                    }
                case "relationship":
                    {
                        if (Array.isArray(field.relationTo)) {
                            if (field.hasMany) {
                                fieldSchema = {
                                    oneOf: [
                                        {
                                            type: "array",
                                            items: {
                                                oneOf: field.relationTo.map(function(relation) {
                                                    return {
                                                        type: "object",
                                                        additionalProperties: false,
                                                        properties: {
                                                            value: {
                                                                type: collectionIDFieldTypes[relation]
                                                            },
                                                            relationTo: {
                                                                const: relation
                                                            }
                                                        },
                                                        required: [
                                                            "value",
                                                            "relationTo"
                                                        ]
                                                    };
                                                })
                                            }
                                        },
                                        {
                                            type: "array",
                                            items: {
                                                oneOf: field.relationTo.map(function(relation) {
                                                    return {
                                                        type: "object",
                                                        additionalProperties: false,
                                                        properties: {
                                                            value: {
                                                                $ref: "#/definitions/".concat(relation)
                                                            },
                                                            relationTo: {
                                                                const: relation
                                                            }
                                                        },
                                                        required: [
                                                            "value",
                                                            "relationTo"
                                                        ]
                                                    };
                                                })
                                            }
                                        }
                                    ]
                                };
                            } else {
                                fieldSchema = {
                                    oneOf: field.relationTo.map(function(relation) {
                                        return {
                                            type: "object",
                                            additionalProperties: false,
                                            properties: {
                                                value: {
                                                    oneOf: [
                                                        {
                                                            type: collectionIDFieldTypes[relation]
                                                        },
                                                        {
                                                            $ref: "#/definitions/".concat(relation)
                                                        }
                                                    ]
                                                },
                                                relationTo: {
                                                    const: relation
                                                }
                                            },
                                            required: [
                                                "value",
                                                "relationTo"
                                            ]
                                        };
                                    })
                                };
                            }
                        } else if (field.hasMany) {
                            fieldSchema = {
                                oneOf: [
                                    {
                                        type: "array",
                                        items: {
                                            type: collectionIDFieldTypes[field.relationTo]
                                        }
                                    },
                                    {
                                        type: "array",
                                        items: {
                                            $ref: "#/definitions/".concat(field.relationTo)
                                        }
                                    }
                                ]
                            };
                        } else {
                            fieldSchema = {
                                oneOf: [
                                    {
                                        type: collectionIDFieldTypes[field.relationTo]
                                    },
                                    {
                                        $ref: "#/definitions/".concat(field.relationTo)
                                    }
                                ]
                            };
                        }
                        break;
                    }
                case "upload":
                    {
                        fieldSchema = {
                            oneOf: [
                                {
                                    type: collectionIDFieldTypes[field.relationTo]
                                },
                                {
                                    $ref: "#/definitions/".concat(field.relationTo)
                                }
                            ]
                        };
                        break;
                    }
                case "blocks":
                    {
                        fieldSchema = {
                            type: "array",
                            items: {
                                oneOf: field.blocks.map(function(block) {
                                    var blockFieldSchemas = fieldsToJSONSchema(collectionIDFieldTypes, block.fields, interfaceNameDefinitions);
                                    var blockSchema = {
                                        type: "object",
                                        additionalProperties: false,
                                        properties: _object_spread_props(_object_spread({}, blockFieldSchemas.properties), {
                                            blockType: {
                                                const: block.slug
                                            }
                                        }),
                                        required: [
                                            "blockType"
                                        ].concat(_to_consumable_array(blockFieldSchemas.required))
                                    };
                                    if (block.interfaceName) {
                                        interfaceNameDefinitions.set(block.interfaceName, blockSchema);
                                        return {
                                            $ref: "#/definitions/".concat(block.interfaceName)
                                        };
                                    }
                                    return blockSchema;
                                })
                            }
                        };
                        break;
                    }
                case "array":
                    {
                        fieldSchema = {
                            type: "array",
                            items: _object_spread({
                                type: "object",
                                additionalProperties: false
                            }, fieldsToJSONSchema(collectionIDFieldTypes, field.fields, interfaceNameDefinitions))
                        };
                        if (field.interfaceName) {
                            interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                            fieldSchema = {
                                $ref: "#/definitions/".concat(field.interfaceName)
                            };
                        }
                        break;
                    }
                case "row":
                case "collapsible":
                    {
                        var childSchema = fieldsToJSONSchema(collectionIDFieldTypes, field.fields, interfaceNameDefinitions);
                        Object.entries(childSchema.properties).forEach(function(param) {
                            var _param = _sliced_to_array(param, 2), propName = _param[0], propSchema = _param[1];
                            fieldSchemas.set(propName, propSchema);
                        });
                        childSchema.required.forEach(function(propName) {
                            requiredFields.add(propName);
                        });
                        break;
                    }
                case "tabs":
                    {
                        field.tabs.forEach(function(tab) {
                            var childSchema = fieldsToJSONSchema(collectionIDFieldTypes, tab.fields, interfaceNameDefinitions);
                            if ((0, _types.tabHasName)(tab)) {
                                // could have interface
                                fieldSchemas.set(tab.name, _object_spread({
                                    type: "object",
                                    additionalProperties: false
                                }, childSchema));
                                requiredFields.add(tab.name);
                            } else {
                                Object.entries(childSchema.properties).forEach(function(param) {
                                    var _param = _sliced_to_array(param, 2), propName = _param[0], propSchema = _param[1];
                                    fieldSchemas.set(propName, propSchema);
                                });
                                childSchema.required.forEach(function(propName) {
                                    requiredFields.add(propName);
                                });
                            }
                        });
                        break;
                    }
                case "group":
                    {
                        fieldSchema = _object_spread({
                            type: "object",
                            additionalProperties: false
                        }, fieldsToJSONSchema(collectionIDFieldTypes, field.fields, interfaceNameDefinitions));
                        if (field.interfaceName) {
                            interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                            fieldSchema = {
                                $ref: "#/definitions/".concat(field.interfaceName)
                            };
                        }
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            if (fieldSchema && (0, _types.fieldAffectsData)(field)) {
                fieldSchemas.set(field.name, fieldSchema);
            }
            return fieldSchemas;
        }, new Map())),
        required: Array.from(requiredFields)
    };
}
function entityToJSONSchema(config, incomingEntity, interfaceNameDefinitions) {
    var _entity_typescript, _entity_auth;
    var entity = (0, _deepCopyObject.default)(incomingEntity);
    var title = ((_entity_typescript = entity.typescript) === null || _entity_typescript === void 0 ? void 0 : _entity_typescript.interface) ? entity.typescript.interface : singular((0, _formatLabels.toWords)(entity.slug, true));
    var idField = {
        type: "text",
        name: "id",
        required: true
    };
    var customIdField = entity.fields.find(function(field) {
        return (0, _types.fieldAffectsData)(field) && field.name === "id";
    });
    if (customIdField && customIdField.type !== "group" && customIdField.type !== "tab") {
        customIdField.required = true;
    } else {
        entity.fields.unshift(idField);
    }
    // mark timestamp fields required
    if ("timestamps" in entity && entity.timestamps !== false) {
        entity.fields = entity.fields.map(function(field) {
            if ((0, _types.fieldAffectsData)(field) && (field.name === "createdAt" || field.name === "updatedAt")) {
                return _object_spread_props(_object_spread({}, field), {
                    required: true
                });
            }
            return field;
        });
    }
    if ("auth" in entity && entity.auth && !((_entity_auth = entity.auth) === null || _entity_auth === void 0 ? void 0 : _entity_auth.disableLocalStrategy)) {
        entity.fields.push({
            type: "text",
            name: "password"
        });
    }
    // used for relationship fields, to determine whether to use a string or number type for the ID
    var collectionIDFieldTypes = config.collections.reduce(function(acc, collection) {
        var _customCollectionIdField;
        var customCollectionIdField = collection.fields.find(function(field) {
            return "name" in field && field.name === "id";
        });
        acc[collection.slug] = ((_customCollectionIdField = customCollectionIdField) === null || _customCollectionIdField === void 0 ? void 0 : _customCollectionIdField.type) === "number" ? "number" : "string";
        return acc;
    }, {});
    return _object_spread({
        title: title,
        type: "object",
        additionalProperties: false
    }, fieldsToJSONSchema(collectionIDFieldTypes, entity.fields, interfaceNameDefinitions));
}
function configToJSONSchema(config) {
    // a mutable Map to store custom top-level `interfaceName` types
    var interfaceNameDefinitions = new Map();
    var entityDefinitions = _to_consumable_array(config.globals).concat(_to_consumable_array(config.collections)).reduce(function(acc, entity) {
        acc[entity.slug] = entityToJSONSchema(config, entity, interfaceNameDefinitions);
        return acc;
    }, {});
    return {
        title: "Config",
        type: "object",
        additionalProperties: false,
        properties: {
            collections: generateEntitySchemas(config.collections),
            globals: generateEntitySchemas(config.globals)
        },
        required: [
            "collections",
            "globals"
        ],
        definitions: _object_spread({}, entityDefinitions, Object.fromEntries(interfaceNameDefinitions))
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlnVG9KU09OU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplLWVzbSc7XG5pbXBvcnQgdHlwZSB7IEpTT05TY2hlbWE0IH0gZnJvbSAnanNvbi1zY2hlbWEnO1xuaW1wb3J0IHsgRmllbGQsIEZpZWxkQWZmZWN0aW5nRGF0YSwgZmllbGRBZmZlY3RzRGF0YSwgT3B0aW9uLCB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2dsb2JhbHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBkZWVwQ29weU9iamVjdCBmcm9tICcuL2RlZXBDb3B5T2JqZWN0JztcbmltcG9ydCB7IHRvV29yZHMgfSBmcm9tICcuL2Zvcm1hdExhYmVscyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuXG5jb25zdCB7IHNpbmd1bGFyIH0gPSBwbHVyYWxpemU7XG5cbmNvbnN0IHByb3BlcnR5SXNSZXF1aXJlZCA9IChmaWVsZDogRmllbGQpID0+IHtcbiAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmICgoJ3JlcXVpcmVkJyBpbiBmaWVsZCAmJiBmaWVsZC5yZXF1aXJlZCA9PT0gdHJ1ZSkpKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoJ2ZpZWxkcycgaW4gZmllbGQgJiYgZmllbGQudHlwZSAhPT0gJ2FycmF5Jykge1xuICAgIGlmIChmaWVsZC5hZG1pbj8uY29uZGl0aW9uIHx8IGZpZWxkLmFjY2Vzcz8ucmVhZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBmaWVsZC5maWVsZHMuZmluZCgoc3ViRmllbGQpID0+IHByb3BlcnR5SXNSZXF1aXJlZChzdWJGaWVsZCkpO1xuICB9XG5cbiAgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgIHJldHVybiBmaWVsZC50YWJzLnNvbWUoKHRhYikgPT4gJ25hbWUnIGluIHRhYiAmJiB0YWIuZmllbGRzLmZpbmQoKHN1YkZpZWxkKSA9PiBwcm9wZXJ0eUlzUmVxdWlyZWQoc3ViRmllbGQpKSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiByZXR1cm5PcHRpb25FbnVtcyhvcHRpb25zOiBPcHRpb25bXSk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIG9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgJiYgJ3ZhbHVlJyBpbiBvcHRpb24pIHtcbiAgICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhpcyBpcyB1c2VkIGZvciBnZW5lcmF0aW5nIHRoZSBUeXBlU2NyaXB0IHR5cGVzIChwYXlsb2FkLXR5cGVzLnRzKSB3aXRoIHRoZSBwYXlsb2FkIGdlbmVyYXRlOnR5cGVzIGNvbW1hbmQuXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlRW50aXR5U2NoZW1hcyhlbnRpdGllczogKFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfCBTYW5pdGl6ZWRHbG9iYWxDb25maWcpW10pOiBKU09OU2NoZW1hNCB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSBbLi4uZW50aXRpZXNdLnJlZHVjZSgoYWNjLCB7IHNsdWcgfSkgPT4ge1xuICAgIGFjY1tzbHVnXSA9IHtcbiAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7c2x1Z31gLFxuICAgIH07XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICBwcm9wZXJ0aWVzLFxuICAgIHJlcXVpcmVkOiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSxcbiAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpZWxkc1RvSlNPTlNjaGVtYShjb2xsZWN0aW9uSURGaWVsZFR5cGVzOiB7IFtrZXk6IHN0cmluZ106ICdzdHJpbmcnIHwgJ251bWJlcicgfSwgZmllbGRzOiBGaWVsZFtdLCBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnM6IE1hcDxzdHJpbmcsIEpTT05TY2hlbWE0Pik6IHtcbiAgcHJvcGVydGllczoge1xuICAgIFtrOiBzdHJpbmddOiBKU09OU2NoZW1hNDtcbiAgfVxuICByZXF1aXJlZDogc3RyaW5nW11cbn0ge1xuICAvLyByZXF1aXJlZCBmaWVsZHMgZm9yIGEgc2NoZW1hIChjb3VsZCBiZSBmb3IgYSBuZXN0ZWQgc2NoZW1hKVxuICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IG5ldyBTZXQ8c3RyaW5nPihmaWVsZHMuZmlsdGVyKHByb3BlcnR5SXNSZXF1aXJlZCkubWFwKChmaWVsZCkgPT4gKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpID8gZmllbGQubmFtZSA6ICcnKSkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcGVydGllczogT2JqZWN0LmZyb21FbnRyaWVzKGZpZWxkcy5yZWR1Y2UoKGZpZWxkU2NoZW1hcywgZmllbGQpID0+IHtcbiAgICAgIGxldCBmaWVsZFNjaGVtYTogSlNPTlNjaGVtYTQ7XG4gICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgY2FzZSAnY29kZSc6XG4gICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgY2FzZSAnZGF0ZSc6IHtcbiAgICAgICAgICBmaWVsZFNjaGVtYSA9IHsgdHlwZTogJ3N0cmluZycgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ251bWJlcic6IHtcbiAgICAgICAgICBpZiAoZmllbGQuaGFzTWFueSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7IHR5cGU6ICdhcnJheScsIGl0ZW1zOiB7IHR5cGU6ICdudW1iZXInIH0gfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7IHR5cGU6ICdudW1iZXInIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOiB7XG4gICAgICAgICAgZmllbGRTY2hlbWEgPSB7IHR5cGU6ICdib29sZWFuJyB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnanNvbic6IHtcbiAgICAgICAgICAvLyBodHRwczovL3d3dy5yZmMtZWRpdG9yLm9yZy9yZmMvcmZjNzE1OSNzZWN0aW9uLTNcbiAgICAgICAgICBmaWVsZFNjaGVtYSA9IHtcbiAgICAgICAgICAgIG9uZU9mOiBbXG4gICAgICAgICAgICAgIHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgICAgICAgeyB0eXBlOiAnYXJyYXknIH0sXG4gICAgICAgICAgICAgIHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgeyB0eXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICAgICAgICB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICAgICAgICB7IHR5cGU6ICdudWxsJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncmljaFRleHQnOiB7XG4gICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3JhZGlvJzoge1xuICAgICAgICAgIGZpZWxkU2NoZW1hID0ge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBlbnVtOiByZXR1cm5PcHRpb25FbnVtcyhmaWVsZC5vcHRpb25zKSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdzZWxlY3QnOiB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0VHlwZTogSlNPTlNjaGVtYTQgPSB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGVudW06IHJldHVybk9wdGlvbkVudW1zKGZpZWxkLm9wdGlvbnMpLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoZmllbGQuaGFzTWFueSkge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgIGl0ZW1zOiBzZWxlY3RUeXBlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSBzZWxlY3RUeXBlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncG9pbnQnOiB7XG4gICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgbWluSXRlbXM6IDIsXG4gICAgICAgICAgICBtYXhJdGVtczogMixcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncmVsYXRpb25zaGlwJzoge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLnJlbGF0aW9uVG8pKSB7XG4gICAgICAgICAgICBpZiAoZmllbGQuaGFzTWFueSkge1xuICAgICAgICAgICAgICBmaWVsZFNjaGVtYSA9IHtcbiAgICAgICAgICAgICAgICBvbmVPZjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgICAgIG9uZU9mOiBmaWVsZC5yZWxhdGlvblRvLm1hcCgocmVsYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY29sbGVjdGlvbklERmllbGRUeXBlc1tyZWxhdGlvbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGlvblRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdDogcmVsYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFsndmFsdWUnLCAncmVsYXRpb25UbyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgb25lT2Y6IGZpZWxkLnJlbGF0aW9uVG8ubWFwKChyZWxhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke3JlbGF0aW9ufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGlvblRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdDogcmVsYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFsndmFsdWUnLCAncmVsYXRpb25UbyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZpZWxkU2NoZW1hID0ge1xuICAgICAgICAgICAgICAgIG9uZU9mOiBmaWVsZC5yZWxhdGlvblRvLm1hcCgocmVsYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25lT2Y6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbGxlY3Rpb25JREZpZWxkVHlwZXNbcmVsYXRpb25dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlZjogYCMvZGVmaW5pdGlvbnMvJHtyZWxhdGlvbn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uVG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0OiByZWxhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogWyd2YWx1ZScsICdyZWxhdGlvblRvJ10sXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuaGFzTWFueSkge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgIG9uZU9mOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbGxlY3Rpb25JREZpZWxkVHlwZXNbZmllbGQucmVsYXRpb25Ub10sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7ZmllbGQucmVsYXRpb25Ub31gLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgIG9uZU9mOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogY29sbGVjdGlvbklERmllbGRUeXBlc1tmaWVsZC5yZWxhdGlvblRvXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7ZmllbGQucmVsYXRpb25Ub31gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAndXBsb2FkJzoge1xuICAgICAgICAgIGZpZWxkU2NoZW1hID0ge1xuICAgICAgICAgICAgb25lT2Y6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbGxlY3Rpb25JREZpZWxkVHlwZXNbZmllbGQucmVsYXRpb25Ub10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke2ZpZWxkLnJlbGF0aW9uVG99YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2Jsb2Nrcyc6IHtcbiAgICAgICAgICBmaWVsZFNjaGVtYSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICBvbmVPZjogZmllbGQuYmxvY2tzLm1hcCgoYmxvY2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0ZpZWxkU2NoZW1hcyA9IGZpZWxkc1RvSlNPTlNjaGVtYShjb2xsZWN0aW9uSURGaWVsZFR5cGVzLCBibG9jay5maWVsZHMsIGludGVyZmFjZU5hbWVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja1NjaGVtYTogSlNPTlNjaGVtYTQgPSB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYmxvY2tGaWVsZFNjaGVtYXMucHJvcGVydGllcyxcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Q6IGJsb2NrLnNsdWcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2Jsb2NrVHlwZScsXG4gICAgICAgICAgICAgICAgICAgIC4uLmJsb2NrRmllbGRTY2hlbWFzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrLmludGVyZmFjZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIGludGVyZmFjZU5hbWVEZWZpbml0aW9ucy5zZXQoYmxvY2suaW50ZXJmYWNlTmFtZSwgYmxvY2tTY2hlbWEpO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke2Jsb2NrLmludGVyZmFjZU5hbWV9YCxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrU2NoZW1hO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2FycmF5Jzoge1xuICAgICAgICAgIGZpZWxkU2NoZW1hID0ge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICAgIC4uLmZpZWxkc1RvSlNPTlNjaGVtYShjb2xsZWN0aW9uSURGaWVsZFR5cGVzLCBmaWVsZC5maWVsZHMsIGludGVyZmFjZU5hbWVEZWZpbml0aW9ucyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoZmllbGQuaW50ZXJmYWNlTmFtZSkge1xuICAgICAgICAgICAgaW50ZXJmYWNlTmFtZURlZmluaXRpb25zLnNldChmaWVsZC5pbnRlcmZhY2VOYW1lLCBmaWVsZFNjaGVtYSk7XG5cbiAgICAgICAgICAgIGZpZWxkU2NoZW1hID0ge1xuICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke2ZpZWxkLmludGVyZmFjZU5hbWV9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncm93JzpcbiAgICAgICAgY2FzZSAnY29sbGFwc2libGUnOiB7XG4gICAgICAgICAgY29uc3QgY2hpbGRTY2hlbWEgPSBmaWVsZHNUb0pTT05TY2hlbWEoY29sbGVjdGlvbklERmllbGRUeXBlcywgZmllbGQuZmllbGRzLCBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMpO1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNoaWxkU2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goKFtwcm9wTmFtZSwgcHJvcFNjaGVtYV0pID0+IHtcbiAgICAgICAgICAgIGZpZWxkU2NoZW1hcy5zZXQocHJvcE5hbWUsIHByb3BTY2hlbWEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNoaWxkU2NoZW1hLnJlcXVpcmVkLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XG4gICAgICAgICAgICByZXF1aXJlZEZpZWxkcy5hZGQocHJvcE5hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAndGFicyc6IHtcbiAgICAgICAgICBmaWVsZC50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRTY2hlbWEgPSBmaWVsZHNUb0pTT05TY2hlbWEoY29sbGVjdGlvbklERmllbGRUeXBlcywgdGFiLmZpZWxkcywgaW50ZXJmYWNlTmFtZURlZmluaXRpb25zKTtcbiAgICAgICAgICAgIGlmICh0YWJIYXNOYW1lKHRhYikpIHtcbiAgICAgICAgICAgICAgLy8gY291bGQgaGF2ZSBpbnRlcmZhY2VcbiAgICAgICAgICAgICAgZmllbGRTY2hlbWFzLnNldCh0YWIubmFtZSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAuLi5jaGlsZFNjaGVtYSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJlcXVpcmVkRmllbGRzLmFkZCh0YWIubmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhjaGlsZFNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChbcHJvcE5hbWUsIHByb3BTY2hlbWFdKSA9PiB7XG4gICAgICAgICAgICAgICAgZmllbGRTY2hlbWFzLnNldChwcm9wTmFtZSwgcHJvcFNjaGVtYSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBjaGlsZFNjaGVtYS5yZXF1aXJlZC5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkRmllbGRzLmFkZChwcm9wTmFtZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnZ3JvdXAnOiB7XG4gICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLmZpZWxkc1RvSlNPTlNjaGVtYShjb2xsZWN0aW9uSURGaWVsZFR5cGVzLCBmaWVsZC5maWVsZHMsIGludGVyZmFjZU5hbWVEZWZpbml0aW9ucyksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChmaWVsZC5pbnRlcmZhY2VOYW1lKSB7XG4gICAgICAgICAgICBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMuc2V0KGZpZWxkLmludGVyZmFjZU5hbWUsIGZpZWxkU2NoZW1hKTtcblxuICAgICAgICAgICAgZmllbGRTY2hlbWEgPSB7XG4gICAgICAgICAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7ZmllbGQuaW50ZXJmYWNlTmFtZX1gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkU2NoZW1hICYmIGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgICAgIGZpZWxkU2NoZW1hcy5zZXQoZmllbGQubmFtZSwgZmllbGRTY2hlbWEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmllbGRTY2hlbWFzO1xuICAgIH0sIG5ldyBNYXA8c3RyaW5nLCBKU09OU2NoZW1hND4oKSkpLFxuICAgIHJlcXVpcmVkOiBBcnJheS5mcm9tKHJlcXVpcmVkRmllbGRzKSxcbiAgfTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIGFuZCBpcyBleHBvcnRlZCB0aHJvdWdoIHBheWxvYWQvdXRpbGl0aWVzXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5VG9KU09OU2NoZW1hKGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBpbmNvbWluZ0VudGl0eTogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB8IFNhbml0aXplZEdsb2JhbENvbmZpZywgaW50ZXJmYWNlTmFtZURlZmluaXRpb25zOiBNYXA8c3RyaW5nLCBKU09OU2NoZW1hND4pOiBKU09OU2NoZW1hNCB7XG4gIGNvbnN0IGVudGl0eTogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB8IFNhbml0aXplZEdsb2JhbENvbmZpZyA9IGRlZXBDb3B5T2JqZWN0KGluY29taW5nRW50aXR5KTtcbiAgY29uc3QgdGl0bGUgPSBlbnRpdHkudHlwZXNjcmlwdD8uaW50ZXJmYWNlID8gZW50aXR5LnR5cGVzY3JpcHQuaW50ZXJmYWNlIDogc2luZ3VsYXIodG9Xb3JkcyhlbnRpdHkuc2x1ZywgdHJ1ZSkpO1xuXG4gIGNvbnN0IGlkRmllbGQ6IEZpZWxkQWZmZWN0aW5nRGF0YSA9IHsgdHlwZTogJ3RleHQnLCBuYW1lOiAnaWQnLCByZXF1aXJlZDogdHJ1ZSB9O1xuICBjb25zdCBjdXN0b21JZEZpZWxkID0gZW50aXR5LmZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gJ2lkJykgYXMgRmllbGRBZmZlY3RpbmdEYXRhO1xuXG4gIGlmIChjdXN0b21JZEZpZWxkICYmIGN1c3RvbUlkRmllbGQudHlwZSAhPT0gJ2dyb3VwJyAmJiBjdXN0b21JZEZpZWxkLnR5cGUgIT09ICd0YWInKSB7XG4gICAgY3VzdG9tSWRGaWVsZC5yZXF1aXJlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgZW50aXR5LmZpZWxkcy51bnNoaWZ0KGlkRmllbGQpO1xuICB9XG5cbiAgLy8gbWFyayB0aW1lc3RhbXAgZmllbGRzIHJlcXVpcmVkXG4gIGlmICgndGltZXN0YW1wcycgaW4gZW50aXR5ICYmIGVudGl0eS50aW1lc3RhbXBzICE9PSBmYWxzZSkge1xuICAgIGVudGl0eS5maWVsZHMgPSBlbnRpdHkuZmllbGRzLm1hcCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiAoZmllbGQubmFtZSA9PT0gJ2NyZWF0ZWRBdCcgfHwgZmllbGQubmFtZSA9PT0gJ3VwZGF0ZWRBdCcpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZmllbGQ7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoJ2F1dGgnIGluIGVudGl0eSAmJiBlbnRpdHkuYXV0aCAmJiAhZW50aXR5LmF1dGg/LmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgZW50aXR5LmZpZWxkcy5wdXNoKHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIG5hbWU6ICdwYXNzd29yZCcsXG4gICAgfSk7XG4gIH1cblxuICAvLyB1c2VkIGZvciByZWxhdGlvbnNoaXAgZmllbGRzLCB0byBkZXRlcm1pbmUgd2hldGhlciB0byB1c2UgYSBzdHJpbmcgb3IgbnVtYmVyIHR5cGUgZm9yIHRoZSBJRFxuICBjb25zdCBjb2xsZWN0aW9uSURGaWVsZFR5cGVzOiB7IFtrZXk6IHN0cmluZ106ICdzdHJpbmcnIHwgJ251bWJlcicgfSA9IGNvbmZpZy5jb2xsZWN0aW9ucy5yZWR1Y2UoKGFjYywgY29sbGVjdGlvbikgPT4ge1xuICAgIGNvbnN0IGN1c3RvbUNvbGxlY3Rpb25JZEZpZWxkID0gY29sbGVjdGlvbi5maWVsZHMuZmluZCgoZmllbGQpID0+ICduYW1lJyBpbiBmaWVsZCAmJiBmaWVsZC5uYW1lID09PSAnaWQnKTtcblxuICAgIGFjY1tjb2xsZWN0aW9uLnNsdWddID0gY3VzdG9tQ29sbGVjdGlvbklkRmllbGQ/LnR5cGUgPT09ICdudW1iZXInXG4gICAgICA/ICdudW1iZXInXG4gICAgICA6ICdzdHJpbmcnO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgIC4uLmZpZWxkc1RvSlNPTlNjaGVtYShjb2xsZWN0aW9uSURGaWVsZFR5cGVzLCBlbnRpdHkuZmllbGRzLCBpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnVG9KU09OU2NoZW1hKGNvbmZpZzogU2FuaXRpemVkQ29uZmlnKTogSlNPTlNjaGVtYTQge1xuICAvLyBhIG11dGFibGUgTWFwIHRvIHN0b3JlIGN1c3RvbSB0b3AtbGV2ZWwgYGludGVyZmFjZU5hbWVgIHR5cGVzXG4gIGNvbnN0IGludGVyZmFjZU5hbWVEZWZpbml0aW9uczogTWFwPHN0cmluZywgSlNPTlNjaGVtYTQ+ID0gbmV3IE1hcCgpO1xuICBjb25zdCBlbnRpdHlEZWZpbml0aW9uczogeyBbazogc3RyaW5nXTogSlNPTlNjaGVtYTQgfSA9IFsuLi5jb25maWcuZ2xvYmFscywgLi4uY29uZmlnLmNvbGxlY3Rpb25zXS5yZWR1Y2UoKGFjYywgZW50aXR5KSA9PiB7XG4gICAgYWNjW2VudGl0eS5zbHVnXSA9IGVudGl0eVRvSlNPTlNjaGVtYShjb25maWcsIGVudGl0eSwgaW50ZXJmYWNlTmFtZURlZmluaXRpb25zKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0NvbmZpZycsXG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGNvbGxlY3Rpb25zOiBnZW5lcmF0ZUVudGl0eVNjaGVtYXMoY29uZmlnLmNvbGxlY3Rpb25zKSxcbiAgICAgIGdsb2JhbHM6IGdlbmVyYXRlRW50aXR5U2NoZW1hcyhjb25maWcuZ2xvYmFscyksXG4gICAgfSxcbiAgICByZXF1aXJlZDogWydjb2xsZWN0aW9ucycsICdnbG9iYWxzJ10sXG4gICAgZGVmaW5pdGlvbnM6IHsgLi4uZW50aXR5RGVmaW5pdGlvbnMsIC4uLk9iamVjdC5mcm9tRW50cmllcyhpbnRlcmZhY2VOYW1lRGVmaW5pdGlvbnMpIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiZW50aXR5VG9KU09OU2NoZW1hIiwiY29uZmlnVG9KU09OU2NoZW1hIiwic2luZ3VsYXIiLCJwbHVyYWxpemUiLCJwcm9wZXJ0eUlzUmVxdWlyZWQiLCJmaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJyZXF1aXJlZCIsInR5cGUiLCJhZG1pbiIsImNvbmRpdGlvbiIsImFjY2VzcyIsInJlYWQiLCJmaWVsZHMiLCJmaW5kIiwic3ViRmllbGQiLCJ0YWJzIiwic29tZSIsInRhYiIsInJldHVybk9wdGlvbkVudW1zIiwib3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsInZhbHVlIiwiZ2VuZXJhdGVFbnRpdHlTY2hlbWFzIiwiZW50aXRpZXMiLCJwcm9wZXJ0aWVzIiwicmVkdWNlIiwiYWNjIiwic2x1ZyIsIiRyZWYiLCJPYmplY3QiLCJrZXlzIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJmaWVsZHNUb0pTT05TY2hlbWEiLCJjb2xsZWN0aW9uSURGaWVsZFR5cGVzIiwiaW50ZXJmYWNlTmFtZURlZmluaXRpb25zIiwicmVxdWlyZWRGaWVsZHMiLCJTZXQiLCJmaWx0ZXIiLCJuYW1lIiwiZnJvbUVudHJpZXMiLCJmaWVsZFNjaGVtYXMiLCJmaWVsZFNjaGVtYSIsImhhc01hbnkiLCJpdGVtcyIsIm9uZU9mIiwiZW51bSIsInNlbGVjdFR5cGUiLCJtaW5JdGVtcyIsIm1heEl0ZW1zIiwiQXJyYXkiLCJpc0FycmF5IiwicmVsYXRpb25UbyIsInJlbGF0aW9uIiwiY29uc3QiLCJibG9ja3MiLCJibG9jayIsImJsb2NrRmllbGRTY2hlbWFzIiwiYmxvY2tTY2hlbWEiLCJibG9ja1R5cGUiLCJpbnRlcmZhY2VOYW1lIiwic2V0IiwiY2hpbGRTY2hlbWEiLCJlbnRyaWVzIiwiZm9yRWFjaCIsInByb3BOYW1lIiwicHJvcFNjaGVtYSIsImFkZCIsInRhYkhhc05hbWUiLCJNYXAiLCJmcm9tIiwiY29uZmlnIiwiaW5jb21pbmdFbnRpdHkiLCJlbnRpdHkiLCJkZWVwQ29weU9iamVjdCIsInRpdGxlIiwidHlwZXNjcmlwdCIsImludGVyZmFjZSIsInRvV29yZHMiLCJpZEZpZWxkIiwiY3VzdG9tSWRGaWVsZCIsInVuc2hpZnQiLCJ0aW1lc3RhbXBzIiwiYXV0aCIsImRpc2FibGVMb2NhbFN0cmF0ZWd5IiwicHVzaCIsImNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbiIsImN1c3RvbUNvbGxlY3Rpb25JZEZpZWxkIiwiZW50aXR5RGVmaW5pdGlvbnMiLCJnbG9iYWxzIiwiZGVmaW5pdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBdVpnQkEsa0JBQWtCO2VBQWxCQTs7SUFvREFDLGtCQUFrQjtlQUFsQkE7OzttRUEzY007cUJBRTBEO3FFQUdyRDs0QkFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHeEIsSUFBTSxBQUFFQyxXQUFhQyxxQkFBUyxDQUF0QkQ7QUFFUixJQUFNRSxxQkFBcUIsU0FBQ0M7SUFDMUIsSUFBSUMsSUFBQUEsdUJBQWdCLEVBQUNELFVBQVksY0FBY0EsU0FBU0EsTUFBTUUsUUFBUSxLQUFLLE1BQVEsT0FBTztJQUUxRixJQUFJLFlBQVlGLFNBQVNBLE1BQU1HLElBQUksS0FBSyxTQUFTO1lBQzNDSCxjQUEwQkE7UUFBOUIsSUFBSUEsRUFBQUEsZUFBQUEsTUFBTUksS0FBSyxjQUFYSixtQ0FBQUEsYUFBYUssU0FBUyxPQUFJTCxnQkFBQUEsTUFBTU0sTUFBTSxjQUFaTixvQ0FBQUEsY0FBY08sSUFBSSxHQUFFLE9BQU87UUFDekQsT0FBT1AsTUFBTVEsTUFBTSxDQUFDQyxJQUFJLENBQUMsU0FBQ0M7bUJBQWFYLG1CQUFtQlc7O0lBQzVEO0lBRUEsSUFBSVYsTUFBTUcsSUFBSSxLQUFLLFFBQVE7UUFDekIsT0FBT0gsTUFBTVcsSUFBSSxDQUFDQyxJQUFJLENBQUMsU0FBQ0M7bUJBQVEsVUFBVUEsT0FBT0EsSUFBSUwsTUFBTSxD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