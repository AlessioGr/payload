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
import { combineQueries } from "payload/database";
import sanitizeInternalFields from "./utilities/sanitizeInternalFields";
import { withSession } from "./withSession";
export var findGlobal = function() {
    var _findGlobal = _async_to_generator(function(param) {
        var slug, locale, where, _param_req, req, Model, options, query, doc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    slug = param.slug, locale = param.locale, where = param.where, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.globals;
                    options = _object_spread_props(_object_spread({}, withSession(this, req.transactionID)), {
                        lean: true
                    });
                    return [
                        4,
                        Model.buildQuery({
                            where: combineQueries({
                                globalType: {
                                    equals: slug
                                }
                            }, where),
                            payload: this.payload,
                            locale: locale,
                            globalSlug: slug
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
                    if (doc._id) {
                        doc.id = doc._id;
                        delete doc._id;
                    }
                    doc = JSON.parse(JSON.stringify(doc));
                    doc = sanitizeInternalFields(doc);
                    return [
                        2,
                        doc
                    ];
            }
        });
    });
    function findGlobal(_) {
        return _findGlobal.apply(this, arguments);
    }
    return findGlobal;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maW5kR2xvYmFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVRdWVyaWVzIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7IEZpbmRHbG9iYWwgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyBmcm9tICcuL3V0aWxpdGllcy9zYW5pdGl6ZUludGVybmFsRmllbGRzJztcbmltcG9ydCB0eXBlIHsgTW9uZ29vc2VBZGFwdGVyIH0gZnJvbSAnLic7XG5pbXBvcnQgeyB3aXRoU2Vzc2lvbiB9IGZyb20gJy4vd2l0aFNlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgZmluZEdsb2JhbDogRmluZEdsb2JhbCA9IGFzeW5jIGZ1bmN0aW9uIGZpbmRHbG9iYWwoXG4gIHRoaXM6IE1vbmdvb3NlQWRhcHRlcixcbiAgeyBzbHVnLCBsb2NhbGUsIHdoZXJlLCByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCB9LFxuKSB7XG4gIGNvbnN0IE1vZGVsID0gdGhpcy5nbG9iYWxzO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIC4uLndpdGhTZXNzaW9uKHRoaXMsIHJlcS50cmFuc2FjdGlvbklEKSxcbiAgICBsZWFuOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgTW9kZWwuYnVpbGRRdWVyeSh7XG4gICAgd2hlcmU6IGNvbWJpbmVRdWVyaWVzKHsgZ2xvYmFsVHlwZTogeyBlcXVhbHM6IHNsdWcgfSB9LCB3aGVyZSksXG4gICAgcGF5bG9hZDogdGhpcy5wYXlsb2FkLFxuICAgIGxvY2FsZSxcbiAgICBnbG9iYWxTbHVnOiBzbHVnLFxuICB9KTtcblxuICBsZXQgZG9jID0gKGF3YWl0IE1vZGVsLmZpbmRPbmUocXVlcnksIHt9LCBvcHRpb25zKSkgYXMgYW55O1xuXG4gIGlmICghZG9jKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGRvYy5faWQpIHtcbiAgICBkb2MuaWQgPSBkb2MuX2lkO1xuICAgIGRlbGV0ZSBkb2MuX2lkO1xuICB9XG5cbiAgZG9jID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkb2MpKTtcbiAgZG9jID0gc2FuaXRpemVJbnRlcm5hbEZpZWxkcyhkb2MpO1xuXG4gIHJldHVybiBkb2M7XG59O1xuIl0sIm5hbWVzIjpbImNvbWJpbmVRdWVyaWVzIiwic2FuaXRpemVJbnRlcm5hbEZpZWxkcyIsIndpdGhTZXNzaW9uIiwiZmluZEdsb2JhbCIsInNsdWciLCJsb2NhbGUiLCJ3aGVyZSIsInJlcSIsIk1vZGVsIiwib3B0aW9ucyIsInF1ZXJ5IiwiZG9jIiwiZ2xvYmFscyIsInRyYW5zYWN0aW9uSUQiLCJsZWFuIiwiYnVpbGRRdWVyeSIsImdsb2JhbFR5cGUiLCJlcXVhbHMiLCJwYXlsb2FkIiwiZ2xvYmFsU2x1ZyIsImZpbmRPbmUiLCJfaWQiLCJpZCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxjQUFjLFFBQVEsbUJBQW1CO0FBR2xELE9BQU9DLDRCQUE0QixxQ0FBcUM7QUFFeEUsU0FBU0MsV0FBVyxRQUFRLGdCQUFnQjtBQUU1QyxPQUFPLElBQU1DO1FBQXdDQSxjQUFmLG9CQUFBLFNBRXBDLEtBQW1EO1lBQWpEQyxNQUFNQyxRQUFRQyxtQkFBT0MsS0FFakJDLE9BQ0FDLFNBS0FDLE9BT0ZDOzs7O29CQWZGUCxPQUFGLE1BQUVBLE1BQU1DLFNBQVIsTUFBUUEsUUFBUUMsUUFBaEIsTUFBZ0JBLG9CQUFoQixNQUF1QkMsS0FBQUEsOEJBQU0sQ0FBQztvQkFFeEJDLFFBQVEsSUFBSSxDQUFDSSxPQUFPO29CQUNwQkgsVUFBVSx3Q0FDWFAsWUFBWSxJQUFJLEVBQUVLLElBQUlNLGFBQWE7d0JBQ3RDQyxNQUFNOztvQkFHTTs7d0JBQU1OLE1BQU1PLFVBQVUsQ0FBQzs0QkFDbkNULE9BQU9OLGVBQWU7Z0NBQUVnQixZQUFZO29DQUFFQyxRQUFRYjtnQ0FBSzs0QkFBRSxHQUFHRTs0QkFDeERZLFNBQVMsSUFBSSxDQUFDQSxPQUFPOzRCQUNyQmIsUUFBQUE7NEJBQ0FjLFlBQVlmO3dCQUNkOzs7b0JBTE1NLFFBQVE7b0JBT0g7O3dCQUFNRixNQUFNWSxPQUFPLENBQUNWLE9BQU8sQ0FBQyxHQUFHRDs7O29CQUF0Q0UsTUFBTztvQkFFWCxJQUFJLENBQUNBLEtBQUs7d0JBQ1I7OzRCQUFPOztvQkFDVDtvQkFDQSxJQUFJQSxJQUFJVSxHQUFHLEVBQUU7d0JBQ1hWLElBQUlXLEVBQUUsR0FBR1gsSUFBSVUsR0FBRzt3QkFDaEIsT0FBT1YsSUFBSVUsR0FBRztvQkFDaEI7b0JBRUFWLE1BQU1ZLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDZDtvQkFDaENBLE1BQU1WLHVCQUF1QlU7b0JBRTdCOzt3QkFBT0E7Ozs7SUFDVDthQS9CcURSLFdBRW5ELENBQW1EO2VBRkFBOztXQUFBQTtJQStCbkQifQ==