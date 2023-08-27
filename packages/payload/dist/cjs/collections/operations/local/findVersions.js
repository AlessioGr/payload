"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionsLocal;
    }
});
var _findVersions = /*#__PURE__*/ _interop_require_default(require("../findVersions"));
var _dataloader = require("../../dataloader");
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
function findVersionsLocal(payload, options) {
    return _findVersionsLocal.apply(this, arguments);
}
function _findVersionsLocal() {
    _findVersionsLocal = _async_to_generator(function(payload, options) {
        var _payload_config, _payload, _payload_config_localization, _payload_config1, _payload1, collectionSlug, depth, page, limit, where, _options_locale, locale, _options_fallbackLocale, fallbackLocale, user, _options_overrideAccess, overrideAccess, showHiddenFields, sort, context, collection, defaultLocale, i18n, req;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, depth = options.depth, page = options.page, limit = options.limit, where = options.where, _options_locale = options.locale, locale = _options_locale === void 0 ? null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, showHiddenFields = options.showHiddenFields, sort = options.sort, context = options.context;
            collection = payload.collections[collectionSlug];
            defaultLocale = ((_payload = payload) === null || _payload === void 0 ? void 0 : (_payload_config = _payload.config) === null || _payload_config === void 0 ? void 0 : _payload_config.localization) ? (_payload1 = payload) === null || _payload1 === void 0 ? void 0 : (_payload_config1 = _payload1.config) === null || _payload_config1 === void 0 ? void 0 : (_payload_config_localization = _payload_config1.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null;
            if (!collection) {
                throw new _errors.APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Find Versions Operation."));
            }
            i18n = (0, _init.i18nInit)(payload.config.i18n);
            req = {
                user: user,
                payloadAPI: "local",
                locale: locale !== null && locale !== void 0 ? locale : defaultLocale,
                fallbackLocale: fallbackLocale !== null && fallbackLocale !== void 0 ? fallbackLocale : defaultLocale,
                payload: payload,
                i18n: i18n
            };
            (0, _setRequestContext.setRequestContext)(req, context);
            if (!req.t) req.t = req.i18n.t;
            if (!req.payloadDataLoader) req.payloadDataLoader = (0, _dataloader.getDataLoader)(req);
            return [
                2,
                (0, _findVersions.default)({
                    where: where,
                    page: page,
                    limit: limit,
                    depth: depth,
                    collection: collection,
                    sort: sort,
                    overrideAccess: overrideAccess,
                    showHiddenFields: showHiddenFields,
                    req: req
                })
            ];
        });
    });
    return _findVersionsLocal.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2ZpbmRWZXJzaW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgeyBEb2N1bWVudCwgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFBhZ2luYXRlZERvY3MgfSBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS90eXBlcyc7XG5pbXBvcnQgeyBUeXBlV2l0aFZlcnNpb24gfSBmcm9tICcuLi8uLi8uLi92ZXJzaW9ucy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCwgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi4vZmluZFZlcnNpb25zJztcbmltcG9ydCB7IGdldERhdGFMb2FkZXIgfSBmcm9tICcuLi8uLi9kYXRhbG9hZGVyJztcbmltcG9ydCB7IGkxOG5Jbml0IH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb25zL2luaXQnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgc2V0UmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3NldFJlcXVlc3RDb250ZXh0JztcblxuZXhwb3J0IHR5cGUgT3B0aW9uczxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+ID0ge1xuICBjb2xsZWN0aW9uOiBUXG4gIGRlcHRoPzogbnVtYmVyXG4gIHBhZ2U/OiBudW1iZXJcbiAgbGltaXQ/OiBudW1iZXJcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGZhbGxiYWNrTG9jYWxlPzogc3RyaW5nXG4gIHVzZXI/OiBEb2N1bWVudFxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgc29ydD86IHN0cmluZ1xuICB3aGVyZT86IFdoZXJlXG4gIGRyYWZ0PzogYm9vbGVhblxuICAvKipcbiAgICogY29udGV4dCwgd2hpY2ggd2lsbCB0aGVuIGJlIHBhc3NlZCB0byByZXEuY29udGV4dCwgd2hpY2ggY2FuIGJlIHJlYWQgYnkgaG9va3NcbiAgICovXG4gIGNvbnRleHQ/OiBSZXF1ZXN0Q29udGV4dCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmluZFZlcnNpb25zTG9jYWw8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgcGF5bG9hZDogUGF5bG9hZCxcbiAgb3B0aW9uczogT3B0aW9uczxUPixcbik6IFByb21pc2U8UGFnaW5hdGVkRG9jczxUeXBlV2l0aFZlcnNpb248R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVF0+Pj4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbjogY29sbGVjdGlvblNsdWcsXG4gICAgZGVwdGgsXG4gICAgcGFnZSxcbiAgICBsaW1pdCxcbiAgICB3aGVyZSxcbiAgICBsb2NhbGUgPSBudWxsLFxuICAgIGZhbGxiYWNrTG9jYWxlID0gbnVsbCxcbiAgICB1c2VyLFxuICAgIG92ZXJyaWRlQWNjZXNzID0gdHJ1ZSxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIHNvcnQsXG4gICAgY29udGV4dCxcbiAgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgY29sbGVjdGlvbiA9IHBheWxvYWQuY29sbGVjdGlvbnNbY29sbGVjdGlvblNsdWddO1xuICBjb25zdCBkZWZhdWx0TG9jYWxlID0gcGF5bG9hZD8uY29uZmlnPy5sb2NhbGl6YXRpb24gPyBwYXlsb2FkPy5jb25maWc/LmxvY2FsaXphdGlvbj8uZGVmYXVsdExvY2FsZSA6IG51bGw7XG5cbiAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKGBUaGUgY29sbGVjdGlvbiB3aXRoIHNsdWcgJHtTdHJpbmcoY29sbGVjdGlvblNsdWcpfSBjYW4ndCBiZSBmb3VuZC4gRmluZCBWZXJzaW9ucyBPcGVyYXRpb24uYCk7XG4gIH1cblxuICBjb25zdCBpMThuID0gaTE4bkluaXQocGF5bG9hZC5jb25maWcuaTE4bik7XG4gIGNvbnN0IHJlcSA9IHtcbiAgICB1c2VyLFxuICAgIHBheWxvYWRBUEk6ICdsb2NhbCcsXG4gICAgbG9jYWxlOiBsb2NhbGUgPz8gZGVmYXVsdExvY2FsZSxcbiAgICBmYWxsYmFja0xvY2FsZTogZmFsbGJhY2tMb2NhbGUgPz8gZGVmYXVsdExvY2FsZSxcbiAgICBwYXlsb2FkLFxuICAgIGkxOG4sXG4gIH0gYXMgUGF5bG9hZFJlcXVlc3Q7XG4gIHNldFJlcXVlc3RDb250ZXh0KHJlcSwgY29udGV4dCk7XG5cbiAgaWYgKCFyZXEudCkgcmVxLnQgPSByZXEuaTE4bi50O1xuICBpZiAoIXJlcS5wYXlsb2FkRGF0YUxvYWRlcikgcmVxLnBheWxvYWREYXRhTG9hZGVyID0gZ2V0RGF0YUxvYWRlcihyZXEpO1xuXG4gIHJldHVybiBmaW5kVmVyc2lvbnMoe1xuICAgIHdoZXJlLFxuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgZGVwdGgsXG4gICAgY29sbGVjdGlvbixcbiAgICBzb3J0LFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgcmVxLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kVmVyc2lvbnNMb2NhbCIsInBheWxvYWQiLCJvcHRpb25zIiwiY29sbGVjdGlvblNsdWciLCJkZXB0aCIsInBhZ2UiLCJsaW1pdCIsIndoZXJlIiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJ1c2VyIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwic29ydCIsImNvbnRleHQiLCJjb2xsZWN0aW9uIiwiZGVmYXVsdExvY2FsZSIsImkxOG4iLCJyZXEiLCJjb2xsZWN0aW9ucyIsImNvbmZpZyIsImxvY2FsaXphdGlvbiIsIkFQSUVycm9yIiwiU3RyaW5nIiwiaTE4bkluaXQiLCJwYXlsb2FkQVBJIiwic2V0UmVxdWVzdENvbnRleHQiLCJ0IiwicGF5bG9hZERhdGFMb2FkZXIiLCJnZXREYXRhTG9hZGVyIiwiZmluZFZlcnNpb25zIl0sIm1hcHBpbmdzIjoiOzs7OytCQStCQTs7O2VBQThCQTs7O21FQXpCTDswQkFDSztvQkFDTDtzQkFDQTtpQ0FDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXFCSkEsa0JBQzVCQyxPQUFnQixFQUNoQkMsT0FBbUI7V0FGU0Y7O1NBQUFBO0lBQUFBLHFCQUFmLG9CQUFBLFNBQ2JDLE9BQWdCLEVBQ2hCQyxPQUFtQjtZQWtCR0QsaUJBQUFBLFVBQWdDQSw4QkFBQUEsa0JBQUFBLFdBZnhDRSxnQkFDWkMsT0FDQUMsTUFDQUMsT0FDQUMsd0JBQ0FDLGlDQUNBQyxnQkFDQUMsK0JBQ0FDLGdCQUNBQyxrQkFDQUMsTUFDQUMsU0FHSUMsWUFDQUMsZUFNQUMsTUFDQUM7O1lBdEJRZixpQkFZVkQsUUFaRmEsWUFDQVgsUUFXRUYsUUFYRkUsT0FDQUMsT0FVRUgsUUFWRkcsTUFDQUMsUUFTRUosUUFURkksT0FDQUMsUUFRRUwsUUFSRksseUJBUUVMLFFBUEZNLFFBQUFBLHNDQUFTLGtEQU9QTixRQU5GTyxnQkFBQUEsc0RBQWlCLGdDQUNqQkMsT0FLRVIsUUFMRlEsZ0NBS0VSLFFBSkZTLGdCQUFBQSxzREFBaUIsZ0NBQ2pCQyxtQkFHRVYsUUFIRlUsa0JBQ0FDLE9BRUVYLFFBRkZXLE1BQ0FDLFVBQ0VaLFFBREZZO1lBR0lDLGFBQWFkLFFBQVFrQixXQUFXLENBQUNoQixlQUFlO1lBQ2hEYSxnQkFBZ0JmLEVBQUFBLFdBQUFBLHFCQUFBQSxnQ0FBQUEsa0JBQUFBLFNBQVNtQixNQUFNLGNBQWZuQixzQ0FBQUEsZ0JBQWlCb0IsWUFBWSxLQUFHcEIsWUFBQUEscUJBQUFBLGlDQUFBQSxtQkFBQUEsVUFBU21CLE1BQU0sY0FBZm5CLHdDQUFBQSwrQkFBQUEsaUJBQWlCb0IsWUFBWSxjQUE3QnBCLG1EQUFBQSw2QkFBK0JlLGFBQWEsR0FBRztZQUVyRyxJQUFJLENBQUNELFlBQVk7Z0JBQ2YsTUFBTSxJQUFJTyxnQkFBUSxDQUFDLEFBQUMsNEJBQWtELE9BQXZCQyxPQUFPcEIsaUJBQWdCO1lBQ3hFO1lBRU1jLE9BQU9PLElBQUFBLGNBQVEsRUFBQ3ZCLFFBQVFtQixNQUFNLENBQUNILElBQUk7WUFDbkNDLE1BQU07Z0JBQ1ZSLE1BQUFBO2dCQUNBZSxZQUFZO2dCQUNaakIsUUFBUUEsbUJBQUFBLG9CQUFBQSxTQUFVUTtnQkFDbEJQLGdCQUFnQkEsMkJBQUFBLDRCQUFBQSxpQkFBa0JPO2dCQUNsQ2YsU0FBQUE7Z0JBQ0FnQixNQUFBQTtZQUNGO1lBQ0FTLElBQUFBLG9DQUFpQixFQUFDUixLQUFLSjtZQUV2QixJQUFJLENBQUNJLElBQUlTLENBQUMsRUFBRVQsSUFBSVMsQ0FBQyxHQUFHVCxJQUFJRCxJQUFJLENBQUNVLENBQUM7WUFDOUIsSUFBSSxDQUFDVCxJQUFJVSxpQkFBaUIsRUFBRVYsSUFBSVUsaUJBQWlCLEdBQUdDLElBQUFBLHlCQUFhLEVBQUNYO1lBRWxFOztnQkFBT1ksSUFBQUEscUJBQVksRUFBQztvQkFDbEJ2QixPQUFBQTtvQkFDQUYsTUFBQUE7b0JBQ0FDLE9BQUFBO29CQUNBRixPQUFBQTtvQkFDQVcsWUFBQUE7b0JBQ0FGLE1BQUFBO29CQUNBRixnQkFBQUE7b0JBQ0FDLGtCQUFBQTtvQkFDQU0sS0FBQUE7Z0JBQ0Y7OztJQUNGO1dBbkQ4QmxCIn0=