"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findVersions", {
    enumerable: true,
    get: function() {
        return findVersions;
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
var findVersions = function() {
    var _findVersions = _async_to_generator(function(param) {
        var collection, where, page, limit, sortArg, locale, pagination, skip, _param_req, req, Model, collectionConfig, options, hasNearConstraint, constraints, sort, query, paginationOptions, result, docs;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, where = param.where, page = param.page, limit = param.limit, sortArg = param.sort, locale = param.locale, pagination = param.pagination, skip = param.skip, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.versions[collection];
                    collectionConfig = this.payload.collections[collection].config;
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
                            fields: collectionConfig.fields,
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
                            where: where
                        })
                    ];
                case 1:
                    query = _state.sent();
                    paginationOptions = {
                        page: page,
                        sort: sort,
                        limit: limit,
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
    function findVersions(_) {
        return _findVersions.apply(this, arguments);
    }
    return findVersions;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maW5kVmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnaW5hdGVPcHRpb25zIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHR5cGUgeyBGaW5kVmVyc2lvbnMgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCB7IGZsYXR0ZW5XaGVyZVRvT3BlcmF0b3JzIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHNhbml0aXplSW50ZXJuYWxGaWVsZHMgZnJvbSAnLi91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcyc7XG5pbXBvcnQgdHlwZSB7IE1vbmdvb3NlQWRhcHRlciB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYnVpbGRTb3J0UGFyYW0gfSBmcm9tICcuL3F1ZXJpZXMvYnVpbGRTb3J0UGFyYW0nO1xuaW1wb3J0IHsgd2l0aFNlc3Npb24gfSBmcm9tICcuL3dpdGhTZXNzaW9uJztcblxuZXhwb3J0IGNvbnN0IGZpbmRWZXJzaW9uczogRmluZFZlcnNpb25zID0gYXN5bmMgZnVuY3Rpb24gZmluZFZlcnNpb25zKFxuICB0aGlzOiBNb25nb29zZUFkYXB0ZXIsXG4gIHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIHdoZXJlLFxuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgc29ydDogc29ydEFyZyxcbiAgICBsb2NhbGUsXG4gICAgcGFnaW5hdGlvbixcbiAgICBza2lwLFxuICAgIHJlcSA9IHt9IGFzIFBheWxvYWRSZXF1ZXN0LFxuICB9LFxuKSB7XG4gIGNvbnN0IE1vZGVsID0gdGhpcy52ZXJzaW9uc1tjb2xsZWN0aW9uXTtcbiAgY29uc3QgY29sbGVjdGlvbkNvbmZpZyA9IHRoaXMucGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uXS5jb25maWc7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ud2l0aFNlc3Npb24odGhpcywgcmVxLnRyYW5zYWN0aW9uSUQpLFxuICAgIHNraXAsXG4gICAgbGltaXQsXG4gIH07XG5cbiAgbGV0IGhhc05lYXJDb25zdHJhaW50ID0gZmFsc2U7XG5cbiAgaWYgKHdoZXJlKSB7XG4gICAgY29uc3QgY29uc3RyYWludHMgPSBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyh3aGVyZSk7XG4gICAgaGFzTmVhckNvbnN0cmFpbnQgPSBjb25zdHJhaW50cy5zb21lKChwcm9wKSA9PiBPYmplY3Qua2V5cyhwcm9wKS5zb21lKChrZXkpID0+IGtleSA9PT0gJ25lYXInKSk7XG4gIH1cblxuICBsZXQgc29ydDtcbiAgaWYgKCFoYXNOZWFyQ29uc3RyYWludCkge1xuICAgIHNvcnQgPSBidWlsZFNvcnRQYXJhbSh7XG4gICAgICBzb3J0OiBzb3J0QXJnIHx8ICctdXBkYXRlZEF0JyxcbiAgICAgIGZpZWxkczogY29sbGVjdGlvbkNvbmZpZy5maWVsZHMsXG4gICAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgICAgY29uZmlnOiB0aGlzLnBheWxvYWQuY29uZmlnLFxuICAgICAgbG9jYWxlLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBNb2RlbC5idWlsZFF1ZXJ5KHtcbiAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQsXG4gICAgbG9jYWxlLFxuICAgIHdoZXJlLFxuICB9KTtcblxuICBjb25zdCBwYWdpbmF0aW9uT3B0aW9uczogUGFnaW5hdGVPcHRpb25zID0ge1xuICAgIHBhZ2UsXG4gICAgc29ydCxcbiAgICBsaW1pdCxcbiAgICBsZWFuOiB0cnVlLFxuICAgIGxlYW5XaXRoSWQ6IHRydWUsXG4gICAgcGFnaW5hdGlvbixcbiAgICBvZmZzZXQ6IHNraXAsXG4gICAgdXNlRXN0aW1hdGVkQ291bnQ6IGhhc05lYXJDb25zdHJhaW50LFxuICAgIGZvcmNlQ291bnRGbjogaGFzTmVhckNvbnN0cmFpbnQsXG4gICAgb3B0aW9ucyxcbiAgfTtcblxuICBpZiAobGltaXQgPiAwKSB7XG4gICAgcGFnaW5hdGlvbk9wdGlvbnMubGltaXQgPSBsaW1pdDtcbiAgICAvLyBsaW1pdCBtdXN0IGFsc28gYmUgc2V0IGhlcmUsIGl0J3MgaWdub3JlZCB3aGVuIHBhZ2luYXRpb24gaXMgZmFsc2VcbiAgICBwYWdpbmF0aW9uT3B0aW9ucy5vcHRpb25zLmxpbWl0ID0gbGltaXQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBNb2RlbC5wYWdpbmF0ZShxdWVyeSwgcGFnaW5hdGlvbk9wdGlvbnMpO1xuICBjb25zdCBkb2NzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQuZG9jcykpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVzdWx0LFxuICAgIGRvY3M6IGRvY3MubWFwKChkb2MpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgZG9jLmlkID0gZG9jLl9pZDtcbiAgICAgIHJldHVybiBzYW5pdGl6ZUludGVybmFsRmllbGRzKGRvYyk7XG4gICAgfSksXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9ucyIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsInBhZ2UiLCJsaW1pdCIsInNvcnRBcmciLCJsb2NhbGUiLCJwYWdpbmF0aW9uIiwic2tpcCIsInJlcSIsIk1vZGVsIiwiY29sbGVjdGlvbkNvbmZpZyIsIm9wdGlvbnMiLCJoYXNOZWFyQ29uc3RyYWludCIsImNvbnN0cmFpbnRzIiwic29ydCIsInF1ZXJ5IiwicGFnaW5hdGlvbk9wdGlvbnMiLCJyZXN1bHQiLCJkb2NzIiwidmVyc2lvbnMiLCJwYXlsb2FkIiwiY29sbGVjdGlvbnMiLCJjb25maWciLCJ3aXRoU2Vzc2lvbiIsInRyYW5zYWN0aW9uSUQiLCJmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyIsInNvbWUiLCJwcm9wIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImJ1aWxkU29ydFBhcmFtIiwiZmllbGRzIiwidGltZXN0YW1wcyIsImJ1aWxkUXVlcnkiLCJsZWFuIiwibGVhbldpdGhJZCIsIm9mZnNldCIsInVzZUVzdGltYXRlZENvdW50IiwiZm9yY2VDb3VudEZuIiwicGFnaW5hdGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJtYXAiLCJkb2MiLCJpZCIsIl9pZCIsInNhbml0aXplSW50ZXJuYWxGaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBU2FBOzs7ZUFBQUE7Ozt3QkFQMkI7NkVBRUw7OEJBRUo7MkJBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQU1BO1FBQTRDQSxnQkFBZixvQkFBQSxTQUV4QyxLQVVDO1lBVENDLFlBQ0FDLE9BQ0FDLE1BQ0FDLE9BQ01DLFNBQ05DLFFBQ0FDLFlBQ0FDLGtCQUNBQyxLQUdJQyxPQUNBQyxrQkFDQUMsU0FNRkMsbUJBR0lDLGFBSUpDLE1BV0VDLE9BTUFDLG1CQW1CQUMsUUFDQUM7Ozs7b0JBL0RKbEIsYUFERixNQUNFQSxZQUNBQyxRQUZGLE1BRUVBLE9BQ0FDLE9BSEYsTUFHRUEsTUFDQUMsUUFKRixNQUlFQSxPQUNNQyxVQUxSLE1BS0VVLE1BQ0FULFNBTkYsTUFNRUEsUUFDQUMsYUFQRixNQU9FQSxZQUNBQyxPQVJGLE1BUUVBLG1CQVJGLE1BU0VDLEtBQUFBLDhCQUFNLENBQUM7b0JBR0hDLFFBQVEsSUFBSSxDQUFDVSxRQUFRLENBQUNuQixXQUFXO29CQUNqQ1UsbUJBQW1CLElBQUksQ0FBQ1UsT0FBTyxDQUFDQyxXQUFXLENBQUNyQixXQUFXLENBQUNzQixNQUFNO29CQUM5RFgsVUFBVSx3Q0FDWFksSUFBQUEsd0JBQVcsRUFBQyxJQUFJLEVBQUVmLElBQUlnQixhQUFhO3dCQUN0Q2pCLE1BQUFBO3dCQUNBSixPQUFBQTs7b0JBR0VTLG9CQUFvQjtvQkFFeEIsSUFBSVgsT0FBTzt3QkFDSFksY0FBY1ksSUFBQUEsaUNBQXVCLEVBQUN4Qjt3QkFDNUNXLG9CQUFvQkMsWUFBWWEsSUFBSSxDQUFDLFNBQUNDO21DQUFTQyxPQUFPQyxJQUFJLENBQUNGLE1BQU1ELElBQUksQ0FBQyxTQUFDSTt1Q0FBUUEsUUFBUTs7O29CQUN6RjtvQkFHQSxJQUFJLENBQUNsQixtQkFBbUI7d0JBQ3RCRSxPQUFPaUIsSUFBQUEsOEJBQWMsRUFBQzs0QkFDcEJqQixNQUFNVixXQUFXOzRCQUNqQjRCLFFBQVF0QixpQkFBaUJzQixNQUFNOzRCQUMvQkMsWUFBWTs0QkFDWlgsUUFBUSxJQUFJLENBQUNGLE9BQU8sQ0FBQ0UsTUFBTTs0QkFDM0JqQixRQUFBQTt3QkFDRjtvQkFDRjtvQkFFYzs7d0JBQU1JLE1BQU15QixVQUFVLENBQUM7NEJBQ25DZCxTQUFTLElBQUksQ0FBQ0EsT0FBTzs0QkFDckJmLFFBQUFBOzRCQUNBSixPQUFBQTt3QkFDRjs7O29CQUpNYyxRQUFRO29CQU1SQyxvQkFBcUM7d0JBQ3pDZCxNQUFBQTt3QkFDQVksTUFBQUE7d0JBQ0FYLE9BQUFBO3dCQUNBZ0MsTUFBTTt3QkFDTkMsWUFBWTt3QkFDWjlCLFlBQUFBO3dCQUNBK0IsUUFBUTlCO3dCQUNSK0IsbUJBQW1CMUI7d0JBQ25CMkIsY0FBYzNCO3dCQUNkRCxTQUFBQTtvQkFDRjtvQkFFQSxJQUFJUixRQUFRLEdBQUc7d0JBQ2JhLGtCQUFrQmIsS0FBSyxHQUFHQTt3QkFDMUIscUVBQXFFO3dCQUNyRWEsa0JBQWtCTCxPQUFPLENBQUNSLEtBQUssR0FBR0E7b0JBQ3BDO29CQUVlOzt3QkFBTU0sTUFBTStCLFFBQVEsQ0FBQ3pCLE9BQU9DOzs7b0JBQXJDQyxTQUFTO29CQUNUQyxPQUFPdUIsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUMxQixPQUFPQyxJQUFJO29CQUVsRDs7d0JBQU8sd0NBQ0ZEOzRCQUNIQyxNQUFNQSxLQUFLMEIsR0FBRyxDQUFDLFNBQUNDO2dDQUNkLDZDQUE2QztnQ0FDN0NBLElBQUlDLEVBQUUsR0FBR0QsSUFBSUUsR0FBRztnQ0FDaEIsT0FBT0MsSUFBQUEsK0JBQXNCLEVBQUNIOzRCQUNoQzs7Ozs7SUFFSjthQTVFeUQ5QyxhQUV2RCxDQVVDO2VBWnNEQTs7V0FBQUEifQ==