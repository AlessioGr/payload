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
import { flattenWhereToOperators } from "payload/database";
import sanitizeInternalFields from "./utilities/sanitizeInternalFields";
import { buildSortParam } from "./queries/buildSortParam";
import { withSession } from "./withSession";
export var queryDrafts = function() {
    var _queryDrafts = _async_to_generator(function(param) {
        var collection, where, page, limit, sortArg, locale, pagination, _param_req, req, VersionModel, collectionConfig, options, versionQuery, hasNearConstraint, constraints, sort, aggregate, result, useEstimatedCount, constraints1, aggregatePaginateOptions, docs;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, where = param.where, page = param.page, limit = param.limit, sortArg = param.sort, locale = param.locale, pagination = param.pagination, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    VersionModel = this.versions[collection];
                    collectionConfig = this.payload.collections[collection].config;
                    options = withSession(this, req.transactionID);
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
                        constraints = flattenWhereToOperators(where);
                        hasNearConstraint = constraints.some(function(prop) {
                            return Object.keys(prop).some(function(key) {
                                return key === "near";
                            });
                        });
                    }
                    if (!hasNearConstraint) {
                        sort = buildSortParam({
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
                        constraints1 = flattenWhereToOperators(where);
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
                                return sanitizeInternalFields(doc);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyeURyYWZ0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFBhZ2luYXRlT3B0aW9ucyB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB0eXBlIHsgUXVlcnlEcmFmdHMgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCB7IGZsYXR0ZW5XaGVyZVRvT3BlcmF0b3JzIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyBmcm9tICcuL3V0aWxpdGllcy9zYW5pdGl6ZUludGVybmFsRmllbGRzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IE1vbmdvb3NlQWRhcHRlciB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYnVpbGRTb3J0UGFyYW0gfSBmcm9tICcuL3F1ZXJpZXMvYnVpbGRTb3J0UGFyYW0nO1xuaW1wb3J0IHsgd2l0aFNlc3Npb24gfSBmcm9tICcuL3dpdGhTZXNzaW9uJztcblxudHlwZSBBZ2dyZWdhdGVWZXJzaW9uPFQ+ID0ge1xuICBfaWQ6IHN0cmluZztcbiAgdmVyc2lvbjogVDtcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5RHJhZnRzOiBRdWVyeURyYWZ0cyA9IGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5RHJhZnRzPFQ+KFxuICB0aGlzOiBNb25nb29zZUFkYXB0ZXIsXG4gIHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIHdoZXJlLFxuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgc29ydDogc29ydEFyZyxcbiAgICBsb2NhbGUsXG4gICAgcGFnaW5hdGlvbixcbiAgICByZXEgPSB7fSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgfSxcbikge1xuICBjb25zdCBWZXJzaW9uTW9kZWwgPSB0aGlzLnZlcnNpb25zW2NvbGxlY3Rpb25dO1xuICBjb25zdCBjb2xsZWN0aW9uQ29uZmlnID0gdGhpcy5wYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25dLmNvbmZpZztcbiAgY29uc3Qgb3B0aW9ucyA9IHdpdGhTZXNzaW9uKHRoaXMsIHJlcS50cmFuc2FjdGlvbklEKTtcblxuICBjb25zdCB2ZXJzaW9uUXVlcnkgPSBhd2FpdCBWZXJzaW9uTW9kZWwuYnVpbGRRdWVyeSh7XG4gICAgd2hlcmUsXG4gICAgbG9jYWxlLFxuICAgIHBheWxvYWQ6IHRoaXMucGF5bG9hZCxcbiAgfSk7XG5cbiAgbGV0IGhhc05lYXJDb25zdHJhaW50ID0gZmFsc2U7XG5cbiAgaWYgKHdoZXJlKSB7XG4gICAgY29uc3QgY29uc3RyYWludHMgPSBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyh3aGVyZSk7XG4gICAgaGFzTmVhckNvbnN0cmFpbnQgPSBjb25zdHJhaW50cy5zb21lKChwcm9wKSA9PiBPYmplY3Qua2V5cyhwcm9wKS5zb21lKChrZXkpID0+IGtleSA9PT0gJ25lYXInKSk7XG4gIH1cblxuICBsZXQgc29ydDtcbiAgaWYgKCFoYXNOZWFyQ29uc3RyYWludCkge1xuICAgIHNvcnQgPSBidWlsZFNvcnRQYXJhbSh7XG4gICAgICBzb3J0OiBzb3J0QXJnIHx8IGNvbGxlY3Rpb25Db25maWcuZGVmYXVsdFNvcnQsXG4gICAgICBmaWVsZHM6IGNvbGxlY3Rpb25Db25maWcuZmllbGRzLFxuICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICAgIGNvbmZpZzogdGhpcy5wYXlsb2FkLmNvbmZpZyxcbiAgICAgIGxvY2FsZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFnZ3JlZ2F0ZSA9IFZlcnNpb25Nb2RlbC5hZ2dyZWdhdGU8QWdncmVnYXRlVmVyc2lvbjxUPj4oXG4gICAgW1xuICAgICAgLy8gU29ydCBzbyB0aGF0IG5ld2VzdCBhcmUgZmlyc3RcbiAgICAgIHsgJHNvcnQ6IHsgdXBkYXRlZEF0OiAtMSB9IH0sXG4gICAgICAvLyBHcm91cCBieSBwYXJlbnQgSUQsIGFuZCB0YWtlIHRoZSBmaXJzdCBvZiBlYWNoXG4gICAgICB7XG4gICAgICAgICRncm91cDoge1xuICAgICAgICAgIF9pZDogJyRwYXJlbnQnLFxuICAgICAgICAgIHZlcnNpb246IHsgJGZpcnN0OiAnJHZlcnNpb24nIH0sXG4gICAgICAgICAgdXBkYXRlZEF0OiB7ICRmaXJzdDogJyR1cGRhdGVkQXQnIH0sXG4gICAgICAgICAgY3JlYXRlZEF0OiB7ICRmaXJzdDogJyRjcmVhdGVkQXQnIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gRmlsdGVyIGJhc2VkIG9uIGluY29taW5nIHF1ZXJ5XG4gICAgICB7ICRtYXRjaDogdmVyc2lvblF1ZXJ5IH0sXG4gICAgXSxcbiAgICB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgYWxsb3dEaXNrVXNlOiB0cnVlLFxuICAgIH0sXG4gICk7XG5cbiAgbGV0IHJlc3VsdDtcblxuICBpZiAocGFnaW5hdGlvbikge1xuICAgIGxldCB1c2VFc3RpbWF0ZWRDb3VudDtcblxuICAgIGlmICh3aGVyZSkge1xuICAgICAgY29uc3QgY29uc3RyYWludHMgPSBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyh3aGVyZSk7XG4gICAgICB1c2VFc3RpbWF0ZWRDb3VudCA9IGNvbnN0cmFpbnRzLnNvbWUoKHByb3ApID0+IE9iamVjdC5rZXlzKHByb3ApLnNvbWUoKGtleSkgPT4ga2V5ID09PSAnbmVhcicpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZ2dyZWdhdGVQYWdpbmF0ZU9wdGlvbnM6IFBhZ2luYXRlT3B0aW9ucyA9IHtcbiAgICAgIHBhZ2UsXG4gICAgICBsaW1pdCxcbiAgICAgIGxlYW46IHRydWUsXG4gICAgICBsZWFuV2l0aElkOiB0cnVlLFxuICAgICAgdXNlRXN0aW1hdGVkQ291bnQsXG4gICAgICBwYWdpbmF0aW9uLFxuICAgICAgdXNlQ3VzdG9tQ291bnRGbjogcGFnaW5hdGlvbiA/IHVuZGVmaW5lZCA6ICgpID0+IFByb21pc2UucmVzb2x2ZSgxKSxcbiAgICAgIHVzZUZhY2V0OiB0aGlzLmNvbm5lY3RPcHRpb25zLnVzZUZhY2V0LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBsaW1pdCxcbiAgICAgIH0sXG4gICAgICBzb3J0LFxuICAgIH07XG5cbiAgICByZXN1bHQgPSBhd2FpdCBWZXJzaW9uTW9kZWwuYWdncmVnYXRlUGFnaW5hdGUoXG4gICAgICBhZ2dyZWdhdGUsXG4gICAgICBhZ2dyZWdhdGVQYWdpbmF0ZU9wdGlvbnMsXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBhZ2dyZWdhdGUuZXhlYygpO1xuICB9XG5cbiAgY29uc3QgZG9jcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRvY3MpKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnJlc3VsdCxcbiAgICBkb2NzOiBkb2NzLm1hcCgoZG9jKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGRvYyA9IHtcbiAgICAgICAgX2lkOiBkb2MuX2lkLFxuICAgICAgICBpZDogZG9jLl9pZCxcbiAgICAgICAgLi4uZG9jLnZlcnNpb24sXG4gICAgICAgIHVwZGF0ZWRBdDogZG9jLnVwZGF0ZWRBdCxcbiAgICAgICAgY3JlYXRlZEF0OiBkb2MuY3JlYXRlZEF0LFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHNhbml0aXplSW50ZXJuYWxGaWVsZHMoZG9jKTtcbiAgICB9KSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiZmxhdHRlbldoZXJlVG9PcGVyYXRvcnMiLCJzYW5pdGl6ZUludGVybmFsRmllbGRzIiwiYnVpbGRTb3J0UGFyYW0iLCJ3aXRoU2Vzc2lvbiIsInF1ZXJ5RHJhZnRzIiwiY29sbGVjdGlvbiIsIndoZXJlIiwicGFnZSIsImxpbWl0Iiwic29ydEFyZyIsImxvY2FsZSIsInBhZ2luYXRpb24iLCJyZXEiLCJWZXJzaW9uTW9kZWwiLCJjb2xsZWN0aW9uQ29uZmlnIiwib3B0aW9ucyIsInZlcnNpb25RdWVyeSIsImhhc05lYXJDb25zdHJhaW50IiwiY29uc3RyYWludHMiLCJzb3J0IiwiYWdncmVnYXRlIiwicmVzdWx0IiwidXNlRXN0aW1hdGVkQ291bnQiLCJhZ2dyZWdhdGVQYWdpbmF0ZU9wdGlvbnMiLCJkb2NzIiwidmVyc2lvbnMiLCJwYXlsb2FkIiwiY29sbGVjdGlvbnMiLCJjb25maWciLCJ0cmFuc2FjdGlvbklEIiwiYnVpbGRRdWVyeSIsInNvbWUiLCJwcm9wIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImRlZmF1bHRTb3J0IiwiZmllbGRzIiwidGltZXN0YW1wcyIsIiRzb3J0IiwidXBkYXRlZEF0IiwiJGdyb3VwIiwiX2lkIiwidmVyc2lvbiIsIiRmaXJzdCIsImNyZWF0ZWRBdCIsIiRtYXRjaCIsImFsbG93RGlza1VzZSIsImxlYW4iLCJsZWFuV2l0aElkIiwidXNlQ3VzdG9tQ291bnRGbiIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidXNlRmFjZXQiLCJjb25uZWN0T3B0aW9ucyIsImFnZ3JlZ2F0ZVBhZ2luYXRlIiwiZXhlYyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm1hcCIsImRvYyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLHVCQUF1QixRQUFRLG1CQUFtQjtBQUMzRCxPQUFPQyw0QkFBNEIscUNBQXFDO0FBR3hFLFNBQVNDLGNBQWMsUUFBUSwyQkFBMkI7QUFDMUQsU0FBU0MsV0FBVyxRQUFRLGdCQUFnQjtBQVM1QyxPQUFP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