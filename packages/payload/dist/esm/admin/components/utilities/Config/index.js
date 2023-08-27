function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
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
import React, { createContext, useContext } from "react";
var Context = /*#__PURE__*/ createContext({});
export var ConfigProvider = function(param) {
    var children = param.children, incomingConfig = param.config;
    var _React_useState = _sliced_to_array(React.useState(), 2), config = _React_useState[0], setConfig = _React_useState[1];
    var hasAwaited = React.useRef(false);
    React.useEffect(function() {
        if (incomingConfig && !hasAwaited.current) {
            hasAwaited.current = true;
            var awaitConfig = function() {
                var _ref = _async_to_generator(function() {
                    var resolvedConfig;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    incomingConfig
                                ];
                            case 1:
                                resolvedConfig = _state.sent();
                                setConfig(resolvedConfig);
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function awaitConfig() {
                    return _ref.apply(this, arguments);
                };
            }();
            awaitConfig();
        }
    }, [
        incomingConfig
    ]);
    if (!config) return null;
    return /*#__PURE__*/ React.createElement(Context.Provider, {
        value: config
    }, children);
};
export var useConfig = function() {
    return useContext(Context);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Db25maWcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL3R5cGVzJztcblxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U2FuaXRpemVkQ29uZmlnPih7fSBhcyBTYW5pdGl6ZWRDb25maWcpO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnUHJvdmlkZXI6IFJlYWN0LkZDPHtjb25maWc6IFNhbml0aXplZENvbmZpZywgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZX0+ID0gKHsgY2hpbGRyZW4sIGNvbmZpZzogaW5jb21pbmdDb25maWcgfSkgPT4ge1xuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8U2FuaXRpemVkQ29uZmlnPigpO1xuICBjb25zdCBoYXNBd2FpdGVkID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbmNvbWluZ0NvbmZpZyAmJiAhaGFzQXdhaXRlZC5jdXJyZW50KSB7XG4gICAgICBoYXNBd2FpdGVkLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICBjb25zdCBhd2FpdENvbmZpZyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRDb25maWcgPSBhd2FpdCBpbmNvbWluZ0NvbmZpZztcbiAgICAgICAgc2V0Q29uZmlnKHJlc29sdmVkQ29uZmlnKTtcbiAgICAgIH07XG4gICAgICBhd2FpdENvbmZpZygpO1xuICAgIH1cbiAgfSwgW2luY29taW5nQ29uZmlnXSk7XG5cbiAgaWYgKCFjb25maWcpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbmZpZ30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUNvbmZpZyA9ICgpOiBTYW5pdGl6ZWRDb25maWcgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29udGV4dCIsIkNvbmZpZ1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb25maWciLCJpbmNvbWluZ0NvbmZpZyIsInVzZVN0YXRlIiwic2V0Q29uZmlnIiwiaGFzQXdhaXRlZCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhd2FpdENvbmZpZyIsInJlc29sdmVkQ29uZmlnIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxhQUFhLEVBQUVDLFVBQVUsUUFBUSxRQUFRO0FBR3pELElBQU1DLHdCQUFVRixjQUErQixDQUFDO0FBRWhELE9BQU8sSUFBTUcsaUJBQWlGO1FBQUdDLGlCQUFBQSxVQUFVQyxBQUFRQyx1QkFBUkQ7SUFDekcsSUFBNEJOLG1DQUFBQSxNQUFNUSxRQUFRLFFBQW5DRixTQUFxQk4sb0JBQWJTLFlBQWFUO0lBQzVCLElBQU1VLGFBQWFWLE1BQU1XLE1BQU0sQ0FBQztJQUVoQ1gsTUFBTVksU0FBUyxDQUFDO1FBQ2QsSUFBSUwsa0JBQWtCLENBQUNHLFdBQVdHLE9BQU8sRUFBRTtZQUN6Q0gsV0FBV0csT0FBTyxHQUFHO1lBRXJCLElBQU1DOzJCQUFjLG9CQUFBO3dCQUNaQzs7OztnQ0FBaUI7O29DQUFNUjs7O2dDQUF2QlEsaUJBQWlCO2dDQUN2Qk4sVUFBVU07Ozs7OztnQkFDWjtnQ0FITUQ7Ozs7WUFJTkE7UUFDRjtJQUNGLEdBQUc7UUFBQ1A7S0FBZTtJQUVuQixJQUFJLENBQUNELFFBQVEsT0FBTztJQUVwQixxQkFDRSxvQkFBQ0gsUUFBUWEsUUFBUTtRQUFDQyxPQUFPWDtPQUN0QkQ7QUFHUCxFQUFFO0FBRUYsT0FBTyxJQUFNYSxZQUFZO1dBQXVCaEIsV0FBV0M7RUFBUyJ9