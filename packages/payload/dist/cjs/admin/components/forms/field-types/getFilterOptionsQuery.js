"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getFilterOptionsQuery", {
    enumerable: true,
    get: function() {
        return getFilterOptionsQuery;
    }
});
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
var getFilterOptionsQuery = function() {
    var _ref = _async_to_generator(function(filterOptions, options) {
        var relationTo, relations, query;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    relationTo = options.relationTo;
                    relations = Array.isArray(relationTo) ? relationTo : [
                        relationTo
                    ];
                    query = {};
                    if (!(typeof filterOptions !== "undefined")) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        Promise.all(relations.map(function() {
                            var _ref = _async_to_generator(function(relation) {
                                var _tmp;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!(typeof filterOptions === "function")) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                filterOptions(_object_spread_props(_object_spread({}, options), {
                                                    relationTo: relation
                                                }))
                                            ];
                                        case 1:
                                            _tmp = _state.sent();
                                            return [
                                                3,
                                                3
                                            ];
                                        case 2:
                                            _tmp = filterOptions;
                                            _state.label = 3;
                                        case 3:
                                            query[relation] = _tmp;
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(relation) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        query
                    ];
            }
        });
    });
    return function getFilterOptionsQuery(filterOptions, options) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL2dldEZpbHRlck9wdGlvbnNRdWVyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaGVyZSB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEZpbHRlck9wdGlvbnMsIEZpbHRlck9wdGlvbnNQcm9wcyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVyT3B0aW9uc1F1ZXJ5ID0gYXN5bmMgKGZpbHRlck9wdGlvbnM6IEZpbHRlck9wdGlvbnMsIG9wdGlvbnM6IE9taXQ8RmlsdGVyT3B0aW9uc1Byb3BzLCAncmVsYXRpb25Ubyc+ICYgeyByZWxhdGlvblRvOiBzdHJpbmcgfCBzdHJpbmdbXSB9KTogUHJvbWlzZTx7W2NvbGxlY3Rpb246IHN0cmluZ106IFdoZXJlIH0+ID0+IHtcbiAgY29uc3QgeyByZWxhdGlvblRvIH0gPSBvcHRpb25zO1xuICBjb25zdCByZWxhdGlvbnMgPSBBcnJheS5pc0FycmF5KHJlbGF0aW9uVG8pID8gcmVsYXRpb25UbyA6IFtyZWxhdGlvblRvXTtcbiAgY29uc3QgcXVlcnkgPSB7fTtcbiAgaWYgKHR5cGVvZiBmaWx0ZXJPcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKHJlbGF0aW9ucy5tYXAoYXN5bmMgKHJlbGF0aW9uKSA9PiB7XG4gICAgICBxdWVyeVtyZWxhdGlvbl0gPSB0eXBlb2YgZmlsdGVyT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IGF3YWl0IGZpbHRlck9wdGlvbnMoeyAuLi5vcHRpb25zLCByZWxhdGlvblRvOiByZWxhdGlvbiB9KSA6IGZpbHRlck9wdGlvbnM7XG4gICAgfSkpO1xuICB9XG4gIHJldHVybiBxdWVyeTtcbn07XG4iXSwibmFtZXMiOlsiZ2V0RmlsdGVyT3B0aW9uc1F1ZXJ5IiwiZmlsdGVyT3B0aW9ucyIsIm9wdGlvbnMiLCJyZWxhdGlvblRvIiwicmVsYXRpb25zIiwicXVlcnkiLCJBcnJheSIsImlzQXJyYXkiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwicmVsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBR2FBOzs7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBTUE7ZUFBd0Isb0JBQUEsU0FBT0MsZUFBOEJDO1lBQ2hFQyxZQUNGQyxXQUNBQzs7OztvQkFGRUYsYUFBZUQsUUFBZkM7b0JBQ0ZDLFlBQVlFLE1BQU1DLE9BQU8sQ0FBQ0osY0FBY0E7d0JBQWNBOztvQkFDdERFLFFBQVEsQ0FBQzt5QkFDWCxDQUFBLE9BQU9KLGtCQUFrQixXQUFVLEdBQW5DOzs7O29CQUNGOzt3QkFBTU8sUUFBUUMsR0FBRyxDQUFDTCxVQUFVTSxHQUFHO3VDQUFDLG9CQUFBLFNBQU9DOzs7OztpREFDbkIsQ0FBQSxPQUFPVixrQkFBa0IsVUFBUyxHQUFsQzs7Ozs0Q0FBc0M7O2dEQUFNQSxjQUFjLHdDQUFLQztvREFBU0MsWUFBWVE7Ozs7bURBQTlDOzs7Ozs7bURBQTREVjs7OzRDQUFwSEksS0FBSyxDQUFDTSxTQUFTOzs7Ozs7NEJBQ2pCOzRDQUZ1Q0E7Ozs7OztvQkFBdkM7OztvQkFJRjs7d0JBQU9OOzs7O0lBQ1Q7b0JBVmFMLHNCQUErQkMsZUFBOEJDIn0=