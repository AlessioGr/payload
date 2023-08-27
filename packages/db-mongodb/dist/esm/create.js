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
import { withSession } from "./withSession";
export var create = function() {
    var _create = _async_to_generator(function(param) {
        var collection, data, _param_req, req, Model, options, _ref, doc, result, verificationToken;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, data = param.data, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.collections[collection];
                    options = withSession(this, req.transactionID);
                    return [
                        4,
                        Model.create([
                            data
                        ], options)
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), doc = _ref[0];
                    result = JSON.parse(JSON.stringify(doc));
                    verificationToken = doc._verificationToken;
                    // custom id type reset
                    result.id = result._id;
                    if (verificationToken) {
                        result._verificationToken = verificationToken;
                    }
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    function create(_) {
        return _create.apply(this, arguments);
    }
    return create;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmVhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlYXRlIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7IERvY3VtZW50IH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBNb25nb29zZUFkYXB0ZXIgfSBmcm9tICcuJztcbmltcG9ydCB7IHdpdGhTZXNzaW9uIH0gZnJvbSAnLi93aXRoU2Vzc2lvbic7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGU6IENyZWF0ZSA9IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZShcbiAgdGhpczogTW9uZ29vc2VBZGFwdGVyLFxuICB7IGNvbGxlY3Rpb24sIGRhdGEsIHJlcSA9IHt9IGFzIFBheWxvYWRSZXF1ZXN0IH0sXG4pIHtcbiAgY29uc3QgTW9kZWwgPSB0aGlzLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25dO1xuICBjb25zdCBvcHRpb25zID0gd2l0aFNlc3Npb24odGhpcywgcmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gIGNvbnN0IFtkb2NdID0gYXdhaXQgTW9kZWwuY3JlYXRlKFtkYXRhXSwgb3B0aW9ucyk7XG5cbiAgLy8gZG9jLnRvSlNPTiBkb2VzIG5vdCBkbyBzdHVmZiBsaWtlIGNvbnZlcnRpbmcgT2JqZWN0SWRzIHRvIHN0cmluZywgb3IgZGF0ZSBzdHJpbmdzIHRvIGRhdGUgb2JqZWN0cy4gVGhhdCdzIHdoeSB3ZSB1c2UgSlNPTi5wYXJzZS9zdHJpbmdpZnkgaGVyZVxuICBjb25zdCByZXN1bHQ6IERvY3VtZW50ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkb2MpKTtcbiAgY29uc3QgdmVyaWZpY2F0aW9uVG9rZW4gPSBkb2MuX3ZlcmlmaWNhdGlvblRva2VuO1xuXG4gIC8vIGN1c3RvbSBpZCB0eXBlIHJlc2V0XG4gIHJlc3VsdC5pZCA9IHJlc3VsdC5faWQ7XG4gIGlmICh2ZXJpZmljYXRpb25Ub2tlbikge1xuICAgIHJlc3VsdC5fdmVyaWZpY2F0aW9uVG9rZW4gPSB2ZXJpZmljYXRpb25Ub2tlbjtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIl0sIm5hbWVzIjpbIndpdGhTZXNzaW9uIiwiY3JlYXRlIiwiY29sbGVjdGlvbiIsImRhdGEiLCJyZXEiLCJNb2RlbCIsIm9wdGlvbnMiLCJkb2MiLCJyZXN1bHQiLCJ2ZXJpZmljYXRpb25Ub2tlbiIsImNvbGxlY3Rpb25zIiwidHJhbnNhY3Rpb25JRCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIl92ZXJpZmljYXRpb25Ub2tlbiIsImlkIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFNBQVNBLFdBQVcsUUFBUSxnQkFBZ0I7QUFFNUMsT0FBTyxJQUFNQztRQUFnQ0EsVUFBZixvQkFBQSxTQUU1QixLQUFnRDtZQUE5Q0MsWUFBWUMsa0JBQU1DLEtBRWRDLE9BQ0FDLFNBRVEsTUFBUEMsS0FHREMsUUFDQUM7Ozs7b0JBVEpQLGFBQUYsTUFBRUEsWUFBWUMsT0FBZCxNQUFjQSxtQkFBZCxNQUFvQkMsS0FBQUEsOEJBQU0sQ0FBQztvQkFFckJDLFFBQVEsSUFBSSxDQUFDSyxXQUFXLENBQUNSLFdBQVc7b0JBQ3BDSSxVQUFVTixZQUFZLElBQUksRUFBRUksSUFBSU8sYUFBYTtvQkFFckM7O3dCQUFNTixNQUFNSixNQUFNOzRCQUFFRTsyQkFBT0c7OztvQkFBM0I7d0JBQUE7O3dCQUFQQyxNQUFPO29CQUdSQyxTQUFtQkksS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNQO29CQUM3Q0Usb0JBQW9CRixJQUFJUSxrQkFBa0I7b0JBRWhELHVCQUF1QjtvQkFDdkJQLE9BQU9RLEVBQUUsR0FBR1IsT0FBT1MsR0FBRztvQkFDdEIsSUFBSVIsbUJBQW1CO3dCQUNyQkQsT0FBT08sa0JBQWtCLEdBQUdOO29CQUM5QjtvQkFFQTs7d0JBQU9EOzs7O0lBQ1Q7YUFwQjZDUCxPQUUzQyxDQUFnRDtlQUZMQTs7V0FBQUE7SUFvQjNDIn0=