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
export var deleteCollectionVersions = function() {
    var _ref = _async_to_generator(function(param) {
        var payload, slug, id, req, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = param.payload, slug = param.slug, id = param.id, req = param.req;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        payload.db.deleteVersions({
                            collection: slug,
                            where: {
                                parent: {
                                    equals: id
                                }
                            },
                            req: req
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    err = _state.sent();
                    payload.logger.error("There was an error removing versions for the deleted ".concat(slug, " document with ID ").concat(id, "."));
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function deleteCollectionVersions(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9kZWxldGVDb2xsZWN0aW9uVmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi9leHByZXNzL3R5cGVzJztcblxudHlwZSBBcmdzID0ge1xuICBwYXlsb2FkOiBQYXlsb2FkXG4gIHNsdWc6IHN0cmluZ1xuICBpZD86IHN0cmluZyB8IG51bWJlclxuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29sbGVjdGlvblZlcnNpb25zID0gYXN5bmMgKHtcbiAgcGF5bG9hZCxcbiAgc2x1ZyxcbiAgaWQsXG4gIHJlcSxcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBwYXlsb2FkLmRiLmRlbGV0ZVZlcnNpb25zKHtcbiAgICAgIGNvbGxlY3Rpb246IHNsdWcsXG4gICAgICB3aGVyZToge1xuICAgICAgICBwYXJlbnQ6IHtcbiAgICAgICAgICBlcXVhbHM6IGlkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJlcSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcGF5bG9hZC5sb2dnZXIuZXJyb3IoYFRoZXJlIHdhcyBhbiBlcnJvciByZW1vdmluZyB2ZXJzaW9ucyBmb3IgdGhlIGRlbGV0ZWQgJHtzbHVnfSBkb2N1bWVudCB3aXRoIElEICR7aWR9LmApO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImRlbGV0ZUNvbGxlY3Rpb25WZXJzaW9ucyIsInBheWxvYWQiLCJzbHVnIiwiaWQiLCJyZXEiLCJlcnIiLCJkYiIsImRlbGV0ZVZlcnNpb25zIiwiY29sbGVjdGlvbiIsIndoZXJlIiwicGFyZW50IiwiZXF1YWxzIiwibG9nZ2VyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLElBQU1BO2VBQTJCLG9CQUFBO1lBQ3RDQyxTQUNBQyxNQUNBQyxJQUNBQyxLQVlTQzs7OztvQkFmVEosZ0JBQUFBLFNBQ0FDLGFBQUFBLE1BQ0FDLFdBQUFBLElBQ0FDLFlBQUFBOzs7Ozs7Ozs7b0JBR0U7O3dCQUFNSCxRQUFRSyxFQUFFLENBQUNDLGNBQWMsQ0FBQzs0QkFDOUJDLFlBQVlOOzRCQUNaTyxPQUFPO2dDQUNMQyxRQUFRO29DQUNOQyxRQUFRUjtnQ0FDVjs0QkFDRjs0QkFDQUMsS0FBQUE7d0JBQ0Y7OztvQkFSQTs7Ozs7O29CQVNPQztvQkFDUEosUUFBUVcsTUFBTSxDQUFDQyxLQUFLLENBQUMsQUFBQyx3REFBZ0ZWLE9BQXpCRCxNQUFLLHNCQUF1QixPQUFIQyxJQUFHOzs7Ozs7Ozs7OztJQUU3RztvQkFuQmFIOzs7SUFtQlgifQ==