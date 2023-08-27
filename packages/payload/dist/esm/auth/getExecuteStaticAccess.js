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
import executeAccess from "./executeAccess";
import { Forbidden } from "../errors";
var getExecuteStaticAccess = function(config) {
    return function() {
        var _ref = _async_to_generator(function(req, res, next) {
            var accessResult, filename, queryToBuild, doc, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (req.method === "OPTIONS") {
                            return [
                                2,
                                res.sendStatus(200)
                            ];
                        }
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            5,
                            ,
                            6
                        ]);
                        if (!req.path) return [
                            3,
                            4
                        ];
                        return [
                            4,
                            executeAccess({
                                req: req,
                                isReadingStaticFile: true
                            }, config.access.read)
                        ];
                    case 2:
                        accessResult = _state.sent();
                        if (!(typeof accessResult === "object")) return [
                            3,
                            4
                        ];
                        filename = decodeURI(req.path).replace(/^\/|\/$/g, "");
                        queryToBuild = {
                            and: [
                                {
                                    or: [
                                        {
                                            filename: {
                                                equals: filename
                                            }
                                        }
                                    ]
                                },
                                accessResult
                            ]
                        };
                        if (config.upload.imageSizes) {
                            config.upload.imageSizes.forEach(function(param) {
                                var name = param.name;
                                queryToBuild.and[0].or.push(_define_property({}, "sizes.".concat(name, ".filename"), {
                                    equals: filename
                                }));
                            });
                        }
                        return [
                            4,
                            req.payload.db.findOne({
                                collection: config.slug,
                                where: queryToBuild
                            })
                        ];
                    case 3:
                        doc = _state.sent();
                        if (!doc) {
                            throw new Forbidden(req.t);
                        }
                        _state.label = 4;
                    case 4:
                        return [
                            2,
                            next()
                        ];
                    case 5:
                        error = _state.sent();
                        return [
                            2,
                            next(error)
                        ];
                    case 6:
                        return [
                            2
                        ];
                }
            });
        });
        return function(req, res, next) {
            return _ref.apply(this, arguments);
        };
    }();
};
export default getExecuteStaticAccess;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2dldEV4ZWN1dGVTdGF0aWNBY2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgZXhlY3V0ZUFjY2VzcyBmcm9tICcuL2V4ZWN1dGVBY2Nlc3MnO1xuaW1wb3J0IHsgRm9yYmlkZGVuIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcblxuY29uc3QgZ2V0RXhlY3V0ZVN0YXRpY0FjY2VzcyA9IChjb25maWc6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcpID0+IGFzeW5jIChyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cygyMDApO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAocmVxLnBhdGgpIHtcbiAgICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdCA9IGF3YWl0IGV4ZWN1dGVBY2Nlc3MoeyByZXEsIGlzUmVhZGluZ1N0YXRpY0ZpbGU6IHRydWUgfSwgY29uZmlnLmFjY2Vzcy5yZWFkKTtcblxuICAgICAgaWYgKHR5cGVvZiBhY2Nlc3NSZXN1bHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gZGVjb2RlVVJJKHJlcS5wYXRoKS5yZXBsYWNlKC9eXFwvfFxcLyQvZywgJycpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5VG9CdWlsZDogV2hlcmUgPSB7XG4gICAgICAgICAgYW5kOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9yOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgZXF1YWxzOiBmaWxlbmFtZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY2Nlc3NSZXN1bHQsXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY29uZmlnLnVwbG9hZC5pbWFnZVNpemVzKSB7XG4gICAgICAgICAgY29uZmlnLnVwbG9hZC5pbWFnZVNpemVzLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgICAgICBxdWVyeVRvQnVpbGQuYW5kWzBdLm9yLnB1c2goe1xuICAgICAgICAgICAgICBbYHNpemVzLiR7bmFtZX0uZmlsZW5hbWVgXToge1xuICAgICAgICAgICAgICAgIGVxdWFsczogZmlsZW5hbWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRvYyA9IGF3YWl0IHJlcS5wYXlsb2FkLmRiLmZpbmRPbmUoe1xuICAgICAgICAgIGNvbGxlY3Rpb246IGNvbmZpZy5zbHVnLFxuICAgICAgICAgIHdoZXJlOiBxdWVyeVRvQnVpbGQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghZG9jKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEZvcmJpZGRlbihyZXEudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RXhlY3V0ZVN0YXRpY0FjY2VzcztcbiJdLCJuYW1lcyI6WyJleGVjdXRlQWNjZXNzIiwiRm9yYmlkZGVuIiwiZ2V0RXhlY3V0ZVN0YXRpY0FjY2VzcyIsImNvbmZpZyIsInJlcSIsInJlcyIsIm5leHQiLCJhY2Nlc3NSZXN1bHQiLCJmaWxlbmFtZSIsInF1ZXJ5VG9CdWlsZCIsImRvYyIsImVycm9yIiwibWV0aG9kIiwic2VuZFN0YXR1cyIsInBhdGgiLCJpc1JlYWRpbmdTdGF0aWNGaWxlIiwiYWNjZXNzIiwicmVhZCIsImRlY29kZVVSSSIsInJlcGxhY2UiLCJhbmQiLCJvciIsImVxdWFscyIsInVwbG9hZCIsImltYWdlU2l6ZXMiLCJmb3JFYWNoIiwibmFtZSIsInB1c2giLCJwYXlsb2FkIiwiZGIiLCJmaW5kT25lIiwiY29sbGVjdGlvbiIsInNsdWciLCJ3aGVyZSIsInQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsT0FBT0EsbUJBQW1CLGtCQUFrQjtBQUM1QyxTQUFTQyxTQUFTLFFBQVEsWUFBWTtBQUl0QyxJQUFNQyx5QkFBeUIsU0FBQ0M7O21CQUFzQyxvQkFBQSxTQUFPQyxLQUFxQkMsS0FBZUM7Z0JBT3JHQyxjQUdFQyxVQUVBQyxjQXlCQUMsS0FZSEM7Ozs7d0JBaERULElBQUlQLElBQUlRLE1BQU0sS0FBSyxXQUFXOzRCQUM1Qjs7Z0NBQU9QLElBQUlRLFVBQVUsQ0FBQzs7d0JBQ3hCOzs7Ozs7Ozs7NkJBR01ULElBQUlVLElBQUksRUFBUlY7Ozs7d0JBQ21COzs0QkFBTUosY0FBYztnQ0FBRUksS0FBQUE7Z0NBQUtXLHFCQUFxQjs0QkFBSyxHQUFHWixPQUFPYSxNQUFNLENBQUNDLElBQUk7Ozt3QkFBekZWLGVBQWU7NkJBRWpCLENBQUEsT0FBT0EsaUJBQWlCLFFBQU8sR0FBL0I7Ozs7d0JBQ0lDLFdBQVdVLFVBQVVkLElBQUlVLElBQUksRUFBRUssT0FBTyxDQUFDLFlBQVk7d0JBRW5EVixlQUFzQjs0QkFDMUJXLEdBQUc7Z0NBQ0Q7b0NBQ0VDLEVBQUU7d0NBQ0E7NENBQ0ViLFVBQVU7Z0RBQ1JjLFFBQVFkOzRDQUNWO3dDQUNGOztnQ0FFSjtnQ0FDQUQ7O3dCQUVKO3dCQUVBLElBQUlKLE9BQU9vQixNQUFNLENBQUNDLFVBQVUsRUFBRTs0QkFDNUJyQixPQUFPb0IsTUFBTSxDQUFDQyxVQUFVLENBQUNDLE9BQU8sQ0FBQztvQ0FBR0MsYUFBQUE7Z0NBQ2xDakIsYUFBYVcsR0FBRyxDQUFDLEVBQUUsQ0FBQ0MsRUFBRSxDQUFDTSxJQUFJLENBQ3pCLHFCQUFDLEFBQUMsU0FBYSxPQUFMRCxNQUFLLGNBQWE7b0NBQzFCSixRQUFRZDtnQ0FDVjs0QkFFSjt3QkFDRjt3QkFFWTs7NEJBQU1KLElBQUl3QixPQUFPLENBQUNDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDO2dDQUN2Q0MsWUFBWTVCLE9BQU82QixJQUFJO2dDQUN2QkMsT0FBT3hCOzRCQUNUOzs7d0JBSE1DLE1BQU07d0JBS1osSUFBSSxDQUFDQSxLQUFLOzRCQUNSLE1BQU0sSUFBSVQsVUFBVUcsSUFBSThCLENBQUM7d0JBQzNCOzs7d0JBSUo7OzRCQUFPNUI7Ozt3QkFDQUs7d0JBQ1A7OzRCQUFPTCxLQUFLSzs7Ozs7Ozs7UUFFaEI7d0JBcEQ2RVAsS0FBcUJDLEtBQWVDOzs7OztBQXNEakgsZUFBZUosdUJBQXVCIn0=