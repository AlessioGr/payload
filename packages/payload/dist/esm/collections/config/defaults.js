import defaultAccess from "../../auth/defaultAccess";
export var defaults = {
    access: {
        create: defaultAccess,
        read: defaultAccess,
        update: defaultAccess,
        delete: defaultAccess,
        unlock: defaultAccess
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
export var authDefaults = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9jb25maWcvZGVmYXVsdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZmF1bHRBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9kZWZhdWx0QWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRzID0ge1xuICBhY2Nlc3M6IHtcbiAgICBjcmVhdGU6IGRlZmF1bHRBY2Nlc3MsXG4gICAgcmVhZDogZGVmYXVsdEFjY2VzcyxcbiAgICB1cGRhdGU6IGRlZmF1bHRBY2Nlc3MsXG4gICAgZGVsZXRlOiBkZWZhdWx0QWNjZXNzLFxuICAgIHVubG9jazogZGVmYXVsdEFjY2VzcyxcbiAgfSxcbiAgdGltZXN0YW1wczogdHJ1ZSxcbiAgYWRtaW46IHtcbiAgICB1c2VBc1RpdGxlOiAnaWQnLFxuICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIGVuYWJsZVJpY2hUZXh0TGluazogdHJ1ZSxcbiAgICBlbmFibGVSaWNoVGV4dFJlbGF0aW9uc2hpcDogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBkZWZhdWx0TGltaXQ6IDEwLFxuICAgICAgbGltaXRzOiBbNSwgMTAsIDI1LCA1MCwgMTAwXSxcbiAgICB9LFxuICB9LFxuICBmaWVsZHM6IFtdLFxuICBob29rczoge1xuICAgIGJlZm9yZU9wZXJhdGlvbjogW10sXG4gICAgYmVmb3JlVmFsaWRhdGU6IFtdLFxuICAgIGJlZm9yZUNoYW5nZTogW10sXG4gICAgYWZ0ZXJDaGFuZ2U6IFtdLFxuICAgIGJlZm9yZVJlYWQ6IFtdLFxuICAgIGFmdGVyUmVhZDogW10sXG4gICAgYmVmb3JlRGVsZXRlOiBbXSxcbiAgICBhZnRlckRlbGV0ZTogW10sXG4gICAgYWZ0ZXJPcGVyYXRpb246IFtdLFxuICAgIGJlZm9yZUxvZ2luOiBbXSxcbiAgICBhZnRlckxvZ2luOiBbXSxcbiAgICBhZnRlckxvZ291dDogW10sXG4gICAgYWZ0ZXJSZWZyZXNoOiBbXSxcbiAgICBhZnRlck1lOiBbXSxcbiAgICBhZnRlckZvcmdvdFBhc3N3b3JkOiBbXSxcbiAgfSxcbiAgZW5kcG9pbnRzOiBbXSxcbiAgYXV0aDogZmFsc2UsXG4gIHVwbG9hZDogZmFsc2UsXG4gIHZlcnNpb25zOiBmYWxzZSxcbiAgY3VzdG9tOiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoRGVmYXVsdHMgPSB7XG4gIHRva2VuRXhwaXJhdGlvbjogNzIwMCxcbiAgbWF4TG9naW5BdHRlbXB0czogNSxcbiAgbG9ja1RpbWU6IDYwMDAwMCwgLy8gMTAgbWludXRlc1xuICBjb29raWVzOiB7XG4gICAgc2VjdXJlOiBmYWxzZSxcbiAgICBzYW1lU2l0ZTogJ0xheCcsXG4gIH0sXG4gIHZlcmlmeTogZmFsc2UsXG4gIGZvcmdvdFBhc3N3b3JkOiB7fSxcbn07XG4iXSwibmFtZXMiOlsiZGVmYXVsdEFjY2VzcyIsImRlZmF1bHRzIiwiYWNjZXNzIiwiY3JlYXRlIiwicmVhZCIsInVwZGF0ZSIsImRlbGV0ZSIsInVubG9jayIsInRpbWVzdGFtcHMiLCJhZG1pbiIsInVzZUFzVGl0bGUiLCJjb21wb25lbnRzIiwiZW5hYmxlUmljaFRleHRMaW5rIiwiZW5hYmxlUmljaFRleHRSZWxhdGlvbnNoaXAiLCJwYWdpbmF0aW9uIiwiZGVmYXVsdExpbWl0IiwibGltaXRzIiwiZmllbGRzIiwiaG9va3MiLCJiZWZvcmVPcGVyYXRpb24iLCJiZWZvcmVWYWxpZGF0ZSIsImJlZm9yZUNoYW5nZSIsImFmdGVyQ2hhbmdlIiwiYmVmb3JlUmVhZCIsImFmdGVyUmVhZCIsImJlZm9yZURlbGV0ZSIsImFmdGVyRGVsZXRlIiwiYWZ0ZXJPcGVyYXRpb24iLCJiZWZvcmVMb2dpbiIsImFmdGVyTG9naW4iLCJhZnRlckxvZ291dCIsImFmdGVyUmVmcmVzaCIsImFmdGVyTWUiLCJhZnRlckZvcmdvdFBhc3N3b3JkIiwiZW5kcG9pbnRzIiwiYXV0aCIsInVwbG9hZCIsInZlcnNpb25zIiwiY3VzdG9tIiwiYXV0aERlZmF1bHRzIiwidG9rZW5FeHBpcmF0aW9uIiwibWF4TG9naW5BdHRlbXB0cyIsImxvY2tUaW1lIiwiY29va2llcyIsInNlY3VyZSIsInNhbWVTaXRlIiwidmVyaWZ5IiwiZm9yZ290UGFzc3dvcmQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLG1CQUFtQiwyQkFBMkI7QUFFckQsT0FBTyxJQUFNQyxXQUFXO0lBQ3RCQyxRQUFRO1FBQ05DLFFBQVFIO1FBQ1JJLE1BQU1KO1FBQ05LLFFBQVFMO1FBQ1JNLFFBQVFOO1FBQ1JPLFFBQVFQO0lBQ1Y7SUFDQVEsWUFBWTtJQUNaQyxPQUFPO1FBQ0xDLFlBQVk7UUFDWkMsWUFBWSxDQUFDO1FBQ2JDLG9CQUFvQjtRQUNwQkMsNEJBQTRCO1FBQzVCQyxZQUFZO1lBQ1ZDLGNBQWM7WUFDZEMsUUFBUTtnQkFBQztnQkFBRztnQkFBSTtnQkFBSTtnQkFBSTthQUFJO1FBQzlCO0lBQ0Y7SUFDQUMsUUFBUSxFQUFFO0lBQ1ZDLE9BQU87UUFDTEMsaUJBQWlCLEVBQUU7UUFDbkJDLGdCQUFnQixFQUFFO1FBQ2xCQyxjQUFjLEVBQUU7UUFDaEJDLGFBQWEsRUFBRTtRQUNmQyxZQUFZLEVBQUU7UUFDZEMsV0FBVyxFQUFFO1FBQ2JDLGNBQWMsRUFBRTtRQUNoQkMsYUFBYSxFQUFFO1FBQ2ZDLGdCQUFnQixFQUFFO1FBQ2xCQyxhQUFhLEVBQUU7UUFDZkMsWUFBWSxFQUFFO1FBQ2RDLGFBQWEsRUFBRTtRQUNmQyxjQUFjLEVBQUU7UUFDaEJDLFNBQVMsRUFBRTtRQUNYQyxxQkFBcUIsRUFBRTtJQUN6QjtJQUNBQyxXQUFXLEVBQUU7SUFDYkMsTUFBTTtJQUNOQyxRQUFRO0lBQ1JDLFVBQVU7SUFDVkMsUUFBUSxDQUFDO0FBQ1gsRUFBRTtBQUVGLE9BQU8sSUFBTUMsZUFBZTtJQUMxQkMsaUJBQWlCO0lBQ2pCQyxrQkFBa0I7SUFDbEJDLFVBQVU7SUFDVkMsU0FBUztRQUNQQyxRQUFRO1FBQ1JDLFVBQVU7SUFDWjtJQUNBQyxRQUFRO0lBQ1JDLGdCQUFnQixDQUFDO0FBQ25CLEVBQUUifQ==