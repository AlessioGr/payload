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
import unlock from "../unlock";
import { getDataLoader } from "../../../collections/dataloader";
import { i18nInit } from "../../../translations/init";
import { APIError } from "../../../errors";
import { setRequestContext } from "../../../express/setRequestContext";
function localUnlock(payload, options) {
    return _localUnlock.apply(this, arguments);
}
function _localUnlock() {
    _localUnlock = _async_to_generator(function(payload, options) {
        var collectionSlug, data, _options_overrideAccess, overrideAccess, _options_req, req, collection;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, data = options.data, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, _options_req = options.req, req = _options_req === void 0 ? {} : _options_req;
            setRequestContext(options.req);
            collection = payload.collections[collectionSlug];
            if (!collection) {
                throw new APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Unlock Operation."));
            }
            req.payload = payload;
            req.payloadAPI = req.payloadAPI || "local";
            req.i18n = i18nInit(payload.config.i18n);
            if (!req.t) req.t = req.i18n.t;
            if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);
            return [
                2,
                unlock({
                    data: data,
                    collection: collection,
                    overrideAccess: overrideAccess,
                    req: req
                })
            ];
        });
    });
    return _localUnlock.apply(this, arguments);
}
export default localUnlock;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9jYWwvdW5sb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgdW5sb2NrIGZyb20gJy4uL3VubG9jayc7XG5pbXBvcnQgeyBnZXREYXRhTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvZGF0YWxvYWRlcic7XG5pbXBvcnQgeyBpMThuSW5pdCB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9ucy9pbml0JztcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IHNldFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy9zZXRSZXF1ZXN0Q29udGV4dCc7XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnM8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IHtcbiAgY29sbGVjdGlvbjogVFxuICBkYXRhOiB7XG4gICAgZW1haWxcbiAgfVxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2VzczogYm9vbGVhblxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2NhbFVubG9jazxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBvcHRpb25zOiBPcHRpb25zPFQ+LFxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uU2x1ZyxcbiAgICBkYXRhLFxuICAgIG92ZXJyaWRlQWNjZXNzID0gdHJ1ZSxcbiAgICByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgfSA9IG9wdGlvbnM7XG4gIHNldFJlcXVlc3RDb250ZXh0KG9wdGlvbnMucmVxKTtcblxuICBjb25zdCBjb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z107XG5cbiAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKGBUaGUgY29sbGVjdGlvbiB3aXRoIHNsdWcgJHtTdHJpbmcoY29sbGVjdGlvblNsdWcpfSBjYW4ndCBiZSBmb3VuZC4gVW5sb2NrIE9wZXJhdGlvbi5gKTtcbiAgfVxuXG4gIHJlcS5wYXlsb2FkID0gcGF5bG9hZDtcbiAgcmVxLnBheWxvYWRBUEkgPSByZXEucGF5bG9hZEFQSSB8fCAnbG9jYWwnO1xuICByZXEuaTE4biA9IGkxOG5Jbml0KHBheWxvYWQuY29uZmlnLmkxOG4pO1xuXG4gIGlmICghcmVxLnQpIHJlcS50ID0gcmVxLmkxOG4udDtcbiAgaWYgKCFyZXEucGF5bG9hZERhdGFMb2FkZXIpIHJlcS5wYXlsb2FkRGF0YUxvYWRlciA9IGdldERhdGFMb2FkZXIocmVxKTtcblxuICByZXR1cm4gdW5sb2NrKHtcbiAgICBkYXRhLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgcmVxLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxVbmxvY2s7XG4iXSwibmFtZXMiOlsidW5sb2NrIiwiZ2V0RGF0YUxvYWRlciIsImkxOG5Jbml0IiwiQVBJRXJyb3IiLCJzZXRSZXF1ZXN0Q29udGV4dCIsImxvY2FsVW5sb2NrIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJjb2xsZWN0aW9uU2x1ZyIsImRhdGEiLCJvdmVycmlkZUFjY2VzcyIsInJlcSIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9ucyIsIlN0cmluZyIsInBheWxvYWRBUEkiLCJpMThuIiwiY29uZmlnIiwidCIsInBheWxvYWREYXRhTG9hZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsT0FBT0EsWUFBWSxZQUFZO0FBQy9CLFNBQVNDLGFBQWEsUUFBUSxrQ0FBa0M7QUFDaEUsU0FBU0MsUUFBUSxRQUFRLDZCQUE2QjtBQUN0RCxTQUFTQyxRQUFRLFFBQVEsa0JBQWtCO0FBQzNDLFNBQVNDLGlCQUFpQixRQUFRLHFDQUFxQztTQVd4REMsWUFDYkMsT0FBZ0IsRUFDaEJDLE9BQW1CO1dBRk5GOztTQUFBQTtJQUFBQSxlQUFmLG9CQUFBLFNBQ0VDLE9BQWdCLEVBQ2hCQyxPQUFtQjtZQUdMQyxnQkFDWkMsK0JBQ0FDLDhCQUNBQyxLQUlJQzs7WUFQUUosaUJBSVZELFFBSkZLLFlBQ0FILE9BR0VGLFFBSEZFLGdDQUdFRixRQUZGRyxnQkFBQUEsc0RBQWlCLCtDQUVmSCxRQURGSSxLQUFBQSxnQ0FBTSxDQUFDO1lBRVRQLGtCQUFrQkcsUUFBUUksR0FBRztZQUV2QkMsYUFBYU4sUUFBUU8sV0FBVyxDQUFDTCxlQUFlO1lBRXRELElBQUksQ0FBQ0ksWUFBWTtnQkFDZixNQUFNLElBQUlULFNBQVMsQUFBQyw0QkFBa0QsT0FBdkJXLE9BQU9OLGlCQUFnQjtZQUN4RTtZQUVBRyxJQUFJTCxPQUFPLEdBQUdBO1lBQ2RLLElBQUlJLFVBQVUsR0FBR0osSUFBSUksVUFBVSxJQUFJO1lBQ25DSixJQUFJSyxJQUFJLEdBQUdkLFNBQVNJLFFBQVFXLE1BQU0sQ0FBQ0QsSUFBSTtZQUV2QyxJQUFJLENBQUNMLElBQUlPLENBQUMsRUFBRVAsSUFBSU8sQ0FBQyxHQUFHUCxJQUFJSyxJQUFJLENBQUNFLENBQUM7WUFDOUIsSUFBSSxDQUFDUCxJQUFJUSxpQkFBaUIsRUFBRVIsSUFBSVEsaUJBQWlCLEdBQUdsQixjQUFjVTtZQUVsRTs7Z0JBQU9YLE9BQU87b0JBQ1pTLE1BQUFBO29CQUNBRyxZQUFBQTtvQkFDQUYsZ0JBQUFBO29CQUNBQyxLQUFBQTtnQkFDRjs7O0lBQ0Y7V0EvQmVOOztBQWlDZixlQUFlQSxZQUFZIn0=