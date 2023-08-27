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
var _formatName = /*#__PURE__*/ _interop_require_default(require("../../../graphql/utilities/formatName"));
var _access = /*#__PURE__*/ _interop_require_default(require("../../operations/access"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
var formatConfigNames = function(results, configs) {
    var formattedResults = _object_spread({}, results);
    configs.forEach(function(param) {
        var slug = param.slug;
        var result = _object_spread({}, formattedResults[slug] || {});
        delete formattedResults[slug];
        formattedResults[(0, _formatName.default)(slug)] = result;
    });
    return formattedResults;
};
function accessResolver(payload) {
    function resolver(_, args, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, args, context) {
            var options, accessResults;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        options = {
                            req: context.req
                        };
                        return [
                            4,
                            (0, _access.default)(options)
                        ];
                    case 1:
                        accessResults = _state.sent();
                        return [
                            2,
                            _object_spread({}, accessResults, formatConfigNames(accessResults.collections, payload.config.collections), formatConfigNames(accessResults.globals, payload.config.globals))
                        ];
                }
            });
        });
        return _resolver.apply(this, arguments);
    }
    return resolver;
}
var _default = accessResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2FjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZm9ybWF0TmFtZSBmcm9tICcuLi8uLi8uLi9ncmFwaHFsL3V0aWxpdGllcy9mb3JtYXROYW1lJztcbmltcG9ydCBhY2Nlc3MgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9hY2Nlc3MnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnO1xuXG5jb25zdCBmb3JtYXRDb25maWdOYW1lcyA9IChyZXN1bHRzLCBjb25maWdzKSA9PiB7XG4gIGNvbnN0IGZvcm1hdHRlZFJlc3VsdHMgPSB7IC4uLnJlc3VsdHMgfTtcblxuICBjb25maWdzLmZvckVhY2goKHsgc2x1ZyB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0geyAuLi4oZm9ybWF0dGVkUmVzdWx0c1tzbHVnXSB8fCB7fSkgfTtcbiAgICBkZWxldGUgZm9ybWF0dGVkUmVzdWx0c1tzbHVnXTtcbiAgICBmb3JtYXR0ZWRSZXN1bHRzW2Zvcm1hdE5hbWUoc2x1ZyldID0gcmVzdWx0O1xuICB9KTtcblxuICByZXR1cm4gZm9ybWF0dGVkUmVzdWx0cztcbn07XG5cbmZ1bmN0aW9uIGFjY2Vzc1Jlc29sdmVyKHBheWxvYWQ6IFBheWxvYWQpIHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByZXE6IGNvbnRleHQucmVxLFxuICAgIH07XG5cbiAgICBjb25zdCBhY2Nlc3NSZXN1bHRzID0gYXdhaXQgYWNjZXNzKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjY2Vzc1Jlc3VsdHMsXG4gICAgICAuLi5mb3JtYXRDb25maWdOYW1lcyhhY2Nlc3NSZXN1bHRzLmNvbGxlY3Rpb25zLCBwYXlsb2FkLmNvbmZpZy5jb2xsZWN0aW9ucyksXG4gICAgICAuLi5mb3JtYXRDb25maWdOYW1lcyhhY2Nlc3NSZXN1bHRzLmdsb2JhbHMsIHBheWxvYWQuY29uZmlnLmdsb2JhbHMpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY2Vzc1Jlc29sdmVyO1xuIl0sIm5hbWVzIjpbImZvcm1hdENvbmZpZ05hbWVzIiwicmVzdWx0cyIsImNvbmZpZ3MiLCJmb3JtYXR0ZWRSZXN1bHRzIiwiZm9yRWFjaCIsInNsdWciLCJyZXN1bHQiLCJmb3JtYXROYW1lIiwiYWNjZXNzUmVzb2x2ZXIiLCJwYXlsb2FkIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwiYWNjZXNzUmVzdWx0cyIsInJlcSIsImFjY2VzcyIsImNvbGxlY3Rpb25zIiwiY29uZmlnIiwiZ2xvYmFscyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFrQ0E7OztlQUFBOzs7aUVBbEN1Qjs2REFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkIsSUFBTUEsb0JBQW9CLFNBQUNDLFNBQVNDO0lBQ2xDLElBQU1DLG1CQUFtQixtQkFBS0Y7SUFFOUJDLFFBQVFFLE9BQU8sQ0FBQztZQUFHQyxhQUFBQTtRQUNqQixJQUFNQyxTQUFTLG1CQUFNSCxnQkFBZ0IsQ0FBQ0UsS0FBSyxJQUFJLENBQUM7UUFDaEQsT0FBT0YsZ0JBQWdCLENBQUNFLEtBQUs7UUFDN0JGLGdCQUFnQixDQUFDSSxJQUFBQSxtQkFBVSxFQUFDRixNQUFNLEdBQUdDO0lBQ3ZDO0lBRUEsT0FBT0g7QUFDVDtBQUVBLFNBQVNLLGVBQWVDLE9BQWdCO2FBQ3ZCQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztlQUF6Qkg7O2FBQUFBO1FBQUFBLFlBQWYsb0JBQUEsU0FBd0JDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2dCQUNoQ0MsU0FJQUM7Ozs7d0JBSkFELFVBQVU7NEJBQ2RFLEtBQUtILFFBQVFHLEdBQUc7d0JBQ2xCO3dCQUVzQjs7NEJBQU1DLElBQUFBLGVBQU0sRUFBQ0g7Ozt3QkFBN0JDLGdCQUFnQjt3QkFFdEI7OzRCQUFPLG1CQUNGQSxlQUNBZixrQkFBa0JlLGNBQWNHLFdBQVcsRUFBRVQsUUFBUVUsTUFBTSxDQUFDRCxXQUFXLEdBQ3ZFbEIsa0JBQWtCZSxjQUFjSyxPQUFPLEVBQUVYLFFBQVFVLE1BQU0sQ0FBQ0MsT0FBTzs7OztRQUV0RTtlQVplVjs7SUFjZixPQUFPQTtBQUNUO0lBRUEsV0FBZUYifQ==