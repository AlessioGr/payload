/* eslint-disable no-restricted-syntax */ /* eslint-disable no-await-in-loop */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateQueryPaths", {
    enumerable: true,
    get: function() {
        return validateQueryPaths;
    }
});
var _QueryError = /*#__PURE__*/ _interop_require_default(require("../../errors/QueryError"));
var _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/flattenTopLevelFields"));
var _validateSearchParams = require("./validateSearchParams");
var _deepCopyObject = /*#__PURE__*/ _interop_require_default(require("../../utilities/deepCopyObject"));
var _flattenWhereToOperators = /*#__PURE__*/ _interop_require_default(require("../flattenWhereToOperators"));
var _constants = require("../../types/constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
function validateQueryPaths(_) {
    return _validateQueryPaths.apply(this, arguments);
}
function _validateQueryPaths() {
    _validateQueryPaths = _async_to_generator(function(param) {
        var where, collectionConfig, globalConfig, _param_errors, errors, _param_policies, policies, versionFields, req, overrideAccess, fields, whereFields, promises;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    where = param.where, collectionConfig = param.collectionConfig, globalConfig = param.globalConfig, _param_errors = param.errors, errors = _param_errors === void 0 ? [] : _param_errors, _param_policies = param.policies, policies = _param_policies === void 0 ? {
                        collections: {},
                        globals: {}
                    } : _param_policies, versionFields = param.versionFields, req = param.req, overrideAccess = param.overrideAccess;
                    fields = (0, _flattenTopLevelFields.default)(versionFields || (globalConfig || collectionConfig).fields);
                    if (!(typeof where === "object")) return [
                        3,
                        2
                    ];
                    whereFields = (0, _flattenWhereToOperators.default)(where);
                    promises = [];
                    whereFields.map(function() {
                        var _ref = _async_to_generator(function(constraint) {
                            return _ts_generator(this, function(_state) {
                                Object.keys(constraint).map(function() {
                                    var _ref = _async_to_generator(function(path) {
                                        return _ts_generator(this, function(_state) {
                                            Object.entries(constraint[path]).map(function() {
                                                var _ref = _async_to_generator(function(param) {
                                                    var _param, operator, val;
                                                    return _ts_generator(this, function(_state) {
                                                        _param = _sliced_to_array(param, 2), operator = _param[0], val = _param[1];
                                                        if (_constants.validOperators.includes(operator)) {
                                                            promises.push((0, _validateSearchParams.validateSearchParam)({
                                                                collectionConfig: (0, _deepCopyObject.default)(collectionConfig),
                                                                globalConfig: (0, _deepCopyObject.default)(globalConfig),
                                                                fields: fields,
                                                                versionFields: versionFields,
                                                                errors: errors,
                                                                policies: policies,
                                                                req: req,
                                                                path: path,
                                                                val: val,
                                                                operator: operator,
                                                                overrideAccess: overrideAccess
                                                            }));
                                                        }
                                                        return [
                                                            2
                                                        ];
                                                    });
                                                });
                                                return function(_) {
                                                    return _ref.apply(this, arguments);
                                                };
                                            }());
                                            return [
                                                2
                                            ];
                                        });
                                    });
                                    return function(path) {
                                        return _ref.apply(this, arguments);
                                    };
                                }());
                                return [
                                    2
                                ];
                            });
                        });
                        return function(constraint) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 1:
                    _state.sent();
                    if (errors.length > 0) {
                        throw new _QueryError.default(errors);
                    }
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    });
    return _validateQueryPaths.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9xdWVyeVZhbGlkYXRpb24vdmFsaWRhdGVRdWVyeVBhdGhzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hd2FpdC1pbi1sb29wICovXG5pbXBvcnQgeyBPcGVyYXRvciwgUGF5bG9hZFJlcXVlc3QsIFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IFF1ZXJ5RXJyb3IgZnJvbSAnLi4vLi4vZXJyb3JzL1F1ZXJ5RXJyb3InO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgZmxhdHRlbkZpZWxkcyBmcm9tICcuLi8uLi91dGlsaXRpZXMvZmxhdHRlblRvcExldmVsRmllbGRzJztcbmltcG9ydCB7IEZpZWxkLCBGaWVsZEFmZmVjdGluZ0RhdGEgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUGFyYW0gfSBmcm9tICcuL3ZhbGlkYXRlU2VhcmNoUGFyYW1zJztcbmltcG9ydCBkZWVwQ29weU9iamVjdCBmcm9tICcuLi8uLi91dGlsaXRpZXMvZGVlcENvcHlPYmplY3QnO1xuaW1wb3J0IHsgRW50aXR5UG9saWNpZXMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyBmcm9tICcuLi9mbGF0dGVuV2hlcmVUb09wZXJhdG9ycyc7XG5pbXBvcnQgeyB2YWxpZE9wZXJhdG9ycyB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbnN0YW50cyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgd2hlcmU6IFdoZXJlXG4gIGVycm9ycz86IHsgcGF0aDogc3RyaW5nIH1bXVxuICBwb2xpY2llcz86IEVudGl0eVBvbGljaWVzXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgdmVyc2lvbkZpZWxkcz86IEZpZWxkW11cbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbn0gJiAoe1xuICBjb2xsZWN0aW9uQ29uZmlnOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG4gIGdsb2JhbENvbmZpZz86IG5ldmVyIHwgdW5kZWZpbmVkXG59IHwge1xuICBnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBjb2xsZWN0aW9uQ29uZmlnPzogbmV2ZXIgfCB1bmRlZmluZWRcbn0pXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVRdWVyeVBhdGhzKHtcbiAgd2hlcmUsXG4gIGNvbGxlY3Rpb25Db25maWcsXG4gIGdsb2JhbENvbmZpZyxcbiAgZXJyb3JzID0gW10sXG4gIHBvbGljaWVzID0ge1xuICAgIGNvbGxlY3Rpb25zOiB7fSxcbiAgICBnbG9iYWxzOiB7fSxcbiAgfSxcbiAgdmVyc2lvbkZpZWxkcyxcbiAgcmVxLFxuICBvdmVycmlkZUFjY2Vzcyxcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZmllbGRzID0gZmxhdHRlbkZpZWxkcyh2ZXJzaW9uRmllbGRzIHx8IChnbG9iYWxDb25maWcgfHwgY29sbGVjdGlvbkNvbmZpZykuZmllbGRzKSBhcyBGaWVsZEFmZmVjdGluZ0RhdGFbXTtcbiAgaWYgKHR5cGVvZiB3aGVyZSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBjb25zdCBmbGF0dGVuZWRXaGVyZSA9IGZsYXR0ZW5XaGVyZSh3aGVyZSk7XG4gICAgY29uc3Qgd2hlcmVGaWVsZHMgPSBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyh3aGVyZSk7XG4gICAgLy8gV2UgbmVlZCB0byBkZXRlcm1pbmUgaWYgdGhlIHdoZXJlS2V5IGlzIGFuIEFORCwgT1IsIG9yIGEgc2NoZW1hIHBhdGhcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgIHdoZXJlRmllbGRzLm1hcChhc3luYyAoY29uc3RyYWludCkgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoY29uc3RyYWludCkubWFwKGFzeW5jIChwYXRoKSA9PiB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNvbnN0cmFpbnRbcGF0aF0pLm1hcChhc3luYyAoW29wZXJhdG9yLCB2YWxdKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbGlkT3BlcmF0b3JzLmluY2x1ZGVzKG9wZXJhdG9yIGFzIE9wZXJhdG9yKSkge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh2YWxpZGF0ZVNlYXJjaFBhcmFtKHtcbiAgICAgICAgICAgICAgY29sbGVjdGlvbkNvbmZpZzogZGVlcENvcHlPYmplY3QoY29sbGVjdGlvbkNvbmZpZyksXG4gICAgICAgICAgICAgIGdsb2JhbENvbmZpZzogZGVlcENvcHlPYmplY3QoZ2xvYmFsQ29uZmlnKSxcbiAgICAgICAgICAgICAgZmllbGRzOiAoZmllbGRzIGFzIEZpZWxkW10pLFxuICAgICAgICAgICAgICB2ZXJzaW9uRmllbGRzLFxuICAgICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICAgIHBvbGljaWVzLFxuICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgUXVlcnlFcnJvcihlcnJvcnMpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInZhbGlkYXRlUXVlcnlQYXRocyIsIndoZXJlIiwiY29sbGVjdGlvbkNvbmZpZyIsImdsb2JhbENvbmZpZyIsImVycm9ycyIsInBvbGljaWVzIiwidmVyc2lvbkZpZWxkcyIsInJlcSIsIm92ZXJyaWRlQWNjZXNzIiwiZmllbGRzIiwid2hlcmVGaWVsZHMiLCJwcm9taXNlcyIsImNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsImZsYXR0ZW5GaWVsZHMiLCJmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyIsIm1hcCIsImNvbnN0cmFpbnQiLCJPYmplY3QiLCJrZXlzIiwicGF0aCIsImVudHJpZXMiLCJvcGVyYXRvciIsInZhbCIsInZhbGlkT3BlcmF0b3JzIiwiaW5jbHVkZXMiLCJwdXNoIiwidmFsaWRhdGVTZWFyY2hQYXJhbSIsImRlZXBDb3B5T2JqZWN0IiwiUHJvbWlzZSIsImFsbCIsImxlbmd0aCIsIlF1ZXJ5RXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QyxHQUN2QyxtQ0FBbUM7Ozs7K0JBMkJiQTs7O2VBQUFBOzs7aUVBekJDOzRFQUdHO29DQUVVO3FFQUNUOzhFQUVTO3lCQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWdCVEEsbUJBQW1CLENBWWxDO1dBWmVBOztTQUFBQTtJQUFBQSxzQkFBZixvQkFBQSxTQUFrQyxLQVlsQztZQVhMQyxPQUNBQyxrQkFDQUMsNkJBQ0FDLHlCQUNBQyxVQUlBQyxlQUNBQyxLQUNBQyxnQkFFTUMsUUFHRUMsYUFFQUM7Ozs7b0JBakJSVixRQUR1QyxNQUN2Q0EsT0FDQUMsbUJBRnVDLE1BRXZDQSxrQkFDQUMsZUFIdUMsTUFHdkNBLDhCQUh1QyxNQUl2Q0MsUUFBQUEsMEVBSnVDLE1BS3ZDQyxVQUFBQSx3Q0FBVzt3QkFDVE8sYUFBYSxDQUFDO3dCQUNkQyxTQUFTLENBQUM7b0JBQ1oscUJBQ0FQLGdCQVR1QyxNQVN2Q0EsZUFDQUMsTUFWdUMsTUFVdkNBLEtBQ0FDLGlCQVh1QyxNQVd2Q0E7b0JBRU1DLFNBQVNLLElBQUFBLDhCQUFhLEVBQUNSLGlCQUFpQixBQUFDSCxDQUFBQSxnQkFBZ0JELGdCQUFlLEVBQUdPLE1BQU07eUJBQ25GLENBQUEsT0FBT1IsVUFBVSxRQUFPLEdBQXhCOzs7O29CQUVJUyxjQUFjSyxJQUFBQSxnQ0FBdUIsRUFBQ2Q7b0JBRXRDVTtvQkFDTkQsWUFBWU0sR0FBRzttQ0FBQyxvQkFBQSxTQUFPQzs7Z0NBQ3JCQyxPQUFPQyxJQUFJLENBQUNGLFlBQVlELEdBQUc7K0NBQUMsb0JBQUEsU0FBT0k7OzRDQUNqQ0YsT0FBT0csT0FBTyxDQUFDSixVQUFVLENBQUNHLEtBQUssRUFBRUosR0FBRzsyREFBQyxvQkFBQTtnRUFBUU0sVUFBVUM7OzZGQUFWRCxzQkFBVUM7d0RBQ3JELElBQUlDLHlCQUFjLENBQUNDLFFBQVEsQ0FBQ0gsV0FBdUI7NERBQ2pEWCxTQUFTZSxJQUFJLENBQUNDLElBQUFBLHlDQUFtQixFQUFDO2dFQUNoQ3pCLGtCQUFrQjBCLElBQUFBLHVCQUFjLEVBQUMxQjtnRUFDakNDLGNBQWN5QixJQUFBQSx1QkFBYyxFQUFDekI7Z0VBQzdCTSxRQUFTQTtnRUFDVEgsZUFBQUE7Z0VBQ0FGLFFBQUFBO2dFQUNBQyxVQUFBQTtnRUFDQUUsS0FBQUE7Z0VBQ0FhLE1BQUFBO2dFQUNBRyxLQUFBQTtnRUFDQUQsVUFBQUE7Z0VBQ0FkLGdCQUFBQTs0REFDRjt3REFDRjs7Ozs7Z0RBQ0Y7Ozs7Ozs7OztvQ0FDRjtvREFsQm1DWTs7Ozs7Ozs7d0JBbUJyQzt3Q0FwQnVCSDs7OztvQkFxQnZCOzt3QkFBTVksUUFBUUMsR0FBRyxDQUFDbkI7OztvQkFBbEI7b0JBQ0EsSUFBSVAsT0FBTzJCLE1BQU0sR0FBRyxHQUFHO3dCQUNyQixNQUFNLElBQUlDLG1CQUFVLENBQUM1QjtvQkFDdkI7Ozs7Ozs7O0lBRUo7V0E3Q3NCSiJ9