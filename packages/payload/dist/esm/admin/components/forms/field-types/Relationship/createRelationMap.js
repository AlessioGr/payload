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
export var createRelationMap = function(param) {
    var hasMany = param.hasMany, relationTo = param.relationTo, value = param.value;
    var hasMultipleRelations = Array.isArray(relationTo);
    var relationMap;
    if (Array.isArray(relationTo)) {
        relationMap = relationTo.reduce(function(map, current) {
            return _object_spread_props(_object_spread({}, map), _define_property({}, current, []));
        }, {});
    } else {
        relationMap = _define_property({}, relationTo, []);
    }
    if (value === null) {
        return relationMap;
    }
    var add = function(relation, id) {
        if ((typeof id === "string" || typeof id === "number") && typeof relation === "string") {
            if (relationMap[relation]) {
                relationMap[relation].push(id);
            } else {
                relationMap[relation] = [
                    id
                ];
            }
        }
    };
    if (hasMany && Array.isArray(value)) {
        value.forEach(function(val) {
            if (hasMultipleRelations && typeof val === "object" && "relationTo" in val && "value" in val) {
                add(val.relationTo, val.value);
            }
            if (!hasMultipleRelations && typeof relationTo === "string") {
                add(relationTo, val);
            }
        });
    } else if (hasMultipleRelations && Array.isArray(relationTo)) {
        if (typeof value === "object" && "relationTo" in value && "value" in value) {
            add(value.relationTo, value.value);
        }
    } else {
        add(relationTo, value);
    }
    return relationMap;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9jcmVhdGVSZWxhdGlvbk1hcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWx1ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG50eXBlIFJlbGF0aW9uTWFwID0ge1xuICBbcmVsYXRpb246IHN0cmluZ106IChzdHJpbmcgfCBudW1iZXIpW11cbn1cblxudHlwZSBDcmVhdGVSZWxhdGlvbk1hcCA9IChhcmdzOiB7XG4gIGhhc01hbnk6IGJvb2xlYW5cbiAgcmVsYXRpb25Ubzogc3RyaW5nIHwgc3RyaW5nW11cbiAgdmFsdWU6IFZhbHVlIHwgVmFsdWVbXSB8IG51bGwgLy8gcmVhbGx5IG5lZWRzIHRvIGJlIGBWYWx1ZVdpdGhSZWxhdGlvbmBcbn0pID0+IFJlbGF0aW9uTWFwO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVsYXRpb25NYXA6IENyZWF0ZVJlbGF0aW9uTWFwID0gKHtcbiAgaGFzTWFueSxcbiAgcmVsYXRpb25UbyxcbiAgdmFsdWUsXG59KSA9PiB7XG4gIGNvbnN0IGhhc011bHRpcGxlUmVsYXRpb25zID0gQXJyYXkuaXNBcnJheShyZWxhdGlvblRvKTtcbiAgbGV0IHJlbGF0aW9uTWFwOiBSZWxhdGlvbk1hcDtcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVsYXRpb25UbykpIHtcbiAgICByZWxhdGlvbk1hcCA9IHJlbGF0aW9uVG8ucmVkdWNlKChtYXAsIGN1cnJlbnQpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLm1hcCwgW2N1cnJlbnRdOiBbXSB9O1xuICAgIH0sIHt9KTtcbiAgfSBlbHNlIHtcbiAgICByZWxhdGlvbk1hcCA9IHsgW3JlbGF0aW9uVG9dOiBbXSB9O1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHJlbGF0aW9uTWFwO1xuICB9XG5cbiAgY29uc3QgYWRkID0gKHJlbGF0aW9uOiBzdHJpbmcsIGlkOiB1bmtub3duKSA9PiB7XG4gICAgaWYgKCgodHlwZW9mIGlkID09PSAnc3RyaW5nJykgfHwgdHlwZW9mIGlkID09PSAnbnVtYmVyJykgJiYgdHlwZW9mIHJlbGF0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHJlbGF0aW9uTWFwW3JlbGF0aW9uXSkge1xuICAgICAgICByZWxhdGlvbk1hcFtyZWxhdGlvbl0ucHVzaChpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWxhdGlvbk1hcFtyZWxhdGlvbl0gPSBbaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAoaGFzTWFueSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgaWYgKGhhc011bHRpcGxlUmVsYXRpb25zICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmICdyZWxhdGlvblRvJyBpbiB2YWwgJiYgJ3ZhbHVlJyBpbiB2YWwpIHtcbiAgICAgICAgYWRkKHZhbC5yZWxhdGlvblRvLCB2YWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhc011bHRpcGxlUmVsYXRpb25zICYmIHR5cGVvZiByZWxhdGlvblRvID09PSAnc3RyaW5nJykge1xuICAgICAgICBhZGQocmVsYXRpb25UbywgdmFsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChoYXNNdWx0aXBsZVJlbGF0aW9ucyAmJiBBcnJheS5pc0FycmF5KHJlbGF0aW9uVG8pKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ3JlbGF0aW9uVG8nIGluIHZhbHVlICYmICd2YWx1ZScgaW4gdmFsdWUpIHtcbiAgICAgIGFkZCh2YWx1ZS5yZWxhdGlvblRvLCB2YWx1ZS52YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFkZChyZWxhdGlvblRvLCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gcmVsYXRpb25NYXA7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZVJlbGF0aW9uTWFwIiwiaGFzTWFueSIsInJlbGF0aW9uVG8iLCJ2YWx1ZSIsImhhc011bHRpcGxlUmVsYXRpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwicmVsYXRpb25NYXAiLCJyZWR1Y2UiLCJtYXAiLCJjdXJyZW50IiwiYWRkIiwicmVsYXRpb24iLCJpZCIsInB1c2giLCJmb3JFYWNoIiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyxJQUFNQSxvQkFBdUM7UUFDbERDLGdCQUFBQSxTQUNBQyxtQkFBQUEsWUFDQUMsY0FBQUE7SUFFQSxJQUFNQyx1QkFBdUJDLE1BQU1DLE9BQU8sQ0FBQ0o7SUFDM0MsSUFBSUs7SUFDSixJQUFJRixNQUFNQyxPQUFPLENBQUNKLGFBQWE7UUFDN0JLLGNBQWNMLFdBQVdNLE1BQU0sQ0FBQyxTQUFDQyxLQUFLQztZQUNwQyxPQUFPLHdDQUFLRCxNQUFLLHFCQUFDQyxTQUFVLEVBQUU7UUFDaEMsR0FBRyxDQUFDO0lBQ04sT0FBTztRQUNMSCxjQUFnQixxQkFBQ0wsWUFBYSxFQUFFO0lBQ2xDO0lBRUEsSUFBSUMsVUFBVSxNQUFNO1FBQ2xCLE9BQU9JO0lBQ1Q7SUFFQSxJQUFNSSxNQUFNLFNBQUNDLFVBQWtCQztRQUM3QixJQUFJLEFBQUMsQ0FBQSxBQUFDLE9BQU9BLE9BQU8sWUFBYSxPQUFPQSxPQUFPLFFBQU8sS0FBTSxPQUFPRCxhQUFhLFVBQVU7WUFDeEYsSUFBSUwsV0FBVyxDQUFDSyxTQUFTLEVBQUU7Z0JBQ3pCTCxXQUFXLENBQUNLLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDRDtZQUM3QixPQUFPO2dCQUNMTixXQUFXLENBQUNLLFNBQVMsR0FBRztvQkFBQ0M7aUJBQUc7WUFDOUI7UUFDRjtJQUNGO0lBRUEsSUFBSVosV0FBV0ksTUFBTUMsT0FBTyxDQUFDSCxRQUFRO1FBQ25DQSxNQUFNWSxPQUFPLENBQUMsU0FBQ0M7WUFDYixJQUFJWix3QkFBd0IsT0FBT1ksUUFBUSxZQUFZLGdCQUFnQkEsT0FBTyxXQUFXQSxLQUFLO2dCQUM1RkwsSUFBSUssSUFBSWQsVUFBVSxFQUFFYyxJQUFJYixLQUFLO1lBQy9CO1lBRUEsSUFBSSxDQUFDQyx3QkFBd0IsT0FBT0YsZUFBZSxVQUFVO2dCQUMzRFMsSUFBSVQsWUFBWWM7WUFDbEI7UUFDRjtJQUNGLE9BQU8sSUFBSVosd0JBQXdCQyxNQUFNQyxPQUFPLENBQUNKLGFBQWE7UUFDNUQsSUFBSSxPQUFPQyxVQUFVLFlBQVksZ0JBQWdCQSxTQUFTLFdBQVdBLE9BQU87WUFDMUVRLElBQUlSLE1BQU1ELFVBQVUsRUFBRUMsTUFBTUEsS0FBSztRQUNuQztJQUNGLE9BQU87UUFDTFEsSUFBSVQsWUFBWUM7SUFDbEI7SUFFQSxPQUFPSTtBQUNULEVBQUUifQ==