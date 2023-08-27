/* eslint-disable no-param-reassign */ function _define_property(obj, key, value) {
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
import { fieldAffectsData, tabHasName } from "../../fields/config/types";
var traverseFields = function(param) {
    var // parent,
    fields = param.fields, data = param.data, result = param.result;
    fields.forEach(function(field) {
        switch(field.type){
            case "row":
            case "collapsible":
                {
                    traverseFields({
                        fields: field.fields,
                        data: data,
                        result: result
                    });
                    break;
                }
            case "group":
                {
                    var targetResult;
                    if (typeof field.saveToJWT === "string") {
                        targetResult = field.saveToJWT;
                        result[field.saveToJWT] = data[field.name];
                    } else if (field.saveToJWT) {
                        targetResult = field.name;
                        result[field.name] = data[field.name];
                    }
                    var groupData = data[field.name];
                    var groupResult = targetResult ? result[targetResult] : result;
                    traverseFields({
                        fields: field.fields,
                        data: groupData,
                        result: groupResult
                    });
                    break;
                }
            case "tabs":
                {
                    traverseFields({
                        fields: field.tabs.map(function(tab) {
                            return _object_spread_props(_object_spread({}, tab), {
                                type: "tab"
                            });
                        }),
                        data: data,
                        result: result
                    });
                    break;
                }
            case "tab":
                {
                    if (tabHasName(field)) {
                        var targetResult1;
                        if (typeof field.saveToJWT === "string") {
                            targetResult1 = field.saveToJWT;
                            result[field.saveToJWT] = data[field.name];
                        } else if (field.saveToJWT) {
                            targetResult1 = field.name;
                            result[field.name] = data[field.name];
                        }
                        var tabData = data[field.name];
                        var tabResult = targetResult1 ? result[targetResult1] : result;
                        traverseFields({
                            fields: field.fields,
                            data: tabData,
                            result: tabResult
                        });
                    } else {
                        traverseFields({
                            fields: field.fields,
                            data: data,
                            result: result
                        });
                    }
                    break;
                }
            default:
                if (fieldAffectsData(field)) {
                    if (field.saveToJWT) {
                        if (typeof field.saveToJWT === "string") {
                            result[field.saveToJWT] = data[field.name];
                            delete result[field.name];
                        } else {
                            result[field.name] = data[field.name];
                        }
                    } else if (field.saveToJWT === false) {
                        delete result[field.name];
                    }
                }
        }
    });
    return result;
};
export var getFieldsToSign = function(args) {
    var collectionConfig = args.collectionConfig, user = args.user, email = args.email;
    var result = {
        email: email,
        id: user.id,
        collection: collectionConfig.slug
    };
    traverseFields({
        fields: collectionConfig.fields,
        data: user,
        result: result
    });
    return result;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvZ2V0RmllbGRzVG9TaWduLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCwgZmllbGRBZmZlY3RzRGF0YSwgVGFiQXNGaWVsZCwgdGFiSGFzTmFtZSB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG50eXBlIFRyYXZlcnNlRmllbGRzQXJncyA9IHtcbiAgZmllbGRzOiAoRmllbGQgfCBUYWJBc0ZpZWxkKVtdXG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHJlc3VsdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cbmNvbnN0IHRyYXZlcnNlRmllbGRzID0gKHtcbiAgLy8gcGFyZW50LFxuICBmaWVsZHMsXG4gIGRhdGEsXG4gIHJlc3VsdCxcbn06IFRyYXZlcnNlRmllbGRzQXJncykgPT4ge1xuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Jvdyc6XG4gICAgICBjYXNlICdjb2xsYXBzaWJsZSc6IHtcbiAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdncm91cCc6IHtcbiAgICAgICAgbGV0IHRhcmdldFJlc3VsdDtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWVsZC5zYXZlVG9KV1QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGFyZ2V0UmVzdWx0ID0gZmllbGQuc2F2ZVRvSldUO1xuICAgICAgICAgIHJlc3VsdFtmaWVsZC5zYXZlVG9KV1RdID0gZGF0YVtmaWVsZC5uYW1lXTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5zYXZlVG9KV1QpIHtcbiAgICAgICAgICB0YXJnZXRSZXN1bHQgPSBmaWVsZC5uYW1lO1xuICAgICAgICAgIHJlc3VsdFtmaWVsZC5uYW1lXSA9IGRhdGFbZmllbGQubmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JvdXBEYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IGRhdGFbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgIGNvbnN0IGdyb3VwUmVzdWx0ID0gKHRhcmdldFJlc3VsdCA/IHJlc3VsdFt0YXJnZXRSZXN1bHRdIDogcmVzdWx0KSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgIGRhdGE6IGdyb3VwRGF0YSxcbiAgICAgICAgICByZXN1bHQ6IGdyb3VwUmVzdWx0LFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICd0YWJzJzoge1xuICAgICAgICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgICAgZmllbGRzOiBmaWVsZC50YWJzLm1hcCgodGFiKSA9PiAoeyAuLi50YWIsIHR5cGU6ICd0YWInIH0pKSxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAndGFiJzoge1xuICAgICAgICBpZiAodGFiSGFzTmFtZShmaWVsZCkpIHtcbiAgICAgICAgICBsZXQgdGFyZ2V0UmVzdWx0O1xuICAgICAgICAgIGlmICh0eXBlb2YgZmllbGQuc2F2ZVRvSldUID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGFyZ2V0UmVzdWx0ID0gZmllbGQuc2F2ZVRvSldUO1xuICAgICAgICAgICAgcmVzdWx0W2ZpZWxkLnNhdmVUb0pXVF0gPSBkYXRhW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQuc2F2ZVRvSldUKSB7XG4gICAgICAgICAgICB0YXJnZXRSZXN1bHQgPSBmaWVsZC5uYW1lO1xuICAgICAgICAgICAgcmVzdWx0W2ZpZWxkLm5hbWVdID0gZGF0YVtmaWVsZC5uYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdGFiRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSBkYXRhW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgICAgIGNvbnN0IHRhYlJlc3VsdCA9ICh0YXJnZXRSZXN1bHQgPyByZXN1bHRbdGFyZ2V0UmVzdWx0XSA6IHJlc3VsdCkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICBkYXRhOiB0YWJEYXRhLFxuICAgICAgICAgICAgcmVzdWx0OiB0YWJSZXN1bHQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgICAgICAgaWYgKGZpZWxkLnNhdmVUb0pXVCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZC5zYXZlVG9KV1QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJlc3VsdFtmaWVsZC5zYXZlVG9KV1RdID0gZGF0YVtmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdFtmaWVsZC5uYW1lXSA9IGRhdGFbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChmaWVsZC5zYXZlVG9KV1QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkZWxldGUgcmVzdWx0W2ZpZWxkLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGNvbnN0IGdldEZpZWxkc1RvU2lnbiA9IChhcmdzOiB7XG4gIGNvbGxlY3Rpb25Db25maWc6IENvbGxlY3Rpb25Db25maWcsXG4gIHVzZXI6IFVzZXJcbiAgZW1haWw6IHN0cmluZ1xufSk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgdXNlcixcbiAgICBlbWFpbCxcbiAgfSA9IGFyZ3M7XG5cbiAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcbiAgICBlbWFpbCxcbiAgICBpZDogdXNlci5pZCxcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gIH07XG5cbiAgdHJhdmVyc2VGaWVsZHMoe1xuICAgIGZpZWxkczogY29sbGVjdGlvbkNvbmZpZy5maWVsZHMsXG4gICAgZGF0YTogdXNlcixcbiAgICByZXN1bHQsXG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIl0sIm5hbWVzIjpbImZpZWxkQWZmZWN0c0RhdGEiLCJ0YWJIYXNOYW1lIiwidHJhdmVyc2VGaWVsZHMiLCJmaWVsZHMiLCJkYXRhIiwicmVzdWx0IiwiZm9yRWFjaCIsImZpZWxkIiwidHlwZSIsInRhcmdldFJlc3VsdCIsInNhdmVUb0pXVCIsIm5hbWUiLCJncm91cERhdGEiLCJncm91cFJlc3VsdCIsInRhYnMiLCJtYXAiLCJ0YWIiLCJ0YWJEYXRhIiwidGFiUmVzdWx0IiwiZ2V0RmllbGRzVG9TaWduIiwiYXJncyIsImNvbGxlY3Rpb25Db25maWciLCJ1c2VyIiwiZW1haWwiLCJpZCIsImNvbGxlY3Rpb24iLCJzbHVnIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHcEMsU0FBZ0JBLGdCQUFnQixFQUFjQyxVQUFVLFFBQVEsNEJBQTRCO0FBTzVGLElBQU1DLGlCQUFpQjtRQUNyQixVQUFVO0lBQ1ZDLGVBQUFBLFFBQ0FDLGFBQUFBLE1BQ0FDLGVBQUFBO0lBRUFGLE9BQU9HLE9BQU8sQ0FBQyxTQUFDQztRQUNkLE9BQVFBLE1BQU1DLElBQUk7WUFDaEIsS0FBSztZQUNMLEtBQUs7Z0JBQWU7b0JBQ2xCTixlQUFlO3dCQUNiQyxRQUFRSSxNQUFNSixNQUFNO3dCQUNwQkMsTUFBQUE7d0JBQ0FDLFFBQUFBO29CQUNGO29CQUNBO2dCQUNGO1lBQ0EsS0FBSztnQkFBUztvQkFDWixJQUFJSTtvQkFDSixJQUFJLE9BQU9GLE1BQU1HLFNBQVMsS0FBSyxVQUFVO3dCQUN2Q0QsZUFBZUYsTUFBTUcsU0FBUzt3QkFDOUJMLE1BQU0sQ0FBQ0UsTUFBTUcsU0FBUyxDQUFDLEdBQUdOLElBQUksQ0FBQ0csTUFBTUksSUFBSSxDQUFDO29CQUM1QyxPQUFPLElBQUlKLE1BQU1HLFNBQVMsRUFBRTt3QkFDMUJELGVBQWVGLE1BQU1JLElBQUk7d0JBQ3pCTixNQUFNLENBQUNFLE1BQU1JLElBQUksQ0FBQyxHQUFHUCxJQUFJLENBQUNHLE1BQU1JLElBQUksQ0FBQztvQkFDdkM7b0JB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