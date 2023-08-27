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
var globalSchema = _joi.default.object().keys({
    slug: _joi.default.string().required(),
    label: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
        _joi.default.string()
    ])),
    admin: _joi.default.object({
        hidden: _joi.default.alternatives().try(_joi.default.boolean(), _joi.default.func()),
        group: _joi.default.alternatives().try(_joi.default.string(), _joi.default.object().pattern(_joi.default.string(), [
            _joi.default.string()
        ])),
        hideAPIURL: _joi.default.boolean(),
        description: _joi.default.alternatives().try(_joi.default.string(), _componentSchema.componentSchema),
        components: _joi.default.object({
            views: _joi.default.object({
                Edit: _componentSchema.componentSchema
            }),
            elements: _joi.default.object({
                SaveButton: _componentSchema.componentSchema,
                PublishButton: _componentSchema.componentSchema,
                SaveDraftButton: _componentSchema.componentSchema,
                PreviewButton: _componentSchema.componentSchema
            })
        }),
        preview: _joi.default.func()
    }),
    typescript: _joi.default.object().keys({
        interface: _joi.default.string()
    }),
    graphQL: _joi.default.alternatives().try(_joi.default.object().keys({
        name: _joi.default.string()
    }), _joi.default.boolean()),
    hooks: _joi.default.object({
        beforeValidate: _joi.default.array().items(_joi.default.func()),
        beforeChange: _joi.default.array().items(_joi.default.func()),
        afterChange: _joi.default.array().items(_joi.default.func()),
        beforeRead: _joi.default.array().items(_joi.default.func()),
        afterRead: _joi.default.array().items(_joi.default.func())
    }),
    endpoints: _schema.endpointsSchema,
    access: _joi.default.object({
        read: _joi.default.func(),
        readVersions: _joi.default.func(),
        update: _joi.default.func()
    }),
    fields: _joi.default.array(),
    versions: _joi.default.alternatives().try(_joi.default.object({
        max: _joi.default.number(),
        drafts: _joi.default.alternatives().try(_joi.default.object({
            autosave: _joi.default.alternatives().try(_joi.default.boolean(), _joi.default.object({
                interval: _joi.default.number()
            }))
        }), _joi.default.boolean())
    }), _joi.default.boolean()),
    custom: _joi.default.object().pattern(_joi.default.string(), _joi.default.any())
}).unknown();
var _default = globalSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2NvbmZpZy9zY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpvaSBmcm9tICdqb2knO1xuaW1wb3J0IHsgY29tcG9uZW50U2NoZW1hIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbXBvbmVudFNjaGVtYSc7XG5pbXBvcnQgeyBlbmRwb2ludHNTY2hlbWEgfSBmcm9tICcuLi8uLi9jb25maWcvc2NoZW1hJztcblxuY29uc3QgZ2xvYmFsU2NoZW1hID0gam9pLm9iamVjdCgpLmtleXMoe1xuICBzbHVnOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICApLFxuICBhZG1pbjogam9pLm9iamVjdCh7XG4gICAgaGlkZGVuOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgam9pLmJvb2xlYW4oKSxcbiAgICAgIGpvaS5mdW5jKCksXG4gICAgKSxcbiAgICBncm91cDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICAgICksXG4gICAgaGlkZUFQSVVSTDogam9pLmJvb2xlYW4oKSxcbiAgICBkZXNjcmlwdGlvbjogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgIGNvbXBvbmVudFNjaGVtYSxcbiAgICApLFxuICAgIGNvbXBvbmVudHM6IGpvaS5vYmplY3Qoe1xuICAgICAgdmlld3M6IGpvaS5vYmplY3Qoe1xuICAgICAgICBFZGl0OiBjb21wb25lbnRTY2hlbWEsXG4gICAgICB9KSxcbiAgICAgIGVsZW1lbnRzOiBqb2kub2JqZWN0KHtcbiAgICAgICAgU2F2ZUJ1dHRvbjogY29tcG9uZW50U2NoZW1hLFxuICAgICAgICBQdWJsaXNoQnV0dG9uOiBjb21wb25lbnRTY2hlbWEsXG4gICAgICAgIFNhdmVEcmFmdEJ1dHRvbjogY29tcG9uZW50U2NoZW1hLFxuICAgICAgICBQcmV2aWV3QnV0dG9uOiBjb21wb25lbnRTY2hlbWEsXG4gICAgICB9KSxcbiAgICB9KSxcbiAgICBwcmV2aWV3OiBqb2kuZnVuYygpLFxuICB9KSxcbiAgdHlwZXNjcmlwdDogam9pLm9iamVjdCgpLmtleXMoe1xuICAgIGludGVyZmFjZTogam9pLnN0cmluZygpLFxuICB9KSxcbiAgZ3JhcGhRTDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICBuYW1lOiBqb2kuc3RyaW5nKCksXG4gICAgfSksXG4gICAgam9pLmJvb2xlYW4oKSxcbiAgKSxcbiAgaG9va3M6IGpvaS5vYmplY3Qoe1xuICAgIGJlZm9yZVZhbGlkYXRlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBiZWZvcmVDaGFuZ2U6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGFmdGVyQ2hhbmdlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBiZWZvcmVSZWFkOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBhZnRlclJlYWQ6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICB9KSxcbiAgZW5kcG9pbnRzOiBlbmRwb2ludHNTY2hlbWEsXG4gIGFjY2Vzczogam9pLm9iamVjdCh7XG4gICAgcmVhZDogam9pLmZ1bmMoKSxcbiAgICByZWFkVmVyc2lvbnM6IGpvaS5mdW5jKCksXG4gICAgdXBkYXRlOiBqb2kuZnVuYygpLFxuICB9KSxcbiAgZmllbGRzOiBqb2kuYXJyYXkoKSxcbiAgdmVyc2lvbnM6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLm9iamVjdCh7XG4gICAgICBtYXg6IGpvaS5udW1iZXIoKSxcbiAgICAgIGRyYWZ0czogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgICAgam9pLm9iamVjdCh7XG4gICAgICAgICAgYXV0b3NhdmU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgICAgICBqb2kuYm9vbGVhbigpLFxuICAgICAgICAgICAgam9pLm9iamVjdCh7XG4gICAgICAgICAgICAgIGludGVydmFsOiBqb2kubnVtYmVyKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApLFxuICAgICAgICB9KSxcbiAgICAgICAgam9pLmJvb2xlYW4oKSxcbiAgICAgICksXG4gICAgfSksXG4gICAgam9pLmJvb2xlYW4oKSxcbiAgKSxcbiAgY3VzdG9tOiBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIGpvaS5hbnkoKSksXG59KS51bmtub3duKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbFNjaGVtYTtcbiJdLCJuYW1lcyI6WyJnbG9iYWxTY2hlbWEiLCJqb2kiLCJvYmplY3QiLCJrZXlzIiwic2x1ZyIsInN0cmluZyIsInJlcXVpcmVkIiwibGFiZWwiLCJhbHRlcm5hdGl2ZXMiLCJ0cnkiLCJwYXR0ZXJuIiwiYWRtaW4iLCJoaWRkZW4iLCJib29sZWFuIiwiZnVuYyIsImdyb3VwIiwiaGlkZUFQSVVSTCIsImRlc2NyaXB0aW9uIiwiY29tcG9uZW50U2NoZW1hIiwiY29tcG9uZW50cyIsInZpZXdzIiwiRWRpdCIsImVsZW1lbnRzIiwiU2F2ZUJ1dHRvbiIsIlB1Ymxpc2hCdXR0b24iLCJTYXZlRHJhZnRCdXR0b24iLCJQcmV2aWV3QnV0dG9uIiwicHJldmlldyIsInR5cGVzY3JpcHQiLCJpbnRlcmZhY2UiLCJncmFwaFFMIiwibmFtZSIsImhvb2tzIiwiYmVmb3JlVmFsaWRhdGUiLCJhcnJheSIsIml0ZW1zIiwiYmVmb3JlQ2hhbmdlIiwiYWZ0ZXJDaGFuZ2UiLCJiZWZvcmVSZWFkIiwiYWZ0ZXJSZWFkIiwiZW5kcG9pbnRzIiwiZW5kcG9pbnRzU2NoZW1hIiwiYWNjZXNzIiwicmVhZCIsInJlYWRWZXJzaW9ucyIsInVwZGF0ZSIsImZpZWxkcyIsInZlcnNpb25zIiwibWF4IiwibnVtYmVyIiwiZHJhZnRzIiwiYXV0b3NhdmUiLCJpbnRlcnZhbCIsImN1c3RvbSIsImFueSIsInVua25vd24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBZ0ZBOzs7ZUFBQTs7OzBEQWhGZ0I7K0JBQ2dCO3NCQUNBOzs7Ozs7QUFFaEMsSUFBTUEsZUFBZUMsWUFBRyxDQUFDQyxNQUFNLEdBQUdDLElBQUksQ0FBQztJQUNyQ0MsTUFBTUgsWUFBRyxDQUFDSSxNQUFNLEdBQUdDLFFBQVE7SUFDM0JDLE9BQU9OLFlBQUcsQ0FBQ08sWUFBWSxHQUFHQyxHQUFHLENBQzNCUixZQUFHLENBQUNJLE1BQU0sSUFDVkosWUFBRyxDQUFDQyxNQUFNLEdBQUdRLE9BQU8sQ0FBQ1QsWUFBRyxDQUFDSSxNQUFNLElBQUk7UUFBQ0osWUFBRyxDQUFDSSxNQUFNO0tBQUc7SUFFbkRNLE9BQU9WLFlBQUcsQ0FBQ0MsTUFBTSxDQUFDO1FBQ2hCVSxRQUFRWCxZQUFHLENBQUNPLFlBQVksR0FBR0MsR0FBRyxDQUM1QlIsWUFBRyxDQUFDWSxPQUFPLElBQ1haLFlBQUcsQ0FBQ2EsSUFBSTtRQUVWQyxPQUFPZCxZQUFHLENBQUNPLFlBQVksR0FBR0MsR0FBRyxDQUMzQlIsWUFBRyxDQUFDSSxNQUFNLElBQ1ZKLFlBQUcsQ0FBQ0MsTUFBTSxHQUFHUSxPQUFPLENBQUNULFlBQUcsQ0FBQ0ksTUFBTSxJQUFJO1lBQUNKLFlBQUcsQ0FBQ0ksTUFBTTtTQUFHO1FBRW5EVyxZQUFZZixZQUFHLENBQUNZLE9BQU87UUFDdkJJLGFBQWFoQixZQUFHLENBQUNPLFlBQVksR0FBR0MsR0FBRyxDQUNqQ1IsWUFBRyxDQUFDSSxNQUFNLElBQ1ZhLGdDQUFlO1FBRWpCQyxZQUFZbEIsWUFBRyxDQUFDQyxNQUFNLENBQUM7WUFDckJrQixPQUFPbkIsWUFBRyxDQUFDQyxNQUFNLENBQUM7Z0JBQ2hCbUIsTUFBTUgsZ0NBQWU7WUFDdkI7WUFDQUksVUFBVXJCLFlBQUcsQ0FBQ0MsTUFBTSxDQUFDO2dCQUNuQnFCLFlBQVlMLGdDQUFlO2dCQUMzQk0sZUFBZU4sZ0NBQWU7Z0JBQzlCTyxpQkFBaUJQLGdDQUFlO2dCQUNoQ1EsZUFBZVIsZ0NBQWU7WUFDaEM7UUFDRjtRQUNBUyxTQUFTMUIsWUFBRyxDQUFDYSxJQUFJO0lBQ25CO0lBQ0FjLFlBQVkzQixZQUFHLENBQUNDLE1BQU0sR0FBR0MsSUFBSSxDQUFDO1FBQzVCMEIsV0FBVzVCLFlBQUcsQ0FBQ0ksTUFBTTtJQUN2QjtJQUNBeUIsU0FBUzdCLFlBQUcsQ0FBQ08sWUFBWSxHQUFHQyxHQUFHLENBQzdCUixZQUFHLENBQUNDLE1BQU0sR0FBR0MsSUFBSSxDQUFDO1FBQ2hCNEIsTUFBTTlCLFlBQUcsQ0FBQ0ksTUFBTTtJQUNsQixJQUNBSixZQUFHLENBQUNZLE9BQU87SUFFYm1CLE9BQU8vQixZQUFHLENBQUNDLE1BQU0sQ0FBQztRQUNoQitCLGdCQUFnQmhDLFlBQUcsQ0FBQ2lDLEtBQUssR0FBR0MsS0FBSyxDQUFDbEMsWUFBRyxDQUFDYSxJQUFJO1FBQzFDc0IsY0FBY25DLFlBQUcsQ0FBQ2lDLEtBQUssR0FBR0MsS0FBSyxDQUFDbEMsWUFBRyxDQUFDYSxJQUFJO1FBQ3hDdUIsYUFBYXBDLFlBQUcsQ0FBQ2lDLEtBQUssR0FBR0MsS0FBSyxDQUFDbEMsWUFBRyxDQUFDYSxJQUFJO1FBQ3ZDd0IsWUFBWXJDLFlBQUcsQ0FBQ2lDLEtBQUssR0FBR0MsS0FBSyxDQUFDbEMsWUFBRyxDQUFDYSxJQUFJO1FBQ3RDeUIsV0FBV3RDLFlBQUcsQ0FBQ2lDLEtBQUssR0FBR0MsS0FBSyxDQUFDbEMsWUFBRyxDQUFDYSxJQUFJO0lBQ3ZDO0lBQ0EwQixXQUFXQyx1QkFBZTtJQUMxQkMsUUFBUXpDLFlBQUcsQ0FBQ0MsTUFBTSxDQUFDO1FBQ2pCeUMsTUFBTTFDLFlBQUcsQ0FBQ2EsSUFBSTtRQUNkOEIsY0FBYzNDLFlBQUcsQ0FBQ2EsSUFBSTtRQUN0QitCLFFBQVE1QyxZQUFHLENBQUNhLElBQUk7SUFDbEI7SUFDQWdDLFFBQVE3QyxZQUFHLENBQUNpQyxLQUFLO0lBQ2pCYSxVQUFVOUMsWUFBRyxDQUFDTyxZQUFZLEdBQUdDLEdBQUcsQ0FDOUJSLFlBQUcsQ0FBQ0MsTUFBTSxDQUFDO1FBQ1Q4QyxLQUFLL0MsWUFBRyxDQUFDZ0QsTUFBTTtRQUNmQyxRQUFRakQsWUFBRyxDQUFDTyxZQUFZLEdBQUdDLEdBQUcsQ0FDNUJSLFlBQUcsQ0FBQ0MsTUFBTSxDQUFDO1lBQ1RpRCxVQUFVbEQsWUFBRyxDQUFDTyxZQUFZLEdBQUdDLEdBQUcsQ0FDOUJSLFlBQUcsQ0FBQ1ksT0FBTyxJQUNYWixZQUFHLENBQUNDLE1BQU0sQ0FBQztnQkFDVGtELFVBQVVuRCxZQUFHLENBQUNnRCxNQUFNO1lBQ3RCO1FBRUosSUFDQWhELFlBQUcsQ0FBQ1ksT0FBTztJQUVmLElBQ0FaLFlBQUcsQ0FBQ1ksT0FBTztJQUVid0MsUUFBUXBELFlBQUcsQ0FBQ0MsTUFBTSxHQUFHUSxPQUFPLENBQUNULFlBQUcsQ0FBQ0ksTUFBTSxJQUFJSixZQUFHLENBQUNxRCxHQUFHO0FBQ3BELEdBQUdDLE9BQU87SUFFVixXQUFldkQifQ==