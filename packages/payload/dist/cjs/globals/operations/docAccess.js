"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "docAccess", {
    enumerable: true,
    get: function() {
        return docAccess;
    }
});
var _getEntityPolicies = require("../../utilities/getEntityPolicies");
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
function docAccess(args) {
    return _docAccess.apply(this, arguments);
}
function _docAccess() {
    _docAccess = _async_to_generator(function(args) {
        var req, globalConfig, globalOperations;
        return _ts_generator(this, function(_state) {
            req = args.req, globalConfig = args.globalConfig;
            globalOperations = [
                "read",
                "update"
            ];
            if (globalConfig.versions) {
                globalOperations.push("readVersions");
            }
            return [
                2,
                (0, _getEntityPolicies.getEntityPolicies)({
                    type: "global",
                    req: req,
                    entity: globalConfig,
                    operations: globalOperations
                })
            ];
        });
    });
    return _docAccess.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvZG9jQWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsbE9wZXJhdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBHbG9iYWxQZXJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vYXV0aCc7XG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBnZXRFbnRpdHlQb2xpY2llcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9nZXRFbnRpdHlQb2xpY2llcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuXG50eXBlIEFyZ3VtZW50cyA9IHtcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG9jQWNjZXNzKGFyZ3M6IEFyZ3VtZW50cyk6IFByb21pc2U8R2xvYmFsUGVybWlzc2lvbj4ge1xuICBjb25zdCB7XG4gICAgcmVxLFxuICAgIGdsb2JhbENvbmZpZyxcbiAgfSA9IGFyZ3M7XG5cbiAgY29uc3QgZ2xvYmFsT3BlcmF0aW9uczogQWxsT3BlcmF0aW9uc1tdID0gWydyZWFkJywgJ3VwZGF0ZSddO1xuXG4gIGlmIChnbG9iYWxDb25maWcudmVyc2lvbnMpIHtcbiAgICBnbG9iYWxPcGVyYXRpb25zLnB1c2goJ3JlYWRWZXJzaW9ucycpO1xuICB9XG5cbiAgcmV0dXJuIGdldEVudGl0eVBvbGljaWVzKHtcbiAgICB0eXBlOiAnZ2xvYmFsJyxcbiAgICByZXEsXG4gICAgZW50aXR5OiBnbG9iYWxDb25maWcsXG4gICAgb3BlcmF0aW9uczogZ2xvYmFsT3BlcmF0aW9ucyxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZG9jQWNjZXNzIiwiYXJncyIsInJlcSIsImdsb2JhbENvbmZpZyIsImdsb2JhbE9wZXJhdGlvbnMiLCJ2ZXJzaW9ucyIsInB1c2giLCJnZXRFbnRpdHlQb2xpY2llcyIsInR5cGUiLCJlbnRpdHkiLCJvcGVyYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OytCQVdzQkE7OztlQUFBQTs7O2lDQVJZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQVFaQSxVQUFVQyxJQUFlO1dBQXpCRDs7U0FBQUE7SUFBQUEsYUFBZixvQkFBQSxTQUF5QkMsSUFBZTtZQUUzQ0MsS0FDQUMsY0FHSUM7O1lBSkpGLE1BRUVELEtBRkZDLEtBQ0FDLGVBQ0VGLEtBREZFO1lBR0lDO2dCQUFxQztnQkFBUTs7WUFFbkQsSUFBSUQsYUFBYUUsUUFBUSxFQUFFO2dCQUN6QkQsaUJBQWlCRSxJQUFJLENBQUM7WUFDeEI7WUFFQTs7Z0JBQU9DLElBQUFBLG9DQUFpQixFQUFDO29CQUN2QkMsTUFBTTtvQkFDTk4sS0FBQUE7b0JBQ0FPLFFBQVFOO29CQUNSTyxZQUFZTjtnQkFDZDs7O0lBQ0Y7V0FsQnNCSiJ9