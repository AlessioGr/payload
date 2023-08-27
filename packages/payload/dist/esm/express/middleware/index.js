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
import express from "express";
import passport from "passport";
import compression from "compression";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import qsMiddleware from "qs-middleware";
import fileUpload from "express-fileupload";
import rateLimit from "express-rate-limit";
import localizationMiddleware from "../../localization/middleware";
import authenticate from "./authenticate";
import identifyAPI from "./identifyAPI";
import corsHeaders from "./corsHeaders";
import convertPayload from "./convertPayload";
import { i18nMiddleware } from "./i18n";
import defaultPayload from "./defaultPayload";
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
        defaultPayload
    ].concat(_to_consumable_array(payload.config.express.preMiddleware || []), [
        rateLimit(rateLimitOptions),
        passport.initialize(),
        i18nMiddleware(payload.config.i18n),
        identifyAPI("REST"),
        methodOverride("X-HTTP-Method-Override"),
        qsMiddleware({
            depth: 10,
            arrayLimit: 1000
        }),
        bodyParser.urlencoded({
            extended: true
        }),
        compression(payload.config.express.compression),
        localizationMiddleware(payload.config.localization),
        express.json(payload.config.express.json),
        fileUpload(_object_spread({
            parseNested: true
        }, payload.config.upload)),
        convertPayload,
        corsHeaders(payload.config),
        authenticate(payload.config)
    ], _to_consumable_array(payload.config.express.middleware || []), _to_consumable_array(payload.config.express.postMiddleware || []));
};
export default middleware;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBtZXRob2RPdmVycmlkZSBmcm9tICdtZXRob2Qtb3ZlcnJpZGUnO1xuaW1wb3J0IHFzTWlkZGxld2FyZSBmcm9tICdxcy1taWRkbGV3YXJlJztcbmltcG9ydCBmaWxlVXBsb2FkIGZyb20gJ2V4cHJlc3MtZmlsZXVwbG9hZCc7XG5pbXBvcnQgcmF0ZUxpbWl0IGZyb20gJ2V4cHJlc3MtcmF0ZS1saW1pdCc7XG5pbXBvcnQgbG9jYWxpemF0aW9uTWlkZGxld2FyZSBmcm9tICcuLi8uLi9sb2NhbGl6YXRpb24vbWlkZGxld2FyZSc7XG5pbXBvcnQgYXV0aGVudGljYXRlIGZyb20gJy4vYXV0aGVudGljYXRlJztcbmltcG9ydCBpZGVudGlmeUFQSSBmcm9tICcuL2lkZW50aWZ5QVBJJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi9wYXlsb2FkJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IGNvcnNIZWFkZXJzIGZyb20gJy4vY29yc0hlYWRlcnMnO1xuaW1wb3J0IGNvbnZlcnRQYXlsb2FkIGZyb20gJy4vY29udmVydFBheWxvYWQnO1xuaW1wb3J0IHsgaTE4bk1pZGRsZXdhcmUgfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IGRlZmF1bHRQYXlsb2FkIGZyb20gJy4vZGVmYXVsdFBheWxvYWQnO1xuXG5jb25zdCBtaWRkbGV3YXJlID0gKHBheWxvYWQ6IFBheWxvYWQpOiBhbnkgPT4ge1xuICBjb25zdCByYXRlTGltaXRPcHRpb25zOiB7XG4gICAgd2luZG93TXM/OiBudW1iZXJcbiAgICBtYXg/OiBudW1iZXJcbiAgICBza2lwPzogKHJlcTogUGF5bG9hZFJlcXVlc3QpID0+IGJvb2xlYW5cbiAgfSA9IHtcbiAgICB3aW5kb3dNczogcGF5bG9hZC5jb25maWcucmF0ZUxpbWl0LndpbmRvdyxcbiAgICBtYXg6IHBheWxvYWQuY29uZmlnLnJhdGVMaW1pdC5tYXgsXG4gIH07XG5cbiAgaWYgKHR5cGVvZiBwYXlsb2FkLmNvbmZpZy5yYXRlTGltaXQuc2tpcCA9PT0gJ2Z1bmN0aW9uJykgcmF0ZUxpbWl0T3B0aW9ucy5za2lwID0gcGF5bG9hZC5jb25maWcucmF0ZUxpbWl0LnNraXA7XG5cbiAgaWYgKHBheWxvYWQuY29uZmlnLmV4cHJlc3MubWlkZGxld2FyZT8ubGVuZ3RoKSB7XG4gICAgcGF5bG9hZC5sb2dnZXIud2FybignZXhwcmVzcy5taWRkbGV3YXJlIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSBtaWdyYXRlIHRvIGV4cHJlc3MucG9zdE1pZGRsZXdhcmUuJyk7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIGRlZmF1bHRQYXlsb2FkLFxuICAgIC4uLihwYXlsb2FkLmNvbmZpZy5leHByZXNzLnByZU1pZGRsZXdhcmUgfHwgW10pLFxuICAgIHJhdGVMaW1pdChyYXRlTGltaXRPcHRpb25zKSxcbiAgICBwYXNzcG9ydC5pbml0aWFsaXplKCksXG4gICAgaTE4bk1pZGRsZXdhcmUocGF5bG9hZC5jb25maWcuaTE4biksXG4gICAgaWRlbnRpZnlBUEkoJ1JFU1QnKSxcbiAgICBtZXRob2RPdmVycmlkZSgnWC1IVFRQLU1ldGhvZC1PdmVycmlkZScpLFxuICAgIHFzTWlkZGxld2FyZSh7IGRlcHRoOiAxMCwgYXJyYXlMaW1pdDogMTAwMCB9KSxcbiAgICBib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSxcbiAgICBjb21wcmVzc2lvbihwYXlsb2FkLmNvbmZpZy5leHByZXNzLmNvbXByZXNzaW9uKSxcbiAgICBsb2NhbGl6YXRpb25NaWRkbGV3YXJlKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbiksXG4gICAgZXhwcmVzcy5qc29uKHBheWxvYWQuY29uZmlnLmV4cHJlc3MuanNvbiksXG4gICAgZmlsZVVwbG9hZCh7XG4gICAgICBwYXJzZU5lc3RlZDogdHJ1ZSxcbiAgICAgIC4uLnBheWxvYWQuY29uZmlnLnVwbG9hZCxcbiAgICB9KSxcbiAgICBjb252ZXJ0UGF5bG9hZCxcbiAgICBjb3JzSGVhZGVycyhwYXlsb2FkLmNvbmZpZyksXG4gICAgYXV0aGVudGljYXRlKHBheWxvYWQuY29uZmlnKSxcbiAgICAuLi4ocGF5bG9hZC5jb25maWcuZXhwcmVzcy5taWRkbGV3YXJlIHx8IFtdKSxcbiAgICAuLi4ocGF5bG9hZC5jb25maWcuZXhwcmVzcy5wb3N0TWlkZGxld2FyZSB8fCBbXSksXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlO1xuIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJwYXNzcG9ydCIsImNvbXByZXNzaW9uIiwiYm9keVBhcnNlciIsIm1ldGhvZE92ZXJyaWRlIiwicXNNaWRkbGV3YXJlIiwiZmlsZVVwbG9hZCIsInJhdGVMaW1pdCIsImxvY2FsaXphdGlvbk1pZGRsZXdhcmUiLCJhdXRoZW50aWNhdGUiLCJpZGVudGlmeUFQSSIsImNvcnNIZWFkZXJzIiwiY29udmVydFBheWxvYWQiLCJpMThuTWlkZGxld2FyZSIsImRlZmF1bHRQYXlsb2FkIiwibWlkZGxld2FyZSIsInBheWxvYWQiLCJyYXRlTGltaXRPcHRpb25zIiwid2luZG93TXMiLCJjb25maWciLCJ3aW5kb3ciLCJtYXgiLCJza2lwIiwibGVuZ3RoIiwibG9nZ2VyIiwid2FybiIsInByZU1pZGRsZXdhcmUiLCJpbml0aWFsaXplIiwiaTE4biIsImRlcHRoIiwiYXJyYXlMaW1pdCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImxvY2FsaXphdGlvbiIsImpzb24iLCJwYXJzZU5lc3RlZCIsInVw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