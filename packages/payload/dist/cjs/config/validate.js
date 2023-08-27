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
var _schema = /*#__PURE__*/ _interop_require_default(require("./schema"));
var _schema1 = /*#__PURE__*/ _interop_require_default(require("../collections/config/schema"));
var _schema2 = /*#__PURE__*/ _interop_require_wildcard(require("../fields/config/schema"));
var _schema3 = /*#__PURE__*/ _interop_require_default(require("../globals/config/schema"));
var _types = require("../fields/config/types");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var validateFields = function(context, entity) {
    var errors = [];
    entity.fields.forEach(function(field) {
        var idResult = {
            error: null
        };
        if ((0, _types.fieldAffectsData)(field) && field.name === "id") {
            idResult = _schema2.idField.validate(field, {
                abortEarly: false
            });
        }
        var result = _schema2.default.validate(field, {
            abortEarly: false
        });
        if (idResult.error) {
            idResult.error.details.forEach(function(param) {
                var message = param.message;
                errors.push("".concat(context, ' "').concat(entity.slug, '" > Field').concat((0, _types.fieldAffectsData)(field) ? ' "'.concat(field.name, '" >') : "", " ").concat(message));
            });
        }
        if (result.error) {
            result.error.details.forEach(function(param) {
                var message = param.message;
                errors.push("".concat(context, ' "').concat(entity.slug, '" > Field').concat((0, _types.fieldAffectsData)(field) ? ' "'.concat(field.name, '" >') : "", " ").concat(message));
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
                var result = _schema1.default.validate(collection, {
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
        var result = _schema3.default.validate(global, {
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
                    result = _schema.default.validate(config, {
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
var _default = validateSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvdmFsaWRhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJlc3VsdCB9IGZyb20gJ2pvaSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdwaW5vJztcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IGNvbGxlY3Rpb25TY2hlbWEgZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3NjaGVtYSc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZpZWxkU2NoZW1hLCB7IGlkRmllbGQgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3NjaGVtYSc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgZ2xvYmFsU2NoZW1hIGZyb20gJy4uL2dsb2JhbHMvY29uZmlnL3NjaGVtYSc7XG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmNvbnN0IHZhbGlkYXRlRmllbGRzID0gKGNvbnRleHQ6IHN0cmluZywgZW50aXR5OiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIHwgU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gIGVudGl0eS5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBsZXQgaWRSZXN1bHQ6IFBhcnRpYWw8VmFsaWRhdGlvblJlc3VsdD4gPSB7IGVycm9yOiBudWxsIH07XG4gICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09ICdpZCcpIHtcbiAgICAgIGlkUmVzdWx0ID0gaWRGaWVsZC52YWxpZGF0ZShmaWVsZCwgeyBhYm9ydEVhcmx5OiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmaWVsZFNjaGVtYS52YWxpZGF0ZShmaWVsZCwgeyBhYm9ydEVhcmx5OiBmYWxzZSB9KTtcbiAgICBpZiAoaWRSZXN1bHQuZXJyb3IpIHtcbiAgICAgIGlkUmVzdWx0LmVycm9yLmRldGFpbHMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgZXJyb3JzLnB1c2goYCR7Y29udGV4dH0gXCIke2VudGl0eS5zbHVnfVwiID4gRmllbGQke2ZpZWxkQWZmZWN0c0RhdGEoZmllbGQpID8gYCBcIiR7ZmllbGQubmFtZX1cIiA+YCA6ICcnfSAke21lc3NhZ2V9YCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgcmVzdWx0LmVycm9yLmRldGFpbHMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgZXJyb3JzLnB1c2goYCR7Y29udGV4dH0gXCIke2VudGl0eS5zbHVnfVwiID4gRmllbGQke2ZpZWxkQWZmZWN0c0RhdGEoZmllbGQpID8gYCBcIiR7ZmllbGQubmFtZX1cIiA+YCA6ICcnfSAke21lc3NhZ2V9YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZXJyb3JzO1xufTtcblxuY29uc3QgdmFsaWRhdGVDb2xsZWN0aW9ucyA9IGFzeW5jIChjb2xsZWN0aW9uczogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1tdKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gIGNvbGxlY3Rpb25zLmZvckVhY2goKGNvbGxlY3Rpb24pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBjb2xsZWN0aW9uU2NoZW1hLnZhbGlkYXRlKGNvbGxlY3Rpb24sIHsgYWJvcnRFYXJseTogZmFsc2UgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgcmVzdWx0LmVycm9yLmRldGFpbHMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgZXJyb3JzLnB1c2goYENvbGxlY3Rpb24gXCIke2NvbGxlY3Rpb24uc2x1Z31cIiA+ICR7bWVzc2FnZX1gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlcnJvcnMucHVzaCguLi52YWxpZGF0ZUZpZWxkcygnQ29sbGVjdGlvbicsIGNvbGxlY3Rpb24pKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbmNvbnN0IHZhbGlkYXRlR2xvYmFscyA9IChnbG9iYWxzOiBTYW5pdGl6ZWRHbG9iYWxDb25maWdbXSk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICBnbG9iYWxzLmZvckVhY2goKGdsb2JhbCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGdsb2JhbFNjaGVtYS52YWxpZGF0ZShnbG9iYWwsIHsgYWJvcnRFYXJseTogZmFsc2UgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgcmVzdWx0LmVycm9yLmRldGFpbHMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgZXJyb3JzLnB1c2goYEdsb2JhbHMgXCIke2dsb2JhbC5zbHVnfVwiID4gJHttZXNzYWdlfWApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVycm9ycy5wdXNoKC4uLnZhbGlkYXRlRmllbGRzKCdHbG9iYWwnLCBnbG9iYWwpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbmNvbnN0IHZhbGlkYXRlU2NoZW1hID0gYXN5bmMgKGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLCBsb2dnZXI6IExvZ2dlcik6IFByb21pc2U8U2FuaXRpemVkQ29uZmlnPiA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHNjaGVtYS52YWxpZGF0ZShjb25maWcsIHtcbiAgICBhYm9ydEVhcmx5OiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgbmVzdGVkRXJyb3JzID0gW1xuICAgIC4uLmF3YWl0IHZhbGlkYXRlQ29sbGVjdGlvbnMoY29uZmlnLmNvbGxlY3Rpb25zKSxcbiAgICAuLi52YWxpZGF0ZUdsb2JhbHMoY29uZmlnLmdsb2JhbHMpLFxuICBdO1xuXG4gIGlmIChyZXN1bHQuZXJyb3IgfHwgbmVzdGVkRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICBsb2dnZXIuZXJyb3IoYFRoZXJlIHdlcmUgJHsocmVzdWx0LmVycm9yPy5kZXRhaWxzPy5sZW5ndGggfHwgMCkgKyBuZXN0ZWRFcnJvcnMubGVuZ3RofSBlcnJvcnMgdmFsaWRhdGluZyB5b3VyIFBheWxvYWQgY29uZmlnYCk7XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgcmVzdWx0LmVycm9yLmRldGFpbHMuZm9yRWFjaCgoeyBtZXNzYWdlIH0pID0+IHtcbiAgICAgICAgaSArPSAxO1xuICAgICAgICBsb2dnZXIuZXJyb3IoYCR7aX06ICR7bWVzc2FnZX1gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBuZXN0ZWRFcnJvcnMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgaSArPSAxO1xuICAgICAgbG9nZ2VyLmVycm9yKGAke2l9OiAke21lc3NhZ2V9YCk7XG4gICAgfSk7XG5cbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH1cblxuXG4gIHJldHVybiByZXN1bHQudmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZVNjaGVtYTtcbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUZpZWxkcyIsImNvbnRleHQiLCJlbnRpdHkiLCJlcnJvcnMiLCJmaWVsZHMiLCJmb3JFYWNoIiwiZmllbGQiLCJpZFJlc3VsdCIsImVycm9yIiwiZmllbGRBZmZlY3RzRGF0YSIsIm5hbWUiLCJpZEZpZWxkIiwidmFsaWRhdGUiLCJhYm9ydEVhcmx5IiwicmVzdWx0IiwiZmllbGRTY2hlbWEiLCJkZXRhaWxzIiwibWVzc2FnZSIsInB1c2giLCJzbHVnIiwidmFsaWRhdGVDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25TY2hlbWEiLCJ2YWxpZGF0ZUdsb2JhbHMiLCJnbG9iYWxzIiwiZ2xvYmFsIiwiZ2xvYmFsU2NoZW1hIiwidmFsaWRhdGVTY2hlbWEiLCJjb25maWciLCJsb2dnZXIiLCJuZXN0ZWRFcnJvcnMiLCJpIiwic2NoZW1hIiwibGVuZ3RoIiwicHJvY2VzcyIsImV4aXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFnR0E7OztlQUFBOzs7NkRBOUZtQjs4REFDVTsrREFHUTs4REFFWjtxQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBTUEsaUJBQWlCLFNBQUNDLFNBQWlCQztJQUN2QyxJQUFNQyxTQUFtQixFQUFFO0lBQzNCRCxPQUFPRSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxTQUFDQztRQUNyQixJQUFJQyxXQUFzQztZQUFFQyxPQUFPO1FBQUs7UUFDeEQsSUFBSUMsSUFBQUEsdUJBQWdCLEVBQUNILFVBQVVBLE1BQU1JLElBQUksS0FBSyxNQUFNO1lBQ2xESCxXQUFXSSxnQkFBTyxDQUFDQyxRQUFRLENBQUNOLE9BQU87Z0JBQUVPLFlBQVk7WUFBTTtRQUN6RDtRQUVBLElBQU1DLFNBQVNDLGdCQUFXLENBQUNILFFBQVEsQ0FBQ04sT0FBTztZQUFFTyxZQUFZO1FBQU07UUFDL0QsSUFBSU4sU0FBU0MsS0FBSyxFQUFFO1lBQ2xCRCxTQUFTQyxLQUFLLENBQUNRLE9BQU8sQ0FBQ1gsT0FBTyxDQUFDO29CQUFH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