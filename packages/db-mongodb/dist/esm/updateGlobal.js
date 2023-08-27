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
export var updateGlobal = function() {
    var _updateGlobal = _async_to_generator(function(param) {
        var slug, data, _param_req, req, Model, options, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    slug = param.slug, data = param.data, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.globals;
                    options = _object_spread_props(_object_spread({}, withSession(this, req.transactionID)), {
                        new: true,
                        lean: true
                    });
                    return [
                        4,
                        Model.findOneAndUpdate({
                            globalType: slug
                        }, data, options)
                    ];
                case 1:
                    result = _state.sent();
                    result = JSON.parse(JSON.stringify(result));
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
    function updateGlobal(_) {
        return _updateGlobal.apply(this, arguments);
    }
    return updateGlobal;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGRhdGVHbG9iYWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBVcGRhdGVHbG9iYWwgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCBzYW5pdGl6ZUludGVybmFsRmllbGRzIGZyb20gJy4vdXRpbGl0aWVzL3Nhbml0aXplSW50ZXJuYWxGaWVsZHMnO1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBNb25nb29zZUFkYXB0ZXIgfSBmcm9tICcuJztcbmltcG9ydCB7IHdpdGhTZXNzaW9uIH0gZnJvbSAnLi93aXRoU2Vzc2lvbic7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVHbG9iYWw6IFVwZGF0ZUdsb2JhbCA9IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUdsb2JhbChcbiAgdGhpczogTW9uZ29vc2VBZGFwdGVyLFxuICB7IHNsdWcsIGRhdGEsIHJlcSA9IHt9IGFzIFBheWxvYWRSZXF1ZXN0IH0sXG4pIHtcbiAgY29uc3QgTW9kZWwgPSB0aGlzLmdsb2JhbHM7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ud2l0aFNlc3Npb24odGhpcywgcmVxLnRyYW5zYWN0aW9uSUQpLFxuICAgIG5ldzogdHJ1ZSxcbiAgICBsZWFuOiB0cnVlLFxuICB9O1xuXG4gIGxldCByZXN1bHQ7XG4gIHJlc3VsdCA9IGF3YWl0IE1vZGVsLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgeyBnbG9iYWxUeXBlOiBzbHVnIH0sXG4gICAgZGF0YSxcbiAgICBvcHRpb25zLFxuICApO1xuXG4gIHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cbiAgLy8gY3VzdG9tIGlkIHR5cGUgcmVzZXRcbiAgcmVzdWx0LmlkID0gcmVzdWx0Ll9pZDtcbiAgcmVzdWx0ID0gc2FuaXRpemVJbnRlcm5hbEZpZWxkcyhyZXN1bHQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIl0sIm5hbWVzIjpbInNhbml0aXplSW50ZXJuYWxGaWVsZHMiLCJ3aXRoU2Vzc2lvbiIsInVwZGF0ZUdsb2JhbCIsInNsdWciLCJkYXRhIiwicmVxIiwiTW9kZWwiLCJvcHRpb25zIiwicmVzdWx0IiwiZ2xvYmFscyIsInRyYW5zYWN0aW9uSUQiLCJuZXciLCJsZWFuIiwiZmluZE9uZUFuZFVwZGF0ZSIsImdsb2JhbFR5cGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJpZCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSw0QkFBNEIscUNBQXFDO0FBR3hFLFNBQVNDLFdBQVcsUUFBUSxnQkFBZ0I7QUFFNUMsT0FBTyxJQUFNQztRQUE0Q0EsZ0JBQWYsb0JBQUEsU0FFeEMsS0FBMEM7WUFBeENDLE1BQU1DLGtCQUFNQyxLQUVSQyxPQUNBQyxTQU1GQzs7OztvQkFURkwsT0FBRixNQUFFQSxNQUFNQyxPQUFSLE1BQVFBLG1CQUFSLE1BQWNDLEtBQUFBLDhCQUFNLENBQUM7b0JBRWZDLFFBQVEsSUFBSSxDQUFDRyxPQUFPO29CQUNwQkYsVUFBVSx3Q0FDWE4sWUFBWSxJQUFJLEVBQUVJLElBQUlLLGFBQWE7d0JBQ3RDQyxLQUFLO3dCQUNMQyxNQUFNOztvQkFJQzs7d0JBQU1OLE1BQU1PLGdCQUFnQixDQUNuQzs0QkFBRUMsWUFBWVg7d0JBQUssR0FDbkJDLE1BQ0FHOzs7b0JBSEZDLFNBQVM7b0JBTVRBLFNBQVNPLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDVDtvQkFFbkMsdUJBQXVCO29CQUN2QkEsT0FBT1UsRUFBRSxHQUFHVixPQUFPVyxHQUFHO29CQUN0QlgsU0FBU1IsdUJBQXVCUTtvQkFFaEM7O3dCQUFPQTs7OztJQUNUO2FBekJ5RE4sYUFFdkQsQ0FBMEM7ZUFGYUE7O1dBQUFBO0lBeUJ2RCJ9