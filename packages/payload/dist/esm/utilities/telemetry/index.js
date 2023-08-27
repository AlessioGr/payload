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
import { execSync } from "child_process";
import Conf from "conf";
import { randomBytes } from "crypto";
import findUp from "find-up";
import fs from "fs";
import { oneWayHash } from "./oneWayHash";
export var sendEvent = function() {
    var _ref = _async_to_generator(function(param) {
        var payload, event, packageJSON, baseEvent, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = param.payload, event = param.event;
                    if (!(payload.config.telemetry !== false)) return [
                        3,
                        5
                    ];
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        getPackageJSON()
                    ];
                case 2:
                    packageJSON = _state.sent();
                    baseEvent = {
                        envID: getEnvID(),
                        projectID: getProjectID(payload, packageJSON),
                        nodeVersion: process.version,
                        nodeEnv: process.env.NODE_ENV || "development",
                        payloadVersion: getPayloadVersion(packageJSON)
                    };
                    return [
                        4,
                        fetch("https://telemetry.payloadcms.com/events", {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(_object_spread({}, baseEvent, event))
                        })
                    ];
                case 3:
                    _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    _ = _state.sent();
                    return [
                        3,
                        5
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return function sendEvent(_) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * This is a quasi-persistent identifier used to dedupe recurring events. It's
 * generated from random data and completely anonymous.
 */ var getEnvID = function() {
    var conf = new Conf();
    var ENV_ID = "envID";
    var val = conf.get(ENV_ID);
    if (val) {
        return val;
    }
    var generated = randomBytes(32).toString("hex");
    conf.set(ENV_ID, generated);
    return generated;
};
var getProjectID = function(payload, packageJSON) {
    var projectID = getGitID(payload) || getPackageJSONID(payload, packageJSON) || payload.config.serverURL || process.cwd();
    return oneWayHash(projectID, payload.secret);
};
var getGitID = function(payload) {
    try {
        var originBuffer = execSync("git config --local --get remote.origin.url", {
            timeout: 1000,
            stdio: "pipe"
        });
        return oneWayHash(String(originBuffer).trim(), payload.secret);
    } catch (_) {
        return null;
    }
};
var getPackageJSON = function() {
    var _ref = _async_to_generator(function() {
        var packageJsonPath, jsonContent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        findUp("package.json", {
                            cwd: __dirname
                        })
                    ];
                case 1:
                    packageJsonPath = _state.sent();
                    jsonContent = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
                    return [
                        2,
                        jsonContent
                    ];
            }
        });
    });
    return function getPackageJSON() {
        return _ref.apply(this, arguments);
    };
}();
var getPackageJSONID = function(payload, packageJSON) {
    return oneWayHash(packageJSON.name, payload.secret);
};
export var getPayloadVersion = function(packageJSON) {
    var _packageJSON_dependencies, _packageJSON;
    var _packageJSON_dependencies_payload;
    return (_packageJSON_dependencies_payload = (_packageJSON = packageJSON) === null || _packageJSON === void 0 ? void 0 : (_packageJSON_dependencies = _packageJSON.dependencies) === null || _packageJSON_dependencies === void 0 ? void 0 : _packageJSON_dependencies.payload) !== null && _packageJSON_dependencies_payload !== void 0 ? _packageJSON_dependencies_payload : "";
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4ZWNTeW5jIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgQ29uZiBmcm9tICdjb25mJztcbmltcG9ydCB7IHJhbmRvbUJ5dGVzIH0gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBmaW5kVXAgZnJvbSAnZmluZC11cCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uL3BheWxvYWQnO1xuaW1wb3J0IHsgU2VydmVySW5pdEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvc2VydmVySW5pdCc7XG5pbXBvcnQgeyBBZG1pbkluaXRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2FkbWluSW5pdCc7XG5pbXBvcnQgeyBvbmVXYXlIYXNoIH0gZnJvbSAnLi9vbmVXYXlIYXNoJztcblxuZXhwb3J0IHR5cGUgQmFzZUV2ZW50ID0ge1xuICBlbnZJRDogc3RyaW5nXG4gIHByb2plY3RJRDogc3RyaW5nXG4gIG5vZGVWZXJzaW9uOiBzdHJpbmdcbiAgbm9kZUVudjogc3RyaW5nXG4gIHBheWxvYWRWZXJzaW9uOiBzdHJpbmdcbn07XG5cbnR5cGUgUGFja2FnZUpTT04gPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBkZXBlbmRlbmNpZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHVuZGVmaW5lZD5cbn1cblxudHlwZSBUZWxlbWV0cnlFdmVudCA9IFNlcnZlckluaXRFdmVudCB8IEFkbWluSW5pdEV2ZW50XG5cbnR5cGUgQXJncyA9IHtcbiAgcGF5bG9hZDogUGF5bG9hZFxuICBldmVudDogVGVsZW1ldHJ5RXZlbnRcbn1cblxuZXhwb3J0IGNvbnN0IHNlbmRFdmVudCA9IGFzeW5jICh7IHBheWxvYWQsIGV2ZW50IH06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKHBheWxvYWQuY29uZmlnLnRlbGVtZXRyeSAhPT0gZmFsc2UpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFja2FnZUpTT04gPSBhd2FpdCBnZXRQYWNrYWdlSlNPTigpO1xuXG4gICAgICBjb25zdCBiYXNlRXZlbnQ6IEJhc2VFdmVudCA9IHtcbiAgICAgICAgZW52SUQ6IGdldEVudklEKCksXG4gICAgICAgIHByb2plY3RJRDogZ2V0UHJvamVjdElEKHBheWxvYWQsIHBhY2thZ2VKU09OKSxcbiAgICAgICAgbm9kZVZlcnNpb246IHByb2Nlc3MudmVyc2lvbixcbiAgICAgICAgbm9kZUVudjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JyxcbiAgICAgICAgcGF5bG9hZFZlcnNpb246IGdldFBheWxvYWRWZXJzaW9uKHBhY2thZ2VKU09OKSxcbiAgICAgIH07XG5cbiAgICAgIGF3YWl0IGZldGNoKCdodHRwczovL3RlbGVtZXRyeS5wYXlsb2FkY21zLmNvbS9ldmVudHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5iYXNlRXZlbnQsIC4uLmV2ZW50IH0pLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgLy8gRWF0IGFueSBlcnJvcnMgaW4gc2VuZGluZyB0ZWxlbWV0cnkgZXZlbnRcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBpcyBhIHF1YXNpLXBlcnNpc3RlbnQgaWRlbnRpZmllciB1c2VkIHRvIGRlZHVwZSByZWN1cnJpbmcgZXZlbnRzLiBJdCdzXG4gKiBnZW5lcmF0ZWQgZnJvbSByYW5kb20gZGF0YSBhbmQgY29tcGxldGVseSBhbm9ueW1vdXMuXG4gKi9cbmNvbnN0IGdldEVudklEID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGNvbmYgPSBuZXcgQ29uZigpO1xuICBjb25zdCBFTlZfSUQgPSAnZW52SUQnO1xuXG4gIGNvbnN0IHZhbCA9IGNvbmYuZ2V0KEVOVl9JRCk7XG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4gdmFsIGFzIHN0cmluZztcbiAgfVxuXG4gIGNvbnN0IGdlbmVyYXRlZCA9IHJhbmRvbUJ5dGVzKDMyKS50b1N0cmluZygnaGV4Jyk7XG4gIGNvbmYuc2V0KEVOVl9JRCwgZ2VuZXJhdGVkKTtcbiAgcmV0dXJuIGdlbmVyYXRlZDtcbn07XG5cbmNvbnN0IGdldFByb2plY3RJRCA9IChwYXlsb2FkOiBQYXlsb2FkLCBwYWNrYWdlSlNPTjogUGFja2FnZUpTT04pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwcm9qZWN0SUQgPSBnZXRHaXRJRChwYXlsb2FkKSB8fCBnZXRQYWNrYWdlSlNPTklEKHBheWxvYWQsIHBhY2thZ2VKU09OKSB8fCBwYXlsb2FkLmNvbmZpZy5zZXJ2ZXJVUkwgfHwgcHJvY2Vzcy5jd2QoKTtcbiAgcmV0dXJuIG9uZVdheUhhc2gocHJvamVjdElELCBwYXlsb2FkLnNlY3JldCk7XG59O1xuXG5jb25zdCBnZXRHaXRJRCA9IChwYXlsb2FkOiBQYXlsb2FkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3JpZ2luQnVmZmVyID0gZXhlY1N5bmMoJ2dpdCBjb25maWcgLS1sb2NhbCAtLWdldCByZW1vdGUub3JpZ2luLnVybCcsIHtcbiAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICBzdGRpbzogJ3BpcGUnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9uZVdheUhhc2goU3RyaW5nKG9yaWdpbkJ1ZmZlcikudHJpbSgpLCBwYXlsb2FkLnNlY3JldCk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgZ2V0UGFja2FnZUpTT04gPSBhc3luYyAoKTogUHJvbWlzZTxQYWNrYWdlSlNPTj4gPT4ge1xuICBjb25zdCBwYWNrYWdlSnNvblBhdGggPSBhd2FpdCBmaW5kVXAoJ3BhY2thZ2UuanNvbicsIHsgY3dkOiBfX2Rpcm5hbWUgfSk7XG4gIGNvbnN0IGpzb25Db250ZW50OiBQYWNrYWdlSlNPTiA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhY2thZ2VKc29uUGF0aCwgJ3V0Zi04JykpO1xuICByZXR1cm4ganNvbkNvbnRlbnQ7XG59O1xuXG5jb25zdCBnZXRQYWNrYWdlSlNPTklEID0gKHBheWxvYWQ6IFBheWxvYWQsIHBhY2thZ2VKU09OOiBQYWNrYWdlSlNPTik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBvbmVXYXlIYXNoKHBhY2thZ2VKU09OLm5hbWUsIHBheWxvYWQuc2VjcmV0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYXlsb2FkVmVyc2lvbiA9IChwYWNrYWdlSlNPTjogUGFja2FnZUpTT04pOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gcGFja2FnZUpTT04/LmRlcGVuZGVuY2llcz8ucGF5bG9hZCA/PyAnJztcbn07XG4iXSwibmFtZXMiOlsiZXhlY1N5bmMiLCJDb25mIiwicmFuZG9tQnl0ZXMiLCJmaW5kVXAiLCJmcyIsIm9uZVdheUhhc2giLCJzZW5kRXZlbnQiLCJwYXlsb2FkIiwiZXZlbnQiLCJwYWNrYWdlSlNPTiIsImJhc2VFdmVudCIsIl8iLCJjb25maWciLCJ0ZWxlbWV0cnkiLCJnZXRQYWNrYWdlSlNPTiIsImVudklEIiwiZ2V0RW52SUQiLCJwcm9qZWN0SUQiLCJnZXRQcm9qZWN0SUQiLCJub2RlVmVyc2lvbiIsInByb2Nlc3MiLCJ2ZXJzaW9uIiwibm9kZUVudiIsImVudiIsIk5PREVfRU5WIiwicGF5bG9hZFZlcnNpb24iLCJnZXRQYXlsb2FkVmVyc2lvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uZiIsIkVOVl9JRCIsInZhbCIsImdldCIsImdlbmVyYXRlZCIsInRvU3RyaW5nIiwic2V0IiwiZ2V0R2l0SUQiLCJnZXRQYWNrYWdlSlNPTklEIiwic2VydmVyVVJMIiwiY3dkIiwic2VjcmV0Iiwib3JpZ2luQnVmZmVyIiwidGltZW91dCIsInN0ZGlvIiwiU3RyaW5nIiwidHJpbSIsInBhY2thZ2VKc29uUGF0aCIsImpzb25Db250ZW50IiwiX19kaXJuYW1lIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJuYW1lIiwiZGVwZW5kZW5jaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFFBQVEsUUFBUSxnQkFBZ0I7QUFDekMsT0FBT0MsVUFBVSxPQUFPO0FBQ3hCLFNBQVNDLFdBQVcsUUFBUSxTQUFTO0FBQ3JDLE9BQU9DLFlBQVksVUFBVTtBQUM3QixPQUFPQyxRQUFRLEtBQUs7QUFJcEIsU0FBU0MsVUFBVSxRQUFRLGVBQWU7QUFzQjFDLE9BQU8sSUFBTUM7ZUFBWSxvQkFBQTtZQUFTQyxTQUFTQyxPQUcvQkMsYUFFQUMsV0FlQ0M7Ozs7b0JBcEJxQkosZ0JBQUFBLFNBQVNDLGNBQUFBO3lCQUNyQ0QsQ0FBQUEsUUFBUUssTUFBTSxDQUFDQyxTQUFTLEtBQUssS0FBSSxHQUFqQ047Ozs7Ozs7Ozs7OztvQkFFb0I7O3dCQUFNTzs7O29CQUFwQkwsY0FBYztvQkFFZEMsWUFBdUI7d0JBQzNCSyxPQUFPQzt3QkFDUEMsV0FBV0MsYUFBYVgsU0FBU0U7d0JBQ2pDVSxhQUFhQyxRQUFRQyxPQUFPO3dCQUM1QkMsU0FBU0YsUUFBUUcsR0FBRyxDQUFDQyxRQUFRLElBQUk7d0JBQ2pDQyxnQkFBZ0JDLGtCQUFrQmpCO29CQUNwQztvQkFFQTs7d0JBQU1rQixNQUFNLDJDQUEyQzs0QkFDckRDLFFBQVE7NEJBQ1JDLFNBQVM7Z0NBQ1AsZ0JBQWdCOzRCQUNsQjs0QkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDLG1CQUFLdEIsV0FBY0Y7d0JBQzFDOzs7b0JBTkE7Ozs7OztvQkFPT0c7Ozs7Ozs7Ozs7O0lBSWI7b0JBeEJhTDs7O0lBd0JYO0FBRUY7OztDQUdDLEdBQ0QsSUFBTVUsV0FBVztJQUNmLElBQU1pQixPQUFPLElBQUloQztJQUNqQixJQUFNaUMsU0FBUztJQUVmLElBQU1DLE1BQU1GLEtBQUtHLEdBQUcsQ0FBQ0Y7SUFDckIsSUFBSUMsS0FBSztRQUNQLE9BQU9BO0lBQ1Q7SUFFQSxJQUFNRSxZQUFZbkMsWUFBWSxJQUFJb0MsUUFBUSxDQUFDO0lBQzNDTCxLQUFLTSxHQUFHLENBQUNMLFFBQVFHO0lBQ2pCLE9BQU9BO0FBQ1Q7QUFFQSxJQUFNbkIsZUFBZSxTQUFDWCxTQUFrQkU7SUFDdEMsSUFBTVEsWUFBWXVCLFNBQVNqQyxZQUFZa0MsaUJBQWlCbEMsU0FBU0UsZ0JBQWdCRixRQUFRSyxNQUFNLENBQUM4QixTQUFTLElBQUl0QixRQUFRdUIsR0FBRztJQUN4SCxPQUFPdEMsV0FBV1ksV0FBV1YsUUFBUXFDLE1BQU07QUFDN0M7QUFFQSxJQUFNSixXQUFXLFNBQUNqQztJQUNoQixJQUFJO1FBQ0YsSUFBTXNDLGVBQWU3QyxTQUFTLDhDQUE4QztZQUMxRThDLFNBQVM7WUFDVEMsT0FBTztRQUNUO1FBRUEsT0FBTzFDLFdBQVcyQyxPQUFPSCxjQUFjSSxJQUFJLElBQUkxQyxRQUFRcUMsTUFBTTtJQUMvRCxFQUFFLE9BQU9qQyxHQUFHO1FBQ1YsT0FBTztJQUNUO0FBQ0Y7QUFFQSxJQUFNRztlQUFpQixvQkFBQTtZQUNmb0MsaUJBQ0FDOzs7O29CQURrQjs7d0JBQU1oRCxPQUFPLGdCQUFnQjs0QkFBRXdDLEtBQUtTO3dCQUFVOzs7b0JBQWhFRixrQkFBa0I7b0JBQ2xCQyxjQUEyQnBCLEtBQUtzQixLQUFLLENBQUNqRCxHQUFHa0QsWUFBWSxDQUFDSixpQkFBaUI7b0JBQzdFOzt3QkFBT0M7Ozs7SUFDVDtvQkFKTXJDOzs7O0FBTU4sSUFBTTJCLG1CQUFtQixTQUFDbEMsU0FBa0JFO0lBQzFDLE9BQU9KLFdBQVdJLFlBQVk4QyxJQUFJLEVBQUVoRCxRQUFRcUMsTUFBTTtBQUNwRDtBQUVBLE9BQU8sSUFBTWxCLG9CQUFvQixTQUFDakI7UUFDekJBLDJCQUFBQTtRQUFBQTtJQUFQLE9BQU9BLENBQUFBLHFDQUFBQSxlQUFBQSx5QkFBQUEsb0NBQUFBLDRCQUFBQSxhQUFhK0MsWUFBWSxjQUF6Qi9DLGdEQUFBQSwwQkFBMkJGLE9BQU8sY0FBbENFLCtDQUFBQSxvQ0FBc0M7QUFDL0MsRUFBRSJ9