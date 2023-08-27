/* eslint-disable @typescript-eslint/no-use-before-define */ /* eslint-disable no-await-in-loop */ /* eslint-disable no-restricted-syntax */ /* eslint-disable no-use-before-define */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _graphqltypejson = require("graphql-type-json");
var _graphql = require("graphql");
var _graphqlscalars = require("graphql-scalars");
var _types = require("../../fields/config/types");
var _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
var _combineParentName = /*#__PURE__*/ _interop_require_default(require("../utilities/combineParentName"));
var _withNullableType = /*#__PURE__*/ _interop_require_default(require("./withNullableType"));
var _formatLabels = require("../../utilities/formatLabels");
var _richTextRelationshipPromise = /*#__PURE__*/ _interop_require_default(require("../../fields/richText/richTextRelationshipPromise"));
var _formatOptions = /*#__PURE__*/ _interop_require_default(require("../utilities/formatOptions"));
var _buildWhereInputType = /*#__PURE__*/ _interop_require_default(require("./buildWhereInputType"));
var _isFieldNullable = /*#__PURE__*/ _interop_require_default(require("./isFieldNullable"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function buildObjectType(param) {
    var payload = param.payload, name = param.name, fields = param.fields, parentName = param.parentName, _param_baseFields = param.baseFields, baseFields = _param_baseFields === void 0 ? {} : _param_baseFields, forceNullable = param.forceNullable;
    var fieldToSchemaMap = {
        number: function(objectTypeConfig, field) {
            var _field, _field1;
            var type = ((_field = field) === null || _field === void 0 ? void 0 : _field.name) === "id" ? _graphql.GraphQLInt : _graphql.GraphQLFloat;
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, ((_field1 = field) === null || _field1 === void 0 ? void 0 : _field1.hasMany) === true ? new _graphql.GraphQLList(type) : type, forceNullable)
            }));
        },
        text: function(objectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
            }));
        },
        email: function(objectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphqlscalars.EmailAddressResolver, forceNullable)
            }));
        },
        textarea: function(objectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
            }));
        },
        code: function(objectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
            }));
        },
        json: function(objectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphqltypejson.GraphQLJSON, forceNullable)
            }));
        },
        date: function(objectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphqlscalars.DateTimeResolver, forceNullable)
            }));
        },
        point: function(objectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, new _graphql.GraphQLList(new _graphql.GraphQLNonNull(_graphql.GraphQLFloat)), forceNullable)
            }));
        },
        richText: function(objectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphqltypejson.GraphQLJSON, forceNullable),
                resolve: function resolve(parent, args, context) {
                    return _async_to_generator(function() {
                        var depth;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    depth = payload.config.defaultDepth;
                                    if (typeof args.depth !== "undefined") depth = args.depth;
                                    if (!(depth > 0)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        (0, _richTextRelationshipPromise.default)({
                                            req: context.req,
                                            siblingDoc: parent,
                                            depth: depth,
                                            field: field,
                                            showHiddenFields: false
                                        })
                                    ];
                                case 1:
                                    _state.sent();
                                    _state.label = 2;
                                case 2:
                                    return [
                                        2,
                                        parent[field.name]
                                    ];
                            }
                        });
                    })();
                },
                args: {
                    depth: {
                        type: _graphql.GraphQLInt
                    }
                }
            }));
        },
        upload: function(objectTypeConfig, field) {
            var relationTo = field.relationTo;
            var uploadName = (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true));
            // If the relationshipType is undefined at this point,
            // it can be assumed that this blockType can have a relationship
            // to itself. Therefore, we set the relationshipType equal to the blockType
            // that is currently being created.
            var type = (0, _withNullableType.default)(field, payload.collections[relationTo].graphQL.type || newlyCreatedBlockType, forceNullable);
            var uploadArgs = {};
            if (payload.config.localization) {
                uploadArgs.locale = {
                    type: payload.types.localeInputType
                };
                uploadArgs.fallbackLocale = {
                    type: payload.types.fallbackLocaleInputType
                };
            }
            var relatedCollectionSlug = field.relationTo;
            var upload = {
                args: uploadArgs,
                type: type,
                extensions: {
                    complexity: 20
                },
                resolve: function resolve(parent, args, context) {
                    return _async_to_generator(function() {
                        var value, locale, fallbackLocale, id, relatedDocument;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    value = parent[field.name];
                                    locale = args.locale || context.req.locale;
                                    fallbackLocale = args.fallbackLocale || context.req.fallbackLocale;
                                    id = value;
                                    if (!id) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        context.req.payloadDataLoader.load(JSON.stringify([
                                            context.req.transactionID,
                                            relatedCollectionSlug,
                                            id,
                                            0,
                                            0,
                                            locale,
                                            fallbackLocale,
                                            false,
                                            false
                                        ]))
                                    ];
                                case 1:
                                    relatedDocument = _state.sent();
                                    return [
                                        2,
                                        relatedDocument || null
                                    ];
                                case 2:
                                    return [
                                        2,
                                        null
                                    ];
                            }
                        });
                    })();
                }
            };
            var whereFields = payload.collections[relationTo].config.fields;
            upload.args.where = {
                type: (0, _buildWhereInputType.default)(uploadName, whereFields, uploadName)
            };
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, upload));
        },
        radio: function(objectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, new _graphql.GraphQLEnumType({
                    name: (0, _combineParentName.default)(parentName, field.name),
                    values: (0, _formatOptions.default)(field)
                }), forceNullable)
            }));
        },
        checkbox: function(objectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLBoolean, forceNullable)
            }));
        },
        select: function(objectTypeConfig, field) {
            var fullName = (0, _combineParentName.default)(parentName, field.name);
            var type = new _graphql.GraphQLEnumType({
                name: fullName,
                values: (0, _formatOptions.default)(field)
            });
            type = field.hasMany ? new _graphql.GraphQLList(new _graphql.GraphQLNonNull(type)) : type;
            type = (0, _withNullableType.default)(field, type, forceNullable);
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: type
            }));
        },
        relationship: function(objectTypeConfig, field) {
            var relationTo = field.relationTo;
            var isRelatedToManyCollections = Array.isArray(relationTo);
            var hasManyValues = field.hasMany;
            var relationshipName = (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true));
            var type;
            var relationToType = null;
            if (Array.isArray(relationTo)) {
                relationToType = new _graphql.GraphQLEnumType({
                    name: "".concat(relationshipName, "_RelationTo"),
                    values: relationTo.reduce(function(relations, relation) {
                        return _object_spread_props(_object_spread({}, relations), _define_property({}, (0, _formatName.default)(relation), {
                            value: relation
                        }));
                    }, {})
                });
                var types = relationTo.map(function(relation) {
                    return payload.collections[relation].graphQL.type;
                });
                type = new _graphql.GraphQLObjectType({
                    name: "".concat(relationshipName, "_Relationship"),
                    fields: {
                        relationTo: {
                            type: relationToType
                        },
                        value: {
                            type: new _graphql.GraphQLUnionType({
                                name: relationshipName,
                                types: types,
                                resolveType: function resolveType(data, param) {
                                    var req = param.req;
                                    return _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                payload.collections[data.collection].graphQL.type.name
                                            ];
                                        });
                                    })();
                                }
                            })
                        }
                    }
                });
            } else {
                type = payload.collections[relationTo].graphQL.type;
            }
            // If the relationshipType is undefined at this point,
            // it can be assumed that this blockType can have a relationship
            // to itself. Therefore, we set the relationshipType equal to the blockType
            // that is currently being created.
            type = type || newlyCreatedBlockType;
            var relationshipArgs = {};
            if (payload.config.localization) {
                relationshipArgs.locale = {
                    type: payload.types.localeInputType
                };
                relationshipArgs.fallbackLocale = {
                    type: payload.types.fallbackLocaleInputType
                };
            }
            var relationship = {
                args: relationshipArgs,
                type: (0, _withNullableType.default)(field, hasManyValues ? new _graphql.GraphQLList(new _graphql.GraphQLNonNull(type)) : type, forceNullable),
                extensions: {
                    complexity: 10
                },
                resolve: function resolve(parent, args, context) {
                    return _async_to_generator(function() {
                        var value, locale, fallbackLocale, relatedCollectionSlug, results, resultPromises, createPopulationPromise, id, relatedDocument;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    value = parent[field.name];
                                    locale = args.locale || context.req.locale;
                                    fallbackLocale = args.fallbackLocale || context.req.fallbackLocale;
                                    relatedCollectionSlug = field.relationTo;
                                    if (!hasManyValues) return [
                                        3,
                                        2
                                    ];
                                    results = [];
                                    resultPromises = [];
                                    createPopulationPromise = function() {
                                        var _ref = _async_to_generator(function(relatedDoc, i) {
                                            var id, collectionSlug, result;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        id = relatedDoc;
                                                        collectionSlug = field.relationTo;
                                                        if (isRelatedToManyCollections) {
                                                            collectionSlug = relatedDoc.relationTo;
                                                            id = relatedDoc.value;
                                                        }
                                                        return [
                                                            4,
                                                            context.req.payloadDataLoader.load(JSON.stringify([
                                                                context.req.transactionID,
                                                                collectionSlug,
                                                                id,
                                                                0,
                                                                0,
                                                                locale,
                                                                fallbackLocale,
                                                                false,
                                                                false
                                                            ]))
                                                        ];
                                                    case 1:
                                                        result = _state.sent();
                                                        if (result) {
                                                            if (isRelatedToManyCollections) {
                                                                results[i] = {
                                                                    relationTo: collectionSlug,
                                                                    value: _object_spread_props(_object_spread({}, result), {
                                                                        collection: collectionSlug
                                                                    })
                                                                };
                                                            } else {
                                                                results[i] = result;
                                                            }
                                                        }
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function createPopulationPromise(relatedDoc, i) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }();
                                    if (value) {
                                        value.forEach(function(relatedDoc, i) {
                                            resultPromises.push(createPopulationPromise(relatedDoc, i));
                                        });
                                    }
                                    return [
                                        4,
                                        Promise.all(resultPromises)
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        2,
                                        results
                                    ];
                                case 2:
                                    id = value;
                                    if (isRelatedToManyCollections && value) {
                                        id = value.value;
                                        relatedCollectionSlug = value.relationTo;
                                    }
                                    if (!id) return [
                                        3,
                                        4
                                    ];
                                    return [
                                        4,
                                        context.req.payloadDataLoader.load(JSON.stringify([
                                            context.req.transactionID,
                                            relatedCollectionSlug,
                                            id,
                                            0,
                                            0,
                                            locale,
                                            fallbackLocale,
                                            false,
                                            false
                                        ]))
                                    ];
                                case 3:
                                    relatedDocument = _state.sent();
                                    if (relatedDocument) {
                                        if (isRelatedToManyCollections) {
                                            return [
                                                2,
                                                {
                                                    relationTo: relatedCollectionSlug,
                                                    value: _object_spread_props(_object_spread({}, relatedDocument), {
                                                        collection: relatedCollectionSlug
                                                    })
                                                }
                                            ];
                                        }
                                        return [
                                            2,
                                            relatedDocument
                                        ];
                                    }
                                    return [
                                        2,
                                        null
                                    ];
                                case 4:
                                    return [
                                        2,
                                        null
                                    ];
                            }
                        });
                    })();
                }
            };
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, relationship));
        },
        array: function(objectTypeConfig, field) {
            var _field;
            var interfaceName = ((_field = field) === null || _field === void 0 ? void 0 : _field.interfaceName) || (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true));
            if (!payload.types.arrayTypes[interfaceName]) {
                // eslint-disable-next-line no-param-reassign
                payload.types.arrayTypes[interfaceName] = buildObjectType({
                    payload: payload,
                    name: interfaceName,
                    parentName: interfaceName,
                    fields: field.fields,
                    forceNullable: (0, _isFieldNullable.default)(field, forceNullable)
                });
            }
            var arrayType = new _graphql.GraphQLList(new _graphql.GraphQLNonNull(payload.types.arrayTypes[interfaceName]));
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, arrayType)
            }));
        },
        group: function(objectTypeConfig, field) {
            var _field;
            var interfaceName = ((_field = field) === null || _field === void 0 ? void 0 : _field.interfaceName) || (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true));
            if (!payload.types.groupTypes[interfaceName]) {
                // eslint-disable-next-line no-param-reassign
                payload.types.groupTypes[interfaceName] = buildObjectType({
                    payload: payload,
                    name: interfaceName,
                    parentName: interfaceName,
                    fields: field.fields,
                    forceNullable: (0, _isFieldNullable.default)(field, forceNullable)
                });
            }
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: payload.types.groupTypes[interfaceName]
            }));
        },
        blocks: function(objectTypeConfig, field) {
            var blockTypes = field.blocks.map(function(block) {
                if (!payload.types.blockTypes[block.slug]) {
                    var _block, _block_graphQL, _block1;
                    var interfaceName = ((_block = block) === null || _block === void 0 ? void 0 : _block.interfaceName) || ((_block1 = block) === null || _block1 === void 0 ? void 0 : (_block_graphQL = _block1.graphQL) === null || _block_graphQL === void 0 ? void 0 : _block_graphQL.singularName) || (0, _formatLabels.toWords)(block.slug, true);
                    // eslint-disable-next-line no-param-reassign
                    payload.types.blockTypes[block.slug] = buildObjectType({
                        payload: payload,
                        name: interfaceName,
                        parentName: interfaceName,
                        fields: _to_consumable_array(block.fields).concat([
                            {
                                name: "blockType",
                                type: "text"
                            }
                        ]),
                        forceNullable: forceNullable
                    });
                }
                return payload.types.blockTypes[block.slug];
            });
            var fullName = (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true));
            var type = new _graphql.GraphQLList(new _graphql.GraphQLNonNull(new _graphql.GraphQLUnionType({
                name: fullName,
                types: blockTypes,
                resolveType: function(data) {
                    return payload.types.blockTypes[data.blockType].name;
                }
            })));
            return _object_spread_props(_object_spread({}, objectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, type)
            }));
        },
        row: function(objectTypeConfig, field) {
            return field.fields.reduce(function(objectTypeConfigWithRowFields, subField) {
                var addSubField = fieldToSchemaMap[subField.type];
                if (addSubField) return addSubField(objectTypeConfigWithRowFields, subField);
                return objectTypeConfigWithRowFields;
            }, objectTypeConfig);
        },
        collapsible: function(objectTypeConfig, field) {
            return field.fields.reduce(function(objectTypeConfigWithCollapsibleFields, subField) {
                var addSubField = fieldToSchemaMap[subField.type];
                if (addSubField) return addSubField(objectTypeConfigWithCollapsibleFields, subField);
                return objectTypeConfigWithCollapsibleFields;
            }, objectTypeConfig);
        },
        tabs: function(objectTypeConfig, field) {
            return field.tabs.reduce(function(tabSchema, tab) {
                if ((0, _types.tabHasName)(tab)) {
                    var _tab;
                    var interfaceName = ((_tab = tab) === null || _tab === void 0 ? void 0 : _tab.interfaceName) || (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(tab.name, true));
                    if (!payload.types.tabTypes[interfaceName]) {
                        // eslint-disable-next-line no-param-reassign
                        payload.types.tabTypes[interfaceName] = buildObjectType({
                            payload: payload,
                            name: interfaceName,
                            parentName: interfaceName,
                            fields: tab.fields,
                            forceNullable: forceNullable
                        });
                    }
                    return _object_spread_props(_object_spread({}, tabSchema), _define_property({}, tab.name, {
                        type: payload.types.tabTypes[interfaceName]
                    }));
                }
                return _object_spread({}, tabSchema, tab.fields.reduce(function(subFieldSchema, subField) {
                    var addSubField = fieldToSchemaMap[subField.type];
                    if (addSubField) return addSubField(subFieldSchema, subField);
                    return subFieldSchema;
                }, tabSchema));
            }, objectTypeConfig);
        }
    };
    var objectSchema = {
        name: name,
        fields: function() {
            return fields.reduce(function(objectTypeConfig, field) {
                var fieldSchema = fieldToSchemaMap[field.type];
                if (typeof fieldSchema !== "function") {
                    return objectTypeConfig;
                }
                return _object_spread({}, objectTypeConfig, fieldSchema(objectTypeConfig, field));
            }, baseFields);
        }
    };
    var newlyCreatedBlockType = new _graphql.GraphQLObjectType(objectSchema);
    return newlyCreatedBlockType;
}
var _default = buildObjectType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZE9iamVjdFR5cGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hd2FpdC1pbi1sb29wICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCB7IEdyYXBoUUxKU09OIH0gZnJvbSAnZ3JhcGhxbC10eXBlLWpzb24nO1xuaW1wb3J0IHtcbiAgR3JhcGhRTEJvb2xlYW4sXG4gIEdyYXBoUUxFbnVtVHlwZSxcbiAgR3JhcGhRTEZpZWxkQ29uZmlnLFxuICBHcmFwaFFMRmxvYXQsXG4gIEdyYXBoUUxJbnQsXG4gIEdyYXBoUUxMaXN0LFxuICBHcmFwaFFMTm9uTnVsbCxcbiAgR3JhcGhRTE9iamVjdFR5cGUsXG4gIEdyYXBoUUxTdHJpbmcsXG4gIEdyYXBoUUxUeXBlLFxuICBHcmFwaFFMVW5pb25UeXBlLFxufSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IERhdGVUaW1lUmVzb2x2ZXIsIEVtYWlsQWRkcmVzc1Jlc29sdmVyIH0gZnJvbSAnZ3JhcGhxbC1zY2FsYXJzJztcbmltcG9ydCB7XG4gIEFycmF5RmllbGQsXG4gIEJsb2NrRmllbGQsXG4gIENoZWNrYm94RmllbGQsXG4gIENvZGVGaWVsZCxcbiAgQ29sbGFwc2libGVGaWVsZCxcbiAgRGF0ZUZpZWxkLFxuICBFbWFpbEZpZWxkLFxuICBGaWVsZCxcbiAgR3JvdXBGaWVsZCxcbiAgSlNPTkZpZWxkLFxuICBOdW1iZXJGaWVsZCxcbiAgUG9pbnRGaWVsZCxcbiAgUmFkaW9GaWVsZCxcbiAgUmVsYXRpb25zaGlwRmllbGQsXG4gIFJpY2hUZXh0RmllbGQsXG4gIFJvd0ZpZWxkLFxuICBTZWxlY3RGaWVsZCxcbiAgdGFiSGFzTmFtZSxcbiAgVGFic0ZpZWxkLFxuICBUZXh0YXJlYUZpZWxkLFxuICBUZXh0RmllbGQsXG4gIFVwbG9hZEZpZWxkLFxufSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXROYW1lJztcbmltcG9ydCBjb21iaW5lUGFyZW50TmFtZSBmcm9tICcuLi91dGlsaXRpZXMvY29tYmluZVBhcmVudE5hbWUnO1xuaW1wb3J0IHdpdGhOdWxsYWJsZVR5cGUgZnJvbSAnLi93aXRoTnVsbGFibGVUeXBlJztcbmltcG9ydCB7IHRvV29yZHMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZm9ybWF0TGFiZWxzJztcbmltcG9ydCBjcmVhdGVSaWNoVGV4dFJlbGF0aW9uc2hpcFByb21pc2UgZnJvbSAnLi4vLi4vZmllbGRzL3JpY2hUZXh0L3JpY2hUZXh0UmVsYXRpb25zaGlwUHJvbWlzZSc7XG5pbXBvcnQgZm9ybWF0T3B0aW9ucyBmcm9tICcuLi91dGlsaXRpZXMvZm9ybWF0T3B0aW9ucyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgYnVpbGRXaGVyZUlucHV0VHlwZSBmcm9tICcuL2J1aWxkV2hlcmVJbnB1dFR5cGUnO1xuaW1wb3J0IGlzRmllbGROdWxsYWJsZSBmcm9tICcuL2lzRmllbGROdWxsYWJsZSc7XG5cbnR5cGUgTG9jYWxlSW5wdXRUeXBlID0ge1xuICBsb2NhbGU6IHtcbiAgICB0eXBlOiBHcmFwaFFMVHlwZTtcbiAgfSxcbiAgZmFsbGJhY2tMb2NhbGU6IHtcbiAgICB0eXBlOiBHcmFwaFFMVHlwZTtcbiAgfSxcbiAgd2hlcmU6IHtcbiAgICB0eXBlOiBHcmFwaFFMVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBPYmplY3RUeXBlQ29uZmlnID0ge1xuICBbcGF0aDogc3RyaW5nXTogR3JhcGhRTEZpZWxkQ29uZmlnPGFueSwgYW55PlxufVxuXG50eXBlIEFyZ3MgPSB7XG4gIHBheWxvYWQ6IFBheWxvYWRcbiAgbmFtZTogc3RyaW5nXG4gIHBhcmVudE5hbWU6IHN0cmluZ1xuICBmaWVsZHM6IEZpZWxkW11cbiAgYmFzZUZpZWxkcz86IE9iamVjdFR5cGVDb25maWdcbiAgZm9yY2VOdWxsYWJsZT86IGJvb2xlYW5cbn1cblxuZnVuY3Rpb24gYnVpbGRPYmplY3RUeXBlKHtcbiAgcGF5bG9hZCxcbiAgbmFtZSxcbiAgZmllbGRzLFxuICBwYXJlbnROYW1lLFxuICBiYXNlRmllbGRzID0ge30sXG4gIGZvcmNlTnVsbGFibGUsXG59OiBBcmdzKTogR3JhcGhRTE9iamVjdFR5cGUge1xuICBjb25zdCBmaWVsZFRvU2NoZW1hTWFwID0ge1xuICAgIG51bWJlcjogKG9iamVjdFR5cGVDb25maWc6IE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBOdW1iZXJGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGZpZWxkPy5uYW1lID09PSAnaWQnID8gR3JhcGhRTEludCA6IEdyYXBoUUxGbG9hdDtcbiAgICAgIHJldHVybiAoe1xuICAgICAgICAuLi5vYmplY3RUeXBlQ29uZmlnLFxuICAgICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgZmllbGQ/Lmhhc01hbnkgPT09IHRydWUgPyBuZXcgR3JhcGhRTExpc3QodHlwZSkgOiB0eXBlLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICB0ZXh0OiAob2JqZWN0VHlwZUNvbmZpZzogT2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IFRleHRGaWVsZCkgPT4gKHtcbiAgICAgIC4uLm9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgR3JhcGhRTFN0cmluZywgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICBlbWFpbDogKG9iamVjdFR5cGVDb25maWc6IE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBFbWFpbEZpZWxkKSA9PiAoe1xuICAgICAgLi4ub2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBFbWFpbEFkZHJlc3NSZXNvbHZlciwgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICB0ZXh0YXJlYTogKG9iamVjdFR5cGVDb25maWc6IE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBUZXh0YXJlYUZpZWxkKSA9PiAoe1xuICAgICAgLi4ub2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMU3RyaW5nLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIGNvZGU6IChvYmplY3RUeXBlQ29uZmlnOiBPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQ29kZUZpZWxkKSA9PiAoe1xuICAgICAgLi4ub2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMU3RyaW5nLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIGpzb246IChvYmplY3RUeXBlQ29uZmlnOiBPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogSlNPTkZpZWxkKSA9PiAoe1xuICAgICAgLi4ub2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMSlNPTiwgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICBkYXRlOiAob2JqZWN0VHlwZUNvbmZpZzogT2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IERhdGVGaWVsZCkgPT4gKHtcbiAgICAgIC4uLm9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgRGF0ZVRpbWVSZXNvbHZlciwgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICBwb2ludDogKG9iamVjdFR5cGVDb25maWc6IE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBQb2ludEZpZWxkKSA9PiAoe1xuICAgICAgLi4ub2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBuZXcgR3JhcGhRTExpc3QobmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxGbG9hdCkpLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIHJpY2hUZXh0OiAob2JqZWN0VHlwZUNvbmZpZzogT2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IFJpY2hUZXh0RmllbGQpID0+ICh7XG4gICAgICAuLi5vYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7XG4gICAgICAgIHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIEdyYXBoUUxKU09OLCBmb3JjZU51bGxhYmxlKSxcbiAgICAgICAgYXN5bmMgcmVzb2x2ZShwYXJlbnQsIGFyZ3MsIGNvbnRleHQpIHtcbiAgICAgICAgICBsZXQgZGVwdGggPSBwYXlsb2FkLmNvbmZpZy5kZWZhdWx0RGVwdGg7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhcmdzLmRlcHRoICE9PSAndW5kZWZpbmVkJykgZGVwdGggPSBhcmdzLmRlcHRoO1xuXG4gICAgICAgICAgaWYgKGRlcHRoID4gMCkge1xuICAgICAgICAgICAgYXdhaXQgY3JlYXRlUmljaFRleHRSZWxhdGlvbnNoaXBQcm9taXNlKHtcbiAgICAgICAgICAgICAgcmVxOiBjb250ZXh0LnJlcSxcbiAgICAgICAgICAgICAgc2libGluZ0RvYzogcGFyZW50LFxuICAgICAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHM6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtmaWVsZC5uYW1lXTtcbiAgICAgICAgfSxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIGRlcHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBHcmFwaFFMSW50LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHVwbG9hZDogKG9iamVjdFR5cGVDb25maWc6IE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBVcGxvYWRGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgeyByZWxhdGlvblRvIH0gPSBmaWVsZDtcblxuICAgICAgY29uc3QgdXBsb2FkTmFtZSA9IGNvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIHRvV29yZHMoZmllbGQubmFtZSwgdHJ1ZSkpO1xuXG4gICAgICAvLyBJZiB0aGUgcmVsYXRpb25zaGlwVHlwZSBpcyB1bmRlZmluZWQgYXQgdGhpcyBwb2ludCxcbiAgICAgIC8vIGl0IGNhbiBiZSBhc3N1bWVkIHRoYXQgdGhpcyBibG9ja1R5cGUgY2FuIGhhdmUgYSByZWxhdGlvbnNoaXBcbiAgICAgIC8vIHRvIGl0c2VsZi4gVGhlcmVmb3JlLCB3ZSBzZXQgdGhlIHJlbGF0aW9uc2hpcFR5cGUgZXF1YWwgdG8gdGhlIGJsb2NrVHlwZVxuICAgICAgLy8gdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgY3JlYXRlZC5cblxuICAgICAgY29uc3QgdHlwZSA9IHdpdGhOdWxsYWJsZVR5cGUoXG4gICAgICAgIGZpZWxkLFxuICAgICAgICBwYXlsb2FkLmNvbGxlY3Rpb25zW3JlbGF0aW9uVG9dLmdyYXBoUUwudHlwZSB8fCBuZXdseUNyZWF0ZWRCbG9ja1R5cGUsXG4gICAgICAgIGZvcmNlTnVsbGFibGUsXG4gICAgICApO1xuXG4gICAgICBjb25zdCB1cGxvYWRBcmdzID0ge30gYXMgTG9jYWxlSW5wdXRUeXBlO1xuXG4gICAgICBpZiAocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uKSB7XG4gICAgICAgIHVwbG9hZEFyZ3MubG9jYWxlID0ge1xuICAgICAgICAgIHR5cGU6IHBheWxvYWQudHlwZXMubG9jYWxlSW5wdXRUeXBlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHVwbG9hZEFyZ3MuZmFsbGJhY2tMb2NhbGUgPSB7XG4gICAgICAgICAgdHlwZTogcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb25TbHVnID0gZmllbGQucmVsYXRpb25UbztcblxuICAgICAgY29uc3QgdXBsb2FkID0ge1xuICAgICAgICBhcmdzOiB1cGxvYWRBcmdzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBleHRlbnNpb25zOiB7IGNvbXBsZXhpdHk6IDIwIH0sXG4gICAgICAgIGFzeW5jIHJlc29sdmUocGFyZW50LCBhcmdzLCBjb250ZXh0KSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJlbnRbZmllbGQubmFtZV07XG4gICAgICAgICAgY29uc3QgbG9jYWxlID0gYXJncy5sb2NhbGUgfHwgY29udGV4dC5yZXEubG9jYWxlO1xuICAgICAgICAgIGNvbnN0IGZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZSB8fCBjb250ZXh0LnJlcS5mYWxsYmFja0xvY2FsZTtcbiAgICAgICAgICBjb25zdCBpZCA9IHZhbHVlO1xuXG4gICAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBjb25zdCByZWxhdGVkRG9jdW1lbnQgPSBhd2FpdCBjb250ZXh0LnJlcS5wYXlsb2FkRGF0YUxvYWRlci5sb2FkKEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgICAgICAgY29udGV4dC5yZXEudHJhbnNhY3Rpb25JRCxcbiAgICAgICAgICAgICAgcmVsYXRlZENvbGxlY3Rpb25TbHVnLFxuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgXSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVsYXRlZERvY3VtZW50IHx8IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3aGVyZUZpZWxkcyA9IHBheWxvYWQuY29sbGVjdGlvbnNbcmVsYXRpb25Ub10uY29uZmlnLmZpZWxkcztcblxuICAgICAgdXBsb2FkLmFyZ3Mud2hlcmUgPSB7XG4gICAgICAgIHR5cGU6IGJ1aWxkV2hlcmVJbnB1dFR5cGUoXG4gICAgICAgICAgdXBsb2FkTmFtZSxcbiAgICAgICAgICB3aGVyZUZpZWxkcyxcbiAgICAgICAgICB1cGxvYWROYW1lLFxuICAgICAgICApLFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ub2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgICAgW2ZpZWxkLm5hbWVdOiB1cGxvYWQsXG4gICAgICB9O1xuICAgIH0sXG4gICAgcmFkaW86IChvYmplY3RUeXBlQ29uZmlnOiBPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogUmFkaW9GaWVsZCkgPT4gKHtcbiAgICAgIC4uLm9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHtcbiAgICAgICAgdHlwZTogd2l0aE51bGxhYmxlVHlwZShcbiAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IGNvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgdmFsdWVzOiBmb3JtYXRPcHRpb25zKGZpZWxkKSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3JjZU51bGxhYmxlLFxuICAgICAgICApLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBjaGVja2JveDogKG9iamVjdFR5cGVDb25maWc6IE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBDaGVja2JveEZpZWxkKSA9PiAoe1xuICAgICAgLi4ub2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMQm9vbGVhbiwgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICBzZWxlY3Q6IChvYmplY3RUeXBlQ29uZmlnOiBPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogU2VsZWN0RmllbGQpID0+IHtcbiAgICAgIGNvbnN0IGZ1bGxOYW1lID0gY29tYmluZVBhcmVudE5hbWUocGFyZW50TmFtZSwgZmllbGQubmFtZSk7XG5cbiAgICAgIGxldCB0eXBlOiBHcmFwaFFMVHlwZSA9IG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICAgICAgICBuYW1lOiBmdWxsTmFtZSxcbiAgICAgICAgdmFsdWVzOiBmb3JtYXRPcHRpb25zKGZpZWxkKSxcbiAgICAgIH0pO1xuXG4gICAgICB0eXBlID0gZmllbGQuaGFzTWFueSA/IG5ldyBHcmFwaFFMTGlzdChuZXcgR3JhcGhRTE5vbk51bGwodHlwZSkpIDogdHlwZTtcbiAgICAgIHR5cGUgPSB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCB0eXBlLCBmb3JjZU51bGxhYmxlKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ub2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGUgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICByZWxhdGlvbnNoaXA6IChvYmplY3RUeXBlQ29uZmlnOiBPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogUmVsYXRpb25zaGlwRmllbGQpID0+IHtcbiAgICAgIGNvbnN0IHsgcmVsYXRpb25UbyB9ID0gZmllbGQ7XG4gICAgICBjb25zdCBpc1JlbGF0ZWRUb01hbnlDb2xsZWN0aW9ucyA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25Ubyk7XG4gICAgICBjb25zdCBoYXNNYW55VmFsdWVzID0gZmllbGQuaGFzTWFueTtcbiAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcE5hbWUgPSBjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCB0b1dvcmRzKGZpZWxkLm5hbWUsIHRydWUpKTtcblxuICAgICAgbGV0IHR5cGU7XG4gICAgICBsZXQgcmVsYXRpb25Ub1R5cGUgPSBudWxsO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZWxhdGlvblRvKSkge1xuICAgICAgICByZWxhdGlvblRvVHlwZSA9IG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICAgICAgICAgIG5hbWU6IGAke3JlbGF0aW9uc2hpcE5hbWV9X1JlbGF0aW9uVG9gLFxuICAgICAgICAgIHZhbHVlczogcmVsYXRpb25Uby5yZWR1Y2UoKHJlbGF0aW9ucywgcmVsYXRpb24pID0+ICh7XG4gICAgICAgICAgICAuLi5yZWxhdGlvbnMsXG4gICAgICAgICAgICBbZm9ybWF0TmFtZShyZWxhdGlvbildOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiByZWxhdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksIHt9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdHlwZXMgPSByZWxhdGlvblRvLm1hcCgocmVsYXRpb24pID0+IHBheWxvYWQuY29sbGVjdGlvbnNbcmVsYXRpb25dLmdyYXBoUUwudHlwZSk7XG5cbiAgICAgICAgdHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICAgICAgbmFtZTogYCR7cmVsYXRpb25zaGlwTmFtZX1fUmVsYXRpb25zaGlwYCxcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIHJlbGF0aW9uVG86IHtcbiAgICAgICAgICAgICAgdHlwZTogcmVsYXRpb25Ub1R5cGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxVbmlvblR5cGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlbGF0aW9uc2hpcE5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICAgICAgYXN5bmMgcmVzb2x2ZVR5cGUoZGF0YSwgeyByZXEgfSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQuY29sbGVjdGlvbnNbZGF0YS5jb2xsZWN0aW9uXS5ncmFwaFFMLnR5cGUubmFtZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoeyB0eXBlIH0gPSBwYXlsb2FkLmNvbGxlY3Rpb25zW3JlbGF0aW9uVG8gYXMgc3RyaW5nXS5ncmFwaFFMKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHJlbGF0aW9uc2hpcFR5cGUgaXMgdW5kZWZpbmVkIGF0IHRoaXMgcG9pbnQsXG4gICAgICAvLyBpdCBjYW4gYmUgYXNzdW1lZCB0aGF0IHRoaXMgYmxvY2tUeXBlIGNhbiBoYXZlIGEgcmVsYXRpb25zaGlwXG4gICAgICAvLyB0byBpdHNlbGYuIFRoZXJlZm9yZSwgd2Ugc2V0IHRoZSByZWxhdGlvbnNoaXBUeXBlIGVxdWFsIHRvIHRoZSBibG9ja1R5cGVcbiAgICAgIC8vIHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIGNyZWF0ZWQuXG5cbiAgICAgIHR5cGUgPSB0eXBlIHx8IG5ld2x5Q3JlYXRlZEJsb2NrVHlwZTtcblxuICAgICAgY29uc3QgcmVsYXRpb25zaGlwQXJnczoge1xuICAgICAgICBsb2NhbGU/OiB1bmtub3duXG4gICAgICAgIGZhbGxiYWNrTG9jYWxlPzogdW5rbm93blxuICAgICAgICB3aGVyZT86IHVua25vd25cbiAgICAgICAgcGFnZT86IHVua25vd25cbiAgICAgICAgbGltaXQ/OiB1bmtub3duXG4gICAgICB9ID0ge307XG5cbiAgICAgIGlmIChwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24pIHtcbiAgICAgICAgcmVsYXRpb25zaGlwQXJncy5sb2NhbGUgPSB7XG4gICAgICAgICAgdHlwZTogcGF5bG9hZC50eXBlcy5sb2NhbGVJbnB1dFR5cGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVsYXRpb25zaGlwQXJncy5mYWxsYmFja0xvY2FsZSA9IHtcbiAgICAgICAgICB0eXBlOiBwYXlsb2FkLnR5cGVzLmZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB7XG4gICAgICAgIGFyZ3M6IHJlbGF0aW9uc2hpcEFyZ3MsXG4gICAgICAgIHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoXG4gICAgICAgICAgZmllbGQsXG4gICAgICAgICAgaGFzTWFueVZhbHVlcyA/IG5ldyBHcmFwaFFMTGlzdChuZXcgR3JhcGhRTE5vbk51bGwodHlwZSkpIDogdHlwZSxcbiAgICAgICAgICBmb3JjZU51bGxhYmxlLFxuICAgICAgICApLFxuICAgICAgICBleHRlbnNpb25zOiB7IGNvbXBsZXhpdHk6IDEwIH0sXG4gICAgICAgIGFzeW5jIHJlc29sdmUocGFyZW50LCBhcmdzLCBjb250ZXh0KSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJlbnRbZmllbGQubmFtZV07XG4gICAgICAgICAgY29uc3QgbG9jYWxlID0gYXJncy5sb2NhbGUgfHwgY29udGV4dC5yZXEubG9jYWxlO1xuICAgICAgICAgIGNvbnN0IGZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZSB8fCBjb250ZXh0LnJlcS5mYWxsYmFja0xvY2FsZTtcbiAgICAgICAgICBsZXQgcmVsYXRlZENvbGxlY3Rpb25TbHVnID0gZmllbGQucmVsYXRpb25UbztcblxuICAgICAgICAgIGlmIChoYXNNYW55VmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgICAgICBjb25zdCByZXN1bHRQcm9taXNlcyA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQb3B1bGF0aW9uUHJvbWlzZSA9IGFzeW5jIChyZWxhdGVkRG9jLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBpZCA9IHJlbGF0ZWREb2M7XG4gICAgICAgICAgICAgIGxldCBjb2xsZWN0aW9uU2x1ZyA9IGZpZWxkLnJlbGF0aW9uVG87XG5cbiAgICAgICAgICAgICAgaWYgKGlzUmVsYXRlZFRvTWFueUNvbGxlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvblNsdWcgPSByZWxhdGVkRG9jLnJlbGF0aW9uVG87XG4gICAgICAgICAgICAgICAgaWQgPSByZWxhdGVkRG9jLnZhbHVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udGV4dC5yZXEucGF5bG9hZERhdGFMb2FkZXIubG9hZChKU09OLnN0cmluZ2lmeShbXG4gICAgICAgICAgICAgICAgY29udGV4dC5yZXEudHJhbnNhY3Rpb25JRCxcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uU2x1ZyxcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICBdKSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlbGF0ZWRUb01hbnlDb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0c1tpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRpb25UbzogY29sbGVjdGlvblNsdWcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25TbHVnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0c1tpXSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChyZWxhdGVkRG9jLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0UHJvbWlzZXMucHVzaChjcmVhdGVQb3B1bGF0aW9uUHJvbWlzZShyZWxhdGVkRG9jLCBpKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChyZXN1bHRQcm9taXNlcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgaWQgPSB2YWx1ZTtcbiAgICAgICAgICBpZiAoaXNSZWxhdGVkVG9NYW55Q29sbGVjdGlvbnMgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIGlkID0gdmFsdWUudmFsdWU7XG4gICAgICAgICAgICByZWxhdGVkQ29sbGVjdGlvblNsdWcgPSB2YWx1ZS5yZWxhdGlvblRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRlZERvY3VtZW50ID0gYXdhaXQgY29udGV4dC5yZXEucGF5bG9hZERhdGFMb2FkZXIubG9hZChKU09OLnN0cmluZ2lmeShbXG4gICAgICAgICAgICAgIGNvbnRleHQucmVxLnRyYW5zYWN0aW9uSUQsXG4gICAgICAgICAgICAgIHJlbGF0ZWRDb2xsZWN0aW9uU2x1ZyxcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgICAgZmFsbGJhY2tMb2NhbGUsXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIF0pKTtcblxuICAgICAgICAgICAgaWYgKHJlbGF0ZWREb2N1bWVudCkge1xuICAgICAgICAgICAgICBpZiAoaXNSZWxhdGVkVG9NYW55Q29sbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgcmVsYXRpb25UbzogcmVsYXRlZENvbGxlY3Rpb25TbHVnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucmVsYXRlZERvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiByZWxhdGVkQ29sbGVjdGlvblNsdWcsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gcmVsYXRlZERvY3VtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXTogcmVsYXRpb25zaGlwLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGFycmF5OiAob2JqZWN0VHlwZUNvbmZpZzogT2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IEFycmF5RmllbGQpID0+IHtcbiAgICAgIGNvbnN0IGludGVyZmFjZU5hbWUgPSBmaWVsZD8uaW50ZXJmYWNlTmFtZSB8fCBjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCB0b1dvcmRzKGZpZWxkLm5hbWUsIHRydWUpKTtcblxuICAgICAgaWYgKCFwYXlsb2FkLnR5cGVzLmFycmF5VHlwZXNbaW50ZXJmYWNlTmFtZV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHBheWxvYWQudHlwZXMuYXJyYXlUeXBlc1tpbnRlcmZhY2VOYW1lXSA9IGJ1aWxkT2JqZWN0VHlwZSh7XG4gICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICBuYW1lOiBpbnRlcmZhY2VOYW1lLFxuICAgICAgICAgIHBhcmVudE5hbWU6IGludGVyZmFjZU5hbWUsXG4gICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgZm9yY2VOdWxsYWJsZTogaXNGaWVsZE51bGxhYmxlKGZpZWxkLCBmb3JjZU51bGxhYmxlKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFycmF5VHlwZSA9IG5ldyBHcmFwaFFMTGlzdChuZXcgR3JhcGhRTE5vbk51bGwocGF5bG9hZC50eXBlcy5hcnJheVR5cGVzW2ludGVyZmFjZU5hbWVdKSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBhcnJheVR5cGUpIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ3JvdXA6IChvYmplY3RUeXBlQ29uZmlnOiBPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogR3JvdXBGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJmYWNlTmFtZSA9IGZpZWxkPy5pbnRlcmZhY2VOYW1lIHx8IGNvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIHRvV29yZHMoZmllbGQubmFtZSwgdHJ1ZSkpO1xuXG4gICAgICBpZiAoIXBheWxvYWQudHlwZXMuZ3JvdXBUeXBlc1tpbnRlcmZhY2VOYW1lXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgcGF5bG9hZC50eXBlcy5ncm91cFR5cGVzW2ludGVyZmFjZU5hbWVdID0gYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgIG5hbWU6IGludGVyZmFjZU5hbWUsXG4gICAgICAgICAgcGFyZW50TmFtZTogaW50ZXJmYWNlTmFtZSxcbiAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgICBmb3JjZU51bGxhYmxlOiBpc0ZpZWxkTnVsbGFibGUoZmllbGQsIGZvcmNlTnVsbGFibGUpLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ub2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHBheWxvYWQudHlwZXMuZ3JvdXBUeXBlc1tpbnRlcmZhY2VOYW1lXSB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGJsb2NrczogKG9iamVjdFR5cGVDb25maWc6IE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBCbG9ja0ZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBibG9ja1R5cGVzID0gZmllbGQuYmxvY2tzLm1hcCgoYmxvY2spID0+IHtcbiAgICAgICAgaWYgKCFwYXlsb2FkLnR5cGVzLmJsb2NrVHlwZXNbYmxvY2suc2x1Z10pIHtcbiAgICAgICAgICBjb25zdCBpbnRlcmZhY2VOYW1lID0gYmxvY2s/LmludGVyZmFjZU5hbWUgfHwgYmxvY2s/LmdyYXBoUUw/LnNpbmd1bGFyTmFtZSB8fCB0b1dvcmRzKGJsb2NrLnNsdWcsIHRydWUpO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIHBheWxvYWQudHlwZXMuYmxvY2tUeXBlc1tibG9jay5zbHVnXSA9IGJ1aWxkT2JqZWN0VHlwZSh7XG4gICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgbmFtZTogaW50ZXJmYWNlTmFtZSxcbiAgICAgICAgICAgIHBhcmVudE5hbWU6IGludGVyZmFjZU5hbWUsXG4gICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgLi4uYmxvY2suZmllbGRzLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2Jsb2NrVHlwZScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcmNlTnVsbGFibGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF5bG9hZC50eXBlcy5ibG9ja1R5cGVzW2Jsb2NrLnNsdWddO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZ1bGxOYW1lID0gY29tYmluZVBhcmVudE5hbWUocGFyZW50TmFtZSwgdG9Xb3JkcyhmaWVsZC5uYW1lLCB0cnVlKSk7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSBuZXcgR3JhcGhRTExpc3QobmV3IEdyYXBoUUxOb25OdWxsKG5ldyBHcmFwaFFMVW5pb25UeXBlKHtcbiAgICAgICAgbmFtZTogZnVsbE5hbWUsXG4gICAgICAgIHR5cGVzOiBibG9ja1R5cGVzLFxuICAgICAgICByZXNvbHZlVHlwZTogKGRhdGEpID0+IHBheWxvYWQudHlwZXMuYmxvY2tUeXBlc1tkYXRhLmJsb2NrVHlwZV0ubmFtZSxcbiAgICAgIH0pKSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCB0eXBlKSB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIHJvdzogKG9iamVjdFR5cGVDb25maWc6IE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBSb3dGaWVsZCkgPT4gZmllbGQuZmllbGRzLnJlZHVjZSgob2JqZWN0VHlwZUNvbmZpZ1dpdGhSb3dGaWVsZHMsIHN1YkZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBhZGRTdWJGaWVsZCA9IGZpZWxkVG9TY2hlbWFNYXBbc3ViRmllbGQudHlwZV07XG4gICAgICBpZiAoYWRkU3ViRmllbGQpIHJldHVybiBhZGRTdWJGaWVsZChvYmplY3RUeXBlQ29uZmlnV2l0aFJvd0ZpZWxkcywgc3ViRmllbGQpO1xuICAgICAgcmV0dXJuIG9iamVjdFR5cGVDb25maWdXaXRoUm93RmllbGRzO1xuICAgIH0sIG9iamVjdFR5cGVDb25maWcpLFxuICAgIGNvbGxhcHNpYmxlOiAob2JqZWN0VHlwZUNvbmZpZzogT2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IENvbGxhcHNpYmxlRmllbGQpID0+IGZpZWxkLmZpZWxkcy5yZWR1Y2UoKG9iamVjdFR5cGVDb25maWdXaXRoQ29sbGFwc2libGVGaWVsZHMsIHN1YkZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBhZGRTdWJGaWVsZCA9IGZpZWxkVG9TY2hlbWFNYXBbc3ViRmllbGQudHlwZV07XG4gICAgICBpZiAoYWRkU3ViRmllbGQpIHJldHVybiBhZGRTdWJGaWVsZChvYmplY3RUeXBlQ29uZmlnV2l0aENvbGxhcHNpYmxlRmllbGRzLCBzdWJGaWVsZCk7XG4gICAgICByZXR1cm4gb2JqZWN0VHlwZUNvbmZpZ1dpdGhDb2xsYXBzaWJsZUZpZWxkcztcbiAgICB9LCBvYmplY3RUeXBlQ29uZmlnKSxcbiAgICB0YWJzOiAob2JqZWN0VHlwZUNvbmZpZzogT2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IFRhYnNGaWVsZCkgPT4gZmllbGQudGFicy5yZWR1Y2UoKHRhYlNjaGVtYSwgdGFiKSA9PiB7XG4gICAgICBpZiAodGFiSGFzTmFtZSh0YWIpKSB7XG4gICAgICAgIGNvbnN0IGludGVyZmFjZU5hbWUgPSB0YWI/LmludGVyZmFjZU5hbWUgfHwgY29tYmluZVBhcmVudE5hbWUocGFyZW50TmFtZSwgdG9Xb3Jkcyh0YWIubmFtZSwgdHJ1ZSkpO1xuXG4gICAgICAgIGlmICghcGF5bG9hZC50eXBlcy50YWJUeXBlc1tpbnRlcmZhY2VOYW1lXSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIHBheWxvYWQudHlwZXMudGFiVHlwZXNbaW50ZXJmYWNlTmFtZV0gPSBidWlsZE9iamVjdFR5cGUoe1xuICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgIG5hbWU6IGludGVyZmFjZU5hbWUsXG4gICAgICAgICAgICBwYXJlbnROYW1lOiBpbnRlcmZhY2VOYW1lLFxuICAgICAgICAgICAgZmllbGRzOiB0YWIuZmllbGRzLFxuICAgICAgICAgICAgZm9yY2VOdWxsYWJsZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4udGFiU2NoZW1hLFxuICAgICAgICAgIFt0YWIubmFtZV06IHsgdHlwZTogcGF5bG9hZC50eXBlcy50YWJUeXBlc1tpbnRlcmZhY2VOYW1lXSB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50YWJTY2hlbWEsXG4gICAgICAgIC4uLnRhYi5maWVsZHMucmVkdWNlKChzdWJGaWVsZFNjaGVtYSwgc3ViRmllbGQpID0+IHtcbiAgICAgICAgICBjb25zdCBhZGRTdWJGaWVsZCA9IGZpZWxkVG9TY2hlbWFNYXBbc3ViRmllbGQudHlwZV07XG4gICAgICAgICAgaWYgKGFkZFN1YkZpZWxkKSByZXR1cm4gYWRkU3ViRmllbGQoc3ViRmllbGRTY2hlbWEsIHN1YkZpZWxkKTtcbiAgICAgICAgICByZXR1cm4gc3ViRmllbGRTY2hlbWE7XG4gICAgICAgIH0sIHRhYlNjaGVtYSksXG4gICAgICB9O1xuICAgIH0sIG9iamVjdFR5cGVDb25maWcpLFxuICB9O1xuXG4gIGNvbnN0IG9iamVjdFNjaGVtYSA9IHtcbiAgICBuYW1lLFxuICAgIGZpZWxkczogKCkgPT4gZmllbGRzLnJlZHVjZSgob2JqZWN0VHlwZUNvbmZpZywgZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gZmllbGRUb1NjaGVtYU1hcFtmaWVsZC50eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBmaWVsZFNjaGVtYSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gb2JqZWN0VHlwZUNvbmZpZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ub2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgICAgLi4uZmllbGRTY2hlbWEob2JqZWN0VHlwZUNvbmZpZywgZmllbGQpLFxuICAgICAgfTtcbiAgICB9LCBiYXNlRmllbGRzKSxcbiAgfTtcblxuICBjb25zdCBuZXdseUNyZWF0ZWRCbG9ja1R5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUob2JqZWN0U2NoZW1hKTtcblxuICByZXR1cm4gbmV3bHlDcmVhdGVkQmxvY2tUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZE9iamVjdFR5cGU7XG4iXSwibmFtZXMiOlsiYnVpbGRPYmplY3RUeXBlIiwicGF5bG9hZCIsIm5hbWUiLCJmaWVsZHMiLCJwYXJlbnROYW1lIiwiYmFzZUZpZWxkcyIsImZvcmNlTnVsbGFibGUiLCJmaWVsZFRvU2NoZW1hTWFwIiwibnVtYmVyIiwib2JqZWN0VHlwZUNvbmZpZyIsImZpZWxkIiwidHlwZSIsIkdyYXBoUUxJbnQiLCJHcmFwaFFMRmxvYXQiLCJ3aXRoTnVsbGFibGVUeXBlIiwiaGFzTWFueSIsIkdyYXBoUUxMaXN0IiwidGV4dCIsIkdyYXBoUUxTdHJpbmciLCJlbWFpbCIsIkVtYWlsQWRkcmVzc1Jlc29sdmVyIiwidGV4dGFyZWEiLCJjb2RlIiwianNvbiIsIkdyYXBoUUxKU09OIiwiZGF0ZSIsIkRhdGVUaW1lUmVzb2x2ZXIiLCJwb2ludCIsIkdyYXBoUUxOb25OdWxsIiwicmljaFRleHQiLCJyZXNvbHZlIiwicGFyZW50IiwiYXJncyIsImNvbnRleHQiLCJkZXB0aCIsImNvbmZpZyIsImRlZmF1bHREZXB0aCIsImNyZWF0ZVJpY2hUZXh0UmVsYXRpb25zaGlwUHJvbWlzZSIsInJlcSIsInNpYmxpbmdEb2MiLCJzaG93SGlkZGVuRmllbGRzIiwidXBsb2FkIiwicmVsYXRpb25UbyIsInVwbG9hZE5hbWUiLCJjb21iaW5lUGFyZW50TmFtZSIsInRvV29yZHMiLCJjb2xsZWN0aW9ucyIsImdyYXBoUUwiLCJuZXdseUNyZWF0ZWRCbG9ja1R5cGUiLCJ1cGxvYWRBcmdzIiwibG9jYWxpemF0aW9uIiwibG9jYWxlIiwidHlwZXMiLCJsb2NhbGVJbnB1dFR5cGUiLCJmYWxsYmFja0xvY2FsZSIsImZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIiwicmVsYXRlZENvbGxlY3Rpb25TbHVnIiwiZXh0ZW5zaW9ucyIsImNvbXBsZXhpdHkiLCJ2YWx1ZSIsImlkIiwicmVsYXRlZERvY3VtZW50IiwicGF5bG9hZERhdGFMb2FkZXIiLCJsb2FkIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyYW5zYWN0aW9uSUQiLCJ3aGVyZUZpZWxkcyIsIndoZXJlIiwiYnVpbGRXaGVyZUlucHV0VHlwZSIsInJhZGlvIiwiR3JhcGhRTEVudW1UeXBlIiwidmFsdWVzIiwiZm9ybWF0T3B0aW9ucyIsImNoZWNrYm94IiwiR3JhcGhRTEJvb2xlYW4iLCJzZWxlY3QiLCJmdWxsTmFtZSIsInJlbGF0aW9uc2hpcCIsImlzUmVsYXRlZFRvTWFueUNvbGxlY3Rpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzTWFueVZhbHVlcyIsInJlbGF0aW9uc2hpcE5hbWUiLCJyZWxhdGlvblRvVHlwZSIsInJlZHVjZSIsInJlbGF0aW9ucyIsInJlbGF0aW9uIiwiZm9ybWF0TmFtZSIsIm1hcCIsIkdyYXBoUUxPYmplY3RUeXBlIiwiR3JhcGhRTFVuaW9uVHlwZSIsInJlc29sdmVUeXBlIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJyZWxhdGlvbnNoaXBBcmdzIiwicmVzdWx0cyIsInJlc3VsdFByb21pc2VzIiwiY3JlYXRlUG9wdWxhdGlvblByb21pc2UiLCJyZWxhdGVkRG9jIiwiaSIsImNvbGxlY3Rpb25TbHVnIiwicmVzdWx0IiwiZm9yRWFjaCIsInB1c2giLCJQcm9taXNlIiwiYWxsIiwiYXJyYXkiLCJpbnRlcmZhY2VOYW1lIiwiYXJyYXlUeXBlcyIsImlzRmllbGROdWxsYWJsZSIsImFycmF5VHlwZSIsImdyb3VwIiwiZ3JvdXBUeXBlcyIsImJsb2NrcyIsImJsb2NrVHlwZXMiLCJibG9jayIsInNsdWciLCJzaW5ndWxhck5hbWUiLCJibG9ja1R5cGUiLCJyb3ciLCJvYmplY3RUeXBlQ29uZmlnV2l0aFJvd0ZpZWxkcyIsInN1YkZpZWxkIiwiYWRkU3ViRmllbGQiLCJjb2xsYXBzaWJsZSIsIm9iamVjdFR5cGVDb25maWdXaXRoQ29sbGFwc2libGVGaWVsZHMiLCJ0YWJzIiwidGFiU2NoZW1hIiwidGFiIiwidGFiSGFzTmFtZSIsInRhYlR5cGVzIiwic3ViRmllbGRTY2hlbWEiLCJvYmplY3RTY2hlbWEiLCJmaWVsZFNjaGVtYSJdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBELEdBQzFELG1DQUFtQyxHQUNuQyx1Q0FBdUMsR0FDdkMsdUNBQXVDOzs7OytCQTBqQnZDOzs7ZUFBQTs7OytCQXpqQjRCO3VCQWFyQjs4QkFDZ0Q7cUJBd0JoRDtpRUFDZ0I7d0VBQ087dUVBQ0Q7NEJBQ0w7a0ZBQ3NCO29FQUNwQjswRUFFTTtzRUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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