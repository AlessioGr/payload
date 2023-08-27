import joi from "joi";
var component = joi.alternatives().try(joi.object().unknown(), joi.func());
export var endpointsSchema = joi.alternatives().try(joi.array().items(joi.object({
    path: joi.string(),
    method: joi.string().valid("get", "head", "post", "put", "patch", "delete", "connect", "options"),
    root: joi.bool(),
    handler: joi.alternatives().try(joi.array().items(joi.func()), joi.func()),
    custom: joi.object().pattern(joi.string(), joi.any())
})), joi.boolean());
export default joi.object({
    serverURL: joi.string().uri().allow("").custom(function(value, helper) {
        var urlWithoutProtocol = value.split("//")[1];
        if (!urlWithoutProtocol) {
            return helper.message({
                custom: 'You need to include either "https://" or "http://" in your serverURL.'
            });
        }
        if (urlWithoutProtocol.indexOf("/") > -1) {
            return helper.message({
                custom: "Your serverURL cannot have a path. It can only contain a protocol, a domain, and an optional port."
            });
        }
        return value;
    }),
    cookiePrefix: joi.string(),
    db: joi.any(),
    routes: joi.object({
        admin: joi.string(),
        api: joi.string(),
        graphQL: joi.string(),
        graphQLPlayground: joi.string()
    }),
    typescript: joi.object({
        outputFile: joi.string()
    }),
    collections: joi.array(),
    endpoints: endpointsSchema,
    globals: joi.array(),
    admin: joi.object({
        user: joi.string(),
        buildPath: joi.string(),
        meta: joi.object().keys({
            titleSuffix: joi.string(),
            ogImage: joi.string(),
            favicon: joi.string()
        }),
        disable: joi.bool(),
        indexHTML: joi.string(),
        css: joi.string(),
        dateFormat: joi.string(),
        avatar: joi.alternatives().try(joi.string(), component),
        logoutRoute: joi.string(),
        inactivityRoute: joi.string(),
        autoLogin: joi.alternatives().try(joi.object().keys({
            email: joi.string(),
            password: joi.string(),
            prefillOnly: joi.boolean()
        }), joi.boolean()),
        components: joi.object().keys({
            routes: joi.array().items(joi.object().keys({
                Component: component.required(),
                path: joi.string().required(),
                exact: joi.bool(),
                strict: joi.bool(),
                sensitive: joi.bool()
            })),
            providers: joi.array().items(component),
            beforeDashboard: joi.array().items(component),
            afterDashboard: joi.array().items(component),
            beforeLogin: joi.array().items(component),
            afterLogin: joi.array().items(component),
            beforeNavLinks: joi.array().items(component),
            afterNavLinks: joi.array().items(component),
            Nav: component,
            logout: joi.object({
                Button: component
            }),
            views: joi.object({
                Dashboard: component,
                Account: component
            }),
            graphics: joi.object({
                Icon: component,
                Logo: component
            })
        }),
        webpack: joi.func(),
        bundler: {
            dev: joi.func(),
            build: joi.func(),
            serve: joi.func()
        }
    }),
    email: joi.object(),
    i18n: joi.object(),
    defaultDepth: joi.number().min(0).max(30),
    maxDepth: joi.number().min(0).max(100),
    defaultMaxTextLength: joi.number(),
    csrf: joi.array().items(joi.string().allow("")).sparse(),
    cors: [
        joi.string().valid("*"),
        joi.array().items(joi.string())
    ],
    express: joi.object().keys({
        json: joi.object(),
        compression: joi.object(),
        middleware: joi.array().items(joi.func()),
        preMiddleware: joi.array().items(joi.func()),
        postMiddleware: joi.array().items(joi.func())
    }),
    local: joi.boolean(),
    upload: joi.object(),
    indexSortableFields: joi.boolean(),
    rateLimit: joi.object().keys({
        window: joi.number(),
        max: joi.number(),
        trustProxy: joi.boolean(),
        skip: joi.func()
    }),
    graphQL: joi.object().keys({
        mutations: joi.function(),
        queries: joi.function(),
        maxComplexity: joi.number(),
        disablePlaygroundInProduction: joi.boolean(),
        disable: joi.boolean(),
        schemaOutputFile: joi.string()
    }),
    localization: joi.alternatives().try(joi.object().keys({
        locales: joi.alternatives().try(joi.array().items(joi.object().keys({
            label: joi.string(),
            code: joi.string(),
            rtl: joi.boolean(),
            toString: joi.func()
        })), joi.array().items(joi.string())),
        localeCodes: joi.array().items(joi.string()),
        defaultLocale: joi.string(),
        fallback: joi.boolean()
    }), joi.boolean()),
    hooks: joi.object().keys({
        afterError: joi.func()
    }),
    telemetry: joi.boolean(),
    plugins: joi.array().items(joi.func()),
    onInit: joi.func(),
    debug: joi.boolean(),
    custom: joi.object().pattern(joi.string(), joi.any())
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvc2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqb2kgZnJvbSAnam9pJztcblxuY29uc3QgY29tcG9uZW50ID0gam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgam9pLm9iamVjdCgpLnVua25vd24oKSxcbiAgam9pLmZ1bmMoKSxcbik7XG5cbmV4cG9ydCBjb25zdCBlbmRwb2ludHNTY2hlbWEgPSBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICBqb2kuYXJyYXkoKS5pdGVtcyhqb2kub2JqZWN0KHtcbiAgICBwYXRoOiBqb2kuc3RyaW5nKCksXG4gICAgbWV0aG9kOiBqb2kuc3RyaW5nKCkudmFsaWQoJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2RlbGV0ZScsICdjb25uZWN0JywgJ29wdGlvbnMnKSxcbiAgICByb290OiBqb2kuYm9vbCgpLFxuICAgIGhhbmRsZXI6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICAgIGpvaS5mdW5jKCksXG4gICAgKSxcbiAgICBjdXN0b206IGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgam9pLmFueSgpKSxcbiAgfSkpLFxuICBqb2kuYm9vbGVhbigpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgam9pLm9iamVjdCh7XG4gIHNlcnZlclVSTDogam9pLnN0cmluZygpXG4gICAgLnVyaSgpXG4gICAgLmFsbG93KCcnKVxuICAgIC5jdXN0b20oKHZhbHVlLCBoZWxwZXIpID0+IHtcbiAgICAgIGNvbnN0IHVybFdpdGhvdXRQcm90b2NvbCA9IHZhbHVlLnNwbGl0KCcvLycpWzFdO1xuXG4gICAgICBpZiAoIXVybFdpdGhvdXRQcm90b2NvbCkge1xuICAgICAgICByZXR1cm4gaGVscGVyLm1lc3NhZ2UoeyBjdXN0b206ICdZb3UgbmVlZCB0byBpbmNsdWRlIGVpdGhlciBcImh0dHBzOi8vXCIgb3IgXCJodHRwOi8vXCIgaW4geW91ciBzZXJ2ZXJVUkwuJyB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVybFdpdGhvdXRQcm90b2NvbC5pbmRleE9mKCcvJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gaGVscGVyLm1lc3NhZ2UoeyBjdXN0b206ICdZb3VyIHNlcnZlclVSTCBjYW5ub3QgaGF2ZSBhIHBhdGguIEl0IGNhbiBvbmx5IGNvbnRhaW4gYSBwcm90b2NvbCwgYSBkb21haW4sIGFuZCBhbiBvcHRpb25hbCBwb3J0LicgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KSxcbiAgY29va2llUHJlZml4OiBqb2kuc3RyaW5nKCksXG4gIGRiOiBqb2kuYW55KCksXG4gIHJvdXRlczogam9pLm9iamVjdCh7XG4gICAgYWRtaW46IGpvaS5zdHJpbmcoKSxcbiAgICBhcGk6IGpvaS5zdHJpbmcoKSxcbiAgICBncmFwaFFMOiBqb2kuc3RyaW5nKCksXG4gICAgZ3JhcGhRTFBsYXlncm91bmQ6IGpvaS5zdHJpbmcoKSxcbiAgfSksXG4gIHR5cGVzY3JpcHQ6IGpvaS5vYmplY3Qoe1xuICAgIG91dHB1dEZpbGU6IGpvaS5zdHJpbmcoKSxcbiAgfSksXG4gIGNvbGxlY3Rpb25zOiBqb2kuYXJyYXkoKSxcbiAgZW5kcG9pbnRzOiBlbmRwb2ludHNTY2hlbWEsXG4gIGdsb2JhbHM6IGpvaS5hcnJheSgpLFxuICBhZG1pbjogam9pLm9iamVjdCh7XG4gICAgdXNlcjogam9pLnN0cmluZygpLFxuICAgIGJ1aWxkUGF0aDogam9pLnN0cmluZygpLFxuICAgIG1ldGE6IGpvaS5vYmplY3QoKVxuICAgICAgLmtleXMoe1xuICAgICAgICB0aXRsZVN1ZmZpeDogam9pLnN0cmluZygpLFxuICAgICAgICBvZ0ltYWdlOiBqb2kuc3RyaW5nKCksXG4gICAgICAgIGZhdmljb246IGpvaS5zdHJpbmcoKSxcbiAgICAgIH0pLFxuICAgIGRpc2FibGU6IGpvaS5ib29sKCksXG4gICAgaW5kZXhIVE1MOiBqb2kuc3RyaW5nKCksXG4gICAgY3NzOiBqb2kuc3RyaW5nKCksXG4gICAgZGF0ZUZvcm1hdDogam9pLnN0cmluZygpLFxuICAgIGF2YXRhcjogam9pLmFsdGVybmF0aXZlcygpXG4gICAgICAudHJ5KFxuICAgICAgICBqb2kuc3RyaW5nKCksXG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICksXG4gICAgbG9nb3V0Um91dGU6IGpvaS5zdHJpbmcoKSxcbiAgICBpbmFjdGl2aXR5Um91dGU6IGpvaS5zdHJpbmcoKSxcbiAgICBhdXRvTG9naW46IGpvaS5hbHRlcm5hdGl2ZXMoKVxuICAgICAgLnRyeShcbiAgICAgICAgam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICAgIGVtYWlsOiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgcGFzc3dvcmQ6IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgICBwcmVmaWxsT25seTogam9pLmJvb2xlYW4oKSxcbiAgICAgICAgfSksXG4gICAgICAgIGpvaS5ib29sZWFuKCksXG4gICAgICApLFxuICAgIGNvbXBvbmVudHM6IGpvaS5vYmplY3QoKVxuICAgICAgLmtleXMoe1xuICAgICAgICByb3V0ZXM6IGpvaS5hcnJheSgpXG4gICAgICAgICAgLml0ZW1zKFxuICAgICAgICAgICAgam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICAgICAgICBDb21wb25lbnQ6IGNvbXBvbmVudC5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgICBwYXRoOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgICAgZXhhY3Q6IGpvaS5ib29sKCksXG4gICAgICAgICAgICAgIHN0cmljdDogam9pLmJvb2woKSxcbiAgICAgICAgICAgICAgc2Vuc2l0aXZlOiBqb2kuYm9vbCgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKSxcbiAgICAgICAgcHJvdmlkZXJzOiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnQpLFxuICAgICAgICBiZWZvcmVEYXNoYm9hcmQ6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudCksXG4gICAgICAgIGFmdGVyRGFzaGJvYXJkOiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnQpLFxuICAgICAgICBiZWZvcmVMb2dpbjogam9pLmFycmF5KCkuaXRlbXMoY29tcG9uZW50KSxcbiAgICAgICAgYWZ0ZXJMb2dpbjogam9pLmFycmF5KCkuaXRlbXMoY29tcG9uZW50KSxcbiAgICAgICAgYmVmb3JlTmF2TGlua3M6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudCksXG4gICAgICAgIGFmdGVyTmF2TGlua3M6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudCksXG4gICAgICAgIE5hdjogY29tcG9uZW50LFxuICAgICAgICBsb2dvdXQ6IGpvaS5vYmplY3Qoe1xuICAgICAgICAgIEJ1dHRvbjogY29tcG9uZW50LFxuICAgICAgICB9KSxcbiAgICAgICAgdmlld3M6IGpvaS5vYmplY3Qoe1xuICAgICAgICAgIERhc2hib2FyZDogY29tcG9uZW50LFxuICAgICAgICAgIEFjY291bnQ6IGNvbXBvbmVudCxcbiAgICAgICAgfSksXG4gICAgICAgIGdyYXBoaWNzOiBqb2kub2JqZWN0KHtcbiAgICAgICAgICBJY29uOiBjb21wb25lbnQsXG4gICAgICAgICAgTG9nbzogY29tcG9uZW50LFxuICAgICAgICB9KSxcbiAgICAgIH0pLFxuICAgIHdlYnBhY2s6IGpvaS5mdW5jKCksXG4gICAgYnVuZGxlcjoge1xuICAgICAgZGV2OiBqb2kuZnVuYygpLFxuICAgICAgYnVpbGQ6IGpvaS5mdW5jKCksXG4gICAgICBzZXJ2ZTogam9pLmZ1bmMoKSxcbiAgICB9LFxuICB9KSxcbiAgZW1haWw6IGpvaS5vYmplY3QoKSxcbiAgaTE4bjogam9pLm9iamVjdCgpLFxuICBkZWZhdWx0RGVwdGg6IGpvaS5udW1iZXIoKVxuICAgIC5taW4oMClcbiAgICAubWF4KDMwKSxcbiAgbWF4RGVwdGg6IGpvaS5udW1iZXIoKVxuICAgIC5taW4oMClcbiAgICAubWF4KDEwMCksXG4gIGRlZmF1bHRNYXhUZXh0TGVuZ3RoOiBqb2kubnVtYmVyKCksXG4gIGNzcmY6IGpvaS5hcnJheSgpXG4gICAgLml0ZW1zKGpvaS5zdHJpbmcoKS5hbGxvdygnJykpXG4gICAgLnNwYXJzZSgpLFxuICBjb3JzOiBbXG4gICAgam9pLnN0cmluZygpXG4gICAgICAudmFsaWQoJyonKSxcbiAgICBqb2kuYXJyYXkoKVxuICAgICAgLml0ZW1zKGpvaS5zdHJpbmcoKSksXG4gIF0sXG4gIGV4cHJlc3M6IGpvaS5vYmplY3QoKVxuICAgIC5rZXlzKHtcbiAgICAgIGpzb246IGpvaS5vYmplY3QoKSxcbiAgICAgIGNvbXByZXNzaW9uOiBqb2kub2JqZWN0KCksXG4gICAgICBtaWRkbGV3YXJlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICAgIHByZU1pZGRsZXdhcmU6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgICAgcG9zdE1pZGRsZXdhcmU6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIH0pLFxuICBsb2NhbDogam9pLmJvb2xlYW4oKSxcbiAgdXBsb2FkOiBqb2kub2JqZWN0KCksXG4gIGluZGV4U29ydGFibGVGaWVsZHM6IGpvaS5ib29sZWFuKCksXG4gIHJhdGVMaW1pdDogam9pLm9iamVjdCgpXG4gICAgLmtleXMoe1xuICAgICAgd2luZG93OiBqb2kubnVtYmVyKCksXG4gICAgICBtYXg6IGpvaS5udW1iZXIoKSxcbiAgICAgIHRydXN0UHJveHk6IGpvaS5ib29sZWFuKCksXG4gICAgICBza2lwOiBqb2kuZnVuYygpLFxuICAgIH0pLFxuICBncmFwaFFMOiBqb2kub2JqZWN0KClcbiAgICAua2V5cyh7XG4gICAgICBtdXRhdGlvbnM6IGpvaS5mdW5jdGlvbigpLFxuICAgICAgcXVlcmllczogam9pLmZ1bmN0aW9uKCksXG4gICAgICBtYXhDb21wbGV4aXR5OiBqb2kubnVtYmVyKCksXG4gICAgICBkaXNhYmxlUGxheWdyb3VuZEluUHJvZHVjdGlvbjogam9pLmJvb2xlYW4oKSxcbiAgICAgIGRpc2FibGU6IGpvaS5ib29sZWFuKCksXG4gICAgICBzY2hlbWFPdXRwdXRGaWxlOiBqb2kuc3RyaW5nKCksXG4gICAgfSksXG4gIGxvY2FsaXphdGlvbjogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICBsb2NhbGVzOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICBqb2kuYXJyYXkoKS5pdGVtcyhcbiAgICAgICAgICBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgICAgICBsYWJlbDogam9pLnN0cmluZygpLFxuICAgICAgICAgICAgY29kZTogam9pLnN0cmluZygpLFxuICAgICAgICAgICAgcnRsOiBqb2kuYm9vbGVhbigpLFxuICAgICAgICAgICAgdG9TdHJpbmc6IGpvaS5mdW5jKCksXG4gICAgICAgICAgfSksXG4gICAgICAgICksXG4gICAgICAgIGpvaS5hcnJheSgpLml0ZW1zKGpvaS5zdHJpbmcoKSksXG4gICAgICApLFxuICAgICAgbG9jYWxlQ29kZXM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5zdHJpbmcoKSksXG4gICAgICBkZWZhdWx0TG9jYWxlOiBqb2kuc3RyaW5nKCksXG4gICAgICBmYWxsYmFjazogam9pLmJvb2xlYW4oKSxcbiAgICB9KSxcbiAgICBqb2kuYm9vbGVhbigpLFxuICApLFxuICBob29rczogam9pLm9iamVjdCgpLmtleXMoe1xuICAgIGFmdGVyRXJyb3I6IGpvaS5mdW5jKCksXG4gIH0pLFxuICB0ZWxlbWV0cnk6IGpvaS5ib29sZWFuKCksXG4gIHBsdWdpbnM6IGpvaS5hcnJheSgpLml0ZW1zKFxuICAgIGpvaS5mdW5jKCksXG4gICksXG4gIG9uSW5pdDogam9pLmZ1bmMoKSxcbiAgZGVidWc6IGpvaS5ib29sZWFuKCksXG4gIGN1c3RvbTogam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBqb2kuYW55KCkpLFxufSk7XG4iXSwibmFtZXMiOlsiam9pIiwiY29tcG9uZW50IiwiYWx0ZXJuYXRpdmVzIiwidHJ5Iiwib2JqZWN0IiwidW5rbm93biIsImZ1bmMiLCJlbmRwb2ludHNTY2hlbWEiLCJhcnJheSIsIml0ZW1zIiwicGF0aCIsInN0cmluZyIsIm1ldGhvZCIsInZhbGlkIiwicm9vdCIsImJvb2wiLCJoYW5kbGVyIiwiY3VzdG9tIiwicGF0dGVybiIsImFueSIsImJvb2xlYW4iLCJzZXJ2ZXJVUkwiLCJ1cmkiLCJhbGxvdyIsInZhbHVlIiwiaGVscGVyIiwidXJsV2l0aG91dFByb3RvY29sIiwic3BsaXQiLCJtZXNzYWdlIiwiaW5kZXhPZiIsImNvb2tpZVByZWZpeCIsImRiIiwicm91dGVzIiwiYWRtaW4iLCJhcGkiLCJncmFwaFFMIiwiZ3JhcGhRTFBsYXlncm91bmQiLCJ0eXBlc2NyaXB0Iiwib3V0cHV0RmlsZSIsImNvbGxlY3Rpb25zIiwiZW5kcG9pbnRzIiwiZ2xvYmFscyIsInVzZXIiLCJidWlsZFBhdGgiLCJtZXRhIiwia2V5cyIsInRpdGxlU3VmZml4Iiwib2dJbWFnZSIsImZhdmljb24iLCJkaXNhYmxlIiwiaW5kZXhIVE1MIiwiY3NzIiwiZGF0ZUZvcm1hdCIsImF2YXRhciIsImxvZ291dFJvdXRlIiwiaW5hY3Rpdml0eVJvdXRlIiwiYXV0b0xvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInByZWZpbGxPbmx5IiwiY29tcG9uZW50cyIsIkNvbXBvbmVudCIsInJlcXVpcmVkIiwiZXhhY3QiLCJzdHJpY3QiLCJzZW5zaXRpdmUiLCJwcm92aWRlcnMiLCJiZWZvcmVEYXNoYm9hcmQiLCJhZnRlckRhc2hib2FyZCIsImJlZm9yZUxvZ2luIiwiYWZ0ZXJMb2dpbiIsImJlZm9yZU5hdkxpbmtzIiwiYWZ0ZXJOYXZMaW5rcyIsIk5hdiIsImxvZ291dCIsIkJ1dHRvbiIsInZpZXdzIiwiRGFzaGJvYXJkIiwiQWNjb3VudCIsImdyYXBoaWNzIiwiSWNvbiIsIkxvZ28iLCJ3ZWJwYWNrIiwiYnVuZGxlciIsImRldiIsImJ1aWxkIiwic2VydmUiLCJpMThuIiwiZGVmYXVsdERlcHRoIiwibnVtYmVyIiwibWluIiwibWF4IiwibWF4RGVwdGgiLCJkZWZhdWx0TWF4VGV4dExlbmd0aCIsImNzcmYiLCJzcGFyc2UiLCJjb3JzIiwiZXhwcmVzcyIsImpzb24iLCJjb21wcmVzc2lvbiIsIm1pZGRsZXdhcmUiLCJwcmVNaWRkbGV3YXJlIiwicG9zdE1pZGRsZXdhcmUiLCJsb2NhbCIsInVwbG9hZCIsImluZGV4U29ydGFibGVGaWVsZHMiLCJyYXRlTGltaXQiLCJ3aW5kb3ciLCJ0cnVzdFByb3h5Iiwic2tpcCIsIm11dGF0aW9ucyIsImZ1bmN0aW9uIiwicXVlcmllcyIsIm1heENvbXBsZXhpdHkiLCJkaXNhYmxlUGxheWdyb3VuZEluUHJvZHVjdGlvbiIsInNjaGVtYU91dHB1dEZpbGUiLCJsb2NhbGl6YXRpb24iLCJsb2NhbGVzIiwibGFiZWwiLCJjb2RlIiwicnRsIiwidG9TdHJpbmciLCJsb2NhbGVDb2RlcyIsImRlZmF1bHRMb2NhbGUiLCJmYWxsYmFjayIsImhvb2tzIiwiYWZ0ZXJFcnJvciIsInRlbGVtZXRyeSIsInBsdWdpbnMiLCJvbkluaXQiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUyxNQUFNO0FBRXRCLElBQU1DLFlBQVlELElBQUlFLFlBQVksR0FBR0MsR0FBRyxDQUN0Q0gsSUFBSUksTUFBTSxHQUFHQyxPQUFPLElBQ3BCTCxJQUFJTSxJQUFJO0FBR1YsT0FBTyxJQUFNQyxrQkFBa0JQLElBQUlFLFlBQVksR0FBR0MsR0FBRyxDQUNuREgsSUFBSVEsS0FBSyxHQUFHQyxLQUFLLENBQUNULElBQUlJLE1BQU0sQ0FBQztJQUMzQk0sTUFBTVYsSUFBSVcsTUFBTTtJQUNoQkMsUUFBUVosSUFBSVcsTUFBTSxHQUFHRSxLQUFLLENBQUMsT0FBTyxRQUFRLFFBQVEsT0FBTyxTQUFTLFVBQVUsV0FBVztJQUN2RkMsTUFBTWQsSUFBSWUsSUFBSTtJQUNkQyxTQUFTaEIsSUFBSUUsWUFBWSxHQUFHQyxHQUFHLENBQzdCSCxJQUFJUSxLQUFLLEdBQUdDLEtBQUssQ0FBQ1QsSUFBSU0sSUFBSSxLQUMxQk4sSUFBSU0sSUFBSTtJQUVWVyxRQUFRakIsSUFBSUksTUFBTSxHQUFHYyxPQUFPLENBQUNsQixJQUFJVyxNQUFNLElBQUlYLElBQUltQixHQUFHO0FBQ3BELEtBQ0FuQixJQUFJb0IsT0FBTyxJQUNYO0FBRUYsZUFBZXBCLElBQUlJLE1BQU0sQ0FBQztJQUN4QmlCLFdBQVdyQixJQUFJVyxNQUFNLEdBQ2xCVyxHQUFHLEdBQ0hDLEtBQUssQ0FBQyxJQUNOTixNQUFNLENBQUMsU0FBQ08sT0FBT0M7UUFDZCxJQUFNQyxxQkFBcUJGLE1BQU1HLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUUvQyxJQUFJLENBQUNELG9CQUFvQjtZQUN2QixPQUFPRCxPQUFPRyxPQUFPLENBQUM7Z0JBQUVYLFFBQVE7WUFBd0U7UUFDMUc7UUFFQSxJQUFJUyxtQkFBbUJHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRztZQUN4QyxPQUFPSixPQUFPRyxPQUFPLENBQUM7Z0JBQUVYLFFBQVE7WUFBcUc7UUFDdkk7UUFFQSxPQUFPTztJQUNUO0lBQ0ZNLGNBQWM5QixJQUFJVyxNQUFNO0lBQ3hCb0IsSUFBSS9CLElBQUltQixHQUFHO0lBQ1hhLFFBQVFoQyxJQUFJSSxNQUFNLENBQUM7UUFDakI2QixPQUFPakMsSUFBSVcsTUFBTTtRQUNqQnVCLEtBQUtsQyxJQUFJVyxNQUFNO1FBQ2Z3QixTQUFTbkMsSUFBSVcsTUFBTTtRQUNuQnlCLG1CQUFtQnBDLElBQUlXLE1BQU07SUFDL0I7SUFDQTBCLFlBQVlyQyxJQUFJSSxNQUFNLENBQUM7UUFDckJrQyxZQUFZdEMsSUFBSVcsTUFBTTtJQUN4QjtJQUNBNEIsYUFBYXZDLElBQUlRLEtBQUs7SUFDdEJnQyxXQUFXakM7SUFDWGtDLFNBQVN6QyxJQUFJUSxLQUFLO0lBQ2xCeUIsT0FBT2pDLElBQUlJLE1BQU0sQ0FBQztRQUNoQnNDLE1BQU0xQyxJQUFJVyxNQUFNO1FBQ2hCZ0MsV0FBVzNDLElBQUlXLE1BQU07UUFDckJpQyxNQUFNNUMsSUFBSUksTUFBTSxHQUNieUMsSUFBSSxDQUFDO1lBQ0pDLGFBQWE5QyxJQUFJVyxNQUFNO1lBQ3ZCb0MsU0FBUy9DLElBQUlXLE1BQU07WUFDbkJxQyxTQUFTaEQsSUFBSVcsTUFBTTtRQUNyQjtRQUNGc0MsU0FBU2pELElBQUllLElBQUk7UUFDakJtQyxXQUFXbEQsSUFBSVcsTUFBTTtRQUNyQndDLEtBQUtuRCxJQUFJVyxNQUFNO1FBQ2Z5QyxZQUFZcEQsSUFBSVcsTUFBTTtRQUN0QjBDLFFBQVFyRCxJQUFJRSxZQUFZLEdBQ3JCQyxHQUFHLENBQ0ZILElBQUlXLE1BQU0sSUFDVlY7UUFFSnFELGFBQWF0RCxJQUFJVyxNQUFNO1FBQ3ZCNEMsaUJBQWlCdkQsSUFBSVcsTUFBTTtRQUMzQjZDLFdBQVd4RCxJQUFJRSxZQUFZLEdBQ3hCQyxHQUFHLENBQ0ZILElBQUlJLE1BQU0sR0FBR3lDLElBQUksQ0FBQztZQUNoQlksT0FBT3pELElBQUlXLE1BQU07WUFDakIrQyxVQUFVMUQsSUFBSVcsTUFBTTtZQUNwQmdELGFBQWEzRCxJQUFJb0IsT0FBTztRQUMxQixJQUNBcEIsSUFBSW9CLE9BQU87UUFFZndDLFlBQVk1RCxJQUFJSSxNQUFNLEdBQ25CeUMsSUFBSSxDQUFDO1lBQ0piLFFBQVFoQyxJQUFJUSxLQUFLLEdBQ2RDLEtBQUssQ0FDSlQsSUFBSUksTUFBTSxHQUFHeUMsSUFBSSxDQUFDO2dCQUNoQmdCLFdBQVc1RCxVQUFVNkQsUUFBUTtnQkFDN0JwRCxNQUFNVixJQUFJVyxNQUFNLEdBQUdtRCxRQUFRO2dCQUMzQkMsT0FBTy9ELElBQUllLElBQUk7Z0JBQ2ZpRCxRQUFRaEUsSUFBSWUsSUFBSTtnQkFDaEJrRCxXQUFXakUsSUFBSWUsSUFBSTtZQUNyQjtZQUVKbUQsV0FBV2xFLElBQUlRLEtBQUssR0FBR0MsS0FBSyxDQUFDUjtZQUM3QmtFLGlCQUFpQm5FLElBQUlRLEtBQUssR0FBR0MsS0FBSyxDQUFDUjtZQUNuQ21FLGdCQUFnQnBFLElBQUlRLEtBQUssR0FBR0MsS0FBSyxDQUFDUjtZQUNsQ29FLGFBQWFyRSxJQUFJUSxLQUFLLEdBQUdDLEtBQUssQ0FBQ1I7WUFDL0JxRSxZQUFZdEUsSUFBSVEsS0FBSyxHQUFHQyxLQUFLLENBQUNSO1lBQzlCc0UsZ0JBQWdCdkUsSUFBSVEsS0FBSyxHQUFHQyxLQUFLLENBQUNSO1lBQ2xDdUUsZUFBZXhFLElBQUlRLEtBQUssR0FBR0MsS0FBSyxDQUFDUjtZQUNqQ3dFLEtBQUt4RTtZQUNMeUUsUUFBUTFFLElBQUlJLE1BQU0sQ0FBQztnQkFDakJ1RSxRQUFRMUU7WUFDVjtZQUNBMkUsT0FBTzVFLElBQUlJLE1BQU0sQ0FBQztnQkFDaEJ5RSxXQUFXNUU7Z0JBQ1g2RSxTQUFTN0U7WUFDWDtZQUNBOEUsVUFBVS9FLElBQUlJLE1BQU0sQ0FBQztnQkFDbkI0RSxNQUFNL0U7Z0JBQ05nRixNQUFNaEY7WUFDUjtRQUNGO1FBQ0ZpRixTQUFTbEYsSUFBSU0sSUFBSTtRQUNqQjZFLFNBQVM7WUFDUEMsS0FBS3BGLElBQUlNLElBQUk7WUFDYitFLE9BQU9yRixJQUFJTSxJQUFJO1lBQ2ZnRixPQUFPdEYsSUFBSU0sSUFBSTtRQUNqQjtJQUNGO0lBQ0FtRCxPQUFPekQsSUFBSUksTUFBTTtJQUNqQm1GLE1BQU12RixJQUFJSSxNQUFNO0lBQ2hCb0YsY0FBY3hGLElBQUl5RixNQUFNLEdBQ3JCQyxHQUFHLENBQUMsR0FDSkMsR0FBRyxDQUFDO0lBQ1BDLFVBQVU1RixJQUFJeUYsTUFBTSxHQUNqQkMsR0FBRyxDQUFDLEdBQ0pDLEdBQUcsQ0FBQztJQUNQRSxzQkFBc0I3RixJQUFJeUYsTUFBTTtJQUNoQ0ssTUFBTTlGLElBQUlRLEtBQUssR0FDWkMsS0FBSyxDQUFDVCxJQUFJVyxNQUFNLEdBQUdZLEtBQUssQ0FBQyxLQUN6QndFLE1BQU07SUFDVEMsTUFBTTtRQUNKaEcsSUFBSVcsTUFBTSxHQUNQRSxLQUFLLENBQUM7UUFDVGIsSUFBSVEsS0FBSyxHQUNOQyxLQUFLLENBQUNULElBQUlXLE1BQU07S0FDcEI7SUFDRHNGLFNBQVNqRyxJQUFJSSxNQUFNLEdBQ2hCeUMsSUFBSSxDQUFDO1FBQ0pxRCxNQUFNbEcsSUFBSUksTUFBTTtRQUNoQitGLGFBQWFuRyxJQUFJSSxNQUFNO1FBQ3ZCZ0csWUFBWXBHLElBQUlRLEtBQUssR0FBR0MsS0FBSyxDQUFDVCxJQUFJTSxJQUFJO1FBQ3RDK0YsZUFBZXJHLElBQUlRLEtBQUssR0FBR0MsS0FBSyxDQUFDVCxJQUFJTSxJQUFJO1FBQ3pDZ0csZ0JBQWdCdEcsSUFBSVEsS0FBSyxHQUFHQyxLQUFLLENBQUNULElBQUlNLElBQUk7SUFDNUM7SUFDRmlHLE9BQU92RyxJQUFJb0IsT0FBTztJQUNsQm9GLFFBQVF4RyxJQUFJSSxNQUFNO0lBQ2xCcUcscUJBQXFCekcsSUFBSW9CLE9BQU87SUFDaENzRixXQUFXMUcsSUFBSUksTUFBTSxHQUNsQnlDLElBQUksQ0FBQztRQUNKOEQsUUFBUTNHLElBQUl5RixNQUFNO1FBQ2xCRSxLQUFLM0YsSUFBSXlGLE1BQU07UUFDZm1CLFlBQVk1RyxJQUFJb0IsT0FBTztRQUN2QnlGLE1BQU03RyxJQUFJTSxJQUFJO0lBQ2hCO0lBQ0Y2QixTQUFTbkMsSUFBSUksTUFBTSxHQUNoQnlDLElBQUksQ0FBQztRQUNKaUUsV0FBVzlHLElBQUkrRyxRQUFRO1FBQ3ZCQyxTQUFTaEgsSUFBSStHLFFBQVE7UUFDckJFLGVBQWVqSCxJQUFJeUYsTUFBTTtRQUN6QnlCLCtCQUErQmxILElBQUlvQixPQUFPO1FBQzFDNkIsU0FBU2pELElBQUlvQixPQUFPO1FBQ3BCK0Ysa0JBQWtCbkgsSUFBSVcsTUFBTTtJQUM5QjtJQUNGeUcsY0FBY3BILElBQUlFLFlBQVksR0FBR0MsR0FBRyxDQUNsQ0gsSUFBSUksTUFBTSxHQUFHeUMsSUFBSSxDQUFDO1FBQ2hCd0UsU0FBU3JILElBQUlFLFlBQVksR0FBR0MsR0FBRyxDQUM3QkgsSUFBSVEsS0FBSyxHQUFHQyxLQUFLLENBQ2ZULElBQUlJLE1BQU0sR0FBR3lDLElBQUksQ0FBQztZQUNoQnlFLE9BQU90SCxJQUFJVyxNQUFNO1lBQ2pCNEcsTUFBTXZILElBQUlXLE1BQU07WUFDaEI2RyxLQUFLeEgsSUFBSW9CLE9BQU87WUFDaEJxRyxVQUFVekgsSUFBSU0sSUFBSTtRQUNwQixLQUVGTixJQUFJUSxLQUFLLEdBQUdDLEtBQUssQ0FBQ1QsSUFBSVcsTUFBTTtRQUU5QitHLGFBQWExSCxJQUFJUSxLQUFLLEdBQUdDLEtBQUssQ0FBQ1QsSUFBSVcsTUFBTTtRQUN6Q2dILGVBQWUzSCxJQUFJVyxNQUFNO1FBQ3pCaUgsVUFBVTVILElBQUlvQixPQUFPO0lBQ3ZCLElBQ0FwQixJQUFJb0IsT0FBTztJQUVieUcsT0FBTzdILElBQUlJLE1BQU0sR0FBR3lDLElBQUksQ0FBQztRQUN2QmlGLFlBQVk5SCxJQUFJTSxJQUFJO0lBQ3RCO0lBQ0F5SCxXQUFXL0gsSUFBSW9CLE9BQU87SUFDdEI0RyxTQUFTaEksSUFBSVEsS0FBSyxHQUFHQyxLQUFLLENBQ3hCVCxJQUFJTSxJQUFJO0lBRVYySCxRQUFRakksSUFBSU0sSUFBSTtJQUNoQjRILE9BQU9sSSxJQUFJb0IsT0FBTztJQUNsQkgsUUFBUWpCLElBQUlJLE1BQU0sR0FBR2MsT0FBTyxDQUFDbEIsSUFBSVcsTUFBTSxJQUFJWCxJQUFJbUIsR0FBRztBQUNwRCxHQUFHIn0=