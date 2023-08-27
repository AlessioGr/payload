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
import httpStatus from "http-status";
import formatSuccessResponse from "../../express/responses/formatSuccess";
import create from "../operations/create";
import { getTranslation } from "../../utilities/getTranslation";
export default function createHandler(req, res, next) {
    return _createHandler.apply(this, arguments);
}
function _createHandler() {
    _createHandler = _async_to_generator(function(req, res, next) {
        var autosave, draft, doc, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    autosave = req.query.autosave === "true";
                    draft = req.query.draft === "true";
                    return [
                        4,
                        create({
                            req: req,
                            collection: req.collection,
                            data: req.body,
                            depth: Number(req.query.depth),
                            draft: draft,
                            autosave: autosave
                        })
                    ];
                case 1:
                    doc = _state.sent();
                    res.status(httpStatus.CREATED).json(_object_spread_props(_object_spread({}, formatSuccessResponse(req.t("general:successfullyCreated", {
                        label: getTranslation(req.collection.config.labels.singular, req.i18n)
                    }), "message")), {
                        doc: doc
                    }));
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    next(error);
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _createHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvY3JlYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIGZyb20gJy4uLy4uL2V4cHJlc3MvcmVzcG9uc2VzL2Zvcm1hdFN1Y2Nlc3MnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgY3JlYXRlIGZyb20gJy4uL29wZXJhdGlvbnMvY3JlYXRlJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuZXhwb3J0IHR5cGUgQ3JlYXRlUmVzdWx0ID0ge1xuICBtZXNzYWdlOiBzdHJpbmdcbiAgZG9jOiBEb2N1bWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSGFuZGxlcihyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPFJlc3BvbnNlPENyZWF0ZVJlc3VsdD4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXV0b3NhdmUgPSByZXEucXVlcnkuYXV0b3NhdmUgPT09ICd0cnVlJztcbiAgICBjb25zdCBkcmFmdCA9IHJlcS5xdWVyeS5kcmFmdCA9PT0gJ3RydWUnO1xuXG4gICAgY29uc3QgZG9jID0gYXdhaXQgY3JlYXRlKHtcbiAgICAgIHJlcSxcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgZGF0YTogcmVxLmJvZHksXG4gICAgICBkZXB0aDogTnVtYmVyKHJlcS5xdWVyeS5kZXB0aCksXG4gICAgICBkcmFmdCxcbiAgICAgIGF1dG9zYXZlLFxuICAgIH0pO1xuXG4gICAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLkNSRUFURUQpLmpzb24oe1xuICAgICAgLi4uZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlKHJlcS50KCdnZW5lcmFsOnN1Y2Nlc3NmdWxseUNyZWF0ZWQnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihyZXEuY29sbGVjdGlvbi5jb25maWcubGFiZWxzLnNpbmd1bGFyLCByZXEuaTE4bikgfSksICdtZXNzYWdlJyksXG4gICAgICBkb2MsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbmV4dChlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJodHRwU3RhdHVzIiwiZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIiwiY3JlYXRlIiwiZ2V0VHJhbnNsYXRpb24iLCJjcmVhdGVIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImF1dG9zYXZlIiwiZHJhZnQiLCJkb2MiLCJlcnJvciIsInF1ZXJ5IiwiY29sbGVjdGlvbiIsImRhdGEiLCJib2R5IiwiZGVwdGgiLCJOdW1iZXIiLCJzdGF0dXMiLCJDUkVBVEVEIiwianNvbiIsInQiLCJsYWJlbCIsImNvbmZpZyIsImxhYmVscyIsInNpbmd1bGFyIiwiaTE4biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxnQkFBZ0IsY0FBYztBQUdyQyxPQUFPQywyQkFBMkIsd0NBQXdDO0FBRTFFLE9BQU9DLFlBQVksdUJBQXVCO0FBQzFDLFNBQVNDLGNBQWMsUUFBUSxpQ0FBaUM7QUFPaEUsd0JBQThCQyxjQUFjQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1dBQXBFSDs7U0FBQUE7SUFBQUEsaUJBQWYsb0JBQUEsU0FBNkJDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7WUFFeEZDLFVBQ0FDLE9BRUFDLEtBYUNDOzs7Ozs7Ozs7O29CQWhCREgsV0FBV0gsSUFBSU8sS0FBSyxDQUFDSixRQUFRLEtBQUs7b0JBQ2xDQyxRQUFRSixJQUFJTyxLQUFLLENBQUNILEtBQUssS0FBSztvQkFFdEI7O3dCQUFNUCxPQUFPOzRCQUN2QkcsS0FBQUE7NEJBQ0FRLFlBQVlSLElBQUlRLFVBQVU7NEJBQzFCQyxNQUFNVCxJQUFJVSxJQUFJOzRCQUNkQyxPQUFPQyxPQUFPWixJQUFJTyxLQUFLLENBQUNJLEtBQUs7NEJBQzdCUCxPQUFBQTs0QkFDQUQsVUFBQUE7d0JBQ0Y7OztvQkFQTUUsTUFBTTtvQkFTWkosSUFBSVksTUFBTSxDQUFDbEIsV0FBV21CLE9BQU8sRUFBRUMsSUFBSSxDQUFDLHdDQUMvQm5CLHNCQUFzQkksSUFBSWdCLENBQUMsQ0FBQywrQkFBK0I7d0JBQUVDLE9BQU9uQixlQUFlRSxJQUFJUSxVQUFVLENBQUNVLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLEVBQUVwQixJQUFJcUIsSUFBSTtvQkFBRSxJQUFJO3dCQUMzSWhCLEtBQUFBOzs7Ozs7O29CQUVLQztvQkFDUEosS0FBS0k7Ozs7Ozs7Ozs7O0lBRVQ7V0FyQjhCUCJ9