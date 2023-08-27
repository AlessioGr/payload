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
export var findVersions = function() {
    var _findVersions = _async_to_generator(function(param) {
        var collection, where, page, limit, sortArg, locale, pagination, skip, _param_req, req, Model, collectionConfig, options, hasNearConstraint, constraints, sort, query, paginationOptions, result, docs;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, where = param.where, page = param.page, limit = param.limit, sortArg = param.sort, locale = param.locale, pagination = param.pagination, skip = param.skip, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.versions[collection];
                    collectionConfig = this.payload.collections[collection].config;
                    options = _object_spread_props(_object_spread({}, withSession(this, req.transactionID)), {
                        skip: skip,
                        limit: limit
                    });
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
                                return sanitizeInternalFields(doc);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maW5kVmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnaW5hdGVPcHRpb25zIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHR5cGUgeyBGaW5kVmVyc2lvbnMgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCB7IGZsYXR0ZW5XaGVyZVRvT3BlcmF0b3JzIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHNhbml0aXplSW50ZXJuYWxGaWVsZHMgZnJvbSAnLi91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcyc7XG5pbXBvcnQgdHlwZSB7IE1vbmdvb3NlQWRhcHRlciB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYnVpbGRTb3J0UGFyYW0gfSBmcm9tICcuL3F1ZXJpZXMvYnVpbGRTb3J0UGFyYW0nO1xuaW1wb3J0IHsgd2l0aFNlc3Npb24gfSBmcm9tICcuL3dpdGhTZXNzaW9uJztcblxuZXhwb3J0IGNvbnN0IGZpbmRWZXJzaW9uczogRmluZFZlcnNpb25zID0gYXN5bmMgZnVuY3Rpb24gZmluZFZlcnNpb25zKFxuICB0aGlzOiBNb25nb29zZUFkYXB0ZXIsXG4gIHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIHdoZXJlLFxuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgc29ydDogc29ydEFyZyxcbiAgICBsb2NhbGUsXG4gICAgcGFnaW5hdGlvbixcbiAgICBza2lwLFxuICAgIHJlcSA9IHt9IGFzIFBheWxvYWRSZXF1ZXN0LFxuICB9LFxuKSB7XG4gIGNvbnN0IE1vZGVsID0gdGhpcy52ZXJzaW9uc1tjb2xsZWN0aW9uXTtcbiAgY29uc3QgY29sbGVjdGlvbkNvbmZpZyA9IHRoaXMucGF5bG9hZC5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uXS5jb25maWc7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ud2l0aFNlc3Npb24odGhpcywgcmVxLnRyYW5zYWN0aW9uSUQpLFxuICAgIHNraXAsXG4gICAgbGltaXQsXG4gIH07XG5cbiAgbGV0IGhhc05lYXJDb25zdHJhaW50ID0gZmFsc2U7XG5cbiAgaWYgKHdoZXJlKSB7XG4gICAgY29uc3QgY29uc3RyYWludHMgPSBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyh3aGVyZSk7XG4gICAgaGFzTmVhckNvbnN0cmFpbnQgPSBjb25zdHJhaW50cy5zb21lKChwcm9wKSA9PiBPYmplY3Qua2V5cyhwcm9wKS5zb21lKChrZXkpID0+IGtleSA9PT0gJ25lYXInKSk7XG4gIH1cblxuICBsZXQgc29ydDtcbiAgaWYgKCFoYXNOZWFyQ29uc3RyYWludCkge1xuICAgIHNvcnQgPSBidWlsZFNvcnRQYXJhbSh7XG4gICAgICBzb3J0OiBzb3J0QXJnIHx8ICctdXBkYXRlZEF0JyxcbiAgICAgIGZpZWxkczogY29sbGVjdGlvbkNvbmZpZy5maWVsZHMsXG4gICAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgICAgY29uZmlnOiB0aGlzLnBheWxvYWQuY29uZmlnLFxuICAgICAgbG9jYWxlLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcXVlcnkgPSBhd2FpdCBNb2RlbC5idWlsZFF1ZXJ5KHtcbiAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQsXG4gICAgbG9jYWxlLFxuICAgIHdoZXJlLFxuICB9KTtcblxuICBjb25zdCBwYWdpbmF0aW9uT3B0aW9uczogUGFnaW5hdGVPcHRpb25zID0ge1xuICAgIHBhZ2UsXG4gICAgc29ydCxcbiAgICBsaW1pdCxcbiAgICBsZWFuOiB0cnVlLFxuICAgIGxlYW5XaXRoSWQ6IHRydWUsXG4gICAgcGFnaW5hdGlvbixcbiAgICBvZmZzZXQ6IHNraXAsXG4gICAgdXNlRXN0aW1hdGVkQ291bnQ6IGhhc05lYXJDb25zdHJhaW50LFxuICAgIGZvcmNlQ291bnRGbjogaGFzTmVhckNvbnN0cmFpbnQsXG4gICAgb3B0aW9ucyxcbiAgfTtcblxuICBpZiAobGltaXQgPiAwKSB7XG4gICAgcGFnaW5hdGlvbk9wdGlvbnMubGltaXQgPSBsaW1pdDtcbiAgICAvLyBsaW1pdCBtdXN0IGFsc28gYmUgc2V0IGhlcmUsIGl0J3MgaWdub3JlZCB3aGVuIHBhZ2luYXRpb24gaXMgZmFsc2VcbiAgICBwYWdpbmF0aW9uT3B0aW9ucy5vcHRpb25zLmxpbWl0ID0gbGltaXQ7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBNb2RlbC5wYWdpbmF0ZShxdWVyeSwgcGFnaW5hdGlvbk9wdGlvbnMpO1xuICBjb25zdCBkb2NzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXN1bHQuZG9jcykpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVzdWx0LFxuICAgIGRvY3M6IGRvY3MubWFwKChkb2MpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgZG9jLmlkID0gZG9jLl9pZDtcbiAgICAgIHJldHVybiBzYW5pdGl6ZUludGVybmFsRmllbGRzKGRvYyk7XG4gICAgfSksXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImZsYXR0ZW5XaGVyZVRvT3BlcmF0b3JzIiwic2FuaXRpemVJbnRlcm5hbEZpZWxkcyIsImJ1aWxkU29ydFBhcmFtIiwid2l0aFNlc3Npb24iLCJmaW5kVmVyc2lvbnMiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJwYWdlIiwibGltaXQiLCJzb3J0QXJnIiwibG9jYWxlIiwicGFnaW5hdGlvbiIsInNraXAiLCJyZXEiLCJNb2RlbCIsImNvbGxlY3Rpb25Db25maWciLCJvcHRpb25zIiwiaGFzTmVhckNvbnN0cmFpbnQiLCJjb25zdHJhaW50cyIsInNvcnQiLCJxdWVyeSIsInBhZ2luYXRpb25PcHRpb25zIiwicmVzdWx0IiwiZG9jcyIsInZlcnNpb25zIiwicGF5bG9hZCIsImNvbGxlY3Rpb25zIiwiY29uZmlnIiwidHJhbnNhY3Rpb25JRCIsInNvbWUiLCJwcm9wIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImZpZWxkcyIsInRpbWVzdGFtcHMiLCJidWlsZFF1ZXJ5IiwibGVhbiIsImxlYW5XaXRoSWQiLCJvZmZzZXQiLCJ1c2VFc3RpbWF0ZWRDb3VudCIsImZvcmNlQ291bnRGbiIsInBhZ2luYXRlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibWFwIiwiZG9jIiwiaWQiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsdUJBQXVCLFFBQVEsbUJBQW1CO0FBRTNELE9BQU9DLDRCQUE0QixxQ0FBcUM7QUFFeEUsU0FBU0MsY0FBYyxRQUFRLDJCQUEyQjtBQUMxRCxTQUFTQyxXQUFXLFFBQVEsZ0JBQWdCO0FBRTVDLE9BQU8sSUFBTUM7UUFBNENBLGdCQUFmLG9CQUFBLFNBRXhDLEtBVUM7WUFUQ0MsWUFDQUMsT0FDQUMsTUFDQUMsT0FDTUMsU0FDTkMsUUFDQUMsWUFDQUMsa0JBQ0FDLEtBR0lDLE9BQ0FDLGtCQUNBQyxTQU1GQyxtQkFHSUMsYUFJSkMsTUFXRUMsT0FNQUMsbUJBbUJBQyxRQUNBQzs7OztvQkEvREpsQixhQURGLE1BQ0VBLFlBQ0FDLFFBRkYsTUFFRUEsT0FDQUMsT0FIRixNQUdFQSxNQUNBQyxRQUpGLE1BSUVBLE9BQ01DLFVBTFIsTUFLRVUsTUFDQVQsU0FORixNQU1FQSxRQUNBQyxhQVBGLE1BT0VBLFlBQ0FDLE9BUkYsTUFRRUEsbUJBUkYsTUFTRUMsS0FBQUEsOEJBQU0sQ0FBQztvQkFHSEMsUUFBUSxJQUFJLENBQUNVLFFBQVEsQ0FBQ25CLFdBQVc7b0JBQ2pDVSxtQkFBbUIsSUFBSSxDQUFDVSxPQUFPLENBQUNDLFdBQVcsQ0FBQ3JCLFdBQVcsQ0FBQ3NCLE1BQU07b0JBQzlEWCxVQUFVLHdDQUNYYixZQUFZLElBQUksRUFBRVUsSUFBSWUsYUFBYTt3QkFDdENoQixNQUFBQTt3QkFDQUosT0FBQUE7O29CQUdFUyxvQkFBb0I7b0JBRXhCLElBQUlYLE9BQU87d0JBQ0hZLGNBQWNsQix3QkFBd0JNO3dCQUM1Q1csb0JBQW9CQyxZQUFZVyxJQUFJLENBQUMsU0FBQ0M7bUNBQVNDLE9BQU9DLElBQUksQ0FBQ0YsTUFBTUQsSUFBSSxDQUFDLFNBQUNJO3VDQUFRQSxRQUFROzs7b0JBQ3pGO29CQUdBLElBQUksQ0FBQ2hCLG1CQUFtQjt3QkFDdEJFLE9BQU9qQixlQUFlOzRCQUNwQmlCLE1BQU1WLFdBQVc7NEJBQ2pCeUIsUUFBUW5CLGlCQUFpQm1CLE1BQU07NEJBQy9CQyxZQUFZOzRCQUNaUixRQUFRLElBQUksQ0FBQ0YsT0FBTyxDQUFDRSxNQUFNOzRCQUMzQmpCLFFBQUFBO3dCQUNGO29CQUNGO29CQUVjOzt3QkFBTUksTUFBTXNCLFVBQVUsQ0FBQzs0QkFDbkNYLFNBQVMsSUFBSSxDQUFDQSxPQUFPOzRCQUNyQmYsUUFBQUE7NEJBQ0FKLE9BQUFBO3dCQUNGOzs7b0JBSk1jLFFBQVE7b0JBTVJDLG9CQUFxQzt3QkFDekNkLE1BQUFBO3dCQUNBWSxNQUFBQTt3QkFDQVgsT0FBQUE7d0JBQ0E2QixNQUFNO3dCQUNOQyxZQUFZO3dCQUNaM0IsWUFBQUE7d0JBQ0E0QixRQUFRM0I7d0JBQ1I0QixtQkFBbUJ2Qjt3QkFDbkJ3QixjQUFjeEI7d0JBQ2RELFNBQUFBO29CQUNGO29CQUVBLElBQUlSLFFBQVEsR0FBRzt3QkFDYmEsa0JBQWtCYixLQUFLLEdBQUdBO3dCQUMxQixxRUFBcUU7d0JBQ3JFYSxrQkFBa0JMLE9BQU8sQ0FBQ1IsS0FBSyxHQUFHQTtvQkFDcEM7b0JBRWU7O3dCQUFNTSxNQUFNNEIsUUFBUSxDQUFDdEIsT0FBT0M7OztvQkFBckNDLFNBQVM7b0JBQ1RDLE9BQU9vQixLQUFLQyxLQUFLLENBQUNELEtBQUtFLFNBQVMsQ0FBQ3ZCLE9BQU9DLElBQUk7b0JBRWxEOzt3QkFBTyx3Q0FDRkQ7NEJBQ0hDLE1BQU1BLEtBQUt1QixHQUFHLENBQUMsU0FBQ0M7Z0NBQ2QsNkNBQTZDO2dDQUM3Q0EsSUFBSUMsRUFBRSxHQUFHRCxJQUFJRSxHQUFHO2dDQUNoQixPQUFPaEQsdUJBQXVCOEM7NEJBQ2hDOzs7OztJQUVKO2FBNUV5RDNDLGFBRXZELENBVUM7ZUFac0RBOztXQUFBQTtJQTRFdkQifQ==