"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
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
function findOne(args) {
    return _findOne.apply(this, arguments);
}
function _findOne() {
    _findOne = _async_to_generator(function(args) {
        var payload, user, key, where, docs;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = args.req.payload, user = args.user, key = args.key;
                    where = {
                        and: [
                            {
                                key: {
                                    equals: key
                                }
                            },
                            {
                                "user.value": {
                                    equals: user.id
                                }
                            },
                            {
                                "user.relationTo": {
                                    equals: user.collection
                                }
                            }
                        ]
                    };
                    return [
                        4,
                        payload.find({
                            collection: "payload-preferences",
                            where: where,
                            depth: 0,
                            pagination: false,
                            user: user
                        })
                    ];
                case 1:
                    docs = _state.sent().docs;
                    if (docs.length === 0) return [
                        2,
                        null
                    ];
                    return [
                        2,
                        docs[0]
                    ];
            }
        });
    });
    return _findOne.apply(this, arguments);
}
var _default = findOne;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9vcGVyYXRpb25zL2ZpbmRPbmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgUHJlZmVyZW5jZVJlcXVlc3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBXaGVyZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuYXN5bmMgZnVuY3Rpb24gZmluZE9uZShhcmdzOiBQcmVmZXJlbmNlUmVxdWVzdCk6IFByb21pc2U8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bJ19wcmVmZXJlbmNlJ10+IHtcbiAgY29uc3Qge1xuICAgIHJlcToge1xuICAgICAgcGF5bG9hZCxcbiAgICB9LFxuICAgIHVzZXIsXG4gICAga2V5LFxuICB9ID0gYXJncztcblxuICBjb25zdCB3aGVyZTogV2hlcmUgPSB7XG4gICAgYW5kOiBbXG4gICAgICB7IGtleTogeyBlcXVhbHM6IGtleSB9IH0sXG4gICAgICB7ICd1c2VyLnZhbHVlJzogeyBlcXVhbHM6IHVzZXIuaWQgfSB9LFxuICAgICAgeyAndXNlci5yZWxhdGlvblRvJzogeyBlcXVhbHM6IHVzZXIuY29sbGVjdGlvbiB9IH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCB7IGRvY3MgfSA9IGF3YWl0IHBheWxvYWQuZmluZCh7XG4gICAgY29sbGVjdGlvbjogJ3BheWxvYWQtcHJlZmVyZW5jZXMnLFxuICAgIHdoZXJlLFxuICAgIGRlcHRoOiAwLFxuICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgIHVzZXIsXG4gIH0pO1xuXG4gIGlmIChkb2NzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIGRvY3NbMF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPbmU7XG4iXSwibmFtZXMiOlsiZmluZE9uZSIsImFyZ3MiLCJwYXlsb2FkIiwidXNlciIsImtleSIsIndoZXJlIiwiZG9jcyIsInJlcSIsImFuZCIsImVxdWFscyIsImlkIiwiY29sbGVjdGlvbiIsImZpbmQiLCJkZXB0aCIsInBhZ2luYXRpb24iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7K0JBa0NBOzs7ZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTlCZUEsUUFBUUMsSUFBdUI7V0FBL0JEOztTQUFBQTtJQUFBQSxXQUFmLG9CQUFBLFNBQXVCQyxJQUF1QjtZQUd4Q0MsU0FFRkMsTUFDQUMsS0FHSUMsT0FRRUM7Ozs7b0JBZEpKLFVBSUFELEtBTEZNLElBQ0VMLFNBRUZDLE9BRUVGLEtBRkZFLE1BQ0FDLE1BQ0VILEtBREZHO29CQUdJQyxRQUFlO3dCQUNuQkcsR0FBRzs0QkFDRDtnQ0FBRUosS0FBSztvQ0FBRUssUUFBUUw7Z0NBQUk7NEJBQUU7NEJBQ3ZCO2dDQUFFLGNBQWM7b0NBQUVLLFFBQVFOLEtBQUtPLEVBQUU7Z0NBQUM7NEJBQUU7NEJBQ3BDO2dDQUFFLG1CQUFtQjtvQ0FBRUQsUUFBUU4sS0FBS1EsVUFBVTtnQ0FBQzs0QkFBRTs7b0JBRXJEO29CQUVpQjs7d0JBQU1ULFFBQVFVLElBQUksQ0FBQzs0QkFDbENELFlBQVk7NEJBQ1pOLE9BQUFBOzRCQUNBUSxPQUFPOzRCQUNQQyxZQUFZOzRCQUNaWCxNQUFBQTt3QkFDRjs7O29CQU5RRyxPQUFTLGNBQVRBO29CQVFSLElBQUlBLEtBQUtTLE1BQU0sS0FBSyxHQUFHOzt3QkFBTzs7b0JBRTlCOzt3QkFBT1QsSUFBSSxDQUFDLEVBQUU7Ozs7SUFDaEI7V0E1QmVOOztJQThCZixXQUFlQSJ9