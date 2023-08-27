function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
export var enforceMaxVersions = function() {
    var _ref = _async_to_generator(function(param) {
        var payload, max, collection, global, id, req, _global, entityType, slug, _oldestAllowedDoc, where, oldestAllowedDoc, query, ref, query1, ref1, _collection, deleteQuery, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = param.payload, max = param.max, collection = param.collection, global = param.global, id = param.id, req = param.req;
                    entityType = collection ? "collection" : "global";
                    slug = collection ? collection.slug : (_global = global) === null || _global === void 0 ? void 0 : _global.slug;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        8,
                        ,
                        9
                    ]);
                    where = {};
                    if (!collection) return [
                        3,
                        3
                    ];
                    where.parent = {
                        equals: id
                    };
                    return [
                        4,
                        payload.db.findVersions({
                            where: where,
                            collection: collection.slug,
                            skip: max,
                            sort: "-updatedAt",
                            pagination: false,
                            req: req
                        })
                    ];
                case 2:
                    query = _state.sent();
                    ref = _sliced_to_array(query.docs, 1), oldestAllowedDoc = ref[0], ref;
                    return [
                        3,
                        5
                    ];
                case 3:
                    if (!global) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        payload.db.findGlobalVersions({
                            where: where,
                            global: global.slug,
                            skip: max,
                            sort: "-updatedAt",
                            req: req
                        })
                    ];
                case 4:
                    query1 = _state.sent();
                    ref1 = _sliced_to_array(query1.docs, 1), oldestAllowedDoc = ref1[0], ref1;
                    _state.label = 5;
                case 5:
                    if (!((_oldestAllowedDoc = oldestAllowedDoc) === null || _oldestAllowedDoc === void 0 ? void 0 : _oldestAllowedDoc.updatedAt)) return [
                        3,
                        7
                    ];
                    deleteQuery = {
                        updatedAt: {
                            less_than_equal: oldestAllowedDoc.updatedAt
                        }
                    };
                    if (collection) {
                        deleteQuery.parent = {
                            equals: id
                        };
                    }
                    return [
                        4,
                        payload.db.deleteVersions({
                            collection: (_collection = collection) === null || _collection === void 0 ? void 0 : _collection.slug,
                            where: deleteQuery,
                            req: req
                        })
                    ];
                case 6:
                    _state.sent();
                    _state.label = 7;
                case 7:
                    return [
                        3,
                        9
                    ];
                case 8:
                    err = _state.sent();
                    payload.logger.error("There was an error cleaning up old versions for the ".concat(entityType, " ").concat(slug));
                    return [
                        3,
                        9
                    ];
                case 9:
                    return [
                        2
                    ];
            }
        });
    });
    return function enforceMaxVersions(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9lbmZvcmNlTWF4VmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnO1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBXaGVyZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIEFyZ3MgPSB7XG4gIHBheWxvYWQ6IFBheWxvYWRcbiAgbWF4OiBudW1iZXJcbiAgY29sbGVjdGlvbj86IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgZ2xvYmFsPzogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gIGlkPzogc3RyaW5nIHwgbnVtYmVyXG4gIHJlcT86IFBheWxvYWRSZXF1ZXN0XG59XG5cbmV4cG9ydCBjb25zdCBlbmZvcmNlTWF4VmVyc2lvbnMgPSBhc3luYyAoe1xuICBwYXlsb2FkLFxuICBtYXgsXG4gIGNvbGxlY3Rpb24sXG4gIGdsb2JhbCxcbiAgaWQsXG4gIHJlcSxcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgZW50aXR5VHlwZSA9IGNvbGxlY3Rpb24gPyAnY29sbGVjdGlvbicgOiAnZ2xvYmFsJztcbiAgY29uc3Qgc2x1ZyA9IGNvbGxlY3Rpb24gPyBjb2xsZWN0aW9uLnNsdWcgOiBnbG9iYWw/LnNsdWc7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB3aGVyZTogV2hlcmUgPSB7fTtcbiAgICBsZXQgb2xkZXN0QWxsb3dlZERvYztcblxuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICB3aGVyZS5wYXJlbnQgPSB7XG4gICAgICAgIGVxdWFsczogaWQsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBxdWVyeSA9IGF3YWl0IHBheWxvYWQuZGIuZmluZFZlcnNpb25zKHtcbiAgICAgICAgd2hlcmUsXG4gICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24uc2x1ZyxcbiAgICAgICAgc2tpcDogbWF4LFxuICAgICAgICBzb3J0OiAnLXVwZGF0ZWRBdCcsXG4gICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgICByZXEsXG4gICAgICB9KTtcblxuICAgICAgW29sZGVzdEFsbG93ZWREb2NdID0gcXVlcnkuZG9jcztcbiAgICB9IGVsc2UgaWYgKGdsb2JhbCkge1xuICAgICAgY29uc3QgcXVlcnkgPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRHbG9iYWxWZXJzaW9ucyh7XG4gICAgICAgIHdoZXJlLFxuICAgICAgICBnbG9iYWw6IGdsb2JhbC5zbHVnLFxuICAgICAgICBza2lwOiBtYXgsXG4gICAgICAgIHNvcnQ6ICctdXBkYXRlZEF0JyxcbiAgICAgICAgcmVxLFxuICAgICAgfSk7XG5cbiAgICAgIFtvbGRlc3RBbGxvd2VkRG9jXSA9IHF1ZXJ5LmRvY3M7XG4gICAgfVxuXG4gICAgaWYgKG9sZGVzdEFsbG93ZWREb2M/LnVwZGF0ZWRBdCkge1xuICAgICAgY29uc3QgZGVsZXRlUXVlcnk6IFdoZXJlID0ge1xuICAgICAgICB1cGRhdGVkQXQ6IHtcbiAgICAgICAgICBsZXNzX3RoYW5fZXF1YWw6IG9sZGVzdEFsbG93ZWREb2MudXBkYXRlZEF0LFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgZGVsZXRlUXVlcnkucGFyZW50ID0ge1xuICAgICAgICAgIGVxdWFsczogaWQsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHBheWxvYWQuZGIuZGVsZXRlVmVyc2lvbnMoe1xuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uPy5zbHVnLFxuICAgICAgICB3aGVyZTogZGVsZXRlUXVlcnksXG4gICAgICAgIHJlcSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcGF5bG9hZC5sb2dnZXIuZXJyb3IoYFRoZXJlIHdhcyBhbiBlcnJvciBjbGVhbmluZyB1cCBvbGQgdmVyc2lvbnMgZm9yIHRoZSAke2VudGl0eVR5cGV9ICR7c2x1Z31gKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJlbmZvcmNlTWF4VmVyc2lvbnMiLCJwYXlsb2FkIiwibWF4IiwiY29sbGVjdGlvbiIsImdsb2JhbCIsImlkIiwicmVxIiwiZW50aXR5VHlwZSIsInNsdWciLCJvbGRlc3RBbGxvd2VkRG9jIiwid2hlcmUiLCJxdWVyeSIsImRlbGV0ZVF1ZXJ5IiwiZXJyIiwicGFyZW50IiwiZXF1YWxzIiwiZGIiLCJmaW5kVmVyc2lvbnMiLCJza2lwIiwic29ydCIsInBhZ2luYXRpb24iLCJkb2NzIiwiZmluZEdsb2JhbFZlcnNpb25zIiwidXBkYXRlZEF0IiwibGVzc190aGFuX2VxdWFsIiwiZGVsZXRlVmVyc2lvbnMiLCJsb2dnZXIiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSxPQUFPLElBQU1BO2VBQXFCLG9CQUFBO1lBQ2hDQyxTQUNBQyxLQUNBQyxZQUNBQyxRQUNBQyxJQUNBQyxLQUc0Q0YsU0FEdENHLFlBQ0FDLE1BaUNBQyxtQkE5QkVDLE9BQ0ZELGtCQU9JRSxZQVdBQSxjQXlCUVIsYUFiUlMsYUFrQkRDOzs7O29CQTVEVFosZ0JBQUFBLFNBQ0FDLFlBQUFBLEtBQ0FDLG1CQUFBQSxZQUNBQyxlQUFBQSxRQUNBQyxXQUFBQSxJQUNBQyxZQUFBQTtvQkFFTUMsYUFBYUosYUFBYSxlQUFlO29CQUN6Q0ssT0FBT0wsYUFBYUEsV0FBV0ssSUFBSSxJQUFHSixVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVFJLElBQUk7Ozs7Ozs7OztvQkFHaERFLFFBQWUsQ0FBQzt5QkFHbEJQLFlBQUFBOzs7O29CQUNGTyxNQUFNSSxNQUFNLEdBQUc7d0JBQ2JDLFFBQVFWO29CQUNWO29CQUVjOzt3QkFBTUosUUFBUWUsRUFBRSxDQUFDQyxZQUFZLENBQUM7NEJBQzFDUCxPQUFBQTs0QkFDQVAsWUFBWUEsV0FBV0ssSUFBSTs0QkFDM0JVLE1BQU1oQjs0QkFDTmlCLE1BQU07NEJBQ05DLFlBQVk7NEJBQ1pkLEtBQUFBO3dCQUNGOzs7b0JBUE1LLFFBQVE7MkNBU09BLE1BQU1VLElBQUksTUFBOUJaOzs7Ozs7eUJBQ1FMLFFBQUFBOzs7O29CQUNLOzt3QkFBTUgsUUFBUWUsRUFBRSxDQUFDTSxrQkFBa0IsQ0FBQzs0QkFDaERaLE9BQUFBOzRCQUNBTixRQUFRQSxPQUFPSSxJQUFJOzRCQUNuQlUsTUFBTWhCOzRCQUNOaUIsTUFBTTs0QkFDTmIsS0FBQUE7d0JBQ0Y7OztvQkFOTUssU0FBUTs0Q0FRT0EsT0FBTVUsSUFBSSxNQUE5Qlo7OzsyQkFHQ0Esb0JBQUFBLDhCQUFBQSx3Q0FBQUEsa0JBQWtCYyxTQUFTOzs7O29CQUN2QlgsY0FBcUI7d0JBQ3pCVyxXQUFXOzRCQUNUQyxpQkFBaUJmLGlCQUFpQmMsU0FBUzt3QkFDN0M7b0JBQ0Y7b0JBRUEsSUFBSXBCLFlBQVk7d0JBQ2RTLFlBQVlFLE1BQU0sR0FBRzs0QkFDbkJDLFFBQVFWO3dCQUNWO29CQUNGO29CQUVBOzt3QkFBTUosUUFBUWUsRUFBRSxDQUFDUyxjQUFjLENBQUM7NEJBQzlCdEIsVUFBVSxHQUFFQSxjQUFBQSx3QkFBQUEsa0NBQUFBLFlBQVlLLElBQUk7NEJBQzVCRSxPQUFPRTs0QkFDUE4sS0FBQUE7d0JBQ0Y7OztvQkFKQTs7Ozs7Ozs7b0JBTUtPO29CQUNQWixRQUFReUIsTUFBTSxDQUFDQyxLQUFLLENBQUMsQUFBQyx1REFBb0VuQixPQUFkRCxZQUFXLEtBQVEsT0FBTEM7Ozs7Ozs7Ozs7O0lBRTlGO29CQWhFYVI7OztJQWdFWCJ9