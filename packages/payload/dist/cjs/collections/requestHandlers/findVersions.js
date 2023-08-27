"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionsHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _isNumber = require("../../utilities/isNumber");
var _findVersions = /*#__PURE__*/ _interop_require_default(require("../operations/findVersions"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
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
function findVersionsHandler(req, res, next) {
    return _findVersionsHandler.apply(this, arguments);
}
function _findVersionsHandler() {
    _findVersionsHandler = _async_to_generator(function(req, res, next) {
        var page, parsedPage, options, result, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    if (typeof req.query.page === "string") {
                        parsedPage = parseInt(req.query.page, 10);
                        if (!Number.isNaN(parsedPage)) {
                            page = parsedPage;
                        }
                    }
                    options = {
                        req: req,
                        collection: req.collection,
                        where: req.query.where,
                        page: page,
                        limit: (0, _isNumber.isNumber)(req.query.limit) ? Number(req.query.limit) : undefined,
                        sort: req.query.sort,
                        depth: (0, _isNumber.isNumber)(req.query.depth) ? Number(req.query.depth) : undefined,
                        payload: req.payload
                    };
                    return [
                        4,
                        (0, _findVersions.default)(options)
                    ];
                case 1:
                    result = _state.sent();
                    return [
                        2,
                        res.status(_httpstatus.default.OK).json(result)
                    ];
                case 2:
                    error = _state.sent();
                    return [
                        2,
                        next(error)
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _findVersionsHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IFR5cGVXaXRoSUQgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaXNOdW1iZXInO1xuaW1wb3J0IGZpbmRWZXJzaW9ucyBmcm9tICcuLi9vcGVyYXRpb25zL2ZpbmRWZXJzaW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbmRWZXJzaW9uc0hhbmRsZXI8VCBleHRlbmRzIFR5cGVXaXRoSUQgPSBhbnk+KHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IFByb21pc2U8UmVzcG9uc2U8UGFnaW5hdGVkRG9jczxUPj4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgbGV0IHBhZ2U7XG5cbiAgICBpZiAodHlwZW9mIHJlcS5xdWVyeS5wYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcGFyc2VkUGFnZSA9IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlLCAxMCk7XG5cbiAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZFBhZ2UpKSB7XG4gICAgICAgIHBhZ2UgPSBwYXJzZWRQYWdlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByZXEsXG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICAgIHdoZXJlOiByZXEucXVlcnkud2hlcmUgYXMgV2hlcmUsIC8vIFRoaXMgaXMgYSBsaXR0bGUgc2hhZHksXG4gICAgICBwYWdlLFxuICAgICAgbGltaXQ6IGlzTnVtYmVyKHJlcS5xdWVyeS5saW1pdCkgPyBOdW1iZXIocmVxLnF1ZXJ5LmxpbWl0KSA6IHVuZGVmaW5lZCxcbiAgICAgIHNvcnQ6IHJlcS5xdWVyeS5zb3J0IGFzIHN0cmluZyxcbiAgICAgIGRlcHRoOiBpc051bWJlcihyZXEucXVlcnkuZGVwdGgpID8gTnVtYmVyKHJlcS5xdWVyeS5kZXB0aCkgOiB1bmRlZmluZWQsXG4gICAgICBwYXlsb2FkOiByZXEucGF5bG9hZCxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmluZFZlcnNpb25zKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihyZXN1bHQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9uc0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwicGFnZSIsInBhcnNlZFBhZ2UiLCJvcHRpb25zIiwicmVzdWx0IiwiZXJyb3IiLCJxdWVyeSIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNOYU4iLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJsaW1pdCIsImlzTnVtYmVyIiwidW5kZWZpbmVkIiwic29ydCIsImRlcHRoIiwicGF5bG9hZCIsImZpbmRWZXJzaW9ucyIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJPSyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBU0E7OztlQUE4QkE7OztpRUFSUDt3QkFLRTttRUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVLQSxvQkFBZ0RDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7V0FBdEdIOztTQUFBQTtJQUFBQSx1QkFBZixvQkFBQSxTQUErREMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtZQUU1SEMsTUFHSUMsWUFPRkMsU0FXQUMsUUFHQ0M7Ozs7Ozs7Ozs7b0JBdEJQLElBQUksT0FBT1AsSUFBSVEsS0FBSyxDQUFDTCxJQUFJLEtBQUssVUFBVTt3QkFDaENDLGFBQWFLLFNBQVNULElBQUlRLEtBQUssQ0FBQ0wsSUFBSSxFQUFFO3dCQUU1QyxJQUFJLENBQUNPLE9BQU9DLEtBQUssQ0FBQ1AsYUFBYTs0QkFDN0JELE9BQU9DO3dCQUNUO29CQUNGO29CQUVNQyxVQUFVO3dCQUNkTCxLQUFBQTt3QkFDQVksWUFBWVosSUFBSVksVUFBVTt3QkFDMUJDLE9BQU9iLElBQUlRLEtBQUssQ0FBQ0ssS0FBSzt3QkFDdEJWLE1BQUFBO3dCQUNBVyxPQUFPQyxJQUFBQSxrQkFBUSxFQUFDZixJQUFJUSxLQUFLLENBQUNNLEtBQUssSUFBSUosT0FBT1YsSUFBSVEsS0FBSyxDQUFDTSxLQUFLLElBQUlFO3dCQUM3REMsTUFBTWpCLElBQUlRLEtBQUssQ0FBQ1MsSUFBSTt3QkFDcEJDLE9BQU9ILElBQUFBLGtCQUFRLEVBQUNmLElBQUlRLEtBQUssQ0FBQ1UsS0FBSyxJQUFJUixPQUFPVixJQUFJUSxLQUFLLENBQUNVLEtBQUssSUFBSUY7d0JBQzdERyxTQUFTbkIsSUFBSW1CLE9BQU87b0JBQ3RCO29CQUVlOzt3QkFBTUMsSUFBQUEscUJBQVksRUFBQ2Y7OztvQkFBNUJDLFNBQVM7b0JBRWY7O3dCQUFPTCxJQUFJb0IsTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQ2xCOzs7b0JBQy9CQztvQkFDUDs7d0JBQU9MLEtBQUtLOzs7Ozs7OztJQUVoQjtXQTdCOEJSIn0=