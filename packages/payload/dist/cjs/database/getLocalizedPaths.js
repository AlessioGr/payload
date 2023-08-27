"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getLocalizedPaths", {
    enumerable: true,
    get: function() {
        return getLocalizedPaths;
    }
});
var _types = require("../fields/config/types");
var _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../utilities/flattenTopLevelFields"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function getLocalizedPaths(_) {
    return _getLocalizedPaths.apply(this, arguments);
}
function _getLocalizedPaths() {
    _getLocalizedPaths = _async_to_generator(function(param) {
        var _loop, payload, locale, collectionSlug, globalSlug, fields, incomingPath, _param_overrideAccess, overrideAccess, pathSegments, localizationConfig, paths, i, _ret;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _loop = function(i1) {
                        var segment, lastIncompletePath, path, currentPath, matchedField, nextSegment, nextSegmentIsLocale, _, upcomingSegments, lastSegmentIsValid, nestedPathToQuery, relatedCollection, remainingPaths;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    segment = pathSegments[i1];
                                    lastIncompletePath = paths.find(function(param) {
                                        var complete = param.complete;
                                        return !complete;
                                    });
                                    if (!lastIncompletePath) return [
                                        3,
                                        10
                                    ];
                                    path = lastIncompletePath.path;
                                    currentPath = path ? "".concat(path, ".").concat(segment) : segment;
                                    matchedField = lastIncompletePath.fields.find(function(field) {
                                        return (0, _types.fieldAffectsData)(field) && field.name === segment;
                                    });
                                    lastIncompletePath.field = matchedField;
                                    if (currentPath === "globalType" && globalSlug) {
                                        lastIncompletePath.path = currentPath;
                                        lastIncompletePath.complete = true;
                                        lastIncompletePath.field = {
                                            name: "globalType",
                                            type: "text"
                                        };
                                        return [
                                            2,
                                            (i = i1, {
                                                v: paths
                                            })
                                        ];
                                    }
                                    if (!matchedField) return [
                                        3,
                                        9
                                    ];
                                    if ("hidden" in matchedField && matchedField.hidden && !overrideAccess) {
                                        lastIncompletePath.invalid = true;
                                    }
                                    nextSegment = pathSegments[i1 + 1];
                                    nextSegmentIsLocale = localizationConfig && localizationConfig.localeCodes.includes(nextSegment);
                                    if (nextSegmentIsLocale) {
                                        // Skip the next iteration, because it's a locale
                                        i1 += 1;
                                        currentPath = "".concat(currentPath, ".").concat(nextSegment);
                                    } else if (localizationConfig && "localized" in matchedField && matchedField.localized) {
                                        currentPath = "".concat(currentPath, ".").concat(locale);
                                    }
                                    _ = matchedField.type;
                                    switch(_){
                                        case "blocks":
                                            return [
                                                3,
                                                1
                                            ];
                                        case "richText":
                                            return [
                                                3,
                                                1
                                            ];
                                        case "json":
                                            return [
                                                3,
                                                1
                                            ];
                                        case "relationship":
                                            return [
                                                3,
                                                2
                                            ];
                                        case "upload":
                                            return [
                                                3,
                                                2
                                            ];
                                    }
                                    return [
                                        3,
                                        7
                                    ];
                                case 1:
                                    {
                                        upcomingSegments = pathSegments.slice(i1 + 1).join(".");
                                        lastIncompletePath.complete = true;
                                        lastIncompletePath.path = upcomingSegments ? "".concat(currentPath, ".").concat(upcomingSegments) : currentPath;
                                        return [
                                            2,
                                            (i = i1, {
                                                v: paths
                                            })
                                        ];
                                    }
                                    _state.label = 2;
                                case 2:
                                    if (!(typeof matchedField.relationTo !== "string")) return [
                                        3,
                                        3
                                    ];
                                    lastSegmentIsValid = [
                                        "value",
                                        "relationTo"
                                    ].includes(pathSegments[pathSegments.length - 1]);
                                    if (lastSegmentIsValid) {
                                        lastIncompletePath.complete = true;
                                        lastIncompletePath.path = pathSegments.join(".");
                                    } else {
                                        lastIncompletePath.invalid = true;
                                        return [
                                            2,
                                            (i = i1, {
                                                v: paths
                                            })
                                        ];
                                    }
                                    return [
                                        3,
                                        6
                                    ];
                                case 3:
                                    lastIncompletePath.complete = true;
                                    lastIncompletePath.path = currentPath;
                                    nestedPathToQuery = pathSegments.slice(nextSegmentIsLocale ? i1 + 2 : i1 + 1).join(".");
                                    if (!nestedPathToQuery) return [
                                        3,
                                        5
                                    ];
                                    relatedCollection = payload.collections[matchedField.relationTo].config;
                                    return [
                                        4,
                                        getLocalizedPaths({
                                            payload: payload,
                                            locale: locale,
                                            globalSlug: globalSlug,
                                            collectionSlug: relatedCollection.slug,
                                            fields: relatedCollection.fields,
                                            incomingPath: nestedPathToQuery
                                        })
                                    ];
                                case 4:
                                    remainingPaths = _state.sent();
                                    paths = _to_consumable_array(paths).concat(_to_consumable_array(remainingPaths));
                                    _state.label = 5;
                                case 5:
                                    return [
                                        2,
                                        (i = i1, {
                                            v: paths
                                        })
                                    ];
                                case 6:
                                    return [
                                        3,
                                        8
                                    ];
                                case 7:
                                    {
                                        if ("fields" in lastIncompletePath.field) {
                                            lastIncompletePath.fields = (0, _flattenTopLevelFields.default)(lastIncompletePath.field.fields, false);
                                        }
                                        if (i1 + 1 === pathSegments.length) lastIncompletePath.complete = true;
                                        lastIncompletePath.path = currentPath;
                                    }
                                    _state.label = 8;
                                case 8:
                                    return [
                                        3,
                                        10
                                    ];
                                case 9:
                                    lastIncompletePath.invalid = true;
                                    lastIncompletePath.path = currentPath;
                                    return [
                                        2,
                                        (i = i1, {
                                            v: paths
                                        })
                                    ];
                                case 10:
                                    i = i1, void 0;
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    payload = param.payload, locale = param.locale, collectionSlug = param.collectionSlug, globalSlug = param.globalSlug, fields = param.fields, incomingPath = param.incomingPath, _param_overrideAccess = param.overrideAccess, overrideAccess = _param_overrideAccess === void 0 ? false : _param_overrideAccess;
                    pathSegments = incomingPath.split(".");
                    localizationConfig = payload.config.localization;
                    paths = [
                        {
                            path: "",
                            complete: false,
                            field: undefined,
                            fields: (0, _flattenTopLevelFields.default)(fields, false),
                            collectionSlug: collectionSlug,
                            globalSlug: globalSlug,
                            invalid: false
                        }
                    ];
                    i = 0;
                    _state.label = 1;
                case 1:
                    if (!(i < pathSegments.length)) return [
                        3,
                        4
                    ];
                    return [
                        5,
                        _ts_values(_loop(i))
                    ];
                case 2:
                    _ret = _state.sent();
                    if (_type_of(_ret) === "object") return [
                        2,
                        _ret.v
                    ];
                    _state.label = 3;
                case 3:
                    i += 1;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2,
                        paths
                    ];
            }
        });
    });
    return _getLocalizedPaths.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9nZXRMb2NhbGl6ZWRQYXRocy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCwgZmllbGRBZmZlY3RzRGF0YSB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZsYXR0ZW5GaWVsZHMgZnJvbSAnLi4vdXRpbGl0aWVzL2ZsYXR0ZW5Ub3BMZXZlbEZpZWxkcyc7XG5pbXBvcnQgeyBQYXRoVG9RdWVyeSB9IGZyb20gJy4vcXVlcnlWYWxpZGF0aW9uL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhbGl6ZWRQYXRocyh7XG4gIHBheWxvYWQsXG4gIGxvY2FsZSxcbiAgY29sbGVjdGlvblNsdWcsXG4gIGdsb2JhbFNsdWcsXG4gIGZpZWxkcyxcbiAgaW5jb21pbmdQYXRoLFxuICBvdmVycmlkZUFjY2VzcyA9IGZhbHNlLFxufToge1xuICBwYXlsb2FkOiBQYXlsb2FkXG4gIGxvY2FsZT86IHN0cmluZ1xuICBjb2xsZWN0aW9uU2x1Zz86IHN0cmluZ1xuICBnbG9iYWxTbHVnPzogc3RyaW5nXG4gIGZpZWxkczogRmllbGRbXVxuICBpbmNvbWluZ1BhdGg6IHN0cmluZ1xuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW4sXG59KTogUHJvbWlzZTxQYXRoVG9RdWVyeVtdPiB7XG4gIGNvbnN0IHBhdGhTZWdtZW50cyA9IGluY29taW5nUGF0aC5zcGxpdCgnLicpO1xuICBjb25zdCBsb2NhbGl6YXRpb25Db25maWcgPSBwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb247XG5cbiAgbGV0IHBhdGhzOiBQYXRoVG9RdWVyeVtdID0gW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgZmllbGQ6IHVuZGVmaW5lZCxcbiAgICAgIGZpZWxkczogZmxhdHRlbkZpZWxkcyhmaWVsZHMsIGZhbHNlKSxcbiAgICAgIGNvbGxlY3Rpb25TbHVnLFxuICAgICAgZ2xvYmFsU2x1ZyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH0sXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzZWdtZW50ID0gcGF0aFNlZ21lbnRzW2ldO1xuXG4gICAgY29uc3QgbGFzdEluY29tcGxldGVQYXRoID0gcGF0aHMuZmluZCgoeyBjb21wbGV0ZSB9KSA9PiAhY29tcGxldGUpO1xuXG4gICAgaWYgKGxhc3RJbmNvbXBsZXRlUGF0aCkge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBsYXN0SW5jb21wbGV0ZVBhdGg7XG4gICAgICBsZXQgY3VycmVudFBhdGggPSBwYXRoID8gYCR7cGF0aH0uJHtzZWdtZW50fWAgOiBzZWdtZW50O1xuXG4gICAgICBjb25zdCBtYXRjaGVkRmllbGQgPSBsYXN0SW5jb21wbGV0ZVBhdGguZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSBzZWdtZW50KTtcbiAgICAgIGxhc3RJbmNvbXBsZXRlUGF0aC5maWVsZCA9IG1hdGNoZWRGaWVsZDtcblxuICAgICAgaWYgKGN1cnJlbnRQYXRoID09PSAnZ2xvYmFsVHlwZScgJiYgZ2xvYmFsU2x1Zykge1xuICAgICAgICBsYXN0SW5jb21wbGV0ZVBhdGgucGF0aCA9IGN1cnJlbnRQYXRoO1xuICAgICAgICBsYXN0SW5jb21wbGV0ZVBhdGguY29tcGxldGUgPSB0cnVlO1xuICAgICAgICBsYXN0SW5jb21wbGV0ZVBhdGguZmllbGQgPSB7XG4gICAgICAgICAgbmFtZTogJ2dsb2JhbFR5cGUnLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaGVkRmllbGQpIHtcbiAgICAgICAgaWYgKCdoaWRkZW4nIGluIG1hdGNoZWRGaWVsZCAmJiBtYXRjaGVkRmllbGQuaGlkZGVuICYmICFvdmVycmlkZUFjY2Vzcykge1xuICAgICAgICAgIGxhc3RJbmNvbXBsZXRlUGF0aC5pbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5leHRTZWdtZW50ID0gcGF0aFNlZ21lbnRzW2kgKyAxXTtcbiAgICAgICAgY29uc3QgbmV4dFNlZ21lbnRJc0xvY2FsZSA9IGxvY2FsaXphdGlvbkNvbmZpZyAmJiBsb2NhbGl6YXRpb25Db25maWcubG9jYWxlQ29kZXMuaW5jbHVkZXMobmV4dFNlZ21lbnQpO1xuXG4gICAgICAgIGlmIChuZXh0U2VnbWVudElzTG9jYWxlKSB7XG4gICAgICAgICAgLy8gU2tpcCB0aGUgbmV4dCBpdGVyYXRpb24sIGJlY2F1c2UgaXQncyBhIGxvY2FsZVxuICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICBjdXJyZW50UGF0aCA9IGAke2N1cnJlbnRQYXRofS4ke25leHRTZWdtZW50fWA7XG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxpemF0aW9uQ29uZmlnICYmICdsb2NhbGl6ZWQnIGluIG1hdGNoZWRGaWVsZCAmJiBtYXRjaGVkRmllbGQubG9jYWxpemVkKSB7XG4gICAgICAgICAgY3VycmVudFBhdGggPSBgJHtjdXJyZW50UGF0aH0uJHtsb2NhbGV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAobWF0Y2hlZEZpZWxkLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdibG9ja3MnOlxuICAgICAgICAgIGNhc2UgJ3JpY2hUZXh0JzpcbiAgICAgICAgICBjYXNlICdqc29uJzoge1xuICAgICAgICAgICAgY29uc3QgdXBjb21pbmdTZWdtZW50cyA9IHBhdGhTZWdtZW50cy5zbGljZShpICsgMSkuam9pbignLicpO1xuICAgICAgICAgICAgbGFzdEluY29tcGxldGVQYXRoLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxhc3RJbmNvbXBsZXRlUGF0aC5wYXRoID0gdXBjb21pbmdTZWdtZW50cyA/IGAke2N1cnJlbnRQYXRofS4ke3VwY29taW5nU2VnbWVudHN9YCA6IGN1cnJlbnRQYXRoO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGhzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgJ3JlbGF0aW9uc2hpcCc6XG4gICAgICAgICAgY2FzZSAndXBsb2FkJzoge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHBvbHltb3JwaGljIHJlbGF0aW9uLFxuICAgICAgICAgICAgLy8gV2Ugb25seSBzdXBwb3J0IHF1ZXJ5aW5nIGRpcmVjdGx5IChubyBuZXN0ZWQgcXVlcnlpbmcpXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1hdGNoZWRGaWVsZC5yZWxhdGlvblRvICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb25zdCBsYXN0U2VnbWVudElzVmFsaWQgPSBbJ3ZhbHVlJywgJ3JlbGF0aW9uVG8nXS5pbmNsdWRlcyhwYXRoU2VnbWVudHNbcGF0aFNlZ21lbnRzLmxlbmd0aCAtIDFdKTtcblxuICAgICAgICAgICAgICBpZiAobGFzdFNlZ21lbnRJc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgbGFzdEluY29tcGxldGVQYXRoLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsYXN0SW5jb21wbGV0ZVBhdGgucGF0aCA9IHBhdGhTZWdtZW50cy5qb2luKCcuJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGFzdEluY29tcGxldGVQYXRoLmludmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRocztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGFzdEluY29tcGxldGVQYXRoLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbGFzdEluY29tcGxldGVQYXRoLnBhdGggPSBjdXJyZW50UGF0aDtcblxuICAgICAgICAgICAgICBjb25zdCBuZXN0ZWRQYXRoVG9RdWVyeSA9IHBhdGhTZWdtZW50cy5zbGljZShuZXh0U2VnbWVudElzTG9jYWxlID8gaSArIDIgOiBpICsgMSkuam9pbignLicpO1xuXG4gICAgICAgICAgICAgIGlmIChuZXN0ZWRQYXRoVG9RdWVyeSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRDb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1ttYXRjaGVkRmllbGQucmVsYXRpb25UbyBhcyBzdHJpbmddLmNvbmZpZztcblxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nUGF0aHMgPSBhd2FpdCBnZXRMb2NhbGl6ZWRQYXRocyh7XG4gICAgICAgICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgICAgICAgZ2xvYmFsU2x1ZyxcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25TbHVnOiByZWxhdGVkQ29sbGVjdGlvbi5zbHVnLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiByZWxhdGVkQ29sbGVjdGlvbi5maWVsZHMsXG4gICAgICAgICAgICAgICAgICBpbmNvbWluZ1BhdGg6IG5lc3RlZFBhdGhUb1F1ZXJ5LFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcGF0aHMgPSBbXG4gICAgICAgICAgICAgICAgICAuLi5wYXRocyxcbiAgICAgICAgICAgICAgICAgIC4uLnJlbWFpbmluZ1BhdGhzLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIGlmICgnZmllbGRzJyBpbiBsYXN0SW5jb21wbGV0ZVBhdGguZmllbGQpIHtcbiAgICAgICAgICAgICAgbGFzdEluY29tcGxldGVQYXRoLmZpZWxkcyA9IGZsYXR0ZW5GaWVsZHMobGFzdEluY29tcGxldGVQYXRoLmZpZWxkLmZpZWxkcywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaSArIDEgPT09IHBhdGhTZWdtZW50cy5sZW5ndGgpIGxhc3RJbmNvbXBsZXRlUGF0aC5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICBsYXN0SW5jb21wbGV0ZVBhdGgucGF0aCA9IGN1cnJlbnRQYXRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdEluY29tcGxldGVQYXRoLmludmFsaWQgPSB0cnVlO1xuICAgICAgICBsYXN0SW5jb21wbGV0ZVBhdGgucGF0aCA9IGN1cnJlbnRQYXRoO1xuICAgICAgICByZXR1cm4gcGF0aHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGhzO1xufVxuIl0sIm5hbWVzIjpbImdldExvY2FsaXplZFBhdGhzIiwicGF5bG9hZCIsImxvY2FsZSIsImNvbGxlY3Rpb25TbHVnIiwiZ2xvYmFsU2x1ZyIsImZpZWxkcyIsImluY29taW5nUGF0aCIsIm92ZXJyaWRlQWNjZXNzIiwicGF0aFNlZ21lbnRzIiwibG9jYWxpemF0aW9uQ29uZmlnIiwicGF0aHMiLCJpIiwic2VnbWVudCIsImxhc3RJbmNvbXBsZXRlUGF0aCIsInBhdGgiLCJjdXJyZW50UGF0aCIsIm1hdGNoZWRGaWVsZCIsIm5leHRTZWdtZW50IiwibmV4dFNlZ21lbnRJc0xvY2FsZSIsInVwY29taW5nU2VnbWVudHMiLCJsYXN0U2VnbWVudElzVmFsaWQiLCJuZXN0ZWRQYXRoVG9RdWVyeSIsInJlbGF0ZWRDb2xsZWN0aW9uIiwicmVtYWluaW5nUGF0aHMiLCJmaW5kIiwiY29tcGxldGUiLCJmaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIiwidHlwZSIsImhpZGRlbiIsImludmFsaWQiLCJsb2NhbGVDb2RlcyIsImluY2x1ZGVzIiwibG9jYWxpemVkIiwic2xpY2UiLCJqb2luIiwicmVsYXRpb25UbyIsImxlbmd0aCIsImNvbGxlY3Rpb25zIiwiY29uZmlnIiwic2x1ZyIsImZsYXR0ZW5GaWVsZHMiLCJzcGxpdCIsImxvY2FsaXphdGlvbiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFLc0JBOzs7ZUFBQUE7OztxQkFMa0I7NEVBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBSUpBLGtCQUFrQixDQWdCdkM7V0FoQnFCQTs7U0FBQUE7SUFBQUEscUJBQWYsb0JBQUEsU0FBaUMsS0FnQnZDO21CQWZDQyxTQUNBQyxRQUNBQyxnQkFDQUMsWUFDQUMsUUFDQUMscUNBQ0FDLGdCQVVNQyxjQUNBQyxvQkFFRkMsT0FZS0M7Ozs7OzRCQUNEQyxTQUVBQyxvQkFHSUMsTUFDSkMsYUFFRUMsY0FtQkVDLGFBQ0FDLHdCQWNJQyxrQkFXRUMsb0JBYUFDLG1CQUdFQyxtQkFHQUM7Ozs7b0NBeEVaWCxVQUFVSixZQUFZLENBQUNHLEdBQUU7b0NBRXpCRSxxQkFBcUJILE1BQU1jLElBQUksQ0FBQzs0Q0FBR0MsaUJBQUFBOytDQUFlLENBQUNBOzt5Q0FFckRaLG9CQUFBQTs7OztvQ0FDTUMsT0FBU0QsbUJBQVRDO29DQUNKQyxjQUFjRCxPQUFPLEFBQUMsR0FBVUYsT0FBUkUsTUFBSyxLQUFXLE9BQVJGLFdBQVlBO29DQUUxQ0ksZUFBZUgsbUJBQW1CUixNQUFNLENBQUNtQixJQUFJLENBQUMsU0FB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