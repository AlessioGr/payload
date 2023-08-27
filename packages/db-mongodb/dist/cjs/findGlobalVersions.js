"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findGlobalVersions", {
    enumerable: true,
    get: function() {
        return findGlobalVersions;
    }
});
var _database = require("payload/database");
var _versions = require("payload/versions");
var _sanitizeInternalFields = /*#__PURE__*/ _interop_require_default(require("./utilities/sanitizeInternalFields"));
var _buildSortParam = require("./queries/buildSortParam");
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
var findGlobalVersions = function() {
    var _findGlobalVersions = _async_to_generator(function(param) {
        var global, where, page, limit, sortArg, locale, pagination, skip, _param_req, req, Model, versionFields, options, hasNearConstraint, constraints, sort, query, paginationOptions, result, docs;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    global = param.global, where = param.where, page = param.page, limit = param.limit, sortArg = param.sort, locale = param.locale, pagination = param.pagination, skip = param.skip, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.versions[global];
                    versionFields = (0, _versions.buildVersionGlobalFields)(this.payload.globals.config.find(function(param) {
                        var slug = param.slug;
                        return slug === global;
                    }));
                    options = _object_spread_props(_object_spread({}, (0, _withSession.withSession)(this, req.transactionID)), {
                        skip: skip,
                        limit: limit
                    });
                    hasNearConstraint = false;
                    if (where) {
                        constraints = (0, _database.flattenWhereToOperators)(where);
                        hasNearConstraint = constraints.some(function(prop) {
                            return Object.keys(prop).some(function(key) {
                                return key === "near";
                            });
                        });
                    }
                    if (!hasNearConstraint) {
                        sort = (0, _buildSortParam.buildSortParam)({
                            sort: sortArg || "-updatedAt",
                            fields: versionFields,
                            timestamps: true,
                            config: this.payload.config,
                            locale: locale
                        });
                    }
                    return [
                        4,
                        Model.buildQuery({
                            payload: this.payload,
                            locale: locale,
                            where: where,
                            globalSlug: global
                        })
                    ];
                case 1:
                    query = _state.sent();
                    paginationOptions = {
                        page: page,
                        sort: sort,
                        lean: true,
                        leanWithId: true,
                        pagination: pagination,
                        offset: skip,
                        useEstimatedCount: hasNearConstraint,
                        forceCountFn: hasNearConstraint,
                        options: options
                    };
                    if (limit > 0) {
                        paginationOptions.limit = limit;
                        // limit must also be set here, it's ignored when pagination is false
                        paginationOptions.options.limit = limit;
                    }
                    return [
                        4,
                        Model.paginate(query, paginationOptions)
                    ];
                case 2:
                    result = _state.sent();
                    docs = JSON.parse(JSON.stringify(result.docs));
                    return [
                        2,
                        _object_spread_props(_object_spread({}, result), {
                            docs: docs.map(function(doc) {
                                // eslint-disable-next-line no-param-reassign
                                doc.id = doc._id;
                                return (0, _sanitizeInternalFields.default)(doc);
                            })
                        })
                    ];
            }
        });
    });
    function findGlobalVersions(_) {
        return _findGlobalVersions.apply(this, arguments);
    }
    return findGlobalVersions;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maW5kR2xvYmFsVmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnaW5hdGVPcHRpb25zIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHR5cGUgeyBGaW5kR2xvYmFsVmVyc2lvbnMgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCB7IGZsYXR0ZW5XaGVyZVRvT3BlcmF0b3JzIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgeyBidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMgfSBmcm9tICdwYXlsb2FkL3ZlcnNpb25zJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyBmcm9tICcuL3V0aWxpdGllcy9zYW5pdGl6ZUludGVybmFsRmllbGRzJztcbmltcG9ydCB0eXBlIHsgTW9uZ29vc2VBZGFwdGVyIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBidWlsZFNvcnRQYXJhbSB9IGZyb20gJy4vcXVlcmllcy9idWlsZFNvcnRQYXJhbSc7XG5pbXBvcnQgeyB3aXRoU2Vzc2lvbiB9IGZyb20gJy4vd2l0aFNlc3Npb24nO1xuXG5leHBvcnQgY29uc3QgZmluZEdsb2JhbFZlcnNpb25zOiBGaW5kR2xvYmFsVmVyc2lvbnMgPSBhc3luYyBmdW5jdGlvbiBmaW5kR2xvYmFsVmVyc2lvbnMoXG4gIHRoaXM6IE1vbmdvb3NlQWRhcHRlcixcbiAge1xuICAgIGdsb2JhbCxcbiAgICB3aGVyZSxcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIHNvcnQ6IHNvcnRBcmcsXG4gICAgbG9jYWxlLFxuICAgIHBhZ2luYXRpb24sXG4gICAgc2tpcCxcbiAgICByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgfSxcbikge1xuICBjb25zdCBNb2RlbCA9IHRoaXMudmVyc2lvbnNbZ2xvYmFsXTtcbiAgY29uc3QgdmVyc2lvbkZpZWxkcyA9IGJ1aWxkVmVyc2lvbkdsb2JhbEZpZWxkcyhcbiAgICB0aGlzLnBheWxvYWQuZ2xvYmFscy5jb25maWcuZmluZCgoeyBzbHVnIH0pID0+IHNsdWcgPT09IGdsb2JhbCksXG4gICk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ud2l0aFNlc3Npb24odGhpcywgcmVxLnRyYW5zYWN0aW9uSUQpLFxuICAgIHNraXAsXG4gICAgbGltaXQsXG4gIH07XG5cbiAgbGV0IGhhc05lYXJDb25zdHJhaW50ID0gZmFsc2U7XG5cbiAgaWYgKHdoZXJlKSB7XG4gICAgY29uc3QgY29uc3RyYWludHMgPSBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyh3aGVyZSk7XG4gICAgaGFzTmVhckNvbnN0cmFpbnQgPSBjb25zdHJhaW50cy5zb21lKChwcm9wKSA9PiBPYmplY3Qua2V5cyhwcm9wKS5zb21lKChrZXkpID0+IGtleSA9PT0gJ25lYXInKSk7XG4gIH1cblxuICBsZXQgc29ydDtcbiAgaWYgKCFoYXNOZWFyQ29uc3RyYWludCkge1xuICAgIHNvcnQgPSBidWlsZFNvcnRQYXJhbSh7XG4gICAgICBzb3J0OiBzb3J0QXJnIHx8ICctdXBkYXRlZEF0JyxcbiAgICAgIGZpZWxkczogdmVyc2lvbkZpZWxkcyxcbiAgICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgICBjb25maWc6IHRoaXMucGF5bG9hZC5jb25maWcsXG4gICAgICBsb2NhbGUsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBxdWVyeSA9IGF3YWl0IE1vZGVsLmJ1aWxkUXVlcnkoe1xuICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCxcbiAgICBsb2NhbGUsXG4gICAgd2hlcmUsXG4gICAgZ2xvYmFsU2x1ZzogZ2xvYmFsLFxuICB9KTtcblxuICBjb25zdCBwYWdpbmF0aW9uT3B0aW9uczogUGFnaW5hdGVPcHRpb25zID0ge1xuICAgIHBhZ2UsXG4gICAgc29ydCxcbiAgICBsZWFuOiB0cnVlLFxuICAgIGxlYW5XaXRoSWQ6IHRydWUsXG4gICAgcGFnaW5hdGlvbixcbiAgICBvZmZzZXQ6IHNraXAsXG4gICAgdXNlRXN0aW1hdGVkQ291bnQ6IGhhc05lYXJDb25zdHJhaW50LFxuICAgIGZvcmNlQ291bnRGbjogaGFzTmVhckNvbnN0cmFpbnQsXG4gICAgb3B0aW9ucyxcbiAgfTtcblxuICBpZiAobGltaXQgPiAwKSB7XG4gICAgcGFnaW5hdGlvbk9wdGlvbnMubGltaXQgPSBsaW1pdDtcbiAgICAvLyBsaW1pdCBtdXN0IGFsc28gYmUgc2V0IGhlcmUsIGl0J3MgaWdub3JlZCB3aGVuIHBhZ2luYXRpb24gaXMgZmFsc2VcbiAgICBwYWdpbmF0aW9uT3B0aW9ucy5vcHRpb25zLmxpbWl0ID0gbGltaXQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBNb2RlbC5wYWdpbmF0ZShxdWVyeSwgcGFnaW5hdGlvbk9wdGlvbnMpO1xuICBjb25zdCBkb2NzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQuZG9jcykpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVzdWx0LFxuICAgIGRvY3M6IGRvY3MubWFwKChkb2MpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgZG9jLmlkID0gZG9jLl9pZDtcbiAgICAgIHJldHVybiBzYW5pdGl6ZUludGVybmFsRmllbGRzKGRvYyk7XG4gICAgfSksXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImZpbmRHbG9iYWxWZXJzaW9ucyIsImdsb2JhbCIsIndoZXJlIiwicGFnZSIsImxpbWl0Iiwic29ydEFyZyIsImxvY2FsZSIsInBhZ2luYXRpb24iLCJza2lwIiwicmVxIiwiTW9kZWwiLCJ2ZXJzaW9uRmllbGRzIiwib3B0aW9ucyIsImhhc05lYXJDb25zdHJhaW50IiwiY29uc3RyYWludHMiLCJzb3J0IiwicXVlcnkiLCJwYWdpbmF0aW9uT3B0aW9ucyIsInJlc3VsdCIsImRvY3MiLCJ2ZXJzaW9ucyIsImJ1aWxkVmVyc2lvbkdsb2JhbEZpZWxkcyIsInBheWxvYWQiLCJnbG9iYWxzIiwiY29uZmlnIiwiZmluZCIsInNsdWciLCJ3aXRoU2Vzc2lvbiIsInRyYW5zYWN0aW9uSUQiLCJmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyIsInNvbWUiLCJwcm9wIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImJ1aWxkU29ydFBhcmFtIiwiZmllbGRzIiwidGltZXN0YW1wcyIsImJ1aWxkUXVlcnkiLCJnbG9iYWxTbHVnIiwibGVhbiIsImxlYW5XaXRoSWQiLCJvZmZzZXQiLCJ1c2VFc3RpbWF0ZWRDb3VudCIsImZvcmNlQ291bnRGbiIsInBhZ2luYXRlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibWFwIiwiZG9jIiwiaWQiLCJfaWQiLCJzYW5pdGl6ZUludGVybmFsRmllbGRzIl0sIm1hcHBpbmdzIjoiOzs7OytCQVVhQTs7O2VBQUFBOzs7d0JBUjJCO3dCQUNDOzZFQUVOOzhCQUVKOzJCQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFNQTtRQUF3REEsc0JBQWYsb0JBQUEsU0FFcEQsS0FVQztZQVRDQyxRQUNBQyxPQUNBQyxNQUNBQyxPQUNNQyxTQUNOQyxRQUNBQyxZQUNBQyxrQkFDQUMsS0FHSUMsT0FDQUMsZUFHQUMsU0FNRkMsbUJBR0lDLGFBSUpDLE1BV0VDLE9BT0FDLG1CQWtCQUMsUUFDQUM7Ozs7b0JBakVKbEIsU0FERixNQUNFQSxRQUNBQyxRQUZGLE1BRUVBLE9BQ0FDLE9BSEYsTUFHRUEsTUFDQUMsUUFKRixNQUlFQSxPQUNNQyxVQUxSLE1BS0VVLE1BQ0FULFNBTkYsTUFNRUEsUUFDQUMsYUFQRixNQU9FQSxZQUNBQyxPQVJGLE1BUUVBLG1CQVJGLE1BU0VDLEtBQUFBLDhCQUFNLENBQUM7b0JBR0hDLFFBQVEsSUFBSSxDQUFDVSxRQUFRLENBQUNuQixPQUFPO29CQUM3QlUsZ0JBQWdCVSxJQUFBQSxrQ0FBd0IsRUFDNUMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUM7NEJBQUdDLGFBQUFBOytCQUFXQSxTQUFTekI7O29CQUVwRFcsVUFBVSx3Q0FDWGUsSUFBQUEsd0JBQVcsRUFBQyxJQUFJLEVBQUVsQixJQUFJbUIsYUFBYTt3QkFDdENwQixNQUFBQTt3QkFDQUosT0FBQUE7O29CQUdFUyxvQkFBb0I7b0JBRXhCLElBQUlYLE9BQU87d0JBQ0hZLGNBQWNlLElBQUFBLGlDQUF1QixFQUFDM0I7d0JBQzVDVyxvQkFBb0JDLFlBQVlnQixJQUFJLENBQUMsU0FBQ0M7bUNBQVNDLE9BQU9DLElBQUksQ0FBQ0YsTUFBTUQsSUFBSSxDQUFDLFNBQUNJO3VDQUFRQSxRQUFROzs7b0JBQ3pGO29CQUdBLElBQUksQ0FBQ3JCLG1CQUFtQjt3QkFDdEJFLE9BQU9vQixJQUFBQSw4QkFBYyxFQUFDOzRCQUNwQnBCLE1BQU1WLFdBQVc7NEJBQ2pCK0IsUUFBUXpCOzRCQUNSMEIsWUFBWTs0QkFDWmIsUUFBUSxJQUFJLENBQUNGLE9BQU8sQ0FBQ0UsTUFBTTs0QkFDM0JsQixRQUFBQTt3QkFDRjtvQkFDRjtvQkFFYzs7d0JBQU1JLE1BQU00QixVQUFVLENBQUM7NEJBQ25DaEIsU0FBUyxJQUFJLENBQUNBLE9BQU87NEJBQ3JCaEIsUUFBQUE7NEJBQ0FKLE9BQUFBOzRCQUNBcUMsWUFBWXRDO3dCQUNkOzs7b0JBTE1lLFFBQVE7b0JBT1JDLG9CQUFxQzt3QkFDekNkLE1BQUFBO3dCQUNBWSxNQUFBQTt3QkFDQXlCLE1BQU07d0JBQ05DLFlBQVk7d0JBQ1psQyxZQUFBQTt3QkFDQW1DLFFBQVFsQzt3QkFDUm1DLG1CQUFtQjlCO3dCQUNuQitCLGNBQWMvQjt3QkFDZEQsU0FBQUE7b0JBQ0Y7b0JBRUEsSUFBSVIsUUFBUSxHQUFHO3dCQUNiYSxrQkFBa0JiLEtBQUssR0FBR0E7d0JBQzFCLHFFQUFxRTt3QkFDckVhLGtCQUFrQkwsT0FBTyxDQUFDUixLQUFLLEdBQUdBO29CQUNwQztvQkFFZTs7d0JBQU1NLE1BQU1tQyxRQUFRLENBQUM3QixPQUFPQzs7O29CQUFyQ0MsU0FBUztvQkFDVEMsT0FBTzJCLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDOUIsT0FBT0MsSUFBSTtvQkFFbEQ7O3dCQUFPLHdDQUNGRDs0QkFDSEMsTUFBTUEsS0FBSzhCLEdBQUcsQ0FBQyxTQUFDQztnQ0FDZCw2Q0FBNkM7Z0NBQzdDQSxJQUFJQyxFQUFFLEdBQUdELElBQUlFLEdBQUc7Z0NBQ2hCLE9BQU9DLElBQUFBLCtCQUFzQixFQUFDSDs0QkFDaEM7Ozs7O0lBRUo7YUE5RXFFbEQsbUJBRW5FLENBVUM7ZUFaa0VBOztXQUFBQSJ9