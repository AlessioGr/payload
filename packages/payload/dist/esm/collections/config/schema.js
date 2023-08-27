import joi from "joi";
import { componentSchema } from "../../utilities/componentSchema";
import { endpointsSchema } from "../../config/schema";
var strategyBaseSchema = joi.object().keys({
    refresh: joi.boolean(),
    logout: joi.boolean()
});
var collectionSchema = joi.object().keys({
    slug: joi.string().required(),
    labels: joi.object({
        singular: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
            joi.string()
        ])),
        plural: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
            joi.string()
        ]))
    }),
    access: joi.object({
        create: joi.func(),
        read: joi.func(),
        readVersions: joi.func(),
        update: joi.func(),
        delete: joi.func(),
        unlock: joi.func(),
        admin: joi.func()
    }),
    defaultSort: joi.string(),
    graphQL: joi.alternatives().try(joi.object().keys({
        singularName: joi.string(),
        pluralName: joi.string()
    }), joi.boolean()),
    typescript: joi.object().keys({
        interface: joi.string()
    }),
    timestamps: joi.boolean(),
    admin: joi.object({
        hidden: joi.alternatives().try(joi.boolean(), joi.func()),
        useAsTitle: joi.string(),
        defaultColumns: joi.array().items(joi.string()),
        listSearchableFields: joi.array().items(joi.string()),
        group: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
            joi.string()
        ])),
        description: joi.alternatives().try(joi.string(), componentSchema),
        hooks: joi.object({
            beforeDuplicate: joi.func()
        }),
        enableRichTextLink: joi.boolean(),
        enableRichTextRelationship: joi.boolean(),
        components: joi.object({
            views: joi.object({
                List: componentSchema,
                Edit: componentSchema
            }),
            edit: joi.object({
                SaveButton: componentSchema,
                PublishButton: componentSchema,
                SaveDraftButton: componentSchema,
                PreviewButton: componentSchema
            }),
            BeforeList: joi.array().items(componentSchema),
            BeforeListTable: joi.array().items(componentSchema),
            AfterListTable: joi.array().items(componentSchema),
            AfterList: joi.array().items(componentSchema)
        }),
        pagination: joi.object({
            defaultLimit: joi.number(),
            limits: joi.array().items(joi.number())
        }),
        preview: joi.func(),
        disableDuplicate: joi.bool(),
        hideAPIURL: joi.bool()
    }),
    fields: joi.array(),
    indexes: joi.array().items(joi.object().keys({
        fields: joi.object().required(),
        options: joi.object()
    })),
    hooks: joi.object({
        beforeOperation: joi.array().items(joi.func()),
        beforeValidate: joi.array().items(joi.func()),
        beforeChange: joi.array().items(joi.func()),
        afterChange: joi.array().items(joi.func()),
        beforeRead: joi.array().items(joi.func()),
        afterRead: joi.array().items(joi.func()),
        beforeDelete: joi.array().items(joi.func()),
        afterDelete: joi.array().items(joi.func()),
        afterOperation: joi.array().items(joi.func()),
        beforeLogin: joi.array().items(joi.func()),
        afterLogin: joi.array().items(joi.func()),
        afterLogout: joi.array().items(joi.func()),
        afterMe: joi.array().items(joi.func()),
        afterRefresh: joi.array().items(joi.func()),
        afterForgotPassword: joi.array().items(joi.func())
    }),
    endpoints: endpointsSchema,
    auth: joi.alternatives().try(joi.object({
        tokenExpiration: joi.number(),
        depth: joi.number(),
        verify: joi.alternatives().try(joi.boolean(), joi.object().keys({
            generateEmailHTML: joi.func(),
            generateEmailSubject: joi.func()
        })),
        lockTime: joi.number(),
        useAPIKey: joi.boolean(),
        cookies: joi.object().keys({
            secure: joi.boolean(),
            sameSite: joi.string(),
            domain: joi.string()
        }),
        forgotPassword: joi.object().keys({
            generateEmailHTML: joi.func(),
            generateEmailSubject: joi.func()
        }),
        maxLoginAttempts: joi.number(),
        disableLocalStrategy: joi.boolean().valid(true),
        removeTokenFromResponses: joi.boolean().valid(true),
        strategies: joi.array().items(joi.alternatives().try(strategyBaseSchema.keys({
            name: joi.string().required(),
            strategy: joi.func().maxArity(1).required()
        }), strategyBaseSchema.keys({
            name: joi.string(),
            strategy: joi.object().required()
        })))
    }), joi.boolean()),
    versions: joi.alternatives().try(joi.object({
        maxPerDoc: joi.number(),
        drafts: joi.alternatives().try(joi.object({
            autosave: joi.alternatives().try(joi.boolean(), joi.object({
                interval: joi.number()
            }))
        }), joi.boolean())
    }), joi.boolean()),
    upload: joi.alternatives().try(joi.object({
        staticURL: joi.string(),
        staticDir: joi.string(),
        disableLocalStorage: joi.bool(),
        useTempFiles: joi.bool(),
        tempFileDir: joi.string(),
        adminThumbnail: joi.alternatives().try(joi.string(), joi.func()),
        imageSizes: joi.array().items(joi.object().keys({
            name: joi.string(),
            width: joi.number().integer().allow(null),
            height: joi.number().integer().allow(null),
            crop: joi.string()
        }).unknown()),
        mimeTypes: joi.array().items(joi.string()),
        staticOptions: joi.object(),
        handlers: joi.array().items(joi.func()),
        resizeOptions: joi.object().keys({
            width: joi.number().allow(null),
            height: joi.number().allow(null),
            fit: joi.string(),
            position: joi.alternatives().try(joi.string(), joi.number()),
            background: joi.string(),
            kernel: joi.string(),
            withoutEnlargement: joi.bool(),
            fastShrinkOnLoad: joi.bool()
        }).allow(null),
        formatOptions: joi.object().keys({
            format: joi.string(),
            options: joi.object()
        }),
        trimOptions: joi.alternatives().try(joi.object().keys({
            format: joi.string(),
            options: joi.object()
        }), joi.string(), joi.number())
    }), joi.boolean()),
    custom: joi.object().pattern(joi.string(), joi.any())
});
export default collectionSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9jb25maWcvc2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqb2kgZnJvbSAnam9pJztcbmltcG9ydCB7IGNvbXBvbmVudFNjaGVtYSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jb21wb25lbnRTY2hlbWEnO1xuaW1wb3J0IHsgZW5kcG9pbnRzU2NoZW1hIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NjaGVtYSc7XG5cbmNvbnN0IHN0cmF0ZWd5QmFzZVNjaGVtYSA9IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgcmVmcmVzaDogam9pLmJvb2xlYW4oKSxcbiAgbG9nb3V0OiBqb2kuYm9vbGVhbigpLFxufSk7XG5cbmNvbnN0IGNvbGxlY3Rpb25TY2hlbWEgPSBqb2kub2JqZWN0KCkua2V5cyh7XG4gIHNsdWc6IGpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICBsYWJlbHM6IGpvaS5vYmplY3Qoe1xuICAgIHNpbmd1bGFyOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgam9pLnN0cmluZygpLFxuICAgICAgam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBbam9pLnN0cmluZygpXSksXG4gICAgKSxcbiAgICBwbHVyYWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuc3RyaW5nKCksXG4gICAgICBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIFtqb2kuc3RyaW5nKCldKSxcbiAgICApLFxuICB9KSxcbiAgYWNjZXNzOiBqb2kub2JqZWN0KHtcbiAgICBjcmVhdGU6IGpvaS5mdW5jKCksXG4gICAgcmVhZDogam9pLmZ1bmMoKSxcbiAgICByZWFkVmVyc2lvbnM6IGpvaS5mdW5jKCksXG4gICAgdXBkYXRlOiBqb2kuZnVuYygpLFxuICAgIGRlbGV0ZTogam9pLmZ1bmMoKSxcbiAgICB1bmxvY2s6IGpvaS5mdW5jKCksXG4gICAgYWRtaW46IGpvaS5mdW5jKCksXG4gIH0pLFxuICBkZWZhdWx0U29ydDogam9pLnN0cmluZygpLFxuICBncmFwaFFMOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5vYmplY3QoKS5rZXlzKFxuICAgICAge1xuICAgICAgICBzaW5ndWxhck5hbWU6IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgcGx1cmFsTmFtZTogam9pLnN0cmluZygpLFxuICAgICAgfSxcbiAgICApLFxuICAgIGpvaS5ib29sZWFuKCksXG4gICksXG4gIHR5cGVzY3JpcHQ6IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICBpbnRlcmZhY2U6IGpvaS5zdHJpbmcoKSxcbiAgfSksXG4gIHRpbWVzdGFtcHM6IGpvaS5ib29sZWFuKCksXG4gIGFkbWluOiBqb2kub2JqZWN0KHtcbiAgICBoaWRkZW46IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuYm9vbGVhbigpLFxuICAgICAgam9pLmZ1bmMoKSxcbiAgICApLFxuICAgIHVzZUFzVGl0bGU6IGpvaS5zdHJpbmcoKSxcbiAgICBkZWZhdWx0Q29sdW1uczogam9pLmFycmF5KCkuaXRlbXMoam9pLnN0cmluZygpKSxcbiAgICBsaXN0U2VhcmNoYWJsZUZpZWxkczogam9pLmFycmF5KCkuaXRlbXMoam9pLnN0cmluZygpKSxcbiAgICBncm91cDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICAgICksXG4gICAgZGVzY3JpcHRpb246IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuc3RyaW5nKCksXG4gICAgICBjb21wb25lbnRTY2hlbWEsXG4gICAgKSxcbiAgICBob29rczogam9pLm9iamVjdCh7XG4gICAgICBiZWZvcmVEdXBsaWNhdGU6IGpvaS5mdW5jKCksXG4gICAgfSksXG4gICAgZW5hYmxlUmljaFRleHRMaW5rOiBqb2kuYm9vbGVhbigpLFxuICAgIGVuYWJsZVJpY2hUZXh0UmVsYXRpb25zaGlwOiBqb2kuYm9vbGVhbigpLFxuICAgIGNvbXBvbmVudHM6IGpvaS5vYmplY3Qoe1xuICAgICAgdmlld3M6IGpvaS5vYmplY3Qoe1xuICAgICAgICBMaXN0OiBjb21wb25lbnRTY2hlbWEsXG4gICAgICAgIEVkaXQ6IGNvbXBvbmVudFNjaGVtYSxcbiAgICAgIH0pLFxuICAgICAgZWRpdDogam9pLm9iamVjdCh7XG4gICAgICAgIFNhdmVCdXR0b246IGNvbXBvbmVudFNjaGVtYSxcbiAgICAgICAgUHVibGlzaEJ1dHRvbjogY29tcG9uZW50U2NoZW1hLFxuICAgICAgICBTYXZlRHJhZnRCdXR0b246IGNvbXBvbmVudFNjaGVtYSxcbiAgICAgICAgUHJldmlld0J1dHRvbjogY29tcG9uZW50U2NoZW1hLFxuICAgICAgfSksXG4gICAgICBCZWZvcmVMaXN0OiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnRTY2hlbWEpLFxuICAgICAgQmVmb3JlTGlzdFRhYmxlOiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnRTY2hlbWEpLFxuICAgICAgQWZ0ZXJMaXN0VGFibGU6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudFNjaGVtYSksXG4gICAgICBBZnRlckxpc3Q6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudFNjaGVtYSksXG4gICAgfSksXG4gICAgcGFnaW5hdGlvbjogam9pLm9iamVjdCh7XG4gICAgICBkZWZhdWx0TGltaXQ6IGpvaS5udW1iZXIoKSxcbiAgICAgIGxpbWl0czogam9pLmFycmF5KCkuaXRlbXMoam9pLm51bWJlcigpKSxcbiAgICB9KSxcbiAgICBwcmV2aWV3OiBqb2kuZnVuYygpLFxuICAgIGRpc2FibGVEdXBsaWNhdGU6IGpvaS5ib29sKCksXG4gICAgaGlkZUFQSVVSTDogam9pLmJvb2woKSxcbiAgfSksXG4gIGZpZWxkczogam9pLmFycmF5KCksXG4gIGluZGV4ZXM6IGpvaS5hcnJheSgpLml0ZW1zKFxuICAgIGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIGZpZWxkczogam9pLm9iamVjdCgpLnJlcXVpcmVkKCksXG4gICAgICBvcHRpb25zOiBqb2kub2JqZWN0KCksXG4gICAgfSksXG4gICksXG4gIGhvb2tzOiBqb2kub2JqZWN0KHtcbiAgICBiZWZvcmVPcGVyYXRpb246IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGJlZm9yZVZhbGlkYXRlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBiZWZvcmVDaGFuZ2U6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGFmdGVyQ2hhbmdlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBiZWZvcmVSZWFkOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBhZnRlclJlYWQ6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGJlZm9yZURlbGV0ZTogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gICAgYWZ0ZXJEZWxldGU6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGFmdGVyT3BlcmF0aW9uOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBiZWZvcmVMb2dpbjogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gICAgYWZ0ZXJMb2dpbjogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gICAgYWZ0ZXJMb2dvdXQ6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGFmdGVyTWU6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGFmdGVyUmVmcmVzaDogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gICAgYWZ0ZXJGb3Jnb3RQYXNzd29yZDogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gIH0pLFxuICBlbmRwb2ludHM6IGVuZHBvaW50c1NjaGVtYSxcbiAgYXV0aDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kub2JqZWN0KHtcbiAgICAgIHRva2VuRXhwaXJhdGlvbjogam9pLm51bWJlcigpLFxuICAgICAgZGVwdGg6IGpvaS5udW1iZXIoKSxcbiAgICAgIHZlcmlmeTogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgICAgam9pLmJvb2xlYW4oKSxcbiAgICAgICAgam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICAgIGdlbmVyYXRlRW1haWxIVE1MOiBqb2kuZnVuYygpLFxuICAgICAgICAgIGdlbmVyYXRlRW1haWxTdWJqZWN0OiBqb2kuZnVuYygpLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgICBsb2NrVGltZTogam9pLm51bWJlcigpLFxuICAgICAgdXNlQVBJS2V5OiBqb2kuYm9vbGVhbigpLFxuICAgICAgY29va2llczogam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICBzZWN1cmU6IGpvaS5ib29sZWFuKCksXG4gICAgICAgIHNhbWVTaXRlOiBqb2kuc3RyaW5nKCksIC8vIFRPRE86IGFkZCBmdXJ0aGVyIHNwZWNpZmljaXR5IHdpdGggam9pLnhvclxuICAgICAgICBkb21haW46IGpvaS5zdHJpbmcoKSxcbiAgICAgIH0pLFxuICAgICAgZm9yZ290UGFzc3dvcmQ6IGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgZ2VuZXJhdGVFbWFpbEhUTUw6IGpvaS5mdW5jKCksXG4gICAgICAgIGdlbmVyYXRlRW1haWxTdWJqZWN0OiBqb2kuZnVuYygpLFxuICAgICAgfSksXG4gICAgICBtYXhMb2dpbkF0dGVtcHRzOiBqb2kubnVtYmVyKCksXG4gICAgICBkaXNhYmxlTG9jYWxTdHJhdGVneTogam9pLmJvb2xlYW4oKS52YWxpZCh0cnVlKSxcbiAgICAgIHJlbW92ZVRva2VuRnJvbVJlc3BvbnNlczogam9pLmJvb2xlYW4oKS52YWxpZCh0cnVlKSxcbiAgICAgIHN0cmF0ZWdpZXM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgIHN0cmF0ZWd5QmFzZVNjaGVtYS5rZXlzKHtcbiAgICAgICAgICBuYW1lOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICBzdHJhdGVneTogam9pLmZ1bmMoKVxuICAgICAgICAgICAgLm1heEFyaXR5KDEpXG4gICAgICAgICAgICAucmVxdWlyZWQoKSxcbiAgICAgICAgfSksXG4gICAgICAgIHN0cmF0ZWd5QmFzZVNjaGVtYS5rZXlzKHtcbiAgICAgICAgICBuYW1lOiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgc3RyYXRlZ3k6IGpvaS5vYmplY3QoKS5yZXF1aXJlZCgpLFxuICAgICAgICB9KSxcbiAgICAgICkpLFxuICAgIH0pLFxuICAgIGpvaS5ib29sZWFuKCksXG4gICksXG4gIHZlcnNpb25zOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgIGpvaS5vYmplY3Qoe1xuICAgICAgbWF4UGVyRG9jOiBqb2kubnVtYmVyKCksXG4gICAgICBkcmFmdHM6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgIGpvaS5vYmplY3Qoe1xuICAgICAgICAgIGF1dG9zYXZlOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICAgICAgam9pLmJvb2xlYW4oKSxcbiAgICAgICAgICAgIGpvaS5vYmplY3Qoe1xuICAgICAgICAgICAgICBpbnRlcnZhbDogam9pLm51bWJlcigpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKSxcbiAgICAgICAgfSksXG4gICAgICAgIGpvaS5ib29sZWFuKCksXG4gICAgICApLFxuICAgIH0pLFxuICAgIGpvaS5ib29sZWFuKCksXG4gICksXG4gIHVwbG9hZDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kub2JqZWN0KHtcbiAgICAgIHN0YXRpY1VSTDogam9pLnN0cmluZygpLFxuICAgICAgc3RhdGljRGlyOiBqb2kuc3RyaW5nKCksXG4gICAgICBkaXNhYmxlTG9jYWxTdG9yYWdlOiBqb2kuYm9vbCgpLFxuICAgICAgdXNlVGVtcEZpbGVzOiBqb2kuYm9vbCgpLFxuICAgICAgdGVtcEZpbGVEaXI6IGpvaS5zdHJpbmcoKSxcbiAgICAgIGFkbWluVGh1bWJuYWlsOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICBqb2kuc3RyaW5nKCksXG4gICAgICAgIGpvaS5mdW5jKCksXG4gICAgICApLFxuICAgICAgaW1hZ2VTaXplczogam9pLmFycmF5KCkuaXRlbXMoXG4gICAgICAgIGpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgICBuYW1lOiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgd2lkdGg6IGpvaS5udW1iZXIoKS5pbnRlZ2VyKCkuYWxsb3cobnVsbCksXG4gICAgICAgICAgaGVpZ2h0OiBqb2kubnVtYmVyKCkuaW50ZWdlcigpLmFsbG93KG51bGwpLFxuICAgICAgICAgIGNyb3A6IGpvaS5zdHJpbmcoKSwgLy8gVE9ETzogYWRkIGZ1cnRoZXIgc3BlY2lmaWNpdHkgd2l0aCBqb2kueG9yXG4gICAgICAgIH0pLnVua25vd24oKSxcbiAgICAgICksXG4gICAgICBtaW1lVHlwZXM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5zdHJpbmcoKSksXG4gICAgICBzdGF0aWNPcHRpb25zOiBqb2kub2JqZWN0KCksXG4gICAgICBoYW5kbGVyczogam9pLmFycmF5KCkuaXRlbXMoam9pLmZ1bmMoKSksXG4gICAgICByZXNpemVPcHRpb25zOiBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgIHdpZHRoOiBqb2kubnVtYmVyKCkuYWxsb3cobnVsbCksXG4gICAgICAgIGhlaWdodDogam9pLm51bWJlcigpLmFsbG93KG51bGwpLFxuICAgICAgICBmaXQ6IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgcG9zaXRpb246IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgICAgam9pLnN0cmluZygpLFxuICAgICAgICAgIGpvaS5udW1iZXIoKSxcbiAgICAgICAgKSxcbiAgICAgICAgYmFja2dyb3VuZDogam9pLnN0cmluZygpLFxuICAgICAgICBrZXJuZWw6IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgd2l0aG91dEVubGFyZ2VtZW50OiBqb2kuYm9vbCgpLFxuICAgICAgICBmYXN0U2hyaW5rT25Mb2FkOiBqb2kuYm9vbCgpLFxuICAgICAgfSkuYWxsb3cobnVsbCksXG4gICAgICBmb3JtYXRPcHRpb25zOiBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgIGZvcm1hdDogam9pLnN0cmluZygpLFxuICAgICAgICBvcHRpb25zOiBqb2kub2JqZWN0KCksXG4gICAgICB9KSxcbiAgICAgIHRyaW1PcHRpb25zOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgICAgZm9ybWF0OiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgb3B0aW9uczogam9pLm9iamVjdCgpLFxuICAgICAgICB9KSxcbiAgICAgICAgam9pLnN0cmluZygpLFxuICAgICAgICBqb2kubnVtYmVyKCksXG4gICAgICApLFxuICAgIH0pLFxuICAgIGpvaS5ib29sZWFuKCksXG4gICksXG4gIGN1c3RvbTogam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBqb2kuYW55KCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbGxlY3Rpb25TY2hlbWE7XG4iXSwibmFtZXMiOlsiam9pIiwiY29tcG9uZW50U2NoZW1hIiwiZW5kcG9pbnRzU2NoZW1hIiwic3RyYXRlZ3lCYXNlU2NoZW1hIiwib2JqZWN0Iiwia2V5cyIsInJlZnJlc2giLCJib29sZWFuIiwibG9nb3V0IiwiY29sbGVjdGlvblNjaGVtYSIsInNsdWciLCJzdHJpbmciLCJyZXF1aXJlZCIsImxhYmVscyIsInNpbmd1bGFyIiwiYWx0ZXJuYXRpdmVzIiwidHJ5IiwicGF0dGVybiIsInBsdXJhbCIsImFjY2VzcyIsImNyZWF0ZSIsImZ1bmMiLCJyZWFkIiwicmVhZFZlcnNpb25zIiwidXBkYXRlIiwiZGVsZXRlIiwidW5sb2NrIiwiYWRtaW4iLCJkZWZhdWx0U29ydCIsImdyYXBoUUwiLCJzaW5ndWxhck5hbWUiLCJwbHVyYWxOYW1lIiwidHlwZXNjcmlwdCIsImludGVyZmFjZSIsInRpbWVzdGFtcHMiLCJoaWRkZW4iLCJ1c2VBc1RpdGxlIiwiZGVmYXVsdENvbHVtbnMiLCJhcnJheSIsIml0ZW1zIiwibGlzdFNlYXJjaGFibGVGaWVsZHMiLCJncm91cCIsImRlc2NyaXB0aW9uIiwiaG9va3MiLCJiZWZvcmVEdXBsaWNhdGUiLCJlbmFibGVSaWNoVGV4dExpbmsiLCJlbmFibGVSaWNoVGV4dFJlbGF0aW9uc2hpcCIsImNvbXBvbmVudHMiLCJ2aWV3cyIsIkxpc3QiLCJFZGl0IiwiZWRpdCIsIlNhdmVCdXR0b24iLCJQdWJsaXNoQnV0dG9uIiwiU2F2ZURyYWZ0QnV0dG9uIiwiUHJldmlld0J1dHRvbiIsIkJlZm9yZUxpc3QiLCJCZWZvcmVMaXN0VGFibGUiLCJBZnRlckxpc3RUYWJsZSIsIkFmdGVyTGlzdCIsInBhZ2luYXRpb24iLCJkZWZhdWx0TGltaXQiLCJudW1iZXIiLCJsaW1pdHMiLCJwcmV2aWV3IiwiZGlzYWJsZUR1cGxpY2F0ZSIsImJvb2wiLCJoaWRlQVBJVVJMIiwiZmllbGRzIiwiaW5kZXhlcyIsIm9wdGlvbnMiLCJiZWZvcmVPcGVyYXRpb24iLCJiZWZvcmVWYWxpZGF0ZSIsImJlZm9yZUNoYW5nZSIsImFmdGVyQ2hhbmdlIiwiYmVmb3JlUmVhZCIsImFmdGVyUmVhZCIsImJlZm9yZURlbGV0ZSIsImFmdGVyRGVsZXRlIiwiYWZ0ZXJPcGVyYXRpb24iLCJiZWZvcmVMb2dpbiIsImFmdGVyTG9naW4iLCJhZnRlckxvZ291dCIsImFmdGVyTWUiLCJhZnRlclJlZnJlc2giLCJhZnRlckZvcmdvdFBhc3N3b3JkIiwiZW5kcG9pbnRzIiwiYXV0aCIsInRva2VuRXhwaXJhdGlvbiIsImRlcHRoIiwidmVyaWZ5IiwiZ2VuZXJhdGVFbWFpbEhUTUwiLCJnZW5lcmF0ZUVtYWlsU3ViamVjdCIsImxvY2tUaW1lIiwidXNlQVBJS2V5IiwiY29va2llcyIsInNlY3VyZSIsInNhbWVTaXRlIiwiZG9tYWluIiwiZm9yZ290UGFzc3dvcmQiLCJtYXhMb2dpbkF0dGVtcHRzIiwiZGlzYWJsZUxvY2FsU3RyYXRlZ3kiLCJ2YWxpZCIsInJlbW92ZVRva2VuRnJvbVJlc3BvbnNlcyIsInN0cmF0ZWdpZXMiLCJuYW1lIiwic3RyYXRlZ3kiLCJtYXhBcml0eSIsInZlcnNpb25zIiwibWF4UGVyRG9jIiwiZHJhZnRzIiwiYXV0b3NhdmUiLCJpbnRlcnZhbCIsInVwbG9hZCIsInN0YXRpY1VSTCIsInN0YXRpY0RpciIsImRpc2FibGVMb2NhbFN0b3JhZ2UiLCJ1c2VUZW1wRmlsZXMiLCJ0ZW1wRmlsZURpciIsImFkbWluVGh1bWJuYWlsIiwiaW1hZ2VTaXplcyIsIndpZHRoIiwiaW50ZWdlciIsImFsbG93IiwiaGVpZ2h0IiwiY3JvcCIsInVua25vd24iLCJtaW1lVHlwZXMiLCJzdGF0aWNPcHRpb25zIiwiaGFuZGxlcnMiLCJyZXNpemVPcHRpb25zIiwiZml0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwia2VybmVsIiwid2l0aG91dEVubGFyZ2VtZW50IiwiZmFzdFNocmlua09uTG9hZCIsImZvcm1hdE9wdGlvbnMiLCJmb3JtYXQiLCJ0cmltT3B0aW9ucyIsImN1c3RvbSIsImFueSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUyxNQUFNO0FBQ3RCLFNBQVNDLGVBQWUsUUFBUSxrQ0FBa0M7QUFDbEUsU0FBU0MsZUFBZSxRQUFRLHNCQUFzQjtBQUV0RCxJQUFNQyxxQkFBcUJILElBQUlJLE1BQU0sR0FBR0MsSUFBSSxDQUFDO0lBQzNDQyxTQUFTTixJQUFJTyxPQUFPO0lBQ3BCQyxRQUFRUixJQUFJTyxPQUFPO0FBQ3JCO0FBRUEsSUFBTUUsbUJBQW1CVCxJQUFJSSxNQUFNLEdBQUdDLElBQUksQ0FBQztJQUN6Q0ssTUFBTVYsSUFBSVcsTUFBTSxHQUFHQyxRQUFRO0lBQzNCQyxRQUFRYixJQUFJSSxNQUFNLENBQUM7UUFDakJVLFVBQVVkLElBQUllLFlBQVksR0FBR0MsR0FBRyxDQUM5QmhCLElBQUlXLE1BQU0sSUFDVlgsSUFBSUksTUFBTSxHQUFHYSxPQUFPLENBQUNqQixJQUFJVyxNQUFNLElBQUk7WUFBQ1gsSUFBSVcsTUFBTTtTQUFHO1FBRW5ETyxRQUFRbEIsSUFBSWUsWUFBWSxHQUFHQyxHQUFHLENBQzVCaEIsSUFBSVcsTUFBTSxJQUNWWCxJQUFJSSxNQUFNLEdBQUdhLE9BQU8sQ0FBQ2pCLElBQUlXLE1BQU0sSUFBSTtZQUFDWCxJQUFJVyxNQUFNO1NBQUc7SUFFckQ7SUFDQVEsUUFBUW5CLElBQUlJLE1BQU0sQ0FBQztRQUNqQmdCLFFBQVFwQixJQUFJcUIsSUFBSTtRQUNoQkMsTUFBTXRCLElBQUlxQixJQUFJO1FBQ2RFLGNBQWN2QixJQUFJcUIsSUFBSTtRQUN0QkcsUUFBUXhCLElBQUlxQixJQUFJO1FBQ2hCSSxRQUFRekIsSUFBSXFCLElBQUk7UUFDaEJLLFFBQVExQixJQUFJcUIsSUFBSTtRQUNoQk0sT0FBTzNCLElBQUlxQixJQUFJO0lBQ2pCO0lBQ0FPLGFBQWE1QixJQUFJVyxNQUFNO0lBQ3ZCa0IsU0FBUzdCLElBQUllLFlBQVksR0FBR0MsR0FBRyxDQUM3QmhCLElBQUlJLE1BQU0sR0FBR0MsSUFBSSxDQUNmO1FBQ0V5QixjQUFjOUIsSUFBSVcsTUFBTTtRQUN4Qm9CLFlBQVkvQixJQUFJVyxNQUFNO0lBQ3hCLElBRUZYLElBQUlPLE9BQU87SUFFYnlCLFlBQVloQyxJQUFJSSxNQUFNLEdBQUdDLElBQUksQ0FBQztRQUM1QjRCLFdBQVdqQyxJQUFJVyxNQUFNO0lBQ3ZCO0lBQ0F1QixZQUFZbEMsSUFBSU8sT0FBTztJQUN2Qm9CLE9BQU8zQixJQUFJSSxNQUFNLENBQUM7UUFDaEIrQixRQUFRbkMsSUFBSWUsWUFBWSxHQUFHQyxHQUFHLENBQzVCaEIsSUFBSU8sT0FBTyxJQUNYUCxJQUFJcUIsSUFBSTtRQUVWZSxZQUFZcEMsSUFBSVcsTUFBTTtRQUN0QjBCLGdCQUFnQnJDLElBQUlzQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ3ZDLElBQUlXLE1BQU07UUFDNUM2QixzQkFBc0J4QyxJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQUN2QyxJQUFJVyxNQUFNO1FBQ2xEOEIsT0FBT3pDLElBQUllLFlBQVksR0FBR0MsR0FBRyxDQUMzQmhCLElBQUlXLE1BQU0sSUFDVlgsSUFBSUksTUFBTSxHQUFHYSxPQUFPLENBQUNqQixJQUFJVyxNQUFNLElBQUk7WUFBQ1gsSUFBSVcsTUFBTTtTQUFHO1FBRW5EK0IsYUFBYTFDLElBQUllLFlBQVksR0FBR0MsR0FBRyxDQUNqQ2hCLElBQUlXLE1BQU0sSUFDVlY7UUFFRjBDLE9BQU8zQyxJQUFJSSxNQUFNLENBQUM7WUFDaEJ3QyxpQkFBaUI1QyxJQUFJcUIsSUFBSTtRQUMzQjtRQUNBd0Isb0JBQW9CN0MsSUFBSU8sT0FBTztRQUMvQnVDLDRCQUE0QjlDLElBQUlPLE9BQU87UUFDdkN3QyxZQUFZL0MsSUFBSUksTUFBTSxDQUFDO1lBQ3JCNEMsT0FBT2hELElBQUlJLE1BQU0sQ0FBQztnQkFDaEI2QyxNQUFNaEQ7Z0JBQ05pRCxNQUFNakQ7WUFDUjtZQUNBa0QsTUFBTW5ELElBQUlJLE1BQU0sQ0FBQztnQkFDZmdELFlBQVluRDtnQkFDWm9ELGVBQWVwRDtnQkFDZnFELGlCQUFpQnJEO2dCQUNqQnNELGVBQWV0RDtZQUNqQjtZQUNBdUQsWUFBWXhELElBQUlzQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ3RDO1lBQzlCd0QsaUJBQWlCekQsSUFBSXNDLEtBQUssR0FBR0MsS0FBSyxDQUFDdEM7WUFDbkN5RCxnQkFBZ0IxRCxJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQUN0QztZQUNsQzBELFdBQVczRCxJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQUN0QztRQUMvQjtRQUNBMkQsWUFBWTVELElBQUlJLE1BQU0sQ0FBQztZQUNyQnlELGNBQWM3RCxJQUFJOEQsTUFBTTtZQUN4QkMsUUFBUS9ELElBQUlzQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ3ZDLElBQUk4RCxNQUFNO1FBQ3RDO1FBQ0FFLFNBQVNoRSxJQUFJcUIsSUFBSTtRQUNqQjRDLGtCQUFrQmpFLElBQUlrRSxJQUFJO1FBQzFCQyxZQUFZbkUsSUFBSWtFLElBQUk7SUFDdEI7SUFDQUUsUUFBUXBFLElBQUlzQyxLQUFLO0lBQ2pCK0IsU0FBU3JFLElBQUlzQyxLQUFLLEdBQUdDLEtBQUssQ0FDeEJ2QyxJQUFJSSxNQUFNLEdBQUdDLElBQUksQ0FBQztRQUNoQitELFFBQVFwRSxJQUFJSSxNQUFNLEdBQUdRLFFBQVE7UUFDN0IwRCxTQUFTdEUsSUFBSUksTUFBTTtJQUNyQjtJQUVGdUMsT0FBTzNDLElBQUlJLE1BQU0sQ0FBQztRQUNoQm1FLGlCQUFpQnZFLElBQUlzQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ3ZDLElBQUlxQixJQUFJO1FBQzNDbUQsZ0JBQWdCeEUsSUFBSXNDLEtBQUssR0FBR0MsS0FBSyxDQUFDdkMsSUFBSXFCLElBQUk7UUFDMUNvRCxjQUFjekUsSUFBSXNDLEtBQUssR0FBR0MsS0FBSyxDQUFDdkMsSUFBSXFCLElBQUk7UUFDeENxRCxhQUFhMUUsSUFBSXNDLEtBQUssR0FBR0MsS0FBSyxDQUFDdkMsSUFBSXFCLElBQUk7UUFDdkNzRCxZQUFZM0UsSUFBSXNDLEtBQUssR0FBR0MsS0FBSyxDQUFDdkMsSUFBSXFCLElBQUk7UUFDdEN1RCxXQUFXNUUsSUFBSXNDLEtBQUssR0FBR0MsS0FBSyxDQUFDdkMsSUFBSXFCLElBQUk7UUFDckN3RCxjQUFjN0UsSUFBSXNDLEtBQUssR0FBR0MsS0FBSyxDQUFDdkMsSUFBSXFCLElBQUk7UUFDeEN5RCxhQUFhOUUsSUFBSXNDLEtBQUssR0FBR0MsS0FBSyxDQUFDdkMsSUFBSXFCLElBQUk7UUFDdkMwRCxnQkFBZ0IvRSxJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQUN2QyxJQUFJcUIsSUFBSTtRQUMxQzJELGFBQWFoRixJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQUN2QyxJQUFJcUIsSUFBSTtRQUN2QzRELFlBQVlqRixJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQUN2QyxJQUFJcUIsSUFBSTtRQUN0QzZELGFBQWFsRixJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQUN2QyxJQUFJcUIsSUFBSTtRQUN2QzhELFNBQVNuRixJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQUN2QyxJQUFJcUIsSUFBSTtRQUNuQytELGNBQWNwRixJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQUN2QyxJQUFJcUIsSUFBSTtRQUN4Q2dFLHFCQUFxQnJGLElBQUlzQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ3ZDLElBQUlxQixJQUFJO0lBQ2pEO0lBQ0FpRSxXQUFXcEY7SUFDWHFGLE1BQU12RixJQUFJZSxZQUFZLEdBQUdDLEdBQUcsQ0FDMUJoQixJQUFJSSxNQUFNLENBQUM7UUFDVG9GLGlCQUFpQnhGLElBQUk4RCxNQUFNO1FBQzNCMkIsT0FBT3pGLElBQUk4RCxNQUFNO1FBQ2pCNEIsUUFBUTFGLElBQUllLFlBQVksR0FBR0MsR0FBRyxDQUM1QmhCLElBQUlPLE9BQU8sSUFDWFAsSUFBSUksTUFBTSxHQUFHQyxJQUFJLENBQUM7WUFDaEJzRixtQkFBbUIzRixJQUFJcUIsSUFBSTtZQUMzQnVFLHNCQUFzQjVGLElBQUlxQixJQUFJO1FBQ2hDO1FBRUZ3RSxVQUFVN0YsSUFBSThELE1BQU07UUFDcEJnQyxXQUFXOUYsSUFBSU8sT0FBTztRQUN0QndGLFNBQVMvRixJQUFJSSxNQUFNLEdBQUdDLElBQUksQ0FBQztZQUN6QjJGLFFBQVFoRyxJQUFJTyxPQUFPO1lBQ25CMEYsVUFBVWpHLElBQUlXLE1BQU07WUFDcEJ1RixRQUFRbEcsSUFBSVcsTUFBTTtRQUNwQjtRQUNBd0YsZ0JBQWdCbkcsSUFBSUksTUFBTSxHQUFHQyxJQUFJLENBQUM7WUFDaENzRixtQkFBbUIzRixJQUFJcUIsSUFBSTtZQUMzQnVFLHNCQUFzQjVGLElBQUlxQixJQUFJO1FBQ2hDO1FBQ0ErRSxrQkFBa0JwRyxJQUFJOEQsTUFBTTtRQUM1QnVDLHNCQUFzQnJHLElBQUlPLE9BQU8sR0FBRytGLEtBQUssQ0FBQztRQUMxQ0MsMEJBQTBCdkcsSUFBSU8sT0FBTyxHQUFHK0YsS0FBSyxDQUFDO1FBQzlDRSxZQUFZeEcsSUFBSXNDLEtBQUssR0FBR0MsS0FBSyxDQUFDdkMsSUFBSWUsWUFBWSxHQUFHQyxHQUFHLENBQ2xEYixtQkFBbUJFLElBQUksQ0FBQztZQUN0Qm9HLE1BQU16RyxJQUFJVyxNQUFNLEdBQUdDLFFBQVE7WUFDM0I4RixVQUFVMUcsSUFBSXFCLElBQUksR0FDZnNGLFFBQVEsQ0FBQyxHQUNUL0YsUUFBUTtRQUNiLElBQ0FULG1CQUFtQkUsSUFBSSxDQUFDO1lBQ3RCb0csTUFBTXpHLElBQUlXLE1BQU07WUFDaEIrRixVQUFVMUcsSUFBSUksTUFBTSxHQUFHUSxRQUFRO1FBQ2pDO0lBRUosSUFDQVosSUFBSU8sT0FBTztJQUVicUcsVUFBVTVHLElBQUllLFlBQVksR0FBR0MsR0FBRyxDQUM5QmhCLElBQUlJLE1BQU0sQ0FBQztRQUNUeUcsV0FBVzdHLElBQUk4RCxNQUFNO1FBQ3JCZ0QsUUFBUTlHLElBQUllLFlBQVksR0FBR0MsR0FBRyxDQUM1QmhCLElBQUlJLE1BQU0sQ0FBQztZQUNUMkcsVUFBVS9HLElBQUllLFlBQVksR0FBR0MsR0FBRyxDQUM5QmhCLElBQUlPLE9BQU8sSUFDWFAsSUFBSUksTUFBTSxDQUFDO2dCQUNUNEcsVUFBVWhILElBQUk4RCxNQUFNO1lBQ3RCO1FBRUosSUFDQTlELElBQUlPLE9BQU87SUFFZixJQUNBUCxJQUFJTyxPQUFPO0lBRWIwRyxRQUFRakgsSUFBSWUsWUFBWSxHQUFHQyxHQUFHLENBQzVCaEIsSUFBSUksTUFBTSxDQUFDO1FBQ1Q4RyxXQUFXbEgsSUFBSVcsTUFBTTtRQUNyQndHLFdBQVduSCxJQUFJVyxNQUFNO1FBQ3JCeUcscUJBQXFCcEgsSUFBSWtFLElBQUk7UUFDN0JtRCxjQUFjckgsSUFBSWtFLElBQUk7UUFDdEJvRCxhQUFhdEgsSUFBSVcsTUFBTTtRQUN2QjRHLGdCQUFnQnZILElBQUllLFlBQVksR0FBR0MsR0FBRyxDQUNwQ2hCLElBQUlXLE1BQU0sSUFDVlgsSUFBSXFCLElBQUk7UUFFVm1HLFlBQVl4SCxJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQzNCdkMsSUFBSUksTUFBTSxHQUFHQyxJQUFJLENBQUM7WUFDaEJvRyxNQUFNekcsSUFBSVcsTUFBTTtZQUNoQjhHLE9BQU96SCxJQUFJOEQsTUFBTSxHQUFHNEQsT0FBTyxHQUFHQyxLQUFLLENBQUM7WUFDcENDLFFBQVE1SCxJQUFJOEQsTUFBTSxHQUFHNEQsT0FBTyxHQUFHQyxLQUFLLENBQUM7WUFDckNFLE1BQU03SCxJQUFJVyxNQUFNO1FBQ2xCLEdBQUdtSCxPQUFPO1FBRVpDLFdBQVcvSCxJQUFJc0MsS0FBSyxHQUFHQyxLQUFLLENBQUN2QyxJQUFJVyxNQUFNO1FBQ3ZDcUgsZUFBZWhJLElBQUlJLE1BQU07UUFDekI2SCxVQUFVakksSUFBSXNDLEtBQUssR0FBR0MsS0FBSyxDQUFDdkMsSUFBSXFCLElBQUk7UUFDcEM2RyxlQUFlbEksSUFBSUksTUFBTSxHQUFHQyxJQUFJLENBQUM7WUFDL0JvSCxPQUFPekgsSUFBSThELE1BQU0sR0FBRzZELEtBQUssQ0FBQztZQUMxQkMsUUFBUTVILElBQUk4RCxNQUFNLEdBQUc2RCxLQUFLLENBQUM7WUFDM0JRLEtBQUtuSSxJQUFJVyxNQUFNO1lBQ2Z5SCxVQUFVcEksSUFBSWUsWUFBWSxHQUFHQyxHQUFHLENBQzlCaEIsSUFBSVcsTUFBTSxJQUNWWCxJQUFJOEQsTUFBTTtZQUVadUUsWUFBWXJJLElBQUlXLE1BQU07WUFDdEIySCxRQUFRdEksSUFBSVcsTUFBTTtZQUNsQjRILG9CQUFvQnZJLElBQUlrRSxJQUFJO1lBQzVCc0Usa0JBQWtCeEksSUFBSWtFLElBQUk7UUFDNUIsR0FBR3lELEtBQUssQ0FBQztRQUNUYyxlQUFlekksSUFBSUksTUFBTSxHQUFHQyxJQUFJLENBQUM7WUFDL0JxSSxRQUFRMUksSUFBSVcsTUFBTTtZQUNsQjJELFNBQVN0RSxJQUFJSSxNQUFNO1FBQ3JCO1FBQ0F1SSxhQUFhM0ksSUFBSWUsWUFBWSxHQUFHQyxHQUFHLENBQ2pDaEIsSUFBSUksTUFBTSxHQUFHQyxJQUFJLENBQUM7WUFDaEJxSSxRQUFRMUksSUFBSVcsTUFBTTtZQUNsQjJELFNBQVN0RSxJQUFJSSxNQUFNO1FBQ3JCLElBQ0FKLElBQUlXLE1BQU0sSUFDVlgsSUFBSThELE1BQU07SUFFZCxJQUNBOUQsSUFBSU8sT0FBTztJQUVicUksUUFBUTVJLElBQUlJLE1BQU0sR0FBR2EsT0FBTyxDQUFDakIsSUFBSVcsTUFBTSxJQUFJWCxJQUFJNkksR0FBRztBQUNwRDtBQUVBLGVBQWVwSSxpQkFBaUIifQ==