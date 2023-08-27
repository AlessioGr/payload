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
import login from "../login";
import { getDataLoader } from "../../../collections/dataloader";
import { i18nInit } from "../../../translations/init";
import { APIError } from "../../../errors";
import { setRequestContext } from "../../../express/setRequestContext";
function localLogin(payload, options) {
    return _localLogin.apply(this, arguments);
}
function _localLogin() {
    _localLogin = _async_to_generator(function(payload, options) {
        var collectionSlug, _options_req, req, res, depth, locale, fallbackLocale, data, _options_overrideAccess, overrideAccess, showHiddenFields, collection, args;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, _options_req = options.req, req = _options_req === void 0 ? {} : _options_req, res = options.res, depth = options.depth, locale = options.locale, fallbackLocale = options.fallbackLocale, data = options.data, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, showHiddenFields = options.showHiddenFields;
            setRequestContext(options.req);
            collection = payload.collections[collectionSlug];
            if (!collection) {
                throw new APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Login Operation."));
            }
            req.payloadAPI = req.payloadAPI || "local";
            req.payload = payload;
            req.i18n = i18nInit(payload.config.i18n);
            req.locale = undefined;
            req.fallbackLocale = undefined;
            if (!req.t) req.t = req.i18n.t;
            if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);
            args = {
                depth: depth,
                collection: collection,
                overrideAccess: overrideAccess,
                showHiddenFields: showHiddenFields,
                data: data,
                req: req,
                res: res
            };
            if (locale) args.req.locale = locale;
            if (fallbackLocale) args.req.fallbackLocale = fallbackLocale;
            return [
                2,
                login(args)
            ];
        });
    });
    return _localLogin.apply(this, arguments);
}
export default localLogin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9jYWwvbG9naW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCBsb2dpbiwgeyBSZXN1bHQgfSBmcm9tICcuLi9sb2dpbic7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnO1xuaW1wb3J0IHsgZ2V0RGF0YUxvYWRlciB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2RhdGFsb2FkZXInO1xuaW1wb3J0IHsgaTE4bkluaXQgfSBmcm9tICcuLi8uLi8uLi90cmFuc2xhdGlvbnMvaW5pdCc7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBzZXRSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3Mvc2V0UmVxdWVzdENvbnRleHQnO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+ID0ge1xuICBjb2xsZWN0aW9uOiBUU2x1Z1xuICBkYXRhOiB7XG4gICAgZW1haWw6IHN0cmluZ1xuICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgfVxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxuICByZXM/OiBSZXNwb25zZVxuICBkZXB0aD86IG51bWJlclxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvY2FsTG9naW48VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIHBheWxvYWQ6IFBheWxvYWQsXG4gIG9wdGlvbnM6IE9wdGlvbnM8VFNsdWc+LFxuKTogUHJvbWlzZTxSZXN1bHQgJiB7IHVzZXI6IEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXSB9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uU2x1ZyxcbiAgICByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgICByZXMsXG4gICAgZGVwdGgsXG4gICAgbG9jYWxlLFxuICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgIGRhdGEsXG4gICAgb3ZlcnJpZGVBY2Nlc3MgPSB0cnVlLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gIH0gPSBvcHRpb25zO1xuICBzZXRSZXF1ZXN0Q29udGV4dChvcHRpb25zLnJlcSk7XG5cblxuICBjb25zdCBjb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z107XG5cbiAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKGBUaGUgY29sbGVjdGlvbiB3aXRoIHNsdWcgJHtTdHJpbmcoY29sbGVjdGlvblNsdWcpfSBjYW4ndCBiZSBmb3VuZC4gTG9naW4gT3BlcmF0aW9uLmApO1xuICB9XG5cbiAgcmVxLnBheWxvYWRBUEkgPSByZXEucGF5bG9hZEFQSSB8fCAnbG9jYWwnO1xuICByZXEucGF5bG9hZCA9IHBheWxvYWQ7XG4gIHJlcS5pMThuID0gaTE4bkluaXQocGF5bG9hZC5jb25maWcuaTE4bik7XG4gIHJlcS5sb2NhbGUgPSB1bmRlZmluZWQ7XG4gIHJlcS5mYWxsYmFja0xvY2FsZSA9IHVuZGVmaW5lZDtcblxuICBpZiAoIXJlcS50KSByZXEudCA9IHJlcS5pMThuLnQ7XG4gIGlmICghcmVxLnBheWxvYWREYXRhTG9hZGVyKSByZXEucGF5bG9hZERhdGFMb2FkZXIgPSBnZXREYXRhTG9hZGVyKHJlcSk7XG5cbiAgY29uc3QgYXJncyA9IHtcbiAgICBkZXB0aCxcbiAgICBjb2xsZWN0aW9uLFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgZGF0YSxcbiAgICByZXEsXG4gICAgcmVzLFxuICB9O1xuXG4gIGlmIChsb2NhbGUpIGFyZ3MucmVxLmxvY2FsZSA9IGxvY2FsZTtcbiAgaWYgKGZhbGxiYWNrTG9jYWxlKSBhcmdzLnJlcS5mYWxsYmFja0xvY2FsZSA9IGZhbGxiYWNrTG9jYWxlO1xuXG4gIHJldHVybiBsb2dpbjxUU2x1Zz4oYXJncyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsTG9naW47XG4iXSwibmFtZXMiOlsibG9naW4iLCJnZXREYXRhTG9hZGVyIiwiaTE4bkluaXQiLCJBUElFcnJvciIsInNldFJlcXVlc3RDb250ZXh0IiwibG9jYWxMb2dpbiIsInBheWxvYWQiLCJvcHRpb25zIiwiY29sbGVjdGlvblNsdWciLCJyZXEiLCJyZXMiLCJkZXB0aCIsImxvY2FsZSIsImZhbGxiYWNrTG9jYWxlIiwiZGF0YSIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsImNvbGxlY3Rpb24iLCJhcmdzIiwiY29sbGVjdGlvbnMiLCJTdHJpbmciLCJwYXlsb2FkQVBJIiwiaTE4biIsImNvbmZpZyIsInVuZGVmaW5lZCIsInQiLCJwYXlsb2FkRGF0YUxvYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU9BLFdBQXVCLFdBQVc7QUFHekMsU0FBU0MsYUFBYSxRQUFRLGtDQUFrQztBQUNoRSxTQUFTQyxRQUFRLFFBQVEsNkJBQTZCO0FBQ3RELFNBQVNDLFFBQVEsUUFBUSxrQkFBa0I7QUFDM0MsU0FBU0MsaUJBQWlCLFFBQVEscUNBQXFDO1NBaUJ4REMsV0FDYkMsT0FBZ0IsRUFDaEJDLE9BQXVCO1dBRlZGOztTQUFBQTtJQUFBQSxjQUFmLG9CQUFBLFNBQ0VDLE9BQWdCLEVBQ2hCQyxPQUF1QjtZQUdUQyw4QkFDWkMsS0FDQUMsS0FDQUMsT0FDQUMsUUFDQUMsZ0JBQ0FDLCtCQUNBQyxnQkFDQUMsa0JBS0lDLFlBZUFDOztZQTVCUVYsaUJBU1ZELFFBVEZVLDJCQVNFVixRQVJGRSxLQUFBQSxnQ0FBTSxDQUFDLGtCQUNQQyxNQU9FSCxRQVBGRyxLQUNBQyxRQU1FSixRQU5GSSxPQUNBQyxTQUtFTCxRQUxGSyxRQUNBQyxpQkFJRU4sUUFKRk0sZ0JBQ0FDLE9BR0VQLFFBSEZPLGdDQUdFUCxRQUZGUSxnQkFBQUEsc0RBQWlCLGdDQUNqQkMsbUJBQ0VULFFBREZTO1lBRUZaLGtCQUFrQkcsUUFBUUUsR0FBRztZQUd2QlEsYUFBYVgsUUFBUWEsV0FBVyxDQUFDWCxlQUFlO1lBRXRELElBQUksQ0FBQ1MsWUFBWTtnQkFDZixNQUFNLElBQUlkLFNBQVMsQUFBQyw0QkFBa0QsT0FBdkJpQixPQUFPWixpQkFBZ0I7WUFDeEU7WUFFQUMsSUFBSVksVUFBVSxHQUFHWixJQUFJWSxVQUFVLElBQUk7WUFDbkNaLElBQUlILE9BQU8sR0FBR0E7WUFDZEcsSUFBSWEsSUFBSSxHQUFHcEIsU0FBU0ksUUFBUWlCLE1BQU0sQ0FBQ0QsSUFBSTtZQUN2Q2IsSUFBSUcsTUFBTSxHQUFHWTtZQUNiZixJQUFJSSxjQUFjLEdBQUdXO1lBRXJCLElBQUksQ0FBQ2YsSUFBSWdCLENBQUMsRUFBRWhCLElBQUlnQixDQUFDLEdBQUdoQixJQUFJYSxJQUFJLENBQUNHLENBQUM7WUFDOUIsSUFBSSxDQUFDaEIsSUFBSWlCLGlCQUFpQixFQUFFakIsSUFBSWlCLGlCQUFpQixHQUFHekIsY0FBY1E7WUFFNURTLE9BQU87Z0JBQ1hQLE9BQUFBO2dCQUNBTSxZQUFBQTtnQkFDQUYsZ0JBQUFBO2dCQUNBQyxrQkFBQUE7Z0JBQ0FGLE1BQUFBO2dCQUNBTCxLQUFBQTtnQkFDQUMsS0FBQUE7WUFDRjtZQUVBLElBQUlFLFFBQVFNLEtBQUtULEdBQUcsQ0FBQ0csTUFBTSxHQUFHQTtZQUM5QixJQUFJQyxnQkFBZ0JLLEtBQUtULEdBQUcsQ0FBQ0ksY0FBYyxHQUFHQTtZQUU5Qzs7Z0JBQU9iLE1BQWFrQjs7O0lBQ3RCO1dBL0NlYjs7QUFpRGYsZUFBZUEsV0FBVyJ9