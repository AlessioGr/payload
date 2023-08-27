"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BasePayload: function() {
        return BasePayload;
    },
    getPayload: function() {
        return getPayload;
    }
});
var _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
var _path = /*#__PURE__*/ _interop_require_default(require("path"));
var _local = /*#__PURE__*/ _interop_require_default(require("./collections/operations/local"));
var _local1 = /*#__PURE__*/ _interop_require_default(require("./globals/operations/local"));
var _crypto1 = require("./auth/crypto");
var _registerSchema = /*#__PURE__*/ _interop_require_default(require("./graphql/registerSchema"));
var _build = /*#__PURE__*/ _interop_require_default(require("./email/build"));
var _sendEmail = /*#__PURE__*/ _interop_require_default(require("./email/sendEmail"));
var _serverInit = require("./utilities/telemetry/events/serverInit");
var _logger = /*#__PURE__*/ _interop_require_default(require("./utilities/logger"));
var _find = /*#__PURE__*/ _interop_require_default(require("./config/find"));
var _defaults = require("./email/defaults");
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var BasePayload = /*#__PURE__*/ function() {
    "use strict";
    function BasePayload() {
        var _this = this;
        _class_call_check(this, BasePayload);
        _define_property(this, "config", void 0);
        _define_property(this, "db", void 0);
        _define_property(this, "collections", {});
        _define_property(this, "versions", {});
        _define_property(this, "globals", void 0);
        _define_property(this, "logger", void 0);
        _define_property(this, "emailOptions", void 0);
        _define_property(this, "email", void 0);
        _define_property(this, "sendEmail", void 0);
        _define_property(this, "secret", void 0);
        _define_property(this, "local", void 0);
        _define_property(this, "encrypt", _crypto1.encrypt);
        _define_property(this, "decrypt", _crypto1.decrypt);
        _define_property(this, "errorHandler", void 0);
        _define_property(this, "authenticate", void 0);
        _define_property(this, "express", void 0);
        _define_property(this, "router", void 0);
        _define_property(this, "types", void 0);
        _define_property(this, "Query", {
            name: "Query",
            fields: {}
        });
        _define_property(this, "Mutation", {
            name: "Mutation",
            fields: {}
        });
        _define_property(this, "schema", void 0);
        _define_property(this, "extensions", void 0);
        _define_property(this, "validationRules", void 0);
        _define_property(this, "getAdminURL", function() {
            return "".concat(_this.config.serverURL).concat(_this.config.routes.admin);
        });
        _define_property(this, "getAPIURL", function() {
            return "".concat(_this.config.serverURL).concat(_this.config.routes.api);
        });
        var _this1 = this;
        /**
   * @description Performs create operation
   * @param options
   * @returns created document
   */ _define_property(this, "create", function() {
            var _ref = _async_to_generator(function(options) {
                var create;
                return _ts_generator(this, function(_state) {
                    create = _local.default.create;
                    return [
                        2,
                        create(_this1, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = this;
        /**
   * @description Find documents with criteria
   * @param options
   * @returns documents satisfying query
   */ _define_property(this, "find", function() {
            var _ref = _async_to_generator(function(options) {
                var find;
                return _ts_generator(this, function(_state) {
                    find = _local.default.find;
                    return [
                        2,
                        find(_this2, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this3 = this;
        /**
   * @description Find document by ID
   * @param options
   * @returns document with specified ID
   */ _define_property(this, "findByID", function() {
            var _ref = _async_to_generator(function(options) {
                var findByID;
                return _ts_generator(this, function(_state) {
                    findByID = _local.default.findByID;
                    return [
                        2,
                        findByID(_this3, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this4 = this;
        /**
   * @description Find versions with criteria
   * @param options
   * @returns versions satisfying query
   */ _define_property(this, "findVersions", function() {
            var _ref = _async_to_generator(function(options) {
                var findVersions;
                return _ts_generator(this, function(_state) {
                    findVersions = _local.default.findVersions;
                    return [
                        2,
                        findVersions(_this4, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this5 = this;
        /**
   * @description Find version by ID
   * @param options
   * @returns version with specified ID
   */ _define_property(this, "findVersionByID", function() {
            var _ref = _async_to_generator(function(options) {
                var findVersionByID;
                return _ts_generator(this, function(_state) {
                    findVersionByID = _local.default.findVersionByID;
                    return [
                        2,
                        findVersionByID(_this5, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this6 = this;
        /**
   * @description Restore version by ID
   * @param options
   * @returns version with specified ID
   */ _define_property(this, "restoreVersion", function() {
            var _ref = _async_to_generator(function(options) {
                var restoreVersion;
                return _ts_generator(this, function(_state) {
                    restoreVersion = _local.default.restoreVersion;
                    return [
                        2,
                        restoreVersion(_this6, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this7 = this;
        _define_property(this, "login", function() {
            var _ref = _async_to_generator(function(options) {
                var login;
                return _ts_generator(this, function(_state) {
                    login = _local.default.auth.login;
                    return [
                        2,
                        login(_this7, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this8 = this;
        _define_property(this, "forgotPassword", function() {
            var _ref = _async_to_generator(function(options) {
                var forgotPassword;
                return _ts_generator(this, function(_state) {
                    forgotPassword = _local.default.auth.forgotPassword;
                    return [
                        2,
                        forgotPassword(_this8, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this9 = this;
        _define_property(this, "resetPassword", function() {
            var _ref = _async_to_generator(function(options) {
                var resetPassword;
                return _ts_generator(this, function(_state) {
                    resetPassword = _local.default.auth.resetPassword;
                    return [
                        2,
                        resetPassword(_this9, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this10 = this;
        _define_property(this, "unlock", function() {
            var _ref = _async_to_generator(function(options) {
                var unlock;
                return _ts_generator(this, function(_state) {
                    unlock = _local.default.auth.unlock;
                    return [
                        2,
                        unlock(_this10, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this11 = this;
        _define_property(this, "verifyEmail", function() {
            var _ref = _async_to_generator(function(options) {
                var verifyEmail;
                return _ts_generator(this, function(_state) {
                    verifyEmail = _local.default.auth.verifyEmail;
                    return [
                        2,
                        verifyEmail(_this11, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this12 = this;
        _define_property(this, "findGlobal", function() {
            var _ref = _async_to_generator(function(options) {
                var findOne;
                return _ts_generator(this, function(_state) {
                    findOne = _local1.default.findOne;
                    return [
                        2,
                        findOne(_this12, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this13 = this;
        _define_property(this, "updateGlobal", function() {
            var _ref = _async_to_generator(function(options) {
                var update;
                return _ts_generator(this, function(_state) {
                    update = _local1.default.update;
                    return [
                        2,
                        update(_this13, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this14 = this;
        /**
   * @description Find global versions with criteria
   * @param options
   * @returns versions satisfying query
   */ _define_property(this, "findGlobalVersions", function() {
            var _ref = _async_to_generator(function(options) {
                var findVersions;
                return _ts_generator(this, function(_state) {
                    findVersions = _local1.default.findVersions;
                    return [
                        2,
                        findVersions(_this14, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this15 = this;
        /**
   * @description Find global version by ID
   * @param options
   * @returns global version with specified ID
   */ _define_property(this, "findGlobalVersionByID", function() {
            var _ref = _async_to_generator(function(options) {
                var findVersionByID;
                return _ts_generator(this, function(_state) {
                    findVersionByID = _local1.default.findVersionByID;
                    return [
                        2,
                        findVersionByID(_this15, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this16 = this;
        /**
   * @description Restore global version by ID
   * @param options
   * @returns version with specified ID
   */ _define_property(this, "restoreGlobalVersion", function() {
            var _ref = _async_to_generator(function(options) {
                var restoreVersion;
                return _ts_generator(this, function(_state) {
                    restoreVersion = _local1.default.restoreVersion;
                    return [
                        2,
                        restoreVersion(_this16, options)
                    ];
                });
            });
            return function(options) {
                return _ref.apply(this, arguments);
            };
        }());
    }
    _create_class(BasePayload, [
        {
            key: "init",
            value: /**
   * @description Initializes Payload
   * @param options
   */ function init(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_db, configPath, loadConfig, emailOptions;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.logger = (0, _logger.default)("payload", options.loggerOptions, options.loggerDestination);
                                _this.logger.info("Starting Payload...");
                                if (!options.secret) {
                                    throw new Error("Error: missing secret key. A secret key is needed to secure Payload.");
                                }
                                _this.secret = _crypto.default.createHash("sha256").update(options.secret).digest("hex").slice(0, 32);
                                _this.local = options.local;
                                if (!options.config) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    options.config
                                ];
                            case 1:
                                _this.config = _state.sent();
                                configPath = (0, _find.default)();
                                _this.config = _object_spread_props(_object_spread({}, _this.config), {
                                    paths: {
                                        configDir: _path.default.dirname(configPath),
                                        config: configPath,
                                        rawConfig: configPath
                                    }
                                });
                                return [
                                    3,
                                    5
                                ];
                            case 2:
                                return [
                                    4,
                                    Promise.resolve().then(function() {
                                        return /*#__PURE__*/ _interop_require_wildcard(require("./config/load"));
                                    })
                                ];
                            case 3:
                                loadConfig = _state.sent().default;
                                return [
                                    4,
                                    loadConfig(_this.logger)
                                ];
                            case 4:
                                _this.config = _state.sent();
                                _state.label = 5;
                            case 5:
                                _this.globals = {
                                    config: _this.config.globals
                                };
                                _this.config.collections.forEach(function(collection) {
                                    _this.collections[collection.slug] = {
                                        config: collection
                                    };
                                });
                                _this.db = _this.config.db({
                                    payload: _this
                                });
                                _this.db.payload = _this;
                                if (!((_this_db = _this.db) === null || _this_db === void 0 ? void 0 : _this_db.init)) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    _this.db.init(_this)
                                ];
                            case 6:
                                _state.sent();
                                _state.label = 7;
                            case 7:
                                if (!_this.db.connect) return [
                                    3,
                                    9
                                ];
                                return [
                                    4,
                                    _this.db.connect(_this)
                                ];
                            case 8:
                                _state.sent();
                                _state.label = 9;
                            case 9:
                                emailOptions = options.email ? _object_spread({}, options.email) : _this.config.email;
                                if (options.email && _this.config.email) {
                                    _this.logger.warn("Email options provided in both init options and config. Using init options.");
                                }
                                _this.emailOptions = emailOptions !== null && emailOptions !== void 0 ? emailOptions : _defaults.defaults;
                                _this.email = (0, _build.default)(_this.emailOptions, _this.logger);
                                _this.sendEmail = _sendEmail.default.bind(_this);
                                if (!_this.config.graphQL.disable) {
                                    (0, _registerSchema.default)(_this);
                                }
                                (0, _serverInit.serverInit)(_this);
                                if (!(options.local !== false)) return [
                                    3,
                                    13
                                ];
                                if (!(typeof options.onInit === "function")) return [
                                    3,
                                    11
                                ];
                                return [
                                    4,
                                    options.onInit(_this)
                                ];
                            case 10:
                                _state.sent();
                                _state.label = 11;
                            case 11:
                                if (!(typeof _this.config.onInit === "function")) return [
                                    3,
                                    13
                                ];
                                return [
                                    4,
                                    _this.config.onInit(_this)
                                ];
                            case 12:
                                _state.sent();
                                _state.label = 13;
                            case 13:
                                return [
                                    2,
                                    _this
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "update",
            value: function update(options) {
                var update = _local.default.update;
                return update(this, options);
            }
        },
        {
            key: "delete",
            value: function _delete(options) {
                var deleteLocal = _local.default.deleteLocal;
                return deleteLocal(this, options);
            }
        }
    ]);
    return BasePayload;
}();
var cached = global._payload;
if (!cached) {
    // eslint-disable-next-line no-multi-assign
    cached = global._payload = {
        payload: null,
        promise: null
    };
}
var getPayload = function() {
    var _ref = _async_to_generator(function(options) {
        var e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (cached.payload) {
                        return [
                            2,
                            cached.payload
                        ];
                    }
                    if (!cached.promise) {
                        cached.promise = new BasePayload().init(options);
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        cached.promise
                    ];
                case 2:
                    cached.payload = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    e = _state.sent();
                    cached.promise = null;
                    throw e;
                case 4:
                    return [
                        2,
                        cached.payload
                    ];
            }
        });
    });
    return function getPayload(options) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXlsb2FkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHBpbm8gZnJvbSAncGlubyc7XG5pbXBvcnQgdHlwZSB7IEV4cHJlc3MsIFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgRXhlY3V0aW9uUmVzdWx0LCBHcmFwaFFMU2NoZW1hLCBWYWxpZGF0aW9uUnVsZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuLy8gQHRzLWlnbm9yZSAvLyBUT0RPOiBCcm9rZSB3aXRoIHBucG0vd29ya3NwYWNlcy9lc20uIEZpeCB0aGlzXG5pbXBvcnQgeyBPcGVyYXRpb25BcmdzLCBSZXF1ZXN0IGFzIGdyYXBoUUxSZXF1ZXN0IH0gZnJvbSAnZ3JhcGhxbC1odHRwL2xpYi9oYW5kbGVyJztcbmltcG9ydCB7IFNlbmRNYWlsT3B0aW9ucyB9IGZyb20gJ25vZGVtYWlsZXInO1xuaW1wb3J0IHsgQnVsa09wZXJhdGlvblJlc3VsdCwgQ29sbGVjdGlvbiB9IGZyb20gJy4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IEVtYWlsT3B0aW9ucywgSW5pdE9wdGlvbnMsIFNhbml0aXplZENvbmZpZyB9IGZyb20gJy4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFR5cGVXaXRoVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbnMvdHlwZXMnO1xuXG5pbXBvcnQgeyBQYXlsb2FkQXV0aGVudGljYXRlIH0gZnJvbSAnLi9leHByZXNzL21pZGRsZXdhcmUvYXV0aGVudGljYXRlJztcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tICcuL2dsb2JhbHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IEVycm9ySGFuZGxlciB9IGZyb20gJy4vZXhwcmVzcy9taWRkbGV3YXJlL2Vycm9ySGFuZGxlcic7XG5pbXBvcnQgbG9jYWxPcGVyYXRpb25zIGZyb20gJy4vY29sbGVjdGlvbnMvb3BlcmF0aW9ucy9sb2NhbCc7XG5pbXBvcnQgbG9jYWxHbG9iYWxPcGVyYXRpb25zIGZyb20gJy4vZ2xvYmFscy9vcGVyYXRpb25zL2xvY2FsJztcbmltcG9ydCB7IGRlY3J5cHQsIGVuY3J5cHQgfSBmcm9tICcuL2F1dGgvY3J5cHRvJztcbmltcG9ydCB7IEJ1aWxkRW1haWxSZXN1bHQgfSBmcm9tICcuL2VtYWlsL3R5cGVzJztcblxuaW1wb3J0IHsgT3B0aW9ucyBhcyBDcmVhdGVPcHRpb25zIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2NyZWF0ZSc7XG5pbXBvcnQgeyBPcHRpb25zIGFzIEZpbmRPcHRpb25zIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2ZpbmQnO1xuaW1wb3J0IHtcbiAgQnlJRE9wdGlvbnMgYXMgVXBkYXRlQnlJRE9wdGlvbnMsXG4gIE1hbnlPcHRpb25zIGFzIFVwZGF0ZU1hbnlPcHRpb25zLFxuICBPcHRpb25zIGFzIFVwZGF0ZU9wdGlvbnMsXG59IGZyb20gJy4vY29sbGVjdGlvbnMvb3BlcmF0aW9ucy9sb2NhbC91cGRhdGUnO1xuaW1wb3J0IHtcbiAgQnlJRE9wdGlvbnMgYXMgRGVsZXRlQnlJRE9wdGlvbnMsXG4gIE1hbnlPcHRpb25zIGFzIERlbGV0ZU1hbnlPcHRpb25zLFxuICBPcHRpb25zIGFzIERlbGV0ZU9wdGlvbnMsXG59IGZyb20gJy4vY29sbGVjdGlvbnMvb3BlcmF0aW9ucy9sb2NhbC9kZWxldGUnO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBGaW5kQnlJRE9wdGlvbnMgfSBmcm9tICcuL2NvbGxlY3Rpb25zL29wZXJhdGlvbnMvbG9jYWwvZmluZEJ5SUQnO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBGaW5kVmVyc2lvbnNPcHRpb25zIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2ZpbmRWZXJzaW9ucyc7XG5pbXBvcnQgeyBPcHRpb25zIGFzIEZpbmRWZXJzaW9uQnlJRE9wdGlvbnMgfSBmcm9tICcuL2NvbGxlY3Rpb25zL29wZXJhdGlvbnMvbG9jYWwvZmluZFZlcnNpb25CeUlEJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgUmVzdG9yZVZlcnNpb25PcHRpb25zIH0gZnJvbSAnLi9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL3Jlc3RvcmVWZXJzaW9uJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgRmluZEdsb2JhbFZlcnNpb25zT3B0aW9ucyB9IGZyb20gJy4vZ2xvYmFscy9vcGVyYXRpb25zL2xvY2FsL2ZpbmRWZXJzaW9ucyc7XG5pbXBvcnQgeyBPcHRpb25zIGFzIEZpbmRHbG9iYWxWZXJzaW9uQnlJRE9wdGlvbnMgfSBmcm9tICcuL2dsb2JhbHMvb3BlcmF0aW9ucy9sb2NhbC9maW5kVmVyc2lvbkJ5SUQnO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBSZXN0b3JlR2xvYmFsVmVyc2lvbk9wdGlvbnMgfSBmcm9tICcuL2dsb2JhbHMvb3BlcmF0aW9ucy9sb2NhbC9yZXN0b3JlVmVyc2lvbic7XG5pbXBvcnQgeyBPcHRpb25zIGFzIEZvcmdvdFBhc3N3b3JkT3B0aW9ucyB9IGZyb20gJy4vYXV0aC9vcGVyYXRpb25zL2xvY2FsL2ZvcmdvdFBhc3N3b3JkJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgTG9naW5PcHRpb25zIH0gZnJvbSAnLi9hdXRoL29wZXJhdGlvbnMvbG9jYWwvbG9naW4nO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBSZXNldFBhc3N3b3JkT3B0aW9ucyB9IGZyb20gJy4vYXV0aC9vcGVyYXRpb25zL2xvY2FsL3Jlc2V0UGFzc3dvcmQnO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBVbmxvY2tPcHRpb25zIH0gZnJvbSAnLi9hdXRoL29wZXJhdGlvbnMvbG9jYWwvdW5sb2NrJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgVmVyaWZ5RW1haWxPcHRpb25zIH0gZnJvbSAnLi9hdXRoL29wZXJhdGlvbnMvbG9jYWwvdmVyaWZ5RW1haWwnO1xuaW1wb3J0IHsgUmVzdWx0IGFzIEZvcmdvdFBhc3N3b3JkUmVzdWx0IH0gZnJvbSAnLi9hdXRoL29wZXJhdGlvbnMvZm9yZ290UGFzc3dvcmQnO1xuaW1wb3J0IHsgUmVzdWx0IGFzIFJlc2V0UGFzc3dvcmRSZXN1bHQgfSBmcm9tICcuL2F1dGgvb3BlcmF0aW9ucy9yZXNldFBhc3N3b3JkJztcbmltcG9ydCB7IFJlc3VsdCBhcyBMb2dpblJlc3VsdCB9IGZyb20gJy4vYXV0aC9vcGVyYXRpb25zL2xvZ2luJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgRmluZEdsb2JhbE9wdGlvbnMgfSBmcm9tICcuL2dsb2JhbHMvb3BlcmF0aW9ucy9sb2NhbC9maW5kT25lJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgVXBkYXRlR2xvYmFsT3B0aW9ucyB9IGZyb20gJy4vZ2xvYmFscy9vcGVyYXRpb25zL2xvY2FsL3VwZGF0ZSc7XG5cbmltcG9ydCByZWdpc3RlckdyYXBoUUxTY2hlbWEgZnJvbSAnLi9ncmFwaHFsL3JlZ2lzdGVyU2NoZW1hJztcbmltcG9ydCBidWlsZEVtYWlsIGZyb20gJy4vZW1haWwvYnVpbGQnO1xuaW1wb3J0IHNlbmRFbWFpbCBmcm9tICcuL2VtYWlsL3NlbmRFbWFpbCc7XG5cbmltcG9ydCB7IHNlcnZlckluaXQgYXMgc2VydmVySW5pdFRlbGVtZXRyeSB9IGZyb20gJy4vdXRpbGl0aWVzL3RlbGVtZXRyeS9ldmVudHMvc2VydmVySW5pdCc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4vdXRpbGl0aWVzL2xvZ2dlcic7XG5pbXBvcnQgZmluZENvbmZpZyBmcm9tICcuL2NvbmZpZy9maW5kJztcblxuaW1wb3J0IHsgZGVmYXVsdHMgYXMgZW1haWxEZWZhdWx0cyB9IGZyb20gJy4vZW1haWwvZGVmYXVsdHMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi9kYXRhYmFzZS90eXBlcyc7XG5pbXBvcnQgeyBEYXRhYmFzZUFkYXB0ZXIgfSBmcm9tICcuL2RhdGFiYXNlL3R5cGVzJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUGF5bG9hZFxuICovXG5leHBvcnQgY2xhc3MgQmFzZVBheWxvYWQ8VEdlbmVyYXRlZFR5cGVzIGV4dGVuZHMgR2VuZXJhdGVkVHlwZXM+IHtcbiAgY29uZmlnOiBTYW5pdGl6ZWRDb25maWc7XG5cbiAgZGI6IERhdGFiYXNlQWRhcHRlcjtcblxuICBjb2xsZWN0aW9uczoge1xuICAgIFtzbHVnOiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2xdOiBDb2xsZWN0aW9uO1xuICB9ID0ge307XG5cbiAgdmVyc2lvbnM6IHtcbiAgICBbc2x1Zzogc3RyaW5nXTogYW55OyAvLyBUT0RPOiBUeXBlIHRoaXNcbiAgfSA9IHt9O1xuXG4gIGdsb2JhbHM6IEdsb2JhbHM7XG5cbiAgbG9nZ2VyOiBwaW5vLkxvZ2dlcjtcblxuICBlbWFpbE9wdGlvbnM6IEVtYWlsT3B0aW9ucztcblxuICBlbWFpbDogQnVpbGRFbWFpbFJlc3VsdDtcblxuICBzZW5kRW1haWw6IChtZXNzYWdlOiBTZW5kTWFpbE9wdGlvbnMpID0+IFByb21pc2U8dW5rbm93bj47XG5cbiAgc2VjcmV0OiBzdHJpbmc7XG5cbiAgbG9jYWw6IGJvb2xlYW47XG5cbiAgZW5jcnlwdCA9IGVuY3J5cHQ7XG5cbiAgZGVjcnlwdCA9IGRlY3J5cHQ7XG5cbiAgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXI7XG5cbiAgYXV0aGVudGljYXRlOiBQYXlsb2FkQXV0aGVudGljYXRlO1xuXG4gIGV4cHJlc3M/OiBFeHByZXNzO1xuXG4gIHJvdXRlcj86IFJvdXRlcjtcblxuICB0eXBlczoge1xuICAgIGJsb2NrVHlwZXM6IGFueTtcbiAgICBibG9ja0lucHV0VHlwZXM6IGFueTtcbiAgICBncm91cFR5cGVzOiBhbnk7XG4gICAgYXJyYXlUeXBlczogYW55O1xuICAgIHRhYlR5cGVzOiBhbnk7XG4gICAgbG9jYWxlSW5wdXRUeXBlPzogYW55O1xuICAgIGZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlPzogYW55O1xuICB9O1xuXG4gIFF1ZXJ5OiB7IG5hbWU6IHN0cmluZzsgZmllbGRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IH0gPSB7IG5hbWU6ICdRdWVyeScsIGZpZWxkczoge30gfTtcblxuICBNdXRhdGlvbjogeyBuYW1lOiBzdHJpbmc7IGZpZWxkczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB9ID0geyBuYW1lOiAnTXV0YXRpb24nLCBmaWVsZHM6IHt9IH07XG5cbiAgc2NoZW1hOiBHcmFwaFFMU2NoZW1hO1xuXG4gIGV4dGVuc2lvbnM6IChhcmdzOiB7XG4gICAgcmVxOiBncmFwaFFMUmVxdWVzdDx1bmtub3duLCB1bmtub3duPixcbiAgICBhcmdzOiBPcGVyYXRpb25BcmdzPGFueT4sXG4gICAgcmVzdWx0OiBFeGVjdXRpb25SZXN1bHRcbiAgfSkgPT4gUHJvbWlzZTxhbnk+O1xuXG4gIHZhbGlkYXRpb25SdWxlczogKGFyZ3M6IE9wZXJhdGlvbkFyZ3M8YW55PikgPT4gVmFsaWRhdGlvblJ1bGVbXTtcblxuICBnZXRBZG1pblVSTCA9ICgpOiBzdHJpbmcgPT4gYCR7dGhpcy5jb25maWcuc2VydmVyVVJMfSR7dGhpcy5jb25maWcucm91dGVzLmFkbWlufWA7XG5cbiAgZ2V0QVBJVVJMID0gKCk6IHN0cmluZyA9PiBgJHt0aGlzLmNvbmZpZy5zZXJ2ZXJVUkx9JHt0aGlzLmNvbmZpZy5yb3V0ZXMuYXBpfWA7XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyBQYXlsb2FkXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBhc3luYyBpbml0KG9wdGlvbnM6IEluaXRPcHRpb25zKTogUHJvbWlzZTxQYXlsb2FkPiB7XG4gICAgdGhpcy5sb2dnZXIgPSBMb2dnZXIoJ3BheWxvYWQnLCBvcHRpb25zLmxvZ2dlck9wdGlvbnMsIG9wdGlvbnMubG9nZ2VyRGVzdGluYXRpb24pO1xuXG4gICAgdGhpcy5sb2dnZXIuaW5mbygnU3RhcnRpbmcgUGF5bG9hZC4uLicpO1xuICAgIGlmICghb3B0aW9ucy5zZWNyZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Vycm9yOiBtaXNzaW5nIHNlY3JldCBrZXkuIEEgc2VjcmV0IGtleSBpcyBuZWVkZWQgdG8gc2VjdXJlIFBheWxvYWQuJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWNyZXQgPSBjcnlwdG9cbiAgICAgIC5jcmVhdGVIYXNoKCdzaGEyNTYnKVxuICAgICAgLnVwZGF0ZShvcHRpb25zLnNlY3JldClcbiAgICAgIC5kaWdlc3QoJ2hleCcpXG4gICAgICAuc2xpY2UoMCwgMzIpO1xuXG4gICAgdGhpcy5sb2NhbCA9IG9wdGlvbnMubG9jYWw7XG5cbiAgICBpZiAob3B0aW9ucy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gYXdhaXQgb3B0aW9ucy5jb25maWc7XG4gICAgICBjb25zdCBjb25maWdQYXRoID0gZmluZENvbmZpZygpO1xuXG4gICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgLi4udGhpcy5jb25maWcsXG4gICAgICAgIHBhdGhzOiB7XG4gICAgICAgICAgY29uZmlnRGlyOiBwYXRoLmRpcm5hbWUoY29uZmlnUGF0aCksXG4gICAgICAgICAgY29uZmlnOiBjb25maWdQYXRoLFxuICAgICAgICAgIHJhd0NvbmZpZzogY29uZmlnUGF0aCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxvYWRDb25maWcgPSAoYXdhaXQgaW1wb3J0KCcuL2NvbmZpZy9sb2FkJykpLmRlZmF1bHQ7XG4gICAgICB0aGlzLmNvbmZpZyA9IGF3YWl0IGxvYWRDb25maWcodGhpcy5sb2dnZXIpO1xuICAgIH1cblxuICAgIHRoaXMuZ2xvYmFscyA9IHtcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcuZ2xvYmFscyxcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnLmNvbGxlY3Rpb25zLmZvckVhY2goKGNvbGxlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnNbY29sbGVjdGlvbi5zbHVnXSA9IHtcbiAgICAgICAgY29uZmlnOiBjb2xsZWN0aW9uLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGIgPSB0aGlzLmNvbmZpZy5kYih7IHBheWxvYWQ6IHRoaXMgfSk7XG4gICAgdGhpcy5kYi5wYXlsb2FkID0gdGhpcztcblxuICAgIGlmICh0aGlzLmRiPy5pbml0KSB7XG4gICAgICBhd2FpdCB0aGlzLmRiLmluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGIuY29ubmVjdCkge1xuICAgICAgYXdhaXQgdGhpcy5kYi5jb25uZWN0KHRoaXMpO1xuICAgIH1cblxuICAgIC8vIENvbmZpZ3VyZSBlbWFpbCBzZXJ2aWNlXG4gICAgY29uc3QgZW1haWxPcHRpb25zID0gb3B0aW9ucy5lbWFpbCA/IHsgLi4ub3B0aW9ucy5lbWFpbCB9IDogdGhpcy5jb25maWcuZW1haWw7XG4gICAgaWYgKG9wdGlvbnMuZW1haWwgJiYgdGhpcy5jb25maWcuZW1haWwpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oXG4gICAgICAgICdFbWFpbCBvcHRpb25zIHByb3ZpZGVkIGluIGJvdGggaW5pdCBvcHRpb25zIGFuZCBjb25maWcuIFVzaW5nIGluaXQgb3B0aW9ucy4nLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmVtYWlsT3B0aW9ucyA9IGVtYWlsT3B0aW9ucyA/PyBlbWFpbERlZmF1bHRzO1xuICAgIHRoaXMuZW1haWwgPSBidWlsZEVtYWlsKHRoaXMuZW1haWxPcHRpb25zLCB0aGlzLmxvZ2dlcik7XG4gICAgdGhpcy5zZW5kRW1haWwgPSBzZW5kRW1haWwuYmluZCh0aGlzKTtcblxuICAgIGlmICghdGhpcy5jb25maWcuZ3JhcGhRTC5kaXNhYmxlKSB7XG4gICAgICByZWdpc3RlckdyYXBoUUxTY2hlbWEodGhpcyk7XG4gICAgfVxuXG4gICAgc2VydmVySW5pdFRlbGVtZXRyeSh0aGlzKTtcblxuICAgIGlmIChvcHRpb25zLmxvY2FsICE9PSBmYWxzZSkge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uSW5pdCA9PT0gJ2Z1bmN0aW9uJykgYXdhaXQgb3B0aW9ucy5vbkluaXQodGhpcyk7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9uSW5pdCA9PT0gJ2Z1bmN0aW9uJykgYXdhaXQgdGhpcy5jb25maWcub25Jbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBQZXJmb3JtcyBjcmVhdGUgb3BlcmF0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIGNyZWF0ZWQgZG9jdW1lbnRcbiAgICovXG4gIGNyZWF0ZSA9IGFzeW5jIDxUIGV4dGVuZHMga2V5b2YgVEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgICBvcHRpb25zOiBDcmVhdGVPcHRpb25zPFQ+LFxuICApOiBQcm9taXNlPFRHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUXT4gPT4ge1xuICAgIGNvbnN0IHsgY3JlYXRlIH0gPSBsb2NhbE9wZXJhdGlvbnM7XG4gICAgcmV0dXJuIGNyZWF0ZTxUPih0aGlzLCBvcHRpb25zKTtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZpbmQgZG9jdW1lbnRzIHdpdGggY3JpdGVyaWFcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMgZG9jdW1lbnRzIHNhdGlzZnlpbmcgcXVlcnlcbiAgICovXG4gIGZpbmQgPSBhc3luYyA8VCBleHRlbmRzIGtleW9mIFRHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gICAgb3B0aW9uczogRmluZE9wdGlvbnM8VD4sXG4gICk6IFByb21pc2U8UGFnaW5hdGVkRG9jczxUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVF0+PiA9PiB7XG4gICAgY29uc3QgeyBmaW5kIH0gPSBsb2NhbE9wZXJhdGlvbnM7XG4gICAgcmV0dXJuIGZpbmQ8VD4odGhpcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBGaW5kIGRvY3VtZW50IGJ5IElEXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIGRvY3VtZW50IHdpdGggc3BlY2lmaWVkIElEXG4gICAqL1xuXG4gIGZpbmRCeUlEID0gYXN5bmMgPFQgZXh0ZW5kcyBrZXlvZiBUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICAgIG9wdGlvbnM6IEZpbmRCeUlET3B0aW9uczxUPixcbiAgKTogUHJvbWlzZTxUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVF0+ID0+IHtcbiAgICBjb25zdCB7IGZpbmRCeUlEIH0gPSBsb2NhbE9wZXJhdGlvbnM7XG4gICAgcmV0dXJuIGZpbmRCeUlEPFQ+KHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gVXBkYXRlIG9uZSBvciBtb3JlIGRvY3VtZW50c1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyBVcGRhdGVkIGRvY3VtZW50KHMpXG4gICAqL1xuICB1cGRhdGU8VCBleHRlbmRzIGtleW9mIFRHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4ob3B0aW9uczogVXBkYXRlQnlJRE9wdGlvbnM8VD4pOiBQcm9taXNlPFRHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUXT5cblxuICB1cGRhdGU8VCBleHRlbmRzIGtleW9mIFRHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4ob3B0aW9uczogVXBkYXRlTWFueU9wdGlvbnM8VD4pOiBQcm9taXNlPEJ1bGtPcGVyYXRpb25SZXN1bHQ8VD4+XG5cbiAgdXBkYXRlPFQgZXh0ZW5kcyBrZXlvZiBUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KG9wdGlvbnM6IFVwZGF0ZU9wdGlvbnM8VD4pOiBQcm9taXNlPFRHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUXSB8IEJ1bGtPcGVyYXRpb25SZXN1bHQ8VD4+IHtcbiAgICBjb25zdCB7IHVwZGF0ZSB9ID0gbG9jYWxPcGVyYXRpb25zO1xuICAgIHJldHVybiB1cGRhdGU8VD4odGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGRlbGV0ZSBvbmUgb3IgbW9yZSBkb2N1bWVudHNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMgVXBkYXRlZCBkb2N1bWVudChzKVxuICAgKi9cbiAgZGVsZXRlPFQgZXh0ZW5kcyBrZXlvZiBUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KG9wdGlvbnM6IERlbGV0ZUJ5SURPcHRpb25zPFQ+KTogUHJvbWlzZTxUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVF0+XG5cbiAgZGVsZXRlPFQgZXh0ZW5kcyBrZXlvZiBUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KG9wdGlvbnM6IERlbGV0ZU1hbnlPcHRpb25zPFQ+KTogUHJvbWlzZTxCdWxrT3BlcmF0aW9uUmVzdWx0PFQ+PlxuXG4gIGRlbGV0ZTxUIGV4dGVuZHMga2V5b2YgVEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihvcHRpb25zOiBEZWxldGVPcHRpb25zPFQ+KTogUHJvbWlzZTxUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVF0gfCBCdWxrT3BlcmF0aW9uUmVzdWx0PFQ+PiB7XG4gICAgY29uc3QgeyBkZWxldGVMb2NhbCB9ID0gbG9jYWxPcGVyYXRpb25zO1xuICAgIHJldHVybiBkZWxldGVMb2NhbDxUPih0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRmluZCB2ZXJzaW9ucyB3aXRoIGNyaXRlcmlhXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHZlcnNpb25zIHNhdGlzZnlpbmcgcXVlcnlcbiAgICovXG4gIGZpbmRWZXJzaW9ucyA9IGFzeW5jIDxUIGV4dGVuZHMga2V5b2YgVEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgICBvcHRpb25zOiBGaW5kVmVyc2lvbnNPcHRpb25zPFQ+LFxuICApOiBQcm9taXNlPFBhZ2luYXRlZERvY3M8VHlwZVdpdGhWZXJzaW9uPFRHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUXT4+PiA9PiB7XG4gICAgY29uc3QgeyBmaW5kVmVyc2lvbnMgfSA9IGxvY2FsT3BlcmF0aW9ucztcbiAgICByZXR1cm4gZmluZFZlcnNpb25zPFQ+KHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gRmluZCB2ZXJzaW9uIGJ5IElEXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHZlcnNpb24gd2l0aCBzcGVjaWZpZWQgSURcbiAgICovXG4gIGZpbmRWZXJzaW9uQnlJRCA9IGFzeW5jIDxUIGV4dGVuZHMga2V5b2YgVEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgICBvcHRpb25zOiBGaW5kVmVyc2lvbkJ5SURPcHRpb25zPFQ+LFxuICApOiBQcm9taXNlPFR5cGVXaXRoVmVyc2lvbjxUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVF0+PiA9PiB7XG4gICAgY29uc3QgeyBmaW5kVmVyc2lvbkJ5SUQgfSA9IGxvY2FsT3BlcmF0aW9ucztcbiAgICByZXR1cm4gZmluZFZlcnNpb25CeUlEPFQ+KHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gUmVzdG9yZSB2ZXJzaW9uIGJ5IElEXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHZlcnNpb24gd2l0aCBzcGVjaWZpZWQgSURcbiAgICovXG4gIHJlc3RvcmVWZXJzaW9uID0gYXN5bmMgPFQgZXh0ZW5kcyBrZXlvZiBUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICAgIG9wdGlvbnM6IFJlc3RvcmVWZXJzaW9uT3B0aW9uczxUPixcbiAgKTogUHJvbWlzZTxUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVF0+ID0+IHtcbiAgICBjb25zdCB7IHJlc3RvcmVWZXJzaW9uIH0gPSBsb2NhbE9wZXJhdGlvbnM7XG4gICAgcmV0dXJuIHJlc3RvcmVWZXJzaW9uPFQ+KHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGxvZ2luID0gYXN5bmMgPFQgZXh0ZW5kcyBrZXlvZiBUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICAgIG9wdGlvbnM6IExvZ2luT3B0aW9uczxUPixcbiAgKTogUHJvbWlzZTxMb2dpblJlc3VsdCAmIHsgdXNlcjogVEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RdIH0+ID0+IHtcbiAgICBjb25zdCB7IGxvZ2luIH0gPSBsb2NhbE9wZXJhdGlvbnMuYXV0aDtcbiAgICByZXR1cm4gbG9naW48VD4odGhpcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgZm9yZ290UGFzc3dvcmQgPSBhc3luYyA8VCBleHRlbmRzIGtleW9mIFRHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gICAgb3B0aW9uczogRm9yZ290UGFzc3dvcmRPcHRpb25zPFQ+LFxuICApOiBQcm9taXNlPEZvcmdvdFBhc3N3b3JkUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgeyBmb3Jnb3RQYXNzd29yZCB9ID0gbG9jYWxPcGVyYXRpb25zLmF1dGg7XG4gICAgcmV0dXJuIGZvcmdvdFBhc3N3b3JkPFQ+KHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHJlc2V0UGFzc3dvcmQgPSBhc3luYyA8VCBleHRlbmRzIGtleW9mIFRHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gICAgb3B0aW9uczogUmVzZXRQYXNzd29yZE9wdGlvbnM8VD4sXG4gICk6IFByb21pc2U8UmVzZXRQYXNzd29yZFJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHsgcmVzZXRQYXNzd29yZCB9ID0gbG9jYWxPcGVyYXRpb25zLmF1dGg7XG4gICAgcmV0dXJuIHJlc2V0UGFzc3dvcmQ8VD4odGhpcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgdW5sb2NrID0gYXN5bmMgPFQgZXh0ZW5kcyBrZXlvZiBUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICAgIG9wdGlvbnM6IFVubG9ja09wdGlvbnM8VD4sXG4gICk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIGNvbnN0IHsgdW5sb2NrIH0gPSBsb2NhbE9wZXJhdGlvbnMuYXV0aDtcbiAgICByZXR1cm4gdW5sb2NrKHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHZlcmlmeUVtYWlsID0gYXN5bmMgPFQgZXh0ZW5kcyBrZXlvZiBUR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ10+KFxuICAgIG9wdGlvbnM6IFZlcmlmeUVtYWlsT3B0aW9uczxUPixcbiAgKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgY29uc3QgeyB2ZXJpZnlFbWFpbCB9ID0gbG9jYWxPcGVyYXRpb25zLmF1dGg7XG4gICAgcmV0dXJuIHZlcmlmeUVtYWlsKHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGZpbmRHbG9iYWwgPSBhc3luYyA8VCBleHRlbmRzIGtleW9mIFRHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddPihcbiAgICBvcHRpb25zOiBGaW5kR2xvYmFsT3B0aW9uczxUPixcbiAgKTogUHJvbWlzZTxUR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXVtUXT4gPT4ge1xuICAgIGNvbnN0IHsgZmluZE9uZSB9ID0gbG9jYWxHbG9iYWxPcGVyYXRpb25zO1xuICAgIHJldHVybiBmaW5kT25lPFQ+KHRoaXMsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHVwZGF0ZUdsb2JhbCA9IGFzeW5jIDxUIGV4dGVuZHMga2V5b2YgVEdlbmVyYXRlZFR5cGVzWydnbG9iYWxzJ10+KFxuICAgIG9wdGlvbnM6IFVwZGF0ZUdsb2JhbE9wdGlvbnM8VD4sXG4gICk6IFByb21pc2U8VEdlbmVyYXRlZFR5cGVzWydnbG9iYWxzJ11bVF0+ID0+IHtcbiAgICBjb25zdCB7IHVwZGF0ZSB9ID0gbG9jYWxHbG9iYWxPcGVyYXRpb25zO1xuICAgIHJldHVybiB1cGRhdGU8VD4odGhpcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBGaW5kIGdsb2JhbCB2ZXJzaW9ucyB3aXRoIGNyaXRlcmlhXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHZlcnNpb25zIHNhdGlzZnlpbmcgcXVlcnlcbiAgICovXG4gIGZpbmRHbG9iYWxWZXJzaW9ucyA9IGFzeW5jIDxUIGV4dGVuZHMga2V5b2YgVEdlbmVyYXRlZFR5cGVzWydnbG9iYWxzJ10+KFxuICAgIG9wdGlvbnM6IEZpbmRHbG9iYWxWZXJzaW9uc09wdGlvbnM8VD4sXG4gICk6IFByb21pc2U8UGFnaW5hdGVkRG9jczxUeXBlV2l0aFZlcnNpb248VEdlbmVyYXRlZFR5cGVzWydnbG9iYWxzJ11bVF0+Pj4gPT4ge1xuICAgIGNvbnN0IHsgZmluZFZlcnNpb25zIH0gPSBsb2NhbEdsb2JhbE9wZXJhdGlvbnM7XG4gICAgcmV0dXJuIGZpbmRWZXJzaW9uczxUPih0aGlzLCBvcHRpb25zKTtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIEZpbmQgZ2xvYmFsIHZlcnNpb24gYnkgSURcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMgZ2xvYmFsIHZlcnNpb24gd2l0aCBzcGVjaWZpZWQgSURcbiAgICovXG4gIGZpbmRHbG9iYWxWZXJzaW9uQnlJRCA9IGFzeW5jIDxUIGV4dGVuZHMga2V5b2YgVEdlbmVyYXRlZFR5cGVzWydnbG9iYWxzJ10+KFxuICAgIG9wdGlvbnM6IEZpbmRHbG9iYWxWZXJzaW9uQnlJRE9wdGlvbnM8VD4sXG4gICk6IFByb21pc2U8VHlwZVdpdGhWZXJzaW9uPFRHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddW1RdPj4gPT4ge1xuICAgIGNvbnN0IHsgZmluZFZlcnNpb25CeUlEIH0gPSBsb2NhbEdsb2JhbE9wZXJhdGlvbnM7XG4gICAgcmV0dXJuIGZpbmRWZXJzaW9uQnlJRDxUPih0aGlzLCBvcHRpb25zKTtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIFJlc3RvcmUgZ2xvYmFsIHZlcnNpb24gYnkgSURcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMgdmVyc2lvbiB3aXRoIHNwZWNpZmllZCBJRFxuICAgKi9cbiAgcmVzdG9yZUdsb2JhbFZlcnNpb24gPSBhc3luYyA8VCBleHRlbmRzIGtleW9mIFRHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddPihcbiAgICBvcHRpb25zOiBSZXN0b3JlR2xvYmFsVmVyc2lvbk9wdGlvbnM8VD4sXG4gICk6IFByb21pc2U8VEdlbmVyYXRlZFR5cGVzWydnbG9iYWxzJ11bVF0+ID0+IHtcbiAgICBjb25zdCB7IHJlc3RvcmVWZXJzaW9uIH0gPSBsb2NhbEdsb2JhbE9wZXJhdGlvbnM7XG4gICAgcmV0dXJuIHJlc3RvcmVWZXJzaW9uPFQ+KHRoaXMsIG9wdGlvbnMpO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBQYXlsb2FkID0gQmFzZVBheWxvYWQ8R2VuZXJhdGVkVHlwZXM+XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwuX3BheWxvYWQ7XG5cbmlmICghY2FjaGVkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cbiAgY2FjaGVkID0gZ2xvYmFsLl9wYXlsb2FkID0geyBwYXlsb2FkOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQYXlsb2FkID0gYXN5bmMgKG9wdGlvbnM6IEluaXRPcHRpb25zKTogUHJvbWlzZTxQYXlsb2FkPiA9PiB7XG4gIGlmIChjYWNoZWQucGF5bG9hZCkge1xuICAgIHJldHVybiBjYWNoZWQucGF5bG9hZDtcbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG5ldyBCYXNlUGF5bG9hZDxHZW5lcmF0ZWRUeXBlcz4oKS5pbml0KG9wdGlvbnMpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQucGF5bG9hZCA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLnBheWxvYWQ7XG59O1xuIl0sIm5hbWVzIjpbIkJhc2VQYXlsb2FkIiwiZ2V0UGF5bG9hZCIsImNvbmZpZyIsImRiIiwiY29sbGVjdGlvbnMiLCJ2ZXJzaW9ucyIsImdsb2JhbHMiLCJsb2dnZXIiLCJlbWFpbE9wdGlvbnMiLCJlbWFpbCIsInNlbmRFbWFpbCIsInNlY3JldCIsImxvY2FsIiwiZW5jcnlwdCIsImRlY3J5cHQiLCJlcnJvckhhbmRsZXIiLCJhdXRoZW50aWNhdGUiLCJleHByZXNzIiwicm91dGVyIiwidHlwZXMiLCJRdWVyeSIsIm5hbWUiLCJmaWVsZHMiLCJNdXRhdGlvbiIsInNjaGVtYSIsImV4dGVuc2lvbnMiLCJ2YWxpZGF0aW9uUnVsZXMiLCJnZXRBZG1pblVSTCIsInNlcnZlclVSTCIsInJvdXRlcyIsImFkbWluIiwiZ2V0QVBJVVJMIiwiYXBpIiwiY3JlYXRlIiwib3B0aW9ucyIsImxvY2FsT3BlcmF0aW9ucyIsImZpbmQiLCJmaW5kQnlJRCIsImZpbmRWZXJzaW9ucyIsImZpbmRWZXJzaW9uQnlJRCIsInJlc3RvcmVWZXJzaW9uIiwibG9naW4iLCJhdXRoIiwiZm9yZ290UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwidW5sb2NrIiwidmVyaWZ5RW1haWwiLCJmaW5kR2xvYmFsIiwiZmluZE9uZSIsImxvY2FsR2xvYmFsT3BlcmF0aW9ucyIsInVwZGF0ZUdsb2JhbCIsInVwZGF0ZSIsImZpbmRHbG9iYWxWZXJzaW9ucyIsImZpbmRHbG9iYWxWZXJzaW9uQnlJRCIsInJlc3RvcmVHbG9iYWxWZXJzaW9uIiwiaW5pdCIsImNvbmZpZ1BhdGgiLCJsb2FkQ29uZmlnIiwiTG9nZ2VyIiwibG9nZ2VyT3B0aW9ucyIsImxvZ2dlckRlc3RpbmF0aW9uIiwiaW5mbyIsIkVycm9yIiwiY3J5cHRvIiwiY3JlYXRlSGFzaCIsImRpZ2VzdCIsInNsaWNlIiwiZmluZENvbmZpZyIsInBhdGhzIiwiY29uZmlnRGlyIiwicGF0aCIsImRpcm5hbWUiLCJyYXdDb25maWciLCJkZWZhdWx0IiwiZm9yRWFjaCIsImNvbGxlY3Rpb24iLCJzbHVnIiwicGF5bG9hZCIsImNvbm5lY3QiLCJ3YXJuIiwiZW1haWxEZWZhdWx0cyIsImJ1aWxkRW1haWwiLCJiaW5kIiwiZ3JhcGhRTCIsImRpc2FibGUiLCJyZWdpc3RlckdyYXBoUUxTY2hlbWEiLCJzZXJ2ZXJJbml0VGVsZW1ldHJ5Iiwib25Jbml0IiwiZGVsZXRlIiwiZGVsZXRlTG9jYWwiLCJjYWNoZWQiLCJnbG9iYWwiLCJfcGF5bG9hZCIsInByb21pc2UiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWtFYUEsV0FBVztlQUFYQTs7SUE0VkFDLFVBQVU7ZUFBVkE7Ozs2REE5Wk07MkRBQ0Y7NERBZVc7NkRBQ007dUJBQ0Q7cUVBaUNDOzREQUNYO2dFQUNEOzBCQUU0Qjs2REFDL0I7MkRBQ0k7d0JBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkMsSUFBQSxBQUFNRCw0QkFtVlYsQUFuVkk7O2FBQU1BOztnQ0FB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