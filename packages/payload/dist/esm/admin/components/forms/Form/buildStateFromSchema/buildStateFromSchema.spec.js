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
import buildStateFromSchema from "./index";
describe("Form - buildStateFromSchema", function() {
    var defaultValue = "Default";
    it("populates default value - normal fields", /*#__PURE__*/ _async_to_generator(function() {
        var fieldSchema, state;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fieldSchema = [
                        {
                            name: "text",
                            type: "text",
                            label: "Text",
                            defaultValue: defaultValue
                        }
                    ];
                    return [
                        4,
                        buildStateFromSchema({
                            fieldSchema: fieldSchema
                        })
                    ];
                case 1:
                    state = _state.sent();
                    expect(state.text.value).toBe(defaultValue);
                    return [
                        2
                    ];
            }
        });
    }));
    it("field value overrides defaultValue - normal fields", /*#__PURE__*/ _async_to_generator(function() {
        var value, data, fieldSchema, state;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    value = "value";
                    data = {
                        text: value
                    };
                    fieldSchema = [
                        {
                            name: "text",
                            type: "text",
                            label: "Text",
                            defaultValue: defaultValue
                        }
                    ];
                    return [
                        4,
                        buildStateFromSchema({
                            fieldSchema: fieldSchema,
                            data: data
                        })
                    ];
                case 1:
                    state = _state.sent();
                    expect(state.text.value).toBe(value);
                    return [
                        2
                    ];
            }
        });
    }));
    it("populates default value from a function - normal fields", /*#__PURE__*/ _async_to_generator(function() {
        var user, locale, fieldSchema, state;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    user = {
                        email: "user@example.com"
                    };
                    locale = "en";
                    fieldSchema = [
                        {
                            name: "text",
                            type: "text",
                            label: "Text",
                            defaultValue: function(args) {
                                if (!args.locale) {
                                    return "missing locale";
                                }
                                if (!args.user) {
                                    return "missing user";
                                }
                                return "Default";
                            }
                        }
                    ];
                    return [
                        4,
                        buildStateFromSchema({
                            fieldSchema: fieldSchema,
                            user: user,
                            locale: locale
                        })
                    ];
                case 1:
                    state = _state.sent();
                    expect(state.text.value).toBe(defaultValue);
                    return [
                        2
                    ];
            }
        });
    }));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEvYnVpbGRTdGF0ZUZyb21TY2hlbWEuc3BlYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRTdGF0ZUZyb21TY2hlbWEgZnJvbSAnLi9pbmRleCc7XG5cbmRlc2NyaWJlKCdGb3JtIC0gYnVpbGRTdGF0ZUZyb21TY2hlbWEnLCAoKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRWYWx1ZSA9ICdEZWZhdWx0JztcbiAgaXQoJ3BvcHVsYXRlcyBkZWZhdWx0IHZhbHVlIC0gbm9ybWFsIGZpZWxkcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBmaWVsZFNjaGVtYSA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RleHQnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGxhYmVsOiAnVGV4dCcsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHsgZmllbGRTY2hlbWEgfSk7XG4gICAgZXhwZWN0KHN0YXRlLnRleHQudmFsdWUpLnRvQmUoZGVmYXVsdFZhbHVlKTtcbiAgfSk7XG4gIGl0KCdmaWVsZCB2YWx1ZSBvdmVycmlkZXMgZGVmYXVsdFZhbHVlIC0gbm9ybWFsIGZpZWxkcycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9ICd2YWx1ZSc7XG4gICAgY29uc3QgZGF0YSA9IHsgdGV4dDogdmFsdWUgfTtcbiAgICBjb25zdCBmaWVsZFNjaGVtYSA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RleHQnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGxhYmVsOiAnVGV4dCcsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHsgZmllbGRTY2hlbWEsIGRhdGEgfSk7XG4gICAgZXhwZWN0KHN0YXRlLnRleHQudmFsdWUpLnRvQmUodmFsdWUpO1xuICB9KTtcbiAgaXQoJ3BvcHVsYXRlcyBkZWZhdWx0IHZhbHVlIGZyb20gYSBmdW5jdGlvbiAtIG5vcm1hbCBmaWVsZHMnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IHsgZW1haWw6ICd1c2VyQGV4YW1wbGUuY29tJyB9O1xuICAgIGNvbnN0IGxvY2FsZSA9ICdlbic7XG4gICAgY29uc3QgZmllbGRTY2hlbWEgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0ZXh0JyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBsYWJlbDogJ1RleHQnLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IChhcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKCFhcmdzLmxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuICdtaXNzaW5nIGxvY2FsZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYXJncy51c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ21pc3NpbmcgdXNlcic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnRGVmYXVsdCc7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7IGZpZWxkU2NoZW1hLCB1c2VyLCBsb2NhbGUgfSk7XG4gICAgZXhwZWN0KHN0YXRlLnRleHQudmFsdWUpLnRvQmUoZGVmYXVsdFZhbHVlKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJidWlsZFN0YXRlRnJvbVNjaGVtYSIsImRlc2NyaWJlIiwiZGVmYXVsdFZhbHVlIiwiaXQiLCJmaWVsZFNjaGVtYSIsInN0YXRlIiwibmFtZSIsInR5cGUiLCJsYWJlbCIsImV4cGVjdCIsInRleHQiLCJ2YWx1ZSIsInRvQmUiLCJkYXRhIiwidXNlciIsImxvY2FsZSIsImVtYWlsIiwiYXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLDBCQUEwQixVQUFVO0FBRTNDQyxTQUFTLCtCQUErQjtJQUN0QyxJQUFNQyxlQUFlO0lBQ3JCQyxHQUFHLHlEQUEyQyxvQkFBQTtZQUN0Q0MsYUFRQUM7Ozs7b0JBUkFEO3dCQUNKOzRCQUNFRSxNQUFNOzRCQUNOQyxNQUFNOzRCQUNOQyxPQUFPOzRCQUNQTixjQUFBQTt3QkFDRjs7b0JBRVk7O3dCQUFNRixxQkFBcUI7NEJBQUVJLGFBQUFBO3dCQUFZOzs7b0JBQWpEQyxRQUFRO29CQUNkSSxPQUFPSixNQUFNSyxJQUFJLENBQUNDLEtBQUssRUFBRUMsSUFBSSxDQUFDVjs7Ozs7O0lBQ2hDO0lBQ0FDLEdBQUcsb0VBQXNELG9CQUFBO1lBQ2pEUSxPQUNBRSxNQUNBVCxhQVFBQzs7OztvQkFWQU0sUUFBUTtvQkFDUkUsT0FBTzt3QkFBRUgsTUFBTUM7b0JBQU07b0JBQ3JCUDt3QkFDSjs0QkFDRUUsTUFBTTs0QkFDTkMsTUFBTTs0QkFDTkMsT0FBTzs0QkFDUE4sY0FBQUE7d0JBQ0Y7O29CQUVZOzt3QkFBTUYscUJBQXFCOzRCQUFFSSxhQUFBQTs0QkFBYVMsTUFBQUE7d0JBQUs7OztvQkFBdkRSLFFBQVE7b0JBQ2RJLE9BQU9KLE1BQU1LLElBQUksQ0FBQ0MsS0FBSyxFQUFFQyxJQUFJLENBQUNEOzs7Ozs7SUFDaEM7SUFDQVIsR0FBRyx5RUFBMkQsb0JBQUE7WUFDdERXLE1BQ0FDLFFBQ0FYLGFBZ0JBQzs7OztvQkFsQkFTLE9BQU87d0JBQUVFLE9BQU87b0JBQW1CO29CQUNuQ0QsU0FBUztvQkFDVFg7d0JBQ0o7NEJBQ0VFLE1BQU07NEJBQ05DLE1BQU07NEJBQ05DLE9BQU87NEJBQ1BOLGNBQWMsU0FBQ2U7Z0NBQ2IsSUFBSSxDQUFDQSxLQUFLRixNQUFNLEVBQUU7b0NBQ2hCLE9BQU87Z0NBQ1Q7Z0NBQ0EsSUFBSSxDQUFDRSxLQUFLSCxJQUFJLEVBQUU7b0NBQ2QsT0FBTztnQ0FDVDtnQ0FDQSxPQUFPOzRCQUNUO3dCQUNGOztvQkFFWTs7d0JBQU1kLHFCQUFxQjs0QkFBRUksYUFBQUE7NEJBQWFVLE1BQUFBOzRCQUFNQyxRQUFBQTt3QkFBTzs7O29CQUEvRFYsUUFBUTtvQkFDZEksT0FBT0osTUFBTUssSUFBSSxDQUFDQyxLQUFLLEVBQUVDLElBQUksQ0FBQ1Y7Ozs7OztJQUNoQztBQUNGIn0=