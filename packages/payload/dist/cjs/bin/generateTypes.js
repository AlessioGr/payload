/* eslint-disable no-nested-ternary */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "generateTypes", {
    enumerable: true,
    get: function() {
        return generateTypes;
    }
});
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
var _jsonschematotypescript = require("json-schema-to-typescript");
var _logger = /*#__PURE__*/ _interop_require_default(require("../utilities/logger"));
var _load = /*#__PURE__*/ _interop_require_default(require("../config/load"));
var _configToJSONSchema = require("../utilities/configToJSONSchema");
var _nodeurl = /*#__PURE__*/ _interop_require_wildcard(require("node:url"));
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
function generateTypes() {
    return _generateTypes.apply(this, arguments);
}
function _generateTypes() {
    _generateTypes = _async_to_generator(function() {
        var logger, config, outputFile, jsonSchema;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    logger = (0, _logger.default)();
                    return [
                        4,
                        (0, _load.default)()
                    ];
                case 1:
                    config = _state.sent();
                    outputFile = process.env.PAYLOAD_TS_OUTPUT_PATH || config.typescript.outputFile;
                    logger.info("Compiling TS types for Collections and Globals...");
                    jsonSchema = (0, _configToJSONSchema.configToJSONSchema)(config);
                    (0, _jsonschematotypescript.compile)(jsonSchema, "Config", {
                        bannerComment: "/* tslint:disable */\n/* eslint-disable */\n/**\n* This file was automatically generated by Payload.\n* DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,\n* and re-run `payload generate:types` to regenerate this file.\n*/",
                        style: {
                            singleQuote: true
                        }
                    }).then(function(compiled) {
                        _fs.default.writeFileSync(outputFile, compiled);
                        logger.info("Types written to ".concat(outputFile));
                    });
                    return [
                        2
                    ];
            }
        });
    });
    return _generateTypes.apply(this, arguments);
}
// when generateTypes.js is launched directly
// This is an ESM translation from Rich Harris https://2ality.com/2022/07/nodejs-esm-main.html
if (require("url").pathToFileURL(__filename).toString().startsWith("file:")) {
    var modulePath = _nodeurl.fileURLToPath(require("url").pathToFileURL(__filename).toString());
    if (process.argv[1] === modulePath) {
        generateTypes();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2VuZXJhdGVUeXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IGNvbXBpbGUgfSBmcm9tICdqc29uLXNjaGVtYS10by10eXBlc2NyaXB0JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbGl0aWVzL2xvZ2dlcic7XG5pbXBvcnQgbG9hZENvbmZpZyBmcm9tICcuLi9jb25maWcvbG9hZCc7XG5pbXBvcnQgeyBjb25maWdUb0pTT05TY2hlbWEgfSBmcm9tICcuLi91dGlsaXRpZXMvY29uZmlnVG9KU09OU2NoZW1hJztcbmltcG9ydCAqIGFzIHVybCBmcm9tICdub2RlOnVybCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVR5cGVzKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBsb2dnZXIgPSBMb2dnZXIoKTtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZENvbmZpZygpO1xuICBjb25zdCBvdXRwdXRGaWxlID0gcHJvY2Vzcy5lbnYuUEFZTE9BRF9UU19PVVRQVVRfUEFUSCB8fCBjb25maWcudHlwZXNjcmlwdC5vdXRwdXRGaWxlO1xuXG4gIGxvZ2dlci5pbmZvKCdDb21waWxpbmcgVFMgdHlwZXMgZm9yIENvbGxlY3Rpb25zIGFuZCBHbG9iYWxzLi4uJyk7XG5cbiAgY29uc3QganNvblNjaGVtYSA9IGNvbmZpZ1RvSlNPTlNjaGVtYShjb25maWcpO1xuXG4gIGNvbXBpbGUoanNvblNjaGVtYSwgJ0NvbmZpZycsIHtcbiAgICBiYW5uZXJDb21tZW50OiAnLyogdHNsaW50OmRpc2FibGUgKi9cXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xcbi8qKlxcbiogVGhpcyBmaWxlIHdhcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBQYXlsb2FkLlxcbiogRE8gTk9UIE1PRElGWSBJVCBCWSBIQU5ELiBJbnN0ZWFkLCBtb2RpZnkgeW91ciBzb3VyY2UgUGF5bG9hZCBjb25maWcsXFxuKiBhbmQgcmUtcnVuIGBwYXlsb2FkIGdlbmVyYXRlOnR5cGVzYCB0byByZWdlbmVyYXRlIHRoaXMgZmlsZS5cXG4qLycsXG4gICAgc3R5bGU6IHtcbiAgICAgIHNpbmdsZVF1b3RlOiB0cnVlLFxuICAgIH0sXG4gIH0pLnRoZW4oKGNvbXBpbGVkKSA9PiB7XG4gICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRGaWxlLCBjb21waWxlZCk7XG4gICAgbG9nZ2VyLmluZm8oYFR5cGVzIHdyaXR0ZW4gdG8gJHtvdXRwdXRGaWxlfWApO1xuICB9KTtcbn1cblxuLy8gd2hlbiBnZW5lcmF0ZVR5cGVzLmpzIGlzIGxhdW5jaGVkIGRpcmVjdGx5XG4vLyBUaGlzIGlzIGFuIEVTTSB0cmFuc2xhdGlvbiBmcm9tIFJpY2ggSGFycmlzIGh0dHBzOi8vMmFsaXR5LmNvbS8yMDIyLzA3L25vZGVqcy1lc20tbWFpbi5odG1sXG5pZiAoaW1wb3J0Lm1ldGEudXJsLnN0YXJ0c1dpdGgoJ2ZpbGU6JykpIHsgLy8gKEEpXG4gIGNvbnN0IG1vZHVsZVBhdGggPSB1cmwuZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuICBpZiAocHJvY2Vzcy5hcmd2WzFdID09PSBtb2R1bGVQYXRoKSB7IC8vIChCKVxuICAgIGdlbmVyYXRlVHlwZXMoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdlbmVyYXRlVHlwZXMiLCJsb2dnZXIiLCJjb25maWciLCJvdXRwdXRGaWxlIiwianNvblNjaGVtYSIsIkxvZ2dlciIsImxvYWRDb25maWciLCJwcm9jZXNzIiwiZW52IiwiUEFZTE9BRF9UU19PVVRQVVRfUEFUSCIsInR5cGVzY3JpcHQiLCJpbmZvIiwiY29uZmlnVG9KU09OU2NoZW1hIiwiY29tcGlsZSIsImJhbm5lckNvbW1lbnQiLCJzdHlsZSIsInNpbmdsZVF1b3RlIiwidGhlbiIsImNvbXBpbGVkIiwiZnMiLCJ3cml0ZUZpbGVTeW5jIiwic3RhcnRzV2l0aCIsIm1vZHVsZVBhdGgiLCJ1cmwiLCJmaWxlVVJMVG9QYXRoIiwiYXJndiJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQVFkQTs7O2VBQUFBOzs7eURBUFA7c0NBQ1M7NkRBQ0w7MkRBQ0k7a0NBQ1k7K0RBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFQ0E7V0FBQUE7O1NBQUFBO0lBQUFBLGlCQUFmLG9CQUFBO1lBQ0NDLFFBQ0FDLFFBQ0FDLFlBSUFDOzs7O29CQU5BSCxTQUFTSSxJQUFBQSxlQUFNO29CQUNOOzt3QkFBTUMsSUFBQUEsYUFBVTs7O29CQUF6QkosU0FBUztvQkFDVEMsYUFBYUksUUFBUUMsR0FBRyxDQUFDQyxzQkFBc0IsSUFBSVAsT0FBT1EsVUFBVSxDQUFDUCxVQUFVO29CQUVyRkYsT0FBT1UsSUFBSSxDQUFDO29CQUVOUCxhQUFhUSxJQUFBQSxzQ0FBa0IsRUFBQ1Y7b0JBRXRDVyxJQUFBQSwrQkFBTyxFQUFDVCxZQUFZLFVBQVU7d0JBQzVCVSxlQUFlO3dCQUNmQyxPQUFPOzRCQUNMQyxhQUFhO3dCQUNmO29CQUNGLEdBQUdDLElBQUksQ0FBQyxTQUFDQzt3QkFDUEMsV0FBRSxDQUFDQyxhQUFhLENBQUNqQixZQUFZZTt3QkFDN0JqQixPQUFPVSxJQUFJLENBQUMsQUFBQyxvQkFBOEIsT0FBWFI7b0JBQ2xDOzs7Ozs7SUFDRjtXQWxCc0JIOztBQW9CdEIsNkNBQTZDO0FBQzdDLDhGQUE4RjtBQUM5RixJQUFJLG9EQUFnQnFCLFVBQVUsQ0FBQyxVQUFVO0lBQ3ZDLElBQU1DLGFBQWFDLFNBQUlDLGFBQWEsQ0FBQztJQUNyQyxJQUFJakIsUUFBUWtCLElBQUksQ0FBQyxFQUFFLEtBQUtILFlBQVk7UUFDbEN0QjtJQUNGO0FBQ0YifQ==