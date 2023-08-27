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
export var find = function() {
    var _find = _async_to_generator(function(param) {
        var collection, where, page, limit, sortArg, locale, pagination, _param_req, req, Model, collectionConfig, options, hasNearConstraint, constraints, sort, query, paginationOptions, result, docs;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, where = param.where, page = param.page, limit = param.limit, sortArg = param.sort, locale = param.locale, pagination = param.pagination, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.collections[collection];
                    collectionConfig = this.payload.collections[collection].config;
                    options = withSession(this, req.transactionID);
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
                        lean: true,
                        leanWithId: true,
                        useEstimatedCount: hasNearConstraint,
                        forceCountFn: hasNearConstraint,
                        pagination: pagination,
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
                                return sanitizeInternalFields(doc);
                            })
                        })
                    ];
            }
        });
    });
    function find(_) {
        return _find.apply(this, arguments);
    }
    return find;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUGFnaW5hdGVPcHRpb25zIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHR5cGUgeyBGaW5kIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgeyBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCBzYW5pdGl6ZUludGVybmFsRmllbGRzIGZyb20gJy4vdXRpbGl0aWVzL3Nhbml0aXplSW50ZXJuYWxGaWVsZHMnO1xuaW1wb3J0IHsgYnVpbGRTb3J0UGFyYW0gfSBmcm9tICcuL3F1ZXJpZXMvYnVpbGRTb3J0UGFyYW0nO1xuaW1wb3J0IHR5cGUgeyBNb25nb29zZUFkYXB0ZXIgfSBmcm9tICcuJztcbmltcG9ydCB7IHdpdGhTZXNzaW9uIH0gZnJvbSAnLi93aXRoU2Vzc2lvbic7XG5cbmV4cG9ydCBjb25zdCBmaW5kOiBGaW5kID0gYXN5bmMgZnVuY3Rpb24gZmluZChcbiAgdGhpczogTW9uZ29vc2VBZGFwdGVyLFxuICB7XG4gICAgY29sbGVjdGlvbixcbiAgICB3aGVyZSxcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIHNvcnQ6IHNvcnRBcmcsXG4gICAgbG9jYWxlLFxuICAgIHBhZ2luYXRpb24sXG4gICAgcmVxID0ge30gYXMgUGF5bG9hZFJlcXVlc3QsXG4gIH0sXG4pIHtcbiAgY29uc3QgTW9kZWwgPSB0aGlzLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25dO1xuICBjb25zdCBjb2xsZWN0aW9uQ29uZmlnID0gdGhpcy5wYXlsb2FkLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25dLmNvbmZpZztcbiAgY29uc3Qgb3B0aW9ucyA9IHdpdGhTZXNzaW9uKHRoaXMsIHJlcS50cmFuc2FjdGlvbklEKTtcblxuICBsZXQgaGFzTmVhckNvbnN0cmFpbnQgPSBmYWxzZTtcblxuICBpZiAod2hlcmUpIHtcbiAgICBjb25zdCBjb25zdHJhaW50cyA9IGZsYXR0ZW5XaGVyZVRvT3BlcmF0b3JzKHdoZXJlKTtcbiAgICBoYXNOZWFyQ29uc3RyYWludCA9IGNvbnN0cmFpbnRzLnNvbWUoKHByb3ApID0+IE9iamVjdC5rZXlzKHByb3ApLnNvbWUoKGtleSkgPT4ga2V5ID09PSAnbmVhcicpKTtcbiAgfVxuXG4gIGxldCBzb3J0O1xuICBpZiAoIWhhc05lYXJDb25zdHJhaW50KSB7XG4gICAgc29ydCA9IGJ1aWxkU29ydFBhcmFtKHtcbiAgICAgIHNvcnQ6IHNvcnRBcmcgfHwgY29sbGVjdGlvbkNvbmZpZy5kZWZhdWx0U29ydCxcbiAgICAgIGZpZWxkczogY29sbGVjdGlvbkNvbmZpZy5maWVsZHMsXG4gICAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgICAgY29uZmlnOiB0aGlzLnBheWxvYWQuY29uZmlnLFxuICAgICAgbG9jYWxlLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBNb2RlbC5idWlsZFF1ZXJ5KHtcbiAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQsXG4gICAgbG9jYWxlLFxuICAgIHdoZXJlLFxuICB9KTtcblxuICBjb25zdCBwYWdpbmF0aW9uT3B0aW9uczogUGFnaW5hdGVPcHRpb25zID0ge1xuICAgIHBhZ2UsXG4gICAgc29ydCxcbiAgICBsZWFuOiB0cnVlLFxuICAgIGxlYW5XaXRoSWQ6IHRydWUsXG4gICAgdXNlRXN0aW1hdGVkQ291bnQ6IGhhc05lYXJDb25zdHJhaW50LFxuICAgIGZvcmNlQ291bnRGbjogaGFzTmVhckNvbnN0cmFpbnQsXG4gICAgcGFnaW5hdGlvbixcbiAgICBvcHRpb25zLFxuICB9O1xuXG4gIGlmIChsaW1pdCA+IDApIHtcbiAgICBwYWdpbmF0aW9uT3B0aW9ucy5saW1pdCA9IGxpbWl0O1xuICAgIC8vIGxpbWl0IG11c3QgYWxzbyBiZSBzZXQgaGVyZSwgaXQncyBpZ25vcmVkIHdoZW4gcGFnaW5hdGlvbiBpcyBmYWxzZVxuICAgIHBhZ2luYXRpb25PcHRpb25zLm9wdGlvbnMubGltaXQgPSBsaW1pdDtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IE1vZGVsLnBhZ2luYXRlKHF1ZXJ5LCBwYWdpbmF0aW9uT3B0aW9ucyk7XG4gIGNvbnN0IGRvY3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kb2NzKSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZXN1bHQsXG4gICAgZG9jczogZG9jcy5tYXAoKGRvYykgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBkb2MuaWQgPSBkb2MuX2lkO1xuICAgICAgcmV0dXJuIHNhbml0aXplSW50ZXJuYWxGaWVsZHMoZG9jKTtcbiAgICB9KSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiZmxhdHRlbldoZXJlVG9PcGVyYXRvcnMiLCJzYW5pdGl6ZUludGVybmFsRmllbGRzIiwiYnVpbGRTb3J0UGFyYW0iLCJ3aXRoU2Vzc2lvbiIsImZpbmQiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJwYWdlIiwibGltaXQiLCJzb3J0QXJnIiwibG9jYWxlIiwicGFnaW5hdGlvbiIsInJlcSIsIk1vZGVsIiwiY29sbGVjdGlvbkNvbmZpZyIsIm9wdGlvbnMiLCJoYXNOZWFyQ29uc3RyYWludCIsImNvbnN0cmFpbnRzIiwic29ydCIsInF1ZXJ5IiwicGFnaW5hdGlvbk9wdGlvbnMiLCJyZXN1bHQiLCJkb2NzIiwiY29sbGVjdGlvbnMiLCJwYXlsb2FkIiwiY29uZmlnIiwidHJhbnNhY3Rpb25JRCIsInNvbWUiLCJwcm9wIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImRlZmF1bHRTb3J0IiwiZmllbGRzIiwidGltZXN0YW1wcyIsImJ1aWxkUXVlcnkiLCJsZWFuIiwibGVhbldpdGhJZCIsInVzZUVzdGltYXRlZENvdW50IiwiZm9yY2VDb3VudEZuIiwicGFnaW5hdGUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJtYXAiLCJkb2MiLCJpZCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSx1QkFBdUIsUUFBUSxtQkFBbUI7QUFFM0QsT0FBT0MsNEJBQTRCLHFDQUFxQztBQUN4RSxTQUFTQyxjQUFjLFFBQVEsMkJBQTJCO0FBRTFELFNBQVNDLFdBQVcsUUFBUSxnQkFBZ0I7QUFFNUMsT0FBTyxJQUFNQztRQUE0QkEsUUFBZixvQkFBQSxTQUV4QixLQVNDO1lBUkNDLFlBQ0FDLE9BQ0FDLE1BQ0FDLE9BQ01DLFNBQ05DLFFBQ0FDLHdCQUNBQyxLQUdJQyxPQUNBQyxrQkFDQUMsU0FFRkMsbUJBR0lDLGFBSUpDLE1BV0VDLE9BTUFDLG1CQWlCQUMsUUFDQUM7Ozs7b0JBeERKakIsYUFERixNQUNFQSxZQUNBQyxRQUZGLE1BRUVBLE9BQ0FDLE9BSEYsTUFHRUEsTUFDQUMsUUFKRixNQUlFQSxPQUNNQyxVQUxSLE1BS0VTLE1BQ0FSLFNBTkYsTUFNRUEsUUFDQUMsYUFQRixNQU9FQSx5QkFQRixNQVFFQyxLQUFBQSw4QkFBTSxDQUFDO29CQUdIQyxRQUFRLElBQUksQ0FBQ1UsV0FBVyxDQUFDbEIsV0FBVztvQkFDcENTLG1CQUFtQixJQUFJLENBQUNVLE9BQU8sQ0FBQ0QsV0FBVyxDQUFDbEIsV0FBVyxDQUFDb0IsTUFBTTtvQkFDOURWLFVBQVVaLFlBQVksSUFBSSxFQUFFUyxJQUFJYyxhQUFhO29CQUUvQ1Ysb0JBQW9CO29CQUV4QixJQUFJVixPQUFPO3dCQUNIVyxjQUFjakIsd0JBQXdCTTt3QkFDNUNVLG9CQUFvQkMsWUFBWVUsSUFBSSxDQUFDLFNBQUNDO21DQUFTQyxPQUFPQyxJQUFJLENBQUNGLE1BQU1ELElBQUksQ0FBQyxTQUFDSTt1Q0FBUUEsUUFBUTs7O29CQUN6RjtvQkFHQSxJQUFJLENBQUNmLG1CQUFtQjt3QkFDdEJFLE9BQU9oQixlQUFlOzRCQUNwQmdCLE1BQU1ULFdBQVdLLGlCQUFpQmtCLFdBQVc7NEJBQzdDQyxRQUFRbkIsaUJBQWlCbUIsTUFBTTs0QkFDL0JDLFlBQVk7NEJBQ1pULFFBQVEsSUFBSSxDQUFDRCxPQUFPLENBQUNDLE1BQU07NEJBQzNCZixRQUFBQTt3QkFDRjtvQkFDRjtvQkFFYzs7d0JBQU1HLE1BQU1zQixVQUFVLENBQUM7NEJBQ25DWCxTQUFTLElBQUksQ0FBQ0EsT0FBTzs0QkFDckJkLFFBQUFBOzRCQUNBSixPQUFBQTt3QkFDRjs7O29CQUpNYSxRQUFRO29CQU1SQyxvQkFBcUM7d0JBQ3pDYixNQUFBQTt3QkFDQVcsTUFBQUE7d0JBQ0FrQixNQUFNO3dCQUNOQyxZQUFZO3dCQUNaQyxtQkFBbUJ0Qjt3QkFDbkJ1QixjQUFjdkI7d0JBQ2RMLFlBQUFBO3dCQUNBSSxTQUFBQTtvQkFDRjtvQkFFQSxJQUFJUCxRQUFRLEdBQUc7d0JBQ2JZLGtCQUFrQlosS0FBSyxHQUFHQTt3QkFDMUIscUVBQXFFO3dCQUNyRVksa0JBQWtCTCxPQUFPLENBQUNQLEtBQUssR0FBR0E7b0JBQ3BDO29CQUVlOzt3QkFBTUssTUFBTTJCLFFBQVEsQ0FBQ3JCLE9BQU9DOzs7b0JBQXJDQyxTQUFTO29CQUNUQyxPQUFPbUIsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUN0QixPQUFPQyxJQUFJO29CQUVsRDs7d0JBQU8sd0NBQ0ZEOzRCQUNIQyxNQUFNQSxLQUFLc0IsR0FBRyxDQUFDLFNBQUNDO2dDQUNkLDZDQUE2QztnQ0FDN0NBLElBQUlDLEVBQUUsR0FBR0QsSUFBSUUsR0FBRztnQ0FDaEIsT0FBTzlDLHVCQUF1QjRDOzRCQUNoQzs7Ozs7SUFFSjthQXJFeUN6QyxLQUV2QyxDQVNDO2VBWHNDQTs7V0FBQUE7SUFxRXZDIn0=