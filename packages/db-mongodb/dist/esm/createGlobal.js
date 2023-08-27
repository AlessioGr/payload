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
import sanitizeInternalFields from "./utilities/sanitizeInternalFields";
import { withSession } from "./withSession";
export var createGlobal = function() {
    var _createGlobal = _async_to_generator(function(param) {
        var data, slug, _param_req, req, Model, global, options, _ref, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = param.data, slug = param.slug, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.globals;
                    global = _object_spread({
                        globalType: slug
                    }, data);
                    options = withSession(this, req.transactionID);
                    return [
                        4,
                        Model.create([
                            global
                        ], options)
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), result = _ref[0];
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
    function createGlobal(_) {
        return _createGlobal.apply(this, arguments);
    }
    return createGlobal;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmVhdGVHbG9iYWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCB7IENyZWF0ZUdsb2JhbCB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHNhbml0aXplSW50ZXJuYWxGaWVsZHMgZnJvbSAnLi91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcyc7XG5pbXBvcnQgeyB3aXRoU2Vzc2lvbiB9IGZyb20gJy4vd2l0aFNlc3Npb24nO1xuaW1wb3J0IHR5cGUgeyBNb25nb29zZUFkYXB0ZXIgfSBmcm9tICcuJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUdsb2JhbDogQ3JlYXRlR2xvYmFsID0gYXN5bmMgZnVuY3Rpb24gY3JlYXRlR2xvYmFsKFxuICB0aGlzOiBNb25nb29zZUFkYXB0ZXIsXG4gIHsgZGF0YSwgc2x1ZywgcmVxID0ge30gYXMgUGF5bG9hZFJlcXVlc3QgfSxcbikge1xuICBjb25zdCBNb2RlbCA9IHRoaXMuZ2xvYmFscztcbiAgY29uc3QgZ2xvYmFsID0ge1xuICAgIGdsb2JhbFR5cGU6IHNsdWcsXG4gICAgLi4uZGF0YSxcbiAgfTtcbiAgY29uc3Qgb3B0aW9ucyA9IHdpdGhTZXNzaW9uKHRoaXMsIHJlcS50cmFuc2FjdGlvbklEKTtcblxuICBsZXQgW3Jlc3VsdF0gPSAoYXdhaXQgTW9kZWwuY3JlYXRlKFtnbG9iYWxdLCBvcHRpb25zKSkgYXMgYW55O1xuXG4gIHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cbiAgLy8gY3VzdG9tIGlkIHR5cGUgcmVzZXRcbiAgcmVzdWx0LmlkID0gcmVzdWx0Ll9pZDtcbiAgcmVzdWx0ID0gc2FuaXRpemVJbnRlcm5hbEZpZWxkcyhyZXN1bHQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIl0sIm5hbWVzIjpbInNhbml0aXplSW50ZXJuYWxGaWVsZHMiLCJ3aXRoU2Vzc2lvbiIsImNyZWF0ZUdsb2JhbCIsImRhdGEiLCJzbHVnIiwicmVxIiwiTW9kZWwiLCJnbG9iYWwiLCJvcHRpb25zIiwicmVzdWx0IiwiZ2xvYmFscyIsImdsb2JhbFR5cGUiLCJ0cmFuc2FjdGlvbklEIiwiY3JlYXRlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiaWQiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU9BLDRCQUE0QixxQ0FBcUM7QUFDeEUsU0FBU0MsV0FBVyxRQUFRLGdCQUFnQjtBQUc1QyxPQUFPLElBQU1DO1FBQTRDQSxnQkFBZixvQkFBQSxTQUV4QyxLQUEwQztZQUF4Q0MsTUFBTUMsa0JBQU1DLEtBRVJDLE9BQ0FDLFFBSUFDLFNBRVUsTUFBWEM7Ozs7b0JBVEhOLE9BQUYsTUFBRUEsTUFBTUMsT0FBUixNQUFRQSxtQkFBUixNQUFjQyxLQUFBQSw4QkFBTSxDQUFDO29CQUVmQyxRQUFRLElBQUksQ0FBQ0ksT0FBTztvQkFDcEJILFNBQVM7d0JBQ2JJLFlBQVlQO3VCQUNURDtvQkFFQ0ssVUFBVVAsWUFBWSxJQUFJLEVBQUVJLElBQUlPLGFBQWE7b0JBRW5DOzt3QkFBTU4sTUFBTU8sTUFBTTs0QkFBRU47MkJBQVNDOzs7b0JBQTdCO3dCQUFBOzt3QkFBWEMsU0FBVztvQkFFaEJBLFNBQVNLLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDUDtvQkFFbkMsdUJBQXVCO29CQUN2QkEsT0FBT1EsRUFBRSxHQUFHUixPQUFPUyxHQUFHO29CQUN0QlQsU0FBU1QsdUJBQXVCUztvQkFFaEM7O3dCQUFPQTs7OztJQUNUO2FBcEJ5RFAsYUFFdkQsQ0FBMEM7ZUFGYUE7O1dBQUFBO0lBb0J2RCJ9