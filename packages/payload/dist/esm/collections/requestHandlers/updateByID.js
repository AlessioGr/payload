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
import updateByID from "../operations/updateByID";
export function deprecatedUpdate(req, res, next) {
    return _deprecatedUpdate.apply(this, arguments);
}
function _deprecatedUpdate() {
    _deprecatedUpdate = _async_to_generator(function(req, res, next) {
        return _ts_generator(this, function(_state) {
            req.payload.logger.warn("The PUT method is deprecated and will no longer be supported in a future release. Please use the PATCH method for update requests.");
            return [
                2,
                updateByIDHandler(req, res, next)
            ];
        });
    });
    return _deprecatedUpdate.apply(this, arguments);
}
export default function updateByIDHandler(req, res, next) {
    return _updateByIDHandler.apply(this, arguments);
}
function _updateByIDHandler() {
    _updateByIDHandler = _async_to_generator(function(req, res, next) {
        var draft, autosave, doc, message, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    draft = req.query.draft === "true";
                    autosave = req.query.autosave === "true";
                    return [
                        4,
                        updateByID({
                            req: req,
                            collection: req.collection,
                            id: req.params.id,
                            data: req.body,
                            depth: parseInt(String(req.query.depth), 10),
                            draft: draft,
                            autosave: autosave
                        })
                    ];
                case 1:
                    doc = _state.sent();
                    message = req.t("general:updatedSuccessfully");
                    if (draft) message = req.t("version:draftSavedSuccessfully");
                    if (autosave) message = req.t("version:autosavedSuccessfully");
                    res.status(httpStatus.OK).json(_object_spread_props(_object_spread({}, formatSuccessResponse(message, "message")), {
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
    return _updateByIDHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IGZvcm1hdFN1Y2Nlc3NSZXNwb25zZSBmcm9tICcuLi8uLi9leHByZXNzL3Jlc3BvbnNlcy9mb3JtYXRTdWNjZXNzJztcbmltcG9ydCB1cGRhdGVCeUlEIGZyb20gJy4uL29wZXJhdGlvbnMvdXBkYXRlQnlJRCc7XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVJlc3VsdCA9IHtcbiAgbWVzc2FnZTogc3RyaW5nXG4gIGRvYzogRG9jdW1lbnRcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZXByZWNhdGVkVXBkYXRlKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IFByb21pc2U8UmVzcG9uc2U8VXBkYXRlUmVzdWx0PiB8IHZvaWQ+IHtcbiAgcmVxLnBheWxvYWQubG9nZ2VyLndhcm4oJ1RoZSBQVVQgbWV0aG9kIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgbm8gbG9uZ2VyIGJlIHN1cHBvcnRlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLiBQbGVhc2UgdXNlIHRoZSBQQVRDSCBtZXRob2QgZm9yIHVwZGF0ZSByZXF1ZXN0cy4nKTtcblxuICByZXR1cm4gdXBkYXRlQnlJREhhbmRsZXIocmVxLCByZXMsIG5leHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVCeUlESGFuZGxlcihyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPFJlc3BvbnNlPFVwZGF0ZVJlc3VsdD4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZHJhZnQgPSByZXEucXVlcnkuZHJhZnQgPT09ICd0cnVlJztcbiAgICBjb25zdCBhdXRvc2F2ZSA9IHJlcS5xdWVyeS5hdXRvc2F2ZSA9PT0gJ3RydWUnO1xuXG4gICAgY29uc3QgZG9jID0gYXdhaXQgdXBkYXRlQnlJRCh7XG4gICAgICByZXEsXG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICAgIGlkOiByZXEucGFyYW1zLmlkLFxuICAgICAgZGF0YTogcmVxLmJvZHksXG4gICAgICBkZXB0aDogcGFyc2VJbnQoU3RyaW5nKHJlcS5xdWVyeS5kZXB0aCksIDEwKSxcbiAgICAgIGRyYWZ0LFxuICAgICAgYXV0b3NhdmUsXG4gICAgfSk7XG5cbiAgICBsZXQgbWVzc2FnZSA9IHJlcS50KCdnZW5lcmFsOnVwZGF0ZWRTdWNjZXNzZnVsbHknKTtcblxuICAgIGlmIChkcmFmdCkgbWVzc2FnZSA9IHJlcS50KCd2ZXJzaW9uOmRyYWZ0U2F2ZWRTdWNjZXNzZnVsbHknKTtcbiAgICBpZiAoYXV0b3NhdmUpIG1lc3NhZ2UgPSByZXEudCgndmVyc2lvbjphdXRvc2F2ZWRTdWNjZXNzZnVsbHknKTtcblxuICAgIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbih7XG4gICAgICAuLi5mb3JtYXRTdWNjZXNzUmVzcG9uc2UobWVzc2FnZSwgJ21lc3NhZ2UnKSxcbiAgICAgIGRvYyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImh0dHBTdGF0dXMiLCJmb3JtYXRTdWNjZXNzUmVzcG9uc2UiLCJ1cGRhdGVCeUlEIiwiZGVwcmVjYXRlZFVwZGF0ZSIsInJlcSIsInJlcyIsIm5leHQiLCJwYXlsb2FkIiwibG9nZ2VyIiwid2FybiIsInVwZGF0ZUJ5SURIYW5kbGVyIiwiZHJhZnQiLCJhdXRvc2F2ZSIsImRvYyIsIm1lc3NhZ2UiLCJlcnJvciIsInF1ZXJ5IiwiY29sbGVjdGlvbiIsImlkIiwicGFyYW1zIiwiZGF0YSIsImJvZHkiLCJkZXB0aCIsInBhcnNlSW50IiwiU3RyaW5nIiwidCIsInN0YXR1cyIsIk9LIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxnQkFBZ0IsY0FBYztBQUVyQyxPQUFPQywyQkFBMkIsd0NBQXdDO0FBQzFFLE9BQU9DLGdCQUFnQiwyQkFBMkI7QUFPbEQsZ0JBQXNCQyxpQkFBaUJDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7V0FBdkVIOztTQUFBQTtJQUFBQSxvQkFBZixvQkFBQSxTQUFnQ0MsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjs7WUFDM0ZGLElBQUlHLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUM7WUFFeEI7O2dCQUFPQyxrQkFBa0JOLEtBQUtDLEtBQUtDOzs7SUFDckM7V0FKc0JIOztBQU10Qix3QkFBOEJPLGtCQUFrQk4sR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtXQUF4RUk7O1NBQUFBO0lBQUFBLHFCQUFmLG9CQUFBLFNBQWlDTixHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1lBRTVGSyxPQUNBQyxVQUVBQyxLQVVGQyxTQVNHQzs7Ozs7Ozs7OztvQkF0QkRKLFFBQVFQLElBQUlZLEtBQUssQ0FBQ0wsS0FBSyxLQUFLO29CQUM1QkMsV0FBV1IsSUFBSVksS0FBSyxDQUFDSixRQUFRLEtBQUs7b0JBRTVCOzt3QkFBTVYsV0FBVzs0QkFDM0JFLEtBQUFBOzRCQUNBYSxZQUFZYixJQUFJYSxVQUFVOzRCQUMxQkMsSUFBSWQsSUFBSWUsTUFBTSxDQUFDRCxFQUFFOzRCQUNqQkUsTUFBTWhCLElBQUlpQixJQUFJOzRCQUNkQyxPQUFPQyxTQUFTQyxPQUFPcEIsSUFBSVksS0FBSyxDQUFDTSxLQUFLLEdBQUc7NEJBQ3pDWCxPQUFBQTs0QkFDQUMsVUFBQUE7d0JBQ0Y7OztvQkFSTUMsTUFBTTtvQkFVUkMsVUFBVVYsSUFBSXFCLENBQUMsQ0FBQztvQkFFcEIsSUFBSWQsT0FBT0csVUFBVVYsSUFBSXFCLENBQUMsQ0FBQztvQkFDM0IsSUFBSWIsVUFBVUUsVUFBVVYsSUFBSXFCLENBQUMsQ0FBQztvQkFFOUJwQixJQUFJcUIsTUFBTSxDQUFDMUIsV0FBVzJCLEVBQUUsRUFBRUMsSUFBSSxDQUFDLHdDQUMxQjNCLHNCQUFzQmEsU0FBUzt3QkFDbENELEtBQUFBOzs7Ozs7O29CQUVLRTtvQkFDUFQsS0FBS1M7Ozs7Ozs7Ozs7O0lBRVQ7V0EzQjhCTCJ9