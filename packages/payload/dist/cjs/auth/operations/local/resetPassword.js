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
var _resetPassword = /*#__PURE__*/ _interop_require_default(require("../resetPassword"));
var _dataloader = require("../../../collections/dataloader");
var _init = require("../../../translations/init");
var _errors = require("../../../errors");
var _setRequestContext = require("../../../express/setRequestContext");
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
function localResetPassword(payload, options) {
    return _localResetPassword.apply(this, arguments);
}
function _localResetPassword() {
    _localResetPassword = _async_to_generator(function(payload, options) {
        var collectionSlug, data, overrideAccess, _options_req, req, collection;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, data = options.data, overrideAccess = options.overrideAccess, _options_req = options.req, req = _options_req === void 0 ? {} : _options_req;
            (0, _setRequestContext.setRequestContext)(options.req);
            collection = payload.collections[collectionSlug];
            if (!collection) {
                throw new _errors.APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Reset Password Operation."));
            }
            req.payload = payload;
            req.payloadAPI = req.payloadAPI || "local";
            req.i18n = (0, _init.i18nInit)(payload.config.i18n);
            if (!req.t) req.t = req.i18n.t;
            if (!req.payloadDataLoader) req.payloadDataLoader = (0, _dataloader.getDataLoader)(req);
            return [
                2,
                (0, _resetPassword.default)({
                    collection: collection,
                    data: data,
                    overrideAccess: overrideAccess,
                    req: req
                })
            ];
        });
    });
    return _localResetPassword.apply(this, arguments);
}
var _default = localResetPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9jYWwvcmVzZXRQYXNzd29yZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgcmVzZXRQYXNzd29yZCwgeyBSZXN1bHQgfSBmcm9tICcuLi9yZXNldFBhc3N3b3JkJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBnZXREYXRhTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvZGF0YWxvYWRlcic7XG5pbXBvcnQgeyBpMThuSW5pdCB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9ucy9pbml0JztcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IHNldFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy9zZXRSZXF1ZXN0Q29udGV4dCc7XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnM8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IHtcbiAgY29sbGVjdGlvbjogVFxuICBkYXRhOiB7XG4gICAgdG9rZW46IHN0cmluZ1xuICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgfVxuICBvdmVycmlkZUFjY2VzczogYm9vbGVhblxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2NhbFJlc2V0UGFzc3dvcmQ8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgcGF5bG9hZDogUGF5bG9hZCxcbiAgb3B0aW9uczogT3B0aW9uczxUPixcbik6IFByb21pc2U8UmVzdWx0PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uU2x1ZyxcbiAgICBkYXRhLFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHJlcSA9IHt9IGFzIFBheWxvYWRSZXF1ZXN0LFxuICB9ID0gb3B0aW9ucztcbiAgc2V0UmVxdWVzdENvbnRleHQob3B0aW9ucy5yZXEpO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBwYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25TbHVnXTtcblxuICBpZiAoIWNvbGxlY3Rpb24pIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoYFRoZSBjb2xsZWN0aW9uIHdpdGggc2x1ZyAke1N0cmluZyhjb2xsZWN0aW9uU2x1Zyl9IGNhbid0IGJlIGZvdW5kLiBSZXNldCBQYXNzd29yZCBPcGVyYXRpb24uYCk7XG4gIH1cblxuICByZXEucGF5bG9hZCA9IHBheWxvYWQ7XG4gIHJlcS5wYXlsb2FkQVBJID0gcmVxLnBheWxvYWRBUEkgfHwgJ2xvY2FsJztcbiAgcmVxLmkxOG4gPSBpMThuSW5pdChwYXlsb2FkLmNvbmZpZy5pMThuKTtcblxuICBpZiAoIXJlcS50KSByZXEudCA9IHJlcS5pMThuLnQ7XG4gIGlmICghcmVxLnBheWxvYWREYXRhTG9hZGVyKSByZXEucGF5bG9hZERhdGFMb2FkZXIgPSBnZXREYXRhTG9hZGVyKHJlcSk7XG5cbiAgcmV0dXJuIHJlc2V0UGFzc3dvcmQoe1xuICAgIGNvbGxlY3Rpb24sXG4gICAgZGF0YSxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICByZXEsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2NhbFJlc2V0UGFzc3dvcmQ7XG4iXSwibmFtZXMiOlsibG9jYWxSZXNldFBhc3N3b3JkIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJjb2xsZWN0aW9uU2x1ZyIsImRhdGEiLCJvdmVycmlkZUFjY2VzcyIsInJlcSIsImNvbGxlY3Rpb24iLCJzZXRSZXF1ZXN0Q29udGV4dCIsImNvbGxlY3Rpb25zIiwiQVBJRXJyb3IiLCJTdHJpbmciLCJwYXlsb2FkQVBJIiwiaTE4biIsImkxOG5Jbml0IiwiY29uZmlnIiwidCIsInBheWxvYWREYXRhTG9hZGVyIiwiZ2V0RGF0YUxvYWRlciIsInJlc2V0UGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBb0RBOzs7ZUFBQTs7O29FQWxEc0M7MEJBRVI7b0JBQ0w7c0JBQ0E7aUNBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FZbkJBLG1CQUNiQyxPQUFnQixFQUNoQkMsT0FBbUI7V0FGTkY7O1NBQUFBO0lBQUFBLHNCQUFmLG9CQUFBLFNBQ0VDLE9BQWdCLEVBQ2hCQyxPQUFtQjtZQUdMQyxnQkFDWkMsTUFDQUMsOEJBQ0FDLEtBSUlDOztZQVBRSixpQkFJVkQsUUFKRkssWUFDQUgsT0FHRUYsUUFIRkUsTUFDQUMsaUJBRUVILFFBRkZHLCtCQUVFSCxRQURGSSxLQUFBQSxnQ0FBTSxDQUFDO1lBRVRFLElBQUFBLG9DQUFpQixFQUFDTixRQUFRSSxHQUFHO1lBRXZCQyxhQUFhTixRQUFRUSxXQUFXLENBQUNOLGVBQWU7WUFFdEQsSUFBSSxDQUFDSSxZQUFZO2dCQUNmLE1BQU0sSUFBSUcsZ0JBQVEsQ0FBQyxBQUFDLDRCQUFrRCxPQUF2QkMsT0FBT1IsaUJBQWdCO1lBQ3hFO1lBRUFHLElBQUlMLE9BQU8sR0FBR0E7WUFDZEssSUFBSU0sVUFBVSxHQUFHTixJQUFJTSxVQUFVLElBQUk7WUFDbkNOLElBQUlPLElBQUksR0FBR0MsSUFBQUEsY0FBUSxFQUFDYixRQUFRYyxNQUFNLENBQUNGLElBQUk7WUFFdkMsSUFBSSxDQUFDUCxJQUFJVSxDQUFDLEVBQUVWLElBQUlVLENBQUMsR0FBR1YsSUFBSU8sSUFBSSxDQUFDRyxDQUFDO1lBQzlCLElBQUksQ0FBQ1YsSUFBSVcsaUJBQWlCLEVBQUVYLElBQUlXLGlCQUFpQixHQUFHQyxJQUFBQSx5QkFBYSxFQUFDWjtZQUVsRTs7Z0JBQU9hLElBQUFBLHNCQUFhLEVBQUM7b0JBQ25CWixZQUFBQTtvQkFDQUgsTUFBQUE7b0JBQ0FDLGdCQUFBQTtvQkFDQUMsS0FBQUE7Z0JBQ0Y7OztJQUNGO1dBL0JlTjs7SUFpQ2YsV0FBZUEifQ==