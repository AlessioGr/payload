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
import { withSession } from "./withSession";
export var updateVersion = function() {
    var _updateVersion = _async_to_generator(function(param) {
        var collectionSlug, where, locale, versionData, _param_req, req, VersionModel, options, query, doc, result, verificationToken;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collectionSlug = param.collectionSlug, where = param.where, locale = param.locale, versionData = param.versionData, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    VersionModel = this.versions[collectionSlug];
                    options = _object_spread_props(_object_spread({}, withSession(this, req.transactionID)), {
                        new: true,
                        lean: true
                    });
                    return [
                        4,
                        VersionModel.buildQuery({
                            payload: this.payload,
                            locale: locale,
                            where: where
                        })
                    ];
                case 1:
                    query = _state.sent();
                    return [
                        4,
                        VersionModel.findOneAndUpdate(query, versionData, options)
                    ];
                case 2:
                    doc = _state.sent();
                    result = JSON.parse(JSON.stringify(doc));
                    verificationToken = doc._verificationToken;
                    // custom id type reset
                    result.id = result._id;
                    if (verificationToken) {
                        result._verificationToken = verificationToken;
                    }
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    function updateVersion(_) {
        return _updateVersion.apply(this, arguments);
    }
    return updateVersion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGRhdGVWZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVXBkYXRlVmVyc2lvbiB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBNb25nb29zZUFkYXB0ZXIgfSBmcm9tICcuJztcbmltcG9ydCB7IHdpdGhTZXNzaW9uIH0gZnJvbSAnLi93aXRoU2Vzc2lvbic7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVWZXJzaW9uOiBVcGRhdGVWZXJzaW9uID0gYXN5bmMgZnVuY3Rpb24gdXBkYXRlVmVyc2lvbihcbiAgdGhpczogTW9uZ29vc2VBZGFwdGVyLFxuICB7IGNvbGxlY3Rpb25TbHVnLCB3aGVyZSwgbG9jYWxlLCB2ZXJzaW9uRGF0YSwgcmVxID0ge30gYXMgUGF5bG9hZFJlcXVlc3QgfSxcbikge1xuICBjb25zdCBWZXJzaW9uTW9kZWwgPSB0aGlzLnZlcnNpb25zW2NvbGxlY3Rpb25TbHVnXTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAuLi53aXRoU2Vzc2lvbih0aGlzLCByZXEudHJhbnNhY3Rpb25JRCksXG4gICAgbmV3OiB0cnVlLFxuICAgIGxlYW46IHRydWUsXG4gIH07XG5cbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBWZXJzaW9uTW9kZWwuYnVpbGRRdWVyeSh7XG4gICAgcGF5bG9hZDogdGhpcy5wYXlsb2FkLFxuICAgIGxvY2FsZSxcbiAgICB3aGVyZSxcbiAgfSk7XG5cbiAgY29uc3QgZG9jID0gYXdhaXQgVmVyc2lvbk1vZGVsLmZpbmRPbmVBbmRVcGRhdGUocXVlcnksIHZlcnNpb25EYXRhLCBvcHRpb25zKTtcblxuICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRvYykpO1xuXG4gIGNvbnN0IHZlcmlmaWNhdGlvblRva2VuID0gZG9jLl92ZXJpZmljYXRpb25Ub2tlbjtcblxuICAvLyBjdXN0b20gaWQgdHlwZSByZXNldFxuICByZXN1bHQuaWQgPSByZXN1bHQuX2lkO1xuICBpZiAodmVyaWZpY2F0aW9uVG9rZW4pIHtcbiAgICByZXN1bHQuX3ZlcmlmaWNhdGlvblRva2VuID0gdmVyaWZpY2F0aW9uVG9rZW47XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXSwibmFtZXMiOlsid2l0aFNlc3Npb24iLCJ1cGRhdGVWZXJzaW9uIiwiY29sbGVjdGlvblNsdWciLCJ3aGVyZSIsImxvY2FsZSIsInZlcnNpb25EYXRhIiwicmVxIiwiVmVyc2lvbk1vZGVsIiwib3B0aW9ucyIsInF1ZXJ5IiwiZG9jIiwicmVzdWx0IiwidmVyaWZpY2F0aW9uVG9rZW4iLCJ2ZXJzaW9ucyIsInRyYW5zYWN0aW9uSUQiLCJuZXciLCJsZWFuIiwiYnVpbGRRdWVyeSIsInBheWxvYWQiLCJmaW5kT25lQW5kVXBkYXRlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiX3ZlcmlmaWNhdGlvblRva2VuIiwiaWQiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsU0FBU0EsV0FBVyxRQUFRLGdCQUFnQjtBQUU1QyxPQUFPLElBQU1DO1FBQThDQSxpQkFBZixvQkFBQSxTQUUxQyxLQUEwRTtZQUF4RUMsZ0JBQWdCQyxPQUFPQyxRQUFRQyx5QkFBYUMsS0FFeENDLGNBQ0FDLFNBTUFDLE9BTUFDLEtBRUFDLFFBRUFDOzs7O29CQW5CSlYsaUJBQUYsTUFBRUEsZ0JBQWdCQyxRQUFsQixNQUFrQkEsT0FBT0MsU0FBekIsTUFBeUJBLFFBQVFDLGNBQWpDLE1BQWlDQSwwQkFBakMsTUFBOENDLEtBQUFBLDhCQUFNLENBQUM7b0JBRS9DQyxlQUFlLElBQUksQ0FBQ00sUUFBUSxDQUFDWCxlQUFlO29CQUM1Q00sVUFBVSx3Q0FDWFIsWUFBWSxJQUFJLEVBQUVNLElBQUlRLGFBQWE7d0JBQ3RDQyxLQUFLO3dCQUNMQyxNQUFNOztvQkFHTTs7d0JBQU1ULGFBQWFVLFVBQVUsQ0FBQzs0QkFDMUNDLFNBQVMsSUFBSSxDQUFDQSxPQUFPOzRCQUNyQmQsUUFBQUE7NEJBQ0FELE9BQUFBO3dCQUNGOzs7b0JBSk1NLFFBQVE7b0JBTUY7O3dCQUFNRixhQUFhWSxnQkFBZ0IsQ0FBQ1YsT0FBT0osYUFBYUc7OztvQkFBOURFLE1BQU07b0JBRU5DLFNBQVNTLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDWjtvQkFFbkNFLG9CQUFvQkYsSUFBSWEsa0JBQWtCO29CQUVoRCx1QkFBdUI7b0JBQ3ZCWixPQUFPYSxFQUFFLEdBQUdiLE9BQU9jLEdBQUc7b0JBQ3RCLElBQUliLG1CQUFtQjt3QkFDckJELE9BQU9ZLGtCQUFrQixHQUFHWDtvQkFDOUI7b0JBQ0E7O3dCQUFPRDs7OztJQUNUO2FBN0IyRFYsY0FFekQsQ0FBMEU7ZUFGakJBOztXQUFBQTtJQTZCekQifQ==