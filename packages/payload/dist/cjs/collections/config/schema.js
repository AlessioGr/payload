"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _joi = /*#__PURE__*/ _interop_require_default(require("joi"));
var _componentSchema = require("../../utilities/componentSchema");
var _schema = require("../../config/schema");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var strategyBaseSchema = _joi.default.object().keys({
    refresh: _joi.default.boolean(),
    logout: _joi.default.boolean()
});
var collectionSchema = _joi.default.object().keys({
    slug: _joi.default.string().required(),
    labels: _joi.default.object({
        singular: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ])),
        plural: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ]))
    }),
    access: _joi.default.object({
        create: _joi.default.func(),
        read: _joi.default.func(),
        readVersions: _joi.default.func(),
        update: _joi.default.func(),
        delete: _joi.default.func(),
        unlock: _joi.default.func(),
        admin: _joi.default.func()
    }),
    defaultSort: _joi.default.string(),
    graphQL: _joi.default.alternatives().try(_joi.default.object().keys({
        singularName: _joi.default.string(),
        pluralName: _joi.default.string()
    }), _joi.default.boolean()),
    typescript: _joi.default.object().keys({
        interface: _joi.default.string()
    }),
    timestamps: _joi.default.boolean(),
    admin: _joi.default.object({
        hidden: _joi.default.alternatives().try(_joi.default.boolean(), _joi.default.func()),
        useAsTitle: _joi.default.string(),
        defaultColumns: _joi.default.array().items(_joi.default.string()),
        listSearchableFields: _joi.default.array().items(_joi.default.string()),
        group: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ])),
        description: _joi.default.alternatives().try(_joi.default.string(), _componentSchema.componentSchema),
        hooks: _joi.default.object({
            beforeDuplicate: _joi.default.func()
        }),
        enableRichTextLink: _joi.default.boolean(),
        enableRichTextRelationship: _joi.default.boolean(),
        components: _joi.default.object({
            views: _joi.default.object({
                List: _componentSchema.componentSchema,
                Edit: _componentSchema.componentSchema
            }),
            edit: _joi.default.object({
                SaveButton: _componentSchema.componentSchema,
                PublishButton: _componentSchema.componentSchema,
                SaveDraftButton: _componentSchema.componentSchema,
                PreviewButton: _componentSchema.componentSchema
            }),
            BeforeList: _joi.default.array().items(_componentSchema.componentSchema),
            BeforeListTable: _joi.default.array().items(_componentSchema.componentSchema),
            AfterListTable: _joi.default.array().items(_componentSchema.componentSchema),
            AfterList: _joi.default.array().items(_componentSchema.componentSchema)
        }),
        pagination: _joi.default.object({
            defaultLimit: _joi.default.number(),
            limits: _joi.default.array().items(_joi.default.number())
        }),
        preview: _joi.default.func(),
        disableDuplicate: _joi.default.bool(),
        hideAPIURL: _joi.default.bool()
    }),
    fields: _joi.default.array(),
    indexes: _joi.default.array().items(_joi.default.object().keys({
        fields: _joi.default.object().required(),
        options: _joi.default.object()
    })),
    hooks: _joi.default.object({
        beforeOperation: _joi.default.array().items(_joi.default.func()),
        beforeValidate: _joi.default.array().items(_joi.default.func()),
        beforeChange: _joi.default.array().items(_joi.default.func()),
        afterChange: _joi.default.array().items(_joi.default.func()),
        beforeRead: _joi.default.array().items(_joi.default.func()),
        afterRead: _joi.default.array().items(_joi.default.func()),
        beforeDelete: _joi.default.array().items(_joi.default.func()),
        afterDelete: _joi.default.array().items(_joi.default.func()),
        afterOperation: _joi.default.array().items(_joi.default.func()),
        beforeLogin: _joi.default.array().items(_joi.default.func()),
        afterLogin: _joi.default.array().items(_joi.default.func()),
        afterLogout: _joi.default.array().items(_joi.default.func()),
        afterMe: _joi.default.array().items(_joi.default.func()),
        afterRefresh: _joi.default.array().items(_joi.default.func()),
        afterForgotPassword: _joi.default.array().items(_joi.default.func())
    }),
    endpoints: _schema.endpointsSchema,
    auth: _joi.default.alternatives().try(_joi.default.object({
        tokenExpiration: _joi.default.number(),
        depth: _joi.default.number(),
        verify: _joi.default.alternatives().try(_joi.default.boolean(), _joi.default.object().keys({
            generateEmailHTML: _joi.default.func(),
            generateEmailSubject: _joi.default.func()
        })),
        lockTime: _joi.default.number(),
        useAPIKey: _joi.default.boolean(),
        cookies: _joi.default.object().keys({
            secure: _joi.default.boolean(),
            sameSite: _joi.default.string(),
            domain: _joi.default.string()
        }),
        forgotPassword: _joi.default.object().keys({
            generateEmailHTML: _joi.default.func(),
            generateEmailSubject: _joi.default.func()
        }),
        maxLoginAttempts: _joi.default.number(),
        disableLocalStrategy: _joi.default.boolean().valid(true),
        removeTokenFromResponses: _joi.default.boolean().valid(true),
        strategies: _joi.default.array().items(_joi.default.alternatives().try(strategyBaseSchema.keys({
            name: _joi.default.string().required(),
            strategy: _joi.default.func().maxArity(1).required()
        }), strategyBaseSchema.keys({
            name: _joi.default.string(),
            strategy: _joi.default.object().required()
        })))
    }), _joi.default.boolean()),
    versions: _joi.default.alternatives().try(_joi.default.object({
        maxPerDoc: _joi.default.number(),
        drafts: _joi.default.alternatives().try(_joi.default.object({
            autosave: _joi.default.alternatives().try(_joi.default.boolean(), _joi.default.object({
                interval: _joi.default.number()
            }))
        }), _joi.default.boolean())
    }), _joi.default.boolean()),
    upload: _joi.default.alternatives().try(_joi.default.object({
        staticURL: _joi.default.string(),
        staticDir: _joi.default.string(),
        disableLocalStorage: _joi.default.bool(),
        useTempFiles: _joi.default.bool(),
        tempFileDir: _joi.default.string(),
        adminThumbnail: _joi.default.alternatives().try(_joi.default.string(), _joi.default.func()),
        imageSizes: _joi.default.array().items(_joi.default.object().keys({
            name: _joi.default.string(),
            width: _joi.default.number().integer().allow(null),
            height: _joi.default.number().integer().allow(null),
            crop: _joi.default.string()
        }).unknown()),
        mimeTypes: _joi.default.array().items(_joi.default.string()),
        staticOptions: _joi.default.object(),
        handlers: _joi.default.array().items(_joi.default.func()),
        resizeOptions: _joi.default.object().keys({
            width: _joi.default.number().allow(null),
            height: _joi.default.number().allow(null),
            fit: _joi.default.string(),
            position: _joi.default.alternatives().try(_joi.default.string(), _joi.default.number()),
            background: _joi.default.string(),
            kernel: _joi.default.string(),
            withoutEnlargement: _joi.default.bool(),
            fastShrinkOnLoad: _joi.default.bool()
        }).allow(null),
        formatOptions: _joi.default.object().keys({
            format: _joi.default.string(),
            options: _joi.default.object()
        }),
        trimOptions: _joi.default.alternatives().try(_joi.default.object().keys({
            format: _joi.default.string(),
            options: _joi.default.object()
        }), _joi.default.string(), _joi.default.number())
    }), _joi.default.boolean()),
    custom: _joi.default.object().pattern(_joi.default.string(), _joi.default.any())
});
var _default = collectionSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9jb25maWcvc2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqb2kgZnJvbSAnam9pJztcbmltcG9ydCB7IGNvbXBvbmVudFNjaGVtYSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jb21wb25lbnRTY2hlbWEnO1xuaW1wb3J0IHsgZW5kcG9pbnRzU2NoZW1hIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NjaGVtYSc7XG5cbmNvbnN0IHN0cmF0ZWd5QmFzZVNjaGVtYSA9IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgcmVmcmVzaDogam9pLmJvb2xlYW4oKSxcbiAgbG9nb3V0OiBqb2kuYm9vbGVhbigpLFxufSk7XG5cbmNvbnN0IGNvbGxlY3Rpb25TY2hlbWEgPSBqb2kub2JqZWN0KCkua2V5cyh7XG4gIHNsdWc6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBsYWJlbHM6IGpvaS5vYmplY3Qoe1xuICAgIHNpbmd1bGFyOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgam9pLnN0cmluZygpLFxuICAgICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgKSxcbiAgICBwbHVyYWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuc3RyaW5nKCksXG4gICAgICBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIFtqb2kuc3RyaW5nKCldKSxcbiAgICApLFxuICB9KSxcbiAgYWNjZXNzOiBqb2kub2JqZWN0KHtcbiAgICBjcmVhdGU6IGpvaS5mdW5jKCksXG4gICAgcmVhZDogam9pLmZ1bmMoKSxcbiAgICByZWFkVmVyc2lvbnM6IGpvaS5mdW5jKCksXG4gICAgdXBkYXRlOiBqb2kuZnVuYygpLFxuICAgIGRlbGV0ZTogam9pLmZ1bmMoKSxcbiAgICB1bmxvY2s6IGpvaS5mdW5jKCksXG4gICAgYWRtaW46IGpvaS5mdW5jKCksXG4gIH0pLFxuICBkZWZhdWx0U29ydDogam9pLnN0cmluZygpLFxuICBncmFwaFFMOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5vYmplY3QoKS5rZXlzKFxuICAgICAge1xuICAgICAgICBzaW5ndWxhck5hbWU6IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgcGx1cmFsTmFtZTogam9pLnN0cmluZygpLFxuICAgICAgfSxcbiAgICApLFxuICAgIGpvaS5ib29sZWFuKCksXG4gICksXG4gIHR5cGVzY3JpcHQ6IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICBpbnRlcmZhY2U6IGpvaS5zdHJpbmcoKSxcbiAgfSksXG4gIHRpbWVzdGFtcHM6IGpvaS5ib29sZWFuKCksXG4gIGFkbWluOiBqb2kub2JqZWN0KHtcbiAgICBoaWRkZW46IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuYm9vbGVhbigpLFxuICAgICAgam9pLmZ1bmMoKSxcbiAgICApLFxuICAgIHVzZUFzVGl0bGU6IGpvaS5zdHJpbmcoKSxcbiAgICBkZWZhdWx0Q29sdW1uczogam9pLmFycmF5KCkuaXRlbXMoam9pLnN0cmluZygpKSxcbiAgICBsaXN0U2VhcmNoYWJsZUZpZWxkczogam9pLmFycmF5KCkuaXRlbXMoam9pLnN0cmluZygpKSxcbiAgICBncm91cDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICAgICksXG4gICAgZGVzY3JpcHRpb246IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuc3RyaW5nKCksXG4gICAgICBjb21wb25lbnRTY2hlbWEsXG4gICAgKSxcbiAgICBob29rczogam9pLm9iamVjdCh7XG4gICAgICBiZWZvcmVEdXBsaWNhdGU6IGpvaS5mdW5jKCksXG4gICAgfSksXG4gICAgZW5hYmxlUmljaFRleHRMaW5rOiBqb2kuYm9vbGVhbigpLFxuICAgIGVuYWJsZVJpY2hUZXh0UmVsYXRpb25zaGlwOiBqb2kuYm9vbGVhbigpLFxuICAgIGNvbXBvbmVudHM6IGpvaS5vYmplY3Qoe1xuICAgICAgdmlld3M6IGpvaS5vYmplY3Qoe1xuICAgICAgICBMaXN0OiBjb21wb25lbnRTY2hlbWEsXG4gICAgICAgIEVkaXQ6IGNvbXBvbmVudFNjaGVtYSxcbiAgICAgIH0pLFxuICAgICAgZWRpdDogam9pLm9iamVjdCh7XG4gICAgICAgIFNhdmVCdXR0b246IGNvbXBvbmVudFNjaGVtYSxcbiAgICAgICAgUHVibGlzaEJ1dHRvbjogY29tcG9uZW50U2NoZW1hLFxuICAgICAgICBTYXZlRHJhZnRCdXR0b246IGNvbXBvbmVudFNjaGVtYSxcbiAgICAgICAgUHJldmlld0J1dHRvbjogY29tcG9uZW50U2NoZW1hLFxuICAgICAgfSksXG4gICAgICBCZWZvcmVMaXN0OiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnRTY2hlbWEpLFxuICAgICAgQmVmb3JlTGlzdFRhYmxlOiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnRTY2hlbWEpLFxuICAgICAgQWZ0ZXJMaXN0VGFibGU6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudFNjaGVtYSksXG4gICAgICBBZnRlckxpc3Q6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudFNjaGVtYSksXG4gICAgfSksXG4gICAgcGFnaW5hdGlvbjogam9pLm9iamVjdCh7XG4gICAgICBkZWZhdWx0TGltaXQ6IGpvaS5udW1iZXIoKSxcbiAgICAgIGxpbWl0czogam9pLmFycmF5KCkuaXRlbXMoam9pLm51bWJlcigpKSxcbiAgICB9KSxcbiAgICBwcmV2aWV3OiBqb2kuZnVuYygpLFxuICAgIGRpc2FibGVEdXBsaWNhdGU6IGpvaS5ib29sKCksXG4gICAgaGlkZUFQSVVSTDogam9pLmJvb2woKSxcbiAgfSksXG4gIGZpZWxkczogam9pLmFycmF5KCksXG4gIGluZGV4ZXM6IGpvaS5hcnJheSgpLml0ZW1zKFxuICAgIGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIGZpZWxkczogam9pLm9iamVjdCgpLnJlcXVpcmVkKCksXG4gICAgICBvcHRpb25zOiBqb2kub2JqZWN0KCksXG4gICAgfSksXG4gICksXG4gIGhvb2tzOiBqb2kub2JqZWN0KHtcbiAgICBiZWZvcmVPcGVyYXRpb246IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGJlZm9yZVZhbGlkYXRlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBiZWZvcmVDaGFuZ2U6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGFmdGVyQ2hhbmdlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBiZWZvcmVSZWFkOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBhZnRlclJlYWQ6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGJlZm9yZURlbGV0ZTogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gICAgYWZ0ZXJEZWxldGU6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGFmdGVyT3BlcmF0aW9uOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBiZWZvcmVMb2dpbjogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gICAgYWZ0ZXJMb2dpbjogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gICAgYWZ0ZXJMb2dvdXQ6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGFmdGVyTWU6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGFmdGVyUmVmcmVzaDogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gICAgYWZ0ZXJGb3Jnb3RQYXNzd29yZDogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gIH0pLFxuICBlbmRwb2ludHM6IGVuZHBvaW50c1NjaGVtYSxcbiAgYXV0aDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kub2JqZWN0KHtcbiAgICAgIHRva2VuRXhwaXJhdGlvbjogam9pLm51bWJlcigpLFxuICAgICAgZGVwdGg6IGpvaS5udW1iZXIoKSxcbiAgICAgIHZlcmlmeTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgICAgam9pLmJvb2xlYW4oKSxcbiAgICAgICAgam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICAgIGdlbmVyYXRlRW1haWxIVE1MOiBqb2kuZnVuYygpLFxuICAgICAgICAgIGdlbmVyYXRlRW1haWxTdWJqZWN0OiBqb2kuZnVuYygpLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBsb2NrVGltZTogam9pLm51bWJlcigpLFxuICAgICAgdXNlQVBJS2V5OiBqb2kuYm9vbGVhbigpLFxuICAgICAgY29va2llczogam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICBzZWN1cmU6IGpvaS5ib29sZWFuKCksXG4gICAgICAgIHNhbWVTaXRlOiBqb2kuc3RyaW5nKCksIC8vIFRPRE86IGFkZCBmdXJ0aGVyIHNwZWNpZmljaXR5IHdpdGggam9pLnhvclxuICAgICAgICBkb21haW46IGpvaS5zdHJpbmcoKSxcbiAgICAgIH0pLFxuICAgICAgZm9yZ290UGFzc3dvcmQ6IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgZ2VuZXJhdGVFbWFpbEhUTUw6IGpvaS5mdW5jKCksXG4gICAgICAgIGdlbmVyYXRlRW1haWxTdWJqZWN0OiBqb2kuZnVuYygpLFxuICAgICAgfSksXG4gICAgICBtYXhMb2dpbkF0dGVtcHRzOiBqb2kubnVtYmVyKCksXG4gICAgICBkaXNhYmxlTG9jYWxTdHJhdGVneTogam9pLmJvb2xlYW4oKS52YWxpZCh0cnVlKSxcbiAgICAgIHJlbW92ZVRva2VuRnJvbVJlc3BvbnNlczogam9pLmJvb2xlYW4oKS52YWxpZCh0cnVlKSxcbiAgICAgIHN0cmF0ZWdpZXM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgIHN0cmF0ZWd5QmFzZVNjaGVtYS5rZXlzKHtcbiAgICAgICAgICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICBzdHJhdGVneTogam9pLmZ1bmMoKVxuICAgICAgICAgICAgLm1heEFyaXR5KDEpXG4gICAgICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgICAgfSksXG4gICAgICAgIHN0cmF0ZWd5QmFzZVNjaGVtYS5rZXlzKHtcbiAgICAgICAgICBuYW1lOiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgc3RyYXRlZ3k6IGpvaS5vYmplY3QoKS5yZXF1aXJlZCgpLFxuICAgICAgICB9KSxcbiAgICAgICkpLFxuICAgIH0pLFxuICAgIGpvaS5ib29sZWFuKCksXG4gICksXG4gIHZlcnNpb25zOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5vYmplY3Qoe1xuICAgICAgbWF4UGVyRG9jOiBqb2kubnVtYmVyKCksXG4gICAgICBkcmFmdHM6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgIGpvaS5vYmplY3Qoe1xuICAgICAgICAgIGF1dG9zYXZlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICAgICAgam9pLmJvb2xlYW4oKSxcbiAgICAgICAgICAgIGpvaS5vYmplY3Qoe1xuICAgICAgICAgICAgICBpbnRlcnZhbDogam9pLm51bWJlcigpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKSxcbiAgICAgICAgfSksXG4gICAgICAgIGpvaS5ib29sZWFuKCksXG4gICAgICApLFxuICAgIH0pLFxuICAgIGpvaS5ib29sZWFuKCksXG4gICksXG4gIHVwbG9hZDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kub2JqZWN0KHtcbiAgICAgIHN0YXRpY1VSTDogam9pLnN0cmluZygpLFxuICAgICAgc3RhdGljRGlyOiBqb2kuc3RyaW5nKCksXG4gICAgICBkaXNhYmxlTG9jYWxTdG9yYWdlOiBqb2kuYm9vbCgpLFxuICAgICAgdXNlVGVtcEZpbGVzOiBqb2kuYm9vbCgpLFxuICAgICAgdGVtcEZpbGVEaXI6IGpvaS5zdHJpbmcoKSxcbiAgICAgIGFkbWluVGh1bWJuYWlsOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICBqb2kuc3RyaW5nKCksXG4gICAgICAgIGpvaS5mdW5jKCksXG4gICAgICApLFxuICAgICAgaW1hZ2VTaXplczogam9pLmFycmF5KCkuaXRlbXMoXG4gICAgICAgIGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgICBuYW1lOiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgd2lkdGg6IGpvaS5udW1iZXIoKS5pbnRlZ2VyKCkuYWxsb3cobnVsbCksXG4gICAgICAgICAgaGVpZ2h0OiBqb2kubnVtYmVyKCkuaW50ZWdlcigpLmFsbG93KG51bGwpLFxuICAgICAgICAgIGNyb3A6IGpvaS5zdHJpbmcoKSwgLy8gVE9ETzogYWRkIGZ1cnRoZXIgc3BlY2lmaWNpdHkgd2l0aCBqb2kueG9yXG4gICAgICAgIH0pLnVua25vd24oKSxcbiAgICAgICksXG4gICAgICBtaW1lVHlwZXM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5zdHJpbmcoKSksXG4gICAgICBzdGF0aWNPcHRpb25zOiBqb2kub2JqZWN0KCksXG4gICAgICBoYW5kbGVyczogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gICAgICByZXNpemVPcHRpb25zOiBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgIHdpZHRoOiBqb2kubnVtYmVyKCkuYWxsb3cobnVsbCksXG4gICAgICAgIGhlaWdodDogam9pLm51bWJlcigpLmFsbG93KG51bGwpLFxuICAgICAgICBmaXQ6IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgcG9zaXRpb246IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgICAgam9pLnN0cmluZygpLFxuICAgICAgICAgIGpvaS5udW1iZXIoKSxcbiAgICAgICAgKSxcbiAgICAgICAgYmFja2dyb3VuZDogam9pLnN0cmluZygpLFxuICAgICAgICBrZXJuZWw6IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgd2l0aG91dEVubGFyZ2VtZW50OiBqb2kuYm9vbCgpLFxuICAgICAgICBmYXN0U2hyaW5rT25Mb2FkOiBqb2kuYm9vbCgpLFxuICAgICAgfSkuYWxsb3cobnVsbCksXG4gICAgICBmb3JtYXRPcHRpb25zOiBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgIGZvcm1hdDogam9pLnN0cmluZygpLFxuICAgICAgICBvcHRpb25zOiBqb2kub2JqZWN0KCksXG4gICAgICB9KSxcbiAgICAgIHRyaW1PcHRpb25zOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgICAgZm9ybWF0OiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgb3B0aW9uczogam9pLm9iamVjdCgpLFxuICAgICAgICB9KSxcbiAgICAgICAgam9pLnN0cmluZygpLFxuICAgICAgICBqb2kubnVtYmVyKCksXG4gICAgICApLFxuICAgIH0pLFxuICAgIGpvaS5ib29sZWFuKCksXG4gICksXG4gIGN1c3RvbTogam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBqb2kuYW55KCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbGxlY3Rpb25TY2hlbWE7XG4iXSwibmFtZXMiOlsic3RyYXRlZ3lCYXNlU2NoZW1hIiwiam9pIiwib2JqZWN0Iiwia2V5cyIsInJlZnJlc2giLCJib29sZWFuIiwibG9nb3V0IiwiY29sbGVjdGlvblNjaGVtYSIsInNsdWciLCJzdHJpbmciLCJyZXF1aXJlZCIsImxhYmVscyIsInNpbmd1bGFyIiwiYWx0ZXJuYXRpdmVzIiwidHJ5IiwicGF0dGVybiIsInBsdXJhbCIsImFjY2VzcyIsImNyZWF0ZSIsImZ1bmMiLCJyZWFkIiwicmVhZFZlcnNpb25zIiwidXBkYXRlIiwiZGVsZXRlIiwidW5sb2NrIiwiYWRtaW4iLCJkZWZhdWx0U29ydCIsImdyYXBoUUwiLCJzaW5ndWxhck5hbWUiLCJwbHVyYWxOYW1lIiwidHlwZXNjcmlwdCIsImludGVyZmFjZSIsInRpbWVzdGFtcHMiLCJoaWRkZW4iLCJ1c2VBc1RpdGxlIiwiZGVmYXVsdENvbHVtbnMiLCJhcnJheSIsIml0ZW1zIiwibGlzdFNlYXJjaGFibGVGaWVsZHMiLCJncm91cCIsImRlc2NyaXB0aW9uIiwiY29tcG9uZW50U2NoZW1hIiwiaG9va3MiLCJiZWZvcmVEdXBsaWNhdGUiLCJlbmFibGVSaWNoVGV4dExpbmsiLCJlbmFibGVSaWNoVGV4dFJlbGF0aW9uc2hpcCIsImNvbXBvbmVudHMiLCJ2aWV3cyIsIkxpc3QiLCJFZGl0IiwiZWRpdCIsIlNhdmVCdXR0b24iLCJQdWJsaXNoQnV0dG9uIiwiU2F2ZURyYWZ0QnV0dG9uIiwiUHJldmlld0J1dHRvbiIsIkJlZm9yZUxpc3QiLCJCZWZvcmVMaXN0VGFibGUiLCJBZnRlckxpc3RUYWJsZSIsIkFmdGVyTGlzdCIsInBhZ2luYXRpb24iLCJkZWZhdWx0TGltaXQiLCJudW1iZXIiLCJsaW1pdHMiLCJwcmV2aWV3IiwiZGlzYWJsZUR1cGxpY2F0ZSIsImJvb2wiLCJoaWRlQVBJVVJMIiwiZmllbGRzIiwiaW5kZXhlcyIsIm9wdGlvbnMiLCJiZWZvcmVPcGVyYXRpb24iLCJiZWZvcmVWYWxpZGF0ZSIsImJlZm9yZUNoYW5nZSIsImFmdGVyQ2hhbmdlIiwiYmVmb3JlUmVhZCIsImFmdGVyUmVhZCIsImJlZm9yZURlbGV0ZSIsImFmdGVyRGVsZXRlIiwiYWZ0ZXJPcGVyYXRpb24iLCJiZWZvcmVMb2dpbiIsImFmdGVyTG9naW4iLCJhZnRlckxvZ291dCIsImFmdGVyTWUiLCJhZnRlclJlZnJlc2giLCJhZnRlckZvcmdvdFBhc3N3b3JkIiwiZW5kcG9pbnRzIiwiZW5kcG9pbnRzU2NoZW1hIiwiYXV0aCIsInRva2VuRXhwaXJhdGlvbiIsImRlcHRoIiwidmVyaWZ5IiwiZ2VuZXJhdGVFbWFpbEhUTUwiLCJnZW5lcmF0ZUVtYWlsU3ViamVjdCIsImxvY2tUaW1lIiwidXNlQVBJS2V5IiwiY29va2llcyIsInNlY3VyZSIsInNhbWVTaXRlIiwiZG9tYWluIiwiZm9yZ290UGFzc3dvcmQiLCJtYXhMb2dpbkF0dGVtcHRzIiwiZGlzYWJsZUxvY2FsU3RyYXRlZ3kiLCJ2YWxpZCIsInJlbW92ZVRva2VuRnJvbVJlc3BvbnNlcyIsInN0cmF0ZWdpZXMiLCJuYW1lIiwic3RyYXRlZ3kiLCJtYXhBcml0eSIsInZlcnNpb25zIiwibWF4UGVyRG9jIiwiZHJhZnRzIiwiYXV0b3NhdmUiLCJpbnRlcnZhbCIsInVwbG9hZCIsInN0YXRpY1VSTCIsInN0YXRpY0RpciIsImRpc2FibGVMb2NhbFN0b3JhZ2UiLCJ1c2VUZW1wRmlsZXMiLCJ0ZW1wRmlsZURpciIsImFkbWluVGh1bWJuYWlsIiwiaW1hZ2VTaXplcyIsIndpZHRoIiwiaW50ZWdlciIsImFsbG93IiwiaGVpZ2h0IiwiY3JvcCIsInVua25vd24iLCJtaW1lVHlwZXMiLCJzdGF0aWNPcHRpb25zIiwiaGFuZGxlcnMiLCJyZXNpemVPcHRpb25zIiwiZml0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwia2VybmVsIiwid2l0aG91dEVubGFyZ2VtZW50IiwiZmFzdFNocmlua09uTG9hZCIsImZvcm1hdE9wdGlvbnMiLCJmb3JtYXQiLCJ0cmltT3B0aW9ucyIsImN1c3RvbSIsImFueSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFnT0E7OztlQUFBOzs7MERBaE9nQjsrQkFDZ0I7c0JBQ0E7Ozs7OztBQUVoQyxJQUFNQSxxQkFBcUJDLFlBQUcsQ0FBQ0MsTUFBTSxHQUFHQyxJQUFJLENBQUM7SUFDM0NDLFNBQVNILFlBQUcsQ0FBQ0ksT0FBTztJQUNwQkMsUUFBUUwsWUFBRyxDQUFDSSxPQUFPO0FBQ3JCO0FBRUEsSUFBTUUsbUJBQW1CTixZQUFHLENBQUNDLE1BQU0sR0FBR0MsSUFBSSxDQUFDO0lBQ3pDSyxNQUFNUCxZQUFHLENB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