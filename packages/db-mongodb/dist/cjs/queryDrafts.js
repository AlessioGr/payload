"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "queryDrafts", {
    enumerable: true,
    get: function() {
        return queryDrafts;
    }
});
var _database = require("payload/database");
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
var queryDrafts = function() {
    var _queryDrafts = _async_to_generator(function(param) {
        var collection, where, page, limit, sortArg, locale, pagination, _param_req, req, VersionModel, collectionConfig, options, versionQuery, hasNearConstraint, constraints, sort, aggregate, result, useEstimatedCount, constraints1, aggregatePaginateOptions, docs;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, where = param.where, page = param.page, limit = param.limit, sortArg = param.sort, locale = param.locale, pagination = param.pagination, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    VersionModel = this.versions[collection];
                    collectionConfig = this.payload.collections[collection].config;
                    options = (0, _withSession.withSession)(this, req.transactionID);
                    return [
                        4,
                        VersionModel.buildQuery({
                            where: where,
                            locale: locale,
                            payload: this.payload
                        })
                    ];
                case 1:
                    versionQuery = _state.sent();
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
                            sort: sortArg || collectionConfig.defaultSort,
                            fields: collectionConfig.fields,
                            timestamps: true,
                            config: this.payload.config,
                            locale: locale
                        });
                    }
                    aggregate = VersionModel.aggregate([
                        // Sort so that newest are first
                        {
                            $sort: {
                                updatedAt: -1
                            }
                        },
                        // Group by parent ID, and take the first of each
                        {
                            $group: {
                                _id: "$parent",
                                version: {
                                    $first: "$version"
                                },
                                updatedAt: {
                                    $first: "$updatedAt"
                                },
                                createdAt: {
                                    $first: "$createdAt"
                                }
                            }
                        },
                        // Filter based on incoming query
                        {
                            $match: versionQuery
                        }
                    ], _object_spread_props(_object_spread({}, options), {
                        allowDiskUse: true
                    }));
                    if (!pagination) return [
                        3,
                        3
                    ];
                    if (where) {
                        constraints1 = (0, _database.flattenWhereToOperators)(where);
                        useEstimatedCount = constraints1.some(function(prop) {
                            return Object.keys(prop).some(function(key) {
                                return key === "near";
                            });
                        });
                    }
                    aggregatePaginateOptions = {
                        page: page,
                        limit: limit,
                        lean: true,
                        leanWithId: true,
                        useEstimatedCount: useEstimatedCount,
                        pagination: pagination,
                        useCustomCountFn: pagination ? undefined : function() {
                            return Promise.resolve(1);
                        },
                        useFacet: this.connectOptions.useFacet,
                        options: _object_spread_props(_object_spread({}, options), {
                            limit: limit
                        }),
                        sort: sort
                    };
                    return [
                        4,
                        VersionModel.aggregatePaginate(aggregate, aggregatePaginateOptions)
                    ];
                case 2:
                    result = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    result = aggregate.exec();
                    _state.label = 4;
                case 4:
                    docs = JSON.parse(JSON.stringify(result.docs));
                    return [
                        2,
                        _object_spread_props(_object_spread({}, result), {
                            docs: docs.map(function(doc) {
                                // eslint-disable-next-line no-param-reassign
                                doc = _object_spread_props(_object_spread({
                                    _id: doc._id,
                                    id: doc._id
                                }, doc.version), {
                                    updatedAt: doc.updatedAt,
                                    createdAt: doc.createdAt
                                });
                                return (0, _sanitizeInternalFields.default)(doc);
                            })
                        })
                    ];
            }
        });
    });
    function queryDrafts(_) {
        return _queryDrafts.apply(this, arguments);
    }
    return queryDrafts;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyeURyYWZ0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFBhZ2luYXRlT3B0aW9ucyB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB0eXBlIHsgUXVlcnlEcmFmdHMgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCB7IGZsYXR0ZW5XaGVyZVRvT3BlcmF0b3JzIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyBmcm9tICcuL3V0aWxpdGllcy9zYW5pdGl6ZUludGVybmFsRmllbGRzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IE1vbmdvb3NlQWRhcHRlciB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYnVpbGRTb3J0UGFyYW0gfSBmcm9tICcuL3F1ZXJpZXMvYnVpbGRTb3J0UGFyYW0nO1xuaW1wb3J0IHsgd2l0aFNlc3Npb24gfSBmcm9tICcuL3dpdGhTZXNzaW9uJztcblxudHlwZSBBZ2dyZWdhdGVWZXJzaW9uPFQ+ID0ge1xuICBfaWQ6IHN0cmluZztcbiAgdmVyc2lvbjogVDtcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5RHJhZnRzOiBRdWVyeURyYWZ0cyA9IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5RHJhZnRzPFQ+KFxuICB0aGlzOiBNb25nb29zZUFkYXB0ZXIsXG4gIHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIHdoZXJlLFxuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgc29ydDogc29ydEFyZyxcbiAgICBsb2NhbGUsXG4gICAgcGFnaW5hdGlvbixcbiAgICByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgfSxcbikge1xuICBjb25zdCBWZXJzaW9uTW9kZWwgPSB0aGlzLnZlcnNpb25zW2NvbGxlY3Rpb25dO1xuICBjb25zdCBjb2xsZWN0aW9uQ29uZmlnID0gdGhpcy5wYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25dLmNvbmZpZztcbiAgY29uc3Qgb3B0aW9ucyA9IHdpdGhTZXNzaW9uKHRoaXMsIHJlcS50cmFuc2FjdGlvbklEKTtcblxuICBjb25zdCB2ZXJzaW9uUXVlcnkgPSBhd2FpdCBWZXJzaW9uTW9kZWwuYnVpbGRRdWVyeSh7XG4gICAgd2hlcmUsXG4gICAgbG9jYWxlLFxuICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCxcbiAgfSk7XG5cbiAgbGV0IGhhc05lYXJDb25zdHJhaW50ID0gZmFsc2U7XG5cbiAgaWYgKHdoZXJlKSB7XG4gICAgY29uc3QgY29uc3RyYWludHMgPSBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyh3aGVyZSk7XG4gICAgaGFzTmVhckNvbnN0cmFpbnQgPSBjb25zdHJhaW50cy5zb21lKChwcm9wKSA9PiBPYmplY3Qua2V5cyhwcm9wKS5zb21lKChrZXkpID0+IGtleSA9PT0gJ25lYXInKSk7XG4gIH1cblxuICBsZXQgc29ydDtcbiAgaWYgKCFoYXNOZWFyQ29uc3RyYWludCkge1xuICAgIHNvcnQgPSBidWlsZFNvcnRQYXJhbSh7XG4gICAgICBzb3J0OiBzb3J0QXJnIHx8IGNvbGxlY3Rpb25Db25maWcuZGVmYXVsdFNvcnQsXG4gICAgICBmaWVsZHM6IGNvbGxlY3Rpb25Db25maWcuZmllbGRzLFxuICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICAgIGNvbmZpZzogdGhpcy5wYXlsb2FkLmNvbmZpZyxcbiAgICAgIGxvY2FsZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFnZ3JlZ2F0ZSA9IFZlcnNpb25Nb2RlbC5hZ2dyZWdhdGU8QWdncmVnYXRlVmVyc2lvbjxUPj4oXG4gICAgW1xuICAgICAgLy8gU29ydCBzbyB0aGF0IG5ld2VzdCBhcmUgZmlyc3RcbiAgICAgIHsgJHNvcnQ6IHsgdXBkYXRlZEF0OiAtMSB9IH0sXG4gICAgICAvLyBHcm91cCBieSBwYXJlbnQgSUQsIGFuZCB0YWtlIHRoZSBmaXJzdCBvZiBlYWNoXG4gICAgICB7XG4gICAgICAgICRncm91cDoge1xuICAgICAgICAgIF9pZDogJyRwYXJlbnQnLFxuICAgICAgICAgIHZlcnNpb246IHsgJGZpcnN0OiAnJHZlcnNpb24nIH0sXG4gICAgICAgICAgdXBkYXRlZEF0OiB7ICRmaXJzdDogJyR1cGRhdGVkQXQnIH0sXG4gICAgICAgICAgY3JlYXRlZEF0OiB7ICRmaXJzdDogJyRjcmVhdGVkQXQnIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gRmlsdGVyIGJhc2VkIG9uIGluY29taW5nIHF1ZXJ5XG4gICAgICB7ICRtYXRjaDogdmVyc2lvblF1ZXJ5IH0sXG4gICAgXSxcbiAgICB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgYWxsb3dEaXNrVXNlOiB0cnVlLFxuICAgIH0sXG4gICk7XG5cbiAgbGV0IHJlc3VsdDtcblxuICBpZiAocGFnaW5hdGlvbikge1xuICAgIGxldCB1c2VFc3RpbWF0ZWRDb3VudDtcblxuICAgIGlmICh3aGVyZSkge1xuICAgICAgY29uc3QgY29uc3RyYWludHMgPSBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyh3aGVyZSk7XG4gICAgICB1c2VFc3RpbWF0ZWRDb3VudCA9IGNvbnN0cmFpbnRzLnNvbWUoKHByb3ApID0+IE9iamVjdC5rZXlzKHByb3ApLnNvbWUoKGtleSkgPT4ga2V5ID09PSAnbmVhcicpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZ2dyZWdhdGVQYWdpbmF0ZU9wdGlvbnM6IFBhZ2luYXRlT3B0aW9ucyA9IHtcbiAgICAgIHBhZ2UsXG4gICAgICBsaW1pdCxcbiAgICAgIGxlYW46IHRydWUsXG4gICAgICBsZWFuV2l0aElkOiB0cnVlLFxuICAgICAgdXNlRXN0aW1hdGVkQ291bnQsXG4gICAgICBwYWdpbmF0aW9uLFxuICAgICAgdXNlQ3VzdG9tQ291bnRGbjogcGFnaW5hdGlvbiA/IHVuZGVmaW5lZCA6ICgpID0+IFByb21pc2UucmVzb2x2ZSgxKSxcbiAgICAgIHVzZUZhY2V0OiB0aGlzLmNvbm5lY3RPcHRpb25zLnVzZUZhY2V0LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBsaW1pdCxcbiAgICAgIH0sXG4gICAgICBzb3J0LFxuICAgIH07XG5cbiAgICByZXN1bHQgPSBhd2FpdCBWZXJzaW9uTW9kZWwuYWdncmVnYXRlUGFnaW5hdGUoXG4gICAgICBhZ2dyZWdhdGUsXG4gICAgICBhZ2dyZWdhdGVQYWdpbmF0ZU9wdGlvbnMsXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBhZ2dyZWdhdGUuZXhlYygpO1xuICB9XG5cbiAgY29uc3QgZG9jcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRvY3MpKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnJlc3VsdCxcbiAgICBkb2NzOiBkb2NzLm1hcCgoZG9jKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGRvYyA9IHtcbiAgICAgICAgX2lkOiBkb2MuX2lkLFxuICAgICAgICBpZDogZG9jLl9pZCxcbiAgICAgICAgLi4uZG9jLnZlcnNpb24sXG4gICAgICAgIHVwZGF0ZWRBdDogZG9jLnVwZGF0ZWRBdCxcbiAgICAgICAgY3JlYXRlZEF0OiBkb2MuY3JlYXRlZEF0LFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHNhbml0aXplSW50ZXJuYWxGaWVsZHMoZG9jKTtcbiAgICB9KSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsicXVlcnlEcmFmdHMiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJwYWdlIiwibGltaXQiLCJzb3J0QXJnIiwibG9jYWxlIiwicGFnaW5hdGlvbiIsInJlcSIsIlZlcnNpb25Nb2RlbCIsImNvbGxlY3Rpb25Db25maWciLCJvcHRpb25zIiwidmVyc2lvblF1ZXJ5IiwiaGFzTmVhckNvbnN0cmFpbnQiLCJjb25zdHJhaW50cyIsInNvcnQiLCJhZ2dyZWdhdGUiLCJyZXN1bHQiLCJ1c2VFc3RpbWF0ZWRDb3VudCIsImFnZ3JlZ2F0ZVBhZ2luYXRlT3B0aW9ucyIsImRvY3MiLCJ2ZXJzaW9ucyIsInBheWxvYWQiLCJjb2xsZWN0aW9ucyIsImNvbmZpZyIsIndpdGhTZXNzaW9uIiwidHJhbnNhY3Rpb25JRCIsImJ1aWxkUXVlcnkiLCJmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyIsInNvbWUiLCJwcm9wIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImJ1aWxkU29ydFBhcmFtIiwiZGVmYXVsdFNvcnQiLCJmaWVsZHMiLCJ0aW1lc3RhbXBzIiwiJHNvcnQiLCJ1cGRhdGVkQXQiLCIkZ3JvdXAiLCJfaWQiLCJ2ZXJzaW9uIiwiJGZpcnN0IiwiY3JlYXRlZEF0IiwiJG1hdGNoIiwiYWxsb3dEaXNrVXNlIiwibGVhbiIsImxlYW5XaXRoSWQiLCJ1c2VDdXN0b21Db3VudEZuIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1c2VGYWNldCIsImNvbm5lY3RPcHRpb25zIiwiYWdncmVnYXRlUGFnaW5hdGUiLCJleGVjIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibWFwIiwiZG9jIiwiaWQiLCJzYW5pdGl6ZUludGVybmFsRmllbGRzIl0sIm1hcHBpbmdzIjoiOzs7OytCQWdCYUE7OztlQUFBQTs7O3dCQWQyQjs2RUFDTDs4QkFHSjsyQkFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTckIsSUFBTUE7UUFBMENBLGVBQWYsb0JBQUEsU0FFdEMsS0FTQztZQVJDQyxZQUNBQyxPQUNBQyxNQUNBQyxPQUNNQyxT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