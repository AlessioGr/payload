"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createVersion", {
    enumerable: true,
    get: function() {
        return createVersion;
    }
});
var _withSession = require("./withSession");
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
var createVersion = function() {
    var _createVersion = _async_to_generator(function(param) {
        var collectionSlug, parent, versionData, autosave, createdAt, updatedAt, _param_req, req, VersionModel, options, _ref, doc, result, verificationToken;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collectionSlug = param.collectionSlug, parent = param.parent, versionData = param.versionData, autosave = param.autosave, createdAt = param.createdAt, updatedAt = param.updatedAt, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    VersionModel = this.versions[collectionSlug];
                    options = (0, _withSession.withSession)(this, req.transactionID);
                    return [
                        4,
                        VersionModel.create([
                            {
                                parent: parent,
                                version: versionData,
                                autosave: autosave,
                                createdAt: createdAt,
                                updatedAt: updatedAt
                            }
                        ], options, req)
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
    function createVersion(_) {
        return _createVersion.apply(this, arguments);
    }
    return createVersion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmVhdGVWZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ3JlYXRlVmVyc2lvbiB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgRG9jdW1lbnQgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgTW9uZ29vc2VBZGFwdGVyIH0gZnJvbSAnLic7XG5pbXBvcnQgeyB3aXRoU2Vzc2lvbiB9IGZyb20gJy4vd2l0aFNlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVmVyc2lvbjogQ3JlYXRlVmVyc2lvbiA9IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZlcnNpb24oXG4gIHRoaXM6IE1vbmdvb3NlQWRhcHRlcixcbiAge1xuICAgIGNvbGxlY3Rpb25TbHVnLFxuICAgIHBhcmVudCxcbiAgICB2ZXJzaW9uRGF0YSxcbiAgICBhdXRvc2F2ZSxcbiAgICBjcmVhdGVkQXQsXG4gICAgdXBkYXRlZEF0LFxuICAgIHJlcSA9IHt9IGFzIFBheWxvYWRSZXF1ZXN0LFxuICB9LFxuKSB7XG4gIGNvbnN0IFZlcnNpb25Nb2RlbCA9IHRoaXMudmVyc2lvbnNbY29sbGVjdGlvblNsdWddO1xuICBjb25zdCBvcHRpb25zID0gd2l0aFNlc3Npb24odGhpcywgcmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gIGNvbnN0IFtkb2NdID0gYXdhaXQgVmVyc2lvbk1vZGVsLmNyZWF0ZShcbiAgICBbXG4gICAgICB7XG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgdmVyc2lvbjogdmVyc2lvbkRhdGEsXG4gICAgICAgIGF1dG9zYXZlLFxuICAgICAgICBjcmVhdGVkQXQsXG4gICAgICAgIHVwZGF0ZWRBdCxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBvcHRpb25zLFxuICAgIHJlcSxcbiAgKTtcblxuICBjb25zdCByZXN1bHQ6IERvY3VtZW50ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkb2MpKTtcbiAgY29uc3QgdmVyaWZpY2F0aW9uVG9rZW4gPSBkb2MuX3ZlcmlmaWNhdGlvblRva2VuO1xuXG4gIC8vIGN1c3RvbSBpZCB0eXBlIHJlc2V0XG4gIHJlc3VsdC5pZCA9IHJlc3VsdC5faWQ7XG4gIGlmICh2ZXJpZmljYXRpb25Ub2tlbikge1xuICAgIHJlc3VsdC5fdmVyaWZpY2F0aW9uVG9rZW4gPSB2ZXJpZmljYXRpb25Ub2tlbjtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVWZXJzaW9uIiwiY29sbGVjdGlvblNsdWciLCJwYXJlbnQiLCJ2ZXJzaW9uRGF0YSIsImF1dG9zYXZlIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwicmVxIiwiVmVyc2lvbk1vZGVsIiwib3B0aW9ucyIsImRvYyIsInJlc3VsdCIsInZlcmlmaWNhdGlvblRva2VuIiwidmVyc2lvbnMiLCJ3aXRoU2Vzc2lvbiIsInRyYW5zYWN0aW9uSUQiLCJjcmVhdGUiLCJ2ZXJzaW9uIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiX3ZlcmlmaWNhdGlvblRva2VuIiwiaWQiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBTWFBOzs7ZUFBQUE7OzsyQkFGZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQU1BO1FBQThDQSxpQkFBZixvQkFBQSxTQUUxQyxLQVFDO1lBUENDLGdCQUNBQyxRQUNBQyxhQUNBQyxVQUNBQyxXQUNBQyx1QkFDQUMsS0FHSUMsY0FDQUMsU0FFUSxNQUFQQyxLQWNEQyxRQUNBQzs7OztvQkEzQkpYLGlCQURGLE1BQ0VBLGdCQUNBQyxTQUZGLE1BRUVBLFFBQ0FDLGNBSEYsTUFHRUEsYUFDQUMsV0FKRixNQUlFQSxVQUNBQyxZQUxGLE1BS0VBLFdBQ0FDLFlBTkYsTUFNRUEsd0JBTkYsTUFPRUMsS0FBQUEsOEJBQU0sQ0FBQztvQkFHSEMsZUFBZSxJQUFJLENBQUNLLFFBQVEsQ0FBQ1osZUFBZTtvQkFDNUNRLFVBQVVLLElBQUFBLHdCQUFXLEVBQUMsSUFBSSxFQUFFUCxJQUFJUSxhQUFhO29CQUVyQzs7d0JBQU1QLGFBQWFRLE1BQU07NEJBRW5DO2dDQUNFZCxRQUFBQTtnQ0FDQWUsU0FBU2Q7Z0NBQ1RDLFVBQUFBO2dDQUNBQyxXQUFBQTtnQ0FDQUMsV0FBQUE7NEJBQ0Y7MkJBRUZHLFNBQ0FGOzs7b0JBWFk7d0JBQUE7O3dCQUFQRyxNQUFPO29CQWNSQyxTQUFtQk8sS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNWO29CQUM3Q0Usb0JBQW9CRixJQUFJVyxrQkFBa0I7b0JBRWhELHVCQUF1QjtvQkFDdkJWLE9BQU9XLEVBQUUsR0FBR1gsT0FBT1ksR0FBRztvQkFDdEIsSUFBSVgsbUJBQW1CO3dCQUNyQkQsT0FBT1Usa0JBQWtCLEdBQUdUO29CQUM5QjtvQkFDQTs7d0JBQU9EOzs7O0lBQ1Q7YUF0QzJEWCxjQUV6RCxDQVFDO2VBVndEQTs7V0FBQUEifQ==