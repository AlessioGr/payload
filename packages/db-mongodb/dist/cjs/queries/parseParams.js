/* eslint-disable no-restricted-syntax */ /* eslint-disable no-await-in-loop */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseParams", {
    enumerable: true,
    get: function() {
        return parseParams;
    }
});
var _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
var _utilities = require("payload/utilities");
var _types = require("payload/types");
var _buildSearchParams = require("./buildSearchParams");
var _buildAndOrConditions = require("./buildAndOrConditions");
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
function parseParams(_) {
    return _parseParams.apply(this, arguments);
}
function _parseParams() {
    _parseParams = _async_to_generator(function(param) {
        var where, collectionSlug, globalSlug, payload, locale, fields, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, relationOrPath, condition, conditionOperator, builtConditions, pathOperators, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, operator, _searchParam, _searchParam1, _searchParam2, searchParam, err, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    where = param.where, collectionSlug = param.collectionSlug, globalSlug = param.globalSlug, payload = param.payload, locale = param.locale, fields = param.fields;
                    result = {};
                    if (!(typeof where === "object")) return [
                        3,
                        16
                    ];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        14,
                        15,
                        16
                    ]);
                    _iterator = Object.keys(where)[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        13
                    ];
                    relationOrPath = _step.value;
                    condition = where[relationOrPath];
                    conditionOperator = void 0;
                    if (relationOrPath.toLowerCase() === "and") {
                        conditionOperator = "$and";
                    } else if (relationOrPath.toLowerCase() === "or") {
                        conditionOperator = "$or";
                    }
                    if (!Array.isArray(condition)) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        (0, _buildAndOrConditions.buildAndOrConditions)({
                            collectionSlug: collectionSlug,
                            fields: fields,
                            globalSlug: globalSlug,
                            payload: payload,
                            locale: locale,
                            where: condition
                        })
                    ];
                case 3:
                    builtConditions = _state.sent();
                    if (builtConditions.length > 0) result[conditionOperator] = builtConditions;
                    return [
                        3,
                        12
                    ];
                case 4:
                    pathOperators = where[relationOrPath];
                    if (!(typeof pathOperators === "object")) return [
                        3,
                        12
                    ];
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    _state.label = 5;
                case 5:
                    _state.trys.push([
                        5,
                        10,
                        11,
                        12
                    ]);
                    _iterator1 = Object.keys(pathOperators)[Symbol.iterator]();
                    _state.label = 6;
                case 6:
                    if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                        3,
                        9
                    ];
                    operator = _step1.value;
                    if (!_types.validOperators.includes(operator)) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        (0, _buildSearchParams.buildSearchParam)({
                            collectionSlug: collectionSlug,
                            globalSlug: globalSlug,
                            payload: payload,
                            locale: locale,
                            fields: fields,
                            incomingPath: relationOrPath,
                            val: pathOperators[operator],
                            operator: operator
                        })
                    ];
                case 7:
                    searchParam = _state.sent();
                    if (((_searchParam = searchParam) === null || _searchParam === void 0 ? void 0 : _searchParam.value) && ((_searchParam1 = searchParam) === null || _searchParam1 === void 0 ? void 0 : _searchParam1.path)) {
                        result = _object_spread_props(_object_spread({}, result), _define_property({}, searchParam.path, searchParam.value));
                    } else if (typeof ((_searchParam2 = searchParam) === null || _searchParam2 === void 0 ? void 0 : _searchParam2.value) === "object") {
                        result = (0, _deepmerge.default)(result, searchParam.value, {
                            arrayMerge: _utilities.combineMerge
                        });
                    }
                    _state.label = 8;
                case 8:
                    _iteratorNormalCompletion1 = true;
                    return [
                        3,
                        6
                    ];
                case 9:
                    return [
                        3,
                        12
                    ];
                case 10:
                    err = _state.sent();
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                    return [
                        3,
                        12
                    ];
                case 11:
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                    return [
                        7
                    ];
                case 12:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 13:
                    return [
                        3,
                        16
                    ];
                case 14:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        16
                    ];
                case 15:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 16:
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return _parseParams.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9xdWVyaWVzL3BhcnNlUGFyYW1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hd2FpdC1pbi1sb29wICovXG5pbXBvcnQgeyBGaWx0ZXJRdWVyeSB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcbmltcG9ydCB7IE9wZXJhdG9yLCBXaGVyZSB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHsgY29tYmluZU1lcmdlIH0gZnJvbSAncGF5bG9hZC91dGlsaXRpZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCB7IHZhbGlkT3BlcmF0b3JzIH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAncGF5bG9hZCc7XG5pbXBvcnQgeyBidWlsZFNlYXJjaFBhcmFtIH0gZnJvbSAnLi9idWlsZFNlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyBidWlsZEFuZE9yQ29uZGl0aW9ucyB9IGZyb20gJy4vYnVpbGRBbmRPckNvbmRpdGlvbnMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFyc2VQYXJhbXMoe1xuICB3aGVyZSxcbiAgY29sbGVjdGlvblNsdWcsXG4gIGdsb2JhbFNsdWcsXG4gIHBheWxvYWQsXG4gIGxvY2FsZSxcbiAgZmllbGRzLFxufToge1xuICB3aGVyZTogV2hlcmUsXG4gIGNvbGxlY3Rpb25TbHVnPzogc3RyaW5nLFxuICBnbG9iYWxTbHVnPzogc3RyaW5nLFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBsb2NhbGU6IHN0cmluZyxcbiAgZmllbGRzOiBGaWVsZFtdLFxufSk6IFByb21pc2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgbGV0IHJlc3VsdCA9IHt9IGFzIEZpbHRlclF1ZXJ5PGFueT47XG5cbiAgaWYgKHR5cGVvZiB3aGVyZSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGRldGVybWluZSBpZiB0aGUgd2hlcmVLZXkgaXMgYW4gQU5ELCBPUiwgb3IgYSBzY2hlbWEgcGF0aFxuICAgIGZvciAoY29uc3QgcmVsYXRpb25PclBhdGggb2YgT2JqZWN0LmtleXMod2hlcmUpKSB7XG4gICAgICBjb25zdCBjb25kaXRpb24gPSB3aGVyZVtyZWxhdGlvbk9yUGF0aF07XG4gICAgICBsZXQgY29uZGl0aW9uT3BlcmF0b3I6ICckYW5kJyB8ICckb3InO1xuICAgICAgaWYgKHJlbGF0aW9uT3JQYXRoLnRvTG93ZXJDYXNlKCkgPT09ICdhbmQnKSB7XG4gICAgICAgIGNvbmRpdGlvbk9wZXJhdG9yID0gJyRhbmQnO1xuICAgICAgfSBlbHNlIGlmIChyZWxhdGlvbk9yUGF0aC50b0xvd2VyQ2FzZSgpID09PSAnb3InKSB7XG4gICAgICAgIGNvbmRpdGlvbk9wZXJhdG9yID0gJyRvcic7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25kaXRpb24pKSB7XG4gICAgICAgIGNvbnN0IGJ1aWx0Q29uZGl0aW9ucyA9IGF3YWl0IGJ1aWxkQW5kT3JDb25kaXRpb25zKHtcbiAgICAgICAgICBjb2xsZWN0aW9uU2x1ZyxcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgZ2xvYmFsU2x1ZyxcbiAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICB3aGVyZTogY29uZGl0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGJ1aWx0Q29uZGl0aW9ucy5sZW5ndGggPiAwKSByZXN1bHRbY29uZGl0aW9uT3BlcmF0b3JdID0gYnVpbHRDb25kaXRpb25zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXQncyBhIHBhdGggLSBhbmQgdGhlcmUgY2FuIGJlIG11bHRpcGxlIGNvbXBhcmlzb25zIG9uIGEgc2luZ2xlIHBhdGguXG4gICAgICAgIC8vIEZvciBleGFtcGxlIC0gdGl0bGUgbGlrZSAndGVzdCcgYW5kIHRpdGxlIG5vdCBlcXVhbCB0byAndGVzdGVyJ1xuICAgICAgICAvLyBTbyB3ZSBuZWVkIHRvIGxvb3Agb24ga2V5cyBhZ2FpbiBoZXJlIHRvIGhhbmRsZSBlYWNoIG9wZXJhdG9yIGluZGVwZW5kZW50bHlcbiAgICAgICAgY29uc3QgcGF0aE9wZXJhdG9ycyA9IHdoZXJlW3JlbGF0aW9uT3JQYXRoXTtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXRoT3BlcmF0b3JzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGZvciAoY29uc3Qgb3BlcmF0b3Igb2YgT2JqZWN0LmtleXMocGF0aE9wZXJhdG9ycykpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZE9wZXJhdG9ycy5pbmNsdWRlcyhvcGVyYXRvciBhcyBPcGVyYXRvcikpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW0gPSBhd2FpdCBidWlsZFNlYXJjaFBhcmFtKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uU2x1ZyxcbiAgICAgICAgICAgICAgICBnbG9iYWxTbHVnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAgICAgICBpbmNvbWluZ1BhdGg6IHJlbGF0aW9uT3JQYXRoLFxuICAgICAgICAgICAgICAgIHZhbDogcGF0aE9wZXJhdG9yc1tvcGVyYXRvcl0sXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChzZWFyY2hQYXJhbT8udmFsdWUgJiYgc2VhcmNoUGFyYW0/LnBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICBbc2VhcmNoUGFyYW0ucGF0aF06IHNlYXJjaFBhcmFtLnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlYXJjaFBhcmFtPy52YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBkZWVwbWVyZ2UocmVzdWx0LCBzZWFyY2hQYXJhbS52YWx1ZSwgeyBhcnJheU1lcmdlOiBjb21iaW5lTWVyZ2UgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFyYW1zIiwid2hlcmUiLCJjb2xsZWN0aW9uU2x1ZyIsImdsb2JhbFNsdWciLCJwYXlsb2FkIiwibG9jYWxlIiwiZmllbGRzIiwicmVzdWx0IiwicmVsYXRpb25PclBhdGgiLCJjb25kaXRpb24iLCJjb25kaXRpb25PcGVyYXRvciIsImJ1aWx0Q29uZGl0aW9ucyIsInBhdGhPcGVyYXRvcnMiLCJvcGVyYXRvciIsInNlYXJjaFBhcmFtIiwiT2JqZWN0Iiwia2V5cyIsInRvTG93ZXJDYXNlIiwiQXJyYXkiLCJpc0FycmF5IiwiYnVpbGRBbmRPckNvbmRpdGlvbnMiLCJsZW5ndGgiLCJ2YWxpZE9wZXJhdG9ycyIsImluY2x1ZGVzIiwiYnVpbGRTZWFyY2hQYXJhbSIsImluY29taW5nUGF0aCIsInZhbCIsInZhbHVlIiwicGF0aCIsImRlZXBtZXJnZSIsImFycmF5TWVyZ2UiLCJjb21iaW5lTWVyZ2UiXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QyxHQUN2QyxtQ0FBbUM7Ozs7K0JBV2JBOzs7ZUFBQUE7OztnRUFUQTt5QkFFTztxQkFFRTtpQ0FFRTtvQ0FDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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