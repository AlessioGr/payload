"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "updateOne", {
    enumerable: true,
    get: function() {
        return updateOne;
    }
});
var _errors = require("payload/errors");
var _utilities = require("payload/utilities");
var _sanitizeInternalFields = /*#__PURE__*/ _interop_require_default(require("./utilities/sanitizeInternalFields"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var updateOne = function() {
    var _updateOne = _async_to_generator(function(param) {
        var collection, data, whereArg, id, locale, _param_req, req, where, Model, options, query, result, error, _req, _req_t;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, data = param.data, whereArg = param.where, id = param.id, locale = param.locale, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    where = id ? {
                        id: {
                            equals: id
                        }
                    } : whereArg;
                    Model = this.collections[collection];
                    options = _object_spread_props(_object_spread({}, (0, _withSession.withSession)(this, req.transactionID)), {
                        new: true,
                        lean: true
                    });
                    return [
                        4,
                        Model.buildQuery({
                            payload: this.payload,
                            locale: locale,
                            where: where
                        })
                    ];
                case 1:
                    query = _state.sent();
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        Model.findOneAndUpdate(query, data, options)
                    ];
                case 3:
                    result = _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    error = _state.sent();
                    // Handle uniqueness error from MongoDB
                    throw error.code === 11000 && error.keyValue ? new _errors.ValidationError([
                        {
                            message: "Value must be unique",
                            field: Object.keys(error.keyValue)[0]
                        }
                    ], (_req_t = (_req = req) === null || _req === void 0 ? void 0 : _req.t) !== null && _req_t !== void 0 ? _req_t : (0, _utilities.i18nInit)(this.payload.config.i18n).t) : error;
                case 5:
                    result = JSON.parse(JSON.stringify(result));
                    result.id = result._id;
                    result = (0, _sanitizeInternalFields.default)(result);
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    function updateOne(_) {
        return _updateOne.apply(this, arguments);
    }
    return updateOne;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGRhdGVPbmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAncGF5bG9hZC9lcnJvcnMnO1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBVcGRhdGVPbmUgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCB7IGkxOG5Jbml0IH0gZnJvbSAncGF5bG9hZC91dGlsaXRpZXMnO1xuaW1wb3J0IHNhbml0aXplSW50ZXJuYWxGaWVsZHMgZnJvbSAnLi91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcyc7XG5pbXBvcnQgdHlwZSB7IE1vbmdvb3NlQWRhcHRlciB9IGZyb20gJy4nO1xuaW1wb3J0IHsgd2l0aFNlc3Npb24gfSBmcm9tICcuL3dpdGhTZXNzaW9uJztcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU9uZTogVXBkYXRlT25lID0gYXN5bmMgZnVuY3Rpb24gdXBkYXRlT25lKFxuICB0aGlzOiBNb25nb29zZUFkYXB0ZXIsXG4gIHsgY29sbGVjdGlvbiwgZGF0YSwgd2hlcmU6IHdoZXJlQXJnLCBpZCwgbG9jYWxlLCByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCB9LFxuKSB7XG4gIGNvbnN0IHdoZXJlID0gaWQgPyB7IGlkOiB7IGVxdWFsczogaWQgfSB9IDogd2hlcmVBcmc7XG4gIGNvbnN0IE1vZGVsID0gdGhpcy5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uXTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAuLi53aXRoU2Vzc2lvbih0aGlzLCByZXEudHJhbnNhY3Rpb25JRCksXG4gICAgbmV3OiB0cnVlLFxuICAgIGxlYW46IHRydWUsXG4gIH07XG5cbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBNb2RlbC5idWlsZFF1ZXJ5KHtcbiAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQsXG4gICAgbG9jYWxlLFxuICAgIHdoZXJlLFxuICB9KTtcblxuICBsZXQgcmVzdWx0O1xuICB0cnkge1xuICAgIHJlc3VsdCA9IGF3YWl0IE1vZGVsLmZpbmRPbmVBbmRVcGRhdGUocXVlcnksIGRhdGEsIG9wdGlvbnMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIEhhbmRsZSB1bmlxdWVuZXNzIGVycm9yIGZyb20gTW9uZ29EQlxuICAgIHRocm93IGVycm9yLmNvZGUgPT09IDExMDAwICYmIGVycm9yLmtleVZhbHVlXG4gICAgICA/IG5ldyBWYWxpZGF0aW9uRXJyb3IoXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnVmFsdWUgbXVzdCBiZSB1bmlxdWUnLFxuICAgICAgICAgICAgZmllbGQ6IE9iamVjdC5rZXlzKGVycm9yLmtleVZhbHVlKVswXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICByZXE/LnQgPz8gaTE4bkluaXQodGhpcy5wYXlsb2FkLmNvbmZpZy5pMThuKS50LFxuICAgICAgKVxuICAgICAgOiBlcnJvcjtcbiAgfVxuXG4gIHJlc3VsdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gIHJlc3VsdC5pZCA9IHJlc3VsdC5faWQ7XG4gIHJlc3VsdCA9IHNhbml0aXplSW50ZXJuYWxGaWVsZHMocmVzdWx0KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiJdLCJuYW1lcyI6WyJ1cGRhdGVPbmUiLCJjb2xsZWN0aW9uIiwiZGF0YSIsIndoZXJlQXJnIiwiaWQiLCJsb2NhbGUiLCJyZXEiLCJ3aGVyZSIsIk1vZGVsIiwib3B0aW9ucyIsInF1ZXJ5IiwicmVzdWx0IiwiZXJyb3IiLCJlcXVhbHMiLCJjb2xsZWN0aW9ucyIsIndpdGhTZXNzaW9uIiwidHJhbnNhY3Rpb25JRCIsIm5ldyIsImxlYW4iLCJidWlsZFF1ZXJ5IiwicGF5bG9hZCIsImZpbmRPbmVBbmRVcGRhdGUiLCJjb2RlIiwia2V5VmFsdWUiLCJWYWxpZGF0aW9uRXJyb3IiLCJtZXNzYWdlIiwiZmllbGQiLCJPYmplY3QiLCJrZXlzIiwidCIsImkxOG5Jbml0IiwiY29uZmlnIiwiaTE4biIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIl9pZCIsInNhbml0aXplSW50ZXJuYWxGaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBUWFBOzs7ZUFBQUE7OztzQkFSbUI7eUJBR1A7NkVBQ1U7MkJBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQU1BO1FBQXNDQSxhQUFmLG9CQUFBLFNBRWxDLEtBQTZFO1lBQTNFQyxZQUFZQyxNQUFhQyxVQUFVQyxJQUFJQyxvQkFBUUMsS0FFM0NDLE9BQ0FDLE9BQ0FDLFNBTUFDLE9BTUZDLFFBR0tDLE9BVUhOLE1BQUFBOzs7O29CQTdCSkwsYUFBRixNQUFFQSxZQUFZQyxPQUFkLE1BQWNBLE1BQWFDLFdBQTNCLE1BQW9CSSxPQUFpQkgsS0FBckMsTUFBcUNBLElBQUlDLFNBQXpDLE1BQXlDQSxxQkFBekMsTUFBaURDLEtBQUFBLDhCQUFNLENBQUM7b0JBRWxEQyxRQUFRSCxLQUFLO3dCQUFFQSxJQUFJOzRCQUFFUyxRQUFRVDt3QkFBRztvQkFBRSxJQUFJRDtvQkFDdENLLFFBQVEsSUFBSSxDQUFDTSxXQUFXLENBQUNiLFdBQVc7b0JBQ3BDUSxVQUFVLHdDQUNYTSxJQUFBQSx3QkFBVyxFQUFDLElBQUksRUFBRVQsSUFBSVUsYUFBYTt3QkFDdENDLEtBQUs7d0JBQ0xDLE1BQU07O29CQUdNOzt3QkFBTVYsTUFBTVcsVUFBVSxDQUFDOzRCQUNuQ0MsU0FBUyxJQUFJLENBQUNBLE9BQU87NEJBQ3JCZixRQUFBQTs0QkFDQUUsT0FBQUE7d0JBQ0Y7OztvQkFKTUcsUUFBUTs7Ozs7Ozs7O29CQVFIOzt3QkFBTUYsTUFBTWEsZ0JBQWdCLENBQUNYLE9BQU9SLE1BQU1POzs7b0JBQW5ERSxTQUFTOzs7Ozs7b0JBQ0ZDO29CQUNQLHVDQUF1QztvQkFDdkMsTUFBTUEsTUFBTVUsSUFBSSxLQUFLLFNBQVNWLE1BQU1XLFFBQVEsR0FDeEMsSUFBSUMsdUJBQWU7d0JBRWpCOzRCQUNFQyxTQUFTOzRCQUNUQyxPQUFPQyxPQUFPQyxJQUFJLENBQUNoQixNQUFNVyxRQUFRLENBQUMsQ0FBQyxFQUFFO3dCQUN2Qzt1QkFFRmpCLENBQUFBLFVBQUFBLE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBS3VCLENBQUMsY0FBTnZCLG9CQUFBQSxTQUFVd0IsSUFBQUEsbUJBQVEsRUFBQyxJQUFJLENBQUNWLE9BQU8sQ0FBQ1csTUFBTSxDQUFDQyxJQUFJLEVBQUVILENBQUMsSUFFOUNqQjs7b0JBR05ELFNBQVNzQixLQUFLQyxLQUFLLENBQUNELEtBQUtFLFNBQVMsQ0FBQ3hCO29CQUNuQ0EsT0FBT1AsRUFBRSxHQUFHTyxPQUFPeUIsR0FBRztvQkFDdEJ6QixTQUFTMEIsSUFBQUEsK0JBQXNCLEVBQUMxQjtvQkFFaEM7O3dCQUFPQTs7OztJQUNUO2FBekNtRFgsVUFFakQsQ0FBNkU7ZUFGNUJBOztXQUFBQSJ9