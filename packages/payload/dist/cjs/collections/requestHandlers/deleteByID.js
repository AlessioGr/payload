"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return deleteByIDHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _errors = require("../../errors");
var _deleteByID = /*#__PURE__*/ _interop_require_default(require("../operations/deleteByID"));
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
function deleteByIDHandler(req, res, next) {
    return _deleteByIDHandler.apply(this, arguments);
}
function _deleteByIDHandler() {
    _deleteByIDHandler = _async_to_generator(function(req, res, next) {
        var doc, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        (0, _deleteByID.default)({
                            req: req,
                            collection: req.collection,
                            id: req.params.id,
                            depth: parseInt(String(req.query.depth), 10)
                        })
                    ];
                case 1:
                    doc = _state.sent();
                    if (!doc) {
                        res.status(_httpstatus.default.NOT_FOUND).json(new _errors.NotFound(req.t));
                    }
                    res.status(_httpstatus.default.OK).send(doc);
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
    return _deleteByIDHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZGVsZXRlQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgTm90Rm91bmQgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgZGVsZXRlQnlJRCBmcm9tICcuLi9vcGVyYXRpb25zL2RlbGV0ZUJ5SUQnO1xuXG5leHBvcnQgdHlwZSBEZWxldGVSZXN1bHQgPSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZG9jOiBEb2N1bWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQnlJREhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxSZXNwb25zZTxEZWxldGVSZXN1bHQ+IHwgdm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGRlbGV0ZUJ5SUQoe1xuICAgICAgcmVxLFxuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICBpZDogcmVxLnBhcmFtcy5pZCxcbiAgICAgIGRlcHRoOiBwYXJzZUludChTdHJpbmcocmVxLnF1ZXJ5LmRlcHRoKSwgMTApLFxuICAgIH0pO1xuXG4gICAgaWYgKCFkb2MpIHtcbiAgICAgIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5OT1RfRk9VTkQpXG4gICAgICAgIC5qc29uKG5ldyBOb3RGb3VuZChyZXEudCkpO1xuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSylcbiAgICAgIC5zZW5kKGRvYyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbmV4dChlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkZWxldGVCeUlESGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJkb2MiLCJlcnJvciIsImRlbGV0ZUJ5SUQiLCJjb2xsZWN0aW9uIiwiaWQiLCJwYXJhbXMiLCJkZXB0aCIsInBhcnNlSW50IiwiU3RyaW5nIiwicXVlcnkiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiTk9UX0ZPVU5EIiwianNvbiIsIk5vdEZvdW5kIiwidCIsIk9LIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFZQTs7O2VBQThCQTs7O2lFQVhQO3NCQUVFO2lFQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBT09BLGtCQUFrQkMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtXQUF4RUg7O1NBQUFBO0lBQUFBLHFCQUFmLG9CQUFBLFNBQWlDQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1lBRTVGQyxLQWNDQzs7Ozs7Ozs7OztvQkFkSzs7d0JBQU1DLElBQUFBLG1CQUFVLEVBQUM7NEJBQzNCTCxLQUFBQTs0QkFDQU0sWUFBWU4sSUFBSU0sVUFBVTs0QkFDMUJDLElBQUlQLElBQUlRLE1BQU0sQ0FBQ0QsRUFBRTs0QkFDakJFLE9BQU9DLFNBQVNDLE9BQU9YLElBQUlZLEtBQUssQ0FBQ0gsS0FBSyxHQUFHO3dCQUMzQzs7O29CQUxNTixNQUFNO29CQU9aLElBQUksQ0FBQ0EsS0FBSzt3QkFDUkYsSUFBSVksTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxTQUFTLEVBQzVCQyxJQUFJLENBQUMsSUFBSUMsZ0JBQVEsQ0FBQ2pCLElBQUlrQixDQUFDO29CQUM1QjtvQkFFQWpCLElBQUlZLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0ssRUFBRSxFQUNyQkMsSUFBSSxDQUFDakI7Ozs7OztvQkFDREM7b0JBQ1BGLEtBQUtFOzs7Ozs7Ozs7OztJQUVUO1dBbkI4QkwifQ==