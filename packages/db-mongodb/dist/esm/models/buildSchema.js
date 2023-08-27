/* eslint-disable @typescript-eslint/ban-ts-comment */ /* eslint-disable class-methods-use-this */ /* eslint-disable @typescript-eslint/no-use-before-define */ /* eslint-disable no-use-before-define */ function _define_property(obj, key, value) {
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
import { Schema } from "mongoose";
import { fieldAffectsData, fieldIsLocalized, fieldIsPresentationalOnly, tabHasName } from "payload/types";
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
    if (fieldIsLocalized(entity) && localization && Array.isArray(localization.locales)) {
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
            return fieldAffectsData(field) && field.name === "id";
        });
        if (idField) {
            fields = {
                _id: idField.type === "number" ? Number : String
            };
            schemaFields = schemaFields.filter(function(field) {
                return !(fieldAffectsData(field) && field.name === "id");
            });
        }
    }
    var schema = new Schema(fields, options);
    schemaFields.forEach(function(field) {
        if (!fieldIsPresentationalOnly(field)) {
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
            type: Schema.Types.Mixed
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
            type: Schema.Types.Mixed
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
            type: Schema.Types.Mixed,
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
                            type: Schema.Types.Mixed,
                            _id: false,
                            value: {
                                type: Schema.Types.Mixed,
                                refPath: "".concat(field.name, ".").concat(locale, ".relationTo")
                            },
                            relationTo: {
                                type: String,
                                enum: field.relationTo
                            }
                        });
                    } else {
                        localeSchema = _object_spread_props(_object_spread({}, formatBaseSchema(field, buildSchemaOptions)), {
                            type: Schema.Types.Mixed,
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
                type: Schema.Types.Mixed,
                _id: false,
                value: {
                    type: Schema.Types.Mixed,
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
                type: Schema.Types.Mixed,
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
            if (tabHasName(tab)) {
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
                new Schema({}, {
                    _id: false,
                    discriminatorKey: "blockType"
                })
            ]
        };
        schema.add(_define_property({}, field.name, localizeSchema(field, fieldSchema, config.localization)));
        field.blocks.forEach(function(blockItem) {
            var blockSchema = new Schema({}, {
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
export default buildSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvYnVpbGRTY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgeyBJbmRleE9wdGlvbnMsIFNjaGVtYSwgU2NoZW1hT3B0aW9ucywgU2NoZW1hVHlwZU9wdGlvbnMgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcsIFNhbml0aXplZExvY2FsaXphdGlvbkNvbmZpZyB9IGZyb20gJ3BheWxvYWQvY29uZmlnJztcbmltcG9ydCB7XG4gIEFycmF5RmllbGQsXG4gIEJsb2NrLFxuICBCbG9ja0ZpZWxkLFxuICBDaGVja2JveEZpZWxkLFxuICBDb2RlRmllbGQsXG4gIENvbGxhcHNpYmxlRmllbGQsXG4gIERhdGVGaWVsZCxcbiAgRW1haWxGaWVsZCxcbiAgRmllbGQsXG4gIEdyb3VwRmllbGQsXG4gIEpTT05GaWVsZCxcbiAgTnVtYmVyRmllbGQsXG4gIFBvaW50RmllbGQsXG4gIFJhZGlvRmllbGQsXG4gIFJlbGF0aW9uc2hpcEZpZWxkLFxuICBSaWNoVGV4dEZpZWxkLFxuICBSb3dGaWVsZCxcbiAgU2VsZWN0RmllbGQsXG4gIFRhYnNGaWVsZCxcbiAgVGV4dGFyZWFGaWVsZCxcbiAgVGV4dEZpZWxkLFxuICBVcGxvYWRGaWVsZCxcbn0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5cbmltcG9ydCB7XG4gIEZpZWxkQWZmZWN0aW5nRGF0YSxcbiAgZmllbGRBZmZlY3RzRGF0YSxcbiAgZmllbGRJc0xvY2FsaXplZCxcbiAgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSxcbiAgTm9uUHJlc2VudGF0aW9uYWxGaWVsZCxcbiAgVGFiLFxuICB0YWJIYXNOYW1lLFxuICBVbm5hbWVkVGFiXG59IGZyb20gJ3BheWxvYWQvdHlwZXMnXG5cbmV4cG9ydCB0eXBlIEJ1aWxkU2NoZW1hT3B0aW9ucyA9IHtcbiAgb3B0aW9ucz86IFNjaGVtYU9wdGlvbnNcbiAgYWxsb3dJREZpZWxkPzogYm9vbGVhblxuICBkaXNhYmxlVW5pcXVlPzogYm9vbGVhblxuICBkcmFmdHNFbmFibGVkPzogYm9vbGVhblxuICBpbmRleFNvcnRhYmxlRmllbGRzPzogYm9vbGVhblxufVxuXG50eXBlIEZpZWxkU2NoZW1hR2VuZXJhdG9yID0gKGZpZWxkOiBGaWVsZCwgc2NoZW1hOiBTY2hlbWEsIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBidWlsZFNjaGVtYU9wdGlvbnM6IEJ1aWxkU2NoZW1hT3B0aW9ucykgPT4gdm9pZDtcblxuY29uc3QgZm9ybWF0QmFzZVNjaGVtYSA9IChmaWVsZDogRmllbGRBZmZlY3RpbmdEYXRhLCBidWlsZFNjaGVtYU9wdGlvbnM6IEJ1aWxkU2NoZW1hT3B0aW9ucykgPT4ge1xuICBjb25zdCB7IGRpc2FibGVVbmlxdWUsIGRyYWZ0c0VuYWJsZWQsIGluZGV4U29ydGFibGVGaWVsZHMgfSA9IGJ1aWxkU2NoZW1hT3B0aW9ucztcbiAgY29uc3Qgc2NoZW1hOiBTY2hlbWFUeXBlT3B0aW9uczx1bmtub3duPiA9IHtcbiAgICB1bmlxdWU6ICghZGlzYWJsZVVuaXF1ZSAmJiBmaWVsZC51bmlxdWUpIHx8IGZhbHNlLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBpbmRleDogZmllbGQuaW5kZXggfHwgKCFkaXNhYmxlVW5pcXVlICYmIGZpZWxkLnVuaXF1ZSkgfHwgaW5kZXhTb3J0YWJsZUZpZWxkcyB8fCBmYWxzZSxcbiAgfTtcblxuICBpZiAoKHNjaGVtYS51bmlxdWUgJiYgKGZpZWxkLmxvY2FsaXplZCB8fCBkcmFmdHNFbmFibGVkKSkpIHtcbiAgICBzY2hlbWEuc3BhcnNlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChmaWVsZC5oaWRkZW4pIHtcbiAgICBzY2hlbWEuaGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzY2hlbWE7XG59O1xuXG5jb25zdCBsb2NhbGl6ZVNjaGVtYSA9IChlbnRpdHk6IE5vblByZXNlbnRhdGlvbmFsRmllbGQgfCBUYWIsIHNjaGVtYSwgbG9jYWxpemF0aW9uOiBmYWxzZSB8IFNhbml0aXplZExvY2FsaXphdGlvbkNvbmZpZykgPT4ge1xuICBpZiAoZmllbGRJc0xvY2FsaXplZChlbnRpdHkpICYmIGxvY2FsaXphdGlvbiAmJiBBcnJheS5pc0FycmF5KGxvY2FsaXphdGlvbi5sb2NhbGVzKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBsb2NhbGl6YXRpb24ubG9jYWxlQ29kZXMucmVkdWNlKChsb2NhbGVTY2hlbWEsIGxvY2FsZSkgPT4gKHtcbiAgICAgICAgLi4ubG9jYWxlU2NoZW1hLFxuICAgICAgICBbbG9jYWxlXTogc2NoZW1hLFxuICAgICAgfSksIHtcbiAgICAgICAgX2lkOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICAgbG9jYWxpemVkOiB0cnVlLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHNjaGVtYTtcbn07XG5cbmNvbnN0IGJ1aWxkU2NoZW1hID0gKGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBjb25maWdGaWVsZHM6IEZpZWxkW10sIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zID0ge30pOiBTY2hlbWEgPT4ge1xuICBjb25zdCB7IGFsbG93SURGaWVsZCwgb3B0aW9ucyB9ID0gYnVpbGRTY2hlbWFPcHRpb25zO1xuICBsZXQgZmllbGRzID0ge307XG5cbiAgbGV0IHNjaGVtYUZpZWxkcyA9IGNvbmZpZ0ZpZWxkcztcblxuICBpZiAoIWFsbG93SURGaWVsZCkge1xuICAgIGNvbnN0IGlkRmllbGQgPSBzY2hlbWFGaWVsZHMuZmluZCgoZmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09ICdpZCcpO1xuICAgIGlmIChpZEZpZWxkKSB7XG4gICAgICBmaWVsZHMgPSB7XG4gICAgICAgIF9pZDogaWRGaWVsZC50eXBlID09PSAnbnVtYmVyJyA/IE51bWJlciA6IFN0cmluZyxcbiAgICAgIH07XG4gICAgICBzY2hlbWFGaWVsZHMgPSBzY2hlbWFGaWVsZHMuZmlsdGVyKChmaWVsZCkgPT4gIShmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2NoZW1hID0gbmV3IFNjaGVtYShmaWVsZHMsIG9wdGlvbnMpO1xuXG4gIHNjaGVtYUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGlmICghZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seShmaWVsZCkpIHtcbiAgICAgIGNvbnN0IGFkZEZpZWxkU2NoZW1hOiBGaWVsZFNjaGVtYUdlbmVyYXRvciA9IGZpZWxkVG9TY2hlbWFNYXBbZmllbGQudHlwZV07XG5cbiAgICAgIGlmIChhZGRGaWVsZFNjaGVtYSkge1xuICAgICAgICBhZGRGaWVsZFNjaGVtYShmaWVsZCwgc2NoZW1hLCBjb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc2NoZW1hO1xufTtcblxuY29uc3QgZmllbGRUb1NjaGVtYU1hcDogUmVjb3JkPHN0cmluZywgRmllbGRTY2hlbWFHZW5lcmF0b3I+ID0ge1xuICBudW1iZXI6IChmaWVsZDogTnVtYmVyRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0geyAuLi5mb3JtYXRCYXNlU2NoZW1hKGZpZWxkLCBidWlsZFNjaGVtYU9wdGlvbnMpLCB0eXBlOiBmaWVsZC5oYXNNYW55ID8gW051bWJlcl0gOiBOdW1iZXIgfTtcblxuICAgIHNjaGVtYS5hZGQoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBsb2NhbGl6ZVNjaGVtYShmaWVsZCwgYmFzZVNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgfSk7XG4gIH0sXG4gIHRleHQ6IChmaWVsZDogVGV4dEZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHsgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSwgdHlwZTogU3RyaW5nIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICBlbWFpbDogKGZpZWxkOiBFbWFpbEZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHsgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSwgdHlwZTogU3RyaW5nIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICB0ZXh0YXJlYTogKGZpZWxkOiBUZXh0YXJlYUZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHsgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSwgdHlwZTogU3RyaW5nIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICByaWNoVGV4dDogKGZpZWxkOiBSaWNoVGV4dEZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHsgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSwgdHlwZTogU2NoZW1hLlR5cGVzLk1peGVkIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICBjb2RlOiAoZmllbGQ6IENvZGVGaWVsZCwgc2NoZW1hOiBTY2hlbWEsIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBidWlsZFNjaGVtYU9wdGlvbnM6IEJ1aWxkU2NoZW1hT3B0aW9ucyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJhc2VTY2hlbWEgPSB7IC4uLmZvcm1hdEJhc2VTY2hlbWEoZmllbGQsIGJ1aWxkU2NoZW1hT3B0aW9ucyksIHR5cGU6IFN0cmluZyB9O1xuXG4gICAgc2NoZW1hLmFkZCh7XG4gICAgICBbZmllbGQubmFtZV06IGxvY2FsaXplU2NoZW1hKGZpZWxkLCBiYXNlU2NoZW1hLCBjb25maWcubG9jYWxpemF0aW9uKSxcbiAgICB9KTtcbiAgfSxcbiAganNvbjogKGZpZWxkOiBKU09ORmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0geyAuLi5mb3JtYXRCYXNlU2NoZW1hKGZpZWxkLCBidWlsZFNjaGVtYU9wdGlvbnMpLCB0eXBlOiBTY2hlbWEuVHlwZXMuTWl4ZWQgfTtcblxuICAgIHNjaGVtYS5hZGQoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBsb2NhbGl6ZVNjaGVtYShmaWVsZCwgYmFzZVNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgfSk7XG4gIH0sXG4gIHBvaW50OiAoZmllbGQ6IFBvaW50RmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hOiBTY2hlbWFUeXBlT3B0aW9uczx1bmtub3duPiA9IHtcbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBlbnVtOiBbJ1BvaW50J10sXG4gICAgICB9LFxuICAgICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgICAgdHlwZTogW051bWJlcl0sXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogZmllbGQuZGVmYXVsdFZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoYnVpbGRTY2hlbWFPcHRpb25zLmRpc2FibGVVbmlxdWUgJiYgZmllbGQudW5pcXVlICYmIGZpZWxkLmxvY2FsaXplZCkge1xuICAgICAgYmFzZVNjaGVtYS5jb29yZGluYXRlcy5zcGFyc2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHNjaGVtYS5hZGQoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBsb2NhbGl6ZVNjaGVtYShmaWVsZCwgYmFzZVNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgfSk7XG5cbiAgICBpZiAoZmllbGQuaW5kZXggPT09IHRydWUgfHwgZmllbGQuaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5kZXhPcHRpb25zOiBJbmRleE9wdGlvbnMgPSB7fTtcbiAgICAgIGlmICghYnVpbGRTY2hlbWFPcHRpb25zLmRpc2FibGVVbmlxdWUgJiYgZmllbGQudW5pcXVlKSB7XG4gICAgICAgIGluZGV4T3B0aW9ucy5zcGFyc2UgPSB0cnVlO1xuICAgICAgICBpbmRleE9wdGlvbnMudW5pcXVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWVsZC5sb2NhbGl6ZWQgJiYgY29uZmlnLmxvY2FsaXphdGlvbikge1xuICAgICAgICBjb25maWcubG9jYWxpemF0aW9uLmxvY2FsZXMuZm9yRWFjaCgobG9jYWxlKSA9PiB7XG4gICAgICAgICAgc2NoZW1hLmluZGV4KHsgW2Ake2ZpZWxkLm5hbWV9LiR7bG9jYWxlfWBdOiAnMmRzcGhlcmUnIH0sIGluZGV4T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NoZW1hLmluZGV4KHsgW2ZpZWxkLm5hbWVdOiAnMmRzcGhlcmUnIH0sIGluZGV4T3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByYWRpbzogKGZpZWxkOiBSYWRpb0ZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHtcbiAgICAgIC4uLmZvcm1hdEJhc2VTY2hlbWEoZmllbGQsIGJ1aWxkU2NoZW1hT3B0aW9ucyksXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBlbnVtOiBmaWVsZC5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JykgcmV0dXJuIG9wdGlvbi52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgIH0pLFxuICAgIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICBjaGVja2JveDogKGZpZWxkOiBDaGVja2JveEZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYmFzZVNjaGVtYSA9IHsgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSwgdHlwZTogQm9vbGVhbiB9O1xuXG4gICAgc2NoZW1hLmFkZCh7XG4gICAgICBbZmllbGQubmFtZV06IGxvY2FsaXplU2NoZW1hKGZpZWxkLCBiYXNlU2NoZW1hLCBjb25maWcubG9jYWxpemF0aW9uKSxcbiAgICB9KTtcbiAgfSxcbiAgZGF0ZTogKGZpZWxkOiBEYXRlRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0geyAuLi5mb3JtYXRCYXNlU2NoZW1hKGZpZWxkLCBidWlsZFNjaGVtYU9wdGlvbnMpLCB0eXBlOiBEYXRlIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICB1cGxvYWQ6IChmaWVsZDogVXBsb2FkRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0ge1xuICAgICAgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSxcbiAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCxcbiAgICAgIHJlZjogZmllbGQucmVsYXRpb25UbyxcbiAgICB9O1xuXG4gICAgc2NoZW1hLmFkZCh7XG4gICAgICBbZmllbGQubmFtZV06IGxvY2FsaXplU2NoZW1hKGZpZWxkLCBiYXNlU2NoZW1hLCBjb25maWcubG9jYWxpemF0aW9uKSxcbiAgICB9KTtcbiAgfSxcbiAgcmVsYXRpb25zaGlwOiAoZmllbGQ6IFJlbGF0aW9uc2hpcEZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgaGFzTWFueVJlbGF0aW9ucyA9IEFycmF5LmlzQXJyYXkoZmllbGQucmVsYXRpb25Ubyk7XG4gICAgbGV0IHNjaGVtYVRvUmV0dXJuOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICBpZiAoZmllbGQubG9jYWxpemVkICYmIGNvbmZpZy5sb2NhbGl6YXRpb24pIHtcbiAgICAgIHNjaGVtYVRvUmV0dXJuID0ge1xuICAgICAgICB0eXBlOiBjb25maWcubG9jYWxpemF0aW9uLmxvY2FsZUNvZGVzLnJlZHVjZSgobG9jYWxlcywgbG9jYWxlKSA9PiB7XG4gICAgICAgICAgbGV0IGxvY2FsZVNjaGVtYTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgICAgICAgaWYgKGhhc01hbnlSZWxhdGlvbnMpIHtcbiAgICAgICAgICAgIGxvY2FsZVNjaGVtYSA9IHtcbiAgICAgICAgICAgICAgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSxcbiAgICAgICAgICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk1peGVkLFxuICAgICAgICAgICAgICBfaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCxcbiAgICAgICAgICAgICAgICByZWZQYXRoOiBgJHtmaWVsZC5uYW1lfS4ke2xvY2FsZX0ucmVsYXRpb25Ub2AsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlbGF0aW9uVG86IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBmaWVsZC5yZWxhdGlvblRvIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhbGVTY2hlbWEgPSB7XG4gICAgICAgICAgICAgIC4uLmZvcm1hdEJhc2VTY2hlbWEoZmllbGQsIGJ1aWxkU2NoZW1hT3B0aW9ucyksXG4gICAgICAgICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCxcbiAgICAgICAgICAgICAgcmVmOiBmaWVsZC5yZWxhdGlvblRvLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubG9jYWxlcyxcbiAgICAgICAgICAgIFtsb2NhbGVdOiBmaWVsZC5oYXNNYW55ID8geyB0eXBlOiBbbG9jYWxlU2NoZW1hXSwgZGVmYXVsdDogdW5kZWZpbmVkIH0gOiBsb2NhbGVTY2hlbWEsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwge30pLFxuICAgICAgICBsb2NhbGl6ZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaGFzTWFueVJlbGF0aW9ucykge1xuICAgICAgc2NoZW1hVG9SZXR1cm4gPSB7XG4gICAgICAgIC4uLmZvcm1hdEJhc2VTY2hlbWEoZmllbGQsIGJ1aWxkU2NoZW1hT3B0aW9ucyksXG4gICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCxcbiAgICAgICAgX2lkOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuTWl4ZWQsXG4gICAgICAgICAgcmVmUGF0aDogYCR7ZmllbGQubmFtZX0ucmVsYXRpb25Ub2AsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aW9uVG86IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBmaWVsZC5yZWxhdGlvblRvIH0sXG4gICAgICB9O1xuXG4gICAgICBpZiAoZmllbGQuaGFzTWFueSkge1xuICAgICAgICBzY2hlbWFUb1JldHVybiA9IHtcbiAgICAgICAgICB0eXBlOiBbc2NoZW1hVG9SZXR1cm5dLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZW1hVG9SZXR1cm4gPSB7XG4gICAgICAgIC4uLmZvcm1hdEJhc2VTY2hlbWEoZmllbGQsIGJ1aWxkU2NoZW1hT3B0aW9ucyksXG4gICAgICAgIHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCxcbiAgICAgICAgcmVmOiBmaWVsZC5yZWxhdGlvblRvLFxuICAgICAgfTtcblxuICAgICAgaWYgKGZpZWxkLmhhc01hbnkpIHtcbiAgICAgICAgc2NoZW1hVG9SZXR1cm4gPSB7XG4gICAgICAgICAgdHlwZTogW3NjaGVtYVRvUmV0dXJuXSxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2NoZW1hLmFkZCh7XG4gICAgICBbZmllbGQubmFtZV06IHNjaGVtYVRvUmV0dXJuLFxuICAgIH0pO1xuICB9LFxuICByb3c6IChmaWVsZDogUm93RmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBmaWVsZC5maWVsZHMuZm9yRWFjaCgoc3ViRmllbGQ6IEZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBhZGRGaWVsZFNjaGVtYTogRmllbGRTY2hlbWFHZW5lcmF0b3IgPSBmaWVsZFRvU2NoZW1hTWFwW3N1YkZpZWxkLnR5cGVdO1xuXG4gICAgICBpZiAoYWRkRmllbGRTY2hlbWEpIHtcbiAgICAgICAgYWRkRmllbGRTY2hlbWEoc3ViRmllbGQsIHNjaGVtYSwgY29uZmlnLCBidWlsZFNjaGVtYU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBjb2xsYXBzaWJsZTogKGZpZWxkOiBDb2xsYXBzaWJsZUZpZWxkLCBzY2hlbWE6IFNjaGVtYSwgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsIGJ1aWxkU2NoZW1hT3B0aW9uczogQnVpbGRTY2hlbWFPcHRpb25zKTogdm9pZCA9PiB7XG4gICAgZmllbGQuZmllbGRzLmZvckVhY2goKHN1YkZpZWxkOiBGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgYWRkRmllbGRTY2hlbWE6IEZpZWxkU2NoZW1hR2VuZXJhdG9yID0gZmllbGRUb1NjaGVtYU1hcFtzdWJGaWVsZC50eXBlXTtcblxuICAgICAgaWYgKGFkZEZpZWxkU2NoZW1hKSB7XG4gICAgICAgIGFkZEZpZWxkU2NoZW1hKHN1YkZpZWxkLCBzY2hlbWEsIGNvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdGFiczogKGZpZWxkOiBUYWJzRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBmaWVsZC50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKHRhYkhhc05hbWUodGFiKSkge1xuICAgICAgICBjb25zdCBiYXNlU2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6IGJ1aWxkU2NoZW1hKFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgdGFiLmZpZWxkcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIF9pZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1pbmltaXplOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGlzYWJsZVVuaXF1ZTogYnVpbGRTY2hlbWFPcHRpb25zLmRpc2FibGVVbmlxdWUsXG4gICAgICAgICAgICAgIGRyYWZ0c0VuYWJsZWQ6IGJ1aWxkU2NoZW1hT3B0aW9ucy5kcmFmdHNFbmFibGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApLFxuICAgICAgICB9O1xuXG4gICAgICAgIHNjaGVtYS5hZGQoe1xuICAgICAgICAgIFt0YWIubmFtZV06IGxvY2FsaXplU2NoZW1hKHRhYiwgYmFzZVNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKHRhYiBhcyBVbm5hbWVkVGFiKS5maWVsZHMuZm9yRWFjaCgoc3ViRmllbGQ6IEZpZWxkKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWRkRmllbGRTY2hlbWE6IEZpZWxkU2NoZW1hR2VuZXJhdG9yID0gZmllbGRUb1NjaGVtYU1hcFtzdWJGaWVsZC50eXBlXTtcblxuICAgICAgICAgIGlmIChhZGRGaWVsZFNjaGVtYSkge1xuICAgICAgICAgICAgYWRkRmllbGRTY2hlbWEoc3ViRmllbGQsIHNjaGVtYSwgY29uZmlnLCBidWlsZFNjaGVtYU9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGFycmF5OiAoZmllbGQ6IEFycmF5RmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0ge1xuICAgICAgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIHR5cGU6IFtidWlsZFNjaGVtYShcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBmaWVsZC5maWVsZHMsXG4gICAgICAgIHtcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBfaWQ6IGZhbHNlLFxuICAgICAgICAgICAgaWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWluaW1pemU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWxsb3dJREZpZWxkOiB0cnVlLFxuICAgICAgICAgIGRpc2FibGVVbmlxdWU6IGJ1aWxkU2NoZW1hT3B0aW9ucy5kaXNhYmxlVW5pcXVlLFxuICAgICAgICAgIGRyYWZ0c0VuYWJsZWQ6IGJ1aWxkU2NoZW1hT3B0aW9ucy5kcmFmdHNFbmFibGVkLFxuICAgICAgICB9LFxuICAgICAgKV0sXG4gICAgfTtcblxuICAgIHNjaGVtYS5hZGQoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBsb2NhbGl6ZVNjaGVtYShmaWVsZCwgYmFzZVNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgfSk7XG4gIH0sXG4gIGdyb3VwOiAoZmllbGQ6IEdyb3VwRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmb3JtYXR0ZWRCYXNlU2NoZW1hID0gZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKTtcblxuICAgIC8vIGNhcnJ5IGluZGV4U29ydGFibGVGaWVsZHMgdGhyb3VnaCB0byB2ZXJzaW9ucyBpZiBkcmFmdHMgZW5hYmxlZFxuICAgIGNvbnN0IGluZGV4U29ydGFibGVGaWVsZHMgPSAoYnVpbGRTY2hlbWFPcHRpb25zLmluZGV4U29ydGFibGVGaWVsZHMgJiYgZmllbGQubmFtZSA9PT0gJ3ZlcnNpb24nICYmIGJ1aWxkU2NoZW1hT3B0aW9ucy5kcmFmdHNFbmFibGVkKTtcblxuICAgIGNvbnN0IGJhc2VTY2hlbWEgPSB7XG4gICAgICAuLi5mb3JtYXR0ZWRCYXNlU2NoZW1hLFxuICAgICAgdHlwZTogYnVpbGRTY2hlbWEoXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgZmllbGQuZmllbGRzLFxuICAgICAgICB7XG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgX2lkOiBmYWxzZSxcbiAgICAgICAgICAgIGlkOiBmYWxzZSxcbiAgICAgICAgICAgIG1pbmltaXplOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluZGV4U29ydGFibGVGaWVsZHMsXG4gICAgICAgICAgZGlzYWJsZVVuaXF1ZTogYnVpbGRTY2hlbWFPcHRpb25zLmRpc2FibGVVbmlxdWUsXG4gICAgICAgICAgZHJhZnRzRW5hYmxlZDogYnVpbGRTY2hlbWFPcHRpb25zLmRyYWZ0c0VuYWJsZWQsXG4gICAgICAgIH0sXG4gICAgICApLFxuICAgIH07XG5cbiAgICBzY2hlbWEuYWRkKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbG9jYWxpemVTY2hlbWEoZmllbGQsIGJhc2VTY2hlbWEsIGNvbmZpZy5sb2NhbGl6YXRpb24pLFxuICAgIH0pO1xuICB9LFxuICBzZWxlY3Q6IChmaWVsZDogU2VsZWN0RmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBiYXNlU2NoZW1hID0ge1xuICAgICAgLi4uZm9ybWF0QmFzZVNjaGVtYShmaWVsZCwgYnVpbGRTY2hlbWFPcHRpb25zKSxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGVudW06IGZpZWxkLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnKSByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfSksXG4gICAgfTtcblxuICAgIGlmIChidWlsZFNjaGVtYU9wdGlvbnMuZHJhZnRzRW5hYmxlZCB8fCAhZmllbGQucmVxdWlyZWQpIHtcbiAgICAgIGJhc2VTY2hlbWEuZW51bS5wdXNoKG51bGwpO1xuICAgIH1cblxuICAgIHNjaGVtYS5hZGQoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBsb2NhbGl6ZVNjaGVtYShcbiAgICAgICAgZmllbGQsXG4gICAgICAgIGZpZWxkLmhhc01hbnkgPyBbYmFzZVNjaGVtYV0gOiBiYXNlU2NoZW1hLFxuICAgICAgICBjb25maWcubG9jYWxpemF0aW9uLFxuICAgICAgKSxcbiAgICB9KTtcbiAgfSxcbiAgYmxvY2tzOiAoZmllbGQ6IEJsb2NrRmllbGQsIHNjaGVtYTogU2NoZW1hLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zOiBCdWlsZFNjaGVtYU9wdGlvbnMpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHtcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgIHR5cGU6IFtuZXcgU2NoZW1hKHt9LCB7IF9pZDogZmFsc2UsIGRpc2NyaW1pbmF0b3JLZXk6ICdibG9ja1R5cGUnIH0pXSxcbiAgICB9O1xuXG4gICAgc2NoZW1hLmFkZCh7XG4gICAgICBbZmllbGQubmFtZV06IGxvY2FsaXplU2NoZW1hKGZpZWxkLCBmaWVsZFNjaGVtYSwgY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgfSk7XG5cbiAgICBmaWVsZC5ibG9ja3MuZm9yRWFjaCgoYmxvY2tJdGVtOiBCbG9jaykgPT4ge1xuICAgICAgY29uc3QgYmxvY2tTY2hlbWEgPSBuZXcgU2NoZW1hKHt9LCB7IF9pZDogZmFsc2UsIGlkOiBmYWxzZSB9KTtcblxuICAgICAgYmxvY2tJdGVtLmZpZWxkcy5mb3JFYWNoKChibG9ja0ZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZEZpZWxkU2NoZW1hOiBGaWVsZFNjaGVtYUdlbmVyYXRvciA9IGZpZWxkVG9TY2hlbWFNYXBbYmxvY2tGaWVsZC50eXBlXTtcbiAgICAgICAgaWYgKGFkZEZpZWxkU2NoZW1hKSB7XG4gICAgICAgICAgYWRkRmllbGRTY2hlbWEoYmxvY2tGaWVsZCwgYmxvY2tTY2hlbWEsIGNvbmZpZywgYnVpbGRTY2hlbWFPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaWVsZC5sb2NhbGl6ZWQgJiYgY29uZmlnLmxvY2FsaXphdGlvbikge1xuICAgICAgICBjb25maWcubG9jYWxpemF0aW9uLmxvY2FsZUNvZGVzLmZvckVhY2goKGxvY2FsZUNvZGUpID0+IHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBQb3NzaWJsZSBpbmNvcnJlY3QgdHlwaW5nIGluIG1vbmdvb3NlIHR5cGVzLCB0aGlzIHdvcmtzXG4gICAgICAgICAgc2NoZW1hLnBhdGgoYCR7ZmllbGQubmFtZX0uJHtsb2NhbGVDb2RlfWApLmRpc2NyaW1pbmF0b3IoYmxvY2tJdGVtLnNsdWcsIGJsb2NrU2NoZW1hKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgUG9zc2libGUgaW5jb3JyZWN0IHR5cGluZyBpbiBtb25nb29zZSB0eXBlcywgdGhpcyB3b3Jrc1xuICAgICAgICBzY2hlbWEucGF0aChmaWVsZC5uYW1lKS5kaXNjcmltaW5hdG9yKGJsb2NrSXRlbS5zbHVnLCBibG9ja1NjaGVtYSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZFNjaGVtYTtcbiJdLCJuYW1lcyI6WyJTY2hlbWEiLCJmaWVsZEFmZmVjdHNEYXRhIiwiZmllbGRJc0xvY2FsaXplZCIsImZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkiLCJ0YWJIYXNOYW1lIiwiZm9ybWF0QmFzZVNjaGVtYSIsImZpZWxkIiwiYnVpbGRTY2hlbWFPcHRpb25zIiwiZGlzYWJsZVVuaXF1ZSIsImRyYWZ0c0VuYWJsZWQiLCJpbmRleFNvcnRhYmxlRmllbGRzIiwic2NoZW1hIiwidW5pcXVlIiwicmVxdWlyZWQiLCJpbmRleCIsImxvY2FsaXplZCIsInNwYXJzZSIsImhpZGRlbiIsImxvY2FsaXplU2NoZW1hIiwiZW50aXR5IiwibG9jYWxpemF0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwibG9jYWxlcyIsInR5cGUiLCJsb2NhbGVDb2RlcyIsInJlZHVjZSIsImxvY2FsZVNjaGVtYSIsImxvY2FsZSIsIl9pZCIsImJ1aWxkU2NoZW1hIiwiY29uZmlnIiwiY29uZmlnRmllbGRzIiwiYWxsb3dJREZpZWxkIiwib3B0aW9ucyIsImZpZWxkcyIsInNjaGVtYUZpZWxkcyIsImlkRmllbGQiLCJmaW5kIiwibmFtZSIsIk51bWJlciIsIlN0cmluZyIsImZpbHRlciIsImZvckVhY2giLCJhZGRGaWVsZFNjaGVtYSIsImZpZWxkVG9TY2hlbWFNYXAiLCJudW1iZXIiLCJiYXNlU2NoZW1hIiwiaGFzTWFueSIsImFkZCIsInRleHQiLCJlbWFpbCIsInRleHRhcmVhIiwicmljaFRleHQiLCJUeXBlcyIsIk1peGVkIiwiY29kZSIsImpzb24iLCJwb2ludCIsImVudW0iLCJjb29yZGluYXRlcyIsImRlZmF1bHQiLCJkZWZhdWx0VmFsdWUiLCJ1bmRlZmluZWQiLCJpbmRleE9wdGlvbnMiLCJyYWRpbyIsIm1hcCIsIm9wdGlvbiIsInZhbHVlIiwiY2hlY2tib3giLCJCb29sZWFuIiwiZGF0ZSIsIkRhdGUiLCJ1cGxvYWQiLCJyZWYiLCJyZWxhdGlvblRvIiwicmVsYXRpb25zaGlwIiwiaGFzTWFueVJlbGF0aW9ucyIsInNjaGVtYVRvUmV0dXJuIiwicmVmUGF0aCIsInJvdyIsInN1YkZpZWxkIiwiY29sbGFwc2libGUiLCJ0YWJzIiwidGFiIiwiaWQiLCJtaW5pbWl6ZSIsImFycmF5IiwiZ3JvdXAiLCJmb3JtYXR0ZWRCYXNlU2NoZW1hIiwic2VsZWN0IiwicHVzaCIsImJsb2NrcyIsImZpZWxkU2NoZW1hIiwiZGlzY3JpbWluYXRvcktleSIsImJsb2NrSXRlbSIsImJsb2NrU2NoZW1hIiwiYmxvY2tGaWVsZCIsImxvY2FsZUNvZGUiLCJwYXRoIiwiZGlzY3JpbWluYXRvciIsInNsdWciXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCxHQUNwRCx5Q0FBeUMsR0FDekMsMERBQTBELEdBQzFELHVDQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN2QyxTQUF1QkEsTUFBTSxRQUEwQyxXQUFXO0FBMkJsRixTQUVFQyxnQkFBZ0IsRUFDaEJDLGdCQUFnQixFQUNoQkMseUJBQXlCLEVBR3pCQyxVQUFVLFFBRUwsZ0JBQWU7QUFZdEIsSUFBTUMsbUJBQW1CLFNBQUNDLE9BQTJCQztJQUNuRCxJQUFRQyxnQkFBc0RELG1CQUF0REMsZUFBZUMsZ0JBQXVDRixtQkFBdkNFLGVBQWVDLHNCQUF3QkgsbUJBQXhCRztJQUN0QyxJQUFNQyxTQUFxQztRQUN6Q0MsUUFBUSxBQUFDLENBQUNKLGlCQUFpQkYsTUFBTU0sTUFBTSxJQUFLO1FBQzVDQyxVQUFVO1FBQ1ZDLE9BQU9SLE1BQU1RLEtBQUssSUFBSyxDQUFDTixpQkFBaUJGLE1BQU1NLE1BQU0sSUFBS0YsdUJBQXVCO0lBQ25GO0lBRUEsSUFBS0MsT0FBT0MsTUFBTSxJQUFLTixDQUFBQSxNQUFNUyxTQUFTLElBQUlOLGFB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