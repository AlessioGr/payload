import joi from "joi";
import { componentSchema } from "../../utilities/componentSchema";
import { endpointsSchema } from "../../config/schema";
var globalSchema = joi.object().keys({
    slug: joi.string().required(),
    label: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
        joi.string()
    ])),
    admin: joi.object({
        hidden: joi.alternatives().try(joi.boolean(), joi.func()),
        group: joi.alternatives().try(joi.string(), joi.object().pattern(joi.string(), [
            joi.string()
        ])),
        hideAPIURL: joi.boolean(),
        description: joi.alternatives().try(joi.string(), componentSchema),
        components: joi.object({
            views: joi.object({
                Edit: componentSchema
            }),
            elements: joi.object({
                SaveButton: componentSchema,
                PublishButton: componentSchema,
                SaveDraftButton: componentSchema,
                PreviewButton: componentSchema
            })
        }),
        preview: joi.func()
    }),
    typescript: joi.object().keys({
        interface: joi.string()
    }),
    graphQL: joi.alternatives().try(joi.object().keys({
        name: joi.string()
    }), joi.boolean()),
    hooks: joi.object({
        beforeValidate: joi.array().items(joi.func()),
        beforeChange: joi.array().items(joi.func()),
        afterChange: joi.array().items(joi.func()),
        beforeRead: joi.array().items(joi.func()),
        afterRead: joi.array().items(joi.func())
    }),
    endpoints: endpointsSchema,
    access: joi.object({
        read: joi.func(),
        readVersions: joi.func(),
        update: joi.func()
    }),
    fields: joi.array(),
    versions: joi.alternatives().try(joi.object({
        max: joi.number(),
        drafts: joi.alternatives().try(joi.object({
            autosave: joi.alternatives().try(joi.boolean(), joi.object({
                interval: joi.number()
            }))
        }), joi.boolean())
    }), joi.boolean()),
    custom: joi.object().pattern(joi.string(), joi.any())
}).unknown();
export default globalSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2NvbmZpZy9zY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpvaSBmcm9tICdqb2knO1xuaW1wb3J0IHsgY29tcG9uZW50U2NoZW1hIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NvbXBvbmVudFNjaGVtYSc7XG5pbXBvcnQgeyBlbmRwb2ludHNTY2hlbWEgfSBmcm9tICcuLi8uLi9jb25maWcvc2NoZW1hJztcblxuY29uc3QgZ2xvYmFsU2NoZW1hID0gam9pLm9iamVjdCgpLmtleXMoe1xuICBzbHVnOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgbGFiZWw6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLnN0cmluZygpLFxuICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICApLFxuICBhZG1pbjogam9pLm9iamVjdCh7XG4gICAgaGlkZGVuOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgam9pLmJvb2xlYW4oKSxcbiAgICAgIGpvaS5mdW5jKCksXG4gICAgKSxcbiAgICBncm91cDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgIGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgW2pvaS5zdHJpbmcoKV0pLFxuICAgICksXG4gICAgaGlkZUFQSVVSTDogam9pLmJvb2xlYW4oKSxcbiAgICBkZXNjcmlwdGlvbjogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgIGpvaS5zdHJpbmcoKSxcbiAgICAgIGNvbXBvbmVudFNjaGVtYSxcbiAgICApLFxuICAgIGNvbXBvbmVudHM6IGpvaS5vYmplY3Qoe1xuICAgICAgdmlld3M6IGpvaS5vYmplY3Qoe1xuICAgICAgICBFZGl0OiBjb21wb25lbnRTY2hlbWEsXG4gICAgICB9KSxcbiAgICAgIGVsZW1lbnRzOiBqb2kub2JqZWN0KHtcbiAgICAgICAgU2F2ZUJ1dHRvbjogY29tcG9uZW50U2NoZW1hLFxuICAgICAgICBQdWJsaXNoQnV0dG9uOiBjb21wb25lbnRTY2hlbWEsXG4gICAgICAgIFNhdmVEcmFmdEJ1dHRvbjogY29tcG9uZW50U2NoZW1hLFxuICAgICAgICBQcmV2aWV3QnV0dG9uOiBjb21wb25lbnRTY2hlbWEsXG4gICAgICB9KSxcbiAgICB9KSxcbiAgICBwcmV2aWV3OiBqb2kuZnVuYygpLFxuICB9KSxcbiAgdHlwZXNjcmlwdDogam9pLm9iamVjdCgpLmtleXMoe1xuICAgIGludGVyZmFjZTogam9pLnN0cmluZygpLFxuICB9KSxcbiAgZ3JhcGhRTDogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICBuYW1lOiBqb2kuc3RyaW5nKCksXG4gICAgfSksXG4gICAgam9pLmJvb2xlYW4oKSxcbiAgKSxcbiAgaG9va3M6IGpvaS5vYmplY3Qoe1xuICAgIGJlZm9yZVZhbGlkYXRlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBiZWZvcmVDaGFuZ2U6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIGFmdGVyQ2hhbmdlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBiZWZvcmVSZWFkOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICBhZnRlclJlYWQ6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICB9KSxcbiAgZW5kcG9pbnRzOiBlbmRwb2ludHNTY2hlbWEsXG4gIGFjY2Vzczogam9pLm9iamVjdCh7XG4gICAgcmVhZDogam9pLmZ1bmMoKSxcbiAgICByZWFkVmVyc2lvbnM6IGpvaS5mdW5jKCksXG4gICAgdXBkYXRlOiBqb2kuZnVuYygpLFxuICB9KSxcbiAgZmllbGRzOiBqb2kuYXJyYXkoKSxcbiAgdmVyc2lvbnM6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgam9pLm9iamVjdCh7XG4gICAgICBtYXg6IGpvaS5udW1iZXIoKSxcbiAgICAgIGRyYWZ0czogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICAgICAgam9pLm9iamVjdCh7XG4gICAgICAgICAgYXV0b3NhdmU6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICAgICAgICBqb2kuYm9vbGVhbigpLFxuICAgICAgICAgICAgam9pLm9iamVjdCh7XG4gICAgICAgICAgICAgIGludGVydmFsOiBqb2kubnVtYmVyKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApLFxuICAgICAgICB9KSxcbiAgICAgICAgam9pLmJvb2xlYW4oKSxcbiAgICAgICksXG4gICAgfSksXG4gICAgam9pLmJvb2xlYW4oKSxcbiAgKSxcbiAgY3VzdG9tOiBqb2kub2JqZWN0KCkucGF0dGVybihqb2kuc3RyaW5nKCksIGpvaS5hbnkoKSksXG59KS51bmtub3duKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbFNjaGVtYTtcbiJdLCJuYW1lcyI6WyJqb2kiLCJjb21wb25lbnRTY2hlbWEiLCJlbmRwb2ludHNTY2hlbWEiLCJnbG9iYWxTY2hlbWEiLCJvYmplY3QiLCJrZXlzIiwic2x1ZyIsInN0cmluZyIsInJlcXVpcmVkIiwibGFiZWwiLCJhbHRlcm5hdGl2ZXMiLCJ0cnkiLCJwYXR0ZXJuIiwiYWRtaW4iLCJoaWRkZW4iLCJib29sZWFuIiwiZnVuYyIsImdyb3VwIiwiaGlkZUFQSVVSTCIsImRlc2NyaXB0aW9uIiwiY29tcG9uZW50cyIsInZpZXdzIiwiRWRpdCIsImVsZW1lbnRzIiwiU2F2ZUJ1dHRvbiIsIlB1Ymxpc2hCdXR0b24iLCJTYXZlRHJhZnRCdXR0b24iLCJQcmV2aWV3QnV0dG9uIiwicHJldmlldyIsInR5cGVzY3JpcHQiLCJpbnRlcmZhY2UiLCJncmFwaFFMIiwibmFtZSIsImhvb2tzIiwiYmVmb3JlVmFsaWRhdGUiLCJhcnJheSIsIml0ZW1zIiwiYmVmb3JlQ2hhbmdlIiwiYWZ0ZXJDaGFuZ2UiLCJiZWZvcmVSZWFkIiwiYWZ0ZXJSZWFkIiwiZW5kcG9pbnRzIiwiYWNjZXNzIiwicmVhZCIsInJlYWRWZXJzaW9ucyIsInVwZGF0ZSIsImZpZWxkcyIsInZlcnNpb25zIiwibWF4IiwibnVtYmVyIiwiZHJhZnRzIiwiYXV0b3NhdmUiLCJpbnRlcnZhbCIsImN1c3RvbSIsImFueSIsInVua25vd24iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVMsTUFBTTtBQUN0QixTQUFTQyxlQUFlLFFBQVEsa0NBQWtDO0FBQ2xFLFNBQVNDLGVBQWUsUUFBUSxzQkFBc0I7QUFFdEQsSUFBTUMsZUFBZUgsSUFBSUksTUFBTSxHQUFHQyxJQUFJLENBQUM7SUFDckNDLE1BQU1OLElBQUlPLE1BQU0sR0FBR0MsUUFBUTtJQUMzQkMsT0FBT1QsSUFBSVUsWUFBWSxHQUFHQyxHQUFHLENBQzNCWCxJQUFJTyxNQUFNLElBQ1ZQLElBQUlJLE1BQU0sR0FBR1EsT0FBTyxDQUFDWixJQUFJTyxNQUFNLElBQUk7UUFBQ1AsSUFBSU8sTUFBTTtLQUFHO0lBRW5ETSxPQUFPYixJQUFJSSxNQUFNLENBQUM7UUFDaEJVLFFBQVFkLElBQUlVLFlBQVksR0FBR0MsR0FBRyxDQUM1QlgsSUFBSWUsT0FBTyxJQUNYZixJQUFJZ0IsSUFBSTtRQUVWQyxPQUFPakIsSUFBSVUsWUFBWSxHQUFHQyxHQUFHLENBQzNCWCxJQUFJTyxNQUFNLElBQ1ZQLElBQUlJLE1BQU0sR0FBR1EsT0FBTyxDQUFDWixJQUFJTyxNQUFNLElBQUk7WUFBQ1AsSUFBSU8sTUFBTTtTQUFHO1FBRW5EVyxZQUFZbEIsSUFBSWUsT0FBTztRQUN2QkksYUFBYW5CLElBQUlVLFlBQVksR0FBR0MsR0FBRyxDQUNqQ1gsSUFBSU8sTUFBTSxJQUNWTjtRQUVGbUIsWUFBWXBCLElBQUlJLE1BQU0sQ0FBQztZQUNyQmlCLE9BQU9yQixJQUFJSSxNQUFNLENBQUM7Z0JBQ2hCa0IsTUFBTXJCO1lBQ1I7WUFDQXNCLFVBQVV2QixJQUFJSSxNQUFNLENBQUM7Z0JBQ25Cb0IsWUFBWXZCO2dCQUNad0IsZUFBZXhCO2dCQUNmeUIsaUJBQWlCekI7Z0JBQ2pCMEIsZUFBZTFCO1lBQ2pCO1FBQ0Y7UUFDQTJCLFNBQVM1QixJQUFJZ0IsSUFBSTtJQUNuQjtJQUNBYSxZQUFZN0IsSUFBSUksTUFBTSxHQUFHQyxJQUFJLENBQUM7UUFDNUJ5QixXQUFXOUIsSUFBSU8sTUFBTTtJQUN2QjtJQUNBd0IsU0FBUy9CLElBQUlVLFlBQVksR0FBR0MsR0FBRyxDQUM3QlgsSUFBSUksTUFBTSxHQUFHQyxJQUFJLENBQUM7UUFDaEIyQixNQUFNaEMsSUFBSU8sTUFBTTtJQUNsQixJQUNBUCxJQUFJZSxPQUFPO0lBRWJrQixPQUFPakMsSUFBSUksTUFBTSxDQUFDO1FBQ2hCOEIsZ0JBQWdCbEMsSUFBSW1DLEtBQUssR0FBR0MsS0FBSyxDQUFDcEMsSUFBSWdCLElBQUk7UUFDMUNxQixjQUFjckMsSUFBSW1DLEtBQUssR0FBR0MsS0FBSyxDQUFDcEMsSUFBSWdCLElBQUk7UUFDeENzQixhQUFhdEMsSUFBSW1DLEtBQUssR0FBR0MsS0FBSyxDQUFDcEMsSUFBSWdCLElBQUk7UUFDdkN1QixZQUFZdkMsSUFBSW1DLEtBQUssR0FBR0MsS0FBSyxDQUFDcEMsSUFBSWdCLElBQUk7UUFDdEN3QixXQUFXeEMsSUFBSW1DLEtBQUssR0FBR0MsS0FBSyxDQUFDcEMsSUFBSWdCLElBQUk7SUFDdkM7SUFDQXlCLFdBQVd2QztJQUNYd0MsUUFBUTFDLElBQUlJLE1BQU0sQ0FBQztRQUNqQnVDLE1BQU0zQyxJQUFJZ0IsSUFBSTtRQUNkNEIsY0FBYzVDLElBQUlnQixJQUFJO1FBQ3RCNkIsUUFBUTdDLElBQUlnQixJQUFJO0lBQ2xCO0lBQ0E4QixRQUFROUMsSUFBSW1DLEtBQUs7SUFDakJZLFVBQVUvQyxJQUFJVSxZQUFZLEdBQUdDLEdBQUcsQ0FDOUJYLElBQUlJLE1BQU0sQ0FBQztRQUNUNEMsS0FBS2hELElBQUlpRCxNQUFNO1FBQ2ZDLFFBQVFsRCxJQUFJVSxZQUFZLEdBQUdDLEdBQUcsQ0FDNUJYLElBQUlJLE1BQU0sQ0FBQztZQUNUK0MsVUFBVW5ELElBQUlVLFlBQVksR0FBR0MsR0FBRyxDQUM5QlgsSUFBSWUsT0FBTyxJQUNYZixJQUFJSSxNQUFNLENBQUM7Z0JBQ1RnRCxVQUFVcEQsSUFBSWlELE1BQU07WUFDdEI7UUFFSixJQUNBakQsSUFBSWUsT0FBTztJQUVmLElBQ0FmLElBQUllLE9BQU87SUFFYnNDLFFBQVFyRCxJQUFJSSxNQUFNLEdBQUdRLE9BQU8sQ0FBQ1osSUFBSU8sTUFBTSxJQUFJUCxJQUFJc0QsR0FBRztBQUNwRCxHQUFHQyxPQUFPO0FBRVYsZUFBZXBELGFBQWEifQ==