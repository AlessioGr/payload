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
    endpointsSchema: function() {
        return endpointsSchema;
    },
    default: function() {
        return _default;
    }
});
var _joi = /*#__PURE__*/ _interop_require_default(require("joi"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var component = _joi.default.alternatives().try(_joi.default.object().unknown(), _joi.default.func());
var endpointsSchema = _joi.default.alternatives().try(_joi.default.array().items(_joi.default.object({
    path: _joi.default.string(),
    method: _joi.default.string().valid("get", "head", "post", "put", "patch", "delete", "connect", "options"),
    root: _joi.default.bool(),
    handler: _joi.default.alternatives().try(_joi.default.array().items(_joi.default.func()), _joi.default.func()),
    custom: _joi.default.object().pattern(_joi.default.string(), _joi.default.any())
})), _joi.default.boolean());
var _default = _joi.default.object({
    serverURL: _joi.default.string().uri().allow("").custom(function(value, helper) {
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
    cookiePrefix: _joi.default.string(),
    db: _joi.default.any(),
    routes: _joi.default.object({
        admin: _joi.default.string(),
        api: _joi.default.string(),
        graphQL: _joi.default.string(),
        graphQLPlayground: _joi.default.string()
    }),
    typescript: _joi.default.object({
        outputFile: _joi.default.string()
    }),
    collections: _joi.default.array(),
    endpoints: endpointsSchema,
    globals: _joi.default.array(),
    admin: _joi.default.object({
        user: _joi.default.string(),
        buildPath: _joi.default.string(),
        meta: _joi.default.object().keys({
            titleSuffix: _joi.default.string(),
            ogImage: _joi.default.string(),
            favicon: _joi.default.string()
        }),
        disable: _joi.default.bool(),
        indexHTML: _joi.default.string(),
        css: _joi.default.string(),
        dateFormat: _joi.default.string(),
        avatar: _joi.default.alternatives().try(_joi.default.string(), component),
        logoutRoute: _joi.default.string(),
        inactivityRoute: _joi.default.string(),
        autoLogin: _joi.default.alternatives().try(_joi.default.object().keys({
            email: _joi.default.string(),
            password: _joi.default.string(),
            prefillOnly: _joi.default.boolean()
        }), _joi.default.boolean()),
        components: _joi.default.object().keys({
            routes: _joi.default.array().items(_joi.default.object().keys({
                Component: component.required(),
                path: _joi.default.string().required(),
                exact: _joi.default.bool(),
                strict: _joi.default.bool(),
                sensitive: _joi.default.bool()
            })),
            providers: _joi.default.array().items(component),
            beforeDashboard: _joi.default.array().items(component),
            afterDashboard: _joi.default.array().items(component),
            beforeLogin: _joi.default.array().items(component),
            afterLogin: _joi.default.array().items(component),
            beforeNavLinks: _joi.default.array().items(component),
            afterNavLinks: _joi.default.array().items(component),
            Nav: component,
            logout: _joi.default.object({
                Button: component
            }),
            views: _joi.default.object({
                Dashboard: component,
                Account: component
            }),
            graphics: _joi.default.object({
                Icon: component,
                Logo: component
            })
        }),
        webpack: _joi.default.func(),
        bundler: {
            dev: _joi.default.func(),
            build: _joi.default.func(),
            serve: _joi.default.func()
        }
    }),
    email: _joi.default.object(),
    i18n: _joi.default.object(),
    defaultDepth: _joi.default.number().min(0).max(30),
    maxDepth: _joi.default.number().min(0).max(100),
    defaultMaxTextLength: _joi.default.number(),
    csrf: _joi.default.array().items(_joi.default.string().allow("")).sparse(),
    cors: [
        _joi.default.string().valid("*"),
        _joi.default.array().items(_joi.default.string())
    ],
    express: _joi.default.object().keys({
        json: _joi.default.object(),
        compression: _joi.default.object(),
        middleware: _joi.default.array().items(_joi.default.func()),
        preMiddleware: _joi.default.array().items(_joi.default.func()),
        postMiddleware: _joi.default.array().items(_joi.default.func())
    }),
    local: _joi.default.boolean(),
    upload: _joi.default.object(),
    indexSortableFields: _joi.default.boolean(),
    rateLimit: _joi.default.object().keys({
        window: _joi.default.number(),
        max: _joi.default.number(),
        trustProxy: _joi.default.boolean(),
        skip: _joi.default.func()
    }),
    graphQL: _joi.default.object().keys({
        mutations: _joi.default.function(),
        queries: _joi.default.function(),
        maxComplexity: _joi.default.number(),
        disablePlaygroundInProduction: _joi.default.boolean(),
        disable: _joi.default.boolean(),
        schemaOutputFile: _joi.default.string()
    }),
    localization: _joi.default.alternatives().try(_joi.default.object().keys({
        locales: _joi.default.alternatives().try(_joi.default.array().items(_joi.default.object().keys({
            label: _joi.default.string(),
            code: _joi.default.string(),
            rtl: _joi.default.boolean(),
            toString: _joi.default.func()
        })), _joi.default.array().items(_joi.default.string())),
        localeCodes: _joi.default.array().items(_joi.default.string()),
        defaultLocale: _joi.default.string(),
        fallback: _joi.default.boolean()
    }), _joi.default.boolean()),
    hooks: _joi.default.object().keys({
        afterError: _joi.default.func()
    }),
    telemetry: _joi.default.boolean(),
    plugins: _joi.default.array().items(_joi.default.func()),
    onInit: _joi.default.func(),
    debug: _joi.default.boolean(),
    custom: _joi.default.object().pattern(_joi.default.string(), _joi.default.any())
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvc2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqb2kgZnJvbSAnam9pJztcblxuY29uc3QgY29tcG9uZW50ID0gam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgam9pLm9iamVjdCgpLnVua25vd24oKSxcbiAgam9pLmZ1bmMoKSxcbik7XG5cbmV4cG9ydCBjb25zdCBlbmRwb2ludHNTY2hlbWEgPSBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICBqb2kuYXJyYXkoKS5pdGVtcyhqb2kub2JqZWN0KHtcbiAgICBwYXRoOiBqb2kuc3RyaW5nKCksXG4gICAgbWV0aG9kOiBqb2kuc3RyaW5nKCkudmFsaWQoJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2RlbGV0ZScsICdjb25uZWN0JywgJ29wdGlvbnMnKSxcbiAgICByb290OiBqb2kuYm9vbCgpLFxuICAgIGhhbmRsZXI6IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gICAgICBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICAgIGpvaS5mdW5jKCksXG4gICAgKSxcbiAgICBjdXN0b206IGpvaS5vYmplY3QoKS5wYXR0ZXJuKGpvaS5zdHJpbmcoKSwgam9pLmFueSgpKSxcbiAgfSkpLFxuICBqb2kuYm9vbGVhbigpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgam9pLm9iamVjdCh7XG4gIHNlcnZlclVSTDogam9pLnN0cmluZygpXG4gICAgLnVyaSgpXG4gICAgLmFsbG93KCcnKVxuICAgIC5jdXN0b20oKHZhbHVlLCBoZWxwZXIpID0+IHtcbiAgICAgIGNvbnN0IHVybFdpdGhvdXRQcm90b2NvbCA9IHZhbHVlLnNwbGl0KCcvLycpWzFdO1xuXG4gICAgICBpZiAoIXVybFdpdGhvdXRQcm90b2NvbCkge1xuICAgICAgICByZXR1cm4gaGVscGVyLm1lc3NhZ2UoeyBjdXN0b206ICdZb3UgbmVlZCB0byBpbmNsdWRlIGVpdGhlciBcImh0dHBzOi8vXCIgb3IgXCJodHRwOi8vXCIgaW4geW91ciBzZXJ2ZXJVUkwuJyB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVybFdpdGhvdXRQcm90b2NvbC5pbmRleE9mKCcvJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gaGVscGVyLm1lc3NhZ2UoeyBjdXN0b206ICdZb3VyIHNlcnZlclVSTCBjYW5ub3QgaGF2ZSBhIHBhdGguIEl0IGNhbiBvbmx5IGNvbnRhaW4gYSBwcm90b2NvbCwgYSBkb21haW4sIGFuZCBhbiBvcHRpb25hbCBwb3J0LicgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KSxcbiAgY29va2llUHJlZml4OiBqb2kuc3RyaW5nKCksXG4gIGRiOiBqb2kuYW55KCksXG4gIHJvdXRlczogam9pLm9iamVjdCh7XG4gICAgYWRtaW46IGpvaS5zdHJpbmcoKSxcbiAgICBhcGk6IGpvaS5zdHJpbmcoKSxcbiAgICBncmFwaFFMOiBqb2kuc3RyaW5nKCksXG4gICAgZ3JhcGhRTFBsYXlncm91bmQ6IGpvaS5zdHJpbmcoKSxcbiAgfSksXG4gIHR5cGVzY3JpcHQ6IGpvaS5vYmplY3Qoe1xuICAgIG91dHB1dEZpbGU6IGpvaS5zdHJpbmcoKSxcbiAgfSksXG4gIGNvbGxlY3Rpb25zOiBqb2kuYXJyYXkoKSxcbiAgZW5kcG9pbnRzOiBlbmRwb2ludHNTY2hlbWEsXG4gIGdsb2JhbHM6IGpvaS5hcnJheSgpLFxuICBhZG1pbjogam9pLm9iamVjdCh7XG4gICAgdXNlcjogam9pLnN0cmluZygpLFxuICAgIGJ1aWxkUGF0aDogam9pLnN0cmluZygpLFxuICAgIG1ldGE6IGpvaS5vYmplY3QoKVxuICAgICAgLmtleXMoe1xuICAgICAgICB0aXRsZVN1ZmZpeDogam9pLnN0cmluZygpLFxuICAgICAgICBvZ0ltYWdlOiBqb2kuc3RyaW5nKCksXG4gICAgICAgIGZhdmljb246IGpvaS5zdHJpbmcoKSxcbiAgICAgIH0pLFxuICAgIGRpc2FibGU6IGpvaS5ib29sKCksXG4gICAgaW5kZXhIVE1MOiBqb2kuc3RyaW5nKCksXG4gICAgY3NzOiBqb2kuc3RyaW5nKCksXG4gICAgZGF0ZUZvcm1hdDogam9pLnN0cmluZygpLFxuICAgIGF2YXRhcjogam9pLmFsdGVybmF0aXZlcygpXG4gICAgICAudHJ5KFxuICAgICAgICBqb2kuc3RyaW5nKCksXG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICksXG4gICAgbG9nb3V0Um91dGU6IGpvaS5zdHJpbmcoKSxcbiAgICBpbmFjdGl2aXR5Um91dGU6IGpvaS5zdHJpbmcoKSxcbiAgICBhdXRvTG9naW46IGpvaS5hbHRlcm5hdGl2ZXMoKVxuICAgICAgLnRyeShcbiAgICAgICAgam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICAgIGVtYWlsOiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgcGFzc3dvcmQ6IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgICBwcmVmaWxsT25seTogam9pLmJvb2xlYW4oKSxcbiAgICAgICAgfSksXG4gICAgICAgIGpvaS5ib29sZWFuKCksXG4gICAgICApLFxuICAgIGNvbXBvbmVudHM6IGpvaS5vYmplY3QoKVxuICAgICAgLmtleXMoe1xuICAgICAgICByb3V0ZXM6IGpvaS5hcnJheSgpXG4gICAgICAgICAgLml0ZW1zKFxuICAgICAgICAgICAgam9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICAgICAgICBDb21wb25lbnQ6IGNvbXBvbmVudC5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgICBwYXRoOiBqb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgICAgZXhhY3Q6IGpvaS5ib29sKCksXG4gICAgICAgICAgICAgIHN0cmljdDogam9pLmJvb2woKSxcbiAgICAgICAgICAgICAgc2Vuc2l0aXZlOiBqb2kuYm9vbCgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKSxcbiAgICAgICAgcHJvdmlkZXJzOiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnQpLFxuICAgICAgICBiZWZvcmVEYXNoYm9hcmQ6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudCksXG4gICAgICAgIGFmdGVyRGFzaGJvYXJkOiBqb2kuYXJyYXkoKS5pdGVtcyhjb21wb25lbnQpLFxuICAgICAgICBiZWZvcmVMb2dpbjogam9pLmFycmF5KCkuaXRlbXMoY29tcG9uZW50KSxcbiAgICAgICAgYWZ0ZXJMb2dpbjogam9pLmFycmF5KCkuaXRlbXMoY29tcG9uZW50KSxcbiAgICAgICAgYmVmb3JlTmF2TGlua3M6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudCksXG4gICAgICAgIGFmdGVyTmF2TGlua3M6IGpvaS5hcnJheSgpLml0ZW1zKGNvbXBvbmVudCksXG4gICAgICAgIE5hdjogY29tcG9uZW50LFxuICAgICAgICBsb2dvdXQ6IGpvaS5vYmplY3Qoe1xuICAgICAgICAgIEJ1dHRvbjogY29tcG9uZW50LFxuICAgICAgICB9KSxcbiAgICAgICAgdmlld3M6IGpvaS5vYmplY3Qoe1xuICAgICAgICAgIERhc2hib2FyZDogY29tcG9uZW50LFxuICAgICAgICAgIEFjY291bnQ6IGNvbXBvbmVudCxcbiAgICAgICAgfSksXG4gICAgICAgIGdyYXBoaWNzOiBqb2kub2JqZWN0KHtcbiAgICAgICAgICBJY29uOiBjb21wb25lbnQsXG4gICAgICAgICAgTG9nbzogY29tcG9uZW50LFxuICAgICAgICB9KSxcbiAgICAgIH0pLFxuICAgIHdlYnBhY2s6IGpvaS5mdW5jKCksXG4gICAgYnVuZGxlcjoge1xuICAgICAgZGV2OiBqb2kuZnVuYygpLFxuICAgICAgYnVpbGQ6IGpvaS5mdW5jKCksXG4gICAgICBzZXJ2ZTogam9pLmZ1bmMoKSxcbiAgICB9LFxuICB9KSxcbiAgZW1haWw6IGpvaS5vYmplY3QoKSxcbiAgaTE4bjogam9pLm9iamVjdCgpLFxuICBkZWZhdWx0RGVwdGg6IGpvaS5udW1iZXIoKVxuICAgIC5taW4oMClcbiAgICAubWF4KDMwKSxcbiAgbWF4RGVwdGg6IGpvaS5udW1iZXIoKVxuICAgIC5taW4oMClcbiAgICAubWF4KDEwMCksXG4gIGRlZmF1bHRNYXhUZXh0TGVuZ3RoOiBqb2kubnVtYmVyKCksXG4gIGNzcmY6IGpvaS5hcnJheSgpXG4gICAgLml0ZW1zKGpvaS5zdHJpbmcoKS5hbGxvdygnJykpXG4gICAgLnNwYXJzZSgpLFxuICBjb3JzOiBbXG4gICAgam9pLnN0cmluZygpXG4gICAgICAudmFsaWQoJyonKSxcbiAgICBqb2kuYXJyYXkoKVxuICAgICAgLml0ZW1zKGpvaS5zdHJpbmcoKSksXG4gIF0sXG4gIGV4cHJlc3M6IGpvaS5vYmplY3QoKVxuICAgIC5rZXlzKHtcbiAgICAgIGpzb246IGpvaS5vYmplY3QoKSxcbiAgICAgIGNvbXByZXNzaW9uOiBqb2kub2JqZWN0KCksXG4gICAgICBtaWRkbGV3YXJlOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuZnVuYygpKSxcbiAgICAgIHByZU1pZGRsZXdhcmU6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgICAgcG9zdE1pZGRsZXdhcmU6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5mdW5jKCkpLFxuICAgIH0pLFxuICBsb2NhbDogam9pLmJvb2xlYW4oKSxcbiAgdXBsb2FkOiBqb2kub2JqZWN0KCksXG4gIGluZGV4U29ydGFibGVGaWVsZHM6IGpvaS5ib29sZWFuKCksXG4gIHJhdGVMaW1pdDogam9pLm9iamVjdCgpXG4gICAgLmtleXMoe1xuICAgICAgd2luZG93OiBqb2kubnVtYmVyKCksXG4gICAgICBtYXg6IGpvaS5udW1iZXIoKSxcbiAgICAgIHRydXN0UHJveHk6IGpvaS5ib29sZWFuKCksXG4gICAgICBza2lwOiBqb2kuZnVuYygpLFxuICAgIH0pLFxuICBncmFwaFFMOiBqb2kub2JqZWN0KClcbiAgICAua2V5cyh7XG4gICAgICBtdXRhdGlvbnM6IGpvaS5mdW5jdGlvbigpLFxuICAgICAgcXVlcmllczogam9pLmZ1bmN0aW9uKCksXG4gICAgICBtYXhDb21wbGV4aXR5OiBqb2kubnVtYmVyKCksXG4gICAgICBkaXNhYmxlUGxheWdyb3VuZEluUHJvZHVjdGlvbjogam9pLmJvb2xlYW4oKSxcbiAgICAgIGRpc2FibGU6IGpvaS5ib29sZWFuKCksXG4gICAgICBzY2hlbWFPdXRwdXRGaWxlOiBqb2kuc3RyaW5nKCksXG4gICAgfSksXG4gIGxvY2FsaXphdGlvbjogam9pLmFsdGVybmF0aXZlcygpLnRyeShcbiAgICBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICBsb2NhbGVzOiBqb2kuYWx0ZXJuYXRpdmVzKCkudHJ5KFxuICAgICAgICBqb2kuYXJyYXkoKS5pdGVtcyhcbiAgICAgICAgICBqb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgICAgICBsYWJlbDogam9pLnN0cmluZygpLFxuICAgICAgICAgICAgY29kZTogam9pLnN0cmluZygpLFxuICAgICAgICAgICAgcnRsOiBqb2kuYm9vbGVhbigpLFxuICAgICAgICAgICAgdG9TdHJpbmc6IGpvaS5mdW5jKCksXG4gICAgICAgICAgfSksXG4gICAgICAgICksXG4gICAgICAgIGpvaS5hcnJheSgpLml0ZW1zKGpvaS5zdHJpbmcoKSksXG4gICAgICApLFxuICAgICAgbG9jYWxlQ29kZXM6IGpvaS5hcnJheSgpLml0ZW1zKGpvaS5zdHJpbmcoKSksXG4gICAgICBkZWZhdWx0TG9jYWxlOiBqb2kuc3RyaW5nKCksXG4gICAgICBmYWxsYmFjazogam9pLmJvb2xlYW4oKSxcbiAgICB9KSxcbiAgICBqb2kuYm9vbGVhbigpLFxuICApLFxuICBob29rczogam9pLm9iamVjdCgpLmtleXMoe1xuICAgIGFmdGVyRXJyb3I6IGpvaS5mdW5jKCksXG4gIH0pLFxuICB0ZWxlbWV0cnk6IGpvaS5ib29sZWFuKCksXG4gIHBsdWdpbnM6IGpvaS5hcnJheSgpLml0ZW1zKFxuICAgIGpvaS5mdW5jKCksXG4gICksXG4gIG9uSW5pdDogam9pLmZ1bmMoKSxcbiAgZGVidWc6IGpvaS5ib29sZWFuKCksXG4gIGN1c3RvbTogam9pLm9iamVjdCgpLnBhdHRlcm4oam9pLnN0cmluZygpLCBqb2kuYW55KCkpLFxufSk7XG4iXSwibmFtZXMiOlsiZW5kcG9pbnRzU2NoZW1hIiwiY29tcG9uZW50Iiwiam9pIiwiYWx0ZXJuYXRpdmVzIiwidHJ5Iiwib2JqZWN0IiwidW5rbm93biIsImZ1bmMiLCJhcnJheSIsIml0ZW1zIiwicGF0aCIsInN0cmluZyIsIm1ldGhvZCIsInZhbGlkIiwicm9vdCIsImJvb2wiLCJoYW5kbGVyIiwiY3VzdG9tIiwicGF0dGVybiIsImFueSIsImJvb2xlYW4iLCJzZXJ2ZXJVUkwiLCJ1cmkiLCJhbGxvdyIsInZhbHVlIiwiaGVscGVyIiwidXJsV2l0aG91dFByb3RvY29sIiwic3BsaXQiLCJtZXNzYWdlIiwiaW5kZXhPZiIsImNvb2tpZVByZWZpeCIsImRiIiwicm91dGVzIiwiYWRtaW4iLCJhcGkiLCJncmFwaFFMIiwiZ3JhcGhRTFBsYXlncm91bmQiLCJ0eXBlc2NyaXB0Iiwib3V0cHV0RmlsZSIsImNvbGxlY3Rpb25zIiwiZW5kcG9pbnRzIiwiZ2xvYmFscyIsInVzZXIiLCJidWlsZFBhdGgiLCJtZXRhIiwia2V5cyIsInRpdGxlU3VmZml4Iiwib2dJbWFnZSIsImZhdmljb24iLCJkaXNhYmxlIiwiaW5kZXhIVE1MIiwiY3NzIiwiZGF0ZUZvcm1hdCIsImF2YXRhciIsImxvZ291dFJvdXRlIiwiaW5hY3Rpdml0eVJvdXRlIiwiYXV0b0xvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInByZWZpbGxPbmx5IiwiY29tcG9uZW50cyIsIkNvbXBvbmVudCIsInJlcXVpcmVkIiwiZXhhY3QiLCJzdHJpY3QiLCJzZW5zaXRpdmUiLCJwcm92aWRlcnMiLCJiZWZvcmVEYXNoYm9hcmQiLCJhZnRlckRhc2hib2FyZCIsImJlZm9yZUxvZ2luIiwiYWZ0ZXJMb2dpbiIsImJlZm9yZU5hdkxpbmtzIiwiYWZ0ZXJOYXZMaW5rcyIsIk5hdiIsImxvZ291dCIsIkJ1dHRvbiIsInZpZXdzIiwiRGFzaGJvYXJkIiwiQWNjb3VudCIsImdyYXBoaWNzIiwiSWNvbiIsIkxvZ28iLCJ3ZWJwYWNrIiwiYnVuZGxlciIsImRldiIsImJ1aWxkIiwic2VydmUiLCJpMThuIiwiZGVmYXVsdERlcHRoIiwibnVtYmVyIiwibWluIiwibWF4IiwibWF4RGVwdGgiLCJkZWZhdWx0TWF4VGV4dExlbmd0aCIsImNzcmYiLCJzcGFyc2UiLCJjb3JzIiwiZXhwcmVzcyIsImpzb24iLCJjb21wcmVzc2lvbiIsIm1pZGRsZXdhcmUiLCJwcmVNaWRkbGV3YXJlIiwicG9zdE1pZGRsZXdhcmUiLCJsb2NhbCIsInVwbG9hZCIsImluZGV4U29ydGFibGVGaWVsZHMiLCJyYXRlTGltaXQiLCJ3aW5kb3ciLCJ0cnVzdFByb3h5Iiwic2tpcCIsIm11dGF0aW9ucyIsImZ1bmN0aW9uIiwicXVlcmllcyIsIm1heENvbXBsZXhpdHkiLCJkaXNhYmxlUGxheWdyb3VuZEluUHJvZHVjdGlvbiIsInNjaGVtYU91dHB1dEZpbGUiLCJsb2NhbGl6YXRpb24iLCJsb2NhbGVzIiwibGFiZWwiLCJjb2RlIiwicnRsIiwidG9TdHJpbmciLCJsb2NhbGVDb2RlcyIsImRlZmF1bHRMb2NhbGUiLCJmYWxsYmFjayIsImhvb2tzIiwiYWZ0ZXJFcnJvciIsInRlbGVtZXRyeSIsInBsdWdpbnMiLCJvbkluaXQiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFPYUEsZUFBZTtlQUFmQTs7SUFjYixPQTZLRztlQTdLSDs7OzBEQXJCZ0I7Ozs7OztBQUVoQixJQUFNQyxZQUFZQyxZQUFHLENBQUNDLFlBQVksR0FBR0MsR0FBRyxDQUN0Q0YsWUFBRyxDQUFDRyxNQUFNLEdBQUdDLE9BQU8sSUFDcEJKLFlBQUcsQ0FBQ0ssSUFBSTtBQUdILElBQU1QLGtCQUFrQkUsWUFBRyxDQUFDQyxZQUFZLEdBQUdDLEdBQUcsQ0FDbkRGLFlBQUcsQ0FBQ00sS0FBSyxHQUFHQyxLQUFLLENBQUNQLFlBQUcsQ0FBQ0csTUFBTSxDQUFDO0lBQzNCSyxNQUFNUixZQUFHLENBQUNTLE1BQU07SUFDaEJDLFFBQVFWLFlBQUcsQ0FBQ1MsTUFB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