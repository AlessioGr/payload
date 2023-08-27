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
import sanitizeInternalFields from "./utilities/sanitizeInternalFields";
import { withSession } from "./withSession";
export var findOne = function() {
    var _findOne = _async_to_generator(function(param) {
        var collection, where, locale, _param_req, req, Model, options, query, doc, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, where = param.where, locale = param.locale, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.collections[collection];
                    options = _object_spread_props(_object_spread({}, withSession(this, req.transactionID)), {
                        lean: true
                    });
                    return [
                        4,
                        Model.buildQuery({
                            payload: this.payload,
                            locale: locale,
                            where: where
                        })
                    ];
                case 1:
                    query = _state.sent();
                    return [
                        4,
                        Model.findOne(query, {}, options)
                    ];
                case 2:
                    doc = _state.sent();
                    if (!doc) {
                        return [
                            2,
                            null
                        ];
                    }
                    result = JSON.parse(JSON.stringify(doc));
                    // custom id type reset
                    result.id = result._id;
                    result = sanitizeInternalFields(result);
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    function findOne(_) {
        return _findOne.apply(this, arguments);
    }
    return findOne;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maW5kT25lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTW9uZ29vc2VRdWVyeU9wdGlvbnMgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgdHlwZSB7IEZpbmRPbmUgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCB0eXBlIHsgRG9jdW1lbnQgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyBmcm9tICcuL3V0aWxpdGllcy9zYW5pdGl6ZUludGVybmFsRmllbGRzJztcbmltcG9ydCB0eXBlIHsgTW9uZ29vc2VBZGFwdGVyIH0gZnJvbSAnLic7XG5pbXBvcnQgeyB3aXRoU2Vzc2lvbiB9IGZyb20gJy4vd2l0aFNlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgZmluZE9uZTogRmluZE9uZSA9IGFzeW5jIGZ1bmN0aW9uIGZpbmRPbmUoXG4gIHRoaXM6IE1vbmdvb3NlQWRhcHRlcixcbiAgeyBjb2xsZWN0aW9uLCB3aGVyZSwgbG9jYWxlLCByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCB9LFxuKSB7XG4gIGNvbnN0IE1vZGVsID0gdGhpcy5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uXTtcbiAgY29uc3Qgb3B0aW9uczogTW9uZ29vc2VRdWVyeU9wdGlvbnMgPSB7XG4gICAgLi4ud2l0aFNlc3Npb24odGhpcywgcmVxLnRyYW5zYWN0aW9uSUQpLFxuICAgIGxlYW46IHRydWUsXG4gIH07XG5cbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBNb2RlbC5idWlsZFF1ZXJ5KHtcbiAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQsXG4gICAgbG9jYWxlLFxuICAgIHdoZXJlLFxuICB9KTtcblxuICBjb25zdCBkb2MgPSBhd2FpdCBNb2RlbC5maW5kT25lKHF1ZXJ5LCB7fSwgb3B0aW9ucyk7XG5cbiAgaWYgKCFkb2MpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCByZXN1bHQ6IERvY3VtZW50ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkb2MpKTtcblxuICAvLyBjdXN0b20gaWQgdHlwZSByZXNldFxuICByZXN1bHQuaWQgPSByZXN1bHQuX2lkO1xuICByZXN1bHQgPSBzYW5pdGl6ZUludGVybmFsRmllbGRzKHJlc3VsdCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXSwibmFtZXMiOlsic2FuaXRpemVJbnRlcm5hbEZpZWxkcyIsIndpdGhTZXNzaW9uIiwiZmluZE9uZSIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImxvY2FsZSIsInJlcSIsIk1vZGVsIiwib3B0aW9ucyIsInF1ZXJ5IiwiZG9jIiwicmVzdWx0IiwiY29sbGVjdGlvbnMiLCJ0cmFuc2FjdGlvbklEIiwibGVhbiIsImJ1aWxkUXVlcnkiLCJwYXlsb2FkIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaWQiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsT0FBT0EsNEJBQTRCLHFDQUFxQztBQUV4RSxTQUFTQyxXQUFXLFFBQVEsZ0JBQWdCO0FBRTVDLE9BQU8sSUFBTUM7UUFBa0NBLFdBQWYsb0JBQUEsU0FFOUIsS0FBeUQ7WUFBdkRDLFlBQVlDLE9BQU9DLG9CQUFRQyxLQUV2QkMsT0FDQUMsU0FLQUMsT0FNQUMsS0FNRkM7Ozs7b0JBcEJGUixhQUFGLE1BQUVBLFlBQVlDLFFBQWQsTUFBY0EsT0FBT0MsU0FBckIsTUFBcUJBLHFCQUFyQixNQUE2QkMsS0FBQUEsOEJBQU0sQ0FBQztvQkFFOUJDLFFBQVEsSUFBSSxDQUFDSyxXQUFXLENBQUNULFdBQVc7b0JBQ3BDSyxVQUFnQyx3Q0FDakNQLFlBQVksSUFBSSxFQUFFSyxJQUFJTyxhQUFhO3dCQUN0Q0MsTUFBTTs7b0JBR007O3dCQUFNUCxNQUFNUSxVQUFVLENBQUM7NEJBQ25DQyxTQUFTLElBQUksQ0FBQ0EsT0FBTzs0QkFDckJYLFFBQUFBOzRCQUNBRCxPQUFBQTt3QkFDRjs7O29CQUpNSyxRQUFRO29CQU1GOzt3QkFBTUYsTUFBTUwsT0FBTyxDQUFDTyxPQUFPLENBQUMsR0FBR0Q7OztvQkFBckNFLE1BQU07b0JBRVosSUFBSSxDQUFDQSxLQUFLO3dCQUNSOzs0QkFBTzs7b0JBQ1Q7b0JBRUlDLFNBQW1CTSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLFNBQVMsQ0FBQ1Q7b0JBRWpELHVCQUF1QjtvQkFDdkJDLE9BQU9TLEVBQUUsR0FBR1QsT0FBT1UsR0FBRztvQkFDdEJWLFNBQVNYLHVCQUF1Qlc7b0JBRWhDOzt3QkFBT0E7Ozs7SUFDVDthQTdCK0NULFFBRTdDLENBQXlEO2VBRlpBOztXQUFBQTtJQTZCN0MifQ==