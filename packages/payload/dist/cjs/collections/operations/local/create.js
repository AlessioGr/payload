"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createLocal;
    }
});
var _getFileByPath = /*#__PURE__*/ _interop_require_default(require("../../../uploads/getFileByPath"));
var _create = /*#__PURE__*/ _interop_require_default(require("../create"));
var _dataloader = require("../../dataloader");
var _init = require("../../../translations/init");
var _errors = require("../../../errors");
var _setRequestContext = require("../../../express/setRequestContext");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
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
function createLocal(payload, options) {
    return _createLocal.apply(this, arguments);
}
function _createLocal() {
    _createLocal = _async_to_generator(function(payload, options) {
        var _payload_config, _payload, _payload_config_localization, _payload_config1, _payload1, _req, _req1, collectionSlug, depth, _options_locale, locale, _options_fallbackLocale, fallbackLocale, data, user, _options_overrideAccess, overrideAccess, disableVerificationEmail, showHiddenFields, filePath, file, _options_overwriteExistingFiles, overwriteExistingFiles, _options_req, req, draft, context, collection, defaultLocale, _ref, _ref1, _tmp, _tmp1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collectionSlug = options.collection, depth = options.depth, _options_locale = options.locale, locale = _options_locale === void 0 ? null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, data = options.data, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, disableVerificationEmail = options.disableVerificationEmail, showHiddenFields = options.showHiddenFields, filePath = options.filePath, file = options.file, _options_overwriteExistingFiles = options.overwriteExistingFiles, overwriteExistingFiles = _options_overwriteExistingFiles === void 0 ? false : _options_overwriteExistingFiles, _options_req = options.req, req = _options_req === void 0 ? {} : _options_req, draft = options.draft, context = options.context;
                    (0, _setRequestContext.setRequestContext)(req, context);
                    collection = payload.collections[collectionSlug];
                    defaultLocale = ((_payload = payload) === null || _payload === void 0 ? void 0 : (_payload_config = _payload.config) === null || _payload_config === void 0 ? void 0 : _payload_config.localization) ? (_payload1 = payload) === null || _payload1 === void 0 ? void 0 : (_payload_config1 = _payload1.config) === null || _payload_config1 === void 0 ? void 0 : (_payload_config_localization = _payload_config1.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null;
                    if (!collection) {
                        throw new _errors.APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Create Operation."));
                    }
                    req.payloadAPI = req.payloadAPI || "local";
                    req.locale = (_ref = locale !== null && locale !== void 0 ? locale : (_req = req) === null || _req === void 0 ? void 0 : _req.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
                    req.fallbackLocale = (_ref1 = fallbackLocale !== null && fallbackLocale !== void 0 ? fallbackLocale : (_req1 = req) === null || _req1 === void 0 ? void 0 : _req1.fallbackLocale) !== null && _ref1 !== void 0 ? _ref1 : defaultLocale;
                    req.payload = payload;
                    req.i18n = (0, _init.i18nInit)(payload.config.i18n);
                    _tmp = {};
                    if (!(file !== null && file !== void 0)) return [
                        3,
                        1
                    ];
                    _tmp1 = file;
                    return [
                        3,
                        3
                    ];
                case 1:
                    return [
                        4,
                        (0, _getFileByPath.default)(filePath)
                    ];
                case 2:
                    _tmp1 = _state.sent();
                    _state.label = 3;
                case 3:
                    req.files = (_tmp.file = _tmp1, _tmp);
                    if (typeof user !== "undefined") req.user = user;
                    if (!req.t) req.t = req.i18n.t;
                    if (!req.payloadDataLoader) req.payloadDataLoader = (0, _dataloader.getDataLoader)(req);
                    return [
                        2,
                        (0, _create.default)({
                            depth: depth,
                            data: data,
                            collection: collection,
                            overrideAccess: overrideAccess,
                            disableVerificationEmail: disableVerificationEmail,
                            showHiddenFields: showHiddenFields,
                            overwriteExistingFiles: overwriteExistingFiles,
                            draft: draft,
                            req: req
                        })
                    ];
            }
        });
    });
    return _createLocal.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2NyZWF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBVcGxvYWRlZEZpbGUgfSBmcm9tICdleHByZXNzLWZpbGV1cGxvYWQnO1xuaW1wb3J0IHsgTWFya09wdGlvbmFsIH0gZnJvbSAndHMtZXNzZW50aWFscyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCwgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGdldEZpbGVCeVBhdGggZnJvbSAnLi4vLi4vLi4vdXBsb2Fkcy9nZXRGaWxlQnlQYXRoJztcbmltcG9ydCBjcmVhdGUgZnJvbSAnLi4vY3JlYXRlJztcbmltcG9ydCB7IGdldERhdGFMb2FkZXIgfSBmcm9tICcuLi8uLi9kYXRhbG9hZGVyJztcbmltcG9ydCB7IEZpbGUgfSBmcm9tICcuLi8uLi8uLi91cGxvYWRzL3R5cGVzJztcbmltcG9ydCB7IGkxOG5Jbml0IH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb25zL2luaXQnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgc2V0UmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3NldFJlcXVlc3RDb250ZXh0JztcblxuZXhwb3J0IHR5cGUgT3B0aW9uczxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IHtcbiAgY29sbGVjdGlvbjogVFNsdWdcbiAgZGF0YTogTWFya09wdGlvbmFsPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXSwgJ2lkJyB8ICd1cGRhdGVkQXQnIHwgJ2NyZWF0ZWRBdCcgfCAnc2l6ZXMnPlxuICBkZXB0aD86IG51bWJlclxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgdXNlcj86IERvY3VtZW50XG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBkaXNhYmxlVmVyaWZpY2F0aW9uRW1haWw/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIGZpbGVQYXRoPzogc3RyaW5nXG4gIGZpbGU/OiBGaWxlXG4gIG92ZXJ3cml0ZUV4aXN0aW5nRmlsZXM/OiBib29sZWFuXG4gIHJlcT86IFBheWxvYWRSZXF1ZXN0XG4gIGRyYWZ0PzogYm9vbGVhblxuICAvKipcbiAgICogY29udGV4dCwgd2hpY2ggd2lsbCB0aGVuIGJlIHBhc3NlZCB0byByZXEuY29udGV4dCwgd2hpY2ggY2FuIGJlIHJlYWQgYnkgaG9va3NcbiAgICovXG4gIGNvbnRleHQ/OiBSZXF1ZXN0Q29udGV4dFxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMb2NhbDxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgcGF5bG9hZDogUGF5bG9hZCxcbiAgb3B0aW9uczogT3B0aW9uczxUU2x1Zz4sXG4pOiBQcm9taXNlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbjogY29sbGVjdGlvblNsdWcsXG4gICAgZGVwdGgsXG4gICAgbG9jYWxlID0gbnVsbCxcbiAgICBmYWxsYmFja0xvY2FsZSA9IG51bGwsXG4gICAgZGF0YSxcbiAgICB1c2VyLFxuICAgIG92ZXJyaWRlQWNjZXNzID0gdHJ1ZSxcbiAgICBkaXNhYmxlVmVyaWZpY2F0aW9uRW1haWwsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBmaWxlUGF0aCxcbiAgICBmaWxlLFxuICAgIG92ZXJ3cml0ZUV4aXN0aW5nRmlsZXMgPSBmYWxzZSxcbiAgICByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgICBkcmFmdCxcbiAgICBjb250ZXh0LFxuICB9ID0gb3B0aW9ucztcbiAgc2V0UmVxdWVzdENvbnRleHQocmVxLCBjb250ZXh0KTtcblxuICBjb25zdCBjb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uU2x1Z107XG4gIGNvbnN0IGRlZmF1bHRMb2NhbGUgPSBwYXlsb2FkPy5jb25maWc/LmxvY2FsaXphdGlvbiA/IHBheWxvYWQ/LmNvbmZpZz8ubG9jYWxpemF0aW9uPy5kZWZhdWx0TG9jYWxlIDogbnVsbDtcblxuICBpZiAoIWNvbGxlY3Rpb24pIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoYFRoZSBjb2xsZWN0aW9uIHdpdGggc2x1ZyAke1N0cmluZyhjb2xsZWN0aW9uU2x1Zyl9IGNhbid0IGJlIGZvdW5kLiBDcmVhdGUgT3BlcmF0aW9uLmApO1xuICB9XG5cbiAgcmVxLnBheWxvYWRBUEkgPSByZXEucGF5bG9hZEFQSSB8fCAnbG9jYWwnO1xuICByZXEubG9jYWxlID0gbG9jYWxlID8/IHJlcT8ubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG4gIHJlcS5mYWxsYmFja0xvY2FsZSA9IGZhbGxiYWNrTG9jYWxlID8/IHJlcT8uZmFsbGJhY2tMb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcbiAgcmVxLnBheWxvYWQgPSBwYXlsb2FkO1xuICByZXEuaTE4biA9IGkxOG5Jbml0KHBheWxvYWQuY29uZmlnLmkxOG4pO1xuICByZXEuZmlsZXMgPSB7XG4gICAgZmlsZTogKGZpbGUgPz8gKGF3YWl0IGdldEZpbGVCeVBhdGgoZmlsZVBhdGgpKSkgYXMgVXBsb2FkZWRGaWxlLFxuICB9O1xuXG4gIGlmICh0eXBlb2YgdXNlciAhPT0gJ3VuZGVmaW5lZCcpIHJlcS51c2VyID0gdXNlcjtcblxuICBpZiAoIXJlcS50KSByZXEudCA9IHJlcS5pMThuLnQ7XG4gIGlmICghcmVxLnBheWxvYWREYXRhTG9hZGVyKSByZXEucGF5bG9hZERhdGFMb2FkZXIgPSBnZXREYXRhTG9hZGVyKHJlcSk7XG5cbiAgcmV0dXJuIGNyZWF0ZTxUU2x1Zz4oe1xuICAgIGRlcHRoLFxuICAgIGRhdGEsXG4gICAgY29sbGVjdGlvbixcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBkaXNhYmxlVmVyaWZpY2F0aW9uRW1haWwsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBvdmVyd3JpdGVFeGlzdGluZ0ZpbGVzLFxuICAgIGRyYWZ0LFxuICAgIHJlcSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTG9jYWwiLCJwYXlsb2FkIiwib3B0aW9ucyIsInJlcSIsImNvbGxlY3Rpb25TbHVnIiwiZGVwdGgiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsImRhdGEiLCJ1c2VyIiwib3ZlcnJpZGVBY2Nlc3MiLCJkaXNhYmxlVmVyaWZpY2F0aW9uRW1haWwiLCJzaG93SGlkZGVuRmllbGRzIiwiZmlsZVBhdGgiLCJmaWxlIiwib3ZlcndyaXRlRXhpc3RpbmdGaWxlcyIsImRyYWZ0IiwiY29udGV4dCIsImNvbGxlY3Rpb24iLCJkZWZhdWx0TG9jYWxlIiwic2V0UmVxdWVzdENvbnRleHQiLCJjb2xsZWN0aW9ucyIsImNvbmZpZyIsImxvY2FsaXphdGlvbiIsIkFQSUVycm9yIiwiU3RyaW5nIiwicGF5bG9hZEFQSSIsImkxOG4iLCJpMThuSW5pdCIsImdldEZpbGVCeVBhdGgiLCJmaWxlcyIsInQiLCJwYXlsb2FkRGF0YUxvYWRlciIsImdldERhdGFMb2FkZXIiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBbUNBOzs7ZUFBOEJBOzs7b0VBN0JKOzZEQUNQOzBCQUNXO29CQUVMO3NCQUNBO2lDQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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