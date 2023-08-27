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
    baseAdminComponentFields: function() {
        return baseAdminComponentFields;
    },
    baseAdminFields: function() {
        return baseAdminFields;
    },
    baseField: function() {
        return baseField;
    },
    idField: function() {
        return idField;
    },
    text: function() {
        return text;
    },
    number: function() {
        return number;
    },
    textarea: function() {
        return textarea;
    },
    email: function() {
        return email;
    },
    code: function() {
        return code;
    },
    json: function() {
        return json;
    },
    select: function() {
        return select;
    },
    radio: function() {
        return radio;
    },
    row: function() {
        return row;
    },
    collapsible: function() {
        return collapsible;
    },
    tabs: function() {
        return tabs;
    },
    group: function() {
        return group;
    },
    array: function() {
        return array;
    },
    upload: function() {
        return upload;
    },
    checkbox: function() {
        return checkbox;
    },
    point: function() {
        return point;
    },
    relationship: function() {
        return relationship;
    },
    blocks: function() {
        return blocks;
    },
    richText: function() {
        return richText;
    },
    date: function() {
        return date;
    },
    ui: function() {
        return ui;
    },
    default: function() {
        return _default;
    }
});
var _joi = /*#__PURE__*/ _interop_require_default(require("joi"));
var _componentSchema = require("../../utilities/componentSchema");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseAdminComponentFields = _joi.default.object().keys({
    Cell: _componentSchema.componentSchema,
    Field: _componentSchema.componentSchema,
    Filter: _componentSchema.componentSchema
}).default({});
var baseAdminFields = _joi.default.object().keys({
    description: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
        _joi.default.string()
    ]), _componentSchema.componentSchema),
    position: _joi.default.string().valid("sidebar"),
    width: _joi.default.string(),
    style: _joi.default.object().unknown(),
    className: _joi.default.string(),
    readOnly: _joi.default.boolean().default(false),
    initCollapsed: _joi.default.boolean().default(false),
    hidden: _joi.default.boolean().default(false),
    disabled: _joi.default.boolean().default(false),
    disableBulkEdit: _joi.default.boolean().default(false),
    condition: _joi.default.func(),
    components: baseAdminComponentFields
});
var baseField = _joi.default.object().keys({
    label: _joi.default.alternatives().try(_joi.default.object().pattern(_joi.default.string(), [
        _joi.default.string()
    ]), _joi.default.string(), _joi.default.valid(false)),
    required: _joi.default.boolean().default(false),
    saveToJWT: _joi.default.alternatives().try(_joi.default.boolean(), _joi.default.string()).default(false),
    unique: _joi.default.boolean().default(false),
    localized: _joi.default.boolean().default(false),
    index: _joi.default.boolean().default(false),
    hidden: _joi.default.boolean().default(false),
    validate: _joi.default.func(),
    access: _joi.default.object().keys({
        create: _joi.default.func(),
        read: _joi.default.func(),
        update: _joi.default.func()
    }),
    hooks: _joi.default.object().keys({
        beforeValidate: _joi.default.array().items(_joi.default.func()).default([]),
        beforeChange: _joi.default.array().items(_joi.default.func()).default([]),
        afterChange: _joi.default.array().items(_joi.default.func()).default([]),
        afterRead: _joi.default.array().items(_joi.default.func()).default([])
    }).default(),
    admin: baseAdminFields.default(),
    custom: _joi.default.object().pattern(_joi.default.string(), _joi.default.any())
}).default();
var idField = baseField.keys({
    name: _joi.default.string().valid("id"),
    type: _joi.default.string().valid("text", "number"),
    required: _joi.default.not(false, 0).default(true),
    localized: _joi.default.invalid(true)
});
var text = baseField.keys({
    type: _joi.default.string().valid("text").required(),
    name: _joi.default.string().required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.string(), _joi.default.func()),
    minLength: _joi.default.number(),
    maxLength: _joi.default.number(),
    admin: baseAdminFields.keys({
        placeholder: _joi.default.alternatives().try(_joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ]), _joi.default.string()),
        autoComplete: _joi.default.string(),
        rtl: _joi.default.boolean()
    })
});
var number = baseField.keys({
    type: _joi.default.string().valid("number").required(),
    name: _joi.default.string().required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.number(), _joi.default.func()),
    min: _joi.default.number(),
    max: _joi.default.number(),
    admin: baseAdminFields.keys({
        placeholder: _joi.default.string(),
        autoComplete: _joi.default.string(),
        step: _joi.default.number()
    }),
    hasMany: _joi.default.boolean().default(false),
    minRows: _joi.default.number().when("hasMany", {
        is: _joi.default.not(true),
        then: _joi.default.forbidden()
    }),
    maxRows: _joi.default.number().when("hasMany", {
        is: _joi.default.not(true),
        then: _joi.default.forbidden()
    })
});
var textarea = baseField.keys({
    type: _joi.default.string().valid("textarea").required(),
    name: _joi.default.string().required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.string(), _joi.default.func()),
    minLength: _joi.default.number(),
    maxLength: _joi.default.number(),
    admin: baseAdminFields.keys({
        placeholder: _joi.default.string(),
        rows: _joi.default.number(),
        rtl: _joi.default.boolean()
    })
});
var email = baseField.keys({
    type: _joi.default.string().valid("email").required(),
    name: _joi.default.string().required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.string(), _joi.default.func()),
    minLength: _joi.default.number(),
    maxLength: _joi.default.number(),
    admin: baseAdminFields.keys({
        placeholder: _joi.default.string(),
        autoComplete: _joi.default.string()
    })
});
var code = baseField.keys({
    type: _joi.default.string().valid("code").required(),
    name: _joi.default.string().required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.string(), _joi.default.func()),
    admin: baseAdminFields.keys({
        language: _joi.default.string(),
        editorOptions: _joi.default.object().unknown()
    })
});
var json = baseField.keys({
    type: _joi.default.string().valid("json").required(),
    name: _joi.default.string().required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.array(), _joi.default.object())
});
var select = baseField.keys({
    type: _joi.default.string().valid("select").required(),
    name: _joi.default.string().required(),
    options: _joi.default.array().min(1).items(_joi.default.alternatives().try(_joi.default.string(), _joi.default.object({
        value: _joi.default.string().required().allow(""),
        label: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ]))
    }))).required(),
    hasMany: _joi.default.boolean().default(false),
    defaultValue: _joi.default.alternatives().try(_joi.default.string().allow(""), _joi.default.array().items(_joi.default.string().allow("")), _joi.default.func()),
    admin: baseAdminFields.keys({
        isClearable: _joi.default.boolean().default(false),
        isSortable: _joi.default.boolean().default(false)
    })
});
var radio = baseField.keys({
    type: _joi.default.string().valid("radio").required(),
    name: _joi.default.string().required(),
    options: _joi.default.array().min(1).items(_joi.default.alternatives().try(_joi.default.string(), _joi.default.object({
        value: _joi.default.string().required().allow(""),
        label: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ])).required()
    }))).required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.string().allow(""), _joi.default.func()),
    admin: baseAdminFields.keys({
        layout: _joi.default.string().valid("vertical", "horizontal")
    })
});
var row = baseField.keys({
    type: _joi.default.string().valid("row").required(),
    fields: _joi.default.array().items(_joi.default.link("#field")),
    admin: baseAdminFields.default()
});
var collapsible = baseField.keys({
    label: _joi.default.alternatives().try(_joi.default.string(), _componentSchema.componentSchema),
    type: _joi.default.string().valid("collapsible").required(),
    fields: _joi.default.array().items(_joi.default.link("#field")),
    admin: baseAdminFields.default()
});
var tab = baseField.keys({
    name: _joi.default.string().when("localized", {
        is: _joi.default.exist(),
        then: _joi.default.required()
    }),
    localized: _joi.default.boolean(),
    interfaceName: _joi.default.string().when("name", {
        not: _joi.default.exist(),
        then: _joi.default.forbidden()
    }),
    saveToJWT: _joi.default.alternatives().try(_joi.default.boolean(), _joi.default.string()),
    label: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
        _joi.default.string()
    ])).when("name", {
        is: _joi.default.not(),
        then: _joi.default.required()
    }),
    fields: _joi.default.array().items(_joi.default.link("#field")).required(),
    description: _joi.default.alternatives().try(_joi.default.string(), _componentSchema.componentSchema)
});
var tabs = baseField.keys({
    type: _joi.default.string().valid("tabs").required(),
    fields: _joi.default.forbidden(),
    localized: _joi.default.forbidden(),
    tabs: _joi.default.array().items(tab).required(),
    admin: baseAdminFields.keys({
        description: _joi.default.forbidden()
    })
});
var group = baseField.keys({
    type: _joi.default.string().valid("group").required(),
    name: _joi.default.string().required(),
    fields: _joi.default.array().items(_joi.default.link("#field")),
    interfaceName: _joi.default.string(),
    defaultValue: _joi.default.alternatives().try(_joi.default.object(), _joi.default.func()),
    admin: baseAdminFields.keys({
        hideGutter: _joi.default.boolean().default(true)
    })
});
var array = baseField.keys({
    type: _joi.default.string().valid("array").required(),
    name: _joi.default.string().required(),
    minRows: _joi.default.number(),
    maxRows: _joi.default.number(),
    fields: _joi.default.array().items(_joi.default.link("#field")).required(),
    labels: _joi.default.object({
        singular: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ])),
        plural: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ]))
    }),
    defaultValue: _joi.default.alternatives().try(_joi.default.array().items(_joi.default.object()), _joi.default.func()),
    admin: baseAdminFields.keys({
        components: baseAdminComponentFields.keys({
            RowLabel: _componentSchema.componentSchema
        }).default({})
    }).default({}),
    interfaceName: _joi.default.string()
});
var upload = baseField.keys({
    type: _joi.default.string().valid("upload").required(),
    relationTo: _joi.default.string().required(),
    name: _joi.default.string().required(),
    maxDepth: _joi.default.number(),
    filterOptions: _joi.default.alternatives().try(_joi.default.object(), _joi.default.func()),
    defaultValue: _joi.default.alternatives().try(_joi.default.object(), _joi.default.func())
});
var checkbox = baseField.keys({
    type: _joi.default.string().valid("checkbox").required(),
    name: _joi.default.string().required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.boolean(), _joi.default.func())
});
var point = baseField.keys({
    type: _joi.default.string().valid("point").required(),
    name: _joi.default.string().required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.array().items(_joi.default.number()).max(2).min(2), _joi.default.func())
});
var relationship = baseField.keys({
    type: _joi.default.string().valid("relationship").required(),
    hasMany: _joi.default.boolean().default(false),
    relationTo: _joi.default.alternatives().try(_joi.default.string().required(), _joi.default.array().items(_joi.default.string())),
    name: _joi.default.string().required(),
    maxDepth: _joi.default.number(),
    filterOptions: _joi.default.alternatives().try(_joi.default.object(), _joi.default.func()),
    defaultValue: _joi.default.alternatives().try(_joi.default.func()),
    admin: baseAdminFields.keys({
        isSortable: _joi.default.boolean().default(false),
        allowCreate: _joi.default.boolean().default(true)
    }),
    min: _joi.default.number().when("hasMany", {
        is: _joi.default.not(true),
        then: _joi.default.forbidden()
    }).warning("deprecated", {
        message: "Use minRows instead."
    }),
    max: _joi.default.number().when("hasMany", {
        is: _joi.default.not(true),
        then: _joi.default.forbidden()
    }).warning("deprecated", {
        message: "Use maxRows instead."
    }),
    minRows: _joi.default.number().when("hasMany", {
        is: _joi.default.not(true),
        then: _joi.default.forbidden()
    }),
    maxRows: _joi.default.number().when("hasMany", {
        is: _joi.default.not(true),
        then: _joi.default.forbidden()
    })
});
var blocks = baseField.keys({
    type: _joi.default.string().valid("blocks").required(),
    minRows: _joi.default.number(),
    maxRows: _joi.default.number(),
    name: _joi.default.string().required(),
    labels: _joi.default.object({
        singular: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ])),
        plural: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ]))
    }),
    blocks: _joi.default.array().items(_joi.default.object({
        slug: _joi.default.string().required(),
        imageURL: _joi.default.string(),
        imageAltText: _joi.default.string(),
        interfaceName: _joi.default.string(),
        graphQL: _joi.default.object().keys({
            singularName: _joi.default.string()
        }),
        labels: _joi.default.object({
            singular: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
                _joi.default.string()
            ])),
            plural: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
                _joi.default.string()
            ]))
        }),
        fields: _joi.default.array().items(_joi.default.link("#field"))
    })).required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.array().items(_joi.default.object()), _joi.default.func())
});
var richText = baseField.keys({
    type: _joi.default.string().valid("richText").required(),
    name: _joi.default.string().required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.array().items(_joi.default.object()), _joi.default.func()),
    admin: baseAdminFields.keys({
        placeholder: _joi.default.string(),
        hideGutter: _joi.default.boolean().default(true),
        elements: _joi.default.array().items(_joi.default.alternatives().try(_joi.default.string(), _joi.default.object({
            name: _joi.default.string().required(),
            Button: _componentSchema.componentSchema,
            Element: _componentSchema.componentSchema,
            plugins: _joi.default.array().items(_componentSchema.componentSchema)
        }))),
        leaves: _joi.default.array().items(_joi.default.alternatives().try(_joi.default.string(), _joi.default.object({
            name: _joi.default.string().required(),
            Button: _componentSchema.componentSchema,
            Leaf: _componentSchema.componentSchema,
            plugins: _joi.default.array().items(_componentSchema.componentSchema)
        }))),
        upload: _joi.default.object({
            collections: _joi.default.object().pattern(_joi.default.string(), _joi.default.object().keys({
                fields: _joi.default.array().items(_joi.default.link("#field"))
            }))
        }),
        link: _joi.default.object({
            fields: _joi.default.alternatives(_joi.default.array().items(_joi.default.link("#field")), _joi.default.func())
        }),
        rtl: _joi.default.boolean()
    })
});
var date = baseField.keys({
    type: _joi.default.string().valid("date").required(),
    name: _joi.default.string().required(),
    defaultValue: _joi.default.alternatives().try(_joi.default.string(), _joi.default.func()),
    admin: baseAdminFields.keys({
        placeholder: _joi.default.string(),
        date: _joi.default.object({
            displayFormat: _joi.default.string(),
            pickerAppearance: _joi.default.string(),
            minDate: _joi.default.date(),
            maxDate: _joi.default.date(),
            minTime: _joi.default.date(),
            maxTime: _joi.default.date(),
            timeIntervals: _joi.default.number(),
            timeFormat: _joi.default.string(),
            monthsToShow: _joi.default.number()
        })
    })
});
var ui = _joi.default.object().keys({
    name: _joi.default.string().required(),
    label: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
        _joi.default.string()
    ])),
    type: _joi.default.string().valid("ui").required(),
    admin: _joi.default.object().keys({
        position: _joi.default.string().valid("sidebar"),
        width: _joi.default.string(),
        condition: _joi.default.func(),
        components: _joi.default.object().keys({
            Cell: _componentSchema.componentSchema,
            Field: _componentSchema.componentSchema
        }).default({})
    }).default(),
    custom: _joi.default.object().pattern(_joi.default.string(), _joi.default.any())
});
var fieldSchema = _joi.default.alternatives().try(text, number, textarea, email, code, json, select, group, array, row, collapsible, tabs, radio, relationship, checkbox, upload, richText, blocks, date, point, ui).id("field");
var _default = fieldSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvY29uZmlnL3NjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgam9pIGZyb20gJ2pvaSc7XG5pbXBvcnQgeyBjb21wb25lbnRTY2hlbWEgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tcG9uZW50U2NoZW1hJztcblxuZXhwb3J0IGNvbnN0IGJhc2VBZG1pbkNvbXBvbmVudEZpZWxkcyA9IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgQ2VsbDogY29tcG9uZW50U2NoZW1hLFxuICBGaWVsZDogY29tcG9uZW50U2NoZW1hLFxuICBGaWx0ZXI6IGNvbXBvbmVudFNjaGVtYSxcbn0pLmRlZmF1bHQoe30pO1xuXG5leHBvcnQgY29uc3QgYmFzZUFkbWluRmllbGRzID0gam9pLm9iamVjdCgpLmtleXMoe1xuICBkZXNjcmlwdGlvbjogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuc3RyaW5nKCksXG4gICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgY29tcG9uZW50U2NoZW1hLFxuICApLFxuICBwb3NpdGlvbjogam9pLnN0cmluZygpLnZhbGlkKCdzaWRlYmFyJyksXG4gIHdpZHRoOiBqb2kuc3RyaW5nKCksXG4gIHN0eWxlOiBqb2kub2JqZWN0KCkudW5rbm93bigpLFxuICBjbGFzc05hbWU6IGpvaS5zdHJpbmcoKSxcbiAgcmVhZE9ubHk6IGpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gIGluaXRDb2xsYXBzZWQ6IGpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gIGhpZGRlbjogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgZGlzYWJsZWQ6IGpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gIGRpc2FibGVCdWxrRWRpdDogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgY29uZGl0aW9uOiBqb2kuZnVuYygpLFxuICBjb21wb25lbnRzOiBiYXNlQWRtaW5Db21wb25lbnRGaWVsZHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGJhc2VGaWVsZCA9IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgam9pLnN0cmluZygpLFxuICAgIGpvaS52YWxpZChmYWxzZSksXG4gICksXG4gIHJlcXVpcmVkOiBqb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICBzYXZlVG9KV1Q6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLmJvb2xlYW4oKSxcbiAgICBqb2kuc3RyaW5nKCksXG4gICkuZGVmYXVsdChmYWxzZSksXG4gIHVuaXF1ZTogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgbG9jYWxpemVkOiBqb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICBpbmRleDogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgaGlkZGVuOiBqb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICB2YWxpZGF0ZTogam9pLmZ1bmMoKSxcbiAgYWNjZXNzOiBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgY3JlYXRlOiBqb2kuZnVuYygpLFxuICAgIHJlYWQ6IGpvaS5mdW5jKCksXG4gICAgdXBkYXRlOiBqb2kuZnVuYygpLFxuICB9KSxcbiAgaG9va3M6IGpvaS5vYmplY3QoKVxuICAgIC5rZXlzKHtcbiAgICAgIGJlZm9yZVZhbGlkYXRlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKS5kZWZhdWx0KFtdKSxcbiAgICAgIGJlZm9yZUNoYW5nZTogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSkuZGVmYXVsdChbXSksXG4gICAgICBhZnRlckNoYW5nZTogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSkuZGVmYXVsdChbXSksXG4gICAgICBhZnRlclJlYWQ6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLmRlZmF1bHQoW10pLFxuICAgIH0pLmRlZmF1bHQoKSxcbiAgYWRtaW46IGJhc2VBZG1pbkZpZWxkcy5kZWZhdWx0KCksXG4gIGN1c3RvbTogam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBqb2kuYW55KCkpLFxufSkuZGVmYXVsdCgpO1xuXG5leHBvcnQgY29uc3QgaWRGaWVsZCA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgbmFtZTogam9pLnN0cmluZygpLnZhbGlkKCdpZCcpLFxuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3RleHQnLCAnbnVtYmVyJyksXG4gIHJlcXVpcmVkOiBqb2kubm90KGZhbHNlLCAwKS5kZWZhdWx0KHRydWUpLFxuICBsb2NhbGl6ZWQ6IGpvaS5pbnZhbGlkKHRydWUpLFxufSk7XG5cbmV4cG9ydCBjb25zdCB0ZXh0ID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3RleHQnKS5yZXF1aXJlZCgpLFxuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgZGVmYXVsdFZhbHVlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5zdHJpbmcoKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBtaW5MZW5ndGg6IGpvaS5udW1iZXIoKSxcbiAgbWF4TGVuZ3RoOiBqb2kubnVtYmVyKCksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgcGxhY2Vob2xkZXI6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIFtqb2kuc3RyaW5nKCldKSxcbiAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICApLFxuICAgIGF1dG9Db21wbGV0ZTogam9pLnN0cmluZygpLFxuICAgIHJ0bDogam9pLmJvb2xlYW4oKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IG51bWJlciA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCdudW1iZXInKS5yZXF1aXJlZCgpLFxuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgZGVmYXVsdFZhbHVlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5udW1iZXIoKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBtaW46IGpvaS5udW1iZXIoKSxcbiAgbWF4OiBqb2kubnVtYmVyKCksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgcGxhY2Vob2xkZXI6IGpvaS5zdHJpbmcoKSxcbiAgICBhdXRvQ29tcGxldGU6IGpvaS5zdHJpbmcoKSxcbiAgICBzdGVwOiBqb2kubnVtYmVyKCksXG4gIH0pLFxuICBoYXNNYW55OiBqb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICBtaW5Sb3dzOiBqb2kubnVtYmVyKClcbiAgICAud2hlbignaGFzTWFueScsIHsgaXM6IGpvaS5ub3QodHJ1ZSksIHRoZW46IGpvaS5mb3JiaWRkZW4oKSB9KSxcbiAgbWF4Um93czogam9pLm51bWJlcigpXG4gICAgLndoZW4oJ2hhc01hbnknLCB7IGlzOiBqb2kubm90KHRydWUpLCB0aGVuOiBqb2kuZm9yYmlkZGVuKCkgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHRleHRhcmVhID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3RleHRhcmVhJykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuc3RyaW5nKCksXG4gICAgam9pLmZ1bmMoKSxcbiAgKSxcbiAgbWluTGVuZ3RoOiBqb2kubnVtYmVyKCksXG4gIG1heExlbmd0aDogam9pLm51bWJlcigpLFxuICBhZG1pbjogYmFzZUFkbWluRmllbGRzLmtleXMoe1xuICAgIHBsYWNlaG9sZGVyOiBqb2kuc3RyaW5nKCksXG4gICAgcm93czogam9pLm51bWJlcigpLFxuICAgIHJ0bDogam9pLmJvb2xlYW4oKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGVtYWlsID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ2VtYWlsJykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuc3RyaW5nKCksXG4gICAgam9pLmZ1bmMoKSxcbiAgKSxcbiAgbWluTGVuZ3RoOiBqb2kubnVtYmVyKCksXG4gIG1heExlbmd0aDogam9pLm51bWJlcigpLFxuICBhZG1pbjogYmFzZUFkbWluRmllbGRzLmtleXMoe1xuICAgIHBsYWNlaG9sZGVyOiBqb2kuc3RyaW5nKCksXG4gICAgYXV0b0NvbXBsZXRlOiBqb2kuc3RyaW5nKCksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb2RlID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ2NvZGUnKS5yZXF1aXJlZCgpLFxuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgZGVmYXVsdFZhbHVlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5zdHJpbmcoKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBhZG1pbjogYmFzZUFkbWluRmllbGRzLmtleXMoe1xuICAgIGxhbmd1YWdlOiBqb2kuc3RyaW5nKCksXG4gICAgZWRpdG9yT3B0aW9uczogam9pLm9iamVjdCgpLnVua25vd24oKSwgLy8gRWRpdG9yWydvcHRpb25zJ10gQG1vbmFjby1lZGl0b3IvcmVhY3RcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGpzb24gPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgnanNvbicpLnJlcXVpcmVkKCksXG4gIG5hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLmFycmF5KCksXG4gICAgam9pLm9iamVjdCgpLFxuICApLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3QgPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgnc2VsZWN0JykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIG9wdGlvbnM6IGpvaS5hcnJheSgpLm1pbigxKS5pdGVtcyhcbiAgICBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgam9pLnN0cmluZygpLFxuICAgICAgam9pLm9iamVjdCh7XG4gICAgICAgIHZhbHVlOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5hbGxvdygnJyksXG4gICAgICAgIGxhYmVsOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgICAgICBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIFtqb2kuc3RyaW5nKCldKSxcbiAgICAgICAgKSxcbiAgICAgIH0pLFxuICAgICksXG4gICkucmVxdWlyZWQoKSxcbiAgaGFzTWFueTogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgZGVmYXVsdFZhbHVlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5zdHJpbmcoKS5hbGxvdygnJyksXG4gICAgam9pLmFycmF5KCkuaXRlbXMoam9pLnN0cmluZygpLmFsbG93KCcnKSksXG4gICAgam9pLmZ1bmMoKSxcbiAgKSxcbiAgYWRtaW46IGJhc2VBZG1pbkZpZWxkcy5rZXlzKHtcbiAgICBpc0NsZWFyYWJsZTogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgICBpc1NvcnRhYmxlOiBqb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcmFkaW8gPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgncmFkaW8nKS5yZXF1aXJlZCgpLFxuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgb3B0aW9uczogam9pLmFycmF5KCkubWluKDEpLml0ZW1zKFxuICAgIGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuc3RyaW5nKCksXG4gICAgICBqb2kub2JqZWN0KHtcbiAgICAgICAgdmFsdWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmFsbG93KCcnKSxcbiAgICAgICAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgICAgam9pLnN0cmluZygpLFxuICAgICAgICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICAgICAgICApLnJlcXVpcmVkKCksXG4gICAgICB9KSxcbiAgICApLFxuICApLnJlcXVpcmVkKCksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuc3RyaW5nKCkuYWxsb3coJycpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgbGF5b3V0OiBqb2kuc3RyaW5nKCkudmFsaWQoJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHJvdyA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCdyb3cnKS5yZXF1aXJlZCgpLFxuICBmaWVsZHM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5saW5rKCcjZmllbGQnKSksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMuZGVmYXVsdCgpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb2xsYXBzaWJsZSA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGNvbXBvbmVudFNjaGVtYSxcbiAgKSxcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCdjb2xsYXBzaWJsZScpLnJlcXVpcmVkKCksXG4gIGZpZWxkczogam9pLmFycmF5KCkuaXRlbXMoam9pLmxpbmsoJyNmaWVsZCcpKSxcbiAgYWRtaW46IGJhc2VBZG1pbkZpZWxkcy5kZWZhdWx0KCksXG59KTtcblxuY29uc3QgdGFiID0gYmFzZUZpZWxkLmtleXMoe1xuICBuYW1lOiBqb2kuc3RyaW5nKClcbiAgICAud2hlbignbG9jYWxpemVkJywgeyBpczogam9pLmV4aXN0KCksIHRoZW46IGpvaS5yZXF1aXJlZCgpIH0pLFxuICBsb2NhbGl6ZWQ6IGpvaS5ib29sZWFuKCksXG4gIGludGVyZmFjZU5hbWU6IGpvaS5zdHJpbmcoKS53aGVuKCduYW1lJywgeyBub3Q6IGpvaS5leGlzdCgpLCB0aGVuOiBqb2kuZm9yYmlkZGVuKCkgfSksXG4gIHNhdmVUb0pXVDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuYm9vbGVhbigpLFxuICAgIGpvaS5zdHJpbmcoKSxcbiAgKSxcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICApLndoZW4oJ25hbWUnLCB7IGlzOiBqb2kubm90KCksIHRoZW46IGpvaS5yZXF1aXJlZCgpIH0pLFxuICBmaWVsZHM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5saW5rKCcjZmllbGQnKSkucmVxdWlyZWQoKSxcbiAgZGVzY3JpcHRpb246IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGNvbXBvbmVudFNjaGVtYSxcbiAgKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdGFicyA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCd0YWJzJykucmVxdWlyZWQoKSxcbiAgZmllbGRzOiBqb2kuZm9yYmlkZGVuKCksXG4gIGxvY2FsaXplZDogam9pLmZvcmJpZGRlbigpLFxuICB0YWJzOiBqb2kuYXJyYXkoKS5pdGVtcyh0YWIpLnJlcXVpcmVkKCksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgZGVzY3JpcHRpb246IGpvaS5mb3JiaWRkZW4oKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGdyb3VwID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ2dyb3VwJykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGZpZWxkczogam9pLmFycmF5KCkuaXRlbXMoam9pLmxpbmsoJyNmaWVsZCcpKSxcbiAgaW50ZXJmYWNlTmFtZTogam9pLnN0cmluZygpLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLm9iamVjdCgpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgaGlkZUd1dHRlcjogam9pLmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYXJyYXkgPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgnYXJyYXknKS5yZXF1aXJlZCgpLFxuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgbWluUm93czogam9pLm51bWJlcigpLFxuICBtYXhSb3dzOiBqb2kubnVtYmVyKCksXG4gIGZpZWxkczogam9pLmFycmF5KCkuaXRlbXMoam9pLmxpbmsoJyNmaWVsZCcpKS5yZXF1aXJlZCgpLFxuICBsYWJlbHM6IGpvaS5vYmplY3Qoe1xuICAgIHNpbmd1bGFyOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgam9pLnN0cmluZygpLFxuICAgICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgKSxcbiAgICBwbHVyYWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuc3RyaW5nKCksXG4gICAgICBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIFtqb2kuc3RyaW5nKCldKSxcbiAgICApLFxuICB9KSxcbiAgZGVmYXVsdFZhbHVlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5hcnJheSgpLml0ZW1zKGpvaS5vYmplY3QoKSksXG4gICAgam9pLmZ1bmMoKSxcbiAgKSxcbiAgYWRtaW46IGJhc2VBZG1pbkZpZWxkcy5rZXlzKHtcbiAgICBjb21wb25lbnRzOiBiYXNlQWRtaW5Db21wb25lbnRGaWVsZHMua2V5cyh7XG4gICAgICBSb3dMYWJlbDogY29tcG9uZW50U2NoZW1hLFxuICAgIH0pLmRlZmF1bHQoe30pLFxuICB9KS5kZWZhdWx0KHt9KSxcbiAgaW50ZXJmYWNlTmFtZTogam9pLnN0cmluZygpLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGxvYWQgPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgndXBsb2FkJykucmVxdWlyZWQoKSxcbiAgcmVsYXRpb25Ubzogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIG5hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBtYXhEZXB0aDogam9pLm51bWJlcigpLFxuICBmaWx0ZXJPcHRpb25zOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5vYmplY3QoKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLm9iamVjdCgpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG59KTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrYm94ID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ2NoZWNrYm94JykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuYm9vbGVhbigpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG59KTtcblxuZXhwb3J0IGNvbnN0IHBvaW50ID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3BvaW50JykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuYXJyYXkoKS5pdGVtcyhqb2kubnVtYmVyKCkpLm1heCgyKS5taW4oMiksXG4gICAgam9pLmZ1bmMoKSxcbiAgKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVsYXRpb25zaGlwID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3JlbGF0aW9uc2hpcCcpLnJlcXVpcmVkKCksXG4gIGhhc01hbnk6IGpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gIHJlbGF0aW9uVG86IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgam9pLmFycmF5KCkuaXRlbXMoam9pLnN0cmluZygpKSxcbiAgKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIG1heERlcHRoOiBqb2kubnVtYmVyKCksXG4gIGZpbHRlck9wdGlvbnM6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLm9iamVjdCgpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBhZG1pbjogYmFzZUFkbWluRmllbGRzLmtleXMoe1xuICAgIGlzU29ydGFibGU6IGpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gICAgYWxsb3dDcmVhdGU6IGpvaS5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgfSksXG4gIG1pbjogam9pLm51bWJlcigpXG4gICAgLndoZW4oJ2hhc01hbnknLCB7IGlzOiBqb2kubm90KHRydWUpLCB0aGVuOiBqb2kuZm9yYmlkZGVuKCkgfSlcbiAgICAud2FybmluZygnZGVwcmVjYXRlZCcsIHsgbWVzc2FnZTogJ1VzZSBtaW5Sb3dzIGluc3RlYWQuJyB9KSxcbiAgbWF4OiBqb2kubnVtYmVyKClcbiAgICAud2hlbignaGFzTWFueScsIHsgaXM6IGpvaS5ub3QodHJ1ZSksIHRoZW46IGpvaS5mb3JiaWRkZW4oKSB9KVxuICAgIC53YXJuaW5nKCdkZXByZWNhdGVkJywgeyBtZXNzYWdlOiAnVXNlIG1heFJvd3MgaW5zdGVhZC4nIH0pLFxuICBtaW5Sb3dzOiBqb2kubnVtYmVyKClcbiAgICAud2hlbignaGFzTWFueScsIHsgaXM6IGpvaS5ub3QodHJ1ZSksIHRoZW46IGpvaS5mb3JiaWRkZW4oKSB9KSxcbiAgbWF4Um93czogam9pLm51bWJlcigpXG4gICAgLndoZW4oJ2hhc01hbnknLCB7IGlzOiBqb2kubm90KHRydWUpLCB0aGVuOiBqb2kuZm9yYmlkZGVuKCkgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGJsb2NrcyA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCdibG9ja3MnKS5yZXF1aXJlZCgpLFxuICBtaW5Sb3dzOiBqb2kubnVtYmVyKCksXG4gIG1heFJvd3M6IGpvaS5udW1iZXIoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGxhYmVsczogam9pLm9iamVjdCh7XG4gICAgc2luZ3VsYXI6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuc3RyaW5nKCksXG4gICAgICBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIFtqb2kuc3RyaW5nKCldKSxcbiAgICApLFxuICAgIHBsdXJhbDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICAgICksXG4gIH0pLFxuICBibG9ja3M6IGpvaS5hcnJheSgpLml0ZW1zKFxuICAgIGpvaS5vYmplY3Qoe1xuICAgICAgc2x1Zzogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICBpbWFnZVVSTDogam9pLnN0cmluZygpLFxuICAgICAgaW1hZ2VBbHRUZXh0OiBqb2kuc3RyaW5nKCksXG4gICAgICBpbnRlcmZhY2VOYW1lOiBqb2kuc3RyaW5nKCksXG4gICAgICBncmFwaFFMOiBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgIHNpbmd1bGFyTmFtZTogam9pLnN0cmluZygpLFxuICAgICAgfSksXG4gICAgICBsYWJlbHM6IGpvaS5vYmplY3Qoe1xuICAgICAgICBzaW5ndWxhcjogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgICAgICBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgICAgICksXG4gICAgICAgIHBsdXJhbDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgICAgICBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgICAgICksXG4gICAgICB9KSxcbiAgICAgIGZpZWxkczogam9pLmFycmF5KCkuaXRlbXMoam9pLmxpbmsoJyNmaWVsZCcpKSxcbiAgICB9KSxcbiAgKS5yZXF1aXJlZCgpLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLmFycmF5KCkuaXRlbXMoam9pLm9iamVjdCgpKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxufSk7XG5cbmV4cG9ydCBjb25zdCByaWNoVGV4dCA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCdyaWNoVGV4dCcpLnJlcXVpcmVkKCksXG4gIG5hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLmFycmF5KCkuaXRlbXMoam9pLm9iamVjdCgpKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBhZG1pbjogYmFzZUFkbWluRmllbGRzLmtleXMoe1xuICAgIHBsYWNlaG9sZGVyOiBqb2kuc3RyaW5nKCksXG4gICAgaGlkZUd1dHRlcjogam9pLmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGVsZW1lbnRzOiBqb2kuYXJyYXkoKS5pdGVtcyhcbiAgICAgIGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgICAgam9pLm9iamVjdCh7XG4gICAgICAgICAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgQnV0dG9uOiBjb21wb25lbnRTY2hlbWEsXG4gICAgICAgICAgRWxlbWVudDogY29tcG9uZW50U2NoZW1hLFxuICAgICAgICAgIHBsdWdpbnM6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudFNjaGVtYSksXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICApLFxuICAgIGxlYXZlczogam9pLmFycmF5KCkuaXRlbXMoXG4gICAgICBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICBqb2kuc3RyaW5nKCksXG4gICAgICAgIGpvaS5vYmplY3Qoe1xuICAgICAgICAgIG5hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgIEJ1dHRvbjogY29tcG9uZW50U2NoZW1hLFxuICAgICAgICAgIExlYWY6IGNvbXBvbmVudFNjaGVtYSxcbiAgICAgICAgICBwbHVnaW5zOiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnRTY2hlbWEpLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgKSxcbiAgICB1cGxvYWQ6IGpvaS5vYmplY3Qoe1xuICAgICAgY29sbGVjdGlvbnM6IGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICBmaWVsZHM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5saW5rKCcjZmllbGQnKSksXG4gICAgICB9KSksXG4gICAgfSksXG4gICAgbGluazogam9pLm9iamVjdCh7XG4gICAgICBmaWVsZHM6IGpvaS5hbHRlcm5hdGl2ZXMoXG4gICAgICAgIGpvaS5hcnJheSgpLml0ZW1zKGpvaS5saW5rKCcjZmllbGQnKSksXG4gICAgICAgIGpvaS5mdW5jKCksXG4gICAgICApLFxuICAgIH0pLFxuICAgIHJ0bDogam9pLmJvb2xlYW4oKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRhdGUgPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgnZGF0ZScpLnJlcXVpcmVkKCksXG4gIG5hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgcGxhY2Vob2xkZXI6IGpvaS5zdHJpbmcoKSxcbiAgICBkYXRlOiBqb2kub2JqZWN0KHtcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IGpvaS5zdHJpbmcoKSxcbiAgICAgIHBpY2tlckFwcGVhcmFuY2U6IGpvaS5zdHJpbmcoKSxcbiAgICAgIG1pbkRhdGU6IGpvaS5kYXRlKCksXG4gICAgICBtYXhEYXRlOiBqb2kuZGF0ZSgpLFxuICAgICAgbWluVGltZTogam9pLmRhdGUoKSxcbiAgICAgIG1heFRpbWU6IGpvaS5kYXRlKCksXG4gICAgICB0aW1lSW50ZXJ2YWxzOiBqb2kubnVtYmVyKCksXG4gICAgICB0aW1lRm9ybWF0OiBqb2kuc3RyaW5nKCksXG4gICAgICBtb250aHNUb1Nob3c6IGpvaS5udW1iZXIoKSxcbiAgICB9KSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHVpID0gam9pLm9iamVjdCgpLmtleXMoe1xuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICApLFxuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3VpJykucmVxdWlyZWQoKSxcbiAgYWRtaW46IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICBwb3NpdGlvbjogam9pLnN0cmluZygpLnZhbGlkKCdzaWRlYmFyJyksXG4gICAgd2lkdGg6IGpvaS5zdHJpbmcoKSxcbiAgICBjb25kaXRpb246IGpvaS5mdW5jKCksXG4gICAgY29tcG9uZW50czogam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgQ2VsbDogY29tcG9uZW50U2NoZW1hLFxuICAgICAgRmllbGQ6IGNvbXBvbmVudFNjaGVtYSxcbiAgICB9KS5kZWZhdWx0KHt9KSxcbiAgfSkuZGVmYXVsdCgpLFxuICBjdXN0b206IGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgam9pLmFueSgpKSxcbn0pO1xuXG5jb25zdCBmaWVsZFNjaGVtYSA9IGpvaS5hbHRlcm5hdGl2ZXMoKVxuICAudHJ5KFxuICAgIHRleHQsXG4gICAgbnVtYmVyLFxuICAgIHRleHRhcmVhLFxuICAgIGVtYWlsLFxuICAgIGNvZGUsXG4gICAganNvbixcbiAgICBzZWxlY3QsXG4gICAgZ3JvdXAsXG4gICAgYXJyYXksXG4gICAgcm93LFxuICAgIGNvbGxhcHNpYmxlLFxuICAgIHRhYnMsXG4gICAgcmFkaW8sXG4gICAgcmVsYXRpb25zaGlwLFxuICAgIGNoZWNrYm94LFxuICAgIHVwbG9hZCxcbiAgICByaWNoVGV4dCxcbiAgICBibG9ja3MsXG4gICAgZGF0ZSxcbiAgICBwb2ludCxcbiAgICB1aSxcbiAgKVxuICAuaWQoJ2ZpZWxkJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZpZWxkU2NoZW1hO1xuIl0sIm5hbWVzIjpbImJhc2VBZG1pbkNvbXBvbmVudEZpZWxkcyIsImJhc2VBZG1pbkZpZWxkcyIsImJhc2VGaWVsZCIsImlkRmllbGQiLCJ0ZXh0IiwibnVtYmVyIiwidGV4dGFyZWEiLCJlbWFpbCIsImNvZGUiLCJqc29uIiwic2VsZWN0IiwicmFkaW8iLCJyb3ciLCJjb2xsYXBzaWJsZSIsInRhYnMiLCJncm91cCIsImFycmF5IiwidXBsb2FkIiwiY2hlY2tib3giLCJwb2ludCIsInJlbGF0aW9uc2hpcCIsImJsb2NrcyIsInJpY2hUZXh0IiwiZGF0ZSIsInVpIiwiam9pIiwib2JqZWN0Iiwia2V5cyIsIkNlbGwiLCJjb21wb25lbnRTY2hlbWEiLCJGaWVsZCIsIkZpbHRlciIsImRlZmF1bHQiLCJkZXNjcmlwdGlvbiIsImFsdGVybmF0aXZlcyIsInRyeSIsInN0cmluZyIsInBhdHRlcm4iLCJwb3NpdGlvbiIsInZhbGlkIiwid2lkdGgiLCJzdHlsZSIsInVua25vd24iLCJjbGFzc05hbWUiLCJyZWFkT25seSIsImJvb2xlYW4iLCJpbml0Q29sbGFwc2VkIiwiaGlkZGVuIiwiZGlzYWJsZWQiLCJkaXNhYmxlQnVsa0VkaXQiLCJjb25kaXRpb24iLCJmdW5jIiwiY29tcG9uZW50cyIsImxhYmVsIiwicmVxdWlyZWQiLCJzYXZlVG9KV1QiLCJ1bmlxdWUiLCJsb2NhbGl6ZWQiLCJpbmRleCIsInZhbGlkYXRlIiwiYWNjZXNzIiwiY3JlYXRlIiwicmVhZCIsInVwZGF0ZSIsImhvb2tzIiwiYmVmb3JlVmFsaWRhdGUiLCJpdGVtcyIsImJlZm9yZUNoYW5nZSIsImFmdGVyQ2hhbmdlIiwiYWZ0ZXJSZWFkIiwiYWRtaW4iLCJjdXN0b20iLCJhbnkiLCJuYW1lIiwidHlwZSIsIm5vdCIsImludmFsaWQiLCJkZWZhdWx0VmFsdWUiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJwbGFjZWhvbGRlciIsImF1dG9Db21wbGV0ZSIsInJ0bCIsIm1pbiIsIm1heCIsInN0ZXAiLCJoYXNNYW55IiwibWluUm93cyIsIndoZW4iLCJpcyIsInRoZW4iLCJmb3JiaWRkZW4iLCJtYXhSb3dzIiwicm93cyIsImxhbmd1YWdlIiwiZWRpdG9yT3B0aW9ucyIsIm9wdGlvbnMiLCJ2YWx1ZSIsImFsbG93IiwiaXNDbGVhcmFibGUiLCJpc1NvcnRhYmxlIiwibGF5b3V0IiwiZmllbGRzIiwibGluayIsInRhYiIsImV4aXN0IiwiaW50ZXJmYWNlTmFtZSIsImhpZGVHdXR0ZXIiLCJsYWJlbHMiLCJzaW5ndWxhciIsInBsdXJhbCIsIlJvd0xhYmVsIiwicmVsYXRpb25UbyIsIm1heERlcHRoIiwiZmlsdGVyT3B0aW9ucyIsImFsbG93Q3JlYXRlIiwid2FybmluZyIsIm1lc3NhZ2UiLCJzbHVnIiwiaW1hZ2VVUkwiLCJpbWFnZUFsdFRleHQiLCJncmFwaFFMIiwic2luZ3VsYXJOYW1lIiwiZWxlbWVudHMiLCJCdXR0b24iLCJFbGVtZW50IiwicGx1Z2lucyIsImxlYXZlcyIsIkxlYWYiLCJjb2xsZWN0aW9ucyIsImRpc3BsYXlGb3JtYXQiLCJwaWNrZXJBcHBlYXJhbmNlIiwibWluRGF0ZSIsIm1heERhdGUiLCJtaW5UaW1lIiwibWF4VGltZSIsInRpbWVJbnRlcnZhbHMiLCJ0aW1lRm9ybWF0IiwibW9udGhzVG9TaG93IiwiZmll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