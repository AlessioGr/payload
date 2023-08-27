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
import httpStatus from "http-status";
import update from "../operations/update";
export default function updateHandler(globalConfig) {
    return function() {
        var _handler = _async_to_generator(function(req, res, next) {
            var slug, draft, autosave, result, message, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        slug = globalConfig.slug;
                        draft = req.query.draft === "true";
                        autosave = req.query.autosave === "true";
                        return [
                            4,
                            update({
                                req: req,
                                globalConfig: globalConfig,
                                slug: slug,
                                depth: Number(req.query.depth),
                                data: req.body,
                                draft: draft,
                                autosave: autosave
                            })
                        ];
                    case 1:
                        result = _state.sent();
                        message = req.t("general:updatedSuccessfully");
                        if (draft) message = req.t("version:draftSavedSuccessfully");
                        if (autosave) message = req.t("version:autosavedSuccessfully");
                        res.status(httpStatus.OK).json({
                            message: message,
                            result: result
                        });
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
        function handler(req, res, next) {
            return _handler.apply(this, arguments);
        }
        return handler;
    }();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy91cGRhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi4vb3BlcmF0aW9ucy91cGRhdGUnO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVHbG9iYWxSZXN1bHQgPSBQcm9taXNlPFJlc3BvbnNlPERvY3VtZW50PiB8IHZvaWQ+O1xuZXhwb3J0IHR5cGUgVXBkYXRlR2xvYmFsUmVzcG9uc2UgPSAocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiBVcGRhdGVHbG9iYWxSZXN1bHQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoZ2xvYmFsQ29uZmlnOiBTYW5pdGl6ZWRHbG9iYWxDb25maWcpOiBVcGRhdGVHbG9iYWxSZXNwb25zZSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHNsdWcgfSA9IGdsb2JhbENvbmZpZztcbiAgICAgIGNvbnN0IGRyYWZ0ID0gcmVxLnF1ZXJ5LmRyYWZ0ID09PSAndHJ1ZSc7XG4gICAgICBjb25zdCBhdXRvc2F2ZSA9IHJlcS5xdWVyeS5hdXRvc2F2ZSA9PT0gJ3RydWUnO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGUoe1xuICAgICAgICByZXEsXG4gICAgICAgIGdsb2JhbENvbmZpZyxcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgZGVwdGg6IE51bWJlcihyZXEucXVlcnkuZGVwdGgpLFxuICAgICAgICBkYXRhOiByZXEuYm9keSxcbiAgICAgICAgZHJhZnQsXG4gICAgICAgIGF1dG9zYXZlLFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBtZXNzYWdlID0gcmVxLnQoJ2dlbmVyYWw6dXBkYXRlZFN1Y2Nlc3NmdWxseScpO1xuXG4gICAgICBpZiAoZHJhZnQpIG1lc3NhZ2UgPSByZXEudCgndmVyc2lvbjpkcmFmdFNhdmVkU3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICBpZiAoYXV0b3NhdmUpIG1lc3NhZ2UgPSByZXEudCgndmVyc2lvbjphdXRvc2F2ZWRTdWNjZXNzZnVsbHknKTtcblxuICAgICAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHsgbWVzc2FnZSwgcmVzdWx0IH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBuZXh0KGVycm9yKTtcbiAgICB9XG4gIH07XG59XG4iXSwibmFtZXMiOlsiaHR0cFN0YXR1cyIsInVwZGF0ZSIsInVwZGF0ZUhhbmRsZXIiLCJnbG9iYWxDb25maWciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInNsdWciLCJkcmFmdCIsImF1dG9zYXZlIiwicmVzdWx0IiwibWVzc2FnZSIsImVycm9yIiwicXVlcnkiLCJkZXB0aCIsIk51bWJlciIsImRhdGEiLCJib2R5IiwidCIsInN0YXR1cyIsIk9LIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLGdCQUFnQixjQUFjO0FBSXJDLE9BQU9DLFlBQVksdUJBQXVCO0FBSzFDLGVBQWUsU0FBU0MsY0FBY0MsWUFBbUM7SUFDdkU7WUFBc0JDLFdBQWYsb0JBQUEsU0FBdUJDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7Z0JBRXhFQyxNQUNGQyxPQUNBQyxVQUVBQyxRQVVGQyxTQU1HQzs7Ozs7Ozs7Ozt3QkFwQkNMLE9BQVNMLGFBQVRLO3dCQUNGQyxRQUFRSixJQUFJUyxLQUFLLENBQUNMLEtBQUssS0FBSzt3QkFDNUJDLFdBQVdMLElBQUlTLEtBQUssQ0FBQ0osUUFBUSxLQUFLO3dCQUV6Qjs7NEJBQU1ULE9BQU87Z0NBQzFCSSxLQUFBQTtnQ0FDQUYsY0FBQUE7Z0NBQ0FLLE1BQUFBO2dDQUNBTyxPQUFPQyxPQUFPWCxJQUFJUyxLQUFLLENBQUNDLEtBQUs7Z0NBQzdCRSxNQUFNWixJQUFJYSxJQUFJO2dDQUNkVCxPQUFBQTtnQ0FDQUMsVUFBQUE7NEJBQ0Y7Ozt3QkFSTUMsU0FBUzt3QkFVWEMsVUFBVVAsSUFBSWMsQ0FBQyxDQUFDO3dCQUVwQixJQUFJVixPQUFPRyxVQUFVUCxJQUFJYyxDQUFDLENBQUM7d0JBQzNCLElBQUlULFVBQVVFLFVBQVVQLElBQUljLENBQUMsQ0FBQzt3QkFFOUJiLElBQUljLE1BQU0sQ0FBQ3BCLFdBQVdxQixFQUFFLEVBQUVDLElBQUksQ0FBQzs0QkFBRVYsU0FBQUE7NEJBQVNELFFBQUFBO3dCQUFPOzs7Ozs7d0JBQzFDRTt3QkFDUE4sS0FBS007Ozs7Ozs7Ozs7O1FBRVQ7aUJBekJzQlQsUUFBUUMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjttQkFBOURIOztlQUFBQTs7QUEwQnhCIn0=