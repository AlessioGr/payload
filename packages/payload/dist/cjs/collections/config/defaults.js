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
    defaults: function() {
        return defaults;
    },
    authDefaults: function() {
        return authDefaults;
    }
});
var _defaultAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/defaultAccess"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var defaults = {
    access: {
        create: _defaultAccess.default,
        read: _defaultAccess.default,
        update: _defaultAccess.default,
        delete: _defaultAccess.default,
        unlock: _defaultAccess.default
    },
    timestamps: true,
    admin: {
        useAsTitle: "id",
        components: {},
        enableRichTextLink: true,
        enableRichTextRelationship: true,
        pagination: {
            defaultLimit: 10,
            limits: [
                5,
                10,
                25,
                50,
                100
            ]
        }
    },
    fields: [],
    hooks: {
        beforeOperation: [],
        beforeValidate: [],
        beforeChange: [],
        afterChange: [],
        beforeRead: [],
        afterRead: [],
        beforeDelete: [],
        afterDelete: [],
        afterOperation: [],
        beforeLogin: [],
        afterLogin: [],
        afterLogout: [],
        afterRefresh: [],
        afterMe: [],
        afterForgotPassword: []
    },
    endpoints: [],
    auth: false,
    upload: false,
    versions: false,
    custom: {}
};
var authDefaults = {
    tokenExpiration: 7200,
    maxLoginAttempts: 5,
    lockTime: 600000,
    cookies: {
        secure: false,
        sameSite: "Lax"
    },
    verify: false,
    forgotPassword: {}
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9jb25maWcvZGVmYXVsdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZmF1bHRBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9kZWZhdWx0QWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRzID0ge1xuICBhY2Nlc3M6IHtcbiAgICBjcmVhdGU6IGRlZmF1bHRBY2Nlc3MsXG4gICAgcmVhZDogZGVmYXVsdEFjY2VzcyxcbiAgICB1cGRhdGU6IGRlZmF1bHRBY2Nlc3MsXG4gICAgZGVsZXRlOiBkZWZhdWx0QWNjZXNzLFxuICAgIHVubG9jazogZGVmYXVsdEFjY2VzcyxcbiAgfSxcbiAgdGltZXN0YW1wczogdHJ1ZSxcbiAgYWRtaW46IHtcbiAgICB1c2VBc1RpdGxlOiAnaWQnLFxuICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIGVuYWJsZVJpY2hUZXh0TGluazogdHJ1ZSxcbiAgICBlbmFibGVSaWNoVGV4dFJlbGF0aW9uc2hpcDogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBkZWZhdWx0TGltaXQ6IDEwLFxuICAgICAgbGltaXRzOiBbNSwgMTAsIDI1LCA1MCwgMTAwXSxcbiAgICB9LFxuICB9LFxuICBmaWVsZHM6IFtdLFxuICBob29rczoge1xuICAgIGJlZm9yZU9wZXJhdGlvbjogW10sXG4gICAgYmVmb3JlVmFsaWRhdGU6IFtdLFxuICAgIGJlZm9yZUNoYW5nZTogW10sXG4gICAgYWZ0ZXJDaGFuZ2U6IFtdLFxuICAgIGJlZm9yZVJlYWQ6IFtdLFxuICAgIGFmdGVyUmVhZDogW10sXG4gICAgYmVmb3JlRGVsZXRlOiBbXSxcbiAgICBhZnRlckRlbGV0ZTogW10sXG4gICAgYWZ0ZXJPcGVyYXRpb246IFtdLFxuICAgIGJlZm9yZUxvZ2luOiBbXSxcbiAgICBhZnRlckxvZ2luOiBbXSxcbiAgICBhZnRlckxvZ291dDogW10sXG4gICAgYWZ0ZXJSZWZyZXNoOiBbXSxcbiAgICBhZnRlck1lOiBbXSxcbiAgICBhZnRlckZvcmdvdFBhc3N3b3JkOiBbXSxcbiAgfSxcbiAgZW5kcG9pbnRzOiBbXSxcbiAgYXV0aDogZmFsc2UsXG4gIHVwbG9hZDogZmFsc2UsXG4gIHZlcnNpb25zOiBmYWxzZSxcbiAgY3VzdG9tOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoRGVmYXVsdHMgPSB7XG4gIHRva2VuRXhwaXJhdGlvbjogNzIwMCxcbiAgbWF4TG9naW5BdHRlbXB0czogNSxcbiAgbG9ja1RpbWU6IDYwMDAwMCwgLy8gMTAgbWludXRlc1xuICBjb29raWVzOiB7XG4gICAgc2VjdXJlOiBmYWxzZSxcbiAgICBzYW1lU2l0ZTogJ0xheCcsXG4gIH0sXG4gIHZlcmlmeTogZmFsc2UsXG4gIGZvcmdvdFBhc3N3b3JkOiB7fSxcbn07XG4iXSwibmFtZXMiOlsiZGVmYXVsdHMiLCJhdXRoRGVmYXVsdHMiLCJhY2Nlc3MiLCJjcmVhdGUiLCJkZWZhdWx0QWNjZXNzIiwicmVhZCIsInVwZGF0ZSIsImRlbGV0ZSIsInVubG9jayIsInRpbWVzdGFtcHMiLCJhZG1pbiIsInVzZUFzVGl0bGUiLCJjb21wb25lbnRzIiwiZW5hYmxlUmljaFRleHRMaW5rIiwiZW5hYmxlUmljaFRleHRSZWxhdGlvbnNoaXAiLCJwYWdpbmF0aW9uIiwiZGVmYXVsdExpbWl0IiwibGltaXRzIiwiZmllbGRzIiwiaG9va3MiLCJiZWZvcmVPcGVyYXRpb24iLCJiZWZvcmVWYWxpZGF0ZSIsImJlZm9yZUNoYW5nZSIsImFmdGVyQ2hhbmdlIiwiYmVmb3JlUmVhZCIsImFmdGVyUmVhZCIsImJlZm9yZURlbGV0ZSIsImFmdGVyRGVsZXRlIiwiYWZ0ZXJPcGVyYXRpb24iLCJiZWZvcmVMb2dpbiIsImFmdGVyTG9naW4iLCJhZnRlckxvZ291dCIsImFmdGVyUmVmcmVzaCIsImFmdGVyTWUiLCJhZnRlckZvcmdvdFBhc3N3b3JkIiwiZW5kcG9pbnRzIiwiYXV0aCIsInVwbG9hZCIsInZlcnNpb25zIiwiY3VzdG9tIiwidG9rZW5FeHBpcmF0aW9uIiwibWF4TG9naW5BdHRlbXB0cyIsImxvY2tUaW1lIiwiY29va2llcyIsInNlY3VyZSIsInNhbWVTaXRlIiwidmVyaWZ5IiwiZm9yZ290UGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBRWFBLFFBQVE7ZUFBUkE7O0lBNENBQyxZQUFZO2VBQVpBOzs7b0VBOUNhOzs7Ozs7QUFFbkIsSUFBTUQsV0FBVztJQUN0QkUsUUFBUTtRQUNOQyxRQUFRQyxzQkFBYTtRQUNyQkMsTUFBTUQsc0JBQWE7UUFDbkJFLFFBQVFGLHNCQUFhO1FBQ3JCRyxRQUFRSCxzQkFBYTtRQUNyQkksUUFBUUosc0JBQWE7SUFDdkI7SUFDQUssWUFBWTtJQUNaQyxPQUFPO1FBQ0xDLFlBQVk7UUFDWkMsWUFBWSxDQUFDO1FBQ2JDLG9CQUFvQjtRQUNwQkMsNEJBQTRCO1FBQzVCQyxZQUFZO1lBQ1ZDLGNBQWM7WUFDZEMsUUFBUTtnQkFBQztnQkFBRztnQkFBSTtnQkFBSTtnQkFBSTthQUFJO1FBQzlCO0lBQ0Y7SUFDQUMsUUFBUSxFQUFFO0lBQ1ZDLE9BQU87UUFDTEMsaUJBQWlCLEVBQUU7UUFDbkJDLGdCQUFnQixFQUFFO1FBQ2xCQyxjQUFjLEVBQUU7UUFDaEJDLGFBQWEsRUFBRTtRQUNmQyxZQUFZLEVBQUU7UUFDZEMsV0FBVyxFQUFFO1FBQ2JDLGNBQWMsRUFBRTtRQUNoQkMsYUFBYSxFQUFFO1FBQ2ZDLGdCQUFnQixFQUFFO1FBQ2xCQyxhQUFhLEVBQUU7UUFDZkMsWUFBWSxFQUFFO1FBQ2RDLGFBQWEsRUFBRTtRQUNmQyxjQUFjLEVBQUU7UUFDaEJDLFNBQVMsRUFBRTtRQUNYQyxxQkFBcUIsRUFBRTtJQUN6QjtJQUNBQyxXQUFXLEVBQUU7SUFDYkMsTUFBTTtJQUNOQyxRQUFRO0lBQ1JDLFVBQVU7SUFDVkMsUUFBUSxDQUFDO0FBQ1g7QUFFTyxJQUFNdEMsZUFBZTtJQUMxQnVDLGlCQUFpQjtJQUNqQkMsa0JBQWtCO0lBQ2xCQyxVQUFVO0lBQ1ZDLFNBQVM7UUFDUEMsUUFBUTtRQUNSQyxVQUFVO0lBQ1o7SUFDQUMsUUFBUTtJQUNSQyxnQkFBZ0IsQ0FBQztBQUNuQiJ9