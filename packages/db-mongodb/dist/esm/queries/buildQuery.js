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
import { QueryError } from "payload/errors";
import { parseParams } from "./parseParams";
// This plugin asynchronously builds a list of Mongoose query constraints
// which can then be used in subsequent Mongoose queries.
var getBuildQueryPlugin = function() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, collectionSlug = _ref.collectionSlug, versionsFields = _ref.versionsFields;
    return function buildQueryPlugin(schema) {
        var modifiedSchema = schema;
        function buildQuery(_) {
            return _buildQuery.apply(this, arguments);
        }
        function _buildQuery() {
            _buildQuery = _async_to_generator(function(param) {
                var payload, locale, where, globalSlug, fields, globalConfig, collectionConfig, errors, result;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            payload = param.payload, locale = param.locale, where = param.where, globalSlug = param.globalSlug;
                            fields = versionsFields;
                            if (!fields) {
                                if (globalSlug) {
                                    globalConfig = payload.globals.config.find(function(param) {
                                        var slug = param.slug;
                                        return slug === globalSlug;
                                    });
                                    fields = globalConfig.fields;
                                }
                                if (collectionSlug) {
                                    collectionConfig = payload.collections[collectionSlug].config;
                                    fields = collectionConfig.fields;
                                }
                            }
                            errors = [];
                            return [
                                4,
                                parseParams({
                                    collectionSlug: collectionSlug,
                                    fields: fields,
                                    globalSlug: globalSlug,
                                    payload: payload,
                                    locale: locale,
                                    where: where
                                })
                            ];
                        case 1:
                            result = _state.sent();
                            if (errors.length > 0) {
                                throw new QueryError(errors);
                            }
                            return [
                                2,
                                result
                            ];
                    }
                });
            });
            return _buildQuery.apply(this, arguments);
        }
        modifiedSchema.statics.buildQuery = buildQuery;
    };
};
export default getBuildQueryPlugin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9xdWVyaWVzL2J1aWxkUXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2hlcmUsIEZpZWxkIH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgeyBRdWVyeUVycm9yIH0gZnJvbSAncGF5bG9hZC9lcnJvcnMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJ3BheWxvYWQnO1xuaW1wb3J0IHsgcGFyc2VQYXJhbXMgfSBmcm9tICcuL3BhcnNlUGFyYW1zJztcblxudHlwZSBHZXRCdWlsZFF1ZXJ5UGx1Z2luQXJncyA9IHtcbiAgY29sbGVjdGlvblNsdWc/OiBzdHJpbmdcbiAgdmVyc2lvbnNGaWVsZHM/OiBGaWVsZFtdXG59XG5cbmV4cG9ydCB0eXBlIEJ1aWxkUXVlcnlBcmdzID0ge1xuICBwYXlsb2FkOiBQYXlsb2FkXG4gIGxvY2FsZT86IHN0cmluZ1xuICB3aGVyZTogV2hlcmVcbiAgZ2xvYmFsU2x1Zz86IHN0cmluZ1xufVxuXG4vLyBUaGlzIHBsdWdpbiBhc3luY2hyb25vdXNseSBidWlsZHMgYSBsaXN0IG9mIE1vbmdvb3NlIHF1ZXJ5IGNvbnN0cmFpbnRzXG4vLyB3aGljaCBjYW4gdGhlbiBiZSB1c2VkIGluIHN1YnNlcXVlbnQgTW9uZ29vc2UgcXVlcmllcy5cbmNvbnN0IGdldEJ1aWxkUXVlcnlQbHVnaW4gPSAoe1xuICBjb2xsZWN0aW9uU2x1ZyxcbiAgdmVyc2lvbnNGaWVsZHMsXG59OiBHZXRCdWlsZFF1ZXJ5UGx1Z2luQXJncyA9IHt9KSA9PiB7XG4gIHJldHVybiBmdW5jdGlvbiBidWlsZFF1ZXJ5UGx1Z2luKHNjaGVtYSkge1xuICAgIGNvbnN0IG1vZGlmaWVkU2NoZW1hID0gc2NoZW1hO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGJ1aWxkUXVlcnkoeyBwYXlsb2FkLCBsb2NhbGUsIHdoZXJlLCBnbG9iYWxTbHVnIH06IEJ1aWxkUXVlcnlBcmdzKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICAgICAgbGV0IGZpZWxkcyA9IHZlcnNpb25zRmllbGRzO1xuICAgICAgaWYgKCFmaWVsZHMpIHtcbiAgICAgICAgaWYgKGdsb2JhbFNsdWcpIHtcbiAgICAgICAgICBjb25zdCBnbG9iYWxDb25maWcgPSBwYXlsb2FkLmdsb2JhbHMuY29uZmlnLmZpbmQoKHsgc2x1ZyB9KSA9PiBzbHVnID09PSBnbG9iYWxTbHVnKTtcbiAgICAgICAgICBmaWVsZHMgPSBnbG9iYWxDb25maWcuZmllbGRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xsZWN0aW9uU2x1Zykge1xuICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25Db25maWcgPSBwYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25TbHVnXS5jb25maWc7XG4gICAgICAgICAgZmllbGRzID0gY29sbGVjdGlvbkNvbmZpZy5maWVsZHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGFyc2VQYXJhbXMoe1xuICAgICAgICBjb2xsZWN0aW9uU2x1ZyxcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBnbG9iYWxTbHVnLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHdoZXJlLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgUXVlcnlFcnJvcihlcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBtb2RpZmllZFNjaGVtYS5zdGF0aWNzLmJ1aWxkUXVlcnkgPSBidWlsZFF1ZXJ5O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0QnVpbGRRdWVyeVBsdWdpbjtcbiJdLCJuYW1lcyI6WyJRdWVyeUVycm9yIiwicGFyc2VQYXJhbXMiLCJnZXRCdWlsZFF1ZXJ5UGx1Z2luIiwiY29sbGVjdGlvblNsdWciLCJ2ZXJzaW9uc0ZpZWxkcyIsImJ1aWxkUXVlcnlQbHVnaW4iLCJzY2hlbWEiLCJtb2RpZmllZFNjaGVtYSIsImJ1aWxkUXVlcnkiLCJwYXlsb2FkIiwibG9jYWxlIiwid2hlcmUiLCJnbG9iYWxTbHVnIiwiZmllbGRzIiwiZ2xvYmFsQ29uZmlnIiwiY29sbGVjdGlvbkNvbmZpZyIsImVycm9ycyIsInJlc3VsdCIsImdsb2JhbHMiLCJjb25maWciLCJmaW5kIiwic2x1ZyIsImNvbGxlY3Rpb25zIiwibGVuZ3RoIiwic3RhdGljcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVNBLFVBQVUsUUFBUSxpQkFBaUI7QUFFNUMsU0FBU0MsV0FBVyxRQUFRLGdCQUFnQjtBQWM1Qyx5RUFBeUU7QUFDekUseURBQXlEO0FBQ3pELElBQU1DLHNCQUFzQjtnRkFHQyxDQUFDLEdBRjVCQyxzQkFBQUEsZ0JBQ0FDLHNCQUFBQTtJQUVBLE9BQU8sU0FBU0MsaUJBQWlCQyxNQUFNO1FBQ3JDLElBQU1DLGlCQUFpQkQ7aUJBQ1JFLFdBQVcsQ0FBc0Q7bUJBQWpFQTs7aUJBQUFBO1lBQUFBLGNBQWYsb0JBQUEsU0FBMEIsS0FBc0Q7b0JBQXBEQyxTQUFTQyxRQUFRQyxPQUFPQyxZQUM5Q0MsUUFHTUMsY0FJQUMsa0JBSUpDLFFBQ0FDOzs7OzRCQWJvQlIsVUFBRixNQUFFQSxTQUFTQyxTQUFYLE1BQVdBLFFBQVFDLFFBQW5CLE1BQW1CQSxPQUFPQyxhQUExQixNQUEwQkE7NEJBQzlDQyxTQUFTVDs0QkFDYixJQUFJLENBQUNTLFFBQVE7Z0NBQ1gsSUFBSUQsWUFBWTtvQ0FDUkUsZUFBZUwsUUFBUVMsT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQzs0Q0FBR0MsYUFBQUE7K0NBQVdBLFNBQVNUOztvQ0FDeEVDLFNBQVNDLGFBQWFELE1BQU07Z0NBQzlCO2dDQUNBLElBQUlWLGdCQUFnQjtvQ0FDWlksbUJBQW1CTixRQUFRYSxXQUFXLENBQUNuQixlQUFlLENBQUNnQixNQUFNO29DQUNuRU4sU0FBU0UsaUJBQWlCRixNQUFNO2dDQUNsQzs0QkFDRjs0QkFDTUc7NEJBQ1M7O2dDQUFNZixZQUFZO29DQUMvQkUsZ0JBQUFBO29DQUNBVSxRQUFBQTtvQ0FDQUQsWUFBQUE7b0NBQ0FILFNBQUFBO29DQUNBQyxRQUFBQTtvQ0FDQUMsT0FBQUE7Z0NBQ0Y7Ozs0QkFQTU0sU0FBUzs0QkFTZixJQUFJRCxPQUFPTyxNQUFNLEdBQUcsR0FBRztnQ0FDckIsTUFBTSxJQUFJdkIsV0FBV2dCOzRCQUN2Qjs0QkFFQTs7Z0NBQU9DOzs7O1lBQ1Q7bUJBM0JlVDs7UUE0QmZELGVBQWVpQixPQUFPLENBQUNoQixVQUFVLEdBQUdBO0lBQ3RDO0FBQ0Y7QUFFQSxlQUFlTixvQkFBb0IifQ==