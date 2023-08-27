/* eslint-disable @typescript-eslint/no-var-requires */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "connect", {
    enumerable: true,
    get: function() {
        return connect;
    }
});
var _mongoose = /*#__PURE__*/ _interop_require_default(require("mongoose"));
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
var connect = function() {
    var _connect = _async_to_generator(function(payload) {
        var urlToConnect, successfulConnectionMessage, connectionOptions, MongoMemoryServer, getPort, port, _, _1, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (this.url === false) {
                        return [
                            2
                        ];
                    }
                    if (!payload.local && typeof this.url !== "string") {
                        throw new Error("Error: missing MongoDB connection URL.");
                    }
                    urlToConnect = this.url;
                    successfulConnectionMessage = "Connected to MongoDB server successfully!";
                    connectionOptions = _object_spread_props(_object_spread({
                        autoIndex: true
                    }, this.connectOptions), {
                        useFacet: undefined
                    });
                    if (!(process.env.NODE_ENV === "test")) return [
                        3,
                        6
                    ];
                    if (!process.env.PAYLOAD_TEST_MONGO_URL) return [
                        3,
                        1
                    ];
                    urlToConnect = process.env.PAYLOAD_TEST_MONGO_URL;
                    return [
                        3,
                        6
                    ];
                case 1:
                    connectionOptions.dbName = "payloadmemory";
                    return [
                        4,
                        Promise.resolve().then(function() {
                            return /*#__PURE__*/ _interop_require_wildcard(require("mongodb-memory-server"));
                        })
                    ];
                case 2:
                    MongoMemoryServer = _state.sent().default.MongoMemoryServer;
                    return [
                        4,
                        Promise.resolve().then(function() {
                            return /*#__PURE__*/ _interop_require_wildcard(require("get-port"));
                        })
                    ];
                case 3:
                    getPort = _state.sent().default;
                    return [
                        4,
                        getPort()
                    ];
                case 4:
                    port = _state.sent();
                    _ = this;
                    return [
                        4,
                        MongoMemoryServer.create({
                            instance: {
                                dbName: "payloadmemory",
                                port: port
                            }
                        })
                    ];
                case 5:
                    _.mongoMemoryServer = _state.sent();
                    urlToConnect = this.mongoMemoryServer.getUri();
                    successfulConnectionMessage = "Connected to in-memory MongoDB server successfully!";
                    _state.label = 6;
                case 6:
                    _state.trys.push([
                        6,
                        10,
                        ,
                        11
                    ]);
                    _1 = this;
                    return [
                        4,
                        _mongoose.default.connect(urlToConnect, connectionOptions)
                    ];
                case 7:
                    _1.connection = _state.sent().connection;
                    if (!(process.env.PAYLOAD_DROP_DATABASE === "true")) return [
                        3,
                        9
                    ];
                    this.payload.logger.info("---- DROPPING DATABASE ----");
                    return [
                        4,
                        _mongoose.default.connection.dropDatabase()
                    ];
                case 8:
                    _state.sent();
                    this.payload.logger.info("---- DROPPED DATABASE ----");
                    _state.label = 9;
                case 9:
                    this.payload.logger.info(successfulConnectionMessage);
                    return [
                        3,
                        11
                    ];
                case 10:
                    err = _state.sent();
                    this.payload.logger.error("Error: cannot connect to MongoDB. Details: ".concat(err.message), err);
                    process.exit(1);
                    return [
                        3,
                        11
                    ];
                case 11:
                    return [
                        2
                    ];
            }
        });
    });
    function connect(payload) {
        return _connect.apply(this, arguments);
    }
    return connect;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25uZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMgKi9cbmltcG9ydCB0eXBlIHsgQ29ubmVjdE9wdGlvbnMgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHR5cGUgeyBDb25uZWN0IH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7IE1vbmdvb3NlQWRhcHRlciB9IGZyb20gJy4nO1xuXG5leHBvcnQgY29uc3QgY29ubmVjdDogQ29ubmVjdCA9IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoXG4gIHRoaXM6IE1vbmdvb3NlQWRhcHRlcixcbiAgcGF5bG9hZCxcbikge1xuICBpZiAodGhpcy51cmwgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFwYXlsb2FkLmxvY2FsICYmIHR5cGVvZiB0aGlzLnVybCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yOiBtaXNzaW5nIE1vbmdvREIgY29ubmVjdGlvbiBVUkwuJyk7XG4gIH1cblxuICBsZXQgdXJsVG9Db25uZWN0ID0gdGhpcy51cmw7XG4gIGxldCBzdWNjZXNzZnVsQ29ubmVjdGlvbk1lc3NhZ2UgPSAnQ29ubmVjdGVkIHRvIE1vbmdvREIgc2VydmVyIHN1Y2Nlc3NmdWxseSEnO1xuXG4gIGNvbnN0IGNvbm5lY3Rpb25PcHRpb25zOiBDb25uZWN0T3B0aW9ucyAmIHsgdXNlRmFjZXQ6IHVuZGVmaW5lZCB9ID0ge1xuICAgIGF1dG9JbmRleDogdHJ1ZSxcbiAgICAuLi50aGlzLmNvbm5lY3RPcHRpb25zLFxuICAgIHVzZUZhY2V0OiB1bmRlZmluZWQsXG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuUEFZTE9BRF9URVNUX01PTkdPX1VSTCkge1xuICAgICAgdXJsVG9Db25uZWN0ID0gcHJvY2Vzcy5lbnYuUEFZTE9BRF9URVNUX01PTkdPX1VSTDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29ubmVjdGlvbk9wdGlvbnMuZGJOYW1lID0gJ3BheWxvYWRtZW1vcnknO1xuXG4gICAgICBjb25zdCB7IE1vbmdvTWVtb3J5U2VydmVyIH0gPSAoYXdhaXQgaW1wb3J0KCdtb25nb2RiLW1lbW9yeS1zZXJ2ZXInKSkuZGVmYXVsdDtcbiAgICAgIGNvbnN0IGdldFBvcnQgPSAoYXdhaXQgaW1wb3J0KCdnZXQtcG9ydCcpKS5kZWZhdWx0O1xuXG4gICAgICBjb25zdCBwb3J0ID0gYXdhaXQgZ2V0UG9ydCgpO1xuICAgICAgdGhpcy5tb25nb01lbW9yeVNlcnZlciA9IGF3YWl0IE1vbmdvTWVtb3J5U2VydmVyLmNyZWF0ZSh7XG4gICAgICAgIGluc3RhbmNlOiB7XG4gICAgICAgICAgZGJOYW1lOiAncGF5bG9hZG1lbW9yeScsXG4gICAgICAgICAgcG9ydCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICB1cmxUb0Nvbm5lY3QgPSB0aGlzLm1vbmdvTWVtb3J5U2VydmVyLmdldFVyaSgpO1xuICAgICAgc3VjY2Vzc2Z1bENvbm5lY3Rpb25NZXNzYWdlID0gJ0Nvbm5lY3RlZCB0byBpbi1tZW1vcnkgTW9uZ29EQiBzZXJ2ZXIgc3VjY2Vzc2Z1bGx5ISc7XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSAoXG4gICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHVybFRvQ29ubmVjdCwgY29ubmVjdGlvbk9wdGlvbnMpXG4gICAgKS5jb25uZWN0aW9uO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52LlBBWUxPQURfRFJPUF9EQVRBQkFTRSA9PT0gJ3RydWUnKSB7XG4gICAgICB0aGlzLnBheWxvYWQubG9nZ2VyLmluZm8oJy0tLS0gRFJPUFBJTkcgREFUQUJBU0UgLS0tLScpO1xuICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdGlvbi5kcm9wRGF0YWJhc2UoKTtcbiAgICAgIHRoaXMucGF5bG9hZC5sb2dnZXIuaW5mbygnLS0tLSBEUk9QUEVEIERBVEFCQVNFIC0tLS0nKTtcbiAgICB9XG4gICAgdGhpcy5wYXlsb2FkLmxvZ2dlci5pbmZvKHN1Y2Nlc3NmdWxDb25uZWN0aW9uTWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRoaXMucGF5bG9hZC5sb2dnZXIuZXJyb3IoXG4gICAgICBgRXJyb3I6IGNhbm5vdCBjb25uZWN0IHRvIE1vbmdvREIuIERldGFpbHM6ICR7ZXJyLm1lc3NhZ2V9YCxcbiAgICAgIGVycixcbiAgICApO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJjb25uZWN0IiwicGF5bG9hZCIsInVybFRvQ29ubmVjdCIsInN1Y2Nlc3NmdWxDb25uZWN0aW9uTWVzc2FnZSIsImNvbm5lY3Rpb25PcHRpb25zIiwiTW9uZ29NZW1vcnlTZXJ2ZXIiLCJnZXRQb3J0IiwicG9ydCIsImVyciIsInVybCIsImxvY2FsIiwiRXJyb3IiLCJhdXRvSW5kZXgiLCJjb25uZWN0T3B0aW9ucyIsInVzZUZhY2V0IiwidW5kZWZpbmVkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiUEFZTE9BRF9URVNUX01PTkdPX1VSTCIsImRiTmFtZSIsImRlZmF1bHQiLCJjcmVhdGUiLCJpbnN0YW5jZSIsIm1vbmdvTWVtb3J5U2VydmVyIiwiZ2V0VXJpIiwibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiUEFZTE9BRF9EUk9QX0RBVEFCQVNFIiwibG9nZ2VyIiwiaW5mbyIsImRyb3BEYXRhYmFzZSIsImVycm9yIiwibWVzc2FnZSIsImV4aXQiXSwibWFwcGluZ3MiOiJBQUFBLHFEQUFxRDs7OzsrQkFNeENBOzs7ZUFBQUE7OzsrREFKUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZCxJQUFNQTtRQUFrQ0EsV0FBZixvQkFBQSxTQUU5QkMsT0FBTztZQVVIQyxjQUNBQyw2QkFFRUMsbUJBWU1DLG1CQUNGQyxTQUVBQyxhQXdCREM7Ozs7b0JBbERULElBQUksSUFBSSxDQUFDQyxHQUFHLEtBQUssT0FBTzt3QkFDdEI7OztvQkFDRjtvQkFFQSxJQUFJLENBQUNSLFFBQVFTLEtBQUssSUFBSSxPQUFPLElBQUksQ0FBQ0QsR0FBRyxLQUFLLFVBQVU7d0JBQ2xELE1BQU0sSUFBSUUsTUFBTTtvQkFDbEI7b0JBRUlULGVBQWUsSUFBSSxDQUFDTyxHQUFHO29CQUN2Qk4sOEJBQThCO29CQUU1QkMsb0JBQThEO3dCQUNsRVEsV0FBVzt1QkFDUixJQUFJLENBQUNDLGNBQWM7d0JBQ3RCQyxVQUFVQzs7eUJBR1JDLENBQUFBLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLLE1BQUssR0FBOUJGOzs7O3lCQUNFQSxRQUFRQyxHQUFHLENBQUNFLHNCQUFzQixFQUFsQ0g7Ozs7b0JBQ0ZkLGVBQWVjLFFBQVFDLEdBQUcsQ0FBQ0Usc0JBQXNCOzs7Ozs7b0JBRWpEZixrQkFBa0JnQixNQUFNLEdBQUc7b0JBRUk7O3dCQUFNOzJFQUFBLFFBQU87Ozs7b0JBQXBDZixvQkFBc0IsQUFBQyxjQUF1Q2dCLE9BQU8sQ0FBckVoQjtvQkFDUzs7d0JBQU07MkVBQUEsUUFBTzs7OztvQkFBeEJDLFVBQVUsQUFBQyxjQUEwQmUsT0FBTztvQkFFckM7O3dCQUFNZjs7O29CQUFiQyxPQUFPO3dCQUNiLElBQUk7b0JBQXFCOzt3QkFBTUYsa0JBQWtCaUIsTUFBTSxDQUFDOzRCQUN0REMsVUFBVTtnQ0FDUkgsUUFBUTtnQ0FDUmIsTUFBQUE7NEJBQ0Y7d0JBQ0Y7OztvQkFMQSxFQUFLaUIsaUJBQWlCLEdBQUc7b0JBT3pCdEIsZUFBZSxJQUFJLENBQUNzQixpQkFBaUIsQ0FBQ0MsTUFBTTtvQkFDNUN0Qiw4QkFBOEI7Ozs7Ozs7Ozt5QkFLaEMsSUFBSTtvQkFDRjs7d0JBQU11QixpQkFBUSxDQUFDMUIsT0FBTyxDQUFDRSxjQUFjRTs7O29CQUR2QyxHQUFLdUIsVUFBVSxHQUFHLEFBQ2hCLGNBQ0FBLFVBQVU7eUJBRVJYLENBQUFBLFFBQVFDLEdBQUcsQ0FBQ1cscUJBQXFCLEtBQUssTUFBSyxHQUEzQ1o7Ozs7b0JBQ0YsSUFBSSxDQUFDZixPQUFPLENBQUM0QixNQUFNLENBQUNDLElBQUksQ0FBQztvQkFDekI7O3dCQUFNSixpQkFBUSxDQUFDQyxVQUFVLENBQUNJLFlBQVk7OztvQkFBdEM7b0JBQ0EsSUFBSSxDQUFDOUIsT0FBTyxDQUFDNEIsTUFBTSxDQUFDQyxJQUFJLENBQUM7OztvQkFFM0IsSUFBSSxDQUFDN0IsT0FBTyxDQUFDNEIsTUFBTSxDQUFDQyxJQUFJLENBQUMzQjs7Ozs7O29CQUNsQks7b0JBQ1AsSUFBSSxDQUFDUCxPQUFPLENBQUM0QixNQUFNLENBQUNHLEtBQUssQ0FDdkIsQUFBQyw4Q0FBeUQsT0FBWnhCLElBQUl5QixPQUFPLEdBQ3pEekI7b0JBRUZRLFFBQVFrQixJQUFJLENBQUM7Ozs7Ozs7Ozs7O0lBRWpCO2FBN0QrQ2xDLFFBRTdDQyxPQUFPO2VBRnNDRDs7V0FBQUEifQ==