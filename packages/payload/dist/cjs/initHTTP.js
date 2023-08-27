/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "initHTTP", {
    enumerable: true,
    get: function() {
        return initHTTP;
    }
});
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _authenticate = /*#__PURE__*/ _interop_require_default(require("./express/middleware/authenticate"));
var _middleware = /*#__PURE__*/ _interop_require_default(require("./express/middleware"));
var _admin = /*#__PURE__*/ _interop_require_default(require("./express/admin"));
var _init = /*#__PURE__*/ _interop_require_default(require("./auth/init"));
var _access = /*#__PURE__*/ _interop_require_default(require("./auth/requestHandlers/access"));
var _initHTTP = /*#__PURE__*/ _interop_require_default(require("./collections/initHTTP"));
var _initHTTP1 = /*#__PURE__*/ _interop_require_default(require("./globals/initHTTP"));
var _initPlayground = /*#__PURE__*/ _interop_require_default(require("./graphql/initPlayground"));
var _static = /*#__PURE__*/ _interop_require_default(require("./express/static"));
var _graphQLHandler = /*#__PURE__*/ _interop_require_default(require("./graphql/graphQLHandler"));
var _identifyAPI = /*#__PURE__*/ _interop_require_default(require("./express/middleware/identifyAPI"));
var _errorHandler = /*#__PURE__*/ _interop_require_default(require("./express/middleware/errorHandler"));
var _dataloader = require("./collections/dataloader");
var _mountEndpoints = /*#__PURE__*/ _interop_require_default(require("./express/mountEndpoints"));
var _payload = require("./payload");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
var initHTTP = function() {
    var _ref = _async_to_generator(function(options) {
        var payload, _payload_router;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (typeof options.local === "undefined") options.local = false;
                    return [
                        4,
                        (0, _payload.getPayload)(options)
                    ];
                case 1:
                    payload = _state.sent();
                    if (!!options.local) return [
                        3,
                        3
                    ];
                    payload.router = _express.default.Router();
                    (_payload_router = payload.router).use.apply(_payload_router, _to_consumable_array((0, _middleware.default)(payload)));
                    (0, _init.default)(payload);
                    (0, _initHTTP.default)(payload);
                    (0, _initHTTP1.default)(payload);
                    options.express.use(function(req, res, next) {
                        req.payload = payload;
                        next();
                    });
                    options.express.use(function(req, res, next) {
                        req.payloadDataLoader = (0, _dataloader.getDataLoader)(req);
                        return next();
                    });
                    payload.express = options.express;
                    if (payload.config.rateLimit.trustProxy) {
                        payload.express.set("trust proxy", 1);
                    }
                    return [
                        4,
                        (0, _admin.default)(payload)
                    ];
                case 2:
                    _state.sent();
                    payload.router.get("/access", _access.default);
                    if (!payload.config.graphQL.disable) {
                        payload.router.use(payload.config.routes.graphQL, function(req, res, next) {
                            if (req.method === "OPTIONS") {
                                res.sendStatus(204);
                            } else {
                                next();
                            }
                        }, (0, _identifyAPI.default)("GraphQL"), function(req, res, next) {
                            return (0, _graphQLHandler.default)(req, res)(req, res, next);
                        });
                        (0, _initPlayground.default)(payload);
                    }
                    (0, _mountEndpoints.default)(options.express, payload.router, payload.config.endpoints);
                    // Bind router to API
                    payload.express.use(payload.config.routes.api, payload.router);
                    // Enable static routes for all collections permitting upload
                    (0, _static.default)(payload);
                    payload.errorHandler = (0, _errorHandler.default)(payload.config, payload.logger);
                    payload.router.use(payload.errorHandler);
                    payload.authenticate = (0, _authenticate.default)(payload.config);
                    _state.label = 3;
                case 3:
                    return [
                        2,
                        payload
                    ];
            }
        });
    });
    return function initHTTP(options) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbml0SFRUUC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGV4cHJlc3MsIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgSW5pdE9wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy90eXBlcyc7XG5cbmltcG9ydCBhdXRoZW50aWNhdGUgZnJvbSAnLi9leHByZXNzL21pZGRsZXdhcmUvYXV0aGVudGljYXRlJztcbmltcG9ydCBleHByZXNzTWlkZGxld2FyZSBmcm9tICcuL2V4cHJlc3MvbWlkZGxld2FyZSc7XG5pbXBvcnQgaW5pdEFkbWluIGZyb20gJy4vZXhwcmVzcy9hZG1pbic7XG5pbXBvcnQgaW5pdEF1dGggZnJvbSAnLi9hdXRoL2luaXQnO1xuaW1wb3J0IGFjY2VzcyBmcm9tICcuL2F1dGgvcmVxdWVzdEhhbmRsZXJzL2FjY2Vzcyc7XG5pbXBvcnQgaW5pdENvbGxlY3Rpb25zSFRUUCBmcm9tICcuL2NvbGxlY3Rpb25zL2luaXRIVFRQJztcbmltcG9ydCBpbml0R2xvYmFsc0hUVFAgZnJvbSAnLi9nbG9iYWxzL2luaXRIVFRQJztcbmltcG9ydCBpbml0R3JhcGhRTFBsYXlncm91bmQgZnJvbSAnLi9ncmFwaHFsL2luaXRQbGF5Z3JvdW5kJztcbmltcG9ydCBpbml0U3RhdGljIGZyb20gJy4vZXhwcmVzcy9zdGF0aWMnO1xuaW1wb3J0IGdyYXBoUUxIYW5kbGVyIGZyb20gJy4vZ3JhcGhxbC9ncmFwaFFMSGFuZGxlcic7XG5pbXBvcnQgaWRlbnRpZnlBUEkgZnJvbSAnLi9leHByZXNzL21pZGRsZXdhcmUvaWRlbnRpZnlBUEknO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tICcuL2V4cHJlc3MvbWlkZGxld2FyZS9lcnJvckhhbmRsZXInO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0RGF0YUxvYWRlciB9IGZyb20gJy4vY29sbGVjdGlvbnMvZGF0YWxvYWRlcic7XG5pbXBvcnQgbW91bnRFbmRwb2ludHMgZnJvbSAnLi9leHByZXNzL21vdW50RW5kcG9pbnRzJztcbmltcG9ydCB7IGdldFBheWxvYWQsIFBheWxvYWQgfSBmcm9tICcuL3BheWxvYWQnO1xuXG5leHBvcnQgY29uc3QgaW5pdEhUVFAgPSBhc3luYyAob3B0aW9uczogSW5pdE9wdGlvbnMpOiBQcm9taXNlPFBheWxvYWQ+ID0+IHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsID09PSAndW5kZWZpbmVkJykgb3B0aW9ucy5sb2NhbCA9IGZhbHNlO1xuICBjb25zdCBwYXlsb2FkID0gYXdhaXQgZ2V0UGF5bG9hZChvcHRpb25zKTtcblxuICBpZiAoIW9wdGlvbnMubG9jYWwpIHtcbiAgICBwYXlsb2FkLnJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgcGF5bG9hZC5yb3V0ZXIudXNlKC4uLmV4cHJlc3NNaWRkbGV3YXJlKHBheWxvYWQpKTtcbiAgICBpbml0QXV0aChwYXlsb2FkKTtcblxuICAgIGluaXRDb2xsZWN0aW9uc0hUVFAocGF5bG9hZCk7XG4gICAgaW5pdEdsb2JhbHNIVFRQKHBheWxvYWQpO1xuXG4gICAgb3B0aW9ucy5leHByZXNzLnVzZSgocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICByZXEucGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG5cbiAgICBvcHRpb25zLmV4cHJlc3MudXNlKChyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgIHJlcS5wYXlsb2FkRGF0YUxvYWRlciA9IGdldERhdGFMb2FkZXIocmVxKTtcbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfSk7XG5cbiAgICBwYXlsb2FkLmV4cHJlc3MgPSBvcHRpb25zLmV4cHJlc3M7XG5cbiAgICBpZiAocGF5bG9hZC5jb25maWcucmF0ZUxpbWl0LnRydXN0UHJveHkpIHtcbiAgICAgIHBheWxvYWQuZXhwcmVzcy5zZXQoJ3RydXN0IHByb3h5JywgMSk7XG4gICAgfVxuXG4gICAgYXdhaXQgaW5pdEFkbWluKHBheWxvYWQpO1xuXG4gICAgcGF5bG9hZC5yb3V0ZXIuZ2V0KCcvYWNjZXNzJywgYWNjZXNzKTtcblxuICAgIGlmICghcGF5bG9hZC5jb25maWcuZ3JhcGhRTC5kaXNhYmxlKSB7XG4gICAgICBwYXlsb2FkLnJvdXRlci51c2UoXG4gICAgICAgIHBheWxvYWQuY29uZmlnLnJvdXRlcy5ncmFwaFFMLFxuICAgICAgICAocmVxLCByZXMsIG5leHQpOiB2b2lkID0+IHtcbiAgICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ09QVElPTlMnKSB7XG4gICAgICAgICAgICByZXMuc2VuZFN0YXR1cygyMDQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpZGVudGlmeUFQSSgnR3JhcGhRTCcpLFxuICAgICAgICAocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dCkgPT4gZ3JhcGhRTEhhbmRsZXIocmVxLCByZXMpKHJlcSwgcmVzLCBuZXh0KSxcbiAgICAgICk7XG4gICAgICBpbml0R3JhcGhRTFBsYXlncm91bmQocGF5bG9hZCk7XG4gICAgfVxuXG4gICAgbW91bnRFbmRwb2ludHMob3B0aW9ucy5leHByZXNzLCBwYXlsb2FkLnJvdXRlciwgcGF5bG9hZC5jb25maWcuZW5kcG9pbnRzKTtcblxuICAgIC8vIEJpbmQgcm91dGVyIHRvIEFQSVxuICAgIHBheWxvYWQuZXhwcmVzcy51c2UocGF5bG9hZC5jb25maWcucm91dGVzLmFwaSwgcGF5bG9hZC5yb3V0ZXIpO1xuXG4gICAgLy8gRW5hYmxlIHN0YXRpYyByb3V0ZXMgZm9yIGFsbCBjb2xsZWN0aW9ucyBwZXJtaXR0aW5nIHVwbG9hZFxuICAgIGluaXRTdGF0aWMocGF5bG9hZCk7XG5cbiAgICBwYXlsb2FkLmVycm9ySGFuZGxlciA9IGVycm9ySGFuZGxlcihwYXlsb2FkLmNvbmZpZywgcGF5bG9hZC5sb2dnZXIpO1xuICAgIHBheWxvYWQucm91dGVyLnVzZShwYXlsb2FkLmVycm9ySGFuZGxlcik7XG5cbiAgICBwYXlsb2FkLmF1dGhlbnRpY2F0ZSA9IGF1dGhlbnRpY2F0ZShwYXlsb2FkLmNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gcGF5bG9hZDtcbn07XG4iXSwibmFtZXMiOlsiaW5pdEhUVFAiLCJvcHRpb25zIiwicGF5bG9hZCIsImxvY2FsIiwiZ2V0UGF5bG9hZCIsInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJleHByZXNzTWlkZGxld2FyZSIsImluaXRBdXRoIiwiaW5pdENvbGxlY3Rpb25zSFRUUCIsImluaXRHbG9iYWxzSFRUUCIsInJlcSIsInJlcyIsIm5leHQiLCJwYXlsb2FkRGF0YUxvYWRlciIsImdldERhdGFMb2FkZXIiLCJjb25maWciLCJyYXRlTGltaXQiLCJ0cnVzdFByb3h5Iiwic2V0IiwiaW5pdEFkbWluIiwiZ2V0IiwiYWNjZXNzIiwiZ3JhcGhRTCIsImRpc2FibGUiLCJyb3V0ZXMiLCJtZXRob2QiLCJzZW5kU3RhdHVzIiwiaWRlbnRpZnlBUEkiLCJncmFwaFFMSGFuZGxlciIsImluaXRHcmFwaFFMUGxheWdyb3VuZCIsIm1vdW50RW5kcG9pbnRzIiwiZW5kcG9pbnRzIiwiYXBpIiwiaW5pdFN0YXRpYyIsImVycm9ySGFuZGxlciIsImxvZ2dlciIsImF1dGhlbnRpY2F0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQXFCdkJBOzs7ZUFBQUE7Ozs4REFwQm1DO21FQUd2QjtpRUFDSzs0REFDUjsyREFDRDs2REFDRjsrREFDYTtnRUFDSjtxRUFDTTs2REFDWDtxRUFDSTtrRUFDSDttRUFDQzswQkFFSztxRUFDSDt1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