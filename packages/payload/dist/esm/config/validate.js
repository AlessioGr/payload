function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import schema from "./schema";
import collectionSchema from "../collections/config/schema";
import fieldSchema, { idField } from "../fields/config/schema";
import globalSchema from "../globals/config/schema";
import { fieldAffectsData } from "../fields/config/types";
var validateFields = function(context, entity) {
    var errors = [];
    entity.fields.forEach(function(field) {
        var idResult = {
            error: null
        };
        if (fieldAffectsData(field) && field.name === "id") {
            idResult = idField.validate(field, {
                abortEarly: false
            });
        }
        var result = fieldSchema.validate(field, {
            abortEarly: false
        });
        if (idResult.error) {
            idResult.error.details.forEach(function(param) {
                var message = param.message;
                errors.push("".concat(context, ' "').concat(entity.slug, '" > Field').concat(fieldAffectsData(field) ? ' "'.concat(field.name, '" >') : "", " ").concat(message));
            });
        }
        if (result.error) {
            result.error.details.forEach(function(param) {
                var message = param.message;
                errors.push("".concat(context, ' "').concat(entity.slug, '" > Field').concat(fieldAffectsData(field) ? ' "'.concat(field.name, '" >') : "", " ").concat(message));
            });
        }
    });
    return errors;
};
var validateCollections = function() {
    var _ref = _async_to_generator(function(collections) {
        var errors;
        return _ts_generator(this, function(_state) {
            errors = [];
            collections.forEach(function(collection) {
                var _errors;
                var result = collectionSchema.validate(collection, {
                    abortEarly: false
                });
                if (result.error) {
                    result.error.details.forEach(function(param) {
                        var message = param.message;
                        errors.push('Collection "'.concat(collection.slug, '" > ').concat(message));
                    });
                }
                (_errors = errors).push.apply(_errors, _to_consumable_array(validateFields("Collection", collection)));
            });
            return [
                2,
                errors
            ];
        });
    });
    return function validateCollections(collections) {
        return _ref.apply(this, arguments);
    };
}();
var validateGlobals = function(globals) {
    var errors = [];
    globals.forEach(function(global) {
        var _errors;
        var result = globalSchema.validate(global, {
            abortEarly: false
        });
        if (result.error) {
            result.error.details.forEach(function(param) {
                var message = param.message;
                errors.push('Globals "'.concat(global.slug, '" > ').concat(message));
            });
        }
        (_errors = errors).push.apply(_errors, _to_consumable_array(validateFields("Global", global)));
    });
    return errors;
};
var validateSchema = function() {
    var _ref = _async_to_generator(function(config, logger) {
        var result, nestedErrors, _result_error_details, _result_error, i;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    result = schema.validate(config, {
                        abortEarly: false
                    });
                    return [
                        4,
                        validateCollections(config.collections)
                    ];
                case 1:
                    nestedErrors = _to_consumable_array.apply(void 0, [
                        _state.sent()
                    ]).concat(_to_consumable_array(validateGlobals(config.globals)));
                    if (result.error || nestedErrors.length > 0) {
                        ;
                        logger.error("There were ".concat((((_result_error = result.error) === null || _result_error === void 0 ? void 0 : (_result_error_details = _result_error.details) === null || _result_error_details === void 0 ? void 0 : _result_error_details.length) || 0) + nestedErrors.length, " errors validating your Payload config"));
                        i = 0;
                        if (result.error) {
                            result.error.details.forEach(function(param) {
                                var message = param.message;
                                i += 1;
                                logger.error("".concat(i, ": ").concat(message));
                            });
                        }
                        nestedErrors.forEach(function(message) {
                            i += 1;
                            logger.error("".concat(i, ": ").concat(message));
                        });
                        process.exit(1);
                    }
                    return [
                        2,
                        result.value
                    ];
            }
        });
    });
    return function validateSchema(config, logger) {
        return _ref.apply(this, arguments);
    };
}();
export default validateSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvdmFsaWRhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJlc3VsdCB9IGZyb20gJ2pvaSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdwaW5vJztcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IGNvbGxlY3Rpb25TY2hlbWEgZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3NjaGVtYSc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZpZWxkU2NoZW1hLCB7IGlkRmllbGQgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3NjaGVtYSc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgZ2xvYmFsU2NoZW1hIGZyb20gJy4uL2dsb2JhbHMvY29uZmlnL3NjaGVtYSc7XG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmNvbnN0IHZhbGlkYXRlRmllbGRzID0gKGNvbnRleHQ6IHN0cmluZywgZW50aXR5OiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIHwgU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gIGVudGl0eS5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBsZXQgaWRSZXN1bHQ6IFBhcnRpYWw8VmFsaWRhdGlvblJlc3VsdD4gPSB7IGVycm9yOiBudWxsIH07XG4gICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09ICdpZCcpIHtcbiAgICAgIGlkUmVzdWx0ID0gaWRGaWVsZC52YWxpZGF0ZShmaWVsZCwgeyBhYm9ydEVhcmx5OiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmaWVsZFNjaGVtYS52YWxpZGF0ZShmaWVsZCwgeyBhYm9ydEVhcmx5OiBmYWxzZSB9KTtcbiAgICBpZiAoaWRSZXN1bHQuZXJyb3IpIHtcbiAgICAgIGlkUmVzdWx0LmVycm9yLmRldGFpbHMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgZXJyb3JzLnB1c2goYCR7Y29udGV4dH0gXCIke2VudGl0eS5zbHVnfVwiID4gRmllbGQke2ZpZWxkQWZmZWN0c0RhdGEoZmllbGQpID8gYCBcIiR7ZmllbGQubmFtZX1cIiA+YCA6ICcnfSAke21lc3NhZ2V9YCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgcmVzdWx0LmVycm9yLmRldGFpbHMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgZXJyb3JzLnB1c2goYCR7Y29udGV4dH0gXCIke2VudGl0eS5zbHVnfVwiID4gRmllbGQke2ZpZWxkQWZmZWN0c0RhdGEoZmllbGQpID8gYCBcIiR7ZmllbGQubmFtZX1cIiA+YCA6ICcnfSAke21lc3NhZ2V9YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZXJyb3JzO1xufTtcblxuY29uc3QgdmFsaWRhdGVDb2xsZWN0aW9ucyA9IGFzeW5jIChjb2xsZWN0aW9uczogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1tdKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gIGNvbGxlY3Rpb25zLmZvckVhY2goKGNvbGxlY3Rpb24pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBjb2xsZWN0aW9uU2NoZW1hLnZhbGlkYXRlKGNvbGxlY3Rpb24sIHsgYWJvcnRFYXJseTogZmFsc2UgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgcmVzdWx0LmVycm9yLmRldGFpbHMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgZXJyb3JzLnB1c2goYENvbGxlY3Rpb24gXCIke2NvbGxlY3Rpb24uc2x1Z31cIiA+ICR7bWVzc2FnZX1gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlcnJvcnMucHVzaCguLi52YWxpZGF0ZUZpZWxkcygnQ29sbGVjdGlvbicsIGNvbGxlY3Rpb24pKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbmNvbnN0IHZhbGlkYXRlR2xvYmFscyA9IChnbG9iYWxzOiBTYW5pdGl6ZWRHbG9iYWxDb25maWdbXSk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICBnbG9iYWxzLmZvckVhY2goKGdsb2JhbCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGdsb2JhbFNjaGVtYS52YWxpZGF0ZShnbG9iYWwsIHsgYWJvcnRFYXJseTogZmFsc2UgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgcmVzdWx0LmVycm9yLmRldGFpbHMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgZXJyb3JzLnB1c2goYEdsb2JhbHMgXCIke2dsb2JhbC5zbHVnfVwiID4gJHttZXNzYWdlfWApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVycm9ycy5wdXNoKC4uLnZhbGlkYXRlRmllbGRzKCdHbG9iYWwnLCBnbG9iYWwpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbmNvbnN0IHZhbGlkYXRlU2NoZW1hID0gYXN5bmMgKGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBsb2dnZXI6IExvZ2dlcik6IFByb21pc2U8U2FuaXRpemVkQ29uZmlnPiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHNjaGVtYS52YWxpZGF0ZShjb25maWcsIHtcbiAgICBhYm9ydEVhcmx5OiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgbmVzdGVkRXJyb3JzID0gW1xuICAgIC4uLmF3YWl0IHZhbGlkYXRlQ29sbGVjdGlvbnMoY29uZmlnLmNvbGxlY3Rpb25zKSxcbiAgICAuLi52YWxpZGF0ZUdsb2JhbHMoY29uZmlnLmdsb2JhbHMpLFxuICBdO1xuXG4gIGlmIChyZXN1bHQuZXJyb3IgfHwgbmVzdGVkRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICBsb2dnZXIuZXJyb3IoYFRoZXJlIHdlcmUgJHsocmVzdWx0LmVycm9yPy5kZXRhaWxzPy5sZW5ndGggfHwgMCkgKyBuZXN0ZWRFcnJvcnMubGVuZ3RofSBlcnJvcnMgdmFsaWRhdGluZyB5b3VyIFBheWxvYWQgY29uZmlnYCk7XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgcmVzdWx0LmVycm9yLmRldGFpbHMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgaSArPSAxO1xuICAgICAgICBsb2dnZXIuZXJyb3IoYCR7aX06ICR7bWVzc2FnZX1gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBuZXN0ZWRFcnJvcnMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgaSArPSAxO1xuICAgICAgbG9nZ2VyLmVycm9yKGAke2l9OiAke21lc3NhZ2V9YCk7XG4gICAgfSk7XG5cbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH1cblxuXG4gIHJldHVybiByZXN1bHQudmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZVNjaGVtYTtcbiJdLCJuYW1lcyI6WyJzY2hlbWEiLCJjb2xsZWN0aW9uU2NoZW1hIiwiZmllbGRTY2hlbWEiLCJpZEZpZWxkIiwiZ2xvYmFsU2NoZW1hIiwiZmllbGRBZmZlY3RzRGF0YSIsInZhbGlkYXRlRmllbGRzIiwiY29udGV4dCIsImVudGl0eSIsImVycm9ycyIsImZpZWxkcyIsImZvckVhY2giLCJmaWVsZCIsImlkUmVzdWx0IiwiZXJyb3IiLCJuYW1lIiwidmFsaWRhdGUiLCJhYm9ydEVhcmx5IiwicmVzdWx0IiwiZGV0YWlscyIsIm1lc3NhZ2UiLCJwdXNoIiwic2x1ZyIsInZhbGlkYXRlQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9ucyIsImNvbGxlY3Rpb24iLCJ2YWxpZGF0ZUdsb2JhbHMiLCJnbG9iYWxzIiwiZ2xvYmFsIiwidmFsaWRhdGVTY2hlbWEiLCJjb25maWciLCJsb2dnZXIiLCJuZXN0ZWRFcnJvcnMiLCJpIiwibGVuZ3RoIiwicHJvY2VzcyIsImV4aXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPQSxZQUFZLFdBQVc7QUFDOUIsT0FBT0Msc0JBQXNCLCtCQUErQjtBQUc1RCxPQUFPQyxlQUFlQyxPQUFPLFFBQVEsMEJBQTBCO0FBRS9ELE9BQU9DLGtCQUFrQiwyQkFBMkI7QUFDcEQsU0FBU0MsZ0JBQWdCLFFBQVEseUJBQXlCO0FBRTFELElBQU1DLGlCQUFpQixTQUFDQyxTQUFpQkM7SUFDdkMsSUFBTUMsU0FBbUIsRUFBRTtJQUMzQkQsT0FBT0UsTUFBTSxDQUFDQyxPQUFPLENBQUMsU0FBQ0M7UUFDckIsSUFBSUMsV0FBc0M7WUFBRUMsT0FBTztRQUFLO1FBQ3hELElBQUlULGlCQUFpQk8sVUFBVUEsTUFBTUcsSUFBSSxLQUFLLE1BQU07WUFDbERGLFdBQVdWLFFBQVFhLFFBQVEsQ0FBQ0osT0FBTztnQkFBRUssWUFBWTtZQUFNO1FBQ3pEO1FBRUEsSUFBTUMsU0FBU2hCLFlBQVljLFFBQVEsQ0FBQ0osT0FBTztZQUFFSyxZQUFZO1FBQU07UUFDL0QsSUFBSUosU0FBU0MsS0FBSyxFQUFFO1lBQ2xCRCxTQUFTQyxLQUFLLENBQUNLLE9BQU8s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