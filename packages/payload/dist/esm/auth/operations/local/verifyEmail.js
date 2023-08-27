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
import { APIError } from "../../../errors";
import verifyEmail from "../verifyEmail";
function localVerifyEmail(payload, options) {
    return _localVerifyEmail.apply(this, arguments);
}
function _localVerifyEmail() {
    _localVerifyEmail = _async_to_generator(function(payload, options) {
        var collectionSlug, token, req, collection;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, token = options.token;
            req = {
                payload: payload
            };
            collection = payload.collections[collectionSlug];
            if (!collection) {
                throw new APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Verify Email Operation."));
            }
            return [
                2,
                verifyEmail({
                    req: req,
                    token: token,
                    collection: collection
                })
            ];
        });
    });
    return _localVerifyEmail.apply(this, arguments);
}
export default localVerifyEmail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9jYWwvdmVyaWZ5RW1haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnO1xuaW1wb3J0IHZlcmlmeUVtYWlsIGZyb20gJy4uL3ZlcmlmeUVtYWlsJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnM8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IHtcbiAgdG9rZW46IHN0cmluZyxcbiAgY29sbGVjdGlvbjogVFxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2NhbFZlcmlmeUVtYWlsPFQgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIHBheWxvYWQ6IFBheWxvYWQsXG4gIG9wdGlvbnM6IE9wdGlvbnM8VD4sXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25TbHVnLFxuICAgIHRva2VuLFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCByZXEgPSB7XG4gICAgcGF5bG9hZCxcbiAgfSBhcyBQYXlsb2FkUmVxdWVzdDtcblxuICBjb25zdCBjb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z107XG5cbiAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKGBUaGUgY29sbGVjdGlvbiB3aXRoIHNsdWcgJHtTdHJpbmcoY29sbGVjdGlvblNsdWcpfSBjYW4ndCBiZSBmb3VuZC4gVmVyaWZ5IEVtYWlsIE9wZXJhdGlvbi5gKTtcbiAgfVxuXG4gIHJldHVybiB2ZXJpZnlFbWFpbCh7XG4gICAgcmVxLFxuICAgIHRva2VuLFxuICAgIGNvbGxlY3Rpb24sXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2NhbFZlcmlmeUVtYWlsO1xuIl0sIm5hbWVzIjpbIkFQSUVycm9yIiwidmVyaWZ5RW1haWwiLCJsb2NhbFZlcmlmeUVtYWlsIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJjb2xsZWN0aW9uU2x1ZyIsInRva2VuIiwicmVxIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25zIiwiU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBU0EsUUFBUSxRQUFRLGtCQUFrQjtBQUUzQyxPQUFPQyxpQkFBaUIsaUJBQWlCO1NBUTFCQyxpQkFDYkMsT0FBZ0IsRUFDaEJDLE9BQW1CO1dBRk5GOztTQUFBQTtJQUFBQSxvQkFBZixvQkFBQSxTQUNFQyxPQUFnQixFQUNoQkMsT0FBbUI7WUFHTEMsZ0JBQ1pDLE9BR0lDLEtBSUFDOztZQVJRSCxpQkFFVkQsUUFGRkksWUFDQUYsUUFDRUYsUUFERkU7WUFHSUMsTUFBTTtnQkFDVkosU0FBQUE7WUFDRjtZQUVNSyxhQUFhTCxRQUFRTSxXQUFXLENBQUNKLGVBQWU7WUFFdEQsSUFBSSxDQUFDRyxZQUFZO2dCQUNmLE1BQU0sSUFBSVIsU0FBUyxBQUFDLDRCQUFrRCxPQUF2QlUsT0FBT0wsaUJBQWdCO1lBQ3hFO1lBRUE7O2dCQUFPSixZQUFZO29CQUNqQk0sS0FBQUE7b0JBQ0FELE9BQUFBO29CQUNBRSxZQUFBQTtnQkFDRjs7O0lBQ0Y7V0F4QmVOOztBQTBCZixlQUFlQSxpQkFBaUIifQ==