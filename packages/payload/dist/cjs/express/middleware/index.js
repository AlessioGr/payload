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
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _passport = /*#__PURE__*/ _interop_require_default(require("passport"));
var _compression = /*#__PURE__*/ _interop_require_default(require("compression"));
var _bodyparser = /*#__PURE__*/ _interop_require_default(require("body-parser"));
var _methodoverride = /*#__PURE__*/ _interop_require_default(require("method-override"));
var _qsmiddleware = /*#__PURE__*/ _interop_require_default(require("qs-middleware"));
var _expressfileupload = /*#__PURE__*/ _interop_require_default(require("express-fileupload"));
var _expressratelimit = /*#__PURE__*/ _interop_require_default(require("express-rate-limit"));
var _middleware = /*#__PURE__*/ _interop_require_default(require("../../localization/middleware"));
var _authenticate = /*#__PURE__*/ _interop_require_default(require("./authenticate"));
var _identifyAPI = /*#__PURE__*/ _interop_require_default(require("./identifyAPI"));
var _corsHeaders = /*#__PURE__*/ _interop_require_default(require("./corsHeaders"));
var _convertPayload = /*#__PURE__*/ _interop_require_default(require("./convertPayload"));
var _i18n = require("./i18n");
var _defaultPayload = /*#__PURE__*/ _interop_require_default(require("./defaultPayload"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var middleware = function(payload) {
    var _payload_config_express_middleware;
    var rateLimitOptions = {
        windowMs: payload.config.rateLimit.window,
        max: payload.config.rateLimit.max
    };
    if (typeof payload.config.rateLimit.skip === "function") rateLimitOptions.skip = payload.config.rateLimit.skip;
    if ((_payload_config_express_middleware = payload.config.express.middleware) === null || _payload_config_express_middleware === void 0 ? void 0 : _payload_config_express_middleware.length) {
        payload.logger.warn("express.middleware is deprecated. Please migrate to express.postMiddleware.");
    }
    return [
        _defaultPayload.default
    ].concat(_to_consumable_array(payload.config.express.preMiddleware || []), [
        (0, _expressratelimit.default)(rateLimitOptions),
        _passport.default.initialize(),
        (0, _i18n.i18nMiddleware)(payload.config.i18n),
        (0, _identifyAPI.default)("REST"),
        (0, _methodoverride.default)("X-HTTP-Method-Override"),
        (0, _qsmiddleware.default)({
            depth: 10,
            arrayLimit: 1000
        }),
        _bodyparser.default.urlencoded({
            extended: true
        }),
        (0, _compression.default)(payload.config.express.compression),
        (0, _middleware.default)(payload.config.localization),
        _express.default.json(payload.config.express.json),
        (0, _expressfileupload.default)(_object_spread({
            parseNested: true
        }, payload.config.upload)),
        _convertPayload.default,
        (0, _corsHeaders.default)(payload.config),
        (0, _authenticate.default)(payload.config)
    ], _to_consumable_array(payload.config.express.middleware || []), _to_consumable_array(payload.config.express.postMiddleware || []));
};
var _default = middleware;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBtZXRob2RPdmVycmlkZSBmcm9tICdtZXRob2Qtb3ZlcnJpZGUnO1xuaW1wb3J0IHFzTWlkZGxld2FyZSBmcm9tICdxcy1taWRkbGV3YXJlJztcbmltcG9ydCBmaWxlVXBsb2FkIGZyb20gJ2V4cHJlc3MtZmlsZXVwbG9hZCc7XG5pbXBvcnQgcmF0ZUxpbWl0IGZyb20gJ2V4cHJlc3MtcmF0ZS1saW1pdCc7XG5pbXBvcnQgbG9jYWxpemF0aW9uTWlkZGxld2FyZSBmcm9tICcuLi8uLi9sb2NhbGl6YXRpb24vbWlkZGxld2FyZSc7XG5pbXBvcnQgYXV0aGVudGljYXRlIGZyb20gJy4vYXV0aGVudGljYXRlJztcbmltcG9ydCBpZGVudGlmeUFQSSBmcm9tICcuL2lkZW50aWZ5QVBJJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi9wYXlsb2FkJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IGNvcnNIZWFkZXJzIGZyb20gJy4vY29yc0hlYWRlcnMnO1xuaW1wb3J0IGNvbnZlcnRQYXlsb2FkIGZyb20gJy4vY29udmVydFBheWxvYWQnO1xuaW1wb3J0IHsgaTE4bk1pZGRsZXdhcmUgfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IGRlZmF1bHRQYXlsb2FkIGZyb20gJy4vZGVmYXVsdFBheWxvYWQnO1xuXG5jb25zdCBtaWRkbGV3YXJlID0gKHBheWxvYWQ6IFBheWxvYWQpOiBhbnkgPT4ge1xuICBjb25zdCByYXRlTGltaXRPcHRpb25zOiB7XG4gICAgd2luZG93TXM/OiBudW1iZXJcbiAgICBtYXg/OiBudW1iZXJcbiAgICBza2lwPzogKHJlcTogUGF5bG9hZFJlcXVlc3QpID0+IGJvb2xlYW5cbiAgfSA9IHtcbiAgICB3aW5kb3dNczogcGF5bG9hZC5jb25maWcucmF0ZUxpbWl0LndpbmRvdyxcbiAgICBtYXg6IHBheWxvYWQuY29uZmlnLnJhdGVMaW1pdC5tYXgsXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBwYXlsb2FkLmNvbmZpZy5yYXRlTGltaXQuc2tpcCA9PT0gJ2Z1bmN0aW9uJykgcmF0ZUxpbWl0T3B0aW9ucy5za2lwID0gcGF5bG9hZC5jb25maWcucmF0ZUxpbWl0LnNraXA7XG5cbiAgaWYgKHBheWxvYWQuY29uZmlnLmV4cHJlc3MubWlkZGxld2FyZT8ubGVuZ3RoKSB7XG4gICAgcGF5bG9hZC5sb2dnZXIud2FybignZXhwcmVzcy5taWRkbGV3YXJlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSBtaWdyYXRlIHRvIGV4cHJlc3MucG9zdE1pZGRsZXdhcmUuJyk7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIGRlZmF1bHRQYXlsb2FkLFxuICAgIC4uLihwYXlsb2FkLmNvbmZpZy5leHByZXNzLnByZU1pZGRsZXdhcmUgfHwgW10pLFxuICAgIHJhdGVMaW1pdChyYXRlTGltaXRPcHRpb25zKSxcbiAgICBwYXNzcG9ydC5pbml0aWFsaXplKCksXG4gICAgaTE4bk1pZGRsZXdhcmUocGF5bG9hZC5jb25maWcuaTE4biksXG4gICAgaWRlbnRpZnlBUEkoJ1JFU1QnKSxcbiAgICBtZXRob2RPdmVycmlkZSgnWC1IVFRQLU1ldGhvZC1PdmVycmlkZScpLFxuICAgIHFzTWlkZGxld2FyZSh7IGRlcHRoOiAxMCwgYXJyYXlMaW1pdDogMTAwMCB9KSxcbiAgICBib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSxcbiAgICBjb21wcmVzc2lvbihwYXlsb2FkLmNvbmZpZy5leHByZXNzLmNvbXByZXNzaW9uKSxcbiAgICBsb2NhbGl6YXRpb25NaWRkbGV3YXJlKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgZXhwcmVzcy5qc29uKHBheWxvYWQuY29uZmlnLmV4cHJlc3MuanNvbiksXG4gICAgZmlsZVVwbG9hZCh7XG4gICAgICBwYXJzZU5lc3RlZDogdHJ1ZSxcbiAgICAgIC4uLnBheWxvYWQuY29uZmlnLnVwbG9hZCxcbiAgICB9KSxcbiAgICBjb252ZXJ0UGF5bG9hZCxcbiAgICBjb3JzSGVhZGVycyhwYXlsb2FkLmNvbmZpZyksXG4gICAgYXV0aGVudGljYXRlKHBheWxvYWQuY29uZmlnKSxcbiAgICAuLi4ocGF5bG9hZC5jb25maWcuZXhwcmVzcy5taWRkbGV3YXJlIHx8IFtdKSxcbiAgICAuLi4ocGF5bG9hZC5jb25maWcuZXhwcmVzcy5wb3N0TWlkZGxld2FyZSB8fCBbXSksXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlO1xuIl0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJwYXlsb2FkIiwicmF0ZUxpbWl0T3B0aW9ucyIsIndpbmRvd01zIiwiY29uZmlnIiwicmF0ZUxpbWl0Iiwid2luZG93IiwibWF4Iiwic2tpcCIsImV4cHJlc3MiLCJsZW5ndGgiLCJsb2dnZXIiLCJ3YXJuIiwiZGVmYXVsdFBheWxvYWQiLCJwcmVNaWRkbGV3YXJlIiwicGFzc3BvcnQiLCJpbml0aWFsaXplIiwiaTE4bk1pZGRsZXdhcmUiLCJpMThuIiwiaWRlbnRpZnlBUEkiLCJtZXRob2RPdmVycmlkZSIsInFzTWlkZGxld2FyZSIsImRlcHRoIiwiYXJyYXlMaW1pdCIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJjb21wcmVzc2lvbiIsImxvY2FsaXphdGlvbk1pZGRsZXdhcmUiLCJsb2NhbGl6YXRpb24iLCJqc29uIiwiZmlsZVVwbG9hZCIsInBhcnNlTmVzdGVkIiwidXBsb2FkIiwiY29udmVydFBheWxvYWQiLCJjb3JzSGVhZGVycyIsImF1dGhlbnRpY2F0ZSIsInBvc3RNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7OytCQTJEQTs7O2VBQUE7Ozs4REEzRG9COytEQUNDO2tFQUNHO2lFQUNEO3FFQUNJO21FQUNGO3dFQUNGO3VFQUNEO2lFQUNhO21FQUNWO2tFQUNEO2tFQUdBO3FFQUNHO29CQUNJO3FFQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNQSxhQUFhLFNBQUNDO1FBWWRBO0lBWEosSUFBTUMsbUJBSUY7UUFDRkMsVUFBVUYsUUFBUUcsTUFBTSxDQUFDQyxTQUFTLENBQUNDLE1BQU07UUFDekNDLEtBQUtOLFFBQVFHLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDRSxHQUFHO0lBQ25DO0lBRUEsSUFBSSxPQUFPTixRQUFRRyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0csSUFBSSxLQUFLLFlBQVlOLGlCQUFpQk0sSUFBSSxHQUFHUCxRQUFRRyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0csSUFBSTtJQUU5RyxLQUFJUCxxQ0FBQUEsUUFBUUcsTUFBTSxDQUFDSyxPQUFPLENBQUNULFVBQVUsY0FBakNDLHlEQUFBQSxtQ0FBbUNTLE1BQU0sRUFBRTtRQUM3Q1QsUUFBUVUsTUFBTSxDQUFDQyxJQUFJLENBQUM7SUFDdEI7SUFFQSxPQUFPO1FBQ0xDLHVCQUFjO0tBcUJmLENBdEJNLE9BRUwscUJBQUlaLFFBQVFHLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDSyxhQUFhLElBQUksRUFBRSxHQUZ6QztRQUdMVCxJQUFBQSx5QkFBUyxFQUFDSDtRQUNWYSxpQkFBUSxDQUFDQyxVQUFVO1FBQ25CQyxJQUFBQSxvQkFBYyxFQUFDaEIsUUFBUUcsTUFBTSxDQUFDYyxJQUFJO1FBQ2xDQyxJQUFBQSxvQkFBVyxFQUFDO1FBQ1pDLElBQUFBLHVCQUFjLEVBQUM7UUFDZkMsSUFBQUEscUJBQVksRUFBQztZQUFFQyxPQUFPO1lBQUlDLFlBQVk7UUFBSztRQUMzQ0MsbUJBQVUsQ0FBQ0MsVUFBVSxDQUFDO1lBQUVDLFVBQVU7UUFBSztRQUN2Q0MsSUFBQUEsb0JBQVcsRUFBQzFCLFFBQVFHLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDa0IsV0FBVztRQUM5Q0MsSUFBQUEsbUJBQXNCLEVBQUMzQixRQUFRRyxNQUFNLENBQUN5QixZQUFZO1FBQ2xEcEIsZ0JBQU8sQ0FBQ3FCLElBQUksQ0FBQzdCLFFBQVFHLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDcUIsSUFBSTtRQUN4Q0MsSUFBQUEsMEJBQVUsRUFBQztZQUNUQyxhQUFhO1dBQ1YvQixRQUFRRyxNQUFNLENBQUM2QixNQUFNO1FBRTFCQyx1QkFBYztRQUNkQyxJQUFBQSxvQkFBVyxFQUFDbEMsUUFBUUcsTUFBTTtRQUMxQmdDLElBQUFBLHFCQUFZLEVBQUNuQyxRQUFRRyxNQUFNO0tBRzVCLEVBRkMscUJBQUlILFFBQVFHLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDVCxVQUFVLElBQUksRUFBRSxHQUMzQyxxQkFBSUMsUUFBUUcsTUFBTSxDQUFDSyxPQUFPLENBQUM0QixjQUFjLElBQUksRUFBRTtBQUVuRDtJQUVBLFdBQWVyQyJ9