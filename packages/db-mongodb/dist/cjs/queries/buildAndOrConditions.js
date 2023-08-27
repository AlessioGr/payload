"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildAndOrConditions", {
    enumerable: true,
    get: function() {
        return buildAndOrConditions;
    }
});
var _parseParams = require("./parseParams");
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
function buildAndOrConditions(_) {
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
                        (0, _parseParams.parseParams)({
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9xdWVyaWVzL2J1aWxkQW5kT3JDb25kaXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdoZXJlLCBGaWVsZCB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJ3BheWxvYWQnO1xuaW1wb3J0IHsgcGFyc2VQYXJhbXMgfSBmcm9tICcuL3BhcnNlUGFyYW1zJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkQW5kT3JDb25kaXRpb25zKHtcbiAgd2hlcmUsXG4gIGNvbGxlY3Rpb25TbHVnLFxuICBnbG9iYWxTbHVnLFxuICBwYXlsb2FkLFxuICBsb2NhbGUsXG4gIGZpZWxkcyxcbn06IHtcbiAgd2hlcmU6IFdoZXJlW10sXG4gIGNvbGxlY3Rpb25TbHVnPzogc3RyaW5nLFxuICBnbG9iYWxTbHVnPzogc3RyaW5nLFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGZpZWxkczogRmllbGRbXSxcbn0pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+W10+IHtcbiAgY29uc3QgY29tcGxldGVkQ29uZGl0aW9ucyA9IFtdO1xuICAvLyBMb29wIG92ZXIgYWxsIEFORCAvIE9SIG9wZXJhdGlvbnMgYW5kIGFkZCB0aGVtIHRvIHRoZSBBTkQgLyBPUiBxdWVyeSBwYXJhbVxuICAvLyBPcGVyYXRpb25zIHNob3VsZCBjb21lIHRocm91Z2ggYXMgYW4gYXJyYXlcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAoY29uc3QgY29uZGl0aW9uIG9mIHdoZXJlKSB7XG4gICAgLy8gSWYgdGhlIG9wZXJhdGlvbiBpcyBwcm9wZXJseSBmb3JtYXR0ZWQgYXMgYW4gb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGFyc2VQYXJhbXMoe1xuICAgICAgICB3aGVyZTogY29uZGl0aW9uLFxuICAgICAgICBjb2xsZWN0aW9uU2x1ZyxcbiAgICAgICAgZ2xvYmFsU2x1ZyxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBmaWVsZHMsXG4gICAgICB9KTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhyZXN1bHQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29tcGxldGVkQ29uZGl0aW9ucy5wdXNoKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb21wbGV0ZWRDb25kaXRpb25zO1xufVxuIl0sIm5hbWVzIjpbImJ1aWxkQW5kT3JDb25kaXRpb25zIiwid2hlcmUiLCJjb2xsZWN0aW9uU2x1ZyIsImdsb2JhbFNsdWciLCJwYXlsb2FkIiwibG9jYWxlIiwiZmllbGRzIiwiY29tcGxldGVkQ29uZGl0aW9ucyIsImNvbmRpdGlvbiIsInJlc3VsdCIsInBhcnNlUGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7K0JBSXNCQTs7O2VBQUFBOzs7MkJBRk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRU5BLHFCQUFxQixDQWMxQztXQWRxQkE7O1NBQUFBO0lBQUFBLHdCQUFmLG9CQUFBLFNBQW9DLEtBYzFDO1lBYkNDLE9BQ0FDLGdCQUNBQyxZQUNBQyxTQUNBQyxRQUNBQyxRQVNNQyxxQkFJRCwyQkFBQSxtQkFBQSxnQkFBQSxXQUFBLE9BQU1DLFdBSURDOzs7O29CQXRCVlIsUUFEeUMsTUFDekNBLE9BQ0FDLGlCQUZ5QyxNQUV6Q0EsZ0JBQ0FDLGFBSHlDLE1BR3pDQSxZQUNBQyxVQUp5QyxNQUl6Q0EsU0FDQUMsU0FMeUMsTUFLekNBLFFBQ0FDLFNBTnlDLE1BTXpDQTtvQkFTTUM7b0JBSUQsa0NBQUEsMkJBQUE7Ozs7Ozs7OztvQkFBQSxZQUFtQk47OzsyQkFBbkIsNkJBQUEsUUFBQTs7OztvQkFBTU8sWUFBTjt5QkFFQyxDQUFBLE9BQU9BLGNBQWMsUUFBTyxHQUE1Qjs7OztvQkFFYTs7d0JBQU1FLElBQUFBLHdCQUFXLEVBQUM7NEJBQy9CVCxPQUFPTzs0QkFDUE4sZ0JBQUFBOzRCQUNBQyxZQUFBQTs0QkFDQUMsU0FBQUE7NEJBQ0FDLFFBQUFBOzRCQUNBQyxRQUFBQTt3QkFDRjs7O29CQVBNRyxTQUFTO29CQVFmLElBQUlFLE9BQU9DLElBQUksQ0FBQ0gsUUFBUUksTUFBTSxHQUFHLEdBQUc7d0JBQ2xDTixvQkFBb0JPLElBQUksQ0FBQ0w7b0JBQzNCOzs7b0JBZEM7Ozs7Ozs7Ozs7OztvQkFBQTtvQkFBQTs7Ozs7Ozs2QkFBQSw2QkFBQTs0QkFBQTs7OzRCQUFBO2tDQUFBOzs7Ozs7O29CQWlCTDs7d0JBQU9GOzs7O0lBQ1Q7V0FyQ3NCUCJ9