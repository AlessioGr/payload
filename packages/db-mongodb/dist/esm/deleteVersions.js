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
import { withSession } from "./withSession";
export var deleteVersions = function() {
    var _deleteVersions = _async_to_generator(function(param) {
        var collection, where, locale, _param_req, req, VersionsModel, options, query;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, where = param.where, locale = param.locale, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    VersionsModel = this.versions[collection];
                    options = _object_spread_props(_object_spread({}, withSession(this, req.transactionID)), {
                        lean: true
                    });
                    return [
                        4,
                        VersionsModel.buildQuery({
                            payload: this.payload,
                            locale: locale,
                            where: where
                        })
                    ];
                case 1:
                    query = _state.sent();
                    return [
                        4,
                        VersionsModel.deleteMany(query, options)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    function deleteVersions(_) {
        return _deleteVersions.apply(this, arguments);
    }
    return deleteVersions;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGVWZXJzaW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxldGVWZXJzaW9ucyB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgTW9uZ29vc2VBZGFwdGVyIH0gZnJvbSAnLic7XG5pbXBvcnQgeyB3aXRoU2Vzc2lvbiB9IGZyb20gJy4vd2l0aFNlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVmVyc2lvbnM6IERlbGV0ZVZlcnNpb25zID0gYXN5bmMgZnVuY3Rpb24gZGVsZXRlVmVyc2lvbnModGhpczogTW9uZ29vc2VBZGFwdGVyLFxuICB7IGNvbGxlY3Rpb24sIHdoZXJlLCBsb2NhbGUsIHJlcSA9IHt9IGFzIFBheWxvYWRSZXF1ZXN0IH0pIHtcbiAgY29uc3QgVmVyc2lvbnNNb2RlbCA9IHRoaXMudmVyc2lvbnNbY29sbGVjdGlvbl07XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ud2l0aFNlc3Npb24odGhpcywgcmVxLnRyYW5zYWN0aW9uSUQpLFxuICAgIGxlYW46IHRydWUsXG4gIH07XG5cbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBWZXJzaW9uc01vZGVsLmJ1aWxkUXVlcnkoe1xuICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCxcbiAgICBsb2NhbGUsXG4gICAgd2hlcmUsXG4gIH0pO1xuXG4gIGF3YWl0IFZlcnNpb25zTW9kZWwuZGVsZXRlTWFueShxdWVyeSwgb3B0aW9ucyk7XG59O1xuIl0sIm5hbWVzIjpbIndpdGhTZXNzaW9uIiwiZGVsZXRlVmVyc2lvbnMiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJsb2NhbGUiLCJyZXEiLCJWZXJzaW9uc01vZGVsIiwib3B0aW9ucyIsInF1ZXJ5IiwidmVyc2lvbnMiLCJ0cmFuc2FjdGlvbklEIiwibGVhbiIsImJ1aWxkUXVlcnkiLCJwYXlsb2FkIiwiZGVsZXRlTWFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxTQUFTQSxXQUFXLFFBQVEsZ0JBQWdCO0FBRTVDLE9BQU8sSUFBTUM7UUFBZ0RBLGtCQUFmLG9CQUFBLFNBQzVDLEtBQXlEO1lBQXZEQyxZQUFZQyxPQUFPQyxvQkFBUUMsS0FDdkJDLGVBQ0FDLFNBS0FDOzs7O29CQVBKTixhQUFGLE1BQUVBLFlBQVlDLFFBQWQsTUFBY0EsT0FBT0MsU0FBckIsTUFBcUJBLHFCQUFyQixNQUE2QkMsS0FBQUEsOEJBQU0sQ0FBQztvQkFDOUJDLGdCQUFnQixJQUFJLENBQUNHLFFBQVEsQ0FBQ1AsV0FBVztvQkFDekNLLFVBQVUsd0NBQ1hQLFlBQVksSUFBSSxFQUFFSyxJQUFJSyxhQUFhO3dCQUN0Q0MsTUFBTTs7b0JBR007O3dCQUFNTCxjQUFjTSxVQUFVLENBQUM7NEJBQzNDQyxTQUFTLElBQUksQ0FBQ0EsT0FBTzs0QkFDckJULFFBQUFBOzRCQUNBRCxPQUFBQTt3QkFDRjs7O29CQUpNSyxRQUFRO29CQU1kOzt3QkFBTUYsY0FBY1EsVUFBVSxDQUFDTixPQUFPRDs7O29CQUF0Qzs7Ozs7O0lBQ0Y7YUFmNkROLGVBQzNELENBQXlEO2VBREVBOztXQUFBQTtJQWUzRCJ9