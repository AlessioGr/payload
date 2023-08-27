"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "docAccessResolver", {
    enumerable: true,
    get: function() {
        return docAccessResolver;
    }
});
var _docAccess = require("../../operations/docAccess");
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
function docAccessResolver(global) {
    function resolver(_, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, context) {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    (0, _docAccess.docAccess)({
                        req: context.req,
                        globalConfig: global
                    })
                ];
            });
        });
        return _resolver.apply(this, arguments);
    }
    return resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL2RvY0FjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uUGVybWlzc2lvbiwgR2xvYmFsUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uL2F1dGgnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBkb2NBY2Nlc3MgfSBmcm9tICcuLi8uLi9vcGVyYXRpb25zL2RvY0FjY2Vzcyc7XG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyID0gKFxuICBfOiB1bmtub3duLFxuICBjb250ZXh0OiB7XG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlXG4gIH1cbikgPT4gUHJvbWlzZTxDb2xsZWN0aW9uUGVybWlzc2lvbiB8IEdsb2JhbFBlcm1pc3Npb24+XG5cbmV4cG9ydCBmdW5jdGlvbiBkb2NBY2Nlc3NSZXNvbHZlcihnbG9iYWw6IFNhbml0aXplZEdsb2JhbENvbmZpZyk6IFJlc29sdmVyIHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgY29udGV4dCkge1xuICAgIHJldHVybiBkb2NBY2Nlc3Moe1xuICAgICAgcmVxOiBjb250ZXh0LnJlcSxcbiAgICAgIGdsb2JhbENvbmZpZzogZ2xvYmFsLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVyO1xufVxuIl0sIm5hbWVzIjpbImRvY0FjY2Vzc1Jlc29sdmVyIiwiZ2xvYmFsIiwicmVzb2x2ZXIiLCJfIiwiY29udGV4dCIsImRvY0FjY2VzcyIsInJlcSIsImdsb2JhbENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFhZ0JBOzs7ZUFBQUE7Ozt5QkFWVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbkIsU0FBU0Esa0JBQWtCQyxNQUE2QjthQUM5Q0MsU0FBU0MsQ0FBQyxFQUFFQyxPQUFPO2VBQW5CRjs7YUFBQUE7UUFBQUEsWUFBZixvQkFBQSxTQUF3QkMsQ0FBQyxFQUFFQyxPQUFPOztnQkFDaEM7O29CQUFPQyxJQUFBQSxvQkFBUyxFQUFDO3dCQUNmQyxLQUFLRixRQUFRRSxHQUFHO3dCQUNoQkMsY0FBY047b0JBQ2hCOzs7UUFDRjtlQUxlQzs7SUFPZixPQUFPQTtBQUNUIn0=