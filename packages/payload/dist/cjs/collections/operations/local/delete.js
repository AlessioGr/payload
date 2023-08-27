"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _delete = /*#__PURE__*/ _interop_require_default(require("../delete"));
var _deleteByID = /*#__PURE__*/ _interop_require_default(require("../deleteByID"));
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
function deleteLocal(payload, options) {
    return _deleteLocal.apply(this, arguments);
}
function _deleteLocal() {
    _deleteLocal = _async_to_generator(function(payload, options) {
        var _payload_config, _payload, _payload_config_localization, _payload_config1, _payload1, collectionSlug, depth, id, where, _options_locale, locale, _options_fallbackLocale, fallbackLocale, user, _options_overrideAccess, overrideAccess, showHiddenFields, context, collection, defaultLocale, req, args;
        return _ts_generator(this, function(_state) {
            collectionSlug = options.collection, depth = options.depth, id = options.id, where = options.where, _options_locale = options.locale, locale = _options_locale === void 0 ? null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, showHiddenFields = options.showHiddenFields, context = options.context;
            collection = payload.collections[collectionSlug];
            defaultLocale = ((_payload = payload) === null || _payload === void 0 ? void 0 : (_payload_config = _payload.config) === null || _payload_config === void 0 ? void 0 : _payload_config.localization) ? (_payload1 = payload) === null || _payload1 === void 0 ? void 0 : (_payload_config1 = _payload1.config) === null || _payload_config1 === void 0 ? void 0 : (_payload_config_localization = _payload_config1.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null;
            if (!collection) {
                throw new _errors.APIError("The collection with slug ".concat(String(collectionSlug), " can't be found. Delete Operation."));
            }
            req = {
                user: user,
                payloadAPI: "local",
                locale: locale !== null && locale !== void 0 ? locale : defaultLocale,
                fallbackLocale: fallbackLocale !== null && fallbackLocale !== void 0 ? fallbackLocale : defaultLocale,
                payload: payload,
                i18n: (0, _init.i18nInit)(payload.config.i18n)
            };
            (0, _setRequestContext.setRequestContext)(req, context);
            if (!req.t) req.t = req.i18n.t;
            if (!req.payloadDataLoader) req.payloadDataLoader = (0, _dataloader.getDataLoader)(req);
            args = {
                depth: depth,
                id: id,
                where: where,
                collection: collection,
                overrideAccess: overrideAccess,
                showHiddenFields: showHiddenFields,
                req: req
            };
            if (options.id) {
                return [
                    2,
                    (0, _deleteByID.default)(args)
                ];
            }
            return [
                2,
                (0, _delete.default)(args)
            ];
        });
    });
    return _deleteLocal.apply(this, arguments);
}
var _default = deleteLocal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2RlbGV0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgRG9jdW1lbnQsIFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgZGVsZXRlT3BlcmF0aW9uIGZyb20gJy4uL2RlbGV0ZSc7XG5pbXBvcnQgZGVsZXRlQnlJRCBmcm9tICcuLi9kZWxldGVCeUlEJztcbmltcG9ydCB7IGdldERhdGFMb2FkZXIgfSBmcm9tICcuLi8uLi9kYXRhbG9hZGVyJztcbmltcG9ydCB7IGkxOG5Jbml0IH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb25zL2luaXQnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgQnVsa09wZXJhdGlvblJlc3VsdCB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBzZXRSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3Mvc2V0UmVxdWVzdENvbnRleHQnO1xuXG5leHBvcnQgdHlwZSBCYXNlT3B0aW9uczxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+ID0ge1xuICByZXE/OiBQYXlsb2FkUmVxdWVzdCxcbiAgY29sbGVjdGlvbjogVFxuICBkZXB0aD86IG51bWJlclxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgdXNlcj86IERvY3VtZW50XG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBzaG93SGlkZGVuRmllbGRzPzogYm9vbGVhblxuICAvKipcbiAgICogY29udGV4dCwgd2hpY2ggd2lsbCB0aGVuIGJlIHBhc3NlZCB0byByZXEuY29udGV4dCwgd2hpY2ggY2FuIGJlIHJlYWQgYnkgaG9va3NcbiAgICovXG4gIGNvbnRleHQ/OiBSZXF1ZXN0Q29udGV4dFxufVxuXG5leHBvcnQgdHlwZSBCeUlET3B0aW9uczxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+ID0gQmFzZU9wdGlvbnM8VD4gJiB7XG4gIGlkOiBzdHJpbmcgfCBudW1iZXJcbiAgd2hlcmU/OiBuZXZlclxufVxuXG5leHBvcnQgdHlwZSBNYW55T3B0aW9uczxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+ID0gQmFzZU9wdGlvbnM8VD4gJiB7XG4gIHdoZXJlOiBXaGVyZVxuICBpZD86IG5ldmVyXG59XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnM8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4gPSBCeUlET3B0aW9uczxUU2x1Zz4gfCBNYW55T3B0aW9uczxUU2x1Zz5cblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYWw8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4ocGF5bG9hZDogUGF5bG9hZCwgb3B0aW9uczogQnlJRE9wdGlvbnM8VFNsdWc+KTogUHJvbWlzZTxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10+XG5hc3luYyBmdW5jdGlvbiBkZWxldGVMb2NhbDxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihwYXlsb2FkOiBQYXlsb2FkLCBvcHRpb25zOiBNYW55T3B0aW9uczxUU2x1Zz4pOiBQcm9taXNlPEJ1bGtPcGVyYXRpb25SZXN1bHQ8VFNsdWc+PlxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYWw8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4ocGF5bG9hZDogUGF5bG9hZCwgb3B0aW9uczogT3B0aW9uczxUU2x1Zz4pOiBQcm9taXNlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXSB8IEJ1bGtPcGVyYXRpb25SZXN1bHQ8VFNsdWc+PlxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlTG9jYWw8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4ocGF5bG9hZDogUGF5bG9hZCwgb3B0aW9uczogT3B0aW9uczxUU2x1Zz4pOiBQcm9taXNlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXSB8IEJ1bGtPcGVyYXRpb25SZXN1bHQ8VFNsdWc+PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uU2x1ZyxcbiAgICBkZXB0aCxcbiAgICBpZCxcbiAgICB3aGVyZSxcbiAgICBsb2NhbGUgPSBudWxsLFxuICAgIGZhbGxiYWNrTG9jYWxlID0gbnVsbCxcbiAgICB1c2VyLFxuICAgIG92ZXJyaWRlQWNjZXNzID0gdHJ1ZSxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIGNvbnRleHQsXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBwYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25TbHVnXTtcbiAgY29uc3QgZGVmYXVsdExvY2FsZSA9IHBheWxvYWQ/LmNvbmZpZz8ubG9jYWxpemF0aW9uID8gcGF5bG9hZD8uY29uZmlnPy5sb2NhbGl6YXRpb24/LmRlZmF1bHRMb2NhbGUgOiBudWxsO1xuXG4gIGlmICghY29sbGVjdGlvbikge1xuICAgIHRocm93IG5ldyBBUElFcnJvcihgVGhlIGNvbGxlY3Rpb24gd2l0aCBzbHVnICR7U3RyaW5nKGNvbGxlY3Rpb25TbHVnKX0gY2FuJ3QgYmUgZm91bmQuIERlbGV0ZSBPcGVyYXRpb24uYCk7XG4gIH1cblxuICBjb25zdCByZXEgPSB7XG4gICAgdXNlcixcbiAgICBwYXlsb2FkQVBJOiAnbG9jYWwnLFxuICAgIGxvY2FsZTogbG9jYWxlID8/IGRlZmF1bHRMb2NhbGUsXG4gICAgZmFsbGJhY2tMb2NhbGU6IGZhbGxiYWNrTG9jYWxlID8/IGRlZmF1bHRMb2NhbGUsXG4gICAgcGF5bG9hZCxcbiAgICBpMThuOiBpMThuSW5pdChwYXlsb2FkLmNvbmZpZy5pMThuKSxcbiAgfSBhcyBQYXlsb2FkUmVxdWVzdDtcbiAgc2V0UmVxdWVzdENvbnRleHQocmVxLCBjb250ZXh0KTtcblxuICBpZiAoIXJlcS50KSByZXEudCA9IHJlcS5pMThuLnQ7XG4gIGlmICghcmVxLnBheWxvYWREYXRhTG9hZGVyKSByZXEucGF5bG9hZERhdGFMb2FkZXIgPSBnZXREYXRhTG9hZGVyKHJlcSk7XG5cbiAgY29uc3QgYXJncyA9IHtcbiAgICBkZXB0aCxcbiAgICBpZCxcbiAgICB3aGVyZSxcbiAgICBjb2xsZWN0aW9uLFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgcmVxLFxuICB9O1xuXG4gIGlmIChvcHRpb25zLmlkKSB7XG4gICAgcmV0dXJuIGRlbGV0ZUJ5SUQ8VFNsdWc+KGFyZ3MpO1xuICB9XG4gIHJldHVybiBkZWxldGVPcGVyYXRpb248VFNsdWc+KGFyZ3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVMb2NhbDtcbiJdLCJuYW1lcyI6WyJkZWxldGVMb2NhbCIsInBheWxvYWQiLCJvcHRpb25zIiwiY29sbGVjdGlvblNsdWciLCJkZXB0aCIsImlkIiwid2hlcmUiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsInVzZXIiLCJvdmVycmlkZUFjY2VzcyIsInNob3dIaWRkZW5GaWVsZHMiLCJjb250ZXh0IiwiY29sbGVjdGlvbiIsImRlZmF1bHRMb2NhbGUiLCJyZXEiLCJhcmdzIiwiY29sbGVjdGlvbnMiLCJjb25maWciLCJsb2NhbGl6YXRpb24iLCJBUElFcnJvciIsIlN0cmluZyIsInBheWxvYWRBUEkiLCJpMThuIiwiaTE4bkluaXQiLCJzZXRSZXF1ZXN0Q29udGV4dCIsInQiLCJwYXlsb2FkRGF0YUxvYWRlciIsImdldERhdGFMb2FkZXIiLCJkZWxldGVCeUlEIiwiZGVsZXRlT3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQTRGQTs7O2VBQUE7Ozs2REF4RjRCO2lFQUNMOzBCQUNPO29CQUNMO3NCQUNBO2lDQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBZ0NuQkEsWUFBK0RDLE9BQWdCLEVBQUVDLE9BQXVCO1dBQXhHRjs7U0FBQUE7SUFBQUEsZUFBZixvQkFBQSxTQUE4RUMsT0FBZ0IsRUFBRUMsT0FBdUI7WUFlL0ZELGlCQUFBQSxVQUFnQ0EsOEJBQUFBLGtCQUFBQSxXQWJ4Q0UsZ0JBQ1pDLE9BQ0FDLElBQ0FDLHdCQUNBQyxpQ0FDQUMsZ0JBQ0FDLCtCQUNBQyxnQkFDQUMsa0JBQ0FDLFNBR0lDLFlBQ0FDLGVBTUFDLEtBYUFDOztZQWhDUWIsaUJBVVZELFFBVkZXLFlBQ0FULFFBU0VGLFFBVEZFLE9BQ0FDLEtBUUVILFFBUkZHLElBQ0FDLFFBT0VKLFFBUEZJLHlCQU9FSixRQU5GSyxRQUFBQSxzQ0FBUyxrREFNUEwsUUFMRk0sZ0JBQUFBLHNEQUFpQixnQ0FDakJDLE9BSUVQLFFBSkZPLGdDQUlFUCxRQUhGUSxnQkFBQUEsc0RBQWlCLGdDQUNqQkMsbUJBRUVULFFBRkZTLGtCQUNBQyxVQUNFVixRQURGVTtZQUdJQyxhQUFhWixRQUFRZ0IsV0FBVyxDQUFDZCxlQUFlO1lBQ2hEVyxnQkFBZ0JiLEVBQUFBLFdBQUFBLHFCQUFBQSxnQ0FBQUEsa0JBQUFBLFNBQVNpQixNQUFNLGNBQWZqQixzQ0FBQUEsZ0JBQWlCa0IsWUFBWSxLQUFHbEIsWUFBQUEscUJBQUFBLGlDQUFBQSxtQkFBQUEsVUFBU2lCLE1BQU0sY0FBZmpCLHdDQUFBQSwrQkFBQUEsaUJBQWlCa0IsWUFBWSxjQUE3QmxCLG1EQUFBQSw2QkFBK0JhLGFBQWEsR0FBRztZQUVyRyxJQUFJLENBQUNELFlBQVk7Z0JBQ2YsTUFBTSxJQUFJTyxnQkFBUSxDQUFDLEFBQUMsNEJBQWtELE9BQXZCQyxPQUFPbEIsaUJBQWdCO1lBQ3hFO1lBRU1ZLE1BQU07Z0JBQ1ZOLE1BQUFBO2dCQUNBYSxZQUFZO2dCQUNaZixRQUFRQSxtQkFBQUEsb0JBQUFBLFNBQVVPO2dCQUNsQk4sZ0JBQWdCQSwyQkFBQUEsNEJBQUFBLGlCQUFrQk07Z0JBQ2xDYixTQUFBQTtnQkFDQXNCLE1BQU1DLElBQUFBLGNBQVEsRUFBQ3ZCLFFBQVFpQixNQUFNLENBQUNLLElBQUk7WUFDcEM7WUFDQUUsSUFBQUEsb0NBQWlCLEVBQUNWLEtBQUtIO1lBRXZCLElBQUksQ0FBQ0csSUFBSVcsQ0FBQyxFQUFFWCxJQUFJVyxDQUFDLEdBQUdYLElBQUlRLElBQUksQ0FBQ0csQ0FBQztZQUM5QixJQUFJLENBQUNYLElBQUlZLGlCQUFpQixFQUFFWixJQUFJWSxpQkFBaUIsR0FBR0MsSUFBQUEseUJBQWEsRUFBQ2I7WUFFNURDLE9BQU87Z0JBQ1haLE9BQUFBO2dCQUNBQyxJQUFBQTtnQkFDQUMsT0FBQUE7Z0JBQ0FPLFlBQUFBO2dCQUNBSCxnQkFBQUE7Z0JBQ0FDLGtCQUFBQTtnQkFDQUksS0FBQUE7WUFDRjtZQUVBLElBQUliLFFBQVFHLEVBQUUsRUFBRTtnQkFDZDs7b0JBQU93QixJQUFBQSxtQkFBVSxFQUFRYjs7WUFDM0I7WUFDQTs7Z0JBQU9jLElBQUFBLGVBQWUsRUFBUWQ7OztJQUNoQztXQWhEZWhCOztJQWtEZixXQUFlQSJ9