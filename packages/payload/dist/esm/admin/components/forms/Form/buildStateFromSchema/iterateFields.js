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
import { fieldIsPresentationalOnly } from "../../../../../fields/config/types";
import { addFieldStatePromise } from "./addFieldStatePromise";
export var iterateFields = function() {
    var _ref = _async_to_generator(function(param) {
        var fields, data, parentPassesCondition, _param_path, path, fullData, user, locale, operation, id, state, t, preferences, promises;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fields = param.fields, data = param.data, parentPassesCondition = param.parentPassesCondition, _param_path = param.path, path = _param_path === void 0 ? "" : _param_path, fullData = param.fullData, user = param.user, locale = param.locale, operation = param.operation, id = param.id, state = param.state, t = param.t, preferences = param.preferences;
                    promises = [];
                    fields.forEach(function(field) {
                        var _field_admin, _field;
                        var initialData = data;
                        if (!fieldIsPresentationalOnly(field) && !((_field = field) === null || _field === void 0 ? void 0 : (_field_admin = _field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.disabled)) {
                            var _field_admin1, _field1;
                            var passesCondition = Boolean((((_field1 = field) === null || _field1 === void 0 ? void 0 : (_field_admin1 = _field1.admin) === null || _field_admin1 === void 0 ? void 0 : _field_admin1.condition) ? field.admin.condition(fullData || {}, initialData || {}, {
                                user: user
                            }) : true) && parentPassesCondition);
                            promises.push(addFieldStatePromise({
                                fullData: fullData,
                                id: id,
                                locale: locale,
                                operation: operation,
                                path: path,
                                state: state,
                                user: user,
                                field: field,
                                passesCondition: passesCondition,
                                data: data,
                                t: t,
                                preferences: preferences
                            }));
                        }
                    });
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function iterateFields(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEvaXRlcmF0ZUZpZWxkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2F1dGgnO1xuaW1wb3J0IHsgRmllbGQgYXMgRmllbGRTY2hlbWEsIGZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IERhdGEsIEZpZWxkcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGFkZEZpZWxkU3RhdGVQcm9taXNlIH0gZnJvbSAnLi9hZGRGaWVsZFN0YXRlUHJvbWlzZSc7XG5cbnR5cGUgQXJncyA9IHtcbiAgc3RhdGU6IEZpZWxkc1xuICBmaWVsZHM6IEZpZWxkU2NoZW1hW11cbiAgZGF0YTogRGF0YVxuICBmdWxsRGF0YTogRGF0YVxuICBwYXJlbnRQYXNzZXNDb25kaXRpb246IGJvb2xlYW5cbiAgcGF0aDogc3RyaW5nXG4gIHVzZXI6IFVzZXJcbiAgbG9jYWxlOiBzdHJpbmdcbiAgaWQ6IHN0cmluZyB8IG51bWJlclxuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgdDogVEZ1bmN0aW9uXG4gIHByZWZlcmVuY2VzOiB7XG4gICAgW2tleTogc3RyaW5nXTogdW5rbm93blxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpdGVyYXRlRmllbGRzID0gYXN5bmMgKHtcbiAgZmllbGRzLFxuICBkYXRhLFxuICBwYXJlbnRQYXNzZXNDb25kaXRpb24sXG4gIHBhdGggPSAnJyxcbiAgZnVsbERhdGEsXG4gIHVzZXIsXG4gIGxvY2FsZSxcbiAgb3BlcmF0aW9uLFxuICBpZCxcbiAgc3RhdGUsXG4gIHQsXG4gIHByZWZlcmVuY2VzLFxufTogQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBpbml0aWFsRGF0YSA9IGRhdGE7XG4gICAgaWYgKCFmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5KGZpZWxkKSAmJiAhZmllbGQ/LmFkbWluPy5kaXNhYmxlZCkge1xuICAgICAgY29uc3QgcGFzc2VzQ29uZGl0aW9uID0gQm9vbGVhbigoZmllbGQ/LmFkbWluPy5jb25kaXRpb24gPyBmaWVsZC5hZG1pbi5jb25kaXRpb24oZnVsbERhdGEgfHwge30sIGluaXRpYWxEYXRhIHx8IHt9LCB7IHVzZXIgfSkgOiB0cnVlKSAmJiBwYXJlbnRQYXNzZXNDb25kaXRpb24pO1xuXG4gICAgICBwcm9taXNlcy5wdXNoKGFkZEZpZWxkU3RhdGVQcm9taXNlKHtcbiAgICAgICAgZnVsbERhdGEsXG4gICAgICAgIGlkLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIGZpZWxkLFxuICAgICAgICBwYXNzZXNDb25kaXRpb24sXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHQsXG4gICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSk7XG4gIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG4iXSwibmFtZXMiOlsiZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSIsImFkZEZpZWxkU3RhdGVQcm9taXNlIiwiaXRlcmF0ZUZpZWxkcyIsImZpZWxkcyIsImRhdGEiLCJwYXJlbnRQYXNzZXNDb25kaXRpb24iLCJwYXRoIiwiZnVsbERhdGEiLCJ1c2VyIiwibG9jYWxlIiwib3BlcmF0aW9uIiwiaWQiLCJzdGF0ZSIsInQiLCJwcmVmZXJlbmNlcyIsInByb21pc2VzIiwiZm9yRWFjaCIsImZpZWxkIiwiaW5pdGlhbERhdGEiLCJhZG1pbiIsImRpc2FibGVkIiwicGFzc2VzQ29uZGl0aW9uIiwiQm9vbGVhbiIsImNvbmRpdGlvbiIsInB1c2giLCJQcm9taXNlIiwiYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBK0JBLHlCQUF5QixRQUFRLHFDQUFxQztBQUVyRyxTQUFTQyxvQkFBb0IsUUFBUSx5QkFBeUI7QUFtQjlELE9BQU8sSUFBTUM7ZUFBZ0Isb0JBQUE7WUFDM0JDLFFBQ0FDLE1BQ0FDLG9DQUNBQyxNQUNBQyxVQUNBQyxNQUNBQyxRQUNBQyxXQUNBQyxJQUNBQyxPQUNBQyxHQUNBQyxhQUVNQzs7OztvQkFiTlosZUFBQUEsUUFDQUMsYUFBQUEsTUFDQUMsOEJBQUFBLDJDQUNBQyxNQUFBQSxnQ0FBTyxrQkFDUEMsaUJBQUFBLFVBQ0FDLGFBQUFBLE1BQ0FDLGVBQUFBLFFBQ0FDLGtCQUFBQSxXQUNBQyxXQUFBQSxJQUNBQyxjQUFBQSxPQUNBQyxVQUFBQSxHQUNBQyxvQkFBQUE7b0JBRU1DO29CQUNOWixPQUFPYSxPQUFPLENBQUMsU0FBQ0M7NEJBRTRCQSxjQUFBQTt3QkFEMUMsSUFBTUMsY0FBY2Q7d0JBQ3BCLElBQUksQ0FBQ0osMEJBQTBCaUIsVUFBVSxHQUFDQSxTQUFBQSxtQkFBQUEsOEJBQUFBLGVBQUFBLE9BQU9FLEtBQUssY0FBWkYsbUNBQUFBLGFBQWNHLFFBQVEsR0FBRTtnQ0FDL0JILGVBQUFBOzRCQUFqQyxJQUFNSSxrQkFBa0JDLFFBQVEsQUFBQ0wsQ0FBQUEsRUFBQUEsVUFBQUEsbUJBQUFBLCtCQUFBQSxnQkFBQUEsUUFBT0UsS0FBSyxjQUFaRixvQ0FBQUEsY0FBY00sU0FBUyxJQUFHTixNQUFNRSxLQUFLLENBQUNJLFNBQVMsQ0FBQ2hCLFlBQVksQ0FBQyxHQUFHVyxlQUFlLENBQUMsR0FBRztnQ0FBRVYsTUFBQUE7NEJBQUssS0FBSyxJQUFHLEtBQU1IOzRCQUV6SVUsU0FBU1MsSUFBSSxDQUFDdkIscUJBQXFCO2dDQUNqQ00sVUFBQUE7Z0NBQ0FJLElBQUFBO2dDQUNBRixRQUFBQTtnQ0FDQUMsV0FBQUE7Z0NBQ0FKLE1BQUFBO2dDQUNBTSxPQUFBQTtnQ0FDQUosTUFBQUE7Z0NBQ0FTLE9BQUFBO2dDQUNBSSxpQkFBQUE7Z0NBQ0FqQixNQUFBQTtnQ0FDQVMsR0FBQUE7Z0NBQ0FDLGFBQUFBOzRCQUNGO3dCQUNGO29CQUNGO29CQUNBOzt3QkFBTVcsUUFBUUMsR0FBRyxDQUFDWDs7O29CQUFsQjs7Ozs7O0lBQ0Y7b0JBckNhYjs7O0lBcUNYIn0=