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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
import { fileURLToPath } from "url";
import path, { dirname } from "path";
var __filename = fileURLToPath(import.meta.url);
var _dirname = dirname(__filename);
export var webpack = function(config) {
    var _config_resolve;
    return _object_spread_props(_object_spread({}, config), {
        resolve: _object_spread_props(_object_spread({}, config.resolve || {}), {
            alias: _object_spread_props(_object_spread({}, ((_config_resolve = config.resolve) === null || _config_resolve === void 0 ? void 0 : _config_resolve.alias) || {}), _define_property({}, path.resolve(_dirname, "./index"), path.resolve(_dirname, "mock")))
        })
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJwYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgV2VicGFjayB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgcGF0aCwgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCc7XG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG5leHBvcnQgY29uc3Qgd2VicGFjazogV2VicGFjayA9IChjb25maWcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5jb25maWcsXG4gICAgcmVzb2x2ZToge1xuICAgICAgLi4uY29uZmlnLnJlc29sdmUgfHwge30sXG4gICAgICBhbGlhczoge1xuICAgICAgICAuLi5jb25maWcucmVzb2x2ZT8uYWxpYXMgfHwge30sXG4gICAgICAgIFtwYXRoLnJlc29sdmUoX2Rpcm5hbWUsICcuL2luZGV4JyldOiBwYXRoLnJlc29sdmUoX2Rpcm5hbWUsICdtb2NrJyksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImZpbGVVUkxUb1BhdGgiLCJwYXRoIiwiZGlybmFtZSIsIl9fZmlsZW5hbWUiLCJ1cmwiLCJfZGlybmFtZSIsIndlYnBhY2siLCJjb25maWciLCJyZXNvbHZlIiwiYWxpYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTQSxhQUFhLFFBQVEsTUFBTTtBQUNwQyxPQUFPQyxRQUFRQyxPQUFPLFFBQVEsT0FBTztBQUNyQyxJQUFNQyxhQUFhSCxjQUFjLFlBQVlJLEdBQUc7QUFDaEQsSUFBTUMsV0FBV0gsUUFBUUM7QUFFekIsT0FBTyxJQUFNRyxVQUFtQixTQUFDQztRQU10QkE7SUFMVCxPQUFPLHdDQUNGQTtRQUNIQyxTQUFTLHdDQUNKRCxPQUFPQyxPQUFPLElBQUksQ0FBQztZQUN0QkMsT0FBTyx3Q0FDRkYsRUFBQUEsa0JBQUFBLE9BQU9DLE9BQU8sY0FBZEQsc0NBQUFBLGdCQUFnQkUsS0FBSyxLQUFJLENBQUMsSUFDN0IscUJBQUNSLEtBQUtPLE9BQU8sQ0FBQ0gsVUFBVSxZQUFhSixLQUFLTyxPQUFPLENBQUNILFVBQVU7OztBQUlwRSxFQUFFIn0=