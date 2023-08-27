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
import { parseParams } from "./parseParams";
export function buildAndOrConditions(_) {
    return _buildAndOrConditions.apply(this, arguments);
}
function _buildAndOrConditions() {
    _buildAndOrConditions = _async_to_generator(function(param) {
        var where, collectionSlug, globalSlug, payload, locale, fields, completedConditions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, condition, result, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    where = param.where, collectionSlug = param.collectionSlug, globalSlug = param.globalSlug, payload = param.payload, locale = param.locale, fields = param.fields;
                    completedConditions = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = where[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    condition = _step.value;
                    if (!(typeof condition === "object")) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        parseParams({
                            where: condition,
                            collectionSlug: collectionSlug,
                            globalSlug: globalSlug,
                            payload: payload,
                            locale: locale,
                            fields: fields
                        })
                    ];
                case 3:
                    result = _state.sent();
                    if (Object.keys(result).length > 0) {
                        completedConditions.push(result);
                    }
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2,
                        completedConditions
                    ];
            }
        });
    });
    return _buildAndOrConditions.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9xdWVyaWVzL2J1aWxkQW5kT3JDb25kaXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdoZXJlLCBGaWVsZCB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJ3BheWxvYWQnO1xuaW1wb3J0IHsgcGFyc2VQYXJhbXMgfSBmcm9tICcuL3BhcnNlUGFyYW1zJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkQW5kT3JDb25kaXRpb25zKHtcbiAgd2hlcmUsXG4gIGNvbGxlY3Rpb25TbHVnLFxuICBnbG9iYWxTbHVnLFxuICBwYXlsb2FkLFxuICBsb2NhbGUsXG4gIGZpZWxkcyxcbn06IHtcbiAgd2hlcmU6IFdoZXJlW10sXG4gIGNvbGxlY3Rpb25TbHVnPzogc3RyaW5nLFxuICBnbG9iYWxTbHVnPzogc3RyaW5nLFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGZpZWxkczogRmllbGRbXSxcbn0pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgY29uc3QgY29tcGxldGVkQ29uZGl0aW9ucyA9IFtdO1xuICAvLyBMb29wIG92ZXIgYWxsIEFORCAvIE9SIG9wZXJhdGlvbnMgYW5kIGFkZCB0aGVtIHRvIHRoZSBBTkQgLyBPUiBxdWVyeSBwYXJhbVxuICAvLyBPcGVyYXRpb25zIHNob3VsZCBjb21lIHRocm91Z2ggYXMgYW4gYXJyYXlcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAoY29uc3QgY29uZGl0aW9uIG9mIHdoZXJlKSB7XG4gICAgLy8gSWYgdGhlIG9wZXJhdGlvbiBpcyBwcm9wZXJseSBmb3JtYXR0ZWQgYXMgYW4gb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGFyc2VQYXJhbXMoe1xuICAgICAgICB3aGVyZTogY29uZGl0aW9uLFxuICAgICAgICBjb2xsZWN0aW9uU2x1ZyxcbiAgICAgICAgZ2xvYmFsU2x1ZyxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBmaWVsZHMsXG4gICAgICB9KTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29tcGxldGVkQ29uZGl0aW9ucy5wdXNoKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb21wbGV0ZWRDb25kaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFyYW1zIiwiYnVpbGRBbmRPckNvbmRpdGlvbnMiLCJ3aGVyZSIsImNvbGxlY3Rpb25TbHVnIiwiZ2xvYmFsU2x1ZyIsInBheWxvYWQiLCJsb2NhbGUiLCJmaWVsZHMiLCJjb21wbGV0ZWRDb25kaXRpb25zIiwiY29uZGl0aW9uIiwicmVzdWx0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxXQUFXLFFBQVEsZ0JBQWdCO0FBRTVDLGdCQUFzQkMscUJBQXFCLENBYzFDO1dBZHFCQTs7U0FBQUE7SUFBQUEsd0JBQWYsb0JBQUEsU0FBb0MsS0FjMUM7WUFiQ0MsT0FDQUMsZ0JBQ0FDLFlBQ0FDLFNBQ0FDLFFBQ0FDLFFBU01DLHFCQUlELDJCQUFBLG1CQUFBLGdCQUFBLFdBQUEsT0FBTUMsV0FJREM7Ozs7b0JBdEJWUixRQUR5QyxNQUN6Q0EsT0FDQUMsaUJBRnlDLE1BRXpDQSxnQkFDQUMsYUFIeUMsTUFHekNBLFlBQ0FDLFVBSnlDLE1BSXpDQSxTQUNBQyxTQUx5QyxNQUt6Q0EsUUFDQUMsU0FOeUMsTUFNekNBO29CQVNNQztvQkFJRCxrQ0FBQSwyQkFBQTs7Ozs7Ozs7O29CQUFBLFlBQW1CTjs7OzJCQUFuQiw2QkFBQSxRQUFBOzs7O29CQUFNTyxZQUFOO3lCQUVDLENBQUEsT0FBT0EsY0FBYyxRQUFPLEdBQTVCOzs7O29CQUVhOzt3QkFBTVQsWUFBWTs0QkFDL0JFLE9BQU9POzRCQUNQTixnQkFBQUE7NEJBQ0FDLFlBQUFBOzRCQUNBQyxTQUFBQTs0QkFDQUMsUUFBQUE7NEJBQ0FDLFFBQUFBO3dCQUNGOzs7b0JBUE1HLFNBQVM7b0JBUWYsSUFBSUMsT0FBT0MsSUFBSSxDQUFDRixRQUFRRyxNQUFNLEdBQUcsR0FBRzt3QkFDbENMLG9CQUFvQk0sSUFBSSxDQUFDSjtvQkFDM0I7OztvQkFkQzs7Ozs7Ozs7Ozs7O29CQUFBO29CQUFBOzs7Ozs7OzZCQUFBLDZCQUFBOzRCQUFBOzs7NEJBQUE7a0NBQUE7Ozs7Ozs7b0JBaUJMOzt3QkFBT0Y7Ozs7SUFDVDtXQXJDc0JQIn0=