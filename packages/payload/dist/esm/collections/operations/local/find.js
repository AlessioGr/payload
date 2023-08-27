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
import find from "../find";
import { getDataLoader } from "../../dataloader";
import { i18nInit } from "../../../translations/init";
import { APIError } from "../../../errors";
import { setRequestContext } from "../../../express/setRequestContext";
export default function findLocal(payload, options) {
    return _findLocal.apply(this, arguments);
}
function _findLocal() {
    _findLocal = _async_to_generator(function(payload, options) {
        var _payload_config, _payload, _payload_config_localization, _payload_config1, _payload1, _req, _req1, collectionSlug, depth, currentDepth, page, limit, where, _options_locale, locale, _options_fallbackLocale, fallbackLocale, user, _options_overrideAccess, overrideAccess, disableErrors, showHiddenFields, sort, _options_draft, draft, _options_pagination, pagination, _options_req, req, context, collection, defaultLocale, _ref, _ref1;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, depth = options.depth, currentDepth = options.currentDepth, page = options.page, limit = options.limit, where = options.where, _options_locale = options.locale, locale = _options_locale === void 0 ? null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, disableErrors = options.disableErrors, showHiddenFields = options.showHiddenFields, sort = options.sort, _options_draft = options.draft, draft = _options_draft === void 0 ? false : _options_draft, _options_pagination = options.pagination, pagination = _options_pagination === void 0 ? true : _options_pagination, _options_req = options.req, req = _options_req === void 0 ? {} : _options_req, context = options.context;
            setRequestContext(options.req, context);
            collection = payload.collections[collectionSlug];
            defaultLocale = ((_payload = payload) === null || _payload === void 0 ? void 0 : (_payload_config = _payload.config) === null || _payload_config === void 0 ? void 0 : _payload_config.localization) ? (_payload1 = payload) === null || _payload1 === void 0 ? void 0 : (_payload_config1 = _payload1.config) === null || _payload_config1 === void 0 ? void 0 : (_payload_config_localization = _payload_config1.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null;
            if (!collection) {
                throw new APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Find Operation."));
            }
            req.payloadAPI = req.payloadAPI || "local";
            req.locale = (_ref = locale !== null && locale !== void 0 ? locale : (_req = req) === null || _req === void 0 ? void 0 : _req.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
            req.fallbackLocale = (_ref1 = fallbackLocale !== null && fallbackLocale !== void 0 ? fallbackLocale : (_req1 = req) === null || _req1 === void 0 ? void 0 : _req1.fallbackLocale) !== null && _ref1 !== void 0 ? _ref1 : defaultLocale;
            req.i18n = i18nInit(payload.config.i18n);
            req.payload = payload;
            if (!req.t) req.t = req.i18n.t;
            if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);
            if (typeof user !== "undefined") req.user = user;
            return [
                2,
                find({
                    depth: depth,
                    currentDepth: currentDepth,
                    sort: sort,
                    page: page,
                    limit: limit,
                    where: where,
                    collection: collection,
                    overrideAccess: overrideAccess,
                    disableErrors: disableErrors,
                    showHiddenFields: showHiddenFields,
                    draft: draft,
                    pagination: pagination,
                    req: req
                })
            ];
        });
    });
    return _findLocal.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2ZpbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgRG9jdW1lbnQsIFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi9maW5kJztcbmltcG9ydCB7IGdldERhdGFMb2FkZXIgfSBmcm9tICcuLi8uLi9kYXRhbG9hZGVyJztcbmltcG9ydCB7IGkxOG5Jbml0IH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb25zL2luaXQnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgc2V0UmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3NldFJlcXVlc3RDb250ZXh0JztcblxuZXhwb3J0IHR5cGUgT3B0aW9uczxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+ID0ge1xuICBjb2xsZWN0aW9uOiBUXG4gIGRlcHRoPzogbnVtYmVyXG4gIGN1cnJlbnREZXB0aD86IG51bWJlclxuICBwYWdlPzogbnVtYmVyXG4gIGxpbWl0PzogbnVtYmVyXG4gIGxvY2FsZT86IHN0cmluZ1xuICBmYWxsYmFja0xvY2FsZT86IHN0cmluZ1xuICB1c2VyPzogRG9jdW1lbnRcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIGRpc2FibGVFcnJvcnM/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIHBhZ2luYXRpb24/OiBib29sZWFuXG4gIHNvcnQ/OiBzdHJpbmdcbiAgd2hlcmU/OiBXaGVyZVxuICBkcmFmdD86IGJvb2xlYW5cbiAgcmVxPzogUGF5bG9hZFJlcXVlc3RcbiAgLyoqXG4gICAqIGNvbnRleHQsIHdoaWNoIHdpbGwgdGhlbiBiZSBwYXNzZWQgdG8gcmVxLmNvbnRleHQsIHdoaWNoIGNhbiBiZSByZWFkIGJ5IGhvb2tzXG4gICAqL1xuICBjb250ZXh0PzogUmVxdWVzdENvbnRleHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmluZExvY2FsPFQgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIHBheWxvYWQ6IFBheWxvYWQsXG4gIG9wdGlvbnM6IE9wdGlvbnM8VD4sXG4pOiBQcm9taXNlPFBhZ2luYXRlZERvY3M8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVF0+PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uU2x1ZyxcbiAgICBkZXB0aCxcbiAgICBjdXJyZW50RGVwdGgsXG4gICAgcGFnZSxcbiAgICBsaW1pdCxcbiAgICB3aGVyZSxcbiAgICBsb2NhbGUgPSBudWxsLFxuICAgIGZhbGxiYWNrTG9jYWxlID0gbnVsbCxcbiAgICB1c2VyLFxuICAgIG92ZXJyaWRlQWNjZXNzID0gdHJ1ZSxcbiAgICBkaXNhYmxlRXJyb3JzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgc29ydCxcbiAgICBkcmFmdCA9IGZhbHNlLFxuICAgIHBhZ2luYXRpb24gPSB0cnVlLFxuICAgIHJlcSA9IHt9IGFzIFBheWxvYWRSZXF1ZXN0LFxuICAgIGNvbnRleHQsXG4gIH0gPSBvcHRpb25zO1xuICBzZXRSZXF1ZXN0Q29udGV4dChvcHRpb25zLnJlcSwgY29udGV4dCk7XG5cbiAgY29uc3QgY29sbGVjdGlvbiA9IHBheWxvYWQuY29sbGVjdGlvbnNbY29sbGVjdGlvblNsdWddO1xuICBjb25zdCBkZWZhdWx0TG9jYWxlID0gcGF5bG9hZD8uY29uZmlnPy5sb2NhbGl6YXRpb24gPyBwYXlsb2FkPy5jb25maWc/LmxvY2FsaXphdGlvbj8uZGVmYXVsdExvY2FsZSA6IG51bGw7XG5cbiAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKGBUaGUgY29sbGVjdGlvbiB3aXRoIHNsdWcgJHtTdHJpbmcoY29sbGVjdGlvblNsdWcpfSBjYW4ndCBiZSBmb3VuZC4gRmluZCBPcGVyYXRpb24uYCk7XG4gIH1cblxuICByZXEucGF5bG9hZEFQSSA9IHJlcS5wYXlsb2FkQVBJIHx8ICdsb2NhbCc7XG4gIHJlcS5sb2NhbGUgPSBsb2NhbGUgPz8gcmVxPy5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcbiAgcmVxLmZhbGxiYWNrTG9jYWxlID0gZmFsbGJhY2tMb2NhbGUgPz8gcmVxPy5mYWxsYmFja0xvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuICByZXEuaTE4biA9IGkxOG5Jbml0KHBheWxvYWQuY29uZmlnLmkxOG4pO1xuICByZXEucGF5bG9hZCA9IHBheWxvYWQ7XG5cbiAgaWYgKCFyZXEudCkgcmVxLnQgPSByZXEuaTE4bi50O1xuICBpZiAoIXJlcS5wYXlsb2FkRGF0YUxvYWRlcikgcmVxLnBheWxvYWREYXRhTG9hZGVyID0gZ2V0RGF0YUxvYWRlcihyZXEpO1xuXG4gIGlmICh0eXBlb2YgdXNlciAhPT0gJ3VuZGVmaW5lZCcpIHJlcS51c2VyID0gdXNlcjtcblxuICByZXR1cm4gZmluZDxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUXT4oe1xuICAgIGRlcHRoLFxuICAgIGN1cnJlbnREZXB0aCxcbiAgICBzb3J0LFxuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgd2hlcmUsXG4gICAgY29sbGVjdGlvbixcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBkaXNhYmxlRXJyb3JzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgZHJhZnQsXG4gICAgcGFnaW5hdGlvbixcbiAgICByZXEsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZpbmQiLCJnZXREYXRhTG9hZGVyIiwiaTE4bkluaXQiLCJBUElFcnJvciIsInNldFJlcXVlc3RDb250ZXh0IiwiZmluZExvY2FsIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJyZXEiLCJjb2xsZWN0aW9uU2x1ZyIsImRlcHRoIiwiY3VycmVudERlcHRoIiwicGFnZSIsImxpbWl0Iiwid2hlcmUiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsInVzZXIiLCJvdmVycmlkZUFjY2VzcyIsImRpc2FibGVFcnJvcnMiLCJzaG93SGlkZGVuRmllbGRzIiwic29ydCIsImRyYWZ0IiwicGFnaW5hdGlvbiIsImNvbnRleHQiLCJjb2xsZWN0aW9uIiwiZGVmYXVsdExvY2FsZSIsImNvbGxlY3Rpb25zIiwiY29uZmlnIiwibG9jYWxpemF0aW9uIiwiU3RyaW5nIiwicGF5bG9hZEFQSSIsImkxOG4iLCJ0IiwicGF5bG9hZERhdGFMb2FkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxPQUFPQSxVQUFVLFVBQVU7QUFDM0IsU0FBU0MsYUFBYSxRQUFRLG1CQUFtQjtBQUNqRCxTQUFTQyxRQUFRLFFBQVEsNkJBQTZCO0FBQ3RELFNBQVNDLFFBQVEsUUFBUSxrQkFBa0I7QUFDM0MsU0FBU0MsaUJBQWlCLFFBQVEscUNBQXFDO0FBeUJ2RSx3QkFBOEJDLFVBQzVCQyxPQUFnQixFQUNoQkMsT0FBbUI7V0FGU0Y7O1NBQUFBO0lBQUFBLGFBQWYsb0JBQUEsU0FDYkMsT0FBZ0IsRUFDaEJDLE9BQW1CO1lBd0JH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