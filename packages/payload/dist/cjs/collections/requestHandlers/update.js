"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
var _update = /*#__PURE__*/ _interop_require_default(require("../operations/update"));
var _getTranslation = require("../../utilities/getTranslation");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
function updateHandler(req, res, next) {
    return _updateHandler.apply(this, arguments);
}
function _updateHandler() {
    _updateHandler = _async_to_generator(function(req, res, next) {
        var draft, result, message, total, message1, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    draft = req.query.draft === "true";
                    return [
                        4,
                        (0, _update.default)({
                            req: req,
                            collection: req.collection,
                            where: req.query.where,
                            data: req.body,
                            depth: parseInt(String(req.query.depth), 10),
                            draft: draft
                        })
                    ];
                case 1:
                    result = _state.sent();
                    if (result.errors.length === 0) {
                        message = req.t("general:updatedCountSuccessfully", {
                            count: result.docs.length,
                            label: (0, _getTranslation.getTranslation)(req.collection.config.labels[result.docs.length > 1 ? "plural" : "singular"], req.i18n)
                        });
                        res.status(_httpstatus.default.OK).json(_object_spread({}, (0, _formatSuccess.default)(message, "message"), result));
                        return [
                            2
                        ];
                    }
                    total = result.docs.length + result.errors.length;
                    message1 = req.t("error:unableToUpdateCount", {
                        count: result.errors.length,
                        total: total,
                        label: (0, _getTranslation.getTranslation)(req.collection.config.labels[total > 1 ? "plural" : "singular"], req.i18n)
                    });
                    res.status(_httpstatus.default.BAD_REQUEST).json(_object_spread({}, (0, _formatSuccess.default)(message1, "message"), result));
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    next(error);
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _updateHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IERvY3VtZW50LCBXaGVyZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIGZyb20gJy4uLy4uL2V4cHJlc3MvcmVzcG9uc2VzL2Zvcm1hdFN1Y2Nlc3MnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuLi9vcGVyYXRpb25zL3VwZGF0ZSc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVJlc3VsdCA9IHtcbiAgbWVzc2FnZTogc3RyaW5nXG4gIGRvYzogRG9jdW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxSZXNwb25zZTxVcGRhdGVSZXN1bHQ+IHwgdm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRyYWZ0ID0gcmVxLnF1ZXJ5LmRyYWZ0ID09PSAndHJ1ZSc7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGUoe1xuICAgICAgcmVxLFxuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICB3aGVyZTogcmVxLnF1ZXJ5LndoZXJlIGFzIFdoZXJlLFxuICAgICAgZGF0YTogcmVxLmJvZHksXG4gICAgICBkZXB0aDogcGFyc2VJbnQoU3RyaW5nKHJlcS5xdWVyeS5kZXB0aCksIDEwKSxcbiAgICAgIGRyYWZ0LFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3VsdC5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gcmVxLnQoJ2dlbmVyYWw6dXBkYXRlZENvdW50U3VjY2Vzc2Z1bGx5Jywge1xuICAgICAgICBjb3VudDogcmVzdWx0LmRvY3MubGVuZ3RoLFxuICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24ocmVxLmNvbGxlY3Rpb24uY29uZmlnLmxhYmVsc1tyZXN1bHQuZG9jcy5sZW5ndGggPiAxID8gJ3BsdXJhbCcgOiAnc2luZ3VsYXInXSwgcmVxLmkxOG4pLFxuICAgICAgfSk7XG5cbiAgICAgIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSylcbiAgICAgICAgLmpzb24oe1xuICAgICAgICAgIC4uLmZvcm1hdFN1Y2Nlc3NSZXNwb25zZShtZXNzYWdlLCAnbWVzc2FnZScpLFxuICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG90YWwgPSByZXN1bHQuZG9jcy5sZW5ndGggKyByZXN1bHQuZXJyb3JzLmxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gcmVxLnQoJ2Vycm9yOnVuYWJsZVRvVXBkYXRlQ291bnQnLCB7XG4gICAgICBjb3VudDogcmVzdWx0LmVycm9ycy5sZW5ndGgsXG4gICAgICB0b3RhbCxcbiAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihyZXEuY29sbGVjdGlvbi5jb25maWcubGFiZWxzW3RvdGFsID4gMSA/ICdwbHVyYWwnIDogJ3Npbmd1bGFyJ10sIHJlcS5pMThuKSxcbiAgICB9KTtcblxuXG4gICAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLkJBRF9SRVFVRVNUKVxuICAgICAgLmpzb24oe1xuICAgICAgICAuLi5mb3JtYXRTdWNjZXNzUmVzcG9uc2UobWVzc2FnZSwgJ21lc3NhZ2UnKSxcbiAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbmV4dChlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1cGRhdGVIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImRyYWZ0IiwicmVzdWx0IiwibWVzc2FnZSIsInRvdGFsIiwiZXJyb3IiLCJxdWVyeSIsInVwZGF0ZSIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImRhdGEiLCJib2R5IiwiZGVwdGgiLCJwYXJzZUludCIsIlN0cmluZyIsImVycm9ycyIsImxlbmd0aCIsInQiLCJjb3VudCIsImRvY3MiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwiY29uZmlnIiwibGFiZWxzIiwiaTE4biIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJPSyIsImpzb24iLCJmb3JtYXRTdWNjZXNzUmVzcG9uc2UiLCJCQURfUkVRVUVTVCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFhQTs7O2VBQThCQTs7O2lFQVpQO29FQUdXOzZEQUNmOzhCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQU9EQSxjQUFjQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1dBQXBFSDs7U0FBQUE7SUFBQUEsaUJBQWYsb0JBQUEsU0FBNkJDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7WUFFeEZDLE9BRUFDLFFBVUVDLFNBYUZDLE9BQ0FELFVBWUNFOzs7Ozs7Ozs7O29CQXRDREosUUFBUUgsSUFBSVEsS0FBSyxDQUFDTCxLQUFLLEtBQUs7b0JBRW5COzt3QkFBTU0sSUFBQUEsZUFBTSxFQUFDOzRCQUMxQlQsS0FBQUE7NEJBQ0FVLFlBQVlWLElBQUlVLFVBQVU7NEJBQzFCQyxPQUFPWCxJQUFJUSxLQUFLLENBQUNHLEtBQUs7NEJBQ3RCQyxNQUFNWixJQUFJYSxJQUFJOzRCQUNkQyxPQUFPQyxTQUFTQyxPQUFPaEIsSUFBSVEsS0FBSyxDQUFDTSxLQUFLLEdBQUc7NEJBQ3pDWCxPQUFBQTt3QkFDRjs7O29CQVBNQyxTQUFTO29CQVNmLElBQUlBLE9BQU9hLE1BQU0sQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7d0JBQ3hCYixVQUFVTCxJQUFJbUIsQ0FBQyxDQUFDLG9DQUFvQzs0QkFDeERDLE9BQU9oQixPQUFPaUIsSUFBSSxDQUFDSCxNQUFNOzRCQUN6QkksT0FBT0MsSUFBQUEsOEJBQWMsRUFBQ3ZCLElBQUlVLFVBQVUsQ0FBQ2MsTUFBTSxDQUFDQyxNQUFNLENBQUNyQixPQUFPaUIsSUFBSSxDQUFDSCxNQUFNLEdBQUcsSUFBSSxXQUFXLFdBQVcsRUFBRWxCLElBQUkwQixJQUFJO3dCQUM5Rzt3QkFFQXpCLElBQUkwQixNQUFNLENBQUNDLG1CQUFVLENBQUNDLEVBQUUsRUFDckJDLElBQUksQ0FBQyxtQkFDREMsSUFBQUEsc0JBQXFCLEVBQUMxQixTQUFTLFlBQy9CRDt3QkFFUDs7O29CQUNGO29CQUVNRSxRQUFRRixPQUFPaUIsSUFBSSxDQUFDSCxNQUFNLEdBQUdkLE9BQU9hLE1BQU0sQ0FBQ0MsTUFBTTtvQkFDakRiLFdBQVVMLElBQUltQixDQUFDLENBQUMsNkJBQTZCO3dCQUNqREMsT0FBT2hCLE9BQU9hLE1BQU0sQ0FBQ0MsTUFBTTt3QkFDM0JaLE9BQUFBO3dCQUNBZ0IsT0FBT0MsSUFBQUEsOEJBQWMsRUFBQ3ZCLElBQUlVLFVBQVUsQ0FBQ2MsTUFBTSxDQUFDQyxNQUFNLENBQUNuQixRQUFRLElBQUksV0FBVyxXQUFXLEVBQUVOLElBQUkwQixJQUFJO29CQUNqRztvQkFHQXpCLElBQUkwQixNQUFNLENBQUNDLG1CQUFVLENBQUNJLFdBQVcsRUFDOUJGLElBQUksQ0FBQyxtQkFDREMsSUFBQUEsc0JBQXFCLEVBQUMxQixVQUFTLFlBQy9CRDs7Ozs7O29CQUVBRztvQkFDUEwsS0FBS0s7Ozs7Ozs7Ozs7O0lBRVQ7V0EzQzhCUiJ9