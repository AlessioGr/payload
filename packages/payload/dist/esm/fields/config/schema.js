import joi from "joi";
import { componentSchema } from "../../utilities/componentSchema";
export var baseAdminComponentFields = joi.object().keys({
    Cell: componentSchema,
    Field: componentSchema,
    Filter: componentSchema
}).default({});
export var baseAdminFields = joi.object().keys({
    description: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
        joi.string()
    ]), componentSchema),
    position: joi.string().valid("sidebar"),
    width: joi.string(),
    style: joi.object().unknown(),
    className: joi.string(),
    readOnly: joi.boolean().default(false),
    initCollapsed: joi.boolean().default(false),
    hidden: joi.boolean().default(false),
    disabled: joi.boolean().default(false),
    disableBulkEdit: joi.boolean().default(false),
    condition: joi.func(),
    components: baseAdminComponentFields
});
export var baseField = joi.object().keys({
    label: joi.alternatives().try(joi.object().pattern(joi.string(), [
        joi.string()
    ]), joi.string(), joi.valid(false)),
    required: joi.boolean().default(false),
    saveToJWT: joi.alternatives().try(joi.boolean(), joi.string()).default(false),
    unique: joi.boolean().default(false),
    localized: joi.boolean().default(false),
    index: joi.boolean().default(false),
    hidden: joi.boolean().default(false),
    validate: joi.func(),
    access: joi.object().keys({
        create: joi.func(),
        read: joi.func(),
        update: joi.func()
    }),
    hooks: joi.object().keys({
        beforeValidate: joi.array().items(joi.func()).default([]),
        beforeChange: joi.array().items(joi.func()).default([]),
        afterChange: joi.array().items(joi.func()).default([]),
        afterRead: joi.array().items(joi.func()).default([])
    }).default(),
    admin: baseAdminFields.default(),
    custom: joi.object().pattern(joi.string(), joi.any())
}).default();
export var idField = baseField.keys({
    name: joi.string().valid("id"),
    type: joi.string().valid("text", "number"),
    required: joi.not(false, 0).default(true),
    localized: joi.invalid(true)
});
export var text = baseField.keys({
    type: joi.string().valid("text").required(),
    name: joi.string().required(),
    defaultValue: joi.alternatives().try(joi.string(), joi.func()),
    minLength: joi.number(),
    maxLength: joi.number(),
    admin: baseAdminFields.keys({
        placeholder: joi.alternatives().try(joi.object().pattern(joi.string(), [
            joi.string()
        ]), joi.string()),
        autoComplete: joi.string(),
        rtl: joi.boolean()
    })
});
export var number = baseField.keys({
    type: joi.string().valid("number").required(),
    name: joi.string().required(),
    defaultValue: joi.alternatives().try(joi.number(), joi.func()),
    min: joi.number(),
    max: joi.number(),
    admin: baseAdminFields.keys({
        placeholder: joi.string(),
        autoComplete: joi.string(),
        step: joi.number()
    }),
    hasMany: joi.boolean().default(false),
    minRows: joi.number().when("hasMany", {
        is: joi.not(true),
        then: joi.forbidden()
    }),
    maxRows: joi.number().when("hasMany", {
        is: joi.not(true),
        then: joi.forbidden()
    })
});
export var textarea = baseField.keys({
    type: joi.string().valid("textarea").required(),
    name: joi.string().required(),
    defaultValue: joi.alternatives().try(joi.string(), joi.func()),
    minLength: joi.number(),
    maxLength: joi.number(),
    admin: baseAdminFields.keys({
        placeholder: joi.string(),
        rows: joi.number(),
        rtl: joi.boolean()
    })
});
export var email = baseField.keys({
    type: joi.string().valid("email").required(),
    name: joi.string().required(),
    defaultValue: joi.alternatives().try(joi.string(), joi.func()),
    minLength: joi.number(),
    maxLength: joi.number(),
    admin: baseAdminFields.keys({
        placeholder: joi.string(),
        autoComplete: joi.string()
    })
});
export var code = baseField.keys({
    type: joi.string().valid("code").required(),
    name: joi.string().required(),
    defaultValue: joi.alternatives().try(joi.string(), joi.func()),
    admin: baseAdminFields.keys({
        language: joi.string(),
        editorOptions: joi.object().unknown()
    })
});
export var json = baseField.keys({
    type: joi.string().valid("json").required(),
    name: joi.string().required(),
    defaultValue: joi.alternatives().try(joi.array(), joi.object())
});
export var select = baseField.keys({
    type: joi.string().valid("select").required(),
    name: joi.string().required(),
    options: joi.array().min(1).items(joi.alternatives().try(joi.string(), joi.object({
        value: joi.string().required().allow(""),
        label: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
            joi.string()
        ]))
    }))).required(),
    hasMany: joi.boolean().default(false),
    defaultValue: joi.alternatives().try(joi.string().allow(""), joi.array().items(joi.string().allow("")), joi.func()),
    admin: baseAdminFields.keys({
        isClearable: joi.boolean().default(false),
        isSortable: joi.boolean().default(false)
    })
});
export var radio = baseField.keys({
    type: joi.string().valid("radio").required(),
    name: joi.string().required(),
    options: joi.array().min(1).items(joi.alternatives().try(joi.string(), joi.object({
        value: joi.string().required().allow(""),
        label: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
            joi.string()
        ])).required()
    }))).required(),
    defaultValue: joi.alternatives().try(joi.string().allow(""), joi.func()),
    admin: baseAdminFields.keys({
        layout: joi.string().valid("vertical", "horizontal")
    })
});
export var row = baseField.keys({
    type: joi.string().valid("row").required(),
    fields: joi.array().items(joi.link("#field")),
    admin: baseAdminFields.default()
});
export var collapsible = baseField.keys({
    label: joi.alternatives().try(joi.string(), componentSchema),
    type: joi.string().valid("collapsible").required(),
    fields: joi.array().items(joi.link("#field")),
    admin: baseAdminFields.default()
});
var tab = baseField.keys({
    name: joi.string().when("localized", {
        is: joi.exist(),
        then: joi.required()
    }),
    localized: joi.boolean(),
    interfaceName: joi.string().when("name", {
        not: joi.exist(),
        then: joi.forbidden()
    }),
    saveToJWT: joi.alternatives().try(joi.boolean(), joi.string()),
    label: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
        joi.string()
    ])).when("name", {
        is: joi.not(),
        then: joi.required()
    }),
    fields: joi.array().items(joi.link("#field")).required(),
    description: joi.alternatives().try(joi.string(), componentSchema)
});
export var tabs = baseField.keys({
    type: joi.string().valid("tabs").required(),
    fields: joi.forbidden(),
    localized: joi.forbidden(),
    tabs: joi.array().items(tab).required(),
    admin: baseAdminFields.keys({
        description: joi.forbidden()
    })
});
export var group = baseField.keys({
    type: joi.string().valid("group").required(),
    name: joi.string().required(),
    fields: joi.array().items(joi.link("#field")),
    interfaceName: joi.string(),
    defaultValue: joi.alternatives().try(joi.object(), joi.func()),
    admin: baseAdminFields.keys({
        hideGutter: joi.boolean().default(true)
    })
});
export var array = baseField.keys({
    type: joi.string().valid("array").required(),
    name: joi.string().required(),
    minRows: joi.number(),
    maxRows: joi.number(),
    fields: joi.array().items(joi.link("#field")).required(),
    labels: joi.object({
        singular: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
            joi.string()
        ])),
        plural: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
            joi.string()
        ]))
    }),
    defaultValue: joi.alternatives().try(joi.array().items(joi.object()), joi.func()),
    admin: baseAdminFields.keys({
        components: baseAdminComponentFields.keys({
            RowLabel: componentSchema
        }).default({})
    }).default({}),
    interfaceName: joi.string()
});
export var upload = baseField.keys({
    type: joi.string().valid("upload").required(),
    relationTo: joi.string().required(),
    name: joi.string().required(),
    maxDepth: joi.number(),
    filterOptions: joi.alternatives().try(joi.object(), joi.func()),
    defaultValue: joi.alternatives().try(joi.object(), joi.func())
});
export var checkbox = baseField.keys({
    type: joi.string().valid("checkbox").required(),
    name: joi.string().required(),
    defaultValue: joi.alternatives().try(joi.boolean(), joi.func())
});
export var point = baseField.keys({
    type: joi.string().valid("point").required(),
    name: joi.string().required(),
    defaultValue: joi.alternatives().try(joi.array().items(joi.number()).max(2).min(2), joi.func())
});
export var relationship = baseField.keys({
    type: joi.string().valid("relationship").required(),
    hasMany: joi.boolean().default(false),
    relationTo: joi.alternatives().try(joi.string().required(), joi.array().items(joi.string())),
    name: joi.string().required(),
    maxDepth: joi.number(),
    filterOptions: joi.alternatives().try(joi.object(), joi.func()),
    defaultValue: joi.alternatives().try(joi.func()),
    admin: baseAdminFields.keys({
        isSortable: joi.boolean().default(false),
        allowCreate: joi.boolean().default(true)
    }),
    min: joi.number().when("hasMany", {
        is: joi.not(true),
        then: joi.forbidden()
    }).warning("deprecated", {
        message: "Use minRows instead."
    }),
    max: joi.number().when("hasMany", {
        is: joi.not(true),
        then: joi.forbidden()
    }).warning("deprecated", {
        message: "Use maxRows instead."
    }),
    minRows: joi.number().when("hasMany", {
        is: joi.not(true),
        then: joi.forbidden()
    }),
    maxRows: joi.number().when("hasMany", {
        is: joi.not(true),
        then: joi.forbidden()
    })
});
export var blocks = baseField.keys({
    type: joi.string().valid("blocks").required(),
    minRows: joi.number(),
    maxRows: joi.number(),
    name: joi.string().required(),
    labels: joi.object({
        singular: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
            joi.string()
        ])),
        plural: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
            joi.string()
        ]))
    }),
    blocks: joi.array().items(joi.object({
        slug: joi.string().required(),
        imageURL: joi.string(),
        imageAltText: joi.string(),
        interfaceName: joi.string(),
        graphQL: joi.object().keys({
            singularName: joi.string()
        }),
        labels: joi.object({
            singular: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
                joi.string()
            ])),
            plural: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
                joi.string()
            ]))
        }),
        fields: joi.array().items(joi.link("#field"))
    })).required(),
    defaultValue: joi.alternatives().try(joi.array().items(joi.object()), joi.func())
});
export var richText = baseField.keys({
    type: joi.string().valid("richText").required(),
    name: joi.string().required(),
    defaultValue: joi.alternatives().try(joi.array().items(joi.object()), joi.func()),
    admin: baseAdminFields.keys({
        placeholder: joi.string(),
        hideGutter: joi.boolean().default(true),
        elements: joi.array().items(joi.alternatives().try(joi.string(), joi.object({
            name: joi.string().required(),
            Button: componentSchema,
            Element: componentSchema,
            plugins: joi.array().items(componentSchema)
        }))),
        leaves: joi.array().items(joi.alternatives().try(joi.string(), joi.object({
            name: joi.string().required(),
            Button: componentSchema,
            Leaf: componentSchema,
            plugins: joi.array().items(componentSchema)
        }))),
        upload: joi.object({
            collections: joi.object().pattern(joi.string(), joi.object().keys({
                fields: joi.array().items(joi.link("#field"))
            }))
        }),
        link: joi.object({
            fields: joi.alternatives(joi.array().items(joi.link("#field")), joi.func())
        }),
        rtl: joi.boolean()
    })
});
export var date = baseField.keys({
    type: joi.string().valid("date").required(),
    name: joi.string().required(),
    defaultValue: joi.alternatives().try(joi.string(), joi.func()),
    admin: baseAdminFields.keys({
        placeholder: joi.string(),
        date: joi.object({
            displayFormat: joi.string(),
            pickerAppearance: joi.string(),
            minDate: joi.date(),
            maxDate: joi.date(),
            minTime: joi.date(),
            maxTime: joi.date(),
            timeIntervals: joi.number(),
            timeFormat: joi.string(),
            monthsToShow: joi.number()
        })
    })
});
export var ui = joi.object().keys({
    name: joi.string().required(),
    label: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
        joi.string()
    ])),
    type: joi.string().valid("ui").required(),
    admin: joi.object().keys({
        position: joi.string().valid("sidebar"),
        width: joi.string(),
        condition: joi.func(),
        components: joi.object().keys({
            Cell: componentSchema,
            Field: componentSchema
        }).default({})
    }).default(),
    custom: joi.object().pattern(joi.string(), joi.any())
});
var fieldSchema = joi.alternatives().try(text, number, textarea, email, code, json, select, group, array, row, collapsible, tabs, radio, relationship, checkbox, upload, richText, blocks, date, point, ui).id("field");
export default fieldSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvY29uZmlnL3NjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgam9pIGZyb20gJ2pvaSc7XG5pbXBvcnQgeyBjb21wb25lbnRTY2hlbWEgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvY29tcG9uZW50U2NoZW1hJztcblxuZXhwb3J0IGNvbnN0IGJhc2VBZG1pbkNvbXBvbmVudEZpZWxkcyA9IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgQ2VsbDogY29tcG9uZW50U2NoZW1hLFxuICBGaWVsZDogY29tcG9uZW50U2NoZW1hLFxuICBGaWx0ZXI6IGNvbXBvbmVudFNjaGVtYSxcbn0pLmRlZmF1bHQoe30pO1xuXG5leHBvcnQgY29uc3QgYmFzZUFkbWluRmllbGRzID0gam9pLm9iamVjdCgpLmtleXMoe1xuICBkZXNjcmlwdGlvbjogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuc3RyaW5nKCksXG4gICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgY29tcG9uZW50U2NoZW1hLFxuICApLFxuICBwb3NpdGlvbjogam9pLnN0cmluZygpLnZhbGlkKCdzaWRlYmFyJyksXG4gIHdpZHRoOiBqb2kuc3RyaW5nKCksXG4gIHN0eWxlOiBqb2kub2JqZWN0KCkudW5rbm93bigpLFxuICBjbGFzc05hbWU6IGpvaS5zdHJpbmcoKSxcbiAgcmVhZE9ubHk6IGpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gIGluaXRDb2xsYXBzZWQ6IGpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gIGhpZGRlbjogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgZGlzYWJsZWQ6IGpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gIGRpc2FibGVCdWxrRWRpdDogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgY29uZGl0aW9uOiBqb2kuZnVuYygpLFxuICBjb21wb25lbnRzOiBiYXNlQWRtaW5Db21wb25lbnRGaWVsZHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGJhc2VGaWVsZCA9IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgam9pLnN0cmluZygpLFxuICAgIGpvaS52YWxpZChmYWxzZSksXG4gICksXG4gIHJlcXVpcmVkOiBqb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICBzYXZlVG9KV1Q6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLmJvb2xlYW4oKSxcbiAgICBqb2kuc3RyaW5nKCksXG4gICkuZGVmYXVsdChmYWxzZSksXG4gIHVuaXF1ZTogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgbG9jYWxpemVkOiBqb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICBpbmRleDogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgaGlkZGVuOiBqb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICB2YWxpZGF0ZTogam9pLmZ1bmMoKSxcbiAgYWNjZXNzOiBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgY3JlYXRlOiBqb2kuZnVuYygpLFxuICAgIHJlYWQ6IGpvaS5mdW5jKCksXG4gICAgdXBkYXRlOiBqb2kuZnVuYygpLFxuICB9KSxcbiAgaG9va3M6IGpvaS5vYmplY3QoKVxuICAgIC5rZXlzKHtcbiAgICAgIGJlZm9yZVZhbGlkYXRlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKS5kZWZhdWx0KFtdKSxcbiAgICAgIGJlZm9yZUNoYW5nZTogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSkuZGVmYXVsdChbXSksXG4gICAgICBhZnRlckNoYW5nZTogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSkuZGVmYXVsdChbXSksXG4gICAgICBhZnRlclJlYWQ6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLmRlZmF1bHQoW10pLFxuICAgIH0pLmRlZmF1bHQoKSxcbiAgYWRtaW46IGJhc2VBZG1pbkZpZWxkcy5kZWZhdWx0KCksXG4gIGN1c3RvbTogam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBqb2kuYW55KCkpLFxufSkuZGVmYXVsdCgpO1xuXG5leHBvcnQgY29uc3QgaWRGaWVsZCA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgbmFtZTogam9pLnN0cmluZygpLnZhbGlkKCdpZCcpLFxuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3RleHQnLCAnbnVtYmVyJyksXG4gIHJlcXVpcmVkOiBqb2kubm90KGZhbHNlLCAwKS5kZWZhdWx0KHRydWUpLFxuICBsb2NhbGl6ZWQ6IGpvaS5pbnZhbGlkKHRydWUpLFxufSk7XG5cbmV4cG9ydCBjb25zdCB0ZXh0ID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3RleHQnKS5yZXF1aXJlZCgpLFxuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgZGVmYXVsdFZhbHVlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5zdHJpbmcoKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBtaW5MZW5ndGg6IGpvaS5udW1iZXIoKSxcbiAgbWF4TGVuZ3RoOiBqb2kubnVtYmVyKCksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgcGxhY2Vob2xkZXI6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIFtqb2kuc3RyaW5nKCldKSxcbiAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICApLFxuICAgIGF1dG9Db21wbGV0ZTogam9pLnN0cmluZygpLFxuICAgIHJ0bDogam9pLmJvb2xlYW4oKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IG51bWJlciA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCdudW1iZXInKS5yZXF1aXJlZCgpLFxuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgZGVmYXVsdFZhbHVlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5udW1iZXIoKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBtaW46IGpvaS5udW1iZXIoKSxcbiAgbWF4OiBqb2kubnVtYmVyKCksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgcGxhY2Vob2xkZXI6IGpvaS5zdHJpbmcoKSxcbiAgICBhdXRvQ29tcGxldGU6IGpvaS5zdHJpbmcoKSxcbiAgICBzdGVwOiBqb2kubnVtYmVyKCksXG4gIH0pLFxuICBoYXNNYW55OiBqb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICBtaW5Sb3dzOiBqb2kubnVtYmVyKClcbiAgICAud2hlbignaGFzTWFueScsIHsgaXM6IGpvaS5ub3QodHJ1ZSksIHRoZW46IGpvaS5mb3JiaWRkZW4oKSB9KSxcbiAgbWF4Um93czogam9pLm51bWJlcigpXG4gICAgLndoZW4oJ2hhc01hbnknLCB7IGlzOiBqb2kubm90KHRydWUpLCB0aGVuOiBqb2kuZm9yYmlkZGVuKCkgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHRleHRhcmVhID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3RleHRhcmVhJykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuc3RyaW5nKCksXG4gICAgam9pLmZ1bmMoKSxcbiAgKSxcbiAgbWluTGVuZ3RoOiBqb2kubnVtYmVyKCksXG4gIG1heExlbmd0aDogam9pLm51bWJlcigpLFxuICBhZG1pbjogYmFzZUFkbWluRmllbGRzLmtleXMoe1xuICAgIHBsYWNlaG9sZGVyOiBqb2kuc3RyaW5nKCksXG4gICAgcm93czogam9pLm51bWJlcigpLFxuICAgIHJ0bDogam9pLmJvb2xlYW4oKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGVtYWlsID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ2VtYWlsJykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuc3RyaW5nKCksXG4gICAgam9pLmZ1bmMoKSxcbiAgKSxcbiAgbWluTGVuZ3RoOiBqb2kubnVtYmVyKCksXG4gIG1heExlbmd0aDogam9pLm51bWJlcigpLFxuICBhZG1pbjogYmFzZUFkbWluRmllbGRzLmtleXMoe1xuICAgIHBsYWNlaG9sZGVyOiBqb2kuc3RyaW5nKCksXG4gICAgYXV0b0NvbXBsZXRlOiBqb2kuc3RyaW5nKCksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb2RlID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ2NvZGUnKS5yZXF1aXJlZCgpLFxuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgZGVmYXVsdFZhbHVlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5zdHJpbmcoKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBhZG1pbjogYmFzZUFkbWluRmllbGRzLmtleXMoe1xuICAgIGxhbmd1YWdlOiBqb2kuc3RyaW5nKCksXG4gICAgZWRpdG9yT3B0aW9uczogam9pLm9iamVjdCgpLnVua25vd24oKSwgLy8gRWRpdG9yWydvcHRpb25zJ10gQG1vbmFjby1lZGl0b3IvcmVhY3RcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGpzb24gPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgnanNvbicpLnJlcXVpcmVkKCksXG4gIG5hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLmFycmF5KCksXG4gICAgam9pLm9iamVjdCgpLFxuICApLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3QgPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgnc2VsZWN0JykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIG9wdGlvbnM6IGpvaS5hcnJheSgpLm1pbigxKS5pdGVtcyhcbiAgICBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgam9pLnN0cmluZygpLFxuICAgICAgam9pLm9iamVjdCh7XG4gICAgICAgIHZhbHVlOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKS5hbGxvdygnJyksXG4gICAgICAgIGxhYmVsOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgICAgICBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIFtqb2kuc3RyaW5nKCldKSxcbiAgICAgICAgKSxcbiAgICAgIH0pLFxuICAgICksXG4gICkucmVxdWlyZWQoKSxcbiAgaGFzTWFueTogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgZGVmYXVsdFZhbHVlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5zdHJpbmcoKS5hbGxvdygnJyksXG4gICAgam9pLmFycmF5KCkuaXRlbXMoam9pLnN0cmluZygpLmFsbG93KCcnKSksXG4gICAgam9pLmZ1bmMoKSxcbiAgKSxcbiAgYWRtaW46IGJhc2VBZG1pbkZpZWxkcy5rZXlzKHtcbiAgICBpc0NsZWFyYWJsZTogam9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgICBpc1NvcnRhYmxlOiBqb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcmFkaW8gPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgncmFkaW8nKS5yZXF1aXJlZCgpLFxuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgb3B0aW9uczogam9pLmFycmF5KCkubWluKDEpLml0ZW1zKFxuICAgIGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuc3RyaW5nKCksXG4gICAgICBqb2kub2JqZWN0KHtcbiAgICAgICAgdmFsdWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLmFsbG93KCcnKSxcbiAgICAgICAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgICAgam9pLnN0cmluZygpLFxuICAgICAgICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICAgICAgICApLnJlcXVpcmVkKCksXG4gICAgICB9KSxcbiAgICApLFxuICApLnJlcXVpcmVkKCksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuc3RyaW5nKCkuYWxsb3coJycpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgbGF5b3V0OiBqb2kuc3RyaW5nKCkudmFsaWQoJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHJvdyA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCdyb3cnKS5yZXF1aXJlZCgpLFxuICBmaWVsZHM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5saW5rKCcjZmllbGQnKSksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMuZGVmYXVsdCgpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjb2xsYXBzaWJsZSA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGNvbXBvbmVudFNjaGVtYSxcbiAgKSxcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCdjb2xsYXBzaWJsZScpLnJlcXVpcmVkKCksXG4gIGZpZWxkczogam9pLmFycmF5KCkuaXRlbXMoam9pLmxpbmsoJyNmaWVsZCcpKSxcbiAgYWRtaW46IGJhc2VBZG1pbkZpZWxkcy5kZWZhdWx0KCksXG59KTtcblxuY29uc3QgdGFiID0gYmFzZUZpZWxkLmtleXMoe1xuICBuYW1lOiBqb2kuc3RyaW5nKClcbiAgICAud2hlbignbG9jYWxpemVkJywgeyBpczogam9pLmV4aXN0KCksIHRoZW46IGpvaS5yZXF1aXJlZCgpIH0pLFxuICBsb2NhbGl6ZWQ6IGpvaS5ib29sZWFuKCksXG4gIGludGVyZmFjZU5hbWU6IGpvaS5zdHJpbmcoKS53aGVuKCduYW1lJywgeyBub3Q6IGpvaS5leGlzdCgpLCB0aGVuOiBqb2kuZm9yYmlkZGVuKCkgfSksXG4gIHNhdmVUb0pXVDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuYm9vbGVhbigpLFxuICAgIGpvaS5zdHJpbmcoKSxcbiAgKSxcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICApLndoZW4oJ25hbWUnLCB7IGlzOiBqb2kubm90KCksIHRoZW46IGpvaS5yZXF1aXJlZCgpIH0pLFxuICBmaWVsZHM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5saW5rKCcjZmllbGQnKSkucmVxdWlyZWQoKSxcbiAgZGVzY3JpcHRpb246IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGNvbXBvbmVudFNjaGVtYSxcbiAgKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdGFicyA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCd0YWJzJykucmVxdWlyZWQoKSxcbiAgZmllbGRzOiBqb2kuZm9yYmlkZGVuKCksXG4gIGxvY2FsaXplZDogam9pLmZvcmJpZGRlbigpLFxuICB0YWJzOiBqb2kuYXJyYXkoKS5pdGVtcyh0YWIpLnJlcXVpcmVkKCksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgZGVzY3JpcHRpb246IGpvaS5mb3JiaWRkZW4oKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGdyb3VwID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ2dyb3VwJykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGZpZWxkczogam9pLmFycmF5KCkuaXRlbXMoam9pLmxpbmsoJyNmaWVsZCcpKSxcbiAgaW50ZXJmYWNlTmFtZTogam9pLnN0cmluZygpLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLm9iamVjdCgpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgaGlkZUd1dHRlcjogam9pLmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYXJyYXkgPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgnYXJyYXknKS5yZXF1aXJlZCgpLFxuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgbWluUm93czogam9pLm51bWJlcigpLFxuICBtYXhSb3dzOiBqb2kubnVtYmVyKCksXG4gIGZpZWxkczogam9pLmFycmF5KCkuaXRlbXMoam9pLmxpbmsoJyNmaWVsZCcpKS5yZXF1aXJlZCgpLFxuICBsYWJlbHM6IGpvaS5vYmplY3Qoe1xuICAgIHNpbmd1bGFyOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgam9pLnN0cmluZygpLFxuICAgICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgKSxcbiAgICBwbHVyYWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuc3RyaW5nKCksXG4gICAgICBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIFtqb2kuc3RyaW5nKCldKSxcbiAgICApLFxuICB9KSxcbiAgZGVmYXVsdFZhbHVlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5hcnJheSgpLml0ZW1zKGpvaS5vYmplY3QoKSksXG4gICAgam9pLmZ1bmMoKSxcbiAgKSxcbiAgYWRtaW46IGJhc2VBZG1pbkZpZWxkcy5rZXlzKHtcbiAgICBjb21wb25lbnRzOiBiYXNlQWRtaW5Db21wb25lbnRGaWVsZHMua2V5cyh7XG4gICAgICBSb3dMYWJlbDogY29tcG9uZW50U2NoZW1hLFxuICAgIH0pLmRlZmF1bHQoe30pLFxuICB9KS5kZWZhdWx0KHt9KSxcbiAgaW50ZXJmYWNlTmFtZTogam9pLnN0cmluZygpLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGxvYWQgPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgndXBsb2FkJykucmVxdWlyZWQoKSxcbiAgcmVsYXRpb25Ubzogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIG5hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBtYXhEZXB0aDogam9pLm51bWJlcigpLFxuICBmaWx0ZXJPcHRpb25zOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5vYmplY3QoKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLm9iamVjdCgpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG59KTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrYm94ID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ2NoZWNrYm94JykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuYm9vbGVhbigpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG59KTtcblxuZXhwb3J0IGNvbnN0IHBvaW50ID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3BvaW50JykucmVxdWlyZWQoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuYXJyYXkoKS5pdGVtcyhqb2kubnVtYmVyKCkpLm1heCgyKS5taW4oMiksXG4gICAgam9pLmZ1bmMoKSxcbiAgKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVsYXRpb25zaGlwID0gYmFzZUZpZWxkLmtleXMoe1xuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3JlbGF0aW9uc2hpcCcpLnJlcXVpcmVkKCksXG4gIGhhc01hbnk6IGpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gIHJlbGF0aW9uVG86IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgam9pLmFycmF5KCkuaXRlbXMoam9pLnN0cmluZygpKSxcbiAgKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIG1heERlcHRoOiBqb2kubnVtYmVyKCksXG4gIGZpbHRlck9wdGlvbnM6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLm9iamVjdCgpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG4gIGRlZmF1bHRWYWx1ZTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBhZG1pbjogYmFzZUFkbWluRmllbGRzLmtleXMoe1xuICAgIGlzU29ydGFibGU6IGpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gICAgYWxsb3dDcmVhdGU6IGpvaS5ib29sZWFuKCkuZGVmYXVsdCh0cnVlKSxcbiAgfSksXG4gIG1pbjogam9pLm51bWJlcigpXG4gICAgLndoZW4oJ2hhc01hbnknLCB7IGlzOiBqb2kubm90KHRydWUpLCB0aGVuOiBqb2kuZm9yYmlkZGVuKCkgfSlcbiAgICAud2FybmluZygnZGVwcmVjYXRlZCcsIHsgbWVzc2FnZTogJ1VzZSBtaW5Sb3dzIGluc3RlYWQuJyB9KSxcbiAgbWF4OiBqb2kubnVtYmVyKClcbiAgICAud2hlbignaGFzTWFueScsIHsgaXM6IGpvaS5ub3QodHJ1ZSksIHRoZW46IGpvaS5mb3JiaWRkZW4oKSB9KVxuICAgIC53YXJuaW5nKCdkZXByZWNhdGVkJywgeyBtZXNzYWdlOiAnVXNlIG1heFJvd3MgaW5zdGVhZC4nIH0pLFxuICBtaW5Sb3dzOiBqb2kubnVtYmVyKClcbiAgICAud2hlbignaGFzTWFueScsIHsgaXM6IGpvaS5ub3QodHJ1ZSksIHRoZW46IGpvaS5mb3JiaWRkZW4oKSB9KSxcbiAgbWF4Um93czogam9pLm51bWJlcigpXG4gICAgLndoZW4oJ2hhc01hbnknLCB7IGlzOiBqb2kubm90KHRydWUpLCB0aGVuOiBqb2kuZm9yYmlkZGVuKCkgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGJsb2NrcyA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCdibG9ja3MnKS5yZXF1aXJlZCgpLFxuICBtaW5Sb3dzOiBqb2kubnVtYmVyKCksXG4gIG1heFJvd3M6IGpvaS5udW1iZXIoKSxcbiAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gIGxhYmVsczogam9pLm9iamVjdCh7XG4gICAgc2luZ3VsYXI6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuc3RyaW5nKCksXG4gICAgICBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIFtqb2kuc3RyaW5nKCldKSxcbiAgICApLFxuICAgIHBsdXJhbDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICAgICksXG4gIH0pLFxuICBibG9ja3M6IGpvaS5hcnJheSgpLml0ZW1zKFxuICAgIGpvaS5vYmplY3Qoe1xuICAgICAgc2x1Zzogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICBpbWFnZVVSTDogam9pLnN0cmluZygpLFxuICAgICAgaW1hZ2VBbHRUZXh0OiBqb2kuc3RyaW5nKCksXG4gICAgICBpbnRlcmZhY2VOYW1lOiBqb2kuc3RyaW5nKCksXG4gICAgICBncmFwaFFMOiBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgIHNpbmd1bGFyTmFtZTogam9pLnN0cmluZygpLFxuICAgICAgfSksXG4gICAgICBsYWJlbHM6IGpvaS5vYmplY3Qoe1xuICAgICAgICBzaW5ndWxhcjogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgICAgICBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgICAgICksXG4gICAgICAgIHBsdXJhbDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgICAgICBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgICAgICksXG4gICAgICB9KSxcbiAgICAgIGZpZWxkczogam9pLmFycmF5KCkuaXRlbXMoam9pLmxpbmsoJyNmaWVsZCcpKSxcbiAgICB9KSxcbiAgKS5yZXF1aXJlZCgpLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLmFycmF5KCkuaXRlbXMoam9pLm9iamVjdCgpKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxufSk7XG5cbmV4cG9ydCBjb25zdCByaWNoVGV4dCA9IGJhc2VGaWVsZC5rZXlzKHtcbiAgdHlwZTogam9pLnN0cmluZygpLnZhbGlkKCdyaWNoVGV4dCcpLnJlcXVpcmVkKCksXG4gIG5hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLmFycmF5KCkuaXRlbXMoam9pLm9iamVjdCgpKSxcbiAgICBqb2kuZnVuYygpLFxuICApLFxuICBhZG1pbjogYmFzZUFkbWluRmllbGRzLmtleXMoe1xuICAgIHBsYWNlaG9sZGVyOiBqb2kuc3RyaW5nKCksXG4gICAgaGlkZUd1dHRlcjogam9pLmJvb2xlYW4oKS5kZWZhdWx0KHRydWUpLFxuICAgIGVsZW1lbnRzOiBqb2kuYXJyYXkoKS5pdGVtcyhcbiAgICAgIGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgICAgam9pLm9iamVjdCh7XG4gICAgICAgICAgbmFtZTogam9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgQnV0dG9uOiBjb21wb25lbnRTY2hlbWEsXG4gICAgICAgICAgRWxlbWVudDogY29tcG9uZW50U2NoZW1hLFxuICAgICAgICAgIHBsdWdpbnM6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudFNjaGVtYSksXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICApLFxuICAgIGxlYXZlczogam9pLmFycmF5KCkuaXRlbXMoXG4gICAgICBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICBqb2kuc3RyaW5nKCksXG4gICAgICAgIGpvaS5vYmplY3Qoe1xuICAgICAgICAgIG5hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgIEJ1dHRvbjogY29tcG9uZW50U2NoZW1hLFxuICAgICAgICAgIExlYWY6IGNvbXBvbmVudFNjaGVtYSxcbiAgICAgICAgICBwbHVnaW5zOiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnRTY2hlbWEpLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgKSxcbiAgICB1cGxvYWQ6IGpvaS5vYmplY3Qoe1xuICAgICAgY29sbGVjdGlvbnM6IGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICBmaWVsZHM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5saW5rKCcjZmllbGQnKSksXG4gICAgICB9KSksXG4gICAgfSksXG4gICAgbGluazogam9pLm9iamVjdCh7XG4gICAgICBmaWVsZHM6IGpvaS5hbHRlcm5hdGl2ZXMoXG4gICAgICAgIGpvaS5hcnJheSgpLml0ZW1zKGpvaS5saW5rKCcjZmllbGQnKSksXG4gICAgICAgIGpvaS5mdW5jKCksXG4gICAgICApLFxuICAgIH0pLFxuICAgIHJ0bDogam9pLmJvb2xlYW4oKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRhdGUgPSBiYXNlRmllbGQua2V5cyh7XG4gIHR5cGU6IGpvaS5zdHJpbmcoKS52YWxpZCgnZGF0ZScpLnJlcXVpcmVkKCksXG4gIG5hbWU6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBkZWZhdWx0VmFsdWU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGpvaS5mdW5jKCksXG4gICksXG4gIGFkbWluOiBiYXNlQWRtaW5GaWVsZHMua2V5cyh7XG4gICAgcGxhY2Vob2xkZXI6IGpvaS5zdHJpbmcoKSxcbiAgICBkYXRlOiBqb2kub2JqZWN0KHtcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IGpvaS5zdHJpbmcoKSxcbiAgICAgIHBpY2tlckFwcGVhcmFuY2U6IGpvaS5zdHJpbmcoKSxcbiAgICAgIG1pbkRhdGU6IGpvaS5kYXRlKCksXG4gICAgICBtYXhEYXRlOiBqb2kuZGF0ZSgpLFxuICAgICAgbWluVGltZTogam9pLmRhdGUoKSxcbiAgICAgIG1heFRpbWU6IGpvaS5kYXRlKCksXG4gICAgICB0aW1lSW50ZXJ2YWxzOiBqb2kubnVtYmVyKCksXG4gICAgICB0aW1lRm9ybWF0OiBqb2kuc3RyaW5nKCksXG4gICAgICBtb250aHNUb1Nob3c6IGpvaS5udW1iZXIoKSxcbiAgICB9KSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHVpID0gam9pLm9iamVjdCgpLmtleXMoe1xuICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICApLFxuICB0eXBlOiBqb2kuc3RyaW5nKCkudmFsaWQoJ3VpJykucmVxdWlyZWQoKSxcbiAgYWRtaW46IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICBwb3NpdGlvbjogam9pLnN0cmluZygpLnZhbGlkKCdzaWRlYmFyJyksXG4gICAgd2lkdGg6IGpvaS5zdHJpbmcoKSxcbiAgICBjb25kaXRpb246IGpvaS5mdW5jKCksXG4gICAgY29tcG9uZW50czogam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgQ2VsbDogY29tcG9uZW50U2NoZW1hLFxuICAgICAgRmllbGQ6IGNvbXBvbmVudFNjaGVtYSxcbiAgICB9KS5kZWZhdWx0KHt9KSxcbiAgfSkuZGVmYXVsdCgpLFxuICBjdXN0b206IGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgam9pLmFueSgpKSxcbn0pO1xuXG5jb25zdCBmaWVsZFNjaGVtYSA9IGpvaS5hbHRlcm5hdGl2ZXMoKVxuICAudHJ5KFxuICAgIHRleHQsXG4gICAgbnVtYmVyLFxuICAgIHRleHRhcmVhLFxuICAgIGVtYWlsLFxuICAgIGNvZGUsXG4gICAganNvbixcbiAgICBzZWxlY3QsXG4gICAgZ3JvdXAsXG4gICAgYXJyYXksXG4gICAgcm93LFxuICAgIGNvbGxhcHNpYmxlLFxuICAgIHRhYnMsXG4gICAgcmFkaW8sXG4gICAgcmVsYXRpb25zaGlwLFxuICAgIGNoZWNrYm94LFxuICAgIHVwbG9hZCxcbiAgICByaWNoVGV4dCxcbiAgICBibG9ja3MsXG4gICAgZGF0ZSxcbiAgICBwb2ludCxcbiAgICB1aSxcbiAgKVxuICAuaWQoJ2ZpZWxkJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZpZWxkU2NoZW1hO1xuIl0sIm5hbWVzIjpbImpvaSIsImNvbXBvbmVudFNjaGVtYSIsImJhc2VBZG1pbkNvbXBvbmVudEZpZWxkcyIsIm9iamVjdCIsImtleXMiLCJDZWxsIiwiRmllbGQiLCJGaWx0ZXIiLCJkZWZhdWx0IiwiYmFzZUFkbWluRmllbGRzIiwiZGVzY3JpcHRpb24iLCJhbHRlcm5hdGl2ZXMiLCJ0cnkiLCJzdHJpbmciLCJwYXR0ZXJuIiwicG9zaXRpb24iLCJ2YWxpZCIsIndpZHRoIiwic3R5bGUiLCJ1bmtub3duIiwiY2xhc3NOYW1lIiwicmVhZE9ubHkiLCJib29sZWFuIiwiaW5pdENvbGxhcHNlZCIsImhpZGRlbiIsImRpc2FibGVkIiwiZGlzYWJsZUJ1bGtFZGl0IiwiY29uZGl0aW9uIiwiZnVuYyIsImNvbXBvbmVudHMiLCJiYXNlRmllbGQiLCJsYWJlbCIsInJlcXVpcmVkIiwic2F2ZVRvSldUIiwidW5pcXVlIiwibG9jYWxpemVkIiwiaW5kZXgiLCJ2YWxpZGF0ZSIsImFjY2VzcyIsImNyZWF0ZSIsInJlYWQiLCJ1cGRhdGUiLCJob29rcyIsImJlZm9yZVZhbGlkYXRlIiwiYXJyYXkiLCJpdGVtcyIsImJlZm9yZUNoYW5nZSIsImFmdGVyQ2hhbmdlIiwiYWZ0ZXJSZWFkIiwiYWRtaW4iLCJjdXN0b20iLCJhbnkiLCJpZEZpZWxkIiwibmFtZSIsInR5cGUiLCJub3QiLCJpbnZhbGlkIiwidGV4dCIsImRlZmF1bHRWYWx1ZSIsIm1pbkxlbmd0aCIsIm51bWJlciIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwiYXV0b0NvbXBsZXRlIiwicnRsIiwibWluIiwibWF4Iiwic3RlcCIsImhhc01hbnkiLCJtaW5Sb3dzIiwid2hlbiIsImlzIiwidGhlbiIsImZvcmJpZGRlbiIsIm1heFJvd3MiLCJ0ZXh0YXJlYSIsInJvd3MiLCJlbWFpbCIsImNvZGUiLCJsYW5ndWFnZSIsImVkaXRvck9wdGlvbnMiLCJqc29uIiwic2VsZWN0Iiwib3B0aW9ucyIsInZhbHVlIiwiYWxsb3ciLCJpc0NsZWFyYWJsZSIsImlzU29ydGFibGUiLCJyYWRpbyIsImxheW91dCIsInJvdyIsImZpZWxkcyIsImxpbmsiLCJjb2xsYXBzaWJsZSIsInRhYiIsImV4aXN0IiwiaW50ZXJmYWNlTmFtZSIsInRhYnMiLCJncm91cCIsImhpZGVHdXR0ZXIiLCJsYWJlbHMiLCJzaW5ndWxhciIsInBsdXJhbCIsIlJvd0xhYmVsIiwidXBsb2FkIiwicmVsYXRpb25UbyIsIm1heERlcHRoIiwiZmlsdGVyT3B0aW9ucyIsImNoZWNrYm94IiwicG9pbnQiLCJyZWxhdGlvbnNoaXAiLCJhbGxvd0NyZWF0ZSIsIndhcm5pbmciLCJtZXNzYWdlIiwiYmxvY2tzIiwic2x1ZyIsImltYWdlVVJMIiwiaW1hZ2VBbHRUZXh0IiwiZ3JhcGhRTCIsInNpbmd1bGFyTmFtZSIsInJpY2hUZXh0IiwiZWxlbWVudHMiLCJCdXR0b24iLCJFbGVtZW50IiwicGx1Z2lucyIsImxlYXZlcyIsIkxlYWYiLCJjb2xsZWN0aW9ucyIsImRhdGUiLCJkaXNwbGF5Rm9ybWF0IiwicGlja2VyQXBwZWFyYW5jZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwibWluVGltZSIsIm1heFRpbWUiLCJ0aW1lSW50ZXJ2YWxzIiwidGltZUZvcm1hdCIsIm1vbnRoc1RvU2hvdyIsInVpIiwiZmll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