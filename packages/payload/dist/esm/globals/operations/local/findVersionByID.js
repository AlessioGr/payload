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
import { getDataLoader } from "../../../collections/dataloader";
import findVersionByID from "../findVersionByID";
import { i18nInit } from "../../../translations/init";
import { APIError } from "../../../errors";
import { setRequestContext } from "../../../express/setRequestContext";
export default function findVersionByIDLocal(payload, options) {
    return _findVersionByIDLocal.apply(this, arguments);
}
function _findVersionByIDLocal() {
    _findVersionByIDLocal = _async_to_generator(function(payload, options) {
        var _payload_config_localization, globalSlug, depth, id, _options_locale, locale, _options_fallbackLocale, fallbackLocale, user, _options_overrideAccess, overrideAccess, _options_disableErrors, disableErrors, showHiddenFields, globalConfig, i18n, req;
        return _ts_generator(this, function(_state) {
            globalSlug = options.slug, depth = options.depth, id = options.id, _options_locale = options.locale, locale = _options_locale === void 0 ? payload.config.localization ? (_payload_config_localization = payload.config.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, _options_disableErrors = options.disableErrors, disableErrors = _options_disableErrors === void 0 ? false : _options_disableErrors, showHiddenFields = options.showHiddenFields;
            globalConfig = payload.globals.config.find(function(config) {
                return config.slug === globalSlug;
            });
            i18n = i18nInit(payload.config.i18n);
            if (!globalConfig) {
                throw new APIError("The global with slug ".concat(String(globalSlug), " can't be found."));
            }
            req = {
                user: user,
                payloadAPI: "local",
                locale: locale,
                fallbackLocale: fallbackLocale,
                payload: payload,
                i18n: i18n,
                t: i18n.t
            };
            setRequestContext(req);
            if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);
            return [
                2,
                findVersionByID({
                    depth: depth,
                    id: id,
                    globalConfig: globalConfig,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvbG9jYWwvZmluZFZlcnNpb25CeUlELnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8uLi9wYXlsb2FkJztcbmltcG9ydCB7IGdldERhdGFMb2FkZXIgfSBmcm9tICcuLi8uLi8uLi9jb2xsZWN0aW9ucy9kYXRhbG9hZGVyJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFR5cGVXaXRoVmVyc2lvbiB9IGZyb20gJy4uLy4uLy4uL3ZlcnNpb25zL3R5cGVzJztcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi4vZmluZFZlcnNpb25CeUlEJztcbmltcG9ydCB7IGkxOG5Jbml0IH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb25zL2luaXQnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgc2V0UmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3NldFJlcXVlc3RDb250ZXh0JztcblxuZXhwb3J0IHR5cGUgT3B0aW9uczxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXT4gPSB7XG4gIHNsdWc6IFRcbiAgaWQ6IHN0cmluZ1xuICBkZXB0aD86IG51bWJlclxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgdXNlcj86IERvY3VtZW50XG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBzaG93SGlkZGVuRmllbGRzPzogYm9vbGVhblxuICBkaXNhYmxlRXJyb3JzPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmaW5kVmVyc2lvbkJ5SURMb2NhbDxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXT4oXG4gIHBheWxvYWQ6IFBheWxvYWQsXG4gIG9wdGlvbnM6IE9wdGlvbnM8VD4sXG4pOiBQcm9taXNlPFR5cGVXaXRoVmVyc2lvbjxHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddW1RdPj4ge1xuICBjb25zdCB7XG4gICAgc2x1ZzogZ2xvYmFsU2x1ZyxcbiAgICBkZXB0aCxcbiAgICBpZCxcbiAgICBsb2NhbGUgPSBwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24gPyBwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24/LmRlZmF1bHRMb2NhbGUgOiBudWxsLFxuICAgIGZhbGxiYWNrTG9jYWxlID0gbnVsbCxcbiAgICB1c2VyLFxuICAgIG92ZXJyaWRlQWNjZXNzID0gdHJ1ZSxcbiAgICBkaXNhYmxlRXJyb3JzID0gZmFsc2UsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgZ2xvYmFsQ29uZmlnID0gcGF5bG9hZC5nbG9iYWxzLmNvbmZpZy5maW5kKChjb25maWcpID0+IGNvbmZpZy5zbHVnID09PSBnbG9iYWxTbHVnKTtcbiAgY29uc3QgaTE4biA9IGkxOG5Jbml0KHBheWxvYWQuY29uZmlnLmkxOG4pO1xuXG4gIGlmICghZ2xvYmFsQ29uZmlnKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKGBUaGUgZ2xvYmFsIHdpdGggc2x1ZyAke1N0cmluZyhnbG9iYWxTbHVnKX0gY2FuJ3QgYmUgZm91bmQuYCk7XG4gIH1cblxuICBjb25zdCByZXEgPSB7XG4gICAgdXNlcixcbiAgICBwYXlsb2FkQVBJOiAnbG9jYWwnLFxuICAgIGxvY2FsZSxcbiAgICBmYWxsYmFja0xvY2FsZSxcbiAgICBwYXlsb2FkLFxuICAgIGkxOG4sXG4gICAgdDogaTE4bi50LFxuICB9IGFzIFBheWxvYWRSZXF1ZXN0O1xuICBzZXRSZXF1ZXN0Q29udGV4dChyZXEpO1xuXG4gIGlmICghcmVxLnBheWxvYWREYXRhTG9hZGVyKSByZXEucGF5bG9hZERhdGFMb2FkZXIgPSBnZXREYXRhTG9hZGVyKHJlcSk7XG5cbiAgcmV0dXJuIGZpbmRWZXJzaW9uQnlJRCh7XG4gICAgZGVwdGgsXG4gICAgaWQsXG4gICAgZ2xvYmFsQ29uZmlnLFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIGRpc2FibGVFcnJvcnMsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICByZXEsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImdldERhdGFMb2FkZXIiLCJmaW5kVmVyc2lvbkJ5SUQiLCJpMThuSW5pdCIsIkFQSUVycm9yIiwic2V0UmVxdWVzdENvbnRleHQiLCJmaW5kVmVyc2lvbkJ5SURMb2NhbCIsInBheWxvYWQiLCJvcHRpb25zIiwiZ2xvYmFsU2x1ZyIsImRlcHRoIiwiaWQiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsInVzZXIiLCJvdmVycmlkZUFjY2VzcyIsImRpc2FibGVFcnJvcnMiLCJzaG93SGlkZGVuRmllbGRzIiwiZ2xvYmFsQ29uZmlnIiwiaTE4biIsInJlcSIsInNsdWciLCJjb25maWciLCJsb2NhbGl6YXRpb24iLCJkZWZhdWx0TG9jYWxlIiwiZ2xvYmFscyIsImZpbmQiLCJTdHJpbmciLCJwYXlsb2FkQVBJIiwidCIsInBheWxvYWREYXRhTG9hZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsYUFBYSxRQUFRLGtDQUFrQztBQUloRSxPQUFPQyxxQkFBcUIscUJBQXFCO0FBQ2pELFNBQVNDLFFBQVEsUUFBUSw2QkFBNkI7QUFDdEQsU0FBU0MsUUFBUSxRQUFRLGtCQUFrQjtBQUMzQyxTQUFTQyxpQkFBaUIsUUFBUSxxQ0FBcUM7QUFjdkUsd0JBQThCQyxxQkFDNUJDLE9BQWdCLEVBQ2hCQyxPQUFtQjtXQUZTRjs7U0FBQUE7SUFBQUEsd0JBQWYsb0JBQUEsU0FDYkMsT0FBZ0IsRUFDaEJDLE9BQW1CO1lBTXNCRCw4QkFIakNFLFlBQ05DLE9BQ0FDLHFCQUNBQyxpQ0FDQUMsZ0JBQ0FDLCtCQUNBQyx3Q0FDQUMsZUFDQUMsa0JBR0lDLGNBQ0FDLE1BTUFDOztZQWxCRVgsYUFTSkQsUUFURmEsTUFDQVgsUUFRRUYsUUFSRkUsT0FDQUMsS0FPRUgsUUFQRkcsc0JBT0VILFFBTkZJLFFBQUFBLHNDQUFTTCxRQUFRZSxNQUFNLENBQUNDLFlBQVksSUFBR2hCLCtCQUFBQSxRQUFRZSxNQUFNLENBQUNDLFlBQVksY0FBM0JoQixtREFBQUEsNkJBQTZCaUIsYUFBYSxHQUFHLGtEQU1sRmhCLFFBTEZLLGdCQUFBQSxzREFBaUIsZ0NBQ2pCQyxPQUlFTixRQUpGTSxnQ0FJRU4sUUFIRk8sZ0JBQUFBLHNEQUFpQix5REFHZlAsUUFGRlEsZUFBQUEsb0RBQWdCLGdDQUNoQkMsbUJBQ0VULFFBREZTO1lBR0lDLGVBQWVYLFFBQVFrQixPQUFPLENBQUNILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLFNBQUNKO3VCQUFXQSxPQUFPRCxJQUFJLEtBQUtaOztZQUN2RVUsT0FBT2hCLFNBQVNJLFFBQVFlLE1BQU0sQ0FBQ0gsSUFBSTtZQUV6QyxJQUFJLENBQUNELGNBQWM7Z0JBQ2pCLE1BQU0sSUFBSWQsU0FBUyxBQUFDLHdCQUEwQyxPQUFuQnVCLE9BQU9sQixhQUFZO1lBQ2hFO1lBRU1XLE1BQU07Z0JBQ1ZOLE1BQUFBO2dCQUNBYyxZQUFZO2dCQUNaaEIsUUFBQUE7Z0JBQ0FDLGdCQUFBQTtnQkFDQU4sU0FBQUE7Z0JBQ0FZLE1BQUFBO2dCQUNBVSxHQUFHVixLQUFLVSxDQUFDO1lBQ1g7WUFDQXhCLGtCQUFrQmU7WUFFbEIsSUFBSSxDQUFDQSxJQUFJVSxpQkFBaUIsRUFBRVYsSUFBSVUsaUJBQWlCLEdBQUc3QixjQUFjbUI7WUFFbEU7O2dCQUFPbEIsZ0JBQWdCO29CQUNyQlEsT0FBQUE7b0JBQ0FDLElBQUFBO29CQUNBTyxjQUFBQTtvQkFDQUgsZ0JBQUFBO29CQUNBQyxlQUFBQTtvQkFDQUMsa0JBQUFBO29CQUNBRyxLQUFBQTtnQkFDRjs7O0lBQ0Y7V0E3QzhCZCJ9