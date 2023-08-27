"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "deleteMany", {
    enumerable: true,
    get: function() {
        return deleteMany;
    }
});
var _withSession = require("./withSession");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
var deleteMany = function() {
    var _deleteMany = _async_to_generator(function(param) {
        var collection, where, _param_req, req, Model, options, query;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, where = param.where, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.collections[collection];
                    options = _object_spread_props(_object_spread({}, (0, _withSession.withSession)(this, req.transactionID)), {
                        lean: true
                    });
                    return [
                        4,
                        Model.buildQuery({
                            payload: this.payload,
                            where: where
                        })
                    ];
                case 1:
                    query = _state.sent();
                    return [
                        4,
                        Model.deleteMany(query, options)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    function deleteMany(_) {
        return _deleteMany.apply(this, arguments);
    }
    return deleteMany;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGVNYW55LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbGV0ZU1hbnkgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IE1vbmdvb3NlQWRhcHRlciB9IGZyb20gJy4nO1xuaW1wb3J0IHsgd2l0aFNlc3Npb24gfSBmcm9tICcuL3dpdGhTZXNzaW9uJztcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1hbnk6IERlbGV0ZU1hbnkgPSBhc3luYyBmdW5jdGlvbiBkZWxldGVNYW55KHRoaXM6IE1vbmdvb3NlQWRhcHRlcixcbiAgeyBjb2xsZWN0aW9uLCB3aGVyZSwgcmVxID0ge30gYXMgUGF5bG9hZFJlcXVlc3QgfSkge1xuICBjb25zdCBNb2RlbCA9IHRoaXMuY29sbGVjdGlvbnNbY29sbGVjdGlvbl07XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ud2l0aFNlc3Npb24odGhpcywgcmVxLnRyYW5zYWN0aW9uSUQpLFxuICAgIGxlYW46IHRydWUsXG4gIH07XG5cbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBNb2RlbC5idWlsZFF1ZXJ5KHtcbiAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQsXG4gICAgd2hlcmUsXG4gIH0pO1xuXG4gIGF3YWl0IE1vZGVsLmRlbGV0ZU1hbnkocXVlcnksIG9wdGlvbnMpO1xufTtcbiJdLCJuYW1lcyI6WyJkZWxldGVNYW55IiwiY29sbGVjdGlvbiIsIndoZXJlIiwicmVxIiwiTW9kZWwiLCJvcHRpb25zIiwicXVlcnkiLCJjb2xsZWN0aW9ucyIsIndpdGhTZXNzaW9uIiwidHJhbnNhY3Rpb25JRCIsImxlYW4iLCJidWlsZFF1ZXJ5IiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFLYUE7OztlQUFBQTs7OzJCQUZlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBTUE7UUFBd0NBLGNBQWYsb0JBQUEsU0FDcEMsS0FBaUQ7WUFBL0NDLFlBQVlDLG1CQUFPQyxLQUNmQyxPQUNBQyxTQUtBQzs7OztvQkFQSkwsYUFBRixNQUFFQSxZQUFZQyxRQUFkLE1BQWNBLG9CQUFkLE1BQXFCQyxLQUFBQSw4QkFBTSxDQUFDO29CQUN0QkMsUUFBUSxJQUFJLENBQUNHLFdBQVcsQ0FBQ04sV0FBVztvQkFDcENJLFVBQVUsd0NBQ1hHLElBQUFBLHdCQUFXLEVBQUMsSUFBSSxFQUFFTCxJQUFJTSxhQUFhO3dCQUN0Q0MsTUFBTTs7b0JBR007O3dCQUFNTixNQUFNTyxVQUFVLENBQUM7NEJBQ25DQyxTQUFTLElBQUksQ0FBQ0EsT0FBTzs0QkFDckJWLE9BQUFBO3dCQUNGOzs7b0JBSE1JLFFBQVE7b0JBS2Q7O3dCQUFNRixNQUFNSixVQUFVLENBQUNNLE9BQU9EOzs7b0JBQTlCOzs7Ozs7SUFDRjthQWRxREwsV0FDbkQsQ0FBaUQ7ZUFERUE7O1dBQUFBIn0=