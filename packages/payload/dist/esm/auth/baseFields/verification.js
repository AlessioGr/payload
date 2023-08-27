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
export default [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2Jhc2VGaWVsZHMvdmVyaWZpY2F0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBGaWVsZEhvb2sgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcblxuY29uc3QgYXV0b1JlbW92ZVZlcmlmaWNhdGlvblRva2VuOiBGaWVsZEhvb2sgPSAoeyBvcmlnaW5hbERvYywgZGF0YSwgdmFsdWUsIG9wZXJhdGlvbiB9KSA9PiB7XG4gIC8vIElmIGEgdXNlciBtYW51YWxseSBzZXRzIGBfdmVyaWZpZWRgIHRvIHRydWUsXG4gIC8vIGFuZCBpdCB3YXMgYGZhbHNlYCwgc2V0IF92ZXJpZmljYXRpb25Ub2tlbiB0byBgbnVsbGAuXG4gIC8vIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2UgdGhlIGFkbWluIHBhbmVsXG4gIC8vIGFsbG93cyB1c2VycyB0byBzZXQgYF92ZXJpZmllZGAgdG8gdHJ1ZSBtYW51YWxseVxuXG4gIGlmIChvcGVyYXRpb24gPT09ICd1cGRhdGUnKSB7XG4gICAgaWYgKGRhdGE/Ll92ZXJpZmllZCA9PT0gdHJ1ZSAmJiBvcmlnaW5hbERvYz8uX3ZlcmlmaWVkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgbmFtZTogJ192ZXJpZmllZCcsXG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICBhY2Nlc3M6IHtcbiAgICAgIGNyZWF0ZTogKHsgcmVxOiB7IHVzZXIgfSB9KSA9PiBCb29sZWFuKHVzZXIpLFxuICAgICAgdXBkYXRlOiAoeyByZXE6IHsgdXNlciB9IH0pID0+IEJvb2xlYW4odXNlciksXG4gICAgICByZWFkOiAoeyByZXE6IHsgdXNlciB9IH0pID0+IEJvb2xlYW4odXNlciksXG4gICAgfSxcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBGaWVsZDogKCkgPT4gbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdfdmVyaWZpY2F0aW9uVG9rZW4nLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBoaWRkZW46IHRydWUsXG4gICAgaG9va3M6IHtcbiAgICAgIGJlZm9yZUNoYW5nZTogW1xuICAgICAgICBhdXRvUmVtb3ZlVmVyaWZpY2F0aW9uVG9rZW4sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dIGFzIEZpZWxkW107XG4iXSwibmFtZXMiOlsiYXV0b1JlbW92ZVZlcmlmaWNhdGlvblRva2VuIiwib3JpZ2luYWxEb2MiLCJkYXRhIiwidmFsdWUiLCJvcGVyYXRpb24iLCJfdmVyaWZpZWQiLCJuYW1lIiwidHlwZSIsImFjY2VzcyIsImNyZWF0ZSIsInJlcSIsInVzZXIiLCJCb29sZWFuIiwidXBkYXRlIiwicmVhZCIsImFkbWluIiwiY29tcG9uZW50cyIsIkZpZWxkIiwiaGlkZGVuIiwiaG9va3MiLCJiZWZvcmVDaGFuZ2UiXSwibWFwcGluZ3MiOiJBQUVBLElBQU1BLDhCQUF5QztRQUFHQyxvQkFBQUEsYUFBYUMsYUFBQUEsTUFBTUMsY0FBQUEsT0FBT0Msa0JBQUFBO0lBQzFFLCtDQUErQztJQUMvQyx3REFBd0Q7SUFDeEQseUNBQXlDO0lBQ3pDLG1EQUFtRDtJQUVuRCxJQUFJQSxjQUFjLFVBQVU7WUFDdEJGLE9BQTRCRDtRQUFoQyxJQUFJQyxFQUFBQSxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1HLFNBQVMsTUFBSyxRQUFRSixFQUFBQSxlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWFJLFNBQVMsTUFBSyxPQUFPO1lBQ2hFLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0Y7QUFDVDtBQUVBLGVBQWU7SUFDYjtRQUNFRyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsUUFBUTtZQUNOQyxRQUFRO29CQUFHQyxBQUFPQyxhQUFQRCxJQUFPQzt1QkFBYUMsUUFBUUQ7O1lBQ3ZDRSxRQUFRO29CQUFHSCxBQUFPQyxhQUFQRCxJQUFPQzt1QkFBYUMsUUFBUUQ7O1lBQ3ZDRyxNQUFNO29CQUFHSixBQUFPQyxhQUFQRCxJQUFPQzt1QkFBYUMsUUFBUUQ7O1FBQ3ZDO1FBQ0FJLE9BQU87WUFDTEMsWUFBWTtnQkFDVkMsT0FBTzsyQkFBTTs7WUFDZjtRQUNGO0lBQ0Y7SUFDQTtRQUNFWCxNQUFNO1FBQ05DLE1BQU07UUFDTlcsUUFBUTtRQUNSQyxPQUFPO1lBQ0xDLGNBQWM7Z0JBQ1pwQjthQUNEO1FBQ0g7SUFDRjtDQUNELENBQVkifQ==