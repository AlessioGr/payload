/* eslint-disable @typescript-eslint/ban-ts-comment */ /* eslint-disable class-methods-use-this */ /* eslint-disable @typescript-eslint/no-use-before-define */ /* eslint-disable no-use-before-define */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _mongoose = require("mongoose");
var _types = require("payload/types");
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
var formatBaseSchema = function(field, buildSchemaOptions) {
    var disableUnique = buildSchemaOptions.disableUnique, draftsEnabled = buildSchemaOptions.draftsEnabled, indexSortableFields = buildSchemaOptions.indexSortableFields;
    var schema = {
        unique: !disableUnique && field.unique || false,
        required: false,
        index: field.index || !disableUnique && field.unique || indexSortableFields || false
    };
    if (schema.unique && (field.localized || draftsEnabled)) {
        schema.sparse = true;
    }
    if (field.hidden) {
        schema.hidden = true;
    }
    return schema;
};
var localizeSchema = function(entity, schema, localization) {
    if ((0, _types.fieldIsLocalized)(entity) && localization && Array.isArray(localization.locales)) {
        return {
            type: localization.localeCodes.reduce(function(localeSchema, locale) {
                return _object_spread_props(_object_spread({}, localeSchema), _define_property({}, locale, schema));
            }, {
                _id: false
            }),
            localized: true
        };
    }
    return schema;
};
var buildSchema = function(config, configFields) {
    var buildSchemaOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var allowIDField = buildSchemaOptions.allowIDField, options = buildSchemaOptions.options;
    var fields = {};
    var schemaFields = configFields;
    if (!allowIDField) {
        var idField = schemaFields.find(function(field) {
            return (0, _types.fieldAffectsData)(field) && field.name === "id";
        });
        if (idField) {
            fields = {
                _id: idField.type === "number" ? Number : String
            };
            schemaFields = schemaFields.filter(function(field) {
                return !((0, _types.fieldAffectsData)(field) && field.name === "id");
            });
        }
    }
    var schema = new _mongoose.Schema(fields, options);
    schemaFields.forEach(function(field) {
        if (!(0, _types.fieldIsPresentationalOnly)(field)) {
            var addFieldSchema = fieldToSchemaMap[field.type];
            if (addFieldSchema) {
                addFieldSchema(field, schema, config, buildSchemaOptions);
            }
        }
    });
    return schema;
};
var fieldToSchemaMap = {
    number: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: field.hasMany ? [
                Number
            ] : Number
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    text: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: String
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    email: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: String
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    textarea: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: String
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    richText: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: _mongoose.Schema.Types.Mixed
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    code: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: String
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    json: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: _mongoose.Schema.Types.Mixed
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    point: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = {
            type: {
                type: String,
                enum: [
                    "Point"
                ]
            },
            coordinates: {
                type: [
                    Number
                ],
                required: false,
                default: field.defaultValue || undefined
            }
        };
        if (buildSchemaOptions.disableUnique && field.unique && field.localized) {
            baseSchema.coordinates.sparse = true;
        }
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
        if (field.index === true || field.index === undefined) {
            var indexOptions = {};
            if (!buildSchemaOptions.disableUnique && field.unique) {
                indexOptions.sparse = true;
                indexOptions.unique = true;
            }
            if (field.localized && config.localization) {
                config.localization.locales.forEach(function(locale) {
                    schema.index(_define_property({}, "".concat(field.name, ".").concat(locale), "2dsphere"), indexOptions);
                });
            } else {
                schema.index(_define_property({}, field.name, "2dsphere"), indexOptions);
            }
        }
    },
    radio: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: String,
            enum: field.options.map(function(option) {
                if (typeof option === "object") return option.value;
                return option;
            })
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    checkbox: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: Boolean
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    date: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: Date
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    upload: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: _mongoose.Schema.Types.Mixed,
            ref: field.relationTo
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    relationship: function(field, schema, config, buildSchemaOptions) {
        var hasManyRelations = Array.isArray(field.relationTo);
        var schemaToReturn = {};
        if (field.localized && config.localization) {
            schemaToReturn = {
                type: config.localization.localeCodes.reduce(function(locales, locale) {
                    var localeSchema = {};
                    if (hasManyRelations) {
                        localeSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
                            type: _mongoose.Schema.Types.Mixed,
                            _id: false,
                            value: {
                                type: _mongoose.Schema.Types.Mixed,
                                refPath: "".concat(field.name, ".").concat(locale, ".relationTo")
                            },
                            relationTo: {
                                type: String,
                                enum: field.relationTo
                            }
                        });
                    } else {
                        localeSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
                            type: _mongoose.Schema.Types.Mixed,
                            ref: field.relationTo
                        });
                    }
                    return _object_spread_props(_object_spread({}, locales), _define_property({}, locale, field.hasMany ? {
                        type: [
                            localeSchema
                        ],
                        default: undefined
                    } : localeSchema));
                }, {}),
                localized: true
            };
        } else if (hasManyRelations) {
            schemaToReturn = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
                type: _mongoose.Schema.Types.Mixed,
                _id: false,
                value: {
                    type: _mongoose.Schema.Types.Mixed,
                    refPath: "".concat(field.name, ".relationTo")
                },
                relationTo: {
                    type: String,
                    enum: field.relationTo
                }
            });
            if (field.hasMany) {
                schemaToReturn = {
                    type: [
                        schemaToReturn
                    ],
                    default: undefined
                };
            }
        } else {
            schemaToReturn = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
                type: _mongoose.Schema.Types.Mixed,
                ref: field.relationTo
            });
            if (field.hasMany) {
                schemaToReturn = {
                    type: [
                        schemaToReturn
                    ],
                    default: undefined
                };
            }
        }
        schema.add(_define_property({}, field.name, schemaToReturn));
    },
    row: function(field, schema, config, buildSchemaOptions) {
        field.fields.forEach(function(subField) {
            var addFieldSchema = fieldToSchemaMap[subField.type];
            if (addFieldSchema) {
                addFieldSchema(subField, schema, config, buildSchemaOptions);
            }
        });
    },
    collapsible: function(field, schema, config, buildSchemaOptions) {
        field.fields.forEach(function(subField) {
            var addFieldSchema = fieldToSchemaMap[subField.type];
            if (addFieldSchema) {
                addFieldSchema(subField, schema, config, buildSchemaOptions);
            }
        });
    },
    tabs: function(field, schema, config, buildSchemaOptions) {
        field.tabs.forEach(function(tab) {
            if ((0, _types.tabHasName)(tab)) {
                var baseSchema = {
                    type: buildSchema(config, tab.fields, {
                        options: {
                            _id: false,
                            id: false,
                            minimize: false
                        },
                        disableUnique: buildSchemaOptions.disableUnique,
                        draftsEnabled: buildSchemaOptions.draftsEnabled
                    })
                };
                schema.add(_define_property({}, tab.name, localizeSchema(tab, baseSchema, config.localization)));
            } else {
                tab.fields.forEach(function(subField) {
                    var addFieldSchema = fieldToSchemaMap[subField.type];
                    if (addFieldSchema) {
                        addFieldSchema(subField, schema, config, buildSchemaOptions);
                    }
                });
            }
        });
    },
    array: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            default: undefined,
            type: [
                buildSchema(config, field.fields, {
                    options: {
                        _id: false,
                        id: false,
                        minimize: false
                    },
                    allowIDField: true,
                    disableUnique: buildSchemaOptions.disableUnique,
                    draftsEnabled: buildSchemaOptions.draftsEnabled
                })
            ]
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    group: function(field, schema, config, buildSchemaOptions) {
        var formattedBaseSchema = formatBaseSchema(field, buildSchemaOptions);
        // carry indexSortableFields through to versions if drafts enabled
        var indexSortableFields = buildSchemaOptions.indexSortableFields && field.name === "version" && buildSchemaOptions.draftsEnabled;
        var baseSchema = _object_spread_props(_object_spread({}, formattedBaseSchema), {
            type: buildSchema(config, field.fields, {
                options: {
                    _id: false,
                    id: false,
                    minimize: false
                },
                indexSortableFields: indexSortableFields,
                disableUnique: buildSchemaOptions.disableUnique,
                draftsEnabled: buildSchemaOptions.draftsEnabled
            })
        });
        schema.add(_define_property({}, field.name, localizeSchema(field, baseSchema, config.localization)));
    },
    select: function(field, schema, config, buildSchemaOptions) {
        var baseSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
            type: String,
            enum: field.options.map(function(option) {
                if (typeof option === "object") return option.value;
                return option;
            })
        });
        if (buildSchemaOptions.draftsEnabled || !field.required) {
            baseSchema.enum.push(null);
        }
        schema.add(_define_property({}, field.name, localizeSchema(field, field.hasMany ? [
            baseSchema
        ] : baseSchema, config.localization)));
    },
    blocks: function(field, schema, config, buildSchemaOptions) {
        var fieldSchema = {
            default: undefined,
            type: [
                new _mongoose.Schema({}, {
                    _id: false,
                    discriminatorKey: "blockType"
                })
            ]
        };
        schema.add(_define_property({}, field.name, localizeSchema(field, fieldSchema, config.localization)));
        field.blocks.forEach(function(blockItem) {
            var blockSchema = new _mongoose.Schema({}, {
                _id: false,
                id: false
            });
            blockItem.fields.forEach(function(blockField) {
                var addFieldSchema = fieldToSchemaMap[blockField.type];
                if (addFieldSchema) {
                    addFieldSchema(blockField, blockSchema, config, buildSchemaOptions);
                }
            });
            if (field.localized && config.localization) {
                config.localization.localeCodes.forEach(function(localeCode) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore Possible incorrect typing in mongoose types, this works
                    schema.path("".concat(field.name, ".").concat(localeCode)).discriminator(blockItem.slug, blockSchema);
                });
            } else {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore Possible incorrect typing in mongoose types, this works
                schema.path(field.name).discriminator(blockItem.slug, blockSchema);
            }
        });
    }
};
var _default = buildSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvYnVpbGRTY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgeyBJbmRleE9wdGlvbnMsIFNjaGVtYSwgU2NoZW1hT3B0aW9ucywgU2NoZW1hVHlwZU9wdGlvbnMgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcsIFNhbml0aXplZExvY2FsaXphdGlvbkNvbmZpZyB9IGZyb20gJ3BheWxvYWQvY29uZmlnJztcbmltcG9ydCB7XG4gIEFycmF5RmllbGQsXG4gIEJsb2NrLFxuICBCbG9ja0ZpZWxkLFxuICBDaGVja2JveEZpZWxkLFxuICBDb2RlRmllbGQsXG4gIENvbGxhcHNpYmxlRmllbGQsXG4gIERhdGVGaWVsZCxcbiAgRW1haWxGaWVsZCxcbiAgRmllbGQsXG4gIEdyb3VwRmllbGQsXG4gIEpTT05GaWVsZCxcbiAgTnVtYmVyRmllbGQsXG4gIFBvaW50RmllbGQsXG4gIFJhZGlvRmllbGQsXG4gIFJlbGF0aW9uc2hpcEZpZWxkLFxuICBSaWNoVGV4dEZpZWxkLFxuICBSb3dGaWVsZCxcbiAgU2VsZWN0RmllbGQsXG4gIFRhYnNGaWVsZCxcbiAgVGV4dGFyZWFGaWVsZCxcbiAgVGV4dEZpZWxkLFxuICBVcGxvYWRGaWVsZCxcbn0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5cbmltcG9ydCB7XG4gIEZpZWxkQWZmZWN0aW5nRGF0YSxcbiAgZmllbGRBZmZlY3RzRGF0YSxcbiAgZmllbGRJc0xvY2FsaXplZCxcbiAgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSxcbiAgTm9uUHJlc2VudGF0aW9uYWxGaWVsZCxcbiAgVGFiLFxuICB0YWJIYXNOYW1lLFxuICBVbm5hbWVkVGFiXG59IGZyb20gJ3BheWxvYWQvdHlwZXMnXG5cbmV4cG9ydCB0eXBlIEJ1aWxkU2NoZW1hT3B0aW9ucyA9IHtcbiAgb3B0aW9ucz86IFNjaGVtYU9wdGlvbnNcbiAgYWxsb3dJREZpZWxkPzogYm9vbGVhblxuICBkaXNhYmxlVW5pcXVlPzogYm9vbGVhblxuICBkcmFmdHNFbmFibGVkPzogYm9vbGVhblxuICBpbmRleFNvcnRhYmxlRmllbGRzPzogYm9vbGVhblxufVxuXG50eXBlIEZpZWxkU2NoZW1hR2VuZXJhdG9yID0gKGZpZWxkOiBGaWVsZCwgc2NoZW1hOiBTY2hlbWEsIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBidWlsZFNjaGVtYU9wdGlvbnM6IEJ1aWxkU2NoZW1hT3B0aW9ucykgPT4gdm9pZDtcblxuY29uc3QgZm9ybWF0QmFzZVNjaGVtYSA9IChmaWVsZDogRmllbGRBZmZlY3RpbmdEYXRhLCBidWlsZFNjaGVtYU9wdGlvbnM6IEJ1aWxkU2NoZW1hT3B0aW9ucykgPT4ge1xuICBjb25zdCB7IGRpc2FibGVVbmlxdWUsIGRyYWZ0c0VuYWJsZWQsIGluZGV4U29ydGFibGVGaWVsZHMgfSA9IGJ1aWxkU2NoZW1hT3B0aW9ucztcbiAgY29uc3Qgc2NoZW1hOiBTY2hlbWFUeXBlT3B0aW9uczx1bmtub3duPiA9IHtcbiAgICB1bmlxdWU6ICghZGlzYWJsZVVuaXF1ZSAmJiBmaWVsZC51bmlxdWUpIHx8IGZhbHNlLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBpbmRleDogZmllbGQuaW5kZXggfHwgKCFkaXNhYmxlVW5pcXVlICYmIGZpZWxkLnVuaXF1ZSkgfHwgaW5kZXhTb3J0YWJsZUZpZWxkcyB8fCBmYWxzZSxcbiAgfTtcblxuICBpZiAoKHNjaGVtYS51bmlxdWUgJiYgKGZpZWxkLmxvY2FsaXplZCB8fCBkcmFmdHNFbmFibGVkKSkpIHtcbiAgICBzY2hlbWEuc3BhcnNlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChmaWVsZC5oaWRkZW4pIHtcbiAgICBzY2hlbWEuaGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzY2hlbWE7XG59O1xuXG5jb25zdCBsb2NhbGl6ZVNjaGVtYSA9IChlbnRpdHk6IE5vblByZXNlbnRhdGlvbmFsRmllbGQgfCBUYWIsIHNjaGVtYSwgbG9jYWxpemF0aW9uOiBmYWxzZSB8IFNhbml0aXplZExvY2FsaXphdGlvbkNvbmZpZykgPT4ge1xuICBpZiAoZmllbGRJc0xvY2FsaXplZChlbnRpdHkpICYmIGxvY2FsaXphdGlvbiAmJiBBcnJheS5pc0FycmF5KGxvY2FsaXphdGlvbi5sb2NhbGVzKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBsb2NhbGl6YXRpb24ubG9jYWxlQ29kZXMucmVkdWNlKChsb2NhbGVTY2hlbWEsIGxvY2FsZSkgPT4gKHtcbiAgICAgICAgLi4ubG9jYWxlU2NoZW1hLFxuICAgICAgICBbbG9jYWxlXTogc2NoZW1hLFxuICAgICAgfSksIHtcbiAgICAgICAgX2lkOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICAgbG9jYWxpemVkOiB0cnVlLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHNjaGVtYTtcbn07XG5cbmNvbnN0IGJ1aWxkU2NoZW1hID0gKGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBjb25maWdGaWVsZHM6IEZpZWxkW10sIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zID0ge30pOiBTY2hlbWEgPT4ge1xuICBjb25zdCB7IGFsbG93SURGaWVsZCwgb3B0aW9ucyB9ID0gYnVpbGRTY2hlbWFPcHRpb25zO1xuICBsZXQgZmllbGRzID0ge307XG5cbiAgbGV0IHNjaGVtYUZpZWxkcyA9IGNvbmZpZ0ZpZWxkcztcblxuICBpZiAoIWFsbG93SURGaWVsZCkge1xuICAgIGNvbnN0IGlkRmllbGQgPSBzY2hlbWFGaWVsZHMuZmluZCgoZmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09ICdpZCcpO1xuICAgIGlmIChpZEZpZWxkKSB7XG4gICAgICBmaWVsZHMgPSB7XG4gICAgICAgIF9pZDogaWRGaWVsZC50eXBlID09PSAnbnVtYmVyJyA/IE51bWJlciA6IFN0cmluZyxcbiAgICAgIH07XG4gICAgICBzY2hlbWFGaWVsZHMgPSBzY2hlbWFGaWVsZHMuZmlsdGVyKChmaWVsZCkgPT4gIShmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2NoZW1hID0gbmV3IFNjaGVtYShmaWVsZHMsIG9wdGlvbnMpO1xuXG4gIHNjaGVtYUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGlmICghZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seShmaWVsZCkpIHtcbiAgICAgIGNvbnN0IGFkZEZpZWxkU2NoZW1hOiBGaWVsZFNjaGVtYUdlbmVyYXRvciA9IGZpZWxkVG9TY2hlbWFNYXBbZmllbGQudHlwZV07XG5cbiAgICAgIGlmIChhZGRGaWVsZFNjaGVtYSkge1xuICAgICAgICBhZGRGaWVsZFNjaGVtYShmaWVsZCwgc2NoZW1hLCBjb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc2NoZW1hO1xufTtcblxuY29uc3QgZmllbGRUb1NjaGVtYU1hcDogUmVjb3JkPHN0cmluZywgRmllbGRTY2hlbWFHZW5lcmF0b3I+ID0ge1xuICBudW1iZXI6IChmaWVsZDogTnVtYmVyRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0geyAuLi5mb3JtYXRCYXNlU2NoZW1hKGZpZWxkLCBidWlsZFNjaGVtYU9wdGlvbnMpLCB0eXBlOiBmaWVsZC5oYXNNYW55ID8gW051bWJlcl0gOiBOdW1iZXIgfTtcblxuICAgIHNjaGVtYS5hZGQoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBsb2NhbGl6ZVNjaGVtYShmaWVsZCwgYmFzZVNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgfSk7XG4gIH0sXG4gIHRleHQ6IChmaWVsZDogVGV4dEZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHsgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSwgdHlwZTogU3RyaW5nIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICBlbWFpbDogKGZpZWxkOiBFbWFpbEZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHsgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSwgdHlwZTogU3RyaW5nIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICB0ZXh0YXJlYTogKGZpZWxkOiBUZXh0YXJlYUZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHsgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSwgdHlwZTogU3RyaW5nIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICByaWNoVGV4dDogKGZpZWxkOiBSaWNoVGV4dEZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHsgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSwgdHlwZTogU2NoZW1hLlR5cGVzLk1peGVkIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICBjb2RlOiAoZmllbGQ6IENvZGVGaWVsZCwgc2NoZW1hOiBTY2hlbWEsIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBidWlsZFNjaGVtYU9wdGlvbnM6IEJ1aWxkU2NoZW1hT3B0aW9ucyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJhc2VTY2hlbWEgPSB7IC4uLmZvcm1hdEJhc2VTY2hlbWEoZmllbGQsIGJ1aWxkU2NoZW1hT3B0aW9ucyksIHR5cGU6IFN0cmluZyB9O1xuXG4gICAgc2NoZW1hLmFkZCh7XG4gICAgICBbZmllbGQubmFtZV06IGxvY2FsaXplU2NoZW1hKGZpZWxkLCBiYXNlU2NoZW1hLCBjb25maWcubG9jYWxpemF0aW9uKSxcbiAgICB9KTtcbiAgfSxcbiAganNvbjogKGZpZWxkOiBKU09ORmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0geyAuLi5mb3JtYXRCYXNlU2NoZW1hKGZpZWxkLCBidWlsZFNjaGVtYU9wdGlvbnMpLCB0eXBlOiBTY2hlbWEuVHlwZXMuTWl4ZWQgfTtcblxuICAgIHNjaGVtYS5hZGQoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBsb2NhbGl6ZVNjaGVtYShmaWVsZCwgYmFzZVNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgfSk7XG4gIH0sXG4gIHBvaW50OiAoZmllbGQ6IFBvaW50RmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hOiBTY2hlbWFUeXBlT3B0aW9uczx1bmtub3duPiA9IHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBlbnVtOiBbJ1BvaW50J10sXG4gICAgICB9LFxuICAgICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgICAgdHlwZTogW051bWJlcl0sXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogZmllbGQuZGVmYXVsdFZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoYnVpbGRTY2hlbWFPcHRpb25zLmRpc2FibGVVbmlxdWUgJiYgZmllbGQudW5pcXVlICYmIGZpZWxkLmxvY2FsaXplZCkge1xuICAgICAgYmFzZVNjaGVtYS5jb29yZGluYXRlcy5zcGFyc2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHNjaGVtYS5hZGQoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBsb2NhbGl6ZVNjaGVtYShmaWVsZCwgYmFzZVNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgfSk7XG5cbiAgICBpZiAoZmllbGQuaW5kZXggPT09IHRydWUgfHwgZmllbGQuaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5kZXhPcHRpb25zOiBJbmRleE9wdGlvbnMgPSB7fTtcbiAgICAgIGlmICghYnVpbGRTY2hlbWFPcHRpb25zLmRpc2FibGVVbmlxdWUgJiYgZmllbGQudW5pcXVlKSB7XG4gICAgICAgIGluZGV4T3B0aW9ucy5zcGFyc2UgPSB0cnVlO1xuICAgICAgICBpbmRleE9wdGlvbnMudW5pcXVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWVsZC5sb2NhbGl6ZWQgJiYgY29uZmlnLmxvY2FsaXphdGlvbikge1xuICAgICAgICBjb25maWcubG9jYWxpemF0aW9uLmxvY2FsZXMuZm9yRWFjaCgobG9jYWxlKSA9PiB7XG4gICAgICAgICAgc2NoZW1hLmluZGV4KHsgW2Ake2ZpZWxkLm5hbWV9LiR7bG9jYWxlfWBdOiAnMmRzcGhlcmUnIH0sIGluZGV4T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NoZW1hLmluZGV4KHsgW2ZpZWxkLm5hbWVdOiAnMmRzcGhlcmUnIH0sIGluZGV4T3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByYWRpbzogKGZpZWxkOiBSYWRpb0ZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHtcbiAgICAgIC4uLmZvcm1hdEJhc2VTY2hlbWEoZmllbGQsIGJ1aWxkU2NoZW1hT3B0aW9ucyksXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBlbnVtOiBmaWVsZC5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JykgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgIH0pLFxuICAgIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICBjaGVja2JveDogKGZpZWxkOiBDaGVja2JveEZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHsgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSwgdHlwZTogQm9vbGVhbiB9O1xuXG4gICAgc2NoZW1hLmFkZCh7XG4gICAgICBbZmllbGQubmFtZV06IGxvY2FsaXplU2NoZW1hKGZpZWxkLCBiYXNlU2NoZW1hLCBjb25maWcubG9jYWxpemF0aW9uKSxcbiAgICB9KTtcbiAgfSxcbiAgZGF0ZTogKGZpZWxkOiBEYXRlRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0geyAuLi5mb3JtYXRCYXNlU2NoZW1hKGZpZWxkLCBidWlsZFNjaGVtYU9wdGlvbnMpLCB0eXBlOiBEYXRlIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICB1cGxvYWQ6IChmaWVsZDogVXBsb2FkRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0ge1xuICAgICAgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSxcbiAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCxcbiAgICAgIHJlZjogZmllbGQucmVsYXRpb25UbyxcbiAgICB9O1xuXG4gICAgc2NoZW1hLmFkZCh7XG4gICAgICBbZmllbGQubmFtZV06IGxvY2FsaXplU2NoZW1hKGZpZWxkLCBiYXNlU2NoZW1hLCBjb25maWcubG9jYWxpemF0aW9uKSxcbiAgICB9KTtcbiAgfSxcbiAgcmVsYXRpb25zaGlwOiAoZmllbGQ6IFJlbGF0aW9uc2hpcEZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgaGFzTWFueVJlbGF0aW9ucyA9IEFycmF5LmlzQXJyYXkoZmllbGQucmVsYXRpb25Ubyk7XG4gICAgbGV0IHNjaGVtYVRvUmV0dXJuOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICBpZiAoZmllbGQubG9jYWxpemVkICYmIGNvbmZpZy5sb2NhbGl6YXRpb24pIHtcbiAgICAgIHNjaGVtYVRvUmV0dXJuID0ge1xuICAgICAgICB0eXBlOiBjb25maWcubG9jYWxpemF0aW9uLmxvY2FsZUNvZGVzLnJlZHVjZSgobG9jYWxlcywgbG9jYWxlKSA9PiB7XG4gICAgICAgICAgbGV0IGxvY2FsZVNjaGVtYTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgICAgICAgaWYgKGhhc01hbnlSZWxhdGlvbnMpIHtcbiAgICAgICAgICAgIGxvY2FsZVNjaGVtYSA9IHtcbiAgICAgICAgICAgICAgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSxcbiAgICAgICAgICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk1peGVkLFxuICAgICAgICAgICAgICBfaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCxcbiAgICAgICAgICAgICAgICByZWZQYXRoOiBgJHtmaWVsZC5uYW1lfS4ke2xvY2FsZX0ucmVsYXRpb25Ub2AsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlbGF0aW9uVG86IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBmaWVsZC5yZWxhdGlvblRvIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhbGVTY2hlbWEgPSB7XG4gICAgICAgICAgICAgIC4uLmZvcm1hdEJhc2VTY2hlbWEoZmllbGQsIGJ1aWxkU2NoZW1hT3B0aW9ucyksXG4gICAgICAgICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCxcbiAgICAgICAgICAgICAgcmVmOiBmaWVsZC5yZWxhdGlvblRvLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubG9jYWxlcyxcbiAgICAgICAgICAgIFtsb2NhbGVdOiBmaWVsZC5oYXNNYW55ID8geyB0eXBlOiBbbG9jYWxlU2NoZW1hXSwgZGVmYXVsdDogdW5kZWZpbmVkIH0gOiBsb2NhbGVTY2hlbWEsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwge30pLFxuICAgICAgICBsb2NhbGl6ZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaGFzTWFueVJlbGF0aW9ucykge1xuICAgICAgc2NoZW1hVG9SZXR1cm4gPSB7XG4gICAgICAgIC4uLmZvcm1hdEJhc2VTY2hlbWEoZmllbGQsIGJ1aWxkU2NoZW1hT3B0aW9ucyksXG4gICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCxcbiAgICAgICAgX2lkOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuTWl4ZWQsXG4gICAgICAgICAgcmVmUGF0aDogYCR7ZmllbGQubmFtZX0ucmVsYXRpb25Ub2AsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aW9uVG86IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBmaWVsZC5yZWxhdGlvblRvIH0sXG4gICAgICB9O1xuXG4gICAgICBpZiAoZmllbGQuaGFzTWFueSkge1xuICAgICAgICBzY2hlbWFUb1JldHVybiA9IHtcbiAgICAgICAgICB0eXBlOiBbc2NoZW1hVG9SZXR1cm5dLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZW1hVG9SZXR1cm4gPSB7XG4gICAgICAgIC4uLmZvcm1hdEJhc2VTY2hlbWEoZmllbGQsIGJ1aWxkU2NoZW1hT3B0aW9ucyksXG4gICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCxcbiAgICAgICAgcmVmOiBmaWVsZC5yZWxhdGlvblRvLFxuICAgICAgfTtcblxuICAgICAgaWYgKGZpZWxkLmhhc01hbnkpIHtcbiAgICAgICAgc2NoZW1hVG9SZXR1cm4gPSB7XG4gICAgICAgICAgdHlwZTogW3NjaGVtYVRvUmV0dXJuXSxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2NoZW1hLmFkZCh7XG4gICAgICBbZmllbGQubmFtZV06IHNjaGVtYVRvUmV0dXJuLFxuICAgIH0pO1xuICB9LFxuICByb3c6IChmaWVsZDogUm93RmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBmaWVsZC5maWVsZHMuZm9yRWFjaCgoc3ViRmllbGQ6IEZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBhZGRGaWVsZFNjaGVtYTogRmllbGRTY2hlbWFHZW5lcmF0b3IgPSBmaWVsZFRvU2NoZW1hTWFwW3N1YkZpZWxkLnR5cGVdO1xuXG4gICAgICBpZiAoYWRkRmllbGRTY2hlbWEpIHtcbiAgICAgICAgYWRkRmllbGRTY2hlbWEoc3ViRmllbGQsIHNjaGVtYSwgY29uZmlnLCBidWlsZFNjaGVtYU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBjb2xsYXBzaWJsZTogKGZpZWxkOiBDb2xsYXBzaWJsZUZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgZmllbGQuZmllbGRzLmZvckVhY2goKHN1YkZpZWxkOiBGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgYWRkRmllbGRTY2hlbWE6IEZpZWxkU2NoZW1hR2VuZXJhdG9yID0gZmllbGRUb1NjaGVtYU1hcFtzdWJGaWVsZC50eXBlXTtcblxuICAgICAgaWYgKGFkZEZpZWxkU2NoZW1hKSB7XG4gICAgICAgIGFkZEZpZWxkU2NoZW1hKHN1YkZpZWxkLCBzY2hlbWEsIGNvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdGFiczogKGZpZWxkOiBUYWJzRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBmaWVsZC50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKHRhYkhhc05hbWUodGFiKSkge1xuICAgICAgICBjb25zdCBiYXNlU2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IGJ1aWxkU2NoZW1hKFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgdGFiLmZpZWxkcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIF9pZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1pbmltaXplOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGlzYWJsZVVuaXF1ZTogYnVpbGRTY2hlbWFPcHRpb25zLmRpc2FibGVVbmlxdWUsXG4gICAgICAgICAgICAgIGRyYWZ0c0VuYWJsZWQ6IGJ1aWxkU2NoZW1hT3B0aW9ucy5kcmFmdHNFbmFibGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHNjaGVtYS5hZGQoe1xuICAgICAgICAgIFt0YWIubmFtZV06IGxvY2FsaXplU2NoZW1hKHRhYiwgYmFzZVNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHRhYiBhcyBVbm5hbWVkVGFiKS5maWVsZHMuZm9yRWFjaCgoc3ViRmllbGQ6IEZpZWxkKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWRkRmllbGRTY2hlbWE6IEZpZWxkU2NoZW1hR2VuZXJhdG9yID0gZmllbGRUb1NjaGVtYU1hcFtzdWJGaWVsZC50eXBlXTtcblxuICAgICAgICAgIGlmIChhZGRGaWVsZFNjaGVtYSkge1xuICAgICAgICAgICAgYWRkRmllbGRTY2hlbWEoc3ViRmllbGQsIHNjaGVtYSwgY29uZmlnLCBidWlsZFNjaGVtYU9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGFycmF5OiAoZmllbGQ6IEFycmF5RmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0ge1xuICAgICAgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIHR5cGU6IFtidWlsZFNjaGVtYShcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBmaWVsZC5maWVsZHMsXG4gICAgICAgIHtcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBfaWQ6IGZhbHNlLFxuICAgICAgICAgICAgaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWluaW1pemU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWxsb3dJREZpZWxkOiB0cnVlLFxuICAgICAgICAgIGRpc2FibGVVbmlxdWU6IGJ1aWxkU2NoZW1hT3B0aW9ucy5kaXNhYmxlVW5pcXVlLFxuICAgICAgICAgIGRyYWZ0c0VuYWJsZWQ6IGJ1aWxkU2NoZW1hT3B0aW9ucy5kcmFmdHNFbmFibGVkLFxuICAgICAgICB9LFxuICAgICAgKV0sXG4gICAgfTtcblxuICAgIHNjaGVtYS5hZGQoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBsb2NhbGl6ZVNjaGVtYShmaWVsZCwgYmFzZVNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgfSk7XG4gIH0sXG4gIGdyb3VwOiAoZmllbGQ6IEdyb3VwRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmb3JtYXR0ZWRCYXNlU2NoZW1hID0gZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKTtcblxuICAgIC8vIGNhcnJ5IGluZGV4U29ydGFibGVGaWVsZHMgdGhyb3VnaCB0byB2ZXJzaW9ucyBpZiBkcmFmdHMgZW5hYmxlZFxuICAgIGNvbnN0IGluZGV4U29ydGFibGVGaWVsZHMgPSAoYnVpbGRTY2hlbWFPcHRpb25zLmluZGV4U29ydGFibGVGaWVsZHMgJiYgZmllbGQubmFtZSA9PT0gJ3ZlcnNpb24nICYmIGJ1aWxkU2NoZW1hT3B0aW9ucy5kcmFmdHNFbmFibGVkKTtcblxuICAgIGNvbnN0IGJhc2VTY2hlbWEgPSB7XG4gICAgICAuLi5mb3JtYXR0ZWRCYXNlU2NoZW1hLFxuICAgICAgdHlwZTogYnVpbGRTY2hlbWEoXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgZmllbGQuZmllbGRzLFxuICAgICAgICB7XG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgX2lkOiBmYWxzZSxcbiAgICAgICAgICAgIGlkOiBmYWxzZSxcbiAgICAgICAgICAgIG1pbmltaXplOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluZGV4U29ydGFibGVGaWVsZHMsXG4gICAgICAgICAgZGlzYWJsZVVuaXF1ZTogYnVpbGRTY2hlbWFPcHRpb25zLmRpc2FibGVVbmlxdWUsXG4gICAgICAgICAgZHJhZnRzRW5hYmxlZDogYnVpbGRTY2hlbWFPcHRpb25zLmRyYWZ0c0VuYWJsZWQsXG4gICAgICAgIH0sXG4gICAgICApLFxuICAgIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICBzZWxlY3Q6IChmaWVsZDogU2VsZWN0RmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0ge1xuICAgICAgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGVudW06IGZpZWxkLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfSksXG4gICAgfTtcblxuICAgIGlmIChidWlsZFNjaGVtYU9wdGlvbnMuZHJhZnRzRW5hYmxlZCB8fCAhZmllbGQucmVxdWlyZWQpIHtcbiAgICAgIGJhc2VTY2hlbWEuZW51bS5wdXNoKG51bGwpO1xuICAgIH1cblxuICAgIHNjaGVtYS5hZGQoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBsb2NhbGl6ZVNjaGVtYShcbiAgICAgICAgZmllbGQsXG4gICAgICAgIGZpZWxkLmhhc01hbnkgPyBbYmFzZVNjaGVtYV0gOiBiYXNlU2NoZW1hLFxuICAgICAgICBjb25maWcubG9jYWxpemF0aW9uLFxuICAgICAgKSxcbiAgICB9KTtcbiAgfSxcbiAgYmxvY2tzOiAoZmllbGQ6IEJsb2NrRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHtcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIHR5cGU6IFtuZXcgU2NoZW1hKHt9LCB7IF9pZDogZmFsc2UsIGRpc2NyaW1pbmF0b3JLZXk6ICdibG9ja1R5cGUnIH0pXSxcbiAgICB9O1xuXG4gICAgc2NoZW1hLmFkZCh7XG4gICAgICBbZmllbGQubmFtZV06IGxvY2FsaXplU2NoZW1hKGZpZWxkLCBmaWVsZFNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgfSk7XG5cbiAgICBmaWVsZC5ibG9ja3MuZm9yRWFjaCgoYmxvY2tJdGVtOiBCbG9jaykgPT4ge1xuICAgICAgY29uc3QgYmxvY2tTY2hlbWEgPSBuZXcgU2NoZW1hKHt9LCB7IF9pZDogZmFsc2UsIGlkOiBmYWxzZSB9KTtcblxuICAgICAgYmxvY2tJdGVtLmZpZWxkcy5mb3JFYWNoKChibG9ja0ZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZEZpZWxkU2NoZW1hOiBGaWVsZFNjaGVtYUdlbmVyYXRvciA9IGZpZWxkVG9TY2hlbWFNYXBbYmxvY2tGaWVsZC50eXBlXTtcbiAgICAgICAgaWYgKGFkZEZpZWxkU2NoZW1hKSB7XG4gICAgICAgICAgYWRkRmllbGRTY2hlbWEoYmxvY2tGaWVsZCwgYmxvY2tTY2hlbWEsIGNvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaWVsZC5sb2NhbGl6ZWQgJiYgY29uZmlnLmxvY2FsaXphdGlvbikge1xuICAgICAgICBjb25maWcubG9jYWxpemF0aW9uLmxvY2FsZUNvZGVzLmZvckVhY2goKGxvY2FsZUNvZGUpID0+IHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBQb3NzaWJsZSBpbmNvcnJlY3QgdHlwaW5nIGluIG1vbmdvb3NlIHR5cGVzLCB0aGlzIHdvcmtzXG4gICAgICAgICAgc2NoZW1hLnBhdGgoYCR7ZmllbGQubmFtZX0uJHtsb2NhbGVDb2RlfWApLmRpc2NyaW1pbmF0b3IoYmxvY2tJdGVtLnNsdWcsIGJsb2NrU2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgUG9zc2libGUgaW5jb3JyZWN0IHR5cGluZyBpbiBtb25nb29zZSB0eXBlcywgdGhpcyB3b3Jrc1xuICAgICAgICBzY2hlbWEucGF0aChmaWVsZC5uYW1lKS5kaXNjcmltaW5hdG9yKGJsb2NrSXRlbS5zbHVnLCBibG9ja1NjaGVtYSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZFNjaGVtYTtcbiJdLCJuYW1lcyI6WyJmb3JtYXRCYXNlU2NoZW1hIiwiZmllbGQiLCJidWlsZFNjaGVtYU9wdGlvbnMiLCJkaXNhYmxlVW5pcXVlIiwiZHJhZnRzRW5hYmxlZCIsImluZGV4U29ydGFibGVGaWVsZHMiLCJzY2hlbWEiLCJ1bmlxdWUiLCJyZXF1aXJlZCIsImluZGV4IiwibG9jYWxpemVkIiwic3BhcnNlIiwiaGlkZGVuIiwibG9jYWxpemVTY2hlbWEiLCJlbnRpdHkiLCJsb2NhbGl6YXRpb24iLCJmaWVsZElzTG9jYWxpemVkIiwiQXJyYXkiLCJpc0FycmF5IiwibG9jYWxlcyIsInR5cGUiLCJsb2NhbGVDb2RlcyIsInJlZHVjZSIsImxvY2FsZVNjaGVtYSIsImxvY2FsZSIsIl9pZCIsImJ1aWxkU2NoZW1hIiwiY29uZmlnIiwiY29uZmlnRmllbGRzIiwiYWxsb3dJREZpZWxkIiwib3B0aW9ucyIsImZpZWxkcyIsInNjaGVtYUZpZWxkcyIsImlkRmllbGQiLCJmaW5kIiwiZmllbGRBZmZlY3RzRGF0YSIsIm5hbWUiLCJOdW1iZXIiLCJTdHJpbmciLCJmaWx0ZXIiLCJTY2hlbWEiLCJmb3JFYWNoIiwiZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSIsImFkZEZpZWxkU2NoZW1hIiwiZmllbGRUb1NjaGVtYU1hcCIsIm51bWJlciIsImJhc2VTY2hlbWEiLCJoYXNNYW55IiwiYWRkIiwidGV4dCIsImVtYWlsIiwidGV4dGFyZWEiLCJyaWNoVGV4dCIsIlR5cGVzIiwiTWl4ZWQiLCJjb2RlIiwianNvbiIsInBvaW50IiwiZW51bSIsImNvb3JkaW5hdGVzIiwiZGVmYXVsdCIsImRlZmF1bHRWYWx1ZSIsInVuZGVmaW5lZCIsImluZGV4T3B0aW9ucyIsInJhZGlvIiwibWFwIiwib3B0aW9uIiwidmFsdWUiLCJjaGVja2JveCIsIkJvb2xlYW4iLCJkYXRlIiwiRGF0ZSIsInVwbG9hZCIsInJlZiIsInJlbGF0aW9uVG8iLCJyZWxhdGlvbnNoaXAiLCJoYXNNYW55UmVsYXRpb25zIiwic2NoZW1hVG9SZXR1cm4iLCJyZWZQYXRoIiwicm93Iiwic3ViRmllbGQiLCJjb2xsYXBzaWJsZSIsInRhYnMiLCJ0YWIiLCJ0YWJIYXNOYW1lIiwiaWQiLCJtaW5pbWl6ZSIsImFycmF5IiwiZ3JvdXAiLCJmb3JtYXR0ZWRCYXNlU2NoZW1hIiwic2VsZWN0IiwicHVzaCIsImJsb2NrcyIsImZpZWxkU2NoZW1hIiwiZGlzY3JpbWluYXRvcktleSIsImJsb2NrSXRlbSIsImJsb2NrU2NoZW1hIiwiYmxvY2tGaWVsZCIsImxvY2FsZUNvZGUiLCJwYXRoIiwiZGlzY3JpbWluYXRvciIsInNsdWciXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCxHQUNwRCx5Q0FBeUMsR0FDekMsMERBQTBELEdBQzFELHVDQUF1Qzs7OzsrQkFzZHZDOzs7ZUFBQTs7O3dCQXJkdUU7cUJBb0NoRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZUCxJQUFNQSxtQkFBbUIsU0FBQ0MsT0FBMkJDO0lBQ25ELElBQVFDLGdCQUFzREQsbUJBQXREQyxlQUFlQyxnQkFBdUNGLG1CQUF2Q0UsZUFBZUMsc0JBQXdCSCxtQkFBeEJHO0lBQ3RDLElBQU1DLFNBQXFDO1FBQ3pDQyxRQUFRLEFBQUMsQ0FBQ0osaUJBQWlCRixNQUFNTSxNQUFNLElBQUs7UUFDNUNDLFVBQVU7UUFDVkMsT0FBT1IsTUFBTVEsS0FBSyxJQUFLLENBQUNOLGlCQUFpQkYsTUFBTU0sTUFBTSxJQUFLRix1QkFBdUI7SUFDbkY7SUFFQSxJQUFLQyxPQUFPQyxNQUFNLElBQUtOLENBQUFBLE1BQU1TLFNBQVMsSUFBSU4sYUFBWSxHQUFLO1FBQ3pERSxPQUFPSyxNQUFNLEdBQUc7SUFDbEI7SUFFQSxJQUFJVixNQUFNVyxNQUFNLEVBQUU7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