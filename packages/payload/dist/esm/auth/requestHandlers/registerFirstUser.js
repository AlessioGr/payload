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
import registerFirstUser from "../operations/registerFirstUser";
export default function registerFirstUserHandler(req, res, next) {
    return _registerFirstUserHandler.apply(this, arguments);
}
function _registerFirstUserHandler() {
    _registerFirstUserHandler = _async_to_generator(function(req, res, next) {
        var firstUser, error;
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
                        registerFirstUser({
                            req: req,
                            res: res,
                            collection: req.collection,
                            data: req.body
                        })
                    ];
                case 1:
                    firstUser = _state.sent();
                    return [
                        2,
                        res.status(201).json(firstUser)
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
    return _registerFirstUserHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9yZWdpc3RlckZpcnN0VXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHJlZ2lzdGVyRmlyc3RVc2VyIGZyb20gJy4uL29wZXJhdGlvbnMvcmVnaXN0ZXJGaXJzdFVzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZWdpc3RlckZpcnN0VXNlckhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaXJzdFVzZXIgPSBhd2FpdCByZWdpc3RlckZpcnN0VXNlcih7XG4gICAgICByZXEsXG4gICAgICByZXMsXG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICAgIGRhdGE6IHJlcS5ib2R5LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKGZpcnN0VXNlcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsicmVnaXN0ZXJGaXJzdFVzZXIiLCJyZWdpc3RlckZpcnN0VXNlckhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZmlyc3RVc2VyIiwiZXJyb3IiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsT0FBT0EsdUJBQXVCLGtDQUFrQztBQUVoRSx3QkFBOEJDLHlCQUF5QkMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtXQUEvRUg7O1NBQUFBO0lBQUFBLDRCQUFmLG9CQUFBLFNBQXdDQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1lBRW5HQyxXQVFDQzs7Ozs7Ozs7OztvQkFSVzs7d0JBQU1OLGtCQUFrQjs0QkFDeENFLEtBQUFBOzRCQUNBQyxLQUFBQTs0QkFDQUksWUFBWUwsSUFBSUssVUFBVTs0QkFDMUJDLE1BQU1OLElBQUlPLElBQUk7d0JBQ2hCOzs7b0JBTE1KLFlBQVk7b0JBT2xCOzt3QkFBT0YsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ047OztvQkFDckJDO29CQUNQOzt3QkFBT0YsS0FBS0U7Ozs7Ozs7O0lBRWhCO1dBYjhCTCJ9