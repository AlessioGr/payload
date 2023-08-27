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
import getFileByPath from "../../../uploads/getFileByPath";
import update from "../update";
import { getDataLoader } from "../../dataloader";
import { i18nInit } from "../../../translations/init";
import { APIError } from "../../../errors";
import updateByID from "../updateByID";
import { setRequestContext } from "../../../express/setRequestContext";
function updateLocal(payload, options) {
    return _updateLocal.apply(this, arguments);
}
function _updateLocal() {
    _updateLocal = _async_to_generator(function(payload, options) {
        var _payload_config_localization, collectionSlug, depth, _options_locale, locale, _options_fallbackLocale, fallbackLocale, data, user, _options_overrideAccess, overrideAccess, showHiddenFields, filePath, file, _options_overwriteExistingFiles, overwriteExistingFiles, draft, autosave, id, where, context, collection, i18n, defaultLocale, req, _tmp, _tmp1, _tmp2, args;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collectionSlug = options.collection, depth = options.depth, _options_locale = options.locale, locale = _options_locale === void 0 ? null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, data = options.data, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, showHiddenFields = options.showHiddenFields, filePath = options.filePath, file = options.file, _options_overwriteExistingFiles = options.overwriteExistingFiles, overwriteExistingFiles = _options_overwriteExistingFiles === void 0 ? false : _options_overwriteExistingFiles, draft = options.draft, autosave = options.autosave, id = options.id, where = options.where, context = options.context;
                    collection = payload.collections[collectionSlug];
                    i18n = i18nInit(payload.config.i18n);
                    defaultLocale = payload.config.localization ? (_payload_config_localization = payload.config.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null;
                    if (!collection) {
                        throw new APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Update Operation."));
                    }
                    _tmp = {
                        user: user,
                        payloadAPI: "local",
                        locale: locale !== null && locale !== void 0 ? locale : defaultLocale,
                        fallbackLocale: fallbackLocale !== null && fallbackLocale !== void 0 ? fallbackLocale : defaultLocale,
                        payload: payload,
                        i18n: i18n
                    };
                    _tmp1 = {};
                    if (!(file !== null && file !== void 0)) return [
                        3,
                        1
                    ];
                    _tmp2 = file;
                    return [
                        3,
                        3
                    ];
                case 1:
                    return [
                        4,
                        getFileByPath(filePath)
                    ];
                case 2:
                    _tmp2 = _state.sent();
                    _state.label = 3;
                case 3:
                    req = (_tmp.files = (_tmp1.file = _tmp2, _tmp1), _tmp);
                    setRequestContext(req, context);
                    if (!req.t) req.t = req.i18n.t;
                    if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);
                    args = {
                        depth: depth,
                        data: data,
                        collection: collection,
                        overrideAccess: overrideAccess,
                        showHiddenFields: showHiddenFields,
                        overwriteExistingFiles: overwriteExistingFiles,
                        draft: draft,
                        autosave: autosave,
                        payload: payload,
                        req: req,
                        id: id,
                        where: where
                    };
                    if (options.id) {
                        return [
                            2,
                            updateByID(args)
                        ];
                    }
                    return [
                        2,
                        update(args)
                    ];
            }
        });
    });
    return _updateLocal.apply(this, arguments);
}
export default updateLocal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL3VwZGF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBEZWVwUGFydGlhbCB9IGZyb20gJ3RzLWVzc2VudGlhbHMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnO1xuaW1wb3J0IHsgRG9jdW1lbnQsIFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGdldEZpbGVCeVBhdGggZnJvbSAnLi4vLi4vLi4vdXBsb2Fkcy9nZXRGaWxlQnlQYXRoJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi4vdXBkYXRlJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0LCBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0RGF0YUxvYWRlciB9IGZyb20gJy4uLy4uL2RhdGFsb2FkZXInO1xuaW1wb3J0IHsgRmlsZSB9IGZyb20gJy4uLy4uLy4uL3VwbG9hZHMvdHlwZXMnO1xuaW1wb3J0IHsgaTE4bkluaXQgfSBmcm9tICcuLi8uLi8uLi90cmFuc2xhdGlvbnMvaW5pdCc7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgdXBkYXRlQnlJRCBmcm9tICcuLi91cGRhdGVCeUlEJztcbmltcG9ydCB7IEJ1bGtPcGVyYXRpb25SZXN1bHQgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgc2V0UmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3NldFJlcXVlc3RDb250ZXh0JztcblxuZXhwb3J0IHR5cGUgQmFzZU9wdGlvbnM8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4gPSB7XG4gIHJlcT86IFBheWxvYWRSZXF1ZXN0LFxuICBjb2xsZWN0aW9uOiBUU2x1Z1xuICBkYXRhOiBEZWVwUGFydGlhbDxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10+XG4gIGRlcHRoPzogbnVtYmVyXG4gIGxvY2FsZT86IHN0cmluZ1xuICBmYWxsYmFja0xvY2FsZT86IHN0cmluZ1xuICB1c2VyPzogRG9jdW1lbnRcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIGZpbGVQYXRoPzogc3RyaW5nXG4gIGZpbGU/OiBGaWxlXG4gIG92ZXJ3cml0ZUV4aXN0aW5nRmlsZXM/OiBib29sZWFuXG4gIGRyYWZ0PzogYm9vbGVhblxuICBhdXRvc2F2ZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIGNvbnRleHQsIHdoaWNoIHdpbGwgdGhlbiBiZSBwYXNzZWQgdG8gcmVxLmNvbnRleHQsIHdoaWNoIGNhbiBiZSByZWFkIGJ5IGhvb2tzXG4gICAqL1xuICBjb250ZXh0PzogUmVxdWVzdENvbnRleHRcbn1cblxuZXhwb3J0IHR5cGUgQnlJRE9wdGlvbnM8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4gPSBCYXNlT3B0aW9uczxUU2x1Zz4gJiB7XG4gIGlkOiBzdHJpbmcgfCBudW1iZXJcbiAgd2hlcmU/OiBuZXZlclxufVxuXG5leHBvcnQgdHlwZSBNYW55T3B0aW9uczxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IEJhc2VPcHRpb25zPFRTbHVnPiAmIHtcbiAgd2hlcmU6IFdoZXJlXG4gIGlkPzogbmV2ZXJcbn1cblxuZXhwb3J0IHR5cGUgT3B0aW9uczxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IEJ5SURPcHRpb25zPFRTbHVnPiB8IE1hbnlPcHRpb25zPFRTbHVnPlxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhbDxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihwYXlsb2FkOiBQYXlsb2FkLCBvcHRpb25zOiBCeUlET3B0aW9uczxUU2x1Zz4pOiBQcm9taXNlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsPFRTbHVnIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KHBheWxvYWQ6IFBheWxvYWQsIG9wdGlvbnM6IE1hbnlPcHRpb25zPFRTbHVnPik6IFByb21pc2U8QnVsa09wZXJhdGlvblJlc3VsdDxUU2x1Zz4+XG5hc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhbDxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihwYXlsb2FkOiBQYXlsb2FkLCBvcHRpb25zOiBPcHRpb25zPFRTbHVnPik6IFByb21pc2U8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddIHwgQnVsa09wZXJhdGlvblJlc3VsdDxUU2x1Zz4+XG5hc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhbDxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihwYXlsb2FkOiBQYXlsb2FkLCBvcHRpb25zOiBPcHRpb25zPFRTbHVnPik6IFByb21pc2U8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddIHwgQnVsa09wZXJhdGlvblJlc3VsdDxUU2x1Zz4+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25TbHVnLFxuICAgIGRlcHRoLFxuICAgIGxvY2FsZSA9IG51bGwsXG4gICAgZmFsbGJhY2tMb2NhbGUgPSBudWxsLFxuICAgIGRhdGEsXG4gICAgdXNlcixcbiAgICBvdmVycmlkZUFjY2VzcyA9IHRydWUsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBmaWxlUGF0aCxcbiAgICBmaWxlLFxuICAgIG92ZXJ3cml0ZUV4aXN0aW5nRmlsZXMgPSBmYWxzZSxcbiAgICBkcmFmdCxcbiAgICBhdXRvc2F2ZSxcbiAgICBpZCxcbiAgICB3aGVyZSxcbiAgICBjb250ZXh0LFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCBjb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z107XG4gIGNvbnN0IGkxOG4gPSBpMThuSW5pdChwYXlsb2FkLmNvbmZpZy5pMThuKTtcbiAgY29uc3QgZGVmYXVsdExvY2FsZSA9IHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbiA/IHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbj8uZGVmYXVsdExvY2FsZSA6IG51bGw7XG5cbiAgaWYgKCFjb2xsZWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKGBUaGUgY29sbGVjdGlvbiB3aXRoIHNsdWcgJHtTdHJpbmcoY29sbGVjdGlvblNsdWcpfSBjYW4ndCBiZSBmb3VuZC4gVXBkYXRlIE9wZXJhdGlvbi5gKTtcbiAgfVxuXG4gIGNvbnN0IHJlcSA9IHtcbiAgICB1c2VyLFxuICAgIHBheWxvYWRBUEk6ICdsb2NhbCcsXG4gICAgbG9jYWxlOiBsb2NhbGUgPz8gZGVmYXVsdExvY2FsZSxcbiAgICBmYWxsYmFja0xvY2FsZTogZmFsbGJhY2tMb2NhbGUgPz8gZGVmYXVsdExvY2FsZSxcbiAgICBwYXlsb2FkLFxuICAgIGkxOG4sXG4gICAgZmlsZXM6IHtcbiAgICAgIGZpbGU6IGZpbGUgPz8gYXdhaXQgZ2V0RmlsZUJ5UGF0aChmaWxlUGF0aCksXG4gICAgfSxcbiAgfSBhcyBQYXlsb2FkUmVxdWVzdDtcbiAgc2V0UmVxdWVzdENvbnRleHQocmVxLCBjb250ZXh0KTtcblxuICBpZiAoIXJlcS50KSByZXEudCA9IHJlcS5pMThuLnQ7XG4gIGlmICghcmVxLnBheWxvYWREYXRhTG9hZGVyKSByZXEucGF5bG9hZERhdGFMb2FkZXIgPSBnZXREYXRhTG9hZGVyKHJlcSk7XG5cbiAgY29uc3QgYXJncyA9IHtcbiAgICBkZXB0aCxcbiAgICBkYXRhLFxuICAgIGNvbGxlY3Rpb24sXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBvdmVyd3JpdGVFeGlzdGluZ0ZpbGVzLFxuICAgIGRyYWZ0LFxuICAgIGF1dG9zYXZlLFxuICAgIHBheWxvYWQsXG4gICAgcmVxLFxuICAgIGlkLFxuICAgIHdoZXJlLFxuICB9O1xuXG4gIGlmIChvcHRpb25zLmlkKSB7XG4gICAgcmV0dXJuIHVwZGF0ZUJ5SUQ8VFNsdWc+KGFyZ3MpO1xuICB9XG4gIHJldHVybiB1cGRhdGU8VFNsdWc+KGFyZ3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVMb2NhbDtcbiJdLCJuYW1lcyI6WyJnZXRGaWxlQnlQYXRoIiwidXBkYXRlIiwiZ2V0RGF0YUxvYWRlciIsImkxOG5Jbml0IiwiQVBJRXJyb3IiLCJ1cGRhdGVCeUlEIiwic2V0UmVxdWVzdENvbnRleHQiLCJ1cGRhdGVMb2NhbCIsInBheWxvYWQiLCJvcHRpb25zIiwiY29sbGVjdGlvblNsdWciLCJkZXB0aCIsImxvY2FsZSIsImZhbGxiYWNrTG9jYWxlIiwiZGF0YSIsInVzZXIiLCJvdmVycmlkZUFjY2VzcyIsInNob3dIaWRkZW5GaWVsZHMiLCJmaWxlUGF0aCIsImZpbGUiLCJvdmVyd3JpdGVFeGlzdGluZ0ZpbGVzIiwiZHJhZnQiLCJhdXRvc2F2ZSIsImlkIiwid2hlcmUiLCJjb250ZXh0IiwiY29sbGVjdGlvbiIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwicmVxIiwiYXJncyIsImNvbGxlY3Rpb25zIiwiY29uZmlnIiwibG9jYWxpemF0aW9uIiwiU3RyaW5nIiwicGF5bG9hZEFQSSIsImZpbGVzIiwidCIsInBheWxvYWREYXRhTG9hZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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