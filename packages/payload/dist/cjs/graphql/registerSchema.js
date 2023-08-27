/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return registerGraphQLSchema;
    }
});
var _graphql = /*#__PURE__*/ _interop_require_wildcard(require("graphql"));
var _graphqlquerycomplexity = /*#__PURE__*/ _interop_require_wildcard(require("graphql-query-complexity"));
var _buildLocaleInputType = /*#__PURE__*/ _interop_require_default(require("./schema/buildLocaleInputType"));
var _buildFallbackLocaleInputType = /*#__PURE__*/ _interop_require_default(require("./schema/buildFallbackLocaleInputType"));
var _init = /*#__PURE__*/ _interop_require_default(require("../collections/graphql/init"));
var _init1 = /*#__PURE__*/ _interop_require_default(require("../globals/graphql/init"));
var _buildPoliciesType = /*#__PURE__*/ _interop_require_default(require("./schema/buildPoliciesType"));
var _access = /*#__PURE__*/ _interop_require_default(require("../auth/graphql/resolvers/access"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
function registerGraphQLSchema(payload) {
    payload.types = {
        blockTypes: {},
        blockInputTypes: {},
        groupTypes: {},
        arrayTypes: {},
        tabTypes: {}
    };
    if (payload.config.localization) {
        payload.types.localeInputType = (0, _buildLocaleInputType.default)(payload.config.localization);
        payload.types.fallbackLocaleInputType = (0, _buildFallbackLocaleInputType.default)(payload.config.localization);
    }
    payload.Query = {
        name: "Query",
        fields: {}
    };
    payload.Mutation = {
        name: "Mutation",
        fields: {}
    };
    (0, _init.default)(payload);
    (0, _init1.default)(payload);
    payload.Query.fields.Access = {
        type: (0, _buildPoliciesType.default)(payload),
        resolve: (0, _access.default)(payload)
    };
    if (typeof payload.config.graphQL.queries === "function") {
        var customQueries = payload.config.graphQL.queries(_graphql, payload);
        payload.Query = _object_spread_props(_object_spread({}, payload.Query), {
            fields: _object_spread({}, payload.Query.fields, customQueries || {})
        });
    }
    if (typeof payload.config.graphQL.mutations === "function") {
        var customMutations = payload.config.graphQL.mutations(_graphql, payload);
        payload.Mutation = _object_spread_props(_object_spread({}, payload.Mutation), {
            fields: _object_spread({}, payload.Mutation.fields, customMutations || {})
        });
    }
    var query = new _graphql.GraphQLObjectType(payload.Query);
    var mutation = new _graphql.GraphQLObjectType(payload.Mutation);
    var schema = {
        query: query,
        mutation: mutation
    };
    payload.schema = new _graphql.GraphQLSchema(schema);
    payload.validationRules = function(param) {
        var variableValues = param.variableValues;
        return [
            (0, _graphqlquerycomplexity.default)({
                estimators: [
                    (0, _graphqlquerycomplexity.fieldExtensionsEstimator)(),
                    (0, _graphqlquerycomplexity.simpleEstimator)({
                        defaultComplexity: 1
                    })
                ],
                maximumComplexity: payload.config.graphQL.maxComplexity,
                variables: variableValues
            })
        ];
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3JlZ2lzdGVyU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgKiBhcyBHcmFwaFFMIGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxTY2hlbWEgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBxdWVyeUNvbXBsZXhpdHksIHsgZmllbGRFeHRlbnNpb25zRXN0aW1hdG9yLCBzaW1wbGVFc3RpbWF0b3IgfSBmcm9tICdncmFwaHFsLXF1ZXJ5LWNvbXBsZXhpdHknO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnO1xuaW1wb3J0IGJ1aWxkTG9jYWxlSW5wdXRUeXBlIGZyb20gJy4vc2NoZW1hL2J1aWxkTG9jYWxlSW5wdXRUeXBlJztcbmltcG9ydCBidWlsZEZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIGZyb20gJy4vc2NoZW1hL2J1aWxkRmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUnO1xuaW1wb3J0IGluaXRDb2xsZWN0aW9ucyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncmFwaHFsL2luaXQnO1xuaW1wb3J0IGluaXRHbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMvZ3JhcGhxbC9pbml0JztcbmltcG9ydCBidWlsZFBvbGljaWVzVHlwZSBmcm9tICcuL3NjaGVtYS9idWlsZFBvbGljaWVzVHlwZSc7XG5pbXBvcnQgYWNjZXNzUmVzb2x2ZXIgZnJvbSAnLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9hY2Nlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlckdyYXBoUUxTY2hlbWEocGF5bG9hZDogUGF5bG9hZCk6IHZvaWQge1xuICBwYXlsb2FkLnR5cGVzID0ge1xuICAgIGJsb2NrVHlwZXM6IHt9LFxuICAgIGJsb2NrSW5wdXRUeXBlczoge30sXG4gICAgZ3JvdXBUeXBlczoge30sXG4gICAgYXJyYXlUeXBlczoge30sXG4gICAgdGFiVHlwZXM6IHt9LFxuICB9O1xuXG4gIGlmIChwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24pIHtcbiAgICBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSA9IGJ1aWxkTG9jYWxlSW5wdXRUeXBlKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbik7XG4gICAgcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSA9IGJ1aWxkRmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uKTtcbiAgfVxuXG4gIHBheWxvYWQuUXVlcnkgPSB7XG4gICAgbmFtZTogJ1F1ZXJ5JyxcbiAgICBmaWVsZHM6IHt9LFxuICB9O1xuXG4gIHBheWxvYWQuTXV0YXRpb24gPSB7XG4gICAgbmFtZTogJ011dGF0aW9uJyxcbiAgICBmaWVsZHM6IHt9LFxuICB9O1xuXG4gIGluaXRDb2xsZWN0aW9ucyhwYXlsb2FkKTtcbiAgaW5pdEdsb2JhbHMocGF5bG9hZCk7XG5cbiAgcGF5bG9hZC5RdWVyeS5maWVsZHMuQWNjZXNzID0ge1xuICAgIHR5cGU6IGJ1aWxkUG9saWNpZXNUeXBlKHBheWxvYWQpLFxuICAgIHJlc29sdmU6IGFjY2Vzc1Jlc29sdmVyKHBheWxvYWQpLFxuICB9O1xuXG4gIGlmICh0eXBlb2YgcGF5bG9hZC5jb25maWcuZ3JhcGhRTC5xdWVyaWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgY3VzdG9tUXVlcmllcyA9IHBheWxvYWQuY29uZmlnLmdyYXBoUUwucXVlcmllcyhHcmFwaFFMLCBwYXlsb2FkKTtcbiAgICBwYXlsb2FkLlF1ZXJ5ID0ge1xuICAgICAgLi4ucGF5bG9hZC5RdWVyeSxcbiAgICAgIGZpZWxkczoge1xuICAgICAgICAuLi5wYXlsb2FkLlF1ZXJ5LmZpZWxkcyxcbiAgICAgICAgLi4uKGN1c3RvbVF1ZXJpZXMgfHwge30pLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXlsb2FkLmNvbmZpZy5ncmFwaFFMLm11dGF0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGN1c3RvbU11dGF0aW9ucyA9IHBheWxvYWQuY29uZmlnLmdyYXBoUUwubXV0YXRpb25zKEdyYXBoUUwsIHBheWxvYWQpO1xuICAgIHBheWxvYWQuTXV0YXRpb24gPSB7XG4gICAgICAuLi5wYXlsb2FkLk11dGF0aW9uLFxuICAgICAgZmllbGRzOiB7XG4gICAgICAgIC4uLnBheWxvYWQuTXV0YXRpb24uZmllbGRzLFxuICAgICAgICAuLi4oY3VzdG9tTXV0YXRpb25zIHx8IHt9KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHBheWxvYWQuUXVlcnkpO1xuICBjb25zdCBtdXRhdGlvbiA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZShwYXlsb2FkLk11dGF0aW9uKTtcblxuICBjb25zdCBzY2hlbWEgPSB7XG4gICAgcXVlcnksXG4gICAgbXV0YXRpb24sXG4gIH07XG5cbiAgcGF5bG9hZC5zY2hlbWEgPSBuZXcgR3JhcGhRTFNjaGVtYShzY2hlbWEpO1xuXG4gIHBheWxvYWQudmFsaWRhdGlvblJ1bGVzID0gKHsgdmFyaWFibGVWYWx1ZXMgfSkgPT4gKFtcbiAgICBxdWVyeUNvbXBsZXhpdHkoe1xuICAgICAgZXN0aW1hdG9yczogW1xuICAgICAgICBmaWVsZEV4dGVuc2lvbnNFc3RpbWF0b3IoKSxcbiAgICAgICAgc2ltcGxlRXN0aW1hdG9yKHsgZGVmYXVsdENvbXBsZXhpdHk6IDEgfSksIC8vIEZhbGxiYWNrIGlmIGNvbXBsZXhpdHkgbm90IHNldFxuICAgICAgXSxcbiAgICAgIG1heGltdW1Db21wbGV4aXR5OiBwYXlsb2FkLmNvbmZpZy5ncmFwaFFMLm1heENvbXBsZXhpdHksXG4gICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlVmFsdWVzLFxuICAgICAgLy8gb25Db21wbGV0ZTogKGNvbXBsZXhpdHkpID0+IHsgY29uc29sZS5sb2coJ1F1ZXJ5IENvbXBsZXhpdHk6JywgY29tcGxleGl0eSk7IH0sXG4gICAgfSksXG4gIF0pO1xufVxuIl0sIm5hbWVzIjpbInJlZ2lzdGVyR3JhcGhRTFNjaGVtYSIsInBheWxvYWQiLCJ0eXBlcyIsImJsb2NrVHlwZXMiLCJibG9ja0lucHV0VHlwZXMiLCJncm91cFR5cGVzIiwiYXJyYXlUeXBlcyIsInRhYlR5cGVzIiwiY29uZmlnIiwibG9jYWxpemF0aW9uIiwibG9jYWxlSW5wdXRUeXBlIiwiYnVpbGRMb2NhbGVJbnB1dFR5cGUiLCJmYWxsYmFja0xvY2FsZUlucHV0VHlwZSIsImJ1aWxkRmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUiLCJRdWVyeSIsIm5hbWUiLCJmaWVsZHMiLCJNdXRhdGlvbiIsImluaXRDb2xsZWN0aW9ucyIsImluaXRHbG9iYWxzIiwiQWNjZXNzIiwidHlwZSIsImJ1aWxkUG9saWNpZXNUeXBlIiwicmVzb2x2ZSIsImFjY2Vzc1Jlc29sdmVyIiwiZ3JhcGhRTCIsInF1ZXJpZXMiLCJjdXN0b21RdWVyaWVzIiwiR3JhcGhRTCIsIm11dGF0aW9ucyIsImN1c3RvbU11dGF0aW9ucyIsInF1ZXJ5IiwiR3JhcGhRTE9iamVjdFR5cGUiLCJtdXRhdGlvbiIsInNjaGVtYSIsIkdyYXBoUUxTY2hlbWEiLCJ2YWxpZGF0aW9uUnVsZXMiLCJ2YXJpYWJsZVZhbHVlcyIsInF1ZXJ5Q29tcGxleGl0eSIsImVzdGltYXRvcnMiLCJmaWVsZEV4dGVuc2lvbnNFc3RpbWF0b3IiLCJzaW1wbGVFc3RpbWF0b3IiLCJkZWZhdWx0Q29tcGxleGl0eSIsIm1heGltdW1Db21wbGV4aXR5IiwibWF4Q29tcGxleGl0eSIsInZhcmlhYmxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQVlwQzs7O2VBQXdCQTs7OytEQVhDOzhFQUVrRDsyRUFFMUM7bUZBQ1E7MkRBQ2I7NERBQ0o7d0VBQ007NkRBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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