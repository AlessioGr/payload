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
import forgotPassword from "../forgotPassword";
import { getDataLoader } from "../../../collections/dataloader";
import { i18nInit } from "../../../translations/init";
import { APIError } from "../../../errors";
import { setRequestContext } from "../../../express/setRequestContext";
function localForgotPassword(payload, options) {
    return _localForgotPassword.apply(this, arguments);
}
function _localForgotPassword() {
    _localForgotPassword = _async_to_generator(function(payload, options) {
        var collectionSlug, data, expiration, disableEmail, _options_req, req, collection;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, data = options.data, expiration = options.expiration, disableEmail = options.disableEmail, _options_req = options.req, req = _options_req === void 0 ? {} : _options_req;
            setRequestContext(options.req);
            collection = payload.collections[collectionSlug];
            if (!collection) {
                throw new APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Forgot Password Operation."));
            }
            req.payloadAPI = req.payloadAPI || "local";
            req.payload = payload;
            req.i18n = i18nInit(payload.config.i18n);
            if (!req.t) req.t = req.i18n.t;
            if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);
            return [
                2,
                forgotPassword({
                    data: data,
                    collection: collection,
                    disableEmail: disableEmail,
                    expiration: expiration,
                    req: req
                })
            ];
        });
    });
    return _localForgotPassword.apply(this, arguments);
}
export default localForgotPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9jYWwvZm9yZ290UGFzc3dvcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCBmb3Jnb3RQYXNzd29yZCwgeyBSZXN1bHQgfSBmcm9tICcuLi9mb3Jnb3RQYXNzd29yZCc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgeyBnZXREYXRhTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvZGF0YWxvYWRlcic7XG5pbXBvcnQgeyBpMThuSW5pdCB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9ucy9pbml0JztcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IHNldFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy9zZXRSZXF1ZXN0Q29udGV4dCc7XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnM8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IHtcbiAgY29sbGVjdGlvbjogVFxuICBkYXRhOiB7XG4gICAgZW1haWw6IHN0cmluZ1xuICB9XG4gIGV4cGlyYXRpb24/OiBudW1iZXJcbiAgZGlzYWJsZUVtYWlsPzogYm9vbGVhblxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2NhbEZvcmdvdFBhc3N3b3JkPFQgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIHBheWxvYWQ6IFBheWxvYWQsXG4gIG9wdGlvbnM6IE9wdGlvbnM8VD4sXG4pOiBQcm9taXNlPFJlc3VsdD4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbjogY29sbGVjdGlvblNsdWcsXG4gICAgZGF0YSxcbiAgICBleHBpcmF0aW9uLFxuICAgIGRpc2FibGVFbWFpbCxcbiAgICByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgfSA9IG9wdGlvbnM7XG4gIHNldFJlcXVlc3RDb250ZXh0KG9wdGlvbnMucmVxKTtcblxuICBjb25zdCBjb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z107XG5cbiAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKGBUaGUgY29sbGVjdGlvbiB3aXRoIHNsdWcgJHtTdHJpbmcoY29sbGVjdGlvblNsdWcpfSBjYW4ndCBiZSBmb3VuZC4gRm9yZ290IFBhc3N3b3JkIE9wZXJhdGlvbi5gKTtcbiAgfVxuXG4gIHJlcS5wYXlsb2FkQVBJID0gcmVxLnBheWxvYWRBUEkgfHwgJ2xvY2FsJztcbiAgcmVxLnBheWxvYWQgPSBwYXlsb2FkO1xuICByZXEuaTE4biA9IGkxOG5Jbml0KHBheWxvYWQuY29uZmlnLmkxOG4pO1xuXG4gIGlmICghcmVxLnQpIHJlcS50ID0gcmVxLmkxOG4udDtcbiAgaWYgKCFyZXEucGF5bG9hZERhdGFMb2FkZXIpIHJlcS5wYXlsb2FkRGF0YUxvYWRlciA9IGdldERhdGFMb2FkZXIocmVxKTtcblxuICByZXR1cm4gZm9yZ290UGFzc3dvcmQoe1xuICAgIGRhdGEsXG4gICAgY29sbGVjdGlvbixcbiAgICBkaXNhYmxlRW1haWwsXG4gICAgZXhwaXJhdGlvbixcbiAgICByZXEsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2NhbEZvcmdvdFBhc3N3b3JkO1xuIl0sIm5hbWVzIjpbImZvcmdvdFBhc3N3b3JkIiwiZ2V0RGF0YUxvYWRlciIsImkxOG5Jbml0IiwiQVBJRXJyb3IiLCJzZXRSZXF1ZXN0Q29udGV4dCIsImxvY2FsRm9yZ290UGFzc3dvcmQiLCJwYXlsb2FkIiwib3B0aW9ucyIsImNvbGxlY3Rpb25TbHVnIiwiZGF0YSIsImV4cGlyYXRpb24iLCJkaXNhYmxlRW1haWwiLCJyZXEiLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvbnMiLCJTdHJpbmciLCJwYXlsb2FkQVBJIiwiaTE4biIsImNvbmZpZyIsInQiLCJwYXlsb2FkRGF0YUxvYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU9BLG9CQUFnQyxvQkFBb0I7QUFFM0QsU0FBU0MsYUFBYSxRQUFRLGtDQUFrQztBQUNoRSxTQUFTQyxRQUFRLFFBQVEsNkJBQTZCO0FBQ3RELFNBQVNDLFFBQVEsUUFBUSxrQkFBa0I7QUFDM0MsU0FBU0MsaUJBQWlCLFFBQVEscUNBQXFDO1NBWXhEQyxvQkFDYkMsT0FBZ0IsRUFDaEJDLE9BQW1CO1dBRk5GOztTQUFBQTtJQUFBQSx1QkFBZixvQkFBQSxTQUNFQyxPQUFnQixFQUNoQkMsT0FBbUI7WUFHTEMsZ0JBQ1pDLE1BQ0FDLFlBQ0FDLDRCQUNBQyxLQUlJQzs7WUFSUUwsaUJBS1ZELFFBTEZNLFlBQ0FKLE9BSUVGLFFBSkZFLE1BQ0FDLGFBR0VILFFBSEZHLFlBQ0FDLGVBRUVKLFFBRkZJLDZCQUVFSixRQURGSyxLQUFBQSxnQ0FBTSxDQUFDO1lBRVRSLGtCQUFrQkcsUUFBUUssR0FBRztZQUV2QkMsYUFBYVAsUUFBUVEsV0FBVyxDQUFDTixlQUFlO1lBRXRELElBQUksQ0FBQ0ssWUFBWTtnQkFDZixNQUFNLElBQUlWLFNBQVMsQUFBQyw0QkFBa0QsT0FBdkJZLE9BQU9QLGlCQUFnQjtZQUN4RTtZQUVBSSxJQUFJSSxVQUFVLEdBQUdKLElBQUlJLFVBQVUsSUFBSTtZQUNuQ0osSUFBSU4sT0FBTyxHQUFHQTtZQUNkTSxJQUFJSyxJQUFJLEdBQUdmLFNBQVNJLFFBQVFZLE1BQU0sQ0FBQ0QsSUFBSTtZQUV2QyxJQUFJLENBQUNMLElBQUlPLENBQUMsRUFBRVAsSUFBSU8sQ0FBQyxHQUFHUCxJQUFJSyxJQUFJLENBQUNFLENBQUM7WUFDOUIsSUFBSSxDQUFDUCxJQUFJUSxpQkFBaUIsRUFBRVIsSUFBSVEsaUJBQWlCLEdBQUduQixjQUFjVztZQUVsRTs7Z0JBQU9aLGVBQWU7b0JBQ3BCUyxNQUFBQTtvQkFDQUksWUFBQUE7b0JBQ0FGLGNBQUFBO29CQUNBRCxZQUFBQTtvQkFDQUUsS0FBQUE7Z0JBQ0Y7OztJQUNGO1dBakNlUDs7QUFtQ2YsZUFBZUEsb0JBQW9CIn0=