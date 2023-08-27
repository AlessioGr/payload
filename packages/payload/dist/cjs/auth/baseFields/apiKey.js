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
var _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
var _extractTranslations = require("../../translations/extractTranslations");
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
var labels = (0, _extractTranslations.extractTranslations)([
    "authentication:enableAPIKey",
    "authentication:apiKey"
]);
var encryptKey = function(param) {
    var req = param.req, value = param.value;
    return value ? req.payload.encrypt(value) : undefined;
};
var decryptKey = function(param) {
    var req = param.req, value = param.value;
    return value ? req.payload.decrypt(value) : undefined;
};
var _default = [
    {
        name: "enableAPIKey",
        label: labels["authentication:enableAPIKey"],
        type: "checkbox",
        defaultValue: false,
        admin: {
            components: {
                Field: function() {
                    return null;
                }
            }
        }
    },
    {
        name: "apiKey",
        label: labels["authentication:apiKey"],
        type: "text",
        admin: {
            components: {
                Field: function() {
                    return null;
                }
            }
        },
        hooks: {
            beforeChange: [
                encryptKey
            ],
            afterRead: [
                decryptKey
            ]
        }
    },
    {
        name: "apiKeyIndex",
        type: "text",
        hidden: true,
        admin: {
            disabled: true
        },
        hooks: {
            beforeValidate: [
                function() {
                    var _ref = _async_to_generator(function(param) {
                        var data, req, value;
                        return _ts_generator(this, function(_state) {
                            data = param.data, req = param.req, value = param.value;
                            if (data.apiKey) {
                                return [
                                    2,
                                    _crypto.default.createHmac("sha1", req.payload.secret).update(data.apiKey).digest("hex")
                                ];
                            }
                            if (data.enableAPIKey === false) {
                                return [
                                    2,
                                    null
                                ];
                            }
                            return [
                                2,
                                value
                            ];
                        });
                    });
                    return function(_) {
                        return _ref.apply(this, arguments);
                    };
                }()
            ]
        }
    }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2Jhc2VGaWVsZHMvYXBpS2V5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCB7IEZpZWxkLCBGaWVsZEhvb2sgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGV4dHJhY3RUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvZXh0cmFjdFRyYW5zbGF0aW9ucyc7XG5cbmNvbnN0IGxhYmVscyA9IGV4dHJhY3RUcmFuc2xhdGlvbnMoWydhdXRoZW50aWNhdGlvbjplbmFibGVBUElLZXknLCAnYXV0aGVudGljYXRpb246YXBpS2V5J10pO1xuXG5jb25zdCBlbmNyeXB0S2V5OiBGaWVsZEhvb2sgPSAoeyByZXEsIHZhbHVlIH0pID0+ICh2YWx1ZSA/IHJlcS5wYXlsb2FkLmVuY3J5cHQodmFsdWUgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZCk7XG5jb25zdCBkZWNyeXB0S2V5OiBGaWVsZEhvb2sgPSAoeyByZXEsIHZhbHVlIH0pID0+ICh2YWx1ZSA/IHJlcS5wYXlsb2FkLmRlY3J5cHQodmFsdWUgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIG5hbWU6ICdlbmFibGVBUElLZXknLFxuICAgIGxhYmVsOiBsYWJlbHNbJ2F1dGhlbnRpY2F0aW9uOmVuYWJsZUFQSUtleSddLFxuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBGaWVsZDogKCkgPT4gbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdhcGlLZXknLFxuICAgIGxhYmVsOiBsYWJlbHNbJ2F1dGhlbnRpY2F0aW9uOmFwaUtleSddLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBGaWVsZDogKCkgPT4gbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBob29rczoge1xuICAgICAgYmVmb3JlQ2hhbmdlOiBbXG4gICAgICAgIGVuY3J5cHRLZXksXG4gICAgICBdLFxuICAgICAgYWZ0ZXJSZWFkOiBbXG4gICAgICAgIGRlY3J5cHRLZXksXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYXBpS2V5SW5kZXgnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBoaWRkZW46IHRydWUsXG4gICAgYWRtaW46IHtcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIH0sXG4gICAgaG9va3M6IHtcbiAgICAgIGJlZm9yZVZhbGlkYXRlOiBbXG4gICAgICAgIGFzeW5jICh7IGRhdGEsIHJlcSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLmFwaUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5jcmVhdGVIbWFjKCdzaGExJywgcmVxLnBheWxvYWQuc2VjcmV0KVxuICAgICAgICAgICAgICAudXBkYXRlKGRhdGEuYXBpS2V5IGFzIHN0cmluZylcbiAgICAgICAgICAgICAgLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkYXRhLmVuYWJsZUFQSUtleSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dIGFzIEZpZWxkW107XG4iXSwibmFtZXMiOlsibGFiZWxzIiwiZXh0cmFjdFRyYW5zbGF0aW9ucyIsImVuY3J5cHRLZXkiLCJyZXEiLCJ2YWx1ZSIsInBheWxvYWQiLCJlbmNyeXB0IiwidW5kZWZpbmVkIiwiZGVjcnlwdEtleSIsImRlY3J5cHQiLCJuYW1lIiwibGFiZWwiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwiYWRtaW4iLCJjb21wb25lbnRzIiwiRmllbGQiLCJob29rcyIsImJlZm9yZUNoYW5nZSIsImFmdGVyUmVhZCIsImhpZGRlbiIsImRpc2FibGVkIiwiYmVmb3JlVmFsaWRhdGUiLCJkYXRhIiwiYXBpS2V5IiwiY3J5cHRvIiwiY3JlYXRlSG1hYyIsInNlY3JldCIsInVwZGF0ZSIsImRpZ2VzdCIsImVuYWJsZUFQSUtleSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFTQTs7O2VBQUE7Ozs2REFUbUI7bUNBRWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQU1BLFNBQVNDLElBQUFBLHdDQUFtQixFQUFDO0lBQUM7SUFBK0I7Q0FBd0I7QUFFM0YsSUFBTUMsYUFBd0I7UUFBR0MsWUFBQUEsS0FBS0MsY0FBQUE7V0FBYUEsUUFBUUQsSUFBSUUsT0FBTyxDQUFDQyxPQUFPLENBQUNGLFNBQW1CRzs7QUFDbEcsSUFBTUMsYUFBd0I7UUFBR0wsWUFBQUEsS0FBS0MsY0FBQUE7V0FBYUEsUUFBUUQsSUFBSUUsT0FBTyxDQUFDSSxPQUFPLENBQUNMLFNBQW1CRzs7SUFFbEcsV0FBZTtJQUNiO1FBQ0VHLE1BQU07UUFDTkMsT0FBT1gsTUFBTSxDQUFDLDhCQUE4QjtRQUM1Q1ksTUFBTTtRQUNOQyxjQUFjO1FBQ2RDLE9BQU87WUFDTEMsWUFBWTtnQkFDVkMsT0FBTzsyQkFBTTs7WUFDZjtRQUNGO0lBQ0Y7SUFDQTtRQUNFTixNQUFNO1FBQ05DLE9BQU9YLE1BQU0sQ0FBQyx3QkFBd0I7UUFDdENZLE1BQU07UUFDTkUsT0FBTztZQUNMQyxZQUFZO2dCQUNWQyxPQUFPOzJCQUFNOztZQUNmO1FBQ0Y7UUFDQUMsT0FBTztZQUNMQyxjQUFjO2dCQUNaaEI7YUFDRDtZQUNEaUIsV0FBVztnQkFDVFg7YUFDRDtRQUNIO0lBQ0Y7SUFDQTtRQUNFRSxNQUFNO1FBQ05FLE1BQU07UUFDTlEsUUFBUTtRQUNSTixPQUFPO1lBQ0xPLFVBQVU7UUFDWjtRQUNBSixPQUFPO1lBQ0xLLGdCQUFnQjs7K0JBQ2Qsb0JBQUE7NEJBQVNDLE1BQU1wQixLQUFLQzs7NEJBQVhtQixhQUFBQSxNQUFNcEIsWUFBQUEsS0FBS0MsY0FBQUE7NEJBQ2xCLElBQUltQixLQUFLQyxNQUFNLEVBQUU7Z0NBQ2Y7O29DQUFPQyxlQUFNLENBQUNDLFVBQVUsQ0FBQyxRQUFRdkIsSUFBSUUsT0FBTyxDQUFDc0IsTUFBTSxFQUNoREMsTUFBTSxDQUFDTCxLQUFLQyxNQUFNLEVBQ2xCSyxNQUFNLENBQUM7OzRCQUNaOzRCQUNBLElBQUlOLEtBQUtPLFlBQVksS0FBSyxPQUFPO2dDQUMvQjs7b0NBQU87OzRCQUNUOzRCQUNBOztnQ0FBTzFCOzs7b0JBQ1Q7Ozs7O2FBQ0Q7UUFDSDtJQUNGO0NBQ0QifQ==