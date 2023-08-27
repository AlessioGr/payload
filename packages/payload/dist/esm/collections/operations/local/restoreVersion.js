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
import { getDataLoader } from "../../dataloader";
import restoreVersion from "../restoreVersion";
import { i18nInit } from "../../../translations/init";
import { APIError } from "../../../errors";
import { setRequestContext } from "../../../express/setRequestContext";
export default function restoreVersionLocal(payload, options) {
    return _restoreVersionLocal.apply(this, arguments);
}
function _restoreVersionLocal() {
    _restoreVersionLocal = _async_to_generator(function(payload, options) {
        var _payload_config_localization, collectionSlug, depth, _options_locale, locale, _options_fallbackLocale, fallbackLocale, id, user, _options_overrideAccess, overrideAccess, showHiddenFields, context, collection, i18n, req, args;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, depth = options.depth, _options_locale = options.locale, locale = _options_locale === void 0 ? payload.config.localization ? (_payload_config_localization = payload.config.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, id = options.id, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, showHiddenFields = options.showHiddenFields, context = options.context;
            collection = payload.collections[collectionSlug];
            if (!collection) {
                throw new APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Restore Version Operation."));
            }
            i18n = i18nInit(payload.config.i18n);
            req = {
                user: user,
                payloadAPI: "local",
                locale: locale,
                fallbackLocale: fallbackLocale,
                payload: payload,
                i18n: i18n,
                t: i18n.t
            };
            setRequestContext(req, context);
            if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);
            args = {
                payload: payload,
                depth: depth,
                collection: collection,
                overrideAccess: overrideAccess,
                id: id,
                showHiddenFields: showHiddenFields,
                req: req
            };
            return [
                2,
                restoreVersion(args)
            ];
        });
    });
    return _restoreVersionLocal.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL3Jlc3RvcmVWZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8uLi9wYXlsb2FkJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0LCBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBnZXREYXRhTG9hZGVyIH0gZnJvbSAnLi4vLi4vZGF0YWxvYWRlcic7XG5pbXBvcnQgcmVzdG9yZVZlcnNpb24gZnJvbSAnLi4vcmVzdG9yZVZlcnNpb24nO1xuaW1wb3J0IHsgaTE4bkluaXQgfSBmcm9tICcuLi8uLi8uLi90cmFuc2xhdGlvbnMvaW5pdCc7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBzZXRSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3Mvc2V0UmVxdWVzdENvbnRleHQnO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zPFQgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4gPSB7XG4gIGNvbGxlY3Rpb246IFRcbiAgaWQ6IHN0cmluZ1xuICBkZXB0aD86IG51bWJlclxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgdXNlcj86IERvY3VtZW50XG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBzaG93SGlkZGVuRmllbGRzPzogYm9vbGVhblxuICBkcmFmdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIGNvbnRleHQsIHdoaWNoIHdpbGwgdGhlbiBiZSBwYXNzZWQgdG8gcmVxLmNvbnRleHQsIHdoaWNoIGNhbiBiZSByZWFkIGJ5IGhvb2tzXG4gICAqL1xuICBjb250ZXh0PzogUmVxdWVzdENvbnRleHQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVWZXJzaW9uTG9jYWw8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgcGF5bG9hZDogUGF5bG9hZCxcbiAgb3B0aW9uczogT3B0aW9uczxUPixcbik6IFByb21pc2U8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVF0+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25TbHVnLFxuICAgIGRlcHRoLFxuICAgIGxvY2FsZSA9IHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbiA/IHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbj8uZGVmYXVsdExvY2FsZSA6IG51bGwsXG4gICAgZmFsbGJhY2tMb2NhbGUgPSBudWxsLFxuICAgIGlkLFxuICAgIHVzZXIsXG4gICAgb3ZlcnJpZGVBY2Nlc3MgPSB0cnVlLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgY29udGV4dCxcbiAgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgY29sbGVjdGlvbiA9IHBheWxvYWQuY29sbGVjdGlvbnNbY29sbGVjdGlvblNsdWddO1xuXG4gIGlmICghY29sbGVjdGlvbikge1xuICAgIHRocm93IG5ldyBBUElFcnJvcihgVGhlIGNvbGxlY3Rpb24gd2l0aCBzbHVnICR7U3RyaW5nKGNvbGxlY3Rpb25TbHVnKX0gY2FuJ3QgYmUgZm91bmQuIFJlc3RvcmUgVmVyc2lvbiBPcGVyYXRpb24uYCk7XG4gIH1cblxuICBjb25zdCBpMThuID0gaTE4bkluaXQocGF5bG9hZC5jb25maWcuaTE4bik7XG4gIGNvbnN0IHJlcSA9IHtcbiAgICB1c2VyLFxuICAgIHBheWxvYWRBUEk6ICdsb2NhbCcsXG4gICAgbG9jYWxlLFxuICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgIHBheWxvYWQsXG4gICAgaTE4bixcbiAgICB0OiBpMThuLnQsXG4gIH0gYXMgUGF5bG9hZFJlcXVlc3Q7XG4gIHNldFJlcXVlc3RDb250ZXh0KHJlcSwgY29udGV4dCk7XG5cbiAgaWYgKCFyZXEucGF5bG9hZERhdGFMb2FkZXIpIHJlcS5wYXlsb2FkRGF0YUxvYWRlciA9IGdldERhdGFMb2FkZXIocmVxKTtcblxuICBjb25zdCBhcmdzID0ge1xuICAgIHBheWxvYWQsXG4gICAgZGVwdGgsXG4gICAgY29sbGVjdGlvbixcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBpZCxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIHJlcSxcbiAgfTtcblxuICByZXR1cm4gcmVzdG9yZVZlcnNpb24oYXJncyk7XG59XG4iXSwibmFtZXMiOlsiZ2V0RGF0YUxvYWRlciIsInJlc3RvcmVWZXJzaW9uIiwiaTE4bkluaXQiLCJBUElFcnJvciIsInNldFJlcXVlc3RDb250ZXh0IiwicmVzdG9yZVZlcnNpb25Mb2NhbCIsInBheWxvYWQiLCJvcHRpb25zIiwiY29sbGVjdGlvblNsdWciLCJkZXB0aCIsImxvY2FsZSIsImZhbGxiYWNrTG9jYWxlIiwiaWQiLCJ1c2VyIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwiY29udGV4dCIsImNvbGxlY3Rpb24iLCJpMThuIiwicmVxIiwiYXJncyIsImNvbmZpZyIsImxvY2FsaXphdGlvbiIsImRlZmF1bHRMb2NhbGUiLCJjb2xsZWN0aW9ucyIsIlN0cmluZyIsInBheWxvYWRBUEkiLCJ0IiwicGF5bG9hZERhdGFMb2FkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxTQUFTQSxhQUFhLFFBQVEsbUJBQW1CO0FBQ2pELE9BQU9DLG9CQUFvQixvQkFBb0I7QUFDL0MsU0FBU0MsUUFBUSxRQUFRLDZCQUE2QjtBQUN0RCxTQUFTQyxRQUFRLFFBQVEsa0JBQWtCO0FBQzNDLFNBQVNDLGlCQUFpQixRQUFRLHFDQUFxQztBQWtCdkUsd0JBQThCQyxvQkFDNUJDLE9BQWdCLEVBQ2hCQyxPQUFtQjtXQUZTRjs7U0FBQUE7SUFBQUEsdUJBQWYsb0JBQUEsU0FDYkMsT0FBZ0IsRUFDaEJDLE9BQW1CO1lBS3NCRCw4QkFGM0JFLGdCQUNaQyx3QkFDQUMsaUNBQ0FDLGdCQUNBQyxJQUNBQywrQkFDQUMsZ0JBQ0FDLGtCQUNBQyxTQUdJQyxZQU1BQyxNQUNBQyxLQWFBQzs7WUEvQlFaLGlCQVNWRCxRQVRGVSxZQUNBUixRQVFFRixRQVJGRSx5QkFRRUYsUUFQRkcsUUFBQUEsc0NBQVNKLFFBQVFlLE1BQU0sQ0FBQ0MsWUFBWSxJQUFHaEIsK0JBQUFBLFFBQVFlLE1BQU0sQ0FBQ0MsWUFBWSxjQUEzQmhCLG1EQUFBQSw2QkFBNkJpQixhQUFhLEdBQUcsa0RBT2xGaEIsUUFORkksZ0JBQUFBLHNEQUFpQixnQ0FDakJDLEtBS0VMLFFBTEZLLElBQ0FDLE9BSUVOLFFBSkZNLGdDQUlFTixRQUhGTyxnQkFBQUEsc0RBQWlCLGdDQUNqQkMsbUJBRUVSLFFBRkZRLGtCQUNBQyxVQUNFVCxRQURGUztZQUdJQyxhQUFhWCxRQUFRa0IsV0FBVyxDQUFDaEIsZUFBZTtZQUV0RCxJQUFJLENBQUNTLFlBQVk7Z0JBQ2YsTUFBTSxJQUFJZCxTQUFTLEFBQUMsNEJBQWtELE9BQXZCc0IsT0FBT2pCLGlCQUFnQjtZQUN4RTtZQUVNVSxPQUFPaEIsU0FBU0ksUUFBUWUsTUFBTSxDQUFDSCxJQUFJO1lBQ25DQyxNQUFNO2dCQUNWTixNQUFBQTtnQkFDQWEsWUFBWTtnQkFDWmhCLFFBQUFBO2dCQUNBQyxnQkFBQUE7Z0JBQ0FMLFNBQUFBO2dCQUNBWSxNQUFBQTtnQkFDQVMsR0FBR1QsS0FBS1MsQ0FBQztZQUNYO1lBQ0F2QixrQkFBa0JlLEtBQUtIO1lBRXZCLElBQUksQ0FBQ0csSUFBSVMsaUJBQWlCLEVBQUVULElBQUlTLGlCQUFpQixHQUFHNUIsY0FBY21CO1lBRTVEQyxPQUFPO2dCQUNYZCxTQUFBQTtnQkFDQUcsT0FBQUE7Z0JBQ0FRLFlBQUFBO2dCQUNBSCxnQkFBQUE7Z0JBQ0FGLElBQUFBO2dCQUNBRyxrQkFBQUE7Z0JBQ0FJLEtBQUFBO1lBQ0Y7WUFFQTs7Z0JBQU9sQixlQUFlbUI7OztJQUN4QjtXQS9DOEJmIn0=