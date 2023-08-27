function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
import qs from "qs";
export var requests = {
    get: function(url) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            headers: {}
        };
        var query = "";
        if (options.params) {
            query = qs.stringify(options.params, {
                addQueryPrefix: true
            });
        }
        return fetch("".concat(url).concat(query), _object_spread({
            credentials: "include"
        }, options));
    },
    post: function(url) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            headers: {}
        };
        var headers = options && options.headers ? _object_spread({}, options.headers) : {};
        var formattedOptions = _object_spread_props(_object_spread({}, options), {
            method: "post",
            credentials: "include",
            headers: _object_spread({}, headers)
        });
        return fetch("".concat(url), formattedOptions);
    },
    put: function(url) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            headers: {}
        };
        var headers = options && options.headers ? _object_spread({}, options.headers) : {};
        var formattedOptions = _object_spread_props(_object_spread({}, options), {
            method: "put",
            credentials: "include",
            headers: _object_spread({}, headers)
        });
        return fetch(url, formattedOptions);
    },
    patch: function(url) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            headers: {}
        };
        var headers = options && options.headers ? _object_spread({}, options.headers) : {};
        var formattedOptions = _object_spread_props(_object_spread({}, options), {
            method: "PATCH",
            credentials: "include",
            headers: _object_spread({}, headers)
        });
        return fetch(url, formattedOptions);
    },
    delete: function(url) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            headers: {}
        };
        var headers = options && options.headers ? _object_spread({}, options.headers) : {};
        var formattedOptions = _object_spread_props(_object_spread({}, options), {
            method: "delete",
            credentials: "include",
            headers: _object_spread({}, headers)
        });
        return fetch(url, formattedOptions);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9hcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gJ3FzJztcblxudHlwZSBHZXRPcHRpb25zID0gUmVxdWVzdEluaXQgJiB7XG4gIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0cyA9IHtcbiAgZ2V0OiAodXJsOiBzdHJpbmcsIG9wdGlvbnM6IEdldE9wdGlvbnMgPSB7IGhlYWRlcnM6IHt9IH0pOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICBxdWVyeSA9IHFzLnN0cmluZ2lmeShvcHRpb25zLnBhcmFtcywgeyBhZGRRdWVyeVByZWZpeDogdHJ1ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0ke3F1ZXJ5fWAsIHtcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuICB9LFxuXG4gIHBvc3Q6ICh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7IGhlYWRlcnM6IHt9IH0pOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzID8geyAuLi5vcHRpb25zLmhlYWRlcnMgfSA6IHt9O1xuXG4gICAgY29uc3QgZm9ybWF0dGVkT3B0aW9uczogUmVxdWVzdEluaXQgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKGAke3VybH1gLCBmb3JtYXR0ZWRPcHRpb25zKTtcbiAgfSxcblxuICBwdXQ6ICh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7IGhlYWRlcnM6IHt9IH0pOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzID8geyAuLi5vcHRpb25zLmhlYWRlcnMgfSA6IHt9O1xuXG4gICAgY29uc3QgZm9ybWF0dGVkT3B0aW9uczogUmVxdWVzdEluaXQgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCBmb3JtYXR0ZWRPcHRpb25zKTtcbiAgfSxcblxuICBwYXRjaDogKHVybDogc3RyaW5nLCBvcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHsgaGVhZGVyczoge30gfSk6IFByb21pc2U8UmVzcG9uc2U+ID0+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gb3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMgPyB7IC4uLm9wdGlvbnMuaGVhZGVycyB9IDoge307XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgZm9ybWF0dGVkT3B0aW9ucyk7XG4gIH0sXG5cbiAgZGVsZXRlOiAodXJsOiBzdHJpbmcsIG9wdGlvbnM6IFJlcXVlc3RJbml0ID0geyBoZWFkZXJzOiB7fSB9KTogUHJvbWlzZTxSZXNwb25zZT4gPT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycyA/IHsgLi4ub3B0aW9ucy5oZWFkZXJzIH0gOiB7fTtcblxuICAgIGNvbnN0IGZvcm1hdHRlZE9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgZm9ybWF0dGVkT3B0aW9ucyk7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbInFzIiwicmVxdWVzdHMiLCJnZXQiLCJ1cmwiLCJvcHRpb25zIiwiaGVhZGVycyIsInF1ZXJ5IiwicGFyYW1zIiwic3RyaW5naWZ5IiwiYWRkUXVlcnlQcmVmaXgiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwicG9zdCIsImZvcm1hdHRlZE9wdGlvbnMiLCJtZXRob2QiLCJwdXQiLCJwYXRjaCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFFBQVEsS0FBSztBQU1wQixPQUFPLElBQU1DLFdBQVc7SUFDdEJDLEtBQUssU0FBQ0M7WUFBYUMsMkVBQXNCO1lBQUVDLFNBQVMsQ0FBQztRQUFFO1FBQ3JELElBQUlDLFFBQVE7UUFDWixJQUFJRixRQUFRRyxNQUFNLEVBQUU7WUFDbEJELFFBQVFOLEdBQUdRLFNBQVMsQ0FBQ0osUUFBUUcsTUFBTSxFQUFFO2dCQUFFRSxnQkFBZ0I7WUFBSztRQUM5RDtRQUNBLE9BQU9DLE1BQU0sQUFBQyxHQUFRSixPQUFOSCxLQUFZLE9BQU5HLFFBQVM7WUFDN0JLLGFBQWE7V0FDVlA7SUFFUDtJQUVBUSxNQUFNLFNBQUNUO1lBQWFDLDJFQUF1QjtZQUFFQyxTQUFTLENBQUM7UUFBRTtRQUN2RCxJQUFNQSxVQUFVRCxXQUFXQSxRQUFRQyxPQUFPLEdBQUcsbUJBQUtELFFBQVFDLE9BQU8sSUFBSyxDQUFDO1FBRXZFLElBQU1RLG1CQUFnQyx3Q0FDakNUO1lBQ0hVLFFBQVE7WUFDUkgsYUFBYTtZQUNiTixTQUFTLG1CQUNKQTs7UUFJUCxPQUFPSyxNQUFNLEFBQUMsR0FBTSxPQUFKUCxNQUFPVTtJQUN6QjtJQUVBRSxLQUFLLFNBQUNaO1lBQWFDLDJFQUF1QjtZQUFFQyxTQUFTLENBQUM7UUFBRTtRQUN0RCxJQUFNQSxVQUFVRCxXQUFXQSxRQUFRQyxPQUFPLEdBQUcsbUJBQUtELFFBQVFDLE9BQU8sSUFBSyxDQUFDO1FBRXZFLElBQU1RLG1CQUFnQyx3Q0FDakNUO1lBQ0hVLFFBQVE7WUFDUkgsYUFBYTtZQUNiTixTQUFTLG1CQUNKQTs7UUFJUCxPQUFPSyxNQUFNUCxLQUFLVTtJQUNwQjtJQUVBRyxPQUFPLFNBQUNiO1lBQWFDLDJFQUF1QjtZQUFFQyxTQUFTLENBQUM7UUFBRTtRQUN4RCxJQUFNQSxVQUFVRCxXQUFXQSxRQUFRQyxPQUFPLEdBQUcsbUJBQUtELFFBQVFDLE9BQU8sSUFBSyxDQUFDO1FBRXZFLElBQU1RLG1CQUFnQyx3Q0FDakNUO1lBQ0hVLFFBQVE7WUFDUkgsYUFBYTtZQUNiTixTQUFTLG1CQUNKQTs7UUFJUCxPQUFPSyxNQUFNUCxLQUFLVTtJQUNwQjtJQUVBSSxRQUFRLFNBQUNkO1lBQWFDLDJFQUF1QjtZQUFFQyxTQUFTLENBQUM7UUFBRTtRQUN6RCxJQUFNQSxVQUFVRCxXQUFXQSxRQUFRQyxPQUFPLEdBQUcsbUJBQUtELFFBQVFDLE9BQU8sSUFBSyxDQUFDO1FBRXZFLElBQU1RLG1CQUFnQyx3Q0FDakNUO1lBQ0hVLFFBQVE7WUFDUkgsYUFBYTtZQUNiTixTQUFTLG1CQUNKQTs7UUFJUCxPQUFPSyxNQUFNUCxLQUFLVTtJQUNwQjtBQUNGLEVBQUUifQ==