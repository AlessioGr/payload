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
export default function(req, _, next) {
    var _req_body;
    if ((_req_body = req.body) === null || _req_body === void 0 ? void 0 : _req_body._payload) {
        var _req_body1;
        var payloadJSON = JSON.parse(req.body._payload);
        req.body = _object_spread({}, req.body, payloadJSON);
        (_req_body1 = req.body) === null || _req_body1 === void 0 ? true : delete _req_body1._payload;
    }
    next();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvY29udmVydFBheWxvYWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBSZXF1ZXN0LCBfOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogdm9pZCA9PiB7XG4gIGlmIChyZXEuYm9keT8uX3BheWxvYWQpIHtcbiAgICBjb25zdCBwYXlsb2FkSlNPTiA9IEpTT04ucGFyc2UocmVxLmJvZHkuX3BheWxvYWQpO1xuXG4gICAgcmVxLmJvZHkgPSB7XG4gICAgICAuLi5yZXEuYm9keSxcbiAgICAgIC4uLnBheWxvYWRKU09OLFxuICAgIH07XG5cbiAgICBkZWxldGUgcmVxLmJvZHk/Ll9wYXlsb2FkO1xuICB9XG5cbiAgbmV4dCgpO1xufTtcbiJdLCJuYW1lcyI6WyJyZXEiLCJfIiwibmV4dCIsImJvZHkiLCJfcGF5bG9hZCIsInBheWxvYWRKU09OIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsZUFBZSxTQUFDQSxLQUFjQyxHQUFhQztRQUNyQ0Y7SUFBSixLQUFJQSxZQUFBQSxJQUFJRyxJQUFJLGNBQVJILGdDQUFBQSxVQUFVSSxRQUFRLEVBQUU7WUFRZko7UUFQUCxJQUFNSyxjQUFjQyxLQUFLQyxLQUFLLENBQUNQLElBQUlHLElBQUksQ0FBQ0MsUUFBUTtRQUVoREosSUFBSUcsSUFBSSxHQUFHLG1CQUNOSCxJQUFJRyxJQUFJLEVBQ1JFO1NBR0VMLGFBQUFBLElBQUlHLElBQUksY0FBUkgsc0NBQUFBLFdBQVVJLFFBQVE7SUFDM0I7SUFFQUY7QUFDRixFQUFFIn0=