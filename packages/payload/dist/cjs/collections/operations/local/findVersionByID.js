"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionByIDLocal;
    }
});
var _findVersionByID = /*#__PURE__*/ _interop_require_default(require("../findVersionByID"));
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
function findVersionByIDLocal(payload, options) {
    return _findVersionByIDLocal.apply(this, arguments);
}
function _findVersionByIDLocal() {
    _findVersionByIDLocal = _async_to_generator(function(payload, options) {
        var _payload_config, _payload, _payload_config_localization, _payload_config1, _payload1, _req, _req1, collectionSlug, depth, id, _options_locale, locale, _options_fallbackLocale, fallbackLocale, _options_overrideAccess, overrideAccess, _options_disableErrors, disableErrors, showHiddenFields, _options_req, req, context, collection, defaultLocale, _ref, _ref1;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, depth = options.depth, id = options.id, _options_locale = options.locale, locale = _options_locale === void 0 ? null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, _options_disableErrors = options.disableErrors, disableErrors = _options_disableErrors === void 0 ? false : _options_disableErrors, showHiddenFields = options.showHiddenFields, _options_req = options.req, req = _options_req === void 0 ? {} : _options_req, context = options.context;
            (0, _setRequestContext.setRequestContext)(options.req, context);
            collection = payload.collections[collectionSlug];
            defaultLocale = ((_payload = payload) === null || _payload === void 0 ? void 0 : (_payload_config = _payload.config) === null || _payload_config === void 0 ? void 0 : _payload_config.localization) ? (_payload1 = payload) === null || _payload1 === void 0 ? void 0 : (_payload_config1 = _payload1.config) === null || _payload_config1 === void 0 ? void 0 : (_payload_config_localization = _payload_config1.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null;
            if (!collection) {
                throw new _errors.APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Find Version By ID Operation."));
            }
            req.payloadAPI = req.payloadAPI || "local";
            req.locale = (_ref = locale !== null && locale !== void 0 ? locale : (_req = req) === null || _req === void 0 ? void 0 : _req.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
            req.fallbackLocale = (_ref1 = fallbackLocale !== null && fallbackLocale !== void 0 ? fallbackLocale : (_req1 = req) === null || _req1 === void 0 ? void 0 : _req1.fallbackLocale) !== null && _ref1 !== void 0 ? _ref1 : defaultLocale;
            req.i18n = (0, _init.i18nInit)(payload.config.i18n);
            req.payload = payload;
            if (!req.t) req.t = req.i18n.t;
            if (!req.payloadDataLoader) req.payloadDataLoader = (0, _dataloader.getDataLoader)(req);
            return [
                2,
                (0, _findVersionByID.default)({
                    depth: depth,
                    id: id,
                    collection: collection,
                    overrideAccess: overrideAccess,
                    disableErrors: disableErrors,
                    showHiddenFields: showHiddenFields,
                    req: req
                })
            ];
        });
    });
    return _findVersionByIDLocal.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2ZpbmRWZXJzaW9uQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0LCBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVdpdGhWZXJzaW9uIH0gZnJvbSAnLi4vLi4vLi4vdmVyc2lvbnMvdHlwZXMnO1xuaW1wb3J0IGZpbmRWZXJzaW9uQnlJRCBmcm9tICcuLi9maW5kVmVyc2lvbkJ5SUQnO1xuaW1wb3J0IHsgZ2V0RGF0YUxvYWRlciB9IGZyb20gJy4uLy4uL2RhdGFsb2FkZXInO1xuaW1wb3J0IHsgaTE4bkluaXQgfSBmcm9tICcuLi8uLi8uLi90cmFuc2xhdGlvbnMvaW5pdCc7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBzZXRSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3Mvc2V0UmVxdWVzdENvbnRleHQnO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zPFQgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4gPSB7XG4gIGNvbGxlY3Rpb246IFRcbiAgaWQ6IHN0cmluZ1xuICBkZXB0aD86IG51bWJlclxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgdXNlcj86IERvY3VtZW50XG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBzaG93SGlkZGVuRmllbGRzPzogYm9vbGVhblxuICBkaXNhYmxlRXJyb3JzPzogYm9vbGVhblxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxuICBkcmFmdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIGNvbnRleHQsIHdoaWNoIHdpbGwgdGhlbiBiZSBwYXNzZWQgdG8gcmVxLmNvbnRleHQsIHdoaWNoIGNhbiBiZSByZWFkIGJ5IGhvb2tzXG4gICAqL1xuICBjb250ZXh0PzogUmVxdWVzdENvbnRleHQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbmRWZXJzaW9uQnlJRExvY2FsPFQgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIHBheWxvYWQ6IFBheWxvYWQsXG4gIG9wdGlvbnM6IE9wdGlvbnM8VD4sXG4pOiBQcm9taXNlPFR5cGVXaXRoVmVyc2lvbjxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUXT4+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25TbHVnLFxuICAgIGRlcHRoLFxuICAgIGlkLFxuICAgIGxvY2FsZSA9IG51bGwsXG4gICAgZmFsbGJhY2tMb2NhbGUgPSBudWxsLFxuICAgIG92ZXJyaWRlQWNjZXNzID0gdHJ1ZSxcbiAgICBkaXNhYmxlRXJyb3JzID0gZmFsc2UsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgICBjb250ZXh0LFxuICB9ID0gb3B0aW9ucztcbiAgc2V0UmVxdWVzdENvbnRleHQob3B0aW9ucy5yZXEsIGNvbnRleHQpO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBwYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25TbHVnXTtcbiAgY29uc3QgZGVmYXVsdExvY2FsZSA9IHBheWxvYWQ/LmNvbmZpZz8ubG9jYWxpemF0aW9uID8gcGF5bG9hZD8uY29uZmlnPy5sb2NhbGl6YXRpb24/LmRlZmF1bHRMb2NhbGUgOiBudWxsO1xuXG4gIGlmICghY29sbGVjdGlvbikge1xuICAgIHRocm93IG5ldyBBUElFcnJvcihgVGhlIGNvbGxlY3Rpb24gd2l0aCBzbHVnICR7U3RyaW5nKGNvbGxlY3Rpb25TbHVnKX0gY2FuJ3QgYmUgZm91bmQuIEZpbmQgVmVyc2lvbiBCeSBJRCBPcGVyYXRpb24uYCk7XG4gIH1cblxuICByZXEucGF5bG9hZEFQSSA9IHJlcS5wYXlsb2FkQVBJIHx8ICdsb2NhbCc7XG4gIHJlcS5sb2NhbGUgPSBsb2NhbGUgPz8gcmVxPy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcbiAgcmVxLmZhbGxiYWNrTG9jYWxlID0gZmFsbGJhY2tMb2NhbGUgPz8gcmVxPy5mYWxsYmFja0xvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuICByZXEuaTE4biA9IGkxOG5Jbml0KHBheWxvYWQuY29uZmlnLmkxOG4pO1xuICByZXEucGF5bG9hZCA9IHBheWxvYWQ7XG5cbiAgaWYgKCFyZXEudCkgcmVxLnQgPSByZXEuaTE4bi50O1xuICBpZiAoIXJlcS5wYXlsb2FkRGF0YUxvYWRlcikgcmVxLnBheWxvYWREYXRhTG9hZGVyID0gZ2V0RGF0YUxvYWRlcihyZXEpO1xuXG4gIHJldHVybiBmaW5kVmVyc2lvbkJ5SUQoe1xuICAgIGRlcHRoLFxuICAgIGlkLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgZGlzYWJsZUVycm9ycyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIHJlcSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmluZFZlcnNpb25CeUlETG9jYWwiLCJwYXlsb2FkIiwib3B0aW9ucyIsInJlcSIsImNvbGxlY3Rpb25TbHVnIiwiZGVwdGgiLCJpZCIsImxvY2FsZSIsImZhbGxiYWNrTG9jYWxlIiwib3ZlcnJpZGVBY2Nlc3MiLCJkaXNhYmxlRXJyb3JzIiwic2hvd0hpZGRlbkZpZWxkcyIsImNvbnRleHQiLCJjb2xsZWN0aW9uIiwiZGVmYXVsdExvY2FsZSIsInNldFJlcXVlc3RDb250ZXh0IiwiY29sbGVjdGlvbnMiLCJjb25maWciLCJsb2NhbGl6YXRpb24iLCJBUElFcnJvciIsIlN0cmluZyIsInBheWxvYWRBUEkiLCJpMThuIiwiaTE4bkluaXQiLCJ0IiwicGF5bG9hZERhdGFMb2FkZXIiLCJnZXREYXRhTG9hZGVyIiwiZmluZFZlcnNpb25CeUlEIl0sIm1hcHBpbmdzIjoiOzs7OytCQTZCQTs7O2VBQThCQTs7O3NFQXhCRjswQkFDRTtvQkFDTDtzQkFDQTtpQ0FDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW9CSkEscUJBQzVCQyxPQUFnQixFQUNoQkMsT0FBbUI7V0FGU0Y7O1NBQUFBO0lBQUFBLHdCQUFmLG9CQUFBLFNBQ2JDLE9BQWdCLEVBQ2hCQyxPQUFtQjtZQWlCR0QsaUJBQUFBLFVBQWdDQSw4QkFBQUEsa0JBQUFBLFdBTy9CRSxNQUNnQkEsT0F0QnpCQyxnQkFDWkMsT0FDQUMscUJBQ0FDLGlDQUNBQyx5Q0FDQUMsd0NBQ0FDLGVBQ0FDLGdDQUNBUixLQUNBUyxTQUlJQyxZQUNBQyxlQU9PUCxNQUNRQzs7WUF0QlBKLGlCQVVWRixRQVZGVyxZQUNBUixRQVNFSCxRQVRGRyxPQUNBQyxLQVFFSixRQVJGSSxzQkFRRUosUUFQRkssUUFBQUEsc0NBQVMsa0RBT1BMLFFBTkZNLGdCQUFBQSxzREFBaUIsMERBTWZOLFFBTEZPLGdCQUFBQSxzREFBaUIseURBS2ZQLFFBSkZRLGVBQUFBLG9EQUFnQixnQ0FDaEJDLG1CQUdFVCxRQUhGUyxpQ0FHRVQsUUFGRkMsS0FBQUEsZ0NBQU0sQ0FBQyxrQkFDUFMsVUFDRVYsUUFERlU7WUFFRkcsSUFBQUEsb0NBQWlCLEVBQUNiLFFBQVFDLEdBQUcsRUFBRVM7WUFFekJDLGFBQWFaLFFBQVFlLFdBQVcsQ0FBQ1osZUFBZTtZQUNoRFUsZ0JBQWdCYixFQUFBQSxXQUFBQSxxQkFBQUEsZ0NBQUFBLGtCQUFBQSxTQUFTZ0IsTUFBTSxjQUFmaEIsc0NBQUFBLGdCQUFpQmlCLFlBQVksS0FBR2pCLFlBQUFBLHFCQUFBQSxpQ0FBQUEsbUJBQUFBLFVBQVNnQixNQUFNLGNBQWZoQix3Q0FBQUEsK0JBQUFBLGlCQUFpQmlCLFlBQVksY0FBN0JqQixtREFBQUEsNkJBQStCYSxhQUFhLEdBQUc7WUFFckcsSUFBSSxDQUFDRCxZQUFZO2dCQUNmLE1BQU0sSUFBSU0sZ0JBQVEsQ0FBQyxBQUFDLDRCQUFrRCxPQUF2QkMsT0FBT2hCLGlCQUFnQjtZQUN4RTtZQUVBRCxJQUFJa0IsVUFBVSxHQUFHbEIsSUFBSWtCLFVBQVUsSUFBSTtZQUNuQ2xCLElBQUlJLE1BQU0sR0FBR0EsQ0FBQUEsT0FBQUEsbUJBQUFBLG9CQUFBQSxVQUFVSixPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtJLE1BQU0sY0FBckJBLGtCQUFBQSxPQUF5Qk87WUFDdENYLElBQUlLLGNBQWMsR0FBR0EsQ0FBQUEsUUFBQUEsMkJBQUFBLDRCQUFBQSxrQkFBa0JMLFFBQUFBLGlCQUFBQSw0QkFBQUEsTUFBS0ssY0FBYyxjQUFyQ0EsbUJBQUFBLFFBQXlDTTtZQUM5RFgsSUFBSW1CLElBQUksR0FBR0MsSUFBQUEsY0FBUSxFQUFDdEIsUUFBUWdCLE1BQU0sQ0FBQ0ssSUFBSTtZQUN2Q25CLElBQUlGLE9BQU8sR0FBR0E7WUFFZCxJQUFJLENBQUNFLElBQUlxQixDQUFDLEVBQUVyQixJQUFJcUIsQ0FBQyxHQUFHckIsSUFBSW1CLElBQUksQ0FBQ0UsQ0FBQztZQUM5QixJQUFJLENBQUNyQixJQUFJc0IsaUJBQWlCLEVBQUV0QixJQUFJc0IsaUJBQWlCLEdBQUdDLElBQUFBLHlCQUFhLEVBQUN2QjtZQUVsRTs7Z0JBQU93QixJQUFBQSx3QkFBZSxFQUFDO29CQUNyQnRCLE9BQUFBO29CQUNBQyxJQUFBQTtvQkFDQU8sWUFBQUE7b0JBQ0FKLGdCQUFBQTtvQkFDQUMsZUFBQUE7b0JBQ0FDLGtCQUFBQTtvQkFDQVIsS0FBQUE7Z0JBQ0Y7OztJQUNGO1dBM0M4QkgifQ==