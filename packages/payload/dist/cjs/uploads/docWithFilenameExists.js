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
var docWithFilenameExists = function() {
    var _ref = _async_to_generator(function(payload, collectionSlug, path, filename) {
        var doc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        payload.db.findOne({
                            collection: collectionSlug,
                            where: {
                                filename: {
                                    equals: filename
                                }
                            }
                        })
                    ];
                case 1:
                    doc = _state.sent();
                    if (doc) return [
                        2,
                        true
                    ];
                    return [
                        2,
                        false
                    ];
            }
        });
    });
    return function docWithFilenameExists(payload, collectionSlug, path, filename) {
        return _ref.apply(this, arguments);
    };
}();
var _default = docWithFilenameExists;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2RvY1dpdGhGaWxlbmFtZUV4aXN0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4nO1xuXG5jb25zdCBkb2NXaXRoRmlsZW5hbWVFeGlzdHMgPSBhc3luYyAocGF5bG9hZDogUGF5bG9hZCwgY29sbGVjdGlvblNsdWc6IHN0cmluZywgcGF0aDogc3RyaW5nLCBmaWxlbmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGNvbnN0IGRvYyA9IGF3YWl0IHBheWxvYWQuZGIuZmluZE9uZSh7XG4gICAgY29sbGVjdGlvbjogY29sbGVjdGlvblNsdWcsXG4gICAgd2hlcmU6IHtcbiAgICAgIGZpbGVuYW1lOiB7XG4gICAgICAgIGVxdWFsczogZmlsZW5hbWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICBpZiAoZG9jKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb2NXaXRoRmlsZW5hbWVFeGlzdHM7XG4iXSwibmFtZXMiOlsiZG9jV2l0aEZpbGVuYW1lRXhpc3RzIiwicGF5bG9hZCIsImNvbGxlY3Rpb25TbHVnIiwicGF0aCIsImZpbGVuYW1lIiwiZG9jIiwiZGIiLCJmaW5kT25lIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiZXF1YWxzIl0sIm1hcHBpbmdzIjoiOzs7OytCQWdCQTs7O2VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkQSxJQUFNQTtlQUF3QixvQkFBQSxTQUFPQyxTQUFrQkMsZ0JBQXdCQyxNQUFjQztZQUNyRkM7Ozs7b0JBQU07O3dCQUFNSixRQUFRSyxFQUFFLENBQUNDLE9BQU8sQ0FBQzs0QkFDbkNDLFlBQVlOOzRCQUNaTyxPQUFPO2dDQUNMTCxVQUFVO29DQUNSTSxRQUFRTjtnQ0FDVjs0QkFDRjt3QkFDRjs7O29CQVBNQyxNQUFNO29CQVFaLElBQUlBLEtBQUs7O3dCQUFPOztvQkFFaEI7O3dCQUFPOzs7O0lBQ1Q7b0JBWk1MLHNCQUErQkMsU0FBa0JDLGdCQUF3QkMsTUFBY0M7Ozs7SUFjN0YsV0FBZUoifQ==