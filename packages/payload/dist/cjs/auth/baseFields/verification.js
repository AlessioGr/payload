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
var autoRemoveVerificationToken = function(param) {
    var originalDoc = param.originalDoc, data = param.data, value = param.value, operation = param.operation;
    // If a user manually sets `_verified` to true,
    // and it was `false`, set _verificationToken to `null`.
    // This is useful because the admin panel
    // allows users to set `_verified` to true manually
    if (operation === "update") {
        var _data, _originalDoc;
        if (((_data = data) === null || _data === void 0 ? void 0 : _data._verified) === true && ((_originalDoc = originalDoc) === null || _originalDoc === void 0 ? void 0 : _originalDoc._verified) === false) {
            return null;
        }
    }
    return value;
};
var _default = [
    {
        name: "_verified",
        type: "checkbox",
        access: {
            create: function(param) {
                var user = param.req.user;
                return Boolean(user);
            },
            update: function(param) {
                var user = param.req.user;
                return Boolean(user);
            },
            read: function(param) {
                var user = param.req.user;
                return Boolean(user);
            }
        },
        admin: {
            components: {
                Field: function() {
                    return null;
                }
            }
        }
    },
    {
        name: "_verificationToken",
        type: "text",
        hidden: true,
        hooks: {
            beforeChange: [
                autoRemoveVerificationToken
            ]
        }
    }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2Jhc2VGaWVsZHMvdmVyaWZpY2F0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBGaWVsZEhvb2sgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcblxuY29uc3QgYXV0b1JlbW92ZVZlcmlmaWNhdGlvblRva2VuOiBGaWVsZEhvb2sgPSAoeyBvcmlnaW5hbERvYywgZGF0YSwgdmFsdWUsIG9wZXJhdGlvbiB9KSA9PiB7XG4gIC8vIElmIGEgdXNlciBtYW51YWxseSBzZXRzIGBfdmVyaWZpZWRgIHRvIHRydWUsXG4gIC8vIGFuZCBpdCB3YXMgYGZhbHNlYCwgc2V0IF92ZXJpZmljYXRpb25Ub2tlbiB0byBgbnVsbGAuXG4gIC8vIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2UgdGhlIGFkbWluIHBhbmVsXG4gIC8vIGFsbG93cyB1c2VycyB0byBzZXQgYF92ZXJpZmllZGAgdG8gdHJ1ZSBtYW51YWxseVxuXG4gIGlmIChvcGVyYXRpb24gPT09ICd1cGRhdGUnKSB7XG4gICAgaWYgKGRhdGE/Ll92ZXJpZmllZCA9PT0gdHJ1ZSAmJiBvcmlnaW5hbERvYz8uX3ZlcmlmaWVkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgbmFtZTogJ192ZXJpZmllZCcsXG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICBhY2Nlc3M6IHtcbiAgICAgIGNyZWF0ZTogKHsgcmVxOiB7IHVzZXIgfSB9KSA9PiBCb29sZWFuKHVzZXIpLFxuICAgICAgdXBkYXRlOiAoeyByZXE6IHsgdXNlciB9IH0pID0+IEJvb2xlYW4odXNlciksXG4gICAgICByZWFkOiAoeyByZXE6IHsgdXNlciB9IH0pID0+IEJvb2xlYW4odXNlciksXG4gICAgfSxcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBGaWVsZDogKCkgPT4gbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdfdmVyaWZpY2F0aW9uVG9rZW4nLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBoaWRkZW46IHRydWUsXG4gICAgaG9va3M6IHtcbiAgICAgIGJlZm9yZUNoYW5nZTogW1xuICAgICAgICBhdXRvUmVtb3ZlVmVyaWZpY2F0aW9uVG9rZW4sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dIGFzIEZpZWxkW107XG4iXSwibmFtZXMiOlsiYXV0b1JlbW92ZVZlcmlmaWNhdGlvblRva2VuIiwib3JpZ2luYWxEb2MiLCJkYXRhIiwidmFsdWUiLCJvcGVyYXRpb24iLCJfdmVyaWZpZWQiLCJuYW1lIiwidHlwZSIsImFjY2VzcyIsImNyZWF0ZSIsInJlcSIsInVzZXIiLCJCb29sZWFuIiwidXBkYXRlIiwicmVhZCIsImFkbWluIiwiY29tcG9uZW50cyIsIkZpZWxkIiwiaGlkZGVuIiwiaG9va3MiLCJiZWZvcmVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBaUJBOzs7ZUFBQTs7O0FBZkEsSUFBTUEsOEJBQXlDO1FBQUdDLG9CQUFBQSxhQUFhQyxhQUFBQSxNQUFNQyxjQUFBQSxPQUFPQyxrQkFBQUE7SUFDMUUsK0NBQStDO0lBQy9DLHdEQUF3RDtJQUN4RCx5Q0FBeUM7SUFDekMsbURBQW1EO0lBRW5ELElBQUlBLGNBQWMsVUFBVTtZQUN0QkYsT0FBNEJEO1FBQWhDLElBQUlDLEVBQUFBLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTUcsU0FBUyxNQUFLLFFBQVFKLEVBQUFBLGVBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBYUksU0FBUyxNQUFLLE9BQU87WUFDaEUsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPRjtBQUNUO0lBRUEsV0FBZTtJQUNiO1FBQ0VHLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxRQUFRO1lBQ05DLFFBQVE7b0JBQUdDLEFBQU9DLGFBQVBELElBQU9DO3VCQUFhQyxRQUFRRDs7WUFDdkNFLFFBQVE7b0JBQUdILEFBQU9DLGFBQVBELElBQU9DO3VCQUFhQyxRQUFRRDs7WUFDdkNHLE1BQU07b0JBQUdKLEFBQU9DLGFBQVBELElBQU9DO3VCQUFhQyxRQUFRRDs7UUFDdkM7UUFDQUksT0FBTztZQUNMQyxZQUFZO2dCQUNWQyxPQUFPOzJCQUFNOztZQUNmO1FBQ0Y7SUFDRjtJQUNBO1FBQ0VYLE1BQU07UUFDTkMsTUFBTTtRQUNOVyxRQUFRO1FBQ1JDLE9BQU87WUFDTEMsY0FBYztnQkFDWnBCO2FBQ0Q7UUFDSDtJQUNGO0NBQ0QifQ==