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
import { docHasTimestamps } from "../types";
export var getLatestCollectionVersion = function() {
    var _ref = _async_to_generator(function(param) {
        var payload, config, query, id, req, _config_versions, latestVersion, docs, ref, doc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = param.payload, config = param.config, query = param.query, id = param.id, req = param.req;
                    if (!((_config_versions = config.versions) === null || _config_versions === void 0 ? void 0 : _config_versions.drafts)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        payload.db.findVersions({
                            collection: config.slug,
                            where: {
                                parent: {
                                    equals: id
                                }
                            },
                            sort: "-updatedAt",
                            req: req
                        })
                    ];
                case 1:
                    docs = _state.sent().docs;
                    ref = _sliced_to_array(docs, 1), latestVersion = ref[0], ref;
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        payload.db.findOne(_object_spread_props(_object_spread({}, query), {
                            req: req
                        }))
                    ];
                case 3:
                    doc = _state.sent();
                    if (!latestVersion || docHasTimestamps(doc) && latestVersion.updatedAt < doc.updatedAt) {
                        return [
                            2,
                            doc
                        ];
                    }
                    return [
                        2,
                        _object_spread_props(_object_spread({}, latestVersion.version), {
                            id: id,
                            updatedAt: latestVersion.updatedAt,
                            createdAt: latestVersion.createdAt
                        })
                    ];
            }
        });
    });
    return function getLatestCollectionVersion(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9nZXRMYXRlc3RDb2xsZWN0aW9uVmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb2NIYXNUaW1lc3RhbXBzLCBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcsIFR5cGVXaXRoSUQgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVdpdGhWZXJzaW9uIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IEZpbmRPbmVBcmdzIH0gZnJvbSAnLi4vZGF0YWJhc2UvdHlwZXMnO1xuXG50eXBlIEFyZ3MgPSB7XG4gIHBheWxvYWQ6IFBheWxvYWQ7XG4gIHF1ZXJ5OiBGaW5kT25lQXJncztcbiAgaWQ6IHN0cmluZyB8IG51bWJlcjtcbiAgY29uZmlnOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnO1xuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxufTtcblxuZXhwb3J0IGNvbnN0IGdldExhdGVzdENvbGxlY3Rpb25WZXJzaW9uID0gYXN5bmMgPFQgZXh0ZW5kcyBUeXBlV2l0aElEID0gYW55Pih7XG4gIHBheWxvYWQsXG4gIGNvbmZpZyxcbiAgcXVlcnksXG4gIGlkLFxuICByZXEsXG59OiBBcmdzKTogUHJvbWlzZTxUPiA9PiB7XG4gIGxldCBsYXRlc3RWZXJzaW9uOiBUeXBlV2l0aFZlcnNpb248VD47XG5cbiAgaWYgKGNvbmZpZy52ZXJzaW9ucz8uZHJhZnRzKSB7XG4gICAgY29uc3QgeyBkb2NzIH0gPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRWZXJzaW9uczxUPih7XG4gICAgICBjb2xsZWN0aW9uOiBjb25maWcuc2x1ZyxcbiAgICAgIHdoZXJlOiB7IHBhcmVudDogeyBlcXVhbHM6IGlkIH0gfSxcbiAgICAgIHNvcnQ6ICctdXBkYXRlZEF0JyxcbiAgICAgIHJlcSxcbiAgICB9KTtcbiAgICBbbGF0ZXN0VmVyc2lvbl0gPSBkb2NzO1xuICB9XG5cbiAgY29uc3QgZG9jID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kT25lPFQ+KHsgLi4ucXVlcnksIHJlcSB9KTtcblxuICBpZiAoXG4gICAgIWxhdGVzdFZlcnNpb25cbiAgICB8fCAoZG9jSGFzVGltZXN0YW1wcyhkb2MpICYmIGxhdGVzdFZlcnNpb24udXBkYXRlZEF0IDwgZG9jLnVwZGF0ZWRBdClcbiAgKSB7XG4gICAgcmV0dXJuIGRvYztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4ubGF0ZXN0VmVyc2lvbi52ZXJzaW9uLFxuICAgIGlkLFxuICAgIHVwZGF0ZWRBdDogbGF0ZXN0VmVyc2lvbi51cGRhdGVkQXQsXG4gICAgY3JlYXRlZEF0OiBsYXRlc3RWZXJzaW9uLmNyZWF0ZWRBdCxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiZG9jSGFzVGltZXN0YW1wcyIsImdldExhdGVzdENvbGxlY3Rpb25WZXJzaW9uIiwicGF5bG9hZCIsImNvbmZpZyIsInF1ZXJ5IiwiaWQiLCJyZXEiLCJsYXRlc3RWZXJzaW9uIiwiZG9jcyIsImRvYyIsInZlcnNpb25zIiwiZHJhZnRzIiwiZGIiLCJmaW5kVmVyc2lvbnMiLCJjb2xsZWN0aW9uIiwic2x1ZyIsIndoZXJlIiwicGFyZW50IiwiZXF1YWxzIiwic29ydCIsImZpbmRPbmUiLCJ1cGRhdGVkQXQiLCJ2ZXJzaW9uIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxnQkFBZ0IsUUFBd0IsV0FBVztBQWM1RCxPQUFPLElBQU1DO2VBQTZCLG9CQUFBO1lBQ3hDQyxTQUNBQyxRQUNBQyxPQUNBQyxJQUNBQyxLQUlJSCxrQkFGQUksZUFHTUMsV0FTSkM7Ozs7b0JBbEJOUCxnQkFBQUEsU0FDQUMsZUFBQUEsUUFDQUMsY0FBQUEsT0FDQUMsV0FBQUEsSUFDQUMsWUFBQUE7MkJBSUlILG1CQUFBQSxPQUFPTyxRQUFRLGNBQWZQLHVDQUFBQSxpQkFBaUJRLE1BQU07Ozs7b0JBQ1I7O3dCQUFNVCxRQUFRVSxFQUFFLENBQUNDLFlBQVksQ0FBSTs0QkFDaERDLFlBQVlYLE9BQU9ZLElBQUk7NEJBQ3ZCQyxPQUFPO2dDQUFFQyxRQUFRO29DQUFFQyxRQUFRYjtnQ0FBRzs0QkFBRTs0QkFDaENjLE1BQU07NEJBQ05iLEtBQUFBO3dCQUNGOzs7b0JBTFFFLE9BQVMsY0FBVEE7MkNBTVVBLFVBQWpCRDs7O29CQUdTOzt3QkFBTUwsUUFBUVUsRUFBRSxDQUFDUSxPQUFPLENBQUksd0NBQUtoQjs0QkFBT0UsS0FBQUE7Ozs7b0JBQTlDRyxNQUFNO29CQUVaLElBQ0UsQ0FBQ0YsaUJBQ0dQLGlCQUFpQlMsUUFBUUYsY0FBY2MsU0FBUyxHQUFHWixJQUFJWSxTQUFTLEVBQ3BFO3dCQUNBOzs0QkFBT1o7O29CQUNUO29CQUVBOzt3QkFBTyx3Q0FDRkYsY0FBY2UsT0FBTzs0QkFDeEJqQixJQUFBQTs0QkFDQWdCLFdBQVdkLGNBQWNjLFNBQVM7NEJBQ2xDRSxXQUFXaEIsY0FBY2dCLFNBQVM7Ozs7O0lBRXRDO29CQWxDYXRCOzs7SUFrQ1gifQ==