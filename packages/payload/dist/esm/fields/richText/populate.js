/* eslint-disable @typescript-eslint/no-use-before-define */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
export var populate = function() {
    var _ref = _async_to_generator(function(param) {
        var id, collection, data, key, overrideAccess, depth, currentDepth, req, showHiddenFields, dataRef, doc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    id = param.id, collection = param.collection, data = param.data, key = param.key, overrideAccess = param.overrideAccess, depth = param.depth, currentDepth = param.currentDepth, req = param.req, showHiddenFields = param.showHiddenFields;
                    dataRef = data;
                    return [
                        4,
                        req.payloadDataLoader.load(JSON.stringify([
                            req.transactionID,
                            collection.config.slug,
                            id,
                            depth,
                            currentDepth + 1,
                            req.locale,
                            req.fallbackLocale,
                            typeof overrideAccess === "undefined" ? false : overrideAccess,
                            showHiddenFields
                        ]))
                    ];
                case 1:
                    doc = _state.sent();
                    if (doc) {
                        dataRef[key] = doc;
                    } else {
                        dataRef[key] = null;
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return function populate(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvcmljaFRleHQvcG9wdWxhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IEZpZWxkLCBSaWNoVGV4dEZpZWxkIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5cbnR5cGUgQXJndW1lbnRzID0ge1xuICBkYXRhOiB1bmtub3duXG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBrZXk6IHN0cmluZyB8IG51bWJlclxuICBkZXB0aDogbnVtYmVyXG4gIGN1cnJlbnREZXB0aD86IG51bWJlclxuICBmaWVsZDogUmljaFRleHRGaWVsZFxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHNob3dIaWRkZW5GaWVsZHM6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IHBvcHVsYXRlID0gYXN5bmMgKHtcbiAgaWQsXG4gIGNvbGxlY3Rpb24sXG4gIGRhdGEsXG4gIGtleSxcbiAgb3ZlcnJpZGVBY2Nlc3MsXG4gIGRlcHRoLFxuICBjdXJyZW50RGVwdGgsXG4gIHJlcSxcbiAgc2hvd0hpZGRlbkZpZWxkcyxcbn06IE9taXQ8QXJndW1lbnRzLCAnZmllbGQnPiAmIHtcbiAgaWQ6IHN0cmluZyxcbiAgZmllbGQ6IEZpZWxkXG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbn0pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgZGF0YVJlZiA9IGRhdGEgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cbiAgY29uc3QgZG9jID0gYXdhaXQgcmVxLnBheWxvYWREYXRhTG9hZGVyLmxvYWQoSlNPTi5zdHJpbmdpZnkoW1xuICAgIHJlcS50cmFuc2FjdGlvbklELFxuICAgIGNvbGxlY3Rpb24uY29uZmlnLnNsdWcsXG4gICAgaWQsXG4gICAgZGVwdGgsXG4gICAgY3VycmVudERlcHRoICsgMSxcbiAgICByZXEubG9jYWxlLFxuICAgIHJlcS5mYWxsYmFja0xvY2FsZSxcbiAgICB0eXBlb2Ygb3ZlcnJpZGVBY2Nlc3MgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBvdmVycmlkZUFjY2VzcyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICBdKSk7XG5cbiAgaWYgKGRvYykge1xuICAgIGRhdGFSZWZba2V5XSA9IGRvYztcbiAgfSBlbHNlIHtcbiAgICBkYXRhUmVmW2tleV0gPSBudWxsO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInBvcHVsYXRlIiwiaWQiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImtleSIsIm92ZXJyaWRlQWNjZXNzIiwiZGVwdGgiLCJjdXJyZW50RGVwdGgiLCJyZXEiLCJzaG93SGlkZGVuRmllbGRzIiwiZGF0YVJlZiIsImRvYyIsInBheWxvYWREYXRhTG9hZGVyIiwibG9hZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmFuc2FjdGlvbklEIiwiY29uZmlnIiwic2x1ZyIsImxvY2FsZSIsImZhbGxiYWNrTG9jYWxlIl0sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjFELE9BQU8sSUFBTUE7ZUFBVyxvQkFBQTtZQUN0QkMsSUFDQUMsWUFDQUMsTUFDQUMsS0FDQUMsZ0JBQ0FDLE9BQ0FDLGNBQ0FDLEtBQ0FDLGtCQU1NQyxTQUVBQzs7OztvQkFoQk5WLFdBQUFBLElBQ0FDLG1CQUFBQSxZQUNBQyxhQUFBQSxNQUNBQyxZQUFBQSxLQUNBQyx1QkFBQUEsZ0JBQ0FDLGNBQUFBLE9BQ0FDLHFCQUFBQSxjQUNBQyxZQUFBQSxLQUNBQyx5QkFBQUE7b0JBTU1DLFVBQVVQO29CQUVKOzt3QkFBTUssSUFBSUksaUJBQWlCLENBQUNDLElBQUksQ0FBQ0MsS0FBS0MsU0FBUzs0QkFDekRQLElBQUlRLGFBQWE7NEJBQ2pCZCxXQUFXZSxNQUFNLENBQUNDLElBQUk7NEJBQ3RCakI7NEJBQ0FLOzRCQUNBQyxlQUFlOzRCQUNmQyxJQUFJVyxNQUFNOzRCQUNWWCxJQUFJWSxjQUFjOzRCQUNsQixPQUFPZixtQkFBbUIsY0FBYyxRQUFRQTs0QkFDaERJOzs7O29CQVRJRSxNQUFNO29CQVlaLElBQUlBLEtBQUs7d0JBQ1BELE9BQU8sQ0FBQ04sSUFBSSxHQUFHTztvQkFDakIsT0FBTzt3QkFDTEQsT0FBTyxDQUFDTixJQUFJLEdBQUc7b0JBQ2pCOzs7Ozs7SUFDRjtvQkFsQ2FKOzs7SUFrQ1gifQ==