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
export default function sendEmail(message) {
    return _sendEmail.apply(this, arguments);
}
function _sendEmail() {
    _sendEmail = _async_to_generator(function(message) {
        var result, email, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        this.email
                    ];
                case 1:
                    email = _state.sent();
                    return [
                        4,
                        email.transport.sendMail(message)
                    ];
                case 2:
                    result = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    err = _state.sent();
                    this.logger.error(err, "Failed to send mail to ".concat(message.to, ", subject: ").concat(message.subject));
                    return [
                        2,
                        err
                    ];
                case 4:
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return _sendEmail.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbWFpbC9zZW5kRW1haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VuZE1haWxPcHRpb25zIH0gZnJvbSAnbm9kZW1haWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlbmRFbWFpbChtZXNzYWdlOiBTZW5kTWFpbE9wdGlvbnMpOiBQcm9taXNlPHVua25vd24+IHtcbiAgbGV0IHJlc3VsdDtcblxuICB0cnkge1xuICAgIGNvbnN0IGVtYWlsID0gYXdhaXQgdGhpcy5lbWFpbDtcbiAgICByZXN1bHQgPSBhd2FpdCBlbWFpbC50cmFuc3BvcnQuc2VuZE1haWwobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRoaXMubG9nZ2VyLmVycm9yKFxuICAgICAgZXJyLFxuICAgICAgYEZhaWxlZCB0byBzZW5kIG1haWwgdG8gJHttZXNzYWdlLnRvfSwgc3ViamVjdDogJHttZXNzYWdlLnN1YmplY3R9YCxcbiAgICApO1xuICAgIHJldHVybiBlcnI7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sIm5hbWVzIjpbInNlbmRFbWFpbCIsIm1lc3NhZ2UiLCJyZXN1bHQiLCJlbWFpbCIsImVyciIsInRyYW5zcG9ydCIsInNlbmRNYWlsIiwibG9nZ2VyIiwiZXJyb3IiLCJ0byIsInN1YmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSx3QkFBOEJBLFVBQVVDLE9BQXdCO1dBQWxDRDs7U0FBQUE7SUFBQUEsYUFBZixvQkFBQSxTQUF5QkMsT0FBd0I7WUFDMURDLFFBR0lDLE9BRUNDOzs7Ozs7Ozs7O29CQUZPOzt3QkFBTSxJQUFJLENBQUNELEtBQUs7OztvQkFBeEJBLFFBQVE7b0JBQ0w7O3dCQUFNQSxNQUFNRSxTQUFTLENBQUNDLFFBQVEsQ0FBQ0w7OztvQkFBeENDLFNBQVM7Ozs7OztvQkFDRkU7b0JBQ1AsSUFBSSxDQUFDRyxNQUFNLENBQUNDLEtBQUssQ0FDZkosS0FDQSxBQUFDLDBCQUFpREgsT0FBeEJBLFFBQVFRLEVBQUUsRUFBQyxlQUE2QixPQUFoQlIsUUFBUVMsT0FBTztvQkFFbkU7O3dCQUFPTjs7O29CQUdUOzt3QkFBT0Y7Ozs7SUFDVDtXQWY4QkYifQ==