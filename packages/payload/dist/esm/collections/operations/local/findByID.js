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
import findByID from "../findByID";
import { getDataLoader } from "../../dataloader";
import { i18nInit } from "../../../translations/init";
import { APIError } from "../../../errors";
import { setRequestContext } from "../../../express/setRequestContext";
export default function findByIDLocal(payload, options) {
    return _findByIDLocal.apply(this, arguments);
}
function _findByIDLocal() {
    _findByIDLocal = _async_to_generator(function(payload, options) {
        var _payload_config, _payload, _payload_config_localization, _payload_config1, _payload1, _req, _req1, collectionSlug, depth, currentDepth, id, _options_locale, locale, _options_fallbackLocale, fallbackLocale, user, _options_overrideAccess, overrideAccess, _options_disableErrors, disableErrors, showHiddenFields, _options_req, req, _options_draft, draft, context, collection, defaultLocale, _ref, _ref1;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, depth = options.depth, currentDepth = options.currentDepth, id = options.id, _options_locale = options.locale, locale = _options_locale === void 0 ? null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, _options_disableErrors = options.disableErrors, disableErrors = _options_disableErrors === void 0 ? false : _options_disableErrors, showHiddenFields = options.showHiddenFields, _options_req = options.req, req = _options_req === void 0 ? {} : _options_req, _options_draft = options.draft, draft = _options_draft === void 0 ? false : _options_draft, context = options.context;
            setRequestContext(options.req, context);
            collection = payload.collections[collectionSlug];
            defaultLocale = ((_payload = payload) === null || _payload === void 0 ? void 0 : (_payload_config = _payload.config) === null || _payload_config === void 0 ? void 0 : _payload_config.localization) ? (_payload1 = payload) === null || _payload1 === void 0 ? void 0 : (_payload_config1 = _payload1.config) === null || _payload_config1 === void 0 ? void 0 : (_payload_config_localization = _payload_config1.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null;
            if (!collection) {
                throw new APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Find By ID Operation."));
            }
            req.payloadAPI = req.payloadAPI || "local";
            req.locale = (_ref = locale !== null && locale !== void 0 ? locale : (_req = req) === null || _req === void 0 ? void 0 : _req.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
            req.fallbackLocale = (_ref1 = fallbackLocale !== null && fallbackLocale !== void 0 ? fallbackLocale : (_req1 = req) === null || _req1 === void 0 ? void 0 : _req1.fallbackLocale) !== null && _ref1 !== void 0 ? _ref1 : defaultLocale;
            req.i18n = i18nInit(payload.config.i18n);
            req.payload = payload;
            if (typeof user !== "undefined") req.user = user;
            if (!req.t) req.t = req.i18n.t;
            if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);
            return [
                2,
                findByID({
                    depth: depth,
                    currentDepth: currentDepth,
                    id: id,
                    collection: collection,
                    overrideAccess: overrideAccess,
                    disableErrors: disableErrors,
                    showHiddenFields: showHiddenFields,
                    req: req,
                    draft: draft
                })
            ];
        });
    });
    return _findByIDLocal.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2ZpbmRCeUlELnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0LCBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgZmluZEJ5SUQgZnJvbSAnLi4vZmluZEJ5SUQnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnO1xuaW1wb3J0IHsgZ2V0RGF0YUxvYWRlciB9IGZyb20gJy4uLy4uL2RhdGFsb2FkZXInO1xuaW1wb3J0IHsgaTE4bkluaXQgfSBmcm9tICcuLi8uLi8uLi90cmFuc2xhdGlvbnMvaW5pdCc7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBzZXRSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3Mvc2V0UmVxdWVzdENvbnRleHQnO1xuXG5leHBvcnQgdHlwZSBPcHRpb25zPFQgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4gPSB7XG4gIGNvbGxlY3Rpb246IFRcbiAgaWQ6IHN0cmluZyB8IG51bWJlclxuICBkZXB0aD86IG51bWJlclxuICBjdXJyZW50RGVwdGg/OiBudW1iZXJcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGZhbGxiYWNrTG9jYWxlPzogc3RyaW5nXG4gIHVzZXI/OiBEb2N1bWVudFxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgZGlzYWJsZUVycm9ycz86IGJvb2xlYW5cbiAgcmVxPzogUGF5bG9hZFJlcXVlc3RcbiAgZHJhZnQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBjb250ZXh0LCB3aGljaCB3aWxsIHRoZW4gYmUgcGFzc2VkIHRvIHJlcS5jb250ZXh0LCB3aGljaCBjYW4gYmUgcmVhZCBieSBob29rc1xuICAgKi9cbiAgY29udGV4dD86IFJlcXVlc3RDb250ZXh0LFxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmaW5kQnlJRExvY2FsPFQgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIHBheWxvYWQ6IFBheWxvYWQsXG4gIG9wdGlvbnM6IE9wdGlvbnM8VD4sXG4pOiBQcm9taXNlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RdPiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uU2x1ZyxcbiAgICBkZXB0aCxcbiAgICBjdXJyZW50RGVwdGgsXG4gICAgaWQsXG4gICAgbG9jYWxlID0gbnVsbCxcbiAgICBmYWxsYmFja0xvY2FsZSA9IG51bGwsXG4gICAgdXNlcixcbiAgICBvdmVycmlkZUFjY2VzcyA9IHRydWUsXG4gICAgZGlzYWJsZUVycm9ycyA9IGZhbHNlLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgcmVxID0ge30gYXMgUGF5bG9hZFJlcXVlc3QsXG4gICAgZHJhZnQgPSBmYWxzZSxcbiAgICBjb250ZXh0LFxuICB9ID0gb3B0aW9ucztcbiAgc2V0UmVxdWVzdENvbnRleHQob3B0aW9ucy5yZXEsIGNvbnRleHQpO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBwYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25TbHVnXTtcbiAgY29uc3QgZGVmYXVsdExvY2FsZSA9IHBheWxvYWQ/LmNvbmZpZz8ubG9jYWxpemF0aW9uID8gcGF5bG9hZD8uY29uZmlnPy5sb2NhbGl6YXRpb24/LmRlZmF1bHRMb2NhbGUgOiBudWxsO1xuXG4gIGlmICghY29sbGVjdGlvbikge1xuICAgIHRocm93IG5ldyBBUElFcnJvcihgVGhlIGNvbGxlY3Rpb24gd2l0aCBzbHVnICR7U3RyaW5nKGNvbGxlY3Rpb25TbHVnKX0gY2FuJ3QgYmUgZm91bmQuIEZpbmQgQnkgSUQgT3BlcmF0aW9uLmApO1xuICB9XG5cbiAgcmVxLnBheWxvYWRBUEkgPSByZXEucGF5bG9hZEFQSSB8fCAnbG9jYWwnO1xuICByZXEubG9jYWxlID0gbG9jYWxlID8/IHJlcT8ubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG4gIHJlcS5mYWxsYmFja0xvY2FsZSA9IGZhbGxiYWNrTG9jYWxlID8/IHJlcT8uZmFsbGJhY2tMb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcbiAgcmVxLmkxOG4gPSBpMThuSW5pdChwYXlsb2FkLmNvbmZpZy5pMThuKTtcbiAgcmVxLnBheWxvYWQgPSBwYXlsb2FkO1xuXG4gIGlmICh0eXBlb2YgdXNlciAhPT0gJ3VuZGVmaW5lZCcpIHJlcS51c2VyID0gdXNlcjtcblxuICBpZiAoIXJlcS50KSByZXEudCA9IHJlcS5pMThuLnQ7XG4gIGlmICghcmVxLnBheWxvYWREYXRhTG9hZGVyKSByZXEucGF5bG9hZERhdGFMb2FkZXIgPSBnZXREYXRhTG9hZGVyKHJlcSk7XG5cbiAgcmV0dXJuIGZpbmRCeUlEPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RdPih7XG4gICAgZGVwdGgsXG4gICAgY3VycmVudERlcHRoLFxuICAgIGlkLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgZGlzYWJsZUVycm9ycyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIHJlcSxcbiAgICBkcmFmdCxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmluZEJ5SUQiLCJnZXREYXRhTG9hZGVyIiwiaTE4bkluaXQiLCJBUElFcnJvciIsInNldFJlcXVlc3RDb250ZXh0IiwiZmluZEJ5SURMb2NhbCIsInBheWxvYWQiLCJvcHRpb25zIiwicmVxIiwiY29sbGVjdGlvblNsdWciLCJkZXB0aCIsImN1cnJlbnREZXB0aCIsImlkIiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJ1c2VyIiwib3ZlcnJpZGVBY2Nlc3MiLCJkaXNhYmxlRXJyb3JzIiwic2hvd0hpZGRlbkZpZWxkcyIsImRyYWZ0IiwiY29udGV4dCIsImNvbGxlY3Rpb24iLCJkZWZhdWx0TG9jYWxlIiwiY29sbGVjdGlvbnMiLCJjb25maWciLCJsb2NhbGl6YXRpb24iLCJTdHJpbmciLCJwYXlsb2FkQVBJIiwiaTE4biIsInQiLCJwYXlsb2FkRGF0YUxvYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLE9BQU9BLGNBQWMsY0FBYztBQUVuQyxTQUFTQyxhQUFhLFFBQVEsbUJBQW1CO0FBQ2pELFNBQVNDLFFBQVEsUUFBUSw2QkFBNkI7QUFDdEQsU0FBU0MsUUFBUSxRQUFRLGtCQUFrQjtBQUMzQyxTQUFTQyxpQkFBaUIsUUFBUSxxQ0FBcUM7QUFxQnZFLHdCQUE4QkMsY0FDNUJDLE9BQWdCLEVBQ2hCQyxPQUFtQjtXQUZTRjs7U0FBQUE7SUFBQUEsaUJBQWYsb0JBQUEsU0FDYkMsT0FBZ0IsRUFDaEJDLE9BQW1CO1lBb0JHRCxpQkFBQUEsVUFBZ0NBLDhCQUFBQSxrQkFBQUEsV0FPL0JFLE1BQ2dCQSxPQXpCekJDLGdCQUNaQyxPQUNBQyxjQUNBQyxxQkFDQUMsaUNBQ0FDLGdCQUNBQywrQkFDQUMsd0NBQ0FDLGVBQ0FDLGdDQUNBVixxQkFDQVcsT0FDQUMsU0FJSUMsWUFDQUMsZUFPT1QsTUFDUUM7O1lBekJQTCxpQkFhVkYsUUFiRmMsWUFDQVgsUUFZRUgsUUFaRkcsT0FDQUMsZUFXRUosUUFYRkksY0FDQUMsS0FVRUwsUUFWRkssc0JBVUVMLFFBVEZNLFFBQUFBLHNDQUFTLGtEQVNQTixRQVJGTyxnQkFBQUEsc0RBQWlCLGdDQUNqQkMsT0FPRVIsUUFQRlEsZ0NBT0VSLFFBTkZTLGdCQUFBQSxzREFBaUIseURBTWZULFFBTEZVLGVBQUFBLG9EQUFnQixnQ0FDaEJDLG1CQUlFWCxRQUpGVyxpQ0FJRVgsUUFIRkMsS0FBQUEsZ0NBQU0sQ0FBQyxtQ0FHTEQsUUFGRlksT0FBQUEsb0NBQVEsd0JBQ1JDLFVBQ0ViLFFBREZhO1lBRUZoQixrQkFBa0JHLFFBQVFDLEdBQUcsRUFBRVk7WUFFekJDLGFBQWFmLFFBQVFpQixXQUFXLENBQUNkLGVBQWU7WUFDaERhLGdCQUFnQmhCLEVBQUFBLFdBQUFBLHFCQUFBQSxnQ0FBQUEsa0JBQUFBLFNBQVNrQixNQUFNLGNBQWZsQixzQ0FBQUEsZ0JBQWlCbUIsWUFBWSxLQUFHbkIsWUFBQUEscUJBQUFBLGlDQUFBQSxtQkFBQUEsVUFBU2tCLE1BQU0sY0FBZmxCLHdDQUFBQSwrQkFBQUEsaUJBQWlCbUIsWUFBWSxjQUE3Qm5CLG1EQUFBQSw2QkFBK0JnQixhQUFhLEdBQUc7WUFFckcsSUFBSSxDQUFDRCxZQUFZO2dCQUNmLE1BQU0sSUFBSWxCLFNBQVMsQUFBQyw0QkFBa0QsT0FBdkJ1QixPQUFPakIsaUJBQWdCO1lBQ3hFO1lBRUFELElBQUltQixVQUFVLEdBQUduQixJQUFJbUIsVUFBVSxJQUFJO1lBQ25DbkIsSUFBSUssTUFBTSxHQUFHQSxDQUFBQSxPQUFBQSxtQkFBQUEsb0JBQUFBLFVBQVVMLE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBS0ssTUFBTSxjQUFyQkEsa0JBQUFBLE9BQXlCUztZQUN0Q2QsSUFBSU0sY0FBYyxHQUFHQSxDQUFBQSxRQUFBQSwyQkFBQUEsNEJBQUFBLGtCQUFrQk4sUUFBQUEsaUJBQUFBLDRCQUFBQSxNQUFLTSxjQUFjLGNBQXJDQSxtQkFBQUEsUUFBeUNRO1lBQzlEZCxJQUFJb0IsSUFBSSxHQUFHMUIsU0FBU0ksUUFBUWtCLE1BQU0sQ0FBQ0ksSUFBSTtZQUN2Q3BCLElBQUlGLE9BQU8sR0FBR0E7WUFFZCxJQUFJLE9BQU9TLFNBQVMsYUFBYVAsSUFBSU8sSUFBSSxHQUFHQTtZQUU1QyxJQUFJLENBQUNQLElBQUlxQixDQUFDLEVBQUVyQixJQUFJcUIsQ0FBQyxHQUFHckIsSUFBSW9CLElBQUksQ0FBQ0MsQ0FBQztZQUM5QixJQUFJLENBQUNyQixJQUFJc0IsaUJBQWlCLEVBQUV0QixJQUFJc0IsaUJBQWlCLEdBQUc3QixjQUFjTztZQUVsRTs7Z0JBQU9SLFNBQTJDO29CQUNoRFUsT0FBQUE7b0JBQ0FDLGNBQUFBO29CQUNBQyxJQUFBQTtvQkFDQVMsWUFBQUE7b0JBQ0FMLGdCQUFBQTtvQkFDQUMsZUFBQUE7b0JBQ0FDLGtCQUFBQTtvQkFDQVYsS0FBQUE7b0JBQ0FXLE9BQUFBO2dCQUNGOzs7SUFDRjtXQWxEOEJkIn0=